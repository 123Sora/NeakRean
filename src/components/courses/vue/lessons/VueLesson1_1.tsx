// src/components/lessons/vuejs/VueLesson1_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី Vue.js និង Front-end Development',
  objectives: [
    'អ្វីទៅជា Front-end Framework? (Vue, React, Angular)',
    'តើ Vue.js ជាអ្វី? (Progressive JavaScript Framework)',
    'មូលហេតុដែលត្រូវប្រើ Vue.js (ងាយស្រួលរៀន, Performance ល្អ, Flexible)',
    'ការប្រៀបធៀប Vue.js ជាមួយ Frameworks ផ្សេងទៀត (React, Angular)',
    'Setup Development Environment (Node.js, npm/yarn, VS Code)'
  ],
  content: `
# ណែនាំអំពី Vue.js និង Front-end Development 💡

---

មេរៀននេះនឹងណែនាំអ្នកអំពីមូលដ្ឋានគ្រឹះនៃ Vue.js និង Front-end Development ។

---

## 1. អ្វីទៅជា Front-end Framework?

**Front-end Framework** គឺជាបណ្ណាល័យ (Library) Code ដែលត្រូវបានបង្កើតឡើងជាមុន ដែលជួយអ្នកអភិវឌ្ឍន៍បង្កើត User Interfaces (UIs) សម្រាប់ Web Applications ។ Framework ទាំងនេះផ្តល់នូវរចនាសម្ព័ន្ធ និងឧបករណ៍សម្រាប់គ្រប់គ្រង State, Routing, និង Component-based Development ។

* **ឧទាហរណ៍ Frameworks ពេញនិយម:**
    * **Vue.js:** ងាយស្រួលរៀន, មានភាពបត់បែន, និងមានប្រសិទ្ធភាពខ្ពស់។
    * **React:** បណ្ណាល័យដែលពេញនិយមបំផុតមួយសម្រាប់បង្កើត UIs, គាំទ្រដោយ Facebook ។
    * **Angular:** Framework ពេញលេញសម្រាប់ Enterprise-level Applications, គាំទ្រដោយ Google ។

---

## 2. តើ Vue.js ជាអ្វី?

**Vue.js** គឺជា **Progressive JavaScript Framework** សម្រាប់បង្កើត User Interfaces (UIs) ។ វាត្រូវបានរចនាឡើងដើម្បីអាចត្រូវបានអនុវត្តន៍បន្តិចម្តងៗទៅក្នុង Project មួយ។

* **Progressive:** មានន័យថាអ្នកអាចប្រើ Vue សម្រាប់ផ្នែកតូចមួយនៃ Website របស់អ្នក (ឧទាហរណ៍៖ Form មួយ) ឬសម្រាប់បង្កើត Single-Page Application (SPA) ពេញលេញមួយ។
* **Component-based:** អនុញ្ញាតឱ្យអ្នកបំបែក UI របស់អ្នកទៅជា Components តូចៗដែលអាចប្រើឡើងវិញបាន។
* **Declarative Rendering:** អនុញ្ញាតឱ្យអ្នកពិពណ៌នាពីអ្វីដែលអ្នកចង់ឱ្យ UI របស់អ្នកមើលទៅដូចម្ដេច ហើយ Vue នឹងដោះស្រាយការ Update DOM ដោយស្វ័យប្រវត្តិ។

---

## 3. មូលហេតុដែលត្រូវប្រើ Vue.js

* **ងាយស្រួលរៀន (Easy to Learn):** Vue មាន Syntax សាមញ្ញ និងឯកសារយោងច្បាស់លាស់ ដែលធ្វើឱ្យវាឆាប់រៀន ជាពិសេសសម្រាប់អ្នកដែលទើបតែចាប់ផ្តើមជាមួយ Front-end Frameworks ។
* **Performance ល្អ (Good Performance):** Vue ប្រើប្រាស់ Virtual DOM និងមាន Optimization ល្អ ដែលធ្វើឱ្យ Applications ដំណើរការលឿន។
* **Flexible (ភាពបត់បែន):** អ្នកអាចប្រើ Vue តាមវិធីជាច្រើន មិនថាជាបណ្ណាល័យតូចមួយ ឬជា Framework ពេញលេញនោះទេ។
* **Community ធំធាត់:** មានសហគមន៍អ្នកប្រើប្រាស់ និងអ្នកអភិវឌ្ឍន៍ដែលកំពុងរីកចម្រើន ដែលផ្តល់ការគាំទ្រ និងធនធានជាច្រើន។

---

## 4. ការប្រៀបធៀប Vue.js ជាមួយ Frameworks ផ្សេងទៀត

| លក្ខណៈពិសេស      | Vue.js                                   | React                                   | Angular                                 |
|-----------------------|------------------------------------------|-----------------------------------------|-----------------------------------------|
| **ភាពងាយស្រួលរៀន** | ងាយស្រួល (Easy)                         | មធ្យម (Moderate)                        | ពិបាក (Steep)                           |
| **ទំហំ**         | តូច (Lightweight)                       | មធ្យម (Moderate)                        | ធំ (Heavy)                              |
| **ភាពបត់បែន** | ខ្ពស់ (High)                             | ខ្ពស់ (High)                             | មធ្យម (Moderate)                        |
| **ការគ្រប់គ្រង State** | Pinia (Vue 3), Vuex (Vue 2)             | Redux, Context API                      | RxJS, Services                          |
| **ការប្រើប្រាស់** | Progressive SPAs, Small to Medium Apps | SPAs, Mobile Apps (React Native)        | Enterprise-level SPAs                   |
| **គាំទ្រដោយ** | សហគមន៍ (Community)                     | Facebook                                | Google                                  |

---

## 5. Setup Development Environment

ដើម្បីចាប់ផ្តើមអភិវឌ្ឍន៍ជាមួយ Vue.js អ្នកត្រូវការឧបករណ៍មួយចំនួន៖

* **Node.js:** JavaScript Runtime Environment ដែលអនុញ្ញាតឱ្យអ្នកដំណើរការ JavaScript Code នៅខាងក្រៅ Browser ។ វាក៏ភ្ជាប់មកជាមួយ npm (Node Package Manager) ផងដែរ។
* **npm (Node Package Manager) / yarn:** ឧបករណ៍សម្រាប់គ្រប់គ្រង Package (Libraries) របស់ JavaScript ។
* **VS Code (Visual Studio Code):** Code Editor ដ៏ពេញនិយមមួយដែលមាន Extensions ជាច្រើនសម្រាប់ Vue.js Development ។

**ដើម្បីចាប់ផ្តើមជាមួយ Vue.js អ្នកត្រូវការ:**
- **Node.js** និង **npm** (ឬ **yarn**): សម្រាប់គ្រប់គ្រង Packages។
- **Code Editor**: ដូចជា **Visual Studio Code**។
- **Browser**: Chrome ឬ Firefox ជាមួយ **Vue Devtools** Extension។

**ជំហានដំឡើង:**
1. ដំឡើង Node.js ពី [nodejs.org](https://nodejs.org)។
2. ពិនិត្យ Version: 
   \`\`\`bash
   node -v
   npm -v
   \`\`\`
3. ដំឡើង Vue CLI (សម្រាប់ Vue 2/3) ឬប្រើ Vite (សម្រាប់ Vue 3):
   \`\`\`bash
   npm install -g @vue/cli
   # ឬ
   npm init vue@latest
   \`\`\`
4. បង្កើត Project ថ្មី:
   \`\`\`bash
   vue create my-vue-app
   # ឬ
   npm init vue@latest
   \`\`\`
5. ដំណើរការ Project:
   \`\`\`bash
   cd my-vue-app
   npm run serve
   \`\`\`

**លទ្ធផល:** Application នឹងដំណើរការនៅ \`http://localhost:8080\`។

---

## 6. គន្លឹះសម្រាប់ការចាប់ផ្តើម

- អាន [Vue.js Official Documentation](https://vuejs.org)។
- ដំឡើង **Vue Devtools** សម្រាប់ Debugging។
- ចាប់ផ្តើមជាមួយ Projects តូចៗ ដើម្បីស្វែងយល់ពី Core Concepts។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្ហាញសារសួស្តីជាមួយ Vue.js</h3>
<p>ប្រើ Vue.js CDN ដើម្បីបង្ហាញសារសាមញ្ញ។</p>
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

`,
  ],
  quiz: [
    {
      question: 'តើ `Front-end Framework` ជួយអ្វីខ្លះដល់អ្នកអភិវឌ្ឍន៍?',
      options: [
        'គ្រប់គ្រង Database',
        'បង្កើត Server-side Logic',
        'បង្កើត User Interfaces (UIs) សម្រាប់ Web Applications',
        'គ្រប់គ្រង Network Security'
      ],
      correct: 2,
      explanation: 'Front-end Framework ជួយអ្នកអភិវឌ្ឍន៍បង្កើត User Interfaces (UIs) សម្រាប់ Web Applications ដោយផ្តល់រចនាសម្ព័ន្ធ និងឧបករណ៍។'
    },
    {
      question: 'តើ `Vue.js` ត្រូវបានគេស្គាល់ថាជា Framework ប្រភេទអ្វី?',
      options: [
        'Backend Framework',
        'Database Framework',
        'Progressive JavaScript Framework',
        'CSS Framework'
      ],
      correct: 2,
      explanation: 'Vue.js ត្រូវបានគេស្គាល់ថាជា Progressive JavaScript Framework សម្រាប់បង្កើត User Interfaces ។'
    },
    {
      question: 'តើមួយណា **មិនមែន** ជាមូលហេតុចម្បងក្នុងការប្រើប្រាស់ Vue.js?',
      options: [
        'ងាយស្រួលរៀន',
        'Performance ល្អ',
        'មានភាពបត់បែន',
        'គាំទ្រដោយ Google'
      ],
      correct: 3,
      explanation: 'Vue.js ត្រូវបានគាំទ្រដោយសហគមន៍របស់ខ្លួន ខណៈដែល Angular ត្រូវបានគាំទ្រដោយ Google ។'
    },
    {
      question: 'តើ `Progressive` ក្នុងន័យរបស់ Vue.js មានន័យដូចម្តេច?',
      options: [
        'វាដំណើរការតែលើ Browsers ទំនើបប៉ុណ្ណោះ',
        'អ្នកអាចប្រើ Vue សម្រាប់ផ្នែកតូចមួយនៃ Website ឬសម្រាប់ SPA ពេញលេញមួយ',
        'វាមានទំហំធំ និងស្មុគស្មាញ',
        'វាត្រូវបាន Update ញឹកញាប់'
      ],
      correct: 1,
      explanation: 'Progressive មានន័យថាអ្នកអាចប្រើ Vue សម្រាប់ផ្នែកតូចមួយនៃ Website របស់អ្នក ឬសម្រាប់បង្កើត Single-Page Application (SPA) ពេញលេញមួយ។'
    },
    {
      question: 'តើ `Node.js` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីក្នុងការអភិវឌ្ឍន៍ Front-end?',
      options: [
        'ជា Database Server',
        'ជា Web Server សម្រាប់ Production',
        'ជា JavaScript Runtime Environment ដើម្បីដំណើរការ JavaScript Code នៅខាងក្រៅ Browser',
        'ជា CSS Preprocessor'
      ],
      correct: 2,
      explanation: 'Node.js គឺជា JavaScript Runtime Environment ដែលអនុញ្ញាតឱ្យអ្នកដំណើរការ JavaScript Code នៅខាងក្រៅ Browser ។'
    },
    {
      question: 'តើ `npm` តំណាងឱ្យអ្វី?',
      options: [
        'Node Project Manager',
        'New Package Module',
        'Node Package Manager',
        'Network Protocol Manager'
      ],
      correct: 2,
      explanation: 'npm តំណាងឱ្យ Node Package Manager ដែលជាឧបករណ៍សម្រាប់គ្រប់គ្រង Package របស់ JavaScript ។'
    },
    {
      question: 'តើ `VS Code` ត្រូវបានណែនាំជាអ្វីសម្រាប់ការអភិវឌ្ឍន៍ Vue.js?',
      options: [
        'ជា Web Browser',
        'ជា Database Client',
        'ជា Code Editor',
        'ជា Version Control System'
      ],
      correct: 2,
      explanation: 'VS Code (Visual Studio Code) គឺជា Code Editor ដ៏ពេញនិយមមួយដែលមាន Extensions ជាច្រើនសម្រាប់ Vue.js Development ។'
    },
    {
      question: 'តើ `Component-based` Design ក្នុង Vue.js អនុញ្ញាតឱ្យអ្នកធ្វើអ្វី?',
      options: [
        'សរសេរ Code ទាំងអស់ក្នុង File តែមួយ',
        'បំបែក UI របស់អ្នកទៅជា Components តូចៗដែលអាចប្រើឡើងវិញបាន',
        'បង្កើត Database Schema',
        'គ្រប់គ្រង Server-side Logic'
      ],
      correct: 1,
      explanation: 'Component-based Design អនុញ្ញាតឱ្យអ្នកបំបែក UI របស់អ្នកទៅជា Components តូចៗដែលអាចប្រើឡើងវិញបាន។'
    },
    {
      question: 'តើ `Declarative Rendering` ក្នុង Vue.js មានន័យដូចម្តេច?',
      options: [
        'អ្នកត្រូវតែ Update DOM ដោយដៃ',
        'អ្នកពិពណ៌នាពីអ្វីដែលអ្នកចង់ឱ្យ UI របស់អ្នកមើលទៅដូចម្ដេច ហើយ Vue នឹង Update DOM ដោយស្វ័យប្រវត្តិ',
        'អ្នកសរសេរ Code តាមលំដាប់លំដោយ',
        'អ្នកប្រើប្រាស់ Commands ដើម្បីផ្លាស់ប្តូរ UI'
      ],
      correct: 1,
      explanation: 'Declarative Rendering អនុញ្ញាតឱ្យអ្នកពិពណ៌នាពីអ្វីដែលអ្នកចង់ឱ្យ UI របស់អ្នកមើលទៅដូចម្ដេច ហើយ Vue នឹងដោះស្រាយការ Update DOM ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ Framework មួយណាដែលត្រូវបានគាំទ្រដោយ Facebook?',
      options: [
        'Vue.js',
        'React',
        'Angular',
        'Svelte'
      ],
      correct: 1,
      explanation: 'React គឺជាបណ្ណាល័យដែលគាំទ្រដោយ Facebook ។'
    },
    {
      question: 'តើ Framework មួយណាដែលត្រូវបានគាំទ្រដោយ Google?',
      options: [
        'Vue.js',
        'React',
        'Angular',
        'Ember.js'
      ],
      correct: 2,
      explanation: 'Angular គឺជា Framework ពេញលេញដែលគាំទ្រដោយ Google ។'
    },
    {
      question: 'តើ `yarn` គឺជាអ្វី?',
      options: [
        'ជាភាសាសរសេរកម្មវិធី',
        'ជា Database',
        'ជា Package Manager មួយផ្សេងទៀតសម្រាប់ JavaScript',
        'ជា CSS Framework'
      ],
      correct: 2,
      explanation: 'yarn គឺជា Package Manager មួយផ្សេងទៀតសម្រាប់ JavaScript ដែលស្រដៀងនឹង npm ។'
    },
    {
      question: 'តើ `Single-Page Application (SPA)` គឺជាអ្វី?',
      options: [
        'Application ដែលមានទំព័រតែមួយគត់',
        'Application ដែលផ្ទុកទំព័រឡើងវិញរាល់ពេលមាន Interaction',
        'Application ដែលដំណើរការតែលើ Server',
        'Application ដែលមិនមាន User Interface'
      ],
      correct: 0,
      explanation: 'Single-Page Application (SPA) គឺជា Web Application ដែលផ្ទុកទំព័រតែមួយដង ហើយបន្ទាប់មក Update Content ដោយ Dynamic ដោយមិនចាំបាច់ផ្ទុកទំព័រឡើងវិញ។'
    },
    {
      question: 'តើ `Virtual DOM` ជួយអ្វីខ្លះដល់ Performance របស់ Vue.js?',
      options: [
        'បង្កើនទំហំ File',
        'ធ្វើឱ្យ Application ដំណើរការយឺត',
        'ធ្វើឱ្យការ Update UI កាន់តែលឿន និងមានប្រសិទ្ធភាព',
        'ធ្វើឱ្យ Code កាន់តែស្មុគស្មាញ'
      ],
      correct: 2,
      explanation: 'Vue ប្រើប្រាស់ Virtual DOM ដែលធ្វើឱ្យការ Update UI កាន់តែលឿន និងមានប្រសិទ្ធភាព។'
    },
    {
      question: 'តើ `JavaScript Runtime Environment` អនុញ្ញាតឱ្យអ្នកដំណើរការ JavaScript Code នៅខាងក្រៅ Browser ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ JavaScript Runtime Environment (ដូចជា Node.js) អនុញ្ញាតឱ្យអ្នកដំណើរការ JavaScript Code នៅខាងក្រៅ Browser ។'
    },
    {
      question: 'តើ `Front-end Development` ផ្តោតលើអ្វី?',
      options: [
        'Server-side Logic និង Database',
        'User Interface និង User Experience',
        'Network Infrastructure',
        'Hardware Configuration'
      ],
      correct: 1,
      explanation: 'Front-end Development ផ្តោតលើ User Interface និង User Experience នៃ Web Application ។'
    },
    {
      question: 'តើ `Vue.js` ត្រូវបានរចនាឡើងដើម្បីអាចត្រូវបានអនុវត្តន៍ `បន្តិចម្តងៗ` ទៅក្នុង Project មួយដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Vue.js គឺជា Progressive Framework ដែលមានន័យថាវាអាចត្រូវបានអនុវត្តន៍បន្តិចម្តងៗ។'
    },
    {
      question: 'តើ `Angular` ត្រូវបានចាត់ទុកថាជា Framework ដែលមាន `Learning Curve` ពិបាកជាងគេដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Angular ត្រូវបានចាត់ទុកថាមាន Learning Curve ពិបាកជាងបើប្រៀបធៀបទៅនឹង Vue និង React ។'
    },
    {
      question: 'តើ `React Native` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'សម្រាប់ Backend Development',
        'សម្រាប់ Desktop Applications',
        'សម្រាប់ Mobile Applications',
        'សម្រាប់ Database Management'
      ],
      correct: 2,
      explanation: 'React Native ត្រូវបានប្រើសម្រាប់បង្កើត Mobile Applications ដោយប្រើប្រាស់ React Concepts ។'
    },
    {
      question: 'តើ `npm` និង `yarn` គឺជាឧបករណ៍សម្រាប់ `គ្រប់គ្រង Package` របស់ JavaScript ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ npm និង yarn គឺជាឧបករណ៍សម្រាប់គ្រប់គ្រង Package (Libraries) របស់ JavaScript ។'
    }
  ],
  lab: {
    task: `
បង្កើត Vue.js Project ដំបូងដោយប្រើ Vue CLI និងបង្ហាញសារសួស្តី។

**តម្រូវការ:**

1. **ដំឡើង Vue CLI:**
   - ប្រើ Command: \`npm install -g @vue/cli\`។

2. **បង្កើត Project:**
   - ប្រើ Command: \`vue create my-first-vue-app\`។
   - ជ្រើសរើស **Vue 3** និង Default Preset។

3. **កែ Component:**
   - កែ File \`src/App.vue\` ដើម្បីបង្ហាញ:
     - \`<h1>សួស្តី Vue.js!</h1>\`
     - \`<p>នេះជា Vue Project ដំបូងរបស់ខ្ញុំ។</p>\`

4. **បន្ថែម Styling:**
   - នៅក្នុង \`src/App.vue\`, បន្ថែម \`<style>\` Section ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` សម្រាប់ \`h1\`។
     - \`color: green;\` សម្រាប់ \`p\`។

5. **Run Project:**
   - Run Command: \`npm run serve\`។
   - បើក Browser នៅ \`http://localhost:8080\`។

**ការណែនាំ:** ពិនិត្យ Terminal សម្រាប់ Error Messages។ ប្រើ Vue Devtools ដើម្បីពិនិត្យ Component Structure។
    `,
    solution: `
## src/App.vue 
\`\`\`text
<template>
  <div>
    <h1>សួស្តី Vue.js!</h1>
    <p>នេះជា Vue Project ដំបូងរបស់ខ្ញុំ។</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
h1 {
  font-family: Arial, sans-serif;
}
p {
  color: green;
}
</style>
\`\`\`
`
  }
};

export default VueLesson1_1Content;
