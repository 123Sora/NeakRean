import type { LessonContent } from '../../../../types/LessonTypes';

const NextLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី Next.js',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា Next.js និងតួនាទីរបស់វា',
    'ស្វែងយល់ពីមូលហេតុដែលត្រូវប្រើ Next.js',
    'ប្រៀបធៀប Next.js ជាមួយ Create React App និង Frontend Frameworks ផ្សេងទៀត',
    'ស្គាល់តម្រូវការជាមុនសម្រាប់ការរៀន Next.js',
  ],
  content: `
# ណែនាំអំពី Next.js 🚀

---

**Next.js** គឺជា React Framework ដ៏មានឥទ្ធិពលសម្រាប់កសាង **Production-ready React Applications**។ វាផ្តល់នូវមុខងារដូចជា Server-Side Rendering (SSR), Static Site Generation (SSG), និង API Routes ដែលជួយបង្កើនប្រសិទ្ធភាព SEO, Performance និង Developer Experience។

---

## 1. អ្វីទៅជា Next.js?

Next.js គឺជា Framework ដែលសាងសង់នៅលើ React ដើម្បីផ្តល់នូវមុខងារបន្ថែមសម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ។ វាអនុញ្ញាតឱ្យអ្នកបង្កើត Web Applications ដែលមាន៖
- **Server-Side Rendering (SSR):** បង្កើតទំព័រនៅខាង Server សម្រាប់ SEO និង Performance។
- **Static Site Generation (SSG):** បង្កើតទំព័រឋាតិកជាមុនសម្រាប់ល្បឿនលឿន។
- **File-system Routing:** បង្កើត Routes ដោយផ្អែកលើឯកសារនៅក្នុង Folder។
- **API Routes:** បង្កើត Backend API Endpoints នៅក្នុង Next.js។

---

## 2. មូលហេតុដែលត្រូវប្រើ Next.js

- **SEO Optimization:** SSR និង SSG ជួយឱ្យ Search Engines អាច Crawl ទំព័របានល្អប្រសើរ។
- **Performance:** Automatic Code Splitting, Image Optimization, និង Fast Refresh។
- **Developer Experience:** File-system Routing និង Built-in Features ធ្វើឱ្យការអភិវឌ្ឍន៍កាន់តែងាយស្រួល។
- **Full-stack Capabilities:** អាចបង្កើត Frontend និង Backend ក្នុង Project តែមួយ។

---

## 3. ការប្រៀបធៀប Next.js ជាមួយ Create React App និង Frontend Frameworks ផ្សេងទៀត

| លក្ខណៈពិសេស            | Next.js                       | Create React App              | Vue.js/Nuxt.js                |
|--------------------------|-------------------------------|------------------------------|-------------------------------|
| **Rendering**            | SSR, SSG, CSR                | CSR                          | SSR, SSG, CSR (Nuxt.js)       |
| **Routing**              | File-system Routing          | React Router (Manual)        | File-system Routing (Nuxt.js) |
| **API Routes**           | Built-in                     | គ្មាន                       | Built-in (Nuxt.js)            |
| **SEO**                  | ល្អបំផុត (SSR/SSG)          | មធ្យម (CSR)                 | ល្អ (Nuxt.js)                 |
| **Learning Curve**       | មធ្យម (ត្រូវការ React)       | ងាយស្រួល                   | មធ្យម                        |

---

## 4. តម្រូវការជាមុន

ដើម្បីរៀន Next.js អ្នកគួរតែមានចំណេះដឹងជាមុន៖
- **HTML & CSS:** មូលដ្ឋានគ្រឹះនៃ Web Development។
- **JavaScript ES6+:** Variables, Arrow Functions, Promises, Async/Await។
- **ReactJS Fundamentals:** Components, Props, State, Hooks (useState, useEffect)។
- **Node.js & npm/yarn:** សម្រាប់ការដំឡើងនិងគ្រប់គ្រង Dependencies។

---

## 5. ឧទាហរណ៍សាមញ្ញនៃ Next.js Page

នេះជាឧទាហរណ៍នៃ Page ដំបូងនៅក្នុង Next.js៖

\`\`\`jsx
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>នេះជាទំព័រដំបូងរបស់អ្នក។</p>
    </div>
  );
}
\`\`\`

**លទ្ធផល:**
- នៅពេល Run Project (\`npm run dev\`) និងចូលទៅ \`http://localhost:3000\` អ្នកនឹងឃើញទំព័រដែលបង្ហាញ "សូមស្វាគមន៍មកកាន់ Next.js!"។

---

## 6. ហេតុអ្វីត្រូវរៀន Next.js?

- **Production-ready:** ផ្តល់នូវមុខងារដែលត្រៀមសម្រាប់ Production។
- **Community & Ecosystem:** គាំទ្រដោយ Vercel និងមានសហគមន៍ធំ។
- **Versatility:** សាកសមសម្រាប់ Static Sites, Dynamic Apps, និង E-commerce។
- **Future-proof:** App Router គឺជាទិសដៅអនាគតរបស់ Next.js។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត Next.js Page សាមញ្ញ</h3>
<p>បង្កើត Page ដែលបង្ហាញសារស្វាគមន៍។</p>
<pre><code class="language-jsx">
// pages/index.js
export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>សួស្តីពី Next.js!</h1>
      <p>នេះជាទំព័រដំបូងរបស់ខ្ញុំ។</p>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បន្ថែម Button ដែលប្តូរអត្ថបទ</h3>
<p>បន្ថែម Button ដែលប្តូរអត្ថបទនៅពេលចុច។</p>
<pre><code class="language-jsx">
// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('ចុចប៊ូតុងដើម្បីស្វាគមន៍!');

  const changeMessage = () => {
    setMessage('សួស្តី! អ្នកបានចាប់ផ្តើមរៀន Next.js!');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>{message}</p>
      <button onClick={changeMessage}>ប្តូរសារ</button>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Next.js គឺជាអ្វី?',
      options: [
        'ភាសាសរសេរកម្មវិធី',
        'React Framework សម្រាប់ Production',
        'CSS Framework',
        'Database Management Tool'
      ],
      correct: 1,
      explanation: 'Next.js គឺជា React Framework ដែលផ្តល់នូវមុខងារសម្រាប់កសាង Production-ready Applications។'
    },
    {
      question: 'តើមុខងារណាមួយខាងក្រោមមិនមែនជាលក្ខណៈពិសេសរបស់ Next.js?',
      options: [
        'Server-Side Rendering (SSR)',
        'Static Site Generation (SSG)',
        'File-system Routing',
        'Database Management'
      ],
      correct: 3,
      explanation: 'Next.js មិនមានមុខងារសម្រាប់ Database Management ដោយផ្ទាល់ទេ ប៉ុន្តែអាចប្រើជាមួយ Databases។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍សំខាន់នៃ Next.js?',
      options: [
        'SEO Optimization',
        'Complex Animations',
        'Database Querying',
        'Image Editing'
      ],
      correct: 0,
      explanation: 'Next.js ផ្តល់នូវ SEO Optimization តាមរយៈ SSR និង SSG។'
    },
    {
      question: 'តើតម្រូវការជាមុនសម្រាប់ Next.js មានអ្វីខ្លះ?',
      options: [
        'HTML, CSS, JavaScript, ReactJS',
        'Python, Django',
        'Java, Spring Boot',
        'C++, Qt'
      ],
      correct: 0,
      explanation: 'Next.js តម្រូវឱ្យមានចំណេះដឹង HTML, CSS, JavaScript (ES6+), និង ReactJS។'
    },
    {
      question: 'តើ Next.js ប្រៀបធៀបជាមួយ Create React App ដោយរបៀបណា?',
      options: [
        'Next.js គាំទ្រ SSR និង SSG, ខណៈ CRA គាំទ្រ CSR',
        'Next.js គាំទ្រ Database Management',
        'CRA មាន File-system Routing',
        'Next.js មិនប្រើ React'
      ],
      correct: 0,
      explanation: 'Next.js គាំទ្រ SSR, SSG, និង File-system Routing ខណៈ CRA ផ្តោតលើ CSR។'
    }
  ],
  lab: {
    task: `
