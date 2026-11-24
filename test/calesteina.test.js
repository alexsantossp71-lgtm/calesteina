// Calistenia Pro - Suíte de testes automatizados
// Executar com: npm test  (ou node --test test/)
//
// Os arquivos JS são carregados como no navegador (scripts clássicos),
// usando vm.runInThisContext para expor as variáveis/globais no escopo atual.

const { test, describe, beforeEach } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');

// ---------------------------------------------------------------------------
// Ambiente (stubs de navegador)
// ---------------------------------------------------------------------------

const localStorageStub = {
    _store: {},
    getItem(key) { return Object.prototype.hasOwnProperty.call(this._store, key) ? this._store[key] : null; },
    setItem(key, value) { this._store[key] = String(value); },
    removeItem(key) { delete this._store[key]; }
};

global.window = {
    addEventListener() {},
    matchMedia() { return { matches: false }; }
};
global.document = {
    addEventListener() {},
    getElementById() { return null; },
    querySelectorAll() { return []; },
    createElement() { return { style: {}, setAttribute() {} }; },
    body: {},
    documentElement: {}
};
global.navigator = {};
global.localStorage = localStorageStub;

function loadDataFile(relPath) {
    const code = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
    vm.runInThisContext(code, { filename: relPath });
}

// Carrega na ordem usada pelas páginas
loadDataFile('exercises-data.js');
loadDataFile('script.js');

// Neutraliza toast/DOM pesado (usado por checkAll via setTimeout)
global.showToast = function () {};

function dateKeyDaysAgo(offset) {
    const d = new Date();
    d.setDate(d.getDate() - offset);
    return localDateKey(d);
}

// Semeia dias concluídos com datas de conclusão específicas.
function seedCompletedWithDates(dateKeys) {
    localStorageStub._store = {};
    const days = dateKeys.map((_, i) => i + 1);
    localStorageStub.setItem('calistenia_pro_completed_days', JSON.stringify(days));
    const dates = {};
    dateKeys.forEach((key, i) => { dates[i + 1] = key; });
    localStorageStub.setItem('calistenia_pro_completed_dates', JSON.stringify(dates));
}

// ---------------------------------------------------------------------------
// Programa 30 dias
// ---------------------------------------------------------------------------

describe('Programa 30 dias', () => {
    test('programData tem 4 fases e 30 dias no total', () => {
        const phases = Object.keys(programData).map(Number);
        assert.deepStrictEqual(phases, [1, 2, 3, 4]);
        const totalDays = Object.values(programData).reduce((sum, week) => sum + week.length, 0);
        assert.strictEqual(totalDays, 30);
    });

    test('todos os dias têm type, dia numérico e exercícios', () => {
        for (const [phase, days] of Object.entries(programData)) {
            for (const day of days) {
                assert.ok(day.type && day.type.length > 0, `fase ${phase} dia ${day.day} sem type`);
                assert.strictEqual(typeof day.day, 'number', `fase ${phase} com day não numérico`);
                assert.ok(Array.isArray(day.exercises) && day.exercises.length > 0, `fase ${phase} dia ${day.day} sem exercícios`);
                for (const ex of day.exercises) {
                    assert.ok(ex.name && ex.name.length > 0, `exercício sem nome na fase ${phase}`);
                    assert.ok(ex.reps && ex.reps.length > 0, `exercício "${ex.name}" sem reps`);
                }
            }
        }
    });

    test('dias são sequenciais (1..30)', () => {
        const allDays = Object.values(programData).flat().map(d => d.day);
        assert.deepStrictEqual(allDays, [...Array(30).keys()].map(i => i + 1));
    });
});

// ---------------------------------------------------------------------------
// Base de exercícios
// ---------------------------------------------------------------------------

