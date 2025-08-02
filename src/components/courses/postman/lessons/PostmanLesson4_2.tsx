import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson4_2Content: LessonContent = {
  title: 'មេរៀនទី ២: Mock Servers (ម៉ាស៊ីនមេ Mock)',
  objectives: [
    'យល់ពីគោលបំណង និងអត្ថប្រយោជន៍នៃ Mock Servers',
    'បង្កើត Mock Server ថ្មីក្នុង Postman',
    'កំណត់ Mock Responses សម្រាប់ Requests',
    'ប្រើ Mock Servers សម្រាប់ Frontend Development ដោយគ្មាន Backend',
    'គ្រប់គ្រង និងធ្វើបច្ចុប្បន្នភាព Mock Responses',
    'យល់ពី Mock Server URL'
  ],
  content: `
# Mock Servers (ម៉ាស៊ីនមេ Mock) 🎭

**Mock Servers** ក្នុង Postman អនុញ្ញាតឱ្យក្លែងធ្វើ API Responses ដោយមិនចាំបាច់មាន Backend Server ពិតប្រាកដ។ វាមានប្រយោជន៍សម្រាប់ Frontend Development និង Testing។

## 1. គោលបំណង និងអត្ថប្រយោជន៍ 💡

* **Frontend Development:** អភិវឌ្ឍ UI ដោយមិនរង់ចាំ Backend API។
* **Testing:** សាកល្បង Scenarios (ឧ. Error Responses, Empty Data)។
* **Demonstrations:** បង្ហាញ API ដល់ Stakeholders ដោយមិន Deploy Backend។
* **Reduced Dependency:** កាត់បន្ថយការពឹងផ្អែកលើ Backend Team។
* **Offline Testing:** សាកល្បង API Workflows ដោយគ្មាន Internet (ប្រសិនបើ Mock Server ត្រូវបាន Setup)។

## 2. បង្កើត Mock Server ➕

### a. ពី Scratch
1. Sidebar > **Mock Servers** > **+**។
2. **កំណត់:**
   * **Name:** ឧ. "Product Mock API"
   * **Environment:** ជ្រើស/បង្កើត Environment
   * **Requests to Mock:** បន្ថែម Requests (ឬពេលក្រោយ)
   * **Delay:** កំណត់ Delay (ms)
3. **Create Mock Server:** ទទួល Mock URL។

### b. ពី Collection
1. Sidebar > **Collections** > **...** > **Mock Collection**។
2. កំណត់ដូច Scratch។ Requests ក្នុង Collection នឹងត្រូវ Mock ដោយស្វ័យប្រវត្តិ។

## 3. កំណត់ Mock Responses 📝

Mock Server ឆ្លើយតបដោយផ្អែកលើ **Saved Examples**។

1. **បើក Request:** នៅក្នុង Collection។
2. **បង្កើត Example:**
   * បញ្ជូន Request > **Save Response** ឬ **Save Example**។
   * កំណត់ Name (ឧ. "Success Response")។
   * កែ Status Code, Headers, Body (ឧ. JSON Token សម្រាប់ Login)។
3. **រក្សាទុក:** អាចបង្កើត Examples ច្រើន (ឧ. Success, 404, Error)។ Mock Server ជ្រើស Example សមស្រប។

## 4. Frontend Development ដោយគ្មាន Backend 🌐

1. **Mock URL:** ឧ. \`https://<mock-id>.mock.pstmn.io\`។
2. **Frontend Integration:** ប្រើ Mock URL ជំនួស Backend API (ឧ. React/Vue App)។
   * ឧ. Call \`/products\` > \`https://<mock-id>.mock.pstmn.io/products\`។
3. **Response:** Mock Server ឆ្លើយតបជាមួយ Example ដែលត្រូវគ្នា។

## 5. គ្រប់គ្រង Mock Responses 🔄

* **កែ Examples:** Sidebar > Request > Edit Example។
* **លុប Examples:** លុប Examples ដែលមិនត្រូវការ។
* **Auto-Update:** ការផ្លាស់ប្តូរ Example ឆ្លុះបញ្ចាំងដោយស្វ័យប្រវត្តិ។

## 6. Mock Server URL 🔗

* Format: \`https://<mock-id>.mock.pstmn.io\`
* **<mock-id>:** Unique ID
* **pstmn.io:** Postman Domain
* រក្សាទុកជា Environment Variable សម្រាប់ភាពងាយស្រួល។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: Mock Server ពី Collection
\`\`\`text
[Mock Collection]
-------------------------------------------------
| Name: [ Product Mock API ]                     |
| Environment: [ Mock API Environment ▼ ]        |
| Requests:                                      |
|   [x] GET /products                            |
|   [x] POST /products                           |
| [ ] Private (API Key)                          |
| [ ] Simulate Delays                            |
| [ Create Mock Server ]                         |
-------------------------------------------------
\`\`\`

### ឧទាហរណ៍ ២: Mock Response (Saved Example)
\`\`\`text
// Request: POST /products
[SAVE EXAMPLE]
-------------------------------------------------
| Name: [ Successful Product Creation ]          |
| Status: 201 Created                            |
| Headers: Content-Type: application/json        |
| Body:                                          |
| {                                              |
|   "id": 101,                                   |
|   "name": "New Product",                       |
|   "price": 99.99                               |
| }                                              |
| [ Save Example ]                               |
-------------------------------------------------
\`\`\`

### ឧទាហរណ៍ ៣: Mock Server URL
\`\`\`text
Mock URL:
https://a1b2c3d4-e5f6-7890-1234-567890abcdef.mock.pstmn.io

// Call: /products
https://a1b2c3d4-e5f6-7890-1234-567890abcdef.mock.pstmn.io/products
\`\`\`
`
  ],
  quiz: [
    {
      question: 'Mock Servers ធ្វើអ្វី?',
      options: [
        'បង្កើត Backend API',
        'ក្លែងធ្វើ API Responses',
        'Automation Testing',
        'API Performance Monitoring'
      ],
      correct: 1,
      explanation: 'Mock Servers ក្លែងធ្វើ API Responses ដោយគ្មាន Backend។'
    },
    {
      question: 'អត្ថប្រយោជន៍ចម្បងនៃ Mock Servers?',
      options: [
        'បង្កើន Backend Speed',
        'Frontend UI Development ដោយគ្មាន Backend',
        'កាត់បន្ថយ Collection Size',
        'បង្កើន API Security'
      ],
      correct: 1,
      explanation: 'Mock Servers ជួយ Frontend Developers បង្កើត UI ដោយគ្មាន Backend។'
    },
    {
      question: 'Mock Server ឆ្លើយតបដោយផ្អែកលើអ្វី?',
      options: [
        'Request Headers',
        'Saved Examples',
        'Environment Variables',
        'Collection Runner'
      ],
      correct: 1,
      explanation: 'Mock Server ឆ្លើយតបដោយផ្អែកលើ Saved Examples។'
    },
    {
      question: 'អាចបង្ផើត Mock Server ពី Collection បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Public Collections', 'Private Collections'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អាចបង្កើត Mock Server ពី Collection។'
    },
    {
      question: '`Delay response` ធ្វើអ្វី?',
      options: [
        'Delay Request',
        'Delay Response',
        'Delay Save Response',
        'Delay Delete Mock'
      ],
      correct: 1,
      explanation: '`Delay response` ពន្យារពេល Response (ms)។'
    },
    {
      question: 'អាចបង្ផើត Examples ច្រើនសម្រាប់ Request តែមួយបានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'GET Requests', 'POST Requests'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អាចបង្ផើត Examples ច្រើន (ឧ. Success, 404)។'
    },
    {
      question: 'Mock Server URL Format?',
      options: [
        'http://localhost:8080/mock',
        'https://api.example.com/mock',
        'https://<mock-id>.mock.pstmn.io',
        'ftp://mock.server.com'
      ],
      correct: 2,
      explanation: 'Mock Server URL: `https://<mock-id>.mock.pstmn.io`។'
    },
    {
      question: 'Mock Servers កាត់បន្ថយ Backend Dependency ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Production Phase', 'Testing Phase'],
      correct: 0,
      explanation: 'Mock Servers កាត់បន្ថយ Backend Dependency ក្នុង Early Development។'
    },
    {
      question: 'កែ Status Code នៅពេលណា?',
      options: [
        'Create Mock Server',
        'After Delete Mock Server',
        'Save Example Response',
        'Cannot Edit'
      ],
      correct: 2,
      explanation: 'កែ Status Code នៅពេល Save Example Response។'
    },
    {
      question: 'Mock Server អាច Offline Testing បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Require Internet', 'Public APIs'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Mock Server អាច Offline Testing បាន។'
    },
    {
      question: 'Tab សម្រាប់បង្ផើត Mock Server ពី Scratch?',
      options: ['Collections', 'Environments', 'Mock Servers', 'History'],
      correct: 2,
      explanation: 'ចុច Tab "Mock Servers" ដើម្បីបង្ផើត Mock Server។'
    },
    {
      question: 'Mock Server ជ្រើស Example យ៉ាងម៉េច?',
      options: [
        'First Example',
        'Last Example',
        'Best Match Example',
        'Status 200 Example'
      ],
      correct: 2,
      explanation: 'Mock Server ជ្រើស Example ដែលត្រូវគ្នាបំផុត។'
    },
    {
      question: 'ការផ្លាស់ប្តូរ Examples ឆ្លុះបញ្ចាំង Auto ទេ?',
      options: ['បាទ/ចាស៎', 'Restart Mock Server', 'Export/Import', 'Status Code Only'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ការផ្លាស់ប្តូរ Examples Auto Update។'
    },
    {
      question: 'Mock Server ជួយ Demo API ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Deployed Backend', 'Internal Stakeholders'],
      correct: 0,
      explanation: 'Mock Server ជួយ Demo API ដោយគ្មាន Backend។'
    },
    {
      question: 'Saved Examples រក្សាទុកនៅណា?',
      options: [
        'Environment Variables',
        'Collection Runner',
        'Request in Collection',
        'Postman Console'
      ],
      correct: 2,
      explanation: 'Saved Examples រក្សាទុកនៅ Request ក្នុង Collection។'
    },
    {
      question: 'Mock Server អាចក្លែងធ្វើ Error Responses បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', '404 Only', '500 Only'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Mock Server អាចក្លែងធ្វើ Error Responses (400, 401, 404, 500)�।'
    },
    {
      question: 'Mock Server ជួយ Test Difficult Scenarios ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Simple Scenarios', 'Empty Data Scenarios'],
      correct: 0,
      explanation: 'Mock Server ជួយ Test Scenarios ពិបាកបង្ផើតនៅ Backend។'
    },
    {
      question: 'អាចរក្សាទុក Mock Server URL ជា Environment Variable បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Global Variables', 'Collection Variables'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អាចរក្សាទុក Mock Server URL ជា Environment Variable។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍: Mock Server

ភារកិច្ចនេះណែនាំការបង្ផើត Mock Server និងកំណត់ Responses។

## លក្ខខណ្ឌ
* Postman Desktop/Web (គណនីឥតគិតថ្លៃ)។
* Workspace (ឧ. "My API Tests")។

## 1. រៀបចំ Collection/Requests
1. **Collection:** បង្ផើត \`My_Mock_API_Project\`។
2. **Request: Get Products**
   * Method: \`GET\`
   * URL: \`{{mock_server_url}}/products\`
   * Save: \`Get Products\` ក្នុង \`My_Mock_API_Project\`។
3. **Request: Create Product**
   * Method: \`POST\`
   * URL: \`{{mock_server_url}}/products\`
   * Headers: \`Content-Type: application/json\`
   * Body:
     \`\`\`json
     {
       "name": "New Awesome Product",
       "price": 99.99,
       "description": "A fantastic new product."
     }
     \`\`\`
   * Save: \`Create Product\` ក្នុង \`My_Mock_API_Project\`។

## 2. បង្ផើត Mock Server
1. **Mock Collection:**
   * Collections > **...** > **Mock Collection**។
   * Name: \`Product_Mock_Server\`
   * Environment: New \`Mock API Environment\`
   * Requests: ធីក \`Get Products\`, \`Create Product\`
   * Click **Create Mock Server**។
   * Copy Mock URL (ឧ. \`https://xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.mock.pstmn.io\`)។
2. **Environment:**
   * Check \`Mock API Environment\` > Variable \`mock_server_url\` = Mock URL
   * Select Environment in Postman Dropdown។

## 3. កំណត់ Mock Responses
1. **Get Products:**
   * Open Request > **Save Example**
   * Name: \`Successful Products List\`
   * Status: \`200 OK\`
   * Body:
     \`\`\`json
     [
       { "id": 1, "name": "Laptop", "price": 1200 },
       { "id": 2, "name": "Mouse", "price": 25 }
     ]
     \`\`\`
   * Save Example
2. **Create Product:**
   * Open Request > **Save Example**
   * Name: \`Successful Product Creation\`
   * Status: \`201 Created\`
   * Body:
     \`\`\`json
     {
       "id": 101,
       "name": "New Awesome Product",
       "price": 99.99,
       "description": "A fantastic new product.",
       "status": "created"
     }
     \`\`\`
   * Save Example

## 4. សាកល្បង Mock Server
1. **Get Products:**
   * Open Request, Ensure Environment Selected
   * Send > Verify: Status \`200 OK\`, JSON Body
2. **Create Product:**
   * Open Request, Ensure Environment Selected
   * Send > Verify: Status \`201 Created\`, JSON Body

## 5. ឯកសារយោង (Optional)
* Screenshot: Mock Server Setup, Saved Examples, Responses
`,
    solution: `
# ដំណោះស្រាយ: Mock Server

## 1. Collection/Requests
* **Collection:** \`My_Mock_API_Project\`
* **Requests:**
  * **Get Products:** \`GET {{mock_server_url}}/products\`
  * **Create Product:** \`POST {{mock_server_url}}/products\`, JSON Body
* **Environment:** \`Mock API Environment\` (\`mock_server_url\`)

## 2. Mock Server
* **Name:** \`Product_Mock_Server\`
* **URL:** \`https://xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.mock.pstmn.io\`
* **Requests Mocked:** \`Get Products\`, \`Create Product\`

## 3. Mock Responses
* **Get Products:**
  * Example: \`Successful Products List\`
  * Status: \`200 OK\`
  * Body:
    \`\`\`json
    [
      { "id": 1, "name": "Laptop", "price": 1200 },
      { "id": 2, "name": "Mouse", "price": 25 }
    ]
    \`\`\`
* **Create Product:**
  * Example: \`Successful Product Creation\`
  * Status: \`201 Created\`
  * Body:
    \`\`\`json
    {
      "id": 101,
      "name": "New Awesome Product",
      "price": 99.99,
      "description": "A fantastic new product.",
      "status": "created"
    }
    \`\`\`

## 4. Testing Results
* **Get Products:** Status \`200 OK\`, Returns Product List
* **Create Product:** Status \`201 Created\`, Returns Created Product
* Mock Server បង្ហាញការក្លែងធ្វើ API សម្រាប់ Frontend Development និង Testing។
`
  }
};

export default PostmanLesson4_2Content;