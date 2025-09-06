import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson4_2Content: LessonContent = {
  title: 'ការប្រើប្រាស់ Widgets និង Gadgets',
  objectives: [
    'ស្វែងយល់ពីប្រភេទ Widgets (Gadgets) ដ៏សំខាន់',
    'រៀនពីរបៀបកំណត់រចនាសម្ព័ន្ធ Widgets',
    'យល់ពីរបៀបដែល Widgets អាចជួយតាមដានការងារជាក់លាក់',
    'អនុវត្តន៍ការបន្ថែម និងកែប្រែ Widgets',
    'យល់ពីរបៀបដែល Dashboard អាចបម្រើដល់តម្រូវការផ្សេងៗ'
  ],
  content: `
# ការប្រើប្រាស់ Widgets និង Gadgets

---

**Widgets** ឬ **Gadgets** គឺជាបេះដូងនៃ **Dashboards** ។ វាជាឧបករណ៍តូចៗដែលបង្ហាញពីព័ត៌មានជាក់លាក់ពី Jira ។ ការប្រើប្រាស់ និងកំណត់រចនាសម្ព័ន្ធ Widgets ឱ្យបានត្រឹមត្រូវគឺចាំបាច់ដើម្បីបង្កើត Dashboard ដែលមានប្រសិទ្ធភាព។

---

## 1. ប្រភេទ Widgets ដ៏មានប្រយោជន៍

- **Filter Results Gadget:** ត្រូវបានប្រើប្រាស់ញឹកញាប់បំផុត។ វាបង្ហាញ Issues ទាំងអស់ដែលត្រូវនឹង **JQL Filter** ដែលអ្នកបានរក្សាទុក។ អ្នកអាចប្ដូរ Column ដែលត្រូវបង្ហាញ និងចំនួន Issues ដែលត្រូវបង្ហាញ។
- **Statistics Gadget:** បង្ហាញពីការបែងចែក Issues នៅក្នុង Project ឬ Filter មួយ។ វាមានប្រយោជន៍សម្រាប់ការមើលពីចំនួន Issues ដែលត្រូវបានចាត់តាំងឱ្យអ្នកណា ឬចំនួន Issues តាម Priority ។
- **Issue Count Gadget:** គ្រាន់តែបង្ហាញពីចំនួន Issue សរុបនៅក្នុង Filter ណាមួយ។ មានប្រយោជន៍សម្រាប់តាមដាន KPI (Key Performance Indicator)។
- **Roadmap Gadget:** បង្ហាញពី Epic និង Issues ធំៗដែលត្រូវធ្វើតាមពេលវេលា។
- **Created vs. Resolved Chart:** ក្រាហ្វដែលប្រៀបធៀបចំនួន Issues ដែលបានបង្កើតថ្មីធៀបនឹងចំនួន Issues ដែលបានដោះស្រាយ។

---

## 2. ការកំណត់រចនាសម្ព័ន្ធ Widgets

Widgets ភាគច្រើនអាចត្រូវបានកំណត់រចនាសម្ព័ន្ធតាមតម្រូវការរបស់អ្នក។
- **ជ្រើសរើស Filter:** Widgets ភាគច្រើនតម្រូវឱ្យអ្នកជ្រើសរើស **Saved Filter** ដែលវាត្រូវបង្ហាញ។ នេះធ្វើឱ្យវាមានភាពបត់បែនខ្ពស់។
- **ជ្រើសរើស Columns:** អ្នកអាចជ្រើសរើស Columns ដែលត្រូវបង្ហាញក្នុង **Filter Results Gadget** (ឧទាហរណ៍: Assignee, Priority, Status, Due Date)។
- **កំណត់ Refresh Rate:** អ្នកអាចកំណត់ថាតើ Gadget នេះគួរ Refresh ព័ត៌មានញឹកញាប់ប៉ុណ្ណា។

---

## 3. ឧទាហរណ៍ជាក់ស្តែងនៃការប្រើប្រាស់

- **សម្រាប់ក្រុម Development:** អ្នកអាចប្រើ **Burndown Chart** (សម្រាប់ Scrum) ឬ **Control Chart** (សម្រាប់ Kanban) ដើម្បីតាមដានវឌ្ឍនភាព Sprint ឬលំហូរការងារ។
- **សម្រាប់ក្រុម Support:** អ្នកអាចប្រើ **Statistics Gadget** ដើម្បីមើលថាតើប្រភេទ Support Ticket ណាដែលមានចំនួនច្រើនជាងគេ ឬ **Filter Results Gadget** ដើម្បីបង្ហាញ Tickets ដែលមាន Priority "Highest" ។
- **សម្រាប់អ្នកប្រើប្រាស់ម្នាក់ៗ:** អ្នកអាចប្រើ **Assigned to Me Gadget** និង **Jira Issues Calendar** ដើម្បីមើលបញ្ជីការងាររបស់អ្នក និងកាលបរិច្ឆេទកំណត់។

ការយល់ដឹងពីរបៀបដែល Widgets ដំណើរការនឹងអនុញ្ញាតឱ្យអ្នកបង្កើត Dashboards ដែលមិនត្រឹមតែមើលទៅស្អាតប៉ុណ្ណោះទេ ថែមទាំងផ្តល់ព័ត៌មានត្រឹមត្រូវនិងមានតម្លៃសម្រាប់ការសម្រេចចិត្តទៀតផង។
`,
  examples: [
    `### ឧទាហរណ៍: ការប្រើប្រាស់ Filter Results Gadget

**ស្ថានភាព:** អ្នកគ្រប់គ្រងក្រុមចង់មើល Bugs ទាំងអស់ដែលមិនទាន់បានដោះស្រាយសម្រាប់គម្រោង "Website"។

**ជំហាន:**
1. **បង្កើត JQL Filter:** ទៅកាន់ Issues Search ហើយសរសេរ Query: \`Project = "Website" AND IssueType = Bug AND Status != Done\` ។ រក្សាទុក Filter នេះជា "Website Open Bugs"។
2. **បន្ថែម Gadget:** ទៅកាន់ Dashboard របស់អ្នក ចុច "Add Gadget" ហើយស្វែងរក "Filter Results"។
3. **កំណត់រចនាសម្ព័ន្ធ Gadget:** ជ្រើសរើស Filter "Website Open Bugs" ដែលអ្នកបានបង្កើត។ ជ្រើសរើស Columns ដែលអ្នកចង់បង្ហាញដូចជា Key, Summary, Assignee, និង Priority។
`,
  ],
  quiz: [
    {
      question: 'តើ "Gadgets" ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: ['ដើម្បីលុប Project', 'ដើម្បីបង្ហាញព័ត៌មានជាក់លាក់នៅលើ Dashboard', 'ដើម្បីផ្លាស់ប្តូរឈ្មោះ Issue', 'ដើម្បីបង្កើត Users ថ្មី'],
      correct: 1,
      explanation: 'Gadgets គឺជាប្លុកតូចៗដែលបង្ហាញពីព័ត៌មានជាក់លាក់ពី Jira នៅលើ Dashboard ។'
    },
    {
      question: 'តើ Gadget "Filter Results" ត្រូវការអ្វីដើម្បីបង្ហាញព័ត៌មាន?',
      options: ['ឈ្មោះរបស់ Issue', 'JQL Filter ដែលបានរក្សាទុក', 'ឈ្មោះ Project', 'ឈ្មោះអ្នកប្រើប្រាស់'],
      correct: 1,
      explanation: 'Gadget "Filter Results" ត្រូវការ JQL Filter ដែលបានរក្សាទុកដើម្បីបង្ហាញលទ្ធផល Issues ដែលត្រូវនឹងលក្ខខណ្ឌ។'
    },
    {
      question: 'តើ Gadget "Issue Count" បង្ហាញអ្វី?',
      options: ['ចំនួន Issues សរុប', 'បញ្ជី Issues ទាំងអស់', 'របាយការណ៍ហិរញ្ញវត្ថុ', 'បញ្ជីអ្នកប្រើប្រាស់'],
      correct: 0,
      explanation: 'Gadget "Issue Count" បង្ហាញពីចំនួន Issues សរុបនៅក្នុង Filter ណាមួយ។'
    },
    {
      question: 'តើអ្នកអាចកំណត់ Columns ដែលត្រូវបង្ហាញនៅក្នុង Gadget "Filter Results" បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែ Admin ប៉ុណ្ណោះ', 'បានតែសម្រាប់ Bugs'],
      correct: 0,
      explanation: 'អ្នកអាចជ្រើសរើស Columns ដែលត្រូវបង្ហាញក្នុង Gadget "Filter Results" ដើម្បីឱ្យវាបង្ហាញព័ត៌មានដែលអ្នកត្រូវការ។'
    },
    {
      question: 'តើ Gadget "Created vs. Resolved Chart" មានប្រយោជន៍សម្រាប់អ្វី?',
      options: ['ដើម្បីតាមដាន Bugs ទាំងអស់', 'ដើម្បីប្រៀបធៀបចំនួន Issues ដែលបានបង្កើតថ្មីធៀបនឹងចំនួនដែលបានដោះស្រាយ', 'ដើម្បីតាមដានការងាររបស់ក្រុម', 'ដើម្បីបង្ហាញបញ្ជី Sub-tasks'],
      correct: 1,
      explanation: 'Gadget "Created vs. Resolved Chart" ជួយអ្នកតាមដានថាតើក្រុមរបស់អ្នកកំពុងដោះស្រាយ Issues បានលឿនជាង Issues ដែលបានបង្កើតថ្មីដែរឬទេ។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើប្រាស់ Widgets?',
      options: ['ធ្វើឱ្យការងារយឺត', 'ធ្វើឱ្យ Dashboard ស្អាត', 'ផ្តល់ព័ត៌មានដែលមានតម្លៃសម្រាប់ការសម្រេចចិត្ត', 'វាគ្រាន់តែជាការតុបតែង'],
      correct: 2,
      explanation: 'Widgets ផ្តល់ព័ត៌មានសំខាន់ៗដែលជួយអ្នកនិងក្រុមក្នុងការធ្វើការសម្រេចចិត្តប្រកបដោយប្រសិទ្ធភាព។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. ចូលទៅកាន់ Dashboard របស់ Project របស់អ្នក។
2. បន្ថែម Gadget **Statistics** ទៅ Dashboard ។
3. កំណត់រចនាសម្ព័ន្ធ Gadget នោះដើម្បីបង្ហាញពីចំនួន Issues តាម **Assignee** សម្រាប់ **Project** របស់អ្នក។
4. បន្ថែម Gadget មួយទៀត **Issue Count** ហើយកំណត់វាដើម្បីរាប់ Bugs ទាំងអស់នៅក្នុង Project របស់អ្នក។
5. ពិពណ៌នាពីរបៀបដែល Gadgets ទាំងពីរនេះផ្តល់ព័ត៌មានផ្សេងគ្នា។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. ចូលទៅកាន់ Dashboard របស់អ្នក ហើយចុច "Add Gadget" ។
2. ស្វែងរក "Statistics" Gadget ហើយបន្ថែមវា។ កំណត់ Filter ទៅ "Project = 'Your Project Name'" និង Statistics Type ទៅ "Assignee" ។ នេះនឹងបង្ហាញដ្យាក្រាមរង្វង់ (Pie Chart) ដែលបង្ហាញថាអ្នកណាមាន Issues ប៉ុន្មានដែលត្រូវធ្វើ។
3. បន្ថែម "Issue Count" Gadget ។ កំណត់ Filter ទៅ \`Project = "Your Project Name" AND IssueType = Bug\`។ Gadget នេះនឹងបង្ហាញលេខតែមួយគត់ដែលតំណាងឱ្យចំនួន Bugs សរុប។
4. "Statistics Gadget" ផ្តល់ព័ត៌មានជាលក្ខណៈបែងចែក (Distribution) ថាអ្នកណាមានការងារច្រើនជាងគេ ចំណែក "Issue Count" Gadget ផ្តល់ព័ត៌មានជាលក្ខណៈបរិមាណ (Quantitative) ដែលបង្ហាញពីចំនួនសរុបនៃ Issues ជាក់លាក់មួយ។
    `
  }
};

export default JiraLesson4_2Content;