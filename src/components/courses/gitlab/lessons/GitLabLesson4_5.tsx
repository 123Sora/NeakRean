// src/components/lessons/gitlab/GitLabLesson4_5.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson4_5Content: LessonContent = {
  title: 'Deployment Strategies (យុទ្ធសាស្រ្ត Deployment)',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Deployment Strategies',
    'ស្គាល់ពីយុទ្ធសាស្រ្ត Deployment ផ្សេងៗគ្នា (Recreate, Rolling, Blue/Green, Canary)',
    'ដឹងពីអត្ថប្រយោជន៍ និងគុណវិបត្តិនៃយុទ្ធសាស្រ្តនីមួយៗ',
    'យល់ដឹងពីរបៀបដែល GitLab CI/CD អាចគាំទ្រយុទ្ធសាស្រ្ត Deployment ទាំងនេះ',
    'ស្គាល់ពីគោលគំនិតនៃ Feature Flags'
  ],
  content: `
# Deployment Strategies (យុទ្ធសាស្រ្ត Deployment) 🚀 deploy

---

**Deployment Strategies** គឺជាវិធីសាស្រ្តដែលត្រូវបានប្រើដើម្បី Deploy Software Changes ទៅកាន់ Production Environment ។ ការជ្រើសរើសយុទ្ធសាស្រ្តត្រឹមត្រូវគឺសំខាន់សម្រាប់កាត់បន្ថយ Downtime, កាត់បន្ថយហានិភ័យ, និងធានាបាននូវបទពិសោធន៍អ្នកប្រើប្រាស់រលូន។ GitLab CI/CD គាំទ្រយុទ្ធសាស្រ្ត Deployment ជាច្រើន។

---

## 1. គោលគំនិតនៃ Deployment Strategies 💡

* **គោលបំណង:**
    * **Minimize Downtime:** ធានាថា Application នៅតែអាចប្រើប្រាស់បានក្នុងអំឡុងពេល Deployment ។
    * **Reduce Risk:** កាត់បន្ថយលទ្ធភាពនៃ Bugs ឬបញ្ហាដែលប៉ះពាល់ដល់អ្នកប្រើប្រាស់ទាំងអស់។
    * **Rollback Capability:** អាចត្រឡប់ទៅ Version មុនវិញបានយ៉ាងងាយស្រួលប្រសិនបើមានបញ្ហា។
    * **Control Release:** គ្រប់គ្រងថាអ្នកណាទទួលបាន Changes ថ្មី។

---

## 2. យុទ្ធសាស្រ្ត Deployment ផ្សេងៗគ្នា 🔄

### 2.1. Recreate Deployment (ការបង្កើតឡើងវិញ)

* **របៀបដំណើរការ:**
    1.  បញ្ឈប់ Version ចាស់នៃ Application ។
    2.  លុប Version ចាស់។
    3.  Deploy Version ថ្មី។
    4.  ចាប់ផ្តើម Version ថ្មី។
* **អត្ថប្រយោជន៍:** សាមញ្ញបំផុតក្នុងការអនុវត្តន៍។
* **គុណវិបត្តិ:** មាន Downtime (Application មិនអាចប្រើបានមួយរយៈ) ។
* **ល្អសម្រាប់:** Applications ដែលមិនទាមទារ High Availability, ឬ Environments ដែលមិនមែនជា Production (Dev, Test) ។

### 2.2. Rolling Deployment (ការដាក់ឱ្យប្រើប្រាស់បន្តបន្ទាប់)

* **របៀបដំណើរការ:**
    1.  ค่อยๆ ជំនួស Instances ចាស់នៃ Application ជាមួយនឹង Instances ថ្មីម្តងមួយៗ ឬជាបាច់តូចៗ។
    2.  Instances ចាស់ និងថ្មីដំណើរការស្របគ្នាមួយរយៈ។
* **អត្ថប្រយោជន៍:** គ្មាន Downtime, កាត់បន្ថយហានិភ័យ (ប្រសិនបើ Instance ថ្មីមានបញ្ហា វាមិនប៉ះពាល់ដល់ទាំងអស់) ។
* **គុណវិបត្តិ:** ទាមទារ Backward Compatibility រវាង Versions ចាស់ និងថ្មី។
* **ល្អសម្រាប់:** Applications ភាគច្រើនដែលទាមទារ High Availability ។

### 2.3. Blue/Green Deployment (ការដាក់ឱ្យប្រើប្រាស់ Blue/Green)

* **របៀបដំណើរការ:**
    1.  មាន Environment ពីរដែលដូចគ្នា (ឧទាហរណ៍៖ "Blue" និង "Green") ។
    2.  Version បច្ចុប្បន្ន (ឧទាហរណ៍៖ Blue) កំពុងដំណើរការ Production Traffic ។
    3.  Deploy Version ថ្មីទៅកាន់ Environment ទំនេរ (ឧទាហរណ៍៖ Green) ។
    4.  Test Version ថ្មីនៅលើ Green Environment ។
    5.  នៅពេលរួចរាល់ ប្តូរ Traffic ពី Blue ទៅ Green (ជាធម្មតាដោយការផ្លាស់ប្តូរ Load Balancer) ។
    6.  Blue Environment ត្រូវបានរក្សាទុកជា Backup ឬសម្រាប់ Deployment បន្ទាប់។
* **អត្ថប្រយោជន៍:** គ្មាន Downtime, Rollback រហ័ស (គ្រាន់តែប្តូរ Traffic ត្រឡប់ទៅ Blue វិញ) ។
* **គុណវិបត្តិ:** ទាមទារ Resources ទ្វេដង (សម្រាប់ Environment ពីរ) ។
* **ល្អសម្រាប់:** Applications សំខាន់ៗដែលទាមទារ Zero Downtime និង Rollback លဠ័ស។

### 2.4. Canary Deployment (ការដាក់ឱ្យប្រើប្រាស់ Canary)

* **របៀបដំណើរការ:**
    1.  Deploy Version ថ្មីទៅកាន់ Subset តូចមួយនៃ Users (Canary Group) ។
    2.  តាមដាន Metrics (Errors, Performance) និង Feedback ពី Canary Group ។
    3.  ប្រសិនបើអ្វីៗដំណើរការល្អ បន្ត Deploy ទៅកាន់ Users កាន់តែច្រើនជាបន្តបន្ទាប់។
    4.  ប្រសិនបើមានបញ្ហា Rollback តែ Canary Group ប៉ុណ្ណោះ។
* **អត្ថប្រយោជន៍:** កាត់បន្ថយហានិភ័យយ៉ាងខ្លាំង (បញ្ហាត្រូវបានរកឃើញមុនពេលប៉ះពាល់ដល់ Users ទាំងអស់) ។
* **គុណវិបត្តិ:** ស្មុគស្មាញក្នុងការអនុវត្តន៍ និងទាមទារ Monitoring ខ្លាំង។
* **ល្អសម្រាប់:** Applications ដែលមាន Users ច្រើន និងទាមទារការ Deploy ដោយសុវត្ថិភាពខ្ពស់។

---

## 3. Feature Flags (ទង់មុខងារ) 🚩

**Feature Flags** (ឬ Feature Toggles) គឺជាបច្ចេកទេសដែលអនុញ្ញាតឱ្យអ្នកបើក ឬបិទមុខងារថ្មីៗនៅក្នុង Production ដោយមិនចាំបាច់ Deploy Code ថ្មី។

* **គោលបំណង:**
    * **Decouple Deployment from Release:** Deploy Code ទៅ Production ប៉ុន្តែ Release មុខងារដល់ Users តាមពេលវេលាខុសគ្នា។
    * **A/B Testing:** បើកមុខងារសម្រាប់ Subset នៃ Users ដើម្បីប្រៀបធៀបឥរិយាបថ។
    * **Kill Switch:** បិទមុខងារដែលមានបញ្ហាភ្លាមៗនៅក្នុង Production ។
* **របៀបដំណើរការ:** Code របស់អ្នកមាន Logic ដែលពិនិត្យមើល Feature Flag មុនពេលបង្ហាញមុខងារ។ Feature Flag ត្រូវបានគ្រប់គ្រងដោយ External Service (ឧទាហរណ៍៖ GitLab Feature Flags) ។

---

## 4. GitLab CI/CD និង Deployment Strategies 🤝

GitLab CI/CD ផ្តល់នូវ Flexibility ក្នុងការអនុវត្តន៍យុទ្ធសាស្រ្ត Deployment ទាំងនេះ៖

* **Recreate/Rolling:** អាចត្រូវបានអនុវត្តដោយប្រើ \`script\` Commands នៅក្នុង Job ។
* **Blue/Green:** អាចត្រូវបានអនុវត្តដោយប្រើ \`environment\` Keyword និង Job សម្រាប់ប្តូរ Traffic (ឧទាហរណ៍៖ Update Load Balancer Configuration) ។
* **Canary:** អាចត្រូវបានអនុវត្តដោយការ Deploy ទៅ Environment តូចមួយដំបូង បន្ទាប់មក Deploy ទៅ Environment ធំជាង។
* **Feature Flags:** GitLab មានមុខងារ Feature Flags ដែលត្រូវបានបង្កើតឡើងនៅក្នុង Platform ។

---
> **គន្លឹះ:** ការជ្រើសរើសយុទ្ធសាស្រ្ត Deployment អាស្រ័យលើតម្រូវការរបស់ Project របស់អ្នកសម្រាប់ Downtime, ហានិភ័យ, និង Resources ។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Recreate Deployment

នេះជាឧទាហរណ៍សាមញ្ញនៃ Recreate Deployment នៅក្នុង \`.gitlab-ci.yml\` ដែលបញ្ឈប់ និងជំនួស Application ចាស់៖

\`\`\`yaml
deploy_recreate:
  stage: deploy
  image: python:3.10-slim
  script:
    - echo "Stopping old application..."
    - echo "Removing old application files..."
    - echo "Deploying new version to /app/deployment..."
    - echo "Starting new application..."
  environment:
    name: production
    url: https://app.example.com
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: manual
\`\`\`

# ឧទាហរណ៍ ២: Rolling Deployment

នេះជាឧទាហរណ៍នៃ Rolling Deployment ដែលធ្វើបច្ចុប្បន្នភាព Instances ជាបណ្តើរៗ៖

\`\`\`yaml
deploy_rolling:
  stage: deploy
  image: python:3.10-slim
  script:
    - echo "Deploying new version to 20% of instances..."
    - echo "Waiting for health checks..."
    - echo "Deploying to next 20% of instances..."
    - echo "All instances updated successfully."
  environment:
    name: production
    url: https://app.example.com
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: manual
\`\`\`

# ឧទាហរណ៍ ៣: Blue/Green Deployment

នេះជាឧទាហរណ៍នៃ Blue/Green Deployment ដែលប្រើ Environment ពីរ៖

\`\`\`yaml
stages:
  - build
  - deploy
  - switch

variables:
  APP_VERSION: "v$CI_COMMIT_SHORT_SHA"

build_app:
  stage: build
  image: python:3.10-slim
  script:
    - echo "Building application $APP_VERSION..."
    - pip install -r requirements.txt
    - echo "Build output" > dist/app.tar
  artifacts:
    paths:
      - dist/
    expire_in: 1 day

deploy_to_green:
  stage: deploy
  image: python:3.10-slim
  script:
    - echo "Deploying $APP_VERSION to Green environment..."
    - echo "Running tests on Green environment..."
  environment:
    name: green
    url: https://green.app.example.com
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: manual
  needs: ["build_app"]

switch_to_green:
  stage: switch
  image: python:3.10-slim
  script:
    - echo "Switching traffic to Green environment ($APP_VERSION)..."
    - echo "Blue environment is now idle."
  environment:
    name: production
    url: https://app.example.com
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: manual
  needs: ["deploy_to_green"]
\`\`\`

# ឧទាហរណ៍ ៤: Canary Deployment with Feature Flags

នេះជាឧទាហរណ៍នៃ Canary Deployment ដែលប្រើ Feature Flags សម្រាប់ Users មួយចំនួនតូច៖

\`\`\`yaml
deploy_canary:
  stage: deploy
  image: python:3.10-slim
  script:
    - echo "Deploying new version to 10% of users (Canary Group)..."
    - echo "Enabling feature flag 'new_feature' for Canary Group..."
    - echo "Monitoring metrics and feedback..."
    - echo "If successful, rolling out to all users."
  environment:
    name: production
    url: https://app.example.com
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: manual
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `Deployment Strategies` គឺជាអ្វី?',
      options: [
        'វិធីសាស្រ្តសម្រាប់សរសេរ Code',
        'វិធីសាស្រ្តដែលត្រូវបានប្រើដើម្បី Deploy Software Changes ទៅកាន់ Production Environment',
        'វិធីសាស្រ្តសម្រាប់គ្រប់គ្រង Issues',
        'វិធីសាស្រ្តសម្រាប់ធ្វើ Code Review'
      ],
      correct: 1,
      explanation: 'Deployment Strategies គឺជាវិធីសាស្រ្តដែលត្រូវបានប្រើដើម្បី Deploy Software Changes ទៅកាន់ Production Environment ។'
    },
    {
      question: 'តើគោលបំណងចម្បងមួយនៃ Deployment Strategies គឺអ្វី?',
      options: [
        'ដើម្បីបង្កើន Downtime',
        'ដើម្បីកាត់បន្ថយហានិភ័យ',
        'ដើម្បីកាត់បន្ថយការគ្រប់គ្រង Code',
        'ដើម្បីបង្កើនភាពស្មុគស្មាញ'
      ],
      correct: 1,
      explanation: 'គោលបំណងចម្បងមួយនៃ Deployment Strategies គឺដើម្បីកាត់បន្ថយហានិភ័យនៃ Bugs ឬបញ្ហាដែលប៉ះពាល់ដល់អ្នកប្រើប្រាស់ទាំងអស់។'
    },
    {
      question: 'តើ `Recreate Deployment` មានគុណវិបត្តិអ្វី?',
      options: [
        'គ្មាន Downtime',
        'មាន Downtime (Application មិនអាចប្រើបានមួយរយៈ)',
        'ស្មុគស្មាញក្នុងការអនុវត្តន៍',
        'ទាមទារ Resources ទ្វេដង'
      ],
      correct: 1,
      explanation: 'Recreate Deployment មានគុណវិបត្តិត្រង់ថាវាមាន Downtime (Application មិនអាចប្រើបានមួយរយៈ) ។'
    },
    {
      question: 'តើ `Rolling Deployment` ដំណើរការដោយរបៀបណា?',
      options: [
        'បញ្ឈប់ Version ចាស់ទាំងស្រុង រួច Deploy Version ថ្មី',
        'Deploy Version ថ្មីទៅកាន់ Subset តូចមួយនៃ Users',
        'ค่อยๆ ជំនួស Instances ចាស់នៃ Application ជាមួយនឹង Instances ថ្មីម្តងមួយៗ ឬជាបាច់តូចៗ',
        'មាន Environment ពីរដែលដូចគ្នា ហើយប្តូរ Traffic'
      ],
      correct: 2,
      explanation: 'Rolling Deployment ដំណើរការដោយค่อยๆ ជំនួស Instances ចាស់នៃ Application ជាមួយនឹង Instances ថ្មីម្តងមួយៗ ឬជាបាច់តូចៗ។'
    },
    {
      question: 'តើ `Blue/Green Deployment` មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'មាន Downtime',
        'Rollback យឺត',
        'គ្មាន Downtime, Rollback រហ័ស',
        'ទាមទារ Backward Compatibility'
      ],
      correct: 2,
      explanation: 'Blue/Green Deployment មានអត្ថប្រយោជន៍ត្រង់ថាគ្មាន Downtime និង Rollback រហ័ស។'
    },
    {
      question: 'តើ `Canary Deployment` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បី Deploy ទៅ Users ទាំងអស់ក្នុងពេលតែមួយ',
        'ដើម្បី Deploy Version ថ្មីទៅកាន់ Subset តូចមួយនៃ Users ដំបូង',
        'ដើម្បីបញ្ឈប់ Application ទាំងស្រុង',
        'ដើម្បីធ្វើការ Test តែលើ Local Machine'
      ],
      correct: 1,
      explanation: 'Canary Deployment ត្រូវបានប្រើដើម្បី Deploy Version ថ្មីទៅកាន់ Subset តូចមួយនៃ Users ដំបូង ដើម្បីកាត់បន្ថយហានិភ័យ១'
    },
    {
      question: 'តើ `Feature Flags` អនុញ្ញាតឱ្យអ្នកធ្វើអ្វី?',
      options: [
        'Deploy Code ថ្មីរាល់ពេលមុខងារត្រូវបានផ្លាស់ប្តូរ',
        'បើក ឬបិទមុខងារថ្មីៗនៅក្នុង Production ដោយមិនចាំបាច់ Deploy Code ថ្មី',
        'ធ្វើឱ្យ Application ដំណើរការយឺត',
        'បង្កើនចំនួន Bugs'
      ],
      correct: 1,
      explanation: 'Feature Flags អនុញ្ញាតឱ្យអ្នកបើក ឬបិទមុខងារថ្មីៗនៅក្នុង Production ដោយមិនចាំបាច់ Deploy Code ថ្មី។'
    },
    {
      question: 'តើ `Rolling Deployment` ទាមទារអ្វីរវាង Versions ចាស់ និងថ្មី?',
      options: [
        'Zero Downtime',
        'Backward Compatibility',
        'Resources ទ្វេដង',
        'Manual Approval'
      ],
      correct: 1,
      explanation: 'Rolling Deployment ទាមទារ Backward Compatibility រវាង Versions ចាស់ និងថ្មី។'
    },
    {
      question: 'តើ `Blue/Green Deployment` ទាមទារ `Resources` ប្រភេទណា?',
      options: [
        'Resources ធម្មតា',
        'Resources ទ្វេដង (សម្រាប់ Environment ពីរ)',
        'Resources តិចជាង',
        'គ្មាន Resources ទេ'
      ],
      correct: 1,
      explanation: 'Blue/Green Deployment ទាមទារ Resources ទ្វេដង (សម្រាប់ Environment ពីរ) ។'
    },
    {
      question: 'តើ `Canary Deployment` ទាមទារ `Monitoring` ប្រភេទណា?',
      options: [
        'គ្មាន Monitoring ទេ',
        'Monitoring តិចតួច',
        'Monitoring ខ្លាំង',
        'Monitoring ដោយដៃ'
      ],
      correct: 2,
      explanation: 'Canary Deployment ទាមទារ Monitoring ខ្លាំង ដើម្បីតាមដាន Metrics និង Feedback ពី Canary Group ។'
    },
    {
      question: 'តើ `GitLab CI/CD` អាចគាំទ្រយុទ្ធសាស្រ្ត Deployment ផ្សេងៗគ្នាដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab CI/CD ផ្តល់នូវ Flexibility ក្នុងការអនុវត្តន៍យុទ្ធសាស្រ្ត Deployment ជាច្រើន។'
    },
    {
      question: 'តើ `Recreate Deployment` ល្អសម្រាប់ Applications ប្រភេទណា?',
      options: [
        'Applications ដែលទាមទារ High Availability',
        'Applications ដែលមិនទាមទារ High Availability',
        'Applications ដែលមាន Users ច្រើន',
        'Applications សំខាន់ៗ'
      ],
      correct: 1,
      explanation: 'Recreate Deployment ល្អសម្រាប់ Applications ដែលមិនទាមទារ High Availability ឬ Environments ដែលមិនមែនជា Production ។'
    },
    {
      question: 'តើ `Feature Flags` ជួយ `Decouple Deployment from Release` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Feature Flags ជួយ Decouple Deployment from Release ដោយអនុញ្ញាតឱ្យអ្នក Deploy Code ទៅ Production ប៉ុន្តែ Release មុខងារដល់ Users តាមពេលវេលាខុសគ្នា។'
    },
    {
      question: 'តើ `Blue/Green Deployment` ត្រូវបានអនុវត្តដោយការផ្លាស់ប្តូរអ្វី?',
      options: [
        'Codebase',
        'Load Balancer (ប្តូរ Traffic)',
        'Database Schema',
        'Server Operating System'
      ],
      correct: 1,
      explanation: 'Blue/Green Deployment ត្រូវបានអនុវត្តដោយការប្តូរ Traffic ពី Environment មួយទៅ Environment មួយទៀត (ជាធម្មតាដោយការផ្លាស់ប្តូរ Load Balancer) ។'
    },
    {
      question: 'តើ `Canary Deployment` ជួយកាត់បន្ថយហានិភ័យដោយរបៀបណា?',
      options: [
        'ដោយការ Deploy ទៅ Users ទាំងអស់ក្នុងពេលតែមួយ',
        'ដោយការរកឃើញបញ្ហាមុនពេលប៉ះពាល់ដល់ Users ទាំងអស់',
        'ដោយការមិនធ្វើ Test',
        'ដោយការបង្កើន Downtime'
      ],
      correct: 1,
      explanation: 'Canary Deployment ជួយកាត់បន្ថយហានិភ័យយ៉ាងខ្លាំង ដោយបញ្ហាត្រូវបានរកឃើញមុនពេលប៉ះពាល់ដល់ Users ទាំងអស់។'
    },
    {
      question: 'តើ `Zero Downtime` គឺជាគោលបំណងមួយនៃ Deployment Strategies ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Minimize Downtime (ឬ Zero Downtime) គឺជាគោលបំណងមួយនៃ Deployment Strategies ។'
    },
    {
      question: 'តើ `A/B Testing` អាចត្រូវបានអនុវត្តដោយប្រើ `Feature Flags` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ A/B Testing អាចត្រូវបានអនុវត្តដោយប្រើ Feature Flags ដើម្បីបើកមុខងារសម្រាប់ Subset នៃ Users ដើម្បីប្រៀបធៀបឥរិយាបថ។'
    },
    {
      question: 'តើ `Rollback Capability` មានន័យដូចម្តេចក្នុងបរិបទ Deployment?',
      options: [
        'មិនអាចត្រឡប់ទៅ Version មុនបានទេ',
        'អាចត្រឡប់ទៅ Version មុនវិញបានយ៉ាងងាយស្រួលប្រសិនបើមានបញ្ហា',
        'ការ Deploy ដោយស្វ័យប្រវត្តិ',
        'ការ Deploy ទៅ Environment ថ្មី'
      ],
      correct: 1,
      explanation: 'Rollback Capability មានន័យថាអាចត្រឡប់ទៅ Version មុនវិញបានយ៉ាងងាយស្រួលប្រសិនបើមានបញ្ហា។'
    },
    {
      question: 'តើ `Rolling Deployment` ត្រូវបានចាត់ទុកថាជាយុទ្ធសាស្រ្តដែលមាន `Downtime` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 1,
      explanation: 'ទេ Rolling Deployment ត្រូវបានចាត់ទុកថាជាយុទ្ធសាស្រ្តដែលគ្មាន Downtime ដោយសារ Instances ចាស់ និងថ្មីដំណើរការស្របគ្នា។'
    },
    {
      question: 'តើ `Kill Switch` គឺជាគោលគំនិតដែលទាក់ទងនឹងអ្វី?',
      options: [
        'Recreate Deployment',
        'Rolling Deployment',
        'Blue/Green Deployment',
        'Feature Flags'
      ],
      correct: 3,
      explanation: 'Kill Switch គឺជាគោលគំនិតដែលទាក់ទងនឹង Feature Flags ដែលអនុញ្ញាតឱ្យបិទមុខងារដែលមានបញ្ហាភ្លាមៗនៅក្នុង Production ។'
    }
  ],
  lab: {
    task: `
