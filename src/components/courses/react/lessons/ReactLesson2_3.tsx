import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson2_3Content: LessonContent = {
  title: 'Props (Properties)',
  objectives: [
    'យល់ដឹងអំពី Props និងអត្ថន័យរបស់វា',
    'រៀនកំណត់ និងចូលប្រើ Props',
    'រៀនប្រើ Prop Types សម្រាប់ Validation',
    'រៀនកំណត់ Default Props',
    'អនុវត្តការបញ្ជូន Props ពី Parent ទៅ Child Component'
  ],
  content: `
# Props (Properties) 📦

---

**Props** (Properties) គឺជាវិធីសម្រាប់បញ្ជូន Data ពី Parent Component ទៅ Child Component។

---

## 1. អ្វីទៅជា Props?
Props គឺជា Object ដែលផ្ទុក Data ដែល Component ទទួលពី Parent។ Props គឺ Read-Only។

\`\`\`jsx
function Welcome(props) {
  return <h1>សួស្តី, {props.name}!</h1>;
}
\`\`\`

---

## 2. ការកំណត់ និងចូលប្រើ Props
Props ត្រូវបានបញ្ជូនជា Attributes នៅក្នុង JSX។

\`\`\`jsx
function App() {
  return <Welcome name="សុខា" />;
}
\`\`\`

---

## 3. Prop Types
ប្រើ \`prop-types\` Library ដើម្បី Validate Props។

\`\`\`jsx
import PropTypes from 'prop-types';

function Welcome(props) {
  return <h1>សួស្តី, {props.name}!</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};
\`\`\`

---

## 4. Default Props
កំណត់ Default Values សម្រាប់ Props។

\`\`\`jsx
function Welcome(props) {
  return <h1>សួស្តី, {props.name}!</h1>;
}

Welcome.defaultProps = {
  name: 'ភ្ញៀវ'
};
\`\`\`

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function UserCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>អាយុ: {props.age}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

UserCard.defaultProps = {
  name: 'ភ្ញៀវ',
  age: 18
};

function App() {
  return (
    <div>
      <UserCard name="សុខា" age={25} />
      <UserCard />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បញ្ជូន Props</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Welcome(props) {
    return <h1>សួស្តី, {props.name}!</h1>;
  }
  ReactDOM.render(<Welcome name="សុខា" />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function Welcome(props) {
  return <h1>សួស្តី, {props.name}!</h1>;
}
ReactDOM.render(<Welcome name="សុខា" />, document.getElementById('root'));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Default Props</h3>
<div id="root2"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Welcome(props) {
    return <h1>សួស្តី, {props.name}!</h1>;
  }
  Welcome.defaultProps = {
    name: 'ភ្ញៀវ'
  };
  ReactDOM.render(<Welcome />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function Welcome(props) {
  return <h1>សួស្តី, {props.name}!</h1>;
}
Welcome.defaultProps = {
  name: 'ភ្ញៀវ'
};
ReactDOM.render(<Welcome />, document.getElementById('root2'));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Prop Types</h3>
<div id="root3"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  import PropTypes from 'https://cdn.jsdelivr.net/npm/prop-types@15.8.1/prop-types.min.js';
  function UserCard(props) {
    return <div><h1>{props.name}</h1><p>អាយុ: {props.age}</p></div>;
  }
  UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  };
  ReactDOM.render(<UserCard name="សុខា" age={25} />, document.getElementById('root3'));
</script>
<pre><code class="language-jsx">
import PropTypes from 'prop-types';
function UserCard(props) {
  return <div><h1>{props.name}</h1><p>អាយុ: {props.age}</p></div>;
}
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
ReactDOM.render(<UserCard name="សុខា" age={25} />, document.getElementById('root3'));
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Props នៅក្នុង React គឺជាអ្វី?',
      options: [
        'State Management Tool',
        'Data ដែលបញ្ជូនពី Parent ទៅ Child Component',
        'CSS Properties',
        'Event Handlers'
      ],
      correct: 1,
      explanation: 'Props គឺជា Data ដែលបញ្ជូនពី Parent ទៅ Child Component។'
    },
    {
      question: 'តើ Props អាចកែប្រែបានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែនៅក្នុង Class Components', 'បានតែនៅក្នុង Functional Components'],
      correct: 1,
      explanation: 'Props គឺ Read-Only និងមិនអាចកែប្រែបាន។'
    },
    {
      question: 'តើកូដ `<Welcome name="សុខា" />` ធ្វើអ្វី?',
      options: [
        'បង្កើត CSS Class',
        'បញ្ជូន Prop `name` ទៅ Component `Welcome`',
        'Render Empty Component',
        'បង្កើត Event'
      ],
      correct: 1,
      explanation: '`<Welcome name="សុខា" />` បញ្ជូន Prop `name` ទៅ Component `Welcome`។'
    },
    {
      question: 'តើ Library ណាមួយប្រើសម្រាប់ Validate Props?',
      options: ['react-dom', 'prop-types', 'axios', 'react-router'],
      correct: 1,
      explanation: '`prop-types` Library ប្រើសម្រាប់ Validate Props។'
    },
    {
      question: 'តើ Default Props ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Default Values សម្រាប់ Props',
        'គ្រប់គ្រង State',
        'បង្កើត Components',
        'គ្រប់គ្រង Events'
      ],
      correct: 0,
      explanation: 'Default Props កំណត់ Default Values សម្រាប់ Props។'
    },
    {
      question: 'តើកូដ `Welcome.defaultProps = { name: "ភ្ញៀវ" };` ធ្វើអ្វី?',
      options: [
        'កំណត់ Default Value សម្រាប់ Prop `name`',
        'បង្កើត Prop ថ្មី',
        'Validate Prop `name`',
        'លុប Prop `name`'
      ],
      correct: 0,
      explanation: 'កំណត់ Default Value សម្រាប់ Prop `name`។'
    },
    {
      question: 'តើ Prop Types ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើន Performance',
        'Validate Types នៃ Props',
        'បង្កើត CSS',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'Prop Types Validate Types នៃ Props ដើម្បីធានាថា Data ត្រឹមត្រូវ។'
    },
    {
      question: 'តើកូដ `<UserCard name="សុខា" age={25} />` បញ្ជូន Props ប៉ុន្មាន?',
      options: ['1', '2', '3', '4'],
      correct: 1,
      explanation: 'បញ្ជូន Props ពីរ៖ `name` និង `age`។'
    },
    {
      question: 'តើ Props អាចជា Data Type អ្វីបានខ្លះ?',
      options: [
        'String ប៉ុណ្ណោះ',
        'Number ប៉ុណ្ណោះ',
        'String, Number, Object, Array, Function',
        'HTML Elements ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Props អាចជា String, Number, Object, Array, Function, ជាដើម។'
    },
    {
      question: 'តើកូដ `UserCard.propTypes = { age: PropTypes.number.isRequired };` ធ្វើអ្វី?',
      options: [
        'កំណត់ Default Value',
        'Validate ថា `age` ជា Number និង Required',
        'បង្កើត Component',
        'លុប Prop `age`'
      ],
      correct: 1,
      explanation: 'Validate ថា `age` ជា Number និង Required។'
    },
    {
      question: 'តើ Props ត្រូវបានបញ្ជូនពីណាទៅណា?',
      options: [
        'Child ទៅ Parent',
        'Parent ទៅ Child',
        'Component ទៅ DOM',
        'DOM ទៅ Component'
      ],
      correct: 1,
      explanation: 'Props ត្រូវបានបញ្ជូនពី Parent Component ទៅ Child Component។'
    },
    {
      question: 'តើកូដ `<Welcome />` នឹងបង្ហាញអ្វីប្រសិនបើមាន `defaultProps = { name: "ភ្ញៀវ" }`?',
      options: ['Error', 'ភ្ញៀវ', 'undefined', 'null'],
      correct: 1,
      explanation: '`defaultProps` កំណត់ `name` ជា "ភ្ញៀវ"។'
    },
    {
      question: 'តើ Props អាចជា Function បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែនៅក្នុង Class Components', 'បានតែនៅក្នុង Functional Components'],
      correct: 0,
      explanation: 'Props អាចជា Function ដើម្បីបញ្ជូន Callback Functions។'
    },
    {
      question: 'តើកូដ `<UserCard name={true} />` នឹងបង្កអ្វីប្រសិនបើ `name: PropTypes.string.isRequired`?',
      options: [
        'Render ដោយគ្មានបញ្ហា',
        'Warning នៅក្នុង Console',
        'Error នៅក្នុង Browser',
        'Render Empty Component'
      ],
      correct: 1,
      explanation: 'Prop Types នឹងបង្ហាញ Warning ប្រសិនបើ `name` មិនមែនជា String។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Props ដើម្បីបង្ហាញ User Profile។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "User Profile with Props"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, Babel, និង PropTypes។
   - បង្កើត Functional Component \`UserProfile\` ដែលទទួល Props \`name\` និង \`age\` និង Return:
     \`\`\`jsx
     <div>
       <h1>{props.name}</h1>
       <p>អាយុ: {props.age}</p>
     </div>
     \`\`\`
   - កំណត់ \`propTypes\` ដើម្បី Validate \`name\` (String, Required) និង \`age\` (Number, Required)។
   - កំណត់ \`defaultProps\` សម្រាប់ \`name: "ភ្ញៀវ"\` និង \`age: 18\`។
   - បង្កើត \`App\` Component ដែល Render \`<UserProfile name="សុខា" age={25} />\` និង \`<UserProfile />\`។
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
  <title>User Profile with Props</title>
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
  <script src="https://cdn.jsdelivr.net/npm/prop-types@15.8.1/prop-types.min.js"></script>
  <script type="text/babel">
    function UserProfile(props) {
      return (
        <div>
          <h1>{props.name}</h1>
          <p>អាយុ: {props.age}</p>
        </div>
      );
    }
    UserProfile.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    };
    UserProfile.defaultProps = {
      name: 'ភ្ញៀវ',
      age: 18
    };
    function App() {
      return (
        <div>
          <UserProfile name="សុខា" age={25} />
          <UserProfile />
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

export default ReactLesson2_3Content;