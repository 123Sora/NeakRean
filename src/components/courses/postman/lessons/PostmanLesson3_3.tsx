import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson3_3Content: LessonContent = {
  title: 'Pre-request Scripts និង Test Scripts',
  objectives: [
    'យល់ដឹងពីគោលបំណងនៃ Pre-request Scripts និង Test Scripts',
    'ដឹងពីរបៀបដែល Pre-request Scripts ដំណើរការមុន Request',
    'ដឹងពីរបៀបដែល Test Scripts ដំណើរការបន្ទាប់ពី Response',
    'របៀបសរសេរ JavaScript Code ក្នុង Scripts ទាំងពីរ',
    'ការប្រើប្រាស់ `pm` Object សម្រាប់ចូលប្រើ Request/Response Data និង Variables',
    'ការប្រើប្រាស់ Assertions សម្រាប់ការធ្វើតេស្ត (ឧ. `pm.test()`, `response.to.have.status()`)',
    'ការកំណត់ Variables ពី Response Data ក្នុង Test Scripts',
    'ឧទាហរណ៍ជាក់ស្តែងនៃការប្រើប្រាស់ Scripts'
  ],
  content: `
# Pre-request Scripts និង Test Scripts 🧑‍💻🧪

Postman អនុញ្ញាតឱ្យសរសេរ JavaScript Code ដែលដំណើរការនៅចំណុចផ្សេងៗក្នុង Request Lifecycle។ **Pre-request Scripts** ដំណើរការមុន Request និង **Test Scripts** ដំណើរការបន្ទាប់ពី Response។ Scripts ទាំងនេះសំខាន់សម្រាប់ស្វ័យប្រវត្តិកម្មនិងការធ្វើតេស្ត API។

## 1. គោលបំណងនៃ Pre-request Scripts និង Test Scripts 💡

* **Pre-request Scripts:**
  * **គោលបំណង:** រៀបចំ Request មុនពេលបញ្ជូន។
  * **ការប្រើប្រាស់:**
    * បង្កើត Dynamic Variables (ឧ. Timestamp, Random ID)។
    * គណនា Hash/Signature សម្រាប់ Authentication។
    * កំណត់ Headers ឬ Body ដោយ Logic។
* **Test Scripts:**
  * **គោលបំណង:** ផ្ទៀងផ្ទាត់ Response ពី Server។
  * **ការប្រើប្រាស់:**
    * ពិនិត្យ Status Code។
    * ផ្ទៀងផ្ទាត់ Response Body (ឧ. JSON Values)។
    * ពិនិត្យ Response Headers។
    * កំណត់ Variables ពី Response Data។

## 2. Pre-request Scripts ➡️

សរសេរនៅ Tab **Pre-request Script** ដំណើរការ **មុន** Request។

* **\`pm\` Object:** Global Object សម្រាប់ចូលប្រើ Request, Environment, Variables និង Utilities។
  * **\`pm.environment.set("name", "value");\`**: កំណត់ Environment Variable។
  * **\`pm.variables.set("name", "value");\`**: កំណត់ Local Variable។
  * **\`pm.request.headers.add({key: 'X-Key', value: 'val'});\`**: បន្ថែម Header។
  * **\`pm.request.body.raw = JSON.stringify({...});\`**: កែ Body។

\`\`\`javascript
// Generate dynamic timestamp
pm.environment.set("currentTimestamp", Date.now());
pm.request.headers.add({
    key: 'X-Request-Timestamp',
    value: pm.environment.get("currentTimestamp")
});

// Generate random user ID
const randomUserId = Math.floor(Math.random() * 1000) + 1;
pm.environment.set("new_user_id", randomUserId);
\`\`\`

## 3. Test Scripts ✅

សរសេរនៅ Tab **Tests** ដំណើរការ **បន្ទាប់ពី** Response។

* **\`pm.test("Test Name", function() {...});\`**: កំណត់ Test Case។
* **\`pm.response\`:** ចូលប្រើ Response Data។
  * **\`pm.response.to.have.status(200);\`**: ផ្ទៀងផ្ទាត់ Status Code។
  * **\`pm.response.json();\`**: Parse JSON Response។
  * **\`pm.response.to.have.jsonProperty("id");\`**: ពិនិត្យ Property។
* **\`pm.expect()\`:** Chai.js Assertions។
  * **\`pm.expect(json.name).to.eql("John");\`**: ផ្ទៀងផ្ទាត់ Value។
  * **\`pm.expect(pm.response.headers.get('Content-Type')).to.include('json');\`**: ពិនិត្យ Header។
* **Variable Setting:**
  * **\`pm.environment.set("name", value);\`**
  * **\`pm.collectionVariables.set("name", value);\`**

\`\`\`javascript
// Check status code
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

// Check JSON and property
pm.test("Response has 'id' property", function () {
    pm.response.to.be.json;
    pm.expect(pm.response.json()).to.have.property('id');
});

// Extract token
pm.test("Extract token", function () {
    const json = pm.response.json();
    if (json.token) {
        pm.environment.set("auth_token", json.token);
        console.log("Token set:", pm.environment.get("auth_token"));
    }
});

// Verify specific value
pm.test("Verify title", function () {
    pm.expect(pm.response.json().title).to.eql("sunt aut facere...");
});
\`\`\`

## 4. ឧទាហរណ៍ជាក់ស្តែង 🚀

* **Login Flow:**
  * **POST /login:** Test Script ទាញ \`auth_token\` កំណត់ជា Variable។
  * **GET /resource:** Header ប្រើ \`Bearer {{auth_token}}\`, Test Script ផ្ទៀងផ្ទាត់ Data�。
* **Dynamic Data:**
  * Pre-request Script: បង្កើត \`order_id\`។
  * Request: บody ប្រើ \`{{order_id}}\`។
  * Test Script: ផ្ទៀងផ្ទាត់ Response។

> **គន្លឹះ:** Scripts ជួយស្វ័យប្រវត្តិកម្ម API Testing ដោយប្រើ JavaScript។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: Pre-request Script - Timestamp Header
\`\`\`javascript
const timestamp = Date.now();
pm.environment.set("request_timestamp", timestamp);
pm.request.headers.add({
    key: 'X-Timestamp',
    value: timestamp.toString()
});
console.log("Timestamp added:", timestamp);
\`\`\`
**ការពន្យល់:**
* \`Date.now()\`: បង្កើត Timestamp។
* \`pm.request.headers.add()\`: បន្ថែម Header។

### ឧទាហរណ៍ ២: Test Script - Status Code និង Extract Data
\`\`\`javascript
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});
pm.test("Has 'id' property", function () {
    pm.expect(pm.response.json()).to.have.property('id');
});
pm.test("Extract ID", function () {
    const json = pm.response.json();
    if (json.id) {
        pm.environment.set("created_post_id", json.id);
        console.log("Post ID:", pm.environment.get("created_post_id"));
    }
});
\`\`\`
**ការពន្យល់:**
* \`pm.test()\`: កំណត់ Test Case។
* \`pm.response.to.have.status()\`: ផ្ទៀងផ្ទាត់ Status Code។
* \`pm.expect().to.have.property()\`: ពិនិត្យ Property។
* \`pm.environment.set()\`: កំណត់ Variable។
`
  ],
  quiz: [
    {
      question: 'តើ `Pre-request Scripts` ដំណើរការនៅពេលណា?',
      options: [
        'បន្ទាប់ពី Response',
        'មុន Request',
        'នៅពេល Postman ចាប់ផ្តើម',
        'នៅពេល Import Collection'
      ],
      correct: 1,
      explanation: '`Pre-request Scripts` ដំណើរការមុន Request ត្រូវបានបញ្ជូន។'
    },
    {
      question: 'តើ `Test Scripts` ដំណើរការនៅពេលណា?',
      options: [
        'មុន Request',
        'បន្ទាប់ពី Response',
        'នៅពេលរក្សាទុក Request',
        'នៅពេលជ្រើស Environment'
      ],
      correct: 1,
      explanation: '`Test Scripts` ដំណើរការបន្ទាប់ពី Response ត្រូវបានទទួល។'
    },
    {
      question: 'តើ `pm` Object ផ្តល់សិទ្ធិចូលប្រើអ្វី?',
      options: [
        'Request Data តែប៉ុណ្ណោះ',
        'Response Data តែប៉ុណ្ណោះ',
        'Request, Response, Environment, Variables, Utilities',
        'Environment Variables តែប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: '`pm` Object ផ្តល់សិទ្ធិចូលប្រើ Request, Response, Environment, Variables, និង Utilities។'
    },
    {
      question: 'តើ `pm.test()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន Request',
        'សរសេរ Test Case',
        'កំណត់ Environment Variable',
        'Parse JSON'
      ],
      correct: 1,
      explanation: '`pm.test()` ប្រើសម្រាប់សរសេរ Test Case និង Assertions។'
    },
    {
      question: 'តើ `pm.response.to.have.status(200);` ផ្ទៀងផ្ទាត់អ្វី?',
      options: [
        'Request Time 200ms',
        'Response Size 200 Bytes',
        'Status Code 200 OK',
        'Headers 200'
      ],
      correct: 2,
      explanation: '`pm.response.to.have.status(200);` ផ្ទៀងផ្ទាត់ Status Code 200 OK�।'
    },
    {
      question: 'តើមុខងារណាកំណត់ Environment Variable ពី Response?',
      options: [
        '`pm.request.set()`',
        '`pm.environment.set()`',
        '`pm.variables.get()`',
        '`pm.response.get()`'
      ],
      correct: 1,
      explanation: '`pm.environment.set()` កំណត់ Environment Variable ពី Response Data។'
    },
    {
      question: 'តើ `pm.response.json();` ធ្វើអ្វី?',
      options: [
        'បំប្លែង JSON ទៅ String',
        'Parse Response Body ជា JSON',
        'ផ្ទៀងផ្ទាត់ Response មិនមែន JSON',
        'កំណត់ Response Body'
      ],
      correct: 1,
      explanation: '`pm.response.json();` Parse Response Body ទៅជា JSON Object។'
    },
    {
      question: 'តើ `pm.expect()` ជា Assertion Library មួយណា?',
      options: ['Jasmine', 'Mocha', 'Chai.js', 'Jest'],
      correct: 2,
      explanation: '`pm.expect()` ជា Chai.js Assertion Library។'
    },
    {
      question: 'តើ Pre-request Script ប្រើសម្រាប់អ្វីជាទូទៅ?',
      options: [
        'ពិនិត្យ Status Code',
        'ផ្ទៀងផ្ទាត់ Response Body',
        'បង្កើត Dynamic Variables',
        'កំណត់ Variables ពី Response'
      ],
      correct: 2,
      explanation: 'Pre-request Script ប្រើសម្រាប់បង្កើត Dynamic Variables ដូចជា Timestamp។'
    },
    {
      question: 'តើ Test Script ប្រើសម្រាប់អ្វីជាទូទៅ?',
      options: [
        'គណនា Hash',
        'កំណត់ Headers',
        'ផ្ទៀងផ្ទាត់ Response Body',
        'បង្កើត Request Body'
      ],
      correct: 2,
      explanation: 'Test Script ប្រើសម្រាប់ផ្ទៀងផ្ទាត់ Response Body។'
    },
    {
      question: 'តើ `pm.variables.set()` កំណត់ Variable ប្រភេទណា?',
      options: ['Global', 'Environment', 'Collection', 'Local'],
      correct: 3,
      explanation: '`pm.variables.set()` កំណត់ Local Variable។'
    },
    {
      question: 'តើ Property ណាបន្ថែម Header ពី Pre-request Script?',
      options: [
        '`pm.response.headers.add()`',
        '`pm.request.headers.add()`',
        '`pm.environment.headers.add()`',
        '`pm.collection.headers.add()`'
      ],
      correct: 1,
      explanation: '`pm.request.headers.add()` បន្ថែម Header ពី Pre-request Script។'
    },
    {
      question: 'តើ `console.log()` បង្ហាញ Output នៅណា?',
      options: [
        'Browser Console',
        'Postman Console',
        'Terminal',
        'Response Body'
      ],
      correct: 1,
      explanation: '`console.log()` បង្ហាញនៅ Postman Console (Ctrl/Cmd + Alt + C)។'
    },
    {
      question: 'តើ Scripts ជួយអ្វីក្នុង API Testing?',
      options: [
        'បង្កើនល្បឿន Manual Testing',
        'ស្វ័យប្រវត្តិកម្ម Requests/Responses',
        'កាត់បន្ថយ Endpoints',
        'បង្កើន API Security'
      ],
      correct: 1,
      explanation: 'Scripts ជួយស្វ័យប្រវត្តិកម្មការរៀបចំ Requests និង Responses។'
    },
    {
      question: 'តើ `pm.expect(responseJson).to.have.property(\'name\');` ផ្ទៀងផ្ទាត់អ្វី?',
      options: [
        'Response មាន Property `name`',
        'Response Value `name`',
        'Response Body ជា `name`',
        'Header ជា `name`'
      ],
      correct: 0,
      explanation: '`pm.expect(responseJson).to.have.property(\'name\');` ផ្ទៀងផ្ទាត់ Property `name`។'
    },
    {
      question: 'តើអាចកែ Request Body ពី Pre-request Script បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'JSON Body តែប៉ុណ្ណោះ', 'Form Data Body'],
      correct: 0,
      explanation: 'អាចកែ Request Body ដោយ `pm.request.body.raw`។'
    },
    {
      question: 'តើ `pm.response.to.be.json;` ផ្ទៀងផ្ទាត់អ្វី?',
      options: [
        'Response Body ជា String',
        'Response Body ជា JSON',
        'Response Body ទទេ',
        'Response Body មាន Error'
      ],
      correct: 1,
      explanation: '`pm.response.to.be.json;` ផ្ទៀងផ្ទាត់ Response Body ជា JSON។'
    },
    {
      question: 'តើ `console.warn()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ឈប់ Script',
        'បង្ហាញ Error',
        'បង្ហាញ Warning',
        'លុប Variables'
      ],
      correct: 2,
      explanation: '`console.warn()` បង្ហាញ Warning នៅ Postman Console។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: Pre-request Scripts និង Test Scripts

ភារកិច្ចនេះណែនាំការប្រើ Scripts ដើម្បីស្វ័យប្រវត្តិកម្ម Requests និង Responses។

## លក្ខខណ្ឌជាមុន
* Postman Desktop App ឬ Web Client (គណនីឥតគិតថ្លៃ)។
* Workspace នៅ Postman (ឧ. "My Scripts Lab")។

## 1. រៀបចំ Environment
1. **បើក Environment Manager:** ចុចរូបតំណាង **ភពផែនដី**។
2. **ជ្រើស/បង្កើត Environment:** ប្រើ Environment (ឧ. \`Development API\`)។
3. **Variable:** 
   * \`base_url\` | Initial: \`https://jsonplaceholder.typicode.com\` | Current: \`https://jsonplaceholder.typicode.com\`
4. **រក្សាទុក:** ចុច **Save**។
5. **ជ្រើស Environment:** ជ្រើស Environment ពី Dropdown។

## 2. POST Request - Login (Mock API)
1. **បង្កើត Request:**
   * Method: \`POST\`
   * URL: \`{{base_url}}/posts\`
   * Headers: \`Content-Type: application/json\`
   * Body (raw - JSON):
     \`\`\`json
     {
       "username": "user123",
       "password": "password123"
     }
     \`\`\`
2. **Test Script:**
   \`\`\`javascript
   pm.test("Status code is 201 Created", function () {
       pm.response.to.have.status(201);
   });
   pm.test("Response is JSON", function () {
       pm.response.to.be.json;
   });
   const json = pm.response.json();
   if (json) {
       pm.environment.set("auth_token", "dummy_auth_token_from_login");
       console.log("Token set:", pm.environment.get("auth_token"));
   } else {
       console.warn("No JSON response.");
   }
   \`\`\`
3. **រក្សាទុក:** ឈ្មោះ \`Login and Get Token\`។
4. **បញ្ជូន Request:** ចុច **Send**។
5. **ពិនិត្យ Console:** បើក Postman Console (Ctrl/Cmd + Alt + C), ពិនិត្យ "Token set: dummy_auth_token_from_login"។

## 3. GET Request - Pre-request & Test Scripts
1. **បង្កើត Request:**
   * Method: \`GET\`
   * URL: \`{{base_url}}/comments/1\`
   * Headers: 
     * Key: \`Authorization\` | Value: \`Bearer {{auth_token}}\`
2. **Pre-request Script:**
   \`\`\`javascript
   const timestamp = Date.now();
   pm.request.headers.add({
       key: 'X-Request-Timestamp',
       value: timestamp.toString()
   });
   console.log("Timestamp added:", timestamp);
   \`\`\`
3. **Test Script:**
   \`\`\`javascript
   pm.test("Status code is 200 OK", function () {
       pm.response.to.have.status(200);
   });
   pm.test("Response is JSON with 'postId'", function () {
       pm.response.to.be.json;
       pm.expect(pm.response.json()).to.have.property('postId');
   });
   pm.test("Comment ID is 1", function () {
       pm.expect(pm.response.json().id).to.eql(1);
   });
   pm.test("Timestamp header sent", function () {
       pm.expect(pm.request.headers.has('X-Request-Timestamp')).to.be.true;
   });
   \`\`\`
4. **រក្សាទុក:** ឈ្មោះ \`Get Protected Comment\`។
5. **បញ្ជូន Request:** ចុច **Send**។
6. **ពិនិត្យ:**
   * Postman Console: ពិនិត្យ Output។
   * Test Results: ត្រួតពិនិត្យ Tests Pass។

## 4. ឯកសារយោង (Optional)
* Screenshot: Request \`Login and Get Token\` (Test Script), \`Get Protected Comment\` (Pre-request & Test Script), Test Results។
`,
    solution: `
# ដំណោះស្រាយ: Pre-request Scripts និង Test Scripts

បន្ទាប់ពីអនុវត្ត Lab Task:

## 1. Environment Setup
* **Variable:** 
  * \`base_url\`: Initial/Current: \`https://jsonplaceholder.typicode.com\`
* **Verification:** Environment បង្ហាញនៅ Environment Manager។

## 2. POST Request - Login (Mock API)
* **Request: Login and Get Token**
  * Method: \`POST\`
  * URL: \`{{base_url}}/posts\`
  * Headers: \`Content-Type: application/json\`
  * Body:
    \`\`\`json
    {
      "username": "user123",
      "password": "password123"
    }
    \`\`\`
* **Test Script Output:**
  * Status: \`201 Created\`
  * Console: "Token set: dummy_auth_token_from_login"
  * Tests: Pass (Status 201, JSON Response)
* **Verification:** Variable \`auth_token\` = "dummy_auth_token_from_login"។

## 3. GET Request - Protected Comment
* **Request: Get Protected Comment**
  * Method: \`GET\`
  * URL: \`{{base_url}}/comments/1\`
  * Headers: 
    * \`Authorization: Bearer {{auth_token}}\`
    * \`X-Request-Timestamp\` (Dynamic from Pre-request Script)
* **Pre-request Script Output:** Console: "Timestamp added: [timestamp]"
* **Test Script Output:**
  * Status: \`200 OK\`
  * Body:
    \`\`\`json
    {
      "postId": 1,
      "id": 1,
      "name": "...",
      "email": "...",
      "body": "..."
    }
    \`\`\`
  * Tests: Pass (Status 200, JSON, postId Property, Comment ID 1, Timestamp Header)
* **Verification:** Tests Pass, Console បង្ហាញ Timestamp។

## 4. លទ្ធផល
* **Environment:** Variable \`base_url\` ត្រឹមត្រូវ។
* **Login Request:** Token កំណត់ជា \`dummy_auth_token_from_login\`។
* **Protected Comment Request:** Tests Pass, Timestamp Header បន្ថែម។
* Scripts បង្ហាញស្វ័យប្រវត្តិកម្មការរៀបចំ Requests និង Responses។
`
  }
};

export default PostmanLesson3_3Content;