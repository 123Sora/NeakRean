import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson7_2Content: LessonContent = {
  title: 'Project ២: User Authentication API',
  objectives: [
    'បង្កើត API សម្រាប់ User Registration និង Login',
    'អនុវត្ត JWT Authentication',
    'ប្រើ bcrypt សម្រាប់ Password Hashing',
    'អនុវត្ត Input Validation និង Error Handling',
  ],
  content: `
# Project ២: User Authentication API 🔒

---

នៅក្នុង Project នេះ យើងនឹងបង្កើត **User Authentication API** ដោយប្រើ Express.js, JWT (JSON Web Token) សម្រាប់ Authentication, និង bcrypt សម្រាប់ Password Hashing។ API នឹងគាំទ្រ User Registration និង Login។

---

## 1. ទិដ្ឋភាពទូទៅនៃ Project

**គោលបំណង:**
- បង្កើត API សម្រាប់:
  - POST \`/register\`: ចុះឈ្មោះ User ថ្មី។
  - POST \`/login\`: Login និងទទួល JWT Token។
  - GET \`/profile\`: ទាញ User Profile (តម្រូវ Token)។

**Features:**
- Password Hashing ដោយ \`bcrypt\`។
- JWT Authentication ដោយ \`jsonwebtoken\`។
- Input Validation ដោយ \`express-validator\`។
- Modular Structure។

---

## 2. Project Structure

\`\`\`
auth-api/
├── routes/
│   └── auth.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── auth.js
├── .env
├── .gitignore
├── app.js
└── package.json
\`\`\`

---

## 3. ការអនុវត្ត

- **JWT Authentication:** បង្កើត Token នៅពេល Login។
- **Password Hashing:** ប្រើ \`bcrypt\` ដើម្បី Hash Passwords។
- **Validation:** ពិនិត្យ \`email\` និង \`password\`។

**ឧទាហរណ៍ (controllers/authController.js):**
\`\`\`javascript
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  res.status(201).json({ message: 'User registered' });
};
\`\`\`

---

## 4. Best Practices

- **Secure Tokens:** រក្សាទុក JWT Secret នៅ \`.env\`។
- **Validate Inputs:** ប្រើ \`express-validator\`។
- **Hash Passwords:** ប្រើ \`bcrypt\` ជានិច្ច។
- **Test API:** ប្រើ Postman ដើម្បីសាកល្បង។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Register Route</h3>
<p>ចុះឈ្មោះ User ថ្មី។</p>
<pre><code class="language-javascript">
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

exports.register = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    res.status(201).json({ message: 'User registered' });
  }
];
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ JWT Authentication Middleware</h3>
<p>ពិនិត្យ JWT Token។</p>
<pre><code class="language-javascript">
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ JWT ប្រើសម្រាប់អ្វី?',
      options: ['Hash Passwords', 'Authentication', 'Validate Input', 'Logging'],
      correct: 1,
      explanation: 'JWT ប្រើសម្រាប់ Authentication ដោយបង្កើត Tokens។'
    },
    {
      question: 'តើ bcrypt ប្រើសម្រាប់អ្វី?',
      options: ['Validate Input', 'Hash Passwords', 'Create Tokens', 'Log Requests'],
      correct: 1,
      explanation: 'bcrypt ប្រើសម្រាប់ Hash Passwords ដើម្បី Security។'
    },
    {
      question: 'តើ HTTP Status Code 401 មានន័យដូចម្តេច?',
      options: ['OK', 'Unauthorized', 'Not Found', 'Bad Request'],
      correct: 1,
      explanation: '401 Unauthorized បង្ហាញថាតម្រូវ Authentication។'
    },
    {
      question: 'តើ JWT Secret គួររក្សាទុកនៅឯណា?',
      options: ['Source Code', '.env File', 'Database', 'Static Files'],
      correct: 1,
      explanation: 'JWT Secret គួររក្សាទុកនៅ `.env` File។'
    },
    {
      question: 'តើ Route ណាសម្រាប់ Login?',
      options: ['GET /login', 'POST /login', 'PUT /login', 'DELETE /login'],
      correct: 1,
      explanation: 'POST /login ប្រើសម្រាប់ Login។'
    },
    {
      question: 'តើ Authentication Middleware ពិនិត្យអ្វី?',
      options: ['Request Body', 'Authorization Header', 'Query Params', 'Static Files'],
      correct: 1,
      explanation: 'Authentication Middleware ពិនិត្យ Authorization Header។'
    },
    {
      question: 'តើ `jwt.verify()` ធ្វើអ្វី?',
      options: ['Hash Password', 'Validate Token', 'Create Token', 'Log Request'],
      correct: 1,
      explanation: '`jwt.verify()` ពិនិត្យថា Token ត្រឹមត្រូវ។'
    },
    {
      question: 'តើ Password Hashing ជួយ Security ដោយរបៀបណា?',
      options: ['Validate Input', 'លាក់ Passwords', 'Create Tokens', 'Log Requests'],
      correct: 1,
      explanation: 'Password Hashing លាក់ Passwords ដើម្បីការពារ Security។'
    },
    {
      question: 'តើ HTTP Status Code 403 មានន័យដូចម្តេច?',
      options: ['OK', 'Unauthorized', 'Forbidden', 'Not Found'],
      correct: 2,
      explanation: '403 Forbidden បង្ហាញថា Token មិនត្រឹមត្រូវ។'
    },
    {
      question: 'តើ Validation នៅ Register Route គួរពិនិត្យអ្វី?',
      options: ['Email និង Password', 'Static Files', 'Database', 'Middleware'],
      correct: 0,
      explanation: 'Validation គួរពិនិត្យ Email និង Password។'
    },
    {
      question: 'តើ Postman ប្រើសម្រាប់អ្វីនៅ Project នេះ?',
      options: ['Deploy API', 'Test API', 'Log Requests', 'Validate Input'],
      correct: 1,
      explanation: 'Postman ប្រើសម្រាប់ Test API។'
    },
    {
      question: 'តើ Modular Structure មានប្រយោជន៍អ្វី?',
      options: ['បង្ផើនល្បឿន', 'ភាពងាយស្រួលក្នុងការថែទាំ', 'Hash Passwords', 'Serve Files'],
      correct: 1,
      explanation: 'Modular Structure ជួយភាពងាយស្រួលក្នុងការថែទាំ។'
    },
    {
      question: 'តើ Environment Variables នៅ Project នេះរួមមានអ្វី?',
      options: ['PORT, JWT_SECRET', 'Static Files', 'Database', 'Middleware'],
      correct: 0,
      explanation: 'Environment Variables រួមមាន PORT និង JWT_SECRET។'
    },
  ],
  lab: {
    task: `
បង្កើត User Authentication API។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`auth-api\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependencies: \`npm install express dotenv express-validator bcrypt jsonwebtoken\`។

2. **បង្កើត Project Structure:**
   - Folders: \`routes/\`, \`controllers/\`, \`middleware/\`។
   - Files:
     - \`routes/auth.js\`: Routes សម្រាប់ Register, Login, Profile។
     - \`controllers/authController.js\`: Logic សម្រាប់ Authentication១
     - \`middleware/auth.js\`: JWT Authentication Middleware១
     - \`app.js\`: Main Application១

3. **បង្កើត Routes:**
   - POST \`/register\`: Validate \`email\`, \`password\` (min 6 chars), Hash Password, រក្សាទុក User១
   - POST \`/login\`: Validate \`email\`, \`password\`, Return JWT Token១
   - GET \`/profile\`: តម្រូវ JWT Token, Return User Data១

4. **បន្ថែម Features:**
   - ប្រើ \`dotenv\` សម្រាប់ \`PORT\`, \`JWT_SECRET\`១
   - បន្ថែម Error Handling Middleware១
   - ប្រើ In-memory Array សម្រាប់ Users១

5. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - POST \`/register\` ជាមួយ Body \`{ "email": "test@example.com", "password": "123456" }\`
     - POST \`/login\` ជាមួយ Body \`{ "email": "test@example.com", "password": "123456" }\`
     - GET \`/profile\` ជាមួយ \`Authorization: Bearer <token>\`

**ការណែនាំ:** ប្រើ \`bcrypt\` សម្រាប់ Password Hashing និង \`jsonwebtoken\` សម្រាប់ Tokens១
    `,
    solution: `
## app.js 
\`\`\`text
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(\`Server running on port \${process.env.PORT || 3000}\`);
});
\`\`\`

## routes/auth.js 
\`\`\`text
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

router.post('/register', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
], authController.register);

router.post('/login', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').notEmpty().withMessage('Password is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
], authController.login);

router.get('/profile', authMiddleware, authController.getProfile);

module.exports = router;
\`\`\`

## controllers/authController.js 
\`\`\`text
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let users = [];

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, email, password: hashedPassword };
  users.push(user);
  res.status(201).json({ message: 'User registered' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) throw new NotFoundError('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

exports.getProfile = (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  res.json({ email: user.email });
};
\`\`\`

## middleware/auth.js 
\`\`\`text
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};
\`\`\`
## .env 
\`\`\`text
PORT=3000
JWT_SECRET=your-secret-key
\`\`\`
## .gitignore 
\`\`\`text
.env
\`\`\`
`
  }
};

export default ExpressLesson7_2Content;