// src/components/lessons/gitlab/GitLabLesson4_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson4_1Content: LessonContent = {
  title: 'ណែនាំអំពី CI/CD និង GitLab CI/CD',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Continuous Integration (CI)',
    'យល់ដឹងពីអ្វីទៅជា Continuous Delivery (CD) និង Continuous Deployment (CD)',
    'ស្គាល់ពីអត្ថប្រយោជន៍សំខាន់ៗនៃ CI/CD',
    'ដឹងពីរបៀបដែល GitLab CI/CD ត្រូវបានបង្ផើតឡើងនៅក្នុង GitLab Platform',
    'យល់ដឹងពីសមាសធាតុសំខាន់ៗនៃ GitLab CI/CD (Pipelines, Jobs, Stages)'
  ],
  content: `
# ណែនាំអំពី CI/CD និង GitLab CI/CD 🚀 automate

---

**Continuous Integration (CI)** និង **Continuous Delivery (CD)** គឺជាការអនុវត្តន៍ DevOps ដែលជួយក្រុមអភិវឌ្ឍន៍ Software ឱ្យបង្ផើត បញ្ចូល និង Deploy Code Changes ញឹកញាប់ និងគួរឱ្យទុកចិត្ត។ **GitLab CI/CD** គឺជាឧបករណ៍ CI/CD ដែលត្រូវបានបង្ផើតឡើងយ៉ាងពេញលេញនៅក្នុង GitLab ដែលអនុញ្ញាតឱ្យអ្នកធ្វើស្វ័យប្រវត្តិកម្មវដ្តជីវិតអភិវឌ្ឍន៍ Software របស់អ្នក។

---

## 1. អ្វីទៅជា Continuous Integration (CI)? 🔄

**Continuous Integration (CI)** គឺជាការអនុវត្តន៍នៃការបញ្ចូល Code Changes របស់ Developers ទៅក្នុង Repository កណ្តាលញឹកញាប់ (ជាធម្មតាជាច្រើនដងក្នុងមួយថ្ងៃ) ។ រាល់ការបញ្ចូល (Commit) ត្រូវបាន Build និង Test ដោយស្វ័យប្រវត្តិ។

* **គោលបំណង:**
    * **រកឃើញ Bug ឆាប់រហ័ស:** កំណត់អត្តសញ្ញាណ និងដោះស្រាយបញ្ហា Integration ឱ្យបានឆាប់តាមដែលអាចធ្វើទៅបាន។
    * **កាត់បន្ថយ Conflict:** កាត់បន្ថយចំនួន Merge Conflict ដោយការបញ្ចូល Code ញឹកញាប់។
    * **បង្ផើនគុណភាព Code:** ធានាថា Codebase មានស្ថេរភាព និងអាចដំណើរការបានជានិច្ច។
* **ដំណើរការ:**
    1.  Developer Commit Code Changes ។
    2.  CI System (ដូចជា GitLab CI/CD) រកឃើញ Changes ។
    3.  Code ត្រូវបាន Build ។
    4.  Automated Tests ត្រូវបានដំណើរការ។
    5.  ប្រសិនបើ Tests ទាំងអស់ Pass, Code ត្រូវបានបញ្ចូល។ បើបរាជ័យ, Developer ត្រូវបានជូនដំណឹង។

---

## 2. អ្វីទៅជា Continuous Delivery (CD) និង Continuous Deployment (CD)? 🚚

**Continuous Delivery (CD):**
* ជាការអនុវត្តន៍ដែលធានាថា Codebase តែងតែស្ថិតក្នុងស្ថានភាពដែលអាច Deploy បានទៅកាន់ Production Environment ។
* រាល់ Changes ដែលបានឆ្លងកាត់ CI ត្រូវបានរៀបចំសម្រាប់ Release ទៅកាន់ Environment ណាមួយ (Testing, Staging, Production) ។
* **ការ Deploy ទៅ Production នៅតែជាជំហានដោយដៃ** ដែលទាមទារការអនុម័តពីមនុស្ស។

**Continuous Deployment (CD):**
* ជាការពង្រីកនៃ Continuous Delivery ។
* រាល់ Changes ដែលបានឆ្លងកាត់ CI និង Automated Testing ត្រូវបាន **Deploy ដោយស្វ័យប្រវត្តិ** ទៅកាន់ Production Environment ដោយគ្មានការអន្តរាគមន៍ពីមនុស្ស។
* **គោលបំណង:** បង្ផើនល្បឿននៃការផ្តល់មុខងារថ្មីៗដល់អ្នកប្រើប្រាស់។

---

## 3. អត្ថប្រយោជន៍សំខាន់ៗនៃ CI/CD ✨

* **ល្បឿនលឿន:** ផ្តល់ Software ទៅកាន់អ្នកប្រើប្រាស់បានលឿនជាងមុន។
* **គុណភាពខ្ពស់:** រកឃើញ Bug ឆាប់រហ័ស និងកាត់បន្ថយកំហុស។
* **ការសហការប្រសើរឡើង:** ក្រុមអាចធ្វើការរួមគ្នាបានរលូនជាងមុន។
* **កាត់បន្ថយហានិភ័យ:** ការផ្លាស់ប្តូរតូចៗញឹកញាប់ កាត់បន្ថយហានិភ័យនៃការ Deploy ។
* **មតិកែលម្អរហ័ស:** ទទួលបានមតិកែលម្អភ្លាមៗលើ Changes ។

---

## 4. GitLab CI/CD: ឧបករណ៍ CI/CD ដែលត្រូវបានបង្ផើតឡើង 🛠️

GitLab CI/CD គឺជាផ្នែកសំខាន់មួយនៃ GitLab Platform ។ វាត្រូវបានរួមបញ្ចូលយ៉ាងពេញលេញជាមួយ Source Code Management, Issue Tracking, និង Project Management ។

* **Unified Platform:** មិនចាំបាច់ប្រើឧបករណ៍ CI/CD ខាងក្រៅទេ។
* **Configuration as Code:** Pipelines ត្រូវបានកំណត់រចនាសម្ព័ន្ធដោយប្រើ File \`.gitlab-ci.yml\` ដែលរក្សាទុកក្នុង Repository របស់អ្នក។
* **Auto DevOps:** ផ្តល់នូវ CI/CD Pipeline ដែលបានកំណត់ជាមុនសម្រាប់ Project របស់អ្នក។

---

## 5. សមាសធាតុសំខាន់ៗនៃ GitLab CI/CD 🏗️

* **Pipeline (បំពង់បង្ហូរ):**
    * ជា Workflow ពេញលេញនៃ CI/CD ។
    * តំណាងឱ្យដំណើរការ Build, Test, Deploy ទាំងមូល។
    * ត្រូវបាន Trigger ដោយ Commits, Merge Requests, Tags, ឬ Schedule ។
* **Stage (ដំណាក់កាល):**
    * ជាក្រុមនៃ Jobs ដែលដំណើរការស្របគ្នា។
    * Pipelines ត្រូវបានបែងចែកជា Stages (ឧទាហរណ៍៖ \`build\`, \`test\`, \`deploy\`) ។
    * Jobs ក្នុង Stage មួយចាប់ផ្តើមតែនៅពេលដែល Jobs ទាំងអស់នៅក្នុង Stage មុនបានបញ្ចប់ដោយជោគជ័យ។
* **Job (ការងារ):**
    * ជាភារកិច្ចជាក់លាក់មួយដែលត្រូវបានដំណើរការនៅក្នុង Stage មួយ។
    * ឧទាហរណ៍៖ \`compile_code\`, \`run_unit_tests\`, \`deploy_to_staging\` ។
    * Jobs ត្រូវបានដំណើរការដោយ **GitLab Runners** ។

\`\`\`yaml
# ឧទាហរណ៍រចនាសម្ព័ន្ធ Pipeline មូលដ្ឋាន
stages:
  - build
  - test
  - deploy

build_job:
  stage: build
  script:
    - echo "Building the application..."

test_job:
  stage: test
  script:
    - echo "Running tests..."

deploy_job:
  stage: deploy
  script:
    - echo "Deploying to production..."
\`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: វដ្តជីវិត CI/CD

នេះជាទិដ្ឋភាពសង្ខេបនៃវដ្តជីវិត CI/CD ដែលបង្ហាញពីរបៀបដែល Changes ឆ្លងកាត់ដំណាក់កាលផ្សេងៗ។

\`\`\`html
[CI/CD Lifecycle]
-------------------------------------------------
| Developer Code                                |
|   * Write code for new feature                |
|   * Commit to feature branch                  |
-------------------------------------------------
| Git Push                                      |
|   * Push changes to GitLab                    |
|   * Triggers CI/CD Pipeline                   |
-------------------------------------------------
| Continuous Integration (CI)                   |
|   * Build Stage: Compile code                 |
|   * Test Stage: Run unit & integration tests  |
|   * Static code analysis                      |
-------------------------------------------------
| Continuous Delivery (CD)                      |
|   * Package application                       |
|   * Deploy to Staging/UAT (manual approval)   |
-------------------------------------------------
| Continuous Deployment (CD)                    |
|   * Automated deploy to Production            |
-------------------------------------------------
\`\`\`

# ឧទាហរណ៍ ២: រចនាសម្ព័ន្ធ Pipeline ក្នុង GitLab CI/CD

នេះជារបៀបដែល Pipeline អាចត្រូវបានរៀបចំជា Stages និង Jobs។

\`\`\`html
[Pipeline: App Deployment]
------------------------------------------------------------------------
| Stage: Build           | Stage: Test            | Stage: Deploy       |
------------------------------------------------------------------------|
| Job: Build Frontend    | Job: Unit Tests        | Job: Staging Deploy |
| Job: Build Backend     | Job: Integration Tests | Job: Prod Deploy    |
|                        | Job: Code Quality      |                     |
------------------------------------------------------------------------
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `Continuous Integration (CI)` គឺជាអ្វី?',
      options: [
        'ការ Deploy Code ទៅ Production ដោយដៃ',
        'ការបញ្ចូល Code Changes ញឹកញាប់ទៅ Repository កណ្តាល និង Test ដោយស្វ័យប្រវត្តិ',
        'ការសរសេរ Code តែម្នាក់ឯង',
        'ការគ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: 'Continuous Integration (CI) គឺជាការអនុវត្តន៍នៃការបញ្ចូល Code Changes របស់ Developers ទៅក្នុង Repository កណ្តាលញឹកញាប់ និងការ Build/Test ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើគោលបំណងចម្បងមួយនៃ CI គឺអ្វី?',
      options: [
        'ដើម្បីពន្យារពេលការរកឃើញ Bug',
        'ដើម្បីរកឃើញ Bug ឆាប់រហ័ស',
        'ដើម្បីបង្ផើនចំនួន Merge Conflict',
        'ដើម្បីធ្វើឱ្យ Codebase មិនស្ថិតស្ថេរ'
      ],
      correct: 1,
      explanation: 'គោលបំណងចម្បងនៃ CI គឺដើម្បីរកឃើញ និងដោះស្រាយបញ្ហា Integration ឱ្យបានឆាប់តាមដែលអាចធ្វើទៅបាន។'
    },
    {
      question: 'តើ `Continuous Delivery (CD)` មានន័យដូចម្តេច?',
      options: [
        'ការ Deploy Code ដោយស្វ័យប្រវត្តិទៅ Production',
        'ការធានាថា Codebase តែងតែស្ថិតក្នុងស្ថានភាពដែលអាច Deploy បានទៅកាន់ Production Environment ដោយទាមទារការអនុម័តពីមនុស្ស',
        'ការចែកចាយ Software តាមរយៈ Email',
        'ការសរសេរឯកសារសម្រាប់ Software'
      ],
      correct: 1,
      explanation: 'Continuous Delivery (CD) ធានាថា Codebase តែងតែស្ថិតក្នុងស្ថានភាពដែលអាច Deploy បានទៅកាន់ Production Environment ប៉ុន្តែការ Deploy ទៅ Production នៅតែជាជំហានដោយដៃ�।'
    },
    {
      question: 'តើ `Continuous Deployment (CD)` ខុសពី Continuous Delivery ត្រង់ណា?',
      options: [
        'Continuous Deployment មិនមាន Automated Tests ទេ',
        'Continuous Deployment មិន Deploy ទៅ Production ទេ',
        'Continuous Deployment Deploy Code ដោយស្វ័យប្រវត្តិទៅ Production ដោយគ្មានការអន្តរាគមន៍ពីមនុស្ស',
        'Continuous Deployment ត្រូវការការអនុម័តច្រើនជាងមុន'
      ],
      correct: 2,
      explanation: 'Continuous Deployment Deploy Code ដោយស្វ័យប្រវត្តិទៅ Production ដោយគ្មានការអន្តរាគមន៍ពីមនុស្ស ខុសពី Continuous Delivery ដែលការ Deploy ទៅ Production នៅតែជាជំហានដោយដៃ�।'
    },
    {
      question: 'តើ `GitLab CI/CD` ត្រូវបានបង្ផើតឡើងនៅទីណា?',
      options: [
        'ជាឧបករណ៍ដាច់ដោយឡែកពី GitLab',
        'ជាឧបករណ៍ CI/CD ដែលត្រូវបានបង្ផើតឡើងយ៉ាងពេញលេញនៅក្នុង GitLab Platform',
        'ជា Plugin សម្រាប់ IDE',
        'ជា Service Cloud ខាងក្រៅ'
      ],
      correct: 1,
      explanation: 'GitLab CI/CD គឺជាឧបករណ៍ CI/CD ដែលត្រូវបានបង្ផើតឡើងយ៉ាងពេញលេញនៅក្នុង GitLab Platform ។'
    },
    {
      question: 'តើ `Pipeline` ក្នុង GitLab CI/CD គឺជាអ្វី?',
      options: [
        'ជាភារកិច្ចជាក់លាក់មួយ',
        'ជាក្រុមនៃ Jobs ដែលដំណើរការស្របគ្នា',
        'ជា Workflow ពេញលេញនៃ CI/CD (Build, Test, Deploy)',
        'ជា File Configuration'
      ],
      correct: 2,
      explanation: 'Pipeline គឯជា Workflow ពេញលេញនៃ CI/CD ដែលតំណាងឱ្យដំណើរការ Build, Test, Deploy ទាំងមូល។'
    },
    {
      question: 'តើ `Stage` ក្នុង GitLab CI/CD គឯជាអ្វី?',
      options: [
        'ជាភារកិច្ចជាក់លាក់មួយ',
        'ជាក្រុមនៃ Jobs ដែលដំណើរការស្របគ្នា',
        'ជា Workflow ពេញលេញនៃ CI/CD',
        'ជា File Configuration'
      ],
      correct: 1,
      explanation: 'Stage គឯជាក្រុមនៃ Jobs ដែលដំណើរការស្របគ្នា។ Jobs ក្នុង Stage មួយចាប់ផ្តើមតែនៅពេលដែល Jobs ទាំងអស់នៅក្នុង Stage មុនបានបញ្ចប់ដោយជោគជ័យ។'
    },
    {
      question: 'តើ `Job` ក្នុង GitLab CI/CD គឯជាអ្វី?',
      options: [
        'ជា Workflow ពេញលេញនៃ CI/CD',
        'ជាក្រុមនៃ Jobs',
        'ជាភារកិច្ចជាក់លាក់មួយដែលត្រូវបានដំណើរការនៅក្នុង Stage មួយ',
        'ជា File Configuration'
      ],
      correct: 2,
      explanation: 'Job គឯជាភារកិច្ចជាក់លាក់មួយដែលត្រូវបានដំណើរការនៅក្នុង Stage មួយ (ឧទាហរណ៍៖ \`compile_code\`, \`run_unit_tests\`) ។'
    },
    {
      question: 'តើ `Configuration as Code` ក្នុង GitLab CI/CD មានន័យដូចម្តេច?',
      options: [
        'Pipelines ត្រូវបានកំណត់រចនាសម្ព័ន្ធដោយប្រើ UI',
        'Pipelines ត្រូវបានកំណត់រចនាសម្ព័ន្ធដោយប្រើ File \`.gitlab-ci.yml\` ដែលរក្សាទុកក្នុង Repository',
        'Pipelines ត្រូវបានកំណត់រចនាសម្ព័ន្ធដោយប្រើ Database',
        'Pipelines ត្រូវបានកំណត់រចនាសម្ព័ន្ធដោយស្វ័យប្រវត្តិទាំងស្រុង'
      ],
      correct: 1,
      explanation: 'Configuration as Code មានន័យថា Pipelines ត្រូវបានកំណត់រចនាសម្ព័ន្ធដោយប្រើ File \`.gitlab-ci.yml\` ដែលរក្សាទុកក្នុង Repository របស់អ្នក។'
    },
    {
      question: 'តើ `Auto DevOps` ផ្តល់នូវអ្វី?',
      options: [
        'CI/CD Pipeline ដែលបានកំណត់ជាមុនសម្រាប់ Project របស់អ្នក',
        'ឧបករណ៍សម្រាប់សរសេរ Code',
        'ឧបករណ៍សម្រាប់គ្រប់គ្រង Database',
        'ឧបករណ៍សម្រាប់ Deploy ដោយដៃ'
      ],
      correct: 0,
      explanation: 'Auto DevOps ផ្តល់នូវ CI/CD Pipeline ដែលបានកំណត់ជាមុនសម្រាប់ Project របស់អ្នក។'
    },
    {
      question: 'តើ `Jobs` ត្រូវបានដំណើរការដោយអ្វី?',
      options: [
        'Developers',
        'GitLab CI/CD Runners',
        'Project Managers',
        'Database Servers'
      ],
      correct: 1,
      explanation: 'Jobs ត្រូវបានដំណើរការដោយ GitLab CI/CD Runners ។'
    },
    {
      question: 'តើអត្ថប្រយោជន៍មួយណាដែល **មិនមែន** ជាអត្ថប្រយោជន៍នៃ CI/CD?',
      options: [
        'ល្បឿនលឿនក្នុងការផ្តល់ Software',
        'បង្ផើនហានិភ័យនៃការ Deploy',
        'គុណភាពខ្ពស់នៃ Software',
        'ការសហការប្រសើរឡើង'
      ],
      correct: 1,
      explanation: 'CI/CD កាត់បន្ថយហានិភ័យនៃការ Deploy ដោយសារការផ្លាស់ប្តូរតូចៗញឹកញាប់ ដូច្នេះ "បង្ផើនហានិភ័យនៃការ Deploy" មិនមែនជាអត្ថប្រយោជន៍ទេ។'
    },
    {
      question: 'តើ `CI/CD Pipeline` ត្រូវបាន Trigger ដោយអ្វីខ្លះ?',
      options: [
        'តែ Commits ប៉ុណ្ណោះ',
        'តែ Merge Requests ប៉ុណ្ណោះ',
        'Commits, Merge Requests, Tags, ឬ Schedule',
        'តែដោយដៃប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'CI/CD Pipeline ត្រូវបាន Trigger ដោយ Commits, Merge Requests, Tags, ឬ Schedule ។'
    },
    {
      question: 'តើ `Automated Tests` ត្រូវបានដំណើរការនៅដំណាក់កាលណាខ្លះក្នុង CI/CD?',
      options: [
        'តែក្នុង CI ប៉ុណ្ណោះ',
        'តែក្នុង CD ប៉ុណ្ណោះ',
        'ក្នុង CI និង CD',
        'មិនដែលត្រូវបានដំណើរការទេ'
      ],
      correct: 2,
      explanation: 'Automated Tests ត្រូវបានដំណើរការក្នុងដំណាក់កាល CI (ដើម្បីផ្ទៀងផ្ទាត់ Code Changes) និងអាចបន្តក្នុង CD (ដើម្បីផ្ទៀងផ្ទាត់ Deployment) ។'
    },
    {
      question: 'តើ `GitLab CI/CD` ជួយកាត់បន្ថយតម្រូវការក្នុងការប្រើប្រាស់ឧបករណ៍ CI/CD ខាងក្រៅដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ដោយសារ GitLab CI/CD ត្រូវបានរួមបញ្ចូលយ៉ាងពេញលេញ អ្នកមិនចាំបាច់ប្រើឧបករណ៍ CI/CD ខាងក្រៅទេ១'
    },
    {
      question: 'តើ `Jobs` នៅក្នុង Stage មួយចាប់ផ្តើមដំណើរការនៅពេលណា?',
      options: [
        'ភ្លាមៗនៅពេល Pipeline ចាប់ផ្តើម',
        'នៅពេលដែល Jobs ទាំងអស់នៅក្នុង Stage មុនបានបញ្ចប់ដោយជោគជ័យ',
        'នៅពេលដែល Developer Trigger ដោយដៃ',
        'នៅពេលដែល Code ត្រូវបាន Deploy ទៅ Production'
      ],
      correct: 1,
      explanation: 'Jobs ក្នុង Stage មួយចាប់ផ្តើមតែនៅពេលដែល Jobs ទាំងអស់នៅក្នុង Stage មុនបានបញ្ចប់ដោយជោគជ័យ។'
    },
    {
      question: 'តើ `CI/CD` ជួយបង្ផើនល្បឿននៃការផ្តល់ Software ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ CI/CD ជួយបង្ផើនល្បឿននៃការផ្តល់ Software ទៅកាន់អ្នកប្រើប្រាស់បានលឿនជាងមុន១'
    },
    {
      question: 'តើ `CI/CD` ជួយកាត់បន្ថយ `Merge Conflict` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ CI/CD (ជាពិសេស CI) ជួយកាត់បន្ថយចំនួន Merge Conflict ដោយការបញ្ចូល Code ញឹកញាប់១'
    },
    {
      question: 'តើ `Pipeline` អាចត្រូវបាន Trigger ដោយ `Schedule` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Pipeline អាចត្រូវបាន Trigger ដោយ Schedule (ឧទាហរណ៍៖ រាល់យប់) ១'
    },
    {
      question: 'តើ `CI/CD` ផ្តល់ `មតិកែលម្អរហ័ស` លើ Changes ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ CI/CD ផ្តល់មតិកែលម្អភ្លាមៗលើ Changes ដែលបានធ្វើឡើង១'
    }
  ],
  lab: {
    task: `
