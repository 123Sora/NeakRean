import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson5_2Content: LessonContent = {
  title: 'លក្ខណៈពិសេសសុវត្ថិភាពរបស់ GitLab',
  objectives: [
    'ស្វែងយល់ពីសារៈសំខាន់នៃសុវត្ថិភាពនៅក្នុង DevOps Workflow',
    'ស្គាល់ឧបករណ៍សុវត្ថិភាពរបស់ GitLab (SAST, DAST, Dependency Scanning, Container Scanning, Secret Detection)',
    'រៀនពីការរកឃើញ និងដោះស្រាយភាពងាយរងគ្រោះ',
    'យល់ពី Security Dashboard និង Vulnerability Report',
    'ស្វែងយល់ពី Compliance Management'
  ],
  content: `
# លក្ខណៈពិសេសសុវត្ថិភាពរបស់ GitLab 🛡️

---

**GitLab Security Features** ត្រូវបានរួមបញ្ចូលក្នុង DevOps Platform ដើម្បីរកឃើញ និងដោះស្រាយភាពងាយរងគ្រោះពេញមួយ **Software Development Life Cycle (SDLC)**។ ការអនុវត្ត **Shift Left Security** ជួយកាត់បន្ថយហានិភ័យ និងសន្សំថ្លៃដើម។

---

## 1. សារៈសំខាន់នៃសុវត្ថិភាពនៅក្នុង DevOps 💡

* **Shift Left Security:** រកឃើញ និងដោះស្រាយបញ្ហាសុវត្ថិភាពតាំងពីដំណាក់កាលដំបូង (Coding, Testing) មិនមែនរង់ចាំដល់ Deploy។
* **Automated Security:** ធ្វើស្វ័យប្រវត្តិកម្មការ Test សុវត្ថិភាពក្នុង CI/CD Pipeline។
* **Compliance:** បំពេញតាមស្តង់ដារឧស្សាហកម្មដូចជា GDPR, HIPAA។
* **Reduced Risk:** កាត់បន្ថយហានិភ័យនៃការវាយប្រហារ និងការបាត់បង់ទិន្នន័យ។

---

## 2. លក្ខណៈពិសេសសុវត្ថិភាពរបស់ GitLab 🔍

GitLab ផ្តល់ឧបករណ៍ស្កេនសុវត្ថិភាពជាច្រើនដែលរួមបញ្ចូលក្នុង CI/CD Pipeline។

* **Static Application Security Testing (SAST):**
  * **អ្វីជា SAST:** វិភាគ **Source Code** ដោយមិនចាំបាច់ Run Application ដើម្បីរកភាពងាយរងគ្រោះ (ឧ. SQL Injection, XSS)។
  * **ពេលណាដំណើរការ:** លើរាល់ Commit ឬ Merge Request។
  * **អត្ថប្រយោជន៍:** រកឃើញបញ្ហាតាំងពីដំណាក់កាល Coding។
* **Dynamic Application Security Testing (DAST):**
  * **អ្វីជា DAST:** វិភាគ **Running Application** ដើម្បីរកភាពងាយរងគ្រោះ (ឧ. Misconfigurations, Authentication Issues)។
  * **ពេលណាដំណើរការ:** លើ Staging ឬ Test Environment។
  * **អត្ថប្រយោជន៍:** រកឃើញបញ្ហាដែល SAST មិនអាចរកបាន។
* **Dependency Scanning:**
  * **អ្វីជា Dependency Scanning:** វិភាគ **Libraries** និង **Packages** ដើម្បីរកភាពងាយរងគ្រោះ។
  * **ពេលណាដំណើរការ:** លើរាល់ Commit ឬ Merge Request។
  * **អត្ថប្រយោជន៍:** ការពារការប្រើ Components ដែលមានភាពងាយរងគ្រោះ។
* **Container Scanning:**
  * **អ្វីជា Container Scanning:** វិភាគ **Docker Images** ដើម្បីរកភាពងាយរងគ្រោះនៅក្នុង Base Image។
  * **ពេលណាដំណើរការ:** ពេល Build ឬ Push Image ទៅ Container Registry។
  * **អត្ថប្រយោជន៍:** ធានាសុវត្ថិភាព Containers។
* **Secret Detection:**
  * **អ្វីជា Secret Detection:** ស្កេន Repository ដើម្បីរក **Secrets** (ឧ. API Keys, Passwords)។
  * **ពេលណាដំណើរការ:** លើរាល់ Commit។
  * **អត្ថប្រយោជន៍:** ការពារការលេចធ្លាយព័ត៌មាន Sensitive។

---

## 3. Security Dashboard និង Vulnerability Report 📊

* **Security Dashboard:**
  * បង្ហាញទិដ្ឋភាពសង្ខេបនៃភាពងាយរងគ្រោះទាំងអស់។
  * ផ្តល់និន្នាការ និង Metrics។
* **Vulnerability Report:**
  * បញ្ជីលម្អិតនៃភាពងាយរងគ្រោះ (Severity, Status, Solution)។
  * អនុញ្ញាតឱ្យផ្លាស់ប្តូរស្ថានភាព (Dismiss, Resolve)។
* **របៀបចូលប្រើ:** **\`Security & Compliance\` > \`Security Dashboard\` / \`Vulnerability Report\`**។

---

## 4. Compliance Management ✅

* **Compliance Frameworks:** កំណត់ Frameworks សម្រាប់ Projects/Group (ឧ. GDPR, HIPAA)។
* **Audit Events:** កត់ត្រាសកម្មភាពសំខាន់ៗសម្រាប់ Audit។
* **Separation of Duties:** ប្រើ Permissions និង Approval Rules ដើម្បីបំបែកភារកិច្ច។

> **គន្លឹះ:** បញ្ចូល Security Tests ទៅក្នុង CI/CD Pipeline ដើម្បីរកឃើញបញ្ហាលឿន។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការកំណត់ SAST ក្នុង \`.gitlab-ci.yml\`

ឧទាហរណ៍ខាងក្រោមបង្ហាញពីការបញ្ចូល SAST ទៅក្នុង CI/CD Pipeline។

\`\`\`yaml
include:
  - template: Security/SAST.gitlab-ci.yml

stages:
  - build
  - test
  - sast

build_job:
  stage: build
  script:
    - echo "Building application..."

test_job:
  stage: test
  script:
    - echo "Running tests..."

# SAST job ត្រូវបានបន្ថែមដោយ Template
\`\`\`

*ពន្យល់:* Template នេះនឹងស្កេន Source Code ដោយស្វ័យប្រវត្តិក្នុង Stage \`sast\`។

# ឧទាហរណ៍ ២: ទិដ្ឋភាព Security Dashboard (Conceptual)

Security Dashboard បង្ហាញទិន្នន័យភាពងាយរងគ្រោះ៖

\`\`\`text
[Security Dashboard]
-------------------------------------------------------------------
| Total Vulnerabilities: 15                                       |
| Critical: 2 | High: 5 | Medium: 6 | Low: 2                        |
|                                                                 |
| By Scanner:                                                     |
|   - SAST: 8                                                     |
|   - Dependency Scanning: 4                                      |
|   - Container Scanning: 2                                       |
|   - Secret Detection: 1                                         |
|                                                                 |
| Top Vulnerabilities:                                            |
|   - SQL Injection in user_auth.py (Critical)                    |
|   - Outdated dependency: lodash (High)                          |
|   - Exposed API Key in config.env (Critical)                    |
-------------------------------------------------------------------
\`\`\`

*ពន្យល់:* Dashboard នេះជួយអ្នកតាមដានភាពងាយរងគ្រោះ និងធ្វើការសម្រេចចិត្តអំពីការដោះស្រាយ។
`
  ],
  quiz: [
    {
      question: 'តើ `Shift Left Security` មានន័យដូចម្តេច?',
      options: [
        'រកឃើញបញ្ហាសុវត្ថិភាពនៅចុង SDLC',
        'រកឃើញបញ្ហាសុវត្ថិភាពឱ្យឆាប់តាមដែលអាចធ្វើបាន',
        'ប្រើឧបករណ៍សុវត្ថិភាពដោយដៃ',
        'មិនអើពើនឹងសុវត្ថិភាព'
      ],
      correct: 1,
      explanation: 'Shift Left Security គឺការរកឃើញបញ្ហាសុវត្ថិភាពតាំងពីដំណាក់កាលដំបូងនៃ SDLC។'
    },
    {
      question: 'តើ `SAST` វិភាគអ្វី?',
      options: [
        'Running Application',
        'Source Code',
        'Dependencies',
        'Docker Images'
      ],
      correct: 1,
      explanation: 'SAST វិភាគ Source Code ដោយមិនចាំបាច់ Run Application។'
    },
    {
      question: 'តើ `DAST` វិភាគអ្វី?',
      options: [
        'Source Code',
        'Dependencies',
        'Running Application',
        'Docker Images'
      ],
      correct: 2,
      explanation: 'DAST វិភាគ Running Application ដើម្បីរកភាពងាយរងគ្រោះ។'
    },
    {
      question: 'តើ `Dependency Scanning` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'រក Bugs ក្នុង Code',
        'រកភាពងាយរងគ្រោះក្នុង Dependencies',
        'រក Secrets',
        'វិភាគ Docker Images'
      ],
      correct: 1,
      explanation: 'Dependency Scanning វិភាគ Libraries និង Packages ដើម្បីរកភាពងាយរងគ្រោះ។'
    },
    {
      question: 'តើ `Container Scanning` វិភាគអ្វី?',
      options: [
        'Source Code',
        'Dependencies',
        'Docker Images',
        'Running Application'
      ],
      correct: 2,
      explanation: 'Container Scanning វិភាគ Docker Images ដើម្បីរកភាពងាយរងគ្រោះ។'
    },
    {
      question: 'តើ `Secret Detection` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'រក Secrets ដែល Commit ដោយចៃដន្យ',
        'រក Bugs ក្នុង Code',
        'វិភាគ Performance',
        'គ្រប់គ្រង Permissions'
      ],
      correct: 0,
      explanation: 'Secret Detection ស្កេន Repository ដើម្បីរក Secrets ដូចជា API Keys, Passwords។'
    },
    {
      question: 'តើ `Security Dashboard` ផ្តល់អ្វី?',
      options: [
        'បញ្ជី Commits',
        'ទិដ្ឋភាពសង្ខេបនៃភាពងាយរងគ្រោះ',
        'ស្ថានភាព CI/CD Pipeline',
        'បញ្ជី Users'
      ],
      correct: 1,
      explanation: 'Security Dashboard បង្ហាញទិដ្ឋភាពសង្ខេបនៃភាពងាយរងគ្រោះ។'
    },
    {
      question: 'តើ `Vulnerability Report` បង្ហាញអ្វី?',
      options: [
        'បញ្ជី Jobs',
        'បញ្ជីភាពងាយរងគ្រោះលម្អិត',
        'បញ្ជី Merge Requests',
        'បញ្ជី Issues'
      ],
      correct: 1,
      explanation: 'Vulnerability Report បង្ហាញបញ្ជីភាពងាយរងគ្រោះលម្អិត។'
    },
    {
      question: 'តើ `Compliance Management` ជួយអ្វី?',
      options: [
        'រក្សា Compliance ជាមួយស្តង់ដារឧស្សាហកម្ម',
        'សរសេរ Code',
        'Deploy Applications',
        'គ្រប់គ្រង Users'
      ],
      correct: 0,
      explanation: 'Compliance Management ជួយរក្សា Compliance ជាមួយស្តង់ដារឧស្សាហកម្ម។'
    },
    {
      question: 'តើ `Audit Events` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'កត់ត្រាសកម្មភាពសំខាន់ៗសម្រាប់ Audit',
        'រក Bugs',
        'Deploy Code',
        'គ្រប់គ្រង Permissions'
      ],
      correct: 0,
      explanation: 'Audit Events កត់ត្រាសកម្មភាពសំខាន់ៗសម្រាប់ Audit។'
    },
    {
      question: 'តើ GitLab ជួយកាត់បន្ថយហានិភ័យនៃការវាយប្រហារសុវត្ថិភាពដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab ជួយកាត់បន្ថយហានិភ័យនៃការវាយប្រហារ និងការបាត់បង់ទិន្នន័យ។'
    }
  ],
  lab: {
    task: `
ការអនុវត្តន៍ជាក់ស្តែង៖ ស្វែងយល់ពី GitLab Security Features (Conceptual):

លំហាត់នេះនឹងណែនាំអ្នកឱ្យស្វែងយល់ពីលក្ខណៈពិសេសសុវត្ថិភាពរបស់ GitLab តាមរយៈការកំណត់ CI/CD Pipeline និងការពិនិត្យ Security Dashboard។

1. **រៀបចំ Project**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្កើត Project ថ្មីមួយឈ្មោះ **'security-features-lab'** ជាមួយ **Visibility Level** ជា **Private** និង **Initialize repository with a README**។

2. **កំណត់ Security Scanners ក្នុង \`.gitlab-ci.yml\`**:
   * បង្កើត File **\`.gitlab-ci.yml\`** នៅ Root នៃ Repository។
   * បន្ថែម Templates សុវត្ថិភាពខាងក្រោម៖
     \`\`\`yaml
     include:
       - template: Security/SAST.gitlab-ci.yml
       - template: Security/Dependency-Scanning.gitlab-ci.yml
       - template: Security/Container-Scanning.gitlab-ci.yml
       - template: Security/Secret-Detection.gitlab-ci.yml

     stages:
       - build
       - test
       - sast
       - dependency_scanning
       - container_scanning
       - secret_detection

     build_app:
       stage: build
       image: docker:latest
       services:
         - docker:dind
       script:
         - docker build -t my-secure-app:$CI_COMMIT_SHORT_SHA .
         - docker push my-secure-app:$CI_COMMIT_SHORT_SHA

     test_app:
       stage: test
       image: alpine/git
       script:
         - echo "Running application tests..."
     \`\`\`
   * Commit File **\`.gitlab-ci.yml\`** ដើម្បី Trigger CI/CD Pipeline។

3. **រុករក Security Dashboard និង Vulnerability Report (Conceptual)**:
   * **Security Dashboard**:
     * ចូលទៅ **\`Security & Compliance\` > \`Security Dashboard\`**។
     * *ស្រមៃ*: ឃើញទិដ្ឋភាពសង្ខេបនៃភាពងាយរងគ្រោះ (ឧ. Critical: 2, High: 5)។
   * **Vulnerability Report**:
     * ចូលទៅ **\`Security & Compliance\` > \`Vulnerability Report\`**។
     * *ស្រមៃ*: ឃើញបញ្ជីភាពងាយរងគ្រោះ និងផ្លាស់ប្តូរស្ថានភាពមួយទៅ **Dismiss**។

4. **ស្វែងយល់ពី Compliance (Conceptual)**:
   * **Compliance Frameworks**:
     * **Project**: ចូលទៅ **\`Settings\` > \`General\` > \`Compliance framework\`**។
     * **Group**: ចូលទៅ **\`Settings\` > \`General\` > \`Compliance frameworks\`**។
     * *ស្រម៉ៃ*: កំណត់ Framework ដូចជា GDPR។
   * **Audit Events**:
     * **Project/Group**: ចូលទៅ **\`Security & Compliance\` > \`Audit Events\`**។
     * *ស្រម៉ៃ*: ឃើញបញ្ជីសកម្មភាពដូចជាការផ្លាស់ប្តូរ Permissions។

> **គន្លឹះ:** បន្ទាប់ពី Commit \`.gitlab-ci.yml\`, ពិនិត្យ Pipeline Status នៅ **\`CI/CD\` > \`Pipelines\`** ដើម្បីឃើញលទ្ធផលនៃ Security Scanners។
`,
    solution: `
# ដំណោះស្រាយ៖ ស្វែងយល់ពី GitLab Security Features

បន្ទាប់ពីអនុវត្តជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១: រៀបចំ Project
* អ្នកបានបង្កើត Project **security-features-lab** នៅលើ **GitLab.com** ជាមួយ **Visibility Level** ជា **Private** និង **README**។

## ជំហានទី ២: កំណត់ Security Scanners
* **File \`.gitlab-ci.yml\`**:
  \`\`\`yaml
  include:
    - template: Security/SAST.gitlab-ci.yml
    - template: Security/Dependency-Scanning.gitlab-ci.yml
    - template: Security/Container-Scanning.gitlab-ci.yml
    - template: Security/Secret-Detection.gitlab-ci.yml

  stages:
    - build
    - test
    - sast
    - dependency_scanning
    - container_scanning
    - secret_detection

  build_app:
    stage: build
    image: docker:latest
    services:
      - docker:dind
    script:
      - docker build -t my-secure-app:$CI_COMMIT_SHORT_SHA .
      - docker push my-secure-app:$CI_COMMIT_SHORT_SHA

  test_app:
    stage: test
    image: alpine/git
    script:
      - echo "Running application tests..."
  \`\`\`
* **លទ្ធផល**: Commit នេះ Trigger CI/CD Pipeline ដែលរួមបញ្ចូល Security Scanners (SAST, Dependency Scanning, Container Scanning, Secret Detection)។

## ជំហានទី ៣: រុករក Security Dashboard និង Vulnerability Report
* **Security Dashboard**:
  \`\`\`text
  [Security Dashboard]
  -------------------------------------------------------------------
  | Total Vulnerabilities: 15                                       |
  | Critical: 2 | High: 5 | Medium: 6 | Low: 2                        |
  |                                                                 |
  | By Scanner:                                                     |
  |   - SAST: 8                                                     |
  |   - Dependency Scanning: 4                                      |
  |   - Container Scanning: 2                                       |
  |   - Secret Detection: 1                                         |
  -------------------------------------------------------------------
  \`\`\`
* **Vulnerability Report**:
  \`\`\`text
  [Vulnerability Report]
  -------------------------------------------------------------------
  | Vulnerability: SQL Injection in user_auth.py                    |
  | Severity: Critical                                              |
  | Status: Open                                                   |
  | Solution: Sanitize user inputs                                 |
  | Action: Dismissed                                              |
  |                                                                 |
  | Vulnerability: Outdated dependency: lodash                     |
  | Severity: High                                                 |
  | Status: Open                                                   |
  | Solution: Update to lodash v4.17.21                            |
  -------------------------------------------------------------------
  \`\`\`

## ជំហានទី ៤: ស្វែងយល់ពី Compliance
* **Compliance Frameworks**:
  \`\`\`text
  Project: security-features-lab
  Framework: GDPR
  Status: Applied
  \`\`\`
* **Audit Events**:
  \`\`\`text
  [Audit Events]
  -------------------------------------------------------------------
  | Event: Changed permission for user bob_dev to Developer         |
  | Timestamp: 2025-08-01 10:00 AM                                 |
  | User: Admin                                                    |
  |                                                                 |
  | Event: Dismissed vulnerability SQL Injection                   |
  | Timestamp: 2025-08-01 10:05 AM                                 |
  | User: Admin                                                    |
  -------------------------------------------------------------------
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project Name**: **security-features-lab**
* **CI/CD Pipeline**:
  * Stages: build, test, sast, dependency_scanning, container_scanning, secret_detection
  * Status: Success (បន្ទាប់ពី Run Pipeline)
* **Security Dashboard**:
  * Total Vulnerabilities: 15 (Critical: 2, High: 5, Medium: 6, Low: 2)
* **Vulnerability Report**:
  * Sample Action: Dismissed SQL Injection vulnerability
* **Compliance**:
  * Framework: GDPR applied
  * Audit Events: Recorded permission changes and vulnerability actions

លំហាត់នេះបានជួយអ្នកឱ្យយល់ពីការបញ្ចូល Security Tests ក្នុង CI/CD Pipeline, ការប្រើ Security Dashboard, Vulnerability Report, និង Compliance Management នៅក្នុង GitLab។
`
  }
};

export default GitLabLesson5_2Content;
