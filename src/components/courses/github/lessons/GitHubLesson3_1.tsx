import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson3_1Content: LessonContent = {
  title: 'Git Branches (មែកធាង)',
  objectives: [
    'យល់ពីអ្វីជា Branch និងសារៈសំខាន់របស់វា',
    'ប្រើ `git branch` ដើម្បីបង្កើត និងមើល Branch',
    'ប្រើ `git checkout` ដើម្បីប្តូរទៅ Branch ផ្សេង',
    'ប្រើ `git switch` ដើម្បីប្តូរ Branch (Command ថ្មី)',
    'បង្កើត Branch នៅ Remote Repository',
    'លុប Branch ទាំង Local និង Remote',
    'ស្គាល់ Branching Workflow (Feature Branch, Develop Branch)',
    'ប្រើ `git branch -v` ដើម្បីមើលព័ត៌មាន Branch',
  ],
  content: `
# Git Branches (មែកធាង) 🌳

---

Branching គឺជាមុខងារសំខាន់នៃ Git ដែលអនុញ្ញាតឱ្យអ្នកធ្វើការលើកំណែផ្សេងគ្នានៃគម្រោងដោយមិនប៉ះពាល់ដល់ Branch ដើម។

---

## 1. អ្វីជា Branch? 🤔

* **Branch:** ជាមែកធាងនៃ Repository ដែលអនុញ្ញាតឱ្យអ្នកធ្វើការផ្លាស់ប្តូរដោយឯករាជ្យ។
* **main** ឬ **master** ជា Branch លំនាំដើម។
* Branch ត្រូវបានប្រើសម្រាប់ Feature Development, Bug Fixes, ឬ Experimentation។

---

## 2. ការប្រើ Branch Commands 🛠️

* **git branch:**
  \`\`\`bash
  git branch
  git branch feature-branch
  \`\`\`
  បង្ហាញ Branch ទាំងអស់ ឬបង្កើត Branch ថ្មី។

* **git checkout:**
  \`\`\`bash
  git checkout feature-branch
  \`\`\`
  ប្តូរទៅ Branch ផ្សេង។

* **git switch:**
  \`\`\`bash
  git switch feature-branch
  git switch -c new-branch
  \`\`\`
  Command ថ្មីសម្រាប់ប្តូរ ឬបង្កើត Branch។

* **git branch -v:**
  \`\`\`bash
  git branch -v
  \`\`\`
  បង្ហាញព័ត៌មានលម្អិតអំពី Branch។

* **git branch -d:**
  \`\`\`bash
  git branch -d feature-branch
  \`\`\`
  លុប Branch ក្នុង Local។

* **git push origin branch-name:**
  \`\`\`bash
  git push origin feature-branch
  \`\`\`
  Push Branch ទៅ Remote Repository។

* **git push origin --delete:**
  \`\`\`bash
  git push origin --delete feature-branch
  \`\`\`
  លុប Branch នៅ Remote។

---

## 3. Branching Workflow 📈

* **Feature Branch Workflow:**
  - បង្កើត Branch សម្រាប់ Feature ថ្មី (ឧ. \`feature/login-page\`)។
  - ធ្វើការផ្លាស់ប្តូរ និង Commit។
  - Merge ទៅ Branch \`main\` នៅពេលបញ្ចប់។
* **Develop Branch:** ប្រើសម្រាប់ការអភិវឌ្ឍបន្ត មុនពេល Merge ទៅ \`main\`។

---

## 4. ឧទាហរណ៍នៃ Branching 📋

1. បង្កើត Branch ថ្មី៖
   \`\`\`bash
   git branch feature-login
   git checkout feature-login
   # ឬ
   git switch -c feature-login
   \`\`\`
2. បន្ថែមឯកសារ និង Commit៖
   \`\`\`bash
   echo "<h1>Login Page</h1>" > login.html
   git add login.html
   git commit -m "feat: add login page"
   \`\`\`
3. Push Branch ទៅ Remote៖
   \`\`\`bash
   git push origin feature-login
   \`\`\`
4. លុប Branch៖
   \`\`\`bash
   git branch -d feature-login
   git push origin --delete feature-login
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើតនិងប្តូរទៅ Branch

\`\`\`bash
git branch feature-login
git checkout feature-login
# ឬ
git switch -c feature-login
# លទ្ធផល: Switched to branch 'feature-login'
\`\`\`

# ឧទាហរណ៍ ២: Commit នៅ Branch និង Push

\`\`\`bash
echo "<h1>Login Page</h1>" > login.html
git add login.html
git commit -m "feat: add login page"
git push origin feature-login
# លទ្ធផល: Pushed to remote branch
\`\`\`

# ឧទាហរណ៍ ៣: លុប Branch

\`\`\`bash
git branch -d feature-login
git push origin --delete feature-login
# លទ្ធផល: Branch deleted locally and remotely
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ Branch នៅក្នុង Git ជាអ្វី?',
      options: [
        'ឯកសារមួយនៅក្នុង Repository',
        'មែកធាងនៃ Repository សម្រាប់ការផ្លាស់ប្តូរឯករាជ្យ',
        'កម្មវិធីសម្រាប់គ្រប់គ្រង Git',
        'ឯកសារ Configuration',
      ],
      correct: 1,
      explanation: 'Branch ជាមែកធាងនៃ Repository សម្រាប់ការផ្លាស់ប្តូរឯករាជ្យ។',
    },
    {
      question: 'តើ Command `git branch` ធ្វើអ្វី?',
      options: [
        'ប្តូរទៅ Branch ផ្សេង',
        'បង្ហាញឬបង្កើត Branch',
        'លុប Branch',
        'Push Branch ទៅ Remote',
      ],
      correct: 1,
      explanation: '`git branch` បង្ហាញឬបង្កើត Branch។',
    },
    {
      question: 'តើ `git checkout` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Branch ថ្មី',
        'ប្តូរទៅ Branch ផ្សេង',
        'លុប Branch',
        'Commit ការផ្លាស់ប្តូរ',
      ],
      correct: 1,
      explanation: '`git checkout` ប្តូរទៅ Branch ផ្សេង។',
    },
    {
      question: 'តើ `git switch -c` ធ្វើអ្វី?',
      options: [
        'បង្កើតនិងប្តូរទៅ Branch ថ្មី',
        'លុប Branch',
        'Push Branch ទៅ Remote',
        'បង្ហាញ Branch',
      ],
      correct: 0,
      explanation: '`git switch -c` បង្កើតនិងប្តូរទៅ Branch ថ្មី។',
    },
    {
      question: 'តើ Branch លំនាំដើមរបស់ Git ជាអ្វី?',
      options: ['feature', 'develop', 'main/master', 'release'],
      correct: 2,
      explanation: 'Branch លំនាំដើមជា `main` ឬ `master`។',
    },
    {
      question: 'តើ Command `git branch -d` ធ្វើអ្វី?',
      options: [
        'បង្កើត Branch',
        'លុប Branch ក្នុង Local',
        'Push Branch',
        'ប្តូរទៅ Branch',
      ],
      correct: 1,
      explanation: '`git branch -d` លុប Branch ក្នុង Local។',
    },
    {
      question: 'តើអ្នកអាច Push Branch ទៅ Remote ដោយរបៀបណា?',
      options: [
        'git push origin branch-name',
        'git branch push branch-name',
        'git checkout branch-name',
        'git pull origin branch-name',
      ],
      correct: 0,
      explanation: '`git push origin branch-name` Push Branch ទៅ Remote។',
    },
    {
      question: 'តើ `git branch -v` បង្ហាញអ្វី?',
      options: [
        'Commit History',
        'ព័ត៌មានលម្អិតអំពី Branch',
        'ភាពខុសគ្នានៃឯកសារ',
        'ស្ថានភាព Repository',
      ],
      correct: 1,
      explanation: '`git branch -v` បង្ហាញព័ត៌មានលម្អិតអំពី Branch។',
    },
    {
      question: 'តើ Feature Branch Workflow ប្រើសម្រាប់អ្វី?',
      options: [
        'ការសរសេរកូដថ្មី',
        'ការអភិវឌ្ឍ Feature ថ្មីឯករាជ្យ',
        'ការលុប Repository',
        'ការបង្កើត Remote Repository',
      ],
      correct: 1,
      explanation: 'Feature Branch Workflow ប្រើសម្រាប់អភិវឌ្ឍ Feature ថ្មី។',
    },
    {
      question: 'តើអ្នកអាចលុប Branch នៅ Remote ដោយរបៀបណា?',
      options: [
        'git branch -d branch-name',
        'git push origin --delete branch-name',
        'git checkout --delete branch-name',
        'git pull origin branch-name',
      ],
      correct: 1,
      explanation: '`git push origin --delete branch-name` លុប Branch នៅ Remote។',
    },
    {
      question: 'តើអ្នកគួរប្រើ Branch សម្រាប់អ្វី?',
      options: [
        'រក្សាទុក Commit History',
        'ធ្វើការផ្លាស់ប្តូរឯករាជ្យដោយមិនប៉ះ Branch ដើម',
        'បង្កើត Repository ថ្មី',
        'លុបឯកសារ',
      ],
      correct: 1,
      explanation: 'Branch ប្រើសម្រាប់ការផ្លាស់ប្តូរឯករាជ្យ។',
    },
    {
      question: 'តើ `git switch` ខុសពី `git checkout` ដូចម្តេច?',
      options: [
        'វាជា Command ថ្មីសម្រាប់ប្តូរ Branch',
        'វាលុប Branch',
        'វា Push Branch',
        'វាបង្កើត Repository',
      ],
      correct: 0,
      explanation: '`git switch` ជា Command ថ្មីសម្រាប់ប្តូរ Branch។',
    },
    {
      question: 'តើ Branch `develop` ត្រូវបានប្រើនៅពេលណា?',
      options: [
        'សម្រាប់ Release ផលិតផល',
        'សម្រាប់ការអភិវឌ្ឍបន្តមុន Merge ទៅ main',
        'សម្រាប់ការសរសេរកូដថ្មី',
        'សម្រាប់លុប Repository',
      ],
      correct: 1,
      explanation: '`develop` ប្រើសម្រាប់ការអភិវឌ្ឍបន្ត។',
    },
    {
      question: 'តើអ្នកអាចបង្កើត Branch ច្រើនក្នុង Repository តែមួយបានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែមួយ Branch', 'តែនៅ Remote'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចបង្កើត Branch ច្រើន។',
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Branching?',
      options: [
        'បង្កើត Repository ថ្មី',
        'អនុញ្ញាតឱ្យធ្វើការផ្លាស់ប្តូរដោយឯករាជ្យ',
        'លុប Commits',
        'បន្ថែម Remote Repository',
      ],
      correct: 1,
      explanation: 'Branching អនុញ្ញាតឱ្យធ្វើការផ្លាស់ប្តូរដោយឯករាជ្យ។',
    },
    {
      question: 'តើអ្នកអាចមើល Branch ទាំងអស់ដោយប្រើ Command អ្វី?',
      options: [
        'git log',
        'git branch',
        'git diff',
        'git status',
      ],
      correct: 1,
      explanation: '`git branch` បង្ហាញ Branch ទាំងអស់។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ Branching៖
* បង្កើត Branch ថ្មី។
* ធ្វើការផ្លាស់ប្តូរ និង Push ទៅ Remote។
* លុប Branch។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Repository ថ្មីឈ្មោះ **my-branching-repo** និង Clone៖
   \`\`\`bash
   git clone https://github.com/yourusername/my-branching-repo.git
   cd my-branching-repo
   \`\`\`
2. បង្កើត Branch ថ្មី \`feature-header\`៖
   \`\`\`bash
   git switch -c feature-header
   \`\`\`
3. បន្ថែម \`header.html\` ជាមួយខ្លឹមសារ៖
   \`\`\`html
   <header>My Website Header</header>
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git add header.html
   git commit -m "feat: add header.html"
   git push origin feature-header
   \`\`\`
4. ប្តូរទៅ Branch \`main\` និងបន្ថែម \`footer.html\`៖
   \`\`\`html
   <footer>My Website Footer</footer>
   \`\`\`
   Commit និង Push�：
   \`\`\`bash
   git switch main
   git add footer.html
   git commit -m "feat: add footer.html"
   git push origin main
   \`\`\`
5. លុប Branch \`feature-header\`៖
   \`\`\`bash
   git branch -d feature-header
   git push origin --delete feature-header
   \`\`\`
6. ពិនិត្យ Branch៖
   \`\`\`bash
   git branch -v
   \`\`\`
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ Branching

## ជំហានទី ១៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-branching-repo.git
cd my-branching-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ២៖ បង្កើត Branch
\`\`\`bash
git switch -c feature-header
# លទ្ធផល: Switched to new branch 'feature-header'
\`\`\`

## ជំហានទី ៣៖ បន្ថែម header.html និង Push
\`\`\`bash
echo "<header>My Website Header</header>" > header.html
git add header.html
git commit -m "feat: add header.html"
git push origin feature-header
# លទ្ធផល: Pushed to remote branch
\`\`\`

## ជំហានទី ៤៖ បន្ថែម footer.html នៅ main
\`\`\`bash
git switch main
echo "<footer>My Website Footer</footer>" > footer.html
git add footer.html
git commit -m "feat: add footer.html"
git push origin main
# លទ្ធផល: Pushed to main
\`\`\`

## ជំហានទី ៥៖ លុប Branch
\`\`\`bash
git branch -d feature-header
git push origin --delete feature-header
# លទ្ធផល: Branch deleted locally and remotely
\`\`\`

## ជំហានទី ៦៖ ពិនិត្យ Branch
\`\`\`bash
git branch -v
# លទ្ធផល: * main abc123 feat: add footer.html
\`\`\`

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការបង្កើត និងគ្រប់គ្រង Branch។
`,
  },
};

export default GitHubLesson3_1Content;