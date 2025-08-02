import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson6_2Content: LessonContent = {
  title: 'Git Tagging (ការដាក់ស្លាកកំណែ)',
  objectives: [
    'យល់ពីអ្វីជា Git Tags និងសារៈសំខាន់របស់វា',
    'បង្កើត Lightweight Tag',
    'បង្កើត Annotated Tag',
    'Push Tags ទៅ GitHub',
    'លុប Tags នៅ Local និង Remote',
    'ប្រើ Tags សម្រាប់ Release Management',
    'មើលបញ្ជី Tags ជាមួយ `git tag`',
    'ស្គាល់ Best Practices សម្រាប់ Git Tagging',
  ],
  content: `
# Git Tagging (ការដាក់ស្លាកកំណែ) 🏷️

---

Git Tags ជាវិធីដាក់ស្លាកលើ Commit ជាក់លាក់ ដើម្បីសម្គាល់ Release ឬ Milestone។

---

## 1. Git Tag ជាអ្វី? 🤔

* **Tag:** សម្គាល់ Commit ជាក់លាក់នៅក្នុង Git History។
* ប្រភេទ Tag:
  - **Lightweight Tag:** គ្រាន់តែជាឈ្មោះសម្រាប់ Commit។
  - **Annotated Tag:** មាន Metadata (ឧ. Name, Email, Message)។
* ប្រើសម្រាប់ Release (ឧ. \`v1.0.0\`)។

---

## 2. ការបង្កើត Tag 🛠️

* **Lightweight Tag:**
  \`\`\`bash
  git tag v1.0.0
  \`\`\`
* **Annotated Tag:**
  \`\`\`bash
  git tag -a v1.0.0 -m "Release v1.0.0"
  \`\`\`

---

## 3. Push Tags ទៅ GitHub 📤

* **Push Tag ជាក់លាក់:**
  \`\`\`bash
  git push origin v1.0.0
  \`\`\`
* **Push Tags ទាំងអស់:**
  \`\`\`bash
  git push origin --tags
  \`\`\`

---

## 4. លុប Tag 🗑️

* **លុប Tag នៅ Local:**
  \`\`\`bash
  git tag -d v1.0.0
  \`\`\`
* **លុប Tag នៅ Remote:**
  \`\`\`bash
  git push origin --delete v1.0.0
  \`\`\`

---

## 5. មើលបញ្ជី Tags 📋

* **បង្ហាញ Tags ទាំងអស់:**
  \`\`\`bash
  git tag
  \`\`\`
* **បង្ហាញព័ត៌មាន Annotated Tag:**
  \`\`\`bash
  git show v1.0.0
  \`\`\`

---

## 6. Best Practices 📝

* ប្រើ Annotated Tags សម្រាប់ Releases។
* ប្រើ Semantic Versioning (ឧ. \`v1.0.0\`)។
* Push Tags ទៅ Remote ភ្លាមៗបន្ទាប់ពីបង្កើត។
* កុំលុប Tags ដែលបាន Release ជាសាធារណៈ។

---

## 7. ឧទាហរណ៍នៃ Git Tagging 📋

1. បង្កើត Annotated Tag:
   \`\`\`bash
   git tag -a v1.0.0 -m "Initial release"
   git push origin v1.0.0
   \`\`\`
2. បង្ហាញ Tags:
   \`\`\`bash
   git tag
   \`\`\`
3. លុប Tag:
   \`\`\`bash
   git tag -d v1.0.0
   git push origin --delete v1.0.0
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Lightweight Tag

\`\`\`bash
git tag v1.0.0
git push origin v1.0.0
# លទ្ធផល: Tag v1.0.0 created and pushed
\`\`\`

# ឧទាហរណ៍ ២: បង្កើត Annotated Tag

\`\`\`bash
git tag -a v2.0.0 -m "Release v2.0.0"
git push origin v2.0.0
# លទ្ធផល: Annotated tag created and pushed
\`\`\`

# ឧទាហរណ៍ ៣: លុប Tag

\`\`\`bash
git tag -d v1.0.0
git push origin --delete v1.0.0
# លទ្ធផល: Tag deleted
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ Git Tag ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Branch',
        'សម្គាល់ Commit',
        'Merge Branch',
        'Host Website',
      ],
      correct: 1,
      explanation: 'Git Tag ប្រើសម្រាប់សម្គាល់ Commit។',
    },
    {
      question: 'តើ Tag ប្រភេទណាដែលមាន Metadata?',
      options: [
        'Lightweight Tag',
        'Annotated Tag',
        'Remote Tag',
        'Local Tag',
      ],
      correct: 1,
      explanation: 'Annotated Tag មាន Metadata។',
    },
    {
      question: 'តើពាក្យបញ្ជា `git tag v1.0.0` បង្កើត Tag ប្រភេទណា?',
      options: [
        'Annotated Tag',
        'Lightweight Tag',
        'Remote Tag',
        'Local Tag',
      ],
      correct: 1,
      explanation: '`git tag v1.0.0` បង្កើត Lightweight Tag។',
    },
    {
      question: 'តើអ្នក Push Tag ទៅ Remote ដោយរបៀបណា?',
      options: [
        'git push origin v1.0.0',
        'git tag push v1.0.0',
        'git commit v1.0.0',
        'git merge v1.0.0',
      ],
      correct: 0,
      explanation: '`git push origin v1.0.0` Push Tag ទៅ Remote។',
    },
    {
      question: 'តើ `git tag -a` ធ្វើអ្វី?',
      options: [
        'លុប Tag',
        'បង្កើត Annotated Tag',
        'បង្កើត Lightweight Tag',
        'Push Tag',
      ],
      correct: 1,
      explanation: '`git tag -a` បង្កើត Annotated Tag។',
    },
    {
      question: 'តើអ្នកលុប Tag នៅ Remote ដោយរបៀបណា?',
      options: [
        'git tag -d v1.0.0',
        'git push origin --delete v1.0.0',
        'git stash drop v1.0.0',
        'git commit --delete v1.0.0',
      ],
      correct: 1,
      explanation: '`git push origin --delete v1.0.0` លុប Tag នៅ Remote។',
    },
    {
      question: 'តើ `git tag` បង្ហាញអ្វី?',
      options: [
        'Commits',
        'Branches',
        'Tags',
        'Stashes',
      ],
      correct: 2,
      explanation: '`git tag` បង្ហាញបញ្ជី Tags។',
    },
    {
      question: 'តើ Semantic Versioning គឺជាអ្វី?',
      options: [
        'v1.0.0',
        'main',
        'feature',
        'develop',
      ],
      correct: 0,
      explanation: 'Semantic Versioning ប្រើទម្រង់ `v1.0.0`។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ Tagging គឺជាអ្វី?',
      options: [
        'ប្រើ Lightweight Tags សម្រាប់ Releases',
        'ប្រើ Annotated Tags សម្រាប់ Releases',
        'លុប Tags ជាសាធារណៈ',
        'មិន Push Tags',
      ],
      correct: 1,
      explanation: 'ប្រើ Annotated Tags សម្រាប់ Releases ជា Best Practice។',
    },
    {
      question: 'តើ `git show v1.0.0` បង្ហាញអ្វី?',
      options: [
        'Branch Info',
        'Tag Info',
        'Stash Info',
        'Commit History',
      ],
      correct: 1,
      explanation: '`git show v1.0.0` បង្ហាញ Tag Info។',
    },
    {
      question: 'តើអ្នកអាចបង្កើត Tag នៅ Commit ចាស់បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ដោយបញ្ជាក់ Commit Hash។',
    },
    {
      question: 'តើ Tags ត្រូវបាន Push ដោយស្វ័យប្រវត្តិជាមួយ `git push` ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 1,
      explanation: 'ទេ Tags ត្រូវ Push ដោយ `git push origin --tags`។',
    },
    {
      question: 'តើ Lightweight Tag មាន Metadata ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 1,
      explanation: 'ទេ Lightweight Tag គ្មាន Metadata។',
    },
    {
      question: 'តើអ្នកគួរលុប Tag ដែល Release ជាសាធារណៈទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 1,
      explanation: 'ទេ កុំលុប Tag ដែល Release ជាសាធារណៈ។',
    },
    {
      question: 'តើ `git push origin --tags` ធ្វើអ្វី?',
      options: [
        'Push Commits',
        'Push All Tags',
        'Delete Tags',
        'Merge Tags',
      ],
      correct: 1,
      explanation: '`git push origin --tags` Push Tags ទាំងអស់។',
    },
    {
      question: 'តើ Tags ជួយអ្វីនៅ Release Management?',
      options: [
        'បង្កើត Branch',
        'សម្គាល់ Release Versions',
        'Merge Code',
        'Host Website',
      ],
      correct: 1,
      explanation: 'Tags សម្គាល់ Release Versions។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ Git Tagging៖
* បង្កើត Annotated Tag។
* Push Tag ទៅ GitHub។
* លុប Tag។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Repository **my-tag-repo** នៅ GitHub។
2. Clone Repository:
   \`\`\`bash
   git clone https://github.com/yourusername/my-tag-repo.git
   cd my-tag-repo
   \`\`\`
3. បង្កើត File និង Commit:
   \`\`\`bash
   echo "Version 1" > version.txt
   git add version.txt
   git commit -m "feat: add version.txt"
   git push origin main
   \`\`\`
4. បង្កើត Annotated Tag:
   \`\`\`bash
   git tag -a v1.0.0 -m "Release v1.0.0"
   git push origin v1.0.0
   \`\`\`
5. លុប Tag:
   \`\`\`bash
   git tag -d v1.0.0
   git push origin --delete v1.0.0
   \`\`\`
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ Git Tagging

## ជំហានទី ១៖ បង្កើត Repository
- បង្កើត **my-tag-repo** នៅ GitHub។
- លទ្ធផល: Repository created

## ជំហានទី ២៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-tag-repo.git
cd my-tag-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៣៖ បង្កើត File និង Commit
\`\`\`bash
echo "Version 1" > version.txt
git add version.txt
git commit -m "feat: add version.txt"
git push origin main
# លទ្ធផល: File committed and pushed
\`\`\`

## ជំហានទី ៤៖ បង្កើត Annotated Tag
\`\`\`bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
# លទ្ធផល: Tag created and pushed
\`\`\`

## ជំហានទី ៥៖ លុប Tag
\`\`\`bash
git tag -d v1.0.0
git push origin --delete v1.0.0
# លទ្ធផល: Tag deleted
\`\`\`

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការប្រើ Git Tagging។
`,
  },
};

export default GitHubLesson6_2Content;