import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0894B3] to-transparent opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white text-xl font-semibold">NovaTech University</h3>
            <p className="text-white/60 mt-2 text-sm">Where imagination meets engineering to design the future.</p>
          </div>
          <div className="flex items-center md:justify-end gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} NovaTech University. All rights reserved.</p>
      </div>
    </footer>
  )
}
