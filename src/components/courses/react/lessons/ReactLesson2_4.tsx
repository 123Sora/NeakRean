import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson2_4Content: LessonContent = {
  title: 'State និង Hooks',
  objectives: [
    'យល់ដឹងអំពី State និងអត្ថន័យរបស់វា',
    'ស្វែងយល់ពី Hook `useState` នៅក្នុង Functional Components',
    'រៀនប្រើ `useState` ដើម្បីគ្រប់គ្រង Dynamic Data',
    'ស្វែងយល់ពីភាពខុសគ្នារវាង State និង Props',
    'អនុវត្តការបន្ថែម និងកែប្រែ State'
  ],
  content: `
# State និង Hooks 🗃️

---

**State** គឺជា Data ដែល Component គ្រប់គ្រង និងអាចកែប្រែបាន ផ្ទុយពី Props ដែល Read-Only។ **Hooks** ជា Functions ដែលអនុញ្ញាតឱ្យ Functional Components ប្រើ State និង React Features ផ្សេងៗ។

---

## 1. អ្វីទៅជា State?
State គឺជា Object ដែលផ្ទុក Data ដែល Component អាចកែប្រែបាន។ នៅពេល State ផ្លាស់ប្តូរ Component នឹង Re-render។

---

## 2. Hook \`useState\`
\`useState\` គឺជា Hook ដែលប្រើសម្រាប់បង្កើត និងគ្រប់គ្រង State ក្នុង Functional Components។

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
\`\`\`

- \`useState(0)\`: កំណត់ Initial State ជា \`0\`។
- \`count\`: State Value។
- \`setCount\`: Function សម្រាប់ Update State។

---

## 3. ភាពខុសគ្នារវាង State និង Props
- **Props**: Read-Only, បញ្ជូនពី Parent ទៅ Child។
- **State**: Component គ្រប់គ្រងផ្ទាល់ និងអាចកែប្រែបាន។

---

## 4. ការបន្ថែម និងកែប្រែ State
ប្រើ Function ដែលផ្តល់ដោយ \`useState\` (ឧ. \`setCount\`) ដើម្បី Update State។

\`\`\`jsx
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>ស្ថានភាព: {isOn ? 'បើក' : 'បិទ'}</p>
      <button onClick={() => setIsOn(!isOn)}>ប្តូរ</button>
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
  const [name, setName] = useState('');
  
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      <p>ឈ្មោះ: {name || 'គ្មានឈ្មោះ'}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Counter ជាមួយ useState</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>រាប់: {count}</p>
        <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
      </div>
    );
  }
  ReactDOM.render(<Counter />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Toggle Button</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Toggle() {
    const [isOn, setIsOn] = useState(false);
    return (
      <div>
        <p>ស្ថានភាព: {isOn ? 'បើក' : 'បិទ'}</p>
        <button onClick={() => setIsOn(!isOn)}>ប្តូរ</button>
      </div>
    );
  }
  ReactDOM.render(<Toggle />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <p>ស្ថានភាព: {isOn ? 'បើក' : 'បិទ'}</p>
      <button onClick={() => setIsOn(!isOn)}>ប្តូរ</button>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
        {
        question: 'តើ State នៅក្នុង React គឺជាអ្វី?',
        options: [
            'Data ដែល Read-Only',
            'Data ដែល Component គ្រប់គ្រង និងកែប្រែបាន',
            'CSS Properties',
            'Event Handlers'
        ],
        correct: 1,
        explanation: 'State គឺជា Data ដែល Component គ្រប់គ្រង និងអាចកែប្រែបាន។'
        },
        {
        question: 'តើ Hook `useState` ប្រើសម្រាប់អ្វី?',
        options: [
            'គ្រប់គ្រង Events',
            'គ្រប់គ្រង State ក្នុង Functional Components',
            'បង្កើត Components',
            'Validate Props'
        ],
        correct: 1,
        explanation: '`useState` ប្រើសម្រាប់គ្រប់គ្រង State ក្នុង Functional Components។'
        },
        {
        question: 'តើ `useState` Return អ្វី?',
        options: [
            'Array ដែលមាន State Value និង Setter Function',
            'Object',
            'Function',
            'String'
        ],
        correct: 0,
        explanation: '`useState` Return Array ដែលមាន State Value និង Setter Function។'
        },
        {
        question: 'តើការផ្លាស់ប្តូរ State ប៉ះពាល់អ្វី?',
        options: [
            'Component Re-renders',
            'Props ផ្លាស់ប្តូរ',
            'CSS Updates',
            'Database Updates'
        ],
        correct: 0,
        explanation: 'នៅពេល State ផ្លាស់ប្តូរ Component នឹង Re-render។'
        },
        {
        question: 'តើអ្វីជាភាពខុសគ្នារវាង State និង Props?',
        options: [
            'State គឺ Read-Only, Props អាចកែប្រែបាន',
            'State អាចកែប្រែបាន, Props គឺ Read-Only',
            'ទាំង State និង Props អាចកែប្រែបាន',
            'ទាំង State និង Props គឺ Read-Only'
        ],
        correct: 1,
        explanation: 'State អាចកែប្រែបាន, Props គឺ Read-Only។'
        },
        {
        question: 'តើកូដ `const [count, setCount] = useState(0);` ធ្វើអ្វី?',
        options: [
            'បង្កើត State `count` ជាមួយ Initial Value `0`',
            'បង្កើត Prop `count`',
            'បង្កើត Event Handler',
            'Validate State'
        ],
        correct: 0,
        explanation: 'បង្កើត State `count` ជាមួយ Initial Value `0` និង Setter Function `setCount`។'
        },
        {
        question: 'តើកូដ `setCount(count + 1)` ធ្វើអ្វី?',
        options: [
            'បន្ថែម 1 ទៅ State `count`',
            'បន្ថែម 1 ទៅ Prop `count`',
            'លុប State `count`',
            'បង្កើត Component ថ្មី'
        ],
        correct: 0,
        explanation: 'Update State `count` ដោយបន្ថែម 1។'
        },
        {
        question: 'តើ `useState` អាចប្រើបានក្នុង Component ប្រភេទណា?',
        options: [
            'Class Components',
            'Functional Components',
            'ទាំង Functional និង Class Components',
            'មិនអាចប្រើបាន'
        ],
        correct: 1,
        explanation: '`useState` ប្រើបានតែក្នុង Functional Components។'
        },
        {
        question: 'តើ State អាចជា Data Type អ្វីបានខ្លះ?',
        options: [
            'String ប៉ុណ្ណោះ',
            'Number ប៉ុណ្ណោះ',
            'String, Number, Object, Array, Boolean',
            'HTML Elements'
        ],
        correct: 2,
        explanation: 'State អាចជា String, Number, Object, Array, Boolean, ជាដើម។'
        },
        {
        question: 'តើកូដ `setName("សុខា")` នឹងបង្កអ្វីប្រសិនបើ `name` ជា State?',
        options: [
            'Error',
            'Update State `name` ទៅ "សុខា"',
            'Update Prop `name`',
            'Render Empty Component'
        ],
        correct: 1,
        explanation: 'Update State `name` ទៅ "សុខា" និង Re-render Component។'
        }
    ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ \`useState\` ដើម្បីបង្កើត Counter App។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Counter App"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`Counter\` ដែល:
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`count\` ជាមួយ Initial Value \`0\`។
     - Render \`<p>រាប់: {count}</p>\`។
     - Render Button ពីរ៖ "បន្ថែម" (បន្ថែម 1 ទៅ \`count\`) និង "ដក" (ដក 1 ពី \`count\`)។
   - Render \`Counter\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`p\`។
     - កំណត់ \`padding: 10px; margin: 5px;\` និង \`background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Counter App</title>
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
    function Counter() {
      const [count, setCount] = React.useState(0);
      return (
        <div>
          <p>រាប់: {count}</p>
          <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
          <button onClick={() => setCount(count - 1)}>ដក</button>
        </div>
      );
    }
    ReactDOM.render(<Counter />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson2_4Content;