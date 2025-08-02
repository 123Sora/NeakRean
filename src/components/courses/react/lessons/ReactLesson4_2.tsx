import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson4_2Content: LessonContent = {
  title: 'State Management with Redux',
  objectives: [
    'យល់ដឹងអំពី Redux និងអត្ថន័យរបស់វា',
    'ស្វែងយល់ពីការប្រើ Redux Store សម្រាប់ Global State',
    'រៀនបង្កើត Actions និង Reducers',
    'រៀនប្រើ `useSelector` និង `useDispatch` Hooks',
    'អនុវត្ត Redux ជាមួយ React Components',
    'ស្វែងយល់ពី Redux Toolkit សម្រាប់ Simplify Redux'
  ],
  content: `
# State Management with Redux 🗄️

---

**Redux** គឺជា Library ដែលប្រើសម្រាប់គ្រប់គ្រង Global State នៅក្នុង JavaScript Applications ជាពិសេសជាមួយ React។

---

## 1. អ្វីទៅជា Redux?
Redux ផ្តល់ Centralized Store សម្រាប់ផ្ទុក State និងធ្វើឱ្យ State Updates មាន Predictable។

- **Store**: ផ្ទុក Global State។
- **Actions**: Objects ដែលពិពណ៌នាការផ្លាស់ប្តូរ State។
- **Reducers**: Functions ដែល Update State ដោយផ្អែកលើ Actions។

\`\`\`jsx
import { createStore } from 'redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
\`\`\`

---

## 2. ការប្រើ Redux ជាមួយ React
ប្រើ \`Provider\` ដើម្បីផ្តល់ Store ទៅ Components និង \`useSelector\`, \`useDispatch\` Hooks សម្រាប់ Interact ជាមួយ Store។

\`\`\`jsx
import { Provider, useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>បន្ថែម</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>ដក</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
\`\`\`

---

## 3. Redux Toolkit
Redux Toolkit Simplify Redux Setup ដោយប្រើ \`configureStore\` និង \`createSlice\`។

\`\`\`jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});

export const { increment, decrement } = counterSlice.actions;
\`\`\`

---

## 4. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>បន្ថែម</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>ដក</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Counter ជាមួយ Redux</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  import { Provider, useSelector, useDispatch } from 'https://cdn.jsdelivr.net/npm/react-redux@7.2.6/dist/react-redux.umd.js';
  import { createStore } from 'https://cdn.jsdelivr.net/npm/redux@4.1.2/dist/redux.min.js';
  const initialState = { count: 0 };
  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  const store = createStore(reducer);
  function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
      <div>
        <p>រាប់: {count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>បន្ថែម</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>ដក</button>
      </div>
    );
  }
  function App() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
const initialState = { count: 0 };
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const store = createStore(reducer);
function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>បន្ថែម</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>ដក</button>
    </div>
  );
}
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Redux ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Routing',
        'គ្រប់�I Global State',
        'Fetch Data',
        'Validate Props'
      ],
      correct: 1,
      explanation: 'Redux ប្រើសម្រាប់គ្រប់គ្រង Global State។'
    },
    {
      question: 'តើ Component ណាដែលផ្តល់ Store ទៅ Components?',
      options: [
        'Store',
        'Provider',
        'Reducer',
        'Action'
      ],
      correct: 1,
      explanation: '`Provider` ផ្តល់ Store ទៅ Components។'
    },
    {
      question: 'តើ `useSelector` Hook ធ្វើអ្វី?',
      options: [
        'Dispatch Actions',
        'ចូលប្រើ State ពី Store',
        'Update State',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`useSelector` ចូលប្រើ State ពី Redux Store។'
    },
    {
      question: 'តើ `useDispatch` Hook ធ្វើអ្វី?',
      options: [
        'ចូលប្រើ State',
        'បញ្ជូន Actions ទៅ Store',
        'Memoize Functions',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`useDispatch` បញ្ជូន Actions ទៅ Store ដើម្បី Update State។'
    },
    {
      question: 'តើ Reducer ជា Function ប្រភេទណា?',
      options: [
        'Async Function',
        'Pure Function',
        'Event Handler',
        'Component Function'
      ],
      correct: 1,
      explanation: 'Reducer ជា Pure Function ដែល Update State ដោយផ្អែកលើ Action។'
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
      explanation: 'Action ជា Object ដែលមាន `type` Property (និងអាចមាន `payload`)។'
    },
    {
      question: 'តើ Redux Toolkit ធ្វើអ្វី?',
      options: [
        'Simplify Redux Setup',
        'Fetch Data',
        'Validate Props',
        'Manage Routing'
      ],
      correct: 0,
      explanation: 'Redux Toolkit Simplify Redux Setup ដោយប្រើ `configureStore` និង `createSlice`។'
    },
    {
      question: 'តើ `createStore` ធ្វើអ្វី?',
      options: [
        'បង្កើត Component',
        'បង្កើត Redux Store',
        'Update State',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`createStore` បង្កើត Redux Store សម្រាប់ផ្ទុក Global State។'
    },
    {
      question: 'តើ `configureStore` ក្នុង Redux Toolkit ខុសពី `createStore` ដោយរបៀបណា?',
      options: [
        'មិនអនុញ្ញាត Multiple Reducers',
        'Simplify Store Setup និងបន្ថែម Default Middleware',
        'Fetch Data',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`configureStore` Simplify Store Setup និងបន្ថែម Default Middleware។'
    },
    {
      question: 'តើ `createSlice` ក្នុង Redux Toolkit ធ្វើអ្វី?',
      options: [
        'បង្កើត Component',
        'បង្កើត Reducer និង Actions',
        'Update DOM',
        'Render Child Components'
      ],
      correct: 1,
      explanation: '`createSlice` បង្កើត Reducer និង Actions ដោយ Simplify Syntax។'
    },
    {
      question: 'តើ Redux Store អាចផ្ទុក Data Type អ្វីបានខ្លះ?',
      options: [
        'String ប៉ុណ្ណោះ',
        'Number ប៉ុណ្ណោះ',
        'Any JavaScript Object',
        'HTML Elements'
      ],
      correct: 2,
      explanation: 'Redux Store អាចផ្ទុក Any JavaScript Object។'
    },
    {
      question: 'តើកូដ `dispatch({ type: \'INCREMENT\' })` ធ្វើអ្វី?',
      options: [
        'Update DOM',
        'បញ្ជូន Action ទៅ Reducer',
        'Render Component',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`dispatch` បញ្ជូន Action ទៅ Reducer ដើម្បី Update State។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Redux ដើម្បីបង្កើត Counter App។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Redux Counter"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, Redux, React-Redux, និង Babel។
   - បង្កើត \`initialState\` ជាមួយ \`{ count: 0 }\`។
   - បង្កើត \`reducer\` Function ដែលគ្រប់គ្រង Actions: \`INCREMENT\`, \`DECREMENT\`, \`RESET\`។
   - បង្កើត Redux Store ដោយប្រើ \`createStore\`។
   - បង្កើត Functional Component \`Counter\` ដែល:
     - ប្រើ \`useSelector\` ដើម្បីចូលប្រើ \`count\` ពី Store។
     - ប្រើ \`useDispatch\` ដើម្បី Dispatch Actions។
     - Render \`<p>រាប់: {count}</p>\`។
     - Render Buttons បី៖ "បន្ថែម" (\`INCREMENT\`), "ដក" (\`DECREMENT\`), "កំណត់ឡើងវិញ" (\`RESET\`)។
   - បង្កើត Functional Component \`App\` ដែល Wrap \`Counter\` ក្នុង \`<Provider store={store}>\`។
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\`។

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
  <title>Redux Counter</title>
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
  <script src="https://cdn.jsdelivr.net/npm/redux@4.1.2/dist/redux.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-redux@7.2.6/dist/react-redux.umd.js"></script>
  <script type="text/babel">
    const initialState = { count: 0 };
    function reducer(state = initialState, action) {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        case 'RESET':
          return { count: 0 };
        default:
          return state;
      }
    }
    const store = Redux.createStore(reducer);
    function Counter() {
      const count = ReactRedux.useSelector(state => state.count);
      const dispatch = ReactRedux.useDispatch();
      return (
        <div>
          <p>រាប់: {count}</p>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>បន្ថែម</button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>ដក</button>
          <button onClick={() => dispatch({ type: 'RESET' })}>កំណត់ឡើងវិញ</button>
        </div>
      );
    }
    function App() {
      return (
        <ReactRedux.Provider store={store}>
          <Counter />
        </ReactRedux.Provider>
      );
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson4_2Content;