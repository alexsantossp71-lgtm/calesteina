const exerciseDB = {
    "flexao-de-braco": {
        name: "Flexão de Braço",
        category: "push",
        categoryName: "Empurrar",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Desenvolver força fundamental de empurrar, fortalecendo peitoral, ombros e tríceps de forma integrada.",
        muscles: ["Peitoral Maior", "Tríceps Braquial", "Deltoide Anterior", "Core"],
        steps: [
            "Posicione as mãos no chão ligeiramente mais largas que a largura dos ombros.",
            "Mantenha o corpo alinhado da cabeça aos calcanhares, ativando glúteos e abdômen.",
            "Desça o peitoral de forma controlada até que ele fique a poucos centímetros do chão, mantendo cotovelos em ângulo de 45 graus.",
            "Empurre o chão com firmeza estendendo os braços até retornar à posição inicial."
        ]
    },
    "flexao-de-braco-apoiada": {
        name: "Flexão de Braço (Com Joelhos)",
        category: "push",
        categoryName: "Empurrar",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Versão adaptada para construir força de base e condicionar articulações antes de progredir para a flexão tradicional.",
        muscles: ["Peitoral Maior", "Tríceps Braquial", "Deltoide Anterior"],
        steps: [
            "Apoie as mãos no chão na largura dos ombros e apoie os joelhos no solo, cruzando os tornozelos atrás.",
            "Mantenha a linha reta entre os joelhos, quadril e tronco.",
            "Desça o tronco flexionando os cotovelos com controle até o peito aproximar-se do chão.",
            "Empurre o chão de volta estendendo completamente os braços."
        ]
    },
    "flexao-fechada": {
        name: "Flexão Fechada (Diamante)",
        category: "push",
        categoryName: "Empurrar",
        level: "intermediario",
        levelName: "Intermediário",
        purpose: "Aproximar as mãos para mudar o foco biomecânico e intensificar o recrutamento do tríceps braquial.",
        muscles: ["Tríceps Braquial", "Peitoral Medial", "Deltoide Anterior"],
        steps: [
            "Na posição de prancha, aproxime as mãos até que os polegares e indicadores formem um triângulo/diamante.",
            "Mantenha os cotovelos colados ao corpo durante a descida.",
            "Desça até o peitoral encostar suavemente nas mãos.",
            "Empurre o solo com força focando na contração dos tríceps."
        ]
    },
    "flexao-declinada": {
        name: "Flexão Declinada",
        category: "push",
        categoryName: "Empurrar",
        level: "intermediario",
        levelName: "Intermediário",
        purpose: "Elevar os pés para transferir maior carga corporal para a porção superior do peitoral e ombros.",
        muscles: ["Peitoral Superior", "Deltoide Anterior", "Tríceps Braquial"],
        steps: [
            "Apoie a ponta dos pés em um banco, cadeira firme ou elevação estável.",
            "Coloque as mãos no chão alinhadas à largura dos ombros.",
            "Desça o peitoral em direção ao chão mantendo o tronco e o quadril firmes e travados.",
            "Empurre o piso com energia de volta até estender os braços."
        ]
    },
    "pike-push-up": {
        name: "Pike Push Up (Ombros)",
        category: "push",
        categoryName: "Empurrar",
        level: "intermediario",
        levelName: "Intermediário",
        purpose: "Focar o desenvolvimento da força vertical de empurrar nos deltoides, servindo como base para a flexão em bananeira.",
        muscles: ["Deltoides (Ombros)", "Tríceps Braquial", "Trapézio", "Core"],
        steps: [
            "Na posição de prancha, caminhe com os pés em direção às mãos elevando o quadril para formar um 'V' invertido.",
            "Mantenha a cabeça em posição neutra entre os braços.",
            "Flexione os cotovelos descendo o topo da cabeça em direção ao chão ligeiramente à frente das mãos.",
            "Empurre o solo de volta para a posição inicial em 'V'."
        ]
    },
    "mergulho-no-banco": {
        name: "Mergulho no Banco (Dips)",
        category: "push",
        categoryName: "Empurrar",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Isolar e hipertrofiar o tríceps braquial e a porção inferior do peitoral utilizando o peso do próprio corpo.",
        muscles: ["Tríceps Braquial", "Peitoral Inferior", "Deltoide Anterior"],
        steps: [
            "Sente-se na borda de um banco ou cadeira firme com as mãos apoiadas ao lado dos quadris.",
            "Avance os pés para frente e deslize o quadril para fora do assento.",
            "Desça o corpo verticalmente dobrando os cotovelos até formar um ângulo de 90 graus.",
            "Empurre o corpo de volta para cima até estender os braços."
        ]
    },
    "elevacao-lateral": {
        name: "Elevação Lateral (com Carga Leve)",
        category: "push",
        categoryName: "Empurrar",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Isolar o deltoide lateral para conferir estética, largura e estabilidade aos ombros.",
        muscles: ["Deltoide Lateral", "Trapézio"],
        steps: [
            "Em pé com a coluna ereta, segure duas pequenas cargas (garrafas de água ou livros) ao lado do corpo.",
            "Mantenha os cotovelos com uma leve microflexão.",
            "Eleve os braços lateralmente até a altura dos ombros de forma controlada.",
            "Retorne devagar sem deixar os braços despencarem."
        ]
    },
    "barra-fixa-isometria": {
        name: "Barra Fixa / Remada na Mesa",
        category: "pull",
        categoryName: "Puxar",
        level: "iniciante",
        levelName: "Iniciante / Intermediário",
        purpose: "Construir a musculatura dorsal e bíceps, essencial para a saúde postural e força de tração.",
        muscles: ["Latíssimo do Dorso", "Bíceps Braquial", "Romboides", "Core"],
        steps: [
            "Para Remada na Mesa: Deite-se sob uma mesa firme, segure na borda e puxe o peitoral em direção ao tampo.",
            "Para Barra Fixa (Isometria): Pule ou use um apoio para posicionar o queixo acima da barra e segure a posição no ar pelo tempo indicado.",
            "Mantenha as escápulas retraídas e o abdômen firme durante toda a sustentação."
        ]
    },
    "superman": {
        name: "Superman (Fortalecimento Lombar)",
        category: "pull",
        categoryName: "Puxar",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Fortalecer a cadeia posterior e os eretores da espinha, garantindo equilíbrio muscular com o abdômen.",
        muscles: ["Eretores da Espinha", "Glúteos", "Deltoide Posterior"],
        steps: [
            "Deite-se de bruços no chão com os braços e pernas estendidos.",
            "Eleve simultaneamente os braços, peitoral e coxas fora do chão contrando a lombar.",
            "Sustente a posição no topo por 1 a 2 segundos.",
            "Desça de forma suave e repita."
        ]
    },
    "agachamento-livre": {
        name: "Agachamento Livre",
        category: "legs",
        categoryName: "Pernas",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Movimento fundamental para o desenvolvimento de pernas e glúteos, melhorando mobilidade de quadril e joelhos.",
        muscles: ["Quadríceps", "Glúteo Máximo", "Isquiotibiais", "Panturrilhas"],
        steps: [
            "Fique em pé com os pés afastados na largura dos ombros.",
            "Inicie o movimento projetando o quadril para trás e flexionando os joelhos como se fosse sentar.",
            "Desça até as coxas ficarem paralelas ao chão mantendo o peito elevado.",
            "Empurre o chão através dos calcanhares para subir até a posição vertical."
        ]
    },
    "agachamento-sumo": {
        name: "Agachamento Sumô",
        category: "legs",
        categoryName: "Pernas",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Aumentar a solicitação dos músculos adutores da coxa e dos glúteos através de uma base mais ampla.",
        muscles: ["Adutores da Coxa", "Glúteos", "Quadríceps"],
        steps: [
            "Posicione os pés bem mais afastados que a largura dos ombros com as pontas apontadas 45 graus para fora.",
            "Mantenha o tronco ereto e agache projetando os joelhos na direção das pontas dos pés.",
            "Desça até a linha dos joelhos e suba contraindo os glúteos no topo."
        ]
    },
    "afundo": {
        name: "Afundo / Passada (Lunge)",
        category: "legs",
        categoryName: "Pernas",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Exercício unilateral para corrigir assimetrias de força entre as pernas e aprimorar a estabilidade.",
        muscles: ["Quadríceps", "Glúteo Máximo", "Isquiotibiais", "Core"],
        steps: [
            "Dê um passo largo à frente mantendo o tronco ereto.",
            "Flexione ambos os joelhos a 90 graus até o joelho traseiro quase tocar o chão.",
            "Empurre o piso com a perna da frente para retornar à posição inicial.",
            "Alterne as pernas ou faça todas as repetições de um lado antes de trocar."
        ]
    },
    "elevacao-de-panturrilha": {
        name: "Elevação de Panturrilha",
        category: "legs",
        categoryName: "Pernas",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Fortalecer o complexo gastrocnêmio/sóleo, prevenindo lesões no tornozelo e aumentando a força de arranque.",
        muscles: ["Gastrocnêmio", "Sóleo"],
        steps: [
            "Fique em pé perto de uma parede para apoio de equilíbrio se necessário.",
            "Eleve o corpo projetando o peso para as pontas dos pés o mais alto possível.",
            "Segure 1 segundo na contração máxima e desça devagar alongando a panturrilha."
        ]
    },
    "agachamento-bulgaro": {
        name: "Agachamento Búlgaro",
        category: "legs",
        categoryName: "Pernas",
        level: "intermediario",
        levelName: "Intermediário",
        purpose: "Exercício unilateral avançado de altíssima exigência para hipertrofia de coxa e glúteo.",
        muscles: ["Quadríceps", "Glúteo Máximo", "Isquiotibiais", "Core"],
        steps: [
            "Apoie o peito do pé traseiro em uma cadeira ou banco atrás de você.",
            "Com a perna da frente, flexione o joelho descendo o quadril verticalmente.",
            "Desça até a coxa dianteira ficar paralela ao chão.",
            "Empurre com força pelo calcanhar dianteiro para retornar à posição inicial."
        ]
    },
    "agachamento-isometrico": {
        name: "Agachamento Isométrico (Wall Sit)",
        category: "legs",
        categoryName: "Pernas",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Desenvolver resistência muscular nos quadríceps e fortaleza mental na sustentação isométrica.",
        muscles: ["Quadríceps", "Glúteos", "Panturrilhas"],
        steps: [
            "Encoste as costas totalmente em uma parede e caminhe com os pés para frente.",
            "Desça o quadril até as coxas ficarem em ângulo de 90 graus (paralelas ao chão).",
            "Mantenha os joelhos alinhados sobre os tornozelos e as costas pressionadas na parede.",
            "Sustente a posição imóvel durante o tempo estabelecido."
        ]
    },
    "ponte-gluteos": {
        name: "Ponte para Glúteos",
        category: "legs",
        categoryName: "Pernas",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Ativar e fortalecer diretamente os glúteos e a cadeia posterior, aliviando tensões na lombar.",
        muscles: ["Glúteo Máximo", "Isquiotibiais", "Lombar"],
        steps: [
            "Deite-se de costas com os joelhos dobrados e pés apoiados no chão perto do quadril.",
            "Empurre o chão com os calcanhares e eleve o quadril até formar uma linha reta dos ombros aos joelhos.",
            "Contraia os glúteos com força no topo por 2 a 3 segundos.",
            "Desça lentamente até quase tocar o chão e repita."
        ]
    },
    "agachamento-salto": {
        name: "Agachamento com Salto (Jump Squat)",
        category: "legs",
        categoryName: "Pernas",
        level: "intermediario",
        levelName: "Intermediário",
        purpose: "Treinar explosão muscular de fibras rápidas, aumentando a potência atlética e gasto calórico.",
        muscles: ["Quadríceps", "Glúteos", "Panturrilhas", "Sistema Cardiovascular"],
        steps: [
            "Execute um agachamento livre tradicional até a posição paralela.",
            "Ao subir, salte explosivamente projetando o corpo para o alto.",
            "Aterrise de forma suave absorvendo o impacto ao retornar diretamente para a flexão do agachamento."
        ]
    },
    "agachamento-pistol": {
        name: "Agachamento Pistol (Pistol Squat)",
        category: "legs",
        categoryName: "Pernas",
        level: "avancado",
        levelName: "Avançado",
        purpose: "Dominar o agachamento de uma perna só, unindo força máxima, flexibilidade de tornozelo e equilíbrio.",
        muscles: ["Quadríceps", "Glúteos", "Flexores do Quadril", "Tornozelos", "Core"],
        steps: [
            "Fique em pé apoiado em uma só perna e estenda a outra perna à frente no ar.",
            "Estenda os braços à frente para estabilizar o centro de gravidade.",
            "Agache devagar na perna de apoio até encostar a coxa na panturrilha.",
            "Empurre pelo calcanhar para subir de volta. (Iniciantes podem apoiar a mão em uma parede ou cadeira)."
        ]
    },
    "prancha-abdominal": {
        name: "Prancha Abdominal",
        category: "core",
        categoryName: "Core",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Construir rigidez e estabilidade isométrica em toda a cinta abdominal e coluna lombar.",
        muscles: ["Reto Abdominal", "Transverso do Abdômen", "Lombar", "Ombros"],
        steps: [
            "Apoie os antebraços no chão com os cotovelos alinhados diretamente abaixo dos ombros.",
            "Estenda as pernas para trás apoiando-se nas pontas dos pés.",
            "Mantenha o corpo em linha reta rigorosa da cabeça aos pés.",
            "Respire ritmadamente mantendo o abdômen e glúteos contraídos."
        ]
    },
    "prancha-alta-toque": {
        name: "Prancha Alta com Toque no Ombro",
        category: "core",
        categoryName: "Core",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Desafiar o core com estabilização anti-rotacional enquanto alterna os apoios.",
        muscles: ["Core Anti-Rotacional", "Ombros", "Tríceps Braquial", "Reto Abdominal"],
        steps: [
            "Inicie na posição de prancha alta (mãos estendidas abaixo dos ombros).",
            "Mantendo o quadril o mais firme e imóvel possível, toque o ombro esquerdo com a mão direita.",
            "Retorne a mão ao chão e repita com a mão esquerda no ombro direito."
        ]
    },
    "prancha-lateral": {
        name: "Prancha Lateral",
        category: "core",
        categoryName: "Core",
        level: "iniciante",
        levelName: "Iniciante / Intermediário",
        purpose: "Fortalecer a musculatura oblíqua e estabilizadores laterais do quadril e da coluna.",
        muscles: ["Oblíquos Interno e Externo", "Transverso do Abdômen", "Glúteo Médio"],
        steps: [
            "Deite-se de lado e apoie o antebraço no chão diretamente abaixo do ombro.",
            "Empilhe as pernas uma sobre a outra e eleve o quadril do chão.",
            "Forme uma linha reta diagonal do topo da cabeça aos calcanhares.",
            "Segure pelo tempo estipulado e repita do outro lado."
        ]
    },
    "abdominal-infra": {
        name: "Abdominal Infra (Elevação de Pernas)",
        category: "core",
        categoryName: "Core",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Treinar a porção inferior do reto abdominal e flexores do quadril.",
        muscles: ["Reto Abdominal Inferior", "Flexores do Quadril"],
        steps: [
            "Deite-se de costas com as mãos sob o quadril para apoiar a região lombar.",
            "Mantenha as pernas estendidas e eleve-as até formarem um ângulo de 90 graus com o tronco.",
            "Desça as pernas devagar até quase tocarem o chão sem arquear a lombar.",
            "Suba novamente de forma controlada."
        ]
    },
    "russian-twist": {
        name: "Russian Twist (Rotação de Tronco)",
        category: "core",
        categoryName: "Core",
        level: "iniciante",
        levelName: "Iniciante / Intermediário",
        purpose: "Trabalhar rotação ativa de tronco para fortalecer oblíquos e controle central.",
        muscles: ["Oblíquos Abdominais", "Reto Abdominal", "Lombar"],
        steps: [
            "Sente-se no chão, incline o tronco levemente para trás e tire os pés do chão (ou mantenha calcanhares levemente apoiados).",
            "Junte as mãos à frente do peito.",
            "Gire o tronco de um lado para o outro tocando as mãos perto do chão ao lado do quadril.",
            "Mantenha as pernas o mais estáveis possível durante a rotação."
        ]
    },
    "bicycle-crunch": {
        name: "Abdominal Bicicleta (Bicycle Crunch)",
        category: "core",
        categoryName: "Core",
        level: "iniciante",
        levelName: "Iniciante / Intermediário",
        purpose: "Combinar flexão frontal com rotação diagonal para recrutamento completo do abdômen.",
        muscles: ["Reto Abdominal", "Oblíquos", "Flexores do Quadril"],
        steps: [
            "Deite-se de costas com as mãos atrás da cabeça e as pernas elevadas.",
            "Traga o cotovelo direito em direção ao joelho esquerdo enquanto estende a perna direita.",
            "Alterne o movimento trazendo o cotovelo esquerdo ao joelho direito simulando o pedalar.",
            "Mantenha o movimento fluido e ritmado."
        ]
    },
    "treino-lsit": {
        name: "Treino de L-Sit",
        category: "core",
        categoryName: "Core",
        level: "avancado",
        levelName: "Avançado",
        purpose: "Sustentar o corpo inteiro no ar apenas com a força do abdômen, tríceps e estabilizadores escapulares.",
        muscles: ["Core Abdominal Profundo", "Tríceps Braquial", "Flexores do Quadril", "Escápulas"],
        steps: [
            "Sente-se no chão com as pernas juntas e estendidas à frente.",
            "Coloque as palmas das mãos no chão ao lado dos quadris.",
            "Empurre o chão para baixo e eleve o quadril e as pernas do solo mantendo a forma de 'L'.",
            "(Iniciantes podem dobrar os joelhos ou fazer com um pé apoiado)."
        ]
    },
    "polichinelos": {
        name: "Polichinelos",
        category: "cardio",
        categoryName: "Cardio",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Atuar como aquecimento dinâmico e aumentar rapidamente a frequência cardíaca.",
        muscles: ["Sistema Cardiovascular", "Panturrilhas", "Ombros"],
        steps: [
            "Inicie em pé com pés juntos e braços ao lado do corpo.",
            "Dê um pequeno salto abrindo as pernas e elevando os braços acima da cabeça.",
            "Dê outro salto retornando à posição inicial.",
            "Mantenha o ritmo contínuo."
        ]
    },
    "caminhada-leve": {
        name: "Caminhada Leve",
        category: "cardio",
        categoryName: "Cardio",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Servir como regeneração ativa para acelerar o fluxo sanguíneo e recuperar o corpo.",
        muscles: ["Sistema Cardiovascular", "Membros Inferiores"],
        steps: [
            "Caminhe em ritmo constante e agradável ao ar livre ou em esteira.",
            "Mantenha uma respiração ritmada sem chegar à exaustão.",
            "Mantenha uma boa postura ereta durante a caminhada."
        ]
    },
    "corrida-estacionaria": {
        name: "Corrida Estacionária",
        category: "cardio",
        categoryName: "Cardio",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Simular o estímulo cardiovascular da corrida em qualquer espaço reduzido.",
        muscles: ["Sistema Cardiovascular", "Quadríceps", "Panturrilhas"],
        steps: [
            "Corra sem sair do lugar, elevando alternadamente os joelhos.",
            "Movimente os braços em sintonia com as pernas.",
            "Para maior intensidade, eleve os joelhos até a altura da cintura."
        ]
    },
    "burpees": {
        name: "Burpees",
        category: "cardio",
        categoryName: "Cardio",
        level: "intermediario",
        levelName: "Intermediário",
        purpose: "Exercício de corpo inteiro de alta intensidade para queima calórica e condicionamento cardiovascular.",
        muscles: ["Corpo Inteiro", "Peitoral", "Quadríceps", "Ombros", "Sistema Cardiovascular"],
        steps: [
            "Fique em pé, agache e apoie as mãos no chão à frente.",
            "Jogue os pés para trás em um salto entrando na posição de prancha/flexão.",
            "Realize uma flexão de braço e recolha os pés de volta ao agachamento.",
            "Salte para o alto estendendo os braços acima da cabeça."
        ]
    },
    "mountain-climbers": {
        name: "Mountain Climbers (Escalador)",
        category: "cardio",
        categoryName: "Cardio",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Unir estabilidade de prancha com dinamismo cardiovascular e agilidade de pernas.",
        muscles: ["Core", "Ombros", "Flexores do Quadril", "Sistema Cardiovascular"],
        steps: [
            "Inicie na posição de prancha alta com as mãos alinhadas aos ombros.",
            "Puxe um dos joelhos em direção ao peitoral sem elevar o quadril.",
            "Alterne as pernas rapidamente como se estivesse correndo na prancha.",
            "Mantenha a estabilidade do tronco."
        ]
    },
    "alongamento-geral": {
        name: "Alongamento Geral & Mobilidade",
        category: "mobility",
        categoryName: "Mobilidade",
        level: "iniciante",
        levelName: "Iniciante",
        purpose: "Aumentar a amplitude articular, aliviar tensões e prevenir rigidez muscular.",
        muscles: ["Corpo Inteiro", "Flexibilidade Articular"],
        steps: [
            "Realize alongamentos suaves para quadríceps, posterior de coxa, peitoral e ombros.",
            "Sustente cada posição por 20 a 30 segundos mantendo respiração profunda.",
            "Evite dores agudas; foque na sensação de alívio e mobilidade."
        ]
    },
    "bananeira": {
        name: "Bananeira na Parede (Handstand)",
        category: "mobility",
        categoryName: "Habilidade",
        level: "avancado",
        levelName: "Avançado",
        purpose: "Desenvolver equilíbrio invertido, força estabilizadora de ombros e consciência corporal.",
        muscles: ["Deltoides", "Trapézio", "Core", "Antebraços", "Punhos"],
        steps: [
            "Coloque as mãos no chão a cerca de 20-30 cm de uma parede.",
            "Dê um impulso leve para elevar as pernas até encostar os pés na parede.",
            "Mantenha os braços esticados e empurre o chão ativamente.",
            "Sustente com estabilidade e retorne descendo um pé de cada vez."
        ]
    },
    "descanso": {
        name: "Dia de Descanso & Recuperação Ativa",
        category: "mobility",
        categoryName: "Recuperação",
        level: "iniciante",
        levelName: "Todos os Níveis",
        purpose: "Permitir a síntese proteica, reparo das fibras musculares e regeneração do sistema nervoso central.",
        muscles: ["Recuperação Muscular", "Sistema Nervoso Central", "Hidratação"],
        steps: [
            "Beba pelo menos 2 a 3 litros de água para manter o corpo e articulações bem hidratadas.",
            "Faça uma caminhada leve de 15 a 20 minutos ou alongamentos suaves.",
            "Alimente-se com proteínas de boa qualidade e carboidratos limpos para repor o glicogênio.",
            "Priorize uma boa noite de sono reparador (7 a 9 horas)."
        ]
    }
};

