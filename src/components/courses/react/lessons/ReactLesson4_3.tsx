import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson4_3Content: LessonContent = {
  title: 'Data Fetching Libraries',
  objectives: [
    'យល់ដឹងអំពី Data Fetching Libraries នៅក្នុង React',
    'ស្វែងយល់ពីការប្រើ `axios` សម្រាប់ API Calls',
    'រៀនប្រើ `react-query` សម្រាប់ Data Fetching និង Caching',
    'រៀនប្រើ `SWR` សម្រាប់ Simplified Data Fetching',
    'អនុវត្ត Data Fetching ជាមួយ Error Handling',
    'ស្វែងយល់ពីភាពខុសគ្នារវាង `axios`, `react-query`, និង `SWR`'
  ],
  content: `
# Data Fetching Libraries 📡

---

Data Fetching Libraries ជួយ Simplify ការទាញទិន្នន័យពី APIs នៅក្នុង React Applications។

---

## 1. \`axios\`
\`axios\` ជា HTTP Client Library ដែលប្រើសម្រាប់ធ្វើ API Requests។

\`\`\`jsx
import axios from 'axios';
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
\`\`\`

---

## 2. \`react-query\`
\`react-query\` Simplify Data Fetching ដោយផ្តល់ Caching, Refetching, និង Error Handling។

\`\`\`jsx
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

function UserList() {
  const { data, error, isLoading } = useQuery('users', () =>
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
  );
  
  if (isLoading) return <p>កំពុងផ្ទុក...</p>;
  if (error) return <p>កំហុស: {error.message}</p>;
  
  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}
\`\`\`

---

## 3. \`SWR\`
\`SWR\` ជា Lightweight Library សម្រាប់ Data Fetching ជាមួយ Caching និង Revalidation។

\`\`\`jsx
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

function UserList() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);
  
  if (!data && !error) return <p>កំពុងផ្ទុក...</p>;
  if (error) return <p>កំហុស: {error.message}</p>;
  
  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
\`\`\`

---

## 4. ភាពខុសគ្នារវាង \`axios\`, \`react-query\`, និង \`SWR\`
- **\`axios\`**: HTTP Client សម្រាប់ API Requests ដោយគ្មាន Caching។
- **\`react-query\`**: ផ្តល់ Caching, Refetching, Error Handling, និង Query Management។
- **\`SWR\`**: Lightweight, ផ្តល់ Caching និង Automatic Revalidation។

---

## 5. ឧទាហរណ៍រួមបញ្ចូល (ជាមួយ \`react-query\`)
\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

function UserList() {
  const { data, error, isLoading } = useQuery('users', () =>
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
  );
  
  if (isLoading) return <p>កំពុងផ្ទុក...</p>;
  if (error) return <p>កំហុស: {error.message}</p>;
  
  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ axios Data Fetching</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useState, useEffect } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  import axios from 'https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js';
  function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsers(response.data))
        .catch(error => console.error('Error:', error));
    }, []);
    return (
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }
  ReactDOM.render(<UserList />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ react-query Data Fetching</h3>
<div id="root2"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  import axios from 'https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js';
  import { QueryClient, QueryClientProvider, useQuery } from 'https://cdn.jsdelivr.net/npm/@tanstack/react-query@4.29.19/dist/react-query.umd.js';
  const queryClient = new QueryClient();
  function UserList() {
    const { data, error, isLoading } = useQuery('users', () =>
      axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
    );
    if (isLoading) return <p>កំពុងផ្ទុក...</p>;
    if (error) return <p>កំហុស: {error.message}</p>;
    return (
      <ul>
        {data.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }
  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
const queryClient = new QueryClient();
function UserList() {
  const { data, error, isLoading } = useQuery('users', () =>
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
  );
  if (isLoading) return <p>កំពុងផ្ទុក...</p>;
  if (error) return <p>កំហុស: {error.message}</p>;
  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `axios` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'ធ្វើ HTTP Requests',
        'Manage Routing',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`axios` ប្រើសម្រាប់ធ្វើ HTTP Requests ទៅ APIs។'
    },
    {
      question: 'តើ `react-query` ផ្តល់អ្វីខ្លះ?',
      options: [
        'Routing',
        'Caching, Refetching, Error Handling',
        'State Management',
        'DOM Manipulation'
      ],
      correct: 1,
      explanation: '`react-query` ផ្តល់ Caching, Refetching, និង Error Handling សម្រាប់ Data Fetching។'
    },
    {
      question: 'តើ `SWR` ខុសពី `axios` ដោយរបៀបណា?',
      options: [
        'មិនអនុញ្ញាត HTTP Requests',
        'ផ្តល់ Caching និង Revalidation',
        'Validate Props',
        'Update State'
      ],
      correct: 1,
      explanation: '`SWR` ផ្តល់ Caching និង Automatic Revalidation បន្ថែមលើ HTTP Requests�।'
    },
    {
      question: 'តើ `useQuery` Hook ក្នុង `react-query` Return អ្វីខ្លះ?',
      options: [
        'State Value',
        'Data, Error, isLoading',
        'Action Object',
        'DOM Reference'
      ],
      correct: 1,
      explanation: '`useQuery` Return Object ដែលមាន `data`, `error`, និង `isLoading`។'
    },
    {
      question: 'តើ `fetcher` ក្នុង `SWR` ជា Function ប្រភេទណា?',
      options: [
        'Pure Function',
        'Function ដែល Fetch Data',
        'Event Handler',
        'Reducer Function'
      ],
      correct: 1,
      explanation: '`fetcher` ជា Function ដែល Fetch Data ពី API។'
    },
    {
      question: 'តើ `axios.get` ធ្វើអ្វី?',
      options: [
        'Update State',
        'ធ្វើ GET Request ទៅ API',
        'Render Component',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`axios.get` ធ្វើ GET Request ទៅ API។'
    },
    {
      question: 'តើ `react-query` អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 2,
      explanation: '`react-query` អាចប្រើបានទាំង Functional និង Class Components (ប៉ុន្តែ Hooks សម្រាប់ Functional)។'
    },
    {
      question: 'តើ `SWR` ផ្តល់អ្វីខ្លះជាលក្ខណៈពិសេស?',
      options: [
        'State Management',
        'Automatic Revalidation',
        'Routing',
        'DOM Manipulation'
      ],
      correct: 1,
      explanation: '`SWR` ផ្តល់ Automatic Revalidation និង Caching។'
    },
    {
      question: 'តើកូដ `useQuery(\'users\', fetcher)` ធ្វើអ្វី?',
      options: [
        'Update State',
        'Fetch Data និង Cache វា',
        'Render Component',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`useQuery` Fetch Data និង Cache វាដោយប្រើ Key និង Fetcher Function។'
    },
    {
      question: 'តើ `axios` មាន Built-in Caching ទេ?',
      options: ['មាន', 'មិនមាន', 'មានតែក្នុង Browser', 'មានតែក្នុង Node.js'],
      correct: 1,
      explanation: '`axios` មិនមាន Built-in Caching។'
    },
    {
      question: 'តើ `react-query` និង `SWR` ខុសគ្នាដោយរបៀបណា?',
      options: [
        '`react-query` សម្រាប់ Routing, `SWR` សម្រាប់ Fetching',
        '`react-query` មាន Features ច្រើនជាង, `SWR` ជា Lightweight',
        '`SWR` មិនអនុញ្ញាត Caching',
        '`react-query` មិនអនុញ្ញាត Error Handling'
      ],
      correct: 1,
      explanation: '`react-query` មាន Features ច្រើនជាង, `SWR` ជា Lightweight Library។'
    },
    {
      question: 'តើ `QueryClientProvider` ធ្វើអ្វី?',
      options: [
        'Fetch Data',
        'ផ្តល់ QueryClient Context ទៅ Components',
        'Update State',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`QueryClientProvider` ផ្តល់ QueryClient Context ទៅ Components។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ \`react-query\` និង \`axios\` ដើម្បី Fetch User List។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Query User List"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, axios, react-query, និង Babel។
   - បង្កើត \`QueryClient\` ដោយប្រើ \`new QueryClient()\`។
   - បង្កើត Functional Component \`UserList\` ដែល:
     - ប្រើ \`useQuery\` ដើម្បី Fetch Data ពី \`https://jsonplaceholder.typicode.com/users\` ដោយប្រើ \`axios.get\`។
     - Render \`<p>កំពុងផ្ទុក...</p>\` ប្រសិនបើ \`isLoading\`។
     - Render \`<p>កំហុស: {error.message}</p>\` ប្រសិនបើមាន \`error\`។
     - Render \`<ul>\` ដែលបង្ហាញ \`data\` (Users) ដោយប្រើ \`map()\` និង \`key\` Prop។
   - បង្កើត Functional Component \`App\` ដែល Wrap \`UserList\` ក្នុង \`<QueryClientProvider client={queryClient}>\`។
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\` ។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`p, ul li\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Query User List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p, ul li {
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
  <script src="https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tanstack/react-query@4.29.19/dist/react-query.umd.js"></script>
  <script type="text/babel">
    const queryClient = new QueryClient();
    function UserList() {
      const { data, error, isLoading } = ReactQuery.useQuery('users', () =>
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
      );
      if (isLoading) return <p>កំពុងផ្ទុក...</p>;
      if (error) return <p>កំហុស: {error.message}</p>;
      return (
        <ul>
          {data.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      );
    }
    function App() {
      return (
        <ReactQuery.QueryClientProvider client={queryClient}>
          <UserList />
        </ReactQuery.QueryClientProvider>
      );
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson4_3Content;