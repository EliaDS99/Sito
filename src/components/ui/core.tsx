"use client";
import { motion,useReducedMotion } from 'framer-motion'; import Link from 'next/link'; import { cn } from '@/lib/utils'; import React from 'react';
export const RevealOnScroll=({children,className}:{children:React.ReactNode;className?:string})=>{const r=useReducedMotion();return <motion.div initial={r?{}:{opacity:0,y:20}} whileInView={r?{}:{opacity:1,y:0}} viewport={{once:true}} className={className}>{children}</motion.div>};
export const GlassCard=({children,className}:{children:React.ReactNode;className?:string})=><div className={cn('rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5 shadow-glow',className)}>{children}</div>;
export const SectionHeader=({title,subtitle}:{title:string;subtitle:string})=><div className='mb-6'><h2 className='text-3xl font-semibold'>{title}</h2><p className='text-slate-300'>{subtitle}</p></div>;
export const MagneticButton=({href,label}:{href:string;label:string})=><Link href={href} className='inline-flex rounded-full border border-cyan-300/50 bg-cyan-400/10 px-5 py-2 hover:bg-cyan-300/20 transition'>{label}</Link>;
export const EmptyState=({text}:{text:string})=><GlassCard className='text-center text-slate-300'>{text}</GlassCard>;
export const FormulaBlock=({formula}:{formula:string})=><div className='rounded-xl border border-violet-400/40 bg-violet-500/10 px-4 py-2 font-mono text-violet-100'>{formula}</div>;
export const PageTransition=({children}:{children:React.ReactNode})=><motion.div initial={{opacity:0}} animate={{opacity:1}}>{children}</motion.div>;
