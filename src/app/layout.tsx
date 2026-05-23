import './globals.css';import Navbar from '@/components/layout/Navbar';import Footer from '@/components/layout/Footer';import type { Metadata } from 'next';
export const metadata:Metadata={title:'Prof STEM Lab',description:'Fisica e matematica dinamiche',openGraph:{title:'Prof STEM Lab',description:'Teoria, esercizi e simulazioni'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='it'><body><Navbar/>{children}<Footer/></body></html>}
