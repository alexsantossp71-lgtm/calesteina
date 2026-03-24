const exerciseDB = {
    // Semana 1 & Gerais
    "flexao-de-braco": {
        name: "Flexão de Braço",
        purpose: "Desenvolver força fundamental de empurrar, criando um peitoral forte, ombros estáveis e braços densos.",
        muscles: ["Peitoral Maior", "Tríceps", "Deltóide Anterior", "Core"],
        steps: [
            "Posicione as mãos no chão um pouco mais largas que a largura dos ombros.",
            "Mantenha as pernas esticadas para trás, apoiadas pelas pontas dos pés.",
            "Desça o corpo em linha reta controladamente até que o peito quase toque o chão (os cotovelos devem apontar para trás, em um ângulo de 45 graus).",
            "Empurre o chão de volta para a posição inicial extendendo completamente os braços."
        ]
    },
    "flexao-de-braco-apoiada": {
        name: "Flexão de Braço (Joalhos se necessário)",
        purpose: "A versão com menos carga projetada para iniciantes criarem a base de força necessária para flexões completas.",
        muscles: ["Peitoral Maior", "Tríceps", "Deltóide Anterior"],
        steps: [
            "Posicione as mãos no chão um pouco mais largas que a largura dos ombros.",
            "Vá para a posição de prancha, mas apoie os dois joelhos no chão cruzando os tornozelos.",
            "Desça o peito em direção ao chão mantendo o tronco e o quadril alinhados.",
            "Empurre de volta estendendo os braços."
        ]
    },
    "agachamento-livre": {
        name: "Agachamento Livre",
        purpose: "Exercício fundamental para construir pernas simétricas e fortes, focando na mobilidade de quadril, joelho e tornozelos.",
        muscles: ["Quadríceps", "Glúteos", "Isquiotibiais", "Panturrilhas"],
        steps: [
            "Fique de pé com os pés na largura dos ombros.",
            "Mantenha o peito erguido e inicie o movimento jogando os quadris para trás como se fosse sentar numa cadeira.",
            "Desça até as coxas ficarem pelo menos paralelas ao chão, certificando-se de que os joelhos não passem drasticamente da linha dos pés.",
            "Empurre o chão com os calcanhares para retornar à posição inicial."
        ]
    },
    "prancha-abdominal": {
        name: "Prancha Abdominal",
        purpose: "Fortalecer globalmente a região do core, ensinando o corpo a atuar como uma unidade rígida e estável.",
        muscles: ["Reto Abdominal", "Transverso do Abdômen", "Lombar", "Ombros"],
        steps: [
            "Apoie os antebraços no chão, com os cotovelos alinhados abaixo dos ombros.",
            "Estique as pernas para trás, apoiando as pontas dos pés.",
            "Mantenha seu corpo em uma linha reta perfeita, desde a cabeça até os tornozelos.",
            "Contraia os glúteos e o abdômen; respire de forma controlada enquanto segura a posição."
        ]
    },
    "polichinelos": {
        name: "Polichinelos",
        purpose: "Aumentar rapidamente a frequência cardíaca (cardio) e servir como aquecimento dinâmico.",
        muscles: ["Sistema Cardiovascular", "Panturrilhas", "Ombros", "Núcleo (Core)"],
        steps: [
            "Comece na posição de pé com os braços relaxados ao lado do corpo.",
            "Dê um pequeno salto abrindo as pernas e eleve os braços acima da cabeça batendo as mãos.",
            "Dê outro salto para voltar à posição inicial.",
            "Repita de forma contínua."
        ]
    },
    "caminhada-leve": {
        name: "Caminhada Leve",
        purpose: "Atuar como descanso ativo para facilitar o fluxo sanguíneo eliminando ácido lático.",
        muscles: ["Sistema Cardiovascular", "Pernas (Baixa Intensidade)"],
        steps: [
            "Encontre uma área externa ou esteira.",
            "Caminhe em um ritmo onde sua respiração seja um pouco mais rápida mas ainda consiga manter uma conversa."
        ]
    },
    "alongamento-geral": {
        name: "Alongamento Geral",
        purpose: "Prevenir lesões e manter/aumentar a amplitude de movimento articular.",
        muscles: ["Corpo Inteiro (Flexibilidade)"],
        steps: [
            "Segure alongamentos estáticos para as pernas (toque os pés com as pernas esticadas).",
            "Estique os braços no batente de uma porta para relaxar o peitoral.",
            "Segure cada posição por 20 a 30 segundos, respirando fundo e sem causar dor aguda."
        ]
    },
    "mergulho-no-banco": {
        name: "Mergulho no Banco (Tríceps)",
        purpose: "Isolar a força para estender os braços e construir volume de tríceps com facilidade.",
        muscles: ["Tríceps Braquial", "Peitoral Inferior", "Deltóide Anterior"],
        steps: [
            "Sente-se na beirada de uma cadeira/banco rígido.",
            "Apoie as mãos firmemente nas bordas, deslize os glúteos para fora do assento esticando as pernas (flexionadas diminuem a carga, retas aumentam).",
            "Desça o corpo verticalmente dobrando os cotovelos até formar um ângulo próximo a 90 graus.",
            "Empurre com força de volta acima."
        ]
    },
    "prancha-alta-toque": {
        name: "Prancha Alta (toque no ombro)",
        purpose: "Introduzir instabilidade antiflexão (força anti-rotação do abdômen) aliada a estabilidade superior ativa.",
        muscles: ["Ombros", "Core Anti-rotacional", "Reto Abdominal", "Tríceps"],
        steps: [
            "Inicie na posição superior da flexão de braço (prancha alta).",
            "Mantenha o quadril o mais imóvel possível e levante levemente a mão direita do chão para tocar o ombro esquerdo.",
            "Volte a mão para o chão e repita com o braço aposto."
        ]
    },
    "agachamento-sumo": {
        name: "Agachamento Sumô",
        purpose: "Dar foco maior à porção interna da coxa e aos glúteos, alterando a base biomecânica natural.",
        muscles: ["Glúteos Máximos", "Adutores", "Quadríceps"],
        steps: [
            "Posicione as pernas substancialmente mais largas que a largura dos ombros.",
            "Aponte os pés para fora em ângulo de aproximadamente 45 graus.",
            "Desça o quadril de forma vertical.",
            "Volte e contraia os glúteos vigorosamente ao chegar no topo."
        ]
    },
    "afundo": {
        name: "Afundo (Lunge)",
        purpose: "Exercício unilateral para corrigir desequilíbrios físicos de uma perna ser mais forte que a outra.",
        muscles: ["Quadríceps", "Glúteos", "Isquiotibiais", "Core"],
        steps: [
            "Com as pernas juntas, dê um passo largo à frente com a sua perna direita.",
            "Desça o quadril formando um ângulo de 90 graus na perna da frente e deixando o joelho de trás bater de leve no chão.",
            "Com a força esmagadora na perna da frente, empurre seu corpo de volta à posição original."
        ]
    },
    "elevacao-de-panturrilha": {
        name: "Elevação de Panturrilha",
        purpose: "Fortalecer a musculatura responsável pelo suporte do tornozelo e locomoção do dia-a-dia.",
        muscles: ["Gastrocnêmio", "Sóleo (Panturrilha)"],
        steps: [
            "Fique em pé próximo a uma parede (para equilíbrio).",
            "Tire os calcanhares do chão e levante seu corpo suportado apenas sobre as pontas dos dedos e a bola do pé.",
            "Contraia no topo e desça sentindo o alongamento do músculo."
        ]
    },
    "corrida-estacionaria": {
        name: "Corrida Estacionária",
        purpose: "Condicionamento físico simulando esteira/corrida natural se mantendo parado.",
        muscles: ["Cardiovascular", "Panturrilhas", "Quadríceps"],
        steps: [
            "Corra no mesmo lugar que está.",
            "Para aumentar a intensidade, leve os joelhos até a altura do abdômen."
        ]
    },

    // Semana 2
    "flexao-fechada": {
        name: "Flexão Fechada (Diamante)",
        purpose: "Migrar o estresse mecânico esmagadoramente pro tríceps, em vez do peitoral.",
        muscles: ["Tríceps Braquial", "Parte Central do Peitoral", "Delts"],
        steps: [
            "Na posição da prancha, aproxime suas mãos até que os polegares e indicadores se toquem, montando uma forma de diamante.",
            "Desça o peitoral sobre suas mãos e empurre até os braços travarem.",
            "Mantenha os cotovelos colados ao corpo."
        ]
    },
    "elevacao-lateral": {
        name: "Elevação Lateral (com garrafas)",
        purpose: "Exercitar a parte lateral do ombro na calistenia costuma ser complexo. Este é o único adendo de objeto para simetria.",
        muscles: ["Deltóide Lateral"],
        steps: [
            "Segure dois objetos de pesos iguais (garrafa PET média de água, livros amarrados etc.).",
            "Mantenha os braços esticados ao longo do corpo com microflexão de cotovelo.",
            "Levante os braços para as laterais do corpo até ficar na linha dos ombros, e desça com controle extremo."
        ]
    },
    "barra-fixa-isometria": {
        name: "Barra Fixa (Isometria) / Remada",
        purpose: "Construção massiva das costas (Asa/Dorsal) preparando o indivíduo para a 1ª barra fixa da vida.",
        muscles: ["Grande Dorsal (Costas)", "Bíceps", "Antebraços", "Rombóide"],
        steps: [
            "Remada (Iniciante): Posicione-se sob uma mesa resistente, agarre a borda, puxe seu peito para cima travando o abdômen e desça.",
            "Isometria: Pule para passar o queixo de uma barra afixada ou galho firme de árvore. Trave os músculos das costas para se segurar no ar ali mesmo por segundos ao invés de descer.",
            "Na isometria (foco em queixo acima da barra) ou pendurado travando escápulas ativas são progressões de força bruta de dorsal."
        ]
    },
    "superman": {
        name: "Superman (Lombar)",
        purpose: "Uma estrutura de aço exige uma lombar que equaliza o peitoral e o abdômen pesado.",
        muscles: ["Eretores da Espinha", "Glúteo", "Delts Post."],
        steps: [
            "Deite-se de bruços totalmente relaxado com braços e pernas retos esticados.",
            "Exageradamente e simultaneamente, descole mãos, peito e coxas do chão levantando-se simulando o Superman em voo.",
            "Segure 2 segundos contraindo a lombar rigorosamente antes de relaxar em contato com o chão."
        ]
    },
    "abdominal-infra": {
        name: "Abdominal Infra (Elevação de Pernas)",
        purpose: "Estimular a porção inferior do abdômen mais difícil de atingir do que em sit-ups normais.",
        muscles: ["Reto Abdominal Inferior", "Flexores do Quadril/Psoas"],
        steps: [
            "Deite-se no piso em cima das mãos voltadas por baixo dos glúteos evitando curvar a lombar maléficamente.",
            "Com as pernas retas (ou com os joelhos um pouco dobrados para inexperientes), levante as pontas de pés até a perpendicular em direção ao teto.",
            "Desça suavemente parando pouco antes de raspar o calcanhar no solo."
        ]
    },
    "agachamento-bulgaro": {
        name: "Agachamento Búlgaro",
        purpose: "Exercício supremo de desenvolvimento de hipertrofia da perna, isolando um lado inteiramente para carga pesada.",
        muscles: ["Quadríceps Exigido Maximalmente", "Glúteo", "Fibra Isquiotibial"],
        steps: [
            "Pise à frente, estique a perna oposta acomodando as pontas/peito do pé por cima do assento do sofá ou de uma cadeira recuada pra trás.",
            "Mantenha postura vertical rígida descendo todo seu quadril verticalmente no formato dum Lunge extremo.",
            "Empurre forçando do meio o calcanhar daquela perna frontal sentindo os fluidos musculares arderem.",
            "Sempre revezar igualmente perna para não produzir deformação hipertrófica natural."
        ]
    },
    "agachamento-isometrico": {
        name: "Agachamento Isométrico (Wall Sit)",
        purpose: "Torrar e aumentar durabilidade isométrica fibral. Muito exigente mental e fisicamente.",
        muscles: ["Quadríceps Bruto"],
        steps: [
            "Ache parede desocupada. Recue encostando a retidão da espinha/costas dela totalmente colados.",
            "Caminhe pernas para longe enquanto rola pro despenhadeiro formando sua coxa como sentada a ar paralelo 90 graus (assento imaginário).",
            "Mãos fora do fêmur. Feche olhos, encare a barreira queimante de ácid lático das pernas pelo tempo exigido sem vacilar."
        ]
    },
    "ponte-gluteos": {
        name: "Ponte para Glúteos",
        purpose: "Contração pura do motor mestre motor dos traseiros para não ficar com assento achatado provindo de sedentarismo.",
        muscles: ["Glúteo Máximo", "Isquiolombar"],
        steps: [
            "Deite de costas no piso com calcanhares o mais agarrados na proximidade extrema dos glúteos e joelhos curvos para cima.",
            "Esfrie escápulas no piso. Trave e arremesse absurdamente rápido seu quadril (genital) até o céu formando um triângulo reto de suas hastes.",
            "Congele o ápice cerrando as nádegas brutalmente por 3 segundos longos, para descer e tocar chão e reprisar."
        ]
    },
    "burpees": {
        name: "Burpees",
        purpose: "Movimento odiado pelos amadores e amado pela máquina de destruição calórica generalizada HIIT vital de performance.",
        muscles: ["Corpo Extremo por Extenso", "Peitos", "Panturrilha Extrema", "Pulmões"],
        steps: [
            "Levante-se de pé regular e jogue as mãos no piso instantaneamente abaixando num agachamento relâmpago de sapo.",
            "As canelas disparam ambas pra trás colocando-te em Prancha de braços estendida.",
            "Faça uma flexão afundando o peito, recolha rapidão e dê um tiro/salto para pro ar vertical batendo as palmas da mão para os altos.",
            "Sem descanso, recomece repetindo o círculo fatal pra aguentar até derreter os triglicerídeos inertes indesejáveis."
        ]
    },
    "mountain-climbers": {
        name: "Mountain Climbers",
        purpose: "Socar mobilidade na flexibilidade dos eixos coxofemorais triturando abdômen aceleradamente como cardio.",
        muscles: ["Core Tracionado", "Glúteos Flexíveis", "Hald de Peitorais", "Cárdio"],
        steps: [
            "Crave o corpo inteiro igual flexão normal de braços trancadas fixas no solo.",
            "Bata seu joelho o mais rente do cotovelo cruzando sem desativar a planitude prancha do tórax e traseiro (jamais erga traseiro por burrice lombar).",
            "Troca veloz salticando as sapatilhas numa dança alternadora que rasga estamina com vigor feroz nos ventres em fogo muscular."
        ]
    },
    "agachamento-salto": {
        name: "Agachamento com Salto (Jump Squat)",
        purpose: "A exploração e recruta das fibras tipo 2 brancas (explosão de força, reatividade neural/atlética monstruosa).",
        muscles: ["Fáscia das Pernas Cinetica-Mecânicas", "Glúteos", "Soleo Panturrílico", "Vastos"],
        steps: [
            "Abaixe no fundo poço escuro de seu Agachamento Padrão de perna regular livre (Caderas para as costas).",
            "Em vez de se erguer no seu tempo civil de vovó, exalte um salto para explodir suas pregas da gravidade da terra com a ferocidade.",
            "Aterrise e absorva com calcanhares abrandando no fundo contínuo sem solavancos nas rulas das cartilagens articulares delicadas."
        ]
    },
    "prancha-lateral": {
        name: "Prancha Lateral",
        purpose: "Blindar a fraqueza periférica de lateral core (costelas flácidas destratadas e mal-torneadas).",
        muscles: ["Oblíquo Interno", "Oblíquo Externo", "Transverso Profundo"],
        steps: [
            "Deitar-se rolando de banda. Levante apoiar peso do cotovelo direto sobre alicerce plano.",
            "Pernas justapostas e empilhadas, erga o fêmur/quadrelhas descolando e formando linha diagonal imaculada (chão para a testa).",
            "Não arreiar do plano sagital até bater sua minutagem, sofrendo ardência profunda lateral para trincar como um V greco."
        ]
    },
    "russian-twist": {
        name: "Russian Twist",
        purpose: "Trabalho primoroso anti-lateral dinâmico em isometrias mistas destrutivo focado nos oblíquos transversais oblíquos rasgados.",
        muscles: ["Oblíquo Abdominal Lateral", "Core Estabilizador Total"],
        steps: [
            "Sente bunda no solo duro. Traga canelas recuadas um tanto de suspensão num 'V' com o tronco (torso jogado oblíquo nas traseiras).",
            "Com mãos cruzadas sobre si ou carregadoras do garrafol d'agua giratório, destrave pro lado total, soque, pro reverso soque esquerda.",
            "Crucialíssima pernas trancadamente quietas para matar os abdominais de chamas. Contorça para os extremos paralelos simétricos."
        ]
    },
    "bicycle-crunch": {
        name: "Bicycle Crunch (Abdominal Bicicleta)",
        purpose: "Engenhar abdômen tridimensional forjado mesclando contração reta do pilar com rodopio simultâneo diagonal flexivo cortante.",
        muscles: ["Abdominais Todos", "Oblíquos Fios e Transversos Cortantes"],
        steps: [
            "Escorado lombar em repouso tapete e nuca encapuzada pelos dedos sem arrancar espinhas puxada violenta ao crânio frágil.",
            "Decole joelho perna ao ar flutuante no pedalo enquanto alinha contorsionadamente cruzando a linha do cotovelado bater nas rolete rotula da oposta pernetes.",
            "Alavanque o biciclismo doloroso. Trave joelho no cotovelo cruzando até finalizar a rotina dos infindos rasgamentos laterais trincados de tanquinho."
        ]
    },

    // Semana 3 e 4 - (Técnicas Avançadas)
    "flexao-declinada": {
        name: "Flexão Declinada",
        purpose: "Simular Supino Inclinado na brutalidade Calistênica focada para construir a placa superior do tórax ombral espessa e salutar densamente hipertrofiada visualmente imponente.",
        muscles: ["Peitoral Fibras Superiores Claviculares", "Deltóide Frontal Destruído", "Cúpulas do Tríceps Extensor Superior"],
        steps: [
            "Encontre banquinho seguro ou cama maciça com degrau sólido elebatório não frouxo para escorregar e foder os dentes em chãos frios de cerâmica.",
            "Craque sapatilhas nele ao ar e finque as mãos estendendo o paliteiro dos ossos firmes das palmas em prancha decaída e afundada inferior de pender os ombros no rastejar para descer esticados da prancha declive paralelos mortais do abismo de piso.",
            "Avance flexão funda pra testar os bicos do focinho esfregarem no pó cimento. Depois, empurre a gravidade bruta planetária fora das molas dos bíceps/tríceps/peitos."
        ]
    },
    "pike-push-up": {
        name: "Pike Push Up (Ombros)",
        purpose: "Desbocar as gêmulas ombrares pra transformar cocos num desenvolvimento pressado autêntico de ginastas gregos milenares do calistênico olimpal dos mestres das argolas soltas corporais puramente bestiais de estátuas anatômicas em rocha talhadas pela gravidade da crosta perversa estóica severa que pune falhos sem pena.",
        muscles: ["Ombro", "Ombro e Só Ombro!", "Deltoide Central Extremo", "Core de Cargas", "Superíores Tríceps"],
        steps: [
            "Arme as retaguardas cravando nádegas cêu alçado igual V inverso.",
            "Fixe a palmaria do tapete pra descer inclinadamente o topete do crano encurvado diagonal raso e beije chão caindo nas linhas.",
            "Crave ombro travando empurrando trancado dos calossais erguida da ponte e volte no V de montanha cumeado formigando e repita."
        ]
    },
    "agachamento-pistol": {
        name: "Agachamento Pistol (Pistol Squat)",
        purpose: "O domínimo mestre elusivo mágico ninja dos deuses do chão livre dos ginastas brutos de mobilidade bruta num ato isolador letal monstro das coxas divinas de 1 perna uní-co-existente formidável desproporcional proferido calistênico perna pesada das roletas infernais monstro da pernas espremidas das flexibilidades trincadas duríssimas inalienáveis trituradoras corporais brutas imortais massacradoras unificadoras do sistema humano de carga total em 1 pé mortalmente instintivo primário bípede calistênico desproporcionadamente focado monstruoso em balanço.",
        muscles: ["Quadríceps Exarcebado Mortal Extremo Focado", "Glúteo Motor 100% Unilateral Neural Ativador Equilibratório Psoas Abdômen Máquina De Guerra Das Tibiais Cargas Estabilizadoras Profundas Ligamentares Patelares Críticas Descobertas"],
        steps: [
            "Firme pé na lona, desgarre a outrana projetante pro vácuo esticado (frente canela ao ares suspenso).",
            "Flexione quadril rolando abaixo devagar abismal (apoie no móvel como roda de treinar infantilidade).",
            "Margeie bumbum batendo calcanhar com braço frente prumagem esmagadora dos centros gravitacionais terráqueos do cosmo corpóreo e emane erguido pra retornar travando e rezando.",
            "(Repare: Requer mobilidade. É nível altíssimo e ensina humanidade a usar gravidade real pura extrema nas articulações saudáveis construídas meses)."
        ]
    },
    "treino-lsit": {
        name: "Treino de L-Sit",
        purpose: "Fundição abdominal brutal. Corpo vira Letra L sustentada.",
        muscles: ["Core Imortal", "Tríceps", "Flexor de Quadril"],
        steps: [
            "Sente solo, pernas extenas e retíssimas juntas coladas pra frente.",
            "Aqueça mãos no soalho lado do rabo trancado e pressione o mundo duro longe do bumbum descolado flutuante suspensos calcanhares suspirantes imortais mantendo o L imodificável calmo como templo monástico no vazio sofrador temporal e isométrico.",
            "Progessão simples: Levantar pernas uma a uma se tiver barrigudo caindo pra despencadas gravitacionais doentias."
        ]
    },
    "bananeira": {
        name: "Bananeira (Handstand Wall)",
        purpose: "Condição dos céus inversos ombrais mestre supremo força ginasta suprema base de mestria calistênica sem qual o peso em pé cabeça baixa falhará da estética bruta insuperável atlética das calistenias mundiais reinantes gloriosas.",
        muscles: ["Corpo Inverso Ombral Deltoide Romboidal Intelecto Neural Eletro Acrobacia Core Core Trava Cervical Estabilizadora Antebraço Monstro Falanges Garrado"],
        steps: [
            "Parece cão pra baixo parede frente. Engate salto leve alinhador ou escale paredão peito roçando no reboco inverso de barriga colada escalonando a montada sem pânico medroso pra frente travar no ar e suportar sua vida pelas mãos suadas e firmadas de falanges de garra firme fincadas na vida até se empurrar calmo devolta a terrinha firme da humanidade bípede desvirada das mortes mentais infundadas caindas e despencares medrosos dominados pela prática e destreza das flexibilidades do pavor superado."
        ]
    }
};

