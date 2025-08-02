import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson3_2Content: LessonContent = {
  title: 'Component Communication',
  objectives: [
    'យល់ដឹងពីរបៀប Components ទំនាក់ទំនងគ្នា',
    'ប្រើ Props សម្រាប់ Parent-to-Child Communication',
    'ប្រើ Custom Events សម្រាប់ Child-to-Parent Communication',
    'អនុវត្ត Two-way Communication នៅក្នុង Application',
  ],
  content: `
# Component Communication 📡

---

**Component Communication** គឺជាវិធីសាស្ត្រដែល Components ផ្លាស់ប្តូរទិន្នន័យគ្នាទៅវិញទៅមក។ Vue.js ប្រើ **Props** និង **Custom Events** សម្រាប់គោលបំណងនេះ។

---

## 1. Props (Parent-to-Child)

**Props** អនុញ្ញាតឱ្យ Parent Component ផ្ញើ Data ទៅ Child Component។

\`\`\`html
<div id="app">
  <child-component :message="parentMessage"></child-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({
  data() {
    return {
      parentMessage: 'សួស្តីពី Parent!'
    }
  }
});
app.component('child-component', {
  props: ['message'],
  template: '<p>{{ message }}</p>'
});
app.mount('#app');
</script>
\`\`\`

**លទ្ធផល:** \`<p>សួស្តីពី Parent!</p>\`

**ចំណាំ:** Props គួរត្រូវបានកំណត់នៅក្នុង Child Component។

---

## 2. Custom Events (Child-to-Parent)

**Custom Events** អនុញ្ញាតឱ្យ Child Component ផ្ញើ Data ទៅ Parent Component។

\`\`\`html
<div id="app">
  <child-component @custom-event="handleEvent"></child-component>
  <p>សារ: {{ parentMessage }}</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({
  data() {
    return {
      parentMessage: ''
    }
  },
  methods: {
    handleEvent(message) {
      this.parentMessage = message;
    }
  }
});
app.component('child-component', {
  template: '<button @click="$emit(\'custom-event\', \'សួស្តីពី Child!\')">ចុចខ្ញុំ</button>'
});
app.mount('#app');
</script>
\`\`\`

**លទ្ធផល:** នៅពេលចុច Button, \`parentMessage\` Update ទៅ \`'សួស្តីពី Child!'\`។

---

## 3. Two-way Communication

**Props** និង **Custom Events** អាច Combine ដើម្បីបង្កើត Two-way Communication។

\`\`\`html
<div id="app">
  <counter-component :count="parentCount" @update-count="updateCount"></counter-component>
  <p>ចំនួន: {{ parentCount }}</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({
  data() {
    return {
      parentCount: 0
    }
  },
  methods: {
    updateCount(newCount) {
      this.parentCount = newCount;
    }
  }
});
app.component('counter-component', {
  props: ['count'],
  template: \`
    <div>
      <button @click="$emit('update-count', count + 1)">បង្កើន</button>
      <p>ចំនួន: {{ count }}</p>
    </div>
  \`
});
app.mount('#app');
</script>
\`\`\`

**លទ្ធផល:** នៅពេលចុច Button, \`parentCount\` កើនឡើង។

---

## 4. គន្លឹះសម្រាប់ Component Communication

- **ប្រើ Props សម្រាប់ One-way Data Flow:** Parent-to-Child។
- **ប្រើ Custom Events សម្រាប់ Child-to-Parent:** ដើម្បី Update Parent Data។
- **ជៀសវាង Mutating Props:** ប្រើ Events ដើម្បី Update Data។
- **អាន Documentation:** [vuejs.org/guide/components/props](https://vuejs.org/guide/components/props)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Props</h3>
<p>ផ្ញើ Data ពី Parent ទៅ Child។</p>
<pre><code class="language-html">
<div id="app">
  <child-component :message="parentMessage"></child-component>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({
  data() {
    return {
      parentMessage: 'សួស្តីពី Parent!'
    }
  }
});
app.component('child-component', {
  props: ['message'],
  template: '<p>{{ message }}</p>'
});
app.mount('#app');
</script>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Custom Event</h3>
<p>Child Component ផ្ញើ Data ទៅ Parent�।</p>
<pre><code class="language-html">
<div id="app">
  <child-component @custom-event="handleEvent"></child-component>
  <p>{{ parentMessage }}</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({
  data() {
    return {
      parentMessage: ''
    }
  },
  methods: {
    handleEvent(message) {
      this.parentMessage = message;
    }
  }
});
app.component('child-component', {
  template: '<button @click="$emit(\'custom-event\', \'សួស្តី!\')">ចុចខ្ញុំ</button>'
});
app.mount('#app');
</script>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Props ប្រើសម្រាប់អ្វី?',
      options: [
        'Child-to-Parent Communication',
        'Parent-to-Child Communication',
        'Event Handling',
        'List Rendering'
      ],
      correct: 1,
      explanation: 'Props ប្រើសម្រាប់ Parent-to-Child Communication។'
    },
    {
      question: 'តើ Custom Events ប្រើសម្រាប់អ្វី?',
      options: [
        'Parent-to-Child Communication',
        'Child-to-Parent Communication',
        'Attribute Binding',
        'Conditional Rendering'
      ],
      correct: 1,
      explanation: 'Custom Events ប្រើសម្រាប់ Child-to-Parent Communication។'
    },
    {
      question: 'តើ Method ណាមួយប្រើដើម្បី Emit Custom Event?',
      options: [
        '$emit',
        '$on',
        '$props',
        '$data'
      ],
      correct: 0,
      explanation: '`$emit` ប្រើដើម្បី Emit Custom Event។'
    },
    {
      question: 'តើ Props គួរត្រូវបានកំណត់នៅឯណា?',
      options: [
        'Parent Component',
        'Child Component',
        'Root App',
        'Global Scope'
      ],
      correct: 1,
      explanation: 'Props ត្រូវកំណត់នៅក្នុង Child Component។'
    },
    {
      question: 'តើអ្នកអាច Mutate Props នៅក្នុង Child Component បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 1,
      explanation: 'Props មិនគួរ Mutate នៅក្នុង Child Component។'
    },
    {
      question: 'តើ Custom Event Names គួរប្រើ Format អ្វី?',
      options: [
        'CamelCase',
        'Kebab-case',
        'PascalCase',
        'Snake_case'
      ],
      correct: 1,
      explanation: 'Custom Event Names គួរប្រើ Kebab-case។'
    },
    {
      question: 'តើ Two-way Communication តម្រូវឱ្យប្រើអ្វី?',
      options: [
        'Props និង Custom Events',
        'v-bind និង v-on',
        'v-if និង v-for',
        'Computed Properties និង Watchers'
      ],
      correct: 0,
      explanation: 'Two-way Communication ប្រើ Props និង Custom Events។'
    },
    {
      question: 'តើ Props អាចជា Data Type អ្វីបានខ្លះ?',
      options: [
        'String',
        'Number',
        'Object',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: 'Props អាចជា String, Number, Object, និងផ្សេងទៀត។'
    },
    {
      question: 'តើ Custom Event អាចផ្ញើ Multiple Arguments បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-bind`',
        'បាន ប៉ុន្តែត្រូវប្រើ `v-for`'
      ],
      correct: 0,
      explanation: 'Custom Event អាចផ្ញើ Multiple Arguments។'
    },
    {
      question: 'តើ Props គឺជា One-way ឬ Two-way Binding?',
      options: [
        'One-way',
        'Two-way',
        'Depends on Component',
        'None'
      ],
      correct: 0,
      explanation: 'Props គឺជា One-way Binding។'
    },
    {
      question: 'តើអ្នកគួរប្រើ Custom Events នៅពេលណា?',
      options: [
        'To Pass Data to Child',
        'To Update Parent Data',
        'To Bind Styles',
        'To Render Lists'
      ],
      correct: 1,
      explanation: 'Custom Events ប្រើដើម្បី Update Parent Data។'
    },
  ],
  lab: {
    task: `
បង្កើត Vue.js Application ដែលប្រើ Component Communication។

**តម្រូវការ:**

1. **បង្កើត HTML File:**
   - បង្កើត File: \`index.html\`។
   - បន្ថែម Vue.js CDN: \`https://unpkg.com/vue@3/dist/vue.global.js\`។

2. **បង្កើត Vue App:**
   - បង្កើត \`<div id="app">\` ដែលបង្ហាញ:
     - \`<counter-component :count="parentCount" @update-count="updateCount"></counter-component>\`
     - \`<p>ចំនួនសរុប: {{ parentCount }}</p>\`

3. **បង្កើត Component:**
   - ចុះឈ្មោះ \`counter-component\` ដែល:
     - Props: \`count\`
     - Template: \`<div><button @click="$emit('update-count', count + 1)">បង្កើន</button><p>ចំនួន: {{ count }}</p></div>\`

4. **បន្ថែម Data និង Methods:**
   - Data: \`parentCount\` (0)
   - Method: \`updateCount(newCount)\` ដែល Update \`parentCount\`។

5. **បន្ថែម Styling:**
   - \`<style>\` Tag:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`p\`។
     - \`padding: 5px;\` សម្រាប់ \`button\`។

6. **Test Application:**
   - បើក \`index.html\` នៅ Browser។
   - ចុច Button ដើម្បីបង្កើន \`parentCount\`។

**ការណែនាំ:** ប្រើ Browser Console (F12) ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Vue Component Communication</title>
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
    <counter-component :count="parentCount" @update-count="updateCount"></counter-component>
    <p>ចំនួនសរុប: {{ parentCount }}</p>
  </div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    const app = Vue.createApp({
      data() {
        return {
          parentCount: 0
        };
      },
      methods: {
        updateCount(newCount) {
          this.parentCount = newCount;
        }
      }
    });
    app.component('counter-component', {
      props: ['count'],
      template: \` '
        <div>
          <button @click="$emit('update-count', count + 1)">បង្កើន</button>
          <p>ចំនួន: {{ count }}</p>
        </div>
       ' \`
    });
    app.mount('#app');
  </script>
</body>
</html>
`
  }
};

export default VueLesson3_2Content;