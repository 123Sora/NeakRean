import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson1_1Content: LessonContent = {
  title: 'អ្វីទៅជា Postman?',
  objectives: [
    'យល់ដឹងពីគោលបំណង និងសារៈសំខាន់របស់ Postman',
    'ស្គាល់ពីមុខងារសំខាន់ៗរបស់ Postman',
    'យល់ដឹងពីមូលហេតុដែល Postman ត្រូវបានប្រើប្រាស់ក្នុងការអភិវឌ្ឍន៍ API'
  ],
  content: `
# អ្វីទៅជា Postman? 🚀

Postman គឺជា Platform សហការសម្រាប់ API Development ដែលជួយសម្រួលដល់រាល់ជំហាននៃវដ្តជីវិត API ។ វាត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយដោយ Developers ដើម្បីបង្កើត, សាកល្បង, ឯកសារ, និងចែករំលែក APIs ។

## 1. គោលបំណង និងសារៈសំខាន់របស់ Postman 💡

* **គោលបំណង:** Postman ត្រូវបានបង្កើតឡើងដើម្បីធ្វើឱ្យការធ្វើការជាមួយ APIs កាន់តែងាយស្រួល និងមានប្រសិទ្ធភាព។ មិនថាអ្នកជា Developer ដែលកំពុងសាងសង់ API, ជា Tester ដែលកំពុងផ្ទៀងផ្ទាត់ API, ឬជា User ដែលកំពុងប្រើប្រាស់ API នោះទេ Postman អាចជួយអ្នកបាន។
* **សារៈសំខាន់:**
    * **បង្កើនល្បឿន Development:** អាចបង្កើត និងសាកល្បង API Requests បានយ៉ាងរហ័ស។
    * **ភាពងាយស្រួលប្រើ:** មាន User Interface ដែលងាយស្រួលយល់ និងប្រើប្រាស់។
    * **សហការ:** អនុញ្ញាតឱ្យក្រុមការងារសហការគ្នាក្នុងការអភិវឌ្ឍន៍ API ។
    * **ការធ្វើតេស្តស្វ័យប្រវត្តិកម្ម:** អាចសរសេរ Scripts ដើម្បីធ្វើតេស្ត API ដោយស្វ័យប្រវត្តិ។

## 2. មុខងារសំខាន់ៗរបស់ Postman 🛠️

Postman ផ្តល់ជូននូវមុខងារជាច្រើនដែលធ្វើឱ្យវាជា Tool ដ៏ពេញនិយម៖

* **Request Builder:** បង្កើត និងបញ្ជូន HTTP Requests (GET, POST, PUT, DELETE ។ល។) ។
* **Collections:** រៀបចំ Requests ទៅជា Folder (Collections) ដើម្បីងាយស្រួលគ្រប់គ្រង និងចែករំលែក។
* **Environments:** គ្រប់គ្រង Variables សម្រាប់ Environments ផ្សេងៗគ្នា (Development, Staging, Production) ។
* **Pre-request Scripts:** សរសេរ JavaScript Code ដែលដំណើរការមុនពេល Request ត្រូវបានបញ្ជូន។
* **Test Scripts:** សរសេរ JavaScript Code ដើម្បីផ្ទៀងផ្ទាត់ Responses របស់ API ។
* **API Documentation:** បង្កើតឯកសារ API ដោយស្វ័យប្រវត្តិពី Collections ។
* **Mock Servers:** បង្កើត Mock APIs ដើម្បីធ្វើតេស្ត Frontend ដោយមិនចាំបាច់រង់ចាំ Backend ។
* **Monitors:** តាមដាន Performance និង Availability របស់ APIs ។

## 3. ហេតុអ្វីបានជា Postman ត្រូវបានប្រើប្រាស់ក្នុងការអភិវឌ្ឍន៍ API? 🎯

* **ភាពងាយស្រួល:** មិនចាំបាច់សរសេរ Code ច្រើនដើម្បីធ្វើការជាមួយ API ទេ។
* **ភាពបត់បែន:** អាចធ្វើការជាមួយ API ប្រភេទណាក៏បាន (REST, SOAP, GraphQL) ។
* **ការធ្វើតេស្តដ៏ទូលំទូលាយ:** អាចធ្វើតេស្ត Unit Testing, Integration Testing, និង Performance Testing ។
* **ការសហការក្រុម:** ផ្តល់នូវ Workspace ដែលអនុញ្ញាតឱ្យក្រុមធ្វើការជាមួយគ្នាលើ API Projects ។
* **ការគ្រប់គ្រង Version:** អាចគ្រប់គ្រង Version នៃ Collections និង Environments ។
`,
  examples: [
    `
### ឧទាហរណ៍: ការបង្កើត Request សាមញ្ញក្នុង Postman
នេះជាឧទាហរណ៍នៃរបៀបដែល Request មួយមើលទៅក្នុង Postman ។
\`\`\`text
GET https://jsonplaceholder.typicode.com/posts/1

Headers:
  Content-Type: application/json

Response:
  Status: 200 OK
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
\`\`\`
**ការពន្យល់:**
- **GET:** ជា HTTP Method ដើម្បីទាញយកទិន្នន័យ។
- **URL:** ជា Endpoint របស់ API ។
- **Headers:** ព័ត៌មានបន្ថែមដែលបញ្ជូនជាមួយ Request ។
- **Response:** ទិន្នន័យដែលទទួលបានពី Server ។
`
  ],
  quiz: [
    {
      question: 'តើ Postman គឺជា Platform សម្រាប់អ្វី?',
      options: ['Database Management', 'Frontend Development', 'API Development', 'Mobile App Development'],
      correct: 2,
      explanation: 'Postman គឺជា Platform សហការសម្រាប់ API Development ។'
    },
    {
      question: 'តើមុខងារ `Collections` ក្នុង Postman ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីសរសេរ Test Scripts',
        'ដើម្បីគ្រប់គ្រង Variables',
        'ដើម្បីរៀបចំ Requests ទៅជា Folder',
        'ដើម្បីបង្កើត Mock Servers'
      ],
      correct: 2,
      explanation: '`Collections` ត្រូវបានប្រើដើម្បីរៀបចំ Requests ទៅជា Folder ដើម្បីងាយស្រួលគ្រប់គ្រង និងចែករំលែក។'
    },
    {
      question: 'តើ `Pre-request Scripts` ដំណើរការនៅពេលណា?',
      options: [
        'បន្ទាប់ពី Request ត្រូវបានបញ្ជូន',
        'មុនពេល Request ត្រូវបានបញ្ជូន',
        'នៅពេល Response ត្រូវបានទទួល',
        'នៅពេល Postman ចាប់ផ្តើម'
      ],
      correct: 1,
      explanation: '`Pre-request Scripts` ដំណើរការមុនពេល Request ត្រូវបានបញ្ជូន។'
    },
    {
      question: 'តើ HTTP Method មួយណាដែលត្រូវបានប្រើដើម្បីទាញយកទិន្នន័យពី Server?',
      options: ['POST', 'PUT', 'DELETE', 'GET'],
      correct: 3,
      explanation: 'HTTP Method `GET` ត្រូវបានប្រើដើម្បីទាញយកទិន្នន័យពី Server ។'
    },
    {
      question: 'តើ `Environments` ក្នុង Postman ជួយអ្វីខ្លះ?',
      options: [
        'ជួយសរសេរ Documentation',
        'ជួយគ្រប់គ្រង Variables សម្រាប់ Environments ផ្សេងៗគ្នា',
        'ជួយបង្កើត Mock APIs',
        'ជួយតាមដាន Performance APIs'
      ],
      correct: 1,
      explanation: '`Environments` ជួយគ្រប់គ្រង Variables សម្រាប់ Environments ផ្សេងៗគ្នា (Development, Staging, Production) ។'
    },
    {
      question: 'តើ `Test Scripts` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីរៀបចំ Requests',
        'ដើម្បីផ្ទៀងផ្ទាត់ Responses របស់ API',
        'ដើម្បីបង្កើត Requests',
        'ដើម្បីគ្រប់គ្រង Headers'
      ],
      correct: 1,
      explanation: '`Test Scripts` ត្រូវបានប្រើដើម្បីសរសេរ JavaScript Code ដើម្បីផ្ទៀងផ្ទាត់ Responses របស់ API ។'
    },
    {
      question: 'តើ Postman អាចធ្វើការជាមួយ API ប្រភេទណាខ្លះ?',
      options: ['តែ REST API ប៉ុណ្ណោះ', 'តែ SOAP API ប៉ុណ្ណោះ', 'តែ GraphQL API ប៉ុណ្ណោះ', 'REST, SOAP, GraphQL និងច្រើនទៀត'],
      correct: 3,
      explanation: 'Postman អាចធ្វើការជាមួយ API ប្រភេទណាក៏បានដូចជា REST, SOAP, GraphQL និងច្រើនទៀត។'
    },
    {
      question: 'តើ `Mock Servers` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បី Deploy APIs ទៅ Production',
        'ដើម្បីបង្កើត APIs ក្លែងក្លាយសម្រាប់ធ្វើតេស្ត Frontend',
        'ដើម្បីតាមដាន API Performance',
        'ដើម្បីសរសេរ Test Scripts'
      ],
      correct: 1,
      explanation: '`Mock Servers` ត្រូវបានប្រើដើម្បីបង្កើត APIs ក្លែងក្លាយសម្រាប់ធ្វើតេស្ត Frontend ដោយមិនចាំបាច់រង់ចាំ Backend ។'
    },
    {
      question: 'តើ `API Documentation` ក្នុង Postman ត្រូវបានបង្កើតឡើងដោយរបៀបណា?',
      options: [
        'ដោយការសរសេរដោយដៃទាំងស្រុង',
        'ដោយស្វ័យប្រវត្តិពី Collections',
        'ដោយប្រើ Third-party Tools',
        'ដោយការប្រើប្រាស់ JavaScript'
      ],
      correct: 1,
      explanation: '`API Documentation` ក្នុង Postman ត្រូវបានបង្កើតដោយស្វ័យប្រវត្តិពី Collections ។'
    },
    {
      question: 'តើ `Monitors` ក្នុង Postman ជួយអ្វីខ្លះ?',
      options: [
        'ជួយបង្កើត Requests',
        'ជួយតាមដាន Performance និង Availability របស់ APIs',
        'ជួយសរសេរ Test Scripts',
        'ជួយគ្រប់គ្រង Environments'
      ],
      correct: 1,
      explanation: '`Monitors` ជួយតាបគាន Performance និង Availability របស់ APIs ។'
    },
    {
      question: 'តើ Postman គឺជា Tool ប្រភេទណា?',
      options: ['Command Line Interface (CLI)', 'Graphical User Interface (GUI)', 'Text Editor', 'Web Browser'],
      correct: 1,
      explanation: 'Postman គឺជា Graphical User Interface (GUI) Tool ។'
    },
    {
      question: 'តើ `Request Builder` ក្នុង Postman ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីមើល Responses',
        'ដើម្បីបង្កើត និងបញ្ជូន HTTP Requests',
        'ដើម្បីរៀបចំ Collections',
        'ដើម្បីសរសេរ Test Scripts'
      ],
      correct: 1,
      explanation: '`Request Builder` ត្រូវបានប្រើដើម្បីបង្កើត និងបញ្ជូន HTTP Requests ។'
    },
    {
      question: 'តើ `HTTP Methods` ដូចជា GET, POST, PUT, DELETE តំណាងឱ្យអ្វី?',
      options: [
        'ប្រភេទទិន្នន័យ',
        'ប្រតិបត្តិការដែលត្រូវធ្វើលើ Resource',
        'Headers របស់ Request',
        'Status Codes របស់ Response'
      ],
      correct: 1,
      explanation: 'HTTP Methods តំណាងឱ្យប្រតិបត្តិការដែលត្រូវធ្វើលើ Resource (ឧទាហរណ៍ GET សម្រាប់ទាញយក, POST សម្រាប់បង្កើត) ។'
    },
    {
      question: 'តើការសហការក្រុមគឺជាគុណសម្បត្តិមួយរបស់ Postman ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែសម្រាប់ Paid Version', 'បានតែសម្រាប់ Local Projects'],
      correct: 0,
      explanation: 'បាទ/ចាស Postman ផ្តល់នូវ Workspace ដែលអនុញ្ញាតឱ្យក្រុមធ្វើការជាមួយគ្នាលើ API Projects ។'
    },
    {
      question: 'តើ `Status Code` 200 OK នៅក្នុង Response មានន័យដូចម្តេច?',
      options: [
        'មានកំហុស Server',
        'Request មិនត្រឹមត្រូវ',
        'Request ទទួលបានជោគជ័យ',
        'Resource មិនត្រូវបានរកឃើញ'
      ],
      correct: 2,
      explanation: 'Status Code 200 OK មានន័យថា Request ទទួលបានជោគជ័យ។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: បង្កើត និងសាកល្បង GET Request ក្នុង Postman

លំហាត់នេះនឹងណែនាំអ្នកឱ្យបង្កើត Request សាមញ្ញមួយក្នុង Postman ដើម្បីសាកល្បង API Endpoint។

**លក្ខខណ្ឌជាមុន:**
* Postman Desktop App ឬ Postman Web Client (ចូលគណនី Postman ឥតគិតថ្លៃ)។

## 1. បើក Postman និងបង្កើត Workspace
1. **បើក Postman**:
   * បើក Postman Desktop App ឬចូលទៅ **app.postman.co**។
2. **បង្កើត Workspace**:
   * ចុច **Workspaces > Create Workspace**.
   * **Name**: \`My API Testing Workspace\`
   * **Visibility**: Personal
   * ចុច **Create Workspace**.

## 2. បង្កើត GET Request
1. **បង្កើត Request ៖**
   * នៅក្នុង Workspace, ចុច **New > HTTP Request**.
   * **Name**: \`Get Todo Item\`
   * **Collection**: បង្កើត Collection ៖ \`Todo API Tests\`
2. **កំណត់ Request**:
   * **Method**: ជ្រើស \`GET\`
   * **URL**: \`https://jsonplaceholder.typicode.com/todos/1\`
   * **Headers**: បន្ថែម Header:
     * Key: \`Content-Type\`
     * Value: \`application/json\`
3. **បញ្ជូន Request**:
   * ចុច **Send**.
4. **ផ្ទៀងផ្ទាត់ Response**:
   * ពិនិត្យ **Status Code**: គួរតែជា \`200 OK\`.
   * ពិនិត្យ **Body**:
     * \`userId\`: 1
     * \`id\`: 1
     * \`title\`: \`delectus aut autem\`
     * \`completed\`: false
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`Todo API Tests\`.

## 3. បង្កើត Collection និងរៀបចំ Request
1. **រៀបចំ Collection**:
   * នៅក្នុង Sidebar, ចុច **Todo API Tests** Collection។
   * បន្ថែម Description: \`Collection for testing Todo API endpoints\`.
2. **ផ្ទៀងផ្ទាត់**:
   * បើក \`Get Todo Item\` Request ពី Collection។
   * ចុច **Send** ម្តងទៀត ដើម្បីផ្ទៀងផ្ទាត់ថា Response នៅតែជា \`200 OK\` និងមាន Body ដូចរំពឹងទុក។

> **គន្លឹះ:** ពិនិត្យ Status Code និង Response Body ដើម្បីធានាថា Request ដំណើរការត្រឹមត្រូវ។ ប្រើ Collections ដើម្បីរៀបចំ Requests សម្រាប់ការប្រើប្រាស់នាពេលអនាគត។
`,
    solution: `
# ដំណោះស្រាយ: បង្កើត និងសាកល្បង GET Request ក្នុង Postman

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## 1. Workspace
* **Name**: \`My API Testing Workspace\`
* **Visibility**: Personal
* **Status**: Workspace បង្កើតជោគជ័យនៅ Postman។

## 2. GET Request
* **Request**:
  * Name: \`Get Todo Item\`
  * Collection: \`Todo API Tests\`
  * Method: \`GET\`
  * URL: \`https://jsonplaceholder.typicode.com/todos/1\`
  * Headers:
    \`\`\`text
    Content-Type: application/json
    \`\`\`
* **Response**:
  * Status: \`200 OK\`
  * Body:
    \`\`\`json
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }
    \`\`\`

## 3. Collection
* **Collection**: \`Todo API Tests\`
* **Description**: \`Collection for testing Todo API endpoints\`
* **Request**: \`Get Todo Item\` រក្សាទុកនៅក្នុង Collection។
* **Verification**: Request បញ្ជូនម្តងទៀត, Status Code \`200 OK\`, Body ដូចរំពឹងទុក។

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Workspace**: បង្កើតជោគជ័យ។
* **Request**: \`Get Todo Item\` បញ្ជូនជាមួយ \`200 OK\` និង Response Body ត្រឹមត្រូវ។
* **Collection**: \`Todo API Tests\` រៀបចំជាមួយ Request និង Description។

លំហាត់នេះបានបង្ហាញពីរបៀបបង្កើត និងសាកល្បង GET Request ក្នុង Postman ដោយប្រើ Collection ដើម្បីរៀបចំ។
`
  }
};

export default PostmanLesson1_1Content;
