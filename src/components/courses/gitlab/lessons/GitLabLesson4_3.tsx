// src/components/lessons/gitlab/GitLabLesson4_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson4_3Content: LessonContent = {
  title: 'GitLab CI/CD Runners',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា GitLab CI/CD Runner និងតួនាទីរបស់វា',
    'ស្គាល់ពីប្រភេទនៃ Runners (Shared, Specific, Group)',
    'ដឹងពី Runner Executors (Shell, Docker, Kubernetes)',
    'របៀបចុះឈ្មោះ Runner (Conceptual)',
    'យល់ដឹងពីរបៀបដែល Runner ដំណើរការ Jobs ក្នុង Pipeline'
  ],
  content: `
# GitLab CI/CD Runners 🏃‍♂️ execute

---

**GitLab CI/CD Runners** គឺជាម៉ាស៊ីន (Servers, VMs, Containers) ដែលដំណើរការ Jobs នៅក្នុង GitLab CI/CD Pipeline របស់អ្នក។ ពួកវាដើរតួជា "Workers" ដែលទទួលយក Commands ពី \`.gitlab-ci.yml\` ហើយប្រតិបត្តិពួកវា។

---

## 1. តើ GitLab CI/CD Runner ជាអ្វី? និងតួនាទីរបស់វា 💡

* **និយមន័យ:** Runner គឺជា Agent ដែលភ្ជាប់ទៅ GitLab Instance របស់អ្នក ហើយដំណើរការ Jobs CI/CD ។
* **តួនាទី:**
    * **Execute Jobs:** Runner ទទួលយក Jobs ពី GitLab CI/CD Coordinator ។
    * **Provide Environment:** វាផ្តល់នូវ Environment ដែលបានកំណត់ (ដោយប្រើ Docker Image ឬ Shell) សម្រាប់ Job នីមួយៗ។
    * **Send Results:** បន្ទាប់ពី Job បានបញ្ចប់ Runner នឹងបញ្ជូនលទ្ធផល (Log Output, Artifacts, Status) ត្រឡប់ទៅ GitLab វិញ។

---

## 2. ប្រភេទនៃ Runners 🌍

GitLab គាំទ្រ Runners បីប្រភេទ៖

* **Shared Runners (Runners ចែករំលែក):**
    * **ការគ្រប់គ្រង:** Host និងគ្រប់គ្រងដោយ GitLab (សម្រាប់ GitLab.com) ឬ Admin របស់ GitLab Instance (សម្រាប់ Self-managed) ។
    * **ការប្រើប្រាស់:** អាចត្រូវបានប្រើដោយ Projects ទាំងអស់នៅលើ GitLab Instance ។
    * **អត្ថប្រយោជន៍:** ងាយស្រួលប្រើ មិនចាំបាច់ដំឡើង/គ្រប់គ្រង Runner ផ្ទាល់ខ្លួនទេ។
    * **គុណវិបត្តិ:** អាចមាន Queue យូរជាងមុនសម្រាប់ Jobs, មិនអាចប្ដូរតាមបំណងបានពេញលេញ។
* **Specific Runners (Runners ជាក់លាក់):**
    * **ការគ្រប់គ្រង:** ដំឡើង និងគ្រប់គ្រងដោយអ្នកប្រើប្រាស់ ឬក្រុម។
    * **ការប្រើប្រាស់:** ត្រូវបានកំណត់ទៅ Project ជាក់លាក់មួយ ឬច្រើន។
    * **អត្ថប្រយោជន៍:** ការគ្រប់គ្រងពេញលេញលើ Environment, អាចប្ដូរតាមបំណងសម្រាប់តម្រូវការ Project ជាក់លាក់, គ្មាន Queue ពី Projects ផ្សេងទៀត។
    * **គុណវិបត្តិ:** ទាមទារការដំឡើង និងថែទាំ។
* **Group Runners (Runners ក្រុម):**
    * **ការគ្រប់គ្រង:** ដំឡើង និងគ្រប់គ្រងនៅកម្រិត Group ។
    * **ការប្រើប្រាស់:** អាចត្រូវបានប្រើដោយ Projects ទាំងអស់នៅក្នុង Group នោះ និង Subgroups របស់វា។
    * **អត្ថប្រយោជន៍:** ផ្តល់នូវភាពបត់បែនរវាង Shared និង Specific Runners សម្រាប់ក្រុម។

---

## 3. Runner Executors (អ្នកប្រតិបត្តិ Runner) ⚙️

Executor កំណត់ពីរបៀបដែល Job ត្រូវបានដំណើរការនៅលើ Runner ។

* **Shell Executor:**
    * **របៀបដំណើរការ:** ប្រតិបត្តិ Commands ដោយផ្ទាល់នៅលើ Shell របស់ម៉ាស៊ីន Runner ។
    * **ល្អសម្រាប់:** Jobs សាមញ្ញៗ, ការគ្រប់គ្រង Environment ជាក់លាក់ដោយដៃ។
    * **ចំណាំ:** មិនមាន Isolation រវាង Jobs ទេ (Jobs ទាំងអស់ដំណើរការលើ Environment ដូចគ្នា) ។
* **Docker Executor:**
    * **របៀបដំណើរការ:** ដំណើរការ Job នីមួយៗនៅក្នុង Docker Container ថ្មីមួយ។
    * **ល្អសម្រាប់:** Isolation រវាង Jobs, ការប្រើប្រាស់ Docker Images ជាក់លាក់ (កំណត់ដោយ \`image\` Keyword ក្នុង \`.gitlab-ci.yml\`) ។
    * **ពេញនិយមបំផុត:** ត្រូវបានណែនាំសម្រាប់ Project ភាគច្រើន។
* **Kubernetes Executor:**
    * **របៀបដំណើរការ:** ដំណើរការ Job នីមួយៗជា Pod នៅក្នុង Kubernetes Cluster ។
    * **ល្អសម្រាប់:** Scalability ខ្ពស់, Dynamic Provisioning នៃ Resources ។
    * **កម្រិតខ្ពស់:** ទាមទារចំណេះដឹង Kubernetes ។
* **VirtualBox, Parallels, SSH, Custom:** Executors ផ្សេងទៀតសម្រាប់ Use Cases ជាក់លាក់។

---

## 4. របៀបចុះឈ្មោះ Runner (Conceptual) 📝

ការចុះឈ្មោះ Runner ពាក់ព័ន្ធនឹងការដំឡើង GitLab Runner Software នៅលើម៉ាស៊ីនមួយ ហើយភ្ជាប់វាទៅ GitLab Instance របស់អ្នកដោយប្រើ Token ។

1.  **ដំឡើង GitLab Runner Software:**
    * ទាញយក និងដំឡើង GitLab Runner Binary នៅលើ Server ឬ VM របស់អ្នក។
    * (ឧទាហរណ៍សម្រាប់ Linux):
        \`\`\`bash
        # Download the binary for your system
        sudo curl -L --output /usr/local/bin/gitlab-runner "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"
        # Give it permission to execute
        sudo chmod +x /usr/local/bin/gitlab-runner
        # Create a GitLab CI user
        sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash
        # Install and run as a service
        sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
        sudo gitlab-runner start
        \`\`\`
2.  **ទទួលបាន Registration Token:**
    * នៅក្នុង GitLab UI សម្រាប់ Project, Group, ឬ Instance របស់អ្នក ចូលទៅ **\`Settings\` > \`CI/CD\` > \`Runners\`** ។
    * អ្នកនឹងឃើញ Registration Token ។
3.  **ចុះឈ្មោះ Runner:**
    * នៅលើម៉ាស៊ីន Runner របស់អ្នក ដំណើរការ Command:
        \`\`\`bash
        sudo gitlab-runner register
        \`\`\`
    * អ្នកនឹងត្រូវបានសួរឱ្យបញ្ចូល GitLab instance URL, Registration Token, Description, Tags, និង Executor ។
    * **Tags:** Tags គឺសំខាន់ណាស់! Jobs នៅក្នុង \`.gitlab-ci.yml\` អាចបញ្ជាក់ Tags របស់ Runner ដែលពួកគេចង់ប្រើ។ Runner នឹងដំណើរការ Job តែប៉ុណ្ណោះ ប្រសិនបើ Tags លနស់វាត្រូវគ្នានឹង Tags ដែលបានបញ្ជាក់ក្នុង Job ។
        \`\`\`yaml
        my_job:
          stage: test
          script: echo "Running..."
          tags:
            - docker-runner # Job នេះនឹងដំណើរការតែលើ Runner ដែលមាន tag 'docker-runner' ប៉ុណ្ណោះ
        \`\`\`

---
> **គន្លឹះ:** ការជ្រើសរើសប្រភេទ Runner និង Executor ដែលត្រឹមត្រូវគឺសំខាន់សម្រាប់ Performance, Security, និង Scalability របស់ CI/CD Pipeline របស់អ្នក។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: លំដាប់លំដោយនៃ Runner Workflow

នេះជាលំដាប់លំដោយសាមញ្ញនៃរបៀបដែល Runner ទទួលយក និងដំណើរការ Job:

\`\`\`text
[GitLab CI/CD Coordinator]
      ↓ (Assigns Job)
[GitLab Runner]
      ↓ (Fetches Code)
[Runner Environment (e.g., Docker Container)]
      ↓ (Executes before_script)
      ↓ (Executes script)
      ↓ (Executes after_script)
      ↓ (Collects Artifacts, Logs)
[GitLab CI/CD Coordinator]
      ↑ (Sends Results: Pass/Fail, Logs, Artifacts)
\`\`\`

# ឧទាហរណ៍ ២: ការប្រើ Tags ក្នុង \`.gitlab-ci.yml\`

ឧទាហរណ៍នៃការប្រើ \`tags\` Keyword ដើម្បីកំណត់ Runner សម្រាប់ Jobs ផ្សេងៗ:

\`\`\`yaml
build_app:
  stage: build
  image: node:18-alpine
  script:
    - npm install
    - npm run build
  tags:
    - node-builder # Job នេះនឹងដំណើរការលើ Runner ដែលមាន tag 'node-builder'

deploy_app:
  stage: deploy
  image: python:3.10-slim
  script:
    - pip install -r requirements.txt
    - python deploy.py
  tags:
    - python-deployer # Job នេះនឹងដំណើរការលើ Runner ដែលមាន tag 'python-deployer'
  only:
    - main
  when: manual
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `GitLab CI/CD Runner` គឺជាអ្វី?',
      options: [
        'ជា File Configuration',
        'ជាឧបករណ៍សម្រាប់សរសេរ Code',
        'ជាម៉ាស៊ីនដែលដំណើរការ Jobs នៅក្នុង GitLab CI/CD Pipeline',
        'ជា Database Server'
      ],
      correct: 2,
      explanation: 'GitLab CI/CD Runner គឺជាម៉ាស៊ីន (Servers, VMs, Containers) ដែលដំណើរការ Jobs នៅក្នុង GitLab CI/CD Pipeline របស់អ្នក។'
    },
    {
      question: 'តើ `Runner` ទទួលយក Commands ពី File មួយណា?',
      options: [
        '`README.md`',
        '`.gitignore`',
        '`.gitlab-ci.yml`',
        '`package.json`'
      ],
      correct: 2,
      explanation: 'Runner ទទួលយក Commands ពី `.gitlab-ci.yml` ។'
    },
    {
      question: 'តើ `Shared Runners` ត្រូវបានគ្រប់គ្រងដោយអ្នកណា?',
      options: [
        'ដោយអ្នកប្រើប្រាស់ម្នាក់ៗ',
        'ដោយក្រុម Project',
        'ដោយ GitLab (សម្រាប់ GitLab.com) ឬ Admin របស់ GitLab Instance',
        'ដោយ Developer ផ្ទាល់'
      ],
      correct: 2,
      explanation: 'Shared Runners ត្រូវបាន Host និងគ្រប់គ្រងដោយ GitLab (សម្រាប់ GitLab.com) ឬ Admin របស់ GitLab Instance ។'
    },
    {
      question: 'តើ `Specific Runners` ត្រូវបានកំណត់ទៅ Project ប្រភេទណា?',
      options: [
        'Project ទាំងអស់នៅលើ GitLab Instance',
        'Project ជាក់លាក់មួយ ឬច្រើន',
        'Project ក្នុង Group តែមួយ',
        'Project Open Source'
      ],
      correct: 1,
      explanation: 'Specific Runners ត្រូវបានកំណត់ទៅ Project ជាក់លាក់មួយ ឬច្រើន។'
    },
    {
      question: 'តើ `Group Runners` អាចត្រូវបានប្រើដោយ Projects ណាខ្លះ?',
      options: [
        'តែ Project ដែលបានកំណត់ប៉ុណ្ណោះ',
        'Projects ទាំងអស់នៅក្នុង Group នោះ និង Subgroups របស់វា',
        'Projects ទាំងអស់នៅលើ GitLab Instance',
        'តែ Project Open Source ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'Group Runners អាចត្រូវបានប្រើដោយ Projects ទាំងអស់នៅក្នុង Group នោះ និង Subgroups របស់វា។'
    },
    {
      question: 'តើ `Shell Executor` ដំណើរការ Job ដោយរបៀបណា?',
      options: [
        'នៅក្នុង Docker Container ថ្មីមួយ',
        'ជា Pod នៅក្នុង Kubernetes Cluster',
        'ដោយផ្ទាល់នៅលើ Shell របស់ម៉ាស៊ីន Runner',
        'តាមរយៈ SSH Connection'
      ],
      correct: 2,
      explanation: 'Shell Executor ប្រតិបត្តិ Commands ដោយផ្ទាល់នៅលើ Shell របស់ម៉ាស៊ីន Runner ។'
    },
    {
      question: 'តើ `Docker Executor` ដំណើរការ Job ដោយរបៀបណា?',
      options: [
        'ដោយផ្ទាល់នៅលើ Shell របស់ម៉ាស៊ីន Runner',
        'នៅក្នុង Docker Container ថ្មីមួយ',
        'ជា Pod នៅក្នុង Kubernetes Cluster',
        'តាមរយៈ Virtual Machine'
      ],
      correct: 1,
      explanation: 'Docker Executor ដំណើរការ Job នីមួយៗនៅក្នុង Docker Container ថ្មីមួយ។'
    },
    {
      question: 'តើ `Kubernetes Executor` ដំណើរការ Job ដោយរបៀបណា?',
      options: [
        'នៅក្នុង Docker Container ថ្មីមួយ',
        'ដោយផ្ទាល់នៅលើ Shell របស់ម៉ាស៊ីន Runner',
        'ជា Pod នៅក្នុង Kubernetes Cluster',
        'តាមរយៈ Virtual Machine'
      ],
      correct: 2,
      explanation: 'Kubernetes Executor ដំណើរការ Job នីមួយៗជា Pod នៅក្នុង Kubernetes Cluster ។'
    },
    {
      question: 'តើ `Tags` របស់ Runner ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ឈ្មោះ Runner',
        'ដើម្បីបញ្ជាក់ Docker Image ដែលត្រូវប្រើ',
        'ដើម្បីកំណត់ Runner ដែល Job ចង់ប្រើ',
        'ដើម្បីកំណត់ប្រភេទ Executor'
      ],
      correct: 2,
      explanation: 'Tags របស់ Runner ត្រូវបានប្រើដើម្បីកំណត់ Runner ដែល Job ចង់ប្រើ។ Runner នឹងដំណើរការ Job តែប៉ុណ្ណោះ ប្រសិនបើ Tags របស់វាត្រូវគ្នានឹង Tags ដែលបានបញ្ជាក់ក្នុង Job ។'
    },
    {
      question: 'តើ `Runner` បញ្ជូនលទ្ធផលអ្វីខ្លះត្រឡប់ទៅ GitLab វិញបន្ទាប់ពី Job បានបញ្ចប់?',
      options: [
        'តែ Status (Pass/Fail) ប៉ុណ្ណោះ',
        'Log Output, Artifacts, និង Status',
        'តែ Code Changes ប៉ុណ្ណោះ',
        'តែ Configuration Files ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'បន្ទាប់ពី Job បានបញ្ចប់ Runner នឹងបញ្ជូនលទ្ធផល (Log Output, Artifacts, Status) ត្រឡប់ទៅ GitLab វិញ។'
    },
    {
      question: 'តើ `Docker Executor` ផ្តល់ `Isolation` រវាង Jobs ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Docker Executor ដំណើរការ Job នីមួយៗនៅក្នុង Docker Container ថ្មីមួយ ដែលផ្តល់ Isolation រវាង Jobs ។'
    },
    {
      question: 'តើ `Shared Runners` អាចមាន `Queue` យូរជាងមុនសម្រាប់ Jobs ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Shared Runners អាចមាន Queue ឯឺជាងមុនសម្រាប់ Jobs ដោយសារ Projects ជាច្រើនប្រើប្រាស់វា។'
    },
    {
      question: 'តើ `Specific Runners` ផ្តល់នូវ `ការគ្រប់គ្រងពេញលេញលើ Environment` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Specific Runners ផ្តល់នូវការគ្រប់គ្រងពេញលេញលើ Environment ដែលអនុញ្ញាតឱ្យប្ដូរតាមបំណងសម្រាប់តម្រូវការ Project ជាក់លាក់។'
    },
    {
      question: 'តើ `Kubernetes Executor` ល្អសម្រាប់ `Scalability` ខ្ពស់ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Kubernetes Executor ល្អសម្រាប់ Scalability ខ្ពស់ ដោយសារវាដំណើរការ Job ជា Pod នៅក្នុង Kubernetes Cluster ។'
    },
    {
      question: 'តើ `GitLab Runner Software` ត្រូវតំឡើងនៅលើម៉ាស៊ីនដែលនឹងដំណើរការ Jobs ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab Runner Software ត្រូវតំឡើងនៅលើម៉ាស៊ីនដែលនឹងដំណើរការ Jobs ។'
    },
    {
      question: 'តើ `Registration Token` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ប្រភេទ Runner',
        'ដើម្បីភ្ជាប់ Runner ទៅ GitLab Instance របស់អ្នក',
        'ដើម្បីកំណត់ Executor',
        'ដើម្បីកំណត់ Tags របស់ Runner'
      ],
      correct: 1,
      explanation: 'Registration Token ត្រូវបានប្រើដើម្បីភ្ជាប់ Runner ទៅ GitLab Instance របស់អ្នក។'
    },
    {
      question: 'តើ `Shell Executor` ផ្តល់ `Isolation` រវាង Jobs ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 1,
      explanation: 'ទេ Shell Executor មិនមាន Isolation រវាង Jobs ទេ (Jobs ទាំងអស់ដំណើរការលើ Environment ដូចគ្នា) ។'
    },
    {
      question: 'តើ `GitLab Runner` អាចដំណើរការលើ `Virtual Machines` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab Runner អាចដំណើរការលើ Virtual Machines ។'
    },
    {
      question: 'តើ `Tags` អាចត្រូវបានបញ្ជាក់នៅក្នុង File \`.gitlab-ci.yml\` សម្រាប់ Job មួយដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Tags អាចត្រូវបានបញ្ជាក់នៅក្នុង File \`.gitlab-ci.yml\` សម្រាប់ Job មួយ ដើម្បីកំណត់ Runner ដែលត្រូវប្រើ។'
    },
    {
      question: 'តើ `GitLab CI/CD Coordinator` គឺជាអ្វី?',
      options: [
        'ផ្នែកមួយនៃ Runner',
        'ផ្នែកមួយនៃ GitLab Instance ដែលគ្រប់គ្រង Jobs និង Pipeline',
        'ឧបករណ៍សម្រាប់សរសេរ \`.gitlab-ci.yml\`',
        'ឧបករណ៍សម្រាប់ Deploy Code'
      ],
      correct: 1,
      explanation: 'GitLab CI/CD Coordinator គឺជាផ្នែកមួយនៃ GitLab Instance ដែលគ្រប់គ្រង Jobs និង Pipeline ហើយ Assign Jobs ទៅ Runners ។'
    }
  ],
  lab: {
    task: `
