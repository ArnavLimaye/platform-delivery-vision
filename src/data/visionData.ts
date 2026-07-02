// ============================================================
// PLATFORM DELIVERY HEAD — 1 YEAR VISION
// The operating system for the role: Build → Deliver → Operate
// ============================================================

export const meta = {
  brand: 'Platform Delivery',
  tagline: 'Vision OS',
  role: 'Platform Delivery Head',
  horizon: '1-Year Vision',
  chatgptLink: 'https://chatgpt.com/share/6a4621a5-0cc4-83ee-b4a0-9b4ffaa5aa73',
}

export const visionStatement =
  'Build a Platform Delivery organization that consistently transforms ideas into production-ready platform capabilities through predictable execution, exceptional quality, scalable productization, operational excellence, and continuous improvement — so that every new feature, tenant, and release becomes faster, safer, and easier than the last.'

export const visionPrinciple =
  'Separate what we want to achieve (Vision) from how we achieve it (Processes, Checklists, Automation, Metrics). Good outcomes should become the default — not the result of individual heroics.'

// ------------------------------------------------------------
// The 3 layers of responsibility — the mental model
// ------------------------------------------------------------
export type LayerId = 'build' | 'deliver' | 'operate'

export const layers: {
  id: LayerId
  name: string
  order: number
  accent: string
  tagline: string
  question: string
  points: string[]
}[] = [
  {
    id: 'build',
    name: 'Build',
    order: 1,
    accent: '#7C3AED',
    tagline: 'Build software correctly',
    question: 'Are we building the right platform?',
    points: ['Engineering', 'Architecture', 'Reusability', 'Productization'],
  },
  {
    id: 'deliver',
    name: 'Deliver',
    order: 2,
    accent: '#2563EB',
    tagline: 'Deliver software predictably',
    question: 'Are we delivering it predictably?',
    points: ['Planning', 'Coordination', 'Quality', 'Release Management', 'Visibility'],
  },
  {
    id: 'operate',
    name: 'Operate',
    order: 3,
    accent: '#D97706',
    tagline: 'Successfully run software in production',
    question: 'Can customers rely on it every day?',
    points: ['Support', 'Monitoring', 'Reliability', 'Documentation', 'Incident Management'],
  },
]

// ------------------------------------------------------------
// Pillars
// ------------------------------------------------------------
export interface Group {
  title: string
  icon: string
  note?: string
  items?: string[]
  subgroups?: { title: string; items: string[] }[]
}

export interface Pillar {
  id: string
  number: number
  title: string
  short: string
  icon: string
  accent: string
  layer: LayerId | 'all'
  goal: string
  groups: Group[]
  metrics: string[]
}

