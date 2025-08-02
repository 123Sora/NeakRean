import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson2_5Content: LessonContent = {
  title: 'Event Handling (ការគ្រប់គ្រងព្រឹត្តិការណ៍)',
  objectives: [
    'យល់ដឹងអំពី Event Handling ក្នុង React',
    'រៀនប្រើ Event Handlers ជាមួយ Elements',
    'រៀនចាប់យក Event Objects',
    'អនុវត្ត Event Handlers ជាមួយ State',
    'ស្វែងយល់ពី Synthetic Events'
  ],
  content: `
# Event Handling (ការគ្រប់គ្រងព្រឹត្តិការណ៍) 🎯

---

**Event Handling** គឺជាវិធីសម្រាប់គ្រប់គ្រង User Interactions ដូចជា Click, Input Change, Mouse Hover ជាដើម។

---

## 1. ការប្រើ Event Handlers
ប្រើ \`on[Event]\` Attributes (ឧ. \`onClick\`, \`onChange\`) ដើម្បីភ្ជាប់ Event Handlers។

\`\`\`jsx
function Button() {
  function handleClick() {
    alert('បានចុច!');
  }
  return <button onClick={handleClick}>ចុចខ្ញុំ</button>;
}
\`\`\`

---

## 2. Event Objects
Event Handlers ទទួល Event Object ដែលផ្ទុកព័ត៌មានអំពី Event។

\`\`\`jsx
function Input() {
  function handleChange(event) {
    console.log(event.target.value);
  }
  return <input type="text" onChange={handleChange} />;
}
\`\`\`

---

## 3. Event Handlers ជាមួយ State
ប្រើ Event Handlers ដើម្បី Update State។

\`\`\`jsx
import { useState } from 'react';

function Form() {
  const [text, setText] = useState('');
  
  function handleChange(event) {
    setText(event.target.value);
  }
  
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>អ្នកបានវាយ: {text}</p>
    </div>
  );
}
\`\`\`

---

## 4. Synthetic Events
React ប្រើ **Synthetic Events** ដែលជា Wrapper សម្រាប់ Native Browser Events ដើម្បីធានាភាពស៊ីគ្នា។

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }
  
  function handleReset() {
    setCount(0);
  }
  
  return (
    <div>
      <p>ចុច: {count}</p>
      <button onClick={handleClick}>បន្ថែម</button>
      <button onClick={handleReset}>កំណត់ឡើងវិញ</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Click Event</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Button() {
    function handleClick() {
      alert('បានចុច!');
    }
    return <button onClick={handleClick}>ចុចខ្ញុំ</button>;
  }
  ReactDOM.render(<Button />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function Button() {
  function handleClick() {
    alert('បានចុច!');
  }
  return <button onClick={handleClick}>ចុចខ្ញុំ</button>;
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Input Change Event</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Input() {
    const [text, setText] = useState('');
    function handleChange(event) {
      setText(event.target.value);
    }
    return (
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <p>អ្នកបានវាយ: {text}</p>
      </div>
    );
  }
  ReactDOM.render(<Input />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function Input() {
  const [text, setText] = useState('');
  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>អ្នកបានវាយ: {text}</p>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Event Handling ក្នុង React ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'គ្រប់គ្រង User Interactions',
        'Validate Props',
        'បង្កើត Components'
      ],
      correct: 1,
      explanation: 'Event Handling ប្រើសម្រាប់គ្រប់គ្រង User Interactions ដូចជា Click, Input Change។'
    },
    {
      question: 'តើ Attribute ណាមួយប្រើសម្រាប់ Click Events?',
      options: ['onClick', 'onChange', 'onSubmit', 'onHover'],
      correct: 0,
      explanation: '`onClick` ប្រើសម្រាប់ Click Events។'
    },
    {
      question: 'តើ Event Object ផ្ទុកអ្វី?',
      options: [
        'CSS Styles',
        'ព័ត៌មានអំពី Event',
        'State Values',
        'Props'
      ],
      correct: 1,
      explanation: 'Event Object ផ្ទុកព័ត៌មានអំពី Event ដូចជា `target.value`។'
    },
    {
      question: 'តើ `event.target.value` ប្រើសម្រាប់អ្វី?',
      options: [
        'ចាប់យក Value នៃ Input',
        'កំណត់ CSS',
        'Update State',
        'Validate Props'
      ],
      correct: 0,
      explanation: '`event.target.value` ចាប់យក Value នៃ Input Element។'
    },
    {
      question: 'តើ Synthetic Events គឺជាអ្វី?',
      options: [
        'Native Browser Events',
        'Wrapper សម្រាប់ Native Browser Events',
        'CSS Animations',
        'State Updates'
      ],
      correct: 1,
      explanation: 'Synthetic Events ជា Wrapper សម្រាប់ Native Browser Events ដើម្បីធានាភាពស៊ីគ្នា។'
    },
    {
      question: 'តើកូដ `<button onClick={() => alert(\'Hello\')}>Click</button>` ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Alert នៅពេលចុច',
        'Update State',
        'Render Component',
        'Validate Props'
      ],
      correct: 0,
      explanation: 'បង្ហាញ Alert នៅពេលចុច Button។'
    },
    {
      question: 'តើ `onChange` Attribute ប្រើជាមួយ Element ណា?',
      options: ['div', 'button', 'input', 'h1'],
      correct: 2,
      explanation: '`onChange` ប្រើជាមួយ Input Elements។'
    },
    {
      question: 'តើ Event Handlers អាច Update State បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Class Components', 'បានតែក្នុង Functional Components'],
      correct: 0,
      explanation: 'Event Handlers អាច Update State ដោយប្រើ Setter Functions។'
    },
    {
      question: 'តើកូដ `onClick={handleClick}` តម្រូវឱ្យ `handleClick` ជាអ្វី?',
      options: ['String', 'Function', 'Object', 'Array'],
      correct: 1,
      explanation: '`handleClick` ត្រូវតែជា Function។'
    },
    {
      question: 'តើកូដ `<input onChange={(e) => setText(e.target.value)} />` ធ្វើអ្វី?',
      options: [
        'Update State `text` ជាមួយ Input Value',
        'បង្កើត Input Element',
        'Validate Input',
        'Render Empty Input'
      ],
      correct: 0,
      explanation: 'Update State `text` ជាមួយ Value នៃ Input។'
    }
  ],
  lab: {
    task: `
บង្កើតឯកសារ HTML ដែលប្រើ Event Handling ដើម្បីបង្កើត Toggle Switch។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Toggle Switch"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`ToggleSwitch\` ដែល:
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`isOn\` ជាមួយ Initial Value \`false\`។
     - Render \`<p>ស្ថានភាព: {isOn ? 'បើក' : 'បិទ'}</p>\`។
     - Render \`<button onClick={() => setIsOn(!isOn)}>ប្តូរ</button>\`។
   - Render \`ToggleSwitch\` Component ទៅក្នុង \`<div id="root">\`។

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
  <title>React Toggle Switch</title>
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
    function ToggleSwitch() {
      const [isOn, setIsOn] = React.useState(false);
      return (
        <div>
          <p>ស្ថានភាព: {isOn ? 'បើក' : 'បិទ'}</p>
          <button onClick={() => setIsOn(!isOn)}>ប្តូរ</button>
        </div>
      );
    }
    ReactDOM.render(<ToggleSwitch />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson2_5Content;