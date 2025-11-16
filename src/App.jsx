import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import SmartSearch from './components/Search'
import NewsEvents from './components/NewsEvents'
import CampusMap from './components/CampusMap'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage:
            'radial-gradient(800px_200px_at_10%_10%, rgba(8,148,179,0.15), transparent), radial-gradient(600px_180px_at_80%_0%, rgba(15,162,122,0.15), transparent), radial-gradient(700px_240px_at_50%_100%, rgba(244,166,34,0.12), transparent)'
        }} />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(255,255,255,0.04)_1px),linear-gradient(90deg,transparent_0,rgba(255,255,255,0.04)_1px)] bg-[size:60px_60px]" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Programs />
      <SmartSearch />
      <NewsEvents />
      <CampusMap />
      <Footer />
    </div>
  )
}

export default App
