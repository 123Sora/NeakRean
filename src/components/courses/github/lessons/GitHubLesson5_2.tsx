import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson5_2Content: LessonContent = {
  title: 'GitHub Actions (CI/CD)',
  objectives: [
    'យល់ពីអ្វីជា GitHub Actions និងសារៈសំខាន់របស់វា',
    'បង្កើត Workflow សម្រាប់ CI/CD',
    'ប្រើ Actions ដើម្បី Run Tests និង Deploy',
    'កំណត់ Triggers (Push, Pull Request)',
    'ប្រើ Environment Variables និង Secrets',
    'ស្គាល់ Marketplace Actions',
    'គ្រប់គ្រង Workflow Permissions',
    'ស្គាល់ Best Practices សម្រាប់ GitHub Actions',
  ],
  content: `
# GitHub Actions (CI/CD) 🚀

---

GitHub Actions ជាឧបករណ៍សម្រាប់ស្វ័យប្រវត្តិកម្ម CI/CD (Continuous Integration/Continuous Deployment) នៅ GitHub។

---

## 1. GitHub Actions ជាអ្វី? 🤔

* **GitHub Actions:** ឧបករណ៍សម្រាប់បង្កើត Workflows ស្វ័យប្រវត្តិ។
* ប្រើសម្រាប់ Build, Test, Deploy, ឬ Automation Tasks។
* Workflow ត្រូវបានកំណត់នៅក្នុង YAML File នៅ \`.github/workflows/\`។

---

## 2. ការបង្កើត Workflow 🛠️

* **Workflow File:**
  - បង្កើត \`.github/workflows/ci.yml\`។
  - កំណត់ Name, Triggers, Jobs, Steps។
* ឧទាហរណ៍ Workflow:
  \`\`\`yaml
  name: CI
  on:
    push:
      branches: [ main ]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Run Tests
          run: echo "Running tests"
  \`\`\`

---

## 3. Triggers និង Jobs 🎯

* **Triggers:** ព្រឹត្តិការណ៍ដែលបង្កឱ្យ Workflow ដំណើរការ (ឧ. \`push\`, \`pull_request\`)។
* **Jobs:** ការងារដែលរត់នៅ Virtual Machine (ឧ. \`ubuntu-latest\`)។
* **Steps:** ជំហាននៅក្នុង Job (ឧ. Checkout Code, Run Tests)។

---

## 4. Environment Variables និង Secrets 🔐

* **Environment Variables:** កំណត់នៅ Workflow File។
  \`\`\`yaml
  env:
    NODE_VERSION: 16
  \`\`\`
* **Secrets:** ទិន្នន័យសម្ងាត់ (ឧ. API Key)។
  - បន្ថែមនៅ Repository Settings > Secrets and Variables > Actions។
  - ប្រើ: \${{ secrets.MY_SECRET }}។

---

## 5. Marketplace Actions 🛒

* **Marketplace Actions:** Pre-built Actions នៅ GitHub Marketplace។
* ឧទាហរណ៍: \`actions/checkout@v3\` សម្រាប់ Checkout Repository។

---

## 6. Best Practices 📝

* ប្រើ Workflow តូចៗ និងជាក់លាក់។
* ប្រើ Secrets សម្រាប់ទិន្នន័យសម្ងាត់។
* កំណត់ Permissions សម្រាប់ Workflow។
* ត្រួតពិនិត្យ Logs នៅ Actions Tab។

---

## 7. ឧទាហរណ៍នៃ GitHub Actions 📋

1. បង្កើត Workflow:
   - បង្កើត \`.github/workflows/ci.yml\`។
   - កំណត់ Trigger នៅ \`push\` និង Run Tests។
2. បន្ថែម Secret:
   - នៅ Settings > Secrets and Variables > Actions, បន្ថែម \`API_KEY\`។
3. ប្រើ Action ពី Marketplace:
   - បន្ថែម \`actions/setup-node@v3\` សម្រាប់ Node.js។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Workflow សម្រាប់ CI

\`\`\`yaml
name: CI
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: Install Dependencies
        run: npm install
      - name: Run Tests
        run: npm test
\`\`\`
# លទ្ធផល: Tests run on push to main

# ឧទាហរណ៍ ២: ប្រើ Secret

\`\`\`yaml
name: Deploy
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        run: echo "Deploying with \${{ secrets.API_KEY }}"
\`\`\`
# លទ្ធផល: Secret used in deployment

# ឧទាហរណ៍ ៣: Trigger នៅ Pull Request

\`\`\`yaml
name: PR Check
on:
  pull_request:
    branches: [ main ]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Linting
        run: npm run lint
\`\`\`
# លទ្ធផល: Linting runs on PR
`,
  ],
  quiz: [
    {
      question: 'តើ GitHub Actions ប្រើសម្រាប់អ្វី?',
      options: [
        'Host Website',
        'ស្វ័យប្រវត្តិកម្ម CI/CD',
        'បង្កើត Team',
        'បង្កើត Issue',
      ],
      correct: 1,
      explanation: 'GitHub Actions ប្រើសម្រាប់ស្វ័យប្រវត្តិកម្ម CI/CD។',
    },
    {
      question: 'តើ Workflow File ត្រូវរក្សាទុកនៅឯណា?',
      options: [
        '.github/workflows/',
        'src/workflows/',
        'root directory',
        '.git/workflows/',
      ],
      correct: 0,
      explanation: 'Workflow File រក្សាទុកនៅ `.github/workflows/`។',
    },
    {
      question: 'តើ Trigger ណាដែលបង្កឱ្យ Workflow ដំណើរការនៅពេល Push?',
      options: [
        'pull_request',
        'push',
        'issue',
        'fork',
      ],
      correct: 1,
      explanation: 'Trigger `push` បង្កឱ្យ Workflow ដំណើរការ។',
    },
    {
      question: 'តើ `runs-on` នៅ Workflow បញ្ជាក់អ្វី?',
      options: [
        'Branch Name',
        'Virtual Machine',
        'Repository Name',
        'Secret Name',
      ],
      correct: 1,
      explanation: '`runs-on` បញ្ជាក់ Virtual Machine។',
    },
    {
      question: 'តើអ្នកបន្ថែម Secret នៅឯណា?',
      options: [
        'Issues Tab',
        'Settings > Secrets and Variables > Actions',
        'Pull Request',
        'Projects Tab',
      ],
      correct: 1,
      explanation: 'Secret បន្ថែមនៅ Settings > Secrets and Variables > Actions។',
    },
    {
      question: 'តើ Marketplace Actions ជាអ្វី?',
      options: [
        'Branch ថ្មី',
        'Pre-built Actions នៅ GitHub',
        'Team Permissions',
        'Issue Templates',
      ],
      correct: 1,
      explanation: 'Marketplace Actions ជា Pre-built Actions។',
    },
    {
      question: 'តើ `actions/checkout@v3` ធ្វើអ្វី?',
      options: [
        'Run Tests',
        'Checkout Repository Code',
        'Deploy Website',
        'Create Issue',
      ],
      correct: 1,
      explanation: '`actions/checkout@v3` Checkout Repository Code។',
    },
    {
      question: 'តើអ្នកអាចប្រើ Environment Variables នៅ Workflow បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Environment Variables អាចប្រើបាន។',
    },
    {
      question: 'តើ Workflow Permissions គួរត្រូវកំណត់ដោយរបៀបណា?',
      options: [
        'ផ្តល់ Full Access',
        'កំណត់ Least Privilege',
        'មិនត្រូវការ Permissions',
        'ប្រើ Public Access',
      ],
      correct: 1,
      explanation: 'កំណត់ Least Privilege ជា Best Practice។',
    },
    {
      question: 'តើអ្នកអាច Run Tests ជាមួយ GitHub Actions បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitHub Actions អាច Run Tests។',
    },
    {
      question: 'តើ Jobs នៅ Workflow ដំណើរការនៅឯណា?',
      options: [
        'Local Machine',
        'Virtual Machine',
        'Browser',
        'GitHub Server',
      ],
      correct: 1,
      explanation: 'Jobs ដំណើរការនៅ Virtual Machine�।',
    },
    {
      question: 'តើ Steps នៅ Workflow ជាអ្វី?',
      options: [
        'Branch ថ្មី',
        'ជំហាននៅក្នុង Job',
        'Issue Templates',
        'Team Permissions',
      ],
      correct: 1,
      explanation: 'Steps ជាជំហាននៅក្នុង Job។',
    },
    {
      question: 'តើអ្នកអាចប្រើ Secret នៅ Workflow បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Secret អាចប្រើបាន។',
    },
    {
      question: 'តើ Trigger `pull_request` ធ្វើអ្វី?',
      options: [
        'Run Workflow នៅពេល Push',
        'Run Workflow នៅពេល Pull Request',
        'Create Branch',
        'Deploy Website',
      ],
      correct: 1,
      explanation: 'Trigger `pull_request` Run Workflow នៅពេល Pull Request។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ GitHub Actions គឺជាអ្វី?',
      options: [
        'ប្រើ Workflow ធំៗ',
        'ប្រើ Secrets សម្រាប់ទិន្នន័យសម្ងាត់',
        'មិនត្រួតពិនិត្យ Logs',
        'ផ្តល់ Full Permissions',
      ],
      correct: 1,
      explanation: 'ប្រើ Secrets សម្រាប់ទិន្នន័យសម្ងាត់ជា Best Practice។',
    },
    {
      question: 'តើអ្នកអាច Deploy គម្រោងជាមួយ GitHub Actions បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitHub Actions អាច Deploy គម្រោង។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ GitHub Actions៖
* បង្កើត Workflow សម្រាប់ CI។
* បន្ថែម Secret និងប្រើនៅ Workflow។
* ប្រើ Marketplace Action។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Repository **my-actions-repo** នៅ GitHub។
2. បង្កើត Workflow File \`.github/workflows/ci.yml\`:
   \`\`\`yaml
   name: CI
   on:
     push:
       branches: [ main ]
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: 16
         - name: Install Dependencies
           run: npm install
         - name: Run Tests
           run: npm test
   \`\`\`
3. បន្ថែម Secret:
   - នៅ Settings > Secrets and Variables > Actions, បន្ថែម \`API_KEY\`។
4. បន្ថែម Workflow File \`.github/workflows/deploy.yml\`:
   \`\`\`yaml
   name: Deploy
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - name: Deploy
           run: echo "Deploying with \${{ secrets.API_KEY }}"
   \`\`\`
5. Clone Repository:
   \`\`\`bash
   git clone https://github.com/yourusername/my-actions-repo.git
   cd my-actions-repo
   \`\`\`
6. បង្កើត \`package.json\` និង Test File:
   \`\`\`bash
   npm init -y
   npm install --save-dev jest
   echo "test('should pass', () => { expect(true).toBe(true); });" > test.js
   \`\`\`
7. Commit និង Push:
   \`\`\`bash
   git add .
   git commit -m "feat: add CI workflow and tests"
   git push origin main
   \`\`\`
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ GitHub Actions

## ជំហានទី ១៖ បង្កើត Repository
- បង្កើត **my-actions-repo** នៅ GitHub។
- លទ្ធផល: Repository created

## ជំហានទី ២៖ បង្កើត Workflow File (CI)
- បង្កើត \`.github/workflows/ci.yml\`:
  \`\`\`yaml
  name: CI
  on:
    push:
      branches: [ main ]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Setup Node.js
          uses: actions/setup-node@v3
          with:
            node-version: 16
        - name: Install Dependencies
          run: npm install
        - name: Run Tests
          run: npm test
  \`\`\`
- លទ្ធផល: CI Workflow created

## ជំហានទី ៣៖ បន្ថែម Secret
- នៅ Settings > Secrets and Variables > Actions, បន្ថែម \`API_KEY\`។
- លទ្ធផល: Secret added

## ជំហានទី ៤៖ បង្កើត Workflow File (Deploy)
- បង្កើត \`.github/workflows/deploy.yml\`:
  \`\`\`yaml
  name: Deploy
  on:
    push:
      branches: [ main ]
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Deploy
          run: echo "Deploying with \${{ secrets.API_KEY }}"
  \`\`\`
- លទ្ធផល: Deploy Workflow created

## ជំហានទី ៥៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-actions-repo.git
cd my-actions-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៦៖ បង្កើត Package និង Test
\`\`\`bash
npm init -y
npm install --save-dev jest
echo "test('should pass', () => { expect(true).toBe(true); });" > test.js
# លទ្ធផល: Test setup completed
\`\`\`

## ជំហានទី ៧៖ Commit និង Push
\`\`\`bash
git add .
git commit -m "feat: add CI workflow and tests"
git push origin main
# លទ្ធផល: Workflow triggered
\`\`\`

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការប្រើ GitHub Actions សម្រាប់ CI/CD។
`,
  },
};

export default GitHubLesson5_2Content;