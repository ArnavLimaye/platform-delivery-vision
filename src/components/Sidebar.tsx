import { useState } from 'react'
import { navGroups, meta, pillars } from '../data/visionData'
import type { SectionId } from '../data/visionData'

const accentFor = (id: string) => pillars.find((p) => p.id === id)?.accent

interface SidebarProps {
  active: SectionId
  onSelect: (s: SectionId) => void
}

export default function Sidebar({ active, onSelect }: SidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    overview: true,
    pillars: true,
    foundation: true,
  })

  const toggle = (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <aside className="w-[264px] min-w-[264px] bg-bg-primary border-r border-border-secondary flex flex-col overflow-hidden shadow-card z-10 h-full">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-border-secondary flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary-gradient flex items-center justify-center text-lg font-bold text-white shadow-button flex-shrink-0">
            P
          </div>
          <div className="leading-tight">
            <h1 className="text-sm font-bold text-text-primary tracking-tight">{meta.brand}</h1>
            <span className="text-xs text-gray-header font-normal">{meta.tagline}</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto sidebar-scroll py-3">
        {navGroups.map((group) => (
          <div key={group.id} className="mb-1">
            <button
              onClick={() => toggle(group.id)}
              className="w-full flex items-center justify-between px-4 py-2 hover:bg-bg-secondary transition-colors duration-150"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.09em] text-gray-header">
                {group.label}
              </span>
              <span
                className={`text-gray-header text-[10px] transition-transform duration-200 ${
                  expanded[group.id] ? 'rotate-90' : ''
                }`}
              >
                ▶
              </span>
            </button>

            {expanded[group.id] && (
              <div className="animate-fadeIn">
                {group.children.map((child) => {
                  const isActive = active === child.id
                  const accent = accentFor(child.id) ?? 'rgb(var(--primary))'
                  return (
                    <button
                      key={child.id}
                      onClick={() => onSelect(child.id)}
                      className={`w-full flex items-center gap-2.5 pl-4 pr-4 py-[9px] text-[13px] transition-all duration-150 border-l-[3px] text-left ${
                        isActive
                          ? 'font-semibold bg-bg-secondary'
                          : 'text-gray-text border-l-transparent hover:bg-bg-secondary hover:text-text-primary'
                      }`}
                      style={
                        isActive
                          ? { color: accent, borderLeftColor: accent }
                          : undefined
                      }
                    >
                      <span className="text-sm w-5 text-center flex-shrink-0">{child.icon}</span>
                      <span className="leading-tight">{child.label}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-border-secondary flex-shrink-0">
        <p className="text-[11px] text-gray-header text-center leading-relaxed">
          {meta.role} · {meta.horizon}
        </p>
      </div>
    </aside>
  )
}
