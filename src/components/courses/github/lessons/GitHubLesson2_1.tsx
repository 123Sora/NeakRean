import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson2_1Content: LessonContent = {
  title: 'ណែនាំអំពី GitHub',
  objectives: [
    'យល់ពីអ្វីជា GitHub និងសារៈសំខាន់របស់វា',
    'ស្គាល់មុខងារសំខាន់ៗរបស់ GitHub (Repositories, Issues, Pull Requests)',
    'បង្កើតគណនី GitHub និងកំណត់ជា Public Profile',
    'ស្វែងយល់ពី Repository និងរបៀបបង្កើតវា',
    'ស្គាល់ភាពខុសគ្នារវាង Git និង GitHub',
    'ប្រើ GitHub Desktop ឬ Command Line សម្រាប់ការគ្រប់គ្រង Repository',
    'យល់ពី Fork និង Clone',
    'ស្គាល់ Markdown សម្រាប់ README នៅក្នុង Repository',
  ],
  content: `
# ណែនាំអំពី GitHub 🌐

---

GitHub គឺជាវេទិកាសម្រាប់ការគ្រប់គ្រង Source Code និងការសហការលើគម្រោងអភិវឌ្ឍន៍កម្មវិធី។ វាផ្អែកលើ Git ប៉ុន្តែបន្ថែមមុខងារសម្រាប់ការសហការ។

---

## 1. អ្វីជា GitHub? 🤔

* GitHub ជាវេទិកាដែលអនុញ្ញាតឱ្យអ្នករក្សាទុក គ្រប់គ្រង និងចែករំលែក Source Code។
* ផ្តល់មុខងារដូចជា **Repositories**, **Issues**, **Pull Requests**, និង **Actions**។
* គាំទ្រការសហការជាក្រុម និងការតាមដានការផ្លាស់ប្តូរ។

---

## 2. Git និង GitHub: ភាពខុសគ្នា 🔄

* **Git:** ឧបករណ៍ Version Control ដែលដំណើរការនៅលើកុំព្យូទ័រក្នុងស្រុក។
* **GitHub:** វេទិកាលើ Cloud ដែលប្រើ Git សម្រាប់រក្សាទុក Repository នៅ Remote Server។
* GitHub បន្ថែមមុខងារដូចជា Web Interface, Collaboration Tools, និង Social Features។

---

## 3. មុខងារសំខាន់ៗរបស់ GitHub 🛠️

* **Repository:** កន្លែងរក្សាទុក Source Code និងប្រវត្តិ Commit។
* **Issues:** ឧបករណ៍សម្រាប់តាមដាន Bugs ឬ Tasks។
* **Pull Requests:** សម្រាប់ស្នើសុំការពិនិត្យនិងបញ្ចូលការផ្លាស់ប្តូរទៅ Branch។
* **README.md:** ឯកសារ Markdown ដែលណែនាំអំពីគម្រោង។
* **Fork:** ចម្លង Repository ទៅគណនីផ្ទាល់ខ្លួន។
* **Clone:** ទាញ Repository ពី GitHub មកកុំព្យូទ័រក្នុងស្រុក។

---

## 4. ការបង្កើតគណនី GitHub ✍️

1. ចូលទៅកាន់ [github.com](https://github.com)។
2. ចុច **Sign Up** និងបំពេញព័ត៌មាន (អ៊ីមែល, ឈ្មោះអ្នកប្រើ, លេខសម្ងាត់)។
3. បញ្ជាក់អ៊ីមែល និងកំណត់ Profile ជា Public។
4. បង្កើត Repository ដំបូង៖
   \`\`\`bash
   # នៅលើ GitHub:
   # ចុច "New Repository"
   # បំពេញឈ្មោះ (ឧ. my-first-repo)
   # ជ្រើស Public ឬ Private
   # បន្ថែម README.md (ជម្រើស)
   \`\`\`

---

## 5. ការប្រើ Markdown សម្រាប់ README 📝

* README.md ប្រើ Markdown ដើម្បីពិពណ៌នាគម្រោង។
* ឧទាហរណ៍៖
  \`\`\`markdown
  # My Project
  Welcome to my project! This is a sample repository.

  ## Features
  - Feature 1
  - Feature 2

  ## Installation
  \`\`\`bash
  git clone https://github.com/username/my-first-repo.git
  \`\`\`
  \`\`\`

---

## 6. GitHub Desktop និង Command Line 💻

* **GitHub Desktop:** កម្មវិធី GUI សម្រាប់គ្រប់គ្រង Repository។
* **Command Line:**
  \`\`\`bash
  git clone https://github.com/username/my-first-repo.git
  git status
  git add .
  git commit -m "feat: initial project setup"
  git push origin main
  \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Repository និង Clone

1. បង្កើត Repository នៅ GitHub ឈ្មោះ **my-first-repo**។
2. Clone Repository ទៅកុំព្យូទ័រក្នុងស្រុក៖
   \`\`\`bash
   git clone https://github.com/username/my-first-repo.git
   cd my-first-repo
   \`\`\`

# ឧទាហរណ៍ ២: បន្ថែម README.md

1. បង្កើតឯកសារ README.md៖
   \`\`\`bash
   echo "# My First Repo" > README.md
   \`\`\`
2. Commit និង Push៖
   \`\`\`bash
   git add README.md
   git commit -m "docs: add README.md"
   git push origin main
   \`\`\`

# ឧទាហរណ៍ ៣: Fork Repository

1. ចូលទៅ Repository របស់អ្នកដទៃ (ឧ. https://github.com/otheruser/sample-repo)។
2. ចុច **Fork** ដើម្បីចម្លងទៅគណនីអ្នក។
3. Clone Repository ដែល Fork មក៖
   \`\`\`bash
   git clone https://github.com/yourusername/sample-repo.git
   \`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ GitHub ជាអ្វី?',
      options: [
        'ឧបករណ៍ Version Control ក្នុងស្រុក',
        'វេទិកាសម្រាប់គ្រប់គ្រង Source Code និងការសហការ',
        'កម្មវិធីសម្រាប់សរសេរកូដ',
        'ប្រព័ន្ធផ្ទុក Cloud សម្រាប់ឯកសារ',
      ],
      correct: 1,
      explanation: 'GitHub ជាវេទិកាសម្រាប់គ្រប់គ្រង Source Code និងការសហការ។',
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Git និង GitHub?',
      options: [
        'Git ជាវេទិកា Cloud ហើយ GitHub ជា Command Line Tool',
        'Git ជា Version Control ក្នុងស្រុក ហើយ GitHub ជាវេទិកា Cloud',
        'GitHub ជា Version Control ក្នុងស្រុក ហើយ Git ជា Cloud',
        'គ្មានភាពខុសគ្នា',
      ],
      correct: 1,
      explanation: 'Git ជា Version Control ក្នុងស្រុក ហើយ GitHub ជាវេទិកា Cloud។',
    },
    {
      question: 'តើ Repository នៅលើ GitHub ជាអ្វី?',
      options: [
        'ឯកសារមួយនៅក្នុង Project',
        'កន្លែងរក្សាទុក Source Code និងប្រវត្តិ Commit',
        'កម្មវិធីសម្រាប់គ្រប់គ្រង Git',
        'ឧបករណ៍សម្រាប់សរសេរកូដ',
      ],
      correct: 1,
      explanation: 'Repository ជាកន្លែងរក្សាទុក Source Code និងប្រវត្តិ Commit។',
    },
    {
      question: 'តើអ្វីជា README.md?',
      options: [
        'ឯកសារ Code សម្រាប់ Project',
        'ឯកសារ Markdown ដែលពិពណ៌នាគម្រោង',
        'ឯកសារ Configuration សម្រាប់ GitHub',
        'ឯកសារ Log សម្រាប់ Commits',
      ],
      correct: 1,
      explanation: 'README.md ជាឯកសារ Markdown ដែលពិពណ៌នាគម្រោង។',
    },
    {
      question: 'តើមុខងារ **Issues** នៅលើ GitHub ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក Source Code',
        'តាមដាន Bugs ឬ Tasks',
        'បង្កើត Branch ថ្មី',
        'Push Commits ទៅ Remote',
      ],
      correct: 1,
      explanation: 'Issues ប្រើសម្រាប់តាមដាន Bugs ឬ Tasks។',
    },
    {
      question: 'តើ **Pull Request** ជាអ្វី?',
      options: [
        'ការស្នើសុំបន្ថែមឯកសារទៅ Repository',
        'ការស្នើសុំពិនិត្យនិងបញ្ចូលការផ្លាស់ប្តូរទៅ Branch',
        'ការលុប Repository',
        'ការចម្លង Repository',
      ],
      correct: 1,
      explanation: 'Pull Request ស្នើសុំពិនិត្យនិងបញ្ចូលការផ្លាស់ប្តូរទៅ Branch។',
    },
    {
      question: 'តើអ្នកត្រូវធ្វើអ្វីដើម្បីបង្កើតគណនី GitHub?',
      options: [
        'ទាញយក GitHub Desktop',
        'ចុះឈ្មោះនៅ github.com និងបញ្ជាក់អ៊ីមែល',
        'បង្កើត Repository ដំបូង',
        'តម្លើង Git នៅកុំព្យូទ័រ',
      ],
      correct: 1,
      explanation: 'ត្រូវចុះឈ្មោះនៅ github.com និងបញ្ជាក់អ៊ីមែល។',
    },
    {
      question: 'តើ **Fork** នៅលើ GitHub មានន័យដូចម្តេច?',
      options: [
        'ការលុប Repository',
        'ការចម្លង Repository ទៅគណនីផ្ទាល់ខ្លួន',
        'ការបន្ថែម Branch ថ្មី',
        'ការបង្កើត Pull Request',
      ],
      correct: 1,
      explanation: 'Fork ជាការចម្លង Repository ទៅគណនីផ្ទាល់ខ្លួន។',
    },
    {
      question: 'តើ Command `git clone` ធ្វើអ្វី?',
      options: [
        'បង្កើត Repository ថ្មី',
        'ទាញ Repository ពី GitHub មកកុំព្យូទ័រក្នុងស្រុក',
        'បន្ថែមឯកសារទៅ Staging Area',
        'Push Commits ទៅ GitHub',
      ],
      correct: 1,
      explanation: '`git clone` ទាញ Repository ពី GitHub មកកុំព្យូទ័រក្នុងស្រុក។',
    },
    {
      question: 'តើ Markdown ត្រូវបានប្រើនៅឯណាក្នុង GitHub?',
      options: [
        'សម្រាប់សរសេរកូដ',
        'សម្រាប់ README.md និងឯកសារផ្សេងទៀត',
        'សម្រាប់ Configuration Files',
        'សម្រាប់ Commit Messages',
      ],
      correct: 1,
      explanation: 'Markdown ប្រើសម្រាប់ README.md និងឯកសារផ្សេងទៀត។',
    },
    {
      question: 'តើ GitHub Desktop ជាអ្វី?',
      options: [
        'វេទិកា Cloud សម្រាប់ GitHub',
        'កម្មវិធី GUI សម្រាប់គ្រប់គ្រង Repository',
        'ឧបករណ៍ Command Line',
        'កម្មវិធីសម្រាប់សរសេរកូដ',
      ],
      correct: 1,
      explanation: 'GitHub Desktop ជាកម្មវិធី GUI សម្រាប់គ្រប់គ្រង Repository។',
    },
    {
      question: 'តើអ្នកអាចបង្កើត Repository ជា Public ឬ Private បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែ Public', 'តែ Private'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចបង្កើត Repository ជា Public ឬ Private។',
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ README.md?',
      options: [
        'រក្សាទុក Commit History',
        'ពិពណ៌នាអំពីគម្រោងនិងរបៀបប្រើប្រាស់',
        'កំណត់ Configuration សម្រាប់ Git',
        'តាមដាន Issues',
      ],
      correct: 1,
      explanation: 'README.md ពិពណ៌នាអំពីគម្រោងនិងរបៀបប្រើប្រាស់។',
    },
    {
      question: 'តើអ្នកត្រូវបញ្ជាក់អ្វីបន្ទាប់ពីចុះឈ្មោះគណនី GitHub?',
      options: [
        'អ៊ីមែល',
        'លេខទូរស័ព្ទ',
        'អាសយដ្ឋាន',
        'លេខកាតឥណទាន',
      ],
      correct: 0,
      explanation: 'ត្រូវបញ្ជាក់អ៊ីមែលបន្ទាប់ពីចុះឈ្មោះ។',
    },
    {
      question: 'តើ **Actions** នៅលើ GitHub ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ការសរសេរកូដ',
        'សម្រាប់ស្វ័យប្រវត្តិកម្ម Workflow ដូចជា CI/CD',
        'សម្រាប់ការលុប Repository',
        'សម្រាប់ការបង្កើត Branch',
      ],
      correct: 1,
      explanation: 'Actions ប្រើសម្រាប់ស្វ័យប្រវត្តិកម្ម Workflow ដូចជា CI/CD។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ GitHub ដើម្បីបង្កើតនិងគ្រប់គ្រង Repository៖
* បង្កើត Repository ថ្មី។
* បន្ថែម README.md។
* Clone Repository និងធ្វើការផ្លាស់ប្តូរ។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. ចុះឈ្មោះគណនីនៅ [github.com](https://github.com) និងបញ្ជាក់អ៊ីមែល។
2. បង្កើត Repository ថ្មីឈ្មោះ **my-first-repo** (ជ្រើស Public និងបន្ថែម README.md)។
3. Clone Repository ទៅកុំព្យូទ័រក្នុងស្រុក៖
   \`\`\`bash
   git clone https://github.com/yourusername/my-first-repo.git
   cd my-first-repo
   \`\`\`
4. កែប្រែ README.md ដោយបន្ថែម៖
   \`\`\`markdown
   ## About
   This is my first GitHub repository!
   \`\`\`
5. Commit និង Push៖
   \`\`\`bash
   git add README.md
   git commit -m "docs: update README with about section"
   git push origin main
   \`\`\`
6. ពិនិត្យ Repository នៅលើ GitHub ដើម្បីឃើញការផ្លាស់ប្តូរ។
`,
    solution: `
# ដំណោះស្រាយ៖ ការបង្កើតនិងគ្រប់គ្រង Repository

## ជំហានទី ១៖ ចុះឈ្មោះគណនី
- ចូលទៅ [github.com](https://github.com) និងចុច **Sign Up**។
- បំពេញអ៊ីមែល, ឈ្មោះអ្នកប្រើ, និងលេខសម្ងាត់។
- បញ្ជាក់អ៊ីមែល។

## ជំហានទី ២៖ បង្កើត Repository
- ចុច **New Repository** នៅ GitHub។
- បំពេញឈ្មោះ **my-first-repo**, ជ្រើស **Public**, និងធីក **Add a README file**។
- ចុច **Create Repository**។

## ជំហានទី ៣៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-first-repo.git
cd my-first-repo
# លទ្ធផល: Repository cloned to local machine
\`\`\`

## ជំហានទី ៤៖ កែប្រែ README.md
\`\`\`bash
echo "## About\nThis is my first GitHub repository!" >> README.md
\`\`\`

## ជំហានទី ៥៖ Commit និង Push
\`\`\`bash
git add README.md
git commit -m "docs: update README with about section"
git push origin main
# លទ្ធផល: Changes pushed to GitHub
\`\`\`

## ជំហានទី ៦៖ ពិនិត្យនៅ GitHub
- ចូលទៅ https://github.com/yourusername/my-first-repo។
- ឃើញ README.md បានធ្វើបច្ចុប្បន្នភាពជាមួយផ្នែក **About**។

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការបង្កើតនិងគ្រប់គ្រង Repository នៅលើ GitHub។
`,
  },
};

export default GitHubLesson2_1Content;