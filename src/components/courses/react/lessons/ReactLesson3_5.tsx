import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson3_5Content: LessonContent = {
  title: 'Hooks useCallback និង useMemo',
  objectives: [
    'យល់ដឹងអំពី Hooks `useCallback` និង `useMemo`',
    'ស្វែងយល់ពីការប្រើ `useCallback` សម្រាប់ Memoize Functions',
    'ស្វែងយល់ពីការប្រើ `useMemo` សម្រាប់ Memoize Values',
    'រៀនប្រើ `useCallback` ដើម្បីការពារ Re-rendering នៃ Child Components',
    'រៀនប្រើ `useMemo` ដើម្បីកាត់បន្ថយ Computation Overhead',
    'អនុវត្ត `useCallback` និង `useMemo` ជាមួយ Dependencies'
  ],
  content: `
# Hooks useCallback និង useMemo 🚀

---

**\`useCallback\`** និង **\`useMemo\`** គឺជា Hooks ដែលប្រើសម្រាប់ Optimize Performance ដោយ Memoizing Functions និង Values ដើម្បីការពារ Re-computation ឬ Re-rendering ដែលមិនចាំបាច់។

---

## 1. Hook \`useCallback\`
\`useCallback\` Memoize Function ដើម្បីឱ្យ Function ដដែលនៅតែជា Reference ដដែល ប្រសិនបើ Dependencies មិនផ្លាស់ប្តូរ។

\`\`\`jsx
import { useCallback, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
    setCount(count => count + 1);
  }, []);
  
  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={increment}>បន្ថែម</button>
    </div>
  );
}
\`\`\`

- **Callback Function**: Function ដែលត្រូវ Memoize។
- **Dependency Array**: កំណត់ថា Function នឹង Recreate នៅពេលណា។

---

## 2. Hook \`useMemo\`
\`useMemo\` Memoize Value ដែលផលិតពី Computation ដើម្បីការពារ Re-computation ប្រសិនបើ Dependencies មិនផ្លាស់ប្តូរ។

\`\`\`jsx
import { useMemo, useState } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  
  const expensiveValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }, []);
  
  return (
    <div>
      <p>លទ្ធផល: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
\`\`\`

---

## 3. ការប្រើ \`useCallback\` ជាមួយ Child Components
\`useCallback\` ការពារ Child Components ពី Re-rendering ដែលមិនចាំបាច់។

\`\`\`jsx
import { useCallback, useState } from 'react';

function Child({ onClick }) {
  console.log('Child Rendered');
  return <button onClick={onClick}>ចុចខ្ញុំ</button>;
}

function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('Button Clicked');
  }, []);
  
  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
      <Child onClick={handleClick} />
    </div>
  );
}
\`\`\`

---

## 4. ការប្រើ \`useMemo\` សម្រាប់ Expensive Computations
\`useMemo\` កាត់បន្ថយ Computation Overhead សម្រាប់ Values ដែលគណនាយឺត។

\`\`\`jsx
function SortedList() {
  const [items, setItems] = useState(['Banana', 'Apple', 'Orange']);
  
  const sortedItems = useMemo(() => {
    return [...items].sort();
  }, [items]);
  
  return (
    <div>
      <ul>
        {sortedItems.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={() => setItems([...items, 'Mango'])}>បន្ថែម</button>
    </div>
  );
}
\`\`\`

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';

function Child({ onClick }) {
  console.log('Child Rendered');
  return <button onClick={onClick}>ចុចខ្ញុំ</button>;
}

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Banana', 'Apple']);
  
  const handleClick = useCallback(() => {
    console.log('Button Clicked');
  }, []);
  
  const sortedItems = useMemo(() => {
    return [...items].sort();
  }, [items]);
  
  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
      <Child onClick={handleClick} />
      <ul>
        {sortedItems.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={() => setItems([...items, 'Orange'])}>បន្ថែម Item</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ useCallback ជាមួយ Child Component</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useCallback, useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Child({ onClick }) {
    console.log('Child Rendered');
    return <button onClick={onClick}>ចុចខ្ញុំ</button>;
  }
  function Parent() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
      console.log('Button Clicked');
    }, []);
    return (
      <div>
        <p>រាប់: {count}</p>
        <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
        <Child onClick={handleClick} />
      </div>
    );
  }
  ReactDOM.render(<Parent />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function Child({ onClick }) {
  console.log('Child Rendered');
  return <button onClick={onClick}>ចុចខ្ញុំ</button>;
}
function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log('Button Clicked');
  }, []);
  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
      <Child onClick={handleClick} />
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ useMemo ជាមួយ Sorted List</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { useMemo, useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function SortedList() {
    const [items, setItems] = useState(['Banana', 'Apple', 'Orange']);
    const sortedItems = useMemo(() => {
      return [...items].sort();
    }, [items]);
    return (
      <div>
        <ul>
          {sortedItems.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button onClick={() => setItems([...items, 'Mango'])}>បន្ថែម</button>
      </div>
    );
  }
  ReactDOM.render(<SortedList />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function SortedList() {
  const [items, setItems] = useState(['Banana', 'Apple', 'Orange']);
  const sortedItems = useMemo(() => {
    return [...items].sort();
  }, [items]);
  return (
    <div>
      <ul>
        {sortedItems.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={() => setItems([...items, 'Mango'])}>បន្ថែម</button>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `useCallback` Hook ប្រើសម្រាប់អ្វី?',
      options: [
        'Memoize Values',
        'Memoize Functions',
        'គ្រប់គ្រង State',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`useCallback` Memoize Functions ដើម្បីការពារ Re-creation។'
    },
    {
      question: 'តើ `useMemo` Hook ប្រើសម្រាប់អ្វី?',
      options: [
        'Memoize Functions',
        'Memoize Values',
        'គ្រប់គ្រង Events',
        'Update DOM'
      ],
      correct: 1,
      explanation: '`useMemo` Memoize Values ដើម្បីការពារ Re-computation។'
    },
    {
      question: 'តើ `useCallback` និង `useMemo` មាន Dependency Array ទេ?',
      options: ['មាន', 'មិនមាន', 'មានតែក្នុង Class Components', 'មានតែក្នុង Functional Components'],
      correct: 0,
      explanation: 'ទាំង `useCallback` និង `useMemo` មាន Dependency Array ដើម្បីកំណត់ Re-computation។'
    },
    {
      question: 'តើ `useCallback` ជួយកាត់បន្ថយអ្វី?',
      options: [
        'State Updates',
        'Re-rendering នៃ Child Components',
        'API Calls',
        'CSS Rendering'
      ],
      correct: 1,
      explanation: '`useCallback` កាត់បន្ថយ Re-rendering នៃ Child Components ដោយ Memoize Functions។'
    },
    {
      question: 'តើ `useMemo` ជួយកាត់បន្ថយអ្វី?',
      options: [
        'Re-rendering នៃ Child Components',
        'Computation Overhead',
        'State Updates',
        'Event Handling'
      ],
      correct: 1,
      explanation: '`useMemo` កាត់បន្ថយ Computation Overhead ដោយ Memoize Values។'
    },
    {
      question: 'តើកូដ `useCallback(() => {}, [count])` នឹង Recreate Function នៅពេលណា?',
      options: [
        'រាល់ពេល Component Render',
        'នៅពេល `count` ផ្លាស់ប្តូរ',
        'តែម្តងបន្ទាប់ពី Mount',
        'នៅពេល Component Unmount'
      ],
      correct: 1,
      explanation: '`useCallback` Recreate Function នៅពេល Dependencies (`count`) ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើកូដ `useMemo(() => computeValue(), [value])` នឹង Recalculate Value នៅពេលណា?',
      options: [
        'រាល់ពេល Component Render',
        'នៅពេល `value` ផ្លាស់ប្តូរ',
        'តែម្តងបន្ទាប់ពី Mount',
        'នៅពេល Component Unmount'
      ],
      correct: 1,
      explanation: '`useMemo` Recalculate Value នៅពេល Dependencies (`value`) ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `useCallback` អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 1,
      explanation: '`useCallback` ប្រើបានតែក្នុង Functional Components។'
    },
    {
      question: 'តើ `useMemo` អាចប្រើសម្រាប់អ្វីបានខ្លះ?',
      options: [
        'Memoize DOM References',
        'Memoize Expensive Computations',
        'Validate Props',
        'Update State'
      ],
      correct: 1,
      explanation: '`useMemo` ប្រើសម្រាប់ Memoize Expensive Computations។'
    },
    {
      question: 'តើ Dependency Array ក្នុង `useCallback` និង `useMemo` ត្រូវបញ្ចូលអ្វី?',
      options: [
        'CSS Classes',
        'Variables ដែលប្រើក្នុង Callback/Value',
        'HTML Elements',
        'Event Handlers'
      ],
      correct: 1,
      explanation: 'Dependency Array ត្រូវបញ្ចូល Variables ដែលប្រើក្នុង Callback/Value។'
    },
    {
      question: 'តើការប្រើ `useCallback` ដោយគ្មាន Dependency Array នឹងបង្កអ្វី?',
      options: [
        'Error',
        'Recreate Function រាល់ពេល Render',
        'Memoize Function ជានិច្ច',
        'Validate Props'
      ],
      correct: 1,
      explanation: 'គ្មាន Dependency Array ធ្វើឱ្យ `useCallback` Recreate Function រាល់ពេល Render។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ \`useCallback\` និង \`useMemo\` ដើម្បីបង្កើត Sorted List App។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React useCallback and useMemo Sorted List"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`Child\` ដែល:
     - ទទួល Prop \`onClick\` និង Render \`<button onClick={onClick}>ចុចខ្ញុំ</button>\`។
     - Console Log "Child Rendered" នៅពេល Render។
   - បង្កើត Functional Component \`App\` ដែល:
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`items\` ជាមួយ Initial Value \`['Banana', 'Apple']\`។
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`count\` ជាមួយ Initial Value \`0\`។
     - ប្រើ \`useCallback\` ដើម្បី Memoize Function \`handleClick\` ដែល Console Log "Button Clicked"។
     - ប្រើ \`useMemo\` ដើម្បី Memoize \`sortedItems\` ដែល Sort \`items\`។
     - Render \`<p>រាប់: {count}</p>\`។
     - Render \`<button onClick={() => setCount(count + 1)}>បន្ថែម</button>\`។
     - Render \`<Child onClick={handleClick} />\`។
     - Render \`<ul>\` ដែលបង្ហាញ \`sortedItems\` ដោយប្រើ \`map()\` និង \`key\` Prop។
     - Render \`<button onClick={() => setItems([...items, 'Orange'])}>បន្ថែម Item</button>\`។
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`p\` និង \`ul li\`។
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស និងឃើញ "Child Rendered" តែនៅពេលចាំបាច់។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React useCallback and useMemo Sorted List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p, ul li {
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
    function Child({ onClick }) {
      console.log('Child Rendered');
      return <button onClick={onClick}>ចុចខ្ញុំ</button>;
    }
    function App() {
      const [count, setCount] = React.useState(0);
      const [items, setItems] = React.useState(['Banana', 'Apple']);
      const handleClick = React.useCallback(() => {
        console.log('Button Clicked');
      }, []);
      const sortedItems = React.useMemo(() => {
        return [...items].sort();
      }, [items]);
      return (
        <div>
          <p>រាប់: {count}</p>
          <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
          <Child onClick={handleClick} />
          <ul>
            {sortedItems.map(item => <li key={item}>{item}</li>)}
          </ul>
          <button onClick={() => setItems([...items, 'Orange'])}>បន្ថែម Item</button>
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

export default ReactLesson3_5Content;