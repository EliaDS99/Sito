"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from '@/components/ui/core';

export default function ParallaxHero() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section className='relative min-h-[78vh] overflow-hidden rounded-3xl glass p-8 md:p-12'>
      <motion.div style={{ y: y1 }} className='absolute -top-12 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl' />
      <motion.div style={{ y: y2 }} className='absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl' />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} className='absolute right-10 bottom-10 h-40 w-40 rounded-full border border-cyan-300/40' />
      <div className='relative z-10 max-w-4xl space-y-6'>
        <p className='text-cyan-200/90'>Laboratorio didattico premium</p>
        <h1 className='text-5xl md:text-7xl font-black tracking-tight'>Fisica e Matematica, spiegate con chiarezza e movimento</h1>
        <p className='text-lg text-slate-300'>Teoria, esercizi, simulazioni e percorsi guidati con visualizzazioni dinamiche e microinterazioni continue.</p>
        <div className='flex gap-3 flex-wrap'>
          <MagneticButton href='/teoria' label='Esplora le lezioni' />
          <MagneticButton href='/animazioni' label='Apri il laboratorio' />
        </div>
      </div>
    </section>
  );
}
