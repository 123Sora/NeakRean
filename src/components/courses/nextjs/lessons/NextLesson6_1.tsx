import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson6_1Content: LessonContent = {
  title: 'Deployment',
  objectives: [
    'យល់ដឹងពីការដាក់ពង្រាយ (Deploy) Next.js Application',
    'រៀបចំ Project សម្រាប់ Production',
    'ដាក់ពង្រាយនៅលើ Vercel',
    'គ្រប់គ្រង Environment Variables និង Build Process',
  ],
  content: `
# Deployment 🚀

---

**Deployment** គឺជាដំណើរការនាំ Next.js Application ទៅដំណើរការនៅលើ Production Server។ **Vercel** គឺជា Platform ពេញនិយមសម្រាប់ Deploy Next.js ព្រោះវាត្រូវបានបង្កើតដោយអ្នកអភិវឌ្ឍ Next.js។

---

## 1. រៀបចំ Project សម្រាប់ Deployment

**ជំហាន:**
1. **កំណត់ \`next.config.js\`:**
   - បន្ថែម Configuration ដូចជា Image Domains ឬ Environment Variables។
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

2. **បង្កើត Production Build:**
   - ប្រើ Command:
     \`\`\`bash
     npm run build
     \`\`\`
   - ពិនិត្យ Output នៅក្នុង Terminal ដើម្បីធានាថាមិនមាន Errors។

3. **សាកល្បង Locally:**
   - ប្រើ Command:
     \`\`\`bash
     npm run start
     \`\`\`
   - ចូលទៅ \`http://localhost:3000\` ដើម្បីសាកល្បង Production Build។

---

## 2. ដាក់ពង្រាយនៅលើ Vercel

**ជំហាន:**
1. **បង្កើត Account:** ចុះឈ្មោះនៅ [vercel.com](https://vercel.com)។
2. **ដំឡើង Vercel CLI:**
   \`\`\`bash
   npm install -g vercel
   \`\`\`
3. **Login:**
   \`\`\`bash
   vercel login
   \`\`\`
4. **Deploy:**
   - នៅក្នុង Project Directory, ប្រើ Command:
     \`\`\`bash
     vercel
     \`\`\`
   - Vercel នឹង Detect Next.js Project និង Deploy ដោយស្វ័យប្រវត្តិ។
5. **Deploy ទៅ Production:**
   \`\`\`bash
   vercel --prod
   \`\`\`

**លទ្ធផល:** Vercel ផ្តល់ URL (ឧ. \`https://my-app.vercel.app\`)។

---

## 3. គ្រប់គ្រង Environment Variables

**Environment Variables** ប្រើសម្រាប់ទុក Sensitive Data (ឧ. API Keys)។

**ឧទាហរណ៍:**
\`\`\`env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
\`\`\`

**ការប្រើ:**
\`\`\`tsx
// app/page.tsx
export default async function Home() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const data = await res.json();

  return (
    <div className="container">
      <h1>សូមស្វាគមន៍</h1>
      <p>{data.message}</p>
    </div>
  );
}
\`\`\`

**នៅលើ Vercel:**
- បន្ថែម Environment Variables នៅក្នុង Vercel Dashboard > Settings > Environment Variables។

---

## 4. គន្លឹះសម្រាប់ Deployment

- **ប្រើ Vercel CLI:** សម្រាប់ Deployment ងាយស្រួល។
- **ពិនិត្យ Build Output:** ដើម្បីរក Errors។
- **ប្រើ \`.env.local\`:** សម្រាប់ Local Development។
- **អាន Documentation:** ចូលទៅ [vercel.com/docs](https://vercel.com/docs) និង [nextjs.org/docs/app/building-your-application/deploying](https://nextjs.org/docs/app/building-your-application/deploying)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ កំណត់ Environment Variables</h3>
<p>បង្កើត <code>.env.local</code> និងប្រើនៅក្នុង <code>app/page.tsx</code>។</p>
<pre><code class="language-env">
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
</code></pre>
<pre><code class="language-tsx">
// app/page.tsx
export default async function Home() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const data = await res.json();

  return (
    <div className="container">
      <h1>សូមស្វាគមន៍</h1>
      <p>{data.message}</p>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ កំណត់ next.config.js</h3>
<p>កំណត់ Image Domains នៅក្នុង <code>next.config.js</code>។</p>
<pre><code class="language-js">
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
};

module.exports = nextConfig;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Platform ណាមួយពេញនិយមសម្រាប់ Deploy Next.js?',
      options: [
        'Heroku',
        'Vercel',
        'Netlify',
        'AWS'
      ],
      correct: 1,
      explanation: 'Vercel ជា Platform ពេញនិយមសម្រាប់ Deploy Next.js។'
    },
    {
      question: 'តើ Command ណាមួយប្រើសម្រាប់បង្កើត Production Build?',
      options: [
        'npm run dev',
        'npm run build',
        'npm run start',
        'vercel login'
      ],
      correct: 1,
      explanation: '`npm run build` ប្រើសម្រាប់បង្កើត Production Build។'
    },
    {
      question: 'តើ Command ណាមួយសាកល្បង Production Build Locally?',
      options: [
        'npm run dev',
        'npm run build',
        'npm run start',
        'vercel'
      ],
      correct: 2,
      explanation: '`npm run start` សាកល្បង Production Build Locally។'
    },
    {
      question: 'តើ Command ណាមួយប្រើសម្រាប់ Deploy នៅលើ Vercel?',
      options: [
        'vercel',
        'npm run build',
        'npm run start',
        'vercel login'
      ],
      correct: 0,
      explanation: '`vercel` Command ប្រើសម្រាប់ Deploy នៅលើ Vercel។'
    },
    {
      question: 'តើ Environment Variables ត្រូវបានទុកនៅ File ណា?',
      options: [
        'next.config.js',
        '.env.local',
        'package.json',
        'vercel.json'
      ],
      correct: 1,
      explanation: 'Environment Variables ត្រូវបានទុកនៅ `.env.local`។'
    },
    {
      question: 'តើ `NEXT_PUBLIC_` Prefix ប្រើសម្រាប់អ្វី?',
      options: [
        'Server-side Variables',
        'Client-side Variables',
        'Database Connection',
        'Image Optimization'
      ],
      correct: 1,
      explanation: '`NEXT_PUBLIC_` Prefix ប្រើសម្រាប់ Client-side Variables។'
    },
    {
      question: 'តើ Vercel CLI ត្រូវបានដំឡើងដោយ Command ណា?',
      options: [
        'npm install next',
        'npm install -g vercel',
        'npm run build',
        'vercel login'
      ],
      correct: 1,
      explanation: '`npm install -g vercel` ដំឡើង Vercel CLI។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម Environment Variables នៅ Vercel Dashboard បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: 'Environment Variables អាចបន្ថែមនៅ Vercel Dashboard។'
    },
    {
      question: 'តើ `next.config.js` ប្រើសម្រាប់អ្វី?',
      options: [
        'Data Fetching',
        'Configuration សម្រាប់ Next.js',
        'SEO Optimization',
        'Client-side Interactivity'
      ],
      correct: 1,
      explanation: '`next.config.js` ប្រើសម្រាប់ Configuration សម្រាប់ Next.js។'
    },
    {
      question: 'តើ Command ណាមួយ Deploy ទៅ Production នៅលើ Vercel?',
      options: [
        'vercel',
        'vercel --prod',
        'npm run build',
        'npm run start'
      ],
      correct: 1,
      explanation: '`vercel --prod` Deploy ទៅ Production នៅលើ Vercel�।'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Project និង Deploy នៅលើ Vercel។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-deployment-app --typescript\` និងជ្រើសរើស App Router។

2. **បង្កើត Root Layout:**
   - កែ File \`app/layout.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, Metadata (\`title: 'Deployment App'\`, \`description: 'Website ដែលបង្កើតជាមួយ Next.js App Router'\`), និង Import \`styles/globals.css\`។

3. **បង្កើត Home Page:**
   - កែ File \`app/page.tsx\` ដើម្បីបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ Deployment App!</h1>\` និង \`<p>នេះជាទំព័រដើម។</p>\`។

4. **បន្ថែម Environment Variable:**
   - បង្កើត File \`.env.local\` ជាមួយ \`NEXT_PUBLIC_MESSAGE=សូមស្វាគមន៍ពី Environment Variable!\`។
   - បង្ហាញ \`process.env.NEXT_PUBLIC_MESSAGE\` នៅក្នុង \`app/page.tsx\`។

5. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.container\` Class។

6. **Deploy នៅលើ Vercel:**
   - ដំឡើង Vercel CLI ដោយ \`npm install -g vercel\`។
   - Login ដោយ \`vercel login\`។
   - Deploy ដោយ \`vercel\` និង \`vercel --prod\`។
   - បន្ថែម \`NEXT_PUBLIC_MESSAGE\` នៅ Vercel Dashboard > Settings > Environment Variables។

7. **Run Project Locally:**
   - Run Command \`npm run build\` និង \`npm run start\`។
   - សាកល្បង \`http://localhost:3000\`។
   - ពិនិត្យ Vercel URL (ឧ. \`https://my-deployment-app.vercel.app\`)។

**ការណែនាំ:** ពិនិត្យ Terminal និង Browser Console (F12) សម្រាប់ Errors។
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

## .env.local 
\`\`\`text
NEXT_PUBLIC_MESSAGE=សូមស្វាគមន៍ពី Environment Variable!
\`\`\`

## app/layout.tsx 
\`\`\`text
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deployment App',
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
      <h1>សូមស្វាគមន៍មកកាន់ Deployment App!</h1>
      <p>នេះជាទំព័រដើម។</p>
      <p>{process.env.NEXT_PUBLIC_MESSAGE}</p>
    </div>
  );
}
  \`\`\`
`
  }
};

export default NextLesson6_1Content;