/** Função Auxiliar da Página **/
function processIdStr(str) {
    if(!str) return "flexao-de-braco";
    let normalized = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    // Mapeamentos para chaves JS cruas (Específicos PRIMEIRO, Genéricos DEPOIS)
    
    // Flexões Específicas
    if(normalized.includes('declinada') || normalized.includes('pes elevados')) return "flexao-declinada";
    if(normalized.includes('diamante') || normalized.includes('fechada')) return "flexao-fechada";
    if(normalized.includes('apoiada') || normalized.includes('joelho')) return "flexao-de-braco-apoiada";
    if(normalized.includes('flexao')) return "flexao-de-braco";
    
    // Agachamentos Específicos
    if(normalized.includes('bulgaro')) return "agachamento-bulgaro";
    if(normalized.includes('isometrico')) return "agachamento-isometrico";
    if(normalized.includes('salto') || normalized.includes('jump')) return "agachamento-salto";
    if(normalized.includes('pistol')) return "agachamento-pistol";
    if(normalized.includes('sumo')) return "agachamento-sumo";
    if(normalized.includes('agachamento') || normalized.includes('squat')) return "agachamento-livre";

    // Pranchas / Core Acima
    if(normalized.includes('lateral') && normalized.includes('prancha')) return "prancha-lateral";
    if(normalized.includes('prancha alta') || normalized.includes('ombro')) return "prancha-alta-toque";
    if(normalized.includes('prancha')) return "prancha-abdominal";
    if(normalized.includes('russian') || normalized.includes('twist')) return "russian-twist";
    if(normalized.includes('bicycle') || normalized.includes('bicicleta')) return "bicycle-crunch";
    if(normalized.includes('infra') || normalized.includes('elevacao') && !normalized.includes('panturrilha') && !normalized.includes('lateral')) return "abdominal-infra";
    
    // Costas / Barra
    if(normalized.includes('barra fixa')) return "barra-fixa-isometria";
    if(normalized.includes('superman')) return "superman";
    
    // Tríceps
    if(normalized.includes('triceps') || normalized.includes('banco') || normalized.includes('mergulho')) return "mergulho-no-banco";
    
    // Pernas (Outros)
    if(normalized.includes('afundo') || normalized.includes('lunge') || normalized.includes('passada')) return "afundo";
    if(normalized.includes('panturrilha')) return "elevacao-de-panturrilha";
    if(normalized.includes('ponte') || normalized.includes('gluteo')) return "ponte-gluteos";
    
    // Cardio / Isometria
    if(normalized.includes('polichinelos')) return "polichinelos";
    if(normalized.includes('corrida')) return "corrida-estacionaria";
    if(normalized.includes('caminhada')) return "caminhada-leve";
    if(normalized.includes('burpees') || normalized.includes('burpee')) return "burpees";
    if(normalized.includes('mountain')) return "mountain-climbers";
    
    // Misc
    if(normalized.includes('alongamento') || normalized.includes('yoga')) return "alongamento-geral";
    if(normalized.includes('lateral') && !normalized.includes('prancha')) return "elevacao-lateral";
    if(normalized.includes('lsit') || normalized.includes('l-sit') || normalized.includes('l sit')) return "treino-lsit";
    if(normalized.includes('bananeira') || normalized.includes('handstand')) return "bananeira";
    
    // Fallback Return
    return "flexao-de-braco";
}