ស្វែងយល់ពី CI/CD Workflow នៅក្នុង GitLab UI ដោយប្រើលំហាត់បែប Conceptual:
* បង្ផើត Project ថ្មីមួយ។
* រុករកផ្នែក CI/CD ដើម្បីសង្កេត Pipelines និង Jobs។
* ស្រមៃមើល CI/CD Workflow ពេញលេញមួយ។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម:

1. **ចូលទៅ GitLab និងបង្ផើត Project**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្ផើត Project ថ្មីឈ្មោះ **'ci-cd-learning-lab'** ជាមួយ **Visibility Level** ជា **Public** និងធីក Option **Initialize repository with a README**។
2. **រុករកផ្នែក CI/CD**:
   * នៅក្នុង Sidebar ខាងឆ្វេង ចុចលើ **CI/CD > Pipelines**។
   * សង្កេតមើលស្ថានភាពនៃ Pipeline ណាមួយ (Pass, Failed, Running) ដែលអាចបានដំណើរការសម្រាប់ Initial Commit។
   * ចុចលើ Pipeline ID ដើម្បីមើលព័ត៌មានលម្អិត (ឧទាហរណ៍៖ Stages, Jobs)។
   * ចុចលើ **CI/CD > Jobs** ដើម្បីមើលបញ្ជី Jobs ទាំងអស់។
   * ចុចលើ Job ណាមួយដើម្បីសង្កេត Log Output របស់វា។
