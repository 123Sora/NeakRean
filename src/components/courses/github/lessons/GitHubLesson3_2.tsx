import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson3_2Content: LessonContent = {
  title: 'Git Merging (ការបញ្ចូលគ្នា)',
  objectives: [
    'យល់ពីអ្វីជា Merging និងសារៈសំខាន់របស់វា',
    'ប្រើ `git merge` ដើម្បីបញ្ចូល Branch',
    'ស្គាល់ប្រភេទ Merge (Fast-Forward, Three-Way Merge)',
    'ដោះស្រាយ Merge Conflicts',
    'ប្រើ Pull Requests សម្រាប់ Merge នៅ GitHub',
    'ប្រើ `git merge --abort` ដើម្បីបោះបង់ Merge',
    'ស្គាល់ការបញ្ចូល Branch ទៅ main/develop',
    'ប្រើ `git log --graph` ដើម្បីមើល Merge History',
  ],
  content: `
# Git Merging (ការបញ្ចូលគ្នា) 🔄

---

Merging គឺជាដំណើរការនៃការបញ្ចូលការផ្លាស់ប្តូរពី Branch មួយទៅ Branch មួយទៀត។ វាជួយឱ្យអ្នករួមបញ្ចូល Feature ថ្មីឬ Bug Fixes។

---

## 1. អ្វីជា Merging? 🤔

* **Merging:** ការបញ្ចូលការផ្លាស់ប្តូរពី Branch មួយ (ឧ. \`feature\`) ទៅ Branch មួយទៀត (ឧ. \`main\`)។
* ប្រភេទ Merge៖
  - **Fast-Forward:** នៅពេល Branch គ្មាន Divergence។
  - **Three-Way Merge:** នៅពេល Branch មាន Commits ផ្សេងគ្នា។

---

## 2. ការប្រើ Merge Commands 🛠️

* **git merge:**
  \`\`\`bash
  git checkout main
  git merge feature-branch
  \`\`\`
  បញ្ចូលការផ្លាស់ប្តូរពី \`feature-branch\` ទៅ \`main\`។

* **git merge --abort:**
  \`\`\`bash
  git merge --abort
  \`\`\`
  បោះបង់ Merge បើមាន Conflict។

* **git log --graph:**
  \`\`\`bash
  git log --graph --oneline
  \`\`\`
  បង្ហាញ Merge History ជាទម្រង់ Graph។

---

## 3. Merge Conflicts ⚠️

* Conflict កើតឡើងនៅពេល Branch ពីរមានការផ្លាស់ប្តូរផ្ទុយគ្នានៅឯកសារដូចគ្នា។
* ដោះស្រាយ៖
  1. ពិនិត្យឯកសារដែលមាន Conflict (Git បន្ថែម Markers \`<<<<<<<\`, \`=======\`, \`>>>>>>>\`)។
  2. កែប្រែដោយដៃ និងជ្រើសការផ្លាស់ប្តូរដែលត្រូវរក្សាទុក។
  3. Commit៖
     \`\`\`bash
     git add <file>
     git commit
     \`\`\`

---

## 4. Pull Requests នៅ GitHub 🌐

* Pull Request (PR) គឺជាវិធីស្នើសុំ Merge នៅ GitHub។
* ជំហាន៖
  1. Push Branch ទៅ Remote៖
     \`\`\`bash
     git push origin feature-branch
     \`\`\`
  2. បង្កើត PR នៅ GitHub ដើម្បី Merge ទៅ \`main\`។
  3. ពិនិត្យនិង Merge PR នៅ Web Interface។

---

## 5. ឧទាហរណ៍នៃ Merging 📋

1. បង្កើតនិង Commit នៅ Branch \`feature\`៖
   \`\`\`bash
   git switch -c feature
   echo "<h1>Feature</h1>" > feature.html
   git add feature.html
   git commit -m "feat: add feature.html"
   \`\`\`
2. Merge ទៅ \`main\`៖
   \`\`\`bash
   git checkout main
   git merge feature
   \`\`\`
3. បើមាន Conflict៖
   \`\`\`bash
   # កែ feature.html ដោយរក្សា៖
   <h1>Feature</h1>
   git add feature.html
   git commit
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Fast-Forward Merge

\`\`\`bash
git switch -c feature
echo "<h1>Feature</h1>" > feature.html
git add feature.html
git commit -m "feat: add feature.html"
git checkout main
git merge feature
# លទ្ធផល: Fast-forward merge completed
\`\`\`

# ឧទាហរណ៍ ២: Three-Way Merge

\`\`\`bash
git checkout main
echo "<h1>Main</h1>" > main.html
git add main.html
git commit -m "feat: add main.html"
git merge feature
# លទ្ធផល: Three-way merge completed
\`\`\`

# ឧទាហរណ៍ ៣: Merge Conflict

\`\`\`bash
# Conflict នៅ feature.html
# កែ feature.html ដោយរក្សា៖
<h1>Feature and Main</h1>
git add feature.html
git commit
# លទ្ធផល: Conflict resolved
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ Merging នៅក្នុង Git ជាអ្វី?',
      options: [
        'ការបង្កើត Branch ថ្មី',
        'ការបញ្ចូលការផ្លាស់ប្តូរពី Branch មួយទៅ Branch មួយទៀត',
        'ការលុប Branch',
        'ការ Push ទៅ Remote',
      ],
      correct: 1,
      explanation: 'Merging ជាការបញ្ចូលការផ្លាស់ប្តូរពី Branch មួយទៅ Branch មួយទៀត។',
    },
    {
      question: 'តើ `git merge` ធ្វើអ្វី?',
      options: [
        'បង្កើត Branch',
        'បញ្ចូលការផ្លាស់ប្តូរពី Branch មួយទៅ Branch បច្ចុប្បន្ន',
        'លុប Branch',
        'Push Branch',
      ],
      correct: 1,
      explanation: '`git merge` បញ្ចូលការផ្លាស់ប្តូរពី Branch មួយទៅ Branch បច្ចុប្បន្ន។',
    },
    {
      question: 'តើ Fast-Forward Merge កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេល Branch មាន Commits ផ្សេងគ្នា',
        'នៅពេល Branch គ្មាន Divergence',
        'នៅពេលមាន Conflict',
        'នៅពេលលុប Branch',
      ],
      correct: 1,
      explanation: 'Fast-Forward Merge កើតឡើងនៅពេល Branch គ្មាន Divergence។',
    },
    {
      question: 'តើ Three-Way Merge ជាអ្វី?',
      options: [
        'Merge ដោយគ្មាន Commit',
        'Merge នៅពេល Branch មាន Commits ផ្សេងគ្នា',
        'Merge នៅ Remote',
        'Merge ដោយលុប Branch',
      ],
      correct: 1,
      explanation: 'Three-Way Merge កើតឡើងនៅពេល Branch មាន Commits ផ្សេងគ្នា។',
    },
    {
      question: 'តើ Merge Conflict កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេល Push Branch',
        'នៅពេល Branch ពីរមានការផ្លាស់ប្តូរផ្ទុយគ្នា',
        'នៅពេលបង្កើត Branch',
        'នៅពេលលុប Branch',
      ],
      correct: 1,
      explanation: 'Merge Conflict កើតឡើងនៅពេល Branch ពីរមានការផ្លាស់ប្តូរផ្ទុយគ្នា។',
    },
    {
      question: 'តើ `git merge --abort` ធ្វើអ្វី?',
      options: [
        'បញ្ចូល Branch',
        'បោះបង់ Merge',
        'បង្កើត Branch',
        'Push Branch',
      ],
      correct: 1,
      explanation: '`git merge --abort` បោះបង់ Merge។',
    },
    {
      question: 'តើ Pull Request នៅ GitHub ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Branch',
        'ស្នើសុំ Merge និងពិនិត្យការផ្លាស់ប្តូរ',
        'លុប Repository',
        'Push Commits',
      ],
      correct: 1,
      explanation: 'Pull Request ស្នើសុំ Merge និងពិនិត្យការផ្លាស់ប្តូរ។',
    },
    {
      question: 'តើ `git log --graph` បង្ហាញអ្វី?',
      options: [
        'ស្ថានភាព Repository',
        'Merge History ជាទម្រង់ Graph',
        'ភាពខុសគ្នានៃឯកសារ',
        'Branch ទាំងអស់',
      ],
      correct: 1,
      explanation: '`git log --graph` បង្ហាញ Merge History ជាទម្រង់ Graph។',
    },
    {
      question: 'តើជំហានដំបូងក្នុងការដោះស្រាយ Merge Conflict គឺជាអ្វី?',
      options: [
        'Push Commits',
        'ពិនិត្យឯកសារដែលមាន Conflict',
        'លុប Branch',
        'បន្ថែម Remote',
      ],
      correct: 1,
      explanation: 'ជំហានដំបូងគឺពិនិត្យឯកសារដែលមាន Conflict។',
    },
    {
      question: 'តើអ្នកត្រូវធ្វើអ្វីបន្ទាប់ពីកែ Conflict?',
      options: [
        'Push ទៅ Remote',
        'បន្ថែមឯកសារនិង Commit',
        'លុប Branch',
        'ទាញ Metadata',
      ],
      correct: 1,
      explanation: 'បន្ទាប់ពីកែ Conflict ត្រូវ `git add` និង `git commit`។',
    },
    {
      question: 'តើ Pull Request តម្រូវឱ្យ Push Branch ទៅ Remote មុនទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Pull Request តម្រូវឱ្យ Push Branch ទៅ Remote។',
    },
    {
      question: 'តើ Fast-Forward Merge ត្រូវការ Commit ថ្មីទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Conflict', 'តែនៅ Remote'],
      correct: 1,
      explanation: 'Fast-Forward Merge មិនត្រូវការ Commit ថ្មី។',
    },
    {
      question: 'តើ Three-Way Merge បង្កើត Commit ថ្មីទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Conflict', 'តែនៅ Local'],
      correct: 0,
      explanation: 'Three-Way Merge បង្កើត Commit ថ្មី។',
    },
    {
      question: 'តើអ្នកអាចបោះបង់ Merge បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Remote', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចបោះបង់ Merge ដោយ `git merge --abort`។',
    },
    {
      question: 'តើ Pull Request ត្រូវបានបង្កើតនៅឯណា?',
      options: [
        'នៅ Local Repository',
        'នៅ GitHub Web Interface',
        'នៅ .gitignore',
        'នៅ Command Line',
      ],
      correct: 1,
      explanation: 'Pull Request ត្រូវបានបង្កើតនៅ GitHub Web Interface។',
    },
    {
      question: 'តើអ្នកអាច Merge Branch ដោយគ្មាន Pull Request បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Remote', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាច Merge Branch ដោយ `git merge` ក្នុង Local។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ Merging៖
* បង្កើត Branch និង Merge។
* ដោះស្រាយ Merge Conflict។
* បង្កើត Pull Request។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. Clone Repository **my-merging-repo**៖
   \`\`\`bash
   git clone https://github.com/yourusername/my-merging-repo.git
   cd my-merging-repo
   \`\`\`
2. បង្កើត Branch \`feature\` និងបន្ថែម \`feature.html\`៖
   \`\`\`html
   <h1>Feature Page</h1>
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git switch -c feature
   git add feature.html
   git commit -m "feat: add feature.html"
   git push origin feature
   \`\`\`
3. នៅ Branch \`main\` បន្ថែម \`main.html\`៖
   \`\`\`html
   <h1>Main Page</h1>
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git switch main
   git add main.html
   git commit -m "feat: add main.html"
   git push origin main
   \`\`\`
4. Merge \`feature\` ទៅ \`main\`៖
   \`\`\`bash
   git merge feature
   git push origin main
   \`\`\`
5. បង្កើត Conflict ដោយកែ \`feature.html\` នៅ Branch \`feature\`៖
   \`\`\`html
   <h1>Updated Feature Page</h1>
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git switch feature
   git add feature.html
   git commit -m "feat: update feature.html"
   git push origin feature
   \`\`\`
6. កែ \`feature.html\` នៅ \`main\`៖
   \`\`\`html
   <h1>Main Feature Page</h1>
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git switch main
   git add feature.html
   git commit -m "feat: update feature.html in main"
   git push origin main
   \`\`\`
7. Merge និងដោះស្រាយ Conflict៖
   \`\`\`bash
   git merge feature
   # កែ feature.html ទៅជា៖
   <h1>Merged Feature Page</h1>
   git add feature.html
   git commit
   git push origin main
   \`\`\`
8. បង្កើត Pull Request នៅ GitHub សម្រាប់ Branch \`feature\` ទៅ \`main\`។
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ Merging

## ជំហានទី ១៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-merging-repo.git
cd my-merging-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ២៖ បង្កើត Branch និង Push feature.html
\`\`\`bash
git switch -c feature
echo "<h1>Feature Page</h1>" > feature.html
git add feature.html
git commit -m "feat: add feature.html"
git push origin feature
# លទ្ធផល: Pushed to feature branch
\`\`\`

## ជំហានទី ៣៖ បន្ថែម main.html នៅ main
\`\`\`bash
git switch main
echo "<h1>Main Page</h1>" > main.html
git add main.html
git commit -m "feat: add main.html"
git push origin main
# លទ្ធផល: Pushed to main
\`\`\`

## ជំហានទី ៤៖ Merge feature ទៅ main
\`\`\`bash
git merge feature
git push origin main
# លទ្ធផល: Fast-forward merge completed
\`\`\`

## ជំហានទី ៥៖ បង្កើត Conflict នៅ feature
\`\`\`bash
git switch feature
echo "<h1>Updated Feature Page</h1>" > feature.html
git add feature.html
git commit -m "feat: update feature.html"
git push origin feature
# លទ្ធផល: Pushed to feature
\`\`\`

## ជំហានទី ៦៖ បង្កើត Conflict នៅ main
\`\`\`bash
git switch main
echo "<h1>Main Feature Page</h1>" > feature.html
git add feature.html
git commit -m "feat: update feature.html in main"
git push origin main
# លទ្ធផល: Pushed to main
\`\`\`

## ជំហានទី ៧៖ ដោះស្រាយ Conflict
\`\`\`bash
git merge feature
# កែ feature.html ទៅជា៖
echo "<h1>Merged Feature Page</h1>" > feature.html
git add feature.html
git commit
git push origin main
# លទ្ធផល: Conflict resolved and pushed
\`\`\`

## ជំហានទី ៨៖ បង្កើត Pull Request
- ចូលទៅ GitHub នៅ https://github.com/yourusername/my-merging-repo។
- ចុច **New Pull Request** សម្រាប់ Branch \`feature\` ទៅ \`main\`។
- ពិនិត្យនិង Merge PR។

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការ Merge និងដោះស្រាយ Merge Conflict។
`,
  },
};

export default GitHubLesson3_2Content;