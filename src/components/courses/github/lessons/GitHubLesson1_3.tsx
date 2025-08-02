import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson1_3Content: LessonContent = {
  title: 'Git Basic Commands (មូលដ្ឋានគ្រឹះ)',
  objectives: [
    'យល់អំពី Git Lifecycle (Working Directory, Staging Area, Local Repository)',
    'ប្រើ `git status` ដើម្បីពិនិត្យស្ថានភាព',
    'ប្រើ `git add` ដើម្បីបន្ថែមឯកសារទៅ Staging Area',
    'ប្រើ `git commit` ដើម្បីរក្សាទុកការផ្លាស់ប្តូរ',
    'សរសេរ Commit Messages ល្អ (Conventional Commits)',
    'ប្រើ `git log` ដើម្បីមើល Commit History',
    'ប្រើ `git diff` ដើម្បីមើលភាពខុសគ្នានៃការផ្លាស់ប្តូរ',
    'ប្រើ `git rm` ដើម្បីលុបឯកសារ',
    'ប្រើ `git mv` ដើម្បីប្តូរឈ្មោះឬផ្លាស់ទីឯកសារ',
  ],
  content: `
# Git Basic Commands (មូលដ្ឋានគ្រឹះ) 📝

---

មេរៀននេះនឹងណែនាំអ្នកអំពី Commands មូលដ្ឋាននៃ Git ដែលចាំបាច់សម្រាប់ការគ្រប់គ្រង Source Code។

---

## 1. Git Lifecycle: Working Directory, Staging Area, Local Repository 🔄

Git មានបីផ្នែកសំខាន់៖
* **Working Directory:** ជាថតដែលអ្នកកំពុងធ្វើការលើឯកសារ។
* **Staging Area:** ជាកន្លែងសម្រាប់រៀបចំឯកសារមុននឹង Commit។
* **Local Repository:** ជាកន្លែងរក្សាទុកប្រវត្តិការផ្លាស់ប្តូរទាំងអស់។

លំហូរ៖
1. កែប្រែឯកសារនៅ Working Directory។
2. បន្ថែមឯកសារទៅ Staging Area ដោយ \`git add\`។
3. លက្សាទុកការផ្លាស់ប្តូរទៅ Local Repository ដោយ \`git commit\`។

---

## 2. Git Basic Commands 🖥️

* **git status:**
  \`\`\`bash
  git status
  \`\`\`
  បង្ហាញស្ថានភាពបច្ចុប្បន្ននៃ Repository (ឯកសារដែលកែប្រែ ឬនៅ Staging Area)។

* **git add:**
  \`\`\`bash
  git add <file>
  git add .
  \`\`\`
  បន្ថែមឯកសារទៅ Staging Area។ \`git add .\` បន្ថែមឯកសារទាំងអស់។

* **git commit:**
  \`\`\`bash
  git commit -m "Your commit message"
  \`\`\`
  រក្សាទុកការផ្លាស់ប្តូរពី Staging Area ទៅ Local Repository។

* **Good Commit Messages (Conventional Commits):**
  - សរសេរសារខ្លី ច្បាស់លាស់។
  - ឧទាហរណ៍៖ \`feat: add login page\`, \`fix: resolve bug in user profile\`។
  - ប្រើប្រាស់បុព្វបទដូចជា \`feat\`, \`fix\`, \`docs\`, \`style\`, \`refactor\`, \`test\`, \`chore\`។

* **git log:**
  \`\`\`bash
  git log
  git log --oneline
  \`\`\`
  បង្ហាញ Commit History។ \`--oneline\` បង្ហាញសង្ខេប។

* **git diff:**
  \`\`\`bash
  git diff
  git diff <file>
  \`\`\`
  បង្ហាញភាពខុសគ្នារវាង Working Directory និង Staging Area។

* **git rm:**
  \`\`\`bash
  git rm <file>
  \`\`\`
  លុបឯកសារពី Working Directory និង Staging Area។

* **git mv:**
  \`\`\`bash
  git mv <old-name> <new-name>
  \`\`\`
  ប្តូរឈ្មោះឬផ្លាស់ទីឯកសារ។

---

## 3. ឧទាហរណ៍នៃការប្រើ Commands 📋

1. បង្កើតឯកសារ \`index.html\` និងកែប្រែ។
2. ពិនិត្យស្ថានភាព៖
   \`\`\`bash
   git status
   # លទ្ធផល: index.html ជា Untracked file
   \`\`\`
3. បន្ថែមឯកសារទៅ Staging Area៖
   \`\`\`bash
   git add index.html
   \`\`\`
4. រក្សាទុកការផ្លាស់ប្តូរ៖
   \`\`\`bash
   git commit -m "feat: add index.html"
   \`\`\`
5. មើល Commit History៖
   \`\`\`bash
   git log --oneline
   # លទ្ធផល: abc123 feat: add index.html
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការបន្ថែមនិង Commit ឯកសារ

\`\`\`bash
# បង្កើតឯកសារ
echo "<h1>Hello World</h1>" > index.html

# ពិនិត្យស្ថានភាព
git status
# លទ្ធផល: Untracked files: index.html

# បន្ថែមឯកសារទៅ Staging Area
git add index.html

# Commit
git commit -m "feat: add index.html"
# លទ្ធផល: [main abc123] feat: add index.html
\`\`\`

# ឧទាហរណ៍ ២: ការលុបឯកសារ

\`\`\`bash
# លុបឯកសារ
git rm old-file.txt

# Commit
git commit -m "chore: remove old-file.txt"
# លទ្ធផល: [main def456] chore: remove old-file.txt
\`\`\`

# ឧទាហរណ៍ ៣: ការប្តូរឈ្មោះឯកសារ

\`\`\`bash
# ប្តូរឈ្មោះ
git mv style.css styles.css

# Commit
git commit -m "refactor: rename style.css to styles.css"
# លទ្ធផល: [main ghi789] refactor: rename style.css to styles.css
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ Git Lifecycle មានផ្នែកសំខាន់ប៉ុន្មាន?',
      options: ['១', '២', '៣', '៤'],
      correct: 2,
      explanation: 'Git Lifecycle មាន៖ Working Directory, Staging Area, និង Local Repository។',
    },
    {
      question: 'តើ Command `git status` ធ្វើអ្វី?',
      options: [
        'បន្ថែមឯកសារទៅ Staging Area',
        'បង្ហាញស្ថានភាព Repository',
        'រក្សាទុកការផ្លាស់ប្តូរ',
        'បង្ហាញ Commit History',
      ],
      correct: 1,
      explanation: '`git status` បង្ហាញស្ថានភាពបច្ចុប្បន្ននៃ Repository។',
    },
    {
      question: 'តើ `git add .` ធ្វើអ្វី?',
      options: [
        'បន្ថែមឯកសារមួយទៅ Staging Area',
        'បន្ថែមឯកសារទាំងអស់ទៅ Staging Area',
        'រក្សាទុកការផ្លាស់ប្តូរ',
        'លុបឯកសារទាំងអស់',
      ],
      correct: 1,
      explanation: '`git add .` បន្ថែមឯកសារទាំងអស់ទៅ Staging Area។',
    },
    {
      question: 'តើ Command `git commit` ត្រូវការអ្វី?',
      options: ['File Name', 'Commit Message', 'Branch Name', 'Remote URL'],
      correct: 1,
      explanation: '`git commit` ត្រូវការ Commit Message ដើម្បីពិពណ៌នាការផ្លាស់ប្តូរ�।',
    },
    {
      question: 'តើអ្វីជា Conventional Commits?',
      options: [
        'ការប្រើ GUI សម្រាប់ Commit',
        'ការសរសេរ Commit Messages ដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់',
        'ការ Commit ដោយគ្មាន Message',
        'ការ Commit ទៅ Remote Repository',
      ],
      correct: 1,
      explanation: 'Conventional Commits គឺជាការសរសេរ Commit Messages ដែលមានរចនាសម្ព័ន្ធ�।',
    },
    {
      question: 'តើ Command `git log --oneline` ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Commit History សង្ខេប',
        'បង្ហាញភាពខុសគ្នានៃឯកសារ',
        'បន្ថែមឯកសារទៅ Staging Area',
        'លុប Commit ចុងក្រោយ',
      ],
      correct: 0,
      explanation: '`git log --oneline` បង្ហាញ Commit History ក្នុងទម្រង់សង្ខេប។',
    },
    {
      question: 'តើ `git diff` បង្ហាញអ្វី?',
      options: [
        'Commit History',
        'ភាពខុសគ្នារវាង Working Directory និង Staging Area',
        'ស្ថានភាព Repository',
        'ឯកសារទាំងអស់នៅក្នុង Repository',
      ],
      correct: 1,
      explanation: '`git diff` បង្ហាញភាពខុសគ្នារវាង Working Directory និង Staging Area។',
    },
    {
      question: 'តើ `git rm` ធ្វើអ្វី?',
      options: [
        'ប្តូរឈ្មោះឯកសារ',
        'លុបឯកសារពី Working Directory និង Staging Area',
        'បន្ថែមឯកសារ',
        'បង្ហាញ Commit History',
      ],
      correct: 1,
      explanation: '`git rm` លុបឯកសារពី Working Directory និង Staging Area១។',
    },
    {
      question: 'តើ `git mv` ប្រើសម្រាប់អ្វី?',
      options: [
        'បន្ថែមឯកសារ',
        'ប្តូរឈ្មោះឬផ្លាស់ទីឯកសារ',
        'លុបឯកសារ',
        'បង្ហាញភាពខុសគ្នា',
      ],
      correct: 1,
      explanation: '`git mv` ប្តូរឈ្មោះឬផ្លាស់ទីឯកសារ។',
    },
    {
      question: 'តើ Staging Area ជាអ្វី?',
      options: [
        'កន្លែងសម្រាប់រក្សាទុក Commit History',
        'កន្លែងសម្រាប់រៀបចំឯកសារមុននឹង Commit',
        'ថតនៅលើ Remote Server',
        'ឧបករណ៍សម្រាប់សរសេរកូដ',
      ],
      correct: 1,
      explanation: 'Staging Area ជាកន្លែងសម្រាប់រៀបចំឯកសារមុននឹង Commit។',
    },
    {
      question: 'តើ Commit Message គួរមានលក្ខណៈដូចម្តេច?',
      options: [
        'វែងនិងលម្អិត',
        'ខ្លី ច្បាស់លាស់ និងពិពណ៌នាការផ្លាស់ប្តូរ',
        'មិនចាំបាច់សរសេរ',
        'សរសេរជាលេខ',
      ],
      correct: 1,
      explanation: 'Commit Message គួរខ្លី ច្បាស់លាស់ និងពិពណ៌នាការផ្លាស់ប្តូរ។',
    },
    {
      question: 'តើឧទាហរណ៍នៃ Conventional Commit គឺជាអ្វី?',
      options: [
        'Updated code',
        'feat: add login page',
        'Commit on Monday',
        'Fixed something',
      ],
      correct: 1,
      explanation: '`feat: add login page` ជាឧទាហរណ៍នៃ Conventional Commit។',
    },
    {
      question: 'តើ `git log` បង្ហាញអ្វី?',
      options: [
        'ភាពខុសគ្នានៃឯកសារ',
        'Commit History',
        'ស្ថានភាព Repository',
        'ឯកសារនៅ Staging Area',
      ],
      correct: 1,
      explanation: '`git log` បង្ហាញ Commit History។',
    },
    {
      question: 'តើអ្នកត្រូវធ្វើអ្វីមុននឹងប្រើ `git commit`?',
      options: [
        'ប្រើ `git status`',
        'ប្រើ `git add`',
        'ប្រើ `git log`',
        'ប្រើ `git diff`',
      ],
      correct: 1,
      explanation: 'អ្នកត្រូវប្រើ `git add` ដើម្បីបន្ថែមឯកសារទៅ Staging Area មុននឹង Commit។',
    },
    {
      question: 'តើ Local Repository ជាអ្វី?',
      options: [
        'Repository នៅលើ GitHub',
        'កន្លែងរក្សាទុកប្រវត្តិការផ្លាស់ប្តូរនៅលើកុំព្យូទ័រ',
        'ថតសម្រាប់សរសេរកូដ',
        'Server សម្រាប់សហការ',
      ],
      correct: 1,
      explanation: 'Local Repository ជាកន្លែងរក្សាទុកប្រវត្តិការផ្លាស់ប្តូរនៅលើកុំព្យូទ័រ។',
    },
    {
      question: 'តើអ្នកអាចប្រើ `git diff` ដើម្បីមើលភាពខុសគ្នារវាងឯកសារជាក់លាក់បានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Staging Area', 'តែនៅ Local Repository'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ `git diff <file>` អាចបង្ហាញភាពខុសគ្នារបស់ឯកសារជាក់លាក់។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ Git Basic Commands៖
* បង្កើតឯកសារ បន្ថែម និង Commit។
* លុបនិងប្តូរឈ្មោះឯកសារ។
* ពិនិត្យ Commit History និងភាពខុសគ្នា១។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើតថតគម្រោងថ្មីឈ្មោះ **'git-basics'** និងចាប់ផ្តើម Repository៖
   \`\`\`bash
   mkdir git-basics
   cd git-basics
   git init
   \`\`\`
2. បង្កើតឯកសារ **'index.html'** ជាមួយខ្លឹមសារ៖
   \`\`\`html
   <h1>Welcome to Git</h1>
   \`\`\`
3. បន្ថែមនិង Commit៖
   \`\`\`bash
   git add index.html
   git commit -m "feat: add index.html"
   \`\`\`
4. បង្កើតឯកសារ **'style.css'** ជាមួយខ្លឹមសារ៖
   \`\`\`css
   body { background-color: lightblue; }
   \`\`\`
   Commit Message: **"feat: add style.css"**
5. កែប្រែ **'index.html'** ដោយបន្ថែម៖
   \`\`\`html
   <p>Learning Git Basics</p>
   \`\`\`
   ពិនិត្យភាពខុសគ្នា៖ **\`git diff\`**, បន្ថែម និង Commit Message: **"feat: update index.html with paragraph"**
6. ប្តូរឈ្មោះ **'style.css'** ទៅ **'styles.css'** ដោយ៖
   \`\`\`bash
   git mv style.css styles.css
   git commit -m "refactor: rename style.css to styles.css"
   \`\`\`
7. លុប **'index.html'** ដោយ៖
   \`\`\`bash
   git rm index.html
   git commit -m "chore: remove index.html"
   \`\`\`
8. ពិនិត្យ Commit History៖ **\`git log --oneline\`**
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ Git Basic Commands

បន្ទាប់ពីអនុវត្តជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផល៖

## ជំហានទី ១៖ បង្កើត Repository
\`\`\`bash
mkdir git-basics
cd git-basics
git init
# លទ្ធផល: Initialized empty Git repository in /path/to/git-basics/.git/
\`\`\`

## ជំហានទី ២ និង ៣៖ បង្កើតនិង Commit index.html
\`\`\`bash
echo "<h1>Welcome to Git</h1>" > index.html
git add index.html
git commit -m "feat: add index.html"
# លទ្ធផល: [main abc123] feat: add index.html
\`\`\`

## ជំហានទី ៤៖ បង្កើតនិង Commit style.css
\`\`\`bash
echo "body { background-color: lightblue; }" > style.css
git add style.css
git commit -m "feat: add style.css"
# លទ្ធផល: [main def456] feat: add style.css
\`\`\`

## ជំហានទី ៥៖ កែប្រែ index.html
\`\`\`bash
echo "<p>Learning Git Basics</p>" >> index.html
git diff
# លទ្ធផល: +<p>Learning Git Basics</p>
git add index.html
git commit -m "feat: update index.html with paragraph"
# លទ្ធផល: [main ghi789] feat: update index.html with paragraph
\`\`\`

## ជំហានទី ៦៖ ប្តូរឈ្មោះ style.css
\`\`\`bash
git mv style.css styles.css
git commit -m "refactor: rename style.css to styles.css"
# លទ្ធផល: [main jkl012] refactor: rename style.css to styles.css
\`\`\`

## ជំហានទី ៧៖ លុប index.html
\`\`\`bash
git rm index.html
git commit -m "chore: remove index.html"
# លទ្ធផល: [main mno345] chore: remove index.html
\`\`\`

## ជំហានទី ៨៖ ពិនិត្យ Commit History
\`\`\`bash
git log --oneline
# លទ្ធផល:
# mno345 chore: remove index.html
# jkl012 refactor: rename style.css to styles.css
# ghi789 feat: update index.html with paragraph
# def456 feat: add style.css
# abc123 feat: add index.html
\`\`\`

លំហាត់នេះបានជួយអ្នកឱ្យអនុវត្ត Git Basic Commands និងយល់ពី Git Lifecycle។
`,
  },
};

export default GitHubLesson1_3Content;