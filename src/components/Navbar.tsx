import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Studio', path: '/about' },
  { name: 'Yoga', path: '/yoga' },
  { name: 'Pilates', path: '/pilates' },
  { name: 'Insegnanti', path: '/coaches' },
  { name: 'Orari', path: '/schedule' },
  { name: 'Prezzi', path: '/pricing' },
  { name: 'Galleria', path: '/gallery' },
  { name: 'Contatti', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled ? 'bg-pearl/80 backdrop-blur-lg py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-modo-sage/10 flex items-center justify-center group-hover:bg-modo-sage/20 transition-colors">
            <Leaf className="w-5 h-5 text-modo-sage" />
          </div>
          <span className="font-serif text-2xl tracking-widest uppercase text-modo-ink">
            Modo <span className="font-light italic text-modo-sage">Firenze</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-modo-sage',
                location.pathname === link.path ? 'text-modo-sage' : 'text-modo-ink/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-modo-ink text-pearl text-xs uppercase tracking-widest rounded-full hover:bg-modo-sage transition-all duration-300"
          >
            Prenota Ora
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-modo-ink p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-pearl border-t border-modo-ink/5 p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-sm uppercase tracking-widest font-medium',
                    location.pathname === link.path ? 'text-modo-sage' : 'text-modo-ink/70'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="w-full py-4 bg-modo-ink text-pearl text-center text-xs uppercase tracking-widest rounded-xl"
              >
                Prenota una Lezione
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
