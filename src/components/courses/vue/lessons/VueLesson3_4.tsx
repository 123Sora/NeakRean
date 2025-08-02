import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson3_4Content: LessonContent = {
  title: 'Dynamic Components និង Async Components',
  objectives: [
    'យល់ដឹងពី Dynamic Components និងការប្រើប្រាស់ `<component>`',
    'ស្វែងយល់ពី Async Components និង Lazy Loading',
    'ប្រើ `is` Attribute សម្រាប់ Dynamic Component Switching',
    'អនុវត្ត Dynamic និង Async Components នៅក្នុង Application',
  ],
  content: `
# Dynamic Components និង Async Components 🔄

---

**Dynamic Components** និង **Async Components** អនុញ្ញាតឱ្យ Vue.js Applications មានភាពបត់បែន និង Optimize Performance។

---

## 1. Dynamic Components

**Dynamic Components** ប្រើ \`<component>\` Tag ជាមួយ \`:is\` Attribute ដើម្បី Switch Components ដោយ Dynamic។

\`\`\`html
<div id="app">
  <button @click="currentComponent = 'component-a'">Component A</button>
  <button @click="currentComponent = 'component-b'">Component B</button>
  <component :is="currentComponent"></component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({
  data() {
    return {
      currentComponent: 'component-a'
    }
  }
});
app.component('component-a', {
  template: '<p>Component A</p>'
});
app.component('component-b', {
  template: '<p>Component B</p>'
});
app.mount('#app');
</script>
\`\`\`

**លទ្ធផល:** ប្តូរ Component នៅពេលចុច Button។

---

## 2. Keep-alive

**\`<keep-alive>\`** Cache Dynamic Components ដើម្បីរក្សា State។

\`\`\`html
<div id="app">
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
</div>
\`\`\`

**ចំណាំ:** \`<keep-alive>\` រក្សា Component State នៅពេល Switch។

---

## 3. Async Components

**Async Components** អនុញ្ញាតឱ្យ Load Components Lazily ដើម្បី Optimize Performance។

\`\`\`javascript
app.component('async-component', Vue.defineAsyncComponent(() =>
  import('./AsyncComponent.vue')
));
\`\`\`

**ឧទាហរណ៍:**
\`\`\`html
<div id="app">
  <async-component></async-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({});
app.component('async-component', Vue.defineAsyncComponent(() =>
  Promise.resolve({
    template: '<p>Async Component Loaded!</p>'
  })
));
app.mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<p>Async Component Loaded!</p>\`

---

## 4. គន្លឹះសម្រាប់ Dynamic និង Async Components

- **ប្រើ Dynamic Components សម្រាប់ UI Switching:** ដូចជា Tabs។
- **ប្រើ \`<keep-alive>\` សម្រាប់ State Preservation:** ដើម្បីរក្សា Form Inputs។
- **ប្រើ Async Components សម្រាប់ Large Applications:** ដើម្បី Reduce Initial Load Time។
- **អាន Documentation:** [vuejs.org/guide/components/dynamic-async](https://vuejs.org/guide/components/dynamic-async)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Dynamic Component</h3>
<p>Switch Components ដោយប្រើ <code>:is</code>។</p>
<pre><code class="language-html">
<div id="app">
  <button @click="currentComponent = 'component-a'">Component A</button>
  <button @click="currentComponent = 'component-b'">Component B</button>
  <component :is="currentComponent"></component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({
  data() {
    return {
      currentComponent: 'component-a'
    }
  }
});
app.component('component-a', {
  template: '<p>Component A</p>'
});
app.component('component-b', {
  template: '<p>Component B</p>'
});
app.mount('#app');
</script>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Async Component</h3>
<p>Load Component Lazily។</p>
<pre><code class="language-html">
<div id="app">
  <async-component></async-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({});
app.component('async-component', Vue.defineAsyncComponent(() =>
  Promise.resolve({
    template: '<p>Async Component Loaded!</p>'
  })
));
app.mount('#app');
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `<component>` Tag ប្រើសម្រាប់អ្វី?',
      options: [
        'Render Static HTML',
        'Dynamic Component Switching',
        'Event Handling',
        'List Rendering'
      ],
      correct: 1,
      explanation: '`<component>` ប្រើសម្រាប់ Dynamic Component Switching។'
    },
    {
      question: 'តើ Attribute ណាមួយប្រើជាមួយ `<component>`?',
      options: [
        'v-bind',
        ':is',
        'v-on',
        'v-for'
      ],
      correct: 1,
      explanation: '`:is` ប្រើជាមួយ `<component>`។'
    },
    {
      question: 'តើ `<keep-alive>` មានតួនាទីអ្វី?',
      options: [
        'Load Components Lazily',
        'Cache Component State',
        'Handle Events',
        'Bind Styles'
      ],
      correct: 1,
      explanation: '`<keep-alive>` Cache Component State។'
    },
    {
      question: 'តើ Async Components ប្រើសម្រាប់អ្វី?',
      options: [
        'Dynamic Switching',
        'Lazy Loading',
        'Event Handling',
        'Conditional Rendering'
      ],
      correct: 1,
      explanation: 'Async Components ប្រើសម្រាប់ Lazy Loading។'
    },
    {
      question: 'តើ Method ណាមួយប្រើដើម្បី Define Async Component?',
      options: [
        'Vue.createApp',
        'Vue.defineAsyncComponent',
        'app.component',
        'app.mount'
      ],
      correct: 1,
      explanation: '`Vue.defineAsyncComponent` ប្រើសម្រាប់ Define Async Component។'
    },
    {
      question: 'តើ `<keep-alive>` អាចប្រើជាមួយ Static Components បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 1,
      explanation: '`<keep-alive>` ប្រើតែជាមួយ Dynamic Components។'
    },
    {
      question: 'តើ Async Components ជួយ Optimize អ្វី?',
      options: [
        'Rendering Speed',
        'Initial Load Time',
        'Event Handling',
        'Data Binding'
      ],
      correct: 1,
      explanation: 'Async Components Optimize Initial Load Time។'
    },
    {
      question: 'តើ `:is` Attribute ទទួល Values ប្រភេទណា?',
      options: [
        'String (Component Name)',
        'Number',
        'Object',
        'Array'
      ],
      correct: 0,
      explanation: '`:is` ទទួល String (Component Name)។'
    },
    {
      question: 'តើ Dynamic Components សមស្របសម្រាប់អ្វី?',
      options: [
        'Static HTML',
        'UI Switching (Tabs)',
        'Form Handling',
        'List Rendering'
      ],
      correct: 1,
      explanation: 'Dynamic Components សមស្របសម្រាប់ UI Switching។'
    },
    {
      question: 'តើ Async Components តម្រូវឱ្យ Return អ្វី?',
      options: [
        'Object',
        'Promise',
        'Array',
        'String'
      ],
      correct: 1,
      explanation: 'Async Components តម្រូវឱ្យ Return Promise។'
    },
    {
      question: 'តើ `<keep-alive>` រក្សាអ្វី?',
      options: [
        'Component State',
        'DOM Elements',
        'Event Handlers',
        'Styles'
      ],
      correct: 0,
      explanation: '`<keep-alive>` រក្សា Component State។'
    },
  ],
  lab: {
    task: `
បង្ផើត Vue.js Application ដែលប្រើ Dynamic Components។

**តម្រូវការ:**

1. **បង្ផើត HTML File:**
   - បង្ផើត File: \`index.html\`។
   - បន្ថែម Vue.js CDN: \`https://unpkg.com/vue@3/dist/vue.global.js\`។

2. **បង្ផើត Vue App:**
   - បង្ផើត \`<div id="app">\` ដែលបង្ហាញ:
     - \`<button @click="currentComponent = 'component-a'">Component A</button>\`
     - \`<button @click="currentComponent = 'component-b'">Component B</button>\`
     - \`<keep-alive><component :is="currentComponent"></component></keep-alive>\`

3. **បង្ផើត Components:**
   - \`component-a\`: Template \`<p>Component A: {{ count }}</p><button @click="count++">បង្កើន</button>\`
   - \`component-b\`: Template \`<p>Component B</p>\`
   - Data (សម្រាប់ \`component-a\`): \`count\` (0)

4. **បន្ថែម Styling:**
   - \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`p\`។
     - \`padding: 5px;\` សម្រាប់ \`button\`។

5. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - ប្តូរ Components និងពិនិត្យថាតើ \`count\` នៅ \`component-a\` ត្រូវបាន Cache ដោយ \`<keep-alive>\`។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Vue Dynamic Components</title>
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
  <div id="app">
    <button @click="currentComponent = 'component-a'">Component A</button>
    <button @click="currentComponent = 'component-b'">Component B</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    const app = Vue.createApp({
      data() {
        return {
          currentComponent: 'component-a'
        }
      }
    });
    app.component('component-a', {
      template: '<p>Component A: {{ count }}</p><button @click="count++">បង្កើន</button>',
      data() {
        return { count: 0 };
      }
    });
    app.component('component-b', {
      template: '<p>Component B</p>'
    });
    app.mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson3_4Content;