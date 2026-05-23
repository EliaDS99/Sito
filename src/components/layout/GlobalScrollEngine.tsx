"use client";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function GlobalScrollEngine() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.25 });

  const rotateX = useTransform(p, [0, 1], [8, -8]);
  const rotateY = useTransform(p, [0, 1], [-10, 10]);
  const z = useTransform(p, [0, 1], [-80, 120]);
  const lineX = useTransform(p, [0, 1], ['-10%', '110%']);

  return (
    <div aria-hidden className='pointer-events-none fixed inset-0 z-[5] overflow-hidden'>
      <motion.div style={{ rotateX, rotateY, z }} className='absolute left-1/2 top-1/2 h-[42vh] w-[42vw] min-w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/8 to-violet-500/8 backdrop-blur-[1px]' />
      <motion.div style={{ x: lineX }} className='absolute top-[28%] h-px w-[28vw] min-w-[220px] bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent' />
      <motion.div style={{ x: lineX }} transition={{ duration: 0.2 }} className='absolute top-[64%] h-px w-[34vw] min-w-[260px] bg-gradient-to-r from-transparent via-violet-300/50 to-transparent' />
    </div>
  );
}
