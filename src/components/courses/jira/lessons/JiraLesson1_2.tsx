import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson1_2Content: LessonContent = {
  title: 'ការកំណត់រចនាសម្ព័ន្ធ Project និង Issue Types',
  objectives: [
    'រៀនពីរបៀបបង្កើត និងកែប្រែ Project Settings',
    'ស្គាល់ពីប្រភេទ Issues (Issue Types) ស្តង់ដាររបស់ Jira',
    'យល់ពីរបៀបបង្កើត Issue Type ថ្មីដែលសមស្របនឹងតម្រូវការគម្រោង',
    'អនុវត្តន៍ការកំណត់ Field សម្រាប់ Issues នីមួយៗ',
    'យល់ពីរបៀបរៀបចំ Permission Scheme សម្រាប់ Project'
  ],
  content: `
# ការកំណត់រចនាសម្ព័ន្ធ Project និង Issue Types

---

ដើម្បីឱ្យ Jira ដំណើរការបានត្រឹមត្រូវសម្រាប់គម្រោងរបស់អ្នក អ្នកត្រូវកំណត់រចនាសម្ព័ន្ធ (Configure) Project និង Issue Types ឱ្យបានត្រឹមត្រូវតាំងពីដំបូង។ ការកំណត់ទាំងនេះជះឥទ្ធិពលដល់របៀបដែលក្រុមរបស់អ្នករៀបចំផែនការ និងតាមដានការងារ។

---

## 1. ការកំណត់ Project Settings

Project Settings អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងទិដ្ឋភាពសំខាន់ៗនៃគម្រោងរបស់អ្នកដូចជា៖
- **Details:** ផ្លាស់ប្តូរឈ្មោះ, Key, ឬប្រភេទ Project។
- **Users and Roles:** កំណត់ថាតើនរណាខ្លះអាចចូលប្រើប្រាស់ និងធ្វើអ្វីបានខ្លះនៅក្នុង Project។
- **Permissions:** កំណត់សិទ្ធិជាក់លាក់សម្រាប់ Roles នីមួយៗ (ឧទាហរណ៍: អ្នកណាអាចបង្កើត Issue បាន? អ្នកណាអាចបិទ Issue បាន?)។
- **Workflows:** កែប្រែដំណើរការដែល Issue ត្រូវឆ្លងកាត់។

---

## 2. Issue Types ស្តង់ដារ

Jira ភ្ជាប់មកជាមួយ Issue Types ស្តង់ដារមួយចំនួនដែលប្រើប្រាស់ទូទៅក្នុង Agile Development៖
- **Story:** តំណាងឱ្យលក្ខណៈពិសេសថ្មី (New Feature) ដែលផ្តល់តម្លៃដល់អ្នកប្រើប្រាស់ចុងក្រោយ។
- **Task:** តំណាងឱ្យកិច្ចការទូទៅដែលត្រូវធ្វើ (ឧទាហរណ៍: "Update database schema")។
- **Bug:** តំណាងឱ្យកំហុសឆ្គង ឬបញ្ហាដែលត្រូវជួសជុល។
- **Epic:** តំណាងឱ្យក្រុមនៃ Issues ដែលមានទំហំធំ (ឧទាហរណ៍: "User Management System")។
- **Sub-task:** កិច្ចការតូចៗដែលត្រូវធ្វើដើម្បីបញ្ចប់ Task ឬ Story ធំមួយ។

---

## 3. ការបង្កើត និងកែប្រែ Issues Types

អ្នកអាចបង្កើត Issue Type ថ្មីដើម្បីឱ្យសមស្របនឹងតម្រូវការគម្រោងរបស់អ្នក។ ឧទាហរណ៍:
- **"Feature Request":** សម្រាប់សំណើមុខងារថ្មីពីអតិថិជន។
- **"Support Ticket":** សម្រាប់តាមដានសំណួរ ឬបញ្ហាពីផ្នែក Support។

បន្ទាប់ពីបង្កើត Issue Type អ្នកអាចកំណត់ Fields (ដូចជា Priority, Assignee, Due Date) ដែលត្រូវបង្ហាញសម្រាប់ Issue Type នោះ។ នេះជួយធានាថាព័ត៌មានដែលត្រូវការត្រូវបានប្រមូលបានត្រឹមត្រូវ។

---

## 4. Permission Schemes

**Permission Scheme** គឺជាសំណុំនៃសិទ្ធិដែលត្រូវបានកំណត់សម្រាប់ Roles នៅក្នុង Project មួយ។ ឧទាហរណ៍៖
- **Administrator Role:** អាចធ្វើអ្វីបានទាំងអស់។
- **Developer Role:** អាចបង្កើត, កែប្រែ, និងបិទ Issues។
- **Viewer Role:** អាចមើល Issues បានតែមិនអាចកែប្រែបានទេ។

ការកំណត់ Permission Scheme ឱ្យបានត្រឹមត្រូវជួយការពារទិន្នន័យគម្រោង និងធានាថាមានតែមនុស្សដែលត្រឹមត្រូវប៉ុណ្ណោះដែលមានសិទ្ធិចូលប្រើប្រាស់។
  `,
  examples: [
    `### ឧទាហរណ៍: ការបង្កើត Issue Type ថ្មី

**ស្ថានភាព៖** ក្រុមទីផ្សារចង់ប្រើប្រាស់ Jira ដើម្បីតាមដានយុទ្ធនាការផ្សព្វផ្សាយរបស់ពួកគេ។

**ជំហាន:**
1. **ទៅកាន់ Project Settings:** នៅក្នុង Jira Project របស់អ្នក ចូលទៅកាន់ "Project Settings"។
2. **ទៅកាន់ Issue Types:** រកមើលផ្នែក "Issue Types" ហើយចុច "Add issue type"។
3. **បង្កើត Issue Type ថ្មី:** ដាក់ឈ្មោះថា "Marketing Campaign" ហើយជ្រើសរើស Icon ដែលសមស្រប។
4. **កំណត់ Fields:** បន្ថែម Fields ដូចជា "Budget", "Target Audience", "Start Date", "End Date" ដើម្បីធានាថាព័ត៌មានចាំបាច់ទាំងអស់ត្រូវបានបំពេញ។
`,
  ],
  quiz: [
    {
      question: 'តើ "Bug" នៅក្នុង Jira តំណាងឱ្យអ្វី?',
      options: ['កិច្ចការថ្មី', 'លក្ខណៈពិសេសថ្មី', 'កំហុសឆ្គងដែលត្រូវជួសជុល', 'សំណើពីអតិថិជន'],
      correct: 2,
      explanation: 'Bug គឺតំណាងឱ្យកំហុសឆ្គង ឬបញ្ហាដែលត្រូវជួសជុលនៅក្នុង Software។'
    },
    {
      question: 'តើ Project Settings ជួយគ្រប់គ្រងអ្វីខ្លះ?',
      options: ['ការដំឡើង Hardware', 'ការកំណត់ Permission និង Workflows', 'ការផ្សាយពាណិជ្ជកម្ម', 'ការធ្វើតេស្ត Software'],
      correct: 1,
      explanation: 'Project Settings ជួយគ្រប់គ្រងការកំណត់សំខាន់ៗដូចជា Permission និង Workflow សម្រាប់ Project មួយ។'
    },
    {
      question: 'តើ "Epic" នៅក្នុង Jira ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: ['កិច្ចការតូចបំផុត', 'ក្រុមនៃ Issues ដែលមានទំហំធំ', 'ការបង្កើតរបាយការណ៍', 'ការកំណត់សិទ្ធិអ្នកប្រើប្រាស់'],
      correct: 1,
      explanation: 'Epic គឺជា Issues ដែលមានទំហំធំ ហើយត្រូវបានបែងចែកជា Story ឬ Task តូចៗ។'
    },
    {
      question: 'តើ "Sub-task" នៅក្នុង Jira មានន័យដូចម្តេច?',
      options: ['កិច្ចការធំដែលត្រូវធ្វើ', 'កិច្ចការតូចៗដើម្បីបញ្ចប់ Task ធំ', 'កិច្ចការដែលត្រូវធ្វើដោយក្រុមផ្សេង', 'កិច្ចការដែលមិនសូវសំខាន់'],
      correct: 1,
      explanation: 'Sub-task គឺជាកិច្ចការតូចៗដែលទាក់ទងនឹង Task ធំមួយ។'
    },
    {
      question: 'តើអ្វីជាតួនាទីរបស់ "Permission Scheme"?',
      options: ['កំណត់ពណ៌នៃ Board', 'កំណត់ថាអ្នកណាអាចចូលប្រើប្រាស់ និងធ្វើអ្វីបានខ្លះនៅក្នុង Project', 'ផ្លាស់ប្តូរឈ្មោះ Project', 'បន្ថែមអ្នកប្រើប្រាស់ថ្មី'],
      correct: 1,
      explanation: 'Permission Scheme កំណត់សិទ្ធិសម្រាប់ Roles នីមួយៗនៅក្នុង Project។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម "Field" ថ្មីសម្រាប់ Issue Type នៅកន្លែងណា?',
      options: ['នៅក្នុងផ្នែក Billing', 'នៅក្នុង Project Settings -> Issue Types', 'នៅក្នុង User Profile', 'នៅលើ Board'],
      correct: 1,
      explanation: 'អ្នកអាចបន្ថែម Field ថ្មីនៅក្នុង Project Settings ក្រោមផ្នែក Issue Types ដើម្បីកំណត់ព័ត៌មានដែលត្រូវការសម្រាប់ Issue នោះ។'
    },
    {
      question: 'តើ Issue Type ស្តង់ដារមួយណាដែលតំណាងឱ្យលក្ខណៈពិសេសថ្មី (New Feature)?',
      options: ['Bug', 'Task', 'Epic', 'Story'],
      correct: 3,
      explanation: 'Story គឺជា Issue Type ស្តង់ដារដែលតំណាងឱ្យលក្ខណៈពិសេសថ្មីដែលផ្តល់តម្លៃដល់អ្នកប្រើប្រាស់ចុងក្រោយ។'
    },
    {
      question: 'តើ Project Key របស់ Jira មានតួនាទីអ្វី?',
      options: ['វាជារបាយការណ៍', 'វាជាអត្តសញ្ញាណតែមួយគត់សម្រាប់ Project', 'វាជាឈ្មោះរបស់អ្នកប្រើប្រាស់', 'វាជាឈ្មោះក្រុម'],
      correct: 1,
      explanation: 'Project Key គឺជាអត្តសញ្ញាណតែមួយគត់សម្រាប់ Project នីមួយៗ ហើយជាផ្នែកមួយនៃ Issue Key (ឧទាហរណ៍: KEY-123)។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. បង្កើត Project ថ្មីសម្រាប់ "ក្រុម Support អតិថិជន"។
2. បង្កើត Issue Type ថ្មីមួយឈ្មោះថា "Support Ticket"។
3. កែប្រែ Field សម្រាប់ "Support Ticket" ថ្មីនេះ ដោយបន្ថែម Field "Customer Email" និង "Ticket Priority"។
4. បង្កើត Issues មួយចំនួនដោយប្រើ "Support Ticket" ដែលអ្នកបានបង្កើត។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. ចូលទៅកាន់ Jira ហើយបង្កើត Project ថ្មីមួយ (ឧទាហរណ៍: Kanban)។
2. ចូលទៅកាន់ Project Settings របស់ Project នោះ។ ជ្រើសរើស "Issue types" ហើយចុច "Add issue type"។ ដាក់ឈ្មោះថា "Support Ticket"។
3. ចុចលើ "Support Ticket" ដែលអ្នកបានបង្កើត ហើយអូស "Customer Email" និង "Ticket Priority" Fields ពី Sidebar ទៅកាន់ Canvas។
4. ត្រឡប់ទៅ Board វិញ ហើយចុច "Create" Issue។ ត្រូវប្រាកដថាអ្នកជ្រើសរើស Issue Type "Support Ticket"។ បំពេញព័ត៌មានដែលត្រូវការហើយចុច "Create"។
    `
  }
};

export default JiraLesson1_2Content;