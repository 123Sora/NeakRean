import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson4_1Content: LessonContent = {
  title: 'Vue Router',
  objectives: [
    'យល់ដឹងពីអ្វីជា Vue Router និងសារៈសំខាន់របស់វា',
    'រៀនរបៀបដំឡើង និងកំណត់រ៉ូតទ័រ',
    'ប្រើ `<router-link>` និង `<router-view>` សម្រាប់ Navigation',
    'អនុវត្ត Dynamic Routing និង Route Parameters',
    'ស្វែងយល់ពី Navigation Guards',
  ],
  content: `
# Vue Router 🧭

---

**Vue Router** គឺជា Official Router សម្រាប់ Vue.js ដែលអនុញ្ញាតឱ្យបង្កើត Single Page Applications (SPAs) ជាមួយនឹង Navigation ដែលគ្មាន Page Reload។

---

## 1. អ្វីជា Vue Router?

Vue Router គ្រប់គ្រង Navigation នៅក្នុង Vue.js Applications ដោយ Map URLs ទៅ Components។

**ឧទាហរណ៍ខ្លី:**
\`\`\`javascript
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';

const routes = [
  { path: '/', component: Home }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
\`\`\`

---

## 2. ការដំឡើង Vue Router

1. ដំឡើង Vue Router:
   \`\`\`bash
   npm install vue-router@4
   \`\`\`

2. កំណត់ Router:
   \`\`\`javascript
   // main.js
   import { createApp } from 'vue';
   import { createRouter, createWebHistory } from 'vue-router';
   import App from './App.vue';
   import Home from './components/Home.vue';
   import About from './components/About.vue';

   const routes = [
     { path: '/', component: Home },
     { path: '/about', component: About }
   ];

   const router = createRouter({
     history: createWebHistory(),
     routes
   });

   const app = createApp(App);
   app.use(router);
   app.mount('#app');
   \`\`\`

3. ប្រើ \`<router-view>\` និង \`<router-link>\`:
   \`\`\`vue
   <!-- App.vue -->
   <template>
     <div>
       <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>
       <router-view></router-view>
     </div>
   </template>
   \`\`\`

---

## 3. Dynamic Routing

**Dynamic Routes** ប្រើ Parameters ដើម្បី Render Components ដោយផ្អែកលើ URL។

\`\`\`javascript
const routes = [
  { path: '/user/:id', component: User }
];
\`\`\`

\`\`\`vue
<!-- User.vue -->
<template>
  <div>
    <h1>User ID: {{ $route.params.id }}</h1>
  </div>
</template>
\`\`\`

---

## 4. Navigation Guards

**Navigation Guards** គ្រប់គ្រង Navigation Logic (ឧ. Authentication)។

\`\`\`javascript
const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/admin' && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Vue Router

- **ប្រើ Kebab-case សម្រាប់ Route Paths:** ដើម្បីអនុលោមតាម URL Standards។
- **ប្រើ \`<router-link>\`:** ជំនួស \`<a>\` ដើម្បី Prevent Page Reload។
- **ប្រើ Navigation Guards:** សម្រាប់ Access Control។
- **អាន Documentation:** [router.vuejs.org](https://router.vuejs.org)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Basic Routing</h3>
<p>បង្កើត Routes សម្រាប់ Home និង About Pages។</p>
<pre><code class="language-javascript">
// main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
</code></pre>
<pre><code class="language-vue">
<!-- App.vue -->
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Dynamic Routing</h3>
<p>បង្កើត Route ជាមួយ Parameter។</p>
<pre><code class="language-javascript">
// main.js
const routes = [
  { path: '/user/:id', component: { template: '<h1>User ID: {{ $route.params.id }}</h1>' } }
];
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Vue Router គឺជាអ្វី?',
      options: [
        'State Management Library',
        'Official Router សម្រាប់ Vue.js',
        'Build Tool',
        'Component Library'
      ],
      correct: 1,
      explanation: 'Vue Router គឺជា Official Router សម្រាប់ Vue.js។'
    },
    {
      question: 'តើ Command ណាមួយប្រើដើម្បីដំឡើង Vue Router?',
      options: [
        'npm install vue',
        'npm install vue-router@4',
        'npm install vuex',
        'npm install vite'
      ],
      correct: 1,
      explanation: '`npm install vue-router@4` ដំឡើង Vue Router សម្រាប់ Vue 3។'
    },
    {
      question: 'តើ `<router-link>` មានតួនាទីអ្វី?',
      options: [
        'Render Component',
        'Navigate Without Page Reload',
        'Manage State',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`<router-link>` Navigate Without Page Reload។'
    },
    {
      question: 'តើ `<router-view>` ប្រើសម្រាប់អ្វី?',
      options: [
        'Define Routes',
        'Render Matched Component',
        'Handle Events',
        'Bind Styles'
      ],
      correct: 1,
      explanation: '`<router-view>` Render Matched Component។'
    },
    {
      question: 'តើ Dynamic Route Parameters ត្រូវបាន Access ដោយរបៀបណា?',
      options: [
        '$route.params',
        '$route.query',
        '$route.path',
        '$route.data'
      ],
      correct: 0,
      explanation: '`$route.params` Access Dynamic Route Parameters។'
    },
    {
      question: 'តើ Navigation Guard ណាមួយ Run មុន Navigation?',
      options: [
        'beforeEach',
        'afterEach',
        'beforeEnter',
        'beforeResolve'
      ],
      correct: 0,
      explanation: '`beforeEach` Run មុន Navigation។'
    },
    {
      question: 'តើ `createWebHistory` ប្រើសម្រាប់អ្វី?',
      options: [
        'Manage State',
        'Enable HTML5 History Mode',
        'Fetch Data',
        'Render Components'
      ],
      correct: 1,
      explanation: '`createWebHistory` Enable HTML5 History Mode។'
    },
    {
      question: 'តើ Route Paths គួរប្រើ Format អ្វី?',
      options: [
        'CamelCase',
        'Kebab-case',
        'PascalCase',
        'Snake_case'
      ],
      correct: 1,
      explanation: 'Route Paths គួរប្រើ Kebab-case។'
    },
    {
      question: 'តើ `<router-link>` អាច Replace `<a>` Tag បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: '`<router-link>` Replace `<a>` ដើម្បី Prevent Page Reload។'
    },
    {
      question: 'តើ Navigation Guards សមស្របសម្រាប់អ្វី?',
      options: [
        'Render Components',
        'Access Control',
        'List Rendering',
        'State Management'
      ],
      correct: 1,
      explanation: 'Navigation Guards សមស្របសម្រាប់ Access Control។'
    },
    {
      question: 'តើ `$route` Object ផ្តល់អ្វីខ្លះ?',
      options: [
        'Route Parameters និង Metadata',
        'Component Templates',
        'CSS Styles',
        'Event Handlers'
      ],
      correct: 0,
      explanation: '`$route` ផ្តល់ Route Parameters និង Metadata។'
    },
    {
      question: 'តើ Vue Router តម្រូវឱ្យប្រើ Build Tool ដូចជា Vite ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ CDN',
        'បាន ប៉ុន្តែត្រូវប្រើ Vue CLI'
      ],
      correct: 1,
      explanation: 'Vue Router អាចប្រើជាមួយ CDN ឬ Build Tools។'
    },
    {
      question: 'តើ `next()` នៅក្នុង Navigation Guard ធ្វើអ្វី?',
      options: [
        'Cancel Navigation',
        'Allow Navigation',
        'Redirect to Home',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`next()` Allow Navigation។'
    },
  ],
  lab: {
    task: `
បង្កើត Vue.js Application ដែលប្រើ Vue Router។

**តម្រូវការ:**

1. **បង្កើត Project Structure:**
   - បង្កើត Folder: \`vue-router-app\`។
   - បន្ថែម Files: \`index.html\`, \`main.js\`, \`App.vue\`, \`components/Home.vue\`, \`components/About.vue\`។

2. **ដំឡើង Vue Router:**
   - បន្ថែម Vue.js និង Vue Router CDN:
     - \`https://unpkg.com/vue@3/dist/vue.global.js\`
     - \`https://unpkg.com/vue-router@4/dist/vue-router.global.js\`

3. **បង្កើត Vue App:**
   - នៅ \`index.html\`, បង្កើត \`<div id="app">\` ដែល Render \`<app></app>\`។
   - នៅ \`main.js\`, កំណត់ Router ជាមួយ Routes:
     - \`/\` → \`Home.vue\`
     - \`/about\` → \`About.vue\`

4. **បង្កើត Components:**
   - \`Home.vue\`: \`<h1>ទំព័រដើម</h1>\`
   - \`About.vue\`: \`<h1>អំពី</h1>\`
   - \`App.vue\`: \`<router-link to="/">ទំព័រដើម</router-link>\`, \`<router-link to="/about">អំពី</router-link>\`, \`<router-view>\`

5. **បន្ថែម Styling:**
   - នៅ \`index.html\`, \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`h1\`។
     - \`margin: 10px;\` សម្រាប់ \`router-link\`។

6. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - ចុច Links ដើម្បី Navigate រវាង Home និង About។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Vue Router Lab</title>
  <style>
    h1 {
      font-family: Arial, sans-serif;
    }
    a {
      margin: 10px;
    }
  </style>
</head>
<body>
  <div id="app"></div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://unpkg.com/vue-router@4/dist/vue-router.global.js"></script>
  <script>
    const Home = { template: '<h1>ទំព័រដើម</h1>' };
    const About = { template: '<h1>អំពី</h1>' };

    const routes = [
      { path: '/', component: Home },
      { path: '/about', component: About }
    ];

    const router = VueRouter.createRouter({
      history: VueRouter.createWebHistory(),
      routes
    });

    const App = {
      template: \`
        <div>
          <router-link to="/">ទំព័រដើម</router-link>
          <router-link to="/about">អំពី</router-link>
          <router-view></router-view>
        </div>
      \`
    };

    const app = Vue.createApp(App);
    app.use(router);
    app.mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson4_1Content;