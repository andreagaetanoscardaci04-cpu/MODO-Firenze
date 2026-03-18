import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-modo-sage/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-modo-terracotta/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 pearl-gradient opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs uppercase tracking-[0.4em] text-modo-sage font-semibold mb-6"
          >
            Santuario del Movimento
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8 text-modo-ink"
          >
            Trova il Tuo <br />
            <span className="italic font-light text-modo-sage">Flow</span> a <br />
            Firenze
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-modo-ink/60 max-w-md leading-relaxed mb-12"
          >
            Uno studio boutique dedicato all'arte dello Yoga e del Pilates. Vivi il benessere raffinato nel cuore di Firenze.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              to="/schedule"
              className="group relative px-8 py-4 bg-modo-ink text-pearl rounded-full overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold">
                Prenota una Lezione <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-modo-sage translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-modo-ink/10 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-modo-ink hover:text-pearl transition-all duration-500"
            >
              La Nostra Storia
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src="/flow 1.jpg"
              alt="Yoga Practice"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-modo-sage/10 mix-blend-overlay" />
          </div>
          
          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 glass rounded-full flex items-center justify-center p-8 z-20"
          >
            <p className="text-[10px] uppercase tracking-widest text-center font-bold text-modo-sage">
              Studio Boutique <br /> <span className="text-modo-ink">Firenze</span>
            </p>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
