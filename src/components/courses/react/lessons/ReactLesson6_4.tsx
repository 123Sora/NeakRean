import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson6_4Content: LessonContent = {
  title: 'គម្រោង Full-stack MERN',
  objectives: [
    'យល់ដឹងអំពីការបង្កើត Full-stack MERN Application',
    'រៀនប្រើ React សម្រាប់ Frontend Development',
    'ស្វែងយល់ពី Express.js និង Node.js សម្រាប់ Backend',
    'អនុវត្ត MongoDB សម្រាប់ Data Storage',
    'រៀនប្រើ API Calls ជាមួយ `fetch` នៅក្នុង React',
    'អនុវត្ត CRUD Operations នៅក្នុង MERN App',
    'ស្វែងយល់ពី Component Structure និង Styling'
  ],
  content: `
# គម្រោង Full-stack MERN 🌐

---

**MERN Stack** រួមបញ្ចូល MongoDB, Express.js, React, និង Node.js សម្រាប់បង្កើត Full-stack Applications៕

---

## 1. ការបង្កើត Frontend ជាមួយ React
ប្រើ React ដើម្បីបង្កើត UI និង Fetch Data ពី Backend API៕

\`\`\`jsx
import { useState, useEffect } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate API call
    const mockItems = [
      { id: 1, name: 'ធាតុទី១' },
      { id: 2, name: 'ធាតុទី២' }
    ];
    setItems(mockItems);
  }, []);

  return (
    <div>
      <h2>បញ្ជីធាតុ</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

---

## 2. Backend ជាមួយ Express.js និង Node.js
បង្កើត API Endpoints ដើម្បីគ្រប់គ្រង Data៕

\`\`\`javascript
// server.js
const express = require('express');
const app = express();

app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'ធាតុទី១' },
    { id: 2, name: 'ធាតុទី២' }
  ];
  res.json(items);
});

app.listen(3000, () => console.log('Server running on port 3000'));
\`\`\`

---

## 3. MongoDB សម្រាប់ Data Storage
ប្រើ MongoDB ដើម្បីរក្សាទុក Data៕

\`\`\`javascript
// server.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mern-app');

const itemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model('Item', itemSchema);
\`\`\`

---

## 4. CRUD Operations
អនុវត្ត Create, Read, Update, Delete Operations៕

\`\`\`jsx
function ItemManager() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { id: items.length + 1, name: input }]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="បញ្ចូលធាតុ"
      />
      <button onClick={addItem}>បន្ថែម</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function ItemManager() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Simulate API call
    const mockItems = [
      { id: 1, name: 'ធាតុទី១' },
      { id: 2, name: 'ធាតុទី២' }
    ];
    setItems(mockItems);
  }, []);

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { id: items.length + 1, name: input }]);
      setInput('');
    }
  };

  return (
    <div>
      <h2>គ្រប់គ្រងធាតុ</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="បញ្ចូលធាតុ"
      />
      <button onClick={addItem}>បន្ថែម</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<ItemManager />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ MERN Frontend Simulation</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useState, useEffect } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function ItemManager() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
      const mockItems = [
        { id: 1, name: 'ធាតុទី១' },
        { id: 2, name: 'ធាតុទី២' }
      ];
      setItems(mockItems);
    }, []);
    const addItem = () => {
      if (input.trim()) {
        setItems([...items, { id: items.length + 1, name: input }]);
        setInput('');
      }
    };
    return (
      <div>
        <h2>គ្រប់គ្រងធាតុ</h2>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="បញ្ចូលធាតុ"
        />
        <button onClick={addItem}>បន្ថែម</button>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  ReactDOM.render(<ItemManager />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function ItemManager() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    const mockItems = [
      { id: 1, name: 'ធាតុទី១' },
      { id: 2, name: 'ធាតុទី២' }
    ];
    setItems(mockItems);
  }, []);
  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { id: items.length + 1, name: input }]);
      setInput('');
    }
  };
  return (
    <div>
      <h2>គ្រប់គ្រងធាតុ</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="បញ្ចូលធាតុ"
      />
      <button onClick={addItem}>បន្ថែម</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ MERN Stack រួមបញ្ចូល Technologies អ្វីខ្លះ?',
      options: [
        'MongoDB, Express.js, React, Node.js',
        'MySQL, Express.js, React, Node.js',
        'MongoDB, Angular, React, Node.js',
        'MongoDB, Express.js, Vue.js, Node.js'
      ],
      correct: 0,
      explanation: 'MERN Stack រួមបញ្ចូល MongoDB, Express.js, React, និង Node.js៕'
    },
    {
      question: 'តើ `useEffect` នៅក្នុង MERN Frontend ប្រើសម្រាប់អ្វី?',
      options: [
        'Update State',
        'Fetch Data នៅពេល Component Mount',
        'Handle Events',
        'Style Components'
      ],
      correct: 1,
      explanation: '`useEffect` Fetch Data នៅពេល Component Mount៕'
    },
    {
      question: 'តើ Express.js នៅក្នុង MERN Stack ធ្វើអ្វី?',
      options: [
        'Manage Database',
        'Create API Endpoints',
        'Render UI',
        'Handle State'
      ],
      correct: 1,
      explanation: 'Express.js បង្កើត API Endpoints សម្រាប់ Backend៕'
    },
    {
      question: 'តើ MongoDB ប្រើសម្រាប់អ្វី?',
      options: [
        'Render UI',
        'Store Data',
        'Handle Routing',
        'Optimize Performance'
      ],
      correct: 1,
      explanation: 'MongoDB ប្រើសម្រាប់ Store Data ក្នុង Database៕'
    },
    {
      question: 'តើ CRUD សំដៅលើអ្វី?',
      options: [
        'Create, Read, Update, Delete',
        'Create, Render, Update, Deploy',
        'Connect, Read, Update, Delete',
        'Create, Read, Upload, Delete'
      ],
      correct: 0,
      explanation: 'CRUD សំដៅលើ Create, Read, Update, Delete Operations៕'
    },
    {
      question: 'តើ `fetch` នៅក្នុង React ប្រើសម្រាប់អ្វី?',
      options: [
        'Update State',
        'Make API Calls',
        'Style Components',
        'Handle Events'
      ],
      correct: 1,
      explanation: '`fetch` ប្រើសម្រាប់ Make API Calls ទៅ Backend៕'
    },
    {
      question: 'តើ Key Prop នៅក្នុង List Rendering ជួយអ្វី?',
      options: [
        'Update State',
        'Identify Unique Items',
        'Handle Events',
        'Style Elements'
      ],
      correct: 1,
      explanation: 'Key Prop Identify Unique Items ក្នុង List Rendering៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែល Simulate Frontend នៃ MERN App ដោយបង្ហាញ និងបន្ថែម Items៕

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title៖ "React MERN Frontend"៕
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`៕

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel៕
   - បង្កើត Functional Component \`ItemManager\` ដែល:
     - ប្រើ \`useState\` សម្រាប់ \`items\` (Array, Initial: []) និង \`input\` (String, Initial: '')៕
     - ប្រើ \`useEffect\` ដើម្បី Simulate API Call ដោយ Set Initial Items (ឧ. 2 Items)៕
     - Render \`<input>\` ជា Controlled Component ជាមួយ Placeholder "បញ្ចូលធាតុ"៕
     - Render \`<button>\` ដើម្បីបន្ថែម Item (Check Empty Input ដោយ \`trim()\`)៕
     - Render \`<ul>\` ដើម្បីបង្ហាញ Items៕
   - Render \`ItemManager\` Component ទៅក្នុង \`<div id="root">\`៕

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - កំណត់ \`font-size: 18px; margin: 10px; padding: 5px;\` សម្រាប់ \`input\`៕
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`៕
     - កំណត់ \`font-size: 16px;\` សម្រាប់ \`li\`៕

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស៕ អ្នកគួរអាចបន្ថែម Items និងឃើញ Initial Items បង្ហាញ៕
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React MERN Frontend</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    input {
      font-size: 18px;
      margin: 10px;
      padding: 5px;
    }
    button {
      padding: 10px;
      margin: 5px;
      background-color: #2c3e50;
      color: white;
    }
    li {
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/Babel.min.js"></script>
  <script type="text/babel">
    function ItemManager() {
      const [items, setItems] = React.useState([]);
      const [input, setInput] = React.useState('');
      React.useEffect(() => {
        const mockItems = [
          { id: 1, name: 'ធាតុទី១' },
          { id: 2, name: 'ធាតុទី២' }
        ];
        setItems(mockItems);
      }, []);
      const addItem = () => {
        if (input.trim()) {
          setItems([...items, { id: items.length + 1, name: input }]);
          setInput('');
        }
      };
      return (
        <div>
          <h2>គ្រប់គ្រងធាតុ</h2>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="បញ្ចូលធាតុ"
          />
          <button onClick={addItem}>បន្ថែម</button>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    }
    ReactDOM.render(<ItemManager />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson6_4Content;