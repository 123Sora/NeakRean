import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson4_1Content: LessonContent = {
  title: 'User Authentication',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ User Authentication',
    'រៀនប្រើ JSON Web Tokens (JWT) សម្រាប់ Authentication',
    'អនុវត្ត User Registration និង Login ជាមួយ Express',
    'ស្វែងយល់ពី Password Hashing ជាមួយ bcrypt',
  ],
  content: `
# User Authentication 🔐

---

**User Authentication** គឺជាដំណើរការផ្ទៀងផ្ទាត់អត្តសញ្ញាណរបស់អ្នកប្រើប្រាស់ (ឧ. Username/Password)។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនប្រើ **JSON Web Tokens (JWT)** និង **bcrypt** សម្រាប់ Authentication នៅក្នុង Express.js។

---

## 1. គោលគំនិតនៃ Authentication

Authentication ពាក់ព័ន្ធនឹង:
- **Registration:** បង្កើត Account ថ្មី។
- **Login:** ផ្ទៀងផ្ទាត់ Credentials និងផ្តល់ Token។
- **Token-based Authentication:** ប្រើ JWT ដើម្បីរក្សាស្ថានភាព។

---

## 2. JSON Web Tokens (JWT)

**JWT** ជា Token ដែលមាន 3 ផ្នែក: **Header**, **Payload**, **Signature**។ វាត្រូវបានប្រើសម្រាប់ផ្ទៀងផ្ទាត់អ្នកប្រើ។

**ឧទាហរណ៍:**
\`\`\`javascript
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: '123' }, 'secretKey', { expiresIn: '1h' });
\`\`\`

---

## 3. Password Hashing ជាមួយ bcrypt

**bcrypt** ប្រើសម្រាប់ Hash Passwords ដើម្បីការពារសុវត្ថិភាព។

**ឧទាហរណ៍:**
\`\`\`javascript
const bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash('myPassword', saltRounds, (err, hash) => {
  // រក្សាទុក hash នៅក្នុង Database
});

bcrypt.compare('myPassword', hash, (err, result) => {
  // result === true បើ Password ត្រឹមត្រូវ
});
\`\`\`

---

## 4. ការអ podpong>អនុវត្ត Authentication

**ជំហាន:**
1. ដំឡើង Dependencies: \`npm install express bcrypt jsonwebtoken\`
2. បង្កើត Registration Route។
3. បង្កើត Login Route ដែលផ្តល់ JWT។

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // រក្សាទុក username និង hashedPassword នៅ Database
  res.json({ message: 'User registered' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // ទាញ hashedPassword ពី Database
  const hashedPassword = '$2b$10$...'; // ឧទាហរណ៍
  const isValid = await bcrypt.compare(password, hashedPassword);
  if (isValid) {
    const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(3000);
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Authentication

- **ប្រើ HTTPS:** ការពារ Token ពី Man-in-the-Middle Attacks។
- **Strong Secret Key:** សម្រាប់ JWT។
- **Validate Input:** ពិនិត្យ Username និង Password។
- **អាន Documentation:** [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), [bcrypt](https://github.com/kelektiv/node.bcrypt.js)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Registration</h3>
<p>បង្កើត Route សម្រាប់ Register User។</p>
<pre><code class="language-javascript">
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // រក្សាទុកទៅ Database
  res.json({ message: 'Registration successful' });
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Login និង JWT</h3>
<p>បង្កើត Route សម្រាប់ Login និងផ្តល់ JWT។</p>
<pre><code class="language-javascript">
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = '$2b$10$...'; // ទាញពី Database
  if (await bcrypt.compare(password, hashedPassword)) {
    const token = jwt.sign({ username }, 'secretKey');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ User Authentication មានន័យដូចម្តេច?',
      options: ['ការផ្តល់សិទ្ធិ', 'ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ', 'ការអ៊ិនគ្រីបទិន្នន័យ', 'ការបម្រើ Files'],
      correct: 1,
      explanation: 'Authentication គឺជាការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (ឧ. Username/Password)។'
    },
    {
      question: 'តើ JWT មានផ្នែកប៉ុន្មាន?',
      options: ['2', '3', '4', '5'],
      correct: 1,
      explanation: 'JWT មាន 3 ផ្នែក: Header, Payload, Signature។'
    },
    {
      question: 'តើ bcrypt ប្រើសម្រាប់អ្វី?',
      options: ['ផ្តល់ Token', 'Hash Passwords', 'Validate Tokens', 'Serve Files'],
      correct: 1,
      explanation: 'bcrypt ប្រើសម្រាប់ Hash Passwords។'
    },
    {
      question: 'តើ `jwt.sign()` ធ្វើអ្វី?',
      options: ['ផ្ទៀងផ្ទាត់ Token', 'បង្កើត Token', 'អ៊ិនគ្រីប Password', 'លុប Token'],
      correct: 1,
      explanation: '`jwt.sign()` បង្កើត JWT Token។'
    },
    {
      question: 'តើ HTTPS មានសារៈសំខាន់ដោយសារអ្វី?',
      options: ['បង្កើនល្បឿន', 'ការពារ Token', 'បង្កើត Token', 'Parse JSON'],
      correct: 1,
      explanation: 'HTTPS ការពារ Token ពី Man-in-the-Middle Attacks។'
    },
    {
      question: 'តើ `bcrypt.compare()` ប្រើសម្រាប់អ្វី?',
      options: ['បង្កើត Token', 'ផ្ទៀងផ្ទាត់ Password', 'អ៊ិនគ្រីប Token', 'លុប Password'],
      correct: 1,
      explanation: '`bcrypt.compare()` ផ្ទៀងផ្ទាត់ Password ជាមួយ Hash។'
    },
    {
      question: 'តើ Secret Key នៅក្នុង JWT មានតួនាទីអ្វី?',
      options: ['Parse JSON', 'ផ្ទៀងផ្ទាត់ Signature', 'បង្កើត Password', 'រក្សាទុក Data'],
      correct: 1,
      explanation: 'Secret Key ប្រើសម្រាប់ផ្ទៀងផ្ទាត់ Signature នៃ JWT។'
    },
    {
      question: 'តើ Registration Route គួរធ្វើអ្វី?',
      options: ['ផ្តល់ Token', 'Hash Password និងរក្សាទុក', 'Validate Token', 'Serve Files'],
      correct: 1,
      explanation: 'Registration Route Hash Password និងរក្សាទុក User Data។'
    },
    {
      question: 'តើ `expiresIn` នៅក្នុង JWT មានន័យដូចម្តេច?',
      options: ['កំណត់ល្បឿន', 'កំណត់អាយុកាល Token', 'បង្កើត Secret Key', 'Validate Password'],
      correct: 1,
      explanation: '`expiresIn` កំណត់អាយុកាលរបស់ Token។'
    },
    {
      question: 'តើ Authentication ខុសពី Authorization ដោយសារអ្វី?',
      options: ['Authentication ផ្តល់សិទ្ធិ', 'Authorization ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ', 'Authentication ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ', 'គ្មានភាពខុសគ្នា'],
      correct: 2,
      explanation: 'Authentication ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ, Authorization ផ្តល់សិទ្ធិ។'
    },
    {
      question: 'តើ Password Hashing មានសារៈសំខាន់ដោយសារអ្វី?',
      options: ['បង្កើនល្បឿន', 'ការពារសុវត្ថិភាព Password', 'បង្កើត Token', 'Parse JSON'],
      correct: 1,
      explanation: 'Password Hashing ការពារសុវត្ថិភាព Password។'
    },
    {
      question: 'តើ Middleware ណាមួយត្រូវការសម្រាប់ JWT Authentication?',
      options: ['express.json()', 'jsonwebtoken', 'bcrypt', 'express.static()'],
      correct: 1,
      explanation: 'jsonwebtoken ត្រូវការសម្រាប់ JWT Authentication។'
    },
    {
      question: 'តើ Login Route គួរត្រលប់អ្វី?',
      options: ['HTML', 'JWT Token', 'Hashed Password', 'Static Files'],
      correct: 1,
      explanation: 'Login Route ត្រលប់ JWT Token បើ Credentials ត្រឹមត្រូវ។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application សម្រាប់ User Authentication។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-auth\`។
   - ប្រើ \`npm init -y\` ដើម្បីបង្កើត \`package.json\`។
   - ដំឡើង Dependencies: \`npm install express bcrypt jsonwebtoken\`។

2. **បង្កើត Routes:**
   - បង្កើត File: \`app.js\`។
   - បន្ផែម \`express.json()\` Middleware។
   - Route \`/register\` (POST): Hash Password ជាមួយ bcrypt និងឆ្លើយតប \`{ message: "User registered" }\`។
   - Route \`/login\` (POST): ផ្ទៀងផ្ទាត់ Password និងផ្តល់ JWT Token បើត្រឹមត្រូវ។
   - Route \`/protected\` (GET): ផ្ទៀងផ្ទាត់ JWT Token និងឆ្លើយតប \`{ message: "Protected data" }\`។

3. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - POST \`/register\` ជាមួយ Body \`{ "username": "sok", "password": "123" }\`
     - POST \`/login\` ជាមួយ Body ដូចគ្នា
     - GET \`/protected\` ជាមួយ Header \`Authorization: Bearer [token]\`

**ការណែនាំ:** ប្រើ Secret Key ដែលសុវត្ថិភាព និង try-catch សម្រាប់ Error Handling។
    `,
    solution: `
\`\`\`text
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

// Mock Database
const users = [];

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/protected', (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });
    jwt.verify(token, 'secretKey', (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Invalid token' });
      res.json({ message: 'Protected data' });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`
`
  }
};

export default ExpressLesson4_1Content;