# Calistenia Pro 📊

PWA de **calistenia** com programa completo de 30 dias, gamificação (XP, níveis e conquistas) e dashboard de acompanhamento. Tudo funciona **sem equipamentos** e **offline**, com dados salvos localmente no navegador.

## ✨ Funcionalidades

- 🏋️ **Programa 30 Dias** — rotina progressiva dividida em 4 fases (adaptação, volume, intensidade e skills)
- ⭐ **Sistema de XP e Níveis** — ganhe pontos ao concluir treinos e acompanhe sua evolução
- 📈 **Dashboard Premium** — progresso, sequência (streak), calendário, hidratação e peso
- 🏆 **12 Conquistas** — metas desbloqueáveis ao longo da jornada
- 🧮 **Calculadora TDEE** — cálculo de metabolismo basal e gasto calórico diário
- 📚 **Biblioteca Interativa** — 32 exercícios com mapa anatômico
- ⏱️ **Timer Pro** — temporizador de treino integrado
- 🌙 **Tema claro/escuro** com persistência
- 💾 **Backup/restauração** — exporte e importe seus dados em JSON
- 📱 **PWA instalável** — funciona offline em qualquer dispositivo

## 🚀 Como executar

PWA não exige build — basta servir a pasta:

```bash
# Opção 1: Python
python3 -m http.server 8080
# acesse http://localhost:8080

# Opção 2: Node.js
npx serve
```

Para instalar com Service Worker (PWA), use um servidor HTTP — não funciona via `file://`.

## 📁 Estrutura do projeto

```
├── index.html          # Página inicial
├── program.html        # Programa 30 dias
├── library.html        # Biblioteca de exercícios
├── dashboard.html      # Dashboard de progresso
├── calculator.html     # Calculadora TDEE
├── exercise.html       # Detalhe de exercício
├── script.js           # Lógica principal + gamificação
├── exercises-data.js   # Base de dados dos 32 exercícios
├── style.css           # Estilos globais
├── manifest.json       # Manifest do PWA
└── sw.js               # Service Worker (offline)
```

## 🛠️ Tecnologias

- HTML5 + CSS3 (design responsivo, tema escuro)
- JavaScript vanilla (ES6+)
- `localStorage` para persistência de dados
- Service Worker para funcionamento offline
- PWA (manifest.json)

## 📄 Licença

Projeto de estudo — aberto para aprendizado e contribuições.