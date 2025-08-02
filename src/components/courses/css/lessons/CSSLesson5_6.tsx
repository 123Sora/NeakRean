// src/components/lessons/css/CSSLesson5_6.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson5_6Content: LessonContent = {
  title: 'Responsive Design Best Practices (វិធីសាស្រ្តល្អបំផុតសម្រាប់ Responsive Design)',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Responsive Design សម្រាប់បទពិសោធន៍អ្នកប្រើប្រាស់គ្រប់ឧបករណ៍',
    'រៀនពីគោលការណ៍សំខាន់ៗនៃ Responsive Web Design (RWD)',
    'ស្ទាត់ជំនាញក្នុងការប្រើប្រាស់ Viewport Meta Tag និង Media Queries',
    'យល់ដឹងពីគោលការណ៍ Mobile-First Approach',
    'រៀនពីរបៀបធ្វើឱ្យរូបភាព និងវីដេអូ Responsive',
    'ស្វែងយល់ពី Flexbox និង CSS Grid សម្រាប់ Layout Responsive កាន់តែមានប្រសិទ្ធភាព',
    'អាចអនុវត្ត Best Practices សម្រាប់ Responsive Design នៅក្នុងគម្រោងពិតប្រាកដ'
  ],
  content: `
# Responsive Design Best Practices (វិធីសាស្រ្តល្អបំផុតសម្រាប់ Responsive Design) 📱💻🖥️

---

**Responsive Design** គឺជាវិធីសាស្រ្តក្នុងការអភិវឌ្ឍន៍គេហទំព័រដែលអនុញ្ញាតឱ្យ Layout និងមាតិកាគេហទំព័រសម្របខ្លួនដោយស្វ័យប្រវត្តិទៅតាមទំហំអេក្រង់ និងប្រភេទឧបករណ៍របស់អ្នកប្រើប្រាស់ (ឧទាហរណ៍: ទូរស័ព្ទដៃ Tablet Desktop) ។ គោលបំណងគឺផ្តល់នូវបទពិសោធន៍អ្នកប្រើប្រាស់ល្អបំផុត ដោយមិនគិតពីឧបករណ៍ដែលពួកគេកំពុងប្រើប្រាស់។

---

## 1. គោលការណ៍សំខាន់ៗនៃ Responsive Web Design (RWD)

 Responsive Web Design ត្រូវបានបង្កើតឡើងដោយគោលការណ៍សំខាន់ៗចំនួនបី៖

1.  **Fluid Grids (ក្រឡាចត្រង្គអថេរ):** ការប្រើប្រាស់ Grid System ដែលមានមូលដ្ឋានលើភាគរយ (\`%\`) ជំនួសឱ្យ Fixed Pixels ដើម្បីឱ្យ Layout អាចបត់បែនបាន។
    * **ឧទាហរណ៍:** \`width: 100%;\` ឬ \`width: 30%;\` ជំនួសឱ្យ \`width: 300px;\` ។
2.  **Fluid Images (រូបភាពអថេរ):** រូបភាព និងវីដេអូដែលផ្លាស់ប្តូរទំហំដោយស្វ័យប្រវត្តិទៅតាមទំហំ Container របស់វា។
    * **ឧទាហរណ៍:** \`max-width: 100%; height: auto;\` ។
3.  **Media Queries (សំណួរ Media):** ច្បាប់ CSS ដែលអនុញ្ញាតឱ្យអ្នកអនុវត្ត Styles ខុសៗគ្នាដោយផ្អែកលើលក្ខណៈរបស់ឧបករណ៍ (ដូចជាទទឹងអេក្រង់ កម្ពស់ Orientation) ។
    * **ឧទាហរណ៍:** \`@media (max-width: 768px) { /* styles here */ }\` ។

---

## 2. Viewport Meta Tag

នេះគឺជាជំហានដំបូង និងសំខាន់បំផុតសម្រាប់ Responsive Design ។ វាប្រាប់ Browser ឱ្យកំណត់ទទឹងរបស់ទំព័រស្មើនឹងទទឹងអេក្រង់របស់ឧបករណ៍ ហើយកំណត់ Zoom Level ដំបូងឱ្យស្មើនឹង 1 ។

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

* **\`width=device-width\`:** កំណត់ទទឹង Viewport ទៅទទឹងរបស់ឧបករណ៍។
* **\`initial-scale=1.0\`:** កំណត់កម្រិត Zoom ដំបូងនៅពេលទំព័រត្រូវបានផ្ទុក។

---

## 3. Mobile-First Approach

**Mobile-First** គឺជាវិធីសាស្រ្តអភិវឌ្ឍន៍ដែលអ្នករចនា និងសរសេរ Code សម្រាប់ឧបករណ៍ទូរស័ព្ទដៃតូចបំផុតជាមុនសិន បន្ទាប់មកពង្រីក Layout សម្រាប់អេក្រង់ធំជាងដោយប្រើ Media Queries ។

* **អត្ថប្រយោជន៍:**
    * **Performance:** ផ្ទុក Styles តិចជាងសម្រាប់ឧបករណ៍តូចៗ ដែលបង្កើនល្បឿនផ្ទុក។
    * **User Experience (UX):** ផ្តោតលើមាតិកាសំខាន់ៗជាមុន។
    * **Simplification:** ជួយកំណត់អាទិភាពលក្ខណៈពិសេស។

\`\`\`css
/* Mobile-First Example */

/* Base styles for all screens (primarily mobile) */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 10px;
  font-size: 16px;
}

.container {
  width: 100%;
  padding: 15px;
  background-color: #f0f0f0;
}

.card {
  margin-bottom: 20px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 15px;
}

/* Media Query for larger screens (e.g., Tablets and up) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
  .card {
    display: inline-block; /* Simple example, Flexbox/Grid better */
    width: 48%; /* Two columns */
    margin-right: 2%;
    vertical-align: top;
  }
  .card:nth-child(2n) {
    margin-right: 0;
  }
}

/* Media Query for even larger screens (e.g., Desktops and up) */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
  .card {
    width: 31%; /* Three columns */
    margin-right: 3.5%;
  }
  .card:nth-child(2n) {
    margin-right: 3.5%; /* Reset for 3rd column */
  }
  .card:nth-child(3n) {
    margin-right: 0;
  }
}
\`\`\`

---

## 4. Media Queries

Media Queries គឺជាបេះដូងនៃ Responsive Design ។ ពួកវាអនុញ្ញាតឱ្យអ្នកអនុវត្ត CSS Styles ផ្សេងៗគ្នាដោយផ្អែកលើលក្ខខណ្ឌជាក់លាក់។

\`\`\`css
/* Basic Media Query Syntax */
@media screen and (max-width: 600px) {
  /* Styles apply when screen width is 600px or less */
  body {
    background-color: lightblue;
  }
}

@media screen and (min-width: 601px) and (max-width: 1024px) {
  /* Styles apply when screen width is between 601px and 1024px */
  body {
    background-color: lightcoral;
  }
}

@media screen and (min-width: 1025px) {
  /* Styles apply when screen width is 1025px or more */
  body {
    background-color: lightgreen;
  }
}

/* Other Media Features */
@media print {
  /* Styles for printing */
  body {
    font-size: 12pt;
    color: black;
  }
}

@media (orientation: landscape) {
  /* Styles for landscape orientation */
  .hero-section {
    height: 300px;
  }
}

@media (resolution: 2dppx) {
  /* Styles for high-resolution (Retina) displays */
  img {
    image-rendering: -webkit-optimize-contrast; /* Example */
  }
}
\`\`\`

---

## 5. Responsive Images and Media

ដើម្បីធ្វើឱ្យរូបភាព និងវីដេអូ Responsive ប្រើវិធីសាស្រ្តខាងក្រោម:

* **\`max-width: 100%; height: auto;\`:** នេះគឺជាច្បាប់មាសសម្រាប់រូបភាព។ \`max-width: 100%\` ធានាថារូបភាពនឹងមិនលើសពី Container របស់វាឡើយ ហើយ \`height: auto\` ធានាថាសមាមាត្ររូបភាពត្រូវបានរក្សាទុក។
    \`\`\`css
    img {
      max-width: 100%;
      height: auto;
      display: block; /* Remove extra space below image */
    }
    video, iframe {
      max-width: 100%;
      height: auto; /* Or use aspect-ratio for video/iframe */
    }
    \`\`\`

* **\`<picture>\` Element:** អនុញ្ញាតឱ្យអ្នកបញ្ជាក់ប្រភពរូបភាពច្រើនសម្រាប់ស្ថានភាពផ្សេងៗគ្នា (ឧទាហរណ៍: ទំហំ Resolution Format) ។ Browser នឹងជ្រើសរើសរូបភាពដែលសមស្របបំផុត។
    \`\`\`html
    <picture>
      <source srcset="img/large.webp" media="(min-width: 1200px)" type="image/webp">
      <source srcset="img/medium.webp" media="(min-width: 768px)" type="image/webp">
      <source srcset="img/small.webp" type="image/webp">
      <img src="img/fallback.jpg" alt="Responsive Image">
    </picture>
    \`\`\`

* **\`srcset\` Attribute (សម្រាប់ \`<img>\`):** ផ្តល់បញ្ជីប្រភពរូបភាពដែលមានទំហំខុសៗគ្នា ឬ Resolution ខុសៗគ្នា។ Browser នឹងជ្រើសរើសមួយដែលសមស្របបំផុត។
    \`\`\`html
    <img srcset="elva-small.jpg 480w, elva-medium.jpg 800w, elva-large.jpg 1200w"
          sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
          src="elva-large.jpg" alt="Elva image">
    \`\`\`

* **Video Aspect Ratio:** ប្រើ Padding-Bottom Hack ឬ \`aspect-ratio\` property (CSS ថ្មី) ។
    \`\`\`css
    /* Old method: Padding-Bottom Hack */
    .video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
      height: 0;
      overflow: hidden;
    }
    .video-container iframe,
    .video-container object,
    .video-container embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    /* New method: aspect-ratio (modern browsers) */
    .video-responsive {
      aspect-ratio: 16 / 9; /* Or 4 / 3, etc. */
      width: 100%;
      height: auto; /* Ensure it scales correctly */
    }
    \`\`\`

---

## 6. Responsive Layouts with Flexbox and CSS Grid

**Flexbox** និង **CSS Grid** គឺជាឧបករណ៍ Layout ដ៏មានឥទ្ធិពលបំផុតសម្រាប់ Responsive Design ។

### Flexbox (សម្រាប់ Layout មួយវិមាត្រ)

* ល្អបំផុតសម្រាប់ការរៀបចំ Elements នៅក្នុងជួរដេក (Row) ឬជួរឈរ (Column) មួយ។
* ឧទាហរណ៍: Navigation menus, Card components, Form layouts ។

\`\`\`css
.flex-container {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to next line */
  justify-content: space-between; /* Distribute items with space between them */
}

.flex-item {
  flex: 1 1 300px; /* flex-grow, flex-shrink, flex-basis */
  margin: 10px;
  background-color: lightgray;
  padding: 20px;
  box-sizing: border-box; /* Include padding in width */
}

/* Using Flexbox with Media Queries */
@media (max-width: 768px) {
  .flex-item {
    flex: 1 1 100%; /* Full width on smaller screens */
  }
}
\`\`\`

### CSS Grid (សម្រាប់ Layout ពីរវិមាត្រ)

* ល្អបំផុតសម្រាប់ការរៀបចំ Layouts ទំព័រទាំងមូល (Rows and Columns ក្នុងពេលតែមួយ) ។
* ឧទាហរណ៍: Website layouts, Complex component arrangements ។

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
  gap: 20px; /* Space between grid items */
  padding: 20px;
}

.grid-item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}

/* Using Grid with Media Queries */
@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
}

@media (min-width: 992px) {
  .grid-container {
    /* Define specific areas for different sections */
    grid-template-areas:
      "header header header"
      "sidebar content content"
      "footer footer footer";
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto 1fr auto;
  }
  .header { grid-area: header; }
  .sidebar { grid-area: sidebar; }
  .content { grid-area: content; }
  .footer { grid-area: footer; }
}
\`\`\`

---

## 7. Responsive Typography

* ប្រើ Relative Units: \`em\`, \`rem\`, \`vw\` ជំនួសឱ្យ \`px\` សម្រាប់ Font Sizes ។
    * **\`em\`:** Relative ទៅ Parent's font-size ។
    * **\`rem\`:** Relative ទៅ Root (HTML) font-size ។
    * **\`vw\` (Viewport Width):** Relative ទៅទទឹងរបស់ Viewport ។
* **Media Queries សម្រាប់ Font Sizes:**
    \`\`\`css
    h1 {
      font-size: 2em; /* Default for mobile */
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 3em; /* Larger for tablet */
      }
    }

    @media (min-width: 1024px) {
      h1 {
        font-size: 4rem; /* Even larger for desktop */
      }
    }
    \`\`\`
* **Fluid Typography (CSS clamp()):** (សម្រាប់ Browser ទំនើប) អនុញ្ញាតឱ្យ Font Size ផ្លាស់ប្តូរដោយរលូនរវាងទំហំអប្បបរមា អតិបរមា និងទំហំដែលផ្អែកលើ Viewport ។
    \`\`\`css
    h1 {
      /* min-size, fluid-size, max-size */
      font-size: clamp(2rem, 5vw, 4rem);
    }
    \`\`\`

---

## 8. Testing Responsive Design

* **Browser Developer Tools:** ប្រើ Device Emulation Mode (Inspect Element -> Toggle Device Toolbar) ។
* **Resize Browser Window:** អូសកែទំហំ Browser Window ដោយដៃ។
* **Test on Real Devices:** នេះសំខាន់បំផុតដើម្បីធានាបទពិសោធន៍ពិតប្រាកដ។
`,
  examples: [
    `<h3>ឧទាហរណ៍ Responsive Card Layout ជាមួយ Flexbox (Mobile-First)</h3>
<p><b>Resize the browser window to see the effect!</b></p>
<div class="flex-cards-container">
  <div class="flex-card">
    <img src="https://via.placeholder.com/300x180/85C1E9/000000?text=Product+1" alt="Product 1" class="flex-card__image">
    <div class="flex-card__content">
      <h4 class="flex-card__title">Responsive Gadget A</h4>
      <p class="flex-card__description">A brief description of product A, designed to be fully responsive.</p>
      <button class="flex-card__button">View Details</button>
    </div>
  </div>
  <div class="flex-card">
    <img src="https://via.placeholder.com/300x180/A2D9CE/000000?text=Product+2" alt="Product 2" class="flex-card__image">
    <div class="flex-card__content">
      <h4 class="flex-card__title">Smart Device B</h4>
      <p class="flex-card__description">Product B has adaptive layout, thanks to Flexbox properties.</p>
      <button class="flex-card__button">Add to Cart</button>
    </div>
  </div>
  <div class="flex-card">
    <img src="https://via.placeholder.com/300x180/F7DC6F/000000?text=Product+3" alt="Product 3" class="flex-card__image">
    <div class="flex-card__content">
      <h4 class="flex-card__title">Innovative Item C</h4>
      <p class="flex-card__description">Item C provides a consistent user experience across all devices.</p>
      <button class="flex-card__button">Buy Now</button>
    </div>
  </div>
</div>

<pre><code class="language-html">
&lt;!-- HTML Structure --&gt;
&lt;div class="flex-cards-container"&gt;
  &lt;div class="flex-card"&gt;
    &lt;img src="..." alt="..." class="flex-card__image"&gt;
    &lt;div class="flex-card__content"&gt;
      &lt;h4 class="flex-card__title"&gt;...&lt;/h4&gt;
      &lt;p class="flex-card__description"&gt;...&lt;/p&gt;
      &lt;button class="flex-card__button"&gt;...&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- More .flex-card items --&gt;
&lt;/div&gt;
</code></pre>
<pre><code class="language-css">
/* CSS for Responsive Card Layout (Mobile-First) */

/* Base styles for .flex-card__image to be responsive */
.flex-card__image {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Mobile-first: cards stack vertically */
.flex-cards-container {
  display: flex;
  flex-direction: column; /* Stack vertically by default */
  align-items: center; /* Center cards horizontally */
  padding: 10px;
}

.flex-card {
  width: 100%; /* Full width on small screens */
  max-width: 300px; /* Max width for single card on mobile */
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: white;
}

.flex-card__content {
  padding: 15px;
}

.flex-card__title {
  font-size: 1.2em;
  margin-top: 0;
}

.flex-card__description {
  font-size: 0.9em;
  color: #555;
}

.flex-card__button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}

/* Tablet and larger screens: 2 columns */
@media (min-width: 768px) {
  .flex-cards-container {
    flex-direction: row; /* Layout in a row */
    flex-wrap: wrap; /* Allow cards to wrap */
    justify-content: center; /* Center items when they don't fill a full row */
    padding: 20px;
  }
  .flex-card {
    width: calc(50% - 40px); /* Two columns with margin */
    margin: 10px; /* Uniform margin */
  }
}

/* Desktop and larger screens: 3 columns */
@media (min-width: 1024px) {
  .flex-cards-container {
    justify-content: space-between; /* Distribute items evenly */
    max-width: 1200px; /* Max width for the container */
    margin: 0 auto; /* Center the container */
  }
  .flex-card {
    width: calc(33.333% - 40px); /* Three columns with margin */
    margin: 10px;
  }
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើអ្វីទៅជាគោលបំណងចម្បងនៃ Responsive Design?',
      options: [
        'ដើម្បីធ្វើឱ្យគេហទំព័រមើលទៅដូចគ្នានៅលើគ្រប់ឧបករណ៍',
        'ដើម្បីកាត់បន្ថយទំហំ CSS File',
        'ដើម្បីអនុញ្ញាតឱ្យ Layout និងមាតិកាគេហទំព័រសម្របខ្លួនទៅតាមទំហំអេក្រង់ និងប្រភេទឧបករណ៍',
        'ដើម្បីបង្កើនល្បឿនផ្ទុកគេហទំព័រដោយមិនគិតពីមាតិកា'
      ],
      correct: 2,
      explanation: 'Responsive Design គឺជាវិធីសាស្រ្តដែលអនុញ្ញាតឱ្យ Layout និងមាតិកាគេហទំព័រសម្របខ្លួនដោយស្វ័យប្រវត្តិទៅតាមទំហំអេក្រង់ និងប្រភេទឧបករណ៍របស់អ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ Viewport Meta Tag `width=device-width` មានន័យដូចម្តេច?',
      options: [
        'កំណត់ទទឹងរបស់ Browser ទៅ 100%',
        'កំណត់ទទឹងរបស់ទំព័រស្មើនឹងទទឹងអេក្រង់របស់ឧបករណ៍',
        'កំណត់ទទឹងអតិបរមាសម្រាប់រូបភាព',
        'កំណត់ទទឹងរបស់ Font ទៅតាមទំហំឧបករណ៍'
      ],
      correct: 1,
      explanation: '`width=device-width` ប្រាប់ Browser ឱ្យកំណត់ទទឹងរបស់ទំព័រស្មើនឹងទទឹងអេក្រង់របស់ឧបករណ៍ដែលកំពុងប្រើប្រាស់។'
    },
    {
      question: 'តើ `Mobile-First Approach` មានន័យដូចម្តេច?',
      options: [
        'រចនាសម្រាប់ Desktop ជាមុនសិន រួចប្តូរទៅ Mobile',
        'រចនា និងសរសេរ Code សម្រាប់ឧបករណ៍ទូរស័ព្ទដៃតូចបំផុតជាមុនសិន បន្ទាប់មកពង្រីកសម្រាប់អេក្រង់ធំ',
        'ប្រើតែ JavaScript សម្រាប់ Responsive Design',
        'បង្កើត App សម្រាប់ Mobile ជំនួសឱ្យ Website'
      ],
      correct: 1,
      explanation: 'Mobile-First Approach គឺការរចនា និងសរសេរ Code សម្រាប់ឧបករណ៍ទូរស័ព្ទដៃតូចបំផុតជាមុនសិន បន្ទាប់មកពង្រីក Layout សម្រាប់អេក្រ្រង់ធំជាង។'
    },
    {
      question: 'តើ CSS Rule មួយណាដែលត្រូវបានប្រើដើម្បីធ្វើឱ្យរូបភាព Responsive?',
      options: [
        '`width: auto; height: 100%;`',
        '`max-width: 100%; height: auto;`',
        '`display: none;`',
        '`font-size: large;`'
      ],
      correct: 1,
      explanation: '`max-width: 100%; height: auto;` គឺជាច្បាប់មាសសម្រាប់ធ្វើឱ្យរូបភាព Responsive ដោយធានាថារូបភាពមិនលើសពី Container និងរក្សាសមាមាត្រ។'
    },
    {
      question: 'តើ `Media Queries` អនុញ្ញាតឱ្យអ្នកធ្វើអ្វីខ្លះ?',
      options: [
        'អនុវត្ត JavaScript Animation',
        'អនុវត្ត Styles ខុសៗគ្នាដោយផ្អែកលើលក្ខណៈរបស់ឧបករណ៍ (ដូចជាទទឹងអេក្រង់)',
        'ផ្ទុក Font ពីខាងក្រៅ',
        'រៀបចំ Content នៅក្នុង HTML'
      ],
      correct: 1,
      explanation: 'Media Queries អនុញ្ញាតឱ្យអ្នកអនុវត្ត CSS Styles ផ្សេងៗគ្នាដោយផ្អែកលើលក្ខខណ្ឌជាក់លាក់របស់ឧបករណ៍។'
    },
    {
      question: 'តើ `min-width` ក្នុង Media Query មានន័យដូចម្តេច?',
      options: [
        'អនុវត្ត Styles នៅពេលទទឹងអេក្រង់តិចជាងតម្លៃដែលបានកំណត់',
        'អនុវត្ត Styles នៅពេលទទឹងអេក្រង់ធំជាង ឬស្មើនឹងតម្លៃដែលបានកំណត់',
        'កំណត់ទទឹងអប្បបរមាសម្រាប់ Element',
        'កំណត់ទទឹងអតិបរមាសម្រាប់ Element'
      ],
      correct: 1,
      explanation: '`min-width` ក្នុង Media Query មានន័យថា Styles នឹងត្រូវបានអនុវត្តនៅពេលទទឹងអេក្រង់ធំជាង ឬស្មើនឹងតម្លៃដែលបានកំណត់។'
    },
    {
      question: 'តើ Flexbox ល្អបំផុតសម្រាប់ Layout ប្រភេទណា?',
      options: [
        'Layouts ទំព័រទាំងមូល (ពីរវិមាត្រ)',
        'Layout មួយវិមាត្រ (ជួរដេក ឬជួរឈរ)',
        'Typography Styles',
        'Animations'
      ],
      correct: 1,
      explanation: 'Flexbox ល្អបំផុតសម្រាប់ការរៀបចំ Elements នៅក្នុងជួរដេក (Row) ឬជួរឈរ (Column) មួយ (Layout មួយវិមាត្រ) ។'
    },
    {
      question: 'តើ CSS Grid ល្អបំផុតសម្រាប់ Layout ប្រភេទណា?',
      options: [
        'Layout មួយវិមាត្រ (ជួរដេក ឬជួរឈរ)',
        'Animations',
        'Layouts ទំព័រទាំងមូល (Rows and Columns ក្នុងពេលតែមួយ)',
        'សម្រាប់រូបភាពតែប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'CSS Grid ល្អបំផុតសម្រាប់ការរៀបចំ Layouts ទំព័រទាំងមូល (Rows and Columns ក្នុងពេលតែមួយ) (Layout ពីរវិមាត្រ) ។'
    },
    {
      question: 'តើ `<picture>` Element ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបង្កើនល្បឿនផ្ទុកវីដេអូ',
        'ដើម្បីបង្ហាញរូបភាពជា Gallery',
        'ដើម្បីបញ្ជាក់ប្រភពរូបភាពច្រើនសម្រាប់ស្ថានភាពផ្សេងៗគ្នា (ទំហំ Resolution Format) សម្រាប់ Browser ជ្រើសរើស',
        'ដើម្បីបន្ថែម Caption ទៅរូបភាព'
      ],
      correct: 2,
      explanation: '`<picture>` Element អនុញ្ញាតឱ្យអ្នកបញ្ជាក់ប្រភពរូបភាពច្រើនសម្រាប់ស្ថានភាពផ្សេងៗគ្នា (ទំហំ Resolution Format) ដើម្បីឱ្យ Browser អាចជ្រើសរើសរូបភាពដែលសមស្របបំផុត។'
    },
    {
      question: 'តើ Unit ណាដែលត្រូវបានណែនាំសម្រាប់ការកំណត់ Font Sizes នៅក្នុង Responsive Typography?',
      options: [
        '`px` (pixels)',
        '`cm` (centimeters)',
        '`em`, `rem`, `vw`',
        '`in` (inches)'
      ],
      correct: 2,
      explanation: '`em`, `rem`, និង `vw` គឺជា Unit ដែលត្រូវបានណែនរសម្រាប់កំណត់ Font Sizes នៅក្នុង Responsive Typography ព្រោះវាជា Relative Units ។'
    },
    {
      question: 'តើ `initial-scale=1.0` ក្នុង Viewport Meta Tag ធ្វើអ្វី?',
      options: [
        'កំណត់កម្រិត Zoom ដំបូងនៅពេលទំព័រត្រូវបានផ្ទុក',
        'កំណត់កម្រិត Zoom អតិបរមា',
        'ធ្វើឱ្យទំព័រមិនអាច Zoom បាន',
        'កំណត់ទំហំ Font ដំបូង'
      ],
      correct: 0,
      explanation: '`initial-scale=1.0` កំណត់កម្រិត Zoom ដំបូងនៅពេលទំព័រត្រូវបានផ្ទុកឱ្យស្មើនឹង 1 (គ្មាន Zoom) ។'
    },
    {
      question: 'តើ `fluid grids` ក្នុង Responsive Design មានន័យដូចម្តេច?',
      options: [
        'ការប្រើប្រាស់ Grid System ដែលមានមូលដ្ឋានលើ Fixed Pixels',
        'ការប្រើប្រាស់ Grid System ដែលមានមូលដ្ឋានលើភាគរយ (%)',
        'Grid System ដែលប្រើ JavaScript សម្រាប់ Layout',
        'Grid System សម្រាប់តែរូបភាព'
      ],
      correct: 1,
      explanation: 'Fluid Grids គឺការប្រើប្រាស់ Grid System ដែលមានមូលដ្ឋានលើភាគរយ (%) ជំនួសឱ្យ Fixed Pixels ដើម្បីឱ្យ Layout អាចបត់បែនបាន។'
    },
    {
      question: 'តើ `orientation: landscape` ក្នុង Media Query ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'Styles សម្រាប់ Portrait Mode',
        'Styles សម្រាប់ Landscape Mode',
        'Styles សម្រាប់ Printing',
        'Styles សម្រាប់ High-Resolution Displays'
      ],
      correct: 1,
      explanation: '`orientation: landscape` ប្រើសម្រាប់អនុវត្ត Styles នៅពេលឧបករណ៍ស្ថិតនៅក្នុង Landscape Mode (ទទឹងធំជាងកម្ពស់) ។'
    },
    {
      question: 'តើ `clamp()` CSS function ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'សម្រាប់កំណត់ Border Radius',
        'សម្រាប់ធ្វើឱ្យ Font Size ផ្លាស់ប្តូរដោយរលូនរវាងទំហំអប្បបរមា អតិបរមា និងទំហំដែលផ្អែកលើ Viewport',
        'សម្រាប់កំណត់ទីតាំង Element',
        'សម្រាប់កាត់រូបភាព'
      ],
      correct: 1,
      explanation: '`clamp()` CSS function (សម្រាប់ Browser ទំនើប) អនុញ្ញាតឱ្យ Font Size ផ្លាស់ប្តូរដោយរលូនរវាងទំហំអប្បបរមា អតិបរមា និងទំហំដែលផ្អែកលើ Viewport ។'
    },
    {
      question: 'តើការ Test Responsive Design នៅលើ `Real Devices` សំខាន់ដោយហេតុផលអ្វី?',
      options: [
        'ដើម្បីធានាថា Code ដំណើរការតែលើទូរស័ព្ទដៃប៉ុណ្ណោះ',
        'ដើម្បីមើលថាគេហទំព័រមើលទៅដូចគ្នានៅលើគ្រប់ Browser',
        'ដើម្បីធានាបទពិសោធន៍អ្នកប្រើប្រាស់ពិតប្រាកដ និងចាប់កំហុសដែល Device Emulation មិនអាចរកឃើញ',
        'ដើម្បីកាត់បន្ថយពេលវេលាអភិវឌ្ឍន៍'
      ],
      correct: 2,
      explanation: 'ការ Test នៅលើ Real Devices គឺសំខាន់បំផុតដើម្បីធានាបទពិសោធន៍អ្នកប្រើប្រាស់ពិតប្រាកដ និងចាប់កំហុសដែល Device Emulation នៅក្នុង Browser អាចនឹងមិនបង្ហាញ។'
    },
    {
      question: 'តើ Class `flex-wrap: wrap;` ក្នុង Flexbox ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យ Items បាត់បង់',
        'ធ្វើឱ្យ Items តម្រង់ជួរតែមួយជានិច្ច',
        'អនុញ្ញាតឱ្យ Items រុំទៅបន្ទាត់បន្ទាប់ប្រសិនបើមិនមានកន្លែងគ្រប់គ្រាន់ក្នុងជួរដេកបច្ចុប្បន្ន',
        'ធ្វើឱ្យ Items លាតសន្ធឹងពេញទទឹង Container'
      ],
      correct: 2,
      explanation: '`flex-wrap: wrap;` អនុញ្ញាតឱ្យ Flex Items រុំទៅបន្ទាត់បន្ទាប់ ប្រសិនបើមិនមានកន្លែងគ្រប់គ្រាន់នៅក្នុងជួរដេកបច្ចុប្បន្ន ដែលជួយដល់ Responsive Layout ។'
    },
    {
      question: 'តើ `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` ក្នុង CSS Grid ធ្វើអ្វី?',
      options: [
        'បង្កើត Column តែមួយដែលមានទទឹង 250px',
        'បង្កើត Column ចំនួន 250',
        'បង្កើត Column ដែលឆ្លើយតប (Responsive) ដោយស្វ័យប្រវត្តិ ដោយមានទទឹងអប្បបរមា 250px និងលាតសន្ធឹងដើម្បីបំពេញចន្លោះ',
        'កំណត់ Column ឱ្យមានទទឹងថេរ'
      ],
      correct: 2,
      explanation: '`repeat(auto-fit, minmax(250px, 1fr))` គឺជាលំនាំ Grid ដ៏មានឥទ្ធិពលដែលបង្កើត Column ដែលឆ្លើយតប (Responsive) ដោយស្វ័យប្រវត្តិ។ វាព្យាយាមសមនឹងចំនួន Column ឱ្យបានច្រើនតាមដែលអាចធ្វើទៅបាន ដោយ Column នីមួយៗមានទទឹងអប្បបរមា 250px និងលាតសន្ធឹងដើម្បីបំពេញចន្លោះ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធ Layout សាមញ្ញ ដោយប្រើប្រាស់ **Responsive Design Best Practices** រួមមាន **Viewport Meta Tag**, **Mobile-First CSS**, **Media Queries**, និង **Responsive Images** ។

**តម្រូវការ:**

1.  **HTML Structure (\`index.html\`):**
    * ត្រូវមាន \`<!DOCTYPE html>\`, \`<html>\`, \`<head>\`, និង \`<body>\` ។
    * **Viewport Meta Tag:** បញ្ចូល \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` ក្នុង \`<head>\` ។
    * **External CSS:** ភ្ជាប់ទៅឯកសារ CSS ខាងក្រៅ (\`style.css\`) ក្នុង \`<head>\` ។
    * **Header:** \`<header class="main-header">\` ជាមួយ \`<h1>\` Title ។
    * **Main Content (Flexbox Card Layout):**
        * \`<main class="container">\`
        * \`<section class="product-grid">\` (នេះជា Flex Container)
        * នៅខាងក្នុង \`product-grid\` បង្កើត \`div\` ចំនួន 4 សម្រាប់ \`product-card\` នីមួយៗ។
        * \`div\` នីមួយៗមាន Class \`product-card\` ។
        * ខាងក្នុង \`product-card\`:
            * \`<img src="https://via.placeholder.com/400x250/d7e4f7/000000?text=Product+Image" alt="Product" class="product-card__image">\`
            * \`<h3 class="product-card__title">Product Name X</h3>\`
            * \`<p class="product-card__description">A short description of product X, designed for all screen sizes.</p>\`
            * \`<a href="#" class="product-card__button">Buy Now</a>\`
    * **Footer:** \`<footer class="main-footer">\` ជាមួយ \`<p>\` Copyright Text ។

2.  **CSS Styling (\`style.css\`) ដោយប្រើ Mobile-First Approach:**

    * **Global/Base Styles (សម្រាប់ Mobile ជាចម្បង):**
        * \`body\`: \`font-family\`, \`margin\`, \`background-color\`, \`line-height\` ។
        * \`.container\`: \`padding\`, \`max-width: 100%\`, \`margin: 0 auto;\` ។
        * **Responsive Image Rule:** \`img\`: \`max-width: 100%; height: auto; display: block;\` ។
        * \`.main-header\`, \`.main-footer\`: \`background-color\`, \`color\`, \`padding\`, \`text-align\` ។
        * \`.product-grid\`: \`display: flex; flex-direction: column; align-items: center; gap: 20px;\` (stack vertically on mobile) ។
        * \`.product-card\`: \`width: 90%; max-width: 300px; border; border-radius; box-shadow; background-color;\` ។
        * \`.product-card__image\`: \`border-radius\` (top corners only) ។
        * \`.product-card__title\`, \`__description\`, \`__button\`: \`padding\`, \`margin\`, \`font-size\`, \`text-align\`, \`color\`, \`background\`, \`border-radius\`, \`display: block;\` ។

    * **Media Queries (សម្រាប់ Tablet និង Desktop):**

        * **\`@media (min-width: 768px)\` (Tablet Layout):**
            * \`.container\`: \`max-width: 720px;\` ។
            * \`.product-grid\`: \`flex-direction: row; flex-wrap: wrap; justify-content: center;\` ។
            * \`.product-card\`: \`width: calc(50% - 40px);\` (2 columns with gap). Adjust \`margin\` if \`gap\` isn't enough.

        * **\`@media (min-width: 1024px)\` (Desktop Layout):**
            * \`.container\`: \`max-width: 960px;\` ។
            * \`.product-grid\`: \`justify-content: space-between;\` (for even distribution) ។
            * \`.product-card\`: \`width: calc(33.33% - 40px);\` (3 columns with gap).

**ការណែនាំ:**
* សរសេរ CSS សម្រាប់ទំហំអេក្រង់តូចបំផុតជាមុនសិន។
* ប្រើ \`min-width\` សម្រាប់ Media Queries ។
* សាកល្បងដោយការបង្រួម/ពង្រីក Browser Window ឬប្រើ Device Emulation (Developer Tools) ។
    `,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Lab</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

  <header class="main-header">
    <h1>Our Responsive Products</h1>
  </header>

  <main class="container">
    <section class="product-grid">
      <div class="product-card">
        <img src="https://via.placeholder.com/400x250/d7e4f7/000000?text=Modern+Chair" alt="Modern Chair" class="product-card__image">
        <h3 class="product-card__title">Ergonomic Office Chair</h3>
        <p class="product-card__description">Experience comfort and style with our latest ergonomic chair. Perfect for long working hours.</p>
        <a href="#" class="product-card__button">View Details</a>
      </div>

      <div class="product-card">
        <img src="https://via.placeholder.com/400x250/cce5ff/000000?text=Smart+Speaker" alt="Smart Speaker" class="product-card__image">
        <h3 class="product-card__title">Smart Home Speaker</h3>
        <p class="product-card__description">Control your home with your voice, play music, and get daily updates with this smart device.</p>
        <a href="#" class="product-card__button">Add to Cart</a>
      </div>

      <div class="product-card">
        <img src="https://via.placeholder.com/400x250/e0f0d9/000000?text=Wireless+Earbuds" alt="Wireless Earbuds" class="product-card__image">
        <h3 class="product-card__title">True Wireless Earbuds</h3>
        <p class="product-card__description">Immerse yourself in high-fidelity audio with our comfortable and long-lasting earbuds.</p>
        <a href="#" class="product-card__button">Buy Now</a>
      </div>

      <div class="product-card">
        <img src="https://via.placeholder.com/400x250/f7e0d7/000000?text=Portable+Charger" alt="Portable Charger" class="product-card__image">
        <h3 class="product-card__title">Ultra-Compact Power Bank</h3>
        <p class="product-card__description">Never run out of battery with this powerful and portable charging solution for all your devices.</p>
        <a href="#" class="product-card__button">Learn More</a>
      </div>
    </section>
  </main>

  <footer class="main-footer">
    <p>&copy; 2025 Responsive Design. All rights reserved.</p>
  </footer>

</body>
</html>
`, // COMMA ADDED HERE
    css: `/* style.css */

/* Global/Base Styles (Mobile-First) */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  background-color: #f4f7f6;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 100%; /* Default for mobile */
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box; /* Include padding in element's total width and height */
}

