// src/components/lessons/gitlab/GitLabLesson3_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson3_1Content: LessonContent = {
  title: 'ការគ្រប់គ្រង Issues (បញ្ហា/ភារកិច្ច)',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Issue និងប្រភេទរបស់វា (Bug, Feature Request, Task)',
    'ដឹងពីរបៀបបង្កើត Issue ថ្មីក្នុង GitLab',
    'របៀបកំណត់ Assignee, Labels, Milestones, Due Date សម្រាប់ Issue',
    'របៀបប្រើប្រាស់ Quick Actions ក្នុង Issues',
    'យល់ដឹងពី Issue Board (Kanban Board) សម្រាប់តាមដានស្ថានភាពការងារ',
    'ស្គាល់ពីអត្ថប្រយោជន៍នៃការប្រើប្រាស់ Issues សម្រាប់ការគ្រប់គ្រង Project'
  ],
  content: `
# ការគ្រប់គ្រង Issues (បញ្ហា/ភារកិច្ច) 🐞💡✅

---

**Issues** នៅក្នុង GitLab គឺជាឧបករណ៍ដ៏មានឥទ្ធិពលសម្រាប់តាមដានការងារ គំនិត បញ្ហា Bug និង Feature Requests ។ ពួកវាដើរតួជាមជ្ឈមណ្ឌលកណ្តាលសម្រាប់ទំនាក់ទំនង និងការសហការរវាងសមាជិកក្រុម និង Stakeholders ។

---

## 1. តើ Issue ជាអ្វី? និងប្រភេទរបស់វា 💡

**Issue** គឺជាកំណត់ត្រាមួយនៅក្នុង GitLab ដែលតំណាងឱ្យធាតុការងារដែលអាចតាមដានបាន។ Issues អាចត្រូវបានប្រើសម្រាប់គោលបំណងផ្សេងៗគ្នា៖

* **Bug (កំហុស):** បញ្ហា ឬកំហុសនៅក្នុង Software ដែលត្រូវការការកែតម្រូវ។
* **Feature Request (សំណើមុខងារ):** គំនិត ឬមុខងារថ្មីដែលត្រូវបន្ថែមទៅ Project ។
* **Task (ភារកិច្ច):** ការងារជាក់លាក់មួយដែលត្រូវធ្វើ (ឧទាហរណ៍៖ "Update documentation", "Refactor authentication module") ។
* **Support Request (សំណើជំនួយ):** សំណួរ ឬបញ្ហាដែលអ្នកប្រើប្រាស់បានរាយការណ៍។

---

## 2. របៀបបង្កើត Issue ថ្មី ➕

អ្នកអាចបង្ផើត Issue ថ្មីតាមវិធីជាច្រើន៖

1.  **ពី Project Sidebar:** ចុច **\`Issues\` > \`New issue\`** ។
2.  **ពី Issue List Page:** ចុចប៊ូតុង **\`New issue\`** ។
3.  **ពី Merge Request:** ប្រសិនបើ MR ដោះស្រាយ Issue មួយ អ្នកអាចបង្ផើត Issue ពី MR នោះ។

**ព័ត៌មានសំខាន់ៗនៅពេលបង្ផើត Issue:**

* **Title (ចំណងជើង):** សង្ខេបអំពីបញ្ហា ឬភារកិច្ច (ឧទាហរណ៍៖ "Bug: Login button not working", "Implement user profile page") ។
* **Description (ការពិពណ៌នា):** ផ្តល់ព័ត៌មានលម្អិតអំពី Issue (ជំហានដើម្បីបង្ផើត Bug ឡើងវិញ, តម្រូវការសម្រាប់ Feature, Criteria សម្រាប់ Task) ។ Markdown ត្រូវបានគាំទ្រ។
* **Assignee (អ្នកទទួលខុសត្រូវ):** កំណត់អ្នកប្រើប្រាស់ម្នាក់ ឬច្រើននាក់ដែលទទួលខុសត្រូវលើ Issue នេះ។
* **Labels (ស្លាក):** ចាត់ថ្នាក់ Issue (ឧទាហរណ៍៖ \`bug\`, \`frontend\`, \`critical\`, \`enhancement\`) ។
* **Milestone (គោលដៅ):** ភ្ជាប់ Issue ទៅ Milestone ជាក់លាក់មួយ (ក្រុមនៃ Issues ដែលត្រូវបញ្ចប់ក្នុងរយៈពេលកំណត់) ។
* **Due Date (កាលបរិច្ឆេទកំណត់):** កំណត់កាលបរិច្ឆេទដែល Issue គួរតែត្រូវបានបញ្ចប់។
* **Weight (ទម្ងន់):** (ស្រេចចិត្ត) កំណត់ទម្ងន់ដើម្បីប៉ាន់ប្រមាណភាពស្មុគស្មាញ ឬការខិតខំប្រឹងប្រែង។
* **Confidential (សម្ងាត់):** ធីក Option នេះប្រសិនបើ Issue នេះមានព័ត៌មាន Sensitive ដែលមានតែសមាជិក Project ប៉ុណ្ណោះដែលអាចមើលឃើញ។

---

## 3. ការប្រើប្រាស់ Quick Actions ⚡

**Quick Actions** គឺជា Commands ដែលអ្នកអាចបញ្ចូលក្នុង Text Area  (Description, Comments) ដើម្បីធ្វើប្រតិបត្តិការរហ័សលើ Issue ។

* **ឧទាហរណ៍:**
    * \`\assign @username\`: កំណត់ Issue ទៅ User ។
    * \`\label ~bug ~frontend\`: បន្ថែម Labels ។
    * \`\milestone %"Sprint 1"\`: ភ្ជាប់ទៅ Milestone ។
    * \`\due 2025-07-30\`: កំណត់ Due Date ។
    * \`\close\`: បិទ Issue ។
    * \`\reopen\`: បើក Issue ឡើងវិញ។
    * \`\title New Title\`: ផ្លាស់ប្តូរចំណងជើង Issue ។

---

## 4. Issue Board (Kanban Board)  Kanban 📋

**Issue Board** គឺជា Kanban Board ដែលមើលឃើញ Issues របស់អ្នកជា Columns ។ វាងាយស្រួលសម្រាប់តាមដានស្ថានភាពការងារ និងគ្រប់គ្រង Workflow ។

* **Columns (ជួរឈរ):** ជាធម្មតាតំណាងឱ្យស្ថានភាពនៃ Issue (ឧទាហរណ៍៖ To Do, Doing, Review, Done) ។ Columns អាចត្រូវបានកំណត់ដោយ Labels ឬ Milestones ។
* **Cards (កាត):** Issue នីមួយៗត្រូវបានបង្ហាញជា Card នៅក្នុង Column មួយ។
* **Drag-and-Drop:** អ្នកអាចអូស Issues ពី Column មួយទៅ Column មួយទៀតដើម្បីផ្លាស់ប្តូរស្ថានភាពរបស់វា។
* **Filter:** អ្នកអាច Filter Issues នៅលើ Board ដោយ Assignee, Label, Milestone, ជាដើម។

**របៀបចូលប្រើ Issue Board:**
* នៅក្នុង Sidebar ខាងឆ្វេងនៃ Project របស់អ្នក ចុចលើ **\`Issues\` > \`Boards\`** ។

---
> **គន្លឹះ:** ប្រើ Issues ឱ្យបានជាប់លាប់ដើម្បីតាបានជាប់លាប់ដើម្បីតាមដានរាល់ការងារទាំងអស់នៅក្នុង Project របស់អ្នក។ នេះជួយរក្សាភាពច្បាស់លាស់ និងការទទួលខុសត្រូវ។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Dialog បង្ផើត Issue ថ្មី

នេះជាទិដ្ឋភាពនៃ Dialog នៅពេលអ្នកចុច "New issue"។

\`\`\`css
[New Issue Dialog]
-------------------------------------------------
| Title:        Bug: User registration fails    |
| Description:                                  |
|   Steps to reproduce:                         |
|   * Go to registration page.                  |
|   * Enter valid email and password.           |
|   * Click "Register" button.                  |
|   Expected: User is registered successfully.  |
|   Actual: Server returns 500 error.           |
|                                               |
| Assignee:      @alice                         |
| Labels:        ~bug ~backend ~urgent          |
| Milestone:     Sprint 3                       |
| Due Date:      2025-08-20                     |
| Weight:        4                              |
| [ ] Confidential                              |
|                                               |
| [ Create issue ] [ Cancel ]                   |
-------------------------------------------------
\`\`\`

# ឧទាហរណ៍ ២: Issue Board View

នេះជាទិដ្ឋភាពសង្ខេបនៃ Issue Board។

\`\`\`css
[Issue Board]
----------------------------------------------------------------------------------
| To Do                    | Doing                    | Done                      |
----------------------------------------------------------------------------------
| Bug: User registration   | Feature: Add search bar  | Task: Update docs         |
|   (Assignee: @alice)     |   (Assignee: @bob)       |   (Assignee: @carol)      |
|   (Label: bug)           |   (Label: feature)       |   (Label: documentation)  |
|                          |                          |                           |
| Task: Refactor API       |                          |                           |
|   (Assignee: @bob)       |                          |                           |
|   (Label: backend)       |                          |                           |
----------------------------------------------------------------------------------
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `Issue` ក្នុង GitLab គឺជាអ្វី?',
      options: [
        'ជា File Configuration',
        'ជា Commit Message',
        'ជាកំណត់ត្រាមួយដែលតំណាងឱ្យធាតុការងារដែលអាចតាមដានបាន',
        'ជាប្រភេទ CI/CD Pipeline'
      ],
      correct: 2,
      explanation: 'Issue គឺជាកំណត់ត្រាមួយនៅក្នុង GitLab ដែលតំណាងឱ្យធាតុការងារដែលអាចតាមដានបាន ដូចជា Bug, Feature Request, ឬ Task ។'
    },
    {
      question: 'តើ `Bug` គឺជាប្រភេទ Issue មួយណា?',
      options: [
        'សំណើមុខងារថ្មី',
        'ការងារជាក់លាក់មួយដែលត្រូវធ្វើ',
        'បញ្ហា ឬកំហុសនៅក្នុង Software ដែលត្រូវការការកែតម្រូវ',
        'សំណួរពីអ្នកប្រើប្រាស់'
      ],
      correct: 2,
      explanation: 'Bug គឺជាបញ្ហា ឬកំហុសនៅក្នុង Software ដែលត្រូវការការកែតម្រូវ�।'
    },
    {
      question: 'តើ `Feature Request` គឺជាប្រភេទ Issue មួយណា?',
      options: [
        'បញ្ហាដែលត្រូវដោះស្រាយ',
        'គំនិត ឬមុខងារថ្មីដែលត្រូវបន្ថែមទៅ Project',
        'ការងារដែលបានបញ្ចប់',
        'សំណួរអំពីការប្រើប្រាស់'
      ],
      correct: 1,
      explanation: 'Feature Request គឺជាគំនិត ឬមុខងារថ្មីដែលត្រូវបន្ថែមទៅ Project ។'
    },
    {
      question: 'តើ `Assignee` ក្នុង Issue ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់អ្នកបង្ផើត Issue',
        'ដើម្បីកំណត់អ្នកប្រើប្រាស់ម្នាក់ ឬច្រើននាក់ដែលទទួលខុសត្រូវលើ Issue នេះ',
        'ដើម្បីកំណត់កាលបរិច្ឆេទកំណត់',
        'ដើម្បីចាត់ថ្នាក់ Issue'
      ],
      correct: 1,
      explanation: 'Assignee ត្រូវបានប្រើដើម្បីកំណត់អ្នកប្រើប្រាស់ម្នាក់ ឬច្រើននាក់ដែលទទួលខុសត្រូវលើ Issue នេះ។'
    },
    {
      question: 'តើ `Labels` ក្នុង Issue ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់អ្នកទទួលខុសត្រូវ',
        'ដើម្បីភ្ជាប់ Issue ទៅ Milestone',
        'ដើម្បីចាត់ថ្នាក់ Issue (ឧទាហរណ៍៖ bug, frontend, critical)',
        'ដើម្បីកំណត់កាលបរិច្ឆេទកំណត់'
      ],
      correct: 2,
      explanation: 'Labels ត្រូវបានប្រើដើម្បីចាត់ថ្នាក់ Issue (ឧទាហរណ៍៖ `bug`, `frontend`, `critical`, `enhancement`) ។'
    },
    {
      question: 'តើ `Milestone` ក្នុង Issue គឺជាអ្វី?',
      options: [
        'ជាប្រភេទ Issue',
        'ជាក្រុមនៃ Issues ដែលត្រូវបញ្ចប់ក្នុងរឯៈពេលកំណត់',
        'ជា User ដែលបានបង្ផើត Issue',
        'ជា Commit ID'
      ],
      correct: 1,
      explanation: 'Milestone គឺជាក្រុមនៃ Issues ដែលត្រូវបញ្ចប់ក្នុងរយៈពេលកំណត់។'
    },
    {
      question: 'តើ `Due Date` ក្នុង Issue ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់កាលបរិច្ឆេទដែល Issue ត្រូវបានបង្ផើត',
        'ដើម្បីកំណត់កាលបរិច្ឆេទដែល Issue គួរតែត្រូវបានបញ្ចប់',
        'ដើម្បីកំណត់កាលបរិច្ឆេទដែល Issue ត្រូវបានបិទ',
        'ដើម្បីកំណត់កាលបរិច្ឆេទដែល Issue ត្រូវបានបើកឡើងវិញ'
      ],
      correct: 1,
      explanation: 'Due Date ត្រូវបានប្រើដើម្បីកំណត់កាលបរិច្ឆេទដែល Issue គួរតែត្រូវបានបញ្ចប់។'
    },
    {
      question: 'តើ `Quick Actions` គឺជាអ្វី?',
      options: [
        'Commands ដែលអ្នកអាចបញ្ចូលក្នុង Text Area ដើម្បីធ្វើប្រតិបត្តិការរហ័សលើ Issue',
        'Commands ដែលត្រូវបានប្រើដើម្បីបង្ផើត Issue ថ្មី',
        'Commands ដែលត្រូវបានប្រើដើម្បីលុប Issue',
        'Commands ដែលត្រូវបានប្រើដើម្បីមើល Issue History'
      ],
      correct: 0,
      explanation: 'Quick Actions គឺជា Commands ដែលអ្នកអាចបញ្ចូលក្នុង Text Area (Description, Comments) ដើម្បីធ្វើប្រតិបត្តិការរហ័សលើ Issue ។'
    },
    {
      question: 'តើ `\assign @username` Quick Action ធ្វើអ្វី?',
      options: [
        'លុប Issue',
        'កំណត់ Issue ទៅ User',
        'បិទ Issue',
        'បើក Issue ឡើងវិញ'
      ],
      correct: 1,
      explanation: '`\assign @username` Quick Action កំណត់ Issue ទៅ User ដែលបានបញ្ជាក់។'
    },
    {
      question: 'តើ `Issue Board` គឺជាអ្វី?',
      options: [
        'ជាបញ្ជីនៃ Issues ទាំងអស់',
        'ជា Kanban Board ដែលមើលឃើញ Issues របស់អ្នកជា Columns',
        'ជា Report នៃ Issue Performance',
        'ជាឧបករណ៍សម្រាប់បង្ផើត Issue Templates'
      ],
      correct: 1,
      explanation: 'Issue Board គឺជា Kanban Board ដែលមើលឃើញ Issues របស់អ្នកជា Columns សម្រាប់តាមដានស្ថានភាពការងារ។'
    },
    {
      question: 'តើ `Columns` ក្នុង Issue Board ជាធម្មតាតំណាងឱ្យអ្វី?',
      options: [
        'ប្រភេទនៃ Issue',
        'អ្នកទទួលខុសត្រូវ Issue',
        'ស្ថានភាពនៃ Issue (ឧទាហរណ៍៖ To Do, Doing, Done)',
        'កាលបរិច្ឆេទកំណត់ Issue'
      ],
      correct: 2,
      explanation: 'Columns ក្នុង Issue Board ជាធម្មតាតំណាងឱ្យស្ថានភាពនៃ Issue (ឧទាហរណ៍៖ To Do, Doing, Review, Done) ។'
    },
    {
      question: 'តើអ្នកអាចអូស Issues ពី Column មួយទៅ Column មួយទៀតនៅក្នុង Issue Board បានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Admin ប៉ុណ្ណោះ', 'តែសម្រាប់ Public Boards ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចអូស Issues ពី Column មួយទៅ Column មួយទៀតដើម្បីផ្លាស់ប្តូរស្ថានភាពរបស់វា។'
    },
    {
      question: 'តើ `Confidential` Option ក្នុង Issue ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីលាក់ Issue ពីអ្នកប្រើប្រាស់ទាំងអស់',
        'ដើម្បីសម្គាល់ Issue ថាមានព័ត៌មាន Sensitive ដែលមានតែសមាជិក Project ប៉ុណ្ណោះដែលអាចមើលឃើញ',
        'ដើម្បីការពារ Issue ពីការកែប្រែ',
        'ដើម្បីកំណត់ Issue ជា Priority ខ្ពស់'
      ],
      correct: 1,
      explanation: 'Confidential Option ត្រូវបានប្រើដើម្បីសម្គាល់ Issue ថាមានព័ត៌មាន Sensitive ដែលមានតែសមាជិក Project ប៉ុណ្ណោះដែលអាចមើលឃើញ�।'
    },
    {
      question: 'តើ `\close` Quick Action ធ្វើអ្វី?',
      options: [
        'បើក Issue',
        'បិទ Issue',
        'លុប Issue',
        'ផ្លាស់ប្តូរចំណងជើង Issue'
      ],
      correct: 1,
      explanation: '`\close` Quick Action បិទ Issue ។'
    },
    {
      question: 'តើ `Weight` ក្នុង Issue ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ទម្ងន់របស់ File',
        'ដើម្បីប៉ាន់ប្រមាណភាពស្មុគស្មាញ ឬការខិតខំប្រឹងប្រែងរបស់ Issue',
        'ដើម្បីកំណត់ចំនួនអ្នកទទួលខុសត្រូវ',
        'ដើម្បីកំណត់ចំនួន Comments'
      ],
      correct: 1,
      explanation: 'Weight ត្រូវបានប្រើដើម្បីប៉ាន់ប្រមាណភាពស្មុគស្មាញ ឬការខិតខំប្រឹងប្រែងរបស់ Issue ។'
    },
    {
      question: 'តើអ្នកអាចបង្ផើត Issue ពី Merge Request បានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែប្រសិនបើ MR មាន Conflicts', 'តែប្រសិនបើ MR ត្រូវបាន Merge'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ប្រសិនបើ MR ដោះស្រាយ Issue មួយ អ្នកអាចបង្ផើត Issue ពី MR នោះ�।'
    },
    {
      question: 'តើ `Issue` អាចត្រូវបានប្រើដើម្បីតាមដាន `Bug` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Feature Requests ប៉ុណ្ណោះ', 'តែសម្រាប់ Tasks ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Issue អាចត្រូវបានប្រើដើម្បីតាមដាន Bug ។'
    },
    {
      question: 'តើ `Markdown` ត្រូវបានគាំទ្រនៅក្នុង Description របស់ Issue ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Title ប៉ុណ្ណោះ', 'តែសម្រាប់ Quick Actions ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Markdown ត្រូវបានគាំទ្រនៅក្នុង Description របស់ Issue ។'
    },
    {
      question: 'តើ `Issue Board` ត្រូវបានគេស្គាល់ផងដែរថាជាអ្វី?',
      options: [
        'Scrum Board',
        'Kanban Board',
        'Agile Board',
        'Waterfall Board'
      ],
      correct: 1,
      explanation: 'Issue Board ត្រូវបានគេស្គាល់ផងដែរថាជា Kanban Board ។'
    },
    {
      question: 'តើ `\label ~bug ~frontend` Quick Action ធ្វើអ្វី?',
      options: [
        'លុប Labels',
        'ផ្លាស់ប្តូរឈ្មោះ Labels',
        'បន្ថែម Labels `bug` និង `frontend` ទៅ Issue',
        'បង្ហាញ Labels ទាំងអស់'
      ],
      correct: 2,
      explanation: '`\label ~bug ~frontend` Quick Action បន្ថែម Labels `bug` និង `frontend` ទៅ Issue ។'
    }
  ],
  lab: {
    task: `
