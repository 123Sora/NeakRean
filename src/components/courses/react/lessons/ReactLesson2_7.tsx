import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson2_7Content: LessonContent = {
  title: 'List Rendering (ការបង្ហាញបញ្ជី)',
  objectives: [
    'យល់ដឹងអំពី List Rendering ក្នុង React',
    'រៀនប្រើ `map()` Method សម្រាប់ Render Lists',
    'ស្វែងយល់ពីសារៈសំខាន់នៃ `key` Prop',
    'អនុវត្ត List Rendering ជាមួយ State',
    'រៀន Filter និង Sort Lists'
  ],
  content: `
# List Rendering (ការបង្ហាញបញ្ជី) 📋

---

**List Rendering** គឺជាវិធីសម្រាប់បង្ហាញ Array នៃ Data ជា Elements ក្នុង UI។

---

## 1. ការប្រើ \`map()\` Method
ប្រើ \`map()\` ដើម្បីបំលែង Array ទៅជា Array នៃ JSX Elements។

\`\`\`jsx
function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
    </ul>
  );
}
\`\`\`

---

## 2. សារៈសំខាន់នៃ \`key\` Prop
\`key\` Prop ជួយ React កំណត់ Elements ក្នុង List ដើម្បីបង្កើន Performance។

- **តម្រូវការ**: \`key\` ត្រូវតែ Unique ក្នុង List។
- **ឧទាហរណ៍**:
\`\`\`jsx
const items = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }];
<ul>
  {items.map(item => <li key={item.id}>{item.name}</li>)}
</ul>
\`\`\`

---

## 3. List Rendering ជាមួយ State
ប្រើ \`useState\` ដើម្បីគ្រប់គ្រង Dynamic Lists។

\`\`\`jsx
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['រៀន React', 'ធ្វើកិច្ចការ']);
  
  function addTodo() {
    setTodos([...todos, 'កិច្ចការថ្មី']);
  }
  
  return (
    <div>
      <button onClick={addTodo}>បន្ថែមកិច្ចការ</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}
\`\`\`

---

## 4. Filter និង Sort Lists
ប្រើ \`filter()\` និង \`sort()\` ដើម្បីគ្រប់គ្រង Lists។

\`\`\`jsx
function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  const filteredFruits = fruits.filter(fruit => fruit.startsWith('A'));
  return (
    <ul>
      {filteredFruits.map(fruit => <li key={fruit}>{fruit}</li>)}
    </ul>
  );
}
\`\`\`

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]);
  
  function addItem() {
    const newId = items.length + 1;
    setItems([...items, { id: newId, name: 'Mango' }]);
  }
  
  return (
    <div>
      <button onClick={addItem}>បន្ថែមផ្លែឈើ</button>
      <ul>
        {items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្ហាញ List</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function FruitList() {
    const fruits = ['Apple', 'Banana', 'Orange'];
    return (
      <ul>
        {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
      </ul>
    );
  }
  ReactDOM.render(<FruitList />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
    </ul>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ List ជាមួយ State</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function TodoList() {
    const [todos, setTodos] = useState(['រៀន React', 'ធ្វើកិច្ចការ']);
    function addTodo() {
      setTodos([...todos, 'កិច្ចការថ្មី']);
    }
    return (
      <div>
        <button onClick={addTodo}>បន្ថែមកិច្ចការ</button>
        <ul>
          {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    );
  }
  ReactDOM.render(<TodoList />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function TodoList() {
  const [todos, setTodos] = useState(['រៀន React', 'ធ្វើកិច្ចការ']);
  function addTodo() {
    setTodos([...todos, 'កិច្ចការថ្មី']);
  }
  return (
    <div>
      <button onClick={addTodo}>បន្ថែមកិច្ចការ</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ List Rendering ក្នុង React ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'បង្ហាញ Array នៃ Data ជា Elements',
        'Validate Props',
        'បង្កើត Events'
      ],
      correct: 1,
      explanation: 'List Rendering បង្ហាញ Array នៃ Data ជា JSX Elements។'
    },
    {
      question: 'តើ Method ណាមួយប្រើសម្រាប់ List Rendering?',
      options: ['filter()', 'map()', 'sort()', 'reduce()'],
      correct: 1,
      explanation: '`map()` Method បំលែង Array ទៅជា Array នៃ JSX Elements។'
    },
    {
      question: 'តើ `key` Prop ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ CSS',
        'ជួយ React កំណត់ Elements ក្នុង List',
        'Update State',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`key` Prop ជួយ React កំណត់ Elements ក្នុង List ដើម្បីបង្កើន Performance។'
    },
    {
      question: 'តើ `key` Prop ត្រូវតែជាអ្វី?',
      options: ['String', 'Number', 'Unique Value', 'Boolean'],
      correct: 2,
      explanation: '`key` Prop ត្រូវតែជា Unique Value ក្នុង List។'
    },
    {
      question: 'តើកូដ `{fruits.map(fruit => <li>{fruit}</li>)}` នឹងបង្កអ្វី?',
      options: [
        'Error',
        'Warning ដោយសារខ្វះ `key`',
        'Render List ដោយគ្មានបញ្ហា',
        'Render Empty List'
      ],
      correct: 1,
      explanation: 'React នឹងបង្ហាញ Warning ប្រសិនបើ List Elements គ្មាន `key` Prop។'
    },
    {
      question: 'តើកូដ `setTodos([...todos, \'កិច្ចការថ្មី\'])` ធ្វើអ្វី?',
      options: [
        'លុប Item ពី List',
        'បន្ថែម Item ទៅ List នៅក្នុង State',
        'Validate List',
        'Sort List'
      ],
      correct: 1,
      explanation: 'បន្ថែម Item ទៅ List នៅក្នុង State។'
    },
    {
      question: 'តើ `filter()` Method ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត List',
        'ច្រោះ (Filter) Items ពី Array',
        'Sort Array',
        'Update State'
      ],
      correct: 1,
      explanation: '`filter()` ច្រោះ Items ពី Array ដោយផ្អែកលើលក្ខខណ្ឌ។'
    },
    {
      question: 'តើ `sort()` Method ប្រើសម្រាប់អ្វី?',
      options: [
        'បន្ថែម Items',
        'ច្រោះ Items',
        'តម្រៀប (Sort) Array',
        'Render List'
      ],
      correct: 2,
      explanation: '`sort()` តម្រៀប Array ដោយផ្អែកលើលក្ខខណ្ឌ។'
    },
    {
      question: 'តើកូដ `{items.map(item => <li key={item.id}>{item.name}</li>)}` តម្រូវឱ្យ `item.id` ជាអ្វី?',
      options: ['String', 'Number', 'Unique Value', 'Boolean'],
      correct: 2,
      explanation: '`item.id` ត្រូវតែជា Unique Value សម្រាប់ `key` Prop។'
    },
    {
      question: 'តើ List Rendering អាចប្រើជាមួយ State បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Class Components', 'បានតែក្នុង Functional Components'],
      correct: 0,
      explanation: 'List Rendering អាចប្រើជាមួយ State ក្នុង Functional និង Class Components។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ List Rendering ដើម្បីបង្ហាញ To-Do List ដែលអាចបន្ថែម Items បាន។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React To-Do List"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`TodoList\` ដែល:
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`todos\` ជាមួយ Initial Value \`['រៀន React', 'ធ្វើកិច្ចការ']\`។
     - Render \`<button onClick={() => setTodos([...todos, 'កិច្ចការថ្មី'])}>បន្ថែមកិច្ចការ</button>\`។
     - Render \`<ul>\` ដែលបង្ហាញ \`todos\` ដោយប្រើ \`map()\` និង \`key\` Prop (ប្រើ Index ជា \`key\`)។
   - Render \`TodoList\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`ul li\`។
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    ul li {
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
    function TodoList() {
      const [todos, setTodos] = React.useState(['រៀន React', 'ធ្វើកិច្ចការ']);
      return (
        <div>
          <button onClick={() => setTodos([...todos, 'កិច្ចការថ្មី'])}>បន្ថែមកិច្ចការ</button>
          <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
          </ul>
        </div>
      );
    }
    ReactDOM.render(<TodoList />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson2_7Content;