describe('Base de exercícios (exercises-data.js)', () => {
    test('exerciseDB tem 32 exercícios + 1 entrada de descanso', () => {
        const keys = Object.keys(exerciseDB);
        assert.strictEqual(keys.length, 33);
        assert.strictEqual(keys.filter((k) => k !== 'descanso').length, 32);
    });

    test('todos os exercícios têm campos válidos', () => {
        for (const [id, ex] of Object.entries(exerciseDB)) {
            assert.ok(ex.name && ex.name.length > 0, `exercício ${id} sem nome`);
            assert.ok(ex.category && ex.category.length > 0, `exercício ${id} sem categoria`);
            assert.ok(ex.level && ex.level.length > 0, `exercício ${id} sem nível`);
            assert.ok(ex.purpose && ex.purpose.length > 0, `exercício ${id} sem propósito`);
            assert.ok(Array.isArray(ex.muscles) && ex.muscles.length > 0, `exercício ${id} sem músculos`);
            assert.ok(Array.isArray(ex.steps) && ex.steps.length >= 3, `exercício ${id} com menos de 3 passos`);
        }
    });
});

// ---------------------------------------------------------------------------
// Utilidades
// ---------------------------------------------------------------------------

describe('Utilidades', () => {
    test('localDateKey usa data local (não UTC)', () => {
        assert.strictEqual(localDateKey(new Date(2026, 0, 5, 23, 30)), '2026-01-05');
        assert.strictEqual(localDateKey(new Date(2026, 11, 31, 0, 5)), '2026-12-31');
        assert.strictEqual(WaterTracker.getTodayKey(), localDateKey(new Date()));
    });

    test('escapeHtml neutraliza HTML', () => {
        assert.strictEqual(
            escapeHtml('<b>"x" & \'y\'</b>'),
            '&lt;b&gt;&quot;x&quot; &amp; &#39;y&#39;&lt;/b&gt;'
        );
        assert.strictEqual(escapeHtml(null), '');
    });
});

// ---------------------------------------------------------------------------
// CalisteniaTracker (progresso de dias)
// ---------------------------------------------------------------------------

