import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson3_1Content: LessonContent = {
  title: 'ការណែនាំអំពី Vue Components',
  objectives: [
    'យល់ដឹងពីអ្វីជា Vue Components និងសារៈសំខាន់របស់វា',
    'រៀនរបៀបបង្កើត និងចុះឈ្មោះ Component',
    'ស្វែងយល់ពី Component Structure (Template, Script, Style)',
    'អនុវត្តការបង្កើត Component ដំបូង',
  ],
  content: `
# ការណែនាំអំពី Vue Components 🧩

---

**Vue Components** គឺជាប្លុកសំណង់សំខាន់នៃ Vue.js Applications។ ពួកវាអនុញ្ញាតឱ្យអ្នកបង្កើត UI Elements ដែលអាចប្រើឡើងវិញបាន។

---

## 1. អ្វីជា Vue Component?

**Component** គឺជា Vue Instance ដែលមាន Template, Data, Methods និង Styles ផ្ទាល់ខ្លួន។ វាជួយឱ្យ Code មានភាព Modular និង Reusable។

**ឧទាហរណ៍ខ្លី:**
\`\`\`html
<div id="app">
  <my-component></my-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({});
app.component('my-component', {
  template: '<p>នេះជា Component ដំបូង!</p>'
});
app.mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<p>នេះជា Component ដំបូង!</p>\`

---

## 2. ការបង្កើត និងចុះឈ្មោះ Component

Vue.js អនុញ្ញាតឱ្យចុះឈ្មោះ Components តាមរយៈ \`app.component()\`។

**ឧទាហរណ៍:**
\`\`\`html
<div id="app">
  <greeting-component></greeting-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({});
app.component('greeting-component', {
  template: '<h1>សួស្តីពី Component!</h1>',
  data() {
    return {
      message: 'សួស្តី!'
    }
  }
});
app.mount('#app');
</script>
\`\`\`

**ចំណាំ:** Component Names គួរប្រើ **Kebab-case** (ឧ. \`my-component\`)។

---

## 3. Component Structure

Components មាន 3 ផ្នែកសំខាន់:
- **Template:** HTML Structure (ប្រើ \`<template>\` Tag)។
- **Script:** JavaScript/TypeScript Logic (Data, Methods, etc.)។
- **Style:** CSS Styles (អាច Scoped ឬ Global)។

**ឧទាហរណ៍ (Single File Component - SFC):**
\`\`\`vue
<!-- MyComponent.vue -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      title: 'Component ដំបូង',
      message: 'នេះជា Single File Component!'
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
\`\`\`

**ចំណាំ:** \`scoped\` Attribute ធ្វើឱ្យ Styles អនុវត្តតែលើ Component នោះ។

---

## 4. សារៈសំខាន់នៃ Components

- **Reusability:** ប្រើ Component នៅច្រើនកន្លែង។
- **Modularity:** បំបែក Code ទៅជា Units តូចៗ។
- **Maintainability:** ងាយស្រួល Update និង Debug។

---

## 5. គន្លឹះសម្រាប់ Components

- **ប្រើ Kebab-case សម្រាប់ Component Names:** ដើម្បីអនុលោមតាម HTML Standards។
- **ប្រើ Single File Components:** សម្រាប់ Projects ធំ។
- **ប្រើ Scoped Styles:** ដើម្បីជៀសវាង Style Conflicts។
- **អាន Documentation:** [vuejs.org/guide/essentials/component-basics](https://vuejs.org/guide/essentials/component-basics)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Component សាមញ្ញ</h3>
<p>បង្កើត Component ដែលបង្ហាញសារ។</p>
<pre><code class="language-html">
<div id="app">
  <simple-component></simple-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({});
app.component('simple-component', {
  template: '<p>សួស្តីពី Component!</p>'
});
app.mount('#app');
</script>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Component ជាមួយ Data</h3>
<p>Component ដែលប្រើ Data Property។</p>
<pre><code class="language-html">
<div id="app">
  <greeting-component></greeting-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({});
app.component('greeting-component', {
  template: '<h1>{{ message }}</h1>',
  data() {
    return {
      message: 'សួស្តី Vue.js!'
    }
  }
});
app.mount('#app');
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Vue Component គឺជាអ្វី?',
      options: [
        'HTML Element',
        'Vue Instance ដែល Reusable',
        'CSS Style',
        'JavaScript Function'
      ],
      correct: 1,
      explanation: 'Vue Component គឺជា Vue Instance ដែល Reusable។'
    },
    {
      question: 'តើ Method ណាមួយប្រើដើម្បីចុះឈ្មោះ Component?',
      options: [
        'Vue.createApp()',
        'app.component()',
        'app.mount()',
        'Vue.register()'
      ],
      correct: 1,
      explanation: '`app.component()` ប្រើសម្រាប់ចុះឈ្មោះ Component។'
    },
    {
      question: 'តើ Component Name គួរប្រើ Format អ្វី?',
      options: [
        'CamelCase',
        'Kebab-case',
        'PascalCase',
        'Snake_case'
      ],
      correct: 1,
      explanation: 'Component Names គួរប្រើ Kebab-case។'
    },
    {
      question: 'តើ `<template>` Tag មានតួនាទីអ្វីនៅក្នុង Component?',
      options: [
        'Define Styles',
        'Define HTML Structure',
        'Define Methods',
        'Define Data'
      ],
      correct: 1,
      explanation: '`<template>` Define HTML Structure។'
    },
    {
      question: 'តើ `scoped` Attribute នៅក្នុង `<style>` ធ្វើអ្វី?',
      options: [
        'Apply Styles Globally',
        'Apply Styles to Component Only',
        'Disable Styles',
        'Include External CSS'
      ],
      correct: 1,
      explanation: '`scoped` Apply Styles to Component Only។'
    },
    {
      question: 'តើ Components ជួយធ្វើឱ្យ Code មានលក្ខណៈអ្វី?',
      options: [
        'Complex',
        'Modular',
        'Static',
        'Slow'
      ],
      correct: 1,
      explanation: 'Components ធ្វើឱ្យ Code មានលក្ខណៈ Modular។'
    },
    {
      question: 'តើ Single File Component (SFC) មានផ្នែកអ្វីខ្លះ?',
      options: [
        'Template, Script, Style',
        'HTML, CSS, JavaScript',
        'Data, Methods, Events',
        'Props, Slots, Directives'
      ],
      correct: 0,
      explanation: 'SFC មាន Template, Script, Style។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Component ដោយមិនចុះឈ្មោះបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ CDN',
        'បាន ប៉ុន្តែត្រូវប្រើ Vite'
      ],
      correct: 1,
      explanation: 'Components តម្រូវឱ្យចុះឈ្មោះ។'
    },
    {
      question: 'តើ Components ជួយធ្វើឱ្យ Application មានភាពអ្វី?',
      options: [
        'Reusable',
        'Unstable',
        'Complex',
        'Static'
      ],
      correct: 0,
      explanation: 'Components ធ្វើឱ្យ Application មានភាព Reusable។'
    },
    {
      question: 'តើ Component Template អាចមាន Multiple Root Elements បានទេ?',
      options: [
        'បាន',
        'មិនបាន នៅ Vue 2',
        'បាន នៅ Vue 3',
        'ទាំងពីរ'
      ],
      correct: 2,
      explanation: 'Vue 3 អនុញ្ញាតឱ្យ Template មាន Multiple Root Elements។'
    },
    {
      question: 'តើអ្នកគួរប្រើ Scoped Styles នៅពេលណា?',
      options: [
        'នៅពេលចង់ Apply Global Styles',
        'នៅពេលចង់ Avoid Style Conflicts',
        'នៅពេលចង់ Disable Styles',
        'នៅពេលចង់ Include External CSS'
      ],
      correct: 1,
      explanation: 'Scoped Styles ប្រើដើម្បី Avoid Style Conflicts។'
    },
  ],
  lab: {
    task: `
បង្ផើត Vue.js Application ដែលប្រើ Component ដំបូង។

**តម្រូវការ:**

1. **បង្ផើត HTML File:**
   - បង្ផើត File: \`index.html\`។
   - បន្ថែម Vue.js CDN: \`https://unpkg.com/vue@3/dist/vue.global.js\`។

2. **បង្ផើត Vue App:**
   - បង្ផើត \`<div id="app">\` ដែលបង្ហាញ:
     - \`<welcome-component></welcome-component>\`

3. **បង្ផើត Component:**
   - ចុះឈ្មោះ Component \`welcome-component\` ដែលមាន:
     - Template: \`<div><h1>{{ title }}</h1><p>{{ message }}</p></div>\`
     - Data: \`title\` ('សួស្តីពី Component!'), \`message\` ('នេះជា Component ដំបូងរបស់ខ្ញុំ។')

4. **បន្ថែម Styling:**
   - \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`h1\`។
     - \`color: green;\` សម្រាប់ \`p\`។

5. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - ពិនិត្យថាតើ Component Render ត្រឹមត្រូវ។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Vue Component</title>
  <style>
    h1 {
      font-family: Arial, sans-serif;
    }
    p {
      color: green;
    }
  </style>
</head>
<body>
  <div id="app">
    <welcome-component></welcome-component>
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    const app = Vue.createApp({});
    app.component('welcome-component', {
      template: '<div><h1>{{ title }}</h1><p>{{ message }}</p></div>',
      data() {
        return {
          title: 'សួស្តីពី Component!',
          message: 'នេះជា Component ដំបូងរបស់ខ្ញុំ។'
        }
      }
    });
    app.mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson3_1Content;