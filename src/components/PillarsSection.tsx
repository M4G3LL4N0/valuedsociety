import React from 'react';
import { Pillar } from '../app/page';

interface PillarsSectionProps {
  pillars: Pillar[];
}

export const PillarsSection = ({ pillars }: PillarsSectionProps) => (
  <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
    <div className="grid gap-6 md:grid-cols-3">
      {pillars.map((pillar) => (
        <div
          key={pillar.title}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold">{pillar.title}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {pillar.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);
