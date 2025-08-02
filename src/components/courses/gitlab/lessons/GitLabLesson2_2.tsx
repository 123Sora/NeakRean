// src/components/lessons/gitlab/GitLabLesson2_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson2_2Content: LessonContent = {
  title: 'ការគ្រប់គ្រង Source Code (Repository)',
  objectives: [
    'ដឹងពីរបៀបមើល Files និង Folders ក្នុង GitLab UI',
    'របៀបបង្កើត, កែប្រែ, និងលុប Files ផ្ទាល់ក្នុង GitLab UI',
    'របៀបមើល Commit History របស់ Project',
    'របៀបបង្កើត, លុប, និងប្តូរ Branches ក្នុង GitLab',
    'របៀបបង្កើត និងគ្រប់គ្រង Tags (Version releases)',
    'របៀបមើលបញ្ជី Contributors របស់ Project'
  ],
  content: `
# ការគ្រប់គ្រង Source Code (Repository) 📂📜

---

**Repository** គឺជាបេះដូងនៃ Project របស់អ្នកនៅក្នុង GitLab ។ វាជាកន្លែងដែល Source Code ទាំងអស់ត្រូវបានរក្សាទុក និងគ្រប់គ្រងដោយប្រើ Git ។ GitLab ផ្តល់នូវ User Interface (UI) ដ៏ងាយស្រួលសម្រាប់ការគ្រប់គ្រង Repository របស់អ្នកដោយផ្ទាល់ពី Browser ។

---

## 1. Files: ការមើល Files, ការបង្កើត/កែប្រែ/លុប Files ផ្ទាល់ក្នុង GitLab UI 💻

GitLab UI អនុញ្ញាតឱ្យអ្នកធ្វើប្រតិបត្តិការ File មូលដ្ឋានដោយមិនចាំបាច់ប្រើ Command Line ។

* **ការមើល Files និង Folders:**
    * ចូលទៅ Project របស់អ្នក។
    * ចុចលើ Tab **\`Repository\` > \`Files\`** ។
    * អ្នកនឹងឃើញបញ្ជី Files និង Folders នៅក្នុង Branch បច្ចុប្បន្ន។
    * ចុចលើ File ណាមួយដើម្បីមើលមាតិការបស់វា។
* **ការបង្កើត File ថ្មី:**
    1.  នៅក្នុង Files View ចុចប៊ូតុង **\`+ \`** (Add file) ។
    2.  ជ្រើសរើស **\`New file\`** ។
    3.  បញ្ចូល File name (ឧទាហរណ៍៖ \`src/index.js\`) ។
    4.  បញ្ចូលមាតិកា File ។
    5.  បញ្ចូល Commit Message (ឧទាហរណ៍៖ \`Add index.js file\`) ។
    6.  ជ្រើសរើស Branch ដែលអ្នកចង់ Commit ទៅ (ជាធម្មតាបង្កើត Branch ថ្មីសម្រាប់ Changes) ។
    7.  ចុច **\`Commit changes\`** ។
* **ការកែប្រែ File:**
    1.  នៅក្នុង Files View ចុចលើ File ដែលអ្នកចង់កែប្រែ។
    2.  ចុចប៊ូតុង **\`Edit\`** ។
    3.  ធ្វើការផ្លាស់ប្តូររបស់អ្នក។
    4.  បញ្ចូល Commit Message ។
    5.  ជ្រើសរើស Branch ។
    6.  ចុច **\`Commit changes\`** ។
* **ការលុប File:**
    1.  នៅក្នុង Files View ចុចលើ File ដែលអ្នកចង់លុប។
    2.  ចុចប៊ូតុង **\`Delete\`** ។
    3.  បញ្ចូល Commit Message ។
    4.  ជ្រើសរើស Branch ។
    5.  ចុច **\`Delete file\`** ។

---

## 2. Commits: ការមើល Commit History 📜

**Commit History** បង្ហាញពីការផ្លាស់ប្តូរទាំងអស់ដែលបានធ្វើឡើងចំពោះ Repository តាមពេលវេលា។

* **ការមើល Commit History:**
    * នៅក្នុង Sidebar ខាងឆ្វេងនៃ Project របស់អ្នក ចុចលើ **\`Repository\` > \`Commits\`** ។
    * អ្នកនឹងឃើញបញ្ជី Commits ទាំងអស់ ជាមួយនឹង Commit ID (SHA), Author, Commit Message, និង Date ។
    * ចុចលើ Commit ណាមួយដើម្បីមើលព័ត៌មានលម្អិតអំពី Changes ដែលបានធ្វើឡើងនៅក្នុង Commit នោះ។

---

## 3. Branches: ការបង្កើត, លុប, និងប្តូរ Branches 🌳

**Branches** អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ធ្វើការលើមុខងារថ្មីៗ ឬការកែតម្រូវ Bug ដោយមិនប៉ះពាល់ដល់ Code មេ។

* **ការមើល Branches:**
    * នៅក្នុង Sidebar ខាងឆ្វេង ចុចលើ **\`Repository\` > \`Branches\`** ។
    * អ្នកនឹងឃើញបញ្ជី Branches ទាំងអស់ រួមទាំង Default branch (main/master) ។
* **ការបង្កើត Branch ថ្មី:**
    1.  នៅក្នុង Branches View ចុចប៊ូតុង **\`New branch\`** ។
    2.  **Branch name:** បញ្ចូលឈ្មោះសម្រាប់ Branch ថ្មីរបស់អ្នក (ឧទាហរណ៍៖ \`feature/user-profile\`) ។
    3.  **Create from:** ជ្រើសរើស Branch ដែលអ្នកចង់បង្កើតពី (ជាធម្មតា \`main\`) ។
    4.  ចុច **\`Create branch\`** ។
* **ការលុប Branch:**
    1.  នៅក្នុង Branches View ចុចប៊ូតុង **\`Delete branch\`** (រូបតំណាងធុងសំរាម) នៅក្បែរ Branch ដែលអ្នកចង់លុប។
    * **ចំណាំ:** អ្នកមិនអាចលុប Branch ដែលអ្នកកំពុងប្រើ ឬ Protected Branch បានទេ។
* **ការប្តូរ Branches (ក្នុង UI):**
    * នៅលើ Files View ឬ Project Overview Page អ្នកនឹងឃើញ Dropdown សម្រាប់ជ្រើសរើស Branch បច្ចុប្បន្ន។ ចុចលើវាដើម្បីប្តូរទៅ Branch ផ្សេង។

---

## 4. Tags: ការបង្កើត និងគ្រប់គ្រង Tags (Version releases) 🏷️

**Tags** គឺជា Pointers ទៅកាន់ Commits ជាក់លាក់នៅក្នុងប្រវត្តិសាស្រ្ត Repository របស់អ្នក។ ពួកវាត្រូវបានប្រើជាធម្មតាដើម្បីសម្គាល់ Version Releases (ឧទាហរណ៍៖ \`v1.0.0\`, \`v2.1-beta\`) ។

* **ការមើល Tags:**
    * នៅក្នុង Sidebar ខាងឆ្វេង ចុចលើ **\`Repository\` > \`Tags\`** ។
* **ការបង្កើត Tag ថ្មី:**
    1.  នៅក្នុង Tags View ចុចប៊ូតុង **\`New tag\`** ។
    2.  **Tag name:** បញ្ចូលឈ្មោះ Tag (ឧទាហរណ៍៖ \`v1.0.0\`) ។
    3.  **Create from:** ជ្រើសរើស Branch ឬ Commit SHA ដែលអ្នកចង់ Tag ។
    4.  (ស្រេចចិត្ត) បន្ថែម Tag message និង Release notes ។
    5.  ចុច **\`Create tag\`** ។

---

## 5. Contributors: ការមើលបញ្ជីអ្នករួមចំណែក 👥

**Contributors** Page បង្ហាញពីបញ្ជីអ្នកប្រើប្រាស់ដែលបានរួមចំណែកដល់ Project របស់អ្នក រួមទាំងចំនួន Commits ដែលពួកគេបានធ្វើ។

* **ការមើល Contributors:**
    * នៅក្នុង Sidebar ខាងឆ្វេង ចុចលើ **\`Repository\` > \`Contributors\`** ។
    * miscarriages
* អ្នកនឹងឃើញក្រាហ្វបង្ហាញពីសកម្មភាព Commit របស់ Contributors តាមពេលវេលា។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការបង្កើត File ក្នុង GitLab UI

ការបង្កើត File ថ្មីនៅក្នុង GitLab UI អនុញ្ញាតឱ្យអ្នកបន្ថែម Code ដោយផ្ទាល់។

\`\`\`
[New File Dialog]
-------------------------------------------------
| File name: src/app.js                         |
|                                               |
| Content:                                      |
|   // Application entry point                  |
|   console.log('Welcome to GitLab!');          |
|                                               |
| Commit message: Add app.js                    |
| Target branch: main                           |
|                                               |
| [ Commit changes ] [ Cancel ]                 |
-------------------------------------------------
\`\`\`

# ឧទាហរណ៍ ២: Commit History

Commit History បង្ហាញបញ្ជីការផ្លាស់ប្តូរទាំងអស់។

\`\`\`
[Commit History]
-------------------------------------------------
* Commit 9b8a7c6 (main)
  - Author: Alice Lee
  - Date: 1 hour ago
  - Message: Add user authentication
* Commit 3d4e5f7
  - Author: Bob Chen
  - Date: 2 days ago
  - Message: Update README
* Commit 1a2b3c4
  - Author: Alice Lee
  - Date: 5 days ago
  - Message: Initial commit
-------------------------------------------------
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `Repository` ក្នុង GitLab គឺជាអ្វី?',
      options: [
        'ជាកន្លែងសម្រាប់គ្រប់គ្រង Users',
        'ជាកន្លែងដែល Source Code ទាំងអស់ត្រូវបានរក្សាទុក និងគ្រប់គ្រងដោយប្រើ Git',
        'ជាឧបករណ៍សម្រាប់រៀបចំ CI/CD Pipelines',
        'ជាមុខងារសម្រាប់បង្កើត Issues'
      ],
      correct: 1,
      explanation: 'Repository គឺជាបេះដូងនៃ Project របស់អ្នកនៅក្នុង GitLab ដែលជាកន្លែងដែល Source Code ទាំងអស់ត្រូវបានរក្សាទុក និងគ្រប់គ្រងដោយប្រើ Git ។'
    },
    {
      question: 'តើអ្នកអាចបង្កើត File ថ្មីដោយផ្ទាល់ក្នុង GitLab UI ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ ត្រូវតែប្រើ Command Line', 'តែសម្រាប់ README.md ប៉ុណ្ណោះ', 'តែសម្រាប់ Text Files ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab UI អនុញ្ញាតឱ្យអ្នកបង្កើត, កែប្រែ, និងលុប Files ដោយផ្ទាល់ពី Browser ។'
    },
    {
      question: 'តើ `Commit History` បង្ហាញអ្វីខ្លះ?',
      options: [
        'បញ្ជីនៃ Users ទាំងអស់ក្នុង Project',
        'ការផ្លាស់ប្តូរទាំងអស់ដែលបានធ្វើឡើងចំពោះ Repository តាមពេលវេលា',
        'ស្ថានភាពបច្ចុប្បន្នរបស់ CI/CD Pipeline',
        'បញ្ជីនៃ Issues ដែលបានបើក'
      ],
      correct: 1,
      explanation: 'Commit History បង្ហាញពីការផ្លាស់ប្តូរទាំងអស់ដែលបានធ្វើឡើងចំពោះ Repository តាមពេលវេលា រួមទាំង Commit ID, Author, Date, និង Commit Message ។'
    },
    {
      question: 'តើ `Branches` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីរក្សាទុក Backup នៃ Project',
        'ដើម្បីអនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ធ្វើការលើមុខងារថ្មីៗដោយមិនប៉ះពាល់ដល់ Code មេ',
        'ដើម្បីតាមដាន Performance របស់ Application',
        'ដើម្បីគ្រប់គ្រង User Permissions'
      ],
      correct: 1,
      explanation: 'Branches អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ធ្វើការលើមុខងារថ្មីៗ ឬការកែតម្រូវ Bug ដោយមិនប៉ះពាល់ដល់ Code មេ (main/master branch) ។'
    },
    {
      question: 'តើ `Tags` ត្រូវបានប្រើជាធម្មតាដើម្បីសម្គាល់អ្វី?',
      options: [
        'ឈ្មោះរបស់ Developers',
        'Version Releases (ឧទាហរណ៍៖ v1.0.0)',
        'ប្រភេទនៃ Files',
        'ឈ្មោះរបស់ CI/CD Jobs'
      ],
      correct: 1,
      explanation: 'Tags ត្រូវបានប្រើជាធម្មតាដើម្បីសម្គាល់ Version Releases (ឧទាហរណ៍៖ `v1.0.0`, `v2.1-beta`) ។'
    },
    {
      question: 'តើអ្នកអាចលុប Branch ដែលអ្នកកំពុងប្រើបានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែប្រសិនបើវាជា Protected Branch', 'តែប្រសិនបើវាជា Default Branch'],
      correct: 1,
      explanation: 'ទេ អ្នកមិនអាចលុប Branch ដែលអ្នកកំពុងប្រើបានទេ។'
    },
    {
      question: 'តើ `Contributors` Page បង្ហាញអ្វីខ្លះ?',
      options: [
        'បញ្ជីនៃ Issues ដែលបានបិទ',
        'បញ្ជីអ្នកប្រើប្រាស់ដែលបានរួមចំណែកដល់ Project រួមទាំងចំនួន Commits ដែលពួកគេបានធ្វើ',
        'បញ្ជីនៃ Merge Requests ដែលបានបើក',
        'ព័ត៌មានអំពី CI/CD Pipelines'
      ],
      correct: 1,
      explanation: 'Contributors Page បង្ហាញពីបញ្ជីអ្នកប្រើប្រាស់ដែលបានរួមចំណែកដល់ Project របស់អ្នក រួមទាំងចំនួន Commits ដែលពួកគេបានធ្វើ។'
    },
    {
      question: 'តើ `Commit ID (SHA)` គឺជាអ្វី?',
      options: [
        'ឈ្មោះរបស់ Commit',
        'លេខសម្គាល់តែមួយគត់សម្រាប់ Commit នីមួយៗ',
        'ចំនួន Files ដែលបានផ្លាស់ប្តូរក្នុង Commit',
        'ប្រភេទនៃ Commit'
      ],
      correct: 1,
      explanation: 'Commit ID (SHA) គឺជាលេខសម្គាល់តែមួយគត់សម្រាប់ Commit នីមួយៗ។'
    },
    {
      question: 'តើអ្នកអាចប្តូរ Branches ដោយផ្ទាល់ពី GitLab UI បានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ ត្រូវតែប្រើ Command Line', 'តែសម្រាប់ Default Branch ប៉ុណ្ណោះ', 'តែសម្រាប់ Protected Branches ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចប្តូរ Branches ដោយផ្ទាល់ពី GitLab UI ដោយប្រើ Dropdown សម្រាប់ជ្រើសរើស Branch ។'
    },
    {
      question: 'តើ `Default branch` គឺជាអ្វី?',
      options: [
        'Branch ដែលត្រូវបានលុបដោយស្វ័យប្រវត្តិ',
        'Branch មេដែលត្រូវបានប្រើជាចំណុចចាប់ផ្តើមសម្រាប់ Branches ថ្មី',
        'Branch សម្រាប់ Testing',
        'Branch សម្រាប់ Deployments'
      ],
      correct: 1,
      explanation: 'Default branch គឺជា Branch មេដែលត្រូវបានប្រើជាចំណុចចាប់ផ្តើមសម្រាប់ Branches ថ្មី (ជាធម្មតា `main` ឬ `master`) ។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម `Tag message` នៅពេលបង្កើត Tag ថ្មីដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Major Releases', 'តែសម្រាប់ Minor Releases'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចបន្ថែម Tag message និង Release notes នៅពេលបង្កើត Tag ថ្មី។'
    },
    {
      question: 'តើ `Repository` ក្នុង GitLab UI អាចចូលប្រើបានតាមរយៈ Tab មួយណា?',
      options: [
        'Issues',
        'Merge Requests',
        'Repository',
        'CI/CD'
      ],
      correct: 2,
      explanation: 'Repository ក្នុង GitLab UI អាចចូលប្រើបានតាមរយៈ Tab `Repository` ។'
    },
    {
      question: 'តើ `Release notes` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅពេលបង្កើត Tag?',
      options: [
        'ដើម្បីពិពណ៌នាអំពី Changes នៅក្នុង Commit',
        'ដើម្បីផ្តល់ព័ត៌មានលម្អិតអំពី Version Release នោះ',
        'ដើម្បីកំណត់ User Permissions',
        'ដើម្បីគ្រប់គ្រង CI/CD Pipelines'
      ],
      correct: 1,
      explanation: 'Release notes ត្រូវបានប្រើដើម្បីផ្តល់ព័ត៌មានលម្អិតអំពី Version Release នោះ។'
    },
    {
      question: 'តើ `GitLab UI` ធ្វើឱ្យការគ្រប់គ្រង Repository មានភាពងាយស្រួលដោយមិនចាំបាច់ប្រើ Command Line ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ប្រតិបត្តិការសាមញ្ញៗប៉ុណ្ណោះ', 'តែសម្រាប់ Project តូចៗប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab UI ផ្តល់នូវ User Interface ដ៏ងាយស្រួលសម្រាប់ការគ្រប់គ្រង Repository របស់អ្នកដោយផ្ទាល់ពី Browser ដោយមិនចាំបាច់ប្រើ Command Line សម្រាប់ប្រតិបត្តិការជាមូលដ្ឋាន។'
    },
    {
      question: 'តើ `Protected Branch` អាចត្រូវបាន Push Changes ដោយផ្ទាល់ដោយអ្នកណាក៏បានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Project Owner ប៉ុណ្ណោះ', 'តែសម្រាប់ Maintainer ប៉ុណ្ណោះ'],
      correct: 1,
      explanation: 'ទេ Protected Branch មិនអាច Push Changes ដោយផ្ទាល់ ឬ Merge ដោយគ្មានការអនុម័តបានទេ។'
    },
    {
      question: 'តើ `GitLab` ប្រើប្រាស់ប្រព័ន្ធគ្រប់គ្រង Version Control មួយណា?',
      options: [
        'SVN',
        'Mercurial',
        'Git',
        'Perforce'
      ],
      correct: 2,
      explanation: 'GitLab ប្រើប្រាស់ Git ជាប្រព័ន្ធគ្រប់គ្រង Version Control របស់វា។'
    },
    {
      question: 'តើ `Commit Message` ត្រូវបានបង្ហាញនៅទីណា?',
      options: [
        'នៅក្នុង File System របស់ Server',
        'នៅក្នុង Repository Settings',
        'នៅក្នុង Commit History',
        'នៅក្នុង Project Description'
      ],
      correct: 2,
      explanation: 'Commit Message ត្រូវបានបង្ហាញនៅក្នុង Commit History ។'
    },
    {
      question: 'តើ `Repository` ក្នុង GitLab អាចមាន `Subdirectories` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Project ធំៗប៉ុណ្ណោះ', 'តែសម្រាប់ Project ដែលមាន CI/CD'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Repository ក្នុង GitLab អាចមាន Subdirectories ដើម្បីរៀបចំ Files របស់អ្នក។'
    }
  ],
  lab: {
    task: `
