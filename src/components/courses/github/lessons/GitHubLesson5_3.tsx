import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson5_3Content: LessonContent = {
  title: 'GitHub Pages (សម្រាប់ Hosting Static Websites)',
  objectives: [
    'យល់ពីអ្វីជា GitHub Pages និងសារៈសំខាន់របស់វា',
    'បង្កើត Static Website និង Host នៅ GitHub Pages',
    'កំណត់ Source Branch សម្រាប់ GitHub Pages',
    'ប្រើ Custom Domain (បើចង់)',
    'គ្រប់គ្រង Access សម្រាប់ GitHub Pages',
    'បន្ថែម Files (HTML, CSS, JS) ទៅ GitHub Pages',
    'ស្គាល់ Best Practices សម្រាប់ GitHub Pages',
    'ប្រើ GitHub Actions ដើម្បី Deploy ទៅ GitHub Pages',
  ],
  content: `
# GitHub Pages (សម្រាប់ Hosting Static Websites) 🌐

---

GitHub Pages ជាមុខងារនៅ GitHub សម្រាប់ Host Static Websites ដោយឥតគិតថ្លៃ។

---

## 1. GitHub Pages ជាអ្វី? 🤔

* **GitHub Pages:** សេវាកម្ម Hosting សម្រាប់ Static Files (HTML, CSS, JS)។
* ប្រើសម្រាប់ Personal Sites, Project Docs, ឬ Portfolios។
* URL: \`https://yourusername.github.io/repository-name\`។

---

## 2. ការបង្កើត GitHub Pages 🛠️

* **ជំហាន:**
  1. បង្កើត Repository (ឧ. \`my-pages-repo\`)។
  2. បន្ថែម \`index.html\` នៅ Root ឬ Folder។
  3. ចូលទៅ Repository Settings > Pages។
  4. ជ្រើស Source Branch (ឧ. \`main\`) និង Folder (ឧ. \`/ (root)\`)។
  5. ចុច Save, និងរង់ចាំ Website Deploy។

---

## 3. Custom Domain 🌍

* បន្ថែម Custom Domain:
  1. នៅ Settings > Pages > Custom Domain។
  2. បញ្ចូល Domain (ឧ. \`example.com\`)។
  3. កំណត់ DNS Records នៅ Domain Provider។

---

## 4. GitHub Actions សម្រាប់ Deployment 🚀

* ប្រើ Workflow ដើម្បី Deploy ទៅ GitHub Pages:
  \`\`\`yaml
  name: Deploy to GitHub Pages
  on:
    push:
      branches: [ main ]
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Deploy
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: \${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./
  \`\`\`

---

## 5. Best Practices 📝

* ប្រើ \`index.html\` ជា Entry Point។
* រក្សា Files ឱ្យសាមញ្ញ (Static Content)។
* បើក Enforce HTTPS នៅ Settings > Pages។
* ប្រើ GitHub Actions សម្រាប់ Deployment ស្វ័យប្រវត្តិ។

---

## 6. ឧទាហរណ៍នៃ GitHub Pages 📋

1. បង្កើត \`index.html\`:
   \`\`\`html
   <!DOCTYPE html>
   <html>
   <head>
     <title>My Page</title>
   </head>
   <body>
     <h1>Welcome to My Page</h1>
   </body>
   </html>
   \`\`\`
2. Push ទៅ Repository:
   \`\`\`bash
   git add index.html
   git commit -m "feat: add index.html"
   git push origin main
   \`\`\`
3. បើក GitHub Pages នៅ Settings > Pages។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត GitHub Pages

\`\`\`bash
echo "<h1>Welcome</h1>" > index.html
git add index.html
git commit -m "feat: add index.html"
git push origin main
# នៅ Settings > Pages, ជ្រើស Branch: main, Folder: / (root)
# លទ្ធផល: Website hosted at https://yourusername.github.io/my-pages-repo
\`\`\`

# ឧទាហរណ៍ ២: Deploy ជាមួយ GitHub Actions

\`\`\`yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
\`\`\`
# លទ្ធផល: Website deployed automatically

# ឧទាហរណ៍ ៣: បន្ថែម CSS

\`\`\`css
/* style.css */
h1 { color: blue; }
\`\`\`
\`\`\`html
<!-- index.html -->
<link rel="stylesheet" href="style.css">
<h1>Welcome</h1>
\`\`\`
# លទ្ធផល: Styled website hosted
`,
  ],
  quiz: [
    {
      question: 'តើ GitHub Pages ប្រើសម្រាប់អ្វី?',
      options: [
        'Run Tests',
        'Host Static Websites',
        'Create Issues',
        'Manage Teams',
      ],
      correct: 1,
      explanation: 'GitHub Pages ប្រើសម្រាប់ Host Static Websites។',
    },
    {
      question: 'តើ File ណាដែលជា Entry Point សម្រាប់ GitHub Pages?',
      options: [
        'style.css',
        'index.html',
        'main.js',
        'README.md',
      ],
      correct: 1,
      explanation: '`index.html` ជា Entry Point។',
    },
    {
      question: 'តើអ្នកបើក GitHub Pages នៅឯណា?',
      options: [
        'Issues Tab',
        'Settings > Pages',
        'Actions Tab',
        'Projects Tab',
      ],
      correct: 1,
      explanation: 'បើក GitHub Pages នៅ Settings > Pages។',
    },
    {
      question: 'តើ URL សម្រាប់ GitHub Pages មានទម្រង់ដូចម្តេច?',
      options: [
        'yourusername.github.io/repository',
        'github.com/yourusername',
        'yourusername.github.io',
        'repository.github.io',
      ],
      correct: 0,
      explanation: 'URL គឺ `yourusername.github.io/repository`។',
    },
    {
      question: 'តើអ្នកអាចប្រើ Custom Domain ជាមួយ GitHub Pages បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Custom Domain អាចប្រើបាន។',
    },
    {
      question: 'តើ GitHub Actions អាច Deploy ទៅ GitHub Pages បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitHub Actions អាច Deploy ទៅ GitHub Pages។',
    },
    {
      question: 'តើ File ប្រភេទណាដែល GitHub Pages គាំទ្រ?',
      options: [
        'Dynamic PHP',
        'Static HTML, CSS, JS',
        'Python Scripts',
        'Database Files',
      ],
      correct: 1,
      explanation: 'GitHub Pages គាំទ្រ Static HTML, CSS, JS។',
    },
    {
      question: 'តើអ្នកគួរបើក Enforce HTTPS ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Enforce HTTPS ជា Best Practice។',
    },
    {
      question: 'តើ Branch ណាដែលជាទូទៅប្រើសម្រាប់ GitHub Pages?',
      options: [
        'feature',
        'main',
        'develop',
        'test',
      ],
      correct: 1,
      explanation: 'Branch `main` ជាទូទៅប្រើសម្រាប់ GitHub Pages។',
    },
    {
      question: 'តើ `peaceiris/actions-gh-pages@v3` ជាអ្វី?',
      options: [
        'Issue Template',
        'Marketplace Action សម្រាប់ Deploy',
        'Branch Protection Rule',
        'Custom Domain',
      ],
      correct: 1,
      explanation: '`peaceiris/actions-gh-pages@v3` ជា Marketplace Action សម្រាប់ Deploy។',
    },
    {
      question: 'តើអ្នកអាច Host Multiple Pages នៅ Repository តែមួយបានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 1,
      explanation: 'ទេ តែមួយ Page ក្នុង Repository។',
    },
    {
      question: 'តើ Folder ណាដែលជាទូទៅប្រើសម្រាប់ GitHub Pages?',
      options: [
        '/docs',
        '/src',
        '/root',
        '/tests',
      ],
      correct: 0,
      explanation: 'Folder `/ (root)` ឬ `/docs` ជាទូទៅប្រើ។',
    },
    {
      question: 'តើ GitHub Pages គាំទ្រ Dynamic Content ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 1,
      explanation: 'ទេ GitHub Pages គាំទ្រ Static Content ប៉ុណ្ណោះ។',
    },
    {
      question: 'តើអ្នកត្រូវការ `index.html` ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ `index.html` ជា Entry Point។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ GitHub Pages គឺជាអ្វី?',
      options: [
        'ប្រើ Dynamic Content',
        'ប្រើ `index.html` និង Enforce HTTPS',
        'មិនប្រើ CSS',
        'លុប Branch',
      ],
      correct: 1,
      explanation: 'ប្រើ `index.html` និង Enforce HTTPS ជា Best Practice�।',
    },
    {
      question: 'តើ GitHub Pages ឥតគិតថ្លៃទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitHub Pages ឥតគិតថ្លៃ។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ GitHub Pages៖
* បង្កើត Static Website។
* Host នៅ GitHub Pages។
* Deploy ជាមួយ GitHub Actions។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Repository **my-pages-repo** នៅ GitHub។
2. បង្កើត \`index.html\`:
   \`\`\`html
   <!DOCTYPE html>
   <html>
   <head>
     <title>My Page</title>
   </head>
   <body>
     <h1>Welcome to My Page</h1>
   </body>
   </html>
   \`\`\`
3. Clone Repository:
   \`\`\`bash
   git clone https://github.com/yourusername/my-pages-repo.git
   cd my-pages-repo
   \`\`\`
4. Commit និង Push:
   \`\`\`bash
   git add index.html
   git commit -m "feat: add index.html"
   git push origin main
   \`\`\`
5. បើក GitHub Pages:
   - ចូលទៅ Settings > Pages, ជ្រើស Branch: \`main\`, Folder: \`/ (root)\`។
6. បង្កើត Workflow File \`.github/workflows/deploy.yml\`:
   \`\`\`yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: \${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./
   \`\`\`
7. Commit និង Push Workflow:
   \`\`\`bash
   git add .github/workflows/deploy.yml
   git commit -m "ci: add GitHub Pages deployment"
   git push origin main
   \`\`\`
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ GitHub Pages

## ជំហានទី ១៖ បង្កើត Repository
- បង្កើត **my-pages-repo** នៅ GitHub។
- លទ្ធផល: Repository created

## ជំហានទី ២៖ បង្កើត \`index.html\`
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome to My Page</h1>
</body>
</html>
\`\`\`
- លទ្ធផល: Index file created

## ជំហានទី ៣៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-pages-repo.git
cd my-pages-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៤៖ Commit និង Push
\`\`\`bash
git add index.html
git commit -m "feat: add index.html"
git push origin main
# លទ្ធផល: Pushed to main
\`\`\`

## ជំហានទី ៥៖ បើក GitHub Pages
- ចូលទៅ Settings > Pages, ជ្រើស Branch: main, Folder: / (root)។
- លទ្ធផល: Website hosted at https://yourusername.github.io/my-pages-repo

## ជំហានទី ៦៖ បង្កើត Workflow File
- បង្កើត \`.github/workflows/deploy.yml\`:
  \`\`\`yaml
  name: Deploy to GitHub Pages
  on:
    push:
      branches: [ main ]
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Deploy
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: \${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./
  \`\`\`
- លទ្ធផល: Workflow created

## ជំហានទី ៧៖ Commit និង Push Workflow
\`\`\`bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Pages deployment"
git push origin main
# លទ្ធផល: Website deployed automatically
\`\`\`

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការប្រើ GitHub Pages និង Deployment។
`,
  },
};

export default GitHubLesson5_3Content;