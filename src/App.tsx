import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import { VisionPage, PillarPage, FoundationPage, RoadmapPage } from './components/pages'
import { pillars, meta } from './data/visionData'
import type { SectionId } from './data/visionData'

const VALID: SectionId[] = [
  'vision',
  'pillar-1',
  'pillar-2',
  'pillar-3',
  'pillar-4',
  'pillar-5',
  'pillar-6',
  'foundation',
  'roadmap',
]

function sectionFromHash(): SectionId {
  const raw = window.location.hash.replace(/^#\/?/, '') as SectionId
  return VALID.includes(raw) ? raw : 'vision'
}

export default function App() {
  const [active, setActive] = useState<SectionId>(sectionFromHash)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onHash = () => setActive(sectionFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (s: SectionId) => {
    window.location.hash = `/${s}`
    setActive(s)
    setMobileMenuOpen(false)
    const main = document.getElementById('main-scroll')
    if (main) main.scrollTo({ top: 0 })
  }

  const activePillar = pillars.find((p) => p.id === active)

  return (
    <div className="flex h-screen overflow-hidden bg-bg-secondary flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-bg-primary border-b border-border-secondary shadow-sm z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary-gradient flex items-center justify-center text-sm font-bold text-white shadow-button">
            P
          </div>
          <span className="font-bold text-text-primary text-base tracking-tight">{meta.brand}</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 -mr-2 text-gray-text hover:text-text-primary"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-full">
        <Sidebar active={active} onSelect={navigate} />
      </div>

      {/* Mobile Sidebar Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-[264px] max-w-full h-full bg-bg-primary shadow-2xl flex flex-col">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-3 p-2 z-50 text-gray-text hover:text-text-primary"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Sidebar active={active} onSelect={navigate} />
          </div>
        </div>
      )}

      {/* Main content */}
      <main id="main-scroll" className="flex-1 overflow-y-auto content-scroll overflow-x-hidden w-full">
        {active === 'vision' && <VisionPage onNavigate={navigate} />}
        {activePillar && <PillarPage key={activePillar.id} pillar={activePillar} />}
        {active === 'foundation' && <FoundationPage />}
        {active === 'roadmap' && <RoadmapPage onNavigate={navigate} />}
      </main>
    </div>
  )
}