export const pillars: Pillar[] = [
  {
    id: 'pillar-1',
    number: 1,
    title: 'Predictable Delivery',
    short: 'Predictable Delivery',
    icon: '🎯',
    accent: '#2563EB',
    layer: 'deliver',
    goal: 'Deliver the right work, with the right quality, at the expected time.',
    groups: [
      {
        title: 'Clarity',
        icon: '🔍',
        subgroups: [
          { title: 'Role clarity', items: ['Responsibility', 'Accountability', 'Ownership'] },
          {
            title: 'Feature clarity',
            items: ['Functional requirements', 'Acceptance criteria', 'Edge cases', 'Dependencies'],
          },
          {
            title: 'Standards',
            items: ['Documentation clarity', 'Definition of Ready', 'Definition of Done'],
          },
        ],
      },
      {
        title: 'Planning & Visibility',
        icon: '🗺️',
        items: [
          'Sprint planning',
          'Dependency tracking',
          'Capacity planning',
          'Risk identification',
          'Progress tracking',
          'Zoho Sprints dashboards',
        ],
      },
      {
        title: 'Feedback Loops',
        icon: '🔄',
        items: ['Daily check-ins', 'Weekly reviews', 'Sprint reviews', 'Retrospectives'],
      },
      {
        title: 'Early Intervention',
        icon: '⏱️',
        note: 'Questions to answer:',
        items: [
          'How do I measure predictability?',
          'When should I intervene?',
          'What signals indicate risk?',
          'How early can I detect delays?',
        ],
      },
    ],
    metrics: [
      'Sprint predictability %',
      'Stories completed vs committed',
      'Average delivery delay',
      'Escalations before deadline',
      'Requirement changes after development starts',
    ],
  },
  {
    id: 'pillar-2',
    number: 2,
    title: 'High Quality Delivery',
    short: 'High Quality Delivery',
    icon: '💎',
    accent: '#108E66',
    layer: 'deliver',
    goal: 'Quality should be built into the process — not inspected at the end.',
    groups: [
      {
        title: 'Prevention',
        icon: '🛡️',
        items: [
          'Coding standards',
          'Design reviews',
          'Architecture reviews',
          'Development checklists',
          'PR reviews',
        ],
      },
      {
        title: 'Testing',
        icon: '🧪',
        subgroups: [
          { title: 'Manual', items: ['Manual testing checklist', 'Exploratory testing', 'Edge case testing'] },
          {
            title: 'Automated',
            items: ['Unit tests', 'Integration tests', 'Regression suite', 'Smoke tests', 'End-to-end tests'],
          },
        ],
      },
      {
        title: 'Release Management',
        icon: '🚦',
        subgroups: [
          { title: 'QA', items: ['Manual validation', 'Unit tests mandatory', 'PR merge only after passing tests'] },
          { title: 'UAT', items: ['Automated regression', 'Integration tests', 'Manual validation'] },
          {
            title: 'Production',
            items: ['Smoke tests', 'Regression validation', 'Deployment checklist', 'Rollback strategy'],
          },
        ],
      },
      {
        title: 'Short-term Safety Net',
        icon: '🪤',
        note: 'Until automation matures:',
        items: ['Pre-UAT validation by Arnav', 'Pre-Prod validation by Arnav', 'Additional Zoho workflow stage'],
      },
      {
        title: 'Production Quality',
        icon: '📟',
        items: ['Production logging', 'Monitoring', 'Alerts', 'Crash reporting', 'Error tracking'],
      },
    ],
    metrics: [
      'Escaped bugs',
      'Bug leakage %',
      'Reopened bugs',
      'MTTR',
      'Production incidents',
      'Test coverage',
    ],
  },
  {
    id: 'pillar-3',
    number: 3,
    title: 'Platform Productization (SCM)',
    short: 'Platform Productization',
    icon: '🧩',
    accent: '#9333EA',
    layer: 'build',
    goal: 'Every feature should make the platform stronger — not more customized.',
    groups: [
      {
        title: 'Product Thinking',
        icon: '💡',
        note: 'Whenever a new feature arrives, first ask: can we reuse something?',
        subgroups: [
          { title: 'If yes', items: ['Extend existing capability', 'Improve existing module'] },
          {
            title: 'If no',
            items: ['Can this become reusable?', 'Can this become configurable?', 'Can this become platform capability?'],
          },
        ],
      },
      {
        title: 'Productization Checklist',
        icon: '✅',
        note: 'Before implementation ask:',
        items: [
          'Can another tenant use this?',
          'Can this become configuration?',
          'Can this become metadata?',
          'Can permissions control this?',
          'Can feature flags solve this?',
          'Can workflows configure this?',
          'Is abstraction justified or over-engineering?',
        ],
      },
      {
        title: 'Platform Principles',
        icon: '🏛️',
        items: [
          'Reuse before rewrite',
          'Configuration before customization',
          'Platform before project',
          'Shared components',
          'Shared APIs',
          'Shared workflows',
        ],
      },
      {
        title: 'Desired Outcomes',
        icon: '🌟',
        items: [
          'New tenant onboarding < 1 day',
          'Existing feature reusable across tenants',
          'Plug-and-play enablement',
          'Minimal duplicate code',
        ],
      },
    ],
    metrics: [
      'Tenant onboarding time',
      'Reusable modules %',
      'Shared components %',
      'Duplicate code %',
      'Configurable features %',
    ],
  },
  {
    id: 'pillar-4',
    number: 4,
    title: 'Operational Excellence',
    short: 'Operational Excellence',
    icon: '⚙️',
    accent: '#D97706',
    layer: 'operate',
    goal: 'Operate the platform confidently without heroics.',
    groups: [
      {
        title: 'Infrastructure',
        icon: '🖥️',
        items: ['CI/CD', 'Zero downtime deployments', 'Rollback strategy', 'Environment management'],
      },
      {
        title: 'Observability',
        icon: '📡',
        items: ['Logging', 'Monitoring', 'Alerts', 'Dashboards', 'Health checks'],
      },
      {
        title: 'Incident Management',
        icon: '🚨',
        items: ['Incident process', 'Root cause analysis', 'Recovery playbooks', 'Escalation matrix'],
      },
      {
        title: 'Reliability',
        icon: '🛠️',
        items: ['Performance monitoring', 'Capacity planning', 'Backup strategy', 'Disaster recovery'],
      },
      {
        title: 'Security',
        icon: '🔒',
        items: ['Access management', 'Secrets management', 'Audit logs', 'Security reviews'],
      },
    ],
    metrics: [
      'MTTR',
      'Deployment success %',
      'Failed deployments',
      'Downtime',
      'Mean time between incidents',
    ],
  },
  {
    id: 'pillar-5',
    number: 5,
    title: 'Customer Success & Support',
    short: 'Customer Success & Support',
    icon: '🤝',
    accent: '#E11D48',
    layer: 'operate',
    goal: 'Customers should feel confident that we can support them after go-live.',
    groups: [
      {
        title: 'Go Live Checklist',
        icon: '🚀',
        items: [
          'Logging enabled',
          'Monitoring enabled',
          'Alerts configured',
          'Thresholds defined',
          'Backup verified',
          'Documentation completed',
        ],
      },
      {
        title: 'Support Framework',
        icon: '🎧',
        subgroups: [
          { title: 'Tiers', items: ['L1', 'L2', 'L3'] },
          { title: 'Definitions', items: ['Responsibilities', 'Escalation matrix', 'SLA definitions'] },
        ],
      },
      {
        title: 'Documentation',
        icon: '📚',
        items: ['Videos', 'FAQs', 'Screenshots', 'Runbooks', 'Knowledge Base'],
      },
      {
        title: 'Customer Feedback',
        icon: '💬',
        items: ['Support tickets', 'RCA', 'Improvements', 'Feature requests'],
      },
      {
        title: 'Aspirational',
        icon: '🤖',
        items: ['AI Support Assistant', 'Chatbot', 'Self-service documentation'],
      },
    ],
    metrics: [
      'First response time',
      'Resolution time',
      'Customer satisfaction',
      'Repeat issues',
      'Documentation coverage',
    ],
  },
  {
    id: 'pillar-6',
    number: 6,
    title: 'Continuous Improvement',
    short: 'Continuous Improvement',
    icon: '📈',
    accent: '#0891B2',
    layer: 'all',
    goal: 'Become better every month — not just busier.',
    groups: [
      {
        title: 'Process Improvement',
        icon: '🔧',
        items: ['Retrospectives', 'Quarterly reviews', 'Process audits'],
      },
      {
        title: 'Engineering Excellence',
        icon: '⚡',
        items: ['Technical debt reduction', 'Automation opportunities', 'AI adoption', 'Internal tooling'],
      },
      {
        title: 'Team Growth',
        icon: '🌱',
        items: ['Learning plans', 'Knowledge sharing', 'Templates', 'Playbooks', 'Best practices'],
      },
      {
        title: 'Metrics Review',
        icon: '📊',
        items: ['KPI review', 'Delivery review', 'Quality review', 'Support review'],
      },
    ],
    metrics: [
      'Automation growth',
      'Technical debt reduction',
      'Process improvements implemented',
      'Team productivity',
      'AI adoption',
    ],
  },
]

