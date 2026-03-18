import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from '@/src/components/SectionHeader';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Intro',
    price: '45',
    period: '2 Settimane',
    description: 'Perfetto per chi è nuovo a MODO Firenze.',
    features: ['3 Classi a tua scelta', 'Orientamento in studio', 'Valido per 14 giorni', 'Noleggio tappetino incluso'],
    cta: 'Inizia Ora',
    highlight: false
  },
  {
    name: 'Essential',
    price: '160',
    period: 'Mese',
    description: 'Per il praticante dedicato.',
    features: ['8 Classi al mese', '10% sconto workshop', 'Prenotazione prioritaria', 'Guest pass (1/mese)', 'Accesso armadietto'],
    cta: 'Iscriviti Ora',
    highlight: true
  },
  {
    name: 'Unlimited',
    price: '280',
    period: 'Mese',
    description: 'Immersione totale nel benessere.',
    features: ['Yoga & Pilates Illimitati', '20% sconto workshop', '2 Guest pass/mese', 'Armadietto personale', 'Consulenza privata'],
    cta: 'Vai Unlimited',
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-32 space-y-24">
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Investimento"
          title="Opzioni di Abbonamento"
          description="Scegli un piano che si adatti al tuo stile di vita e al tuo impegno verso il benessere."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-12 rounded-[48px] flex flex-col ${plan.highlight ? 'bg-modo-sage text-pearl shadow-2xl scale-105 z-10' : 'bg-modo-cream text-modo-ink'}`}
            >
              {plan.highlight && (
                <div className="absolute top-8 right-8 px-4 py-1 bg-pearl text-modo-sage rounded-full text-[10px] uppercase tracking-widest font-bold">
                  Il Più Popolare
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-serif">€{plan.price}</span>
                  <span className={`text-sm uppercase tracking-widest opacity-60`}>/ {plan.period}</span>
                </div>
                <p className={`mt-6 text-sm ${plan.highlight ? 'text-pearl/70' : 'text-modo-ink/60'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-pearl/20' : 'bg-modo-sage/10'}`}>
                      <Check className={`w-3 h-3 ${plan.highlight ? 'text-pearl' : 'text-modo-sage'}`} />
                    </div>
                    <span className={plan.highlight ? 'text-pearl/90' : 'text-modo-ink/80'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${plan.highlight ? 'bg-pearl text-modo-sage hover:bg-modo-ink hover:text-pearl' : 'bg-modo-ink text-pearl hover:bg-modo-sage'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="max-w-3xl mx-auto px-6 text-center space-y-8">
        <h3 className="text-3xl font-serif">Hai delle domande?</h3>
        <p className="text-modo-ink/60">Offriamo tariffe aziendali e pacchetti per sessioni private. Contattaci per un preventivo personalizzato.</p>
        <button className="text-modo-sage font-bold uppercase tracking-widest text-xs border-b border-modo-sage/30 pb-1 hover:border-modo-sage transition-all">
          Domande Frequenti
        </button>
      </section>
    </div>
  );
}
