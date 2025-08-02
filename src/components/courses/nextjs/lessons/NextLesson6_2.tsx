import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson6_2Content: LessonContent = {
  title: 'Best Practices និង Performance Tips',
  objectives: [
    'យល់ដឹងពី Best Practices សម្រាប់ Next.js Development',
    'បង្កើន Performance ដោយប្រើ Image Optimization',
    'អនុវត្ត Lazy Loading និង Caching',
    'គ្រប់គ្រង Code Splitting និង Error Handling',
  ],
  content: `
# Best Practices និង Performance Tips ⚡

---

**Best Practices** និង **Performance Tips** ជួយឱ្យ Next.js Application ដំណើរការលឿន និងមានភាពអាចទុកចិត្តបាន។

---

## 1. Best Practices

- **ប្រើ App Router:** សម្រាប់ Features ថ្មីៗដូចជា Server Components។
- **រៀបចំ File Structure:** ប្រើ Folder-based Routing នៅក្នុង \`/app\`។
- **ប្រើ TypeScript:** ដើម្បីបង្កើន Code Quality និង Catch Errors។
- **គ្រប់គ្រង Environment Variables:** ប្រើ \`.env.local\` សម្រាប់ Sensitive Data។

**ឧទាហរណ៍ (TypeScript):**
\`\`\`tsx
// app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Practices App',
};

export default function Home() {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍</h1>
    </div>
  );
}
\`\`\`

---

## 2. Image Optimization

**Next.js Image Component** បង្កើន Performance ដោយ:
- **Lazy Loading:** ផ្ទុករូបភាពនៅពេលចាំបាច់។
- **Responsive Images:** ប្តូរទំហំរូបភាពដោយស្វ័យប្រវត្តិ។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/about/page.tsx
import Image from 'next/image';

export default function About() {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <Image
        src="/example.jpg"
        alt="Example Image"
        width={500}
        height={300}
        priority={false}
      />
    </div>
  );
}
\`\`\`

**កំណត់ Image Domains:**
\`\`\`js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
};

module.exports = nextConfig;
\`\`\`

---

## 3. Lazy Loading និង Caching

**Lazy Loading:**
- ប្រើ \`dynamic\` Import សម្រាប់ Components។
\`\`\`tsx
// app/dynamic/page.tsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>កំពុងផ្ទុក...</p>,
});

export default function DynamicPage() {
  return (
    <div className="container">
      <h1>Dynamic Loading</h1>
      <DynamicComponent />
    </div>
  );
}
\`\`\`

**Caching:**
- ប្រើ \`fetch\` ជាមួយ \`next: { revalidate: 60 \}\`។
\`\`\`tsx
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  });
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

---

## 4. Code Splitting និង Error Handling

**Code Splitting:**
- Next.js ធ្វើ Code Splitting ដោយស្វ័យប្រវត្តិសម្រាប់ Routes។
- ប្រើ \`dynamic\` Import សម្រាប់ Components ធំៗ។

**Error Handling:**
- ប្រើ \`error.tsx\` សម្រាប់ Error Boundary។
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

## 5. គន្លឹះសម្រាប់ Best Practices

- **ប្រើ Image Component:** សម្រាប់ Image Optimization។
- **ប្រើ Dynamic Imports:** សម្រាប់ Lazy Loading។
- **បន្ថែម Error Boundary:** ដើម្បីគ្រប់គ្រង Errors។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/app/building-your-application/optimizing](https://nextjs.org/docs/app/building-your-application/optimizing)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Image Optimization</h3>
<p>ប្រើ <code>next/image</code> នៅក្នុង <code>app/about/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/about/page.tsx
import Image from 'next/image';

export default function About() {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <Image
        src="/example.jpg"
        alt="Example Image"
        width={500}
        height={300}
        priority={false}
      />
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Lazy Loading</h3>
<p>ប្រើ Dynamic Import នៅក្នុង <code>app/dynamic/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/dynamic/page.tsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>កំពុងផ្ទុក...</p>,
});

export default function DynamicPage() {
  return (
    <div className="container">
      <h1>Dynamic Loading</h1>
      <DynamicComponent />
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Next.js Image Component មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'Data Fetching',
        'Lazy Loading និង Responsive Images',
        'SEO Optimization',
        'Client-side Interactivity'
      ],
      correct: 1,
      explanation: 'Next.js Image Component ផ្តល់ Lazy Loading និង Responsive Images។'
    },
    {
      question: 'តើ App Router មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បន្ថែម Client-side JavaScript',
        'គាំទ្រ Server Components',
        'បន្ថែម Global CSS',
        'Optimize Fonts'
      ],
      correct: 1,
      explanation: 'App Router គាំទ្រ Server Components ដើម្បីបង្កើន Performance។'
    },
    {
      question: 'តើ Dynamic Import ប្រើសម្រាប់អ្វី?',
      options: [
        'SEO Optimization',
        'Lazy Loading Components',
        'Data Fetching',
        'Error Handling'
      ],
      correct: 1,
      explanation: 'Dynamic Import ប្រើសម្រាប់ Lazy Loading Components។'
    },
    {
      question: 'តើ File ណាមួយប្រើសម្រាប់ Error Handling?',
      options: [
        'app/page.tsx',
        'app/layout.tsx',
        'app/error.tsx',
        'app/loading.tsx'
      ],
      correct: 2,
      explanation: '`app/error.tsx` ប្រើសម្រាប់ Error Handling។'
    },
    {
      question: 'តើ `fetch` Option ណាមួយគ្រប់គ្រង Caching?',
      options: [
        'cache',
        'revalidate',
        'next',
        'headers'
      ],
      correct: 2,
      explanation: '`next: { revalidate: 60 }` គ្រប់គ្រង Caching នៅក្នុង `fetch`។'
    },
    {
      question: 'តើ TypeScript ជួយអ្វីនៅក្នុង Next.js?',
      options: [
        'Image Optimization',
        'Catch Errors និង Code Quality',
        'SEO Optimization',
        'Lazy Loading'
      ],
      correct: 1,
      explanation: 'TypeScript ជួយ Catch Errors និងបង្កើន Code Quality។'
    },
    {
      question: 'តើ Next.js ធ្វើ Code Splitting ដោយរបៀបណា?',
      options: [
        'ដោយស្វ័យប្រវត្តិសម្រាប់ Routes',
        'ដោយប្រើ `useEffect`',
        'ដោយប្រើ `getStaticProps`',
        'ដោយប្រើ `next/head`'
      ],
      correct: 0,
      explanation: 'Next.js ធ្វើ Code Splitting ដោយស្វ័យប្រវត្តិសម្រាប់ Routes�।'
    },
    {
      question: 'តើ `error.tsx` តម្រូវឱ្យប្រើ Directive អ្វី?',
      options: [
        '"use server"',
        '"use client"',
        '"use effect"',
        '"use state"'
      ],
      correct: 1,
      explanation: '`error.tsx` តម្រូវឱ្យប្រើ `"use client"` ព្រោះវាជា Client Component�।'
    },
    {
      question: 'តើ Image Domains ត្រូវបានកំណត់នៅក្នុង File ណា?',
      options: [
        'app/layout.tsx',
        'next.config.js',
        '.env.local',
        'package.json'
      ],
      correct: 1,
      explanation: 'Image Domains ត្រូវបានកំណត់នៅក្នុង `next.config.js`។'
    },
    {
      question: 'តើ Lazy Loading ជួយអ្វី?',
      options: [
        'បន្ថែម Interactivity',
        'កាត់បន្ថយ Initial Load Time',
        'SEO Optimization',
        'Error Handling'
      ],
      correct: 1,
      explanation: 'Lazy Loading កាត់បន្ថយ Initial Load Time។'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Project ដែលអនុវត្ត Best Practices និង Performance Tips។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-best-practices-app --typescript\` និងជ្រើសរើស App Router។

2. **បង្កើត Root Layout:**
   - កែ File \`app/layout.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, Metadata (\`title: 'Best Practices App'\`, \`description: 'Website ដែលបង្កើតជាមួយ Next.js App Router'\`), និង Import \`styles/globals.css\`។

3. **បង្កើត Image Page:**
   - បង្កើត File \`app/images/page.tsx\` ដែលប្រើ \`next/image\` ដើម្បីបង្ហាញរូបភាព (Hard-coded URL: \`https://example.com/example.jpg\`) ជាមួយ \`width={500}\`, \`height={300}\`, និង \`priority={false}\`។

4. **បង្កើត Dynamic Component:**
   - បង្កើត File \`app/dynamic/page.tsx\` ដែលប្រើ \`dynamic\` Import សម្រាប់ Component (\`components/HeavyComponent.tsx\`) ជាមួយ Loading UI។
   - បង្កើត File \`components/HeavyComponent.tsx\` ដែលបង្ហាញ \`<h1>Heavy Component</h1>\`។

5. **បន្ថែម Error Handling:**
   - បង្កើត File \`app/error.tsx\` ដែលប្រើ \`"use client"\` និងបង្ហាញ Error Message និង Retry Button។

6. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.container\` Class។
     - Styling សម្រាប់ \`<button>\`។

7. **កំណត់ next.config.js:**
   - កែ File \`next.config.js\` ដើម្បីបន្ថែម \`images: { domains: ['example.com'] }\`។

8. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000/images\` (Image Page)
     - \`http://localhost:3000/dynamic\` (Dynamic Component Page)
   - ពិនិត្យ Network Tab (F12) ដើម្បីឃើញ Lazy Loading។

**ការណែនាំ:** ពិនិត្យ Browser Console (F12) សម្រាប់ Errors។
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

## next.config.js 
\`\`\`text
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
};

module.exports = nextConfig;
\`\`\`

## app/layout.tsx 
\`\`\`text
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Best Practices App',
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

## app/images/page.tsx 
\`\`\`text
import Image from 'next/image';

export default function ImagesPage() {
  return (
    <div className="container">
      <h1>Image Optimization</h1>
      <Image
        src="https://example.com/example.jpg"
        alt="Example Image"
        width={500}
        height={300}
        priority={false}
      />
    </div>
  );
}
\`\`\`

## app/dynamic/page.tsx 
\`\`\`text
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>កំពុងផ្ទុក...</p>,
});

export default function DynamicPage() {
  return (
    <div className="container">
      <h1>Dynamic Loading</h1>
      <DynamicComponent />
    </div>
  );
}
\`\`\`

## components/HeavyComponent.tsx
\`\`\`text
export default function HeavyComponent() {
  return (
    <div>
      <h1>Heavy Component</h1>
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

export default NextLesson6_2Content;