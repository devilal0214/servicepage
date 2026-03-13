import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const clients = [
  'Visionary Founders',
  'Growing Businesses',
  'Cultural Institutions',
  'Non-Profit Organizations',
];

export default function IdealClients() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1">
             <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://picsum.photos/seed/handshake/800/600?grayscale" 
                  alt="Partnership and collaboration" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
             </div>
           </div>
           
           <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-display font-medium text-gray-900 mb-8">
                Who we work best with
              </h2>
              <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed">
                We are not for everyone. We partner best with organizations seeking clarity before scaling—those who understand that brand is a strategic asset, not just a visual coat of paint.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {clients.map((client, index) => (
                  <motion.div 
                    key={client}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:border-gray-300 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">{client}</span>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
