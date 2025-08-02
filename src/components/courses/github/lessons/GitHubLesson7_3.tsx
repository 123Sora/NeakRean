import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson7_3Content: LessonContent = {
  title: 'ការចូលរួមចំណែកដល់ Open Source',
  objectives: [
    'យល់ដឹងអំពី Open Source និងសារៈសំខាន់របស់វា',
    'ស្វែងរកគម្រោង Open Source នៅលើ GitHub',
    'ធ្វើការ Fork និង Clone Repository',
    'បង្កើត Branch សម្រាប់ការចូលរួមចំណែក',
    'បង្កើត Pull Request ទៅកាន់គម្រោង Open Source',
    'អនុវត្តតាមគោលការណ៍ណែនាំសម្រាប់ការចូលរួមចំណែក',
    'ប្រើ Issues ដើម្បីស្វែងរកភារកិច្ច',
    'ស្គាល់ការអនុវត្តល្អបំផុតសម្រាប់ការចូលរួមចំណែក Open Source',
  ],
  content: `
# ការចូលរួមចំណែកដល់ Open Source 🌍

---

ការចូលរួមចំណែកដល់ Open Source ជួយឱ្យអ្នកចូលរួមក្នុងគម្រោងសាធារណៈ និងរៀនជំនាញថ្មីៗ។

---

## ១. Open Source ជាអ្វី? 🤔

* **Open Source**៖ កម្មវិធីដែលកូដប្រភព (Source Code) អាចចូលប្រើ និងកែប្រែបានជាសាធារណៈ។
* GitHub ជាវេទិកាសម្រាប់ទុកដាក់ (Host) និងសហការលើគម្រោង Open Source។

---

## ២. ស្វែងរកគម្រោង Open Source 🔍

* ប្រើ GitHub Explore (https://github.com/explore) ដើម្បីស្វែងរកគម្រោង។
* ស្វែងរក Issues ដែលមានស្លាក (Labels) ដូចជា \`good first issue\` ឬ \`help wanted\`។
* ពិនិត្យគោលការណ៍ណែនាំសម្រាប់ការចូលរួមចំណែក (Contributing Guidelines) នៅក្នុង Repository។

---

## ៣. ធ្វើការ Fork និង Clone Repository 🛠️

* **Fork**៖ ចម្លង Repository ទៅកាន់គណនី GitHub របស់អ្នក។
* **Clone**៖
  \`\`\`bash
  git clone https://github.com/yourusername/project.git
  \`\`\`

---

## ៤. បង្កើត Branch និង Commit 🌳

* បង្កើត Feature Branch៖
  \`\`\`bash
  git switch -c fix/issue-123
  \`\`\`
* Commit ការផ្លាស់ប្តូរ៖
  \`\`\`bash
  git commit -m "fix: resolve issue #123"
  \`\`\`

---

## ៥. បង្កើត Pull Request 📤

* បញ្ជូន Branch ទៅកាន់ Forked Repository៖
  \`\`\`bash
  git push origin fix/issue-123
  \`\`\`
* បង្កើត Pull Request (PR) ពី Fork ទៅ Original Repository។
* បន្ថែមការពិពណ៌នា (Description) និងភ្ជាប់ Issue (ឧ. \`closes #123\`)។

---

## ៦. អនុវត្តតាមគោលការណ៍ណែនាំសម្រាប់ការចូលរួមចំណែក 📜

* អានឯកសារ \`CONTRIBUTING.md\` ឬ README។
* អនុវត្តតាមស្តង់ដារកូដ (Coding Standards) និងទម្រង់សារបញ្ជាក់ Commit (Commit Message Format)។

---

## ៧. ការអនុវត្តល្អបំផុត 📝

* ជ្រើសរើស Issues ដែលសមស្របនឹងជំនាញរបស់អ្នក។
* ទំនាក់ទំនងជាមួយអ្នកថែទាំ (Maintainers) តាមរយៈ Issues។
* សរសេរការពិពណ៌នា Pull Request ឱ្យច្បាស់លាស់។
* អនុវត្តតាមអាជ្ញាបណ្ណ (License) របស់គម្រោង។

---

## ៨. ឧទាហរណ៍នៃការចូលរួមចំណែក Open Source 📋

១. Fork Repository៖
   - នៅលើ GitHub ធ្វើការ Fork គម្រោង \`example/project\`។
២. Clone និងបង្កើត Branch៖
   \`\`\`bash
   git clone https://github.com/yourusername/project.git
   cd project
   git switch -c fix/issue-123
   \`\`\`
៣. Commit និង Push៖
   \`\`\`bash
   echo "Fix" > file.js
   git add file.js
   git commit -m "fix: resolve issue #123"
   git push origin fix/issue-123
   \`\`\`
៤. បង្កើត Pull Request៖
   - នៅលើ GitHub បង្កើត PR ទៅកាន់ Original Repository។
`,
  examples: [
    `
# ឧទាហរណ៍ ១៖ Fork និង Clone

# នៅលើ GitHub៖ Fork គម្រោង example/project
\`\`\`bash
git clone https://github.com/yourusername/project.git
# លទ្ធផល៖ Repository ត្រូវបាន Clone
\`\`\`

# ឧទាហរណ៍ ២៖ បង្កើត Branch និង Commit

\`\`\`bash
git switch -c fix/issue-123
echo "Fix" > file.js
git add file.js
git commit -m "fix: resolve issue #123"
git push origin fix/issue-123
# លទ្ធផល៖ Branch ត្រូវបានបញ្ជូន
\`\`\`

# ឧទាហរណ៍ ៣៖ បង្កើត Pull Request

# នៅលើ GitHub៖
# បង្កើត PR ពី fix/issue-123 ទៅ Original Repository
# ការពិពណ៌នា៖ "ជួសជុលបញ្ហា #123"
# លទ្ធផល៖ PR ត្រូវបានបង្កើត
`,
  ],
  quiz: [
    {
      question: 'តើ Open Source ជាអ្វី?',
      options: [
        'កម្មវិធីឯកជន',
        'កូដប្រភពដែលអាចចូលប្រើជាសាធារណៈ',
        'កម្មវិធីបង់ប្រាក់',
        'គេហទំព័រដែលទុកដាក់',
      ],
      correct: 1,
      explanation: 'Open Source គឺជាកូដប្រភពដែលអាចចូលប្រើជាសាធារណៈ។',
    },
    {
      question: 'តើអ្នកស្វែងរកគម្រោង Open Source នៅទីណា?',
      options: [
        'GitHub Explore',
        'ការកំណត់ Repository',
        'ផ្ទាំង Actions',
        'ផ្ទាំង Projects',
      ],
      correct: 0,
      explanation: 'GitHub Explore ជួយស្វែងរកគម្រោង Open Source។',
    },
    {
      question: 'តើ Fork ធ្វើអ្វី?',
      options: [
        'លុប Repository',
        'ចម្លង Repository ទៅគណនីរបស់អ្នក',
        'បញ្ចូល Branch',
        'បង្កើត Issue',
      ],
      correct: 1,
      explanation: 'Fork ចម្លង Repository ទៅគណនីរបស់អ្នក។',
    },
    {
      question: 'តើស្លាក `good first issue` ជួយអ្វី?',
      options: [
        'បង្កើត Branch',
        'កំណត់ភារកិច្ចសមស្របសម្រាប់អ្នកចាប់ផ្តើម',
        'បញ្ជូនកូដ',
        'លុប Repository',
      ],
      correct: 1,
      explanation: '`good first issue` ជួយកំណត់ភារកិច្ចសមស្របសម្រាប់អ្នកចាប់ផ្តើម។',
    },
    {
      question: 'តើគោលការណ៍ណែនាំសម្រាប់ការចូលរួមចំណែក (Contributing Guidelines) ជាអ្វី?',
      options: [
        'ឯកសារអាជ្ញាបណ្ណ',
        'ច្បាប់សម្រាប់ការចូលរួមចំណែក',
        'ប្រវត្តិ Commit',
        'បញ្ជី Branch',
      ],
      correct: 1,
      explanation: 'គោលការណ៍ណែនាំសម្រាប់ការចូលរួមចំណែកគឺជាច្បាប់សម្រាប់ការចូលរួម។',
    },
    {
      question: 'តើអ្នកបង្កើត Pull Request ទៅកាន់គម្រោង Open Source ដោយរបៀបណា?',
      options: [
        'បញ្ជូនទៅ main',
        'បង្កើត PR ពី Fork ទៅ Original Repository',
        'Commit ទៅ develop',
        'លុប Branch',
      ],
      correct: 1,
      explanation: 'PR ត្រូវបង្កើតពី Fork ទៅ Original Repository។',
    },
    {
      question: 'តើ `closes #123` នៅក្នុងការពិពណ៌នា PR ធ្វើអ្វី?',
      options: [
        'បង្កើត Issue',
        'ភ្ជាប់ PR ទៅ Issue',
        'លុប Issue',
        'បញ្ជូនកូដ',
      ],
      correct: 1,
      explanation: '`closes #123` ភ្ជាប់ PR ទៅ Issue។',
    },
    {
      question: 'តើអ្នកគួរអានអ្វីមុននឹងចូលរួមចំណែក?',
      options: [
        'CONTRIBUTING.md',
        '.gitignore',
        'ឯកសារ Workflow',
        'បញ្ជី Tag',
      ],
      correct: 0,
      explanation: 'អ្នកគួរអាន `CONTRIBUTING.md` មុននឹងចូលរួមចំណែក។',
    },
    {
      question: 'តើការអនុវត្តល្អបំផុតសម្រាប់ការចូលរួមចំណែក Open Source គឺជាអ្វី?',
      options: [
        'មិនអានគោលការណ៍ណែនាំ',
        'ទំនាក់ទំនងជាមួយអ្នកថែទាំ',
        'មិនប្រើ PRs',
        'មិនប្រើ Issues',
      ],
      correct: 1,
      explanation: 'ទំនាក់ទំនងជាមួយអ្នកថែទាំគឺជាការអនុវត្តល្អបំផុត។',
    },
    {
      question: 'តើអ្នកគួរប្រើ Branch ដោយរបៀបណា?',
      options: [
        'Commits ធំៗ',
        'Branch សម្រាប់ការចូលរួមចំណែក',
        'មិនប្រើ Branch',
        'Branch តែមួយ',
      ],
      correct: 1,
      explanation: 'ការប្រើ Branch សម្រាប់ការចូលរួមចំណែកគឺជាការអនុវត្តល្អបំផុត។',
    },
    {
      question: 'តើ `git clone` ធ្វើអ្វី?',
      options: [
        'បង្កើត Repository',
        'ទាញយក Repository',
        'លុប Repository',
        'បញ្ចូល Branch',
      ],
      correct: 1,
      explanation: '`git clone` ទាញយក Repository។',
    },
    {
      question: 'តើការពិពណ៌នា PR គួរមានអ្វី?',
      options: [
        'អត្ថបទចៃដន្យ',
        'ការពន្យល់ច្បាស់លាស់ និងភ្ជាប់ Issue',
        'ឈ្មោះ Branch',
        'បញ្ជី Commit',
      ],
      correct: 1,
      explanation: 'ការពិពណ៌នា PR គួរមានការពន្យល់ច្បាស់លាស់ និងភ្ជាប់ Issue។',
    },
    {
      question: 'តើស្លាក `help wanted` ជួយអ្វី?',
      options: [
        'បង្កើត Branch',
        'កំណត់ភារកិច្ចសម្រាប់អ្នកចូលរួម',
        'បញ្ជូនកូដ',
        'លុប Repository',
      ],
      correct: 1,
      explanation: '`help wanted` ជួយកំណត់ភារកិច្ចសម្រាប់អ្នកចូលរួម។',
    },
    {
      question: 'តើអ្នកគួរអនុវត្តតាមអាជ្ញាបណ្ណរបស់គម្រោងទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស អ្នកគួរអនុវត្តតាមអាជ្ញាបណ្ណរបស់គម្រោង។',
    },
    {
      question: 'តើអ្នកថែទាំ (Maintainers) ជួយអ្វីនៅក្នុងគម្រោង Open Source?',
      options: [
        'បង្កើត Issues',
        'ពិនិត្យ PRs និងគ្រប់គ្រងគម្រោង',
        'លុប Repository',
        'ទុកដាក់គេហទំព័រ',
      ],
      correct: 1,
      explanation: 'អ្នកថែទាំពិនិត្យ PRs និងគ្រប់គ្រងគម្រោង។',
    },
    {
      question: 'តើអ្នកគួរជ្រើសរើស Issues ដោយរបៀបណា?',
      options: [
        'Issues ចៃដន្យ',
        'Issues សមស្របនឹងជំនាញ',
        'Issues ដែលគ្មានស្លាក',
        'Issues ដែលបានបិទ',
      ],
      correct: 1,
      explanation: 'ការជ្រើសរើស Issues សមស្របនឹងជំនាញគឺជាការអនុវត្តល្អបំផុត។',
    },
  ],
  lab: {
    task: `
អនុវត្តការចូលរួមចំណែកដល់ Open Source៖
* ធ្វើការ Fork និង Clone Repository។
* បង្កើត Branch និង Commit។
* បង្កើត Pull Request។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម (ប្រើ Repository សាធារណៈណាមួយ ឧ. \`example/project\`)៖

១. Fork Repository៖
   - នៅលើ GitHub ធ្វើការ Fork \`example/project\`។
២. Clone Repository៖
   \`\`\`bash
   git clone https://github.com/yourusername/project.git
   cd project
   \`\`\`
៣. បង្កើត Branch៖
   \`\`\`bash
   git switch -c fix/issue-123
   \`\`\`
៤. កែសម្រួលឯកសារ៖
   \`\`\`bash
   echo "Fix" > file.js
   git add file.js
   git commit -m "fix: resolve issue #123"
   git push origin fix/issue-123
   \`\`\`
៥. បង្កើត Pull Request៖
   - នៅលើ GitHub បង្កើត PR ពី \`fix/issue-123\` ទៅ Original Repository។
   - ការពិពណ៌នា៖ "ជួសជុលបញ្ហា #123"។
៦. បង្កើត Issue (បើគ្មាន Issue សមស្រប)៖
   - បង្កើត Issue នៅ Original Repository៖ "ជួសជុលកំហុសនៅក្នុង file.js" ជាមួយស្លាក \`bug\`។
`,
    solution: `
# ដំណោះស្រាយ៖ ការចូលរួមចំណែកដល់ Open Source

## ជំហានទី១៖ Fork Repository
- នៅលើ GitHub ធ្វើការ Fork \`example/project\`។
- លទ្ធផល៖ Repository ត្រូវបាន Fork។

## ជំហានទី២៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/project.git
cd project
# លទ្ធផល៖ Repository ត្រូវបាន Clone
\`\`\`

## ជំហានទី៣៖ បង្កើត Branch
\`\`\`bash
git switch -c fix/issue-123
# លទ្ធផល៖ Branch ត្រូវបានបង្កើត
\`\`\`

## ជំហានទី៤៖ កែសម្រួលឯកសារ
\`\`\`bash
echo "Fix" > file.js
git add file.js
git commit -m "fix: resolve issue #123"
git push origin fix/issue-123
# លទ្ធផល៖ ការផ្លាស់ប្តូរត្រូវបាន Commit និងបញ្ជូន
\`\`\`

## ជំហានទី៥៖ បង្កើត Pull Request
- នៅលើ GitHub បង្កើត PR ពី \`fix/issue-123\` ទៅ Original Repository។
- ការពិពណ៌នា៖ "ជួសជុលបញ្ហា #123"។
- លទ្ធផល៖ PR ត្រូវបានបង្កើត

## ជំហានទី៦៖ បង្កើត Issue (បើគ្មាន Issue សមស្រប)
- បង្កើត Issue៖ "ជួសជុលកំហុសនៅក្នុង file.js" ជាមួយស្លាក \`bug\`។
- លទ្ធផល៖ Issue ត្រូវបានបង្កើត

លំហាត់នេះជួយឱ្យអ្នកស្គាល់ការចូលរួមចំណែកដល់ Open Source។
`,
  },
};

export default GitHubLesson7_3Content;