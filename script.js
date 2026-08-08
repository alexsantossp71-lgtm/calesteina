// Program Data (Desafio 30 Dias de Calistenia Pro)
const programData = {
    1: [
        {
            day: 1, type: "Full Body - Adaptação", exercises: [
                { name: "Flexão de Braço (Com Joelhos)", reps: "3 séries de 8-12" },
                { name: "Agachamento Livre", reps: "3 séries de 12-15" },
                { name: "Prancha Abdominal", reps: "3 séries de 20-30s" },
                { name: "Polichinelos", reps: "3 séries de 30s" }
            ]
        },
        {
            day: 2, type: "Descanso Ativo", exercises: [
                { name: "Caminhada Leve", reps: "20-30 min" },
                { name: "Alongamento Geral & Mobilidade", reps: "10 min" }
            ]
        },
        {
            day: 3, type: "Membros Superiores", exercises: [
                { name: "Flexão de Braço", reps: "3 séries de 8-10" },
                { name: "Mergulho no Banco (Dips)", reps: "3 séries de 10-12" },
                { name: "Prancha Alta com Toque no Ombro", reps: "3 séries de 10 cada lado" }
            ]
        },
        {
            day: 4, type: "Membros Inferiores", exercises: [
                { name: "Agachamento Sumô", reps: "3 séries de 12-15" },
                { name: "Afundo / Passada (Lunge)", reps: "3 séries de 10 cada perna" },
                { name: "Elevação de Panturrilha", reps: "3 séries de 15-20" }
            ]
        },
        { day: 5, type: "Descanso Ativo", exercises: [{ name: "Dia de Descanso & Recuperação Ativa", reps: "Sua meta é recuperar" }] },
        {
            day: 6, type: "Desafio de Teste", exercises: [
                { name: "Máximo de Flexões em 2 min", reps: "1 série máxima" },
                { name: "Máximo de Agachamentos em 2 min", reps: "1 série máxima" },
                { name: "Corrida Estacionária", reps: "5 min ritmados" }
            ]
        },
        { day: 7, type: "Mobilidade & Core", exercises: [{ name: "Alongamento Geral & Mobilidade", reps: "20 min focados" }] }
    ],
    2: [
        {
            day: 8, type: "Empurrar (Push Focus)", exercises: [
                { name: "Flexão Fechada (Diamante)", reps: "3 séries de 5-8" },
                { name: "Flexão de Braço", reps: "3 séries de 10-12" },
                { name: "Elevação Lateral (com Carga Leve)", reps: "3 séries de 12" }
            ]
        },
        {
            day: 9, type: "Puxar (Pull) & Core", exercises: [
                { name: "Barra Fixa / Remada na Mesa", reps: "3 séries de 5-8" },
                { name: "Superman (Fortalecimento Lombar)", reps: "3 séries de 15" },
                { name: "Abdominal Infra (Elevação de Pernas)", reps: "3 séries de 12" }
            ]
        },
        {
            day: 10, type: "Pernas (Legs Heavy)", exercises: [
                { name: "Agachamento Búlgaro", reps: "3 séries de 8 cada perna" },
                { name: "Agachamento Isométrico (Wall Sit)", reps: "3 séries de 45s" },
                { name: "Ponte para Glúteos", reps: "3 séries de 15" }
            ]
        },
        { day: 11, type: "Descanso Ativo", exercises: [{ name: "Caminhada Leve", reps: "30 min tranquilos" }] },
        {
            day: 12, type: "Full Body Cardio", exercises: [
                { name: "Burpees", reps: "3 séries de 10" },
                { name: "Mountain Climbers (Escalador)", reps: "3 séries de 30s" },
                { name: "Agachamento com Salto (Jump Squat)", reps: "3 séries de 10" }
            ]
        },
        {
            day: 13, type: "Core Tridimensional", exercises: [
                { name: "Prancha Lateral", reps: "3 séries de 30s cada lado" },
                { name: "Russian Twist (Rotação de Tronco)", reps: "3 séries de 20 total" },
                { name: "Abdominal Bicicleta (Bicycle Crunch)", reps: "3 séries de 20 total" }
            ]
        },
        { day: 14, type: "Descanso Ativo", exercises: [{ name: "Dia de Descanso & Recuperação Ativa", reps: "Descanso Total" }] }
    ],
    3: [
        {
            day: 15, type: "Push Intensidade", exercises: [
                { name: "Flexão Declinada", reps: "4 séries de 8-10" },
                { name: "Pike Push Up (Ombros)", reps: "3 séries de 5-8" },
                { name: "Mergulho no Banco (Dips)", reps: "3 séries de 15" }
            ]
        },
        {
            day: 16, type: "Pull & Legs Single-Leg", exercises: [
                { name: "Barra Fixa / Remada na Mesa", reps: "4 séries de 15-20s isometria" },
                { name: "Agachamento Pistol (Pistol Squat)", reps: "3 séries de 5 cada perna" },
                { name: "Afundo / Passada (Lunge)", reps: "3 séries de 20 passos" }
            ]
        },
        {
            day: 17, type: "HIIT Calistênico", exercises: [
                { name: "Flexão de Braço", reps: "Tabata: 20s on / 10s off (4 rounds)" },
                { name: "Agachamento Livre", reps: "Tabata: 20s on / 10s off (4 rounds)" },
                { name: "Burpees", reps: "Tabata: 20s on / 10s off (4 rounds)" }
            ]
        },
        { day: 18, type: "Descanso Ativo", exercises: [{ name: "Alongamento Geral & Mobilidade", reps: "30 min" }] },
        {
            day: 19, type: "Upper Body Volume", exercises: [
                { name: "Flexão de Braço", reps: "100 repetições acumuladas" },
                { name: "Mergulho no Banco (Dips)", reps: "50 repetições acumuladas" }
            ]
        },
        {
            day: 20, type: "Lower Body Volume", exercises: [
                { name: "Agachamento Livre", reps: "150 repetições acumuladas" },
                { name: "Elevação de Panturrilha", reps: "100 repetições acumuladas" }
            ]
        },
        { day: 21, type: "Descanso Ativo", exercises: [{ name: "Dia de Descanso & Recuperação Ativa", reps: "Descanso Total" }] }
    ],
    4: [
        {
            day: 22, type: "Skills & Técnica", exercises: [
                { name: "Treino de L-Sit", reps: "Prática por 10 min" },
                { name: "Bananeira na Parede (Handstand)", reps: "Prática por 10 min" }
            ]
        },
        {
            day: 23, type: "Resistência Máxima", exercises: [
                { name: "Flexão de Braço", reps: "4 séries até a falha" },
                { name: "Agachamento Livre", reps: "4 séries até a falha" },
                { name: "Prancha Abdominal", reps: "4 séries até o tempo máximo" }
            ]
        },
        {
            day: 24, type: "Força Explosiva", exercises: [
                { name: "Flexão de Braço", reps: "5 séries explosivas de 5" },
                { name: "Agachamento com Salto (Jump Squat)", reps: "5 séries de 8" }
            ]
        },
        { day: 25, type: "Descanso Ativo", exercises: [{ name: "Caminhada Leve", reps: "40 min ao ar livre" }] },
        {
            day: 26, type: "Teste Final - Parte 1", exercises: [
                { name: "Flexão de Braço", reps: "1 série máx (Anote seu recorde)" },
                { name: "Prancha Abdominal", reps: "1 série máx de tempo" }
            ]
        },
        {
            day: 27, type: "Teste Final - Parte 2", exercises: [
                { name: "Agachamento Livre", reps: "Máximo em 5 min" },
                { name: "Burpees", reps: "Máximo em 5 min" }
            ]
        },
        { day: 28, type: "Recuperação", exercises: [{ name: "Alongamento Geral & Mobilidade", reps: "30 min de relaxamento" }] },
        { day: 29, type: "Sessão Livre", exercises: [{ name: "Alongamento Geral & Mobilidade", reps: "Pratique seus movimentos favoritos" }] },
        { day: 30, type: "Conclusão & Vitória", exercises: [{ name: "Dia de Descanso & Recuperação Ativa", reps: "Parabéns! Você concluiu 30 dias!" }] }
    ]
};

