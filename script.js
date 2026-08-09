// Calistenia Pro - Engine Premium 2.0 | Mantém compatibilidade + Expansões
const programData = {
    1: [
        { day: 1, type: "Full Body - Adaptação", exercises: [{ name: "Flexão de Braço (Com Joelhos)", reps: "3 séries de 8-12" },{ name: "Agachamento Livre", reps: "3 séries de 12-15" },{ name: "Prancha Abdominal", reps: "3 séries de 20-30s" },{ name: "Polichinelos", reps: "3 séries de 30s" }]},
        { day: 2, type: "Descanso Ativo", exercises: [{ name: "Caminhada Leve", reps: "20-30 min" },{ name: "Alongamento Geral & Mobilidade", reps: "10 min" }]},
        { day: 3, type: "Membros Superiores", exercises: [{ name: "Flexão de Braço", reps: "3 séries de 8-10" },{ name: "Mergulho no Banco (Dips)", reps: "3 séries de 10-12" },{ name: "Prancha Alta com Toque no Ombro", reps: "3 séries de 10 cada lado" }]},
        { day: 4, type: "Membros Inferiores", exercises: [{ name: "Agachamento Sumô", reps: "3 séries de 12-15" },{ name: "Afundo / Passada (Lunge)", reps: "3 séries de 10 cada perna" },{ name: "Elevação de Panturrilha", reps: "3 séries de 15-20" }]},
        { day: 5, type: "Descanso Ativo", exercises: [{ name: "Dia de Descanso & Recuperação Ativa", reps: "Sua meta é recuperar" }] },
        { day: 6, type: "Desafio de Teste", exercises: [{ name: "Máximo de Flexões em 2 min", reps: "1 série máxima" },{ name: "Máximo de Agachamentos em 2 min", reps: "1 série máxima" },{ name: "Corrida Estacionária", reps: "5 min ritmados" }]},
        { day: 7, type: "Mobilidade & Core", exercises: [{ name: "Alongamento Geral & Mobilidade", reps: "20 min focados" }] }
    ],
    2: [
        { day: 8, type: "Empurrar (Push Focus)", exercises: [{ name: "Flexão Fechada (Diamante)", reps: "3 séries de 5-8" },{ name: "Flexão de Braço", reps: "3 séries de 10-12" },{ name: "Elevação Lateral (com Carga Leve)", reps: "3 séries de 12" }]},
        { day: 9, type: "Puxar (Pull) & Core", exercises: [{ name: "Barra Fixa / Remada na Mesa", reps: "3 séries de 5-8" },{ name: "Superman (Fortalecimento Lombar)", reps: "3 séries de 15" },{ name: "Abdominal Infra (Elevação de Pernas)", reps: "3 séries de 12" }]},
        { day: 10, type: "Pernas (Legs Heavy)", exercises: [{ name: "Agachamento Búlgaro", reps: "3 séries de 8 cada perna" },{ name: "Agachamento Isométrico (Wall Sit)", reps: "3 séries de 45s" },{ name: "Ponte para Glúteos", reps: "3 séries de 15" }]},
        { day: 11, type: "Descanso Ativo", exercises: [{ name: "Caminhada Leve", reps: "30 min tranquilos" }] },
        { day: 12, type: "Full Body Cardio", exercises: [{ name: "Burpees", reps: "3 séries de 10" },{ name: "Mountain Climbers (Escalador)", reps: "3 séries de 30s" },{ name: "Agachamento com Salto (Jump Squat)", reps: "3 séries de 10" }]},
        { day: 13, type: "Core Tridimensional", exercises: [{ name: "Prancha Lateral", reps: "3 séries de 30s cada lado" },{ name: "Russian Twist (Rotação de Tronco)", reps: "3 séries de 20 total" },{ name: "Abdominal Bicicleta (Bicycle Crunch)", reps: "3 séries de 20 total" }]},
        { day: 14, type: "Descanso Ativo", exercises: [{ name: "Dia de Descanso & Recuperação Ativa", reps: "Descanso Total" }] }
    ],
    3: [
        { day: 15, type: "Push Intensidade", exercises: [{ name: "Flexão Declinada", reps: "4 séries de 8-10" },{ name: "Pike Push Up (Ombros)", reps: "3 séries de 5-8" },{ name: "Mergulho no Banco (Dips)", reps: "3 séries de 15" }]},
        { day: 16, type: "Pull & Legs Single-Leg", exercises: [{ name: "Barra Fixa / Remada na Mesa", reps: "4 séries de 15-20s isometria" },{ name: "Agachamento Pistol (Pistol Squat)", reps: "3 séries de 5 cada perna" },{ name: "Afundo / Passada (Lunge)", reps: "3 séries de 20 passos" }]},
        { day: 17, type: "HIIT Calistênico", exercises: [{ name: "Flexão de Braço", reps: "Tabata: 20s on / 10s off (4 rounds)" },{ name: "Agachamento Livre", reps: "Tabata: 20s on / 10s off (4 rounds)" },{ name: "Burpees", reps: "Tabata: 20s on / 10s off (4 rounds)" }]},
        { day: 18, type: "Descanso Ativo", exercises: [{ name: "Alongamento Geral & Mobilidade", reps: "30 min" }] },
        { day: 19, type: "Upper Body Volume", exercises: [{ name: "Flexão de Braço", reps: "100 repetições acumuladas" },{ name: "Mergulho no Banco (Dips)", reps: "50 repetições acumuladas" }]},
        { day: 20, type: "Lower Body Volume", exercises: [{ name: "Agachamento Livre", reps: "150 repetições acumuladas" },{ name: "Elevação de Panturrilha", reps: "100 repetições acumuladas" }]},
        { day: 21, type: "Descanso Ativo", exercises: [{ name: "Dia de Descanso & Recuperação Ativa", reps: "Descanso Total" }] }
    ],
    4: [
        { day: 22, type: "Skills & Técnica", exercises: [{ name: "Treino de L-Sit", reps: "Prática por 10 min" },{ name: "Bananeira na Parede (Handstand)", reps: "Prática por 10 min" }]},
        { day: 23, type: "Resistência Máxima", exercises: [{ name: "Flexão de Braço", reps: "4 séries até a falha" },{ name: "Agachamento Livre", reps: "4 séries até a falha" },{ name: "Prancha Abdominal", reps: "4 séries até o tempo máximo" }]},
        { day: 24, type: "Força Explosiva", exercises: [{ name: "Flexão de Braço", reps: "5 séries explosivas de 5" },{ name: "Agachamento com Salto (Jump Squat)", reps: "5 séries de 8" }]},
        { day: 25, type: "Descanso Ativo", exercises: [{ name: "Caminhada Leve", reps: "40 min ao ar livre" }] },
        { day: 26, type: "Teste Final - Parte 1", exercises: [{ name: "Flexão de Braço", reps: "1 série máx (Anote seu recorde)" },{ name: "Prancha Abdominal", reps: "1 série máx de tempo" }]},
        { day: 27, type: "Teste Final - Parte 2", exercises: [{ name: "Agachamento Livre", reps: "Máximo em 5 min" },{ name: "Burpees", reps: "Máximo em 5 min" }]},
        { day: 28, type: "Recuperação", exercises: [{ name: "Alongamento Geral & Mobilidade", reps: "30 min de relaxamento" }] },
        { day: 29, type: "Sessão Livre", exercises: [{ name: "Alongamento Geral & Mobilidade", reps: "Pratique seus movimentos favoritos" }] },
        { day: 30, type: "Conclusão & Vitória", exercises: [{ name: "Dia de Descanso & Recuperação Ativa", reps: "Parabéns! Você concluiu 30 dias!" }] }
    ]
};

// ==================================================
// LocalStorage Tracker Manager (compat)
// ==================================================
const CalisteniaTracker = {
    STORAGE_KEY: 'calistenia_pro_completed_days',
    getCompletedDays() { try { const d=localStorage.getItem(this.STORAGE_KEY); return d?JSON.parse(d):[] } catch(e){ return [] }},
    isDayCompleted(n){ return this.getCompletedDays().includes(n) },
    setDayCompleted(n, isCompleted=true){
        let days=this.getCompletedDays(); const idx=days.indexOf(n);
        if(isCompleted){ if(idx===-1) days.push(n)} else { if(idx>-1) days.splice(idx,1)}
        try{ localStorage.setItem(this.STORAGE_KEY, JSON.stringify(days)) }catch(e){}
        try{ XPSystem.addXP(isCompleted?100:-100); Achievements.checkAll(); WaterTracker.onDayInteraction(); }catch(e){}
    },
    toggleDayCompleted(n){ const isDone=this.isDayCompleted(n); this.setDayCompleted(n,!isDone); return !isDone},
    resetProgress(){ try{ localStorage.removeItem(this.STORAGE_KEY); localStorage.removeItem('calistenia_pro_journal'); localStorage.removeItem('calistenia_pro_xp'); localStorage.removeItem('calistenia_pro_weight'); localStorage.removeItem('calistenia_pro_water'); localStorage.removeItem('calistenia_pro_favorites'); }catch(e){}},
    getStreak(){
        const days=this.getCompletedDays().sort((a,b)=>a-b); if(!days.length) return 0;
        let streak=0,last=0; for(let d of days){ if(last===0||d===last+1){ streak++; last=d } else { streak=1; last=d } } return streak;
    },
    getTotalXP(){ return this.getCompletedDays().length * 100 },
    getLevel(){ const xp=this.getTotalXP(); return Math.floor(xp/500)+1 }
};

