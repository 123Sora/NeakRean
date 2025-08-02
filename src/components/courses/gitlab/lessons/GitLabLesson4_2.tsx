// src/components/lessons/gitlab/GitLabLesson4_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson4_2Content: LessonContent = {
  title: 'ការចាប់ផ្តើមជាមួយ .gitlab-ci.yml',
  objectives: [
    'យល់ដឹងពីតួនាទីរបស់ File `.gitlab-ci.yml` ក្នុងការកំណត់រចនាសម្ព័ន្ធ CI/CD',
    'ស្គាល់ពី Syntax មូលដ្ឋានរបស់ YAML សម្រាប់ `.gitlab-ci.yml`',
    'ដឹងពី Keywords សំខាន់ៗដែលប្រើក្នុង `.gitlab-ci.yml` (stages, jobs, script, image, before_script, after_script)',
    'របៀបកំណត់ Stages និង Jobs នៅក្នុង Pipeline',
    'អនុវត្តការបង្ផើត File `.gitlab-ci.yml` សាមញ្ញមួយ'
  ],
  content: `
# ការចាប់ផ្តើមជាមួយ .gitlab-ci.yml 📝 automation

---

**\`.gitlab-ci.yml\`** គឺជា File កំណត់រចនាសម្ព័ន្ធ YAML ដែលជាបេះដូងនៃ GitLab CI/CD ។ វាត្រូវបានរក្សាទុកនៅក្នុង Root Directory នៃ Git Repository របស់អ្នក ហើយប្រាប់ GitLab CI/CD ពីរបំប Build, Test, និង Deploy Project របស់អ្នក។

---

## 1. តួនាទីរបស់ File \`.gitlab-ci.yml\` 💡

* **Configuration as Code:** កំណត់រចនាសម្ព័ន្ធ CI/CD Pipeline របស់អ្នកជា Code ដែលអាច Version Control បាន។
* **Automation:** បញ្ជាក់ជំហានស្វ័យប្រវត្តិកម្មដែលត្រូវដំណើរការនៅពេលមាន Code Changes ។
* **Consistency:** ធានាថាដំណើរការ Build, Test, និង Deploy តែងតែដូចគ្នាសម្រាប់រាល់ Changes ។
* **Transparency:** អ្នកណាក៏ដោយក្នុងក្រុមអាចមើល និងយល់ពីរបៀបដែល Pipeline ដំណើរការ។

---

## 2. Syntax មូលដ្ឋានរបស់ YAML សម្រាប់ \`.gitlab-ci.yml\` ✍️

\`.gitlab-ci.yml\` ប្រើប្រាស់ YAML (YAML Ain't Markup Language) Syntax ។

* **Indentation (ការចូលបន្ទាត់):** YAML ពឹងផ្អែកលើការចូលបន្ទាត់ (Spaces មិនមែន Tabs) ដើម្បីកំណត់រចនាសម្ព័ន្ធ។ ការចូលបន្ទាត់មិនត្រឹមត្រូវនឹងបណ្តាលឱ្យមានកំហុស។
* **Key-Value Pairs:** ប្រើ \`key: value\` (ឧទាហរណ៍៖ \`stage: build\`) ។
* **Lists (បញ្ជី):** ប្រើ Hyphen (\`-\`) សម្រាប់ធាតុបញ្ជី (ឧទាហរណ៍៖ \`- echo "Hello"\`) ។
* **Comments (មតិយោបល់):** ប្រើ Hashtag (\`#\`) សម្រាប់ Comments ។

\`\`\`yaml
# ឧទាហរណ៍ YAML Syntax
my_variable: some_value
my_list:
  - item1
  - item2
another_key:
  nested_key: nested_value
\`\`\`

---

## 3. Keywords សំខាន់ៗក្នុង \`.gitlab-ci.yml\` 🔑

* **\`stages\`:**
    * កំណត់លំដាប់លំដោយនៃ Stages នៅក្នុង Pipeline របស់អ្នក។
    * Jobs ត្រូវបានដំណើរការតាមលំដាប់លំដោយនៃ Stages ។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        stages:
          - build
          - test
          - deploy
        \`\`\`
* **\`image\`:**
    * បញ្ជាក់ Docker Image ដែល Job នឹងដំណើរការនៅក្នុង។
    * នេះកំណត់ Environment ដែល Commands របស់អ្នកនឹងត្រូវបានប្រតិបត្តិ។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        image: node:16-alpine
        \`\`\`
* **\`before_script\`:**
    * Commands ដែលត្រូវដំណើរការមុនពេល \`script\` របស់ Job នីមួយៗ។
    * មានប្រយោជន៍សម្រាប់ការដំឡើង Dependencies ។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        before_script:
          - npm install
        \`\`\`
* **\`after_script\`:**
    * Commands ដែលត្រូវដំណើរការបន្ទាប់ពី \`script\` របស់ Job នីមួយៗ (មិនថា Job Pass ឬ Fail ទេ) ។
    * មានប្រយោជន៍សម្រាប់ការ Cleanup ។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        after_script:
          - echo "Cleanup complete."
        \`\`\`
* **\`variables\`:**
    * កំណត់ Variables ដែលអាចប្រើបានក្នុង Pipeline ឬ Jobs ។
    * អាចកំណត់នៅកម្រិត Global ឬ Job-specific ។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        variables:
          BUILD_VERSION: 1.0.0
        \`\`\`
* **\`cache\`:**
    * បញ្ជាក់ Files ឬ Directories ដែលត្រូវ Cache រវាង Pipeline Runs ដើម្បីបង្ផើនល្បឿន។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        cache:
          paths:
            - node_modules/
        \`\`\`
* **\`artifacts\`:**
    * បញ្ជាក់ Files ឬ Directories ដែលត្រូវរក្សាទុកជា Artifacts បន្ទាប់ពី Job បានបញ្ចប់។
    * មានប្រយោជន៍សម្រាប់ Output របស់ Build ឬ Test Reports ។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        artifacts:
          paths:
            - build/
          expire_in: 1 week
        \`\`\`
* **\`only\` / \`except\`:**
    * កំណត់លក្ខខណ្ឌថាតើ Job មួយគួរតែដំណើរការនៅពេលណា (ឧទាហរណ៍៖ តែលើ Branches ជាក់លាក់ ឬ Tags) ។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        deploy_production:
          stage: deploy
          script:
            - deploy_script.sh
          only:
            - main
          except:
            - branches@my-group/my-project # Exclude a specific branch in a specific project
        \`\`\`
* **\`rules\`:**
    * ផ្តល់នូវការគ្រប់គ្រងលក្ខខណ្ឌកាន់តែលម្អិតសម្រាប់ការដំណើរការ Jobs ។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        my_job:
          script: echo "Hello"
          rules:
            - if: '$CI_COMMIT_BRANCH == "main"' # Run only on main branch
            - if: '$CI_PIPELINE_SOURCE == "schedule"' # Run only on scheduled pipelines
        \`\`\`

---

## 4. ការកំណត់ Stages និង Jobs នៅក្នុង Pipeline 🏗️

រាល់ Job ត្រូវតែស្ថិតនៅក្នុង Stage មួយ។ ប្រសិនបើ Stage មិនត្រូវបានបញ្ជាក់ Job នឹងត្រូវបានកំណត់ទៅ Stage លំនាំដើម \`test\` ។

\`\`\`yaml
# .gitlab-ci.yml ឧទាហរណ៍ពេញលេញ
stages:
  - build
  - test
  - deploy

variables:
  DOCKER_IMAGE_NAME: my-app

build_job:
  stage: build
  image: docker:latest # Use a Docker image for building
  services:
    - docker:dind # Docker in Docker for building images
  script:
    - docker build -t $DOCKER_IMAGE_NAME:$CI_COMMIT_SHORT_SHA .
    - docker push $DOCKER_IMAGE_NAME:$CI_COMMIT_SHORT_SHA
  artifacts:
    paths:
      - build/
    expire_in: 1 hour

test_job:
  stage: test
  image: node:16-alpine # Use Node.js image for testing
  before_script:
    - npm install
  script:
    - npm test
  cache:
    paths:
      - node_modules/

deploy_staging_job:
  stage: deploy
  image: alpine/git # A small image with git
  script:
    - echo "Deploying $DOCKER_IMAGE_NAME:$CI_COMMIT_SHORT_SHA to staging..."
    - # Your deployment commands here (e.g., kubectl apply, ssh commands)
  environment:
    name: staging
    url: https://staging.example.com
  only:
    - main # Only run this job on the main branch

deploy_production_job:
  stage: deploy
  image: alpine/git
  script:
    - echo "Deploying $DOCKER_IMAGE_NAME:$CI_COMMIT_SHORT_SHA to production..."
    - # Your production deployment commands here
  environment:
    name: production
    url: https://prod.example.com
  only:
    - tags # Only run this job when a tag is pushed (e.g., for releases)
  when: manual # Requires manual trigger
\`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការកំណត់ Job នៅក្នុង \`.gitlab-ci.yml\`

Job នេះសម្រាប់ Stage **build** ប្រើ Docker Image និងរក្សាទុក Artifacts។

\`\`\`yaml
compile_job:
  stage: build
  image: python:3.9-slim
  script:
    - echo "Compiling Python code..."
    - python -m compileall .
    - echo "Compilation completed!"
  artifacts:
    paths:
      - __pycache__/
    expire_in: 1 day
\`\`\`

# ឧទាហរណ៍ ២: ការប្រើ \`rules\` សម្រាប់លក្ខខណ្ឌ

Job នេះប្រើ \`rules\` ដើម្បីដំណើរការតែនៅលើ Branch **feature** ឬ Scheduled Pipelines។

\`\`\`yaml
test_feature_job:
  stage: test
  image: node:16-alpine
  script:
    - echo "Running tests for feature branch..."
    - npm test
  rules:
    - if: '$CI_COMMIT_BRANCH =~ /^feature/.*'
    - if: '$CI_PIPELINE_SOURCE == "schedule"'
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ File មួយណាជាបេះដូងនៃ GitLab CI/CD Configuration?',
      options: [
        '`.gitignore`',
        '`.gitlab-ci.yml`',
        '`README.md`',
        '`config.json`'
      ],
      correct: 1,
      explanation: '`.gitlab-ci.yml` គឺជា File កំណត់រចនាសម្ព័ន្ធ YAML ដែលជាបេះដូងនៃ GitLab CI/CD ។'
    },
    {
      question: 'តើ `.gitlab-ci.yml` ត្រូវបានរក្សាទុកនៅទីណា?',
      options: [
        'នៅក្នុង Folder ដាច់ដោយឡែកមួយ',
        'នៅក្នុង Root Directory នៃ Git Repository របស់អ្នក',
        'នៅលើ GitLab Server តែប៉ុណ្ណោះ',
        'នៅក្នុង Database'
      ],
      correct: 1,
      explanation: '`.gitlab-ci.yml` ត្រូវបានរក្សាទុកនៅក្នុង Root Directory នៃ Git Repository របស់អ្នក។'
    },
    {
      question: 'តើ `.gitlab-ci.yml` ប្រើប្រាស់ Syntax ប្រភេទណា?',
      options: [
        'JSON',
        'XML',
        'YAML',
        'INI'
      ],
      correct: 2,
      explanation: '`.gitlab-ci.yml` ប្រើប្រាស់ YAML (YAML Ain\'t Markup Language) Syntax ។'
    },
    {
      question: 'តើ `Indentation` ក្នុង YAML មានសារៈសំខាន់ដែរឬទេ?',
      options: ['បាទ/ចាស៎ វាកំណត់រចនាសម្ព័ន្ធ', 'ទេ វាមិនសំខាន់ទេ', 'តែសម្រាប់ Comments ប៉ុណ្ណោះ', 'តែសម្រាប់ Lists ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ YAML ពឹងផ្អែកលើការចូលបន្ទាត់ (Spaces មិនមែន Tabs) ដើម្បីកំណត់រចនាសម្ព័ន្ធ។ ការចូលបន្ទាត់មិនត្រឹមត្រូវនឹងបណ្តាលឱ្យមានកំហុស។'
    },
    {
      question: 'តើ `stages` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់លំដាប់លំដោយនៃ Jobs',
        'ដើម្បីកំណត់លំដាប់លំដោយនៃ Stages នៅក្នុង Pipeline',
        'ដើម្បីបញ្ជាក់ Docker Image',
        'ដើម្បីកំណត់ Variables'
      ],
      correct: 1,
      explanation: '`stages` Keyword កំណត់លំដាប់លំដោយនៃ Stages នៅក្នុង Pipeline របស់អ្នក។'
    },
    {
      question: 'តើ `image` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបញ្ជាក់ឈ្មោះ Project',
        'ដើម្បីបញ្ជាក់ Docker Image ដែល Job នឹងដំណើរការនៅក្នុង',
        'ដើម្បីកំណត់ប្រភេទ Runner',
        'ដើម្បីកំណត់ Files ដែលត្រូវ Cache'
      ],
      correct: 1,
      explanation: '`image` Keyword បញ្ជាក់ Docker Image ដែល Job នឹងដំណើរការនៅក្នុង។'
    },
    {
      question: 'តើ `before_script` Commands ត្រូវបានដំណើរការនៅពេលណា?',
      options: [
        'បន្ទាប់ពី `script` របស់ Job',
        'មុនពេល `script` របស់ Job នីមួយៗ',
        'តែនៅពេល Pipeline បរាជ័យ',
        'តែនៅពេល Pipeline Pass'
      ],
      correct: 1,
      explanation: '`before_script` Commands ត្រូវបានដំណើរការមុនពេល `script` របស់ Job នីមួយៗ។'
    },
    {
      question: 'តើ `after_script` Commands ត្រូវបានដំណើរការនៅពេលណា?',
      options: [
        'មុនពេល `script` របស់ Job',
        'បន្ទាប់ពី `script` របស់ Job នីមួយៗ (មិនថា Job Pass ឬ Fail ទេ)',
        'តែនៅពេល Pipeline Pass',
        'តែនៅពេល Pipeline បរាជ័យ'
      ],
      correct: 1,
      explanation: '`after_script` Commands ត្រូវបានដំណើរការបន្ទាប់ពី `script` របស់ Job នីមួយៗ (មិនថា Job Pass ឬ Fail ទេ) ។'
    },
    {
      question: 'តើ `variables` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់លំដាប់លំដោយនៃ Stages',
        'ដើម្បីកំណត់ Variables ដែលអាចប្រើបានក្នុង Pipeline ឬ Jobs',
        'ដើម្បីបញ្ជាក់ Docker Image',
        'ដើម្បីកំណត់ Files ដែលត្រូវ Cache'
      ],
      correct: 1,
      explanation: '`variables` Keyword កំណត់ Variables ដែលអាចប្រើបានក្នុង Pipeline ឬ Jobs ។'
    },
    {
      question: 'តើ `cache` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីរក្សាទុក Output របស់ Build',
        'ដើម្បីបញ្ជាក់ Files ឬ Directories ដែលត្រូវ Cache រវាង Pipeline Runs ដើម្បីបង្ផើនល្បឿន',
        'ដើម្បីកំណត់លក្ខខណ្ឌសម្រាប់ Job',
        'ដើម្បី Deploy Application'
      ],
      correct: 1,
      explanation: '`cache` Keyword បញ្ជាក់ Files ឬ Directories ដែលត្រូវ Cache រវាង Pipeline Runs ដើម្បីបង្ផើនល្បឿន។'
    },
    {
      question: 'តើ `artifacts` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបញ្ជាក់ Files ឬ Directories ដែលត្រូវរក្សាទុកជា Artifacts បន្ទាប់ពី Job បានបញ្ចប់',
        'ដើម្បីកំណត់លក្ខខណ្ឌសម្រាប់ Job',
        'ដើម្បីកំណត់ Variables',
        'ដើម្បីបញ្ជាក់ Docker Image'
      ],
      correct: 0,
      explanation: '`artifacts` Keyword បញ្ជាក់ Files ឬ Directories ដែលត្រូវរក្សាទុកជា Artifacts បន្ទាប់ពី Job បានបញ្ចប់ (មានប្រយោជន៍សម្រាប់ Output របស់ Build ឬ Test Reports) ។'
    },
    {
      question: 'តើ `only` / `except` Keywords ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់លក្ខខណ្ឌថាតើ Job មួយគួរតែដំណើរការនៅពេលណា',
        'ដើម្បីបង្ផើនល្បឿន Job',
        'ដើម្បីរក្សាទុក Files',
        'ដើម្បីកំណត់ Docker Image'
      ],
      correct: 0,
      explanation: '`only` / `except` Keywords កំណត់លក្ខខណ្ឌថាតើ Job មួយគួរតែដំណើរការនៅពេលណា (ឧទាហរណ៍៖ តែលើ Branches ជាក់លាក់ ឬ Tags) ។'
    },
    {
      question: 'តើ `rules` Keyword ផ្តល់នូវអ្វី?',
      options: [
        'ការគ្រប់គ្រងលក្ខខណ្ឌកាន់តែលម្អិតសម្រាប់ការដំណើរការ Jobs',
        'វិធីសាស្ត្រសាមញ្ញសម្រាប់ការដំណើរការ Jobs',
        'ការកំណត់ Variables',
        'ការកំណត់ Cache'
      ],
      correct: 0,
      explanation: '`rules` Keyword ផ្តល់នូវការគ្រប់គ្រងលក្ខខណ្ឌកាន់តែលម្អិតសម្រាប់ការដំណើរ�ការ Jobs ។'
    },
    {
      question: 'ប្រសិនបើ Stage មិនត្រូវបានបញ្ជាក់សម្រាប់ Job មួយ តើ Job នឹងត្រូវបានកំណត់ទៅ Stage លំនាំដើមអ្វី?',
      options: [
        '`build`',
        '`deploy`',
        '`test`',
        'គ្មាន Stage ទេ'
      ],
      correct: 2,
      explanation: 'ប្រសិនបើ Stage មិនត្រូវបានបញ្ជាក់ Job នឹងត្រូវបានកំណត់ទៅ Stage លំនាំដើម `test` ។'
    },
    {
      question: 'តើ `Configuration as Code` គឺជាអត្ថប្រយោជន៍មួយនៃ `.gitlab-ci.yml` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Configuration as Code គឺជាអត្ថប្រយោជន៍មួយនៃ `.gitlab-ci.yml` ដែលអនុញ្ញាតឱ្យអ្នក Version Control Pipeline របស់អ្នក១'
    },
    {
      question: 'តើ `YAML` ពឹងផ្អែកលើ `Tabs` សម្រាប់ការចូលបន្ទាត់ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ តែ Spaces ប៉ុណ្ណោះ'],
      correct: 1,
      explanation: 'ទេ YAML ពឹងផ្អែកលើ Spaces មិនមែន Tabs សម្រាប់ការចូលបន្ទាត់១'
    },
    {
      question: 'តើ `Jobs` ត្រូវបានដំណើរការតាមលំដាប់លំដោយនៃ `Stages` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Jobs ត្រូវបានដំណើរការតាមលំដាប់លំដោយនៃ Stages ។'
    },
    {
      question: 'តើ `services` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់សេវាកម្មខាងក្រៅដែល Job ត្រូវការ (ឧទាហរណ៍៖ Database)',
        'ដើម្បីកំណត់សេវាកម្ម GitLab',
        'ដើម្បីកំណត់ User Permissions',
        'ដើម្បី Deploy Services'
      ],
      correct: 0,
      explanation: '`services` Keyword ត្រូវបានប្រើដើម្បីកំណត់សេវាកម្មខាងក្រៅដែល Job ត្រូវការ (ឧទាហរណ៍៖ Docker in Docker, Database Services) ។'
    },
    {
      question: 'តើ `environment` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ Environment Variables',
        'ដើម្បីកំណត់ Environment សម្រាប់ Deployment និង URL របស់វា',
        'ដើម្បីកំណត់ Environment របស់ Runner',
        'ដើម្បីកំណត់ Environment របស់ Docker Image'
      ],
      correct: 1,
      explanation: '`environment` Keyword ត្រូវបានប្រើដើម្បីកំណត់ Environment សម្រាប់ Deployment និង URL របស់វា។'
    },
    {
      question: 'តើ `when: manual` នៅក្នុង Job កំណត់អ្វី?',
      options: [
        'Job នឹងដំណើរការដោយស្វ័យប្រវត្តិ',
        'Job នឹងដំណើរការតែនៅពេល Trigger ដោយដៃ',
        'Job នឹងដំណើរការតែនៅពេល Pipeline បរាជ័យ',
        'Job នឹងដំណើរការតែនៅពេល Pipeline Pass'
      ],
      correct: 1,
      explanation: '`when: manual` កំណត់ថា Job នឹងដំណើរការតែនៅពេល Trigger ដោយដៃប៉ុណ្ណោះ១'
    }
  ],
  lab: {
    task: `
