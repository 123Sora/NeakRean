import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson5_3Content: LessonContent = {
  title: 'Custom Hooks',
  objectives: [
    'យល់ដឹងអំពី Custom Hooks នៅក្នុង React',
    'ស្វែងយល់ពីការបង្កើត Custom Hooks',
    'រៀន Reuse Logic ដោយប្រើ Custom Hooks',
    'អនុវត្ត Custom Hook សម្រាប់ Form Handling',
    'រៀនបង្កើត Custom Hook សម្រាប់ Data Fetching',
    'ស្វែងយល់ពីការប្រើ Custom Hooks ជាមួយ Existing Hooks',
    'រៀន Share Logic រវាង Components'
  ],
  content: `
# Custom Hooks ⚒️

---

**Custom Hooks** គឺជា Functions ដែលប្រើ React Hooks (ដូចជា \`useState\`, \`useEffect\`) ដើម្បី Reuse Logic រវាង Components។

---

## 1. អ្វីទៅជា Custom Hook?
Custom Hook ជា JavaScript Function ដែលចាប់ផ្តើមដោយ \`use\` និងប្រើ Built-in Hooks។

\`\`\`jsx
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}
\`\`\`

---

## 2. បង្កើត Custom Hook សម្រាប់ Form Handling
Custom Hook សម្រាប់ Form Handling Simplify Input Management។

\`\`\`jsx
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  const resetForm = () => {
    setValues(initialValues);
  };
  
  return { values, handleChange, resetForm };
}

function Form() {
  const { values, handleChange, resetForm } = useForm({ name: '', email: '' });
  
  const handleSubmit = () => {
    alert(\`ឈ្មោះ: \${values.name}, អ៊ីម៉ែល: \${values.email}\`);
  };
  
  return (
    <div>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="បញ្ចូលអ៊ីម៉ែល"
      />
      <button onClick={handleSubmit}>បញ្ជូន</button>
      <button onClick={resetForm}>កំណត់ឡើងវិញ</button>
    </div>
  );
}
\`\`\`

---

## 3. Custom Hook សម្រាប់ Data Fetching
Custom Hook សម្រាប់ Fetch Data ជាមួយ Error Handling�।

\`\`\`jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}

function UserList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  
  if (loading) return <p>កំពុងផ្ទុក...</p>;
  if (error) return <p>កំហុស: {error}</p>;
  
  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
\`\`\`

---

## 4. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  const resetForm = () => {
    setValues(initialValues);
  };
  
  return { values, handleChange, resetForm };
}

function Form() {
  const { values, handleChange, resetForm } = useForm({ name: '', email: '' });
  
  const handleSubmit = () => {
    alert(\`ឈ្មោះ: \${values.name}, អ៊ីម៉ែល: \${values.email}\`);
  };
  
  return (
    <div>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="បញ្ចូលអ៊ីម៉ែល"
      />
      <button onClick={handleSubmit}>បញ្ជូន</button>
      <button onClick={resetForm}>កំណត់ឡើងវិញ</button>
    </div>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Custom Hook សម្រាប់ Form Handling</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
    const resetForm = () => {
      setValues(initialValues);
    };
    return { values, handleChange, resetForm };
  }
  function Form() {
    const { values, handleChange, resetForm } = useForm({ name: '', email: '' });
    const handleSubmit = () => {
      alert(\`ឈ្មោះ: \${values.name}, អ៊ីម៉ែល: \${values.email}\`);
    };
    return (
      <div>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="បញ្ចូលឈ្មោះ"
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="បញ្ចូលអ៊ីម៉ែល"
        />
        <button onClick={handleSubmit}>បញ្ជូន</button>
        <button onClick={resetForm}>កំណត់ឡើងវិញ</button>
      </div>
    );
  }
  ReactDOM.render(<Form />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const resetForm = () => {
    setValues(initialValues);
  };
  return { values, handleChange, resetForm };
}
function Form() {
  const { values, handleChange, resetForm } = useForm({ name: '', email: '' });
  const handleSubmit = () => {
    alert(\`ឈ្មោះ: \${values.name}, អ៊ីម៉ែល: \${values.email}\`);
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="បញ្ចូលអ៊ីម៉ែល"
      />
      <button onClick={handleSubmit}>បញ្ជូន</button>
      <button onClick={resetForm}>កំណត់ឡើងវិញ</button>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Custom Hook សម្រាប់ Window Size</h3>
<div id="root2"></div>
<script type="text/babel">
  import React, { useState, useEffect } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function useWindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    useEffect(() => {
      const handleResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return size;
  }
  function WindowSize() {
    const { width, height } = useWindowSize();
    return <p>ទទឹង: {width}px, កម្ពស់: {height}px</p>;
  }
  ReactDOM.render(<WindowSize />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}
function WindowSize() {
  const { width, height } = useWindowSize();
  return <p>ទទឹង: {width}px, កម្ពស់: {height}px</p>;
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Custom Hook គឺជាអ្វី?',
      options: [
        'Component ដែល Render UI',
        'Function ដែល Reuse Logic ដោយប្រើ Hooks',
        'Library សម្រាប់ Data Fetching',
        'Method សម្រាប់ Validate Props'
      ],
      correct: 1,
      explanation: 'Custom Hook ជា Function ដែល Reuse Logic ដោយប្រើ Built-in Hooks។'
    },
    {
      question: 'តើ Custom Hook ត្រូវចាប់ផ្តើមដោយអ្វី?',
      options: [
        'hook',
        'use',
        'react',
        'custom'
      ],
      correct: 1,
      explanation: 'Custom Hook ត្រូវចាប់ផ្តើមដោយ `use` តាម Convention។'
    },
    {
      question: 'តើ Custom Hook អាចប្រើ Hook អ្វីខ្លះ?',
      options: [
        'តែ `useState`',
        'តែ `useEffect`',
        'Built-in Hooks ណាមួយ',
        'គ្មាន Hooks'
      ],
      correct: 2,
      explanation: 'Custom Hook អាចប្រើ Built-in Hooks ណាមួយ (ឧ. `useState`, `useEffect`)។'
    },
    {
      question: 'តើ Custom Hook សម្រាប់ Form Handling ជួយអ្វី?',
      options: [
        'Render UI',
        'Simplify Input Management',
        'Fetch Data',
        'Validate Props'
      ],
      correct: 1,
      explanation: 'Custom Hook សម្រាប់ Form Handling Simplify Input Management។'
    },
    {
      question: 'តើ Custom Hook សម្រាប់ Data Fetching Return អ្វីខ្លះជាទូទៅ?',
      options: [
        'State Value',
        'Data, Loading, Error',
        'DOM Reference',
        'Action Object'
      ],
      correct: 1,
      explanation: 'Custom Hook សម្រាប់ Data Fetching ជាទូទៅ Return `data`, `loading`, និង `error`។'
    },
    {
      question: 'តើ Custom Hook អាច Share Logic រវាង Components បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បានតែក្នុង Class Components',
        'បានតែក្នុង Functional Components'
      ],
      correct: 0,
      explanation: 'Custom Hook អាច Share Logic រវាង Components បាន។'
    },
    {
      question: 'តើ Custom Hook អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 1,
      explanation: 'Custom Hook ប្រើបានតែក្នុង Functional Components។'
    },
    {
      question: 'តើកូដ `useForm(initialValues)` ជាអ្វី?',
      options: [
        'Built-in Hook',
        'Custom Hook',
        'Component',
        'Library'
      ],
      correct: 1,
      explanation: '`useForm` ជា Custom Hook សម្រាប់ Form Handling។'
    },
    {
      question: 'តើ Custom Hook សម្រាប់ Data Fetching ប្រើ Hook អ្វីជាទូទៅ?',
      options: [
        'useState និង useEffect',
        'useRef',
        'useContext',
        'useCallback'
      ],
      correct: 0,
      explanation: 'Custom Hook សម្រាប់ Data Fetching ប្រើ `useState` និង `useEffect`។'
    },
    {
      question: 'តើ Custom Hook អាច Return អ្វីបានខ្លះ?',
      options: [
        'Components ប៉ុណ្ណោះ',
        'Values, Functions, Objects',
        'HTML Elements',
        'Props'
      ],
      correct: 1,
      explanation: 'Custom Hook អាច Return Values, Functions, ឬ Objects។'
    },
    {
      question: 'តើ Custom Hook មាន Constraint ដូច Built-in Hooks ទេ?',
      options: [
        'មាន',
        'មិនមាន',
        'មានតែក្នុង Class Components',
        'មានតែក្នុង Functional Components'
      ],
      correct: 0,
      explanation: 'Custom Hook ត្រូវអនុវត្តតាម Rules of Hooks (ឧ. ប្រើនៅ Top Level)។'
    },
    {
      question: 'តើកូដ `useWindowSize` នៅក្នុងឧទាហរណ៍ Return អ្វី?',
      options: [
        'Window Object',
        'Object ដែលមាន `width` និង `height`',
        'State Value',
        'DOM Reference'
      ],
      correct: 1,
      explanation: '`useWindowSize` Return Object ដែលមាន `width` និង `height`។'
    },
    {
      question: 'តើ Custom Hook ជួយកាត់បន្ថយអ្វី?',
      options: [
        'DOM Rendering',
        'Code Duplication',
        'API Calls',
        'Prop Validation'
      ],
      correct: 1,
      explanation: 'Custom Hook កាត់បន្ថយ Code Duplication ដោយ Reuse Logic។'
    },
    {
      question: 'តើ Custom Hook អាចប្រើ Dependency Array បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បានតែក្នុង `useEffect`',
        'បានតែក្នុង `useState`'
      ],
      correct: 0,
      explanation: 'Custom Hook អាចប្រើ Dependency Array នៅក្នុង `useEffect` ឬ `useMemo`។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Custom Hook ដើម្បីបង្កើត Form App។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Custom Hook Form"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Custom Hook \`useForm\` ដែល:
     - ទទួល \`initialValues\` Parameter។
     - ប្រើ \`useState\` ដើម្បីគ្រប់គ្រង Form Values។
     - មាន \`handleChange\` Function ដើម្បី Update Values ដោយ Dynamic Keys។
     - មាន \`resetForm\` Function ដើម្បី Reset Values ទៅ Initial State។
     - Return \`{ values, handleChange, resetForm }\`។
   - បង្កើត Functional Component \`Form\` ដែល:
     - ប្រើ \`useForm\` ជាមួយ Initial Values \`{ name: '', email: '' }\`។
     - Render \`<input>\` ពីរ៖ \`name\` (type="text") និង \`email\` (type="email")។
     - Render \`<button>\` ពីរ៖ "បញ្ជូន" (Alert Form Data) និង "កំណត់ឡើងវិញ" (Reset Form)។
   - Render \`Form\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px; margin: 10px; padding: 5px;\` សម្រាប់ \`input\`។
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Custom Hook Form</title>
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
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/Babel.min.js"></script>
  <script type="text/babel">
    function useForm(initialValues) {
      const [values, setValues] = React.useState(initialValues);
      const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const resetForm = () => {
        setValues(initialValues);
      };
      return { values, handleChange, resetForm };
    }
    function Form() {
      const { values, handleChange, resetForm } = useForm({ name: '', email: '' });
      const handleSubmit = () => {
        alert(\`ឈ្មោះ: \${values.name}, អ៊ីម៉ែល: \${values.email}\`);
      };
      return (
        <div>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="បញ្ចូលឈ្មោះ"
          />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="បញ្ចូលអ៊ីម៉ែល"
          />
          <button onClick={handleSubmit}>បញ្ជូន</button>
          <button onClick={resetForm}>កំណត់ឡើងវិញ</button>
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

export default ReactLesson5_3Content;