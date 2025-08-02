// src/components/lessons/gitlab/GitLabLesson4_4.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson4_4Content: LessonContent = {
  title: 'កំណត់រចនាសម្ព័ន្ធ CI/CD កាន់តែស៊ីជម្រៅ',
  objectives: [
    'យល់ដឹងពីការប្រើប្រាស់ Variables (Predefined, Custom, Protected, Masked)',
    'ដឹងពីរបៀបគ្រប់គ្រង Dependencies រវាង Jobs ដោយប្រើ `needs`',
    'ស្គាល់ពីការប្រើប្រាស់ `cache` និង `artifacts` ឱ្យកាន់តែមានប្រសិទ្ធភាព',
    'របៀបកំណត់លក្ខខណ្ឌសម្រាប់ការដំណើរការ Jobs ដោយប្រើ `rules` និង `only/except`',
    'យល់ដឹងពីការប្រើប្រាស់ `services` សម្រាប់ Jobs (ឧទាហរណ៍៖ Databases)',
    'របៀបកំណត់ `environments` សម្រាប់ការ Deployments',
    'របៀបបង្កើត និងគ្រប់គ្រង Jobs ដែលត្រូវ Trigger ដោយដៃ (`when: manual`)',
    'ស្គាល់ពីរបៀបដំណើរការ Jobs ស្របគ្នា (`parallel`)'
  ],
  content: `
# កំណត់រចនាសម្ព័ន្ធ CI/CD កាន់តែស៊ីជម្រៅ 🛠️ advanced

---

ការកំណត់រចនាសម្ព័ន្ធ GitLab CI/CD ឱ្យកាន់តែស៊ីជម្រៅអនុញ្ញាតឱ្យអ្នកបង្កើត Pipelines ដែលមានភាពស្មុគស្មាញ អាចបត់បែនបាន និងមានប្រសិទ្ធភាពខ្ពស់ ដើម្បីបំពេញតាមតម្រូវការជាក់លាក់របស់ Project របស់អ្នក។ នេះពាក់ព័ន្ធនឹងការប្រើប្រាស់ Keywords និង Concepts កម្រិតខ្ពស់នៅក្នុង File \`.gitlab-ci.yml\` ។

---

## 1. Variables: ការប្រើប្រាស់ Variables នៅក្នុង CI/CD 📊

Variables គឺជា Key-Value Pairs ដែលអ្នកអាចប្រើនៅក្នុង Jobs របស់អ្នក។ ពួកវាជួយធ្វើឱ្យ Pipeline របស់អ្នកមានភាពបត់បែន និងអាចប្រើឡើងវិញបាន។

* **Predefined Variables (Variables ដែលបានកំណត់ជាមុន):**
    * GitLab ផ្តល់នូវ Variables ជាច្រើនដែលត្រូវបានកំណត់ដោយស្វ័យប្រវត្តិសម្រាប់រាល់ Pipeline Run ។
    * **ឧទាហរណ៍:** \`$CI_COMMIT_BRANCH\`, \`$CI_COMMIT_SHA\`, \`$CI_PROJECT_DIR\`, \`$CI_PIPELINE_ID\` ។
* **Custom Variables (Variables ផ្ទាល់ខ្លួន):**
    * អ្នកអាចកំណត់ Variables ផ្ទាល់ខ្លួនរបស់អ្នកនៅក្នុង \`.gitlab-ci.yml\` ឬនៅក្នុង Project/Group Settings ។
    * **ឧទាហរណ៍ (ក្នុង .gitlab-ci.yml):**
        \`\`\`yaml
        variables:
          APP_VERSION: 1.0.0
          DATABASE_URL: "postgres://user:password@host:port/db"
        \`\`\`
* **Protected Variables (Variables ការពារ):**
    * សម្រាប់ព័ត៌មាន Sensitive (ឧទាហរណ៍៖ API Keys, Passwords) ។
    * ត្រូវបានរក្សាទុកនៅក្នុង Project/Group Settings ហើយអាចចូលប្រើបានតែដោយ Protected Branches ឬ Tags ប៉ុណ្ណោះ។
    * មិនត្រូវបានបង្ហាញនៅក្នុង Job Logs ។
* **Masked Variables (Variables លាក់):**
    * សម្រាប់ព័ត៌មាន Sensitive ដែលត្រូវបានបង្ហាញនៅក្នុង Job Logs ប៉ុន្តែត្រូវបាន Mask (លាក់) ដោយ Asterisks (\`***\`) ។
    * ត្រូវតែមានប្រវែងយ៉ាងតិច ៨ តួអក្សរ។

---

## 2. Dependencies: ការគ្រប់គ្រង Dependencies រវាង Jobs (\`needs\`) 🔗

តាមលំនាំដើម Jobs ក្នុង Stage មួយចាប់ផ្តើមដំណើរការតែនៅពេលដែល Jobs ទាំងអស់ក្នុង Stage មុនបានបញ្ចប់ដោយជោគជ័យ។ \`needs\` Keyword អនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូរឥរិយាបថនេះ និងកំណត់ Dependencies ជាក់លាក់រវាង Jobs ដោយមិនគិតពី Stages ។

* **គោលបំណង:**
    * **Parallel Execution:** អនុញ្ញាតឱ្យ Jobs ដំណើរការស្របគ្នា ទោះបីជាពួកគេស្ថិតនៅក្នុង Stages ផ្សេងគ្នាក៏ដោយ ប្រសិនបើពួកគេមិនមាន Dependencies ផ្ទាល់។
    * **Optimized Pipeline:** កាត់បន្ថយពេលវេលាដំណើរការ Pipeline ដោយអនុញ្ញាតឱ្យ Jobs ចាប់ផ្តើមភ្លាមៗនៅពេលដែល Dependencies របស់ពួកគេរួចរាល់។
* **ឧទាហរណ៍:**
    \`\`\`yaml
    stages:
      - build
      - test
      - deploy

    build_frontend:
      stage: build
      script: echo "Building frontend..."
      artifacts:
        paths:
          - frontend/build/

    build_backend:
      stage: build
      script: echo "Building backend..."
      artifacts:
        paths:
          - backend/build/

    run_frontend_tests:
      stage: test
      script: echo "Running frontend tests..."
      needs: ["build_frontend"] # Job នេះត្រូវការ build_frontend ឱ្យបញ្ចប់
      # វានឹងដំណើរការភ្លាមៗបន្ទាប់ពី build_frontend បញ្ចប់ ទោះបីជា build_backend មិនទាន់ចប់ក៏ដោយ

    run_backend_tests:
      stage: test
      script: echo "Running backend tests..."
      needs: ["build_backend"] # Job នេះត្រូវការ build_backend ឱ្យបញ្ចប់

    deploy_app:
      stage: deploy
      script: echo "Deploying application..."
      needs: ["run_frontend_tests", "run_backend_tests"] # Job នេះត្រូវការ Jobs ទាំងពីរឱ្យបញ្ចប់
    \`\`\`

---

## 3. Caching និង Artifacts: ការប្រើប្រាស់ឱ្យកាន់តែមានប្រសិទ្ធភាព 📦

* **\`cache\`:**
    * ប្រើដើម្បីរក្សាទុក Dependencies ឬ Files ដែលបានបង្កើតរវាង Pipeline Runs ។
    * **Key:** កំណត់ Key សម្រាប់ Cache (ឧទាហរណ៍៖ ដោយ Branch name) ។
    * **Policy:** កំណត់ថាតើ Cache គួរតែត្រូវបាន Upload/Download នៅពេលណា (\`pull-push\`, \`pull\`, \`push\`).
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        cache:
          key: "$CI_COMMIT_REF_SLUG" # Cache សម្រាប់ Branch នីមួយៗ
          paths:
            - node_modules/
          policy: pull-push
        \`\`\`
* **\`artifacts\`:**
    * ប្រើដើម្បីរក្សាទុក Output ពី Jobs (ឧទាហរណ៍៖ Build binaries, Test reports, Screenshots) ។
    * **Expire_in:** កំណត់រយៈពេលដែល Artifacts គួរតែត្រូវបានរក្សាទុក។
    * **When:** កំណត់ថាតើ Artifacts គួរតែត្រូវបាន Upload នៅពេលណា (\`on_success\`, \`on_failure\`, \`always\`) ។
    * **Dependencies:** Jobs អាចទាញ Artifacts ពី Jobs មុនៗ។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        build_job:
          # ...
          artifacts:
            paths:
              - build/
            expire_in: 1 week
            when: on_success # Upload artifacts only if job succeeds

        deploy_job:
          # ...
          dependencies:
            - build_job # Job នេះនឹងទាញ artifacts ពី build_job
        \`\`\`

---

## 4. Conditional Execution: \`rules\`, \`only\`, \`except\` 🚦

Keywords ទាំងនេះអនុញ្ញាតឱ្យអ្នកកំណត់លក្ខខណ្ឌថាតើ Job មួយគួរតែដំណើរការនៅពេលណា។

* **\`only\` / \`except\`:** (Legacy, ប្រើ \`rules\` ជំនួសវិញប្រសិនបើអាច)
    * ប្រើដើម្បីបញ្ជាក់ Branches, Tags, ឬ Pipeline Sources ដែល Job គួរតែដំណើរការ (only) ឬមិនគួរដំណើរការ (except) ។
* **\`rules\`:** (Recommended)
    * ផ្តល់នូវការគ្រប់គ្រងលក្ខខណ្ឌកាន់តែមានអនុភាព និងអាចបត់បែនបាន។
    * ប្រើ \`if\`, \`changes\`, \`exists\`, \`variables\` ។
    * **\`when\`:** កំណត់ថាតើ Job គួរតែត្រូវបាន Trigger នៅពេលណា (\`on_success\`, \`on_failure\`, \`always\`, \`manual\`, \`delayed\`).
    * **\`allow_failure\`:** អនុញ្ញាតឱ្យ Job បរាជ័យដោយមិនធ្វើឱ្យ Pipeline ទាំងមូលបរាជ័យ។
* **ឧទាហរណ៍ \`rules\`:**
    \`\`\`yaml
    build_and_test:
      stage: build_test
      script:
        - echo "Build and test..."
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"' # ដំណើរការលើ main branch
        - if: '$CI_COMMIT_BRANCH =~ /feature\/.*/' # ដំណើរការលើ feature branches
          when: on_success # ដំណើរការនៅពេលដែលលក្ខខណ្ឌត្រូវ

    deploy_to_production:
      stage: deploy
      script:
        - echo "Deploying to production..."
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"'
          when: manual # ត្រូវ Trigger ដោយដៃ
          allow_failure: false # មិនអនុញ្ញាតឱ្យបរាជ័យ
    \`\`\`

---

## 5. Services និង Environments 🌐

* **\`services\`:**
    * អនុញ្ញាតឱ្យអ្នកកំណត់ Docker Images បន្ថែមដែលនឹងដំណើរការជា Services សម្រាប់ Job របស់អ្នក។
    * មានប្រយោជន៍សម្រាប់ការ Test ដែលត្រូវការ Database (PostgreSQL, MySQL) ឬ Cache (Redis) ។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        test_database:
          stage: test
          image: python:3.9-slim
          services:
            - postgres:latest # ដំណើរការ PostgreSQL container
          variables:
            POSTGRES_DB: test_db
            POSTGRES_USER: test_user
            POSTGRES_PASSWORD: password
          script:
            - pip install psycopg2-binary
            - python run_db_tests.py
        \`\`\`
* **\`environment\`:**
    * កំណត់ Environment សម្រាប់ Deployment របស់ Job មួយ។
    * ជួយ GitLab តាមដាន Deployments និងផ្តល់ Links ទៅ Environment ។
    * **\`name\`:** ឈ្មោះ Environment (ឧទាហរណ៍៖ \`staging\`, \`production\`) ។
    * **\`url\`:** URL ទៅកាន់ Environment ដែលបាន Deploy ។
    * **\`on_stop\`:** បញ្ជាក់ Job ដែលត្រូវដំណើរការនៅពេល Environment ត្រូវបានបញ្ឈប់។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        deploy_staging:
          stage: deploy
          script: echo "Deploying to staging..."
          environment:
            name: staging
            url: https://staging.example.com/$CI_PROJECT_PATH/$CI_COMMIT_REF_SLUG
        \`\`\`

---

## 6. Parallel Jobs ⚡

* **\`parallel\`:**
    * អនុញ្ញាតឱ្យអ្នកដំណើរការ Job ដូចគ្នាច្រើនដងស្របគ្នា។
    * មានប្រយោជន៍សម្រាប់ការបែងចែក Test Suites ឬការដំណើរការ Build សម្រាប់ Architectures ផ្សេងៗគ្នា។
    * **ឧទាហរណ៍:**
        \`\`\`yaml
        run_tests_parallel:
          stage: test
          script:
            - echo "Running test shard $CI_NODE_INDEX of $CI_NODE_TOTAL"
            - npm test -- --shard=$CI_NODE_INDEX
          parallel: 3 # ដំណើរការ Job នេះ 3 ដងស្របគ្នា
        \`\`\`

---
> **គន្លឹះ:** ការយល់ដឹងពី Keywords កម្រិតខ្ពស់ទាំងនេះនឹងអនុញ្ញាតឱ្យអ្នកបង្កើត CI/CD Pipelines ដែលមានលក្ខណៈស្មុគស្មាញ និងមានប្រសិទ្ធភាពខ្ពស់។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការប្រើប្រាស់ Variables, needs, និង cache

នេះជារបៀបដែល Variables, \`needs\`, និង \`cache\` អាចត្រូវបានប្រើដើម្បីគ្រប់គ្រងលំហូរ Pipeline:

\`\`\`yaml
stages:
  - setup
  - build
  - test

variables:
  PYTHON_VERSION: 3.10

install_dependencies:
  stage: setup
  image: python:$PYTHON_VERSION-slim
  script:
    - pip install -r requirements.txt
  cache:
    key: "$CI_COMMIT_REF_SLUG"
    paths:
      - venv/
    policy: pull-push
  artifacts:
    paths:
      - venv/

build_app:
  stage: build
  image: python:$PYTHON_VERSION-slim
  script:
    - echo "Building application with Python $PYTHON_VERSION..."
    - mkdir dist
    - echo "Build output" > dist/app.tar
  needs: ["install_dependencies"]
  artifacts:
    paths:
      - dist/
    expire_in: 1 week

run_unit_tests:
  stage: test
  image: python:$PYTHON_VERSION-slim
  script:
    - echo "Running unit tests..."
    - pytest tests/unit/
  needs: ["install_dependencies"]
  cache:
    key: "$CI_COMMIT_REF_SLUG"
    paths:
      - venv/
    policy: pull

run_integration_tests:
  stage: test
  image: python:$PYTHON_VERSION-slim
  script:
    - echo "Running integration tests..."
    - pytest tests/integration/
  needs: ["install_dependencies", "build_app"]
  cache:
    key: "$CI_COMMIT_REF_SLUG"
    paths:
      - venv/
    policy: pull
\`\`\`

# ឧទាហរណ៍ ២: ការកំណត់ Environment, Manual Job, និង Services

ឧទាហរណ៍នៃការកំណត់ Environment, Manual Job, និង Services:

\`\`\`yaml
stages:
  - test
  - deploy

test_with_db:
  stage: test
  image: python:3.10-slim
  services:
    - mysql:latest
  variables:
    MYSQL_DATABASE: test_db
    MYSQL_ROOT_PASSWORD: rootpassword
  script:
    - pip install mysql-connector-python
    - python test_with_mysql.py
  rules:
    - if: '$CI_COMMIT_BRANCH =~ /feature\/.*/'

deploy_to_production:
  stage: deploy
  image: alpine/git
  script:
    - echo "Deploying to production..."
  environment:
    name: production
    url: https://prod.example.com/$CI_PROJECT_PATH
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: manual
      allow_failure: false
  needs: ["test_with_db"]
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `Variables` ក្នុង GitLab CI/CD គឺជាអ្វី?',
      options: [
        'ជា Commands សម្រាប់ដំណើរការ Jobs',
        'ជា Key-Value Pairs ដែលអ្នកអាចប្រើនៅក្នុង Jobs របស់អ្នក',
        'ជាប្រភេទនៃ Runner',
        'ជា File Configuration'
      ],
      correct: 1,
      explanation: 'Variables គឺជា Key-Value Pairs ដែលអ្នកអាចប្រើនៅក្នុង Jobs របស់អ្នក ដើម្បីធ្វើឱ្យ Pipeline របស់អ្នកមានភាពបត់បែន។'
    },
    {
      question: 'តើ `Predefined Variables` ត្រូវបានកំណត់ដោយអ្នកណា?',
      options: [
        'ដោយអ្នកប្រើប្រាស់',
        'ដោយ GitLab ដោយស្វ័យប្រវត្តិសម្រាប់រាល់ Pipeline Run',
        'ដោយ Project Manager',
        'ដោយ Runner'
      ],
      correct: 1,
      explanation: 'Predefined Variables ត្រូវបានកំណត់ដោយ GitLab ដោយស្វ័យប្រវត្តិសម្រាប់រាល់ Pipeline Run (ឧទាហរណ៍៖ `$CI_COMMIT_BRANCH`) ។'
    },
    {
      question: 'តើ `Protected Variables` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'សម្រាប់រក្សាទុក Files ធំៗ',
        'សម្រាប់ព័ត៌មាន Sensitive (ឧទាហរណ៍៖ API Keys, Passwords)',
        'សម្រាប់កំណត់ Environment',
        'សម្រាប់កំណត់ Tags'
      ],
      correct: 1,
      explanation: 'Protected Variables ត្រូវបានប្រើសម្រាប់ព័ត៌មាន Sensitive ហើយអាចចូលប្រើបានតែដោយ Protected Branches ឬ Tags ប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `Masked Variables` ខុសពី Protected Variables ត្រង់ណា?',
      options: [
        'Masked Variables ត្រូវបានបង្ហាញនៅក្នុង Job Logs ប៉ុន្តែត្រូវបាន Mask',
        'Masked Variables មិនត្រូវបានរក្សាទុកក្នុង Project Settings ទេ',
        'Masked Variables មិនអាចប្រើបានក្នុង Jobs ទេ',
        'Masked Variables មិនមានប្រវែងអប្បបរមាទេ'
      ],
      correct: 0,
      explanation: 'Masked Variables សម្រាប់ព័ត៌មាន Sensitive ត្រូវបានបង្ហាញនៅក្នុង Job Logs ប៉ុន្តែត្រូវបាន Mask (លាក់) ដោយ Asterisks (`***`) ។'
    },
    {
      question: 'តើ `needs` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់លំដាប់លំដោយនៃ Stages',
        'ដើម្បីគ្រប់គ្រង Dependencies ជាក់លាក់រវាង Jobs ដោយមិនគិតពី Stages',
        'ដើម្បីកំណត់ Docker Image',
        'ដើម្បីកំណត់ Variables'
      ],
      correct: 1,
      explanation: '`needs` Keyword អនុញ្ញាតឱ្យអ្នកកំណត់ Dependencies ជាក់លាក់រវាង Jobs ដោយមិនគិតពី Stages ដើម្បីអនុញ្ញាតឱ្យ Jobs ដំណើរការស្របគ្នា។'
    },
    {
      question: 'តើ `cache` Keyword ត្រូវបានប្រើដើម្បីបង្កើនល្បឿន Pipeline ដោយរបៀបណា?',
      options: [
        'ដោយការលុប Files ទាំងអស់',
        'ដោយការរក្សាទុក Dependencies ឬ Files ដែលបានបង្កើតរវាង Pipeline Runs',
        'ដោយការដំណើរការ Jobs ទាំងអស់ស្របគ្នា',
        'ដោយការកាត់បន្ថយចំនួន Stages'
      ],
      correct: 1,
      explanation: '`cache` Keyword ត្រូវបានប្រើដើម្បីរក្សាទុក Dependencies ឬ Files ដែលបានបង្កើតរវាង Pipeline Runs ដើម្បីបង្កើនល្បឿន។'
    },
    {
      question: 'តើ `artifacts` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីរក្សាទុក Code Source',
        'ដើម្បីរក្សាទុក Output ពី Jobs (ឧទាហរណ៍៖ Build binaries, Test reports)',
        'ដើម្បីកំណត់ Environment',
        'ដើម្បីកំណត់ Runner'
      ],
      correct: 1,
      explanation: '`artifacts` Keyword ត្រូវបានប្រើដើម្បីរក្សាទុក Output ពី Jobs (ឧទាហរណ៍៖ Build binaries, Test reports, Screenshots) ។'
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
      explanation: '`rules` Keyword ផ្តល់នូវការគ្រប់គ្រងលក្ខខណ្ឌកាន់តែលម្អិត និងអាចបត់បែនបានសម្រាប់ការដំណើរការ Jobs ។'
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
      explanation: '`when: manual` កំណត់ថា Job នឹងដំណើរការតែនៅពេល Trigger ដោយដៃប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `allow_failure: true` នៅក្នុង Job ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យ Job តែងតែ Pass',
        'អនុញ្ញាតឱ្យ Job បរាជ័យដោយមិនធ្វើឱ្យ Pipeline ទាំងមូលបរាជ័យ',
        'បញ្ឈប់ Pipeline ប្រសិនបើ Job បរាជ័យ',
        'ធ្វើឱ្យ Job ដំណើរការយឺត'
      ],
      correct: 1,
      explanation: '`allow_failure: true` អនុញ្ញាតឱ្យ Job បរាជ័យដោយមិនធ្វើឱ្យ Pipeline ទាំងមូលបរាជ័យ។'
    },
    {
      question: 'តើ `services` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់សេវាកម្ម GitLab',
        'ដើម្បីកំណត់ Docker Images បន្ថែមដែលនឹងដំណើរការជា Services សម្រាប់ Job របស់អ្នក (ឧទាហរណ៍៖ Databases)',
        'ដើម្បីកំណត់ User Permissions',
        'ដើម្បី Deploy Services'
      ],
      correct: 1,
      explanation: '`services` Keyword អនុញ្ញាតឱ្យអ្នកកំណត់ Docker Images បន្ថែមដែលនឹងដំណើរការជា Services សម្រាប់ Job របស់អ្នក (ឧទាហរណ៍៖ PostgreSQL, MySQL) ។'
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
      explanation: '`environment` Keyword ត្រូវបានប្រើដើម្បីកំណត់ Environment សម្រាប់ Deployment របស់ Job មួយ និង URL របស់វា។'
    },
    {
      question: 'តើ `parallel` Keyword ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីដំណើរការ Job តែមួយដងប៉ុណ្ណោះ',
        'ដើម្បីដំណើរការ Job ដូចគ្នាច្រើនដងស្របគ្នា',
        'ដើម្បីដំណើរការ Jobs តាមលំដាប់លំដោយ',
        'ដើម្បីបញ្ឈប់ Jobs'
      ],
      correct: 1,
      explanation: '`parallel` Keyword អនុញ្ញាតឱ្យអ្នកដំណើរការ Job ដូចគ្នាច្រើនដងស្របគ្នា (មានប្រយោជន៍សម្រាប់ការបែងចែក Test Suites) ។'
    },
    {
      question: 'តើ `cache key` អាចត្រូវបានកំណត់ដោយ `Branch name` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ `cache key` អាចត្រូវបានកំណត់ដោយ `Branch name` (ឧទាហរណ៍៖ `$CI_COMMIT_REF_SLUG`) ដើម្បីរក្សាទុក Cache សម្រាប់ Branch នីមួយៗ។'
    },
    {
      question: 'តើ `artifacts expire_in` កំណត់អ្វី?',
      options: [
        'រយៈពេលដែល Job នឹងដំណើរការ',
        'រយៈពេលដែល Pipeline នឹងដំណើរការ',
        'រយៈពេលដែល Artifacts គួរតែត្រូវបានរក្សាទុក',
        'រយៈពេលដែល Cache នឹងត្រូវបានរក្សាទុក'
      ],
      correct: 2,
      explanation: '`artifacts expire_in` កំណត់រយៈពេលដែល Artifacts គួរតែត្រូវបានរក្សាទុក។'
    },
    {
      question: 'តើ `only` / `except` Keywords ត្រូវបានចាត់ទុកថាជា `Legacy` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ `only` / `except` Keywords ត្រូវបានចាត់ទុកថាជា Legacy ហើយ `rules` ត្រូវបានណែនាំឱ្យប្រើជំនួសវិញ។'
    },
    {
      question: 'តើ `rules if` អាចប្រើដើម្បីពិនិត្យមើល `Branch name` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ `rules if` អាចប្រើដើម្បីពិនិត្យមើល `Branch name` (ឧទាហរណ៍៖ `$CI_COMMIT_BRANCH == "main"`) ។'
    },
    {
      question: 'តើ `Jobs` អាចទាញ `Artifacts` ពី Jobs មុនៗបានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Jobs អាចទាញ Artifacts ពី Jobs មុនៗដោយប្រើ `dependencies` Keyword ។'
    },
    {
      question: 'តើ `on_stop` Keyword នៅក្នុង `environment` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីចាប់ផ្តើម Environment',
        'ដើម្បីបញ្ជាក់ Job ដែលត្រូវដំណើរការនៅពេល Environment ត្រូវបានបញ្ឈប់',
        'ដើម្បីកំណត់ URL របស់ Environment',
        'ដើម្បីកំណត់ឈ្មោះ Environment'
      ],
      correct: 1,
      explanation: '`on_stop` Keyword ត្រូវបានប្រើដើម្បីបញ្ជាក់ Job ដែលត្រូវដំណើរការនៅពេល Environment ត្រូវបានបញ្ឈប់ (ឧទាហរណ៍៖ Cleanup Resources) ។'
    },
    {
      question: 'តើ `CI_PROJECT_DIR` គឺជា `Predefined Variable` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ `CI_PROJECT_DIR` គឺជា Predefined Variable ដែលតំណាងឱ្យ Path ទៅកាន់ Project Directory ។'
    }
  ],
  lab: {
    task: `
