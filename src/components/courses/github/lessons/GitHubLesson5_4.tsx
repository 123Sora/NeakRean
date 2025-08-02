import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson5_4Content: LessonContent = {
  title: 'GitHub Gist និង Markdown',
  objectives: [
    'យល់ពីអ្វីជា GitHub Gist និងសារៈសំខាន់របស់វា',
    'បង្កើត និងចែករំលែក Gist',
    'ប្រើ Markdown សម្រាប់ការសរសេរឯកសារ',
    'កែសម្រួលនិងគ្រប់គ្រង Gist',
    'បង្កើត Public និង Secret Gist',
    'ប្រើ Markdown នៅ README និង Issues',
    'ស្គាល់ Markdown Syntax (Headings, Lists, Code Blocks)',
    'ស្គាល់ Best Practices សម្រាប់ Gist និង Markdown',
  ],
  content: `
# GitHub Gist និង Markdown 📝

---

GitHub Gist និង Markdown ជាឧបករណ៍សម្រាប់ចែករំលែកកូដ និងសរសេរឯកសារប្រកបដោយភាពងាយស្រួល។

---

## 1. GitHub Gist ជាអ្វី? 🤔

* **Gist:** វិធីសាមញ្ញសម្រាប់ចែករំលែក Code Snippets ឬ Notes។
* មាន 2 ប្រភេទ: Public (គ្រប់គ្នាមើលបាន) និង Secret (អ្នកមាន Link មើលបាន)។
* បង្កើត Gist:
  1. ចូលទៅ https://gist.github.com។
  2. បញ្ចូល Description និង Files។
  3. ជ្រើស Public ឬ Secret។

---

## 2. Markdown ជាអ្វី? ✍️

* **Markdown:** ទម្រង់សរសេរឯកសារសាមញ្ញ ប្រើនៅ README, Issues, Gist។
* Syntax:
  - Headings: \`# Heading 1\`, \`## Heading 2\`
  - Lists: \`- Item\` (Unordered), \`1. Item\` (Ordered)
  - Code: \`\`\`code\`\`\` (Block), \`code\` (Inline)
  - Links: \`[Text](URL)\`
  - Images: \`![Alt](URL)\`

---

## 3. ការប្រើ Markdown នៅ GitHub 📄

* **README.md:** បង្ហាញនៅ Repository Homepage។
* **Issues/PRs:** ប្រើ Markdown សម្រាប់ Description និង Comments។
* **Gist:** ប្រើ Markdown សម្រាប់ Notes។

---

## 4. ការគ្រប់គ្រង Gist 🛠️

* កែសម្រួល Gist: ចុច Edit នៅ Gist Page។
* លុប Gist: ចុច Delete។
* Fork/Star Gist: សម្រាប់សហការឬរក្សាទុក។

---

## 5. Best Practices 📝

* ប្រើ Public Gist សម្រាប់ Open Source Code។
* ប្រើ Secret Gist សម្រាប់ទិន្នន័យឯកជន។
* សរសេរ Markdown ឱ្យច្បាស់ និងរៀបចំ។
* បន្ថែម Description នៅ Gist។

---

## 6. ឧទាហរណ៍នៃ Gist និង Markdown 📋

1. បង្កើត Gist:
   - ចូលទៅ https://gist.github.com។
   - File: \`script.js\`, Content: \`console.log("Hello");\`
   - Description: "Simple JavaScript Log"។
   - ជ្រើស Public។
2. បង្កើត README.md:
   \`\`\`markdown
   # My Project
   A simple project.
   - Feature 1
   - Feature 2
   \`\`\`code
   console.log("Hello");
   \`\`\`
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Public Gist

# នៅ https://gist.github.com:
# File: hello.js
# Content:
\`\`\`javascript
console.log("Hello, Gist!");
\`\`\`
# Description: "Simple JavaScript Gist"
# ជ្រើស: Public
# លទ្ធផល: Gist created at https://gist.github.com/yourusername/...

# ឧទាហរណ៍ ២: Markdown នៅ README

\`\`\`markdown
# Welcome
This is my project.
## Features
- Easy to use
- Fast
## Example
\`\`\`javascript
console.log("Hello");
\`\`\`
\`\`\`
# លទ្ធផល: Formatted README displayed

# ឧទាហរណ៍ ៣: Secret Gist

# នៅ https://gist.github.com:
# File: secret.txt
# Content: "My secret note"
# Description: "Private Note"
# ជ្រើស: Secret
# លទ្ធផល: Secret Gist created
`,
  ],
  quiz: [
    {
      question: 'តើ GitHub Gist ជាអ្វី?',
      options: [
        'Static Website Hosting',
        'Code Snippet Sharing',
        'CI/CD Workflow',
        'Task Management',
      ],
      correct: 1,
      explanation: 'Gist ជាវិធីចែករំលែក Code Snippets។',
    },
    {
      question: 'តើ Gist មានប្រភេទអ្វីខ្លះ?',
      options: [
        'Public និង Secret',
        'Private និង Protected',
        'Read និង Write',
        'Main និង Feature',
      ],
      correct: 0,
      explanation: 'Gist មាន Public និង Secret។',
    },
    {
      question: 'តើ Markdown ប្រើនៅឯណានៅ GitHub?',
      options: [
        'README, Issues, Gist',
        'Workflow Files',
        'Branch Protection',
        'GitHub Pages',
      ],
      correct: 0,
      explanation: 'Markdown ប្រើនៅ README, Issues, Gist�।',
    },
    {
      question: 'តើ Syntax សម្រាប់ Heading នៅ Markdown គឺជាអ្វី?',
      options: [
        '* Heading',
        '# Heading',
        '- Heading',
        '`Heading`',
      ],
      correct: 1,
      explanation: '`# Heading` ជា Syntax សម្រាប់ Heading។',
    },
    {
      question: 'តើអ្នកបង្កើត Gist នៅឯណា?',
      options: [
        'Repository Settings',
        'https://gist.github.com',
        'Actions Tab',
        'Projects Tab',
      ],
      correct: 1,
      explanation: 'បង្កើត Gist នៅ https://gist.github.com។',
    },
    {
      question: 'តើ Secret Gist អាចមើលបានដោយនរណា?',
      options: [
        'គ្រប់គ្នា',
        'អ្នកមាន Link',
        'តែ Owner',
        'តែ Collaborators',
      ],
      correct: 1,
      explanation: 'Secret Gist មើលបានដោយអ្នកមាន Link។',
    },
    {
      question: 'តើ Markdown Code Block ប្រើ Syntax អ្វី?',
      options: [
        '```code```',
        '`code`',
        '*code*',
        '#code#',
      ],
      correct: 0,
      explanation: '```code``` ជា Syntax សម្រាប់ Code Block។',
    },
    {
      question: 'តើអ្នកអាចកែ Gist បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Gist អាចកែបាន។',
    },
    {
      question: 'តើ README.md បង្ហាញនៅឯណា?',
      options: [
        'Issues Tab',
        'Repository Homepage',
        'Actions Tab',
        'Gist Page',
      ],
      correct: 1,
      explanation: 'README.md បង្ហាញនៅ Repository Homepage។',
    },
    {
      question: 'តើអ្នកអាច Fork Gist បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Gist អាច Fork បាន។',
    },
    {
      question: 'តើ Syntax សម្រាប់ Link នៅ Markdown គឺជាអ្វី?',
      options: [
        '[Text](URL)',
        '<Text>URL',
        '*Text*URL',
        '#Text#URL',
      ],
      correct: 0,
      explanation: '`[Text](URL)` ជា Syntax សម្រាប់ Link�।',
    },
    {
      question: 'តើ Public Gist អាចមើលបានដោយនរណា?',
      options: [
        'គ្រប់គ្នា',
        'អ្នកមាន Link',
        'តែ Owner',
        'តែ Collaborators',
      ],
      correct: 0,
      explanation: 'Public Gist មើលបានដោយគ្រប់គ្នា។',
    },
    {
      question: 'តើ Markdown អាចប្រើនៅ Issues បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Markdown អាចប្រើនៅ Issues។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ Gist គឺជាអ្វី?',
      options: [
        'ប្រើ Secret Gist សម្រាប់ Public Code',
        'បន្ថែម Description នៅ Gist',
        'មិនប្រើ Markdown',
        'លុប Gist ភ្លាមៗ',
      ],
      correct: 1,
      explanation: 'បន្ថែម Description នៅ Gist ជា Best Practice�।',
    },
    {
      question: 'តើ Markdown Image Syntax គឺជាអ្វី?',
      options: [
        '![Alt](URL)',
        '[Alt](URL)',
        '*Alt*URL',
        '#Alt#URL',
      ],
      correct: 0,
      explanation: '`![Alt](URL)` ជា Syntax សម្រាប់ Image។',
    },
    {
      question: 'តើអ្នកអាច Star Gist បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Gist អាច Star បាន។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ GitHub Gist និង Markdown៖
* បង្កើត Public Gist។
* បង្កើត README.md ជាមួយ Markdown។
* កែសម្រួល Gist។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Public Gist:
   - ចូលទៅ https://gist.github.com។
   - File: \`hello.js\`, Content:
     \`\`\`javascript
     console.log("Hello, Gist!");
     \`\`\`
   - Description: "Simple JavaScript Gist"។
   - ជ្រើស Public។
2. បង្កើត Repository **my-gist-repo** នៅ GitHub។
3. Clone Repository:
   \`\`\`bash
   git clone https://github.com/yourusername/my-gist-repo.git
   cd my-gist-repo
   \`\`\`
4. បង្កើត \`README.md\`:
   \`\`\`markdown
   # My Project
   A simple project.
   ## Features
   - Easy to use
   - Fast
   ## Example
   \`\`\`javascript
   console.log("Hello");
   \`\`\`
   \`\`\`
5. Commit និង Push:
   \`\`\`bash
   git add README.md
   git commit -m "docs: add README with Markdown"
   git push origin main
   \`\`\`
6. កែសម្រួល Gist:
   - ចូលទៅ Gist នៅ https://gist.github.com/yourusername/...។
   - ចុច Edit, បន្ថែម Comment: \`// Updated log\` នៅ \`hello.js\`។
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ GitHub Gist និង Markdown

## ជំហានទី ១៖ បង្កើត Public Gist
- ចូលទៅ https://gist.github.com។
- File: \`hello.js\`, Content:
  \`\`\`javascript
  console.log("Hello, Gist!");
  \`\`\`
- Description: "Simple JavaScript Gist"។
- ជ្រើស Public។
- លទ្ធផល: Gist created at https://gist.github.com/yourusername/...

## ជំហានទី ២៖ បង្កើត Repository
- បង្កើត **my-gist-repo** នៅ GitHub។
- លទ្ធផល: Repository created

## ជំហានទី ៣៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-gist-repo.git
cd my-gist-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៤៖ បង្កើត README.md
- បង្កើត \`README.md\`:
  \`\`\`markdown
  # My Project
  A simple project.
  ## Features
  - Easy to use
  - Fast
  ## Example
  \`\`\`javascript
  console.log("Hello");
  \`\`\`
  \`\`\`
- លទ្ធផល: README created with Markdown

## ជំហានទី ៥៖ Commit និង Push
\`\`\`bash
git add README.md
git commit -m "docs: add README with Markdown"
git push origin main
# លទ្ធផល: README pushed to main
\`\`\`

## ជំហានទី ៦៖ កែសម្រួល Gist
- ចូលទៅ Gist នៅ https://gist.github.com/yourusername/...។
- ចុច Edit, កែ \`hello.js\` ទៅ:
  \`\`\`javascript
  // Updated log
  console.log("Hello, Gist!");
  \`\`\`
- លទ្ធផល: Gist updated

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការប្រើ GitHub Gist និង Markdown។
`,
  },
};

export default GitHubLesson5_4Content;