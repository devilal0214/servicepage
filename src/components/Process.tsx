import { motion } from 'motion/react';

const steps = [
  {
    phase: '01',
    title: 'Immersion & Insight',
    description: 'We begin by listening. We dive deep into your organization, market, and culture to uncover the truths that others miss.',
  },
  {
    phase: '02',
    title: 'Strategy & Definition',
    description: 'We distill complexity into a clear strategic framework. This is the blueprint that ensures every creative decision has a purpose.',
  },
  {
    phase: '03',
    title: 'Creative Translation',
    description: 'We translate strategy into tangible expression—visuals, voice, and experiences that resonate on an emotional level.',
  },
  {
    phase: '04',
    title: 'Systematization & Scale',
    description: 'We build robust systems and guidelines that allow your team to deploy the brand consistently as you grow.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">Methodology</h2>
              <p className="text-3xl font-display text-gray-900 mb-6">
                How we build enduring value.
              </p>
              <p className="text-gray-500 leading-relaxed font-light mb-8">
                Our process is rigorous, collaborative, and transparent. We don't believe in "big reveals" or black boxes. We build with you, not just for you.
              </p>
              <div className="aspect-square rounded-lg overflow-hidden hidden lg:block shadow-md">
                 <img 
                    src="https://picsum.photos/seed/blueprint/600/600?grayscale" 
                    alt="Process sketch" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                 />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative pl-8 border-l border-gray-100 hover:border-gray-900 transition-colors duration-500"
              >
                <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 group-hover:border-brand-orange group-hover:bg-brand-orange transition-colors duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-white transition-colors duration-500" />
                </span>
                <span className="block text-6xl font-display font-bold text-gray-100 mb-6 group-hover:text-brand-orange transition-colors duration-500 select-none">
                  {step.phase}
                </span>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:translate-x-2 transition-transform duration-300">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light group-hover:text-gray-600 transition-colors duration-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
