import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-modo-cream pt-24 pb-12 px-6 border-t border-modo-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-modo-sage" />
              <span className="font-serif text-2xl tracking-widest uppercase">
                Modo <span className="font-light italic text-modo-sage">Firenze</span>
              </span>
            </Link>
            <p className="text-modo-ink/60 text-sm leading-relaxed max-w-xs">
              Un santuario di movimento e consapevolezza nel cuore di Firenze. Scopri l'equilibrio dello Yoga e la precisione del Pilates.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-modo-ink/10 flex items-center justify-center hover:bg-modo-sage hover:text-pearl transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-modo-ink/10 flex items-center justify-center hover:bg-modo-sage hover:text-pearl transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Esplora</h4>
            <ul className="space-y-4">
              {['Studio', 'Yoga', 'Pilates', 'Insegnanti', 'Orari', 'Prezzi'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Studio' ? 'about' : item === 'Insegnanti' ? 'coaches' : item === 'Orari' ? 'schedule' : item === 'Prezzi' ? 'pricing' : item.toLowerCase()}`} className="text-sm text-modo-ink/60 hover:text-modo-sage transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-modo-ink/60">
                <MapPin className="w-4 h-4 mt-0.5 text-modo-sage" />
                <span>Via de' Tornabuoni, 15<br />50123 Firenze FI, Italia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-modo-ink/60">
                <Phone className="w-4 h-4 text-modo-sage" />
                <span>+39 055 123 ****</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-modo-ink/60">
                <Mail className="w-4 h-4 text-modo-sage" />
                <span>ciao@modofirenze.it</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-modo-ink/60 mb-6">Unisciti alla nostra community per consigli sul benessere e aggiornamenti dallo studio.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="La tua email"
                className="w-full bg-white border border-modo-ink/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-modo-sage transition-colors"
              />
              <button className="absolute right-2 top-1.5 bottom-1.5 px-4 bg-modo-ink text-pearl text-xs uppercase tracking-widest rounded-full hover:bg-modo-sage transition-colors">
                Iscriviti
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-modo-ink/5 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-xs text-modo-ink/40 uppercase tracking-widest">
            © 2026 MODO Firenze. Tutti i diritti riservati.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-modo-ink/40 uppercase tracking-widest hover:text-modo-sage">Privacy Policy</a>
            <a href="#" className="text-xs text-modo-ink/40 uppercase tracking-widest hover:text-modo-sage">Termini di Servizio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
