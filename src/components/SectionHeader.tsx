import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({ title, subtitle, description, align = 'center', className }: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-16 space-y-4',
      align === 'center' ? 'text-center mx-auto' : 'text-left',
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-[10px] uppercase tracking-[0.4em] text-modo-sage font-bold"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-6xl font-serif text-modo-ink"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-modo-ink/60 text-lg leading-relaxed",
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
