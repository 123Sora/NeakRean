import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson5_5Content: LessonContent = {
  title: 'GitLab API',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា GitLab API និងគោលបំណងរបស់វា',
    'ស្គាល់ពីរបៀបចូលប្រើ GitLab API',
    'ដឹងពីរបៀបប្រើ Personal Access Tokens (PATs) សម្រាប់ការ Authentication',
    'របៀបប្រើ GitLab API ដើម្បីធ្វើស្វ័យប្រវត្តិកម្មភារកិច្ចទូទៅ (ឧទាហរណ៍៖ បង្កើត Project, Issue, Merge Request)',
    'យល់ដឹងពីការប្រើប្រាស់ GitLab API Libraries'
  ],
  content: `
# GitLab API 💻 automation

**GitLab API** គឺជាចំណុចប្រទាក់កម្មវិធី (API) ដែលអនុញ្ញាតឱ្យធ្វើអន្តរកម្មជាមួយ GitLab ដោយកម្មវិធី ឬស្វ័យប្រវត្តិកម្ម ដើម្បីគ្រប់គ្រង Projects, Issues, Merge Requests, Pipelines ជាដើម។

## 1. អ្វីទៅជា GitLab API? 💡

* **និយមន័យ:** RESTful API សម្រាប់ធ្វើអន្តរកម្មជាមួយ GitLab Resources។
* **គោលបំណង:**
  * **Automation:** ស្វ័យប្រវត្តិកម្មភារកិច្ច (ឧ. បង្កើត Project, បិទ Issues)។
  * **Integration:** ភ្ជាប់ជាមួយប្រព័ន្ធខាងក្រៅ (ឧ. Jira, Slack)។
  * **Reporting:** ទាញទិន្នន័យសម្រាប់ Report ឬការវិភាគ។
  * **Custom Workflows:** បង្កើត Workflows ផ្ទាល់ខ្លួន។

## 2. ចូលប្រើ GitLab API 🌐

* **Base URL:** \`https://gitlab.com/api/v4\` (GitLab.com) ឬ \`https://your-gitlab-instance.com/api/v4\` (Self-managed)។
* **HTTP Methods:** GET, POST, PUT, DELETE។
* **Documentation:** \`https://docs.gitlab.com/ee/api/\`។

## 3. Personal Access Tokens (PATs) 🔑

* **បង្កើត PAT:**
  1. ចូលទៅ **User Settings > Access Tokens**។
  2. បញ្ចូល **Name** (ឧ. \`API Automation\`)។
  3. កំណត់ **Expiration date**។
  4. ជ្រើសរើស **Scopes** (ឧ. \`api\`, \`read_repository\`, \`write_repository\`)។
  5. ចម្លង Token និងរក្សាទុកសុវត្ថិភាព។
* **ប្រើ PAT:** បញ្ជូនជា Header \`Private-Token: <your_pat_token>\`។

\`\`\`bash
curl --header "Private-Token: <your_pat_token>" "https://gitlab.com/api/v4/user"
\`\`\`

## 4. ស្វ័យប្រវត្តិកម្មភារកិច្ច 🤖

* **List Projects:**
  \`\`\`bash
  curl --header "Private-Token: <your_pat_token>" "https://gitlab.com/api/v4/projects"
  \`\`\`
* **Create Project:**
  \`\`\`bash
  curl --request POST --header "Private-Token: <your_pat_token>" \
       --header "Content-Type: application/json" \
       --data '{"name": "My New API Project", "visibility": "private"}' \
       "https://gitlab.com/api/v4/projects"
  \`\`\`
* **Create Issue:**
  \`\`\`bash
  curl --request POST --header "Private-Token: <your_pat_token>" \
       --header "Content-Type: application/json" \
       --data '{"title": "Bug: Login button not working", "description": "Users cannot click the login button.", "labels": "bug,frontend"}' \
       "https://gitlab.com/api/v4/projects/<project_id>/issues"
  \`\`\`

## 5. API Libraries 📚

* **Python:** \`python-gitlab\`
* **Ruby:** \`gitlab-ruby\`
* **Node.js:** \`node-gitlab\`
* **Go:** \`go-gitlab\`

\`\`\`python
import gitlab
gl = gitlab.Gitlab('https://gitlab.com', private_token='<your_pat_token>')
project = gl.projects.get(12345)
issue = project.issues.create({
    'title': 'New Feature',
    'description': 'Implement user profile page.',
    'labels': ['feature', 'backend']
})
print(f"Issue created: {issue.web_url}")
\`\`\`

> **គន្លឹះ:** ប្រើ PATs ជាមួយ Scopes ដែនកំណត់ និងរក្សាទុកសុវត្ថិភាព។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Personal Access Token
\`\`\`text
[Personal Access Tokens Page]
-------------------------------------------------
| Name:        [ API Automation Token ]          |
| Expiration Date: [ 2025-12-31 ]                |
| Scopes:                                         |
|   [x] api                                       |
|   [x] read_repository                           |
|   [x] write_repository                          |
|   [ ] read_registry                             |
|   [ ] write_registry                            |
|   [ ] sudo                                      |
| [ Create personal access token ]                |
-------------------------------------------------
\`\`\`

# ឧទាហរណ៍ ២: ប្រើ cURL ដើម្បី List Projects
\`\`\`bash
curl --header "Private-Token: <your_pat_token>" "https://gitlab.com/api/v4/projects?membership=true&per_page=5"
\`\`\`
**Output:**
\`\`\`json
[
  {
    "id": 12345,
    "name": "my-awesome-project",
    "web_url": "https://gitlab.com/your-username/my-awesome-project"
  },
  {
    "id": 67890,
    "name": "another-project",
    "web_url": "https://gitlab.com/your-username/another-project"
  }
]
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `GitLab API` គឺជាអ្វី?',
      options: [
        'ជា Graphical User Interface (GUI) របស់ GitLab',
        'ជាចំណុចប្រទាក់កម្មវិធី (API) ដែលអនុញ្ញាតឱ្យអ្នកធ្វើអន្តរកម្មជាមួយ GitLab ដោយកម្មវិធី ឬស្វ័យប្រវត្តិកម្ម',
        'ជា Command Line Interface (CLI) សម្រាប់ GitLab',
        'ជា Database របស់ GitLab'
      ],
      correct: 1,
      explanation: 'GitLab API គឺជាចំណុចប្រទាក់កម្មវិធី (API) ដែលអនុញ្ញាតឱ្យអ្នកធ្វើអន្តរកម្មជាមួយ GitLab ដោយកម្មវិធី ឬស្វ័យប្រវត្តិកម្ម។'
    },
    {
      question: 'តើ `GitLab API` ប្រើប្រាស់ Standard HTTP Methods អ្វីខ្លះ?',
      options: [
        'GET, POST, PUT, DELETE',
        'CREATE, READ, UPDATE, DELETE',
        'FETCH, SEND, RECEIVE',
        'UPLOAD, DOWNLOAD'
      ],
      correct: 0,
      explanation: 'GitLab API គឺជា RESTful API ដែលប្រើប្រាស់ Standard HTTP Methods (GET, POST, PUT, DELETE) ។'
    },
    {
      question: 'តើ `Personal Access Tokens (PATs)` ត្រូវបានណែនាំសម្រាប់ការ Authentication នៅពេលណា?',
      options: [
        'សម្រាប់ការប្រើប្រាស់ដោយដៃតែប៉ុណ្ណោះ',
        'សម្រាប់ការប្រើប្រាស់ស្វ័យប្រវត្តិកម្ម និង Script',
        'សម្រាប់ការមើល Code តែប៉ុណ្ណោះ',
        'សម្រាប់ការគ្រប់គ្រង Users តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'Personal Access Tokens (PATs) គឺជាវិធីសាស្ត្រដែលត្រូវបានណែនាំបំផុតសម្រាប់ការធ្វើ Authentication សម្រាប់ស្វ័យប្រវត្តិកម្ម និង Script ។'
    },
    {
      question: 'តើ `PATs` គួរតែត្រូវបានរក្សាទុកដោយសុវត្ថិភាពដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ PATs គួរតែត្រូវបានរក្សាទុកដោយសុវត្ថិភាព ព្រោះវាផ្តល់សិទ្ធិចូលប្រើគណនីរបស់អ្នក។'
    },
    {
      question: 'តើ `Scope` នៅក្នុង PAT កំណត់អ្វី?',
      options: [
        'ឈ្មោះរបស់ Token',
        'កាលបរិច្ឆេទផុតកំណត់របស់ Token',
        'Permissions ដែល Token មាន',
        'Username សម្រាប់ Token'
      ],
      correct: 2,
      explanation: 'Scope នៅក្នុង PAT កំណត់ Permissions ដែល Token មាន (ឧទាហរណ៍៖ `api`, `read_repository`) ។'
    },
    {
      question: 'តើ `Private-Token` Header ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីក្នុង cURL Request?',
      options: [
        'ដើម្បីបញ្ជាក់ឈ្មោះ Project',
        'ដើម្បីបញ្ជាក់ API Version',
        'ដើម្បីបញ្ជូន Personal Access Token សម្រាប់ការ Authentication',
        'ដើម្បីបញ្ជាក់ Content Type'
      ],
      correct: 2,
      explanation: '`Private-Token` Header ត្រូវបានប្រើដើម្បីបញ្ជូន Personal Access Token សម្រាប់ការ Authentication ទៅកាន់ GitLab API ។'
    },
    {
      question: 'តើ `GitLab API` អាចត្រូវបានប្រើដើម្បី `Create a New Project` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab API អាចត្រូវបានប្រើដើម្បីបង្កើត Project ថ្មីដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `GitLab API` អាចត្រូវបានប្រើដើម្បី `Create an Issue` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab API អាចត្រូវបានบ្រើដើម្បីបង្កើត Issue ថ្មីដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `GitLab API` អាចត្រូវបានប្រើដើម្បី `Create a Merge Request` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab API អាចត្រូវបានប្រើដើម្បីបង្កើត Merge Request ថ្មីដោយស្វ័យប្រវត្តិ�।'
    },
    {
      question: 'តើ `API Libraries` ជួយសម្រួលដល់ការធ្វើអន្តរកម្មជាមួយ GitLab API ដោយរបៀបណា?',
      options: [
        'ដោយការផ្តល់ GUI សម្រាប់ API',
        'ដោយការដោះស្រាយការបង្កើត Request, ការគ្រប់គ្រង Authentication, និងការ Parse Responses',
        'ដោយការលុបបំបាត់តម្រូវការសម្រាប់ Authentication',
        'ដោយការបង្កើនល្បឿន Network Connection'
      ],
      correct: 1,
      explanation: 'API Libraries ដោះស្រាយការបង្កើត Request, ការគ្រប់គ្រង Authentication, និងការ Parse Responses ដែលធ្វើឱ្យការធ្វើអន្តរកម្មជាមួយ GitLab API កាន់តែងាយស្រួល។'
    },
    {
      question: 'តើ `Base URL` សម្រាប់ GitLab.com API គឺអ្វី?',
      options: [
        '`https://gitlab.com/api/v3`',
        '`https://gitlab.com/api/v4`',
        '`https://api.gitlab.com`',
        '`https://gitlab.com/api/v2`'
      ],
      correct: 1,
      explanation: 'Base URL សម្រាប់ GitLab.com API គឺ `https://gitlab.com/api/v4` ។'
    },
    {
      question: 'តើ `Automation` គឺជាគោលបំណងមួយនៃ GitLab API ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Automation (ស្វ័យប្រវត្តិកម្មភារកិច្ចដដែលៗ) គឺជាគោលបំណងសំខាន់មួយនៃ GitLab API ។'
    },
    {
      question: 'តើ `GitLab API` អាចត្រូវបានប្រើដើម្បី `ទាញយកទិន្នន័យសម្រាប់ Report` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab API អាចត្រូវបានប្រើដើម្បីទាញយកទិន្នន័យសម្រាប់ Report ផ្ទាល់ខ្លួន ឬការវិភាគ។'
    },
    {
      question: 'តើ `PATs` អាចត្រូវបានកំណត់ `Expiration date` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ PATs អាចត្រូវបានកំណត់ Expiration date ដើម្បីបង្កើនសុវត្ថិភាព។'
    },
    {
      question: 'តើ `cURL` គឺជាឧបករណ៍មួយសម្រាប់ធ្វើអន្តរកម្មជាមួយ API ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ cURL គឺជាឧបករណ៍ Command Line ដ៏ពេញនិយមមួយសម្រាប់ធ្វើអន្តរកម្មជាមួយ API ។'
    },
    {
      question: 'តើ `GitLab API` គាំទ្រ `Custom Workflows` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab API អនុញ្ញាតឱ្យអ្នកបង្កើត Workflows ផ្ទាល់ខ្លួនដែលមិនត្រូវបានគាំទ្រដោយផ្ទាល់នៅក្នុង GitLab UI ។'
    },
    {
      question: 'តើ `PAT` អាចត្រូវបានបង្កើតនៅក្នុង `GitLab User Settings` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ PAT អាចត្រូវបានបង្កើតនៅក្នុង GitLab User Settings ក្រោម `Access Tokens` ។'
    },
    {
      question: 'តើ `API` គឺជាអក្សរកាត់សម្រាប់អ្វី?',
      options: [
        'Application Protocol Interface',
        'Automated Program Interaction',
        'Application Programming Interface',
        'Advanced Process Integration'
      ],
      correct: 2,
      explanation: 'API គឺជាអក្សរកាត់សម្រាប់ Application Programming Interface ។'
    },
    {
      question: 'តើ `GitLab API` អាចត្រូវបានប្រើដើម្បីគ្រប់គ្រង `CI/CD Pipelines` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab API អាចត្រូវបានប្រើដើម្បី Trigger, មើលស្ថានភាព, និងគ្រប់គ្រង CI/CD Pipelines ។'
    },
    {
      question: 'តើ `PAT` គួរតែមាន `Scopes` ដែលមានដែនកំណត់ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ PAT គួរតែមាន Scopes ដែលមានដែនកំណត់ (Permissions តិចបំផុតដែលត្រូវការ) ដើម្បីកាត់បន្ថយហានិភ័យសុវត្ថិភាព។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: ប្រើ GitLab API

លំហាត់នេះនឹងណែនាំអ្នកប្រើ **GitLab API** ដើម្បីធ្វើស្វ័យប្រវត្តិកម្មភារកិច្ចដូចជា បង្កើត Personal Access Token (PAT), គ្រប់គ្រង Projects, និង Issues ដោយប្រើ cURL។ តម្រូវឱ្យមាន Terminal។

1. **រៀបចំ Project និង PAT**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្កើត Project **'api-lab'**:
     * **Visibility Level:** Private
     * **Initialize with a README:** ធីក
     * ចុច **Create project**
   * **បង្កើត PAT**:
     * ចូលទៅ **User Settings > Access Tokens**
     * **Name:** \`API Lab Token\`
     * **Expiration date:** ៧ ថ្ងៃ
     * **Scopes:** \`api\`, \`read_repository\`, \`write_repository\`
     * ចម្លង Token និងរក្សាទុកសុវត្ថិភាព
   * **រក Project ID**:
     * នៅ **Project Overview**, ចម្លង **Project ID** (ឧ. 12345)

2. **ប្រើ cURL ដើម្បីទាញព័ត៌មាន Project**:
   * បើក Terminal និងដំណើរការ:
     \`\`\`bash
     curl --header "Private-Token: <your_pat_token>" "https://gitlab.com/api/v4/projects?membership=true&per_page=3"
     \`\`\`
     * **ផ្ទៀងផ្ទាត់:** Output បង្ហាញ Project \`api-lab\` (ឧ. \`"name": "api-lab"\`)។
   * ដំណើរការ:
     \`\`\`bash
     curl --header "Private-Token: <your_pat_token>" "https://gitlab.com/api/v4/projects/<project_id>"
     \`\`\`
     * **ផ្ទៀងផ្ទាត់:** Output បង្ហាញព័ត៌មាន Project \`api-lab\` (ឧ. \`"id": 12345\`, \`"visibility": "private"\`)។

3. **បង្កើត Issue ថ្មី**:
   * ដំណើរការ:
     \`\`\`bash
     curl --request POST --header "Private-Token: <your_pat_token>" \
          --header "Content-Type: application/json" \
          --data '{"title": "API Created Issue: Improve README", "description": "Add more details to the README file.", "labels": "documentation"}' \
          "https://gitlab.com/api/v4/projects/<project_id>/issues"
     \`\`\`
   * **ផ្ទៀងផ្ទាត់**:
     * ចូលទៅ **Issues > List** នៅ Project \`api-lab\`។
     * ផ្ទៀងផ្ទាត់ Issue \`"API Created Issue: Improve README"\` មាន Label \`documentation\`។

4. **បង្កើត Project ថ្មី**:
   * ដំណើរការ:
     \`\`\`bash
     curl --request POST --header "Private-Token: <your_pat_token>" \
          --header "Content-Type: application/json" \
          --data '{"name": "New API Project", "visibility": "private"}' \
          "https://gitlab.com/api/v4/projects"
     \`\`\`
   * **ផ្ទៀងផ្ទាត់**:
     * ចូលទៅ Dashboard នៅ GitLab UI។
     * ផ្ទៀងផ្ទាត់ Project \`"New API Project"\` បង្ហាញជា Private។

> **គន្លឹះ:** ពិនិត្យ Output នៃ cURL Commands និង GitLab UI ដើម្បីផ្ទៀងផ្ទាត់លទ្ធផល។ ប្រើ \`jq\` ដើម្បី Format JSON Output ប្រសិនបើត្រូវការ។
`,
    solution: `
# ដំណោះស្រាយ: ប្រើ GitLab API

បន្ទាប់ពីអនុវត្តជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផល:

## ជំហានទី ១: រៀបចំ Project និង PAT
* **Project:** បានបង្កើត \`api-lab\` ជា Private ជាមួយ README។
* **PAT:** 
  \`\`\`text
  Token Name: API Lab Token
  Expiration Date: 7 days
  Scopes: api, read_repository, write_repository
  \`\`\`
* **Project ID:** 12345

## ជំហានទី ២: ទាញព័ត៌មាន Project
* **List Projects:**
  \`\`\`bash
  curl --header "Private-Token: <your_pat_token>" "https://gitlab.com/api/v4/projects?membership=true&per_page=3"
  \`\`\`
  **Output:**
  \`\`\`json
  [
    {
      "id": 12345,
      "name": "api-lab",
      "web_url": "https://gitlab.com/your-username/api-lab"
    }
  ]
  \`\`\`
* **Get Specific Project:**
  \`\`\`bash
  curl --header "Private-Token: <your_pat_token>" "https://gitlab.com/api/v4/projects/12345"
  \`\`\`
  **Output:**
  \`\`\`json
  {
    "id": 12345,
    "name": "api-lab",
    "path_with_namespace": "your-username/api-lab",
    "web_url": "https://gitlab.com/your-username/api-lab",
    "visibility": "private"
  }
  \`\`\`

## ជំហានទី ៣: បង្កើត Issue
* **Command:**
  \`\`\`bash
  curl --request POST --header "Private-Token: <your_pat_token>" \
       --header "Content-Type: application/json" \
       --data '{"title": "API Created Issue: Improve README", "description": "Add more details to the README file.", "labels": "documentation"}' \
       "https://gitlab.com/api/v4/projects/12345/issues"
  \`\`\`
* **Output:**
  \`\`\`json
  {
    "id": 67890,
    "title": "API Created Issue: Improve README",
    "description": "Add more details to the README file.",
    "labels": ["documentation"],
    "web_url": "https://gitlab.com/your-username/api-lab/-/issues/1"
  }
  \`\`\`
* **Verification:** Issue \`"API Created Issue: Improve README"\` បង្ហាញនៅ **Issues > List** ជាមួយ Label \`documentation\`។

## ជំហានទី ៤: បង្កើត Project
* **Command:**
  \`\`\`bash
  curl --request POST --header "Private-Token: <your_pat_token>" \
       --header "Content-Type: application/json" \
       --data '{"name": "New API Project", "visibility": "private"}' \
       "https://gitlab.com/api/v4/projects"
  \`\`\`
* **Output:**
  \`\`\`json
  {
    "id": 98765,
    "name": "New API Project",
    "path_with_namespace": "your-username/new-api-project",
    "web_url": "https://gitlab.com/your-username/new-api-project",
    "visibility": "private"
  }
  \`\`\`
* **Verification:** Project \`"New API Project"\` បង្ហាញនៅ Dashboard ជា Private�।

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project:** \`api-lab\` (ID: 12345)
* **PAT:** \`API Lab Token\` (Scopes: \`api\`, \`read_repository\`, \`write_repository\`)
* **Issue:** \`API Created Issue: Improve README\` (Label: \`documentation\`)
* **New Project:** \`New API Project\` (Private)
* **API Calls:** ទាំង List Projects, Get Project, និង Create Issue/Project ជោគជ័យ

លំហាត់នេះបានជួយអ្នកយល់ពីការប្រើ GitLab API ដើម្បីធ្វើស្វ័យប្រវត្តិកម្មភារកិច្ច។
`
  }
};

export default GitLabLesson5_5Content;
