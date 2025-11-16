import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Sparkles } from 'lucide-react'

export default function SmartSearch() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResults([])
    // Mock delay to simulate AI thinking
    await new Promise((r) => setTimeout(r, 800))
    setResults([
      { title: 'AI & Robotics Program', type: 'Program', link: '#programs' },
      { title: 'Admissions 2025 Timeline', type: 'Info', link: '#news' },
      { title: 'Campus Innovation Lab', type: 'Campus', link: '#campus' },
    ])
    setLoading(false)
  }

  return (
    <section id="search" className="relative py-20 bg-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0FA27A] to-transparent opacity-60" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-semibold text-white">Smart Search</h2>
          <p className="text-white/60 mt-2">Ask anything. Get contextual answers powered by AI.</p>
        </div>

        <form onSubmit={handleSearch} className="relative">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_-15px_rgba(8,148,179,0.6)]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0894B3]/20 via-transparent to-[#F4A622]/20 pointer-events-none" />
            <div className="flex items-center gap-3 px-4 py-3">
              <Search className="w-5 h-5 text-white/70" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs, events, admissions..."
                className="w-full bg-transparent outline-none text-white placeholder-white/40"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-white hover:bg-black/80 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Ask AI
              </button>
            </div>
          </div>
        </form>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: results.length ? 1 : 0, y: results.length ? 0 : 8 }}
          className="mt-6 grid gap-3"
        >
          {loading && (
            <div className="text-center text-white/60">Thinking...</div>
          )}
          {!loading && results.map((r) => (
            <a key={r.title} href={r.link} className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{r.title}</p>
                  <p className="text-xs text-white/60">{r.type}</p>
                </div>
                <span className="text-white/60 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