// ==================================================
// Diário
// ==================================================
const CalisteniaJournal = {
    STORAGE_KEY: 'calistenia_pro_journal',
    getJournal(){ try{ const d=localStorage.getItem(this.STORAGE_KEY); return d?JSON.parse(d):{} }catch(e){ return {}}},
    getNote(n){ return this.getJournal()[n]||'' },
    saveNote(n, t){ const j=this.getJournal(); j[n]=t; try{ localStorage.setItem(this.STORAGE_KEY, JSON.stringify(j))}catch(e){}}
};

// ==================================================
// Custom Routines (compat)
// ==================================================
const CustomRoutines = {
    STORAGE_KEY: 'calistenia_pro_custom_routines',
    getRoutines(){ try{ const d=localStorage.getItem(this.STORAGE_KEY); return d?JSON.parse(d):[] }catch(e){ return []}},
    saveRoutine(name, exercises){ const list=this.getRoutines(); list.push({ name, exercises, createdAt: new Date().toISOString(), duration: exercises.length*4 }); try{ localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list))}catch(e){}},
    deleteRoutine(idx){ const list=this.getRoutines(); if(idx>=0&&idx<list.length){ list.splice(idx,1); try{ localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list))}catch(e){}}}
};
window.CustomRoutines = CustomRoutines;

// ==================================================
// NOVOS SISTEMAS PREMIUM
// ==================================================

// XP & Levels
const XPSystem = {
    STORAGE_KEY: 'calistenia_pro_xp_bonus',
    getBonus(){ try{ return parseInt(localStorage.getItem(this.STORAGE_KEY)||'0',10)}catch(e){return 0}},
    addXP(v){ try{ const cur=this.getBonus(); localStorage.setItem(this.STORAGE_KEY, String(cur+v))}catch(e){}},
    getTotalXP(){ return CalisteniaTracker.getTotalXP() + this.getBonus() },
    getLevel(){ return Math.floor(this.getTotalXP()/500)+1 },
    getXPForNext(){ const total=this.getTotalXP(); const curLevel=this.getLevel(); const nextThreshold=curLevel*500; return { current: total - (curLevel-1)*500, needed: 500, total, nextThreshold, progress: ((total - (curLevel-1)*500)/500)*100 } }
};

// Favorites
const FavoritesManager = {
    STORAGE_KEY: 'calistenia_pro_favorites',
    getAll(){ try{ const d=localStorage.getItem(this.STORAGE_KEY); return d?JSON.parse(d):[] }catch(e){return []}},
    isFav(name){ return this.getAll().includes(name) },
    toggle(name){ let list=this.getAll(); const idx=list.indexOf(name); let nowFav=false; if(idx>-1){ list.splice(idx,1)} else { list.push(name); nowFav=true } try{ localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list))}catch(e){} return nowFav },
    count(){ return this.getAll().length }
};

// Weight Tracker
const WeightTracker = {
    STORAGE_KEY: 'calistenia_pro_weight',
    getHistory(){ try{ const d=localStorage.getItem(this.STORAGE_KEY); return d?JSON.parse(d):[] }catch(e){return []}},
    addEntry(weight){ const hist=this.getHistory(); hist.push({ date: new Date().toISOString().slice(0,10), weight: parseFloat(weight), ts: Date.now() }); // keep last 60
        if(hist.length>60) hist.shift();
        try{ localStorage.setItem(this.STORAGE_KEY, JSON.stringify(hist))}catch(e){} Achievements.checkAll();
    },
    getLatest(){ const h=this.getHistory(); return h.length?h[h.length-1].weight:null },
    getChartData(){ return this.getHistory().map(e=>({x:e.date.slice(5), y:e.weight})) }
};

// Water Tracker
const WaterTracker = {
    STORAGE_KEY: 'calistenia_pro_water',
    getTodayKey(){ return new Date().toISOString().slice(0,10) },
    getToday(){ try{ const d=localStorage.getItem(this.STORAGE_KEY); const obj=d?JSON.parse(d):{}; return obj[this.getTodayKey()]||0 }catch(e){return 0}},
    setToday(n){ try{ const d=localStorage.getItem(this.STORAGE_KEY); const obj=d?JSON.parse(d):{}; obj[this.getTodayKey()]=n; localStorage.setItem(this.STORAGE_KEY, JSON.stringify(obj)) }catch(e){}},
    addGlass(){ let cur=this.getToday(); if(cur<8){ cur++; this.setToday(cur); Achievements.checkAll(); return cur } return cur },
    removeGlass(){ let cur=this.getToday(); if(cur>0){ cur--; this.setToday(cur)} return cur },
    onDayInteraction(){},
    getWeekTotal(){ try{ const d=localStorage.getItem(this.STORAGE_KEY); const obj=d?JSON.parse(d):{}; let total=0; for(let i=0;i<7;i++){ const date=new Date(); date.setDate(date.getDate()-i); const k=date.toISOString().slice(0,10); total+= (obj[k]||0)} return total }catch(e){return 0}}
};

// Achievements System
const Achievements = {
    definitions: [
        { id:'first', icon:'🌱', title:'Primeiro Passo', desc:'Complete 1 dia do desafio', check:()=> CalisteniaTracker.getCompletedDays().length>=1 },
        { id:'streak3', icon:'🔥', title:'Faísca', desc:'3 dias em sequência', check:()=> CalisteniaTracker.getStreak()>=3 },
        { id:'week1', icon:'🥉', title:'Semana Bronze', desc:'7 dias concluídos', check:()=> CalisteniaTracker.getCompletedDays().length>=7 },
        { id:'disciplina', icon:'⚡', title:'Disciplina', desc:'10 dias totais', check:()=> CalisteniaTracker.getCompletedDays().length>=10 },
        { id:'week2', icon:'🥈', title:'Duas Semanas', desc:'14 dias concluídos', check:()=> CalisteniaTracker.getCompletedDays().length>=14 },
        { id:'week3', icon:'🥇', title:'21 Dias - Hábito', desc:'21 dias concluídos', check:()=> CalisteniaTracker.getCompletedDays().length>=21 },
        { id:'master30', icon:'🏆', title:'Mestre Calistênico', desc:'30 dias completos!', check:()=> CalisteniaTracker.getCompletedDays().length>=30 },
        { id:'hydra', icon:'💧', title:'Hidratado', desc:'Beba 8 copos hoje ou 28 na semana', check:()=> WaterTracker.getToday()>=8 || WaterTracker.getWeekTotal()>=28 },
        { id:'fav', icon:'⭐', title:'Colecionador', desc:'Favorite 5 exercícios', check:()=> FavoritesManager.count()>=5 },
        { id:'peso', icon:'⚖️', title:'Foco na Evolução', desc:'Registre seu peso 3 vezes', check:()=> WeightTracker.getHistory().length>=3 },
        { id:'calc', icon:'🧮', title:'Nutri Inteligente', desc:'Use a calculadora', check:()=> { try{ return localStorage.getItem('calistenia_pro_used_calc')==='1'}catch(e){return false}}},
        { id:'custom', icon:'🛠️', title:'Criador de Rotinas', desc:'Crie 1 rotina personalizada', check:()=> CustomRoutines.getRoutines().length>=1 },
    ],
    STORAGE_KEY_UNLOCKED: 'calistenia_pro_ach_unlocked',
    getUnlocked(){ try{ const d=localStorage.getItem(this.STORAGE_KEY_UNLOCKED); return d?JSON.parse(d):[] }catch(e){return []}},
    isUnlocked(id){ return this.getUnlocked().includes(id) },
    checkAll(){
        const unlocked=this.getUnlocked(); let newOnes=[];
        this.definitions.forEach(def=>{ if(def.check() && !unlocked.includes(def.id)){ unlocked.push(def.id); newOnes.push(def) }});
        if(newOnes.length){
            try{ localStorage.setItem(this.STORAGE_KEY_UNLOCKED, JSON.stringify(unlocked))}catch(e){}
            newOnes.forEach(a=>{ setTimeout(()=> showToast(`🏆 Conquista desbloqueada: ${a.title} ${a.icon}`, 'success'), 400)});
            try{ renderAchievementsPremium(); }catch(e){}
        }
        return unlocked;
    },
    progressFor(def){
        // return progress 0-100 for visual
        if(def.id==='first') return Math.min(100, CalisteniaTracker.getCompletedDays().length/1*100);
        if(def.id==='streak3') return Math.min(100, CalisteniaTracker.getStreak()/3*100);
        if(def.id==='week1') return Math.min(100, CalisteniaTracker.getCompletedDays().length/7*100);
        if(def.id==='disciplina') return Math.min(100, CalisteniaTracker.getCompletedDays().length/10*100);
        if(def.id==='week2') return Math.min(100, CalisteniaTracker.getCompletedDays().length/14*100);
        if(def.id==='week3') return Math.min(100, CalisteniaTracker.getCompletedDays().length/21*100);
        if(def.id==='master30') return Math.min(100, CalisteniaTracker.getCompletedDays().length/30*100);
        if(def.id==='hydra') return Math.min(100, Math.max(WaterTracker.getToday()/8*100, WaterTracker.getWeekTotal()/28*100));
        if(def.id==='fav') return Math.min(100, FavoritesManager.count()/5*100);
        if(def.id==='peso') return Math.min(100, WeightTracker.getHistory().length/3*100);
        if(def.id==='calc') return (localStorage.getItem('calistenia_pro_used_calc')==='1')?100:0;
        if(def.id==='custom') return Math.min(100, CustomRoutines.getRoutines().length/1*100);
        return 0;
    }
};

