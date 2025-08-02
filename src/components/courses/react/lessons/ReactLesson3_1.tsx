import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson3_1Content: LessonContent = {
  title: 'Hook useEffect',
  objectives: [
    'យល់ដឹងអំពី Hook `useEffect` និងអត្ថន័យរបស់វា',
    'ស្វែងយល់ពីការប្រើ `useEffect` សម្រាប់ Side Effects',
    'រៀនគ្រប់គ្រង Dependencies ក្នុង `useEffect`',
    'រំនប្រើ Cleanup Function ក្នុង `useEffect`',
    'អនុវត្ត `useEffect` ជាមួយ API Calls'
  ],
  content: `
# Hook useEffect 🌐

---

**\`useEffect\`** គឺជា Hook ក្នុង React ដែលប្រើសម្រាប់គ្រប់គ្រង **Side Effects** ដូចជា API Calls, Subscriptions, ឬ DOM Updates នៅក្នុង Functional Components។

---

## 1. អ្វីទៅជា \`useEffect\`?
\`useEffect\` អនុញ្ញាតឱ្យអ្នកធ្វើការងារដែលមិនមែនជា Rendering (Side Effects) បន្ទាប់ពី Component Render។

\`\`\`jsx
import { useEffect } from 'react';

function Example() {
  useEffect(() => {
    document.title = 'សួស្តី, React!';
  }, []);
  return <h1>សួស្តី!</h1>;
}
\`\`\`

- **Callback Function**: ការងារដែលត្រូវធ្វើ (ឧ. Update \`document.title\`)។
- **Dependency Array**: កំណត់ថា \`useEffect\` នឹងរត់នៅពេលណា។

---

## 2. ការប្រើ \`useEffect\` សម្រាប់ Side Effects
\`useEffect\` ប្រើសម្រាប់ការងារដូចជា:
- Fetching Data (API Calls)
- Setting Timers/Intervals
- Updating DOM

\`\`\`jsx
import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
  }, []);
  
  return <p>វិនាទី: {seconds}</p>;
}
\`\`\`

---

## 3. Dependencies ក្នុង \`useEffect\`
Dependency Array កំណត់ថា \`useEffect\` នឹងរត់នៅពេលណា:
- \`[]\`: រត់តែម្តងបន្ទាប់ពី Component Mount។
- \`[variable]\`: រត់នៅពេល \`variable\` ផ្លាស់ប្តូរ។
- គ្មាន Dependency Array: រត់រាល់ពេល Component Render។

\`\`\`jsx
function Counter({ count }) {
  useEffect(() => {
    console.log('Count បានផ្លាស់ប្តូរ:', count);
  }, [count]);
  return <p>រាប់: {count}</p>;
}
\`\`\`

---

## 4. Cleanup Function
\`useEffect\` អាច Return Cleanup Function ដើម្បីបញ្ឈប់ Side Effects (ឧ. Clear Intervals, Cancel Subscriptions)។

\`\`\`jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return <p>វិនាទី: {seconds}</p>;
}
\`\`\`

---

## 5. ឧទាហរណ៍រួមបញ្ចូល (API Call)
\`\`\`jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

ReactDOM.render(<UserList />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Update Document Title</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useEffect } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Example() {
    useEffect(() => {
      document.title = 'សួស្តី, React!';
    }, []);
    return <h1>សួស្តី!</h1>;
  }
  ReactDOM.render(<Example />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function Example() {
  useEffect(() => {
    document.title = 'សួស្តី, React!';
  }, []);
  return <h1>សួស្តី!</h1>;
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Timer ជាមួយ Cleanup</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { useState, useEffect } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Timer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return <p>វិនាទី: {seconds}</p>;
  }
  ReactDOM.render(<Timer />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>វិនាទី: {seconds}</p>;
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `useEffect` Hook ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'គ្រប់គ្រង Side Effects',
        'Validate Props',
        'បង្កើត Components'
      ],
      correct: 1,
      explanation: '`useEffect` ប្រើសម្រាប់គ្រប់គ្រង Side Effects ដូចជា API Calls ឬ DOM Updates។'
    },
    {
      question: 'តើ Dependency Array ក្នុង `useEffect` ធ្វើអ្វី?',
      options: [
        'កំណត់ CSS',
        'កំណត់ថា `useEffect` នឹងរត់នៅពេលណា',
        'Update State',
        'Validate Props'
      ],
      correct: 1,
      explanation: 'Dependency Array កំណត់ថា `useEffect` នឹងរត់នៅពេលណា ដោយផ្អែកលើ Dependencies។'
    },
    {
      question: 'តើ `useEffect(() => {}, [])` នឹងរត់នៅពេលណា?',
      options: [
        'រាល់ពេល Component Render',
        'តែម្តងបន្ទាប់ពី Component Mount',
        'នៅពេល State ផ្លាស់ប្តូរ',
        'នៅពេល Props ផ្លាស់ប្តូរ'
      ],
      correct: 1,
      explanation: 'Empty Dependency Array (`[]`) ធ្វើឱ្យ `useEffect` រត់តែម្តងបន្ទាប់ពី Component Mount។'
    },
    {
      question: 'តើ Cleanup Function ក្នុង `useEffect` ប្រើសម្រាប់អ្វី?',
      options: [
        'Update State',
        'បញ្ឈប់ Side Effects',
        'Render Component',
        'Validate Props'
      ],
      correct: 1,
      explanation: 'Cleanup Function បញ្ឈប់ Side Effects ដូចជា Clear Intervals ឬ Cancel Subscriptions។'
    },
    {
      question: 'តើកូដ `useEffect(() => { console.log(\'Effect\'); }, [count])` នឹងរត់នៅពេលណា?',
      options: [
        'រាល់ពេល Component Render',
        'នៅពេល `count` ផ្លាស់ប្តូរ',
        'តែម្តងបន្ទាប់ពី Mount',
        'នៅពេល Component Unmount'
      ],
      correct: 1,
      explanation: '`useEffect` រត់នៅពេល `count` ផ្លាស់ប្តូរ ដោយសារវាជា Dependency។'
    },
    {
      question: 'តើ `useEffect` អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 1,
      explanation: '`useEffect` ប្រើបានតែក្នុង Functional Components។'
    },
    {
      question: 'តើកូដ `return () => clearInterval(interval);` នៅក្នុង `useEffect` ធ្វើអ្វី?',
      options: [
        'Update State',
        'Clear Interval នៅពេល Component Unmount',
        'Render Component',
        'Fetch Data'
      ],
      correct: 1,
      explanation: 'Cleanup Function បញ្ឈប់ Interval នៅពេល Component Unmount។'
    },
    {
      question: 'តើ `useEffect` អាចប្រើសម្រាប់ API Calls បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Class Components', 'បានតែក្នុង Functional Components'],
      correct: 0,
      explanation: '`useEffect` អាចប្រើសម្រាប់ API Calls ក្នុង Functional Components�।'
    },
    {
      question: 'តើកូដ `useEffect(() => { console.log(\'Render\'); })` នឹងរត់នៅពេលណា?',
      options: [
        'តែម្តងបន្ទាប់ពី Mount',
        'រាល់ពេល Component Render',
        'នៅពេល State ផ្លាស់ប្តូរ',
        'នៅពេល Props ផ្លាស់ប្តូរ'
      ],
      correct: 1,
      explanation: 'គ្មាន Dependency Array ធ្វើឱ្យ `useEffect` រត់រាល់ពេល Component Render។'
    },
    {
      question: 'តើ Side Effects អាចរួមបញ្ចូលអ្វីខ្លះ?',
      options: [
        'API Calls, Timers, DOM Updates',
        'State Updates ប៉ុណ្ណោះ',
        'Props Validation',
        'CSS Styling'
      ],
      correct: 0,
      explanation: 'Side Effects រួមបញ្ចូល API Calls, Timers, DOM Updates, ជាដើម។'
    },
    {
      question: 'តើ Dependency Array ត្រូវបញ្ចូលអ្វី?',
      options: [
        'CSS Classes',
        'Variables ដែលប្រើក្នុង Callback Function',
        'HTML Elements',
        'Event Handlers'
      ],
      correct: 1,
      explanation: 'Dependency Array ត្រូវបញ្ចូល Variables ដែលប្រើក្នុង Callback Function។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ \`useEffect\` ដើម្បី Update Document Title ដោយផ្អែកលើ Counter។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React useEffect Counter"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`Counter\` ដែល:
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`count\` ជាមួយ Initial Value \`0\`។
     - Render \`<p>រាប់: {count}</p>\` និង \`<button onClick={() => setCount(count + 1)}>បន្ថែម</button>\`។
     - ប្រើ \`useEffect\` ដើម្បី Update \`document.title\` ទៅជា \`រាប់: {count}\` នៅពេល \`count\` ផ្លាស់ប្តូរ។
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
  <title>React useEffect Counter</title>
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
      React.useEffect(() => {
        document.title = \`រាប់: \${count}\`;
      }, [count]);
      return (
        <div>
          <p>រាប់: {count}</p>
          <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
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

export default ReactLesson3_1Content;