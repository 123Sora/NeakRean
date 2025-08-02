import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson7_1Content: LessonContent = {
  title: 'ការគ្រប់គ្រង Personal Project',
  objectives: [
    'បង្កើតនិងគ្រប់គ្រង Repository សម្រាប់ Personal Project',
    'ប្រើ Git Workflow សម្រាប់ការអភិវឌ្ឍផ្ទាល់ខ្លួន',
    'សរសេរ README.md ដែលមានគុណភាព',
    'ប្រើ .gitignore ដើម្បី Ignore Files មិនចាំបាច់',
    'បង្កើត Tags សម្រាប់ Releases',
    'ប្រើ Issues សម្រាប់ Task Management',
    'Commit និង Push ការផ្លាស់ប្តូរទៅ GitHub',
    'ស្គាល់ Best Practices សម្រាប់ Personal Project',
  ],
  content: `
# ការគ្រប់គ្រង Personal Project 📂

---

ការគ្រប់គ្រង Personal Project នៅលើ GitHub ជួយអ្នករៀបចំកូដ និងតាមដានការអភិវឌ្ឍប្រកបដោយប្រសិទ្ធភាព។

---

## 1. ការបង្កើត Repository 🛠️

* បង្កើត Repository ថ្មីនៅ GitHub។
* បន្ថែម \`.gitignore\` និង \`README.md\` នៅពេលបង្កើត។
* Clone Repository:
  \`\`\`bash
  git clone https://github.com/yourusername/my-project.git
  \`\`\`

---

## 2. Git Workflow សម្រាប់ Personal Project 🌳

* **Branching:** ប្រើ \`main\` សម្រាប់ Stable Code និង \`feature/*\` សម្រាប់ការងារថ្មី។
* **Commits:** សរសេរ Commit Messages ច្បាស់លាស់ (ឧ. \`feat: add login page\`)។
* **Push:** Push ការផ្លាស់ប្តូរទៅ GitHub ជាប្រចាំ។

---

## 3. សរសេរ README.md 📝

* បន្ថែម Project Description, Installation Instructions, Usage។
* ប្រើ Markdown Syntax:
  \`\`\`markdown
  # My Project
  A simple project.
  ## Installation
  \`\`\`bash
  npm install
  \`\`\`
  \`\`\`

---

## 4. ប្រើ .gitignore 🚫

* Ignore Files/Folders ដូចជា \`node_modules/\`, \`*.log\`, \`.env\`។
* ឧទាហរណ៍:
  \`\`\`
  node_modules/
  *.log
  .env
  \`\`\`

---

## 5. បង្កើត Tags 🏷️

* បង្កើត Annotated Tag សម្រាប់ Releases:
  \`\`\`bash
  git tag -a v1.0.0 -m "Initial release"
  git push origin v1.0.0
  \`\`\`

---

## 6. ប្រើ Issues 📋

* បង្កើត Issues សម្រាប់ Tasks ឬ Bugs។
* បន្ថែម Labels (ឧ. \`bug\`, \`enhancement\`)។

---

## 7. Best Practices 📝

* Commit ជាបំណែកតូចៗ និងជាក់លាក់។
* បម្រុងទុក Repository នៅ GitHub។
* បន្ថែម License (ឧ. MIT) នៅ Repository។
* ប្រើ Semantic Versioning សម្រាប់ Tags។

---

## 8. ឧទាហរណ៍នៃ Personal Project 📋

1. បង្កើត Repository:
   - នៅ GitHub, បង្កើត \`my-project\` ជាមួយ \`.gitignore\` និង \`README.md\`។
2. Clone និង Commit:
   \`\`\`bash
   git clone https://github.com/yourusername/my-project.git
   cd my-project
   echo "Hello" > index.js
   git add .
   git commit -m "feat: add initial code"
   git push origin main
   \`\`\`
3. បង្កើត Tag:
   \`\`\`bash
   git tag -a v1.0.0 -m "Initial release"
   git push origin v1.0.0
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Repository និង .gitignore

\`\`\`bash
echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "chore: add .gitignore"
# លទ្ធផល: .gitignore committed
\`\`\`

# ឧទាហរណ៍ ២: សរសេរ README.md

\`\`\`markdown
# My Project
A simple project.
## Installation
\`\`\`bash
npm install
\`\`\`
\`\`\`
# លទ្ធផល: README displayed on GitHub

# ឧទាហរណ៍ ៣: បង្កើត Tag

\`\`\`bash
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0
# លទ្ធផល: Tag v1.0.0 created and pushed
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើអ្វីជាគោលបំណងសំខាន់នៃ Personal Project Repository?',
      options: [
        'Host Website',
        'គ្រប់គ្រងកូដផ្ទាល់ខ្លួន',
        'Merge Branch',
        'Create Team',
      ],
      correct: 1,
      explanation: 'Personal Project Repository ប្រើសម្រាប់គ្រប់គ្រងកូដផ្ទាល់ខ្លួន។',
    },
    {
      question: 'តើ .gitignore គួរបន្ថែមនៅពេលណា?',
      options: [
        'បន្ទាប់ពី Commit ទាំងអស់',
        'នៅពេលបង្កើត Repository',
        'នៅពេល Merge',
        'នៅពេល Push',
      ],
      correct: 1,
      explanation: '`.gitignore` គួរបន្ថែមនៅពេលបង្កើត Repository។',
    },
    {
      question: 'តើ README.md គួរមានអ្វីខ្លះ?',
      options: [
        'Project Description, Installation Instructions',
        'Commits List',
        'Branches List',
        'Tags List',
      ],
      correct: 0,
      explanation: 'README.md គួរមាន Project Description, Installation Instructions។',
    },
    {
      question: 'តើ Branch ណាដែលប្រើសម្រាប់ Stable Code?',
      options: [
        'develop',
        'main',
        'feature/*',
        'fix/*',
      ],
      correct: 1,
      explanation: '`main` ប្រើសម្រាប់ Stable Code។',
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
      question: 'តើ Tags ប្រើសម្រាប់អ្វី?',
      options: [
        'Create Branch',
        'Mark Releases',
        'Merge Code',
        'Ignore Files',
      ],
      correct: 1,
      explanation: 'Tags ប្រើសម្រាប់ Mark Releases។',
    },
    {
      question: 'តើ Issues ជួយអ្វីនៅ Personal Project?',
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
      question: 'តើអ្នកគួរប្រើ Semantic Versioning សម្រាប់ Tags ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Semantic Versioning គួរប្រើសម្រាប់ Tags។',
    },
    {
      question: 'តើ License គួរបន្ថែមនៅ Repository ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ License គួរបន្ថែមនៅ Repository។',
    },
    {
      question: 'តើ `git clone` ធ្វើអ្វី?',
      options: [
        'Create Repository',
        'Download Repository',
        'Delete Repository',
        'Merge Branch',
      ],
      correct: 1,
      explanation: '`git clone` Download Repository។',
    },
    {
      question: 'តើ .gitignore អាច Ignore Folders បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ .gitignore អាច Ignore Folders។',
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
      question: 'តើ `git push origin v1.0.0` ធ្វើអ្វី?',
      options: [
        'Push Branch',
        'Push Tag',
        'Push Commit',
        'Push Stash',
      ],
      correct: 1,
      explanation: '`git push origin v1.0.0` Push Tag។',
    },
    {
      question: 'តើ Issues អាចបន្ថែម Labels បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Issues អាចបន្ថែម Labels។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ Personal Project គឺជាអ្វី?',
      options: [
        'មិនប្រើ .gitignore',
        'បម្រុងទុក Repository នៅ GitHub',
        'មិនប្រើ Tags',
        'មិនសរសេរ README',
      ],
      correct: 1,
      explanation: 'បម្រុងទុក Repository នៅ GitHub ជា Best Practice�।',
    },
    {
      question: 'តើ Markdown នៅ README.md ជួយអ្វី?',
      options: [
        'Format Documentation',
        'Create Branch',
        'Merge Code',
        'Ignore Files',
      ],
      correct: 0,
      explanation: 'Markdown នៅ README.md ជួយ Format Documentation។',
    },
  ],
  lab: {
    task: `
អនុវត្តការគ្រប់គ្រង Personal Project៖
* បង្កើត Repository និង .gitignore។
* សរសេរ README.md។
* បង្កើត Tag សម្រាប់ Release។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Repository **my-personal-project** នៅ GitHub ជាមួយ \`.gitignore\` និង \`README.md\`។
2. Clone Repository:
   \`\`\`bash
   git clone https://github.com/yourusername/my-personal-project.git
   cd my-personal-project
   \`\`\`
3. កែសម្រួល .gitignore:
   \`\`\`bash
   echo "node_modules/" > .gitignore
   echo "*.log" >> .gitignore
   git add .gitignore
   git commit -m "chore: update .gitignore"
   git push origin main
   \`\`\`
4. កែសម្រួល README.md:
   \`\`\`markdown
   # My Personal Project
   A simple project for learning Git.
   ## Installation
   \`\`\`bash
   npm install
   \`\`\`
   \`\`\`
   \`\`\`bash
   git add README.md
   git commit -m "docs: update README"
   git push origin main
   \`\`\`
5. បង្កើត File និង Tag:
   \`\`\`bash
   echo "Hello" > index.js
   git add index.js
   git commit -m "feat: add initial code"
   git tag -a v1.0.0 -m "Initial release"
   git push origin main
   git push origin v1.0.0
   \`\`\`
`,
    solution: `
# ដំណោះស្រាយ៖ ការគ្រប់គ្រង Personal Project

## ជំហានទី ១៖ បង្កើត Repository
- បង្កើត **my-personal-project** នៅ GitHub ជាមួយ \`.gitignore\` និង \`README.md\`។
- លទ្ធផល: Repository created

## ជំហានទី ២៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-personal-project.git
cd my-personal-project
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៣៖ កែសម្រួល .gitignore
\`\`\`bash
echo "node_modules/" > .gitignore
echo "*.log" >> .gitignore
git add .gitignore
git commit -m "chore: update .gitignore"
git push origin main
# លទ្ធផល: .gitignore updated and pushed
\`\`\`

## ជំហានទី ៤៖ កែសម្រួល README.md
\`\`\`markdown
# My Personal Project
A simple project for learning Git.
## Installation
\`\`\`bash
npm install
\`\`\`
\`\`\`
\`\`\`bash
git add README.md
git commit -m "docs: update README"
git push origin main
# លទ្ធផល: README updated and pushed
\`\`\`

## ជំហានទី ៥៖ បង្កើត File និង Tag
\`\`\`bash
echo "Hello" > index.js
git add index.js
git commit -m "feat: add initial code"
git tag -a v1.0.0 -m "Initial release"
git push origin main
git push origin v1.0.0
# លទ្ធផល: Code and tag pushed
\`\`\`

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការគ្រប់គ្រង Personal Project។
`,
  },
};

export default GitHubLesson7_1Content;