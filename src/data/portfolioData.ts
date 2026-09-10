import { ProjectData, SkillGroup, EducationEntry, CertificationEntry } from '../types';

export const PROFILE_INFO = {
  name: 'Abhishek Dubey',
  role: 'Software & Web Developer',
  location: 'Delhi NCR, India',
  email: 'dubeyabhi9794@gmail.com',
  phone: '+91 8707377658',
  college: 'IMS Engineering College (IMSEC), Ghaziabad',
  degree: 'Master of Computer Applications (MCA)',
  undergrad: 'BCA (DAVV Indore, CGPA 6.8 / 10)',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeXI0a9vQ7qwEeRjeYk68O0kOgUI7bm2Fipb2VIxcoy6-kc59LSKLvHubB4efsLGWrWiRuYAVkKQ_gEe4BFCMFShGc5hoLaBrqEjdtJExcD811pXPn8kJ69JyUWRY9JW2w7dlpUmdQyeyJnKgZYxUdFc-zv2gAOTrUpBjtyRzfkwwpNUHBk93s0CJomyxnvpTzl8s3kEQr7SZDARISz8AjI8FxF_1g1KqaHA05cTMbOnaPdsPiBQUrBw',
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'swasthik',
    projectNumber: 'Project 01',
    badge: "Grade 'A' Project",
    subType: 'BCA Capstone',
    title: 'Swasthik Hospital System',
    headline: 'Full Relational Clinical Workflow & Scheduling Engine',
    description:
      'Full-fledged records, patient and doctor scheduling system reducing manual overhead with MySQL database backend and clean modular architecture.',
    categories: ['Web / MySQL', 'Database Systems', 'CRUD Architecture'],
    filterCategories: ['frontend', 'database'],
    tags: ['MySQL', 'Database', 'Relational Schema'],
    deliverables: [
      'Engineered normalized relational schemas in MySQL covering Patient, Doctor, Appointment, and Billing tables with cascade constraints.',
      'Implemented real-time collision detection logic that prevents duplicate doctor slot reservations during peak hours.',
      "Defended in final external university viva before the board, obtaining maximum recognition ('A' Grade).",
    ],
    schemaTitle: 'SQL Schema Model',
    schemaType: 'InnoDB ACID',
    schemaSnippet: `PATIENTS (id INT PK AUTO_INCREMENT, name VARCHAR, blood_group VARCHAR, created_at TIMESTAMP)
DOCTORS (id INT PK, specialization VARCHAR, duty_shift VARCHAR, room_no INT)
APPOINTMENTS (apt_id INT PK, patient_id INT FK, doc_id INT FK, slot_time DATETIME)
BILLING (invoice_no INT PK, apt_id INT FK, service_charge DECIMAL, status ENUM)`,
    borderColor: 'border-l-sky-500',
    accentColor: 'sky',
    promptText: 'Explain the database architecture and validation engine of Swasthik Hospital Management System created by Abhishek.',
    modalDetails: {
      problemStatement:
        'Hospital staff suffered from clinical record loss, duplicated doctor appointment time-slots, and disconnected billing statements caused by paper ledgers. Swasthik was designed as an integrated clinical workflow automation tool with relational data integrity.',
      col1Title: 'Relational Schema Implementation',
      col1Text:
        'Constructed 5 interconnected tables in MySQL with Foreign Key integrity and indexing on timestamps to enable sub-second ledger lookups across 1,000+ mock records.',
      col2Title: 'Conflict Prevention Engine',
      col2Text:
        'Validation routine checking overlapping consultation timestamps for specific Doctor IDs prior to commit, preventing double bookings.',
      extraNote:
        'Recognized by university evaluators for clean schema normalization (3NF) and robust client-side input validation.',
    },
  },
  {
    id: 'nids',
    projectNumber: 'Project 02',
    badge: 'Research & ML',
    subType: 'Python & Flask',
    title: 'Network Intrusion Detection System (NIDS)',
    headline: 'Anomaly & Signature Based Threat Classification Pipeline',
    description:
      'Built under faculty supervision with an IEEE Std 830-1998 compliant 12-page SRS, traceability matrix, and automated threat detection mechanisms.',
    categories: ['Python / Flask', 'Security ML', 'REST Endpoints'],
    filterCategories: ['python'],
    tags: ['Python', 'Flask REST', 'IEEE 830'],
    deliverables: [
      'Authored a 12-page comprehensive synopsis and IEEE Std 830-1998 compliant SRS containing explicit use-case diagrams, requirements traceability matrix, and mitigation playbooks.',
      'Exposed lightweight microservice APIs to receive packet logs asynchronously, calculate threat probabilities, and return structured JSON telemetry for monitoring consoles.',
      'Constructed detection routines identifying anomalous TCP flags, abnormal port scan frequencies, and SYN flood patterns.',
    ],
    pipelineFlow: [
      '[Network Tap] ➜ [Packet Parser (Python)] ➜ [Feature Vector (Flags/Len/Ports)]',
      '➜ [Classifier Engine (Threat Scoring)] ➜ [Flask REST Telemetry] ➜ [Admin Alert]',
    ],
    borderColor: 'border-l-purple-500',
    accentColor: 'purple',
    promptText: 'Explain the IEEE Std 830-1998 documentation and Flask pipeline of Abhishek\'s NIDS project.',
    modalDetails: {
      problemStatement:
        'Co-developed under direct faculty guidance, this system inspects live TCP/UDP packets against known malicious traffic signatures (SYN Floods, Port Sweeps, Brute Force).',
      col1Title: 'IEEE Std 830-1998 Specification',
      col1Text:
        'Authored an authoritative 12-page SRS including requirements traceability matrices, actor use cases, security boundaries, and worst-case scenario fallbacks.',
      col2Title: 'Flask Microservice REST API',
      col2Text:
        'JSON-based /api/v1/inspect-packet endpoint receiving packet payloads, calculating anomaly entropy scores, and triggering webhook alerts.',
      extraNote:
        'Validated with simulated packet traces under faculty review, scoring consistent precision on anomalous port bursts.',
    },
  },
  {
    id: 'banking',
    projectNumber: 'Project 03',
    badge: 'OOP Engine',
    subType: 'Java Core',
    title: 'Banking Core Engine & Transaction Simulator',
    headline: 'Object-Oriented Encapsulation, Polymorphism & Ledger File Streams',
    description:
      'Robust transaction processing system leveraging inheritance, polymorphism, and secure file storage with input error recovery routines.',
    categories: ['Java Core', 'File I/O Persistence', 'Exception Recovery'],
    filterCategories: ['java'],
    tags: ['Java OOP', 'File I/O', 'Exception Recovery'],
    deliverables: [
      'Engineered custom checked and unchecked exception handlers (InsufficientFundsException, CorruptedLedgerException) ensuring fail-safe transaction rollbacks.',
      'Maintained customer credential hashing and session timeout routines inside pure standard Java runtime without heavy external dependencies.',
      'Abstracted Account base contracts into specialized Savings and Current accounts with daily withdrawal constraints.',
    ],
    borderColor: 'border-l-emerald-500',
    accentColor: 'emerald',
    promptText: 'Explain the OOP structure and exception handling in Abhishek\'s Java Banking Core Engine.',
    modalDetails: {
      problemStatement:
        'A terminal banking engine modeling real bank branch mechanics. Demonstrates strict encapsulation of balance properties with polymorphism across specialized accounts.',
      col1Title: 'Class Structure & Abstraction',
      col1Text:
        'Account base abstract class extended into SavingsAccount (with interest compounding) and CurrentAccount (with overdraft threshold constraints).',
      col2Title: 'Fault-Tolerant File I/O',
      col2Text:
        'Atomic transaction recording with backup rollback mechanisms when file reads are interrupted or corrupted.',
      extraNote:
        'Engineered explicit custom exceptions (InsufficientFundsException, InvalidAccountStateException) to halt corrupted balance transactions before disk commits.',
    },
  },
  {
    id: 'netflix',
    projectNumber: 'Project 04',
    badge: 'Frontend Fidelity',
    subType: 'HTML5 / CSS3 / ES6',
    title: 'Responsive Netflix Landing UI',
    headline: 'HTML5 Semantic Canvas · CSS Grid Shelves · JavaScript Accordion',
    description:
      'Pixel-accurate front-end replication of Netflix’s streaming discovery interface. Engineered with pure CSS Grid media shelves, fluid typography clamps, responsive foldout FAQs, and cross-browser responsiveness tested down to 320px screens.',
    categories: ['Frontend', 'Responsive Design', 'Vanilla JS'],
    filterCategories: ['frontend'],
    tags: ['CSS Grid Shelves', 'Accordion JS', 'Mobile-First'],
    deliverables: [
      'Dynamic repeating columns with repeat(auto-fit, minmax(240px, 1fr)) ensuring media cards reflow gracefully without layout jumps.',
      'Accessible, keyboard-navigable FAQ expansion system using vanilla JavaScript DOM manipulators.',
      'Optimized image loading and strict mobile-first breakpoint adaptations.',
    ],
    borderColor: 'border-l-amber-500',
    accentColor: 'amber',
    promptText: 'Explain the CSS Grid layout and responsive techniques used in Abhishek\'s Netflix Clone.',
    modalDetails: {
      problemStatement:
        'Constructed to emulate the visual hierarchy, micro-interactions, and media shelf responsiveness of the production Netflix discovery page.',
      col1Title: 'CSS Grid & Media Queries',
      col1Text:
        'Dynamic repeating columns (repeat(auto-fit, minmax(240px, 1fr))) ensuring media cards reflow gracefully without layout jumps.',
      col2Title: 'Accordion Mechanics',
      col2Text:
        'Accessible, keyboard-navigable FAQ expansion system using vanilla JavaScript DOM manipulators.',
      extraNote:
        'Ensured complete fidelity across viewport sizes from 320px mobile displays up to 4K desktop screens.',
    },
  },
  {
    id: 'sales',
    projectNumber: 'Project 05',
    badge: 'Data Analytics',
    subType: 'Python / Pandas',
    title: 'E-Commerce Sales Data Analytics',
    headline: 'Pandas Wrangling · 10,000+ Transaction Records · Executive Business Intelligence',
    description:
      'Cleaned, normalized, and modeled 10,000+ transactional e-commerce records using Python, Pandas, and exploratory data techniques. Generated 3 executive intelligence reports identifying monthly seasonal peaks and cohort return margins.',
    categories: ['Python Data', 'Pandas EDA', 'Business Intelligence'],
    filterCategories: ['python', 'database'],
    tags: ['Pandas Wrangling', 'EDA Reporting', '10K+ Records'],
    deliverables: [
      'Handled missing SKU tags, coerced datetime records, and removed null price outliers to prepare reliable datasets.',
      'Synthesized top revenue clusters, regional consumer trends, and high-margin product categories into clean visual charts.',
      'Produced business correlation metrics guiding stock replenishment cycles.',
    ],
    borderColor: 'border-l-sky-400',
    accentColor: 'sky',
    promptText: 'Tell me about Abhishek\'s Python Sales Data Analysis project and the insights generated.',
    modalDetails: {
      problemStatement:
        'Processed, normalized, and categorized over 10,000 messy e-commerce retail transactions to answer core business profitability questions.',
      col1Title: 'Data Cleaning with Pandas',
      col1Text:
        'Handled missing SKU tags, coerced datetime records, and removed null price outliers to prepare reliable datasets.',
      col2Title: 'Statistical Insights',
      col2Text:
        'Synthesized top revenue clusters, regional consumer trends, and high-margin product categories into clean visual charts.',
      extraNote:
        'Identified key quarterly revenue drivers that highlighted 23% margin variances across seasonal product cohorts.',
    },
  },
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    title: 'Languages',
    borderColor: 'border-t-sky-500',
    accentColor: 'text-sky-400',
    skills: [
      { name: 'Java (Core & OOP)', level: 'Advanced', levelColor: 'text-emerald-400' },
      { name: 'Python', level: 'Proficient', levelColor: 'text-sky-400' },
      { name: 'C++', level: 'Intermediate', levelColor: 'text-slate-400' },
      { name: 'JavaScript (ES6+)', level: 'Proficient', levelColor: 'text-sky-400' },
    ],
  },
  {
    title: 'Web & UI',
    borderColor: 'border-t-purple-500',
    accentColor: 'text-purple-400',
    skills: [
      { name: 'HTML5 & Semantic Tags', level: 'Advanced', levelColor: 'text-emerald-400' },
      { name: 'CSS3 / Flexbox / Grid', level: 'Advanced', levelColor: 'text-emerald-400' },
      { name: 'React.js', level: 'Foundational', levelColor: 'text-amber-400' },
      { name: 'Responsive Layouts', level: 'Advanced', levelColor: 'text-emerald-400' },
    ],
  },
  {
    title: 'Database & Tools',
    borderColor: 'border-t-emerald-500',
    accentColor: 'text-emerald-400',
    skills: [
      { name: 'MySQL / SQL Relational', level: 'Proficient', levelColor: 'text-emerald-400' },
      { name: 'Git & GitHub', level: 'Proficient', levelColor: 'text-sky-400' },
      { name: 'VS Code Studio', level: 'Daily Driver', levelColor: 'text-slate-400' },
      { name: 'Postman API Testing', level: 'Familiar', levelColor: 'text-amber-400' },
    ],
  },
  {
    title: 'CS Principles',
    borderColor: 'border-t-amber-500',
    accentColor: 'text-amber-400',
    skills: [
      { name: 'Data Structures (DSA)', level: 'Core', levelColor: 'text-sky-400' },
      { name: 'Object-Oriented Design', level: 'Strong', levelColor: 'text-emerald-400' },
      { name: 'Database Systems (DBMS)', level: 'Core', levelColor: 'text-sky-400' },
      { name: 'Operating Systems', level: 'Academic', levelColor: 'text-slate-400' },
    ],
  },
];

