import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson6_1Content: LessonContent = {
  title: 'Git Stashing (ការរក្សាទុកការផ្លាស់ប្តូរបណ្ដោះអាសន្ន)',
  objectives: [
    'យល់ពីអ្វីជា Git Stashing និងសារៈសំខាន់របស់វា',
    'ប្រើពាក្យបញ្ជា `git stash` ដើម្បីរក្សាទុកការផ្លាស់ប្តូរ',
    'មើលបញ្ជី Stash ជាមួយ `git stash list`',
    'នាំ Stash មកប្រើវិញជាមួយ `git stash apply` និង `git stash pop`',
    'លុប Stash ជាមួយ `git stash drop` និង `git stash clear`',
    'បង្កើត Stash ជាមួយឈ្មោះជាក់លាក់',
    'គ្រប់គ្រងការផ្លាីប្តូរនៅពេលធ្វើការលើ Branches ផ្សេងគ្នា',
    'ស្គាល់ Best Practices សម្រាប់ Git Stashing',
  ],
  content: `
# Git Stashing (ការរក្សាទុកការផ្លាស់ប្តូរបណ្ដោះអាសន្ន) 📦

---

Git Stashing ជាមុខងារនៅក្នុង Git ដែលអនុញ្ញាតឱ្យអ្នករក្សាទុកការផ្លាស់ប្តូរបណ្ដោះអាសន្ន ដើម្បីប្តូរទៅធ្វើការលើ Branch ផ្សេង។

---

## 1. Git Stash ជាអ្វី? 🤔

* **Stash:** ទុកការផ្លាស់ប្តូរនៅ Working Directory និង Staging Area ទុកបណ្ដោះអាសន្ន។
* ប្រើនៅពេលអ្នកមិនចង់ Commit ការផ្លាីប្តូរ ប៉ុន្តែត្រូវប្តូរទៅ Branch ផ្សេង។
* Stash ត្រូវបានរក្សាទុកជា Stack (LIFO - Last In, First Out)។

---

## 2. ការប្រើ Git Stash 🛠️

* **រក្សាទុកការផ្លាស់ប្តូរ:**
  \`\`\`bash
  git stash
  \`\`\`
  - រក្សាទុកការផ្លាស់ប្តូរទាំងអស់នៅ Working Directory និង Staging Area។
* **បន្ថែមឈ្មោះ Stash:**
  \`\`\`bash
  git stash save "work-in-progress"
  \`\`\`

---

## 3. មើលបញ្ជី Stash 📋

* **បង្ហាញ Stash ទាំងអស់:**
  \`\`\`bash
  git stash list
  \`\`\`
  - លទ្ធផល: \`stash@{0}: WIP on main: ...\`, \`stash@{1}: ...\`

---

## 4. នាំ Stash មកប្រើវិញ 🔄

* **នាំ Stash មកប្រើ (រក្សាទុក Stash):**
  \`\`\`bash
  git stash apply
  \`\`\`
  - នាំ Stash ចុងក្រោយមកប្រើ។
* **នាំ Stash មកប្រើ និងលុប (Pop):**
  \`\`\`bash
  git stash pop
  \`\`\`
  - នាំ Stash មកប្រើ និងលុប Stash ចេញពី Stack។
* **នាំ Stash ជាក់លាក់:**
  \`\`\`bash
  git stash apply stash@{1}
  \`\`\`

---

## 5. លុប Stash 🗑️

* **លុប Stash ជាក់លាក់:**
  \`\`\`bash
  git stash drop stash@{1}
  \`\`\`
* **លុប Stash ទាំងអស់:**
  \`\`\`bash
  git stash clear
  \`\`\`

---

## 6. Best Practices 📝

* បន្ថែមឈ្មោះ Stash ដើម្បីងាយស្រួលគ្រប់គ្រង។
* ប្រើ \`git stash list\` ដើម្បីត្រួតពិនិត្យ Stash។
* ប្រើ \`git stash apply\` ជំនួស \`pop\` ដើម្បីរក្សាទុក Stash។
* Commit ការផ្លាស់ប្តូរនៅពេលអាចធ្វើបាន ជំនួសការពឹងផ្អែកលើ Stash។

---

## 7. ឧទាហរណ៍នៃ Git Stashing 📋

1. រក្សាទុកការផ្លាស់ប្តូរ:
   \`\`\`bash
   echo "Feature" > feature.txt
   git add feature.txt
   git stash
   \`\`\`
2. ប្តូរទៅ Branch ផ្សេង:
   \`\`\`bash
   git switch develop
   \`\`\`
3. នាំ Stash មកប្រើ:
   \`\`\`bash
   git switch main
   git stash pop
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: រក្សាទុកការផ្លាស់ប្តូរ

\`\`\`bash
echo "Feature" > feature.txt
git add feature.txt
git stash save "Feature work"
# លទ្ធផល: Stash created
\`\`\`

# ឧទាហរណ៍ ២: មើលបញ្ជី Stash

\`\`\`bash
git stash list
# លទ្ធផល: stash@{0}: Feature work
\`\`\`

# ឧទាហរណ៍ ៣: នាំ Stash មកប្រើ

\`\`\`bash
git stash pop
# លទ្ធផល: feature.txt restored
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ Git Stash ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Branch',
        'រក្សាទុកការផ្លាស់ប្តូរបណ្ដោះអាសន្ន',
        'Merge Branch',
        'Host Website',
      ],
      correct: 1,
      explanation: 'Git Stash ប្រើសម្រាប់រក្សាទុកការផ្លាស់ប្តូរបណ្ដោះអាសន្ន។',
    },
    {
      question: 'តើពាក្យបញ្ជា `git stash` ធ្វើអ្វី?',
      options: [
        'Commit Changes',
        'រក្សាទុកការផ្លាស់ប្តូរ',
        'លុប Branch',
        'Push Code',
      ],
      correct: 1,
      explanation: '`git stash` រក្សាទុកការផ្លាស់ប្តូរ។',
    },
    {
      question: 'តើ `git stash list` បង្ហាញអ្វី?',
      options: [
        'Branches',
        'Stash Stack',
        'Commits',
        'Pull Requests',
      ],
      correct: 1,
      explanation: '`git stash list` បង្ហាញ Stash Stack។',
    },
    {
      question: 'តើ `git stash pop` ធ្វើអ្វី?',
      options: [
        'រក្សាទុក Stash',
        'នាំ Stash មកប្រើ និងលុប',
        'លុប Stash ទាំងអស់',
        'បង្កើត Branch',
      ],
      correct: 1,
      explanation: '`git stash pop` នាំ Stash មកប្រើ និងលុប។',
    },
    {
      question: 'តើ `git stash apply` ខុសគ្នាពី `pop` ដោយរបៀបណា?',
      options: [
        'លុប Stash',
        'រក្សាទុក Stash',
        'បង្កើត Branch',
        'Push Code',
      ],
      correct: 1,
      explanation: '`git stash apply` រក្សាទុក Stash បន្ទាប់ពីនាំមកប្រើ។',
    },
    {
      question: 'តើអ្នកអាចបន្ថែមឈ្មោះទៅ Stash បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ដោយប្រើ `git stash save "name"`។',
    },
    {
      question: 'តើ `git stash drop` ធ្វើអ្វី?',
      options: [
        'នាំ Stash មកប្រើ',
        'លុប Stash ជាក់លាក់',
        'បង្កើត Stash',
        'Commit Changes',
      ],
      correct: 1,
      explanation: '`git stash drop` លុប Stash ជាក់លាក់។',
    },
    {
      question: 'តើ `git stash clear` ធ្វើអ្វី?',
      options: [
        'នាំ Stash មកប្រើ',
        'លុប Stash ទាំងអស់',
        'បង្កើត Branch',
        'Push Code',
      ],
      correct: 1,
      explanation: '`git stash clear` លុប Stash ទាំងអស់។',
    },
    {
      question: 'តើ Stash ត្រូវបានរក្សាទុកជាទម្រង់ណា?',
      options: [
        'Array',
        'Stack (LIFO)',
        'Queue (FIFO)',
        'List',
      ],
      correct: 1,
      explanation: 'Stash ត្រូវបានរក្សាទុកជា Stack (LIFO)។',
    },
    {
      question: 'តើអ្នកអាចនាំ Stash ជាក់លាក់មកប្រើបានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ដោយប្រើ `git stash apply stash@{n}`។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ Stashing គឺជាអ្វី?',
      options: [
        'មិនបន្ថែមឈ្មោះ Stash',
        'បន្ថែមឈ្មោះ Stash',
        'លុប Stash ភ្លាមៗ',
        'មិនប្រើ `git stash list`',
      ],
      correct: 1,
      explanation: 'បន្ថែមឈ្មោះ Stash ជា Best Practice។',
    },
    {
      question: 'តើ Stash រក្សាទុកអ្វីខ្លះ?',
      options: [
        'Commits',
        'Working Directory និង Staging Area',
        'Branches',
        'Pull Requests',
      ],
      correct: 1,
      explanation: 'Stash រក្សាទុក Working Directory និង Staging Area។',
    },
    {
      question: 'តើអ្នកអាច Stash នៅ Branch ផ្សេងបានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Stash អាចនាំទៅប្រើនៅ Branch ផ្សេង។',
    },
    {
      question: 'តើ `git stash save` និង `git stash` ខុសគ្នាដោយរបៀបណា?',
      options: [
        'គ្មានភាពខុសគ្នា',
        '`save` អនុញ្ញាតឱ្យបន្ថែមឈ្មោះ',
        '`save` លុប Stash',
        '`save` បង្កើត Branch',
      ],
      correct: 1,
      explanation: '`save` អនុញ្ញាតឱ្យបន្ថែមឈ្មោះ។',
    },
    {
      question: 'តើអ្នកគួរប្រើ `git stash apply` ឬ `pop` នៅពេលចង់រក្សាទុក Stash?',
      options: [
        'pop',
        'apply',
        'drop',
        'clear',
      ],
      correct: 1,
      explanation: '`apply` រក្សាទុក Stash បន្ទាប់ពីនាំមកប្រើ។',
    },
    {
      question: 'តើ Stashing គួរជំនួស Commit ទេ?',
      options: [
        'បាទ/ចាស៎',
        'ទេ',
        'តែនៅ Local',
        'តែនៅ main',
      ],
      correct: 1,
      explanation: 'ទេ Commit គួរត្រូវប្រើនៅពេលអាចធ្វើបាន។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ Git Stashing៖
* បង្កើត Stash ជាមួយការផ្លាស់ប្តូរ។
* ប្តូរទៅ Branch ផ្សេង។
* នាំ Stash មកប្រើវិញ។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Repository **my-stash-repo** នៅ GitHub។
2. Clone Repository:
   \`\`\`bash
   git clone https://github.com/yourusername/my-stash-repo.git
   cd my-stash-repo
   \`\`\`
3. បង្កើត File និង Stash:
   \`\`\`bash
   echo "Feature" > feature.txt
   git add feature.txt
   git stash save "Feature work"
   \`\`\`
4. បង្កើត Branch ថ្មី:
   \`\`\`bash
   git switch -c develop
   echo "Develop" > develop.txt
   git add develop.txt
   git commit -m "feat: add develop.txt"
   git push origin develop
   \`\`\`
5. នាំ Stash មកប្រើ:
   \`\`\`bash
   git switch main
   git stash pop
   git add feature.txt
   git commit -m "feat: add feature.txt"
   git push origin main
   \`\`\`
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ Git Stashing

## ជំហានទី ១៖ បង្កើត Repository
- បង្កើត **my-stash-repo** នៅ GitHub។
- លទ្ធផល: Repository created

## ជំហានទី ២៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-stash-repo.git
cd my-stash-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៣៖ បង្កើត File និង Stash
\`\`\`bash
echo "Feature" > feature.txt
git add feature.txt
git stash save "Feature work"
# លទ្ធផល: Stash created
\`\`\`

## ជំហានទី ៤៖ បង្កើត Branch ថ្មី
\`\`\`bash
git switch -c develop
echo "Develop" > develop.txt
git add develop.txt
git commit -m "feat: add develop.txt"
git push origin develop
# លទ្ធផល: Develop branch created
\`\`\`

## ជំហានទី ៥៖ នាំ Stash មកប្រើ
\`\`\`bash
git switch main
git stash pop
git add feature.txt
git commit -m "feat: add feature.txt"
git push origin main
# លទ្ធផល: Stash applied and committed
\`\`\`

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការប្រើ Git Stashing។
`,
  },
};

export default GitHubLesson6_1Content;