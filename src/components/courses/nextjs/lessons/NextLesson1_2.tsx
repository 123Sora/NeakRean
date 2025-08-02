import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson1_2Content: LessonContent = {
  title: 'Setup Development Environment',
  objectives: [
    'ដំឡើង Node.js និង npm/yarn សម្រាប់ Next.js Development',
    'បង្កើត Next.js Project ដំបូង',
    'យល់ដឹងពី Project Structure នៃ Next.js',
    'សាកល្បង Run Next.js Application ដំបូង',
  ],
  content: `
# Setup Development Environment 🛠️

---

ដើម្បីចាប់ផ្តើមអភិវឌ្ឍន៍ជាមួយ **Next.js** អ្នកត្រូវរៀបចំបរិស្ថានអភិវឌ្ឍន៍ (Development Environment) ឲ្យបានត្រឹមត្រូវ។ មេរៀននេះនឹងណែនាំអ្នកអំពីជំហាននានាដើម្បីដំឡើង Tools ចាំបាច់ និងបង្កើត Next.js Project ដំបូង។

---

## 1. ការដំឡើង Node.js និង npm/yarn

**Node.js** គឺជា Runtime Environment ដែលអនុញ្ញាតឱ្យ JavaScript ដំណើរការនៅខាង Server។ **npm** ឬ **yarn** គឺជា Package Managers សម្រាប់គ្រប់គ្រង Dependencies។

**ជំហានដំឡើង:**
1. **ទាញយក Node.js:**
   - ចូលទៅកាន់ [nodejs.org](https://nodejs.org) ហើយទាញយក Version **LTS** (Long Term Support)។
   - ដំឡើង Node.js ដោយធ្វើតាមការណែនាំនៅលើអេក្រង់។
2. **ពិនិត្យ Version:**
   \`\`\`bash
   node -v
   npm -v
   \`\`\`
   ប្រសិនបើចង់ប្រើ **yarn**:
   \`\`\`bash
   npm install -g yarn
   yarn -v
   \`\`\`

---

## 2. ការបង្កើត Next.js Project ដំបូង

Next.js ផ្តល់នូវ Command-line Tool ដើម្បីបង្កើត Project យ៉ាងងាយស្រួល។

**ជំហាន:**
1. **បង្កើត Project:**
   \`\`\`bash
   npx create-next-app@latest my-next-app
   \`\`\`
   - \`my-next-app\` គឺជាឈ្មោះ Folder នៃ Project របស់អ្នក។
   - ធ្វើតាម Prompts ដើម្បីជ្រើសរើស Options (ឧទាហរណ៍៖ TypeScript, ESLint, Tailwind CSS)។
2. **ចូលទៅក្នុង Project Folder:**
   \`\`\`bash
   cd my-next-app
   \`\`\`
3. **Run Development Server:**
   \`\`\`bash
   npm run dev
   \`\`\`
   - ចូលទៅ \`http://localhost:3000\` នៅក្នុង Browser ដើម្បីមើល Next.js App ដំបូងរបស់អ្នក។

---

## 3. ការយល់ដឹងពី Project Structure

នៅពេលបង្កើត Next.js Project អ្នកនឹងឃើញ Folder Structure ដូចខាងក្រោម៖

- **\`pages/\`**: ផ្ទុក Files ដែលតំណាងឱ្យ Routes (ឧទាហរណ៍ \`index.tsx\` គឺជា Homepage)។
- **\`public/\`**: ផ្ទុក Static Assets ដូចជា Images, Fonts។
- **\`styles/\`**: ផ្ទុក CSS Files (ឧទាហរណ៍ \`globals.css\`)។
- **\`app/\`** (នៅក្នុង App Router): ប្រើសម្រាប់ Server Components និង Layouts។
- **\`package.json\`**: ផ្ទុក Dependencies និង Scripts។

**ឧទាហរណ៍ Structure:**
\`\`\`
my-next-app/
├── pages/
│   ├── index.tsx
│   ├── _app.tsx
│   └── api/
├── public/
│   ├── favicon.ico
│   └── images/
├── styles/
│   ├── globals.css
├── package.json
└── next.config.js
\`\`\`

---

## 4. ការ Run Next.js App ដំបូង

បន្ទាប់ពីបង្កើត Project:
1. Run Command:
   \`\`\` bash
   npm run dev
   \`\`\`
2. ចូលទៅ \`http://localhost:3000\` នៅក្នុង Browser។
3. កែប្រែ File \`pages/index.tsx\` ហើយសង្កេតមើលការផ្លាស់ប្តូរនៅលើ Browser (Fast Refresh)។

---

## 5. ឧទាហរណ៍កូដសាមញ្ញ

នេះជាឧទាហរណ៍នៃ File \`pages/index.tsx\` ដែលបង្កើត Homepage:

\`\`\`tsx
// pages/index.tsx
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>នេះជា Next.js Project ដំបូងរបស់ខ្ញុំ។</p>
    </div>
  );
};

export default Home;
\`\`\`

**លទ្ធផល:**
- នៅ \`http://localhost:3000\` អ្នកនឹងឃើញទំព័រដែលបង្ហាញ "សូមស្វាគមន៍មកកាន់ Next.js!"។

---

## 6. គន្លឹះសម្រាប់ Setup

- **ប្រើ LTS Version នៃ Node.js:** ដើម្បីធានាភាពស្ថិរភាព។
- **ពិនិត្យ Dependencies:** ប្រើ \`npm install\` ឬ \`yarn install\` ប្រសិនបើមានបញ្ហា។
- **សាកល្បង Fast Refresh:** កែ Code ហើយសង្កេតមើល Browser ដែល Update ដោយស្វ័យប្រវត្តិ។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs](https://nextjs.org/docs) សម្រាប់ព័ត៌មានបន្ថែម។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត Homepage សាមញ្ញ</h3>
<p>បង្កើត File <code>pages/index.tsx</code> ដើម្បីបង្ហាញ Homepage។</p>
<pre><code class="language-tsx">
// pages/index.tsx
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>នេះជា Project ដំបូងរបស់ខ្ញុំ។</p>
    </div>
  );
};

export default Home;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បន្ថែម CSS ទៅ Homepage</h3>
<p>បន្ថែម Global CSS នៅក្នុង <code>styles/globals.css</code>។</p>
<pre><code class="language-css">
/* styles/globals.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #007bff;
}

.container {
  text-align: center;
  padding: 20px;
}
</code></pre>
<pre><code class="language-tsx">
// pages/index.tsx
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>នេះជា Project ដំបូងរបស់ខ្ញុំ។</p>
    </div>
  );
};

export default Home;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជា Command ដើម្បីបង្កើត Next.js Project?',
      options: [
        'npm create-next-app',
        'npx create-next-app@latest',
        'yarn init next',
        'npm init next-app'
      ],
      correct: 1,
      explanation: '`npx create-next-app@latest` គឺជា Command ដើម្បីបង្កើត Next.js Project។'
    },
    {
      question: 'តើ Folder ណាមួយផ្ទុក Pages នៅក្នុង Next.js?',
      options: [
        'public/',
        'styles/',
        'pages/',
        'components/'
      ],
      correct: 2,
      explanation: 'Folder `pages/` ផ្ទុក Files ដែលតំណាងឱ្យ Routes នៅក្នុង Next.js។'
    },
    {
      question: 'តើ Command ណាមួយប្រើដើម្បី Run Next.js App?',
      options: [
        'npm start',
        'npm run dev',
        'node index.js',
        'yarn build'
      ],
      correct: 1,
      explanation: '`npm run dev` ប្រើដើម្បី Run Development Server នៅ `http://localhost:3000`។'
    },
    {
      question: 'តើ Folder ណាមួយផ្ទុក Static Assets ដូចជា Images?',
      options: [
        'pages/',
        'public/',
        'styles/',
        'app/'
      ],
      correct: 1,
      explanation: 'Folder `public/` ផ្ទុក Static Assets ដូចជា Images, Fonts។'
    },
    {
      question: 'តើ Fast Refresh នៅក្នុង Next.js មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បង្កើន SEO',
        'ធ្វើឱ្យ Code Update បង្ហាញភ្លាមៗនៅ Browser',
        'បង្កើត API Routes',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: 'Fast Refresh អនុញ្ញាតឱ្យ Code Updates បង្ហាញភ្លាមៗនៅ Browser ដោយមិនបាត់បង់ State។'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Project ដំបូង និងបន្ថែម Homepage សាមញ្ញ។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-first-next-app\` ដើម្បីបង្កើត Project។
   - ជ្រើសរើស TypeScript នៅពេល Prompt (បើសួរ)។

2. **បង្កើត Homepage:**
   - កែ File \`pages/index.tsx\` ដើម្បីបង្ហាញ \`<h1>\` ជាមួយអត្ថបទ "សូមស្វាគមន៍មកកាន់ Next.js Project ដំបូង!"។
   - បន្ថែម \`<p>\` ដែលមានអត្ថបទ "នេះជាទំព័រដំបូងរបស់ខ្ញុំ!"។

3. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។

4. **Run Project:**
   - Run Command \`npm run dev\` និងចូលទៅ \`http://localhost:3000\` ដើម្បីមើលលទ្ធផល។

**ការណែនាំ:** បើមានបញ្ហា ពិនិត្យ Console នៅក្នុង Browser (F12) ឬ Terminal សម្រាប់ Error Messages។
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

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js Project ដំបូង!</h1>
      <p>នេះជាទំព័រដំបូងរបស់ខ្ញុំ!</p>
    </div>
  );
};

export default Home;
\`\`\`
`
  }
};

export default NextLesson1_2Content;