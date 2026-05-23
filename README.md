# Prof STEM Lab

Piattaforma didattica dinamica per fisica e matematica con UI animata, percorsi modulari e laboratorio simulazioni.

## Requisiti
- Node.js **>= 18.17** (consigliato Node 20 LTS)
- npm >= 9

## Setup rapido Linux
```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install 20
nvm use 20
```

## Installazione e avvio
```bash
npm install
npm run dev
```
Apri `http://localhost:3000`.

## Route principali
`/`, `/teoria`, `/esercizi`, `/animazioni`, `/percorsi`, `/risorse`, `/chi-sono`, `/contatti` + dettaglio `[slug]`.

## Aggiungere contenuti
- Lezioni: `src/data/lessons.ts`
- Esercizi: `src/data/exercises.ts`
- Animazioni: `src/data/animations.ts`
- Percorsi: `src/data/paths.ts`

## Simulazioni Java
1. Inserisci file in `public/animations/java/<nome>/`
2. Aggiungi item con `type: "java"`, `filePath`, `downloadUrl`, `launchInstructions` in `src/data/animations.ts`

## Struttura
- `src/app` pagine e routing
- `src/components` componenti riusabili e animazioni
- `src/data` contenuti locali tipizzati
- `src/types` modelli

## Prossimi step consigliati
- Migrare contenuti lunghi in MDX
- Aggiungere KaTeX per formule avanzate
- Collegare backend/CMS in seconda fase
