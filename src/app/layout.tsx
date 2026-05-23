import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import PageCurtain from '@/components/layout/PageCurtain';
import GlobalScrollEngine from '@/components/layout/GlobalScrollEngine';

export const metadata: Metadata = {
  title: 'Prof STEM Lab | Fisica e Matematica in Movimento',
  description: 'Piattaforma didattica dinamica con teoria, esercizi, simulazioni e percorsi guidati.',
  openGraph: { title: 'Prof STEM Lab', description: 'Fisica e Matematica in Movimento' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='it'>
      <body>
        <AnimatedBackground />
        <PageCurtain />
        <GlobalScrollEngine />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
