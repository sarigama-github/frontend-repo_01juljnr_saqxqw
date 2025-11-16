import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32" id="hero">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#021018] to-black" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(8,148,179,0.35),transparent_60%)]" />
        <div className="pointer-events-none absolute top-1/2 -right-40 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(15,162,122,0.35),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-1 text-xs text-white/80 shadow-[0_0_30px_-10px_rgba(244,166,34,0.6)]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#F4A622] animate-pulse" />
                Next-Gen Learning Platform
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
                Future-forward education for a world that never stops evolving
              </h1>

              <p className="text-white/70 max-w-xl">
                Explore cutting-edge programs, AI-enhanced learning, and an innovation culture designed to launch your ideas into orbit.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#programs" className="group relative inline-flex items-center gap-3 px-5 py-3 rounded-xl text-black font-semibold bg-gradient-to-r from-[#F4A622] to-[#FBD37A] shadow-[0_10px_40px_-10px_rgba(244,166,34,0.7)]">
                  Explore Programs
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white hover:bg-white/10 transition-colors">
                  Learn More
                </a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-white/70">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-white">98%</p>
                  <p className="text-xs">Graduate Employment</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-white">150+</p>
                  <p className="text-xs">Labs & Studios</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-white">24/7</p>
                  <p className="text-xs">AI Mentorship</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-[0_0_80px_-20px_rgba(8,148,179,0.6)]">
            <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
