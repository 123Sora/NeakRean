import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson5_2Content: LessonContent = {
  title: 'Server និង Client Components',
  objectives: [
    'យល់ដឹងពី Server Components និង Client Components នៅក្នុង App Router',
    'ប្រើ `"use client"` Directive សម្រាប់ Client Components',
    'អនុវត្ត Server Components សម្រាប់ Server-side Rendering',
    'បង្កើន Performance ដោយការប្រើ Server និង Client Components ត្រឹមត្រូវ',
  ],
  content: `
# Server និង Client Components 🖥️

---

នៅក្នុង **App Router**, Next.js បែងចែក Components ជា **Server Components** និង **Client Components** ដើម្បីបង្កើន Performance និងផ្តល់ភាពបត់បែន។

---

## 1. Server Components

**Server Components** គឺជា Components ដែល Render នៅ Server-side ជាមួយ React Server Components (RSC)។

**អត្ឥប្រយោជន៍:**
- **Reduce Client-side JavaScript:** កាត់បន្ថយ Bundle Size។
- **Direct Database Access:** អាច Fetch Data នៅ Server-side។
- **Security:** ទុក Sensitive Data (ឧ. API Keys) នៅ Server។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/server-component/page.tsx
import { db } from '../../lib/db';

async function getData() {
  // ឧទាហរណ៍: Fetch Data ពី Database
  return { message: 'ទិន្នន័យពី Server Component' };
}

export default async function ServerComponentPage() {
  const data = await getData();

  return (
    <div className="container">
      <h1>Server Component</h1>
      <p>{data.message}</p>
    </div>
  );
}
\`\`\`

**ចំណាំ:** Server Components គឺជា Default នៅក្នុង App Router។

---

## 2. Client Components

**Client Components** គឺជា Components ដែល Render នៅ Client-side និងអនុញ្ញាតឱ្យប្រើ Interactive Features (ឧ. \`useState\`, \`useEffect\`)។

**ការប្រើ \`"use client"\`:**
- បន្ថែម \`"use client"\` Directive នៅខាងលើ Component ដើម្បីបញ្ជាក់ថាវាជា Client Component។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/client-component/page.tsx
'use client';

import { useState } from 'react';

export default function ClientComponentPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Client Component</h1>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
\`\`\`

---

## 3. ការប្រើ Server និង Client Components រួមគ្នា

**ឧទាហរណ៍:**
\`\`\`tsx
// app/mixed/page.tsx
import ClientCounter from './ClientCounter';

async function getData() {
  // ឧទាហរណ៍: Fetch Data
  return { message: 'ទិន្នន័យពី Server' };
}

export default async function MixedPage() {
  const data = await getData();

  return (
    <div className="container">
      <h1>Mixed Page</h1>
      <p>{data.message}</p>
      <ClientCounter />
    </div>
  );
}
\`\`\`

\`\`\`tsx
// app/mixed/ClientCounter.tsx
'use client';

import { useState } from 'react';

export default function ClientCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
\`\`\`

\`\`\`css
/* styles/globals.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
\`\`\`

**លទ្ធផល:**
- Server Component Fetch Data នៅ Server-side។
- Client Component គ្រប់គ្រង Interactivity នៅ Client-side។

---

## 4. គន្លឹះសម្រាប់ Server និង Client Components

- **ប្រើ Server Components សម្រាប់ Data Fetching:** ដើម្បីកាត់បន្ថយ Client-side JavaScript។
- **ប្រើ Client Components សម្រាប់ Interactivity:** ដូចជា Forms ឬ State Management។
- **ជៀសវាង Heavy Logic នៅ Client-side:** ដើម្បីបង្កើន Performance។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/app/building-your-application/rendering](https://nextjs.org/docs/app/building-your-application/rendering)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Server Component</h3>
<p>បង្កើត Server Component នៅក្នុង <code>app/server-component/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/server-component/page.tsx
async function getData() {
  return { message: 'ទិន្នន័យពី Server Component' };
}

export default async function ServerComponentPage() {
  const data = await getData();

  return (
    <div className="container">
      <h1>Server Component</h1>
      <p>{data.message}</p>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Client Component</h3>
<p>បង្កើត Client Component នៅក្នុង <code>app/client-component/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/client-component/page.tsx
'use client';

import { useState } from 'react';

export default function ClientComponentPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Client Component</h1>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Server Components Render នៅណា?',
      options: [
        'Client-side',
        'Server-side',
        'Browser Console',
        'Database'
      ],
      correct: 1,
      explanation: 'Server Components Render នៅ Server-side។'
    },
    {
      question: 'តើ Directive ណាមួយបញ្ជាក់ថា Component ជា Client Component?',
      options: [
        '"use server"',
        '"use client"',
        '"use effect"',
        '"use state"'
      ],
      correct: 1,
      explanation: '`"use client"` Directive បញ្ជាក់ថា Component ជា Client Component។'
    },
    {
      question: 'តើ Server Components មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បន្ថែម Interactivity',
        'កាត់បន្ថយ Client-side JavaScript',
        'បង្កើត API Routes',
        'Optimize Images'
      ],
      correct: 1,
      explanation: 'Server Components កាត់បន្ថយ Client-side JavaScript។'
    },
    {
      question: 'តើ Client Components អាចប្រើ Hook ណាមួយបាន?',
      options: [
        'useState',
        'getStaticProps',
        'getServerSideProps',
        'async/await'
      ],
      correct: 0,
      explanation: 'Client Components អាចប្រើ `useState` និង Hooks ផ្សេងទៀត។'
    },
    {
      question: 'តើ Component ណាមួយជា Default នៅក្នុង App Router?',
      options: [
        'Client Components',
        'Server Components',
        'Static Components',
        'Dynamic Components'
      ],
      correct: 1,
      explanation: 'Server Components ជា Default នៅក្នុង App Router។'
    },
    {
      question: 'តើអ្នកអាច Fetch Data នៅក្នុង Server Components បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `useEffect`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `getStaticProps`'
      ],
      correct: 0,
      explanation: 'Server Components អាច Fetch Data ដោយប្រើ `async/await`។'
    },
    {
      question: 'តើ Client Components គួរប្រើសម្រាប់អ្វី?',
      options: [
        'Data Fetching',
        'Interactivity',
        'Metadata Management',
        'Image Optimization'
      ],
      correct: 1,
      explanation: 'Client Components គួរប្រើសម្រាប់ Interactivity ដូចជា Forms។'
    },
    {
      question: 'តើ Server Components អាចប្រើ `useState` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `"use client"`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`'
      ],
      correct: 1,
      explanation: 'Server Components មិនអាចប្រើ `useState` បាន។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Server និង Client Components រួមគ្នាបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: 'Server និង Client Components អាចប្រើរួមគ្នាបាន។'
    },
    {
      question: 'តើ Server Components មានអត្ថប្រយោជន៍អ្វីសម្រាប់ Security?',
      options: [
        'បន្ថែម Interactivity',
        'ទុក Sensitive Data នៅ Server',
        'Optimize Images',
        'Preload Fonts'
      ],
      correct: 1,
      explanation: 'Server Components ទុក Sensitive Data នៅ Server ដើម្បីបង្កើន Security។'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Project ដែលប្រើ Server និង Client Components នៅក្នុង App Router។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-components-app --typescript\` និងជ្រើសរើស App Router។

2. **បង្កើត Root Layout:**
   - កែ File \`app/layout.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, Metadata (\`title: 'Server and Client Components'\`, \`description: 'Website ដែលបង្កើតជាមួយ Next.js App Router'\`), និង Import \`styles/globals.css\`។

3. **បង្កើត Server Component:**
   - បង្កើត File \`app/server-component/page.tsx\` ដែល Fetch Data (Hard-coded) និងបង្ហាញ \`<h1>Server Component</h1>\` និង \`<p>{message}</p>\`។

4. **បង្កើត Client Component:**
   - បង្កើត File \`app/client-component/page.tsx\` ដែលប្រើ \`"use client"\`, \`useState\` Hook ដើម្បីគ្រប់គ្រង Counter, និងបង្ហាញ \`<h1>Client Component</h1>\`, \`<p>ចំនួន: {count}</p>\`, និង \`<button>បន្ថែម</button>\`។

5. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.container\` Class។
     - Styling សម្រាប់ \`<button>\`។

6. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000/server-component\` (Server Component)
     - \`http://localhost:3000/client-component\` (Client Component)

**ការណែនាំ:** ពិនិត្យ Network Tab (F12) ដើម្បីឃើញ Client-side JavaScript សម្រាប់ Client Component។
    `,
    solution: `
## styles/globals.css 
\`\`\`text
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
\`\`\`

## app/layout.tsx 
\`\`\`text
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Server and Client Components',
  description: 'Website ដែលបង្កើតជាមួយ Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

## app/server-component/page.tsx 
\`\`\`text
async function getData() {
  return { message: 'ទិន្នន័យពី Server Component' };
}

export default async function ServerComponentPage() {
  const data = await getData();

  return (
    <div className="container">
      <h1>Server Component</h1>
      <p>{data.message}</p>
    </div>
  );
}
\`\`\`

## app/client-component/page.tsx 
\`\`\`text
'use client';

import { useState } from 'react';

export default function ClientComponentPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Client Component</h1>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
}
  \`\`\`
`
  }
};

export default NextLesson5_2Content;