describe('CalisteniaTracker', () => {
    beforeEach(() => {
        localStorageStub._store = {};
    });

    test('começa vazio e getStreak retorna 0', () => {
        assert.deepStrictEqual(CalisteniaTracker.getCompletedDays(), []);
        assert.strictEqual(CalisteniaTracker.getStreak(), 0);
    });

    test('setDayCompleted persiste e registra a data de conclusão', () => {
        assert.strictEqual(CalisteniaTracker.setDayCompleted(1, true), true);
        assert.ok(CalisteniaTracker.isDayCompleted(1));
        assert.ok(!CalisteniaTracker.isDayCompleted(2));
        assert.strictEqual(CalisteniaTracker.getCompletionDates()[1], localDateKey());
    });

    test('concluir o mesmo dia duas vezes é idempotente (sem XP extra)', () => {
        CalisteniaTracker.setDayCompleted(1, true);
        const xpAfterFirst = XPSystem.getTotalXP();
        assert.strictEqual(CalisteniaTracker.setDayCompleted(1, true), false);
        assert.strictEqual(CalisteniaTracker.getCompletedDays().length, 1);
        assert.strictEqual(XPSystem.getTotalXP(), xpAfterFirst);
    });

    test('toggleDayCompleted alterna o estado', () => {
        assert.strictEqual(CalisteniaTracker.toggleDayCompleted(1), true);
        assert.strictEqual(CalisteniaTracker.toggleDayCompleted(1), false);
    });

    test('rejeita dias fora do programa', () => {
        assert.strictEqual(CalisteniaTracker.setDayCompleted(0, true), false);
        assert.strictEqual(CalisteniaTracker.setDayCompleted(31, true), false);
        assert.deepStrictEqual(CalisteniaTracker.getCompletedDays(), []);
    });

    test('ignora dados corrompidos no localStorage', () => {
        localStorageStub.setItem('calistenia_pro_completed_days', '{"a":1}');
        assert.deepStrictEqual(CalisteniaTracker.getCompletedDays(), []);
        localStorageStub.setItem('calistenia_pro_completed_days', '[1,"x",31,1]');
        assert.deepStrictEqual(CalisteniaTracker.getCompletedDays(), [1]);
    });

    test('getStreak conta dias de calendário consecutivos', () => {
        seedCompletedWithDates([dateKeyDaysAgo(0), dateKeyDaysAgo(1), dateKeyDaysAgo(2)]);
        assert.strictEqual(CalisteniaTracker.getStreak(), 3);
    });

    test('getStreak quebra em dias não consecutivos', () => {
        seedCompletedWithDates([dateKeyDaysAgo(0), dateKeyDaysAgo(2)]);
        assert.strictEqual(CalisteniaTracker.getStreak(), 1);
    });

    test('getStreak mantém a sequência de ontem antes de treinar hoje', () => {
        seedCompletedWithDates([dateKeyDaysAgo(1), dateKeyDaysAgo(2)]);
        assert.strictEqual(CalisteniaTracker.getStreak(), 2);
    });

    test('getStreak usa fallback antigo quando não há datas registradas', () => {
        localStorageStub.setItem('calistenia_pro_completed_days', '[1,2,3]');
        assert.strictEqual(CalisteniaTracker.getStreak(), 3);
    });

    test('getStreak mantém compatibilidade com dados parcialmente datados', () => {
        localStorageStub.setItem('calistenia_pro_completed_days', '[1,2,3]');
        localStorageStub.setItem('calistenia_pro_completed_dates', JSON.stringify({ 3: dateKeyDaysAgo(0) }));
        assert.strictEqual(CalisteniaTracker.getStreak(), 3);
    });

    test('dois dias do programa na mesma data contam como 1 dia de sequência', () => {
        CalisteniaTracker.setDayCompleted(1, true);
        CalisteniaTracker.setDayCompleted(2, true);
        assert.strictEqual(CalisteniaTracker.getStreak(), 1);
    });

    test('getTotalXP acompanha os dias e o nível vem do XPSystem', () => {
        for (let d = 1; d <= 5; d++) CalisteniaTracker.setDayCompleted(d, true);
        assert.strictEqual(CalisteniaTracker.getTotalXP(), 500);
        assert.strictEqual(XPSystem.getLevel(), 2);
    });

    test('resetProgress apaga progresso, XP, conquistas e rotinas', () => {
        CalisteniaTracker.setDayCompleted(1, true);
        CustomRoutines.saveRoutine('Rotina', [{ name: 'Flexão', reps: '3x10' }]);
        WaterTracker.addGlass();
        localStorage.setItem('calistenia_pro_used_calc', '1');
        Achievements.checkAll();

        CalisteniaTracker.resetProgress();

        assert.deepStrictEqual(CalisteniaTracker.getCompletedDays(), []);
        assert.deepStrictEqual(CalisteniaTracker.getCompletionDates(), {});
        assert.strictEqual(XPSystem.getTotalXP(), 0);
        assert.deepStrictEqual(Achievements.getUnlocked(), []);
        assert.strictEqual(CustomRoutines.getRoutines().length, 0);
        assert.strictEqual(WaterTracker.getToday(), 0);
        assert.strictEqual(localStorage.getItem('calistenia_pro_used_calc'), null);
    });
});

// ---------------------------------------------------------------------------
// XPSystem
// ---------------------------------------------------------------------------

