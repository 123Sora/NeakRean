import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson3_2Content: LessonContent = {
  title: 'ការស្វែងរក និង Filter Issues (JQL)',
  objectives: [
    'យល់ពីសារៈសំខាន់នៃការស្វែងរក Issues',
    'ស្គាល់ពីរបៀបប្រើប្រាស់ Basic Search',
    'រៀនពីរបៀបប្រើប្រាស់ Jira Query Language (JQL) សម្រាប់ Advanced Search',
    'អនុវត្តន៍ការសរសេរ JQL Queries សាមញ្ញៗ',
    'រៀនពីរបៀបរក្សាទុក និងចែករំលែក Filters'
  ],
  content: `
# ការស្វែងរក និង Filter Issues (JQL)

---

នៅពេលដែល Project របស់អ្នកមាន Issues រាប់រយឬរាប់ពាន់ ការស្វែងរក Issue ជាក់លាក់មួយអាចជាការលំបាក។ **Jira Query Language (JQL)** គឺជាភាសាដ៏មានឥទ្ធិពលដែលអនុញ្ញាតឱ្យអ្នកស្វែងរក Issues យ៉ាងលម្អិត និងច្បាស់លាស់។

---

## 1. Basic Search

Basic Search នៅក្នុង Jira គឺងាយស្រួលប្រើសម្រាប់អ្នកប្រើប្រាស់ថ្មី។ វាអនុញ្ញាតឱ្យអ្នកស្វែងរក Issues ដោយប្រើប្រាស់ Options ដែលមានស្រាប់ដូចជា៖
- **Project:** ស្វែងរក Issue នៅក្នុង Project ជាក់លាក់មួយ។
- **Issue Type:** ស្វែងរកតែ Bugs ឬ Stories ប៉ុណ្ណោះ។
- **Status:** ស្វែងរក Issues ដែលមាន Status ជា "Done" ឬ "In Progress"។
- **Assignee:** ស្វែងរក Issues ដែលត្រូវបានចាត់តាំងឱ្យអ្នកណាម្នាក់។

---

## 2. Advanced Search (JQL)

**Jira Query Language (JQL)** គឺជាភាសាសួរ (Query language) ដែលមានភាពបត់បែនខ្ពស់សម្រាប់ស្វែងរក Issues ។ JQL មិនមែនជាភាសាសរសេរកូដទេ តែវាជាភាសាសាមញ្ញដែលបង្កើតពី Fields, Operators, Keywords និង Values។

**រចនាសម្ព័ន្ធ JQL Query:**
\`\`\`
Field Operator Value
\`\`\`
- **Field:** តំណាងឱ្យព័ត៌មាននៅក្នុង Issue (ឧទាហរណ៍: \`Project\`, \`Status\`, \`Assignee\`)។
- **Operator:** ត្រូវបានប្រើដើម្បីប្រៀបធៀប Fields ជាមួយ Values (ឧទាហរណ៍: \`=\`, \`!=\`, \`>\`, \`<=\`)។
- **Value:** តម្លៃដែលអ្នកកំពុងស្វែងរក (ឧទាហរណ៍: \`"Project Name"\`, \`"Done"\`, \`"myusername"\`)។

---

## 3. ឧទាហរណ៍នៃ JQL Queries

- **ស្វែងរក Issues ទាំងអស់នៅក្នុង Project ជាក់លាក់មួយ:**
  \`\`\`
  Project = "Website"
  \`\`\`
- **ស្វែងរក Bugs ដែលមិនទាន់បានបញ្ចប់នៅក្នុង Project "Website":**
  \`\`\`
  Project = "Website" AND IssueType = Bug AND Status != Done
  \`\`\`
- **ស្វែងរក Issues ដែលត្រូវបានចាត់តាំងឱ្យខ្ញុំ:**
  \`\`\`
  Assignee = currentUser()
  \`\`\`
- **ស្វែងរក Issues ដែលត្រូវបានបង្កើតក្នុងរយៈពេល 7 ថ្ងៃចុងក្រោយ:**
  \`\`\`
  Created > "-7d"
  \`\`\`

---

## 4. ការរក្សាទុក និងការប្រើប្រាស់ Filters

នៅពេលដែលអ្នកបានបង្កើត JQL Query ដ៏មានប្រយោជន៍ អ្នកអាចរក្សាទុកវាជា **Filter** ដើម្បីប្រើប្រាស់ម្តងទៀតនៅពេលក្រោយ។
- **ការរក្សាទុក Filter:** ចុច "Save as" បន្ទាប់ពីសរសេរ Query របស់អ្នក។
- **ការចែករំលែក Filter:** អ្នកអាចចែករំលែក Filters របស់អ្នកជាមួយក្រុម ឬអ្នកដទៃ។
- **ការប្រើប្រាស់ Filter:** Filters ដែលបានរក្សាទុកអាចត្រូវបានប្រើដើម្បីបង្កើត Dashboards ឬ Boards ថ្មីដែលបង្ហាញតែ Issues ដែលអ្នកចាប់អារម្មណ៍។
`,
  examples: [
    `### ឧទាហរណ៍: ការប្រើប្រាស់ JQL សម្រាប់តាមដាន Bugs

**ស្ថានភាព:** អ្នកគ្រប់គ្រងគម្រោងចង់ដឹងថាតើ Bugs ណាខ្លះដែលត្រូវបានបង្កើតដោយក្រុមការងារថ្មីក្នុងខែនេះ។

**JQL Query:**
\`\`\`
Project = "Website" AND reporter in (new_team_user1, new_team_user2) AND created >= "2024-09-01" AND created <= "2024-09-30"
\`\`\`
**ការបកស្រាយ:**
- \`Project = "Website"\`: ស្វែងរកនៅក្នុង Project "Website"។
- \`reporter in (new_team_user1, new_team_user2)\`: ស្វែងរក Bugs ដែលបង្កើតដោយអ្នកប្រើប្រាស់ទាំងពីរនេះ។
- \`created >= "2024-09-01"\`: បង្កើតនៅឬក្រោយថ្ងៃទី 1 ខែកញ្ញា។
- \`created <= "2024-09-30"\`: បង្កើតនៅឬមុនថ្ងៃទី 30 ខែកញ្ញា។
`,
  ],
  quiz: [
    {
      question: 'តើ JQL តំណាងឱ្យអ្វី?',
      options: ['Java Query Language', 'Jira Queue List', 'Jira Query Language', 'JavaScript Query Library'],
      correct: 2,
      explanation: 'JQL តំណាងឱ្យ Jira Query Language ដែលជាភាសាសួរសម្រាប់ស្វែងរក Issues ។'
    },
    {
      question: 'តើ Basic Search មានភាពបត់បែនដូច JQL ដែរឬទេ?',
      options: ['បានពេញលេញ', 'បានតែបន្តិចបន្តួច', 'មិនបានទាល់តែសោះ', 'បានតែសម្រាប់ Bugs'],
      correct: 2,
      explanation: 'JQL មានភាពបត់បែនខ្លាំងជាង Basic Search ដែលមានមុខងារមានកំណត់។'
    },
    {
      question: 'តើ Operator "= " ក្នុង JQL ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: ['មិនស្មើគ្នា', 'ស្មើគ្នា', 'ធំជាង', 'តូចជាង'],
      correct: 1,
      explanation: 'Operator "=" ត្រូវបានប្រើដើម្បីស្វែងរក Issues ដែល Field ស្មើនឹង Value ដែលបានកំណត់។'
    },
    {
      question: 'តើ Function "currentUser()" ក្នុង JQL ប្រើសម្រាប់អ្វី?',
      options: ['ដើម្បីស្វែងរក Issues ដែល Assignee ជាអ្នកប្រើប្រាស់បច្ចុប្បន្ន', 'ដើម្បីស្វែងរក Issues ដែល Reporter ជាអ្នកប្រើប្រាស់បច្ចុប្បន្ន', 'ដើម្បីស្វែងរកអ្នកប្រើប្រាស់ទាំងអស់', 'ដើម្បីកំណត់អ្នកប្រើប្រាស់ថ្មី'],
      correct: 0,
      explanation: 'Function "currentUser()" ត្រូវបានប្រើដើម្បីស្វែងរក Issues ដែលត្រូវបានចាត់តាំងឱ្យអ្នកដែលកំពុងប្រើប្រាស់ Jira នៅពេលនោះ។'
    },
    {
      question: 'តើអ្នកអាចរក្សាទុក JQL Query ជាអ្វី?',
      options: ['Report', 'Filter', 'Workflow', 'Project'],
      correct: 1,
      explanation: 'អ្នកអាចរក្សាទុក JQL Query ដ៏មានប្រយោជន៍ជា Filter ដើម្បីប្រើប្រាស់ម្តងទៀតនៅពេលក្រោយ។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើប្រាស់ JQL?',
      options: ['វាមានល្បឿនលឿនក្នុងការបង្កើត Project', 'វាជួយឱ្យអ្នកសរសេរកូដបានល្អ', 'វាអនុញ្ញាតឱ្យមានការស្វែងរក Issues យ៉ាងលម្អិត និងច្បាស់លាស់', 'វាផ្តល់របាយការណ៍ហិរញ្ញវត្ថុ'],
      correct: 2,
      explanation: 'JQL អនុញ្ញាតឱ្យអ្នកស្វែងរក Issues យ៉ាងលម្អិតដោយប្រើប្រាស់លក្ខខណ្ឌស្មុគស្មាញ។'
    },
    {
      question: 'តើ "Field" នៅក្នុង JQL Query តំណាងឱ្យអ្វី?',
      options: ['តម្លៃដែលអ្នកកំពុងស្វែងរក', 'ព័ត៌មាននៅក្នុង Issue', 'ប្រតិបត្តិករប្រៀបធៀប', 'ប្រភេទនៃ Issues'],
      correct: 1,
      explanation: 'Field តំណាងឱ្យព័ត៌មាននៅក្នុង Issue ដូចជា Project, Status, ឬ Assignee។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. ចូលទៅកាន់ផ្នែក **Issues** របស់ Jira ។
2. ប្តូរពី Basic Search ទៅ **Advanced Search (JQL)** ។
3. សរសេរ JQL Query ដើម្បីស្វែងរក **Bugs** ទាំងអស់ដែលត្រូវបានបង្កើតដោយអ្នកនៅក្នុង Project របស់អ្នក។
4. រក្សាទុក Query នោះជា Filter ឈ្មោះថា "My Bugs"។
5. ពិពណ៌នាពីរបៀបដែល Filter នេះអាចជួយអ្នកក្នុងកិច្ចការប្រចាំថ្ងៃរបស់អ្នក។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. ចូលទៅកាន់ Jira ហើយចុច "Issues" នៅលើ Sidebar ។
2. នៅជ្រុងខាងស្តាំខាងលើនៃ Search bar ចុច "Switch to JQL"។
3. សរសេរ Query ដូចខាងក្រោម៖ \`Project = "Your Project Name" AND IssueType = Bug AND reporter = currentUser()\`។ (ត្រូវប្រាកដថាអ្នកជំនួស "Your Project Name" ទៅឈ្មោះ Project របស់អ្នក)។
4. ចុចប៊ូតុង "Save as" ហើយដាក់ឈ្មោះថា "My Bugs"។
5. Filter នេះមានប្រយោជន៍ណាស់ព្រោះវានឹងជួយអ្នករកមើល Bugs ដែលអ្នកបានរាយការណ៍យ៉ាងលឿនដោយមិនចាំបាច់សរសេរ Query ម្តងទៀត។ អ្នកអាចប្រើ Filter នេះដើម្បីបង្កើត Dashboard ឬ Board ផ្ទាល់ខ្លួនរបស់អ្នក។
    `
  }
};

export default JiraLesson3_2Content;