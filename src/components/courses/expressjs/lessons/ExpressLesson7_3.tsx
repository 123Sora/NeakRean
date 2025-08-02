import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson7_3Content: LessonContent = {
  title: 'Project ៣: Full-stack Application',
  objectives: [
    'បង្កើត Full-stack Application ជាមួយ Express.js Backend និង HTML Frontend',
    'អនុវត្ត CRUD Operations និង Authentication',
    'ប្រើ MongoDB សម្រាប់ Database',
    'រៀបចំ Deployment នៅ Render',
  ],
  content: `
# Project ៣: Full-stack Application 🌐

---

នៅក្នុង Project នេះ យើងនឹងបង្កើត **Full-stack Application** ដែលមាន Express.js Backend, MongoDB Database, និង HTML Frontend សម្រាប់គ្រប់គ្រង **Todos**។ Application នឹងគាំទ្រ CRUD Operations និង User Authentication។

---

## 1. ទិដ្ឋភាពទូទៅនៃ Project

**គោលបំណង:**
- **Backend:** Express.js API សម្រាប់ Todos និង Authentication។
- **Frontend:** HTML Form សម្រាប់បង្កើត និងបង្ហាញ Todos។
- **Database:** MongoDB សម្រាប់រក្សាទុក Todos និង Users។
- **Routes:**
  - POST \`/auth/register\`, \`/auth/login\`: Authentication។
  - GET, POST, PUT, DELETE \`/todos\`: CRUD Operations (តម្រូវ Token)១
- **Deployment:** Deploy ទៅ Render។

---

## 2. Project Structure

\`\`\`
full-stack-app/
├── routes/
│   ├── auth.js
│   └── todos.js
├── controllers/
│   ├── authController.js
│   └── todoController.js
├── middleware/
│   └── auth.js
├── public/
│   └── index.html
├── .env
├── .gitignore
├── app.js
└── package.json
\`\`\`

---

## 3. ការអនុវត្ត

- **MongoDB:** ប្រើ \`mongoose\` សម្រាប់ Database Connection១
- **Authentication:** JWT និង bcrypt១
- **Frontend:** HTML Form ជាមួយ Fetch API សម្រាប់ Requests១

**ឧទាហរណ៍ (controllers/todoController.js):**
\`\`\`javascript
const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    userId: req.user.id
  });
  await todo.save();
  res.status(201).json(todo);
};
\`\`\`

---

## 4. Best Practices

- **Secure Database Connection:** ប្រើ Environment Variables១
- **Modular Code:** បំបែក Routes, Controllers, Middleware១
- **Frontend Security:** ប្រើ CSRF Protection បើអាច១
- **Testing:** ប្រើ Postman និង Browser Developer Tools១
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Todo Creation</h3>
<p>បង្កើត Todo នៅ Backend១</p>
<pre><code class="language-javascript">
const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    userId: req.user.id
  });
  await todo.save();
  res.status(201).json(todo);
};
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Frontend HTML</h3>
<p>HTML Form សម្រាប់ Todos១</p>
<pre><code class="language-html">
<form id="todo-form">
  <input type="text" id="todo-text" required>
  <button type="submit">Add Todo</button>
</form>
<ul id="todo-list"></ul>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Full-stack Application មានផ្នែកអ្វីខ្លះ?',
      options: ['Backend និង Database', 'Frontend និង Backend', 'Frontend, Backend, Database', 'Middleware Only'],
      correct: 2,
      explanation: 'Full-stack Application មាន Frontend, Backend, និង Database។'
    },
    {
      question: 'តើ MongoDB ជាអ្វី?',
      options: ['SQL Database', 'NoSQL Database', 'Testing Framework', 'Deployment Platform'],
      correct: 1,
      explanation: 'MongoDB ជា NoSQL Database។'
    },
    {
      question: 'តើ mongoose ប្រើសម្រាប់អ្វី?',
      options: ['Validate Input', 'Database Connection', 'Create Tokens', 'Log Requests'],
      correct: 1,
      explanation: 'mongoose ប្រើសម្រាប់ Database Connection ជាមួយ MongoDB១'
    },
    {
      question: 'តើ Frontend នៅ Project នេះប្រើអ្វី?',
      options: ['React', 'HTML និង Fetch API', 'Vue.js', 'Static Files Only'],
      correct: 1,
      explanation: 'Frontend ប្រើ HTML និង Fetch API។'
    },
    {
      question: 'តើ CRUD Operations នៅ Todos Route តម្រូវអ្វី?',
      options: ['Static Files', 'JWT Token', 'Database Only', 'Middleware'],
      correct: 1,
      explanation: 'CRUD Operations តម្រូវ JWT Token សម្រាប់ Authentication១'
    },
    {
      question: 'តើ Render ប្រើសម្រាប់អ្វី?',
      options: ['Testing', 'Deployment', 'Logging', 'Validation'],
      correct: 1,
      explanation: 'Render ប្រើសម្រាប់ Deployment១'
    },
    {
      question: 'តើ Environment Variables នៅ Project នេះរួមមានអ្វី?',
      options: ['PORT, DB_URL', 'Static Files', 'Middleware', 'Controllers'],
      correct: 0,
      explanation: 'Environment Variables រួមមាន PORT, DB_URL, JWT_SECRET១'
    },
    {
      question: 'តើ Fetch API ប្រើសម្រាប់អ្វី?',
      options: ['Validate Input', 'Send HTTP Requests', 'Hash Passwords', 'Log Requests'],
      correct: 1,
      explanation: 'Fetch API ប្រើសម្រាប់ Send HTTP Requests ពី Frontend១'
    },
    {
      question: 'តើ HTTP Status Code 201 មានន័យដូចម្តេច?',
      options: ['OK', 'Created', 'Not Found', 'Unauthorized'],
      correct: 1,
      explanation: '201 Created បង្ហាញថា Resource ត្រូវបានបង្កើត១'
    },
    {
      question: 'តើ CSRF Protection ជួយអ្វី?',
      options: ['Validate Input', 'ការពារ Security', 'Create Tokens', 'Log Requests'],
      correct: 1,
      explanation: 'CSRF Protection ការពារ Security ប្រឆាំងនឹង CSRF Attacks១'
    },
    {
      question: 'តើ MongoDB Connection String គួររក្សាទុកនៅឯណា?',
      options: ['Source Code', '.env File', 'Static Files', 'Controllers'],
      correct: 1,
      explanation: 'MongoDB Connection String គួររក្សាទុកនៅ `.env` File១'
    },
    {
      question: 'តើ Testing នៅ Project នេះប្រើ Tools អ្វី?',
      options: ['Jest, Supertest', 'Postman, Browser', 'MongoDB', 'Render'],
      correct: 1,
      explanation: 'Testing ប្រើ Postman និង Browser Developer Tools១'
    },
    {
      question: 'តើ Modular Structure នៅ Project នេះមានអ្វីខ្លះ?',
      options: ['Routes, Controllers, Middleware', 'Static Files', 'Database Only', 'Frontend Only'],
      correct: 0,
      explanation: 'Modular Structure មាន Routes, Controllers, Middleware១'
    },
  ],
  lab: {
    task: `
បង្កើត Full-stack Todo Application។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`full-stack-app\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependencies: \`npm install express dotenv express-validator bcrypt jsonwebtoken mongoose\`។

2. **បង្កើត Project Structure:**
   - Folders: \`routes/\`, \`controllers/\`, \`middleware/\`, \`public/\`, \`models/\`។
   - Files:
     - \`routes/auth.js\`, \`routes/todos.js\`: Authentication និង Todo Routes១
     - \`controllers/authController.js\`, \`todoController.js\`: Logic។
     - \`middleware/auth.js\`: JWT Authentication១
     - \`models/Todo.js\`, \`User.js\`: MongoDB Schemas១
     - \`public/index.html\`: Frontend Form១
     - \`app.js\`: Main Application១

3. **បង្កើត Backend:**
   - POST \`/auth/register\`, \`/auth/login\`: Authentication១
   - GET, POST, PUT, DELETE \`/todos\`: CRUD Operations (តម្រូវ Token)។
   - ប្រើ MongoDB សម្រាប់ Users និង Todos។

4. **បង្កើត Frontend:**
   - HTML Form សម្រាប់ Login, Register, និង Todos។
   - ប្រើ Fetch API សម្រាប់ Requests១

5. **បន្ថែម Features:**
   - ប្រើ \`dotenv\` សម្រាប់ \`PORT\`, \`DB_URL\`, \`JWT_SECRET\`១
   - Error Handling Middleware១

6. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman សម្រាប់ Backend:
     - POST \`/auth/register\`
     - POST \`/auth/login\`
     - CRUD \`/todos\`
   - ប្រើ Browser សម្រាប់ Frontend (\`/index.html\`)១

**ការណែនាំ:** ប្រើ MongoDB Atlas សម្រាប់ Database និង Render សម្រាប់ Deployment១
    `,
    solution: `
## app.js 
\`\`\`text
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');
const path = require('path');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(\`Server running on port \${process.env.PORT || 3000}\`);
});
\`\`\`

## models/User.js 
\`\`\`text
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
module.exports = mongoose.model('User', userSchema);
\`\`\`

## models/Todo.js 
\`\`\`text
const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});
module.exports = mongoose.model('Todo', todoSchema);
\`\`\`

## routes/auth.js 
\`\`\`text
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
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

module.exports = router;
\`\`\`

## routes/todos.js 
\`\`\`text
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authMiddleware = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

router.get('/', authMiddleware, todoController.getTodos);
router.post('/', authMiddleware, [
  body('text').notEmpty().withMessage('Text is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
], todoController.createTodo);
router.put('/:id', authMiddleware, [
  body('text').notEmpty().withMessage('Text is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
], todoController.updateTodo);
router.delete('/:id', authMiddleware, todoController.deleteTodo);

module.exports = router;
\`\`\`
## controllers/authController.js 
\`\`\`text
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: 'User registered' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new NotFoundError('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
\`\`\`

## controllers/todoController.js 
\`\`\`text
const Todo = require('../models/Todo');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    userId: req.user.id
  });
  await todo.save();
  res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id, userId: req.user.id });
  if (!todo) throw new NotFoundError('Todo not found');
  todo.text = req.body.text;
  await todo.save();
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  const todo = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!todo) throw new NotFoundError('Todo not found');
  res.status(204).send();
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

## public/index.html 
\`\`\`text
<!DOCTYPE html>
<html>
<head>
  <title>Todo App</title>
</head>
<body>
  <h1>Todo App</h1>
  <div>
    <h2>Register</h2>
    <form id="register-form">
      <input type="email" id="register-email" required>
      <input type="password" id="register-password" required>
      <button type="submit">Register</button>
    </form>
  </div>
  <div>
    <h2>Login</h2>
    <form id="login-form">
      <input type="email" id="login-email" required>
      <input type="password" id="login-password" required>
      <button type="submit">Login</button>
    </form>
  </div>
  <div>
    <h2>Todos</h2>
    <form id="todo-form">
      <input type="text" id="todo-text" required>
      <button type="submit">Add Todo</button>
    </form>
    <ul id="todo-list"></ul>
  </div>
  <script>
    const token = localStorage.getItem('token');
    if (token) loadTodos();

    document.getElementById('register-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      const res = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      alert((await res.json()).message);
    });

    document.getElementById('login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        loadTodos();
      } else {
        alert(data.error);
      }
    });

    document.getElementById('todo-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const text = document.getElementById('todo-text').value;
      const res = await fetch('/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${localStorage.getItem('token')}\`
        },
        body: JSON.stringify({ text })
      });
      loadTodos();
    });

    async function loadTodos() {
      const res = await fetch('/todos', {
        headers: { 'Authorization': \`Bearer \${localStorage.getItem('token')}\` }
      });
      const todos = await res.json();
      const list = document.getElementById('todo-list');
      list.innerHTML = '';
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        list.appendChild(li);
      });
    }
  </script>
</body>
</html>
\`\`\`

## .env 
\`\`\`text
PORT=3000
DB_URL=mongodb://localhost:27017/todo-app
JWT_SECRET=your-secret-key
\`\`\`
## .gitignore 
\`\`\`text
.env
\`\`\`
`
  }
};

export default ExpressLesson7_3Content;