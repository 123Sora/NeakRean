// src/components/lessons/css/CSSLesson5_5.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson5_5Content: LessonContent = {
  title: 'CSS Methodologies (វិធីសាស្រ្ត CSS)',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ CSS Methodologies ក្នុងការអភិវឌ្ឍន៍ទ្រង់ទ្រាយធំ',
    'ស្គាល់ពីគោលគំនិត និងគោលការណ៍នៃ BEM (Block, Element, Modifier)',
    'ស្គាល់ពីគោលគំនិត និងគោលការណ៍នៃ OOCSS (Object-Oriented CSS)',
    'ស្គាល់ពីគោលគំនិត និងគោលការណ៍នៃ SMACSS (Scalable and Modular Architecture for CSS)',
    'យល់ដឹងពីគុណសម្បត្តិ និងគុណវិបត្តិនៃវិធីសាស្រ្តនីមួយៗ',
    'អាចសម្រេចចិត្តថាតើ Methodologies មួយណាដែលស័ក្តិសមសម្រាប់គម្រោងជាក់លាក់'
  ],
  content: `
# CSS Methodologies (វិធីសាស្រ្ត CSS) 🎯🧩

---

**CSS Methodologies** គឺជាសំណុំនៃគោលការណ៍ និងការណែនាំដែលជួយរៀបចំ និងគ្រប់គ្រង Code CSS របស់អ្នក ជាពិសេសសម្រាប់គម្រោងធំៗ ឬក្រុមការងារ។ គោលបំណងចម្បងគឺដើម្បីធ្វើឱ្យ CSS កាន់តែងាយស្រួលថែទាំ អាចពង្រីកបាន (scalable) និងអាចប្រើឡើងវិញបាន។

---

## 1. ហេតុអ្វីចាំបាច់ CSS Methodologies?

* **ភាពងាយស្រួលក្នុងការថែទាំ (Maintainability):** កាត់បន្ថយភាពស្មុគស្មាញ និងធ្វើឱ្យវាកាន់តែងាយស្រួលក្នុងការស្វែងរក និងកែប្រែ Code ។
* **ភាពអាចពង្រីកបាន (Scalability):** អនុញ្ញាតឱ្យគម្រោងរីកធំដោយមិនមានការ Conflict ឬបញ្ហា Performance ។
* **ភាពអាចប្រើឡើងវិញបាន (Reusability):** លើកទឹកចិត្តឱ្យមានការបង្កើត Components ដែលអាចប្រើប្រាស់ឡើងវិញបាន។
* **ភាពស៊ីសង្វាក់គ្នា (Consistency):** ធានាថា Code ត្រូវបានសរសេរតាមស្តង់ដារដូចគ្នាដោយសមាជិកក្រុម។
* **ការទប់ស្កាត់ការ Conflict:** កាត់បន្ថយឱកាសនៃការប៉ះទង្គិចគ្នារវាង Styles ។

---

## 2. BEM (Block, Element, Modifier)

**BEM** គឺជាវិធីសាស្រ្តដាក់ឈ្មោះ Class ដែលមានប្រជាប្រិយភាព និងរឹងមាំ ដែលជួយបង្កើត CSS ដែលអាចប្រើឡើងវិញបាន និងអាចយល់បាន។ វារៀបចំ UI ទៅជាប្លុកឯករាជ្យ។

* **Block (ប្លុក):** ធាតុឯករាជ្យ និងអាចប្រើឡើងវិញបាន។ (ឧទាហរណ៍: \`card\`, \`button\`, \`header\`, \`menu\`) ។ Class Name គឺឈ្មោះ Block របស់វា។
* **Element (ធាតុ):** ផ្នែកមួយនៃ Block ដែលមិនអាចប្រើប្រាស់ដោយឯករាជ្យបាន។ (ឧទាហរណ៍: \`card__title\`, \`menu__item\`, \`button__icon\`) ។ Class Name ប្រើ \`__\` (double underscore) ។
* **Modifier (កែប្រែ):** ប៉ារ៉ាម៉ែត្រសម្រាប់ Block ឬ Element ដែលផ្លាស់ប្តូររូបរាង ឬអាកប្បកិរិយារបស់វា។ (ឧទាហរណ៍: \`button--primary\`, \`card--large\`, \`menu__item--active\`) ។ Class Name ប្រើ \`--\` (double hyphen) ។

### ឧទាហរណ៍ BEM:

\`\`\`html
<div class="card">
  <div class="card__header">
    <h2 class="card__title">Product Title</h2>
  </div>
  <div class="card__body">
    <p class="card__description">This is a product description.</p>
    <button class="button button--primary">Buy Now</button>
  </div>
  <div class="card card--disabled">
    </div>
</div>

<form class="search-form">
  <input type="text" class="search-form__input" placeholder="Search...">
  <button class="search-form__button search-form__button--icon">
    <i class="search-form__icon">🔍</i>
  </button>
</form>
\`\`\`

\`\`\`css
/* CSS សម្រាប់ BEM */
.card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  background-color: white;
}
.card__header {
  margin-bottom: 10px;
}
.card__title {
  font-size: 1.5em;
  color: #333;
}
.card__description {
  color: #555;
}
.card--disabled {
  opacity: 0.6;
  pointer-events: none;
  background-color: #f0f0f0;
}

.button {
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
}
.button--primary {
  background-color: #007bff;
  color: white;
}
.button--secondary {
  background-color: #6c757d;
  color: white;
}

.search-form {
  display: flex;
  margin: 20px 0;
}
.search-form__input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.search-form__button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 12px;
  border-radius: 4px;
  margin-left: 5px;
  cursor: pointer;
}
.search-form__button--icon .search-form__icon {
  font-size: 1.2em;
}
\`\`\`

**គុណសម្បត្តិ BEM:**
* **អាចយល់បាន:** ឈ្មោះ Class ផ្តល់ព័ត៌មានច្បាស់លាស់អំពីគោលបំណងរបស់ Element ។
* **ភាពឯករាជ្យ:** Block អាចត្រូវបានប្រើឡើងវិញនៅគ្រប់ទីកន្លែងដោយមិនប៉ះពាល់ដល់គ្នាទៅវិញទៅមក។
* **ភាពងាយស្រួលក្នុងការសហការ:** ក្រុមការងារអាចធ្វើការដោយមិនបារម្ភពីការ Conflict ។

**គុណវិបត្តិ BEM:**
* **ឈ្មោះ Class វែង:** Class Names អាចវែងណាស់។
* **អាចធ្វើឱ្យ HTML មានភាពច្របូកច្របល់:** HTML អាចមាន Class ច្រើន។

---

## 3. OOCSS (Object-Oriented CSS)

**OOCSS** ផ្តោតលើគោលការណ៍ពីរគឺ **Separation of Structure from Skin** (បំបែករចនាសម្ព័ន្ធពីស្បែក) និង **Separation of Container from Content** (បំបែក Container ពីមាតិកា) ។

* **Separation of Structure from Skin:**
    * **Structure:** រចនាបថដែលទាក់ទងនឹង Layout, Spacing, Positioning (ឧទាហរណ៍: \`media-object\`, \`button-base\`) ។
    * **Skin:** រចនាបថដែលទាក់ទងនឹង Aesthetics, Visuals (ឧទាហរណ៍: \`btn-primary\`, \`border-dashed\`, \`text-red\`) ។
    * គំនិតគឺថាអ្នកអាចផ្លាស់ប្តូរ "Skin" របស់ Object ដោយមិនប៉ះពាល់ដល់ "Structure" របស់វា។

* **Separation of Container from Content:**
    * Object គួរតែមើលទៅដូចគ្នាដោយមិនគិតពីកន្លែងដែលវាត្រូវបានដាក់ (Context ឯករាជ្យ) ។
    * ជៀសវាងការប្រើ Selector ដែលអាស្រ័យលើទីតាំង (ឧទាហរណ៍: \`.sidebar h3\` )។

### ឧទាហរណ៍ OOCSS:

\`\`\`html
<div class="media">
  <img src="avatar.jpg" alt="User" class="media__img">
  <div class="media__body">
    <h3 class="media__title">User Name</h3>
    <p class="media__text">User's comment or description.</p>
  </div>
</div>

<button class="btn btn--flat btn--red">Delete</button>
<button class="btn btn--rounded btn--blue">Submit</button>
\`\`\`

\`\`\`css
/* CSS សម្រាប់ OOCSS */

/* Structure: Media Object */
.media {
  display: flex;
  align-items: flex-start;
  margin: 15px;
  padding: 10px;
  border: 1px solid #eee;
}
.media__img {
  width: 64px;
  height: 64px;
  margin-right: 15px;
  border-radius: 50%;
  flex-shrink: 0; /* Prevent image from shrinking */
}
.media__body {
  flex-grow: 1;
}
.media__title {
  margin-top: 0;
  margin-bottom: 5px;
}
.media__text {
  font-size: 0.9em;
  color: #777;
}

/* Structure: Button Base */
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

/* Skin: Button Styles */
.btn--flat {
  border-radius: 0;
}
.btn--rounded {
  border-radius: 20px;
}
.btn--red {
  background-color: #e74c3c;
  color: white;
}
.btn--blue {
  background-color: #3498db;
  color: white;
}
\`\`\`

**គុណសម្បត្តិ OOCSS:**
* **កាត់បន្ថយ CSS:** ការប្រើប្រាស់ Styles ដែលអាចប្រើឡើងវិញបានកាត់បន្ថយទំហំ CSS ។
* **ភាពអាចប្រើឡើងវិញបាន:** Objects ត្រូវបានបង្កើតឡើងដើម្បីប្រើប្រាស់ឡើងវិញ។
* **ភាពងាយស្រួលក្នុងការ Update:** ការផ្លាស់ប្តូរ "Skin" មិនប៉ះពាល់ដល់ "Structure" ។

**គុណវិបត្តិ OOCSS:**
* **Learning Curve:** ពិបាកយល់សម្រាប់អ្នកចាប់ផ្តើមដំបូង។
* **Class Names ច្រើន:** HTML អាចមាន Class Names ច្រើន (ស្រដៀងនឹង BEM) ។
* **អាចនឹងធ្វើឱ្យ Design មិនសូវ Unique:** ផ្តោតលើការប្រើប្រាស់ឡើងវិញ អាចធ្វើឱ្យ Design មើលទៅស្រដៀងគ្នា។

---

## 4. SMACSS (Scalable and Modular Architecture for CSS)

**SMACSS** ផ្តល់នូវមគ្គុទ្ទេសក៍សម្រាប់របៀបរៀបចំ CSS ទៅជា 5 ប្រភេទផ្សេងគ្នាដើម្បីបង្កើនភាពអាចពង្រីកបាន និងភាពងាយស្រួលក្នុងការថែទាំ។

**ប្រភេទទាំង 5 របស់ SMACSS:**

1.  **Base (មូលដ្ឋាន):** Styles លំនាំដើមសម្រាប់ HTML Elements (tag selectors) ។ (ឧទាហរណ៍: \`body\`, \`h1\`, \`a\`, \`ul\`) ។
    \`\`\`css
    /* Base styles */
    body { font-family: sans-serif; margin: 0; }
    a { text-decoration: none; color: blue; }
    \`\`\`

2.  **Layout (ប្លង់):** Styles សម្រាប់ Layout ធំៗរបស់ទំព័រ (Header, Footer, Sidebar, Grid) ។ ប្រើ ID ឬ Class ដែលនាំមុខដោយ \`l-\` ឬ \`layout-\` ។ (ឧទាហរណ៍: \`#header\`, \`.l-sidebar\`) ។
    \`\`\`css
    /* Layout styles */
    #header { width: 100%; padding: 20px; }
    .l-grid { display: grid; grid-template-columns: 1fr 3fr; }
    \`\`\`

3.  **Module (ម៉ូឌុល):** Styles សម្រាប់ Components ដែលអាចប្រើឡើងវិញបានដូចជា Buttons, Forms, Navigation, Product Cards ។ ប្រើ Class Names ។ (ឧទាហរណ៍: \`.btn\`, \`.card\`, \`.nav-menu\`) ។
    \`\`\`css
    /* Module styles */
    .btn { padding: 10px 15px; }
    .card { border: 1px solid #ccc; }
    \`\`\`

4.  **State (ស្ថានភាព):** Styles ដែលពិពណ៌នាអំពីស្ថានភាពមើលឃើញនៃ Layouts ឬ Modules ។ ប្រើ Class Names ដែលនាំមុខដោយ \`is-\` ឬ \`has-\` (សម្រាប់ JavaScript) ។ (ឧទាហរណ៍: \`.is-hidden\`, \`.is-active\`, \`.has-error\`) ។
    \`\`\`css
    /* State styles */
    .is-active { font-weight: bold; color: green; }
    .is-hidden { display: none; }
    \`\`\`

5.  **Theme (ស្បែក):** Styles ដែលគ្រប់គ្រងរូបរាង ឬពណ៌របស់ Layouts ឬ Modules សម្រាប់ Theme ផ្សេងៗគ្នា។ (ឧទាហរណ៍: \`.theme-dark .btn\`, \`.theme-blue .header\`) ។
    \`\`\`css
    /* Theme styles */
    .theme-dark { background-color: #333; color: white; }
    .theme-dark .btn { background-color: #555; }
    \`\`\`

### ឧទាហរណ៍រចនាសម្ព័ន្ធ Folder សម្រាប់ SMACSS:

\`\`\`
css/
├── base/
│   ├── _reset.css
│   └── _typography.css
├── layout/
│   ├── _header.css
│   ├── _footer.css
│   └── _grid.css
├── modules/
│   ├── _button.css
│   ├── _card.css
│   └── _navigation.css
├── state/
│   └── _states.css
├── theme/
│   └── _dark-theme.css
└── main.css   // The main file that imports all others
\`\`\`

**គុណសម្បត្តិ SMACSS:**
* **រចនាសម្ព័ន្ធច្បាស់លាស់:** ជួយរៀបចំ CSS ទៅជាប្រភេទដែលអាចគ្រប់គ្រងបាន។
* **ភាពអាចពង្រីកបាន:** ងាយស្រួលក្នុងការបន្ថែម Styles ថ្មី។
* **ភាពងាយស្រួលក្នុងការថែទាំ:** ដឹងថា Styles នីមួយៗគួរតែទៅទីណា។

**គុណវិបត្តិ SMACSS:**
* **Learning Curve:** ត្រូវការការយល់ដឹងពីប្រភេទនីមួយៗ។
* **ភាពតឹងរឹង:** អាចមានអារម្មណ៍តឹងរឹងសម្រាប់គម្រោងតូចៗ។
* **មិនផ្តោតលើការដាក់ឈ្មោះ Class:** ផ្តល់មគ្គុទ្ទេសក៍រចនាសម្ព័ន្ធច្រើនជាងការដាក់ឈ្មោះ Class (ផ្ទុយពី BEM) ។

---

## 5. ការសម្រេចចិត្តជ្រើសរើស Methodologies

* **BEM:** ល្អបំផុតសម្រាប់គម្រោងធំៗដែលត្រូវការភាពស៊ីសង្វាក់គ្នានៃឈ្មោះ Class និងការប្រើប្រាស់ Components ឡើងវិញ។ ល្អជាមួយ Preprocessors ។
* **OOCSS:** ល្អបំផុតសម្រាប់ការកាត់បន្ថយទំហំ File CSS និងលើកទឹកចិត្តឱ្យមាន Components ដែលមិនអាស្រ័យលើ Context ។
* **SMACSS:** ល្អបំផុតសម្រាប់ការរៀបចំរចនាសម្ព័ន្ធ File និងFolder របស់ CSS នៅក្នុងគម្រោងធំៗ។ អាចត្រូវបានប្រើរួមគ្នាជាមួយ BEM ឬ OOCSS ។

> **គន្លឹះ:** វិធីសាស្រ្តទាំងនេះមិនចាំបាច់ប្រើតែមួយមុខនោះទេ។ ជារឿយៗអ្នកអភិវឌ្ឍន៍រួមបញ្ចូលគ្នានូវគំនិតពី Methodologies ផ្សេងៗគ្នា (ឧទាហរណ៍: ប្រើ BEM សម្រាប់ការដាក់ឈ្មោះ Class នៅក្នុងរចនាសម្ព័ន្ធ SMACSS) ដើម្បីបង្កើតប្រព័ន្ធផ្ទាល់ខ្លួនរបស់ពួកគេ។
`,
  examples: [
    `<h3>ឧទាហរណ៍ BEM Component: Product Listing Card</h3>
<pre><code class="language-html">
&lt;!-- Block: product-card --&gt;
&lt;div class="product-card"&gt;
  &lt;!-- Element: image --&gt;
  &lt;img src="product-image.jpg" alt="Product Name" class="product-card__image"&gt;
  
  &lt;!-- Element: content --&gt;
  &lt;div class="product-card__content"&gt;
    &lt;!-- Element: title --&gt;
    &lt;h3 class="product-card__title"&gt;Stylish Headphones&lt;/h3&gt;
    &lt;!-- Element: price --&gt;
    &lt;p class="product-card__price"&gt;$99.99&lt;/p&gt;
    &lt;!-- Element: description --&gt;
    &lt;p class="product-card__description"&gt;Experience crystal clear audio with noise cancellation.&lt;/p&gt;
    
    &lt;!-- Modifier for product-card block --&gt;
    &lt;button class="product-card__button product-card__button--add-to-cart"&gt;Add to Cart&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Modifier for product-card block (e.g., featured) --&gt;
&lt;div class="product-card product-card--featured"&gt;
  &lt;!-- ... same content ... --&gt;
&lt;/div&gt;
</code></pre>

<pre><code class="language-css">
/* CSS for product-card BEM example */
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin: 20px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

.product-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-card__content {
  padding: 15px;
}

.product-card__title {
  font-size: 1.3em;
  color: #333;
  margin-top: 0;
  margin-bottom: 8px;
}

.product-card__price {
  font-size: 1.1em;
  color: #28a745; /* Green for price */
  font-weight: bold;
  margin-bottom: 10px;
}

.product-card__description {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 15px;
}

.product-card__button {
  display: block;
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease;
}

.product-card__button--add-to-cart {
  background-color: #007bff;
  color: white;
}
.product-card__button--add-to-cart:hover {
  background-color: #0056b3;
}

/* Modifier example */
.product-card--featured {
  border-color: #ffc107; /* Yellow border for featured */
  box-shadow: 0 6px 15px rgba(255,193,7,0.3);
}
.product-card--featured .product-card__title {
  color: #d68f00;
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើគោលបំណងចម្បងនៃ CSS Methodologies គឺជាអ្វី?',
      options: [
        'ដើម្បីធ្វើឱ្យគេហទំព័រផ្ទុកលឿនជាងមុន',
        'ដើម្បីធ្វើឱ្យ CSS កាន់តែងាយស្រួលថែទាំ អាចពង្រីកបាន និងអាចប្រើឡើងវិញបាន',
        'ដើម្បីកាត់បន្ថយការប្រើប្រាស់ JavaScript',
        'ដើម្បីបន្ថែម Animation ទៅក្នុង CSS'
      ],
      correct: 1,
      explanation: 'គោលបំណងចម្បងនៃ CSS Methodologies គឺដើម្បីជួយរៀបចំ និងគ្រប់គ្រង Code CSS របស់អ្នកដើម្បីធ្វើឱ្យវាកាន់តែងាយស្រួលថែទាំ អាចពង្រីកបាន និងអាចប្រើឡើងវិញបាន។'
    },
    {
      question: 'តើ BEM តំណាងឱ្យអ្វី?',
      options: [
        'Big, Easy, Modern',
        'Block, Element, Modifier',
        'Basic, Essential, Module',
        'Browser, Element, Model'
      ],
      correct: 1,
      explanation: 'BEM តំណាងឱ្យ Block, Element, Modifier ដែលជាវិធីសាស្រ្តដាក់ឈ្មោះ Class ។'
    },
    {
      question: 'តើ Class `card__title` ក្នុង BEM តំណាងឱ្យអ្វី?',
      options: [
        'Block',
        'Element',
        'Modifier',
        'Component'
      ],
      correct: 1,
      explanation: '`card__title` តំណាងឱ្យ Element (`__title`) នៃ Block (`card`) ។'
    },
    {
      question: 'តើ Class `button--primary` ក្នុង BEM តំណាងឱ្យអ្វី?',
      options: [
        'Block',
        'Element',
        'Modifier',
        'State'
      ],
      correct: 2,
      explanation: '`button--primary` តំណាងឱ្យ Modifier (`--primary`) សម្រាប់ Block (`button`) ។'
    },
    {
      question: 'តើគោលការណ៍សំខាន់ពីររបស់ OOCSS គឺជាអ្វី?',
      options: [
        'Block and Element',
        'Mobile-First and Desktop-First',
        'Separation of Structure from Skin និង Separation of Container from Content',
        'Variables and Mixins'
      ],
      correct: 2,
      explanation: 'គោលការណ៍សំខាន់ពីររបស់ OOCSS គឺ Separation of Structure from Skin (បំបែករចនាសម្ព័ន្ធពីស្បែក) និង Separation of Container from Content (បំបែក Container ពីមាតិកា) ។'
    },
    {
      question: 'ក្នុង OOCSS តើ `btn-primary` នឹងស្ថិតក្នុងប្រភេទ "Structure" ឬ "Skin"?',
      options: [
        'Structure',
        'Skin',
        'Container',
        'Content'
      ],
      correct: 1,
      explanation: '`btn-primary` ជាធម្មតានឹងជា "Skin" ព្រោះវាទាក់ទងនឹង Aesthetics, Visuals (ពណ៌ បែបផែន) របស់ប៊ូតុង។'
    },
    {
      question: 'តើ SMACSS រៀបចំ CSS ទៅជាប៉ុន្មានប្រភេទ?',
      options: [
        '៣ ប្រភេទ',
        '៤ ប្រភេទ',
        '៥ ប្រភេទ',
        '៦ ប្រភេទ'
      ],
      correct: 2,
      explanation: 'SMACSS រៀបចំ CSS ទៅជា 5 ប្រភេទគឺ Base, Layout, Module, State, និង Theme ។'
    },
    {
      question: 'តើ Class `.l-sidebar` ក្នុង SMACSS នឹងស្ថិតក្នុងប្រភេទអ្វី?',
      options: [
        'Base',
        'Layout',
        'Module',
        'State'
      ],
      correct: 1,
      explanation: 'Class ដែលនាំមុខដោយ `l-` ឬ `layout-` ស្ថិតក្នុងប្រភេទ Layout សម្រាប់រចនាសម្ព័ន្ធប្លង់ធំៗ។'
    },
    {
      question: 'តើ Class `.is-active` ក្នុង SMACSS នឹងស្ថិតក្នុងប្រភេទអ្វី?',
      options: [
        'Base',
        'Layout',
        'Module',
        'State'
      ],
      correct: 3,
      explanation: 'Class ដែលនាំមុខដោយ `is-` ឬ `has-` ស្ថិតក្នុងប្រភេទ State ដែលពិពណ៌នាអំពីស្ថានភាពមើលឃើញនៃ Elements ។'
    },
    {
      question: 'តើ Methodologies មួយណាដែលល្បីល្បាញដោយសារការដាក់ឈ្មោះ Class របស់វាវែង?',
      options: [
        'OOCSS',
        'SMACSS',
        'BEM',
        'Atomic CSS'
      ],
      correct: 2,
      explanation: 'BEM ត្រូវបានគេស្គាល់ដោយសារ Class Names របស់វាអាចវែង។'
    },
    {
      question: 'តើ Methodologies មួយណាដែលល្អបំផុតសម្រាប់ការកាត់បន្ថយទំហំ File CSS ដោយការប្រើប្រាស់ Objects ដែលអាចប្រើឡើងវិញបាន?',
      options: [
        'BEM',
        'OOCSS',
        'SMACSS',
        'Semantic CSS'
      ],
      correct: 1,
      explanation: 'OOCSS ផ្តោតលើការកាត់បន្ថយ CSS ដោយការបំបែក Structure និង Skin និងការបង្កើត Objects ដែលអាចប្រើឡើងវិញបាន។'
    },
    {
      question: 'តើប្រភេទ `Base` ក្នុង SMACSS គ្រប់គ្រង Styles សម្រាប់អ្វី?',
      options: [
        'Components ជាក់លាក់',
        'រចនាបថលំនាំដើមសម្រាប់ HTML Elements (tag selectors)',
        'Layout ធំៗរបស់ទំព័រ',
        'ស្ថានភាពនៃ Elements'
      ],
      correct: 1,
      explanation: 'Base គ្រប់គ្រង Styles លំនាំដើមសម្រាប់ HTML Elements (tag selectors) ។'
    },
    {
      question: 'តើវាអាចទៅរួចទេក្នុងការប្រើប្រាស់ Methodologies ច្រើនរួមគ្នា (ឧទាហរណ៍ BEM ជាមួយ SMACSS)?',
      options: [
        'មិនអាចទេ ត្រូវជ្រើសរើសតែមួយប៉ុណ្ណោះ',
        'អាចធ្វើទៅបាន ហើយវាជារឿងធម្មតា',
        'អាចធ្វើទៅបាន ប៉ុន្តែវាមិនត្រូវបានណែនាំទេ',
        'អាស្រ័យលើ Browser'
      ],
      correct: 1,
      explanation: 'អាចធ្វើទៅបាន ហើយវាជារឿងធម្មតា។ ជារឿយៗអ្នកអភិវឌ្ឍន៍រួមបញ្ចូលគ្នានូវគំនិតពី Methodologies ផ្សេងៗគ្នាដើម្បីបង្កើតប្រព័ន្ធផ្ទាល់ខ្លួនរបស់ពួកគេ។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ "Separation of Container from Content" ក្នុង OOCSS?',
      options: [
        'ធ្វើឱ្យ Code កាន់តែវែង',
        'ធានាថា Object មើលទៅដូចគ្នាដោយមិនគិតពីកន្លែងដែលវាត្រូវបានដាក់ (Context ឯករាជ្យ)',
        'បង្ខំអ្នកឱ្យសរសេរ Styles សម្រាប់តែ Container តែប៉ុណ្ណោះ',
        'ធ្វើឱ្យ Content បាត់បង់រចនាបថ'
      ],
      correct: 1,
      explanation: 'គោលការណ៍ "Separation of Container from Content" ក្នុង OOCSS ធានាថា Object មើលទៅដូចគ្នាដោយមិនគិតពីកន្លែងដែលវាត្រូវបានដាក់ (Context ឯករាជ្យ) ។'
    },
    {
      question: 'តើ CSS Methodologies ជួយដល់ "Scalability" (ភាពអាចពង្រីកបាន) យ៉ាងដូចម្តេច?',
      options: [
        'ដោយការកំណត់ទំហំអតិបរមារបស់ CSS file',
        'ដោយអនុញ្ញាតឱ្យគម្រោងរីកធំដោយមិនមានការ Conflict ឬបញ្ហា Performance',
        'ដោយការប្រើប្រាស់ JavaScript សម្រាប់ Styling',
        'ដោយការលុបចោល CSS ដែលមិនបានប្រើ'
      ],
      correct: 1,
      explanation: 'CSS Methodologies អនុញ្ញាតឱ្យគម្រោងរីកធំដោយមិនមានការ Conflict ឬបញ្ហា Performance ដោយផ្តល់នូវរចនាសម្ព័ន្ធ និងការណែនាំច្បាស់លាស់។'
    },
    {
      question: 'តើអ្វីជាគុណវិបត្តិចម្បងនៃ SMACSS?',
      options: [
        'ឈ្មោះ Class វែងពេក',
        'ទំហំ File ធំ',
        'ភាពតឹងរឹង និង Learning Curve',
        'មិនគាំទ្រ Responsive Design'
      ],
      correct: 2,
      explanation: 'គុណវិបត្តិនៃ SMACSS គឺភាពតឹងរឹងរបស់វា និង Learning Curve សម្រាប់អ្នកចាប់ផ្តើមដំបូង។'
    },
    {
      question: 'តើ Class `.nav-menu` ក្នុង SMACSS នឹងស្ថិតក្នុងប្រភេទអ្វី?',
      options: [
        'Base',
        'Layout',
        'Module',
        'Theme'
      ],
      correct: 2,
      explanation: '`.nav-menu` គឺជា Component ដែលអាចប្រើឡើងវិញបាន ដូច្នេះវាស្ថិតក្នុងប្រភេទ Module ។'
    },
    {
      question: 'តើ Class Name ណាដែលអនុលោមតាម BEM Block Modifier?',
      options: [
        '`header--large`',
        '`header__title`',
        '`header_nav`',
        '`header-active`'
      ],
      correct: 0,
      explanation: 'BEM Block Modifier ប្រើ `--` (double hyphen) ដើម្បីបំបែកឈ្មោះ Block ពី Modifier ដូចជា `header--large` ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធសាមញ្ញដោយប្រើ **BEM Methodology** សម្រាប់ការដាក់ឈ្មោះ Class និង Style ពួកវាជាមួយ CSS ។

**តម្រូវការ:**

1.  **HTML Structure:**
    * បង្កើតប្លុកមេមួយសម្រាប់ "Product Card" ។
    * **Block:** \`<div class="product-card">\`
    * **Elements ខាងក្នុង \`product-card\` Block:**
        * \`<div class="product-card__image-wrapper">\` (សម្រាប់រូបភាព)
            * \`<img src="https://via.placeholder.com/200x150/9ad6b9/000000?text=Product+Image" alt="Product" class="product-card__image">\`
        * \`<div class="product-card__content">\` (សម្រាប់មាតិកា)
            * \`<h3 class="product-card__title">Awesome Gadget</h3>\`
            * \`<p class="product-card__description">This is a description of the amazing gadget. It has many features.</p>\`
            * \`<span class="product-card__price">$129.99</span>\`
            * \`<button class="product-card__button">Add to Cart</button>\`
    * **Modifier Example:** បន្ថែម Modifier មួយទៅ \`product-card\` Block ដើម្បីបង្ហាញពីស្ថានភាព "out of stock" ។
        * \`<div class="product-card product-card--out-of-stock">\` (ដូច Block ខាងលើ ប៉ុន្តែមាន Class បន្ថែម)
            * (មាតិកាដូចគ្នា)
            * \`<span class="product-card__status">Out of Stock</span>\`

2.  **CSS Styling (Internal CSS):**
    * ប្រើ Selector ទៅតាម BEM Class Names ។
    * **\`.product-card\` (Block):**
        * \`width: 300px;\`
        * \`border: 1px solid #ddd;\`
        * \`border-radius: 8px;\`
        * \`box-shadow: 0 4px 8px rgba(0,0,0,0.1);\`
        * \`margin: 20px auto;\`
        * \`overflow: hidden;\`
        * \`font-family: Arial, sans-serif;\`
    * **\`.product-card__image-wrapper\` (Element):**
        * \`height: 150px;\`
        * \`overflow: hidden;\`
    * **\`.product-card__image\` (Element):**
        * \`width: 100%;\`
        * \`height: 100%;\`
        * \`object-fit: cover;\`
    * **\`.product-card__content\` (Element):**
        * \`padding: 15px;\`
        * \`text-align: center;\`
    * **\`.product-card__title\` (Element):**
        * \`font-size: 1.5em;\`
        * \`color: #333;\`
        * \`margin-top: 0;\`
        * \`margin-bottom: 10px;\`
    * **\`.product-card__description\` (Element):**
        * \`font-size: 0.9em;\`
        * \`color: #666;\`
        * \`margin-bottom: 15px;\`
    * **\`.product-card__price\` (Element):**
        * \`font-size: 1.2em;\`
        * \`color: #28a745;\` (green)
        * \`font-weight: bold;\`
        * \`display: block;\`
        * \`margin-bottom: 15px;\`
    * **\`.product-card__button\` (Element):**
        * \`background-color: #007bff;\` (blue)
        * \`color: white;\`
        * \`padding: 10px 15px;\`
        * \`border: none;\`
        * \`border-radius: 5px;\`
        * \`cursor: pointer;\`
        * \`width: 100%;\`
        * \`font-size: 1em;\`
        * \`transition: background-color 0.3s ease;\`
    * **\`.product-card__button:hover\`:**
        * \`background-color: #0056b3;\`
    * **\`.product-card--out-of-stock\` (Modifier):**
        * \`opacity: 0.7;\`
        * \`background-color: #f8f8f8;\`
        * \`pointer-events: none;\` (disables clicks)
    * **\`.product-card__status\` (Element for Modifier):**
        * \`color: #dc3545;\` (red)
        * \`font-weight: bold;\`
        * \`margin-top: 10px;\`
        * \`display: block;\`
    
    * (Optional) Add some basic \`body\` styles for better presentation.
        * \`display: flex;\`
        * \`flex-wrap: wrap;\`
        * \`justify-content: center;\`
        * \`align-items: flex-start;\`
        * \`min-height: 100vh;\`

`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BEM Methodology Lab</title>
  <style>
    /* Basic body styles for layout */
    body {
      margin: 0;
      background-color: #f4f7f6;
      display: flex;
      flex-wrap: wrap; /* Allow cards to wrap */
      justify-content: center; /* Center cards horizontally */
      align-items: flex-start; /* Align items to the top */
      min-height: 100vh; /* Ensure body takes full viewport height */
      padding: 20px;
      box-sizing: border-box; /* Include padding in element's total width and height */
    }

    /* Block: Product Card */
    .product-card {
      width: 300px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      margin: 20px; /* Adjusted margin for better spacing with flexbox */
      overflow: hidden;
      font-family: Arial, sans-serif;
      background-color: white;
      transition: transform 0.2s ease-in-out; /* Smooth hover effect */
    }

    .product-card:hover {
      transform: translateY(-5px); /* Lift card on hover */
    }

    /* Element: Image Wrapper */
    .product-card__image-wrapper {
      height: 180px; /* Increased height for better image display */
      overflow: hidden;
    }

    /* Element: Image */
    .product-card__image {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ensures image covers the area without distortion */
      display: block; /* Remove extra space below image */
    }

    /* Element: Content */
    .product-card__content {
      padding: 15px;
      text-align: center;
    }

    /* Element: Title */
    .product-card__title {
      font-size: 1.5em;
      color: #333;
      margin-top: 0;
      margin-bottom: 10px;
    }

    /* Element: Description */
    .product-card__description {
      font-size: 0.9em;
      color: #666;
      margin-bottom: 15px;
    }

    /* Element: Price */
    .product-card__price {
      font-size: 1.3em; /* Slightly larger price */
      color: #28a745; /* Green */
      font-weight: bold;
      display: block; /* Ensures it takes its own line */
      margin-bottom: 15px;
    }

    /* Element: Button */
    .product-card__button {
      background-color: #007bff; /* Blue */
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      font-size: 1em;
      transition: background-color 0.3s ease;
    }

    .product-card__button:hover {
      background-color: #0056b3; /* Darker blue on hover */
    }

    /* Modifier: Out of Stock */
    .product-card--out-of-stock {
      opacity: 0.7;
      background-color: #f8f8f8;
      pointer-events: none; /* Disables clicks on the entire card */
      box-shadow: 0 2px 5px rgba(0,0,0,0.05); /* Lighter shadow */
    }

    /* Element within Modifier: Status */
    .product-card--out-of-stock .product-card__status {
      color: #dc3545; /* Red for status text */
      font-weight: bold;
      margin-top: 10px;
      display: block;
      font-size: 1.1em;
    }
  </style>
</head>
<body>

  <div class="product-card">
    <div class="product-card__image-wrapper">
      <img src="https://via.placeholder.com/200x180/9ad6b9/000000?text=Product+Image" alt="Awesome Gadget" class="product-card__image">
    </div>
    <div class="product-card__content">
      <h3 class="product-card__title">Awesome Gadget</h3>
      <p class="product-card__description">This is a description of the amazing gadget. It has many features and is very useful.</p>
      <span class="product-card__price">$129.99</span>
      <button class="product-card__button">Add to Cart</button>
    </div>
  </div>

  <div class="product-card product-card--out-of-stock">
    <div class="product-card__image-wrapper">
      <img src="https://via.placeholder.com/200x180/ffcccc/000000?text=Out+of+Stock" alt="Limited Edition" class="product-card__image">
    </div>
    <div class="product-card__content">
      <h3 class="product-card__title">Limited Edition Widget</h3>
      <p class="product-card__description">Unfortunately, this highly sought-after widget is currently unavailable.</p>
      <span class="product-card__price">$249.99</span>
      <span class="product-card__status">Out of Stock</span>
      <button class="product-card__button">Notify Me</button>
    </div>
  </div>

  <div class="product-card">
    <div class="product-card__image-wrapper">
      <img src="https://via.placeholder.com/200x180/c2e0f0/000000?text=Another+Product" alt="Smart Watch" class="product-card__image">
    </div>
    <div class="product-card__content">
      <h3 class="product-card__title">Smart Watch Pro</h3>
      <p class="product-card__description">Track your fitness, receive notifications, and stay connected with this smart watch.</p>
      <span class="product-card__price">$199.50</span>
      <button class="product-card__button">Add to Cart</button>
    </div>
  </div>

</body>
</html>
`
  }
};

export default CSSLesson5_5Content;