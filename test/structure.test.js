// Calistenia Pro — Testes de estrutura das páginas, PWA e assets.
// Rodam junto com `npm test` (node --test) e não precisam de dependências externas.

const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const PAGES = ['index.html', 'program.html', 'library.html', 'dashboard.html', 'calculator.html', 'exercise.html'];
const SCRIPT_FILES = ['script.js', 'exercises-data.js', 'sw.js'];

describe('Páginas: acessibilidade e SEO básicos', () => {
    PAGES.forEach((page) => {
        test(`${page} tem skip link, main e lang`, () => {
            const html = read(page);
            assert.match(html, /<html lang="pt-BR">/, 'lang pt-BR');
            assert.match(html, /class="skip-link"/, 'skip link');
            assert.match(html, /<main id="conteudo">/, 'landmark main');
            assert.match(html, /<\/main>/, 'main fechado');
        });

        test(`${page} não depende de fontes do Google`, () => {
            const html = read(page);
            assert.ok(!html.includes('fonts.googleapis.com'), 'sem link para fonts.googleapis');
            assert.match(html, /assets\/fonts\/inter-latin\.woff2/, 'preload da fonte local');
            assert.match(html, /rel="canonical"/, 'canonical presente');
        });

        test(`${page} tem título e description`, () => {
            const html = read(page);
            assert.match(html, /<title>[^<]{10,}<\/title>/, 'title');
            assert.match(html, /<meta name="description" content="[^"]{20,}"/, 'description');
        });
    });

    test('index não usa prova social inventada', () => {
        const html = read('index.html');
        ['5.000', '4.9★', 'Health Today', 'GQ Fitness', 'Marcos Silva', 'Ana Beatriz'].forEach((claim) => {
            assert.ok(!html.includes(claim), `claim fictício removido: ${claim}`);
        });
    });

    test('exercise.html não usa javascript: em links', () => {
        assert.ok(!read('exercise.html').includes('href="javascript:'));
    });
});

describe('Assets referenciados existem no repositório', () => {
    const collect = () => {
        const refs = new Set();
        const addFrom = (text) => {
            const regex = /assets\/[A-Za-z0-9_\-./]+\.(?:png|jpe?g|webp|woff2)/g;
            let m;
            while ((m = regex.exec(text)) !== null) refs.add(m[0]);
        };
        [...PAGES, ...SCRIPT_FILES, 'style.css', 'manifest.json'].forEach((file) => addFrom(read(file)));
        return [...refs];
    };

    test('nenhuma referência quebrada', () => {
        const missing = collect().filter((rel) => !fs.existsSync(path.join(ROOT, rel)));
        assert.deepStrictEqual(missing, [], `referências quebradas: ${missing.join(', ')}`);
    });

    test('ilustrações usam WebP', () => {
        assert.ok(fs.existsSync(path.join(ROOT, 'assets/img/pushup_start.webp')));
        assert.ok(!fs.existsSync(path.join(ROOT, 'assets/img/pushup_start.png')));
    });
});

describe('PWA', () => {
    test('manifest tem id, scope e start_url na raiz', () => {
        const manifest = JSON.parse(read('manifest.json'));
        assert.strictEqual(manifest.start_url, './');
        assert.strictEqual(manifest.scope, './');
        assert.ok(manifest.id, 'id presente');
        assert.ok(manifest.icons.some((i) => i.purpose === 'maskable'), 'ícone maskable');
    });

    test('service worker usa cache versionado e cobre fontes', () => {
        const sw = read('sw.js');
        assert.match(sw, /calistenia-pro-v\d+/);
        assert.ok(sw.includes('assets/fonts/inter-latin.woff2'));
        assert.ok(sw.includes('staleWhileRevalidate'), 'imagens com atualização em segundo plano');
    });
});

describe('Recursos novos existem no script', () => {
    test('módulos de histórico, instalação e backup', () => {
        const script = read('script.js');
        ['const ExerciseHistory', 'const InstallPrompt', 'const StorageHealth', 'const WakeLockManager', 'function getExercisePrescription'].forEach((name) => {
            assert.ok(script.includes(name), `definido: ${name}`);
        });
    });

    test('prescrição do exercício vem do programa', () => {
        const script = read('script.js');
        assert.match(script, /getExercisePrescription[\s\S]{0,400}programData/);
    });
});
