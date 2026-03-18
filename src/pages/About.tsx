import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from '@/src/components/SectionHeader';

export default function About() {
  return (
    <div className="pt-32 pb-32 space-y-32">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <SectionHeader
              align="left"
              subtitle="La Nostra Storia"
              title="L'Essenza di MODO"
              description="Fondata nel 2018, MODO Firenze è stata concepita come un ponte tra la bellezza storica di Firenze e la necessità contemporanea di un movimento consapevole."
              className="mb-0"
            />
            <div className="space-y-6 text-modo-ink/60 leading-relaxed">
              <p>
                Il nostro viaggio è iniziato in un piccolo studio affacciato sull'Arno. Oggi occupiamo uno spazio splendidamente restaurato in Via de' Tornabuoni, dove ogni dettaglio — dal profumo di salvia alle pareti perlate — è progettato per facilitare la tua pratica.
              </p>
              <p>
                In MODO crediamo che il movimento sia una forma d'arte. Che tu stia fluendo attraverso una sequenza Vinyasa o trovando precisione sul Reformer, stai intraprendendo un dialogo con te stesso.
              </p>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[64px] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200"
                alt="Studio Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 glass rounded-[32px] p-6 flex flex-col justify-center">
              <span className="text-4xl font-serif text-modo-sage">8+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Anni di Pratica</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="bg-modo-cream py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            subtitle="L'Ambiente"
            title="Uno Spazio Progettato per Te"
            description="Ogni angolo di MODO Firenze è curato per offrire un'esperienza sensoriale che promuove pace e concentrazione."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Light Studio", desc: "Inondato di luce naturale mattutina, perfetto per rinvigorenti flussi Vinyasa.", img: "/yoga 4.avif" },
              { title: "The Reformer Room", desc: "Equipaggiato con gli ultimi reformer Peak Pilates per precisione e forza.", img: "/pilates 3.avif" },
              { title: "Zen Lounge", desc: "Uno spazio tranquillo per la transizione prima e dopo la lezione con tisane alle erbe.", img: "/tea room.jpg" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group space-y-6"
              >
                <div className="rounded-[32px] overflow-hidden aspect-video shadow-lg">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-2xl font-serif">{item.title}</h4>
                <p className="text-sm text-modo-ink/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <SectionHeader
          subtitle="I Nostri Valori"
          title="Lo Stile MODO"
        />
        <div className="grid sm:grid-cols-2 gap-12 text-left">
          <div className="space-y-4">
            <h4 className="text-xl font-serif text-modo-sage">Inclusività</h4>
            <p className="text-sm text-modo-ink/60">Accogliamo tutti i corpi, livelli e background. Lo Yoga e il Pilates sono per tutti.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-serif text-modo-sage">Eccellenza</h4>
            <p className="text-sm text-modo-ink/60">Manteniamo i più alti standard di istruzione e manutenzione dello studio.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-serif text-modo-sage">Sostenibilità</h4>
            <p className="text-sm text-modo-ink/60">Dai nostri tappetini ecologici alla filtrazione dell'acqua, ci prendiamo cura del pianeta.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-serif text-modo-sage">Comunità</h4>
            <p className="text-sm text-modo-ink/60">Siamo più di uno studio; siamo una famiglia che sostiene la crescita reciproca.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
