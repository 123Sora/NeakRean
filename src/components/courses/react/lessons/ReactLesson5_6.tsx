import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson5_6Content: LessonContent = {
  title: 'ការ Test React Components',
  objectives: [
    'យល់ដឹងអំពីការ Test React Components',
    'ស្វែងយល់ពី Testing Libraries ដូចជា Jest និង React Testing Library',
    'រៀនសរសេរ Unit Tests សម្រាប់ Components',
    'អនុវត្ត Testing Component Rendering',
    'រៀន Test User Interactions',
    'ស្វែងយល់ពី Snapshot Testing',
    'រៀន Test Hooks និង Custom Hooks'
  ],
  content: `
# ការ Test React Components 🧪

---

**Testing React Components** ជួយធានាថា Components ដំណើរការត្រឹមត្រូវ និងមានភាពជឿជាក់។

---

## 1. Testing Libraries
- **Jest**: JavaScript Testing Framework សម្រាប់ Assertions និង Mocking។
- **React Testing Library**: Library សម្រាប់ Test React Components ដោយផ្តោតលើ User Interactions។

\`\`\`jsx
// Component
function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

// Test
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="ចុច" />);
  expect(screen.getByText('ចុច')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button label="ចុច" onClick={handleClick} />);
  fireEvent.click(screen.getByText('ចុច'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
\`\`\`

---

## 2. Snapshot Testing
Snapshot Testing ប្រៀបធៀប Component Output ជាមួយ Snapshot ដែលរក្សាទុក។

\`\`\`jsx
import { render } from '@testing-library/react';
import Button from './Button';

test('matches snapshot', () => {
  const { asFragment } = render(<Button label="ចុច" />);
  expect(asFragment()).toMatchSnapshot();
});
\`\`\`

---

## 3. Testing Hooks
ប្រើ \`@testing-library/react-hooks\` ដើម្បី Test Custom Hooks។

\`\`\`jsx
import { useState } from 'react';

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(count + 1);
  return { count, increment };
}

// Test
import { renderHook, act } from '@testing-library/react-hooks';

test('increments count', () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
\`\`\`

---

## 4. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
\`\`\`

**កំណត់សម្គាល់:** ការ​ Test តម្រូវឱ្យមាន Testing Environment (ឧ. Jest) ដែលមិនអាច Run ផ្ទាល់ក្នុង Browser។ ឧទាហរណ៍នេះបង្ហាញ Component សម្រាប់ការយល់ដឹង។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Counter Component</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>រាប់: {count}</p>
        <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
      </div>
    );
  }
  ReactDOM.render(<Counter />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>រាប់: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Button Component</h3>
<div id="root2"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Button({ label }) {
    return <button>{label}</button>;
  }
  function App() {
    return <Button label="ចុច" />;
  }
  ReactDOM.render(<App />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function Button({ label }) {
  return <button>{label}</button>;
}
function App() {
  return <Button label="ចុច" />;
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Jest ប្រើសម្រាប់អ្វី?',
      options: [
        'Render Components',
        'JavaScript Testing Framework',
        'State Management',
        'Data Fetching'
      ],
      correct: 1,
      explanation: 'Jest ជា JavaScript Testing Framework សម្រាប់ Assertions និង Mocking។'
    },
    {
      question: 'តើ React Testing Library ផ្តោតលើអ្វី?',
      options: [
        'State Management',
        'User Interactions',
        'Code Splitting',
        'Error Handling'
      ],
      correct: 1,
      explanation: 'React Testing Library ផ្តោតលើ Testing User Interactions។'
    },
    {
      question: 'តើ `render` ពី React Testing Library ធ្វើអ្វី?',
      options: [
        'Update State',
        'Render Component ទៅ DOM',
        'Log Errors',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`render` Render Component ទៅ Virtual DOM សម្រាប់ Testing។'
    },
    {
      question: 'តើ `fireEvent.click` ប្រើសម្រាប់អ្វី?',
      options: [
        'Update State',
        'Simulate Click Event',
        'Render Component',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`fireEvent.click` Simulate Click Event នៅក្នុង Test។'
    },
    {
      question: 'តើ Snapshot Testing ប្រៀបធៀបអ្វី?',
      options: [
        'Component Output ជាមួយ Snapshot',
        'State Changes',
        'Props Values',
        'API Responses'
      ],
      correct: 0,
      explanation: 'Snapshot Testing ប្រៀបធៀប Component Output ជាមួយ Snapshot។'
    },
    {
      question: 'តើ `@testing-library/react-hooks` ប្រើសម្រាប់អ្វី?',
      options: [
        'Test Components',
        'Test Hooks',
        'Test APIs',
        'Test State'
      ],
      correct: 1,
      explanation: '`@testing-library/react-hooks` ប្រើសម្រាប់ Test Hooks និង Custom Hooks។'
    },
    {
      question: 'តើ `act` នៅក្នុង Hook Testing ធ្វើអ្វី?',
      options: [
        'Render Component',
        'Simulate State Updates',
        'Log Errors',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`act` Simulate State Updates ក្នុង Hook Testing។'
    },
    {
      question: 'តើ `expect(screen.getByText(\'ចុច\')).toBeInTheDocument()` ធ្វើអ្វី?',
      options: [
        'Update DOM',
        'Check ថា Text មាននៅក្នុង DOM',
        'Simulate Event',
        'Validate Props'
      ],
      correct: 1,
      explanation: 'Check ថា Text មាននៅក្នុង DOM។'
    },
    {
      question: 'តើ Testing React Components ជួយអ្វី?',
      options: [
        'កាត់បន្ថយ Bundle Size',
        'ធានាថា Components ដំណើរការត្រឹមត្រូវ',
        'Fetch Data',
        'Manage State'
      ],
      correct: 1,
      explanation: 'Testing ធានាថា Components ដំណើរការត្រឹមត្រូវ។'
    },
    {
      question: 'តើ `jest.fn()` ប្រើសម្រាប់អ្វី?',
      options: [
        'Create Mock Function',
        'Update State',
        'Render Component',
        'Fetch Data'
      ],
      correct: 0,
      explanation: '`jest.fn()` Create Mock Function សម្រាប់ Tracking Calls។'
    },
    {
      question: 'តើ Snapshot Testing សាកសមសម្រាប់ករណីណា?',
      options: [
        'Dynamic Data',
        'Stable Component Output',
        'API Testing',
        'State Management'
      ],
      correct: 1,
      explanation: 'Snapshot Testing សាកសមសម្រាប់ Stable Component Output។'
    },
    {
      question: 'តើ `renderHook` ពី `@testing-library/react-hooks` Return អ្វី?',
      options: [
        'Component Instance',
        'Hook Result',
        'DOM Reference',
        'State Object'
      ],
      correct: 1,
      explanation: '`renderHook` Return Hook Result សម្រាប់ Testing៕'
    },
    {
      question: 'តើ Testing Library ណាដែលប្រើសម្រាប់ Component Rendering?',
      options: [
        'Jest',
        'React Testing Library',
        'Mocha',
        'Chai'
      ],
      correct: 1,
      explanation: 'React Testing Library ប្រើសម្រាប់ Component Rendering៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្ហាញ Counter Component សម្រាប់ការ Test ៕

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title៖ "React Counter Component"៕
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`៕

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel៕
   - បង្កើត Functional Component \`Counter\` ដែល:
     - ប្រើ \`useState\` សម្រាប់ State \`count\` (Initial Value: 0)៕
     - Render \`<p>\` ដើម្បីបង្ហាញ \`count\`៕
     - Render \`<button>\` ដើម្បី Increment \`count\`៕
   - Render \`Counter\` Component ទៅក្នុង \`<div id="root">\`៕

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - កំណត់ \`font-size: 18px;\` សម្រាប់ \`p\`៕
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`៕

**ការណែនាំ:** test កូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស៕ Component នេះអាច test បានជាមួយ Jest និង React Testing Library នៅក្នុង Testing Environment៕
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Counter Component</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
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
    function Counter() {
      const [count, setCount] = React.useState(0);
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

export default ReactLesson5_6Content;