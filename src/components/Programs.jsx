import { motion } from 'framer-motion'
import { Cpu, FlaskConical, Globe2, PenTool } from 'lucide-react'

const programs = [
  { icon: Cpu, title: 'Artificial Intelligence', color: 'from-[#0894B3] to-[#0FA27A]' },
  { icon: FlaskConical, title: 'Bioengineering', color: 'from-[#0FA27A] to-[#F4A622]' },
  { icon: Globe2, title: 'Global Systems', color: 'from-[#0894B3] to-[#F4A622]' },
  { icon: PenTool, title: 'Design Futures', color: 'from-[#0FA27A] to-[#0894B3]' },
]

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-28 bg-gradient-to-b from-black via-[#030B0E] to-black">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Programs & Majors</h2>
          <p className="text-white/60 mt-2 max-w-2xl">Modular, interdisciplinary blocks designed for a world where technology and humanity co-evolve.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(({ icon: Icon, title, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl overflow-hidden group"
            >
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
              <div className="relative flex items-center gap-3">
                <div className="p-2 rounded-xl bg-black/60 border border-white/10 text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <div className="mt-4 h-24 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-white/50 text-sm">
                Modular pathway • Studio + Lab • Capstone
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
