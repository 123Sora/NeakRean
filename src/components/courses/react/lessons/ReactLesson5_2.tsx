import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson5_2Content: LessonContent = {
  title: 'Context API (Advanced)',
  objectives: [
    'យល់ដឹងអំពី Context API នៅក្នុង React',
    'ស្វែងយល់ពីការប្រើ `createContext` និង `useContext`',
    'រៀនបង្កើត Context Provider',
    'អនុវត្ត Context ជាមួយ Multiple Consumers',
    'រៀន Update Context Value ដោយ Dynamic',
    'ស្វែងយល់ពី Context ជាមួយ Reducer',
    'រៀនប្រើ Context ដើម្បីគ្រប់គ្រង Global State'
  ],
  content: `
# Context API (Advanced) 🌐

---

**Context API** គឺជា Feature នៅក្នុង React ដែលអនុញ្ញាតឱ្យអ្នកផ្ទេរទិន្នន័យឆ្លងកាត់ Component Tree ដោយមិនចាំបាច់បញ្ជូន Props។

---

## 1. អ្វីទៅជា Context API?
Context API ផ្តល់វិធីសម្រាប់ Share Global State ឬ Data ជាមួយ Multiple Components។

\`\`\`jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}
\`\`\`

- **createContext**: បង្កើត Context Object។
- **Provider**: ផ្តល់ Value ទៅ Child Components។
- **useContext**: Hook ដើម្បីចូលប្រើ Context Value។

---

## 2. Dynamic Context
Update Context Value ដោយប្រើ State។

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        ប្តូរ Theme
      </button>
    </div>
  );
}
\`\`\`

---

## 3. Context ជាមួយ Reducer
ប្រើ \`useReducer\` ដើម្បីគ្រប់គ្រង Complex State ក្នុង Context។

\`\`\`jsx
import { createContext, useContext, useReducer } from 'react';

const CounterContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Counter />
    </CounterContext.Provider>
  );
}

function Counter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <p>រាប់: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>បន្ថែម</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>ដក</button>
    </div>
  );
}
\`\`\`

---

## 4. Multiple Consumers
Context អាចប្រើបានជាមួយ Multiple Components។

\`\`\`jsx
function Header() {
  const { theme } = useContext(ThemeContext);
  return <h1 style={{ color: theme === 'light' ? 'black' : 'white' }}>Header</h1>;
}

function Content() {
  const { theme } = useContext(ThemeContext);
  return <p style={{ color: theme === 'light' ? 'black' : 'white' }}>Content</p>;
}
\`\`\`

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', padding: '20px' }}>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        ប្តូរ Theme
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Dynamic Context</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { createContext, useContext, useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  const ThemeContext = createContext();
  function App() {
    const [theme, setTheme] = useState('light');
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemedComponent />
      </ThemeContext.Provider>
    );
  }
  function ThemedComponent() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
      <div style={{ background: theme === 'light' ? '#fff' : '#333', padding: '20px' }}>
        <p>Theme: {theme}</p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          ប្តូរ Theme
        </button>
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}
function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', padding: '20px' }}>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        ប្តូរ Theme
      </button>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Context ជាមួយ Reducer</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { createContext, useContext, useReducer } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  const CounterContext = createContext();
  function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
      <CounterContext.Provider value={{ state, dispatch }}>
        <Counter />
      </CounterContext.Provider>
    );
  }
  function Counter() {
    const { state, dispatch } = useContext(CounterContext);
    return (
      <div>
        <p>រាប់: {state.count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>បន្ថែម</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>ដក</button>
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
const CounterContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Counter />
    </CounterContext.Provider>
  );
}
function Counter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <p>រាប់: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>បន្ថែម</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>ដក</button>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Context API ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Routing',
        'Share Data ឆ្លងកាត់ Component Tree',
        'Fetch Data',
        'Validate Props'
      ],
      correct: 1,
      explanation: 'Context API Share Data ឆ្លងកាត់ Component Tree ដោយមិនបញ្ជូន Props។'
    },
    {
      question: 'តើ `createContext` ធ្វើអ្វី?',
      options: [
        'Update State',
        'បង្កើត Context Object',
        'Render Component',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`createContext` បង្កើត Context Object សម្រាប់ Share Data។'
    },
    {
      question: 'តើ `useContext` Hook ធ្វើអ្វី?',
      options: [
        'Update State',
        'ចូលប្រើ Context Value',
        'Dispatch Actions',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`useContext` ចូលប្រើ Value ពី Context។'
    },
    {
      question: 'តើ Component ណាដែលផ្តល់ Context Value ទៅ Child Components?',
      options: [
        'Consumer',
        'Provider',
        'Context',
        'Reducer'
      ],
      correct: 1,
      explanation: '`Provider` ផ្តល់ Context Value ទៅ Child Components។'
    },
    {
      question: 'តើ Dynamic Context Value អាច Update បានដោយរបៀបណា?',
      options: [
        'ប្រើ `useState` ឬ `useReducer`',
        'ប្រើ `useEffect`',
        'ប្រើ `useRef`',
        'ប្រើ `useCallback`'
      ],
      correct: 0,
      explanation: 'Dynamic Context Value Update បានដោយប្រើ `useState` ឬ `useReducer`។'
    },
    {
      question: 'តើ Context ជាមួយ Reducer ប្រើ Hook អ្វី?',
      options: [
        'useState',
        'useReducer',
        'useEffect',
        'useRef'
      ],
      correct: 1,
      explanation: 'Context ជាមួយ Reducer ប្រើ `useReducer` ដើម្បីគ្រប់គ្រង Complex State។'
    },
    {
      question: 'តើ Multiple Consumers អាចចូលប្រើ Context ដូចគ្នាបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បានតែក្នុង Class Components',
        'បានតែក្នុង Functional Components'
      ],
      correct: 0,
      explanation: 'Multiple Consumers អាចចូលប្រើ Context ដូចគ្នាបាន។'
    },
    {
      question: 'តើ `Provider` Component ត្រូវបញ្ចូល Attribute អ្វី?',
      options: [
        'state',
        'value',
        'dispatch',
        'ref'
      ],
      correct: 1,
      explanation: '`Provider` បញ្ចូល `value` Attribute ដើម្បី Share Data។'
    },
    {
      question: 'តើ Context API សាកសមសម្រាប់ករណីណា?',
      options: [
        'Local State Management',
        'Global State Management',
        'Routing',
        'Data Fetching'
      ],
      correct: 1,
      explanation: 'Context API សាកសមសម្រាប់ Global State Management។'
    },
    {
      question: 'តើកូដ `useContext(ThemeContext)` Return អ្វី?',
      options: [
        'Context Object',
        'Context Value',
        'State Value',
        'DOM Reference'
      ],
      correct: 1,
      explanation: '`useContext` Return Context Value ដែលផ្តល់ដោយ `Provider`។'
    },
    {
      question: 'តើ Context API អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 2,
      explanation: 'Context API អាចប្រើបានទាំង Functional និង Class Components។'
    },
    {
      question: 'តើការប្រើ Context ជាមួយ Reducer មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'កាត់បន្ថយ Rendering',
        'គ្រប់គ្រង Complex State Logic',
        'Validate Props',
        'Fetch Data'
      ],
      correct: 1,
      explanation: 'Context ជាមួយ Reducer គ្រប់គ្រង Complex State Logic។'
    },
    {
      question: 'តើ `createContext` ត្រូវបញ្ចូល Default Value ទេ?',
      options: [
        'ត្រូវ',
        'មិនត្រូវ',
        'ត្រូវតែក្នុង Class Components',
        'ត្រូវតែក្នុង Functional Components'
      ],
      correct: 1,
      explanation: '`createContext` មិនតម្រូវ Default Value ប៉ុន្តែអាចបញ្ចូលបាន។'
    },
    {
      question: 'តើកូដ `<ThemeContext.Provider value={{ theme, setTheme }}>` ធ្វើអ្វី?',
      options: [
        'Update State',
        'ផ្តល់ Object ទៅ Child Components',
        'Render Component',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`Provider` ផ្តល់ Object `{ theme, setTheme }` ទៅ Child Components។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Context API ដើម្បីបង្កើត Theme Switcher App។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Context Theme Switcher"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត \`ThemeContext\` ដោយប្រើ \`createContext\`។
   - បង្កើត Functional Component \`App\` ដែល:
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`theme\` ជាមួយ Initial Value \`'light'\`។
     - Render \`<ThemeContext.Provider>\` ដែលផ្តល់ \`{ theme, setTheme }\`។
   - បង្កើត Functional Component \`ThemedComponent\` ដែល:
     - ប្រើ \`useContext\` ដើម្បីចូលប្រើ \`{ theme, setTheme }\`។
     - Render \`<p>Theme: {theme}</p>\`។
     - Render \`<button>\` ដើម្បី Toggle Theme (\`light\` ទៅ \`dark\` និងផ្ទុយមកវិញ)។
     - ប្រើ Inline Style ដើម្បីកំណត់ Background Color (\`#fff\` សម្រាប់ \`light\`, \`#333\` សម្រាប់ \`dark\`)។
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px; color: #333;\` សម្រាប់ \`p\`។
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Context Theme Switcher</title>
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
    const ThemeContext = React.createContext();
    function App() {
      const [theme, setTheme] = React.useState('light');
      return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ThemedComponent />
        </ThemeContext.Provider>
      );
    }
    function ThemedComponent() {
      const { theme, setTheme } = React.useContext(ThemeContext);
      return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', padding: '20px' }}>
          <p>Theme: {theme}</p>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            ប្តូរ Theme
          </button>
        </div>
      );
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson5_2Content;