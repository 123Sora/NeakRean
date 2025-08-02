import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson5_1Content: LessonContent = {
  title: 'ការធ្វើការជាមួយ APIs',
  objectives: [
    'យល់ដឹងពីរបៀបធ្វើការជាមួយ APIs នៅក្នុង Vue.js',
    'ប្រើ `fetch` និង `axios` សម្រាប់ HTTP Requests',
    'គ្រប់គ្រង Asynchronous Data ជាមួយ Composition API',
    'អនុវត្ត Error Handling និង Loading States',
  ],
  content: `
# ការធ្វើការជាមួយ APIs 🌐

---

**APIs** អនុញ្ញាតឱ្យ Vue.js Applications ទាញទិន្នន័យពី External Services។ យើងនឹងប្រើ **fetch** ឬ **axios** សម្រាប់ HTTP Requests។

---

## 1. ប្រើ \`fetch\` API

**\`fetch\`** គឺជា Built-in JavaScript API សម្រាប់ HTTP Requests។

\`\`\`vue
<!-- ApiDemo.vue -->
<template>
  <div>
    <h1>Users</h1>
    <p v-if="loading">កំពុងផ្ទុក...</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  setup() {
    const users = Vue.ref([]);
    const loading = Vue.ref(true);

    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        users.value = await response.json();
        loading.value = false;
      } catch (error) {
        console.error('Error:', error);
      }
    }

    Vue.onMounted(fetchUsers);
    return { users, loading };
  }
}
</script>
\`\`\`

---

## 2. ប្រើ \`axios\`

**\`axios\`** គឺជា Popular HTTP Client ដែលមាន Features ច្រើនជាង \`fetch\`។

**ការដំឡើង \`axios\`:**
\`\`\`bash
npm install axios
\`\`\`

\`\`\`vue
<!-- ApiDemo.vue -->
<template>
  <div>
    <h1>Posts</h1>
    <p v-if="loading">កំពុងផ្ទុក...</p>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  setup() {
    const posts = Vue.ref([]);
    const loading = Vue.ref(true);

    async function fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.value = response.data;
        loading.value = false;
      } catch (error) {
        console.error('Error:', error);
      }
    }

    Vue.onMounted(fetchPosts);
    return { posts, loading };
  }
}
</script>
\`\`\`

---

## 3. Error Handling និង Loading States

**Error Handling** និង **Loading States** ធ្វើឱ្យ UX ប្រសើរឡើង។

\`\`\`vue
<template>
  <div>
    <h1>Users</h1>
    <p v-if="loading">កំពុងផ្ទុក...</p>
    <p v-else-if="error">{{ error }}</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  setup() {
    const users = Vue.ref([]);
    const loading = Vue.ref(true);
    const error = Vue.ref(null);

    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network Error');
        users.value = await response.json();
        loading.value = false;
      } catch (err) {
        error.value = err.message;
        loading.value = false;
      }
    }

    Vue.onMounted(fetchUsers);
    return { users, loading, error };
  }
}
</script>
\`\`\`

---

## 4. គន្លឹះសម្រាប់ APIs

- **ប្រើ \`axios\` សម្រាប់ Complex Requests:** ដូចជា Interceptors ឬ Cancelable Requests។
- **ប្រើ Loading States:** ដើម្បីបង្ហាញ Feedback ដល់ User។
- **គ្រប់គ្រង Errors:** ដើម្បី Prevent App Crashes។
- **អាន Documentation:** [axios-http.com](https://axios-http.com)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Fetch API</h3>
<p>ទាញ Users ពី JSONPlaceholder API។</p>
<pre><code class="language-vue">
<template>
  <div>
    <h1>Users</h1>
    <p v-if="loading">កំពុងផ្ទុក...</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  setup() {
    const users = Vue.ref([]);
    const loading = Vue.ref(true);

    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        users.value = await response.json();
        loading.value = false;
      } catch (error) {
        console.error('Error:', error);
      }
    }

    Vue.onMounted(fetchUsers);
    return { users, loading };
  }
}
</script>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Axios</h3>
<p>ទាញ Posts ជាមួយ \`axios\`។</p>
<pre><code class="language-vue">
<template>
  <div>
    <h1>Posts</h1>
    <p v-if="loading">កំពុងផ្ទុក...</p>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  setup() {
    const posts = Vue.ref([]);
    const loading = Vue.ref(true);

    async function fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.value = response.data;
        loading.value = false;
      } catch (error) {
        console.error('Error:', error);
      }
    }

    Vue.onMounted(fetchPosts);
    return { posts, loading };
  }
}
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `fetch` API គឺជាអ្វី?',
      options: [
        'State Management Library',
        'Built-in JavaScript HTTP Client',
        'Vue Router',
        'Build Tool'
      ],
      correct: 1,
      explanation: '`fetch` គឺជា Built-in JavaScript HTTP Client។'
    },
    {
      question: 'តើ Command ណាមួយដំឡើង `axios`?',
      options: [
        'npm install vue',
        'npm install axios',
        'npm install fetch',
        'npm install pinia'
      ],
      correct: 1,
      explanation: '`npm install axios` ដំឡើង `axios`។'
    },
    {
      question: 'តើ `Vue.ref` ប្រើសម្រាប់អ្វី?',
      options: [
        'Define Components',
        'Create Reactive Variables',
        'Handle Events',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`Vue.ref` Create Reactive Variables។'
    },
    {
      question: 'តើ `onMounted` នៅក្នុង Composition API ធ្វើអ្វី?',
      options: [
        'Run After Component Mounts',
        'Run Before Component Mounts',
        'Handle HTTP Requests',
        'Define Store'
      ],
      correct: 0,
      explanation: '`onMounted` Run After Component Mounts។'
    },
    {
      question: 'តើ `axios` មានអត្ថប្រយោជន៍អ្វីលើ `fetch`?',
      options: [
        'Built-in to JavaScript',
        'Interceptors and Cancelable Requests',
        'Faster Performance',
        'No Dependencies'
      ],
      correct: 1,
      explanation: '`axios` មាន Interceptors និង Cancelable Requests។'
    },
    {
      question: 'តើ Loading State ប្រើសម្រាប់អ្វី?',
      options: [
        'Handle Errors',
        'Show Feedback During API Calls',
        'Render Components',
        'Manage Routes'
      ],
      correct: 1,
      explanation: 'Loading State Show Feedback During API Calls។'
    },
    {
      question: 'តើ `try/catch` ប្រើសម្រាប់អ្វី?',
      options: [
        'Render Lists',
        'Handle Errors in Async Code',
        'Define Routes',
        'Bind Styles'
      ],
      correct: 1,
      explanation: '`try/catch` Handle Errors in Async Code។'
    },
    {
      question: 'តើ Response Data នៅក្នុង `axios` Access ដោយរបៀបណា?',
      options: [
        'response.json()',
        'response.data',
        'response.body',
        'response.text'
      ],
      correct: 1,
      explanation: '`response.data` Access Response Data នៅក្នុង `axios`។'
    },
    {
      question: 'តើ `fetch` Response ត្រូវការ Method អ្វីដើម្បី Parse JSON?',
      options: [
        'response.json()',
        'response.data',
        'response.parse()',
        'response.text()'
      ],
      correct: 0,
      explanation: '`response.json()` Parse JSON នៅក្នុង `fetch`។'
    },
    {
      question: 'តើ `Vue.onMounted` ត្រូវការនៅក្នុង API Calls ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែ Optional',
        'បាន ប៉ុន្តែត្រូវប្រើ `axios`'
      ],
      correct: 2,
      explanation: '`Vue.onMounted` ជា Optional ប៉ុន្តែជួយ Run API Calls ពេល Component Mounts។'
    },
    {
      question: 'តើ Error Handling មានសារៈសំខាន់ដើម្បីអ្វី?',
      options: [
        'Prevent App Crashes',
        'Render Components',
        'Manage State',
        'Define Routes'
      ],
      correct: 0,
      explanation: 'Error Handling Prevent App Crashes។'
    },
    {
      question: 'តើ `axios.get` Return អ្វី?',
      options: [
        'Promise',
        'String',
        'Array',
        'Object'
      ],
      correct: 0,
      explanation: '`axios.get` Return Promise។'
    },
    {
      question: 'តើ Loading State គួរបង្ហាញនៅពេលណា?',
      options: [
        'Before API Call',
        'During API Call',
        'After API Call',
        'On Error'
      ],
      correct: 1,
      explanation: 'Loading State បង្ហាញ During API Call។'
    },
  ],
  lab: {
    task: `
បង្កើត Vue.js Application ដែលទាញទិន្នន័យពី API ជាមួយ \`axios\`។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Vite:
     \`\`\`bash
     npm create vite@latest api-app -- --template vue
     cd api-app
     npm install
     npm install axios
     \`\`\`

2. **បង្កើត Component:**
   - នៅ \`src/App.vue\`, បង្ហាញ:
     - \`<h1>Users</h1>\`
     - \`<p>កំពុងផ្ទុក...</p>\` ប្រសិនបើ \`loading\` ជា \`true\`
     - \`<ul>\` ដែល List User Names ពី \`https://jsonplaceholder.typicode.com/users\`

3. **បន្ថែម Logic:**
   - ប្រើ \`axios\` ដើម្បី Fetch Users នៅ \`onMounted\`។
   - ប្រើ \`ref\` សម្រាប់ \`users\` និង \`loading\`។

4. **បន្ថែម Styling:**
   - \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`h1, ul\`។
     - \`margin: 10px;\` សម្រាប់ \`li\`។

5. **Run Application:**
   - ប្រើ \`npm run dev\` និងបើក \`http://localhost:5173\`។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
## src/App.vue 
\`\`\`text
<template>
  <div>
    <h1>Users</h1>
    <p v-if="loading">កំពុងផ្ទុក...</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const users = ref([]);
    const loading = ref(true);

    async function fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        users.value = response.data;
        loading.value = false;
      } catch (error) {
        console.error('Error:', error);
      }
    }

    onMounted(fetchUsers);
    return { users, loading };
  }
}
</script>

<style>
h1, ul {
  font-family: Arial, sans-serif;
}
li {
  margin: 10px;
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
  <title>Vue API App</title>
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

export default VueLesson5_1Content;