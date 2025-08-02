import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson2_6Content: LessonContent = {
  title: 'Conditional Rendering (ការបង្ហាញតាមលក្ខខណ្ឌ)',
  objectives: [
    'យល់ដឹងអំពី Conditional Rendering ក្នុង React',
    'រៀនប្រើ If Statements នៅក្នុង JSX',
    'រៀនប្រើ Ternary Operator',
    'រៀនប្រើ Logical && Operator',
    'អនុវត្ត Conditional Rendering ជាមួយ State'
  ],
  content: `
# Conditional Rendering (ការបង្ហាញតាមលក្ខខណ្ឌ) 🔄

---

**Conditional Rendering** គឺជាវិធីសម្រាប់បង្ហាញ UI ផ្សេងៗគ្នា អាស្រ័យលើលក្ខខណ្ឌ។

---

## 1. If Statements
ប្រើ If Statements នៅក្នុង JavaScript មុនពេល Return JSX។

\`\`\`jsx
function LoginStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>សូមស្វាគមន៍!</p>;
  }
  return <p>សូម Login!</p>;
}
\`\`\`

---

## 2. Ternary Operator
ប្រើ Ternary Operator (\`?:\`) ក្នុង JSX សម្រាប់ Inline Conditions។

\`\`\`jsx
function LoginStatus({ isLoggedIn }) {
  return <p>{isLoggedIn ? 'សូមស្វាគមន៍!' : 'សូម Login!'}</p>;
}
\`\`\`

---

## 3. Logical && Operator
ប្រើ \`&&\` ដើម្បី Render Element នៅពេលលក្ខខណ្ឌជា \`true\`។

\`\`\`jsx
function Notification({ hasNotification }) {
  return (
    <div>
      {hasNotification && <p>អ្នកមានការជូនដំណឹងថ្មី!</p>}
    </div>
  );
}
\`\`\`

---

## 4. Conditional Rendering ជាមួយ State
ប្រើ State ដើម្បីគ្រប់គ្រង Conditional Rendering។

\`\`\`jsx
import { useState } from 'react';

function ToggleMessage() {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShow(!show)}>ប្តូរសារ</button>
      {show && <p>នេះជាសារលាក់!</p>}
    </div>
  );
}
\`\`\`

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      {isLoggedIn ? (
        <p>សូមស្វាគមន៍!</p>
      ) : (
        <p>សូម Login!</p>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Ternary Operator</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function LoginStatus({ isLoggedIn }) {
    return <p>{isLoggedIn ? 'សូមស្វាគមន៍!' : 'សូម Login!'}</p>;
  }
  ReactDOM.render(<LoginStatus isLoggedIn={true} />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function LoginStatus({ isLoggedIn }) {
  return <p>{isLoggedIn ? 'សូមស្វាគមន៍!' : 'សូម Login!'}</p>;
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Logical && Operator</h3>
<div id="root2"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Notification({ hasNotification }) {
    return <div>{hasNotification && <p>អ្នកមានការជូនដំណឹងថ្មី!</p>}</div>;
  }
  ReactDOM.render(<Notification hasNotification={true} />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function Notification({ hasNotification }) {
  return <div>{hasNotification && <p>អ្នកមានការជូនដំណឹងថ្មី!</p>}</div>;
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Conditional Rendering ក្នុង React ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Events',
        'បង្ហាញ UI ផ្សេងៗគ្នាអាស្រ័យលើលក្ខខណ្ឌ',
        'Validate Props',
        'បង្កើត Components'
      ],
      correct: 1,
      explanation: 'Conditional Rendering បង្ហាញ UI ផ្សេងៗគ្នាអាស្រ័យលើលក្ខខណ្ឌ។'
    },
    {
      question: 'តើ Ternary Operator នៅក្នុង JSX មានទម្រង់ដូចម្តេច?',
      options: [
        'if/else',
        'condition ? value1 : value2',
        '&&',
        'switch'
      ],
      correct: 1,
      explanation: 'Ternary Operator មានទម្រង់ `condition ? value1 : value2`។'
    },
    {
      question: 'តើ Logical && Operator ធ្វើអ្វីនៅក្នុង JSX?',
      options: [
        'Render Element នៅពេលលក្ខខណ្ឌជា `true`',
        'Render Element នៅពេលលក្ខខណ្ឌជា `false`',
        'Validate Props',
        'Loop Elements'
      ],
      correct: 0,
      explanation: 'Logical && Operator Render Element នៅពេលលក្ខខណ្ឌជា `true`។'
    },
    {
      question: 'តើ If Statements អាចប្រើនៅក្នុង JSX ដោយផ្ទាល់បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Class Components', 'បានតែក្នុង Functional Components'],
      correct: 1,
      explanation: 'If Statements មិនអាចប្រើនៅក្នុង JSX ដោយផ្ទាល់ ត្រូវប្រើមុន Return។'
    },
    {
      question: 'តើកូដ `{isLoggedIn && <p>សូមស្វាគមន៍!</p>}` នឹងបង្ហាញអ្វីប្រសិនបើ `isLoggedIn` ជា `false`?',
      options: ['សូមស្វាគមន៍!', 'Nothing', 'Error', 'undefined'],
      correct: 1,
      explanation: 'Logical && Operator មិន Render អ្វីទេ ប្រសិនបើលក្ខខណ្ឌជា `false`។'
    },
    {
      question: 'តើកូដ `isLoggedIn ? <p>សូមស្វាគមន៍!</p> : <p>សូម Login!</p>` នឹងបង្ហាញអ្វីប្រសិនបើ `isLoggedIn` ជា `true`?',
      options: ['សូម Login!', 'សូមស្វាគមន៍!', 'Error', 'Nothing'],
      correct: 1,
      explanation: 'Ternary Operator បង្ហាញ `<p>សូមស្វាគមន៍!</p>` ប្រសិនបើ `isLoggedIn` ជា `true`។'
    },
    {
      question: 'តើ Conditional Rendering អាចប្រើជាមួយ State បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Class Components', 'បានតែក្នុង Functional Components'],
      correct: 0,
      explanation: 'Conditional Rendering អាចប្រើជាមួយ State ក្នុង Functional និង Class Components។'
    },
    {
      question: 'តើវិធីណាមួយអាចប្រើសម្រាប់ Conditional Rendering?',
      options: [
        'If Statements, Ternary Operator, Logical &&',
        'for Loops',
        'switch Statements',
        'try/catch'
      ],
      correct: 0,
      explanation: 'If Statements, Ternary Operator, និង Logical && អាចប្រើសម្រាប់ Conditional Rendering។'
    },
    {
      question: 'តើកូដ `if (isLoggedIn) { return <p>សូមស្វាគមន៍!</p>; }` ត្រូវដាក់នៅទីតាំងណា?',
      options: [
        'ក្នុង JSX',
        'មុន Return ក្នុង Component',
        'ក្នុង CSS',
        'ក្នុង Props'
      ],
      correct: 1,
      explanation: 'If Statements ត្រូវដាក់មុន Return ក្នុង Component។'
    },
    {
      question: 'តើ Ternary Operator អាចប្រើនៅក្នុង Attributes បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Class Components', 'បានតែក្នុង Functional Components'],
      correct: 0,
      explanation: 'Ternary Operator អាចប្រើនៅក្នុង Attributes ក្នុង JSX។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Conditional Rendering ដើម្បីបង្ហាញសារលាក់។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Conditional Rendering"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`ToggleMessage\` ដែល:
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`show\` ជាមួយ Initial Value \`false\`។
     - Render \`<button onClick={() => setShow(!show)}>ប្តូរសារ</button>\`។
     - ប្រើ Logical && Operator ដើម្បី Render \`<p>នេះជាសារលាក់!</p>\` នៅពេល \`show\` ជា \`true\`។
   - Render \`ToggleMessage\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`p\`។
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Conditional Rendering</title>
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
      margin: 5px;
      background-color: #2c3e50;
      color: white;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/Babel.min.js"></script>
  <script type="text/babel">
    function ToggleMessage() {
      const [show, setShow] = React.useState(false);
      return (
        <div>
          <button onClick={() => setShow(!show)}>ប្តូរសារ</button>
          {show && <p>នេះជាសារលាក់!</p>}
        </div>
      );
    }
    ReactDOM.render(<ToggleMessage />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson2_6Content;