import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson9_1Content: LessonContent = {
  title: 'ក្របខ័ណ្ឌ និងបណ្ណាល័យ JavaScript (JavaScript Frameworks/Libraries)',
  objectives: [
    'ស្វែងយល់អំពីក្របខ័ណ្ឌ និងបណ្ណាល័យ JavaScript ដូចជា React, Vue.js និង Angular',
    'រៀនការប្រើ React ដើម្បីបង្កើត Component សាមញ្ញ',
    'អនុវត្តន៍ការគ្រប់គ្រង State នៅក្នុង React',
    'ស្វែងយល់អំពី JSX និងការបង្កើត UI អន្តរកម្ម',
    'រៀន Best Practices សម្រាប់ការប្រើ Frameworks'
  ],
  content: `
# ក្របខ័ណ្ឌ និងបណ្ណាល័យ JavaScript (JavaScript Frameworks/Libraries) 🛠️

---

**ក្របខ័ណ្ឌ និងបណ្ណាល័យ JavaScript** ដូចជា React, Vue.js, និង Angular ជួយសម្រួលការអភិវឌ្ឍ Web Applications ដោយផ្តល់នូវរចនាសម្ព័ន្ធ និង Tools សម្រាប់បង្កើត UI អន្តរកម្ម។ នៅក្នុងមេរៀននេះ យើងនឹងផ្តោតលើ **React**។

---

## 1. ការណែនាំអំពី React
React គឺជាបណ្ណាល័យ JavaScript សម្រាប់បង្កើត User Interfaces ដោយប្រើ Components។

\`\`\`javascript
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>សួស្តីពី React!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`

---

## 2. ការបង្កើត Component
Components គឺជាប្លុកសំណង់នៃ React។

\`\`\`javascript
function Welcome({ name }) {
  return <p>សួស្តី, {name}!</p>;
}

function App() {
  return (
    <div>
      <Welcome name="ភ្នំពេញ" />
      <Welcome name="សៀមរាប" />
    </div>
  );
}
\`\`\`

---

## 3. ការគ្រប់គ្រង State
ប្រើ \`useState\` Hook ដើម្បីគ្រប់គ្រង State។

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
\`\`\`

---

## 4. JSX
JSX គឺជា Syntax Extension សម្រាប់ JavaScript ដែលអនុញ្ញាតឱ្យសរសេរ HTML នៅក្នុង JavaScript។

\`\`\`javascript
const element = <h1 className="title">សួស្តី!</h1>;
\`\`\`

---

## 5. ការប្រើ React ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល (ប្រើ CDN):**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Counter</title>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/babel.min.js"></script>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; }
    p { font-size: 18px; color: #333; }
    button { padding: 10px; cursor: pointer; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    function Counter() {
      const [count, setCount] = React.useState(0);
      return (
        <div>
          <h1>រាប់ចំនួន</h1>
          <p>ចំនួន: {count}</p>
          <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
          <button onClick={() => setCount(count - 1)}>បន្ថយ</button>
        </div>
      );
    }

    ReactDOM.render(<Counter />, document.getElementById('root'));
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** បង្ហាញ Counter ដែលអ្នកអាចបន្ថែម ឬបន្ថយចំនួន។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Component សាមញ្ញ</h3>
<div id="ex1"></div>
<script type="text/babel">
  function Welcome({ name }) {
    return <p>សួស្តី, {name}!</p>;
  }
  ReactDOM.render(<Welcome name="កម្ពុជា" />, document.getElementById('ex1'));
</script>
<pre><code class="language-javascript">
function Welcome({ name }) {
  return <p>សួស្តី, {name}!</p>;
}
ReactDOM.render(<Welcome name="កម្ពុជា" />, document.getElementById('ex1'));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Counter ជាមួយ State</h3>
<div id="ex2"></div>
<script type="text/babel">
  function CounterEx() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <p>ចំនួន: {count}</p>
        <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
      </div>
    );
  }
  ReactDOM.render(<CounterEx />, document.getElementById('ex2'));
</script>
<pre><code class="language-javascript">
function CounterEx() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជាគោលបំណងនៃ React?',
      options: [
        'បង្កើត User Interfaces',
        'គ្រប់គ្រង Server',
        'ធ្វើប្រមាណវិធី',
        'រក្សាទុក Data'
      ],
      correct: 0,
      explanation: 'React គឺជាបណ្ណាល័យសម្រាប់បង្កើត User Interfaces។'
    },
    {
      question: 'តើ Component នៅក្នុង React គឺជាអ្វី?',
      options: [
        'ប្លុកសំណង់នៃ UI',
        'Function សម្រាប់ Server',
        'Object សម្រាប់ Data',
        'Event Listener'
      ],
      correct: 0,
      explanation: 'Components គឺជាប្លុកសំណង់នៃ UI នៅក្នុង React។'
    },
    {
      question: 'តើ `useState` Hook ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'បន្ថែម Elements',
        'ផ្ញើ Request',
        'បង្កើត Animation'
      ],
      correct: 0,
      explanation: '`useState` គ្រប់គ្រង State នៅក្នុង Functional Components។'
    },
    {
      question: 'តើ JSX គឺជាអ្វី?',
      options: [
        'Syntax Extension សម្រាប់ JavaScript',
        'CSS Framework',
        'API Library',
        'Database Tool'
      ],
      correct: 0,
      explanation: 'JSX អនុញ្ញាតឱ្យសរសេរ HTML នៅក្នុង JavaScript។'
    },
    {
      question: 'តើ Attribute ណាមួយប្រើជំនួស `class` នៅក្នុង JSX?',
      options: ['className', 'id', 'style', 'class'],
      correct: 0,
      explanation: '`className` ប្រើជំនួស `class` នៅក្នុង JSX។'
    },
    {
      question: 'តើ `ReactDOM.render` ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Component ទៅ DOM',
        'បន្ថែម Event Listener',
        'ផ្ញើ Request',
        'គណនាលេខ'
      ],
      correct: 0,
      explanation: '`ReactDOM.render` បង្ហាញ Component ទៅ DOM។'
    },
    {
      question: 'តើ Best Practice នៅក្នុង React គឺជាអ្វី?',
      options: [
        'បង្កើត Reusable Components',
        'ប្រើ Global Variables',
        'សរសេរកូដវែង',
        'ជៀសវាង State'
      ],
      correct: 0,
      explanation: 'Reusable Components ធ្វើឱ្យកូដងាយស្រួលថែទាំ។'
    },
    {
      question: 'តើ `useState` Return អ្វី?',
      options: [
        'Array ដែលមាន State និង Setter Function',
        'Object',
        'String',
        'Number'
      ],
      correct: 0,
      explanation: '`useState` Return Array ដែលមាន State និង Setter Function។'
    },
    {
      question: 'តើកូដ `<button onClick={() => setCount(count + 1)}>` ធ្វើអ្វី?',
      options: [
        'បន្ថែម State ដោយ ១',
        'លុប Element',
        'ផ្ញើ Request',
        'បង្កើត Component'
      ],
      correct: 0,
      explanation: 'វាបន្ថែម State `count` ដោយ ១។'
    },
    {
      question: 'តើ React ប្រើ CDN អ្វីខ្លះ?',
      options: [
        'react.development.js និង react-dom.development.js',
        'jquery.js',
        'bootstrap.js',
        'node.js'
      ],
      correct: 0,
      explanation: 'React ប្រើ `react.development.js` និង `react-dom.development.js` ពី CDN។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្កើត React Component សម្រាប់ Counter។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Counter"។
   - បន្ថែម React CDNs:
     - \`https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js\`
     - \`https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js\`
     - \`https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/babel.min.js\`
   - បន្ថែម \`<div id="root"></div>\` នៅក្នុង \`<body>\`។

2. **JavaScript (React):**
   - បន្ថែម \`<script type="text/babel">\` នៅក្នុង \`<body>\`។
   - បង្កើត Functional Component \`Counter\` ដែលប្រើ \`useState\` ដើម្បីគ្រប់គ្រង \`count\` (ចាប់ផ្តើមជា 0)។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "រាប់ចំនួន"។
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញ \`count\`។
   - បន្ថែម \`<button>\` ពីរ៖ "បន្ថែម" (បង្កើន \`count\` ដោយ ១) និង "បន្ថយ" (បន្ថយ \`count\` ដោយ ១)។
   - ប្រើ \`ReactDOM.render\` ដើម្បី Render Component ទៅ \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`<p>\`។
     - កំណត់ \`padding: 10px;\` និង \`cursor: pointer;\` សម្រាប់ \`<button>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Counter</title>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/babel.min.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: #333;
    }
    button {
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    // Functional Component សម្រាប់ Counter
    function Counter() {
      const [count, setCount] = React.useState(0);

      return (
        <div>
          <h1>រាប់ចំនួន</h1>
          <p>ចំនួន: {count}</p>
          <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
          <button onClick={() => setCount(count - 1)}>បន្ថយ</button>
        </div>
      );
    }

    // Render Component ទៅ DOM
    ReactDOM.render(<Counter />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default JSLesson9_1Content;