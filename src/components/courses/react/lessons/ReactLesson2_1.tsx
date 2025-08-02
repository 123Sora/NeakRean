import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson2_1Content: LessonContent = {
  title: 'JSX (JavaScript XML)',
  objectives: [
    'យល់ដឹងអំពី JSX និងអត្ថន័យរបស់វា',
    'ស្វែងយល់ពីមូលហេតុដែលត្រូវប្រើ JSX',
    'រៀនសរសេរ Expressions ក្នុង JSX',
    'រៀនកំណត់ Attributes ក្នុង JSX',
    'អនុវត្ត Conditional Rendering ក្នុង JSX',
    'អនុវត្ត List Rendering ក្នុង JSX'
  ],
  content: `
# JSX (JavaScript XML) 📜

---

**JSX** គឺជា Syntax Extension សម្រាប់ JavaScript ដែលអនុញ្ញាតឱ្យអ្នកសរសេរ HTML-Like Code នៅក្នុង JavaScript។

---

## 1. អ្វីទៅជា JSX?
JSX អនុញ្ញាតឱ្យអ្នកសរសេរ UI ដែលមើលទៅស្រដៀងនឹង HTML ប៉ុន្តែត្រូវបានបំលែងទៅជា JavaScript Objects ដោយ Babel។

\`\`\`jsx
const element = <h1>សួស្តី, React!</h1>;
\`\`\`

---

## 2. មូលហេតុដែលត្រូវប្រើ JSX
- **ភាពងាយស្រួល**: ធ្វើឱ្យកូដ UI ងាយសរសេរ និងអាន។
- **Integration**: អនុញ្ញាតឱ្យបញ្ចូល JavaScript និង HTML ក្នុងកន្លែងតែមួយ។
- **Component-Based**: ងាយស្រួលបង្កើត Components។

---

## 3. ការសរសេរ Expressions ក្នុង JSX
ប្រើ \`{}\` ដើម្បីបញ្ចូល JavaScript Expressions។

\`\`\`jsx
const name = "សុខា";
const element = <p>សួស្តី, {name}!</p>;
\`\`\`

---

## 4. ការកំណត់ Attributes
ប្រើ \`camelCase\` សម្រាប់ Attributes ដូចជា \`className\` ជំនួស \`class\`។

\`\`\`jsx
const element = <div className="container">សួស្តី!</div>;
\`\`\`

---

## 5. Conditional Rendering
ប្រើ JavaScript Logic (if, ternary, &&) ក្នុង JSX។

\`\`\`jsx
const isLoggedIn = true;
const element = isLoggedIn ? <p>សូមស្វាគមន៍!</p> : <p>សូម Login!</p>;
\`\`\`

---

## 6. List Rendering
ប្រើ \`map()\` ដើម្បី Render Lists និងបន្ថែម \`key\` Prop។

\`\`\`jsx
const items = ['Apple', 'Banana', 'Orange'];
const list = (
  <ul>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
);
\`\`\`

---

## 7. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const name = "សុខា";
  const isLoggedIn = true;
  const fruits = ['Apple', 'Banana', 'Orange'];
  
  return (
    <div className="container">
      <h1>សួស្តី, {name}!</h1>
      {isLoggedIn ? <p>សូមស្វាគមន៍!</p> : <p>សូម Login!</p>}
      <ul>
        {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ JSX Expressions</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  const name = "សុខា";
  const element = <p>សួស្តី, {name}!</p>;
  ReactDOM.render(element, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
const name = "សុខា";
const element = <p>សួស្តី, {name}!</p>;
ReactDOM.render(element, document.getElementById('root'));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Conditional Rendering</h3>
<div id="root2"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  const isLoggedIn = true;
  const element = isLoggedIn ? <p>សូមស្វាគមន៍!</p> : <p>សូម Login!</p>;
  ReactDOM.render(element, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
const isLoggedIn = true;
const element = isLoggedIn ? <p>សូមស្វាគមន៍!</p> : <p>សូម Login!</p>;
ReactDOM.render(element, document.getElementById('root2'));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ List Rendering</h3>
<div id="root3"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  const fruits = ['Apple', 'Banana', 'Orange'];
  const list = (
    <ul>
      {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
    </ul>
  );
  ReactDOM.render(list, document.getElementById('root3'));
</script>
<pre><code class="language-jsx">
const fruits = ['Apple', 'Banana', 'Orange'];
const list = (
  <ul>
    {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
  </ul>
);
ReactDOM.render(list, document.getElementById('root3'));
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ JSX គឺជាអ្វី?',
      options: [
        'CSS Framework',
        'JavaScript Library',
        'Syntax Extension សម្រាប់ JavaScript',
        'Database Tool'
      ],
      correct: 2,
      explanation: 'JSX គឺជា Syntax Extension សម្រាប់ JavaScript ដែលអនុញ្ញាតឱ្យសរសេរ HTML-Like Code។'
    },
    {
      question: 'តើអ្វីជាមូលហេតុចម្បងសម្រាប់ប្រើ JSX?',
      options: [
        'បង្កើន Database Performance',
        'ធ្វើឱ្យកូដ UI ងាយសរសេរ និងអាន',
        'គ្រប់គ្រង Server',
        'បង្កើត Animations'
      ],
      correct: 1,
      explanation: 'JSX ធ្វើឱ្យកូដ UI ងាយសរសេរ និងអាន។'
    },
    {
      question: 'តើ `{}` នៅក្នុង JSX ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ CSS Styles',
        'បញ្ចូល JavaScript Expressions',
        'បង្កើត Components',
        'គ្រប់គ្រង Events'
      ],
      correct: 1,
      explanation: '`{}` ប្រើសម្រាប់បញ្ចូល JavaScript Expressions ក្នុង JSX។'
    },
    {
      question: 'តើ Attribute `class` នៅក្នុង JSX ត្រូវបានជំនួសដោយអ្វី?',
      options: ['class', 'className', 'style', 'id'],
      correct: 1,
      explanation: 'នៅក្នុង JSX ប្រើ `className` ជំនួស `class`។'
    },
    {
      question: 'តើកូដ `<p>{2 + 3}</p>` នឹងបង្ហាញអ្វី?',
      options: ['2 + 3', '5', 'Error', 'undefined'],
      correct: 1,
      explanation: '`{2 + 3}` នឹងត្រូវបានបកស្រាយជា `5`។'
    },
    {
      question: 'តើ Conditional Rendering អាចធ្វើបានដោយវិធីណាខ្លះ?',
      options: [
        'if/else, Ternary, &&',
        'for Loops',
        'switch Statements',
        'try/catch'
      ],
      correct: 0,
      explanation: 'Conditional Rendering អាចប្រើ if/else, Ternary Operator, និង Logical &&។'
    },
    {
      question: 'តើ `key` Prop នៅក្នុង List Rendering ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Style',
        'ធ្វើឱ្យ Rendering លឿនជាង និងផ្តល់ Identity ដល់ Elements',
        'គ្រប់គ្រង Events',
        'បញ្ចូល Data'
      ],
      correct: 1,
      explanation: '`key` Prop ជួយ React កំណត់ Elements នៅក្នុង List ដើម្បីបង្កើន Performance។'
    },
    {
      question: 'តើកូដ `const list = items.map(item => <li>{item}</li>)` នឹងបង្កអ្វី?',
      options: [
        'Error ដោយសារខ្វះ `key`',
        'Render List ដោយគ្មានបញ្ហា',
        'Render Empty List',
        'Render Single Item'
      ],
      correct: 0,
      explanation: 'React នឹងបង្ហាញ Warning ប្រសិនបើ List Elements គ្មាន `key` Prop។'
    },
    {
      question: 'តើ Attribute `htmlFor` នៅក្នុង JSX ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ HTML Elements',
        'ភ្ជាប់ Label ទៅ Input',
        'បង្កើត CSS Classes',
        'គ្រប់គ្រង Events'
      ],
      correct: 1,
      explanation: '`htmlFor` ប្រើសម្រាប់ភ្ជាប់ Label ទៅ Input Element។'
    },
    {
      question: 'តើ JSX ត្រូវបានបំលែងទៅជាអ្វី?',
      options: [
        'HTML',
        'CSS',
        'JavaScript Objects',
        'JSON'
      ],
      correct: 2,
      explanation: 'JSX ត្រូវបានបំលែងទៅជា JavaScript Objects ដោយ Babel។'
    },
    {
      question: 'តើកូដ `<div>{false}</div>` នឹងបង្ហាញអ្វី?',
      options: ['false', 'true', 'Nothing', 'Error'],
      correct: 2,
      explanation: 'Boolean Values ដូចជា `false` មិនត្រូវបាន Render ក្នុង JSX។'
    },
    {
      question: 'តើ Logical && Operator នៅក្នុង JSX ប្រើសម្រាប់អ្វី?',
      options: [
        'Looping',
        'Conditional Rendering',
        'Event Handling',
        'Styling'
      ],
      correct: 1,
      explanation: 'Logical && Operator ប្រើសម្រាប់ Conditional Rendering ក្នុង JSX។'
    },
    {
      question: 'តើកូដ `<ul>{items.map(item => <li key={item}>{item}</li>)}</ul>` ត្រូវការ `key` ដើម្បីធ្វើអ្វី?',
      options: [
        'កំណត់ Style',
        'ជួយ React កំណត់ Elements នៅក្នុង List',
        'បញ្ចូល Data',
        'គ្រប់គ្រង Events'
      ],
      correct: 1,
      explanation: '`key` ជួយ React កំណត់ Elements នៅក្នុង List ដើម្បីបង្កើន Performance។'
    },
    {
      question: 'តើ JSX អនុញ្ញាតឱ្យបញ្ចូល JavaScript Expressions នៅទីតាំងណា?',
      options: [
        'ខាងក្នុង Attributes ប៉ុណ្ណោះ',
        'ខាងក្នុង `{}`',
        'ខាងក្នុង HTML Tags',
        'គ្រប់ទីកន្លែង'
      ],
      correct: 1,
      explanation: 'JavaScript Expressions ត្រូវបញ្ចូលក្នុង `{}` នៅក្នុង JSX។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ JSX ដើម្បីបង្ហាញ List នៃផ្លែឈើជាមួយ Conditional Rendering។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "JSX Fruit List"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`FruitList\` ដែល:
     - មាន Array \`fruits\` ដែលមានឈ្មោះផ្លែឈើ ៣ (ឧ. ["Apple", "Banana", "Orange"])។
     - ប្រើ Ternary Operator ដើម្បីបង្ហាញ \`<p>គ្មានផ្លែឈើ!</p>\` ប្រសិនបើ \`fruits\` ទទេ។
     - បើមានផ្លែឈើ បង្ហាញ \`<ul>\` ដែល Render List ដោយប្រើ \`map()\` និង \`key\` Prop។
   - Render Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`ul li\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JSX Fruit List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    ul li {
      font-size: 18px;
      color: #333;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/Babel.min.js"></script>
  <script type="text/babel">
    function FruitList() {
      const fruits = ["Apple", "Banana", "Orange"];
      return (
        <div>
          {fruits.length > 0 ? (
            <ul>
              {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
            </ul>
          ) : (
            <p>គ្មានផ្លែឈើ!</p>
          )}
        </div>
      );
    }
    ReactDOM.render(<FruitList />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson2_1Content;