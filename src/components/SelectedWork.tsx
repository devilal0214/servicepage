import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    client: 'EcoFuture',
    category: 'Brand Strategy & Identity',
    description: 'Redefining the narrative for a sustainable energy pioneer.',
    image: 'https://picsum.photos/seed/ecofuture/800/600',
  },
  {
    client: 'Nexus Health',
    category: 'Digital Experience',
    description: 'Simplifying patient pathways through human-centric design.',
    image: 'https://picsum.photos/seed/nexus/800/600',
  },
  {
    client: 'Urban Institute',
    category: 'Campaign & Content',
    description: 'A multi-channel campaign to revitalize civic engagement.',
    image: 'https://picsum.photos/seed/urban/800/600',
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">Selected Work</h2>
            <p className="text-3xl font-display text-white">
              Stories of transformation.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-white hover:text-brand-orange hover:border-brand-orange transition-colors border-b border-white pb-1">
            View all case studies <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-800 mb-6">
                <img 
                  src={project.image} 
                  alt={project.client} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">{project.category}</p>
              <h3 className="text-xl font-medium text-white mb-2">{project.client}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
          <a href="#" className="flex items-center text-white hover:text-brand-orange hover:border-brand-orange transition-colors border-b border-white pb-1 w-max">
            View all case studies <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
