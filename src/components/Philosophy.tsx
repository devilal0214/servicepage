import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-gray-900 mb-8">
              We operate as a long-term brand partner, not a short-term execution vendor.
            </h2>
             <div className="aspect-video rounded-xl overflow-hidden shadow-lg mt-8 lg:hidden">
                <img 
                  src="https://picsum.photos/seed/meeting/800/600?grayscale" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
          </motion.div>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-600 leading-relaxed font-light"
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
              <p>
                We don't chase trends. We build systems of truth that endure.
              </p>
            </motion.div>

             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block aspect-[16/9] rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src="https://picsum.photos/seed/meeting/1200/800?grayscale" 
                  alt="Strategic discussion" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
