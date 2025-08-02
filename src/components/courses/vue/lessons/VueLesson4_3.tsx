import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson4_3Content: LessonContent = {
  title: 'Vue CLI / Vite',
  objectives: [
    'យល់ដឹងពី Vue CLI និង Vite ជា Build Tools',
    'រៀនរបៀបបង្កើត Project ជាមួយ Vue CLI និង Vite',
    'ស្វែងយល់ពីភាពខុសគ្នារវាង Vue CLI និង Vite',
    'អនុវត្តការបង្កើត Vue Project ជាមួយ Vite',
  ],
  content: `
# Vue CLI / Vite 🛠️

---

**Vue CLI** និង **Vite** គឺជា Build Tools សម្រាប់ Vue.js Projects ដែលជួយ Setup Project Structure, Build, និង Serve Applications។

---

## 1. Vue CLI

**Vue CLI** គឺជា Official CLI សម្រាប់ Vue.js ដែលផ្តល់ Project Scaffolding និង Plugins។

**ការដំឡើង Vue CLI:**
\`\`\`bash
npm install -g @vue/cli
\`\`\`

**បង្កើត Project:**
\`\`\`bash
vue create my-project
\`\`\`

**Project Structure:**
\`\`\`
my-project/
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── components/
└── public/
    ├── index.html
\`\`\`

---

## 2. Vite

**Vite** គឺជា Modern Build Tool ដែល Faster ជាង Vue CLI ដោយប្រើ ES Modules។

**បង្កើត Project ជាមួយ Vite:**
\`\`\`bash
npm create vite@latest my-project -- --template vue
cd my-project
npm install
npm run dev
\`\`\`

**Project Structure:**
\`\`\`
my-project/
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── components/
└── index.html
\`\`\`

---

## 3. ភាពខុសគ្នារវាង Vue CLI និង Vite

- **Vue CLI**:
  - Webpack-based។
  - Slower Build Times។
  - More Plugins Available។
- **Vite**:
  - ES Modules-based។
  - Faster Build and Hot Module Replacement (HMR)។
  - Simpler Configuration។

---

## 4. ការប្រើ Vite ជាមួយ Vue

**Example \`main.js\`:**
\`\`\`javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
\`\`\`

**Example \`App.vue\`:**
\`\`\`vue
<template>
  <div>
    <h1>សួស្តីពី Vite!</h1>
  </div>
</template>
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Vue CLI និង Vite

- **ប្រើ Vite សម្រាប់ New Projects:** ដោយសារ Speed និង Simplicity។
- **ប្រើ Vue CLI សម្រាប់ Legacy Projects:** ប្រសិនបើត្រូវការ Plugins។
- **ប្រើ \`npm run dev\`:** ដើម្បី Start Development Server។
- **អាន Documentation:** [vitejs.dev](https://vitejs.dev), [cli.vuejs.org](https://cli.vuejs.org)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Vue CLI Project</h3>
<p>បង្កើត Project ជាមួយ Vue CLI។</p>
<pre><code class="language-bash">
npm install -g @vue/cli
vue create my-project
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Vite Project</h3>
<p>បង្កើត Project ជាមួយ Vite។</p>
<pre><code class="language-bash">
npm create vite@latest my-project -- --template vue
cd my-project
npm install
npm run dev
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Vue CLI គឺជាអ្វី?',
      options: [
        'Router Library',
        'State Management Library',
        'Build Tool',
        'Component Library'
      ],
      correct: 2,
      explanation: 'Vue CLI គឺជា Build Tool សម្រាប់ Vue.js។'
    },
    {
      question: 'តើ Vite គឺជាអ្វី?',
      options: [
        'Router Library',
        'State Management Library',
        'Build Tool',
        'Component Library'
      ],
      correct: 2,
      explanation: 'Vite គឺជា Build Tool សម្រាប់ Vue.js។'
    },
    {
      question: 'តើ Command ណាមួយប្រើដើម្បីដំឡើង Vue CLI?',
      options: [
        'npm install vue',
        'npm install -g @vue/cli',
        'npm install vite',
        'npm install pinia'
      ],
      correct: 1,
      explanation: '`npm install -g @vue/cli` ដំឡើង Vue CLI។'
    },
    {
      question: 'តើ Command ណាមួយបង្កើត Vue Project ជាមួយ Vite?',
      options: [
        'npm create vite@latest',
        'vue create my-project',
        'npm install vue',
        'npm run dev'
      ],
      correct: 0,
      explanation: '`npm create vite@latest` បង្កើត Vue Project ជាមួយ Vite។'
    },
    {
      question: 'តើ Vite ប្រើ Module System អ្វី?',
      options: [
        'CommonJS',
        'ES Modules',
        'AMD',
        'SystemJS'
      ],
      correct: 1,
      explanation: 'Vite ប្រើ ES Modules។'
    },
    {
      question: 'តើ Vue CLI ប្រើ Build Tool អ្វី?',
      options: [
        'Rollup',
        'Webpack',
        'esbuild',
        'Parcel'
      ],
      correct: 1,
      explanation: 'Vue CLI ប្រើ Webpack។'
    },
    {
      question: 'តើ Vite មានអត្ថប្រយោជន៍អ្វីលើ Vue CLI?',
      options: [
        'More Plugins',
        'Faster Build and HMR',
        'Complex Configuration',
        'Legacy Support'
      ],
      correct: 1,
      explanation: 'Vite មាន Faster Build and HMR។'
    },
    {
      question: 'តើ `npm run dev` ធ្វើអ្វី?',
      options: [
        'Build Production',
        'Start Development Server',
        'Install Dependencies',
        'Run Tests'
      ],
      correct: 1,
      explanation: '`npm run dev` Start Development Server។'
    },
    {
      question: 'តើ Vite គាំទ្រ Hot Module Replacement (HMR) ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវ Configure',
        'បាន ប៉ុន្តែ Slow'
      ],
      correct: 0,
      explanation: 'Vite គាំទ្រ HMR ដោយ Default។'
    },
    {
      question: 'តើ Vue CLI សមស្របសម្រាប់អ្វី?',
      options: [
        'New Projects',
        'Legacy Projects',
        'Static Sites',
        'Mobile Apps'
      ],
      correct: 1,
      explanation: 'Vue CLI សមស្របសម្រាប់ Legacy Projects។'
    },
    {
      question: 'តើ Vite ប្រើ Build Tool អ្វី?',
      options: [
        'Webpack',
        'Rollup and esbuild',
        'Parcel',
        'Vite Only'
      ],
      correct: 1,
      explanation: 'Vite ប្រើ Rollup និង esbuild។'
    },
    {
      question: 'តើ File ណាមួយជា Entry Point នៅក្នុង Vite Project?',
      options: [
        'index.html',
        'main.js',
        'App.vue',
        'vite.config.js'
      ],
      correct: 0,
      explanation: '`index.html` ជា Entry Point នៅក្នុង Vite Project។'
    },
    {
      question: 'តើ Vite គឺជា Default Build Tool សម្រាប់ Vue 3 ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែ Optional',
        'បាន ប៉ុន្តែត្រូវ Configure'
      ],
      correct: 0,
      explanation: 'Vite គឺជា Default Build Tool សម្រាប់ Vue 3។'
    },
  ],
  lab: {
    task: `
បង្កើត Vue.js Application ជាមួយ Vite។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command:
     \`\`\`bash
     npm create vite@latest vue-vite-app -- --template vue
     cd vue-vite-app
     npm install
     \`\`\`

2. **បង្កើត Component:**
   - នៅ \`src/App.vue\`, បង្ហាញ:
     - \`<h1>សួស្តីពី Vite!</h1>\`
     - \`<p>Vue 3 Project</p>\`

3. **បន្ថែម Styling:**
   - នៅ \`src/App.vue\`, \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`h1\`។
     - \`color: blue;\` សម្រាប់ \`p\`។

4. **Run Application:**
   - ប្រើ \`npm run dev\` ដើម្បី Start Server។
   - បើក Browser នៅ \`http://localhost:5173\`។

**ការណែនាំ:** ប្រើ Terminal និង Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
## src/App.vue 
\`\`\`text
<template>
  <div>
    <h1>សួស្តីពី Vite!</h1>
    <p>Vue 3 Project</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
h1 {
  font-family: Arial, sans-serif;
}
p {
  color: blue;
}
</style>
\`\`\`

## main.js 
\`\`\`text
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
\`\`\`

## index.html 
\`\`\`text
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Vite Vue App</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
\`\`\`
`
  }
};

export default VueLesson4_3Content;