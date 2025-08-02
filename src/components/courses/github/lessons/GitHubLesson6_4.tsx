import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson6_4Content: LessonContent = {
  title: 'Git Best Practices',
  objectives: [
    'យល់ពី Best Practices សម្រាប់ការប្រើ Git និង GitHub',
    'សរសេរ Commit Messages ឱ្យច្បាស់លាស់',
    'ប្រើ Branching Strategy ដ៏ល្អ',
    'គ្រប់គ្រង Conflicts ដោយប្រសិទ្ធភាព',
    'ប្រើ Pull Requests សម្រាប់ Code Review',
    'រក្សា Repository ឱ្យស្អាត',
    'ប្រើ .gitignore និង Tags ត្រឹមត្រូវ',
    'សហការជាមួយ Team ដោយប្រើ GitHub Features',
  ],
  content: `
# Git Best Practices 📝

---

Best Practices សម្រាប់ Git និង GitHub ជួយឱ្យការងារមានប្រសិទ្ធភាព និងងាយស្រួលសហការ។

---

## 1. Commit Messages ✍️

* សរសេរ Commit Messages ឱ្យច្បាស់លាស់ និងជាក់លាក់។
* ទម្រង់: \`<type>(<scope>): <description>\`
  - ឧ. \`feat(login): add user authentication\`
* Types: \`feat\`, \`fix\`, \`docs\`, \`style\`, \`refactor\`, \`test\`, \`chore\`

---

## 2. Branching Strategy 🌳

* **Git Flow:**
  - \`main\`: Stable Production Code
  - \`develop\`: Integration Branch
  - \`feature/*\`: New Features
  - \`fix/*\`: Bug Fixes
* បង្កើត Branch សម្រាប់ភារកិច្ចនីមួយៗ។
* លុប Branch បន្ទាប់ពី Merge។

---

## 3. Pull Requests 🔍

* ប្រើ Pull Requests (PRs) សម្រាប់ Code Review។
* បន្ថែម Description ច្បាស់លាស់នៅ PR។
* ភ្ជាប់ Issues ជាមួយ PR (ឧ. \`#1\`)។

---

## 4. គ្រប់គ្រង Conflicts ⚔️

* ត្រួតពិនិត្យ Conflicts នៅពេល Merge។
* ប្រើ \`git mergetool\` ឬ Manual Resolve។
* Commit បន្ទាប់ពី Resolve Conflicts។

---

## 5. រក្សា Repository ឱ្យស្អាត 🧹

* ប្រើ \`.gitignore\` ដើម្បី Ignore Files មិនចាំបាច់។
* Commit ជាប្រចាំ ប៉ុន្តែជាបំណែកតូចៗ។
* លុប Branches ដែលមិនប្រើ។

---

## 6. សហការជាមួយ Team 🤝

* ប្រើ Issues និង Projects សម្រាប់ Task Management។
* បន្ថែម Collaborators នៅ Repository Settings។
* ប្រើ GitHub Actions សម្រាប់ CI/CD។

---

## 7. Best Practices 📝

* Commit ជាបំណែកតូចៗ និងជាក់លាក់។
* ប្រើ Semantic Versioning សម្រាប់ Tags។
* បម្រុងទុក Repository ជាមួយ Remote។
* ប្រើ Code Review មុន Merge។

---

## 8. ឧទាហរណ៍នៃ Best Practices 📋

1. Commit Message:
   \`\`\`bash
   git commit -m "feat(login): add user authentication"
   \`\`\`
2. Branching:
   \`\`\`bash
   git switch -c feature/login
   git push origin feature/login
   \`\`\`
3. Pull Request:
   - បង្កើត PR នៅ GitHub និងបញ្ចូល \`#1\` នៅ Description។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Commit Message

\`\`\`bash
echo "Login" > login.js
git add login.js
git commit -m "feat(login): add user authentication"
# លទ្ធផល: Clear commit message
\`\`\`

# ឧទាហរណ៍ ២: Branching Strategy

\`\`\`bash
git switch -c feature/login
echo "Login" > login.js
git add login.js
git commit -m "feat: add login feature"
git push origin feature/login
# លទ្ធផល: Feature branch created
\`\`\`

# ឧទាហរណ៍ ៣: Pull Request

# នៅ GitHub:
# បង្កើត PR ពី feature/login ទៅ main
# Description: "Add login feature, closes #1"
# លទ្ធផល: PR created and linked to Issue
`,
  ],
  quiz: [
    {
      question: 'តើ Commit Message គួរមានទម្រង់ដូចម្តេច?',
      options: [
        'Random Text',
        '<type>(<scope>): <description>',
        'Only Description',
        'Branch Name',
      ],
      correct: 1,
      explanation: 'Commit Message គួរមានទម្រង់ `<type>(<scope>): <description>`។',
    },
    {
      question: 'តើ Branch `main` ប្រើសម្រាប់អ្វី?',
      options: [
        'Development',
        'Stable Production Code',
        'Feature Development',
        'Testing',
      ],
      correct: 1,
      explanation: '`main` ប្រើសម្រាប់ Stable Production Code។',
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
      question: 'តើអ្នកគួរ Commit ដោយរបៀបណា?',
      options: [
        'Commits ធំៗ',
        'Commits តូចៗ និងជាក់លាក់',
        'មិន Commit',
        'Commits ដោយមិនមាន Message',
      ],
      correct: 1,
      explanation: 'Commits តូចៗ និងជាក់លាក់ជា Best Practice។',
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
      question: 'តើអ្នកគួរលុប Branch បន្ទាប់ពី Merge ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ លុប Branch បន្ទាប់ពី Merge។',
    },
    {
      question: 'តើ .gitignore គួរត្រូវ Commit ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ .gitignore គួរត្រូវ Commit។',
    },
    {
      question: 'តើ Semantic Versioning ប្រើទម្រង់ណា?',
      options: [
        'v1.0.0',
        'main',
        'feature',
        'develop',
      ],
      correct: 0,
      explanation: 'Semantic Versioning ប្រើទម្រង់ `v1.0.0`។',
    },
    {
      question: 'តើអ្នកគួរប្រើ Code Review មុន Merge ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Code Review មុន Merge ជា Best Practice។',
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
      question: 'តើ Issues នៅ GitHub ជួយអ្វី?',
      options: [
        'Host Website',
        'Task Management',
        'Create Branch',
        'Merge Code',
      ],
      correct: 1,
      explanation: 'Issues ជួយសម្រាប់ Task Management។',
    },
    {
      question: 'តើអ្នកគួរបន្ថែម Collaborators នៅឯណា?',
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
      question: 'តើ GitHub Actions ជួយអ្វី?',
      options: [
        'CI/CD',
        'Create Branch',
        'Host Website',
        'Delete Repository',
      ],
      correct: 0,
      explanation: 'GitHub Actions ជួយសម្រាប់ CI/CD។',
    },
    {
      question: 'តើ Commit Type `feat` បញ្ជាក់អ្វី?',
      options: [
        'Bug Fix',
        'New Feature',
        'Documentation',
        'Style Change',
      ],
      correct: 1,
      explanation: '`feat` បញ្ជាក់ New Feature។',
    },
    {
      question: 'តើអ្នកគួរបម្រុងទុក Repository ដោយរបៀបណា?',
      options: [
        'Local Only',
        'Push to Remote',
        'Delete Repository',
        'Ignore Files',
      ],
      correct: 1,
      explanation: 'Push to Remote ជា Best Practice សម្រាប់ Backup។',
    },
    {
      question: 'តើ Branch `feature/*` ប្រើសម្រាប់អ្វី?',
      options: [
        'Production Code',
        'New Features',
        'Bug Fixes',
        'Testing',
      ],
      correct: 1,
      explanation: '`feature/*` ប្រើសម្រាប់ New Features។',
    },
  ],
  lab: {
    task: `
អនុវត្ត Git Best Practices៖
* បង្កើត Feature Branch និង Commit ជាមួយ Message ច្បាស់។
* បង្កើត Pull Request។
* បន្ថែម .gitignore។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Repository **my-best-practices-repo** នៅ GitHub។
2. Clone Repository:
   \`\`\`bash
   git clone https://github.com/yourusername/my-best-practices-repo.git
   cd my-best-practices-repo
   \`\`\`
3. បង្កើត .gitignore:
   \`\`\`bash
   echo "node_modules/" > .gitignore
   git add .gitignore
   git commit -m "chore: add .gitignore"
   git push origin main
   \`\`\`
4. បង្កើត Feature Branch:
   \`\`\`bash
   git switch -c feature/login
   echo "Login" > login.js
   git add login.js
   git commit -m "feat(login): add user authentication"
   git push origin feature/login
   \`\`\`
5. បង្កើត Pull Request:
   - នៅ GitHub, បង្កើត PR ពី \`feature/login\` ទៅ \`main\`។
   - បញ្ចូល Description: "Add login feature, closes #1"។
`,
    solution: `
# ដំណោះស្រាយ៖ Git Best Practices

## ជំហានទី ១៖ បង្កើត Repository
- បង្កើត **my-best-practices-repo** នៅ GitHub។
- លទ្ធផល: Repository created

## ជំហានទី ២៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-best-practices-repo.git
cd my-best-practices-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៣៖ បង្កើត .gitignore
\`\`\`bash
echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "chore: add .gitignore"
git push origin main
# លទ្ធផល: .gitignore committed and pushed
\`\`\`

## ជំហានទី ៤៖ បង្កើត Feature Branch
\`\`\`bash
git switch -c feature/login
echo "Login" > login.js
git add login.js
git commit -m "feat(login): add user authentication"
git push origin feature/login
# លទ្ធផល: Feature branch created and pushed
\`\`\`

## ជំហានទី ៥៖ បង្កើត Pull Request
- នៅ GitHub, បង្កើត PR ពី \`feature/login\` ទៅ \`main\`។
- Description: "Add login feature, closes #1"។
- លទ្ធផល: PR created and linked to Issue

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ Git Best Practices។
`,
  },
};

export default GitHubLesson6_4Content;