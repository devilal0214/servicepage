import { motion } from 'motion/react';

const keywords = [
  "Brand Strategy", "Identity Design", "Digital Experience", "Content Strategy", 
  "Art Direction", "Web Development", "Campaigns", "Motion Graphics", "Storytelling"
];

export default function Marquee() {
  return (
    <div 
      className="py-4 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #00A651, #FFC20E, #ED1C24, #00A651)', backgroundSize: '300% 100%', animation: 'gradient-shift 10s linear infinite' }}
    >
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...keywords, ...keywords, ...keywords, ...keywords].map((word, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-base font-sans font-medium text-white uppercase tracking-widest opacity-90 hover:opacity-100 transition-opacity cursor-default">
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
