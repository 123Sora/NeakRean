import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson3_1Content: LessonContent = {
  title: 'ណែនាំអំពី Databases សម្រាប់ Backend',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Databases នៅក្នុង Backend Development',
    'ស្វែងយល់ពីភាពខុសគ្នារវាង Relational និង NoSQL Databases',
    'រៀនអំពី Database Integration ជាមួយ Express.js',
    'ស្វែងយល់ពី ORM និង ODM សម្រាប់ Backend',
  ],
  content: `
# ណែនាំអំពី Databases សម្រាប់ Backend 🗄️

---

**Databases** គឺជាសមាសធាតុសំខាន់នៅក្នុង Backend Development សម្រាប់រក្សាទុក គ្រប់គ្រង និងទាញយកទិន្នន័យ។ នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពីមូលដ្ឋានគ្រឹះនៃ Databases និងការប្រើប្រាស់ជាមួយ Express.js។

---

## 1. សារៈសំខាន់នៃ Databases

Databases អនុញ្ញាតឱ្យ Backend:
- **រក្សាទុកទិន្នន័យ:** ដូចជា User Data, Posts, Orders។
- **គ្រប់គ្រងទិន្នន័យ:** CRUD Operations (Create, Read, Update, Delete)។
- **ផ្តល់ APIs:** សម្រាប់ Frontend ឬ External Services។

**ឧទាហរណ៍:** Backend ប្រើ Database ដើម្បីរក្សាទុក User Profiles និងផ្ញើទៅ Frontend។

---

## 2. Relational vs NoSQL Databases

### Relational Databases (SQL)
- **លក្ខណៈ:** ប្រើ Tables ជាមួយ Rows និង Columns។
- **ឧទាហរណ៍:** MySQL, PostgreSQL, SQLite។
- **គុណសម្បត្តិ:** Structured Data, Strong Consistency, SQL Queries។
- **គុណវិបត្តិ:** Less Flexible, Scaling ពិបាកជាង។

**ឧទាហរណ៍ SQL:**
\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255)
);
\`\`\`

### NoSQL Databases
- **លក្ខណៈ:** Flexible, Document-based, Key-Value, Graph។
- **ឧទាហរណ៍:** MongoDB, DynamoDB, Redis។
- **គុណសម្បត្តិ:** Scalable, Flexible Schema, Fast for Unstructured Data។
- **គុណវិបត្តិ:** Less Consistency, Complex Queries។

**ឧទាហរណ៍ MongoDB Document:**
\`\`\`json
{
  "_id": "123",
  "name": "Sok",
  "email": "sok@example.com"
}
\`\`\`

---

## 3. Database Integration ជាមួយ Express.js

Express.js មិនមាន Built-in Database Support ទេ ប៉ុន្តែអាចភ្ជាប់ជាមួយ Databases តាមរយៈ Libraries:
- **SQL:** Sequelize, Knex.js, node-postgres។
- **NoSQL:** Mongoose (MongoDB), Redis Client។

**ឧទាហរណ៍ (MongoDB):**
\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

app.get('/', (req, res) => {
  res.send('ភ្ជាប់ជាមួយ MongoDB!');
});

app.listen(3000);
\`\`\`

---

## 4. ORM និង ODM

- **ORM (Object-Relational Mapping):** បំប្លែង Tables ទៅជា JavaScript Objects (ឧ. Sequelize សម្រាប់ SQL)។
- **ODM (Object-Document Mapping):** បំប្លែង Documents ទៅជា JavaScript Objects (ឧ. Mongoose សម្រាប់ MongoDB)។

**ឧទាហរណ៍ (Sequelize):**
\`\`\`javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING
});
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Database Integration

- **ជ្រើសរើស Database ឱ្យសមស្រប:** SQL សម្រាប់ Structured Data, NoSQL សម្រាប់ Flexibility។
- **ប្រើ ORM/ODM:** ដើម្បីសម្រួល Code។
- **គ្រប់គ្រង Connection:** បិទ Connection នៅពេលមិនប្រើ។
- **អាន Documentation:** [mongoosejs.com](https://mongoosejs.com), [sequelize.org](https://sequelize.org)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ ភ្ជាប់ MongoDB</h3>
<p>បង្កើត Express App ដែលភ្ជាប់ MongoDB។</p>
<pre><code class="language-javascript">
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });

app.get('/', (req, res) => {
  res.send('ភ្ជាប់ MongoDB ជោគជ័យ!');
});

app.listen(3000);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ ភ្ជាប់ SQLite ជាមួយ Sequelize</h3>
<p>បង្កើត Model សម្រាប់ SQLite�।</p>
<pre><code class="language-javascript">
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
  name: DataTypes.STRING
});

app.get('/', (req, res) => {
  res.send('ភ្ជាប់ SQLite ជោគជ័យ!');
});

app.listen(3000);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Databases មានតួនាទីអ្វីនៅក្នុង Backend?',
      options: ['Styling UI', 'រក្សាទុកនិងគ្រប់គ្រងទិន្នន័យ', 'Client-side Logic', 'Serve Static Files'],
      correct: 1,
      explanation: 'Databases ប្រើសម្រាប់រក្សាទុកនិងគ្រប់គ្រងទិន្នន័យ។'
    },
    {
      question: 'តើ Relational Databases ប្រើអ្វីសម្រាប់រចនាសម្ព័ន្ធ?',
      options: ['Documents', 'Tables', 'Key-Value Pairs', 'Graphs'],
      correct: 1,
      explanation: 'Relational Databases ប្រើ Tables ជាមួយ Rows និង Columns។'
    },
    {
      question: 'តើ NoSQL Databases មានគុណសម្បត្តិអ្វី?',
      options: ['Strong Consistency', 'Scalability និង Flexibility', 'Structured Data', 'SQL Queries'],
      correct: 1,
      explanation: 'NoSQL Databases មាន Scalability និង Flexible Schema។'
    },
    {
      question: 'តើ MongoDB ជា Database ប្រភេទណា?',
      options: ['Relational', 'NoSQL', 'Graph', 'Key-Value'],
      correct: 1,
      explanation: 'MongoDB ជា NoSQL Database (Document-based)។'
    },
    {
      question: 'តើ Sequelize ប្រើសម្រាប់ Database ប្រភេទណា?',
      options: ['MongoDB', 'Redis', 'MySQL', 'DynamoDB'],
      correct: 2,
      explanation: 'Sequelize ប្រើសម្រាប់ Relational Databases ដូចជា MySQL។'
    },
    {
      question: 'តើ Mongoose ជាអ្វី?',
      options: ['ORM', 'ODM', 'Middleware', 'Static File Server'],
      correct: 1,
      explanation: 'Mongoose ជា ODM សម្រាប់ MongoDB។'
    },
    {
      question: 'តើ Express.js មាន Built-in Database Support ដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បាន ប៉ុន្តែតែ SQL', 'បាន ប៉ុន្តែតែ NoSQL'],
      correct: 1,
      explanation: 'Express.js មិនមាន Built-in Database Support ទេ។'
    },
    {
      question: 'តើ ORM មានតួនាទីអ្វី?',
      options: ['Parse JSON', 'បំប្លែង Tables ទៅ Objects', 'Serve Files', 'Log Requests'],
      correct: 1,
      explanation: 'ORM បំប្លែង Tables ទៅ JavaScript Objects។'
    },
    {
      question: 'តើ Database ណាមួយស័ក្តិសមសម្រាប់ Structured Data?',
      options: ['MongoDB', 'Redis', 'MySQL', 'DynamoDB'],
      correct: 2,
      explanation: 'MySQL (Relational) ស័ក្តិសមសម្រាប់ Structured Data។'
    },
    {
      question: 'តើ NoSQL Databases មានគុណវិបត្តិអ្វី?',
      options: ['Less Consistency', 'Slow Performance', 'No Scalability', 'Structured Schema'],
      correct: 0,
      explanation: 'NoSQL Databases មាន Less Consistency ជាគុណវិបត្តិ។'
    },
    {
      question: 'តើ Library ណាមួយប្រើសម្រាប់ MongoDB ជាមួយ Express?',
      options: ['Sequelize', 'Mongoose', 'Knex.js', 'node-postgres'],
      correct: 1,
      explanation: 'Mongoose ប្រើសម្រាប់ MongoDB។'
    },
    {
      question: 'តើ CRUD Operations មានអ្វីខ្លះ?',
      options: ['Create, Read, Update, Delete', 'Connect, Run, Update, Deploy', 'Create, Render, Upload, Delete', 'Call, Read, Use, Drop'],
      correct: 0,
      explanation: 'CRUD គឺ Create, Read, Update, Delete។'
    },
    {
      question: 'តើ SQL Queries ប្រើជាមួយ Database ប្រភេទណា?',
      options: ['NoSQL', 'Relational', 'Key-Value', 'Graph'],
      correct: 1,
      explanation: 'SQL Queries ប្រើជាមួយ Relational Databases�।'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលភ្ជាប់ Database។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-db-intro\`។
   - ប្រើ \`npm init -y\` ដើម្បីបង្កើត \`package.json\`។
   - ដំឡើង Express.js និង Mongoose: \`npm install express mongoose\`។

2. **ភ្ជាប់ MongoDB:**
   - បង្កើត File: \`app.js\`។
   - ភ្ជាប់ MongoDB ទៅ Database \`mydb\` (URL: \`mongodb://localhost/mydb\`)។
   - Route \`/\` (GET): ឆ្លើយតប \`<h1>ភ្ជាប់ MongoDB ជោគជ័យ!</h1>\`។
   - បន្ផែម Error Handling បើ Connection បរាជ័យ។

3. **Test Application:**
   - ត្រូវប្រាកដថា MongoDB កំពុង Run (ប្រើ \`mongod\` នៅ Terminal)។
   - Run \`node app.js\`។
   - បើក Browser: \`http://localhost:3000\`។

**ការណែនាំ:** ប្រើ \`nodemon\` ដើម្បី Auto-restart Server។
    `,
    solution: `
\`\`\`text
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('ភ្ជាប់ MongoDB ជោគជ័យ'))
  .catch(err => console.error('Connection Error:', err));

app.get('/', (req, res) => {
  res.send('<h1>ភ្ជាប់ MongoDB ជោគជ័យ!</h1>');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`
`
  }
};

export default ExpressLesson3_1Content;