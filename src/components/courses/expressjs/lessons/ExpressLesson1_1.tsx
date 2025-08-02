import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី Express.js និង Backend Development',
  objectives: [
    'យល់ដឹងអំពី Express.js និងតួនាទីរបស់វាក្នុង Node.js',
    'ស្វែងយល់ពីអត្ថប្រយោជន៍នៃការប្រើ Express.js',
    'រៀនអំពី Backend Development និងសារៈសំខាន់របស់វា',
    'ប្រៀបធៀប Express.js ជាមួយ Frameworks ផ្សេងទៀត',
    'ស្វែងយល់ពីតម្រូវការជាមុនសម្រាប់ការរៀន Express.js',
  ],
  content: `
# ណែនាំអំពី Express.js និង Backend Development 🚀

---

**Express.js** គឺជា Web Framework សម្រាប់ Node.js ដែលសម្រួលដល់ការបង្កើត Backend Servers និង APIs។ វាត្រូវបានគេហៅថា "backbone" នៃ Node.js ដោយសារភាពសាមញ្ញ និងភាពបត់បែនរបស់វា។

---

## 1. អ្វីទៅជា Express.js?

Express.js គឺជា **Minimalist Web Framework** សម្រាប់ Node.js ដែលផ្តល់នូវឧបករណ៍សម្រាប់គ្រប់គ្រង HTTP Requests, Routes, និង Middleware។ វាជួយអ្នកបង្កើត Web Applications និង APIs ប្រកបដោយប្រសិទ្ធភាព។

**ឧទាហរណ៍ខ្លី:**
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('សួស្តីពី Express.js!');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ Port 3000');
});
\`\`\`

**លទ្ធផល:** នៅពេលចូលទៅ \`http://localhost:3000\` អ្នកនឹងឃើញ "សួស្តីពី Express.js!"។

---

## 2. មូលហេតុដែលត្រូវប្រើ Express.js

- **ភាពសាមញ្ញ:** ងាយស្រួលរៀន និងប្រើសម្រាប់អ្នកចាប់ផ្តើម។
- **ភាពបត់បែន:** អាចប្រើជាមួយ Database និង Frontend Frameworks ផ្សេងៗ។
- **Scalability:** ស័ក្តិសមសម្រាប់ Projects តូច និងធំ។
- **Community ធំ:** មាន Libraries និង Middleware ជាច្រើន។

---

## 3. Backend Development ជាអ្វី?

**Backend Development** គឺជាការអភិវឌ្ឍន៍ផ្នែក Server-side ដែលទទួលខុសត្រូវលើ:
- **Data Storage:** គ្រប់គ្រង Databases (ឧ. MongoDB, MySQL)។
- **APIs:** បង្កើត Endpoints សម្រាប់ Frontend ប្រើប្រាស់។
- **Business Logic:** ដំណើរការតក្កវិជ្ជា (ឧ. Authentication, Calculations)។

**ឧទាហរណ៍:** Backend ទទួល Request ពី Frontend ដំណើរការទិន្នន័យ និងផ្ញើ Response ត្រឡប់។

---

## 4. ប្រៀបធៀប Express.js ជាមួយ Frameworks ផ្សេង

| Framework | លក្ខណៈ | ភាពសាមញ្ញ | ការប្រើប្រាស់ |
|-----------|---------|-------------|---------------|
| **Express.js** | Minimalist, Flexible | ខ្ពស់ | APIs, Web Apps |
| **NestJS** | Structured, TypeScript-based | មធ្យម | Enterprise Apps |
| **Koa** | Lightweight, Modern | មធ្យម | Small Projects |

**Express.js** លេចធ្លោសម្រាប់ភាពសាមញ្ញ និង Community Support។

---

## 5. តម្រូវការជាមុន

- **JavaScript ES6+:** Arrow Functions, Promises, Async/Await។
- **Node.js Fundamentals:** Modules, Event Loop, HTTP Module។
- **Basic CLI Knowledge:** ប្រើ Terminal ដើម្បី Run Commands។
- **Text Editor:** VS Code, Sublime Text។

**គន្លឹះ:** បើអ្នកមិនទាន់ស្គាល់ JavaScript ES6+ សូមរៀនជាមុន។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Basic Express Server</h3>
<p>បង្កើត Express Server សាមញ្ញដែលឆ្លើយតបនឹង GET Request។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('សួស្តីពី Express.js!');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ Port 3000');
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Multiple Routes</h3>
<p>បង្កើត Server ដែលមាន Routes ច្រើន។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('ទំព័រដើម');
});

app.get('/about', (req, res) => {
  res.send('អំពីយើង');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ Port 3000');
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Express.js ជាអ្វី?',
      options: [
        'Frontend Framework',
        'Web Framework សម្រាប់ Node.js',
        'Database',
        'Programming Language'
      ],
      correct: 1,
      explanation: 'Express.js គឺជា Web Framework សម្រាប់ Node.js។'
    },
    {
      question: 'តើមូលហេតុអ្វីដែល Express.js ត្រូវបានគេប្រើ?',
      options: [
        'សម្រាប់ Styling Websites',
        'សម្រាប់ Backend Development',
        'សម្រាប់ Frontend Animations',
        'សម្រាប់ Database Management'
      ],
      correct: 1,
      explanation: 'Express.js ត្រូវបានប្រើសម្រាប់ Backend Development។'
    },
    {
      question: 'តើ Backend Development ទទួលខុសត្រូវលើអ្វីខ្លះ?',
      options: [
        'UI Design',
        'Data Storage និង APIs',
        'Client-side Rendering',
        'CSS Styling'
      ],
      correct: 1,
      explanation: 'Backend Development ទទួលខុសត្រូវលើ Data Storage និង APIs។'
    },
    {
      question: 'តើ Express.js មានភាពសាមញ្ញជាង Framework ណាមួយខាងក្រោម?',
      options: [
        'NestJS',
        'React',
        'Vue.js',
        'Angular'
      ],
      correct: 0,
      explanation: 'Express.js មានភាពសាមញ្ញជាង NestJS។'
    },
    {
      question: 'តើតម្រូវការជាមុនសម្រាប់រៀន Express.js មានអ្វីខ្លះ?',
      options: [
        'Python',
        'JavaScript ES6+',
        'HTML',
        'CSS'
      ],
      correct: 1,
      explanation: 'JavaScript ES6+ ជាតម្រូវការជាមុនសម្រាប់ Express.js។'
    },
    {
      question: 'តើ Express.js គាំទ្រការបង្កើតអ្វី?',
      options: [
        'Mobile Apps',
        'Web APIs',
        'Desktop Applications',
        'Games'
      ],
      correct: 1,
      explanation: 'Express.js គាំទ្រការបង្កើត Web APIs។'
    },
    {
      question: 'តើ Community នៃ Express.js មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'គ្មាន Libraries',
        'មាន Middleware និង Libraries ច្រើន',
        'គាំទ្រតែ Frontend',
        'គាំទ្រតែ Databases'
      ],
      correct: 1,
      explanation: 'Community នៃ Express.js ផ្តល់ Middleware និង Libraries ច្រើន។'
    },
    {
      question: 'តើ Express.js ស័ក្តិសមសម្រាប់ Project ប្រភេទណា?',
      options: [
        'តែ Projects តូច',
        'តែ Projects ធំ',
        'Projects ទាំងតូច និងធំ',
        'តែ Mobile Apps'
      ],
      correct: 2,
      explanation: 'Express.js ស័ក្តិសមសម្រាប់ Projects ទាំងតូច និងធំ។'
    },
    {
      question: 'តើ Backend ទទួលខុសត្រូវលើ Business Logic ដែរឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅ Frontend',
        'មិនបាន ព្រោះតែ CSS'
      ],
      correct: 0,
      explanation: 'Backend ទទួលខុសត្រូវលើ Business Logic។'
    },
    {
      question: 'តើ Node.js ជាអ្វី?',
      options: [
        'Browser',
        'JavaScript Runtime',
        'Frontend Framework',
        'Database'
      ],
      correct: 1,
      explanation: 'Node.js គឺជា JavaScript Runtime។'
    },
    {
      question: 'តើ Koa ខុសពី Express.js ដោយរបៀបណា?',
      options: [
        'Koa ជា Frontend Framework',
        'Koa មានភាពស្មុគស្មាញជាង',
        'Koa ទំនើប និង Lightweight ជាង',
        'Koa គាំទ្រតែ SQL Databases'
      ],
      correct: 2,
      explanation: 'Koa ទំនើប និង Lightweight ជាង Express.js។'
    },
    {
      question: 'តើ Express.js អាចប្រើជាមួយ Database បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែ MongoDB',
        'បាន ប៉ុន្តែតែ MySQL'
      ],
      correct: 0,
      explanation: 'Express.js អាចប្រើជាមួយ Database ផ្សេងៗ។'
    },
  ],
  lab: {
    task: `
