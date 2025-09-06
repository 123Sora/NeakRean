import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson1_3Content: LessonContent = {
  title: 'ការបង្កើត និងគ្រប់គ្រង Tasks, Bugs និង Stories',
  objectives: [
    'រៀនពីរបៀបបង្កើត Issue ថ្មីនៅក្នុង Jira',
    'យល់ពីរបៀបកំណត់ Field សំខាន់ៗ (Priority, Assignee, Reporter)',
    'ស្គាល់ពីរបៀបភ្ជាប់ Issues ផ្សេងៗ (Linking Issues)',
    'អនុវត្តន៍ការបន្ថែម Comments និង Attachments',
    'រៀនពីរបៀបផ្លាស់ប្តូរស្ថានភាព Issue ក្នុង Workflow'
  ],
  content: `
# ការបង្កើត និងគ្រប់គ្រង Tasks, Bugs និង Stories

---

នៅពេលអ្នកចាប់ផ្តើមប្រើប្រាស់ **Jira** ជំហានដំបូង និងសំខាន់បំផុតគឺការបង្កើត **Issues** ដែលជាឯកតាការងារ។ ការយល់ដឹងពីរបៀបបង្កើត និងគ្រប់គ្រង Issues ឱ្យមានប្រសិទ្ធភាពគឺជាគន្លឹះក្នុងការរៀបចំការងារក្រុមរបស់អ្នកឱ្យមានរបៀបរៀបរយ។

---

## 1. ការបង្កើត Issues (Tasks, Bugs, Stories)

ការបង្កើត Issue ថ្មីគឺងាយស្រួល។ អ្នកអាចបង្កើតវាបានពី Board, Backlog ឬ Dashboard។ នៅពេលបង្កើត Issue អ្នកត្រូវបំពេញព័ត៌មានសំខាន់ៗដូចជា៖
- **Project:** ជ្រើសរើស Project ដែល Issue នេះជាកម្មសិទ្ធិ។
- **Issue Type:** ជ្រើសរើសប្រភេទ Issue (ឧទាហរណ៍: **Task**, **Bug**, **Story** ឬប្រភេទផ្ទាល់ខ្លួនរបស់អ្នក)។
- **Summary:** សរសេរសេចក្តីសង្ខេបខ្លីៗដែលបង្ហាញពីខ្លឹមសារការងារ។
- **Description:** ផ្តល់ព័ត៌មានលម្អិតអំពីការងារ។
- **Reporter:** អ្នកដែលបានរាយការណ៍ ឬបង្កើត Issue នេះ។

---

## 2. ការកំណត់ Fields សំខាន់ៗ

ដើម្បីឱ្យ Issue នីមួយៗមានព័ត៌មានគ្រប់គ្រាន់សម្រាប់ក្រុមធ្វើការ អ្នកត្រូវកំណត់ **Fields** ដូចខាងក្រោម៖
- **Assignee:** ក្រុមការងារ ឬបុគ្គលដែលទទួលខុសត្រូវលើការងារនេះ។
- **Priority:** កំណត់កម្រិតសំខាន់របស់ Issue (ឧទាហរណ៍: Highest, High, Medium, Low)។
- **Labels:** បន្ថែមស្លាក (Tags) ដើម្បីងាយស្រួលក្នុងការស្វែងរក និង Filter ក្រុម Issues។
- **Due Date:** កាលបរិច្ឆេទកំណត់ដែល Issue នេះត្រូវបញ្ចប់។
- **Component:** កំណត់ថា Issue នេះជាផ្នែកមួយនៃសមាសភាគ Software ណាមួយ (ឧទាហរណ៍: Frontend, Backend)។

---

## 3. ការសហការលើ Issues

Jira មិនត្រឹមតែសម្រាប់តាមដានការងារប៉ុណ្ណោះទេ តែវាក៏ជាកន្លែងសម្រាប់សហការគ្នាផងដែរ។
- **Comments:** អ្នកអាចបន្ថែម Comments ដើម្បីពិភាក្សាលើការងារ ឬផ្តល់ព័ត៌មានបន្ថែម។
- **Attachments:** អ្នកអាច Upload ឯកសារ, រូបភាព ឬ Code snippets ដែលទាក់ទងនឹង Issue។
- **Linking Issues:** អ្នកអាចភ្ជាប់ Issues ផ្សេងៗដែលទាក់ទងគ្នា (ឧទាហរណ៍: "This bug is related to this feature")។
- **Mentions:** ប្រើ \`@\` ដើម្បី mention មិត្តរួមការងារ និងជូនដំណឹងដល់ពួកគេ។

---

## 4. ការផ្លាស់ប្តូរស្ថានភាព Issue

ការផ្លាស់ប្តូរស្ថានភាព Issue គឺជាការតាមដានវឌ្ឍនភាពនៃការងារ។ ក្នុង **Workflow** ស្តង់ដារ Issues នឹងផ្លាស់ប្តូរពី៖
- **To Do:** ការងារដែលត្រូវធ្វើ។
- **In Progress:** ការងារដែលកំពុងដំណើរការ។
- **Done:** ការងារដែលបានបញ្ចប់។

អ្នកអាចអូស Issues ពីជួរឈរមួយទៅជួរឈរមួយទៀតនៅក្នុង **Board** ដើម្បីផ្លាស់ប្តូរស្ថានភាពរបស់វា។
  `,
  examples: [
    `### ឧទាហរណ៍: ការបង្កើត Story ថ្មីសម្រាប់គម្រោង

**ស្ថានភាព:** ក្រុមការងារត្រូវការបង្កើតមុខងារ Login សម្រាប់ Website ថ្មី។

**ជំហាន:**
1. **ចុច "Create"** នៅក្នុង Jira ។
2. **ជ្រើសរើស "Story"** ជា Issue Type ។
3. **Summary:** បំពេញ "ក្នុងនាមជាអ្នកប្រើប្រាស់ ខ្ញុំចង់អាចចូលទៅកាន់គណនីរបស់ខ្ញុំបាន"។
4. **Description:** បំពេញព័ត៌មានលម្អិតដូចជា តើមុខងារនេះគួរមានអ្វីខ្លះ, លក្ខខណ្ឌតម្រូវ (Requirements), និងលំនាំ (Mockups) ។
5. **Assignee:** កំណត់ Assignee ទៅអ្នកទទួលខុសត្រូវលើការងារ។
6. **Priority:** កំណត់ Priority ទៅ "High" ព្រោះវាជាមុខងារសំខាន់។
7. **Create:** ចុច "Create" ដើម្បីបង្កើត Issue ថ្មី។
`,
  ],
  quiz: [
    {
      question: 'តើ "Summary" នៅក្នុង Jira Issue គួរតែមានលក្ខណៈដូចម្តេច?',
      options: ['លម្អិតណាស់', 'ទទេ', 'សង្ខេប និងបង្ហាញពីខ្លឹមសារការងារ', 'ជាទម្រង់ Email'],
      correct: 2,
      explanation: 'Summary គួរតែជាសេចក្តីសង្ខេបខ្លីៗដែលបង្ហាញពីខ្លឹមសារការងារ។'
    },
    {
      question: 'តើ "Assignee" នៅក្នុង Issue មានតួនាទីអ្វី?',
      options: ['អ្នកដែលបង្កើត Issue', 'អ្នកដែលទទួលខុសត្រូវលើ Issue នោះ', 'អ្នកគ្រប់គ្រង Project', 'អតិថិជន'],
      correct: 1,
      explanation: 'Assignee គឺជាបុគ្គលដែលត្រូវបានចាត់តាំងឱ្យធ្វើការលើ Issue នោះ។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែមស្លាក (Tags) ទៅ Issues បាននៅ Field មួយណា?',
      options: ['Priority', 'Reporter', 'Labels', 'Component'],
      correct: 2,
      explanation: 'អ្នកអាចប្រើ Field "Labels" ដើម្បីបន្ថែមស្លាក (Tags) ទៅ Issues របស់អ្នក។'
    },
    {
      question: 'តើ "Linking Issues" ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: ['ដើម្បីលុប Issues', 'ដើម្បីភ្ជាប់ទំនាក់ទំនង Issues ដែលទាក់ទងគ្នា', 'ដើម្បីបន្ថែមរូបភាព', 'ដើម្បីផ្លាស់ប្តូរឈ្មោះ Issue'],
      correct: 1,
      explanation: 'Linking Issues អនុញ្ញាតឱ្យអ្នកភ្ជាប់ទំនាក់ទំនងរវាង Issues ដែលទាក់ទងគ្នា។'
    },
    {
      question: 'តើ "Reporter" នៅក្នុង Issue មានន័យដូចម្តេច?',
      options: ['អ្នកដែលទទួលខុសត្រូវ', 'អ្នកដែលធ្វើការលើ Issue', 'អ្នកដែលរាយការណ៍ Issue', 'អ្នកដែលបិទ Issue'],
      correct: 2,
      explanation: 'Reporter គឺជាអ្នកដែលបានរាយការណ៍ ឬបង្កើត Issue នេះ។'
    },
    {
      question: 'ដើម្បីផ្លាស់ប្តូរស្ថានភាពរបស់ Issue នៅក្នុង Board តើអ្នកគួរធ្វើដូចម្តេច?',
      options: ['ចុចពីរដងលើ Issue', 'អូស Issues ពីជួរឈរមួយទៅជួរឈរមួយទៀត', 'ចុចលើប៊ូតុង Refresh', 'បិទកម្មវិធី Jira'],
      correct: 1,
      explanation: 'អ្នកអាចអូស Issues ពីជួរឈរមួយទៅជួរឈរមួយទៀតនៅក្នុង Board ដើម្បីផ្លាស់ប្តូរស្ថានភាពរបស់វា។'
    },
    {
      question: 'តើ Issue Type មួយណាដែលជាទូទៅត្រូវបានប្រើសម្រាប់រាយការណ៍កំហុសឆ្គង?',
      options: ['Task', 'Story', 'Epic', 'Bug'],
      correct: 3,
      explanation: 'Issue Type "Bug" ត្រូវបានប្រើដើម្បីរាយការណ៍កំហុសឆ្គងនៅក្នុង Software។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម Comments ទៅ Issues បាននៅកន្លែងណា?',
      options: ['នៅក្នុង Project Settings', 'នៅក្នុង Description', 'នៅខាងក្រោម Issue Page', 'នៅលើ Board'],
      correct: 2,
      explanation: 'អ្នកអាចបន្ថែម Comments ដើម្បីពិភាក្សាលើ Issues នៅខាងក្រោម Issue Page។'
    },
    {
      question: 'តើ "Sub-task" ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: ['ដើម្បីបង្កើត Task ធំ', 'ដើម្បីបែងចែក Task ធំមួយទៅជាកិច្ចការតូចៗ', 'ដើម្បីតាមដាន Bugs', 'ដើម្បីភ្ជាប់ទៅ Epic'],
      correct: 1,
      explanation: 'Sub-task ត្រូវបានប្រើដើម្បីបែងចែក Task ឬ Story ធំមួយទៅជាកិច្ចការតូចៗដែលអាចគ្រប់គ្រងបាន។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. បង្កើត Issues ថ្មីមួយចំនួនសម្រាប់គម្រោងដែលអ្នកបានបង្កើតក្នុងលំហាត់មុន។
2. បង្កើត **Story** មួយ និង **Task** ពីរដែលទាក់ទងនឹង Story នោះ។
3. បង្កើត **Bug** មួយ ហើយកំណត់ **Priority** របស់វាទៅជា "Highest"។
4. ប្រើប្រាស់មុខងារ **Linking Issues** ដើម្បីភ្ជាប់ Bug ទៅនឹង Story ដែលវាបានកើតឡើង។
5. ផ្លាស់ប្តូរស្ថានភាព Issue នីមួយៗពី "To Do" ទៅ "In Progress"។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. ចូលទៅកាន់ Board របស់អ្នក ហើយចុច "Create" Issue។
2. បង្កើត Story មួយ ឧទាហរណ៍ "ក្នុងនាមជាអ្នកប្រើប្រាស់ ខ្ញុំចង់អាចមើលបញ្ជីផលិតផលបាន"។
3. បង្កើត Task ពីរ (ឧទាហរណ៍: "Design product list page" និង "Implement product list backend")។
4. បង្កើត Bug ថ្មីមួយ (ឧទាហរណ៍: "Product image not loading on mobile")។ នៅក្នុង Issue page របស់ Bug នេះ កំណត់ "Priority" ទៅ "Highest"។
5. នៅក្នុង Bug Issue page របស់អ្នក ចុច "Link issue" ហើយជ្រើសរើស "is caused by" ហើយភ្ជាប់ទៅ Story ដែលអ្នកបានបង្កើត។
6. នៅលើ Board របស់អ្នក អូស Issues ពី "To Do" ទៅ "In Progress" នៅពេលអ្នកចាប់ផ្តើមធ្វើការលើវា។
    `
  }
};

export default JiraLesson1_3Content;