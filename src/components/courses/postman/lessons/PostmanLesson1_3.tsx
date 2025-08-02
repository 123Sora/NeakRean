import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson1_3Content: LessonContent = {
  title: 'មូលដ្ឋានគ្រឹះនៃ HTTP Requests',
  objectives: [
    'យល់ដឹងពី HTTP Methods សំខាន់ៗ (GET, POST, PUT, DELETE)',
    'របៀបកំណត់ URL និង Parameters (Query Params, Path Variables)',
    'របៀបកំណត់ Headers សម្រាប់ Requests',
    'របៀបកំណត់ Request Body សម្រាប់ Requests (JSON, Form Data)',
    'ការយល់ដឹង និងការបកស្រាយ Response (Status Codes, Body, Headers)'
  ],
  content: `
# មូលដ្ឋានគ្រឹះនៃ HTTP Requests 🌐📩

HTTP Request គឺជាវិធីដែល Client (ដូចជា Web Browser ឬ Postman) ទាក់ទងជាមួយ Server ដើម្បីទាញយក ឬបញ្ជូនទិន្នន័យ។ ការយល់ដឹងពីរបៀបបង្កើត និងបកស្រាយ Requests ទាំងនេះគឺសំខាន់ណាស់ក្នុងការធ្វើការជាមួយ APIs ។

## 1. យល់ដឹងពី HTTP Methods សំខាន់ៗ 🚀

HTTP Methods (ឬ Verbs) បញ្ជាក់ពីប្រភេទនៃប្រតិបត្តិការដែលអ្នកចង់ធ្វើលើ Resource មួយ។

* **\`GET\`:** ប្រើដើម្បី **ទាញយក (Retrieve)** ទិន្នន័យពី Server ។ ឧទាហរណ៍៖ ទាញយកបញ្ជីផលិតផល។
    * មិនមាន Request Body ទេ។
    * អាចមាន Query Parameters ។
* **\`POST\`:** ប្រើដើម្បី **បង្កើត (Create)** Resource ថ្មីនៅលើ Server ។ ឧទាហរណ៍៖ បង្កើត User ថ្មី។
    * មាន Request Body ដែលផ្ទុកទិន្នន័យដែលត្រូវបង្កើត។
* **\`PUT\`:** ប្រើដើម្បី **ធ្វើបច្ចុប្បន្នភាព (Update)** Resource ដែលមានស្រាប់នៅលើ Server ។ ឧទាហរណ៍៖ ធ្វើបច្ចុប្បន្នភាពព័ត៌មាន User ។
    * មាន Request Body ដែលផ្ទុកទិន្នន័យដែលត្រូវធ្វើបច្ចុប្បន្នភាព។
    * ជាធម្មតាធ្វើបច្ចុប្បន្នភាព Resource ទាំងមូល។
* **\`PATCH\`:** ប្រើដើម្បី **ធ្វើបច្ចុប្បន្នភាពដោយផ្នែក (Partially Update)** Resource ដែលមានស្រាប់នៅលើ Server ។ ឧទាហរណ៍៖ ធ្វើបច្ចុប្បន្នភាពតែ Email របស់ User ។
    * មាន Request Body ដែលផ្ទុកតែទិន្នន័យដែលត្រូវធ្វើបច្ចុប្បន្នភាព។
* **\`DELETE\`:** ប្រើដើម្បី **លុប (Delete)** Resource ដែលមានស្រាប់នៅលើ Server ។ ឧទាហរណ៍៖ លុប User ។
    * មិនមាន Request Body ទេ។

## 2. របៀបកំណត់ URL និង Parameters 🔗

URL (Uniform Resource Locator) គឺជាអាសយដ្ឋានរបស់ Resource ដែលអ្នកចង់ទាក់ទង។

* **Path Variables (Path Parameters):** ជាផ្នែកមួយនៃ Path របស់ URL ដែលកំណត់ Resource ជាក់លាក់។
    * ឧទាហរណ៍៖ \`https://api.example.com/users/123\` (\`123\` គឺជា Path Variable) ។
* **Query Parameters:** ប្រើដើម្បី Filter, Sort, ឬ Paginate ទិន្នន័យ។ ពួកវាត្រូវបានបន្ថែមបន្ទាប់ពី \`?\` នៅក្នុង URL ហើយបំបែកដោយ \`&\` ។
    * ឧទាហរណ៍៖ \`https://api.example.com/products?category=electronics&limit=10\` (\`category\` និង \`limit\` គឺជា Query Parameters) ។

**ក្នុង Postman:**
* អ្នកបញ្ចូល URL ពេញលេញនៅក្នុង Field "Enter request URL" ។
* សម្រាប់ Query Parameters អ្នកអាចបញ្ចូលវាដោយផ្ទាល់ក្នុង URL ឬប្រើ Tab "Params" ។

## 3. របៀបកំណត់ Headers 🏷️

Headers គឺជាគូ Key-Value ដែលផ្តល់ព័ត៌មានបន្ថែមអំពី Request ឬ Response ។

* **Common Headers:**
    * \`Content-Type\`: បញ្ជាក់ប្រភេទ Media Type នៃ Request Body (ឧទាហរណ៍ \`application/json\`, \`application/x-www-form-urlencoded\`) ។
    * \`Authorization\`: ប្រើសម្រាប់ Authentication (ឧទាហរណ៍ Bearer Token) ។
    * \`Accept\`: បញ្ជាក់ប្រភេទ Media Type ដែល Client អាចទទួលយកបានក្នុង Response ។

**ក្នុង Postman:**
* ប្រើ Tab "Headers" ដើម្បីបន្ថែម ឬកែសម្រួល Headers ។

## 4. របៀបកំណត់ Request Body 📦

Request Body ផ្ទុកទិន្នន័យដែលអ្នកចង់បញ្ជូនទៅ Server សម្រាប់ Methods ដូចជា \`POST\`, \`PUT\`, \`PATCH\` ។

* **None:** សម្រាប់ Requests ដែលមិនត្រូវការ Body (ឧទាហរណ៍ GET, DELETE) ។
* **form-data:** សម្រាប់បញ្ជូនទិន្នន័យទម្រង់ រួមទាំង Files (ដូចជា \`<form enctype="multipart/form-data">\`) ។
* **x-www-form-urlencoded:** សម្រាប់បញ្ជូនទិន្នន័យទម្រង់សាមញ្ញ (ដូចជា \`<form>\` លំនាំដើម) ។
* **raw:** សម្រាប់បញ្ជូនទិន្នន័យក្នុងទម្រង់ Raw ដូចជា JSON, XML, Text ។
    * **JSON (application/json):** ត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់ API Communication ។ ត្រូវប្រាកដថាជ្រើសរើស "JSON" នៅក្នុង Dropdown បន្ទាប់ពី "raw" ។

**ក្នុង Postman:**
* ជ្រើសរើស Tab "Body" ហើយបន្ទាប់មកជ្រើសរើសប្រភេទ Body ដែលអ្នកចង់បាន។

## 5. ការយល់ដឹង និងការបកស្រាយ Response ✅❌

បន្ទាប់ពីបញ្ជូន Request Server នឹងបញ្ជូន Response ត្រឡប់មកវិញ។

* **Status Codes:** លេខ 3 ខ្ទង់ដែលបញ្ជាក់ពីលទ្ធផលនៃ Request ។
    * **\`2xx Success\`:** Request ទទួលបានជោគជ័យ។
        * \`200 OK\`: Request ជោគជ័យ។
        * \`201 Created\`: Resource ថ្មីត្រូវបានបង្កើតដោយជោគជ័យ (សម្រាប់ POST) ។
        * \`204 No Content\`: Request ជោគជ័យ ប៉ុន្តែគ្មាន Content ត្រូវបញ្ជូនត្រឡប់មកវិញ (សម្រាប់ DELETE) ។
    * **\`4xx Client Error\`:** មានបញ្ហាពី Client Side ។
        * \`400 Bad Request\`: Request មិនត្រឹមត្រូវ។
        * \`401 Unauthorized\`: មិនមាន Authentication ។
        * \`403 Forbidden\`: មិនមានសិទ្ធិចូលប្រើ Resource ។
        * \`404 Not Found\`: Resource មិនត្រូវបានរកឃើញ។
    * **\`5xx Server Error\`:** មានបញ្ហាពី Server Side ។
        * \`500 Internal Server Error\`: Server មានបញ្ហា។
* **Response Body:** ទិន្នន័យដែល Server បញ្ជូនត្រឡប់មកវិញ (ជាធម្មតា JSON, XML, HTML) ។
* **Response Headers:** ព័ត៌មានបន្ថែមអំពី Response ពី Server ។

**ក្នុង Postman:**
* Response នឹងបង្ហាញនៅផ្នែកខាងក្រោមនៃ Interface Postman បន្ទាប់ពីអ្នកចុច "Send" ។ អ្នកអាចមើល Status, Time, Size, Body, និង Headers ។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: GET Request ជាមួយ Query Parameters
ទាញយក Comments ទាំងអស់ពី Post ID 1 ។
\`\`\`text
GET https://jsonplaceholder.typicode.com/comments?postId=1

Headers:
  (No custom headers needed for this example)

Response (Example):
Status: 200 OK
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi..."
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil..."
  }
]
\`\`\`

### ឧទាហរណ៍ ២: POST Request ជាមួយ JSON Body
បង្កើត Post ថ្មីមួយ។
\`\`\`text
POST https://jsonplaceholder.typicode.com/posts

Headers:
  Content-Type: application/json

Body (raw - JSON):
{
  "title": "My New Post",
  "body": "This is the content of my new post.",
  "userId": 1
}

Response (Example):
Status: 201 Created
{
  "title": "My New Post",
  "body": "This is the content of my new post.",
  "userId": 1,
  "id": 101
}
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ HTTP Method មួយណាដែលត្រូវបានប្រើដើម្បីបង្កើត Resource ថ្មីនៅលើ Server?',
      options: ['GET', 'PUT', 'DELETE', 'POST'],
      correct: 3,
      explanation: 'HTTP Method `POST` ត្រូវបានប្រើដើម្បីបង្កើត Resource ថ្មីនៅលើ Server ។'
    },
    {
      question: 'តើ `Query Parameters` ត្រូវបានបន្ថែមនៅផ្នែកណាខ្លះនៃ URL?',
      options: [
        'នៅដើម URL',
        'បន្ទាប់ពី `?` នៅក្នុង URL',
        'នៅក្នុង Headers',
        'នៅក្នុង Request Body'
      ],
      correct: 1,
      explanation: '`Query Parameters` ត្រូវបានបន្ថែមបន្ទាប់ពី `?` នៅក្នុង URL ។'
    },
    {
      question: 'តើ `Content-Type` Header ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'បញ្ជាក់ប្រភេទ Media Type នៃ Response Body',
        'បញ្ជាក់ប្រភេទ Media Type នៃ Request Body',
        'បញ្ជាក់ Authentication Token',
        'បញ្ជាក់ URL'
      ],
      correct: 1,
      explanation: '`Content-Type` Header បញ្ជាក់ប្រភេទ Media Type នៃ Request Body ។'
    },
    {
      question: 'តើ `raw` Request Body Type ត្រូវបានប្រើសម្រាប់បញ្ជូនទិន្នន័យប្រភេទណា?',
      options: ['Files', 'Form Data', 'JSON, XML, Text', 'Binary Data'],
      correct: 2,
      explanation: '`raw` Request Body Type ត្រូវបានប្រើសម្រាប់បញ្ជូនទិន្នន័យក្នុងទម្រង់ Raw ដូចជា JSON, XML, Text ។'
    },
    {
      question: 'តើ `Status Code` 404 Not Found មានន័យដូចម្តេច?',
      options: [
        'Request ជោគជ័យ',
        'Server មានបញ្ហា',
        'Resource មិនត្រូវបានរកឃើញ',
        'មិនមាន Authentication'
      ],
      correct: 2,
      explanation: '`Status Code` 404 Not Found មានន័យថា Resource មិនត្រូវបានរកឃើញនៅលើ Server ។'
    },
    {
      question: 'តើ HTTP Method មួយណាដែលជាធម្មតាមិនមាន Request Body?',
      options: ['POST', 'PUT', 'PATCH', 'GET'],
      correct: 3,
      explanation: 'HTTP Method `GET` ជាធម្មតាមិនមាន Request Body ទេ។'
    },
    {
      question: 'តើ `Path Variables` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បី Filter ទិន្នន័យ',
        'ដើម្បីកំណត់ Resource ជាក់លាក់មួយនៅក្នុង URL',
        'ដើម្បី Sort ទិន្នន័យ',
        'ដើម្បី Paginate ទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`Path Variables` គឺជាផ្នែកមួយនៃ Path របស់ URL ដែលកំណត់ Resource ជាក់លាក់។'
    },
    {
      question: 'តើ `Authorization` Header ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'បញ្ជាក់ប្រភេទ Content',
        'បញ្ជាក់ Encoding',
        'ប្រើសម្រាប់ Authentication',
        'បញ្ជាក់ Version របស់ API'
      ],
      correct: 2,
      explanation: '`Authorization` Header ត្រូវបានប្រើសម្រាប់ Authentication (ឧទាហរណ៍ Bearer Token) ។'
    },
    {
      question: 'តើ `form-data` Request Body Type ត្រូវបានប្រើសម្រាប់បញ្ជូនទិន្នន័យប្រភេទណា?',
      options: ['JSON', 'XML', 'Files និង Form Data', 'Text'],
      correct: 2,
      explanation: '`form-data` Request Body Type ត្រូវបានប្រើសម្រាប់បញ្ជូនទិន្នន័យទម្រង់ រួមទាំង Files ។'
    },
    {
      question: 'តើ `Status Code` 201 Created ត្រូវបានប្រើនៅពេលណា?',
      options: [
        'នៅពេល Request ជោគជ័យ',
        'នៅពេល Resource ថ្មីត្រូវបានបង្កើតដោយជោគជ័យ',
        'នៅពេលមានកំហុស Client',
        'នៅពេល Server មានបញ្ហា'
      ],
      correct: 1,
      explanation: '`Status Code` 201 Created ត្រូវបានប្រើនៅពេល Resource ថ្មីត្រូវបានបង្កើតដោយជោគជ័យ (ជាធម្មតាសម្រាប់ POST Request) ។'
    },
    {
      question: 'តើ `PUT` Method ខុសពី `PATCH` Method យ៉ាងដូចម្តេច?',
      options: [
        '`PUT` សម្រាប់បង្កើត, `PATCH` សម្រាប់ Update',
        '`PUT` សម្រាប់ Update ទាំងមូល, `PATCH` សម្រាប់ Update ដោយផ្នែក',
        '`PUT` សម្រាប់ទាញយក, `PATCH` សម្រាប់លុប',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 1,
      explanation: '`PUT` ប្រើដើម្បីធ្វើបច្ចុប្បន្នភាព Resource ទាំងមូល ខណៈ `PATCH` ប្រើដើម្បីធ្វើបច្ចុប្បន្នភាពដោយផ្នែក។'
    },
    {
      question: 'តើ `Response Body` គឺជាអ្វី?',
      options: [
        'ព័ត៌មានបន្ថែមអំពី Request',
        'ទិន្នន័យដែល Server បញ្ជូនត្រឡប់មកវិញ',
        'Status Code របស់ Response',
        'ពេលវេលាដែល Request ចំណាយ'
      ],
      correct: 1,
      explanation: '`Response Body` គឺជាទិន្នន័យដែល Server បញ្ជូនត្រឡប់មកវិញ (ជាធម្មតា JSON, XML, HTML) ។'
    },
    {
      question: 'តើ `Status Code` 500 Internal Server Error មានន័យដូចម្តេច?',
      options: [
        'Request ជោគជ័យ',
        'មានបញ្ហាពី Client Side',
        'Server មានបញ្ហា',
        'Resource មិនត្រូវបានរកឃើញ'
      ],
      correct: 2,
      explanation: '`Status Code` 500 Internal Server Error មានន័យថា Server មានបញ្ហា�।'
    },
    {
      question: 'តើ `x-www-form-urlencoded` Request Body Type ត្រូវបានប្រើសម្រាប់បញ្ជូនទិន្នន័យប្រភេទណា?',
      options: ['JSON', 'Files', 'Simple Form Data', 'XML'],
      correct: 2,
      explanation: '`x-www-form-urlencoded` ត្រូវបានប្រើសម្រាប់បញ្ជូនទិន្នន័យទម្រង់សាមញ្ញ ដូចជាទិន្នន័យពី HTML `<form>` លំនាំដើម។'
    },
    {
      question: 'តើ HTTP Request គឺជាអ្វី?',
      options: [
        'ភាសាសរសេរកម្មវិធី',
        'វិធីដែល Client ទាក់ទងជាមួយ Server',
        'មូលដ្ឋានទិន្នន័យ',
        'Web Browser'
      ],
      correct: 1,
      explanation: 'HTTP Request គឺជាវិធីដែល Client ទាក់ទងជាមួយ Server ដើម្បីទាញយក ឬបញ្ជូនទិន្នន័យ។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: បង្កើត HTTP Requests ក្នុង Postman

លំហាត់នេះនឹងណែនាំអ្នកឱ្យបង្កើត HTTP Requests ផ្សេងៗគ្នាក្នុង Postman ដោយប្រើ API សាកល្បង។

**លក្ខខណ្ឌជាមុន:**
* Postman Desktop App ឬ Web Client (ចូលគណនី Postman ឥតគិតថ្លៃ)។
* Workspace មួយនៅក្នុង Postman (ឧ. "My First Postman Lab")។

## 1. បង្កើត GET Request ជាមួយ Query Parameter
1. **បង្កើត Request**:
   * នៅក្នុង Workspace, ចុច **New > HTTP Request**.
   * **Name**: \`Get Comments by Post ID\`
   * **Collection**: បង្កើត Collection ៖ \`API Testing Lab\`
2. **កំណត់ Request**:
   * **Method**: \`GET\`
   * **URL**: \`https://jsonplaceholder.typicode.com/comments?postId=1\`
   * **Params**: នៅក្នុង Tab "Params", បញ្ចូល:
     * Key: \`postId\`, Value: \`1\`
   * **Headers**: (មិនត្រូវការសម្រាប់ Request នេះ)
3. **បញ្ជូន Request**:
   * ចុច **Send**.
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`200 OK\`
   * **Body**: Array នៃ Comments, ឧទាហរណ៍:
     * \`postId\`: 1
     * \`id\`: 1
     * \`name\`: "id labore ex et quam laborum"
     * \`email\`: "Eliseo@gardner.biz"
     * \`body\`: "laudantium enim quasi..."
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`API Testing Lab\`.

## 2. បង្កើត POST Request ជាមួយ JSON Body
1. **បង្កើត Request**:
   * នៅក្នុង Workspace, ចុច **New > HTTP Request**.
   * **Name**: \`Create New Post\`
   * **Collection**: \`API Testing Lab\`
2. **កំណត់ Request**:
   * **Method**: \`POST\`
   * **URL**: \`https://jsonplaceholder.typicode.com/posts\`
   * **Headers**: នៅក្នុង Tab "Headers", បន្ថែម:
     * Key: \`Content-Type\`, Value: \`application/json\`
   * **Body**: នៅក្នុង Tab "Body", ជ្រើសរើស "raw" និង "JSON", បន្ទាប់មកបញ្ចូល:
     \`\`\`json
     {
       "title": "My First Post from Postman",
       "body": "This is a test post created via Postman.",
       "userId": 1
     }
     \`\`\`
3. **បញ្ជូន Request**:
   * ចុច **Send**.
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`201 Created\`
   * **Body**:
     * \`title\`: "My First Post from Postman"
     * \`body\`: "This is a test post created via Postman."
     * \`userId\`: 1
     * \`id\`: (ឧ. 101, ឬ ID ថ្មីណាមួយ)
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`API Testing Lab\`.

## 3. រៀបចំ Collection
1. **រៀបចំ Collection**:
   * នៅក្នុង Sidebar, ចុច **API Testing Lab** Collection។
   * បន្ថែម Description: \`Collection for testing HTTP Requests with JSONPlaceholder API\`.
2. **ផ្ទៀងផ្ទាត់**:
   * បើក \`Get Comments by Post ID\` និង \`Create New Post\` Requests ពី Collection។
   * ចុច **Send** ម្តងទៀតសម្រាប់ Request នីមួយៗ ដើម្បីផ្ទៀងផ្ទាត់ថា Response នៅតែត្រឹមត្រូវ។

> **គន្លឹះ:** ពិនិត្យ Status Code និង Response Body ដើម្បីធានាថា Request ដំណើរការត្រឹមត្រូវ។ ប្រើ Collections ដើម្បីរៀបចំ Requests សម្រាប់ការប្រើប្រាស់នាពេលអនាគត។
`,
    solution: `
# ដំណោះស្រាយ: បង្កើត HTTP Requests ក្នុង Postman

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## 1. GET Request ជាមួយ Query Parameter
* **Request**:
  * Name: \`Get Comments by Post ID\`
  * Collection: \`API Testing Lab\`
  * Method: \`GET\`
  * URL: \`https://jsonplaceholder.typicode.com/comments?postId=1\`
  * Params:
    \`\`\`text
    Key: postId
    Value: 1
    \`\`\`
* **Response**:
  * Status: \`200 OK\`
  * Body (Example):
    \`\`\`json
    [
      {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi..."
      },
      {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil..."
      }
    ]
    \`\`\`

## 2. POST Request ជាមួយ JSON Body
* **Request**:
  * Name: \`Create New Post\`
  * Collection: \`API Testing Lab\`
  * Method: \`POST\`
  * URL: \`https://jsonplaceholder.typicode.com/posts\`
  * Headers:
    \`\`\`text
    Content-Type: application/json
    \`\`\`
  * Body (raw - JSON):
    \`\`\`json
    {
      "title": "My First Post from Postman",
      "body": "This is a test post created via Postman.",
      "userId": 1
    }
    \`\`\`
* **Response**:
  * Status: \`201 Created\`
  * Body:
    \`\`\`json
    {
      "title": "My First Post from Postman",
      "body": "This is a test post created via Postman.",
      "userId": 1,
      "id": 101
    }
    \`\`\`

## 3. Collection
* **Collection**: \`API Testing Lab\`
* **Description**: \`Collection for testing HTTP Requests with JSONPlaceholder API\`
* **Requests**: \`Get Comments by Post ID\` និង \`Create New Post\` រក្សាទុកនៅក្នុង Collection។
* **Verification**: Requests បញ្ជូនម្តងទៀត, Status Codes (\`200 OK\`, \`201 Created\`) និង Response Bodies ត្រឹមត្រូវ។

## លទ្ធផលផ្ទៀងផ្ទាត់
* **GET Request**: \`Get Comments by Post ID\` បញ្ជូនជាមួយ \`200 OK\` និង Array នៃ Comments។
* **POST Request**: \`Create New Post\` បញ្ជូនជាឮួយ \`201 Created\` និង Response Body ដែលមាន ID ថ្មី។
* **Collection**: \`API Testing Lab\` រៀបចំជាមួយ Requests និង Description។

លំហាត់នេះបានបង្ហាញពីរបៀបបង្កើត និងសាកល្បង HTTP Requests (GET និង POST) ក្នុង Postman ដោយប្រើ Collection ដើម្បីរៀបចំ។
`
  }
};

export default PostmanLesson1_3Content;
