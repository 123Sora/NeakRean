import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson1_2Content: LessonContent = {
  title: 'ការដំឡើង និងការរៀបចំ Postman',
  objectives: [
    'យល់ដឹងពីជម្រើសនៃការដំឡើង Postman (Desktop App vs. Web Client)',
    'របៀបដំឡើង Postman Desktop App',
    'របៀបប្រើប្រាស់ Postman Web Client',
    'ការបង្កើត និងគ្រប់គ្រង Postman Account',
    'ការយល់ដឹងពី Workspaces និងការបង្កើត Workspaces ថ្មី'
  ],
  content: `
# ការដំឡើង និងការរៀបចំ Postman ⚙️💻

ដើម្បីចាប់ផ្តើមប្រើប្រាស់ Postman អ្នកត្រូវដំឡើងវា ឬចូលប្រើតាមរយៈ Web Browser។ Postman ផ្តល់ជូននូវជម្រើសពីរគឺ Desktop App និង Web Client។

## 1. យល់ដឹងពីជម្រើសនៃការដំឡើង Postman 💡

* **Postman Desktop App:**
    * ជាកម្មវិធីដែលអ្នកដំឡើងនៅលើកុំព្យូទ័ររបស់អ្នក (Windows, macOS, Linux)។
    * ផ្តល់នូវមុខងារពេញលេញ និងដំណើរការរលូនជាង។
    * អាចធ្វើការ Offline បាន។
    * ល្អបំផុតសម្រាប់ការប្រើប្រាស់ប្រចាំថ្ងៃ និងការងារស្មុគស្មាញ។

* **Postman Web Client:**
    * អាចចូលប្រើបានតាមរយៈ Web Browser (Chrome, Firefox, Edge ។ល។)។
    * មិនចាំបាច់ដំឡើងអ្វីទាំងអស់។
    * ងាយស្រួលប្រើសម្រាប់ Quick Tests ឬនៅពេលអ្នកមិនមានសិទ្ធិដំឡើង Software។
    * មុខងារមួយចំនួនអាចមានកម្រិតបើប្រៀបធៀបទៅនឹង Desktop App។

## 2. របៀបដំឡើង Postman Desktop App ⬇️

1.  **ចូលទៅកាន់ Website ផ្លូវការ:** បើក Web Browser របស់អ្នកហើយចូលទៅកាន់ [Postman Download Page](https://www.postman.com/downloads/) ។
2.  **ជ្រើសរើស Platform:** ជ្រើសរើស Version ដែលត្រូវនឹងប្រព័ន្ធប្រតិបត្តិការរបស់អ្នក (Windows, macOS, Linux) ។
3.  **ទាញយក និងដំឡើង:**
    * **Windows:** ទាញយក .exe File ហើយដំណើរការវា។ អនុវត្តតាមការណែនាំនៅលើអេក្រង់។
    * **macOS:** ទាញយក .dmg File បើកវា ហើយអូស Postman App ទៅក្នុង Folder Applications របស់អ្នក។
    * **Linux:** ទាញយក .tar.gz File ហើយធ្វើតាមការណែនាំសម្រាប់ការដំឡើងនៅលើ Linux Distribution របស់អ្នក។
4.  **บើក Postman:** បន្ទាប់ពីដំឡើងរួច បើកកម្មវិធី Postman ។

## 3. របៀបប្រើប្រាស់ Postman Web Client 🌐

1.  **ចូលទៅកាន់ Website ផ្លូវការ:** បើក Web Browser របស់អ្នកហើយចូលទៅកាន់ [Postman Web Client](https://go.postman.co/build) ។
2.  **ចូលគណនី ឬចុះឈ្មោះ:** ប្រសិនបើអ្នកមាន Postman Account រួចហើយ សូមចូល។ បើមិនទាន់មានទេ អ្នកអាចចុះឈ្មោះដោយឥតគិតថ្លៃ។
3.  **ចាប់ផ្តើមប្រើប្រាស់:** អ្នកអាចចាប់ផ្តើមបង្កើត Requests ឬចូលប្រើ Workspaces ដែលមានស្រាប់របស់អ្នក។

## 4. ការបង្កើត និងគ្រប់គ្រង Postman Account 👤

ការបង្កើត Postman Account គឺមានសារៈសំខាន់ណាស់សម្រាប់៖
* **ការ Sync ទិន្នន័យ:** រាល់ Collections, Environments, និង History របស់អ្នកនឹងត្រូវបាន Sync ទៅ Cloud ដែលអនុញ្ញាតឱ្យអ្នកចូលប្រើវាពីឧបករណ៍ណាមួយ (Desktop App ឬ Web Client)។
* **ការសហការ:** អនុញ្ញាតឱ្យអ្នកចែករំលែក Workspaces និង Collections ជាមួយក្រុមការងាររបស់អ្នក�।
* **ការចូលប្រើមុខងារកម្រិតខ្ពស់:** មុខងារមួយចំនួនដូចជា Mock Servers, Monitors, និង API Documentation ទាមទារឱ្យមាន Account។

**របៀបបង្កើត Account:**
1.  នៅពេលបើក Postman ជាលើកដំបូង ឬចូលទៅកាន់ Web Client អ្នកនឹងត្រូវបានជម្រុញឱ្យ Sign Up ។
2.  អ្នកអាច Sign Up ជាមួយ Google Account របស់អ្នក ឬជាមួយ Email និង Password ។
3.  អនុវត្តតាមជំហានដើម្បីបំពេញព័ត៌មានលម្អិតរបស់អ្នក។

## 5. ការយល់ដឹងពី Workspaces និងការបង្កើត Workspaces ថ្មី 🗂️

**Workspaces:** គឺជាកន្លែងដែលអ្នករៀបចំ និងគ្រប់គ្រងការងារ API របស់អ្នក។ វាដូចជា Folder ធំមួយដែលផ្ទុក Collections, Environments, និង Elements ផ្សេងទៀតដែលទាក់ទងនឹង Project ជាក់លាក់មួយ។

* **Personal Workspace:** សម្រាប់ Project ផ្ទាល់ខ្លួនរបស់អ្នក។
* **Team Workspace:** សម្រាប់ Project ដែលអ្នកធ្វើការជាមួយក្រុម។ អនុញ្ញាតឱ្យសមាជិកក្រុមទាំងអស់ចូលប្រើ និងសហការលើ API Resources ដូចគ្នា។

**របៀបបង្កើត Workspace ថ្មី:**
1.  នៅក្នុង Postman (Desktop App ឬ Web Client) ចុចលើ Dropdown Menu "Workspaces" នៅជ្រុងខាងឆ្វេងខាងលើ។
2.  ជ្រើសរើស "Create Workspace" ។
3.  ផ្តល់ឈ្មោះសម្រាប់ Workspace របស់អ្នក (ឧទាហរណ៍៖ "My First API Project") ។
4.  ជ្រើសរើសប្រភេទ Workspace (Personal ឬ Team) ។
5.  ចុច "Create Workspace" ។
`,
  examples: [
    `
### ឧទាហរណ៍: ការបង្កើត Workspace ថ្មីក្នុង Postman
នេះជាឧទាហរណ៍នៃជំហានក្នុងការបង្កើត Workspace ថ្មីក្នុង Postman ។
\`\`\`text
Steps to Create Workspace:
1. Click "Workspaces" dropdown.
2. Select "Create Workspace".
3. Fill in details:
   - Name: "My New Project"
   - Visibility: "Personal" or "Team"
4. Click "Create Workspace".
\`\`\`
**ការពន្យល់:**
- **Name:** ឈ្មោះសម្រាប់ Workspace របស់អ្នក។
- **Visibility:** កំណត់ថាតើ Workspace នេះជា Personal ឬ Team ។
- ការបង្កើត Workspace ជួយអ្នករៀបចំ Project API របស់អ្នកឱ្យមានរបៀបរៀបរយ។
`
  ],
  quiz: [
    {
      question: 'តើជម្រើសដំឡើង Postman មួយណាដែលអនុញ្ញាតឱ្យអ្នកធ្វើការ Offline?',
      options: ['Postman Web Client', 'Postman Desktop App', 'Postman CLI', 'Postman Browser Extension'],
      correct: 1,
      explanation: 'Postman Desktop App គឺជាកម្មវិធីដែលអ្នកដំឡើងនៅលើកុំព្យូទ័ររបស់អ្នក ហើយអាចធ្វើការ Offline បាន។'
    },
    {
      question: 'តើអ្នកអាចចូលប្រើ Postman Web Client តាមរយៈអ្វី?',
      options: ['Command Line Interface', 'Desktop Application', 'Web Browser', 'Mobile App'],
      correct: 2,
      explanation: 'Postman Web Client អាចចូលប្រើបានតាមរយៈ Web Browser ។'
    },
    {
      question: 'តើការបង្កើត Postman Account ជួយអ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ Postman ដំណើរការលឿនជាងមុន',
        'អនុញ្ញាតឱ្យ Sync ទិន្នន័យ និងសហការជាមួយក្រុម',
        'លុបបំបាត់តម្រូវការសម្រាប់ Internet',
        'កាត់បន្ថយទំហំ File របស់ Postman'
      ],
      correct: 1,
      explanation: 'ការបង្កើត Postman Account អនុញ្ញាតឱ្យ Sync ទិន្នន័យរបស់អ្នកទៅ Cloud និងសហការជាមួយក្រុមការងារ។'
    },
    {
      question: 'តើ `Workspaces` ក្នុង Postman គឺជាអ្វី?',
      options: [
        'ជាប្រភេទ Requests',
        'ជាកន្លែងសម្រាប់សរសេរ Test Scripts',
        'ជាកន្លែងដែលអ្នករៀបចំ និងគ្រប់គ្រងការងារ API របស់អ្នក',
        'ជាប្រភេទ HTTP Methods'
      ],
      correct: 2,
      explanation: 'Workspaces គឺជាកន្លែងដែលអ្នករៀបចំ និងគ្រប់គ្រងការងារ API របស់អ្នក។'
    },
    {
      question: 'តើ `Team Workspace` ខុសពី `Personal Workspace` យ៉ាងដូចម្តេច?',
      options: [
        '`Team Workspace` សម្រាប់ Project ផ្ទាល់ខ្លួន',
        '`Personal Workspace` សម្រាប់ Project ដែលធ្វើការជាមួយក្រុម',
        '`Team Workspace` អនុញ្ញាតឱ្យសមាជិកក្រុមទាំងអស់សហការលើ Project',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 2,
      explanation: '`Team Workspace` អនុញ្ញាតឱ្យសមាជិកក្រុមទាំងអស់សហការលើ Project ខណៈ `Personal Workspace` សម្រាប់តែអ្នកប្រើប្រាស់ម្នាក់ប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ Website ផ្លូវការសម្រាប់ទាញយក Postman Desktop App គឺអ្វី?',
      options: [
        'https://www.postman.com/web-client/',
        'https://www.postman.com/downloads/',
        'https://www.postman.com/api/',
        'https://www.postman.com/docs/'
      ],
      correct: 1,
      explanation: 'Website ផ្លូវការសម្រាប់ទាញយក Postman Desktop App គឺ `https://www.postman.com/downloads/` ។'
    },
    {
      question: 'តើមុខងារមួយណាដែលទាមទារឱ្យមាន Postman Account?',
      options: [
        'ការបង្កើត GET Request សាមញ្ញ',
        'ការប្រើប្រាស់ Mock Servers',
        'ការមើល Response Body',
        'ការផ្លាស់ប្តូរ HTTP Method'
      ],
      correct: 1,
      explanation: 'មុខងារមួយចំនួនដូចជា Mock Servers, Monitors, និង API Documentation ទាមទារឱ្យមាន Postman Account។'
    },
    {
      question: 'តើការ Sync ទិន្នន័យទៅ Cloud ក្នុង Postman មានន័យដូចម្តេច?',
      options: [
        'រក្សាទុកទិន្នន័យតែលើកុំព្យូទ័រ',
        'រក្សាទុកទិន្នន័យនៅលើ Server របស់ Postman ដើម្បីចូលប្រើពីឧបករណ៍ណាមួយ',
        'លុបទិន្នន័យចាស់',
        'ចែករំលែកទិន្នន័យជាមួយសាធារណៈ'
      ],
      correct: 1,
      explanation: 'ការ Sync ទិន្នន័យទៅ Cloud មានន័យថារក្សាទុកទិន្នន័យនៅលើ Server របស់ Postman ដើម្បីឱ្យអ្នកអាចចូលប្រើវាពីឧបករណ៍ណាមួយបាន។'
    },
    {
      question: 'តើ Postman Desktop App ផ្តល់នូវមុខងារពេញលេញជាង Postman Web Client ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែសម្រាប់ Windows', 'បានតែសម្រាប់ macOS'],
      correct: 0,
      explanation: 'បាទ/ចាស Postman Desktop App ផ្តល់នូវមុខងារពេញលេញ និងដំណើរការរលូនជាង Postman Web Client ។'
    },
    {
      question: 'តើអ្នកអាចបង្កើត Workspace ថ្មីដោយចុចលើ Menu មួយណា?',
      options: ['File', 'Edit', 'Workspaces', 'View'],
      correct: 2,
      explanation: 'អ្នកអាចបង្កើត Workspace ថ្មីដោយចុចលើ Dropdown Menu "Workspaces" ។'
    },
    {
      question: 'តើ Postman ត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយដោយអ្នកណា?',
      options: ['តែ Frontend Developers', 'តែ Backend Developers', 'តែ Testers', 'Developers, Testers, និង Users ផ្សេងទៀត'],
      correct: 3,
      explanation: 'Postman ត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយដោយ Developers, Testers, និង Users ផ្សេងទៀតដែលធ្វើការជាមួយ APIs ។'
    },
    {
      question: 'តើការប្រើប្រាស់ Postman Web Client មានគុណសម្បត្តិអ្វីខ្លះ?',
      options: [
        'អាចធ្វើការ Offline បាន',
        'មិនចាំបាច់ដំឡើងអ្វីទាំងអស់',
        'ផ្តល់នូវមុខងារពេញលេញបំផុត',
        'មានល្បឿនលឿនបំផុត'
      ],
      correct: 1,
      explanation: 'គុណសម្បត្តិមួយនៃការប្រើប្រាស់ Postman Web Client គឺអ្នកមិនចាំបាច់ដំឡើង Software អ្វីទាំងអស់�।'
    },
    {
      question: 'តើការចូលប្រើ Postman Web Client ទាមទារឱ្យមាន Internet Connection ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែពេល Sync ទិន្នន័យ', 'បានតែពេលប្រើ Mock Servers'],
      correct: 0,
      explanation: 'បាទ/ចាស ការចូលប្រើ Postman Web Client ទាមទារឱ្យមាន Internet Connection ។'
    },
    {
      question: 'តើការរៀបចំ Project API ទៅជា Workspaces ជួយអ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ Project កាន់តែស្មុគស្មាញ',
        'ជួយរៀបចំ Project ឱ្យមានរបៀបរៀបរយ និងងាយស្រួលគ្រប់គ្រង',
        'បង្កើនទំហំ File របស់ Project',
        'កាត់បន្ថយល្បឿន Postman'
      ],
      correct: 1,
      explanation: 'ការរៀបចំ Project API ទៅជា Workspaces ជួយរៀបចំ Project ឱ្យមានរបៀបរៀបរយ និងងាយស្រួលគ្រប់គ្រង�।'
    },
    {
      question: 'តើអ្នកអាច Sign Up សម្រាប់ Postman Account ដោយប្រើវិធីណាខ្លះ?',
      options: [
        'តែជាមួយ Email និង Password',
        'តែជាមួយ Google Account',
        'ជាមួយ Google Account ឬ Email និង Password',
        'មិនអាច Sign Up បានទេ'
      ],
      correct: 2,
      explanation: 'អ្នកអាច Sign Up សម្រាប់ Postman Account ជាមួយ Google Account របស់អ្នក ឬជាមួយ Email និង Password ។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: ដំឡើង និងរៀបចំ Postman

លំហាត់នេះនឹងណែនាំអ្នកឱ្យដំឡើង ឬចូលប្រើ Postman និងបង្កើត Workspace ថ្មី។

**លក្ខខណ្ឌជាមុន:**
* កុំព្យូទ័រ (Windows, macOS, ឬ Linux) ឬ Web Browser (Chrome, Firefox, Edge)។
* Internet Connection (សម្រាប់ Web Client ឬការទាញយក Desktop App)។

## 1. ជ្រើសរើសជម្រើស Postman
1. **សម្រេចចិត្តលើ Platform**:
   * **Desktop App**: ប្រសិនបើអ្នកចង់ប្រើមុខងារពេញលេញ និងអាចធ្វើការ Offline។
   * **Web Client**: ប្រសិនបើអ្នកមិនអាចដំឡើង Software ឬចង់ប្រើ Quick Tests។

## 2. ដំឡើង ឬចូលប្រើ Postman
1. **សម្រាប់ Desktop App**:
   * ចូលទៅ [Postman Download Page](https://www.postman.com/downloads/)។
   * ជ្រើសរើស Platform (Windows, macOS, Linux) និងទាញយក File ដែលសមស្រប។
   * **Windows**: ដំណើរការ .exe File និងអនុវត្តតាមការណែនាំ។
   * **macOS**: បើក .dmg File និងអូស Postman ទៅ Folder Applications។
   * **Linux**: ទាញយក .tar.gz File និងធ្វើតាមការណែនាំសម្រាប់ Linux Distribution របស់អ្នក។
   * បើក Postman Desktop App។
2. **សម្រាប់ Web Client**:
   * ចូលទៅ [Postman Web Client](https://go.postman.co/build) ដោយប្រើ Web Browser។

## 3. បង្កើត ឬចូលគណនី Postman
1. **បង្កើត Account**:
   * នៅក្នុង Postman (Desktop App ឬ Web Client), ចុច **Sign Up**។
   * ជ្រើសរើស៖
     * **Google Account**: ចូលជាមួយ Google Account របស់អ្នក។
     * **Email និង Password**: បំពេញ Email និង Password ថ្មី។
   * អនុវត្តតាមជំហានដើម្បីបញ្ចប់ការចុះឈ្មោះ។
2. **ចូលគណនី**:
   * ប្រសិនបើមាន Account រួចហើយ, ចុច **Sign In** និងបញ្ចូលព័ត៌មានគណនី។
3. **ផ្ទៀងផ្ទាត់**:
   * បន្ទាប់ពី Sign In, ពិនិត្យថាឈ្មោះអ្នកប្រើប្រាស់របស់អ្នកបង្ហាញនៅជ្រុងខាងស្តាំខាងលើ។

## 4. បង្កើត Workspace ថ្មី
1. **ចូលទៅ Workspaces**:
   * នៅក្នុង Postman, ចុចលើ Dropdown Menu **Workspaces** នៅជ្រុងខាងឆ្វេងខាងលើ។
2. **បង្កើត Workspace**:
   * ជ្រើសរើស **Create Workspace**.
   * **Name**: \`My First Postman Lab\`
   * **Visibility**: \`Personal\`
   * **Description** (ស្រេចចិត្ត): \`Workspace for learning Postman basics\`
   * ចុច **Create Workspace**.
3. **ផ្ទៀងផ្ទាត់**:
   * ពិនិត្យថា \`My First Postman Lab\` បង្ហាញជា Workspace បច្ចុប្បន្ននៅក្នុង Dropdown Menu។
   * បើក Sidebar និងផ្ទៀងផ្ទាត់ថា Workspace មាន Collections និង Environments ទទេ។

> **គន្លឹះ:** បន្ទាប់ពីបង្កើត Workspace អ្នកអាចចាប់ផ្តើមបន្ថែម Requests, Collections, និង Environments ដើម្បីរៀបចំការងារ API របស់អ្នក។ ពិនិត្យឈ្មោះ Workspace នៅក្នុង Dropdown Menu ដើម្បីធានាថាអ្នកស្ថិតនៅក្នុង Workspace ត្រឹមត្រូវ។
`,
    solution: `
# ដំណោះស្រាយ: ដំឡើង និងរៀបចំ Postman

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## 1. ជម្រើស Postman
* **Platform**: ជ្រើសរើស Desktop App ឬ Web Client។
  * **Desktop App**: ដំឡើងនៅលើ Windows, macOS, ឬ Linux។
  * **Web Client**: ចូលប្រើតាម Web Browser។

## 2. ការដំឡើង/ចូលប្រើ Postman
* **Desktop App**:
  * URL: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
  * Platform: (ឧ. Windows - .exe File ដំឡើងជោគជ័យ)
  * Status: Postman Desktop App បើក និងដំណើរការ។
* **Web Client**:
  * URL: [https://go.postman.co/build](https://go.postman.co/build)
  * Status: ចូលប្រើជោគជ័យតាម Web Browser។

## 3. គណនី Postman
* **Account**:
  * Sign Up: បង្កើតជាមួយ Google Account ឬ Email/Password។
  * Sign In: ចូលជាមួយគណនីដែលមានស្រាប់។
* **Verification**: ឈ្មោះអ្នកប្រើប្រាស់បង្ហាញនៅជ្រុងខាងស្តាំខាងលើ។

## 4. Workspace
* **Workspace**:
  * Name: \`My First Postman Lab\`
  * Visibility: \`Personal\`
  * Description: \`Workspace for learning Postman basics\`
* **Verification**:
  * \`My First Postman Lab\` បង្ហាញជា Workspace បច្ចុប្បន្ននៅក្នុង Dropdown Menu។
  * Sidebar បង្ហាញ Collections និង Environments ទទេ។

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Platform**: Desktop App ឬ Web Client ដំឡើង/ចូលប្រើជោគជ័យ។
* **Account**: បង្កើត ឬចូលជាមួយគណនី Postman។
* **Workspace**: \`My First Postman Lab\` បង្កើតជោគជ័យជាមួយ Visibility \`Personal\`។

លំហាត់នេះបានបង្ហាញពីរបៀបដំឡើង ឬចូលប្រើ Postman និងបង្កើត Workspace ថ្មីសម្រាប់រៀបចំការងារ API។
`
  }
};

export default PostmanLesson1_2Content;
