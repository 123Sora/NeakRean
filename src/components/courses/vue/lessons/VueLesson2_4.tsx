import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson2_4Content: LessonContent = {
  title: 'Event Handling',
  objectives: [
    'យល់ដឹងពីរបៀប Handle Events នៅក្នុង Vue.js ដោយប្រើ `v-on`',
    'ប្រើ Event Modifiers ដើម្បី Simplify Event Handling',
    'គ្រប់គ្រង Form Inputs ជាមួយ `v-model`',
    'អនុវត្ត Event Handling នៅក្នុង Application',
  ],
  content: `
# Event Handling 🎯

---

**Event Handling** នៅក្នុង Vue.js អនុញ្ញាតឱ្យអ្នក Respond ទៅ Events ដូចជា Clicks, Keypresses, និង Form Inputs។

---

## 1. Basic Event Handling

**\`v-on\`** Directive ប្រើសម្រាប់ Bind Events ទៅ Methods។

\`\`\`html
<div id="app">
  <button v-on:click="increment">ចុចខ្ញុំ</button>
  <p>ចំនួនចុច: {{ count }}</p>
</div>
<script>
Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** នៅពេលចុច Button, \`count\` កើនឡើង។

**Shorthand:** \`@click\` ជំនួស \`v-on:click\`។

---

## 2. Event Modifiers

Vue.js ផ្តល់ **Event Modifiers** ដើម្បី Simplify Event Handling។

- **\`.stop\`:** បញ្ឈប់ Event Propagation។
- **\`.prevent\`:** បញ្ឈប់ Default Behavior។
- **\`.once\`:** Run Event Handler តែម្តង។
- **\`.self\`:** Trigger តែនៅលើ Element ខ្លួនឯង។

\`\`\`html
<div id="app">
  <button @click.stop="doSomething">ចុចខ្ញុំ</button>
</div>
<script>
Vue.createApp({
  methods: {
    doSomething() {
      alert('Clicked!');
    }
  }
}).mount('#app');
</script>
\`\`\`

---

## 3. Key Modifiers

**Key Modifiers** ប្រើសម្រាប់ Handle Keyboard Events។

\`\`\`html
<div id="app">
  <input @keyup.enter="submit">
</div>
<script>
Vue.createApp({
  methods: {
    submit() {
      alert('Enter Key Pressed!');
    }
  }
}).mount('#app');
</script>
\`\`\`

**Common Modifiers:** \`.enter\`, \`.tab\`, \`.delete\`, \`.esc\`។

---

## 4. Form Input Binding with \`v-model\`

**\`v-model\`** ប្រើសម្រាប់ Two-way Data Binding ជាមួយ Form Inputs។

\`\`\`html
<div id="app">
  <input v-model="message">
  <p>សារ: {{ message }}</p>
</div>
<script>
Vue.createApp({
  data() {
    return {
      message: ''
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** Input Value Sync ជាមួយ \`message\`។

---

## 5. គន្លឹះសម្រាប់ Event Handling

- **ប្រើ \`@\` Shorthand:** ធ្វើឱ្យ Code ស្អាត។
- **ប្រើ Modifiers សម្រាប់ Common Cases:** ដូចជា \`.prevent\`, \`.stop\`។
- **ប្រើ \`v-model\` សម្រាប់ Forms:** Simplify Two-way Binding។
- **អាន Documentation:** [vuejs.org/guide/essentials/event-handling](https://vuejs.org/guide/essentials/event-handling)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Basic Event Handling</h3>
<p>ប្រើ <code>@click</code> ដើម្បី Handle Button Click។</p>
<pre><code class="language-html">
<div id="app">
  <button @click="increment">ចុចខ្ញុំ</button>
  <p>ចំនួន: {{ count }}</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}).mount('#app');
</script>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Form Input Binding</h3>
<p>ប្រើ <code>v-model</code> សម្រាប់ Two-way Binding។</p>
<pre><code class="language-html">
<div id="app">
  <input v-model="message">
  <p>សារ: {{ message }}</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
Vue.createApp({
  data() {
    return {
      message: ''
    }
  }
}).mount('#app');
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Directive ណាមួយប្រើសម្រាប់ Event Handling?',
      options: [
        'v-bind',
        'v-on',
        'v-if',
        'v-for'
      ],
      correct: 1,
      explanation: '`v-on` ប្រើសម្រាប់ Event Handling។'
    },
    {
      question: 'តើ Shorthand សម្រាប់ `v-on:click` គឺជាអ្វី?',
      options: [
        ':click',
        '@click',
        '#click',
        '$click'
      ],
      correct: 1,
      explanation: '`@click` ជា Shorthand សម្រាប់ `v-on:click`។'
    },
    {
      question: 'តើ Event Modifier `.stop` ធ្វើអ្វី?',
      options: [
        'Prevent Default Behavior',
        'Stop Event Propagation',
        'Run Once',
        'Trigger on Self'
      ],
      correct: 1,
      explanation: '`.stop` បញ្ឈប់ Event Propagation។'
    },
    {
      question: 'តើ `v-model` ប្រើសម្រាប់អ្វី?',
      options: [
        'Class Binding',
        'Two-way Data Binding',
        'List Rendering',
        'Conditional Rendering'
      ],
      correct: 1,
      explanation: '`v-model` ប្រើសម្រាប់ Two-way Data Binding។'
    },
    {
      question: 'តើ Key Modifier `.enter` ប្រើសម្រាប់អ្វី?',
      options: [
        'Handle Click Events',
        'Handle Enter Key',
        'Handle Form Submission',
        'Handle Mouse Events'
      ],
      correct: 1,
      explanation: '`.enter` Handle Enter Key Events�।'
    },
    {
      question: 'តើ Event Modifier `.prevent` ធ្វើអ្វី?',
      options: [
        'Stop Event Propagation',
        'Prevent Default Behavior',
        'Run Once',
        'Trigger on Self'
      ],
      correct: 1,
      explanation: '`.prevent` Prevent Default Behavior។'
    },
    {
      question: 'តើ `v-model` អាចប្រើជាមួយ `<select>` Element បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: '`v-model` អាចប្រើជាមួយ `<select>` Element។'
    },
    {
      question: 'តើ Event Modifier `.once` ធ្វើអ្វី?',
      options: [
        'Stop Event Propagation',
        'Prevent Default Behavior',
        'Run Handler Once',
        'Trigger on Self'
      ],
      correct: 2,
      explanation: '`.once` Run Handler Once។'
    },
    {
      question: 'តើ `v-on` អាច Handle Multiple Events បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-if`'
      ],
      correct: 0,
      explanation: '`v-on` អាច Handle Multiple Events។'
    },
    {
      question: 'តើ `v-model` បង្កើត Two-way Binding ដោយរបៀបណា?',
      options: [
        'Bind Value និង Update on Input',
        'Bind Class និង Style',
        'Render List',
        'Handle Events'
      ],
      correct: 0,
      explanation: '`v-model` Bind Value និង Update on Input។'
    },
    {
      question: 'តើ Event Modifier `.self` ធ្វើអ្វី?',
      options: [
        'Stop Event Propagation',
        'Prevent Default Behavior',
        'Run Once',
        'Trigger on Self'
      ],
      correct: 3,
      explanation: '`.self` Trigger Event តែនៅលើ Element ខ្លួនឯង។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `v-model` ជាមួយ Checkbox បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: '`v-model` អាចប្រើជាមួយ Checkbox។'
    },
  ],
  lab: {
    task: `
បង្ផើត Vue.js Application ដែលប្រើ Event Handling និង \`v-model\`។

**តម្រូវការ:**

1. **បង្ផើត HTML File:**
   - បង្ផើត File: \`index.html\`។
   - បន្ថែម Vue.js CDN: \`https://unpkg.com/vue@3/dist/vue.global.js\`។

2. **បង្ផើត Vue App:**
   - បង្ផើត \`<div id="app">\` ដែលបង្ហាញ:
     - \`<input v-model="message">\`
     - \`<button @click="clearMessage">លុបសារ</button>\`
     - \`<p>សារ: {{ message }}</p>\`
     - \`<button @click.prevent="submit">ដាក់ស្នើ</button>\`

3. **បន្ថែម Data និង Methods:**
   - Data Properties:
     - \`message\`: \`''\`
   - Methods:
     - \`clearMessage\`: Set \`message\` ទៅ \`''\`។
     - \`submit\`: Alert \`'សារត្រូវបានដាក់ស្នើ!'\`។

4. **បន្ថែម Styling:**
   - \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`p\`។
     - \`padding: 5px;\` សម្រាប់ \`input, button\`។

5. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - វាយសារ ចុច "លុបសារ" និង "ដាក់ស្នើ" ដើម្បីពិនិត្យ។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Vue Event Handling</title>
  <style>
    p {
      font-family: Arial, sans-serif;
    }
    input, button {
      padding: 5px;
    }
  </style>
</head>
<body>
  <div id="app">
    <input v-model="message">
    <button @click="clearMessage">លុបសារ</button>
    <p>សារ: {{ message }}</p>
    <button @click.prevent="submit">ដាក់ស្នើ</button>
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    Vue.createApp({
      data() {
        return {
          message: ''
        }
      },
      methods: {
        clearMessage() {
          this.message = '';
        },
        submit() {
          alert('សារត្រូវបានដាក់ស្នើ!');
        }
      }
    }).mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson2_4Content;