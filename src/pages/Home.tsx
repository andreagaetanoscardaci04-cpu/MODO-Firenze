import React from 'react';
import { motion } from 'motion/react';
import Hero from '@/src/components/Hero';
import SectionHeader from '@/src/components/SectionHeader';
import CoachCard from '@/src/components/CoachCard';
import { COACHES } from '@/src/constants';
import { ArrowRight, Sparkles, Wind, ShieldCheck, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      <Hero />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-[40px] overflow-hidden aspect-square"
          >
            <img
              src="/flow 2.jpg"
              alt="Studio"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-modo-sage/20 mix-blend-multiply" />
          </motion.div>
          
          <div className="space-y-8">
            <SectionHeader
              align="left"
              subtitle="La Filosofia MODO"
              title="Dove il Movimento Incontra la Consapevolezza"
              description="MODO Firenze nasce dal desiderio di creare uno spazio dove il movimento incontra la consapevolezza. Situato in un angolo storico di Firenze, fondiamo il design contemporaneo con l'antica saggezza."
              className="mb-0"
            />
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Sparkles, title: "Spazio Raffinato", desc: "Design minimalista creato per la concentrazione e la tranquillità." },
                { icon: Wind, title: "Guida Esperta", desc: "Insegnanti dedicati alla tua crescita personale." },
                { icon: ShieldCheck, title: "Approccio Olistico", desc: "Programmi progettati sia per il corpo che per la mente." },
                { icon: Leaf, title: "Luce Naturale", desc: "Vetrate a tutta altezza che si affacciano sulla città." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-modo-sage/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-modo-sage" />
                  </div>
                  <h4 className="text-xl font-serif">{item.title}</h4>
                  <p className="text-sm text-modo-ink/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Yoga vs Pilates Split */}
      <section className="relative py-32 bg-modo-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            subtitle="Le Nostre Discipline"
            title="Scegli il Tuo Percorso"
            description="Che tu cerchi la fluida grazia dello Yoga o la precisione atletica del Pilates, abbiamo uno spazio per te."
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Yoga Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative rounded-[48px] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                alt="Yoga"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-modo-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-pearl">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block opacity-80">Fluidità e Respiro</span>
                <h3 className="text-5xl font-serif mb-6">Yoga</h3>
                <Link to="/yoga" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-modo-sage transition-colors">
                  Esplora lo Yoga <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Pilates Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative rounded-[48px] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="/pilates 2.avif"
                alt="Pilates"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-modo-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-pearl">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block opacity-80">Precisione e Potenza</span>
                <h3 className="text-5xl font-serif mb-6">Pilates</h3>
                <Link to="/pilates" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-modo-sage transition-colors">
                  Scopri il Pilates <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coaches Teaser */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            align="left"
            subtitle="Il Team"
            title="Guidati da Maestri"
            description="I nostri istruttori sono più che semplici insegnanti; sono praticanti dediti al tuo percorso."
            className="mb-0"
          />
          <Link to="/coaches" className="px-8 py-4 border border-modo-ink/10 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-modo-ink hover:text-pearl transition-all">
            Incontra Tutti gli Insegnanti
          </Link>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COACHES.map((coach, i) => (
            <CoachCard key={coach.id} coach={coach} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[64px] bg-modo-sage p-12 md:p-24 overflow-hidden text-center text-pearl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Inizia il Tuo Viaggio</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Pronto a trovare il <br /> tuo centro?</h2>
            <p className="text-pearl/80 text-lg">Unisciti alla nostra community oggi e scopri la differenza MODO. La tua prima lezione è offerta da noi.</p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <Link to="/contact" className="px-10 py-5 bg-pearl text-modo-ink rounded-full text-xs uppercase tracking-widest font-bold hover:bg-modo-ink hover:text-pearl transition-all">
                Prenota la Prima Lezione
              </Link>
              <Link to="/pricing" className="px-10 py-5 border border-pearl/30 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-pearl hover:text-modo-ink transition-all">
                Vedi gli Abbonamenti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
