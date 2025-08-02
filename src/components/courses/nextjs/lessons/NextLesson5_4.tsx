import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson5_4Content: LessonContent = {
  title: 'Layouts, Templates, និង Loading UI',
  objectives: [
    'យល់ដឹងពី Layouts និង Templates នៅក្នុង App Router',
    'ប្រើ `layout.tsx` សម្រាប់ Shared UI',
    'ប្រើ `template.tsx` សម្រាប់ Per-Page UI',
    'អនុវត្ត Loading UI ដើម្បីបង្ហាញស្ថានភាពផ្ទុក',
  ],
  content: `
# Layouts, Templates, និង Loading UI 🎨

---

នៅក្នុង **App Router**, **Layouts**, **Templates**, និង **Loading UI** ជួយគ្រប់គ្រង UI និងស្ថានភាពផ្ទុកនៅក្នុង Next.js។

---

## 1. Layouts

**Layouts** គឺជា Shared UI ដែលប្រើសម្រាប់ទំព័រទាំងអស់នៅក្នុង Folder មួយ។ វាត្រូវបានកំណត់នៅក្នុង \`layout.tsx\`។

**អត្ថប្រយោជន៍:**
- **Reusable UI:** ប្រើ Header, Footer, ឬ Navigation សម្រាប់ទំព័រជាច្រើន។
- **Persistent State:** រក្សា State នៅពេលផ្លាស់ប្តូរទំព័រ។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My App Router',
  description: 'Website ដែលបង្កើតជាមួយ Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>
        <header className="header">
          <h1>My App</h1>
          <nav>
            <a href="/">ទំព័រដើម</a> | <a href="/about">អំពី</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2025 My App</p>
        </footer>
      </body>
    </html>
  );
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Header និង Footer នៅគ្រប់ទំព័រ។

---

## 2. Templates

**Templates** គឺជា UI ដែលប្រើសម្រាប់ទំព័រជាក់លាក់ និង Remount រៀងរាល់ពេលផ្លាស់ប្តូរទំព័រ។ វាត្រូវបានកំណត់នៅក្នុង \`template.tsx\`។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/about/template.tsx
export default function AboutTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="about-template">
      <h2>ទំព័រអំពី</h2>
      {children}
    </div>
  );
}
\`\`\`

**លទ្ធផល:** បន្ថែម UI ជាក់លាក់សម្រាប់ \`/about\` Route។

---

## 3. Loading UI

**Loading UI** បង្ហាញស្ថានភាពផ្ទុកនៅពេល Fetch Data ឬ Render ទំព័រ។ វាត្រូវបានកំណត់នៅក្នុង \`loading.tsx\`។

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

**លទ្ធផល:** បង្ហាញ "កំពុងផ្ទុក..." អំឡុងពេលផ្ទុកទំព័រ។

---

## 4. ការប្រើ Layouts, Templates, និង Loading UI រួមគ្នា

**ឧទាហរណ៍:**
\`\`\`tsx
// app/blog/page.tsx
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts;
}

export default async function BlogPage() {
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

\`\`\`tsx
// app/blog/loading.tsx
export default function BlogLoading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុកការបង្ហោះ...</p>
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

.header {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

.footer {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

.about-template {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}
\`\`\`

**លទ្ធផល:**
- Root Layout បង្ហាញ Header និង Footer។
- About Template បន្ថែម UI សម្រាប់ \`/about\`។
- Loading UI បង្ហាញនៅពេល Fetch Data សម្រាប់ \`/blog\`។

---

## 5. គន្លឹះសម្រាប់ Layouts, Templates, និង Loading UI

- **ប្រើ \`layout.tsx\`:** សម្រាប់ Shared UI។
- **ប្រើ \`template.tsx\`:** សម្រាប់ Per-Page UI ដែល Remount។
- **ប្រើ \`loading.tsx\`:** សម្រាប់ Loading States។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/app/building-your-application/routing](https://nextjs.org/docs/app/building-your-application/routing)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Root Layout</h3>
<p>បង្កើត Root Layout នៅក្នុង <code>app/layout.tsx</code>។</p>
<pre><code class="language-tsx">
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My App Router',
  description: 'Website ដែលបង្កើតជាមួយ Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>
        <header className="header">
          <h1>My App</h1>
          <nav>
            <a href="/">ទំព័រដើម</a> | <a href="/about">អំពី</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2025 My App</p>
        </footer>
      </body>
    </html>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Template និង Loading UI</h3>
<p>បង្កើត Template នៅក្នុង <code>app/about/template.tsx</code> និង Loading UI នៅក្នុង <code>app/blog/loading.tsx</code>។</p>
<pre><code class="language-tsx">
// app/about/template.tsx
export default function AboutTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="about-template">
      <h2>ទំព័រអំពី</h2>
      {children}
    </div>
  );
}
</code></pre>
<pre><code class="language-tsx">
// app/blog/loading.tsx
export default function BlogLoading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុកការបង្ហោះ...</p>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ File ណាមួយប្រើសម្រាប់ Shared UI នៅក្នុង App Router?',
      options: [
        'app/page.tsx',
        'app/layout.tsx',
        'app/template.tsx',
        'app/loading.tsx'
      ],
      correct: 1,
      explanation: '`app/layout.tsx` ប្រើសម្រាប់ Shared UI។'
    },
    {
      question: 'តើ Templates ខុសពី Layouts ដោយរបៀបណា?',
      options: [
        'Templates មិន Remount',
        'Templates Remount រៀងរាល់ពេលផ្លាស់ប្តូរទំព័រ',
        'Templates ប្រើសម្រាប់ Data Fetching',
        'Templates ប្រើសម្រាប់ Loading UI'
      ],
      correct: 1,
      explanation: 'Templates Remount រៀងរាល់ពេលផ្លាស់ប្តូរទំព័រ។'
    },
    {
      question: 'តើ File ណាមួយប្រើសម្រាប់ Loading UI?',
      options: [
        'app/page.tsx',
        'app/layout.tsx',
        'app/template.tsx',
        'app/loading.tsx'
      ],
      correct: 3,
      explanation: '`app/loading.tsx` ប្រើសម្រាប់ Loading UI។'
    },
    {
      question: 'តើ Layouts មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បន្ថែម Interactivity',
        'រក្សា State នៅពេលផ្លាស់ប្តូរទំព័រ',
        'Fetch Data',
        'Optimize Images'
      ],
      correct: 1,
      explanation: 'Layouts រក្សា State នៅពេលផ្លាស់ប្តូរទំព័រ។'
    },
    {
      question: 'តើ `template.tsx` ត្រូវបានកំណត់នៅឯណា?',
      options: [
        'Root Directory',
        'ខាងក្នុង Route Folder',
        'ខាងក្នុង `/public`',
        'ខាងក្នុង `/styles`'
      ],
      correct: 1,
      explanation: '`template.tsx` ត្រូវបានកំណត់ខាងក្នុង Route Folder។'
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
      question: 'តើអ្នកអាចប្រើ Layouts និង Templates រួមគ្នាបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: 'Layouts និង Templates អាចប្រើរួមគ្នាបាន។'
    },
    {
      question: 'តើ Layouts ត្រូវបាន Remount នៅពេលផ្លាស់ប្តូរទំព័រទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `"use client"`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`'
      ],
      correct: 1,
      explanation: 'Layouts មិនត្រូវបាន Remount នៅពេលផ្លាស់ប្តូរទំព័រ។'
    },
    {
      question: 'តើ `loading.tsx` គឺជា Component ប្រភេទណា?',
      options: [
        'Client Component',
        'Server Component',
        'Static Component',
        'Dynamic Component'
      ],
      correct: 1,
      explanation: '`loading.tsx` គឺជា Server Component ដោយ Default។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម Navigation នៅក្នុង Layouts បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: 'Layouts អាចបន្ថែម Navigation សម្រាប់ Shared UI។'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Project ដែលប្រើ Layouts, Templates, និង Loading UI នៅក្នុង App Router។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-layouts-app --typescript\` និងជ្រើសរើស App Router។

2. **បង្កើត Root Layout:**
   - កែ File \`app/layout.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, Metadata (\`title: 'Layouts and Templates App'\`, \`description: 'Website ដែលបង្កើតជាមួយ Next.js App Router'\`), Header ជាមួយ Navigation (\`<a href="/">ទំព័រដើម</a> | <a href="/blog">ប្លុក</a>\`), និង Footer។

3. **បង្កើត Template:**
   - បង្កើត File \`app/blog/template.tsx\` ដើម្បីបន្ថែម \`<h2>ទំព័រប្លុក</h2>\` មុន Page Content។

4. **បង្កើត Loading UI:**
   - បង្កើត File \`app/blog/loading.tsx\` ដើម្បីបង្ហាញ \`<p>កំពុងផ្ទុកប្លុក...</p>\`។

5. **បង្កើត Blog Page:**
   - បង្កើត File \`app/blog/page.tsx\` ដែល Fetch Posts ពី \`https://jsonplaceholder.typicode.com/posts\` និងបង្ហាញ 5 Posts ដំបូងជា \`<ul>\`។

6. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.container\` Class។
     - Styling សម្រាប់ \`.header\`, \`.footer\`, និង \`.blog-template\`។

7. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\` (Home Page)
     - \`http://localhost:3000/blog\` (Blog Page with Template and Loading UI)

**ការណែនាំ:** ពិនិត្យ Network Tab (F12) ដើម្បីឃើញ Data Fetching និង Loading UI។
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

.header {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

.footer {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

.blog-template {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}
\`\`\`

## app/layout.tsx 
\`\`\`text
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Layouts and Templates App',
  description: 'Website ដែលបង្កើតជាមួយ Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>
        <header className="header">
          <h1>My App</h1>
          <nav>
            <a href="/">ទំព័រដើម</a> | <a href="/blog">ប្លុក</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2025 My App</p>
        </footer>
      </body>
    </html>
  );
}
\`\`\`

## app/page.tsx 
\`\`\`text
export default function Home() {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ App Router!</h1>
      <p>នេះជាទំព័រដើម។</p>
    </div>
  );
}
\`\`\`

## app/blog/template.tsx 
\`\`\`text
export default function BlogTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog-template">
      <h2>ទំព័រប្លុក</h2>
      {children}
    </div>
  );
}
\`\`\`

## app/blog/loading.tsx 
\`\`\`text
export default function BlogLoading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុកប្លុក...</p>
    </div>
  );
}
\`\`\`

## app/blog/page.tsx 
\`\`\`text
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts;
}

export default async function BlogPage() {
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
`
  }
};

export default NextLesson5_4Content;