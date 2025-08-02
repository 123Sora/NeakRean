import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson6_5Content: LessonContent = {
  title: 'ការអនុវត្តល្អបំផុតក្នុង React (Best Practices)',
  objectives: [
    'យល់ដឹងអំពីការអនុវត្តល្អបំផុតក្នុងការអភិវឌ្ឍ React',
    'រៀនប្រើ Functional Components និង Hooks',
    'ស្វែងយល់ពី Component Reusability និង Modularity',
    'អនុវត្ត Prop Types ឬ TypeScript សម្រាប់ Type Safety',
    'រៀនរៀបចំ Folder Structure សម្រាប់ Scalability',
    'អនុវត្ត Performance Optimization Techniques',
    'ស្វែងយល់ពី Clean Code និង Documentation'
  ],
  content: `
# ការអនុវត្តល្អបំផុតក្នុង React (Best Practices) 🛠️

---

**Best Practices** ជួយឱ្យកូដ React មានភាពស្អាត ងាយថែទាំ និង Scalable៕

---

## 1. ប្រើ Functional Components និង Hooks
ប្រើ Functional Components ជំនួស Class Components៕

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
\`\`\`

---

## 2. Component Reusability
បង្កើត Reusable Components ដើម្បីកាត់បន្ថយ Code Duplication៕

\`\`\`jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  return (
    <div>
      <Button label="ចុចខ្ញុំ" onClick={() => alert('ចុចហើយ!')} />
    </div>
  );
}
\`\`\`

---

## 3. Type Safety
ប្រើ Prop Types ឬ TypeScript ដើម្បីធានា Type Safety៕

\`\`\`jsx
import PropTypes from 'prop-types';

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
\`\`\`

---

## 4. Folder Structure
រៀបចំ Folder Structure សម្រាប់ Scalability៕

\`\`\`
src/
  components/
    Button.jsx
    Counter.jsx
  pages/
    Home.jsx
    About.jsx
  hooks/
    useCounter.js
\`\`\`

---

## 5. Performance Optimization
ប្រើ \`React.memo\` និង \`useCallback\` ដើម្បី Optimize Performance៕

\`\`\`jsx
import { memo, useCallback } from 'react';

const Button = memo(({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
));

function App() {
  const handleClick = useCallback(() => alert('ចុចហើយ!'), []);
  return <Button label="ចុចខ្ញុំ" onClick={handleClick} />;
}
\`\`\`

---

## 6. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>ចំនួន: {count}</p>
      <Button label="បន្ថែម" onClick={() => setCount(count + 1)} />
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Counter ជាមួយ Reusable Button</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
  }
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>ចំនួន: {count}</p>
        <Button label="បន្ថែម" onClick={() => setCount(count + 1)} />
      </div>
    );
  }
  ReactDOM.render(<Counter />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>ចំនួន: {count}</p>
      <Button label="បន្ថែម" onClick={() => setCount(count + 1)} />
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Functional Components មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'ស្មុគស្មាញជាង Class Components',
        'សាមញ្ញ និងប្រើ Hooks',
        'ប្រើសម្រាប់ Backend',
        'មិនគាំទ្រ State'
      ],
      correct: 1,
      explanation: 'Functional Components សាមញ្ញ និងប្រើ Hooks ដើម្បីគ្រប់គ្រង State និង Lifecycle៕'
    },
    {
      question: 'តើ `React.memo` ជួយអ្វី?',
      options: [
        'Update State',
        'Prevent Unnecessary Re-renders',
        'Handle Events',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`React.memo` Prevent Unnecessary Re-renders នៃ Components៕'
    },
    {
      question: 'តើ Prop Types ប្រើសម្រាប់អ្វី?',
      options: [
        'Style Components',
        'Ensure Type Safety',
        'Manage State',
        'Optimize Performance'
      ],
      correct: 1,
      explanation: 'Prop Types Ensure Type Safety សម្រាប់ Component Props៕'
    },
    {
      question: 'តើ Folder Structure ជួយអ្វីក្នុង React Project?',
      options: [
        'Optimize Performance',
        'Improve Scalability និង Maintainability',
        'Handle Events',
        'Fetch Data'
      ],
      correct: 1,
      explanation: 'Folder Structure Improve Scalability និង Maintainability នៃ Project៕'
    },
    {
      question: 'តើ `useCallback` ប្រើសម្រាប់អ្វី?',
      options: [
        'Memoize Functions',
        'Update State',
        'Render Components',
        'Style Elements'
      ],
      correct: 0,
      explanation: '`useCallback` Memoize Functions ដើម្បី Prevent Unnecessary Re-creations៕'
    },
    {
      question: 'តើ Clean Code នៅក្នុង React សំដៅលើអ្វី?',
      options: [
        'Complex Code',
        'Readable និង Maintainable Code',
        'Optimized Code',
        'Encrypted Code'
      ],
      correct: 1,
      explanation: 'Clean Code សំដៅលើ Readable និង Maintainable Code៕'
    },
    {
      question: 'តើ Component Reusability ជួយអ្វី?',
      options: [
        'Increase Code Duplication',
        'Reduce Code Duplication',
        'Manage State',
        'Fetch Data'
      ],
      correct: 1,
      explanation: 'Component Reusability Reduce Code Duplication និង Improve Maintainability៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្កើត Counter App ជាមួយ Reusable Button Component៕

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title៖ "React Counter App"៕
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`៕

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel៕
   - បង្កើត Functional Component \`Button\` ដែល:
     - ទទួល Props \`label\` (String) និង \`onClick\` (Function)៕
     - Render \`<button>\` ជាមួយ Label និង onClick Handler៕
   - បង្កើត Functional Component \`Counter\` ដែល:
     - ប្រើ \`useState\` សម្រាប់ \`count\` (Number, Initial: 0)៕
     - Render \`<p>\` ដើម្បីបង្ហាញ Count និង \`<Button>\` Component សម្រាប់ Increment Count៕
   - Render \`Counter\` Component ទៅក្នុង \`<div id="root">\`៕

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`៕
     - កំណត់ \`font-size: 18px;\` សម្រាប់ \`p\`៕

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស៕ អ្នកគួរអាចចុច Button ដើម្បី Increment Count៕
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Counter App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    button {
      padding: 10px;
      margin: 5px;
      background-color: #2c3e50;
      color: white;
    }
    p {
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/Babel.min.js"></script>
  <script type="text/babel">
    function Button({ label, onClick }) {
      return <button onClick={onClick}>{label}</button>;
    }
    function Counter() {
      const [count, setCount] = React.useState(0);
      return (
        <div>
          <p>ចំនួន: {count}</p>
          <Button label="បន្ថែម" onClick={() => setCount(count + 1)} />
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

export default ReactLesson6_5Content;