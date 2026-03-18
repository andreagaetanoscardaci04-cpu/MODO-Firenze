import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from '@/src/components/SectionHeader';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-32 space-y-32">
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Contattaci"
          title="Connettiti con Noi"
          description="Hai una domanda sulle nostre lezioni o abbonamenti? Ci piacerebbe sentirti."
        />

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-modo-sage/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-modo-sage" />
                </div>
                <h4 className="text-xl font-serif">Vieni a Trovarci</h4>
                <p className="text-sm text-modo-ink/60 leading-relaxed">
                  Via de' Tornabuoni, 15<br />
                  50123 Firenze FI, Italia
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-modo-sage/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-modo-sage" />
                </div>
                <h4 className="text-xl font-serif">Chiamaci</h4>
                <p className="text-sm text-modo-ink/60 leading-relaxed">
                  +39 055 123 ****<br />
                  Lun-Ven: 07:00 - 21:00
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-modo-sage/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-modo-sage" />
                </div>
                <h4 className="text-xl font-serif">Scrivici</h4>
                <p className="text-sm text-modo-ink/60 leading-relaxed">
                  hello@modofirenze.it<br />
                  support@modofirenze.it
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-modo-sage/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-modo-sage" />
                </div>
                <h4 className="text-xl font-serif">Orari</h4>
                <p className="text-sm text-modo-ink/60 leading-relaxed">
                  Lun-Ven: 07:00 - 21:00<br />
                  Sab-Dom: 08:30 - 18:00
                </p>
              </div>
            </div>

            <div className="pt-12 border-t border-modo-ink/5">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Segui il Nostro Viaggio</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-modo-ink/10 flex items-center justify-center hover:bg-modo-sage hover:text-pearl transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-modo-ink/10 flex items-center justify-center hover:bg-modo-sage hover:text-pearl transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-modo-cream p-12 rounded-[48px] shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-modo-ink/60 ml-4">Nome</label>
                  <input type="text" className="w-full bg-white border border-modo-ink/5 rounded-full py-4 px-6 focus:outline-none focus:border-modo-sage transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-modo-ink/60 ml-4">Cognome</label>
                  <input type="text" className="w-full bg-white border border-modo-ink/5 rounded-full py-4 px-6 focus:outline-none focus:border-modo-sage transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-modo-ink/60 ml-4">Indirizzo Email</label>
                <input type="email" className="w-full bg-white border border-modo-ink/5 rounded-full py-4 px-6 focus:outline-none focus:border-modo-sage transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-modo-ink/60 ml-4">Oggetto</label>
                <select className="w-full bg-white border border-modo-ink/5 rounded-full py-4 px-6 focus:outline-none focus:border-modo-sage transition-colors appearance-none">
                  <option>Informazioni Generali</option>
                  <option>Domande sugli Abbonamenti</option>
                  <option>Sessioni Private</option>
                  <option>Partnership Aziendali</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-modo-ink/60 ml-4">Messaggio</label>
                <textarea rows={4} className="w-full bg-white border border-modo-ink/5 rounded-[32px] py-4 px-6 focus:outline-none focus:border-modo-sage transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-modo-ink text-pearl rounded-full text-xs uppercase tracking-widest font-bold hover:bg-modo-sage transition-all shadow-lg">
                Invia Messaggio
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="h-[500px] rounded-[64px] overflow-hidden relative">
          <iframe
            title="MODO Firenze Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=11.2418%2C43.7645%2C11.2618%2C43.7779&layer=mapnik&marker=43.7712%2C11.2518"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
