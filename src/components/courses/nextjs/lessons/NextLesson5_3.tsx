import type { LessonContent } from '../../../../types/LessonTypes';

const NextLesson5_3Content: LessonContent = {
  title: 'Data Fetching នៅក្នុង App Router',
  objectives: [
    'យល់ដឹងពី Data Fetching នៅក្នុង App Router',
    'ប្រើ `async/await` សម្រាប់ Fetch Data នៅក្នុង Server Components',
    'អនុវត្ត Dynamic Data Fetching ជាមួយ API',
    'គ្រប់គ្រង Loading States និង Error Handling',
  ],
  content: `
# Data Fetching នៅក្នុង App Router 📊

---

នៅក្នុង **App Router**, Data Fetching ត្រូវបានសម្រួលដោយប្រើ \`async/await\` នៅក្នុង **Server Components**។ វាជំនួស \`getStaticProps\` និង \`getServerSideProps\` នៅក្នុង Pages Router។

---

## 1. Data Fetching នៅក្នុង Server Components

**Server Components** អនុញ្ញាតឱ្យ Fetch Data ដោយផ្ទាល់នៅក្នុង Component ដោយប្រើ \`async/await\`។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts;
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="container">
      <h1>បញ្ជីការបង្ហោះ</h1>
      <ul>
        {posts.slice(0, 5).map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

**លទ្ធផល:** បង្ហាញបញ្ជីការបង្ហោះពី API។

---

## 2. គ្រប់គ្រង Loading States

ប្រើ **Loading UI** នៅក្នុង \`app/loading.tsx\` ដើម្បីបង្ហាញ Loading State។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/loading.tsx
export default function Loading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុក...</p>
    </div>
  );
}
\`\`\`

**លទ្ធផល:** បង្ហាញ "កំពុងផ្ទុក..." អំឡុងពេល Fetch Data។

---

## 3. គ្រប់គ្រង Errors

ប្រើ **Error Boundary** នៅក្នុង \`app/error.tsx\` ដើម្បីគ្រប់គ្រង Errors។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container">
      <h1>មានបញ្ហា!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>សាកល្បងម្តងទៀត</button>
    </div>
  );
}
\`\`\`

---

## 4. Dynamic Data Fetching

ប្រើ \`fetch\` ជាមួយ Option \`cache\` ឬ \`revalidate\` ដើម្បីគ្រប់គ្រង Caching។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/dynamic-posts/page.tsx
async function getDynamicPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }, // Revalidate រៀងរាល់ 60 វិនាទី
  });
  const posts = await res.json();
  return posts;
}

export default async function DynamicPostsPage() {
  const posts = await getDynamicPosts();

  return (
    <div className="container">
      <h1>បញ្ជីការបង្ហោះ (Dynamic)</h1>
      <ul>
        {posts.slice(0, 5).map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Data Fetching

- **ប្រើ \`async/await\`:** សម្រាប់ Data Fetching នៅក្នុង Server Components។
- **បន្ថែម Loading UI:** នៅក្នុង \`app/loading.tsx\`។
- **គ្រប់គ្រង Errors:** ប្រើ \`app/error.tsx\`។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/app/building-your-application/data-fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Data Fetching នៅក្នុង Server Component</h3>
<p>Fetch Posts ពី API នៅក្នុង <code>app/posts/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts;
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="container">
      <h1>បញ្ជីការបង្ហោះ</h1>
      <ul>
        {posts.slice(0, 5).map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Loading និង Error Handling</h3>
<p>បង្កើត Loading UI នៅក្នុង <code>app/loading.tsx</code> និង Error Boundary នៅក្នុង <code>app/error.tsx</code>។</p>
<pre><code class="language-tsx">
// app/loading.tsx
export default function Loading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុក...</p>
    </div>
  );
}
</code></pre>
<pre><code class="language-tsx">
// app/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container">
      <h1>មានបញ្ហា!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>សាកល្បងម្តងទៀត</button>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Data Fetching នៅក្នុង App Router ប្រើអ្វីជំនួស `getStaticProps`?',
      options: [
        'useState',
        'async/await',
        'useEffect',
        'getServerSideProps'
      ],
      correct: 1,
      explanation: 'App Router ប្រើ `async/await` សម្រាប់ Data Fetching នៅក្នុង Server Components។'
    },
    {
      question: 'តើ File ណាមួយប្រើសម្រាប់ Loading UI?',
      options: [
        'app/page.tsx',
        'app/loading.tsx',
        'app/error.tsx',
        'app/layout.tsx'
      ],
      correct: 1,
      explanation: '`app/loading.tsx` ប្រើសម្រាប់ Loading UI។'
    },
    {
      question: 'តើ File ណាមួយប្រើសម្រាប់ Error Handling?',
      options: [
        'app/page.tsx',
        'app/loading.tsx',
        'app/error.tsx',
        'app/layout.tsx'
      ],
      correct: 2,
      explanation: '`app/error.tsx` ប្រើសម្រាប់ Error Handling។'
    },
    {
      question: 'តើ `fetch` Option ណាមួយគ្រប់គ្រង Revalidation?',
      options: [
        'cache',
        'revalidate',
        'next',
        'headers'
      ],
      correct: 2,
      explanation: '`next: { revalidate: 60 }` គ្រប់គ្រង Revalidation នៅក្នុង `fetch`។'
    },
    {
      question: 'តើ Server Components អាច Fetch Data ដោយផ្ទាល់បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `useEffect`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `getStaticProps`'
      ],
      correct: 0,
      explanation: 'Server Components អាច Fetch Data ដោយផ្ទាល់ជាមួយ `async/await`។'
    },
    {
      question: 'តើ `app/error.tsx` តម្រូវឱ្យប្រើ Directive អ្វី?',
      options: [
        '"use server"',
        '"use client"',
        '"use effect"',
        '"use state"'
      ],
      correct: 1,
      explanation: '`app/error.tsx` តម្រូវឱ្យប្រើ `"use client"` ព្រោះវាជា Client Component។'
    },
    {
      question: 'តើ Loading UI ត្រូវបានបង្ហាញនៅពេលណា?',
      options: [
        'នៅពេល Fetch Data',
        'នៅពេល Error',
        'នៅពេល Render Client Component',
        'នៅពេល Build'
      ],
      correct: 0,
      explanation: 'Loading UI ត្រូវបានបង្ហាញនៅពេល Fetch Data។'
    },
    {
      question: 'តើ `fetch` នៅក្នុង App Router គាំទ្រ Caching ដោយរបៀបណា?',
      options: [
        'ប្រើ `useState`',
        'ប្រើ `cache` ឬ `revalidate`',
        'ប្រើ `getStaticProps`',
        'ប្រើ `useEffect`'
      ],
      correct: 1,
      explanation: '`fetch` គាំទ្រ Caching ដោយប្រើ `cache` ឬ `revalidate`។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `async/await` នៅក្នុង Client Components បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `"use client"`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`'
      ],
      correct: 1,
      explanation: '`async/await` មិនត្រូវបានគាំទ្រនៅក្នុង Client Components។'
    },
    {
      question: 'តើ Error Boundary នៅក្នុង `app/error.tsx` មានមុខងារអ្វី?',
      options: [
        'Fetch Data',
        'គ្រប់គ្រង Errors',
        'បង្កើត API Routes',
        'Optimize Images'
      ],
      correct: 1,
      explanation: '`app/error.tsx` គ្រប់គ្រង Errors នៅក្នុង App Router។'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Project ដែលប្រើ Data Fetching នៅក្នុង App Router។

**តម្រូវការ:**

1. **บง្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-data-fetching-app --typescript\` និងជ្រើសរើស App Router។

2. **បង្កើត Root Layout:**
   - កែ File \`app/layout.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, Metadata (\`title: 'Data Fetching App'\`, \`description: 'Website ដែលបង្កើតជាមួយ Next.js App Router'\`), និង Import \`styles/globals.css\`។

3. **បង្កើត Data Fetching Page:**
   - បង្កើត File \`app/posts/page.tsx\` ដែល Fetch Posts ពី \`https://jsonplaceholder.typicode.com/posts\` និងបង្ហាញ 5 Posts ដំបូងជា \`<ul>\`។

4. **បង្កើត Loading UI:**
   - បង្កើត File \`app/loading.tsx\` ដើម្បីបង្ហាញ \`<p>កំពុងផ្ទុក...</p>\`។

5. **បង្កើត Error Boundary:**
   - បង្កើត File \`app/error.tsx\` ដែលប្រើ \`"use client"\` និងបង្ហាញ Error Message និង \`<button>\` សម្រាប់ Retry។

6. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.container\` Class។
     - Styling សម្រាប់ \`<button>\`។

7. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Route:
     - \`http://localhost:3000/posts\` (Posts Page)

**ការណែនាំ:** ពិនិត្យ Network Tab (F12) ដើម្បីឃើញ Data Fetching។
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
  title: 'Data Fetching App',
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

## app/posts/page.tsx 
\`\`\`text
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts;
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="container">
      <h1>បញ្ជីការបង្ហោះ</h1>
      <ul>
        {posts.slice(0, 5).map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## app/loading.tsx 
\`\`\`text
export default function Loading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុក...</p>
    </div>
  );
}
\`\`\`

## app/error.tsx 
\`\`\`text
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container">
      <h1>មានបញ្ហា!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>សាកល្បងម្តងទៀត</button>
    </div>
  );
}
  \`\`\`
`
  }
};

export default NextLesson5_3Content;