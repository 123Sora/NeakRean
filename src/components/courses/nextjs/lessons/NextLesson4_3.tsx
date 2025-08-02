import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson4_3Content: LessonContent = {
  title: 'Absolute Imports និង Module Path Aliases',
  objectives: [
    'យល់ដឹងពី Absolute Imports និង Module Path Aliases',
    'កំណត់ Module Path Aliases នៅក្នុង `tsconfig.json`',
    'ប្រើ Absolute Imports ដើម្បីសម្រួល File Imports',
    'បង្កើន Code Maintainability ដោយ Module Path Aliases',
  ],
  content: `
# Absolute Imports និង Module Path Aliases 📂

---

**Absolute Imports** និង **Module Path Aliases** ជួយសម្រួលការសរសេរ Import Statements នៅក្នុង Next.js ដោយជំនួស Relative Paths (ឧ. \`../../../\`) ជាមួយ Absolute Paths (ឧ. \`@components/\`)។

---

## 1. អ្វីទៅជា Absolute Imports និង Module Path Aliases?

- **Absolute Imports:** អនុញ្ញាតឱ្យ Import Files ដោយប្រើ Root Directory ជំនួស Relative Paths។
- **Module Path Aliases:** កំណត់ Shortcuts (ឧ. \`@components\`) សម្រាប់ Folders ជាក់លាក់។

**អត្ថប្រយោជន៍:**
- កាត់បន្ថយ Complexity នៃ Import Statements។
- ធ្វើឱ្យកូដងាយស្រួលថែទាំ។
- ការពារកំហុសនៅពេល Refactor File Structure។

---

## 2. កំណត់ Absolute Imports

នៅក្នុង Next.js, យើងកំណត់ Absolute Imports នៅក្នុង \`tsconfig.json\` ដោយប្រើ \`baseUrl\` និង \`paths\`។

**ឧទាហរណ៍:**
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["components/*"],
      "@styles/*": ["styles/*"]
    }
  }
}
\`\`\`

**ការប្រើប្រាស់:**
\`\`\`tsx
// pages/index.tsx
import type { NextPage } from 'next';
import MyComponent from '@components/MyComponent';
import styles from '@styles/globals.css';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <MyComponent />
    </div>
  );
};

export default Home;
\`\`\`

\`\`\`tsx
// components/MyComponent.tsx
import type { FC } from 'react';

const MyComponent: FC = () => {
  return <p>នេះជា Component ដែល Import ដោយ Absolute Path។</p>;
};

export default MyComponent;
\`\`\`

**លទ្ធផល:** Imports ដូចជា \`@components/MyComponent\` នឹងជំនួស \`../components/MyComponent\`។

---

## 3. កំណត់ Module Path Aliases

Module Path Aliases ត្រូវបានកំណត់នៅក្នុង \`tsconfig.json\` ដោយប្រើ \`paths\`។

**ឧទាហរណ៍:**
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@utils/*": ["utils/*"],
      "@pages/*": ["pages/*"]
    }
  }
}
\`\`\`

**ការប្រើប្រាស់:**
\`\`\`tsx
// pages/about.tsx
import type { NextPage } from 'next';
import { formatDate } from '@utils/helpers';

const About: NextPage = () => {
  const today = formatDate(new Date());

  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <p>កាលបរិច្ឆេទថ្ងៃនេះ: {today}</p>
    </div>
  );
};

export default About;
\`\`\`

\`\`\`ts
// utils/helpers.ts
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('km-KH');
};
\`\`\`

**លទ្ធផល:** \`formatDate\` ត្រូវបាន Import ដោយប្រើ \`@utils/helpers\`។

---

## 4. គន្លឹះសម្រាប់ Absolute Imports និង Module Path Aliases

- **កំណត់ \`baseUrl\`:** ប្រើ \`"baseUrl": "."\` ដើម្បីចាប់ផ្តើមពី Root Directory។
- **ប្រើ Descriptive Aliases:** ដូចជា \`@components\`, \`@utils\` សម្រាប់ភាពច្បាស់។
- **ធ្វើឱ្យសមកាលជាមួយ \`next.config.js\`:** ប្រសិនបើប្រើ Custom Server។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/advanced-features/module-path-aliases](https://nextjs.org/docs/advanced-features/module-path-aliases)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Absolute Imports</h3>
<p>កំណត់ Absolute Imports នៅក្នុង <code>tsconfig.json</code> និងប្រើនៅក្នុង <code>pages/index.tsx</code>។</p>
<pre><code class="language-json">
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["components/*"]
    }
  }
}
</code></pre>
<pre><code class="language-tsx">
// pages/index.tsx
import type { NextPage } from 'next';
import MyComponent from '@components/MyComponent';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <MyComponent />
    </div>
  );
};

export default Home;
</code></pre>
<pre><code class="language-tsx">
// components/MyComponent.tsx
import type { FC } from 'react';

const MyComponent: FC = () => {
  return <p>នេះជា Component ដែល Import ដោយ Absolute Path។</p>;
};

export default MyComponent;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Module Path Aliases</h3>
<p>កំណត់ Aliases នៅក្នុង <code>tsconfig.json</code> និងប្រើនៅក្នុង <code>pages/about.tsx</code>។</p>
<pre><code class="language-json">
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@utils/*": ["utils/*"]
    }
  }
}
</code></pre>
<pre><code class="language-tsx">
// pages/about.tsx
import type { NextPage } from 'next';
import { formatDate } from '@utils/helpers';

const About: NextPage = () => {
  const today = formatDate(new Date());

  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <p>កាលបរិច្ឆេទថ្ងៃនេះ: {today}</p>
    </div>
  );
};

export default About;
</code></pre>
<pre><code class="language-ts">
// utils/helpers.ts
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('km-KH');
};
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Absolute Imports មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បន្ថែម Global CSS',
        'សម្រួល Import Statements',
        'Optimize Images',
        'Preload Fonts'
      ],
      correct: 1,
      explanation: 'Absolute Imports សម្រួល Import Statements ដោយជំនួស Relative Paths។'
    },
    {
      question: 'តើ File ណាមួយប្រើសម្រាប់កំណត់ Module Path Aliases?',
      options: [
        'next.config.js',
        'tsconfig.json',
        'styles/globals.css',
        'pages/_app.tsx'
      ],
      correct: 1,
      explanation: 'Module Path Aliases ត្រូវបានកំណត់នៅក្នុង `tsconfig.json`។'
    },
    {
      question: 'តើ `baseUrl` នៅក្នុង `tsconfig.json` មានតួនាទីអ្វី?',
      options: [
        'កំណត់ Root Directory សម្រាប់ Imports',
        'កំណត់ CSS Paths',
        'កំណត់ API Routes',
        'កំណត់ Font Paths'
      ],
      correct: 0,
      explanation: '`baseUrl` កំណត់ Root Directory សម្រាប់ Absolute Imports។'
    },
    {
      question: 'តើ `paths` នៅក្នុង `tsconfig.json` មានតួនាទីអ្វី?',
      options: [
        'កំណត់ Global CSS',
        'កំណត់ Module Path Aliases',
        'កំណត់ Image Domains',
        'កំណត់ Font Subsets'
      ],
      correct: 1,
      explanation: '`paths` កំណត់ Module Path Aliases ដូចជា `@components/*`។'
    },
    {
      question: 'តើឧទាហរណ៍នៃ Absolute Import គឺជាអ្វី?',
      options: [
        'import MyComponent from "../components/MyComponent"',
        'import MyComponent from "@components/MyComponent"',
        'import styles from "../styles/globals.css"',
        'import { formatDate } from "../../utils/helpers"'
      ],
      correct: 1,
      explanation: '`@components/MyComponent` ជា Absolute Import។'
    },
    {
      question: 'តើ Module Path Aliases ជួយ Code Maintainability ដោយរបៀបណា?',
      options: [
        'បន្ថែម Metadata',
        'ការពារកំហុសនៅពេល Refactor File Structure',
        'Optimize Images',
        'Preload Fonts'
      ],
      correct: 1,
      explanation: 'Module Path Aliases ការពារកំហុសនៅពេល Refactor File Structure។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Absolute Imports ដោយគ្មាន `baseUrl` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 1,
      explanation: '`baseUrl` តម្រូវសម្រាប់ Absolute Imports។'
    },
    {
      question: 'តើអ្នកអាចកំណត់ Alias សម្រាប់ `utils` Folder ដោយរបៀបណា?',
      options: [
        '"@utils/*": ["utils/*"]',
        '"utils/*": ["@utils/*"]',
        '"@utils": ["utils"]',
        '"utils": ["@utils"]'
      ],
      correct: 0,
      explanation: '"@utils/*": ["utils/*"]` កំណត់ Alias សម្រាប់ `utils` Folder។'
    },
    {
      question: 'តើ Absolute Imports អាចប្រើជាមួយ CSS Files បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: 'Absolute Imports អាចប្រើជាមួយ CSS Files ដោយកំណត់ Alias។'
    },
    {
      question: 'តើអ្នកត្រូវធ្វើអ្វីបន្ទាប់ពីកែ `tsconfig.json`?',
      options: [
        'Run `npm run build`',
        'Restart Development Server',
        'Run `npm install`',
        'Run `next.config.js`'
      ],
      correct: 1,
      explanation: 'ត្រូវ Restart Development Server បន្ទាប់ពីកែ `tsconfig.json`។'
    },
    {
      question: 'តើ Module Path Aliases មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បន្ថែម Global CSS',
        'ធ្វើឱ្យ Imports កាន់តែសាមញ្ញ',
        'Optimize Images',
        'Preload Fonts'
      ],
      correct: 1,
      explanation: 'Module Path Aliases ធ្វើឱ្យ Imports កាន់តែសាមញ្ញ និងងាយស្រួលថែទាំ។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Absolute Imports នៅក្នុង `next.config.js` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវធ្វើសមកាលជាមួយ `tsconfig.json`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`'
      ],
      correct: 2,
      explanation: 'Absolute Imports នៅក្នុង `next.config.js` តម្រូវឱ្យធ្វើសមកាលជាមួយ `tsconfig.json`។'
    },
    {
      question: 'តើ Alias `@components/*` ចង្អុលទៅ Folder ណា?',
      options: [
        'pages/',
        'components/',
        'styles/',
        'utils/'
      ],
      correct: 1,
      explanation: '`@components/*` ចង្អុលទៅ Folder `components/` ប្រសិនបើកំណត់នៅក្នុង `tsconfig.json`។'
    }
  ],
  lab: {
    task: `
បង្ផើត Next.js Project ដែលប្រើ Absolute Imports និង Module Path Aliases។

**តម្រូវការ:**

1. **បង្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-aliases-app\` និងជ្រើសរើស TypeScript។

2. **កំណត់ Module Path Aliases:**
   - កែ File \`tsconfig.json\` ដើម្បីកំណត់:
     - \`"baseUrl": "."\`
     - \`"paths": { "@components/*": ["components/*"], "@utils/*": ["utils/*"] }\`

3. **បង្ផើត Component និង Utility:**
   - បង្ផើត File \`components/MyComponent.tsx\` ដែលបង្ហាញ \`<p>នេះជា Component ដែល Import ដោយ Absolute Path។</p>\`។
   - បង្ផើត File \`utils/helpers.ts\` ដែល Export Function \`formatDate\` ដើម្បី Format Date ជា Format Khmer (\`km-KH\`)។

4. **ប្រើ Absolute Imports:**
   - កែ File \`pages/index.tsx\` ដើម្បី Import \`MyComponent\` ដោយប្រើ \`@components/MyComponent\` និងបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>\`។
   - បង្ផើត File \`pages/about.tsx\` ដើម្បី Import \`formatDate\` ដោយប្រើ \`@utils/helpers\` និងបង្ហាញ \`<h1>អំពីយើង</h1>\` និង \`<p>កាលបរិច្ឆេទថ្ងៃនេះ: {today}</p>\`។

5. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។

6. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\` (MyComponent)
     - \`http://localhost:3000/about\` (formatDate)
   - Restart Development Server បន្ទាប់ពីកែ \`tsconfig.json\`។

**ការណែនាំ:** ពិនិត្យ Browser Console (F12) ឬ Terminal សម្រាប់ Error Messages។
    `,
    solution: `
## tsconfig.json 
\`\`\`text
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"]
    },
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
\`\`\`

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

/* components/MyComponent.tsx */
import type { FC } from 'react';

const MyComponent: FC = () => {
  return <p>នេះជា Component ដែល Import ដោយ Absolute Path។</p>;
};

export default MyComponent;
\`\`\`

## utils/helpers.ts 
\`\`\`text
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('km-KH');
};
\`\`\`

## pages/index.tsx
\`\`\`text
import type { NextPage } from 'next';
import MyComponent from '@components/MyComponent';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <MyComponent />
    </div>
  );
};

export default Home;
\`\`\`

## pages/about.tsx
\`\`\`text 
import type { NextPage } from 'next';
import { formatDate } from '@utils/helpers';

const About: NextPage = () => {
  const today = formatDate(new Date());

  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <p>កាលបរិច្ឆេទថ្ងៃនេះ: {today}</p>
    </div>
  );
};

export default About;
\`\`\`
`
  }
};

export default NextLesson4_3Content;