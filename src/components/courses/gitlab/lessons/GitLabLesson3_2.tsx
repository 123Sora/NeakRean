// src/components/lessons/gitlab/GitLabLesson3_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson3_2Content: LessonContent = {
  title: 'Labels, Milestones, និង Boards',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Labels និងរបៀបបង្កើត/ប្រើប្រាស់ពួកវាសម្រាប់ការចាត់ថ្នាក់ Issues/MRs',
    'របៀបកំណត់ Milestones សម្រាប់គ្រប់គ្រង Workload តាមពេលវេលា',
    'របៀបភ្ជាប់ Issues និង Merge Requests ទៅ Labels និង Milestones',
    'របៀបបង្ផើត និង Customizing Issue Boards សម្រាប់ Agile Workflow (To Do, Doing, Done)',
    'របៀបប្រើប្រាស់ Filter នៅលើ Issue Boards ដើម្បីមើលការងារជាក់លាក់',
    'ស្គាល់ពីរបៀបដែល Labels, Milestones, និង Boards ធ្វើការរួមគ្នាសម្រាប់ការគ្រប់គ្រង Project ប្រកបដោយប្រសិទ្ធភាព'
  ],
  content: `
# Labels, Milestones, និង Boards 🏷️🗓️📋

---

Labels, Milestones, និង Boards គឺជាឧបករណ៍គ្រប់គ្រង Project ដ៏សំខាន់នៅក្នុង GitLab ដែលជួយអ្នករៀបចំ និងតាមដានការងាររបស់អ្នកប្រកបដោយប្រសិទ្ធភាព។ ពួកវាអនុញ្ញាតឱ្យអ្នកចាត់ថ្នាក់ Issues និង Merge Requests, កំណត់គោលដៅពេលវេលា, និងមើលឃើញ Workflow របស់ក្រុម។

---

## 1. Labels: ការបង្ផើត និងប្រើប្រាស់ Labels សម្រាប់ចាត់ថ្នាក់ Issues/MRs 🏷️

**Labels** គឺជា Tags ដែលអាចបត់បែនបានដែលអ្នកអាចភ្ជាប់ទៅ Issues, Merge Requests, និង Epics ដើម្បីចាត់ថ្នាក់ និងរៀបចំពួកវា។

* **គោលបំណង:**
    * **Categorization (ការចាត់ថ្នាក់):** បង្ហាញប្រភេទការងារ (ឧទាហរណ៍៖ \`bug\`, \`feature\`, \`documentation\`) ។
    * **Priority (អាទិភាព):** កំណត់អាទិភាព (ឧទាហរណ៍៖ \`critical\`, \`high\`, \`medium\`) ។
    * **Area (ផ្នែក):** បង្ហាញផ្នែកនៃ Codebase (ឧទាហរណ៍៖ \`frontend\`, \`backend\`, \`database\`) ។
    * **Workflow Status (ស្ថានភាព Workflow):** ប្រើសម្រាប់ Issue Boards (ឧទាហរណ៍៖ \`To Do\`, \`Doing\`, \`Review\`, \`Done\`) ។
* **ការបង្ផើត Labels:**
    1.  នៅក្នុង Project ឬ Group របស់អ្នក ចុច **\`Issues\` > \`Labels\`** ។
    2.  ចុចប៊ូតុង **\`New label\`** ។
    3.  បញ្ចូល **Name** (ឧទាហរណ៍៖ \`bug\`) និង **Description** (ស្រេចចិត្ត) ។
    4.  ជ្រើសរើស **Color** ។
    5.  ចុច **\`Create label\`** ។
* **ការប្រើប្រាស់ Labels:**
    * នៅពេលបង្ផើត ឬកែប្រែ Issue/MR អ្នកអាចជ្រើសរើស Labels ពី Dropdown ។
    * ប្រើ Quick Actions (ឧទាហរណ៍៖ \`/label ~bug ~frontend\`) ។
* **Scoped Labels:** (កម្រិតខ្ពស់) អនុញ្ញាតឱ្យអ្នកធានាថាមានតែ Label មួយប៉ុណ្ណោះពីក្រុមជាក់លាក់មួយអាចត្រូវបានអនុវត្តទៅ Issue/MR (ឧទាហរណ៍៖ \`workflow::To Do\`, \`workflow::Doing\`) ។

---

## 2. Milestones: ការកំណត់ Milestones សម្រាប់គ្រប់គ្រង Workload តាមពេលវេលា 🗓️

**Milestones** គឺជាគោលដៅដែលមានពេលវេលាកំណត់ ដែលអ្នកអាចភ្ជាប់ Issues និង Merge Requests ទៅ។ ពួកវាជួយក្នុងការរៀបចំផែនការ និងតាមដានវឌ្ឍនភាពឆ្ពោះទៅរកគោលដៅជាក់លាក់។

* **គោលបំណង:**
    * **Time-boxing (កំណត់ពេលវេលា):** សម្រាប់ Sprints, Releases, ឬ Phases របស់ Project ។
    * **Progress Tracking (តាមដានវឌ្ឍនភាព):** មើលភាគរយនៃ Issues ដែលបានបញ្ចប់ក្នុង Milestone មួយ។
    * **Reporting (ការរាយការណ៍):** ផ្តល់ទិដ្ឋភាពសង្ខេបនៃអ្វីដែលត្រូវធ្វើ និងអ្វីដែលបានបញ្ចប់។
* **ការបង្ផើត Milestones:**
    1.  នៅក្នុង Project ឬ Group របស់អ្នក ចុច **\`Issues\` > \`Milestones\`** ។
    2.  ចុចប៊ូតុង **\`New milestone\`** ។
    3.  បញ្ចូល **Title** (ឧទាហរណ៍៖ \`Sprint 1\`, \`Release v1.0\`) ។
    4.  (ស្រេចចិត្ត) បន្ថែម **Description**, **Start date**, និង **Due date** ។
    5.  ចុច **\`Create milestone\`** ។
* **ការប្រើប្រាស់ Milestones:**
    * នៅពេលបង្ផើត ឬកែប្រែ Issue/MR អ្នកអាចភ្ជាប់វាទៅ Milestone ពី Dropdown ។
    * ប្រើ Quick Actions (ឧទាហរណ៍៖ \`/milestone %"Sprint 1"\`) ។
* **Milestone View:** នៅក្នុង Milestone Page អ្នកអាចមើលបញ្ជី Issues និង MRs ដែលបានភ្ជាប់ទៅ Milestone នោះ រួមជាមួយនឹង Progress Bar ។

---

## 3. Issue Boards: ការបង្ផើត និង Customizing Issue Boards សម្រាប់ Agile Workflow (To Do, Doing, Done) 📋

**Issue Boards** គឺជា Kanban Boards ដែលមើលឃើញ Issues របស់អ្នកជា Cards នៅក្នុង Columns ។ ពួកវាល្អឥតខ្ចោះសម្រាប់ការអនុវត្តន៍ Agile Methodologies ដូចជា Scrum ឬ Kanban ។

* **របៀបចូលប្រើ Issue Board:**
    * នៅក្នុង Sidebar ខាងឆ្វេងនៃ Project របស់អ្នក ចុចលើ **\`Issues\` > \`Boards\`** ។
* **Columns (Lists):**
    * **Default Lists:**
        * **Open:** Issues ទាំងអស់ដែលមិនទាន់បានបិទ។
        * **Closed:** Issues ទាំងអស់ដែលបានបិទ។
    * **Label Lists:** បង្ផើត Column ដោយផ្អែកលើ Label ជាក់លាក់ (ឧទាហរណ៍៖ \`To Do\`, \`Doing\`, \`Review\`, \`Done\`, \`Bug\`) ។
    * **Assignee Lists:** បង្ផើត Column សម្រាប់ Assignee ជាក់លាក់មួយ។
    * **Milestone Lists:** បង្ផើត Column សម្រាប់ Milestone ជាក់លាក់មួយ។
* **ការបង្ផើត Lists:**
    1.  នៅលើ Issue Board ចុចប៊ូតុង **\`Create list\`** ។
    2.  ជ្រើសរើសប្រភេទ List (Label, Assignee, Milestone) ។
    3.  ជ្រើសរើស Label/Assignee/Milestone ដែលអ្នកចង់ប្រើសម្រាប់ Column នោះ។
* **Customizing Boards:**
    * **Scope:** អ្នកអាចកំណត់ Scope នៃ Board ដើម្បីបង្ហាញតែ Issues សម្រាប់ Assignee, Label, ឬ Milestone ជាក់លាក់មួយ។
    * **Ordering:** អូស Columns ឡើងវិញដើម្បីរៀបចំលំដាប់លំដោយ។
    * **Drag-and-Drop:** អូស Issues Cards រវាង Columns ដើម្បីផ្លាស់ប្តូរស្ថានភាពរបស់វា (ឧទាហរណ៍៖ អូស Issue ពី "To Do" ទៅ "Doing" នឹងបន្ថែម/លុប Label ដែលត្រូវគ្នា) ។

---
> **គន្លឹះ:** ប្រើប្រាស់ Labels, Milestones, និង Boards រួមគ្នាដើម្បីបង្ផើតប្រព័ន្ធគ្រប់គ្រង Project ដែលមានលក្ខណៈទូលំទូលាយ និងមើលឃើញច្បាស់។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការបង្ផើត Label ថ្មី

នេះជាទិដ្ឋភាពនៃ Dialog បង្ផើត Label ថ្មី។

\`\`\`html
[New Label Dialog]
-------------------------------------------------
| Name:        [ critical ]                       |
| Description: [ High-priority issues ]           |
| Color:       [ #FF0000 ▼ ]                      |
|                                                 |
| [ Create label ] [ Cancel ]                     |
-------------------------------------------------
\`\`\`

# ឧទាហរណ៍ ២: ការបង្ផើត Milestone ថ្មី

នេះជាទិដ្ឋភាពនៃ Dialog បង្ផើត Milestone ថ្មី។

\`\`\`html
[New Milestone Dialog]
-------------------------------------------------
| Title:        [ Release v2.0 ]                  |
| Description:  [ Core features for v2.0 ]        |
| Start date:   [ 2025-08-01 ▼ ]                  |
| Due date:     [ 2025-08-31 ▼ ]                  |
|                                                 |
| [ Create milestone ] [ Cancel ]                 |
-------------------------------------------------
\`\`\`

# ឧទាហរណ៍ ៣: Issue Board ជាមួយ Custom Columns

នេះជាទិដ្ឋភាពសង្ខេបនៃ Issue Board ដែលមាន Columns កំណត់ដោយ Labels។

\`\`\`html
[Issue Board with Custom Columns]
---------------------------------------------------------------------------------
| To Do                    | Doing                    | Done                     |
---------------------------------------------------------------------------------
| Bug: API rate limit      | Feature: Add dashboard   | Task: Update README      |
|   (Assignee: @alice)     |   (Assignee: @bob)       |   (Assignee: @carol)     |
|   (Label: bug)           |   (Label: feature)       |   (Label: documentation) |
|                          |                          |                          |
| Task: Optimize DB query  |                          |                          |
|   (Assignee: @bob)       |                          |                          |
|   (Label: backend)       |                          |                          |
---------------------------------------------------------------------------------
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `Labels` ក្នុង GitLab ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់អ្នកទទួលខុសត្រូវ Issue',
        'ដើម្បីចាត់ថ្នាក់ Issue និង Merge Request',
        'ដើម្បីកំណត់កាលបរិច្ឆេទកំណត់',
        'ដើម្បីបង្ផើត User Accounts'
      ],
      correct: 1,
      explanation: 'Labels គឺជា Tags ដែលអាចបត់បែនបានដែលអ្នកអាចភ្ជាប់ទៅ Issues, Merge Requests, និង Epics ដើម្បីចាត់ថ្នាក់ និងរៀបចំពួកវា។'
    },
    {
      question: 'តើ `Milestones` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់អាទិភាព Issue',
        'ដើម្បីគ្រប់គ្រង workload តាមពេលវេលា និងតាមដានវឌ្ឍនភាពឆ្ពោះទៅរកគោលដៅជាក់លាក់',
        'ដើម្បីចាត់ថ្នាក់ Issues',
        'ដើម្បីបង្ផើត Issue Board'
      ],
      correct: 1,
      explanation: 'Milestones គឺជាគោលដៅដែលមានពេលវេលាកំណត់ ដែលអ្នកអាចភ្ជាប់ Issues និង Merge Requests ទៅ ដើម្បីជួយក្នុងការរៀបចំផែនការ និងតាមដានវឌ្ឍនភាព។'
    },
    {
      question: 'តើ `Issue Boards` គឺជាអ្វី?',
      options: [
        'ជាបញ្ជីនៃ Issues ទាំងអស់',
        'ជា Kanban Boards ដែលមើលឃើញ Issues របស់អ្នកជា Cards នៅក្នុង Columns',
        'ជា Report នៃ Issue Performance',
        'ជាឧបករណ៍សម្រាប់បង្ផើត Issue Templates'
      ],
      correct: 1,
      explanation: 'Issue Boards គឺជា Kanban Boards ដែលមើលឃើញ Issues របស់អ្នកជា Cards នៅក្នុង Columns ។'
    },
    {
      question: 'តើ `Scoped Labels` អនុញ្ញាតឱ្យអ្នកធ្វើអ្វី?',
      options: [
        'បង្ផើត Labels ដែលមានពណ៌តែមួយ',
        'ធានាថាមានតែ Label មួយប៉ុណ្ណោះពីក្រុមជាក់លាក់មួយអាចត្រូវបានអនុវត្តទៅ Issue/MR',
        'លុប Labels ដោយស្វ័យប្រវត្តិ',
        'បង្ផើត Labels ដែលមើលឃើញតែដោយ Admin'
      ],
      correct: 1,
      explanation: 'Scoped Labels អនុញ្ញាតឱ្យអ្នកធានាថាមានតែ Label មួយប៉ុណ្ណោះពីក្រុមជាក់លាក់មួយអាចត្រូវបានអនុវត្តទៅ Issue/MR (ឧទាហរណ៍៖ `workflow::To Do`, `workflow::Doing`) ។'
    },
    {
      question: 'តើអ្នកអាចភ្ជាប់ `Issues` និង `Merge Requests` ទៅ `Milestones` បានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Issues ប៉ុណ្ណោះ', 'តែសម្រាប់ Merge Requests ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចភ្ជាប់ Issues និង Merge Requests ទៅ Milestones ។'
    },
    {
      question: 'តើ `Columns` ក្នុង Issue Board អាចត្រូវបានកំណត់ដោយអ្វីខ្លះ?',
      options: [
        'តែ Labels ប៉ុណ្ណោះ',
        'តែ Assignees ប៉ុណ្ណោះ',
        'តែ Milestones ប៉ុណ្ណោះ',
        'Labels, Assignees, ឬ Milestones'
      ],
      correct: 3,
      explanation: 'Columns ក្នុង Issue Board អាចត្រូវបានកំណត់ដោយ Labels, Assignees, ឬ Milestones ។'
    },
    {
      question: 'តើការអូស Issues Cards រវាង Columns នៅក្នុង Issue Board ធ្វើអ្វី?',
      options: [
        'លុប Issue',
        'ផ្លាស់ប្តូរស្ថានភាពរបស់ Issue (ឧទាហរណ៍៖ បន្ថែម/លុប Label ដែលត្រូវគ្នា)',
        'ផ្លាស់ប្តូរ Assignee របស់ Issue',
        'ផ្លាស់ប្តូរ Due Date របស់ Issue'
      ],
      correct: 1,
      explanation: 'ការអូស Issues Cards លလាង Columns នៅក្នុង Issue Board ផ្លាស់ប្តូរស្ថានភាពរបស់វា (ឧទាហរណ៍៖ អូស Issue ពី "To Do" ទៅ "Doing" នឹងបន្ថែម/លុប Label ដែលត្រូវគ្នា) ។'
    },
    {
      question: 'តើ `Milestone View` បង្ហាញអ្វីខ្លះ?',
      options: [
        'បញ្ជីនៃ Users ទាំងអស់ក្នុង Project',
        'បញ្ជី Issues និង MRs ដែលបានភ្ជាប់ទៅ Milestone នោះ រួមជាមួយនឹង Progress Bar',
        'ប្រវត្តិសាស្រ្ត Commit របស់ Project',
        'CI/CD Pipeline Status'
      ],
      correct: 1,
      explanation: 'Milestone View បង្ហាញបញ្ជី Issues និង MRs ដែលបានភ្ជាប់ទៅ Milestone នោះ រួមជាមួយនឹង Progress Bar ។'
    },
    {
      question: 'តើ `Labels` អាចត្រូវបានប្រើដើម្បីកំណត់ `Workflow Status` សម្រាប់ Issue Boards ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Priority ប៉ុណ្ណោះ', 'តែសម្រាប់ Area ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Labels អាចត្រូវបានប្រើសម្រាប់កំណត់ Workflow Status សម្រាប់ Issue Boards (ឧទាហរណ៍៖ `To Do`, `Doing`, `Review`, `Done`) ។'
    },
    {
      question: 'តើ `Milestones` ជួយក្នុងការរៀបចំផែនការសម្រាប់អ្វីខ្លះ?',
      options: [
        'តែ Bugs ប៉ុណ្ណោះ',
        'តែ Features ប៉ុណ្ណោះ',
        'Sprints, Releases, ឬ Phases របស់ Project',
        'តែ Documentation Tasks ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Milestones ជួយក្នុងការរៀបចំផែនការសម្រាប់ Sprints, Releases, ឬ Phases លနស់ Project ។'
    },
    {
      question: 'តើ `Issue Boards` ល្អឥតខ្ចោះសម្រាប់ការអនុវត្តន៍ Methodology មួយណា?',
      options: [
        'Waterfall',
        'Agile (Scrum ឬ Kanban)',
        'Big Bang',
        'Code and Fix'
      ],
      correct: 1,
      explanation: 'Issue Boards ល្អឥតខ្ចោះសម្រាប់ការអនុវត្តន៍ Agile Methodologies ដូចជា Scrum ឬ Kanban ។'
    },
    {
      question: 'តើអ្នកអាច Filter Issues នៅលើ Board ដោយអ្វីខ្លះ?',
      options: [
        'តែ Assignee ប៉ុណ្ណោះ',
        'តែ Label ប៉ុណ្ណោះ',
        'តែ Milestone ប៉ុណ្ណោះ',
        'Assignee, Label, ឬ Milestone'
      ],
      correct: 3,
      explanation: 'អ្នកអាច Filter Issues នៅលើ Board ដោយ Assignee, Label, ឬ Milestone ។'
    },
    {
      question: 'តើ `Labels` អាចត្រូវបានប្រើដើម្បីកំណត់ `Priority` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Workflow Status', 'តែសម្រាប់ Categorization'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Labels អាចត្រូវបានប្រើដើម្បីកំណត់ Priority (ឧទាហរណ៍៖ `critical`, `high`, `medium`) ។'
    },
    {
      question: 'តើ `Milestones` ផ្តល់នូវ `Progress Bar` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Issues ប៉ុណ្ណោះ', 'តែសម្រាប់ Merge Requests ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Milestone View បង្ហាញ Progress Bar ដែលបង្ហាញពីភាគរយនៃ Issues ដែលបានបញ្ចប់។'
    },
    {
      question: 'តើ `Issue Boards` ត្រូវបានចូលប្រើតាមរយៈ Sidebar ខាងឆ្វេងក្នុង Project របស់អ្នកនៅទីណា?',
      options: [
        'Repository > Files',
        'CI/CD > Pipelines',
        'Issues > Boards',
        'Settings > General'
      ],
      correct: 2,
      explanation: 'Issue Boards ត្រូវបានចូលប្រើតាមរយៈ Sidebar ខាងឆ្វេងក្នុង Project របស់អ្នកនៅ `Issues > Boards` ។'
    },
    {
      question: 'តើ `Labels` អាចត្រូវបានភ្ជាប់ទៅ `Epics` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Issues ប៉ុណ្ណោះ', 'តែសម្រាប់ Merge Requests ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Labels អាចត្រូវបានភ្ជាប់ទៅ Issues, Merge Requests, និង Epics ។'
    },
    {
      question: 'តើ `Default Lists` នៅក្នុង Issue Board គឺមានអ្វីខ្លះ?',
      options: [
        'To Do និង Doing',
        'Open និង Closed',
        'Review និង Done',
        'Bug និង Feature'
      ],
      correct: 1,
      explanation: 'Default Lists នៅក្នុង Issue Board គឺ Open និង Closed ។'
    },
    {
      question: 'តើ `Milestones` អាចមាន `Start date` និង `Due date` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Due date ប៉ុណ្ណោះ', 'តែសម្រាប់ Start date ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Milestones អាចមាន Start date និង Due date ។'
    }
  ],
  lab: {
    task: `
