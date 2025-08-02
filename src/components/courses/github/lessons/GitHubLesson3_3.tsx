import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson3_3Content: LessonContent = {
  title: 'Git Rebase (កម្រិតខ្ពស់)',
  objectives: [
    'យល់ពីអ្វីជា Rebase និងភាពខុសគ្នាជាមួយ Merge',
    'ប្រើ `git rebase` ដើម្បីរៀបចំ Commit History',
    'ប្រើ `git rebase -i` សម្រាប់ Interactive Rebase',
    'ដោះស្រាយ Rebase Conflicts',
    'ស្គាល់គុណសម្បត្តិ និងគុណវិបត្តិនៃ Rebase',
    'ប្រើ `git rebase --abort` ដើម្បីបោះបង់ Rebase',
    'រៀបចំ Branch សម្រាប់ Pull Request ដោយ Rebase',
    'ប្រើ `git push --force` បន្ទាប់ពី Rebase',
  ],
  content: `
# Git Rebase (កម្រិតខ្ពស់) 🔄

---

Rebase គឺជាវិធីសម្រាប់រៀបចំ Commit History ឱ្យស្អាត ដោយផ្លាស់ទី Commits ទៅលើ Base ថ្មី។ វាខុសពី Merge ដែលរក្សាទុក History ដើម។

---

## 1. អ្វីជា Rebase? 🤔

* **Rebase:** ផ្លាស់ទីឬផ្លាស់ប្តូរ Base នៃ Branch មួយទៅលើ Branch មួយទៀត។
* បង្កើត Linear Commit History ដែលស្អាតជាង Merge។
* ឧទាហរណ៍៖ ផ្លាស់ទី Commits ពី \`feature\` ទៅលើ \`main\`។

---

## 2. ការប្រើ Rebase Commands 🛠️

* **git rebase:**
  \`\`\`bash
  git checkout feature
  git rebase main
  \`\`\`
  ផ្លាស់ទី Commits ពី \`feature\` ទៅលើ \`main\`។

* **git rebase -i (Interactive Rebase):**
  \`\`\`bash
  git rebase -i HEAD~3
  \`\`\`
  អនុញ្ញាតឱ្យកែសម្រួល Commits (ឧ. Squash, Edit, Reorder)។

* **git rebase --abort:**
  \`\`\`bash
  git rebase --abort
  \`\`\`
  បោះបង់ Rebase បើមាន Conflict។

* **git push --force:**
  \`\`\`bash
  git push --force
  \`\`\`
  Push Commit History ដែលបាន Rebase ទៅ Remote។

---

## 3. Rebase Conflicts ⚠️

* Conflict កើតឡើងនៅពេល Commits មានការផ្លាស់ប្តូរផ្ទុយគ្នា។
* ដោះស្រាយ៖
  1. ពិនិត្យឯកសារដែលមាន Conflict។
  2. កែប្រែដោយដៃ និងរក្សាការផ្លាស់ប្តូរ។
  3. បន្ត Rebase៖
     \`\`\`bash
     git add <file>
     git rebase --continue
     \`\`\`

---

## 4. គុណសម្បត្តិ និងគុណវិបត្តិ 📊

* **គុណសម្បត្តិ:**
  - បង្កើត Linear Commit History។
  - សមស្របសម្រាប់ Pull Request។
* **គុណវិបត្តិ:**
  - អាចបាត់បង់ History ដើម។
  - តម្រូវឱ្យប្រើ \`git push --force\` (ប្រយ័ត្ននៅក្រុម)។

---

## 5. ឧទាហរណ៍នៃ Rebase 📋

1. Rebase Branch \`feature\` ទៅ \`main\`៖
   \`\`\`bash
   git checkout feature
   git rebase main
   \`\`\`
2. Interactive Rebase ដើម្បី Squash Commits៖
   \`\`\`bash
   git rebase -i HEAD~3
   # ជ្រើស "squash" សម្រាប់ Commits ដែលចង់បញ្ចូលគ្នា
   \`\`\`
3. Push បន្ទាប់ពី Rebase៖
   \`\`\`bash
   git push --force
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Rebase Branch

\`\`\`bash
git checkout feature
git rebase main
# លទ្ធផល: Feature branch rebased onto main
\`\`\`

# ឧទាហរណ៍ ២: Interactive Rebase

\`\`\`bash
git rebase -i HEAD~3
# កែសម្រួល Commits (ឧ. squash)
# លទ្ធផល: Commits combined
\`\`\`

# ឧទាហរណ៍ ៣: Rebase Conflict

\`\`\`bash
git rebase main
# Conflict នៅ file.txt
# កែ file.txt
git add file.txt
git rebase --continue
git push --force
# លទ្ធផល: Conflict resolved and pushed
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ Rebase នៅក្នុង Git ជាអ្វី?',
      options: [
        'ការបង្កើត Branch',
        'ការផ្លាស់ទី Commits ទៅលើ Base ថ្មី',
        'ការ Merge Branch',
        'ការ Push Branch',
      ],
      correct: 1,
      explanation: 'Rebase ជាការផ្លាស់ទី Commits ទៅលើ Base ថ្មី។',
    },
    {
      question: 'តើ `git rebase` ខុសពី `git merge` ដូចម្តេច?',
      options: [
        'Rebase បង្កើត Linear History, Merge រក្សា History ដើម',
        'Rebase បង្កើត Branch, Merge លុប Branch',
        'Rebase ជា Merge នៅ Remote',
        'គ្មានភាពខុសគ្នា',
      ],
      correct: 0,
      explanation: 'Rebase បង្កើត Linear History, Merge រក្សា History ដើម។',
    },
    {
      question: 'តើ `git rebase -i` ធ្វើអ្វី?',
      options: [
        'បោះបង់ Rebase',
        'អនុញ្ញាតឱ្យកែសម្រួល Commits',
        'Push Commits',
        'លុប Branch',
      ],
      correct: 1,
      explanation: '`git rebase -i` អនុញ្ញាតឱ្យកែសម្រួល Commits។',
    },
    {
      question: 'តើ Rebase Conflict កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេល Push Branch',
        'នៅពេល Commits មានការផ្លាស់ប្តូរផ្ទុយគ្នា',
        'នៅពេលបង្កើត Branch',
        'នៅពេលលុប Branch',
      ],
      correct: 1,
      explanation: 'Rebase Conflict កើតឡើងនៅពេល Commits មានការផ្លាស់ប្តូរផ្ទុយគ្នា។',
    },
    {
      question: 'តើ `git rebase --abort` ធ្វើអ្វី?',
      options: [
        'បន្ត Rebase',
        'បោះបង់ Rebase',
        'Push Commits',
        'Merge Branch',
      ],
      correct: 1,
      explanation: '`git rebase --abort` បោះបង់ Rebase។',
    },
    {
      question: 'តើ `git push --force` ត្រូវបានប្រើនៅពេលណា?',
      options: [
        'បន្ទាប់ពី Merge',
        'បន្ទាប់ពី Rebase',
        'បន្ទាប់ពី Pull',
        'បន្ទាប់ពី Commit',
      ],
      correct: 1,
      explanation: '`git push --force` ប្រើបន្ទាប់ពី Rebase។',
    },
    {
      question: 'តើគុណសម្បត្តិនៃ Rebase គឺជាអ្វី?',
      options: [
        'រក្សា History ដើម',
        'បង្កើត Linear Commit History',
        'លុប Branch',
        'បន្ថែម Remote',
      ],
      correct: 1,
      explanation: 'Rebase បង្កើត Linear Commit History។',
    },
    {
      question: 'តើគុណវិបត្តិនៃ Rebase គឺជាអ្វី?',
      options: [
        'បង្កើត Branch ថ្មី',
        'អាចបាត់បង់ History ដើម',
        'បង្កើត Merge Conflict',
        'តម្រូវឱ្យ Merge',
      ],
      correct: 1,
      explanation: 'Rebase អាចបាត់បង់ History ដើម។',
    },
    {
      question: 'តើ Interactive Rebase អនុញ្ញាតឱ្យធ្វើអ្វី?',
      options: [
        'Push Branch',
        'កែសម្រួល Commits (Squash, Edit, Reorder)',
        'លុប Repository',
        'Merge Branch',
      ],
      correct: 1,
      explanation: 'Interactive Rebase អនុញ្ញាតឱ្យកែសម្រួល Commits។',
    },
    {
      question: 'តើអ្នកត្រូវធ្វើអ្វីបន្ទាប់ពីដោះស្រាយ Rebase Conflict?',
      options: [
        'Push ទៅ Remote',
        'បន្ថែមឯកសារនិង `git rebase --continue`',
        'លុប Branch',
        'Merge Branch',
      ],
      correct: 1,
      explanation: 'បន្ទាប់ពីដោះស្រាយ Conflict ត្រូវ `git add` និង `git rebase --continue`។',
    },
    {
      question: 'តើ Rebase សមស្របសម្រាប់អ្វី?',
      options: [
        'ការលុប Repository',
        'ការរៀបចំ Pull Request ជាមួយ Linear History',
        'ការ Merge Branch',
        'ការ Push ទៅ Remote',
      ],
      correct: 1,
      explanation: 'Rebase សមស្របសម្រាប់ Pull Request ជាមួយ Linear History។',
    },
    {
      question: 'តើ `git push --force` មានគ្រោះថ្នាក់ទេ?',
      options: [
        'បាទ/ចាស៎ ព្រោះវាអាចលុប History នៅ Remote',
        'ទេ វាសុវត្ថិភាព',
        'តែនៅ Local',
        'តែនៅ main',
      ],
      correct: 0,
      explanation: '`git push --force` អាចលុប History នៅ Remote។',
    },
    {
      question: 'តើ Squash នៅក្នុង Interactive Rebase ធ្វើអ្វី?',
      options: [
        'បញ្ចូល Commits ច្រើនទៅជា Commit តែមួយ',
        'លុប Commits',
        'បង្កើត Branch',
        'Merge Branch',
      ],
      correct: 0,
      explanation: 'Squash បញ្ចូល Commits ច្រើនទៅជា Commit តែមួយ។',
    },
    {
      question: 'តើអ្នកអាចបោះបង់ Rebase បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Remote', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចបោះបង់ Rebase ដោយ `git rebase --abort`។',
    },
    {
      question: 'តើ Rebase ប៉ះពាល់ដល់ Branch ដើមទេ?',
      options: [
        'បាទ/ចាស៎ វាផ្លាស់ប្តូរ History',
        'ទេ វារក្សា History',
        'តែនៅ Remote',
        'តែនៅ Conflict',
      ],
      correct: 0,
      explanation: 'Rebase ផ្លាស់ប្តូរ History នៃ Branch។',
    },
    {
      question: 'តើអ្នកគួរប្រើ `git push --force` នៅក្នុងក្រុមដោយរបៀបណា?',
      options: [
        'ប្រើដោយសុវត្ថិភាព',
        'ប្រើដោយប្រយ័ត្ន ព្រោះវាអាចប៉ះពាល់ History',
        'មិនប្រើទេ',
        'ប្រើតែនៅ Local',
      ],
      correct: 1,
      explanation: '`git push --force` ត្រូវប្រើដោយប្រយ័ត្ននៅក្រុម។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ Rebase៖
* ប្រើ \`git rebase\` ដើម្បីរៀបចំ Branch។
* ប្រើ Interactive Rebase ដើម្បី Squash Commits។
* ដោះស្រាយ Rebase Conflict។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. Clone Repository **my-rebase-repo**៖
   \`\`\`bash
   git clone https://github.com/yourusername/my-rebase-repo.git
   cd my-rebase-repo
   \`\`\`
2. បង្កើត Branch \`feature\` និងបន្ថែម \`app.js\`៖
   \`\`\`javascript
   console.log("Feature 1");
   \`\`\`
   Commit៖
   \`\`\`bash
   git switch -c feature
   git add app.js
   git commit -m "feat: add feature 1"
   \`\`\`
3. បន្ថែម Commit ទីពីរនៅ \`feature\`៖
   \`\`\`javascript
   console.log("Feature 2");
   \`\`\`
   Commit៖
   \`\`\`bash
   git add app.js
   git commit -m "feat: add feature 2"
   \`\`\`
4. នៅ Branch \`main\` បន្ថែម \`app.js\`៖
   \`\`\`javascript
   console.log("Main Update");
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git switch main
   git add app.js
   git commit -m "feat: update app.js in main"
   git push origin main
   \`\`\`
5. Rebase \`feature\` ទៅ \`main\`៖
   \`\`\`bash
   git switch feature
   git rebase main
   # កែ app.js ទៅជា៖
   console.log("Main Update");
   console.log("Feature 1");
   console.log("Feature 2");
   git add app.js
   git rebase --continue
   \`\`\`
6. Interactive Rebase ដើម្បី Squash Commits៖
   \`\`\`bash
   git rebase -i HEAD~2
   # ជ្រើស "squash" សម្រាប់ Commit ទីពីរ
   # កែ Commit Message ទៅ៖ "feat: add features to app.js"
   \`\`\`
7. Push ទៅ Remote៖
   \`\`\`bash
   git push origin feature --force
   \`\`\`
8. បង្កើត Pull Request នៅ GitHub។
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ Rebase

## ជំហានទី ១៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-rebase-repo.git
cd my-rebase-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ២៖ បន្ថែម Commit ទីមួយនៅ feature
\`\`\`bash
git switch -c feature
echo "console.log('Feature 1');" > app.js
git add app.js
git commit -m "feat: add feature 1"
# លទ្ធផល: Commit created
\`\`\`

## ជំហានទី ៣៖ បន្ថែម Commit ទីពីរ
\`\`\`bash
echo "console.log('Feature 2');" >> app.js
git add app.js
git commit -m "feat: add feature 2"
# លទ្ធផល: Commit created
\`\`\`

## ជំហានទី ៤៖ បន្ថែម Commit នៅ main
\`\`\`bash
git switch main
echo "console.log('Main Update');" > app.js
git add app.js
git commit -m "feat: update app.js in main"
git push origin main
# លទ្ធផល: Pushed to main
\`\`\`

## ជំហានទី ៥៖ Rebase feature ទៅ main
\`\`\`bash
git switch feature
git rebase main
# Conflict នៅ app.js
# កែ app.js ទៅជា៖
echo -e "console.log('Main Update');\nconsole.log('Feature 1');\nconsole.log('Feature 2');" > app.js
git add app.js
git rebase --continue
# លទ្ធផល: Rebase completed
\`\`\`

## ជំហានទី ៦៖ Interactive Rebase
\`\`\`bash
git rebase -i HEAD~2
# ជ្រើស "squash" សម្រាប់ Commit ទីពីរ
# កែ Commit Message ទៅ៖ "feat: add features to app.js"
# លទ្ធផល: Commits squashed
\`\`\`

## ជំហានទី ៧៖ Push ទៅ Remote
\`\`\`bash
git push origin feature --force
# លទ្ធផល: Pushed to feature
\`\`\`

## ជំហានទី ៨៖ បង្កើត Pull Request
- ចូលទៅ GitHub នៅ https://github.com/yourusername/my-rebase-repo។
- ចុច **New Pull Request** សម្រាប់ Branch \`feature\` ទៅ \`main\`។
- ពិនិត្យនិង Merge PR។

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការ Rebase និង Interactive Rebase។
`,
  },
};

export default GitHubLesson3_3Content;