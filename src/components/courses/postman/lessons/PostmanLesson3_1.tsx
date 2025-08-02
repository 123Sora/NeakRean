import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson3_1Content: LessonContent = {
  title: 'Collections (ការប្រមូល Requests)',
  objectives: [
    'យល់ដឹងពីគោលបំណង និងអត្ថប្រយោជន៍នៃ Collections',
    'របៀបបង្កើត Collection ថ្មី',
    'របៀបរក្សាទុក Requests ទៅក្នុង Collection',
    'ការរៀបចំ Requests ទៅជា Folders នៅក្នុង Collection',
    'ការនាំចេញ (Export) និងនាំចូល (Import) Collections',
    'ការចែករំលែក Collections ជាមួយក្រុម'
  ],
  content: `
# Collections (ការប្រមូល Requests) 📚🗂️

ក្នុងការធ្វើការជាមួយ APIs ការរៀបចំ និងគ្រប់គ្រង HTTP Requests គឺជារឿងសំខាន់។ **Collections** គឺជាលក្ខណៈពិសេសមួយនៅក្នុង Postman ដែលអនុញ្ញាតឱ្យអ្នករៀបចំ Requests ដែលទាក់ទងគ្នាទៅជាក្រុម។

## 1. គោលបំណង និងអត្ថប្រយោជន៍នៃ Collections 💡

* **ការរៀបចំ:** រៀបចំ Requests ទៅជា Folder និង Sub-folder តាម Project, Module, ឬ Functionality។
* **ភាពងាយស្រួលប្រើប្រាស់ឡើងវិញ:** រក្សាទុក Requests ដែលប្រើជាប្រចាំ ដើម្បីជៀសវាងការបង្កើតឡើងវិញ។
* **ការធ្វើឯកសារ:** Collections អាចបង្កើតឯកសារ API ដែលមានលក្ខណៈ Interactive។
* **ការសហការ:** ចែករំលែក Collections ជាមួយសមាជិកក្រុម។
* **ការធ្វើតេស្តស្វ័យប្រវត្តិកម្ម:** ដំណើរការ Requests ជាលំដាប់ និងសរសេរ Test Scripts។
* **ការគ្រប់គ្រង Version:** គ្រប់គ្រង Version នៃ Collections។

## 2. របៀបបង្កើត Collection ថ្មី ➕

1. ចុច Tab **"Collections"** នៅ Sidebar ខាងឆ្វេង។
2. ចុច **"+"** ឬរូបតំណាង **New Collection**។
3. បញ្ចូលឈ្មោះ Collection (ឧ. "My API Collection")។
4. ចុច **Enter** ឬចុចខាងក្រៅ Field ឈ្មោះ។
   * អាចបន្ថែម Description សម្រាប់ Collection។

## 3. របៀបរក្សាទុក Requests ទៅក្នុង Collection 💾

1. **បង្កើត Request:** បង្កើត Request ថ្មី (ឧ. GET \`https://jsonplaceholder.typicode.com/posts/1\`)។
2. **ចុច "Save":** នៅជ្រុងខាងស្តាំខាងលើ ចុច **"Save"**។
3. **ជ្រើសរើស Collection:**
   * នៅ Dialog "SAVE REQUEST" បញ្ចូលឈ្មោះ Request (ឧ. "Get Single Post")។
   * ជ្រើសរើស Collection ដែលចង់រក្សាទុក។
   * អាចបង្កើត Folder ថ្មីនៅ Dialog នេះ។
4. **ចុច "Save":** Request នឹងបង្ហាញនៅក្នុង Collection។

## 4. ការរៀបចំ Requests ទៅជា Folders 📁

1. **ចុច \`...\`:** នៅ Sidebar ចុច **\`...\` (More Actions)** ក្បែរ Collection។
2. **ជ្រើសរើស "Add Folder":** បញ្ចូលឈ្មោះ Folder (ឧ. "Users")។
3. **រក្សាទុក Requests ទៅ Folder:** ជ្រើសរើស Folder នៅពេលរក្សាទុក Request ឬអូស Request ទៅ Folder។

## 5. ការនាំចេញ (Export) និងនាំចូល (Import) Collections 📤📥

* **Exporting:**
  1. ចុច **\`...\`** ក្បែរ Collection។
  2. ជ្រើសរើស **"Export"**។
  3. ជ្រើសរើស Format (Collection v2.1)។
  4. រក្សាទុក File នៅលើកុំព្យូទ័រ។

* **Importing:**
  1. ចុច **"Import"** នៅ Sidebar ខាងឆ្វេង។
  2. ជ្រើសរើស File JSON។
  3. ចុច **"Import"**។

## 6. ការចែករំលែក Collections 🤝

1. **ផ្លាស់ទីទៅ Team Workspace:** ចុច **\`...\` > "Move"** ហើយជ្រើសរើស Team Workspace។
2. **ការចូលប្រើ:** សមាជិកក្រុមដែលមានសិទ្ធិអាចមើល/កែសម្រួល Collection។
3. **ការគ្រប់គ្រង Roles:** អ្នកគ្រប់គ្រង Workspace កំណត់ Roles និង Permissions។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: រចនាសម្ព័ន្ធ Collection
\`\`\`text
My E-commerce API
├── Users
│   ├── GET All Users
│   ├── POST Create User
├── Products
│   ├── GET All Products
│   ├── POST Add Product
├── Authentication
│   ├── POST Login
\`\`\`

### ឧទាហរណ៍ ២: Dialog សម្រាប់រក្សាទុក Request
\`\`\`text
[SAVE REQUEST Dialog]
-------------------------------------------------
| Request name: [ Get All Users          ]    |
| Description:  [ Fetch all user records ]    |
| Save to:                                    |
| ▼ My E-commerce API                         |
|   ► Users                                   |
|   ► Products                                |
|   ► Authentication                          |
| [ Create Folder ] [ Cancel ] [ Save ]       |
-------------------------------------------------
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Collections ក្នុង Postman ប្រើសម្រាប់អ្វី?',
      options: [
        'ដំណើរការ Test Scripts ដោយស្វ័យប្រវត្តិ',
        'រៀបចំ និងគ្រប់គ្រង HTTP Requests',
        'បង្កើត Mock Servers',
        'តាមដាន Performance របស់ API'
      ],
      correct: 1,
      explanation: 'Collections អនុញ្ញាតឱ្យរៀបចំ និងគ្រប់គ្រង HTTP Requests ដែលទាក់ទងគ្នាទៅជាក្រុម។'
    },
    {
      question: 'តើអត្ថប្រយោជន៍ណាមិនមែនជាលក្ខណៈសំខាន់នៃ Collections?',
      options: [
        'ការរៀបចំ',
        'ការធ្វើឯកសារ',
        'បង្កើនល្បឿន Response Time',
        'ការសហការ'
      ],
      correct: 2,
      explanation: 'Collections មិនបង្កើនល្បឿន Response Time ទេ។'
    },
    {
      question: 'តើប៊ូតុងណាប្រើដើម្បីបង្កើត Collection ថ្មី?',
      options: [
        '"Send"',
        '"Save"',
        '"+" ក្បែរ Collections',
        '"Import"'
      ],
      correct: 2,
      explanation: 'ប៊ូតុង "+" ឬ New Collection នៅ Sidebar ប្រើសម្រាប់បង្កើត Collection។'
    },
    {
      question: 'តើ Folders ក្នុង Collection ជួយអ្វី?',
      options: [
        'ផ្លាស់ប្តូរ HTTP Method',
        'គ្រប់គ្រង Environment Variables',
        'រៀបចំ Requests ឱ្យមានរបៀប',
        'Export Collection'
      ],
      correct: 2,
      explanation: 'Folders ជួយរៀបចំ Requests ឱ្យមានរបៀបនៅក្នុង Collection។'
    },
    {
      question: 'តើ Export Collection ប្រើសម្រាប់អ្វី?',
      options: [
        'លុប Collection',
        'រក្សាទុកជា File សម្រាប់ Backup',
        'ផ្លាស់ប្តូរឈ្មោះ Collection',
        'ដំណើរការ Requests'
      ],
      correct: 1,
      explanation: 'Export Collection រក្សាទុកជា File JSON សម្រាប់ Backup ឬចែករំលែក។'
    },
    {
      question: 'តើ File Format ណាជាទូទៅសម្រាប់ Export Collections?',
      options: ['XML', 'CSV', 'JSON', 'TXT'],
      correct: 2,
      explanation: 'JSON ជា Format ទូទៅសម្រាប់ Export Collections។'
    },
    {
      question: 'តើចែករំលែក Collection ពី Personal Workspace ដោយរបៀបណា?',
      options: [
        'មិនអាចចែករំលែក',
        'Export ហើយ Import',
        'ផ្លាស់ទីទៅ Team Workspace',
        'ផ្ញើ Link'
      ],
      correct: 2,
      explanation: 'ផ្លាស់ទី Collection ទៅ Team Workspace ដើម្បីចែករំលែក។'
    },
    {
      question: 'តើប៊ូតុង "Import" ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Request',
        'បន្ថែម Collection ពី File',
        'Export Collection',
        'Sync Collection'
      ],
      correct: 1,
      explanation: '"Import" បន្ថែម Collection ពី File JSON។'
    },
    {
      question: 'តើ Collections អាចបង្កើតឯកសារ API ដោយស្វ័យប្រវត្តិបានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែ Paid Version', 'តែ Public Collections'],
      correct: 0,
      explanation: 'Collections អាចបង្កើតឯកសារ API Interactive។'
    },
    {
      question: 'តើប៊ូតុងណារក្សាទុក Request ទៅ Collection?',
      options: ['Send', 'Save', 'New', 'Duplicate'],
      correct: 1,
      explanation: 'ប៊ូតុង "Save" រក្សាទុក Request ទៅ Collection។'
    },
    {
      question: 'តើរៀបចំ Requests ទៅ Folders ដោយរបៀបណា?',
      options: [
        'Drag and Drop ប៉ុណ្ណោះ',
        '"..." > "Add Folder"',
        'បង្កើត Sub-Collection',
        'មិនអាចរៀបចំបាន'
      ],
      correct: 1,
      explanation: 'ចុច "..." ហើយជ្រើស "Add Folder"។'
    },
    {
      question: 'តើ Collection Runner ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Requests',
        'ដំណើរការ Requests និងតេស្តស្វ័យប្រវត្តិ',
        'Export Collections',
        'Import Collections'
      ],
      correct: 1,
      explanation: 'Collection Runner ដំណើរការ Requests និងតេស្តស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ Postman អនុញ្ញាតឱ្យគ្រប់គ្រង Version នៃ Collections ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែ Local Collections', 'តែ Git Integration'],
      correct: 0,
      explanation: 'Postman អនុញ្ញាតឱ្យគ្រប់គ្រង Version នៃ Collections។'
    },
    {
      question: 'តើអត្ថប្រយោជន៍នៃ Collections ក្នុងការសហការជាក្រុមគឺអ្វី?',
      options: [
        'កាត់បន្ថយចំនួន Requests',
        'ធានាប្រើ Requests ដូចគ្នា',
        'បង្កើនសុវត្ថិភាព API',
        'ធ្វើឱ្យ Debugging ស្មុគស្មាញ'
      ],
      correct: 1,
      explanation: 'Collections ជួយធានាថាក្រុមប្រើ Requests ដូចគ្នា។'
    },
    {
      question: 'តើអាចបន្ថែម Description សម្រាប់ Collection នៅពេលណា?',
      options: [
        'បន្ទាប់ពីបង្កើត',
        'នៅពេលបង្កើតឬកែសម្រួល',
        'មិនអាចបន្ថែមបាន',
        'តែនៅពេល Export'
      ],
      correct: 1,
      explanation: 'អាចបន្ថែម Description នៅពេលបង្កើតឬកែសម្រួល Collection។'
    },
    {
      question: 'តើ Collection Runner អាចតេស្ត Performance បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែ GET Requests', 'តែ POST Requests'],
      correct: 0,
      explanation: 'Collection Runner អាចតេស្ត Performance ដោយដំណើរការ Requests ច្រើនដង។'
    },
    {
      question: 'តើ Postman អាចបង្កើតឯកសារ API ដោយស្វ័យប្រវត្តិពី Collections បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែ Third-party Tools', 'តែ Public APIs'],
      correct: 0,
      explanation: 'Postman អាចបង្កើតឯកសារ API Interactive ពី Collections។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: ការគ្រប់គ្រង Collections ក្នុង Postman

លំហាត់នេះនឹងណែនាំអ្នកពីការបង្កើត Collections, រក្សាទុក Requests, រៀបចំ Folders, និង Export/Import Collections ដោយប្រើ JSONPlaceholder API។

**លក្ខខណ្ឌជាមុន:**
* Postman Desktop App ឬ Web Client (ចូលគណនី Postman ឥតគិតថ្លៃ)។
* Workspace មួយនៅក្នុង Postman (ឧ. "My Collections Lab")។

## 1. បង្កើត Collection និង Folders
1. **បង្កើត Collection**:
   * នៅ Sidebar ខាងឆ្វេង, ចុច Tab **"Collections"**។
   * ចុច **"+"** ឬ **New Collection**។
   * **Name**: \`My_API_Project\`
   * **Description**: \`Collection for testing API requests with JSONPlaceholder\`
   * ចុច **Create**។
2. **បន្ថែម Folders**:
   * ចុច **\`...\` (More Actions)** ក្បែរ \`My_API_Project\`។
   * ជ្រើសរើស **"Add Folder"**។
   * បង្កើត Folders: \`Users\`, \`Products\`។
   * ចុច **Save**។

## 2. រក្សាទុក Requests ទៅ Folders
### a. GET Request ទៅ Folder Users
1. **បង្កើត Request**:
   * ចុច **New > HTTP Request**។
   * **Name**: \`Get All Users\`
   * **Collection**: \`My_API_Project\`
   * **Folder**: \`Users\`
2. **កំណត់ Request**:
   * **Method**: \`GET\`
   * **URL**: \`https://jsonplaceholder.typicode.com/users\`
   * **Body**: None
3. **បញ្ជូន Request**:
   * ចុច **Send**។
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`200 OK\`
   * **Body**: JSON មាន Array នៃ Users (\`id\`, \`name\`, \`username\`, \`email\`)
   * **Time & Size**: កត់ចំណាំ Response Time (ឧ. 50ms) និង Size (ឧ. 1KB)
5. **រក្សាទុក Request**:
   * ចុច **Save**។

### b. POST Request ទៅ Folder Products
1. **បង្កើត Request**:
   * ចុច **New > HTTP Request**។
   * **Name**: \`Create New Product\`
   * **Collection**: \`My_API_Project\`
   * **Folder**: \`Products\`
2. **កំណត់ Request**:
   * **Method**: \`POST\`
   * **URL**: \`https://jsonplaceholder.typicode.com/posts\`
   * **Headers**: \`Content-Type: application/json\`
   * **Body (raw - JSON)**:
     \`\`\`json
     {
       "title": "New Product",
       "body": "Description of new product.",
       "userId": 1
     }
     \`\`\`
3. **បញ្ជូន Request**:
   * ចុច **Send**។
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`201 Created\`
   * **Body**: JSON មាន \`id\`, \`title\`, \`body\`, \`userId\`
   * **Time & Size**: កត់ចំណាំ Response Time និង Size
5. **រក្សាទុក Request**:
   * ចុច **Save**�。

## 3. Export Collection
1. **Export Collection**:
   * ចុច **\`...\`** ក្បែរ \`My_API_Project\`។
   * ជ្រើសរើស **"Export"**។
   * ជ្រើសរើស **Collection v2.1**។
   * ចុច **Export** និងរក្សាទុក File នៅ Desktop។

## 4. Import Collection (Optional)
1. **លុប Collection**:
   * ចុច **\`...\`** ក្បែរ \`My_API_Project\` > **"Delete"** > បញ្ជាក់។
2. **Import Collection**:
   * ចុច **"Import"** នៅ Sidebar។
   * ជ្រើសរើស File JSON ដែល Export ពីមុន។
   * ចុច **Import**។
3. **ផ្ទៀងផ្ទាត់**:
   * Collection \`My_API_Project\` បង្ហាញឡើងវិញជាមួយ Folders និង Requests។

## 5. រៀបចំ Collection
1. **ផ្ទៀងផ្ទាត់ Collection**:
   * បើក Collection \`My_API_Project\`។
   * បញ្ជាក់ Description។
2. **បញ្ជូន Requests**:
   * បើក \`Get All Users\` និង \`Create New Product\`។
   * ចុច **Send** ដើម្បីផ្ទៀងផ្ទាត់ Responses។

> **គន្លឹះ:** ប្រើ Tab "Headers" ក្នុង Response Panel ដើម្បីពិនិត្យ Headers និងកត់ចំណាំ Response Time និង Size។
`,
    solution: `
# ដំណោះស្រាយ: ការគ្រប់គ្រង Collections ក្នុង Postman

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## 1. Collection និង Folders
* **Collection**: \`My_API_Project\`
* **Description**: \`Collection for testing API requests with JSONPlaceholder\`
* **Folders**:
  * \`Users\`
  * \`Products\`
* **Verification**: Collection មាន Folders និង Requests ត្រឹមត្រូវ។

## 2. Requests
### a. GET Request ទៅ Folder Users
* **Request**:
  * Name: \`Get All Users\`
  * Collection: \`My_API_Project\`
  * Folder: \`Users\`
  * Method: \`GET\`
  * URL: \`https://jsonplaceholder.typicode.com/users\`
  * Body: None
* **Response**:
  * Status: \`200 OK\`
  * Body (Example):
    \`\`\`json
    [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        ...
      },
      ...
    ]
    \`\`\`
  * Time & Size: ឧ. 50ms, 1KB

### b. POST Request ទៅ Folder Products
* **Request**:
  * Name: \`Create New Product\`
  * Collection: \`My_API_Project\`
  * Folder: \`Products\`
  * Method: \`POST\`
  * URL: \`https://jsonplaceholder.typicode.com/posts\`
  * Headers: \`Content-Type: application/json\`
  * Body:
    \`\`\`json
    {
      "title": "New Product",
      "body": "Description of new product.",
      "userId": 1
    }
    \`\`\`
* **Response**:
  * Status: \`201 Created\`
  * Body (Example):
    \`\`\`json
    {
      "title": "New Product",
      "body": "Description of new product.",
      "userId": 1,
      "id": 101
    }
    \`\`\`
  * Time & Size: ឧ. 60ms, 200B

## 3. Export Collection
* **File**: Exported ជា JSON (Collection v2.1) នៅ Desktop។
* **Verification**: File មាន Folders (\`Users\`, \`Products\`) និង Requests។

## 4. Import Collection (Optional)
* **Collection**: \`My_API_Project\` បង្ហាញឡើងវិញជាមួយ Folders និង Requests។
* **Verification**: Requests (\`Get All Users\`, \`Create New Product\`) ដំណើរការត្រឹមត្រូវ។

## 5. លទ្ធផលផ្ទៀងផ្ទាត់
* **Collection**: \`My_API_Project\` មាន Folders (\`Users\`, \`Products\`) និង Description។
* **Requests**:
  * \`Get All Users\`: \`200 OK\`, JSON Array នៃ Users។
  * \`Create New Product\`: \`201 Created\`, JSON មាន \`id\`, \`title\`, \`body\`, \`userId\`.
* **Verification**: Responses ត្រឹមត្រូវ, Headers បញ្ជូនត្រឹមត្រូវ, Response Time និង Size ត្រូវបានកត់ចំណាំ។

លំហាត់នេះបានបង្ហាញពីការបង្កើត Collections, រៀបចំ Requests ជាមួយ Folders, និង Export/Import Collections។
`
  }
};

export default PostmanLesson3_1Content;