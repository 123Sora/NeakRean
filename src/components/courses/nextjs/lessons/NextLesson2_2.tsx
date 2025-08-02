import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson2_2Content: LessonContent = {
  title: 'Data Fetching Strategies',
  objectives: [
    'យល់ដឹងពី Data Fetching Methods នៅក្នុង Next.js Pages Router',
    'ប្រើ `getStaticProps` សម្រាប់ Static Site Generation (SSG)',
    'ប្រើ `getServerSideProps` សម្រាប់ Server-Side Rendering (SSR)',
    'ប្រើ Client-Side Fetching ជាមួយ `useEffect`',
  ],
  content: `
# Data Fetching Strategies 📊

---

Next.js Pages Router ផ្តល់នូវវិធីសាស្ត្រច្រើនសម្រាប់ Data Fetching: **Static Site Generation (SSG)**, **Server-Side Rendering (SSR)**, និង **Client-Side Rendering (CSR)**។ មេរៀននេះនឹងពន្យល់ពីវិធីសាស្ត្រទាំងនេះ។

---

## 1. ទិដ្ឋភាពទូទៅនៃ Data Fetching

Next.js អនុញ្ញាតឱ្យអ្នកទាញទិន្នន័យនៅពេលផ្សេងៗគ្នា:
- **SSG (\`getStaticProps\`):** ទាញទិន្នន័យនៅ Build Time។
- **SSR (\`getServerSideProps\`):** ទាញទិន្នន័យនៅ Request Time។
- **CSR (\`useEffect\`):** ទាញទិន្នន័យនៅ Client-Side។

---

## 2. Static Site Generation (SSG) with \`getStaticProps\`

\`getStaticProps\` ទាញទិន្នន័យនៅ Build Time និងបង្កើត Static HTML។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/posts.tsx
import type { NextPage } from 'next';

type Post = { id: number; title: string };

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
};

const Posts: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="container">
      <h1>បញ្ជីអត្ថបទ</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
\`\`\`

**លទ្ធផល:** ទំព័រនឹងបង្ហាញបញ្ជីអត្ថបទដែលទាញពី API នៅ Build Time។

---

## 3. Server-Side Rendering (SSR) with \`getServerSideProps\`

\`getServerSideProps\` ទាញទិន្នន័យនៅពេលមាន Request។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/user/[id].tsx
import type { NextPage } from 'next';

type User = { id: number; name: string };

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
  const user: User = await res.json();

  return {
    props: { user },
  };
};

const User: NextPage<{ user: User }> = ({ user }) => {
  return (
    <div className="container">
      <h1>អ្នកប្រើប្រាស់: {user.name}</h1>
    </div>
  );
};

export default User;
\`\`\`

**លទ្ធផល:** ទំព័រនឹងបង្ហាញឈ្មោះអ្នកប្រើប្រាស់ដែលទាញនៅ Request Time។

---

## 4. Client-Side Rendering (CSR) with \`useEffect\`

CSR ប្រើ \`useEffect\` ដើម្បីទាញទិន្នន័យនៅ Client-Side។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/todos.tsx
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

type Todo = { id: number; title: string };

const Todos: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data: Todo[] = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>ការងារត្រូវធ្វើ</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
\`\`\`

**លទ្ធផល:** ទំព័រនឹងបង្ហាញបញ្ជីការងារដែលទាញនៅ Client-Side។

---

## 5. ការប្រៀបធៀប Data Fetching Methods

| វិធីសាស្ត្រ       | ពេលទាញទិន្នន័យ | អត្ថប្រយោជន៍                     | ករណីប្រើប្រាស់                     |
|---------------------|-------------------|-----------------------------------|-------------------------------------|
| **SSG**            | Build Time        | លឿន, SEO-friendly                | Static Content (Blog, Docs)         |
| **SSR**            | Request Time      | Dynamic Data, SEO-friendly        | User-specific Data (User Profile)   |
| **CSR**            | Client-Side       | Interactive, Real-time Updates    | Dashboards, Real-time Apps          |

---

## 6. គន្លឹះសម្រាប់ Data Fetching

- **ជ្រើសរើសវិធីសាស្ត្រត្រឹមត្រូវ:** SSG សម្រាប់ Static Content, SSR សម្រាប់ Dynamic Data, CSR សម្រាប់ Real-time Updates។
- **ប្រើ Error Handling:** បន្ថែម Try-Catch នៅក្នុង Fetch Functions។
- **Optimize Performance:** ប្រើ Incremental Static Regeneration (ISR) ជាមួយ \`getStaticProps\` សម្រាប់ Dynamic Static Content។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/data-fetching](https://nextjs.org/docs/data-fetching)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ SSG ជាមួយ \`getStaticProps\`</h3>
<p>ទាញបញ្ជីអត្ថបទនៅ Build Time។</p>
<pre><code class="language-tsx">
// pages/posts.tsx
import type { NextPage } from 'next';

type Post = { id: number; title: string };

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
};

const Posts: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="container">
      <h1>បញ្ជីអត្ថបទ</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ CSR ជាមួយ \`useEffect\`</h3>
<p>ទាញបញ្ជីការងារនៅ Client-Side។</p>
<pre><code class="language-tsx">
// pages/todos.tsx
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

type Todo = { id: number; title: string };

const Todos: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data: Todo[] = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>ការងារត្រូវធ្វើ</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `getStaticProps` ទាញទិន្នន័យនៅពេលណា?',
      options: [
        'Request Time',
        'Build Time',
        'Client-Side',
        'Run Time'
      ],
      correct: 1,
      explanation: '`getStaticProps` ទាញទិន្នន័យនៅ Build Time សម្រាប់ SSG។'
    },
    {
      question: 'តើ `getServerSideProps` ប្រើសម្រាប់អ្វី?',
      options: [
        'Static Content',
        'Dynamic Data នៅ Request Time',
        'Client-Side Fetching',
        'API Routes'
      ],
      correct: 1,
      explanation: '`getServerSideProps` ទាញ Dynamic Data នៅ Request Time សម្រាប់ SSR។'
    },
    {
      question: 'តើ Hook ណាមួយប្រើសម្រាប់ CSR?',
      options: [
        'useRouter',
        'useEffect',
        'useState',
        'useContext'
      ],
      correct: 1,
      explanation: '`useEffect` ប្រើសម្រាប់ Client-Side Data Fetching។'
    },
    {
      question: 'តើ SSG មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'Real-time Updates',
        'SEO-friendly, Fast Performance',
        'Dynamic Data',
        'Database Management'
      ],
      correct: 1,
      explanation: 'SSG ផ្តល់នូវ SEO-friendly Pages និង Fast Performance។'
    },
    {
      question: 'តើ `getStaticProps` ត្រលប់តម្លៃអ្វី?',
      options: [
        'Component',
        'Object ដែលមាន `props`',
        'Array',
        'Function'
      ],
      correct: 1,
      explanation: '`getStaticProps` ត្រលប់ Object ដែលមាន `props` សម្រាប់ Component។'
    },
    {
      question: 'តើ SSR ស័ក្តិសមសម្រាប់ករណីណា?',
      options: [
        'Static Blog',
        'User Profile ដែលផ្លាស់ប្តូរញឹកញាប់',
        'E-commerce Products',
        'Documentation'
      ],
      correct: 1,
      explanation: 'SSR ស័ក្តិសមសម្រាប់ Dynamic Data ដូចជា User Profile។'
    },
    {
      question: 'តើ CSR ប្រើនៅពេលណា?',
      options: [
        'SEO Optimization',
        'Static Content',
        'Real-time Updates',
        'Build Time'
      ],
      correct: 2,
      explanation: 'CSR ស័ក្តិសមសម្រាប់ Real-time Updates ដូចជា Dashboards�।'
    },
    {
      question: 'តើ `getServerSideProps` ទទួល Parameter អ្វី?',
      options: [
        'props',
        'context',
        'state',
        'router'
      ],
      correct: 1,
      explanation: '`getServerSideProps` ទទួល `context` Parameter ដែលមាន `params`, `req`, `res`។'
    },
    {
      question: 'តើ Incremental Static Regeneration (ISR) ជាអ្វី?',
      options: [
        'Client-Side Fetching',
        'Dynamic Data Fetching',
        'Re-generate Static Pages នៅ Run Time',
        'Database Management'
      ],
      correct: 2,
      explanation: 'ISR អនុញ្ញាតឱ្យ Re-generate Static Pages នៅ Run Time ដោយប្រើ `revalidate`។'
    },
    {
      question: 'តើអ្វីជាគុណវិបត្តិនៃ CSR?',
      options: [
        'Fast Performance',
        'SEO-friendly',
        'Poor SEO',
        'Dynamic Data'
      ],
      correct: 2,
      explanation: 'CSR មានគុណវិបត្តិគឺ Poor SEO ព្រោះទិន្នន័យត្រូវបានទាញនៅ Client-Side។'
    },
    {
      question: 'តើ `getStaticProps` អាចប្រើជាមួយ Dynamic Routes បានទេ?',
      options: [
        'បាន, ដោយប្រើ `getStaticPaths`',
        'មិនបាន',
        'បាន, ដោយប្រើ `useEffect`',
        'បាន, ដោយប្រើ `getServerSideProps`'
      ],
      correct: 0,
      explanation: '`getStaticProps` អាចប្រើជាមួយ Dynamic Routes ដោយប្រើ `getStaticPaths`។'
    },
    {
      question: 'តើវិធីសាស្ត្រណាដែលមាន Latency ទាបបំផុត?',
      options: [
        'SSR',
        'SSG',
        'CSR',
        'API Routes'
      ],
      correct: 1,
      explanation: 'SSG មាន Latency ទាបបំផុតព្រោះ Pages ត្រូវបានបង្កើតនៅ Build Time។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `useEffect` នៅក្នុង `getStaticProps` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវមាន `useState`',
        'បាន, ប៉ុន្តែត្រូវមាន `useRouter`'
      ],
      correct: 1,
      explanation: '`getStaticProps` ដំណើរការនៅ Server-Side ដូច្នេះមិនអាចប្រើ `useEffect`។'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Project ដែលប្រើ \`getStaticProps\` និង CSR សម្រាប់ Data Fetching។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-data-app\` និងជ្រើសរើស TypeScript។

2. **បង្ផើត SSG Page:**
   - បង្ផើត File \`pages/posts.tsx\` ដែលប្រើ \`getStaticProps\` ដើម្បីទាញបញ្ជីអត្ថបទពី \`https://jsonplaceholder.typicode.com/posts\`។
   - បង្ហាញអត្ថបទជា \`<ul>\` ដែលមាន \`<li>\` សម្រាប់ \`title\` នៃអត្ថបទនីមួយៗ។

3. **បង្ផើត CSR Page:**
   - បង្ផើត File \`pages/todos.tsx\` ដែលប្រើ \`useEffect\` និង \`useState\` ដើម្បីទាញបញ្ជីការងារពី \`https://jsonplaceholder.typicode.com/todos\`។
   - បង្ហាញការងារជា \`<ul>\` ដែលមាន \`<li>\` សម្រាប់ \`title\` នៃការងារនីមួយៗ។

4. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។

5. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000/posts\`
     - \`http://localhost:3000/todos\`

**ការណែនាំ:** ពិនិត្យ Console នៅក្នុង Browser (F12) ឬ Terminal សម្រាប់ Error Messages។
    `,
    solution: `
## styles/globals.css 
\`\`\`text
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

h1 {
  color: #007bff;
}

.container {
  text-align: center;
  padding: 20px;
}
\`\`\`

## pages/posts.tsx 
\`\`\`text
import type { NextPage } from 'next';

type Post = { id: number; title: string };

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
};

const Posts: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="container">
      <h1>បញ្ជីអត្ថបទ</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
\`\`\`

## pages/todos.tsx 
\`\`\`text
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

type Todo = { id: number; title: string };

const Todos: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data: Todo[] = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>ការងារត្រូវធ្វើ</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
\`\`\`
`
  }
};

export default NextLesson2_2Content;