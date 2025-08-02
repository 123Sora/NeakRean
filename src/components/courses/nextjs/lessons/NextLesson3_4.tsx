import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson3_4Content: LessonContent = {
  title: 'Metadata (SEO Optimization)',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Metadata សម្រាប់ SEO',
    'ប្រើ `next/head` ដើម្បីបន្ថែម Metadata នៅក្នុង Next.js Pages Router',
    'កំណត់ Title, Description, និង Open Graph Tags',
    'ស្វែងយល់ពី Dynamic Metadata នៅក្នុង Dynamic Routes',
  ],
  content: `
# Metadata (SEO Optimization) 🌐

---

**Metadata** គឺជាព័ត៌មានដែលបានបន្ថែមនៅក្នុង \`<head>\` នៃ HTML ដើម្បីជួយ Search Engines និង Social Media Platforms យល់ពីខ្លឹមសារនៃទំព័រ។ នៅក្នុង Next.js Pages Router, យើងប្រើ \`next/head\` Component ដើម្បីកំណត់ Metadata។

---

## 1. អ្វីទៅជា Metadata?

Metadata រួមមាន:
- **Title:** ចំណងជើងនៃទំព័រ (ឧ. \`<title>\`)។
- **Meta Description:** ការពិពណ៌នាខ្លីអំពីទំព័រ។
- **Open Graph Tags:** សម្រាប់ Social Media Sharing (ឧ. Facebook, Twitter)។
- **Favicon:** រូបភាពតំណាងឱ្យ Website។

---

## 2. ប្រើ \`next/head\` សម្រាប់ Static Metadata

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>សូមស្វាគមន៍មកកាន់ Next.js</title>
        <meta name="description" content="នេះជា Website ដំបូងរបស់ខ្ញុំជាមួយ Next.js" />
        <meta property="og:title" content="សូមស្វាគមន៍មកកាន់ Next.js" />
        <meta property="og:description" content="នេះជា Website ដំបូងរបស់ខ្ញុំជាមួយ Next.js" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>នេះជាទំព័រដំបូង។</p>
    </div>
  );
};

export default Home;
\`\`\`

**លទ្ធផល:** Metadata នឹងត្រូវបានបន្ថែមទៅ \`<head>\` នៃទំព័រ។

---

## 3. Dynamic Metadata នៅក្នុង Dynamic Routes

សម្រាប់ Dynamic Routes, យើងអាចប្រើ \`getStaticProps\` ឬ \`getServerSideProps\` ដើម្បីទាញទិន្នន័យសម្រាប់ Metadata។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/post/[id].tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Post = { id: number; title: string; content: string };

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`);
  const post: Post = await res.json();

  return {
    props: { post },
  };
};

const Post: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <div className="container">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.slice(0, 150)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.slice(0, 150)} />
      </Head>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
