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
                { name: "Alongamento Geral", reps: "10 min" }
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

    toggleDayCompleted(dayNum) {
        let days = this.getCompletedDays();
        const index = days.indexOf(dayNum);
        let isNowCompleted = false;

        if (index > -1) {
            days.splice(index, 1);
        } else {
            days.push(dayNum);
            isNowCompleted = true;
        }

        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(days));
        } catch (e) {}

        return isNowCompleted;
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
        container.style.zIndex = '9999';
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
    toast.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
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
    }, 3000);
}

// ==================================================
// Program Page UI Renderer
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

    // Determine Badge
    let badgeText = "🥉 Iniciante Calistênico";
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
            <div style="margin-top: 1rem; text-align: right;">
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
}

function renderWeek(weekNum) {
    currentActiveWeek = weekNum;
    const daysGrid = document.getElementById('daysGrid');
    if (!daysGrid) return;

    // Atualiza botoes da semana
    document.querySelectorAll('.week-btn').forEach((btn, idx) => {
        if (idx === weekNum - 1) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Limpa grid
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
            </div>
        `;

        // Event listener para marcar como concluido
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

        daysGrid.appendChild(dayCard);
    });
}

// Escopo global para clique nos botoes de semana
window.filterWeek = function (week) {
    renderWeek(week);
};

// ==================================================
// Inicialização Global na Carga da Página
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa Tema (Dark/Light)
    ThemeManager.init();

    // Se estiver na pagina do programa (program.html)
    if (document.getElementById('daysGrid')) {
        renderProgressHeader();
        renderWeek(1);
    }

    // Menu Mobile
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