describe('XPSystem', () => {
    beforeEach(() => {
        localStorageStub._store = {};
    });

    test('um dia concluído vale exatamente 100 XP', () => {
        CalisteniaTracker.setDayCompleted(1, true);
        assert.strictEqual(XPSystem.getTotalXP(), 100);
        CalisteniaTracker.setDayCompleted(1, false);
        assert.strictEqual(XPSystem.getTotalXP(), 0);
    });

    test('getXPForNext retorna progresso correto', () => {
        for (let d = 1; d <= 3; d++) CalisteniaTracker.setDayCompleted(d, true); // 300 XP
        const info = XPSystem.getXPForNext();
        assert.strictEqual(info.needed, 500);
        assert.strictEqual(info.total, 300);
        assert.strictEqual(info.current, 300);
        assert.strictEqual(info.nextThreshold, 500);
        assert.strictEqual(info.progress, 60);
    });

    test('getXPForNext zera a barra ao subir de nível', () => {
        for (let d = 1; d <= 5; d++) CalisteniaTracker.setDayCompleted(d, true); // 500 XP
        const info = XPSystem.getXPForNext();
        assert.strictEqual(XPSystem.getLevel(), 2);
        assert.strictEqual(info.current, 0);
        assert.strictEqual(info.progress, 0);
        assert.strictEqual(info.nextThreshold, 1000);
    });
});

// ---------------------------------------------------------------------------
// FavoritesManager
// ---------------------------------------------------------------------------

describe('FavoritesManager', () => {
    beforeEach(() => {
        localStorageStub._store = {};
    });

    test('toggle adiciona e remove favoritos', () => {
        assert.strictEqual(FavoritesManager.toggle('Flexão de Braço'), true);
        assert.strictEqual(FavoritesManager.isFav('Flexão de Braço'), true);
        assert.strictEqual(FavoritesManager.count(), 1);
        assert.strictEqual(FavoritesManager.toggle('Flexão de Braço'), false);
        assert.strictEqual(FavoritesManager.count(), 0);
    });
});

// ---------------------------------------------------------------------------
// WeightTracker
// ---------------------------------------------------------------------------

describe('WeightTracker', () => {
    beforeEach(() => {
        localStorageStub._store = {};
    });

    test('addEntry e getLatest', () => {
        assert.strictEqual(WeightTracker.addEntry(80), true);
        assert.strictEqual(WeightTracker.addEntry(79.5), true);
        assert.strictEqual(WeightTracker.getLatest(), 79.5);
        assert.strictEqual(WeightTracker.getHistory().length, 2);
    });

    test('rejeita pesos inválidos', () => {
        assert.strictEqual(WeightTracker.addEntry('abc'), false);
        assert.strictEqual(WeightTracker.addEntry(5), false);
        assert.strictEqual(WeightTracker.addEntry(500), false);
        assert.strictEqual(WeightTracker.getHistory().length, 0);
    });

    test('registra data local', () => {
        WeightTracker.addEntry(80);
        assert.strictEqual(WeightTracker.getHistory()[0].date, localDateKey());
    });
});

// ---------------------------------------------------------------------------
// WaterTracker
// ---------------------------------------------------------------------------

describe('WaterTracker', () => {
    beforeEach(() => {
        localStorageStub._store = {};
    });

    test('addGlass/removeGlass e limite de 8 copos', () => {
        for (let i = 0; i < 10; i++) WaterTracker.addGlass();
        assert.strictEqual(WaterTracker.getToday(), 8);
        WaterTracker.removeGlass();
        assert.strictEqual(WaterTracker.getToday(), 7);
    });

    test('setToday limita entre 0 e 8', () => {
        WaterTracker.setToday(99);
        assert.strictEqual(WaterTracker.getToday(), 8);
        WaterTracker.setToday(-1);
        assert.strictEqual(WaterTracker.getToday(), 0);
    });

    test('getWeekTotal soma apenas a semana atual', () => {
        WaterTracker.setToday(3);
        localStorageStub.setItem('calistenia_pro_water', JSON.stringify({
            [localDateKey()]: 3,
            [dateKeyDaysAgo(7)]: 8
        }));
        assert.strictEqual(WaterTracker.getWeekTotal(), 3);
    });
});

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------

