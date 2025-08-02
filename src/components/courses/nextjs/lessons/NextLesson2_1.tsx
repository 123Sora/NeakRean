import type { LessonContent } from '../../../../types/LessonTypes';

const NextLesson2_1Content: LessonContent = {
  title: 'File-System Routing',
  objectives: [
    'យល់ដឹងអំពី File-System Routing នៅក្នុង Next.js Pages Router',
    'បង្កើត Static និង Dynamic Routes',
    'ស្វែងយល់ពី Nested Routes និង Index Routes',
    'ប្រើ Dynamic Parameters និង Catch-All Routes',
  ],
  content: `
# File-System Routing 🚏

---

**File-System Routing** គឺជាមុខងារសំខាន់នៃ Next.js Pages Router ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត Routes ដោយផ្អែកលើឯកសារនៅក្នុង Folder \`pages\`។ នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពីរបៀបបង្កើត Static, Dynamic, និង Nested Routes។

---

## 1. អ្វីទៅជា File-System Routing?

នៅក្នុង Next.js Pages Router ឯកសារនៅក្នុង Folder \`pages\` នឹងក្លាយជា Routes ដោយស្វ័យប្រវត្តិ។
- **ឧទាហរណ៍:**
  - \`pages/index.tsx\` → \`/\` (Homepage)
  - \`pages/about.tsx\` → \`/about\`
  - \`pages/blog/index.tsx\` → \`/blog\`
  - \`pages/blog/post.tsx\` → \`/blog/post\`

---

## 2. Static Routes

Static Routes គឺជា Routes ដែលកំណត់ជាមុនដោយឈ្មោះឯកសារ។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/about.tsx
import type { NextPage } from 'next';

const About: NextPage = () => {
  return <h1>អំពីយើង</h1>;
};

export default About;
\`\`\`

**លទ្ធផល:** ចូលទៅ \`http://localhost:3000/about\` ដើម្បីមើលទំព័រ "អំពីយើង"។

---

## 3. Dynamic Routes

Dynamic Routes អនុញ្ញាតឱ្យអ្នកបង្កើត Routes ដែលផ្លាស់ប្តូរតាម Parameters។ ប្រើ Square Brackets (\`[]\`) ដើម្បីកំណត់ Dynamic Parameters។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/post/[id].tsx
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>អត្ថបទ #{id}</h1>;
};

export default Post;
\`\`\`

**លទ្ធផល:**
- \`/post/1\` → "អត្ថបទ #1"
- \`/post/abc\` → "អត្ថបទ #abc"

---

## 4. Nested Routes

Nested Routes ត្រូវបានបង្កើតដោយប្រើ Folder Structure។

**ឧទាហរណ៍:**
\`\`\`
pages/
├── blog/
│   ├── index.tsx  // /blog
│   └── post.tsx   // /blog/post
\`\`\`

\`\`\`tsx
// pages/blog/index.tsx
import type { NextPage } from 'next';

const Blog: NextPage = () => {
  return <h1>ទំព័រប្លុក</h1>;
};

export default Blog;
\`\`\`

\`\`\`tsx
// pages/blog/post.tsx
import type { NextPage } from 'next';

const BlogPost: NextPage = () => {
  return <h1>ទំព័រអត្ថបទប្លុក</h1>;
};

export default BlogPost;
\`\`\`

**លទ្ធផល:**
- \`/blog\` → "ទំព័រប្លុក"
- \`/blog/post\` → "ទំព័រអត្ថបទប្លុក"

---

## 5. Catch-All Routes

Catch-All Routes អនុញ្ញាតឱ្យអ្នកចាប់ Parameters ច្រើននៅក្នុង URL។ ប្រើ \`...\` នៅក្នុង Square Brackets។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/post/[...slug].tsx
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Post: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>អត្ថបទ: {slug?.join('/')}</h1>;
};

export default Post;
\`\`\`

**លទ្ធផល:**
- \`/post/a/b/c\` → "អត្ថបទ: a/b/c"

---

## 6. គន្លឹះសម្រាប់ File-System Routing

- **ឈ្មោះឯកសារត្រូវតែត្រឹមត្រូវ:** ប្រើ Lowercase និង Hyphens សម្រាប់ឈ្មោះឯកសារ។
- **Dynamic Parameters:** ប្រើ \`useRouter\` Hook ដើម្បីចាប់ Parameters។
- **Optional Catch-All Routes:** ប្រើ \`[[...slug]].tsx\` សម្រាប់ Optional Parameters។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/routing](https://nextjs.org/docs/routing)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត Static Route</h3>
<p>បង្កើត File <code>pages/contact.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/contact.tsx
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <div className="container">
      <h1>ទំនាក់ទំនង</h1>
      <p>ទាក់ទងមកយើងតាមអ៊ីមែល។</p>
    </div>
  );
};

export default Contact;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Dynamic Route</h3>
<p>បង្កើត File <code>pages/product/[id].tsx</code>។</p>
<pre><code class="language-tsx">
// pages/product/[id].tsx
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Product: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <h1>ផលិតផល #{id}</h1>
      <p>ព័ត៌មានអំពីផលិតផល។</p>
    </div>
  );
};

export default Product;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ File-System Routing នៅក្នុង Next.js Pages Router ដំណើរការដោយរបៀបណា?',
      options: [
        'ប្រើ React Router',
        'បង្កើត Routes ដោយផ្អែកលើ Folder `pages`',
        'កំណត់ Routes នៅក្នុង `next.config.js`',
        'ប្រើ API Routes'
      ],
      correct: 1,
      explanation: 'File-System Routing បង្កើត Routes ដោយផ្អែកលើឯកសារនៅក្នុង Folder `pages`។'
    },
    {
      question: 'តើ File ណាមួយតំណាងឱ្យ Homepage?',
      options: [
        'pages/home.tsx',
        'pages/index.tsx',
        'pages/main.tsx',
        'pages/root.tsx'
      ],
      correct: 1,
      explanation: '`pages/index.tsx` តំណាងឱ្យ Route `/` (Homepage)។'
    },
    {
      question: 'តើឯកសារ `pages/about.tsx` នឹងបង្កើត Route អ្វី?',
      options: [
        '/about',
        '/pages/about',
        '/info',
        '/contact'
      ],
      correct: 0,
      explanation: '`pages/about.tsx` បង្កើត Route `/about`។'
    },
    {
      question: 'តើឯកសារ `pages/blog/post.tsx` នឹងបង្កើត Route អ្វី?',
      options: [
        '/blog',
        '/post',
        '/blog/post',
        '/pages/blog/post'
      ],
      correct: 2,
      explanation: '`pages/blog/post.tsx` បង្កើត Route `/blog/post`។'
    },
    {
      question: 'តើរបៀបណាដែលប្រើសម្រាប់ Dynamic Routes?',
      options: [
        'Curly Braces `{}`',
        'Square Brackets `[]`',
        'Parentheses `()`',
        'Angle Brackets `<>`'
      ],
      correct: 1,
      explanation: 'Square Brackets `[]` ប្រើសម្រាប់កំណត់ Dynamic Parameters។'
    },
    {
      question: 'តើ Hook ណាមួយប្រើដើម្បីចាប់ Query Parameters?',
      options: [
        'useState',
        'useEffect',
        'useRouter',
        'useContext'
      ],
      correct: 2,
      explanation: '`useRouter` Hook ប្រើសម្រាប់ចាប់ Query Parameters នៅក្នុង Next.js។'
    },
    {
      question: 'តើឯកសារ `pages/post/[id].tsx` អនុញ្ញាតឱ្យចូលទៅ Route ណាខ្លះ?',
      options: [
        '/post/1, /post/abc',
        '/post',
        '/post/[id]',
        '/posts'
      ],
      correct: 0,
      explanation: '`pages/post/[id].tsx` អនុញ្ញាតឱ្យចូលទៅ Routes ដូចជា `/post/1`, `/post/abc`។'
    },
    {
      question: 'តើ Catch-All Routes ប្រើ Syntax អ្វី?',
      options: [
        '[id].tsx',
        '[...slug].tsx',
        '[[id]].tsx',
        '{slug}.tsx'
      ],
      correct: 1,
      explanation: '`[...slug].tsx` ប្រើសម្រាប់ Catch-All Routes។'
    },
    {
      question: 'តើ Optional Catch-All Routes ប្រើ Syntax អ្វី?',
      options: [
        '[id].tsx',
        '[...slug].tsx',
        '[[...slug]].tsx',
        '{...slug}.tsx'
      ],
      correct: 2,
      explanation: '`[[...slug]].tsx` ប្រើសម្រាប់ Optional Catch-All Routes។'
    },
    {
      question: 'តើឯកសារ `pages/index.tsx` នឹងបង្កើត Route អ្វី?',
      options: [
        '/home',
        '/',
        '/index',
        '/pages'
      ],
      correct: 1,
      explanation: '`pages/index.tsx` បង្កើត Route `/` (Homepage)។'
    },
    {
      question: 'តើអ្នកអាចបង្កើត Nested Route ដោយរបៀបណា?',
      options: [
        'ប្រើ File តែមួយ',
        'បង្កើត Folder នៅក្នុង `pages`',
        'កំណត់នៅក្នុង `next.config.js`',
        'ប្រើ React Router'
      ],
      correct: 1,
      explanation: 'Nested Routes ត្រូវបានបង្កើតដោយប្រើ Folder នៅក្នុង `pages`។'
    },
    {
      question: 'តើឯកសារ `pages/shop/[category]/[id].tsx` នឹងបង្កើត Route បែបណា?',
      options: [
        '/shop/category',
        '/shop/[category]/[id]',
        '/shop/:category/:id',
        '/shop/category/id'
      ],
      correct: 0,
      explanation: '`pages/shop/[category]/[id].tsx` បង្កើត Routes ដូចជា `/shop/electronics/123`។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ File-System Routing?',
      options: [
        'ការគ្រប់គ្រង Database',
        'ភាពងាយស្រួលក្នុងការកំណត់ Routes',
        'ការបង្កើន Animations',
        'ការគ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'File-System Routing ធ្វើឱ្យការកំណត់ Routes កាន់តែងាយស្រួលដោយប្រើ Folder Structure។'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Project ដែលមាន Static និង Dynamic Routes។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-routing-app\` និងជ្រើសរើស TypeScript។

2. **បង្កើត Static Route:**
   - បង្កើត File \`pages/about.tsx\` ដែលបង្ហាញ \`<h1>អំពីយើង</h1>\` និង \`<p>នេះជាទំព័រអំពីយើង។</p>\`។

3. **បង្ផើត Dynamic Route:**
   - បង្ផើត File \`pages/product/[id].tsx\` ដែលបង្ហាញ \`<h1>ផលិតផល #{id}</h1>\` និង \`<p>ព័ត៌មានអំពីផលិតផល។</p>\`។
   - ប្រើ \`useRouter\` Hook ដើម្បីចាប់ Parameter \`id\`។

4. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។

5. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000/about\`
     - \`http://localhost:3000/product/123\`

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
\`\`\`

## pages/about.tsx 
\`\`\`text
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <p>នេះជាទំព័រអំពីយើង។</p>
    </div>
  );
};

export default About;
\`\`\`

## pages/product/[id].tsx 
\`\`\`text
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Product: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <h1>ផលិតផល #{id}</h1>
      <p>ព័ត៌មានអំពីផលិតផល។</p>
    </div>
  );
};

export default Product;
\`\`\`
`
  }
};

export default NextLesson2_1Content;