import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson3_3Content: LessonContent = {
  title: 'Hook useRef',
  objectives: [
    'យល់ដឹងអំពី Hook `useRef` និងអត្ថន័យរបស់វា',
    'ស្វែងយល់ពីការប្រើ `useRef` សម្រាប់ DOM References',
    'រៀនប្រើ `useRef` ដើម្បីផ្ទុក Mutable Values',
    'អនុវត្ត `useRef` ជាមួយ Input Focus',
    'ស្វែងយល់ពីភាពខុសគ្នារវាង `useRef` និង `useState`'
  ],
  content: `
# Hook useRef 📍

---

**\`useRef\`** គឺជា Hook ដែលប្រើសម្រាប់ផ្ទុក Reference ទៅ DOM Elements ឬ Mutable Values ដែលមិនបង្ក Re-render នៅពេលផ្លាស់ប្តូរ។

---

## 1. អ្វីទៅជា \`useRef\`?
\`useRef\` Return Object ដែលមាន Property \`current\` សម្រាប់ផ្ទុក Value ឬ DOM Reference។

\`\`\`jsx
import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);
  
  function handleClick() {
    inputRef.current.focus();
  }
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
\`\`\`

---

## 2. ការប្រើ \`useRef\` សម្រាប់ DOM References
\`useRef\` ប្រើសម្រាប់ចូលប្រើ DOM Elements ដោយផ្ទាល់។

\`\`\`jsx
function ScrollToElement() {
  const divRef = useRef(null);
  
  function handleScroll() {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <div>
      <button onClick={handleScroll}>រមូរទៅកាន់ Div</button>
      <div style={{ height: '1000px' }}></div>
      <div ref={divRef}>នេះជា Div គោលដៅ</div>
    </div>
  );
}
\`\`\`

---

## 3. ការប្រើ \`useRef\` សម្រាប់ Mutable Values
\`useRef\` អាចផ្ទុក Values ដែលមិនបង្ក Re-render។

\`\`\`jsx
import { useRef, useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  
  return (
    <div>
      <p>រាប់បច្ចុប្បន្ន: {count}</p>
      <p>រាប់មុន: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
\`\`\`

---

## 4. ភាពខុសគ្នារវាង \`useRef\` និង \`useState\`
- **\`useState\`**: Update Value បង្ក Re-render។
- **\`useRef\`**: Update \`current\` Value មិនបង្ក Re-render។

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

function TextInput() {
  const inputRef = useRef(null);
  const [text, setText] = useState('');
  
  function handleFocus() {
    inputRef.current.focus();
  }
  
  function handleChange(e) {
    setText(e.target.value);
  }
  
  return (
    <div>
      <input ref={inputRef} type="text" value={text} onChange={handleChange} />
      <button onClick={handleFocus}>Focus Input</button>
      <p>អ្នកបានវាយ: {text}</p>
    </div>
  );
}

ReactDOM.render(<TextInput />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Input Focus ជាមួយ useRef</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useRef } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function InputFocus() {
    const inputRef = useRef(null);
    function handleClick() {
      inputRef.current.focus();
    }
    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    );
  }
  ReactDOM.render(<InputFocus />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function InputFocus() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ផ្ទុក Previous Value</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { useRef, useState, useEffect } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Counter() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();
    useEffect(() => {
      prevCountRef.current = count;
    }, [count]);
    return (
      <div>
        <p>រាប់បច្ចុប្បន្ន: {count}</p>
        <p>រាប់មុន: {prevCountRef.current}</p>
        <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
      </div>
    );
  }
  ReactDOM.render(<Counter />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  return (
    <div>
      <p>រាប់បច្ចុប្បន្ន: {count}</p>
      <p>រាប់មុន: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `useRef` Hook ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'ផ្ទុក DOM References ឬ Mutable Values',
        'Validate Props',
        'គ្រប់គ្រង Events'
      ],
      correct: 1,
      explanation: '`useRef` ប្រើសម្រាប់ផ្ទុក DOM References ឬ Mutable Values ដែលមិនបង្ក Re-render។'
    },
    {
      question: 'តើ `useRef` Return អ្វី?',
      options: [
        'State Value',
        'Object ដែលមាន Property `current`',
        'Function',
        'Array'
      ],
      correct: 1,
      explanation: '`useRef` Return Object ដែលមាន Property `current`។'
    },
    {
      question: 'តើការផ្លាស់ប្តូរ `ref.current` បង្កអ្វី?',
      options: [
        'Component Re-render',
        'មិនបង្ក Re-render',
        'Error',
        'State Update'
      ],
      correct: 1,
      explanation: 'ការផ្លាស់ប្តូរ `ref.current` មិនបង្ក Re-render។'
    },
    {
      question: 'តើ `useRef` អាចប្រើសម្រាប់ DOM References បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Class Components', 'បានតែក្នុង Functional Components'],
      correct: 0,
      explanation: '`useRef` អាចប្រើសម្រាប់ DOM References ក្នុង Functional Components។'
    },
    {
      question: 'តើកូដ `inputRef.current.focus()` ធ្វើអ្វី?',
      options: [
        'Update State',
        'Focus Input Element',
        'Validate Input',
        'Render Component'
      ],
      correct: 1,
      explanation: '`inputRef.current.focus()` Focus Input Element ដែល Reference ដោយ `useRef`។'
    },
    {
      question: 'តើ `useRef` និង `useState` ខុសគ្នាដោយរបៀបណា?',
      options: [
        '`useRef` បង្ក Re-render, `useState` មិនបង្ក',
        '`useState` បង្ក Re-render, `useRef` មិនបង្ក',
        'ទាំងពីរបង្ក Re-render',
        'ទាំងពីរមិនបង្ក Re-render'
      ],
      correct: 1,
      explanation: '`useState` បង្ក Re-render នៅពេល Update, `useRef` មិនបង្ក។'
    },
    {
      question: 'តើ `useRef` អាចផ្ទុក Value អ្វីបានខ្លះ?',
      options: [
        'String ប៉ុណ្ណោះ',
        'Number ប៉ុណ្ណោះ',
        'Any Value (String, Number, Object, etc.)',
        'HTML Elements ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: '`useRef` អាចផ្ទុក Any Value ក្នុង `current` Property។'
    },
    {
      question: 'តើកូด `const inputRef = useRef(null);` ធ្វើអ្វី?',
      options: [
        'បង្កើត State',
        'បង្កើត Ref Object ជាមួយ Initial Value `null`',
        'Validate Input',
        'Update DOM'
      ],
      correct: 1,
      explanation: 'បង្កើត Ref Object ជាមួយ `current` ជា `null`។'
    },
    {
      question: 'តើ `useRef` អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 1,
      explanation: '`useRef` ប្រើបានតែក្នុង Functional Components�।'
    },
    {
      question: 'តើ `useRef` ប្រើសម្រាប់អ្វីជាទូទៅ?',
      options: [
        'DOM References និង Mutable Values',
        'State Management',
        'Event Handling',
        'Props Validation'
      ],
      correct: 0,
      explanation: '`useRef` ប្រើសម្រាប់ DOM References និង Mutable Values។'
    },
    {
      question: 'តើកូដ `divRef.current.scrollIntoView()` ធ្វើអ្វី?',
      options: [
        'Update State',
        'Scroll ទៅកាន់ Div Element',
        'Validate Props',
        'Render Component'
      ],
      correct: 1,
      explanation: '`divRef.current.scrollIntoView()` Scroll ទៅកាន់ Div Element ដែល Reference ដោយ `useRef`។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ \`useRef\` ដើម្បី Focus Input នៅពេលចុច Button។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React useRef Input Focus"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`InputFocus\` ដែល:
     - ប្រើ \`useRef\` ដើម្បីបង្កើត \`inputRef\` ជាមួយ Initial Value \`null\`។
     - Render \`<input ref={inputRef} type="text" />\`។
     - Render \`<button onClick={() => inputRef.current.focus()}>Focus Input</button>\`។
   - Render \`InputFocus\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`padding: 10px; margin: 5px;\` សម្រាប់ \`input\`។
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React useRef Input Focus</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    input {
      padding: 10px;
      margin: 5px;
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
    function InputFocus() {
      const inputRef = React.useRef(null);
      return (
        <div>
          <input ref={inputRef} type="text" />
          <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        </div>
      );
    }
    ReactDOM.render(<InputFocus />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson3_3Content;