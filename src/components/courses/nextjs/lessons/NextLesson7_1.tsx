import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson7_1Content: LessonContent = {
  title: 'Simple Blog Website',
  objectives: [
    'បង្កើត Blog Website ដោយប្រើ App Router',
    'អនុវត្ត Data Fetching ជាមួយ API',
    'ប្រើ Layouts និង Loading UI',
    'កំណត់ Metadata សម្រាប់ SEO',
  ],
  content: `
# Simple Blog Website 📝

---

នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត **Simple Blog Website** ដោយប្រើ Next.js App Router ដែលរួមបញ្ចូល Home Page, Blog List Page, និង Blog Post Page។

---

## 1. រៀបចំ Project Structure

**File Structure:**
\`\`\`
my-blog-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── [id]/
│   │   │   ├── page.tsx
├── components/
│   ├── BlogCard.tsx
├── styles/
│   ├── globals.css
├── next.config.js
├── .env.local
├── package.json
\`\`\`

---

## 2. បង្កើត Root Layout

**Root Layout** កំណត់ Shared UI និង Metadata។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Simple Blog',
  description: 'Blog Website ដែលបង្កើតជាមួយ Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>
        <header className="header">
          <h1>Simple Blog</h1>
          <nav>
            <a href="/">ទំព័រដើម</a> | <a href="/blog">ប្លុក</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2025 Simple Blog</p>
        </footer>
      </body>
    </html>
  );
}
\`\`\`

---

## 3. បង្កើត Blog List Page

**Blog List Page** Fetch Posts ពី API និងបង្ហាញជា List។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/blog/page.tsx
import BlogCard from '../../components/BlogCard';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  });
  const posts = await res.json();
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container">
      <h1>បញ្ជីការបង្ហោះ</h1>
      <div className="blog-grid">
        {posts.slice(0, 10).map((post: { id: number; title: string; body: string }) => (
          <BlogCard key={post.id} id={post.id} title={post.title} excerpt={post.body.slice(0, 100)} />
        ))}
      </div>
    </div>
  );
}
\`\`\`

**BlogCard Component:**
\`\`\`tsx
// components/BlogCard.tsx
import Link from 'next/link';

type Props = {
  id: number;
  title: string;
  excerpt: string;
};

export default function BlogCard({ id, title, excerpt }: Props) {
  return (
    <div className="blog-card">
      <h3>{title}</h3>
      <p>{excerpt}...</p>
      <Link href={\`/blog/\'$\'{id}\`}>អានបន្ថែម</Link>
    </div>
  );
}
\`\`\`

---

## 4. បង្កើត Blog Post Page

**Blog Post Page** Fetch Post តាម ID និងបង្ហាញ Dynamic Metadata។

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
    description: post.body.slice(0, 100),
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

---

## 5. បង្កើត Loading UI

**Loading UI** បង្ហាញស្ថានភាពផ្ទុកសម្រាប់ Blog Page។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/blog/loading.tsx
export default function BlogLoading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុកប្លុក...</p>
    </div>
  );
}
\`\`\`

---

## 6. បន្ថែម Styling

**Styling** នៅក្នុង \`globals.css\`។

**ឧទាហរណ៍:**
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

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.blog-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}

.blog-card a {
  color: #007bff;
  text-decoration: none;
}

.blog-card a:hover {
  text-decoration: underline;
}
\`\`\`

---

## 7. គន្លឹះសម្រាប់ Blog Website

- **ប្រើ App Router:** សម្រាប់ Server Components និង Data Fetching។
- **បន្ថែម Metadata:** សម្រាប់ SEO។
- **ប្រើ Components:** ដើម្បីធ្វើឱ្យ Code Reusable។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs](https://nextjs.org/docs)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Blog List Page</h3>
<p>បង្កើត Blog List Page នៅក្នុង <code>app/blog/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/blog/page.tsx
import BlogCard from '../../components/BlogCard';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  });
  const posts = await res.json();
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container">
      <h1>បញ្ជីការបង្ហោះ</h1>
      <div className="blog-grid">
        {posts.slice(0, 10).map((post: { id: number; title: string; body: string }) => (
          <BlogCard key={post.id} id={post.id} title={post.title} excerpt={post.body.slice(0, 100)} />
        ))}
      </div>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Blog Post Page</h3>
<p>បង្កើត Blog Post Page នៅក្នុង <code>app/blog/[id]/page.tsx</code>។</p>
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
    description: post.body.slice(0, 100),
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
      question: 'តើ File ណាមួយកំណត់ Shared UI សម្រាប់ Blog Website?',
      options: [
        'app/page.tsx',
        'app/layout.tsx',
        'app/blog/page.tsx',
        'components/BlogCard.tsx'
      ],
      correct: 1,
      explanation: '`app/layout.tsx` កំណត់ Shared UI។'
    },
    {
      question: 'តើ Blog Post Page ប្រើ Feature អ្វីសម្រាប់ Dynamic Routing?',
      options: [
        'Static Routing',
        'Dynamic Routing ជាមួយ [id]',
        'Client-side Routing',
        'Server-side Rendering'
      ],
      correct: 1,
      explanation: 'Blog Post Page ប្រើ Dynamic Routing ជាមួយ `[id]`។'
    },
    {
      question: 'តើ Function ណាមួយកំណត់ Dynamic Metadata?',
      options: [
        'getStaticProps',
        'generateMetadata',
        'useState',
        'useEffect'
      ],
      correct: 1,
      explanation: '`generateMetadata` កំណត់ Dynamic Metadata។'
    },
    {
      question: 'តើ `BlogCard` Component ប្រើសម្រាប់អ្វី?',
      options: [
        'Fetch Data',
        'បង្ហាញ Blog Post នីមួយៗ',
        'SEO Optimization',
        'Error Handling'
      ],
      correct: 1,
      explanation: '`BlogCard` Component បង្ហាញ Blog Post នីមួយៗ។'
    },
    {
      question: 'តើ Loading UI ត្រូវបានកំណត់នៅ File ណា?',
      options: [
        'app/page.tsx',
        'app/layout.tsx',
        'app/blog/loading.tsx',
        'components/BlogCard.tsx'
      ],
      correct: 2,
      explanation: '`app/blog/loading.tsx` កំណត់ Loading UI។'
    },
    {
      question: 'តើ `fetch` Option ណាមួយគ្រប់គ្រង Caching?',
      options: [
        'cache',
        'next: { revalidate: 60 }',
        'headers',
        'method'
      ],
      correct: 1,
      explanation: '`next: { revalidate: 60 }` គ្រប់គ្រង Caching។'
    },
    {
      question: 'តើ Metadata នៅក្នុង `layout.tsx` អនុវត្តចំពោះទំព័រណាខ្លះ?',
      options: [
        'ទំព័រជាក់លាក់',
        'ទំព័រទាំងអស់នៅក្នុង Folder',
        'ទំព័រដែលមាន `loading.tsx`',
        'ទំព័រដែលមាន `error.tsx`'
      ],
      correct: 1,
      explanation: 'Metadata នៅក្នុង `layout.tsx` អនុវត្តចំពោះទំព័រទាំងអស់នៅក្នុង Folder។'
    },
    {
      question: 'តើ CSS Class ណាមួយប្រើសម្រាប់ Blog List Layout?',
      options: [
        'container',
        'blog-grid',
        'header',
        'footer'
      ],
      correct: 1,
      explanation: '`blog-grid` Class ប្រើសម្រាប់ Blog List Layout។'
    },
    {
      question: 'តើ Link Component មកពី Package ណា?',
      options: [
        'next/router',
        'next/link',
        'next/image',
        'react'
      ],
      correct: 1,
      explanation: '`Link` Component មកពី `next/link`។'
    },
    {
      question: 'តើ Blog Website ប្រើ API អ្វីសម្រាប់ Data Fetching?',
      options: [
        'https://api.example.com',
        'https://jsonplaceholder.typicode.com',
        'https://my-blog.com',
        'https://vercel.com'
      ],
      correct: 1,
      explanation: 'Blog Website ប្រើ `https://jsonplaceholder.typicode.com`។'
    }
  ],
  lab: {
    task: `
បង្កើត Simple Blog Website ដោយប្រើ Next.js App Router។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-blog-app --typescript\` និងជ្រើសរើស App Router។

2. **បង្កើត Root Layout:**
   - កែ File \`app/layout.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, Metadata (\`title: 'Simple Blog'\`, \`description: 'Blog Website ដែលបង្កើតជាមួយ Next.js App Router'\`), Header ជាមួយ Navigation (\`<a href="/">ទំព័រដើម</a> | <a href="/blog">ប្លុក</a>\`), និង Footer។

3. **បង្កើត Home Page:**
   - កែ File \`app/page.tsx\` ដើម្បីបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ Simple Blog!</h1>\` និង \`<p>នេះជាទំព័រដើមនៃ Blog។</p>\`។

4. **បង្កើត Blog List Page:**
   - បង្កើត File \`app/blog/page.tsx\` ដែល Fetch Posts ពី \`https://jsonplaceholder.typicode.com/posts\` (ប្រើ \`next: { revalidate: 60 }\`) និងបង្ហាញ 10 Posts ដំបូងជា Grid ដោយប្រើ \`components/BlogCard.tsx\`។

5. **បង្កើត BlogCard Component:**
   - បង្កើត File \`components/BlogCard.tsx\` ដែលបង្ហាញ Post Title, Excerpt (100 តួអក្សរដំបូង), និង Link ទៅ Blog Post Page។

6. **បង្កើត Blog Post Page:**
   - បង្កើត File \`app/blog/[id]/page.tsx\` ដែល Fetch Post ពី \`https://jsonplaceholder.typicode.com/posts/:id\` និងបង្ហាញ Title និង Body។ បន្ថែម \`generateMetadata\` សម្រាប់ Dynamic Metadata។

7. **បង្កើត Loading UI:**
   - បង្កើត File \`app/blog/loading.tsx\` ដើម្បីបង្ហាញ \`<p>កំពុងផ្ទុកប្លុក...</p>\`។

8. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.container\` Class។
     - Grid Layout សម្រាប់ \`.blog-grid\` និង Styling សម្រាប់ \`.blog-card\`, \`.header\`, \`.footer\`។

9. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\` (Home Page)
     - \`http://localhost:3000/blog\` (Blog List Page)
     - \`http://localhost:3000/blog/1\` (Blog Post Page)
   - ពិនិត្យ Network Tab (F12) ដើម្បីឃើញ Data Fetching និង Loading UI។

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

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.blog-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}

.blog-card a {
  color: #007bff;
  text-decoration: none;
}

.blog-card a:hover {
  text-decoration: underline;
}
\`\`\`

## app/layout.tsx 
\`\`\`text
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Simple Blog',
  description: 'Blog Website ដែលបង្កើតជាមួយ Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>
        <header className="header">
          <h1>Simple Blog</h1>
          <nav>
            <a href="/">ទំព័រដើម</a> | <a href="/blog">ប្លុក</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2025 Simple Blog</p>
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
      <h1>សូមស្វាគមន៍មកកាន់ Simple Blog!</h1>
      <p>នេះជាទំព័រដើមនៃ Blog។</p>
    </div>
  );
}
\`\`\`

## app/blog/page.tsx 
\`\`\`text
import BlogCard from '../../components/BlogCard';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  });
  const posts = await res.json();
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container">
      <h1>បញ្ជីការបង្ហោះ</h1>
      <div className="blog-grid">
        {posts.slice(0, 10).map((post: { id: number; title: string; body: string }) => (
          <BlogCard key={post.id} id={post.id} title={post.title} excerpt={post.body.slice(0, 100)} />
        ))}
      </div>
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
    description: post.body.slice(0, 100),
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

## components/BlogCard.tsx 
\`\`\`text
import Link from 'next/link';

type Props = {
  id: number;
  title: string;
  excerpt: string;
};

export default function BlogCard({ id, title, excerpt }: Props) {
  return (
    <div className="blog-card">
      <h3>{title}</h3>
      <p>{excerpt}...</p>
      <Link href={\`/blog/\'$\'{id}\`}>អានបន្ថែម</Link>
    </div>
  );
}
  \`\`\`
`
  }
};

export default NextLesson7_1Content;