បង្កើត និងគ្រប់គ្រង Source Code ក្នុង GitLab UI៖
* បង្កើត Project ថ្មីមួយ។
* បន្ថែម កែប្រែ និងលុប Files។
* មើល Commit History។
* បង្កើត និងប្តូរ Branches។
* បង្កើត Tags។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. ចូលទៅ **GitLab.com** និងបង្កើតគណនីឥតគិតថ្លៃ ឬប្រើគណនីដែលមានស្រាប់។
2. បង្កើត Project ថ្មីមួយឈ្មោះ **'source-code-lab'** ជាមួយ **Visibility Level** ជា **Public** និងធីក Option **Initialize repository with a README**។
3. បន្ថែម File **'app.js'** ដោយប្រើ GitLab UI ជាមួយខ្លឹមសារ៖
   \`\`\`javascript
   // app.js
   console.log("Learning GitLab UI!");
   \`\`\`
   Commit Message: "Add app.js file", Target Branch: **main**.
4. កែប្រែ File **'README.md'** ដោយបន្ថែមបន្ទាត់៖
   \`\`\`
   This project includes app.js for learning.
   \`\`\`
   Commit Message: "Update README with app.js info", Target Branch: **main**.
5. បង្កើត Branch **'feature-style'** និងបន្ថែម File **'style.css'** ជាមួយខ្លឹមសារ៖
   \`\`\`css
   body { background-color: lightgray; }
   \`\`\`
   Commit Message: "Add style.css", Target Branch: **feature-style**.
6. បង្កើត Tag **'v1.0.0'** ពី Branch **main** ជាមួយ Tag Message: "Initial release".
7. ពិនិត្យ **Project Overview Page**, **Commits Page**, **Branches Page**, និង **Tags Page** ដើម្បីបញ្ជាក់ថា Files, Commits, Branches, និង Tags ត្រូវបានបង្កើតជោគជ័យ។
`,
    solution: `
# ដំណោះស្រាយ៖ ការគ្រប់គ្រង Source Code ក្នុង GitLab UI

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១ និង ២៖ ចូលទៅ GitLab.com និងបង្កើត Project
អ្នកបានចូលទៅ **GitLab.com** និងបង្កើត Project ថ្មីឈ្មោះ \`source-code-lab\` ជាមួយ **Visibility Level** ជា **Public** និង Initialize ជាមួយ README។

## ជំហានទី ៣៖ បន្ថែម File app.js
អ្នកបានបន្ថែម File \`app.js\` ដោយប្រើ GitLab UI ដែលមានខ្លឹមសារដូចខាងក្រោម៖
\`\`\`javascript
// app.js
console.log("Learning GitLab UI!");
\`\`\`
Commit Message: "Add app.js file"

## ជំហានទី ៤៖ កែប្រែ README.md
អ្នកបានកែប្រែ File \`README.md\` ដោយបន្ថែម៖
\`\`\`
This project includes app.js for learning.
\`\`\`
Commit Message: "Update README with app.js info"

## ជំហានទី ៥៖ បង្កើត Branch និងបន្ថែម File style.css
អ្នកបានបង្កើត Branch \`feature-style\` និងបន្ថែម File \`style.css\`៖
\`\`\`css
body { background-color: lightgray; }
\`\`\`
Commit Message: "Add style.css"

## ជំហានទី ៦៖ បង្កើត Tag
អ្នកបានបង្កើត Tag \`v1.0.0\` ពី Branch **main** ជាមួយ Tag Message:
\`\`\`
Initial release
\`\`\`

## ជំហានទី ៧៖ ពិនិត្យ Project Overview
នៅក្នុង **Project Overview Page** អ្នកអាចមើលឃើញ៖
* **Project Name**: \`source-code-lab\`
* **Files**: \`README.md\`, \`app.js\`, \`style.css\` (នៅក្នុង Branch \`feature-style\`)
* **Commits**: "Add app.js file", "Update README with app.js info", "Add style.css"
* **Branches**: \`main\`, \`feature-style\`
* **Tags**: \`v1.0.0\`

លំហាត់នេះបានជួយអ្នកឱ្យស្គាល់ពីការគ្រប់គ្រង **Files**, **Commits**, **Branches**, និង **Tags** ក្នុង GitLab UI។
`
  }
};

export default GitLabLesson2_2Content;