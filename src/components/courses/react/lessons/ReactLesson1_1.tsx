import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី ReactJS',
  objectives: [
    'យល់ដឹងអំពី ReactJS និងអត្ថន័យរបស់វា',
    'ស្វែងយល់ពីប្រវត្តិសង្ខេបនៃ ReactJS',
    'ស្វែងយល់ពីមូលហេតុដែលត្រូវប្រើ ReactJS',
    'ប្រៀបធៀប ReactJS ជាមួយ Frameworks/Libraries ផ្សេង',
    'ស្វែងយល់ពីតម្រូវការជាមុនសម្រាប់រៀន ReactJS'
  ],
  content: `
# ណែនាំអំពី ReactJS 🚀

---

**ReactJS** គឺជា JavaScript Library ដែលបង្កើតឡើងដោយ Facebook សម្រាប់ការអភិវឌ្ឍន៍ User Interface (UI) ជាពិសេសសម្រាប់ Single-Page Applications (SPAs)។

---

## 1. អ្វីទៅជា ReactJS?
ReactJS គឺជា Library ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត UI Components ដែលអាចប្រើប្រាស់ឡើងវិញបាន (Reusable) និងមានប្រសិទ្ធភាពខ្ពស់។

- **Component-Based**: បែងចែក UI ជាផ្នែកតូចៗ (Components)។
- **Declarative**: អ្នកគ្រាន់តែប្រាប់ React ពីអ្វីដែលអ្នកចង់បង្ហាញ ហើយ React នឹងធ្វើការគ្រប់គ្រង DOM ដោយស្វ័យប្រវត្តិ។
- **Virtual DOM**: បង្កើនល្បឿនដំណើរការដោយកាត់បន្ថយការកែប្រែ DOM ផ្ទាល់។

---

## 2. ប្រវត្តិសង្ខេប
- បង្កើតឡើងដោយ **Jordan Walke** នៅ Facebook ក្នុងឆ្នាំ 2011។
- បានបើកជា Open-Source នៅឆ្នាំ 2013។
- បច្ចុប្បន្នត្រូវបានប្រើប្រាស់ដោយក្រុមហ៊ុនធំៗដូចជា Facebook, Instagram, Airbnb និង Netflix។

---

## 3. មូលហេតុដែលត្រូវប្រើ ReactJS
- **ភាពងាយស្រួល**: សរសេរកូដដែលងាយយល់ និងថែទាំ។
- **Performance**: Virtual DOM ធ្វើឱ្យការកែប្រែ UI លឿនជាង។
- **Reusable Components**: បង្កើត Components ដែលអាចប្រើឡើងវិញបាន។
- **Community និង Ecosystem**: មាន Libraries, Tools, និង Community ដ៏ធំ។

---

## 4. ការប្រៀបធៀបជាមួយ Frameworks/Libraries ផ្សេង
- **React vs Vue**: React មាន Flexibility ខ្ពស់ជាង ប៉ុន្តែ Vue មាន Learning Curve ងាយស្រួលជាង។
- **React vs Angular**: React គឺជា Library (ផ្តោតលើ UI) ខណៈ Angular គឺជា Framework ពេញលេញ។
- **React vs jQuery**: React ផ្តល់នូវការគ្រប់គ្រង State និង UI ប្រសើរជាង jQuery។

---

## 5. តម្រូវការជាមុន
ដើម្បីរៀន ReactJS អ្នកត្រូវមានចំណេះដឹងជាមុនអំពី:
- **HTML**: ការបង្កើត Structure នៃគេហទំព័រ។
- **CSS**: ការរចនា និង Styling។
- **JavaScript Fundamentals**: Variables, Functions, Arrays, Objects។
- **ES6+**: Arrow Functions, Destructuring, Modules, Promises, Async/Await។

---

## 6. ឧទាហរណ៍ជាមូលដ្ឋាន
ឧទាហរណ៍ Component ដំបូង៖

\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>សួស្តីពី ReactJS!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`

**លទ្ធផល:** បង្ហាញ "សួស្តីពី ReactJS!" នៅលើគេហទំព័រ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Component ដំបូង</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function App() {
    return <h1>សួស្តី, ReactJS!</h1>;
  }
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return <h1>សួស្តី, ReactJS!</h1>;
}
ReactDOM.render(<App />, document.getElementById('root'));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Component ជាមួយ Props</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<div id="root2"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Greeting(props) {
    return <p>សួស្តី, {props.name}!</p>;
  }
  ReactDOM.render(<Greeting name="សុខា" />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
import React from 'react';
import ReactDOM from 'react-dom';
function Greeting(props) {
  return <p>សួស្តី, {props.name}!</p>;
}
ReactDOM.render(<Greeting name="សុខា" />, document.getElementById('root2'));
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ ReactJS គឺជាអ្វី?',
      options: [
        'Framework ពេញលេញ',
        'JavaScript Library សម្រាប់ UI',
        'Backend Framework',
        'Database Management Tool'
      ],
      correct: 1,
      explanation: 'ReactJS គឺជា JavaScript Library សម្រាប់បង្កើត User Interface។'
    },
    {
      question: 'តើអ្នកណាបង្កើត ReactJS?',
      options: ['Google', 'Facebook', 'Microsoft', 'Amazon'],
      correct: 1,
      explanation: 'ReactJS ត្រូវបានបង្កើតឡើងដោយ Facebook។'
    },
    {
      question: 'តើ Virtual DOM ធ្វើអ្វី?',
      options: [
        'បង្កើនល្បឿនដំណើរការដោយកាត់បន្ថយការកែប្រែ DOM',
        'បង្កើត Database',
        'គ្រប់គ្រង Server',
        'បង្កើត CSS'
      ],
      correct: 0,
      explanation: 'Virtual DOM បង្កើនល្បឿនដំណើរការដោយកាត់បន្ថយការកែប្រែ DOM ផ្ទាល់។'
    },
    {
      question: 'តើ ReactJS មានលក្ខណៈពិសេសអ្វីខ្លះ?',
      options: [
        'Component-Based',
        'Object-Oriented',
        'Database-Driven',
        'Static Rendering'
      ],
      correct: 0,
      explanation: 'ReactJS មានលក្ខណៈ Component-Based ដែលអនុញ្ញាតឱ្យបែងចែក UI ជាផ្នែកតូចៗ។'
    },
    {
      question: 'តើតម្រូវការជាមុនសម្រាប់រៀន ReactJS មានអ្វីខ្លះ?',
      options: [
        'HTML, CSS, JavaScript',
        'Python, SQL',
        'C++, Java',
        'Ruby, PHP'
      ],
      correct: 0,
      explanation: 'HTML, CSS, និង JavaScript (ជាពិសេស ES6+) គឺជាតម្រូវការជាមុន។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្ហាញ Component React ដំបូង។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "First React App"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React និង ReactDOM។
   - បង្កើត Functional Component ឈ្មោះ \`App\` ដែល Return \`<h1>សួស្តីពី ReactJS!</h1>\`។
   - ប្រើ \`ReactDOM.render\` ដើម្បី Render Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 24px;\` និង \`color: #333;\` សម្រាប់ \`<h1>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First React App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    h1 {
      font-size: 24px;
      color: #333;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script type="text/babel">
    function App() {
      return <h1>សួស្តីពី ReactJS!</h1>;
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson1_1Content;