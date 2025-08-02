import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson7_1Content: LessonContent = {
  title: 'Project ១: Building a Simple RESTful API',
  objectives: [
    'បង្កើត RESTful API សម្រាប់ CRUD Operations',
    'អនុវត្ត Error Handling និង Input Validation',
    'ប្រើ Modular Project Structure',
    'សាកល្បង API ដោយប្រើ Postman',
  ],
  content: `
# Project ១: Building a Simple RESTful API 📚

---

នៅក្នុង Project នេះ យើងនឹងបង្កើត **RESTful API** សម្រាប់គ្រប់គ្រង **Books** (សៀវភៅ) ដោយប្រើ Express.js។ API នឹងគាំទ្រ CRUD Operations (Create, Read, Update, Delete) និងអនុវត្ត Best Practices ដូចជា Error Handling, Input Validation និង Modular Structure។

---

## 1. ទិដ្ឋភាពទូទៅនៃ Project

**គោលបំណង:**
- បង្កើត API សម្រាប់គ្រប់គ្រង Books។
- Routes:
  - GET \`/books\`: ទាញ Books ទាំងអស់។
  - GET \`/books/:id\`: ទាញ Book តាម ID។
  - POST \`/books\`: បង្កើត Book ថ្មី។
  - PUT \`/books/:id\`: កែសម្រួល Book។
  - DELETE \`/books/:id\`: លុប Book។

**Features:**
- Input Validation ដោយប្រើ \`express-validator\`។
- Error Handling ជាមួយ Custom Error Classes។
- Modular Structure (Routes, Controllers)។

---

## 2. Project Structure

\`\`\`
simple-rest-api/
├── routes/
│   └── books.js
├── controllers/
│   └── bookController.js
├── middleware/
│   └── validate.js
├── .env
├── .gitignore
├── app.js
└── package.json
\`\`\`

---

## 3. ការអនុវត្ត

- **Environment Variables:** ប្រើ \`dotenv\` សម្រាប់ \`PORT\`។
- **Validation:** ពិនិត្យ \`title\` និង \`author\` នៅ POST និង PUT Requests។
- **Error Handling:** បង្កើត \`NotFoundError\` សម្រាប់ Book ដែលមិនមាន។

**ឧទាហរណ៍ (controllers/bookController.js):**
\`\`\`javascript
let books = [];
exports.getBooks = (req, res) => {
  res.json(books);
};

exports.getBookById = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) throw new NotFoundError('Book not found');
  res.json(book);
};
\`\`\`

---

## 4. Best Practices

- **Modular Code:** បំបែក Routes និង Controllers។
- **Validation:** ប្រើ \`express-validator\` សម្រាប់ Input។
- **Error Messages:** ផ្តល់ Feedback ដែលច្បាស់លាស់។
- **Testing:** ប្រើ Postman ដើម្បីសាកល្បង API។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ GET Books Route</h3>
<p>ទាញ Books ទាំងអស់។</p>
<pre><code class="language-javascript">
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, title: 'Book 1', author: 'Author 1' }]);
});

module.exports = router;
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ POST Book Validation</h3>
<p>Validate Input សម្រាប់ Book Creation។</p>
<pre><code class="language-javascript">
const { body } = require('express-validator');
module.exports = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required')
];
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ RESTful API គឺជាអ្វី?',
      options: ['Database', 'API សម្រាប់ CRUD', 'Middleware', 'Static Files'],
      correct: 1,
      explanation: 'RESTful API គឺជា API ដែលគាំទ្រ CRUD Operations។'
    },
    {
      question: 'តើ CRUD មានន័យដូចម្តេច?',
      options: ['Create, Read, Update, Delete', 'Connect, Request, Upload, Download', 'Create, Run, Update, Deploy', 'Call, Return, Use, Delete'],
      correct: 0,
      explanation: 'CRUD មានន័យថា Create, Read, Update, Delete។'
    },
    {
      question: 'តើ Route ណាមួយសម្រាប់ទាញ Resource តាម ID?',
      options: ['GET /resources', 'POST /resources', 'GET /resources/:id', 'DELETE /resources'],
      correct: 2,
      explanation: 'GET /resources/:id ទាញ Resource តាម ID។'
    },
    {
      question: 'តើ express-validator ប្រើសម្រាប់អ្វី?',
      options: ['Logging', 'Input Validation', 'Error Handling', 'Deployment'],
      correct: 1,
      explanation: 'express-validator ប្រើសម្រាប់ Input Validation។'
    },
    {
      question: 'តើ Modular Structure ជួយអ្វី?',
      options: ['បង្ផើនល្បឿន', 'ភាពងាយស្រួលក្នុងការថែទាំ', 'Validate Input', 'Serve Files'],
      correct: 1,
      explanation: 'Modular Structure ជួយភាពងាយស្រួលក្នុងការថែទាំ។'
    },
    {
      question: 'តើ HTTP Method ណាសម្រាប់បង្កើត Resource?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correct: 1,
      explanation: 'POST ប្រើសម្រាប់បង្កើត Resource។'
    },
    {
      question: 'តើ NotFoundError គួរមាន Status Code អ្វី?',
      options: ['200', '400', '404', '500'],
      correct: 2,
      explanation: 'NotFoundError ប្រើ Status Code 404។'
    },
    {
      question: 'តើ Postman ប្រើសម្រាប់អ្វី?',
      options: ['Test API', 'Deploy API', 'Log Requests', 'Validate Input'],
      correct: 0,
      explanation: 'Postman ប្រើសម្រាប់ Test API។'
    },
    {
      question: 'តើ Controllers មានតួនាទីអ្វី?',
      options: ['Serve Files', 'Business Logic', 'Database Config', 'Middleware'],
      correct: 1,
      explanation: 'Controllers មានតួនាទីគ្រប់គ្រង Business Logic។'
    },
    {
      question: 'តើ Error Handling Middleware មាន Parameters ប៉ុន្មាន?',
      options: ['2', '3', '4', '5'],
      correct: 2,
      explanation: 'Error Handling Middleware មាន 4 Parameters: err, req, res, next។'
    },
    {
      question: 'តើ HTTP Status Code 201 មានន័យដូចម្តេច?',
      options: ['OK', 'Created', 'Not Found', 'Bad Request'],
      correct: 1,
      explanation: '201 Created បង្ហាញថា Resource ត្រូវបានបង្កើតជោគជ័យ។'
    },
    {
      question: 'តើ Validation Middleware គួរដាក់នៅឯណា?',
      options: ['បន្ទាប់ពី Routes', 'មុន Routes', 'នៅចុង Application', 'នៅ Controllers'],
      correct: 1,
      explanation: 'Validation Middleware គួរដាក់មុន Routes។'
    },
    {
      question: 'តើ API Testing គួររួមបញ្ចូលអ្វី?',
      options: ['Edge Cases', 'Static Files', 'Database Config', 'Middleware Only'],
      correct: 0,
      explanation: 'API Testing គួររួមបញ្ចូល Edge Cases ដើម្បីធានាគុណភាព។'
    },
  ],
  lab: {
    task: `
បង្កើត RESTful API សម្រាប់គ្រប់គ្រង Books។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`simple-rest-api\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependencies: \`npm install express express-validator dotenv\`។

2. **បង្កើត Project Structure:**
   - Folders: \`routes/\`, \`controllers/\`, \`middleware/\`។
   - Files:
     - \`routes/books.js\`: កំណត់ CRUD Routes។
     - \`controllers/bookController.js\`: Logic សម្រាប់ Books។
     - \`middleware/validate.js\`: Validation សម្រាប់ POST និង PUT។
     - \`app.js\`: Main Application។

3. **បង្កើត Routes:**
   - GET \`/books\`: ទាញ Books ទាំងអស់។
   - GET \`/books/:id\`: ទាញ Book តាម ID។
   - POST \`/books\`: បង្កើត Book ថ្មី (Validate \`title\`, \`author\`)។
   - PUT \`/books/:id\`: កែសម្រួល Book (Validate \`title\`, \`author\`)។
   - DELETE \`/books/:id\`: លុប Book។

4. **បន្ថែម Features:**
   - ប្រើ \`dotenv\` សម្រាប់ \`PORT\`។
   - បន្ថែម Error Handling Middleware។
   - បង្កើត \`NotFoundError\` Class សម្រាប់ Book ដែលមិនមាន។

5. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - GET \`/books\`
     - POST \`/books\` ជាមួយ Body \`{ "title": "Book 1", "author": "Author 1" }\`
     - GET \`/books/1\`
     - PUT \`/books/1\` ជាមួយ Body \`{ "title": "Updated Book", "author": "Updated Author" }\`
     - DELETE \`/books/1\`

**ការណែនាំ:** ប្រើ In-memory Array សម្រាប់ Books ដើម្បីភាពសាមញ្ញ។
    `,
    solution: `
## app.js 
\`\`\`text
const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/books');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(\`Server running on port \${process.env.PORT || 3000}\`);
});
\`\`\`

## routes/books.js 
\`\`\`text
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const validate = require('../middleware/validate');

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.post('/', validate, bookController.createBook);
router.put('/:id', validate, bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
\`\`\`

## controllers/bookController.js 
\`\`\`text
let books = [];
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

exports.getBooks = (req, res) => {
  res.json(books);
};

exports.getBookById = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) throw new NotFoundError('Book not found');
  res.json(book);
};

exports.createBook = (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(book);
  res.status(201).json(book);
};

exports.updateBook = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) throw new NotFoundError('Book not found');
  book.title = req.body.title;
  book.author = req.body.author;
  res.json(book);
};

exports.deleteBook = (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) throw new NotFoundError('Book not found');
  books.splice(index, 1);
  res.status(204).send();
};
\`\`\`

## middleware/validate.js 
\`\`\`text
const { body, validationResult } = require('express-validator');

module.exports = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
\`\`\`

## .env 
\`\`\`text
PORT=3000
\`\`\`

## .gitignore 
\`\`\`text
.env
\`\`\`
`
  }
};

export default ExpressLesson7_1Content;