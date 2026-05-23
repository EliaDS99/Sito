"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageCurtain() {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={pathname}
        className='pointer-events-none fixed inset-0 z-[60]'
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(100% 0 0 0)' }}
        exit={{ clipPath: 'inset(0 0 0 0)' }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      >
        <div className='h-full w-full bg-gradient-to-b from-cyan-400/20 via-slate-950 to-violet-500/20 backdrop-blur-sm' />
      </motion.div>
    </AnimatePresence>
  );
}
