import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import React from 'react';
import { Plus, Minus, ArrowRight, Palette, PenTool, Monitor, Megaphone, Target, Video, Briefcase } from 'lucide-react';

const serviceCategories = [
  {
    category: "Branding Services",
    icon: Palette,
    description: "Building the strategic and visual foundation for your organization.",
    items: [
      {
        title: "Brand Strategy",
        description: "Clarifying positioning, audience, and messaging so organisations communicate with focus and consistency. Includes brand positioning, messaging frameworks, naming, audience insight, and communication strategy."
      },
      {
        title: "Corporate Branding",
        description: "Comprehensive corporate branding for organisations building a strong and consistent market presence. Includes brand positioning, identity design, brand guidelines, and communication systems."
      },
      {
        title: "Startup Branding",
        description: "Branding support for startups launching new products or companies. Includes brand strategy, naming, logo design, identity systems, pitch deck design, and brand communication assets."
      },
      {
        title: "Brand Identity Design",
        description: "Design of complete visual identity systems that translate brand strategy into consistent design across every touchpoint. Includes colour systems, typography, and brand guidelines."
      },
      {
        title: "Rebranding Services",
        description: "Rebranding services for organisations evolving their market positioning. Includes brand audits, brand refresh, visual identity redesign, messaging updates, and communication systems."
      }
    ],
    faqs: [
      {
        question: "How long does a typical branding project take?",
        answer: "A comprehensive branding project typically takes 6-10 weeks. This allows time for deep research, strategic definition, and iterative design exploration to ensure the outcome is distinct and enduring."
      },
      {
        question: "Do you offer logo design as a standalone service?",
        answer: "We believe a logo needs a system to be effective. While we can design just a logo, we strongly recommend our Brand Identity package which includes typography, color palettes, and usage guidelines to ensure consistency."
      },
      {
        question: "What is the difference between a brand refresh and a rebrand?",
        answer: "A refresh updates your visual look while keeping your core positioning intact. A rebrand involves a fundamental shift in strategy, positioning, and often naming, followed by a new visual identity."
      },
      {
        question: "How do you ensure the brand aligns with our business goals?",
        answer: "Every project begins with a deep-dive discovery phase where we analyze your business objectives, target audience, and competitive landscape to ensure our strategic recommendations directly support your growth."
      },
      {
        question: "Will we receive brand guidelines at the end of the project?",
        answer: "Yes, every comprehensive branding project concludes with the delivery of a detailed brand guidelines document, ensuring your team knows exactly how to apply the new identity consistently."
      }
    ]
  },
  {
    category: "Design Services",
    icon: PenTool,
    description: "Crafting distinct visual assets that communicate complex ideas clearly.",
    items: [
      {
        title: "Logo Design",
        description: "Professional logo design for businesses building a distinctive brand identity. Includes concept development, typography systems, symbol design, and scalable logo formats."
      },
      {
        title: "Packaging Design",
        description: "Strategic packaging design that balances product clarity, shelf visibility, and brand storytelling. Includes packaging systems, label design, and visual guidelines."
      },
      {
        title: "Brochure & Collateral",
        description: "Professional brochure and corporate communication design for presenting complex information clearly. Includes company profiles, annual reports, and marketing materials."
      },
      {
        title: "Presentation Design",
        description: "Professional presentation design for investor decks, sales presentations, and company profiles. Designed to communicate complex ideas clearly and strengthen business storytelling."
      }
    ],
    faqs: [
      {
        question: "Can you work with our existing brand guidelines?",
        answer: "Absolutely. We are experts at interpreting and extending existing visual systems to create new assets that feel perfectly on-brand."
      },
      {
        question: "Do you handle printing for packaging and collateral?",
        answer: "We handle the entire design and production file preparation process. We can recommend trusted print partners and coordinate with them to ensure the final output matches our design intent."
      },
      {
        question: "What file formats will we receive upon completion?",
        answer: "We provide all necessary formats for both print and digital use, including vector files (AI, EPS, SVG) for infinite scalability and raster files (PNG, JPG, PDF) for immediate application."
      },
      {
        question: "How many rounds of revisions are included?",
        answer: "Our standard design process includes up to three rounds of revisions at key milestones. This structured approach ensures we refine the work collaboratively while keeping the project on schedule."
      }
    ]
  },
  {
    category: "Website & Digital",
    icon: Monitor,
    description: "Creating high-performance digital experiences that convert.",
    items: [
      {
        title: "Web Design",
        description: "Creating modern, high-performance websites that communicate clearly. Includes UX strategy, UI design, responsive design systems, and motion experiences."
      },
      {
        title: "Website Development",
        description: "Modern website development using scalable technologies. Includes responsive builds, CMS platforms, API integrations, and animation frameworks for interactive experiences."
      },
      {
        title: "UI / UX Design",
        description: "User experience and interface design for websites and digital products. Includes UX research, wireframes, interface design, design systems, and usability optimisation."
      },
      {
        title: "Website Maintenance",
        description: "Ongoing website maintenance to ensure performance, security, and reliability. Includes updates, technical monitoring, hosting coordination, and continuous optimisation."
      }
    ],
    faqs: [
      {
        question: "Do you build on WordPress or custom code?",
        answer: "We choose the right tool for the job. We specialize in both high-performance custom React/Next.js builds for complex needs and scalable WordPress/Shopify solutions for content-heavy sites."
      },
      {
        question: "Will I be able to update the website myself?",
        answer: "Yes. We build user-friendly content management systems (CMS) and provide training so your team can handle day-to-day content updates easily."
      },
      {
        question: "Do you write the content for the website?",
        answer: "We can. Our Content & Storytelling service can be integrated into the web project to ensure your copy is as compelling as the design."
      },
      {
        question: "Are your websites optimized for mobile devices?",
        answer: "Absolutely. Every website we build follows a mobile-first approach, ensuring a seamless, fast, and intuitive user experience across all devices and screen sizes."
      },
      {
        question: "Do you provide ongoing website maintenance?",
        answer: "Yes, we offer dedicated maintenance packages that cover security updates, performance monitoring, regular backups, and technical support to keep your site running smoothly."
      }
    ]
  },
  {
    category: "Marketing Services",
    icon: Megaphone,
    description: "Integrated strategies to increase visibility and engagement.",
    items: [
      {
        title: "Digital Marketing",
        description: "Integrated digital marketing designed to increase brand visibility and generate qualified leads. Includes SEO, social media marketing, paid advertising, and campaign strategy."
      },
      {
        title: "SEO & Generative Optimization",
        description: "Future-proof search strategies combining traditional SEO with Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and AI Optimization (AIO) to capture visibility in AI-driven search results."
      },
      {
        title: "Social Media Marketing",
        description: "Strategic social media management to build brand awareness. Includes content planning, creative design, platform management, campaign execution, and performance optimisation."
      },
      {
        title: "Content Marketing",
        description: "Content marketing designed to build authority and engagement. Includes brand storytelling, editorial planning, blog content, and long‑form marketing content."
      },
      {
        title: "Lead Generation",
        description: "Strategies designed to attract qualified prospects and convert them into customers. Includes landing pages, digital campaigns, marketing funnels, and conversion optimisation."
      },
      {
        title: "Startup Marketing",
        description: "Marketing support for startups launching new products. Includes brand positioning, website strategy, digital campaigns, and communication assets for early-stage growth."
      }
    ],
    faqs: [
      {
        question: "How soon will we see results from SEO?",
        answer: "SEO is a long-term strategy. Typically, it takes 3-6 months to see significant traction in rankings and organic traffic, though technical fixes can have an immediate impact."
      },
      {
        question: "What is Generative Engine Optimization (GEO)?",
        answer: "GEO is the practice of optimizing content for AI-powered search engines (like Google's AI Overviews or ChatGPT Search). Unlike traditional SEO which targets links, GEO targets the 'answer' by structuring content to be cited as a trusted source by AI models."
      },
      {
        question: "Why is Answer Engine Optimization (AEO) important?",
        answer: "As users shift from searching for links to asking for answers, AEO ensures your brand provides the direct, authoritative answer that voice assistants and AI chatbots deliver to users."
      },
      {
        question: "Do you offer monthly marketing retainers?",
        answer: "Yes. We offer flexible retainer packages that allow us to act as your extended marketing team, handling everything from strategy to execution on an ongoing basis."
      },
      {
        question: "How do you measure the success of a marketing campaign?",
        answer: "We define clear Key Performance Indicators (KPIs) upfront—such as lead volume, conversion rates, and cost-per-acquisition—and provide transparent, regular reporting on these metrics."
      }
    ]
  },
  {
    category: "Advertising",
    icon: Target,
    description: "Performance-driven campaigns that drive measurable results.",
    items: [
      {
        title: "Google Ads & Performance",
        description: "Performance marketing campaigns designed to generate measurable leads. Includes Google Ads strategy, paid search campaigns, display advertising, and performance tracking."
      },
      {
        title: "Meta Ads Management",
        description: "Performance campaigns across Meta platforms (Facebook, Instagram) to drive awareness and leads. Includes campaign strategy, audience targeting, and creative testing."
      },
      {
        title: "Campaign Strategy",
        description: "Strategic advertising campaigns designed to build brand awareness. Includes campaign planning, creative communication strategy, media coordination, and optimisation."
      }
    ],
    faqs: [
      {
        question: "What is the minimum budget for paid advertising?",
        answer: "We recommend a budget that allows for sufficient data gathering and testing. We can advise on a starting point based on your industry's average cost-per-click (CPC)."
      },
      {
        question: "Do you create the ad creatives?",
        answer: "Yes. Our design and copy teams produce high-converting assets (images, videos, copy) tailored to each platform and audience segment."
      },
      {
        question: "How do you determine which platforms to advertise on?",
        answer: "We analyze your target audience demographics, behavior, and campaign objectives to recommend the most effective mix, whether that's intent-driven Google Ads or discovery-focused Meta Ads."
      },
      {
        question: "Do you perform A/B testing on your campaigns?",
        answer: "Continuous A/B testing is core to our methodology. We rigorously test different headlines, visuals, and targeting parameters to optimize performance and maximize your return on ad spend."
      }
    ]
  },
  {
    category: "Video Production",
    icon: Video,
    description: "Visual storytelling that captures brand purpose and narrative.",
    items: [
      {
        title: "Video Production",
        description: "Professional video production for brands communicating through visual storytelling. Includes corporate videos, brand films, explainer videos, and marketing content."
      },
      {
        title: "Corporate Films",
        description: "Corporate films designed to communicate company vision and capabilities. Ideal for brand communication, investor presentations, and corporate storytelling."
      },
      {
        title: "Brand Films",
        description: "Cinematic brand films designed to express brand purpose and narrative. Ideal for campaigns, digital marketing, brand launches, and storytelling-led communication."
      },
      {
        title: "Explainer Videos",
        description: "Videos that simplify complex products, services, or ideas. Ideal for startups and product marketing. Includes script development, visual storytelling, and animation."
      }
    ],
    faqs: [
      {
        question: "Do you handle the entire production process?",
        answer: "Yes. We handle end-to-end production, including concept development, scriptwriting, storyboarding, filming, voiceovers, and post-production editing."
      },
      {
        question: "Can you create animated explainer videos?",
        answer: "Yes. We specialize in 2D motion graphics and animation to simplify complex ideas and make them engaging."
      },
      {
        question: "How long does it take to produce a corporate film?",
        answer: "A standard corporate film usually takes 4-8 weeks from initial concept to final delivery, depending on the complexity of the shoot, locations, and post-production requirements."
      },
      {
        question: "Do you provide actors or voiceover talent?",
        answer: "Yes, we manage the entire casting process. We have a network of professional actors and voiceover artists and will provide you with options that best fit your brand's tone."
      }
    ]
  },
  {
    category: "Industry Focused",
    icon: Briefcase,
    description: "Specialized branding and communication for specific sectors.",
    items: [
      {
        title: "Startup & SaaS",
        description: "Branding and communication systems for technology startups. Includes positioning, product storytelling, website design, and assets for digital‑first growth."
      },
      {
        title: "Hospitality & Restaurant",
        description: "Branding for hotels, restaurants, and cafés. Includes brand identity, menu design, packaging, social media content, and marketing campaigns."
      },
      {
        title: "Healthcare & Wellness",
        description: "Strategic branding for healthcare and wellness brands. Includes brand identity, patient communication systems, websites, and marketing collateral."
      },
      {
        title: "Education & EdTech",
        description: "Branding for educational institutions. Includes institutional branding, website design, promotional films, and communication systems for student outreach."
      },
      {
        title: "D2C & Consumer",
        description: "Branding for direct‑to‑consumer brands. Includes brand identity, packaging design, website design, product storytelling, and performance marketing."
      },
      {
        title: "Corporate Communication",
        description: "Strategy and design for large organisations. Includes corporate branding, internal communication, corporate films, and strategic brand campaigns."
      },
      {
        title: "Non‑Profit & Impact",
        description: "Branding for NGOs and social impact organisations. Includes brand strategy, storytelling, campaign communication, and donor communication materials."
      },
      {
        title: "Manufacturing & Industrial",
        description: "Branding for manufacturing companies. Includes corporate branding, product catalogues, brochures, corporate films, and B2B communication systems."
      }
    ],
    faqs: [
      {
        question: "Do you have experience in my specific niche?",
        answer: "Our fundamental principles of clarity and strategy apply across industries, but we have deep specific experience in the sectors listed here, allowing us to hit the ground running."
      },
      {
        question: "How does your approach differ for B2B versus B2C?",
        answer: "While the core principles of good branding remain the same, our B2B work often focuses more heavily on logic, trust, and long-term value, whereas our B2C work may lean more into emotion, lifestyle, and immediate desire."
      },
      {
        question: "Can you help a legacy company modernize its brand?",
        answer: "Absolutely. We specialize in helping established organizations refresh their positioning and visual identity to appeal to modern audiences without alienating their existing customer base."
      }
    ]
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left group"
      >
        <span className="text-sm font-medium text-gray-900 group-hover:text-brand-orange transition-colors pr-4">{question}</span>
        <span className={`text-gray-400 group-hover:text-brand-orange transition-colors ${isOpen ? 'text-brand-orange' : ''}`}>
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 font-light pb-4 leading-relaxed pr-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-44 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 max-w-3xl">
          <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">Our Expertise</h2>
          <p className="text-4xl sm:text-5xl font-display font-medium text-gray-900 mb-6 leading-tight">
            Comprehensive capabilities for modern brands.
          </p>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            From strategic foundations to digital execution, we provide the complete ecosystem of services needed to build, grow, and sustain a market-leading brand.
          </p>
        </div>

        <div className="space-y-32">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.category} className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-brand-orange border border-gray-100">
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-medium text-gray-900 mb-4">{category.category}</h3>
                <p className="text-gray-500 font-light leading-relaxed pr-8">
                  {category.description}
                </p>
                <div className="h-px w-12 bg-gray-200 mt-8 mb-8"></div>
                <a 
                  href="#contact"
                  className="btn-primary text-sm px-6 py-3 group"
                >
                  Start a project
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="lg:col-span-8">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mb-12">
                  {category.items.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group"
                    >
                      <h4 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {category.faqs && category.faqs.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h4 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">Common Questions</h4>
                    <div>
                      {category.faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
