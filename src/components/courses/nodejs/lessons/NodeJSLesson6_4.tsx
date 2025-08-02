import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson6_4Content: LessonContent = {
  title: 'Testing Node.js Applications',
  objectives: [
    'យល់ដឹងអំពីសារៈសំខាន់នៃ Testing នៅក្នុង Node.js',
    'ស្វែងយល់ពី Jest Library សម្រាប់ Unit Testing',
    'រៀនប្រើ Supertest សម្រាប់ API Testing',
    'អនុវត្ត Unit Tests និង Integration Tests ជាមួយ Express.js',
    'គ្រប់គ្រង Test Coverage និង Best Practices'
  ],
  content: `
# Testing Node.js Applications 🧪

---

## 1. តើ Testing ជាអ្វី? 🤔

* **និយមន័យ:** Testing ជាដំណើរការផ្ទៀងផ្ទាត់ថា Code ដំណើរការត្រឹមត្រូវ។
* **ប្រភេទ Testing:** Unit Testing (តេស្ត Function តែមួយ), Integration Testing (តេស្តភាពស៊ីសង្វាក់គ្នារវាង Components), End-to-End Testing (តេស្ត Workflow ទាំងមូល)។
* **អត្ថប្រយោជន៍:** ធានាគុណភាព Code, កាត់បន្ថយ Bugs, និងជួយ Debugging។

---

## 2. Jest និង Supertest 🛠️

* **Jest:** Testing Framework សម្រាប់ Unit Testing។
  * **Installation:** \`npm install --save-dev jest\`
  * **Features:** Assertions (\`expect\`), Mocking, Test Suites។
* **Supertest:** Library សម្រាប់ Testing HTTP APIs។
  * **Installation:** \`npm install --save-dev supertest\`
  * **Features:** Simulate HTTP Requests និង Verify Responses។

---

## 3. ការសរសេរ Unit Tests ជាមួយ Jest 🌟

* **Syntax:**
  \`\`\`javascript
  describe('Test Suite', () => {
    test('should do something', () => {
      expect(1 + 1).toBe(2);
    });
  });
  \`\`\`

---

## 4. API Testing ជាមួយ Supertest ⚙️

* **Syntax:**
  \`\`\`javascript
  const request = require('supertest');
  const app = require('./server');

  describe('GET /', () => {
    it('should return Hello World', async () => {
      const res = await request(app).get('/');
      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Hello World');
    });
  });
  \`\`\`

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **Unit Testing:** តេស្ត Functions នៅក្នុង Service Layer។
* **Integration Testing:** តេស្ត API Routes ជាមួយ Database។
* **Test Coverage:** ប្រើ Jest ដើម្បីវាស់វែងភាពគ្របដណ្តប់នៃ Tests។

---
> **គន្លឹះ:** សរសេរ Tests មុន Code (Test-Driven Development) ដើម្បីធ្វើឱ្យ Code មានគុណភាពខ្ពស់។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Unit Testing ជាមួយ Jest

បង្កើត File \`math.js\`:

\`\`\`javascript
function add(a, b) {
  return a + b;
}

module.exports = { add };
\`\`\`

បង្កើត File \`math.test.js\`:

\`\`\`javascript
const { add } = require('./math');

describe('Math Functions', () => {
  test('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });
});
\`\`\`

បន្ថែម Script នៅក្នុង \`package.json\`:
\`\`\`json
"scripts": {
  "test": "jest"
}
\`\`\`

ដំណើរការ Tests:

\`\`\`bash
npm test
\`\`\`

**លទ្ធផល**:
* Console: \`PASS  ./math.test.js\`

# ឧទាហរណ៍ ២: API Testing ជាមួយ Supertest

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

module.exports = app;
\`\`\`

បង្កើត File \`server.test.js\`:

\`\`\`javascript
const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello World');
  });
});
\`\`\`

ដំណើរការ Tests:

\`\`\`bash
npm test
\`\`\`

**លទ្ធផល**:
* Console: \`PASS  ./server.test.js\`

# ឧទាហរណ៍ ៣: Integration Testing ជាមួយ MongoDB

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

module.exports = app;
\`\`\`

បង្កើត File \`server.test.js\`:

\`\`\`javascript
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./server');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('POST /users', () => {
  it('should create a user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Sokha' });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Sokha');
  });
});
\`\`\`

ដំណើរការ Tests (តម្រូវឱ្យ MongoDB Server ដំណើរការ):

\`\`\`bash
npm test
\`\`\`

**លទ្ធផល**:
* Console: \`PASS  ./server.test.js\`
`
  ],
  quiz: [
    {
      question: 'តើ Testing ជាអ្វី?',
      options: [
        'ការបង្កើត Database',
        'ការផ្ទៀងផ្ទាត់ថា Code ដំណើរការត្រឹមត្រូវ',
        'ការបម្រើ Static Files',
        'ការផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់'
      ],
      correct: 1,
      explanation: 'Testing ជាការផ្ទៀងផ្ទាត់ថា Code ដំណើរការត្រឹមត្រូវ។'
    },
    {
      question: 'តើ Jest ប្រើសម្រាប់អ្វី?',
      options: [
        'API Testing',
        'Unit Testing',
        'Database Connection',
        'Logging'
      ],
      correct: 1,
      explanation: 'Jest ជា Testing Framework សម្រាប់ Unit Testing។'
    },
    {
      question: 'តើ Supertest ប្រើសម្រាប់អ្វី?',
      options: [
        'Unit Testing',
        'API Testing',
        'Error Handling',
        'Logging'
      ],
      correct: 1,
      explanation: 'Supertest ប្រើសម្រាប់ Testing HTTP APIs។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីដំឡើង Jest?',
      options: [
        'npm install jest',
        'npm install supertest',
        'npm install express',
        'npm install mongoose'
      ],
      correct: 0,
      explanation: '`npm install --save-dev jest` ប្រើសម្រាប់ដំឡើង Jest។'
    },
    {
      question: 'តើ `expect().toBe()` ប្រើសម្រាប់អ្វី?',
      options: [
        'Log Errors',
        'Assert Equality',
        'Connect Database',
        'Send HTTP Request'
      ],
      correct: 1,
      explanation: '`expect().toBe()` ប្រើសម្រាប់ Assert Equality នៅក្នុង Jest។'
    },
    {
      question: 'តើ Integration Testing ផ្តោតលើអ្វី?',
      options: [
        'Function តែមួយ',
        'ភាពស៊ីសង្វាក់គ្នារវាង Components',
        'Static Files',
        'Authentication'
      ],
      correct: 1,
      explanation: 'Integration Testing ផ្តោតលើភាពស៊ីសង្វាក់គ្នារវាង Components។'
    },
    {
      question: 'តើ `beforeAll` នៅក្នុង Jest ប្រើសម្រាប់អ្វី?',
      options: [
        'Run Tests',
        'Setup Before Tests',
        'Send HTTP Request',
        'Log Errors'
      ],
      correct: 1,
      explanation: '`beforeAll` ប្រើសម្រាប់ Setup Before Tests ដំណើរការ។'
    },
    {
      question: 'តើ Supertest អនុញ្ញាតឱ្យធ្វើអ្វី?',
      options: [
        'Simulate HTTP Requests',
        'Hash Passwords',
        'Connect Database',
        'Log Errors'
      ],
      correct: 0,
      explanation: 'Supertest អនុញ្ញាតឱ្យ Simulate HTTP Requests និង Verify Responses។'
    },
    {
      question: 'តើ Test Coverage ជាអ្វី?',
      options: [
        'ភាគរយនៃ Code ដែលត្រូវបានតេស្ត',
        'ចំនួន Tests ដែលបរាជ័យ',
        'ចំនួន HTTP Requests',
        'ចំនួន Database Queries'
      ],
      correct: 0,
      explanation: 'Test Coverage ជាភាគរយនៃ Code ដែលត្រូវបានតេស្ត។'
    },
    {
      question: 'តើ `afterAll` នៅក្នុង Jest ប្រើសម្រាប់អ្វី?',
      options: [
        'Run Tests',
        'Cleanup After Tests',
        'Send HTTP Request',
        'Log Errors'
      ],
      correct: 1,
      explanation: '`afterAll` ប្រើសម្រាប់ Cleanup After Tests ដំណើរការ។'
    },
    {
      question: 'តើ Status Code ណាដែលប្រើនៅពេល Create Resource ជោគជ័យ?',
      options: ['200', '201', '404', '500'],
      correct: 1,
      explanation: 'Status Code `201 Created` ប្រើនៅពេល Create Resource ជោគជ័យ។'
    },
    {
      question: 'តើ Test-Driven Development (TDD) មានន័យអ្វី?',
      options: [
        'សរសេរ Code មុន Tests',
        'សរសេរ Tests មុន Code',
        'សរសេរ Database Schema',
        'សរសេរ Static Files'
      ],
      correct: 1,
      explanation: 'TDD មានន័យថាសរសេរ Tests មុន Code។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Testing?',
      options: [
        'បង្កើត Dynamic HTML',
        'ធានាគុណភាព Code និងកាត់បន្ថយ Bugs',
        'ភ្ជាប់ Database',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Testing ធានាគុណភាព Code និងកាត់បន្ថយ Bugs។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Testing Node.js Applications

គោលបំណង: អនុវត្តការសរសេរ Unit Tests និង Integration Tests ជាមួយ Jest និង Supertest។

1. **បង្កើត API និង Tests**:
   * បង្កើត Folder \`test-app\` និង Initialize npm:
     \`\`\`bash
     mkdir test-app
     cd test-app
     npm init -y
     npm install express mongoose
     npm install --save-dev jest supertest
     \`\`\`
   * បន្ថែម Script នៅក្នុង \`package.json\`:
     \`\`\`json
     "scripts": {
       "test": "jest"
     }
     \`\`\`
   * បង្កើត File \`server.js\`:
     \`\`\`javascript
     const express = require('express');
     const mongoose = require('mongoose');
     const app = express();

     app.use(express.json());

     const userSchema = new mongoose.Schema({ name: String });
     const User = mongoose.model('User', userSchema);

     app.post('/users', async (req, res) => {
       const user = await User.create(req.body);
       res.status(201).json(user);
     });

     module.exports = app;
     \`\`\`
   * បង្កើត File \`server.test.js\`:
     \`\`\`javascript
     const request = require('supertest');
     const mongoose = require('mongoose');
     const app = require('./server');

     beforeAll(async () => {
       await mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
     });

     afterAll(async () => {
       await mongoose.connection.dropDatabase();
       await mongoose.connection.close();
     });

     describe('POST /users', () => {
       it('should create a user', async () => {
         const res = await request(app)
           .post('/users')
           .send({ name: 'Sokha' });
         expect(res.status).toBe(201);
         expect(res.body.name).toBe('Sokha');
       });
     });
     \`\`\`
   * ដំណើរការ MongoDB Server (ឧ. \`mongod\`) និង Tests:
     \`\`\`bash
     npm test
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល:
     * Console Output នៃ Test Results

2. **បន្ថែម Unit Test**:
   * បង្កើត File \`utils.js\`:
     \`\`\`javascript
     function greet(name) {
       return \`Hello, \${name}!\`;
     }

     module.exports = { greet };
     \`\`\`
   * បង្កើត File \`utils.test.js\`:
     \`\`\`javascript
     const { greet } = require('./utils');

     describe('Greet Function', () => {
       test('should greet user correctly', () => {
         expect(greet('Sokha')).toBe('Hello, Sokha!');
       });
     });
     \`\`\`
   * ដំណើរការ Tests ឡើងវិញ:
     \`\`\`bash
     npm test
     \`\`\`

3. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ Unit Tests និង Integration Tests។
`,
    solution: `
# ដំណោះស្រាយ៖ Testing Node.js Applications

## ជំហានទី ១: API និង Tests
* **package.json**:
  \`\`\`json
  {
    "name": "test-app",
    "version": "1.0.0",
    "scripts": {
      "test": "jest"
    },
    "dependencies": {
      "express": "^4.17.1",
      "mongoose": "^6.0.0"
    },
    "devDependencies": {
      "jest": "^27.0.0",
      "supertest": "^6.1.0"
    }
  }
  \`\`\`
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const mongoose = require('mongoose');
  const app = express();

  app.use(express.json());

  const userSchema = new mongoose.Schema({ name: String });
  const User = mongoose.model('User', userSchema);

  app.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
  });

  module.exports = app;
  \`\`\`
* **server.test.js**:
  \`\`\`javascript
  const request = require('supertest');
  const mongoose = require('mongoose');
  const app = require('./server');

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  describe('POST /users', () => {
    it('should create a user', async () => {
      const res = await request(app)
        .post('/users')
        .send({ name: 'Sokha' });
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Sokha');
    });
  });
  \`\`\`
* **utils.js**:
  \`\`\`javascript
  function greet(name) {
    return \`Hello, \${name}!\`;
  }

  module.exports = { greet };
  \`\`\`
* **utils.test.js**:
  \`\`\`javascript
  const { greet } = require('./utils');

  describe('Greet Function', () => {
    test('should greet user correctly', () => {
      expect(greet('Sokha')).toBe('Hello, Sokha!');
    });
  });
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  npm test
  # Output: PASS  ./server.test.js
  # Output: PASS  ./utils.test.js
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* Unit Test: \`greet\` Function បង្ហាញ Greeting ត្រឹមត្រូវ។
* Integration Test: POST \`/users\` បង្កើត User ជាមួយ Status 201។
`
  }
};

export default NodeJSLesson6_4Content;