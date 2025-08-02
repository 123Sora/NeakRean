import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson3_5Content: LessonContent = {
  title: 'Fast Refresh',
  objectives: [
    'យល់ដឹងពី Fast Refresh នៅក្នុង Next.js',
    'ស្វែងយល់ពីរបៀបដែល Fast Refresh ធ្វើការជាមួយ React',
    'ប្រើ Fast Refresh ដើម្បីបង្កើន Developer Experience',
    'ដោះស្រាយបញ្ហាទូទៅនៅពេលប្រើ Fast Refresh',
  ],
  content: `
# Fast Refresh ⚡

---

**Fast Refresh** គឺជាមុខងារនៅក្នុង Next.js ដែលផ្តល់នូវ Live Reloading នៅពេលអភិវឌ្ឍន៍ ដោយរក្សា Component State និងបង្កើន Developer Experience។ វាជួយឱ្យអ្នកឃើញការផ្លាស់ប្តូរកូដភ្លាមៗដោយមិនចាំបាច់ Refresh Browser។

---

## 1. អ្វីទៅជា Fast Refresh?

Fast Refresh គឺជា React Feature ដែលត្រូវបាន Integrate ជាមួយ Next.js។ វាអនុញ្ញាតឱ្យ:
- **Live Updates:** ឃើញការផ្លាស់ប្តូរកូដភ្លាមៗ។
- **State Preservation:** រក្សា Component State (ឧ. \`useState\`) នៅពេលកែកូដ។
- **Error Recovery:** ស្តារឡើងវិញដោយស្វ័យប្រវត្តិបន្ទាប់ពីជួសជុល Errors។

---

## 2. របៀបបើក Fast Refresh

Fast Refresh ត្រូវបានបើកដោយស្វ័យប្រវត្តិនៅក្នុង Next.js នៅពេល Run Development Server ដោយប្រើ Command:
\`\`\`bash
npm run dev
\`\`\`

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/index.tsx
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Fast Refresh Demo</h1>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
};

export default Home;
\`\`\`

**លទ្ធផល:** នៅពេលកែ \`<h1>\` (ឧ. ផ្លាស់ប្តូរទៅ "Fast Refresh Test"), Browser នឹង Update ភ្លាមៗដោយរក្សា \`count\` State។

---

## 3. ការដោះស្រាយបញ្ហាទូទៅ

- **State Reset:** ប្រសិនបើកែ Module Exports (ឧ. \`export default\`), Fast Refresh នឹង Reset State។
- **Syntax Errors:** Fast Refresh បង្ហាញ Error Overlay នៅក្នុង Browser។ ជួសជុល Error ដើម្បីស្តារឡើងវិញ។
- **Unsupported Changes:** ការផ្លាស់ប្តូរនៅក្នុង \`_app.tsx\` ឬ \`_document.tsx\` តម្រូវឱ្យ Refresh ដោយដៃ។

**ឧទាហរណ៍ (Error Recovery):**
\`\`\`tsx
// pages/about.tsx
import type { NextPage } from 'next';
import { useState } from 'react';

const About: NextPage = () => {
  const [text, setText] = useState('');

  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="បញ្ចូលអត្ថបទ"
      />
      <p>អត្ថបទ: {text}</p>
    </div>
  );
};

export default About;
\`\`\`

**សាកល្បង:** បន្ថែម Syntax Error (ឧ. លុប \`}\`) ហើយជួសជុល។ Fast Refresh នឹងស្តារទំព័រដោយរក្សា \`text\` State។

---

## 4. គន្លឹះសម្រាប់ Fast Refresh

- **រក្សា Component Structure:** ជៀសវាងកែ Module Exports ដើម្បីរក្សា State។
- **ប្រើ Descriptive File Names:** ជួយ Fast Refresh កំណត់ Components។
- **ពិនិត្យ Error Overlay:** ប្រើ Browser Console ដើម្បីដោះស្រាយ Errors។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/fast-refresh](https://nextjs.org/docs/fast-refresh)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Fast Refresh ជាមួយ State Preservation</h3>
<p>បន្ថែម Counter នៅក្នុង <code>pages/index.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/index.tsx
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Fast Refresh Demo</h1>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
};

export default Home;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Fast Refresh ជាមួយ Error Recovery</h3>
<p>បន្ថែម Input Field នៅក្នុង <code>pages/about.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/about.tsx
import type { NextPage } from 'next';
import { useState } from 'react';

const About: NextPage = () => {
  const [text, setText] = useState('');

  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="បញ្ចូលអត្ថបទ"
      />
      <p>អត្ថបទ: {text}</p>
    </div>
  );
};

export default About;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Fast Refresh ជាអ្វី?',
      options: [
        'SEO Optimization Tool',
        'Live Reloading Feature',
        'Image Optimization Component',
        'Font Preloading Module'
      ],
      correct: 1,
      explanation: 'Fast Refresh ជា Live Reloading Feature ដែលរក្សា Component State។'
    },
    {
      question: 'តើ Command ណាមួយបើក Fast Refresh?',
      options: [
        'npm run build',
        'npm run dev',
        'npm install',
        'npx create-next-app'
      ],
      correct: 1,
      explanation: '`npm run dev` បើក Fast Refresh នៅក្នុង Development Mode។'
    },
    {
      question: 'តើ Fast Refresh រក្សាអ្វីនៅពេលកែកូដ?',
      options: [
        'API Responses',
        'Component State',
        'Metadata',
        'Image Sizes'
      ],
      correct: 1,
      explanation: 'Fast Refresh រក្សា Component State (ឧ. `useState`)។'
    },
    {
      question: 'តើ Fast Refresh ដំណើរការជាមួយ Framework ណា?',
      options: [
        'Vue.js',
        'React',
        'Angular',
        'Svelte'
      ],
      correct: 1,
      explanation: 'Fast Refresh ជា React Feature ដែល Integrate ជាមួយ Next.js។'
    },
    {
      question: 'តើការផ្លាស់ប្តូរអ្វីនឹង Reset Component State?',
      options: [
        'កែ `<h1>` Tag',
        'កែ Module Exports',
        'កែ CSS Classes',
        'កែ `useState`'
      ],
      correct: 1,
      explanation: 'ការផ្លាស់ប្តូរ� Module Exports (ឧ. `export default`) នឹង Reset State។'
    },
    {
      question: 'តើ Fast Refresh បង្ហាញអ្វីនៅពេលមាន Syntax Error?',
      options: [
        'Blank Page',
        'Error Overlay',
        'Console Log',
        'API Response'
      ],
      correct: 1,
      explanation: 'Fast Refresh បង្ហាញ Error Overlay នៅក្នុង Browser។'
    },
    {
      question: 'តើ File ណាមួយតម្រូវឱ្យ Refresh ដោយដៃ?',
      options: [
        'pages/index.tsx',
        'pages/_app.tsx',
        'styles/globals.css',
        'components/Button.tsx'
      ],
      correct: 1,
      explanation: 'ការផ្លាស់ប្តូរនៅ `_app.tsx` ឬ `_document.tsx` តម្រូវឱ្យ Refresh ដោយដៃ។'
    },
    {
      question: 'តើ Fast Refresh ជួយ Developer Experience ដោយរបៀបណា?',
      options: [
        'បង្ផើត API Routes',
        'ធ្វើ Live Updates និង State Preservation',
        'Optimize Images',
        'Preload Fonts'
      ],
      correct: 1,
      explanation: 'Fast Refresh ធ្វើ Live Updates និងរក្សា State ដើម្បីបង្កើន Developer Experience។'
    },
    {
      question: 'តើ Fast Refresh អាចស្តារឡើងវិញបន្ទាប់ពីជួសជុល Error បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: 'Fast Refresh អាចស្តារឡើងវិញដោយស្វ័យប្រវត្តិបន្ទាប់ពីជួសជុល Error។'
    },
    {
      question: 'តើ Fast Refresh គាំទ្រការផ្លាស់ប្តូរនៅក្នុង Component ណាខ្លះ?',
      options: [
        'Client-side Components តែប៉ុណ្ណោះ',
        'Server-side Components តែប៉ុណ្ណោះ',
        'Client-side និង Server-side Components',
        'API Routes'
      ],
      correct: 0,
      explanation: 'Fast Refresh គាំទ្រការផ្លាស់ប្តូរនៅក្នុង Client-side Components។'
    },
    {
      question: 'តើអ្នកអាចបិទ Fast Refresh បានទេ?',
      options: [
        'បាន, នៅក្នុង `next.config.js`',
        'មិនបាន',
        'បាន, នៅក្នុង `styles/globals.css`',
        'បាន, នៅក្នុង `pages/_app.tsx`'
      ],
      correct: 1,
      explanation: 'Fast Refresh ត្រូវបានបើកដោយស្វ័យប្រវត្តិ និងមិនអាចបិទបាន។'
    },
    {
      question: 'តើ Fast Refresh មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'SEO Optimization',
        'State Preservation និង Live Updates',
        'Image Compression',
        'Font Subsetting'
      ],
      correct: 1,
      explanation: 'Fast Refresh ផ្តល់ State Preservation និង Live Updates សម្រាប់ Developer Experience។'
    },
    {
      question: 'តើអ្នកគួរពិនិត្យអ្វីនៅពេល Fast Refresh មិនដំណើរការ?',
      options: [
        'API Endpoints',
        'Browser Console និង Error Overlay',
        'Image Sizes',
        'Font Subsets'
      ],
      correct: 1,
      explanation: 'ពិនិត្យ Browser Console និង Error Overlay ដើម្បីដោះស្រាយបញ្ហា Fast Refresh។'
    }
  ],
  lab: {
    task: `
បង្ផើត Next.js Project ដែលប្រើ Fast Refresh ដើម្បីសាកល្បង State Preservation និង Error Recovery។

**តម្រូវការ:**

1. **បង្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-refresh-app\` និងជ្រើសរើស TypeScript។

2. **បង្ផើត Page ជាមួយ Counter:**
   - កែ File \`pages/index.tsx\` ដើម្បីបង្ហាញ \`<h1>Fast Refresh Demo</h1>\`, \`<p>ចំនួន: {count}</p>\`, និង \`<button>បន្ថែម</button>\` ដែលបន្ថែម \`count\` State។
   - សាកល្បង Fast Refresh ដោយកែ \`<h1>\` Text និងពិនិត្យថា \`count\` State នៅតែរក្សា។

3. **បង្ផើត Page ជាមួយ Input:**
   - បង្ផើត File \`pages/about.tsx\` ដែលបង្ហាញ \`<h1>អំពីយើង</h1>\`, \`<input>\` សម្រាប់ Text Input, និង \`<p>អត្ថបទ: {text}</p>\`។
   - សាកល្បង Error Recovery ដោយបន្ថែម Syntax Error (ឧ. លុប \`}\`) ហើយជួសជុល ដើម្បីពិនិត្យថា \`text\` State នៅតែរក្សា។

4. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។

5. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\` (Counter)
     - \`http://localhost:3000/about\` (Input)
   - សាកល្បង Fast Refresh ដោយកែកូដ និងបន្ថែម Syntax Error ហើយជួសជុល។

**ការណែនាំ:** ពិនិត្យ Browser Console (F12) ឬ Terminal សម្រាប់ Error Messages។
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
import { useState } from 'react';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Fast Refresh Demo</h1>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
};

export default Home;
\`\`\`

## pages/about.tsx 
\`\`\`text
import type { NextPage } from 'next';
import { useState } from 'react';

const About: NextPage = () => {
  const [text, setText] = useState('');

  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="បញ្ចូលអត្ថបទ"
      />
      <p>អត្ថបទ: {text}</p>
    </div>
  );
};

export default About;
\`\`\`
`
  }
};

export default NextLesson3_5Content;