បង្កើត Express.js Application សាមញ្ញដើម្បីស្វែងយល់ពី Backend Development។

**តម្រូវការ:**

1. **បង្កើត File:**
   - បង្កើត File: \`server.js\`។
   - បន្ថែម Express.js ដោយប្រើ npm។

2. **បង្កើត Express App:**
   - បង្កើត Route សម្រាប់ \`/\` ដែលឆ្លើយតបជា HTML: \`<h1>សួស្តីពី Express.js!</h1>\`។
   - បង្កើត Route សម្រាប់ \`/about\` ដែលឆ្លើយតបជា HTML: \`<h1>អំពីយើង</h1>\`។

3. **Run Server:**
   - ដំណើរការ Server នៅ Port 3000។
   - បើក Browser នៅ \`http://localhost:3000\` និង \`http://localhost:3000/about\` ដើម្បីពិនិត្យ។

4. **បន្ថែម Logging:**
   - បន្ថែម \`console.log('Server ដំណើរការ!')\` នៅពេល Server ចាប់ផ្តើម។

**ការណែនាំ:** ប្រើ Terminal ដើម្បី Run \`node server.js\` និង Browser Console ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
\`\`\`text
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>សួស្តីពី Express.js!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>អំពីយើង</h1>');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការ!');
});
\`\`\`
`
  }
};

export default ExpressLesson1_1Content;