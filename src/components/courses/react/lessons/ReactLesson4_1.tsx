import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson4_1Content: LessonContent = {
  title: 'React Router',
  objectives: [
    'យល់ដឹងអំពី React Router និងអត្ថន័យរបស់វា',
    'ស្វែងយល់ពីការប្រើ `BrowserRouter` សម្រាប់ Navigation',
    'រៀនបង្កើត Routes ដោយប្រើ `Route` Component',
    'រៀនប្រើ `Link` និង `NavLink` សម្រាប់ Navigation',
    'អនុវត្ត Dynamic Routing ជាមួយ URL Parameters',
    'ស្វែងយល់ពី Nested Routes',
    'រៀនប្រើ `useNavigate` Hook សម្រាប់ Programmatic Navigation'
  ],
  content: `
# React Router 🛤️

---

**React Router** គឺជា Library ដែលប្រើសម្រាប់គ្រប់គ្រង Navigation និង Routing នៅក្នុង React Applications។ វាអនុញ្ញាតឱ្យអ្នកបង្កើត Single Page Applications (SPAs) ដែលមាន Multiple Pages។

---

## 1. អ្វីទៅជា React Router?
React Router ជួយគ្រប់គ្រង URL Routes និង Render Components ដែលត្រូវនឹង URL នោះ។

\`\`\`jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

- **BrowserRouter**: ផ្តល់ Routing Context។
- **Routes**: កំណត់ផ្លូវទាំងអស់។
- **Route**: ភ្ជាប់ URL Path ជាមួយ Component។

---

## 2. ការប្រើ \`Link\` និង \`NavLink\`
\`Link\` និង \`NavLink\` ប្រើសម្រាប់ Navigation ដោយមិន Reload Page។

\`\`\`jsx
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">ទំព័រដើម</Link>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>អំពី</NavLink>
    </nav>
  );
}
\`\`\`

- **Link**: បង្កើត Navigation Link។
- **NavLink**: បន្ថែម Styling នៅពេល Route សកម្ម។

---

## 3. Dynamic Routing
Dynamic Routing ប្រើ URL Parameters ដើម្បី Render Components ដោយផ្អែកលើ Dynamic Data។

\`\`\`jsx
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <h2>អ្នកប្រើ: {id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

---

## 4. Nested Routes
Nested Routes អនុញ្ញាតឱ្យបង្កើត Sub-routes នៅក្នុង Component។

\`\`\`jsx
function Dashboard() {
  return (
    <div>
      <h2>ផ្ទាំងគ្រប់គ្រង</h2>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

- **Outlet**: Render Child Routes។

---

## 5. Programmatic Navigation
\`useNavigate\` Hook អនុញ្ញាតឱ្យធ្វើ Navigation ដោយ Code។

\`\`\`jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/about')}>ទៅកាន់អំពី</button>
  );
}
\`\`\`

---

## 6. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Home() {
  return <h2>ទំព័រដើម</h2>;
}

function About() {
  return <h2>អំពី</h2>;
}

function User() {
  const { id } = useParams();
  return <h2>អ្នកប្រើ: {id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">ទំព័រដើម</Link> | <Link to="/about">អំពី</Link> | <Link to="/user/1">អ្នកប្រើ 1</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Basic Routing</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  import { BrowserRouter, Routes, Route, Link } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.3.0/dist/umd/react-router-dom.development.js';
  function Home() {
    return <h2>ទំព័រដើម</h2>;
  }
  function About() {
    return <h2>អំពី</h2>;
  }
  function App() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">ទំព័រដើម</Link> | <Link to="/about">អំពី</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function Home() {
  return <h2>ទំព័រដើម</h2>;
}
function About() {
  return <h2>អំពី</h2>;
}
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">ទំព័រដើម</Link> | <Link to="/about">អំពី</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Dynamic Routing</h3>
<div id="root2"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  import { BrowserRouter, Routes, Route, Link, useParams } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.3.0/dist/umd/react-router-dom.development.js';
  function User() {
    const { id } = useParams();
    return <h2>អ្នកប្រើ: {id}</h2>;
  }
  function App() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/user/1">អ្នកប្រើ 1</Link> | <Link to="/user/2">អ្នកប្រើ 2</Link>
        </nav>
        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
function User() {
  const { id } = useParams();
  return <h2>អ្នកប្រើ: {id}</h2>;
}
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/user/1">អ្នកប្រើ 1</Link> | <Link to="/user/2">អ្នកប្រើ 2</Link>
      </nav>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ React Router ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'គ្រប់គ្រង Navigation និង Routing',
        'Fetch Data',
        'Validate Props'
      ],
      correct: 1,
      explanation: 'React Router ប្រើសម្រាប់គ្រប់គ្រង Navigation និង Routing នៅក្នុង SPAs។'
    },
    {
      question: 'តើ Component ណាដែលផ្តល់ Routing Context?',
      options: [
        'Routes',
        'Route',
        'BrowserRouter',
        'Link'
      ],
      correct: 2,
      explanation: '`BrowserRouter` ផ្តល់ Routing Context សម្រាប់ React Router។'
    },
    {
      question: 'តើ `Link` Component ធ្វើអ្វី?',
      options: [
        'Render Child Routes',
        'បង្កើត Navigation Link',
        'Fetch Data',
        'Update State'
      ],
      correct: 1,
      explanation: '`Link` បង្កើត Navigation Link ដោយមិន Reload Page។'
    },
    {
      question: 'តើ `NavLink` ខុសពី `Link` ដោយរបៀបណា?',
      options: [
        'មិនអនុញ្ញាត Navigation',
        'បន្ថែម Styling នៅពេល Route សកម្ម',
        'Validate Props',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`NavLink` បន្ថែម Styling នៅពេល Route សកម្ម។'
    },
    {
      question: 'តើ `useParams` Hook ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'ចូលប្រើ URL Parameters',
        'Programmatic Navigation',
        'Render Child Routes'
      ],
      correct: 1,
      explanation: '`useParams` ចូលប្រើ URL Parameters ក្នុង Dynamic Routes។'
    },
    {
      question: 'តើ `Outlet` Component ធ្វើអ្វី?',
      options: [
        'បង្កើត Navigation Link',
        'Render Child Routes',
        'Fetch Data',
        'Update DOM'
      ],
      correct: 1,
      explanation: '`Outlet` Render Child Routes ក្នុង Nested Routes។'
    },
    {
      question: 'តើ `useNavigate` Hook ប្រើសម្រាប់អ្វី?',
      options: [
        'ចូលប្រើ URL Parameters',
        'Programmatic Navigation',
        'Memoize Functions',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`useNavigate` ប្រើសម្រាប់ Programmatic Navigation។'
    },
    {
      question: 'តើកូដ `<Route path="/user/:id" element={<User />}>` ធ្វើអ្វី?',
      options: [
        'Render Static Route',
        'Render Dynamic Route ជាមួយ Parameter `:id`',
        'Fetch Data',
        'Update State'
      ],
      correct: 1,
      explanation: 'កំណត់ Dynamic Route ដែលទទួល Parameter `:id`។'
    },
    {
      question: 'តើ React Router អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Class Components',
        'Functional Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 2,
      explanation: 'React Router អាចប្រើបានទាំង Functional និង Class Components។'
    },
    {
      question: 'តើ `Routes` Component ធ្វើអ្វី?',
      options: [
        'បង្កើត Navigation Links',
        'កំណត់ផ្លូវទាំងអស់',
        'Fetch Data',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`Routes` កំណត់ផ្លូវទាំងអស់នៅក្នុង Application។'
    },
    {
      question: 'តើកូដ `navigate(\'/about\')` ធ្វើអ្វី?',
      options: [
        'Update State',
        'Navigate ទៅកាន់ `/about`',
        'Fetch Data',
        'Render Component'
      ],
      correct: 1,
      explanation: '`navigate(\'/about\')` Navigate ទៅកាន់ Path `/about`។'
    },
    {
      question: 'តើ Nested Routes ត្រូវប្រើ Component អ្វីដើម្បី Render Child Routes?',
      options: [
        'Link',
        'NavLink',
        'Outlet',
        'Route'
      ],
      correct: 2,
      explanation: '`Outlet` ប្រើសម្រាប់ Render Child Routes ក្នុង Nested Routes។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ React Router ដើម្បីបង្កើត Navigation App។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Router Navigation"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, React Router DOM, និង Babel។
   - បង្កើត Functional Components បី៖ \`Home\`, \`About\`, \`User\`។
     - \`Home\`: Render \`<h2>ទំព័រដើម</h2>\`។
     - \`About\`: Render \`<h2>អំពី</h2>\`។
     - \`User\`: ប្រើ \`useParams\` ដើម្បីចូលប្រើ \`:id\` និង Render \`<h2>អ្នកប្រើ: {id}</h2>\`។
   - បង្កើត Functional Component \`App\` ដែល:
     - Render \`<nav>\` ជាមួយ \`<Link>\` ទៅ \`/\` (ទំព័រដើម), \`/about\` (អំពី), \`/user/1\` (អ្នកប្រើ 1)។
     - ប្រើ \`BrowserRouter\`, \`Routes\`, និង \`Route\` ដើម្បីកំណត់ផ្លូវទៅ \`Home\`, \`About\`, \`User\`។
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`margin: 10px;\` និង \`text-decoration: none; color: #2c3e50;\` សម្រាប់ \`nav a\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`h2\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Router Navigation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    nav a {
      margin: 10px;
      text-decoration: none;
      color: #2c3e50;
    }
    h2 {
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
  <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6.3.0/dist/umd/react-router-dom.development.js"></script>
  <script type="text/babel">
    function Home() {
      return <h2>ទំព័រដើម</h2>;
    }
    function About() {
      return <h2>អំពី</h2>;
    }
    function User() {
      const { id } = ReactRouterDOM.useParams();
      return <h2>អ្នកប្រើ: {id}</h2>;
    }
    function App() {
      return (
        <ReactRouterDOM.BrowserRouter>
          <nav>
            <ReactRouterDOM.Link to="/">ទំព័រដើម</ReactRouterDOM.Link> | 
            <ReactRouterDOM.Link to="/about">អំពី</ReactRouterDOM.Link> | 
            <ReactRouterDOM.Link to="/user/1">អ្នកប្រើ 1</ReactRouterDOM.Link>
          </nav>
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route path="/" element={<Home />} />
            <ReactRouterDOM.Route path="/about" element={<About />} />
            <ReactRouterDOM.Route path="/user/:id" element={<User />} />
          </ReactRouterDOM.Routes>
        </ReactRouterDOM.BrowserRouter>
      );
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson4_1Content;