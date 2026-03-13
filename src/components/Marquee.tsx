import { motion } from 'motion/react';

const keywords = [
  "Brand Strategy", "Identity Design", "Digital Experience", "Content Strategy", 
  "Art Direction", "Web Development", "Campaigns", "Motion Graphics", "Storytelling"
];

export default function Marquee() {
  return (
    <div className="py-8 bg-brand-orange overflow-hidden border-y border-orange-600">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center"
        >
          {[...keywords, ...keywords, ...keywords, ...keywords].map((word, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-2xl font-display font-medium text-white uppercase tracking-wider opacity-90 hover:opacity-100 transition-opacity cursor-default">
                {word}
              </span>
              <div className="w-2 h-2 rounded-full bg-white/50" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
