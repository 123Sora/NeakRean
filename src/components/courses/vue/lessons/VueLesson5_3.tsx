import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson5_3Content: LessonContent = {
  title: 'Transitions និង Animations',
  objectives: [
    'យល់ដឹងពី Transitions និង Animations នៅក្នុង Vue.js',
    'ប្រើ `<transition>` Component សម្រាប់ Basic Transitions',
    'អនុវត្ត CSS Animations ជាមួយ Vue',
    'ស្វែងយល់ពី Transition Groups សម្រាប់ Lists',
  ],
  content: `
# Transitions និង Animations 🎬

---

**Transitions** និង **Animations** នៅក្នុង Vue.js ជួយបង្កើត Smooth UI Effects។ Vue ប្រើ \`<transition>\` Component ដើម្បី Manage Transitions។

---

## 1. \`<transition>\` Component

**\`<transition>\`** Wraps Elements ដើម្បី Apply Enter/Leave Transitions។

\`\`\`vue
<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">Hello Vue!</p>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return { show: true };
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
</style>
\`\`\`

---

## 2. CSS Animations

**CSS Animations** អាចប្រើជាមួយ \`<transition>\`។

\`\`\`vue
<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition name="bounce">
      <p v-if="show">Bounce Effect</p>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return { show: true };
  }
}
</script>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>
\`\`\`

---

## 3. Transition Groups

**\`<transition-group>\`** ប្រើសម្រាប់ Lists ដើម្បី Animate Items។

\`\`\`vue
<template>
  <div>
    <button @click="addItem">Add Item</button>
    <transition-group name="list" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ['Item 1', 'Item 2'],
      nextId: 3
    };
  },
  methods: {
    addItem() {
      this.items.push(\`Item \${this.nextId++}\`);
    }
  }
}
</script>
<style>
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
\`\`\`

---

## 4. គន្លឹះសម្រាប់ Transitions និង Animations

- **ប្រើ \`<transition>\` សម្រាប់ Single Elements:** ដើម្បី Apply Enter/Leave Effects។
- **ប្រើ \`<transition-group>\` សម្រាប់ Lists:** ដើម្បី Animate Dynamic Lists១
- **ប្រើ CSS Transitions/Animations:** សម្រាប់ Simple Effects។
- **អាន Documentation:** [vuejs.org/guide/built-ins/transition](https://vuejs.org/guide/built-ins/transition)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Fade Transition</h3>
<p>ប្រើ \`<transition>\` សម្រាប់ Fade Effect។</p>
<pre><code class="language-vue">
<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">Hello Vue!</p>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return { show: true };
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
</style>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Transition Group</h3>
<p>Animate List Items។</p>
<pre><code class="language-vue">
<template>
  <div>
    <button @click="addItem">Add Item</button>
    <transition-group name="list" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ['Item 1', 'Item 2'],
      nextId: 3
    };
  },
  methods: {
    addItem() {
      this.items.push(\`Item \${this.nextId++}\`);
    }
  }
}
</script>
<style>
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `<transition>` Component ប្រើសម្រាប់អ្វី?',
      options: [
        'Manage State',
        'Apply Enter/Leave Effects',
        'Fetch Data',
        'Define Routes'
      ],
      correct: 1,
      explanation: '`<transition>` Apply Enter/Leave Effects។'
    },
    {
      question: 'តើ `<transition-group>` ប្រើសម្រាប់អ្វី?',
      options: [
        'Single Element Transitions',
        'List Animations',
        'Route Navigation',
        'API Calls'
      ],
      correct: 1,
      explanation: '`<transition-group>` ប្រើសម្រាប់ List Animations។'
    },
    {
      question: 'តើ Transition Class ណាមួយសម្រាប់ Entering?',
      options: [
        'enter-active',
        'leave-active',
        'enter-from',
        'leave-to'
      ],
      correct: 0,
      explanation: '`enter-active` សម្រាប់ Entering Phase។'
    },
    {
      question: 'តើ `tag` Attribute នៅក្នុង `<transition-group>` ធ្វើអ្វី?',
      options: [
        'Define Animation',
        'Specify Wrapper Element',
        'Handle Events',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`tag` Specify Wrapper Element។'
    },
    {
      question: 'តើ CSS Property ណាមួយប្រើសម្រាប់ Transitions?',
      options: [
        'transition',
        'animation',
        'transform',
        'opacity'
      ],
      correct: 0,
      explanation: '`transition` Property ប្រើសម្រាប់ Transitions។'
    },
    {
      question: 'តើ `@keyframes` ប្រើសម្រាប់អ្វី?',
      options: [
        'Define Routes',
        'Define CSS Animations',
        'Manage State',
        'Handle Events'
      ],
      correct: 1,
      explanation: '`@keyframes` Define CSS Animations។'
    },
    {
      question: 'តើ `<transition>` តម្រូវឱ្យប្រើ `v-if` ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែ Optional',
        'បាន ប៉ុន្តែ Slow'
      ],
      correct: 2,
      explanation: '`<transition>` អាចប្រើជាមួយ `v-if` ឬ `v-show` (Optional)។'
    },
    {
      question: 'តើ Transition Classes មាន Prefix អ្វី?',
      options: [
        'transition-',
        'name-',
        'enter- / leave-',
        'v-'
      ],
      correct: 2,
      explanation: 'Transition Classes មាន Prefix `enter-` និង `leave-`។'
    },
    {
      question: 'តើ `<transition-group>` តម្រូវឱ្យមាន `:key` ឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែ Optional',
        'បាន ប៉ុន្តែ Slow'
      ],
      correct: 0,
      explanation: '`<transition-group>` តម្រូវឱ្យមាន `:key` សម្រាប់ List Items។'
    },
    {
      question: 'តើ CSS Animation ខុសពី Transition ដោយរបៀបណា?',
      options: [
        'Uses `@keyframes`',
        'Uses `transition` Property',
        'No CSS Required',
        'Only for Lists'
      ],
      correct: 0,
      explanation: 'CSS Animation ប្រើ `@keyframes`។'
    },
    {
      question: 'តើ `v-show` អាចប្រើជាមួយ `<transition>` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែ Slow',
        'បាន ប៉ុន្តែត្រូវ Configure'
      ],
      correct: 0,
      explanation: '`v-show` អាចប្រើជាមួយ `<transition>`។'
    },
    {
      question: 'តើ Transition Name គួរប្រើ Format អ្វី?',
      options: [
        'CamelCase',
        'Kebab-case',
        'PascalCase',
        'Snake_case'
      ],
      correct: 1,
      explanation: 'Transition Name គួរប្រើ Kebab-case។'
    },
    {
      question: 'តើ `<transition-group>` អាច Animate List Reordering បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវ Configure',
        'បាន ប៉ុន្តែ Slow'
      ],
      correct: 0,
      explanation: '`<transition-group>` អាច Animate List Reordering។'
    },
  ],
  lab: {
    task: `
បង្កើត Vue.js Application ដែលប្រើ \`<transition>\` និង \`<transition-group>\`។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Vite:
     \`\`\`bash
     npm create vite@latest transition-app -- --template vue
     cd transition-app
     npm install
     \`\`\`

2. **បង្កើត Component:**
   - នៅ \`src/App.vue\`, បង្ហាញ:
     - \`<button>Toggle</button>\` ដើម្បី Toggle \`<p>Hello Vue!</p>\` ជាមួយ Fade Transition។
     - \`<button>Add Item</button>\` និង \`<transition-group>\` ដើម្បី Animate List Items។

3. **បន្ថែម Styling:**
   - \`<style>\` Tag:
     - Fade Transition: \`opacity\` ពី 0 ទៅ 1 ក្នុង 0.5s។
     - List Transition: \`opacity\` និង \`transform: translateY(30px)\`។
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`p, li\`។
     - \`padding: 5px;\` សម្រាប់ \`button\`។

4. **Run Application:**
   - ប្រើ \`npm run dev\` និងបើក \`http://localhost:5173\`។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
## src/App.vue 
\`\`\`text
<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">Hello Vue!</p>
    </transition>
    <button @click="addItem">Add Item</button>
    <transition-group name="list" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      items: ['Item 1', 'Item 2'],
      nextId: 3
    };
  },
  methods: {
    addItem() {
      this.items.push(\`Item \${this.nextId++}\`);
    }
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
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
p, li {
  font-family: Arial, sans-serif;
}
button {
  padding: 5px;
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
  <title>Vue Transition App</title>
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

export default VueLesson5_3Content;