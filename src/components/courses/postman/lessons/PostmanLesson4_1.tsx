import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson4_1Content: LessonContent = {
  title: 'Collection Runner (ការដំណើរការ Collection)',
  objectives: [
    'យល់ពីគោលបំណង និងអត្ថប្រយោជន៍នៃ Collection Runner',
    'របៀបដំណើរការ Collection ជាមួយ Collection Runner',
    'ការកំណត់ Iterations និង Delays',
    'របៀបប្រើ Data Files (CSV/JSON) សម្រាប់ Data-driven Testing',
    'ការពិនិត្យលទ្ធផល Test និង Debugging',
    'ការប្រើ Collection Runner ជាមួយ Environments',
    'ការប្រើ Postman Console សម្រាប់ Debugging'
  ],
  content: `
# Collection Runner (ការដំណើរការ Collection) 🏃‍♀️📊

**Collection Runner** គឺជាឧបករណ៍សម្រាប់ដំណើរការ Requests ទាំងអស់ក្នុង Collection ឬ Folder ដោយស្វ័យប្រវត្តិ។ វាល្អសម្រាប់ Automation Testing, Regression Testing និង Data-driven Testing។

## 1. គោលបំណង និងអត្ថប្រយោជន៍ 💡

* **Automation Testing:** ដំណើរការ Test Scripts ជាបាច់។
* **Regression Testing:** ផ្ទៀងផ្ទាត់ថាការផ្លាស់ប្តូរថ្មីមិនប៉ះពាល់មុខងារចាស់។
* **Data-driven Testing:** ប្រើ Data Files សម្រាប់ Requests ដដែលៗជាមួយទិន្នន័យផ្សេងៗ។
* **Basic Performance Testing:** កំណត់ Iterations/Delays ដើម្បីក្លែងធ្វើ Load។
* **Efficiency:** ជួយសន្សំពេលវេលាដោយមិនចាំបាច់បញ្ជូន Requests ដោយដៃ។

## 2. របៀបដំណើរការ Collection Runner 🚀

1. **បើក Collection Runner:**
   * Sidebar > **Collections** > **...** > **Run collection**។
   * ឬចុច **Runner** នៅផ្នែកខាងក្រោម Sidebar។
2. **កំណត់រចនាសម្ព័ន្ធ:**
   * **Collection/Folder:** ជ្រើសរើស Collection ឬ Folder។
   * **Environment:** ជ្រើសរើស Environment។
   * **Iterations:** កំណត់ចំនួនដងនៃការដំណើរការ។
   * **Delay:** កំណត់ពេលពន្យារពេល (ms) រវាង Requests។
   * **Data:** បញ្ចូល CSV/JSON File (សម្រាប់ Data-driven Testing)។
   * **Keep variable values:** រក្សា Current Value នៃ Variables។
   * **Log responses:** កត់ត្រា Responses សម្រាប់ Debugging។
3. **ចាប់ផ្តើម:** ចុច **Run <Collection Name>**។

## 3. Iterations និង Delays ⏱️

* **Iterations:** កំណត់ចំនួនដងនៃការដំណើរការ Collection។
  * មានប្រយោជន៍សម្រាប់ Data Files។
* **Delay:** កំណត់ពេលពន្យារពេល (ms) រវាង Requests។
  * ក្លែងធ្វើ User Behavior ឬការពារ Server Overload។

## 4. Data Files (CSV/JSON) 📊

Data Files អនុញ្ញាតឱ្យប្រើទិន្នន័យផ្សេងៗសម្រាប់ Requests។

* **CSV Format:**
  \`\`\`csv
  username,password,expected_status
  user1,pass1,200
  user2,pass2,401
  \`\`\`
* **JSON Format:**
  \`\`\`json
  [
    { "username": "user1", "password": "pass1", "expected_status": 200 },
    { "username": "user2", "password": "pass2", "expected_status": 401 }
  ]
  \`\`\`
* **ការប្រើ Data File:**
  1. Collection Runner > **Data** > **Select File** > ជ្រើស CSV/JSON។
  2. Postman Parse Data និងបង្ហាញ Preview។
  3. Iterations កំណត់ដោយចំនួន Rows/Objects។
* **Variables:** ប្រើ \`{{column_name}}\` ក្នុង Requests/Test Scripts។
  * Request Body: \`{ "username": "{{username}}", "password": "{{password}}" }\`
  * Test Script: \`pm.expect(pm.response.status).to.eql(pm.iterationData.get("expected_status"));\`

## 5. ពិនិត្យលទ្ធផល និង Debugging 🐞

* **Summary:** បង្ហាញ Requests និង Tests (Pass/Fail)។
* **All Runs:** លទ្ធផលសម្រាប់ Iteration នីមួយៗ។
* **View Results:** ព័ត៌មាន Request/Response និង Test Results។
* **Postman Console:** បើក (Ctrl/Cmd + Alt + C) ដើម្បីមើល Logs (\`console.log()\`)។

## 6. Collection Runner ជាមួយ Environments 🌍

ជ្រើស Environment ដើម្បីប្រើ Variables ក្នុង Requests។ អនុញ្ញាតឱ្យដំណើរការ Collection លើ Environments ផ្សេងៗ (Development, Staging, Production)។

## 7. Postman Console សម្រាប់ Debugging 🕵️‍♀️

* **Logs:** មើល \`console.log()\`, \`console.warn()\`, \`console.error()\`។
* **Network Calls:** ព័ត៌មាន Request/Response (Headers, Body)។
* **Variable Values:** Log Variables ដើម្បីផ្ទៀងផ្ទាត់។

\`\`\`javascript
console.log("Iteration:", pm.iteration.current);
console.log("Username:", pm.iterationData.get("username"));
console.log("Status:", pm.response.status);
\`\`\`
`,
  examples: [
    `
### ឧទាហរណ៍ ១: Collection Runner Setup
\`\`\`text
[Collection Runner]
-------------------------------------------------------------------
| Collection: [ User_API_Tests ▼ ]                                |
| Environment: [ No Environment ▼ ]                               |
| Iterations: [ 1 ]                                               |
| Delay: [ 50 ] ms                                                |
| Data: [ users_data.csv ] [ Preview ]                            |
| [x] Log responses                                               |
| [ Run User_API_Tests ]                                          |
-------------------------------------------------------------------
\`\`\`

### ឧទាហរណ៍ ២: Data File (CSV)
\`\`\`csv
user_id,expected_status
1,200
2,200
999,404
\`\`\`

### ឧទាហរណ៍ ៣: Request និង Test Script
\`\`\`text
// Request: Get User Details
// Method: GET
// URL: {{base_url}}/users/{{user_id}}

// Tests:
pm.test("Status code is as expected", function () {
    pm.response.to.have.status(pm.iterationData.get("expected_status"));
});
pm.test("User name is present", function () {
    pm.expect(pm.response.json().name).to.be.a('string');
});
console.log("Testing user_id:", pm.iterationData.get("user_id"));
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Collection Runner ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Requests',
        'Automation Testing និង Requests ជាបាច់',
        'រចនា API Schema',
        'គ្រប់គ្រង Variables'
      ],
      correct: 1,
      explanation: 'Collection Runner ដំណើរការ Requests ដោយស្វ័យប្រវត្តិសម្រាប់ Automation Testing។'
    },
    {
      question: 'តើ Iterations កំណត់អ្វី?',
      options: [
        'Delay រវាង Requests',
        'ចំនួនដងនៃការដំណើរការ',
        'Response Size',
        'Header Count'
      ],
      correct: 1,
      explanation: 'Iterations កំណត់ចំនួនដងនៃការដំណើរការ Collection។'
    },
    {
      question: 'Delay វាស់ជាឯកតាអ្វី?',
      options: ['Seconds', 'Minutes', 'Milliseconds', 'Hours'],
      correct: 2,
      explanation: 'Delay វាស់ជា Milliseconds (ms)។'
    },
    {
      question: 'File Format សម្រាប់ Data-driven Testing?',
      options: ['PDF, DOCX', 'XML, HTML', 'CSV, JSON', 'TXT, YAML'],
      correct: 2,
      explanation: 'Postman គាំទ្រ CSV និង JSON សម្រាប់ Data Files។'
    },
    {
      question: 'Syntax សម្រាប់ Variables ពី Data File?',
      options: ['[column_name]', '<column_name>', '{{column_name}}', '$column_name$'],
      correct: 2,
      explanation: 'ប្រើ `{{column_name}}` ដើម្បីយោង Variables ពី Data File។'
    },
    {
      question: 'Collection Runner អាចធ្វើ Basic Performance Testing បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'GET Requests តែប៉ុណ្ណោះ', 'POST Requests តែប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'Collection Runner អាចក្លែងធ្វើ Load ដោយ Iterations/Delays។'
    },
    {
      question: 'Postman Console ប្រើសម្រាប់អ្វី?',
      options: [
        'មើល Large Response Body',
        'មើល Headers',
        'Debugging Scripts/Requests',
        'បង្កើត Requests'
      ],
      correct: 2,
      explanation: 'Postman Console ប្រើសម្រាប់ Debugging Scripts និង Requests។'
    },
    {
      question: 'ជ្រើស Environment នៅណា?',
      options: [
        'Request Tab',
        'Environment Manager',
        'Collection Runner Interface',
        'Postman Console'
      ],
      correct: 2,
      explanation: 'ជ្រើស Environment នៅ Collection Runner Interface�।'
    },
    {
      question: 'pm.iterationData.get("variable_name") ធ្វើអ្វី?',
      options: [
        'កំណត់ Environment Variable',
        'ទាញ Data File Value',
        'កំណត់ Global Variable',
        'ទទួល Response Status'
      ],
      correct: 1,
      explanation: 'ទាញតម្លៃពី Data File សម្រាប់ Iteration បច្ចុប្បន្ន។'
    },
    {
      question: 'Collection Runner អាចដំណើរការ Folder ជាក់លាក់បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Collection ទាំងមូល', 'Request តែមួយ'],
      correct: 0,
      explanation: 'Collection Runner អាចដំណើរការ Folder ជាក់លាក់។'
    },
    {
      question: '`Log responses` ធ្វើអ្វី?',
      options: [
        'លុប Responses',
        'រក្សាទុក Responses សម្រាប់ Debugging',
        'បង្ហាញ Status Code',
        'ផ្ញើ Responses ទៅ Email'
      ],
      correct: 1,
      explanation: '`Log responses` រក្សាទុក Responses សម្រាប់ Debugging�।'
    },
    {
      question: 'Collection Runner ជួយ Regression Testing ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Unit Tests តែប៉ុណ្ណោះ', 'Integration Tests តែប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'Collection Runner ជួយ Regression Testing ដោយផ្ទៀងផ្ទាត់មុខងារចាស់។'
    },
    {
      question: '`View Results` បង្ហាញអ្វី?',
      options: [
        'Status Code',
        'Request/Response និង Test Results',
        'Errors',
        'Iteration Count'
      ],
      correct: 1,
      explanation: '`View Results` បង្ហាញ Request/Response និង Test Results។'
    },
    {
      question: 'អត្ថប្រយោជន៍នៃ Delay?',
      options: [
        'បង្កើន Request Speed',
        'បង្កើន Iterations',
        'ក្លែងធ្វើ User Behavior/Server Protection',
        'កាត់បន្ថយ Data File Size'
      ],
      correct: 2,
      explanation: 'Delay ក្លែងធ្វើ User Behavior និងការពារ Server Overload។'
    },
    {
      question: '`Keep variable values` ធ្វើអ្វី?',
      options: [
        'កំណត់ Initial Value',
        'រក្សា Current Value',
        'លុប Variables',
        'ប្តូរ Global Variables'
      ],
      correct: 1,
      explanation: '`Keep variable values` រក្សា Current Value។'
    },
    {
      question: 'Shortcut សម្រាប់ Postman Console?',
      options: ['Ctrl/Cmd + C', 'Ctrl/Cmd + S', 'Ctrl/Cmd + Alt + C', 'Ctrl/Cmd + R'],
      correct: 2,
      explanation: 'Shortcut គឺ Ctrl/Cmd + Alt + C។'
    },
    {
      question: 'Data Files ផ្តល់ទិន្នន័យសម្រាប់អ្វី?',
      options: ['URLs', 'Headers', 'URLs, Headers, Body, Test Scripts', 'Environment Variables'],
      correct: 2,
      explanation: 'Data Files ផ្តល់ទិន្នន័យសម្រាប់ URLs, Headers, Body, Test Scripts។'
    },
    {
      question: 'Collection Runner ជួយ Unit Tests ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Integration Tests', 'End-to-End Tests'],
      correct: 0,
      explanation: 'Collection Runner ជួយ Unit Tests ប្រសិនបើ Test Scripts ផ្ទៀងផ្ទាត់មុខងារតូចៗ។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍: Collection Runner

ភារកិច្ចនេះណែនាំការប្រើ Collection Runner សម្រាប់ Automation Testing ជាមួយ Data File។

## លក្ខខណ្ឌ
* Postman Desktop/Web (គណនីឥតគិតថ្លៃ)។
* Workspace (ឧ. "My API Tests")។

## 1. រៀបចំ Collection/Request
1. **Collection:** បង្កើត \`User_API_Tests\`។
2. **Request: Get User Details**
   * Method: \`GET\`
   * URL: \`https://jsonplaceholder.typicode.com/users/{{user_id}}\`
   * Tests:
     \`\`\`javascript
     pm.test("Status code is as expected", function () {
         pm.response.to.have.status(pm.iterationData.get("expected_status"));
     });
     pm.test("User name is present", function () {
         pm.expect(pm.response.json().name).to.be.a('string');
     });
     console.log("Testing user_id:", pm.iterationData.get("user_id"));
     \`\`\`
   * Save: \`Get User Details\` ក្នុង \`User_API_Tests\`។

## 2. Data File (CSV)
* បង្កើត \`users_data.csv\`:
  \`\`\`csv
  user_id,expected_status
  1,200
  2,200
  999,404
  \`\`\`
* រក្សាទុក File។

## 3. ដំណើរការ Collection Runner
1. **បើក Runner:** Sidebar > **Runner**។
2. **កំណត់:**
   * Collection: \`User_API_Tests\`
   * Environment: \`No Environment\`
   * Iterations: 1 (កំណត់ដោយ Data File)
   * Delay: 50 ms
   * Data: ជ្រើស \`users_data.csv\` > **Preview**
   * Log responses: ធីក
3. **Run:** **Run User_API_Tests**។
4. **ពិនិត្យ:**
   * Summary Report
   * Iteration Results
   * Postman Console (Ctrl/Cmd + Alt + C) សម្រាប់ Logs

## 4. ឯកសារយោង (Optional)
* Screenshot: Collection Runner Setup, Results Report
`,
    solution: `
# ដំណោះស្រាយ: Collection Runner

## 1. Collection/Request/Data File
* **Collection:** \`User_API_Tests\`
* **Request: Get User Details**
  * Method: \`GET\`
  * URL: \`https://jsonplaceholder.typicode.com/users/{{user_id}}\`
  * Tests: Status Code, User Name, Console Log
* **Data File:** \`users_data.csv\`
  \`\`\`csv
  user_id,expected_status
  1,200
  2,200
  999,404
  \`\`\`

## 2. Collection Runner Execution
* **Setup:**
  * Collection: \`User_API_Tests\`
  * Environment: None
  * Delay: 50 ms
  * Data: \`users_data.csv\`
  * Log responses: Enabled
* **Results:**
  * Iterations: 3
  * Tests: 
    * user_id 1: Status 200, Name String (Pass)
    * user_id 2: Status 200, Name String (Pass)
    * user_id 999: Status 404, Name String (Pass)
  * Console: Logs "Testing user_id: 1", "2", "999"

## 3. លទ្ធផល
* **Summary:** 3 Requests, 6 Tests (All Pass)
* **Console Output:** Logs បង្ហាញ user_id សម្រាប់ Iteration នីមួយៗ។
* Collection Runner បង្ហាញ Automation និង Data-driven Testing។
`
  }
};

export default PostmanLesson4_1Content;