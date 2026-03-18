import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Coach } from '@/src/constants';

const CoachCard: React.FC<{ coach: Coach; index: number }> = ({ coach, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/coaches#${coach.id}`} className="block">
        <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-6">
          <img
            src={coach.image}
            alt={coach.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ objectPosition: coach.imagePosition, transform: [coach.imageScale && `scale(${coach.imageScale})`, coach.imageTranslateY && `translateY(${coach.imageTranslateY})`].filter(Boolean).join(' ') || undefined }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-modo-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-pearl/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-pearl" />
            </div>
          </div>
          <div className="absolute top-6 left-6">
            <span className="px-4 py-1.5 glass rounded-full text-[10px] uppercase tracking-widest font-bold text-modo-ink">
              {coach.role}
            </span>
          </div>
        </div>
        <h3 className="text-3xl font-serif mb-2 group-hover:text-modo-sage transition-colors">{coach.name}</h3>
        <p className="text-modo-ink/50 text-xs uppercase tracking-widest font-medium">{coach.specialties.join(' • ')}</p>
      </Link>
    </motion.div>
  );
};

export default CoachCard;
