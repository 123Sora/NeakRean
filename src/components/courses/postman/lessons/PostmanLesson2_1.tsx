import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson2_1Content: LessonContent = {
  title: 'ការបង្កើត និងបញ្ជូន Requests',
  objectives: [
    'ស្គាល់ពី Request Builder Interface ក្នុង Postman',
    'របៀបជ្រើសរើស HTTP Method ដែលត្រឹមត្រូវ',
    'របៀបកំណត់ URL រួមទាំង Path និង Query Parameters',
    'របៀបបន្ថែម និងកែសម្រួល Headers',
    'របៀបកំណត់ Request Body សម្រាប់ Methods ផ្សេងៗគ្នា (JSON, Form Data)',
    'របៀបបញ្ជូន Request និងមើល Response ដំបូង'
  ],
  content: `
# ការបង្កើត និងបញ្ជូន Requests 📝➡️

ការបង្កើត និងបញ្ជូន HTTP Requests គឺជាប្រតិបត្តិការស្នូលនៅក្នុង Postman ។ Request Builder គឺជាផ្នែកសំខាន់នៃ Postman Interface ដែលអនុញ្ញាតឱ្យអ្នកកំណត់រាល់ព័ត៌មានលម្អិតនៃ Request របស់អ្នក។

## 1. ស្គាល់ពី Request Builder Interface 💡

Request Builder ក្នុង Postman ជាធម្មតាមានផ្នែកសំខាន់ៗដូចជា៖
* **Method Dropdown:** សម្រាប់ជ្រើសរើស HTTP Method (GET, POST, PUT, DELETE ។ល។) ។
* **URL Input Field:** សម្រាប់បញ្ចូល Endpoint URL ។
* **Tabs សម្រាប់ Configuration:** (Params, Authorization, Headers, Body, Pre-request Script, Tests, Settings) ។
* **Send Button:** សម្រាប់បញ្ជូន Request ។
* **Save Button:** សម្រាប់រក្សាទុក Request ទៅកាន់ Collection ។

## 2. របៀបជ្រើសរើស HTTP Method ដែលត្រឹមត្រូវ 🎯

ការជ្រើសរើស HTTP Method ត្រឹមត្រូវគឺសំខាន់ណាស់ ព្រោះវាប្រាប់ Server ពីប្រភេទប្រតិបត្តិការដែលអ្នកចង់ធ្វើ។

* **\`GET\`:** ទាញយកទិន្នន័យ (ឧទាហរណ៍៖ ព័ត៌មាន User) ។
* **\`POST\`:** បង្កើតទិន្នន័យថ្មី (ឧទាហរណ៍៖ ចុះឈ្មោះ User ថ្មី) ។
* **\`PUT\`:** ធ្វើបច្ចុប្បន្នភាពទិន្នន័យទាំងមូល (ឧទាហរណ៍៖ ផ្លាស់ប្តូរព័ត៌មាន User ទាំងអស់) ។
* **\`PATCH\`:** ធ្វើបច្ចុប្បន្នភាពទិន្នន័យដោយផ្នែក (ឧទាហរណ៍៖ ផ្លាស់ប្តូរតែ Email របស់ User) ។
* **\`DELETE\`:** លុបទិន្នន័យ (ឧទាហរណ៍៖ លុប User) ។
* **\`HEAD\`:** ទាញយកតែ Headers របស់ Response មិនមែន Body ទេ។
* **\`OPTIONS\`:** ទាញយកព័ត៌មានអំពី HTTP Methods ដែល Server គាំទ្រសម្រាប់ Resource មួយ។

## 3. របៀបកំណត់ URL រួមទាំង Path និង Query Parameters 🔗

URL គឺជាអាសយដ្ឋានរបស់ API Endpoint ។

* **Base URL:** ផ្នែកមូលដ្ឋាននៃ URL (ឧទាហរណ៍៖ \`https://api.example.com\`) ។
* **Path Parameters (Path Variables):** កំណត់ Resource ជាក់លាក់។ ឧទាហរណ៍៖ ក្នុង \`https://api.example.com/users/123\` , \`123\` គឺជា Path Parameter ។
    * ក្នុង Postman អ្នកអាចបញ្ចូលវាដោយផ្ទាល់ក្នុង URL ។
* **Query Parameters:** ប្រើសម្រាប់ Filter, Sort, Paginate ។ ពួកវាចាប់ផ្តើមដោយ \`?\` និងបំបែកដោយ \`&\` ។ ឧទាហរណ៍៖ \`?status=active&limit=10\` ។
    * ក្នុង Postman អ្នកអាចបញ្ចូលវាដោយផ្ទាល់ក្នុង URL ឬប្រើ Tab **"Params"** ដែលនឹង Parse វាដោយស្វ័យប្រវត្តិ។

## 4. របៀបបន្ថែម និងកែសម្រួល Headers 🏷️

Headers ផ្តល់ព័ត៌មាន Meta អំពី Request ។

* **Common Headers:**
    * \`Content-Type\`: ប្រភេទ Content នៃ Request Body (ឧទាហរណ៍ \`application/json\`) ។
    * \`Authorization\`: Token សម្រាប់ Authentication (ឧទាហរណ៍ \`Bearer YOUR_TOKEN\`) ។
    * \`Accept\`: ប្រភេទ Content ដែល Client អាចទទួលយកបាន។
* **ក្នុង Postman:** ចូលទៅ Tab **"Headers"** ។ អ្នកអាចបន្ថែម Key-Value Pairs ថ្មី ឬកែសម្រួលដែលមានស្រាប់�। Postman នឹងបន្ថែម Headers លំនាំដើមមួយចំនួនដោយស្វ័យប្រវត្តិ។

## 5. របៀបកំណត់ Request Body 📦

Request Body ផ្ទុកទិន្នន័យដែលអ្នកបញ្ជូនទៅ Server សម្រាប់ Methods ដូចជា POST, PUT, PATCH ។

* **None:** សម្រាប់ GET, HEAD, DELETE ។
* **Form-data:** សម្រាប់ \`multipart/form-data\` (ឧទាហរណ៍៖ ការ Upload File ឬទិន្នន័យទម្រង់ចម្រុះ) ។
    * អ្នកអាចបន្ថែម Key-Value Pairs ដោយជ្រើសរើស Text ឬ File ។
* **x-www-form-urlencoded:** សម្រាប់ \`application/x-www-form-urlencoded\` (ឧទាហរណ៍៖ ទិន្នន័យពី HTML Form សាមញ្ញ) ។
    * អ្នកបញ្ចូល Key-Value Pairs ដូចធម្មតា។
* **Raw:** សម្រាប់ទិន្នន័យដែលមិនទាន់បាន Encode ។
    * **JSON (application/json):** ត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយបំផុតសម្រាប់ API ។ ជ្រើសរើស "JSON" ពី Dropdown ។
    * **Text, JavaScript, HTML, XML:** សម្រាប់ប្រភេទទិន្នន័យផ្សេងៗ។
* **Binary:** សម្រាប់បញ្ជូនទិន្នន័យ File តែមួយ។

**ក្នុង Postman:** ចូលទៅ Tab **"Body"** ហើយជ្រើសរើស Option ដែលសមស្រប។

## 6. របៀបបញ្ជូន Request និងមើល Response ដំបូង ➡️✅

បន្ទាប់ពីកំណត់រចនាសម្ព័ន្ធ Request របស់អ្នករួចរាល់៖
1.  ចុចប៊ូតុង **"Send"** ។
2.  Postman នឹងបញ្ជូន Request ទៅ Server ។
3.  Response នឹងបង្ហាញនៅផ្នែកខាងក្រោមនៃ Interface Postman ។ អ្នកនឹងឃើញ៖
    * **Status Code:** លេខ 3 ខ្ទង់ (ឧទាហរណ៍ 200 OK, 404 Not Found) ។
    * **Time:** រយៈពេលដែល Request ចំណាយ។
    * **Size:** ទំហំនៃ Response ។
    * **Body:** ទិន្នន័យដែល Server បញ្ជូនត្រឡប់មកវិញ។
    * **Headers:** Headers ពី Response របស់ Server ។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: POST Request ដើម្បីបង្កើត User
នេះជាឧទាហរណ៍នៃការបង្កើត POST Request ក្នុង Postman ដើម្បីបង្កើត User ថ្មី។
\`\`\`text
// 1. HTTP Method: POST
// 2. URL: https://jsonplaceholder.typicode.com/users
// 3. Headers Tab:
//    - Key: Content-Type, Value: application/json
// 4. Body Tab: Select 'raw' and then 'JSON' from dropdown.
//    - Input JSON:
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john.doe@example.com"
}

// After clicking 'Send', expected Response:
// Status: 201 Created
// Body:
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john.doe@example.com",
  "id": 11 // A new ID generated by the mock API
}
\`\`\`

### ឧទាហរណ៍ ២: GET Request ជាមួយ Path Parameter
ទាញយកព័ត៌មានលម្អិតរបស់ User ID 5 ។
\`\`\`text
// 1. HTTP Method: GET
// 2. URL: https://jsonplaceholder.typicode.com/users/5
// 3. Headers Tab: (No custom headers needed)
// 4. Body Tab: None

// After clicking 'Send', expected Response:
// Status: 200 OK
// Body:
{
  "id": 5,
  "name": "Chelsey Dietrich",
  "username": "Kamren",
  "email": "Lucio_Hettinger@annie.ca",
  // ... more user data
}
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើផ្នែកសំខាន់នៃ Postman Interface ដែលអនុញ្ញាតឱ្យអ្នកកំណត់រាល់ព័ត៌មានលម្អិតនៃ Request របស់អ្នកត្រូវបានគេហៅថាអ្វី?',
      options: ['Response Viewer', 'Collection Manager', 'Environment Editor', 'Request Builder'],
      correct: 3,
      explanation: 'Request Builder គឺជាផ្នែកសំខាន់នៃ Postman Interface សម្រាប់កំណត់រាល់ព័ត៌មានលម្អិតនៃ Request ។'
    },
    {
      question: 'តើ HTTP Method មួយណាដែលត្រូវបានប្រើដើម្បីធ្វើបច្ចុប្បន្នភាពទិន្នន័យដោយផ្នែក?',
      options: ['PUT', 'POST', 'PATCH', 'GET'],
      correct: 2,
      explanation: '`PATCH` Method ត្រូវបានប្រើដើម្បីធ្វើបច្ចុប្បន្នភាពទិន្នន័យដោយផ្នែក។'
    },
    {
      question: 'តើ `Query Parameters` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'កំណត់ Resource ជាក់លាក់',
        'Filter, Sort, ឬ Paginate ទិន្នន័យ',
        'បញ្ជាក់ប្រភេទ Content នៃ Request Body',
        'ប្រើសម្រាប់ Authentication'
      ],
      correct: 1,
      explanation: '`Query Parameters` ត្រូវបានប្រើដើម្បី Filter, Sort, ឬ Paginate ទិន្នន័យ។'
    },
    {
      question: 'តើ `Authorization` Header ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'បញ្ជាក់ប្រភេទ Media Type នៃ Response Body',
        'បញ្ជាក់ប្រភេទ Media Type នៃ Request Body',
        'ប្រើសម្រាប់ Authentication',
        'បញ្ជាក់ URL'
      ],
      correct: 2,
      explanation: '`Authorization` Header ត្រូវបានប្រើសម្រាប់ Authentication (ឧទាហរណ៍ Bearer Token) ។'
    },
    {
      question: 'តើ Request Body Type មួយណាដែលត្រូវបានប្រើសម្រាប់ Upload File?',
      options: ['raw', 'x-www-form-urlencoded', 'form-data', 'binary'],
      correct: 2,
      explanation: '`form-data` ត្រូវបានប្រើសម្រាប់បញ្ជូនទិន្នន័យទម្រង់ រួមទាំង Files ។'
    },
    {
      question: 'តើ `Status Code` 200 OK មានន័យដូចម្តេច?',
      options: [
        'Request មិនត្រឹមត្រូវ',
        'Request ទទួលបានជោគជ័យ',
        'Server មានបញ្ហា',
        'Resource មិនត្រូវបានរកឃើញ'
      ],
      correct: 1,
      explanation: '`Status Code` 200 OK មានន័យថា Request ទទួលបានជោគជ័យ�।'
    },
    {
      question: 'តើ HTTP Method មួយណាដែលទាញយកតែ Headers របស់ Response មិនមែន Body ទេ?',
      options: ['GET', 'HEAD', 'OPTIONS', 'DELETE'],
      correct: 1,
      explanation: '`HEAD` Method ទាញយកតែ Headers របស់ Response មិនមែន Body ទេ�।'
    },
    {
      question: 'តើអ្នកអាចបញ្ចូល Query Parameters ក្នុង Postman ដោយវិធីណាខ្លះ?',
      options: [
        'តែក្នុង URL Input Field',
        'តែក្នុង Tab "Params"',
        'ទាំងក្នុង URL Input Field និង Tab "Params"',
        'មិនអាចបញ្ចូលបានទេ'
      ],
      correct: 2,
      explanation: 'អ្នកអាចបញ្ចូល Query Parameters ទាំងដោយផ្ទាល់ក្នុង URL Input Field ឬប្រើ Tab "Params" ។'
    },
    {
      question: 'តើ Request Body ត្រូវបានប្រើសម្រាប់ HTTP Methods មួយណា?',
      options: ['GET និង DELETE', 'POST, PUT, និង PATCH', 'HEAD និង OPTIONS', 'គ្រប់ Methods ទាំងអស់'],
      correct: 1,
      explanation: 'Request Body ត្រូវបានប្រើសម្រាប់ Methods ដូចជា POST, PUT, និង PATCH ។'
    },
    {
      question: 'តើ `JSON` គឺជាប្រភេទ `raw` Body មួយណា?',
      options: ['Text', 'JavaScript', 'HTML', 'JSON (application/json)'],
      correct: 3,
      explanation: '`JSON` គឺជាប្រភេទ `raw` Body ដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយបំផុតសម្រាប់ API Communication ។'
    },
    {
      question: 'តើ `Status Code` 401 Unauthorized មានន័យដូចម្តេច?',
      options: [
        'Request ជោគជ័យ',
        'មិនមាន Authentication',
        'Resource មិនត្រូវបានរកឃើញ',
        'Server មានបញ្ហា'
      ],
      correct: 1,
      explanation: '`Status Code` 401 Unauthorized មានន័យថា Request មិនមាន Authentication ។'
    },
    {
      question: 'តើ `x-www-form-urlencoded` ត្រូវបានប្រើសម្រាប់ទិន្នន័យប្រភេទណា?',
      options: [
        'JSON Data',
        'Binary Files',
        'Simple HTML Form Data',
        'XML Data'
      ],
      correct: 2,
      explanation: '`x-www-form-urlencoded` ត្រូវបានប្រើសម្រាប់បញ្ជូនទិន្នន័យពី HTML Form សាមញ្ញ។'
    },
    {
      question: 'តើប៊ូតុង `Send` ក្នុង Postman ធ្វើអ្វី?',
      options: [
        'រក្សាទុក Request',
        'បញ្ជូន Request ទៅ Server',
        'លុប Request',
        'ចម្លង Request'
      ],
      correct: 1,
      explanation: 'ប៊ូតុង `Send` ក្នុង Postman ត្រូវបានប្រើដើម្បីបញ្ជូន Request ទៅ Server ។'
    },
    {
      question: 'តើ `Path Parameters` ត្រូវបានកំណត់នៅផ្នែកណាខ្លះនៃ URL?',
      options: [
        'បន្ទាប់ពី `?`',
        'ជាផ្នែកមួយនៃ Path របស់ URL',
        'នៅក្នុង Headers',
        'នៅក្នុង Request Body'
      ],
      correct: 1,
      explanation: '`Path Parameters` គឺជាផ្នែកមួយនៃ Path របស់ URL ដែលកំណត់ Resource ជាក់លាក់�।'
    },
    {
      question: 'តើ `Content-Type: application/json` បញ្ជាក់អ្វី?',
      options: [
        'Response នឹងជា JSON',
        'Request Body នឹងជា JSON',
        'URL មាន JSON',
        'Header មាន JSON'
      ],
      correct: 1,
      explanation: '`Content-Type: application/json` បញ្ជាក់ថា Request Body ដែលអ្នកកំពុងបញ្ជូនគឺជាទម្រង់ JSON ។'
    },
    {
      question: 'តើ `OPTIONS` HTTP Method ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីលុបទិន្នន័យ',
        'ដើម្បីទាញយកព័ត៌មានអំពី HTTP Methods ដែល Server គាំទ្រ',
        'ដើម្បីបង្កើតទិន្នន័យថ្មី',
        'ដើម្បីធ្វើបច្ចុប្បន្នភាពទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`OPTIONS` HTTP Method ត្រូវបានប្រើដើម្បីទាញយកព័ត៌មានអំពី HTTP Methods ដែល Server គាំទ្រសម្រាប់ Resource មួយ។'
    },
    {
      question: 'តើ Postman បង្ហាញ `Response Headers` នៅផ្នែកណា?',
      options: [
        'នៅក្នុង Request Builder',
        'នៅក្នុង Tab "Body" របស់ Request',
        'នៅក្នុង Tab "Headers" របស់ Response',
        'នៅក្នុង Tab "Params"'
      ],
      correct: 2,
      explanation: 'Postman បង្ហាញ `Response Headers` នៅក្នុង Tab "Headers" របស់ Response ។'
    },
    {
      question: 'តើ `PUT` Method ត្រូវបានប្រើដើម្បីធ្វើបច្ចុប្បន្នភាព Resource ទាំងមូល ឬដោយផ្នែក?',
      options: [
        'ទាំងមូល',
        'ដោយផ្នែក',
        'ទាំងពីរ',
        'គ្មានមួយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`PUT` Method ត្រូវបានប្រើដើម្បីធ្វើបច្ចុប្បន្នភាព Resource ទាំងមូល។'
    },
    {
      question: 'តើ `DELETE` Method ជាធម្មតាមាន Request Body ដែរឬទេ?',
      options: [
        'បាទ/ចាស៎ ជានិច្ចកាល',
        'ទេ មិនដែល',
        'ម្តងម្កាល',
        'អាស្រ័យលើ API'
      ],
      correct: 1,
      explanation: '`DELETE` Method ជាធម្មតាមិនមាន Request Body ទេ�।'
    },
    {
      question: 'តើ Tab មួយណាដែលអ្នកនឹងប្រើដើម្បីកំណត់ `Query Parameters` ក្នុង Postman?',
      options: [
        'Headers',
        'Body',
        'Params',
        'Authorization'
      ],
      correct: 2,
      explanation: 'អ្នកនឹងប្រើ Tab "Params" ដើម្បីកំណត់ `Query Parameters` ក្នុង Postman ។'
    },
    {
      question: 'តើ `Base URL` គឺជាអ្វីនៅក្នុង URL មួយ?',
      options: [
        'ផ្នែកដែលផ្លាស់ប្តូរជានិច្ច',
        'ផ្នែកមូលដ្ឋាននៃ URL ដែលនៅថេរសម្រាប់ API មួយ',
        'Path Parameter',
        'Query Parameter'
      ],
      correct: 1,
      explanation: '`Base URL` គឺជាផ្នែកមូលដ្ឋាននៃ URL ដែលនៅថេរសម្រាប់ API មួយ។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: បង្កើត និងបញ្ជូន HTTP Requests ក្នុង Postman

លំហាត់នេះនឹងណែនាំអ្នកឱ្យបង្កើត HTTP Requests ផ្សេងៗគ្នា (GET, PUT, DELETE) ក្នុង Postman ដោយប្រើ API សាកល្បង។

**លក្ខខណ្ឌជាមុន:**
* Postman Desktop App ឬ Web Client (ចូលគណនី Postman ឥតគិតថ្លៃ)។
* Workspace មួយនៅក្នុង Postman (ឧ. "My First Postman Lab")។

## 1. បង្កើត GET Request ដើម្បីទាញយកព័ត៌មាន User
1. **បង្កើត Request**:
   * នៅក្នុង Workspace, ចុច **New > HTTP Request**.
   * **Name**: \`Get User by ID\`
   * **Collection**: បង្កើត Collection ៖ \`API Testing Lab\`
2. **កំណត់ Request**:
   * **Method**: \`GET\`
   * **URL**: \`https://jsonplaceholder.typicode.com/users/7\`
   * **Headers**: (មិនត្រូវការសម្រាប់ Request នេះ)
   * **Body**: ជ្រើសរើស "None"
3. **បញ្ជូន Request**:
   * ចុច **Send**.
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`200 OK\`
   * **Body**:
     * \`id\`: 7
     * \`name\`: "Kurtis Weissnat"
     * \`username\`: "Elwyn.Skiles"
     * \`email\`: "Telly.Hoeger@billy.biz"
   * **Time & Size**: កត់ចំណាំ Response Time (ឧ. 50ms) និង Size (ឧ. 200B)
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`API Testing Lab\`.

## 2. បង្កើត PUT Request ដើម្បីធ្វើបច្ចុប្បន្នភាព Post
1. **បង្កើត Request**:
   * នៅក្នុង Workspace, ចុច **New > HTTP Request**.
   * **Name**: \`Update Post\`
   * **Collection**: \`API Testing Lab\`
2. **កំណត់ Request**:
   * **Method**: \`PUT\`
   * **URL**: \`https://jsonplaceholder.typicode.com/posts/1\`
   * **Headers**: នៅក្នុង Tab "Headers", បន្ថែម:
     * Key: \`Content-Type\`, Value: \`application/json\`
   * **Body**: នៅក្នុង Tab "Body", ជ្រើសរើស "raw" និង "JSON", បន្ទាប់មកបញ្ចូល:
     \`\`\`json
     {
       "id": 1,
       "title": "Updated Post Title from Postman",
       "body": "This post content has been fully updated.",
       "userId": 1
     }
     \`\`\`
3. **បញ្ជូន Request**:
   * ចុច **Send**.
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`200 OK\`
   * **Body**:
     * \`id\`: 1
     * \`title\`: "Updated Post Title from Postman"
     * \`body\`: "This post content has been fully updated."
     * \`userId\`: 1
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`API Testing Lab\`.

## 3. បង្កើត DELETE Request ដើម្បីលុប Comment
1. **បង្កើត Request**:
   * នៅក្នុង Workspace, ចុច **New > HTTP Request**.
   * **Name**: \`Delete Comment\`
   * **Collection**: \`API Testing Lab\`
2. **កំណត់ Request**:
   * **Method**: \`DELETE\`
   * **URL**: \`https://jsonplaceholder.typicode.com/comments/5\`
   * **Headers**: (មិនត្រូវការសម្រាប់ Request នេះ)
   * **Body**: ជ្រើសរើស "None"
3. **បញ្ជូន Request**:
   * ចុច **Send**.
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`200 OK\` ឬ \`204 No Content\`
   * **Body**: \`{}\` (ទទេ)
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`API Testing Lab\`.

## 4. រៀបចំ Collection
1. **រៀបចំ Collection**:
   * នៅក្នុង Sidebar, ចុច **API Testing Lab** Collection។
   * បន្ថែម Description: \`Collection for testing HTTP Requests with JSONPlaceholder API\`.
2. **ផ្ទៀងផ្ទាត់**:
   * បើក \`Get User by ID\`, \`Update Post\`, និង \`Delete Comment\` Requests ពី Collection។
   * ចុច **Send** ម្តងទៀតសម្រាប់ Request នីមួយៗ ដើម្បីផ្ទៀងផ្ទាត់ថា Response នៅតែត្រឹមត្រូវ។

> **គន្លឹះ:** ពិនិត្យ Status Code និង Response Body ដើម្បីធានាថា Request ដំណើរការត្រឹមត្រូវ។ ប្រើ Collections ដើម្បីរៀបចំ Requests សម្រាប់ការប្រើប្រាស់នាពេលអនាគត។
`,
    solution: `
# ដំណោះស្រាយ: បង្កើត និងបញ្ជូន HTTP Requests ក្នុង Postman

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## 1. GET Request ដើម្បីទាញយកព័ត៌មាន User
* **Request**:
  * Name: \`Get User by ID\`
  * Collection: \`API Testing Lab\`
  * Method: \`GET\`
  * URL: \`https://jsonplaceholder.typicode.com/users/7\`
  * Body: None
* **Response**:
  * Status: \`200 OK\`
  * Body (Example):
    \`\`\`json
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "2.1098"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable object orchestra",
        "bs": "enable scalable real-time ROI"
      }
    }
    \`\`\`
  * Time & Size: ឧ. 50ms, 200B

## 2. PUT Request ដើម្បីធ្វើបច្ចុប្បន្នភាព Post
* **Request**:
  * Name: \`Update Post\`
  * Collection: \`API Testing Lab\`
  * Method: \`PUT\`
  * URL: \`https://jsonplaceholder.typicode.com/posts/1\`
  * Headers:
    \`\`\`text
    Content-Type: application/json
    \`\`\`
  * Body (raw - JSON):
    \`\`\`json
    {
      "id": 1,
      "title": "Updated Post Title from Postman",
      "body": "This post content has been fully updated.",
      "userId": 1
    }
    \`\`\`
* **Response**:
  * Status: \`200 OK\`
  * Body:
    \`\`\`json
    {
      "id": 1,
      "title": "Updated Post Title from Postman",
      "body": "This post content has been fully updated.",
      "userId": 1
    }
    \`\`\`

## 3. DELETE Request ដើម្បីលុប Comment
* **Request**:
  * Name: \`Delete Comment\`
  * Collection: \`API Testing Lab\`
  * Method: \`DELETE\`
  * URL: \`https://jsonplaceholder.typicode.com/comments/5\`
  * Body: None
* **Response**:
  * Status: \`200 OK\` ឬ \`204 No Content\`
  * Body: \`{}\`

## 4. Collection
* **Collection**: \`API Testing Lab\`
* **Description**: \`Collection for testing HTTP Requests with JSONPlaceholder API\`
* **Requests**: \`Get User by ID\`, \`Update Post\`, និង \`Delete Comment\` រក្សាទុកនៅក្នុង Collection។
* **Verification**: Requests បញ្ជូនម្តងទៀត, Status Codes (\`200 OK\`, \`200 OK\` ឬ \`204 No Content\`) និង Response Bodies ត្រឹមត្រូវ។

## លទ្ធផលផ្ទៀងផ្ទាត់
* **GET Request**: \`Get User by ID\` បញ្ជូនជាមួយ \`200 OK\` និង User ព័ត៌មានលម្អិត។
* **PUT Request**: \`Update Post\` បញ្ជូនជាមួយ \`200 OK\` និង Post ដែលបាន Update។
* **DELETE Request**: \`Delete Comment\` បញ្ជូនជាមួយ \`200 OK\` ឬ \`204 No Content\` និង Response Body ទទេ។
* **Collection**: \`API Testing Lab\` រៀបចំជាមួយ Requests និង Description។

លំហាត់នេះបានបង្ហាញពីរបៀបបង្កើត កំណត់រចនាសម្ព័ន្ធ និងសាកល្បង HTTP Requests (GET, PUT, DELETE) ក្នុង Postman ដោយប្រើ Collection ដើម្បីរៀបចំ។
`
  }
};

export default PostmanLesson2_1Content;
