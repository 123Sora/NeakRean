import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson6_2Content: LessonContent = {
  title: 'Project ២: ការគ្រប់គ្រង Group Project (Scrum Workflow)',
  objectives: [
    'រៀបចំគម្រោង Scrum សម្រាប់ Group Project',
    'អនុវត្តន៍ការរៀបចំ Backlog និង Sprint Planning',
    'ធ្វើការជាក្រុមដោយប្រើប្រាស់ Scrum Board',
    'វិភាគ Burndown Chart និង Velocity Chart',
    'អនុវត្តន៍តួនាទីជា Scrum Master ឬ Product Owner'
  ],
  content: `
# Project ២: ការគ្រប់គ្រង Group Project (Scrum Workflow)

---

នៅក្នុង Project នេះ អ្នកនឹងប្រើប្រាស់ **Jira** ដើម្បីគ្រប់គ្រង **Group Project** ដោយប្រើប្រាស់ **Scrum Framework**។ នេះជាការអនុវត្តន៍ដ៏ល្អបំផុតសម្រាប់ក្រុមអភិវឌ្ឍន៍ Software ដែលត្រូវការធ្វើការជាមួយគ្នា និងបញ្ជូនផលិតផលជាបន្តបន្ទាប់។

---

## 1. ការរៀបចំគម្រោង Scrum

- **បង្កើត Project:** បង្កើត Project ថ្មីមួយក្នុង Jira ហើយជ្រើសរើសប្រភេទ **Scrum**។
- **កំណត់ Users និង Roles:** បន្ថែមមិត្តរួមក្រុមរបស់អ្នកទៅក្នុង Project ហើយកំណត់ **Roles** ឱ្យបានត្រឹមត្រូវ (ឧទាហរណ៍: Product Owner, Scrum Master, Developer) ។
- **រៀបចំ Backlog:** ក្នុងនាមជា **Product Owner** បង្កើត **Stories** និង **Epics** សម្រាប់ Project ហើយរៀបចំវាតាមលំដាប់លំដោយ (Prioritize)។

---

## 2. Sprint Planning និង Execution

- **រៀបចំ Sprint:** កំណត់រយៈពេលសម្រាប់ Sprint របស់អ្នក (ឧទាហរណ៍: 2 សប្តាហ៍)។
- **ធ្វើ Sprint Planning:** ជាមួយក្រុមរបស់អ្នក ជ្រើសរើស Stories មួយចំនួនពី **Backlog** ចូលទៅក្នុង **Sprint** ថ្មី។
- **ចាប់ផ្តើម Sprint:** ចុច "Start Sprint" ។

---

## 3. ការតាមដានវឌ្ឍនភាព

- **ប្រើប្រាស់ Scrum Board:** អូស Issues ពីជួរឈរមួយទៅជួរឈរមួយទៀតនៅពេលដែលការងារមានវឌ្ឍនភាព។
- **Daily Scrum:** ជួបគ្នាប្រចាំថ្ងៃដើម្បីពិភាក្សាពីវឌ្ឍនភាព និងបញ្ហាដែលកំពុងជួបប្រទះ។
- **មើល Reports:** តាមដាន **Burndown Chart** ដើម្បីមើលថាតើក្រុមរបស់អ្នកកំពុងបញ្ចប់ការងារបានទាន់ពេលវេលាឬអត់។

---

## 4. ការបញ្ចប់ Sprint

- **Sprint Review:** នៅចុងបញ្ចប់នៃ Sprint បង្ហាញការងារដែលបានបញ្ចប់ទៅក្រុម និង Stakeholders ។
- **Sprint Retrospective:** ពិភាក្សាជាមួយក្រុមអំពីអ្វីដែលបានល្អ និងអ្វីដែលត្រូវកែលម្អសម្រាប់ Sprint បន្ទាប់។
- **Complete Sprint:** ចុច "Complete Sprint" ។ Issues ដែលមិនទាន់បានបញ្ចប់នឹងត្រូវបានផ្លាស់ប្តូរទៅ Backlog វិញ។
`,
  examples: [
    `### ឧទាហរណ៍: ការគ្រប់គ្រងគម្រោង Mobile App

**ស្ថានភាព:** ក្រុមអភិវឌ្ឍន៍ Mobile App កំពុងធ្វើការលើមុខងារថ្មីៗ។

**ជំហាន:**
1. **Backlog:** ក្រុមមាន Stories ដូចជា "User registration", "Push notifications", "App settings" ។
2. **Sprint 1:** ក្រុមសម្រេចចិត្តធ្វើការលើ "User registration" និង "Push notifications" ។ ពួកគេចាប់ផ្តើម Sprint ។
3. **Execution:** ក្រុមធ្វើការលើ Tasks ទាំងនោះ ហើយរៀងរាល់ព្រឹកពួកគេប្រជុំ Daily Stand-up ។
4. **Review:** ពួកគេបង្ហាញមុខងារទាំងពីរដែលបានបញ្ចប់។
5. **Retrospective:** ពួកគេពិភាក្សាថាពួកគេបានប្រើប្រាស់ពេលវេលាច្រើនពេកលើការរចនា UI ហើយពួកគេនឹងកែលម្អវាសម្រាប់ Sprint បន្ទាប់។
`,
  ],
  quiz: [
    {
      question: 'តើ Scrum Project ផ្អែកលើគោលគំនិតអ្វី?',
      options: ['ការងារជាបន្តបន្ទាប់', 'ការធ្វើការជា Sprints ដែលមានរយៈពេលកំណត់', 'ការគ្រប់គ្រង Bugs តែមួយមុខ', 'ការគ្រប់គ្រង User Permissions'],
      correct: 1,
      explanation: 'Scrum ផ្អែកលើការធ្វើការជា Sprints ដែលមានរយៈពេលកំណត់ (Time-boxed periods)។'
    },
    {
      question: 'តើ "Product Owner" មានតួនាទីអ្វី?',
      options: ['សរសេរកូដ', 'គ្រប់គ្រង Backlog និងកំណត់ទិសដៅផលិតផល', 'ដោះស្រាយបញ្ហាបច្ចេកទេស', 'គ្រប់គ្រង Server'],
      correct: 1,
      explanation: 'Product Owner ទទួលខុសត្រូវក្នុងការគ្រប់គ្រង Backlog និងកំណត់លំដាប់លំដោយរបស់ Issues ។'
    },
    {
      question: 'តើ "Burndown Chart" មានប្រយោជន៍អ្វីខ្លះក្នុង Sprint?',
      options: ['វាស់វែងល្បឿនរបស់ Server', 'តាមដានការងារដែលនៅសល់ធៀបនឹងពេលវេលា', 'វាស់វែងចំនួន Bugs', 'វាស់វែងចំនួន Comments'],
      correct: 1,
      explanation: 'Burndown Chart ជួយតាមដានថាតើក្រុមអាចបញ្ចប់ការងារក្នុង Sprint បានទាន់ពេលវេលាឬអត់។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. បង្កើត Project Scrum ថ្មីសម្រាប់ក្រុមរបស់អ្នក។
2. បង្កើត Stories យ៉ាងតិច 5 នៅក្នុង Backlog ។
3. បន្ថែម Stories យ៉ាងតិច 2 ទៅ Sprint ថ្មីមួយ ហើយចាប់ផ្តើម Sprint នោះ។
4. អូស Issues ពី "To Do" ទៅ "In Progress" ហើយបន្ទាប់មកទៅ "Done"។
5. ពិនិត្យមើល Burndown Chart របស់ Sprint របស់អ្នក។ តើវឌ្ឍនភាពរបស់អ្នកមើលទៅដូចម្ដេច?
    `,
    solution: `
**ដំណោះស្រាយ:**

1. បង្កើត Project ថ្មី ហើយជ្រើសរើស Scrum ។
2. ចូលទៅកាន់ Backlog ហើយបង្កើត Stories 5 ។
3. ជ្រើសរើស Stories 2 ពី Backlog ហើយចុច "Create Sprint" ។ បន្ទាប់មកចុច "Start Sprint"។
4. ចូលទៅកាន់ Active Sprint Board ហើយអូស Issues តាមលំដាប់លំហូរការងារ។
5. ចូលទៅកាន់ Reports ហើយចុច Burndown Chart ។ អ្នកនឹងឃើញបន្ទាត់ "Actual" ចុះក្រោមទៅតាមការងារដែលអ្នកបានបញ្ចប់។
    `
  }
};

export default JiraLesson6_2Content;