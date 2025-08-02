// src/components/lessons/css/CSSLesson5_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson5_3Content: LessonContent = {
  title: 'CSS Frameworks (CSS Frameworks)',
  objectives: [
    'យល់ដឹងពីគោលគំនិត និងអត្ថប្រយោជន៍នៃ CSS Frameworks',
    'ស្គាល់ពី Frameworks ល្បីៗដូចជា Bootstrap និង Tailwind CSS',
    'រៀនពីរបៀបចាប់ផ្តើមប្រើប្រាស់ Bootstrap សម្រាប់ Responsive Components',
    'រៀនពីគោលការណ៍ Utility-First របស់ Tailwind CSS',
    'យល់ដឹងពីគុណសម្បត្តិ និងគុណវិបត្តិនៃការប្រើប្រាស់ CSS Frameworks',
    'អាចសម្រេចចិត្តថាតើពេលណាគួរប្រើ CSS Frameworks សម្រាប់គម្រោងជាក់លាក់'
  ],
  content: `
# CSS Frameworks (CSS Frameworks) 🏗️✨

---

**CSS Frameworks** គឺជាបណ្ណាល័យនៃឯកសារ CSS ដែលត្រៀមរួចជាស្រេច (pre-written) ដែលផ្តល់នូវមូលដ្ឋានគ្រឹះសម្រាប់រចនាគេហទំព័រ។ ពួកវាមាន Styles សម្រាប់ Elements ទូទៅដូចជា Buttons, Forms, Navigation bars, Grids និង Responsive Layouts ជាដើម។ ការប្រើប្រាស់ Frameworks អាចជួយបង្កើនល្បឿនក្នុងការអភិវឌ្ឍន៍ និងធានាភាពស៊ីសង្វាក់គ្នានៃការរចនា។

---

## 1. ហេតុអ្វីត្រូវប្រើ CSS Frameworks?

* **បង្កើនល្បឿនអភិវឌ្ឍន៍:** មិនចាំបាច់សរសេរ CSS ពីដំបូងឡើយ។
* **ភាពស៊ីសង្វាក់គ្នា (Consistency):** រចនាបថត្រូវបានកំណត់ស្តង់ដារ ធ្វើឱ្យគេហទំព័រមើលទៅឯកភាពគ្នា។
* **Responsive Design ស្រាប់:** Frameworks ភាគច្រើនត្រូវបានបង្កើតឡើងដោយគិតគូរពី Responsive Design ។
* **ងាយស្រួលថែទាំ:** Code មានរបៀបរៀបរយ និងអាចយល់បាន។
* **សហគមន៍គាំទ្រ:** មានឯកសារ និងសហគមន៍ធំទូលាយសម្រាប់ជំនួយ។

---

## 2. ប្រភេទនៃ CSS Frameworks

ជាទូទៅ Frameworks អាចបែងចែកជាពីរប្រភេទធំៗ៖

* **Component-Based Frameworks:** ផ្តល់នូវ Components (ប៊ូតុង កាត កម្មវិធីរុករក) ដែលបានរចនារួចជាស្រេច ដែលអ្នកគ្រាន់តែបន្ថែម Class ទៅក្នុង HTML ។ ឧទាហរណ៍៖ **Bootstrap**, Materialize, Bulma ។
* **Utility-First Frameworks:** ផ្តល់នូវ Utility Classes តូចៗដែលផ្តោតលើមុខងារជាក់លាក់មួយ (ឧទាហរណ៍: \`padding-left\`, \`text-center\`) ។ អ្នកសាងសង់ UI ដោយការផ្សំ Classes ទាំងនេះ។ ឧទាហរណ៍៖ **Tailwind CSS**, Tachyons ។

---

## 3. Bootstrap (Component-Based Framework)

**Bootstrap** គឺជា Framework CSS, JS, និង HTML ឥតគិតថ្លៃ និងពេញនិយមបំផុតសម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ Responsive និង Mobile-First ។

### របៀបប្រើ Bootstrap:

វិធីងាយស្រួលបំផុតគឺប្រើ CDN (Content Delivery Network):

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Example</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
  <div class="container mt-5">
    <h1 class="text-primary mb-4">Welcome to Bootstrap!</h1>
    
    <div class="alert alert-success" role="alert">
      This is a success alert—check it out!
    </div>

    <button type="button" class="btn btn-primary me-2">Primary Button</button>
    <button type="button" class="btn btn-secondary">Secondary Button</button>

    <div class="row mt-4">
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card Title 1</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-info">Read More</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card Title 2</h5>
            <p class="card-text">Another example of a card with some descriptive text.</p>
            <a href="#" class="btn btn-warning">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card Title 3</h5>
            <p class="card-text">And a third card to show responsive column behavior.</p>
            <a href="#" class="btn btn-danger">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
\`\`\`

**Bootstrap Classes ឧទាហរណ៍:**

* \`container\`, \`container-fluid\`: សម្រាប់ Layout ។
* \`row\`, \`col-md-6\`, \`col-lg-4\`: សម្រាប់ Grid System (Responsive Layout) ។
* \`btn\`, \`btn-primary\`, \`btn-success\`: សម្រាប់ Buttons ។
* \`alert\`, \`alert-info\`: សម្រាប់ Alerts ។
* \`card\`, \`card-body\`, \`card-title\`: សម្រាប់ Cards ។
* \`mt-3\`, \`mb-4\`, \`p-2\`: សម្រាប់ Spacing (margin-top, margin-bottom, padding) ។
* \`text-center\`, \`text-primary\`: សម្រាប់ Typography និង Colors ។

---

## 4. Tailwind CSS (Utility-First Framework)

**Tailwind CSS** គឺជា Utility-First CSS Framework ដែលខុសពី Bootstrap ត្រង់ថាវាមិនផ្តល់ Components ដែលបានរចនារួចជាស្រេចនោះទេ ប៉ុន្តែផ្តល់នូវ Utility Classes តូចៗរាប់ពាន់សម្រាប់បង្កើត Design ដោយផ្ទាល់នៅក្នុង Markup របស់អ្នក។

### គោលការណ៍ Utility-First:

ជំនួសឱ្យការសរសេរ CSS ផ្ទាល់ខ្លួន ឬប្រើ Component Classes ធំៗ អ្នកសង់ Design ដោយការផ្សំ Utility Classes តូចៗ។

\`\`\`html
<div class="my-custom-button">Click Me</div>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
\`\`\`

### របៀបប្រើ Tailwind CSS:

វិធីដែលត្រូវបានណែនាំបំផុតគឺការដំឡើងវាជា PostCSS plugin តាមរយៈ npm/yarn ដើម្បីឱ្យវាអាច "purge" CSS ដែលមិនបានប្រើ និងបង្កើតឯកសារ CSS ចុងក្រោយដែលមានទំហំតូចបំផុត។ ទោះយ៉ាងណាក៏ដោយ សម្រាប់ឧទាហរណ៍រហ័ស អ្នកអាចប្រើ CDN:

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS Example</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 p-6">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://via.placeholder.com/192x192/b0e0e6/000000?text=Tailwind" alt="Modern building">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company Name</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Exciting New Opportunity</a>
        <p class="mt-2 text-slate-500">
          Tailwind CSS allows you to rapidly build modern websites without ever leaving your HTML.
          It's a utility-first CSS framework for building custom user interfaces.
        </p>
        <button class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  </div>

  <div class="mt-8 text-center">
    <button class="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-xl hover:bg-purple-700 transition-all duration-300">
      Another Tailwind Button
    </button>
    <p class="text-gray-700 mt-4 text-xl">Resize your browser to see responsiveness!</p>
  </div>
</body>
</html>
\`\`\`

**Tailwind CSS Classes ឧទាហរណ៍:**

* \`bg-blue-500\`: កំណត់ Background Color ។
* \`text-white\`, \`text-lg\`, \`font-bold\`: សម្រាប់ Typography ។
* \`py-2\`, \`px-4\`: សម្រាប់ Padding (padding-top/bottom, padding-left/right) ។
* \`mt-4\`, \`mb-2\`: សម្រាប់ Margin (margin-top, margin-bottom) ។
* \`rounded-lg\`, \`shadow-md\`: សម្រាប់ Borders និង Shadows ។
* \`flex\`, \`md:flex\`, \`w-full\`, \`md:w-48\`: សម្រាប់ Layout និង Responsiveness ។
* \`hover:bg-blue-700\`: សម្រាប់ Hover states ។

---

## 5. គុណសម្បត្តិ និងគុណវិបត្តិ

| លក្ខណៈ             | CSS Frameworks (ទូទៅ)                          | Bootstrap (Component-Based)                   | Tailwind CSS (Utility-First)                |
| :----------------- | :--------------------------------------------- | :-------------------------------------------- | :------------------------------------------ |
| **គុណសម្បត្តិ** | - បង្កើនល្បឿន <br> - ភាពស៊ីសង្វាក់ <br> - Responsive ស្រាប់ <br> - កាត់បន្ថយការសរសេរ CSS | - មាន Components ស្រាប់ <br> - លឿនសម្រាប់ Prototype <br> - Documentation ល្អ <br> - សហគមន៍ធំ | - ទំហំ CSS តូច (Purge) <br> - កាត់បន្ថយ CSS ផ្ទាល់ខ្លួន <br> - អាចបត់បែនបានខ្ពស់ <br> - មិនមាន Opinionated Styles |
| **គុណវិបត្តិ** | - ទំហំ File ធំ (បើមិន Purge) <br> - Learning Curve <br> - ការរចនាស្រដៀងគ្នា (Boilerplate) <br> - លំបាក Customize ជ្រៅ | - កូដ HTML ច្រើន (Class names) <br> - រចនាបថអាចមើលទៅដូចគ្នា <br> - ពិបាក Customize បើមិនស្គាល់ Sass/Less | - កូដ HTML ច្រើន (Class names) <br> - Learning Curve ខ្ពស់ <br> - ត្រូវការ Build Process <br> - មិនផ្តល់ Components ស្រាប់ |

---

## 6. ពេលណាគួរប្រើ CSS Frameworks?

* **គម្រោងតូចៗ ឬ Prototype:** បង្កើត UI លឿនបំផុត។
* **គម្រោងធំៗដែលមានក្រុម:** ធានាភាពស៊ីសង្វាក់គ្នាក្នុងការរចនា។
* **នៅពេលត្រូវការ Responsive Design លឿន:** Frameworks ធ្វើរឿងនេះបានល្អ។
* **នៅពេលដែលមិនមាន Graphic Designer:** ផ្តល់មូលដ្ឋានគ្រឹះរចនាបថស្រាប់។

**ពេលណាគួរពិចារណា CSS ផ្ទាល់ខ្លួន ឬ CSS-in-JS?**

* **គម្រោងតូចៗដែលទាមទារការ Customize ខ្ពស់:** ប្រសិនបើអ្នកចង់បាន Unique Design ។
* **នៅពេលទំហំ File ជាអាទិភាពខ្ពស់បំផុត:** សម្រាប់ Website សាមញ្ញៗ។
* **នៅពេលអ្នកមានការគ្រប់គ្រងពេញលេញលើ Design System:** បង្កើតពីដំបូងអាចផ្តល់ភាពបត់បែនបានច្រើនបំផុត។
`,
  examples: [
    `<h3>ឧទាហរណ៍ Bootstrap Component (Card)</h3>
<p>សូមបញ្ចូល Bootstrap CDN ក្នុង \`<head>\` ដើម្បីមើលលទ្ធផល</p>
<div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/286x180/ADD8E6/000000?text=Bootstrap+Card" class="card-img-top" alt="Card Image">
  <div class="card-body">
    <h5 class="card-title">Bootstrap Card Example</h5>
    <p class="card-text">This is a quick example of a Bootstrap card component. It comes with pre-defined styles and responsiveness.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<pre><code class="language-html">
&lt;!-- ត្រូវមាន Bootstrap CDN នៅក្នុង head របស់អ្នក --&gt;
&lt;div class="card" style="width: 18rem;"&gt;
  &lt;img src="..." class="card-img-top" alt="Card Image"&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Bootstrap Card Example&lt;/h5&gt;
    &lt;p class="card-text"&gt;This is a quick example of a Bootstrap card component. It comes with pre-defined styles and responsiveness.&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary"&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<hr>
<h3>ឧទាហរណ៍ Tailwind CSS (Custom Button)</h3>
<p>សូមបញ្ចូល Tailwind CDN ក្នុង \`<head>\` ដើម្បីមើលលទ្ធផល</p>
<button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300">
  Tailwind Styled Button
</button>
<pre><code class="language-html">
&lt;!-- ត្រូវមាន Tailwind CDN នៅក្នុង head របស់អ្នក --&gt;
&lt;button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300"&gt;
  Tailwind Styled Button
&lt;/button&gt;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជា CSS Frameworks?',
      options: [
        'កម្មវិធីសម្រាប់បង្កើត CSS animations',
        'បណ្ណាល័យនៃឯកសារ CSS ដែលត្រៀមរួចជាស្រេចសម្រាប់រចនាគេហទំព័រ',
        'ភាសាសរសេរកម្មវិធីសម្រាប់ Frontend',
        'ឧបករណ៍សម្រាប់ Testing CSS code'
      ],
      correct: 1,
      explanation: 'CSS Frameworks គឺជាបណ្ណាល័យនៃឯកសារ CSS ដែលត្រៀមរួចជាស្រេចដែលផ្តល់នូវមូលដ្ឋានគ្រឹះសម្រាប់រចនាគេហទំព័រ។'
    },
    {
      question: 'តើមួយណាជាគុណសម្បត្តិចម្បងនៃការប្រើប្រាស់ CSS Frameworks?',
      options: [
        'ធ្វើឱ្យគេហទំព័រផ្ទុកយឺត',
        'បង្កើនល្បឿនអភិវឌ្ឍន៍ និងធានាភាពស៊ីសង្វាក់គ្នានៃការរចនា',
        'លុបបំបាត់តម្រូវការសម្រាប់ HTML',
        'អនុញ្ញាតឱ្យតែអ្នករចនាអាជីពប៉ុណ្ណោះប្រើ'
      ],
      correct: 1,
      explanation: 'ការប្រើប្រាស់ Frameworks អាចជួយបង្កើនល្បឿនក្នុងការអភិវឌ្ឍន៍ និងធានាភាពស៊ីសង្វាក់គ្នានៃការរចនា។'
    },
    {
      question: 'តើ Bootstrap ជា Framework ប្រភេទអ្វី?',
      options: [
        'Utility-First Framework',
        'Animation Framework',
        'Component-Based Framework',
        'JavaScript Framework'
      ],
      correct: 2,
      explanation: 'Bootstrap គឺជា Component-Based Framework ដែលផ្តល់នូវ Components ដែលបានរចនារួចជាស្រេច។'
    },
    {
      question: 'តើ Tailwind CSS ស្ថិតក្នុងប្រភេទ Framework មួយណា?',
      options: [
        'Component-Based Framework',
        'Utility-First Framework',
        'JavaScript Framework',
        'Animation Framework'
      ],
      correct: 1,
      explanation: 'Tailwind CSS គឺជា Utility-First CSS Framework ដែលផ្តល់នូវ Utility Classes តូចៗរាប់ពាន់។'
    },
    {
      question: 'តើ CDN សម្រាប់ Bootstrap គួរត្រូវបានដាក់នៅកន្លែងណា?',
      options: [
        'នៅក្នុង `<body>` tag ប៉ុណ្ណោះ',
        'នៅក្នុង `<head>` tag',
        'នៅក្នុងឯកសារ JavaScript ខាងក្រៅ',
        'នៅក្នុង CSS file ផ្ទាល់ខ្លួន'
      ],
      correct: 1,
      explanation: 'Bootstrap CSS CDN គួរតែត្រូវបានដាក់នៅក្នុង `<head>` tag ដើម្បីឱ្យ Styles ត្រូវបានផ្ទុកមុនមាតិកា HTML ។'
    },
    {
      question: 'តើ Class `col-md-6` នៅក្នុង Bootstrap មានគោលបំណងអ្វី?',
      options: [
        'កំណត់ពណ៌របស់ Element',
        'ធ្វើឱ្យ Column លាក់នៅលើអេក្រង់មធ្យម',
        'ធ្វើឱ្យ Column កាន់កាប់ 6 នៃ 12 Column នៅលើអេក្រង់មធ្យមឡើងទៅ',
        'បន្ថែម Margin ទៅ Column'
      ],
      correct: 2,
      explanation: '`col-md-6` គឺជាផ្នែកមួយនៃ Bootstrap Grid System ដែលកំណត់ឱ្យ Column កាន់កាប់ 6 ក្នុងចំណោម 12 Column នៅលើអេក្រង់ទំហំមធ្យម (md) ឬធំជាង។'
    },
    {
      question: 'តើអ្វីជាគុណវិបត្តិនៃការប្រើប្រាស់ Bootstrap ដែលគេលើកឡើងជាញឹកញាប់?',
      options: [
        'វាពិបាករៀនណាស់',
        'វាធ្វើឱ្យ Design មើលទៅដូចគ្នា (Generic look)',
        'វាមិនគាំទ្រ Responsive Design ទេ',
        'វាដំណើរការតែលើ Browser មួយចំនួនប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'គុណវិបត្តិនៃ Bootstrap គឺថា Design ដែលបង្កើតឡើងដោយវាតែងតែមើលទៅស្រដៀងគ្នាទៅនឹងគេហទំព័រ Bootstrap ផ្សេងទៀត លុះត្រាតែមានការ Customize យ៉ាងស៊ីជម្រៅ។'
    },
    {
      question: 'តើ Class `bg-blue-500` នៅក្នុង Tailwind CSS ធ្វើអ្វី?',
      options: [
        'កំណត់ពណ៌អក្សរទៅពណ៌ខៀវ',
        'កំណត់ទំហំ Font ទៅ 500px',
        'កំណត់ Background Color ទៅពណ៌ខៀវលំដាប់ 500',
        'បន្ថែម Border ពណ៌ខៀវ'
      ],
      correct: 2,
      explanation: '`bg-blue-500` នៅក្នុង Tailwind CSS គឺជា Utility Class ដែលកំណត់ Background Color របស់ Element ទៅពណ៌ខៀវលំដាប់ 500 ពី Palette របស់ Tailwind ។'
    },
    {
      question: 'តើគោលការណ៍ "Utility-First" របស់ Tailwind CSS មានន័យដូចម្តេច?',
      options: [
        'ផ្តោតលើការបង្កើត Components ធំៗជាមុន',
        'ផ្តល់នូវ Classes តូចៗដែលផ្តោតលើមុខងារជាក់លាក់មួយៗ',
        'តម្រូវឱ្យអ្នកសរសេរ CSS ផ្ទាល់ខ្លួនសម្រាប់រាល់ Style',
        'ប្រើតែ JavaScript សម្រាប់ Styling'
      ],
      correct: 1,
      explanation: 'Utility-First មានន័យថា Tailwind CSS ផ្តល់នូវ Utility Classes តូចៗជាច្រើនដែលអ្នកផ្សំបញ្ចូលគ្នាដើម្បីសង់ UI របស់អ្នក។'
    },
    {
      question: 'តើ `purge` នៅក្នុង Tailwind CSS Build Process មានមុខងារអ្វី?',
      options: [
        'បន្ថែម Classes ថ្មីៗទៅក្នុង CSS',
        'លុប CSS ដែលមិនបានប្រើដើម្បីកាត់បន្ថយទំហំ File ចុងក្រោយ',
        'ប្តូរឈ្មោះ Classes ដើម្បីសុវត្ថិភាព',
        'បំបែកឯកសារ CSS ទៅជាឯកសារតូចៗ'
      ],
      correct: 1,
      explanation: '`purge` គឺជាមុខងារសំខាន់របស់ Tailwind CSS ដែលស្កេន Code របស់អ្នកហើយលុបចោលរាល់ Utility Class ដែលមិនត្រូវបានប្រើប្រាស់ ដើម្បីកាត់បន្ថយទំហំ CSS File ចុងក្រោយឱ្យនៅតូចបំផុត។'
    },
    {
      question: 'តើពេលណាដែលមិនគួរប្រើ CSS Frameworks (ហើយគួរពិចារណា CSS ផ្ទាល់ខ្លួន)?',
      options: [
        'នៅពេលបង្កើត Prototype លឿន',
        'នៅពេលត្រូវការ Responsive Design លឿន',
        'នៅពេលគម្រោងតូចៗដែលទាមទារការ Customize រចនាបថខ្ពស់ និង Design មានលក្ខណៈពិសេស',
        'នៅពេលដែលមិនមាន Graphic Designer'
      ],
      correct: 2,
      explanation: 'ប្រសិនបើគម្រោងតូចៗ ឬត្រូវការការ Customize រចនាបថខ្ពស់ និង Design មានលក្ខណៈពិសេស Frameworks អាចនឹងមានភាពរឹតត្បិត ហើយការសរសេរ CSS ផ្ទាល់ខ្លួនអាចល្អជាង។'
    },
    {
      question: 'តើ Class `mt-4` នៅក្នុង Bootstrap ឬ Tailwind CSS ធ្វើអ្វី?',
      options: [
        'កំណត់ Margin Top 4px',
        'កំណត់ Margin Top ទៅ 4 ឯកតា (Scale-based)',
        'កំណត់ Margin Bottom 4px',
        'កំណត់ Padding Top 4px'
      ],
      correct: 1,
      explanation: '`mt-4` គឺជា Utility Class នៅក្នុង Frameworks ដូចជា Bootstrap និង Tailwind CSS ដែលកំណត់ Margin Top ទៅតម្លៃដែលបានកំណត់ជាមុន (ឧទាហរណ៍ 16px សម្រាប់ Bootstrap 5 ឬ 1rem សម្រាប់ Tailwind តាម Scale) ។'
    },
    {
      question: 'តើ `hover:bg-blue-700` នៅក្នុង Tailwind CSS ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Background Color នៅពេល Element ត្រូវបានចុច',
        'កំណត់ Background Color នៅពេល Mouse ដាក់ពីលើ Element (Hover state)',
        'កំណត់ Border Color ទៅពណ៌ខៀវ',
        'បង្កើត Animation ពណ៌ខៀវ'
      ],
      correct: 1,
      explanation: '`hover:bg-blue-700` គឺជា Utility Class របស់ Tailwind CSS ដែលអនុញ្ញាតឱ្យអ្នកកំណត់រចនាបថសម្រាប់ Hover state (នៅពេល Mouse ដាក់ពីលើ Element) ក្នុងករណីនេះគឺការផ្លាស់ប្តូរ Background Color ។'
    },
    {
      question: 'តើ CSS Frameworks ជួយធានា "Consistency" (ភាពស៊ីសង្វាក់គ្នា) ក្នុងការរចនាគេហទំព័រយ៉ាងដូចម្តេច?',
      options: [
        'ដោយបង្ខំអ្នករាល់គ្នាឱ្យប្រើពណ៌ដូចគ្នា',
        'ដោយផ្តល់នូវ Styles ដែលបានកំណត់ស្តង់ដារសម្រាប់ Elements ទូទៅ',
        'ដោយលុបបំបាត់ការប្រើប្រាស់ CSS ផ្ទាល់ខ្លួន',
        'ដោយប្តូរឈ្មោះ Class រាល់ពេល Update'
      ],
      correct: 1,
      explanation: 'Frameworks ផ្តល់នូវ Styles ដែលបានកំណត់ស្តង់ដារសម្រាប់ Elements ទូទៅ ដែលជួយធានាថា Design របស់គេហទំព័រមានភាពស៊ីសង្វាក់គ្នា និងមើលទៅឯកភាពគ្នា។'
    },
    {
      question: 'តើមួយណាជាគុណសម្បត្តិរបស់ Tailwind CSS ធៀបនឹង Component-Based Frameworks?',
      options: [
        'ផ្តល់ Components រួចស្រេចច្រើន',
        'ទំហំ CSS File ចុងក្រោយតូចជាង ដោយសារ Purge feature',
        'Learning Curve ទាបជាង',
        'កូដ HTML តិចជាង'
      ],
      correct: 1,
      explanation: 'Tailwind CSS មានគុណសម្បត្តិត្រង់ថាវាអនុញ្ញាតឱ្យទំហំ CSS File ចុងក្រោយតូចជាង ដោយសារវា Purge CSS ដែលមិនបានប្រើប្រាស់ចេញ។'
    },
    {
      question: 'តើ "boilerplate" code នៅក្នុងបរិបទនៃ CSS Frameworks សំដៅលើអ្វី?',
      options: [
        'CSS code ដែលមានកំហុស',
        'Code ដែលត្រូវបានប្រើម្តងហើយម្តងទៀតសម្រាប់ Layouts ស្តង់ដារ',
        'JavaScript code សម្រាប់ Functionality',
        'CSS code ដែលត្រូវបានសរសេរដោយដៃ'
      ],
      correct: 1,
      explanation: '"Boilerplate" code គឺសំដៅទៅលើ Code ដែលត្រូវបានប្រើម្តងហើយម្តងទៀត ឬរចនាសម្ព័ន្ធមូលដ្ឋានដែលផ្តល់ដោយ Frameworks សម្រាប់ Components ឬ Layouts ស្តង់ដារ។'
    },
    {
      question: 'តើហេតុអ្វីបានជាគេមិនណែនាំឱ្យប្រើ Tailwind CSS CDN សម្រាប់ Production Website?',
      options: [
        'វាមិនមាន Classes ទាំងអស់ទេ',
        'វាផ្ទុក CSS ទាំងអស់ដែលនាំឱ្យទំហំ File ធំ ជំនួសឱ្យការ Purge CSS ដែលមិនបានប្រើ',
        'វាមិនគាំទ្រ Responsive Design',
        'វាត្រូវការ JavaScript ដើម្បីដំណើរការ Styles'
      ],
      correct: 1,
      explanation: 'Tailwind CSS CDN ផ្ទុក CSS ពេញលេញទាំងអស់ដែលធ្វើឱ្យទំហំ File ធំ។ សម្រាប់ Production គេណែនាំឱ្យដំឡើង Tailwind ក្នុង Build Process ដើម្បីអាច Purge CSS ដែលមិនបានប្រើចេញ។'
    },
    {
      question: 'តើ Flexbox និង Grid System របស់ Framework ដូចជា Bootstrap ជួយដល់ Responsive Design យ៉ាងដូចម្តេច?',
      options: [
        'ពួកវាបង្ខំឱ្យ Layout មានទំហំថេរ',
        'ពួកវាអនុញ្ញាតឱ្យ Elements ផ្លាស់ប្តូរទំហំ និងរៀបចំទីតាំងដោយស្វ័យប្រវត្តិទៅតាមទំហំអេក្រង់',
        'ពួកវាប្រើសម្រាប់តែ Desktop Layouts ប៉ុណ្ណោះ',
        'ពួកវាលុបបំបាត់តម្រូវការសម្រាប់ Media Queries'
      ],
      correct: 1,
      explanation: 'Flexbox និង Grid System នៅក្នុង Frameworks ផ្តល់នូវមធ្យោបាយដ៏មានប្រសិទ្ធភាពក្នុងការរៀបចំ Elements ឡើងវិញ និងផ្លាស់ប្តូរទំហំរបស់ពួកវាដោយស្វ័យប្រវត្តិទៅតាមទំហំអេក្រង់ ធ្វើឱ្យ Responsive Design កាន់តែងាយស្រួល។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML មួយដែលប្រើប្រាស់ **Bootstrap** CDN ដើម្បីបង្កើត Layout គេហទំព័រសាមញ្ញមួយ។

**តម្រូវការ:**

1.  **HTML Structure:**
    * ត្រូវមាន \`<!DOCTYPE html>\`, \`<html>\`, \`<head>\`, និង \`<body>\` ។
    * បញ្ចូល **Bootstrap CSS CDN** នៅក្នុង \`<head>\` ។
    * បញ្ចូល **Bootstrap JavaScript Bundle CDN** មុនពេលបិទ \`</body>\` tag ។
    * បន្ថែម Viewport Meta Tag: \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` ។

2.  **Header Section:**
    * បង្កើត \`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">\` ។
    * ដាក់ \`<a class="navbar-brand" href="#">My Bootstrap Site</a>\` នៅខាងក្នុង។
    * បង្កើត Button សម្រាប់ Hamburger Menu (សម្រាប់ Responsive) ដោយប្រើ Class \`navbar-toggler\` និង \`data-bs-toggle="collapse"\` ទៅកាន់ Target ID មួយ។
    * បង្កើត \`div\` ជាមួយ Class \`collapse navbar-collapse\` និង ID ដែលត្រូវនឹង Button ខាងលើ។
    * នៅខាងក្នុង \`div\` នោះ ដាក់ \`<ul>\` ជាមួយ Class \`navbar-nav me-auto mb-2 mb-lg-0\` ។
    * បន្ថែម \`<li>\` ចំនួន 3 ទៅក្នុង \`<ul>\` នីមួយៗមាន Class \`nav-item\` និង \`<a>\` ជាមួយ Class \`nav-link\` (ឧទាហរណ៍: Home, About, Contact) ។

3.  **Main Content Section:**
    * បង្កើត \`div\` ជាមួយ Class \`container mt-4\` ។
    * ដាក់ \`<h1>\` ជាមួយ Class \`mb-4 text-center\` (ឧទាហរណ៍: Welcome to My Site) ។
    * បង្កើត \`div\` ជាមួយ Class \`row\` ។
    * នៅក្នុង \`row\` នោះ បង្កើត \`div\` ចំនួន 3 ។ សម្រាប់ \`div\` នីមួយៗ:
        * ផ្តល់ Class \`col-md-6 col-lg-4 mb-4\` ។ (នេះនឹងធ្វើឱ្យមាន 2 Columns នៅលើ Tablet និង 3 Columns នៅលើ Desktop) ។
        * នៅខាងក្នុង \`div\` នីមួយៗ ដាក់ \`<div class="card">\` ។
        * នៅក្នុង \`card\` ដាក់ \`<div class="card-body">\` ។
        * នៅក្នុង \`card-body\` ដាក់ \`<h5 class="card-title">Card Title X</h5>\` និង \`<p class="card-text">Some descriptive text for the card.</p>\` ។
        * បន្ថែម \`<a href="#" class="btn btn-primary">Go somewhere</a>\` ។

4.  **Footer Section:**
    * បង្កើត \`<footer>\` ជាមួយ Class \`bg-dark text-white text-center py-3 mt-5\` ។
    * ដាក់ \`<p class="mb-0">&copy; 2025 My Bootstrap Site. All rights reserved.</p>\` នៅខាងក្នុង។

**ការណែនាំ:** ប្រើ Bootstrap 5 CDN URLs ដែលមាននៅ Bootstrap Documentation (ឬក្នុងមាតិកាមេរៀន) ។ ត្រូវប្រាកដថា Links ត្រឹមត្រូវដើម្បីឱ្យ Styles និង JavaScript របស់ Bootstrap ដំណើរការ។
    `,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Responsive Layout</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Bootstrap Site</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container mt-4">
    <h1 class="mb-4 text-center">Welcome to My Awesome Site!</h1>
    
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/400x250/85C1E9/FFFFFF?text=Card+One" class="card-img-top" alt="Card Image One">
          <div class="card-body">
            <h5 class="card-title">Card Title One</h5>
            <p class="card-text">This is a fantastic card that demonstrates the power of Bootstrap's grid system and components.</p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/400x250/A2D9CE/FFFFFF?text=Card+Two" class="card-img-top" alt="Card Image Two">
          <div class="card-body">
            <h5 class="card-title">Card Title Two</h5>
            <p class="card-text">Another great example of a card. It's fully responsive, adapting to various screen sizes.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/400x250/F7DC6F/FFFFFF?text=Card+Three" class="card-img-top" alt="Card Image Three">
          <div class="card-body">
            <h5 class="card-title">Card Title Three</h5>
            <p class="card-text">Even more content here. Bootstrap makes it easy to build complex layouts quickly.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/400x250/D8BFD8/FFFFFF?text=Card+Four" class="card-img-top" alt="Card Image Four">
          <div class="card-body">
            <h5 class="card-title">Card Title Four</h5>
            <p class="card-text">This card will wrap to the next row on smaller screens, showcasing responsiveness.</p>
            <a href="#" class="btn btn-primary">Discover</a>
          </div>
        </div>
      </div>

    </div> </main>

  <footer class="bg-dark text-white text-center py-3 mt-5">
    <p class="mb-0">&copy; 2025 My Bootstrap Site. All rights reserved.</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>`
  }
};

export default CSSLesson5_3Content;