ស្វែងយល់ពី GitLab CI/CD Runners និងស្រមៃមើលការចុះឈ្មោះ Runner ផ្ទាល់ខ្លួន:
* សង្កេតមើល Runner Settings នៅក្នុង GitLab UI។
* ស្រមៃមើលការដំឡើង និងចុះឈ្មោះ Runner នៅលើ Server។
* បន្ថែម Runner Tags ទៅ \`.gitlab-ci.yml\` និងស្រមៃមើល Pipeline។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម:

1. **សង្កេតមើល Runner Settings**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * **សម្រាប់ Project Runners**: ចូលទៅ Project ថ្មីមួយឈ្មោះ **'ci-cd-runner-lab'** (បង្ផើតប្រសិនបើមិនទាន់មាន ជាមួយ **Visibility Level** ជា **Public** និង **Initialize repository with a README**)។ នៅ Sidebar ខាងឆ្វេង ចុច **Settings > CI/CD** ហើយរំកិលទៅផ្នែក **Runners**។
   * **សម្រាប់ Group Runners**: ចូលទៅ Group មួយ (ឧទាហរណ៍ **'my-learning-group'**) ឬបង្ផើត Group ថ្មី។ ចុច **Settings > CI/CD > Runners**។
   * **សម្រាប់ Shared Runners**: នៅក្នុង Project **'ci-cd-runner-lab'** ក្នុងផ្នែក **Runners** សង្កេតមើល Shared Runners ដែល GitLab.com ផ្តល់ជូន។
   * **សង្កេត**:
     * **Registration Token**: កត់សម្គាល់ Token សម្រាប់ចុះឈ្មោះ Runner។
     * **Available Runners**: មើលបញ្ជី Runners ដែលអាចប្រើបាន (Shared ឬ Specific)។
     * **Runner Tags**: កត់សម្គាល់ Tags ដែលភ្ជាប់ជាមួយ Runners (ឧទាហរណ៍ **'docker'**, **'linux'**)។
2. **ស្រមៃមើលការចុះឈ្មោះ Runner**:
   * **ស្រមៃ**: អ្នកមាន Server ឬ VM ដែលដំឡើង GitLab Runner Software។
   * **ការដំឡើង (Conceptual)**:
     \`\`\`bash
     # Download GitLab Runner binary
     sudo curl -L --output /usr/local/bin/gitlab-runner "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"
     # Give execute permission
     sudo chmod +x /usr/local/bin/gitlab-runner
     # Create GitLab CI user
     sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash
     # Install and start as a service
     sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
     sudo gitlab-runner start
     \`\`\`
   * **ការចុះឈ្មោះ (Conceptual)**:
     \`\`\`bash
     sudo gitlab-runner register
     \`\`\`
     * បញ្ចូលព័ត៌មាន:
       * **GitLab instance URL**: \`https://gitlab.com/\`
       * **Registration token**: (Token ពីជំហានទី ១)
       * **Description**: \`Custom Runner for ci-cd-runner-lab\`
       * **Tags**: \`custom-runner, docker, linux\`
       * **Executor**: \`docker\`
       * **Default Docker image**: \`python:3.10-slim\`
     * **ស្រមៃ**: Runner បង្ហាញនៅក្នុង **Settings > CI/CD > Runners** នៃ Project **'ci-cd-runner-lab'**។
3. **បន្ថែម Tags និងស្រមៃមើល Pipeline**:
   * **ស្រមៃ**: បន្ថែម \`.gitlab-ci.yml\` ទៅ Project **'ci-cd-runner-lab'**:
     \`\`\`yaml
     stages:
       - build
       - test
     build_app:
       stage: build
       image: python:3.10-slim
       script:
         - echo "Building application..."
         - python --version
       tags:
         - custom-runner
         - docker
     test_app:
       stage: test
       image: python:3.10-slim
       script:
         - echo "Running tests..."
         - pytest --version
       tags:
         - custom-runner
         - docker
       needs: ["build_app"]
     \`\`\`
   * **Commit message**: \`Add .gitlab-ci.yml with custom runner tags\`
   * **Target branch**: \`main\`
   * **ស្រមៃ**: នៅ **CI/CD > Pipelines** ឃើញ Pipeline ថ្មី Trigger ដោយ Commit។
   * **ស្រមៃ**: Jobs \`build_app\` និង \`test_app\` ដំណើរការលើ Runner ដែលមាន Tags \`custom-runner\` និង \`docker\`។
`,
    solution: `
# ដំណោះស្រាយ៖ ការស្វែងយល់ពី GitLab CI/CD Runners

បន្ទាប់ពីអនុវត្តជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១: សង្កេតមើល Runner Settings
* អ្នកបានចូលទៅ **GitLab.com** និងសង្កេតផ្នែក **Runners** នៅក្នុង **Settings > CI/CD** នៃ Project **ci-cd-runner-lab** ឬ Group **my-learning-group**។
* **លទ្ធផល**:
  * **Registration Token**: អ្នកបានកត់សម្គាល់ Token សម្រាប់ចុះឈ្មោះ Runner។
  * **Available Runners**: អ្នកបានឃើញ Shared Runners នៅលើ GitLab.com (ឧទាហរណ៍ Tags: \`docker\`, \`linux\`)។
  * **Runner Tags**: អ្នកបានសង្កេត Tags ដែលភ្ជាប់ជាមួយ Runners។

## ជំហានទី ២: ស្រមៃមើលការចុះឈ្មោះ Runner
* **ការដំឡើង (Conceptual)**:
  \`\`\`bash
  # Download GitLab Runner binary
  sudo curl -L --output /usr/local/bin/gitlab-runner "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"
  # Give execute permission
  sudo chmod +x /usr/local/bin/gitlab-runner
  # Create GitLab CI user
  sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash
  # Install and start as a service
  sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
  sudo gitlab-runner start
  \`\`\`
* **ការចុះឈ្មោះ (Conceptual)**:
  \`\`\`bash
  sudo gitlab-runner register
  \`\`\`
  * **បញ្ចូល**:
    * **GitLab instance URL**: \`https://gitlab.com/\`
    * **Registration token**: (Token ពីជំហានទី ១)
    * **Description**: \`Custom Runner for ci-cd-runner-lab\`
    * **Tags**: \`custom-runner, docker, linux\`
    * **Executor**: \`docker\`
    * **Default Docker image**: \`python:3.10-slim\`
  * **លទ្ធផល**: Runner បង្ហាញនៅក្នុង **Settings > CI/CD > Runners** នៃ Project **ci-cd-runner-lab**។

## ជំហានទី ៣: បន្ថែម Tags និងស្រមៃមើល Pipeline
* **File \`.gitlab-ci.yml\`**:
  \`\`\`yaml
  stages:
    - build
    - test
  build_app:
    stage: build
    image: python:3.10-slim
    script:
      - echo "Building application..."
      - python --version
    tags:
      - custom-runner
      - Heating docker
  test_app:
    stage: test
    image: python:3.10-slim
    script:
      - echo "Running tests..."
      - pytest --version
    tags:
      - custom-runner
      - docker
    needs: ["build_app"]
  \`\`\`
* **Pipeline Visualization**:
  * អ្នកបានចូលទៅ **CI/CD > Pipelines** និងស្រមៃឃើញ Pipeline ថ្មី Trigger ដោយ Commit។
  * **Job Outputs**:
    * **build_app**:
      \`\`\`
      Running with gitlab-runner 16.0.0
      Building application...
      Python 3.10.12
      Job succeeded
      \`\`\`
    * **test_app**:
      \`\`\`
      Running with gitlab-runner 16.0.0
      Running tests...
      pytest 7.4.0
      Job succeeded
      \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project Name**: **ci-cd-runner-lab**
* **Runner Settings**: កត់សម្គាល់ Registration Token និង Shared Runners។
* **Runner Registration (Conceptual)**: Runner ជាមួយ Tags \`custom-runner\`, \`docker\`, \`linux\`។
* **Pipeline**: Jobs \`build_app\` និង \`test_app\` ដំណើរការលើ Runner ដែលមាន Tags \`custom-runner\` និង \`docker\`។
* **Workflow**:
  \`\`\`
  [Commit .gitlab-ci.yml] -> [Build Stage (build_app)] -> [Test Stage (test_app)]
  \`\`\`

លំហាត់នេះបានជួយអ្នកឱ្យយល់ពី GitLab CI/CD Runners និងការប្រើ Tags ដើម្បីភ្ជាប់ Jobs ទៅ Runners ជាក់លាក់។
`
  }
};

export default GitLabLesson4_3Content;