បង្ផើត File \`.gitlab-ci.yml\` សាមញ្ញនៅក្នុង GitLab UI និងស្រមៃមើលការដំណើរការ Pipeline:
* បង្ផើត Project ថ្មីមួយ។
* បន្ថែម File \`.gitlab-ci.yml\` ជាមួយ Stages និង Jobs។
* ស្រមៃមើលការពិនិត្យ Pipeline នៅក្នុង GitLab UI។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម:

1. **ចូលទៅ GitLab និងបង្ផើត Project**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្ផើត Project ថ្មីឈ្មោះ **'ci-cd-config-lab'** ជាមួយ **Visibility Level** ជា **Public** និងធីក Option **Initialize repository with a README**។
2. **បង្ផើត File \`.gitlab-ci.yml\`**:
   * នៅក្នុង Sidebar ខាងឆ្វេង ចុចលើ **Repository > Files**។
   * ចុចប៊ូតុង **+** ហើយជ្រើសរើស **New file**។
   * **File name**: បញ្ចូល \`.gitlab-ci.yml\` (ត្រូវប្រាកដថាមាន Dot នៅខាងមុខ)។
   * **Content**: បញ្ចូលមាតិកាខាងក្រោម:
     \`\`\`yaml
     # .gitlab-ci.yml សម្រាប់ Project សាមញ្ញ
     stages:
       - compile
       - test
       - deploy
     compile_job:
       stage: compile
       image: python:3.9-slim
       script:
         - echo "Compiling application..."
         - python -m compileall .
         - echo "Compilation completed!" > compile_output.txt
       artifacts:
         paths:
           - compile_output.txt
         expire_in: 1 day
     test_job:
       stage: test
       image: python:3.9-slim
       before_script:
         - pip install pytest
       script:
         - echo "Running unit tests..."
         - pytest --version
         - echo "Tests completed!"
       needs: ["compile_job"]
     deploy_job:
       stage: deploy
       image: alpine/git
       script:
         - echo "Deploying to staging environment..."
         - echo "Deployment completed!"
       only:
         - main
     \`\`\`
   * **Commit message**: \`Add initial .gitlab-ci.yml for CI/CD pipeline\`។
   * **Target branch**: ទុកជា **main**។
   * ចុច **Commit changes**។
3. **ស្រមៃមើលការពិនិត្យ Pipeline**:
   * នៅក្នុង Sidebar ខាងឆ្វេង ចុចលើ **CI/CD > Pipelines**។
   * **ស្រមៃ**: Pipeline ថ្មីមួយត្រូវបាន Trigger ដោយ Commit នៃ \`.gitlab-ci.yml\`។
   * **ស្រមៃ**: ចុចលើ Pipeline ID ដើម្បីមើល Stages (**compile**, **test**, **deploy**) និង Jobs (**compile_job**, **test_job**, **deploy_job**)។
   * **ស្រមៃ**: ពិនិត្យ Log Output នៃ **compile_job** (ឧទាហរណ៍៖ "Compilation completed!") និង Artifacts (**compile_output.txt**)។
   * **ស្រមៃ**: ពិនិត្យ Log Output នៃ **test_job** (ឧទាហរណ៍៖ "Tests completed!") និង **deploy_job** (ឧទាហរណ៍៖ "Deployment completed!") នៅលើ **main** branch។
`,
    solution: `
# ដំណោះស្រាយ៖ ការបង្ផើត File \`.gitlab-ci.yml\` សាមញ្ញ

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១: ចូលទៅ GitLab និងបង្ផើត Project
* អ្នកបានចូលទៅ **GitLab.com** និងបង្ផើត Project ថ្មីឈ្មោះ **ci-cd-config-lab** ជាមួយ **Visibility Level** ជា **Public** និង Initialize ជាមួយ **README**។

## ជំហានទី ២: បង្ផើត File \`.gitlab-ci.yml\`
* អ្នកបានបង្ផើត File \`.gitlab-ci.yml\` នៅក្នុង Root Directory នៃ Project៖
  \`\`\`yaml
  # .gitlab-ci.yml សម្រាប់ Project សាមញ្ញ
  stages:
    - compile
    - test
    - deploy
  compile_job:
    stage: compile
    image: python:3.9-slim
    script:
      - echo "Compiling application..."
      - python -m compileall .
      - echo "Compilation completed!" > compile_output.txt
    artifacts:
      paths:
        - compile_output.txt
      expire_in: 1 day
  test_job:
    stage: test
    image: python:3.9-slim
    before_script:
      - pip install pytest
    script:
      - echo "Running unit tests..."
      - pytest --version
      - echo "Tests completed!"
    needs: ["compile_job"]
  deploy_job:
    stage: deploy
    image: alpine/git
    script:
      - echo "Deploying to staging environment..."
      - echo "Deployment completed!"
    only:
      - main
  \`\`\`

## ជំហានទី ៣: ពិនិត្យ Pipeline (Conceptual)
* **Pipelines Page**:
  * អ្នកបានចូលទៅ **CI/CD > Pipelines** និងស្រមៃឃើញ Pipeline ថ្មីមួយដែល Trigger ដោយ Commit នៃ \`.gitlab-ci.yml\`។
  * អ្នកបានចុចលើ Pipeline ID និងឃើញ Stages (**compile**, **test**, **deploy**) និង Jobs (**compile_job**, **test_job**, **deploy_job**)។
* **Job Outputs**:
  * **compile_job**:
    \`\`\`
    Running with gitlab-runner 16.0.0
    Compiling application...
    python -m compileall .
    Compilation completed!
    Uploading artifacts...
    compile_output.txt: found 1 matching files
    Job succeeded
    \`\`\`
  * **test_job**:
    \`\`\`
    Running with gitlab-runner 16.0.0
    pip install pytest
    Running unit tests...
    pytest 7.4.0
    Tests completed!
    Job succeeded
    \`\`\`
  * **deploy_job** (នៅលើ **main** branch):
    \`\`\`
    Running with gitlab-runner 16.0.0
    Deploying to staging environment...
    Deployment completed!
    Job succeeded
    \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project Name**: **ci-cd-config-lab**
* **File Created**: \`.gitlab-ci.yml\` ជាមួយ Stages (**compile**, **test**, **deploy**) និង Jobs (**compile_job**, **test_job**, **deploy_job**)។
* **Pipeline Visualization**:
  \`\`\`
  [Pipeline Workflow]
  Commit .gitlab-ci.yml -> Compile Stage (compile_job) -> Test Stage (test_job) -> Deploy Stage (deploy_job)
  \`\`\`
* **Artifacts**: **compile_output.txt** ពី **compile_job** ត្រូវបានរក្សាទុករយៈពេល 1 ថ្ងៃ។

លំហាត់នេះបានជួយអ្នកឱ្យយល់ពីរបៈបបង្ផើត និងកំណត់រចនាសម្ព័ន្ធ File \`.gitlab-ci.yml\` សាមញ្ញមួយ១
`
  }
};

export default GitLabLesson4_2Content;