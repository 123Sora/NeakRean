import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson6_3Content: LessonContent = {
  title: 'Git .gitignore File',
  objectives: [
    'យល់ពីអ្វីជា .gitignore និងសារៈសំខាន់របស់វា',
    'បង្កើតនិងកែសម្រួល .gitignore File',
    'បញ្ជាក់ Files/Folders ដែលត្រូវ Ignore',
    'ប្រើ Patterns នៅក្នុង .gitignore',
    'Ignore Files ជាបណ្តោះអាសន្នជាមួយ `git update-index`',
    'ប្រើ Global .gitignore',
    'ស្គាល់ Best Practices សម្រាប់ .gitignore',
    'ត្រួតពិនិត្យ Files ដែលត្រូវ Ignore',
  ],
  content: `
# Git .gitignore File 🚫

---

\`.gitignore\` ជា File ដែលបញ្ជាក់ Files ឬ Folders ដែល Git មិនគួរតាមដាន។

---

## 1. .gitignore ជាអ្វី? 🤔

* **.gitignore:** File ដែលប្រាប់ Git ឱ្យ Ignore Files/Folders ជាក់លាក់។
* ប្រើសម្រាប់ Ignore Build Artifacts, Logs, Temporary Files។
* ទីតាំង: នៅ Root នៃ Repository។

---

## 2. ការបង្កើត .gitignore 🛠️

* **បង្កើត .gitignore:**
  \`\`\`bash
  touch .gitignore
  \`\`\`
* **បន្ថែម Rules:**
  \`\`\`
  # Ignore node_modules
  node_modules/
  # Ignore logs
  *.log
  # Ignore .env
  .env
  \`\`\`

---

## 3. Patterns នៅ .gitignore 📜

* **Wildcards:** \`*\` (ផ្គូផ្គងអ្វីទាំងអស់), \`**\` (ផ្គូផ្គង Folders ទាំងអស់)។
* **Negation:** \`!\` (មិន Ignore)។
* ឧទាហរណ៍:
  \`\`\`
  *.log
  !important.log
  \`\`\`

---

## 4. Global .gitignore 🌍

* **បង្កើត Global .gitignore:**
  \`\`\`bash
  git config --global core.excludesfile ~/.gitignore_global
  \`\`\`
* បន្ថែម Rules នៅ \`~/.gitignore_global\`។

---

## 5. Ignore Files ជាបណ្តោះអាសន្ន 🔄

* **Assume Unchanged:**
  \`\`\`bash
  git update-index --assume-unchanged file.txt
  \`\`\`
* **Undo:**
  \`\`\`bash
  git update-index --no-assume-unchanged file.txt
  \`\`\`

---

## 6. Best Practices 📝

* បន្ថែម .gitignore នៅពេលបង្កើត Repository។
* ប្រើ Templates ពី https://github.com/github/gitignore។
* កុំ Ignore Files ដែលចាំបាច់សម្រាប់ Project។
* Commit \`.gitignore\` ទៅ Repository។

---

## 7. ឧទាហរណ៍នៃ .gitignore 📋

1. បង្កើត .gitignore:
   \`\`\`bash
   echo "node_modules/" > .gitignore
   git add .gitignore
   git commit -m "Add .gitignore"
   \`\`\`
2. Ignore Temporary Files:
   \`\`\`
   *.tmp
   \`\`\`
3. Global .gitignore:
   \`\`\`bash
   echo ".DS_Store" > ~/.gitignore_global
   git config --global core.excludesfile ~/.gitignore_global
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត .gitignore

\`\`\`bash
echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "Add .gitignore"
# លទ្ធផល: node_modules ignored
\`\`\`

# ឧទាហរណ៍ ២: ប្រើ Patterns

\`\`\`
*.log
!important.log
\`\`\`
# លទ្ធផល: All .log files ignored except important.log

# ឧទាហរណ៍ ៣: Global .gitignore

\`\`\`bash
echo ".DS_Store" > ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
# លទ្ធផល: .DS_Store ignored globally
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ .gitignore ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Branch',
        'Ignore Files/Folders',
        'Merge Code',
        'Host Website',
      ],
      correct: 1,
      explanation: '`.gitignore` ប្រើសម្រាប់ Ignore Files/Folders។',
    },
    {
      question: 'តើ .gitignore គួរដាក់នៅឯណា?',
      options: [
        'Home Directory',
        'Root នៃ Repository',
        '.git Folder',
        'src Folder',
      ],
      correct: 1,
      explanation: '`.gitignore` ដាក់នៅ Root នៃ Repository។',
    },
    {
      question: 'តើ Pattern `*.log` Ignore អ្វី?',
      options: [
        'All .log Files',
        'All Folders',
        'All Commits',
        'All Branches',
      ],
      correct: 0,
      explanation: '`*.log` Ignore All .log Files។',
    },
    {
      question: 'តើ `!` នៅ .gitignore ធ្វើអ្វី?',
      options: [
        'Ignore Files',
        'Negate Ignore',
        'Create Branch',
        'Push Code',
      ],
      correct: 1,
      explanation: '`!` Negate Ignore។',
    },
    {
      question: 'តើ Global .gitignore កំណត់ដោយរបៀបណា?',
      options: [
        'git config --global core.excludesfile',
        'git ignore global',
        'git add .gitignore',
        'git commit global',
      ],
      correct: 0,
      explanation: '`git config --global core.excludesfile` កំណត់ Global .gitignore។',
    },
    {
      question: 'តើ `git update-index --assume-unchanged` ធ្វើអ្វី?',
      options: [
        'Commit File',
        'Ignore File ជាបណ្តោះអាសន្ន',
        'Delete File',
        'Push File',
      ],
      correct: 1,
      explanation: '`git update-index --assume-unchanged` Ignore File ជាបណ្តោះអាសន្ន។',
    },
    {
      question: 'តើអ្នកអាច Undo `assume-unchanged` ដោយរបៀបណា?',
      options: [
        'git update-index --no-assume-unchanged',
        'git stash',
        'git tag -d',
        'git push --delete',
      ],
      correct: 0,
      explanation: '`git update-index --no-assume-unchanged` Undo Assume Unchanged។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ .gitignore គឺជាអ្វី?',
      options: [
        'មិន Commit .gitignore',
        'បន្ថែម .gitignore នៅពេលបង្កើត Repository',
        'Ignore គ្រប់ Files',
        'មិនប្រើ Patterns',
      ],
      correct: 1,
      explanation: 'បន្ថែម .gitignore នៅពេលបង្កើត Repository ជា Best Practice។',
    },
    {
      question: 'តើ Pattern `**/*.js` Ignore អ្វី?',
      options: [
        'All .js Files in All Folders',
        'Only .js Files in Root',
        'All Folders',
        'All Commits',
      ],
      correct: 0,
      explanation: '`**/*.js` Ignore All .js Files in All Folders។',
    },
    {
      question: 'តើអ្នកអាចប្រើ .gitignore Templates បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Templates មាននៅ https://github.com/github/gitignore។',
    },
    {
      question: 'តើ .gitignore អាច Ignore Folders បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ .gitignore អាច Ignore Folders។',
    },
    {
      question: 'តើអ្នកគួរ Commit .gitignore ទៅ Repository ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ .gitignore គួរ Commit។',
    },
    {
      question: 'តើ Pattern `node_modules/` Ignore អ្វី?',
      options: [
        'All .js Files',
        'node_modules Folder',
        'All Commits',
        'All Branches',
      ],
      correct: 1,
      explanation: '`node_modules/` Ignore node_modules Folder។',
    },
    {
      question: 'តើ Global .gitignore អនុវត្តនៅ Repository ណាខ្លះ?',
      options: [
        'តែ Repository មួយ',
        'គ្រប់ Repository',
        'តែ main Branch',
        'តែ Local',
      ],
      correct: 1,
      explanation: 'Global .gitignore អនុវត្តនៅគ្រប់ Repository។',
    },
    {
      question: 'តើអ្នកអាច Ignore File ដែលបាន Track រួចទេ?',
      options: [
        'បាទ/ចាស៎ ជាមួយ .gitignore',
        'ទេ តែប្រើ `git update-index`',
        'ទេ តែប្រើ `git stash`',
        'បាទ/ចាស៎ ជាមួយ `git tag`',
      ],
      correct: 1,
      explanation: 'ទេ ប៉ុន្តែប្រើ `git update-index --assume-unchanged`។',
    },
    {
      question: 'តើអ្នកអាចប្រើ .gitignore សម្រាប់ Temporary Files បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ .gitignore អាច Ignore Temporary Files។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ .gitignore៖
* បង្កើត .gitignore File។
* Ignore Files/Folders។
* បង្កើត Global .gitignore។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Repository **my-ignore-repo** នៅ GitHub។
2. Clone Repository:
   \`\`\`bash
   git clone https://github.com/yourusername/my-ignore-repo.git
   cd my-ignore-repo
   \`\`\`
3. បង្កើត .gitignore:
   \`\`\`bash
   echo "node_modules/" > .gitignore
   echo "*.log" >> .gitignore
   git add .gitignore
   git commit -m "Add .gitignore"
   git push origin main
   \`\`\`
4. បង្កើត File ដែលត្រូវ Ignore:
   \`\`\`bash
   echo "Log" > app.log
   git status
   \`\`\`
5. បង្កើត Global .gitignore:
   \`\`\`bash
   echo ".DS_Store" > ~/.gitignore_global
   git config --global core.excludesfile ~/.gitignore_global
   \`\`\`
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ .gitignore

## ជំហានទី ១៖ បង្កើត Repository
- បង្កើត **my-ignore-repo** នៅ GitHub។
- លទ្ធផល: Repository created

## ជំហានទី ២៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-ignore-repo.git
cd my-ignore-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៣៖ បង្កើត .gitignore
\`\`\`bash
echo "node_modules/" > .gitignore
echo "*.log" >> .gitignore
git add .gitignore
git commit -m "Add .gitignore"
git push origin main
# លទ្ធផល: .gitignore committed and pushed
\`\`\`

## ជំហានទី ៤៖ បង្កើត File ដែលត្រូវ Ignore
\`\`\`bash
echo "Log" > app.log
git status
# លទ្ធផល: app.log not tracked
\`\`\`

## ជំហានទី ៥៖ បង្កើត Global .gitignore
\`\`\`bash
echo ".DS_Store" > ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
# លទ្ធផល: Global .gitignore configured
\`\`\`

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការប្រើ .gitignore។
`,
  },
};

export default GitHubLesson6_3Content;