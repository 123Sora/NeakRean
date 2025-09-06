import type { LessonContent } from '../../../../types/LessonTypes';

const SEMLesson8_2Content: LessonContent = {
  title: 'ឧបករណ៍ CASE និង Software គ្រប់គ្រងគម្រោង',
  objectives: [
    'យល់ដឹងពីគោលគំនិត Computer-Aided Software Engineering (CASE) Tools',
    'ស្គាល់ពីប្រភេទឧបករណ៍ CASE ផ្សេងៗគ្នា',
    'រៀនពីមុខងារនិងអត្ថប្រយោជន៍របស់ Software គ្រប់គ្រងគម្រោង',
    'ស្គាល់ពីឧបករណ៍គ្រប់គ្រងគម្រោងពេញនិយមដូចជា Jira, Trello, និង Asana',
    'អនុវត្តការប្រើប្រាស់ឧបករណ៍គ្រប់គ្រងគម្រោង'
  ],
  content: `
# ឧបករណ៍ CASE និង Software គ្រប់គ្រងគម្រោង 💻

---

**Computer-Aided Software Engineering (CASE)** Tools គឺជា Software ដែលជួយដល់ដំណើរការអភិវឌ្ឍន៍ Software ទាំងមូល។ ពួកវាជួយសម្រួលការរចនា ការអភិវឌ្ឍន៍ និងការថែទាំ។

---

## 1. ឧបករណ៍ CASE

- **Upper CASE Tools:** ផ្តោតលើដំណាក់កាលដំបូងនៃ SDLC (Software Development Life Cycle) ដូចជាការវិភាគនិងការរចនា។
  - **ឧទាហរណ៍:** ឧបករណ៍សម្រាប់បង្កើត UML Diagrams ។
- **Lower CASE Tools:** ផ្តោតលើដំណាក់កាលចុងក្រោយដូចជាការសរសេរកូដនិងការធ្វើតេស្ត។
  - **ឧទាហរណ៍:** Code Generators, Debuggers ។
- **Integrated CASE Tools:** រួមបញ្ចូលគ្នាទាំង Upper និង Lower CASE Tools ។

**អត្ថប្រយោជន៍:**
- **បង្កើនផលិតភាព:** ស្វ័យប្រវត្តិកម្មកិច្ចការដដែលៗ។
- **បង្កើនគុណភាព:** ជួយកាត់បន្ថយកំហុសដោយស្វ័យប្រវត្តិ។
- **កាត់បន្ថយពេលវេលា:** ជួយឱ្យគម្រោងសម្រេចបានលឿន។

---

## 2. Software គ្រប់គ្រងគម្រោង

Software គ្រប់គ្រងគម្រោងគឺជាឧបករណ៍ដែលជួយដល់ Project Manager និងក្រុមការងារក្នុងការរៀបចំផែនការ តាមដាន និងអនុវត្តគម្រោង។

**មុខងារសំខាន់ៗ:**
- **ការតាមដានកិច្ចការ:** បង្កើតនិងចាត់ចែងកិច្ចការ។
- **ការគ្រប់គ្រងពេលវេលា:** រៀបចំកាលវិភាគនិង Deadlines ។
- **ការតាមដានវឌ្ឍនភាព:** មើលវឌ្ឍនភាពគម្រោង។
- **ការសហការក្រុម:** ផ្តល់នូវកន្លែងសម្រាប់ក្រុមធ្វើការរួមគ្នា។
- **ការគ្រប់គ្រងធនធាន:** គ្រប់គ្រងធនធានដូចជាបុគ្គលិក។

---

## 3. ឧបករណ៍គ្រប់គ្រងគម្រោងពេញនិយម

- **Jira:** ពេញនិយមបំផុតសម្រាប់ក្រុមអភិវឌ្ឍន៍ Software ។ វាគាំទ្រ Agile (Scrum, Kanban) និងអាចប្ដូរតាមបំណងបានច្រើន។
- **Trello:** ងាយស្រួលប្រើសម្រាប់គម្រោងតូចៗ។ ប្រើប្រព័ន្ធ Boards, Lists, និង Cards ។
- **Asana:** ប្រើសម្រាប់គ្រប់គ្រងគម្រោងគ្រប់ប្រភេទ។ ផ្តោតលើការគ្រប់គ្រងកិច្ចការ។

`,
  examples: [
    `### ឧទាហរណ៍: ការប្រើប្រាស់ Jira

**សេណារីយ៉ូ:** ក្រុមរបស់អ្នកកំពុងអនុវត្ត Scrum ។

1.  **បង្កើត Epic:** បង្កើត Epic មួយសម្រាប់ "User Authentication" ។
2.  **បង្កើត Stories:** បង្កើត User Stories ដូចជា "As a user, I can log in" ។
3.  **បែងចែកកិច្ចការ:** បែងចែក Story ទៅជា Tasks តូចៗសម្រាប់ក្រុម។
4.  **តាមដានវឌ្ឍនភាព:** ក្រុមផ្លាស់ប្តូរ Tasks ពី "To Do" ទៅ "In Progress" ទៅ "Done" នៅលើ Scrum Board ។
`
  ],
  quiz: [
    {
      question: 'តើឧបករណ៍ CASE គឺជាអ្វី?',
      options: ['Hardware', 'Software ដែលជួយដល់ការអភិវឌ្ឍន៍ Software', 'ឧបករណ៍ធ្វើតេស្ត', 'ភាសាសរសេរកូដ'],
      correct: 1,
      explanation: 'CASE Tools គឺជា Software ដែលជួយសម្រួលការអភិវឌ្ឍន៍ Software ។'
    },
    {
      question: 'តើ Jira ប្រើសម្រាប់អ្វី?',
      options: ['ធ្វើតេស្តស្វ័យប្រវត្តិ', 'គ្រប់គ្រងគម្រោង Agile', 'ការរចនាក្រាហ្វិក', 'ការគ្រប់គ្រងហិរញ្ញវត្ថុ'],
      correct: 1,
      explanation: 'Jira គឺពេញនិយមបំផុតសម្រាប់គ្រប់គ្រងគម្រោង Agile ។'
    },
    {
      question: 'តើ Lower CASE Tools ផ្តោតលើដំណាក់កាលណា?',
      options: ['ការវិភាគតម្រូវការ', 'ការរចនា', 'ការសរសេរកូដនិងការធ្វើតេស្ត', 'ការដាក់ឱ្យប្រើប្រាស់'],
      correct: 2,
      explanation: 'Lower CASE Tools ជួយដល់ដំណាក់កាលអភិវឌ្ឍន៍និងធ្វើតេស្ត។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងមួយនៃការប្រើប្រាស់ Software គ្រប់គ្រងគម្រោង?',
      options: ['ធ្វើឱ្យគម្រោងយឺត', 'បង្កើនការចំណាយ', 'បង្កើនការសហការក្រុម', 'កាត់បន្ថយផលិតភាព'],
      correct: 2,
      explanation: 'ឧបករណ៍គ្រប់គ្រងគម្រោងជួយបង្កើនការសហការ។'
    },
    {
      question: 'តើ Trello ប្រើប្រព័ន្ធអ្វី?',
      options: ['Scrum', 'Kanban (Boards, Lists, Cards)', 'Waterfall', 'Spiral'],
      correct: 1,
      explanation: 'Trello ប្រើប្រព័ន្ធ Boards, Lists, និង Cards ដែលស្រដៀងនឹង Kanban ។'
    },
    {
      question: 'តើ Integrated CASE Tools ធ្វើអ្វី?',
      options: ['តែជួយដល់ការរចនា', 'តែជួយដល់ការសរសេរកូដ', 'រួមបញ្ចូលគ្នារវាង Upper និង Lower CASE Tools', 'គ្រប់គ្រងហានិភ័យ'],
      correct: 2,
      explanation: 'Integrated CASE Tools រួមបញ្ចូលគ្នានូវមុខងារនៃ Upper និង Lower CASE ។'
    },
    {
      question: 'តើមុខងារអ្វីខ្លះដែល Software គ្រប់គ្រងគម្រោងមាន?',
      options: ['ការតាមដានកិច្ចការនិងវឌ្ឍនភាព', 'ការដោះស្រាយជម្លោះ', 'ការគ្រប់គ្រងប្រាក់ឈ្នួល', 'ការជ្រើសរើសបុគ្គលិក'],
      correct: 0,
      explanation: 'Software គ្រប់គ្រងគម្រោងជួយតាមដានកិច្ចការនិងវឌ្ឍនភាព។'
    }
  ],
  lab: {
    task: `
**សេណារីយ៉ូ:** ក្រុមរបស់អ្នកមានកិច្ចការចំនួន ៣ ដើម្បីបង្កើតមុខងារ "Forgot Password" សម្រាប់ Website មួយ។

- កិច្ចការទី ១: រចនាទំព័រ Forgot Password ។
- កិច្ចការទី ២: សរសេរកូដ Backend សម្រាប់ Reset Password ។
- កិច្ចការទី ៣: ធ្វើតេស្តមុខងារ Forgot Password ។

**តម្រូវការ:**
1.  ពន្យល់ពីរបៀបដែលអ្នកនឹងប្រើប្រាស់ Trello ដើម្បីគ្រប់គ្រងកិច្ចការទាំងនេះ។
2.  ពិពណ៌នាពីរបៀបដែលអ្នកនឹងប្រើប្រាស់ Boards, Lists, និង Cards ។
    `,
    solution: `
**ការប្រើប្រាស់ Trello ដើម្បីគ្រប់គ្រងកិច្ចការ**

**១. ការប្រើប្រាស់ Trello:**
   - ខ្ញុំនឹងបង្កើត Trello Board ថ្មីមួយសម្រាប់គម្រោង "Forgot Password" ។

**២. ការរៀបចំ Board:**
   - **Board:** "Forgot Password Feature"
   - **Lists:**
     - **"To Do":** ដាក់កិច្ចការដែលត្រូវធ្វើនៅទីនេះ។
     - **"In Progress":** ផ្លាស់ប្តូរ Card ទៅ List នេះនៅពេលចាប់ផ្តើមការងារ។
     - **"Done":** ផ្លាស់ប្តូរ Card ទៅ List នេះនៅពេលកិច្ចការបានបញ្ចប់។
   - **Cards:**
     - ខ្ញុំនឹងបង្កើត Cards ចំនួន ៣ ដោយដាក់ក្នុង List "To Do" ។
       - **Card ១:** "Design Forgot Password Page"
       - **Card ២:** "Code Backend for Reset Password"
       - **Card ៣:** "Test Forgot Password Functionality"
   - **ការចាត់ចែង:** ខ្ញុំនឹងចាត់ចែង Card នីមួយៗទៅសមាជិកក្រុមដែលទទួលខុសត្រូវ។
`
  }
};

export default SEMLesson8_2Content;