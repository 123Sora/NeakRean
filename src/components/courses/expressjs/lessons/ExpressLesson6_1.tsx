import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson6_1Content: LessonContent = {
  title: 'Testing Express Applications',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Testing នៅក្នុង Express.js',
    'រៀនប្រើ Jest និង Supertest សម្រាប់ Unit និង Integration Testing',
    'អនុវត្ត Test Cases សម្រាប់ Routes និង Middleware',
    'ស្វែងយល់ពី Best Practices សម្រាប់ Testing',
  ],
  content: `
# Testing Express Applications 🧪

---

**Testing** គឺជាដំណើរការសាកល្បង Application ដើម្បីធានាថាវាដំណើរការត្រឹមត្រូវ។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ **Jest** សម្រាប់ Unit Testing និង **Supertest** សម្រាប់ Integration Testing នៅក្នុង Express.js។

---

## 1. សារៈសំខាន់នៃ Testing

Testing ជួយ:
- **ធានាគុណភាព:** កាត់បន្ថយ Bugs។
- **ភាពជឿជាក់:** ធ្វើឱ្យ Code ដំណើរការត្រឹមត្រូវ។
- **Refactoring:** អនុញ្ញាតឱ្យកែ Code ដោយមិនខ្លាច Errors។

---

## 2. ការប្រើ Jest និង Supertest

- **Jest:** Testing Framework សម្រាប់ Unit Tests។
- **Supertest:** Library សម្រាប់ Test HTTP Requests។

**ឧទាហរណ៍:**
\`\`\`javascript
// app.js
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = app;
\`\`\`

\`\`\`javascript
// app.test.js
const request = require('supertest');
const app = require('./app');

describe('GET /hello', () => {
  it('should return Hello, World!', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, World!');
  });
});
\`\`\`

---

## 3. Unit Testing Middleware

Test Middleware ដោយ Mock Request/Response Objects។

**ឧទាហរណ៍:**
\`\`\`javascript
// middleware/auth.js
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// middleware/auth.test.js
const auth = require('./auth');

describe('Auth Middleware', () => {
  it('should return 401 if no authorization header', () => {
    const req = { headers: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    auth(req, res, () => {});
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
  });
});
\`\`\`

---

## 4. Integration Testing Routes

Test Routes ដោយប្រើ Supertest។

**ឧទាហរណ៍:**
\`\`\`javascript
// app.test.js
describe('GET /protected', () => {
  it('should return 401 without token', async () => {
    const res = await request(app).get('/protected');
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Unauthorized');
  });
});
\`\`\`

---

## 5. Best Practices សម្រាប់ Testing

- **Write Clear Tests:** ប្រើ \`describe\` និង \`it\` ដើម្បីរៀបចំ Tests។
- **Mock Dependencies:** ដូចជា Database ឬ External APIs។
- **Test Edge Cases:** ឧ. Invalid Input, Errors។
- **Run Tests Automatically:** ប្រើ \`npm test\`។
- **អាន Documentation:** [Jest](https://jestjs.io), [Supertest](https://github.com/visionmedia/supertest)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Unit Testing Middleware</h3>
<p>Test Authentication Middleware។</p>
<pre><code class="language-javascript">
const auth = require('./middleware/auth');

describe('Auth Middleware', () => {
  it('should call next() if authorization header exists', () => {
    const req = { headers: { authorization: 'Bearer token' } };
    const res = {};
    const next = jest.fn();
    auth(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Integration Testing Route</h3>
<p>Test GET Route ជាមួយ Supertest។</p>
<pre><code class="language-javascript">
const request = require('supertest');
const app = require('./app');

describe('GET /hello', () => {
  it('should return 200 and message', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, World!');
  });
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Testing ជួយអ្វី?',
      options: ['បង្កើនល្បឿន', 'ធានាគុណភាព Code', 'Validate Input', 'Serve Files'],
      correct: 1,
      explanation: 'Testing ធានាគុណភាព Code និងកាត់បន្ថយ Bugs។'
    },
    {
      question: 'តើ Jest ប្រើសម្រាប់អ្វី?',
      options: ['Integration Testing', 'Unit Testing', 'Deployment', 'Logging'],
      correct: 1,
      explanation: 'Jest ប្រើសម្រាប់ Unit Testing និង Mocking។'
    },
    {
      question: 'តើ Supertest ប្រើសម្រាប់អ្វី?',
      options: ['Test HTTP Requests', 'Test Database', 'Test Middleware', 'Test Static Files'],
      correct: 0,
      explanation: 'Supertest ប្រើសម្រាប់ Test HTTP Requests។'
    },
    {
      question: 'តើ Unit Testing ផ្តោតលើអ្វី?',
      options: ['Individual Functions', 'Entire Application', 'Database', 'Deployment'],
      correct: 0,
      explanation: 'Unit Testing ផ្តោតលើ Individual Functions ឬ Modules។'
    },
    {
      question: 'តើ Integration Testing ផ្តោតលើអ្វី?',
      options: ['Individual Functions', 'Interaction រវាង Components', 'Static Files', 'Logging'],
      correct: 1,
      explanation: 'Integration Testing ផ្តោតលើ Interaction រវាង Components។'
    },
    {
      question: 'តើ `jest.fn()` ធ្វើអ្វី?',
      options: ['Validate Input', 'Create Mock Function', 'Log Requests', 'Serve Files'],
      correct: 1,
      explanation: '`jest.fn()` បង្កើត Mock Function សម្រាប់ Testing។'
    },
    {
      question: 'តើ Test Edge Cases មានន័យដូចម្តេច?',
      options: ['Test Normal Cases', 'Test Invalid Inputs', 'Test Deployment', 'Test Logging'],
      correct: 1,
      explanation: 'Test Edge Cases ពិនិត្យ Invalid Inputs និង Scenarios ពិសេស។'
    },
    {
      question: 'តើ `describe` នៅក្នុង Jest ធ្វើអ្វី?',
      options: ['Run Tests', 'Group Tests', 'Mock Functions', 'Validate Input'],
      correct: 1,
      explanation: '`describe` ប្រើដើម្បី Group Tests ឱ្យងាយអាន។'
    },
    {
      question: 'តើ Supertest ត្រូវការអ្វីដើម្បី Test Routes?',
      options: ['Database', 'Express App', 'Static Files', 'API Keys'],
      correct: 1,
      explanation: 'Supertest ត្រូវការ Express App ដើម្បី Test Routes។'
    },
    {
      question: 'តើ Mocking មានប្រយោជន៍អ្វី?',
      options: ['បង្កើនល្បឿន', 'ក្លែងធ្វើ Dependencies', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: 'Mocking ក្លែងធ្វើ Dependencies ដូចជា Database ឬ APIs។'
    },
    {
      question: 'តើ HTTP Status Code 200 មានន័យដូចម្តេច?',
      options: ['Not Found', 'OK', 'Unauthorized', 'Bad Request'],
      correct: 1,
      explanation: '200 OK បង្ហាញថា Request ជោគជ័យ។'
    },
    {
      question: 'តើ Testing ជួយ Refactoring ដោយរបៀបណា?',
      options: ['បង្កើនល្បឿន', 'ធានាថា Code នៅតែដំណើរការ', 'Validate Input', 'Serve Files'],
      correct: 1,
      explanation: 'Testing ធានាថា Code នៅតែដំណើរការបន្ទាប់ពី Refactoring។'
    },
    {
      question: 'តើ Best Practice សម្រាប់ Testing រួមមានអ្វី?',
      options: ['Clear Test Names', 'Hash Passwords', 'Serve Files', 'Log Requests'],
      correct: 0,
      explanation: 'Best Practices រួមមាន Clear Test Names, Mocking, Test Edge Cases។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ជាមួយ Unit និង Integration Tests។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-testing\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependencies: \`npm install express jest supertest\`។
   - កំណត់ \`"test": "jest"\` នៅក្នុង \`package.json\`។

2. **បង្កើត Application:**
   - បង្កើត File: \`app.js\` ដែល Export Express App។
   - Route \`/\` (GET): ឆ្លើយតប \`{ message: "Home" }\`។
   - Route \`/protected\` (GET): ប្រើ Middleware \`auth\` ដើម្បីពិនិត្យ \`Authorization\` Header។
   - Middleware \`auth\`: Return 401 បើគ្មាន \`Authorization\` Header។

3. **បង្កើត Tests:**
   - File: \`app.test.js\`:
     - Integration Test សម្រាប់ \`/\` (Expect Status 200)។
     - Integration Test សម្រាប់ \`/protected\` (Expect Status 401 បើគ្មាន Header)។
   - File: \`middleware/auth.test.js\`:
     - Unit Test សម្រាប់ \`auth\` Middleware (Test 401 និង Next Call)។

4. **Test Application:**
   - Run \`npm test\`។
   - ប្រើ Postman:
     - GET \`/\`
     - GET \`/protected\` ជាមួយ និងគ្មាន \`Authorization: Bearer token\`។

**ការណែនាំ:** ប្រើ Jest Mock Functions និង Supertest សម្រាប់ HTTP Requests។
    `,
    solution: `
## app.js 
\`\`\`text
const express = require('express');
const auth = require('./middleware/auth');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Home' });
});

app.get('/protected', auth, (req, res) => {
  res.json({ message: 'Protected' });
});

module.exports = app;
\`\`\`

## middleware/auth.js 
\`\`\`text
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
\`\`\`

## app.test.js 
\`\`\`text
const request = require('supertest');
const app = require('./app');

describe('Express App', () => {
  describe('GET /', () => {
    it('should return 200 and message', async () => {
      const res = await request(app).get('/');
      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Home');
    });
  });

  describe('GET /protected', () => {
    it('should return 401 without authorization header', async () => {
      const res = await request(app).get('/protected');
      expect(res.status).toBe(401);
      expect(res.body.error).toBe('Unauthorized');
    });

    it('should return 200 with authorization header', async () => {
      const res = await request(app)
        .get('/protected')
        .set('Authorization', 'Bearer token');
      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Protected');
    });
  });
});
\`\`\`

## middleware/auth.test.js 
\`\`\`text
const auth = require('../middleware/auth');

describe('Auth Middleware', () => {
  it('should return 401 if no authorization header', () => {
    const req = { headers: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    auth(req, res, () => {});
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
  });

  it('should call next() if authorization header exists', () => {
    const req = { headers: { authorization: 'Bearer token' } };
    const res = {};
    const next = jest.fn();
    auth(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
\`\`\`
`
  }
};

export default ExpressLesson6_1Content;