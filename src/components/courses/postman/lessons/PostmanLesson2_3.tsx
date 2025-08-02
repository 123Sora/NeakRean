import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson2_3Content: LessonContent = {
  title: 'ការផ្ទៀងផ្ទាត់ និងការអនុញ្ញាត (Authentication and Authorization)',
  objectives: [
    'យល់ដឹងពីភាពខុសគ្នារវាង Authentication និង Authorization',
    'ស្គាល់ពីប្រភេទ Authentication ទូទៅ (API Key, Bearer Token, Basic Auth, OAuth 2.0)',
    'របៀបកំណត់ Authentication ក្នុង Postman សម្រាប់ Requests',
    'របៀបប្រើ Environment Variables សម្រាប់ Tokens និង Keys ដើម្បីសុវត្ថិភាព',
    'ការដោះស្រាយកំហុស 401 Unauthorized និង 403 Forbidden'
  ],
  content: `
# ការផ្ទៀងផ្ទាត់ និងការអនុញ្ញាត (Authentication and Authorization) 🔐

ក្នុងការធ្វើការជាមួយ APIs ជាពិសេស APIs ដែលមានសុវត្ថិភាព អ្នកនឹងជួបប្រទះនូវគោលគំនិតសំខាន់ពីរគឺ **Authentication (ការផ្ទៀងផ្ទាត់)** និង **Authorization (ការអនុញ្ញាត)** ។

## 1. Authentication vs. Authorization (ការផ្ទៀងផ្ទាត់ ទល់នឹង ការអនុញ្ញាត) 💡

* **Authentication (ការផ្ទៀងផ្ទាត់):** គឺជាដំណើរការនៃការ **បញ្ជាក់អត្តសញ្ញាណ** របស់អ្នកប្រើប្រាស់ ឬ Client ។ វាឆ្លើយសំណួរថា "តើអ្នកជានរណា?" ។ ឧទាហរណ៍៖ ការចូលដោយប្រើ Username និង Password ។
* **Authorization (ការអនុញ្ញាត):** គឺជាដំណើរការនៃការ **កំណត់សិទ្ធិចូលប្រើ** របស់អ្នកប្រើប្រាស់ ឬ Client ទៅកាន់ Resource ជាក់លាក់។ វាឆ្លើយសំណួរថា "តើអ្នកមានសិទ្ធិធ្វើអ្វី?" ។ ឧទាហរណ៍៖ អ្នកប្រើប្រាស់ A មានសិទ្ធិចូលមើលទិន្នន័យ ប៉ុន្តែមិនមានសិទ្ធិកែប្រែទេ។

## 2. ប្រភេទ Authentication ទូទៅ 🔑

Postman គាំទ្រប្រភេទ Authentication ជាច្រើនប្រភេទ៖

### a. API Key
* **របៀបដំណើរការ:** ជា Key (String) តែមួយគត់ដែលត្រូវបានផ្តល់ឱ្យ Client ដើម្បីកំណត់អត្តសញ្ញាណពួកគេ។ វាអាចត្រូវបានបញ្ជូននៅក្នុង Headers, Query Parameters, ឬ Request Body ។
* **ក្នុង Postman:**
    * ចូលទៅ Tab **"Authorization"** ។
    * ជ្រើសរើស Type: **"API Key"** ។
    * បញ្ចូល **Key** (ឈ្មោះ Parameter) និង **Value** (API Key ជាក់ស្តែង) ។
    * ជ្រើសរើស **Add to:** \`Header\` ឬ \`Query Params\` ។

### b. Bearer Token (OAuth 2.0, JWT)
* **របៀបដំណើរការ:** ជា Token (ជាធម្មតា JWT - JSON Web Token) ដែលត្រូវបានផ្តល់ឱ្យ Client បន្ទាប់ពី Authentication ជោគជ័យ�। Token នេះត្រូវបានបញ្ជូននៅក្នុង Header \`Authorization: Bearer <TOKEN>\` សម្រាប់ Requests បន្ទាប់។
* **ក្នុង Postman:**
    * ចូលទៅ Tab **"Authorization"** ។
    * ជ្រើសរើស Type: **"Bearer Token"** ។
    * បញ្ចូល **Token** របស់អ្នកនៅក្នុង Field "Token" ។

### c. Basic Auth
* **របៀបដំណើរការ:** បញ្ជូន Username និង Password ដែលបាន Encode ជា Base64 នៅក្នុង Header \`Authorization: Basic <ENCODED_CREDENTIALS>\` ។ មិនមានសុវត្ថិភាពខ្ពស់សម្រាប់ Production ទេ លុះត្រាតែប្រើជាមួយ HTTPS ។
* **ក្នុង Postman:**
    * ចូលទៅ Tab **"Authorization"** ។
    * ជ្រើសរើស Type: **"Basic Auth"** ។
    * បញ្ចូល **Username** និង **Password** ។ Postman នឹង Encode វាដោយស្វ័យប្រវត្តិ។

### d. OAuth 2.0
* **របៀបដំណើរការ:** ជា Framework ដ៏ស្មុគស្មាញសម្រាប់ Authorization ដែលអនុញ្ញាតឱ្យ Third-party Applications ទទួលបានសិទ្ធិចូលប្រើ Resources ដែលមានការការពារដោយមិនចាំបាច់ចែករំលែក Credentials របស់អ្នកប្រើប្រាស់។ វារួមបញ្ចូលជំហានជាច្រើន (Authorization Code Grant, Client Credentials Grant ។ល។) ។
* **ក្នុង Postman:**
    * Postman មានការគាំទ្រពេញលេញសម្រាប់ OAuth 2.0 ។
    * ចូលទៅ Tab **"Authorization"** ។
    * ជ្រើសរើស Type: **"OAuth 2.0"** ។
    * អ្នកនឹងត្រូវកំណត់រចនាសម្ព័ន្ធព័ត៌មានលម្អិតដូចជា Grant Type, Callback URL, Auth URL, Access Token URL, Client ID, Client Secret ។ Postman នឹងជួយអ្នកក្នុងការទទួលបាន Access Token ។

## 3. របៀបកំណត់ Authentication ក្នុង Postman សម្រាប់ Requests 🛠️

1. **បើក Request:** បើក Request ដែលអ្នកចង់បន្ថែម Authentication ។
2. **ទៅកាន់ Tab "Authorization":** ចុចលើ Tab **"Authorization"** ។
3. **ជ្រើសរើស Type:** ពី Dropdown Menu **"Type"** ជ្រើសរើសប្រភេទ Authentication ដែល API របស់អ្នកទាមទារ (ឧទាហរណ៍: API Key, Bearer Token, Basic Auth) ។
4. **បំពេញព័ត៌មានលម្អិត:** បំពេញ Fields ដែលចាំបាច់សម្រាប់ប្រភេទ Authentication ដែលបានជ្រើសរើស។
    * សម្រាប់ API Key: Key, Value, Add to (Header/Query Params) ។
    * សម្រាប់ Bearer Token: Token ។
    * សម្រាប់ Basic Auth: Username, Password ។
5. **បញ្ជូន Request:** ចុច **"Send"** ។ Postman នឹងបន្ថែម Headers ឬ Parameters ដែលចាំបាច់ដោយស្វ័យប្រវត្តិ។

## 4. របៀបប្រើ Environment Variables សម្រាប់ Tokens និង Keys 🔒

ការប្រើប្រាស់ Environment Variables សម្រាប់ Authentication Tokens និង API Keys គឺមានសារៈសំខាន់ណាស់សម្រាប់សុវត្ថិភាព និងភាពងាយស្រួលក្នុងការគ្រប់គ្រង៖
* **សុវត្ថិភាព:** ការរក្សាទុក Tokens ក្នុង Variables ជៀសវាងការ Hardcode ពួកវានៅក្នុង Requests ដែលអាចត្រូវបាន Committed ទៅ Version Control ។
* **ភាពបត់បែន:** អនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូរ Tokens យ៉ាងងាយស្រួលសម្រាប់ Environments ផ្សេងៗគ្នា (Development, Staging, Production) ដោយមិនចាំបាច់កែសម្រួល Requests នីមួយៗ។

**របៀបប្រើ:**
1. **បង្កើត Environment:** បង្កើត Environment ថ្មី ឬជ្រើសរើស Environment ដែលមានស្រាប់។
2. **បន្ថែម Variable:** បន្ថែម Variable ថ្មី (ឧទាហរណ៍ \`my_api_key\`, \`my_bearer_token\`) ទៅក្នុង Environment របស់អ្នកជាមួយនឹង Initial Value និង Current Value ។
3. **ប្រើ Variable ក្នុង Request:** នៅក្នុង Tab "Authorization" ជំនួសឱ្យការបញ្ចូល Token ឬ Key ដោយផ្ទាល់ សូមប្រើ Variable ដោយសរសេរ \`{{variable_name}}\` (ឧទាហរណ៍ \`{{my_api_key}}\`, \`{{my_bearer_token}}\`) ។
4. **ជ្រើសរើស Environment:** ត្រូវប្រាកដថាអ្នកបានជ្រើសរើស Environment ដែលត្រឹមត្រូវពី Dropdown នៅជ្រុងខាងស្តាំខាងលើនៃ Postman ។

## 5. ការដោះស្រាយកំហុស 401 Unauthorized និង 403 Forbidden 🚨

* **\`401 Unauthorized\`:**
    * **មូលហេតុ:** Request របស់អ្នកមិនបានផ្តល់ Authentication Credentials ត្រឹមត្រូវ ឬមិនបានផ្តល់ទាល់តែសោះ។
    * **ដំណោះស្រាយ:**
        * ពិនិត្យមើលថាអ្នកបានកំណត់ Authentication Type ត្រឹមត្រូវក្នុង Postman ។
        * ត្រូវប្រាកដថា Token/Key របស់អ្នកមិនទាន់ផុតកំណត់ ឬមិនត្រឹមត្រូវ។
        * ពិនិត្យមើលថាអ្នកបានប្រើ Environment Variable ត្រឹមត្រូវ ហើយ Environment នោះត្រូវបានជ្រើសរើស។
* **\`403 Forbidden\`:**
    * **មូលហេតុ:** អ្នកត្រូវបាន Authenticated (Server ស្គាល់អ្នក) ប៉ុន្តែអ្នកមិនមានសិទ្ធិ (Authorization) គ្រប់គ្រាន់ដើម្បីចូលប្រើ Resource នោះទេ។
    * **ដំណោះស្រាយ:**
        * ពិនិត្យមើល Role ឬ Permissions របស់ Account ដែលអ្នកកំពុងប្រើ។
        * API Endpoint អាចទាមទារ Scope ឬ Permissions ជាក់លាក់�।
        * ទាក់ទង Backend Developer ដើម្បីសុំសិទ្ធិចូលប្រើ។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: GET Request ជាមួយ API Key (in Header)
នេះជាឧទាហរណ៍នៃការកំណត់ API Key នៅក្នុង Header សម្រាប់ Request ។
\`\`\`text
// Method: GET
// URL: https://api.example.com/data
// Authorization Tab:
//   Type: API Key
//   Key: X-API-Key
//   Value: {{my_api_key}}
//   Add to: Header

// Postman will send this header:
// X-API-Key: YOUR_ACTUAL_API_KEY_VALUE

// Expected Response:
// Status: 200 OK
// Body: { "message": "Data retrieved successfully." }
\`\`\`

### ឧទាហរណ៍ ២: POST Request ជាមួយ Bearer Token
នេះជាឧទាហរណ៍នៃការកំណត់ Bearer Token សម្រាប់ Request ។
\`\`\`text
// Method: POST
// URL: https://api.example.com/users
// Authorization Tab:
//   Type: Bearer Token
//   Token: {{my_bearer_token}}
// Body Tab: raw (JSON)
//   { "name": "Test User" }

// Postman will send this header:
// Authorization: Bearer YOUR_ACTUAL_BEARER_TOKEN_VALUE

// Expected Response:
// Status: 201 Created
// Body: { "id": "user-123", "name": "Test User" }
\`\`\`

### ឧទាហរណ៍ ៣: Basic Auth
នេះជាឧទាហរណ៍នៃការកំណត់ Basic Authentication ។
\`\`\`text
// Method: GET
// URL: https://api.example.com/protected-resource
// Authorization Tab:
//   Type: Basic Auth
//   Username: {{basic_auth_username}}
//   Password: {{basic_auth_password}}

// Postman will send this header:
// Authorization: Basic <Base64_Encoded_Username:Password>

// Expected Response:
// Status: 200 OK
// Body: { "message": "Access granted." }
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `Authentication` គឺជាដំណើរការនៃការធ្វើអ្វី?',
      options: [
        'កំណត់សិទ្ធិចូលប្រើរបស់អ្នកប្រើប្រាស់',
        'បញ្ជាក់អត្តសញ្ញាណរបស់អ្នកប្រើប្រាស់',
        'អ៊ិនគ្រីបទិន្នន័យ',
        'ទាញយកទិន្នន័យពី Server'
      ],
      correct: 1,
      explanation: 'Authentication គឺជាដំណើរការនៃការបញ្ជាក់អត្តសញ្ញាណរបស់អ្នកប្រើប្រាស់ ឬ Client ។'
    },
    {
      question: 'តើ `Authorization` គឺជាដំណើរការនៃការធ្វើអ្វី?',
      options: [
        'បញ្ជាក់អត្តសញ្ញាណរបស់អ្នកប្រើប្រាស់',
        'កំណត់សិទ្ធិចូលប្រើរបស់អ្នកប្រើប្រាស់ទៅកាន់ Resource ជាក់លាក់',
        'បង្កើត Token សុវត្ថិភាព',
        'ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Authorization គឺជាដំណើរការនៃការកំណត់សិទ្ធិចូលប្រើរបស់អ្នកប្រើប្រាស់ ឬ Client ទៅកាន់ Resource ជាក់លាក់�।'
    },
    {
      question: 'តើ `API Key` អាចត្រូវបានបញ្ជូននៅក្នុងផ្នែកណាខ្លះនៃ HTTP Request?',
      options: [
        'តែនៅក្នុង Request Body',
        'តែនៅក្នុង URL Path',
        'នៅក្នុង Headers, Query Parameters, ឬ Request Body',
        'តែនៅក្នុង Response Headers'
      ],
      correct: 2,
      explanation: 'API Key អាចត្រូវបានបញ្ជូននៅក្នុង Headers, Query Parameters, ឬ Request Body ។'
    },
    {
      question: 'តើ `Bearer Token` ជាធម្មតាត្រូវបានបញ្ជូននៅក្នុង Header មួយណា?',
      options: [
        '`Content-Type`',
        '`Authorization`',
        '`Accept`',
        '`User-Agent`'
      ],
      correct: 1,
      explanation: '`Bearer Token` ត្រូវបានបញ្ជូននៅក្នុង Header `Authorization` ក្នុងទម្រង់ `Authorization: Bearer <TOKEN>` ។'
    },
    {
      question: 'តើ `Basic Auth` បញ្ជូន Username និង Password ក្នុងទម្រង់បែបណា?',
      options: [
        'Plain Text',
        'MD5 Hashed',
        'Base64 Encoded',
        'Encrypted with AES-256'
      ],
      correct: 2,
      explanation: 'Basic Auth បញ្ជូន Username និង Password ដែលបាន Encode ជា Base64 ។'
    },
    {
      question: 'តើ `Status Code` 401 Unauthorized មានន័យដូចម្តេច?',
      options: [
        'Server មានបញ្ហា',
        'អ្នកមិនមានសិទ្ធិចូលប្រើ Resource នោះទេ',
        'Request មិនមាន Authentication Credentials ត្រឹមត្រូវ ឬមិនបានផ្តល់ទាល់តែសោះ',
        'Resource មិនត្រូវបានរកឃើញ'
      ],
      correct: 2,
      explanation: '`401 Unauthorized` មានន័យថា Request មិនមាន Authentication Credentials ត្រឹមត្រូវ ឬមិនបានផ្តល់ទាល់តែសោះ។'
    },
    {
      question: 'តើ `Status Code` 403 Forbidden មានន័យដូចម្តេច?',
      options: [
        'Request មិនត្រឹមត្រូវ',
        'អ្នកត្រូវបាន Authenticated ប៉ុន្តែមិនមានសិទ្ធិចូលប្រើ Resource នោះទេ',
        'Server មិនអាចដំណើរការ Request បាន',
        'API Key មិនត្រឹមត្រូវ'
      ],
      correct: 1,
      explanation: '`403 Forbidden` មានន័យថាអ្នកត្រូវបាន Authenticated ប៉ុន្តែអ្នកមិនមានសិទ្ធិ (Authorization) គ្រប់គ្រាន់ដើម្បីចូលប្រើ Resource នោះទេ�।'
    },
    {
      question: 'ហេតុអ្វីបានជាការប្រើប្រាស់ `Environment Variables` សម្រាប់ Tokens និង Keys ត្រូវបានណែនាំ?',
      options: [
        'ដើម្បីធ្វើឱ្យ Requests ដំណើរការលឿនជាងមុន',
        'ដើម្បីជៀសវាងការ Hardcode Tokens និងបង្កើនភាពបត់បែន',
        'ដើម្បីកាត់បន្ថយទំហំ Response',
        'ដើម្បីធ្វើឱ្យ API Key ផ្លាស់ប្តូរដោយស្វ័យប្រវត្តិ'
      ],
      correct: 1,
      explanation: 'ការប្រើប្រាស់ Environment Variables ជៀសវាងការ Hardcode Tokens ក្នុង Requests និងអនុញ្ញាតឱ្យផ្លាស់ប្តូរពួកវាបានយ៉ាងងាយស្រួលសម្រាប់ Environments ផ្សេងៗគ្នា�।'
    },
    {
      question: 'តើ Tab មួយណាដែលអ្នកនឹងប្រើដើម្បីកំណត់ Authentication ក្នុង Postman?',
      options: [
        'Params',
        'Headers',
        'Body',
        'Authorization'
      ],
      correct: 3,
      explanation: 'អ្នកនឹងប្រើ Tab "Authorization" ដើម្បីកំណត់ Authentication ក្នុង Postman ។'
    },
    {
      question: 'តើ `OAuth 2.0` គឺជា Framework សម្រាប់អ្វី?',
      options: [
        'ការរចនា Database',
        'ការផ្ទៀងផ្ទាត់ និងការអនុញ្ញាត',
        'ការធ្វើតេស្ត Performance',
        'ការបង្កើត Frontend UI'
      ],
      correct: 1,
      explanation: '`OAuth 2.0` គឺជា Framework ដ៏ស្មុគស្មាញសម្រាប់ Authorization ដែលអនុញ្ញាតឱ្យ Third-party Applications ទទួលបានសិទ្ធិចូលប្រើ Resources ។'
    },
    {
      question: 'តើ `JWT` តំណាងឱ្យអ្វី?',
      options: [
        'Java Web Token',
        'JSON Web Type',
        'JSON Web Token',
        'JavaScript Web Test'
      ],
      correct: 2,
      explanation: '`JWT` តំណាងឱ្យ JSON Web Token ដែលជាប្រភេទ Token ដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់ Bearer Authentication ។'
    },
    {
      question: 'តើអ្នកអាចកំណត់ `Environment Variables` ក្នុង Postman ដោយរបៀបណា?',
      options: [
        'ដោយផ្ទាល់នៅក្នុង URL',
        'នៅក្នុង Tab "Headers" របស់ Request',
        'នៅក្នុង Environment Manager (រូបតំណាងភពផែនដី)',
        'នៅក្នុង Response Body'
      ],
      correct: 2,
      explanation: 'អ្នកអាចកំណត់ `Environment Variables` នៅក្នុង Environment Manager (រូបតំណាងភពផែនដី) នៅជ្រុងខាងស្តាំខាងលើនៃ Postman ។'
    },
    {
      question: 'តើការដោះស្រាយកំហុស 401 Unauthorized ដំបូងអ្នកគួរពិនិត្យអ្វី?',
      options: [
        'Internet Connection របស់អ្នក',
        'Syntax របស់ Request Body',
        'Authentication Type និង Token/Key របស់អ្នក',
        'Response Size'
      ],
      correct: 2,
      explanation: 'សម្រាប់ការដោះស្រាយកំហុស 401 Unauthorized ដំបូងអ្នកគួរពិនិត្យ Authentication Type និង Token/Key របស់អ្នក�।'
    },
    {
      question: 'តើ `Authentication` ឆ្លើយសំណួរថា "តើអ្នកជានរណា?" ឬ "តើអ្នកមានសិទ្ធិធ្វើអ្វី?" ?',
      options: [
        '"តើអ្នកជានរណា?"',
        '"តើអ្នកមានសិទ្ធិធ្វើអ្វី?"',
        'ទាំងពីរ',
        'គ្មានមួយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`Authentication` ឆ្លើយសំណួរថា "តើអ្នកជានរណា?" ។'
    },
    {
      question: 'តើ `Authorization` ឆ្លើយសំណួរថា "តើអ្នកជានរណា?" ឬ "តើអ្នកមានសិទ្ធិធ្វើអ្វី?" ?',
      options: [
        '"តើអ្នកជានរណា?"',
        '"តើអ្នកមានសិទ្ធិធ្វើអ្វី?"',
        'ទាំងពីរ',
        'គ្មានមួយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`Authorization` ឆ្លើយសំណួរថា "តើអ្នកមានសិទ្ធិធ្វើអ្វី?" ។'
    },
    {
      question: 'តើ `Basic Auth` ត្រូវបានចាត់ទុកថាជាវិធីសាស្ត្រ Authentication ដែលមានសុវត្ថិភាពខ្ពស់សម្រាប់ Production ដោយគ្មាន HTTPS ដែរឬទេ?',
      options: [
        'បាទ/ចាស៎ ជានិច្ចកាល',
        'ទេ វាមិនត្រូវបានណែនាំទេព្រោះ Credentials ងាយនឹងត្រូវបានស្ទាក់ចាប់',
        'តែសម្រាប់ APIs តូចៗប៉ុណ្ណោះ',
        'តែសម្រាប់ Internal Use ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'ទេ Basic Auth មិនត្រូវបានចាត់ទុកថាមានសុវត្ថិភាពខ្ពស់សម្រាប់ Production ដោយគ្មាន HTTPS ទេ ព្រោះ Credentials ត្រូវបាន Encode តែប៉ុណ្ណោះ មិនមែន Encrypt ទេ�।'
    },
    {
      question: 'តើ `Initial Value` និង `Current Value` ក្នុង Environment Variable របស់ Postman ខុសគ្នាដូចម្តេច?',
      options: [
        'ពួកវាដូចគ្នា',
        '`Initial Value` ត្រូវបាន Sync ទៅ Cloud ចំណែក `Current Value` មិនត្រូវបាន Sync ទេ',
        '`Initial Value` សម្រាប់ Local Use ចំណែក `Current Value` សម្រាប់ Team Use',
        '`Initial Value` សម្រាប់ Read-Only ចំណែក `Current Value` សម្រាប់ Write'
      ],
      correct: 1,
      explanation: '`Initial Value` ត្រូវបាន Sync ទៅ Cloud និងចែករំលែកជាមួយក្រុម ខណៈ `Current Value` គឺសម្រាប់តែ Local Use ប៉ុណ្ណោះ ហើយមិនត្រូវបាន Sync ទេ។ នេះជួយរក្សាទុក Sensitive Data ឱ្យមានសុវត្ថិភាព'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: ការកំណត់ Authentication ក្នុង Postman

លំហាត់នេះនឹងណែនាំអ្នកពីរបៀបកំណត់ប្រភេទ Authentication ផ្សេងៗគ្នា (API Key, Bearer Token, Basic Auth) ក្នុង Postman ដោយប្រើ JSONPlaceholder API និង Environment Variables សម្រាប់ Credentials ។

**លក្ខខណ្ឌជាមុន:**
* Postman Desktop App ឬ Web Client (ចូលគណនី Postman ឥតគិតថ្លៃ)។
* Workspace មួយនៅក្នុង Postman (ឧ. "My Authentication Lab")។

## 1. រៀបចំ Environment Variables
1. **បង្កើត Environment**:
   * នៅក្នុង Workspace, ចុចលើរូបតំណាង **ភពផែនដី (Environments)** នៅ Sidebar ខាងឆ្វេង។
   * ចុច **"+"** ដើម្បីបង្កើត Environment ថ្មី។
   * ដាក់ឈ្មោះ Environment: \`Auth_Testing\`។
   * ចុច **Add**។
2. **បន្ថែម Variables**:
   * នៅក្នុង Environment \`Auth_Testing\`, បន្ថែម Variables ដូចខាងក្រោម:
     * **Variable**: \`my_api_key\`, **Initial Value**: \`supersecretapikey123\`, **Current Value**: \`supersecretapikey123\`
     * **Variable**: \`my_bearer_token\`, **Initial Value**: \`mock_jwt_token_abc123xyz\`, **Current Value**: \`mock_jwt_token_abc123xyz\`
     * **Variable**: \`basic_auth_username\`, **Initial Value**: \`postman\`, **Current Value**: \`postman\`
     * **Variable**: \`basic_auth_password\`, **Initial Value**: \`password\`, **Current Value**: \`password\`
   * ចុច **Save**។
3. **ជ្រើសរើស Environment**:
   * នៅជ្រុងខាងស្តាំខាងលើនៃ Postman, ជ្រើសរើស \`Auth_Testing\` ពី Dropdown។

## 2. បង្កើត Collection
1. **បង្កើត Collection**:
   * ចុច **New > Collection**។
   * **Name**: \`Authentication Lab\`
   * **Description**: \`Collection for testing Authentication methods with JSONPlaceholder API\`
   * ចុច **Create**។

## 3. បង្កើត Requests ជាមួយ Authentication
### a. GET Request ជាមួយ API Key (in Header)
1. **បង្កើត Request**:
   * ចុច **New > HTTP Request**។
   * **Name**: \`Get Post API Key\`
   * **Collection**: \`Authentication Lab\`
2. **កំណត់ Request**:
   * **Method**: \`GET\`
   * **URL**: \`https://jsonplaceholder.typicode.com/posts/1\`
   * **Authorization Tab**:
     * **Type**: \`API Key\`
     * **Key**: \`X-API-Key\`
     * **Value**: \`{{my_api_key}}\`
     * **Add to**: \`Header\`
   * **Body**: None
3. **បញ្ជូន Request**:
   * ចុច **Send**។
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`200 OK\` (JSONPlaceholder មិនទាមទារ Authentication ពិតប្រាកដ ប៉ុន្តែ Header ត្រូវបានបញ្ជូន)
   * **Body**: JSON មាន \`id: 1\`, \`userId\`, \`title\`, \`body\`
   * **Headers**: ពិនិត្យ Request Headers, គួរមាន \`X-API-Key: supersecretapikey123\`
   * **Time & Size**: កត់ចំណាំ Response Time (ឧ. 50ms) និង Size (ឧ. 200B)
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`Authentication Lab\`.

### b. GET Request ជាមួយ Bearer Token
1. **បង្កើត Request**:
   * ចុច **New > HTTP Request**។
   * **Name**: \`Get User Bearer Token\`
   * **Collection**: \`Authentication Lab\`
2. **កំណត់ Request**:
   * **Method**: \`GET\`
   * **URL**: \`https://jsonplaceholder.typicode.com/users/1\`
   * **Authorization Tab**:
     * **Type**: \`Bearer Token\`
     * **Token**: \`{{my_bearer_token}}\`
   * **Body**: None
3. **បញ្ជូន Request**:
   * ចុច **Send**។
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`200 OK\`
   * **Body**: JSON មាន \`id: 1\`, \`name\`, \`username\`, \`email\`
   * **Headers**: ពិនិត្យ Request Headers, គួរមាន \`Authorization: Bearer mock_jwt_token_abc123xyz\`
   * **Time & Size**: កត់ចំណាំ Response Time និង Size
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`Authentication Lab\`.

### c. GET Request ជាមួយ Basic Auth
1. **បង្កើត Request**:
   * ចុច **New > HTTP Request**។
   * **Name**: \`Get Album Basic Auth\`
   * **Collection**: \`Authentication Lab\`
2. **កំណត់ Request**:
   * **Method**: \`GET\`
   * **URL**: \`https://jsonplaceholder.typicode.com/albums/1\`
   * **Authorization Tab**:
     * **Type**: \`Basic Auth\`
     * **Username**: \`{{basic_auth_username}}\`
     * **Password**: \`{{basic_auth_password}}\`
   * **Body**: None
3. **បញ្ជូន Request**:
   * ចុច **Send**
4. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`200 OK\`
   * **Body**: JSON មាន \`id: 1\`, \`userId\`, \`title\`
   * **Headers**: ពិនិត្យ Request Headers, គួរមាន \`Authorization: Basic cG9zdG1hbjpwYXNzd29yZA==\`
   * **Time & Size**: កត់ចំណាំ Response Time និង Size
5. **រក្សាទុក Request**:
   * ចុច **Save** ទៅកាន់ Collection \`Authentication Lab\`.

## 4. សង្កេតកំហុស Authentication
1. **កែប្រែ Environment Variable**:
   * ចូលទៅ Environment \`Auth_Testing\`។
   * ប្តូរ **Current Value** របស់ \`my_api_key\` ទៅជា \`wrongkey\`។
   * ចុច **Save**។
2. **បញ្ជូន Request API Key ម្តងទៀត**:
   * បើក Request \`Get Post API Key\` ពី Collection \`Authentication Lab\`។
   * ចុច **Send**។
3. **ផ្ទៀងផ្ទាត់ Response**:
   * **Status Code**: \`200 OK\` (JSONPlaceholder មិនទាមទារ Authentication ពិតប្រាកដ ប៉ុន្តែនៅក្នុង API ពិតប្រាកដ អ្នកអាចទទួលបាន \`401 Unauthorized\` ឬ \`403 Forbidden\`)
   * **Headers**: ពិនិត្យ Request Headers, គួរមាន \`X-API-Key: wrongkey\`
4. **កំណត់ Current Value ត្រឡប់**:
   * ប្តូរ **Current Value** របស់ \`my_api_key\` ត្រឡប់ទៅ \`supersecretapikey123\` និង **Save**។

## 5. រៀបចំ Collection
1. **រៀបចំ Collection**:
   * នៅក្នុង Sidebar, ចុច **Authentication Lab** Collection។
   * បញ្ជាក់ Description: \`Collection for testing Authentication methods with JSONPlaceholder API\`។
2. **ផ្ទៀងផ្ទាត់**:
   * បើក \`Get Post API Key\`, \`Get User Bearer Token\`, និង \`Get Album Basic Auth\` Requests ពី Collection។
   * ចុច **Send** ម្តងទៀតសម្រាប់ Request នីមួយៗ ដើម្បីផ្ទៀងផ្ទាត់ថា Response នៅតែត្រឹមត្រូវ។

> **គន្លឹះ:** ប្រើ Tab "Headers" ក្នុង Response Panel ដើម្បីផ្ទៀងផ្ទាត់ថា Authentication Headers ត្រូវបានបញ្ជូនត្រឹមត្រូវ។ កត់ចំណាំ Response Time និង Size ដើម្បីវាយតម្លៃ Performance។
`,
    solution: `
# ដំណោះស្រាយ: ការកំណត់ Authentication ក្នុង Postman

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## 1. Environment Variables
* **Environment**: \`Auth_Testing\`
* **Variables**:
  * \`my_api_key\`: Initial & Current Value: \`supersecretapikey123\`
  * \`my_bearer_token\`: Initial & Current Value: \`mock_jwt_token_abc123xyz\`
  * \`basic_auth_username\`: Initial & Current Value: \`postman\`
  * \`basic_auth_password\`: Initial & Current Value: \`password\`
* **Verification**: Environment \`Auth_Testing\` ត្រូវបានជ្រើសរើសនៅ Dropdown ខាងស្តាំខាងលើ។

## 2. Collection
* **Collection**: \`Authentication Lab\`
* **Description**: \`Collection for testing Authentication methods with JSONPlaceholder API\`
* **Verification**: Collection មាន Requests ទាំងអស់រក្សាទុក។

## 3. Requests ជាមួយ Authentication
### a. GET Request ជាមួយ API Key (in Header)
* **Request**:
  * Name: \`Get Post API Key\`
  * Collection: \`Authentication Lab\`
  * Method: \`GET\`
  * URL: \`https://jsonplaceholder.typicode.com/posts/1\`
  * Authorization:
    * Type: \`API Key\`
    * Key: \`X-API-Key\`
    * Value: \`{{my_api_key}}\`
    * Add to: \`Header\`
  * Body: None
* **Response**:
  * Status: \`200 OK\`
  * Body (Example):
    \`\`\`json
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit..."
    }
    \`\`\`
  * Headers (Request):
    \`\`\`text
    X-API-Key: supersecretapikey123
    // ... other headers
    \`\`\`
  * Time & Size: ឧ. 50ms, 200B

### b. GET Request ជាមួយ Bearer Token
* **Request**:
  * Name: \`Get User Bearer Token\`
  * Collection: \`Authentication Lab\`
  * Method: \`GET\`
  * URL: \`https://jsonplaceholder.typicode.com/users/1\`
  * Authorization:
    * Type: \`Bearer Token\`
    * Token: \`{{my_bearer_token}}\`
  * Body: None
* **Response**:
  * Status: \`200 OK\`
  * Body (Example):
    \`\`\`json
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      ...
    }
    \`\`\`
  * Headers (Request):
    \`\`\`text
    Authorization: Bearer mock_jwt_token_abc123xyz
    // ... other headers
    \`\`\`
  * Time & Size: ឧ. 50ms, 300B

### c. GET Request ជាមួយ Basic Auth
* **Request**:
  * Name: \`Get Album Basic Auth\`
  * Collection: \`Authentication Lab\`
  * Method: \`GET\`
  * URL: \`https://jsonplaceholder.typicode.com/albums/1\`
  * Authorization:
    * Type: \`Basic Auth\`
    * Username: \`{{basic_auth_username}}\`
    * Password: \`{{basic_auth_password}}\`
  * Body: None
* **Response**:
  * Status: \`200 OK\`
  * Body (Example):
    \`\`\`json
    {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    }
    \`\`\`
  * Headers (Request):
    \`\`\`text
    Authorization: Basic cG9zdG1hbjpwYXNzd29yZA==
    // ... other headers
    \`\`\`
  * Time & Size: ឧ. 50ms, 150B

## 4. កំហុស Authentication
* **Request**: \`Get Post API Key\` (ជាមួយ \`my_api_key\` ប្តូរទៅ \`wrongkey\`)
* **Response**:
  * Status: \`200 OK\` (JSONPlaceholder មិនទាមទារ Authentication)
  * Headers (Request):
    \`\`\`text
    X-API-Key: wrongkey
    // ... other headers
    \`\`\`
  * Note: នៅក្នុង API ពិតប្រាកដ, Status Code អាចជា \`401 Unauthorized\` ឬ \`403 Forbidden\`
* **Verification**: \`my_api_key\` ត្រូវបានកំណត់ត្រឡប់ទៅ \`supersecretapikey123\`។

## 5. លទ្ធផលផ្ទៀងផ្ទាត់
* **Environment**: \`Auth_Testing\` មាន Variables ត្រឹមត្រូវ។
* **Collection**: \`Authentication Lab\` មាន Requests ទាំងអស់ (\`Get Post API Key\`, \`Get User Bearer Token\`, \`Get Album Basic Auth\`) និង Description។
* **Requests**:
  * \`Get Post API Key\`: \`200 OK\`, JSON មាន \`id: 1\`, Request Header មាន \`X-API-Key\`។
  * \`Get User Bearer Token\`: \`200 OK\`, JSON មាន \`id: 1\`, Request Header មាន \`Authorization: Bearer\`។
  * \`Get Album Basic Auth\`: \`200 OK\`, JSON មាន \`id: 1\`, Request Header មាន \`Authorization: Basic\`។
* **កំហុស Authentication**: បានសាកល្បង \`wrongkey\`, ឃើញ Request Header ផ្លាស់ប្តូរ។

លំហាត់នេះបានបង្ហាញពីរបៀបកំណត់ Authentication (API Key, Bearer Token, Basic Auth) ក្នុង Postman ដោយប្រើ Environment Variables និង Collection ដើម្បីរៀបចំ និងផ្ទៀងផ្ទាត់ Requests�।
`
  }
};

export default PostmanLesson2_3Content;