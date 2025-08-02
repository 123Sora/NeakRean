import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson2_2Content: LessonContent = {
  title: 'ការគ្រប់គ្រង Remote Repositories',
  objectives: [
    'យល់ពី Remote Repository និងការភ្ជាប់ជាមួយ Local Repository',
    'ប្រើ `git remote` ដើម្បីគ្រប់គ្រង Remote Repository',
    'ប្រើ `git push` ដើម្បីផ្ញើការផ្លាស់ប្តូរទៅ GitHub',
    'ប្រើ `git pull` ដើម្បីទាញការផ្លាស់ប្តូរពី GitHub',
    'ប្រើ `git fetch` ដើម្បីទាញ Metadata ពី Remote',
    'កំណត់ Remote Repository ដោយ `git remote add`',
    'គ្រប់គ្រង Branches នៅ Remote Repository',
    'ដោះស្រាយ Merge Conflicts ជាមូលដ្ឋាន',
    'ស្គាល់ `.gitignore` សម្រាប់ការគ្រប់គ្រងឯកសារ',
  ],
  content: `
# ការគ្រប់គ្រង Remote Repositories 🌍

---

មេរៀននេះផ្តោតលើការភ្ជាប់ Local Repository ជាមួយ Remote Repository នៅលើ GitHub និងការគ្រប់គ្រងការផ្លាស់ប្តូរ។

---

## 1. អ្វីជា Remote Repository? 📡

* **Remote Repository:** ជា Repository ដែលរក្សាទុកនៅលើ Server (ឧ. GitHub) ដែលអនុញ្ញាតឱ្យអ្នកចែករំលែកនិងសហការ។
* ភ្ជាប់ជាមួយ Local Repository ដោយប្រើ Commands ដូចជា \`git push\`, \`git pull\`, និង \`git fetch\`។

---

## 2. ការគ្រប់គ្រង Remote Repository 🛠️

* **git remote:**
  \`\`\`bash
  git remote -v
  \`\`\`
  បង្ហាញឈ្មោះនិង URL នៃ Remote Repositories។

* **git remote add:**
  \`\`\`bash
  git remote add origin https://github.com/username/repo.git
  \`\`\`
  បន្ថែម Remote Repository ថ្មី។

* **git push:**
  \`\`\`bash
  git push origin main
  \`\`\`
  ផ្ញើ Commits ពី Local Repository ទៅ Remote Repository។

* **git pull:**
  \`\`\`bash
  git pull origin main
  \`\`\`
  ទាញនិងបញ្ចូលការផ្លាស់ប្តូរពី Remote Repository ទៅ Local។

* **git fetch:**
  \`\`\`bash
  git fetch origin
  \`\`\`
  ទាញ Metadata ពី Remote Repository ដោយមិន Merge។

---

## 3. ការគ្រប់គ្រង Branches នៅ Remote 🌳

* បង្កើត Branch និង Push៖
  \`\`\`bash
  git checkout -b feature-branch
  git push origin feature-branch
  \`\`\`
* លុប Branch នៅ Remote៖
  \`\`\`bash
  git push origin --delete feature-branch
  \`\`\`

---

## 4. ការប្រើ .gitignore 📜

* **.gitignore:** ឯកសារដែលបញ្ជាក់ឯកសារឬថតណាដែល Git មិនគួរតាមដាន។
* ឧទាហរណ៍៖
  \`\`\`
  node_modules/
  *.log
  .env
  \`\`\`

---

## 5. ការដោះស្រាយ Merge Conflicts ⚠️

* Merge Conflict កើតឡើងនៅពេលមានការផ្លាស់ប្តូរផ្ទុយគ្នានៅក្នុង Branch ផ្សេងគ្នា។
* ដោះស្រាយ៖
  1. ពិនិត្យឯកសារដែលមាន Conflict។
  2. កែប្រែដោយដៃ ដើម្បីជ្រើសការផ្លាស់ប្តូរដែលត្រូវរក្សាទុក។
  3. Commit ការផ្លាស់ប្តូរ៖
     \`\`\`bash
     git add <file>
     git commit
     \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការភ្ជាប់ Remote Repository

1. បន្ថែម Remote Repository៖
   \`\`\`bash
   git remote add origin https://github.com/username/my-repo.git
   git remote -v
   # លទ្ធផល: origin https://github.com/username/my-repo.git (fetch/push)
   \`\`\`
2. Push ទៅ Remote៖
   \`\`\`bash
   git push origin main
   \`\`\`

# ឧទាហរណ៍ ២: ទាញការផ្លាស់ប្តូរពី Remote

\`\`\`bash
git pull origin main
# លទ្ធផល: Updated local repository with remote changes
\`\`\`

# ឧទាហរណ៍ ៣: បង្កើតនិងលុប Remote Branch

1. បង្កើត Branch និង Push៖
   \`\`\`bash
   git checkout -b new-feature
   git push origin new-feature
   \`\`\`
2. លុប Branch៖
   \`\`\`bash
   git push origin --delete new-feature
   \`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ Remote Repository ជាអ្វី?',
      options: [
        'Repository នៅលើកុំព្យូទ័រក្នុងស្រុក',
        'Repository នៅលើ Server ដូចជា GitHub',
        'ឯកសារនៅក្នុង Git',
        'Branch នៅក្នុង Repository',
      ],
      correct: 1,
      explanation: 'Remote Repository ជា Repository នៅលើ Server ដូចជា GitHub។',
    },
    {
      question: 'តើ Command `git remote -v` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Remote Repository',
        'បង្ហាញឈ្មោះនិង URL នៃ Remote Repositories',
        'Push Commits ទៅ Remote',
        'ទាញការផ្លាស់ប្តូរ',
      ],
      correct: 1,
      explanation: '`git remote -v` បង្ហាញឈ្មោះនិង URL នៃ Remote Repositories។',
    },
    {
      question: 'តើ `git push origin main` ធ្វើអ្វី?',
      options: [
        'ទាញការផ្លាស់ប្តូរពី Remote',
        'ផ្ញើ Commits ទៅ Remote Repository',
        'បង្កើត Branch ថ្មី',
        'លុប Remote Repository',
      ],
      correct: 1,
      explanation: '`git push origin main` ផ្ញើ Commits ទៅ Remote Repository។',
    },
    {
      question: 'តើ `git pull` ធ្វើអ្វី?',
      options: [
        'ទាញ Metadata ពី Remote',
        'ទាញនិងបញ្ចូលការផ្លាស់ប្តូរពី Remote',
        'បន្ថែម Remote Repository',
        'លុប Branch នៅ Remote',
      ],
      correct: 1,
      explanation: '`git pull` ទាញនិងបញ្ចូលការផ្លាស់ប្តូរពី Remote។',
    },
    {
      question: 'តើ `git fetch` ខុសគ្នាពី `git pull` ដូចម្តេច?',
      options: [
        'ទាញ Metadata ដោយមិន Merge',
        'ទាញនិង Merge ការផ្លាស់ប្តូរ',
        'បន្ថែម Remote Repository',
        'លុប Branch',
      ],
      correct: 0,
      explanation: '`git fetch` ទាញ Metadata ដោយមិន Merge ខុសពី `git pull`។',
    },
    {
      question: 'តើ Command `git remote add` ប្រើសម្រាប់អ្វី?',
      options: [
        'លុប Remote Repository',
        'បន្ថែម Remote Repository ថ្មី',
        'Push Commits',
        'ទាញការផ្លាស់ប្តូរ',
      ],
      correct: 1,
      explanation: '`git remote add` បន្ថែម Remote Repository ថ្មី។',
    },
    {
      question: 'តើ `.gitignore` ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក Commit History',
        'បញ្ជាក់ឯកសារដែល Git មិនគួរតាមដាន',
        'បង្កើត Branch ថ្មី',
        'កំណត់ Remote URL',
      ],
      correct: 1,
      explanation: '`.gitignore` បញ្ជាក់ឯកសារដែល Git មិនគួរតាមដាន។',
    },
    {
      question: 'តើ Merge Conflict កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេល Push ទៅ Remote',
        'នៅពេលមានការផ្លាស់ប្តូរផ្ទុយគ្នានៅ Branch ផ្សេងគ្នា',
        'នៅពេលបន្ថែម Remote',
        'នៅពេលលុប Branch',
      ],
      correct: 1,
      explanation: 'Merge Conflict កើតឡើងនៅពេលមានការផ្លាស់ប្តូរផ្ទុយគ្នា។',
    },
    {
      question: 'តើអ្នកអាចលុប Branch នៅ Remote ដោយរបៀបណា?',
      options: [
        'git delete origin branch-name',
        'git push origin --delete branch-name',
        'git remove branch-name',
        'git pull origin branch-name',
      ],
      correct: 1,
      explanation: '`git push origin --delete branch-name` លុប Branch នៅ Remote។',
    },
    {
      question: 'តើអ្នកត្រូវធ្វើអ្វីបន្ទាប់ពីដោះស្រាយ Merge Conflict?',
      options: [
        'Push ទៅ Remote',
        'បន្ថែមឯកសារនិង Commit',
        'លុប Branch',
        'ទាញ Metadata',
      ],
      correct: 1,
      explanation: 'បន្ទាប់ពីដោះស្រាយ Merge Conflict ត្រូវ `git add` និង `git commit`។',
    },
    {
      question: 'តើឧទាហរណ៍នៃឯកសារដែលគួរដាក់ក្នុង `.gitignore` គឺជាអ្វី?',
      options: [
        'index.html',
        'node_modules/',
        'README.md',
        'script.js',
      ],
      correct: 1,
      explanation: '`node_modules/` គួរដាក់ក្នុង `.gitignore` ព្រោះវាមិនចាំបាច់តាមដាន។',
    },
    {
      question: 'តើ `git push origin feature-branch` ធ្វើអ្វី?',
      options: [
        'ទាញ Branch ពី Remote',
        'ផ្ញើ Branch ទៅ Remote Repository',
        'បង្កើត Branch ថ្មី',
        'លុប Branch',
      ],
      correct: 1,
      explanation: '`git push origin feature-branch` ផ្ញើ Branch ទៅ Remote Repository។',
    },
    {
      question: 'តើអ្នកអាចប្រើ `git fetch` ដើម្បីអ្វី?',
      options: [
        'Merge ការផ្លាស់ប្តូរ',
        'ទាញ Metadata ពី Remote ដោយមិន Merge',
        'បន្ថែម Remote Repository',
        'លុប Commits',
      ],
      correct: 1,
      explanation: '`git fetch` ទាញ Metadata ពី Remote ដោយមិន Merge។',
    },
    {
      question: 'តើអ្នកអាចបន្ថែម Remote Repository ច្រើនបានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែមួយ Remote', 'តែនៅ GitHub'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចបន្ថែម Remote Repository ច្រើន។',
    },
    {
      question: 'តើអ្វីជាជំហានដំបូងក្នុងការដោះស្រាយ Merge Conflict?',
      options: [
        'Push Commits',
        'ពិនិត្យឯកសារដែលមាន Conflict',
        'លុប Branch',
        'បន្ថែម Remote',
      ],
      correct: 1,
      explanation: 'ជំហានដំបូងគឺពិនិត្យឯកសារដែលមាន Conflict។',
    },
  ],
  lab: {
    task: `
អនុវត្តការគ្រប់គ្រង Remote Repository៖
* ភ្ជាប់ Local Repository ជាមួយ GitHub។
* បង្កើត Branch និង Push។
* ប្រើ \`.gitignore\` និងដោះស្រាយ Merge Conflict។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Local Repository និងភ្ជាប់ជាមួយ GitHub៖
   \`\`\`bash
   mkdir my-remote-repo
   cd my-remote-repo
   git init
   git remote add origin https://github.com/yourusername/my-remote-repo.git
   \`\`\`
2. បង្កើត \`.gitignore\` ជាមួយខ្លឹមសារ៖
   \`\`\`
   *.log
   .env
   \`\`\`
3. បង្កើតឯកសារ \`app.js\` ជាមួយខ្លឹមសារ៖
   \`\`\`javascript
   console.log("Hello, GitHub!");
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git add .
   git commit -m "feat: add app.js and .gitignore"
   git push origin main
   \`\`\`
4. បង្កើត Branch ថ្មី \`feature\` និងបន្ថែម \`index.html\`៖
   \`\`\`html
   <h1>My App</h1>
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git checkout -b feature
   git add index.html
   git commit -m "feat: add index.html"
   git push origin feature
   \`\`\`
5. កែប្រែ \`app.js\` នៅ Branch \`main\` ដោយបន្ថែម៖
   \`\`\`javascript
   console.log("Updated in main");
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git checkout main
   git add app.js
   git commit -m "feat: update app.js in main"
   git push origin main
   \`\`\`
6. Merge Branch \`feature\` ទៅ \`main\` និងដោះស្រាយ Conflict បើមាន៖
   \`\`\`bash
   git merge feature
   # បើមាន Conflict កែប្រែ app.js ដោយរក្សា៖
   console.log("Hello, GitHub!");
   console.log("Updated in main");
   console.log("Merged feature branch");
   git add app.js
   git commit
   git push origin main
   \`\`\`
7. លុប Branch \`feature\`៖
   \`\`\`bash
   git push origin --delete feature
   \`\`\`
`,
    solution: `
# ដំណោះស្រាយ៖ ការគ្រប់គ្រង Remote Repository

## ជំហានទី ១៖ បង្កើតនិងភ្ជាប់ Repository
\`\`\`bash
mkdir my-remote-repo
cd my-remote-repo
git init
git remote add origin https://github.com/yourusername/my-remote-repo.git
# លទ្ធផល: Initialized empty Git repository
\`\`\`

## ជំហានទី ២៖ បង្កើត .gitignore
\`\`\`bash
echo "*.log\n.env" > .gitignore
\`\`\`

## ជំហានទី ៣៖ បន្ថែម app.js និង Push
\`\`\`bash
echo "console.log('Hello, GitHub!');" > app.js
git add .
git commit -m "feat: add app.js and .gitignore"
git push origin main
# លទ្ធផល: Changes pushed to GitHub
\`\`\`

## ជំហានទី ៤៖ បង្កើត Branch និង Push
\`\`\`bash
git checkout -b feature
echo "<h1>My App</h1>" > index.html
git add index.html
git commit -m "feat: add index.html"
git push origin feature
# លទ្ធផល: Feature branch pushed
\`\`\`

## ជំហានទី ៥៖ កែប្រែ app.js នៅ main
\`\`\`bash
git checkout main
echo "console.log('Updated in main');" >> app.js
git add app.js
git commit -m "feat: update app.js in main"
git push origin main
# លទ្ធផល: Main branch updated
\`\`\`

## ជំហានទី ៦៖ Merge និងដោះស្រាយ Conflict
\`\`\`bash
git merge feature
# បើមាន Conflict កែ app.js ទៅជា៖
# console.log("Hello, GitHub!");
# console.log("Updated in main");
# console.log("Merged feature branch");
git add app.js
git commit
git push origin main
# លទ្ធផល: Merged changes pushed
\`\`\`

## ជំហានទី ៧៖ លុប Branch
\`\`\`bash
git push origin --delete feature
# លទ្ធផល: Feature branch deleted
\`\`\`

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការគ្រប់គ្រង Remote Repository និងដោះស្រាយ Merge Conflict។
`,
  },
};

export default GitHubLesson2_2Content;