import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson2_3Content: LessonContent = {
  title: 'Class និង Style Bindings',
  objectives: [
    'យល់ដឹងពីរបៀប Bind Classes និង Styles ជាមួយ Vue.js',
    'ប្រើ `v-bind:class` សម្រាប់ Dynamic Class Binding',
    'ប្រើ `v-bind:style` សម្រាប់ Inline Style Binding',
    'អនុវត្ត Array Syntax និង Object Syntax សម្រាប់ Binding',
  ],
  content: `
# Class និង Style Bindings 🎨

---

Vue.js ផ្តល់នូវវិធីសាស្ត្រដ៏ងាយស្រួលសម្រាប់ **Dynamic Binding** នៃ CSS Classes និង Inline Styles ដោយប្រើ \`v-bind:class\` និង \`v-bind:style\`។

---

## 1. Class Binding

**\`v-bind:class\`** អនុញ្ញាតឱ្យអ្នក Bind Classes ដោយផ្អែកលើ Conditions។

### 1.1 Object Syntax

\`\`\`html
<div id="app">
  <div v-bind:class="{ active: isActive, 'text-danger': hasError }">
    ប្រអប់ Dynamic
  </div>
</div>
<script>
Vue.createApp({
  data() {
    return {
      isActive: true,
      hasError: false
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<div class="active">ប្រអប់ Dynamic</div>\`

---

### 1.2 Array Syntax

\`\`\`html
<div id="app">
  <div v-bind:class="[activeClass, errorClass]">
    ប្រអប់ Dynamic
  </div>
</div>
<script>
Vue.createApp({
  data() {
    return {
      activeClass: 'active',
      errorClass: ''
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<div class="active">ប្រអប់ Dynamic</div>\`

---

## 2. Style Binding

**\`v-bind:style\`** អនុញ្ញាតឱ្យ Bind Inline CSS Styles។

### 2.1 Object Syntax

\`\`\`html
<div id="app">
  <div v-bind:style="{ color: textColor, fontSize: fontSize + 'px' }">
    អត្ថបទ Dynamic
  </div>
</div>
<script>
Vue.createApp({
  data() {
    return {
      textColor: 'blue',
      fontSize: 16
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<div style="color: blue; font-size: 16px;">អត្ថបទ Dynamic</div>\`

---

### 2.2 Array Syntax

\`\`\`html
<div id="app">
  <div v-bind:style="[styleObj1, styleObj2]">
    អត្ថបទ Dynamic
  </div>
</div>
<script>
Vue.createApp({
  data() {
    return {
      styleObj1: { color: 'blue' },
      styleObj2: { fontSize: '16px' }
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<div style="color: blue; font-size: 16px;">អត្ថបទ Dynamic</div>\`

---

## 3. Combining Class and Style Bindings

\`\`\`html
<div id="app">
  <div v-bind:class="{ active: isActive }" v-bind:style="{ color: textColor }">
    ប្រអប់ Dynamic
  </div>
</div>
<script>
Vue.createApp({
  data() {
    return {
      isActive: true,
      textColor: 'green'
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<div class="active" style="color: green;">ប្រអប់ Dynamic</div>\`

---

## 4. គន្លឹះសម្រាប់ Class និង Style Bindings

- **ប្រើ Object Syntax សម្រាប់ Conditions:** ងាយស្រួលគ្រប់គ្រង Conditional Classes/Styles�।
- **ប្រើ Array Syntax សម្រាប់ Multiple Classes/Styles:** សមស្របនៅពេលបន្ថែម Classes/Styles ច្រើន។
- **ប្រើ Computed Properties:** សម្រាប់ Complex Class/Style Logic។
- **អាន Documentation:** [vuejs.org/guide/essentials/class-and-style](https://vuejs.org/guide/essentials/class-and-style)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Class Binding</h3>
<p>ប្រើ <code>v-bind:class</code> ដើម្បី Toggle Class។</p>
<pre><code class="language-html">
<div id="app">
  <div v-bind:class="{ active: isActive }">ប្រអប់សកម្ម</div>
  <button v-on:click="toggleActive">Toggle</button>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
Vue.createApp({
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  }
}).mount('#app');
</script>
<style>
.active {
  background: lightgreen;
  padding: 10px;
}
</style>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Style Binding</h3>
<p>ប្រើ <code>v-bind:style</code> ដើម្បី Dynamic Styles។</p>
<pre><code class="language-html">
<div id="app">
  <div v-bind:style="{ color: textColor, fontSize: fontSize + 'px' }">
    អត្ថបទ Dynamic
  </div>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
Vue.createApp({
  data() {
    return {
      textColor: 'blue',
      fontSize: 16
    }
  }
}).mount('#app');
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `v-bind:class` ប្រើសម្រាប់អ្វី?',
      options: [
        'Handle Events',
        'Dynamic Class Binding',
        'List Rendering',
        'Conditional Rendering'
      ],
      correct: 1,
      explanation: '`v-bind:class` ប្រើសម្រាប់ Dynamic Class Binding។'
    },
    {
      question: 'តើ `v-bind:style` ប្រើសម្រាប់អ្វី?',
      options: [
        'Bind Inline Styles',
        'Bind Classes',
        'Handle Events',
        'Render Lists'
      ],
      correct: 0,
      explanation: '`v-bind:style` ប្រើសម្រាប់ Bind Inline Styles។'
    },
    {
      question: 'តើ Object Syntax នៅក្នុង Class Binding មានលក្ខណៈអ្វី?',
      options: [
        'Array of Classes',
        'Key-Value Pairs',
        'List of Styles',
        'Event Handlers'
      ],
      correct: 1,
      explanation: 'Object Syntax ប្រើ Key-Value Pairs ដើម្បី Toggle Classes។'
    },
    {
      question: 'តើ Array Syntax នៅក្នុង Class Binding ប្រើសម្រាប់អ្វី?',
      options: [
        'Toggle Classes',
        'Apply Multiple Classes',
        'Apply Inline Styles',
        'Conditional Rendering'
      ],
      correct: 1,
      explanation: 'Array Syntax ប្រើសម្រាប់ Apply Multiple Classes។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Computed Properties ជាមួយ Class Binding បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-if`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: 'Computed Properties អាចប្រើជាមួយ Class Binding។'
    },
    {
      question: 'តើ Style Binding Object Syntax ទទួល Values ប្រភេទណា?',
      options: [
        'Array',
        'Object',
        'String',
        'Function'
      ],
      correct: 1,
      explanation: 'Style Binding Object Syntax ទទួល Object។'
    },
    {
      question: 'តើអ្នកអាច Combine `v-bind:class` និង `v-bind:style` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-if`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: '`v-bind:class` និង `v-bind:style` អាច Combine បាន។'
    },
    {
      question: 'តើ Shorthand សម្រាប់ `v-bind:class` គឺជាអ្វី?',
      options: [
        '@class',
        ':class',
        '#class',
        '$class'
      ],
      correct: 1,
      explanation: '`:class` ជា Shorthand សម្រាប់ `v-bind:class`។'
    },
    {
      question: 'តើ Style Binding អាចប្រើ Unit ដូចជា `px` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: 'Style Binding អាចប្រើ Unit ដូចជា `px`។'
    },
    {
      question: 'តើ Class Binding Array Syntax ទទួល Values ប្រភេទណា?',
      options: [
        'Object',
        'Array of Strings',
        'Function',
        'Number'
      ],
      correct: 1,
      explanation: 'Array Syntax ទទួល Array of Strings។'
    },
    {
      question: 'តើអ្នកគួរប្រើ Computed Properties សម្រាប់ Complex Class Logic ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-if`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: 'Computed Properties សមស្របសម្រាប់ Complex Class Logic។'
    },
    {
      question: 'តើ `v-bind:style` អាច Bind Multiple Styles បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-if`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: '`v-bind:style` អាច Bind Multiple Styles បាន។'
    },
  ],
  lab: {
    task: `
បង្កើត Vue.js Application ដែលប្រើ Class និង Style Bindings។

**តម្រូវការ:**

1. **បង្កើត HTML File:**
   - បង្កើត File: \`index.html\`។
   - បន្ថែម Vue.js CDN: \`https://unpkg.com/vue@3/dist/vue.global.js\`។

2. **បង្កើត Vue App:**
   - បង្កើត \`<div id="app">\` ដែលបង្ហាញ:
     - \`<div :class="{ active: isActive }" :style="divStyle">ប្រអប់ Dynamic</div>\`
     - \`<button @click="toggleActive">Toggle Active</button>\`

3. **បន្ថែម Data និង Methods:**
   - Data Properties:
     - \`isActive\`: \`true\`
     - \`divStyle\`: \`{ background: 'lightblue', padding: '10px' }\`
   - Method: \`toggleActive\` ដែល Toggle \`isActive\`។

4. **បន្ថែម Styling:**
   - \`<style>\` Tag:
     - \`.active { border: 2px solid green; }\`

5. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - ចុច Button ដើម្បី Toggle Class \`active\`។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Vue Class & Style Binding</title>
  <style>
    .active {
      border: 2px solid green;
    }
  </style>
</head>
<body>
  <div id="app">
    <div :class="{ active: isActive }" :style="divStyle">ប្រអប់ Dynamic</div>
    <button @click="toggleActive">Toggle Active</button>
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    Vue.createApp({
      data() {
        return {
          isActive: true,
          divStyle: { background: 'lightblue', padding: '10px' }
        }
      },
      methods: {
        toggleActive() {
          this.isActive = !this.isActive;
        }
      }
    }).mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson2_3Content;