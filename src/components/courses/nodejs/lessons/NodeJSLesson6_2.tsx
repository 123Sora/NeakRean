import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson6_2Content: LessonContent = {
  title: 'Logging',
  objectives: [
    'យល់ដឹងអំពីសារៈសំខាន់នៃ Logging នៅក្នុង Node.js',
    'ស្វែងយល់ពីការប្រើ Winston Library សម្រាប់ Logging',
    'រៀនបង្កើត Custom Logger ជាមួយ Levels ផ្សេងៗ',
    'អនុវត្ត Logging នៅក្នុង Express.js Application',
    'គ្រប់គ្រង Log Files និង Console Output'
  ],
  content: `
# Logging 📜

---

## 1. តើ Logging ជាអ្វី? 🤔

* **និយមន័យ:** **Logging** គឺជាដំណើរការនៃការកត់ត្រាព័ត៌មានអំពី **Events** (ព្រឹត្តិការណ៍) ឬ **Errors** (កំហុស) ដែលកើតឡើងនៅក្នុង Application របស់យើង។
* **ឧទាហរណ៍:** ការ Log **HTTP Requests** ដែលចូលមក, **Errors** ដែលកើតឡើង, ឬ **Database Operations** (ប្រតិបត្តិការលើ Database) ដើម្បីតាមដានលំហូរទិន្នន័យ និងបញ្ហា។
* **អត្ថប្រយោជន៍:** ជួយសម្រួលដល់ការ **Debugging** (ស្វែងរកនិងជួសជុលកំហុស), **Monitoring** (តាមដានដំណើរការ Application), និង **Auditing** (ពិនិត្យមើលសកម្មភាពកន្លងមក)។

---

## 2. Winston Library 🛠️

* **Winston:** គឺជា **Logging Library** ដ៏ពេញនិយម និងមានអនុភាពសម្រាប់ Node.js ដែលផ្តល់នូវភាពបត់បែនខ្ពស់ក្នុងការគ្រប់គ្រង Logs។
* **លក្ខណៈពិសេស:**
    * **Log Levels:** អនុញ្ញាតឱ្យយើងកំណត់កម្រិតសំខាន់នៃសារ Log ដូចជា **error**, **warn**, **info**, **http**, **verbose**, **debug**, **silly**។
    * **Multiple Transports:** អាចបញ្ជូន Logs ទៅកាន់គោលដៅផ្សេងៗគ្នា ដូចជា **Console** (Terminal), **File** (ឯកសារ), ឬសូម្បីតែ **Database**។
    * **Custom Formats:** អាចកំណត់ទ្រង់ទ្រាយ (format) របស់ Logs តាមតម្រូវការរបស់យើង (ឧទាហរណ៍ JSON, plain text)។
* **Installation:** ដើម្បីដំឡើង Winston ប្រើ Command ខាងក្រោម៖ \`npm install winston\`

---

## 3. Log Levels និង Transports 🌟

* **Log Levels:** កំណត់ពីភាពសំខាន់នៃសារ Log ពីខ្ពស់ទៅទាប៖
    * **error:** ប្រើសម្រាប់កំហុសធ្ងន់ធ្ងរដែលទាមទារការយកចិត្តទុកដាក់ភ្លាមៗ។
    * **warn:** ប្រើសម្រាប់ព្រមានអំពីបញ្ហាដែលអាចកើតឡើងនាពេលអនាគត។
    * **info:** ប្រើសម្រាប់ព័ត៌មានទូទៅអំពីលំហូរធម្មតារបស់ Application។
    * **http:** ប្រើសម្រាប់ Log HTTP Request និង Response។
    * **verbose:** ប្រើសម្រាប់ព័ត៌មានលម្អិតបន្ថែម។
    * **debug:** ប្រើសម្រាប់ព័ត៌មានលម្អិតសម្រាប់ Debugging ។
    * **silly:** ប្រើសម្រាប់ព័ត៌មានលម្អិតបំផុត (least important) ។
* **Transports:** គឺជាទិសដៅដែល Logs នឹងត្រូវបានបញ្ជូនទៅ។ Winston ផ្តល់ Transports ជាច្រើនសម្រាប់ Console, File, HTTP, Streams, និងសូម្បីតែ Database។
* **Syntax:** ដើម្បីបង្កើត Logger មួយជាមួយ Winston យើងប្រើ \`winston.createLogger()\` ហើយកំណត់ \`level\`, \`format\` និង \`transports\`។
    \`\`\`javascript
    const winston = require('winston');

    const logger = winston.createLogger({
      level: 'info', // កំណត់កម្រិត Log លំនាំដើម
      format: winston.format.json(), // កំណត់ទ្រង់ទ្រាយ Log ជា JSON
      transports: [
        new winston.transports.Console(), // បញ្ជូន Logs ទៅ Console
        new winston.transports.File({ filename: 'app.log' }) // បញ្ជូន Logs ទៅ File ឈ្មោះ app.log
      ]
    });
    \`\`\`

---

## 4. Logging នៅក្នុង Express.js ⚙️

* **Middleware:** យើងអាចប្រើ Winston នៅក្នុង Express **Middleware** ដើម្បី Log រាល់ **HTTP Requests** ដែលចូលមកកាន់ Server របស់យើង។ នេះជួយឱ្យយើងមើលឃើញលំហូរនៃការស្នើសុំបានយ៉ាងងាយស្រួល។
* **Error Logging:** វាមានសារៈសំខាន់ខ្លាំងណាស់ក្នុងការ Log Errors នៅក្នុង **Error Middleware** របស់យើង ដើម្បីកត់ត្រារាល់កំហុសដែលកើតឡើងនៅក្នុង Application និងជួយដល់ការ Debugging ។
* **ឧទាហរណ៍:** Log រាល់ Method (GET, POST), URL របស់ Request និង Status Code របស់ Response ។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **Request Logging:** ការ Log Method, URL, និង Timestamp នៃរាល់ HTTP Request ចូលមក។ នេះជួយតាមដានសកម្មភាពអ្នកប្រើប្រាស់ និងរកឃើញ Request ណាដែលបង្កបញ្ហា។
* **Error Logging:** ការ Log **Stack Trace** (ទីតាំងកូដដែលបង្កកំហុស) របស់ Errors ទាំងនៅក្នុង File និង Console គឺចាំបាច់ណាស់សម្រាប់ការវិភាគស៊ីជម្រៅនៅពេលមានបញ្ហា។

---
> **គន្លឹះ:** ប្រើ **Log Levels** ផ្សេងៗគ្នាដើម្បីបែងចែកភាពសំខាន់នៃ Logs និងរក្សា **Log Files** ឱ្យមានទំហំសមស្រប។ ឧទាហរណ៍ កំណត់ \`error\` Logs ទៅកាន់ File ផ្សេងដាច់ដោយឡែកពី \`info\` Logs ដើម្បីងាយស្រួលក្នុងការត្រួតពិនិត្យបញ្ហា។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Logger ជាមួយ Winston

បង្កើត File \`logger.js\`:

\`\`\`javascript
const winston = require('winston');

// កំណត់ Logger Configuration
const logger = winston.createLogger({
  level: 'info', // កំណត់កម្រិត Log លំនាំដើម
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // បន្ថែម Timestamp ជាមួយ format
    winston.format.json() // កំណត់ទ្រង់ទ្រាយ Log ជា JSON
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // បន្ថែមពណ៌លើ Console Output
        winston.format.printf(
          info => \`\${info.timestamp} \${info.level}: \${info.message}\` // កំណត់ format សម្រាប់ Console
        )
      )
    }),
    new winston.transports.File({ filename: 'app.log' }) // បញ្ជូន Logs ទៅ File ឈ្មោះ app.log
  ]
});

// ប្រើ Logger ដើម្បី Log សារ
logger.info('Application started successfully.');
logger.error('An unexpected error occurred!');
\`\`\`

ដំណើរការ File:

\`\`\`bash
node logger.js
\`\`\`

**លទ្ធផល**:
* **Console:** (ជាមួយពណ៌ និង format ដែលបានកំណត់)
    \`\`\`
    2024-07-29 17:30:50 info: Application started successfully.
    2024-07-29 17:30:50 error: An unexpected error occurred!
    \`\`\`
* **File \`app.log\`:** (ជាទ្រង់ទ្រាយ JSON)
    \`\`\`json
    {"level":"info","message":"Application started successfully.","timestamp":"2024-07-29 17:30:50"}
    {"level":"error","message":"An unexpected error occurred!","timestamp":"2024-07-29 17:30:50"}
    \`\`\`

# ឧទាហរណ៍ ២: Request Logging ជាមួយ Express

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const winston = require('winston'); // Import Winston
const app = express();
const port = 3000;

// បង្កើត Logger instance (អាច reuse logger.js ឬបង្កើតថ្មី)
const logger = winston.createLogger({
  level: 'http', // កំណត់កម្រិត Log សម្រាប់ HTTP requests
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(
          info => \`\${info.timestamp} \${info.level}: \${info.message}\`
        )
      )
    }),
    new winston.transports.File({ filename: 'access.log' }) // ប្រើ File ផ្សេងសម្រាប់ access logs
  ]
});

// Middleware សម្រាប់ Logging រាល់ Request
app.use((req, res, next) => {
  logger.http(\`Request: \${req.method} \${req.url}\`); // Log HTTP Request
  next();
});

// Define a simple GET route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World from Express!' });
});

// Start the server
app.listen(port, () => logger.info(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* ចូលទៅ \`http://localhost:3000/\` ក្នុង Browser → JSON: \`{ "message": "Hello World from Express!" }\`
* **Console:**
    \`\`\`
    2024-07-29 17:30:50 info: Server running at http://localhost:3000
    2024-07-29 17:30:52 http: Request: GET /
    \`\`\`
* **File \`access.log\`:**
    \`\`\`json
    {"level":"info","message":"Server running at http://localhost:3000","timestamp":"2024-07-29 17:30:50"}
    {"level":"http","message":"Request: GET /","timestamp":"2024-07-29 17:30:52"}
    \`\`\`

# ឧទាហរណ៍ ៣: Error Logging

បន្ថែម Error Handling នៅក្នុង \`server.js\` ខាងលើ (ដាក់ក្រោយ Routes ទាំងអស់):

\`\`\`javascript
// Error Route សម្រាប់សាកល្បង
app.get('/error', (req, res, next) => {
  const err = new Error('This is a test error!');
  // យើងអាច Log error ភ្លាមៗ ឬបញ្ជូនវាទៅ Error Middleware
  logger.error(\`Caught an error on /error route: \${err.message}\`, { stack: err.stack });
  next(err); // បញ្ជូន error ទៅ Error Handling Middleware
});

// Error Handling Middleware (ត្រូវតែមាន 4 arguments)
app.use((err, req, res, next) => {
  // Log the error with its stack trace
  logger.error(\`Global Error Handler: \${err.message}\`, { stack: err.stack, url: req.originalUrl, method: req.method });
  
  // Send a generic error response to the client
  res.status(500).json({ error: 'Something went wrong on the server!' });
});
\`\`\`

ដំណើរការ File ឡើងវិញ:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* ចូលទៅ \`http://localhost:3000/error\` → JSON: \`{ "error": "Something went wrong on the server!" }\`
* **Console:** (អ្នកនឹងឃើញ Log 2 ដង ពី Route ផ្ទាល់ និងពី Global Error Handler)
    \`\`\`
    2024-07-29 17:30:50 info: Server running at http://localhost:3000
    2024-07-29 17:30:55 http: Request: GET /error
    2024-07-29 17:30:55 error: Caught an error on /error route: This is a test error! {"stack":"...","timestamp":"..."}
    2024-07-29 17:30:55 error: Global Error Handler: This is a test error! {"stack":"...","url":"/error","method":"GET","timestamp":"..."}
    \`\`\`
* **File \`access.log\`:**
    \`\`\`json
    {"level":"info","message":"Server running at http://localhost:3000","timestamp":"2024-07-29 17:30:50"}
    {"level":"http","message":"Request: GET /error","timestamp":"2024-07-29 17:30:55"}
    {"level":"error","message":"Caught an error on /error route: This is a test error!","stack":"Error: This is a test error!\\n    at ...","timestamp":"2024-07-29 17:30:55"}
    {"level":"error","message":"Global Error Handler: This is a test error!","stack":"Error: This is a test error!\\n    at ...","url":"/error","method":"GET","timestamp":"2024-07-29 17:30:55"}
    \`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Logging ជាអ្វី?',
      options: [
        'ការបង្កើត Database',
        'ការកត់ត្រាព័ត៌មានអំពី Events ឬ Errors',
        'ការផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់',
        'ការបម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Logging ជាការកត់ត្រាព័ត៌មានអំពី Events ឬ Errors សម្រាប់ Debugging និង Monitoring។'
    },
    {
      question: 'តើ Winston ជា Library សម្រាប់អ្វី?',
      options: [
        'Authentication',
        'Logging',
        'Database Connection',
        'Routing'
      ],
      correct: 1,
      explanation: 'Winston ជា Logging Library សម្រាប់ Node.js។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីដំឡើង Winston?',
      options: [
        'npm install express',
        'npm install winston',
        'npm install mongoose',
        'npm install bcrypt'
      ],
      correct: 1,
      explanation: '`npm install winston` ប្រើសម្រាប់ដំឡើង Winston។'
    },
    {
      question: 'តើ Log Level ណាដែលប្រើសម្រាប់ HTTP Requests?',
      options: ['error', 'warn', 'info', 'http'],
      correct: 3,
      explanation: 'Log Level `http` ប្រើសម្រាប់ Log HTTP Requests។'
    },
    {
      question: 'តើ Transport ក្នុង Winston មានន័យអ្វី?',
      options: [
        'កន្លែងផ្ទុក Logs',
        'ការបង្កើត Routes',
        'ការភ្ជាប់ Database',
        'ការផ្ទៀងផ្ទាត់ Token'
      ],
      correct: 0,
      explanation: 'Transport ជាកន្លែងផ្ទុក Logs ដូចជា Console ឬ File។'
    },
    {
      question: 'តើ Log Level ណាដែលមានភាពសំខាន់បំផុត?',
      options: ['silly', 'debug', 'error', 'info'],
      correct: 2,
      explanation: 'Log Level `error` មានភាពសំខាន់បំផុត។'
    },
    {
      question: 'តើ Winston Format ណាដែលប្រើសម្រាប់ JSON Output?',
      options: [
        'winston.format.simple()',
        'winston.format.json()',
        'winston.format.text()',
        'winston.format.log()'
      ],
      correct: 1,
      explanation: '`winston.format.json()` ប្រើសម្រាប់ JSON Output។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Logging?',
      options: [
        'បង្កើត Dynamic HTML',
        'ជួយ Debugging និង Monitoring',
        'ភ្ជាប់ Database',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Logging ជួយ Debugging, Monitoring, និង Auditing។'
    },
    {
      question: 'តើ Request Logging គួរត្រូវបានធ្វើនៅទីណា?',
      options: [
        'ក្នុង Database',
        'ក្នុង Middleware',
        'ក្នុង Static Files',
        'ក្នុង Routes តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'Request Logging គួរត្រូវបានធ្វើនៅក្នុង Middleware។'
    },
    {
      question: 'តើ File Transport នៅក្នុង Winston ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក Logs ក្នុង File',
        'បញ្ជូន HTTP Requests',
        'ភ្ជាប់ Database',
        'បង្កើត Token'
      ],
      correct: 0,
      explanation: 'File Transport រក្សាទុក Logs ក្នុង File។'
    },
    {
      question: 'តើ `logger.error()` ប្រើសម្រាប់អ្វី?',
      options: [
        'Log HTTP Requests',
        'Log Errors',
        'Log Info Messages',
        'Log Debug Messages'
      ],
      correct: 1,
      explanation: '`logger.error()` ប្រើសម្រាប់ Log Errors។'
    },
    {
      question: 'តើ Timestamp នៅក្នុង Winston បន្ថែមដោយ Format ណា?',
      options: [
        'winston.format.json()',
        'winston.format.timestamp()',
        'winston.format.simple()',
        'winston.format.log()'
      ],
      correct: 1,
      explanation: '`winston.format.timestamp()` បន្ថែម Timestamp ទៅ Logs។'
    },
    {
      question: 'តើ Logging គួរត្រូវបានប្រើនៅក្នុង Environment ណា?',
      options: [
        'Development តែប៉ុណ្ណោះ',
        'Production តែប៉ុណ្ណោះ',
        'ទាំង Development និង Production',
        'Testing តែប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Logging គួរត្រូវបានប្រើទាំង Development និង Production។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Logging

គោលបំណង: អនុវត្តការប្រើ Winston សម្រាប់ Logging នៅក្នុង Express.js។

1.  **បង្កើត Logger ជាមួយ Winston**:
    * បង្កើត Folder \`logging-app\` និង Initialize npm:
        \`\`\`bash
        mkdir logging-app
        cd logging-app
        npm init -y
        npm install express winston
        \`\`\`
    * បង្កើត File \`logger.js\` ហើយបញ្ចូលកូដខាងក្រោម (នេះនឹងជា Centralized Logger របស់យើង):
        \`\`\`javascript
        const winston = require('winston');

        const logger = winston.createLogger({
          level: 'info', // កំណត់កម្រិត Log លំនាំដើម
          format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // បន្ថែម Timestamp
            winston.format.json() // កំណត់ទ្រង់ទ្រាយ Log ជា JSON
          ),
          transports: [
            new winston.transports.Console({
              format: winston.format.combine(
                winston.format.colorize(), // បន្ថែមពណ៌លើ Console Output
                winston.format.printf(
                  info => \`\${info.timestamp} \${info.level}: \${info.message}\` // កំណត់ format សម្រាប់ Console
                )
              )
            }),
            new winston.transports.File({ filename: 'app.log', level: 'info' }), // Logs កម្រិត info ឡើងទៅ
            new winston.transports.File({ filename: 'errors.log', level: 'error' }) // Logs កម្រិត error ទៅកាន់ File ផ្សេង
          ],
          exceptionHandlers: [ // ចាប់ Uncaught Exceptions
            new winston.transports.File({ filename: 'exceptions.log' })
          ],
          rejectionHandlers: [ // ចាប់ Unhandled Promise Rejections
            new winston.transports.File({ filename: 'rejections.log' })
          ]
        });

        module.exports = logger;
        \`\`\`
    * បង្កើត File \`server.js\`:
        \`\`\`javascript
        const express = require('express');
        const logger = require('./logger'); // Import Logger ដែលយើងបានបង្កើត
        const app = express();
        const port = 3000;

        // Middleware សម្រាប់ Logging រាល់ Request ទៅកាន់ logger.http
        app.use((req, res, next) => {
          logger.http(\`Request: \${req.method} \${req.url}\`);
          next();
        });

        // Route មេ
        app.get('/', (req, res) => {
          res.json({ message: 'Hello World from Express!' });
        });

        // Route សម្រាប់បង្កាត់ Error ដោយចេតនា
        app.get('/trigger-error', (req, res, next) => {
          const err = new Error('This is an intentional test error!');
          // យើងអាច Log វាដោយផ្ទាល់ ឬគ្រាន់តែបោះវាទៅ next()
          next(err); 
        });

        // Error Handling Middleware (ត្រូវតែជា Middleware ចុងក្រោយ និងមាន 4 arguments)
        app.use((err, req, res, next) => {
          // Log the error using our logger.error
          logger.error(\`Global Error Handler caught: \${err.message}\`, { 
            stack: err.stack, 
            url: req.originalUrl, 
            method: req.method,
            ip: req.ip
          });
          
          res.status(500).json({ error: 'Something went wrong on our server!' });
        });

        // ចាប់ផ្តើម Server
        app.listen(port, () => logger.info(\`Server running at http://localhost:\${port}\`));
        \`\`\`
    * ដំណើរការ File:
        \`\`\`bash
        node server.js
        \`\`\`
    * ត្រួតពិនិត្យលទ្ធផល:
        * ចូលទៅ \`http://localhost:3000/\`
        * ពិនិត្យ File \`app.log\` (សម្រាប់ info, http) និង \`errors.log\` (សម្រាប់ errors)។

2.  **សាកល្បង Error Route និង Unhandled Rejection**:
    * ចូលទៅ \`http://localhost:3000/trigger-error\` ក្នុង Browser ។ ពិនិត្យ Console និង File \`errors.log\`។
    * **សាកល្បង Unhandled Promise Rejection (optional):** បន្ថែមកូដខាងក្រោមក្នុង \`server.js\` របស់អ្នក **ក្រៅពី Route ឬ Middleware** ដើម្បីបង្កាត់ Promise Rejection ។
        \`\`\`javascript
        // កូដនេះនឹងបង្កាត់ Unhandled Promise Rejection
        // DO NOT use this in production, for testing purposes only
        setTimeout(() => {
          Promise.reject(new Error('This is an unhandled promise rejection!'));
        }, 5000); // បង្កាត់ error ក្រោយ 5 វិនាទី
        \`\`\`
    * Restart \`node server.js\` រួចរង់ចាំ 5 វិនាទី។ ពិនិត្យ File \`rejections.log\`។

3.  **ចែករំលែកលទ្ធផល**:
    * កត់សម្គាល់លទ្ធផលនៃ Request Logging និង Error Logging ទាំង Console និង File។
    * ពន្យល់ពីភាពខុសគ្នារវាង Logs នៅក្នុង \`app.log\`, \`errors.log\`, \`exceptions.log\` និង \`rejections.log\`។
`,
    solution: `
# ដំណោះស្រាយ៖ Logging

## ជំហានទី ១ និង ២: Logger និង API

ខាងក្រោមនេះជាកូដ \`logger.js\` និង \`server.js\` ពេញលេញដែលបានកែសម្រួលដើម្បីរួមបញ្ចូលការគ្រប់គ្រង Log Levels, Multiple Transports, Error Routes, និង Unhandled Rejections។

* **logger.js** (Updated):
    \`\`\`javascript
    const winston = require('winston');

    const logger = winston.createLogger({
      level: 'info', // កំណត់កម្រិត Log លំនាំដើម
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // បន្ថែម Timestamp
        winston.format.json() // កំណត់ទ្រង់ទ្រាយ Log ជា JSON
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(), // បន្ថែមពណ៌លើ Console Output
            winston.format.printf(
              info => \`\${info.timestamp} \${info.level}: \${info.message}\` // កំណត់ format សម្រាប់ Console
            )
          )
        }),
        new winston.transports.File({ filename: 'app.log', level: 'info' }), // Logs កម្រិត info ឡើងទៅ
        new winston.transports.File({ filename: 'errors.log', level: 'error' }) // Logs កម្រិត error ទៅកាន់ File ផ្សេង
      ],
      exceptionHandlers: [ // ចាប់ Uncaught Exceptions (ឧ. ReferenceError)
        new winston.transports.File({ filename: 'exceptions.log' })
      ],
      rejectionHandlers: [ // ចាប់ Unhandled Promise Rejections
        new winston.transports.File({ filename: 'rejections.log' })
      ]
    });

    module.exports = logger;
    \`\`\`

* **server.js** (Updated):
    \`\`\`javascript
    const express = require('express');
    const logger = require('./logger'); // Import Logger ដែលយើងបានបង្កើត
    const app = express();
    const port = 3000;

    // Middleware សម្រាប់ Logging រាល់ Request ទៅកាន់ logger.http
    app.use((req, res, next) => {
      logger.http(\`Request: \${req.method} \${req.url}\`);
      next();
    });

    // Route មេ
    app.get('/', (req, res) => {
      res.json({ message: 'Hello World from Express!' });
    });

    // Route សម្រាប់បង្កាត់ Error ដោយចេតនា
    app.get('/trigger-error', (req, res, next) => {
      const err = new Error('This is an intentional test error!');
      // យើងគ្រាន់តែបោះ error ទៅ next() ដើម្បីឱ្យ Error Middleware ចាប់
      next(err); 
    });

    // Route សម្រាប់បង្កាត់ Uncaught Exception (ឧ. ReferenceError)
    app.get('/trigger-uncaught-exception', (req, res, next) => {
        // កូដនេះនឹងបង្កាត់ uncaught exception ដែលនឹងត្រូវបានចាប់ដោយ winston.exceptionHandlers
        nonExistentFunction(); 
        res.send('This should not be reached.');
    });

    // Error Handling Middleware (ត្រូវតែជា Middleware ចុងក្រោយ និងមាន 4 arguments)
    app.use((err, req, res, next) => {
      // Log the error using our logger.error
      logger.error(\`Global Error Handler caught: \${err.message}\`, { 
        stack: err.stack, 
        url: req.originalUrl, 
        method: req.method,
        ip: req.ip
      });
      
      res.status(500).json({ error: 'Something went wrong on our server!' });
    });

    // ចាប់ផ្តើម Server
    app.listen(port, () => logger.info(\`Server running at http://localhost:\${port}\`));

    // Optional: កូដនេះនឹងបង្កាត់ Unhandled Promise Rejection បន្ទាប់ពី 5 វិនាទី
    // សម្រាប់ការសាកល្បងតែប៉ុណ្ណោះ, កុំប្រើក្នុង Production 
    // setTimeout(() => {
    //   Promise.reject(new Error('This is an unhandled promise rejection from setTimeout!'));
    // }, 5000);
    \`\`\`

* **ដំណើរការ និងលទ្ធផល:**
    \`\`\`bash
    node server.js
    \`\`\`
    * **http://localhost:3000/**: នឹងឃើញ \`{"message":"Hello World from Express!"}\` ក្នុង Browser ហើយ logs នឹងលេចឡើងក្នុង Console និង \`app.log\`។
    * **http://localhost:3000/trigger-error**: នឹងឃើញ \`{"error":"Something went wrong on our server!"}\` ក្នុង Browser ហើយ error log នឹងលេចឡើងក្នុង Console និង \`errors.log\`។
    * **http://localhost:3000/trigger-uncaught-exception**: Server នឹងគាំង (crash) មួយភ្លែត ហើយ restart (បើប្រើ process manager)។ Error stack នឹងត្រូវបាន log ទៅ Console, \`errors.log\`, និង \`exceptions.log\`។
    * **Unhandled Promise Rejection (បើបានបើក comment កូដ):** រង់ចាំ 5 វិនាទីក្រោយចាប់ផ្តើម Server ។ Log នឹងលេចឡើងក្នុង Console និង \`rejections.log\` ។

## លទ្ធផលផ្ទៀងផ្ទាត់

* **Request Logging:** នៅពេលចូលទៅកាន់ \`/\` ឬ \`/trigger-error\` អ្នកនឹងឃើញ Log នៃ HTTP Request (GET) ទៅកាន់ Console (ជាមួយពណ៌) និងនៅក្នុង File \`app.log\` (ជា JSON)។
* **Error Logging:**
    * នៅពេលចូលទៅ \`/trigger-error\` អ្នកនឹងឃើញ Error Log លេចឡើងក្នុង Console និងនៅក្នុង File \`errors.log\`។
    * នៅពេលចូលទៅ \`/trigger-uncaught-exception\` អ្នកនឹងឃើញ Log នៃ Uncaught Exception ទាំងក្នុង Console, \`errors.log\`, និង File \`exceptions.log\`។
    * ប្រសិនបើអ្នកបានបើក comment កូដ Unhandled Promise Rejection, Log របស់វាលេចឡើងក្នុង Console និង File \`rejections.log\`។

---

តើអ្នកមានសំណួរអ្វីបន្ថែមអំពីការប្រើប្រាស់ Winston សម្រាប់ Logging នៅក្នុង Node.js ឬ Express Application ទេ?
`
  }
};

export default NodeJSLesson6_2Content;