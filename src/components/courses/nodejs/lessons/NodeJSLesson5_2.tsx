import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson5_2Content: LessonContent = {
  title: 'Authorization',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Authorization នៅក្នុង Web Applications',
    'ស្វែងយល់ពី Role-based Access Control (RBAC)',
    'រៀនប្រើ Middleware សម្រាប់ Authorization ជាមួយ Express.js',
    'អនុវត្តការកំណត់សិទ្ធិអនុញ្ញាតផ្អែកលើ Roles',
    'បង្កើត Protected Routes ដែលតម្រូវឱ្យមាន Roles ជាក់លាក់'
  ],
  content: `
# Authorization 🛡️

---

## 1. តើ Authorization ជាអ្វី? 🤔

* **និយមន័យ:** **Authorization** ជាដំណើរការកំណត់ថាអ្នកប្រើប្រាស់មានសិទ្ធិអនុញ្ញាតធ្វើសកម្មភាពអ្វីខ្លះទៅលើធនធានជាក់លាក់មួយ។
* **ឧទាហរណ៍:** **Admin** អាចលុប Users បាន ប៉ុន្តែ **User ធម្មតា** មិនអាចបានទេ។
* **អត្ថប្រយោជន៍:** ការពារទិន្នន័យ និងធានាសុវត្ថិភាពក្នុង Application ដោយធានាថាមានតែអ្នកប្រើប្រាស់ដែលមានសិទ្ធិប៉ុណ្ណោះអាចចូលប្រើមុខងារ ឬទិន្នន័យជាក់លាក់បាន។

---

## 2. Role-based Access Control (RBAC) 🌟

* **និយមន័យ:** **Role-based Access Control (RBAC)** គឺជាវិធីសាស្ត្រមួយក្នុងការកំណត់សិទ្ធិអនុញ្ញាតដោយផ្អែកលើ **Roles** (តួនាទី) របស់អ្នកប្រើប្រាស់ (ឧ. Admin, User, Editor)។
* **Workflow:**
    1.  **ផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់** (**Authentication**): ត្រូវប្រាកដថាអ្នកប្រើប្រាស់ជាអ្នកណា។
    2.  **ពិនិត្យ Role របស់អ្នកប្រើប្រាស់**: ទទួលបានតួនាទីដែលបានកំណត់សម្រាប់អ្នកប្រើប្រាស់នោះ។
    3.  **អនុញ្ញាត ឬបដិសេធការចូលប្រើ Resource**: ផ្អែកលើ Role របស់អ្នកប្រើប្រាស់ តើពួកគេមានសិទ្ធិចូលប្រើធនធានដែលបានស្នើសុំឬទេ?
* **ឧទាហរណ៍:** Admin អាចចូលប្រើ \`/admin\` Route ប៉ុន្តែ User មិនអាចបានទេ។

---

## 3. ការប្រើ Middleware សម្រាប់ Authorization 🛠️

* **Middleware:** យើងប្រើ **Express Middleware** ដើម្បីពិនិត្យ Role របស់អ្នកប្រើប្រាស់មុននឹងអនុញ្ញាតឱ្យពួកគេចូលប្រើ Route ជាក់លាក់មួយ។ Middleware នេះដើរតួជាអ្នកយាមទ្វារ។
* **Syntax:**
    \`\`\`javascript
    // authorize គឺជា Higher-Order Function ដែលទទួល roles ជា Array
    const authorize = (roles) => (req, res, next) => {
      // ពិនិត្យមើលថាតើ req.user (ដែលបានមកពី Authentication Middleware) មាន role ឬអត់
      // និងថាតើ role របស់អ្នកប្រើប្រាស់ស្ថិតនៅក្នុង roles ដែលត្រូវបានអនុញ្ញាតនោះទេ
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Forbidden: You do not have the necessary permissions.' });
      }
      next(); // អនុញ្ញាតឱ្យ request បន្តទៅ route handler បន្ទាប់
    };
    \`\`\`

---

## 4. ការរួមបញ្ចូល Authorization ជាមួយ JWT ⚙️

* **Workflow:**
    1.  **Authentication**: ផ្ទៀងផ្ទាត់ **JWT** ដែលបានផ្ញើមកពី Client ដើម្បីទទួលបាន **User Data** (ឧ. \`userId\`, \`role\`) ហើយដាក់វាទៅក្នុង \`req.user\` object។
    2.  **Authorization**: ប្រើ **Middleware** ដែលបានបង្កើត (\`authorize\`) ដើម្បីពិនិត្យ Role ដែលបានមកពី \`req.user\` ជាមួយនឹង Role ដែលត្រូវបានអនុញ្ញាតសម្រាប់ Route នោះ។
    3.  **អនុញ្ញាត ឬបដិសេធការចូលប្រើ**: ប្រសិនបើ Role ត្រឹមត្រូវ ការចូលប្រើត្រូវបានអនុញ្ញាត បើមិនដូច្នោះទេត្រូវបានបដិសេធ។
* **ឧទាហរណ៍:** Route \`/admin\` តម្រូវឱ្យមាន Role \`admin\`។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **Role-based Routes:** បង្កើត Routes ដែលកំណត់សិទ្ធិផ្អែកលើ Roles របស់អ្នកប្រើប្រាស់។
* **Database Integration:** រក្សាទុក **Role** របស់អ្នកប្រើប្រាស់នៅក្នុង **Database** រួមជាមួយទិន្នន័យអ្នកប្រើប្រាស់ផ្សេងទៀត ហើយបញ្ចូលវាទៅក្នុង **JWT Payload** នៅពេល Login។

---
> **គន្លឹះ:** តែងតែពិនិត្យ **Role** នៅលើ **Server-side** ដើម្បីការពារការចូលប្រើដោយគ្មានការអនុញ្ញាត។ ការត្រួតពិនិត្យ Role នៅ Client-side គឺសម្រាប់តែការបង្ហាញ UI ប៉ុណ្ណោះ ហើយមិនមែនជាការការពារសុវត្ថិភាពពិតប្រាកដទេ។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Authorization Middleware

បង្កើត File \`auth-middleware.js\`:

\`\`\`javascript
const jwt = require('jsonwebtoken');

// ត្រូវប្រាកដថា SECRET_KEY នេះត្រូវតែដូចទៅនឹង SECRET_KEY ដែលប្រើក្នុង server.js
const SECRET_KEY = 'secretKey'; // គន្លឹះសម្ងាត់សម្រាប់ JWT

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ error: 'Access denied, no token provided' });
  }

  const token = authHeader.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // បញ្ចូល payload របស់ JWT ទៅក្នុង req.user
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Invalid token: Token expired' });
    }
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const authorize = (roles) => (req, res, next) => {
  // ពិនិត្យមើលថាតើ req.user ត្រូវបានកំណត់ដោយ authMiddleware ហើយមាន role ដែរឬទេ
  if (!req.user || !req.user.role) {
    // នេះអាចកើតឡើងប្រសិនបើ authMiddleware មិនត្រូវបានហៅមុន ឬ JWT មិនមាន role
    return res.status(403).json({ error: 'Forbidden: User role not found.' });
  }

  // ពិនិត្យមើលថាតើ role របស់អ្នកប្រើប្រាស់ស្ថិតនៅក្នុង array នៃ roles ដែលបានអនុញ្ញាតដែរឬទេ
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Forbidden: You do not have the necessary permissions.' });
  }
  next();
};

module.exports = { authMiddleware, authorize };
\`\`\`

# ឧទាហរណ៍ ២: Role-based Routes

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authMiddleware, authorize } = require('./auth-middleware'); // នាំចូល middleware
const app = express();
const port = 3000;

const JWT_SECRET = 'secretKey'; // គន្លឹះសម្ងាត់សម្រាប់ JWT (ត្រូវតែដូចក្នុង auth-middleware.js)

app.use(express.json()); // Middleware សម្រាប់ parse JSON request bodies

// ភ្ជាប់ទៅ MongoDB
mongoose.connect('mongodb://localhost/authdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 // Timeout after 5s
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// កំណត់ Schema សម្រាប់ User
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' } // កំណត់ roles ដែលអាចមាន
});

const User = mongoose.model('User', userSchema);

// Route សម្រាប់ចុះឈ្មោះអ្នកប្រើប្រាស់ថ្មី
app.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body; // ទទួល role ផងដែរ

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // បង្កើត user ថ្មី ដោយកំណត់ role បើមាន បើមិនមាន default ជា 'user'
    const user = await User.create({ email, password: hashedPassword, role: role || 'user' });
    res.status(201).json({ message: 'User registered successfully', user: { email: user.email, role: user.role } });
  } catch (err) {
    if (err.code === 11000) { // Duplicate key error
      return res.status(409).json({ error: 'Email already registered' });
    }
    res.status(400).json({ error: err.message });
  }
});

// Route សម្រាប់ Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // បង្កើត JWT ដោយរួមបញ្ចូល userId និង role នៅក្នុង payload
    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Protected route សម្រាប់ Admin Dashboard
// ប្រើ authMiddleware ដើម្បីផ្ទៀងផ្ទាត់ JWT រួច authorize(['admin']) ដើម្បីពិនិត្យ Role
app.get('/admin', authMiddleware, authorize(['admin']), (req, res) => {
  res.json({ message: 'Welcome to Admin Dashboard', user: req.user });
});

// Protected route សម្រាប់ User Profile
// អាចចូលប្រើបានទាំង Admin និង User (ប្រសិនបើ role របស់ពួកគេត្រូវបានបញ្ជូន)
app.get('/profile', authMiddleware, (req, res) => {
  // req.user ត្រូវបានកំណត់ដោយ authMiddleware
  res.json({ message: \`Welcome, \${req.user.email}! Your role is \${req.user.role}.\`, user: req.user });
});

// ចាប់ផ្តើម Server
app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File (តម្រូវឱ្យ MongoDB Server ដំណើរការ):

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* **POST** \`/register\` (Postman) ជាមួយ Body \`{ "email": "admin@example.com", "password": "admin123", "role": "admin" }\` → JSON: \`{ "message": "User registered successfully", "user": { "email": "admin@example.com", "role": "admin" } }\`
* **POST** \`/login\` (Postman) ជាមួយ Body \`{ "email": "admin@example.com", "password": "admin123" }\` → JSON: \`{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }\` (រក្សាទុក Token នេះ)
* **GET** \`/admin\` (Postman) ជាមួយ Header \`Authorization: Bearer <admin_token>\` → JSON: \`{ "message": "Welcome to Admin Dashboard", "user": { "userId": "...", "role": "admin", "iat": ..., "exp": ... } }\`
* **GET** \`/profile\` (Postman) ជាមួយ Header \`Authorization: Bearer <admin_token>\` → JSON: \`{ "message": "Welcome, admin@example.com! Your role is admin.", "user": { "userId": "...", "role": "admin", "iat": ..., "exp": ... } }\`

* **POST** \`/register\` (Postman) ជាមួយ Body \`{ "email": "user@example.com", "password": "user123" }\` → JSON: \`{ "message": "User registered successfully", "user": { "email": "user@example.com", "role": "user" } }\`
* **POST** \`/login\` (Postman) ជាមួយ Body \`{ "email": "user@example.com", "password": "user123" }\` → JSON: \`{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }\` (រក្សាទុក Token នេះ)
* **GET** \`/admin\` (Postman) ជាមួយ Header \`Authorization: Bearer <user_token>\` → JSON: \`{ "error": "Forbidden: You do not have the necessary permissions." }\` (Status 403)
* **GET** \`/profile\` (Postman) ជាមួយ Header \`Authorization: Bearer <user_token>\` → JSON: \`{ "message": "Welcome, user@example.com! Your role is user.", "user": { "userId": "...", "role": "user", "iat": ..., "exp": ... } }\`
`
  ],
  quiz: [
    {
      question: 'តើ Authorization ជាអ្វី?',
      options: [
        'ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ',
        'ការកំណត់សិទ្ធិអនុញ្ញាត',
        'ការបង្កើត Database',
        'ការបម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Authorization ជាដំណើរការកំណត់សិទ្ធិអនុញ្ញាតធ្វើសកម្មភាពអ្វីខ្លះ។'
    },
    {
      question: 'តើ RBAC តំណាងឱ្យអ្វី?',
      options: [
        'Role-based Access Control',
        'Rule-based Authentication Control',
        'Role-based Application Control',
        'Resource-based Access Control'
      ],
      correct: 0,
      explanation: 'RBAC តំណាងឱ្យ Role-based Access Control។'
    },
    {
      question: 'តើ Middleware ក្នុង Authorization ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត JWT',
        'ពិនិត្យ Role និងអនុញ្ញាតការចូលប្រើ',
        'Hash Passwords',
        'ភ្ជាប់ Database'
      ],
      correct: 1,
      explanation: 'Middleware ពិនិត្យ Role ដើម្បីអនុញ្ញាតឬបដិសេធការចូលប្រើ។'
    },
    {
      question: 'តើ Status Code ណាដែលប្រើនៅពេល Authorization បរាជ័យ?',
      options: ['200', '201', '401', '403'],
      correct: 3,
      explanation: 'Status Code `403 Forbidden` ប្រើនៅពេល Authorization បរាជ័យ។'
    },
    {
      question: 'តើ Role ត្រូវបានរក្សាទុកនៅទីណា?',
      options: [
        'Browser Cookies',
        'Database',
        'Static Files',
        'URL Parameters'
      ],
      correct: 1,
      explanation: 'Role ត្រូវបានរក្សាទុកក្នុង Database ជាមួយ User Data។'
    },
    {
      question: 'តើ JWT Payload អាចផ្ទុកអ្វីបាន?',
      options: [
        'Hashed Password',
        'User Data ដូចជា userId និង role',
        'Database Schema',
        'Static Files'
      ],
      correct: 1,
      explanation: 'JWT Payload ផ្ទុក User Data ដូចជា userId និង role។'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Role?',
      options: [
        'admin, user',
        'email, password',
        'GET, POST',
        'Schema, Model'
      ],
      correct: 0,
      explanation: 'admin និង user ជាឧទាហរណ៍នៃ Roles ក្នុង RBAC។'
    },
    {
      question: 'តើ Middleware អនុញ្ញាតឱ្យចូលប្រើ Route ដោយរបៀបណា?',
      options: [
        'បង្កើត Token',
        'ពិនិត្យ Role និងហៅ next()',
        'Hash Password',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Middleware ពិនិត្យ Role និងហៅ `next()` ប្រសិនបើអនុញ្ញាត។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Authorization?',
      options: [
        'ធ្វើឱ្យការគ្រប់គ្រងទិន្នន័យមានប្រសិទ្ធភាព',
        'ការពារទិន្នន័យនិងធានាសុវត្ថិភាព',
        'បង្កើត Dynamic HTML',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Authorization ការពារទិន្នន័យនិងធានាសុវត្ថិភាព។'
    },
    {
      question: 'តើ Route ណាដែលតម្រូវឱ្យមាន Role `admin`?',
      options: [
        '/profile',
        '/login',
        '/admin',
        '/register'
      ],
      correct: 2,
      explanation: 'Route `/admin` តម្រូវឱ្យមាន Role `admin`។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីផ្ទៀងផ្ទាត់ JWT ក្នុង Authorization?',
      options: [
        'jwt.sign()',
        'jwt.verify()',
        'jwt.hash()',
        'jwt.compare()'
      ],
      correct: 1,
      explanation: '`jwt.verify()` ប្រើសម្រាប់ផ្ទៀងផ្ទាត់ JWT។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃ Authorization Middleware ប្រសិនបើ Role មិនត្រឹមត្រូវ?',
      options: [
        'Status 200',
        'Status 201',
        'Status 403',
        'Status 500'
      ],
      correct: 2,
      explanation: 'Status `403 Forbidden` ប្រើនៅពេល Role មិនត្រឹមត្រូវ។'
    },
    {
      question: 'តើការពិនិត្យ Role គួរត្រូវបានធ្វើនៅទីណា?',
      options: [
        'Client-side',
        'Server-side',
        'Browser',
        'URL Parameters'
      ],
      correct: 1,
      explanation: 'ការពិនិត្យ Role គួរត្រូវបានធ្វើនៅ Server-side ដើម្បីសុវត្ថិភាព។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Authorization

គោលបំណង: អនុវត្តការបង្កើត Authorization System ជាមួយ Role-based Access Control។

1.  **បង្កើត Authentication និង Authorization API**:
    * បង្កើត Folder \`authz-app\` និង Initialize npm:
        \`\`\`bash
        mkdir authz-app
        cd authz-app
        npm init -y
        npm install express mongoose bcrypt jsonwebtoken
        \`\`\`
    * បង្កើត File \`auth-middleware.js\` ហើយបញ្ចូលកូដខាងក្រោម៖
        \`\`\`javascript
        const jwt = require('jsonwebtoken');

        // ត្រូវប្រាកដថា SECRET_KEY នេះត្រូវតែដូចទៅនឹង SECRET_KEY ដែលប្រើក្នុង server.js
        const SECRET_KEY = 'secretKey'; // គន្លឹះសម្ងាត់សម្រាប់ JWT

        const authMiddleware = (req, res, next) => {
          const authHeader = req.header('Authorization');
          if (!authHeader) {
            return res.status(401).json({ error: 'Access denied, no token provided' });
          }

          const token = authHeader.replace('Bearer ', '');
          if (!token) {
            return res.status(401).json({ error: 'Access denied, no token provided' });
          }

          try {
            const decoded = jwt.verify(token, SECRET_KEY);
            req.user = decoded; // បញ្ចូល payload របស់ JWT ទៅក្នុង req.user
            next();
          } catch (err) {
            if (err.name === 'TokenExpiredError') {
              return res.status(401).json({ error: 'Invalid token: Token expired' });
            }
            return res.status(401).json({ error: 'Invalid token' });
          }
        };

        const authorize = (roles) => (req, res, next) => {
          if (!req.user || !req.user.role) {
            return res.status(403).json({ error: 'Forbidden: User role not found.' });
          }

          if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Forbidden: You do not have the necessary permissions.' });
          }
          next();
        };

        module.exports = { authMiddleware, authorize };
        \`\`\`
    * បង្កើត File \`server.js\` ហើយបញ្ចូលកូដខាងក្រោម៖
        \`\`\`javascript
        const express = require('express');
        const mongoose = require('mongoose');
        const bcrypt = require('bcrypt');
        const jwt = require('jsonwebtoken');
        const { authMiddleware, authorize } = require('./auth-middleware');
        const app = express();
        const port = 3000;

        const JWT_SECRET = 'secretKey'; // គន្លឹះសម្ងាត់សម្រាប់ JWT (ត្រូវតែដូចក្នុង auth-middleware.js)

        app.use(express.json());

        mongoose.connect('mongodb://localhost/authdb', { useNewUrlParser: true, useUnifiedTopology: true })
          .then(() => console.log('Connected to MongoDB'))
          .catch(err => console.error('Could not connect to MongoDB:', err));

        const userSchema = new mongoose.Schema({
          email: { type: String, required: true, unique: true },
          password: { type: String, required: true },
          role: { type: String, enum: ['user', 'admin'], default: 'user' }
        });

        const User = mongoose.model('User', userSchema);

        app.post('/register', async (req, res) => {
          try {
            const { email, password, role } = req.body;
            if (!email || !password) {
              return res.status(400).json({ error: 'Email and password are required' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ email, password: hashedPassword, role: role || 'user' });
            res.status(201).json({ message: 'User registered successfully', user: { email: user.email, role: user.role } });
          } catch (err) {
            if (err.code === 11000) {
              return res.status(409).json({ error: 'Email already registered' });
            }
            res.status(400).json({ error: err.message });
          }
        });

        app.post('/login', async (req, res) => {
          try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user || !(await bcrypt.compare(password, user.password))) {
              return res.status(401).json({ error: 'Invalid credentials' });
            }
            const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
        });

        app.get('/admin', authMiddleware, authorize(['admin']), (req, res) => {
          res.json({ message: 'Welcome to Admin Dashboard', user: req.user });
        });

        // Protected route for User Profile (Accessible by both 'user' and 'admin')
        app.get('/profile', authMiddleware, (req, res) => {
          res.json({ message: \`Welcome, \${req.user.email}! Your role is \${req.user.role}.\`, user: req.user });
        });

        app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
        \`\`\`
    * **ដំណើរការ MongoDB Server** (ឧ. វាយ \`mongod\` ក្នុង Terminal ថ្មី) រួចដំណើរការ File:
        \`\`\`bash
        node server.js
        \`\`\`
    * **ត្រួតពិនិត្យលទ្ធផល** (ប្រើ Postman, Insomnia, ឬ curl):
        * **POST** \`/register\` (Postman) ជាមួយ Body (JSON): \`{ "email": "admin@example.com", "password": "admin123", "role": "admin" }\`
        * **POST** \`/login\` (Postman) ជាមួយ Body (JSON): \`{ "email": "admin@example.com", "password": "admin123" }\` (រក្សាទុក \`token\` ដែលបានទទួល)
        * **GET** \`/admin\` (Postman) ជាមួយ Header \`Authorization: Bearer <token>\` (ប្រើ Token របស់ admin)

2.  **បន្ថែម User Route**:
    * បន្ថែម Route សម្រាប់ User Role នៅក្នុង \`server.js\` (បន្ទាប់ពី \`app.get('/admin', ...)\`):
        \`\`\`javascript
        // Protected route for User Dashboard (Accessible by both 'user' and 'admin')
        app.get('/user', authMiddleware, authorize(['user', 'admin']), (req, res) => {
          res.json({ message: 'Welcome to User Dashboard', user: req.user });
        });
        \`\`\`
    * **ដំណើរការ File ឡើងវិញ**:
        \`\`\`bash
        node server.js
        \`\`\`
    * **ត្រួតពិនិត្យលទ្ធផល**:
        * **POST** \`/register\` (Postman) ជាមួយ Body \`{ "email": "user@example.com", "password": "user123" }\`
        * **POST** \`/login\` (Postman) ជាមួយ Body \`{ "email": "user@example.com", "password": "user123" }\` (រក្សាទុក Token នេះ)
        * **GET** \`/user\` (Postman) ជាមួយ Header \`Authorization: Bearer <user_token>\`
        * **GET** \`/admin\` (Postman) ជាមួយ Header \`Authorization: Bearer <user_token>\` (គួរបរាជ័យជាមួយ Status 403)

3.  **ចែករំលែកលទ្ធផល**:
    * កត់សម្គាល់លទ្ធផលនៃ Registration, Login, និង Role-based Routes ។ ពិនិត្យមើល Status Codes ដែលត្រឡប់មកវិញ។
`,
    solution: `
# ដំណោះស្រាយ៖ Authorization

## ជំហានទី ១ និង ២: Authentication និង Authorization API
ខាងក្រោមនេះជាកូដ \`server.js\` ពេញលេញដែលរួមបញ្ចូលទាំង Registration, Login និង Protected Route សម្រាប់ទាំង Admin និង User:

* **auth-middleware.js**:
    \`\`\`javascript
    const jwt = require('jsonwebtoken');

    const SECRET_KEY = 'secretKey'; // ត្រូវប្រាកដថា SECRET_KEY នេះត្រូវតែដូចទៅនឹង SECRET_KEY ដែលប្រើក្នុង server.js

    const authMiddleware = (req, res, next) => {
      const authHeader = req.header('Authorization');
      if (!authHeader) {
        return res.status(401).json({ error: 'Access denied, no token provided' });
      }

      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        return res.status(401).json({ error: 'Access denied, no token provided' });
      }

      try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // បញ្ចូល payload របស់ JWT ទៅក្នុង req.user
        next();
      } catch (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ error: 'Invalid token: Token expired' });
        }
        return res.status(401).json({ error: 'Invalid token' });
      }
    };

    const authorize = (roles) => (req, res, next) => {
      if (!req.user || !req.user.role) {
        return res.status(403).json({ error: 'Forbidden: User role not found.' });
      }

      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Forbidden: You do not have the necessary permissions.' });
      }
      next();
    };

    module.exports = { authMiddleware, authorize };
    \`\`\`

* **server.js**:
    \`\`\`javascript
    const express = require('express');
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const { authMiddleware, authorize } = require('./auth-middleware');
    const app = express();
    const port = 3000;

    const JWT_SECRET = 'secretKey'; // គន្លឹះសម្ងាត់សម្រាប់ JWT (ត្រូវតែដូចក្នុង auth-middleware.js)

    app.use(express.json());

    mongoose.connect('mongodb://localhost/authdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

    const userSchema = new mongoose.Schema({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: ['user', 'admin'], default: 'user' }
    });

    const User = mongoose.model('User', userSchema);

    app.post('/register', async (req, res) => {
      try {
        const { email, password, role } = req.body;
        if (!email || !password) {
          return res.status(400).json({ error: 'Email and password are required' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword, role: role || 'user' });
        res.status(201).json({ message: 'User registered successfully', user: { email: user.email, role: user.role } });
      } catch (err) {
        if (err.code === 11000) {
          return res.status(409).json({ error: 'Email already registered' });
        }
        res.status(400).json({ error: err.message });
      }
    });

    app.post('/login', async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    app.get('/admin', authMiddleware, authorize(['admin']), (req, res) => {
      res.json({ message: 'Welcome to Admin Dashboard', user: req.user });
    });

    app.get('/user', authMiddleware, authorize(['user', 'admin']), (req, res) => {
      res.json({ message: 'Welcome to User Dashboard', user: req.user });
    });

    app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
    \`\`\`
* **លទ្ធផល**:
    \`\`\`bash
    node server.js
    # Output: Connected to MongoDB
    # Server running at http://localhost:3000
    \`\`\`
    * **POST** \`/register\` (Postman) ជាមួយ Body \`{ "email": "admin@example.com", "password": "admin123", "role": "admin" }\` → JSON: \`{ "message": "User registered successfully", "user": { "email": "admin@example.com", "role": "admin" } }\`
    * **POST** \`/login\` (Postman) ជាមួយ Body \`{ "email": "admin@example.com", "password": "admin123" }\` → JSON: \`{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }\`
    * **GET** \`/admin\` (Postman) ជាមួយ Header \`Authorization: Bearer <admin_token>\` → JSON: \`{ "message": "Welcome to Admin Dashboard", "user": { "userId": "...", "email": "admin@example.com", "role": "admin", ... } }\`
    * **POST** \`/register\` (Postman) ជាមួយ Body \`{ "email": "user@example.com", "password": "user123" }\` → JSON: \`{ "message": "User registered successfully", "user": { "email": "user@example.com", "role": "user" } }\`
    * **POST** \`/login\` (Postman) ជាមួយ Body \`{ "email": "user@example.com", "password": "user123" }\` → JSON: \`{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }\`
    * **GET** \`/user\` (Postman) ជាមួយ Header \`Authorization: Bearer <user_token>\` → JSON: \`{ "message": "Welcome to User Dashboard", "user": { "userId": "...", "email": "user@example.com", "role": "user", ... } }\`
    * **GET** \`/admin\` (Postman) ជាមួយ Header \`Authorization: Bearer <user_token>\` → JSON: \`{ "error": "Forbidden: You do not have the necessary permissions." }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Register**: អ្នកបានបង្កើត Users ដោយជោគជ័យជាមួយ **Roles** (admin, user) នៅក្នុង MongoDB Database។
* **Login**: អ្នកបានផ្ទៀងផ្ទាត់ Credentials របស់អ្នកប្រើប្រាស់ និងបានទទួល **JWT** ដែលមាន Role របស់ពួកគេត្រឡប់មកវិញ។
* **Admin Route**: មានតែអ្នកប្រើប្រាស់ដែលមាន **Admin Role** ប៉ុណ្ណោះដែលអាចចូលប្រើបាន។ Request ពី User ធម្មតានឹងទទួលបាន Status 403 (Forbidden)។
* **User Route**: អ្នកប្រើប្រាស់ដែលមាន **Role "user" ឬ "admin"** អាចចូលប្រើបាន។

---

តើអ្នកមានសំណួរអំពីការអនុវត្ត Role-based Access Control ឬចង់រៀនបន្ថែមអំពីវិធីសាស្ត្រ Authorization ផ្សេងទៀតទេ?
`
  }
};

export default NodeJSLesson5_2Content;