export const EDUCATION_DATA: EducationEntry[] = [
  {
    period: '2025 – 2027 (Ongoing)',
    badge: 'Postgraduate',
    badgeColor: 'bg-sky-500/20 text-sky-300',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'IMS Engineering College (IMSEC), Ghaziabad, UP',
    description:
      'Specialized curriculum focusing on Advanced Java, Cloud Computing, Database System Architecture, and Software Engineering.',
  },
  {
    period: 'Graduated · CGPA: 6.8 / 10',
    badge: 'Undergraduate',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Devi Ahilya Vishwavidyalaya, Indore, MP',
    description:
      "Three-year undergraduate program building core proficiencies in C++, Java, relational databases, web programming, and concluding with an 'A' grade capstone.",
  },
  {
    period: 'Senior Secondary (12th)',
    badge: '69% Score',
    badgeColor: 'bg-slate-800 text-emerald-400 font-bold',
    degree: 'Senior Secondary (12th)',
    institution: 'Kisan Inter College, Varanasi',
    description: 'Science and Mathematics stream completed with 69% marks.',
    score: '69% Score',
  },
  {
    period: 'High School (10th)',
    badge: '68% Score',
    badgeColor: 'bg-slate-800 text-emerald-400 font-bold',
    degree: 'High School (10th)',
    institution: 'Kisan Inter College, Varanasi',
    description: 'General secondary education completed with 68% marks.',
    score: '68% Score',
  },
];

