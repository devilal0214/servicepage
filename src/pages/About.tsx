import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Zap, Heart, Coffee, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="bg-noise" />
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-24">
        
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold text-gray-900 mb-8 leading-tight">
              Strategy. Storytelling. Execution. <br />
              <span className="text-brand-orange">Jai Veeru Creatives</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-gray-100 pt-8">
              <div className="md:col-span-4">
                <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase">About Us</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-2xl md:text-4xl font-light leading-tight text-gray-900">
                  Clarity Is the Most Underrated Advantage in Branding
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Problem (Clarity) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 sticky top-32 self-start">
              <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">The Challenge</h2>
            </div>
            <div className="md:col-span-8 space-y-12">
              <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-500">
                <p>
                  Most organisations are not short of ideas, effort, or marketing activity.
                  <br/><span className="text-gray-900 font-medium">What they are often missing is clarity.</span>
                </p>
                <p>
                  Teams struggle to explain what the organisation truly stands for. Messaging changes across departments. Campaigns become louder but not sharper. Over time, the brand becomes harder for people to understand.
                </p>
                <p>
                  When clarity disappears, even strong marketing stops working.
                </p>
              </div>
              
              <div className="bg-gray-50 p-12 rounded-2xl border border-gray-100">
                <h3 className="text-3xl md:text-4xl font-display font-medium text-gray-900 mb-6">Jai Veeru Creatives was built to solve that problem.</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light">
                  We are a Brand and Communications Studio that helps organisations translate complex ideas into clear, compelling brand systems. Systems that guide strategy, storytelling, and execution across every touchpoint.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-900">
                    Our work sits at the intersection of strategic thinking, narrative design, and consistent communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="bg-gray-900 text-white py-32 px-4 sm:px-6 lg:px-8 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
              <div className="md:col-span-5">
                <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8">
                  Why <br/>
                  <span className="text-brand-orange">Jai Veeru</span> <br/>
                  Exists
                </h2>
              </div>
              <div className="md:col-span-7 space-y-12 text-lg md:text-xl font-light leading-relaxed text-gray-400">
                <div>
                  <p className="mb-8">
                    After nearly two decades of working with founders, institutions, and growing organisations, one pattern kept repeating.
                  </p>
                  <p className="text-2xl md:text-3xl text-white font-medium mb-8 border-l-4 border-brand-orange pl-8">
                    Most organisations do not have a marketing problem. They have a clarity problem.
                  </p>
                  <p className="mb-8">
                    Their work is meaningful but poorly articulated. Their messaging evolves without structure. Their communication becomes fragmented across teams, channels, and campaigns.
                  </p>
                  <p className="mb-8">
                    When this happens, audiences struggle to understand the value of the organisation. Internally, teams lose alignment on what the brand actually represents.
                  </p>
                  <p>
                    Jai Veeru Creatives exists to bring clarity back into that equation.
                    We help organisations define what they stand for, shape the stories they need to tell, and execute those stories consistently across brand touchpoints.
                  </p>
                </div>
                <div className="pt-12 border-t border-gray-800">
                  <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-4">The Goal</p>
                  <p className="text-3xl font-display font-medium text-white">To build brands people understand, remember, and trust.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Think */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="mb-24 md:mb-32 max-w-4xl">
            <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-6">Philosophy</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight mb-8">
              How We Think About Branding
            </h3>
            <p className="text-xl text-gray-500 font-light max-w-2xl">
              Branding is often treated as design or marketing activity. We approach it as a communication system.
              A strong brand aligns three things clearly:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-12">
            {[
              { title: "Strategic Clarity", desc: "What the organisation stands for, why it exists, and the role it plays in the world." },
              { title: "Narrative Power", desc: "The stories that translate complex ideas into messages people can easily understand." },
              { title: "Consistent Execution", desc: "The systems that ensure every touchpoint communicates the same core idea." }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="h-1 w-12 bg-gray-900 mb-8 group-hover:bg-brand-orange transition-colors duration-300" />
                <h4 className="text-2xl font-display font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <p className="text-2xl font-light text-gray-500">
              When these three layers work together, brands become easier to understand and <span className="text-gray-900 font-medium">significantly harder to ignore.</span>
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-6">Process</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">How We Work</h3>
                <p className="text-lg text-gray-500 font-light">Our approach is built around clarity before creativity.</p>
              </div>
            </div>
            <div className="md:col-span-8 space-y-0">
              {[
                { step: "01", title: "Understand the Organisation", desc: "We begin by understanding the organisation, its ambitions, its audience, and the internal complexity behind the brand." },
                { step: "02", title: "Define the Core Idea", desc: "Every strong brand has a central idea that guides how it communicates. We identify and articulate that idea clearly." },
                { step: "03", title: "Build the Communication System", desc: "Strategy is translated into narratives, visual identities, content systems, and communication frameworks." },
                { step: "04", title: "Execute Across Touchpoints", desc: "Websites, reports, campaigns, brand identities, and experiences are designed to communicate the same story consistently." }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex flex-col md:flex-row gap-8 py-12 border-t border-gray-100 group hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg"
                >
                  <span className="text-sm font-mono text-brand-orange pt-2 font-bold">{item.step}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-light max-w-xl">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do & Numbers */}
        <section className="bg-gray-50 py-32 px-4 sm:px-6 lg:px-8 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
              <div>
                <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-8">Capabilities</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-12">What We Do</h3>
                <p className="text-lg text-gray-500 mb-12 max-w-md font-light">
                  Our work spans the full lifecycle of brand communication. Each engagement is designed to help organisations communicate with greater clarity, credibility, and consistency.
                </p>
                <ul className="space-y-4">
                  {["Brand Strategy", "Brand Identity and Design", "Communication and Campaign Development", "Content and Digital Experiences", "Event Branding and Experience Design"].map((service, i) => (
                    <li key={i} className="text-xl md:text-2xl border-b border-gray-200 py-4 text-gray-900 font-medium">{service}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-12 md:p-16 shadow-sm rounded-2xl border border-gray-100">
                <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-8">Impact</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-12">Our Work in Numbers</h3>
                <p className="text-lg text-gray-500 mb-12 font-light">
                  Clarity becomes powerful when it compounds over time. Our work spans startups, institutions, social impact organisations, and growing companies across sectors.
                </p>
                <div className="grid grid-cols-2 gap-12">
                  {[
                    { num: "180+", label: "Projects Delivered" },
                    { num: "20+", label: "Team Members" },
                    { num: "12+", label: "Industries Served" },
                    { num: "10+", label: "Years of Brand Building" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">{stat.num}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* People Behind Jai Veeru */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="mb-24">
            <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-6">Leadership</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">The People Behind Jai Veeru</h3>
            <p className="text-xl text-gray-500 max-w-2xl font-light">
              Jai Veeru Creatives is built by a team that believes branding begins with understanding people.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden rounded-2xl">
                 {/* Placeholder for Soumyadeep Das image */}
                 <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-white/20 text-9xl font-display font-bold">
                    J
                 </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div>
                <h4 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">Soumyadeep Das <span className="text-gray-400 font-sans text-2xl font-normal">(AKA Jiko)</span></h4>
                <p className="text-sm font-semibold text-brand-orange tracking-widest uppercase mb-8">Co-Founder and Operations Head</p>
                
                <div className="space-y-6 text-lg text-gray-500 leading-relaxed font-light">
                  <p>
                    Soumyadeep Das, known to most people as Jiko, is the "Jai" in Jai Veeru Creatives.
                  </p>
                  <p>
                    With nearly two decades of experience in brand strategy and communication, Jiko has worked closely with founders, leadership teams, and organisations across sectors.
                  </p>
                  <p>
                    His approach to branding is rooted in observation and empathy.
                  </p>
                  <p className="text-xl md:text-2xl font-medium text-gray-900 pl-6 border-l-4 border-brand-orange italic">
                    From conversations with street vendors to boardroom discussions with CEOs, he believes the most valuable brand insights often emerge from understanding how people actually experience businesses in the real world.
                  </p>
                  <p>
                    That perspective shaped the foundation of Jai Veeru Creatives: a studio built on clarity, human understanding, and long‑term brand thinking.
                  </p>
                  <p className="font-medium text-gray-900">
                    Clarity first. Strategy grounded in human understanding. Execution designed to last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Team & Organisations */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-8">The Collective</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">The Team Behind the Work</h3>
              <div className="space-y-6 text-gray-500 leading-relaxed font-light">
                <p>
                  Jai Veeru Creatives is powered by a multidisciplinary team of strategists, designers, storytellers, and problem solvers.
                </p>
                <p>
                  Our team combines strategic thinking with hands-on execution across brand strategy, design, content, digital experiences, and communication systems.
                </p>
                <p>
                  What brings the team together is a shared belief: strong brands are built when people deeply understand both the organisation and the audience it serves.
                </p>
                <p>
                  Today, the studio brings together 20+ professionals working across strategy, design, content, and production. Each project is approached collaboratively, ensuring ideas move from insight to execution without losing clarity along the way.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-8">Partnerships</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">The Organisations We Work Best With</h3>
              <p className="text-gray-500 mb-8 font-light">
                Our best work happens with organisations that care about building meaningful brands.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Purpose-led organisations",
                  "Founders building long-term businesses",
                  "Institutions communicating complex ideas",
                  "Impact-driven companies seeking clarity in communication"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl text-gray-900 font-medium">
                    <span className="w-2 h-2 bg-brand-orange rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 italic">
                These organisations typically value thoughtful strategy, clear storytelling, and long-term brand building over short-term noise.
              </p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-gray-900 text-white py-32 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-12">
              A Brand Is Built <br/><span className="text-brand-orange">Over Time</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
              Strong brands are not built through louder campaigns. They are built through clarity, consistency, and trust.
            </p>
            <p className="text-lg mb-16 text-gray-300">
              If your organisation is working on something meaningful but struggling to communicate it clearly, we would love to explore how we can help.
            </p>
            <a href="#contact" className="inline-block bg-white text-gray-900 hover:bg-brand-orange hover:text-white transition-all duration-300 px-12 py-4 text-sm font-bold uppercase tracking-widest rounded-full">
              Start a Conversation
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