\`\`\`

**លទ្ធផល:** Metadata នឹងផ្លាស់ប្តូរទៅតាមអត្ថបទនីមួយៗ។

---

## 4. គន្លឹះសម្រាប់ SEO Optimization

- **Title Length:** រក្សា Title ឱ្យនៅក្រោម 60 Characters។
- **Description Length:** Meta Description គួរតែនៅក្រោម 160 Characters។
- **Open Graph Tags:** បន្ថែម \`og:image\`, \`og:title\`, \`og:description\` សម្រាប់ Social Media។
- **Favicon:** បន្ថែម \`<link rel="icon" />\` សម្រាប់ Branding។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/api-reference/next/head](https://nextjs.org/docs/api-reference/next/head)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Static Metadata</h3>
<p>បន្ថែម Metadata នៅក្នុង <code>pages/about.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>អំពីយើង</title>
        <meta name="description" content="ស្វែងយល់អំពីក្រុមហ៊ុនរបស់យើង" />
        <meta property="og:title" content="អំពីយើង" />
        <meta property="og:description" content="ស្វែងយល់អំពីក្រុមហ៊ុនរបស់យើង" />
        <meta property="og:image" content="/images/about-og.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>អំពីយើង</h1>
      <p>នេះជាទំព័រអំពីយើង។</p>
    </div>
  );
};

export default About;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Dynamic Metadata</h3>
<p>បន្ថែម Dynamic Metadata នៅក្នុង <code>pages/product/[id].tsx</code>។</p>
<pre><code class="language-tsx">
// pages/product/[id].tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Product = { id: number; name: string; description: string };

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  // ឧទាហរណ៍ទិន្នន័យសម្រាប់ Product
  const product: Product = { id: Number(id), name: \`ផលិតផល #\${id}\`, description: \`នេះជាការពិពណ៌នាសម្រាប់ផលិតផល #\${id}\` };

  return {
    props: { product },
  };
};

const Product: NextPage<{ product: Product }> = ({ product }) => {
  return (
    <div className="container">
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
      </Head>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Component ណាមួយប្រើសម្រាប់បន្ថែម Metadata នៅក្នុង Next.js?',
      options: [
        'next/router',
        'next/head',
        'next/image',
        'next/font'
      ],
      correct: 1,
      explanation: '`next/head` Component ប្រើសម្រាប់បន្ថែម Metadata នៅក្នុង `<head>`។'
    },
    {
      question: 'តើ Metadata មានសារៈសំខាន់សម្រាប់អ្វី?',
      options: [
        'Dynamic Routing',
        'SEO និង Social Media Sharing',
        'Image Optimization',
        'Font Optimization'
      ],
      correct: 1,
      explanation: 'Metadata ជួយ Search Engines និង Social Media Platforms យល់ពីខ្លឹមសារទំព័រ។'
    },
    {
      question: 'តើ Tag ណាមួយប្រើសម្រាប់ Title នៃទំព័រ?',
      options: [
        '<meta name="title">',
        '<title>',
        '<meta property="og:title">',
        '<link rel="title">'
      ],
      correct: 1,
      explanation: '`<title>` Tag ប្រើសម្រាប់កំណត់ចំណងជើងនៃទំព័រ។'
    },
    {
      question: 'តើ Meta Description គួរមានប្រវែងប៉ុន្មាន Characters?',
      options: [
        '60',
        '160',
        '300',
        '500'
      ],
      correct: 1,
      explanation: 'Meta Description គួរតែនៅក្រោម 160 Characters សម្រាប់ SEO។'
    },
    {
      question: 'តើ Open Graph Tags ប្រើសម្រាប់អ្វី?',
      options: [
        'Dynamic Routing',
        'Social Media Sharing',
        'Image Optimization',
        'Font Preloading'
      ],
      correct: 1,
      explanation: 'Open Graph Tags ប្រើសម្រាប់ Social Media Sharing (ឧ. Facebook, Twitter)។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម Dynamic Metadata ដោយរបៀបណា?',
      options: [
        'ប្រើ `next/image`',
        'ប្រើ `getStaticProps` ឬ `getServerSideProps`',
        'ប្រើ `next/font`',
        'ប្រើ `useEffect`'
      ],
      correct: 1,
      explanation: '`getStaticProps` ឬ `getServerSideProps` ប្រើសម្រាប់ Dynamic Metadata។'
    },
    {
      question: 'តើ Tag ណាមួយប្រើសម្រាប់ Favicon?',
      options: [
        '<meta name="favicon">',
        '<link rel="icon">',
        '<meta property="og:icon">',
        '<title>'
      ],
      correct: 1,
      explanation: '`<link rel="icon">` ប្រើសម្រាប់កំណត់ Favicon។'
    },
    {
      question: 'តើ Title គួរមានប្រវែងប៉ុន្មាន Characters?',
      options: [
        '60',
        '160',
        '300',
        '500'
      ],
      correct: 0,
      explanation: 'Title គួរតែនៅក្រោម 60 Characters សម្រាប់ SEO។'
    },
    {
      question: 'តើ `og:image` Tag មានតួនាទីអ្វី?',
      options: [
        'កំណត់ចំណងជើង',
        'កំណត់រូបភាពសម្រាប់ Social Media',
        'កំណត់ Font',
        'កំណត់ Description'
      ],
      correct: 1,
      explanation: '`og:image` កំណត់រូបភាពសម្រាប់ Social Media Sharing។'
    },
    {
      question: 'តើ `next/head` ត្រូវបាន Import ពីណា?',
      options: [
        'next/router',
        'next/head',
        'next/image',
        'next/font'
      ],
      correct: 1,
      explanation: '`next/head` ត្រូវបាន Import ពី `next/head` Module។'
    },
    {
      question: 'តើ Metadata អាចបន្ថែមនៅក្នុង Component ណាមួយបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `getStaticProps`',
        'បាន, ប៉ុន្តែត្រូវប្រើ Tailwind CSS'
      ],
      correct: 0,
      explanation: '`next/head` អាចបន្ថែម Metadata នៅក្នុង Component ណាមួយ។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `next/head` ជាមួយ Dynamic Routes បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/font`'
      ],
      correct: 0,
      explanation: '`next/head` អាចប្រើជាមួយ Dynamic Routes ដោយប្រើ `getStaticProps` ឬ `getServerSideProps`។'
    },
    {
      question: 'តើ Metadata ជួយ SEO ដោយរបៀបណា?',
      options: [
        'បង្ផើត Dynamic Routes',
        'ជួយ Search Engines យល់ខ្លឹមសារទំព័រ',
        'Optimize Images',
        'Preload Fonts'
      ],
      correct: 1,
      explanation: 'Metadata ជួយ Search Engines យល់ខ្លឹមសារទំព័រ ដើម្បីបង្កើន SEO។'
    }
  ],
  lab: {
    task: `
បង្ផើត Next.js Project ដែលប្រើ \`next/head\` សម្រាប់ SEO Optimization។

**តម្រូវការ:**

1. **បង្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-seo-app\` និងជ្រើសរើស TypeScript។

2. **បង្ផើត Page ជាមួយ Static Metadata:**
   - កែ File \`pages/index.tsx\` ដើម្បីបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>\` និង \`<p>នេះជាទំព័រដំបូង។</p>\`។
   - បន្ថែម Metadata ដោយប្រើ \`next/head\`:
     - \`<title>សូមស្វាគមន៍មកកាន់ Next.js</title>\`
     - \`<meta name="description" content="នេះជា Website ដំបូងរបស់ខ្ញុំជាមួយ Next.js" />\`
     - \`<meta property="og:title" content="សូមស្វាគមន៍មកកាន់ Next.js" />\`
     - \`<meta property="og:description" content="នេះជា Website ដំបូងរបស់ខ្ញុំជាមួយ Next.js" />\`
     - \`<meta property="og:image" content="/images/og-image.jpg" />\`
     - \`<link rel="icon" href="/favicon.ico" />\`

3. **បង្ផើត Page ជាមួយ Dynamic Metadata:**
   - បង្ផើត File \`pages/product/[id].tsx\` ដែលបង្ហាញ \`<h1>ផលិតផល #{id}</h1>\` និង \`<p>នេះជាការពិពណ៌នាសម្រាប់ផលិតផល #{id}</p>\`។
   - ប្រើ \`getServerSideProps\` ដើម្បីទាញទិន្នន័យ Product (ឧ. \`{ id, name: "ផលិតផល #{id}", description: "នេះជាការពិពណ៌នាសម្រាប់ផលិតផល #{id}" }\`)។
   - បន្ថែម Dynamic Metadata ដោយប្រើ \`next/head\` ដោយផ្អែកលើ Product Data។

4. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។

5. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\` (Static Metadata)
     - \`http://localhost:3000/product/123\` (Dynamic Metadata)

**ការណែនាំ:** ដាក់ File \`og-image.jpg\` និង \`favicon.ico\` នៅក្នុង \`public/\`។ ពិនិត្យ Browser Console (F12) ឬ Terminal សម្រាប់ Error Messages។
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

## pages/index.tsx 
\`\`\`text
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>សូមស្វាគមន៍មកកាន់ Next.js</title>
        <meta name="description" content="នេះជា Website ដំបូងរបស់ខ្ញុំជាមួយ Next.js" />
        <meta property="og:title" content="សូមស្វាគមន៍មកកាន់ Next.js" />
        <meta property="og:description" content="នេះជា Website ដំបូងរបស់ខ្ញុំជាមួយ Next.js" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>នេះជាទំព័រដំបូង។</p>
    </div>
  );
};

export default Home;
\`\`\`

## pages/product/[id].tsx 
\`\`\`text
import type { NextPage } from 'next';
import Head from 'next/head';

type Product = { id: number; name: string; description: string };

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const product: Product = {
    id: Number(id),
    name: \`ផលិតផល #\${id}\`,
    description: \`នេះជាការពិពណ៌នាសម្រាប់ផលិតផល #\${id}\`
  };

  return {
    props: { product },
  };
};

const Product: NextPage<{ product: Product }> = ({ product }) => {
  return (
    <div className="container">
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
      </Head>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
\`\`\`
`
  }
};

export default NextLesson3_4Content;