ការអនុវត្តន៍ជាក់ស្តែង៖ ការកំណត់រចនាសម្ព័ន្ធ CI/CD កាន់តែស៊ីជម្រៅ (Conceptual):
* បង្កើត Project ថ្មីនៅលើ GitLab ដើម្បីអនុវត្តការកំណត់រចនាសម្ព័ន្ធ CI/CD។
* កែប្រែ File \`.gitlab-ci.yml\` ដើម្បីប្រើ Variables, \`needs\`, \`services\`, \`environments\`, \`rules\`, និង \`parallel\`។
* ស្រមៃមើលការពិនិត្យ Pipeline និង Environments នៅក្នុង GitLab UI។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម:

1. **រៀបចំ Project**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្កើត Project ថ្មីមួយឈ្មោះ **'ci-cd-advanced-config'** ជាមួយ **Visibility Level** ជា **Public** និង **Initialize repository with a README**។
   * បន្ថែម File \`.gitlab-ci.yml\` ដោយចុច **Repository > Files > New file** ហើយដាក់ឈ្មោះថា \`.gitlab-ci.yml\`។

2. **កែប្រែ .gitlab-ci.yml**:
   * នៅក្នុង File \`.gitlab-ci.yml\` បន្ថែម Code ខាងក្រោម:
     \`\`\`yaml
     stages:
       - build
       - test
       - deploy

     variables:
       APP_NAME: ci-cd-advanced-app
       MYSQL_VERSION: 8.0

     cache:
       key: "$CI_COMMIT_REF_SLUG"
       paths:
         - venv/

     build_app:
       stage: build
       image: python:3.10-slim
       script:
         - echo "Building $APP_NAME..."
         - pip install -r requirements.txt
         - mkdir dist
         - echo "Build output" > dist/app.tar
       artifacts:
         paths:
           - dist/
         expire_in: 1 day
       cache:
         key: "$CI_COMMIT_REF_SLUG"
         paths:
           - venv/
         policy: pull-push

     test_unit:
       stage: test
       image: python:3.10-slim
       script:
         - echo "Running unit tests for $APP_NAME..."
         - pytest tests/unit/
       needs: ["build_app"]
       cache:
         key: "$CI_COMMIT_REF_SLUG"
         paths:
           - venv/
         policy: pull

     test_integration:
       stage: test
       image: python:3.10-slim
       services:
         - mysql:$MYSQL_VERSION
       variables:
         MYSQL_DATABASE: test_db
         MYSQL_ROOT_PASSWORD: rootpassword
       script:
         - echo "Running integration tests with MySQL v$MYSQL_VERSION..."
         - pip install mysql-connector-python
         - pytest tests/integration/
       needs: ["build_app"]
       cache:
         key: "$CI_COMMIT_REF_SLUG"
         paths:
           - venv/
         policy: pull
       parallel: 2

     deploy_production:
       stage: deploy
       image: alpine/git
       script:
         - echo "Deploying $APP_NAME to production..."
       environment:
         name: production
         url: https://prod.example.com/$CI_PROJECT_PATH
       needs: ["test_unit", "test_integration"]
       rules:
         - if: '$CI_COMMIT_BRANCH == "main"'
           when: manual
           allow_failure: false
     \`\`\`
   * **Commit message**: \`Add advanced .gitlab-ci.yml with variables, needs, services, and environments\`
   * **Target branch**: \`main\`
   * ចុច **Commit changes**។

3. **ពិនិត្យ Pipeline និង Environments (Conceptual)**:
   * **ស្រមៃ**: ចូលទៅ **CI/CD > Pipelines** នៅក្នុង Sidebar ខាងឆ្វេង។
     * ឃើញ Pipeline ថ្មី Trigger ដោយ Commit។
     * **Jobs Execution**:
       * \`build_app\` ដំណើរការមុនគេ។
       * \`test_unit\` និង \`test_integration\` (ជាមួយ 2 Parallel Jobs) ដំណើរការស្របគ្នាបន្ទាប់ពី \`build_app\`។
       * \`deploy_production\` ដំណើរការតែនៅពេល Trigger ដោយដៃបន្ទាប់ពី Tests ទាំងពីរបញ្ចប់។
     * ចុចលើ Job នីមួយៗដើម្បីមើល Log Output (ឧទាហរណ៍៖ Variables \`$APP_NAME\`, \`$MYSQL_VERSION\`)។
   * **ស្រម៉ៃ**: ចូលទៅ **Operate > Environments**។
     * ឃើញ Environment \`production\` ដែលបានបង្កើតដោយ Job \`deploy_production\`។
     * ស្រមៃចុចលើ Link ដើម្បីទៅកាន់ URL \`https://prod.example.com/<project-path>\`។
`,
    solution: `
# ដំណោះស្រាយ៖ ការកំណត់រចនាសម្ព័ន្ធ CI/CD កាន់តែស៊ីជម្រៅ

បន្ទាប់ពីអនុវត្តជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១: រៀបចំ Project
* អ្នកបានបង្កើត Project **ci-cd-advanced-config** នៅលើ **GitLab.com** ជាមួយ **Visibility Level** ជា **Public** និង **README**។
* អ្នកបានបន្ថែម File \`.gitlab-ci.yml\` ទៅ Repository។

## ជំហានទី ២: កែប្រែ .gitlab-ci.yml
* **File \`.gitlab-ci.yml\`**:
  \`\`\`yaml
  stages:
    - build
    - test
    - deploy

  variables:
    APP_NAME: ci-cd-advanced-app
    MYSQL_VERSION: 8.0

  cache:
    key: "$CI_COMMIT_REF_SLUG"
    paths:
      - venv/

  build_app:
    stage: build
    image: python:3.10-slim
    script:
      - echo "Building $APP_NAME..."
      - pip install -r requirements.txt
      - mkdir dist
      - echo "Build output" > dist/app.tar
    artifacts:
      paths:
        - dist/
      expire_in: 1 day
    cache:
      key: "$CI_COMMIT_REF_SLUG"
      paths:
        - venv/
      policy: pull-push

  test_unit:
    stage: test
    image: python:3.10-slim
    script:
      - echo "Running unit tests for $APP_NAME..."
      - pytest tests/unit/
    needs: ["build_app"]
    cache:
      key: "$CI_COMMIT_REF_SLUG"
      paths:
        - venv/
      policy: pull

  test_integration:
    stage: test
    image: python:3.10-slim
    services:
      - mysql:$MYSQL_VERSION
    variables:
      MYSQL_DATABASE: test_db
      MYSQL_ROOT_PASSWORD: rootpassword
    script:
      - echo "Running integration tests with MySQL v$MYSQL_VERSION..."
      - pip install mysql-connector-python
      - pytest tests/integration/
    needs: ["build_app"]
    cache:
      key: "$CI_COMMIT_REF_SLUG"
      paths:
        - venv/
      policy: pull
    parallel: 2

  deploy_production:
    stage: deploy
    image: alpine/git
    script:
      - echo "Deploying $APP_NAME to production..."
    environment:
      name: production
      url: https://prod.example.com/$CI_PROJECT_PATH
    needs: ["test_unit", "test_integration"]
    rules:
      - if: '$CI_COMMIT_BRANCH == "main"'
        when: manual
        allow_failure: false
  \`\`\`

## ជំហានទី ៣: ពិនិត្យ Pipeline និង Environments (Conceptual)
* **Pipeline Visualization**:
  * អ្នកបានចូលទៅ **CI/CD > Pipelines** និងស្រមៃឃើញ Pipeline ថ្មី Trigger ដោយ Commit។
  * **Job Outputs**:
    * **build_app**:
      \`\`\`
      Building ci-cd-advanced-app...
      Successfully installed requirements.txt
      Created dist/app.tar
      Job succeeded
      \`\`\`
    * **test_unit**:
      \`\`\`
      Running unit tests for ci-cd-advanced-app...
      pytest tests/unit/
      Job succeeded
      \`\`\`
    * **test_integration (Parallel 1/2)**:
      \`\`\`
      Running integration tests with MySQL v8.0...
      Successfully installed mysql-connector-python
      pytest tests/integration/
      Job succeeded
      \`\`\`
    * **test_integration (Parallel 2/2)**:
      \`\`\`
      Running integration tests with MySQL v8.0...
      Successfully installed mysql-connector-python
      pytest tests/integration/
      Job succeeded
      \`\`\`
    * **deploy_production**:
      \`\`\`
      Deploying ci-cd-advanced-app to production...
      Job pending (manual trigger required)
      \`\`\`
  * **Workflow**:
    \`\`\`
    [Commit .gitlab-ci.yml] -> [Build Stage (build_app)] -> [Test Stage (test_unit, test_integration x2)] -> [Deploy Stage (deploy_production, manual)]
    \`\`\`

* **Environments**:
  * អ្នកបានចូលទៅ **Operate > Environments** និងស្រមៃឃើញ Environment \`production\` ដែលបង្ផើតដោយ \`deploy_production\`។
  * **URL**: \`https://prod.example.com/<project-path>\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project Name**: **ci-cd-advanced-config**
* **Pipeline**: 
  * Jobs: \`build_app\`, \`test_unit\`, \`test_integration\` (2 Parallel Jobs), \`deploy_production\` (Manual)
  * Dependencies: \`test_unit\` និង \`test_integration\` ពឹងផ្អែកលើ \`build_app\`; \`deploy_production\` ពឹងផ្អែកលើ Tests ទាំងពីរ។
* **Variables**: \`$APP_NAME\`, \`$MYSQL_VERSION\`
* **Cache**: \`venv/\` ត្រូវបាន Cached សម្រាប់ Branch នីមួយៗ។
* **Artifacts**: \`dist/\` ត្រូវបានរក្សាទុកសម្រាប់ 1 ថ្ងៃ។
* **Environment**: \`production\` ជាមួយ URL។

លំហាត់នេះបានជួយអ្នកឱ្យយល់ពីការប្រើប្រាស់ Variables, \`needs\`, \`services\`, \`environments\`, \`rules\`, និង \`parallel\` ដើម្បីបង្ផើត CI/CD Pipeline កម្រិតខ្ពស់។
`
  }
};

export default GitLabLesson4_4Content;