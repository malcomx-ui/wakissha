export interface Milestone {
  year: string;
  title: string;
  era: string;
  description: string;
  achievement: string;
}

export interface ZoneSchool {
  name: string;
  zone: string;
  type: 'Government Aided' | 'Private';
  category: 'Mixed Boarding' | 'Girls Boarding' | 'Boys Boarding' | 'Day & Boarding';
  established: string;
  headteacher?: string;
  motto: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  institution: string;
  role: string;
  message: string;
  timestamp: string;
  zone: string;
}

export const JUBILEE_METRICS = [
  { label: 'Years of Academic Excellence', value: '25', sub: '2001 — 2026 Silver Jubilee' },
  { label: 'Affiliated Secondary Schools', value: '380+', sub: 'Across 6 Wakiso Zones' },
  { label: 'Secondary Scholars Impacted', value: '500,000+', sub: 'Across a quarter-century' },
  { label: 'Headteachers & Educators Mentored', value: '1,200+', sub: 'Leadership & pedagogy summits' },
];

export const MAIN_CELEBRATION = {
  title: 'WAKISSHA 25th Silver Jubilee Grand Celebrations',
  date: 'Today · Friday, 16th October 2026',
  time: '08:30 AM — 04:30 PM EAT',
  venue: 'Wakiso District Headquarters Celebrations Grounds, Wakiso',
  theme: 'Celebrating 25 Years of Academic Excellence & Secondary School Leadership (2001 — 2026)',
  guestOfHonor: 'The Rt. Hon. Prime Minister of the Republic of Uganda',
  chairperson: 'Mrs. Nassozi Immaculate Lwanga (Headteacher, Trinity College Nabbingo)',
  executiveSecretary: 'Hajji Ndugwa Badru Musoke',
  description: 'The sole official celebration of the Wakiso Secondary School Headteachers Association (WAKISSHA) marking exactly 25 years of educational stewardship, academic excellence, and secondary leadership.',
  program: [
    { time: '08:30 AM — 09:30 AM', activity: 'Arrival & Registration of Headteachers and School Delegations', details: 'Accreditation at the Secretariat, viewing of 25-Year Zonal milestones exhibitions.' },
    { time: '09:30 AM — 10:15 AM', activity: 'National & Buganda Anthems and Ecumenical Opening Prayers', details: 'Led by school choirs and district religious leaders honoring 25 years of grace and leadership.' },
    { time: '10:15 AM — 11:30 AM', activity: 'Welcome Remarks by WAKISSHA Chairperson Mrs. Nassozi Immaculate Lwanga', details: 'Official 25-Year Retrospective Address by the Chairperson (Headteacher, Trinity College Nabbingo).' },
    { time: '11:30 AM — 12:45 PM', activity: 'Arrival of Chief Guest & Inspection of Zonal Innovation Displays', details: 'Reception of the Chief Guest, The Rt. Hon. Prime Minister of the Republic of Uganda.' },
    { time: '12:45 PM — 01:45 PM', activity: 'Keynote Address by the Chief Guest: The Rt. Hon. Prime Minister', details: 'Official government recognition of WAKISSHA’s contribution to national education standards.' },
    { time: '01:45 PM — 02:45 PM', activity: 'Conferment of 25th Silver Jubilee Awards & Pioneer Recognitions', details: 'Honoring past chairpersons, long-serving headteachers, and foundational schools.' },
    { time: '02:45 PM — 04:30 PM', activity: 'Cutting of the 25th Silver Jubilee Anniversary Cake & Luncheon', details: 'Celebratory banquet, networking, and cultural performances by member schools.' }
  ]
};

