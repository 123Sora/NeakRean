import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson6_3Content: LessonContent = {
  title: 'គេហទំព័រ Blog ឬ Portfolio សាមញ្ញ',
  objectives: [
    'យល់ដឹងអំពីការបង្កើត Blog ឬ Portfolio Website ជាមួយ React',
    'រៀនប្រើ React Router សម្រាប់ Multi-Page Navigation',
    'អនុវត្ត Component Reusability សម្រាប់ Blog Posts',
    'ស្វែងយល់ពីការបង្ហាញ Static Data នៅក្នុង Components',
    'រៀនប្រើ CSS សម្រាប់ Responsive Design',
    'អនុវត្ត Navigation Bar សម្រាប់ User Experience',
    'ស្វែងយល់ពី Static Site Deployment'
  ],
  content: `
# គេហទំព័រ Blog ឬ Portfolio សាមញ្ញ 🌍

---

**Blog/Portfolio Website** បង្ហាញ Content ដូចជា Blog Posts ឬ Portfolio Items ជាមួយ Navigation៕

---

## 1. ការបង្កើត Blog Post Component
បង្កើត Reusable Component សម្រាប់បង្ហាញ Blog Posts៕

\`\`\`jsx
function BlogPost({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}
\`\`\`

---

## 2. ការប្រើ React Router
ប្រើ React Router សម្រាប់ Multi-Page Navigation៕

\`\`\`jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>ទំព័រដើម</h2>;
}

function Blog() {
  const posts = [
    { id: 1, title: 'អត្ថបទទី១', content: 'នេះជាអត្ថបទទី១' },
    { id: 2, title: 'អត្ថបទទី២', content: 'នេះជាអត្ថបទទី២' }
  ];
  return (
    <div>
      <h2>អត្ថបទ</h2>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">ទំព័រដើម</Link> | <Link to="/blog">អត្ថបទ</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

---

## 3. Responsive Design
ប្រើ CSS ដើម្បីធ្វើឱ្យ Website Responsive៕

\`\`\`css
nav a {
  margin: 10px;
}
div.post {
  border: 1px solid #ccc;
  padding: 10px;
}
@media (max-width: 600px) {
  div.post {
    padding: 5px;
  }
}
\`\`\`

---

## 4. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function BlogPost({ post }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}

function Home() {
  return <h2>ទំព័រដើម</h2>;
}

function Blog() {
  const posts = [
    { id: 1, title: 'អត្ថបទទី១', content: 'នេះជាអត្ថបទទី១' },
    { id: 2, title: 'អត្ថបទទី២', content: 'នេះជាអត្ថបទទី២' }
  ];
  return (
    <div>
      <h2>អត្ថបទ</h2>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">ទំព័រដើម</Link> | <Link to="/blog">អត្ថបទ</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Blog Website ជាមួយ Navigation</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  import { BrowserRouter, Routes, Route, Link } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.4.3/dist/umd/react-router-dom.development.js';
  function BlogPost({ post }) {
    return (
      <div className="post">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  }
  function Home() {
    return <h2>ទំព័រដើម</h2>;
  }
  function Blog() {
    const posts = [
      { id: 1, title: 'អត្ថបទទី១', content: 'នេះជាអត្ថបទទី១' },
      { id: 2, title: 'អត្ថបទទី២', content: 'នេះជាអត្ថបទទី២' }
    ];
    return (
      <div>
        <h2>អត្ថបទ</h2>
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
  function App() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">ទំព័រដើម</Link> | <Link to="/blog">អត្ថបទ</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function BlogPost({ post }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}
function Home() {
  return <h2>ទំព័រដើម</h2>;
}
function Blog() {
  const posts = [
    { id: 1, title: 'អត្ថបទទី១', content: 'នេះជាអត្ថបទទី១' },
    { id: 2, title: 'អត្ថបទទី២', content: 'នេះជាអត្ថបទទី២' }
  ];
  return (
    <div>
      <h2>អត្ថបទ</h2>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">ទំព័រដើម</Link> | <Link to="/blog">អត្ថបទ</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ React Router ប្រើសម្រាប់អ្វីនៅក្នុង Blog App?',
      options: [
        'State Management',
        'Multi-Page Navigation',
        'Data Fetching',
        'Styling Components'
      ],
      correct: 1,
      explanation: 'React Router ប្រើសម្រាប់ Multi-Page Navigation ដោយ Client-Side Routing៕'
    },
    {
      question: 'តើ Component ណាដែលបង្ហាញ Blog Post នីមួយៗ?',
      options: [
        'Blog',
        'BlogPost',
        'Home',
        'App'
      ],
      correct: 1,
      explanation: '`BlogPost` បង្ហាញ Blog Post នីមួយៗជាមួយ Title និង Content៕'
    },
    {
      question: 'តើ `Link` Component ធ្វើអ្វី?',
      options: [
        'Update State',
        'Navigate ដោយមិន Refresh Page',
        'Fetch Data',
        'Render Posts'
      ],
      correct: 1,
      explanation: '`Link` Navigate ទៅ Pages ផ្សេងៗដោយមិន Refresh Page៕'
    },
    {
      question: 'តើ `map` នៅក្នុង `Blog` Component ធ្វើអ្វី?',
      options: [
        'Update State',
        'Render Array នៃ Blog Posts',
        'Handle Events',
        'Style Components'
      ],
      correct: 1,
      explanation: '`map` Render Array នៃ Blog Posts ដោយ Iterate លើ Posts៕'
    },
    {
      question: 'តើ Key Prop នៅក្នុង `BlogPost` ប្រើសម្រាប់អ្វី?',
      options: [
        'Update State',
        'Identify Unique Posts',
        'Handle Events',
        'Style Elements'
      ],
      correct: 1,
      explanation: 'Key Prop Identify Unique Posts ក្នុង List Rendering៕'
    },
    {
      question: 'តើ CSS Media Query នៅក្នុង App នេះជួយអ្វី?',
      options: [
        'Fetch Data',
        'Make Design Responsive',
        'Update State',
        'Handle Navigation'
      ],
      correct: 1,
      explanation: 'CSS Media Query ធ្វើឱ្យ Design Responsive សម្រាប់ Screen Sizes ផ្សេងៗ៕'
    },
    {
      question: 'តើ `Routes` Component នៅក្នុង React Router ធ្វើអ្វី?',
      options: [
        'Define Navigation Links',
        'Define Routes សម្រាប់ Pages',
        'Update State',
        'Render Posts'
      ],
      correct: 1,
      explanation: '`Routes` Define Routes សម្រាប់ Pages ផ្សេងៗ៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្កើត Blog Website សាមញ្ញជាមួយ Navigation៕

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title៖ "React Blog Website"៕
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`៕

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, Babel, និង React Router DOM៕
   - បង្កើត Functional Component \`BlogPost\` ដែល:
     - ទទួល Prop \`post\` (Object ដែលមាន \`id\`, \`title\`, \`content\`)៕
     - Render \`<h3>\` សម្រាប់ Title និង \`<p>\` សម្រាប់ Content៕
   - បង្កើត Functional Components \`Home\` (Render \`<h2>ទំព័រដើម</h2>\`) និង \`Blog\` (Render List នៃ Blog Posts)៕
   - បង្កើត Functional Component \`App\` ដែល:
     - ប្រើ \`BrowserRouter\`, \`Routes\`, \`Route\`, និង \`Link\`៕
     - Render Navigation Links សម្រាប់ "ទំព័រដើម" និង "អត្ថបទ"៕
     - Define Routes សម្រាប់ \`Home\` (path="/") និង \`Blog\` (path="/blog")៕
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\`៕

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - កំណត់ \`font-size: 18px; margin: 10px;\` សម្រាប់ \`nav a\`៕
     - កំណត់ \`border: 1px solid #ccc; padding: 10px; margin: 10px;\` សម្រាប់ Blog Post \`<div>\` (className="post")៕
     - កំណត់ Media Query សម្រាប់ Responsive Design (\`@media (max-width: 600px) { .post { padding: 5px; } }\`)៕

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស៕ Navigation គួរដំណើរការដោយមិន Refresh Page និង Blog Page គួរបង្ហាញអត្ថបទ៕
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Blog Website</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    nav a {
      font-size: 18px;
      margin: 10px;
    }
    .post {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
    }
    @media (max-width: 600px) {
      .post {
        padding: 5px;
      }
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
    function BlogPost({ post }) {
      return (
        <div className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      );
    }
    function Home() {
      return <h2>ទំព័រដើម</h2>;
    }
    function Blog() {
      const posts = [
        { id: 1, title: 'អត្ថបទទី១', content: 'នេះជាអត្ថបទទី១' },
        { id: 2, title: 'អត្ថបទទី២', content: 'នេះជាអត្ថបទទី២' }
      ];
      return (
        <div>
          <h2>អត្ថបទ</h2>
          {posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      );
    }
    function App() {
      return (
        <BrowserRouter>
          <nav>
            <Link to="/">ទំព័រដើម</Link> | <Link to="/blog">អត្ថបទ</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
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

export default ReactLesson6_3Content;