// ==================================================
// Theme System (compat + enhanced)
// ==================================================
const ThemeManager = {
    STORAGE_KEY: 'calistenia_pro_theme',
    init(){
        const saved=localStorage.getItem(this.STORAGE_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
        this.applyTheme(saved);
        document.querySelectorAll('.theme-toggle-btn').forEach(btn=> btn.addEventListener('click', ()=> this.toggle()));
    },
    applyTheme(theme){
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.STORAGE_KEY, theme);
        document.querySelectorAll('.theme-toggle-btn').forEach(btn=>{
            btn.textContent = theme==='dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
            btn.setAttribute('aria-label', `Alternar para modo ${theme==='dark'?'claro':'escuro'}`);
        })
    },
    toggle(){
        const cur=document.documentElement.getAttribute('data-theme')||'light';
        const next=cur==='dark'?'light':'dark';
        this.applyTheme(next);
        showToast(`Modo ${next==='dark'?'Escuro':'Claro'} ativado!`, 'info');
    }
};

// ==================================================
// Toast (premium)
// ==================================================
function showToast(message, type='success'){
    let container=document.getElementById('toast-container');
    if(!container){
        container=document.createElement('div');
        container.id='toast-container';
        document.body.appendChild(container);
    }
    const toast=document.createElement('div');
    toast.className=`toast toast-${type}`;
    const icons={success:'✓', info:'ℹ', warning:'⚠', error:'✕'};
    toast.innerHTML=`<span style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.2);display:grid;place-items:center;font-weight:800;flex-shrink:0">${icons[type]||'✓'}</span><span style="flex:1;line-height:1.3">${message}</span><button onclick="this.parentElement.remove()" style="background:rgba(255,255,255,0.18);border:none;color:white;width:24px;height:24px;border-radius:50%;cursor:pointer;display:grid;place-items:center">✕</button>`;
    container.appendChild(toast);
    setTimeout(()=>{
        toast.style.opacity='0'; toast.style.transform='translateX(10px) scale(0.98)'; toast.style.transition='all 0.3s ease';
        setTimeout(()=> toast.remove(), 300);
    }, 3800);
}

// ==================================================
// WORKOUT PLAYER (compat + wake lock + vibration)
// ==================================================
const WorkoutPlayer = {
    overlay:null, currentWorkoutTitle:'', currentExercises:[], currentIndex:0, restInterval:null, dayNum:null,
    init(){
        if(document.getElementById('workoutPlayerOverlay')) return;
        const div=document.createElement('div'); div.id='workoutPlayerOverlay'; div.className='modal-overlay'; div.style.display='none';
        div.innerHTML=`
            <div class="modal-content" style="max-width:660px;text-align:center;position:relative;">
                <button id="wpCloseBtn" class="btn-outline btn-sm" style="position:absolute;top:14px;right:14px;">✕</button>
                <span class="label success" id="wpBadge">MODO TREINO ATIVO • FOCO TOTAL</span>
                <h2 id="wpTitle" style="margin:0.5rem 0 1.2rem 0;font-family:var(--font-body);letter-spacing:-0.02em">Nome do Treino</h2>
                <div id="wpContentBox" style="background:var(--color-bg-main);border:1px solid var(--color-border);padding:1.4rem;border-radius:16px;margin-bottom:1.2rem;">
                    <span id="wpStepCount" style="font-size:0.8rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:var(--color-cta);">Exercício 1 de 4</span>
                    <h3 id="wpExName" style="font-size:1.55rem;margin:0.35rem 0;">Flexão</h3>
                    <div id="wpExReps" style="font-size:1rem;font-weight:800;color:var(--color-cta);margin-bottom:0.9rem;">3 séries de 10</div>
                    <div id="wpImgBox" style="margin:1rem 0;display:flex;gap:0.6rem;justify-content:center;flex-wrap:wrap"></div>
                    <p id="wpPurpose" style="font-size:0.9rem;color:var(--color-text-muted);margin:0;line-height:1.6">Objetivo...</p>
                </div>
                <div id="wpRestBox" style="display:none;background:linear-gradient(135deg,#EFF6FF 0%,#DBEAFE 100%);border:1px solid #93C5FD;padding:1.3rem;border-radius:16px;margin-bottom:1.2rem;color:#1E3A8A;">
                    <h4 style="margin-bottom:0.2rem;font-size:0.95rem">⏱️ Intervalo Inteligente</h4>
                    <div id="wpTimerDisplay" style="font-size:2.6rem;font-weight:800;font-variant-numeric:tabular-nums;letter-spacing:-0.03em;color:#1D4ED8;">00:30</div>
                    <div style="display:flex;gap:0.6rem;justify-content:center;margin-top:0.6rem;flex-wrap:wrap">
                        <button id="wpSkipRestBtn" class="btn-cta btn-sm">Pular ↓</button>
                        <button id="wpAdd15Btn" class="btn-outline btn-sm" style="background:white">+15s</button>
                    </div>
                </div>
                <div style="display:flex;gap:0.8rem;justify-content:center;flex-wrap:wrap">
                    <button id="wpPrevBtn" class="btn-outline">← Anterior</button>
                    <button id="wpNextBtn" class="btn-cta">Próximo →</button>
                </div>
                <p style="font-size:0.75rem;color:var(--color-text-muted);margin-top:1rem">💡 Dica: mantenha a tela ativa. Vibração e som ao fim do descanso.</p>
            </div>`;
        document.body.appendChild(div); this.overlay=div;
        document.getElementById('wpCloseBtn').addEventListener('click', ()=> this.close());
        document.getElementById('wpPrevBtn').addEventListener('click', ()=> this.prev());
        document.getElementById('wpNextBtn').addEventListener('click', ()=> this.next());
        document.getElementById('wpSkipRestBtn').addEventListener('click', ()=> this.stopRest());
        document.getElementById('wpAdd15Btn')?.addEventListener('click', ()=>{
            // add 15s logic
            if(this.restInterval){ this.restSeconds+=15 }
        });
    },
    start(title, exercises, dayNum=null){
        this.init(); this.currentWorkoutTitle=title; this.currentExercises=exercises; this.currentIndex=0; this.dayNum=dayNum;
        document.getElementById('wpTitle').textContent=title; this.overlay.style.display='flex'; this.renderStep();
        try{ if('wakeLock' in navigator) navigator.wakeLock.request('screen'); }catch(e){}
    },
    renderStep(){
        this.stopRest();
        if(this.currentIndex >= this.currentExercises.length){ this.renderVictory(); return; }
        const exItem=this.currentExercises[this.currentIndex]; const total=this.currentExercises.length;
        document.getElementById('wpStepCount').textContent=`Exercício ${this.currentIndex+1} de ${total}`;
        document.getElementById('wpExName').textContent=exItem.name;
        document.getElementById('wpExReps').textContent=exItem.reps;
        let exId="flexao-de-braco"; if(typeof processIdStr==='function'){ exId=processIdStr(exItem.name) }
        const data=(window.exerciseDB && window.exerciseDB[exId]) ? window.exerciseDB[exId] : null;
        document.getElementById('wpPurpose').textContent = data ? data.purpose : "Execute com controle respiratório e amplitude total.";
        const imgBox=document.getElementById('wpImgBox'); imgBox.innerHTML='';
        const srcMap= { legs:"assets/img/squat_start.png", push:"assets/img/pushup_start.png", pull:"assets/img/pullup_start.png", core:"assets/img/plank.png", cardio:"assets/img/generic.png", mobility:"assets/img/generic.png" };
        let cat = data ? data.category : 'push';
        let srcImg = srcMap[cat] || "assets/img/pushup_start.png";
        // show both start/end if exist
        const imageMapDup = {
            "flexao-de-braco": ["assets/img/pushup_start.png","assets/img/pushup_end.png"],
            "agachamento-livre": ["assets/img/squat_start.png","assets/img/squat_end.png"],
            "barra-fixa-isometria": ["assets/img/pullup_start.png","assets/img/pullup_end.png"],
            "mergulho-no-banco": ["assets/img/dip_start.png","assets/img/dip_end.png"],
            "afundo": ["assets/img/lunge_start.png","assets/img/lunge_end.png"]
        };
        let imgs = imageMapDup[exId] || [srcImg];
        imgs.forEach(s=>{
            const img=document.createElement('img'); img.src=s; img.alt=exItem.name;
            img.style.maxHeight='170px'; img.style.borderRadius='12px'; img.style.border='1px solid var(--color-border)'; img.style.objectFit='contain'; img.style.background='var(--color-bg-alt)'; img.style.padding='4px';
            imgBox.appendChild(img);
        });
        document.getElementById('wpPrevBtn').style.display = this.currentIndex===0 ? 'none':'inline-flex';
        document.getElementById('wpNextBtn').textContent = this.currentIndex===total-1 ? 'Concluir Treino! 🎉' : 'Próximo / Descanso →';
        document.getElementById('wpNextBtn').style.display='inline-flex';
        document.getElementById('wpPrevBtn').style.display = this.currentIndex===0?'none':'inline-flex';
    },
    next(){
        if(this.currentIndex < this.currentExercises.length -1){
            this.startRest(()=>{ this.currentIndex++; this.renderStep(); });
        } else { this.currentIndex++; this.renderVictory(); }
    },
    prev(){ if(this.currentIndex>0){ this.currentIndex--; this.renderStep(); } },
    restSeconds:30,
    startRest(onFinish){
        const restBox=document.getElementById('wpRestBox'); const display=document.getElementById('wpTimerDisplay'); restBox.style.display='block';
        this.restSeconds=30;
        display.textContent=`00:${String(this.restSeconds).padStart(2,'0')}`;
        this.restInterval=setInterval(()=>{
            this.restSeconds--; display.textContent=`00:${String(Math.max(0,this.restSeconds)).padStart(2,'0')}`;
            if(this.restSeconds<=0){
                this.stopRest();
                try{ const ctx=new (window.AudioContext||window.webkitAudioContext)(); const osc=ctx.createOscillator(); const g=ctx.createGain(); osc.connect(g); g.connect(ctx.destination); osc.frequency.value=880; g.gain.value=0.22; osc.start(); g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime+0.7); osc.stop(ctx.currentTime+0.7); }catch(e){}
                try{ if(navigator.vibrate) navigator.vibrate([180,80,180]); }catch(e){}
                if(onFinish) onFinish();
            }
        },1000);
    },
    stopRest(){ if(this.restInterval){ clearInterval(this.restInterval); this.restInterval=null; } const rb=document.getElementById('wpRestBox'); if(rb) rb.style.display='none'; },
    renderVictory(){
        const box=document.getElementById('wpContentBox');
        box.innerHTML=`
            <div style="padding:1.2rem 0;">
                <div style="width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#10B981 0%,#059669 100%);display:grid;place-items:center;margin:0 auto 1rem;color:white;font-size:2rem;box-shadow:0 12px 24px -8px rgba(16,185,129,0.45)">✓</div>
                <h2 style="font-size:1.9rem;color:#10B981;margin-bottom:0.4rem;font-family:var(--font-body)">Treino Concluído!</h2>
                <p style="color:var(--color-text-dark);font-weight:600;margin-bottom:0.3rem">Você superou a gravidade hoje!</p>
                <p style="font-size:0.9rem;color:var(--color-text-muted)">+100 XP • Sequência de ${CalisteniaTracker.getStreak()} dias • Continue assim!</p>
                <div style="margin:1.4rem 0;display:flex;gap:0.7rem;justify-content:center;flex-wrap:wrap">
                    <button id="wpShareBtn" class="btn-cta">🏆 Cartão de Conquista</button>
                    <button id="wpDashBtn" class="btn-outline">📊 Ver Dashboard</button>
                </div>
            </div>`;
        document.getElementById('wpPrevBtn').style.display='none'; document.getElementById('wpNextBtn').style.display='none';
        if(this.dayNum){
            CalisteniaTracker.setDayCompleted(this.dayNum, true);
            if(typeof renderProgressHeader==='function') renderProgressHeader();
            if(typeof renderWeek==='function' && window.currentActiveWeek) renderWeek(window.currentActiveWeek);
            try{ renderDashboardPremium(); }catch(e){}
            try{ Achievements.checkAll(); }catch(e){}
        }
        document.getElementById('wpShareBtn')?.addEventListener('click', ()=>{ this.close(); ShareCardModal.open(); });
        document.getElementById('wpDashBtn')?.addEventListener('click', ()=>{ this.close(); window.location.href='dashboard.html'; });
        try{ confettiBurst(); }catch(e){}
    },
    close(){ this.stopRest(); if(this.overlay) this.overlay.style.display='none'; try{ if(document.exitFullscreen) {} }catch(e){} }
};
window.WorkoutPlayer = WorkoutPlayer;

