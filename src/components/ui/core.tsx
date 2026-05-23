"use client";
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import type React from 'react';
import { cn } from '@/lib/utils';

export const RevealOnScroll = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 22, filter: 'blur(8px)' }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 24, scale: 0.99, filter: 'blur(6px)' }}
      animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ type: 'spring', stiffness: 180, damping: 18 }} className={cn('glass rounded-2xl p-5 shadow-[0_0_30px_rgba(34,211,238,0.14)]', className)}>
    {children}
  </motion.div>
);

export const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className='mb-8'>
    <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>{title}</h2>
    <p className='mt-2 max-w-2xl text-slate-300'>{subtitle}</p>
  </div>
);

export const MagneticButton = ({ href, label }: { href: string; label: string }) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
    <Link href={href} className='inline-flex rounded-full border border-cyan-300/50 bg-cyan-400/10 px-6 py-2.5 font-medium text-cyan-100 transition hover:bg-cyan-300/20'>
      {label}
    </Link>
  </motion.div>
);

export const FormulaBlock = ({ formula }: { formula: string }) => (
  <div className='rounded-xl border border-violet-400/40 bg-violet-500/10 px-4 py-2 font-mono text-violet-100 shadow-[inset_0_0_30px_rgba(139,92,246,0.25)]'>{formula}</div>
);

export const EmptyState = ({ text }: { text: string }) => <GlassCard className='text-center text-slate-300'>{text}</GlassCard>;
