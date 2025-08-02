import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson3_2Content: LessonContent = {
  title: 'Environments and Variables (បរិស្ថាន និង Variables)',
  objectives: [
    'យល់ដឹងពីគោលបំណងនៃ Environments និង Variables',
    'ស្គាល់ពីភាពខុសគ្នារវាង Global, Environment, Collection, និង Local Variables',
    'របៀបបង្កើត និងគ្រប់គ្រង Environments',
    'របៀបបន្ថែម និងប្រើប្រាស់ Variables នៅក្នុង Requests (URL, Headers, Body)',
    'ការយល់ដឹងពី Initial Value និង Current Value',
    'អត្ថប្រយោជន៍នៃការប្រើប្រាស់ Environments សម្រាប់ការធ្វើតេស្ត API',
    'របៀប Export និង Import Environments'
  ],
  content: `
# Environments and Variables (បរិស្ថាន និង Variables) 🌍🔑

ក្នុងការធ្វើការជាមួយ APIs ជាពិសេសនៅពេលអ្នកមាន Environments ផ្សេងៗគ្នា (ដូចជា Development, Staging, Production) ឬតម្លៃដែលផ្លាស់ប្តូរជាញឹកញាប់ (ដូចជា Tokens, IDs) ការប្រើប្រាស់ **Environments** និង **Variables** ក្នុង Postman គឺមានសារៈសំខាន់ណាស់។ ពួកវាជួយធ្វើឱ្យ Requests របស់អ្នកមានភាពបត់បែន ងាយស្រួលប្រើប្រាស់ឡើងវិញ និងមានសុវត្ថិភាព។

## 1. គោលបំណងនៃ Environments និង Variables 💡

* **Variables (អថេរ):** គឺជា Placeholder សម្រាប់តម្លៃដែលអ្នកអាចប្រើឡើងវិញនៅក្នុង Requests, Scripts, និង Tests។ ជំនួសឱ្យការ Hardcode តម្លៃ អ្នកអាចប្រើ Variable។
  * **ឧទាហរណ៍:** ជំនួសឱ្យការសរសេរ \`https://dev.api.com/users\` អ្នកអាចប្រើ \`{{base_url}}/users\` ហើយកំណត់ \`base_url\` ជា Variable។
* **Environments (បរិស្ថាន):** គឺជាសំណុំនៃ Variables។ អ្នកអាចមាន Environments ផ្សេងៗគ្នាសម្រាប់គោលបំណងផ្សេងៗគ្នា។
  * **ឧទាហរណ៍:** Environment មួយសម្រាប់ Development (ជាមួយ \`base_url = https://dev.api.com\`) និងមួយទៀតសម្រាប់ Production (ជាមួយ \`base_url = https://prod.api.com\`)។

## 2. ប្រភេទ Variables ក្នុង Postman 🗂️

Postman គាំទ្រ Variables ៤ ប្រភេទផ្សេងគ្នា ជាមួយនឹង Scope (វិសាលភាព) ខុសៗគ្នា៖

* **Global Variables:**
  * **Scope:** អាចចូលប្រើបានពីគ្រប់ Collections, Folders, និង Requests ទាំងអស់នៅក្នុង Workspace។
  * **ប្រើសម្រាប់:** តម្លៃដែលមិនផ្លាស់ប្តូររវាង Environments ដូចជា API Key ទូទៅ។
* **Environment Variables:**
  * **Scope:** អាចចូលប្រើបានតែនៅក្នុង Environment ដែលបានជ្រើសរើស។
  * **ប្រើសម្រាប់:** តម្លៃដែលផ្លាស់ប្តូររវាង Environments ដូចជា Base URL, User Credentials។
* **Collection Variables:**
  * **Scope:** អាចចូលប្រើបានពីគ្រប់ Requests និង Folders នៅក្នុង Collection ជាក់លាក់។
  * **ប្រើសម្រាប់:** តម្លៃដែលទាក់ទងនឹង Collection ជាក់លាក់ ដូចជា Version របស់ API។
* **Local Variables:**
  * **Scope:** អាចចូលប្រើបានតែនៅក្នុង Request ឬ Script ជាក់លាក់។
  * **ប្រើសម្រាប់:** តម្លៃបណ្តោះអាសន្ន។

**លំដាប់អាទិភាព:** Local > Environment > Collection > Global។

## 3. របៀបបង្កើត និងគ្រប់គ្រង Environments 🛠️

1. **បើក Environment Manager:** ចុចលើរូបតំណាង **ភពផែនដី (Environments)** នៅ Sidebar ខាងឆ្វេង។
2. **បង្កើត Environment ថ្មី:**
   * ចុច **"+"** (Add Environment)។
   * ផ្តល់ឈ្មោះ (ឧ. \`Development\`, \`Production\`)។
   * ចុច **Add**។
3. **បន្ថែម Variables:**
   * បញ្ចូល Variable Name (ឧ. \`base_url\`, \`auth_token\`)។
   * **Initial Value:** តម្លៃសម្រាប់ Sync និងចែករំលែក។
   * **Current Value:** តម្លៃ Local សម្រាប់ Sensitive Data។
   * ចុច **Save**។
4. **ជ្រើសរើស Environment:** នៅ Dropdown ខាងស្តាំខាងលើ ជ្រើសរើស Environment ដែលចង់ប្រើ។

## 4. របៀបបន្ថែម និងប្រើប្រាស់ Variables នៅក្នុង Requests 📝

ប្រើ Syntax \`{{variable_name}}\` នៅក្នុង៖
* **URL:** ឧ. \`{{base_url}}/users\`។
* **Headers:** ឧ. Key: \`Authorization\`, Value: \`Bearer {{auth_token}}\`។
* **Body (JSON):** ឧ. \`{ "name": "{{user_name}}" }\`។
* **Query Parameters:** Key: \`api_key\`, Value: \`{{my_api_key}}\`។

## 5. Initial Value vs. Current Value 🔄

* **Initial Value:** Sync ទៅ Cloud, ចែករំលែកជាមួយក្រុម, ល្អសម្រាប់ Non-sensitive Data។
* **Current Value:** Local តែប៉ុណ្ណោះ, មិន Sync, ល្អសម្រាប់ Sensitive Data។

## 6. អត្ថប្រយោជន៍នៃ Environments ✨

* **ភាពបត់បែន:** ប្តូរ Environments យ៉ាងងាយស្រួល។
* **សុវត្ថិភាព:** ការពារ Sensitive Data នៅ Local។
* **ភាពងាយស្រួល:** កាត់បន្ថយ Hardcoding។
* **ការសហការ:** ចែករំលែក Configurations ជាមួយក្រុម។

## 7. របៀប Export និង Import Environments 📤📥

* **Exporting:**
  1. នៅ Environment Manager, ចុច **\`...\`** ក្បែរ Environment។
  2. ជ្រើសរើស **"Export"**។
  3. រក្សាទុកជា JSON File។
* **Importing:**
  1. ចុច **"Import"** នៅ Environment Manager។
  2. ជ្រើសរើស JSON File។
  3. ចុច **"Import"**។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: ការកំណត់ Environment Variables
\`\`\`text
[Environment: Development]
-------------------------------------------------------------------
| Variable       | Type   | Initial Value            | Current Value            |
-------------------------------------------------------------------
| base_url       | default | https://dev.api.com      | https://dev.api.com      |
| api_key        | secret  | dev_key_placeholder      | my_dev_api_key_123       |
| user_id        | default | 1                        | 1                        |
-------------------------------------------------------------------

[Environment: Production]
-------------------------------------------------------------------
| Variable       | Type   | Initial Value            | Current Value            |
-------------------------------------------------------------------
| base_url       | default | https://prod.api.com     | https://prod.api.com     |
| api_key        | secret  | prod_key_placeholder     | my_prod_api_key_xyz      |
| user_id        | default | 1                        | 1                        |
-------------------------------------------------------------------
\`\`\`

### ឧទាហរណ៍ ២: ការប្រើប្រាស់ Variables ក្នុង Request
\`\`\`text
// Method: GET
// URL: {{base_url}}/users/{{user_id}}
// Headers:
//   Key: Authorization
//   Value: Bearer {{api_key}}

// Development Environment:
// Actual URL: https://dev.api.com/users/1
// Actual Header: Authorization: Bearer my_dev_api_key_123
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Variables ក្នុង Postman គឺជាអ្វី?',
      options: [
        'ប្រភេទ HTTP Methods',
        'Placeholder សម្រាប់តម្លៃដែលប្រើឡើងវិញ',
        'Status Codes',
        'Authentication Methods'
      ],
      correct: 1,
      explanation: 'Variables គឺជា Placeholder សម្រាប់តម្លៃដែលអាចប្រើឡើងវិញនៅក្នុង Requests, Scripts, និង Tests។'
    },
    {
      question: 'តើ Environments ក្នុង Postman គឺជាអ្វី?',
      options: [
        'Collection នៃ Requests',
        'សំណុំនៃ Variables',
        'Request Body Type',
        'Test Scripts'
      ],
      correct: 1,
      explanation: 'Environments គឺជាសំណុំនៃ Variables សម្រាប់ Configurations ផ្សេងៗ។'
    },
    {
      question: 'តើ Variable ប្រភេទណាមាន Scope ធំបំផុត?',
      options: ['Local', 'Environment', 'Collection', 'Global'],
      correct: 3,
      explanation: 'Global Variables អាចចូលប្រើបានពីគ្រប់ទីកន្លែងក្នុង Workspace។'
    },
    {
      question: 'តើ Variable ប្រភេទណាមាន Scope តូចបំផុត?',
      options: ['Local', 'Environment', 'Collection', 'Global'],
      correct: 0,
      explanation: 'Local Variables អាចចូលប្រើបានតែនៅក្នុង Request ឬ Script ជាក់លាក់។'
    },
    {
      question: 'តើ Initial Value ត្រូវបាន Sync ទៅ Cloud ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែ Team Workspace', 'តែ Export'],
      correct: 0,
      explanation: 'Initial Value ត្រូវបាន Sync ទៅ Cloud និងចែករំលែកជាមួយក្រុម។'
    },
    {
      question: 'តើ Current Value ត្រូវបាន Sync ទៅ Cloud ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែ Team Workspace', 'តែ Import'],
      correct: 1,
      explanation: 'Current Value ត្រូវបានរក្សាទុក Local មិន Sync ទៅ Cloud។'
    },
    {
      question: 'តើ Syntax សម្រាប់ Variable ក្នុង Request គឺជាអ្វី?',
      options: ['[variable_name]', '<variable_name>', '{{variable_name}}', '$variable_name$'],
      correct: 2,
      explanation: 'Syntax {{variable_name}} ត្រូវបានប្រើសម្រាប់ Variables។'
    },
    {
      question: 'តើអត្ថប្រយោជន៍ចម្បងនៃ Environments គឺអ្វី?',
      options: [
        'បង្កើនល្បឿន Requests',
        'ប្តូរ API Endpoints យ៉ាងងាយស្រួល',
        'កាត់បន្ថយទំហំ Collection',
        'ធ្វើឱ្យ Postman Offline'
      ],
      correct: 1,
      explanation: 'Environments អនុញ្ញាតឱ្យប្តូរ API Endpoints យ៉ាងងាយស្រួល។'
    },
    {
      question: 'តើរូបតំណាងណាបើក Environment Manager?',
      options: ['Folder', 'Send', 'Globe', 'Save'],
      correct: 2,
      explanation: 'រូបតំណាង Globe បើក Environment Manager។'
    },
    {
      question: 'តើ Sensitive Data គួររក្សាទុកនៅ Initial ឬ Current Value?',
      options: ['Initial', 'Current', 'ទាំងពីរ', 'គ្មាន'],
      correct: 1,
      explanation: 'Sensitive Data គួររក្សាទុកនៅ Current Value ដើម្បីកុំឱ្យ Sync។'
    },
    {
      question: 'តើ Collection Variables មាន Scope យ៉ាងដូចម្តេច?',
      options: [
        'គ្រប់ Requests ក្នុង Workspace',
        'Request ជាក់លាក់',
        'គ្រប់ Requests ក្នុង Collection',
        'Environment ជាក់លាក់'
      ],
      correct: 2,
      explanation: 'Collection Variables អាចចូលប្រើបានក្នុង Collection ជាក់លាក់។'
    },
    {
      question: 'តើ base_url គួរជា Variable ប្រភេទណា?',
      options: ['Global', 'Environment', 'Collection', 'Local'],
      correct: 1,
      explanation: 'base_url គួរជា Environment Variable ព្រោះវាផ្លាស់ប្តូររវាង Environments។'
    },
    {
      question: 'តើលំដាប់អាទិភាពនៃ Variables គឺជាអ្វី?',
      options: [
        'Global > Collection > Environment > Local',
        'Local > Environment > Collection > Global',
        'Environment > Global > Local > Collection',
        'Collection > Local > Global > Environment'
      ],
      correct: 1,
      explanation: 'លំដាប់អាទិភាពគឺ Local > Environment > Collection > Global។'
    },
    {
      question: 'តើរបៀប Export Environment គឺជាអ្វី?',
      options: [
        'ចុច Save',
        'ចុច ... > Export',
        'ចុច Import',
        'ចម្លង Variables'
      ],
      correct: 1,
      explanation: 'Export Environment ដោយចុច ... > Export។'
    },
    {
      question: 'តើ Variables ជួយកាត់បន្ថយ Hardcoding ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែ Headers', 'តែ URLs'],
      correct: 0,
      explanation: 'Variables ជួយកាត់បន្ថយ Hardcoding នៅក្នុង Requests។'
    },
    {
      question: 'តើ Local Variables ប្រើសម្រាប់អ្វី?',
      options: [
        'ចែករំលែកជាមួយក្រុម',
        'តម្លៃផ្លាស់ប្តូររវាង Environments',
        'តម្លៃបណ្តោះអាសន្ន',
        'តម្លៃមិនផ្លាស់ប្តូរ'
      ],
      correct: 2,
      explanation: 'Local Variables ប្រើសម្រាប់តម្លៃបណ្តោះអាសន្ន។'
    },
    {
      question: 'តើអត្ថប្រយោជន៍សុវត្ថិភាពនៃ Current Value គឺជាអ្វី?',
      options: [
        'Encrypted ដោយស្វ័យប្រវត្តិ',
        'មិន Sync ទៅ Cloud',
        'ការពារ API',
        'ផ្លាស់ប្តូរ API Key'
      ],
      correct: 1,
      explanation: 'Current Value មិន Sync ទៅ Cloud ដើម្បីការពារ Sensitive Data។'
    },
    {
      question: 'តើអាចប្រើ Variable ក្នុង JSON Body បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែ GET Requests', 'តែ Text Body'],
      correct: 0,
      explanation: 'អាចប្រើ Variables ក្នុង JSON Body ដោយប្រើ {{variable_name}}។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: ការប្រើប្រាស់ Environments និង Variables ក្នុង Postman

ភារកិច្ចនេះនឹងណែនាំអ្នកពីការបង្កើត Environments, កំណត់ Variables, និងប្រើ Variables ក្នុង Requests។

## លក្ខខណ្ឌជាមុន
* Postman Desktop App ឬ Web Client (ចូលគណនី Postman ឥតគិតថ្លៃ)។
* Workspace មួយនៅក្នុង Postman (ឧ. "My Variables Lab")។

## 1. បង្កើត Environments និងកំណត់ Variables
1. **បង្កើត Environment: \`Development API\`**
   * ចុចរូបតំណាង **ភពផែនដី (Environments)** នៅ Sidebar។
   * ចុច **"+"** ដើម្បីបង្កើត Environment។
   * **ឈ្មោះ:** \`Development API\`
   * **Variables:**
     * \`base_url\` | Initial: \`https://jsonplaceholder.typicode.com\` | Current: \`https://jsonplaceholder.typicode.com\`
     * \`user_id\` | Initial: \`1\` | Current: \`1\`
     * \`api_key_dev\` | Initial: \`dev_secret_123\` | Current: \`dev_secret_123\`
   * ចុច **Save**។
2. **បង្កើត Environment: \`Staging API\`**
   * ធ្វើម្តងទៀតដើម្បីបង្កើត Environment។
   * **ឈ្មោះ:** \`Staging API\`
   * **Variables:**
     * \`base_url\` | Initial: \`https://jsonplaceholder.typicode.com\` | Current: \`https://jsonplaceholder.typicode.com\`
     * \`user_id\` | Initial: \`5\` | Current: \`5\`
     * \`api_key_staging\` | Initial: \`staging_secret_xyz\` | Current: \`staging_secret_xyz\`
   * ចុច **Save**។
3. **ជ្រើសរើស Environment:** ជ្រើសរើស **\`Development API\`** ពី Dropdown ខាងស្តាំខាងលើ។

## 2. បង្កើត Request ដោយប្រើ Variables
1. **បង្កើត GET Request:**
   * បើក Tab Request ថ្មី (**"+"**)។
   * **Method:** \`GET\`
   * **URL:** \`{{base_url}}/users/{{user_id}}\`
   * **Headers:**
     * Key: \`X-API-Key\` | Value: \`{{api_key_dev}}\`
   * **រក្សាទុក Request:** ចុច **Save**, ឈ្មោះ: \`Get User Details\`, ជ្រើសរើស Collection។
   * **បញ្ជូន Request:** ចុច **Send**។
   * **ផ្ទៀងផ្ទាត់ Response:**
     * Status: \`200 OK\`
     * Body: JSON មាន User ID 1 (\`id\`, \`name\`, \`username\`, \`email\`)
     * Headers: មាន \`X-API-Key: dev_secret_123\`

## 3. ប្តូរ Environment និងសង្កេតលទ្ធផល
1. **ប្តូរ Environment:** ជ្រើសរើស **\`Staging API\`** ពី Dropdown។
2. **បញ្ជូន Request ម្តងទៀត:**
   * បើក Request \`Get User Details\`។
   * ចុច **Send**។
   * **ផ្ទៀងផ្ទាត់ Response:**
     * Status: \`200 OK\`
     * Body: JSON មាន User ID 5
     * Headers: មាន \`X-API-Key: staging_secret_xyz\`

## 4. Export Environment (Optional)
1. **Export Environment:**
   * នៅ Environment Manager, ចុច **\`...\`** ក្បែរ \`Development API\` > **"Export"**។
   * រក្សាទុកជា JSON File។
2. **Import Environment:**
   * ចុច **"Import"** នៅ Environment Manager។
   * ជ្រើសរើស JSON File ហើយ **Import**។
   * ផ្ទៀងផ្ទាត់ថា Environment បង្ហាញឡើងវិញ។

## 5. ឯកសារយោង (Optional)
* ថត Screenshot នៃ Environment Manager និង Request/Response សម្រាប់ Environment ទាំងពីរ។
`,
    solution: `
# ដំណោះស្រាយ: ការប្រើប្រាស់ Environments និង Variables ក្នុង Postman

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## 1. Environments និង Variables
* **Environment: Development API**
  * Variables:
    * \`base_url\`: Initial: \`https://jsonplaceholder.typicode.com\`, Current: \`https://jsonplaceholder.typicode.com\`
    * \`user_id\`: Initial: \`1\`, Current: \`1\`
    * \`api_key_dev\`: Initial: \`dev_secret_123\`, Current: \`dev_secret_123\`
* **Environment: Staging API**
  * Variables:
    * \`base_url\`: Initial: \`https://jsonplaceholder.typicode.com\`, Current: \`https://jsonplaceholder.typicode.com\`
    * \`user_id\`: Initial: \`5\`, Current: \`5\`
    * \`api_key_staging\`: Initial: \`staging_secret_xyz\`, Current: \`staging_secret_xyz\`
* **Verification:** Environments បង្ហាញនៅ Environment Manager ជាមួយ Variables ត្រឹមត្រូវ។

## 2. Request ជាមួយ Development API
* **Request: Get User Details**
  * Method: \`GET\`
  * URL: \`{{base_url}}/users/{{user_id}}\`
  * Headers: \`X-API-Key: {{api_key_dev}}\`
* **Response:**
  * Status: \`200 OK\`
  * Body:
    \`\`\`json
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      ...
    }
    \`\`\`
  * Headers: \`X-API-Key: dev_secret_123\`
  * Time & Size: ឧ. 50ms, 1KB

## 3. Request ជាមួយ Staging API
* **Request: Get User Details**
  * Method: \`GET\`
  * URL: \`{{base_url}}/users/{{user_id}}\`
  * Headers: \`X-API-Key: {{api_key_staging}}\`
* **Response:**
  * Status: \`200 OK\`
  * Body:
    \`\`\`json
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      ...
    }
    \`\`\`
  * Headers: \`X-API-Key: staging_secret_xyz\`
  * Time & Size: ឧ. 60ms, 1KB

## 4. Export/Import Environment
* **Export:** File JSON សម្រាប់ \`Development API\` និង \`Staging API\` ត្រូវបានរក្សាទុក។
* **Import:** Environments បង្ហាញឡើងវិញជាមួយ Variables ត្រឹមត្រូវ។

## 5. លទ្ធផលផ្ទៀងផ្ទាត់
* **Environments:** មាន Variables ត្រឹមត្រូវ។
* **Requests:** Responses បង្ហាញ User ID 1 (Development) និង User ID 5 (Staging)។
* **Headers:** Headers បង្ហាញ API Keys ត្រឹមត្រូវ។

លំហាត់នេះបានបង្ហាញពីការប្រើ Environments និង Variables ដើម្បីធ្វើឱ្យ API Testing មានភាពបត់បែន និងមានប្រសិទ្ធភាព។
`
  }
};

export default PostmanLesson3_2Content;