// tiny confetti
function confettiBurst(){
    const c=document.createElement('canvas'); c.style.position='fixed'; c.style.inset='0'; c.style.pointerEvents='none'; c.style.zIndex='10001'; c.width=innerWidth; c.height=innerHeight; document.body.appendChild(c); const ctx=c.getContext('2d'); let parts=[]; for(let i=0;i<80;i++){ parts.push({x:Math.random()*c.width, y:Math.random()*c.height - c.height, r:Math.random()*6+4, c:`hsl(${200+Math.random()*40},90%,60%)`, vx:(Math.random()-0.5)*6, vy:Math.random()*4+3, rot:Math.random()*360}) } let f=0; function anim(){ ctx.clearRect(0,0,c.width,c.height); parts.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.vy+=0.15; p.rot+=4; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.c; ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r); ctx.restore(); }); f++; if(f<140) requestAnimationFrame(anim); else c.remove(); } anim();
}

// ==================================================
// Share Card (compat)
// ==================================================
const ShareCardModal = {
    overlay:null,
    init(){
        if(document.getElementById('shareCardOverlay')) return;
        const div=document.createElement('div'); div.id='shareCardOverlay'; div.className='modal-overlay'; div.style.display='none';
        div.innerHTML=`
            <div class="modal-content" style="max-width:520px;text-align:center;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                    <h3 style="margin:0">🏆 Cartão de Conquista</h3><button id="closeShareBtn" class="btn-outline btn-sm">✕</button>
                </div>
                <canvas id="shareCanvas" width="1080" height="1080" style="width:100%;height:auto;border-radius:18px;box-shadow:var(--shadow-soft);margin-bottom:1.2rem;"></canvas>
                <a id="downloadShareCardBtn" class="btn-cta btn-large" download="conquista-calistenia-pro.png" style="width:100%;">📥 Baixar Imagem</a>
                <button id="shareNativeBtn" class="btn-outline" style="width:100%;margin-top:0.6rem;display:none">📤 Compartilhar</button>
            </div>`;
        document.body.appendChild(div); this.overlay=div;
        document.getElementById('closeShareBtn').addEventListener('click', ()=> this.overlay.style.display='none');
        div.addEventListener('click', (e)=>{ if(e.target===div) div.style.display='none' });
    },
    open(){ this.init(); this.overlay.style.display='flex'; this.drawCanvas(); },
    drawCanvas(){
        const canvas=document.getElementById('shareCanvas'); if(!canvas) return; const ctx=canvas.getContext('2d');
        const daysDone=CalisteniaTracker.getCompletedDays().length; const streak=CalisteniaTracker.getStreak(); const level=XPSystem.getLevel(); const xp=XPSystem.getTotalXP();
        // bg
        const grad=ctx.createLinearGradient(0,0,1080,1080); grad.addColorStop(0,'#020617'); grad.addColorStop(1,'#0F172A'); ctx.fillStyle=grad; ctx.fillRect(0,0,1080,1080);
        // mesh
        ctx.fillStyle='rgba(37,99,235,0.08)'; ctx.beginPath(); ctx.arc(200,200,380,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='rgba(6,182,214,0.07)'; ctx.beginPath(); ctx.arc(900,300,320,0,Math.PI*2); ctx.fill();
        // border
        ctx.strokeStyle='#2563EB'; ctx.lineWidth=18; ctx.strokeRect(28,28,1024,1024);
        // inner border
        ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=2; ctx.strokeRect(44,44,992,992);
        // title
        ctx.fillStyle='#FFFFFF'; ctx.font='900 56px Inter, sans-serif'; ctx.textAlign='center'; ctx.fillText('CALISTENIA PRO',540,160);
        ctx.fillStyle='#60A5FA'; ctx.font='800 22px Inter, sans-serif'; ctx.letterSpacing='6px'; ctx.fillText('DOMINE SEU PRÓPRIO CORPO',540,198);
        // badge outer
        ctx.beginPath(); ctx.arc(540,500,190,0,Math.PI*2); ctx.fillStyle='rgba(37,99,235,0.12)'; ctx.fill();
        // badge
        ctx.beginPath(); ctx.arc(540,500,150,0,Math.PI*2); ctx.fillStyle='#2563EB'; ctx.fill(); ctx.lineWidth=10; ctx.strokeStyle='#10B981'; ctx.stroke();
        ctx.fillStyle='#FFFFFF'; ctx.font='900 96px Inter, sans-serif'; ctx.fillText(`${daysDone}`,540,528);
        ctx.font='800 20px Inter, sans-serif'; ctx.letterSpacing='2px'; ctx.fillText('DIAS CONCLUÍDOS',540,570);
        // xp level
        ctx.fillStyle='#F8FAFC'; ctx.font='800 30px Inter, sans-serif'; ctx.fillText(`🔥 ${streak} dias de sequência  •  Nível ${level}  •  ${xp} XP`,540,740);
        // quote
        ctx.fillStyle='#94A3B8'; ctx.font='600 24px Inter, sans-serif'; ctx.fillText('30 Dias de Transformação com Peso Corporal',540,800);
        ctx.fillStyle='#E2E8F0'; ctx.font='700 20px Inter, sans-serif'; ctx.fillText(new Date().toLocaleDateString('pt-BR', {day:'2-digit', month:'long', year:'numeric'}),540,840);
        // footer
        ctx.fillStyle='#10B981'; ctx.font='900 28px Inter, sans-serif'; ctx.fillText('🏆 MESTRE DA GRAVIDADE',540,920);
        ctx.fillStyle='rgba(255,255,255,0.35)'; ctx.font='600 14px Inter, sans-serif'; ctx.fillText('calisteniapro.app  •  #CalisteniaPro',540,1000);
        const dataUrl=canvas.toDataURL('image/png');
        const dl=document.getElementById('downloadShareCardBtn'); if(dl) dl.href=dataUrl;
        const shareBtn=document.getElementById('shareNativeBtn');
        if(navigator.share && navigator.canShare && shareBtn){
            shareBtn.style.display='inline-flex';
            shareBtn.onclick= async ()=>{
                try{
                    const blob=await (await fetch(dataUrl)).blob(); const file=new File([blob],'conquista.png',{type:'image/png'});
                    await navigator.share({ title:'Minha conquista Calistenia Pro', text:`Completei ${daysDone} dias! 🔥 Nível ${level}`, files:[file] });
                }catch(e){ showToast('Compartilhamento cancelado','info')}
            };
        }
    }
};

// ==================================================
// Timer Pro Advanced (new)
// ==================================================
const TimerPro = {
    overlay:null, mode:'tabata', interval:null, remaining:0, total:0, round:1, isRunning:false,
    init(){
        if(document.getElementById('timerProOverlay')) return;
        const div=document.createElement('div'); div.id='timerProOverlay'; div.className='modal-overlay timer-pro-modal'; div.style.display='none';
        div.innerHTML=`
            <div class="modal-content">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
                    <h3 style="margin:0">⏱️ Timer Pro</h3><button id="closeTimerPro" class="btn-outline btn-sm">✕ Fechar</button>
                </div>
                <div class="timer-mode-tabs">
                    <button class="timer-mode-tab active" data-mode="tabata">TABATA 20/10</button>
                    <button class="timer-mode-tab" data-mode="emom">EMOM</button>
                    <button class="timer-mode-tab" data-mode="countdown">CONTAGEM</button>
                    <button class="timer-mode-tab" data-mode="amrap">AMRAP 10'</button>
                </div>
                <div id="timerProDisplay" class="timer-display">00:20</div>
                <div id="timerProSub" style="font-weight:700;color:var(--color-text-muted);margin-bottom:1rem;letter-spacing:0.04em;text-transform:uppercase;font-size:0.85rem">Round 1 de 8 • TRABALHO</div>
                <div style="height:8px;background:var(--color-border);border-radius:999px;overflow:hidden;margin-bottom:1.4rem">
                    <div id="timerProBar" style="height:100%;width:100%;background:var(--gradient-primary);transition:width 0.3s linear"></div>
                </div>
                <div style="display:flex;gap:0.7rem;justify-content:center;flex-wrap:wrap">
                    <button id="timerProStart" class="btn-cta btn-large">▶️ Iniciar</button>
                    <button id="timerProPause" class="btn-outline" style="display:none">⏸️ Pausar</button>
                    <button id="timerProReset" class="btn-outline">🔄 Reset</button>
                </div>
                <div style="display:flex;gap:0.5rem;justify-content:center;margin-top:1rem;flex-wrap:wrap">
                    <button class="btn-outline btn-sm" data-preset="30">30s</button>
                    <button class="btn-outline btn-sm" data-preset="60">60s</button>
                    <button class="btn-outline btn-sm" data-preset="90">90s</button>
                    <button class="btn-outline btn-sm" data-preset="120">2'</button>
                </div>
            </div>`;
        document.body.appendChild(div); this.overlay=div;
        div.querySelectorAll('.timer-mode-tab').forEach(b=> b.addEventListener('click', ()=>{
            div.querySelectorAll('.timer-mode-tab').forEach(x=>x.classList.remove('active')); b.classList.add('active'); this.mode=b.dataset.mode; this.reset();
        }));
        document.getElementById('closeTimerPro').addEventListener('click', ()=> this.close());
        document.getElementById('timerProStart').addEventListener('click', ()=> this.start());
        document.getElementById('timerProPause').addEventListener('click', ()=> this.pause());
        document.getElementById('timerProReset').addEventListener('click', ()=> this.reset());
        div.querySelectorAll('[data-preset]').forEach(b=> b.addEventListener('click', ()=>{
            const s=parseInt(b.dataset.preset,10); if(this.mode==='countdown'){ this.total=s; this.remaining=s; this.updateDisplay() }
        }));
        this.reset();
    },
    open(){ this.init(); this.overlay.style.display='flex'; },
    close(){ this.pause(); this.overlay.style.display='none'; },
    reset(){
        this.pause();
        if(this.mode==='tabata'){ this.round=1; this.remaining=20; this.total=20; this.isWork=true }
        else if(this.mode==='emom'){ this.round=1; this.remaining=60; this.total=60 }
        else if(this.mode==='amrap'){ this.remaining=600; this.total=600; this.round=1 }
        else { this.remaining=this.total||60; }
        this.updateDisplay();
    },
    start(){
        if(this.isRunning) return; this.isRunning=true;
        document.getElementById('timerProStart').style.display='none'; document.getElementById('timerProPause').style.display='inline-flex';
        this.interval=setInterval(()=> this.tick(), 1000);
        try{ if('wakeLock' in navigator) navigator.wakeLock.request('screen'); }catch(e){}
    },
    pause(){
        this.isRunning=false; if(this.interval){ clearInterval(this.interval); this.interval=null }
        const s=document.getElementById('timerProStart'); const p=document.getElementById('timerProPause'); if(s) s.style.display='inline-flex'; if(p) p.style.display='none';
    },
    tick(){
        this.remaining--;
        if(this.mode==='tabata'){
            if(this.remaining<=0){
                this.beep();
                if(this.isWork){ // go rest
                    this.isWork=false; this.remaining=10; this.total=10;
                } else {
                    this.round++; this.isWork=true; this.remaining=20; this.total=20;
                    if(this.round>8){ this.pause(); showToast('🔥 Tabata completo! Excelente!','success'); this.beep(1200); return }
                }
            }
        } else if(this.mode==='emom'){
            if(this.remaining<=0){ this.beep(); this.round++; this.remaining=60; showToast(`EMOM Round ${this.round} • Vai!`,'info') }
        } else if(this.mode==='amrap'){
            if(this.remaining<=0){ this.pause(); showToast('⏰ AMRAP finalizado! Anote suas voltas','success'); this.beep(1200); return }
        } else {
            if(this.remaining<=0){ this.pause(); showToast('⏰ Tempo esgotado!','success'); this.beep(1200); try{ if(navigator.vibrate) navigator.vibrate([200,100,200]) }catch(e){} return }
        }
        this.updateDisplay();
    },
    beep(freq=880){
        try{ const ctx=new (window.AudioContext||window.webkitAudioContext)(); const o=ctx.createOscillator(); const g=ctx.createGain(); o.connect(g); g.connect(ctx.destination); o.frequency.value=freq; g.gain.value=0.25; o.start(); g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime+0.5); o.stop(ctx.currentTime+0.5); }catch(e){}
        try{ if(navigator.vibrate) navigator.vibrate(80)}catch(e){}
    },
    updateDisplay(){
        const d=document.getElementById('timerProDisplay'); const sub=document.getElementById('timerProSub'); const bar=document.getElementById('timerProBar');
        if(!d) return;
        const m=Math.floor(Math.max(0,this.remaining)/60); const s=Math.max(0,this.remaining)%60;
        d.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        d.style.color = (this.mode==='tabata' && !this.isWork) ? '#0EA5E9' : 'var(--color-text-dark)';
        if(this.mode==='tabata') sub.textContent=`Round ${this.round} de 8 • ${this.isWork?'TRABALHO 🔥':'DESCANSO 💨'}`;
        else if(this.mode==='emom') sub.textContent=`Round ${this.round} • EMOM • ${60-this.remaining}s`;
        else if(this.mode==='amrap') sub.textContent=`AMRAP • ${Math.floor((600-this.remaining)/60)}' decorridos`;
        else sub.textContent=`Contagem regressiva • ${this.total}s total`;
        const pct = this.total ? (this.remaining/this.total*100) : 100;
        if(bar) bar.style.width=`${pct}%`;
        bar.style.background = (this.mode==='tabata' && !this.isWork) ? 'linear-gradient(90deg,#06B6D4,#3B82F6)' : 'var(--gradient-primary)';
    }
};
window.TimerPro=TimerPro;

