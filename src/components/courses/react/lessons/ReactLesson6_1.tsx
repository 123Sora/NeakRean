import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson6_1Content: LessonContent = {
  title: 'កម្មវិធី Todo List សាមញ្ញ',
  objectives: [
    'យល់ដឹងអំពីការបង្កើត Todo List App ជាមួយ React',
    'រៀនប្រើ `useState` សម្រាប់គ្រប់គ្រង Todo Items',
    'អនុវត្តការបន្ថែម និងលុប Todo Items',
    'ស្វែងយល់ពីការគ្រប់គ្រង Input នៅក្នុង React',
    'រៀនប្រើ Event Handlers សម្រាប់ User Interactions',
    'អនុវត្ត Basic Styling សម្រាប់ UI',
    'ស្វែងយល់ពី Component Reusability'
  ],
  content: `
# កម្មវិធី Todo List សាមញ្ញ 📋

---

**Todo List App** ជាគម្រោងសាមញ្ញដែលអនុញ្ញាតឱ្យអ្នកប្រើបន្ថែម និងលុប Todo Items។

---

## 1. ការបង្កើត Todo List
ប្រើ \`useState\` ដើម្បីគ្រប់គ្រង Array នៃ Todos និង Input Value។

\`\`\`jsx
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="បញ្ចូលកិច្ចការ"
      />
      <button onClick={addTodo}>បន្ថែម</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>លុប</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

---

## 2. ការគ្រប់គ្រង Input
ប្រើ Controlled Input ដើម្បីគ្រប់គ្រង Input Value។

\`\`\`jsx
<input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="បញ្ចូលកិច្ចការ"
/>
\`\`\`

---

## 3. Event Handlers
ប្រើ Event Handlers ដើម្បីបន្ថែម និងលុប Todos។

\`\`\`jsx
const addTodo = () => {
  if (input.trim()) {
    setTodos([...todos, input]);
    setInput('');
  }
};

const removeTodo = (index) => {
  setTodos(todos.filter((_, i) => i !== index));
};
\`\`\`

---

## 4. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="បញ្ចូលកិច្ចការ"
      />
      <button onClick={addTodo}>បន្ថែម</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>លុប</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoList />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Todo List App</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const addTodo = () => {
      if (input.trim()) {
        setTodos([...todos, input]);
        setInput('');
      }
    };
    const removeTodo = (index) => {
      setTodos(todos.filter((_, i) => i !== index));
    };
    return (
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="បញ្ចូលកិច្ចការ"
        />
        <button onClick={addTodo}>បន្ថែម</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => removeTodo(index)}>លុប</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  ReactDOM.render(<TodoList />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="បញ្ចូលកិច្ចការ"
      />
      <button onClick={addTodo}>បន្ថែម</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>លុប</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `useState` នៅក្នុង Todo List App ប្រើសម្រាប់អ្វី?',
      options: [
        'Fetch Data',
        'គ្រប់គ្រង Todos និង Input Value',
        'Handle Events',
        'Render UI'
      ],
      correct: 1,
      explanation: '`useState` គ្រប់គ្រង Array នៃ Todos និង Input Value៕'
    },
    {
      question: 'តើ Function ណាដែលបន្ថែម Todo Item?',
      options: [
        'removeTodo',
        'addTodo',
        'setInput',
        'render'
      ],
      correct: 1,
      explanation: '`addTodo` បន្ថែម Todo Item ទៅ Array៕'
    },
    {
      question: 'តើ `todos.filter` នៅក្នុង `removeTodo` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Todo',
        'លុប Todo តាម Index',
        'Update Input',
        'Sort Todos'
      ],
      correct: 1,
      explanation: '`todos.filter` លុប Todo Item ដោយ Filter ចេញ Item នៅ Index ដែលផ្តល់ឱ្យ៕'
    },
    {
      question: 'តើ Input នៅក្នុង Todo List ជា Controlled Component ឬ Uncontrolled Component?',
      options: [
        'Controlled Component',
        'Uncontrolled Component',
        'State Component',
        'Event Component'
      ],
      correct: 0,
      explanation: 'Input ជា Controlled Component ព្រោះ Value ត្រូវបានគ្រប់គ្រងដោយ State៕'
    },
    {
      question: 'តើអ្វីជា Key Prop នៅក្នុង List Rendering?',
      options: [
        'Update State',
        'Identify Unique Items',
        'Handle Events',
        'Style Elements'
      ],
      correct: 1,
      explanation: 'Key Prop Identify Unique Items ក្នុង List Rendering៕'
    },
    {
      question: 'តើ `input.trim()` នៅក្នុង `addTodo` ជួយអ្វី?',
      options: [
        'Sort Todos',
        'Prevent Empty Todos',
        'Update Input',
        'Remove Todos'
      ],
      correct: 1,
      explanation: '`input.trim()` Prevent Empty Todos ដោយ Check ថា Input មិនមែនជា Empty String៕'
    },
    {
      question: 'តើ Event Handler ណាដែលប្រើសម្រាប់ Input Change?',
      options: [
        'onClick',
        'onChange',
        'onSubmit',
        'onLoad'
      ],
      correct: 1,
      explanation: '`onChange` ប្រើសម្រាប់ Handle Input Changes៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្កើត Todo List App សាមញ្ញ៕

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title៖ "React Todo List App"៕
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`៕

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel៕
   - បង្កើត Functional Component \`TodoList\` ដែល:
     - ប្រើ \`useState\` សម្រាប់ \`todos\` (Array, Initial: []) និង \`input\` (String, Initial: '')៕
     - Render \`<input>\` ជា Controlled Component ជាមួយ Placeholder "បញ្ចូលកិច្ចការ"៕
     - Render \`<button>\` ដើម្បីបន្ថែម Todo (Check Empty Input ដោយ \`trim()\`)៕
     - Render \`<ul>\` ដើម្បីបង្ហាញ Todos ដែលមាន \`<button>\` សម្រាប់លុប Todo នីមួយៗ៕
   - Render \`TodoList\` Component ទៅក្នុង \`<div id="root">\`៕

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - កំណត់ \`font-size: 18px; margin: 10px; padding: 5px;\` សម្រាប់ \`input\`៕
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`៕
     - កំណត់ \`font-size: 16px;\` សម្រាប់ \`li\`៕

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស៕ អ្នកគួរអាចបន្ថែម និងលុប Todo Items បាន៕
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Todo List App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    input {
      font-size: 18px;
      margin: 10px;
      padding: 5px;
    }
    button {
      padding: 10px;
      margin: 5px;
      background-color: #2c3e50;
      color: white;
    }
    li {
      font-size: 16px;
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
      const [todos, setTodos] = React.useState([]);
      const [input, setInput] = React.useState('');
      const addTodo = () => {
        if (input.trim()) {
          setTodos([...todos, input]);
          setInput('');
        }
      };
      const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
      };
      return (
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="បញ្ចូលកិច្ចការ"
          />
          <button onClick={addTodo}>បន្ថែម</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo} <button onClick={() => removeTodo(index)}>លុប</button>
              </li>
            ))}
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

export default ReactLesson6_1Content;