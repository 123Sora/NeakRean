import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson6_1Content: LessonContent = {
  title: 'Project អនុវត្តន៍ពេញលេញ',
  objectives: [
    'បង្កើត Vue.js Application ពេញលេញជាមួយ Vue Router និង Pinia',
    'ធ្វើការជាមួយ API ដើម្បីទាញទិន្នន័យ',
    'អនុវត្ត Component-based Architecture',
    'បន្ថែម Transitions សម្រាប់ UX ប្រសើរឡើង',
  ],
  content: `
# Project អនុវត្តន៍ពេញលេញ 🏗️

---

នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត **Todo List Application** ដែលប្រើ Vue 3, Vue Router, Pinia, និង API Integration។

---

## 1. Project Overview

**Todo List App** មាន Features ដូចជា:
- **Navigation:** ទំព័រដើម (Home) និងទំព័រអំពី (About)។
- **State Management:** Pinia សម្រាប់គ្រប់គ្រង Todos។
- **API Integration:** ទាញ Todos ពី \`https://jsonplaceholder.typicode.com/todos\`។
- **Transitions:** Fade Effect សម្រាប់ Todo List។

---

## 2. Project Setup

**បង្កើត Project ជាមួយ Vite:**
\`\`\`bash
npm create vite@latest todo-app -- --template vue
cd todo-app
npm install vue-router@4 pinia axios
npm run dev
\`\`\`

---

## 3. កំណត់ Vue Router

\`\`\`javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
\`\`\`

---

## 4. កំណត់ Pinia Store

\`\`\`javascript
// src/stores/todo.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    loading: false
  }),
  actions: {
    async fetchTodos() {
      this.loading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.todos = response.data.slice(0, 5);
        this.loading = false;
      } catch (error) {
        console.error('Error:', error);
        this.loading = false;
      }
    },
    addTodo(title) {
      this.todos.push({ id: this.todos.length + 1, title, completed: false });
    }
  }
});
\`\`\`

---

## 5. បង្កើត Components

\`\`\`vue
<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add Todo">
    <p v-if="store.loading">កំពុងផ្ទុក...</p>
    <transition-group name="fade" tag="ul">
      <li v-for="todo in store.todos" :key="todo.id">{{ todo.title }}</li>
    </transition-group>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todo';

export default {
  setup() {
    const store = useTodoStore();
    const newTodo = ref('');

    store.fetchTodos();

    function addTodo() {
      if (newTodo.value) {
        store.addTodo(newTodo.value);
        newTodo.value = '';
      }
    }

    return { store, newTodo, addTodo };
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
h1, ul { font-family: Arial, sans-serif; }
li { margin: 10px; }
</style>
\`\`\`

---

## 6. គន្លឹះសម្រាប់ Project

- **Modularize Code:** បែងចែក Components, Router, និង Store។
- **Use Transitions:** ដើម្បីបង្កើន UX។
- **Handle Errors:** សម្រាប់ API Calls។
- **Test Regularly:** ប្រើ \`npm run dev\` និង Browser Console។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Vue Router Setup</h3>
<p>កំណត់ Routes សម្រាប់ Home និង About</p>
<pre><code class="language-javascript">
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Pinia Store</h3>
<p>បង្កើត Store សម្រាប់ Todos�।</p>
<pre><code class="language-javascript">
// src/stores/todo.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    loading: false
  }),
  actions: {
    async fetchTodos() {
      this.loading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.todos = response.data.slice(0, 5);
        this.loading = false;
      } catch (error) {
        console.error('Error:', error);
        this.loading = false;
      }
    }
  }
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Vue Router ប្រើសម្រាប់អ្វីនៅក្នុង Project នេះ?',
      options: [
        'Manage State',
        'Handle Navigation',
        'Fetch Data',
        'Apply Animations'
      ],
      correct: 1,
      explanation: 'Vue Router Handle Navigation រវាង Pages។'
    },
    {
      question: 'តើ Pinia នៅក្នុង Project នេះគ្រប់គ្រងអ្វី?',
      options: [
        'Routes',
        'Todos State',
        'API Calls',
        'Transitions'
      ],
      correct: 1,
      explanation: 'Pinia គ្រប់គ្រង Todos State។'
    },
    {
      question: 'តើ `axios` ប្រើសម្រាប់អ្វី?',
      options: [
        'Define Routes',
        'Fetch Data from API',
        'Manage State',
        'Apply Transitions'
      ],
      correct: 1,
      explanation: '`axios` Fetch Data from API។'
    },
    {
      question: 'តើ `<transition-group>` នៅក្នុង Project នេះធ្វើអ្វី?',
      options: [
        'Manage State',
        'Animate List Items',
        'Handle Navigation',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`<transition-group>` Animate List Items។'
    },
    {
      question: 'តើ Command ណាមួយបង្កើត Vite Project?',
      options: [
        'npm install vue',
        'npm create vite@latest',
        'vue create project',
        'npm run dev'
      ],
      correct: 1,
      explanation: '`npm create vite@latest` បង្កើត Vite Project។'
    },
    {
      question: 'តើ `fetchTodos` Action នៅក្នុង Pinia Store ធ្វើអ្វី?',
      options: [
        'Add Todo',
        'Fetch Todos from API',
        'Delete Todo',
        'Toggle Todo'
      ],
      correct: 1,
      explanation: '`fetchTodos` Fetch Todos from API។'
    },
    {
      question: 'តើ `<router-link>` ប្រើសម្រាប់អ្វី?',
      options: [
        'Render Components',
        'Navigate Without Reload',
        'Manage State',
        'Apply Transitions'
      ],
      correct: 1,
      explanation: '`<router-link>` Navigate Without Reload។'
    },
    {
      question: 'តើ Loading State នៅក្នុង Project នេះបង្ហាញនៅពេលណា?',
      options: [
        'Before API Call',
        'During API Call',
        'After API Call',
        'On Error'
      ],
      correct: 1,
      explanation: 'Loading State បង្ហាញ During API Call។'
    },
    {
      question: 'តើ `v-model` នៅក្នុង Input ធ្វើអ្វី?',
      options: [
        'Bind Data Two-way',
        'Fetch Data',
        'Apply Animation',
        'Define Route'
      ],
      correct: 0,
      explanation: '`v-model` Bind Data Two-way។'
    },
    {
      question: 'តើ Transition Name នៅក្នុង Project គឺជាអ្វី?',
      options: [
        'slide',
        'fade',
        'bounce',
        'list'
      ],
      correct: 1,
      explanation: 'Transition Name គឺ `fade`។'
    },
    {
      question: 'តើ Project នេះប្រើ Build Tool អ្វី?',
      options: [
        'Webpack',
        'Vite',
        'Parcel',
        'Rollup'
      ],
      correct: 1,
      explanation: 'Project ប្រើ Vite។'
    },
    {
      question: 'តើ `useTodoStore` Return អ្វី?',
      options: [
        'Component',
        'Store Instance',
        'Router',
        'Directive'
      ],
      correct: 1,
      explanation: '`useTodoStore` Return Store Instance។'
    },
    {
      question: 'តើ Project នេះអាច Run ដោយគ្មាន Internet បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែ Slow',
        'បាន ប៉ុន្តែ No API'
      ],
      correct: 1,
      explanation: 'Project ត្រូវការ Internet សម្រាប់ API Calls។'
    },
  ],
  lab: {
    task: `
បង្កើត Vue.js Todo List Application។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Vite:
     \`\`\`bash
     npm create vite@latest todo-app -- --template vue
     cd todo-app
     npm install vue-router@4 pinia axios
     \`\`\`

2. **កំណត់ Router:**
   - បង្កើត \`src/router/index.js\` ជាមួយ Routes:
     - \`/\` → \`Home.vue\`
     - \`/about\` → \`About.vue\`

3. **កំណត់ Pinia Store:**
   - បង្កើត \`src/stores/todo.js\` ដែល:
     - State: \`todos\` (Array), \`loading\` (Boolean)
     - Action: \`fetchTodos\` (Fetch 5 Todos ពី \`https://jsonplaceholder.typicode.com/todos\`)
     - Action: \`addTodo\` (បន្ថែម Todo)

4. **បង្កើត Components:**
   - \`src/views/Home.vue\`:
     - \`<input>\` សម្រាប់ Add Todo។
     - \`<transition-group>\` សម្រាប់ Animate Todos។
     - \`<router-link>\` ទៅ \`/about\`។
   - \`src/views/About.vue\`: \`<h1>About Page</h1>\`

5. **បន្ថែម Styling:**
   - នៅ \`Home.vue\`:
     - Fade Transition: \`opacity\` ពី 0 ទៅ 1។
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`h1, ul\`។
     - \`margin: 10px;\` សម្រាប់ \`li\`។

6. **Run Application:**
   - ប្រើ \`npm run dev\` និងបើក \`http://localhost:5173\`។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
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
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add Todo">
    <p v-if="store.loading">កំពុងផ្ទុក...</p>
    <transition-group name="fade" tag="ul">
      <li v-for="todo in store.todos" :key="todo.id">{{ todo.title }}</li>
    </transition-group>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todo';

export default {
  setup() {
    const store = useTodoStore();
    const newTodo = ref('');

    store.fetchTodos();

    function addTodo() {
      if (newTodo.value) {
        store.addTodo(newTodo.value);
        newTodo.value = '';
      }
    }

    return { store, newTodo, addTodo };
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
h1, ul { font-family: Arial, sans-serif; }
li { margin: 10px; }
</style>

<!-- src/views/About.vue -->
<template>
  <div>
    <h1>About Page</h1>
  </div>
</template>
<style>
h1 { font-family: Arial, sans-serif; }
</style>
\`\`\`

## src/stores/todo.js 
\`\`\`text
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    loading: false
  }),
  actions: {
    async fetchTodos() {
      this.loading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.todos = response.data.slice(0, 5);
        this.loading = false;
      } catch (error) {
        console.error('Error:', error);
        this.loading = false;
      }
    },
    addTodo(title) {
      this.todos.push({ id: this.todos.length + 1, title, completed: false });
    }
  }
});
\`\`\`

## src/router/index.js 
\`\`\`text
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
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
  <title>Vue Todo App</title>
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

export default VueLesson6_1Content;