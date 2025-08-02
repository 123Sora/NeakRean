import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson6_1Content: LessonContent = {
  title: 'Error Handling',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Error Handling នៅក្នុង Node.js',
    'ស្វែងយល់ពីការប្រើ try-catch សម្រាប់ Asynchronous Code',
    'រៀនបង្កើត Custom Error Classes',
    'អនុវត្ត Error Handling Middleware ជាមួយ Express.js',
    'គ្រប់គ្រង Database Errors នៅក្នុង API'
  ],
  content: `
# Error Handling 🚨

---

## 1. តើ Error Handling ជាអ្វី? 🤔

* **និយមន័យ:** **Error Handling** គឺជាដំណើរការនៃការចាប់ (catching) និងគ្រប់គ្រង (managing) កំហុស (errors) ដែលកើតឡើងនៅក្នុង Application របស់យើង ដើម្បីធានាថាវាដំណើរការបានរលូន និងផ្តល់ព័ត៌មានត្រឹមត្រូវទៅកាន់អ្នកប្រើប្រាស់។
* **ឧទាហរណ៍:** ការដោះស្រាយ **Database Connection Errors** (បញ្ហាភ្ជាប់ទៅ Database) ឬ **Invalid User Input** (ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ)។
* **អត្ថប្រយោជន៍:** ធ្វើឱ្យ Application មានភាពរឹងមាំ (**robust**) មិនងាយគាំង (crash) និងផ្តល់ **Feedback** ច្បាស់លាស់ដល់អ្នកប្រើប្រាស់ ឬអ្នកអភិវឌ្ឍន៍។

---

## 2. បច្ចេកទេស Error Handling 🛠️

* **try-catch:** ប្រើសម្រាប់ចាប់ Errors ក្នុង **Synchronous Code** និង **Asynchronous Code** (ជាពិសេសជាមួយ \`async/await\`)។ វាអនុញ្ញាតឱ្យយើងសរសេរកូដដែល "ព្យាយាម" ដំណើរការអ្វីមួយ ហើយ "ចាប់" កំហុសប្រសិនបើវាកើតឡើង។
* **Error Middleware:** គឺជា **Express Middleware** ពិសេសដែលមាន 4 Parameters (\`(err, req, res, next)\`) សម្រាប់គ្រប់គ្រង Errors ជាសកល (globally) នៅទូទាំង Application។
* **Custom Error Classes:** ការបង្កើត **Error Types** ផ្ទាល់ខ្លួនរបស់យើង ដើម្បីផ្តល់នូវភាពជាក់លាក់កាន់តែខ្លាំងទៅលើប្រភេទ Errors ដែលកើតឡើងនៅក្នុង Application។ នេះជួយឱ្យយើងអាចបែងចែក និងគ្រប់គ្រង Errors បានល្អប្រសើរ។

---

## 3. try-catch នៅក្នុង Asynchronous Code 🌟

* **Syntax:** នៅពេលប្រើ \`async/await\` នៅក្នុង JavaScript យើងអាចប្រើ \`try-catch\` Block ដូចទៅនឹង Synchronous Code ដែរ ដើម្បីចាប់ Errors ដែលបោះដោយ \`await\` operations។
    \`\`\`javascript
    async function fetchData() {
      try {
        const data = await someAsyncOperation(); // អាចបោះ Error
        return data;
      } catch (err) {
        // ចាប់ Error ដែលបានបោះដោយ someAsyncOperation()
        throw new Error('Failed to fetch data: ' + err.message); // បោះ Error ថ្មីសម្រាប់ upstream handler
      }
    }
    \`\`\`

---

## 4. Error Handling Middleware ជាមួយ Express ⚙️

* **Syntax:** **Express Error Middleware** មាន 4 Parameters \`(err, req, res, next)\`។ Express នឹងទទួលស្គាល់វាដោយស្វ័យប្រវត្តិថាជា Error Handler។
    \`\`\`javascript
    app.use((err, req, res, next) => {
      console.error(err.stack); // Log Error Stack សម្រាប់ Debugging
      const statusCode = err.statusCode || 500; // កំណត់ Status Code ពី Custom Error ឬ Default 500
      res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Something went wrong!',
        // បន្ថែមលក្ខណៈផ្សេងទៀតពី Custom Error បើមាន (ឧ. err.isOperational)
      });
    });
    \`\`\`
* **ឧទាហរណ៍:** គ្រប់គ្រង **Database Errors** (ដូចជាការភ្ជាប់បរាជ័យ) ឬ **Invalid Routes** (Route ដែលគ្មាន) ដែល Express នឹងបញ្ជូនទៅកាន់ Middleware នេះដោយស្វ័យប្រវត្តិ។

---

## 5. Custom Error Classes 📝

* **Syntax:** យើងអាចពង្រីក (extend) Class \`Error\` ដែលមានស្រាប់នៅក្នុង JavaScript ដើម្បីបង្កើត Error Class ផ្ទាល់ខ្លួន ដែលអាចផ្ទុកនូវព័ត៌មានបន្ថែមដូចជា \`statusCode\`។
    \`\`\`javascript
    class CustomError extends Error {
      constructor(message, statusCode) {
        super(message); // ហៅ constructor របស់ Error Class មេ
        this.statusCode = statusCode; // កំណត់ Status Code ផ្ទាល់ខ្លួន
        this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error'; // កំណត់ status 'fail' for 4xx, 'error' for 5xx
        this.isOperational = true; // សម្គាល់ថាជា Operational Error (មិនមែន Programming Error)

        Error.captureStackTrace(this, this.constructor); // ដើម្បីរក្សា stack trace ត្រឹមត្រូវ
      }
    }
    \`\`\`
* **អត្ថប្រយោជន៍:** អនុញ្ញាតឱ្យយើងបែងចែក **Error Types** យ៉ាងច្បាស់លាស់ និងកំណត់ **Status Codes** ជាក់លាក់សម្រាប់ Errors នីមួយៗ ដែលធ្វើឱ្យការគ្រប់គ្រង Response ទៅកាន់ Client កាន់តែងាយស្រួល។

---
> **គន្លឹះ:** តែងតែ **Log Errors** សម្រាប់ Debugging (ជាពិសេស \`err.stack\`) និងផ្តល់ **Response** ដែលមានអត្ថន័យ និងងាយយល់ដល់ Client វិញ។ ចៀសវាងការបង្ហាញព័ត៌មាន Error លម្អិតពេកដល់ Client នៅក្នុង Production Environment ដើម្បីសុវត្ថិភាព។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: try-catch ជាមួយ Asynchronous Code

បង្កើត File \`try-catch.js\`:

\`\`\`javascript
const sqlite3 = require('sqlite3').verbose();

async function fetchUser(db, id) {
  try {
    return await new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
        if (err) {
          return reject(err); // បោះ Error ប្រសិនបើមានបញ្ហា Database
        }
        if (!row) {
          return reject(new Error('User not found')); // បោះ Error ប្រសិនបើមិនឃើញ User
        }
        resolve(row);
      });
    });
  } catch (err) {
    // ចាប់ Error ពី Promise ខាងលើ រួចបោះ Error ថ្មីជាមួយ Message ច្បាស់លាស់
    throw new Error('Failed to fetch user: ' + err.message);
  }
}

// បង្កើត In-memory SQLite Database សម្រាប់សាកល្បង
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run('CREATE TABLE users (id INT, name TEXT)');
  db.run('INSERT INTO users (id, name) VALUES (?, ?)', [1, 'Sokha']);
});

// ហៅ function fetchUser ជាមួយ ID ដែលមាន
fetchUser(db, 1)
  .then(user => console.log(user))
  .catch(err => console.error(err.message)); // ចាប់ Error ប្រសិនបើមាន

// ហៅ function fetchUser ជាមួយ ID ដែលមិនមាន
fetchUser(db, 2)
  .catch(err => console.error(err.message)); // ចាប់ Error ប្រសិនបើមាន

// បិទ Database Connection ក្រោយពេលប្រើប្រាស់
db.close((err) => {
  if (err) {
    console.error("Error closing database:", err.message);
  } else {
    console.log("Database connection closed.");
  }
});
\`\`\`

ដំណើរការ File:

\`\`\`bash
node try-catch.js
\`\`\`

**លទ្ធផល**:
* Console: \`{ id: 1, name: 'Sokha' }\`
* Console: \`Failed to fetch user: User not found\`
* Console: \`Database connection closed.\`

# ឧទាហរណ៍ ២: Custom Error Class

បង្កើត File \`custom-error.js\`:

\`\`\`javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // ហៅ constructor របស់ Error class មេ
    this.statusCode = statusCode; // កំណត់ HTTP Status Code
    this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error'; // 'fail' for 4xx errors, 'error' for 5xx errors
    this.isOperational = true; // សម្គាល់ថាជា error ដែលយើងដឹង (operational error)

    // រក្សា stack trace ឱ្យត្រឹមត្រូវ
    Error.captureStackTrace(this, this.constructor);
  }
}

async function fetchData() {
  // បោះ Custom Error មួយ
  throw new AppError('Resource not found', 404);
}

fetchData()
  .catch(err => {
    // ចាប់ Custom Error ហើយបង្ហាញព័ត៌មានរបស់វា
    console.error(\`Error: \${err.message}, Status: \${err.statusCode}, Type: \${err.status}\`);
  });
\`\`\`

ដំណើរការ File:

\`\`\`bash
node custom-error.js
\`\`\`

**លទ្ធផល**:
* Console: \`Error: Resource not found, Status: 404, Type: fail\`

# ឧទាហរណ៍ ៣: Error Handling Middleware ជាមួយ Express

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Custom Error Class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// បង្កើត In-memory SQLite Database
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run('CREATE TABLE users (id INT, name TEXT)');
  db.run('INSERT INTO users (id, name) VALUES (?, ?)', [1, 'Sokha']);
});

// Route សម្រាប់ទាញយក User តាម ID
app.get('/users/:id', async (req, res, next) => {
  try {
    const row = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE id = ?', [req.params.id], (err, row) => {
        if (err) {
          // ប្រសិនបើមាន Database Error ធម្មតា បោះទៅ next()
          return reject(err);
        }
        if (!row) {
          // ប្រសិនបើមិនឃើញ User បោះ AppError ជាមួយ Status 404
          return reject(new AppError('User not found', 404));
        }
        resolve(row);
      });
    });
    res.json(row);
  } catch (err) {
    // បញ្ជូន Error ទៅ Error Handling Middleware
    next(err);
  }
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log full error stack សម្រាប់ debugging
  
  // កំណត់ Status Code ពី Custom Error បើមាន, បើមិនមាន Default 500
  const statusCode = err.statusCode || 500;
  // កំណត់ Error Status ពី Custom Error បើមាន, បើមិនមាន Default 'error'
  const status = err.status || 'error'; 

  res.status(statusCode).json({
    status: status,
    message: err.message || 'Something went wrong!',
    // បន្ថែមព័ត៌មានផ្សេងៗទៀតសម្រាប់ debugging តែមិនមែនក្នុង production
    // error: process.env.NODE_ENV === 'development' ? err : undefined,
    // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

// ចាប់ផ្តើម Server
app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));

// បិទ Database Connection ពេល Server បិទ (សម្រាប់ clean exit)
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error("Error closing database:", err.message);
    } else {
      console.log("Database connection closed gracefully.");
    }
    process.exit(0);
  });
});
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/users/1\` → JSON: \`{ "id": 1, "name": "Sokha" }\`
* \`http://localhost:3000/users/2\` → JSON: \`{ "status": "fail", "message": "User not found" }\` (Status 404)
`
  ],
  quiz: [
    {
      question: 'តើ Error Handling ជាអ្វី?',
      options: [
        'ការបង្កើត Database',
        'ការគ្រប់គ្រង Errors នៅក្នុង Application',
        'ការបម្រើ Static Files',
        'ការផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់'
      ],
      correct: 1,
      explanation: 'Error Handling ជាដំណើរការគ្រប់គ្រង Errors ដើម្បីធ្វើឱ្យ Application មានភាពរឹងមាំ។'
    },
    {
      question: 'តើ try-catch ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Routes',
        'គ្រប់គ្រង Errors ក្នុង Code',
        'ភ្ជាប់ Database',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'try-catch ប្រើសម្រាប់គ្រប់គ្រង Errors ទាំង Synchronous និង Asynchronous Code។'
    },
    {
      question: 'តើ Error Middleware ក្នុង Express មាន Parameters ប៉ុន្មាន?',
      options: ['2', '3', '4', '5'],
      correct: 2,
      explanation: 'Error Middleware មាន 4 Parameters: `(err, req, res, next)`។'
    },
    {
      question: 'តើ Custom Error Class ផ្តល់អត្ថប្រយោជន៍អ្វី?',
      options: [
        'បង្កើត Dynamic HTML',
        'បែងចែក Error Types និង Status Codes',
        'ភ្ជាប់ MongoDB',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Custom Error Class អនុញ្ញាតឱ្យបែងចែក Error Types និង Status Codes។'
    },
    {
      question: 'តើ Status Code ណាដែលប្រើនៅពេល Resource មិនមាន?',
      options: ['200', '201', '404', '500'],
      correct: 2,
      explanation: 'Status Code `404 Not Found` ប្រើនៅពេល Resource មិនមាន។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីបញ្ជូន Error ទៅ Error Middleware?',
      options: ['res.json()', 'next(err)', 'throw err', 'console.error()'],
      correct: 1,
      explanation: '`next(err)` បញ្ជូន Error ទៅ Error Middleware ក្នុង Express។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Error Handling?',
      options: [
        'បង្កើត Dynamic HTML',
        'ធ្វើឱ្យ Application មានភាពរឹងមាំ',
        'ភ្ជាប់ Database',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Error Handling ធ្វើឱ្យ Application មានភាពរឹងមាំនិងផ្តល់ Feedback ច្បាស់លាស់។'
    },
    {
      question: 'តើ Error Middleware គួរត្រូវបានដាក់នៅទីណា?',
      options: [
        'មុន Routes ទាំងអស់',
        'ក្រោយ Routes ទាំងអស់',
        'នៅក្នុង Route',
        'នៅក្នុង Database'
      ],
      correct: 1,
      explanation: 'Error Middleware គួរត្រូវបានដាក់ក្រោយ Routes ទាំងអស់។'
    },
    {
      question: 'តើ `throw new Error()` ប្រើក្នុង Context ណា?',
      options: [
        'Synchronous Code',
        'Asynchronous Code',
        'Middleware តែប៉ុណ្ណោះ',
        'Database Connection'
      ],
      correct: 0,
      explanation: '`throw new Error()` ប្រើក្នុង Synchronous Code ឬក្នុង try-catch សម្រាប់បោះ Error ។'
    },
    {
      question: 'តើ Database Error គួរត្រូវបានគ្រប់គ្រងដោយរបៀបណា?',
      options: [
        'បញ្ជូន Static Files',
        'ប្រើ try-catch និង Error Middleware',
        'បង្កើត Routes ថ្មី',
        'បដិសេធ Requests ទាំងអស់'
      ],
      correct: 1,
      explanation: 'Database Error គួរត្រូវបានគ្រប់គ្រងដោយ try-catch និង Error Middleware។'
    },
    {
      question: 'តើ Status Code ណាដែលប្រើសម្រាប់ Server Error?',
      options: ['200', '201', '404', '500'],
      correct: 3,
      explanation: 'Status Code `500 Internal Server Error` ប្រើសម្រាប់ Server Errors។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ console.error() ក្នុង Error Handling?',
      options: [
        'បញ្ជូន Response',
        'Log Errors សម្រាប់ Debugging',
        'បង្កើត Token',
        'ភ្ជាប់ Database'
      ],
      correct: 1,
      explanation: '`console.error()` ប្រើសម្រាប់ Log Errors ដើម្បី Debugging។'
    },
    {
      question: 'តើ Custom Error Class គួរមាន Property អ្វីបន្ថែម?',
      options: [
        'statusCode',
        'routePath',
        'templateName',
        'databaseUrl'
      ],
      correct: 0,
      explanation: 'Custom Error Class គួរមាន Property `statusCode` សម្រាប់ HTTP Responses។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Error Handling

គោលបំណង: អនុវត្តការបង្កើត Error Handling System ជាមួយ Express.js។

1.  **បង្កើត API ជាមួយ Error Handling**:
    * បង្កើត Folder \`error-app\` និង Initialize npm:
        \`\`\`bash
        mkdir error-app
        cd error-app
        npm init -y
        npm install express sqlite3
        \`\`\`
    * បង្កើត File \`server.js\` ហើយបញ្ចូលកូដខាងក្រោម៖
        \`\`\`javascript
        const express = require('express');
        const sqlite3 = require('sqlite3').verbose();
        const app = express();
        const port = 3000;

        class AppError extends Error {
          constructor(message, statusCode) {
            super(message);
            this.statusCode = statusCode;
            this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
            this.isOperational = true;
            Error.captureStackTrace(this, this.constructor);
          }
        }

        const db = new sqlite3.Database(':memory:');
        db.serialize(() => {
          db.run('CREATE TABLE users (id INT, name TEXT)');
          db.run('INSERT INTO users (id, name) VALUES (?, ?)', [1, 'Sokha']);
        });

        app.get('/users/:id', async (req, res, next) => {
          try {
            const row = await new Promise((resolve, reject) => {
              db.get('SELECT * FROM users WHERE id = ?', [req.params.id], (err, row) => {
                if (err) return reject(err);
                if (!row) return reject(new AppError('User not found', 404));
                resolve(row);
              });
            });
            res.json(row);
          } catch (err) {
            next(err);
          }
        });

        // Error Handling Middleware
        app.use((err, req, res, next) => {
          console.error(err.stack);
          const statusCode = err.statusCode || 500;
          const status = err.status || 'error';
          res.status(statusCode).json({
            status: status,
            message: err.message || 'Something went wrong!',
          });
        });

        app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));

        // Close DB connection on process exit
        process.on('SIGINT', () => {
          db.close((err) => {
            if (err) {
              console.error("Error closing database:", err.message);
            } else {
              console.log("Database connection closed gracefully.");
            }
            process.exit(0);
          });
        });
        \`\`\`
    * ដំណើរការ File:
        \`\`\`bash
        node server.js
        \`\`\`
    * ត្រួតពិនិត្យលទ្ធផល (ប្រើ Browser ឬ Postman):
        * \`http://localhost:3000/users/1\`
        * \`http://localhost:3000/users/2\`

2.  **បន្ថែម Route ជាមួយ Custom Error**:
    * បន្ថែម Route \`/users\` ដើម្បីទាញ Users ទាំងអស់ និងគ្រប់គ្រង Empty Result (បន្ថែមនៅក្នុង \`server.js\` មុន Error Middleware):
        \`\`\`javascript
        app.get('/users', async (req, res, next) => {
          try {
            const rows = await new Promise((resolve, reject) => {
              db.all('SELECT * FROM users', (err, rows) => {
                if (err) return reject(err);
                if (!rows.length) reject(new AppError('No users found', 404));
                resolve(rows);
              });
            });
            res.json(rows);
          } catch (err) {
            next(err);
          }
        });
        \`\`\`
    * ដំណើរការ File ឡើងវិញ:
        \`\`\`bash
        node server.js
        \`\`\`
    * ត្រួតពិនិត្យលទ្ធផល:
        * \`http://localhost:3000/users\`

3.  **ចែករំលែកលទ្ធផល**:
    * កត់សម្គាល់លទ្ធផលនៃ Error Handling សម្រាប់ "User Not Found" និង "No Users Found"។ ពិនិត្យមើល Status Codes និង Response Body។
`,
    solution: `
# ដំណោះស្រាយ៖ Error Handling

## ជំហានទី ១ និង ២: API ជាមួយ Error Handling
ខាងក្រោមនេះជាកូដ \`server.js\` ពេញលេញដែលរួមបញ្ចូលទាំង Route សម្រាប់ទាញយក User តាម ID និង Route សម្រាប់ទាញយក Users ទាំងអស់ ព្រមទាំង Error Handling Middleware៖

* **server.js**:
    \`\`\`javascript
    const express = require('express');
    const sqlite3 = require('sqlite3').verbose();
    const app = express();
    const port = 3000;

    // Custom Error Class
    class AppError extends Error {
      constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
      }
    }

    // បង្កើត In-memory SQLite Database
    const db = new sqlite3.Database(':memory:');
    db.serialize(() => {
      db.run('CREATE TABLE users (id INT, name TEXT)');
      db.run('INSERT INTO users (id, name) VALUES (?, ?)', [1, 'Sokha']);
      // បើក comment បន្ទាត់ខាងក្រោមដើម្បីសាកល្បង No users found
      // db.run('DELETE FROM users'); 
    });

    // Route សម្រាប់ទាញយក User តាម ID
    app.get('/users/:id', async (req, res, next) => {
      try {
        const row = await new Promise((resolve, reject) => {
          db.get('SELECT * FROM users WHERE id = ?', [req.params.id], (err, row) => {
            if (err) {
              return reject(err);
            }
            if (!row) {
              return reject(new AppError('User not found', 404));
            }
            resolve(row);
          });
        });
        res.json(row);
      } catch (err) {
        next(err); // បញ្ជូន Error ទៅ Error Handling Middleware
      }
    });

    // Route សម្រាប់ទាញយក Users ទាំងអស់
    app.get('/users', async (req, res, next) => {
      try {
        const rows = await new Promise((resolve, reject) => {
          db.all('SELECT * FROM users', (err, rows) => {
            if (err) {
              return reject(err);
            }
            if (!rows || rows.length === 0) { // ពិនិត្យ rows.length
              return reject(new AppError('No users found', 404));
            }
            resolve(rows);
          });
        });
        res.json(rows);
      } catch (err) {
        next(err); // បញ្ជូន Error ទៅ Error Handling Middleware
      }
    });

    // Global Error Handling Middleware (ត្រូវតែជា Middleware ចុងក្រោយ)
    app.use((err, req, res, next) => {
      console.error(err.stack); // Log full error stack សម្រាប់ debugging
      
      const statusCode = err.statusCode || 500;
      const status = err.status || 'error'; 

      res.status(statusCode).json({
        status: status,
        message: err.message || 'Something went wrong!',
      });
    });

    // ចាប់ផ្តើម Server
    app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));

    // បិទ Database Connection ពេល Server បិទ (សម្រាប់ clean exit)
    process.on('SIGINT', () => {
      db.close((err) => {
        if (err) {
          console.error("Error closing database:", err.message);
        } else {
          console.log("Database connection closed gracefully.");
        }
        process.exit(0);
      });
    });
    \`\`\`
* **លទ្ធផល**:
    \`\`\`bash
    node server.js
    # Output: Server running at http://localhost:3000
    \`\`\`
    * \`http://localhost:3000/users/1\` → JSON: \`{ "id": 1, "name": "Sokha" }\`
    * \`http://localhost:3000/users/2\` → JSON: \`{ "status": "fail", "message": "User not found" }\` (Status 404)
    * \`http://localhost:3000/users\` → JSON: \`[{ "id": 1, "name": "Sokha" }]\`
        * ប្រសិនបើអ្នក uncomment \`db.run('DELETE FROM users');\` នៅក្នុង \`server.js\` ហើយ restart server:
        * \`http://localhost:3000/users\` → JSON: \`{ "status": "fail", "message": "No users found" }\` (Status 404)

## លទ្ធផលផ្ទៀងផ្ទាត់
* **User Not Found**: នៅពេលស្នើសុំ User ID ដែលមិនមាន អ្នកនឹងទទួលបាន Response ជាមួយ **Status 404** និង Message \`"User not found"\`។
* **No Users Found**: នៅពេល Database គ្មាន User (ឧទាហរណ៍ ក្រោយពីលុប User ទាំងអស់) ការស្នើសុំទៅ \`/users\` នឹងត្រឡប់មកវិញនូវ **Status 404** ជាមួយ Message \`"No users found"\`។
* **Error Logging**: Errors ទាំងអស់ត្រូវបាន **Log** ទៅកាន់ Console (Terminal) សម្រាប់ Debugging ជាមួយ \`err.stack\`។

---

តើអ្នកមានសំណួរអំពីការគ្រប់គ្រង Error នៅក្នុង Node.js ឬចង់ស្វែងយល់បន្ថែមអំពីវិធីសាស្ត្រ Error Handling ផ្សេងទៀតទេ?
`
  }
};

export default NodeJSLesson6_1Content;