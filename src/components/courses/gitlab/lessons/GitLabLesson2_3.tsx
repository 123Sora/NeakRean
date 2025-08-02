// src/components/lessons/gitlab/GitLabLesson2_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson2_3Content: LessonContent = {
  title: 'Merge Requests (MRs) - ការសហការកូដ',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Merge Request (MR) និងគោលបំណងរបស់វា',
    'ដឹងពីដំណើរការបង្កើត MR (Source branch, Target branch)',
    'របៀបធ្វើ Code Review នៅក្នុង MR',
    'របៀប Comment លើ Changes ក្នុង MR',
    'យល់ដឹងពីរបៀបដោះស្រាយ Conflict (Merge Conflicts) ក្នុង MR',
    'របៀប Approve និង Merge MR',
    'ស្គាល់ពីអត្ថប្រយោជន៍នៃការប្រើប្រាស់ MRs សម្រាប់ការសហការកូដ'
  ],
  content: `
# Merge Requests (MRs) - ការសហការកូដ 🤝📝

---

**Merge Request (MR)** គឺជាបេះដូងនៃការសហការកូដនៅក្នុង GitLab ។ វាគឺជាសំណើផ្លូវការមួយដើម្បីបញ្ចូល Changes ពី Branch មួយ (Source Branch) ទៅកាន់ Branch មួយទៀត (Target Branch) ។ មុនពេល Changes ត្រូវបានបញ្ចូល ពួកគេឆ្លងកាត់ដំណើរការ Code Review, Testing, និង Approval ។

---

## 1. តើ Merge Request (MR) ជាអ្វី? 💡

* **គោលបំណង:**
    * **Code Review:** អនុញ្ញាតឱ្យសមាជិកក្រុមផ្សេងទៀតពិនិត្យមើល Code Changes របស់អ្នក ផ្តល់មតិកែលម្អ និងស្នើការកែលម្អ។
    * **Testing:** Trigger CI/CD Pipelines ដើម្បី Build និង Test Code Changes ។
    * **Approval:** តម្រូវឱ្យមានការអនុម័តពី Reviewers មុនពេល Code ត្រូវបានបញ្ចូលទៅក្នុង Branch មេ (ឧទាហរណ៍៖ \`main\`) ។
    * **Discussion:** ផ្តល់វេទិកាកណ្តាលសម្រាប់ពិភាក្សាអំពី Changes ។
* **Workflow:** ជាធម្មតា Developers បង្កើត Branch ថ្មីសម្រាប់មុខងារ ឬ Bug Fix ធ្វើការ Changes លើ Branch នោះ ហើយបន្ទាប់មកបង្កើត MR ដើម្បីបញ្ចូល Changes របស់ពួកគេទៅក្នុង Branch មេ។

---

## 2. ដំណើរការបង្កើត MR (Source branch, Target branch) ➡️

អ្នកអាចបង្កើត MR តាមវិធីជាច្រើន៖

1.  **ពី Branch Page:** បន្ទាប់ពី Push Changes ទៅ Branch ថ្មី GitLab នឹងបង្ហាញប៊ូតុង "Create merge request" នៅលើ Branch Page ។
2.  **ពី Project Sidebar:** ចុច **\`Merge Requests\` > \`New merge request\`** ។

**ព័ត៌មានសំខាន់ៗនៅពេលបង្កើត MR:**

* **Source branch (Branch ប្រភព):** Branch ដែលមាន Code Changes របស់អ្នក (ឧទាហរណ៍៖ \`feature/new-feature\`) ។
* **Target branch (Branch គោលដៅ):** Branch ដែលអ្នកចង់បញ្ចូល Changes ទៅ (ឧទាហរណ៍៖ \`main\`) ។
* **Title (ចំណងជើង):** សង្ខេបអំពី Changes (ឧទាហរណ៍៖ "Implement user registration flow") ។
* **Description (ការពិពណ៌នា):** ផ្តល់ព័ត៌មានលម្អិតអំពី Changes, ហេតុផលសម្រាប់ការផ្លាស់ប្តូរ, បញ្ហាដែលបានដោះស្រាយ, Test Instructions ។
* **Assignee:** កំណត់អ្នកទទួលខុសត្រូវសម្រាប់ MR ។
* **Reviewers:** កំណត់អ្នកដែលត្រូវពិនិត្យកូដ។
* **Labels, Milestones, Due Date:** សម្រាប់ Project Management ។
* **CI/CD Pipeline:** MR នឹង Trigger Pipeline ដោយស្វ័យប្រវត្តិ (ប្រសិនបើបានកំណត់រចនាសម្ព័ន្ធ) ។

---

## 3. ការពិនិត្យកូដ (Code Review) នៅក្នុង MR 🧐

Code Review គឺជាផ្នែកដ៏សំខាន់បំផុតនៃ MR ។

* **Changes Tab:** នៅក្នុង MR អ្នកអាចមើល Changes ទាំងអស់ដែលបានធ្វើឡើងរវាង Source និង Target Branch ។
* **Inline Comments:** Reviewers អាចទុក Comments ដោយផ្ទាល់នៅលើបន្ទាត់ Code ជាក់លាក់ ដើម្បីផ្តល់មតិកែលម្អ ឬសួរសំណួរ។
* **Discussion Tab:** សម្រាប់ពិភាក្សាទូទៅអំពី MR ។
* **Suggestions:** Reviewers អាចស្នើ Changes ដោយផ្ទាល់នៅក្នុង Comments ដែល Developers អាចអនុវត្តបានដោយចុចប៊ូតុងតែម្តង។

---

## 4. ការ Comment លើ Changes 💬

* **Single-line comments:** ចុចលើលេខបន្ទាត់នៅក្នុង Changes Tab ដើម្បីបន្ថែម Comment លើបន្ទាត់នោះ។
* **Multi-line comments:** ជ្រើសរើសប្លុក Code ហើយចុច "Add comment" ។
* **Resolve discussion:** នៅពេល Comment ត្រូវបានដោះស្រាយ អ្នកអាចចុច "Resolve discussion" ដើម្បីសម្គាល់វាថាបានបញ្ចប់�।

---

## 5. ការដោះស្រាយ Conflict (Merge Conflicts) 💥

**Merge Conflict** កើតឡើងនៅពេលដែល Changes នៅក្នុង Source Branch ប៉ះទង្គិចជាមួយ Changes នៅក្នុង Target Branch (ឧទាហរណ៍៖ អ្នកទាំងពីរបានកែប្រែបន្ទាត់ Code ដូចគ្នា) ។

* **ការរកឃើញ:** GitLab នឹងបង្ហាញថាមាន Conflicts នៅក្នុង MR ។
* **ការដោះស្រាយ:**
    * **ដោយដៃ (Manual):** Clone Repository ទៅ Local, Pull Changes, ដោះស្រាយ Conflicts ដោយដៃក្នុង Editor, Commit, និង Push ត្រឡប់ទៅ GitLab វិញ។
    * **ដោយ GitLab UI:** សម្រាប់ Conflicts សាមញ្ញ GitLab ផ្តល់នូវឧបករណ៍ដោះស្រាយ Conflict ដោយផ្ទាល់នៅក្នុង UI ។

---

## 6. ការ Approve និង Merge MR ✅

នៅពេលដែល Code Review ត្រូវបានបញ្ចប់ Tests បាន Pass ហើយ Conflicts ត្រូវបានដោះស្រាយ MR អាចត្រូវបាន Approved និង Merged ។

* **Approval:** Reviewers ចុចប៊ូតុង **\`Approve\`** ។ អ្នកអាចកំណត់រចនាសម្ព័ន្ធថាត្រូវការចំនួន Approvals ប៉ុន្មាន។
* **Merge:**
    * នៅពេលដែល MR រួចរាល់សម្រាប់ការ Merge ប៊ូតុង **\`Merge\`** នឹងបង្ហាញ។
    * ចុចប៊ូតុង **\`Merge\`** ដើម្បីបញ្ចូល Changes ពី Source Branch ទៅ Target Branch ។
    * **Options:** អ្នកអាចជ្រើសរើស "Delete source branch when merge request is accepted" (ត្រូវបានណែនាំ) ។
    * **Merge Methods:** GitLab គាំទ្រ Merge Commit, Fast-forward merge, និង Semi-linear merge ។

---
> **គន្លឹះ:** Merge Requests គឺជាឧបករណ៍ដ៏សំខាន់មួយសម្រាប់ការធានាគុណភាព Code និងការសហការប្រកបដោយប្រសិទ្ធភាពក្នុងក្រុមអភិវឌ្ឍន៍ Software ។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការបង្កើត Merge Request

ការបង្កើត Merge Request អនុញ្ញាតឱ្យអ្នកស្នើសុំការបញ្ចូល Changes ពី Branch មួយទៅ Branch មួយទៀត។

\`\`\`
[New Merge Request Dialog]
-------------------------------------------------
| Source branch: feature/add-home-page          |
| Target branch: main                           |
|                                               |
| Title:         Add Home Page Feature           |
| Description:                                  |
|   This MR adds a home page with a welcome     |
|   message and basic styling.                  |
|                                               |
| Assignee:      Alice Lee                      |
| Reviewers:     Bob Chen                       |
| Labels:        feature, frontend              |
| Milestone:     Sprint 3                      |
|                                               |
| [ ] Delete source branch when accepted        |
|                                               |
| [ Create merge request ] [ Cancel ]           |
-------------------------------------------------
\`\`\`

# ឧទាហរណ៍ ២: Code Review ក្នុង Merge Request

Changes Tab នៅក្នុង MR បង្ហាញ Code Changes និង Inline Comments។

\`\`\`
[Merge Request #45: Add Home Page Feature]
-------------------------------------------------------------------
| Changes from feature/add-home-page to main                       |
|                                                                 |
| File: src/home.js                                               |
|                                                                 |
| + function displayWelcome() {                                   |
| +   return "Welcome to our website!";                           |
|                                                                 |
|   // Line 5:                                                    |
|   // Reviewer Comment: Add input sanitization for security.      |
|                                                                 |
| +   document.getElementById("welcome").innerText =              |
| +       displayWelcome();                                       |
|                                                                 |
| [ Resolve discussion ]                                          |
-------------------------------------------------------------------
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `Merge Request (MR)` គឺជាអ្វី?',
      options: [
        'ជា Command សម្រាប់លុប Branch',
        'ជាសំណើផ្លូវការមួយដើម្បីបញ្ចូល Changes ពី Branch មួយទៅ Branch មួយទៀត',
        'ជាប្រភេទ CI/CD Job',
        'ជាឧបករណ៍សម្រាប់គ្រប់គ្រង Issues'
      ],
      correct: 1,
      explanation: 'Merge Request (MR) គឺជាសំណើផ្លូវការមួយដើម្បីបញ្ចូល Changes ពី Branch មួយ (Source Branch) ទៅកាន់ Branch មួយទៀត (Target Branch) ។'
    },
    {
      question: 'តើ `Code Review` គឺជាផ្នែកដ៏សំខាន់បំផុតនៃ MR ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ វាមិនសំខាន់ទេ', 'តែសម្រាប់ Public Projects', 'តែសម្រាប់ Bug Fixes'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Code Review គឺជាផ្នែកដ៏សំខាន់បំផុតនៃ MR ដែលអនុញ្ញាតឱ្យសមាជិកក្រុមផ្សេងទៀតពិនិត្យមើល Code Changes ។'
    },
    {
      question: 'តើ `Source branch` ក្នុង MR គឺជាអ្វី?',
      options: [
        'Branch ដែលអ្នកចង់បញ្ចូល Changes ទៅ',
        'Branch ដែលមាន Code Changes លနស់អ្នក',
        'Branch មេរបស់ Project',
        'Branch ដែលត្រូវបានការពារ'
      ],
      correct: 1,
      explanation: 'Source branch គឺជា Branch ដែលមាន Code Changes របស់អ្នក។'
    },
    {
      question: 'តើ `Target branch` ក្នុង MR គឺជាអ្វី?',
      options: [
        'Branch ដែលមាន Code Changes របស់អ្នក',
        'Branch ដែលអ្នកចង់បញ្ចូល Changes ទៅ',
        'Branch សម្រាប់ Testing',
        'Branch សម្រាប់ Deployment'
      ],
      correct: 1,
      explanation: 'Target branch គឺជា Branch ដែលអ្នកចង់បញ្ចូល Changes ទៅ (ជាធម្មតា `main`) ។'
    },
    {
      question: 'តើ `Inline Comments` ក្នុង MR ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីលុប Code',
        'ដើម្បីផ្តល់មតិកែលម្អ ឬសួរសំណួរដោយផ្ទាល់នៅលើបន្ទាត់ Code ជាក់លាក់',
        'ដើម្បី Trigger CI/CD Pipeline',
        'ដើម្បីបង្កើត Branch ថ្មី'
      ],
      correct: 1,
      explanation: 'Inline Comments ត្រូវបានប្រើដើម្បីផ្តល់មតិកែលម្អ ឬសួរសំណួរដោយផ្ទាល់នៅលើបន្ទាត់ Code ជាក់លាក់។'
    },
    {
      question: 'តើ `Merge Conflict` កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេលដែល Source Branch និង Target Branch មាន Changes ដូចគ្នា',
        'នៅពេលដែល Changes នៅក្នុង Source Branch ប៉ះទង្គិចជាមួយ Changes នៅក្នុង Target Branch',
        'នៅពេលដែល Pipeline Fails',
        'នៅពេលដែល MR ត្រូវបាន Approved'
      ],
      correct: 1,
      explanation: 'Merge Conflict កើតឡើងនៅពេលដែល Changes នៅក្នុង Source Branch ប៉ះទង្គិចជាមួយ Changes នៅក្នុង Target Branch (ឧទាហរណ៍៖ អ្នកទាំងពីរបានកែប្រែបន្ទាត់ Code ដូចគ្នា) ។'
    },
    {
      question: 'តើអ្នកអាចដោះស្រាយ `Merge Conflicts` ដោយប្រើ GitLab UI បានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ ត្រូវតែប្រើ Command Line', 'តែសម្រាប់ Conflicts ស្មុគស្មាញប៉ុណ្ណោះ', 'តែសម្រាប់ Conflicts សាមញ្ញៗប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ សម្រាប់ Conflicts សាមញ្ញ GitLab ផ្តល់នូវឧបករណ៍ដោះស្រាយ Conflict ដោយផ្ទាល់នៅក្នុង UI ។'
    },
    {
      question: 'តើ `Approve` MR មានន័យដូចម្តេច?',
      options: [
        'ការបដិសេធ MR',
        'ការស្នើ Changes បន្ថែម',
        'ការអនុម័តថា Code Changes ត្រូវបានពិនិត្យ និងរួចរាល់សម្រាប់ការបញ្ចូល',
        'ការលុប Source Branch'
      ],
      correct: 2,
      explanation: 'Approve MR មានន័យថាការអនុម័តថា Code Changes ត្រូវបានពិនិត្យ និងរួចរាល់សម្រាប់ការបញ្ចូល។'
    },
    {
      question: 'តើ `Merge` MR មានន័យដូចម្តេច?',
      options: [
        'ការលុប Target Branch',
        'ការបញ្ចូល Changes ពី Source Branch ទៅ Target Branch',
        'ការបង្កើត Branch ថ្មី',
        'ការចាប់ផ្តើម CI/CD Pipeline'
      ],
      correct: 1,
      explanation: 'Merge MR មានន័យថាការបញ្ចូល Changes ពី Source Branch ទៅ Target Branch ។'
    },
    {
      question: 'តើ `CI/CD Pipelines` ត្រូវបាន Trigger ដោយស្វ័យប្រវត្តិលើ Merge Requests ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ ត្រូវតែ Trigger ដោយដៃ', 'តែសម្រាប់ Production Deployments', 'តែសម្រាប់ Bug Fixes'],
      correct: 0,
      explanation: 'បាទ/ចាី Pipelines ត្រូវបាន Trigger ដោយស្វ័យប្រវត្តិលើ Merge Requests (ប្រសិនបើបានកំណត់រចនាសម្ព័ន្ធ) ។'
    },
    {
      question: 'តើ `Reviewers` ក្នុង MR មានតួនាទីអ្វី?',
      options: [
        'ដើម្បីបង្កើត MR',
        'ដើម្បីពិនិត្យមើល Code Changes, ផ្តល់មតិកែលម្អ, និងស្នើការកែលម្អ',
        'ដើម្បី Deploy Code ទៅ Production',
        'ដើម្បីគ្រប់គ្រង Project Settings'
      ],
      correct: 1,
      explanation: 'Reviewers ក្នុង MR មានតួនាទីពិនិត្យមើល Code Changes, ផ្តល់មតិកែលម្អ, និងស្នើការកែលម្អ។'
    },
    {
      question: 'តើ `Suggestions` ក្នុង Comments របស់ MR អាចត្រូវបានអនុវត្តដោយរបៀបណា?',
      options: [
        'ដោយការចម្លង Code ដោយដៃ',
        'ដោយចុចប៊ូតុងតែម្តង',
        'ដោយការបង្កើត MR ថ្មី',
        'ដោយការលុប Comment'
      ],
      correct: 1,
      explanation: 'Reviewers អាចស្នើ Changes ដោយផ្ទាល់នៅក្នុង Comments ដែល Developers អាចអនុវត្តបានដោយចុចប៊ូតុងតែម្តង។'
    },
    {
      question: 'តើ `Discussion Tab` ក្នុង MR ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីមើល Code Changes',
        'ដើម្បីពិភាក្សាទូទៅអំពី MR',
        'ដើម្បីមើល Commit History',
        'ដើម្បីមើល Pipeline Status'
      ],
      correct: 1,
      explanation: 'Discussion Tab ក្នុង MR ត្រូវបានប្រើសម្រាប់ពិភាក្សាទូទៅអំពី MR ។'
    },
    {
      question: 'តើ `Delete source branch when merge request is accepted` Option ត្រូវបានណែនាំដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Bug Fix Branches', 'តែសម្រាប់ Feature Branches'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ការលុប Source Branch បន្ទាប់ពី Merge ត្រូវបានណែនាំដើម្បីរក្សា Repository ឱ្យស្អាត។'
    },
    {
      question: 'តើ `Merge Commit` គឺជាអ្វី?',
      options: [
        'ប្រភេទនៃ Conflict',
        'វិធីសាស្ត្រ Merge ដែលបង្កើត Commit ថ្មីមួយ',
        'ប្រភេទនៃ Branch',
        'ប្រភេទនៃ Pipeline'
      ],
      correct: 1,
      explanation: 'Merge Commit គឺជាវិធីសាស្ត្រ Merge ដែលបង្កើត Commit ថ្មីមួយដែលបញ្ចូលប្រវត្តិសាស្រ្តរបស់ Branches ទាំងពីរ។'
    },
    {
      question: 'តើ `Fast-forward merge` គឺជាអ្វី?',
      options: [
        'វិធីសាស្ត្រ Merge ដែលបង្កើត Commit ថ្មីមួយ',
        'វិធីសាស្ត្រ Merge ដែលមិនបង្ផើត Commit ថ្មីទេ ប៉ុន្តែគ្រាន់តែផ្លាស់ទី Pointer របស់ Target Branch',
        'ប្រភេទនៃ Conflict',
        'ប្រភេទនៃ Branch'
      ],
      correct: 1,
      explanation: 'Fast-forward merge គឺជាវិធីសាស្ត្រ Merge ដែលមិនបង្កើត Commit ថ្មីទេ ប៉ុន្តែគ្រាន់តែផ្លាស់ទី Pointer របស់ Target Branch ទៅកាន់ Commit ចុងក្រោយនៃ Source Branch ។'
    },
    {
      question: 'តើ `GitLab` ផ្តល់វេទិកាកណ្តាលសម្រាប់ពិភាក្សាអំពី Changes នៅក្នុង MR ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Private Projects', 'តែសម្រាប់ Public Projects'],
      correct: 0,
      explanation: 'បាទ/ចាី GitLab ផ្តល់វេទិកាកណ្តាលសម្រាប់ពិភាក្សាអំពី Changes នៅក្នុង MR ។'
    },
    {
      question: 'តើ `MR` អាចត្រូវបានប្រើដើម្បីធានា `Code Quality` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែប្រសិនបើមាន Automated Tests', 'តែប្រសិនបើមាន Manual Review'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ MR ជួយធានាគុណភាព Code តាមរយៈ Code Review និងការដំណើរការ Tests ។'
    }
  ],
  lab: {
    task: `