describe('Achievements', () => {
    beforeEach(() => {
        localStorageStub._store = {};
    });

    test('tem 12 conquistas com checks válidos', () => {
        assert.strictEqual(Achievements.definitions.length, 12);
        for (const def of Achievements.definitions) {
            assert.ok(def.id && def.title && def.desc);
            assert.strictEqual(typeof def.check, 'function');
        }
    });

    test('checkAll desbloqueia "first" ao completar 1 dia', () => {
        CalisteniaTracker.setDayCompleted(1, true);
        const unlocked = Achievements.checkAll();
        assert.ok(unlocked.includes('first'));
    });

    test('progressFor "master30" chega a 100 com 30 dias', () => {
        for (let d = 1; d <= 30; d++) CalisteniaTracker.setDayCompleted(d, true);
        const def = Achievements.definitions.find(x => x.id === 'master30');
        assert.strictEqual(Achievements.progressFor(def), 100);
    });
});

// ---------------------------------------------------------------------------
// CustomRoutines
// ---------------------------------------------------------------------------

describe('CustomRoutines', () => {
    beforeEach(() => {
        localStorageStub._store = {};
    });

    test('saveRoutine, getRoutines e deleteRoutine', () => {
        CustomRoutines.saveRoutine('Meu Treino', [{ name: 'Flexão', reps: '3x10' }]);
        assert.strictEqual(CustomRoutines.getRoutines().length, 1);
        assert.strictEqual(CustomRoutines.getRoutines()[0].name, 'Meu Treino');
        CustomRoutines.deleteRoutine(0);
        assert.strictEqual(CustomRoutines.getRoutines().length, 0);
    });
});

// ---------------------------------------------------------------------------
// DataManager (backup)
// ---------------------------------------------------------------------------

describe('DataManager.validateBackup', () => {
    test('rejeita backups que não são objeto', () => {
        assert.throws(() => DataManager.validateBackup(null));
        assert.throws(() => DataManager.validateBackup([]));
        assert.throws(() => DataManager.validateBackup('texto'));
        assert.throws(() => DataManager.validateBackup(42));
    });

    test('sanitiza campos inválidos e ignora chaves desconhecidas', () => {
        const out = DataManager.validateBackup({
            completed: [0, 1, 31, '2', 2, 2],
            completedDates: { 1: '2026-01-01', 2: 'ontem', 99: '2026-01-02' },
            journal: { 1: 'a'.repeat(1500), 31: 'fora' },
            water: { '2026-01-01': 9, '2026-01-02': 3, bad: 2 },
            theme: 'neon',
            favorites: ['Flexão', 3],
            routines: [{ name: 'R', exercises: [{ name: 'Flexão', reps: '3x10' }, { semNome: true }] }],
            weight: [{ weight: 80 }, { weight: 5 }, { weight: 'x' }],
            script: '<script>alert(1)</script>'
        });

        assert.deepStrictEqual(out.completed, [1, 2]);
        assert.deepStrictEqual(out.completedDates, { 1: '2026-01-01' });
        assert.strictEqual(out.journal[1].length, 1000);
        assert.strictEqual(out.journal[31], undefined);
        assert.deepStrictEqual(out.water, { '2026-01-02': 3 });
        assert.strictEqual(out.theme, undefined);
        assert.deepStrictEqual(out.favorites, ['Flexão']);
        assert.strictEqual(out.routines.length, 1);
        assert.strictEqual(out.routines[0].exercises.length, 1);
        assert.strictEqual(out.weight.length, 1);
        assert.strictEqual(out.script, undefined);
    });

    test('aceita e normaliza campos válidos', () => {
        const out = DataManager.validateBackup({ theme: 'dark', used_calc: true, completed: [3, 1] });
        assert.strictEqual(out.theme, 'dark');
        assert.strictEqual(out.used_calc, true);
        assert.deepStrictEqual(out.completed, [3, 1]);
    });
});
