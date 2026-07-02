import {
  visionStatement,
  visionPrinciple,
  layers,
  pillars,
  foundation,
  foundationClosing,
  roadmap,
  roadmapOutcome,
  meta,
} from '../data/visionData'
import type { Pillar, Group, SectionId } from '../data/visionData'
import { Card, CardTitle, CardSubtitle, SectionLabel, BulletRow } from './ui'

const layerName: Record<string, string> = {
  build: 'Build',
  deliver: 'Deliver',
  operate: 'Operate',
  all: 'Cross-Layer',
}

/* ═══════════════════════════ VISION / OVERVIEW ═══════════════════════════ */
export function VisionPage({ onNavigate }: { onNavigate: (s: SectionId) => void }) {
  return (
    <PageShell>
      {/* Hero */}
      <div className="rounded-2xl bg-dark-gradient text-white p-7 md:p-10 mb-6 shadow-card relative overflow-hidden">
        <div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #30AB84 0%, transparent 70%)' }}
        />
        <div className="relative">
          <SectionLabelDark>{meta.role} · {meta.horizon}</SectionLabelDark>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-5 mt-3">
            The operating system for <span className="text-primary-light">Platform Delivery</span>
          </h1>
          <p className="text-[15px] md:text-lg leading-relaxed text-white/80 max-w-3xl border-l-2 border-primary-light pl-4 md:pl-5">
            {visionStatement}
          </p>
          <p className="text-[13px] md:text-sm text-white/50 mt-5 max-w-2xl">{visionPrinciple}</p>
        </div>
      </div>

      {/* Build → Deliver → Operate */}
      <Card>
        <CardTitle icon="🏗️">The 3 Layers of Responsibility</CardTitle>
        <CardSubtitle>
          Build → Deliver → Operate — the mental model of the role, from writing software correctly to running
          it reliably in production.
        </CardSubtitle>
        <div className="flex flex-col gap-3">
          {[...layers]
            .sort((a, b) => a.order - b.order)
            .map((layer) => (
              <div
                key={layer.id}
                className="rounded-xl border border-border-secondary p-4 md:p-5 transition-all duration-200 hover:shadow-card-hover"
                style={{ borderLeft: `4px solid ${layer.accent}`, background: `${layer.accent}08` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                  <div className="md:w-44 flex-shrink-0">
                    <div
                      className="text-lg font-bold tracking-tight"
                      style={{ color: layer.accent }}
                    >
                      {layer.name}
                    </div>
                    <div className="text-xs text-gray-text mt-0.5">{layer.tagline}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {layer.points.map((p) => (
                        <span
                          key={p}
                          className="text-[12px] font-medium text-text-secondary bg-bg-primary border border-border-secondary rounded-md px-2.5 py-1"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    <p className="text-[13px] italic text-gray-text">“{layer.question}”</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Card>

      {/* Pillars at a glance */}
      <Card>
        <CardTitle icon="🧱">The Six Pillars</CardTitle>
        <CardSubtitle>
          Each pillar is a standalone chapter of the playbook — a goal, its working systems, and the metrics that
          prove it. Click any pillar to drill in.
        </CardSubtitle>
        <div className="grid sm:grid-cols-2 gap-3">
          {pillars.map((p) => (
            <button
              key={p.id}
              onClick={() => onNavigate(p.id as SectionId)}
              className="group text-left rounded-xl border border-border-secondary bg-bg-secondary p-4 transition-all duration-200 hover:shadow-card-hover hover:bg-bg-primary"
              style={{ borderTop: `3px solid ${p.accent}` }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: `${p.accent}18` }}
                >
                  {p.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded"
                      style={{ background: `${p.accent}18`, color: p.accent }}
                    >
                      Pillar {p.number}
                    </span>
                    <span className="text-[10px] text-gray-header uppercase tracking-wide">
                      {layerName[p.layer]}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mt-1 leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-text mt-1 leading-relaxed">{p.goal}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <ChatGptFooter />
    </PageShell>
  )
}

/* ═══════════════════════════ PILLAR PAGE ═══════════════════════════ */
export function PillarPage({ pillar }: { pillar: Pillar }) {
  return (
    <PageShell accent={pillar.accent}>
      <PageHeader
        icon={pillar.icon}
        accent={pillar.accent}
        eyebrow={`Pillar ${pillar.number} · ${layerName[pillar.layer]}`}
        title={pillar.title}
      />

      {/* Goal */}
      <div
        className="rounded-2xl p-5 md:p-6 mb-6 border"
        style={{ background: `${pillar.accent}0D`, borderColor: `${pillar.accent}33` }}
      >
        <SectionLabel accent={pillar.accent}>Goal</SectionLabel>
        <p className="text-base md:text-lg font-medium text-text-primary leading-relaxed">{pillar.goal}</p>
      </div>

      {/* Groups */}
      {pillar.groups.map((group) => (
        <GroupCard key={group.title} group={group} accent={pillar.accent} />
      ))}

      {/* Success metrics */}
      <Card style={{ borderTop: `3px solid ${pillar.accent}` }}>
        <CardTitle icon="📊">Success Metrics</CardTitle>
        <CardSubtitle>How we will know this pillar is working. Examples to refine into targets.</CardSubtitle>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {pillar.metrics.map((m) => (
            <div
              key={m}
              className="flex items-center gap-2.5 rounded-lg bg-bg-secondary border border-border-secondary px-3.5 py-2.5"
            >
              <span
                className="w-1.5 h-6 rounded-full flex-shrink-0"
                style={{ background: pillar.accent }}
              />
              <span className="text-sm text-text-secondary font-medium">{m}</span>
            </div>
          ))}
        </div>
      </Card>
    </PageShell>
  )
}

function GroupCard({ group, accent }: { group: Group; accent: string }) {
  return (
    <Card>
      <CardTitle icon={group.icon}>{group.title}</CardTitle>
      {group.note && <CardSubtitle>{group.note}</CardSubtitle>}

      {group.items && (
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-1">
          {group.items.map((item) => (
            <BulletRow key={item} accent={accent}>
              {item}
            </BulletRow>
          ))}
        </ul>
      )}

      {group.subgroups && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-1">
          {group.subgroups.map((sg) => (
            <div key={sg.title} className="rounded-xl bg-bg-secondary border border-border-secondary p-4">
              <div
                className="text-xs font-bold uppercase tracking-wide mb-2.5"
                style={{ color: accent }}
              >
                {sg.title}
              </div>
              <ul className="flex flex-col gap-2">
                {sg.items.map((item) => (
                  <BulletRow key={item} accent={accent}>
                    {item}
                  </BulletRow>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}

/* ═══════════════════════════ FOUNDATION ═══════════════════════════ */
export function FoundationPage() {
  const accent = '#0F766E'
  return (
    <PageShell accent={accent}>
      <PageHeader
        icon="🏗️"
        accent={accent}
        eyebrow="Cross-Cutting Foundation"
        title="The Foundation Under Every Pillar"
      />
      <p className="text-sm md:text-base text-gray-text leading-relaxed mb-6 max-w-3xl">
        These are not separate pillars — they underpin every aspect of Platform Delivery. Applied consistently,
        they turn six independent pillars into one coherent operating system.
      </p>

      {foundation.map((f) => (
        <Card key={f.id}>
          <CardTitle icon={f.icon}>{f.title}</CardTitle>
          <CardSubtitle>{f.intro}</CardSubtitle>
          {f.note && (
            <div className="text-xs font-bold uppercase tracking-wide mb-2.5" style={{ color: accent }}>
              {f.note}
            </div>
          )}
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {f.items.map((item) => (
              <BulletRow key={item} accent={accent}>
                {item}
              </BulletRow>
            ))}
          </ul>
        </Card>
      ))}

      <div
        className="rounded-2xl p-5 md:p-6 text-center border"
        style={{ background: `${accent}0D`, borderColor: `${accent}33` }}
      >
        <p className="text-base md:text-lg font-medium text-text-primary leading-relaxed">{foundationClosing}</p>
      </div>
    </PageShell>
  )
}

/* ═══════════════════════════ ROADMAP ═══════════════════════════ */
export function RoadmapPage({ onNavigate }: { onNavigate: (s: SectionId) => void }) {
  const accent = 'rgb(var(--primary))'
  return (
    <PageShell>
      <PageHeader
        icon="🛣️"
        accent="#108E66"
        eyebrow="Sequencing"
        title="Drill-Down Roadmap"
      />
      <p className="text-sm md:text-base text-gray-text leading-relaxed mb-6 max-w-3xl">
        The six pillars are stable enough that each can become a standalone document. This is the suggested order
        for drilling in — starting with the engineering philosophy that shapes everything downstream.
      </p>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border-secondary hidden sm:block" />
        <div className="flex flex-col gap-3">
          {roadmap.map((step) => {
            const pillar = pillars.find((p) => p.id === step.pillarId)
            const stepAccent = pillar?.accent ?? accent
            return (
              <button
                key={step.order}
                onClick={() => onNavigate(step.pillarId as SectionId)}
                className="group relative flex items-start gap-4 text-left rounded-xl border border-border-secondary bg-bg-primary p-4 shadow-card transition-all duration-200 hover:shadow-card-hover"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 z-10"
                  style={{ background: stepAccent }}
                >
                  {step.order}
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{pillar?.icon}</span>
                    <h4 className="text-sm md:text-base font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-[13px] text-gray-text mt-1 leading-relaxed">{step.why}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="rounded-2xl bg-dark-gradient text-white p-6 md:p-7 mt-6 shadow-card">
        <SectionLabelDark>The Outcome</SectionLabelDark>
        <p className="text-[15px] md:text-lg leading-relaxed text-white/85 mt-3">{roadmapOutcome}</p>
      </div>

      <ChatGptFooter />
    </PageShell>
  )
}

/* ═══════════════════════════ SHARED BITS ═══════════════════════════ */
function PageShell({
  children,
  accent,
}: {
  children: React.ReactNode
  accent?: string
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8 animate-fadeIn" style={accent ? { ['--accent' as string]: accent } : undefined}>
      {children}
    </div>
  )
}

function PageHeader({
  icon,
  accent,
  eyebrow,
  title,
}: {
  icon: string
  accent: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div
        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0"
        style={{ background: `${accent}18` }}
      >
        {icon}
      </div>
      <div className="pt-0.5">
        <div className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: accent }}>
          {eyebrow}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight leading-tight mt-1">
          {title}
        </h2>
      </div>
    </div>
  )
}

function SectionLabelDark({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary-light bg-white/10 px-2.5 py-1 rounded-full">
      {children}
    </div>
  )
}

function ChatGptFooter() {
  return (
    <p className="text-xs text-gray-header text-center mt-6">
      Source discussion:{' '}
      <a
        href={meta.chatgptLink}
        target="_blank"
        rel="noreferrer"
        className="text-primary hover:underline font-medium"
      >
        ChatGPT session ↗
      </a>
    </p>
  )
}
