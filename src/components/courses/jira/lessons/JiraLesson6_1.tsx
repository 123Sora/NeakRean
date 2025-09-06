import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson6_1Content: LessonContent = {
  title: 'Project ១: ការគ្រប់គ្រង Personal Project',
  objectives: [
    'រៀបចំគម្រោង Jira សម្រាប់ Project ផ្ទាល់ខ្លួន',
    'អនុវត្តន៍ការបង្កើត Issues, Tasks និង Sub-tasks',
    'ប្រើប្រាស់ Board និង Dashboard ដើម្បីតាមដានវឌ្ឍនភាព',
    'ប្រើប្រាស់ JQL ដើម្បីស្វែងរក Issues ផ្ទាល់ខ្លួន',
    'បូកសរុបចំណេះដឹងដែលបានរៀន និងអនុវត្តន៍វាដោយខ្លួនឯង'
  ],
  content: `
# Project ១: ការគ្រប់គ្រង Personal Project

---

នៅក្នុងមេរៀននេះ អ្នកនឹងអនុវត្តន៍ចំណេះដឹងដែលអ្នកបានរៀនពីមុនទាំងអស់ដើម្បីគ្រប់គ្រង **Project ផ្ទាល់ខ្លួន**។ ការអនុវត្តន៍នេះនឹងជួយអ្នកឱ្យយល់កាន់តែច្បាស់ពីរបៀបប្រើប្រាស់ **Jira** សម្រាប់កិច្ចការប្រចាំថ្ងៃរបស់អ្នក ទោះបីជាការងារនោះមិនទាក់ទងនឹង Software Development ក៏ដោយ។

---

## 1. ការរៀបចំគម្រោង

- **ជ្រើសរើស Project:** គិតពី Project ផ្ទាល់ខ្លួនមួយដែលអ្នកចង់គ្រប់គ្រង។ ឧទាហរណ៍: ការរៀបចំគម្រោងធ្វើដំណើរ, ការរៀបចំគម្រោងសិក្សា, ឬការបង្កើត Website ផ្ទាល់ខ្លួន។
- **បង្កើត Project ថ្មី:** នៅក្នុង Jira បង្កើត Project ថ្មីមួយសម្រាប់ Project នេះ។ ជ្រើសរើសប្រភេទ Project ដែលសមស្រប (ឧទាហរណ៍: **Kanban** ព្រោះវាជា Project ផ្ទាល់ខ្លួន)។

---

## 2. ការបែងចែកការងារ

- **បង្កើត Issues:** បង្កើត Issues ធំៗ (Tasks) សម្រាប់ Project របស់អ្នក។
  - ឧទាហរណ៍ (សម្រាប់ Project ធ្វើដំណើរ): "Book Flights", "Research Hotels", "Plan Daily Itinerary" ។
- **បែងចែកជា Sub-tasks:** សម្រាប់ Task ធំនីមួយៗ បង្កើត **Sub-tasks** ដើម្បីបែងចែកវាទៅជាជំហានតូចៗដែលអាចគ្រប់គ្រងបាន។
  - ឧទាហរណ៍: សម្រាប់ Task "Book Flights" អ្នកអាចមាន Sub-tasks ដូចជា "Check prices on Skyscanner", "Compare airlines", "Finalize booking on website" ។

---

## 3. ការតាមដាន និងគ្រប់គ្រង

- **ប្រើប្រាស់ Board:** ប្រើប្រាស់ **Kanban Board** របស់អ្នកដើម្បីអូស Issues ពី **To Do** ទៅ **In Progress** និង **Done** ។
- **កំណត់ Priorities:** កំណត់ **Priority** សម្រាប់ Issues ដែលបន្ទាន់ ឬសំខាន់បំផុត។
- **បន្ថែម Comments និង Attachments:** បន្ថែម Comments ទៅ Issues របស់អ្នកដើម្បីកត់ត្រាការពិភាក្សា ឬការសម្រេចចិត្ត។ Upload ឯកសារដូចជា PDF ឬរូបភាពដែលទាក់ទង។

---

## 4. ការវិភាគ និងរាយការណ៍

- **ប្រើប្រាស់ JQL:** សរសេរ JQL Queries ដើម្បីស្វែងរក Issues ដែលអ្នកចង់បាន។
  - ឧទាហរណ៍: \`Assignee = currentUser() AND status != Done\`
- **បង្កើត Dashboard:** បង្កើត Dashboard ផ្ទាល់ខ្លួនមួយ ហើយបន្ថែម **Widgets** ដូចជា "Assigned to Me" ឬ "Filter Results" ដើម្បីតាមដានវឌ្ឍនភាពរបស់អ្នក។
`,
  examples: [
    `### ឧទាហរណ៍: ការគ្រប់គ្រងគម្រោងបង្កើត Website ផ្ទាល់ខ្លួន

**ជំហាន:**
1. **បង្កើត Project:** បង្កើត **Kanban Project** ថ្មីឈ្មោះ "My Portfolio Website"។
2. **បង្កើត Issues:**
   - **Story:** "Create homepage design"
   - **Task:** "Write 'About Me' content"
   - **Task:** "Configure website hosting"
3. **បន្ថែម Sub-tasks:**
   - សម្រាប់ "Create homepage design" អ្នកអាចបន្ថែម Sub-tasks: "Sketch layout ideas", "Choose color palette", "Get feedback from friends" ។
4. **អនុវត្តន៍:** ធ្វើការលើ Issues ទាំងនេះ ហើយផ្លាស់ប្តូរស្ថានភាពរបស់វានៅលើ Board របស់អ្នក។
`,
  ],
  quiz: [
    {
      question: 'តើអ្វីជាប្រភេទ Project ល្អបំផុតសម្រាប់ Project ផ្ទាល់ខ្លួន?',
      options: ['Scrum', 'Kanban', 'Service Management', 'Business'],
      correct: 1,
      explanation: 'Kanban Board គឺល្អបំផុតសម្រាប់ Project ផ្ទាល់ខ្លួន ព្រោះវាអនុញ្ញាតឱ្យអ្នកធ្វើការដោយគ្មាន Sprints ដែលកំណត់ពេលវេលា។'
    },
    {
      question: 'តើអ្នកគួរប្រើអ្វីដើម្បីបែងចែកការងារធំមួយទៅជាជំហានតូចៗ?',
      options: ['Bugs', 'Stories', 'Epics', 'Sub-tasks'],
      correct: 3,
      explanation: 'Sub-tasks ត្រូវបានប្រើដើម្បីបែងចែក Tasks ឬ Stories ធំមួយទៅជាកិច្ចការតូចៗ។'
    },
    {
      question: 'តើ JQL Query មួយណាដែលបង្ហាញពី Issues ទាំងអស់ដែលមិនទាន់បានបញ្ចប់ ហើយត្រូវបានចាត់តាំងឱ្យអ្នក?',
      options: ['\`reporter = currentUser()\`', '\`Assignee = currentUser() AND status != Done\`', '\`Project = "My Project"\`', '\`IssueType = Bug\`'],
      correct: 1,
      explanation: 'JQL Query \`Assignee = currentUser() AND status != Done\` ស្វែងរក Issues ដែលត្រូវបានចាត់តាំងឱ្យអ្នក ហើយមិនទាន់មាន Status ជា "Done" ។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. បង្កើត Project ថ្មីមួយសម្រាប់ Project ផ្ទាល់ខ្លួនរបស់អ្នក។
2. បង្កើត Issues យ៉ាងតិច 3 និង Sub-tasks យ៉ាងតិច 2 សម្រាប់ Issue នីមួយៗ។
3. ផ្លាស់ប្តូរស្ថានភាព Issues មួយចំនួនពី "To Do" ទៅ "In Progress"។
4. បង្កើត Dashboard ផ្ទាល់ខ្លួនមួយដែលមាន Widget "Assigned to Me" ។
5. រាយបញ្ជី Issues របស់អ្នក និង Status បច្ចុប្បន្នរបស់វា។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. បង្កើត Project ថ្មី ហើយជ្រើសរើស Kanban ។
2. បង្កើត Tasks 3 (ឧទាហរណ៍: "Create website wireframe", "Write content", "Set up web hosting")។
3. បង្កើត Sub-tasks 2 សម្រាប់ Task នីមួយៗ។
4. ចូលទៅកាន់ Dashboards ហើយបង្កើត Dashboard ថ្មី។ បន្ទាប់មកបន្ថែម Widget "Assigned to Me"។
5. ស្ថានភាព Issues របស់អ្នកគួរតែផ្លាស់ប្តូរពី "To Do" ទៅ "In Progress" នៅពេលអ្នកចាប់ផ្តើមធ្វើការ។
    `
  }
};

export default JiraLesson6_1Content;