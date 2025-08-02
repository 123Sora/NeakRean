// src/components/lessons/gitlab/GitLabLesson2_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson2_1Content: LessonContent = {
  title: 'ការបង្កើត និងគ្រប់គ្រង Project ក្នុង GitLab',
  objectives: [
    'យល់ដឹងពីប្រភេទនៃការបង្កើត Project ថ្មី (Blank project, Create from template, Import project)',
    'ស្គាល់ពីការកំណត់ Visibility Level (Public, Internal, Private Project)',
    'ដឹងពីរបៀបរុករក Project Overview និង Activity Feed',
    'យល់ដឹងពី Project Settings សំខាន់ៗ (General, Visibility, Repository)',
    'អនុវត្តការបង្កើត Project ថ្មីមួយ'
  ],
  content: `
# ការបង្កើត និងគ្រប់គ្រង Project ក្នុង GitLab 📁🛠️

---

**Project** គឺជាកន្លែងកណ្តាលនៅក្នុង GitLab ដែលអ្នករក្សាទុក Source Code, តាមដាន Issues, គ្រប់គ្រង CI/CD Pipelines, និងសហការជាមួយក្រុមរបស់អ្នក។ ការបង្កើត និងគ្រប់គ្រង Project ឱ្យបានត្រឹមត្រូវគឺជាជំហានដំបូងដ៏សំខាន់ក្នុងការប្រើប្រាស់ GitLab ។

---

## 1. របៀបបង្កើត Project ថ្មី ➕

GitLab ផ្តល់ជម្រើសជាច្រើនសម្រាប់ការបង្កើត Project ថ្មី៖

* **Blank project (Project ទទេ):**
    * **ប្រើសម្រាប់:** ចាប់ផ្តើម Project ថ្មីពីដំបូង។
    * អ្នកនឹងទទួលបាន Repository ទទេមួយ ហើយអ្នកអាច Push Code របស់អ្នកទៅវាបាន។
* **Create from template (បង្កើតពី Template):**
    * **ប្រើសម្រាប់:** ចាប់ផ្តើម Project ជាមួយរចនាសម្ព័ន្ធដែលបានកំណត់ជាមុន និង Files (ឧទាហរណ៍៖ Templates សម្រាប់ Web Applications, Mobile Applications, CI/CD) ។
    * ជួយសន្សំសំចៃពេលវេលា និងធានាបាននូវ Best Practices ។
* **Import project (នាំចូល Project):**
    * **ប្រើសម្រាប់:** នាំចូល Project ដែលមានស្រាប់ពី External Sources (ឧទាហរណ៍៖ GitHub, Bitbucket, Gitea, ឬ Repository ណាមួយដោយ URL) ។
    * មានប្រយោជន៍នៅពេលអ្នកផ្លាស់ប្តូរពី Platform ផ្សេង។

**ជំហានទូទៅក្នុងការបង្កើត Project:**
1.  ចុចប៊ូតុង **\`New project / new repository\`** នៅលើ GitLab Dashboard ។
2.  ជ្រើសរើសប្រភេទ Project ដែលអ្នកចង់បង្កើត។
3.  បំពេញព័ត៌មានលម្អិតដូចជា Project name, Project slug, និង Visibility Level ។
4.  (ស្រេចចិត្ត) ធីក "Initialize repository with a README" ប្រសិនបើអ្នកចង់ឱ្យ GitLab បង្កើត File README.md ដំបូងសម្រាប់អ្នក។
5.  ចុច **\`Create project\`** ។

---

## 2. ការកំណត់ Public, Internal, និង Private Project 🔒

**Visibility Level** កំណត់ថាអ្នកណាអាចមើលឃើញ និងចូលប្រើ Project របស់អ្នក។

* **Private (ឯកជន):**
    * **អ្នកណាអាចមើលឃើញ:** មានតែសមាជិក Project ប៉ុណ្ណោះ (Users ដែលត្រូវបានបន្ថែមដោយផ្ទាល់ទៅ Project) ។
    * **ប្រើសម្រាប់:** Project ដែលមាន Code Sensitive, Project ផ្ទៃក្នុងរបស់ក្រុមហ៊ុន។
* **Internal (ផ្ទៃក្នុង):**
    * **អ្នកណាអាចមើលឃើញ:** Users ទាំងអស់ដែលបាន Login ទៅកាន់ GitLab Instance របស់អ្នក (សម្រាប់ Self-managed GitLab) ឬ Users ទាំងអស់នៅលើ GitLab.com (សម្រាប់ GitLab.com) ។
    * **ប្រើសម្រាប់:** Project ផ្ទៃក្នុងរបស់អង្គការដែលមិនមានព័ត៌មាន Sensitive ពេក។
* **Public (សាធារណៈ):**
    * **អ្នកណាអាចមើលឃើញ:** អ្នកណាក៏ដោយដែលមាន Internet Connection (មិនចាំបាច់ Login ទេ) ។
    * **ប្រើសម្រាប់:** Open Source Projects, Project បង្ហាញ, ឬ Project ដែលអ្នកចង់ឱ្យអ្នកណាក៏ដោយអាចមើលឃើញ។

---

## 3. Project Overview និង Activity Feed 📊

បន្ទាប់ពីបង្កើត Project អ្នកនឹងត្រូវបាននាំទៅកាន់ **Project Overview** Page ។

* **Project Overview:**
    * ផ្តល់នូវទិដ្ឋភាពសង្ខេបនៃ Project របស់អ្នក។
    * បង្ហាញព័ត៌មានសំខាន់ៗដូចជា Project Description, README.md content, ចំនួន Commits, Branches, Files, និង Links រហ័សទៅកាន់ផ្នែកផ្សេងៗទៀត។
* **Activity Feed:**
    * បង្ហាញពីសកម្មភាពថ្មីៗដែលបានកើតឡើងនៅក្នុង Project នោះ។
    * រួមបញ្ចូល Commits, Merge Requests, Issues, Pipeline runs, និង User Actions ផ្សេងៗទៀត។
    * មានប្រយោជន៍សម្រាប់ការតាមដានវឌ្ឍនភាព និងការផ្លាស់ប្តូរចុងក្រោយ។

---

## 4. Project Settings (General, Visibility, Repository) ⚙️

អ្នកអាចគ្រប់គ្រង Project របស់អ្នកដោយចូលទៅកាន់ **Project Settings** ។

* **General Settings:**
    * **Project name, slug, description:** កែប្រែព័ត៌មានមូលដ្ឋានរបស់ Project ។
    * **Visibility, project features:** កំណត់ Visibility Level ឡើងវិញ និងបើក/បិទមុខងារ Project ជាក់លាក់ (ឧទាហរណ៍៖ Issues, Merge Requests, Wiki, CI/CD) ។
    * **Badges:** បន្ថែម Badges សម្រាប់ CI/CD Status, Coverage ជាដើម។
* **Visibility, project features (ផ្នែករងនៃ General):**
    * អនុញ្ញាតឱ្យអ្នកកំណត់ថាតើមុខងារនីមួយៗ (Issues, Merge Requests, CI/CD, Wiki, Snippets, Pages, Packages) អាចមើលឃើញដោយអ្នកណា (Everyone with access, Only project members, Disabled) ។
* **Repository Settings:**
    * **Default branch:** កំណត់ Branch លំនាំដើម (ជាធម្មតា \`main\`) ។
    * **Protected branches:** កំណត់ Branches ដែលមិនអាច Push Changes ដោយផ្ទាល់ ឬ Merge ដោយគ្មានការអនុម័ត។
    * **Push rules:** កំណត់លក្ខខណ្ឌសម្រាប់ Code Push (ឧទាហរណ៍៖ តម្រូវឱ្យ Commit Message ជាក់លាក់) ។
    * **Merge request settings:** កំណត់ Options សម្រាប់ Merge Requests (ឧទាហរណ៍៖ តម្រូវឱ្យ Pipeline Pass មុន Merge) ។
* **Integrations:** ភ្ជាប់ GitLab ជាមួយ Service ខាងក្រៅ (ឧទាហរណ៍៖ Slack, Jira) ។
* **Members:** គ្រប់គ្រង Users ដែលមានសិទ្ធិចូលប្រើ Project និង Roles របស់ពួកគេ។

---
> **គន្លឹះ:** ការរៀបចំ Project Settings ឱ្យបានត្រឹមត្រូវតាំងពីដំបូងអាចជួយធានាបាននូវ Workflow រលូន និងសុវត្ថិភាពសម្រាប់ក្រុមរបស់អ្នក។
`,
  examples: [
    `<h3>ឧទាហរណ៍ ១: Dialog បង្កើត Project ថ្មី</h3>
<p>នេះជាទិដ្ឋភាពនៃ Dialog នៅពេលអ្នកចុច "New project" ។</p>
<pre><code class="language-text">
[New Project Dialog]
-------------------------------------------------
| Create new project                            |
|                                                 |
| Choose how to create your project               |
|   [ ] Blank project                             |
|   [ ] Create from template                      |
|   [ ] Import project                            |
|                                                 |
| Project name:       [ My Awesome App ]          |
| Project slug:       [ my-awesome-app ]          |
| Project URL:        gitlab.com/your-username/my-awesome-app
| Visibility Level:   [ Private ▼ ]               |
|                                                 |
| [ ] Initialize repository with a README         |
|                                                 |
| [ Create project ] [ Cancel ]                   |
-------------------------------------------------
</code></pre>

<h3>ឧទាហរណ៍ ២: Project Overview Page</h3>
<p>នេះជាទិដ្ឋភាពសង្ខេបនៃ Project Overview Page ។</p>
<pre><code class="language-text">
[Project Overview: My Awesome App]
-------------------------------------------------------------------
| Project Activity | Files | Commits | Branches | Tags | Issues | ...
-------------------------------------------------------------------
| Description: This is a sample project for learning GitLab.      |
|                                                                 |
| README.md content:                                              |
| # My Awesome App                                                |
| This is a sample project.                                       |
|                                                                 |
| Activity Feed:                                                  |
|   - John Doe pushed to main branch (5 mins ago)                 |
|   - Jane Smith created new issue #1 (1 hour ago)                |
|   - CI/CD Pipeline passed (2 hours ago)                         |
|                                                                 |
| Project Stats:                                                  |
|   Commits: 10   Branches: 3   Files: 25   Storage: 10MB         |
-------------------------------------------------------------------
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `Project` ក្នុង GitLab គឺជាអ្វី?',
      options: [
        'ជា File តែមួយសម្រាប់រក្សាទុក Code',
        'ជាកន្លែងកណ្តាលសម្រាប់គ្រប់គ្រង Source Code, Issues, CI/CD, និងការសហការ',
        'ជាប្រភេទ Server',
        'ជាឧបករណ៍សម្រាប់បង្កើត User Accounts'
      ],
      correct: 1,
      explanation: 'Project គឺជាកន្លែងកណ្តាលនៅក្នុង GitLab ដែលអ្នករក្សាទុក Source Code, តាមដាន Issues, គ្រប់គ្រង CI/CD Pipelines, និងសហការជាមួយក្រុមរបស់អ្នក។'
    },
    {
      question: 'តើជម្រើសមួយណាដែល **មិនមែន** ជាប្រភេទនៃការបង្កើត Project ថ្មីក្នុង GitLab?',
      options: [
        'Blank project',
        'Create from template',
        'Import project',
        'Download project'
      ],
      correct: 3,
      explanation: 'Download project មិនមែនជាប្រភេទនៃការបង្កើត Project ថ្មីទេ។'
    },
    {
      question: 'តើ `Blank project` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីនាំចូល Project ដែលមានស្រាប់',
        'ដើម្បីចាប់ផ្តើម Project ថ្មីពីដំបូង',
        'ដើម្បីបង្កើត Project ជាមួយរចនាសម្ព័ន្ធដែលបានកំណត់ជាមុន',
        'ដើម្បីលុប Project'
      ],
      correct: 1,
      explanation: 'Blank project ត្រូវបានប្រើដើម្បីចាប់ផ្តើម Project ថ្មីពីដំបូង។'
    },
    {
      question: 'តើ `Visibility Level` កំណត់អ្វីសម្រាប់ Project មួយ?',
      options: [
        'ចំនួន Commits ដែលអាចធ្វើបាន',
        'ទំហំរបស់ Project',
        'អ្នកណាអាចមើលឃើញ និងចូលប្រើ Project របស់អ្នក',
        'ប្រភេទ CI/CD Pipeline ដែលត្រូវប្រើ'
      ],
      correct: 2,
      explanation: 'Visibility Level កំណត់ថាអ្នកណាអាចមើលឃើញ និងចូលប្រើ Project របស់អ្នក។'
    },
    {
      question: 'តើ `Private Project` អាចមើលឃើញដោយអ្នកណា?',
      options: [
        'អ្នកណាក៏ដោយដែលមាន Internet Connection',
        'Users ទាំងអស់ដែលបាន Login ទៅកាន់ GitLab Instance',
        'មានតែសមាជិក Project ប៉ុណ្ណោះ',
        'មានតែ Owner របស់ Project ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Private Project អាចមើលឃើញដោយមានតែសមាជិក Project ប៉ុណ្ណោះ (Users ដែលត្រូវបានបន្ថែមដោយផ្ទាល់ទៅ Project) ។'
    },
    {
      question: 'តើ `Public Project` អាចមើលឃើញដោយអ្នកណា?',
      options: [
        'មានតែសមាជិក Project ប៉ុណ្ណោះ',
        'Users ទាំងអស់ដែលបាន Login ទៅកាន់ GitLab Instance',
        'អ្នកណាក៏ដោយដែលមាន Internet Connection (មិនចាំបាច់ Login ទេ)',
        'មានតែ Admin របស់ GitLab ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Public Project អាចមើលឃើញដោយអ្នកណាក៏ដោយដែលមាន Internet Connection (មិនចាំបាច់ Login ទេ) ។'
    },
    {
      question: 'តើ `Activity Feed` ក្នុង Project Overview បង្ហាញអ្វី?',
      options: [
        'បញ្ជីនៃ Files ទាំងអស់នៅក្នុង Repository',
        'ព័ត៌មានអំពី CI/CD Runners',
        'សកម្មភាពថ្មីៗដែលបានកើតឡើងនៅក្នុង Project នោះ (Commits, MRs, Issues)',
        'បញ្ជីនៃ Users ទាំងអស់ក្នុង GitLab'
      ],
      correct: 2,
      explanation: 'Activity Feed បង្ហាញពីសកម្មភាពថ្មីៗដែលបានកើតឡើងនៅក្នុង Project នោះ។'
    },
    {
      question: 'តើ `Project Settings` អនុញ្ញាតឱ្យអ្នកកែប្រែអ្វីខ្លះ?',
      options: [
        'តែ Project name ប៉ុណ្ណោះ',
        'តែ Visibility Level ប៉ុណ្ណោះ',
        'ព័ត៌មានមូលដ្ឋានរបស់ Project, Visibility Level, និងមុខងារ Project ជាក់លាក់',
        'តែ CI/CD Pipeline Configuration ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Project Settings អនុញ្ញាតឱ្យអ្នកកែប្រែព័ត៌មានមូលដ្ឋានរបស់ Project, Visibility Level, និងបើក/បិទមុខងារ Project ជាក់លាក់។'
    },
    {
      question: 'តើ `Default branch` ត្រូវបានកំណត់នៅក្នុងផ្នែក Settings មួយណា?',
      options: [
        'General Settings',
        'Repository Settings',
        'CI/CD Settings',
        'Integrations'
      ],
      correct: 1,
      explanation: 'Default branch ត្រូវបានកំណត់នៅក្នុង Repository Settings ។'
    },
    {
      question: 'តើ `Protected branches` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីលុប Branches ដោយស្វ័យប្រវត្តិ',
        'ដើម្បីកំណត់ Branches ដែលមិនអាច Push Changes ដោយផ្ទាល់ ឬ Merge ដោយគ្មានការអនុម័ត',
        'ដើម្បីបង្កើត Branches ថ្មី',
        'ដើម្បីផ្លាស់ប្តូរឈ្មោះ Branches'
      ],
      correct: 1,
      explanation: 'Protected branches ត្រូវបានប្រើដើម្បីកំណត់ Branches ដែលមិនអាច Push Changes ដោយផ្ទាល់ ឬ Merge ដោយគ្មានការអនុម័ត។'
    },
    {
      question: 'តើ `Import project` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បី Export Project ទៅ Platform ផ្សេង',
        'ដើម្បីនាំចូល Project ដែលមានស្រាប់ពី External Sources',
        'ដើម្បីបង្កើត Project ថ្មីពី Template',
        'ដើម្បី Download Project Files'
      ],
      correct: 1,
      explanation: 'Import project ត្រូវបានប្រើដើម្បីនាំចូល Project ដែលមានស្រាប់ពី External Sources (ឧទាហរណ៍៖ GitHub, Bitbucket) ។'
    },
    {
      question: 'តើ `Initialize repository with a README` Option ធ្វើអ្វី?',
      options: [
        'លុប File README.md ដែលមានស្រាប់',
        'បង្កើត File README.md ដំបូងសម្រាប់ Project',
        'កំណត់ README.md ជា Default Branch',
        'ការពារ File README.md ពីការផ្លាស់ប្តូរ'
      ],
      correct: 1,
      explanation: '`Initialize repository with a README` Option បង្កើត File README.md ដំបូងសម្រាប់ Project ។'
    },
    {
      question: 'តើ `Internal Project` អាចមើលឃើញដោយអ្នកណា?',
      options: [
        'អ្នកណាក៏ដោយដែលមាន Internet Connection',
        'មានតែសមាជិក Project ប៉ុណ្ណោះ',
        'Users ទាំងអស់ដែលបាន Login ទៅកាន់ GitLab Instance របស់អ្នក',
        'មានតែ Admin របស់ GitLab ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Internal Project អាចមើលឃើញដោយ Users ទាំងអស់ដែលបាន Login ទៅកាន់ GitLab Instance របស់អ្នក។'
    },
    {
      question: 'តើ `Project Overview` Page ផ្តល់នូវទិដ្ឋភាពសង្ខេបនៃអ្វី?',
      options: [
        'តែ CI/CD Pipeline Status ប៉ុណ្ណោះ',
        'តែ Issues List ប៉ុណ្ណោះ',
        'Project Description, README.md content, ចំនួន Commits, Branches, Files, និង Links រហ័ស',
        'តែ User List ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Project Overview Page ផ្តល់នូវទិដ្ឋភាពសង្ខេបនៃ Project Description, README.md content, ចំនួន Commits, Branches, Files, និង Links រហ័សទៅកាន់ផ្នែកផ្សេងៗទៀត។'
    },
    {
      question: 'តើ `Badges` ក្នុង General Settings ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបង្ហាញរូបភាព Profile របស់អ្នកប្រើប្រាស់',
        'ដើម្បីបន្ថែម Badges សម្រាប់ CI/CD Status, Coverage ជាដើម',
        'ដើម្បីកំណត់ Permissions សម្រាប់ Project',
        'ដើម្បីភ្ជាប់ GitLab ជាមួយ Service ខាងក្រៅ'
      ],
      correct: 1,
      explanation: 'Badges ត្រូវបានប្រើដើម្បីបន្ថែម Badges សម្រាប់ CI/CD Status, Coverage ជាដើម ដើម្បីបង្ហាញព័ត៌មានសំខាន់ៗអំពី Project ។'
    },
    {
      question: 'តើ `Project slug` គឺជាអ្វី?',
      options: [
        'ឈ្មោះដែលបង្ហាញក្នុង UI របស់ Project',
        'ឈ្មោះដែលប្រើក្នុង URL របស់ Project',
        'លេខសម្គាល់តែមួយគត់សម្រាប់ Project',
        'ប្រភេទរបស់ Project'
      ],
      correct: 1,
      explanation: 'Project slug គឺជាឈ្មោះដែលប្រើក្នុង URL របស់ Project ហើយវានឹងត្រូវបានបំពេញដោយស្វ័យប្រវត្តិដោយផ្អែកលើ Project name ។'
    },
    {
      question: 'តើ `Merge request settings` ត្រូវបានកំណត់នៅក្នុងផ្នែក Settings មួយណា?',
      options: [
        'General Settings',
        'Repository Settings',
        'CI/CD Settings',
        'Integrations'
      ],
      correct: 1,
      explanation: 'Merge request settings ត្រូវបានកំណត់នៅក្នុង Repository Settings ។'
    },
    {
      question: 'តើ `Project` ក្នុង GitLab អាចមាន `Wiki` សម្រាប់ឯកសារដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Public Projects', 'តែសម្រាប់ Enterprise Edition ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Project ក្នុង GitLab អាចមាន Wiki សម្រាប់ឯកសារ Project ។'
    }
  ],
 lab: {
  task: `
បង្កើត និងគ្រប់គ្រង Project ថ្មីនៅលើ GitLab៖
* បង្កើត GitLab Project ថ្មីមួយ។
* បន្ថែម File README.md ដើម្បីណែនាំអំពី Project។
* រុករក Project Overview និង Activity Feed។
* កំណត់ Project Settings។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. ចូលទៅ **GitLab.com** និងបង្កើតគណនីឥតគិតថ្លៃ ឬប្រើគណនីដែលមានស្រាប់។
2. បង្កើត Project ថ្មីមួយដែលមានឈ្មោះ **'project-management-lab'** និងកំណត់ **Visibility Level** ជា **Private** ដោយធីក Option **Initialize repository with a README**។
3. បន្ថែម File **'README.md'** ដោយប្រើ GitLab UI ជាមួយនឹងខ្លឹមសារសង្ខេបអំពី Project (ឧទាហរណ៍៖ "# Project Management Lab\nThis project is for learning GitLab project management.")។
4. រុករក Project Overview Page ដើម្បីពិនិត្យ File **'README.md'** និង Activity Feed ដែលបង្ហាញ Initial Commit។
5. ចូលទៅ **Settings > General** នៅក្នុង Sidebar ខាងឆ្វេង ហើយបន្ថែម Project Description (ឧទាហរណ៍៖ "Learning GitLab project settings and management.") និងចុច **Save changes**។
6. ចូលទៅ **Settings > Repository** ដើម្បីពិនិត្យ Default Branch (ជាធម្មតា \`main\`) និង Protected Branches (គួរតែមាន \`main\` Protected ដោយលំនាំដើម)។
7. ពិនិត្យ **Project Overview Page** ដើម្បីបញ្ជាក់ថា Project Name, File (\`README.md\`), Activity Feed, និង Settings ត្រូវបានកំណត់ជោគជ័យ។
`,
  solution: `
# ដំណោះស្រាយ៖ ការបង្កើត និងគ្រប់គ្រង Project ក្នុង GitLab

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១ និង ២៖ ចូលទៅ GitLab.com និងបង្កើត Project
អ្នកបានចូលទៅ **GitLab.com** និងបង្កើត Project ថ្មីឈ្មោះ \`project-management-lab\` ជាមួយនឹង **Visibility Level** ជា **Private** និង Initialize ជាមួយ README។

## ជំហានទី ៣៖ បន្ថែម README.md
អ្នកបានបន្ថែម File \`README.md\` ដោយប្រើ GitLab UI ដែលមានខ្លឹមសារដូចខាងក្រោម៖
\`\`\`
# Project Management Lab
This project is for learning GitLab project management.
\`\`\`

## ជំហានទី ៤៖ រុករក Project Overview និង Activity Feed
អ្នកបានរុករក **Project Overview Page** ដែលបង្ហាញ File \`README.md\` និង **Activity Feed** ជាមួយ Initial Commit។

## ជំហានទី ៥ និង ៦៖ កំណត់ Project Settings
អ្នកបានបន្ថែម **Project Description** នៅក្នុង **Settings > General**៖
\`\`\`
Learning GitLab project settings and management.
\`\`\`
ហើយបានពិនិត្យ **Repository Settings** ដែលបង្ហាញ **Default Branch** \`main\` និង **Protected Branch** \`main\`។

## ជំហានទី ៧៖ ពិនិត្យ Project Overview
នៅក្នុង **Project Overview Page** អ្នកអាចមើលឃើញ៖
* **Project Name**: \`project-management-lab\`
* **File**: \`README.md\`
* **Activity Feed**: Initial Commit
* **Settings**: Description និង Protected Branch \`main\`

លំហាត់នេះបានជួយអ្នកឱ្យស្គាល់ពីការបង្កើត **Project** និងការគ្រប់គ្រង **Settings** នៅក្នុង GitLab។
`
    }
};

export default GitLabLesson2_1Content;
