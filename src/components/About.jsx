import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const cards = [
  {
    title: 'Research-driven',
    desc: 'Interdisciplinary labs leading breakthroughs in AI, biotech, sustainability, and human-computer symbiosis.',
  },
  {
    title: 'Industry Integrated',
    desc: 'Co-create with Fortune 500 partners, startups, and research institutions on real-world impact projects.',
  },
  {
    title: 'Human + AI Learning',
    desc: 'Personalized pathways with 24/7 AI mentors and studio-based, collaborative learning.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0894B3] to-transparent opacity-60" />
        <div className="absolute -top-20 left-10 right-10 h-40 blur-3xl opacity-30 bg-[radial-gradient(600px_200px_at_center,rgba(15,162,122,0.35),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 mb-10">
          <Sparkles className="w-5 h-5 text-[#0FA27A]" />
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">About the University</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#0894B3]/30 via-[#0FA27A]/30 to-[#F4A622]/30 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