// ------------------------------------------------------------
// Cross-cutting foundation — underpins every pillar
// ------------------------------------------------------------
export const foundation: {
  id: string
  title: string
  icon: string
  intro: string
  note?: string
  items: string[]
}[] = [
  {
    id: 'decision-frameworks',
    title: 'Decision Frameworks',
    icon: '🧭',
    intro: 'Define principles for the decisions that recur across every pillar.',
    note: 'When to…',
    items: [
      'Generalize vs. hardcode',
      'Configure vs. customize',
      'Build vs. buy',
      'Automate vs. do manually',
      'Intervene',
      'Refactor',
      'Accept technical debt',
      'Stop polishing',
    ],
  },
  {
    id: 'metrics-dashboards',
    title: 'Metrics & Dashboards',
    icon: '📊',
    intro: 'Every pillar should have measurable outcomes, with dashboards that answer:',
    items: [
      'Are we improving?',
      'Where are we slipping?',
      'What requires intervention?',
      'What trends are emerging?',
    ],
  },
  {
    id: 'standardized-processes',
    title: 'Standardized Processes',
    icon: '📋',
    intro: 'For every recurring activity, establish a repeatable system:',
    items: ['Process documents', 'Checklists', 'Templates', 'SOPs', 'Automation where possible'],
  },
]

