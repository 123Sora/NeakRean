import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson5_1Content: LessonContent = {
  title: 'API Documentation (ឯកសារ API)',
  objectives: [
    'យល់ពីសារៈសំខាន់នៃឯកសារ API',
    'បង្ផើតឯកសារ API ដោយប្រើ Postman',
    'បន្ថែម Descriptions ទៅ Collections, Folders, Requests',
    'បន្ថែម Examples សម្រាប់ Documentation',
    'បោះពុម្ព និងចែករំលែកឯកសារ API',
    'ធ្វើបច្ចុប្បន្នភាពឯកសារ API'
  ],
  content: `
# API Documentation (ឯកសារ API) 📖

**API Documentation** ពន្យល់ពីរបៀបដំណើរការ និងការប្រើប្រាស់ API។ វាជួយ Developers យល់ពី Endpoints, Methods, Parameters, Request Bodies, និង Responses។ Postman ផ្តល់ឧបករណ៍សម្រាប់បង្ផើត Interactive Documentation ពី Collections។

## 1. សារៈសំខាន់ 💡

* **ភាពងាយស្រួល:** ជួយ Developers ប្រើ API យ៉ាងរលូន។
* **ការសហការ:** ធានាការយល់ដឹងរួមក្នុងក្រុម។
* **សន្សំពេល:** កាត់បន្ថយការសាកសួរ និង Debugging។
* **ការធ្វើតេស្ត:** ផ្តល់មូលដ្ឋានសម្រាប់ Test Cases។
* **ការថែទាំ:** គាំទ្រការពង្រីក API នាពេលអនាគត។

## 2. Postman និង API Documentation 🛠️

Postman បង្ផើត Documentation ដោយប្រើ:
* **Descriptions:** ពី Collections, Folders, Requests។
* **Examples:** Saved Examples ជា Response Examples។
* **Parameters & Headers:** ទាញ Query Parameters, Path Variables, Headers ដោយស្វ័យប្រវត្តិ។
* **Request Body:** បង្ហាញរចនាសម្ព័ន្ធ Body។

## 3. បង្ផើត Documentation ពី Collection 🚀

1. Sidebar > **Collections** > **...** > **View Documentation**។
2. Preview Documentation នៅ Web Interface។
3. **Publish:** ជ្រើស Workspace, Visibility (Public/Private), Domain។

## 4. បន្ថែម Descriptions 📝

Descriptions ពន្យល់គោលបំណង API Elements។

* **Collection:**
  1. Sidebar > Collection > Tab "Overview" > "Add a description"។
  2. សរសេរដោយ Markdown។
* **Folder:**
  1. Folder ក្នុង Collection > Tab "Overview" > "Add a description"។
  2. សរសេរដោយ Markdown�।
* **Request:**
  1. បើក Request > ក្រោម URL > "Add a description"។
  2. សរសេរដោយ Markdown។

## 5. បន្ថែម Examples 📊

Saved Examples បង្ហាញ Responses សម្រាប់ Scenarios។

1. **បើក Request**។
2. **Send Request** > **Save Response** / **Save Example**។
3. **កែ Example:** កំណត់ Name (ឧ. "Success", "Error 404"), Status Code, Headers, Body។
4. **Save Example**។

## 6. បោះពុម្ព និងចែករំលែក 🌐

1. Collections > **...** > **View Documentation** > **Publish**។
2. **កំណត់:**
   * Visibility: Public (Link) / Private (Team)។
   * Version: ជ្រើស Collection Version។
   * Domain: Postman / Custom Domain។
3. **Publish** > ទទួល Public Link។

## 7. ធ្វើបច្ចុប្បន្នភាព Documentation 🔄

1. **កែ Collection:** បន្ថែម/កែ Requests, Descriptions, Examples។
2. **View Documentation** > **Update** នៅ Web Interface។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: Request Description
\`\`\`text
[Request: Get Products]
-------------------------------------------------
| GET | {{base_url}}/products                   | [Send] [Save]
-------------------------------------------------
| Description (Markdown)                        |
| ### Get Products                             |
| Retrieves a list of all products.            |
| **Parameters:**                              |
| - None                                       |
| **Responses:**                              |
| - 200 OK: Product list.                     |
| - 404 Not Found: No products available.     |
-------------------------------------------------
\`\`\`

### ឧទាហរណ៍ ២: Published Documentation
\`\`\`text
[Product Management API]
-------------------------------------------------
| Version 1.0.0                                |
| Overview: Manages products and catalog.      |
| -------------------------------------------- |
| GET /products                                |
|   Description: Retrieves all products.       |
|   Parameters: None                           |
|   Example Response (200 OK):                 |
|   [                                          |
|     { "id": 1, "name": "Laptop", ... },     |
|     { "id": 2, "name": "Mouse", ... }       |
|   ]                                          |
| POST /products                               |
|   Description: Creates a new product.        |
|   Request Body:                              |
|   { "name": "...", "price": 99.99 }          |
|   Example Response (201 Created):            |
|   { "id": 101, "name": "...", ... }          |
-------------------------------------------------
\`\`\`
`
  ],
  quiz: [
    {
      question: 'សារៈសំខាន់នៃ API Documentation?',
      options: [
        'បង្កើន API Speed',
        'ជួយ Developers ប្រើ API ងាយស្រួល',
        'កាត់បន្ថយ Database Size',
        'ការពារ API Attacks'
      ],
      correct: 1,
      explanation: 'API Documentation ជួយ Developers យល់ និងប្រើ API យ៉ាងងាយស្រួល។'
    },
    {
      question: 'Postman បង្ផើត Documentation ពីអ្វី?',
      options: [
        'Request URLs',
        'Response Bodies',
        'Descriptions, Examples, Parameters, Headers, Body',
        'Test Scripts'
      ],
      correct: 2,
      explanation: 'Postman ប្រើ Descriptions, Examples, Parameters, Headers, Body ពី Collections។'
    },
    {
      question: 'Description ប្រើ Markup អ្វី?',
      options: ['HTML', 'CSS', 'Markdown', 'JavaScript'],
      correct: 2,
      explanation: 'Description ប្រើ Markdown។'
    },
    {
      question: 'Saved Examples ដើរតួជាអ្វី?',
      options: [
        'Request Body Templates',
        'Response Examples',
        'Authentication Tokens',
        'Environment Variables'
      ],
      correct: 1,
      explanation: 'Saved Examples ជា Response Examples។'
    },
    {
      question: 'អាច Publish Documentation ជា Public/Private បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Public Only', 'Private Only'],
      correct: 0,
      explanation: 'អាច Publish ជា Public (Link) ឬ Private (Team)។'
    },
    {
      question: 'Documentation Auto Update ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ, ត្រូវ Update', 'Minor Changes', 'Major Changes'],
      correct: 1,
      explanation: 'ទេ, ត្រូវចុច "Update" នៅ Web Interface។'
    },
    {
      question: 'ចូល Documentation View យ៉ាងម៉េច?',
      options: [
        'Click Send',
        'Click Runner',
        'Click ... > View Documentation',
        'Environment Manager'
      ],
      correct: 2,
      explanation: 'ចុច ... > View Documentation។'
    },
    {
      question: 'Documentation កាត់បន្ថយ Debugging Time ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Small APIs', 'Problematic APIs'],
      correct: 0,
      explanation: 'Documentation កាត់បន្ថយ Debugging Time។'
    },
    {
      question: 'Postman ផ្តល់ Custom Domain ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Public Only', 'Private Only'],
      correct: 0,
      explanation: 'Postman ផ្តល់ Postman/Custom Domain។'
    },
    {
      question: 'Documentation ជួយ Team Alignment ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Only If Read', 'Only If Written'],
      correct: 0,
      explanation: 'Documentation ជួយ Team Alignment។'
    },
    {
      question: 'បន្ថែម Examples យ៉ាងម៉េច?',
      options: [
        'Write in Description',
        'Save Response/Save Example',
        'Pre-request Script',
        'Test Script'
      ],
      correct: 1,
      explanation: 'បន្ថែម Examples ដោយ Save Response/Save Example។'
    },
    {
      question: 'Postman Documentation Interactive ទេ?',
      options: ['បាទ/ចាស៎', 'Static Page', 'Public Only', 'Private Only'],
      correct: 0,
      explanation: 'Postman Documentation ជា Interactive�।'
    },
    {
      question: 'Markdown ប្រើសម្រាប់អ្វី?',
      options: [
        'Design Layout',
        'Write Test Scripts',
        'Format Descriptions',
        'Set Headers'
      ],
      correct: 2,
      explanation: 'Markdown ប្រើ Format Descriptions។'
    },
    {
      question: 'Private Documentation មានន័យអ្វី?',
      options: [
        'Only You',
        'Team with Workspace Access',
        'API Key Required',
        'No One'
      ],
      correct: 1,
      explanation: 'Private Documentation សម្រាប់ Team ដែលមាន Workspace Access។'
    },
    {
      question: 'Documentation ជួយ Test Cases ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Manual Tests', 'Automated Tests'],
      correct: 0,
      explanation: 'Documentation ផ្តល់មូលដ្ឋានសម្រាប់ Test Cases�।'
    },
    {
      question: 'អាចកំណត់ Version សម្រាប់ Documentation បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Public Only', 'Private Only'],
      correct: 0,
      explanation: 'អាចកំណត់ Version សម្រាប់ Documentation។'
    },
    {
      question: 'Postman Auto Extract Query Parameters/Path Variables ទេ?',
      options: ['បាទ/ចាស៎', 'Manual Input', 'GET Requests', 'Public APIs'],
      correct: 0,
      explanation: 'Postman Auto Extract Query Parameters/Path Variables។'
    },
    {
      question: 'Update Documentation ត្រូវការ Internet ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'First Publish', 'Custom Domain'],
      correct: 0,
      explanation: 'Update Documentation ត្រូវការ Internet (Hosted on Postman Cloud)។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍: API Documentation

ភារកិច្ចនេះណែនាំការបង្ផើត Interactive Documentation។

## លក្ខខណ្ឌ
* Postman Desktop/Web (គណនីឥតគិតថ្លៃ)។
* Workspace (ឧ. "My API Tests")។

## 1. រៀបចំ Collection/Descriptions/Requests
1. **Collection: My_Product_API**
   * **Description (Markdown):**
     \`\`\`markdown
     # Product Management API
     Manages products: retrieve, create, update.
     **Key Features:**
     - Retrieve product catalog
     - Add new products
     - Update product information
     \`\`\`
2. **Request: Get All Products**
   * Method: \`GET\`
   * URL: \`https://jsonplaceholder.typicode.com/posts\`
   * **Description:**
     \`\`\`markdown
     ### Get All Products
     Retrieves all products.
     **Responses:**
     - 200 OK: Product array
     \`\`\`
   * **Save Example:**
     * Name: \`Successful Products List\`
     * Status: \`200 OK\`
     * Body:
       \`\`\`json
       [
         { "id": 1, "name": "Laptop Pro", "price": 1500, "category": "Electronics" },
         { "id": 2, "name": "Wireless Mouse", "price": 30, "category": "Accessories" }
       ]
       \`\`\`
3. **Request: Create New Product**
   * Method: \`POST\`
   * URL: \`https://jsonplaceholder.typicode.com/posts\`
   * Headers: \`Content-Type: application/json\`
   * Body:
     \`\`\`json
     {
       "title": "New Product Title",
       "body": "Detailed description of the new product.",
       "userId": 1
     }
     \`\`\`
   * **Description:**
     \`\`\`markdown
     ### Create New Product
     Adds a new product.
     **Request Body:**
     - title (string, required): Product name
     - body (string, required): Description
     - userId (number, required): User ID
     **Responses:**
     - 201 Created: Product created
     \`\`\`
   * **Save Example:**
     * Name: \`Product Created Successfully\`
     * Status: \`201 Created\`
     * Body:
       \`\`\`json
       {
         "id": 101,
         "title": "New Product Title",
         "body": "Detailed description of the new product.",
         "userId": 1
       }
       \`\`\`

## 2. បោះពុម្ព Documentation
1. Collections > **...** > **View Documentation** > **Publish**។
2. **កំណត់:**
   * Visibility: Public
   * Version: Current
3. **Publish** > Copy Public Link។

## 3. ធ្វើបច្ចុប្បន្នភាព Documentation (Optional)
1. **កែ Description (Get All Products):**
   \`\`\`markdown
   ### Get All Products
   Retrieves all products.
   **It now includes a new field: category.**
   **Responses:**
   - 200 OK: Product array
   \`\`\`
2. **Update:** View Documentation > **Update**។
3. Verify Updated Description។

## 4. ឯកសារយោង (Optional)
* Screenshot: Collection Description, Request Description, Examples, Published Documentation
`,
    solution: `
# ដំណោះស្រាយ: API Documentation

## 1. Collection/Descriptions/Requests
* **Collection:** \`My_Product_API\`
  * Description: Product Management API Overview
* **Requests:**
  * **Get All Products:** \`GET https://jsonplaceholder.typicode.com/posts\`
    * Description: Retrieves all products
    * Example: \`Successful Products List\` (200 OK, Product Array)
  * **Create New Product:** \`POST https://jsonplaceholder.typicode.com/posts\`
    * Description: Adds new product
    * Example: \`Product Created Successfully\` (201 Created, Product Object)

## 2. Published Documentation
* **Visibility:** Public
* **Link:** Generated Public Link
* **Content:** Includes Collection/Request Descriptions, Examples

## 3. Updated Documentation
* **Change:** Added "category" field note to Get All Products Description
* **Result:** Updated Documentation reflects new Description

## 4. Summary
Documentation បង្ហាញ Endpoints, Descriptions, Examples ដែលជួយ Developers ប្រើ API យ៉ាងមានប្រសិទ្ធភាព។
`
  }
};

export default PostmanLesson5_1Content;