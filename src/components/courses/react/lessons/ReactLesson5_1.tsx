import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson5_1Content: LessonContent = {
  title: 'ការគ្រប់គ្រង Form នៅក្នុង React',
  objectives: [
    'យល់ដឹងអំពីការគ្រប់គ្រង Form នៅក្នុង React',
    'ស្វែងយល់ពី Controlled Components',
    'រៀនប្រើ `useState` សម្រាប់ Form Inputs',
    'អនុវត្ត Form Validation',
    'រៀនគ្រប់គ្រង Multiple Inputs',
    'ស្វែងយល់ពី Uncontrolled Components ជាមួយ `useRef`',
    'រៀនប្រើ Form Handling Libraries ដូចជា `react-hook-form`'
  ],
  content: `
# ការគ្រប់គ្រង Form នៅក្នុង React 📝

---

ការគ្រប់គ្រង Form នៅក្នុង React អនុញ្ញាតឱ្យអ្នកប្រមូលទិន្នន័យពីអ្នកប្រើប្រាស់។ React ប្រើ **Controlled Components** និង **Uncontrolled Components** សម្រាប់គ្រប់គ្រង Form Inputs។

---

## 1. Controlled Components
Controlled Components ប្រើ State ដើម្បីគ្រប់គ្រង Input Values។

\`\`\`jsx
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  
  const handleSubmit = () => {
    alert('ឈ្មោះ: ' + name);
  };
  
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      <button onClick={handleSubmit}>បញ្ជូន</button>
    </div>
  );
}
\`\`\`

- **value**: ភ្ជាប់ជាមួយ State។
- **onChange**: Update State នៅពេល Input ផ្លាស់ប្តូរ។

---

## 2. Form Validation
អនុវត្ត Validation ដើម្បីធានាថាទិន្នន័យត្រឹមត្រូវ។

\`\`\`jsx
function Form() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = () => {
    if (name.trim() === '') {
      setError('ឈ្មោះមិនអាចទទេបាន');
    } else {
      setError('');
      alert('ឈ្មោះ: ' + name);
    }
  };
  
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmit}>បញ្ជូន</button>
    </div>
  );
}
\`\`\`

---

## 3. គ្រប់គ្រង Multiple Inputs
ប្រើ Object State ដើម្បីគ្រប់គ្រង Multiple Inputs។

\`\`\`jsx
function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    alert(\`ឈ្មោះ: \${formData.name}, អ៊ីម៉ែល: \${formData.email}\`);
  };
  
  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="បញ្ចូលអ៊ីម៉ែល"
      />
      <button onClick={handleSubmit}>បញ្ជូន</button>
    </div>
  );
}
\`\`\`

---

## 4. Uncontrolled Components
Uncontrolled Components ប្រើ \`useRef\` ដើម្បីចូលប្រើ Input Values។

\`\`\`jsx
import { useRef } from 'react';

function Form() {
  const nameRef = useRef();
  
  const handleSubmit = () => {
    alert('ឈ្មោះ: ' + nameRef.current.value);
  };
  
  return (
    <div>
      <input type="text" ref={nameRef} placeholder="បញ្ចូលឈ្មោះ" />
      <button onClick={handleSubmit}>បញ្ជូន</button>
    </div>
  );
}
\`\`\`

---

## 5. ប្រើ \`react-hook-form\`
\`react-hook-form\` Simplify Form Handling និង Validation។

\`\`\`jsx
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    alert(\`ឈ្មោះ: \${data.name}, អ៊ីម៉ែល: \${data.email}\`);
  };
  
  return (
    <div>
      <input {...register('name', { required: 'ឈ្មោះត្រូវបំពេញ' })} placeholder="បញ្ចូលឈ្មោះ" />
      {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      <input {...register('email', { required: 'អ៊ីម៉ែលត្រូវបំពេញ' })} placeholder="បញ្ចូលអ៊ីម៉ែល" />
      {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      <button onClick={handleSubmit(onSubmit)}>បញ្ជូន</button>
    </div>
  );
}
\`\`\`

---

## 6. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    if (formData.name.trim() === '' || formData.email.trim() === '') {
      setError('សូមបំពេញគ្រប់វាល');
    } else {
      setError('');
      alert(\`ឈ្មោះ: \${formData.name}, អ៊ីម៉ែល: \${formData.email}\`);
    }
  };
  
  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="បញ្ចូលអ៊ីម៉ែល"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmit}>បញ្ជូន</button>
    </div>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Controlled Component Form</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Form() {
    const [name, setName] = useState('');
    const handleSubmit = () => {
      alert('ឈ្មោះ: ' + name);
    };
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="បញ្ចូលឈ្មោះ"
        />
        <button onClick={handleSubmit}>បញ្ជូន</button>
      </div>
    );
  }
  ReactDOM.render(<Form />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function Form() {
  const [name, setName] = useState('');
  const handleSubmit = () => {
    alert('ឈ្មោះ: ' + name);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      <button onClick={handleSubmit}>បញ្ជូន</button>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Form Validation</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function Form() {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = () => {
      if (name.trim() === '') {
        setError('ឈ្មោះមិនអាចទទេបាន');
      } else {
        setError('');
        alert('ឈ្មោះ: ' + name);
      }
    };
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="បញ្ចូលឈ្មោះ"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleSubmit}>បញ្ជូន</button>
      </div>
    );
  }
  ReactDOM.render(<Form />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function Form() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = () => {
    if (name.trim() === '') {
      setError('ឈ្មោះមិនអាចទទេបាន');
    } else {
      setError('');
      alert('ឈ្មោះ: ' + name);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmit}>បញ្ជូន</button>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Controlled Component នៅក្នុង Form Handling គឺជាអ្វី?',
      options: [
        'Component ដែលប្រើ `useRef`',
        'Component ដែលភ្ជាប់ Input ជាមួយ State',
        'Component ដែលគ្មាន State',
        'Component ដែល Validate Props'
      ],
      correct: 1,
      explanation: 'Controlled Component ភ្ជាប់ Input Values ជាមួយ State ដោយប្រើ `value` និង `onChange`។'
    },
    {
      question: 'តើ `onChange` Event Handler ធ្វើអ្វីនៅក្នុង Controlled Component?',
      options: [
        'Validate Props',
        'Update State នៅពេល Input ផ្លាស់ប្តូរ',
        'Submit Form',
        'Render Component'
      ],
      correct: 1,
      explanation: '`onChange` Update State នៅពេល Input Value ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Uncontrolled Component ប្រើ Hook អ្វី?',
      options: [
        'useState',
        'useRef',
        'useEffect',
        'useContext'
      ],
      correct: 1,
      explanation: 'Uncontrolled Component ប្រើ `useRef` ដើម្បីចូលប្រើ Input Values។'
    },
    {
      question: 'តើ `react-hook-form` ជួយអ្វី?',
      options: [
        'គ្រប់គ្រង Routing',
        'Simplify Form Handling និង Validation',
        'Fetch Data',
        'Manage State'
      ],
      correct: 1,
      explanation: '`react-hook-form` Simplify Form Handling និង Validation។'
    },
    {
      question: 'តើការគ្រប់គ្រង Multiple Inputs នៅក្នុង Controlled Component ប្រើអ្វី?',
      options: [
        'Multiple useState Hooks',
        'Object State ជាមួយ Dynamic Keys',
        'useRef',
        'useEffect'
      ],
      correct: 1,
      explanation: 'Multiple Inputs ប្រើ Object State ជាមួយ Dynamic Keys ដើម្បី Update Values។'
    },
    {
      question: 'តើកូដ `{...register(\'name\', { required: true })}` ក្នុង `react-hook-form` ធ្វើអ្វី?',
      options: [
        'Update State',
        'Register Input ជាមួយ Validation Rules',
        'Render Component',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`register` Register Input ជាមួយ Validation Rules ក្នុង `react-hook-form`។'
    },
    {
      question: 'តើ Form Validation នៅក្នុង React ធ្វើអ្វី?',
      options: [
        'Render Component',
        'ធានាថាទិន្នន័យត្រឹមត្រូវមុនពេល Submit',
        'Fetch Data',
        'Update DOM'
      ],
      correct: 1,
      explanation: 'Form Validation ធានាថាទិន្នន័យត្រឹមត្រូវមុនពេល Submit។'
    },
    {
      question: 'តើ Uncontrolled Component ខុសពី Controlled Component ដោយរបៀបណា?',
      options: [
        'ប្រើ State ដើម្បីគ្រប់គ្រង Input',
        'ប្រើ DOM References ដើម្បីចូលប្រើ Values',
        'Validate Props',
        'Fetch Data'
      ],
      correct: 1,
      explanation: 'Uncontrolled Component ប្រើ DOM References (`useRef`) ជំនួស State។'
    },
    {
      question: 'តើ `useForm` Hook ក្នុង `react-hook-form` Return អ្វីខ្លះ?',
      options: [
        'State Value',
        'Methods ដូចជា `register`, `handleSubmit`, `formState`',
        'DOM Reference',
        'Action Object'
      ],
      correct: 1,
      explanation: '`useForm` Return Methods ដូចជា `register`, `handleSubmit`, និង `formState`។'
    },
    {
      question: 'តើកូដ `<input value={name} onChange={(e) => setName(e.target.value)} />` ជា Component ប្រភេទណា?',
      options: [
        'Uncontrolled Component',
        'Controlled Component',
        'Class Component',
        'Stateless Component'
      ],
      correct: 1,
      explanation: 'Input ដែលភ្ជាប់ជាមួយ State គឺជា Controlled Component។'
    },
    {
      question: 'តើ Form Handling អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 2,
      explanation: 'Form Handling អាចប្រើបានទាំង Functional និង Class Components។'
    },
    {
      question: 'តើការប្រើ Object State សម្រាប់ Multiple Inputs មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'កាត់បន្ថយការប្រើ `useState` Hooks',
        'ធ្វើឱ្យ DOM Rendering លឿន',
        'Validate Props',
        'Fetch Data'
      ],
      correct: 0,
      explanation: 'Object State កាត់បន្ថយការប្រើ Multiple `useState` Hooks។'
    },
    {
      question: 'តើ `formState.errors` ក្នុង `react-hook-form` ប្រើសម្រាប់អ្វី?',
      options: [
        'Update State',
        'បង្ហាញ Validation Errors',
        'Render Component',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`formState.errors` បង្ហាញ Validation Errors សម្រាប់ Inputs។'
    },
    {
      question: 'តើកូដ `nameRef.current.value` ក្នុង Uncontrolled Component ធ្វើអ្វី?',
      options: [
        'Update State',
        'ចូលប្រើ Input Value ពី DOM',
        'Validate Props',
        'Render Component'
      ],
      correct: 1,
      explanation: '`nameRef.current.value` ចូលប្រើ Input Value ពី DOM ក្នុង Uncontrolled Component។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Controlled Components ដើម្បីបង្កើត Form App។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Form Handling"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Functional Component \`Form\` ដែល:
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`formData\` ជាមួយ \`{ name: '', email: '' }\`។
     - ប្រើ \`useState\` ដើម្បីបង្កើត State \`error\` សម្រាប់ Validation។
     - Render \`<input>\` ពីរ៖ សម្រាប់ \`name\` (type="text") និង \`email\` (type="email") ជាមួយ \`value\` និង \`onChange\`។
     - ប្រើ Object State ដើម្បីគ្រប់គ្រង Inputs ដោយ Dynamic Keys (\`name\` Attribute) ។
     - Render \`<p>\` សម្រាប់ Error Message ប្រសិនបើ \`error\` មាន។
     - Render \`<button>\` សម្រាប់ Submit ដែល Validate ថា \`name\` និង \`email\` មិនទទេ ហើយបង្ហាញ Alert ជាមួយទិន្នន័យ។
   - Render \`Form\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px; margin: 10px; padding: 5px;\` សម្រាប់ \`input\`។
     - កំណត់ \`font-size: 18px; color: red;\` សម្រាប់ \`p\` (Error Message)។
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Form Handling</title>
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
    p {
      font-size: 18px;
      color: red;
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
    function Form() {
      const [formData, setFormData] = React.useState({ name: '', email: '' });
      const [error, setError] = React.useState('');
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleSubmit = () => {
        if (formData.name.trim() === '' || formData.email.trim() === '') {
          setError('សូមបំពេញគ្រប់វាល');
        } else {
          setError('');
          alert(\`ឈ្មោះ: \${formData.name}, អ៊ីម៉ែល: \${formData.email}\`);
        }
      };
      return (
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="បញ្ចូលឈ្មោះ"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="បញ្ចូលអ៊ីម៉ែល"
          />
          {error && <p>{error}</p>}
          <button onClick={handleSubmit}>បញ្ជូន</button>
        </div>
      );
    }
    ReactDOM.render(<Form />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson5_1Content;