import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson5_7Content: LessonContent = {
  title: 'Next.js និង Remix',
  objectives: [
    'យល់ដឹងអំពី Next.js និង Remix ក្នុងការអភិវឌ្ឍ React Applications',
    'ស្វែងយល់ពី Server-Side Rendering (SSR) និង Static Site Generation (SSG)',
    'រៀនបង្កើត Pages និង Routes ក្នុង Next.js',
    'រៀនប្រើ Remix សម្រាប់ Data Loading និង Routing',
    'អនុវត្ត Client-Side Navigation',
    'ស្វែងយល់ពី API Routes ក្នុង Next.js',
    'រៀនប្រើ Data Fetching នៅក្នុង Next.js និង Remix'
  ],
  content: `
# Next.js និង Remix 🌐

---

**Next.js** និង **Remix** ជា Frameworks សម្រាប់ React ដែលផ្តល់នូវ Server-Side Rendering (SSR), Static Site Generation (SSG), និង Routing។

---

## 1. អ្វីទៅជា Next.js?
Next.js ជា React Framework ដែលគាំទ្រ SSR, SSG, និង API Routes។

\`\`\`jsx
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>សូមស្វាគមន៍មកកាន់ Next.js</h1>
      <Link href="/about">អំពី</Link>
    </div>
  );
}
\`\`\`

---

## 2. អ្វីទៅជា Remix?
Remix ជា Full-Stack Framework ដែលផ្តោតលើ Data Loading និង Nested Routing។

\`\`\`jsx
// app/routes/index.jsx
import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div>
      <h1>សូមស្វាគមន៍មកកាន់ Remix</h1>
      <Link to="/about">អំពី</Link>
    </div>
  );
}
\`\`\`

---

## 3. Server-Side Rendering (SSR)
SSR Render Components នៅ Server មុនពេលបញ្ជូនទៅ Browser។

\`\`\`jsx
// pages/users.js (Next.js)
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return { props: { users } };
}

export default function Users({ users }) {
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
\`\`\`

---

## 4. Static Site Generation (SSG)
SSG Generate HTML នៅ Build Time។

\`\`\`jsx
// pages/posts.js (Next.js)
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return { props: { posts } };
}

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
\`\`\`

---

## 5. ឧទាហរណ៍រួមបញ្ចូល (Client-Side Routing)
ក្នុង Browser ដោយប្រើ React Router ដើម្បី Simulate Routing។

\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>ទំព័រដើម</h2>;
}

function About() {
  return <h2>អំពី</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">ទំព័រដើម</Link> | <Link to="/about">អំពី</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Client-Side Routing ជាមួយ React Router</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  import { BrowserRouter, Routes, Route, Link } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.4.3/dist/umd/react-router-dom.development.js';
  function Home() {
    return <h2>ទំព័រដើម</h2>;
  }
  function About() {
    return <h2>អំពី</h2>;
  }
  function App() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">ទំព័រដើម</Link> | <Link to="/about">អំពី</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
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
      <div>
        <nav>
          <Link to="/">ទំព័រដើម</Link> | <Link to="/about">អំពី</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Next.js គឺជាអ្វី?',
      options: [
        'React Library សម្រាប់ State Management',
        'React Framework សម្រាប់ SSR និង SSG',
        'Testing Framework',
        'Deployment Platform'
      ],
      correct: 1,
      explanation: 'Next.js ជា React Framework សម្រាប់ SSR, SSG, និង Routing។'
    },
    {
      question: 'តើ Remix ផ្តោតលើអ្វី?',
      options: [
        'State Management',
        'Data Loading និង Nested Routing',
        'Error Handling',
        'Performance Optimization'
      ],
      correct: 1,
      explanation: 'Remix ផ្តោតលើ Data Loading និង Nested Routing។'
    },
    {
      question: 'តើ `getServerSideProps` ក្នុង Next.js ធ្វើអ្វី?',
      options: [
        'Generate Static HTML',
        'Fetch Data នៅ Server មុន Render',
        'Update State',
        'Handle Events'
      ],
      correct: 1,
      explanation: '`getServerSideProps` Fetch Data នៅ Server មុន Render។'
    },
    {
      question: 'តើ `getStaticProps` ក្នុង Next.js ធ្វើអ្វី?',
      options: [
        'Fetch Data នៅ Runtime',
        'Generate HTML នៅ Build Time',
        'Update State',
        'Handle Routing'
      ],
      correct: 1,
      explanation: '`getStaticProps` Generate HTML នៅ Build Time៕'
    },
    {
      question: 'តើ `<Link>` ក្នុង Next.js និង Remix ប្រើសម្រាប់អ្វី?',
      options: [
        'Update State',
        'Client-Side Navigation',
        'Server-Side Rendering',
        'Data Fetching'
      ],
      correct: 1,
      explanation: '`<Link>` ប្រើសម្រាប់ Client-Side Navigation៕'
    },
    {
      question: 'តើ API Routes ក្នុង Next.js ជួយអ្វី?',
      options: [
        'Create Backend Endpoints',
        'Manage State',
        'Optimize Performance',
        'Test Components'
      ],
      correct: 0,
      explanation: 'API Routes ក្នុង Next.js អនុញ្ញាតឱ្យ Create Backend Endpoints៕'
    },
    {
      question: 'តើ SSR និង SSG ខុសគ្នាដូចម្តេច?',
      options: [
        'SSR Render នៅ Build Time, SSG នៅ Runtime',
        'SSR Render នៅ Server, SSG នៅ Build Time',
        'SSR និង SSG ដូចគ្នា',
        'SSR សម្រាប់ Static Sites, SSG សម្រាប់ Dynamic Sites'
      ],
      correct: 1,
      explanation: 'SSR Render នៅ Server នៅ Runtime, SSG Render នៅ Build Time៕'
    },
    {
      question: 'តើ Remix ប្រើអ្វីសម្រាប់ Routing?',
      options: [
        'File-Based Routing',
        'Code-Based Routing',
        'State-Based Routing',
        'API-Based Routing'
      ],
      correct: 0,
      explanation: 'Remix ប្រើ File-Based Routing សម្រាប់ Define Routes៕'
    },
    {
      question: 'តើ Next.js គាំទ្រ Feature អ្វីខ្លះ?',
      options: [
        'SSR និង SSG',
        'Testing Components',
        'State Management',
        'Error Handling'
      ],
      correct: 0,
      explanation: 'Next.js គាំទ្រ SSR, SSG, API Routes, និង Routing៕'
    },
    {
      question: 'តើ `Link` Component ក្នុង Next.js តម្រូវឱ្យ Refresh Page ទេ?',
      options: [
        'ត្រូវ',
        'មិនត្រូវ',
        'ត្រូវតែក្នុង SSR',
        'ត្រូវតែក្នុង SSG'
      ],
      correct: 1,
      explanation: '`Link` ក្នុង Next.js អនុញ្ញាតឱ្យ Navigate ដោយមិន Refresh Page៕'
    },
    {
      question: 'តើ Data Loading ក្នុង Remix ប្រើ Function អ្វី?',
      options: [
        'useState',
        'loader',
        'useEffect',
        'getStaticProps'
      ],
      correct: 1,
      explanation: 'Remix ប្រើ `loader` Function សម្រាប់ Data Loading៕'
    },
    {
      question: 'តើ Next.js និង Remix គាំទ្រ Client-Side Routing ទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បានតែក្នុង Next.js',
        'បានតែក្នុង Remix'
      ],
      correct: 0,
      explanation: 'ទាំង Next.js និង Remix គាំទ្រ Client-Side Routing៕'
    },
    {
      question: 'តើ Framework ណាដែលប្រើ File-Based Routing?',
      options: [
        'React',
        'Next.js និង Remix',
        'Vue.js',
        'Angular'
      ],
      correct: 1,
      explanation: 'ទាំង Next.js និង Remix ប្រើ File-Based Routing៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ React Router ដើម្បី Simulate Client-Side Routing៕

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title៖ "React Client-Side Routing"៕
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`៕

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, Babel, និង React Router DOM៕
   - បង្កើត Functional Components ពីរ៖ \`Home\` (Render \`<h2>ទំព័រដើម</h2>\`) និង \`About\` (Render \`<h2>អំពី</h2>\`)៕
   - បង្កើត Functional Component \`App\` ដែល:
     - ប្រើ \`BrowserRouter\`, \`Routes\`, \`Route\`, និង \`Link\` ពី React Router៕
     - Render Navigation Links សម្រាប់ "ទំព័រដើម" និង "អំពី"៕
     - Define Routes សម្រាប់ \`Home\` (path="/") និង \`About\` (path="/about")៕
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\`៕

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - កំណត់ \`font-size: 18px; margin: 10px;\` សម្រាប់ \`nav a\`៕
     - កំណត់ \`font-size: 24px;\` សម្រាប់ \`h2\`៕

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស៕ Navigation គួរដំណើរការដោយមិន Refresh Page៕
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Client-Side Routing</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    nav a {
      font-size: 18px;
      margin: 10px;
    }
    h2 {
      font-size: 24px;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/Babel.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6.4.3/dist/umd/react-router-dom.development.js"></script>
  <script type="text/babel">
    const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;
    function Home() {
      return <h2>ទំព័រដើម</h2>;
    }
    function About() {
      return <h2>អំពី</h2>;
    }
    function App() {
      return (
        <BrowserRouter>
          <div>
            <nav>
              <Link to="/">ទំព័រដើម</Link> | <Link to="/about">អំពី</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      );
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson5_7Content;