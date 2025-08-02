import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson5_5Content: LessonContent = {
  title: 'Metadata API',
  objectives: [
    'យល់ដឹងពី Metadata API នៅក្នុង App Router',
    'កំណត់ Static Metadata នៅក្នុង `layout.tsx` និង `page.tsx`',
    'អនុវត្ត Dynamic Metadata ដោយប្រើ `generateMetadata`',
    'គ្រប់គ្រង SEO ជាមួយ Metadata',
  ],
  content: `
# Metadata API 📝

---

**Metadata API** នៅក្នុង **App Router** អនុញ្ញាតឱ្យអ្នកកំណត់ Metadata (ឧ. Title, Description) សម្រាប់ SEO និង Browser Behavior។

---

## 1. Static Metadata

**Static Metadata** ត្រូវបានកំណត់ដោយ Export \`metadata\` Object នៅក្នុង \`layout.tsx\` ឬ \`page.tsx\`។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My App Router',
  description: 'Website ដែលបង្កើតជាមួយ Next.js App Router',
  keywords: ['Next.js', 'App Router', 'React'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

**ឧទាហរណ៍ (Page-specific):**
\`\`\`tsx
// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'អំពីយើង',
  description: 'ទំព័រអំពីនៃ Website យើង',
};

export default function About() {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <p>នេះជាទំព័រអំពីយើង។</p>
    </div>
  );
}
\`\`\`

**លទ្ធផល:** បន្ថែម \`<title>\` និង \`<meta>\` Tags នៅក្នុង HTML។

---

## 2. Dynamic Metadata

**Dynamic Metadata** ប្រើ \`generateMetadata\` Function ដើម្បីកំណត់ Metadata ដោយផ្អែកលើ Data។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/blog/[id]/page.tsx
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${params.id}\`);
  const post = await res.json();

  return {
    title: post.title,
    description: \`ការបង្ហោះលេខ \${params.id}\`,
  };
}

export default async function PostPage({ params }: Props) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${params.id}\`);
  const post = await res.json();

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
\`\`\`

**លទ្ធផល:** Metadata ផ្លាស់ប្តូរដោយផ្អែកលើ Post ID។

---

## 3. SEO ជាមួយ Metadata

**Metadata Fields:**
- \`title\`: កំណត់ Page Title។
- \`description\`: កំណត់ Meta Description សម្រាប់ SEO។
- \`keywords\`: បន្ថែម Keywords សម្រាប់ Search Engines។
- \`openGraph\`: កំណត់ Open Graph Tags សម្រាប់ Social Media។

**ឧទាហរណ៍ (Open Graph):**
\`\`\`tsx
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My App Router',
  description: 'Website ដែលបង្កើតជាមួយ Next.js App Router',
  openGraph: {
    title: 'My App Router',
    description: 'Website ដែលបង្កើតជាមួយ Next.js App Router',
    url: 'https://my-app.com',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

---

## 4. គន្លឹះសម្រាប់ Metadata API

- **ប្រើ \`metadata\` Object:** សម្រាប់ Static Metadata។
- **ប្រើ \`generateMetadata\`:** សម្រាប់ Dynamic Metadata។
- **បន្ថែម Open Graph Tags:** ដើម្បីបង្កើន Social Media Sharing។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/app/api-reference/functions/generate-metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Static Metadata</h3>
<p>កំណត់ Static Metadata នៅក្នុង <code>app/about/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'អំពីយើង',
  description: 'ទំព័រអំពីនៃ Website យើង',
};

export default function About() {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <p>នេះជាទំព័រអំពីយើង។</p>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Dynamic Metadata</h3>
<p>កំណត់ Dynamic Metadata នៅក្នុង <code>app/blog/[id]/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/blog/[id]/page.tsx
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${params.id}\`);
  const post = await res.json();

  return {
    title: post.title,
    description: \`ការបង្ហោះលេខ \${params.id}\`,
  };
}

export default async function PostPage({ params }: Props) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${params.id}\`);
  const post = await res.json();

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Metadata API ប្រើសម្រាប់អ្វី?',
      options: [
        'Data Fetching',
        'SEO និង Browser Behavior',
        'Interactivity',
        'Image Optimization'
      ],
      correct: 1,
      explanation: 'Metadata API ប្រើសម្រាប់ SEO និង Browser Behavior។'
    },
    {
      question: 'តើ Static Metadata ត្រូវបានកំណត់ដោយអ្វី?',
      options: [
        'generateMetadata',
        'metadata Object',
        'useState',
        'useEffect'
      ],
      correct: 1,
      explanation: 'Static Metadata ត្រូវបានកំណត់ដោយ `metadata` Object។'
    },
    {
      question: 'តើ Function ណាមួយប្រើសម្រាប់ Dynamic Metadata?',
      options: [
        'generateMetadata',
        'getStaticProps',
        'getServerSideProps',
        'useMetadata'
      ],
      correct: 0,
      explanation: '`generateMetadata` ប្រើសម្រាប់ Dynamic Metadata។'
    },
    {
      question: 'តើ `openGraph` Metadata មានតួនាទីអ្វី?',
      options: [
        'បន្ថែម Interactivity',
        'បង្កើន Social Media Sharing',
        'Fetch Data',
        'Optimize Images'
      ],
      correct: 1,
      explanation: '`openGraph` Metadata បង្កើន Social Media Sharing។'
    },
    {
      question: 'តើ Metadata អាចកំណត់នៅក្នុង File ណាខ្លះ?',
      options: [
        'app/page.tsx និង app/layout.tsx',
        'app/loading.tsx',
        'app/error.tsx',
        'styles/globals.css'
      ],
      correct: 0,
      explanation: 'Metadata អាចកំណត់នៅក្នុង `app/page.tsx` និង `app/layout.tsx`។'
    },
    {
      question: 'តើ `generateMetadata` អាចប្រើ `async/await` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `"use client"`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`'
      ],
      correct: 0,
      explanation: '`generateMetadata` អាចប្រើ `async/await` សម្រាប់ Dynamic Metadata�।'
    },
    {
      question: 'តើ `keywords` Metadata មានតួនាទីអ្វី?',
      options: [
        'បន្ថែម Interactivity',
        'បន្ថែម Keywords សម្រាប់ SEO',
        'Fetch Data',
        'Optimize Images'
      ],
      correct: 1,
      explanation: '`keywords` Metadata បន្ថែម Keywords សម្រាប់ SEO�।'
    },
    {
      question: 'តើ Metadata នៅក្នុង `layout.tsx` អនុវត្តចំពោះទំព័រណាខ្លះ?',
      options: [
        'ទំព័រជាក់លាក់',
        'ទំព័រទាំងអស់នៅក្នុង Folder',
        'ទំព័រដែលមាន `template.tsx`',
        'ទំព័រដែលមាន `loading.tsx`'
      ],
      correct: 1,
      explanation: 'Metadata នៅក្នុង `layout.tsx` អនុវត្តចំពោះទំព័រទាំងអស់នៅក្នុង Folder។'
    },
    {
      question: 'តើអ្នកអាចកំណត់ Open Graph Images បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: 'Metadata API អនុញ្ញាតឱ្យកំណត់ Open Graph Images។'
    },
    {
      question: 'តើ `generateMetadata` ត្រូវបានប្រើនៅពេលណា?',
      options: [
        'នៅពេល Metadata ផ្លាស់ប្តូរដោយផ្អែកលើ Data',
        'នៅពេល Fetch Data',
        'នៅពេល Render Client Component',
        'នៅពេល Build'
      ],
      correct: 0,
      explanation: '`generateMetadata` ប្រើនៅពេល Metadata ផ្លាស់ប្តូរដោយផ្អែកលើ Data។'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Project ដែលប្រើ Metadata API នៅក្នុង App Router។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-metadata-app --typescript\` និងជ្រើសរើស App Router។

2. **បង្កើត Root Layout:**
   - កែ File \`app/layout.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, Static Metadata (\`title: 'Metadata App'\`, \`description: 'Website ដែលបង្កើតជាមួយ Next.js App Router'\`, \`keywords: ['Next.js', 'Metadata']\`, \`openGraph\`), និង Import \`styles/globals.css\`។

3. **បង្កើត About Page:**
   - បង្កើត File \`app/about/page.tsx\` ដែលកំណត់ Static Metadata (\`title: 'អំពីយើង'\`, \`description: 'ទំព័រអំពីនៃ Website យើង'\`) និងបង្ហាញ \`<h1>អំពីយើង</h1>\` និង \`<p>នេះជាទំព័រអំពីយើង។</p>\`។

4. **បង្កើត Dynamic Blog Post Page:**
   - បង្កើត File \`app/blog/[id]/page.tsx\` ដែលប្រើ \`generateMetadata\` ដើម្បីកំណត់ Dynamic Metadata (\`title\` និង \`description\`) ដោយ Fetch Data ពី \`https://jsonplaceholder.typicode.com/posts/:id\` និងបង្ហាញ Post Title និង Body។

5. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.container\` Class។

6. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000/about\` (About Page)
     - \`http://localhost:3000/blog/1\` (Blog Post Page)
   - ពិនិត្យ \`<title>\` និង \`<meta>\` Tags នៅក្នុង Browser Inspector (F12)។

**ការណែនាំ:** ពិនិត្យ Page Source (Ctrl+U) ដើម្បីឃើញ Metadata។
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
  title: 'Metadata App',
  description: 'Website ដែលបង្កើតជាមួយ Next.js App Router',
  keywords: ['Next.js', 'Metadata'],
  openGraph: {
    title: 'Metadata App',
    description: 'Website ដែលបង្កើតជាមួយ Next.js App Router',
    url: 'https://my-app.com',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

## app/about/page.tsx 
\`\`\`text
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'អំពីយើង',
  description: 'ទំព័រអំពីនៃ Website យើង',
};

export default function About() {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <p>នេះជាទំព័រអំពីយើង។</p>
    </div>
  );
}
\`\`\`

## app/blog/[id]/page.tsx 
\`\`\`text
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${params.id}\`);
  const post = await res.json();

  return {
    title: post.title,
    description: \`ការបង្ហោះលេខ \${params.id}\`,
  };
}

export default async function PostPage({ params }: Props) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${params.id}\`);
  const post = await res.json();

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
  \`\`\`
`
  }
};

export default NextLesson5_5Content;