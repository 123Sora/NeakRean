import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson3_2Content: LessonContent = {
  title: 'Hook useContext',
  objectives: [
    'យល់ដឹងអំពី Hook `useContext` និងអត្ថន័យរបស់វា',
    'ស្វែងយល់ពីការប្រើ `useContext` សម្រាប់ Global State',
    'រៀនបង្កើត Context ដោយប្រើ `createContext`',
    'រៀនបញ្ជូន Data តាមរយៈ Context',
    'អនុវត្ត `useContext` ជាមួយ Components ច្រើន'
  ],
  content: `
# Hook useContext 🌍

---

**\`useContext\`** គឺជា Hook ដែលអនុញ្ញាតឱ្យ Components ចូលប្រើ Data ពី Context ដោយមិនចាំបាច់បញ្ជូន Props តាម Hierarchy។

---

## 1. អ្វីទៅជា \`useContext\`?
\`useContext\` ប្រើសម្រាប់ចូលប្រើ Global State ឬ Data ដែលបង្កើតដោយ \`React.createContext\`។

---

## 2. ការបង្កើត Context
ប្រើ \`React.createContext\` ដើម្បីបង្កើត Context។

\`\`\`jsx
import { createContext } from 'react';

const ThemeContext = createContext('light');
\`\`\`

---

## 3. ការបញ្ជូន Data តាឮរយៈ Context
ប្រើ \`Provider\` ដើម្បីផ្តល់ Data ទៅ Components។

\`\`\`jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <p>ប្រធានបទ: {theme}</p>;
}
\`\`\`

---

## 4. \`useContext\` ជាមួយ State
ប្រើ \`useContext\` ជាមួយ \`useState\` ដើម្បីគ្រប់គ្រង Global State។

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'សុខា', age: 25 });
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

function UserProfile() {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <div>
      <p>ឈ្មោះ: {user.name}, អាយុ: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        បន្ថែមអាយុ
      </button>
    </div>
  );
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
    <div>
      <p>ប្រធានបទ: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        ប្តូរប្រធានបទ
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ប្រើ useContext សម្រាប់ Theme</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { createContext, useContext } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  const ThemeContext = createContext('light');
  function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return <p>ប្រធានបទ: {theme}</p>;
  }
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <ThemedComponent />
      </ThemeContext.Provider>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
const ThemeContext = createContext('light');
function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <p>ប្រធានបទ: {theme}</p>;
}
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ useContext ជាមួយ State</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { createContext, useContext, useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  const UserContext = createContext();
  function UserProfile() {
    const { user, setUser } = useContext(UserContext);
    return (
      <div>
        <p>ឈ្មោះ: {user.name}, អាយុ: {user.age}</p>
        <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
          បន្ថែមអាយុ
        </button>
      </div>
    );
  }
  function App() {
    const [user, setUser] = useState({ name: 'សុខា', age: 25 });
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <UserProfile />
      </UserContext.Provider>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
const UserContext = createContext();
function UserProfile() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <p>ឈ្មោះ: {user.name}, អាយុ: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        បន្ថែមអាយុ
      </button>
    </div>
  );
}
function App() {
  const [user, setUser] = useState({ name: 'សុខា', age: 25 });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserProfile />
    </UserContext.Provider>
  );
}
</code></pre>
`
    ],
  quiz: [
    {
      question: 'តើ `useContext` Hook ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Side Effects',
        'ចូលប្រើ Data ពី Context',
        'Update State',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`useContext` ប្រើសម្រាប់ចូលប្រើ Data ពី Context ដោយមិនចាំបាច់បញ្ជូន Props។'
    },
    {
      question: 'តើ `createContext` ធ្វើអ្វី?',
      options: [
        'បង្កើត Component',
        'បង្កើត Context Object',
        'Update State',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`createContext` បង្កើត Context Object សម្រាប់ផ្ទុក Global Data។'
    },
    {
      question: 'តើ `Provider` Component ប្រើសម្រាប់អ្វី?',
      options: [
        'Render UI',
        'ផ្តល់ Data ទៅ Components ក្នុង Context',
        'Validate Props',
        'គ្រប់គ្រង Events'
      ],
      correct: 1,
      explanation: '`Provider` ផ្តល់ Data ទៅ Components ក្នុង Context។'
    },
    {
      question: 'តើ `useContext` អាចប្រើជាមួយ State បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Class Components', 'បានតែក្នុង Functional Components'],
      correct: 0,
      explanation: '`useContext` អាចប្រើជាមួយ State ដើម្បីគ្រប់គ្រង Global State។'
    },
    {
      question: 'តើកូដ `const theme = useContext(ThemeContext);` ធ្វើអ្វី?',
      options: [
        'បង្កើត Context',
        'ចូលប្រើ Value ពី ThemeContext',
        'Update State',
        'Render Component'
      ],
      correct: 1,
      explanation: 'ចូលប្រើ Value ពី `ThemeContext`។'
    },
    {
      question: 'តើ Context ជួយកាត់បន្ថយអ្វី?',
      options: [
        'State Updates',
        'Prop Drilling',
        'Side Effects',
        'CSS Styling'
      ],
      correct: 1,
      explanation: 'Context កាត់បន្ថយ Prop Drilling ដោយផ្តល់ Data ដោយផ្ទាល់ទៅ Components។'
    },
    {
      question: 'តើ `useContext` អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 1,
      explanation: '`useContext` ប្រើបានតែក្នុង Functional Components។'
    },
    {
      question: 'តើកូដ `<ThemeContext.Provider value="dark">` ធ្វើអ្វី?',
      options: [
        'បង្កើត Context',
        'ផ្តល់ Value "dark" ទៅ Components ក្នុង Context',
        'Update State',
        'Validate Props'
      ],
      correct: 1,
      explanation: 'ផ្តល់ Value "dark" ទៅ Components ក្នុង `ThemeContext`។'
    },
    {
      question: 'តើ Context អាចផ្ទុក Data Type អ្វីបានខ្លះ?',
      options: [
        'String ប៉ុណ្ណោះ',
        'Number ប៉ុណ្ណោះ',
        'String, Number, Object, Array, Function',
        'HTML Elements ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Context អាចផ្ទុក String, Number, Object, Array, Function, ជាដើម។'
    },
    {
      question: 'តើកូដ `useContext(UserContext)` នឹង Return អ្វី?',
      options: [
        'Context Object',
        'Value នៃ UserContext',
        'State Value',
        'Props'
      ],
      correct: 1,
      explanation: '`useContext(UserContext)` Return Value ដែលផ្តល់ដោយ `UserContext.Provider`។'
    },
    {
      question: 'តើ `useContext` ជួយធ្វើឱ្យកូដសាមញ្ញដោយរបៀបណា?',
      options: [
        'កាត់បន្ថយការបញ្ជូន Props តាម Hierarchy',
        'កាត់បន្ថយ Side Effects',
        'បង្កើន Performance',
        'Validate Data'
      ],
      correct: 0,
      explanation: '`useContext` កាត់បន្ថយ Prop Drilling ដោយផ្តល់ Data ដោយផ្ទាល់។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ \`useContext\` ដើម្បីប្តូរប្រធានបទ (Theme)។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React useContext Theme Switch"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត \`ThemeContext\` ដោយប្រើ \`createContext\`។
   - បង្កើត Functional Component \`App\` ដែល:
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`theme\` ជាមួយ Initial Value \`"light"\`។
     - Render \`<ThemeContext.Provider value={{ theme, setTheme }}>\`។
     - Render \`<ThemedComponent />\` នៅក្នុង \`Provider\`។
   - បង្កើត Functional Component \`ThemedComponent\` ដែល:
     - ប្រើ \`useContext\` ដើម្បីចូលប្រើ \`theme\` និង \`setTheme\`។
     - Render \`<p>ប្រធានបទ: {theme}</p>\`។
     - Render \`<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>ប្តូរប្រធានបទ</button>\`។
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
  <title>React useContext Theme Switch</title>
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
    function ThemedComponent() {
      const { theme, setTheme } = React.useContext(ThemeContext);
      return (
        <div>
          <p>ប្រធានបទ: {theme}</p>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            ប្តូរប្រធានបទ
          </button>
        </div>
      );
    }
    function App() {
      const [theme, setTheme] = React.useState('light');
      return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ThemedComponent />
        </ThemeContext.Provider>
      );
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson3_2Content;