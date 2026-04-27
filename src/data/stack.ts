export type StackLevel = 'daily' | 'proficient' | 'learning';

export interface StackItem {
  name: string;
  level: StackLevel;
}

export interface StackCategory {
  id:      string;
  label:   string;
  labelEn: string;
  items:   StackItem[];
}

export const stack: StackCategory[] = [
  {
    id:      'os',
    label:   'Systemy operacyjne',
    labelEn: 'Operating Systems',
    items: [
      { name: 'Linux',          level: 'daily'      },
      { name: 'Windows Server', level: 'proficient' },
      { name: 'Windows',        level: 'proficient' },
    ],
  },
  {
    id:      'containers',
    label:   'Konteneryzacja',
    labelEn: 'Containers',
    items: [
      { name: 'Docker',         level: 'daily'      },
      { name: 'Docker Compose', level: 'proficient' },
    ],
  },
  {
    id:      'scripting',
    label:   'Skrypty & CI/CD',
    labelEn: 'Scripts & CI/CD',
    items: [
      { name: 'Bash',           level: 'daily'      },
      { name: 'GitHub Actions', level: 'proficient' },
    ],
  },
  {
    id:      'vcs',
    label:   'Kontrola wersji',
    labelEn: 'Version Control',
    items: [
      { name: 'Git', level: 'daily' },
    ],
  },
  {
    id:      'databases',
    label:   'Bazy danych',
    labelEn: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 'proficient' },
      { name: 'MSSQL',      level: 'proficient' },
      { name: 'MySQL',      level: 'proficient' },
    ],
  },
  {
    id:      'security',
    label:   'Bezpieczeństwo',
    labelEn: 'Security',
    items: [
      { name: 'TLS/SSL',   level: 'proficient' },
      { name: 'VPN',       level: 'proficient' },
      { name: 'Firewall',  level: 'proficient' },
      { name: 'AES-256',   level: 'proficient' },
      { name: 'BitLocker', level: 'proficient' },
    ],
  },
  {
    id:      'learning',
    label:   'W trakcie nauki',
    labelEn: 'Learning',
    items: [
      { name: 'AWS',         level: 'learning' },
      { name: 'Python',      level: 'learning' },
      { name: 'Claude Code', level: 'learning' },
    ],
  },
];

export const levelLabels: Record<StackLevel, string> = {
  daily:      'Używam codziennie',
  proficient: 'Znam i stosuję',
  learning:   'W trakcie nauki',
};

export const levelLabelsEn: Record<StackLevel, string> = {
  daily:      'Daily use',
  proficient: 'Proficient',
  learning:   'Learning',
};
