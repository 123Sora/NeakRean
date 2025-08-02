// src/components/lessons/css/CSSLesson6_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson6_3Content: LessonContent = {
  title: 'CSS Grid Layout (គ្រីដឡេអាវ CSS)',
  objectives: [
    'ស្វែងយល់ពីគោលគំនិត និងអត្ថប្រយោជន៍នៃ CSS Grid Layout ។',
    'បែងចែករវាង Grid Container និង Grid Items ។',
    'រៀនពីរបៀបបង្កើត Grid ដោយប្រើ Property `display: grid` ។',
    'យល់ និងអនុវត្ត Property សម្រាប់ Grid Container ដូចជា `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `gap`, `justify-items`, `align-items`, `justify-content`, និង `align-content` ។',
    'យល់ និងអនុវត្ត Property សម្រាប់ Grid Items ដូចជា `grid-row-start`, `grid-row-end`, `grid-column-start`, `grid-column-end`, `grid-area`, `justify-self`, និង `align-self` ។',
    'អាចប្រើ `fr` unit សម្រាប់ទំហំ Column/Row ដែលមានភាពបត់បែន។',
    'អាចប្រើ Function `repeat()` និង `minmax()` សម្រាប់ការបង្កើត Grid កាន់តែស្មុគស្មាញ។',
    'អាចអនុវត្ត CSS Grid សម្រាប់ការរចនា Layout ពីរវិមាត្រ និង Layout ដែលមានភាពឆ្លើយតប (Responsive Layouts) ។'
  ],
  content: `
# CSS Grid Layout (គ្រីដឡេអាវ CSS) 📐

---

**CSS Grid Layout** គឺជាប្រព័ន្ធ Layout ពីរវិមាត្រ (two-dimensional) ដ៏មានអានុភាពសម្រាប់គេហទំព័រ។ វាអនុញ្ញាតឱ្យអ្នករៀបចំ Content ទៅជាជួរដេក (rows) និងជួរឈរ (columns) យ៉ាងងាយស្រួល ធ្វើឱ្យការរចនា Layout ស្មុគស្មាញមានភាពសាមញ្ញ។

ខុសពី Flexbox ដែលដំណើរការជាចម្បងក្នុងមួយវិមាត្រ (ជួរដេក ឬជួរឈរ) Grid អាចគ្រប់គ្រងទាំងជួរដេក និងជួរឈរក្នុងពេលតែមួយ។

## គោលគំនិតសំខាន់ៗ (Key Concepts)

1.  **Grid Container (គ្រីដកុងតឺន័រ)**: Element មេ (parent element) ដែលត្រូវបានកំណត់ \`display: grid\` ឬ \`display: inline-grid\`។ វាជាអ្នកកំណត់រចនាសម្ព័ន្ធក្រឡាចត្រង្គ (grid) ។
2.  **Grid Items (គ្រីដធាតុ)**: Elements កូន (child elements) ផ្ទាល់របស់ Grid Container ។ ពួកវាត្រូវបានដាក់ក្នុងក្រឡាចត្រង្គ។
3.  **Grid Lines (បន្ទាត់គ្រីដ)**: បន្ទាត់ផ្តេក និងបញ្ឈរដែលបង្កើតរចនាសម្ព័ន្ធក្រឡាចត្រង្គ។ ពួកវាត្រូវបានរាប់លេខចាប់ពី 1 ។
4.  **Grid Tracks (ផ្លូវគ្រីដ)**: ចន្លោះរវាងបន្ទាត់ Grid ពីរ។ ទាំងនេះគឺជាជួរដេក ឬជួរឈរ។
5.  **Grid Cells (ក្រឡាគ្រីដ)**: ចន្លោះប្រសព្វរវាង Grid Row Track និង Grid Column Track មួយ។ វាដូចជា "ប្រអប់" តែមួយនៅក្នុងក្រឡាចត្រង្គ។
6.  **Grid Areas (តំបន់គ្រីដ)**: តំបន់ចតុកោណកែងដែលបង្កើតឡើងដោយ Grid Cells មួយ ឬច្រើន។

\`\`\`html
<style>
  .grid-container-concept {
    display: grid; /* Makes this div a grid container */
    grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
    grid-template-rows: 100px 100px; /* 2 rows, 100px height each */
    background-color: #f0f8ff; /* AliceBlue */
    border: 2px dashed #4682b4; /* SteelBlue */
    padding: 10px;
    gap: 10px; /* Space between items */
  }
  .grid-item-concept {
    background-color: #87cefa; /* LightSkyBlue */
    border: 1px solid #1e90ff; /* DodgerBlue */
    padding: 15px;
    text-align: center;
    color: white;
    font-weight: bold;
    display: flex; /* For centering content within item */
    justify-content: center;
    align-items: center;
  }
</style>
<div class="grid-container-concept">
  <div class="grid-item-concept">Item 1</div>
  <div class="grid-item-concept">Item 2</div>
  <div class="grid-item-concept">Item 3</div>
  <div class="grid-item-concept">Item 4</div>
  <div class="grid-item-concept">Item 5</div>
  <div class="grid-item-concept">Item 6</div>
</div>
<p style="text-align: center; font-size: 0.9em; color: #555;">
  Parent is the <strong>Grid Container</strong>, children are <strong>Grid Items</strong>.
</p>
\`\`\`

---

## Properties for the Grid Container (សម្រាប់ Grid កុងតឺន័រ)

Property ទាំងនេះត្រូវបានអនុវត្តទៅលើ Element មេ (Grid Container) ដើម្បីកំណត់រចនាសម្ព័ន្ធក្រឡាចត្រង្គ។

### 1. \`display\`

កំណត់ Element មួយឱ្យក្លាយជា Grid Container ។

* **\`grid\`**: បង្កើត Block-level Grid Container ។
* **\`inline-grid\`**: បង្កើត Inline-level Grid Container ។

\`\`\`css
.container {
  display: grid; /* Or display: inline-grid; */
}
\`\`\`

---

### 2. \`grid-template-columns\` & \`grid-template-rows\`

កំណត់ចំនួន ទទឹង/កម្ពស់របស់ជួរឈរ និងជួរដេក។

* **Fixed sizes**: \`grid-template-columns: 100px 200px auto;\` (3 columns: 100px, 200px, remaining space)
* **Flexible units (\`fr\`)**: \`fr\` (fractional unit) តំណាងឱ្យចំណែកនៃលំហទំនេរដែលមាននៅក្នុង Grid Container ។
    * \`grid-template-columns: 1fr 1fr 1fr;\` (3 columns, each takes 1/3 of available space)
    * \`grid-template-columns: 1fr 2fr;\` (2 columns: first takes 1/3, second takes 2/3)
* **\`repeat()\` function**: សម្រាប់ជួរដេក/ជួរឈរដែលកើតឡើងដដែលៗ។
    * \`grid-template-columns: repeat(3, 1fr);\` (Same as \`1fr 1fr 1fr\`)
    * \`grid-template-rows: repeat(2, 50px 100px);\` (creates \`50px 100px 50px 100px\`)
* **\`minmax()\` function**: កំណត់ជួរនៃទំហំសម្រាប់ Track ។
    * \`grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\` (creates as many columns as fit, each at least 100px, and expands to fill space)
* **\`auto-fit\` vs \`auto-fill\`**:
    * \`auto-fill\`: នឹងបំពេញ Container ដោយ tracks តាមដែលអាចធ្វើទៅបាន ទោះបីជាមាន Grid Items តិចជាងក៏ដោយ។ អាចបន្សល់ទុកនូវទំហំទំនេរនៅចុងបញ្ចប់ ប្រសិនបើ Item មិនគ្រប់គ្រាន់។
    * \`auto-fit\`: នឹងមានឥរិយាបទដូច \`auto-fill\` លុះត្រាតែមាន Grid Item តិចជាង Track ដែលអាចដាក់បាន។ ក្នុងករណីនោះ Track ទទេនឹងរួញ ហើយ Items ដែលនៅសល់នឹងលាតសន្ធឹងដើម្បីបំពេញលំហ។

\`\`\`html
<style>
  .grid-definition-container {
    display: grid;
    gap: 10px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f0fff0; /* Honeydew */
  }
  .grid-definition-item {
    background-color: #66cdaa; /* MediumAquaMarine */
    border: 1px solid #3cb371; /* MediumSeaGreen */
    padding: 10px;
    text-align: center;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .col-fr-demo {
    grid-template-columns: 1fr 2fr 1fr; /* 3 columns with flexible widths */
    height: 100px;
  }
  .repeat-demo {
    grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
    grid-template-rows: 50px 100px; /* Two rows, fixed heights */
  }
  .minmax-autofit-demo {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    height: 150px;
  }
</style>
<h4>grid-template-columns: 1fr 2fr 1fr;</h4>
<div class="grid-definition-container col-fr-demo">
  <div class="grid-definition-item">Col 1 (1fr)</div>
  <div class="grid-definition-item">Col 2 (2fr)</div>
  <div class="grid-definition-item">Col 3 (1fr)</div>
</div>

<h4>grid-template-columns: repeat(4, 1fr); & grid-template-rows: 50px 100px;</h4>
<div class="grid-definition-container repeat-demo">
  <div class="grid-definition-item">R1C1</div>
  <div class="grid-definition-item">R1C2</div>
  <div class="grid-definition-item">R1C3</div>
  <div class="grid-definition-item">R1C4</div>
  <div class="grid-definition-item">R2C1</div>
  <div class="grid-definition-item">R2C2</div>
  <div class="grid-definition-item">R2C3</div>
  <div class="grid-definition-item">R2C4</div>
</div>

<h4>grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));</h4>
<div class="grid-definition-container minmax-autofit-demo">
  <div class="grid-definition-item">A</div>
  <div class="grid-definition-item">B</div>
  <div class="grid-definition-item">C</div>
  <div class="grid-definition-item">D</div>
  <div class="grid-definition-item">E</div>
  <div class="grid-definition-item">F</div>
  <div class="grid-definition-item">G</div>
</div>
<p style="text-align: center; font-size: 0.9em; color: #555;">
  Try resizing your browser window to see auto-fit in action.
</p>
\`\`\`

---

### 3. \`gap\` (Shorthand for \`row-gap\` and \`column-gap\`)

កំណត់គម្លាតរវាង Grid Tracks ។

* **\`gap: 10px;\`**: កំណត់គម្លាត 10px ទាំងរវាងជួរដេក (rows) និងជួរឈរ (columns) ។
* **\`gap: 10px 20px;\`**: កំណត់ \`row-gap\` 10px និង \`column-gap\` 20px ។
* \`row-gap\`: គម្លាតរវាងជួរដេក ។
* \`column-gap\`: គម្លាតរវាងជួរឈរ ។

\`\`\`html
<style>
  .gap-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 10px; /* row-gap: 20px, column-gap: 10px */
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f8f8ff; /* GhostWhite */
  }
  .gap-grid-item {
    background-color: #7b68ee; /* MediumSlateBlue */
    border: 1px solid #6a5acd; /* SlateBlue */
    padding: 10px;
    text-align: center;
    color: white;
    font-weight: bold;
  }
</style>
<h4>Grid with \`gap: 20px 10px;\`</h4>
<div class="gap-grid-container">
  <div class="gap-grid-item">1</div>
  <div class="gap-grid-item">2</div>
  <div class="gap-grid-item">3</div>
  <div class="gap-grid-item">4</div>
  <div class="gap-grid-item">5</div>
  <div class="gap-grid-item">6</div>
</div>
\`\`\`

---

### 4. \`justify-items\` & \`align-items\`

តម្រឹមមាតិកានៅខាងក្នុង Grid Cells តាមបណ្តោយអ័ក្សជួរឈរ (\`justify-items\`) និងអ័ក្សជួរដេក (\`align-items\`) រៀងៗខ្លួន។

* **Values:** \`start\`, \`end\`, \`center\`, \`stretch\` (default) ។

\`\`\`html
<style>
  .item-alignment-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* Fixed width columns for clear demo */
    grid-template-rows: repeat(2, 80px); /* Fixed height rows */
    gap: 5px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff0f5; /* LavenderBlush */
  }
  .item-alignment-grid-item {
    background-color: #db7093; /* PaleVioletRed */
    border: 1px solid #c71585; /* MediumVioletRed */
    color: white;
    font-weight: bold;
    display: flex; /* For centering content within the item */
    justify-content: center;
    align-items: center;
    font-size: 0.9em;
  }
  .justify-center-align-start {
    justify-items: center; /* Horizontally center content in its cell */
    align-items: flex-start; /* Vertically align content to top of its cell */
  }
  .justify-end-align-end {
    justify-items: flex-end; /* Horizontally align content to end of its cell */
    align-items: flex-end; /* Vertically align content to bottom of its cell */
  }
</style>
<h4>justify-items: center; align-items: flex-start;</h4>
<div class="item-alignment-grid-container justify-center-align-start">
  <div class="item-alignment-grid-item">A</div>
  <div class="item-alignment-grid-item">B</div>
  <div class="item-alignment-grid-item">C</div>
  <div class="item-alignment-grid-item">D</div>
  <div class="item-alignment-grid-item">E</div>
  <div class="item-alignment-grid-item">F</div>
</div>
<h4>justify-items: flex-end; align-items: flex-end;</h4>
<div class="item-alignment-grid-container justify-end-align-end">
  <div class="item-alignment-grid-item">A</div>
  <div class="item-alignment-grid-item">B</div>
  <div class="item-alignment-grid-item">C</div>
  <div class="item-alignment-grid-item">D</div>
  <div class="item-alignment-grid-item">E</div>
  <div class="item-alignment-grid-item">F</div>
</div>
\`\`\`

---

### 5. \`justify-content\` & \`align-content\`

តម្រឹម Grid ទាំងមូលនៅខាងក្នុង Grid Container ប្រសិនបើ Container មានលំហទំនេរច្រើនជាង Grid ខ្លួនឯង។

* **Values:** \`start\`, \`end\`, \`center\`, \`stretch\`, \`space-around\`, \`space-between\`, \`space-evenly\` ។

\`\`\`html
<style>
  .content-alignment-grid-container {
    display: grid;
    grid-template-columns: repeat(2, 100px); /* Small fixed grid */
    grid-template-rows: repeat(2, 80px);
    gap: 10px;
    height: 250px; /* Larger container to see alignment effect */
    width: 350px; /* Larger container */
    margin: 20px auto;
    border: 2px dashed #8a2be2; /* BlueViolet */
    background-color: #e6e6fa; /* Lavender */
  }
  .content-alignment-grid-item {
    background-color: #9370db; /* MediumPurple */
    border: 1px solid #6a5acd; /* SlateBlue */
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-center-demo {
    justify-content: center; /* Center grid horizontally */
    align-content: center; /* Center grid vertically */
  }
  .content-space-between-demo {
    justify-content: space-between; /* Distribute horizontal space */
    align-content: space-between; /* Distribute vertical space */
  }
</style>
<h4>justify-content: center; align-content: center;</h4>
<div class="content-alignment-grid-container content-center-demo">
  <div class="content-alignment-grid-item">1</div>
  <div class="content-alignment-grid-item">2</div>
  <div class="content-alignment-grid-item">3</div>
  <div class="content-alignment-grid-item">4</div>
</div>

<h4>justify-content: space-between; align-content: space-between;</h4>
<div class="content-alignment-grid-container content-space-between-demo">
  <div class="content-alignment-grid-item">1</div>
  <div class="content-alignment-grid-item">2</div>
  <div class="content-alignment-grid-item">3</div>
  <div class="content-alignment-grid-item">4</div>
</div>
\`\`\`

---

### 6. \`grid-template-areas\`

អនុញ្ញាតឱ្យអ្នកកំណត់តំបន់ដែលមានឈ្មោះនៅក្នុង Grid Layout ដោយផ្តល់ឈ្មោះឱ្យ Grid Cells ។

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 100px auto;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
}
/* Then assign items to areas */
.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`
This method is great for building semantic and readable layouts.

