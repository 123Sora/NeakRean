import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson6_2Content: LessonContent = {
  title: 'គន្លឹះ និង Best Practices',
  objectives: [
    'យល់ដឹងពី Best Practices សម្រាប់ Git Workflow',
    'ស្គាល់ពីគន្លឹះសម្រាប់ការបង្កើនប្រសិទ្ធភាព CI/CD Pipelines',
    'ដឹងពី Best Practices សម្រាប់សុវត្ថិភាពក្នុង GitLab',
    'រៀនពីរបៀបសហការប្រកបដោយប្រសិទ្ធភាពដោយប្រើ GitLab Features',
    'ស្គាល់ពីគន្លឹះសម្រាប់ការគ្រប់គ្រង Project និង Group'
  ],
  content: `
# គន្លឹះ និង Best Practices ✨ best-practices

ការប្រើប្រាស់ GitLab ប្រកបដោយប្រសិទ្ធភាពមិនត្រឹមតែទាក់ទងនឹងការស្គាល់មុខងាររបស់វាប៉ុណ្ណោះទេ ប៉ុន្តែក៏ទាក់ទងនឹងការអនុវត្តន៍ Best Practices ផងដែរ។ មេរៀននេះនឹងផ្តល់ជូននូវគន្លឹះ និងការណែនាំដើម្បីជួយអ្នក និងក្រុមរបស់អ្នកឱ្យទទួលបានអត្ថប្រយោជន៍អតិបរមាពី GitLab ។

## 1. Git Workflow Best Practices 🌿

* **Consistent Branching Strategy:**
    * ប្រើ Strategy ដូចជា Git Flow ឬ GitLab Flow ។
    * រក្សា \`main\` (ឬ \`master\`) branch ឱ្យមានស្ថេរភាព និង Deployable ជានិច្ច។
    * ប្រើ \`feature\` branches សម្រាប់ Changes ថ្មីនីមួយៗ។
* **Clear Commit Messages:**
    * សរសេរ Commit Message ដែលមានអត្ថន័យ និងពិពណ៌នា។
    * ប្រើ Subject Line ខ្លី (50 តួអក្សរ) និង Body លម្អិត (ប្រសិនបើចាំបាច់) ។
    * ឧទាហរណ៍៖ \`feat: Add user profile page\` ឬ \`fix: Fix login button alignment\` ។
* **Small, Focused Commits:**
    * ធ្វើ Commit តូចៗដែលផ្តោតលើ Changes តែមួយ។ នេះធ្វើឱ្យ Code Review កាន់តែងាយស្រួល និង Rollback កាន់តែមានសុវត្ថិភាព។
* **Regular Pull/Merge Requests:**
    * បង្កើត Pull/Merge Request ឱ្យបានញឹកញាប់ ដើម្បីទទួលបាន Feedback ឆាប់រហ័ស។
    * អនុវត្ត Code Review យ៉ាងហ្មត់ចត់។

## 2. CI/CD Pipeline Optimization 🚀

* **Fast Feedback Loop:**
    * រក្សា CI/CD Pipelines ឱ្យដំណើរការលឿនតាមដែលអាចធ្វើទៅបាន។
    * ប្រើ Parallelism (ដំណើរការ Jobs ស្របគ្នា) ។
    * Cache Dependencies ។
* **Modular Pipelines:**
    * បំបែក Pipeline ទៅជា Stages និង Jobs តូចៗដែលអាចប្រើឡើងវិញបាន។
    * ប្រើ \`include\` Keyword ដើម្បីរួមបញ្ចូល Templates ឬ Components Pipeline ។
* **Use Caching:**
    * Cache Dependencies (Node modules, Python packages) ដើម្បីបង្កើនល្បឿន Build ។
* **Artifacts Management:**
    * កំណត់ \`expire_in\` សម្រាប់ Artifacts ដើម្បីសន្សំទំហំផ្ទុក។
    * រក្សាទុកតែ Artifacts ដែលចាំបាច់ប៉ុណ្ណោះ។
* **Secure Variables:**
    * ប្រើ CI/CD Variables ដែល Protected និង Masked សម្រាប់ Sensitive Information (API Keys, Passwords) ។

## 3. Security Best Practices 🔒

* **Enable Security Scans:**
    * បើក SAST, DAST, Dependency Scanning, Container Scanning, និង Secret Detection នៅក្នុង Pipelines របស់អ្នក។
    * ដោះស្រាយភាពងាយរងគ្រោះដែលបានរកឃើញភ្លាមៗ។
* **Protected Branches:**
    * ការពារ Branches សំខាន់ៗ (ឧទាហរណ៍៖ \`main\`, \`production\`) ។
    * តម្រូវឱ្យមាន Approvals សម្រាប់ Merge Requests ទៅកាន់ Protected Branches ។
* **Minimal Permissions (Least Privilege):**
    * ផ្តល់ឱ្យ Users នូវ Permissions តិចបំផុតដែលពួកគេត្រូវការដើម្បីបំពេញការងាររបស់ពួកគេ។
    * ប្រើ Groups ដើម្បីគ្រប់គ្រង Permissions ប្រកបដោយប្រសិទ្ធភាព។
* **Personal Access Tokens (PATs) Management:**
    * កំណត់ Expiration Date សម្រាប់ PATs ។
    * ផ្តល់ Scopes ដែលមានដែនកំណត់បំផុត។
    * រក្សាទុក PATs ដោយសុវត្ថិភាព (ឧទាហរណ៍៖ ក្នុង Secret Management System) ។
* **Audit Events:**
    * ពិនិត្យ Audit Events ឱ្យបានទៀងទាត់ដើម្បីតាមដានសកម្មភាពសំខាន់ៗ។

## 4. Collaboration and Communication 💬

* **Effective Merge Request Descriptions:**
    * ផ្តល់ Description លម្អិតសម្រាប់ Merge Requests រួមទាំងគោលបំណង Changes, របៀប Test, និង Screenshots (ប្រសិនបើចាំបាច់) ។
* **Use Issues for Tracking:**
    * ប្រើ Issues ដើម្បីតាមដាន Bugs, Features, និង Tasks ។
    * ភ្ជាប់ Issues ទៅ Merge Requests ។
* **Labels and Milestones:**
    * ប្រើ Labels ដើម្បីចាត់ថ្នាក់ Issues និង MRs ។
    * ប្រើ Milestones ដើម្បីរៀបចំការងារទៅជា Iterations ឬ Releases ។
* **Discussions and Comments:**
    * ប្រើ Comment និង Discussion Threads នៅក្នុង Issues និង MRs សម្រាប់ការទំនាក់ទំនង។
* **Wiki and Snippets:**
    * ប្រើ Wiki សម្រាប់ Project Documentation ។
    * ប្រើ Snippets សម្រាប់ Code Snippets ដែលអាចប្រើឡើងវិញបាន។

## 5. Project and Group Management 📊

* **Organize with Groups and Subgroups:**
    * រៀបចំ Projects របស់អ្នកទៅជា Groups និង Subgroups សម្រាប់រចនាសម្ព័ន្ធ និងការគ្រប់គ្រង Permissions កាន់តែប្រសើរ។
* **Project Templates:**
    * បង្កើត Project Templates សម្រាប់ Projects ថ្មី ដើម្បីធានាភាពស៊ីសង្វាក់គ្នា។
* **Webhooks and Integrations:**
    * ប្រើ Webhooks ដើម្បីរួមបញ្ចូល GitLab ជាមួយ Tools ខាងក្រៅ (ឧទាហរណ៍៖ Slack, Jira) ។
* **Cleanup Policies:**
    * កំណត់ Cleanup Policies សម្រាប់ Container Registry ដើម្បីលុប Images ចាស់ៗដោយស្វ័យប្រវត្តិ។

> **គន្លឹះ:** ការអនុវត្តន៍ Best Practices ទាំងនេះនឹងជួយអ្នកបង្កើនប្រសិទ្ធភាពការងាររបស់អ្នក ធានាសុវត្ថិភាព Project របស់អ្នក និងលើកកម្ពស់ការសហការក្នុងក្រុម�。
`,
  examples: [
    `
### ឧទាហរណ៍ ១: Commit Message ល្អ និងមិនល្អ
ការសរសេរ Commit Message ល្អគឺជា Best Practice សំខាន់។
\`\`\`text
// Commit Message ល្អ
feat: Add user profile page with basic info display

This commit introduces the initial user profile page.
- Implemented frontend UI for displaying user details.
- Added API endpoint for fetching user data.
- Updated routing to include '/profile' path.

// Commit Message មិនល្អ
Update code
\`\`\`

### ឧទាហរណ៍ ២: ការប្រើប្រាស់ CI/CD Caching
នេះជាឧទាហរណ៍នៃរបៀបដែល Caching អាចត្រូវបានកំណត់រចនាសម្ព័ន្ធក្នុង .gitlab-ci.yml ដើម្បីបង្កើនល្បឿន Build ។
\`\`\`yaml
# .gitlab-ci.yml ឧទាហរណ៍ជាមួយ Caching
stages:
  - build
  - test

variables:
  PIP_CACHE_DIR: "$CI_PROJECT_DIR/.cache/pip" # កំណត់ Cache directory សម្រាប់ pip

cache:
  paths:
    - .cache/pip/ # Cache Python packages
  key: "$CI_COMMIT_REF_SLUG" # Key based on branch name

build_job:
  stage: build
  image: python:3.9-slim-buster
  script:
    - pip install -r requirements.txt
    - echo "Build completed."

test_job:
  stage: test
  image: python:3.9-slim-buster
  script:
    - pip install -r requirements.txt # Dependencies will be loaded from cache
    - pytest
  needs: ["build_job"]
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `main` branch គួរតែមានលក្ខណៈបែបណាជានិច្ចនៅក្នុង Git Workflow Best Practices?',
      options: [
        'មាន Code ដែលមិនទាន់រួចរាល់',
        'មាន Code ដែលអាច Deploy បាន (Stable and Deployable)',
        'មានតែ Code Review ប៉ុណ្ណោះ',
        'មានតែ Features ថ្មីៗប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'នៅក្នុង Git Workflow Best Practices, `main` branch គួរតែមានស្ថេរភាព និង Deployable ជានិច្ច។'
    },
    {
      question: 'តើ `Commit Message` ល្អគួរមានលក្ខណៈបែបណា?',
      options: [
        'ខ្លីៗ និងមិនមានអត្ថន័យ',
        'មានអត្ថន័យ និងពិពណ៌នា',
        'មានតែលេខកូដប៉ុណ្ណោះ',
        'មានតែឈ្មោះអ្នកនិពន្ធ'
      ],
      correct: 1,
      explanation: 'Commit Message ល្អគួរតែមានអត្ថន័យ និងពិពណ៌នាអំពី Changes ដែលបានធ្វើ។'
    },
    {
      question: 'តើការធ្វើ `Commit` តូចៗ និងផ្តោតលើ Changes តែមួយផ្តល់អត្ថប្រយោជន៍អ្វី?',
      options: [
        'ធ្វើឱ្យ Code Review ពិបាក',
        'ធ្វើឱ្យ Rollback ស្មុគស្មាញ',
        'ធ្វើឱ្យ Code Review កាន់តែងាយស្រួល និង Rollback កាន់តែមានសុវត្ថិភាព',
        'បង្កើនទំហំ Repository'
      ],
      correct: 2,
      explanation: 'ការធ្វើ Commit តូចៗ និងផ្តោតលើ Changes តែមួយធ្វើឱ្យ Code Review កាន់តែងាយស្រួល និង Rollback កាន់តែមានសុវត្ថិភាព។'
    },
    {
      question: 'តើ `Fast Feedback Loop` នៅក្នុង CI/CD មានន័យដូចម្តេច?',
      options: [
        'Pipeline ដំណើរការយឺត',
        'Pipeline ផ្តល់លទ្ធផលត្រឡប់មកវិញយ៉ាងឆាប់រហ័ស',
        'Pipeline មិនផ្តល់ Feedback ទេ',
        'Pipeline ដំណើរការដោយដៃ'
      ],
      correct: 1,
      explanation: 'Fast Feedback Loop មានន័យថា CI/CD Pipelines គួរតែដំណើរការលឿនតាមដែលអាចធ្វើទៅបាន ដើម្បីផ្តល់លទ្ធផលត្រឡប់មកវិញយ៉ាងឆាប់រហ័ស។'
    },
    {
      question: 'តើ `Caching Dependencies` ជួយអ្វីខ្លះនៅក្នុង CI/CD?',
      options: [
        'ធ្វើឱ្យ Build យឺត',
        'បង្កើនល្បឿន Build',
        'បង្កើនទំហំ Artifacts',
        'ធ្វើឱ្យ Pipeline បរាជ័យ'
      ],
      correct: 1,
      explanation: 'Caching Dependencies (Node modules, Python packages) ជួយបង្កើនល្បឿន Build ដោយរក្សាទុក Dependencies ដែលបានទាញយកពីមុន�।'
    },
    {
      question: 'តើ `Protected Branches` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីអនុញ្ញាតឱ្យនរណាម្នាក់ Push Code ដោយផ្ទាល់',
        'ដើម្បីការពារ Branches សំខាន់ៗពីការផ្លាស់ប្តូរដោយផ្ទាល់',
        'ដើម្បីលាក់ Branches ពីអ្នកប្រើប្រាស់',
        'ដើម្បីលុប Branches ដោយស្វ័យប្រវត្តិ'
      ],
      correct: 1,
      explanation: 'Protected Branches ត្រូវបានប្រើដើម្បីការពារ Branches សំខាន់ៗ (ឧទាហរណ៍៖ `main`, `production`) ពីការផ្លាស់ប្តូរដោយផ្ទាល់ និងតម្រូវឱ្យមាន Approvals សម្រាប់ Merge Requests ។'
    },
    {
      question: 'តើ `Least Privilege` Principle នៅក្នុង Security មានន័យដូចម្តេច?',
      options: [
        'ផ្តល់ឱ្យ Users នូវ Permissions ទាំងអស់',
        'ផ្តល់ឱ្យ Users នូវ Permissions តិចបំផុតដែលពួកគេត្រូវការ',
        'មិនផ្តល់ Permissions ឱ្យ Users ទេ',
        'ផ្តល់ Permissions ដោយចៃដន្យ'
      ],
      correct: 1,
      explanation: 'Least Privilege Principle មានន័យថាផ្តល់ឱ្យ Users នូវ Permissions តិចបំផុតដែលពួកគេត្រូវការដើម្បីបំពេញការងាររបស់ពួកគេ។'
    },
    {
      question: 'តើ `Personal Access Tokens (PATs)` គួរតែមាន `Scopes` បែបណា?',
      options: [
        'Scopes ទាំងអស់',
        'Scopes ដែលគ្មានដែនកំណត់',
        'Scopes ដែលមានដែនកំណត់បំផុត',
        'គ្មាន Scopes ទេ'
      ],
      correct: 2,
      explanation: 'PATs គួរតែមាន Scopes ដែលមានដែនកំណត់បំផុត ដើម្បីកាត់បន្ថយហានិភ័យសុវត្ថិភាព។'
    },
    {
      question: 'តើ `Audit Events` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបង្កើត Issues',
        'ដើម្បីតាមដានសកម្មភាពសំខាន់ៗនៅក្នុង GitLab',
        'ដើម្បីគ្រប់គ្រង Pipeline Variables',
        'ដើម្បី Deploy Code'
      ],
      correct: 1,
      explanation: 'Audit Events ត្រូវបានប្រើដើម្បីតាបគ្រងរាល់សកម្មភាពសំខាន់ៗនៅក្នុង GitLab សម្រាប់គោលបំណង Audit ។'
    },
    {
      question: 'តើ `Merge Request Descriptions` ល្អគួរមានអ្វីខ្លះ?',
      options: [
        'មានតែ Title ប៉ុណ្ណោះ',
        'មានតែ Code Snippets',
        'មាន Description លម្អិត, គោលបំណង Changes, លနៀប Test, និង Screenshots',
        'មានតែ Links ទៅកាន់ Issues'
      ],
      correct: 2,
      explanation: 'Merge Request Descriptions ល្អគួរតែផ្តល់ព័ត៌មានលម្អិតអំពី Changes, របៀប Test, និង Screenshots (ប្រសិនបើចាំបាច់) ។'
    },
    {
      question: 'តើ `Labels` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង GitLab?',
      options: [
        'ដើម្បីកំណត់ឈ្មោះ Project',
        'ដើម្បីចាត់ថ្នាក់ Issues និង Merge Requests',
        'ដើម្បីកំណត់ User Roles',
        'ដើម្បីគ្រប់គ្រង CI/CD Jobs'
      ],
      correct: 1,
      explanation: 'Labels ត្រូវបានប្រើដើម្បីចាត់ថ្នាក់ Issues និង Merge Requests សម្រាប់ភាពងាយស្រួលក្នុងការរៀបចំ និងតាមដាន។'
    },
    {
      question: 'តើ `Milestones` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់កាលបរិច្ឆេទផុតកំណត់សម្រាប់ Project',
        'ដើម្បីរៀបចំការងារទៅជា Iterations ឬ Releases',
        'ដើម្បីតាមដាន Bugs',
        'ដើម្បីគ្រប់គ្រង Branches'
      ],
      correct: 1,
      explanation: 'Milestones ត្រូវបានប្រើដើម្បីរៀបចំការងារទៅជា Iterations ឬ Releases ។'
    },
    {
      question: 'តើ `Project Templates` ជួយអ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ Project នីមួយៗមានរចនាសម្ព័ន្ធខុសគ្នា',
        'ធានាភាពស៊ីសង្វាក់គ្នានៃ Project Structure សម្រាប់ Projects ថ្មី',
        'បង្កើនទំហំ Project',
        'លុបបំបាត់តម្រូវការសម្រាប់ CI/CD'
      ],
      correct: 1,
      explanation: 'Project Templates ជួយធានាភាពស៊ីសង្វាក់គ្នានៃ Project Structure សម្រាប់ Projects ថ្មី។'
    },
    {
      question: 'តើ `Webhooks` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបង្កើត Issues',
        'ដើម្បីរួមបញ្ចូល GitLab ជាមួយ Tools ខាងក្រៅ (ឧទាហរណ៍៖ Slack, Jira)',
        'ដើម្បីគ្រប់គ្រង User Permissions',
        'ដើម្បី Build Docker Images'
      ],
      correct: 1,
      explanation: 'Webhooks ត្រូវបានប្រើដើម្បីរួមបញ្ចូល GitLab ជាមួយ Tools ខាងក្រៅ (ឧទាហរណ៍៖ Slack, Jira) ។'
    },
    {
      question: 'តើ `Cleanup Policies` សម្រាប់ Container Registry ជួយអ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ Images មានទំហំធំ',
        'សន្សំទំហំផ្ទុកដោយលុប Images ចាស់ៗដោយស្វ័យប្រវត្តិ',
        'បង្កើនចំនួន Images',
        'ធ្វើឱ្យ Images ងាយរងគ្រោះ'
      ],
      correct: 1,
      explanation: 'Cleanup Policies ជួយសន្សំទំហំផ្ទុកដោយលុប Images ចាស់ៗដោយស្វ័យប្រវត្តិពី Container Registry ។'
    },
    {
      question: 'តើ `Modular Pipelines` មានន័យដូចម្តេច?',
      options: [
        'Pipeline ធំមួយដែលមិនអាចបំបែកបាន',
        'បំបែក Pipeline ទៅជា Stages និង Jobs តូចៗដែលអាចប្រើឡើងវិញបាន',
        'Pipeline ដែលដំណើរការតែមួយដង',
        'Pipeline ដែលមិនមាន Stages'
      ],
      correct: 1,
      explanation: 'Modular Pipelines មានន័យថាបំបែក Pipeline ទៅជา Stages និង Jobs តូចៗដែលអាចប្រើឡើងវិញបាន�।'
    },
    {
      question: 'តើ `Git Flow` គឺជាអ្វី?',
      options: [
        'ជាប្រភេទ CI/CD Pipeline',
        'ជា Strategy សម្រាប់ Git Branching',
        'ជាឧបករណ៍សម្រាប់ Security Scanning',
        'ជាវិធីសាស្រ្ត Deployment'
      ],
      correct: 1,
      explanation: 'Git Flow គឺជា Strategy ដ៏ពេញនិយមមួយសម្រាប់ Git Branching ។'
    },
    {
      question: 'តើ `SAST` គឺជាផ្នែកមួយនៃ `Security Best Practices` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ការបើក SAST (Static Application Security Testing) គឺជាផ្នែកមួយនៃ Security Best Practices ។'
    },
    {
      question: 'តើ `Wiki` ក្នុង GitLab ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'សម្រាប់ Code Review',
        'សម្រាប់ Project Documentation',
        'សម្រាប់ Issue Tracking',
        'សម្រាប់ Deployments'
      ],
      correct: 1,
      explanation: 'Wiki ត្រូវបានប្រើសម្រាប់ Project Documentation ។'
    },
    {
      question: 'តើ `Snippets` ក្នុង GitLab ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'សម្រាប់ Code Review',
        'សម្រាប់ Project Documentation',
        'សម្រាប់ Code Snippets ដែលអាចប្រើឡើងវិញបាន',
        'សម្រាប់ Deployments'
      ],
      correct: 2,
      explanation: 'Snippets ត្រូវបានប្រើសម្រាប់ Code Snippets ដែលអាចប្រើឡើងវិញបាន។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: អនុវត្ត Best Practices នៅក្នុង GitLab

លំហាត់នេះនឹងណែនាំអ្នកអនុវត្ត Best Practices នៅក្នុង Project GitLab ដែលមានស្រាប់ (ឧ. \`my-fullstack-devops-app\` ពីមេរៀនមុន)។

**លក្ខខណ្ឌជាមុន:**
* គណនី GitLab.com ឥតគិតថ្លៃ។
* Project GitLab ដែលមានស្រាប់ (ឧ. \`my-fullstack-devops-app\`)។
* Text Editor (ឧ. VS Code)។

## 1. រៀបចំ Project
1. **ចូលទៅ GitLab**:
   * ចូលទៅគណនី GitLab របស់អ្នកនៅ **GitLab.com**។
2. **ជ្រើសរើស Project**:
   * ចូលទៅ Project \`my-fullstack-devops-app\` (ឬ Project ផ្សេងដែលអ្នកមាន)។

## 2. អនុវត្ត Git Workflow Best Practices
1. **បង្កើត Feature Branch**:
   * នៅ **Web IDE**, បង្កើត Branch ៖ \`feature/add-new-feature\`។
2. **ធ្វើ Commit តូចៗ**:
   * កែ File \`frontend/index.html\` (ឧ. បន្ថែម Comment \`<!-- New feature added -->\` នៅខាងលើ \`<h1>\`).
   * **Commit message**: \`feat: Add comment to index.html\`
   * **Target branch**: \`feature/add-new-feature\`
   * ចុច **Commit**.
   * កែ File \`README.md\` (ឧ. កែ Typo ពី "Aplication" ទៅ "Application").
   * **Commit message**: \`fix: Correct typo in README\`
   * **Target branch**: \`feature/add-new-feature\`
   * ចុច **Commit**.
3. **បង្កើត Merge Request**:
   * ចូល **Merge Requests > New merge request**.
   * **Source**: \`feature/add-new-feature\`
   * **Target**: \`main\`
   * **Title**: \`FEAT: Implement new user dashboard\`
   * **Description**:
     \`\`\`markdown
     Implements new user dashboard feature.
     - Added comment to index.html for clarity.
     - Fixed typo in README for accuracy.
     - Test by viewing index.html in browser.
     \`\`\`
   * **Assign reviewers**: (ឧ. Team Lead).
   * ចុច **Create merge request**.
   * **ផ្ទៀងផ្ទាត់**: Pipeline ដំណើរការលើ MR និង Pass។

## 3. កំណត់រចនាសម្ព័ន្ធ CI/CD Optimization
1. **បន្ថែម Caching ទៅ \`.gitlab-ci.yml\`**:
   * នៅ **Web IDE**, បើក \`.gitlab-ci.yml\`។
   * បន្ថែម Cache Configuration នៅខាងលើ \`stages\`:
     \`\`\`yaml
     variables:
       PIP_CACHE_DIR: "$CI_PROJECT_DIR/.cache/pip"

     cache:
       paths:
         - .cache/pip/
       key: "$CI_COMMIT_REF_SLUG"
     \`\`\`
   * កែ Job \`test_backend\` ដើម្បីប្រើ Cache:
     \`\`\`yaml
     test_backend:
       stage: test
       image: python:3.9-slim-buster
       script:
         - pip install -r ./backend/requirements.txt
         - python -m flask --version
         - echo "Backend tests passed!"
       only:
         - main
         - merge_requests
       needs: ["build_backend_image"]
     \`\`\`
   * **Commit message**: \`chore: Add caching to CI/CD pipeline\`
   * **Target branch**: \`main\`
   * ចុច **Commit**.
2. **កំណត់ Artifacts Expiration**:
   * កែ Job \`deploy_frontend_pages\` ដើម្បីបន្ថែម \`expire_in\`:
     \`\`\`yaml
     deploy_frontend_pages:
       stage: deploy
       script:
         - mkdir .public
         - cp -r frontend/* .public/
         - mv .public public
         - echo "Frontend deployed to public directory."
       artifacts:
         paths:
           - public
         expire_in: 1 week
       only:
         - main
       needs: ["sast_scan"]
     \`\`\`
   * **Commit message**: \`chore: Add artifacts expiration to deploy job\`
   * **Target branch**: \`main\`
   * ចុច **Commit**.
3. **ផ្ទៀងផ្ទាត់**:
   * ចូល **CI/CD > Pipelines** ដើម្បីពិនិត្យ Pipeline Log។
   * ផ្ទៀងផ្ទាត់ថា Cache ត្រូវបានប្រើ (ឧ. \`pip install\` លឿនជាងមុន)។
   * ផ្ទៀងផ្ទាត់ថា Artifacts មាន \`expire_in: 1 week\` នៅក្នុង Pipeline Artifacts។

## 4. អនុវត្ត Security និង Collaboration
1. **ការពារ \`main\` Branch**:
   * ចូល **Settings > Repository > Protected branches**.
   * បន្ថែម \`main\` ជា Protected Branch:
     * **Allowed to merge**: Maintainers
     * **Allowed to push**: No one
     * **Require approvals**: 1
   * ចុច **Protect**.
2. **បើក Security Scans**:
   * នៅ **Web IDE**, បើក \`.gitlab-ci.yml\`។
   * ផ្ទៀងផ្ទាត់ថា Jobs \`sast_scan\` និង \`container_scan\` មាន។
   * **Commit message**: \`chore: Verify security scans in pipeline\`
   * **Target branch**: \`main\`
   * ចុច **Commit**.
3. **បន្ថែម Labels និង Milestones**:
   * ចូល **Issues > Labels**.
   * បង្កើត Labels:
     * \`feature\` (Color: #28a745)
     * \`bug\` (Color: #dc3545)
   * ចូល **Issues > Milestones**.
   * បង្កើត Milestone:
     * **Title**: \`Release 1.0\`
     * **Due date**: (ឧ. 1 ខែពីឥឡូវ)។
   * ចូល **Issues > New issue**.
   * **Title**: \`Implement user dashboard\`
   * **Description**: \`Add user dashboard to frontend.\`
   * **Labels**: \`feature\`
   * **Milestone**: \`Release 1.0\`
   * ចុច **Create issue**.
4. **ផ្ទៀងផ្ទាត់**:
   * ចូល **Settings > Repository**, ផ្ទៀងផ្ទាត់ \`main\` ជា Protected Branch។
   * ចូល **Security & Compliance > Security Dashboard**, ពិនិត្យ Vulnerabilities។
   * ចូល **Issues**, ផ្ទៀងផ្ទាត់ Issue ថ្មីជាមួយ Label និង Milestone។

## 5. បន្ថែម Wiki និង Snippet
1. **បង្កើត Wiki Page**:
   * ចូល **Wiki > Create new page**.
   * **Title**: \`Project Setup Guide\`
   * **Content**:
     \`\`\`markdown
     # Project Setup Guide
     - Clone repository: \`git clone <repository_url>\`
     - Install dependencies: \`pip install -r backend/requirements.txt\`
     - Run locally: \`python backend/app.py\`
     \`\`\`
   * ចុច **Create page**.
2. **បង្កើត Snippet**:
   * ចូល **Snippets > New snippet**.
   * **Title**: \`Sample API Call\`
   * **Content**:
     \`\`\`javascript
     fetch('/api/hello')
       .then(response => response.json())
       .then(data => console.log(data.message))
       .catch(error => console.error('Error:', error));
     \`\`\`
   * **Visibility**: Private
   * ចុច **Create snippet**.
3. **ផ្ទៀងផ្ទាត់**:
   * ចូល **Wiki**, ផ្ទៀងផ្ទាត់ \`Project Setup Guide\` Page។
   * ចូល **Snippets**, ផ្ទៀងផ្ទាត់ \`Sample API Call\` Snippet។

> **គន្លឹះ:** ពិនិត្យ Pipeline Logs, Protected Branches, Security Dashboard, Issues, Wiki, និង Snippets ដើម្បីផ្ទៀងផ្ទាត់ Best Practices។
`,
    solution: `
# ដំណោះស្រាយ: អនុវត្ត Best Practices នៅក្នុង GitLab

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## 1. រៀបចំ Project
* **Project**: \`my-fullstack-devops-app\` បានជ្រើសរើស។
* **Status**: ចូលទៅ Project នៅ GitLab.com។

## 2. Git Workflow Best Practices
* **Feature Branch**:
  * Branch: \`feature/add-new-feature\`
* **Commits**:
  * File: \`frontend/index.html\`
    \`\`\`html
    + <!-- New feature added -->
      <h1>Welcome to Fullstack App!</h1>
    \`\`\`
    * Commit message: \`feat: Add comment to index.html\`
  * File: \`README.md\`
    \`\`\`diff
    - Aplication setup guide
    + Application setup guide
    \`\`\`
    * Commit message: \`fix: Correct typo in README\`
* **Merge Request**:
  * Title: \`FEAT: Implement new user dashboard\`
  * Description:
    \`\`\`markdown
    Implements new user dashboard feature.
    - Added comment to index.html for clarity.
    - Fixed typo in README for accuracy.
    - Test by viewing index.html in browser.
    \`\`\`
  * Status: Pipeline Passed, MR Ready for Review.

## 3. CI/CD Optimization
* **Caching**:
  * \`.gitlab-ci.yml\`:
    \`\`\`yaml
    variables:
      PIP_CACHE_DIR: "$CI_PROJECT_DIR/.cache/pip"

    cache:
      paths:
        - .cache/pip/
      key: "$CI_COMMIT_REF_SLUG"

    test_backend:
      stage: test
      image: python:3.9-slim-buster
      script:
        - pip install -r ./backend/requirements.txt
        - python -m flask --version
        - echo "Backend tests passed!"
      only:
        - main
        - merge_requests
      needs: ["build_backend_image"]
    \`\`\`
  * Commit message: \`chore: Add caching to CI/CD pipeline\`
* **Artifacts Expiration**:
  * \`.gitlab-ci.yml\`:
    \`\`\`yaml
    deploy_frontend_pages:
      stage: deploy
      script:
        - mkdir .public
        - cp -r frontend/* .public/
        - mv .public public
        - echo "Frontend deployed to public directory."
      artifacts:
        paths:
          - public
        expire_in: 1 week
      only:
        - main
      needs: ["sast_scan"]
    \`\`\`
  * Commit message: \`chore: Add artifacts expiration to deploy job\`
* **Verification**:
  * Pipeline Log: \`pip install\` uses cache, faster execution.
  * Artifacts: \`public\` directory expires in 1 week.

## 4. Security និង Collaboration
* **Protected Branch**:
  * Branch: \`main\`
  * Settings: Allowed to merge (Maintainers), Allowed to push (No one), 1 Approval required.
* **Security Scans**:
  * Jobs: \`sast_scan\`, \`container_scan\` verified in \`.gitlab-ci.yml\`.
  * Security Dashboard: Displays vulnerabilities (e.g., Hardcoded secrets).
* **Labels and Milestones**:
  * Labels: \`feature\` (#28a745), \`bug\` (#dc3545).
  * Milestone: \`Release 1.0\` with due date.
  * Issue: \`Implement user dashboard\` with \`feature\` label and \`Release 1.0\` milestone.

## 5. Wiki និង Snippet
* **Wiki**:
  * Page: \`Project Setup Guide\`
    \`\`\`markdown
    # Project Setup Guide
    - Clone repository: \`git clone <repository_url>\`
    - Install dependencies: \`pip install -r backend/requirements.txt\`
    - Run locally: \`python backend/app.py\`
    \`\`\`
* **Snippet**:
  * Title: \`Sample API Call\`
    \`\`\`javascript
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => console.log(data.message))
      .catch(error => console.error('Error:', error));
    \`\`\`
  * Visibility: Private

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Git Workflow**: Feature branch, small commits, detailed MR created.
* **CI/CD**: Caching implemented, artifacts expire in 1 week.
* **Security**: \`main\` branch protected, security scans active.
* **Collaboration**: Labels, milestones, and issue created.
* **Documentation**: Wiki page and snippet added.

លំហាត់នេះបានបង្ហាញការអនុវត្ត Best Practices សម្រាប់ Git Workflow, CI/CD, Security, Collaboration, និង Documentation នៅក្នុង GitLab។
`
  }
};

export default GitLabLesson6_2Content;