បង្ផើត និងគ្រប់គ្រង Issues ក្នុង GitLab UI៖
* បង្ផើត Project ថ្មីមួយ។
* បង្ផើត Issues ពីរដោយប្រើ Quick Actions។
* បង្ផើត Issue Board និងរៀបចំ Issues។
* ផ្ទៀងផ្ទាត់ការកំណត់។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. **ចូលទៅ GitLab និងបង្ផើត Project**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្ផើត Project ថ្មីឈ្មោះ **'issue-tracker-lab'** ជាមួយ **Visibility Level** ជា **Public** និងធីក Option **Initialize repository with a README**។
2. **បង្ផើត Issue ទីមួយ (Bug)**:
   * ចូលទៅ **Issues > List** នៅក្នុង Sidebar នៃ Project។
   * ចុច **New issue**។
   * **Title**: "Bug: User session timeout error"
   * **Description**:
     \`\`\`markdown
     ## Steps to reproduce:
     * Log in with valid credentials.
     * Stay idle for 30 minutes.
     * Try to access a protected page.
     ## Expected behavior:
     User should be prompted to re-login.
     ## Actual behavior:
     Application crashes with a timeout error.
     /assign @your-username
     /label ~bug ~backend ~urgent
     /due 2025-08-25
     \`\`\`
     ជំនួស **@your-username** ជាមួយ Username GitLab របស់អ្នក។
   * ចុច **Create issue**។
   * ផ្ទៀងផ្ទាត់ថា Assignee, Labels (**bug**, **backend**, **urgent**), និង Due Date (**2025-08-25**) ត្រូវបានកំណត់។
3. **បង្ផើត Issue ទីពីរ (Feature)**:
   * ចុច **New issue** ម្តងទៀត។
   * **Title**: "Feature: Add user profile avatar"
   * **Description**:
     \`\`\`markdown
     This feature allows users to upload a profile avatar.
     ## Acceptance Criteria:
     * Users can upload an image in settings.
     * Image is displayed on the profile page.
     * Image size is limited to 2MB.
     /assign @your-username
     /label ~feature ~frontend
     /milestone %"Sprint 3"
     /weight 4
     \`\`\`
     ជំនួស **@your-username** ជាមួយ Username GitLab លနស់អ្នក។
   * ចុច **Create issue**។
   * ផ្ទៀងផ្ទាត់ថា Assignee, Labels (**feature**, **frontend**), Milestone (**Sprint 3**), និង Weight (**4**) ត្រូវបានកំណត់។
4. **ប្រើប្រាស់ Issue Board**:
   * ចូលទៅ **Issues > Boards** នៅក្នុង Sidebar។
   * បង្ផើត List ថ្មីមួយដោយចុច **Create list**, ជ្រើសរើស **Label**, ហើយជ្រើស **bug**។ ចុច **Add to board**។
   * បង្ផើត List មួយទៀតសម្រាប់ Label **feature**។
   * អូស Issue "Bug: User session timeout error" ទៅ Column **bug**។
   * អូស Issue "Feature: Add user profile avatar" ទៅ Column **feature**។
   * ផ្ទៀងផ្ទាត់ថា Issues ត្រូវបានរៀបចំនៅក្នុង Columns ត្រឹមត្រូវ។
`,
    solution: `
# ដំណោះស្រាយ៖ ការគ្រប់គ្រង Issues ក្នុង GitLab

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១: ចូលទៅ GitLab និងបង្ផើត Project
អ្នកបានចូលទៅ **GitLab.com** និងបង្ផើត Project ថ្មីឈ្មោះ **issue-tracker-lab** ជាមួយ **Visibility Level** ជា **Public** និង Initialize ជាមួយ **README**។

## ជំហានទី ២: បង្ផើត Issue ទីមួយ (Bug)
អ្នកបានបង្ផើត Issue ដំបូងជាមួយខ្លឹមសារដូចខាងក្រោម៖
\`\`\`markdown
Title: Bug: User session timeout error
Description:
## Steps to reproduce:
* Log in with valid credentials.
* Stay idle for 30 minutes.
* Try to access a protected page.
## Expected behavior:
User should be prompted to re-login.
## Actual behavior:
Application crashes with a timeout error.
/assign @your-username
/label ~bug ~backend ~urgent
/due 2025-08-25
\`\`\`
អ្នកបានផ្ទៀងផ្ទាត់ថា៖
* **Assignee**: កំណត់ទៅខ្លួនអ្នក (@your-username)
* **Labels**: **bug**, **backend**, **urgent**
* **Due Date**: **2025-08-25**

## ជំហានទី ៣: បង្ផើត Issue ទីពីរ (Feature)
អ្នកបានបង្ផើត Issue ទីពីរជាមួយខ្លឹមសារដូចខាងក្រោម៖
\`\`\`markdown
Title: Feature: Add user profile avatar
Description:
This feature allows users to upload a profile avatar.
## Acceptance Criteria:
* Users can upload an image in settings.
* Image is displayed on the profile page.
* Image size is limited to 2MB.
/assign @your-username
/label ~feature ~frontend
/milestone %"Sprint 3"
/weight 4
\`\`\`
អ្នកបានផ្ទៀងផ្ទាត់ថា៖
* **Assignee**: កំណត់ទៅខ្លួនអ្នក (@your-username)
* **Labels**: **feature**, **frontend**
* **Milestone**: **Sprint 3**
* **Weight**: **4**

## ជំហានទី ៤: ប្រើប្រាស់ Issue Board
អ្នកបានចូលទៅ **Issues > Boards** និង៖
* បង្ផើត Lists សម្រាប់ Labels **bug** និង **feature**។
* អូស Issue "Bug: User session timeout error" ទៅ Column **bug**។
* អូស Issue "Feature: Add user profile avatar" ទៅ Column **feature**។

## លទ្ធផលផ្ទៀងផ្ទាត់
នៅក្នុង **Project Overview Page** អ្នកអាចមើលឃើញ៖
* **Project Name**: **issue-tracker-lab**
* **Issues**:
  * "Bug: User session timeout error" (Labels: **bug**, **backend**, **urgent**, Due Date: **2025-08-25**)
  * "Feature: Add user profile avatar" (Labels: **feature**, **frontend**, Milestone: **Sprint 3**, Weight: **4**)
* **Issue Board**:
  * Column **bug**: មាន Issue "Bug: User session timeout error"
  * Column **feature**: មាន Issue "Feature: Add user profile avatar"

លំហាត់នេះបានជួយអ្នកឱ្យស្គាល់ពីការបង្ផើត និងគ្រប់គ្រង Issues ក្នុង GitLab UI ដោយប្រើ Quick Actions និង Issue Board។
`
  }
};

export default GitLabLesson3_1Content;
