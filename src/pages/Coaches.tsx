import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from '@/src/components/SectionHeader';
import { COACHES } from '@/src/constants';

export default function Coaches() {
  return (
    <div className="pt-32 pb-32 space-y-32">
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="I Maestri"
          title="I Nostri Insegnanti"
          description="Un collettivo di praticanti dediti, ognuno dei quali porta una prospettiva unica all'arte del movimento."
        />

        <div className="space-y-40">
          {COACHES.map((coach, i) => (
            <motion.div
              key={coach.id}
              id={coach.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[48px] overflow-hidden aspect-[4/5] shadow-2xl">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: coach.imagePosition, transform: [coach.imageScale && `scale(${coach.imageScale})`, coach.imageTranslateY && `translateY(${coach.imageTranslateY})`].filter(Boolean).join(' ') || undefined }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-modo-sage/10 mix-blend-overlay" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.4em] text-modo-sage font-bold">Insegnante di {coach.role}</span>
                  <h2 className="text-6xl font-serif text-modo-ink">{coach.name}</h2>
                </div>

                <p className="text-xl text-modo-ink/80 leading-relaxed italic">
                  "{coach.philosophy}"
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-modo-ink mb-2">Bio</h4>
                    <p className="text-modo-ink/60 leading-relaxed">{coach.bio}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold text-modo-ink mb-2">Stile di Insegnamento</h4>
                      <p className="text-modo-ink/60 text-sm">{coach.teachingStyle}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold text-modo-ink mb-2">Specialità</h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map(s => (
                          <span key={s} className="px-3 py-1 bg-modo-sage/10 text-modo-sage text-[10px] uppercase tracking-widest font-bold rounded-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-modo-ink mb-2">Aree di Focus</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {coach.focusAreas.map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-modo-ink/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-modo-sage" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="px-8 py-4 bg-modo-ink text-pearl text-xs uppercase tracking-widest font-bold rounded-full hover:bg-modo-sage transition-all">
                  Prenota con {coach.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
