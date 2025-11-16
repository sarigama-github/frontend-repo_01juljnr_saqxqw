import { useEffect, useRef } from 'react'

export default function CampusMap() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const DPR = window.devicePixelRatio || 1
    const resize = () => {
      const { width } = canvas.parentElement.getBoundingClientRect()
      const height = Math.min(420, Math.max(260, width * 0.45))
      canvas.width = width * DPR
      canvas.height = height * DPR
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.scale(DPR, DPR)
    }

    const nodes = Array.from({ length: 28 }).map(() => ({
      x: Math.random() * 800,
      y: Math.random() * 360,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 2 + Math.random() * 2,
    }))

    function draw() {
      const { width, height } = canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // background grid lines
      ctx.save()
      ctx.scale(DPR, DPR)
      const W = width / DPR
      const H = height / DPR
      ctx.fillStyle = 'rgba(0,0,0,0.6)'
      ctx.fillRect(0, 0, W, H)

      ctx.strokeStyle = 'rgba(8,148,179,0.12)'
      ctx.lineWidth = 1
      for (let x = 0; x < W; x += 32) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
        ctx.stroke()
      }
      for (let y = 0; y < H; y += 32) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.stroke()
      }

      // nodes + connections
      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })

      nodes.forEach((a) => {
        nodes.forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d > 0 && d < 120) {
            const alpha = 1 - d / 120
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            grad.addColorStop(0, 'rgba(8,148,179,' + (0.35 * alpha) + ')')
            grad.addColorStop(1, 'rgba(244,166,34,' + (0.35 * alpha) + ')')
            ctx.strokeStyle = grad
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
      })

      nodes.forEach((n) => {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 8)
        grad.addColorStop(0, 'rgba(15,162,122,0.9)')
        grad.addColorStop(1, 'rgba(15,162,122,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = '#0FA27A'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.restore()
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="campus" className="relative py-24 sm:py-28 bg-black">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Interactive Campus Map</h2>
          <p className="text-white/60 mt-2">A living, glowing network of our campus hubs and pathways.</p>
        </div>
        <div className="rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_80px_-20px_rgba(8,148,179,0.6)]">
          <canvas ref={canvasRef} className="block w-full" />
        </div>
      </div>
    </section>
  )
}
