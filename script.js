
// Program Data
const programData = {
    1: [
        {
            day: 1, type: "Full Body - Adaptação", exercises: [
                { name: "Flexão de Braço (Joalhos se necessário)", reps: "3 séries de 8-12" },
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
                { name: "Mergulho no Banco (Tríceps)", reps: "3 séries de 10-12" },
                { name: "Prancha Alta (toque no ombro)", reps: "3 séries de 10 cada lado" }
            ]
        },
        {
            day: 4, type: "Membros Inferiores", exercises: [
                { name: "Agachamento Sumô", reps: "3 séries de 12-15" },
                { name: "Afundo (Lunge)", reps: "3 séries de 10 cada perna" },
                { name: "Elevação de Panturrilha", reps: "3 séries de 15-20" }
            ]
        },
        { day: 5, type: "Descanso", exercises: [{ name: "Descanso Total", reps: "-" }] },
        {
            day: 6, type: "Desafio 1", exercises: [
                { name: "Máximo de Flexões em 2 min", reps: "1 série" },
                { name: "Máximo de Agachamentos em 2 min", reps: "1 série" },
                { name: "Corrida Estacionária", reps: "5 min" }
            ]
        },
        { day: 7, type: "Mobilidade", exercises: [{ name: "Sessão de Yoga/Alongamento", reps: "20 min" }] }
    ],
    2: [
        {
            day: 8, type: "Empurrar (Push)", exercises: [
                { name: "Flexão Fechada (Diamante)", reps: "3 séries de 5-8" },
                { name: "Flexão Padrão", reps: "3 séries de 10-12" },
                { name: "Elevação Lateral (com garrafas)", reps: "3 séries de 12" }
            ]
        },
        {
            day: 9, type: "Puxar (Pull) & Core", exercises: [
                { name: "Barra Fixa (ou Remada na Mesa)", reps: "3 séries de 5-8" },
                { name: "Superman (Lombar)", reps: "3 séries de 15" },
                { name: "Abdominal Infra (Elevação de Pernas)", reps: "3 séries de 12" }
            ]
        },
        {
            day: 10, type: "Pernas (Legs)", exercises: [
                { name: "Agachamento Búlgaro", reps: "3 séries de 8 cada perna" },
                { name: "Agachamento Isométrico", reps: "3 séries de 45s" },
                { name: "Ponte para Glúteos", reps: "3 séries de 15" }
            ]
        },
        { day: 11, type: "Descanso Ativo", exercises: [{ name: "Caminhada Rápida", reps: "30 min" }] },
        {
            day: 12, type: "Full Body Cardio", exercises: [
                { name: "Burpees", reps: "3 séries de 10" },
                { name: "Mountain Climbers", reps: "3 séries de 30s" },
                { name: "Agachamento com Salto", reps: "3 séries de 10" }
            ]
        },
        {
            day: 13, type: "Core Focus", exercises: [
                { name: "Prancha Lateral", reps: "3 séries de 30s cada lado" },
                { name: "Russian Twist", reps: "3 séries de 20 total" },
                { name: "Bicycle Crunch", reps: "3 séries de 20 total" }
            ]
        },
        { day: 14, type: "Descanso", exercises: [{ name: "Descanso Total", reps: "-" }] }
    ],
    3: [
        {
            day: 15, type: "Push Intensidade", exercises: [
                { name: "Flexão Declinada (pés elevados)", reps: "4 séries de 8-10" },
                { name: "Pike Push Up (Ombros)", reps: "3 séries de 5-8" },
                { name: "Tríceps Banco", reps: "3 séries de 15" }
            ]
        },
        {
            day: 16, type: "Pull & Legs", exercises: [
                { name: "Barra Fixa (Isometria)", reps: "4 séries de 15-20s" },
                { name: "Agachamento Pistol (com apoio)", reps: "3 séries de 5 cada perna" },
                { name: "Passada", reps: "3 séries de 20 passos" }
            ]
        },
        {
            day: 17, type: "HIIT Calistênico", exercises: [
                { name: "Tabata: Flexões", reps: "20s on / 10s off (4 rounds)" },
                { name: "Tabata: Agachamentos", reps: "20s on / 10s off (4 rounds)" },
                { name: "Tabata: Burpees", reps: "20s on / 10s off (4 rounds)" }
            ]
        },
        { day: 18, type: "Descanso Ativo", exercises: [{ name: "Mobilidade e Alongamento", reps: "30 min" }] },
        {
            day: 19, type: "Upper Body Volume", exercises: [
                { name: "Flexão", reps: "100 repetições totais (no menor tempo)" },
                { name: "Mergulho Banco", reps: "50 repetições totais" }
            ]
        },
        {
            day: 20, type: "Lower Body Volume", exercises: [
                { name: "Agachamento", reps: "150 repetições totais (no menor tempo)" },
                { name: "Panturrilhas", reps: "100 repetições totais" }
            ]
        },
        { day: 21, type: "Descanso", exercises: [{ name: "Descanso Total", reps: "-" }] }
    ],
    4: [
        {
            day: 22, type: "Técnica", exercises: [
                { name: "Treino de L-Sit (no chão)", reps: "Prática por 10 min" },
                { name: "Bananeira (Handstand) na parede", reps: "Prática por 10 min" }
            ]
        },
        {
            day: 23, type: "Resistência", exercises: [
                { name: "Flexão", reps: "4 x max" },
                { name: "Agachamento", reps: "4 x max" },
                { name: "Prancha", reps: "4 x max tempo" }
            ]
        },
        {
            day: 24, type: "Força Explosiva", exercises: [
                { name: "Flexão com Palmas", reps: "5 séries de 5" },
                { name: "Agachamento com Salto Alto", reps: "5 séries de 8" }
            ]
        },
        { day: 25, type: "Descanso Ativo", exercises: [{ name: "Caminhada/Corrida Leve", reps: "40 min" }] },
        {
            day: 26, type: "O Teste Final - Parte 1", exercises: [
                { name: "Max Flexões (1 série)", reps: "Anote o resultado" },
                { name: "Max Prancha (1 série)", reps: "Anote o resultado" }
            ]
        },
        {
            day: 27, type: "O Teste Final - Parte 2", exercises: [
                { name: "Max Agachamentos em 5 min", reps: "Anote o resultado" },
                { name: "Max Burpees em 5 min", reps: "Anote o resultado" }
            ]
        },
        { day: 28, type: "Recuperação", exercises: [{ name: "Yoga ou Alongamento Profundo", reps: "30 min" }] },
        { day: 29, type: "Livre", exercises: [{ name: "Pratique seu exercício favorito", reps: "30 min" }] },
        { day: 30, type: "Conclusão", exercises: [{ name: "Descanse e celebre!", reps: "Você completou 30 dias." }] }
    ]
};

