import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson3_4Content: LessonContent = {
  title: 'Hook useReducer',
  objectives: [
    'យល់ដឹងអំពី Hook `useReducer` និងអត្ថន័យរបស់វា',
    'ស្វែងយល់ពីការប្រើ `useReducer` សម្រាប់គ្រប់គ្រង Complex State',
    'រៀនបង្កើត Reducer Function',
    'រៀនប្រើ `useReducer` ជាមួយ Actions',
    'អនុវត្ត `useReducer` ជាមួយ Complex State Logic',
    'ស្វែងយល់ពីភាពខុសគ្នារវាង `useReducer` និង `useState`'
  ],
  content: `
# Hook useReducer ⚙️

---

**\`useReducer\`** គឺជា Hook ដែលប្រើសម្រាប់គ្រប់គ្រង Complex State Logic នៅក្នុង Functional Components ដោយប្រើ Reducer Function និង Actions។ វាជាជម្រើសជំនួស \`useState\` នៅពេល State Logic ស្មុគស្មាញ។

---

## 1. អ្វីទៅជា \`useReducer\`?
\`useReducer\` អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រង State ដោយប្រើ Reducer Function ដែលទទួល State និង Action ដើម្បី Update State។

\`\`\`jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>រាប់: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>បន្ថែម</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>ដក</button>
    </div>
  );
}
\`\`\`

- **Reducer Function**: ទទួល \`state\` និង \`action\` ហើយ Return State ថ្មី។
- **Dispatch**: Function សម្រាប់បញ្ជូន Action ទៅ Reducer។
- **Initial State**: State ដំបូង។

---

## 2. ការបង្កើត Reducer Function
Reducer Function ជា Pure Function ដែល:
- ទទួល \`state\` និង \`action\`។
- Return State ថ្មីដោយផ្អែកលើ \`action.type\`។

\`\`\`jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}
\`\`\`

---

## 3. ការប្រើ \`useReducer\` ជាមួយ Actions
Actions ជា Objects ដែលមាន \`type\` (និងអាចមាន \`payload\`) ដើម្បីប្រាប់ Reducer ពីការផ្លាស់ប្តូរ។

\`\`\`jsx
function reducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return { todos: [...state.todos, action.payload] };
    case 'clearTodos':
      return { todos: [] };
    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  
  function addTodo() {
    dispatch({ type: 'addTodo', payload: 'កិច្ចការថ្មី' });
  }
  
  return (
    <div>
      <button onClick={addTodo}>បន្ថែមកិច្ចការ</button>
      <ul>
        {state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}
\`\`\`

---

## 4. ភាពខុសគ្នារវាង \`useReducer\` និង \`useState\`
- **\`useState\`**: សាកសមសម្រាប់ Simple State (ឧ. Number, String)។
- **\`useReducer\`**: សាកសមសម្រាប់ Complex State Logic (ឧ. Objects, Arrays ដែលមាន Multiple Updates)។

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>រាប់: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>បន្ថែម</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>ដក</button>
      <button onClick={() => dispatch({ type: 'reset' })}>កំណត់ឡើងវិញ</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Counter ជាមួយ useReducer</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useReducer } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  const initialState = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
        <p>រាប់: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>បន្ថែម</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>ដក</button>
      </div>
    );
  }
  ReactDOM.render(<Counter />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>រាប់: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>បន្ថែម</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>ដក</button>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Todo List ជាមួយ useReducer</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { useReducer } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  const initialState = { todos: [] };
  function reducer(state, action) {
    switch (action.type) {
      case 'addTodo':
        return { todos: [...state.todos, action.payload] };
      case 'clearTodos':
        return { todos: [] };
      default:
        return state;
    }
  }
  function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    function addTodo() {
      dispatch({ type: 'addTodo', payload: 'កិច្ចការថ្មី' });
    }
    return (
      <div>
        <button onClick={addTodo}>បន្ថែមកិច្ចការ</button>
        <ul>
          {state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    );
  }
  ReactDOM.render(<TodoList />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
const initialState = { todos: [] };
function reducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return { todos: [...state.todos, action.payload] };
    case 'clearTodos':
      return { todos: [] };
    default:
      return state;
  }
}
function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function addTodo() {
    dispatch({ type: 'addTodo', payload: 'កិច្ចការថ្មី' });
  }
  return (
    <div>
      <button onClick={addTodo}>បន្ថែមកិច្ចការ</button>
      <ul>
        {state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `useReducer` Hook ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Side Effects',
        'គ្រប់គ្រង Complex State Logic',
        'Validate Props',
        'បង្កើត Components'
      ],
      correct: 1,
      explanation: '`useReducer` ប្រើសម្រាប់គ្រប់គ្រង Complex State Logic។'
    },
    {
      question: 'តើ `useReducer` Return អ្វី?',
      options: [
        'State Value និង Setter Function',
        'State Object និង Dispatch Function',
        'Reducer Function',
        'Action Object'
      ],
      correct: 1,
      explanation: '`useReducer` Return Array ដែលមាន State Object និង Dispatch Function។'
    },
    {
      question: 'តើ Reducer Function ទទួល Parameters អ្វីខ្លះ?',
      options: [
        'State និង Props',
        'State និង Action',
        'Props និង Action',
        'State និង Event'
      ],
      correct: 1,
      explanation: 'Reducer Function ទទួល `state` និង `action`។'
    },
    {
      question: 'តើ `dispatch` Function ធ្វើអ្វី?',
      options: [
        'Update DOM',
        'បញ្ជូន Action ទៅ Reducer',
        'Validate Props',
        'Render Component'
      ],
      correct: 1,
      explanation: '`dispatch` បញ្ជូន Action ទៅ Reducer ដើម្បី Update State។'
    },
    {
      question: 'តើ `useReducer` និង `useState` ខុសគ្នាដោយរបៀបណា?',
      options: [
        '`useReducer` សម្រាប់ Simple State, `useState` សម្រាប់ Complex State',
        '`useState` សម្រាប់ Simple State, `useReducer` សម្រាប់ Complex State',
        'ទាំងពីរសម្រាប់ Simple State',
        'ទាំងពីរសម្រាប់ Complex State'
      ],
      correct: 1,
      explanation: '`useState` សម្រាប់ Simple State, `useReducer` សម្រាប់ Complex State Logic។'
    },
    {
      question: 'តើ Action ជា Data Type អ្វី?',
      options: [
        'String',
        'Object',
        'Array',
        'Function'
      ],
      correct: 1,
      explanation: 'Action ជា Object ដែលមាន `type` (និងអាចមាន `payload`)។'
    },
    {
      question: 'តើកូដ `dispatch({ type: \'increment\' })` ធ្វើអ្វី?',
      options: [
        'Update State ដោយផ្អែកលើ Action',
        'Render Component',
        'Validate Props',
        'Clear State'
      ],
      correct: 0,
      explanation: '`dispatch` បញ្ជូន Action `increment` ទៅ Reducer ដើម្បី Update State។'
    },
    {
      question: 'តើ `useReducer` អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 1,
      explanation: '`useReducer` ប្រើបានតែក្នុង Functional Components។'
    },
    {
      question: 'តើ Reducer Function ត្រូវ Return អ្វី?',
      options: [
        'Action Object',
        'State ថ្មី',
        'Props',
        'Event'
      ],
      correct: 1,
      explanation: 'Reducer Function Return State ថ្មី។'
    },
    {
      question: 'តើ `useReducer` សាកសមសម្រាប់ករណីណា?',
      options: [
        'Simple Counter',
        'Complex State Logic ដូចជា Multiple State Updates',
        'DOM References',
        'Event Handling'
      ],
      correct: 1,
      explanation: '`useReducer` សាកសមសម្រាប់ Complex State Logic។'
    },
    {
      question: 'តើ `action.payload` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ CSS',
        'ផ្ទុក Additional Data សម្រាប់ Action',
        'Update DOM',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`action.payload` ផ្ទុក Additional Data សម្រាប់ Action។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ \`useReducer\` ដើម្បីបង្កើត Counter App។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React useReducer Counter"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត \`initialState\` ជាមួយ \`{ count: 0 }\`។
   - បង្កើត \`reducer\` Function ដែលគ្រប់គ្រង Actions: \`increment\`, \`decrement\`, \`reset\`។
   - បង្កើត Functional Component \`Counter\` ដែល:
     - ប្រើ \`useReducer\` ដើម្បីគ្រប់គ្រង State។
     - Render \`<p>រាប់: {state.count}</p>\`។
     - Render Buttons បី៖ "បន្ថែម" (\`increment\`), "ដក" (\`decrement\`), "កំណត់ឡើងវិញ" (\`reset\`)។
   - Render \`Counter\` Component ទៅក្នុង \`<div id="root">\`។

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
  <title>React useReducer Counter</title>
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
    const initialState = { count: 0 };
    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        case 'decrement':
          return { count: state.count - 1 };
        case 'reset':
          return { count: 0 };
        default:
          return state;
      }
    }
    function Counter() {
      const [state, dispatch] = React.useReducer(reducer, initialState);
      return (
        <div>
          <p>រាប់: {state.count}</p>
          <button onClick={() => dispatch({ type: 'increment' })}>បន្ថែម</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>ដក</button>
          <button onClick={() => dispatch({ type: 'reset' })}>កំណត់ឡើងវិញ</button>
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

export default ReactLesson3_4Content;