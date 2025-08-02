import type { LessonContent } from '../../../../types/LessonTypes';

const NextLesson2_3Content: LessonContent = {
  title: 'API Routes',
  objectives: [
    'យល់ដឹងពី API Routes នៅក្នុង Next.js Pages Router',
    'បង្ផើត API Endpoint សាមញ្ញ',
    'គ្រប់គ្រង HTTP Methods (GET, POST, ល)',
    'ភ្ជាប់ API Routes ជាមួយ Frontend',
  ],
  content: `
# API Routes 🛠️

---

**API Routes** នៅក្នុង Next.js Pages Router អនុញ្ញាតឱ្យអ្នកបង្ផើត Backend API Endpoints នៅក្នុង Folder \`pages/api\`។ វាធ្វើឱ្យ Next.js ក្លាយជា Full-stack Framework។

---

## 1. អ្វីទៅជា API Routes?

API Routes គឺជា Files នៅក្នុង Folder \`pages/api\` ដែលដំណើរការជា API Endpoints។

**ឧទាហរណ៍:**
- \`pages/api/hello.ts\` → \`/api/hello\`

---

## 2. បង្ផើត API Route សាមញ្ញ

**ឧទាហរណ៍:**
\`\`\`ts
// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ message: 'សួស្តីពី API!' });
}
\`\`\`

**លទ្ធផល:** ចូលទៅ \`http://localhost:3000/api/hello\` នឹងត្រលប់ JSON: \`{"message": "សួស្តីពី API!"}\`។

---

## 3. គ្រប់គ្រង HTTP Methods

API Routes អាចគ្រប់គ្រង Methods ដូចជា GET, POST, PUT, DELETE។

**ឧទាហរណ៍:**
\`\`\`ts
// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | { id: number; name: string }[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    res.status(200).json([{ id: 1, name: 'សុខ' }, { id: 2, name: 'លី' }]);
  } else if (req.method === 'POST') {
    const { name } = req.body;
    res.status(201).json({ message: \`បានបង្ផើតអ្នកប្រើ: \${name}\` });
  } else {
    res.status(405).json({ message: 'Method មិនអនុញ្ញាត' });
  }
}
\`\`\`

**លទ្ធផល:**
- GET \`/api/users\` → \`[{"id": 1, "name": "សុខ"}, {"id": 2, "name": "លី"}]\`
- POST \`/api/users\` (with body \`{"name": "សុភាព"}\`) → \`{"message": "បានបង្ផើតអ្នកប្រើ: សុភាព"}\`

---

## 4. ភ្ជាប់ API Routes ជាមួយ Frontend

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/index.tsx
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

type User = { id: number; name: string };

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users');
      const data: User[] = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>អ្នកប្រើប្រាស់</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
\`\`\`

**លទ្ធផល:** Homepage នឹងបង្ហាញបញ្ជីអ្នកប្រើប្រាស់ដែលទាញពី \`/api/users\`។

---

## 5. គន្លឹះសម្រាប់ API Routes

- **ប្រើ TypeScript:** ប្រើ \`NextApiRequest\` និង \`NextApiResponse\` សម្រាប់ Type Safety។
- **Error Handling:** បន្ថែម Try-Catch នៅក្នុង API Handlers។
- **CORS:** ប្រើ Middleware ប្រសិនបើត្រូវការគ្រប់គ្រង Cross-Origin Requests។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/api-routes](https://nextjs.org/docs/api-routes)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្ផើត API Route សាមញ្ញ</h3>
<p>បង្ផើត File <code>pages/api/greeting.ts</code>។</p>
<pre><code class="language-ts">
// pages/api/greeting.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ message: 'សួស្តីពី API!' });
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ គ្រប់គ្រង POST Request</h3>
<p>បង្ផើត File <code>pages/api/submit.ts</code>។</p>
<pre><code class="language-ts">
// pages/api/submit.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { name } = req.body;
    res.status(201).json({ message: \`សួស្តី, \${name}!\` });
  } else {
    res.status(405).json({ message: 'Method មិនអនុញ្ញាត' });
  }
}
</code></pre>
<pre><code class="language-tsx">
// pages/index.tsx
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="container">
      <h1>សាកល្បង API</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="បញ្ចូលឈ្មោះ"
      />
      <button onClick={handleSubmit}>បញ្ជូន</button>
      <p>{message}</p>
    </div>
  );
};

export default Home;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ API Routes ត្រូវបានបង្ផើតនៅ Folder ណា?',
      options: [
        'pages/',
        'public/',
        'pages/api/',
        'styles/'
      ],
      correct: 2,
      explanation: 'API Routes ត្រូវបានបង្ផើតនៅក្នុង Folder `pages/api/`។'
    },
    {
      question: 'តើ File `pages/api/hello.ts` បង្ផើត Endpoint អ្វី?',
      options: [
        '/hello',
        '/api/hello',
        '/pages/hello',
        '/api'
      ],
      correct: 1,
      explanation: '`pages/api/hello.ts` បង្ផើត Endpoint `/api/hello`។'
    },
    {
      question: 'តើ Handler Function នៅក្នុង API Route ទទួល Parameters អ្វី?',
      options: [
        'req, res',
        'props, state',
        'router, context',
        'data, error'
      ],
      correct: 0,
      explanation: 'Handler Function ទទួល `req` (NextApiRequest) និង `res` (NextApiResponse)។'
    },
    {
      question: 'តើ Method ណាមួយប្រើសម្រាប់ GET Request?',
      options: [
        'req.method === "POST"',
        'req.method === "GET"',
        'req.method === "PUT"',
        'req.method === "DELETE"'
      ],
      correct: 1,
      explanation: '`req.method === "GET"` ប្រើសម្រាប់ GET Request។'
    },
    {
      question: 'តើអ្នកអាចទាញ Request Body ដោយរបៀបណា?',
      options: [
        'req.params',
        'req.body',
        'req.query',
        'req.headers'
      ],
      correct: 1,
      explanation: '`req.body` ប្រើសម្រាប់ទាញ Request Body នៅក្នុង POST Request។'
    },
    {
      question: 'តើ Status Code ណាមួយតំណាងឱ្យ "Created"?',
      options: [
        '200',
        '201',
        '404',
        '500'
      ],
      correct: 1,
      explanation: 'Status Code 201 តំណាងឱ្យ "Created"។'
    },
    {
      question: 'តើអ្នកអាចប្រើ API Routes ជាមួយ Frontend ដោយរបៀបណា?',
      options: [
        'ប្រើ `useEffect` និង `fetch`',
        'ប្រើ `getStaticProps`',
        'ប្រើ `useRouter`',
        'ប្រើ `getServerSideProps`'
      ],
      correct: 0,
      explanation: '`useEffect` និង `fetch` ប្រើសម្រាប់ទាញទិន្នន័យពី API Routes នៅ Frontend។'
    },
    {
      question: 'តើ API Routes អនុញ្ញាតឱ្យធ្វើអ្វី?',
      options: [
        'បង្ផើត Static Pages',
        'បង្ផើត Backend API Endpoints',
        'កែ CSS',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: 'API Routes អនុញ្ញាតឱ្យបង្ផើត Backend API Endpoints។'
    },
    {
      question: 'តើអ្នកអាចឆ្លើយតប JSON ដោយរបៀបណា?',
      options: [
        'res.status(200).send()',
        'res.status(200).json()',
        'res.write()',
        'res.end()'
      ],
      correct: 1,
      explanation: '`res.status(200).json()` ប្រើសម្រាប់ឆ្លើយតប JSON។'
    },
    {
      question: 'តើ Status Code ណាមួយតំណាងឱ្យ "Method Not Allowed"?',
      options: [
        '200',
        '201',
        '405',
        '500'
      ],
      correct: 2,
      explanation: 'Status Code 405 តំណាងឱ្យ "Method Not Allowed"។'
    },
    {
      question: 'តើ TypeScript Types ណាមួយប្រើសម្រាប់ API Routes?',
      options: [
        'NextPage, NextApi',
        'NextApiRequest, NextApiResponse',
        'useRouter, useEffect',
        'getStaticProps, getServerSideProps'
      ],
      correct: 1,
      explanation: '`NextApiRequest` និង `NextApiResponse` ប្រើសម្រាប់ Type Safety នៅក្នុង API Routes។'
    },
    {
      question: 'តើអ្នកអាចទាញ Query Parameters ពី API Route ដោយរបៀបណា?',
      options: [
        'req.body',
        'req.params',
        'req.query',
        'req.headers'
      ],
      correct: 2,
      explanation: '`req.query` ប្រើសម្រាប់ទាញ Query Parameters។'
    },
    {
      question: 'តើ API Routes អាចគ្រប់គ្រង HTTP Methods ណាខ្លះ?',
      options: [
        'GET តែប៉ុណ្ណោះ',
        'POST តែប៉ុណ្ណោះ',
        'GET, POST, PUT, DELETE',
        'CSS, HTML'
      ],
      correct: 2,
      explanation: 'API Routes អាចគ្រប់គ្រង HTTP Methods ដូចជា GET, POST, PUT, DELETE។'
    }
  ],
  lab: {
    task: `
បង្ផើត Next.js Project ដែលមាន API Route និង Frontend ដើម្បីទាញទិន្នន័យ។

**តម្រូវការ:**

1. **បង្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-api-app\` និងជ្រើសរើស TypeScript។

2. **បង្ផើត API Route:**
   - បង្ផើត File \`pages/api/users.ts\` ដែលឆ្លើយតបនឹង GET Request ដោយត្រលប់ Array នៃអ្នកប្រើប្រាស់ (\`[{ id: 1, name: 'សុខ' }, { id: 2, name: 'លី' }]\`).
   - បន្ថែម POST Request Handler ដែលទទួល \`name\` ពី Request Body និងត្រលប់ \`{"message": "បានបង្ផើតអ្នកប្រើ: <name>"}\`។

3. **បង្ផើត Frontend:**
   - កែ File \`pages/index.tsx\` ដើម្បីទាញបញ្ជីអ្នកប្រើប្រាស់ពី \`/api/users\` ដោយប្រើ \`useEffect\` និង \`useState\`។
   - បង្ហាញអ្នកប្រើប្រាស់ជា \`<ul>\` ដែលមាន \`<li>\` សម្រាប់ \`name\` នៃអ្នកប្រើប្រាស់នីមួយៗ។

4. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។

5. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង:
     - \`http://localhost:3000\` (Frontend)
     - \`http://localhost:3000/api/users\` (API)

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

## pages/api/users.ts 
\`\`\`text
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | { id: number; name: string }[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    res.status(200).json([{ id: 1, name: 'សុខ' }, { id: 2, name: 'លី' }]);
  } else if (req.method === 'POST') {
    const { name } = req.body;
    res.status(201).json({ message: \`បានបង្ផើតអ្នកប្រើ: \${name}\` });
  } else {
    res.status(405).json({ message: 'Method មិនអនុញ្ញាត' });
  }
}
\`\`\`

## pages/index.tsx 
\`\`\`text
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

type User = { id: number; name: string };

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users');
      const data: User[] = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>អ្នកប្រើប្រាស់</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
\`\`\`
`
  }
};

export default NextLesson2_3Content;