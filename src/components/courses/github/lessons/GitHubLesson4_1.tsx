import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson4_1Content: LessonContent = {
  title: 'Pull Requests (PRs) / Merge Requests',
  objectives: [
    'យល់ពីអ្វីជា Pull Request និងសារៈសំខាន់របស់វា',
    'បង្កើត Pull Request នៅលើ GitHub',
    'ពិនិត្យនិងផ្តល់មតិយោបល់លើ Pull Request',
    'Merge Pull Request ទៅ Branch គោល',
    'ប្រើ Labels និង Milestones ក្នុង Pull Request',
    'ដោះស្រាយ Conflicts នៅក្នុង Pull Request',
    'ស្គាល់ Best Practices សម្រាប់ Pull Request',
    'ប្រើ `git fetch` និង `git merge` សម្រាប់ Pull Request',
  ],
  content: `
# Pull Requests (PRs) / Merge Requests 🌐

---

Pull Request (PR) គឺជាមុខងារសំខាន់នៅលើ GitHub សម្រាប់ការសហការ ដែលអនុញ្ញាតឱ្យអ្នកស្នើសុំការពិនិត្យនិងបញ្ចូលការផ្លាស់ប្តូរទៅ Branch គោល។

---

## 1. អ្វីជា Pull Request? 🤔

* **Pull Request:** ជាការស្នើសុំឱ្យ Merge Branch មួយ (ឧ. \`feature\`) ទៅ Branch មួយទៀត (ឧ. \`main\`)។
* អនុញ្ញាតឱ្យក្រុមពិនិត្យកូដ ផ្តល់មតិយោបល់ និងអនុម័តមុនពេល Merge។
* ប្រើសម្រាប់ Feature Development, Bug Fixes, ឬ Documentation Updates។

---

## 2. ការបង្កើត Pull Request 🛠️

* ជំហាន៖
  1. Push Branch ទៅ Remote Repository៖
     \`\`\`bash
     git push origin feature-branch
     \`\`\`
  2. ចូលទៅ GitHub និងចុច **New Pull Request**។
  3. ជ្រើស Base Branch (ឧ. \`main\`) និង Compare Branch (ឧ. \`feature\`)។
  4. បំពេញចំណងជើង និងពិពណ៌នា PR។
  5. ចុច **Create Pull Request**។

---

## 3. ការពិនិត្យនិង Merge Pull Request 📋

* **ការពិនិត្យ:**
  - មតិយោបល់លើកូដ។
  - បន្ថែម Labels (ឧ. \`bug\`, \`feature\`) និង Milestones។
* **ការ Merge:**
  - ជ្រើស Merge Type (Merge Commit, Squash and Merge, Rebase and Merge)។
  - ចុច **Merge Pull Request** និង **Confirm Merge**។

---

## 4. ការដោះស្រាយ Conflicts ⚠️

* Conflicts កើតឡើងនៅពេល Branch មានការផ្លាស់ប្តូរផ្ទុយគ្នា។
* ដោះស្រាយ៖
  1. ទាញការផ្លាស់ប្តូរពី Base Branch៖
     \`\`\`bash
     git fetch origin
     git checkout feature-branch
     git merge origin/main
     \`\`\`
  2. កែ Conflicts នៅឯកសារដែលមានបញ្ហា។
  3. Commit និង Push៖
     \`\`\`bash
     git add <file>
     git commit
     git push origin feature-branch
     \`\`\`

---

## 5. Best Practices 📝

* សរសេរចំណងជើងនិងពិពណ៌នា PR ឱ្យច្បាស់។
* បន្ថែម Labels និង Milestones ដើម្បីរៀបចំ។
* ស្នើសុំ Reviewer ជាក់លាក់។
* ធ្វើការ Commit តូចៗ និងមានអត្ថន័យ។

---

## 6. ឧទាហរណ៍នៃ Pull Request 📋

1. បង្កើត Branch និង Push៖
   \`\`\`bash
   git switch -c feature
   echo "<h1>Feature</h1>" > feature.html
   git add feature.html
   git commit -m "feat: add feature.html"
   git push origin feature
   \`\`\`
2. បង្កើត PR នៅ GitHub ទៅ \`main\`។
3. ដោះស្រាយ Conflict (បើមាន)៖
   \`\`\`bash
   git fetch origin
   git merge origin/main
   # កែ feature.html
   git add feature.html
   git commit
   git push origin feature
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Pull Request

\`\`\`bash
git switch -c feature
echo "<h1>Feature</h1>" > feature.html
git add feature.html
git commit -m "feat: add feature.html"
git push origin feature
# បន្ទាប់មកបង្កើត PR នៅ GitHub
# លទ្ធផល: Pull Request created
\`\`\`

# ឧទាហរណ៍ ២: ដោះស្រាយ Conflict

\`\`\`bash
git fetch origin
git checkout feature
git merge origin/main
# កែ feature.html ដោយរក្សា៖
<h1>Merged Feature</h1>
git add feature.html
git commit
git push origin feature
# លទ្ធផល: Conflict resolved
\`\`\`

# ឧទាហរណ៍ ៣: Merge Pull Request

# នៅ GitHub:
# ចុច "Merge Pull Request" និងជ្រើស "Merge Commit"
# លទ្ធផល: Feature branch merged into main
`,
  ],
  quiz: [
    {
      question: 'តើ Pull Request នៅ GitHub ជាអ្វី?',
      options: [
        'ការបង្កើត Branch',
        'ការស្នើសុំ Merge Branch និងពិនិត្យកូដ',
        'ការលុប Repository',
        'ការបន្ថែម Remote',
      ],
      correct: 1,
      explanation: 'Pull Request ជាការស្នើសុំ Merge Branch និងពិនិត្យកូដ។',
    },
    {
      question: 'តើជំហានដំបូងក្នុងការបង្កើត Pull Request គឺជាអ្វី?',
      options: [
        'Merge Branch',
        'Push Branch ទៅ Remote',
        'លុប Branch',
        'បន្ថែម Labels',
      ],
      correct: 1,
      explanation: 'ជំហានដំបូងគឺ Push Branch ទៅ Remote។',
    },
    {
      question: 'តើអ្នកអាចបន្ថែម Labels នៅ Pull Request បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Labels អាចបន្ថែមបាននៅ Pull Request។',
    },
    {
      question: 'តើ Milestones នៅ Pull Request ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Branch',
        'រៀបចំនិងតាមដានគម្រោង',
        'លុប Repository',
        'Push Commits',
      ],
      correct: 1,
      explanation: 'Milestones ប្រើសម្រាប់រៀបចំនិងតាមដានគម្រោង។',
    },
    {
      question: 'តើ Merge Conflict នៅ Pull Request កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេល Push Branch',
        'នៅពេល Branch មានការផ្លាស់ប្តូរផ្ទុយគ្នា',
        'នៅពេលបង្កើត PR',
        'នៅពេលលុប Branch',
      ],
      correct: 1,
      explanation: 'Merge Conflict កើតឡើងនៅពេល Branch មានការផ្លាស់ប្តូរផ្ទុយគ្នា។',
    },
    {
      question: 'តើអ្នកអាច Merge Pull Request ដោយគ្មាន Review បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាច Merge ដោយគ្មាន Review ប៉ុន្តែមិនមែន Best Practice។',
    },
    {
      question: 'តើ Merge Type ណាដែលបង្កើត Linear History?',
      options: [
        'Merge Commit',
        'Squash and Merge',
        'Rebase and Merge',
        'ទាំងអស់ខាងលើ',
      ],
      correct: 2,
      explanation: 'Rebase and Merge បង្កើត Linear History។',
    },
    {
      question: 'តើ `git fetch` នៅក្នុង Pull Request ធ្វើអ្វី?',
      options: [
        'Push Branch',
        'ទាញ Metadata ពី Remote',
        'Merge Branch',
        'បង្កើត PR',
      ],
      correct: 1,
      explanation: '`git fetch` ទាញ Metadata ពី Remote។',
    },
    {
      question: 'តើអ្នកត្រូវធ្វើអ្វីបន្ទាប់ពីកែ Merge Conflict?',
      options: [
        'Push ទៅ Remote',
        'បន្ថែមឯកសារនិង Commit',
        'លុប Branch',
        'បន្ថែម Labels',
      ],
      correct: 1,
      explanation: 'បន្ទាប់ពីកែ Conflict ត្រូវ `git add` និង `git commit`។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ Pull Request គឺជាអ្វី?',
      options: [
        'សរសេរពិពណ៌នាមិនច្បាស់',
        'ធ្វើ Commit ធំៗ',
        'សរសេរពិពណ៌នាច្បាស់ និងបន្ថែម Labels',
        'មិនស្នើសុំ Reviewer',
      ],
      correct: 2,
      explanation: 'សរសេរពិពណ៌នាច្បាស់ និងបន្ថែម Labels ជា Best Practice។',
    },
    {
      question: 'តើអ្នកអាចបន្ថែម Reviewer នៅ Pull Request បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Reviewer អាចបន្ថែមបាននៅ Pull Request។',
    },
    {
      question: 'តើ Squash and Merge ធ្វើអ្វី?',
      options: [
        'បង្កើត Linear History',
        'បញ្ចូល Commits ទៅជា Commit តែមួយ',
        'រក្សា History ដើម',
        'លុប Branch',
      ],
      correct: 1,
      explanation: 'Squash and Merge បញ្ចូល Commits ទៅជា Commit តែមួយ។',
    },
    {
      question: 'តើអ្នកអាចប្តូរ Base Branch នៅ Pull Request បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចប្តូរ Base Branch នៅ Pull Request។',
    },
    {
      question: 'តើ Labels ជួយអ្វីនៅក្នុង Pull Request?',
      options: [
        'បង្កើត Branch',
        'រៀបចំនិងចាត់ថ្នាក់ PR',
        'លុប Repository',
        'Push Commits',
      ],
      correct: 1,
      explanation: 'Labels ជួយរៀបចំនិងចាត់ថ្នាក់ PR។',
    },
    {
      question: 'តើអ្នកអាច Merge Pull Request ដោយគ្មាន Conflict បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ បើគ្មាន Conflict អ្នកអាច Merge PR។',
    },
    {
      question: 'តើអ្នកគួរសរសេរ Commit Messages ដោយរបៀបណា?',
      options: [
        'មិនច្បាស់',
        'តូចៗ និងមានអត្ថន័យ',
        'ធំៗ និងរួមបញ្ចូលច្រើន',
        'មិនត្រូវការ Commit Messages',
      ],
      correct: 1,
      explanation: 'Commit Messages គួរតូចៗ និងមានអត្ថន័យ។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ Pull Request៖
* បង្កើត Branch និង Pull Request។
* ដោះស្រាយ Merge Conflict។
* Merge Pull Request។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. Clone Repository **my-pr-repo**៖
   \`\`\`bash
   git clone https://github.com/yourusername/my-pr-repo.git
   cd my-pr-repo
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
3. បង្កើត Pull Request នៅ GitHub ទៅ \`main\`។
4. នៅ Branch \`main\` បន្ថែម \`feature.html\`៖
   \`\`\`html
   <h1>Main Feature</h1>
   \`\`\`
   Commit និង Push៖
   \`\`\`bash
   git switch main
   git add feature.html
   git commit -m "feat: update feature.html in main"
   git push origin main
   \`\`\`
5. ដោះស្រាយ Conflict នៅ Branch \`feature\`៖
   \`\`\`bash
   git fetch origin
   git merge origin/main
   # កែ feature.html ទៅជា៖
   <h1>Merged Feature Page</h1>
   git add feature.html
   git commit
   git push origin feature
   \`\`\`
6. Merge Pull Request នៅ GitHub ដោយប្រើ "Merge Commit"។
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ Pull Request

## ជំហានទី ១៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-pr-repo.git
cd my-pr-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ២៖ បង្កើត Branch និង Push
\`\`\`bash
git switch -c feature
echo "<h1>Feature Page</h1>" > feature.html
git add feature.html
git commit -m "feat: add feature.html"
git push origin feature
# លទ្ធផល: Pushed to feature
\`\`\`

## ជំហានទី ៣៖ បង្កើត Pull Request
- ចូលទៅ GitHub នៅ https://github.com/yourusername/my-pr-repo។
- ចុច **New Pull Request** សម្រាប់ Branch \`feature\` ទៅ \`main\`។
- បំពេញចំណងជើងនិងពិពណ៌នា។
- លទ្ធផល: Pull Request created

## ជំហានទី ៤៖ បន្ថែម Conflict នៅ main
\`\`\`bash
git switch main
echo "<h1>Main Feature</h1>" > feature.html
git add feature.html
git commit -m "feat: update feature.html in main"
git push origin main
# លទ្ធផល: Pushed to main
\`\`\`

## ជំហានទី ៥៖ ដោះស្រាយ Conflict
\`\`\`bash
git fetch origin
git checkout feature
git merge origin/main
# កែ feature.html ទៅជា៖
echo "<h1>Merged Feature Page</h1>" > feature.html
git add feature.html
git commit
git push origin feature
# លទ្ធផល: Conflict resolved and pushed
\`\`\`

## ជំហានទី ៦៖ Merge Pull Request
- ចូលទៅ GitHub និងពិនិត្យ PR។
- ចុច **Merge Pull Request** និងជ្រើស "Merge Commit"។
- លទ្ធផល: Pull Request merged

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការបង្កើតនិងគ្រប់គ្រង Pull Request។
`,
  },
};

export default GitHubLesson4_1Content;