/**
 * Mapeia qualquer query string de exercício para a chave exata em exerciseDB
 */
function processIdStr(str) {
    if (!str) return "flexao-de-braco";
    let normalized = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

    // Dias de descanso ou especiais
    if (["descanso", "celebre", "favorito", "recuperacao", "livre"].some(k => normalized.includes(k))) {
        return "descanso";
    }

    // Push específico
    if (normalized.includes("declinada") || normalized.includes("pes elevados")) return "flexao-declinada";
    if (normalized.includes("fechada") || normalized.includes("diamante")) return "flexao-fechada";
    if (normalized.includes("apoiada") || normalized.includes("joelho") || normalized.includes("joalho")) return "flexao-de-braco-apoiada";
    if (normalized.includes("pike")) return "pike-push-up";
    if (normalized.includes("triceps") || normalized.includes("mergulho") || (normalized.includes("banco") && !normalized.includes("flexao"))) return "mergulho-no-banco";
    if (normalized.includes("flexao") || normalized.includes("flexoes")) return "flexao-de-braco";

    // Pernas / Legs
    if (normalized.includes("bulgaro")) return "agachamento-bulgaro";
    if (normalized.includes("isometrico")) return "agachamento-isometrico";
    if (normalized.includes("salto") || normalized.includes("jump")) return "agachamento-salto";
    if (normalized.includes("pistol")) return "agachamento-pistol";
    if (normalized.includes("sumo")) return "agachamento-sumo";
    if (normalized.includes("agachamento") || normalized.includes("squat")) return "agachamento-livre";
    if (normalized.includes("afundo") || normalized.includes("lunge") || normalized.includes("passada")) return "afundo";
    if (normalized.includes("panturrilha") || normalized.includes("panturrilhas")) return "elevacao-de-panturrilha";
    if (normalized.includes("ponte") || normalized.includes("gluteo") || normalized.includes("gluteos")) return "ponte-gluteos";

    // Core
    if (normalized.includes("lateral") && (normalized.includes("prancha") || normalized.includes("side"))) return "prancha-lateral";
    if (normalized.includes("prancha alta") || normalized.includes("toque no ombro")) return "prancha-alta-toque";
    if (normalized.includes("prancha")) return "prancha-abdominal";
    if (normalized.includes("russian") || normalized.includes("twist")) return "russian-twist";
    if (normalized.includes("bicycle") || normalized.includes("bicicleta")) return "bicycle-crunch";
    if (normalized.includes("infra") || normalized.includes("elevacao de pernas")) return "abdominal-infra";
    if (normalized.includes("lsit") || normalized.includes("l-sit") || normalized.includes("l sit")) return "treino-lsit";

    // Puxar / Pull
    if (normalized.includes("barra") || normalized.includes("remada")) return "barra-fixa-isometria";
    if (normalized.includes("superman")) return "superman";

    // Cardio
    if (normalized.includes("polichinelos") || normalized.includes("polichinelo")) return "polichinelos";
    if (normalized.includes("corrida")) return "corrida-estacionaria";
    if (normalized.includes("caminhada")) return "caminhada-leve";
    if (normalized.includes("burpee") || normalized.includes("burpees")) return "burpees";
    if (normalized.includes("mountain") || normalized.includes("climber")) return "mountain-climbers";

    // Mobilidade & Skills
    if (normalized.includes("alongamento") || normalized.includes("yoga") || normalized.includes("mobilidade")) return "alongamento-geral";
    if (normalized.includes("bananeira") || normalized.includes("handstand")) return "bananeira";
    if (normalized.includes("lateral")) return "elevacao-lateral";

    return "descanso";
}