export const MILESTONES: Milestone[] = [
  {
    year: '2001',
    era: 'Founding Charter',
    title: 'Inception of WAKISSHA',
    description: 'Pioneering secondary school headteachers in Wakiso District convened to establish an association dedicated to academic quality assurance, administrative solidarity, and collective governance.',
    achievement: 'Charter signed by 34 founding secondary school headteachers.'
  },
  {
    year: '2007',
    era: 'Standardization',
    title: 'District Academic Quality & Benchmarking Framework',
    description: 'Introduced unified regional academic standards and curriculum benchmarking protocols that harmonized secondary teaching and evaluation across all secondary institutions in Wakiso.',
    achievement: 'Over 85 secondary schools adopted the centralized benchmarking protocols.'
  },
  {
    year: '2014',
    era: 'Holistic Growth',
    title: 'Zonal Decentralization & Co-Curricular League',
    description: 'Wakiso expanded into six structured educational zones (Kyadondo, Busiro, Kira, Kasangati, Nansana, Entebbe) accompanied by the annual Sports and MDD Championships.',
    achievement: 'All 6 zones established dedicated academic audit and teacher welfare committees.'
  },
  {
    year: '2020',
    era: 'Crisis Leadership',
    title: 'Digital Continuity & Teacher Welfare Cushion',
    description: 'During nationwide school closures, WAKISSHA spearheaded digital revision modules, home-study distribution, and emergency teacher relief funds across member schools.',
    achievement: 'Distributed 150,000+ learning modules and supported over 800 teachers.'
  },
  {
    year: '2024',
    era: 'Curriculum Vanguard',
    title: 'NCDC Curriculum Capacity Building & Joint Assessment',
    description: 'WAKISSHA coordinated comprehensive capacity-building seminars across all Wakiso secondary schools for the National Curriculum Development Centre (NCDC) Lower Secondary Curriculum, training subject teachers in competency-based continuous assessment, DIT vocational integration, and project evaluation.',
    achievement: 'Standardized regional continuous assessment and NCDC curriculum joint mock examinations across member schools.'
  },
  {
    year: '2026',
    era: 'Silver Jubilee',
    title: '25 Years of Academic Distinction',
    description: 'Celebrating a quarter-century of scholastic excellence, transformative school leadership, and educational benchmarks that shape secondary education across Uganda.',
    achievement: 'The Grand Silver Jubilee Celebration Assembly with the Rt. Hon. Prime Minister.'
  }
];

export const ZONES = [
  { id: 'all', name: 'All Zones', count: 380 },
  { id: 'kyadondo', name: 'Kyadondo Zone', count: 72 },
  { id: 'busiro', name: 'Busiro Zone', count: 68 },
  { id: 'kira', name: 'Kira Zone', count: 64 },
  { id: 'kasangati', name: 'Kasangati Zone', count: 58 },
  { id: 'nansana', name: 'Nansana Zone', count: 62 },
  { id: 'entebbe', name: 'Entebbe Zone', count: 56 },
];

export const MEMBER_SCHOOLS: ZoneSchool[] = [
  {
    name: 'Trinity College Nabbingo',
    zone: 'kyadondo',
    type: 'Government Aided',
    category: 'Girls Boarding',
    established: '1942',
    headteacher: 'Mrs. Nassozi Immaculate Lwanga (WAKISSHA Chairperson)',
    motto: 'Be Faithful'
  },
  {
    name: "King's College Budo",
    zone: 'kyadondo',
    type: 'Government Aided',
    category: 'Mixed Boarding',
    established: '1906',
    motto: 'Gaba Shenzi (Strive to Excel)'
  },
  {
    name: "St. Mary's College Kisubi (SMACK)",
    zone: 'busiro',
    type: 'Government Aided',
    category: 'Boys Boarding',
    established: '1906',
    motto: 'Semper Sublimis'
  },
  {
    name: 'Gayaza High School',
    zone: 'kasangati',
    type: 'Government Aided',
    category: 'Girls Boarding',
    established: '1905',
    motto: 'Never Give Up'
  },
  {
    name: 'Uganda Martyrs Secondary School Namugongo',
    zone: 'kira',
    type: 'Government Aided',
    category: 'Mixed Boarding',
    established: '1967',
    motto: 'Per Laborem Ad Honorem'
  },
  {
    name: 'Entebbe Secondary School',
    zone: 'entebbe',
    type: 'Government Aided',
    category: 'Day & Boarding',
    established: '1965',
    motto: 'Knowledge is Power'
  },
  {
    name: 'Our Lady of Good Counsel Gayaza',
    zone: 'kasangati',
    type: 'Government Aided',
    category: 'Girls Boarding',
    established: '1957',
    motto: 'Sub Tuum Praesidium'
  },
  {
    name: "St. Mary's Secondary School Kitende",
    zone: 'busiro',
    type: 'Private',
    category: 'Mixed Boarding',
    established: '2001',
    motto: 'Hard Work Yields Success'
  },
  {
    name: 'Naalya Secondary School (Bweyogerere / Namugongo)',
    zone: 'kira',
    type: 'Private',
    category: 'Mixed Boarding',
    established: '1996',
    motto: 'Education for Development'
  },
  {
    name: 'Kisubi Mapeera Secondary School',
    zone: 'busiro',
    type: 'Government Aided',
    category: 'Mixed Boarding',
    established: '1993',
    motto: 'Fides et Scientia'
  },
  {
    name: 'Kira Secondary School',
    zone: 'kira',
    type: 'Government Aided',
    category: 'Day & Boarding',
    established: '2004',
    motto: 'Discipline and Excellence'
  },
  {
    name: 'Merryland High School Entebbe',
    zone: 'entebbe',
    type: 'Private',
    category: 'Mixed Boarding',
    established: '2001',
    motto: 'Education is Wealth'
  },
  {
    name: 'Buddo Secondary School',
    zone: 'kyadondo',
    type: 'Private',
    category: 'Mixed Boarding',
    established: '1991',
    motto: 'Struggle for the Future'
  },
  {
    name: "St. Joseph's Senior Secondary School Nansana",
    zone: 'nansana',
    type: 'Private',
    category: 'Day & Boarding',
    established: '1998',
    motto: 'Virtue and Diligence'
  },
  {
    name: 'Wakiso Muslim Secondary School',
    zone: 'busiro',
    type: 'Government Aided',
    category: 'Day & Boarding',
    established: '1986',
    motto: 'Knowledge and Virtue'
  },
  {
    name: 'Boston High School Entebbe',
    zone: 'entebbe',
    type: 'Private',
    category: 'Mixed Boarding',
    established: '2000',
    motto: 'Aiming at Greater Horizons'
  },
  {
    name: 'Air Force Senior Secondary School Entebbe',
    zone: 'entebbe',
    type: 'Government Aided',
    category: 'Day & Boarding',
    established: '1989',
    motto: 'Soar High for Knowledge'
  },
  {
    name: 'Kakiri Secondary School',
    zone: 'busiro',
    type: 'Government Aided',
    category: 'Day & Boarding',
    established: '1984',
    motto: 'Education for Service'
  },
  {
    name: "St. Joseph's Secondary School Naggalabi",
    zone: 'kyadondo',
    type: 'Government Aided',
    category: 'Day & Boarding',
    established: '1982',
    motto: 'Labor Omnia Vincit'
  },
  {
    name: "St. Peter's Senior Secondary School Naalya",
    zone: 'kira',
    type: 'Private',
    category: 'Mixed Boarding',
    established: '1995',
    motto: 'Faith and Diligence'
  },
  {
    name: 'Nansana Secondary School',
    zone: 'nansana',
    type: 'Government Aided',
    category: 'Day & Boarding',
    established: '1983',
    motto: 'Knowledge is the Light'
  }
];