// DOM Elements
const daysGrid = document.getElementById('daysGrid');

// Functions
function renderWeek(weekNum) {
    if (!daysGrid) return;

    // Update buttons
    document.querySelectorAll('.week-btn').forEach(btn => btn.classList.remove('active'));
    // Note: simple week selection logic assuming buttons order matches 1-4
    const buttons = document.querySelectorAll('.week-btn');
    if (buttons[weekNum - 1]) buttons[weekNum - 1].classList.add('active');

    // Clear grid
    daysGrid.innerHTML = '';

    // Render days
    const days = programData[weekNum];
    days.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';

        let exercisesHtml = '';
        day.exercises.forEach(ex => {
            // Processa qual o código string seguro para ir para exercise.html
            // Mapeamento básico retirado do exercises-data.js 
            let normalizedName = ex.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ''); 
            // Porém o arquivo de DB precisa ver a base via params. O browser fará o match, então passaremos o próprio nome que nosso helper converte!
            
            let queryParam = encodeURIComponent(ex.name);

            exercisesHtml += `
                <li class="exercise-item">
                    <a href="exercise.html?id=${queryParam}" class="exercise-name" style="text-decoration: underline; text-underline-offset: 4px;">🎯 ${ex.name}</a>
                    <span class="exercise-reps">${ex.reps}</span>
                </li>
            `;
        });

        dayCard.innerHTML = `
            <div class="day-header">
                <h3>Dia ${day.day}</h3>
                <span class="day-status">${day.type}</span>
            </div>
            <div class="day-content">
                <ul class="exercise-list">
                    ${exercisesHtml}
                </ul>
            </div>
        `;
        daysGrid.appendChild(dayCard);
    });
}

// Global scope for onclick
window.filterWeek = function (week) {
    renderWeek(week);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Only run on program page
    if (document.getElementById('daysGrid')) {
        renderWeek(1);
    }

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(15, 23, 42, 0.98)';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }
});
