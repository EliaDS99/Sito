"use client";
import React from "react";
import Image from "next/image";
import { Atom } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[320px] pt-[240px] md:pb-[500px] md:pt-[600px]">
      <ContainerScroll
        titleComponent={
          <>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-cyan-100">
              <Atom className="h-4 w-4" /> Esperienza 3D guidata dallo scroll
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-6xl">
              Unleash the power of <br />
              <span className="mt-1 block text-4xl font-bold leading-none text-cyan-200 md:text-[6rem]">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80"
          alt="equazioni matematiche su lavagna"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-center"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