export const CURRENT_CHAIRPERSON = {
  name: 'Mrs. Nassozi Immaculate Lwanga',
  role: 'Current Executive Chairperson, WAKISSHA',
  schoolTitle: 'Headteacher, Trinity College Nabbingo',
  message: 'On this auspicious occasion of our Silver Jubilee, we celebrate 25 years of unwavering unity, scholastic resilience, and institutional integrity across Wakiso District. From our founding roots in 2001 to over 380 secondary institutions today, WAKISSHA stands as a testament to what educational leaders can achieve when we stand together for our students, our teachers, and our nation Uganda.',
  quote: 'Unity among secondary school headteachers is the bedrock upon which pedagogical excellence, moral integrity, and national transformation are built.',
  yearsOfService: '2022 — Present'
};

export const CHAIRPERSON = CURRENT_CHAIRPERSON;

export const EXECUTIVE_SECRETARY = {
  name: 'Hajji Ndugwa Badru Musoke',
  role: 'Executive Secretary, WAKISSHA',
  institution: 'WAKISSHA Secretariat, Wakiso',
  bio: 'Chief Executive Officer of the WAKISSHA Secretariat. Leads operational administration, zonal coordination, headteachers welfare schemes, and official association communications across all 6 educational zones.'
};

export const TREASURER = {
  name: 'Mr. Lwembawo Hussein',
  role: 'Treasurer, WAKISSHA Executive Committee',
  institution: 'WAKISSHA Executive Committee, Wakiso',
  bio: 'Oversees financial governance, budgeting, zonal contributions, joint mock assessment funding, resource mobilization, and fiscal stewardship of the Association.'
};

