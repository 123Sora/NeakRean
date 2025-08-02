import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson7_1Content: LessonContent = {
  title: 'ការបង្កើត RESTful API',
  objectives: [
    'យល់ដឹងអំពីគោលការណ៍នៃ RESTful API',
    'ស្វែងយល់ពីការបង្កើត API ដោយប្រើ Express.js និង MongoDB',
    'អនុវត្ត CRUD Operations (Create, Read, Update, Delete)',
    'បន្ថែម Authentication ជាមួយ JWT',
    'គ្រប់គ្រង Error Handling និង Input Validation'
  ],
  content: `
# ការបង្កើត RESTful API 🌐

---

## 1. តើ RESTful API ជាអ្វី? 🤔

* **និយមន័យ:** REST (Representational State Transfer) ជាស្ថាបត្យកម្មសម្រាប់បង្កើត API ដែលប្រើ HTTP Methods (GET, POST, PUT, DELETE)។
* **គោលការណ៍:** Stateless, Client-Server, Cacheable, Layered System។
* **អត្ថប្រយោជន៍:** Scalable, Flexible, និងងាយស្រួល Integrate ជាមួយ Clients។

---

## 2. ការបង្កើត RESTful API ជាមួយ Express.js 🛠️

* **Dependencies:** \`express\`, \`mongoose\`, \`jsonwebtoken\`, \`bcrypt\`, \`dotenv\`។
* **Structure:** Routes, Controllers, Models, Middleware។
* **Installation:**
  \`\`\`bash
  npm install express mongoose jsonwebtoken bcrypt dotenv
  \`\`\`

---

## 3. CRUD Operations 🌟

* **Create (POST):** បង្កើត Resource ថ្មី។
* **Read (GET):** ទាញយក Resource។
* **Update (PUT):** ធ្វើបច្ចុប្បន្នភាព Resource។
* **Delete (DELETE):** លុប Resource។

---

## 4. Authentication ជាមួយ JWT ⚙️

* **JWT (JSON Web Token):** Token-based Authentication សម្រាប់ Secure APIs។
* **Steps:**
  1. បង្កើត Token នៅពេល Login។
  2. បញ្ជូន Token នៅក្នុង Headers (\`Authorization: Bearer <token>\`).
  3. Validate Token នៅក្នុង Middleware។

---

## 5. Error Handling និង Validation 📂

* **Error Handling:** ប្រើ Middleware ដើម្បីគ្រប់គ្រង Errors។
* **Validation:** ប្រើ Library ដូចជា \`express-validator\` ឬ Manual Validation។

---
> **គន្លឹះ:** ប្រើ Status Codes ត្រឹមត្រូវ (ឧ. 201 សម្រាប់ Create, 404 សម្រាប់ Not Found) និង Validate Input ដើម្បីការពារសុវត្ថិភាព។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត RESTful API ជាមួយ CRUD Operations

បង្កើត Folder \`rest-api\` និង Initialize npm:
\`\`\`bash
mkdir rest-api
cd rest-api
npm init -y
npm install express mongoose jsonwebtoken bcrypt dotenv
\`\`\`

បង្កើត File \`.env\`:
\`\`\`
MONGODB_URI=mongodb://localhost/restapi
JWT_SECRET=mysecretkey
\`\`\`

បង្កើត File \`server.js\`:
\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  userId: mongoose.Schema.Types.ObjectId
});
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// Middleware សម្រាប់ Authentication
const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId);
    if (!req.user) return res.status(401).json({ error: 'Invalid token' });
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Register
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword });
  res.status(201).json({ message: 'User created', user });
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// CRUD Operations
app.post('/posts', authMiddleware, async (req, res) => {
  const post = await Post.create({ ...req.body, userId: req.user._id });
  res.status(201).json(post);
});

app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.put('/posts/:id', authMiddleware, async (req, res) => {
  const post = await Post.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  );
  if (!post) return res.status(404).json({ error: 'Post not found or unauthorized' });
  res.json(post);
});

app.delete('/posts/:id', authMiddleware, async (req, res) => {
  const post = await Post.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
  if (!post) return res.status(404).json({ error: 'Post not found or unauthorized' });
  res.status(204).send();
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

**លទ្ធផល**:
* POST \`/register\` → \`{ username: "sokha", password: "123" }\` → Status 201
* POST \`/login\` → \`{ username: "sokha", password: "123" }\` → \`{ token }\`
* POST \`/posts\` (with Token) → \`{ title: "My Post", content: "Hello" }\` → Status 201
* GET \`/posts\` → List of Posts
* PUT \`/posts/:id\` (with Token) → Update Post
* DELETE \`/posts/:id\` (with Token) → Status 204

# ឧទាហរណ៍ ២: Error Handling Middleware

បន្ថែមនៅក្នុង \`server.js\`:
\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

**លទ្ធផល**:
* បើមាន Error (ឧ. Database Connection Error) → JSON: \`{ error: "Something went wrong!" }\`
`
  ],
  quiz: [
    {
      question: 'តើ RESTful API ជាអ្វី?',
      options: [
        'Database Schema',
        'API ដែលប្រើ HTTP Methods ដូចជា GET, POST, PUT, DELETE',
        'Static File Server',
        'Authentication System'
      ],
      correct: 1,
      explanation: 'RESTful API ប្រើ HTTP Methods ដើម្បីធ្វើ CRUD Operations។'
    },
    {
      question: 'តើ HTTP Method ណាប្រើសម្រាប់បង្កើត Resource?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correct: 1,
      explanation: 'POST ប្រើសម្រាប់បង្កើត Resource ថ្មី។'
    },
    {
      question: 'តើ JWT ប្រើសម្រាប់អ្វី?',
      options: [
        'Hash Passwords',
        'Token-based Authentication',
        'Database Connection',
        'Logging'
      ],
      correct: 1,
      explanation: 'JWT ប្រើសម្រាប់ Token-based Authentication។'
    },
    {
      question: 'តើ Status Code ណាប្រើនៅពេល Create Resource ជោគជ័យ?',
      options: ['200', '201', '404', '500'],
      correct: 1,
      explanation: 'Status 201 ប្រើនៅពេល Create Resource ជោគជ័យ។'
    },
    {
      question: 'តើ `bcrypt` ប្រើសម្រាប់អ្វី?',
      options: [
        'Token Generation',
        'Password Hashing',
        'API Testing',
        'Database Queries'
      ],
      correct: 1,
      explanation: '`bcrypt` ប្រើសម្រាប់ Hashing Passwords។'
    },
    {
      question: 'តើ Middleware នៅក្នុង Express.js ធ្វើអ្វី?',
      options: [
        'បង្កើត Database',
        'គ្រប់គ្រង Requests និង Responses',
        'បម្រើ Static Files',
        'Log Errors'
      ],
      correct: 1,
      explanation: 'Middleware គ្រប់គ្រង Requests និង Responses។'
    },
    {
      question: 'តើ `dotenv` ប្រើសម្រាប់អ្វី?',
      options: [
        'Environment Variables',
        'API Testing',
        'Database Connection',
        'Token Generation'
      ],
      correct: 0,
      explanation: '`dotenv` ប្រើសម្រាប់គ្រប់គ្រង Environment Variables។'
    },
    {
      question: 'តើ HTTP Method ណាប្រើសម្រាប់ទាញយក Resource?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correct: 0,
      explanation: 'GET ប្រើសម្រាប់ទាញយក Resource។'
    },
    {
      question: 'តើ Status Code ណាប្រើនៅពេល Resource មិនត្រូវបានរកឃើញ?',
      options: ['200', '201', '404', '500'],
      correct: 2,
      explanation: 'Status 404 ប្រើនៅពេល Resource មិនត្រូវបានរកឃើញ។'
    },
    {
      question: 'តើ Authentication Middleware ធ្វើអ្វី?',
      options: [
        'Validate Tokens',
        'Create Database',
        'Log Requests',
        'Serve Static Files'
      ],
      correct: 0,
      explanation: 'Authentication Middleware Validate Tokens ដើម្បី Secure Routes។'
    },
    {
      question: 'តើ Error Handling Middleware ប្រើសម្រាប់អ្វី?',
      options: [
        'Create Resources',
        'Handle Errors',
        'Validate Inputs',
        'Connect Database'
      ],
      correct: 1,
      explanation: 'Error Handling Middleware គ្រប់គ្រង Errors នៅក្នុង Application។'
    },
    {
      question: 'តើ REST មានលក្ខណៈអ្វីសំខាន់?',
      options: [
        'Stateful',
        'Stateless',
        'Database-dependent',
        'Single-layered'
      ],
      correct: 1,
      explanation: 'REST មានលក្ខណៈ Stateless។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ RESTful API?',
      options: [
        'Scalable និង Flexible',
        'Static File Serving',
        'Database Creation',
        'Error Logging'
      ],
      correct: 0,
      explanation: 'RESTful API មានភាព Scalable និង Flexible។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: ការបង្កើត RESTful API

គោលបំណង: អនុវត្តការបង្កើត RESTful API ជាមួយ CRUD Operations និង Authentication។

1. **បង្កើត API**:
   * បង្កើត Folder \`rest-api\` និង Initialize npm:
     \`\`\`bash
     mkdir rest-api
     cd rest-api
     npm init -y
     npm install express mongoose jsonwebtoken bcrypt dotenv
     \`\`\`
   * បង្កើត File \`.env\`:
     \`\`\`
     MONGODB_URI=mongodb://localhost/restapi
     JWT_SECRET=mysecretkey
     \`\`\`
   * បង្កើត File \`server.js\`:
     * បង្កើត User Model និង Post Model។
     * បន្ថែម Routes សម្រាប់ Register, Login, និង CRUD សម្រាប់ Posts។
     * បន្ថែម Authentication Middleware។
   * ដំណើរការ MongoDB Server (ឧ. \`mongod\`) និង File:
     \`\`\`bash
     node server.js
     \`\`\`
   * តេស្ត API ដោយប្រើ Postman:
     * POST \`/register\` → \`{ username: "sokha", password: "123" }\`
     * POST \`/login\` → \`{ username: "sokha", password: "123" }\`
     * POST \`/posts\` (with Token) → \`{ title: "My Post", content: "Hello" }\`
     * GET \`/posts\`
     * PUT \`/posts/:id\` (with Token)
     * DELETE \`/posts/:id\` (with Token)

2. **បន្ថែម Error Handling**:
   * បន្ថែម Error Handling Middleware នៅក្នុង \`server.js\`។
   * ដំណើរការ File ឡើងវិញ និងតេស្ត Error Cases (ឧ. Invalid Token, Post Not Found)។

3. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ API Calls និង Error Handling។
`,
    solution: `
# ដំណោះស្រាយ៖ ការបង្កើត RESTful API

## ជំហានទី ១: API និង Authentication
* **.env**:
  \`\`\`
  MONGODB_URI=mongodb://localhost/restapi
  JWT_SECRET=mysecretkey
  \`\`\`
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const mongoose = require('mongoose');
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcrypt');
  require('dotenv').config();
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  const userSchema = new mongoose.Schema({
    username: String,
    password: String
  });
  const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId: mongoose.Schema.Types.ObjectId
  });
  const User = mongoose.model('User', userSchema);
  const Post = mongoose.model('Post', postSchema);

  const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token provided' });
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId);
      if (!req.user) return res.status(401).json({ error: 'Invalid token' });
      next();
    } catch (err) {
      res.status(401).json({ error: 'Invalid token' });
    }
  };

  app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'User created', user });
  });

  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });

  app.post('/posts', authMiddleware, async (req, res) => {
    const post = await Post.create({ ...req.body, userId: req.user._id });
    res.status(201).json(post);
  });

  app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
  });

  app.put('/posts/:id', authMiddleware, async (req, res) => {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!post) return res.status(404).json({ error: 'Post not found or unauthorized' });
    res.json(post);
  });

  app.delete('/posts/:id', authMiddleware, async (req, res) => {
    const post = await Post.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!post) return res.status(404).json({ error: 'Post not found or unauthorized' });
    res.status(204).send();
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });

  app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
  \`\`\`
* **package.json**:
  \`\`\`json
  {
    "name": "rest-api",
    "version": "1.0.0",
    "scripts": {
      "start": "node server.js"
    },
    "dependencies": {
      "express": "^4.17.1",
      "mongoose": "^6.0.0",
      "jsonwebtoken": "^8.5.1",
      "bcrypt": "^5.0.1",
      "dotenv": "^10.0.0"
    }
  }
  \`\`\`
* លទ្ធផល (តេស្តជាមួយ Postman):
  * POST \`/register\` → \`{ username: "sokha", password: "123" }\` → Status 201
  * POST \`/login\` → \`{ username: "sokha", password: "123" }\` → \`{ token }\`
  * POST \`/posts\` (with Token) → \`{ title: "My Post", content: "Hello" }\` → Status 201
  * GET \`/posts\` → List of Posts
  * PUT \`/posts/:id\` (with Token) → Update Post
  * DELETE \`/posts/:id\` (with Token) → Status 204
  * Invalid Token → \`{ error: "Invalid token" }\`
  * Post Not Found → \`{ error: "Post not found or unauthorized" }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* CRUD Operations: ដំណើរការត្រឹមត្រូវ។
* Authentication: JWT Token ផ្ទៀងផ្ទាត់ User។
* Error Handling: Middleware គ្រប់គ្រង Errors ដូចជា Invalid Token និង Resource Not Found។
`
  }
};

export default NodeJSLesson7_1Content;