import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from '@/src/components/SectionHeader';
import CoachCard from '@/src/components/CoachCard';
import { COACHES, CLASSES } from '@/src/constants';
import { Link } from 'react-router-dom';

export default function Pilates() {
  const pilatesCoaches = COACHES.filter(c => c.role === 'Pilates');
  const pilatesClasses = CLASSES.filter(c => c.type === 'Pilates');

  return (
    <div className="pt-32 pb-32 space-y-32">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <SectionHeader
              align="left"
              subtitle="Precisione e Forza"
              title="Pilates a MODO"
              description="Il nostro programma di Pilates si concentra sulla stabilità del core, l'allineamento posturale e la forza funzionale. Offriamo sessioni sia Mat che Reformer."
              className="mb-0"
            />
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="text-lg font-serif text-modo-terracotta">Reformer</h4>
                <p className="text-sm text-modo-ink/60">Allenamento di resistenza dinamica utilizzando il sistema Peak Pilates reformer.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif text-modo-terracotta">Mat Pilates</h4>
                <p className="text-sm text-modo-ink/60">Esercizi classici a terra focalizzati sul controllo del core e sul respiro.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif text-modo-terracotta">Barre</h4>
                <p className="text-sm text-modo-ink/60">Una fusione energica di Pilates, danza e fitness funzionale.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif text-modo-terracotta">Terapia Posturale</h4>
                <p className="text-sm text-modo-ink/60">Sequenze specifiche per correggere gli squilibri posturali moderni.</p>
              </div>
            </div>
            <Link to="/schedule" className="inline-block px-8 py-4 bg-modo-ink text-pearl text-xs uppercase tracking-widest font-bold rounded-full hover:bg-modo-terracotta transition-all">
              Vedi Orario Pilates
            </Link>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[64px] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="/pilates 2.avif"
                alt="Pilates Practice"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pilates Coaches */}
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Le Specialiste"
          title="Incontra i Tuoi Maestri"
          description="Margherita e Ginevra combinano precisione tecnica con energia atletica."
        />
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {pilatesCoaches.map((coach, i) => (
            <CoachCard key={coach.id} coach={coach} index={i} />
          ))}
        </div>
      </section>

      {/* Pilates Classes List */}
      <section className="bg-modo-cream py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            subtitle="La Disciplina"
            title="Classi di Pilates"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {pilatesClasses.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="text-2xl font-serif mb-4">{item.name}</h4>
                <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest font-bold text-modo-ink/40">
                  <span className="px-3 py-1 bg-modo-cream rounded-full">{item.level}</span>
                  <span className="px-3 py-1 bg-modo-cream rounded-full">{item.duration}</span>
                </div>
                <p className="mt-6 text-sm text-modo-ink/60 leading-relaxed">
                  Una sessione di alta precisione progettata per sviluppare la forza del core e migliorare l'allineamento generale del corpo.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
