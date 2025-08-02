import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson4_1Content: LessonContent = {
  title: 'Custom App និង Document',
  objectives: [
    'យល់ដឹងពីតួនាទីនៃ `_app.tsx` និង `_document.tsx` នៅក្នុង Next.js',
    'ប្ដូរ App Component តាមបំណងសម្រាប់ Global State និង Layout',
    'ប្ដូរ Document Component តាមបំណងសម្រាប់ HTML Structure',
    'បន្ថែម Global CSS និង Metadata នៅក្នុង Custom App និង Document',
  ],
  content: `
# Custom App និង Document 🛠️

---

នៅក្នុង Next.js, \`_app.tsx\` និង \`_document.tsx\` ជា Special Files ដែលអនុញ្ញាតឱ្យអ្នកប្ដូរ Application និង HTML Document តាមបំណង។

---

## 1. Custom App (\`_app.tsx\`)

**\`_app.tsx\`** គឺជា Root Component ដែល Wrap គ្រប់ Pages នៅក្នុង Next.js។ វាត្រូវបានប្រើសម្រាប់:
- បន្ថែម Global CSS។
- បន្ថែម Global Layout។
- គ្រប់គ្រង Global State។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <header>
        <h1>Website របស់ខ្ញុំ</h1>
      </header>
      <Component {...pageProps} />
      <footer>
        <p>© 2025 កម្មសិទ្ធិរបស់ខ្ញុំ</p>
      </footer>
    </div>
  );
}
\`\`\`

\`\`\`css
/* styles/globals.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
\`\`\`

**លទ្ធផល:** គ្រប់ Pages នឹងមាន Header និង Footer។

---

## 2. Custom Document (\`_document.tsx\`)

**\`_document.tsx\`** គឺជា File ដែលប្ដូរ HTML Structure នៃ Application។ វាត្រូវបានប្រើសម្រាប់:
- បន្ថែម Custom \`<html>\` ឬ \`<body>\` Tags។
- បន្ថែម Server-side Metadata។
- បន្ថែម External Scripts។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="km">
        <Head>
          <meta name="theme-color" content="#007bff" />
          <link rel="stylesheet" href="https://example.com/external.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
\`\`\`

**លទ្ធផល:** HTML Structure នឹងរួមបញ្ចូល Language Attribute និង External Stylesheet។

---

## 3. ការប្រើប្រាស់រួមគ្នា

- **Global Layout:** ប្រើ \`_app.tsx\` សម្រាប់ Layout ដែលបង្ហាញនៅគ្រប់ Pages។
- **HTML Customization:** ប្រើ \`_document.tsx\` សម្រាប់ Server-side Rendering Customization។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Component {...pageProps} />
    </div>
  );
}
\`\`\`

\`\`\`tsx
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="km">
        <Head>
          <meta name="description" content="Website ដែលបង្កើតជាមួយ Next.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
\`\`\`

---

## 4. គន្លឹះសម្រាប់ Custom App និង Document

- **ប្រើ \`_app.tsx\` សម្រាប់ Client-side Logic:** ដូចជា Global State ឬ Layout។
- **ប្រើ \`_document.tsx\` សម្រាប់ Server-side Logic:** ដូចជា Custom HTML Attributes។
- **ជៀសវាង Heavy Logic នៅក្នុង \`_document.tsx\`:** ដោយសារវាដំណើរការនៅ Server-side។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/advanced-features/custom-document](https://nextjs.org/docs/advanced-features/custom-document)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Custom App ជាមួយ Layout</h3>
<p>បន្ថែម Header និង Footer នៅក្នុង <code>pages/_app.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <header>
        <h1>Website របស់ខ្ញុំ</h1>
      </header>
      <Component {...pageProps} />
      <footer>
        <p>© 2025 កម្មសិទ្ធិរបស់ខ្ញុំ</p>
      </footer>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Custom Document ជាមួយ Metadata</h3>
<p>បន្ថែម Language Attribute និង Metadata នៅក្នុង <code>pages/_document.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="km">
        <Head>
          <meta name="description" content="Website ដែលបង្កើតជាមួយ Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `_app.tsx` មានតួនាទីអ្វីនៅក្នុង Next.js?',
      options: [
        'កំណត់ HTML Structure',
        'Wrap គ្រប់ Pages និងបន្ថែម Global Logic',
        'បង្ផើត API Routes',
        'Optimize Images'
      ],
      correct: 1,
      explanation: '`_app.tsx` Wrap គ្រប់ Pages និងបន្ថែម Global Logic ដូចជា Layout។'
    },
    {
      question: 'តើ `_document.tsx` មានតួនាទីអ្វી?',
      options: [
        'បន្ថែម Global State',
        'ប្ដូរ HTML Structure តាមបំណង',
        'បង្ផើត Dynamic Routes',
        'បន្ថែម CSS Modules'
      ],
      correct: 1,
      explanation: '`_document.tsx` ប្ដូរ HTML Structure នៅ Server-side។'
    },
    {
      question: 'តើ File ណាមួយប្រើសម្រាប់បន្ថែម Global CSS?',
      options: [
        'pages/index.tsx',
        'pages/_app.tsx',
        'pages/_document.tsx',
        'next.config.js'
      ],
      correct: 1,
      explanation: '`_app.tsx` ប្រើសម្រាប់ Import Global CSS។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម `<html lang="km">` នៅក្នុង File ណា?',
      options: [
        'pages/_app.tsx',
        'pages/_document.tsx',
        'styles/globals.css',
        'next.config.js'
      ],
      correct: 1,
      explanation: '`<html lang="km">` ត្រូវបានបន្ថែមនៅក្នុង `_document.tsx`។'
    },
    {
      question: 'តើ `_app.tsx` ដំណើរការនៅណា?',
      options: [
        'Server-side តែប៉ុណ្ណោះ',
        'Client-side តែប៉ុណ្ណោះ',
        'Client-side និង Server-side',
        'Browser Console'
      ],
      correct: 2,
      explanation: '`_app.tsx` ដំណើរការនៅ Client-side និង Server-side។'
    },
    {
      question: 'តើ `_document.tsx` ដំណើរការនៅណា?',
      options: [
        'Server-side តែប៉ុណ្ណោះ',
        'Client-side តែប៉ុណ្ណោះ',
        'Client-side និង Server-side',
        'Browser Console'
      ],
      correct: 0,
      explanation: '`_document.tsx` ដំណើរការនៅ Server-side តែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម Global Layout នៅក្នុង File ណា?',
      options: [
        'pages/index.tsx',
        'pages/_app.tsx',
        'pages/_document.tsx',
        'styles/globals.css'
      ],
      correct: 1,
      explanation: '`_app.tsx` ប្រើសម្រាប់បន្ថែម Global Layout។'
    },
    {
      question: 'តើ Component ណាមួយតម្រូវនៅក្នុង `_document.tsx`?',
      options: [
        '<Head />',
        '<Main />',
        '<NextScript />',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: '`<Main />` និង `<NextScript />` តម្រូវនៅក្នុង `_document.tsx`, ហើយ `<Head />` ត្រូវបានប្រើជាញឹកញាប់។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម External Scripts នៅក្នុង File ណា?',
      options: [
        'pages/_app.tsx',
        'pages/_document.tsx',
        'styles/globals.css',
        'next.config.js'
      ],
      correct: 1,
      explanation: 'External Scripts អាចបន្ថែមនៅក្នុង `_document.tsx`។'
    },
    {
      question: 'តើការបន្ថែម Heavy Logic នៅក្នុង `_document.tsx` មានផលវិបាកអ្វី?',
      options: [
        'បង្កើន SEO',
        'ប៉ះពាល់ Performance',
        'បង្ផើត Dynamic Routes',
        'Optimize Images'
      ],
      correct: 1,
      explanation: 'Heavy Logic នៅក្នុង `_document.tsx` អាចប៉ះពាល់ Performance ដោយសារវាដំណើរការនៅ Server-side។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `_app.tsx` សម្រាប់ Global State Management បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: '`_app.tsx` អាចប្រើសម្រាប់ Global State Management។'
    },
    {
      question: 'តើ File ណាមួយប្រើសម្រាប់បន្ថែម `<meta name="theme-color">`?',
      options: [
        'pages/_app.tsx',
        'pages/_document.tsx',
        'styles/globals.css',
        'next.config.js'
      ],
      correct: 1,
      explanation: '`<meta name="theme-color">` ត្រូវបានបន្ថែមនៅក្នុង `_document.tsx`។'
    },
    {
      question: 'តើ `_app.tsx` និង `_document.tsx` អាចប្រើរួមគ្នាបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: '`_app.tsx` និង `_document.tsx` អាចប្រើរួមគ្នាសម្រាប់ Customization ផ្សេងៗ។'
    }
  ],
  lab: {
    task: `
បង្ផើត Next.js Project ដែលប្រើ Custom App និង Document សម្រាប់ Global Layout និង HTML Customization។

**តម្រូវការ:**

1. **បង្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-custom-app\` និងជ្រើសរើស TypeScript។

2. **បង្ផើត Custom App:**
   - កែ File \`pages/_app.tsx\` ដើម្បីបន្ថែម Global Layout ដែលមាន \`<header>\` ជាមួយ \`<h1>Website របស់ខ្ញុំ</h1>\` និង \`<footer>\` ជាមួយ \`<p>© 2025 កម្មសិទ្ធិរបស់ខ្ញុំ</p>\`។
   - Import \`styles/globals.css\`។

3. **បង្ផើត Custom Document:**
   - បង្ផើត File \`pages/_document.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, និងបន្ថែម Metadata:
     - \`<meta name="description" content="Website ដែលបង្កើតជាមួយ Next.js" />\`
     - \`<link rel="icon" href="/favicon.ico" />\`

4. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.app-container\` Class។

5. **បង្ផើត Page:**
   - កែ File \`pages/index.tsx\` ដើម្បីបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>\` និង \`<p>នេះជាទំព័រដំបូង។</p>\`។
   - បង្ផើត File \`pages/about.tsx\` ដើម្បីបង្ហាញ \`<h1>អំពីយើង</h1>\` និង \`<p>នេះជាទំព័រអំពីយើង។</p>\`។

6. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\` (Home Page)
     - \`http://localhost:3000/about\` (About Page)

**ការណែនាំ:** ដាក់ File \`favicon.ico\` នៅក្នុង \`public/\`។ ពិនិត្យ Browser Console (F12) ឬ Terminal សម្រាប់ Error Messages។
    `,
    solution: `
## styles/globals.css 
\`\`\`text
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
\`\`\`

## pages/_app.tsx 
\`\`\`text
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <header>
        <h1>Website របស់ខ្ញុំ</h1>
      </header>
      <Component {...pageProps} />
      <footer>
        <p>© 2025 កម្មសិទ្ធិរបស់ខ្ញុំ</p>
      </footer>
    </div>
  );
}
\`\`\`

## pages/_document.tsx 
\`\`\`text
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="km">
        <Head>
          <meta name="description" content="Website ដែលបង្កើតជាមួយ Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
\`\`\`

## pages/index.tsx 
\`\`\`text
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>នេះជាទំព័រដំបូង។</p>
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
    <div>
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

export default NextLesson4_1Content;