3. **ស្រមៃមើល CI/CD Workflow**:
   * **Local Development**: ស្រមៃថាអ្នកសរសេរ Code សម្រាប់មុខងារថ្មី (ឧទាហរណ៍៖ "User Login System") នៅលើ Branch **'feature/user-login'** និងធ្វើ Commit Changes។
   * **Push Changes**: នៅពេលអ្នក Push Branch (**'git push origin feature/user-login'**) ស្រមៃថា Pipeline ត្រូវបាន Trigger។
   * **CI Process**:
     * **Build Stage**: Jobs **'build_frontend'** និង **'build_backend'** Compile Code។
     * **Test Stage**: Jobs **'unit_tests'** និង **'integration_tests'** ដំណើរការ Automated Tests។
     * ប្រសិនបើ Tests Pass, Pipeline បន្តទៅមុខ។ បើបរាជ័យ, អ្នកទទួលបានការជូនដំណឹង។
   * **Create Merge Request**: បង្ផើត Merge Request ពី **'feature/user-login'** ទៅ **'main'**, Trigger Pipeline មួយទៀត។
   * **CD Process**:
     * បន្ទាប់ពី Merge Request ត្រូវបាន Approved និង Merged, Pipeline នៅលើ **'main'** Trigger Job **'deploy_to_staging'**។
     * សម្រាប់ Continuous Delivery, **'deploy_to_production'** ត្រូវការការអនុម័តដោយដៃ។ សម្រាប់ Continuous Deployment, វា Deploy ដោយស្វ័យប្រវត្តិ។