// ==================================================
// LocalStorage Tracker Manager
// ==================================================
const CalisteniaTracker = {
    STORAGE_KEY: 'calistenia_pro_completed_days',

    getCompletedDays() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    },

    isDayCompleted(dayNum) {
        return this.getCompletedDays().includes(dayNum);
    },

    setDayCompleted(dayNum, isCompleted = true) {
        let days = this.getCompletedDays();
        const index = days.indexOf(dayNum);

        if (isCompleted) {
            if (index === -1) days.push(dayNum);
        } else {
            if (index > -1) days.splice(index, 1);
        }

        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(days));
        } catch (e) {}
    },

    toggleDayCompleted(dayNum) {
        const isDone = this.isDayCompleted(dayNum);
        this.setDayCompleted(dayNum, !isDone);
        return !isDone;
    },

    resetProgress() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
        } catch (e) {}
    },

    getStreak() {
        const days = this.getCompletedDays().sort((a, b) => a - b);
        if (days.length === 0) return 0;

        let streak = 0;
        let lastDay = 0;
        for (let d of days) {
            if (lastDay === 0 || d === lastDay + 1) {
                streak++;
                lastDay = d;
            } else {
                streak = 1;
                lastDay = d;
            }
        }
        return streak;
    }
};

// ==================================================
// Diário de Treino & Anotações de Recorde
// ==================================================
const CalisteniaJournal = {
    STORAGE_KEY: 'calistenia_pro_journal',

    getJournal() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch(e) {
            return {};
        }
    },

    getNote(dayNum) {
        const j = this.getJournal();
        return j[dayNum] || '';
    },

    saveNote(dayNum, noteText) {
        const j = this.getJournal();
        j[dayNum] = noteText;
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(j));
        } catch(e) {}
    }
};

