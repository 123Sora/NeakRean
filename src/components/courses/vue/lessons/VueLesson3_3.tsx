import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson3_3Content: LessonContent = {
  title: 'Lifecycle Hooks',
  objectives: [
    'យល់ដឹងពី Vue Component Lifecycle និង Hooks',
    'ស្វែងយល់ពី Common Lifecycle Hooks ដូចជា created, mounted, updated',
    'ប្រើ Lifecycle Hooks ដើម្បីគ្រប់គ្រង Component Behavior',
    'អនុវត្ត Lifecycle Hooks នៅក្នុង Application',
  ],
  content: `
# Lifecycle Hooks ⏳

---

**Lifecycle Hooks** គឺជា Methods ដែល Vue.js ផ្តល់ឱ្យដើម្បី Hook ទៅក្នុង Stages ផ្សេងៗនៃ Component Lifecycle។

---

## 1. Vue Component Lifecycle

Component មាន Lifecycle Stages ដូចជា:
- **Creation:** នៅពេល Component ត្រូវបានបង្កើត។
- **Mounting:** នៅពេល Component ត្រូវបាន Render ទៅ DOM។
- **Updating:** នៅពេល Data ឬ State ផ្លាស់ប្តូរ។
- **Unmounting:** នៅពេល Component ត្រូវបានលុបចេញពី DOM។

---

## 2. Common Lifecycle Hooks

### 2.1 beforeCreate
Run មុនពេល Component ត្រូវបានបង្កើត។ Data និង Methods មិនទាន់ Available។

\`\`\`javascript
beforeCreate() {
  console.log('Component មិនទាន់បង្កើត!');
}
\`\`\`

### 2.2 created
Run បន្ទាប់ពី Component ត្រូវបានបង្កើត។ Data និង Methods Available។

\`\`\`javascript
created() {
  console.log('Component បានបង្កើត!');
}
\`\`\`

### 2.3 mounted
Run បន្ទាប់ពី Component ត្រូវបាន Mount ទៅ DOM។

\`\`\`javascript
mounted() {
  console.log('Component បាន Mount!');
}
\`\`\`

### 2.4 updated
Run បន្ទាប់ពី Component Re-render ដោយសារ Data Changes។

\`\`\`javascript
updated() {
  console.log('Component បាន Update!');
}
\`\`\`

### 2.5 unmounted
Run បន្ទាប់ពី Component ត្រូវបានលុបចេញពី DOM។

\`\`\`javascript
unmounted() {
  console.log('Component បាន Unmount!');
}
\`\`\`

---

## 3. ឧទាហរណ៍ Lifecycle Hooks

\`\`\`html
<div id="app">
  <counter-component></counter-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({});
app.component('counter-component', {
  template: '<button @click="count++">{{ count }}</button>',
  data() {
    return { count: 0 };
  },
  beforeCreate() {
    console.log('beforeCreate: Component មិនទាន់បង្ផើត');
  },
  created() {
    console.log('created: Component បានបង្ផើត');
  },
  mounted() {
    console.log('mounted: Component បាន Mount');
  },
  updated() {
    console.log('updated: Component បាន Update');
  },
  unmounted() {
    console.log('unmounted: Component បាន Unmount');
  }
});
app.mount('#app');
</script>
\`\`\`

**លទ្ធផល (Console):**
- \`beforeCreate: Component មិនទាន់បង្ផើត\`
- \`created: Component បានបង្ផើត\`
- \`mounted: Component បាន Mount\`
- (នៅពេលចុច Button) \`updated: Component បាន Update\`

---

## 4. គន្លឹះសម្រាប់ Lifecycle Hooks

- **ប្រើ \`created\` សម្រាប់ Initialization:** ដូចជា Fetch Data។
- **ប្រើ \`mounted\` សម្រាប់ DOM Manipulation:** ដូចជា Access DOM Elements។
- **ប្រើ \`unmounted\` សម្រាប់ Cleanup:** ដូចជា Clear Timers/Subscriptions។
- **អាន Documentation:** [vuejs.org/guide/essentials/lifecycle](https://vuejs.org/guide/essentials/lifecycle)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Lifecycle Hooks</h3>
<p>ប្រើ Lifecycle Hooks ដើម្បី Track Component Lifecycle�।</p>
<pre><code class="language-html">
<div id="app">
  <counter-component></counter-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({});
app.component('counter-component', {
  template: '<button @click="count++">{{ count }}</button>',
  data() {
    return { count: 0 };
  },
  created() {
    console.log('Component បានបង្ផើត!');
  },
  mounted() {
    console.log('Component បាន Mount!');
  }
});
app.mount('#app');
</script>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Cleanup នៅ unmounted</h3>
<p>ប្រើ \`unmounted\` ដើម្បី Cleanup Timer។</p>
<pre><code class="language-html">
<div id="app">
  <timer-component></timer-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({});
app.component('timer-component', {
  template: '<p>ពេលវេលា: {{ time }}</p>',
  data() {
    return { time: 0 };
  },
  mounted() {
    this.timer = setInterval(() => this.time++, 1000);
  },
  unmounted() {
    clearInterval(this.timer);
    console.log('Timer Cleared!');
  }
});
app.mount('#app');
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Lifecycle Hook ណាមួយ Run មុនពេល Component បង្ផើត?',
      options: [
        'created',
        'beforeCreate',
        'mounted',
        'updated'
      ],
      correct: 1,
      explanation: '`beforeCreate` Run មុនពេល Component បង្ផើត។'
    },
    {
      question: 'តើ Lifecycle Hook ណាមួយ Run បន្ទាប់ពី Component Mount ទៅ DOM?',
      options: [
        'created',
        'beforeCreate',
        'mounted',
        'updated'
      ],
      correct: 2,
      explanation: '`mounted` Run បន្ទាប់ពី Component Mount។'
    },
    {
      question: 'តើ Data អាច Access បាននៅ `beforeCreate` ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `this`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`'
      ],
      correct: 1,
      explanation: 'Data មិនទាន់ Available នៅ `beforeCreate`។'
    },
    {
      question: 'តើ Lifecycle Hook ណាមួយ Run នៅពេល Component Update?',
      options: [
        'created',
        'mounted',
        'updated',
        'unmounted'
      ],
      correct: 2,
      explanation: '`updated` Run នៅពេល Component Update។'
    },
    {
      question: 'តើ Lifecycle Hook ណាមួយសមស្របសម្រាប់ Cleanup?',
      options: [
        'created',
        'mounted',
        'updated',
        'unmounted'
      ],
      correct: 3,
      explanation: '`unmounted` សមស្របសម្រាប់ Cleanup។'
    },
    {
      question: 'តើ Lifecycle Hook ណាមួយសមស្របសម្រាប់ Fetch Data?',
      options: [
        'beforeCreate',
        'created',
        'updated',
        'unmounted'
      ],
      correct: 1,
      explanation: '`created` សមស្របសម្រាប់ Fetch Data។'
    },
    {
      question: 'តើ Lifecycle Hook ណាមួយ Run បន្ទាប់ពី Component បង្ផើត?',
      options: [
        'beforeCreate',
        'created',
        'mounted',
        'updated'
      ],
      correct: 1,
      explanation: '`created` Run បន្ទាប់ពី Component បង្ផើត។'
    },
    {
      question: 'តើ `mounted` Hook អាច Access DOM បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: '`mounted` អាច Access DOM។'
    },
    {
      question: 'តើ Lifecycle Hook ណាមួយ Run នៅពេល Component ត្រូវបានលុបចេញ?',
      options: [
        'created',
        'mounted',
        'updated',
        'unmounted'
      ],
      correct: 3,
      explanation: '`unmounted` Run នៅពេល Component ត្រូវបានលុបចេញ។'
    },
    {
      question: 'តើ Lifecycle Hooks អាចប្រើនៅក្នុង Root App បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: 'Lifecycle Hooks អាចប្រើនៅក្នុង Root App។'
    },
    {
      question: 'តើ Lifecycle Hook ណាមួយសមស្របសម្រាប់ DOM Manipulation?',
      options: [
        'beforeCreate',
        'created',
        'mounted',
        'updated'
      ],
      correct: 2,
      explanation: '`mounted` សមស្របសម្រាប់ DOM Manipulation។'
    },
  ],
  lab: {
    task: `
បង្ផើត Vue.js Application ដែលប្រើ Lifecycle Hooks។

**តម្រូវការ:**

1. **បង្ផើត HTML File:**
   - បង្ផើត File: \`index.html\`។
   - បន្ថែម Vue.js CDN: \`https://unpkg.com/vue@3/dist/vue.global.js\`។

2. **បង្ផើត Vue App:**
   - បង្ផើត \`<div id="app">\` ដែលបង្ហាញ:
     - \`<timer-component></timer-component>\`

3. **បង្ផើត Component:**
   - ចុះឈ្មោះ \`timer-component\` ដែល:
     - Template: \`<p>ពេលវេលា: {{ time }} វិនាទី</p>\`
     - Data: \`time\` (0)
     - Lifecycle Hooks:
       - \`mounted\`: Start Timer ដែលបង្កើន \`time\` រៀងរាល់ 1 វិនាទី។
       - \`unmounted\`: Clear Timer។

4. **បន្ថែម Styling:**
   - \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`p\`។

5. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - ពិនិត្យថាតើ Timer ដំណើរការ និង Console Log ពី Lifecycle Hooks។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Logs និង Errors។
    `,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Vue Lifecycle Hooks</title>
  <style>
    p {
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <div id="app">
    <timer-component></timer-component>
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    const app = Vue.createApp({});
    app.component('timer-component', {
      template: '<p>ពេលវេលា: {{ time }} វិនាទី</p>',
      data() {
        return { time: 0 };
      },
      mounted() {
        console.log('mounted: Timer Started!');
        this.timer = setInterval(() => this.time++, 1000);
      },
      unmounted() {
        console.log('unmounted: Timer Cleared!');
        clearInterval(this.timer);
      }
    });
    app.mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson3_3Content;