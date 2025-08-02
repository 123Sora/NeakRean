import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson7_2Content: LessonContent = {
  title: 'ការសហការលើ Group Project',
  objectives: [
    'បង្កើត Repository សម្រាប់ Group Project',
    'បន្ថែម Collaborators នៅ GitHub',
    'ប្រើ Branching Strategy សម្រាប់ Team',
    'បង្កើត Pull Requests សម្រាប់ Code Review',
    'គ្រប់គ្រង Conflicts នៅពេល Merge',
    'ប្រើ Issues និង Projects សម្រាប់ Task Management',
    'ប្រើ GitHub Actions សម្រាប់ CI/CD',
    'ស្គាល់ Best Practices សម្រាប់ Collaboration',
  ],
  content: `
# ការសហការលើ Group Project 🤝

---

ការសហការលើ Group Project នៅ GitHub តម្រូវឱ្យមានការរៀបចំ និងការប្រើឧបករណ៍ដើម្បីធានាប្រសិទ្ធភាព។

---

## 1. ការបង្កើត Repository 🛠️

* បង្កើត Repository ថ្មីនៅ GitHub។
* បន្ថែម \`.gitignore\`, \`README.md\`, License។
* បន្ថែម Collaborators នៅ Repository Settings។

---

## 2. Branching Strategy 🌳

* **Git Flow:**
  - \`main\`: Stable Code
  - \`develop\`: Integration Branch
  - \`feature/*\`: New Features
  - \`fix/*\`: Bug Fixes
* បង្កើត Branch សម្រាប់ភារកិច្ចនីមួយៗ។

---

## 3. Pull Requests 🔍

* បង្កើត Pull Request (PR) ពី Feature Branch ទៅ \`develop\` ឬ \`main\`។
* បន្ថែម Description និង Link Issues (ឧ. \`closes #1\`)។
* ស្នើ Code Review ពី Team Members។

---

## 4. គ្រប់គ្រង Conflicts ⚔️

* ពិនិត្យ Conflicts នៅពេល Merge PR។
* ប្រើ \`git mergetool\` ឬ Manual Resolve។
* Commit បន្ទាប់ពី Resolve Conflicts។

---

## 5. Issues និង Projects 📋

* បង្កើត Issues សម្រាប់ Tasks ឬ Bugs។
* ប្រើ Projects សម្រាប់ Task Tracking។
* បន្ថែម Labels និង Assignees។

---

## 6. GitHub Actions 🤖

* បង្ផើ GitHub Actions សម្រាប់ CI/CD (ឧ. Run Tests)។
* បង្កើត Workflow File (ឧ. \`.github/workflows/ci.yml\`)។

---

## 7. Best Practices 📝

* សរសេរ Commit Messages ច្បាស់លាស់។
* ប្រើ PRs សម្រាប់ Code Review។
* បន្ថែម Collaborators និង Permissions ត្រឹមត្រូវ។
* បម្រុងទុក Repository នៅ GitHub។

---

## 8. ឧទាហរណ៍នៃ Group Project 📋

1. បង្កើត Repository និងបន្ថែម Collaborator:
   - នៅ GitHub, បន្ថែម User នៅ Repository Settings > Collaborators។
2. បង្កើត Feature Branch:
   \`\`\`bash
   git switch -c feature/login
   echo "Login" > login.js
   git add .
   git commit -m "feat(login): add user authentication"
   git push origin feature/login
   \`\`\`
3. បង្ផើ Pull Request:
   - នៅ GitHub, បង្ផើ PR ពី \`feature/login\` ទៅ \`main\`។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បន្ថែម Collaborator

# នៅ GitHub:
# Repository Settings > Collaborators > Add User
# លទ្ធផល: Collaborator added

# ឧទាហរណ៍ ២: Feature Branch និង PR

\`\`\`bash
git switch -c feature/login
echo "Login" > login.js
git add .
git commit -m "feat(login): add user authentication"
git push origin feature/login
# នៅ GitHub: បង្ផើ PR ទៅ main
# លទ្ធផល: PR created
\`\`\`

# ឧទាហរណ៍ ៣: GitHub Actions

\`\`\`yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm test
\`\`\`
# លទ្ធផល: CI pipeline runs on push
`,
  ],
  quiz: [
    {
      question: 'តើ Collaborators បន្ថែមនៅឯណា?',
      options: [
        'Issues Tab',
        'Repository Settings',
        'Actions Tab',
        'Projects Tab',
      ],
      correct: 1,
      explanation: 'Collaborators បន្ថែមនៅ Repository Settings។',
    },
    {
      question: 'តើ Branch `develop` ប្រើសម្រាប់អ្វី?',
      options: [
        'Stable Code',
        'Integration',
        'Feature Development',
        'Bug Fixes',
      ],
      correct: 1,
      explanation: '`develop` ប្រើសម្រាប់ Integration�।',
    },
    {
      question: 'តើ Pull Request ជួយអ្វី?',
      options: [
        'Create Branch',
        'Code Review',
        'Delete Repository',
        'Host Website',
      ],
      correct: 1,
      explanation: 'Pull Request ជួយសម្រាប់ Code Review។',
    },
    {
      question: 'តើ GitHub Actions ប្រើសម្រាប់អ្វី?',
      options: [
        'CI/CD',
        'Create Branch',
        'Host Website',
        'Delete Repository',
      ],
      correct: 0,
      explanation: 'GitHub Actions ប្រើសម្រាប់ CI/CD។',
    },
    {
      question: 'តើ Issues ជួយអ្វីនៅ Group Project?',
      options: [
        'Host Website',
        'Task Management',
        'Create Branch',
        'Push Code',
      ],
      correct: 1,
      explanation: 'Issues ជួយសម្រាប់ Task Management។',
    },
    {
      question: 'តើអ្នកគួរប្រើ Branch ដោយរបៀបណា?',
      options: [
        'Commits ធំៗ',
        'Branch សម្រាប់ភារកិច្ចនីមួយៗ',
        'មិនប្រើ Branch',
        'Branch តែមួយ',
      ],
      correct: 1,
      explanation: 'Branch សម្រាប់ភារកិច្ចនីមួយៗជា Best Practice�।',
    },
    {
      question: 'តើ `git mergetool` ប្រើសម្រាប់អ្វី?',
      options: [
        'Create Branch',
        'Resolve Conflicts',
        'Push Code',
        'Delete Tag',
      ],
      correct: 1,
      explanation: '`git mergetool` ប្រើសម្រាប់ Resolve Conflicts។',
    },
    {
      question: 'តើ Labels នៅ Issues ជួយអ្វី?',
      options: [
        'Create Branch',
        'Categorize Tasks',
        'Push Code',
        'Delete Repository',
      ],
      correct: 1,
      explanation: 'Labels ជួយ Categorize Tasks។',
    },
    {
      question: 'តើ Commit Message គួរមានទម្រង់ណា?',
      options: [
        'Random Text',
        'feat: description',
        'Only Description',
        'Branch Name',
      ],
      correct: 1,
      explanation: 'Commit Message គួរមានទម្រង់ `feat: description`។',
    },
    {
      question: 'តើអ្នកគួរបន្ថែម License នៅ Repository ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ License គួរបន្ថែមនៅ Repository។',
    },
    {
      question: 'តើ Git Flow មាន Branch អ្វីសំខាន់?',
      options: [
        'main, develop, feature/*',
        'main, test, prod',
        'feature, bug, release',
        'local, remote, dev',
      ],
      correct: 0,
      explanation: 'Git Flow ប្រើ `main`, `develop`, `feature/*`។',
    },
    {
      question: 'តើ Projects នៅ GitHub ជួយអ្វី?',
      options: [
        'Host Website',
        'Task Tracking',
        'Create Branch',
        'Merge Code',
      ],
      correct: 1,
      explanation: 'Projects ជួយសម្រាប់ Task Tracking១',
    },
    {
      question: 'តើអ្នកគួរលុប Branch បន្ទាប់ពី Merge ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ លុប Branch បន្ទាប់ពី Merge។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ Collaboration គឺជាអ្វី?',
      options: [
        'មិនប្រើ PRs',
        'ប្រើ PRs សម្រាប់ Code Review',
        'មិនបន្ថែម Collaborators',
        'មិនប្រើ Issues',
      ],
      correct: 1,
      explanation: 'ប្រើ PRs សម្រាប់ Code Review ជា Best Practice១',
    },
    {
      question: 'តើ Workflow File សម្រាប់ GitHub Actions ដាក់នៅឯណា?',
      options: [
        '.github/workflows/',
        'src/',
        'root/',
        '.git/',
      ],
      correct: 0,
      explanation: 'Workflow File ដាក់នៅ `.github/workflows/`១',
    },
    {
      question: 'តើ Assignees នៅ Issues ជួយអ្វី?',
      options: [
        'Create Branch',
        'Assign Tasks to Team Members',
        'Push Code',
        'Delete Repository',
      ],
      correct: 1,
      explanation: 'Assignees ជួយ Assign Tasks to Team Members១',
    },
  ],
  lab: {
    task: `
អនុវត្តការសហការលើ Group Project៖
* បង្ផើ Repository និងបន្ថែម Collaborator។
* បង្ផើ Feature Branch និង Pull Request។
* បង្ផើ Issue និង GitHub Actions១

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្ផើ Repository **my-group-project** នៅ GitHub។
2. បន្ថែម Collaborator:
   - នៅ Repository Settings, បន្ថែម User។
3. Clone Repository:
   \`\`\`bash
   git clone https://github.com/yourusername/my-group-project.git
   cd my-group-project
   \`\`\`
4. បង្ផើ .gitignore:
   \`\`\`bash
   echo "node_modules/" > .gitignore
   git add .gitignore
   git commit -m "chore: add .gitignore"
   git push origin main
   \`\`\`
5. បង្ផើ Feature Branch:
   \`\`\`bash
   git switch -c feature/login
   echo "Login" > login.js
   git add login.js
   git commit -m "feat(login): add user authentication"
   git push origin feature/login
   \`\`\`
6. បង្ផើ Pull Request:
   - នៅ GitHub, បង្ផើ PR ពី \`feature/login\` ទៅ \`main\`។
   - Description: "Add login feature, closes #1"។
7. បង្ផើ Issue:
   - បង្ផើ Issue នៅ GitHub: "Implement login feature" ជាមួយ Label \`enhancement\`។
8. បង្ផើ GitHub Actions:
   \`\`\`bash
   mkdir -p .github/workflows
   echo -e "name: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm install\n      - run: npm test" > .github/workflows/ci.yml
   git add .github/workflows/ci.yml
   git commit -m "ci: add GitHub Actions workflow"
   git push origin main
   \`\`\`
`,
    solution: `
# ដំណោះស្រាយ៖ ការសហការលើ Group Project

## ជំហានទី ១៖ បង្ផើ Repository
- បង្ផើ **my-group-project** នៅ GitHub១
- លទ្ធផល: Repository created

## ជំហានទី ២៖ បន្ថែម Collaborator
- នៅ Repository Settings, បន្ថែម User១
- លទ្ធផល: Collaborator added

## ជំហានទី ៣៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-group-project.git
cd my-group-project
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៤៖ បង្ផើ .gitignore
\`\`\`bash
echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "chore: add .gitignore"
git push origin main
# លទ្ធផល: .gitignore committed and pushed
\`\`\`

## ជំហានទី ៥៖ បង្ផើ Feature Branch
\`\`\`bash
git switch -c feature/login
echo "Login" > login.js
git add login.js
git commit -m "feat(login): add user authentication"
git push origin feature/login
# លទ្ធផល: Feature branch created and pushed
\`\`\`

## ជំហានទី ៦៖ បង្ផើ Pull Request
- នៅ GitHub, បង្ផើ PR ពី \`feature/login\` ទៅ \`main\`។
- Description: "Add login feature, closes #1"១
- លទ្ធផល: PR created

## ជំហានទី ៧៖ បង្ផើ Issue
- បង្ផើ Issue: "Implement login feature" ជាមួយ Label \`enhancement\`១
- លទ្ធផល: Issue created

## ជំហានទី ៨៖ បង្ផើ GitHub Actions
\`\`\`bash
mkdir -p .github/workflows
echo -e "name: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm install\n      - run: npm test" > .github/workflows/ci.yml
git add .github/workflows/ci.yml
git commit -m "ci: add GitHub Actions workflow"
git push origin main
# លទ្ធផល: CI workflow added
\`\`\`

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការសហការលើ Group Project១
`,
  },
};

export default GitHubLesson7_2Content;