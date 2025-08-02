import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson5_5Content: LessonContent = {
  title: 'ការបង្កើនប្រសិទ្ធភាព Performance',
  objectives: [
    'យល់ដឹងអំពីការបង្កើនប្រសិទ្ធភាព Performance នៅក្នុង React',
    'ស្វែងយល់ពី `useMemo` និង `useCallback`',
    'រៀនប្រើ React.memo ដើម្បីកាត់បន្ថយ Re-renders',
    'អនុវត្ត Lazy Loading ជាមួយ React.lazy និង Suspense',
    'រៀនប្រើ Profiler API សម្រាប់វាស់ Performance',
    'ស្វែងយល់ពី Code Splitting',
    'រៀនកាត់បន្ថយ Bundle Size'
  ],
  content: `
# ការបង្កើនប្រសិទ្ធភាព Performance 🚀

---

**Performance Optimization** ជួយធ្វើឱ្យ React Applications ដំណើរការលឿន និងប្រើ Resources តិច។

---

## 1. \`useMemo\` និង \`useCallback\`
- **\`useMemo\`**: Memoize Values ដើម្បីការពារ Calculations ដែលមិនចាំបាច់។
- **\`useCallback\`**: Memoize Functions ដើម្បីការពារ Re-creation។

\`\`\`jsx
import { useState, useMemo, useCallback } from 'react';

function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => b - a);
  }, [items]);
  
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);
  
  return (
    <div>
      <ul>
        {sortedItems.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={handleClick}>ចុច</button>
    </div>
  );
}
\`\`\`

---

## 2. React.memo
\`React.memo\` ការពារ Component ពី Re-rendering ប្រសិនបើ Props មិនផ្លាស់ប្តូរ។

\`\`\`jsx
import React from 'react';

const MemoizedComponent = React.memo(({ name }) => {
  console.log('Render MemoizedComponent');
  return <p>ឈ្មោះ: {name}</p>;
});
\`\`\`

---

## 3. Lazy Loading និង Suspense
\`React.lazy\` និង \`Suspense\` អនុញ្ញាតឱ្យ Load Components នៅពេលចាំបាច់។

\`\`\`jsx
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<p>កំពុងផ្ទុក...</p>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

---

## 4. Profiler API
\`Profiler\` វាស់ Performance នៃ Component Rendering។

\`\`\`jsx
import React, { Profiler } from 'react';

function onRender(id, phase, actualDuration) {
  console.log(\`Profiler: \${id}, Phase: \${phase}, Duration: \${actualDuration}ms\`);
}

function App() {
  return (
    <Profiler id="App" onRender={onRender}>
      <MyComponent />
    </Profiler>
  );
}
\`\`\`

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';

function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return items.sort((a, b) => b - a);
  }, [items]);
  
  return (
    <ul>
      {sortedItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const items = [5, 2, 8, 1, 9];
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>រាប់: {count}</button>
      <ExpensiveComponent items={items} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ useMemo សម្រាប់ Expensive Calculation</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useState, useMemo } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function ExpensiveComponent({ items }) {
    const sortedItems = useMemo(() => {
      console.log('Sorting items...');
      return items.sort((a, b) => b - a);
    }, [items]);
    return (
      <ul>
        {sortedItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }
  function App() {
    const [count, setCount] = useState(0);
    const items = [5, 2, 8, 1, 9];
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>រាប់: {count}</button>
        <ExpensiveComponent items={items} />
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return items.sort((a, b) => b - a);
  }, [items]);
  return (
    <ul>
      {sortedItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}
function App() {
  const [count, setCount] = useState(0);
  const items = [5, 2, 8, 1, 9];
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>រាប់: {count}</button>
      <ExpensiveComponent items={items} />
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ React.memo</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  const MemoizedComponent = React.memo(({ name }) => {
    console.log('Render MemoizedComponent');
    return <p>ឈ្មោះ: {name}</p>;
  });
  function App() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>រាប់: {count}</button>
        <MemoizedComponent name="សុខ" />
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
const MemoizedComponent = React.memo(({ name }) => {
  console.log('Render MemoizedComponent');
  return <p>ឈ្មោះ: {name}</p>;
});
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>រាប់: {count}</button>
      <MemoizedComponent name="សុខ" />
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `useMemo` ប្រើសម្រាប់អ្វី?',
      options: [
        'Memoize Functions',
        'Memoize Values',
        'Prevent Re-rendering',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`useMemo` Memoize Values ដើម្បីការពារ Expensive Calculations។'
    },
    {
      question: 'តើ `useCallback` ប្រើសម្រាប់អ្វី?',
      options: [
        'Memoize Values',
        'Memoize Functions',
        'Prevent Re-rendering',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`useCallback` Memoize Functions ដើម្បីការពារ Re-creation។'
    },
    {
      question: 'តើ `React.memo` ធ្វើអ្វី?',
      options: [
        'Update State',
        'Prevent Re-rendering នៅពេល Props មិនផ្លាស់ប្តូរ',
        'Fetch Data',
        'Log Performance'
      ],
      correct: 1,
      explanation: '`React.memo` Prevent Re-rendering នៅពេល Props មិនផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `React.lazy` និង `Suspense` ជួយអ្វី?',
      options: [
        'State Management',
        'Lazy Loading Components',
        'Error Handling',
        'Data Fetching'
      ],
      correct: 1,
      explanation: '`React.lazy` និង `Suspense` អនុញ្ញាតឱ្យ Lazy Load Components។'
    },
    {
      question: 'តើ Profiler API ប្រើសម្រាប់អ្វី?',
      options: [
        'Update State',
        'វាស់ Performance នៃ Rendering',
        'Validate Props',
        'Fetch Data'
      ],
      correct: 1,
      explanation: 'Profiler API វាស់ Performance នៃ Component Rendering។'
    },
    {
      question: 'តើ Code Splitting ជួយអ្វី?',
      options: [
        'កាត់បន្ថយ Bundle Size',
        'Update State',
        'Prevent Re-rendering',
        'Log Errors'
      ],
      correct: 0,
      explanation: 'Code Splitting កាត់បន្ថយ Bundle Size ដោយ Load Code នៅពេលចាំបាច់។'
    },
    {
      question: 'តើ `useMemo` តម្រូវឱ្យមាន Dependency Array ទេ?',
      options: [
        'ត្រូវ',
        'មិនត្រូវ',
        'ត្រូវតែក្នុង Functional Components',
        'ត្រូវតែក្នុង Class Components'
      ],
      correct: 0,
      explanation: '`useMemo` តម្រូវឱ្យមាន Dependency Array ដើម្បីកំណត់ Re-calculation។'
    },
    {
      question: 'តើ `React.memo` ប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 2,
      explanation: '`React.memo` ប្រើបានទាំង Functional និង Class Components។'
    },
    {
      question: 'តើ `Suspense` Render អ្វីនៅពេល Component កំពុង Load?',
      options: [
        'Error UI',
        'Fallback UI',
        'State Value',
        'DOM Reference'
      ],
      correct: 1,
      explanation: '`Suspense` Render Fallback UI នៅពេល Component កំពុង Load។'
    },
    {
      question: 'តើ `useCallback` Return អ្វី?',
      options: [
        'Memoized Value',
        'Memoized Function',
        'Component Instance',
        'State Object'
      ],
      correct: 1,
      explanation: '`useCallback` Return Memoized Function។'
    },
    {
      question: 'តើ Performance Optimization ជួយអ្វីក្នុង React?',
      options: [
        'កាត់បន្ថយ Rendering Time',
        'Validate Props',
        'Fetch Data',
        'Manage State'
      ],
      correct: 0,
      explanation: 'Performance Optimization កាត់បន្ថយ Rendering Time និង Resource Usage។'
    },
    {
      question: 'តើ `React.lazy` តម្រូវឱ្យប្រើជាមួយអ្វី?',
      options: [
        'useEffect',
        'Suspense',
        'useMemo',
        'useCallback'
      ],
      correct: 1,
      explanation: '`React.lazy` តម្រូវឱ្យប្រើជាមួយ `Suspense` សម្រាប់ Fallback UI។'
    },
    {
      question: 'តើ Profiler API Log អ្វីខ្លះ?',
      options: [
        'State Updates',
        'Rendering Duration',
        'Props Changes',
        'API Calls'
      ],
      correct: 1,
      explanation: 'Profiler API Log Rendering Duration និង Performance Metrics។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ \`useMemo\` ដើម្បីបង្កើត App ដែល Optimize Performance។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Performance Optimization"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`ExpensiveComponent\` ដែល:
     - ទទួល Props \`items\` (Array នៃ Numbers)។
     - ប្រើ \`useMemo\` ដើម្បី Sort \`items\` និង Log "Sorting items..." នៅ Console។
     - Render Sorted Items ជា \`<ul>\`។
   - បង្កើត Functional Component \`App\` ដែល:
     - ប្រើ \`useState\` សម្រាប់ State \`count\` (Initial Value: 0)។
     - Render \`<button>\` ដើម្បី Increment \`count\`។
     - Render \`<ExpensiveComponent>\` ជាមួយ Static Array \`[5, 2, 8, 1, 9]\`។
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` សម្រាប់ \`li\`។
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យថា Sorting Log កើតឡើងតែម្តង។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Performance Optimization</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    li {
      font-size: 18px;
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
    function ExpensiveComponent({ items }) {
      const sortedItems = React.useMemo(() => {
        console.log('Sorting items...');
        return items.sort((a, b) => b - a);
      }, [items]);
      return (
        <ul>
          {sortedItems.map(item => <li key={item}>{item}</li>)}
        </ul>
      );
    }
    function App() {
      const [count, setCount] = React.useState(0);
      const items = [5, 2, 8, 1, 9];
      return (
        <div>
          <button onClick={() => setCount(count + 1)}>រាប់: {count}</button>
          <ExpensiveComponent items={items} />
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

export default ReactLesson5_5Content;