បង្ផើត និងគ្រប់គ្រង Labels, Milestones, និង Issue Boards ក្នុង GitLab UI:
* បង្ផើត Project ថ្មីមួយ។
* បង្ផើត Labels សម្រាប់ Workflow និងប្រភេទការងារ។
* បង្ផើត Milestone និងភ្ជាប់ Issues ទៅវា។
* បង្ផើត Issue Board និង Filter Issues។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម:

1. **ចូលទៅ GitLab និងបង្ផើត Project**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្ផើត Project ថ្មីឈ្មោះ **'workflow-organizer'** ជាមួយ **Visibility Level** ជា **Public** និងធីក Option **Initialize repository with a README**។
2. **បង្ផើត Labels**:
   * នៅក្នុង Sidebar ខាងឆ្វេង ចុចលើ **Issues > Labels**។
   * ចុច **New label** ហើយបង្ផើត Labels ខាងក្រោម:
     * **Name**: \`To Do\`, **Color**: #ADD8E6 (ខៀវស្រាល), **Description**: "Tasks to be started"
     * **Name**: \`Doing\`, **Color**: #FFFF00 (លឿង), **Description**: "Tasks in progress"
     * **Name**: \`Done\`, **Color**: #008000 (បៃតង), **Description**: "Completed tasks"
     * **Name**: \`bug\`, **Color**: #FF0000 (ក្រហម), **Description**: "Issues related to bugs"
     * **Name**: \`feature\`, **Color**: #0000FF (ខៀវ), **Description**: "New feature development"
3. **បង្ផើត Milestone និង Issues**:
   * **Milestone**:
     * នៅក្នុង Sidebar ចុចលើ **Issues > Milestones**។
     * ចុច **New milestone**។
     * **Title**: "Release 1.0 - Core Features"
     * **Description**: "Initial feature set for project launch"
     * **Start date**: 2025-08-01
     * **Due date**: 2025-08-15
     * ចុច **Create milestone**។
   * **Issue 1**:
     * នៅក្នុង Sidebar ចុចលើ **Issues > List**។
     * ចុច **New issue**។
     * **Title**: "Bug: Incorrect error message on form submission"
     * **Description**:
       \`\`\`markdown
       ## Steps to reproduce:
       * Navigate to form page.
       * Submit form with invalid data.
       * Observe error message.
       ## Expected:
       Clear error message indicating invalid fields.
       ## Actual:
       Generic "Error occurred" message.
       /label ~bug ~To Do
       /milestone %"Release 1.0 - Core Features"
       /assign @your-username
       \`\`\`
       ជំនួស **@your-username** ជាមួយ Username GitLab របស់អ្នក។
     * ចុច **Create issue**។
     * ផ្ទៀងផ្ទាត់ថា Labels (\`bug\`, \`To Do\`), Milestone (\`Release 1.0 - Core Features\`), និង Assignee ត្រូវបានកំណត់។
   * **Issue 2**:
     * ចុច **New issue**។
     * **Title**: "Feature: Implement search functionality"
     * **Description**:
       \`\`\`markdown
       Add a search bar to allow users to search content.
       ## Acceptance Criteria:
       * Search bar visible on homepage.
       * Search results update dynamically.
       * Support for keyword-based search.
       /label ~feature ~To Do
       /milestone %"Release 1.0 - Core Features"
       /assign @your-username
       \`\`\`
       ជំនួស **@your-username** ជាមួយ Username GitLab របស់អ្នក។
     * ចុច **Create issue**។
     * ផ្ទៀងផ្ទាត់ថា Labels (\`feature\`, \`To Do\`), Milestone (\`Release 1.0 - Core Features\`), និង Assignee ត្រូវបានកំណត់។
4. **បង្ផើត និងប្រើ Issue Board**:
   * នៅក្នុង Sidebar ចុចលើ **Issues > Boards**។
   * ចុច **Create list**, ជ្រើសរើស **Label**, ហើយបន្ថែម Lists សម្រាប់:
     * \`To Do\`
     * \`Doing\`
     * \`Done\`
   * អូស Issue "Bug: Incorrect error message on form submission" ពី Column **Open** ទៅ **To Do**។
   * អូស Issue "Feature: Implement search functionality" ពី **Open** ទៅ **To Do**។
   * អូស Issue "Feature: Implement search functionality" ពី **To Do** ទៅ **Doing**។
   * នៅផ្នែកខាងលើនៃ Board ប្រើ Filter Options:
     * Filter ដោយ **Milestone**: ជ្រើសរើស \`Release 1.0 - Core Features\`។
     * Filter ដោយ **Label**: ជ្រើសរើស \`bug\`។
   * ផ្ទៀងផ្ទាត់ថា Issues ត្រូវបានបង្ហាញត្រឹមត្រូវនៅក្នុង Columns និង Filters។
`,
    solution: `
 ដំណោះស្រាយ៖ ការប្រើប្រាស់ Labels, Milestones, និង Boards

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១: ចូលទៅ GitLab និងបង្ផើត Project
អ្នកបានចូលទៅ **GitLab.com** និងបង្ផើត Project ថ្មីឈ្មោះ **workflow-organizer** ជាមួយ **Visibility Level** ជា **Public** និង Initialize ជាមួយ **README**។

## ជំហានទី ២: បង្ផើត Labels
អ្នកបានបង្ផើត Labels ដូចខាងក្រោម៖
* \`To Do\` (#ADD8E6, "Tasks to be started")
* \`Doing\` (#FFFF00, "Tasks in progress")
* \`Done\` (#008000, "Completed tasks")
* \`bug\` (#FF0000, "Issues related to bugs")
* \`feature\` (#0000FF, "New feature development")

## ជំហានទី ៣: បង្ផើត Milestone និង Issues
**Milestone**:
\`\`\`
Title: Release 1.0 - Core Features
Description: Initial feature set for project launch
Start date: 2025-08-01
Due date: 2025-08-15
\`\`\`

**Issue 1**:
\`\`\`markdown
Title: Bug: Incorrect error message on form submission
Description:
## Steps to reproduce:
* Navigate to form page.
* Submit form with invalid data.
* Observe error message.
## Expected:
Clear error message indicating invalid fields.
## Actual:
Generic "Error occurred" message.
/label ~bug ~To Do
/milestone %"Release 1.0 - Core Features"
/assign @your-username
\`\`\`
អ្នកបានផ្ទៀងផ្ទាត់ថា Labels (\`bug\`, \`To Do\`), Milestone (\`Release 1.0 - Core Features\`), និង Assignee (@your-username) ត្រូវបានកំណត់។

**Issue 2**:
\`\`\`markdown
Title: Feature: Implement search functionality
Description:
Add a search bar to allow users to search content.
## Acceptance Criteria:
* Search bar visible on homepage.
* Search results update dynamically.
* Support for keyword-based search.
/label ~feature ~To Do
/milestone %"Release 1.0 - Core Features"
/assign @your-username
\`\`\`
អ្នកបានផ្ទៀងផ្ទាត់ថា Labels (\`feature\`, \`To Do\`), Milestone (\`Release 1.0 - Core Features\`), និង Assignee (@your-username) ត្រូវបានកំណត់។

## ជំហានទី ៤: បង្ផើត និងប្រើ Issue Board
អ្នកបានចូលទៅ **Issues > Boards** និង៖
* បង្ផើត Lists សម្រាប់ Labels \`To Do\`, \`Doing\`, និង \`Done\`។
* អូស Issue "Bug: Incorrect error message on form submission" ទៅ Column \`To Do\`។
* អូស Issue "Feature: Implement search functionality" ទៅ Column \`To Do\`, បន្ទាប់មកទៅ \`Doing\`
* Filter Board ដោយ:
  * **Milestone**: \`Release 1.0 - Core Features\` (បង្ហាញ Issues ទាំងពីរ)។
  * **Label**: \`bug\` (បង្ហាញ Issue "Bug: Incorrect error message on form submission" តែប៉ុណ្ណោះ)។

## លទ្ធផលផ្ទៀងផ្ទាត់
នៅក្នុង **Project Overview Page** អ្នកអាចមើលឃើញ៖
* **Project Name**: **workflow-organizer**
* **Labels**:
  * \`To Do\` (#ADD8E6), \`Doing\` (#FFFF00), \`Done\` (#008000), \`bug\` (#FF0000), \`feature\` (#0000FF)
* **Milestone**:
  * "Release 1.0 - Core Features" (Start: 2025-08-01, Due: 2025-08-15)
* **Issues**:
  * "Bug: Incorrect error message on form submission" (Labels: \`bug\`, \`To Do\`, Milestone: \`Release 1.0 - Core Features\`)
  * "Feature: Implement search functionality" (Labels: \`feature\`, \`Doing\`, Milestone: \`Release 1.0 - Core Features\`)
* **Issue Board**:
  * Column \`To Do\`: Issue "Bug: Incorrect error message on form submission"
  * Column \`Doing\`: Issue "Feature: Implement search functionality"
  * Column \`Done\`: ទទេ

លំហាត់នេះបានជួយអ្នកឱ្យស្គាល់ពីការបង្ផើត និងគ្រប់គ្រង Labels, Milestones, និង Issue Boards ក្នុង GitLab UI។
`
  }
};

export default GitLabLesson3_2Content;
