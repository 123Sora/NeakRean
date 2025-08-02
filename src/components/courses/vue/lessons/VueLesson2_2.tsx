import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson2_2Content: LessonContent = {
  title: 'Computed Properties និង Watchers',
  objectives: [
    'យល់ដឹងពី Computed Properties និងការប្រើប្រាស់របស់វា',
    'ស្វែងយល់ពី Watchers និងការតាមដាន Data Changes',
    'ប្រៀបធៀប Computed Properties និង Methods',
    'អនុវត្ត Computed Properties និង Watchers ក្នុង Application',
  ],
  content: `
# Computed Properties និង Watchers 🔍

---

**Computed Properties** និង **Watchers** គឺជា Tools សំខាន់នៅក្នុង Vue.js សម្រាប់គ្រប់គ្រង Logic និងតាមដាន Data Changes។

---

## 1. Computed Properties

**Computed Properties** គឺជា Properties ដែលគណនាដោយផ្អែកលើ Data Properties និង Update ដោយស្វ័យប្រវត្តិនៅពេល Dependencies ផ្លាស់ប្តូរ។

\`\`\`html
<div id="app">
  <p>តម្លៃសរុប: {{ totalPrice }}</p>
</div>
<script>
Vue.createApp({
  data() {
    return {
      price: 10,
      quantity: 5
    }
  },
  computed: {
    totalPrice() {
      return this.price * this.quantity;
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<p>តម្លៃសរុប: 50</p>\`

**ចំណាំ:** Computed Properties Cache Results និង Update តែនៅពេល Dependencies ផ្លាស់ប្តូរ។

---

## 2. Computed Properties vs Methods

**Computed Properties** ខុសពី **Methods** ដោយ:
- **Computed Properties:** Cache Results និង Depend លើ Data Properties។
- **Methods:** Run រាល់ពេលដែលហៅ។

\`\`\`html
<div id="app">
  <p>Computed: {{ totalPrice }}</p>
  <p>Method: {{ getTotalPrice() }}</p>
</div>
<script>
Vue.createApp({
  data() {
    return {
      price: 10,
      quantity: 5
    }
  },
  computed: {
    totalPrice() {
      return this.price * this.quantity;
    }
  },
  methods: {
    getTotalPrice() {
      return this.price * this.quantity;
    }
  }
}).mount('#app');
</script>
\`\`\`

**ភាពខុសគ្នា:** \`totalPrice\` Cache Result, ចំណែក \`getTotalPrice()\` Run រាល់ពេល។

---

## 3. Watchers

**Watchers** ប្រើសម្រាប់តាមដាន Data Changes និង Perform Actions នៅពេល Data ផ្លាស់ប្តូរ។

\`\`\`html
<div id="app">
  <input v-model="name">
  <p>សារ: {{ message }}</p>
</div>
<script>
Vue.createApp({
  data() {
    return {
      name: '',
      message: ''
    }
  },
  watch: {
    name(newValue, oldValue) {
      this.message = \`ឈ្មោះថ្មី: \${newValue}\`;
    }
  }
}).mount('#app');
</script>
\`\`\`

**លទ្ធផល:** នៅពេល \`name\` ផ្លាស់ប្តូរ, \`message\` Update ដោយស្វ័យប្រវត្តិ។

---

## 4. Computed Properties vs Watchers

- **Computed Properties:** សម្រាប់ Logic ដែល Depend លើ Data និង Return Value។
- **Watchers:** សម្រាប់ Side Effects (ឧ. API Calls, Logging) នៅពេល Data ផ្លាស់ប្តូរ។

---

## 5. គន្លឹះសម្រាប់ Computed Properties និង Watchers

- **ប្រើ Computed Properties សម្រាប់ Simple Calculations:** ដូចជា Format Data។
- **ប្រើ Watchers សម្រាប់ Complex Logic:** ដូចជា Async Operations។
- **ជៀសវាង Heavy Logic នៅក្នុង Computed Properties:** ដើម្បីរក្សា Performance។
- **អាន Documentation:** [vuejs.org/guide/essentials/computed](https://vuejs.org/guide/essentials/computed)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Computed Property</h3>
<p>ប្រើ Computed Property ដើម្បីគណនាតម្លៃសរុប។</p>
<pre><code class="language-html">
<div id="app">
  <p>តម្លៃ: {{ price }}</p>
  <p>ចំនួន: {{ quantity }}</p>
  <p>សរុប: {{ totalPrice }}</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
Vue.createApp({
  data() {
    return {
      price: 10,
      quantity: 5
    }
  },
  computed: {
    totalPrice() {
      return this.price * this.quantity;
    }
  }
}).mount('#app');
</script>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Watcher</h3>
<p>ប្រើ Watcher ដើម្បីតាមដាន Input Changes។</p>
<pre><code class="language-html">
<div id="app">
  <input v-model="name">
  <p>សារ: {{ message }}</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
Vue.createApp({
  data() {
    return {
      name: '',
      message: ''
    }
  },
  watch: {
    name(newValue) {
      this.message = \`ឈ្មោះថ្មី: \${newValue}\`;
    }
  }
}).mount('#app');
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Computed Properties មានលក្ខណៈអ្វី?',
      options: [
        'Run រាល់ពេល',
        'Cache Results',
        'Perform Side Effects',
        'Handle Events'
      ],
      correct: 1,
      explanation: 'Computed Properties Cache Results និង Update នៅពេល Dependencies ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Methods ខុសពី Computed Properties ដោយរបៀបណា?',
      options: [
        'Methods Cache Results',
        'Methods Run រាល់ពេលដែលហៅ',
        'Methods Depend លើ Data',
        'Methods មិនប្រើ `this`'
      ],
      correct: 1,
      explanation: 'Methods Run រាល់ពេលដែលហៅ, ចំណែក Computed Properties Cache Results។'
    },
    {
      question: 'តើ Watchers ប្រើសម្រាប់អ្វី?',
      options: [
        'Calculate Values',
        'Track Data Changes',
        'Bind Attributes',
        'Render Lists'
      ],
      correct: 1,
      explanation: 'Watchers ប្រើសម្រាប់ Track Data Changes និង Perform Side Effects។'
    },
    {
      question: 'តើ Computed Properties Return អ្វី?',
      options: [
        'Function',
        'Value',
        'Promise',
        'Array'
      ],
      correct: 1,
      explanation: 'Computed Properties Return Value។'
    },
    {
      question: 'តើ Watchers អាច Perform Async Operations បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: 'Watchers អាច Perform Async Operations។'
    },
    {
      question: 'តើ Computed Properties Depend លើអ្វី?',
      options: [
        'Methods',
        'Data Properties',
        'Events',
        'DOM Elements'
      ],
      correct: 1,
      explanation: 'Computed Properties Depend លើ Data Properties។'
    },
    {
      question: 'តើ Watcher ទទួល Parameters អ្វីខ្លះ?',
      options: [
        'newValue, oldValue',
        'value, index',
        'key, value',
        'event, data'
      ],
      correct: 0,
      explanation: 'Watcher ទទួល `newValue` និង `oldValue`។'
    },
    {
      question: 'តើ Computed Properties សមស្របសម្រាប់អ្វី?',
      options: [
        'Async Operations',
        'Simple Calculations',
        'Event Handling',
        'List Rendering'
      ],
      correct: 1,
      explanation: 'Computed Properties សមស្របសម្រាប់ Simple Calculations។'
    },
    {
      question: 'តើ Watchers សមស្របសម្រាប់អ្វី?',
      options: [
        'Simple Calculations',
        'Side Effects',
        'Attribute Binding',
        'Conditional Rendering'
      ],
      correct: 1,
      explanation: 'Watchers សមស្របសម្រាប់ Side Effects ដូចជា API Calls�।'
    },
    {
      question: 'តើ Computed Properties អាចប្រើនៅក្នុង Template ដូច Data Properties បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: 'Computed Properties អាចប្រើនៅក្នុង Template ដូច Data Properties។'
    },
    {
      question: 'តើអ្នកគួរប្រើ Computed Properties ឬ Methods សម្រាប់ Heavy Calculations?',
      options: [
        'Computed Properties',
        'Methods',
        'Watchers',
        'ទាំងពីរ'
      ],
      correct: 1,
      explanation: 'Methods សមស្របជាងសម្រាប់ Heavy Calculations, ព្រោះ Computed Properties Cache Results។'
    },
    {
      question: 'តើ Watchers អាចតាមដាន Multiple Properties បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: 'Watchers អាចតាមដាន Multiple Properties បាន។'
    },
  ],
  lab: {
    task: `
បង្ផើត Vue.js Application ដែលប្រើ Computed Properties និង Watchers។

**តម្រូវការ:**

1. **បង្ផើត HTML File:**
   - បង្ផើត File: \`index.html\`។
   - បន្ថែម Vue.js CDN: \`https://unpkg.com/vue@3/dist/vue.global.js\`។

2. **បង្ផើត Vue App:**
   - បង្ផើត \`<div id="app">\` ដែលបង្ហាញ:
     - \`<input v-model="price">\`
     - \`<input v-model.number="quantity">\`
     - \`<p>តម្លៃសរុប: {{ totalPrice }}</p>\`
     - \`<p>សារ: {{ message }}</p>\`

3. **បន្ថែម Data, Computed, និង Watchers:**
   - Data Properties:
     - \`price\`: \`10\`
     - \`quantity\`: \`5\`
     - \`message\`: \`''\`
   - Computed Property: \`totalPrice\` ដែលគណនា \`price * quantity\`។
   - Watcher: តាមដាន \`price\` និង Update \`message\` ទៅ \`'តម្លៃថ្មី: [newPrice]'\`។

4. **បន្ថែម Styling:**
   - \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`p\`។
     - \`padding: 5px;\` សម្រាប់ \`input\`។

5. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - ផ្លាស់ប្តូរ \`price\` និង \`quantity\` ដើម្បីពិនិត្យ Computed Property និង Watcher។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Vue Computed & Watchers</title>
  <style>
    p {
      font-family: Arial, sans-serif;
    }
    input {
      padding: 5px;
    }
  </style>
</head>
<body>
  <div id="app">
    <input v-model="price">
    <input v-model.number="quantity">
    <p>តម្លៃសរុប: {{ totalPrice }}</p>
    <p>សារ: {{ message }}</p>
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    Vue.createApp({
      data() {
        return {
          price: 10,
          quantity: 5,
          message: ''
        }
      },
      computed: {
        totalPrice() {
          return this.price * this.quantity;
        }
      },
      watch: {
        price(newPrice) {
          this.message = \`តម្លៃថ្មី: \${newPrice}\`;
        }
      }
    }).mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson2_2Content;