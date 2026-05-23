import { lessons } from '@/data/lessons';
import { exercises } from '@/data/exercises';
import { animations } from '@/data/animations';
import { learningPaths } from '@/data/paths';
import ParallaxHero from '@/components/sections/ParallaxHero';
import ScrollDrivenScene from '@/components/sections/ScrollDrivenScene';
import { HeroScrollDemo } from '@/components/sections/HeroScrollDemo';
import { FormulaBlock, GlassCard, RevealOnScroll, SectionHeader } from '@/components/ui/core';

export default function Home() {
  return (
    <main className='containerx py-10 md:py-14 space-y-20'>
      <ParallaxHero />


      <RevealOnScroll>
        <SectionHeader title='Esperienza 3D guidata dallo scroll' subtitle='La scena reagisce direzionalmente: avanti quando scrolli in basso, indietro quando torni su.' />
        <HeroScrollDemo />
      </RevealOnScroll>

      <RevealOnScroll>
        <SectionHeader title='Cosa trovi qui' subtitle='Una piattaforma con ritmo visivo, contenuti modulari e laboratorio interattivo.' />
        <div className='grid md:grid-cols-3 gap-4'>
          {['Teoria chiara', 'Esercizi guidati', 'Simulazioni Java', 'Percorsi per argomento', 'Materiali scaricabili', 'Approfondimenti'].map((t, i) => (
            <GlassCard key={t} className='relative overflow-hidden'>
              <div className='absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl' />
              <h3 className='font-semibold'>{t}</h3>
              <p className='text-sm text-slate-300 mt-1'>Modulo #{i + 1} con transizioni e feedback visivo continuo.</p>
            </GlassCard>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SectionHeader title='Laboratorio interattivo' subtitle='Preview animate pensate per visualizzare i concetti.' />
        <div className='grid md:grid-cols-3 gap-4'>
          {animations.slice(0, 3).map((a) => (
            <GlassCard key={a.id} className='group'>
              <div className='h-24 rounded-xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-violet-500/20 mb-3 animate-pulse' />
              <h3 className='font-semibold'>{a.title}</h3>
              <p className='text-sm text-slate-300'>{a.description}</p>
            </GlassCard>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SectionHeader title='Percorsi didattici' subtitle='Roadmap con progressione visuale e obiettivi chiari.' />
        <div className='grid md:grid-cols-3 gap-4'>
          {learningPaths.map((p) => (
            <GlassCard key={p.id}>
              <h3 className='font-semibold'>{p.title}</h3>
              <p className='text-sm text-slate-300 mb-3'>{p.description}</p>
              <div className='h-2 rounded bg-white/10'>
                <div className='h-2 rounded bg-cyan-400 transition-all duration-1000' style={{ width: `${p.progress}%` }} />
              </div>
            </GlassCard>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SectionHeader title='Formule in evidenza' subtitle='Blocchi visivi per consolidare le idee fondamentali.' />
        <div className='grid md:grid-cols-5 gap-3'>
          {['F = ma', 'Eₖ = 1/2mv²', 'v(t)=v₀+at', '∫ f(x)dx', 'lim h→0 [f(x+h)-f(x)]/h'].map((f) => <FormulaBlock key={f} formula={f} />)}
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SectionHeader title='Ultimi contenuti' subtitle='Nuove lezioni, esercizi e animazioni pubblicati di recente.' />
        <div className='grid md:grid-cols-3 gap-4'>
          {[...lessons.slice(0, 2), ...exercises.slice(0, 2), ...animations.slice(0, 2)].map((x: any) => (
            <GlassCard key={x.slug}><h3 className='font-semibold'>{x.title}</h3><p className='text-sm text-slate-300'>{x.description}</p></GlassCard>
          ))}
        </div>
      </RevealOnScroll>
    </main>
  );
}
