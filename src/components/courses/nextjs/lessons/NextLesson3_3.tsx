import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson3_3Content: LessonContent = {
  title: 'Font Optimization',
  objectives: [
    'យល់ដឹងពី Font Optimization នៅក្នុង Next.js',
    'ប្រើ `next/font` សម្រាប់ Local និង Google Fonts',
    'កំណត់ Font Weights និង Subsets',
    'ស្វែងយល់ពី Font Loading Strategies',
  ],
  content: `
# Font Optimization 🔤

---

Next.js ផ្តល់នូវ \`next/font\` Module ដើម្បី Optimize Fonts ដោយកាត់បន្ថយ Cumulative Layout Shift (CLS) និងបង្កើន Performance។

---

## 1. អ្វីទៅជា Font Optimization?

Font Optimization ជួយផ្ទុក Fonts យ៉ាងលឿន កាត់បន្ថយ Layout Shift និងធ្វើឱ្យ Responsive។ \`next/font\` ផ្តល់នូវ:
- **Automatic Self-hosting:** Fonts ត្រូវបាន Host នៅលើ Server។
- **Preloading:** Fonts ត្រូវបាន Preload ដើម្បីកាត់បន្ថយ Load Time។
- **Subsetting:** កាត់បន្ថយទំហំ Font Files។

---

## 2. ប្រើ \`next/font/google\` សម្រាប់ Google Fonts

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
\`\`\`

**លទ្ធផល:** ទំព័រទាំងអស់នឹងប្រើ Font \`Inter\` ជាមួយ Subset \`latin\`។

---

## 3. ប្រើ \`next/font/local\` សម្រាប់ Local Fonts

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import { localFont } from 'next/font/local';

const myFont = localFont({
  src: '/fonts/my-font.woff2',
  weight: '400',
  style: 'normal',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
\`\`\`

**លទ្ធផល:** Local Font \`my-font.woff2\` នឹងត្រូវបានប្រើ។

---

## 4. Font Loading Strategies

- **Preloading:** Fonts ត្រូវបាន Preload ដោយស្វ័យប្រវត្តិ។
- **Variable Fonts:** ប្រើ Variable Fonts ដើម្បីកាត់បន្ថយទំហំ។
- **Subsets:** កំណត់ Subsets ដូចជា \`latin\` ឬ \`khmer\` ដើម្បី Optimize។

**ឧទាហរណ៍ (Variable Font):**
\`\`\`tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.variable}>
      <Component {...pageProps} />
    </div>
  );
}
\`\`\`

\`\`\`css
/* styles/globals.css */
:root {
  --font-inter: 'Inter', sans-serif;
}

body {
  font-family: var(--font-inter);
}
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Font Optimization

- **ប្រើ Google Fonts:** សម្រាប់ Fonts ដែលមានគុណភាពខ្ពស់។
- **ប្រើ Subsets:** ដើម្បីកាត់បន្ថយទំហំ Font Files។
- **ប្រើ Variable Fonts:** សម្រាប់ Flexibility និង Performance។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/api-reference/next/font](https://nextjs.org/docs/api-reference/next/font)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Google Font ជាមួយ \`next/font/google\`</h3>
<p>បន្ថែម Font \`Inter\` នៅក្នុង <code>pages/_app.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Local Font ជាមួយ \`next/font/local\`</h3>
<p>បន្ថែម Local Font នៅក្នុង <code>pages/_app.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/_app.tsx
import type { AppProps } from 'next/app';
import { localFont } from 'next/font/local';

const myFont = localFont({
  src: '/fonts/my-font.woff2',
  weight: '400',
  style: 'normal',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `next/font` Module ផ្តល់អត្ថប្រយោជន៍អ្វី?',
      options: [
        'Image Optimization',
        'Font Optimization',
        'Dynamic Routing',
        'API Routes'
      ],
      correct: 1,
      explanation: '`next/font` ផ្តល់ Font Optimization ដើម្បីកាត់បន្ថយ CLS និង Load Time។'
    },
    {
      question: 'តើ Google Fonts ត្រូវបាន Import ដោយ Module ណា?',
      options: [
        'next/image',
        'next/font/google',
        'next/font/local',
        'next/router'
      ],
      correct: 1,
      explanation: '`next/font/google` ប្រើសម្រាប់ Import Google Fonts។'
    },
    {
      question: 'តើ Local Fonts ត្រូវបាន Import ដោយ Module ណា?',
      options: [
        'next/image',
        'next/font/google',
        'next/font/local',
        'next/router'
      ],
      correct: 2,
      explanation: '`next/font/local` ប្រើសម្រាប់ Import Local Fonts�।'
    },
    {
      question: 'តើ Subsets នៅក្នុង `next/font` មានតួនាទីអ្វី?',
      options: [
        'កំណត់ Image Sizes',
        'កាត់បន្ថយទំហំ Font Files',
        'បង្ផើត API Routes',
        'កំណត់ CSS Classes'
      ],
      correct: 1,
      explanation: 'Subsets កាត់បន្ថយទំហំ Font Files ដោយកំណត់ Characters។'
    },
    {
      question: 'តើ Font Optimization ជួយកាត់បន្ថយអ្វី?',
      options: [
        'Dynamic Routes',
        'Cumulative Layout Shift (CLS)',
        'API Response Time',
        'Image Sizes'
      ],
      correct: 1,
      explanation: 'Font Optimization ជួយកាត់បន្ថយ CLS និង Load Time�।'
    },
    {
      question: 'តើ Fonts ត្រូវបាន Apply នៅក្នុង File ណា?',
      options: [
        'pages/index.tsx',
        'pages/_app.tsx',
        'next.config.js',
        'styles/globals.css'
      ],
      correct: 1,
      explanation: 'Fonts ត្រូវបាន Apply នៅក្នុង `pages/_app.tsx`។'
    },
    {
      question: 'តើ Variable Fonts មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បង្ផើត Dynamic Routes',
        'កាត់បន្ថយទំហំ Font Files',
        'បង្កើន Image Quality',
        'បង្ផើត API Endpoints'
      ],
      correct: 1,
      explanation: 'Variable Fonts កាត់បន្ថយទំហំ Font Files និងផ្តល់ Flexibility។'
    },
    {
      question: 'តើអ្នកកំណត់ Font Weight ដោយរបៀបណា?',
      options: [
        'នៅក្នុង `next.config.js`',
        'នៅក្នុង Font Configuration',
        'នៅក្នុង `styles/globals.css`',
        'នៅក្នុង `pages/index.tsx`'
      ],
      correct: 1,
      explanation: 'Font Weight ត្រូវបានកំណត់នៅក្នុង Font Configuration (ឧ. `weight: "400"`)។'
    },
    {
      question: 'តើ `next/font` ធ្វើអ្វីជាមួយ Fonts?',
      options: [
        'Host នៅ Server',
        'Host នៅ Client',
        'បង្ផើត API Routes',
        'Optimize Images'
      ],
      correct: 0,
      explanation: '`next/font` Host Fonts នៅ Server ដើម្បី Optimize Performance។'
    },
    {
      question: 'តើ Subset `latin` គាំទ្រ Characters អ្វី?',
      options: [
        'Khmer Characters',
        'Latin Characters',
        'Chinese Characters',
        'Arabic Characters'
      ],
      correct: 1,
      explanation: 'Subset `latin` គាំទ្រ Latin Characters។'
    },
    {
      question: 'តើ Preloading នៅក្នុង `next/font` មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បង្ផើត Dynamic Routes',
        'កាត់បន្ថយ Load Time',
        'បង្កើន Image Quality',
        'បង្ផើត API Endpoints'
      ],
      correct: 1,
      explanation: 'Preloading កាត់បន្ថយ Load Time ដោយផ្ទុក Fonts មុន។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `next/font` ជាមួយ Local Fonts បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ Tailwind CSS',
        'បាន, ប៉ុន្តែត្រូវប្រើ CSS Modules'
      ],
      correct: 0,
      explanation: '`next/font/local` អនុញ្ញាតឱ្យប្រើ Local Fonts។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Google Fonts និង Local Fonts ក្នុង Project តែមួយបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `getStaticProps`'
      ],
      correct: 0,
      explanation: 'អ្នកអាចប្រើ Google Fonts និង Local Fonts ក្នុង Project តែមួយ។'
    }
  ],
  lab: {
    task: `
បង្ផើត Next.js Project ដែលប្រើ \`next/font\` សម្រាប់ Font Optimization។

**តម្រូវការ:**

1. **បង្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-font-app\` និងជ្រើសរើស TypeScript។

2. **បន្ថែម Google Font:**
   - កែ File \`pages/_app.tsx\` ដើម្បីប្រើ Font \`Inter\` ពី \`next/font/google\` ជាមួយ Subset \`latin\`។
   - Apply Font ទៅលើ Components ទាំងអស់។

3. **បង្ផើត Page:**
   - កែ File \`pages/index.tsx\` ដើម្បីបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>\` និង \`<p>នេះជាទំព័រដំបូងជាមួយ Font Inter។</p>\`។
   - បន្ថែម File \`pages/about.tsx\` ដើម្បីបង្ហាញ \`<h1>អំពីយើង</h1>\` និង \`<p>នេះជាទំព័រអំពីយើង។</p>\`។

4. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`margin: 0;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។

5. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\`
     - \`http://localhost:3000/about\`

**ការណែនាំ:** ពិនិត្យ Console នៅក្នុង Browser (F12) ឬ Terminal សម្រាប់ Error Messages។
    `,
    solution: `
## styles/globals.css
 \`\`\`text
body {
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

## pages/_app.tsx 
 \`\`\`text
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
 \`\`\`

## pages/index.tsx
 \`\`\`text
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>នេះជាទំព័រដំបូងជាមួយ Font Inter។</p>
    </div>
  );
};

export default Home;
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
`
  }
};

export default NextLesson3_3Content;