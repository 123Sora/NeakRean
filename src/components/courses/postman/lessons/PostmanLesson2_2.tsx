import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson2_2Content: LessonContent = {
  title: 'ការធ្វើការជាមួយ Responses និង Status Codes',
  objectives: [
    'យល់ដឹងពីសមាសធាតុនៃ HTTP Response (Status Code, Body, Headers)',
    'បកស្រាយ HTTP Status Codes តាមប្រភេទ (1xx, 2xx, 3xx, 4xx, 5xx)',
    'របៀបមើល និងវិភាគ Response Body (JSON, XML, HTML, Text)',
    'របៀបមើល និងវិភាគ Response Headers',
    'ការយល់ដឹងពី Response Time និង Size',
    'គន្លឹះក្នុងការដោះស្រាយកំហុសដោយផ្អែកលើ Status Codes'
  ],
  content: `
# ការធ្វើការជាមួយ Responses និង Status Codes ✅❌

បន្ទាប់ពីបញ្ជូន Request ទៅ Server នឹងបញ្ជូន Response ត្រឡប់មកវិញ។ ការយល់ដឹងពី Response នេះគឺសំខាន់ណាស់សម្រាប់ការ Debugging និងការផ្ទៀងផ្ទាត់ API ។

## 1. យល់ដឹងពីសមាសធាតុនៃ HTTP Response 💡

HTTP Response នីមួយៗមានសមាសធាតុសំខាន់ៗដូចខាងក្រោម៖
* **Status Code:** លេខ 3 ខ្ទង់ដែលបញ្ជាក់ពីលទ្ធផលនៃ Request (ឧទាហរណ៍ 200 OK, 404 Not Found) ។
* **Response Body:** ទិន្នន័យដែល Server បញ្ជូនត្រឡប់មកវិញ (ឧទាហរណ៍ JSON Data, HTML Page) ។
* **Response Headers:** ព័ត៌មាន Meta អំពី Response (ឧទាហរណ៍ Content-Type, Date, Server) ។
* **Response Time:** រយៈពេលដែល Server ចំណាយដើម្បីដំណើរការ Request និងបញ្ជូន Response ។
* **Response Size:** ទំហំនៃ Response Body ។

## 2. បកស្រាយ HTTP Status Codes តាមប្រភេទ 🚦

Status Codes ត្រូវបានបែងចែកជា 5 ប្រភេទសំខាន់ៗ៖

* **\`1xx Informational\` (ព័ត៌មាន):** Request ត្រូវបានទទួល ហើយដំណើរការបន្ត។
    * \`100 Continue\`: Server បានទទួល Headers របស់ Request ហើយ Client គួរតែបន្តបញ្ជូន Request Body ។
* **\`2xx Success\` (ជោគជ័យ):** Request ត្រូវបានទទួល យល់ និងដំណើរការដោយជោគជ័យ។
    * \`200 OK\`: Request ជោគជ័យ។ នេះគឺជា Status Code ទូទៅបំផុតសម្រាប់ GET, PUT, PATCH, DELETE ។
    * \`201 Created\`: Resource ថ្មីត្រូវបានបង្កើតដោយជោគជ័យ (ជាធម្មតាសម្រាប់ POST Request) ។
    * \`202 Accepted\`: Request ត្រូវបានទទួល ប៉ុន្តែការដំណើរការមិនទាន់បានបញ្ចប់ទេ។
    * \`204 No Content\`: Request ជោគជ័យ ប៉ុន្តែគ្មាន Content ត្រូវបញ្ជូនត្រឡប់មកវិញ (ជាធម្មតាសម្រាប់ DELETE ឬ PUT ដែលមិនមាន Response Body) ។
* **\`3xx Redirection\` (ប្តូរទិស):** Client ត្រូវតែធ្វើសកម្មភាពបន្ថែមដើម្បីបញ្ចប់ Request ។
    * \`301 Moved Permanently\`: Resource ត្រូវបានផ្លាស់ប្តូរទៅ URL ថ្មីជាអចិន្ត្រៃយ៍។
    * \`302 Found\` (បណ្តោះអាសន្ន): Resource ត្រូវបានរកឃើញបណ្តោះអាសន្ននៅ URL ផ្សេង។
    * \`304 Not Modified\`: Resource មិនត្រូវបានកែប្រែចាប់តាំងពី Request ចុងក្រោយ។
* **\`4xx Client Error\` (កំហុស Client):** Request មានកំហុសពី Client Side ។
    * \`400 Bad Request\`: Request មិនត្រឹមត្រូវ (ឧទាហរណ៍៖ Syntax Error, Missing Required Parameters) ។
    * \`401 Unauthorized\`: Request ទាមទារ Authentication ប៉ុន្តែមិនត្រូវបានផ្តល់ឱ្យ ឬមិនត្រឹមត្រូវ។
    * \`403 Forbidden\`: Client មិនមានសិទ្ធិចូលប្រើ Resource នោះទេ ទោះបីជាមាន Authentication ក៏ដោយ។
    * \`404 Not Found\`: Resource ដែលបានស្នើសុំមិនត្រូវបានរកឃើញនៅលើ Server ។
    * \`405 Method Not Allowed\`: HTTP Method ដែលបានប្រើមិនត្រូវបានអនុញ្ញាតសម្រាប់ Resource នោះទេ។
    * \`429 Too Many Requests\`: Client បានបញ្ជូន Requests ច្រើនពេកក្នុងរយៈពេលកំណត់ (Rate Limiting) ។
* **\`5xx Server Error\` (កំហុស Server):** Server បរាជ័យក្នុងការបំពេញ Request ដែលត្រឹមត្រូវ។
    * \`500 Internal Server Error\`: Server មានបញ្ហាទូទៅដែលមិនបានរំពឹងទុក។
    * \`502 Bad Gateway\`: Server ដើរតួជា Gateway ឬ Proxy ហើយបានទទួល Response មិនត្រឹមត្រូវពី Server ខាងលើ។
    * \`503 Service Unavailable\`: Server មិនអាចដំណើរការ Request បានទេ ដោយសារតែ Overload ឬ Downtime ។

## 3. របៀបមើល និងវិភាគ Response Body 📊

Response Body គឺជាទិន្នន័យជាក់ស្តែងដែល Server បញ្ជូនត្រឡប់មកវិញ។

* **Pretty:** ទម្រង់ដែលងាយស្រួលអាន (Formatted JSON, XML) ។
* **Raw:** ទម្រង់ដើមដែលមិនបាន Format ។
* **Preview:** បង្ហាញ HTML Response ជា Web Page ។
* **Visualize:** សម្រាប់មើលទិន្នន័យជា Graph ឬ Chart (ទាមទារការសរសេរ Script) ។

**ក្នុង Postman:** បន្ទាប់ពីទទួលបាន Response អ្នកអាចប្តូររវាង Tabs ទាំងនេះនៅផ្នែក Response Panel ។

## 4. របៀបមើល និងវិភាគ Response Headers 🔍

Response Headers ផ្តល់ព័ត៌មានបន្ថែមអំពី Response ពី Server ។

* **Common Response Headers:**
    * \`Content-Type\`: ប្រភេទ Media Type នៃ Response Body ។
    * \`Date\`: កាលបរិច្ឆេទ និងពេលវេលានៃ Response ។
    * \`Server\`: ព័ត៌មានអំពី Server Software ។
    * \`Cache-Control\`: គ្រប់គ្រង Caching Behavior ។
    * \`Set-Cookie\`: កំណត់ Cookies នៅក្នុង Browser ។

**ក្នុង Postman:** ចូលទៅ Tab **"Headers"** នៅក្នុង Response Panel ។

## 5. ការយល់ដឹងពី Response Time និង Size ⏱️📏

* **Response Time:** ពេលវេលាគិតជា Milliseconds (ms) ដែល Request ចំណាយ។ ពេលវេលាទាបជាងគឺល្អជាងសម្រាប់ Performance ។
* **Response Size:** ទំហំនៃ Response Body (គិតជា KB ឬ MB) ។ ទំហំតូចជាងគឺល្អជាងសម្រាប់ Bandwidth ។

ព័ត៌មានទាំងនេះបង្ហាញនៅផ្នែកខាងលើនៃ Response Panel ក្នុង Postman ។

## 6. គន្លឹះក្នុងការដោះសraាយកំហុសដោយផ្អែកលើ Status Codes 🐞

* **\`400 Bad Request\`:** ពិនិត្យ Request Body, Query Parameters, និង Headers របស់អ្នកសម្រាប់ Syntax Errors ឬ Missing Required Fields ។
* **\`401 Unauthorized\` / \`403 Forbidden\`:** ពិនិត្យ Authentication Token (Bearer Token, API Key) របស់អ្នក។ ត្រូវប្រាកដថាវាត្រឹមត្រូវ និងមានសិទ្ធិចូលប្រើ Resource នោះ។
* **\`404 Not Found\`:** ពិនិត្យ URL របស់អ្នក។ តើ Path Parameter ត្រឹមត្រូវទេ? តើ Resource នោះពិតជាមានមែនទេ?
* **\`405 Method Not Allowed\`:** ពិនិត្យ HTTP Method ដែលអ្នកកំពុងប្រើ។ តើ API Endpoint នោះគាំទ្រ Method នោះដែរឬទេ?
* **\`500 Internal Server Error\`:** បញ្ហានេះជាធម្មតាកើតឡើងពី Server Side ។ អ្នកអាចពិនិត្យ Server Logs ឬទាក់ទង Backend Developer ។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: Response ជោគជ័យ (200 OK)
នៅពេលអ្នកទទួលបាន Status Code 200 OK វាមានន័យថា Request របស់អ្នកបានជោគជ័យ។
\`\`\`text
GET https://jsonplaceholder.typicode.com/posts/1

Response:
  Status: 200 OK
  Time: 123 ms
  Size: 200 B
  Body:
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit..."
  }
  Headers:
    Content-Type: application/json; charset=utf-8
    Cache-Control: public, max-age=14400
    // ... other headers
\`\`\`

### ឧទាហរណ៍ ២: Response កំហុស (404 Not Found)
នៅពេលអ្នកទទួលបាន Status Code 404 Not Found វាមានន័យថា Resource មិនត្រូវបានរកឃើញ។
\`\`\`text
GET https://jsonplaceholder.typicode.com/nonexistent-resource

Response:
  Status: 404 Not Found
  Time: 50 ms
  Size: 2 B
  Body: {} // Or a small error message
  Headers:
    Content-Type: application/json; charset=utf-8
    // ... other headers
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `Status Code` នៅក្នុង HTTP Response បញ្ជាក់ពីអ្វី?',
      options: ['ទំហំ Response', 'ប្រភេទ Content', 'លទ្ធផលនៃ Request', 'ពេលវេលា Response'],
      correct: 2,
      explanation: '`Status Code` បញ្ជាក់ពីលទ្ធផលនៃ Request ថាវាជោគជ័យ ឬមានកំហុស។'
    },
    {
      question: 'តើ `201 Created` Status Code ត្រូវបានប្រើនៅពេលណា?',
      options: [
        'នៅពេល Request ជោគជ័យជាទូទៅ',
        'នៅពេល Resource ថ្មីត្រូវបានបង្កើតដោយជោគជ័យ',
        'នៅពេល Request ត្រូវបានទទួល ប៉ុន្តែមិនទាន់ចប់',
        'នៅពេលគ្មាន Content ត្រូវបញ្ជូនត្រឡប់មកវិញ'
      ],
      correct: 1,
      explanation: '`201 Created` ត្រូវបានប្រើនៅពេល Resource ថ្មីត្រូវបានបង្កើតដោយជោគជ័យ (ជាធម្មតាសម្រាប់ POST Request) ។'
    },
    {
      question: 'តើ `Response Body` គឺជាអ្វី?',
      options: [
        'ព័ត៌មាន Meta អំពី Response',
        'ទិន្នន័យជាក់ស្តែងដែល Server បញ្ជូនត្រឡប់មកវិញ',
        'រយៈពេលដែល Request ចំណាយ',
        'ទំហំនៃ Response'
      ],
      correct: 1,
      explanation: '`Response Body` គឺជាទិន្នន័យជាក់ស្តែងដែល Server បញ្ជូនត្រឡប់មកវិញ។'
    },
    {
      question: 'តើ `400 Bad Request` Status Code បង្ហាញពីបញ្ហាអ្វី?',
      options: [
        'Server មានបញ្ហា',
        'Request មិនត្រឹមត្រូវពី Client Side',
        'Resource មិនត្រូវបានរកឃើញ',
        'មិនមាន Authentication'
      ],
      correct: 1,
      explanation: '`400 Bad Request` បង្ហាញថា Request មិនត្រឹមត្រូវពី Client Side (ឧទាហរណ៍ Syntax Error) ។'
    },
    {
      question: 'តើ `301 Moved Permanently` មានន័យដូចម្តេច?',
      options: [
        'Resource ត្រូវបានផ្លាស់ប្តូរជាបណ្តោះអាសន្ន',
        'Resource ត្រូវបានផ្លាស់ប្តូរជាអចិន្ត្រៃយ៍ទៅ URL ថ្មី',
        'Resource មិនត្រូវបានកែប្រែ',
        'Server មានបញ្ហា'
      ],
      correct: 1,
      explanation: '`301 Moved Permanently` មានន័យថា Resource ត្រូវបានផ្លាស់ប្តូរជាអចិន្ត្រៃយ៍ទៅ URL ថ្មី។'
    },
    {
      question: 'តើ `Content-Type` Header ក្នុង Response បញ្ជាក់អ្វី?',
      options: [
        'ប្រភេទ Content នៃ Request Body',
        'ប្រភេទ Media Type នៃ Response Body',
        'Authentication Token',
        'Encoding របស់ Response'
      ],
      correct: 1,
      explanation: '`Content-Type` Header ក្នុង Response បញ្ជាក់ប្រភេទ Media Type នៃ Response Body ។'
    },
    {
      question: 'តើ `503 Service Unavailable` Status Code បង្ហាញពីបញ្ហាអ្វី?',
      options: [
        'Client បានបញ្ជូន Requests ច្រើនពេក',
        'Resource មិនត្រូវបានរកឃើញ',
        'Server មិនអាចដំណើរការ Request បានទេ ដោយសារ Overload ឬ Downtime',
        'Request មិនមាន Authentication'
      ],
      correct: 2,
      explanation: '`503 Service Unavailable` បង្ហាញថា Server មិនអាចដំណើរការ Request បានទេ ដោយសារតែ Overload ឬ Downtime ។'
    },
    {
      question: 'តើ `Pretty` View ក្នុង Response Body របស់ Postman ធ្វើអ្វី?',
      options: [
        'បង្ហាញទិន្នន័យជាទម្រង់ដើម',
        'បង្ហាញ HTML Response ជា Web Page',
        'បង្ហាញទិន្នន័យជាទម្រង់ដែលងាយស្រួលអាន (Formatted)',
        'បង្ហាញទិន្នន័យជា Graph'
      ],
      correct: 2,
      explanation: '`Pretty` View បង្ហាញទិន្នន័យជាទម្រង់ដែលងាយស្រួលអាន (Formatted JSON, XML) ។'
    },
    {
      question: 'តើ `Response Time` ត្រូវបានវាស់ជាឯកតាអ្វី?',
      options: ['វិនាទី (seconds)', 'នាទី (minutes)', 'មីលីវិនាទី (milliseconds)', 'ម៉ោង (hours)'],
      correct: 2,
      explanation: '`Response Time` ត្រូវបានវាស់ជា Milliseconds (ms) ។'
    },
    {
      question: 'តើ `403 Forbidden` មានន័យដូចម្តេច?',
      options: [
        'Request ជោគជ័យ',
        'Client មិនមានសិទ្ធិចូលប្រើ Resource នោះទេ',
        'Resource មិនត្រូវបានរកឃើញ',
        'Server មានបញ្ហា'
      ],
      correct: 1,
      explanation: '`403 Forbidden` មានន័យថា Client មិនមានសិទ្ធិចូលប្រើ Resource នោះទេ ទោះបីជាមាន Authentication ក៏ដោយ។'
    },
    {
      question: 'តើ `204 No Content` ត្រូវបានប្រើនៅពេលណា?',
      options: [
        'នៅពេល Request ជោគជ័យ ហើយមាន Content ច្រើន',
        'នៅពេល Request ជោគជ័យ ប៉ុន្តែគ្មាន Content ត្រូវបញ្ជូនត្រឡប់មកវិញ',
        'នៅពេលមានកំហុស Client',
        'នៅពេល Server មានបញ្ហា'
      ],
      correct: 1,
      explanation: '`204 No Content` ត្រូវបានប្រើនៅពេល Request ជោគជ័យ ប៉ុន្តែគ្មាន Content ត្រូវបញ្ជូនត្រឡប់មកវិញ (ជាធម្មតាសម្រាប់ DELETE ឬ PUT) ។'
    },
    {
      question: 'តើ `Preview` View ក្នុង Response Body របស់ Postman ធ្វើអ្វី?',
      options: [
        'បង្ហាញទិន្នន័យជា JSON',
        'បង្ហាញ HTML Response ជា Web Page',
        'បង្ហាញទិន្នន័យជាទម្រង់ដើម',
        'បង្ហាញ Headers'
      ],
      correct: 1,
      explanation: '`Preview` View បង្ហាញ HTML Response ជា Web Page ។'
    },
    {
      question: 'តើ `405 Method Not Allowed` បង្ហាញពីបញ្ហាអ្វី?',
      options: [
        'Request មិនត្រឹមត្រូវ',
        'HTTP Method ដែលបានប្រើមិនត្រូវបានអនុញ្ញាតសម្រាប់ Resource នោះ',
        'Resource មិនត្រូវបានរកឃើញ',
        'Server មានបញ្ហា'
      ],
      correct: 1,
      explanation: '`405 Method Not Allowed` បង្ហាញថា HTTP Method ដែលបានប្រើមិនត្រូវបានអនុញ្ញាតសម្រាប់ Resource នោះទេ។'
    },
    {
      question: 'តើ `Response Headers` ផ្តល់ព័ត៌មានអ្វីខ្លះ?',
      options: [
        'ទិន្នន័យដែល Server បញ្ជូនត្រឡប់មកវិញ',
        'ព័ត៌មាន Meta អំពី Response ពី Server',
        'Query Parameters',
        'Request Body'
      ],
      correct: 1,
      explanation: '`Response Headers` ផ្តល់ព័ត៌មាន Meta អំពី Response ពី Server ។'
    },
    {
      question: 'តើ `100 Continue` Status Code ស្ថិតក្នុងប្រភេទណា?',
      options: ['Success', 'Client Error', 'Informational', 'Redirection'],
      correct: 2,
      explanation: '`100 Continue` ស្ថិតក្នុងប្រភេទ `1xx Informational` ។'
    },
    {
      question: 'តើ `429 Too Many Requests` មានន័យដូចម្តេច?',
      options: [
        'Server មានបញ្ហា',
        'Client បានបញ្ជូន Requests ច្រើនពេកក្នុងរយៈពេលកំណត់',
        'Resource មិនត្រូវបានរកឃើញ',
        'Request ជោគជ័យ'
      ],
      correct: 1,
      explanation: '`429 Too Many Requests` មានន័យថា Client បានបញ្ជូន Requests ច្រើនពេកក្នុងរយៈពេលកំណត់ (Rate Limiting) ។'
    },
    {
      question: 'តើ `Response Size` សំខាន់សម្រាប់អ្វី?',
      options: [
        'កំណត់ប្រភេទ Content',
        'កំណត់ Authentication',
        'កាត់បន្ថយ Bandwidth Usage',
        'បង្កើន Response Time'
      ],
      correct: 2,
      explanation: '`Response Size` សំខាន់សម្រាប់ការកាត់បន្ថយ Bandwidth Usage និងបង្កើនល្បឿន Load ។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: ការវិភាគ HTTP Responses និង Status Codes ក្នុង Postman

លំហាត់នេះនឹងណែនាំអ្នកឱ្យសាកល្បង និងវិភាគ HTTP Responses ផ្សេងៗគ្នា (ជោគជ័យ និងកំហុស) ក្នុង Postman ដោយប្រើ JSONPlaceholder API។

**លក្ខខណ្ឌជាមុន:**
* Postman Desktop App ឬ Web Client (ចូលគណនី Postman ឥតគិតថ្លៃ)។
* Workspace មួយនៅក្នុង Postman (ឧ. "My Response Analysis Lab")។

## 1. បង្កើត GET Request សម្រាប់ Response ជោគជ័យ
1. **បង្កើត Request**:
   * នៅក្នុង Workspace, ចុច **New > HTTP Request**.
   * **Name**: \`Get Post Success\`
   * **Collection**: បង្កើត Collection: \`Response Analysis Lab\`
2. **កំណត់ Request**:
   * **Method**: \`GET\`
   * **URL**: \`https://jsonplaceholder.typicode.com/posts/2\`
   * **Headers**: (មិនត្រូវការសម្រាប់ Request នេះ)
   * **Body**: ជ្រើសរើស "None"
3. **បញ្ជូន Request**:
   * ចុច **Send**.
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`200 OK\`
   * **Body**:
     * \`id\`: 2
     * \`userId\`: (ណាមួយ)
     * \`title\`: (ណាមួយ)
     * \`body\`: (ណាមួយ)
   * **Headers**: ពិនិត្យ:
     * \`Content-Type\`: \`application/json; charset=utf-8\`
     * \`Cache-Control\`: (ឧ. \`public, max-age=14400\`)
   * **Time & Size**: កត់ចំណាំ Response Time (ឧ. 50ms) និង Size (ឧ. 200B)
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`Response Analysis Lab\`.

## 2. បង្កើត GET Request សម្រាប់ Response កំហុស (404 Not Found)
1. **បង្កើត Request**:
   * ចុច **New > HTTP Request**.
   * **Name**: \`Get Nonexistent Resource\`
   * **Collection**: \`Response Analysis Lab\`
2. **កំណត់ Request**:
   * **Method**: \`GET\`
   * **URL**: \`https://jsonplaceholder.typicode.com/nonexistent-path-12345\`
   * **Headers**: (មិនត្រូវការសម្រាប់ Request នេះ)
   * **Body**: ជ្រើសរើស "None"
3. **បញ្ជូន Request**:
   * ចុច **Send**.
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`404 Not Found\`
   * **Body**: \`{}\` (ទទេ) ឬសារកំហុសខ្លី
   * **Headers**: ពិនិត្យ \`Content-Type\`
   * **Time & Size**: កត់ចំណាំ Response Time និង Size
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`Response Analysis Lab\`.

## 3. បង្កើត POST Request សម្រាប់ Response កំហុស (400 Bad Request)
1. **បង្កើត Request**:
   * ចុច **New > HTTP Request**.
   * **Name**: \`Post Invalid JSON\`
   * **Collection**: \`Response Analysis Lab\`
2. **កំណត់ Request**:
   * **Method**: \`POST\`
   * **URL**: \`https://jsonplaceholder.typicode.com/posts\`
   * **Headers**: នៅក្នុង Tab "Headers", បន្ថែម:
     * Key: \`Content-Type\`, Value: \`application/json\`
   * **Body**: នៅក្នុង Tab "Body", ជ្រើសរើស "raw" និង "JSON", បន្ទាប់មកបញ្ចូល JSON ដែលមិនត្រឹមត្រូវ:
     \`\`\`json
     {
       "title": "Invalid Post",
       "body": "This is an invalid post.
     \`\`\`
3. **បញ្ជូន Request**:
   * ចុច **Send**.
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`400 Bad Request\` ឬ \`500 Internal Server Error\` (អាស្រ័យលើ Server)
   * **Body**: សារកំហុសបញ្ជាក់ពី JSON មិនត្រឹមត្រូវ
   * **Headers**: ពិនិត្យ \`Content-Type\`
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`Response Analysis Lab\`.

## 4. រៀបចំ Collection
1. **រៀបចំ Collection**:
   * នៅក្នុង Sidebar, ចុច **Response Analysis Lab** Collection។
   * បន្ថែម Description: \`Collection for analyzing HTTP Responses with JSONPlaceholder API\`.
2. **ផ្ទៀងផ្ទាត់**:
   * បើក \`Get Post Success\`, \`Get Nonexistent Resource\`, និង \`Post Invalid JSON\` Requests ពី Collection។
   * ចុច **Send** ម្តងទៀតសម្រាប់ Request នីមួយៗ ដើម្បីផ្ទៀងផ្ទាត់ថា Response នៅតែត្រឹមត្រូវ។

> **គន្លឹះ:** ប្រើ Tab "Pretty" ដើម្បីមើល Response Body ឱ្យងាយស្រួលអាន។ កត់ចំណាំ Response Time និង Size ដើម្បីវាយតម្លៃ Performance។
`,
    solution: `
# ដំណោះស្រាយ: ការវិភាគ HTTP Responses និង Status Codes ក្នុង Postman

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## 1. GET Request សម្រាប់ Response ជោគជ័យ
* **Request**:
  * Name: \`Get Post Success\`
  * Collection: \`Response Analysis Lab\`
  * Method: \`GET\`
  * URL: \`https://jsonplaceholder.typicode.com/posts/2\`
  * Body: None
* **Response**:
  * Status: \`200 OK\`
  * Body (Example):
    \`\`\`json
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae..."
    }
    \`\`\`
  * Headers:
    \`\`\`text
    Content-Type: application/json; charset=utf-8
    Cache-Control: public, max-age=14400
    // ... other headers
    \`\`\`
  * Time & Size: ឧ. 50ms, 200B

## 2. GET Request សម្រាប់ Response កំហុស (404 Not Found)
* **Request**:
  * Name: \`Get Nonexistent Resource\`
  * Collection: \`Response Analysis Lab\`
  * Method: \`GET\`
  * URL: \`https://jsonplaceholder.typicode.com/nonexistent-path-12345\`
  * Body: None
* **Response**:
  * Status: \`404 Not Found\`
  * Body: \`{}\`
  * Headers:
    \`\`\`text
    Content-Type: application/json; charset=utf-8
    // ... other headers
    \`\`\`
  * Time & Size: ឧ. 50ms, 2B

## 3. POST Request សម្រាប់ Response កំហុស (400 Bad Request)
* **Request**:
  * Name: \`Post Invalid JSON\`
  * Collection: \`Response Analysis Lab\`
  * Method: \`POST\`
  * URL: \`https://jsonplaceholder.typicode.com/posts\`
  * Headers:
    \`\`\`text
    Content-Type: application/json
    \`\`\`
  * Body (raw - JSON):
    \`\`\`json
    {
      "title": "Invalid Post",
      "body": "This is an invalid post.
    \`\`\`
* **Response**:
  * Status: \`400 Bad Request\` ឬ \`500 Internal Server Error\`
  * Body: (សារកំហុស ឧ. \`{"error": "Invalid JSON"}\`)
  * Headers:
    \`\`\`text
    Content-Type: application/json; charset=utf-8
    // ... other headers
    \`\`\`

## 4. Collection
* **Collection**: \`Response Analysis Lab\`
* **Description**: \`Collection for analyzing HTTP Responses with JSONPlaceholder API\`
* **Requests**: \`Get Post Success\`, \`Get Nonexistent Resource\`, និង \`Post Invalid JSON\` រក្សាទុកនៅក្នុង Collection។
* **Verification**: Requests បញ្ជូនម្តងទៀត, Status Codes (\`200 OK\`, \`404 Not Found\`, \`400 Bad Request\` ឬ \`500 Internal Server Error\`) និង Response Bodies ត្រឹមត្រូវ។

## លទ្ធផលផ្ទៀងផ្ទាត់
* **GET Request (Success)**: \`Get Post Success\` បញ្ជូនជាមួយ \`200 OK\`, JSON មាន \`id: 2\`, និង Headers ត្រឹមត្រូវ។
* **GET Request (404)**: \`Get Nonexistent Resource\` បញ្ជូនជាមួយ \`404 Not Found\` និង Response Body ទទេ។
* **POST Request (Error)**: \`Post Invalid JSON\` បញ្ជូនជាមួយ \`400 Bad Request\` ឬ \`500 Internal Server Error\` និងសារកំហុស JSON។
* **Collection**: \`Response Analysis Lab\` រៀបចំជាមួយ Requests និង Description។

លំហាត់នេះបានបង្ហាញពីរបៀបវិភាគ HTTP Responses (ជោគជ័យ និងកំហុស) ក្នុង Postman ដោយប្រើ Collection ដើម្បីរៀបចំ និងផ្ទៀងផ្ទាត់ Status Codes, Response Body, Headers, Time, និង Size។
`
  }
};

export default PostmanLesson2_2Content;
