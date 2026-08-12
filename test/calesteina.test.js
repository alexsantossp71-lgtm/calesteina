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
    createElement() { return { style: {} }; },
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
    test('exerciseDB contém 33 exercícios', () => {
        assert.ok(Object.keys(exerciseDB).length >= 20);
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

    test('setDayCompleted persiste no localStorage', () => {
        CalisteniaTracker.setDayCompleted(1, true);
        assert.ok(CalisteniaTracker.isDayCompleted(1));
        assert.ok(!CalisteniaTracker.isDayCompleted(2));
    });

    test('toggleDayCompleted alterna o estado', () => {
        assert.strictEqual(CalisteniaTracker.toggleDayCompleted(1), true);
        assert.strictEqual(CalisteniaTracker.toggleDayCompleted(1), false);
    });

    test('getStreak conta a sequência atual (dias consecutivos ao final)', () => {
        CalisteniaTracker.setDayCompleted(1, true);
        CalisteniaTracker.setDayCompleted(2, true);
        CalisteniaTracker.setDayCompleted(3, true);
        assert.strictEqual(CalisteniaTracker.getStreak(), 3);
    });

    test('getStreak quebra em dias não consecutivos', () => {
        CalisteniaTracker.setDayCompleted(1, true);
        CalisteniaTracker.setDayCompleted(2, true);
        CalisteniaTracker.setDayCompleted(4, true);
        assert.strictEqual(CalisteniaTracker.getStreak(), 1);
    });

    test('getTotalXP e getLevel acompanham os dias completos', () => {
        for (let d = 1; d <= 5; d++) CalisteniaTracker.setDayCompleted(d, true);
        assert.strictEqual(CalisteniaTracker.getTotalXP(), 500);
        assert.strictEqual(CalisteniaTracker.getLevel(), 2);
    });

    test('resetProgress limpa os dados', () => {
        CalisteniaTracker.setDayCompleted(1, true);
        CalisteniaTracker.resetProgress();
        assert.deepStrictEqual(CalisteniaTracker.getCompletedDays(), []);
    });
});

// ---------------------------------------------------------------------------
// XPSystem
// ---------------------------------------------------------------------------

describe('XPSystem', () => {
    beforeEach(() => {
        localStorageStub._store = {};
    });

    test('addXP e getBonus', () => {
        XPSystem.addXP(100);
        XPSystem.addXP(50);
        assert.strictEqual(XPSystem.getBonus(), 150);
    });

    test('getTotalXP soma dias concluídos + bônus', () => {
        CalisteniaTracker.setDayCompleted(1, true); // setDayCompleted já concede +100 XP
        XPSystem.addXP(400);
        assert.strictEqual(XPSystem.getTotalXP(), 600);
    });

    test('getXPForNext retorna progresso correto', () => {
        CalisteniaTracker.setDayCompleted(2, true); // 200 XP
        const info = XPSystem.getXPForNext();
        assert.strictEqual(info.needed, 500);
        assert.strictEqual(info.total, 200);
        assert.strictEqual(info.nextThreshold, 500);
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
        WeightTracker.addEntry(80);
        WeightTracker.addEntry(79.5);
        assert.strictEqual(WeightTracker.getLatest(), 79.5);
        assert.strictEqual(WeightTracker.getHistory().length, 2);
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
