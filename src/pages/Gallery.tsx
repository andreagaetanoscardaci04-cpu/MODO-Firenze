import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from '@/src/components/SectionHeader';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800', category: 'Practice', size: 'large' },
  { url: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800', category: 'Studio', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800', category: 'Pilates', size: 'medium' },
  { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800', category: 'Studio', size: 'large' },
  { url: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=800', category: 'Practice', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800', category: 'Yoga', size: 'medium' },
  { url: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=800', category: 'Practice', size: 'large' },
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-32 space-y-24">
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Viaggio Visivo"
          title="La Galleria dello Studio"
          description="Esplora l'atmosfera di MODO Firenze. Uno sguardo al nostro spazio, alla nostra pratica e alla nostra community."
        />

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {['Tutti', 'Studio', 'Pratica', 'Yoga', 'Pilates'].map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 rounded-full border border-modo-ink/10 text-xs uppercase tracking-widest font-bold hover:bg-modo-ink hover:text-pearl transition-all"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry-ish Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group rounded-[32px] overflow-hidden break-inside-avoid shadow-lg"
            >
              <img
                src={image.url}
                alt={image.category}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-modo-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-pearl text-[10px] uppercase tracking-[0.4em] font-bold">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Feed Teaser */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-8">
        <div className="w-16 h-16 rounded-full bg-modo-sage/10 flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-modo-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
        <h3 className="text-3xl font-serif">Segui @modofirenze</h3>
        <p className="text-modo-ink/60">Unisciti alla nostra community digitale per ispirazione quotidiana e consigli sul benessere.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['/flow 1.jpg', '/pilates 3.avif', '/yoga 1.jpg', '/pilates 1.jpg', '/flow 2.jpg', '/yoga 2.avif'].map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-modo-cream">
               <img src={src} alt="Instagram" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
