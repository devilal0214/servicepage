import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-display font-medium text-gray-900 mb-6">
              Let's start a conversation.
            </h2>
            <p className="text-xl text-gray-500 font-light mb-12">
              If you're ready to build a brand with clarity and purpose, we'd love to hear from you.
            </p>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-0 py-3 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent placeholder-gray-400 rounded-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-0 py-3 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent placeholder-gray-400 rounded-none"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="organization" className="block text-sm font-medium text-gray-900">Organization / Company</label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent placeholder-gray-400 rounded-none"
                  placeholder="Acme Inc."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">Tell us about your challenge</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent placeholder-gray-400 rounded-none resize-none"
                  placeholder="We are looking to..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-10 py-4 bg-brand-orange text-white text-base font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300 w-full sm:w-auto shadow-lg shadow-orange-200"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
            
            <div className="mt-16 space-y-2">
              <p className="text-gray-500">Prefer email?</p>
              <a href="mailto:hello@jaiveeru.co.in" className="text-lg font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                hello@jaiveeru.co.in
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block h-full min-h-[600px] rounded-2xl overflow-hidden shadow-xl">
             <img 
               src="https://picsum.photos/seed/office/800/1200?grayscale" 
               alt="Our studio" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