ការអនុវត្តន៍ជាក់ស្តែង៖ ការស្វែងយល់ពី Deployment Strategies (Conceptual):
* បង្កើត Project ថ្មីនៅលើ GitLab ដើម្បីអនុវត្តការកំណត់រចនាសម្ព័ន្ធ CI/CD សម្រាប់ Deployment Strategies។
* កែប្រែ File \`.gitlab-ci.yml\` ដើម្បីស្វែងយល់ពី Recreate, Rolling, Blue/Green, និង Canary Deployments។
* ស្រមៃមើលការពិនិត្យ Pipeline និង Environments នៅក្នុង GitLab UI។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម:

1. **រៀបចំ Project**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្កើត Project ថ្មីមួយឈ្មោះ **'deployment-strategies'** ជាមួយ **Visibility Level** ជា **Public** និង **Initialize repository with a README**។
   * បន្ថែម File \`.gitlab-ci.yml\` ដោយចុច **Repository > Files > New file** ហើយដាក់ឈ្មោះថា \`.gitlab-ci.yml\`។

2. **កែប្រែ .gitlab-ci.yml**:
   * នៅក្នុង File \`.gitlab-ci.yml\` បន្ថែម Code ខាងក្រោម:
     \`\`\`yaml
     stages:
       - build
       - deploy
       - switch

     variables:
       APP_VERSION: "v$CI_COMMIT_SHORT_SHA"

     build_app:
       stage: build
       image: python:3.10-slim
       script:
         - echo "Building application $APP_VERSION..."
         - pip install -r requirements.txt
         - echo "Build output" > dist/app.tar
       artifacts:
         paths:
           - dist/
         expire_in: 1 day

     deploy_recreate:
       stage: deploy
       image: python:3.10-slim
       script:
         - echo "Recreate Deployment: Stopping old application..."
         - echo "Removing old application files..."
         - echo "Deploying $APP_VERSION to /app/deployment..."
         - echo "Starting new application..."
       environment:
         name: production
         url: https://app.example.com
       rules:
         - if: '$CI_COMMIT_BRANCH == "main"'
           when: manual
       needs: ["build_app"]

     deploy_rolling:
       stage: deploy
       image: python:3.10-slim
       script:
         - echo "Rolling Deployment: Deploying $APP_VERSION to 20% of instances..."
         - echo "Waiting for health checks..."
         - echo "Deploying to next 20% of instances..."
         - echo "All instances updated."
       environment:
         name: production
         url: https://app.example.com
       rules:
         - if: '$CI_COMMIT_BRANCH == "main"'
           when: manual
       needs: ["build_app"]

     deploy_to_green:
       stage: deploy
       image: python:3.10-slim
       script:
         - echo "Blue/Green Deployment: Deploying $APP_VERSION to Green environment..."
         - echo "Running tests on Green environment..."
       environment:
         name: green
         url: https://green.app.example.com
       rules:
         - if: '$CI_COMMIT_BRANCH == "main"'
           when: manual
       needs: ["build_app"]

     switch_to_green:
       stage: switch
       image: python:3.10-slim
       script:
         - echo "Blue/Green Deployment: Switching traffic to Green environment ($APP_VERSION)..."
         - echo "Blue environment is now idle."
       environment:
         name: production
         url: https://app.example.com
       rules:
         - if: '$CI_COMMIT_BRANCH == "main"'
           when: manual
       needs: ["deploy_to_green"]

     deploy_canary:
       stage: deploy
       image: python:3.10-slim
       script:
         - echo "Canary Deployment: Deploying $APP_VERSION to 10% of users..."
         - echo "Enabling feature flag 'new_feature' for Canary Group..."
         - echo "Monitoring metrics and feedback..."
         - echo "If successful, rolling out to all users."
       environment:
         name: production
         url: https://app.example.com
       rules:
         - if: '$CI_COMMIT_BRANCH == "main"'
           when: manual
       needs: ["build_app"]
     \`\`\`
   * **Commit message**: \`Add .gitlab-ci.yml for deployment strategies\`
   * **Target branch**: \`main\`
   * ចុច **Commit changes**។

3. **ពិនិត្យ Pipeline (Conceptual)**:
   * **ស្រមៃ**: ចូលទៅ **CI/CD > Pipelines** នៅក្នុង Sidebar ខាងឆ្វេង។
     * ឃើញ Pipeline ថ្មី Trigger ដោយ Commit។
     * **Jobs Execution**:
       * \`build_app\` ដំណើរការមុនគេ។
       * \`deploy_recreate\`, \`deploy_rolling\`, \`deploy_to_green\`, \`deploy_canary\` និង \`switch_to_green\` ដំណើរការតែនៅពេល Trigger ដោយដៃបន្ទាប់ពី \`build_app\`។
     * ចុចលើ Job នីមួយៗដើម្បីមើល Log Output (ឧទាហរណ៍៖ Variable \`$APP_VERSION\`)។
   * **ពិភាក្សា**:
     * **Recreate**: មាន Downtime; សមស្របសម្រាប់ Applications ដែលមិនទាមទារ High Availability។
     * **Rolling**: គ្មាន Downtime; ទាមទារ Backward Compatibility។
     * **Blue/Green**: គ្មាន Downtime, Rollback រហ័ស; ទាមទារ Resources ទ្វេដង។
     * **Canary**: កាត់បន្ថយហានិភ័យ; ទាមទារ Monitoring ខ្លាំង; Feature Flags ជួយគ្រប់គ្រង Release។

4. **ពិនិត្យ Environments (Conceptual)**:
   * **ស្រមៃ**: ចូលទៅ **Operate > Environments**។
     * ឃើញ Environment \`production\` (បង្កើតដោយ \`deploy_recreate\`, \`deploy_rolling\`, \`deploy_canary\`, \`switch_to_green\`) និង \`green\` (បង្កើតដោយ \`deploy_to_green\`)។
     * ស្រមៃចុចលើ Link ដើម្បីទៅកាន់ URLs (\`https://app.example.com\`, \`https://green.app.example.com\`)។
`,
    solution: `
# ដំណោះស្រាយ៖ ការស្វែងយល់ពី Deployment Strategies

បន្ទាប់ពីអនុវត្តជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១: រៀបចំ Project
* អ្នកបានបង្កើត Project **deployment-strategies** នៅលើ **GitLab.com** ជាមួយ **Visibility Level** ជា **Public** និង **README**។
* អ្នកបានបន្ថែម File \`.gitlab-ci.yml\` ទៅ Repository។

## ជំហានទី ២: កែប្រែ .gitlab-ci.yml
* **File \`.gitlab-ci.yml\`**:
  \`\`\`yaml
  stages:
    - build
    - deploy
    - switch

  variables:
    APP_VERSION: "v$CI_COMMIT_SHORT_SHA"

  build_app:
    stage: build
    image: python:3.10-slim
    script:
      - echo "Building application $APP_VERSION..."
      - pip install -r requirements.txt
      - echo "Build output" > dist/app.tar
    artifacts:
      paths:
        - dist/
      expire_in: 1 day

  deploy_recreate:
    stage: deploy
    image: python:3.10-slim
    script:
      - echo "Recreate Deployment: Stopping old application..."
      - echo "Removing old application files..."
      - echo "Deploying $APP_VERSION to /app/deployment..."
      - echo "Starting new application..."
    environment:
      name: production
      url: https://app.example.com
    rules:
      - if: '$CI_COMMIT_BRANCH == "main"'
        when: manual
    needs: ["build_app"]

  deploy_rolling:
    stage: deploy
    image: python:3.10-slim
    script:
      - echo "Rolling Deployment: Deploying $APP_VERSION to 20% of instances..."
      - echo "Waiting for health checks..."
      - echo "Deploying to next 20% of instances..."
      - echo "All instances updated."
    environment:
      name: production
      url: https://app.example.com
    rules:
      - if: '$CI_COMMIT_BRANCH == "main"'
        when: manual
    needs: ["build_app"]

  deploy_to_green:
    stage: deploy
    image: python:3.10-slim
    script:
      - echo "Blue/Green Deployment: Deploying $APP_VERSION to Green environment..."
      - echo "Running tests on Green environment..."
    environment:
      name: green
      url: https://green.app.example.com
    rules:
      - if: '$CI_COMMIT_BRANCH == "main"'
        when: manual
    needs: ["build_app"]

  switch_to_green:
    stage: switch
    image: python:3.10-slim
    script:
      - echo "Blue/Green Deployment: Switching traffic to Green environment ($APP_VERSION)..."
      - echo "Blue environment is now idle."
    environment:
      name: production
      url: https://app.example.com
    rules:
      - if: '$CI_COMMIT_BRANCH == "main"'
        when: manual
    needs: ["deploy_to_green"]

  deploy_canary:
    stage: deploy
    image: python:3.10-slim
    script:
      - echo "Canary Deployment: Deploying $APP_VERSION to 10% of users..."
      - echo "Enabling feature flag 'new_feature' for Canary Group..."
      - echo "Monitoring metrics and feedback..."
      - echo "If successful, rolling out to all users."
    environment:
      name: production
      url: https://app.example.com
    rules:
      - if: '$CI_COMMIT_BRANCH == "main"'
        when: manual
    needs: ["build_app"]
  \`\`\`

## ជំហានទី ៣: ពិនិត្យ Pipeline (Conceptual)
* **Pipeline Visualization**:
  * អ្នកបានចូលទៅ **CI/CD > Pipelines** និងស្រមៃឃើញ Pipeline ថ្មី Trigger ដោយ Commit។
  * **Job Outputs**:
    * **build_app**:
      \`\`\`
      Building application v<short-sha>...
      Successfully installed requirements.txt
      Created dist/app.tar
      Job succeeded
      \`\`\`
    * **deploy_recreate**:
      \`\`\`
      Recreate Deployment: Stopping old application...
      Removing old application files...
      Deploying v<short-sha> to /app/deployment...
      Starting new application...
      Job pending (manual trigger required)
      \`\`\`
    * **deploy_rolling**:
      \`\`\`
      Rolling Deployment: Deploying v<short-sha> to 20% of instances...
      Waiting for health checks...
      Deploying to next 20% of instances...
      All instances updated.
      Job pending (manual trigger required)
      \`\`\`
    * **deploy_to_green**:
      \`\`\`
      Blue/Green Deployment: Deploying v<short-sha> to Green environment...
      Running tests on Green environment...
      Job pending (manual trigger required)
      \`\`\`
    * **switch_to_green**:
      \`\`\`
      Blue/Green Deployment: Switching traffic to Green environment (v<short-sha>)...
      Blue environment is now idle.
      Job pending (manual trigger required)
      \`\`\`
    * **deploy_canary**:
      \`\`\`
      Canary Deployment: Deploying v<short-sha> to 10% of users...
      Enabling feature flag 'new_feature' for Canary Group...
      Monitoring metrics and feedback...
      If successful, rolling out to all users.
      Job pending (manual trigger required)
      \`\`\`
  * **Workflow**:
    \`\`\`
    [Commit .gitlab-ci.yml] -> [Build Stage (build_app)] -> [Deploy Stage (deploy_recreate, deploy_rolling, deploy_to_green, deploy_canary, manual)] -> [Switch Stage (switch_to_green, manual)]
    \`\`\`

## ជំហានទី ៤: ពិនិត្យ Environments (Conceptual)
* **Environments**:
  * អ្នកបានចូលទៅ **Operate > Environments** និងស្រមៃឃើញ Environments ដូចខាងក្រោម៖
    * \`production\`: បង្ផើតដោយ \`deploy_recreate\`, \`deploy_rolling\`, \`deploy_canary\`, \`switch_to_green\` (URL: \`https://app.example.com\`)។
    * \`green\`: បង្ផើតដោយ \`deploy_to_green\` (URL: \`https://green.app.example.com\`)។

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project Name**: **deployment-strategies**
* **Pipeline**: 
  * Jobs: \`build_app\`, \`deploy_recreate\`, \`deploy_rolling\`, \`deploy_to_green\`, \`switch_to_green\`, \`deploy_canary\` (លើកលែង \`build_app\` ទាំងអស់សុទ្ធតែ Manual)។
  * Dependencies: Deploy Jobs ពឹងផ្អែកលើ \`build_app\`; \`switch_to_green\` ពឹងផ្អែកលើ \`deploy_to_green\`។
* **Variable**: \`$APP_VERSION\` (តម្លៃគឺ \`v<short-sha>\`)។
* **Artifacts**: \`dist/\` ត្រូវបានរក្សាទុកសម្រាប់ 1 ថ្ងៃ។
* **Environments**: \`production\` និង \`green\` ជាមួយ URLs រៀងគ្នា។
* **Discussion**:
  * **Recreate**: មាន Downtime; សមស្របសម្រាប់ Applications ដែលមិនទាមទារ High Availability។
  * **Rolling**: គ្មាន Downtime; ទាមទារ Backward Compatibility។
  * **Blue/Green**: គ្មាន Downtime, Rollback រហ័ស; ទាមទារ Resources ទ្វេដង។
  * **Canary**: កាត់បន្ថយហានိភ័យ; Feature Flags ជួយគ្រប់គ្រង Release។

លំហាត់នេះបានជួយអ្នកឱ្យយល់ពីការអនុវត្តន៍ Conceptual នៃ Deployment Strategies ដោយប្រើ GitLab CI/CD។
`
  }
};

export default GitLabLesson4_5Content;
