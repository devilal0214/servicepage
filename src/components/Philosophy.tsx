import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading and Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-gray-900 leading-tight">
              We operate as a long-term brand partner, not a short-term execution vendor.
            </h2>
            
            <div className="relative w-4/5 sm:w-2/3 lg:w-full max-w-sm rounded-2xl overflow-hidden">
              <div className="aspect-[4/5]">
                <img 
                  src="https://picsum.photos/seed/partnership/600/750?grayscale" 
                  alt="Strategic partnership and collaboration" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 space-y-8 text-lg sm:text-xl text-gray-600 leading-relaxed font-light lg:pt-4"
          >
            <p>
              In a noisy world, the most dangerous risk a brand can take is ambiguity. 
              We believe that before a single pixel is pushed or a headline written, 
              there must be absolute clarity on what you stand for and why it matters.
            </p>
            <p>
              Our philosophy is simple: deep understanding precedes effective communication. 
              We strip away the superfluous to reveal the essential core of your organization, 
              then build a narrative system that allows you to scale without losing your soul.
            </p>
            <div className="pt-6">
              <p className="font-medium text-gray-900 text-xl sm:text-2xl border-l-4 border-brand-orange pl-6 py-2">
                We don't chase trends. We build systems of truth that endure.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
