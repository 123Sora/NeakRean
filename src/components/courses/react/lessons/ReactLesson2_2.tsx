import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson2_2Content: LessonContent = {
  title: 'Components (សមាសធាតុ)',
  objectives: [
    'យល់ដឹងអំពី Components និងអត្ថន័យរបស់វា',
    'រៀនបង្កើត Functional Components',
    'រៀនបង្កើត Class Components',
    'អនុវត្តការបង្ហាញ (Render) Components',
    'ស្វែងយល់ពី Folder Structure សម្រាប់ Components'
  ],
  content: `
# Components (សមាសធាតុ) 🧩

---

**Components** គឺជា Reusable, Independent UI Blocks ដែលជួយបែងចែក UI ជាផ្នែកតូចៗ។

---

## 1. អ្វីទៅជា Component?
Component គឺជាផ្នែកនៃ UI ដែលអាចប្រើឡើងវិញបាន។ វាដូចជា Function ដែល Return JSX។

---

## 2. Functional Components
Functional Components គឺជា Components ដែលបង្កើតដោយ Function (ណែនាំសម្រាប់ Modern React)។

\`\`\`jsx
function Welcome() {
  return <h1>សួស្តី!</h1>;
}
\`\`\`

---

## 3. Class Components
Class Components ប្រើ ES6 Classes (ប្រើក្នុង Legacy Code)។

\`\`\`jsx
import React from 'react';
class Welcome extends React.Component {
  render() {
    return <h1>សួស្តី!</h1>;
  }
}
\`\`\`

---

## 4. ការបង្ហាញ (Render) Components
Components ត្រូវបាន Render ទៅក្នុង DOM ដោយប្រើ \`ReactDOM.render\` ឬនៅក្នុង Component ផ្សេង។

\`\`\`jsx
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}
\`\`\`

---

## 5. Folder Structure
- ដាក់ Components នៅក្នុង Folder \`src/components/\`។
- ឧទាហរណ៍:
  \`\`\`
  src/
  ├── components/
  │   ├── Welcome.jsx
  │   ├── Header.jsx
  │   └── Footer.jsx
  ├── App.jsx
  └── index.jsx
  \`\`\`

---

## 6. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
  return <h1>បឋមកថា</h1>;
}

function Content() {
  return <p>នេះជា Content របស់ខ្ញុំ</p>;
}

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Functional Component</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Welcome() {
    return <h1>សួស្តី!</h1>;
  }
  ReactDOM.render(<Welcome />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function Welcome() {
  return <h1>សួស្តី!</h1>;
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Class Component</h3>
<div id="root2"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  class Welcome extends React.Component {
    render() {
      return <h1>សួស្តីពី Class Component!</h1>;
    }
  }
  ReactDOM.render(<Welcome />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
class Welcome extends React.Component {
  render() {
    return <h1>សួស្តីពី Class Component!</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById('root2'));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Nested Components</h3>
<div id="root3"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Header() {
    return <h1>បឋមកថា</h1>;
  }
  function App() {
    return <div><Header /></div>;
  }
  ReactDOM.render(<App />, document.getElementById('root3'));
</script>
<pre><code class="language-jsx">
function Header() {
  return <h1>បឋមកថា</h1>;
}
function App() {
  return <div><Header /></div>;
}
ReactDOM.render(<App />, document.getElementById('root3'));
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Component នៅក្នុង React គឺជាអ្វី?',
      options: [
        'Function សម្រាប់ Database',
        'Reusable UI Blocks',
        'CSS Framework',
        'Server-Side Logic'
      ],
      correct: 1,
      explanation: 'Components គឺជា Reusable UI Blocks ដែលបែងចែក UI ជាផ្នែកតូចៗ។'
    },
    {
      question: 'តើ Functional Component បង្កើតដោយអ្វី?',
      options: ['Class', 'Function', 'Object', 'Array'],
      correct: 1,
      explanation: 'Functional Components បង្កើតដោយ Functions ដែល Return JSX។'
    },
    {
      question: 'តើ Class Component ត្រូវការអ្វីដើម្បីបង្កើត?',
      options: ['extends React.Component', 'extends React.Function', 'extends React.Object', 'extends React.Array'],
      correct: 0,
      explanation: 'Class Components ត្រូវការ `extends React.Component`។'
    },
    {
      question: 'តើ Functional Components ត្រូវបានណែនាំសម្រាប់អ្វី?',
      options: ['Legacy Code', 'Modern React', 'Backend Development', 'Database Management'],
      correct: 1,
      explanation: 'Functional Components ត្រូវបានណែនាំសម្រាប់ Modern React។'
    },
    {
      question: 'តើកូដ `<Welcome />` ធ្វើអ្វី?',
      options: [
        'បង្កើត HTML Tag',
        'Render Component',
        'បង្កើត CSS Class',
        'គ្រប់គ្រង Events'
      ],
      correct: 1,
      explanation: '`<Welcome />` Render Component ទៅក្នុង DOM។'
    },
    {
      question: 'តើ Folder ណាមួយគួរដាក់ Components?',
      options: ['public', 'node_modules', 'src/components', 'package.json'],
      correct: 2,
      explanation: 'Components គួរដាក់នៅក្នុង `src/components`។'
    },
    {
      question: 'តើ Functional Component អាច Return អ្វីបាន?',
      options: ['HTML', 'JSX', 'CSS', 'JSON'],
      correct: 1,
      explanation: 'Functional Components Return JSX។'
    },
    {
      question: 'តើ Class Component ប្រើ Method អ្វីដើម្បី Render?',
      options: ['render()', 'display()', 'show()', 'return()'],
      correct: 0,
      explanation: 'Class Components ប្រើ `render()` Method ដើម្បី Return JSX។'
    },
    {
      question: 'តើ Component អាចប្រើ Components ផ្សេងទៀតបានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Class Components', 'បានតែក្នុង Functional Components'],
      correct: 0,
      explanation: 'Components អាចប្រើ Components ផ្សេងទៀតបាន។'
    },
    {
      question: 'តើកូដ `function App() { return <h1>Hello</h1>; }` ជា Component ប្រភេទណា?',
      options: ['Class Component', 'Functional Component', 'Static Component', 'Dynamic Component'],
      correct: 1,
      explanation: 'នេះជា Functional Component។'
    },
    {
      question: 'តើ Component អាចមាន State បានទេ?',
      options: [
        'បាន នៅក្នុង Functional និង Class Components',
        'បានតែនៅក្នុង Class Components',
        'បានតែនៅក្នុង Functional Components',
        'មិនបាន'
      ],
      correct: 0,
      explanation: 'Functional Components (ជាមួយ Hooks) និង Class Components អាចមាន State។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Components?',
      options: [
        'បង្កើន Database Performance',
        'Reusable និង Independent UI Blocks',
        'គ្រប់គ្រង Server',
        'បង្កើត CSS'
      ],
      correct: 1,
      explanation: 'Components ផ្តល់នូវ Reusable និង Independent UI Blocks។'
    },
    {
      question: 'តើកូដ `<App><Header /></App>` បង្ហាញអ្វី?',
      options: [
        'Error',
        'Render Header នៅក្នុង App',
        'Render App ដោយគ្មាន Header',
        'Render Empty Page'
      ],
      correct: 1,
      explanation: '`<Header />` នឹងត្រូវ Render នៅក្នុង `App` Component។'
    },
    {
      question: 'តើ Functional Components មាន `render()` Method ទេ?',
      options: ['មាន', 'មិនមាន', 'មានតែនៅក្នុង ES6', 'មានតែនៅក្នុង Legacy Code'],
      correct: 1,
      explanation: 'Functional Components មិនមាន `render()` Method។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Functional Components ដើម្បីបង្ហាញ Header និង Content។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Components"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`Header\` ដែល Return \`<h1>បឋមកថា</h1>\`។
   - បង្កើត Functional Component \`Content\` ដែល Return \`<p>នេះជា Content របស់ខ្ញុំ</p>\`។
   - បង្កើត Functional Component \`App\` ដែล Render \`<Header />\` និង \`<Content />\` នៅក្នុង \`<div>\`។
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 24px;\` និង \`color: #2c3e50;\` សម្រាប់ \`h1\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #34495e;\` សម្រាប់ \`p\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Components</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    h1 {
      font-size: 24px;
      color: #2c3e50;
    }
    p {
      font-size: 18px;
      color: #34495e;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/Babel.min.js"></script>
  <script type="text/babel">
    function Header() {
      return <h1>បឋមកថា</h1>;
    }
    function Content() {
      return <p>នេះជា Content របស់ខ្ញុំ</p>;
    }
    function App() {
      return (
        <div>
          <Header />
          <Content />
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

export default ReactLesson2_2Content;