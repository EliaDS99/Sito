"use client";
import { motion } from 'framer-motion';

const dots = Array.from({ length: 24 }, (_, i) => i);

export default function AnimatedBackground() {
  return (
    <div aria-hidden className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      <div className='absolute inset-0 grid-science opacity-35' />
      {dots.map((d) => (
        <motion.span
          key={d}
          className='absolute h-1.5 w-1.5 rounded-full bg-cyan-300/70'
          style={{ left: `${(d * 17) % 100}%`, top: `${(d * 29) % 100}%` }}
          animate={{ y: [0, -26, 0], x: [0, 8, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + (d % 5), repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <motion.div className='absolute -left-24 top-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl' animate={{ x: [0, 30, 0], y: [0, 20, 0] }} transition={{ duration: 14, repeat: Infinity }} />
      <motion.div className='absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl' animate={{ x: [0, -30, 0], y: [0, -24, 0] }} transition={{ duration: 15, repeat: Infinity }} />
    </div>
  );
}
