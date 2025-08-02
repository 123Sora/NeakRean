import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី GitLab និង DevOps',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា GitLab និងមុខងារសំខាន់ៗរបស់វា',
    'ស្គាល់ពីទស្សនវិជ្ជានៃ GitLab ជា All-in-one DevOps Platform',
    'យល់ដឹងពីអ្វីទៅជា DevOps និងសារៈសំខាន់របស់វា',
    'ដឹងពីរបៀបដែល GitLab ជួយសម្រួលដល់ DevOps Workflow',
    'ស្គាល់ពីមូលហេតុដែលត្រូវប្រើ GitLab (Collaboration, Automation, Security, Single Source of Truth)',
    'យល់ដឹងពី GitLab Flavors (GitLab.com, GitLab CE/EE)'
  ],
  content: `
# ណែនាំអំពី GitLab និង DevOps 🚀

---

**GitLab** គឺជា Web-based DevOps platform ដ៏ពេញនិយមមួយ ដែលផ្តល់នូវមុខងារពេញលេញសម្រាប់ការគ្រប់គ្រង Version Control (Git), ការគ្រប់គ្រង Source Code, Continuous Integration/Continuous Delivery (CI/CD), Security, Monitoring និងច្រើនទៀត។ វាត្រូវបានរចនាឡើងដើម្បីផ្តល់នូវដំណោះស្រាយ "All-in-one" សម្រាប់វដ្តជីវិតអភិវឌ្ឍន៍ Software ទាំងមូល។

---

## 1. អ្វីទៅជា GitLab? និងមុខងារសំខាន់ៗរបស់វា 💡

GitLab គឺជាវេទិកាតែមួយដែលគ្របដណ្តប់លើដំណាក់កាលទាំងអស់នៃវដ្តជីវិត DevOps ។

* **Source Code Management (SCM):** ផ្អែកលើ Git សម្រាប់គ្រប់គ្រង Version Control នៃ Source Code ។
* **Continuous Integration (CI):** ស្វ័យប្រវត្តិកម្មការ Build, Test, និង Verification នៃ Code Changes ។
* **Continuous Delivery/Deployment (CD):** ស្វ័យប្រវត្តិកម្មការ Deploy Code ទៅកាន់ Environments ផ្សេងៗគ្នា។
* **Issue Tracking:** គ្រប់គ្រងភារកិច្ច Bug និង Feature Requests ។
* **Project Management:** ប្រើប្រាស់ Boards, Milestones, Epics ដើម្បីរៀបចំការងារ។
* **Code Review:** តាមរយៈ Merge Requests (MRs) ។
* **Security:** Static/Dynamic Application Security Testing (SAST/DAST), Dependency Scanning ។
* **Monitoring:** តាមដាន Performance របស់ Application ។
* **Container Registry:** រក្សាទុក Docker Images ។
* **Wiki:** សម្រាប់ឯកសារ Project ។

---

## 2. តើ DevOps ជាអ្វី? និងតើ GitLab ជួយដល់ DevOps Workflow យ៉ាងដូចម្តេច? 🔄

**DevOps** គឺជាសំណុំនៃការអនុវត្តន៍ដែលរួមបញ្ចូលគ្នានូវការអភិវឌ្ឍន៍ Software (Dev) និងប្រតិបត្តិការ IT (Ops) ។ គោលបំណងគឺដើម្បីកាត់បន្ថយវដ្តជីវិតអភិវឌ្ឍន៍ប្រព័ន្ធ និងផ្តល់នូវមុខងារថ្មីៗ ការកែតម្រូវ Bug និងការអាប់ដេតញឹកញាប់ជាងមុន ជាមួយនឹងគុណភាពខ្ពស់។

**តើ GitLab ជួយដល់ DevOps Workflow យ៉ាងដូចម្តេច?**
GitLab សម្របសម្រួល DevOps ដោយផ្តល់នូវឧបករណ៍ទាំងអស់ដែលត្រូវការក្នុងវេទិកាតែមួយ។ នេះលុបបំបាត់តម្រូវការក្នុងការប្តូររវាងឧបករណ៍ផ្សេងៗគ្នា ដែលជួយកាត់បន្ថយ Friction និងបង្កើនល្បឿន Workflow ។

* **Plan:** គ្រប់គ្រង Issues, Boards, Epics ។
* **Create:** គ្រប់គ្រង Source Code ជាមួយ Git ។
* **Verify:** CI/CD Pipelines សម្រាប់ Build និង Test ។
* **Package:** Container Registry ។
* **Secure:** Security Scans ក្នុង Pipeline ។
* **Release:** CI/CD សម្រាប់ Deployment ។
* **Configure:** គ្រប់គ្រង Infrastructure as Code ។
* **Monitor:** តាមដាន Application Performance ។

---

## 3. មូលហេតុដែលត្រូវប្រើ GitLab ✨

* **Collaboration (ការសហការ):** ផ្តល់នូវឧបករណ៍រួមបញ្ចូលគ្នាសម្រាប់ការធ្វើការងារជាក្រុម (Merge Requests, Issues, Boards) ។
* **Automation (ស្វ័យប្រវត្តិកម្ម):** CI/CD Pipelines ស្វ័យប្រវត្តិកម្មការ Build, Test, និង Deploy ។
* **Security (សុវត្ថិភាព):** ឧបករណ៍ Security Testing ដែលបានបញ្ចូលទៅក្នុង Pipeline ។
* **Single Source of Truth (ប្រភពព័ត៌មានតែមួយ):** អ្វីៗទាំងអស់ (Code, CI/CD config, Issues, Docs) ស្ថិតនៅក្នុង Repository តែមួយ។
* **Reduced Toolchain Complexity:** មិនចាំបាច់គ្រប់គ្រងឧបករណ៍ដាច់ដោយឡែកជាច្រើនទេ។

---

## 4. GitLab Flavors (ប្រភេទ GitLab) 🌐

GitLab មានជម្រើសសំខាន់ៗពីរសម្រាប់អ្នកប្រើប្រាស់៖

* **GitLab.com:**
    * ជា SaaS (Software as a Service) ដែល Host ដោយ GitLab ។
    * អ្នកមិនចាំបាច់គ្រប់គ្រង Infrastructure ផ្ទាល់ខ្លួនទេ។
    * មាន Tiers ផ្សេងៗគ្នា (Free, Premium, Ultimate) ជាមួយនឹងមុខងារខុសៗគ្នា។
    * ល្អសម្រាប់ក្រុមតូចៗ និង Project បើកចំហរ (Open Source) ។
* **GitLab CE/EE (Community Edition / Enterprise Edition):**
    * ជា Self-managed Version ដែលអ្នកដំឡើង និងគ្រប់គ្រងនៅលើ Server ផ្ទាល់ខ្លួនរបស់អ្នក។
    * **Community Edition (CE):** ឥតគិតថ្លៃ និងបើកចំហរ (Open Source) ។ ល្អសម្រាប់អ្នកប្រើប្រាស់ម្នាក់ៗ ឬក្រុមតូចៗដែលចង់គ្រប់គ្រង Infrastructure ផ្ទាល់ខ្លួន។
    * **Enterprise Edition (EE):** មានមុខងារកម្រិតខ្ពស់សម្រាប់ Enterprise ដែលមានទំហំធំ ដូចជា Advanced Security, Compliance, និង Scalability ។ ទាមទារ License ។
    * ល្អសម្រាប់អង្គការដែលត្រូវការការគ្រប់គ្រងពេញលេញលើទិន្នន័យ និង Infrastructure របស់ពួកគេ�।
`,
  examples: [
    `<h3>ឧទាហរណ៍ ១: GitLab Dashboard Overview</h3>
<p>នេះជាទិដ្ឋភាពសង្ខេបនៃ GitLab Dashboard ដែលបង្ហាញពី Project, Issues, និង Pipelines ។</p>
<pre><code class="language-text">
[GitLab Dashboard]
-------------------------------------------------------------------
| Projects | Groups | Activity | Issues | Merge Requests | CI/CD |
-------------------------------------------------------------------
| My Projects:                                                    |
|   - WebApp (Last activity: 5 mins ago, 3 open MRs, 10 open issues)
|   - MobileApp (Last activity: 1 hour ago, 1 open MR, 5 open issues)
|   - API-Service (Last activity: 2 days ago, 0 open MRs, 2 open issues)
|                                                                 |
| Recent Activity:                                                |
|   - John Doe pushed to main branch in WebApp                    |
|   - Jane Smith created new MR #123 in MobileApp                 |
|   - CI/CD Pipeline for API-Service passed                       |
-------------------------------------------------------------------
</code></pre>

<h3>ឧទាហរណ៍ ២: DevOps Workflow ជាមួយ GitLab</h3>
<p>នេះជាឧទាហរណ៍នៃរបៀបដែល GitLab គាំទ្រវដ្តជីវិត DevOps ទាំងមូល។</p>
<pre><code class="language-text">
Plan (Issues, Boards)
  ↓
Create (Git Repository)
  ↓
Verify (CI Pipelines, Tests)
  ↓
Package (Container Registry)
  ↓
Secure (Security Scans)
  ↓
Release (CD Deployments)
  ↓
Configure (Infrastructure as Code)
  ↓
Monitor (Performance Metrics)
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ GitLab គឺជាអ្វី?',
      options: [
        'ជា Database Management System',
        'ជា Web-based DevOps platform ដែលផ្តល់មុខងារពេញលេញ',
        'ជាភាសាសរសេរកម្មវិធី',
        'ជាឧបករណ៍សម្រាប់រចនា UI/UX'
      ],
      correct: 1,
      explanation: 'GitLab គឺជា Web-based DevOps platform ដ៏ពេញនិយមមួយ ដែលផ្តល់នូវមុខងារពេញលេញសម្រាប់ការគ្រប់គ្រង Version Control (Git), CI/CD, Security និងច្រើនទៀត។'
    },
    {
      question: 'តើ `DevOps` តំណាងឱ្យអ្វី?',
      options: [
        'Development Options',
        'Deployment Operations',
        'Development Operations',
        'Data Optimization'
      ],
      correct: 2,
      explanation: 'DevOps តំណាងឱ្យ Development Operations ដែលជាសំណុំនៃការអនុវត្តន៍ដែលរួមបញ្ចូលគ្នានូវការអភិវឌ្ឍន៍ Software (Dev) និងប្រតិបត្តិការ IT (Ops) ។'
    },
    {
      question: 'តើគោលបំណងចម្បងនៃ DevOps គឺអ្វី?',
      options: [
        'ដើម្បីកាត់បន្ថយចំនួន Developers',
        'ដើម្បីបង្កើនតម្លៃ Software',
        'ដើម្បីកាត់បន្ថយវដ្តជីវិតអភិវឌ្ឍន៍ប្រព័ន្ធ និងផ្តល់មុខងារថ្មីៗញឹកញាប់ជាងមុន',
        'ដើម្បីធ្វើឱ្យ Software ដំណើរការតែ Offline'
      ],
      correct: 2,
      explanation: 'គោលបំណងចម្បងនៃ DevOps គឺដើម្បីកាត់បន្ថយវដ្តជីវិតអភិវឌ្ឍន៍ប្រព័ន្ធ និងផ្តល់នូវមុខងារថ្មីៗ ការកែតម្រូវ Bug និងការអាប់ដេតញឹកញាប់ជាងមុន ជាមួយនឹងគុណភាពខ្ពស់។'
    },
    {
      question: 'តើមុខងារមួយណាដែល **មិនមែន** ជាផ្នែកមួយនៃ GitLab Platform?',
      options: [
        'Source Code Management (SCM)',
        'Continuous Integration (CI)',
        'Continuous Delivery/Deployment (CD)',
        'Photo Editing Software'
      ],
      correct: 3,
      explanation: 'Photo Editing Software មិនមែនជាផ្នែកមួយនៃ GitLab Platform ទេ។ GitLab ផ្តោតលើការអភិវឌ្ឍន៍ Software និង DevOps ។'
    },
    {
      question: 'តើ `GitLab.com` គឺជាប្រភេទ GitLab មួយណា?',
      options: [
        'Self-managed Version',
        'SaaS (Software as a Service) ដែល Host ដោយ GitLab',
        'Open Source Version ដែលអ្នកដំឡើងដោយខ្លួនឯង',
        'Version សម្រាប់តែ Enterprise ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'GitLab.com គឺជា SaaS (Software as a Service) ដែល Host ដោយ GitLab ។'
    },
    {
      question: 'តើ `GitLab CE` តំណាងឱ្យអ្វី?',
      options: [
        'GitLab Cloud Edition',
        'GitLab Community Edition',
        'GitLab Corporate Edition',
        'GitLab Custom Edition'
      ],
      correct: 1,
      explanation: 'GitLab CE តំណាងឱ្យ GitLab Community Edition ដែលជា Open Source និង Self-managed Version ។'
    },
    {
      question: 'តើ `GitLab EE` តំណាងឱ្យអ្វី?',
      options: [
        'GitLab Essential Edition',
        'GitLab Enterprise Edition',
        'GitLab Education Edition',
        'GitLab Extended Edition'
      ],
      correct: 1,
      explanation: 'GitLab EE តំណាងឱ្យ GitLab Enterprise Edition ដែលមានមុខងារកម្រិតខ្ពស់សម្រាប់ Enterprise ។'
    },
    {
      question: 'ហេតុអ្វីបានជា `Single Source of Truth` ជាអត្ថប្រយោជន៍នៃការប្រើប្រាស់ GitLab?',
      options: [
        'ព្រោះវាអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់មានគណនីច្រើន',
        'ព្រោះអ្វីៗទាំងអស់ (Code, CI/CD config, Issues, Docs) ស្ថិតនៅក្នុង Repository តែមួយ',
        'ព្រោះវាបង្កើនល្បឿន Internet',
        'ព្រោះវាជួយកាត់បន្ថយការចំណាយលើ Hardware'
      ],
      correct: 1,
      explanation: 'Single Source of Truth មានន័យថាអ្វីៗទាំងអស់ (Code, CI/CD config, Issues, Docs) ស្ថិតនៅក្នុង Repository តែមួយ ដែលធ្វើឱ្យការគ្រប់គ្រង និងការសហការកាន់តែងាយស្រួល។'
    },
    {
      question: 'តើ `CI/CD` ក្នុង GitLab ជួយដល់ `Automation` យ៉ាងដូចម្តេច?',
      options: [
        'ដោយតម្រូវឱ្យមានការអន្តរាគមន៍ពីមនុស្សសម្រាប់រាល់ជំហាន',
        'ដោយស្វ័យប្រវត្តិកម្មការ Build, Test, និង Deploy នៃ Code Changes',
        'ដោយលុបបំបាត់តម្រូវការសម្រាប់ Test Scripts',
        'ដោយកំណត់ចំនួន Commit ដែលអាចធ្វើបាន'
      ],
      correct: 1,
      explanation: 'CI/CD Pipelines ស្វ័យប្រវត្តិកម្មការ Build, Test, និង Deploy នៃ Code Changes ដែលជួយដល់ Automation ។'
    },
    {
      question: 'តើ `Issue Tracking` ក្នុង GitLab ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីគ្រប់គ្រង Server Infrastructure',
        'ដើម្បីគ្រប់គ្រងភារកិច្ច Bug និង Feature Requests',
        'ដើម្បីបង្កើត User Accounts',
        'ដើម្បីតាមដាន Network Traffic'
      ],
      correct: 1,
      explanation: 'Issue Tracking ក្នុង GitLab ត្រូវបានប្រើដើម្បីគ្រប់គ្រងភារកិច្ច Bug និង Feature Requests ។'
    },
    {
      question: 'តើ `Code Review` ក្នុង GitLab ត្រូវបានធ្វើឡើងតាមរយៈមុខងារមួយណា?',
      options: [
        'Issue Boards',
        'Wiki Pages',
        'Merge Requests (MRs)',
        'CI/CD Pipelines'
      ],
      correct: 2,
      explanation: 'Code Review ក្នុង GitLab ត្រូវបានធ្វើឡើងតាមរយៈ Merge Requests (MRs) ។'
    },
    {
      question: 'តើ `Container Registry` ក្នុង GitLab ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីរក្សាទុក Source Code',
        'ដើម្បីរក្សាទុក Database Backups',
        'ដើម្បីរក្សាទុក Docker Images',
        'ដើម្បីរក្សាទុក Project Documentation'
      ],
      correct: 2,
      explanation: 'Container Registry ក្នុង GitLab ត្រូវបានប្រើដើម្បីរក្សាទុក Docker Images ។'
    },
    {
      question: 'តើ `GitLab` ជួយកាត់បន្ថយ `Toolchain Complexity` យ៉ាងដូចម្តេច?',
      options: [
        'ដោយតម្រូវឱ្យប្រើឧបករណ៍ជាច្រើន',
        'ដោយផ្តល់នូវឧបករណ៍ទាំងអស់ដែលត្រូវការក្នុងវេទិកាតែមួយ',
        'ដោយលុបបំបាត់តម្រូវការសម្រាប់ Version Control',
        'ដោយធ្វើឱ្យ Software ដំណើរការតែលើប្រព័ន្ធប្រតិបត្តិការជាក់លាក់'
      ],
      correct: 1,
      explanation: 'GitLab ជួយកាត់បន្ថយ Toolchain Complexity ដោយផ្តល់នូវឧបករណ៍ទាំងអស់ដែលត្រូវការក្នុងវេទិកាតែមួយ។'
    },
    {
      question: 'តើ `GitLab.com` តម្រូវឱ្យអ្នកគ្រប់គ្រង Infrastructure ផ្ទាល់ខ្លួនដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Premium Tiers', 'តែសម្រាប់ Enterprise Tiers'],
      correct: 1,
      explanation: 'ទេ GitLab.com គឺជា SaaS ដែល Host ដោយ GitLab ដូច្នេះអ្នកមិនចាំបាច់គ្រប់គ្រង Infrastructure ផ្ទាល់ខ្លួនទេ។'
    },
    {
      question: 'តើ `Self-managed Version` របស់ GitLab ផ្តល់នូវការគ្រប់គ្រងពេញលេញលើទិន្នន័យ និង Infrastructure ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Community Edition', 'តែសម្រាប់ Enterprise Edition'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Self-managed Version របស់ GitLab ផ្តល់នូវការគ្រប់គ្រងពេញលេញលើទិន្នន័យ និង Infrastructure របស់អ្នក។'
    },
    {
      question: 'តើ `Monitoring` ក្នុង GitLab ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីគ្រប់គ្រង User Permissions',
        'ដើម្បីតាមដាន Performance របស់ Application',
        'ដើម្បីបង្កើត New Projects',
        'ដើម្បីធ្វើ Code Review'
      ],
      correct: 1,
      explanation: 'Monitoring ក្នុង GitLab ត្រូវបានប្រើដើម្បីតាមដាន Performance របស់ Application ។'
    },
    {
      question: 'តើ `GitLab` ជួយសម្រួលដល់ `DevOps Workflow` ដោយរបៀបណា?',
      options: [
        'ដោយបំបែក Dev និង Ops Teams',
        'ដោយផ្តល់នូវឧបករណ៍ទាំងអស់ដែលត្រូវការក្នុងវេទិកាតែមួយ',
        'ដោយធ្វើឱ្យ CI/CD ដំណើរការដោយដៃ',
        'ដោយលុបបំបាត់តម្រូវការសម្រាប់ការធ្វើតេស្ត'
      ],
      correct: 1,
      explanation: 'GitLab ជួយសម្រួលដល់ DevOps Workflow ដោយផ្តល់នូវឧបករណ៍ទាំងអស់ដែលត្រូវការក្នុងវេទិកាតែមួយ។'
    },
    {
      question: 'តើ `GitLab CE` គឺជាកំណែឥតគិតថ្លៃ និងបើកចំហរ (Open Source) ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Project តូចៗប៉ុណ្ណោះ', 'តែសម្រាប់ Project ផ្ទាល់ខ្លួនប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab Community Edition (CE) គឺជាកំណែឥតគិតថ្លៃ និងបើកចំហរ (Open Source) ។'
    }
  ],
 lab: {
  task: `
បង្កើត Project ថ្មីមួយនៅលើ GitLab និងស្គាល់មុខងារសំខាន់ៗរបស់វា៖
* បង្កើត GitLab Project ថ្មីមួយ។
* បន្ថែម File README.md ដើម្បីណែនាំអំពី Project។
* បង្កើត Issue មួយ។
* បង្កើត Merge Request មួយ។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. ចូលទៅ **GitLab.com** និងបង្កើតគណនីឥតគិតថ្លៃ ឬប្រើគណនីដែលមានស្រាប់។
2. បង្កើត Project ថ្មីមួយដែលមានឈ្មោះ **'gitlab-learning-project'** និងកំណត់ **Visibility Level** ជា **Public** ដោយធីក Option **Initialize repository with a README**។
3. បន្ថែម File **'README.md'** ដោយប្រើ GitLab UI ជាមួយនឹងខ្លឹមសារសង្ខេបអំពី Project (ឧទាហរណ៍៖ "# GitLab Learning Project\nIntroduction to GitLab features.")។
4. បង្កើត **Issue** មួយនៅក្នុង Project ដែលមានចំណងជើង **"Create project wiki"** និងពិពណ៌នាថា "បន្ថែមឯកសារសម្រាប់ Project នៅក្នុង GitLab Wiki"។
5. បង្កើត Branch **'docs-update'** នៅលើ GitLab UI និងបន្ថែម File **'guide.txt'** ជាមួយខ្លឹមសារសាមញ្ញ (ឧទាហរណ៍៖ "Basic project guidelines.")។
6. បង្កើត **Merge Request** សម្រាប់ Branch **'docs-update'** ទៅ Branch **'main'** ជាមួយចំណងជើង **"Add project guidelines"** និងពិពណ៌នាថា "បន្ថែមឯកសារណែនាំសម្រាប់ Project"។
7. ពិនិត្យ **Project Overview Page** ដើម្បីបញ្ជាក់ថា Project, File (\`README.md\`, \`guide.txt\`), Issue, និង Merge Request ត្រូវបានបង្កើតជោគជ័យ។
`,
  solution: `
# ដំណោះស្រាយ៖ បង្កើត Project និងស្គាល់មុខងារ GitLab

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១ និង ២៖ ចូលទៅ GitLab.com និងបង្កើត Project
អ្នកបានចូលទៅ **GitLab.com** និងបង្កើត Project ថ្មីឈ្មោះ \`gitlab-learning-project\` ជាមួយនឹង **Visibility Level** ជា **Public** និង Initialize ជាមួយ README។

## ជំហានទី ៣៖ បន្ថែម README.md
អ្នកបានបន្ថែម File \`README.md\` ដោយប្រើ GitLab UI ដែលមានខ្លឹមសារដូចខាងក្រោម៖
\`\`\`
# GitLab Learning Project
Introduction to GitLab features.
\`\`\`

## ជំហានទី ៤៖ បង្កើត Issue
អ្នកបានបង្កើត Issue ដែលមាន៖
\`\`\`
Title: Create project wiki
Description: បន្ថែមឯកសារសម្រាប់ Project នៅក្នុង GitLab Wiki
\`\`\`

## ជំហានទី ៥ និង ៦៖ បង្កើត Branch និង Merge Request
អ្នកបានបង្កើត Branch \`docs-update\` និងបន្ថែម File \`guide.txt\` ដែលមានខ្លឹមសារដូចខាងក្រោម៖
\`\`\`
Basic project guidelines.
\`\`\`
បន្ទាប់មក អ្នកបានបង្កើត **Merge Request** ដែលមាន៖
\`\`\`
Title: Add project guidelines
Description: បន្ថែមឯកសារណែនាំសម្រាប់ Project
Source Branch: docs-update
Target Branch: main
\`\`\`

## ជំហានទី ៧៖ ពិនិត្យ Project Overview
នៅក្នុង **Project Overview Page** អ្នកអាចមើលឃើញ៖
* **Project Name**: \`gitlab-learning-project\`
* **Files**: \`README.md\`, \`guide.txt\`
* **Issue**: "Create project wiki"
* **Merge Request**: "Add project guidelines"

លំហាត់នេះបានជួយអ្នកឱ្យស្គាល់ពីការបង្កើត **Project**, **Issue**, និង **Merge Request** នៅក្នុង GitLab។
`
    }
};

export default GitLabLesson1_1Content;