\`\`\`html
<style>
  .area-grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 120px auto; /* Header auto, main fixed, footer auto */
    gap: 10px;
    grid-template-areas:
      "header header header"
      "nav    main   aside"
      "footer footer footer";
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f5f5f5; /* WhiteSmoke */
  }
  .area-grid-item {
    background-color: #a9a9a9; /* DarkGray */
    border: 1px solid #696969; /* DimGray */
    color: white;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-header { grid-area: header; background-color: #3498db; }
  .grid-nav { grid-area: nav; background-color: #2ecc71; }
  .grid-main { grid-area: main; background-color: #e67e22; }
  .grid-aside { grid-area: aside; background-color: #9b59b6; }
  .grid-footer { grid-area: footer; background-color: #e74c3c; }
</style>
<h4>Layout with \`grid-template-areas\`</h4>
<div class="area-grid-container">
  <div class="area-grid-item grid-header">Header</div>
  <div class="area-grid-item grid-nav">Navigation</div>
  <div class="area-grid-item grid-main">Main Content</div>
  <div class="area-grid-item grid-aside">Sidebar</div>
  <div class="area-grid-item grid-footer">Footer</div>
</div>
\`\`\`

---

## Properties for the Grid Items (សម្រាប់ Grid ធាតុ)

Property ទាំងនេះត្រូវបានអនុវត្តទៅលើ Grid Items នីមួយៗ ដើម្បីកំណត់ទីតាំង និងឥរិយាបថរបស់ពួកវា។

### 1. \`grid-column-start\`, \`grid-column-end\` & \`grid-row-start\`, \`grid-row-end\`

កំណត់ទីតាំងរបស់ Grid Item ដោយយោងទៅតាមបន្ទាត់ Grid Lines ។

* \`grid-column-start: 1;\` (ចាប់ផ្តើមពីបន្ទាត់ទី 1)
* \`grid-column-end: 4;\` (បញ្ចប់នៅបន្ទាត់ទី 4, ដូច្នេះវាលាតសន្ធឹង 3 ជួរឈរ)
* Shorthand: \`grid-column: 1 / 4;\` (Start / End) ឬ \`grid-column: 1 / span 3;\` (Start / Span)
* ដូចគ្នាសម្រាប់ Rows: \`grid-row: 1 / 3;\` (លាតសន្ធឹង 2 ជួរដេក)

\`\`\`html
<style>
  .span-grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 80px);
    gap: 10px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #e0ffff; /* LightCyan */
  }
  .span-grid-item {
    background-color: #20b2aa; /* LightSeaGreen */
    border: 1px solid #008080; /* Teal */
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .span-item-1 {
    grid-column: 1 / span 2; /* Spans 2 columns from line 1 */
    background-color: #4682b4; /* SteelBlue */
  }
  .span-item-2 {
    grid-row: 1 / span 2; /* Spans 2 rows from line 1 */
    grid-column: 3;
    background-color: #da70d6; /* Orchid */
  }
  .span-item-3 {
    grid-column: 4;
    grid-row: 2;
  }
</style>
<h4>Items Spanning Columns and Rows</h4>
<div class="span-grid-container">
  <div class="span-grid-item span-item-1">Span Col 2</div>
  <div class="span-grid-item span-item-2">Span Row 2</div>
  <div class="span-grid-item">Regular 1</div>
  <div class="span-grid-item">Regular 2</div>
  <div class="span-grid-item span-item-3">Regular 3</div>
  <div class="span-grid-item">Regular 4</div>
</div>
\`\`\`

---

### 2. \`grid-area\` (Shorthand)

កំណត់ទីតាំងរបស់ Grid Item ដោយយោងទៅតាមឈ្មោះតំបន់ដែលបានកំណត់ដោយ \`grid-template-areas\` ឬជា Shorthand សម្រាប់ \`grid-row-start\`, \`grid-column-start\`, \`grid-row-end\`, \`grid-column-end\` ។

* **By name:** \`grid-area: header;\`
* **By lines:** \`grid-area: 1 / 1 / 3 / 2;\` (row-start / column-start / row-end / column-end)

\`\`\`html
<style>
  .grid-area-shorthand-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80px 80px;
    gap: 10px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fafad2; /* LightGoldenRodYellow */
  }
  .grid-area-shorthand-item {
    background-color: #daa520; /* Goldenrod */
    border: 1px solid #b8860b; /* DarkGoldenrod */
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-area-item-big {
    grid-area: 1 / 1 / 3 / 3; /* Spans from row 1 to 3, column 1 to 3 */
    background-color: #ff4500; /* OrangeRed */
  }
</style>
<h4>Using \`grid-area\` as shorthand for lines</h4>
<div class="grid-area-shorthand-container">
  <div class="grid-area-shorthand-item grid-area-item-big">1 / 1 / 3 / 3 (Big Item)</div>
  <div class="grid-area-shorthand-item">2</div>
  <div class="grid-area-shorthand-item">3</div>
  <div class="grid-area-shorthand-item">4</div>
</div>
\`\`\`

---

### 3. \`justify-self\` & \`align-self\`

តម្រឹមមាតិកានៅខាងក្នុង Grid Item តែមួយ តាមបណ្តោយអ័ក្សជួរឈរ (\`justify-self\`) និងអ័ក្សជួរដេក (\`align-self\`) រៀងៗខ្លួន។ បដិសេធ Property \`justify-items\` និង \`align-items\` ដែលបានកំណត់នៅលើ Container ។

* **Values:** \`start\`, \`end\`, \`center\`, \`stretch\` (default) ។

\`\`\`html
<style>
  .self-alignment-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(2, 100px);
    gap: 10px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f0f0ff; /* Lavender */
  }
  .self-alignment-grid-item {
    background-color: #8a2be2; /* BlueViolet */
    border: 1px solid #6a5acd; /* SlateBlue */
    color: white;
    font-weight: bold;
    display: flex; /* Helps internal centering */
    justify-content: center;
    align-items: center;
  }
  .self-alignment-grid-container > .self-alignment-grid-item:nth-child(2) {
    justify-self: start; /* Overrides container's justify-items */
    align-self: end; /* Overrides container's align-items */
    background-color: #ff69b4; /* HotPink */
  }
  .self-alignment-grid-container > .self-alignment-grid-item:nth-child(3) {
    justify-self: end;
    align-self: center;
    background-color: #ffa500; /* Orange */
  }
</style>
<h4>Individual Item Alignment with \`justify-self\` & \`align-self\`</h4>
<div class="self-alignment-grid-container">
  <div class="self-alignment-grid-item">Item 1 (Default)</div>
  <div class="self-alignment-grid-item">Item 2 (Start/End)</div>
  <div class="self-alignment-grid-item">Item 3 (End/Center)</div>
  <div class="self-alignment-grid-item">Item 4</div>
  <div class="self-alignment-grid-item">Item 5</div>
  <div class="self-alignment-grid-item">Item 6</div>
</div>
\`\`\`

---
> **គន្លឹះ:** CSS Grid គឺជាជម្រើសដ៏ល្អបំផុតសម្រាប់ការរចនា Layout មេនៃគេហទំព័រ (Main Layout) ដែលត្រូវការការគ្រប់គ្រងទាំងជួរដេក និងជួរឈរ។ សម្រាប់ Components ខាងក្នុងដែលត្រូវការរៀបចំ Items តែមួយជួរដេក ឬជួរឈរនោះ Flexbox អាចជាជម្រើសល្អជាង។ ពួកវាអាចប្រើរួមគ្នាបានយ៉ាងមានប្រសិទ្ធភាព (Grid សម្រាប់ Layout ធំ Flexbox សម្រាប់ Components តូចៗ) ។
`,
  examples: [
    `<h3>ឧទាហរណ៍ជាក់ស្តែង៖ Responsive Dashboard Layout ជាមួយ CSS Grid</h3>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f7fa;
    line-height: 1.6;
    color: #333;
  }

  .dashboard-layout {
    display: grid;
    /* Define grid areas for larger screens */
    grid-template-areas:
      "header header header"
      "sidebar main   main"
      "footer footer footer";
    grid-template-columns: 200px 1fr 1fr; /* Sidebar, two main content columns */
    grid-template-rows: auto 1fr auto; /* Header, main content, footer */
    min-height: 100vh; /* Make sure layout takes full viewport height */
    gap: 20px;
    padding: 20px;
  }

  /* Shared styles for grid items */
  .grid-section {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    padding: 20px;
  }

  .header-grid {
    grid-area: header;
    background-color: #2c3e50;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
  }
  .header-grid h1 {
    margin: 0;
    font-size: 1.8em;
    color: #3498db;
  }
  .header-grid .user-info {
    font-size: 1em;
  }

  .sidebar-grid {
    grid-area: sidebar;
    background-color: #34495e;
    color: white;
    padding: 20px;
  }
  .sidebar-grid ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .sidebar-grid li {
    margin-bottom: 10px;
  }
  .sidebar-grid a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 8px 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  .sidebar-grid a:hover {
    background-color: #2c3e50;
  }

  .main-content-grid {
    grid-area: main;
    display: grid; /* Nested grid for internal cards */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .card-grid {
    background-color: #ecf0f1;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    text-align: center;
  }
  .card-grid h3 {
    color: #2980b9;
    margin-top: 0;
  }
  .card-grid p {
    font-size: 0.9em;
    color: #555;
  }

  .footer-grid {
    grid-area: footer;
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 0.9em;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .dashboard-layout {
      grid-template-areas:
        "header"
        "sidebar"
        "main"
        "footer";
      grid-template-columns: 1fr; /* Single column layout */
      gap: 15px; /* Adjust gap for smaller screens */
      padding: 15px;
    }

    .header-grid {
      flex-direction: column;
      text-align: center;
      padding: 15px;
    }
    .header-grid h1 {
      margin-bottom: 10px;
    }

    .sidebar-grid ul {
      display: flex; /* Make sidebar links horizontal if space allows */
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    .sidebar-grid li {
      margin-bottom: 0;
    }

    .main-content-grid {
      grid-template-columns: 1fr; /* Stack cards vertically */
      gap: 15px;
    }
  }

  @media (max-width: 480px) {
    .dashboard-layout {
      padding: 10px;
    }
    .grid-section {
      padding: 15px;
    }
  }
</style>

<div class="dashboard-layout">
  <header class="grid-section header-grid">
    <h1>Dashboard</h1>
    <div class="user-info">Welcome, User!</div>
  </header>

  <aside class="grid-section sidebar-grid">
    <h2>Navigation</h2>
    <ul>
      <li><a href="#">Dashboard Home</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  </aside>

  <main class="grid-section main-content-grid">
    <div class="card-grid">
      <h3>Total Users</h3>
      <p>1,234,567</p>
    </div>
    <div class="card-grid">
      <h3>Revenue</h3>
      <p>$987,654</p>
    </div>
    <div class="card-grid">
      <h3>Active Sessions</h3>
      <p>5,432</p>
    </div>
    <div class="card-grid">
      <h3>New Orders</h3>
      <p>128</p>
    </div>
    <div class="card-grid">
      <h3>Conversions</h3>
      <p>12.5%</p>
    </div>
    <div class="card-grid">
      <h3>Support Tickets</h3>
      <p>34</p>
    </div>
  </main>

  <footer class="grid-section footer-grid">
    <p>&copy; 2025 My Company. All rights reserved.</p>
  </footer>
</div>
`
  ],
  quiz: [
    {
      question: 'តើ Property CSS មួយណាដែលត្រូវបានប្រើដើម្បីប្រែក្លាយ Element ទៅជា Grid Container?',
      options: [
        '`grid-display: true;`',
        '`display: grid;`',
        '`layout: grid;`',
        '`grid-box: container;`'
      ],
      correct: 1,
      explanation: 'ដើម្បីឱ្យ Element មួយក្លាយជា Grid Container អ្នកត្រូវកំណត់ Property `display` របស់វាទៅជា `grid` ឬ `inline-grid` ។'
    },
    {
      question: 'តើ `fr` unit ក្នុង CSS Grid តំណាងឱ្យអ្វី?',
      options: [
        'Fixed Ratio',
        'Flexible Rem',
        'Fractional Unit',
        'Fluid Row'
      ],
      correct: 2,
      explanation: '`fr` unit គឺជា Fractional Unit ដែលតំណាងឱ្យចំណែកនៃលំហទំនេរដែលមាននៅក្នុង Grid Container ។'
    },
    {
      question: 'តើ Property មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ចំនួន និងទទឹងនៃជួរឈរ (columns) នៅក្នុង Grid?',
      options: [
        '`grid-template-rows`',
        '`grid-template-columns`',
        '`grid-columns`',
        '`grid-direction`'
      ],
      correct: 1,
      explanation: '`grid-template-columns` ត្រូវបានប្រើដើម្បីកំណត់ចំនួន និងទទឹងនៃជួរឈរនៅក្នុង Grid ។'
    },
    {
      question: 'តើ Function `repeat(3, 1fr)` នៅក្នុង `grid-template-columns` នឹងបង្កើតអ្វី?',
      options: [
        'ជួរឈរ 3 ជួរដែលមានទទឹង 1px ស្មើគ្នា',
        'ជួរឈរ 3 ជួរដែលមានទទឹងស្មើគ្នា ( ഓരോ 1/3 នៃលំហ)',
        'ជួរដេក 3 ជួរដែលមានកម្ពស់ស្មើគ្នា',
        'ជួរឈរតែមួយដែលមានទទឹង 3fr'
      ],
      correct: 1,
      explanation: '`repeat(3, 1fr)` នឹងបង្កើត 3 ជួរឈរ ដែលនីមួយៗយក 1/3 នៃលំហដែលអាចរកបាន ដូច្នេះពួកវាមានទទឹងស្មើគ្នា។'
    },
    {
      question: 'តើ Property `gap` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង CSS Grid?',
      options: [
        'ដើម្បីកំណត់ទីតាំង Grid Item តែមួយ',
        'ដើម្បីតម្រឹមមាតិកានៅខាងក្នុង Grid Item',
        'ដើម្បីកំណត់គម្លាតរវាង Grid Tracks (ជួរដេក និងជួរឈរ)',
        'ដើម្បីកំណត់ឈ្មោះតំបន់ Grid'
      ],
      correct: 2,
      explanation: '`gap` (ឬ `row-gap`, `column-gap`) ត្រូវបានប្រើដើម្បីកំណត់គម្លាតរវាង Grid Tracks ។'
    },
    {
      question: 'តើ `grid-column: 1 / span 2;` មានន័យយ៉ាងណាសម្រាប់ Grid Item?',
      options: [
        'វានឹងចាប់ផ្តើមនៅជួរឈរទី 1 ហើយបញ្ចប់នៅជួរឈរទី 2 ។',
        'វានឹងចាប់ផ្តើមនៅជួរឈរទី 1 ហើយលាតសន្ធឹង 2 ជួរឈរ។',
        'វានឹងត្រូវបានដាក់នៅជួរឈរទី 1 និងជួរឈរទី 2 តែប៉ុណ្ណោះ។',
        'វានឹងចាប់ផ្តើមនៅជួរឈរទី 2 ហើយលាតសន្ធឹង 1 ជួរឈរ។'
      ],
      correct: 1,
      explanation: '`grid-column: 1 / span 2;` មានន័យថា Grid Item នឹងចាប់ផ្តើមនៅបន្ទាត់ជួរឈរទី 1 ហើយលាតសន្ធឹងឆ្លងកាត់ 2 ជួរឈរ។'
    },
    {
      question: 'តើ `grid-template-areas` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីផ្លាស់ប្តូរទិសដៅនៃ Grid Item',
        'ដើម្បីកំណត់ឈ្មោះតំបន់នៅក្នុង Grid Layout និងដាក់ Items តាមឈ្មោះទាំងនោះ',
        'ដើម្បីកំណត់ទំហំអប្បបរមា និងអតិបរមាសម្រាប់ Grid Item',
        'ដើម្បីគ្រប់គ្រងលំហទំនេររវាង Grid Items'
      ],
      correct: 1,
      explanation: '`grid-template-areas` អនុញ្ញាតឱ្យអ្នកកំណត់តំបន់ដែលមានឈ្មោះនៅក្នុង Grid Layout ដោយផ្តល់ឈ្មោះឱ្យ Grid Cells ដើម្បីរៀបចំ Layout ឱ្យកាន់តែងាយស្រួលយល់។'
    },
    {
      question: 'តើ Property មួយណាដែលត្រូវបានប្រើដើម្បីតម្រឹម Grid Item តែមួយនៅខាងក្នុង Grid Cell របស់វា (បដិសេធតម្លៃរបស់ Container)?',
      options: [
        '`justify-items`',
        '`align-items`',
        '`justify-self`',
        '`grid-row`'
      ],
      correct: 2,
      explanation: '`justify-self` (សម្រាប់អ័ក្សជួរឈរ) និង `align-self` (សម្រាប់អ័ក្សជួរដេក) ត្រូវបានប្រើដើម្បីតម្រឹម Grid Item តែមួយនៅខាងក្នុង Grid Cell របស់វា។'
    },
    {
      question: 'តើ `auto-fill` និង `auto-fit` ខុសគ្នាត្រង់ណា នៅក្នុង `repeat()` function?',
      options: [
        '`auto-fill` មិនបង្កើត Tracks ទទេ ចំណែក `auto-fit` បង្កើត។',
        '`auto-fill` នឹងបំពេញ Container ដោយ Tracks តាមដែលអាចធ្វើទៅបាន ចំណែក `auto-fit` នឹងរួញ Tracks ទទេនៅពេលដែល Items មិនគ្រប់គ្រាន់។',
        '`auto-fill` ត្រូវបានប្រើសម្រាប់ Rows ចំណែក `auto-fit` ត្រូវបានប្រើសម្រាប់ Columns ។',
        'ពួកវាដូចគ្នាទាំងស្រុង គ្រាន់តែឈ្មោះខុសគ្នា។'
      ],
      correct: 1,
      explanation: '`auto-fill` នឹងបំពេញ Container ដោយ tracks តាមដែលអាចធ្វើទៅបាន (អាចទុកចន្លោះទំនេរ) ខណៈ `auto-fit` នឹងរួញ tracks ទទេ ហើយធ្វើឱ្យ items ដែលនៅសល់លាតសន្ធឹងដើម្បីបំពេញលំហ។'
    },
    {
      question: 'តើ CSS Grid ស័ក្តិសមបំផុតសម្រាប់ការរចនា Layout ប្រភេទណា?',
      options: [
        'Layout មួយវិមាត្រ (single row or column)',
        'Layout ពីរវិមាត្រ (rows and columns simultaneously)',
        'ការកំណត់រចនាប័ទ្ម Font និង Typography',
        'ការធ្វើ Animation Elements'
      ],
      correct: 1,
      explanation: 'CSS Grid ត្រូវបានរចនាឡើងជាពិសេសសម្រាប់ការរចនា Layout ពីរវិមាត្រ ដោយគ្រប់គ្រងទាំងជួរដេក និងជួរឈរក្នុងពេលតែមួយ។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យ Grid Item មួយលាតសន្ធឹងពីបន្ទាត់ជួរដេកទី 2 ដល់បន្ទាត់ជួរដេកទី 4 ហើយពីបន្ទាត់ជួរឈរទី 1 ដល់បន្ទាត់ជួរឈរទី 3 តើ Shorthand `grid-area` ត្រឹមត្រូវគឺអ្វី?',
      options: [
        '`grid-area: 2 / 1 / 4 / 3;`',
        '`grid-area: 1 / 2 / 3 / 4;`',
        '`grid-area: span 2 / span 3;`',
        '`grid-area: 2 1 4 3;`'
      ],
      correct: 0,
      explanation: 'Shorthand \`grid-area\` គឺ \`grid-area: row-start / column-start / row-end / column-end;\` ដូច្នេះ `2 / 1 / 4 / 3` គឺត្រឹមត្រូវ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML និង CSS ពីរដាច់ដោយឡែកពីគ្នាដើម្បីបង្ហាញពី CSS Grid Layout ។

1.  **HTML Structure (\`index.html\`):**
    * ត្រូវមាន \`<!DOCTYPE html>\`, \`<html>\`, \`<head>\`, និង \`<body>\` ។
    * ភ្ជាប់ទៅឯកសារ CSS ខាងក្រៅ (\`style.css\`) ក្នុង \`<head>\` ។
    * **Header:** \`<header class="site-header">\` ជាមួយ \`<h1>\` "CSS Grid Layout Lab" ។
    * **Main Layout Container:** \`<div class="grid-container">\` (នេះជា Grid Container មេ)
        * **Navigation:** \`<nav class="grid-nav">\` ជាមួយ \`<ul>\` និង \`<li><a href="#">...</a></li>\` ចំនួន ៣ (Home, Products, Contact) ។
        * **Main Content Area:** \`<main class="grid-main">\`
            * \`<h2>\` "Welcome to our Grid World!" ។
            * \`<p>\` អត្ថបទខ្លីៗ។
            * **Nested Grid (for cards):** \`<div class="card-grid-container">\`
                * \`<div class="card-item">Card 1</div>\`
                * \`<div class="card-item">Card 2</div>\`
                * \`<div class="card-item">Card 3</div>\`
                * \`<div class="card-item">Card 4</div>\`
        * **Sidebar:** \`<aside class="grid-sidebar">\`
            * \`<h3>\` "Related Links" ។
            * \`<ul>\` ជាមួយ \`<li><a href="#">...</a></li>\` ចំនួន ៣ ។
        * **Footer:** \`<footer class="grid-footer">\` ជាមួយ \`<p>\` "© 2025 Grid Lab. All rights reserved." ។

2.  **CSS Styling (\`style.css\`):**

    * **Global Styles:**
        * \`body\`: \`font-family\`, \`margin\`, \`background-color\`, \`color\` ។
        * \`h1\`, \`h2\`, \`h3\`: \`color\`, \`text-align\` ។

    * **Grid Container Styles:**
        * \`.grid-container\`:
            * \`display: grid;\`
            * \`grid-template-columns\`: កំណត់ 3 ជួរឈរ: មួយសម្រាប់ sidebar (ឧទាហរណ៍ 200px), ពីរសម្រាប់ main content (ឧទាហរណ៍ 1fr 1fr) ។
            * \`grid-template-rows\`: កំណត់ 3 ជួរដេក: Header (auto), Main content (1fr), Footer (auto) ។
            * \`grid-template-areas\`: កំណត់ Layout ដោយប្រើឈ្មោះតំបន់ (e.g., "header header header" "nav main sidebar" "footer footer footer") ។
            * \`gap\`: កំណត់គម្លាតរវាង Grid items ។
            * \`max-width\`, \`margin: auto\`, \`min-height: 100vh\`, \`background-color\`, \`box-shadow\`, \`border-radius\`, \`padding\` ។

    * **Grid Item Area Assignment:**
        * \`.site-header\`: \`grid-area: header;\`, \`background-color\`, \`padding\`, \`color\`, \`text-align\` ។
        * \`.grid-nav\`: \`grid-area: nav;\`, \`background-color\`, \`padding\`, \`ul\`, \`li\`, \`a\` styles ។
        * \`.grid-main\`: \`grid-area: main;\`, \`background-color\`, \`padding\` ។
        * \`.grid-sidebar\`: \`grid-area: sidebar;\`, \`background-color\`, \`padding\`, \`ul\`, \`li\`, \`a\` styles ។
        * \`.grid-footer\`: \`grid-area: footer;\`, \`background-color\`, \`color\`, \`padding\`, \`text-align\` ។

    * **Nested Grid for Cards:**
        * \`.card-grid-container\`:
            * \`display: grid;\`
            * \`grid-template-columns\`: ប្រើ \`repeat(auto-fit, minmax(200px, 1fr))\` ដើម្បីធ្វើឱ្យ Cards ឆ្លើយតប។
            * \`gap\`: គម្លាតរវាង Cards ។
            * \`margin-top\` ។
        * \`.card-item\`: \`background-color\`, \`padding\`, \`border-radius\`, \`box-shadow\`, \`text-align\`, \`font-weight\` ។

    * **Responsive Design (\`@media\` queries):**
        * សម្រាប់អេក្រង់តូចជាង (e.g., max-width: 768px):
            * \`.grid-container\`: ផ្លាស់ប្តូរ \`grid-template-areas\` ទៅជា Layout បញ្ឈរ (e.g., "header" "nav" "main" "sidebar" "footer") ។
            * ផ្លាស់ប្តូរ \`grid-template-columns\` ទៅជា 1fr ។
            * លៃតម្រូវ Padding/Margin សម្រាប់ Items ។
            * \`.grid-nav ul\`, \`.grid-sidebar ul\`: ប្រើ Flexbox ដើម្បីធ្វើឱ្យ Links ស្ថិតនៅជួរដេកផ្ដេក ឬកណ្តាលនៅពេលវាលាតសន្ធឹង។
        * សម្រាប់អេក្រង់តូចជាងនេះ (e.g., max-width: 480px): លៃតម្រូវ Margin/Padding បន្ថែមទៀត។

**ការណែនាំ:**
* ប្រើ Developer Tools របស់ Browser ដើម្បីមើល Grid Lines និង Areas ។
* ពិសោធន៍ជាមួយតម្លៃ \`fr\` ផ្សេងៗគ្នាសម្រាប់ Column/Row Sizes ។
* ប្តូរទំហំ Browser ដើម្បីមើលពីរបៀបដែល Responsive Layout ប្រែប្រួល។
    `,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Grid Layout Lab</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Khmer&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

  <header class="site-header">
    <h1>CSS Grid Layout Lab</h1>
  </header>

  <div class="grid-container">
    <nav class="grid-nav">
      <h3>Navigation</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <main class="grid-main">
      <h2>Welcome to our Grid World!</h2>
      <p>This section demonstrates the power of CSS Grid for creating complex and responsive web layouts. Observe how different areas are defined and positioned using grid properties.</p>
      <p>Below is a nested grid, showcasing how Grid can be used inside other Grid Items.</p>

      <div class="card-grid-container">
        <div class="card-item">
          <h3>Card 1</h3>
          <p>This is the first card, part of a nested grid.</p>
        </div>
        <div class="card-item">
          <h3>Card 2</h3>
          <p>The second card, showing responsive capabilities.</p>
        </div>
        <div class="card-item">
          <h3>Card 3</h3>
          <p>Card number three, adapting to screen size.</p>
        </div>
        <div class="card-item">
          <h3>Card 4</h3>
          <p>And finally, the fourth card in our grid.</p>
        </div>
      </div>
    </main>

    <aside class="grid-sidebar">
      <h3>Related Links</h3>
      <ul>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Community</a></li>
      </ul>
    </aside>

    <footer class="grid-footer">
      <p>&copy; 2025 Grid Lab. All rights reserved.</p>
    </footer>
  </div>

</body>
</html>
`,
    css: `/* style.css */

/* Global Styles */
body {
  font-family: 'Roboto', 'Khmer', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #eef1f4; /* Light grayish blue */
  color: #333;
  line-height: 1.6;
}

h1, h2, h3 {
  color: #2c3e50; /* Dark blue-gray */
  text-align: center;
  margin-top: 20px;
  margin-bottom: 15px;
}

/* Main Grid Container */
.grid-container {
  display: grid;
  /* Define grid areas for larger screens */
  grid-template-areas:
    "header header header"
    "nav    main   sidebar"
    "footer footer footer";
  /* Define columns: 200px sidebar, two flexible main content columns */
  grid-template-columns: 200px 1fr 300px;
  /* Define rows: Header (auto based on content), Main content (fills remaining space), Footer (auto) */
  grid-template-rows: auto 1fr auto;
  min-height: 100vh; /* Ensure layout takes full viewport height */
  gap: 20px; /* Gap between grid tracks */
  max-width: 1200px;
  margin: 0 auto; /* Center the grid container */
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border-radius: 12px;
}

/* Grid Item Area Assignment & Styling */
.site-header {
  grid-area: header;
  background-color: #3498db; /* Blue */
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px 8px 0 0; /* Rounded top corners */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.site-header h1 {
  color: white;
  margin: 0;
}

.grid-nav {
  grid-area: nav;
  background-color: #2ecc71; /* Green */
  color: white;
  padding: 20px;
  border-radius: 0 0 0 8px; /* Rounded bottom-left corner */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.grid-nav h3 {
  color: white;
  margin-top: 0;
  margin-bottom: 15px;
}
.grid-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.grid-nav li {
  margin-bottom: 10px;
}
.grid-nav a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 8px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.grid-nav a:hover {
  background-color: rgba(0,0,0,0.2);
}

.grid-main {
  grid-area: main;
  background-color: #fcfcfc;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.grid-main p {
  margin-bottom: 20px;
  text-align: justify;
}

.grid-sidebar {
  grid-area: sidebar;
  background-color: #9b59b6; /* Amethyst */
  color: white;
  padding: 20px;
  border-radius: 0 8px 0 0; /* Rounded top-right corner */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.grid-sidebar h3 {
  color: white;
  margin-top: 0;
  margin-bottom: 15px;
}
.grid-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.grid-sidebar li {
  margin-bottom: 10px;
}
.grid-sidebar a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 8px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.grid-sidebar a:hover {
  background-color: rgba(0,0,0,0.2);
}

.grid-footer {
  grid-area: footer;
  background-color: #2c3e50; /* Dark blue-gray */
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 0.9em;
  border-radius: 0 0 12px 12px; /* Rounded bottom corners */
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
}

/* Nested Grid for Cards */
.card-grid-container {
  display: grid;
  /* auto-fit: Creates as many columns as fit, expands items if not enough */
  /* minmax: Each column is at least 200px, but can grow up to 1fr */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px; /* Gap between cards */
  margin-top: 30px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.card-item {
  background-color: #e0f7fa; /* Light cyan */
  border: 1px solid #00bcd4; /* Cyan */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
  font-weight: bold;
  color: #333;
}
.card-item h3 {
  color: #00838f; /* Darker cyan */
  margin-top: 0;
  margin-bottom: 10px;
}
.card-item p {
  font-size: 0.9em;
  color: #555;
  text-align: center; /* Override justify for cards */
}

/* Responsive Design */
@media (max-width: 768px) {
  .grid-container {
    /* Stack all areas vertically on smaller screens */
    grid-template-areas:
      "header"
      "nav"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr; /* Single column */
    gap: 15px; /* Slightly smaller gap */
    padding: 15px;
    min-height: auto; /* Allow height to adjust */
  }

  .site-header, .grid-nav, .grid-main, .grid-sidebar, .grid-footer {
    border-radius: 8px; /* Apply full border-radius to all items */
    margin: 0; /* Remove specific margins if any */
    box-shadow: 0 2px 8px rgba(0,0,0,0.08); /* Consistent shadow */
  }

  .grid-nav ul,
  .grid-sidebar ul {
    display: flex; /* Make nav and sidebar links horizontal */
    flex-wrap: wrap; /* Allow wrapping */
    justify-content: center; /* Center them */
    gap: 10px; /* Space between links */
  }
  .grid-nav li,
  .grid-sidebar li {
    margin-bottom: 0; /* Remove vertical margin from list items */
  }

  .grid-main {
    padding: 20px;
  }

  .card-grid-container {
    grid-template-columns: 1fr; /* Stack cards vertically on very small screens */
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .grid-container {
    padding: 10px;
    gap: 10px;
  }

  .site-header {
    padding: 15px;
  }
  .site-header h1 {
    font-size: 1.5em;
  }

  .grid-nav, .grid-main, .grid-sidebar, .grid-footer {
    padding: 15px;
  }

  .grid-nav h3, .grid-sidebar h3 {
    margin-bottom: 10px;
  }
}
`
  }
};

export default CSSLesson6_3Content;