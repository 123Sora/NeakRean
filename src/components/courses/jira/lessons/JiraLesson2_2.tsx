import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson2_2Content: LessonContent = {
  title: 'ការប្រើប្រាស់ Scrum Boards',
  objectives: [
    'យល់ពីគោលការណ៍គ្រឹះនៃ Scrum',
    'រៀនពីរបៀបប្រើប្រាស់ Scrum Board នៅក្នុង Jira',
    'ស្គាល់ពីការរៀបចំ Backlog និង Sprints',
    'យល់ពីតួនាទីរបស់ក្រុមក្នុង Scrum (Product Owner, Scrum Master, Development Team)',
    'អនុវត្តន៍ការបង្កើត និងគ្រប់គ្រង Sprint'
  ],
  content: `
# ការប្រើប្រាស់ Scrum Boards

---

**Scrum** គឺជា Framework មួយនៅក្នុង **Agile** ដែលជួយក្រុមក្នុងការដោះស្រាយបញ្ហាដ៏ស្មុគស្មាញ និងបញ្ជូនផលិតផលដែលមានតម្លៃខ្ពស់។ **Scrum Board** នៅក្នុង Jira ត្រូវបានរៀបចំឡើងជាពិសេសដើម្បីគាំទ្រដល់ដំណើរការរបស់ Scrum ដែលផ្តោតលើការធ្វើការជាលក្ខណៈ **Sprints** (រយៈពេលកំណត់)។

---

## 1. គោលការណ៍គ្រឹះនៃ Scrum

Scrum មានគោលការណ៍សំខាន់ៗចំនួនបី៖
- **Transparency (តម្លាភាព):** អ្នកគ្រប់គ្នាគួរតែយល់ពីស្ថានភាពការងារបច្ចុប្បន្ន។
- **Inspection (ការត្រួតពិនិត្យ):** ក្រុមគួរតែត្រួតពិនិត្យការងាររបស់ពួកគេជាទៀងទាត់។
- **Adaptation (ការសម្របខ្លួន):** ក្រុមគួរតែសម្របខ្លួនទៅនឹងការផ្លាស់ប្តូរ និងកែលម្អជាប្រចាំ។

---

## 2. រចនាសម្ព័ន្ធ Scrum Board ក្នុង Jira

Scrum Board មានផ្នែកសំខាន់ពីរ៖
- **Backlog:** ជាបញ្ជី Issues ទាំងអស់ដែលត្រូវធ្វើសម្រាប់ Project ។ វានៅទីនេះដែលអ្នករៀបចំផែនការ Sprints បន្ទាប់។
- **Active Sprint:** ជាផ្នែកដែលបង្ហាញពី Issues ដែលក្រុមបានប្តេជ្ញាចិត្តថានឹងបញ្ចប់នៅក្នុង Sprint បច្ចុប្បន្ន។ Board នេះជាធម្មតាមានជួរឈរដូចជា To Do, In Progress, និង Done។

---

## 3. ការគ្រប់គ្រង Backlog និង Sprints

- **Backlog:** Product Owner ទទួលខុសត្រូវក្នុងការរៀបចំ Issues ក្នុង Backlog ទៅតាមលំដាប់លំដោយ (Prioritize)។
- **Sprint Planning:** ក្រុមជួបគ្នាដើម្បីពិភាក្សាអំពី Issues ក្នុង Backlog ហើយជ្រើសរើស Issues ដែលត្រូវធ្វើក្នុង Sprint បន្ទាប់។
- **Active Sprint:** នៅពេលដែល Sprint ចាប់ផ្តើម Issues ត្រូវបានផ្លាស់ប្តូរទៅកាន់ Active Sprint Board ។ ក្រុមនឹងធ្វើការលើ Issues ទាំងនោះរហូតដល់ Sprint ចប់។
- **Sprint Review & Retrospective:** នៅចុងបញ្ចប់នៃ Sprint ក្រុមនឹងបង្ហាញការងារដែលបានបញ្ចប់ (Review) និងពិភាក្សាអំពីអ្វីដែលត្រូវកែលម្អសម្រាប់ Sprint បន្ទាប់ (Retrospective)។

---

## 4. តួនាទីក្នុង Scrum

- **Product Owner:** ទទួលខុសត្រូវក្នុងការកំណត់ទិសដៅផលិតផល និងគ្រប់គ្រង Backlog។
- **Scrum Master:** ជួយសម្រួលដល់ដំណើរការ Scrum និងដោះស្រាយឧបសគ្គ (Obstacles) របស់ក្រុម។
- **Development Team:** ក្រុមដែលធ្វើការលើ Issues និងបញ្ចប់ការងារក្នុង Sprint។

---
`,
  examples: [
    `### ឧទាហរណ៍: ការប្រើប្រាស់ Scrum Board ក្នុង Sprint

**1. Sprint Planning:**
   - ក្រុមអភិវឌ្ឍន៍ Website សម្រេចចិត្តធ្វើ Sprint រយៈពេល 2 សប្តាហ៍។
   - ពួកគេជ្រើសរើស Issues ដូចជា "User registration", "Password reset", "Homepage design" ពី Backlog ទៅកាន់ Sprint បច្ចុប្បន្ន។

**2. Sprint Execution:**
   - ក្រុមចាប់ផ្តើមធ្វើការ។ ពួកគេផ្លាស់ប្តូរ Issues ពី **To Do** ទៅ **In Progress** ទៅ **Done** ។
   - ពួកគេមានការប្រជុំ Daily Stand-up ខ្លីៗរៀងរាល់ព្រឹកដើម្បីពិភាក្សាពីវឌ្ឍនភាព។

**3. Sprint Review:**
   - នៅចុងបញ្ចប់នៃ Sprint ក្រុមបង្ហាញមុខងារ "User registration" ដែលបានបញ្ចប់ទៅ Product Owner និង Stakeholders ។
`,
  ],
  quiz: [
    {
      question: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង Backlog និង Active Sprint?',
      options: ['Backlog ផ្ទុកការងារដែលត្រូវធ្វើនាពេលអនាគត ចំណែក Active Sprint ផ្ទុកការងារដែលកំពុងធ្វើ', 'Backlog មានតែ Bugs ចំណែក Active Sprint មានតែ Tasks', 'Backlog សម្រាប់ Product Owner ចំណែក Active Sprint សម្រាប់ Developers', 'មិនមានភាពខុសគ្នាទេ'],
      correct: 0,
      explanation: 'Backlog គឺជាបញ្ជីការងារដែលត្រូវធ្វើនាពេលអនាគត ចំណែក Active Sprint គឺជាការងារដែលក្រុមបានប្តេជ្ញាចិត្តធ្វើក្នុង Sprint បច្ចុប្បន្ន។'
    },
    {
      question: 'តើ "Sprint" នៅក្នុង Scrum មានន័យដូចម្តេច?',
      options: ['ការប្រជុំប្រចាំថ្ងៃ', 'រយៈពេលកំណត់សម្រាប់ធ្វើការលើការងារ', 'ការចេញផ្សាយផលិតផល', 'កិច្ចការតែមួយ'],
      correct: 1,
      explanation: 'Sprint គឺជារយៈពេលកំណត់មួយ (ជាធម្មតា 1-4 សប្តាហ៍) ដែលក្នុងនោះក្រុមធ្វើការលើការងារជាក់លាក់មួយ។'
    },
    {
      question: 'តើនរណាជាអ្នកទទួលខុសត្រូវលើការរៀបចំ Backlog?',
      options: ['Scrum Master', 'Development Team', 'Product Owner', 'Stakeholders'],
      correct: 2,
      explanation: 'Product Owner ទទួលខុសត្រូវលើការរៀបចំ និងកំណត់លំដាប់ Backlog។'
    },
    {
      question: 'តើការប្រជុំ "Daily Stand-up" ត្រូវបានធ្វើឡើងដើម្បីអ្វី?',
      options: ['ដើម្បីរៀបចំផែនការ Sprint ថ្មី', 'ដើម្បីជួសជុល Bugs', 'ដើម្បីបង្ហាញការងារដែលបានបញ្ចប់', 'ដើម្បីពិភាក្សាពីវឌ្ឍនភាពប្រចាំថ្ងៃ'],
      correct: 3,
      explanation: 'Daily Stand-up គឺជាការប្រជុំខ្លីៗដែលក្រុមពិភាក្សាអំពីវឌ្ឍនភាពរបស់ពួកគេ។'
    },
    {
      question: 'តើគោលការណ៍មួយណាដែលមិនមែនជាគោលការណ៍គ្រឹះរបស់ Scrum?',
      options: ['Transparency', 'Efficiency', 'Inspection', 'Adaptation'],
      correct: 1,
      explanation: 'Efficiency មិនមែនជាគោលការណ៍គ្រឹះទាំងបីរបស់ Scrum ទេ។ គោលការណ៍ទាំងបីគឺ Transparency, Inspection, និង Adaptation។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. បង្កើត Project ថ្មីមួយនៅក្នុង Jira ហើយជ្រើសរើសប្រភេទ **Scrum Project**។
2. បង្កើត Issues មួយចំនួននៅក្នុង **Backlog**។
3. ចាប់ផ្តើម **Sprint** ថ្មីមួយ ហើយបន្ថែម Issues ទៅក្នុង Sprint នោះ។
4. ផ្លាស់ប្តូរស្ថានភាព Issues មួយចំនួនពី "To Do" ទៅ "In Progress"។
5. បញ្ចប់ Sprint នោះ (Complete Sprint)។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. ចូលទៅកាន់ Jira ហើយបង្កើត Project ថ្មីដោយជ្រើសរើស Project type "Scrum"។
2. ចូលទៅកាន់ផ្នែក **Backlog** របស់ Project នោះ ហើយចុច "Create" ដើម្បីបង្កើត Issues ដូចជា Tasks ឬ Stories។
3. ជ្រើសរើស Issues មួយចំនួនពី Backlog ហើយចុច "Create Sprint" ឬអូស Issues ចូលទៅក្នុង Sprint box។ បន្ទាប់មកចុច "Start Sprint"។
4. ចូលទៅកាន់ **Active Sprint** board។ អូស Issues ពីជួរឈរ "To Do" ទៅកាន់ "In Progress"។
5. នៅពេលដែលអ្នកបានបញ្ចប់លំហាត់នេះ ចុច "Complete Sprint" នៅជ្រុងខាងស្តាំនៃ Board។
    `
  }
};

export default JiraLesson2_2Content;