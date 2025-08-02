import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson5_2Content: LessonContent = {
  title: 'Custom Directives និង Plugins',
  objectives: [
    'យល់ដឹងពី Custom Directives នៅក្នុង Vue.js',
    'បង្កើត Custom Directives សម្រាប់ DOM Manipulation',
    'ស្វែងយល់ពី Vue Plugins និងរបៀបបង្កើត',
    'អនុវត្ត Custom Directive និង Plugin នៅក្នុង Application',
  ],
  content: `
# Custom Directives និង Plugins 🛠️

---

**Custom Directives** និង **Plugins** ជួយពង្រីក Vue.js Functionality។

---

## 1. Custom Directives

**Custom Directives** អនុញ្ញាតឱ្យ Manipulate DOM ដោយ Custom Logic។

\`\`\`javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});

app.mount('#app');
\`\`\`

\`\`\`vue
<!-- App.vue -->
<template>
  <div>
    <input v-focus placeholder="Auto Focus Input">
  </div>
</template>
\`\`\`

---

## 2. Plugins

**Plugins** បន្ថែម Global Functionality ដូចជា Components, Directives, ឬ Methods។

\`\`\`javascript
// plugins/myPlugin.js
export default {
  install(app) {
    app.config.globalProperties.$sayHello = () => {
      alert('សួស្តីពី Plugin!');
    };
  }
};
\`\`\`

\`\`\`javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import myPlugin from './plugins/myPlugin';

const app = createApp(App);
app.use(myPlugin);
app.mount('#app');
\`\`\`

\`\`\`vue
<!-- App.vue -->
<template>
  <div>
    <button @click="$sayHello()">Say Hello</button>
  </div>
</template>
\`\`\`

---

## 3. Advanced Custom Directive

**Custom Directives** អាច Handle Arguments និង Modifiers។

\`\`\`javascript
// main.js
app.directive('color', {
  mounted(el, binding) {
    el.style.color = binding.value;
  }
});
\`\`\`

\`\`\`vue
<template>
  <div>
    <p v-color="'red'">Red Text</p>
  </div>
</template>
\`\`\`

---

## 4. គន្លឹះសម្រាប់ Custom Directives និង Plugins

- **ប្រើ Custom Directives សម្រាប់ DOM Manipulation:** ដូចជា Focus ឬ Styling។
- **ប្រើ Plugins សម្រាប់ Global Features:** ដូចជា Methods ឬ Components។
- **Keep Directives Simple:** ដើម្បី Maintainability។
- **អាន Documentation:** [vuejs.org/guide/reusability/custom-directives](https://vuejs.org/guide/reusability/custom-directives)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Custom Directive</h3>
<p>បង្កើត Directive ដើម្បី Auto Focus Input។</p>
<pre><code class="language-javascript">
// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});
app.mount('#app');
</code></pre>
<pre><code class="language-vue">
<!-- App.vue -->
<template>
  <div>
    <input v-focus placeholder="Auto Focus Input">
  </div>
</template>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Plugin</h3>
<p>បង្កើត Plugin ដើម្បីបន្ថែម Global Method។</p>
<pre><code class="language-javascript">
// plugins/myPlugin.js
export default {
  install(app) {
    app.config.globalProperties.$sayHello = () => {
      alert('សួស្តីពី Plugin!');
    };
  }
};
</code></pre>
<pre><code class="language-vue">
<!-- App.vue -->
<template>
  <div>
    <button @click="$sayHello()">Say Hello</button>
  </div>
</template>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Custom Directive ប្រើសម្រាប់អ្វី?',
      options: [
        'Manage State',
        'DOM Manipulation',
        'Route Navigation',
        'API Calls'
      ],
      correct: 1,
      explanation: 'Custom Directive ប្រើសម្រាប់ DOM Manipulation។'
    },
    {
      question: 'តើ Plugin នៅក្នុង Vue.js ធ្វើអ្វី?',
      options: [
        'Define Routes',
        'Add Global Functionality',
        'Fetch Data',
        'Render Components'
      ],
      correct: 1,
      explanation: 'Plugin Add Global Functionality។'
    },
    {
      question: 'តើ Directive Hook ណាមួយ Run ពេល Element Mounts?',
      options: [
        'created',
        'mounted',
        'updated',
        'beforeMount'
      ],
      correct: 1,
      explanation: '`mounted` Run ពេល Element Mounts។'
    },
    {
      question: 'តើ `app.directive` ប្រើសម្រាប់អ្វី?',
      options: [
        'Register Plugin',
        'Register Custom Directive',
        'Register Component',
        'Register Store'
      ],
      correct: 1,
      explanation: '`app.directive` Register Custom Directive។'
    },
    {
      question: 'តើ Plugin ត្រូវការ Method អ្វី?',
      options: [
        'install',
        'mount',
        'setup',
        'run'
      ],
      correct: 0,
      explanation: 'Plugin ត្រូវការ `install` Method។'
    },
    {
      question: 'តើ `binding.value` នៅក្នុង Custom Directive គឺជាអ្វី?',
      options: [
        'Element ID',
        'Directive Argument',
        'Directive Value',
        'Component Prop'
      ],
      correct: 2,
      explanation: '`binding.value` គឺជា Directive Value។'
    },
    {
      question: 'តើ Custom Directives អាចប្រើ Modifiers បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវ Configure',
        'បាន ប៉ុន្តែ Slow'
      ],
      correct: 0,
      explanation: 'Custom Directives អាចប្រើ Modifiers។'
    },
    {
      question: 'តើ `app.use` ប្រើសម្រាប់អ្វី?',
      options: [
        'Register Directive',
        'Register Plugin',
        'Register Component',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`app.use` Register Plugin។'
    },
    {
      question: 'តើ Custom Directive គួរមាន Complexity ប៉ុណ្ណា?',
      options: [
        'Complex',
        'Simple',
        'Depends on Project',
        'No Limit'
      ],
      correct: 1,
      explanation: 'Custom Directive គួរមាន Simple Logic។'
    },
    {
      question: 'តើ Plugin អាចបន្ថែមអ្វីបានខ្លះ?',
      options: [
        'Global Methods',
        'Routes',
        'State',
        'Templates'
      ],
      correct: 0,
      explanation: 'Plugin អាចបន្ថែម Global Methods។'
    },
    {
      question: 'តើ `v-focus` នៅក្នុងឧទាហរណ៍ធ្វើអ្វី?',
      options: [
        'Change Color',
        'Auto Focus Input',
        'Hide Element',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`v-focus` Auto Focus Input។'
    },
    {
      question: 'តើ `app.config.globalProperties` ប្រើសម្រាប់អ្វី?',
      options: [
        'Define Routes',
        'Add Global Methods/Properties',
        'Manage State',
        'Render Components'
      ],
      correct: 1,
      explanation: '`app.config.globalProperties` Add Global Methods/Properties។'
    },
    {
      question: 'តើ Custom Directive អាច Access Component Data បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវ Configure',
        'បាន ប៉ុន្តែ Slow'
      ],
      correct: 1,
      explanation: 'Custom Directive មិនអាច Access Component Data ដោយផ្ទាល់។'
    },
  ],
  lab: {
    task: `
បង្កើត Vue.js Application ដែលប្រើ Custom Directive និង Plugin។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Vite:
     \`\`\`bash
     npm create vite@latest directive-plugin-app -- --template vue
     cd directive-plugin-app
     npm install
     \`\`\`

2. **បង្កើត Custom Directive:**
   - នៅ \`main.js\`, បង្កើត Directive \`v-highlight\` ដែលផ្លាស់ប្តូរ \`background-color\` ទៅ \`'yellow'\`។

3. **បង្កើត Plugin:**
   - បង្កើត \`plugins/myPlugin.js\` ដែលបន្ថែម Global Method \`$alertMessage\` ដើម្បី Display Alert។

4. **បង្កើត Component:**
   - នៅ \`src/App.vue\`, បង្ហាញ:
     - \`<h1 v-highlight>Highlighted Title</h1>\`
     - \`<button @click="$alertMessage('សួស្តី!')">Show Alert</button>\`

5. **បន្ថែម Styling:**
   - \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`h1\`។
     - \`padding: 5px;\` សម្រាប់ \`button\`។

6. **Run Application:**
   - ប្រើ \`npm run dev\` និងបើក \`http://localhost:5173\`។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
## src/App.vue 
\`\`\`text
<template>
  <div>
    <h1 v-highlight>Highlighted Title</h1>
    <button @click="$alertMessage('សួស្តី!')">Show Alert</button>
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
button {
  padding: 5px;
}
</style>
\`\`\`

## plugins/myPlugin.js 
\`\`\`text
export default {
  install(app) {
    app.config.globalProperties.$alertMessage = (msg) => {
      alert(msg);
    };
  }
};
\`\`\`

## main.js 
\`\`\`text
import { createApp } from 'vue';
import App from './App.vue';
import myPlugin from './plugins/myPlugin';

const app = createApp(App);

app.directive('highlight', {
  mounted(el) {
    el.style.backgroundColor = 'yellow';
  }
});

app.use(myPlugin);
app.mount('#app');
\`\`\`

## index.html 
\`\`\`text
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Vue Directive and Plugin</title>
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

export default VueLesson5_2Content;