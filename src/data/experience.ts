export interface ExperienceEntry {
  role:           string;
  roleEn?:        string;
  company:        string;
  department?:    string;
  departmentEn?:  string;
  period: {
    start: string;
    end?:  string;
  };
  description:    string[];
  descriptionEn:  string[];
  additional?:    boolean;
}

export const experience: ExperienceEntry[] = [
  {
    role:       'Junior DevOps Engineer',
    company:    'Comarch',
    department: 'AI Enterprise Solutions · BU Technology & Products · Wrocław',
    period: {
      start: 'Wrzesień 2024',
    },
    description: [
      'Wdrażanie środowisk produkcyjnych od podstaw: tworzenie i konfiguracja maszyn wirtualnych, serwerów bazodanowych i aplikacji na Linuxie i Windows Server, instalacja oprogramowania oraz aktualizacje i migracje do nowszych wersji.',
      'Administracja ponad 200 środowiskami klienckimi, deweloperskimi, testowymi i prezentacyjnymi na Linuxie, Windows Server i Docker Compose.',
      'Zarządzanie bazami danych PostgreSQL, MSSQL i MySQL: kontrola dostępów, konfiguracja instancji i pakietów oprogramowania oraz wykonywanie kopii zapasowych skryptami Bash lub ręcznie przed każdą zmianą.',
      'Konfiguracja TLS/SSL i certyfikatów użytkowników, zarządzanie VPN, regułami firewalla i portami sieciowymi oraz szyfrowanie danych (AES-256, BitLocker).',
      'Automatyzacja zadań operacyjnych skryptami Bash i Python, diagnostyka incydentów na podstawie logów systemowych oraz tworzenie dokumentacji technicznej dla zespołu (Barman, Oxid WebShop).',
      'Rozwiązywanie incydentów technicznych w ramach wsparcia 1.–3. linii oraz współpraca z zespołem międzynarodowym (DE) przy eskalacjach i sytuacjach krytycznych.',
    ],
    descriptionEn: [
      'End-to-end deployment of production environments: creating and configuring virtual machines, database servers, and applications on Linux and Windows Server, software installation, upgrades, and migrations.',
      'Administration of 200+ client, development, test, and demo environments on Linux, Windows Server, and Docker Compose.',
      'PostgreSQL, MSSQL, and MySQL database management: access control, instance and package configuration, and performing backups via Bash scripts or manually before each change.',
      'TLS/SSL and user certificate configuration, VPN management, firewall rules and network port management, and data encryption (AES-256, BitLocker).',
      'Automation of operational tasks with Bash and Python scripts, incident diagnosis from system logs, and creating technical documentation for the team (Barman, Oxid WebShop).',
      'Resolving technical incidents within 1st–3rd line support and collaborating with the international team (DE) on escalations and critical situations.',
    ],
  },
  {
    role:         'DevOps Intern',
    company:      'Comarch',
    department:   'Staż · Wrocław',
    departmentEn: 'Internship · Wrocław',
    period: {
      start: 'Lipiec 2024',
      end:   'Wrzesień 2024',
    },
    description: [
      'Integracja Keycloak z platformą: konfiguracja SSO, zarządzanie użytkownikami, grupami i tokenami dostępowymi, automatyczne mapowanie ról i wykrywanie języka interfejsu na podstawie atrybutów konta.',
      'Integracja Azure Active Directory (IAM) z platformą: zarządzanie tożsamościami i uprawnieniami, konfiguracja przepływów logowania i komunikacja między infrastrukturą a aplikacją.',
      'Samodzielne przygotowanie środowiska testowego do walidacji obu integracji przed wdrożeniem produkcyjnym, konfiguracja środowisk deweloperskich i testowych oraz wsparcie techniczne użytkowników.',
    ],
    descriptionEn: [
      'Keycloak platform integration: SSO configuration, user, group, and access token management, automatic role mapping and interface language detection based on account attributes.',
      'Azure Active Directory (IAM) integration: identity and permission management, login flow configuration, and communication between infrastructure and application.',
      'Independent preparation of the test environment to validate both integrations before production deployment, configuration of development and test environments, and user technical support.',
    ],
  },
  {
    role:         'Pracownik → Instruktor → Menedżer',
    roleEn:       'Crew Member → Trainer → Manager',
    company:      "McDonald's",
    department:   'Praca podczas studiów · Wrocław',
    departmentEn: 'Part-time during studies · Wrocław',
    period: {
      start: 'Wrzesień 2020',
      end:   'Lipiec 2024',
    },
    additional: true,
    description: [
      'Awans wewnętrzny od pracownika restauracji przez instruktora do menedżera zmiany w ciągu 4 lat pracy podczas studiów.',
      'Szkolenie i wdrażanie nowych pracowników, samodzielne prowadzenie zmian, organizacja pracy zespołu i dbałość o standardy operacyjne.',
    ],
    descriptionEn: [
      'Internal promotion from crew member through trainer to shift manager over 4 years of part-time work during studies.',
      'Training and onboarding new employees, independently running shifts, team coordination, and maintaining operational standards.',
    ],
  },
  {
    role:         'Junior Front-end Developer',
    company:      'BonaSoft',
    department:   'Praktyki studenckie · Wrocław',
    departmentEn: 'Student Internship · Wrocław',
    additional:   true,
    period: {
      start: 'Lipiec 2022',
      end:   'Październik 2022',
    },
    description: [
      'Frontend development z użyciem JavaScript: tworzenie komponentów interfejsu użytkownika i nauka standardów pracy w środowisku komercyjnym.',
      'Uczestnictwo w codziennym procesie wytwarzania oprogramowania webowego w środowisku stacjonarnym.',
    ],
    descriptionEn: [
      'Frontend development with JavaScript: building UI components and learning professional standards in a commercial environment.',
      'Participation in the day-to-day web software development process in an on-site environment.',
    ],
  },
  {
    role:         'Junior Front-end Developer',
    company:      'Webcraft',
    department:   'Staż · Malta',
    departmentEn: 'Internship · Malta',
    additional:   true,
    period: {
      start: 'Marzec 2019',
      end:   'Kwiecień 2019',
    },
    description: [
      'Nauka i zastosowanie frameworka Bootstrap: budowanie responsywnych layoutów i komponentów interfejsu użytkownika.',
      'Staż frontendowy realizowany stacjonarnie na Malcie w anglojęzycznym środowisku deweloperskim.',
    ],
    descriptionEn: [
      'Learning and applying the Bootstrap framework: building responsive layouts and UI components.',
      'Frontend internship carried out on-site in Malta in an English-speaking development environment.',
    ],
  },
];