// ==================================================
// Gerenciador de Rotinas Personalizadas
// ==================================================
const CustomRoutines = {
    STORAGE_KEY: 'calistenia_pro_custom_routines',

    getRoutines() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch(e) {
            return [];
        }
    },

    saveRoutine(name, exercises) {
        const list = this.getRoutines();
        list.push({ name, exercises, createdAt: new Date().toISOString() });
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
        } catch(e) {}
    },

    deleteRoutine(index) {
        const list = this.getRoutines();
        if (index >= 0 && index < list.length) {
            list.splice(index, 1);
            try {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
            } catch(e) {}
        }
    }
};
window.CustomRoutines = CustomRoutines;

// ==================================================
// Theme System Manager (Modo Claro / Modo Escuro)
// ==================================================
const ThemeManager = {
    STORAGE_KEY: 'calistenia_pro_theme',

    init() {
        const savedTheme = localStorage.getItem(this.STORAGE_KEY) || 'light';
        this.applyTheme(savedTheme);

        document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => this.toggle());
        });
    },

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.STORAGE_KEY, theme);

        document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
            btn.textContent = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
            btn.setAttribute('aria-label', `Alternar para modo ${theme === 'dark' ? 'claro' : 'escuro'}`);
        });
    },

    toggle() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        this.applyTheme(next);
        showToast(`Modo ${next === 'dark' ? 'Escuro' : 'Claro'} ativado!`, 'info');
    }
};

