import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson5_1Content: LessonContent = {
  title: 'User Authentication',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Authentication នៅក្នុង Web Applications',
    'ស្វែងយល់ពីការប្រើ JWT (JSON Web Token) សម្រាប់ Authentication',
    'រៀនប្រើ bcrypt សម្រាប់ Hashing Passwords',
    'អនុវត្ត User Registration និង Login ជាមួយ Express.js',
    'បង្កើត Protected Routes ដែលតម្រូវឱ្យមាន Authentication'
  ],
  content: `
# User Authentication 🔒

---

## 1. តើ Authentication ជាអ្វី? 🤔

* **និយមន័យ:** **Authentication** ជាដំណើរការផ្ទៀងផ្ទាត់អត្តសញ្ញាណរបស់អ្នកប្រើប្រាស់ (ឧ. Username និង Password)។
* **ឧទាហរណ៍:** ការចូលប្រព័ន្ធ (Login) ដោយបញ្ចូល Email និង Password។
* **អត្ថប្រយោជន៍:** ធានាថាមានតែអ្នកប្រើប្រាស់ដែលត្រឹមត្រូវប៉ុណ្ណោះអាចចូលប្រើប្រព័ន្ធបាន។

---

## 2. ឧបករណ៍សម្រាប់ Authentication 🛠️

* **bcrypt:** Library សម្រាប់ **Hashing Passwords** ដើម្បីសុវត្ថិភាព។
* **JSON Web Token (JWT):** **Token-based Authentication** សម្រាប់ផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់ដោយមិនចាំបាច់រក្សា Session នៅលើ Server។
* **Express Middleware:** ប្រើ Middleware ដើម្បី **ការពារ Routes** ដែលទាមទារការផ្ទៀងផ្ទាត់។

---

## 3. ការប្រើ bcrypt សម្រាប់ Hashing Passwords 🔐

* **Hashing:** បម្លែង Password ទៅជា String ដែលមិនអាចបកស្រាយបាន (one-way function)។ នេះជួយការពារ Password ដើម បើទោះជា Database ត្រូវបានលួចក៏ដោយ។
* **Syntax:**
    \`\`\`javascript
    const bcrypt = require('bcrypt');
    const saltRounds = 10; // កំណត់ចំនួនรอบនៃការ Hashing (ខ្ពស់ជាងនេះ សុវត្ថិភាពជាង តែប្រើពេលយូរជាង)
    const hashedPassword = await bcrypt.hash('password', saltRounds); // Hashing password
    const isMatch = await bcrypt.compare('password', hashedPassword); // ប្រៀបធៀប password ដើមជាមួយ hashed password
    \`\`\`

---

## 4. ការប្រើ JWT សម្រាប់ Authentication 🎟️

* **JWT Structure:** JWT មាន ៣ ផ្នែកសំខាន់ៗ៖ **Header**, **Payload**, និង **Signature** ដែលត្រូវបាន Encode ជា Base64។
    * **Header:** បញ្ជាក់ប្រភេទ Token (JWT) និង Algorithm ដែលប្រើសម្រាប់ការ Sign (ឧ. HS256)។
    * **Payload:** មានទិន្នន័យ (claims) អំពីអ្នកប្រើប្រាស់ (ឧ. user ID, email) និងពេលវេលាផុតកំណត់។
    * **Signature:** ត្រូវបានបង្កើតដោយប្រើ Header, Payload, និង **Secret Key** ដើម្បីធានាថា Token មិនត្រូវបានកែប្រែ។
* **Workflow:**
    1.  អ្នកប្រើប្រាស់ **Login** ដោយផ្តល់ Username និង Password ។
    2.  **Server** ផ្ទៀងផ្ទាត់ Password បង្កើត JWT និងបញ្ជូន JWT នោះត្រឡប់ទៅ **Client** វិញ។
    3.  **Client** រក្សាទុក JWT (ឧ. នៅក្នុង Local Storage) ហើយបញ្ជូន JWT នោះនៅក្នុង **Authorization Header** សម្រាប់ Requests បន្ទាប់ទៅកាន់ Protected Routes ។
    4.  **Server** ផ្ទៀងផ្ទាត់ JWT មុននឹងអនុញ្ញាតឱ្យចូលប្រើ Protected Route ។
* **Syntax:**
    \`\`\`javascript
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ userId: 1 }, 'secretKey', { expiresIn: '1h' }); // បង្កើត JWT
    const decoded = jwt.verify(token, 'secretKey'); // ផ្ទៀងផ្ទាត់ និងបកស្រាយ JWT
    \`\`\`

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **User Registration:** បង្កើត User ថ្មីជាមួយ **Hashed Password** ។
* **User Login:** ផ្ទៀងផ្ទាត់ Password និងបង្កើត **JWT** ។
* **Protected Routes:** ប្រើ **Middleware** ដើម្បីផ្ទៀងផ្ទាត់ JWT ដែលបានបញ្ជូនមកពី Client ។

---
> **គន្លឹះ:** រក្សា **Secret Key** របស់ JWT ឱ្យមានសុវត្ថិភាពបំផុត (ឧ. ដាក់ក្នុង Environment Variables) និងប្រើ **HTTPS** សម្រាប់ API ដើម្បីការពារការលួចស្តាប់ Token កំឡុងពេលបញ្ជូនទិន្នន័យ។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Hashing Password ជាមួយ bcrypt

បង្កើត File \`bcrypt-example.js\`:

\`\`\`javascript
const bcrypt = require('bcrypt');

async function hashPassword() {
  const password = 'myPassword123';
  const saltRounds = 10; // ចំនួនรอบនៃការ Hashing

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Password Match:', isMatch);

    const isMismatch = await bcrypt.compare('wrongPassword', hashedPassword);
    console.log('Password Mismatch:', isMismatch); // គួរតែ false
  } catch (error) {
    console.error('Error during bcrypt operations:', error);
  }
}

hashPassword();
\`\`\`

ដំណើរការ File:

\`\`\`bash
node bcrypt-example.js
\`\`\`

**លទ្ធផល**:
* Console: \`Hashed Password: $2b$10$... (Hashed String)\`
* Console: \`Password Match: true\`
* Console: \`Password Mismatch: false\`

# ឧទាហរណ៍ ២: បង្កើត JWT

បង្កើត File \`jwt-example.js\`:

\`\`\`javascript
const jwt = require('jsonwebtoken');

const secretKey = 'yourSuperSecretKey'; // គន្លឹះសម្ងាត់
const payload = { userId: 1, username: 'sokha' };
const options = { expiresIn: '1h' }; // កំណត់ពេលវេលាផុតកំណត់

try {
  const token = jwt.sign(payload, secretKey, options);
  console.log('Generated JWT:', token);

  // ផ្ទៀងផ្ទាត់ JWT
  const decoded = jwt.verify(token, secretKey);
  console.log('Decoded Payload:', decoded);

  // ឧទាហរណ៍នៃការផ្ទៀងផ្ទាត់ Token ដែលផុតកំណត់ (ប្រសិនបើអ្នករង់ចាំ 1 ម៉ោង)
  // try {
  //   jwt.verify(token, secretKey, { ignoreExpiration: false });
  // } catch (err) {
  //   console.error('Error verifying expired token:', err.message); // TokenExpiredError
  // }

} catch (error) {
  console.error('Error during JWT operations:', error);
}
\`\`\`

ដំណើរការ File:

\`\`\`bash
node jwt-example.js
\`\`\`

**លទ្ធផល**:
* Console: \`Generated JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\` (String JWT)
* Console: \`Decoded Payload: { userId: 1, username: 'sokha', iat: ..., exp: ... }\`

# ឧទាហរណ៍ ៣: Authentication API ជាមួយ Express.js (MongoDB)

**ចំណាំ**: ឧទាហរណ៍នេះប្រើ **Mongoose** (សម្រាប់ MongoDB) ។ ត្រូវប្រាកដថា **MongoDB Server** របស់អ្នកកំពុងដំណើរការ។

ដំឡើង Dependencies:
\`\`\`bash
npm install express mongoose bcrypt jsonwebtoken
\`\`\`

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

const JWT_SECRET = 'yourVerySecureJWTSecretKey'; // គួរដាក់ក្នុង environment variable ក្នុងការប្រើប្រាស់ជាក់ស្តែង

app.use(express.json()); // Middleware សម្រាប់ parse JSON request bodies

// ភ្ជាប់ទៅ MongoDB
mongoose.connect('mongodb://localhost/authdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// កំណត់ Schema សម្រាប់ User
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Route សម្រាប់ចុះឈ្មោះអ្នកប្រើប្រាស់ថ្មី
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // ពិនិត្យមើលថា email ត្រូវបានផ្តល់ឱ្យ
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully', user: { email: user.email, id: user._id } });
  } catch (err) {
    if (err.code === 11000) { // Duplicate key error (email already exists)
      return res.status(409).json({ error: 'Email already registered' });
    }
    res.status(400).json({ error: err.message });
  }
});

// Route សម្រាប់ Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // ស្វែងរក user តាម email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // ប្រៀបធៀប password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // បង្កើត JWT
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ចាប់ផ្តើម Server
app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File (តម្រូវឱ្យ MongoDB Server ដំណើរការ):

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* Console: \`Connected to MongoDB\`
* Console: \`Server running at http://localhost:3000\`
* POST \`/register\` (Postman) ជាមួយ Body \`{ "email": "sokha@example.com", "password": "myPassword123" }\` → JSON: \`{ "message": "User registered successfully", "user": { "email": "sokha@example.com", "id": "..." } }\`
* POST \`/login\` (Postman) ជាមួយ Body \`{ "email": "sokha@example.com", "password": "myPassword123" }\` → JSON: \`{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }\`
`
  ],
  quiz: [
    {
      question: 'តើ Authentication ជាអ្វី?',
      options: [
        'ការផ្តល់សិទ្ធិអនុញ្ញាត',
        'ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណអ្នកប្រើប្រាស់',
        'ការបង្កើត Database',
        'ការបម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Authentication ជាដំណើរការផ្ទៀងផ្ទាត់អត្តសញ្ញាណអ្នកប្រើប្រាស់ (ឧ. Username និង Password)។'
    },
    {
      question: 'តើ bcrypt ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត JWT',
        'Hashing Passwords',
        'ភ្ជាប់ Database',
        'បង្កើត Routes'
      ],
      correct: 1,
      explanation: 'bcrypt ប្រើសម្រាប់ **Hashing Passwords** ដើម្បីសុវត្ថិភាព។'
    },
    {
      question: 'តើ JWT តំណាងឱ្យអ្វី?',
      options: [
        'JavaScript Web Token',
        'JSON Web Token',
        'Java Web Token',
        'JSON Widget Token'
      ],
      correct: 1,
      explanation: 'JWT តំណាងឱ្យ **JSON Web Token** សម្រាប់ Authentication។'
    },
    {
      question: 'តើផ្នែកណាមួយនៃ JWT មាន Header, Payload, និង Signature?',
      options: ['Database', 'Token', 'Middleware', 'Schema'],
      correct: 1,
      explanation: 'JWT មាន Header, Payload, និង Signature encoded ជា Base64។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បី Hash Password ជាមួយ bcrypt?',
      options: [
        'bcrypt.compare()',
        'bcrypt.hash()',
        'bcrypt.sign()',
        'bcrypt.verify()'
      ],
      correct: 1,
      explanation: '`bcrypt.hash()` ប្រើសម្រាប់ Hashing Passwords។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីផ្ទៀងផ្ទាត់ Password ជាមួយ bcrypt?',
      options: [
        'bcrypt.hash()',
        'bcrypt.compare()',
        'bcrypt.sign()',
        'bcrypt.verify()'
      ],
      correct: 1,
      explanation: '`bcrypt.compare()` ប្រើសម្រាប់ផ្ទៀងផ្ទាត់ Password។'
    },
    {
      question: 'តើ Method ណាដែលប្រើដើម្បីបង្កើត JWT?',
      options: [
        'jwt.verify()',
        'jwt.sign()',
        'jwt.hash()',
        'jwt.compare()'
      ],
      correct: 1,
      explanation: '`jwt.sign()` ប្រើសម្រាប់បង្កើត JWT។'
    },
    {
      question: 'តើ Method ណាដែលប្រើដើម្បីផ្ទៀងផ្ទាត់ JWT?',
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
      question: 'តើ Status Code ណាដែលប្រើនៅពេល Register User ជោគជ័យ?',
      options: ['200', '201', '404', '401'],
      correct: 1,
      explanation: 'Status Code `201 Created` ប្រើនៅពេល Register User ជោគជ័យ។'
    },
    {
      question: 'តើ Status Code ណាដែលប្រើនៅពេល Login បរាជ័យ?',
      options: ['200', '201', '401', '500'],
      correct: 2,
      explanation: 'Status Code `401 Unauthorized` ប្រើនៅពេល Invalid Credentials។'
    },
    {
      question: 'តើ Middleware ក្នុង Express.js ប្រើសម្រាប់អ្វីនៅក្នុង Authentication?',
      options: [
        'បម្រើ Static Files',
        'ផ្ទៀងផ្ទាត់ JWT',
        'បង្កើត Database',
        'បង្កើត Templates'
      ],
      correct: 1,
      explanation: 'Middleware ប្រើសម្រាប់ផ្ទៀងផ្ទាត់ JWT នៅក្នុង Protected Routes។'
    },
    {
      question: 'តើ Secret Key ក្នុង JWT គួរត្រូវបានរក្សាដោយរបៀបណា?',
      options: [
        'ចែករំលែកជាសាធារណៈ',
        'រក្សាសុវត្ថិភាព',
        'បញ្ចូលក្នុង URL',
        'បញ្ចូលក្នុង HTML'
      ],
      correct: 1,
      explanation: 'Secret Key គួរត្រូវបាន **រក្សាសុវត្ថិភាព** ដើម្បីការពារ JWT។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Authentication?',
      options: [
        'ធ្វើឱ្យការគ្រប់គ្រងទិន្នន័យមានប្រសិទ្ធភាព',
        'ធានាថាមានតែអ្នកប្រើប្រាស់ត្រឹមត្រូវអាចចូលប្រើ',
        'បង្កើត Dynamic HTML',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Authentication ធានាថាមានតែអ្នកប្រើប្រាស់ត្រឹមត្រូវអាចចូលប្រើ។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: User Authentication

គោលបំណង: អនុវត្តការបង្កើត Authentication System ជាមួយ JWT និង bcrypt។

1.  **បង្កើត Authentication API**:
    * បង្កើត Folder \`auth-app\` និង Initialize npm:
        \`\`\`bash
        mkdir auth-app
        cd auth-app
        npm init -y
        npm install express mongoose bcrypt jsonwebtoken
        \`\`\`
    * បង្កើត File \`server.js\` ហើយបញ្ចូលកូដខាងក្រោម៖
        \`\`\`javascript
        const express = require('express');
        const mongoose = require('mongoose');
        const bcrypt = require('bcrypt');
        const jwt = require('jsonwebtoken');
        const app = express();
        const port = 3000;

        const JWT_SECRET = 'yourVerySecureJWTSecretKey'; // គួរដាក់ក្នុង environment variable ក្នុងការប្រើប្រាស់ជាក់ស្តែង

        app.use(express.json());

        mongoose.connect('mongodb://localhost/authdb', { useNewUrlParser: true, useUnifiedTopology: true })
          .then(() => console.log('Connected to MongoDB'))
          .catch(err => console.error('Could not connect to MongoDB:', err));

        const userSchema = new mongoose.Schema({
          email: { type: String, required: true, unique: true },
          password: { type: String, required: true }
        });

        const User = mongoose.model('User', userSchema);

        app.post('/register', async (req, res) => {
          try {
            const { email, password } = req.body;
            if (!email || !password) {
              return res.status(400).json({ error: 'Email and password are required' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ email, password: hashedPassword });
            res.status(201).json({ message: 'User registered successfully', user: { email: user.email, id: user._id } });
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
            const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
        });

        app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
        \`\`\`
    * **ដំណើរការ MongoDB Server** (ឧ. វាយ \`mongod\` ក្នុង Terminal ថ្មី) រួចដំណើរការ File:
        \`\`\`bash
        node server.js
        \`\`\`
    * **ត្រួតពិនិត្យលទ្ធផល** (ប្រើ Postman, Insomnia, ឬ curl):
        * **POST** \`/register\` ជាមួយ Body (JSON): \`{ "email": "sokha@example.com", "password": "myPassword123" }\`
        * **POST** \`/login\` ជាមួយ Body (JSON): \`{ "email": "sokha@example.com", "password": "myPassword123" }\` (រក្សាទុក \`token\` ដែលបានទទួល)

2.  **បន្ថែម Protected Route**:
    * បន្ថែម Middleware និង Route សម្រាប់ Protected Resource នៅក្នុង \`server.js\` (បន្ទាប់ពី \`app.post('/login', ...)\`):
        \`\`\`javascript
        const authMiddleware = (req, res, next) => {
          const token = req.header('Authorization')?.replace('Bearer ', '');
          if (!token) {
            return res.status(401).json({ error: 'Access denied, no token provided' });
          }
          try {
            const decoded = jwt.verify(token, JWT_SECRET); // ប្រើ JWT_SECRET ដូចគ្នានឹងពេលបង្កើត Token
            req.user = decoded; // បន្ថែម payload របស់ JWT ទៅក្នុង req.user
            next(); // បន្តទៅ route handler បន្ទាប់
          } catch (err) {
            if (err.name === 'TokenExpiredError') {
              return res.status(401).json({ error: 'Token expired' });
            }
            res.status(401).json({ error: 'Invalid token' });
          }
        };

        // Protected route
        app.get('/profile', authMiddleware, async (req, res) => {
          try {
            // req.user ត្រូវបានកំណត់ដោយ authMiddleware (មាន userId និង email)
            const user = await User.findById(req.user.userId).select('-password'); // មិនទាញ password មកវិញ
            if (!user) {
              return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
        });
        \`\`\`
    * **ដំណើរការ File ឡើងវិញ**:
        \`\`\`bash
        node server.js
        \`\`\`
    * **ត្រួតពិនិត្យលទ្ធផល**:\`/login\`)។
        * សាកល្បងដោយគ្មាន Token ឬ Token មិនត្រឹមត្រូវ ដើម្បីមើល Error responses។

3.  **ចែករំលែកលទ្ធផល**:
    * កត់សម្គាល់លទ្ធផលនៃ Registration, Login, និង Protected Route ។ ពិនិត្យមើល Status Codes ដែលត្រឡប់មកវិញ។
`,
    solution: `
# ដំណោះស្រាយ៖ User Authentication

## ជំហានទី ១ និង ២: Authentication API និង Protected Route
ខាងក្រោមនេះជាកូដ \`server.js\` ពេញលេញដែលរួមបញ្ចូលទាំង Registration, Login និង Protected Route:

* **server.js**:
    \`\`\`javascript
    const express = require('express');
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const app = express();
    const port = 3000;

    const JWT_SECRET = 'yourVerySecureJWTSecretKey'; // ត្រូវប្តូរទៅជា environment variable ក្នុងការប្រើប្រាស់ជាក់ស្តែង

    app.use(express.json());

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
      password: { type: String, required: true }
    });

    const User = mongoose.model('User', userSchema);

    // Route សម្រាប់ចុះឈ្មោះអ្នកប្រើប្រាស់ថ្មី
    app.post('/register', async (req, res) => {
      try {
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({ error: 'Email and password are required' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully', user: { email: user.email, id: user._id } });
      } catch (err) {
        if (err.code === 11000) {
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
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    // Middleware សម្រាប់ផ្ទៀងផ្ទាត់ JWT
    const authMiddleware = (req, res, next) => {
      const token = req.header('Authorization')?.replace('Bearer ', ''); // យក Token ចេញពី Authorization Header
      if (!token) {
        return res.status(401).json({ error: 'Access denied, no token provided' });
      }
      try {
        const decoded = jwt.verify(token, JWT_SECRET); // ផ្ទៀងផ្ទាត់ Token
        req.user = decoded; // បន្ថែម payload ទៅក្នុង request object
        next(); // បន្តទៅ route handler
      } catch (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ error: 'Token expired' });
        }
        res.status(401).json({ error: 'Invalid token' });
      }
    };

    // Protected route - ទាមទារ Authentication
    app.get('/profile', authMiddleware, async (req, res) => {
      try {
        // req.user ត្រូវបានកំណត់ដោយ authMiddleware ដែលមាន userId
        const user = await User.findById(req.user.userId).select('-password'); // មិនទាញ password មកវិញ
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    // ចាប់ផ្តើម Server
    app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
    \`\`\`
* **លទ្ធផល**:
    \`\`\`bash
    node server.js
    # Output:
    # Connected to MongoDB
    # Server running at http://localhost:3000
    \`\`\`
    * **POST** \`/register\` (Postman) ជាមួយ Body \`{ "email": "sokha@example.com", "password": "myPassword123" }\` → JSON: \`{ "message": "User registered successfully", "user": { "email": "sokha@example.com", "id": "..." } }\`
    * **POST** \`/login\` (Postman) ជាមួយ Body \`{ "email": "sokha@example.com", "password": "myPassword123" }\` → JSON: \`{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }\` (នេះគឺជា JWT ដែលអ្នកនឹងប្រើ)
    * **GET** \`/profile\` (Postman) ជាមួយ Header \`Authorization: Bearer <token>\` (ជំនួស \`<token>\` ដោយ JWT ដែលអ្នកបានទទួលពី \`/login\`) → JSON: \`{ "_id": "...", "email": "sokha@example.com", "__v": 0 }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Register**: អ្នកបានបង្កើត User ថ្មីដោយជោគជ័យជាមួយ **Hashed Password** នៅក្នុង MongoDB Database។
* **Login**: អ្នកបានផ្ទៀងផ្ទាត់ Credentials របស់អ្នកប្រើប្រាស់ និងបានទទួល **JWT** ត្រឡប់មកវិញ។
* **Profile**: អ្នកបានចូលប្រើ Protected Route (\`/profile\`) ដោយជោគជ័យដោយប្រើ JWT របស់អ្នក ហើយបានទាញយកទិន្នន័យ Profile របស់អ្នកប្រើប្រាស់ដោយមិនចាំបាច់បង្ហាញ Password។

---

តើអ្នកចង់បន្តទៅការរៀនអំពី Authorization ឬមានសំណួរផ្សេងទៀតទាក់ទងនឹង User Authentication នេះទេ?
`
  }
};

export default NodeJSLesson5_1Content;