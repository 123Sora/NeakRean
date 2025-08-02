import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson3_2Content: LessonContent = {
  title: 'MongoDB ជាមួយ Mongoose',
  objectives: [
    'យល់ដឹងពី MongoDB និង Document-based Structure',
    'រៀនប្រើ Mongoose ដើម្បីភ្ជាប់និងគ្រប់គ្រង MongoDB',
    'បង្កើត Models និង Schemas ជាមួយ Mongoose',
    'អនុវត្ត CRUD Operations ជាមួយ Express និង Mongoose',
  ],
  content: `
# MongoDB ជាមួយ Mongoose 📚

---

**MongoDB** ជា NoSQL Database ដែលរក្សាទុកទិន្នន័យជា Documents (JSON-like)។ **Mongoose** ជា ODM (Object-Document Mapping) ដែលសម្រួលការធ្វើការជាមួយ MongoDB។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនភ្ជាប់ MongoDB និងអនុវត្ត CRUD Operations។

---

## 1. MongoDB និង Document-based Structure

MongoDB រក្សាទុកទិន្នន័យជា **Collections** និង **Documents**:
- **Collection:** ស្រដៀងនឹង Table នៅក្នុង SQL។
- **Document:** JSON Object ដែលមាន Fields និង Values។

**ឧទាហរណ៍ Document:**
\`\`\`json
{
  "_id": "123",
  "name": "Chan",
  "email": "chan@example.com",
  "age": 25
}
\`\`\`

---

## 2. ការប្រើ Mongoose

**Mongoose** ផ្តល់ Schema-based Approach ដើម្បីគ្រប់គ្រង MongoDB។

**ជំហាន:**
1. ដំឡើង Mongoose: \`npm install mongoose\`
2. ភ្ជាប់ MongoDB។
3. បង្កើត Schema និង Model។

**ឧទាហរណ៍:**
\`\`\`javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);
\`\`\`

- \`mongoose.connect()\`: ភ្ជាប់ MongoDB។
- \`mongoose.Schema()\`: កំណត់ Data Structure។
- \`mongoose.model()\`: បង្កើត Model សម្រាប់ CRUD។

---

## 3. CRUD Operations ជាមួយ Mongoose

### Create
\`\`\`javascript
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});
\`\`\`

### Read
\`\`\`javascript
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
\`\`\`

### Update
\`\`\`javascript
app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});
\`\`\`

### Delete
\`\`\`javascript
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User ត្រូវបានលុប' });
});
\`\`\`

---

## 4. គន្លឹះសម្រាប់ MongoDB និង Mongoose

- **Validate Data:** ប្រើ Schema Validation នៅក្នុង Mongoose។
- **Handle Errors:** ប្រើ try-catch សម្រាប់ Async Operations។
- **Use Async/Await:** សម្រាប់ Clean Code។
- **អាន Documentation:** [mongoosejs.com](https://mongoosejs.com)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត User Model</h3>
<p>បង្កើត Schema និង Model សម្រាប់ User។</p>
<pre><code class="language-javascript">
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ CRUD API</h3>
<p>បង្កើត API សម្រាប់ CRUD Operations។</p>
<pre><code class="language-javascript">
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ MongoDB ជា Database ប្រភេទណា?',
      options: ['Relational', 'NoSQL', 'Graph', 'Key-Value'],
      correct: 1,
      explanation: 'MongoDB ជា NoSQL Database (Document-based)។'
    },
    {
      question: 'តើ Mongoose មានតួនាទីអ្វី?',
      options: ['ORM', 'ODM', 'Middleware', 'Static File Server'],
      correct: 1,
      explanation: 'Mongoose ជា ODM សម្រាប់ MongoDB។'
    },
    {
      question: 'តើ Collection នៅក្នុង MongoDB ស្រដៀងនឹងអ្វីនៅក្នុង SQL?',
      options: ['Row', 'Table', 'Column', 'Database'],
      correct: 1,
      explanation: 'Collection ស្រដៀងនឹង Table។'
    },
    {
      question: 'តើ Document នៅក្នុង MongoDB មានទម្រង់បែបណា?',
      options: ['Table', 'JSON-like Object', 'SQL Query', 'Key-Value Pair'],
      correct: 1,
      explanation: 'Document ជា JSON-like Object។'
    },
    {
      question: 'តើ Method ណាមួយប្រើសម្រាប់ Create Document ក្នុង Mongoose?',
      options: ['find()', 'save()', 'update()', 'delete()'],
      correct: 1,
      explanation: '`save()` ប្រើសម្រាប់ Create Document។'
    },
    {
      question: 'តើ `User.find()` ធ្វើអ្វី?',
      options: ['បង្កើត Document', 'ទាញ Documents ទាំងអស់', 'ធ្វើបច្ចុប្បន្នភាព', 'លុប Document'],
      correct: 1,
      explanation: '`User.find()` ទាញ Documents ទាំងអស់។'
    },
    {
      question: 'តើ Middleware ណាមួយត្រូវការដើម្បី Parse `req.body` នៅក្នុង CRUD API?',
      options: ['express.static()', 'express.json()', 'morgan()', 'express.router()'],
      correct: 1,
      explanation: '`express.json()` Parse JSON Request Body។'
    },
    {
      question: 'តើ `mongoose.connect()` ប្រើសម្រាប់អ្វី?',
      options: ['បង្កើត Schema', 'ភ្ជាប់ MongoDB', 'ទាញ Documents', 'លុប Database'],
      correct: 1,
      explanation: '`mongoose.connect()` ភ្ជាប់ MongoDB។'
    },
    {
      question: 'តើ Schema នៅក្នុង Mongoose មានតួនាទីអ្វី?',
      options: ['Parse JSON', 'កំណត់ Data Structure', 'Serve Files', 'Log Requests'],
      correct: 1,
      explanation: 'Schema កំណត់ Data Structure សម្រាប់ Documents។'
    },
    {
      question: 'តើ Method ណាមួយប្រើសម្រាប់ Update Document?',
      options: ['findByIdAndUpdate()', 'find()', 'save()', 'deleteOne()'],
      correct: 0,
      explanation: '`findByIdAndUpdate()` Update Document។'
    },
    {
      question: 'តើ MongoDB ស័ក្តិសមសម្រាប់ Data ប្រភេទណា?',
      options: ['Structured Data', 'Unstructured Data', 'SQL Queries', 'Tables'],
      correct: 1,
      explanation: 'MongoDB ស័ក្តិសមសម្រាប់ Unstructured Data។'
    },
    {
      question: 'តើ `new mongoose.Schema()` ប្រើសម្រាប់អ្វី?',
      options: ['បង្កើត Model', 'កំណត់ Schema', 'ភ្ជាប់ Database', 'ទាញ Documents'],
      correct: 1,
      explanation: '`new mongoose.Schema()` កំណត់ Schema។'
    },
    {
      question: 'តើ Async/Await ត្រូវបានប្រើជាមួយ Mongoose ដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បាន ប៉ុន្តែតែនៅ Production', 'មិនបាន ព្រោះជា SQL'],
      correct: 0,
      explanation: 'Async/Await ត្រូវបានប្រើជាមួយ Mongoose សម្រាប់ Async Operations។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលប្រើ MongoDB និង Mongoose សម្រាប់ CRUD Operations។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-mongodb\`។
   - ប្រើ \`npm init -y\` ដើម្បីបង្កើត \`package.json\`។
   - ដំឡើង Express.js និង Mongoose: \`npm install express mongoose\`។

2. **ភ្ជាប់ MongoDB:**
   - បង្កើត File: \`app.js\`។
   - ភ្ជាប់ MongoDB ទៅ \`mongodb://localhost/usersdb\`។
   - បង្កើត Schema និង Model សម្រាប់ \`User\` ជាមួយ Fields: \`name\` (String, required), \`email\` (String, required).

3. **បង្កើត CRUD Routes:**
   - Route \`/users\` (POST): បង្កើត User ថ្មី, ឆ្លើយតប JSON នៃ User។
   - Route \`/users\` (GET): ទាញ Users ទាំងអស់, ឆ្លើយតប JSON Array។
   - Route \`/users/:id\` (PUT): Update User ដោយ ID, ឆ្លើយតប JSON នៃ User ថ្មី។
   - Route \`/users/:id\` (DELETE): លុប User ដោយ ID, ឆ្លើយតប \`{ message: "User ត្រូវបានលុប" }\`។

4. **Test Application:**
   - Run MongoDB (\`mongod\`)។
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - POST \`/users\` ជាមួយ Body \`{ "name": "Sok", "email": "sok@example.com" }\`
     - GET \`/users\`
     - PUT \`/users/[id]\` ជាមួយ Body \`{ "name": "Sok Updated" }\`
     - DELETE \`/users/[id]\`

**ការណែនាំ:** ប្រើ \`nodemon\` និង try-catch សម្រាប់ Error Handling។
    `,
    solution: `
\`\`\`text
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/usersdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('ភ្ជាប់ MongoDB ជោគជ័យ'))
  .catch(err => console.error('Connection Error:', err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ error: 'User មិនមាន' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User មិនមាន' });
    res.json({ message: 'User ត្រូវបានលុប' });
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

export default ExpressLesson3_2Content;