// ==================================================
// Toast Notification System
// ==================================================
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.position = 'fixed';
        container.style.bottom = '20px';
        container.style.right = '20px';
        container.style.zIndex = '99999';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '10px';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.background = type === 'success' ? '#10B981' : type === 'info' ? '#2563EB' : '#EF4444';
    toast.style.color = '#FFFFFF';
    toast.style.padding = '0.8rem 1.25rem';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.25)';
    toast.style.fontWeight = '600';
    toast.style.fontSize = '0.95rem';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '8px';
    toast.style.animation = 'fadeInToast 0.3s ease-out forwards';
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// ==================================================
// MODO TREINO ATIVO (WORKOUT PLAYER ENGINE)
// ==================================================
const WorkoutPlayer = {
    overlay: null,
    currentWorkoutTitle: '',
    currentExercises: [],
    currentIndex: 0,
    restInterval: null,
    restSeconds: 30,
    dayNum: null,

    init() {
        if (document.getElementById('workoutPlayerOverlay')) return;

        const div = document.createElement('div');
        div.id = 'workoutPlayerOverlay';
        div.className = 'modal-overlay';
        div.style.display = 'none';

        div.innerHTML = `
            <div class="modal-content shadow-sm" style="max-width: 650px; text-align: center; position: relative;">
                <button id="wpCloseBtn" class="btn-outline btn-sm" style="position: absolute; top: 15px; right: 15px;">✕ Fechar</button>
                <span class="label success" id="wpBadge">MODO TREINO ATIVO</span>
                <h2 id="wpTitle" style="margin: 0.5rem 0 1.5rem 0;">Nome do Treino</h2>

                <div id="wpContentBox" style="background: var(--color-bg-main); border: 1px solid var(--color-border); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
                    <span id="wpStepCount" style="font-size: 0.85rem; font-weight: 700; color: var(--color-cta);">Exercício 1 de 4</span>
                    <h3 id="wpExName" style="font-size: 1.6rem; margin: 0.5rem 0;">Flexão de Braço</h3>
                    <div id="wpExReps" style="font-size: 1.1rem; font-weight: 700; color: var(--color-cta); margin-bottom: 1rem;">3 séries de 10</div>
                    
                    <div id="wpImgBox" style="margin: 1rem 0;">
                        <!-- Imagem do exercício -->
                    </div>

                    <p id="wpPurpose" style="font-size: 0.9rem; color: var(--color-text-muted);">Objetivo do exercício...</p>
                </div>

                <!-- Temporizador de Descanso Embutido -->
                <div id="wpRestBox" style="display: none; background: #DBEAFE; border: 1px solid #93C5FD; padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem; color: #1E3A8A;">
                    <h4 style="margin-bottom: 0.25rem;">⏱️ Intervalo de Descanso Ativo</h4>
                    <div id="wpTimerDisplay" style="font-size: 2.5rem; font-weight: 700; font-family: monospace; color: #1D4ED8;">00:30</div>
                    <button id="wpSkipRestBtn" class="btn-cta btn-sm" style="margin-top: 0.5rem;">Pular Descanso ➔</button>
                </div>

                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button id="wpPrevBtn" class="btn-outline">← Anterior</button>
                    <button id="wpNextBtn" class="btn-cta">Próximo Exercício →</button>
                </div>
            </div>
        `;

        document.body.appendChild(div);
        this.overlay = div;

        document.getElementById('wpCloseBtn').addEventListener('click', () => this.close());
        document.getElementById('wpPrevBtn').addEventListener('click', () => this.prev());
        document.getElementById('wpNextBtn').addEventListener('click', () => this.next());
        document.getElementById('wpSkipRestBtn').addEventListener('click', () => this.stopRest());
    },

    start(title, exercises, dayNum = null) {
        this.init();
        this.currentWorkoutTitle = title;
        this.currentExercises = exercises;
        this.currentIndex = 0;
        this.dayNum = dayNum;

        document.getElementById('wpTitle').textContent = title;
        this.overlay.style.display = 'flex';
        this.renderStep();
    },

    renderStep() {
        this.stopRest();

        if (this.currentIndex >= this.currentExercises.length) {
            this.renderVictory();
            return;
        }

        const exItem = this.currentExercises[this.currentIndex];
        const total = this.currentExercises.length;

        document.getElementById('wpStepCount').textContent = `Exercício ${this.currentIndex + 1} de ${total}`;
        document.getElementById('wpExName').textContent = exItem.name;
        document.getElementById('wpExReps').textContent = exItem.reps;

        // Tenta buscar dados ricos no exerciseDB
        let exId = "flexao-de-braco";
        if (typeof processIdStr === 'function') {
            exId = processIdStr(exItem.name);
        }

        const data = (window.exerciseDB && window.exerciseDB[exId]) ? window.exerciseDB[exId] : null;
        if (data) {
            document.getElementById('wpPurpose').textContent = data.purpose;
        } else {
            document.getElementById('wpPurpose').textContent = "Execute com forma limpa e controle respiratório.";
        }

        const imgBox = document.getElementById('wpImgBox');
        imgBox.innerHTML = '';
        const srcImg = (data && data.category === 'legs') ? "assets/img/squat_start.png" : "assets/img/pushup_start.png";
        const img = document.createElement('img');
        img.src = srcImg;
        img.alt = exItem.name;
        img.style.maxHeight = '180px';
        img.style.borderRadius = '8px';
        imgBox.appendChild(img);

        document.getElementById('wpPrevBtn').style.display = this.currentIndex === 0 ? 'none' : 'inline-flex';
        document.getElementById('wpNextBtn').textContent = this.currentIndex === total - 1 ? 'Concluir Treino! 🎉' : 'Próximo / Descanso →';
    },

    next() {
        if (this.currentIndex < this.currentExercises.length - 1) {
            this.startRest(() => {
                this.currentIndex++;
                this.renderStep();
            });
        } else {
            this.currentIndex++;
            this.renderVictory();
        }
    },

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderStep();
        }
    },

    startRest(onFinish) {
        const restBox = document.getElementById('wpRestBox');
        const display = document.getElementById('wpTimerDisplay');
        restBox.style.display = 'block';

        let sec = 30;
        display.textContent = `00:${sec}`;

        this.restInterval = setInterval(() => {
            sec--;
            display.textContent = `00:${String(sec).padStart(2, '0')}`;
            if (sec <= 0) {
                this.stopRest();
                try {
                    const ctx = new (window.AudioContext || window.webkitAudioContext)();
                    const osc = ctx.createOscillator();
                    osc.connect(ctx.destination);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.8);
                } catch(e) {}
                if (onFinish) onFinish();
            }
        }, 1000);
    },

    stopRest() {
        if (this.restInterval) {
            clearInterval(this.restInterval);
            this.restInterval = null;
        }
        document.getElementById('wpRestBox').style.display = 'none';
    },

    renderVictory() {
        const box = document.getElementById('wpContentBox');
        box.innerHTML = `
            <div style="padding: 2rem 0;">
                <h2 style="font-size: 2.2rem; color: #10B981; margin-bottom: 0.5rem;">🎉 Treino Concluído!</h2>
                <p style="font-size: 1.1rem; color: var(--color-text-dark);">Você superou a gravidade hoje e deu mais um passo na sua evolução!</p>
                <div style="margin: 2rem 0;">
                    <button id="wpShareBtn" class="btn-cta btn-large">🏆 Gerar Imagem de Conquista</button>
                </div>
            </div>
        `;

        document.getElementById('wpPrevBtn').style.display = 'none';
        document.getElementById('wpNextBtn').style.display = 'none';

        if (this.dayNum) {
            CalisteniaTracker.setDayCompleted(this.dayNum, true);
            if (typeof renderProgressHeader === 'function') renderProgressHeader();
            if (typeof renderWeek === 'function' && window.currentActiveWeek) renderWeek(window.currentActiveWeek);
        }

        document.getElementById('wpShareBtn')?.addEventListener('click', () => {
            this.close();
            ShareCardModal.open();
        });
    },

    close() {
        this.stopRest();
        if (this.overlay) this.overlay.style.display = 'none';
    }
};
window.WorkoutPlayer = WorkoutPlayer;