`,
    solution: `
# ដំណោះស្រាយ៖ ការស្វែងយល់ពី CI/CD Workflow

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១: ចូលទៅ GitLab និងបង្ផើត Project
អ្នកបានចូលទៅ **GitLab.com** និងបង្ផើត Project ថ្មីឈ្មោះ **ci-cd-learning-lab** ជាមួយ **Visibility Level** ជា **Public** និង Initialize ជាមួយ **README**។

## ជំហានទី ២: រុករកផ្នែក CI/CD
* **Pipelines**:
  * អ្នកបានចូលទៅ **CI/CD > Pipelines** និងសង្កេតឃើញ Pipeline សម្រាប់ Initial Commit (ប្រសិនបើមាន)។
  * អ្នកបានចុចលើ Pipeline ID និងឃើញ Stages (ឧទាហរណ៍៖ **build**, **test**) និង Jobs (ឧទាហរណ៍៖ **build_job**, **test_job**)។
* **Jobs**:
  * អ្នកបានចូលទៅ **CI/CD > Jobs** និងឃើញបញ្ជី Jobs ទាំងអស់។
  * អ្នកបានចុចលើ Job មួយ និងសង្កេត Log Output ដូចជា:
    \`\`\`
    [Job: build_job]
    Running with gitlab-runner 16.0.0
    Fetching changes...
    Checking out commit...
    Running build script...
    Job succeeded
    \`\`\`

## ជំហានទី ៣: ស្រមៃមើល CI/CD Workflow
អ្នកបានស្រមៃមើល CI/CD Workflow ពេញលេញមួយសម្រាប់មុខងារ "User Login System"៖
* **Local Development**:
  * អ្នកសរសេរ Code នៅលើ Branch **'feature/user-login'** និង Commit Changes។
* **Push Changes**:
  * Push Branch (**'git push origin feature/user-login'**) Trigger Pipeline។
* **CI Process**:
  * **Build Stage**:
    \`\`\`
    Job: build_frontend
    Status: Success
    Output: Compiled frontend assets
    Job: build_backend
    Status: Success
    Output: Compiled backend services
    \`\`\`
  * **Test Stage**:
    \`\`\`
    Job: unit_tests
    Status: Success
    Output: All unit tests passed
    Job: integration_tests
    Status: Success
    Output: All integration tests passed
    \`\`\`
* **Create Merge Request**:
  * Merge Request ពី **'feature/user-login'** ទៅ **'main'** Trigger Pipeline មួយទៀត ដែល Pass។
* **CD Process**:
  * បន្ទាប់ពី Merge, Pipeline នៅលើ **'main'** Trigger:
    \`\`\`
    Job: deploy_to_staging
    Status: Success
    Output: Deployed to staging environment
    \`\`\`
  * សម្រាប់ Continuous Delivery, **'deploy_to_production'** ត្រូវការការអនុម័ត។
  * សម្រាប់ Continuous Deployment:
    \`\`\`
    Job: deploy_to_production
    Status: Success
    Output: Deployed to production environment
    \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project Name**: **ci-cd-learning-lab**
* **Pipelines Page**: បង្ហាញ Pipeline សម្រាប់ Initial Commit (ប្រសិនបើមាន) ជាមួយ Stages និង Jobs។
* **Jobs Page**: បង្ហាញ Jobs ដូចជា **build_job**, **test_job**, ព្រមទាំង Log Outputs។
* **Workflow Visualization**:
  \`\`\`
  [CI/CD Workflow]
  Developer Code -> Git Push -> Build Stage -> Test Stage -> Merge Request -> Deploy Staging -> Deploy Production
  \`\`\`

លំហាត់នេះបានជួយអ្នកឱ្យស្គាល់ពីគោលគំនិតនៃ CI/CD និងរបៀបរុករក GitLab CI/CD UI១
`
  }
};

export default GitLabLesson4_1Content;