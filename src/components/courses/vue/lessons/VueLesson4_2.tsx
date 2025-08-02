import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson4_2Content: LessonContent = {
  title: 'State Management ជាមួយ Pinia/Vuex',
  objectives: [
    'យល់ដឹងពីអ្វីជា State Management និងសារៈសំខាន់របស់វា',
    'រៀនប្រើ Pinia សម្រាប់ State Management',
    'ស្វែងយល់ពី Vuex (Legacy) និងភាពខុសគ្នាជាមួយ Pinia',
    'អនុវត្ត Store ជាមួយ Actions, State, និង Getters',
  ],
  content: `
# State Management ជាមួយ Pinia/Vuex 🗄️

---

**State Management** គឺជាវិធីសាស្ត្រដើម្បីគ្រប់គ្រង Shared State នៅក្នុង Vue.js Applications។ **Pinia** គឺជា Modern State Management Library សម្រាប់ Vue 3 ខណៈ **Vuex** ជា Legacy Option។

---

## 1. អ្វីជា Pinia?

**Pinia** គឺជា Lightweight State Management Library ដែល Integrate ជាមួយ Vue 3។ វាមាន API សាមញ្ញជាង Vuex។

**ការដំឡើង Pinia:**
\`\`\`bash
npm install pinia
\`\`\`

**កំណត់ Pinia:**
\`\`\`javascript
// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
\`\`\`

---

## 2. បង្កើត Store ជាមួយ Pinia

**Store** គឺជា Centralized Place សម្រាប់ State។

\`\`\`javascript
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    }
  }
});
\`\`\`

**ប្រើ Store:**
\`\`\`vue
<!-- Counter.vue -->
<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>Double: {{ counter.doubleCount }}</p>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>
<script>
import { useCounterStore } from '../stores/counter';

export default {
  setup() {
    const counter = useCounterStore();
    return { counter };
  }
}
</script>
\`\`\`

---

## 3. Vuex (Legacy)

**Vuex** គឺជា State Management Library សម្រាប់ Vue 2 និង Vue 3។ Pinia ជំនួស Vuex នៅ Vue 3។

\`\`\`javascript
// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});
\`\`\`

---

## 4. ភាពខុសគ្នារវាង Pinia និង Vuex

- **Pinia**:
  - Lightweight និង TypeScript-friendly។
  - គ្មាន Mutations; Actions ផ្លាស់ប្តូរ State ដោយផ្ទាល់។
  - Composition API Integration។
- **Vuex**:
  - Mutations ដាច់ដោនឡែកសម្រាប់ State Changes។
  - Complex API សម្រាប់ Large Apps។

---

## 5. គន្លឹះសម្រាប់ State Management

- **ប្រើ Pinia សម្រាប់ Vue 3 Projects:** ដោយសារ Simplicity និង TypeScript Support។
- **ប្រើ Getters សម្រាប់ Computed State:** ដើម្បី Optimize Performance។
- **ប្រើ Actions សម្រាប់ Logic:** ដើម្បី Keep Store Clean។
- **អាន Documentation:** [pinia.vuejs.org](https://pinia.vuejs.org)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Pinia Store</h3>
<p>បង្កើត Store ជាមួយ Pinia។</p>
<pre><code class="language-javascript">
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    }
  }
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Using Pinia in Component</h3>
<p>ប្រើ Store នៅក្នុង Component។</p>
<pre><code class="language-vue">
<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>
<script>
import { useCounterStore } from '../stores/counter';

export default {
  setup() {
    const counter = useCounterStore();
    return { counter };
  }
}
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Pinia គឺជាអ្វី?',
      options: [
        'Router Library',
        'State Management Library',
        'Build Tool',
        'Component Library'
      ],
      correct: 1,
      explanation: 'Pinia គឺជា State Management Library សម្រាប់ Vue 3។'
    },
    {
      question: 'តើ Command ណាមួយប្រើដើម្បីដំឡើង Pinia?',
      options: [
        'npm install vue',
        'npm install pinia',
        'npm install vuex',
        'npm install vite'
      ],
      correct: 1,
      explanation: '`npm install pinia` ដំឡើង Pinia។'
    },
    {
      question: 'តើ `defineStore` ប្រើសម្រាប់អ្វី?',
      options: [
        'Define Routes',
        'Define Store',
        'Define Components',
        'Define Events'
      ],
      correct: 1,
      explanation: '`defineStore` Define Store នៅក្នុង Pinia។'
    },
    {
      question: 'តើ Pinia Store មានផ្នែកអ្វីខ្លះ?',
      options: [
        'State, Getters, Actions',
        'State, Mutations, Actions',
        'Props, Events, Methods',
        'Template, Script, Style'
      ],
      correct: 0,
      explanation: 'Pinia Store មាន State, Getters, Actions។'
    },
    {
      question: 'តើ Vuex ប្រើ Mutations ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: 'Vuex ប្រើ Mutations សម្រាប់ State Changes។'
    },
    {
      question: 'តើ Pinia ប្រើ Mutations ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែ Optional',
        'បាន ប៉ុន្តែត្រូវប្រើ Actions'
      ],
      correct: 1,
      explanation: 'Pinia មិនប្រើ Mutations; Actions ផ្លាស់ប្តូរ State។'
    },
    {
      question: 'តើ Getters នៅក្នុង Pinia មានតួនាទីអ្វី?',
      options: [
        'Change State',
        'Compute Derived State',
        'Handle Events',
        'Render Components'
      ],
      correct: 1,
      explanation: 'Getters Compute Derived State។'
    },
    {
      question: 'តើ Actions នៅក្នុង Pinia ប្រើសម្រាប់អ្វី?',
      options: [
        'Render Components',
        'Handle Logic and Update State',
        'Define Routes',
        'Bind Styles'
      ],
      correct: 1,
      explanation: 'Actions Handle Logic and Update State។'
    },
    {
      question: 'តើ Pinia គាំទ្រ TypeScript ល្អជាង Vuex ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'ស្មើគ្នា',
        'អាស្រ័យលើ Project'
      ],
      correct: 0,
      explanation: 'Pinia គាំទ្រ TypeScript ល្អជាង Vuex។'
    },
    {
      question: 'តើ `useCounterStore` នៅក្នុង Pinia គឺជាអ្វី?',
      options: [
        'Component',
        'Store Instance',
        'Router',
        'Directive'
      ],
      correct: 1,
      explanation: '`useCounterStore` គឺជា Store Instance។'
    },
    {
      question: 'តើ Pinia Integrate ជាមួយ API ណាមួយ?',
      options: [
        'Options API',
        'Composition API',
        'Both',
        'None'
      ],
      correct: 1,
      explanation: 'Pinia Integrate ជាមួយ Composition API។'
    },
    {
      question: 'តើ Vuex នៅតែប្រើនៅ Vue 3 ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែ Deprecated',
        'បាន ប៉ុន្តែត្រូវប្រើ Pinia'
      ],
      correct: 0,
      explanation: 'Vuex អាចប្រើនៅ Vue 3 ប៉ុន្តែ Pinia ត្រូវបានណែនាំ។'
    },
    {
      question: 'តើ State នៅក្នុង Pinia ត្រូវបាន Define ដោយ Function អ្វី?',
      options: [
        'state()',
        'getState()',
        'defineState()',
        'data()'
      ],
      correct: 0,
      explanation: '`state()` Define State នៅក្នុង Pinia។'
    },
  ],
  lab: {
    task: `
បង្កើត Vue.js Application ដែលប្រើ Pinia សម្រាប់ State Management។

**តម្រូវការ:**

1. **បង្កើត Project Structure:**
   - បង្កើត Folder: \`pinia-app\`។
   - បន្ថែម Files: \`index.html\`, \`main.js\`, \`App.vue\`, \`stores/counter.js\`។

2. **ដំឡើង Pinia:**
   - បន្ថែម Vue.js និង Pinia CDN:
     - \`https://unpkg.com/vue@3/dist/vue.global.js\`
     - \`https://unpkg.com/pinia@2/dist/pinia.iife.js\`

3. **បង្កើត Store:**
   - នៅ \`stores/counter.js\`, បង្កើត \`useCounterStore\` ដែល:
     - State: \`count\` (0)
     - Getter: \`doubleCount\` (count * 2)
     - Action: \`increment\` (បង្កើន \`count\`)

4. **បង្កើត Vue App:**
   - នៅ \`index.html\`, បង្កើត \`<div id="app">\`។
   - នៅ \`main.js\`, Initialize Pinia និង Mount App។
   - នៅ \`App.vue\`, បង្ហាញ:
     - \`<p>Count: {{ counter.count }}</p>\`
     - \`<p>Double: {{ counter.doubleCount }}</p>\`
     - \`<button @click="counter.increment()">បង្កើន</button>\`

5. **បន្ថែម Styling:**
   - នៅ \`index.html\`, \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`p\`។
     - \`padding: 5px;\` សម្រាប់ \`button\`។

6. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - ចុច Button ដើម្បីបង្ផើន \`count\` និង \`doubleCount\`។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Pinia State Management</title>
  <style>
    p {
      font-family: Arial, sans-serif;
    }
    button {
      padding: 5px;
    }
  </style>
</head>
<body>
  <div id="app"></div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://unpkg.com/pinia@2/dist/pinia.iife.js"></script>
  <script>
    const { createPinia, defineStore } = Pinia;

    const useCounterStore = defineStore('counter', {
      state: () => ({
        count: 0
      }),
      getters: {
        doubleCount: (state) => state.count * 2
      },
      actions: {
        increment() {
          this.count++;
        }
      }
    });

    const App = {
      template: \`
        <div>
          <p>Count: {{ counter.count }}</p>
          <p>Double: {{ counter.doubleCount }}</p>
          <button @click="counter.increment()">បង្ផើន</button>
        </div>
      \`,
      setup() {
        const counter = useCounterStore();
        return { counter };
      }
    };

    const app = Vue.createApp(App);
    app.use(createPinia());
    app.mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson4_2Content;