"use client";
import { useMemo, useState } from 'react';
import { EmptyState, GlassCard } from '@/components/ui/core';

export function SearchAndFilters<T extends { title: string; description: string; subject: string; topic: string }>(p: {
  items: T[];
  extraFilter?: (item: T, extra: string) => boolean;
  extraOptions?: string[];
  render: (i: T) => React.ReactNode;
}) {
  const [q, setQ] = useState('');
  const [s, setS] = useState('Tutte');
  const [e, setE] = useState('Tutti');
  const filtered = useMemo(() => p.items.filter((i) => (s === 'Tutte' || i.subject === s) && (e === 'Tutti' || (p.extraFilter ? p.extraFilter(i, e) : true)) && `${i.title} ${i.description} ${i.topic}`.toLowerCase().includes(q.toLowerCase())), [p, q, s, e]);
  return (<><div className='mb-6 grid gap-3 md:grid-cols-3'><input className='rounded-xl border border-white/10 bg-white/5 p-2' placeholder='Cerca...' value={q} onChange={(x) => setQ(x.target.value)} /><select className='rounded-xl border border-white/10 bg-white/5 p-2' value={s} onChange={(x) => setS(x.target.value)}><option>Tutte</option><option>Fisica</option><option>Matematica</option></select><select className='rounded-xl border border-white/10 bg-white/5 p-2' value={e} onChange={(x) => setE(x.target.value)}><option>Tutti</option>{p.extraOptions?.map((o) => <option key={o}>{o}</option>)}</select></div>{filtered.length ? <div className='grid gap-4 md:grid-cols-2'>{filtered.map(p.render)}</div> : <EmptyState text='Nessun contenuto trovato con questi filtri.' />}</>);
}
export const ContentCard = ({ title, desc, badges, href }: { title: string; desc: string; badges: string[]; href: string }) => (<GlassCard><a href={href}><h3 className='font-semibold'>{title}</h3><p className='text-sm text-slate-300'>{desc}</p><div className='mt-2 flex flex-wrap gap-2'>{badges.map((b) => <span key={b} className='rounded-full bg-white/10 px-2 py-1 text-xs'>{b}</span>)}</div></a></GlassCard>);