export const PAST_CHAIRPERSONS = [
  {
    id: 'mande',
    name: 'Canon Ruth Mande Muyinda',
    role: 'Immediate Past Chairperson, WAKISSHA',
    formerSchool: 'Former Headteacher, Entebbe Senior Secondary School',
    tenure: 'Immediate Past Chairperson (2019 — 2022)',
    succeededBy: 'Mrs. Nassozi Immaculate Lwanga',
    precededBy: 'Owek. Cotilda Nakate Kikomeko',
    message: 'Watching WAKISSHA reach its 25th Silver Jubilee milestone brings profound joy to my heart. When we led this great association, our continuous mission was strengthening the brotherhood and sisterhood of headteachers, advancing academic rigor, and mentoring the youth with unyielding values. Congratulations to Chairperson Mrs. Nassozi Immaculate Lwanga and the entire fraternity as we celebrate 25 years of academic excellence!',
    quote: 'Leadership in secondary education is about lifting others, building lasting structures, and maintaining excellence in character and scholarship.'
  },
  {
    id: 'kikomeko',
    name: 'Owek. Cotilda Nakate Kikomeko',
    role: 'Former Chairperson, WAKISSHA',
    formerSchool: 'Former Headteacher, Trinity College Nabbingo',
    tenure: 'Former Chairperson',
    bio: 'Visionary educationist, Buganda Kingdom Minister, and former Headteacher of Trinity College Nabbingo. Spearheaded the institutional formalization of WAKISSHA, girl-child education advocacy, and structured zonal administration across Wakiso District.',
    quote: 'A headteacher’s calling is to sow seeds of knowledge and integrity that blossom for generations.'
  },
  {
    id: 'senyonjo',
    name: 'Mr. Moses Senyonjo',
    role: 'Former Chairperson, WAKISSHA',
    formerSchool: 'Founding Headteacher, Naalya SS Namugongo & Director, St. Mary’s College Lugazi',
    tenure: 'Former Chairperson',
    bio: 'Pioneering secondary school administrator who championed association cohesion, academic benchmarking standards, and institutional resilience across public and private secondary schools in Wakiso.',
    quote: 'WAKISSHA was founded on the belief that collective wisdom and mutual support among school heads elevates the entire nation.'
  },
  {
    id: 'laboke',
    name: 'Mrs. Regina Laboke',
    role: 'Former Chairperson, WAKISSHA',
    formerSchool: 'Former Headmistress & Senior Educationist',
    tenure: 'Former Chairperson',
    bio: 'Respected pioneer educationist and former WAKISSHA Chairperson who championed discipline, holistic academic empowerment, and pedagogical solidarity among secondary school heads in Wakiso District.',
    quote: 'True educational stewardship requires compassion, unbending standards of discipline, and continuous investment in both teachers and learners.'
  }
];

export const TESTIMONIALS = [
  {
    quote: "WAKISSHA remains the most unified and forward-thinking headteachers association in our country. Over the past 25 years, the association has instilled unrivaled standards in secondary administration and teacher professional development.",
    author: "Dr. Kedrace Turyagyenda",
    role: "Permanent Secretary",
    organization: "Ministry of Education and Sports (MoES), Uganda"
  },
  {
    quote: "When we founded WAKISSHA in 2001, our vision was simple: no secondary school in Wakiso should struggle in isolation. Today, seeing over 380 secondary schools stand united under Mrs. Lwanga’s leadership fills my heart with immense gratitude.",
    author: "Mwalimu James Lule",
    role: "Pioneer Chairperson (2001 — 2008)",
    organization: "Founding Member, WAKISSHA"
  },
  {
    quote: "The academic excellence and leadership culture nurtured by WAKISSHA secondary schools shaped my high school foundation and set me on the path to global research excellence.",
    author: "Brenda Namaganda",
    role: "Wakiso Scholar & Medical Researcher",
    organization: "Alumna, Class of 2018"
  }
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: 'gb-1',
    name: 'Prof. Mary J. Okwakol',
    institution: 'Uganda National Examinations Board (UNEB)',
    role: 'Honorary Educational Advisor',
    message: 'Warmest congratulations to Chairperson Mrs. Nassozi Immaculate Lwanga and all past chairpersons including Canon Ruth Mande on achieving 25 remarkable years of academic excellence.',
    timestamp: 'Today · 09:15 AM',
    zone: 'Kyadondo'
  },
  {
    id: 'gb-2',
    name: 'Rev. Fr. Henry Ssenyondo',
    institution: 'Uganda Martyrs Secondary School Namugongo',
    role: 'Headteacher & Zonal Convener',
    message: 'Kira Zone celebrates 25 years of joint academic benchmarking and pedagogical fraternity under WAKISSHA. May our collective commitment continue to inspire generations.',
    timestamp: 'Today · 09:40 AM',
    zone: 'Kira'
  },
  {
    id: 'gb-3',
    name: 'Mrs. Robinah Kizito Katongole',
    institution: 'Gayaza High School',
    role: 'Headteacher',
    message: 'From Kasangati Zone, Gayaza High School salutes the Silver Jubilee assembly. We honor our past chairpersons and our current chairperson for upholding the banner of academic and moral leadership.',
    timestamp: 'Today · 10:10 AM',
    zone: 'Kasangati'
  }
];
