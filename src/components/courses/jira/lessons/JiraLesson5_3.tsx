import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson5_3Content: LessonContent = {
  title: 'Jira Integrations (ជាមួយ GitHub, Slack, etc.)',
  objectives: [
    'យល់ពីសារៈសំខាន់នៃ Jira Integrations',
    'ស្គាល់ពីឧបករណ៍ដ៏ពេញនិយមមួយចំនួនដែលត្រូវបានភ្ជាប់ជាមួយ Jira',
    'រៀនពីរបៀបដែល Jira អាចភ្ជាប់ជាមួយ GitHub ឬ Bitbucket',
    'យល់ពីរបៀបដែល Slack Integration ជួយសម្រួលដល់ការសហការ',
    'អនុវត្តន៍ការភ្ជាប់ Jira ជាមួយឧបករណ៍ផ្សេងៗ'
  ],
  content: `
# Jira Integrations

---

**Jira** គឺជាឧបករណ៍ដ៏មានឥទ្ធិពលតែមួយមុខ ប៉ុន្តែថាមពលរបស់វាត្រូវបានបង្កើនទ្វេដងនៅពេលដែលវាត្រូវបានភ្ជាប់ជាមួយឧបករណ៍ផ្សេងទៀតដែលក្រុមរបស់អ្នកប្រើប្រាស់។ **Jira Integrations** ជួយសម្រួលដល់លំហូរការងារ និងបង្កើនប្រសិទ្ធភាពការងាររបស់ក្រុម។

---

## 1. សារៈសំខាន់នៃ Integrations

- **បង្កើនល្បឿន:** ធ្វើឱ្យដំណើរការការងារមានលក្ខណៈស្វ័យប្រវត្តិ។
- **ការសហការប្រសើរឡើង:** ផ្តល់ព័ត៌មានទាន់ពេលទៅកាន់ឧបករណ៍ទំនាក់ទំនងរបស់ក្រុម។
- **ទិដ្ឋភាពរួម:** ភ្ជាប់ព័ត៌មានពីឧបករណ៍ផ្សេងៗគ្នាទៅក្នុង Jira Issues ។

---

## 2. GitHub/Bitbucket Integration

សម្រាប់ក្រុមអភិវឌ្ឍន៍ Software ការភ្ជាប់ **Jira** ជាមួយឧបករណ៍គ្រប់គ្រង Source Code ដូចជា **GitHub** ឬ **Bitbucket** គឺចាំបាច់។
- **តើវាដំណើរការយ៉ាងដូចម្តេច:**
  - នៅពេលដែល Developer សរសេរកូដហើយ Commit ការផ្លាស់ប្តូរទៅកាន់ Repository របស់ពួកគេ ពួកគេអាចរួមបញ្ចូល **Issue Key** របស់ Jira នៅក្នុង Commit message ។
  - Jira នឹងរកឃើញ Commit នោះហើយបង្ហាញវានៅក្នុង Issue Page ដែលពាក់ព័ន្ធ។
- **អត្ថប្រយោជន៍:**
  - អ្នកគ្រប់គ្រង Project អាចមើលឃើញថា Issues ត្រូវបានភ្ជាប់ជាមួយកូដអ្វីខ្លះ។
  - វឌ្ឍនភាពការងារអាចត្រូវបានតាមដានពី Jira ដោយមិនចាំបាច់ប្តូរទៅឧបករណ៍ផ្សេងទៀត។

---

## 3. Slack Integration

**Slack** គឺជាឧបករណ៍ទំនាក់ទំនងដ៏ពេញនិយម។ ការភ្ជាប់ Jira ជាមួយ Slack ជួយឱ្យក្រុមទទួលបានព័ត៌មានទាន់ពេល។
- **តើវាដំណើរការយ៉ាងដូចម្តេច:**
  - នៅពេលដែលមានការផ្លាស់ប្តូរនៅក្នុង Jira Issues (ឧទាហរណ៍: Status ត្រូវបានផ្លាស់ប្តូរ, Comment ត្រូវបានបន្ថែម) ការជូនដំណឹងនឹងត្រូវបានផ្ញើទៅកាន់ Slack Channel របស់ក្រុម។
  - អ្នកក៏អាចបង្កើត Issues ដោយផ្ទាល់ពី Slack ដោយប្រើ Commands ខ្លីៗ។
- **អត្ថប្រយោជន៍:**
  - ក្រុមអាចទទួលបានការជូនដំណឹងសំខាន់ៗភ្លាមៗ។
  - វាងាយស្រួលក្នុងការពិភាក្សាលើ Issues នៅក្នុង Slack ។

---

## 4. ឧទាហរណ៍ Integration ផ្សេងៗទៀត

- **Confluence:** សម្រាប់បង្កើត និងគ្រប់គ្រងឯកសាររបស់ក្រុម។
- **Google Sheets / Microsoft Excel:** សម្រាប់នាំចូល ឬនាំចេញទិន្នន័យ Jira ។
- **Figma / Sketch:** សម្រាប់ភ្ជាប់ការរចនាជាមួយ Jira Issues ។
- **Test Management Tools:** សម្រាប់ភ្ជាប់ Test cases ជាមួយ Bugs ។
`,
  examples: [
    `### ឧទាហរណ៍: ការប្រើប្រាស់ GitHub Integration

**ស្ថានភាព:** Developer ម្នាក់ឈ្មោះ John កំពុងធ្វើការលើ Bug \`PRO-123\`។

**ជំហាន:**
1. **ធ្វើការផ្លាស់ប្តូរកូដ:** John កែប្រែកូដរបស់គាត់។
2. **Commit កូដ:** គាត់ Commit ការផ្លាស់ប្តូរទៅ GitHub ដោយមាន Message ដូចខាងក្រោម៖ \`Fixes bug in login form. PRO-123\`
3. **មើលក្នុង Jira:** នៅពេលដែល John Commit នោះ Jira នឹងបង្ហាញព័ត៌មាននេះនៅលើ Bug \`PRO-123\` Page របស់វា។ វានឹងបង្ហាញថា "1 commit" ត្រូវបានភ្ជាប់ជាមួយ Issue នេះ។
`,
  ],
  quiz: [
    {
      question: 'តើ Jira Integration ជួយអ្វីខ្លះ?',
      options: ['ធ្វើឱ្យ Jira ដំណើរការយឺត', 'ធ្វើឱ្យដំណើរការការងារមានលក្ខណៈស្វ័យប្រវត្តិ និងបង្កើនប្រសិទ្ធភាព', 'ជួយបង្កើត Dashboard', 'ជួយបង្កើត Project ថ្មី'],
      correct: 1,
      explanation: 'Jira Integration ជួយបង្កើនប្រសិទ្ធភាពការងារដោយភ្ជាប់ Jira ជាមួយឧបករណ៍ផ្សេងៗ។'
    },
    {
      question: 'តើ Jira អាចភ្ជាប់ជាមួយឧបករណ៍គ្រប់គ្រង Source Code ដូចជាអ្វីខ្លះ?',
      options: ['Microsoft Word', 'Google Chrome', 'GitHub និង Bitbucket', 'Facebook'],
      correct: 2,
      explanation: 'Jira អាចភ្ជាប់ជាមួយ GitHub និង Bitbucket ដើម្បីតាមដានការផ្លាស់ប្តូរកូដ។'
    },
    {
      question: 'តើ Slack Integration ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះដល់ក្រុម?',
      options: ['ជួយពួកគេសរសេរកូដ', 'ជួយពួកគេបង្កើត Issues ថ្មីពី Slack និងទទួលបានការជូនដំណឹងទាន់ពេល', 'ជួយពួកគេបង្កើត Project', 'ជួយពួកគេធ្វើតេស្ត Bugs'],
      correct: 1,
      explanation: 'Slack Integration អនុញ្ញាតឱ្យក្រុមបង្កើត Issues ពី Slack និងទទួលបានការជូនដំណឹងអំពីការផ្លាស់ប្តូរនៅក្នុង Jira ។'
    },
    {
      question: 'តើ Commit message នៅក្នុង GitHub គួរតែមានអ្វីដើម្បីភ្ជាប់ជាមួយ Jira Issue?',
      options: ['ឈ្មោះរបស់ Issue', 'Issue Key', 'ចំនួន Bug', 'ឈ្មោះរបស់ Project'],
      correct: 1,
      explanation: 'ការរួមបញ្ចូល Issue Key (ឧទាហរណ៍: PRO-123) នៅក្នុង Commit message នឹងភ្ជាប់វាទៅ Jira Issue ដែលពាក់ព័ន្ធ។'
    },
    {
      question: 'តើ Jira អាចភ្ជាប់ជាមួយ Google Sheets បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែ Admin ប៉ុណ្ណោះ', 'បានតែជាមួយ Jira Premium'],
      correct: 0,
      explanation: 'Jira មាន Integrations សម្រាប់ Google Sheets ដើម្បីនាំចូល និងនាំចេញទិន្នន័យ។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. បើក Project របស់អ្នកហើយរក Issue ណាមួយដែលមាន Key (ឧទាហរណ៍: \`PRO-123\`)។
2. ស្រមៃថាអ្នកជា Developer ហើយអ្នកទើបតែបាន Commit កូដថ្មីទៅ GitHub/Bitbucket ។
3. ពិពណ៌នាពីរបៀបដែល Commit message របស់អ្នកនឹងត្រូវសរសេរដើម្បីភ្ជាប់ជាមួយ Issue នោះ។
4. ពិពណ៌នាពីអ្វីដែលអ្នកនឹងឃើញនៅក្នុង Jira បន្ទាប់ពី Commit នោះ។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. ចូលទៅកាន់ Jira ហើយរក Issue មួយដែលមាន Key (ឧទាហរណ៍: \`PRO-456\`)។
2. Commit message របស់អ្នកគួរតែមានលក្ខណៈដូចតទៅ៖ \`Updated the user interface. PRO-456\`។
3. បន្ទាប់ពី Commit នោះ Jira នឹងបង្ហាញព័ត៌មានពី Commit ដែលបានធ្វើនៅលើ Issue Page របស់ \`PRO-456\` ។ អ្នកនឹងឃើញ Commit hash, អ្នកដែល Commit, និង Commit message ទាំងមូល។ វាក៏អាចធ្វើឱ្យ Status របស់ Issue ផ្លាស់ប្តូរដោយស្វ័យប្រវត្តិផងដែរ ប្រសិនបើអ្នកបានកំណត់រចនាសម្ព័ន្ធ Automation Rule ។
4. នេះអនុញ្ញាតឱ្យអ្នកតាមដានវឌ្ឍនភាពការងារដោយមើលឃើញការផ្លាស់ប្តូរកូដដែលទាក់ទងនឹង Issue នោះដោយផ្ទាល់នៅក្នុង Jira ។
    `
  }
};

export default JiraLesson5_3Content;