// Os outros scripts (script.js) acessam a base via window.exerciseDB.
window.exerciseDB = exerciseDB;
window.processIdStr = processIdStr;

// Injeta dinamicamente quando carregar exercise.html
document.addEventListener('DOMContentLoaded', () => {
    const exerciseTitle = document.getElementById('ex-title');
    if (exerciseTitle) {
        const urlParams = new URLSearchParams(window.location.search);
        const rawId = urlParams.get('id');
        const exId = processIdStr(rawId);

        // Query desconhecida não deve exibir outro exercício silenciosamente.
        const normalizedQuery = String(rawId || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        const restWords = ['descanso', 'celebre', 'recuperacao', 'livre', 'favorito'];
        const unknown = !rawId || (exId === 'descanso' && !restWords.some((w) => normalizedQuery.includes(w)));
        if (unknown) {
            window.__exerciseNotFound = true;
            document.title = 'Exercício não encontrado — Calistenia Pro';
            exerciseTitle.textContent = 'Exercício não encontrado';
            const purposeEl = document.getElementById('ex-purpose');
            if (purposeEl) purposeEl.innerHTML = 'Esse endereço não corresponde a nenhum exercício da biblioteca. <a href="library.html">Ver os 32 exercícios</a>.';
            const stepsEl = document.getElementById('ex-steps');
            if (stepsEl) stepsEl.innerHTML = '';
            document.querySelectorAll('.ex-hero .btn-cta, #quickStartBtn, #favToggleBtn').forEach((el) => { el.style.display = 'none' });
            const imgContainer = document.getElementById('ex-image-container');
            if (imgContainer) imgContainer.innerHTML = '<p style="font-weight:700">🔎 Nenhum exercício com esse identificador.</p><a class="btn-cta btn-sm" href="library.html">Abrir biblioteca</a>';
            return;
        }

        const data = exerciseDB[exId] || exerciseDB["flexao-de-braco"];
        
        // Atualiza Titulo do Documento e da Pagina
        document.title = `${data.name} - Calistenia Pro`;
        exerciseTitle.textContent = data.name;
        
        const purposeEl = document.getElementById('ex-purpose');
        if (purposeEl) purposeEl.textContent = data.purpose;
        
        // Renderiza Badges de Categoria e Nivel
        const musContainer = document.getElementById('ex-muscles');
        if (musContainer) {
            musContainer.innerHTML = '';
            
            // Badge Categoria
            const catBadge = document.createElement('span');
            catBadge.className = 'label success';
            catBadge.style.fontSize = '0.9rem';
            catBadge.style.padding = '0.4rem 0.9rem';
            catBadge.textContent = `🎯 ${data.categoryName}`;
            musContainer.appendChild(catBadge);

            // Badge Nivel
            const levelBadge = document.createElement('span');
            levelBadge.className = 'label success';
            levelBadge.style.background = '#FEF3C7';
            levelBadge.style.color = '#D97706';
            levelBadge.style.fontSize = '0.9rem';
            levelBadge.style.padding = '0.4rem 0.9rem';
            levelBadge.textContent = `⚡ ${data.levelName}`;
            musContainer.appendChild(levelBadge);

            // Musculos Alvo
            data.muscles.forEach(m => {
                let badge = document.createElement('span');
                badge.className = 'label success';
                badge.style.background = '#E2E8F0';
                badge.style.color = '#334155';
                badge.style.fontSize = '0.85rem';
                badge.textContent = m;
                musContainer.appendChild(badge);
            });
        }

        // Renderiza Passos
        const stepsContainer = document.getElementById('ex-steps');
        if (stepsContainer) {
            stepsContainer.innerHTML = '';
            data.steps.forEach((step, idx) => {
                let li = document.createElement('li');
                li.innerHTML = `<strong>Passo ${idx + 1}:</strong> ${step}`;
                li.style.marginBottom = '1rem';
                li.style.lineHeight = '1.6';
                stepsContainer.appendChild(li);
            });
        }

        // Mapeamento de Imagens
        const imageMap = {
            "agachamento-livre": ["assets/img/squat_start.webp", "assets/img/squat_end.webp"],
            "agachamento-sumo": ["assets/img/squat_start.webp", "assets/img/squat_end.webp"],
            "agachamento-bulgaro": ["assets/img/squat_start.webp", "assets/img/squat_end.webp"],
            "agachamento-isometrico": ["assets/img/squat.webp"],
            "agachamento-salto": ["assets/img/squat_start.webp", "assets/img/squat_end.webp"],
            "agachamento-pistol": ["assets/img/squat_start.webp", "assets/img/squat_end.webp"],
            
            "flexao-de-braco": ["assets/img/pushup_start.webp", "assets/img/pushup_end.webp"],
            "flexao-fechada": ["assets/img/pushup_start.webp", "assets/img/pushup_end.webp"],
            "flexao-declinada": ["assets/img/pushup_start.webp", "assets/img/pushup_end.webp"],
            "flexao-de-braco-apoiada": ["assets/img/pushup_start.webp", "assets/img/pushup_end.webp"],
            "pike-push-up": ["assets/img/pushup_start.webp", "assets/img/pushup_end.webp"],
            
            "barra-fixa-isometria": ["assets/img/pullup_start.webp", "assets/img/pullup_end.webp"],
            
            "mergulho-no-banco": ["assets/img/dip_start.webp", "assets/img/dip_end.webp"],
            "afundo": ["assets/img/lunge_start.webp", "assets/img/lunge_end.webp"],
            
            "prancha-abdominal": ["assets/img/plank.webp"],
            "prancha-lateral": ["assets/img/plank.webp"],
            "prancha-alta-toque": ["assets/img/plank.webp"],

            "default": ["assets/img/generic.webp"]
        };
        
        let targetImgs = imageMap[exId] || imageMap["default"];
        if (!Array.isArray(targetImgs)) targetImgs = [targetImgs];
        
        const imgContainer = document.getElementById('ex-image-container');
        if (imgContainer) {
            if (window.ExerciseDemo) {
                // Alterna start/end com crossfade, sem gerar GIF; estático se reduced-motion.
                window.ExerciseDemo.render(imgContainer, targetImgs, data.name, { height: 260, interval: 1100 });
            } else {
                imgContainer.innerHTML = '';
                targetImgs.forEach((srcImg, index) => {
                    let img = document.createElement('img');
                    img.src = srcImg;
                    img.alt = `${data.name} - Posição ${index + 1}`;
                    img.style.width = '100%';
                    img.style.maxHeight = '280px';
                    img.style.objectFit = 'contain';
                    img.style.borderRadius = '8px';
                    img.style.border = '1px solid rgba(255,255,255,0.1)';
                    img.style.background = '#1E293B';
                    imgContainer.appendChild(img);
                });
            }
        }
    }
});
