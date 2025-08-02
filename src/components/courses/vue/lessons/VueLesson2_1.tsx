import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson2_1Content: LessonContent = {
  title: 'Template Syntax និង Directives',
  objectives: [
    'យល់ដឹងពី Vue.js Template Syntax និងការប្រើប្រាស់ Interpolation',
    'ស្វែងយល់ពី Directives ដូចជា v-bind, v-if, v-for',
    'ប្រើ Directives ដើម្បីគ្រប់គ្រង DOM និង Rendering',
    'អនុវត្ត Attribute Binding និង Conditional Rendering',
  ],
  content: `
# Template Syntax និង Directives 🛠️

---

**Template Syntax** នៅក្នុង Vue.js គឺជាវិធីសាស្ត្រដែលអនុញ្ញាតឱ្យអ្នកភ្ជាប់ Data ទៅ DOM ដោយប្រើ HTML-based Syntax។ **Directives** គឺជា Special Attributes ដែលបន្ថែម Functionality ទៅ DOM Elements។

---

## 1. Template Syntax

Vue.js ប្រើ **Mustache Syntax** (\`{{ }}\`) សម្រាប់ **Text Interpolation**។

**ឧទាហរណ៍:**
\`\`\`html
<div id="app">
  <p>{{ message }}</p>
</div>
<script>
Vue.createApp({
  data() {
    return {
      message: 'សួស្តី Vue.js!'
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<p>សួស្តី Vue.js!</p>\`

---

## 2. Directives

**Directives** គឺជា Attributes ដែលចាប់ផ្តើមដោយ \`v-\` (ឧ. \`v-bind\`, \`v-if\`, \`v-for\`)។ ពួកវាបន្ថែម Dynamic Behavior ទៅ DOM។

### 2.1 v-bind

**\`v-bind\`** ភ្ជាប់ Data ទៅ HTML Attributes។

\`\`\`html
<div id="app">
  <img v-bind:src="imageUrl" alt="Vue Logo">
</div>
<script>
Vue.createApp({
  data() {
    return {
      imageUrl: 'https://vuejs.org/images/logo.png'
    }
  }
}).mount('#app');
</script>
\`\`\`

**Shorthand:** \`:src\` ជំនួស \`v-bind:src\`។

---

### 2.2 v-if, v-else, v-else-if

**\`v-if\`** ប្រើសម្រាប់ Conditional Rendering។

\`\`\`html
<div id="app">
  <p v-if="isLoggedIn">សូមស្វាគមន៍!</p>
  <p v-else>សូម Login!</p>
</div>
<script>
Vue.createApp({
  data() {
    return {
      isLoggedIn: true
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<p>សូមស្វាគមន៍!</p>\` (បើ \`isLoggedIn\` ជា \`true\`)។

---

### 2.3 v-for

**\`v-for\`** ប្រើសម្រាប់ Render Lists។

\`\`\`html
<div id="app">
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>
</div>
<script>
Vue.createApp({
  data() {
    return {
      items: [
        { id: 1, name: 'ផ្លែប៉ោម' },
        { id: 2, name: 'ផ្លែចេក' },
        { id: 3, name: 'ផ្លែស្ត្របឺរី' }
      ]
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:**
\`\`\`
<ul>
  <li>ផ្លែប៉ោម</li>
  <li>ផ្លែចេក</li>
  <li>ផ្លែស្ត្របឺរី</li>
</ul>
\`\`\`

**ចំណាំ:** \`:key\` តម្រូវសម្រាប់ Vue ដើម្បី Track Elements នៅក្នុង List។

---

## 3. Attribute Binding

**\`v-bind\`** អាច Bind ទៅ Attributes ផ្សេងៗដូចជា \`class\`, \`style\`, \`id\`។

\`\`\`html
<div id="app">
  <div v-bind:class="{ active: isActive }">ប្រអប់សកម្ម</div>
</div>
<script>
Vue.createApp({
  data() {
    return {
      isActive: true
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<div class="active">ប្រអប់សកម្ម</div>\`

---

## 4. គន្លឹះសម្រាប់ Template Syntax និង Directives

- **ប្រើ Shorthand:** \`:attribute\` សម្រាប់ \`v-bind\`, \`@event\` សម្រាប់ \`v-on\`។
- **ប្រើ \`:key\` នៅក្នុង \`v-for\`:** ដើម្បី Optimize Rendering។
- **ប្រើ \`v-if\` និង \`v-show\` ដោយប្រុងប្រយ័ត្ន:** \`v-if\` Remove Element ពី DOM, ចំណែក \`v-show\` Hide Element ដោយ CSS។
- **អាន Documentation:** [vuejs.org/guide/essentials/template-syntax](https://vuejs.org/guide/essentials/template-syntax)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ v-bind និង v-if</h3>
<p>ប្រើ <code>v-bind</code> និង <code>v-if</code> ដើម្បីបង្ហាញ Dynamic Content។</p>
<pre><code class="language-html">
<div id="app">
  <img :src="imageUrl" alt="Vue Logo">
  <p v-if="showMessage">សារ Dynamic!</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
Vue.createApp({
  data() {
    return {
      imageUrl: 'https://vuejs.org/images/logo.png',
      showMessage: true
    }
  }
}).mount('#app');
</script>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ v-for ជាមួយ List</h3>
<p>ប្រើ <code>v-for</code> ដើម្បី Render List។</p>
<pre><code class="language-html">
<div id="app">
  <ul>
    <li v-for="fruit in fruits" :key="fruit.id">{{ fruit.name }}</li>
  </ul>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
Vue.createApp({
  data() {
    return {
      fruits: [
        { id: 1, name: 'ផ្លែប៉ោម' },
        { id: 2, name: 'ផ្លែចេក' }
      ]
    }
  }
}).mount('#app');
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Mustache Syntax (`{{ }}`) ប្រើសម្រាប់អ្វី?',
      options: [
        'Attribute Binding',
        'Text Interpolation',
        'Event Handling',
        'List Rendering'
      ],
      correct: 1,
      explanation: 'Mustache Syntax ប្រើសម្រាប់ Text Interpolation។'
    },
    {
      question: 'តើ Directive ណាមួយប្រើសម្រាប់ Attribute Binding?',
      options: [
        'v-if',
        'v-bind',
        'v-for',
        'v-on'
      ],
      correct: 1,
      explanation: '`v-bind` ប្រើសម្រាប់ Attribute Binding។'
    },
    {
      question: 'តើ Shorthand សម្រាប់ `v-bind` គឺជាអ្វី?',
      options: [
        '@',
        ':',
        '#',
        '$'
      ],
      correct: 1,
      explanation: '`:` ជា Shorthand សម្រាប់ `v-bind`។'
    },
    {
      question: 'តើ `v-if` ធ្វើអ្វី?',
      options: [
        'Hide Element ដោយ CSS',
        'Remove Element ពី DOM',
        'Bind Attributes',
        'Render List'
      ],
      correct: 1,
      explanation: '`v-if` Remove Element ពី DOM។'
    },
    {
      question: 'តើ `:key` នៅក្នុង `v-for` មានតួនាទីអ្វី?',
      options: [
        'Bind Attributes',
        'Track Elements ក្នុង List',
        'Handle Events',
        'Conditional Rendering'
      ],
      correct: 1,
      explanation: '`:key` Track Elements ក្នុង List ដើម្បី Optimize Rendering។'
    },
    {
      question: 'តើ Directive ណាមួយប្រើសម្រាប់ List Rendering?',
      options: [
        'v-bind',
        'v-if',
        'v-for',
        'v-on'
      ],
      correct: 2,
      explanation: '`v-for` ប្រើសម្រាប់ List Rendering។'
    },
    {
      question: 'តើ `v-show` ខុសពី `v-if` ដោយរបៀបណា?',
      options: [
        'Remove Element ពី DOM',
        'Hide Element ដោយ CSS',
        'Bind Attributes',
        'Render List'
      ],
      correct: 1,
      explanation: '`v-show` Hide Element ដោយ CSS, ចំណែក `v-if` Remove Element ពី DOM�।'
    },
    {
      question: 'តើអ្នកអាចប្រើ `v-bind` ដើម្បី Bind Class បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-if`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: '`v-bind` អាចប្រើដើម្បី Bind Class។'
    },
    {
      question: 'តើ Directive ណាមួយប្រើសម្រាប់ Conditional Rendering?',
      options: [
        'v-bind',
        'v-if',
        'v-for',
        'v-on'
      ],
      correct: 1,
      explanation: '`v-if` ប្រើសម្រាប់ Conditional Rendering។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `v-for` ដើម្បី Loop លើ Object បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-if`'
      ],
      correct: 0,
      explanation: '`v-for` អាច Loop លើ Object បាន។'
    },
    {
      question: 'តើ Template Syntax នៅក្នុង Vue.js ផ្អែកលើអ្វី?',
      options: [
        'CSS',
        'HTML',
        'JavaScript',
        'TypeScript'
      ],
      correct: 1,
      explanation: 'Template Syntax ផ្អែកលើ HTML។'
    },
    {
      question: 'តើ `v-else` តម្រូវឱ្យមាន `v-if` នៅខាងមុខទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`'
      ],
      correct: 0,
      explanation: '`v-else` តម្រូវឱ្យមាន `v-if` នៅខាងមុខ។'
    },
  ],
  lab: {
    task: `
បង្ផើត Vue.js Application ដែលប្រើ Template Syntax និង Directives។

**តម្រូវការ:**

1. **បង្ផើត HTML File:**
   - បង្ផើត File: \`index.html\`។
   - បន្ថែម Vue.js CDN: \`https://unpkg.com/vue@3/dist/vue.global.js\`។

2. **បង្ផើត Vue App:**
   - បង្ផើត \`<div id="app">\` ដែលបង្ហាញ:
     - \`<h1>{{ title }}</h1>\`
     - \`<img :src="imageUrl" alt="Vue Logo">\`
     - \`<p v-if="isVisible">សារនេះអាចមើលឃើញ!</p>\`
     - \`<ul><li v-for="item in items" :key="item.id">{{ item.name }}</li></ul>\`

3. **បន្ថែម Data:**
   - កំណត់ Data Properties:
     - \`title\`: \`'Vue.js Template Syntax'\`
     - \`imageUrl\`: \`'https://vuejs.org/images/logo.png'\`
     - \`isVisible\`: \`true\`
     - \`items\`: Array ដែលមាន Objects ដូចជា \`{ id: 1, name: 'ផ្លែប៉ោម' }\`, \`{ id: 2, name: 'ផ្លែចេក' }\`

4. **បន្ថែម Styling:**
   - បន្ថែម \`<style>\` Tag ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`h1\`។
     - \`width: 100px;\` សម្រាប់ \`img\`។

5. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - ពិនិត្យថាតើ List និង Conditional Rendering ដំណើរការត្រឹមត្រូវ។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Vue Template Syntax</title>
  <style>
    h1 {
      font-family: Arial, sans-serif;
    }
    img {
      width: 100px;
    }
  </style>
</head>
<body>
  <div id="app">
    <h1>{{ title }}</h1>
    <img :src="imageUrl" alt="Vue Logo">
    <p v-if="isVisible">សារនេះអាចមើលឃើញ!</p>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    Vue.createApp({
      data() {
        return {
          title: 'Vue.js Template Syntax',
          imageUrl: 'https://vuejs.org/images/logo.png',
          isVisible: true,
          items: [
            { id: 1, name: 'ផ្លែប៉ោម' },
            { id: 2, name: 'ផ្លែចេក' }
          ]
        }
      }
    }).mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson2_1Content;