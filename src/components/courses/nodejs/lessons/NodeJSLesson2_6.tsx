import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson2_6Content: LessonContent = {
  title: 'HTTP Module',
  objectives: [
    'យល់ដឹងអំពី `http` Module នៅក្នុង Node.js',
    'ស្វែងយល់ពីការបង្កើត HTTP Server និង Client',
    'រៀនគ្រប់គ្រង HTTP Requests និង Responses',
    'អនុវត្តការបង្កើត Simple Web Server',
    'ស្គាល់ការប្រើ `http` Module ជាមួយ Routing មូលដ្ឋាន'
  ],
  content: `
# HTTP Module 🌐

---

## 1. តើ \`http\` Module ជាអ្វី? 🤔

* **និយមន័យ:** \`http\` Module គឺជា Core Module នៅក្នុង Node.js ដែលប្រើសម្រាប់បង្កើត HTTP Servers និង Clients ដើម្បីគ្រប់គ្រង Web Requests។
* **មុខងារសំខាន់ៗ:**
  * \`http.createServer()\`: បង្កើត HTTP Server។
  * \`request\`: គ្រប់គ្រង Incoming Requests។
  * \`response\`: បញ្ជូន Responses ទៅ Client។
  * \`http.get()\`: បង្កើត  HTTP Client Requests។

---

## 2. ការបង្កើត HTTP Server 🛠️

* **និយមន័យ:** HTTP Server ជា Application ដែលស្តាប់ Requests ពី Clients (ឧ. Browsers) និងបញ្ជូន Responses។
* **ជំហានសំខាន់ៗ:**
  * បង្កើត Server ជាមួយ \`http.createServer()\`។
  * គ្រប់គ្រង Requests និង Responses។
  * ចាប់ផ្តើម Server នៅ Port ជាក់លាក់ (ឧ. 3000)។

---

## 3. ការគ្រប់គ្រង Requests និង Responses 🌟

* **Request Object (\`req\`):** ផ្ទុកព័ត៌មានអំពី Request ដូចជា URL, Method, និង Headers។
* **Response Object (\`res\`):** ប្រើសម្រាប់បញ្ជូន Data, Status Codes, និង Headers ទៅ Client។
* **Routing:** កំណត់ផ្លូវផ្សេងៗ (ឧ. \`/\`, \`/about\`) ដើម្បីបញ្ជូន Responses ផ្សេងៗ។

---

## 4. ការបង្កើត  HTTP Client ⚙️

* **និយមន័យ:** HTTP Client ប្រើ \`http.get()\` ឬ \`http.request()\` ដើម្បីផ្ញើ Requests ទៅ Servers ផ្សេងៗ។
* **ឧទាហរណ៍:** ទាញយក Data ពី External API។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📡

* **Web Server:** បង្កើត  Server ដែលបញ្ជូន HTML Pages ឬ JSON Data។
* **API Client:** បញ្ជូន Requests ទៅ External APIs ដើម្បីទាញយក Data។

---
> **គន្លឹះ:** ប្រើ Port 3000 ឬ Ports ផ្សេងទៀតដែលមិនប៉ះទង្គិច និងប្រើ \`res.end()\` ដើម្បីបញ្ចប់ Response។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Simple HTTP Server

បង្កើត File ឈ្មោះ \`server.js\`:

\`\`\`javascript
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});
server.listen(3000, () => console.log('Server running on port 3000'));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* ចូលទៅ \`http://localhost:3000\` នៅ Browser ដើម្បីឃើញ "Hello, Node.js!"។

# ឧទាហរណ៍ ២: HTTP Server ជាមួយ Routing

បង្កើត File ឈ្មោះ \`routing.js\`:

\`\`\`javascript
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.writeHead(404);
    res.end('Page Not Found');
  }
});
server.listen(3000, () => console.log('Server running on port 3000'));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node routing.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/\` → "Home Page"
* \`http://localhost:3000/about\` → "About Page"
* \`http://localhost:3000/other\` → "Page Not Found"

# ឧទាហរណ៍ ៣: HTTP Client Request

បង្កើត File ឈ្មោះ \`client.js\`:

\`\`\`javascript
const http = require('http');
http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log('Response:', JSON.parse(data)));
}).on('error', (err) => console.error('Error:', err));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node client.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Response: { userId: 1, id: 1, title: '...', body: '...' }
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `http` Module ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង File Paths',
        'បង្កើត HTTP Servers និង Clients',
        'គ្រប់គ្រង System Memory',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: '`http` Module ប្រើសម្រាប់បង្កើត HTTP Servers និង Clients ដើម្បីគ្រប់គ្រង Web Requests។'
    },
    {
      question: 'តើ `http.createServer()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន HTTP Requests',
        'បង្កើត HTTP Server',
        'គ្រប់គ្រង File Operations',
        'ទាញយក System Information'
      ],
      correct: 1,
      explanation: '`http.createServer()` ប្រើសម្រាប់បង្កើត HTTP Server ដើម្បីស្តាប់ Requests�।'
    },
    {
      question: 'តើ Request Object (`req`) ផ្ទុកព័ត៌មានអ្វី?',
      options: [
        'System Memory',
        'URL, Method, និង Headers',
        'File Paths',
        'Database Records'
      ],
      correct: 1,
      explanation: 'Request Object (`req`) ផ្ទុកព័ត៌មានអំពី Request ដូចជា URL, Method, និង Headers។'
    },
    {
      question: 'តើ Response Object (`res`) ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញយក System Information',
        'បញ្ជូន Data និង Status Codes ទៅ Client',
        'គ្រប់គ្រង File Operations',
        'បង្កើត HTTP Client'
      ],
      correct: 1,
      explanation: 'Response Object (`res`) ប្រើសម្រាប់បញ្ជូន Data, Status Codes, និង Headers ទៅ Client។'
    },
    {
      question: 'តើ `res.writeHead()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ឈប់ Server',
        'កំណត់ Status Code និង Headers',
        'បញ្ជូន Request',
        'គ្រប់គ្រង File Paths'
      ],
      correct: 1,
      explanation: '`res.writeHead()` កំណត់ Status Code និង Headers សម្រាប់ Response។'
    },
    {
      question: 'តើ `res.end()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ចាប់ផ្តើម Server',
        'បញ្ចប់ Response',
        'បញ្ជូន Request',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: '`res.end()` បញ្ចប់ Response និងបញ្ជូន Data ទៅ Client។'
    },
    {
      question: 'តើ `http.get()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត HTTP Server',
        'បញ្ជូន HTTP GET Request ជា Client',
        'គ្រប់គ្រង File Operations',
        'ទាញយក System Information'
      ],
      correct: 1,
      explanation: '`http.get()` ប្រើសម្រាប់បញ្ជូន HTTP GET Request ជា Client ទៅ Server ផ្សេង។'
    },
    {
      question: 'តើ Routing នៅក្នុង HTTP Server មានន័យដូចម្តេច?',
      options: [
        'ការគ្រប់គ្រង File Paths',
        'ការកំណត់ផ្លូវផ្សេងៗសម្រាប់ Responses',
        'ការគ្រប់គ្រង System Memory',
        'ការបង្កើត Database'
      ],
      correct: 1,
      explanation: 'Routing កំណត់ផ្លូវផ្សេងៗ (ឧ. `/`, `/about`) ដើម្បីបញ្ជូន Responses ផ្សេងៗ។'
    },
    {
      question: 'តើ Status Code 404 មានន័យដូចម្តេច?',
      options: [
        'Request ជោគជ័យ',
        'Page Not Found',
        'Server Error',
        'Redirect'
      ],
      correct: 1,
      explanation: 'Status Code 404 បង្ហាញថា Resource ឬ Page មិនត្រូវបានរកឃើញ។'
    },
    {
      question: 'តើ `req.url` ផ្តល់ព័ត៌មានអ្វី?',
      options: [
        'System Platform',
        'URL នៃ Request',
        'File Extension',
        'Memory Usage'
      ],
      correct: 1,
      explanation: '`req.url` ផ្តល់ URL នៃ Request ដូចជា `/` ឬ `/about`។'
    },
    {
      question: 'តើ `http` Module តម្រូវឱ្យ Import ដែរឬទេ?',
      options: [
        'ជា Global Module មិនចាំបាច់ Import',
        'តម្រូវឱ្យ Import ជាមួយ `require("http")`',
        'តម្រូវឱ្យដំឡើងជាមួយ NPM',
        'មានតែនៅក្នុង Browser'
      ],
      correct: 1,
      explanation: '`http` Module ជា Core Module ដែលតម្រូវឱ្យ Import ជាមួយ `require("http")`។'
    },
    {
      question: 'តើ Method ណាមួយខាងក្រោមជា `http` Module?',
      options: ['path.join()', 'fs.readFile()', 'http.createServer()', 'os.platform()'],
      correct: 2,
      explanation: '`http.createServer()` ជា Method នៃ `http` Module សម្រាប់បង្កើត Server។'
    },
    {
      question: 'តើឧទាហរណ៍ណាមួយខាងក្រោមប្រើ `http` Module?',
      options: [
        'បង្កើត File Path',
        'បង្កើត Web Server',
        'ទាញយក System Memory',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: 'បង្កើត Web Server ជាការប្រើ `http` Module។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: HTTP Module

គោលបំណង: អនុវត្តការប្រើ \`http\` Module ដើម្បីបង្កើត HTTP Server និង Client។

1. **បង្កើត Simple HTTP Server**:
   * បង្កើត File \`simple-server.js\`:
     \`\`\`javascript
     const http = require('http');
     const server = http.createServer((req, res) => {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('Welcome to Node.js Server!');
     });
     server.listen(3000, () => console.log('Server running on port 3000'));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node simple-server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000\`។

2. **បង្កើត HTTP Server ជាមួយ Routing**:
   * បង្កើត File \`routing-server.js\`:
     \`\`\`javascript
     const http = require('http');
     const server = http.createServer((req, res) => {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       if (req.url === '/') {
         res.end('Home Page');
       } else if (req.url === '/contact') {
         res.end('Contact Page');
       } else {
         res.writeHead(404);
         res.end('Page Not Found');
       }
     });
     server.listen(3000, () => console.log('Server running on port 3000'));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node routing-server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/\`, \`/contact\`, និង \`/other\`។

3. **បង្កើត HTTP Client**:
   * បង្កើត File \`client-request.js\`:
     \`\`\`javascript
     const http = require('http');
     http.get('http://jsonplaceholder.typicode.com/users/1', (res) => {
       let data = '';
       res.on('data', (chunk) => data += chunk);
       res.on('end', () => console.log('User:', JSON.parse(data)));
     }).on('error', (err) => console.error('Error:', err));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node client-request.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល។

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ \`simple-server.js\`, \`routing-server.js\`, និង \`client-request.js\`។
`,
    solution: `
# ដំណោះស្រាយ៖ HTTP Module

## ជំហានទី ១: បង្កើត Simple HTTP Server
* **simple-server.js**:
  \`\`\`javascript
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Node.js Server!');
  });
  server.listen(3000, () => console.log('Server running on port 3000'));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node simple-server.js
  # Output: Server running on port 3000
  \`\`\`
  នៅ \`http://localhost:3000\`: "Welcome to Node.js Server!"

## ជំហានទី ២: បង្កើត HTTP Server ជាមួយ Routing
* **routing-server.js**:
  \`\`\`javascript
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/') {
      res.end('Home Page');
    } else if (req.url === '/contact') {
      res.end('Contact Page');
    } else {
      res.writeHead(404);
      res.end('Page Not Found');
    }
  });
  server.listen(3000, () => console.log('Server running on port 3000'));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node routing-server.js
  # Output: Server running on port 3000
  \`\`\`
  * \`http://localhost:3000/\` → "Home Page"
  * \`http://localhost:3000/contact\` → "Contact Page"
  * \`http://localhost:3000/other\` → "Page Not Found"

## ជំហានទី ៣: បង្កើត HTTP Client
* **client-request.js**:
  \`\`\`javascript
  const http = require('http');
  http.get('http://jsonplaceholder.typicode.com/users/1', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => console.log('User:', JSON.parse(data)));
  }).on('error', (err) => console.error('Error:', err));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node client-request.js
  # Output:
  User: { id: 1, name: '...', email: '...', ... }
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **simple-server.js**: "Welcome to Node.js Server!" នៅ \`http://localhost:3000\`
* **routing-server.js**: Responses ត្រឹមត្រូវសម្រាប់ \`/\`, \`/contact\`, និង 404 សម្រាប់ផ្លូវផ្សេង។
* **client-request.js**: User Data ពី API។
`
  }
};

export default NodeJSLesson2_6Content;