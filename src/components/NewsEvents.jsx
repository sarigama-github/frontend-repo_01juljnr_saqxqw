import { motion } from 'framer-motion'

const items = [
  { title: 'Quantum Computing Symposium', date: 'Dec 14', desc: 'Global leaders discuss the next decade of computation.' },
  { title: 'Synthetic Biology Showcase', date: 'Jan 03', desc: 'Student-led demos in our BioFab Lab.' },
  { title: 'XR Storytelling Festival', date: 'Jan 18', desc: 'Immersive media projects across campus.' },
]

export default function NewsEvents() {
  return (
    <section id="news" className="relative py-24 sm:py-28 bg-gradient-to-b from-black via-[#030B0E] to-black">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">News & Events</h2>
          <p className="text-white/60 mt-2">Stay updated with the latest from our innovation ecosystem.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity bg-[conic-gradient(from_90deg,rgba(8,148,179,0.15),rgba(15,162,122,0.15),rgba(244,166,34,0.15),transparent)]" />
              <div className="relative">
                <div className="text-[#F4A622] text-sm mb-2">{it.date}</div>
                <h3 className="text-white font-semibold mb-1">{it.title}</h3>
                <p className="text-white/70 text-sm">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
