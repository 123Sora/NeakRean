import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson6_3Content: LessonContent = {
  title: 'Project ៣: ការគ្រប់គ្រង Group Project (Kanban Workflow)',
  objectives: [
    'រៀបចំគម្រោង Kanban សម្រាប់ Group Project',
    'អនុវត្តន៍ការប្រើប្រាស់ Kanban Board សម្រាប់ក្រុម',
    'យល់ពីគោលការណ៍ "Pull System" និង WIP Limits',
    'ប្រើប្រាស់ JQL ដើម្បីបង្កើត Dashboards ក្រុម',
    'បូកសរុប និងប្រៀបធៀប Kanban និង Scrum'
  ],
  content: `
# Project ៣: ការគ្រប់គ្រង Group Project (Kanban Workflow)

---

នៅក្នុង Project នេះ អ្នកនឹងអនុវត្តន៍ការប្រើប្រាស់ **Kanban** សម្រាប់ **Group Project**។ នេះសមស្របសម្រាប់ក្រុមដែលការងារចូលមកជាបន្តបន្ទាប់ និងមិនមាន Sprints ដែលកំណត់ពេលវេលា។

---

## 1. ការរៀបចំគម្រោង Kanban

- **បង្កើត Project:** បង្កើត Project ថ្មីមួយក្នុង Jira ហើយជ្រើសរើសប្រភេទ **Kanban**។
- **កំណត់ Users និង Roles:** បន្ថែមមិត្តរួមក្រុមរបស់អ្នក។ ក្នុង Kanban មិនមានតួនាទីពិសេសដូច Scrum ទេ តែអ្នកអាចនៅតែប្រើប្រាស់ Roles ស្តង់ដារដើម្បីកំណត់ Permissions ។
- **រៀបចំ Board:** បង្កើតជួរឈរ (Columns) ដែលសមស្របនឹងលំហូរការងាររបស់ក្រុមអ្នក។
  - ឧទាហរណ៍: To Do, In Progress, Review, Done។

---

## 2. ការគ្រប់គ្រងលំហូរការងារ

- **ប្រើប្រាស់ "Pull System":** ក្រុមរបស់អ្នកនឹង "ទាញ" Issues ថ្មីពីជួរឈរ **To Do** ទៅ **In Progress** នៅពេលដែលពួកគេទំនេរ។ នេះធានាថាមិនមានការងារលើសចំណុះ។
- **កំណត់ WIP Limits:** កំណត់ **Work-in-Progress (WIP) Limits** សម្រាប់ជួរឈរ "In Progress" ឬ "Review" ដើម្បីធានាថាក្រុមមិនចាប់ផ្តើមការងារច្រើនពេកក្នុងពេលតែមួយ។
- **សហការ:** ប្រើប្រាស់ **Comments** និង **Attachments** ដើម្បីពិភាក្សាលើ Issues ។

---

## 3. ការវិភាគ និងរាយការណ៍

- **Dashboard ក្រុម:** បង្កើត Dashboard សម្រាប់ក្រុមរបស់អ្នកដើម្បីបង្ហាញពីស្ថានភាពការងារបច្ចុប្បន្ន។
  - ប្រើ **Filter Results Gadget** ដើម្បីបង្ហាញពី Issues ដែលកំពុងជាប់គាំង។
  - ប្រើ **Two Dimensional Filter Statistics** ដើម្បីមើលថាតើអ្នកណាមានការងារច្រើនជាងគេ។
- **Cumulative Flow Diagram:** ពិនិត្យមើល **Cumulative Flow Diagram** ដើម្បីមើលថាតើលំហូរការងារមានភាពរលូនឬអត់។ ប្រសិនបើទទឹងរវាងបន្ទាត់កើនឡើង នោះមានន័យថាការងារកំពុងកកស្ទះ។

---

## 4. ការប្រៀបធៀប Kanban vs. Scrum

- **Scrum:**
  - **ពេល:** ធ្វើការជា Sprints ដែលមានរយៈពេលកំណត់។
  - **ផ្តោត:** ផ្តោតលើការបញ្ជូនផលិតផលជាប្រចាំ។
  - **ល្អសម្រាប់:** ក្រុមដែលបង្កើតផលិតផលថ្មី។
- **Kanban:**
  - **ពេល:** ការងារមានលក្ខណៈបន្តបន្ទាប់ គ្មាន Sprints។
  - **ផ្តោត:** ផ្តោតលើលំហូរការងារ និងការកាត់បន្ថយពេលវេលាដឹកជញ្ជូន។
  - **ល្អសម្រាប់:** ក្រុមដែលដោះស្រាយបញ្ហាជាបន្តបន្ទាប់ (ឧទាហរណ៍: Support Team)។
`,
  examples: [
    `### ឧទាហរណ៍: ការគ្រប់គ្រងគម្រោង Support Team

**ស្ថានភាព:** ក្រុម Support ទទួលបានសំណើជាបន្តបន្ទាប់ពីអតិថិជន។

**ជំហាន:**
1. **Board:** ក្រុមបង្កើត Kanban Board ដែលមានជួរឈរ "New Requests", "In Progress", "Waiting for Customer", "Resolved" ។
2. **WIP Limits:** ពួកគេកំណត់ WIP Limit ត្រឹម 3 សម្រាប់ជួរឈរ "In Progress"។
3. **Execution:** នៅពេលដែលម្នាក់ទំនេរ ពួកគេនឹង "ទាញ" សំណើថ្មីពី "New Requests" ទៅ "In Progress" ។
4. **Analysis:** ពួកគេប្រើ CFD ដើម្បីមើលថាមានសំណើប៉ុន្មានដែលជាប់គាំងនៅក្នុងជួរឈរ "Waiting for Customer" ។
`,
  ],
  quiz: [
    {
      question: 'តើគោលការណ៍សំខាន់របស់ Kanban គឺអ្វី?',
      options: ['ការធ្វើការជា Sprints', 'ការគ្រប់គ្រងលំហូរការងារ និងការមើលឃើញការងារ', 'ការគ្រប់គ្រង Users', 'ការបង្កើត Dashboard'],
      correct: 1,
      explanation: 'Kanban ផ្តោតលើការគ្រប់គ្រងលំហូរការងារ និងការបង្ហាញការងារជាលក្ខណៈមើលឃើញ។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការកំណត់ WIP Limits?',
      options: ['ធ្វើឱ្យការងារយឺត', 'ធ្វើឱ្យក្រុមផ្តោតលើការងារជាក់លាក់មួយ និងជៀសវាងការងារលើសចំណុះ', 'វាគ្រាន់តែជាការតុបតែង', 'វាជួយកាត់បន្ថយ Bugs'],
      correct: 1,
      explanation: 'WIP Limits ជួយឱ្យក្រុមផ្តោតលើការងារតែមួយមុខ ហើយមិនចាប់ផ្តើមការងារច្រើនពេកក្នុងពេលតែមួយ។'
    },
    {
      question: 'តើក្រុមប្រភេទណាដែលសមស្របនឹងការប្រើប្រាស់ Kanban?',
      options: ['ក្រុមដែលត្រូវការបញ្ជូនផលិតផលរៀងរាល់ 2 សប្តាហ៍', 'ក្រុមដែលមានការងារមិនទៀងទាត់ និងចូលមកជាបន្តបន្ទាប់', 'ក្រុមដែលធ្វើការតែម្នាក់ឯង', 'ក្រុមដែលមិនប្រើ Jira'],
      correct: 1,
      explanation: 'Kanban ល្អសម្រាប់ក្រុមដែលការងារចូលមកជាបន្តបន្ទាប់ដូចជា Support Team ឬ Maintenance Team ។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. បង្កើត Project Kanban ថ្មីសម្រាប់ Group Project ។
2. បន្ថែម Issues យ៉ាងតិច 5 ទៅ Board របស់អ្នក។
3. កំណត់ WIP Limit ត្រឹម 2 សម្រាប់ជួរឈរ "In Progress" ។
4. ព្យាយាមអូស Issues ទី 3 ចូលទៅក្នុងជួរឈរ "In Progress"។ តើមានអ្វីកើតឡើង?
5. ពិពណ៌នាពីភាពខុសគ្នារវាងការគ្រប់គ្រង Project នេះ និង Project Scrum ។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. បង្កើត Project ថ្មី ហើយជ្រើសរើស Kanban ។
2. បង្កើត Issues 5 ដូចជា "Create homepage", "Fix bug in mobile view" ។
3. ចូលទៅ Board Settings ហើយកំណត់ WIP Limit ត្រឹម 2 សម្រាប់ជួរឈរ "In Progress" ។
4. នៅពេលអ្នកព្យាយាមអូស Issues ទី 3 ចូលទៅក្នុងជួរឈរ "In Progress" អ្នកនឹងឃើញមានការព្រមានពី Jira ។
5. ភាពខុសគ្នាសំខាន់គឺ Project Kanban នេះមិនមាន Sprints ទេ។ ការងារចូលមកជាបន្តបន្ទាប់ ហើយក្រុមនឹងទាញការងារថ្មីនៅពេលដែលពួកគេទំនេរ។ ផ្ទុយទៅវិញ Project Scrum ធ្វើការជា Sprints ដែលមានរយៈពេលកំណត់។
    `
  }
};

export default JiraLesson6_3Content;