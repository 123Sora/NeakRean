import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson6_2Content: LessonContent = {
  title: 'គន្លឹះ និង Best Practices',
  objectives: [
    'ស្វែងយល់ពី Best Practices សម្រាប់ Vue.js Development',
    'រៀនរបៀបសរសេរកូដឱ្យ Clean និង Maintainable',
    'យល់ដឹងពី Performance Optimization',
    'អនុវត្ត Testing និង Debugging Techniques',
  ],
  content: `
# គន្លឹះ និង Best Practices 🧠

---

ការអភិវឌ្ឍ Vue.js Applications ទាមទារការអនុវត្ត **Best Practices** ដើម្បីធានាថាកូដមានភាព Clean, Maintainable, និង Performant។

---

## 1. Code Organization

- **Component-based Architecture:** បែងចែក UI ជា Reusable Components។
- **File Structure:**
  \`\`\`
  src/
  ├── components/     # Reusable Components
  ├── views/         # Page-level Components
  ├── stores/        # Pinia Stores
  ├── router/        # Vue Router Config
  ├── assets/        # Images, CSS
  \`\`\`
- **Naming Conventions:** ប្រើ Kebab-case សម្រាប់ Files (ឧ. \`my-component.vue\`) និង PascalCase សម្រាប់ Components (ឧ. \`MyComponent\`)។

---

## 2. State Management

- **Use Pinia:** សម្រាប់ Centralized State Management។
- **Keep Stores Simple:** ប្រើ Actions សម្រាប់ Logic និង Getters សម្រាប់ Computed State។
- **Avoid Direct State Mutation:** ប្រើ Actions ដើម្បី Update State។

\`\`\`javascript
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: { doubleCount: (state) => state.count * 2 },
  actions: { increment() { this.count++; } }
});
\`\`\`

---

## 3. Performance Optimization

- **Lazy Loading Routes:**
  \`\`\`javascript
  // router/index.js
  const routes = [
    { path: '/about', component: () => import('../views/About.vue') }
  ];
  \`\`\`
- **Use \`v-once\`:** សម្រាប់ Static Content។
- **Debounce Inputs:** សម្រាប់ Expensive Operations។

\`\`\`vue
<template>
  <input v-model="search" @input="debouncedSearch">
</template>
<script>
import { ref } from 'vue';
import { debounce } from 'lodash';

export default {
  setup() {
    const search = ref('');
    const debouncedSearch = debounce(() => {
      console.log('Search:', search.value);
    }, 300);
    return { search, debouncedSearch };
  }
}
</script>
\`\`\`

---

## 4. Testing and Debugging

- **Unit Testing:** ប្រើ Vitest ឬ Jest។
  \`\`\`bash
  npm install --save-dev vitest
  \`\`\`
- **Debugging:** ប្រើ Vue Devtools Browser Extension។
- **Console Logs:** ប្រើ \`console.log\` សម្រាប់ Quick Debugging ប៉ុន្តែ Remove មុន Production។

---

## 5. Best Practices

- **Use Composition API:** សម្រាប់ Flexible Code។
- **Avoid Overusing Props:** ប្រើ Slots ឬ Provide/Inject សម្រាប់ Deep Component Trees�।
- **Keep Components Small:** Single Responsibility Principle។
- **Document Code:** ប្រើ Comments និង README Files។
- **Follow Vue Style Guide:** [vuejs.org/style-guide](https://vuejs.org/style-guide)។

---

## 6. គន្លឹះបន្ថែម

- **TypeScript Support:** ប្រើ TypeScript សម្រាប់ Large Projects។
- **Use ESLint/Prettier:** ដើម្បី Enforce Code Style។
- **Optimize Assets:** បង្រួម Images និង CSS។
- **Monitor Performance:** ប្រើ Browser Devtools Performance Tab។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Lazy Loading Routes</h3>
<p>ប្រើ Lazy Loading ដើម្បី Optimize Performance។</p>
<pre><code class="language-javascript">
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
  { path: '/about', component: () => import('../views/About.vue') }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Debouncing Input</h3>
<p>ប្រើ Debounce សម្រាប់ Search Input�।</p>
<pre><code class="language-vue">
<template>
  <input v-model="search" @input="debouncedSearch" placeholder="Search">
</template>
<script>
import { ref } from 'vue';
import { debounce } from 'lodash';

export default {
  setup() {
    const search = ref('');
    const debouncedSearch = debounce(() => {
      console.log('Search:', search.value);
    }, 300);
    return { search, debouncedSearch };
  }
}
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Component-based Architecture មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'Increase Complexity',
        'Improve Reusability',
        'Slow Performance',
        'Reduce Maintainability'
      ],
      correct: 1,
      explanation: 'Component-based Architecture Improve Reusability។'
    },
    {
      question: 'តើ File Naming Convention សម្រាប់ `.vue` Files គួរប្រើអ្វី?',
      options: [
        'CamelCase',
        'Kebab-case',
        'PascalCase',
        'Snake_case'
      ],
      correct: 1,
      explanation: '`.vue` Files គួរប្រើ Kebab-case។'
    },
    {
      question: 'តើ Pinia Store គួរប្រើអ្វីដើម្បី Update State?',
      options: [
        'Mutations',
        'Actions',
        'Getters',
        'Direct State'
      ],
      correct: 1,
      explanation: 'Pinia Store ប្រើ Actions ដើម្បី Update State។'
    },
    {
      question: 'តើ Lazy Loading Routes ជួយអ្វី?',
      options: [
        'Increase Build Time',
        'Reduce Initial Load Time',
        'Add Complexity',
        'Remove Transitions'
      ],
      correct: 1,
      explanation: 'Lazy Loading Reduce Initial Load Time។'
    },
    {
      question: 'តើ `v-once` Directive ធ្វើអ្វី?',
      options: [
        'Bind Data Two-way',
        'Render Static Content Once',
        'Apply Animation',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`v-once` Render Static Content Once។'
    },
    {
      question: 'តើ Debouncing ប្រើសម្រាប់អ្វី?',
      options: [
        'Manage Routes',
        'Reduce Frequent Function Calls',
        'Apply Transitions',
        'Fetch Data'
      ],
      correct: 1,
      explanation: 'Debouncing Reduce Frequent Function Calls�।'
    },
    {
      question: 'តើ Vue Devtools ជួយអ្វី?',
      options: [
        'Write Tests',
        'Debug Vue Applications',
        'Optimize Images',
        'Define Routes'
      ],
      correct: 1,
      explanation: 'Vue Devtools Debug Vue Applications�।'
    },
    {
      question: 'តើ Composition API មានអត្ថប្រយោជន៍អ្វីជាង Options API?',
      options: [
        'More Complex',
        'More Flexible',
        'Faster Performance',
        'Less Code'
      ],
      correct: 1,
      explanation: 'Composition API More Flexible។'
    },
    {
      question: 'តើ ESLint ប្រើសម្រាប់អ្វី?',
      options: [
        'Optimize Performance',
        'Enforce Code Style',
        'Run Tests',
        'Fetch Data'
      ],
      correct: 1,
      explanation: 'ESLint Enforce Code Style។'
    },
    {
      question: 'តើ `provide/inject` ប្រើសម្រាប់អ្វី?',
      options: [
        'Pass Data in Deep Component Trees',
        'Define Routes',
        'Apply Animations',
        'Manage State'
      ],
      correct: 0,
      explanation: '`provide/inject` Pass Data in Deep Component Trees។'
    },
    {
      question: 'តើ Vue Style Guide នៅឯណា?',
      options: [
        'vuejs.org/style-guide',
        'pinia.vuejs.org',
        'vitejs.dev',
        'axios-http.com'
      ],
      correct: 0,
      explanation: 'Vue Style Guide នៅ `vuejs.org/style-guide`។'
    },
    {
      question: 'តើ Vitest ប្រើសម្រាប់អ្វី?',
      options: [
        'Build Tool',
        'Unit Testing',
        'State Management',
        'Routing'
      ],
      correct: 1,
      explanation: 'Vitest ប្រើសម្រាប់ Unit Testing។'
    },
    {
      question: 'តើ Performance Optimization គួរផ្តោតលើអ្វី?',
      options: [
        'Add More Components',
        'Reduce Load Time and Re-renders',
        'Increase Code Complexity',
        'Remove Comments'
      ],
      correct: 1,
      explanation: 'Performance Optimization Reduce Load Time and Re-renders។'
    },
  ],
  lab: {
    task: `
បង្កើត Vue.js Application ដែលអនុវត្ត Best Practices។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Vite:
     \`\`\`bash
     npm create vite@latest best-practices-app -- --template vue
     cd best-practices-app
     npm install vue-router@4 pinia lodash
     \`\`\`

2. **កំណត់ Router:**
   - បង្កើត \`src/router/index.js\` ជាមួយ Lazy-loaded Routes:
     - \`/\` → \`Home.vue\`
     - \`/about\` → \`About.vue\`

3. **កំណត់ Pinia Store:**
   - បង្កើត \`src/stores/counter.js\`:
     - State: \`count\` (0)
     - Getter: \`doubleCount\`
     - Action: \`increment\`

4. **បង្កើត Components:**
   - \`src/views/Home.vue\`:
     - \`<h1 v-once>Counter App</h1>\`
     - \`<input>\` ជាមួយ Debounced Search (ប្រើ \`lodash.debounce\`)។
     - \`<p>Count: {{ store.count }}</p>\` និង \`<button>\` សម្រាប់ Increment។
   - \`src/views/About.vue\`: \`<h1 v-once>About Page</h1>\`

5. **បន្ថែម Styling:**
   - \`font-family: Arial, sans-serif;\` សម្រាប់ \`h1, p\`។
   - \`padding: 5px;\` សម្រាប់ \`button\`។

6. **Run Application:**
   - ប្រើ \`npm run dev\` និងបើក \`http://localhost:5173\`។

**ការណែនាំ:** ប្រើ Browser Console និង Vue Devtools ដើម្បី Debug។
    `,
    solution: `
## src/App.vue 
\`\`\`text
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
a { margin: 10px; }
</style>
\`\`\`

## src/views/Home.vue 
\`\`\`text
<template>
  <div>
    <h1 v-once>Counter App</h1>
    <input v-model="search" @input="debouncedSearch" placeholder="Search">
    <p>Count: {{ store.count }}</p>
    <p>Double: {{ store.doubleCount }}</p>
    <button @click="store.increment()">Increment</button>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useCounterStore } from '../stores/counter';
import { debounce } from 'lodash';

export default {
  setup() {
    const store = useCounterStore();
    const search = ref('');
    const debouncedSearch = debounce(() => {
      console.log('Search:', search.value);
    }, 300);
    return { store, search, debouncedSearch };
  }
}
</script>
<style>
h1, p { font-family: Arial, sans-serif; }
button { padding: 5px; }
</style>
\`\`\`

## src/views/About.vue 
\`\`\`text
<template>
  <div>
    <h1 v-once>About Page</h1>
  </div>
</template>
<style>
h1 { font-family: Arial, sans-serif; }
</style>
\`\`\`

## src/stores/counter.js 
\`\`\`text
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: { doubleCount: (state) => state.count * 2 },
  actions: { increment() { this.count++; } }
});
\`\`\`

## src/router/index.js 
\`\`\`text
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
  { path: '/about', component: () => import('../views/About.vue') }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
\`\`\`

## src/main.js 
\`\`\`text
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
\`\`\`

## index.html 
\`\`\`text
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Vue Best Practices</title>
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

export default VueLesson6_2Content;