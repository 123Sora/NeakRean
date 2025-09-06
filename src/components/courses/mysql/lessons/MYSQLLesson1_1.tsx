import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី Databases និង MySQL',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Database និងសារៈសំខាន់របស់វា',
    'ស្វែងយល់អំពី Relational Database Management System (RDBMS)',
    'ស្វែងយល់អំពី MySQL និងលក្ខណៈពិសេសរបស់វា',
    'ប្រៀបធៀប MySQL ជាមួយ Databases ផ្សេងទៀត',
    'យល់ដឹងអំពី Client-Server Model ក្នុង Database System',
  ],
  content: `
# ណែនាំអំពី Databases និង MySQL 📚

---

**Database** គឺជាកន្លែងសម្រាប់ផ្ទុក និងគ្រប់គ្រងទិន្នន័យប្រកបដោយប្រសិទ្ធភាព។ MySQL គឺជា Relational Database Management System (RDBMS) ដ៏ពេញនិយមមួយ។

---

## 1. អ្វីទៅជា Database?

Database គឺជាប្រព័ន្ធសម្រាប់រៀបចំ និងផ្ទុកទិន្នន័យជាលក្ខណៈរចនាសម្ព័ន្ធ។ ឧទាហរណ៍ ព័ត៌មានអ្នកប្រើប្រាស់ ផលិតផល ឬការបញ្ជាទិញ។

**ឧទាហរណ៍:**
- បញ្ជីនិស្សិតនៅសាលារៀន
- ព័ត៌មានអតិថិជននៅក្នុងហាងអនឡាញ

---

## 2. RDBMS (Relational Database Management System)

**RDBMS** គឺជាប្រព័ន្ធដែលគ្រប់គ្រង Database ដោយប្រើតារាង (Tables) ដែលមានទំនាក់ទំនងគ្នា។

**គោលគំនិតសំខាន់ៗ:**
- **Tables**: ផ្ទុកទិន្នន័យជាជួរឈរ (Columns) និងជួរដេក (Rows)។
- **Primary Key**: ជា Column ដែលកំណត់អត្តសញ្ញាណ Record នីមួយៗ។
- **Foreign Key**: ភ្ជាប់ Table មួយទៅ Table ផ្សេង។

---

## 3. MySQL ជាអ្វី?

**MySQL** គឺជា RDBMS ដែលបើកចំហ (Open-Source) ប្រើសម្រាប់គ្រប់គ្រងទិន្នន័យ។

**លក្ខណៈពិសេស:**
- លឿន និងអាចទុកចិត្តបាន
- គាំទ្រទិន្នន័យធំ
- ប្រើ SQL (Structured Query Language)

**ពេលណាត្រូវប្រើ MySQL?**
- Web Applications (ឧ. WordPress, Joomla)
- E-commerce Systems
- Data Warehousing

---

## 4. ការប្រៀបធៀប MySQL ជាមួយ Databases ផ្សេង

| Database       | ប្រភេទ        | គុណសម្បត្តិ                     | គុណវិបត្តិ                     |
|----------------|----------------|----------------------------------|----------------------------------|
| MySQL         | RDBMS         | លឿន, Open-Source, ងាយស្រួលប្រើ | មិនស័ក្តិសមសម្រាប់ NoSQL Data |
| PostgreSQL    | RDBMS         | គាំទ្រលក្ខណៈខ្ពស់, Scalable    | ស្មុគស្មាញជាង MySQL           |
| MongoDB       | NoSQL         | ដំណើរការលឿនជាមួយ JSON Data | មិនមាន Schema ច្បាស់លាស់     |
| SQL Server    | RDBMS         | ស័ក្តិសមសម្រាប់ Enterprise     | មានតម្លៃថ្លៃ                  |

---

## 5. Client-Server Model

**Client-Server Model** គឺជាគំរូដែល Client (ឧ. Web Browser) ផ្ញើសំណើទៅ Server (MySQL) ដើម្បីទាញ ឬគ្រប់គ្រងទិន្នន័យ។

**ឧទាហរណ៍:**
- Client ផ្ញើ SQL Query (SELECT * FROM users)
- Server ដំណើរការ Query និង Return លទ្ធផល។
`,
  examples: [
    `### ឧទាហរណ៍៖ តារាងនៅក្នុង RDBMS
**បង្កើតតារាង:** \`users\` ដើម្បីផ្ទុកព័ត៌មានអ្នកប្រើប្រាស់។
\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100)
);
\`\`\`

`,
    `
### ឧទាហរណ៍៖ ទំនាក់ទំនងរវាង Tables
**បង្កើតតារាង** \`orders\` ដែលមាន Foreign Key ភ្ជាប់ទៅ \`users\` ។
\`\`\`sql
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  user_id INT,
  order_date DATE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Database គឺជាអ្វី?',
      options: [
        'កម្មវិធីសម្រាប់បង្កើត Website',
        'ប្រព័ន្ធសម្រាប់ផ្ទុក និងគ្រប់គ្រងទិន្នន័យ',
        'ភាសាសរសេរកម្មវិធី',
        'ប្រព័ន្ធប្រតិបត្តិការ',
      ],
      correct: 1,
      explanation: 'Database គឺជាប្រព័ន្ធសម្រាប់ផ្ទុក និងគ្រប់គ្រងទិន្នន័យប្រកបដោយប្រសិទ្ធភាព។'
    },
    {
      question: 'តើ RDBMS មានន័យដូចម្តេច?',
      options: [
        'Relational Database Management System',
        'Remote Data Management System',
        'Relational Data Mapping System',
        'Real-Time Database Management System',
      ],
      correct: 0,
      explanation: 'RDBMS គឺជា Relational Database Management System ដែលគ្រប់គ្រងទិន្នន័យជាតារាង។'
    },
    {
      question: 'តើ MySQL គឺជាអ្វី?',
      options: [
        'ភាសាសរសេរកម្មវិធី',
        'RDBMS បើកចំហ',
        'NoSQL Database',
        'Web Server',
      ],
      correct: 1,
      explanation: 'MySQL គឺជា RDBMS បើកចំហ (Open-Source)។'
    },
    {
      question: 'តើ Primary Key មានតួនាទីអ្វី?',
      options: [
        'ភ្ជាប់ Tables',
        'កំណត់អត្តសញ្ញាណ Record នីមួយៗ',
        'ផ្ទុកទិន្នន័យ',
        'បង្កើត Query',
      ],
      correct: 1,
      explanation: 'Primary Key កំណត់អត្តសញ្ញាណ Record នីមួយៗក្នុង Table។'
    },
    {
      question: 'តើ Foreign Key ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'ភ្ជាប់ Tables',
        'លុប Records',
        'បង្កើត Database',
      ],
      correct: 1,
      explanation: 'Foreign Key ភ្ជាប់ Table មួយទៅ Table ផ្សេង។'
    },
    {
      question: 'តើ MySQL ស័ក្តិសមសម្រាប់អ្វី?',
      options: [
        'Web Applications',
        'Game Development',
        'Machine Learning',
        'Network Security',
      ],
      correct: 0,
      explanation: 'MySQL ស័ក្តិសមសម្រាប់ Web Applications ដូចជា WordPress ឬ E-commerce។'
    },
    {
      question: 'តើ Client-Server Model មានន័យដូចម្តេច?',
      options: [
        'Client ផ្ញើសំណើទៅ Server',
        'Server ផ្ញើសំណើទៅ Client',
        'Client និង Server មិនទាក់ទងគ្នា',
        'Client គ្រប់គ្រងទិន្នន័យ',
      ],
      correct: 0,
      explanation: 'Client-Server Model គឺ Client ផ្ញើសំណើទៅ Server ដើម្បីទាញ ឬគ្រប់គ្រងទិន្នន័យ។'
    },
    {
      question: 'តើ MySQL គាំទ្រ SQL ដែរឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែមានកម្រិត',
        'មិនបាន ព្រោះជា NoSQL',
      ],
      correct: 0,
      explanation: 'MySQL គាំទ្រ SQL (Structured Query Language)។'
    },
    {
      question: 'តើ MongoDB ខុសពី MySQL ដូចម្តេច?',
      options: [
        'MongoDB ជា RDBMS',
        'MongoDB ជា NoSQL',
        'MongoDB មិនគាំទ្រទិន្នន័យធំ',
        'MongoDB មានតម្លៃថ្លៃ',
      ],
      correct: 1,
      explanation: 'MongoDB ជា NoSQL Database ខណៈ MySQL ជា RDBMS។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិរបស់ MySQL?',
      options: [
        'លឿន និង Open-Source',
        'មានតម្លៃថ្លៃ',
        'មិនគាំទ្រទិន្នន័យធំ',
        'ស័ក្តិសមសម្រាប់ NoSQL',
      ],
      correct: 0,
      explanation: 'MySQL លឿន និង Open-Source។'
    },
    {
      question: 'តើ Table នៅក្នុង RDBMS មានន័យដូចម្តេច?',
      options: [
        'ផ្ទុកទិន្នន័យជា Columns និង Rows',
        'បង្កើត Database',
        'ភ្ជាប់ Servers',
        'លុបទិន្នន័យ',
      ],
      correct: 0,
      explanation: 'Table ផ្ទុកទិន្នន័យជា Columns និង Rows។'
    },
    {
      question: 'តើ MySQL អាចប្រើជាមួយ Web Applications ដែរឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែជាមួយ NoSQL',
        'មិនបាន ព្រោះជា Frontend',
      ],
      correct: 0,
      explanation: 'MySQL អាចប្រើជាមួយ Web Applications។'
    },
    {
      question: 'តើ PostgreSQL មានគុណសម្បត្តិអ្វីខ្លះបើប្រៀបធៀបជាមួយ MySQL?',
      options: [
        'មានតម្លៃថ្លៃ',
        'គាំទ្រលក្ខណៈខ្ពស់ និង Scalable',
        'មិនគាំទ្រ SQL',
        'ជា NoSQL Database',
      ],
      correct: 1,
      explanation: 'PostgreSQL គាំទ្រលក្ខណៈខ្ពស់ និង Scalable។'
    },
    {
      question: 'តើ Client នៅក្នុង Client-Server Model មានតួនាទីអ្វី?',
      options: [
        'ផ្ញើសំណើទៅ Server',
        'ផ្ទុកទិន្នន័យ',
        'គ្រប់គ្រង Database',
        'បង្កើត Table',
      ],
      correct: 0,
      explanation: 'Client ផ្ញើសំណើទៅ Server ដើម្បីទាញ ឬគ្រប់គ្រងទិន្នន័យ។'
    },
    {
      question: 'តើ MySQL គឺជា Open-Source ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែមានកម្រិត',
        'មិនបាន ព្រោះជា NoSQL',
      ],
      correct: 0,
      explanation: 'MySQL គឺជា Open-Source RDBMS។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ Markdown ដើម្បីពន្យល់អំពីគោលគំនិតនៃ Database និង MySQL។

**តម្រូវការ:**

**1. បង្កើតឯកសារ Markdown:**
   - បង្កើត File: \`database_intro.md\`។
   - ពន្យល់អំពីអ្វីជា Database និង RDBMS។
   - ពន្យល់អំពី MySQL និងលក្ខណៈពិសេសរបស់វា។
   - បញ្ចូលឧទាហរណ៍នៃ Table មួយជាមួយ SQL Code។

**2. Test ឯកសារ:**
   - បើកឯកសារនៅក្នុង Markdown Viewer (ឧ. VS Code ឬ GitHub)។
   - ពិនិត្យថាមាតិកាច្បាស់លាស់ និងគ្មានកំហុស។

**ការណែនាំ:** ប្រើ Syntax Highlighting សម្រាប់ SQL Code នៅក្នុង Markdown។
    `,
    solution: `
# database_intro.md
# ណែនាំអំពី Database និង MySQL

## អ្វីទៅជា Database?
Database គឺជាប្រព័ន្ធសម្រាប់ផ្ទុក និងគ្រប់គ្រងទិន្នន័យប្រកបដោយប្រសិទ្ធភាព។ ឧទាហរណ៍ ព័ត៌មានអ្នកប្រើប្រាស់ ឬផលិតផល។

## RDBMS
RDBMS (Relational Database Management System) គឺជាប្រព័ន្ធដែលគ្រប់គ្រងទិន្នន័យជាតារាង។ វាប្រើ Primary Key និង Foreign Key ដើម្បីភ្ជាប់ទំនាក់ទំនង។

## MySQL
MySQL គឺជា RDBMS បើកចំហ លឿន និងអាចទុកចិត្តបាន។ វាគាំទ្រ SQL និងស័ក្តិសមសម្រាប់ Web Applications។

**ឧទាហរណ៍ Table:**
\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100)
);
\`\`\`
`
  }
};

export default MySQLLesson1_1Content;