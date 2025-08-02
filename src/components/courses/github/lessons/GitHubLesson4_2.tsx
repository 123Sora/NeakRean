import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson4_2Content: LessonContent = {
  title: 'Forking a Repository',
  objectives: [
    'យល់ពីអ្វីជា Forking និងសារៈសំខាន់របស់វា',
    'Fork Repository ពី GitHub',
    'Clone Forked Repository ទៅកុំព្យូទ័រក្នុងស្រុក',
    'ធ្វើការផ្លាស់ប្តូរនៅ Forked Repository',
    'បង្កើត Pull Request ពី Forked Repository',
    'ធ្វើបច្ចុប្បន្នភាព Forked Repository ជាមួយ Upstream',
    'ប្រើ `git remote add upstream` ដើម្បីភ្ជាប់ Original Repository',
    'ស្គាល់ Best Practices សម្រាប់ Forking',
  ],
  content: `
# Forking a Repository 🍴

---

Forking គឺជាវិធីសហការលើគម្រោង Open Source ដោយចម្លង Repository ទៅគណនី GitHub ផ្ទាល់ខ្លួន។

---

## 1. អ្វីជា Forking? 🤔

* **Forking:** ការចម្លង Repository ពីគណនីមួយទៅគណនីផ្ទាល់ខ្លួននៅ GitHub។
* អនុញ្ញាតឱ្យអ្នកធ្វើការផ្លាស់ប្តូរ ដោយមិនប៉ះពាល់ Repository ដើម។
* ប្រើសម្រាប់ការរួមចំណែកទៅ Open Source។

---

## 2. ការប្រើ Forking 🛠️

* **Fork Repository:**
  1. ចូលទៅ Repository (ឧ. https://github.com/otheruser/sample-repo)។
  2. ចុច **Fork** នៅ GitHub។
* **Clone Forked Repository:**
  \`\`\`bash
  git clone https://github.com/yourusername/sample-repo.git
  cd sample-repo
  \`\`\`
* **បន្ថែម Upstream:**
  \`\`\`bash
  git remote add upstream https://github.com/otheruser/sample-repo.git
  git remote -v
  \`\`\`
* **ធ្វើបច្ចុប្បន្នភាព Fork:**
  \`\`\`bash
  git fetch upstream
  git checkout main
  git merge upstream/main
  git push origin main
  \`\`\`

---

## 3. ការរួមចំណែកជាមួយ Fork 🧑‍💻

* បង្កើត Branch និង Commit៖
  \`\`\`bash
  git switch -c feature
  echo "<h1>Contribution</h1>" > contribution.html
  git add contribution.html
  git commit -m "feat: add contribution.html"
  git push origin feature
  \`\`\`
* បង្កើត Pull Request ទៅ Repository ដើម។

---

## 4. Best Practices 📝

* រក្សា Fork ឱ្យទាន់សម័យជាមួយ Upstream។
* ប្រើ Branch សម្រាប់ការផ្លាស់ប្តូរ។
* សរសេរពិពណ៌នា Pull Request ឱ្យច្បាស់។
* ពិនិត្យ Contributing Guidelines នៃ Repository ដើម។

---

## 5. ឧទាហរណ៍នៃ Forking 📋

1. Fork Repository នៅ GitHub។
2. Clone Forked Repository៖
   \`\`\`bash
   git clone https://github.com/yourusername/sample-repo.git
   \`\`\`
3. បន្ថែម Upstream និងធ្វើបច្ចុប្បន្នភាព៖
   \`\`\`bash
   git remote add upstream https://github.com/otheruser/sample-repo.git
   git fetch upstream
   git merge upstream/main
   git push origin main
   \`\`\`
4. បង្កើត Pull Request ពី Branch។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Fork និង Clone

\`\`\`bash
git clone https://github.com/yourusername/sample-repo.git
cd sample-repo
# លទ្ធផល: Forked repository cloned
\`\`\`

# ឧទាហរណ៍ ២: ធ្វើបច្ចុប្បន្នភាព Fork

\`\`\`bash
git remote add upstream https://github.com/otheruser/sample-repo.git
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
# លទ្ធផល: Fork updated with upstream
\`\`\`

# ឧទាហរណ៍ ៣: បង្កើត Pull Request

\`\`\`bash
git switch -c feature
echo "<h1>Contribution</h1>" > contribution.html
git add contribution.html
git commit -m "feat: add contribution.html"
git push origin feature
# បន្ទាប់មកបង្កើត PR នៅ GitHub
# លទ្ធផល: Pull Request created
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ Forking នៅ GitHub ជាអ្វី?',
      options: [
        'ការបង្កើត Branch',
        'ការចម្លង Repository ទៅគណនីផ្ទាល់ខ្លួន',
        'ការលុប Repository',
        'ការបន្ថែម Remote',
      ],
      correct: 1,
      explanation: 'Forking ជាការចម្លង Repository ទៅគណនីផ្ទាល់ខ្លួន។',
    },
    {
      question: 'តើអ្នក Fork Repository ដោយរបៀបណា?',
      options: [
        'ប្រើ `git fork`',
        'ចុច Fork នៅ GitHub',
        'ប្រើ `git clone`',
        'ប្រើ `git remote add`',
      ],
      correct: 1,
      explanation: 'ចុច Fork នៅ GitHub ដើម្បីចម្លង Repository។',
    },
    {
      question: 'តើ `git clone` ប្រើសម្រាប់អ្វីបន្ទាប់ពី Fork?',
      options: [
        'បន្ថែម Upstream',
        'ទាញ Forked Repository មក Local',
        'បង្កើត PR',
        'Merge Branch',
      ],
      correct: 1,
      explanation: '`git clone` ទាញ Forked Repository មក Local។',
    },
    {
      question: 'តើ Upstream នៅក្នុង Forking ជាអ្វី?',
      options: [
        'Forked Repository',
        'Repository ដើម',
        'Branch ថ្មី',
        'Pull Request',
      ],
      correct: 1,
      explanation: 'Upstream ជា Repository ដើម។',
    },
    {
      question: 'តើ Command `git remote add upstream` ធ្វើអ្វី?',
      options: [
        'បង្កើត Branch',
        'ភ្ជាប់ Repository ដើម',
        'Push Branch',
        'លុប Fork',
      ],
      correct: 1,
      explanation: '`git remote add upstream` ភ្ជាប់ Repository ដើម។',
    },
    {
      question: 'តើអ្នកធ្វើបច្ចុប្បន្នភាព Fork ដោយរបៀបណា?',
      options: [
        'git push origin main',
        'git fetch upstream && git merge upstream/main',
        'git clone upstream',
        'git rebase main',
      ],
      correct: 1,
      explanation: '`git fetch upstream && git merge upstream/main` ធ្វើបច្ចុប្បន្នភាព Fork។',
    },
    {
      question: 'តើ Forking ប្រើសម្រាប់អ្វីជាចម្បង?',
      options: [
        'លុប Repository',
        'រួមចំណែកទៅ Open Source',
        'បង្កើត Branch',
        'Merge Repository',
      ],
      correct: 1,
      explanation: 'Forking ប្រើសម្រាប់រួមចំណែកទៅ Open Source។',
    },
    {
      question: 'តើអ្នកអាចបង្កើត Pull Request ពី Forked Repository បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចបង្កើត PR ពី Forked Repository។',
    },
    {
      question: 'តើអ្នកគួរពិនិត្យអ្វីមុនពេលរួមចំណែកទៅ Fork?',
      options: [
        'README.md',
        'Contributing Guidelines',
        '.gitignore',
        'Commit History',
      ],
      correct: 1,
      explanation: 'Contributing Guidelines គួរត្រូវពិនិត្យមុន។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ Forking គឺជាអ្វី?',
      options: [
        'រក្សា Fork ឱ្យទាន់សម័យជាមួយ Upstream',
        'បង្កើត Commit ធំៗ',
        'មិនប្រើ Branch',
        'លុប Upstream',
      ],
      correct: 0,
      explanation: 'រក្សា Fork ឱ្យទាន់សម័យជាមួយ Upstream ជា Best Practice។',
    },
    {
      question: 'តើអ្នកអាច Fork Repository ឯកជនបានទេ?',
      options: [
        'បាទ/ចាស៎ បើមានសិទ្ធិ',
        'ទេ',
        'តែនៅ Local',
        'តែនៅ main',
      ],
      correct: 0,
      explanation: 'បាទ/ចាស៎ បើមានសិទ្ធិអ្នកអាច Fork Repository ឯកជន។',
    },
    {
      question: 'តើ `git fetch upstream` ធ្វើអ្វី?',
      options: [
        'Push Branch',
        'ទាញ Metadata ពី Repository ដើម',
        'Merge Branch',
        'បង្កើត PR',
      ],
      correct: 1,
      explanation: '`git fetch upstream` ទាញ Metadata ពី Repository ដើម។',
    },
    {
      question: 'តើអ្នកគួរប្រើ Branch នៅ Forked Repository ទេ?',
      options: [
        'បាទ/ចាស៎ សម្រាប់ការផ្លាស់ប្តូរឯករាជ្យ',
        'ទេ',
        'តែនៅ Upstream',
        'តែនៅ main',
      ],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Branch គួរប្រើសម្រាប់ការផ្លាស់ប្តូរឯករាជ្យ។',
    },
    {
      question: 'តើ Pull Request ពី Fork ត្រូវបានបង្កើតនៅឯណា?',
      options: [
        'នៅ Local Repository',
        'នៅ GitHub ទៅ Repository ដើម',
        'នៅ .gitignore',
        'នៅ Command Line',
      ],
      correct: 1,
      explanation: 'Pull Request ពី Fork ត្រូវបានបង្កើតនៅ GitHub ទៅ Repository ដើម។',
    },
    {
      question: 'តើអ្នកអាចធ្វើបច្ចុប្បន្នភាព Fork ដោយគ្មាន Upstream បានទេ?',
      options: [
        'បាទ/ចាស៎',
        'ទេ ត្រូវការ Upstream',
        'តែនៅ Local',
        'តែនៅ main',
      ],
      correct: 1,
      explanation: 'ទេ ត្រូវការ Upstream ដើម្បីធ្វើបច្ចុប្បន្នភាព Fork។',
    },
    {
      question: 'តើ Forking សមស្របសម្រាប់អ្វី?',
      options: [
        'ការលុប Repository',
        'ការរួមចំណែកទៅ Open Source',
        'ការបង្កើត Branch',
        'ការបន្ថែម Labels',
      ],
      correct: 1,
      explanation: 'Forking សមស្របសម្រាប់ការរួមចំណែកទៅ Open Source។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ Forking៖
* Fork Repository។
* ធ្វើការផ្លាស់ប្តូរ និងបង្កើត Pull Request។
* ធ្វើបច្ចុប្បន្នភាព Fork។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. Fork Repository (ឧ. https://github.com/otheruser/sample-repo) នៅ GitHub។
2. Clone Forked Repository៖
   \`\`\`bash
   git clone https://github.com/yourusername/sample-repo.git
   cd sample-repo
   \`\`\`
3. បន្ថែម Upstream៖
   \`\`\`bash
   git remote add upstream https://github.com/otheruser/sample-repo.git
   \`\`\`
4. បង្កើត Branch \`feature\` និងបន្ថែម \`contribution.html\`៖
   \`\`\`html
   <h1>My Contribution</h1>
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git switch -c feature
   git add contribution.html
   git commit -m "feat: add contribution.html"
   git push origin feature
   \`\`\`
5. បង្កើត Pull Request នៅ GitHub ទៅ Repository ដើម។
6. ធ្វើបច្ចុប្បន្នភាព Fork៖
   \`\`\`bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   git push origin main
   \`\`\`
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ Forking

## ជំហានទី ១៖ Fork Repository
- ចូលទៅ https://github.com/otheruser/sample-repo និងចុច **Fork**។
- លទ្ធផល: Repository forked to yourusername/sample-repo

## ជំហានទី ២៖ Clone Forked Repository
\`\`\`bash
git clone https://github.com/yourusername/sample-repo.git
cd sample-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៣៖ បន្ថែម Upstream
\`\`\`bash
git remote add upstream https://github.com/otheruser/sample-repo.git
git remote -v
# លទ្ធផល: Upstream added
\`\`\`

## ជំហានទី ៤៖ បង្កើត Branch និង Push
\`\`\`bash
git switch -c feature
echo "<h1>My Contribution</h1>" > contribution.html
git add contribution.html
git commit -m "feat: add contribution.html"
git push origin feature
# លទ្ធផល: Pushed to feature
\`\`\`

## ជំហានទី ៥៖ បង្កើត Pull Request
- ចូលទៅ GitHub នៅ https://github.com/yourusername/sample-repo។
- ចុច **New Pull Request** ទៅ Repository ដើម។
- បំពេញចំណងជើងនិងពិពណ៌នា។
- លទ្ធផល: Pull Request created

## ជំហានទី ៦៖ ធ្វើបច្ចុប្បន្នភាព Fork
\`\`\`bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
# លទ្ធផល: Fork updated
\`\`\`

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការ Fork និងរួមចំណែកទៅ Open Source។
`,
  },
};

export default GitHubLesson4_2Content;