import type { LessonContent } from '../../../../types/LessonTypes';

const NextLesson3_1Content: LessonContent = {
  title: 'Styling in Next.js',
  objectives: [
    'យល់ដឹងពីវិធីសាស្ត្រនៃការបន្ថែម Styling នៅក្នុង Next.js',
    'ប្រើ CSS Modules សម្រាប់ Scoped Styling',
    'ប្រើ Tailwind CSS សម្រាប់ Rapid Styling',
    'ស្វែងយល់ពី Global CSS និងការប្រើប្រាស់វា',
  ],
  content: `
# Styling in Next.js 🎨

---

Next.js ផ្តល់នូវវិធីសាស្ត្រច្រើនសម្រាប់ Styling ដូចជា **Global CSS**, **CSS Modules**, **Tailwind CSS**, និង CSS-in-JS។ មេរៀននេះនឹងផ្តោតលើ CSS Modules និង Tailwind CSS ដែលជាវិធីសាស្ត្រពេញនិយមបំផុត។

---

## 1. Global CSS

Global CSS ត្រូវបានបន្ថែមនៅក្នុង File \`styles/globals.css\` និង Import នៅក្នុង \`pages/_app.tsx\`។

**ឧទាហរណ៍:**
\`\`\`css
/* styles/globals.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

h1 {
  color: #007bff;
}
\`\`\`

\`\`\`tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
\`\`\`

---

## 2. CSS Modules

CSS Modules អនុញ្ញាតឱ្យ Styling មាន Scope តាម Component ដោយប្រើ Files ដែលមាន Extension \`.module.css\`។

**ឧទាហរណ៍:**
\`\`\`css
/* styles/Home.module.css */
.container {
  text-align: center;
  padding: 20px;
}

.title {
  color: #007bff;
}
\`\`\`

\`\`\`tsx
// pages/index.tsx
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>នេះជាទំព័រដំបូង។</p>
    </div>
  );
};

export default Home;
\`\`\`

**លទ្ធផល:** Styling នឹងអនុវត្តតែលើ Component នេះប៉ុណ្ណោះ។

---

## 3. Tailwind CSS

**Tailwind CSS** គឺជា Utility-first CSS Framework ដែលអនុញ្ញាតឱ្យអ្នកបន្ថែម Styles ដោយផ្ទាល់នៅក្នុង JSX/TSX។

**ការដំឡើង Tailwind CSS:**
1. ដំឡើង Dependencies:
   \`\`\`bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   \`\`\`
2. កែ File \`tailwind.config.js\`:
   \`\`\`js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       './pages/**/*.{js,ts,jsx,tsx}',
       './components/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   \`\`\`
3. បន្ថែម Directives នៅក្នុង \`styles/globals.css\`:
   \`\`\`css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   \`\`\`

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/index.tsx
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="text-center p-5">
      <h1 className="text-3xl text-blue-500">សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>នេះជាទំព័រដំបូងជាមួយ Tailwind CSS។</p>
    </div>
  );
};

export default Home;
\`\`\`

---

## 4. ការប្រៀបធៀប Styling Methods

| វិធីសាស្ត្រ       | អត្ថប្រយោជន៍                     | គុណវិបត្តិ                     |
|---------------------|-----------------------------------|---------------------------------|
| **Global CSS**      | ងាយស្រួលប្រើ                   | អាចប៉ះពាល់ Components ផ្សេង |
| **CSS Modules**     | Scoped Styling, Type-safe        | តម្រូវឱ្យបង្ផើត Files ច្រើន   |
| **Tailwind CSS**    | Rapid Development, Utility-first | Learning Curve, Verbose Classes |

---

## 5. គន្លឹះសម្រាប់ Styling

- **ប្រើ CSS Modules សម្រាប់ Scoped Styling:** ការពារការប៉ះទង្គិច Styles។
- **ប្រើ Tailwind CSS សម្រាប់ Prototyping:** លឿននិងងាយស្រួល។
- **រៀបចំ File Structure:** រក្សា CSS Files នៅក្នុង \`styles/\`។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/styling](https://nextjs.org/docs/styling)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ CSS Modules</h3>
<p>បង្ផើត File <code>styles/About.module.css</code> និង <code>pages/about.tsx</code>។</p>
<pre><code class="language-css">
/* styles/About.module.css */
.container {
  text-align: center;
  padding: 20px;
}

.title {
  color: #28a745;
}
</code></pre>
<pre><code class="language-tsx">
// pages/about.tsx
import type { NextPage } from 'next';
import styles from '../styles/About.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>អំពីយើង</h1>
      <p>នេះជាទំព័រអំពីយើង។</p>
    </div>
  );
};

export default About;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Tailwind CSS</h3>
<p>ប្រើ Tailwind CSS នៅក្នុង <code>pages/index.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/index.tsx
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="text-center p-5 bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-blue-600 font-bold">សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p className="text-lg mt-4">នេះជាទំព័រដំបូងជាមួយ Tailwind CSS។</p>
    </div>
  );
};

export default Home;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Global CSS ត្រូវបាន Import នៅក្នុង File ណា?',
      options: [
        'pages/index.tsx',
        'pages/_app.tsx',
        'pages/api/hello.ts',
        'next.config.js'
      ],
      correct: 1,
      explanation: 'Global CSS ត្រូវបាន Import នៅក្នុង `pages/_app.tsx`។'
    },
    {
      question: 'តើ CSS Modules ប្រើ File Extension អ្វី?',
      options: [
        '.css',
        '.module.css',
        '.scss',
        '.style.css'
      ],
      correct: 1,
      explanation: 'CSS Modules ប្រើ Extension `.module.css`។'
    },
    {
      question: 'តើ Tailwind CSS ជាអ្វី?',
      options: [
        'CSS-in-JS Library',
        'Utility-first CSS Framework',
        'Component Library',
        'JavaScript Framework'
      ],
      correct: 1,
      explanation: 'Tailwind CSS ជា Utility-first CSS Framework។'
    },
    {
      question: 'តើអ្នក Import CSS Module ដោយរបៀបណា?',
      options: [
        'import styles from "../styles/Home.module.css"',
        'import "../styles/Home.module.css"',
        'require("../styles/Home.module.css")',
        'import styles from "../styles/globals.css"'
      ],
      correct: 0,
      explanation: 'CSS Modules ត្រូវបាន Import ដោយ `import styles from "../styles/Home.module.css"`។'
    },
    {
      question: 'តើ Tailwind CSS តម្រូវឱ្យដំឡើង Package អ្វីខ្លះ?',
      options: [
        'tailwindcss, postcss, autoprefixer',
        'react, react-dom',
        'next, typescript',
        'css-loader, style-loader'
      ],
      correct: 0,
      explanation: 'Tailwind CSS តម្រូវឱ្យដំឡើង `tailwindcss`, `postcss`, និង `autoprefixer`។'
    },
    {
      question: 'តើ Class នៅក្នុង Tailwind CSS មានលក្ខណៈបែបណា?',
      options: [
        'Verbose Classes',
        'Scoped Classes',
        'Dynamic Classes',
        'Global Classes'
      ],
      correct: 0,
      explanation: 'Tailwind CSS ប្រើ Verbose Utility Classes ដូចជា `text-center`, `p-5`។'
    },
    {
      question: 'តើអ្នកបន្ថែម Tailwind Directives នៅក្នុង File ណា?',
      options: [
        'next.config.js',
        'styles/globals.css',
        'pages/_app.tsx',
        'tailwind.config.js'
      ],
      correct: 1,
      explanation: 'Tailwind Directives ត្រូវបានបន្ថែមនៅក្នុង `styles/globals.css`។'
    },
    {
      question: 'តើ CSS Modules មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'Global Styling',
        'Scoped Styling',
        'Real-time Updates',
        'Dynamic Data'
      ],
      correct: 1,
      explanation: 'CSS Modules ផ្តល់ Scoped Styling ដើម្បីការពារការប៉ះទង្គិច Styles។'
    },
    {
      question: 'តើអ្នកកំណត់ Content Paths នៅក្នុង Tailwind ដោយរបៀបណា?',
      options: [
        'នៅក្នុង `next.config.js`',
        'នៅក្នុង `tailwind.config.js`',
        'នៅក្នុង `styles/globals.css`',
        'នៅក្នុង `pages/_app.tsx`'
      ],
      correct: 1,
      explanation: 'Content Paths ត្រូវបានកំណត់នៅក្នុង `tailwind.config.js`។'
    },
    {
      question: 'តើ Global CSS មានគុណវិបត្តិអ្វី?',
      options: [
        'Scoped Styling',
        'អាចប៉ះពាល់ Components ផ្សេង',
        'Verbose Classes',
        'Slow Performance'
      ],
      correct: 1,
      explanation: 'Global CSS អាចប៉ះពាល់ Components ផ្សេងដោយសារគ្មាន Scope។'
    },
    {
      question: 'តើ Command ណាមួយប្រើដើម្បីបង្ផើត `tailwind.config.js`?',
      options: [
        'npm install tailwindcss',
        'npx tailwindcss init -p',
        'npm run dev',
        'npx create-next-app'
      ],
      correct: 1,
      explanation: '`npx tailwindcss init -p` បង្ផើត `tailwind.config.js` និង `postcss.config.js`។'
    },
    {
      question: 'តើ Tailwind CSS ស័ក្តិសមសម្រាប់អ្វី?',
      options: [
        'Database Management',
        'Rapid Prototyping',
        'API Development',
        'Server-Side Rendering'
      ],
      correct: 1,
      explanation: 'Tailwind CSS ស័ក្តិសមសម្រាប់ Rapid Prototyping ដោយសារ Utility-first Approach។'
    },
    {
      question: 'តើអ្នកអាចប្រើ CSS Modules និង Tailwind CSS ក្នុង Project តែមួយបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ CSS-in-JS',
        'បាន, ប៉ុន្តែត្រូវប្រើ Global CSS'
      ],
      correct: 0,
      explanation: 'អ្នកអាចប្រើ CSS Modules និង Tailwind CSS ក្នុង Project តែមួយ។'
    }
  ],
  lab: {
    task: `
បង្ផើត Next.js Project ដែលប្រើ CSS Modules និង Tailwind CSS សម្រាប់ Styling។

**តម្រូវការ:**

1. **បង្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-styling-app\` និងជ្រើសរើស TypeScript។
   - ដំឡើង Tailwind CSS ដោយប្រើ \`npm install -D tailwindcss postcss autoprefixer\` និង \`npx tailwindcss init -p\`។

2. **បង្ផើត Page ជាមួយ CSS Modules:**
   - បង្ផើត File \`pages/about.tsx\` និង \`styles/About.module.css\`។
   - បង្ហាញ \`<h1>អំពីយើង</h1>\` និង \`<p>នេះជាទំព័រអំពីយើង។</p>\`។
   - បន្ថែម Styles នៅក្នុង \`styles/About.module.css\`:
     - \`.container\`: \`text-align: center; padding: 20px;\`
     - \`.title\`: \`color: #28a745;\`

3. **បង្ផើត Page ជាមួយ Tailwind CSS:**
   - កែ File \`pages/index.tsx\` ដើម្បីបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>\` និង \`<p>នេះជាទំព័រដំបូង។</p>\`។
   - ប្រើ Tailwind Classes: \`text-center\`, \`p-5\`, \`text-3xl\`, \`text-blue-500\`, \`bg-gray-100\`, \`min-h-screen\`។

4. **កំណត់ Tailwind Config:**
   - កែ \`tailwind.config.js\` ដើម្បីកំណត់ Content Paths:
     \`\`\`js
     content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
     \`\`\`
   - បន្ថែម Directives នៅក្នុង \`styles/globals.css\`:
     \`\`\`css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     \`\`\`

5. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\` (Tailwind CSS)
     - \`http://localhost:3000/about\` (CSS Modules)

**ការណែនាំ:** ពិនិត្យ Console នៅក្នុង Browser (F12) ឬ Terminal សម្រាប់ Error Messages។
    `,
    solution: `
## styles/globals.css 
\`\`\`text
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

## styles/About.module.css 
\`\`\`text
.container {
  text-align: center;
  padding: 20px;
}

.title {
  color: #28a745;
}
  \`\`\`

## pages/about.tsx 
\`\`\`text
import type { NextPage } from 'next';
import styles from '../styles/About.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>អំពីយើង</h1>
      <p>នេះជាទំព័រអំពីយើង។</p>
    </div>
  );
};

export default About;
\`\`\`

## pages/index.tsx 
\`\`\`text
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="text-center p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl text-blue-500">សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p className="text-lg mt-4">នេះជាទំព័រដំបូង។</p>
    </div>
  );
};

export default Home;
\`\`\`

## tailwind.config.js 
\`\`\`text
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
\`\`\`
`
  }
};

export default NextLesson3_1Content;