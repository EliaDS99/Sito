# Prof STEM Lab
Piattaforma didattica premium (v1) per un professore di fisica e matematica.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- Dati locali TypeScript

## Installazione e avvio
```bash
npm install
npm run dev
```

## Come aggiungere una nuova lezione
1. Apri `src/data/lessons.ts`.
2. Aggiungi un oggetto `Lesson` con `slug` univoco e collegamenti a esercizi/animazioni.
3. La pagina sarà disponibile in `/teoria/[slug]`.

## Come aggiungere un nuovo esercizio
1. Apri `src/data/exercises.ts`.
2. Inserisci il nuovo oggetto `Exercise`.
3. Appare in `/esercizi` e nella route dinamica `/esercizi/[slug]`.

## Come aggiungere una nuova animazione Java
1. Crea cartella in `public/animations/java/nome/`.
2. Inserisci file scaricabili (`.jar`, README, ecc.).
3. Registra la simulazione in `src/data/animations.ts` con:
   - `type: "java"`
   - `filePath`
   - `downloadUrl`
   - `launchInstructions`

## Struttura cartelle
- `src/app`: routing e pagine
- `src/components`: UI riusabile
- `src/data`: contenuti locali
- `src/types`: modelli TypeScript
- `public/animations/java`: area simulazioni Java
- `public/resources`: area materiali scaricabili

## Prossimi sviluppi consigliati
- MDX reale per contenuti lunghi
- integrazione KaTeX
- backend CMS opzionale
- autenticazione studenti
- tracking progresso reale
