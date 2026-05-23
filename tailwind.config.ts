import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg:'#070b14',panel:'#0d1424',accent:'#22d3ee',violet:'#8b5cf6' },
      boxShadow:{glow:'0 0 40px rgba(34,211,238,.25)'}
    }
  },
  plugins: []
} satisfies Config;
