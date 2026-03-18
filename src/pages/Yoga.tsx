import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from '@/src/components/SectionHeader';
import CoachCard from '@/src/components/CoachCard';
import { COACHES, CLASSES } from '@/src/constants';
import { Link } from 'react-router-dom';

export default function Yoga() {
  const yogaCoaches = COACHES.filter(c => c.role === 'Yoga');
  const yogaClasses = CLASSES.filter(c => c.type === 'Yoga');

  return (
    <div className="pt-32 pb-32 space-y-32">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[64px] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                alt="Yoga Practice"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <SectionHeader
              align="left"
              subtitle="L'Arte del Flusso"
              title="Yoga a MODO"
              description="La nostra pratica yoga è una fusione di lignaggi tradizionali e moderna comprensione anatomica. Ci concentriamo sull'unione di respiro, movimento e quiete."
              className="mb-0"
            />
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="text-lg font-serif text-modo-sage">Vinyasa</h4>
                <p className="text-sm text-modo-ink/60">Sequenze dinamiche che fluiscono con il respiro per generare calore e concentrazione.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif text-modo-sage">Hatha</h4>
                <p className="text-sm text-modo-ink/60">Posizioni fondamentali mantenute più a lungo per sviluppare forza e allineamento.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif text-modo-sage">Yin</h4>
                <p className="text-sm text-modo-ink/60">Pratica lenta che mira ai tessuti connettivi profondi e alle articolazioni.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif text-modo-sage">Meditazione</h4>
                <p className="text-sm text-modo-ink/60">Sessioni guidate per coltivare chiarezza mentale e calma emotiva.</p>
              </div>
            </div>
            <Link to="/schedule" className="inline-block px-8 py-4 bg-modo-ink text-pearl text-xs uppercase tracking-widest font-bold rounded-full hover:bg-modo-sage transition-all">
              Vedi Orario Yoga
            </Link>
          </div>
        </div>
      </section>

      {/* Yoga Coaches */}
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Guida Esperta"
          title="Incontra i Tuoi Maestri"
          description="Yanelli e Francesca portano decenni di esperienza per aiutarti a approfondire la tua pratica."
        />
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {yogaCoaches.map((coach, i) => (
            <CoachCard key={coach.id} coach={coach} index={i} />
          ))}
        </div>
      </section>

      {/* Yoga Classes List */}
      <section className="bg-modo-cream py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            subtitle="La Pratica"
            title="Classi di Yoga"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {yogaClasses.map((item, i) => (
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
                  Una sessione equilibrata progettata per sfidare il tuo corpo calmando la tua mente.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
