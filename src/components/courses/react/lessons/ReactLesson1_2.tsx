import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson1_2Content: LessonContent = {
  title: 'Setup Development Environment',
  objectives: [
    'រៀនដំឡើង Node.js និង npm',
    'ស្វែងយល់ពីការប្រើ create-react-app',
    'ស្វែងយល់ពីការប្រើ Vite សម្រាប់ Project ថ្មី',
    'យល់ពី Project Structure នៃ React App',
    'សាកល្បង Run React App ដំបូង'
  ],
  content: `
# Setup Development Environment 🛠️

---
Development Environment គឺជាជំហានដំបូងដ៏សំខាន់សម្រាប់ការអភិវឌ្ឍន៍ ReactJS។

---

## 1. ការដំឡើង Node.js និង npm
- **Node.js**: ជា Runtime Environment សម្រាប់ដំណើរការ JavaScript នៅខាងក្រៅ Browser។
- **npm**: Node Package Manager សម្រាប់គ្រប់គ្រង Libraries និង Dependencies។
- ទាញយក Node.js ពី [nodejs.org](https://nodejs.org) និងដំឡើង។
- ពិនិត្យកំណែ ( version )៖
  \`\`\`bash
  node -v
  npm -v
  \`\`\`

---

## 2. ការប្រើ create-react-app
**create-react-app** គឺជា Tool ដែលជួយបង្កើត React Project ដោយស្វ័យប្រវត្តិ។

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

- **npx**: ដំណើរការ Package ដោយមិនចាំបាច់ដំឡើងជាមុន។
- **npm start**: ដំណើរការ App នៅលើ Browser (http://localhost:3000)។

---

## 3. ការប្រើ Vite
**Vite** គឺជា Build Tool ថ្មីដែលលឿនជាង create-react-app។

\`\`\`bash
npm create vite@latest my-vite-app -- --template react
cd my-vite-app
npm install
npm run dev
\`\`\`

- **npm run dev**: ដំណើរការ App នៅលើ http://localhost:5173។

---

## 4. យល់ដឹងពី Project Structure
- **create-react-app Structure**:
  \`\`\`
  my-app/
  ├── node_modules/        # Dependencies
  ├── public/             # Static Files (index.html, favicon)
  ├── src/               # Source Code (App.js, index.js)
  ├── package.json       # Project Config
  └── README.md
  \`\`\`

- **Vite Structure**:
  \`\`\`
  my-vite-app/
  ├── node_modules/
  ├── public/
  ├── src/               # Source Code (main.jsx, App.jsx)
  ├── vite.config.js     # Vite Config
  └── package.json
  \`\`\`

---

## 5. ការ Run React App ដំបូង
បន្ទាប់ពីបង្កើត Project សាកល្បងដំណើរការ៖

\`\`\`bash
npm start   # សម្រាប់ create-react-app
npm run dev # សម្រាប់ Vite
\`\`\`

**លទ្ធផល:** Browser នឹងបើក http://localhost:3000 (ឬ 5173) និងបង្ហាញ React App លំនាំដើម។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Project ជាមួយ create-react-app</h3>
<p>បើក Terminal និងសរសេរពាក្យបញ្ជា៖</p>
<pre><code class="language-bash">
npx create-react-app my-app
cd my-app
npm start
</code></pre>
<p>បន្ទាប់មក Browser នឹងបង្ហាញ React App លំនាំដើម។</p>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Project ជាមួយ Vite</h3>
<p>បើក Terminal និងសរសេរពាក្យបញ្ជា៖</p>
<pre><code class="language-bash">
npm create vite@latest my-vite-app -- --template react
cd my-vite-app
npm install
npm run dev
</code></pre>
<p>បើក http://localhost:5173 ដើម្បីមើល App។</p>
`
  ],
  quiz: [
    {
      question: 'តើ Node.js គឺជាអ្វី?',
      options: [
        'Browser',
        'Runtime Environment សម្រាប់ JavaScript',
        'Database',
        'CSS Framework'
      ],
      correct: 1,
      explanation: 'Node.js គឺជា Runtime Environment សម្រាប់ដំណើរការ JavaScript នៅខាងក្រៅ Browser។'
    },
    {
      question: 'តើ npm ធ្វើអ្វី?',
      options: [
        'គ្រប់គ្រង Packages និង Dependencies',
        'បង្កើត UI Components',
        'គ្រប់គ្រង Database',
        'បង្កើត CSS'
      ],
      correct: 0,
      explanation: 'npm (Node Package Manager) គ្រប់គ្រង Libraries និង Dependencies។'
    },
    {
      question: 'តើពាក្យបញ្ជា `npx create-react-app my-app` ធ្វើអ្វី?',
      options: [
        'បង្កើត React Project ថ្មី',
        'ដំឡើង Node.js',
        'Run React App',
        'លុប Project'
      ],
      correct: 0,
      explanation: '`npx create-react-app my-app` បង្កើត React Project ថ្មី។'
    },
    {
      question: 'តើ Vite មានអត្ថប្រយោជន៍អ្វីបើប្រៀបធៀបជាមួយ create-react-app?',
      options: [
        'លឿនជាង',
        'មាន Database',
        'មាន CSS Framework',
        'មាន Components ច្រើនជាង'
      ],
      correct: 0,
      explanation: 'Vite លឿនជាង create-react-app ដោយសារប្រើ ES Modules។'
    },
    {
      question: 'តើ Folder ណាមួយផ្ទុក Source Code នៅក្នុង React Project?',
      options: ['public', 'node_modules', 'src', 'package.json'],
      correct: 2,
      explanation: 'Folder `src` ផ្ទុក Source Code នៃ React App។'
    }
  ],
  lab: {
    task: `
បង្កើត React Project ដំបូងដោយប្រើ create-react-app និងកែប្រែ App ដើម្បីបង្ហាញសារស្វាគមន៍។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បើក Terminal និងប្រើពាក្យបញ្ជា:
     \`\`\`bash
     npx create-react-app my-first-react-app
     cd my-first-react-app
     \`\`\`

2. **កែប្រែ App Component:**
   - បើកឯកសារ \`src/App.js\`។
   - កែប្រែ Functional Component \`App\` ដើម្បី Return:
     \`\`\`jsx
     <div>
       <h1>សួស្តីពី React App ដំបូងរបស់ខ្ញុំ!</h1>
       <p>នេះជាការសាកល្បង React ដំបូង។</p>
     </div>
     \`\`\`

3. **Styling:**
   - បើក \`src/App.css\` និងបន្ថែម:
     \`\`\`css
     div {
       text-align: center;
       font-family: Arial, sans-serif;
     }
     h1 {
       color: #2c3e50;
     }
     p {
       font-size: 18px;
       color: #34495e;
     }
     \`\`\`

4. **Run Project:**
   - ប្រើពាក្យបញ្ជា:
     \`\`\`bash
     npm start
     \`\`\`
   - បើក http://localhost:3000 ដើម្បីមើលលទ្ធផល។

**ការណែនាំ:** ពិនិត្យ Console (F12) សម្រាប់កំហុស និងធានាថា Node.js ត្រូវបានដំឡើង។
    `,
    solution: `
/* src/App.js */
import './App.css';

function App() {
  return (
    <div>
      <h1>សួស្តីពី React App ដំបូងរបស់ខ្ញុំ!</h1>
      <p>នេះជាការសាកល្បង React ដំបូង។</p>
    </div>
  );
}

export default App;

/* src/App.css */
div {
  text-align: center;
  font-family: Arial, sans-serif;
}
h1 {
  color: #2c3e50;
}
p {
  font-size: 18px;
  color: #34495e;
}
`
  }
};

export default ReactLesson1_2Content;