export const foundationClosing =
  'The objective is that good outcomes become the default, rather than relying on individual heroics.'

// ------------------------------------------------------------
// Roadmap — suggested order for drilling into each pillar
// ------------------------------------------------------------
export const roadmap: { order: number; pillarId: string; title: string; why: string }[] = [
  {
    order: 1,
    pillarId: 'pillar-3',
    title: 'Platform Productization (SCM)',
    why: 'Defines the engineering philosophy and influences everything else.',
  },
  {
    order: 2,
    pillarId: 'pillar-1',
    title: 'Predictable Delivery',
    why: 'Planning, execution, and visibility.',
  },
  {
    order: 3,
    pillarId: 'pillar-2',
    title: 'High Quality Delivery',
    why: 'Quality gates and release confidence.',
  },
  {
    order: 4,
    pillarId: 'pillar-4',
    title: 'Operational Excellence',
    why: 'Infrastructure, observability, and reliability.',
  },
  {
    order: 5,
    pillarId: 'pillar-5',
    title: 'Customer Success & Support',
    why: 'Post-go-live ownership.',
  },
  {
    order: 6,
    pillarId: 'pillar-6',
    title: 'Continuous Improvement',
    why: 'Ensuring the entire system evolves over time.',
  },
]

export const roadmapOutcome =
  'By the time we finish all six, we will have a complete Platform Delivery Playbook that naturally translates into annual objectives, quarterly KPIs, team responsibilities, checklists, and measurable dashboards.'

// ------------------------------------------------------------
// Sidebar navigation
// ------------------------------------------------------------
export type SectionId =
  | 'vision'
  | 'pillar-1'
  | 'pillar-2'
  | 'pillar-3'
  | 'pillar-4'
  | 'pillar-5'
  | 'pillar-6'
  | 'foundation'
  | 'roadmap'

export const navGroups: {
  id: string
  label: string
  children: { id: SectionId; label: string; icon: string }[]
}[] = [
  {
    id: 'overview',
    label: 'Overview',
    children: [{ id: 'vision', label: 'Vision & Mental Model', icon: '🧭' }],
  },
  {
    id: 'pillars',
    label: 'The Six Pillars',
    children: pillars.map((p) => ({ id: p.id as SectionId, label: p.short, icon: p.icon })),
  },
  {
    id: 'foundation',
    label: 'Foundation',
    children: [
      { id: 'foundation', label: 'Cross-Cutting Foundation', icon: '🏗️' },
      { id: 'roadmap', label: 'Drill-Down Roadmap', icon: '🛣️' },
    ],
  },
]
