// src/components/lessons/css/CSSLesson5_4.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson5_4Content: LessonContent = {
  title: 'CSS Preprocessors (CSS Preprocessors)',
  objectives: [
    'យល់ដឹងពីគោលគំនិត និងអត្ថប្រយោជន៍នៃ CSS Preprocessors',
    'ស្គាល់ពី Preprocessors ល្បីៗដូចជា Sass/SCSS និង Less',
    'រៀនពីរបៀបប្រើ Variables, Nesting, Mixins, និង Functions នៅក្នុង Sass/SCSS',
    'យល់ដឹងពីរបៀប Compile CSS Preprocessors ទៅជា Standard CSS',
    'អាចសម្រេចចិត្តថាតើពេលណាគួរប្រើ CSS Preprocessors សម្រាប់គម្រោងជាក់លាក់'
  ],
  content: `
# CSS Preprocessors (CSS Preprocessors) 🛠️🚀

---

**CSS Preprocessors** គឺជាភាសា Scripting ដែលពង្រីកសមត្ថភាពរបស់ CSS ដោយបន្ថែមលក្ខណៈពិសេសដែលមិនមាននៅក្នុង Standard CSS ។ ពួកវាអនុញ្ញាតឱ្យអ្នកសរសេរ CSS កាន់តែមានប្រសិទ្ធភាព អាចថែទាំបាន និងមានលក្ខណៈ Programmatic ជាងមុន។ បន្ទាប់ពីសរសេរ Code ជាមួយ Preprocessor អ្នកត្រូវតែ "Compile" (បកប្រែ) វាទៅជា Standard CSS ដែល Browser អាចយល់បាន។

---

## 1. ហេតុអ្វីត្រូវប្រើ CSS Preprocessors?

* **Variables (អថេរ):** អនុញ្ញាតឱ្យអ្នកកំណត់តម្លៃដែលប្រើម្តងហើយម្តងទៀត (ដូចជាពណ៌ Font-size) នៅក្នុងកន្លែងមួយ។
* **Nesting (ការដាក់បញ្ចូលគ្នា):** អនុញ្ញាតឱ្យអ្នកដាក់ CSS Selectors ចូលគ្នាទៅវិញទៅមក ដែលធ្វើឱ្យ Code កាន់តែងាយស្រួលអាន និងរៀបចំ។
* **Mixins (ការបញ្ចូលគ្នា):** អនុញ្ញាតឱ្យអ្នកសរសេរប្លុកនៃ Code CSS ដែលអាចប្រើឡើងវិញបាននៅកន្លែងជាច្រើន។
* **Functions (អនុគមន៍):** អនុញ្ញាតឱ្យអ្នកបង្កើត Logic ផ្ទាល់ខ្លួនសម្រាប់គណនាតម្លៃ។
* **Partials/Imports:** អនុញ្ញាតឱ្យអ្នកបំបែកឯកសារ CSS របស់អ្នកទៅជាឯកសារតូចៗដែលអាចគ្រប់គ្រងបាន (Modularize) ។
* **Operations (ប្រតិបត្តិការ):** អាចធ្វើការគណនាជាមួយតម្លៃ CSS (ឧទាហរណ៍: បូក ដក គុណ ចែក) ។

---

## 2. Sass (Syntactically Awesome Style Sheets)

**Sass** គឺជា Preprocessor CSS ដ៏ពេញនិយមបំផុតមួយ។ វាមាន Syntax ពីរគឺ:

* **Sass (Indented Syntax):** ប្រើ Indentation (ការដាក់ចូល) ជំនួសឱ្យ Braces (\`{}\`) និង Semicolons (\`;\`) ។
* **SCSS (Sassy CSS):** ប្រើ Syntax ដែលស្រដៀងនឹង Standard CSS ច្រើនជាង (ជាមួយ Braces និង Semicolons) ។ SCSS គឺជា Syntax ដែលត្រូវបានណែនាំ និងប្រើប្រាស់ទូលំទូលាយបំផុតនាពេលបច្ចុប្បន្ន។

### លក្ខណៈសំខាន់ៗរបស់ SCSS:

#### 2.1. Variables (អថេរ)

កំណត់តម្លៃដែលអាចប្រើឡើងវិញបាន។ ចាប់ផ្តើមដោយសញ្ញា \`$\` ។

\`\`\`scss
// variables.scss
$primary-color: #3498db;
$font-stack: Arial, sans-serif;
$base-padding: 15px;

// style.scss
.header {
  background-color: $primary-color;
  font-family: $font-stack;
  padding: $base-padding;
}

.button {
  background-color: darken($primary-color, 10%); // Function example
  padding: $base-padding / 2 $base-padding; // Operation example
  color: white;
}
\`\`\`

#### 2.2. Nesting (ការដាក់បញ្ចូលគ្នា)

ដាក់ Selector ចូលគ្នាដើម្បីកាត់បន្ថយភាពដដែលៗ និងធ្វើឱ្យ Code កាន់តែងាយស្រួលអាន។

\`\`\`scss
// style.scss
.navbar {
  background-color: #333;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: inline-block;
      a {
        display: block;
        padding: 15px;
        text-decoration: none;
        color: white;
        &:hover { // & refers to the parent selector (.navbar ul li a)
          background-color: #555;
        }
      }
    }
  }
}
\`\`\`

#### 2.3. Mixins (ការបញ្ចូលគ្នា)

Mixins អនុញ្ញាតឱ្យអ្នកកំណត់ប្លុកនៃ Styles ដែលអាចប្រើឡើងវិញបាននៅកន្លែងជាច្រើនដោយប្រើ \`@include\` ។ ល្អសម្រាប់ Vendor Prefixes ឬ Styles ដែលប្រើម្តងហើយម្តងទៀត។

\`\`\`scss
// mixins.scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

@mixin flexbox($direction: row, $justify: flex-start, $align: stretch) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}

// style.scss
.box {
  @include border-radius(10px);
  background-color: lightgray;
  padding: 20px;
}

.container {
  @include flexbox(column, center, center);
  height: 200px;
}
\`\`\`

#### 2.4. Functions (អនុគមន៍)

Sass មាន Functions ដែលភ្ជាប់មកជាមួយ (built-in functions) ជាច្រើន (ដូចជា \`darken()\`, \`lighten()\`, \`mix()\`) ហើយអ្នកក៏អាចកំណត់ Functions ផ្ទាល់ខ្លួនដោយប្រើ \`@function\` ។

\`\`\`scss
// functions.scss
@function calculate-rem($pixels) {
  @return ($pixels / 16px) * 1rem;
}

// style.scss
.element {
  font-size: calculate-rem(24px); // Output: font-size: 1.5rem;
  padding: calculate-rem(10px);
}
\`\`\`

#### 2.5. Partials and @import (ឯកសាររង និងការនាំចូល)

បំបែក CSS របស់អ្នកទៅជាឯកសារតូចៗ (Partials) ដែលចាប់ផ្តើមដោយ \`_\` (ឧទាហរណ៍: \`_variables.scss\`, \`_mixins.scss\`) ហើយនាំចូលពួកវាទៅក្នុងឯកសារមេដោយប្រើ \`@import\` ។ Sass មិនបង្កើតឯកសារ CSS ដាច់ដោយឡែកសម្រាប់ Partials នោះទេ គឺវាបញ្ចូលពួកវាទៅក្នុងឯកសារមេតែមួយ។

\`\`\`scss
// _variables.scss
$main-font: 'Helvetica Neue', sans-serif;
$text-color: #333;

// _mixins.scss
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

// style.scss
@import 'variables';
@import 'mixins';

body {
  font-family: $main-font;
  color: $text-color;
}

ul {
  @include reset-list;
}
\`\`\`

---

## 3. Less (Leaner Style Sheets)

**Less** គឺជា Preprocessor មួយទៀតដែលមានលក្ខណៈពិសេសស្រដៀងនឹង Sass ដែរ (Variables, Nesting, Mixins, Operations) ។ Syntax របស់វាស្រដៀងនឹង Standard CSS ។

### ឧទាហរណ៍ Less:

\`\`\`less
/* variables.less */
@primary-color: #2980b9;
@font-base: 16px;

/* style.less */
@import "variables.less";

.header {
  background-color: @primary-color;
  font-size: @font-base * 1.5; /* Operations */
}

.button {
  background-color: darken(@primary-color, 10%); /* Function */
  padding: 10px 20px;

  /* Nesting */
  &:hover {
    opacity: 0.8;
  }
}

/* Mixin */
.bordered(@width: 1px, @color: black) {
  border: @width solid @color;
}

.box {
  .bordered(2px, red); /* Include Mixin */
  margin: 10px;
}
\`\`\`

---

## 4. ដំណើរការ Compile (Compilation Process)

ដើម្បីប្រើ CSS Preprocessors អ្នកត្រូវការ Compiler ។ Compiler អាន Code Preprocessor របស់អ្នក ហើយបកប្រែវាទៅជា Standard CSS ។

* **Sass/SCSS:**
    * **Node.js (Recommended):** ប្រើ \`sass\` package (Dart Sass) ។ \`npm install -g sass\` បន្ទាប់មក \`sass input.scss output.css\` ។
    * **GUI Tools:** Koala, CodeKit, Prepros ។
    * **Build Tools:** Webpack, Gulp, Grunt (ជាមួយ Plugins ដូចជា \`sass-loader\`) ។
    * **Editors:** VS Code មាន Extensions ដូចជា "Live Sass Compiler" ។

* **Less:**
    * **Node.js:** ប្រើ \`less\` package ។ \`npm install -g less\` បន្ទាប់មក \`lessc input.less output.css\` ។
    * **GUI Tools/Build Tools/Editors:** ស្រដៀងនឹង Sass ។

### ឧទាហរណ៍ Compile:

ប្រសិនបើអ្នកមានឯកសារ \`main.scss\` បែបនេះ:

\`\`\`scss
// main.scss
$text-color: #2c3e50;
$spacing-unit: 10px;

body {
  font-family: Arial, sans-serif;
  color: $text-color;
  padding: $spacing-unit * 2;

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: $spacing-unit;

    h1 {
      color: lighten($text-color, 20%);
      margin-bottom: $spacing-unit;
    }
  }
}
\`\`\`

បន្ទាប់ពី Compile ដោយប្រើ \`sass main.scss main.css\` លទ្ធផល \`main.css\` នឹងមើលទៅដូចនេះ:

\`\`\`css
/* main.css (Compiled from main.scss) */
body {
  font-family: Arial, sans-serif;
  color: #2c3e50;
  padding: 20px;
}
body .container {
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
}
body .container h1 {
  color: #557599; /* #2c3e50 lightened by 20% */
  margin-bottom: 10px;
}
\`\`\`

---

## 5. គុណសម្បត្តិ និងគុណវិបត្តិ

| លក្ខណៈ             | CSS Preprocessors                                 | Standard CSS (Direct)                            |
| :----------------- | :------------------------------------------------ | :----------------------------------------------- |
| **គុណសម្បត្តិ** | - អាចថែទាំបានខ្ពស់ <br> - កាត់បន្ថយភាពដដែលៗ <br> - Code កាន់តែមានរចនាសម្ព័ន្ធ <br> - លក្ខណៈ Programmatic <br> - ងាយស្រួលធ្វើការជាមួយក្រុម | - មិនត្រូវការ Compile <br> - ងាយស្រួលរៀនសម្រាប់អ្នកចាប់ផ្តើមដំបូង <br> - ដំណើរការដោយផ្ទាល់ក្នុង Browser |
| **គុណវិបត្តិ** | - ត្រូវការ Compile (Build Process) <br> - Learning Curve <br> - ពិបាក Debug (បើគ្មាន Source Maps) <br> - អាចបង្កើត CSS ធំបើប្រើមិនត្រឹមត្រូវ | - ភាពដដែលៗច្រើន <br> - ពិបាកថែទាំសម្រាប់គម្រោងធំៗ <br> - ខ្វះ Variables, Mixins ជាដើម <br> - Code អាចរញ៉េរញ៉ៃ |

---

> **គន្លឹះ:** សម្រាប់គម្រោងធំៗ ឬគម្រោងដែលមានទំហំ Code CSS ច្រើន CSS Preprocessors គឺជាឧបករណ៍ដ៏មានប្រសិទ្ធភាពមួយ។ សម្រាប់គម្រោងតូចៗ ឬការរៀនដំបូង CSS សុទ្ធក៏នៅតែជាជម្រើសដ៏ល្អ។
`,
  examples: [
    `<h3>ឧទាហរណ៍ SCSS ជាមួយ Variables និង Nesting</h3>
<pre><code class="language-scss">
// _variables.scss
$primary-color: #007bff;
$font-family: Arial, sans-serif;
$spacing-base: 10px;

// main.scss
@import 'variables';

body {
  font-family: $font-family;
  color: #333;
  padding: $spacing-base * 2; // Calculation example

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: $spacing-base;
    border: 1px solid lighten($primary-color, 30%); // Function example
    border-radius: 5px;

    h1 {
      color: $primary-color;
      margin-bottom: $spacing-base;
    }

    button {
      background-color: $primary-color;
      color: white;
      padding: $spacing-base / 2 $spacing-base;
      border: none;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
  }
}
</code></pre>
<p><b>លទ្ធផល CSS ដែលបាន Compile (ដោយសន្មត់ថា \`main.scss\` ត្រូវបាន Compile):</b></p>
<pre><code class="language-css">
/* main.css (Compiled from main.scss) */
body {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
}
body .container {
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #73bfff;
  border-radius: 5px;
}
body .container h1 {
  color: #007bff;
  margin-bottom: 10px;
}
body .container button {
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
body .container button:hover {
  background-color: #0062cc; /* Darkened color */
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍ SCSS Mixins</h3>
<pre><code class="language-scss">
// _mixins.scss
@mixin center-element {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin card-style($bg-color: white, $padding: 20px) {
  background-color: $bg-color;
  padding: $padding;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

// components.scss
@import 'mixins';

.page-center {
  height: 100vh;
  @include center-element; // Using mixin
}

.product-card {
  width: 300px;
  margin: 20px;
  @include card-style(#f8f8f8, 25px); // Using mixin with custom values
  text-align: center;

  h2 {
    color: #4CAF50;
  }
}
</code></pre>
<p><b>លទ្ធផល CSS ដែលបាន Compile (ដោយសន្មត់ថា \`components.scss\` ត្រូវបាន Compile):</b></p>
<pre><code class="language-css">
/* components.css (Compiled from components.scss) */
.page-center {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-card {
  width: 300px;
  margin: 20px;
  background-color: #f8f8f8;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.product-card h2 {
  color: #4CAF50;
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ CSS Preprocessors ជាអ្វី?',
      options: [
        'ជា Browser Extension សម្រាប់ Styling',
        'ជាភាសា Scripting ដែលពង្រីកសមត្ថភាពរបស់ CSS',
        'ជា Framework CSS មួយប្រភេទ',
        'ជាឧបករណ៍សម្រាប់ Testing CSS Code'
      ],
      correct: 1,
      explanation: 'CSS Preprocessors គឺជាភាសា Scripting ដែលពង្រីកសមត្ថភាពរបស់ CSS ដោយបន្ថែមលក្ខណៈពិសេសដែលមិនមាននៅក្នុង Standard CSS ។'
    },
    {
      question: 'តើអ្វីជាជំហានចាំបាច់បន្ទាប់ពីសរសេរ Code ជាមួយ Preprocessor ដើម្បីឱ្យ Browser អាចយល់បាន?',
      options: [
        'Upload ទៅ Server',
        'Compile វាទៅជា Standard CSS',
        'ភ្ជាប់វាទៅ JavaScript',
        'ប្តូរឈ្មោះឯកសារទៅជា .html'
      ],
      correct: 1,
      explanation: 'បន្ទាប់ពីសរសេរ Code ជាមួយ Preprocessor អ្នកត្រូវតែ "Compile" (បកប្រែ) វាទៅជា Standard CSS ដែល Browser អាចយល់បាន។'
    },
    {
      question: 'តើ Sass មាន Syntax ប៉ុន្មានប្រភេទ?',
      options: [
        'មួយប្រភេទគឺ SCSS',
        'ពីរប្រភេទគឺ Sass (Indented Syntax) និង SCSS',
        'បីប្រភេទគឺ Sass, Less, Stylus',
        'គ្មាន Syntax ជាក់លាក់ទេ'
      ],
      correct: 1,
      explanation: 'Sass មាន Syntax ពីរគឺ Sass (Indented Syntax) និង SCSS (Sassy CSS) ។'
    },
    {
      question: 'តើអថេរ (Variables) នៅក្នុង Sass/SCSS ចាប់ផ្តើមដោយសញ្ញាអ្វី?',
      options: [
        '`@`',
        '`#`',
        '`$`',
        '`&`'
      ],
      correct: 2,
      explanation: 'អថេរ (Variables) នៅក្នុង Sass/SCSS ចាប់ផ្តើមដោយសញ្ញា `$` ។'
    },
    {
      question: 'តើ Nesting នៅក្នុង CSS Preprocessors មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'ធ្វើឱ្យ CSS File មានទំហំធំ',
        'ធ្វើឱ្យ Code កាន់តែងាយស្រួលអាន និងរៀបចំដោយដាក់ Selector ចូលគ្នា',
        'លុបបំបាត់តម្រូវការសម្រាប់ Classes',
        'បង្កើត Animations នៅក្នុង CSS'
      ],
      correct: 1,
      explanation: 'Nesting អនុញ្ញាតឱ្យអ្នកដាក់ CSS Selectors ចូលគ្នាទៅវិញទៅមក ដែលធ្វើឱ្យ Code កាន់តែងាយស្រួលអាន និងរៀបចំ។'
    },
    {
      question: 'តើ Mixins ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'សម្រាប់កំណត់អថេរ',
        'សម្រាប់បង្កើត Elements HTML',
        'សម្រាប់សរសេរប្លុកនៃ Code CSS ដែលអាចប្រើឡើងវិញបាននៅកន្លែងជាច្រើន',
        'សម្រាប់ Compile CSS Code'
      ],
      correct: 2,
      explanation: 'Mixins អនុញ្ញាតឱ្យអ្នកសរសេរប្លុកនៃ Code CSS ដែលអាចប្រើឡើងវិញបាននៅកន្លែងជាច្រើនដោយប្រើ `@include` ។'
    },
    {
      question: 'តើ Partials នៅក្នុង Sass/SCSS ត្រូវបានដាក់ឈ្មោះដោយចាប់ផ្តើមដោយសញ្ញាអ្វី?',
      options: [
        '`#`',
        '`@`',
        '`$`',
        '`_`'
      ],
      correct: 3,
      explanation: 'Partials នៅក្នុង Sass/SCSS ត្រូវបានដាក់ឈ្មោះដោយចាប់ផ្តើមដោយសញ្ញា `_` (ឧទាហរណ៍: `_variables.scss`) ។'
    },
    {
      question: 'តើ `@import` directive នៅក្នុង Sass/SCSS ធ្វើអ្វី?',
      options: [
        'នាំចូល JavaScript File',
        'នាំចូល Font ពីខាងក្រៅ',
        'នាំចូល Partials ទៅក្នុងឯកសារមេ ហើយបញ្ចូលពួកវាទៅក្នុងឯកសារ CSS តែមួយ',
        'ផ្ទុក CSS File ពី CDN'
      ],
      correct: 2,
      explanation: '`@import` directive នៅក្នុង Sass/SCSS នាំចូល Partials ទៅក្នុងឯកសារមេ ហើយ Sass Compiler នឹងបញ្ចូលពួកវាទៅក្នុងឯកសារ CSS តែមួយ។'
    },
    {
      question: 'តើមួយណាជាឧបករណ៍ Compiler សម្រាប់ Sass/SCSS?',
      options: [
        'Chrome Browser',
        '`sass` package (Dart Sass)',
        'HTML Validator',
        'Visual Studio Code'
      ],
      correct: 1,
      explanation: '`sass` package (Dart Sass) គឺជាឧបករណ៍ Compiler ដ៏ពេញនិយមសម្រាប់ Sass/SCSS ។'
    },
    {
      question: 'តើ `&` (Ampersand) នៅក្នុង Nesting របស់ Sass/SCSS សំដៅទៅលើអ្វី?',
      options: [
        'ជា Class ថ្មី',
        'ជា ID ថ្មី',
        'ជា Parent Selector (Selector មេ)',
        'ជា Element បងប្អូន'
      ],
      correct: 2,
      explanation: '`&` (Ampersand) នៅក្នុង Nesting របស់ Sass/SCSS សំដៅទៅលើ Parent Selector (Selector មេ) ។'
    },
    {
      question: 'តើ Less Preprocessor ប្រើ Syntax ស្រដៀងទៅនឹងភាសាអ្វី?',
      options: [
        'JavaScript',
        'HTML',
        'Standard CSS',
        'Python'
      ],
      correct: 2,
      explanation: 'Syntax របស់ Less ស្រដៀងនឹង Standard CSS ច្រើនជាង។'
    },
    {
      question: 'តើ Functions នៅក្នុង Sass ដូចជា `darken()` ឬ `lighten()` ធ្វើអ្វី?',
      options: [
        'ផ្លាស់ប្តូរទំហំ Font',
        'ផ្លាស់ប្តូរ Background Image',
        'ផ្លាស់ប្តូរពន្លឺនៃពណ៌ (ងងឹត ឬស្រាល)',
        'បន្ថែម Shadow ទៅ Element'
      ],
      correct: 2,
      explanation: 'Functions ដូចជា `darken()` ឬ `lighten()` នៅក្នុង Sass ត្រូវបានប្រើដើម្បីផ្លាស់ប្តូរពន្លឺនៃពណ៌។'
    },
    {
      question: 'តើអ្វីជាគុណវិបត្តិនៃការប្រើប្រាស់ CSS Preprocessors បើប្រៀបធៀបនឹង Standard CSS?',
      options: [
        'ធ្វើឱ្យ Code កាន់តែរញ៉េរញ៉ៃ',
        'មិនគាំទ្រ Responsive Design',
        'ទាមទារដំណើរការ Compile (Build Process)',
        'មិនអនុញ្ញាតឱ្យប្រើ Variables'
      ],
      correct: 2,
      explanation: 'គុណវិបត្តិនៃ CSS Preprocessors គឺវាទាមទារដំណើរការ Compile (Build Process) ដើម្បីបកប្រែទៅជា Standard CSS ។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិចម្បងនៃ CSS Preprocessors សម្រាប់គម្រោងធំៗ?',
      options: [
        'កាត់បន្ថយការប្រើប្រាស់ JavaScript',
        'កាត់បន្ថយភាពដដែលៗ និងធ្វើឱ្យ Code អាចថែទាំបានខ្ពស់',
        'ធ្វើឱ្យគេហទំព័រផ្ទុកលឿនដោយមិនចាំបាច់ Optimization',
        'ជួយរចនា Layouts ដោយស្វ័យប្រវត្តិ'
      ],
      correct: 1,
      explanation: 'សម្រាប់គម្រោងធំៗ CSS Preprocessors ជួយកាត់បន្ថយភាពដដែលៗនៃ Code និងធ្វើឱ្យ Code កាន់តែមានរចនាសម្ព័ន្ធ និងអាចថែទាំបានខ្ពស់។'
    },
    {
      question: 'តើ `sourcemaps` ជួយអ្វីខ្លះក្នុងការ Debugging CSS Preprocessor code?',
      options: [
        'វាលុបចោលកំហុសដោយស្វ័យប្រវត្តិ',
        'វាបង្ហាញ CSS ដែលបាន Compile តែប៉ុណ្ណោះ',
        'វាអនុញ្ញាតឱ្យអ្នកមើល Code Preprocessor ដើមនៅក្នុង Browser Developer Tools ទោះបីជាវាជា CSS ដែលបាន Compile ក៏ដោយ',
        'វាប្តូរឈ្មោះ Variables ដើម្បីជៀសវាងកំហុស'
      ],
      correct: 2,
      explanation: 'Sourcemaps អនុញ្ញាតឱ្យអ្នកមើល Code Preprocessor ដើមនៅក្នុង Browser Developer Tools (ដូចជា Sass/SCSS file និង Line Number) ទោះបីជា Browser កំពុងដំណើរការ CSS ដែលបាន Compile ក៏ដោយ ធ្វើឱ្យការ Debugging កាន់តែងាយស្រួល។'
    },
    {
      question: 'តើមួយណាជាឧទាហរណ៍នៃ Operator ក្នុង Sass/SCSS?',
      options: [
        '`@function`',
        '`+` (បូក), `-` (ដក), `*` (គុណ), `/` (ចែក)',
        '`@include`',
        '`$`'
      ],
      correct: 1,
      explanation: 'Sass/SCSS អនុញ្ញាតឱ្យអ្នកប្រើ Operators គណិតវិទ្យាដូចជា `+`, `-`, `*`, `/` នៅក្នុងតម្លៃ CSS របស់អ្នក។'
    },
    {
      question: 'តើ "Dart Sass" គឺជាអ្វី?',
      options: [
        'ជាប្រភេទ Font ថ្មីសម្រាប់ Sass',
        'ជា Compiler សំខាន់ និងត្រូវបានណែនាំសម្រាប់ Sass',
        'ជា Library JavaScript សម្រាប់ Sass',
        'ជា Framework CSS ដែលប្រើ Sass'
      ],
      correct: 1,
      explanation: 'Dart Sass គឺជា Compiler សំខាន់ និងត្រូវបានណែនាំសម្រាប់ Sass ដែលផ្តល់នូវដំណើរការល្អបំផុត និងភាពត្រូវគ្នាល្អបំផុត។'
    },
    {
      question: 'ហេតុអ្វីបានជាគេប្រើ `_` (underscore) នៅដើមឈ្មោះឯកសារ Partial ក្នុង Sass/SCSS?',
      options: [
        'ដើម្បីបង្ហាញថាវាជាឯកសារសំខាន់',
        'ដើម្បីប្រាប់ Compiler ថាកុំ Compile ឯកសារនេះដោយផ្ទាល់ទៅជា CSS ដាច់ដោយឡែក',
        'ដើម្បីលាក់ឯកសារពី User',
        'វាជាតម្រូវការសម្រាប់ Version ចាស់ៗរបស់ Sass'
      ],
      correct: 1,
      explanation: 'Underscore (`_`) នៅដើមឈ្មោះឯកសារ Partial ប្រាប់ Sass Compiler ថាកុំ Compile ឯកសារនោះដោយផ្ទាល់ទៅជា CSS ដាច់ដោយឡែក។ វាត្រូវបានបម្រុងទុកសម្រាប់ Import ទៅក្នុងឯកសារ Sass ផ្សេងទៀត។'
    },
    {
      question: 'តើគំនិត "DRY" (Don\'t Repeat Yourself) ត្រូវបានអនុវត្តដោយ CSS Preprocessors យ៉ាងដូចម្តេច?',
      options: [
        'ដោយលុបបំបាត់រាល់ CSS Code',
        'ដោយការប្រើប្រាស់ Variables, Mixins, និង Nesting ដើម្បីកាត់បន្ថយភាពដដែលៗនៃ Code',
        'ដោយបង្ខំអ្នកឱ្យសរសេរ Styles ក្នុង HTML ដោយផ្ទាល់',
        'ដោយប្រើ CSS Frameworks តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'CSS Preprocessors ជួយអនុវត្តគោលការណ៍ "DRY" (Don\'t Repeat Yourself) តាមរយៈការប្រើប្រាស់ Variables, Mixins, Nesting និង Partials ដែលកាត់បន្ថយភាពដដែលៗនៃ Code និងធ្វើឱ្យវាមានភាពងាយស្រួលក្នុងការថែទាំ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ Sass/SCSS ចំនួនពីរគឺ \`main.scss\` និង \`_variables.scss\` រួច Compile វាទៅជា \`style.css\` ។

**តម្រូវការ:**

1.  **បង្កើតឯកសារ \`_variables.scss\`:**
    * កំណត់អថេរសម្រាប់ពណ៌: \`$primary-color: #4CAF50;\` (បៃតង)
    * កំណត់អថេរសម្រាប់ Font Family: \`$font-stack: 'Roboto', sans-serif;\`
    * កំណត់អថេរសម្រាប់ Base Spacing: \`$base-spacing: 16px;\`
    * កំណត់អថេរសម្រាប់ Border Radius: \`$border-radius: 8px;\`

2.  **បង្កើតឯកសារ \`main.scss\`:**
    * **Import** ឯកសារ \`_variables.scss\` ។
    * **Base Styles:**
        * សម្រាប់ \`body\`:
            * កំណត់ \`font-family\` ទៅ \`$font-stack\` ។
            * កំណត់ \`line-height\` ទៅ \`1.6\` ។
            * កំណត់ \`color\` ទៅ \`#333\` ។
            * កំណត់ \`background-color\` ទៅ \`#f9f9f9\` ។
            * កំណត់ \`margin\` ទៅ \`0\` ។
    * **Container Style (Nesting):**
        * នៅខាងក្នុង \`body\`, Nest Selector \`.container\` ។
        * កំណត់ \`max-width: 960px;\` ។
        * កំណត់ \`margin: 20px auto;\` ។
        * កំណត់ \`padding\` ទៅ \`$base-spacing\` ។
        * កំណត់ \`background-color: white;\` ។
        * កំណត់ \`border-radius\` ទៅ \`$border-radius\` ។
        * កំណត់ \`box-shadow: 0 2px 10px rgba(0,0,0,0.1);\` ។
    * **Header Style (Nesting):**
        * នៅខាងក្នុង \`.container\`, Nest Selector \`h1\` ។
        * កំណត់ \`color\` ទៅ \`$primary-color\` ។
        * កំណត់ \`text-align: center;\` ។
        * កំណត់ \`margin-bottom\` ទៅ \`$base-spacing\` ។
    * **Button Style (Nesting & Mixin Concept - without actual mixin for simplicity):**
        * នៅខាងក្នុង \`.container\`, Nest Selector \`.btn\` ។
        * កំណត់ \`display: inline-block;\` ។
        * កំណត់ \`background-color\` ទៅ \`$primary-color\` ។
        * កំណត់ \`color: white;\` ។
        * កំណត់ \`padding\` ទៅ \`($base-spacing / 2) $base-spacing;\` (ប្រើ Operation) ។
        * កំណត់ \`border: none;\` ។
        * កំណត់ \`border-radius\` ទៅ \`4px;\` ។
        * កំណត់ \`cursor: pointer;\` ។
        * **Nesting for hover state:**
            * Nest \`&:hover\` នៅខាងក្នុង \`.btn\` ។
            * កំណត់ \`background-color\` ទៅ \`darken($primary-color, 10%);\` (ប្រើ Function) ។

3.  **រៀបចំ HTML សម្រាប់បង្ហាញលទ្ធផល:**
    * បង្កើតឯកសារ \`index.html\` ។
    * ភ្ជាប់ឯកសារ CSS ដែលបាន Compile (\`style.css\`) ទៅក្នុង \`index.html\` ។
    * បង្កើតរចនាសម្ព័ន្ធ HTML សាមញ្ញដែលមាន \`<body>\`, \`<div class="container">\`, \`<h1>\`, \`<p>\`, និង \`<button class="btn">\` ដើម្បីបង្ហាញ Styles ។

**ចំណាំ:** សម្រាប់ការអនុវត្តជាក់ស្តែង អ្នកនឹងត្រូវការ Compiler (ដូចជា Node.js Sass CLI ឬ Live Sass Compiler Extension ក្នុង VS Code) ដើម្បី Compile \`main.scss\` ទៅជា \`style.css\`។ សម្រាប់គោលបំណង Lab នេះ អ្នកអាចបង្ហាញ Code SCSS និង CSS ដែលបាន Compile ជាលាយលក្ខណ៍អក្សរ។

`,
    solution: `
**1. ឯកសារ: \`_variables.scss\`**
\`\`\`scss
// _variables.scss
$primary-color: #4CAF50; // Green color
$font-stack: 'Roboto', sans-serif;
$base-spacing: 16px;
$border-radius: 8px;
\`\`\`

**2. ឯកសារ: \`main.scss\`**
\`\`\`scss
// main.scss
@import 'variables'; // Import the variables partial

// Base Styles
body {
  font-family: $font-stack;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  margin: 0;

  // Container Style (Nesting)
  .container {
    max-width: 960px;
    margin: 20px auto;
    padding: $base-spacing;
    background-color: white;
    border-radius: $border-radius;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);

    // Header Style (Nesting)
    h1 {
      color: $primary-color;
      text-align: center;
      margin-bottom: $base-spacing;
    }

    // Button Style (Nesting & Operations)
    .btn {
      display: inline-block;
      background-color: $primary-color;
      color: white;
      padding: ($base-spacing / 2) $base-spacing; // Using operation
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none; /* For anchor tags used as buttons */
      transition: background-color 0.3s ease; /* Smooth transition */

      // Nesting for hover state (using function)
      &:hover {
        background-color: darken($primary-color, 10%); // Using Sass function
      }
    }
  }
}
\`\`\`

**3. លទ្ធផល CSS ដែលបាន Compile: \`style.css\`**
(នេះគឺជាលទ្ធផលដែលទទួលបានបន្ទាប់ពី Compile \`main.scss\` ដោយប្រើ \`sass main.scss style.css\` )
\`\`\`css
/* style.css (Compiled from main.scss) */
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  margin: 0;
}
body .container {
  max-width: 960px;
  margin: 20px auto;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
body .container h1 {
  color: #4CAF50;
  text-align: center;
  margin-bottom: 16px;
}
body .container .btn {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
body .container .btn:hover {
  background-color: #3e8e41; /* #4CAF50 darkened by 10% */
}
\`\`\`

**4. ឯកសារ: \`index.html\`**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Preprocessors Lab</title>
  <link rel="stylesheet" href="style.css"> <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* Add any additional CSS specific to this HTML for demonstration if needed */
    /* This section would typically be empty if all styles are from the compiled CSS */
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to Our Website!</h1>
    <p>This page demonstrates the power of CSS preprocessors (Sass/SCSS) for cleaner and more maintainable stylesheets.</p>
    <p>Notice how variables, nesting, and functions make the CSS code more organized and efficient.</p>
    <a href="#" class="btn">Learn More About CSS</a>
    <p style="margin-top: 20px;">Try resizing your browser window to see how elements adapt (though this specific lab focuses on preprocessor features, not responsiveness via media queries).</p>
  </div>
</body>
</html>
\`\`\`
`
  }
};

export default CSSLesson5_4Content;