export const CERTIFICATIONS_DATA: CertificationEntry[] = [
  {
    issuer: 'Coursera / Meta',
    type: 'Professional Spec',
    title: 'Meta Front-End Development Certificate',
    description:
      'Comprehensive course series spanning HTML5, CSS3, modern JavaScript, responsive interfaces, and accessible layout engineering.',
    badgeColor: 'bg-sky-500/20 text-sky-300',
  },
  {
    issuer: 'IBM SkillsBuild',
    type: 'Multi-track',
    title: 'IBM SkillsBuild Certification',
    description:
      'Accredited modules across AI Fundamentals, Agile Project Management, and Professional Lifelong Communication.',
    badgeColor: 'bg-purple-500/20 text-purple-300',
  },
  {
    issuer: 'CodeWithHarry',
    type: 'Practical Track',
    title: 'Data Analytics Certification',
    description:
      'Hands-on exploratory data analysis, dataset wrangling, statistical charts, and executive reporting.',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
  },
];

export const AI_KNOWLEDGE = [
  {
    keywords: ['hire', 'strengths', 'skills', 'why', 'summary'],
    response:
      "Abhishek stands out as an engineering candidate because he pairs core Computer Science foundations (DSA, Java OOP, Relational Databases in MySQL) with modern web development (ES6+, React, Flask APIs). His academic track record in BCA (Grade 'A' in capstone) and current MCA rigor at IMSEC prove his dedication to building production-ready code.",
  },
  {
    keywords: ['swasthik', 'hospital', 'project', 'capstone', 'grade a'],
    response:
      "Swasthik is Abhishek's BCA final-year capstone project that earned an 'A' grade. It is a full-featured Hospital Management System designed to eliminate manual paper records. He structured MySQL relational schemas for Patients, Appointments, and Billing, engineered consultation scheduling validation, and demonstrated the system during an external viva.",
  },
  {
    keywords: ['education', 'degree', 'college', 'imsec', 'cgpa', 'bca', 'mca'],
    response:
      "Abhishek is currently pursuing his Master of Computer Applications (MCA) from IMS Engineering College, Ghaziabad (2025–2027). Previously, he graduated with a Bachelor of Computer Applications (BCA) from Devi Ahilya Vishwavidyalaya, Indore, with a 6.8/10 CGPA. Prior to that, he completed 10th and 12th grades with 68% and 69% from Kisan Inter College, Varanasi.",
  },
  {
    keywords: ['contact', 'email', 'phone', 'hire', 'reach', 'interview'],
    response:
      'You can reach Abhishek directly via email at dubeyabhi9794@gmail.com, or by phone at +91 8707377658. He is based in Delhi NCR, India, and is actively open to internships and full-time software developer opportunities!',
  },
  {
    keywords: ['nids', 'network', 'intrusion', 'flask', 'python', 'ieee'],
    response:
      'The Network Intrusion Detection System is a security & ML project Abhishek co-developed in Python and Flask under faculty supervision. Remarkably, he authored a formal 12-page IEEE Std 830-1998 compliant SRS document containing use-case specifications, a requirements traceability matrix, and microservice REST APIs for packet risk scoring.',
  },
  {
    keywords: ['banking', 'java', 'core', 'oop', 'ledger'],
    response:
      "The Banking Core Engine is Abhishek's Java OOP implementation focusing on class inheritance, encapsulation of customer accounts, custom exception routines (InsufficientFundsException), and persistent file stream ledger recording.",
  },
  {
    keywords: ['sales', 'analytics', 'pandas', 'ecommerce'],
    response:
      'In his E-Commerce Sales Data Analysis project, Abhishek parsed over 10,000 real-world transactional records using Python and Pandas to extract seasonal patterns, profit margin outliers, and consumer cohorts.',
  },
];
