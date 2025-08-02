import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson5_1Content: LessonContent = {
  title: 'ការណែនាំអំពី App Router',
  objectives: [
    'យល់ដឹងពី App Router នៅក្នុង Next.js',
    'ស្វែងយល់ពីភាពខុសគ្នារវាង App Router និង Pages Router',
    'បង្កើត Project ដោយប្រើ App Router',
    'រៀបចំ File Structure សម្រាប់ App Router',
  ],
  content: `
# ការណែនាំអំពី App Router 🌟

---

**App Router** គឺជា Feature ថ្មីនៅក្នុង Next.js (ចាប់ផ្តើមពី Version 13) ដែលផ្តល់នូវវិធីសាស្ត្រថ្មីសម្រាប់ Routing និង Rendering ដោយផ្អែកលើ **React Server Components**។

---

## 1. អ្វីទៅជា App Router?

App Router គឺជា System ថ្មីសម្រាប់គ្រប់គ្រង Routes នៅក្នុង Next.js។ វាប្រើ Folder-based Routing នៅក្នុង \`/app\` Directory ជំនួសឱ្យ \`/pages\` Directory។

**អត្ថប្រយោជន៍:**
- **Server-first Approach:** ប្រើ Server Components ដើម្បីកាត់បន្ថយ Client-side JavaScript។
- **Simplified Routing:** ប្រើ Folder Structure សម្រាប់ Routes។
- **Enhanced Features:** គាំទ្រ Streaming, Suspense, និង Layouts។

---

## 2. ភាពខុសគ្នារវាង App Router និង Pages Router

| លក្ខណៈ | App Router | Pages Router |
|----------|------------|--------------|
| **Directory** | \`/app\` | \`/pages\` |
| **Component Type** | Server Components និង Client Components | Client Components តែប៉ុណ្ណោះ |
| **Routing** | Folder-based | File-based |
| **Data Fetching** | \`async/await\` នៅក្នុង Server Components | \`getStaticProps\`, \`getServerSideProps\` |
| **Layouts** | Nested Layouts នៅក្នុង \`/app/layout.tsx\` | Custom \`_app.tsx\` |

---

## 3. ការបង្កើត Project ជាមួយ App Router

**ការដំឡើង:**
\`\`\`bash
npx create-next-app@latest my-app-router --typescript
\`\`\`

ជ្រើសរើស **App Router** នៅពេល Prompt។

**File Structure:**
\`\`\`
/app
  /layout.tsx
  /page.tsx
  /about
    /page.tsx
/public
/styles
\`\`\`

**ឧទាហរណ៍: Root Layout**
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
      <body>{children}</body>
    </html>
  );
}
\`\`\`

**ឧទាហរណ៍: Home Page**
\`\`\`tsx
// app/page.tsx
export default function Home() {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ App Router!</h1>
      <p>នេះជាទំព័រដំបូង។</p>
    </div>
  );
}
\`\`\`

**ឧទាហរណ៍: About Page**
\`\`\`tsx
// app/about/page.tsx
export default function About() {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <p>នេះជាទំព័រអំពីយើង។</p>
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
\`\`\`

**លទ្ធផល:**
- \`http://localhost:3000\` → Home Page
- \`http://localhost:3000/about\` → About Page

---

## 4. គន្លឹះសម្រាប់ App Router

- **ប្រើ \`/app\` Directory:** សម្រាប់រៀបចំ Routes និង Layouts។
- **ប្រើ \`layout.tsx\`:** សម្រាប់ Shared UI និង Metadata។
- **ជៀសវាង \`/pages\`:** នៅពេលប្រើ App Router។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/app](https://nextjs.org/docs/app)។
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
      <body>{children}</body>
    </html>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Home Page និង About Page</h3>
<p>បង្កើត Home Page នៅក្នុង <code>app/page.tsx</code> និង About Page នៅក្នុង <code>app/about/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/page.tsx
export default function Home() {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ App Router!</h1>
      <p>នេះជាទំព័រដំបូង។</p>
    </div>
  );
}
</code></pre>
<pre><code class="language-tsx">
// app/about/page.tsx
export default function About() {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <p>នេះជាទំព័រអំពីយើង។</p>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ App Router ត្រូវបានណែនាំនៅក្នុង Next.js Version ណា?',
      options: [
        'Version 11',
        'Version 12',
        'Version 13',
        'Version 14'
      ],
      correct: 2,
      explanation: 'App Router ត្រូវបានណែនាំនៅក្នុង Next.js Version 13។'
    },
    {
      question: 'តើ Directory ណាមួយប្រើសម្រាប់ App Router?',
      options: [
        '/pages',
        '/app',
        '/public',
        '/styles'
      ],
      correct: 1,
      explanation: 'App Router ប្រើ `/app` Directory សម្រាប់ Routing។'
    },
    {
      question: 'តើ File ណាមួយប្រើសម្រាប់ Root Layout នៅក្នុង App Router?',
      options: [
        'app/page.tsx',
        'app/layout.tsx',
        'pages/_app.tsx',
        'pages/_document.tsx'
      ],
      correct: 1,
      explanation: '`app/layout.tsx` ប្រើសម្រាប់ Root Layout នៅក្នុង App Router។'
    },
    {
      question: 'តើ App Router គាំទ្រអ្វីជាចម្បង?',
      options: [
        'Client Components តែប៉ុណ្ណោះ',
        'Server Components',
        'Static Files',
        'Global CSS'
      ],
      correct: 1,
      explanation: 'App Router គាំទ្រជាចម្បង Server Components។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `/pages` និង `/app` ក្នុង Project តែមួយបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 1,
      explanation: 'Next.js មិនអនុញ្ញាតឱ្យប្រើ `/pages` និង `/app` ក្នុង Project តែមួយ។'
    },
    {
      question: 'តើ File ណាមួយកំណត់ Route សម្រាប់ `/about`?',
      options: [
        'app/about.tsx',
        'app/about/page.tsx',
        'pages/about.tsx',
        'app/layout.tsx'
      ],
      correct: 1,
      explanation: '`app/about/page.tsx` កំណត់ Route សម្រាប់ `/about`។'
    },
    {
      question: 'តើ App Router ប្រើអ្វីសម្រាប់ Routing?',
      options: [
        'File-based Routing',
        'Folder-based Routing',
        'Dynamic Routing',
        'Static Routing'
      ],
      correct: 1,
      explanation: 'App Router ប្រើ Folder-based Routing។'
    },
    {
      question: 'តើ Metadata ត្រូវបានកំណត់នៅក្នុង File ណា?',
      options: [
        'app/page.tsx',
        'app/layout.tsx',
        'pages/_app.tsx',
        'pages/_document.tsx'
      ],
      correct: 1,
      explanation: 'Metadata ត្រូវបានកំណត់នៅក្នុង `app/layout.tsx`។'
    },
    {
      question: 'តើ App Router មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បន្ថែម Global CSS',
        'កាត់បន្ថយ Client-side JavaScript',
        'Optimize Images',
        'Preload Fonts'
      ],
      correct: 1,
      explanation: 'App Router កាត់បន្ថយ Client-side JavaScript ដោយប្រើ Server Components។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `getStaticProps` នៅក្នុង App Router បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 1,
      explanation: '`getStaticProps` មិនត្រូវបានគាំទ្រនៅក្នុង App Router។'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Project ដែលប្រើ App Router សម្រាប់ Basic Routing។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-app-router --typescript\` និងជ្រើសរើស App Router។

2. **បង្កើត Root Layout:**
   - កែ File \`app/layout.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, Metadata (\`title: 'My App Router'\`, \`description: 'Website ដែលបង្កើតជាមួយ Next.js App Router'\`), និង Import \`styles/globals.css\`។

3. **បង្កើត Pages:**
   - កែ File \`app/page.tsx\` ដើម្បីបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ App Router!</h1>\` និង \`<p>នេះជាទំព័រដំបូង។</p>\`។
   - បង្កើត File \`app/about/page.tsx\` ដើម្បីបង្ហាញ \`<h1>អំពីយើង</h1>\` និង \`<p>នេះជាទំព័រអំពីយើង។</p>\`។

4. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.container\` Class។

5. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\` (Home Page)
     - \`http://localhost:3000/about\` (About Page)

**ការណែនាំ:** ពិនិត្យ Browser Console (F12) ឬ Terminal សម្រាប់ Error Messages។
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
\`\`\`

## app/layout.tsx 
\`\`\`text
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My App Router',
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

## app/page.tsx 
\`\`\`text
export default function Home() {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ App Router!</h1>
      <p>នេះជាទំព័រដំបូង។</p>
    </div>
  );
}
\`\`\`

## app/about/page.tsx 
\`\`\`text
export default function About() {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <p>នេះជាទំព័រអំពីយើង។</p>
    </div>
  );
}
  \`\`\`
`
  }
};

export default NextLesson5_1Content;