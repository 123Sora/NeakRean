import type { LessonContent } from '../../../../types/LessonTypes';

const MISLesson2_2Content: LessonContent = {
  title: 'ការរចនាមូលដ្ឋានទិន្នន័យទំនាក់ទំនង',
  objectives: [
    'យល់ដឹងពីគោលការណ៍នៃគំរូទិន្នន័យទំនាក់ទំនង (Relational Model)',
    'ស្គាល់ពីគំនិតនៃ Entity, Attribute, និង Relationship',
    'រៀនពីប្រភេទ Relationship ផ្សេងៗគ្នា (One-to-One, One-to-Many, Many-to-Many)',
    'យល់ពីសារៈសំខាន់នៃ Primary Key និង Foreign Key',
    'អនុវត្តការរចនា ERD (Entity-Relationship Diagram) សាមញ្ញ'
  ],
  content: `
# ការរចនាមូលដ្ឋានទិន្នន័យទំនាក់ទំនង 🧩🔗

---

ការរចនាមូលដ្ឋានទិន្នន័យទំនាក់ទំនង (Relational Database Design) គឺជាដំណើរការនៃការបង្កើតរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យដោយប្រើប្រាស់គំរូទំនាក់ទំនង។ គំរូនេះរៀបចំទិន្នន័យក្នុងតារាង (Tables) ដែលមានជួរឈរ (Columns) និងជួរដេក (Rows) និងប្រើប្រាស់ទំនាក់ទំនងដើម្បីភ្ជាប់តារាងទាំងនោះ។ ការរចនាដ៏ល្អជួយធានាបាននូវភាពត្រឹមត្រូវ, ភាពស៊ីគ្នា, និងភាពងាយស្រួលក្នុងការគ្រប់គ្រងទិន្នន័យ។

---

## 1. គោលគំនិតសំខាន់ៗក្នុងការរចនា

- **Entity (អង្គភាព):** គឺជាវត្ថុ ឬគំនិតដែលយើងចង់រក្សាទុកព័ត៌មាន។ ឧទាហរណ៍: \`Student\` (សិស្ស), \`Course\` (មុខវិជ្ជា), \`Product\` (ផលិតផល)។
- **Attribute (លក្ខណៈសម្បត្តិ):** គឺជាព័ត៌មានលម្អិតអំពី Entity មួយ។ ឧទាហរណ៍: សម្រាប់ Entity \`Student\` លក្ខណៈសម្បត្តិអាចជា \`StudentID\`, \`StudentName\`, \`DateOfBirth\`។ ជួរឈរនៅក្នុងតារាងតំណាងឱ្យ Attribute។
- **Relationship (ទំនាក់ទំនង):** គឺជាការតភ្ជាប់រវាង Entity ពីរ ឬច្រើន។ ឧទាហរណ៍: \`Student\` \`enrolls in\` (ចុះឈ្មោះក្នុង) \`Course\`។

---

## 2. ប្រភេទនៃទំនាក់ទំនង (Relationship Types)

ការយល់ដឹងពីប្រភេទទំនាក់ទំនងគឺមានសារៈសំខាន់ណាស់ក្នុងការរចនាមូលដ្ឋានទិន្នន័យ។

- **One-to-One (1:1):** មួយទល់នឹងមួយ។ ជួរដេកមួយនៅក្នុងតារាងទីមួយត្រូវបានភ្ជាប់ទៅជួរដេកមួយនៅក្នុងតារាងទីពីរ។
  - **ឧទាហរណ៍:** \`Employee\` (បុគ្គលិក) អាចមាន \`Parking Pass\` (ប័ណ្ណចតឡាន) តែមួយគត់។
- **One-to-Many (1:M):** មួយទល់នឹងច្រើន។ ជួរដេកមួយនៅក្នុងតារាងទីមួយអាចត្រូវបានភ្ជាប់ទៅជួរដេកជាច្រើននៅក្នុងតារាងទីពីរ។
  - **ឧទាហរណ៍:** \`Customer\` (អតិថិជន) មួយនាក់អាចមាន \`Orders\` (ការបញ្ជាទិញ) ជាច្រើន។ នេះជាប្រភេទទំនាក់ទំនងដែលត្រូវបានប្រើប្រាស់ច្រើនជាងគេ។
- **Many-to-Many (M:M):** ច្រើនទល់នឹងច្រើន។ ជួរដេកជាច្រើននៅក្នុងតារាងទីមួយអាចត្រូវបានភ្ជាប់ទៅជួរដេកជាច្រើននៅក្នុងតារាងទីពីរ។
  - **ឧទាហរណ៍:** \`Student\` (សិស្ស) ម្នាក់អាចចុះឈ្មោះចូលរៀន \`Course\` (មុខវិជ្ជា) ជាច្រើន ហើយ \`Course\` មួយអាចមាន \`Student\` ជាច្រើននាក់។ ដើម្បីដោះស្រាយទំនាក់ទំនងនេះ យើងត្រូវបង្កើតតារាងមធ្យម (Junction Table)។

---

## 3. Primary Key និង Foreign Key

- **Primary Key (គន្លឹះចម្បង):** គឺជា Attribute ឬក្រុម Attribute ដែលកំណត់អត្តសញ្ញាណជួរដេកនីមួយៗក្នុងតារាងមួយដោយមិនដដែលគ្នា។ ឧទាហរណ៍: \`StudentID\` សម្រាប់តារាង \`Student\`។
- **Foreign Key (គន្លឹះបរទេស):** គឺជា Attribute នៅក្នុងតារាងមួយដែលយោងទៅ Primary Key នៃតារាងផ្សេងទៀត។ វាត្រូវបានប្រើដើម្បីបង្កើតទំនាក់ទំនងរវាងតារាង។ ឧទាហរណ៍: \`StudentID\` នៅក្នុងតារាង \`Enrollment\` ដែលយោងទៅ \`StudentID\` នៅក្នុងតារាង \`Student\`។

---

## 4. Entity-Relationship Diagram (ERD)

ERD គឺជាដ្យាក្រាមដែលប្រើដើម្បីបង្ហាញពី Entity, Attribute, និង Relationship នៃមូលដ្ឋានទិន្នន័យមួយ។ វាជាជំហានដំបូង និងសំខាន់បំផុតក្នុងការរចនាមូលដ្ឋានទិន្នន័យ។ 

`,
  examples: [
    `### ឧទាហរណ៍: ការរចនា ERD សម្រាប់ប្រព័ន្ធបណ្ណាល័យ

ពិពណ៌នាពី ERD សម្រាប់ប្រព័ន្ធបណ្ណាល័យសាមញ្ញ។

- **Entity:** \`Member\` (សមាជិក), \`Book\` (សៀវភៅ), \`Loan\` (ការខ្ចី)។
- **Attributes:**
  - \`Member\`: \`MemberID\` (PK), \`Name\`, \`Address\`។
  - \`Book\`: \`BookID\` (PK), \`Title\`, \`Author\`, \`Status\`។
  - \`Loan\`: \`LoanID\` (PK), \`MemberID\` (FK), \`BookID\` (FK), \`LoanDate\`, \`ReturnDate\`។
- **Relationships:**
  - \`Member\` \`has\` (មាន) \`Loan\` (One-to-Many)
  - \`Book\` \`is part of\` (ជាផ្នែកមួយនៃ) \`Loan\` (One-to-Many)
  - \`Loan\` គឺជាតារាងមធ្យមដែលដោះស្រាយទំនាក់ទំនង Many-to-Many រវាង \`Member\` និង \`Book\`។
`,
    `### ឧទាហរណ៍: ភាពខុសគ្នារវាង Primary Key និង Foreign Key

- **Primary Key:** \`ProductID\` គឺជា Primary Key នៅក្នុងតារាង \`Products\`។ ជួរដេកនីមួយៗត្រូវតែមាន \`ProductID\` តែមួយគត់ (ឧទាហរណ៍: P001, P002)។
- **Foreign Key:** នៅក្នុងតារាង \`OrderItems\` \`ProductID\` គឺជា Foreign Key ដែលភ្ជាប់ទៅ \`ProductID\` នៅក្នុងតារាង \`Products\`។ នេះអនុញ្ញាតឱ្យយើងដឹងថាផលិតផលណាដែលត្រូវបានបញ្ជាទិញ។
`
  ],
  quiz: [
    {
      question: 'តើ Primary Key មានតួនាទីអ្វី?',
      options: ['ភ្ជាប់តារាងពីរចូលគ្នា', 'កំណត់អត្តសញ្ញាណជួរដេកដោយមិនដដែលគ្នា', 'រក្សាទុកទិន្នន័យអត្ថបទ', 'លុបទិន្នន័យចេញពីមូលដ្ឋានទិន្នន័យ'],
      correct: 1,
      explanation: 'Primary Key ត្រូវបានប្រើដើម្បីកំណត់អត្តសញ្ញាណជួរដេកតែមួយគត់នៅក្នុងតារាងមួយ។'
    },
    {
      question: 'តើទំនាក់ទំនងប្រភេទណាដែលត្រូវបានបង្កើតឡើងដោយប្រើប្រាស់តារាងមធ្យម (Junction Table)?',
      options: ['One-to-One', 'One-to-Many', 'Many-to-Many', 'Many-to-One'],
      correct: 2,
      explanation: 'ទំនាក់ទំនង Many-to-Many ត្រូវបានដោះស្រាយដោយការបង្កើតតារាងមធ្យមដែលផ្ទុក Foreign Key ពីតារាងទាំងពីរ។'
    },
    {
      question: 'តើ Entity តំណាងឱ្យអ្វីនៅក្នុងការរចនាមូលដ្ឋានទិន្នន័យ?',
      options: ['ជួរឈរមួយក្នុងតារាង', 'ភាសាមួយសម្រាប់ទាញយកទិន្នន័យ', 'វត្ថុឬគំនិតដែលយើងចង់រក្សាទុកព័ត៌មាន', 'ប្រភេទនៃ Hardware'],
      correct: 2,
      explanation: 'Entity គឺជាវត្ថុ ឬគំនិតដែលយើងចាប់អារម្មណ៍ក្នុងការរក្សាទុកទិន្នន័យអំពីវា។'
    },
    {
      question: 'តើ Foreign Key ត្រូវបានប្រើដើម្បីអ្វី?',
      options: ['កំណត់អត្តសញ្ញាណជួរដេក', 'បង្កើតទំនាក់ទំនងរវាងតារាង', 'រក្សាទុកលេខទូរស័ព្ទ', 'លុបទិន្នន័យដោយស្វ័យប្រវត្តិ'],
      correct: 1,
      explanation: 'Foreign Key ត្រូវបានប្រើដើម្បីបង្កើតការតភ្ជាប់ ឬទំនាក់ទំនងរវាងតារាងពីរ។'
    }
  ],
  lab: {
    task: `
រចនា ERD សាមញ្ញសម្រាប់ប្រព័ន្ធគ្រប់គ្រងគ្លីនិកពេទ្យ។

**តម្រូវការ:**
1. កំណត់ Entity យ៉ាងតិច ៣ ។
2. កំណត់ Attributes សំខាន់ៗសម្រាប់ Entity នីមួយៗ។
3. កំណត់ប្រភេទទំនាក់ទំនងរវាង Entity ទាំងនោះ និងបង្ហាញពី Primary Key និង Foreign Key។
    `,
    solution: `
**ប្រព័ន្ធគ្រប់គ្រងគ្លីនិកពេទ្យ**

**១. Entities:** \`Patient\` (អ្នកជំងឺ), \`Doctor\` (គ្រូពេទ្យ), \`Appointment\` (ការណាត់ជួប)។

**២. Attributes:**
   - \`Patient\`: \`PatientID\` (PK), \`Name\`, \`DateOfBirth\`, \`PhoneNumber\`។
   - \`Doctor\`: \`DoctorID\` (PK), \`DoctorName\`, \`Specialty\`។
   - \`Appointment\`: \`AppointmentID\` (PK), \`PatientID\` (FK), \`DoctorID\` (FK), \`AppointmentDate\`, \`Reason\`។

**៣. Relationships:**
   - **\`Patient\` និង \`Appointment\`:** One-to-Many (\`Patient\` ម្នាក់អាចមាន \`Appointment\` ជាច្រើន)។ ទំនាក់ទំនងត្រូវបានបង្កើតឡើងដោយ \`PatientID\` (Foreign Key) នៅក្នុងតារាង \`Appointment\`។
   - **\`Doctor\` និង \`Appointment\`:** One-to-Many (\`Doctor\` ម្នាក់អាចមាន \`Appointment\` ជាច្រើន)។ ទំនាក់ទំនងត្រូវបានបង្កើតឡើងដោយ \`DoctorID\` (Foreign Key) នៅក្នុងតារាង \`Appointment\`។
   - តារាង \`Appointment\` ដោះស្រាយទំនាក់ទំនង Many-to-Many រវាង \`Patient\` និង \`Doctor\`។
`
  }
};

export default MISLesson2_2Content;