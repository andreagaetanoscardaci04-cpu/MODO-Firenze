import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from '@/src/components/SectionHeader';
import { CLASSES } from '@/src/constants';

const DAYS = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
const TIMES = ['07:00', '08:30', '10:00', '12:30', '16:00', '17:30', '19:00'];

export default function Schedule() {
  return (
    <div className="pt-32 pb-32 space-y-24">
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Piano Settimanale"
          title="Orario delle Lezioni"
          description="Trova il momento perfetto per la tua pratica. Offriamo una varietà di lezioni dalla mattina presto alla sera tardi."
        />

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['Tutti', 'Yoga', 'Pilates'].map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 rounded-full border border-modo-ink/10 text-xs uppercase tracking-widest font-bold hover:bg-modo-ink hover:text-pearl transition-all"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-8 border-b border-modo-ink/5 pb-6">
              <div className="text-xs uppercase tracking-widest font-bold text-modo-sage">Orario</div>
              {DAYS.map(day => (
                <div key={day} className="text-xs uppercase tracking-widest font-bold text-modo-ink">{day}</div>
              ))}
            </div>

            <div className="divide-y divide-modo-ink/5">
              {TIMES.map((time, i) => (
                <div key={time} className="grid grid-cols-8 py-8 items-start">
                  <div className="text-sm font-medium text-modo-ink/40">{time}</div>
                  {DAYS.map((day, j) => {
                    // Randomly assign classes for demo
                    const hasClass = (i + j) % 3 === 0;
                    const classItem = CLASSES[(i + j) % CLASSES.length];
                    
                    return (
                      <div key={day} className="px-2">
                        {hasClass && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className={`p-4 rounded-2xl ${classItem.type === 'Yoga' ? 'bg-modo-sage/10 border-modo-sage/20' : 'bg-modo-terracotta/10 border-modo-terracotta/20'} border cursor-pointer hover:shadow-md transition-all`}
                          >
                            <p className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-60">{classItem.type}</p>
                            <p className="text-sm font-serif font-bold mb-2">{classItem.name}</p>
                            <div className="flex flex-col gap-1 text-[10px] uppercase tracking-tighter opacity-50">
                              <span>{classItem.duration}</span>
                              <span>{classItem.level}</span>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="glass rounded-[40px] p-12 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Arrivo</h4>
            <p className="text-sm text-modo-ink/60">Si prega di arrivare 10-15 minuti prima dell'inizio della lezione per sistemarsi.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Attrezzatura</h4>
            <p className="text-sm text-modo-ink/60">Tappetini e attrezzi sono forniti, ma sentiti libero di portare i tuoi.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Cancellazione</h4>
            <p className="text-sm text-modo-ink/60">Le cancellazioni devono essere effettuate almeno 12 ore prima della lezione.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