// ==================================================
// SHARE CARD GENERATOR (HTML5 CANVAS BADGE)
// ==================================================
const ShareCardModal = {
    overlay: null,

    init() {
        if (document.getElementById('shareCardOverlay')) return;

        const div = document.createElement('div');
        div.id = 'shareCardOverlay';
        div.className = 'modal-overlay';
        div.style.display = 'none';

        div.innerHTML = `
            <div class="modal-content shadow-sm" style="max-width: 500px; text-align: center;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h3>🏆 Sua Cartão de Conquista</h3>
                    <button id="closeShareBtn" class="btn-outline btn-sm">✕ Fechar</button>
                </div>
                
                <canvas id="shareCanvas" width="800" height="800" style="width: 100%; height: auto; border-radius: 12px; box-shadow: var(--shadow-soft); margin-bottom: 1.5rem;"></canvas>
                
                <a id="downloadShareCardBtn" class="btn-cta btn-large" download="conquista-calistenia-pro.png" style="width: 100%;">📥 Baixar Imagem da Conquista</a>
            </div>
        `;

        document.body.appendChild(div);
        this.overlay = div;

        document.getElementById('closeShareBtn').addEventListener('click', () => {
            this.overlay.style.display = 'none';
        });
    },

    open() {
        this.init();
        this.overlay.style.display = 'flex';
        this.drawCanvas();
    },

    drawCanvas() {
        const canvas = document.getElementById('shareCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const daysDone = CalisteniaTracker.getCompletedDays().length;
        const streak = CalisteniaTracker.getStreak();

        // Background Gradient
        const grad = ctx.createLinearGradient(0, 0, 800, 800);
        grad.addColorStop(0, '#0F172A');
        grad.addColorStop(1, '#1E293B');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 800, 800);

        // Border Accent
        ctx.strokeStyle = '#2563EB';
        ctx.lineWidth = 16;
        ctx.strokeRect(20, 20, 760, 760);

        // Header Text
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 44px Playfair Display, serif';
        ctx.textAlign = 'center';
        ctx.fillText('CALISTENIA PRO', 400, 120);

        ctx.fillStyle = '#3B82F6';
        ctx.font = '600 24px Inter, sans-serif';
        ctx.fillText('DOMINE SEU PRÓPRIO CORPO', 400, 165);

        // Circle Badge
        ctx.beginPath();
        ctx.arc(400, 360, 130, 0, 2 * Math.PI);
        ctx.fillStyle = '#2563EB';
        ctx.fill();
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#10B981';
        ctx.stroke();

        // Stat inside Circle
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 80px Inter, sans-serif';
        ctx.fillText(`${daysDone}`, 400, 380);

        ctx.font = '600 20px Inter, sans-serif';
        ctx.fillText('DIAS CONCLUÍDOS', 400, 420);

        // Streak & Date
        ctx.fillStyle = '#F8FAFC';
        ctx.font = 'bold 32px Inter, sans-serif';
        ctx.fillText(`🔥 Sequência: ${streak} Dias Seguidos`, 400, 560);

        ctx.fillStyle = '#94A3B8';
        ctx.font = '500 22px Inter, sans-serif';
        ctx.fillText('30 Days Bodyweight Challenge', 400, 620);

        ctx.fillStyle = '#10B981';
        ctx.font = 'bold 26px Inter, sans-serif';
        ctx.fillText('🏆 Mestre da Gravidade', 400, 700);

        // Set download link href
        const dataUrl = canvas.toDataURL('image/png');
        document.getElementById('downloadShareCardBtn').href = dataUrl;
    }
};

