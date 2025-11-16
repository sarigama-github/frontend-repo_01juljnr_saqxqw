import { useState } from 'react'
import { Menu, X, GraduationCap, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Search', href: '#search' },
  { label: 'News', href: '#news' },
  { label: 'Campus', href: '#campus' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_60px_-15px_rgba(8,148,179,0.5)]">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-md bg-gradient-to-br from-[#0894B3] via-[#0FA27A] to-[#F4A622] opacity-80" />
                <div className="relative bg-black/80 border border-white/15 rounded-xl p-2">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="font-semibold tracking-wide text-white/90">NovaTech University</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-white/80 hover:text-white transition-colors group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#0894B3] via-[#0FA27A] to-[#F4A622] group-hover:w-full transition-all duration-300 rounded" />
                </a>
              ))}
              <a href="#search" className="inline-flex items-center gap-2 bg-black/60 border border-white/10 hover:border-white/20 text-white/90 px-3 py-2 rounded-xl transition-colors">
                <Search className="w-4 h-4" />
                Smart Search
              </a>
            </nav>

            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/60 border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="p-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-xl text-white/90 hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
