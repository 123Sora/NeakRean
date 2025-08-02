import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson1_3Content: LessonContent = {
  title: 'ការចាប់ផ្តើមជាមួយ Vue.js (The Basics)',
  objectives: [
    'រៀនរបៀបភ្ជាប់ Vue.js ទៅក្នុង HTML ដោយប្រើ CDN',
    'បង្ផើត Vue App Instance ដំបូង',
    'យល់ពី Declarative Rendering និង Data Properties',
    'បន្ថែម Methods សម្រាប់ Handling Events',
  ],
  content: `
# ការចាប់ផ្តើមជាមួយ Vue.js (The Basics) 🚀

---

នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីមូលដ្ឋានគ្រឹះនៃ Vue.js ដែលជួយអ្នកចាប់ផ្តើមបង្ផើត Application ដំបូង។

---

## 1. របៀបភ្ជាប់ Vue.js ទៅក្នុង HTML

Vue.js អាចប្រើបានតាមរយៈ **CDN** ដោយមិនចាំបាច់ដំឡើង។

**ឧទាហរណ៍:**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My Vue App</title>
</head>
<body>
  <div id="app">
    {{ message }}
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    Vue.createApp({
      data() {
        return {
          message: 'សួស្តី Vue.js!'
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** បង្ហាញ "សួស្តី Vue.js!" នៅលើទំព័រ។

---

## 2. បង្ផើត Vue App Instance

**Vue App Instance** គឺជា Object ដែលគ្រប់គ្រង Vue Application។ នៅ Vue 3 យើងប្រើ \`createApp\`។

\`\`\`javascript
const app = Vue.createApp({
  data() {
    return {
      message: 'សួស្តី!'
    }
  }
});
app.mount('#app');
\`\`\`

- **\`data()\`:** Return Object ដែលផ្ទុក Data Properties។
- **\`mount()\`:** ភ្ជាប់ Vue App ទៅ DOM Element (ឧ. \`#app\`)។

---

## 3. Declarative Rendering

**Declarative Rendering** អនុញ្ញាតឱ្យ Vue.js បង្ហាញ Data ទៅ UI ដោយស្វ័យប្រវត្តិ។

\`\`\`html
<div id="app">
  <p>{{ message }}</p>
</div>
<script>
Vue.createApp({
  data() {
    return {
      message: 'នេះជា Declarative Rendering!'
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<p>នេះជា Declarative Rendering!</p>\`

---

## 4. Data Properties

**Data Properties** គឺជា Variables ដែល Vue.js Track និង Update UI នៅពេល Data ផ្លាស់ប្តូរ។

\`\`\`javascript
Vue.createApp({
  data() {
    return {
      name: 'សុខ',
      age: 25
    }
  }
}).mount('#app');
\`\`\`

**ក្នុង Template:**
\`\`\`html
<div id="app">
  <p>ឈ្មោះ: {{ name }}</p>
  <p>អាយុ: {{ age }}</p>
</div>
\`\`\`

---

## 5. Methods

**Methods** គឺជា Functions ដែលប្រើសម្រាប់ Handle Events ឬ Perform Logic។

\`\`\`html
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="changeMessage">ផ្លាស់ប្តូរសារ</button>
</div>
<script>
Vue.createApp({
  data() {
    return {
      message: 'សួស្តី!'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'សួស្តីឡើងវិញ!';
    }
  }
}).mount('#app');
</script>
\`\`\`

- **\`v-on:click\`:** Bind Click Event ទៅ Method \`changeMessage\`។
- **\`this\`:** សំដៅទៅ Vue Instance ដើម្បីចូលប្រើ \`message\`។

---

## 6. គន្លឹះសម្រាប់ Vue.js Basics

- **ប្រើ CDN សម្រាប់ Prototyping:** លឿន និងងាយស្រួល។
- **យល់ពី Data Reactivity:** Vue.js Auto-update UI នៅពេល Data ផ្លាស់ប្តូរ។
- **ប្រើ \`v-on\` សម្រាប់ Events:** ដូចជា Click, Input។
- **អាន Documentation:** [vuejs.org](https://vuejs.org)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Declarative Rendering</h3>
<p>បង្ហាញ Data ដោយប្រើ <code>{{ }}</code>។</p>
<pre><code class="language-html">
<div id="app">
  <p>សារ: {{ message }}</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
Vue.createApp({
  data() {
    return {
      message: 'នេះជា Vue.js!'
    }
  }
}).mount('#app');
</script>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Methods និង Events</h3>
<p>ប្រើ <code>v-on</code> ដើម្បី Handle Button Click�।</p>
<pre><code class="language-html">
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="changeMessage">ផ្លាស់ប្តូរ</button>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
Vue.createApp({
  data() {
    return {
      message: 'សួស្តី!'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'សួស្តីឡើងវិញ!';
    }
  }
}).mount('#app');
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើរបៀបណាដែលងាយស្រួលបំផុតដើម្បីភ្ជាប់ Vue.js ទៅ HTML?',
      options: [
        'ប្រើ Node.js',
        'ប្រើ CDN',
        'ប្រើ Vue CLI',
        'ប្រើ Vite'
      ],
      correct: 1,
      explanation: 'CDN ជារបៀបងាយស្រួលបំផុតសម្រាប់ភ្ជាប់ Vue.js។'
    },
    {
      question: 'តើ Function ណាមួយប្រើដើម្បីបង្ផើត Vue App នៅ Vue 3?',
      options: [
        'new Vue()',
        'Vue.createApp()',
        'Vue.mount()',
        'Vue.data()'
      ],
      correct: 1,
      explanation: '`Vue.createApp()` ប្រើនៅ Vue 3។'
    },
    {
      question: 'តើ Declarative Rendering មានន័យដូចម្តេច?',
      options: [
        'Manually Update DOM',
        'Auto-update UI ដោយ Vue.js',
        'Create Components',
        'Handle Events'
      ],
      correct: 1,
      explanation: 'Declarative Rendering Auto-update UI ដោយ Vue.js។'
    },
    {
      question: 'តើ `data()` នៅក្នុង Vue App Return អ្វី?',
      options: [
        'Function',
        'Object',
        'Array',
        'String'
      ],
      correct: 1,
      explanation: '`data()` Return Object ដែលផ្ទុក Data Properties។'
    },
    {
      question: 'តើ `mount()` Method មានតួនាទីអ្វី?',
      options: [
        'Create Vue App',
        'Bind Vue App ទៅ DOM',
        'Handle Events',
        'Define Data'
      ],
      correct: 1,
      explanation: '`mount()` Bind Vue App ទៅ DOM Element។'
    },
    {
      question: 'តើ Directive ណាមួយប្រើសម្រាប់ Handle Click Events?',
      options: [
        'v-bind',
        'v-on',
        'v-model',
        'v-if'
      ],
      correct: 1,
      explanation: '`v-on` ប្រើសម្រាប់ Handle Events។'
    },
    {
      question: 'តើ `this` នៅក្នុង Vue Methods សំដៅទៅអ្វី?',
      options: [
        'Global Object',
        'Vue Instance',
        'DOM Element',
        'Event Object'
      ],
      correct: 1,
      explanation: '`this` សំដៅទៅ Vue Instance។'
    },
    {
      question: 'តើ Data Properties នៅក្នុង Vue.js មានលក្ខណៈអ្វី?',
      options: [
        'Static',
        'Reactive',
        'Immutable',
        'Async'
      ],
      correct: 1,
      explanation: 'Data Properties នៅ Vue.js ជា Reactive។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Vue.js ដោយមិន Mount ទៅ DOM បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ CDN',
        'បាន ប៉ុន្តែត្រូវប្រើ Vite'
      ],
      correct: 1,
      explanation: 'Vue.js តម្រូវឱ្យ Mount ទៅ DOM។'
    },
    {
      question: 'តើ Syntax ណាមួយប្រើសម្រាប់ Text Interpolation?',
      options: [
        'v-bind',
        '{{ }}',
        'v-on',
        'v-model'
      ],
      correct: 1,
      explanation: '`{{ }}` ប្រើសម្រាប់ Text Interpolation។'
    },
    {
      question: 'តើ Methods នៅក្នុង Vue.js ប្រើសម្រាប់អ្វី?',
      options: [
        'Define Data',
        'Handle Events',
        'Create Components',
        'Style Elements'
      ],
      correct: 1,
      explanation: 'Methods ប្រើសម្រាប់ Handle Events និង Perform Logic។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Arrow Functions នៅក្នុង Vue Methods បានទេ?',
      options: [
        'បាន',
        'មិនបាន ព្រោះ `this` មិនដំណើរការ',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-model`'
      ],
      correct: 1,
      explanation: 'Arrow Functions មិនគួរប្រើនៅក្នុង Vue Methods ព្រោះ `this` មិនសំដៅទៅ Vue Instance។'
    },
  ],
  lab: {
    task: `
បង្ផើត Vue.js Application ដំបូងដោយប្រើ CDN និងបន្ថែម Event Handling។

**តម្រូវការ:**

1. **បង្ផើត HTML File:**
   - បង្ផើត File: \`index.html\`។
   - បន្ថែម Vue.js CDN: \`https://unpkg.com/vue@3/dist/vue.global.js\`។

2. **បង្ផើត Vue App:**
   - បង្ផើត \`<div id="app">\` ដែលបង្ហាញ:
     - \`<h1>{{ title }}</h1>\`
     - \`<p>{{ message }}</p>\`
     - \`<button v-on:click="changeMessage">ផ្លាស់ប្តូរសារ</button>\`

3. **បន្ថែម Data និង Methods:**
   - កំណត់ Data Properties:
     - \`title\`: \`'សួស្តី Vue.js!'\`
     - \`message\`: \`'នេះជា Application ដំបូង!'\`
   - បន្ថែម Method \`changeMessage\` ដែលផ្លាស់ប្តូរ \`message\` ទៅ \`'សារត្រូវបានផ្លាស់ប្តូរ!'\`។

4. **បន្ថែម Styling:**
   - បន្ថែម \`<style>\` Tag ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`h1\`។
     - \`color: blue;\` សម្រាប់ \`p\`។
     - \`padding: 10px; background: lightgray;\` សម្រាប់ \`button\`។

5. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - ចុច Button ដើម្បីផ្លាស់ប្តូរសារ។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>My Vue App</title>
  <style>
    h1 {
      font-family: Arial, sans-serif;
    }
    p {
      color: blue;
    }
    button {
      padding: 10px;
      background: lightgray;
    }
  </style>
</head>
<body>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button v-on:click="changeMessage">ផ្លាស់ប្តូរសារ</button>
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    Vue.createApp({
      data() {
        return {
          title: 'សួស្តី Vue.js!',
          message: 'នេះជា Application ដំបូង!'
        }
      },
      methods: {
        changeMessage() {
          this.message = 'សារត្រូវបានផ្លាស់ប្តូរ!';
        }
      }
    }).mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson1_3Content;