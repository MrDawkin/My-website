export interface EducationEntry {
  degree:            string;
  degreeEn?:         string;
  field:             string;
  fieldEn?:          string;
  school:            string;
  schoolEn?:         string;
  period: {
    start: string;
    end?:  string;
  };
  specialization?:   string;
  specializationEn?: string;
}

export const education: EducationEntry[] = [
  {
    degree:           'Mgr',
    degreeEn:         'MSc',
    field:            'Informatyka stosowana',
    fieldEn:          'Applied Computer Science',
    school:           'Politechnika Wrocławska',
    schoolEn:         'Wrocław University of Science and Technology',
    period: {
      start: 'Luty 2024',
      end:   'Lipiec 2025',
    },
    specialization:   'Zastosowania specjalistycznych technologii informatycznych',
    specializationEn: 'Applications of Specialist IT Technologies',
  },
  {
    degree:           'inż.',
    degreeEn:         'BEng',
    field:            'Elektronika',
    fieldEn:          'Electronics',
    school:           'Politechnika Wrocławska',
    schoolEn:         'Wrocław University of Science and Technology',
    period: {
      start: 'Październik 2020',
      end:   'Styczeń 2024',
    },
    specialization:   'Zastosowania inżynierii komputerowej w technice',
    specializationEn: 'Applications of Computer Engineering in Technology',
  },
  {
    degree:   'Technik informatyk',
    degreeEn: 'IT Technician',
    field:    'Technikum informatyczne',
    fieldEn:  'IT Technical School',
    school:   'Elektroniczne Zakłady Naukowe · Wrocław',
    period: {
      start: 'Wrzesień 2016',
      end:   'Czerwiec 2020',
    },
  },
];
