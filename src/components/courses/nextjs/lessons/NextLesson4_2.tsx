import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson4_2Content: LessonContent = {
  title: 'Dynamic Imports',
  objectives: [
    'យល់ដឹងពី Dynamic Imports នៅក្នុង Next.js',
    'ប្រើ `next/dynamic` ដើម្បី Load Components ដោយ Lazy Loading',
    'ប្រើ Dynamic Imports ជាមួយ Server-Side Rendering (SSR)',
    'ស្វែងយល់ពីការបង្កើន Performance ដោយ Dynamic Imports',
  ],
  content: `
# Dynamic Imports 🚀

---

**Dynamic Imports** នៅក្នុង Next.js អនុញ្ញាតឱ្យអ្នក Load Components ឬ Modules ដោយ Lazy Loading ដើម្បីកាត់បន្ថយ Bundle Size និងបង្កើន Performance។

---

## 1. អ្វីទៅជា Dynamic Imports?

Dynamic Imports អនុញ្ញាតឱ្យអ្នក Load Components នៅពេល Runtime ជំនួសឱ្យ Build Time។ វាមានអត្ថប្រយោជន៍:
- **Reduce Initial Load Time:** Load តែ Components ដែលចាំបាច់។
- **Improve Performance:** កាត់បន្ថយ JavaScript Bundle Size។
- **Support SSR:** គ្រប់គ្រង Server-Side Rendering ជាមួយ \`next/dynamic\`។

---

## 2. ប្រើ \`next/dynamic\`

**\`next/dynamic\`** គឺជា Utility ដែល Next.js ផ្តល់សម្រាប់ Dynamic Imports។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/index.tsx
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

// Dynamic Import ជាមួយ Loading Component
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>កំពុងផ្ទុក...</p>,
});

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <HeavyComponent />
    </div>
  );
};

export default Home;
\`\`\`

\`\`\`tsx
// components/HeavyComponent.tsx
import type { FC } from 'react';

const HeavyComponent: FC = () => {
  return (
    <div>
      <h2>Heavy Component</h2>
      <p>នេះជា Component ដែលត្រូវបាន Load ដោយ Dynamic Import។</p>
    </div>
  );
};

export default HeavyComponent;
\`\`\`

**លទ្ធផល:** \`HeavyComponent\` នឹងត្រូវបាន Load នៅពេល Runtime ជាមួយ Loading Placeholder។

---

## 3. Dynamic Imports ជាមួយ SSR

ដើម្បីបិទ SSR សម្រាប់ Component មួយ ប្រើ Option \`ssr: false\`។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/about.tsx
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), {
  ssr: false,
  loading: () => <p>កំពុងផ្ទុក...</p>,
});

const About: NextPage = () => {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <ClientOnlyComponent />
    </div>
  );
};

export default About;
\`\`\`

\`\`\`tsx
// components/ClientOnlyComponent.tsx
import type { FC } from 'react';
import { useState } from 'react';

const ClientOnlyComponent: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Client-Only Component</h2>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
};

export default ClientOnlyComponent;
\`\`\`

**លទ្ធផល:** \`ClientOnlyComponent\` នឹង Load នៅ Client-side តែប៉ុណ្ណោះ។

---

## 4. គន្លឹះសម្រាប់ Dynamic Imports

- **ប្រើ Loading Component:** ផ្តល់ User Feedback អំឡុងពេល Loading។
- **បិទ SSR នៅពេលចាំបាច់:** ប្រើ \`ssr: false\` សម្រាប់ Client-only Components។
- **ប្រើសម្រាប់ Heavy Components:** ដូចជា Charts ឬ Libraries ធំៗ។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/advanced-features/dynamic-imports](https://nextjs.org/docs/advanced-features/dynamic-imports)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Dynamic Import ជាមួយ Loading</h3>
<p>បន្ថែម Dynamic Component នៅក្នុង <code>pages/index.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/index.tsx
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>កំពុងផ្ទុក...</p>,
});

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <HeavyComponent />
    </div>
  );
};

export default Home;
</code></pre>
<pre><code class="language-tsx">
// components/HeavyComponent.tsx
import type { FC } from 'react';

const HeavyComponent: FC = () => {
  return (
    <div>
      <h2>Heavy Component</h2>
      <p>នេះជា Component ដែលត្រូវបាន Load ដោយ Dynamic Import។</p>
    </div>
  );
};

export default HeavyComponent;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Dynamic Import ដោយគ្មាន SSR</h3>
<p>បន្ថែម Client-only Component នៅក្នុង <code>pages/about.tsx</code>�।</p>
<pre><code class="language-tsx">
// pages/about.tsx
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), {
  ssr: false,
  loading: () => <p>កំពុងផ្ទុក...</p>,
});

const About: NextPage = () => {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <ClientOnlyComponent />
    </div>
  );
};

export default About;
</code></pre>
<pre><code class="language-tsx">
// components/ClientOnlyComponent.tsx
import type { FC } from 'react';
import { useState } from 'react';

const ClientOnlyComponent: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Client-Only Component</h2>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
};

export default ClientOnlyComponent;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Dynamic Imports មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បង្ផើត API Routes',
        'កាត់បន្ថយ Bundle Size',
        'បន្ថែម Global CSS',
        'Optimize Fonts'
      ],
      correct: 1,
      explanation: 'Dynamic Imports កាត់បន្ថយ Bundle Size ដោយ Load Components នៅ Runtime។'
    },
    {
      question: 'តើ Module ណាមួយប្រើសម្រាប់ Dynamic Imports នៅក្នុង Next.js?',
      options: [
        'next/head',
        'next/dynamic',
        'next/image',
        'next/font'
      ],
      correct: 1,
      explanation: '`next/dynamic` ប្រើសម្រាប់ Dynamic Imports។'
    },
    {
      question: 'តើ Option ណាមួយបិទ SSR នៅក្នុង `next/dynamic`?',
      options: [
        'loading: false',
        'ssr: false',
        'lazy: false',
        'render: false'
      ],
      correct: 1,
      explanation: '`ssr: false` បិទ SSR សម្រាប់ Dynamic Component។'
    },
    {
      question: 'តើ Loading Component មានតួនាទីអ្វី?',
      options: [
        'បន្ថែម Metadata',
        'ផ្តល់ User Feedback អំឡុងពេល Loading',
        'បង្ផើត Dynamic Routes',
        'Optimize Images'
      ],
      correct: 1,
      explanation: 'Loading Component ផ្តល់ User Feedback អំឡុងពេល Dynamic Import។'
    },
    {
      question: 'តើ Dynamic Imports Load Components នៅពេលណា?',
      options: [
        'Build Time',
        'Runtime',
        'Server Time',
        'Client Time'
      ],
      correct: 1,
      explanation: 'Dynamic Imports Load Components នៅ Runtime។'
    },
    {
      question: 'តើ Dynamic Imports ជួយ Performance ដោយរបៀបណា?',
      options: [
        'បន្ថែម Global CSS',
        'កាត់បន្ថយ Initial Load Time',
        'បន្ថែម Metadata',
        'Preload Fonts'
      ],
      correct: 1,
      explanation: 'Dynamic Imports កាត់បន្ថយ Initial Load Time ដោយ Load តែ Components ចាំបាច់។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Dynamic Imports ជាមួយ SSR បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: 'Dynamic Imports អាចប្រើជាមួយ SSR ដោយប្រើ `next/dynamic`។'
    },
    {
      question: 'តើ Component ណាមួយគួរប្រើ Dynamic Imports?',
      options: [
        'Small Components',
        'Heavy Components',
        'API Routes',
        'Global Layouts'
      ],
      correct: 1,
      explanation: 'Dynamic Imports គួរប្រើសម្រាប់ Heavy Components ដូចជា Charts។'
    },
    {
      question: 'តើ `next/dynamic` Import ពីណា?',
      options: [
        'next/router',
        'next/dynamic',
        'next/image',
        'next/font'
      ],
      correct: 1,
      explanation: '`next/dynamic` ត្រូវបាន Import ពី `next/dynamic` Module។'
    },
    {
      question: 'តើ Dynamic Imports អាចប្រើជាមួយ Client-only Components បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `getStaticProps`'
      ],
      correct: 0,
      explanation: 'Dynamic Imports អាចប្រើជាមួយ Client-only Components ដោយប្រើ `ssr: false`។'
    },
    {
      question: 'តើ Loading Component ត្រូវបានបង្ហាញនៅពេលណា?',
      options: [
        'នៅ Build Time',
        'នៅពេល Component កំពុង Load',
        'នៅ Server-side',
        'នៅពេល SSR'
      ],
      correct: 1,
      explanation: 'Loading Component ត្រូវបានបង្ហាញនៅពេល Dynamic Component កំពុង Load។'
    },
    {
      question: 'តើ Dynamic Imports មានអត្ថប្រយោជន៍អ្វីសម្រាប់ Large Libraries?',
      options: [
        'បន្ថែម Metadata',
        'កាត់បន្ថយ Bundle Size',
        'បន្ថែម Global CSS',
        'Preload Fonts'
      ],
      correct: 1,
      explanation: 'Dynamic Imports កាត់បន្ថយ Bundle Size សម្រាប់ Large Libraries។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Dynamic Imports នៅក្នុង `_app.tsx` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `ssr: false`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`'
      ],
      correct: 0,
      explanation: 'Dynamic Imports អាចប្រើនៅក្នុង `_app.tsx` សម្រាប់ Components ជាក់លាក់។'
    }
  ],
  lab: {
    task: `
បង្ផើត Next.js Project ដែលប្រើ Dynamic Imports សម្រាប់ Lazy Loading Components។

**តម្រូវការ:**

1. **បង្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-dynamic-app\` និងជ្រើសរើស TypeScript។

2. **បង្ផើត Dynamic Component:**
   - បង្ផើត File \`components/HeavyComponent.tsx\` ដែលបង្ហាញ \`<h2>Heavy Component</h2>\` និង \`<p>នេះជា Component ដែលត្រូវបាន Load ដោយ Dynamic Import។</p>\`។
   - ប្រើ \`next/dynamic\` នៅក្នុង \`pages/index.tsx\` ដើម្បី Load \`HeavyComponent\` ជាមួយ Loading Component \`<p>កំពុងផ្ទុក...</p>\`។

3. **បង្ផើត Client-only Component:**
   - បង្ផើត File \`components/ClientOnlyComponent.tsx\` ដែលបង្ហាញ \`<h2>Client-Only Component</h2>\`, \`<p>ចំនួន: {count}</p>\`, និង \`<button>បន្ថែម</button>\` ដែលបន្ថែម \`count\` State។
   - ប្រើ \`next/dynamic\` នៅក្នុង \`pages/about.tsx\` ដើម្បី Load \`ClientOnlyComponent\` ជាមួយ \`ssr: false\` និង Loading Component \`<p>កំពុងផ្ទុក...</p>\`។

4. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។

5. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\` (Dynamic Component)
     - \`http://localhost:3000/about\` (Client-only Component)

**ការណែនាំ:** ពិនិត្យ Browser Console (F12) ឬ Network Tab ដើម្បីឃើញ Dynamic Loading។
    `,
    solution: `
## styles/globals.css 
\`\`\`text
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  text-align: center;
  padding: 20px;
}
\`\`\`

## components/HeavyComponent.tsx 
\`\`\`text
import type { FC } from 'react';

const HeavyComponent: FC = () => {
  return (
    <div>
      <h2>Heavy Component</h2>
      <p>នេះជា Component ដែលត្រូវបាន Load ដោយ Dynamic Import។</p>
    </div>
  );
};

export default HeavyComponent;
\`\`\`

## components/ClientOnlyComponent.tsx 
\`\`\`text
import type { FC } from 'react';
import { useState } from 'react';

const ClientOnlyComponent: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Client-Only Component</h2>
      <p>ចំនួន: {count}</p>
      <button onClick={() => setCount(count + 1)}>បន្ថែម</button>
    </div>
  );
};

export default ClientOnlyComponent;
\`\`\`

## pages/index.tsx 
\`\`\`text
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>កំពុងផ្ទុក...</p>,
});

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <HeavyComponent />
    </div>
  );
};

export default Home;
\`\`\`

## pages/about.tsx 
\`\`\`text
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), {
  ssr: false,
  loading: () => <p>កំពុងផ្ទុក...</p>,
});

const About: NextPage = () => {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <ClientOnlyComponent />
    </div>
  );
};

export default About;
\`\`\`
`
  }
};

export default NextLesson4_2Content;