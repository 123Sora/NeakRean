import type { LessonContent } from '../../../../types/LessonTypes';

const NextLesson3_2Content: LessonContent = {
  title: 'Image Optimization',
  objectives: [
    'យល់ដឹងពី Image Optimization នៅក្នុង Next.js',
    'ប្រើ `next/image` Component សម្រាប់ Image Optimization',
    'កំណត់ Image Sizes និង Responsive Layouts',
    'ស្វែងយល់ពី Image Loading Strategies (Lazy Loading, Priority)',
  ],
  content: `
# Image Optimization 🖼️

---

Next.js ផ្តល់នូវ \`next/image\` Component ដែលជួយ Optimize Images ដោយស្វ័យប្រវត្តិ ដើម្បីបង្កើន Performance និង SEO។

---

## 1. អ្វីទៅជា Image Optimization?

Image Optimization ជួយកាត់បន្ថយទំហំ Images, បង្កើនល្បឿន Load, និងធ្វើឱ្យ Responsive។ \`next/image\` ផ្តល់នូវ:
- **Automatic Format Selection:** WebP ឬ JPEG អាស្រ័យលើ Browser។
- **Lazy Loading:** ផ្ទុក Images នៅពេលចូល Viewport។
- **Responsive Sizes:** ប្តូរ Image Sizes អាស្រ័យលើ Device។

---

## 2. ប្រើ \`next/image\` Component

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/index.tsx
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <Image
        src="/images/sample.jpg"
        alt="រូបភាពគំរូ"
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  );
};

export default Home;
\`\`\`

**លទ្ធផល:** រូបភាពនឹងត្រូវបាន Optimize និង Responsive។

---

## 3. Image Loading Strategies

- **Lazy Loading:** Images ផ្ទុកនៅពេលចូល Viewport (Default)។
- **Priority:** ប្រើ \`priority\` Prop សម្រាប់ Images សំខាន់ (ឧ. Hero Images)។

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/about.tsx
import type { NextPage } from 'next';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <Image
        src="/images/hero.jpg"
        alt="រូបភាពអំពីយើង"
        width={800}
        height={400}
        priority
      />
    </div>
  );
};

export default About;
\`\`\`

---

## 4. Remote Images

សម្រាប់ Remote Images, ត្រូវកំណត់ Domains នៅក្នុង \`next.config.js\`។

**ឧទាហរណ៍:**
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

\`\`\`tsx
// pages/index.tsx
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>រូបភាពពី Remote</h1>
      <Image
        src="https://example.com/image.jpg"
        alt="រូបភាពគំរូ"
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  );
};

export default Home;
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Image Optimization

- **ប្រើ \`layout="responsive"\`:** សម្រាប់ Images ដែលត្រូវ Responsive។
- **បន្ថែម \`priority\`:** សម្រាប់ Images សំខាន់ដើម្បី Load ភ្លាមៗ។
- **កំណត់ Domains:** សម្រាប់ Remote Images នៅក្នុង \`next.config.js\`។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs/api-reference/next/image](https://nextjs.org/docs/api-reference/next/image)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Local Image ជាមួយ \`next/image\`</h3>
<p>បន្ថែម Image នៅក្នុង <code>pages/index.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/index.tsx
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <Image
        src="/images/sample.jpg"
        alt="រូបភាពគំរូ"
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  );
};

export default Home;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Remote Image ជាមួយ Priority</h3>
<p>បន្ថែម Remote Image នៅក្នុង <code>pages/about.tsx</code>។</p>
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
<pre><code class="language-tsx">
// pages/about.tsx
import type { NextPage } from 'next';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <Image
        src="https://example.com/hero.jpg"
        alt="រូបភាពអំពីយើង"
        width={800}
        height={400}
        priority
      />
    </div>
  );
};

export default About;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `next/image` Component ផ្តល់អត្ថប្រយោជន៍អ្វី?',
      options: [
        'Dynamic Routing',
        'Image Optimization',
        'API Routes',
        'Font Optimization'
      ],
      correct: 1,
      explanation: '`next/image` ផ្តល់ Image Optimization ដូចជា Lazy Loading និង Format Selection។'
    },
    {
      question: 'តើ `layout="responsive"` ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យ Image Fixed Size',
        'ធ្វើឱ្យ Image Responsive',
        'ផ្ទុក Image ភ្លាមៗ',
        'បង្ផើត API Endpoint'
      ],
      correct: 1,
      explanation: '`layout="responsive"` ធ្វើឱ្យ Image ប្តូរទំហំអាស្រ័យលើ Device។'
    },
    {
      question: 'តើ Prop ណាមួយប្រើសម្រាប់ Images សំខាន់?',
      options: [
        'lazy',
        'priority',
        'responsive',
        'width'
      ],
      correct: 1,
      explanation: '`priority` Prop ប្រើសម្រាប់ Images សំខាន់ដើម្បី Load ភ្លាមៗ។'
    },
    {
      question: 'តើអ្នកកំណត់ Remote Image Domains នៅក្នុង File ណា?',
      options: [
        'pages/_app.tsx',
        'next.config.js',
        'styles/globals.css',
        'tailwind.config.js'
      ],
      correct: 1,
      explanation: 'Remote Image Domains ត្រូវបានកំណត់នៅក្នុង `next.config.js`។'
    },
    {
      question: 'តើ Lazy Loading នៅក្នុង `next/image` ដំណើរការដោយរបៀបណា?',
      options: [
        'ផ្ទុក Image ភ្លាមៗ',
        'ផ្ទុក Image នៅពេលចូល Viewport',
        'ផ្ទុក Image នៅ Build Time',
        'ផ្ទុក Image នៅ Request Time'
      ],
      correct: 1,
      explanation: 'Lazy Loading ផ្ទុក Image នៅពេលចូល Viewport។'
    },
    {
      question: 'តើ `next/image` គាំទ្រ Image Format ណាខ្លះ?',
      options: [
        'JPEG តែប៉ុណ្ណោះ',
        'PNG តែប៉ុណ្ណោះ',
        'WebP, JPEG, PNG',
        'SVG តែប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: '`next/image` គាំទ្រ WebP, JPEG, PNG និងជ្រើសរើស Format ដ៏ល្អបំផុត។'
    },
    {
      question: 'តើ Prop ណាមួយតម្រូវឱ្យបញ្ជាក់នៅក្នុង `next/image`?',
      options: [
        'className',
        'alt',
        'style',
        'priority'
      ],
      correct: 1,
      explanation: '`alt` Prop តម្រូវឱ្យបញ្ជាក់សម្រាប់ Accessibility។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `next/image` ជាមួយ Static Images បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ Tailwind CSS',
        'បាន, ប៉ុន្តែត្រូវប្រើ CSS Modules'
      ],
      correct: 0,
      explanation: '`next/image` អាចប្រើជាមួយ Static Images នៅក្នុង `public/`។'
    },
    {
      question: 'តើអ្វីជាគុណប្រយោជន៍នៃ Lazy Loading?',
      options: [
        'បង្កើន SEO',
        'កាត់បន្ថយ Load Time',
        'បង្ផើត Dynamic Routes',
        'កែ Font'
      ],
      correct: 1,
      explanation: 'Lazy Loading កាត់បន្ថយ Load Time ដោយផ្ទុក Images នៅពេលចាំបាច់។'
    },
    {
      question: 'តើ `next/image` អាច Optimize Remote Images បានទេ?',
      options: [
        'បាន, ប៉ុន្តែត្រូវកំណត់ Domains',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `getStaticProps`',
        'បាន, ប៉ុន្តែត្រូវប្រើ Tailwind CSS'
      ],
      correct: 0,
      explanation: '`next/image` អាច Optimize Remote Images ប៉ុន្តែត្រូវកំណត់ Domains នៅ `next.config.js`។'
    },
    {
      question: 'តើ Prop `width` និង `height` មានតួនាទីអ្វី?',
      options: [
        'កំណត់ Image Size',
        'កំណត់ Lazy Loading',
        'កំណត់ Priority',
        'កំណត់ Format'
      ],
      correct: 0,
      explanation: '`width` និង `height` កំណត់ Image Size សម្រាប់ Optimization។'
    },
    {
      question: 'តើ `next/image` ជួយ SEO ដោយរបៀបណា?',
      options: [
        'បន្ថែម API Routes',
        'កាត់បន្ថយ Load Time',
        'បន្ថែម Fonts',
        'បង្ផើត Dynamic Routes'
      ],
      correct: 1,
      explanation: '`next/image` ជួយ SEO ដោយកាត់បន្ថយ Load Time និងប្រើ Responsive Images។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `next/image` ដោយគ្មាន `width` និង `height` បានទេ?',
      options: [
        'បាន, ប្រសិនបើប្រើ `layout="fill"`',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `priority`',
        'បាន, ប៉ុន្តែត្រូវប្រើ Tailwind CSS'
      ],
      correct: 0,
      explanation: '`next/image` អាចប្រើដោយគ្មាន `width` និង `height` ប្រសិនបើប្រើ `layout="fill"`។'
    }
  ],
  lab: {
    task: `
បង្ផើត Next.js Project ដែលប្រើ \`next/image\` សម្រាប់ Image Optimization។

**តម្រូវការ:**

1. **បង្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-image-app\` និងជ្រើសរើស TypeScript។

2. **បង្ផើត Page ជាមួយ Local Image:**
   - បង្ផើត File \`pages/index.tsx\` ដែលបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>\` និង Image ពី \`public/images/sample.jpg\` ដោយប្រើ \`next/image\`។
   - ប្រើ Props: \`width={500}\`, \`height={300}\`, \`layout="responsive"\`, \`alt="រូបភាពគំរូ"\`។

3. **បង្ផើត Page ជាមួយ Remote Image:**
   - បង្ផើត File \`pages/about.tsx\` ដែលបង្ហាញ \`<h1>អំពីយើង</h1>\` និង Remote Image ពី \`https://example.com/hero.jpg\`។
   - ប្រើ Props: \`width={800}\`, \`height={400}\`, \`priority\`, \`alt="រូបភាពអំពីយើង"\`។
   - កែ \`next.config.js\` ដើម្បីកំណត់ Domain \`example.com\`។

4. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។

5. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000\` (Local Image)
     - \`http://localhost:3000/about\` (Remote Image)

**ការណែនាំ:** ដាក់ File \`sample.jpg\` នៅក្នុង \`public/images/\`។ ពិនិត្យ Console នៅក្នុង Browser (F12) ឬ Terminal សម្រាប់ Error Messages។
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
## next.config.js 
\`\`\`text
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
};

module.exports = nextConfig;
\`\`\`

## pages/index.tsx 
\`\`\`text
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <Image
        src="/images/sample.jpg"
        alt="រូបភាពគំរូ"
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  );
};

export default Home;
\`\`\`

## pages/about.tsx 
\`\`\`text
import type { NextPage } from 'next';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <div className="container">
      <h1>អំពីយើង</h1>
      <Image
        src="https://example.com/hero.jpg"
        alt="រូបភាពអំពីយើង"
        width={800}
        height={400}
        priority
      />
    </div>
  );
};

export default About;
\`\`\`
`
  }
};

export default NextLesson3_2Content;