// ==================================================
// PROGRAM PAGE UI RENDERER
// ==================================================
let currentActiveWeek = 1;

function renderProgressHeader() {
    const trackerContainer = document.getElementById('programProgressHeader');
    if (!trackerContainer) return;

    const completedDays = CalisteniaTracker.getCompletedDays();
    const totalCount = 30;
    const completedCount = completedDays.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    const streak = CalisteniaTracker.getStreak();

    let badgeText = "🌱 Iniciante Calistênico";
    if (completedCount >= 30) badgeText = "🏆 Mestre Calistênico Supremo!";
    else if (completedCount >= 21) badgeText = "🥇 Ouro (Semana 3 Concluída)";
    else if (completedCount >= 14) badgeText = "🥈 Prata (Semana 2 Concluída)";
    else if (completedCount >= 7) badgeText = "🥉 Bronze (Semana 1 Concluída)";

    trackerContainer.innerHTML = `
        <div class="progress-card shadow-sm">
            <div class="progress-info">
                <div>
                    <h3 style="margin-bottom: 0.25rem;">Seu Progresso de Transformação</h3>
                    <p style="margin: 0; font-size: 0.95rem;">${completedCount} de ${totalCount} Dias Concluídos (${percentage}%)</p>
                </div>
                <div class="progress-badges">
                    <span class="badge-pill streak-badge">🔥 ${streak} ${streak === 1 ? 'Dia Seguido' : 'Dias Seguidos'}</span>
                    <span class="badge-pill milestone-badge">${badgeText}</span>
                </div>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${percentage}%;"></div>
            </div>
            <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                <button class="btn-cta btn-sm" id="btnOpenShareCard">🏆 Compartilhar Progresso</button>
                <button class="btn-outline btn-sm" id="resetProgressBtn" style="font-size: 0.8rem; padding: 0.3rem 0.8rem;">🔄 Resetar Progresso</button>
            </div>
        </div>
    `;

    document.getElementById('resetProgressBtn')?.addEventListener('click', () => {
        if (confirm("Tem certeza que deseja resetar todo o seu progresso dos 30 dias?")) {
            CalisteniaTracker.resetProgress();
            renderProgressHeader();
            renderWeek(currentActiveWeek);
            showToast("Progresso resetado com sucesso.", "info");
        }
    });

    document.getElementById('btnOpenShareCard')?.addEventListener('click', () => {
        ShareCardModal.open();
    });
}