// ==================================================
// Export / Import
// ==================================================
const DataManager = {
    export(){
        const data={
            completed: CalisteniaTracker.getCompletedDays(),
            journal: CalisteniaJournal.getJournal(),
            routines: CustomRoutines.getRoutines(),
            weight: WeightTracker.getHistory(),
            water: (()=>{try{return JSON.parse(localStorage.getItem('calistenia_pro_water')||'{}')}catch(e){return {}}})(),
            favorites: FavoritesManager.getAll(),
            achievements: Achievements.getUnlocked(),
            xp_bonus: XPSystem.getBonus(),
            theme: localStorage.getItem('calistenia_pro_theme'),
            exportedAt: new Date().toISOString()
        };
        const blob=new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
        const url=URL.createObjectURL(blob);
        const a=document.createElement('a'); a.href=url; a.download=`calistenia-pro-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(url);
        showToast('📦 Backup exportado com sucesso!','success');
    },
    importFile(file){
        const reader=new FileReader();
        reader.onload=(e)=>{
            try{
                const data=JSON.parse(e.target.result);
                if(data.completed) localStorage.setItem('calistenia_pro_completed_days', JSON.stringify(data.completed));
                if(data.journal) localStorage.setItem('calistenia_pro_journal', JSON.stringify(data.journal));
                if(data.routines) localStorage.setItem('calistenia_pro_custom_routines', JSON.stringify(data.routines));
                if(data.weight) localStorage.setItem('calistenia_pro_weight', JSON.stringify(data.weight));
                if(data.water) localStorage.setItem('calistenia_pro_water', JSON.stringify(data.water));
                if(data.favorites) localStorage.setItem('calistenia_pro_favorites', JSON.stringify(data.favorites));
                if(data.xp_bonus!==undefined) localStorage.setItem('calistenia_pro_xp_bonus', String(data.xp_bonus));
                if(data.theme) localStorage.setItem('calistenia_pro_theme', data.theme);
                showToast('✅ Dados importados! Recarregando...','success');
                setTimeout(()=> location.reload(), 1200);
            }catch(err){ showToast('❌ Arquivo inválido','error')}
        };
        reader.readAsText(file);
    }
};

// ==================================================
// PROGRAM UI (compat + premium)
// ==================================================
let currentActiveWeek=1;
function renderProgressHeader(){
    const container=document.getElementById('programProgressHeader');
    if(!container) return;
    const completed=CalisteniaTracker.getCompletedDays();
    const total=30; const count=completed.length; const pct=Math.round(count/total*100); const streak=CalisteniaTracker.getStreak();
    const xpInfo=XPSystem.getXPForNext(); const level=XPSystem.getLevel();
    let badge="🌱 Iniciante Calistênico";
    if(count>=30) badge="🏆 Mestre Calistênico Supremo!";
    else if(count>=21) badge="🥇 Ouro (Semana 3)";
    else if(count>=14) badge="🥈 Prata (Semana 2)";
    else if(count>=7) badge="🥉 Bronze (Semana 1)";
    container.innerHTML=`
        <div class="progress-card">
            <div class="progress-info">
                <div style="flex:1;min-width:240px">
                    <div style="display:flex;align-items:center;gap:0.8rem;flex-wrap:wrap;margin-bottom:0.3rem">
                        <h3 style="margin:0;font-size:1.2rem">Seu Progresso de Transformação</h3>
                        <span style="background:var(--gradient-primary);color:white;padding:0.25rem 0.65rem;border-radius:999px;font-size:0.75rem;font-weight:800;letter-spacing:0.06em">NÍVEL ${level}</span>
                    </div>
                    <p style="margin:0;font-size:0.92rem">${count} de ${total} dias • ${pct}% • ${XPSystem.getTotalXP()} XP</p>
                    <div style="margin-top:0.7rem">
                        <div style="display:flex;justify-content:space-between;font-size:0.75rem;font-weight:700;color:var(--color-text-muted);margin-bottom:0.3rem"><span>XP para próximo nível</span><span>${xpInfo.current}/${xpInfo.needed}</span></div>
                        <div class="xp-bar"><div class="xp-fill" style="width:${xpInfo.progress}%"></div></div>
                    </div>
                </div>
                <div class="progress-badges" style="align-self:flex-start">
                    <span class="badge-pill streak-badge">🔥 ${streak} ${streak===1?'Dia Seguido':'Dias Seguidos'}</span>
                    <span class="badge-pill milestone-badge">${badge}</span>
                </div>
            </div>
            <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
            <div style="margin-top:1rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem">
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
                    <button class="btn-cta btn-sm" id="btnOpenShareCard">🏆 Compartilhar</button>
                    <button class="btn-outline btn-sm" id="btnOpenTimerPro">⏱️ Timer Pro</button>
                    <a href="dashboard.html" class="btn-outline btn-sm">📊 Dashboard</a>
                </div>
                <div style="display:flex;gap:0.5rem">
                    <button class="btn-outline btn-sm" id="btnExportData" style="font-size:0.8rem">📦 Exportar</button>
                    <label class="btn-outline btn-sm" style="font-size:0.8rem;cursor:pointer"><input type="file" id="importFileInput" accept=".json" style="display:none">📥 Importar</label>
                    <button class="btn-outline btn-sm" id="resetProgressBtn" style="font-size:0.8rem;color:#EF4444 !important;border-color:#FECACA">Resetar</button>
                </div>
            </div>
        </div>`;
    document.getElementById('resetProgressBtn')?.addEventListener('click', ()=>{
        if(confirm("Tem certeza que deseja resetar TODO o progresso? Isso apaga dias, diário, pesos e conquistas.")){
            CalisteniaTracker.resetProgress(); try{ localStorage.removeItem('calistenia_pro_ach_unlocked');}catch(e){} renderProgressHeader(); renderWeek(currentActiveWeek); try{renderDashboardPremium()}catch(e){} showToast("Progresso resetado.","info");
        }
    });
    document.getElementById('btnOpenShareCard')?.addEventListener('click', ()=> ShareCardModal.open());
    document.getElementById('btnOpenTimerPro')?.addEventListener('click', ()=> TimerPro.open());
    document.getElementById('btnExportData')?.addEventListener('click', ()=> DataManager.export());
    document.getElementById('importFileInput')?.addEventListener('change', (e)=>{ if(e.target.files[0]) DataManager.importFile(e.target.files[0]) });
}

function renderWeek(weekNum){
    currentActiveWeek=weekNum; window.currentActiveWeek=weekNum;
    const grid=document.getElementById('daysGrid'); if(!grid) return;
    document.querySelectorAll('.week-btn').forEach((b,i)=>{ b.classList.toggle('active', i===weekNum-1)});
    grid.innerHTML='';
    const days=programData[weekNum]; if(!days) return;
    days.forEach(day=>{
        const isDone=CalisteniaTracker.isDayCompleted(day.day);
        const card=document.createElement('div'); card.className=`day-card ${isDone?'completed-card':''}`;
        let exHtml=''; day.exercises.forEach(ex=>{
            const qp=encodeURIComponent(ex.name);
            // add favorite star
            const isFav=FavoritesManager.isFav(ex.name);
            exHtml+=`<li class="exercise-item">
                <a href="exercise.html?id=${qp}" class="exercise-name" title="Ver detalhes">🎯 ${ex.name}</a>
                <div style="display:flex;align-items:center;gap:0.4rem">
                    <button class="fav-btn" data-name="${ex.name.replace(/"/g,'&quot;')}" style="background:${isFav?'#FEF3C7':'var(--color-bg-main)'};border:1px solid ${isFav?'#FDE68A':'var(--color-border)'};width:28px;height:28px;border-radius:50%;display:grid;place-items:center;cursor:pointer;font-size:0.85rem;transition:all 0.2s">${isFav?'★':'☆'}</button>
                    <span class="exercise-reps">${ex.reps}</span>
                </div>
            </li>`;
        });
        const saved=CalisteniaJournal.getNote(day.day);
        card.innerHTML=`
            <div class="day-header">
                <div><h3>Dia ${day.day}</h3><span class="day-subtitle">${day.type}</span></div>
                <button class="btn-toggle-day ${isDone?'done':''}" data-day="${day.day}">${isDone?'✓ Concluído':'Concluir Dia'}</button>
            </div>
            <div class="day-content">
                <ul class="exercise-list">${exHtml}</ul>
                <div style="margin-top:1rem;display:flex;gap:0.5rem">
                    <button class="btn-cta btn-sm btn-start-player" data-day="${day.day}" style="flex:1">▶️ Treino Ativo</button>
                    <button class="btn-outline btn-sm btn-share-day" style="padding:0.45rem 0.7rem">⤴</button>
                </div>
                <div style="margin-top:0.9rem;border-top:1px dashed var(--color-border);padding-top:0.7rem">
                    <label style="font-size:0.78rem;font-weight:800;letter-spacing:0.05em;text-transform:uppercase;color:var(--color-text-muted);display:block;margin-bottom:0.3rem">📝 Diário & Recorde</label>
                    <input type="text" class="journal-input form-control" data-day="${day.day}" value="${saved.replace(/"/g,'&quot;')}" placeholder="Ex: 22 flexões limpas! Recorde!" style="font-size:0.85rem;padding:0.5rem 0.7rem;border-radius:10px">
                </div>
            </div>`;
        const toggleBtn=card.querySelector('.btn-toggle-day');
        toggleBtn.addEventListener('click', ()=>{
            const nowDone=CalisteniaTracker.toggleDayCompleted(day.day);
            renderProgressHeader(); renderWeek(currentActiveWeek); try{renderDashboardPremium()}catch(e){}
            if(nowDone) showToast(`🎉 Dia ${day.day} concluído! +100 XP`, 'success'); else showToast(`Dia ${day.day} desmarcado.`, 'info');
            try{Achievements.checkAll()}catch(e){}
        });
        card.querySelector('.btn-start-player').addEventListener('click', ()=> WorkoutPlayer.start(`Dia ${day.day} - ${day.type}`, day.exercises, day.day));
        const journalInput=card.querySelector('.journal-input');
        journalInput.addEventListener('change', (e)=>{ CalisteniaJournal.saveNote(day.day, e.target.value); showToast('Anotação salva!','info')});
        journalInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ e.target.blur() }});
        // fav toggles
        card.querySelectorAll('.fav-btn').forEach(btn=>{
            btn.addEventListener('click', (e)=>{
                e.preventDefault(); const name=btn.dataset.name; const nowFav=FavoritesManager.toggle(name);
                btn.textContent=nowFav?'★':'☆'; btn.style.background=nowFav?'#FEF3C7':'var(--color-bg-main)'; btn.style.borderColor=nowFav?'#FDE68A':'var(--color-border)';
                showToast(nowFav?`⭐ ${name} favoritado!`:`☆ Favorito removido`, 'info'); try{Achievements.checkAll()}catch(e){}
            });
        });
        card.querySelector('.btn-share-day')?.addEventListener('click', ()=>{
            if(navigator.share){ navigator.share({title:`Dia ${day.day} - ${day.type}`, text:`Meu treino Calistenia Pro - Dia ${day.day}: ${day.type}`}).catch(()=>{}) } else { showToast('Link copiado!','info'); try{navigator.clipboard.writeText(location.href)}catch(e){}}
        });
        grid.appendChild(card);
    });
}
window.filterWeek=function(w){ renderWeek(w) };

// ==================================================
// Dashboard Premium Renderer (used in program.html + dashboard.html)
// ==================================================
function renderDashboardPremium(){
    const el=document.getElementById('dashboardPremium');
    if(!el) return;
    const completed=CalisteniaTracker.getCompletedDays(); const pct=Math.round(completed.length/30*100); const streak=CalisteniaTracker.getStreak(); const xpInfo=XPSystem.getXPForNext(); const level=XPSystem.getLevel();
    // circular progress
    const circPct=pct; const circOffset= 2*Math.PI*70 * (1 - circPct/100);
    el.innerHTML=`
        <div class="dashboard-grid">
            <div class="dashboard-card" style="text-align:center">
                <h3 style="margin-bottom:0.6rem">Progresso Geral</h3>
                <div class="circular-progress">
                    <svg viewBox="0 0 160 160">
                        <defs><linearGradient id="gradProgress" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#2563EB"/><stop offset="100%" stop-color="#06B6D4"/></linearGradient></defs>
                        <circle class="bg" cx="80" cy="80" r="70"></circle>
                        <circle class="progress" cx="80" cy="80" r="70" stroke-dasharray="${2*Math.PI*70}" stroke-dashoffset="${circOffset}"></circle>
                    </svg>
                    <div class="circular-center">
                        <strong>${pct}%</strong><span>${completed.length} / 30 dias</span>
                    </div>
                </div>
                <div style="display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap">
                    <span class="badge-pill" style="background:var(--color-bg-main);border:1px solid var(--color-border)">🔥 ${streak} dias seguidos</span>
                    <span class="badge-pill" style="background:var(--gradient-primary);color:white;border:none">Nível ${level} • ${XPSystem.getTotalXP()} XP</span>
                </div>
                <div style="margin-top:1rem;text-align:left">
                    <div style="display:flex;justify-content:space-between;font-size:0.78rem;font-weight:800;color:var(--color-text-muted)"><span>XP para nível ${level+1}</span><span>${xpInfo.current}/500</span></div>
                    <div class="xp-bar"><div class="xp-fill" style="width:${xpInfo.progress}%"></div></div>
                </div>
            </div>
            <div class="dashboard-card">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem"><h3 style="margin:0">Calendário 30 Dias</h3><span style="font-size:0.78rem;font-weight:800;color:var(--color-text-muted);letter-spacing:0.06em;text-transform:uppercase">Toque para marcar</span></div>
                <div class="calendar-header"><span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span></div>
                <div class="calendar-grid" id="calendarGrid"></div>
                <div style="display:flex;gap:0.7rem;margin-top:1rem;flex-wrap:wrap;font-size:0.75rem;font-weight:700;color:var(--color-text-muted)"><span style="display:flex;align-items:center;gap:0.3rem"><i style="width:10px;height:10px;border-radius:50%;background:#10B981;display:inline-block"></i> Concluído</span><span style="display:flex;align-items:center;gap:0.3rem"><i style="width:10px;height:10px;border-radius:50%;border:1.8px solid #2563EB;display:inline-block"></i> Hoje</span><span style="display:flex;align-items:center;gap:0.3rem"><i style="width:10px;height:10px;border-radius:50%;background:var(--color-border);display:inline-block"></i> Pendente</span></div>
            </div>
        </div>

        <div style="display:grid;grid-template-columns: 1.1fr 0.9fr;gap:1.5rem;margin-bottom:1.5rem" class="stack-on-mobile">
            <div class="dashboard-card">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.8rem"><h3 style="margin:0">💧 Hidratação de Hoje</h3><span id="waterCountLabel" style="font-weight:800;color:var(--color-cta)">${WaterTracker.getToday()}/8 copos</span></div>
                <p style="font-size:0.88rem;margin-bottom:0.6rem">Meta: 35-40ml por kg. Toque nos copos para registrar.</p>
                <div class="water-tracker" id="waterTrackerGrid"></div>
                <div style="display:flex;gap:0.5rem;margin-top:1rem">
                    <button class="btn-cta btn-sm" id="btnAddWater">+1 Copo 250ml</button>
                    <button class="btn-outline btn-sm" id="btnRemoveWater">-1</button>
                    <span style="margin-left:auto;font-size:0.82rem;font-weight:700;color:var(--color-text-muted);align-self:center">Semana: ${WaterTracker.getWeekTotal()} copos</span>
                </div>
            </div>
            <div class="dashboard-card">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.8rem"><h3 style="margin:0">⚖️ Peso & Evolução</h3><span style="font-size:0.78rem;font-weight:800;color:var(--color-text-muted)">Últimos 60 dias</span></div>
                <div class="chart-wrap"><canvas id="weightChart"></canvas></div>
                <div style="display:flex;gap:0.6rem;margin-top:1rem;align-items:center">
                    <input type="number" id="weightInput" class="form-control" placeholder="Peso (kg)" step="0.1" style="max-width:130px;padding:0.55rem 0.8rem">
                    <button class="btn-cta btn-sm" id="btnAddWeight">Registrar</button>
                    <span style="font-size:0.82rem;color:var(--color-text-muted);margin-left:auto">${WeightTracker.getHistory().length} registros</span>
                </div>
            </div>
        </div>

        <div class="dashboard-card" style="margin-bottom:1.5rem">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.8rem;margin-bottom:1rem"><h3 style="margin:0">🏅 Conquistas & Medalhas</h3><span style="font-size:0.82rem;font-weight:800;color:var(--color-text-muted)">${Achievements.getUnlocked().length}/${Achievements.definitions.length} desbloqueadas</span></div>
            <div class="achievements-grid" id="achievementsGrid"></div>
        </div>
    `;
    // calendar
    const calGrid=document.getElementById('calendarGrid');
    if(calGrid){
        calGrid.innerHTML='';
        const todayDay = new Date().getDate() %30 || 1; // approximation, better use completed logic
        for(let i=1;i<=30;i++){
            const isDone=CalisteniaTracker.isDayCompleted(i);
            const isToday= i === (Math.max(...CalisteniaTracker.getCompletedDays(),0)+1) && !isDone && i<=30 ? true : false; // next pending is today visual
            // Actually to make today meaningful, highlight the next uncompleted day as today
            const div=document.createElement('div'); div.className='calendar-day';
            if(isDone) div.classList.add('completed'); else if(isToday) div.classList.add('today'); else if(i>completed.length+5) div.classList.add('future');
            div.innerHTML=`<span>${i}</span>${isDone?'<span class="day-check">✓</span>':''}`;
            div.title=`Dia ${i} - ${isDone?'Concluído':'Pendente'}`;
            div.addEventListener('click', ()=>{
                if(div.classList.contains('future')) return;
                const now=CalisteniaTracker.toggleDayCompleted(i);
                renderProgressHeader(); renderWeek(currentActiveWeek); renderDashboardPremium();
                showToast(now?`✓ Dia ${i} concluído!`:`Dia ${i} desmarcado`, now?'success':'info');
            });
            calGrid.appendChild(div);
        }
    }
    // water
    const waterGrid=document.getElementById('waterTrackerGrid');
    if(waterGrid){
        waterGrid.innerHTML='';
        const cur=WaterTracker.getToday();
        for(let i=0;i<8;i++){
            const g=document.createElement('div'); g.className='water-glass'+(i<cur?' filled':''); g.textContent= i<cur ? '💧' : '🥤';
            g.title=`Copo ${i+1}`;
            g.addEventListener('click', ()=>{
                const now= i<cur ? WaterTracker.removeGlass() : WaterTracker.addGlass();
                // simplify: clicking sets to i+1
                WaterTracker.setToday(i+1 > cur ? i+1 : i);
                renderDashboardPremium();
            });
            waterGrid.appendChild(g);
        }
        document.getElementById('btnAddWater')?.addEventListener('click', ()=>{ WaterTracker.addGlass(); renderDashboardPremium(); showToast('💧 +1 copo registrado!','success')});
        document.getElementById('btnRemoveWater')?.addEventListener('click', ()=>{ WaterTracker.removeGlass(); renderDashboardPremium(); });
    }
    // weight chart
    try{ drawWeightChart(); }catch(e){}
    // achievements
    const achGrid=document.getElementById('achievementsGrid');
    if(achGrid){
        achGrid.innerHTML='';
        Achievements.definitions.forEach(def=>{
            const unlocked=Achievements.isUnlocked(def.id); const prog=Achievements.progressFor(def);
            const div=document.createElement('div'); div.className='achievement '+(unlocked?'unlocked':'locked');
            div.innerHTML=`
                <span class="ach-icon">${def.icon}</span>
                <strong>${def.title}</strong>
                <span>${def.desc}</span>
                <div class="ach-progress"><i style="width:${prog}%"></i></div>
                <span style="font-size:0.7rem;font-weight:800;color:${unlocked?'#10B981':'var(--color-text-muted)'};margin-top:0.3rem;display:block">${unlocked?'✓ Desbloqueada': Math.round(prog)+'%'} </span>
            `;
            achGrid.appendChild(div);
        });
    }
    // weight input
    document.getElementById('btnAddWeight')?.addEventListener('click', ()=>{
        const v=document.getElementById('weightInput').value;
        if(!v || parseFloat(v)<30){ showToast('Peso inválido','error'); return }
        WeightTracker.addEntry(v); renderDashboardPremium(); showToast(`⚖️ ${v}kg registrado!`,'success'); document.getElementById('weightInput').value='';
    });
    // responsive stack helper
    if(window.innerWidth<1024){
        document.querySelectorAll('.stack-on-mobile').forEach(el=> el.style.gridTemplateColumns='1fr');
    }
}

function drawWeightChart(){
    const canvas=document.getElementById('weightChart'); if(!canvas) return; const ctx=canvas.getContext('2d');
    const data=WeightTracker.getHistory();
    // resize
    const rect=canvas.parentElement.getBoundingClientRect();
    canvas.width=rect.width*2; canvas.height=rect.height*2; canvas.style.width=rect.width+'px'; canvas.style.height=rect.height+'px';
    ctx.scale(2,2);
    const W=rect.width, H=rect.height;
    ctx.clearRect(0,0,W,H);
    if(data.length<2){
        ctx.fillStyle='#94A3B8'; ctx.font='700 0.9rem Inter'; ctx.textAlign='center'; ctx.fillText(data.length===0?'Registre seu peso para ver a evolução 📈':'Adicione mais um registro para gerar o gráfico', W/2, H/2);
        return;
    }
    const weights=data.map(d=>d.weight); const min=Math.min(...weights)-1; const max=Math.max(...weights)+1; const pad=30;
    // grid
    ctx.strokeStyle='rgba(148,163,184,0.15)'; ctx.lineWidth=1;
    for(let i=0;i<4;i++){ const y=pad + (H-pad*2)*(i/3); ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(W-pad, y); ctx.stroke(); ctx.fillStyle='#64748B'; ctx.font='600 10px Inter'; ctx.textAlign='right'; ctx.fillText((max - (max-min)*(i/3)).toFixed(1)+'kg', W-pad+2, y+3); }
    // line
    ctx.strokeStyle='#2563EB'; ctx.lineWidth=2.5; ctx.lineJoin='round'; ctx.lineCap='round'; ctx.beginPath();
    data.forEach((d,i)=>{
        const x=pad + (W-pad*2)*(i/(data.length-1));
        const y=pad + (H-pad*2)* (1 - (d.weight - min)/(max-min || 1));
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }); ctx.stroke();
    // gradient fill
    const grad=ctx.createLinearGradient(0,pad,0,H-pad); grad.addColorStop(0,'rgba(37,99,235,0.18)'); grad.addColorStop(1,'rgba(37,99,235,0)'); ctx.fillStyle=grad; ctx.lineTo(W-pad, H-pad); ctx.lineTo(pad, H-pad); ctx.closePath(); ctx.fill();
    // points
    data.forEach((d,i)=>{
        const x=pad + (W-pad*2)*(i/(data.length-1));
        const y=pad + (H-pad*2)* (1 - (d.weight - min)/(max-min || 1));
        ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fillStyle='#2563EB'; ctx.fill(); ctx.strokeStyle='white'; ctx.lineWidth=2; ctx.stroke();
    });
}
window.renderDashboardPremium=renderDashboardPremium;
function renderAchievementsPremium(){ try{renderDashboardPremium()}catch(e){} }

// Scroll progress + reveal + navbar
function initGlobalEnhancements(){
    // scroll progress
    let prog=document.getElementById('scrollProgress');
    if(!prog){ prog=document.createElement('div'); prog.id='scrollProgress'; prog.className='scroll-progress'; document.body.prepend(prog); }
    window.addEventListener('scroll', ()=>{
        const h=document.documentElement; const scrolled=(h.scrollTop/(h.scrollHeight - h.clientHeight))*100; prog.style.width=scrolled+'%';
        const nav=document.querySelector('.navbar'); if(nav) nav.classList.toggle('scrolled', window.scrollY>10);
    });
    // reveal
    const observer=new IntersectionObserver((entries)=> entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('active') }), {threshold:0.12});
    document.querySelectorAll('.reveal').forEach(el=> observer.observe(el));
    // lazy add reveal to sections if missing
    document.querySelectorAll('.fb-card, .step-card, .test-card, .day-card, .dashboard-card').forEach(el=>{ if(!el.classList.contains('reveal')){ el.classList.add('reveal'); observer.observe(el)} });
}

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=> navigator.serviceWorker.register('./sw.js').then(()=> console.log('SW ok')).catch(()=>{}));
}

document.addEventListener('DOMContentLoaded', ()=>{
    ThemeManager.init(); initGlobalEnhancements();
    if(document.getElementById('daysGrid')){ renderProgressHeader(); renderWeek(1); renderDashboardPremium(); Achievements.checkAll(); }
    if(document.getElementById('dashboardPremium') && !document.getElementById('daysGrid')){ renderDashboardPremium(); Achievements.checkAll(); }
    // hamburger
    const ham=document.querySelector('.hamburger'); const links=document.querySelector('.nav-links');
    if(ham && links){ ham.addEventListener('click', ()=>{ const open=links.classList.contains('mobile-active'); links.classList.toggle('mobile-active', !open); ham.setAttribute('aria-expanded', String(!open)); }) }
    // calc flag
    if(document.getElementById('btnCalculate')){ document.getElementById('btnCalculate').addEventListener('click', ()=>{ try{localStorage.setItem('calistenia_pro_used_calc','1'); Achievements.checkAll();}catch(e){} }) }
    // global search if exists
    const globalSearch=document.getElementById('globalSearch');
    if(globalSearch){
        globalSearch.addEventListener('input', (e)=>{
            const term=e.target.value.toLowerCase().trim();
            if(!term) return;
            const results=[]; if(window.exerciseDB){ Object.values(window.exerciseDB).forEach(ex=>{ if(ex.name.toLowerCase().includes(term) || ex.categoryName.toLowerCase().includes(term) || ex.muscles.join(' ').toLowerCase().includes(term)) results.push(ex)} )}
            const box=document.getElementById('globalSearchResults'); if(!box) return;
            if(results.length===0){ box.style.display='none'; return }
            box.style.display='block'; box.innerHTML=results.slice(0,5).map(ex=>`<a href="exercise.html?id=${encodeURIComponent(ex.name)}" style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 1rem;border-bottom:1px solid var(--color-border);color:var(--color-text-dark);font-weight:600;font-size:0.9rem"><span>${ex.name}</span><span style="font-size:0.75rem;color:var(--color-text-muted)">${ex.categoryName}</span></a>`).join('');
        });
        document.addEventListener('click', (e)=>{ if(!e.target.closest('#globalSearch') && !e.target.closest('#globalSearchResults')){ const r=document.getElementById('globalSearchResults'); if(r) r.style.display='none'}});
    }
    // onboarding first visit
    try{
        if(!localStorage.getItem('calistenia_pro_onboarded')){
            setTimeout(()=>{
                if(confirm('👋 Bem-vindo ao Calistenia Pro 2.0! Quer fazer um tour rápido de 20s pelas novidades?')){
                    showToast('🎯 Explore: Dashboard, Timer Pro, Hidratação e Conquistas!','info');
                    setTimeout(()=> showToast('📊 Seu progresso agora vale XP e desbloqueia medalhas!','success'), 1800);
                }
                localStorage.setItem('calistenia_pro_onboarded','1');
            }, 900);
        }
    }catch(e){}
    // timer pro trigger
    document.querySelectorAll('[data-open-timer]').forEach(b=> b.addEventListener('click', ()=> TimerPro.open()));
});
