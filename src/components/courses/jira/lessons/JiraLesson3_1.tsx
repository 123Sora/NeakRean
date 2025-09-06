import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson3_1Content: LessonContent = {
  title: 'ការប្រើប្រាស់ Workflows',
  objectives: [
    'យល់ពីគោលគំនិត និងសារៈសំខាន់នៃ Workflows នៅក្នុង Jira',
    'ស្គាល់ពីរបៀបដែល Workflows ត្រូវបានភ្ជាប់ទៅនឹង Issue Types',
    'រៀនពីរបៀបមើល និងយល់ពី Workflow Diagram',
    'អនុវត្តន៍ការផ្លាស់ប្តូរស្ថានភាព Issue តាមរយៈ Workflow',
    'យល់ពីរបៀបដែល Workflows ជួយធានាបាននូវការងារប្រកបដោយស្តង់ដារ'
  ],
  content: `
# ការប្រើប្រាស់ Workflows

---

**Workflow** នៅក្នុង **Jira** គឺជាលំដាប់នៃស្ថានភាព (Statuses) និងការផ្លាស់ប្តូរ (Transitions) ដែល Issue មួយត្រូវឆ្លងកាត់ក្នុងកំឡុងពេលវដ្តជីវិតរបស់វា។ វាជួយធានាថាគ្រប់ការងារទាំងអស់នៅក្នុងគម្រោងរបស់អ្នកធ្វើតាមនីតិវិធីដែលបានកំណត់ទុកជាមុន។

---

## 1. តើ Workflows គឺជាអ្វី?

Workflow គឺជាផែនទីបង្ហាញផ្លូវសម្រាប់ Issue របស់អ្នក។ វាឆ្លើយសំណួរដូចជា៖
- តើ Issue អាចទៅពីស្ថានភាពមួយទៅស្ថានភាពមួយទៀតដោយរបៀបណា?
- តើអ្នកណាអាចផ្លាស់ប្តូរស្ថានភាពនោះបាន?
- តើត្រូវមានលក្ខខណ្ឌអ្វីខ្លះមុននឹងការផ្លាស់ប្តូរត្រូវបានអនុញ្ញាត?

ឧទាហរណ៍: Bug មួយនឹងផ្លាស់ប្តូរពី **To Do** ទៅ **In Progress** ទៅ **Testing** ហើយចុងក្រោយទៅ **Done**។

---

## 2. សមាសធាតុនៃ Workflows

- **Statuses (ស្ថានភាព):** តំណាងឱ្យទីតាំងបច្ចុប្បន្នរបស់ Issue ។ Statuses សំខាន់ៗមានដូចជា:
  - **To Do:** Issue ថ្មីដែលមិនទាន់បានចាប់ផ្តើម។
  - **In Progress:** Issue ដែលកំពុងត្រូវបានធ្វើការ។
  - **In Review:** Issue ដែលត្រូវបានបញ្ចប់ហើយកំពុងរង់ចាំការត្រួតពិនិត្យ។
  - **Done:** Issue ដែលបានបញ្ចប់ទាំងស្រុង។

- **Transitions (ការផ្លាស់ប្តូរ):** គឺជាស្ពានរវាង Statuses ។ Transition អនុញ្ញាតឱ្យ Issue ផ្លាស់ទីពី Status មួយទៅ Status មួយទៀត។ ឧទាហរណ៍: "Start Progress" គឺជា Transition ពី Status "To Do" ទៅ "In Progress"។

---

## 3. Workflow Schemes

**Workflow Scheme** គឺជាការភ្ជាប់រវាង Issue Types និង Workflows។ វាអនុញ្ញាតឱ្យអ្នកប្រើ Workflow ផ្សេងៗគ្នាសម្រាប់ប្រភេទ Issues ផ្សេងៗគ្នា។
- ឧទាហរណ៍: Bug (Issue Type) អាចមាន Workflow ផ្ទាល់ខ្លួនរបស់វាដែលមាន Status "In Testing" ចំណែក Story (Issue Type) មិនមានទេ ព្រោះវាទៅពី "In Progress" ទៅ "Done" ភ្លាមៗ។

---

## 4. ការមើល និងការផ្លាស់ប្តូរ Issues ក្នុង Workflow

- **Workflow Diagram:** អ្នកអាចមើល Workflow ទាំងមូលសម្រាប់ Issue មួយនៅក្នុង Jira តាមរយៈ Diagram ដែលបង្ហាញពី Statuses និង Transitions ទាំងអស់។
- **ការផ្លាស់ប្តូរស្ថានភាព:** នៅលើ Issue page របស់អ្នក អ្នកនឹងឃើញប៊ូតុងដែលអនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូរស្ថានភាពរបស់ Issue (ឧទាហរណ៍: "In Progress", "Done")។ ប៊ូតុងទាំងនេះតំណាងឱ្យ Transitions ដែលអាចធ្វើទៅបានពីស្ថានភាពបច្ចុប្បន្ន។
`,
  examples: [
    `### ឧទាហរណ៍: ការប្រើប្រាស់ Workflow សម្រាប់ Bug

**Workflow សម្រាប់ Bug អាចមានដូចតទៅ:**

1. **Open:** Bug ថ្មីត្រូវបានរាយការណ៍។
2. **Assign:** Bug ត្រូវបានចាត់តាំងឱ្យ Developer ណាម្នាក់។ (Transition: "Assign")
3. **In Progress:** Developer ចាប់ផ្តើមធ្វើការលើ Bug នោះ។ (Transition: "Start Progress")
4. **In Testing:** Developer បានជួសជុលហើយបានផ្លាស់ប្តូរវាទៅ QA Team ដើម្បីធ្វើតេស្ត។ (Transition: "Ready for QA")
5. **Done:** QA Team បានធ្វើតេស្តហើយបានបញ្ជាក់ថា Bug ត្រូវបានជួសជុល។ (Transition: "Close Bug")
`,
  ],
  quiz: [
    {
      question: 'តើអ្វីជាតួនាទីរបស់ "Transition" នៅក្នុង Workflow?',
      options: ['តំណាងឱ្យទីតាំងបច្ចុប្បន្នរបស់ Issue', 'ជាស្ពានដែលអនុញ្ញាតឱ្យ Issue ផ្លាស់ប្តូរ Status', 'ជាប្រភេទ Issue', 'ជាឈ្មោះ Project'],
      correct: 1,
      explanation: 'Transition គឺជាស្ពានរវាង Statuses ដែលអនុញ្ញាតឱ្យ Issue ផ្លាស់ប្តូរពី Status មួយទៅ Status មួយទៀត។'
    },
    {
      question: 'តើ "Workflow Scheme" ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: ['ដើម្បីលុប Workflows', 'ដើម្បីភ្ជាប់ Workflows ទៅនឹង Issue Types', 'ដើម្បីផ្លាស់ប្តូរឈ្មោះ Project', 'ដើម្បីបង្កើត Users ថ្មី'],
      correct: 1,
      explanation: 'Workflow Scheme ភ្ជាប់ Workflows ផ្សេងៗគ្នាទៅនឹងប្រភេទ Issues ផ្សេងៗគ្នា។'
    },
    {
      question: 'តើស្ថានភាពមួយណាដែលជាទូទៅតំណាងឱ្យការងារដែលបានបញ្ចប់ហើយ?',
      options: ['To Do', 'In Progress', 'In Review', 'Done'],
      correct: 3,
      explanation: 'ស្ថានភាព "Done" តំណាងឱ្យការងារដែលបានបញ្ចប់ទាំងស្រុង។'
    },
    {
      question: 'តើ Jira នឹងអនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូរ Issue ទៅ Status ណាដែលអ្នកចង់បានទេ?',
      options: ['បានជានិច្ច', 'បាន លុះត្រាតែមាន Transition ត្រូវបានកំណត់', 'មិនបានទាល់តែសោះ', 'បានតែ Admin ប៉ុណ្ណោះ'],
      correct: 1,
      explanation: 'Jira នឹងអនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូរ Status លុះត្រាតែមាន Transition ត្រូវបានកំណត់សម្រាប់ Status ទាំងនោះ។'
    },
    {
      question: 'តើ Workflow ជួយធានាអ្វីខ្លះសម្រាប់ក្រុមការងារ?',
      options: ['ផ្តល់ឱ្យពួកគេនូវការងារកាន់តែច្រើន', 'ធានាថាការងារធ្វើតាមនីតិវិធីប្រកបដោយស្តង់ដារ', 'កំណត់ថាតើអ្នកណាអាចចូលប្រើប្រាស់គម្រោងបាន', 'ជួយក្រុមក្នុងការធ្វើតេស្ត Bugs'],
      correct: 1,
      explanation: 'Workflow ជួយធានាថាគ្រប់ការងារទាំងអស់ធ្វើតាមនីតិវិធីដែលបានកំណត់។'
    },
    {
      question: 'តើ "Status" នៅក្នុង Workflow តំណាងឱ្យអ្វី?',
      options: ['ការផ្លាស់ប្តូរការងារ', 'កាលបរិច្ឆេទបញ្ចប់', 'ទីតាំងបច្ចុប្បន្នរបស់ Issue', 'ឈ្មោះអ្នកទទួលខុសត្រូវ'],
      correct: 2,
      explanation: 'Status តំណាងឱ្យទីតាំងបច្ចុប្បន្នរបស់ Issue ក្នុងដំណើរការការងារ។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. ជ្រើសរើស Issue មួយដែលអ្នកបានបង្កើតក្នុងលំហាត់មុន (ឧទាហរណ៍: Bug)។
2. ចូលទៅកាន់ Issue page របស់វា ហើយចុចមើល Diagram Workflow ។
3. ត្រឡប់ទៅ Issue page វិញ ហើយប្រើប៊ូតុង Transition ដើម្បីផ្លាស់ប្តូរស្ថានភាពរបស់វាពី "To Do" ទៅ "In Progress"។
4. បន្ទាប់មក ផ្លាស់ប្តូរវាទៅ "Done"។
5. ពិពណ៌នាពីរបៀបដែលការផ្លាស់ប្តូរនេះឆ្លុះបញ្ចាំងនៅលើ Board របស់អ្នក។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. ចូលទៅកាន់ Jira ហើយជ្រើសរើស Issue ណាមួយពី Board របស់អ្នក។
2. នៅលើ Issue page របស់អ្នក រកមើល Link "View Workflow" ដែលជាធម្មតាស្ថិតនៅក្បែរ Status ។ ចុចលើវាដើម្បីមើល Diagram ដែលបង្ហាញពីលំហូរការងារ។
3. ត្រឡប់ទៅ Issue page វិញ ហើយចុចប៊ូតុង "In Progress" ។ អ្នកនឹងឃើញ Status របស់ Issue ផ្លាស់ប្តូរ។
4. នៅពេលដែលអ្នកចុច "Done" Status នឹងផ្លាស់ប្តូរទៅ "Done"។
5. នៅលើ Board របស់អ្នក Issue នេះនឹងផ្លាស់ប្តូរពីជួរឈរ "To Do" ទៅជួរឈរ "In Progress" ហើយទីបំផុតទៅជួរឈរ "Done"។
    `
  }
};

export default JiraLesson3_1Content;