បង្កើត Next.js Page សាមញ្ញមួយដែលបង្ហាញអំពីមុខងារជាមូលដ្ឋានរបស់ Next.js។

**តម្រូវការ:**

1. **Page Structure:**
   - បង្កើត File ថ្មីឈ្មោះ \`index.js\` នៅក្នុង Folder \`pages\`។
   - បន្ថែម Component ដែលបង្ហាញ \`<h1>\` ជាមួយអត្ថបទ "សូមស្វាគមន៍មកកាន់ Next.js!"។
   - បន្ថែម \`<p>\` ដែលមានអត្ថបទ "នេះជាទំព័រដំបូងរបស់ខ្ញុំជាមួយ Next.js។"។

2. **Interactivity:**
   - បន្ថែម \`<button>\` ដែលមានអត្ថបទ "ប្តូរសារ"។
   - ប្រើ \`useState\` Hook ដើម្បីគ្រប់គ្រងស្ថានភាពនៃអត្ថបទ។
   - នៅពេលចុច Button ប្តូរអត្ថបទនៃ \`<p>\` ទៅជា "អ្នកបានចាប់ផ្តើមរៀន Next.js!"។

3. **Basic Styling:**
   - បន្ថែម Inline CSS ដើម្បីកំណត់ \`text-align: center\` និង \`padding: 20px\` សម្រាប់ Container។
   - កំណត់ Style សម្រាប់ Button ដោយប្រើ \`padding: 10px 20px\`, \`background-color: #007bff\`, \`color: white\`, \`border: none\`, និង \`cursor: pointer\`។
   - បន្ថែម Hover Effect ដែលប្តូរ \`background-color\` ទៅជា \`#0056b3\`។

**ការណែនាំ:** បន្ទាប់ពីបង្កើត File សាកល្បង Run Project ដោយប្រើ \`npm run dev\` និងចូលទៅ \`http://localhost:3000\` ដើម្បីមើលលទ្ធផល។
    `,
    solution: `
\`\`\`text
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('នេះជាទំព័រដំបូងរបស់ខ្ញុំជាមួយ Next.js។');

  const changeMessage = () => {
    setMessage('អ្នកបានចាប់ផ្តើមរៀន Next.js!');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>{message}</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        onClick={changeMessage}
      >
        ប្តូរសារ
      </button>
    </div>
  );
}
  \`\`\`
`
  }
};

export default NextLesson1_1Content;