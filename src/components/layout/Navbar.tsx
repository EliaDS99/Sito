"use client";
import Link from 'next/link';
import { Menu, Atom } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  ['/', 'Home'], ['/teoria', 'Teoria'], ['/esercizi', 'Esercizi'], ['/animazioni', 'Laboratorio'], ['/percorsi', 'Percorsi'], ['/risorse', 'Risorse'], ['/chi-sono', 'Chi sono'], ['/contatti', 'Contatti']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl'>
      <nav className='containerx flex items-center justify-between py-3'>
        <Link href='/' className='flex items-center gap-2 font-semibold'><Atom className='h-4 w-4 text-cyan-300' /> Prof STEM Lab</Link>
        <button className='md:hidden' aria-label='Apri menu' onClick={() => setOpen((v) => !v)}><Menu /></button>
        <div className={`${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4`}>
          {links.map(([href, label]) => (
            <motion.div key={href} whileHover={{ y: -2 }}>
              <Link href={href} className='text-sm text-slate-200 hover:text-cyan-200'>{label}</Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </header>
  );
}
