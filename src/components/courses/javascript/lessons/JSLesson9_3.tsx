import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson9_3Content: LessonContent = {
  title: 'ការគ្រប់គ្រងកំណែ (Version Control - Git)',
  objectives: [
    'ស្វែងយល់អំពី Version Control និង Git',
    'រៀនប្រើ Git Commands សំខាន់ៗ ដូចជា `init`, `add`, `commit`, `push`',
    'អនុវត្តន៍ការបង្កើត Repository និង Commit Changes',
    'ស្វែងយល់អំពី GitHub និង Remote Repositories',
    'រៀន Best Practices សម្រាប់ Git'
  ],
  content: `
# ការគ្រប់គ្រងកំណែ (Version Control - Git) 📚

---

**Git** គឺជា Version Control System ដែលជួយតាមដានការផ្លាស់ប្តូរកូដ និងសហការជាមួយអ្នកផ្សេង។

---

## 1. ការណែនាំអំពី Git
Git អនុញ្ញាតឱ្យអ្នករក្សាទុក "Snapshots" នៃកូដ។

\`\`\`bash
# បង្កើត Repository
git init
\`\`\`

---

## 2. ការបន្ថែម និង Commit
បន្ថែម Files ទៅ Staging Area និង Commit ទៅ Repository។

\`\`\`bash
git add .
git commit -m "Initial commit"
\`\`\`

---

## 3. Remote Repositories (GitHub)
ភ្ជាប់ Local Repository ទៅ GitHub។

\`\`\`bash
git remote add origin https://github.com/username/repository.git
git push -u origin main
\`\`\`

---

## 4. ការគ្រប់គ្រង Branch
បង្កើត និងប្តូរ Branch។

\`\`\`bash
git branch feature
git checkout feature
\`\`\`

---

## 5. ការប្រើ Git ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`bash
# ចាប់ផ្តើម Repository
git init

# បន្ថែម File
echo "console.log('សួស្តី!');" > index.js
git add index.js
git commit -m "បន្ថែម index.js"

# ភ្ជាប់ទៅ GitHub
git remote add origin https://github.com/username/my-repo.git
git branch -M main
git push -u origin main
\`\`\`

**លទ្ធផល:** Repository ត្រូវបានបង្កើត និង Push ទៅ GitHub។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Repository</h3>
<pre><code class="language-bash">
git init
</code></pre>
**លទ្ធផល:** បង្កើត Local Git Repository។
<hr>
<h3>ឧទាហរណ៍៖ Commit File</h3>
<pre><code class="language-bash">
echo "console.log('សួស្តី!');" > index.js
git add index.js
git commit -m "បន្ថែម index.js"
</code></pre>
**លទ្ធផល:** File \`index.js\` ត្រូវបាន Commit។
`
  ],
  quiz: [
    {
      question: 'តើ Git គឺជាអ្វី?',
      options: [
        'Version Control System',
        'JavaScript Framework',
        'Database',
        'API Library'
      ],
      correct: 0,
      explanation: 'Git គឺជា Version Control System សម្រាប់តាមដានការផ្លាស់ប្តូរកូដ។'
    },
    {
      question: 'តើ Command `git init` ធ្វើអ្វី?',
      options: [
        'បង្កើត Repository',
        'បន្ថែម File',
        'Commit Changes',
        'Push ទៅ GitHub'
      ],
      correct: 0,
      explanation: '`git init` បង្កើត Local Git Repository។'
    },
    {
      question: 'តើ `git add .` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Files ទាំងអស់ទៅ Staging',
        'Commit Changes',
        'Push ទៅ GitHub',
        'បង្កើត Branch'
      ],
      correct: 0,
      explanation: '`git add .` បន្ថែម Files ទាំងអស់ទៅ Staging Area។'
    },
    {
      question: 'តើ `git commit -m "message"` ធ្វើអ្វី?',
      options: [
        'រក្សាទុក Changes ជាមួយ Message',
        'បន្ថែម File',
        'Push ទៅ GitHub',
        'បង្កើត Repository'
      ],
      correct: 0,
      explanation: '`git commit` រក្សាទុក Changes ទៅ Repository។'
    },
    {
      question: 'តើ `git push` ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ញើ Commits ទៅ Remote Repository',
        'បន្ថែម File',
        'បង្កើត Branch',
        'លុប Repository'
      ],
      correct: 0,
      explanation: '`git push` ផ្ញើ Commits ទៅ Remote Repository។'
    },
    {
      question: 'តើ `git remote add origin` ធ្វើអ្វី?',
      options: [
        'ភ្ជាប់ទៅ Remote Repository',
        'បង្កើត Branch',
        'បន្ថែម File',
        'Commit Changes'
      ],
      correct: 0,
      explanation: '`git remote add origin` ភ្ជាប់ Local Repository ទៅ Remote។'
    },
    {
      question: 'តើ `git checkout` ប្រើសម្រាប់អ្វី?',
      options: [
        'ប្តូរ Branch',
        'បន្ថែម File',
        'Push Commits',
        'បង្កើត Repository'
      ],
      correct: 0,
      explanation: '`git checkout` ប្តូរ Branch ឬ Restore Files។'
    },
    {
      question: 'តើ Best Practice នៅក្នុង Git គឺជាអ្វី?',
      options: [
        'សរសេរ Commit Messages ច្បាស់លាស់',
        'ប្រើ Single Branch',
        'ជៀសវាង Commits',
        'លុប Repository'
      ],
      correct: 0,
      explanation: 'Commit Messages ច្បាស់លាស់ជួយតាមដានការផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ GitHub គឺជាអ្វី?',
      options: [
        'Platform សម្រាប់ Remote Repositories',
        'JavaScript Framework',
        'Database',
        'API Library'
      ],
      correct: 0,
      explanation: 'GitHub ជា Platform សម្រាប់ Hosting Remote Repositories។'
    },
    {
      question: 'តើ `git branch` ធ្វើអ្វី?',
      options: [
        'បង្កើត ឬបង្ហាញ Branch',
        'បន្ថែម File',
        'Commit Changes',
        'Push ទៅ GitHub'
      ],
      correct: 0,
      explanation: '`git branch` បង្កើត ឬបង្ហាញ Branch។'
    }
  ],
  lab: {
    task: `
បង្កើត Git Repository និងធ្វើការ Commit និង Push ទៅ GitHub។

**តម្រូវការ:**

1. **Setup:**
   - តម្លើង Git (https://git-scm.com)។
   - បង្កើត GitHub Account និង Repository ថ្មី (ឧ. \`my-repo\`)។

2. **Git Commands:**
   - បង្កើត Folder ថ្មី (ឧ. \`my-project\`) និងចូលទៅក្នុង Folder។
   - ប្រើ \`git init\` ដើម្បីបង្កើត Local Repository។
   - បង្កើត File \`index.js\` ដែលមាន \`console.log('សួស្តីពី Git!');\`។
   - ប្រើ \`git add index.js\` ដើម្បីបន្ថែម File ទៅ Staging។
   - ប្រើ \`git commit -m "បន្ថែម index.js"\` ដើម្បី Commit។
   - ភ្ជាប់ទៅ GitHub Repository ដោយប្រើ \`git remote add origin https://github.com/username/my-repo.git\`។
   - ប្តូរ Branch ទៅ \`main\` ដោយ \`git branch -M main\`។
   - Push Commits ទៅ GitHub ដោយ \`git push -u origin main\`។

3. **Documentation:**
   - បង្កើត File \`README.md\` ដែលមានអត្ថបទខាងក្រោម។
   - បន្ថែម និង Commit \`README.md\` ដោយ Message "បន្ថែម README"។
   - Push ទៅ GitHub។

**ការណែនាំ:** 
- ប្រើ Terminal ឬ Command Prompt។
- ពិនិត្យ Repository នៅ GitHub ដើម្បីឃើញ Files។
`,
    solution: `
# នៅក្នុង Terminal
mkdir my-project
cd my-project
git init
echo "console.log('សួស្តីពី Git!');" > index.js
git add index.js
git commit -m "បន្ថែម index.js"
echo "# My Project\nគម្រោងសាមញ្ញសម្រាប់រៀន Git" > README.md
git add README.md
git commit -m "បន្ថែម README"
git remote add origin https://github.com/username/my-repo.git
git branch -M main
git push -u origin main
`
  }
};

export default JSLesson9_3Content;