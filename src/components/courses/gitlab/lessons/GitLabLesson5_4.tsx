import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson5_4Content: LessonContent = {
  title: 'GitLab Pages (សម្រាប់ Static Websites)',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា GitLab Pages និងគោលបំណងរបស់វា',
    'ស្គាល់ពីរបៀបដែល GitLab Pages ដំណើរការដោយប្រើ CI/CD',
    'ដឹងពីរបៀបបង្កើត Static Website ជាមួយ GitLab Pages',
    'របៀបកំណត់រចនាសម្ព័ន្ធ Domain ផ្ទាល់ខ្លួនសម្រាប់ GitLab Pages (Custom Domains)',
    'យល់ដឹងពីអត្ថប្រយោជន៍នៃការប្រើប្រាស់ GitLab Pages'
  ],
  content: `
# GitLab Pages (សម្រាប់ Static Websites) 🌐

**GitLab Pages** គឺជាមុខងាររបស់ GitLab ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត បង្ហោះ និងគ្រប់គ្រង Static Websites ដោយផ្ទាល់ពី GitLab Repository ដោយប្រើ GitLab CI/CD។

## 1. អ្វីទៅជា GitLab Pages? 💡

* **និយមន័យ:** សេវាកម្មសម្រាប់បង្ហោះ Static Websites ពី Git Repository។
* **គោលបំណង:**
  * **Host Static Websites:** សម្រាប់ HTML, CSS, JavaScript Websites (ឧ. Blog, Portfolio, Documentation)។
  * **CI/CD Integration:** Build និង Deploy ដោយស្វ័យប្រវត្តិ។
  * **Free Hosting:** សម្រាប់ Public Projects។
  * **Custom Domains:** គាំទ្រ Domain Name ផ្ទាល់ខ្លួន។
  * **Version Control:** គ្រប់គ្រង Website Content ជាមួយ Git។

## 2. របៀបដំណើរការ GitLab Pages 🔄

* **Source Code:** រក្សាទុក HTML, CSS, JS, ឬ Static Site Generator Files នៅក្នុង Repository។
* **\`.gitlab-ci.yml\`:** បង្កើត Job \`pages\` ដើម្បី Build Website ទៅ Folder \`public\`។
* **Deployment:** GitLab Pages Deploy Content ពី Folder \`public\` ទៅ Server។
* **Access URL:** Website អាចចូលប្រើបានតាម \`https://<username>.gitlab.io/<project-name>\`។

\`\`\`yaml
pages:
  stage: deploy
  script:
    - mkdir .public
    - cp -r * .public
    - mv .public public
  artifacts:
    paths:
      - public
  only:
    - main
\`\`\`

## 3. បង្កើត Static Website ជាមួយ GitLab Pages 🚀

* **Project សាមញ្ញ:** បន្ថែម HTML, CSS, JS Files និង \`.gitlab-ci.yml\`។
* **Static Site Generators (SSG):** គាំទ្រ Jekyll, Hugo, Gatsby ជាដើម។

\`\`\`yaml
# ឧទាហរណ៍សម្រាប់ Hugo
image: monachus/hugo
pages:
  stage: deploy
  script:
    - hugo
  artifacts:
    paths:
      - public
  only:
    - main
\`\`\`

## 4. កំណត់ Custom Domains 🔗

* **Add Domain:** នៅ \`Settings > Pages\`, បញ្ចូល Domain (ឧ. \`www.yourwebsite.com\`)។
* **Configure DNS:** បន្ថែម CNAME (Subdomain) ឬ A Record (Root Domain) នៅ DNS Provider។
* **Verify Domain:** ផ្ទៀងផ្ទាត់នៅ GitLab Pages Settings។
* **HTTPS:** បើកដោយស្វ័យប្រវត្តិជាមួយ Let's Encrypt។

## 5. អត្ថប្រយោជន៍ ✨

* **Cost-Effective:** ឥតគិតថ្លៃសម្រាប់ Public Projects។
* **Simplicity:** ងាយស្រួលដំឡើង។
* **Version Control:** គ្រប់គ្រង Content ជាមួយ Git។
* **CI/CD Integration:** Deployment ស្វ័យប្រវត្តិ។
* **Custom Domains & HTTPS:** Professional Look និង Security។

> **គន្លឹះ:** GitLab Pages ល្អសម្រាប់ Static Website Hosting ជាមួយ CI/CD Integration។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: រចនាសម្ព័ន្ធ Project
\`\`\`text
my-website-project/
├── index.html
├── style.css
├── script.js
└── .gitlab-ci.yml
\`\`\`

# ឧទាហរណ៍ ២: GitLab Pages Settings
\`\`\`text
[GitLab Pages Settings]
-------------------------------------------------------------------
| Your Pages website: https://your-username.gitlab.io/my-static-website |
| Custom Domains: www.mycustomsite.com (Needs verification, CNAME to your-username.gitlab.io) |
-------------------------------------------------------------------
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ GitLab Pages ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Database',
        'បង្ហោះ Static Websites',
        'ដំណើរការ Dynamic Web Applications',
        'គ្រប់គ្រង Users'
      ],
      correct: 1,
      explanation: 'GitLab Pages ប្រើសម្រាប់បង្ហោះ Static Websites។'
    },
    {
      question: 'តើ GitLab Pages ប្រើអ្វីដើម្បី Build និង Deploy Website?',
      options: [
        'Manual Upload',
        'FTP',
        'GitLab CI/CD',
        'Third-party Hosting'
      ],
      correct: 2,
      explanation: 'GitLab Pages ប្រើ GitLab CI/CD សម្រាប់ Build និង Deploy�।'
    },
    {
      question: 'តើ Job ណាដែលត្រូវមាននៅក្នុង `.gitlab-ci.yml` សម្រាប់ GitLab Pages?',
      options: ['build', 'test', 'pages', 'deploy'],
      correct: 2,
      explanation: 'Job `pages` ត្រូវមាននៅក្នុង `.gitlab-ci.yml`។'
    },
    {
      question: 'តើ Content សម្រាប់ GitLab Pages ត្រូវដាក់នៅ Folder ណា?',
      options: ['src', 'dist', 'public', 'build'],
      correct: 2,
      explanation: 'Content ត្រូវដាក់នៅ Folder `public`។'
    },
    {
      question: 'តើ `artifacts` នៅក្នុង Job `pages` ត្រូវចង្អុលទៅ Folder ណា?',
      options: ['src', 'dist', 'public', 'build'],
      correct: 2,
      explanation: '`artifacts` ត្រូវចង្អុលទៅ Folder `public`។'
    },
    {
      question: 'តើ GitLab Pages ផ្តល់ Free Hosting សម្រាប់ Project ប្រភេទណា?',
      options: ['Private Projects', 'Internal Projects', 'Public Projects', 'គ្រប់ Projects'],
      correct: 2,
      explanation: 'GitLab Pages ផ្តល់ Free Hosting សម្រាប់ Public Projects។'
    },
    {
      question: 'តើ GitLab Pages គាំទ្រ Custom Domains ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab Pages គាំទ្រ Custom Domains។'
    },
    {
      question: 'តើ GitLab Pages គាំទ្រ Static Site Generators ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ គាំទ្រ SSG ដូចជា Jekyll, Hugo, Gatsby។'
    },
    {
      question: 'តើ GitLab Pages ប្រើអ្វីសម្រាប់ HTTPS នៅ Custom Domains?',
      options: ['Self-signed Certificates', 'Let\'s Encrypt', 'Paid SSL', 'Manual Configuration'],
      correct: 1,
      explanation: 'GitLab Pages ប្រើ Let\'s Encrypt សម្រាប់ HTTPS។'
    },
    {
      question: 'តើ GitLab Pages គ្រប់គ្រង Website Content ជាមួយ Version Control ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Content ត្រូវបានគ្រប់គ្រងជាមួយ Git។'
    },
    {
      question: 'URL លំនាំដើមរបស់ GitLab Pages មានទម្រង់អ្វី?',
      options: [
        '`https://<project-name>.gitlab.io`',
        '`https://<username>.gitlab.io/<project-name>`',
        '`https://gitlab.io/<project-name>`',
        '`https://pages.gitlab.com/<project-name>`'
      ],
      correct: 1,
      explanation: 'URL គឺ `https://<username>.gitlab.io/<project-name>`។'
    },
    {
      question: 'តើ CNAME Record ប្រើសម្រាប់អ្វីនៅ Custom Domain?',
      options: [
        'ចង្អុល Root Domain ទៅ IP',
        'ចង្អុល Subdomain ទៅ GitLab Pages URL',
        'ផ្ទៀងផ្ទាត់ Ownership',
        'កំណត់ Nameservers'
      ],
      correct: 1,
      explanation: 'CNAME Record ចង្អុល Subdomain ទៅ `<username>.gitlab.io`។'
    },
    {
      question: 'តើ A Record ប្រើសម្រាប់អ្វីនៅ Custom Domain?',
      options: [
        'ចង្អុល Subdomain',
        'ចង្អុល Root Domain ទៅ IP',
        'ផ្ទៀងផ្ទាត់ Ownership',
        'កំណត់ Nameservers'
      ],
      correct: 1,
      explanation: 'A Record ចង្អុល Root Domain ទៅ IP របស់ GitLab Pages។'
    },
    {
      question: 'តើ Deployment ទៅ GitLab Pages ស្វ័យប្រវត្តិឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Deployment ស្វ័យប្រវត្តិជាមួយ CI/CD។'
    },
    {
      question: 'តើ GitLab Pages Scale បានល្អសម្រាប់ Static Content ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab Pages Scale បានល្អសម្រាប់ Static Content�।'
    },
    {
      question: 'តើ GitLab Pages អាចបង្ហោះ Blog បានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab Pages ល្អសម្រាប់ Blog។'
    },
    {
      question: 'តើ GitLab Pages ផ្តល់ Verification Record សម្រាប់ Custom Domain ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab ផ្តល់ CNAME ឬ TXT Record។'
    },
    {
      question: 'តើ GitLab Pages ប្រើសម្រាប់ Dynamic Web Applications ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 1,
      explanation: 'ទេ GitLab Pages សម្រាប់ Static Websites ប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ GitLab Pages ផ្តល់ Professional Look ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ជាមួយ Custom Domains និង HTTPS។'
    },
    {
      question: 'តើ GitLab Pages អាចបង្ហោះ Documentation បានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab Pages ល្អសម្រាប់ Documentation។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: បង្កើត Static Website ជាមួយ GitLab Pages

លំហាត់នេះនឹងណែនាំអ្នកបង្កើត និង Deploy Static Website សាមញ្ញដោយប្រើ GitLab Pages។

1. **រៀបចំ Project**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្កើត Project **'my-gitlab-pages-site'**:
     * **Visibility Level:** Public (ដើម្បីឱ្យ Website ចូលប្រើបានជាសាធារណៈ)។
     * **Initialize with a README:** ធីក។
     * ចុច **Create project**។

2. **បង្កើត Files Website**:
   * **File 'index.html':**
     \`\`\`html
     <!DOCTYPE html>
     <html>
     <head>
       <title>My GitLab Pages Site</title>
       <style>
         body { font-family: sans-serif; text-align: center; padding: 50px; background-color: #f0f0f0; }
         h1 { color: #333; }
         p { color: #666; }
       </style>
     </head>
     <body>
       <h1>Hello from GitLab Pages!</h1>
       <p>This is a simple static website hosted on GitLab Pages.</p>
       <p>Current time: <span id="current-time"></span></p>
       <script>
         document.getElementById('current-time').innerText = new Date().toLocaleString();
       </script>
     </body>
     </html>
     \`\`\`
     * Commit message: \`Add index.html\`
     * Target branch: \`main\`
   * **File '.gitlab-ci.yml':**
     \`\`\`yaml
     pages:
       stage: deploy
       script:
         - echo "Building static website..."
         - mkdir .public
         - cp -r * .public
         - mv .public public
         - echo "Website content prepared."
       artifacts:
         paths:
           - public
       only:
         - main
     \`\`\`
     * Commit message: \`Configure GitLab Pages\`
     * Target branch: \`main\`
   * Commit Files ទៅ Repository។

3. **ពិនិត្យ Pipeline និង Website**:
   * ចូលទៅ **CI/CD > Pipelines** និងផ្ទៀងផ្ទាត់ថា Pipeline ដំណើរការជោគជ័យ។
   * ចូលទៅ **Settings > Pages** ដើម្បីមើល URL (ឧ. \`https://your-username.gitlab.io/my-gitlab-pages-site\`)។
   * ចុច URL ដើម្បីមើល Website និងផ្ទៀងផ្ទាត់ថា Response បង្ហាញ "Hello from GitLab Pages!"។

4. **កំណត់ Custom Domain (Optional)**:
   * នៅ **Settings > Pages**, ចុច **New Domain** និងបញ្ចូល \`www.mycustomsite.com\`។
   * នៅ DNS Provider, បន្ថែម CNAME Record ចង្អុលទៅ \`your-username.gitlab.io\`។
   * ត្រឡប់ទៅ **Settings > Pages** និងចុច **Verify**។
   * ផ្ទៀងផ្ទាត់ថា Domain ដំណើរការនិង HTTPS ត្រូវបានបើក។

> **គន្លឹះ:** ពិនិត្យ Pipeline Status នៅ **CI/CD > Pipelines** និង Website URL នៅ **Settings > Pages**។
`,
    solution: `
# ដំណោះស្រាយ: បង្កើត Static Website ជាមួយ GitLab Pages

បន្ទាប់ពីអនុវត្តជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផល:

## ជំហានទី ១: រៀបចំ Project
* បានបង្កើត Project **my-gitlab-pages-site** ជាមួយ **Visibility Level** ជា **Public** និង **README**។
* URL សម្រាប់ GitLab Pages: \`https://your-username.gitlab.io/my-gitlab-pages-site\`

## ជំហានទី ២: បង្កើត Files Website
* **File 'index.html':**
  \`\`\`html
  <!DOCTYPE html>
  <html>
  <head>
    <title>My GitLab Pages Site</title>
    <style>
      body { font-family: sans-serif; text-align: center; padding: 50px; background-color: #f0f0f0; }
      h1 { color: #333; }
      p { color: #666; }
    </style>
  </head>
  <body>
    <h1>Hello from GitLab Pages!</h1>
    <p>This is a simple static website hosted on GitLab Pages.</p>
    <p>Current time: <span id="current-time"></span></p>
    <script>
      document.getElementById('current-time').innerText = new Date().toLocaleString();
    </script>
  </body>
  </html>
  \`\`\`
* **File '.gitlab-ci.yml':**
  \`\`\`yaml
  pages:
    stage: deploy
    script:
      - echo "Building static website..."
      - mkdir .public
      - cp -r * .public
      - mv .public public
      - echo "Website content prepared."
    artifacts:
      paths:
        - public
    only:
      - main
  \`\`\`

## ជំហានទី ៣: ពិនិត្យ Pipeline និង Website
* **Sample Pipeline Output:**
  \`\`\`text
  Running with gitlab-runner 15.0.0
    on runner-123456
  ...
  [pages] Successfully prepared website content in 'public' directory
  Job succeeded
  \`\`\`
* **Verification:** Pipeline ដំណើរការជោគជ័យ។ Website នៅ \`https://your-username.gitlab.io/my-gitlab-pages-site\` បង្ហាញ "Hello from GitLab Pages!"។

## ជំហានទី ៤: កំណត់ Custom Domain (Optional)
* **Custom Domain:** \`www.mycustomsite.com\`
* **DNS Configuration:** CNAME Record ចង្អុលទៅ \`your-username.gitlab.io\`។
* **Verification:** Domain Status នៅ **Settings > Pages** បង្ហាញ "Verified" និង HTTPS បើក។

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project Name:** my-gitlab-pages-site
* **Website URL:** https://your-username.gitlab.io/my-gitlab-pages-site
* **Pipeline Status:** Success
* **Website Content:** បង្ហាញ "Hello from GitLab Pages!"
* **Custom Domain (Optional):** www.mycustomsite.com (Verified, HTTPS enabled)

លំហាត់នេះបានជួយអ្នកយល់ពីការបង្កើត និង Deploy Static Website ជាមួយ GitLab Pages និង CI/CD Integration។
`
  }
};

export default GitLabLesson5_4Content;