// Injeta logicamente quando carregar a página Dynamic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Logica da Page Exercise Details (exercise.html)
    const exerciseTitle = document.getElementById('ex-title');
    if (exerciseTitle) {
        const urlParams = new URLSearchParams(window.location.search);
        const rawId = urlParams.get('id');
        const exId = processIdStr(rawId);
        
        const data = exerciseDB[exId] || exerciseDB["flexao-de-braco"];
        
        exerciseTitle.textContent = data.name;
        document.getElementById('ex-purpose').textContent = data.purpose;
        
        // Render Muscles
        const musContainer = document.getElementById('ex-muscles');
        musContainer.innerHTML = '';
        data.muscles.forEach(m => {
            let badge = document.createElement('span');
            badge.className = 'label success';
            badge.style.marginRight = '5px';
            badge.style.display = 'inline-block';
            badge.textContent = m;
            musContainer.appendChild(badge);
        });

        // Render Steps
        const stepsContainer = document.getElementById('ex-steps');
        stepsContainer.innerHTML = '';
        
        data.steps.forEach((step, idx) => {
            let li = document.createElement('li');
            li.innerHTML = `<strong>Passo ${idx + 1}:</strong> ${step}`;
            li.style.marginBottom = '1rem';
            stepsContainer.appendChild(li);
        });

        // Mapeamento de Imagens Específicas
        const imageMap = {
            "agachamento-livre": ["assets/img/squat_start.png", "assets/img/squat_end.png"],
            "agachamento-sumo": ["assets/img/squat_start.png", "assets/img/squat_end.png"],
            
            "flexao-de-braco": ["assets/img/pushup_start.png", "assets/img/pushup_end.png"],
            "flexao-fechada": ["assets/img/pushup_start.png", "assets/img/pushup_end.png"],
            "flexao-declinada": ["assets/img/pushup_start.png", "assets/img/pushup_end.png"],
            "flexao-de-braco-apoiada": ["assets/img/pushup_start.png", "assets/img/pushup_end.png"],
            
            "barra-fixa-isometria": ["assets/img/pullup_start.png", "assets/img/pullup_end.png"],
            
            "mergulho-no-banco": ["assets/img/dip_start.png", "assets/img/dip_end.png"],
            "triceps-banco": ["assets/img/dip_start.png", "assets/img/dip_end.png"],

            "afundo": ["assets/img/lunge_start.png", "assets/img/lunge_end.png"],

            // Restante cai no genérico por conta da cota ou isometria por enquanto
            "default": ["assets/img/generic.png"]
        };
        
        let targetImgs = imageMap[exId] || imageMap["default"];
        if (!Array.isArray(targetImgs)) {
            targetImgs = [targetImgs]; // Fallback pra 1 imagem
        }
        
        const imgContainer = document.getElementById('ex-image-container');
        if (imgContainer) {
            imgContainer.innerHTML = '';
            targetImgs.forEach((srcImg, index) => {
                let img = document.createElement('img');
                img.src = srcImg;
                img.alt = `${data.name} - Posição ${index + 1}`;
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '8px';
                img.style.border = '1px solid rgba(255,255,255,0.1)';
                imgContainer.appendChild(img);
            });
        }
    }
});
