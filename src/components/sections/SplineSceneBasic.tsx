'use client'

import { Orbit } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'

export function SplineSceneBasic() {
  return (
    <Card className='relative h-[520px] w-full overflow-hidden border-white/10 bg-black/95'>
      <Spotlight className='-top-40 left-0 md:left-60 md:-top-20' fill='white' />
      <div className='flex h-full flex-col md:flex-row'>
        <div className='relative z-10 flex flex-1 flex-col justify-center p-8'>
          <div className='mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100'>
            <Orbit className='h-3.5 w-3.5' /> Astrofisica Interattiva
          </div>
          <h2 className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
            Nebulose, orbite e gravità in 3D
          </h2>
          <p className='mt-4 max-w-lg text-neutral-300'>
            Esplora un ambiente immersivo per visualizzare come moto orbitale, campi e geometria descrivano il cosmo.
          </p>
        </div>
        <div className='relative flex-1'>
          <SplineScene scene='https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode' className='h-full w-full' />
        </div>
      </div>
    </Card>
  )
}