function renderWeek(weekNum) {
    currentActiveWeek = weekNum;
    const daysGrid = document.getElementById('daysGrid');
    if (!daysGrid) return;

    document.querySelectorAll('.week-btn').forEach((btn, idx) => {
        if (idx === weekNum - 1) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    daysGrid.innerHTML = '';

    const days = programData[weekNum];
    if (!days) return;

    days.forEach(day => {
        const isDone = CalisteniaTracker.isDayCompleted(day.day);
        const dayCard = document.createElement('div');
        dayCard.className = `day-card ${isDone ? 'completed-card' : ''}`;

        let exercisesHtml = '';
        day.exercises.forEach(ex => {
            let queryParam = encodeURIComponent(ex.name);
            exercisesHtml += `
                <li class="exercise-item">
                    <a href="exercise.html?id=${queryParam}" class="exercise-name" title="Ver detalhes do exercício">
                        🎯 ${ex.name}
                    </a>
                    <span class="exercise-reps">${ex.reps}</span>
                </li>
            `;
        });

        const savedNote = CalisteniaJournal.getNote(day.day);

        dayCard.innerHTML = `
            <div class="day-header">
                <div>
                    <h3>Dia ${day.day}</h3>
                    <span class="day-subtitle">${day.type}</span>
                </div>
                <button class="btn-toggle-day ${isDone ? 'done' : ''}" data-day="${day.day}">
                    ${isDone ? '✓ Concluído' : 'Concluir Dia'}
                </button>
            </div>
            <div class="day-content">
                <ul class="exercise-list">
                    ${exercisesHtml}
                </ul>

                <div style="margin-top: 1.25rem; display: flex; gap: 0.5rem;">
                    <button class="btn-cta btn-sm btn-start-player" data-day="${day.day}" style="flex: 1; font-size: 0.85rem; padding: 0.4rem;">
                        ▶️ Treino Ativo
                    </button>
                </div>

                <!-- Diário de Treino / Anotação -->
                <div style="margin-top: 1rem; border-top: 1px dashed var(--color-border); padding-top: 0.75rem;">
                    <label style="font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted); display: block; margin-bottom: 0.2rem;">📝 Diário & Anotação de Carga/Reps:</label>
                    <input type="text" class="journal-input form-control" data-day="${day.day}" value="${savedNote}" placeholder="Ex: Fiz 20 flexões limpas!" style="font-size: 0.85rem; padding: 0.4rem 0.6rem;">
                </div>
            </div>
        `;

        // Listener para marcar dia
        const toggleBtn = dayCard.querySelector('.btn-toggle-day');
        toggleBtn.addEventListener('click', () => {
            const nowDone = CalisteniaTracker.toggleDayCompleted(day.day);
            renderProgressHeader();
            renderWeek(currentActiveWeek);

            if (nowDone) {
                showToast(`🎉 Dia ${day.day} marcado como concluído! Continue assim!`, 'success');
            } else {
                showToast(`Dia ${day.day} desmarcado.`, 'info');
            }
        });

        // Listener para iniciar Workout Player no dia
        const startPlayerBtn = dayCard.querySelector('.btn-start-player');
        startPlayerBtn.addEventListener('click', () => {
            WorkoutPlayer.start(`Dia ${day.day} - ${day.type}`, day.exercises, day.day);
        });

        // Listener para salvar anotação do diário
        const journalInput = dayCard.querySelector('.journal-input');
        journalInput.addEventListener('change', (e) => {
            CalisteniaJournal.saveNote(day.day, e.target.value);
            showToast('Anotação salva no diário!', 'info');
        });

        daysGrid.appendChild(dayCard);
    });
}

window.filterWeek = function (week) {
    renderWeek(week);
};

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(() => {
            console.log('ServiceWorker registrado com sucesso!');
        }).catch(() => {});
    });
}

// ==================================================
// Inicialização Global
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();

    if (document.getElementById('daysGrid')) {
        renderProgressHeader();
        renderWeek(1);
    }

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isOpen = navLinks.classList.contains('mobile-active');
            if (isOpen) {
                navLinks.classList.remove('mobile-active');
                hamburger.setAttribute('aria-expanded', 'false');
            } else {
                navLinks.classList.add('mobile-active');
                hamburger.setAttribute('aria-expanded', 'true');
            }
        });
    }
});