បង្កើត និងគ្រប់គ្រង Merge Request (MR) ក្នុង GitLab UI៖
* បង្កើត Project ថ្មីមួយ។
* បង្កើត Branch ថ្មី និងបន្ថែម File។
* បង្ផើត Merge Request។
* ធ្វើ Code Review និង Comment។
* Merge MR ទៅ Branch មេ។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. ចូលទៅ **GitLab.com** និងបង្ផើតគណនីឥតគិតថ្លៃ ឬប្រើគណនីដែលមានស្រាប់។
2. បង្ផើត Project ថ្មីមួយឈ្មោះ **'mr-collab-lab'** ជាមួយ **Visibility Level** ជា **Public** និងធីក Option **Initialize repository with a README**។
3. បង្ផើត Branch **'feature/add-home-page'** និងបន្ថែម File **'home.html'** ជាមួយខ្លឹមសារ៖
   \`\`\`html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Home Page</title>
   </head>
   <body>
       <h1>Welcome to Our Website</h1>
       <p>This is the home page for our project.</p>
   </body>
   </html>
   \`\`\`
   Commit Message: "Add home.html page", Target Branch: **feature/add-home-page**.
4. បង្ផើត Merge Request:
   * ចូលទៅ **Merge Requests > New merge request**.
   * **Source branch**: **feature/add-home-page**.
   * **Target branch**: **main**.
   * **Title**: "Add Home Page Feature".
   * **Description**: "This MR adds a home page with a welcome message."
   * ធីក **Delete source branch when merge request is accepted**.
   * ចុច **Create merge request**.
5. ធ្វើ Code Review និង Merge:
   * នៅក្នុង MR Page ចុច Tab **Changes** ដើម្បីមើលមាតិកា **home.html**។
   * បន្ថែម Comment នៅលើបន្ទាត់ Code ណាមួយ (ឧទាហរណ៍៖ "Great start, consider adding a navigation bar.")។
   * ចុច **Merge** ដើម្បីបញ្ចូល Changes ទៅ Branch **main**។
   * ផ្ទៀងផ្ទាត់ថា **home.html** ស្ថិតនៅក្នុង **main** branch និង **feature/add-home-page** ត្រូវបានលុប។
`,
    solution: `
# ដំណោះស្រាយ៖ ការបង្ផើត និងគ្រប់គ្រង Merge Request (MR)

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១ និង ២៖ ចូលទៅ GitLab.com និងបង្ផើត Project
អ្នកបានចូលទៅ **GitLab.com** និងបង្ផើត Project ថ្មីឈ្មោះ **mr-collab-lab** ជាមួយ **Visibility Level** ជា **Public** និង Initialize ជាមួយ **README**។

## ជំហានទី ៣៖ បង្ផើត Branch និងបន្ថែម File home.html
អ្នកបានបង្ផើត Branch **feature/add-home-page** និងបន្ថែម File **home.html** ដោយប្រើ GitLab UI ដែលមានខ្លឹមសារដូចខាងក្រោម៖
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>
<body>
    <h1>Welcome to Our Website</h1>
    <p>This is the home page for our project.</p>
</body>
</html>
\`\`\`
Commit Message: "Add home.html page"

## ជំហានទី ៤៖ បង្ផើត Merge Request
អ្នកបានបង្ផើត Merge Request ដោយជ្រើសរើស៖
* **Source branch**: **feature/add-home-page**
* **Target branch**: **main**
* **Title**: "Add Home Page Feature"
* **Description**:
\`\`\`
This MR adds a home page with a welcome message.
\`\`\`
អ្នកបានធីក **Delete source branch when merge request is accepted**។

## ជំហានទី ៥៖ ធ្វើ Code Review និង Merge
នៅក្នុង MR Page៖
* អ្នកបានចុច Tab **Changes** និងឃើញមាតិកា **home.html**។
* អ្នកបានបន្ថែម Comment នៅលើបន្ទាត់ Code (ឧទាហរណ៍៖ "Great start, consider adding a navigation bar.")។
* អ្នកបានចុច **Merge** ដើម្បីបញ្ចូល Changes ទៅ **main** branch។

## លទ្ធផលផ្ទៀងផ្ទាត់
នៅក្នុង **Project Overview Page** អ្នកអាចមើលឃើញ៖
* **Project Name**: **mr-collab-lab**
* **Files**: **README.md**, **home.html** (នៅក្នុង Branch **main**)
* **Commits**: "Add home.html page"
* **Branches**: **main** (**feature/add-home-page** ត្រូវបានលុប)
* **Merge Requests**: MR "Add Home Page Feature" បាន Merge ដោយជោគជ័យ

លំហាត់នេះបានជួយអ្នកឱ្យស្គាល់ពីការបង្ផើត និងគ្រប់គ្រង Merge Requests ក្នុង GitLab UI ដើម្បីសហការកូដ។
`
  }
};

export default GitLabLesson2_3Content;