/* Responsive Image Rule */
img {
  max-width: 100%;
  height: auto;
  display: block; /* Removes extra space below image */
}

/* Header Styles */
.main-header {
  background-color: #34495e;
  color: white;
  padding: 20px 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.main-header h1 {
  margin: 0;
  font-size: 1.8em; /* Mobile font size */
}

/* Product Grid (Flex Container) - Mobile-First */
.product-grid {
  display: flex;
  flex-direction: column; /* Stack cards vertically by default */
  align-items: center; /* Center cards horizontally on mobile */
  gap: 20px; /* Space between cards */
  padding: 20px 0; /* Add vertical padding to the grid section */
}

/* Product Card - Mobile-First */
.product-card {
  width: 90%; /* Occupy 90% of container width on mobile */
  max-width: 320px; /* Maximum width for a single card on small screens */
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  background-color: white;
  overflow: hidden;
  display: flex; /* Flex container for image and content */
  flex-direction: column; /* Stack image and content vertically */
  transition: transform 0.2s ease-in-out;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card__image {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%; /* Ensure image fills card width */
  height: 200px; /* Fixed height for consistent card appearance */
  object-fit: cover; /* Crop image to fit */
}

.product-card__title {
  font-size: 1.4em;
  color: #2c3e50;
  margin: 15px 15px 10px 15px; /* Adjust margins */
  text-align: center;
}

.product-card__description {
  font-size: 0.95em;
  color: #555;
  padding: 0 15px; /* Add horizontal padding */
  margin-bottom: 15px;
  text-align: center;
}

.product-card__button {
  display: block; /* Make button full width */
  background-color: #3498db; /* Blue button */
  color: white;
  padding: 12px 15px;
  border: none;
  border-radius: 0 0 8px 8px; /* Rounded bottom corners */
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
  transition: background-color 0.3s ease;
  margin-top: auto; /* Push button to the bottom if content varies */
}

.product-card__button:hover {
  background-color: #2980b9;
}


/* --- Media Queries --- */
/* Tablet Layout (min-width: 768px) */
@media (min-width: 768px) {
  .container {
    max-width: 720px; /* Constrain container width */
    padding: 20px;
  }

  .main-header h1 {
    font-size: 2.2em;
  }

  .product-grid {
    flex-direction: row; /* Change to row layout */
    flex-wrap: wrap; /* Allow wrapping */
    justify-content: space-around; /* Distribute cards */
  }

  .product-card {
    width: calc(50% - 30px); /* Two columns with 20px gap on each side */
    margin-bottom: 20px; /* Keep bottom margin for wrapped items */
  }
}

/* Desktop Layout (min-width: 1024px) */
@media (min-width: 1024px) {
  .container {
    max-width: 960px; /* Constrain container width */
  }

  .main-header h1 {
    font-size: 2.8em;
  }

  .product-grid {
    justify-content: space-between; /* Even distribution */
  }

  .product-card {
    width: calc(33.333% - 20px); /* Three columns with gap */
  }
}
`
  },
};

export default CSSLesson5_6Content;