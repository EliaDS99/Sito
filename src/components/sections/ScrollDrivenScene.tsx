"use client";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollDrivenScene() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  const rotateX = useTransform(progress, [0, 1], [18, -18]);
  const rotateY = useTransform(progress, [0, 1], [-24, 24]);
  const z = useTransform(progress, [0, 1], [-120, 180]);
  const orbit = useTransform(progress, [0, 1], [0, 540]);
  const formulaY = useTransform(progress, [0, 1], [40, -120]);

  return (
    <section className='relative h-[85vh] rounded-3xl glass overflow-hidden [perspective:1200px]'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_45%)]' />
      <motion.div style={{ rotate: orbit }} className='absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35' />
      <motion.div style={{ rotate: orbit }} className='absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/20' />

      <motion.div
        style={{ rotateX, rotateY, z }}
        className='absolute left-1/2 top-1/2 h-[260px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/20 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 backdrop-blur-xl shadow-[0_30px_70px_rgba(2,132,199,0.35)]'
      >
        <div className='p-6'>
          <p className='text-xs uppercase tracking-[0.2em] text-cyan-100/80'>Laboratorio 3D Scroll Driven</p>
          <h3 className='mt-2 text-2xl font-bold'>Moto, campi e formule in uno spazio dinamico</h3>
          <p className='mt-2 text-sm text-slate-200/90'>Scorri avanti: la scena avanza. Scorri indietro: la scena retrocede.</p>
        </div>
      </motion.div>

      <motion.div style={{ y: formulaY }} className='absolute bottom-10 left-10 space-y-2 font-mono text-cyan-100/90'>
        <p>F = ma</p>
        <p>v(t) = v₀ + at</p>
        <p>∫ f(x) dx</p>
      </motion.div>
    </section>
  );
}
