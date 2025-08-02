// src/components/lessons/css/CSSLesson4_4.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson4_4Content: LessonContent = {
  title: 'CSS Grid (ប្លង់ក្រឡាចត្រង្គ)',
  objectives: [
    'ស្វែងយល់ពីគោលគំនិត និងអត្ថប្រយោជន៍នៃ CSS Grid',
    'ដឹងពីរបៀបបង្កើត Grid Container និង Grid Items',
    'រៀនពីរបៀបកំណត់ជួរឈរ (columns) និងជួរដេក (rows) ដោយប្រើ `grid-template-columns` និង `grid-template-rows`',
    'ស្គាល់ពីឯកតា `fr` សម្រាប់ទំហំបទបែននៃ Grid Tracks',
    'យល់ដឹងពីរបៀបដាក់ Grid Items នៅក្នុង Grid ដោយប្រើ `grid-column` និង `grid-row`',
    'រៀនពីរបៀបប្រើ `grid-gap` (ឬ `gap`) ដើម្បីកំណត់ចន្លោះរវាង Grid Tracks',
    'ស្គាល់ពីរបៀបកំណត់តំបន់ Grid ដោយប្រើ `grid-template-areas`',
    'អនុវត្តការរៀបចំប្លង់ពីរវិមាត្រដោយប្រើ CSS Grid'
  ],
  content: `
# CSS Grid (ប្លង់ក្រឡាចត្រង្គ) 🏗️

---

**CSS Grid Layout** គឺជាប្រព័ន្ធ Layout ដ៏មានអនុភាព និងពីរវិមាត្រ (two-dimensional) សម្រាប់គេហទំព័រ។ វាអនុញ្ញាតឱ្យអ្នករៀបចំ Elements ជាជួរដេក (rows) និងជួរឈរ (columns) ក្នុងពេលតែមួយ ដែលធ្វើឱ្យវាល្អឥតខ្ចោះសម្រាប់ការបង្កើត Layout ទំព័រទាំងមូល ឬផ្នែកស្មុគស្មាញនៃ UI ។ ខុសពី Flexbox ដែលជា Layout មួយវិមាត្រ Grid ផ្តល់ការគ្រប់គ្រងលើទិសដៅពីរ។

---

## 1. Grid Container និង Grid Items

ដើម្បីប្រើ CSS Grid អ្នកត្រូវកំណត់ **Grid Container**។ ធាតុផ្សំផ្ទាល់របស់ Container នោះនឹងក្លាយជា **Grid Items** ។

* **Grid Container:** Element ដែលមាន \`display: grid;\` ឬ \`display: inline-grid;\` ។
* **Grid Items:** Elements កូនផ្ទាល់របស់ Grid Container ។

\`\`\`css
/* Grid Container */
.grid-container {
  display: grid; /* Makes this a grid container */
  border: 2px solid #27ae60;
  padding: 10px;
  background-color: #e6f7ef;
}

/* Grid Items (direct children of grid-container) */
.grid-item {
  background-color: #d4edda;
  border: 1px solid #2ecc71;
  padding: 15px;
  text-align: center;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .grid-example-container {
    display: grid;
    border: 2px solid #555;
    padding: 10px;
    background-color: #f0f0f0;
    margin-bottom: 20px;
    /* Define a simple grid for items to show up */
    grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
    gap: 10px; /* Gap between items */
  }
  .grid-example-item {
    background-color: #cceeff;
    border: 1px solid #66b3cc;
    padding: 20px;
    text-align: center;
  }
</style>
<h3>Grid Container និង Grid Items</h3>
<div class="grid-example-container">
  <div class="grid-example-item">Item 1</div>
  <div class="grid-example-item">Item 2</div>
  <div class="grid-example-item">Item 3</div>
  <div class="grid-example-item">Item 4</div>
  <div class="grid-example-item">Item 5</div>
  <div class="grid-example-item">Item 6</div>
</div>
\`\`\`

---

## 2. Defining Grid Structure: \`grid-template-columns\` and \`grid-template-rows\`

Properties ទាំងនេះត្រូវបានអនុវត្តទៅលើ **Grid Container** ដើម្បីកំណត់ចំនួន ទំហំ និងឈ្មោះរបស់ជួរឈរ និងជួរដេក។

* **\`grid-template-columns\`:** កំណត់ជួរឈររបស់ Grid ។
* **\`grid-template-rows\`:** កំណត់ជួរដេករបស់ Grid ។

អ្នកអាចប្រើតម្លៃផ្សេងៗគ្នាសម្រាប់ទំហំ Track (ជួរដេក/ជួរឈរ)៖

* **Absolute Lengths:** \`100px\`, \`1em\`, \`2rem\`
* **Percentages:** \`25%\`, \`50%\`
* **Fractional Unit (\`fr\`):** តំណាងឱ្យចំណែកនៃចន្លោះដែលមាន។ \`1fr 1fr 1fr\` បង្កើត 3 ជួរឈរដែលមានទំហំស្មើគ្នា។
* **\`auto\`:** អនុញ្ញាតឱ្យ Browser កំណត់ទំហំដោយស្វ័យប្រវត្តិ ផ្អែកលើទំហំមាតិកា។
* **\`min-content\`:** ទំហំតូចបំផុតដែលមាតិកានឹងមិនហៀរ។
* **\`max-content\`:** ទំហំធំបំផុតដែលត្រូវការដើម្បីបង្ហាញមាតិកាដោយមិនរុំ។
* **\`repeat()\` function:** សម្រាប់កំណត់ Tracks ដែលមានលំនាំដដែលៗ។ ឧទាហរណ៍: \`repeat(3, 1fr)\` គឺដូចគ្នាទៅនឹង \`1fr 1fr 1fr\` ។ \`repeat(auto-fit, minmax(100px, 1fr))\` គឺមានប្រយោជន៍សម្រាប់ Grid ដែលមានភាពបត់បែន។

\`\`\`css
/* Creates 3 columns: 100px, 200px, and the rest of the space */
.my-grid-columns {
  grid-template-columns: 100px 200px 1fr;
}

/* Creates 2 rows: auto-sized, and 150px fixed height */
.my-grid-rows {
  grid-template-rows: auto 150px;
}

/* Responsive grid with minimum item width of 100px, grows to fill space */
.responsive-grid {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .grid-structure-container {
    display: grid;
    border: 2px solid #8e44ad; /* Purple */
    background-color: #f3e5f5; /* Light Purple */
    padding: 10px;
    margin-bottom: 20px;
    gap: 10px;
  }
  .grid-structure-item {
    background-color: #e0bfe0;
    border: 1px solid #9b59b6;
    padding: 15px;
    text-align: center;
  }
</style>
<h3>Grid Columns: 100px 1fr 20%</h3>
<div class="grid-structure-container" style="grid-template-columns: 100px 1fr 20%;">
  <div class="grid-structure-item">Item 1</div>
  <div class="grid-structure-item">Item 2 (Flexible)</div>
  <div class="grid-structure-item">Item 3 (20%)</div>
  <div class="grid-structure-item">Item 4</div>
  <div class="grid-structure-item">Item 5</div>
  <div class="grid-structure-item">Item 6</div>
</div>

<h3>Grid Rows: auto 100px 1fr</h3>
<div class="grid-structure-container" style="grid-template-rows: auto 100px 1fr; height: 300px;">
  <div class="grid-structure-item">Row 1 (Auto)</div>
  <div class="grid-structure-item">Row 2 (Auto)</div>
  <div class="grid-structure-item">Row 3 (100px)</div>
  <div class="grid-structure-item">Row 4 (100px)</div>
  <div class="grid-structure-item">Row 5 (Flexible)</div>
  <div class="grid-structure-item">Row 6 (Flexible)</div>
</div>
\`\`\`

---

## 3. Placing Grid Items: \`grid-column\` and \`grid-row\`

ទ្រព្យសម្បត្តិទាំងនេះអនុញ្ញាតឱ្យអ្នកដាក់ **Grid Item** ជាក់លាក់មួយនៅក្នុងតំបន់ Grid ដែលបានកំណត់។

* **\`grid-column-start\` / \`grid-column-end\`:** កំណត់បន្ទាត់ជួរឈរដែល Item ចាប់ផ្តើម និងបញ្ចប់។
* **\`grid-row-start\` / \`grid-row-end\`:** កំណត់បន្ទាត់ជួរដេកដែល Item ចាប់ផ្តើម និងបញ្ចប់។
* **Shorthand \`grid-column\`:** \`grid-column: <start-line> / <end-line>;\` ឬ \`grid-column: <start-line> / span <number-of-columns>;\`
* **Shorthand \`grid-row\`:** \`grid-row: <start-line> / <end-line>;\` ឬ \`grid-row: <start-line> / span <number-of-rows>;\`

Grid Lines ត្រូវបានលេខរៀងចាប់ពី 1 ។

\`\`\`css
/* Item starts at column line 1 and ends at column line 3 (spans 2 columns) */
.item-span-two-columns {
  grid-column: 1 / 3; /* Or grid-column: 1 / span 2; */
}

/* Item starts at row line 2 and ends at row line 4 (spans 2 rows) */
.item-span-two-rows {
  grid-row: 2 / 4; /* Or grid-row: 2 / span 2; */
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .grid-placement-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    grid-template-rows: 80px 80px 80px; /* 3 fixed-height rows */
    gap: 10px;
    border: 2px solid #2980b9;
    background-color: #d4e6f1;
    padding: 10px;
    margin-bottom: 20px;
  }
  .grid-placement-item {
    background-color: #85c1e9;
    border: 1px solid #3498db;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-wide {
    grid-column: 1 / span 2; /* Starts at line 1, spans 2 columns */
    background-color: #2ecc71;
    color: white;
  }
  .item-tall {
    grid-row: 2 / span 2; /* Starts at line 2, spans 2 rows */
    background-color: #e67e22;
    color: white;
  }
  .item-specific {
    grid-column: 3; /* Placed in the 3rd column */
    grid-row: 1;    /* Placed in the 1st row */
    background-color: #9b59b6;
    color: white;
  }
</style>
<h3>Grid Item Placement</h3>
<div class="grid-placement-container">
  <div class="grid-placement-item item-specific">Item @ (Col 3, Row 1)</div>
  <div class="grid-placement-item">Item 2</div>
  <div class="grid-placement-item item-wide">Item Wide (Spans 2 Cols)</div>
  <div class="grid-placement-item">Item 4</div>
  <div class="grid-placement-item item-tall">Item Tall (Spans 2 Rows)</div>
  <div class="grid-placement-item">Item 6</div>
  <div class="grid-placement-item">Item 7</div>
  <div class="grid-placement-item">Item 8</div>
</div>
\`\`\`

---

## 4. Gaps between Grid Tracks: \`gap\` (Shorthand for \`grid-gap\`)

\`gap\` (ពីមុន \`grid-gap\`) Property ត្រូវបានអនុវត្តទៅលើ **Grid Container** ដើម្បីកំណត់ទំហំចន្លោះរវាងជួរដេក និងជួរឈរ។

* **\`grid-column-gap\` / \`column-gap\`:** ចន្លោះរវាងជួរឈរ។
* **\`grid-row-gap\` / \`row-gap\`:** ចន្លោះរវាងជួរដេក។
* **Shorthand \`gap\`:** \`gap: <row-gap> <column-gap>;\` ឬ \`gap: <all-gaps>;\` (ប្រសិនបើតម្លៃតែមួយត្រូវបានផ្តល់ឱ្យ វាត្រូវបានអនុវត្តទាំងជួរដេក និងជួរឈរ)។

\`\`\`css
/* Sets 15px gap between rows and 20px gap between columns */
.my-grid-gaps {
  gap: 15px 20px;
}

/* Sets 10px gap between both rows and columns */
.my-uniform-gaps {
  gap: 10px;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .grid-gap-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80px 80px;
    border: 2px solid #f39c12; /* Orange */
    background-color: #fcf1d5;
    padding: 10px;
    margin-bottom: 20px;
  }
  .grid-gap-item {
    background-color: #f7dc6f;
    border: 1px solid #f1c40f;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<h3>Grid Gap: 10px</h3>
<div class="grid-gap-container" style="gap: 10px;">
  <div class="grid-gap-item">Item 1</div>
  <div class="grid-gap-item">Item 2</div>
  <div class="grid-gap-item">Item 3</div>
  <div class="grid-gap-item">Item 4</div>
  <div class="grid-gap-item">Item 5</div>
  <div class="grid-gap-item">Item 6</div>
</div>

<h3>Grid Gap: 20px (Row) 5px (Column)</h3>
<div class="grid-gap-container" style="gap: 20px 5px;">
  <div class="grid-gap-item">Item 1</div>
  <div class="grid-gap-item">Item 2</div>
  <div class="grid-gap-item">Item 3</div>
  <div class="grid-gap-item">Item 4</div>
  <div class="grid-gap-item">Item 5</div>
  <div class="grid-gap-item">Item 6</div>
</div>
\`\`\`

---

## 5. Grid Template Areas

\`grid-template-areas\` Property អនុញ្ញាតឱ្យអ្នកកំណត់ Layout របស់ Grid របស់អ្នកដោយដាក់ឈ្មោះតំបន់នៅក្នុង Grid Container ។ បន្ទាប់មកអ្នកអាចដាក់ Grid Items ដោយយោងទៅតាមឈ្មោះតំបន់ទាំងនេះ។

* កំណត់ \`grid-template-areas\` នៅលើ **Grid Container** ។
* ឈ្មោះតំបន់ត្រូវបានរុំដោយសញ្ញា Quote (\`""\`) ។
* ប្រើសញ្ញាចុច (\`.\`) សម្រាប់កោសិកាទទេ (empty cells) ។
* Grid Item នីមួយៗត្រូវបានដាក់ដោយប្រើ Property \`grid-area\` ។

\`\`\`css
.layout-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Three columns */
  grid-template-rows: auto 1fr auto;   /* Three rows */
  grid-template-areas:
    "header header header"
    "sidebar main   aside"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .template-container {
    display: grid;
    grid-template-columns: 150px 1fr 150px; /* Sidebar | Main | Aside */
    grid-template-rows: 70px 1fr 50px;      /* Header | Content | Footer */
    grid-template-areas:
      "header header header"
      "nav    main   aside"
      "footer footer footer";
    gap: 10px;
    border: 2px solid #1abc9c; /* Green Sea */
    background-color: #e0f8f4;
    padding: 10px;
    margin-bottom: 20px;
    height: 400px; /* Example height for visual effect */
  }
  .grid-area-item {
    background-color: #7fcdbb;
    border: 1px solid #16a085;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #333;
  }
  .area-header { grid-area: header; background-color: #2ecc71; color: white; }
  .area-nav { grid-area: nav; background-color: #1abc9c; color: white; }
  .area-main { grid-area: main; background-color: #ecf0f1; }
  .area-aside { grid-area: aside; background-color: #1abc9c; color: white; }
  .area-footer { grid-area: footer; background-color: #2ecc71; color: white; }
</style>
<h3>Grid Template Areas</h3>
<div class="template-container">
  <div class="grid-area-item area-header">Header</div>
  <div class="grid-area-item area-nav">Navigation</div>
  <div class="grid-area-item area-main">Main Content</div>
  <div class="grid-area-item area-aside">Sidebar (Right)</div>
  <div class="grid-area-item area-footer">Footer</div>
</div>
\`\`\`

---
> **គន្លឹះ:** CSS Grid គឺល្អឥតខ្ចោះសម្រាប់ការបង្កើត Layout ទាំងមូលរបស់ទំព័រ ឬផ្នែកដែលមានរចនាសម្ព័ន្ធស្មុគស្មាញ ដែលទាមទារការតម្រឹមទាំងជួរដេក និងជួរឈរ។ សម្រាប់ Layout មួយវិមាត្រ (ដូចជា Navbar ឬបញ្ជី Items) Flexbox នៅតែជាជម្រើសដ៏ល្អ។

`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Grid Layout</h3>
<style>
body { font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa; }
section {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
h4 { color: #0056b3; margin-top: 0; }

.grid-demo-container {
  display: grid;
  border: 2px dashed #6c757d; /* Grey dashed border */
  background-color: #e9ecef; /* Light grey background */
  padding: 10px;
  margin-top: 10px;
  min-height: 150px;
}
.grid-demo-item {
  background-color: #b3e0ff; /* Light blue */
  border: 1px solid #007bff; /* Blue */
  padding: 10px;
  text-align: center;
  color: #333;
  display: flex; /* For centering content vertically and horizontally */
  align-items: center;
  justify-content: center;
}

/* Example 1: Basic 3-Column Layout with Gap */
.ex1-grid {
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}
.ex1-item {
  background-color: #d4edda;
  border: 1px solid #28a745;
}

/* Example 2: Complex Layout with Spanning Items */
.ex2-grid {
  grid-template-columns: 1fr 2fr 1fr; /* Sidebar | Main | Aside */
  grid-template-rows: auto 150px auto; /* Header | Content | Footer */
  gap: 10px;
}
.header-area {
  grid-column: 1 / span 3; /* Spans all 3 columns */
  background-color: #007bff;
  color: white;
}
.sidebar-area {
  grid-column: 1;
  grid-row: 2;
  background-color: #6c757d;
  color: white;
}
.main-area {
  grid-column: 2;
  grid-row: 2;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  text-align: left;
  padding: 20px;
}
.aside-area {
  grid-column: 3;
  grid-row: 2;
  background-color: #6c757d;
  color: white;
}
.footer-area {
  grid-column: 1 / span 3; /* Spans all 3 columns */
  background-color: #343a40;
  color: white;
}

/* Example 3: Grid Template Areas */
.ex3-grid {
  grid-template-columns: 150px 1fr; /* Nav | Content */
  grid-template-rows: 70px 1fr 50px; /* Header | Main | Footer */
  grid-template-areas:
    "my-header my-header"
    "my-nav    my-content"
    "my-footer my-footer";
  gap: 10px;
  height: 350px;
}
.ex3-header { grid-area: my-header; background-color: #17a2b8; color: white; }
.ex3-nav { grid-area: my-nav; background-color: #20c997; color: white; }
.ex3-content { grid-area: my-content; background-color: #f0f8ff; border: 1px solid #add8e6; text-align: left; padding: 20px; }
.ex3-footer { grid-area: my-footer; background-color: #343a40; color: white; }

/* Example 4: Responsive Grid with repeat(auto-fit, minmax(...)) */
.ex4-grid {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Min width 150px, grows to fill */
  gap: 10px;
  min-height: auto;
}
.ex4-item {
  background-color: #fcf8e3;
  border: 1px solid #ffc107;
  padding: 15px;
}

</style>

<section class="flex-section">
  <h4>1. Basic 3-Column Layout with Gap</h4>
  <div class="grid-demo-container ex1-grid">
    <div class="grid-demo-item ex1-item">Column 1</div>
    <div class="grid-demo-item ex1-item">Column 2</div>
    <div class="grid-demo-item ex1-item">Column 3</div>
    <div class="grid-demo-item ex1-item">Item 4</div>
    <div class="grid-demo-item ex1-item">Item 5</div>
    <div class="grid-demo-item ex1-item">Item 6</div>
  </div>
</section>

<section class="flex-section">
  <h4>2. Complex Layout with Item Spanning</h4>
  <p>Items span multiple columns/rows to create a traditional website layout.</p>
  <div class="grid-demo-container ex2-grid">
    <div class="grid-demo-item header-area">Header Section</div>
    <div class="grid-demo-item sidebar-area">Left Sidebar</div>
    <div class="grid-demo-item main-area">
      <h5>Main Content Area</h5>
      <p>This is where the primary content of the page goes. It takes up the middle column and is taller than the sidebars to showcase row spanning.</p>
    </div>
    <div class="grid-demo-item aside-area">Right Aside</div>
    <div class="grid-demo-item footer-area">Footer Section</div>
  </div>
</section>

<section class="flex-section">
  <h4>3. Layout using \`grid-template-areas\`</h4>
  <p>Defining layout structure with semantic names for easier readability.</p>
  <div class="grid-demo-container ex3-grid">
    <div class="grid-demo-item ex3-header">Page Header</div>
    <div class="grid-demo-item ex3-nav">Navigation</div>
    <div class="grid-demo-item ex3-content">
      <h5>Article Content</h5>
      <p>This area holds the main article or page content.</p>
    </div>
    <div class="grid-demo-item ex3-footer">Page Footer</div>
  </div>
</section>

<section class="flex-section">
  <h4>4. Responsive Card Layout (\`repeat(auto-fit, minmax)\`)</h4>
  <p>Cards automatically arrange themselves based on available space (try resizing your browser!).</p>
  <div class="grid-demo-container ex4-grid">
    <div class="grid-demo-item ex4-item">Card 1</div>
    <div class="grid-demo-item ex4-item">Card 2</div>
    <div class="grid-demo-item ex4-item">Card 3</div>
    <div class="grid-demo-item ex4-item">Card 4</div>
    <div class="grid-demo-item ex4-item">Card 5</div>
    <div class="grid-demo-item ex4-item">Card 6</div>
  </div>
</section>
`
  ],
  quiz: [
    {
      question: 'តើ CSS Grid Layout ជា Layout Module ប្រភេទណា?',
      options: [
        'មួយវិមាត្រ (1-dimensional)',
        'ពីរវិមាត្រ (2-dimensional)',
        'បីវិមាត្រ (3-dimensional)',
        'គ្មានវិមាត្រ (no-dimensional)'
      ],
      correct: 1,
      explanation: 'CSS Grid Layout គឺជាប្រព័ន្ធ Layout ពីរវិមាត្រ (two-dimensional) ដែលអាចគ្រប់គ្រងទាំងជួរដេក (rows) និងជួរឈរ (columns) ក្នុងពេលតែមួយ។'
    },
    {
      question: 'តើទ្រព្យសម្បត្តិ CSS មួយណាដែលត្រូវបានប្រើដើម្បីបង្កើត Grid Container?',
      options: [
        '`display: block;`',
        '`display: inline;`',
        '`display: flex;`',
        '`display: grid;`'
      ],
      correct: 3,
      explanation: 'ការកំណត់ `display: grid;` ទៅលើ Element មួយ នឹងបំប្លែងវាទៅជា Grid Container ។'
    },
    {
      question: 'តើទ្រព្យសម្បត្តិ `grid-template-columns` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ជួរដេករបស់ Grid',
        'ដើម្បីកំណត់ជួរឈររបស់ Grid',
        'ដើម្បីកំណត់ចន្លោះរវាង Grid Items',
        'ដើម្បីកំណត់លំដាប់នៃ Grid Items'
      ],
      correct: 1,
      explanation: '`grid-template-columns` ត្រូវបានប្រើដើម្បីកំណត់ចំនួន ទំហំ និងឈ្មោះរបស់ជួរឈរ (columns) របស់ Grid ។'
    },
    {
      question: 'តើឯកតា `fr` ក្នុង CSS Grid តំណាងឱ្យអ្វី?',
      options: [
        'ទំហំថេរគិតជាភីកសែល',
        'ទំហំជាភាគរយនៃ Container',
        'ចំណែកនៃចន្លោះដែលមាន',
        'ទំហំដែលកំណត់ដោយស្វ័យប្រវត្តិ'
      ],
      correct: 2,
      explanation: 'ឯកតា `fr` (fractional unit) តំណាងឱ្យចំណែកនៃចន្លោះដែលមាននៅក្នុង Grid Container ។ ឧទាហរណ៍ `1fr 1fr 1fr` បង្កើត 3 ជួរឈរដែលមានទំហំស្មើគ្នា។'
    },
    {
      question: 'តើ `grid-column: 1 / span 2;` ធ្វើអ្វីចំពោះ Grid Item?',
      options: [
        'ដាក់ Item នៅជួរឈរទី 1',
        'ដាក់ Item នៅជួរឈរទី 2',
        'ចាប់ផ្តើម Item នៅបន្ទាត់ជួរឈរទី 1 ហើយពង្រីកវាឆ្លងកាត់ 2 ជួរឈរ',
        'ចាប់ផ្តើម Item នៅបន្ទាត់ជួរឈរទី 2 ហើយពង្រីកវាឆ្លងកាត់ 1 ជួរឈរ'
      ],
      correct: 2,
      explanation: '`grid-column: 1 / span 2;` មានន័យថា Item នឹងចាប់ផ្តើមនៅបន្ទាត់ជួរឈរទី 1 ហើយពង្រីក (span) ឆ្លងកាត់ 2 ជួរឈរ។'
    },
    {
      question: 'តើទ្រព្យសម្បត្តិ `gap` (ឬ `grid-gap`) ត្រូវបានអនុវត្តទៅលើ Element មួយណា?',
      options: [
        'Grid Item',
        'Grid Container',
        'Parent របស់ Grid Container',
        'Child របស់ Grid Item'
      ],
      correct: 1,
      explanation: 'ទ្រព្យសម្បត្តិ `gap` (ឬ `grid-gap`) ត្រូវបានអនុវត្តទៅលើ **Grid Container** ដើម្បីកំណត់ចន្លោះរវាង Grid Items ។'
    },
    {
      question: 'តើ `grid-template-areas` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ទំហំជួរឈរ និងជួរដេក',
        'ដើម្បីដាក់ឈ្មោះតំបន់នៅក្នុង Grid Container និងដាក់ Items ដោយយោងទៅតាមឈ្មោះទាំងនោះ',
        'ដើម្បីកំណត់ចន្លោះរវាង Grid Items',
        'ដើម្បីកំណត់លំដាប់នៃ Grid Items ឡើងវិញ'
      ],
      correct: 1,
      explanation: '`grid-template-areas` អនុញ្ញាតឱ្យអ្នករៀបចំ Layout របស់ Grid ដោយដាក់ឈ្មោះតំបន់នៅក្នុង Grid Container ហើយបន្ទាប់មកដាក់ Grid Items ដោយយោងទៅតាមឈ្មោះតំបន់ទាំងនេះ។'
    },
    {
      question: 'តើនិមិត្តសញ្ញាអ្វីដែលត្រូវបានប្រើនៅក្នុង `grid-template-areas` ដើម្បីតំណាងឱ្យកោសិកាទទេ (empty cells)?',
      options: [
        '`*`',
        '`#`',
        '`.`',
        '`_`'
      ],
      correct: 2,
      explanation: 'នៅក្នុង `grid-template-areas` សញ្ញាចុច (`.`) ត្រូវបានប្រើដើម្បីតំណាងឱ្យកោសិកាទទេ (empty cells) ។'
    },
    {
      question: 'តើវិធីសាស្ត្រមួយណាដែលល្អបំផុតសម្រាប់ការរៀបចំប្លង់ទំព័រទាំងមូល (two-dimensional layout)?',
      options: [
        'Floats',
        'Inline-block',
        'Flexbox',
        'CSS Grid'
      ],
      correct: 3,
      explanation: 'CSS Grid ត្រូវបានរចនាឡើងជាពិសេសសម្រាប់ការរៀបចំប្លង់ពីរវិមាត្រ ដែលធ្វើឱ្យវាល្អបំផុតសម្រាប់ការរៀបចំប្លង់ទំព័រទាំងមូល។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នាចម្បងរវាង Flexbox និង CSS Grid?',
      options: [
        'Flexbox សម្រាប់ Layout ពីរវិមាត្រ Grid សម្រាប់មួយវិមាត្រ',
        'Flexbox សម្រាប់ Layout មួយវិមាត្រ Grid សម្រាប់ពីរវិមាត្រ',
        'Flexbox សម្រាប់ Browser ចាស់ Grid សម្រាប់ Browser ទំនើប',
        'Flexbox ប្រើសម្រាប់រូបភាព Grid សម្រាប់អត្ថបទ'
      ],
      correct: 1,
      explanation: 'ភាពខុសគ្នាចម្បងគឺ Flexbox គឺជា Layout មួយវិមាត្រ (សម្រាប់ជួរដេក ឬជួរឈរ) ខណៈ CSS Grid គឺជា Layout ពីរវិមាត្រ (សម្រាប់ទាំងជួរដេក និងជួរឈរក្នុងពេលតែមួយ) ។'
    },
    {
      question: 'តើ Property `grid-row-start` កំណត់អ្វី?',
      options: [
        'បន្ទាត់ជួរឈរដែល Item ចាប់ផ្តើម',
        'បន្ទាត់ជួរដេកដែល Item ចាប់ផ្តើម',
        'កម្ពស់នៃជួរដេក',
        'ទទឹងនៃជួរដេក'
      ],
      correct: 1,
      explanation: '`grid-row-start` កំណត់បន្ទាត់ជួរដេកដែល Grid Item ចាប់ផ្តើម។'
    },
    {
      question: 'តើ `repeat(3, 1fr)` នៅក្នុង `grid-template-columns` នឹងបង្កើតអ្វី?',
      options: [
        'ជួរឈរចំនួន 3 ដែលមានទទឹងថេរ 1px',
        'ជួរឈរចំនួន 3 ដែលនីមួយៗយក 1 ភាគរយនៃទទឹងរបស់ Container',
        'ជួរឈរចំនួន 3 ដែលមានទំហំស្មើគ្នា',
        'ជួរដេកចំនួន 3 ដែលមានទំហំស្មើគ្នា'
      ],
      correct: 2,
      explanation: '`repeat(3, 1fr)` បង្កើត 3 ជួរឈរដែលមានទំហំស្មើគ្នា ដោយនីមួយៗយកចំណែកស្មើគ្នានៃចន្លោះដែលមាន។'
    },
    {
      question: 'តើ `gap: 20px 10px;` មានន័យដូចម្តេច?',
      options: [
        'ចន្លោះ 20px រវាងជួរឈរ និង 10px រវាងជួរដេក',
        'ចន្លោះ 10px រវាងជួរឈរ និង 20px រវាងជួរដេក',
        'ចន្លោះ 20px សម្រាប់ទាំងជួរដេក និងជួរឈរ',
        'ចន្លោះ 10px សម្រាប់ទាំងជួរដេក និងជួរឈរ'
      ],
      correct: 1,
      explanation: 'Shorthand `gap: <row-gap> <column-gap>;` ដូច្នេះ `gap: 20px 10px;` មានន័យថា 20px សម្រាប់ចន្លោះជួរដេក និង 10px សម្រាប់ចន្លោះជួរឈរ។'
    },
    {
      question: 'តើ Grid Lines ត្រូវបានលេខរៀងចាប់ពីប៉ុន្មាន?',
      options: [
        '0',
        '1',
        '-1',
        'A'
      ],
      correct: 1,
      explanation: 'Grid Lines ត្រូវបានលេខរៀងចាប់ពី 1 ។'
    },
    {
      question: 'តើទ្រព្យសម្បត្តិ `grid-area` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីកំណត់ចន្លោះជុំវិញ Grid Item',
        'ដើម្បីកំណត់ទំហំ Grid Item',
        'ដើម្បីដាក់ Grid Item ទៅក្នុងតំបន់ដែលបានដាក់ឈ្មោះដែលបានកំណត់ដោយ `grid-template-areas`',
        'ដើម្បីប្តូរពណ៌ផ្ទៃខាងក្រោយរបស់ Grid Item'
      ],
      correct: 2,
      explanation: '`grid-area` ត្រូវបានប្រើដើម្បីដាក់ Grid Item ទៅក្នុងតំបន់ដែលបានដាក់ឈ្មោះដែលបានកំណត់ដោយ `grid-template-areas` ។'
    },
    {
      question: 'តើ `minmax(100px, 1fr)` នៅក្នុង `grid-template-columns` ធ្វើអ្វី?',
      options: [
        'កំណត់ទទឹងជួរឈរអតិបរមា 100px និងទទឹងអប្បបរមា 1fr',
        'កំណត់ទទឹងជួរឈរអប្បបរមា 100px និងទទឹងអតិបរមា 1fr',
        'កំណត់ទទឹងជួរឈរ 100px ជានិច្ច',
        'ធ្វើឱ្យជួរឈរពង្រីកដោយគ្មានដែនកំណត់'
      ],
      correct: 1,
      explanation: '`minmax(min, max)` កំណត់ជួរទំហំសម្រាប់ Track ។ ក្នុងករណីនេះ ជួរឈរនឹងមានទទឹងយ៉ាងតិច 100px ប៉ុន្តែអាចពង្រីកបានរហូតដល់ 1fr (ចំណែកនៃចន្លោះដែលមាន) ។'
    },
    {
      question: 'តើ `auto-fit` នៅក្នុង `repeat(auto-fit, minmax(100px, 1fr))` ធ្វើអ្វី?',
      options: [
        'បង្កើតជួរឈរដែលសមនឹងមាតិកា',
        'បង្កើតជួរឈរច្រើនតាមដែលអាចធ្វើទៅបានដោយមិនបណ្តាលឱ្យហៀរ',
        'ធ្វើឱ្យជួរឈរមានទទឹងស្វ័យប្រវត្តិ',
        'កំណត់ជួរឈរឱ្យសមនឹងចំនួន Items'
      ],
      correct: 1,
      explanation: '`auto-fit` (រួមជាមួយ `minmax()`) បង្កើតជួរឈរច្រើនតាមដែលអាចធ្វើទៅបានដើម្បីបំពេញចន្លោះដែលមាន ដោយធ្វើឱ្យ Grid មានភាពឆ្លើយតប។ វាពង្រីក Tracks ដើម្បីបំពេញចន្លោះបន្ថែមប្រសិនបើមាន។'
    },
    {
      question: 'តើ Property មួយណាដែលត្រូវបានប្រើដើម្បីតម្រឹម Grid Items នៅខាងក្នុង Grid Cell?',
      options: [
        '`justify-content` នៅលើ Container',
        '`align-items` នៅលើ Container',
        '`justify-self` និង `align-self` នៅលើ Item',
        '`grid-gap`'
      ],
      correct: 2,
      explanation: '`justify-self` តម្រឹម Item តាមអ័ក្ស Block របស់វា (inline axis របស់ Cell) និង `align-self` តម្រឹម Item តាមអ័ក្ស Inline របស់វា (block axis របស់ Cell) ។'
    },
    {
      question: 'តើ CSS Grid ត្រូវបានគាំទ្រយ៉ាងទូលំទូលាយដោយ Browsers ទំនើបដែរឬទេ?',
      options: [
        'ទេ វានៅតែជាការពិសោធន៍',
        'បាទ/ចាស៎ វាត្រូវបានគាំទ្រយ៉ាងទូលំទូលាយ',
        'តែក្នុង Internet Explorer ប៉ុណ្ណោះ',
        'តែក្នុង Chrome ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'បាទ/ចាស៎ CSS Grid ត្រូវបានគាំទ្រយ៉ាងទូលំទូលាយដោយ Browsers ទំនើបភាគច្រើន។'
    },
    {
      question: 'តើការប្រើ `display: inline-grid;` ខុសពី `display: grid;` យ៉ាងដូចម្តេច?',
      options: [
        '`inline-grid` ធ្វើឱ្យ Grid ខ្លួនវាមានឥរិយាបទដូច Inline Element ខណៈ `grid` ធ្វើឱ្យវាមានឥរិយាបទដូច Block Element',
        '`inline-grid` ត្រូវបានប្រើសម្រាប់ Layout ជួរឈរ ខណៈ `grid` សម្រាប់ជួរដេក',
        '`inline-grid` មិនគាំទ្រ `grid-template-areas`',
        'ពួកវាដូចគ្នា'
      ],
      correct: 0, // Corrected from 1 to 0 based on the explanation
      explanation: '`display: grid;` បង្កើត Block-level Grid Container (ដែលកាន់កាប់ទទឹងពេញ) ខណៈ `display: inline-grid;` បង្កើត Inline-level Grid Container (ដែលកាន់កាប់តែទំហំដែលវាត្រូវការ) ។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធ Layout ប្រហាក់ប្រហែលនឹងគេហទំព័រមួយដោយប្រើ CSS Grid ។

* \`<body>\` ។
* \`<div>\` មួយដែលមាន Class \`grid-layout-container\` ។
* នៅក្នុង \`grid-layout-container\` បន្ថែម Elements ខាងក្រោម (អ្នកអាចប្រើ \`div\` ធម្មតា និង Class សម្រាប់សម្គាល់)៖
    * Header (\`header\`)
    * Navigation (\`nav\`)
    * Main Content (\`main-content\`)
    * Sidebar (\`sidebar\`)
    * Footer (\`footer\`)

សូមប្រើ **Internal CSS** និង CSS Grid properties ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  សម្រាប់ \`body\` កំណត់ \`font-family: Arial, sans-serif;\`, \`margin: 0;\`, \`background-color: #f4f7f6;\` ។
2.  សម្រាប់ \`.grid-layout-container\` កំណត់ \`display: grid;\` ។
3.  កំណត់រចនាសម្ព័ន្ធ Grid សម្រាប់ \`.grid-layout-container\` ដោយប្រើ \`grid-template-areas\` ដើម្បីបង្កើត Layout ដូចខាងក្រោម៖
    * **Header:** ឆ្លងកាត់ទទឹងពេញ។
    * **Navigation (Left Sidebar):** នៅក្រោម Header ខាងឆ្វេង។
    * **Main Content:** នៅក្រោម Header កណ្តាល (យកចន្លោះធំជាង) ។
    * **Sidebar (Right):** នៅក្រោម Header ខាងស្តាំ។
    * **Footer:** ឆ្លងកាត់ទទឹងពេញ។
    * **Hint:** គិតពី 3 ជួរឈរ និង 3 ជួរដេក។ ជួរឈរទី 1 សម្រាប់ Nav, ជួរទី 2 សម្រាប់ Main, ជួរទី 3 សម្រាប់ Sidebar ។ Header និង Footer នឹង span ជួរឈរទាំង 3 ។
    * ប្រើ \`grid-template-columns: 150px 1fr 200px;\`
    * ប្រើ \`grid-template-rows: 60px 1fr 80px;\`
    * ប្រើ \`gap: 15px;\` ។
4.  កំណត់ \`grid-area\` សម្រាប់ Class នីមួយៗ (\`.header\`, \`.nav\`, \`.main-content\`, \`.sidebar\`, \`.footer\`) ទៅនឹងឈ្មោះតំបន់ដែលអ្នកបានកំណត់។
5.  កំណត់រចនាបថទូទៅសម្រាប់ Grid Items ទាំងអស់៖ \`padding: 20px;\`, \`border-radius: 8px;\`, \`display: flex;\`, \`align-items: center;\`, \`justify-content: center;\`, \`color: white;\`, \`font-weight: bold;\` ។
6.  កំណត់ពណ៌ផ្ទៃខាងក្រោយសម្រាប់ Element នីមួយៗ៖
    * Header: \`#2c3e50\` (Dark Blue)
    * Navigation: \`#34495e\` (Dark Grey)
    * Main Content: \`#ecf0f1\` (Light Grey), \`color: #333;\`
    * Sidebar: \`#34495e\` (Dark Grey)
    * Footer: \`#2c3e50\` (Dark Blue)
7.  (Optional) បន្ថែម Responsive behavior: នៅពេលអេក្រង់តូចជាង 768px សូមឱ្យ Layout ក្លាយជាជួរឈរតែមួយ (stacked) ។
    * សម្រាប់ \`.grid-layout-container\` នៅខាងក្នុង \`@media\` query កំណត់ \`grid-template-columns: 1fr;\`, \`grid-template-rows: auto auto 1fr auto auto;\` និងផ្លាស់ប្តូរ \`grid-template-areas\` ទៅជាជួរឈរតែមួយ ឧទាហរណ៍៖
        \`\`\`
        "header"
        "nav"
        "main-content"
        "sidebar"
        "footer"
        \`\`\`
`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Grid Lab: Website Layout</title>
  <style>
    /* 1. Body styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #f4f7f6;
    }

    /* 2. Grid Container */
    .grid-layout-container {
      display: grid;
      /* 3. Grid Structure Definition */
      grid-template-columns: 150px 1fr 200px; /* Nav (fixed) | Main (flexible) | Sidebar (fixed) */
      grid-template-rows: 60px 1fr 80px;      /* Header | Content | Footer */
      gap: 15px; /* Gap between grid items */
      min-height: 100vh; /* Make sure container takes full viewport height */
      margin: 0 auto; /* Center the layout if max-width is applied later */
      max-width: 1200px; /* Optional: Limit overall layout width */
      box-shadow: 0 0 15px rgba(0,0,0,0.05); /* Soft shadow for the whole grid */

      /* Define grid areas */
      grid-template-areas:
        "header header header"
        "nav    main-content sidebar"
        "footer footer footer";
    }

    /* 5. General styles for all Grid Items */
    .grid-item {
      padding: 20px;
      border-radius: 8px;
      display: flex; /* Use flexbox to center content inside each grid item */
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    /* 6. Background colors and specific styles for each area */
    .header {
      grid-area: header;
      background-color: #2c3e50; /* Dark Blue */
    }

    .nav {
      grid-area: nav;
      background-color: #34495e; /* Dark Grey */
      flex-direction: column; /* Stack nav links vertically */
      justify-content: flex-start; /* Align to top */
      padding-top: 20px;
    }
    .nav a {
        color: white;
        text-decoration: none;
        margin-bottom: 10px;
        transition: color 0.3s ease;
    }
    .nav a:hover {
        color: #3498db;
    }

    .main-content {
      grid-area: main-content;
      background-color: #ecf0f1; /* Light Grey */
      color: #333;
      text-align: left;
      flex-direction: column; /* For actual content inside main */
      align-items: flex-start; /* Align content to start */
      justify-content: flex-start; /* Align content to top */
    }
    .main-content h2 { margin-top: 0; color: #2c3e50;}
    .main-content p { color: #555; line-height: 1.6;}


    .sidebar {
      grid-area: sidebar;
      background-color: #34495e; /* Dark Grey */
    }
    .sidebar ul { list-style: none; padding: 0; margin: 0; width: 100%;}
    .sidebar li { margin-bottom: 10px; }
    .sidebar a { color: white; text-decoration: none; display: block; padding: 5px;}
    .sidebar a:hover { color: #3498db; }

    .footer {
      grid-area: footer;
      background-color: #2c3e50; /* Dark Blue */
      font-size: 0.9em;
    }

    /* 7. Responsive behavior */
    @media (max-width: 768px) {
      .grid-layout-container {
        grid-template-columns: 1fr; /* Single column layout */
        grid-template-rows: auto auto 1fr auto auto; /* Header, Nav, Main, Sidebar, Footer stacked */
        grid-template-areas:
          "header"
          "nav"
          "main-content"
          "sidebar"
          "footer";
      }
      .nav {
        flex-direction: row; /* Nav items horizontal on smaller screens */
        justify-content: space-around;
        padding: 15px;
      }
      .nav a {
        margin-left: 0;
        margin-bottom: 0;
      }
    }
  </style>
</head>
<body>
  <div class="grid-layout-container">
    <header class="grid-item header">
      <h1>My Grid Website</h1>
    </header>

    <nav class="grid-item nav">
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </nav>

    <main class="grid-item main-content">
      <h2>Welcome to the Main Content Area</h2>
      <p>This section is designed to hold the primary content of your webpage. With CSS Grid, we can easily arrange elements in complex two-dimensional layouts.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </main>

    <aside class="grid-item sidebar">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Category 1</a></li>
        <li><a href="#">Category 2</a></li>
        <li><a href="#">Category 3</a></li>
      </ul>
    </aside>

    <footer class="grid-item footer">
      <p>&copy; 2025 CSS Grid Layout. All rights reserved.</p>
    </footer>
  </div>
</body>
</html>`
  }
};

export default CSSLesson4_4Content;