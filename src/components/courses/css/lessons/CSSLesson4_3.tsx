// src/components/lessons/css/CSSLesson4_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson4_3Content: LessonContent = {
  title: 'Flexbox (ប្លង់បត់បែន)',
  objectives: [
    'ស្វែងយល់ពីគោលគំនិត និងអត្ថប្រយោជន៍នៃ Flexbox',
    'ដឹងពីរបៀបបង្កើត Flex Container និង Flex Items',
    'រៀនពីរបៀបគ្រប់គ្រងទិសដៅរបស់ Flex Items ជាមួយ `flex-direction`',
    'ស្គាល់ពីរបៀបប្រើ `justify-content` ដើម្បីតម្រឹម Items នៅលើអ័ក្សចម្បង (main axis)',
    'យល់ដឹងពីរបៀបប្រើ `align-items` ដើម្បីតម្រឹម Items នៅលើអ័ក្សកាត់ (cross axis)',
    'រៀនពីរបៀបធ្វើឱ្យ Items ផ្លាស់ប្តូរទំហំដោយប្រើ `flex-grow`, `flex-shrink`, និង `flex-basis`',
    'ស្គាល់ពីរបៀបរៀបចំលំដាប់ Items ឡើងវិញដោយប្រើ `order`',
    'អនុវត្តការរៀបចំប្លង់ដោយប្រើ Flexbox'
  ],
  content: `
# Flexbox (ប្លង់បត់បែន) 🚀

---

**Flexbox (Flexible Box Layout module)** គឺជាម៉ូឌុល Layout មួយវិមាត្រ (one-dimensional) នៅក្នុង CSS ដែលត្រូវបានរចនាឡើងដើម្បីចែកចាយចន្លោះ និងតម្រឹម Elements នៅក្នុង Container មួយ។ វាអនុញ្ញាតឱ្យ Elements ក្នុង Container ពង្រីក និងរួញ ដើម្បីបំពេញចន្លោះដែលមានដោយឆ្លាតវៃ។ Flexbox គឺល្អឥតខ្ចោះសម្រាប់ការរៀបចំប្លង់ជាជួរដេក ឬជួរឈរ។

---

## 1. Flex Container និង Flex Items

ដើម្បីចាប់ផ្តើមប្រើ Flexbox អ្នកត្រូវកំណត់ **Flex Container**។ ធាតុផ្សំផ្ទាល់របស់ Container នោះនឹងក្លាយជា **Flex Items** ។

* **Flex Container:** Element ដែលមាន \`display: flex;\` ឬ \`display: inline-flex;\` ។
* **Flex Items:** Elements កូនផ្ទាល់របស់ Flex Container ។

\`\`\`css
/* Flex Container */
.flex-container {
  display: flex; /* Makes this a flex container */
  border: 2px solid #3498db;
  padding: 10px;
  background-color: #ecf0f1;
}

/* Flex Items (direct children of flex-container) */
.flex-item {
  background-color: #a2d9ce;
  border: 1px solid #2ecc71;
  padding: 15px;
  margin: 5px;
  text-align: center;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .flex-example-container {
    display: flex;
    border: 2px solid #555;
    padding: 10px;
    background-color: #f0f0f0;
    margin-bottom: 20px;
  }
  .flex-example-item {
    background-color: #add8e6;
    border: 1px solid #66b3cc;
    padding: 20px;
    margin: 5px;
    text-align: center;
  }
</style>
<h3>Flex Container និង Flex Items</h3>
<div class="flex-example-container">
  <div class="flex-example-item">Item 1</div>
  <div class="flex-example-item">Item 2</div>
  <div class="flex-example-item">Item 3</div>
</div>
\`\`\`

---

## 2. Flex-Direction (ទិសដៅបត់បែន)

\`flex-direction\` កំណត់អ័ក្សចម្បង (main axis) តាមបណ្តោយដែល Flex Items ត្រូវបានដាក់។

* **\`row\` (លំនាំដើម):** Items ត្រូវបានដាក់ជាជួរដេក (ពីឆ្វេងទៅស្តាំសម្រាប់ LTR)។
* **\`row-reverse\`:** Items ត្រូវបានដាក់ជាជួរដេក (ពីស្តាំទៅឆ្វេងសម្រាប់ LTR)។
* **\`column\`:** Items ត្រូវបានដាក់ជាជួរឈរ (ពីលើចុះក្រោម)។
* **\`column-reverse\`:** Items ត្រូវបានដាក់ជាជួរឈរ (ពីក្រោមឡើងលើ)។

\`\`\`css
/* Row direction (default) */
.flex-row {
  flex-direction: row;
}

/* Column direction */
.flex-column {
  flex-direction: column;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .flex-direction-container {
    display: flex;
    border: 2px solid #3498db;
    background-color: #ecf0f1;
    margin-bottom: 15px;
    padding: 10px;
    height: 120px; /* For column example */
  }
  .flex-direction-item {
    background-color: #a2d9ce;
    border: 1px solid #2ecc71;
    padding: 10px;
    margin: 5px;
    text-align: center;
  }
</style>
<h3>Flex-Direction: row</h3>
<div class="flex-direction-container" style="flex-direction: row;">
  <div class="flex-direction-item">Item 1</div>
  <div class="flex-direction-item">Item 2</div>
  <div class="flex-direction-item">Item 3</div>
</div>

<h3>Flex-Direction: column</h3>
<div class="flex-direction-container" style="flex-direction: column;">
  <div class="flex-direction-item">Item A</div>
  <div class="flex-direction-item">Item B</div>
  <div class="flex-direction-item">Item C</div>
</div>
\`\`\`

---

## 3. Justify-Content (តម្រឹមមាតិកា)

\`justify-content\` កំណត់របៀបដែល Flex Items ត្រូវបានចែកចាយតាមបណ្តោយ **អ័ក្សចម្បង (main axis)** របស់ Container ។

* **\`flex-start\` (លំនាំដើម):** Items ត្រូវបានតម្រឹមទៅដើមនៃ Container ។
* **\`flex-end\`:** Items ត្រូវបានតម្រឹមទៅចុងនៃ Container ។
* **\`center\`:** Items ត្រូវបានតម្រឹមនៅកណ្តាល Container ។
* **\`space-between\`:** Items ត្រូវបានចែកចាយស្មើៗគ្នា ដោយមានចន្លោះនៅចន្លោះពួកវា។ Item ទីមួយនៅដើម ហើយ Item ចុងក្រោយនៅចុង។
* **\`space-around\`:** Items ត្រូវបានចែកចាយស្មើៗគ្នា ដោយមានចន្លោះនៅជុំវិញពួកវា។
* **\`space-evenly\`:** Items ត្រូវបានចែកចាយស្មើៗគ្នា ដោយមានចន្លោះស្មើគ្នារវាងពួកវា និងនៅគែម។

\`\`\`css
/* Align items to the center horizontally */
.justify-center {
  justify-content: center;
}

/* Distribute space evenly between items */
.justify-space-between {
  justify-content: space-between;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .justify-container {
    display: flex;
    border: 2px solid #007bff;
    background-color: #e6f7ff;
    margin-bottom: 15px;
    padding: 10px;
    height: 80px; /* Consistent height for visual clarity */
  }
  .justify-item {
    background-color: #90caf9; /* Light blue */
    border: 1px solid #2196f3;
    padding: 10px;
    margin: 3px;
    text-align: center;
    width: 60px; /* Fixed width for items */
  }
</style>
<h3>Justify-Content: flex-start (Default)</h3>
<div class="justify-container" style="justify-content: flex-start;">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>

<h3>Justify-Content: center</h3>
<div class="justify-container" style="justify-content: center;">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>

<h3>Justify-Content: space-between</h3>
<div class="justify-container" style="justify-content: space-between;">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>

<h3>Justify-Content: space-evenly</h3>
<div class="justify-container" style="justify-content: space-evenly;">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>
\`\`\`

---

## 4. Align-Items (តម្រឹមធាតុ)

\`align-items\` កំណត់របៀបដែល Flex Items ត្រូវបានតម្រឹមតាមបណ្តោយ **អ័ក្សកាត់ (cross axis)** របស់ Container ។

* **\`stretch\` (លំនាំដើម):** Items លាតសន្ធឹងដើម្បីបំពេញ Container (លុះត្រាតែមាន \`height\` ឬ \`max-height\` កំណត់)។
* **\`flex-start\`:** Items ត្រូវបានតម្រឹមទៅដើមនៃអ័ក្សកាត់។
* **\`flex-end\`:** Items ត្រូវបានតម្រឹមទៅចុងនៃអ័ក្សកាត់។
* **\`center\`:** Items ត្រូវបានតម្រឹមនៅកណ្តាលអ័ក្សកាត់។
* **\`baseline\`:** Items ត្រូវបានតម្រឹមដោយផ្អែកលើ Baseline នៃអត្ថបទរបស់ពួកវា។

\`\`\`css
/* Align items to the center vertically */
.align-center {
  align-items: center;
}

/* Align items to the top */
.align-start {
  align-items: flex-start;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .align-container {
    display: flex;
    border: 2px solid #28a745;
    background-color: #e8f5e9;
    margin-bottom: 15px;
    padding: 10px;
    height: 150px; /* Needs a height to see alignment */
  }
  .align-item {
    background-color: #a5d6a7; /* Light green */
    border: 1px solid #4caf50;
    padding: 10px;
    margin: 5px;
    text-align: center;
    width: 80px;
  }
  .align-item.small { height: 50px; }
  .align-item.medium { height: 80px; }
  .align-item.large { height: 120px; }
</style>
<h3>Align-Items: stretch (Default)</h3>
<div class="align-container" style="align-items: stretch;">
  <div class="align-item small">Item A</div>
  <div class="align-item medium">Item B</div>
  <div class="align-item large">Item C</div>
</div>

<h3>Align-Items: center</h3>
<div class="align-container" style="align-items: center;">
  <div class="align-item small">Item A</div>
  <div class="align-item medium">Item B</div>
  <div class="align-item large">Item C</div>
</div>

<h3>Align-Items: flex-end</h3>
<div class="align-container" style="align-items: flex-end;">
  <div class="align-item small">Item A</div>
  <div class="align-item medium">Item B</div>
  <div class="align-item large">Item C</div>
</div>
\`\`\`

---

## 5. Flex-Wrap (ការរុំបត់បែន)

\`flex-wrap\` កំណត់ថាតើ Flex Items គួរតែរុំ (wrap) ទៅបន្ទាត់ថ្មី ឬនៅទាំងអស់នៅលើបន្ទាត់តែមួយ។

* **\`nowrap\` (លំនាំដើម):** Items ទាំងអស់នឹងនៅតែនៅលើបន្ទាត់តែមួយ។
* **\`wrap\`:** Items នឹងរុំទៅបន្ទាត់ថ្មីនៅពេលមិនមានចន្លោះគ្រប់គ្រាន់។
* **\`wrap-reverse\`:** Items នឹងរុំទៅបន្ទាត់ថ្មីតាមលំដាប់បញ្ច្រាស។

\`\`\`css
/* Allow items to wrap to the next line */
.flex-wrap {
  flex-wrap: wrap;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .wrap-container {
    display: flex;
    border: 2px solid #e91e63; /* Pink */
    background-color: #fce4ec;
    padding: 10px;
    width: 300px; /* Constrain width to force wrapping */
    margin-bottom: 20px;
  }
  .wrap-item {
    background-color: #f8bbd0; /* Light pink */
    border: 1px solid #e91e63;
    padding: 10px;
    margin: 5px;
    text-align: center;
    width: 100px; /* Fixed width for items */
  }
</style>
<h3>Flex-Wrap: nowrap (Default)</h3>
<div class="wrap-container" style="flex-wrap: nowrap;">
  <div class="wrap-item">Item 1</div>
  <div class="wrap-item">Item 2</div>
  <div class="wrap-item">Item 3</div>
  <div class="wrap-item">Item 4</div>
</div>

<h3>Flex-Wrap: wrap</h3>
<div class="wrap-container" style="flex-wrap: wrap;">
  <div class="wrap-item">Item 1</div>
  <div class="wrap-item">Item 2</div>
  <div class="wrap-item">Item 3</div>
  <div class="wrap-item">Item 4</div>
</div>
\`\`\`

---

## 6. Flex Shorthands for Items (Shorthands សម្រាប់ Flex Items)

Properties ដូចជា \`flex-grow\`, \`flex-shrink\`, និង \`flex-basis\` គ្រប់គ្រងរបៀបដែល Flex Item នីមួយៗផ្លាស់ប្តូរទំហំ។ ពួកវាត្រូវបានដាក់បញ្ចូលគ្នាជាញឹកញាប់នៅក្នុង Shorthand \`flex\` ។

* **\`flex-grow\`:** កំណត់កត្តាកំណើនរបស់ Item ។ លេខខ្ពស់ជាងនេះអនុញ្ញាតឱ្យ Item ពង្រីកកាន់តែច្រើនបើប្រៀបធៀបទៅនឹង Items ផ្សេងទៀត។ \`0\` (លំនាំដើម) មានន័យថាវានឹងមិនរីកទេ។
* **\`flex-shrink\`:** កំណត់កត្តារួញរបស់ Item ។ លេខខ្ពស់ជាងនេះអនុញ្ញាតឱ្យ Item រួញកាន់តែច្រើនបើប្រៀបធៀបទៅនឹង Items ផ្សេងទៀតនៅពេលដែលចន្លោះមិនគ្រប់គ្រាន់។ \`1\` (លំនាំដើម) មានន័យថាវានឹងរួញ។ \`0\` មានន័យថាវានឹងមិនរួញទេ។
* **\`flex-basis\`:** កំណត់ទំហំដំបូងរបស់ Item មុនពេលចន្លោះត្រូវបានចែកចាយ។ អាចជា Length (ឧទាហរណ៍ \`100px\`) ឬ Percentage (ឧទាហរណ៍ \`50%\`) ឬ \`auto\` (លំនាំដើម: ប្រើទំហំ Content)។

**Shorthand: \`flex: [flex-grow] [flex-shrink] [flex-basis];\`**

\`\`\`css
/* Item will grow to fill available space */
.flex-item-grow {
  flex-grow: 1; /* Shorthand: flex: 1 1 auto; */
}

/* Item will not shrink */
.flex-item-no-shrink {
  flex-shrink: 0; /* Shorthand: flex: 0 0 auto; */
}

/* Item takes 50% of parent's width, then grows/shrinks */
.flex-item-basis {
  flex-basis: 50%; /* Shorthand: flex: 0 1 50%; */
}

/* Common use cases */
.flex-fill { /* Item takes all available space */
  flex: 1; /* Same as flex: 1 1 0%; or flex: 1 1 auto; depends on context */
}
.flex-fixed { /* Item with fixed width, won't grow/shrink */
  flex: 0 0 100px; /* Same as flex-grow: 0; flex-shrink: 0; flex-basis: 100px; */
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .flex-sizing-container {
    display: flex;
    border: 2px solid #555;
    background-color: #f0f0f0;
    margin-bottom: 20px;
    padding: 10px;
    width: 400px; /* Constrain container width */
  }
  .flex-sizing-item {
    background-color: #ffe0b2;
    border: 1px solid #ff9800;
    padding: 10px;
    margin: 5px;
    text-align: center;
  }
  .item-grow { flex-grow: 1; }
  .item-fixed { flex: 0 0 100px; /* flex-grow:0, flex-shrink:0, flex-basis:100px */ }
  .item-shrink { flex-shrink: 1; } /* Default is 1, so this explicitly says it can shrink */
  .item-basis-half { flex-basis: 50%; }
</style>
<h3>Flex-Grow, Flex-Shrink, Flex-Basis</h3>
<div class="flex-sizing-container">
  <div class="flex-sizing-item item-fixed">Fixed (100px)</div>
  <div class="flex-sizing-item item-grow">Grow (flex-grow:1)</div>
  <div class="flex-sizing-item item-fixed">Fixed (100px)</div>
</div>

<div class="flex-sizing-container" style="width: 250px;">
  <div class="flex-sizing-item item-fixed">Fixed (100px)</div>
  <div class="flex-sizing-item item-shrink">Shrink (flex-shrink:1)</div>
  <div class="flex-sizing-item item-fixed">Fixed (100px)</div>
</div>

<div class="flex-sizing-container" style="width: 300px;">
  <div class="flex-sizing-item item-basis-half">Basis 50%</div>
  <div class="flex-sizing-item item-grow">Grow (flex-grow:1)</div>
</div>
\`\`\`

---

## 7. Order (លំដាប់)

\`order\` Property អនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូរលំដាប់លំដោយដែល Flex Items លេចឡើងក្នុង Container ។
* តម្លៃលំនាំដើមគឺ \`0\` ។
* Items ដែលមានតម្លៃ \`order\` ទាបជាងនឹងលេចឡើងមុន Items ដែលមានតម្លៃខ្ពស់ជាង។
* ប្រសិនបើ Items មានតម្លៃ \`order\` ដូចគ្នា ពួកវានឹងលេចឡើងតាមលំដាប់លំដោយក្នុង HTML ។

\`\`\`css
.item-a { order: 2; }
.item-b { order: 1; } /* Will appear before item-a */
.item-c { order: 3; }
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .flex-order-container {
    display: flex;
    border: 2px solid #555;
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 20px;
  }
  .flex-order-item {
    background-color: #d8bfd8; /* Thistle */
    border: 1px solid #800080; /* Purple */
    padding: 15px;
    margin: 5px;
    text-align: center;
    width: 80px;
  }
</style>
<h3>Order Property</h3>
<div class="flex-order-container">
  <div class="flex-order-item" style="order: 2;">Item 1 (Order: 2)</div>
  <div class="flex-order-item" style="order: 0;">Item 2 (Order: 0)</div>
  <div class="flex-order-item" style="order: 1;">Item 3 (Order: 1)</div>
  <div class="flex-order-item" style="order: -1;">Item 4 (Order: -1)</div>
</div>
\`\`\`

---
> **គន្លឹះ:** Flexbox គឺជាឧបករណ៍ដ៏មានឥទ្ធិពលសម្រាប់ការរៀបចំប្លង់មួយវិមាត្រ។ វាជាជម្រើសដ៏ល្អសម្រាប់ Headers, Navigations, Form elements, និង Card Layouts ។ សម្រាប់ Layout ពីរវិមាត្រ (ជួរដេក និងជួរឈរក្នុងពេលតែមួយ) សូមពិចារណាប្រើ **CSS Grid** ។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ Flexbox</h3>
<style>
body { font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa; }
.flex-section {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
h4 { color: #0056b3; margin-top: 0; }

.flex-demo-container {
  display: flex;
  height: 150px; /* Fixed height for visual demonstration of align-items */
  border: 2px dashed #6c757d; /* Grey dashed border */
  background-color: #e9ecef; /* Light grey background */
  padding: 10px;
  margin-top: 10px;
}
.flex-demo-item {
  background-color: #a2d9ce; /* Light teal */
  border: 1px solid #2ecc71; /* Green */
  padding: 10px;
  margin: 5px;
  text-align: center;
  color: #333;
  display: flex; /* To vertically center text inside item */
  align-items: center;
  justify-content: center;
}

/* Example 1: Basic Row with Space Between */
.ex1-container {
  justify-content: space-between;
}
.ex1-item {
  width: 100px;
}

/* Example 2: Centered Column */
.ex2-container {
  flex-direction: column;
  align-items: center; /* Center horizontally in column */
  justify-content: center; /* Center vertically in column */
  height: 200px; /* Give height for column alignment */
}
.ex2-item {
  width: 80%;
  height: auto; /* Allow content to dictate height */
  flex-basis: auto; /* Override fixed width from demo item */
}

/* Example 3: Responsive Wrap with Grow/Shrink */
.ex3-container {
  flex-wrap: wrap;
  justify-content: center;
  height: auto; /* Allow height to adjust for wrapping */
}
.ex3-item {
  min-width: 100px; /* Ensure they don't get too small */
  flex: 1 1 120px; /* flex-grow, flex-shrink, flex-basis */
  /* This means: grow if space, shrink if needed (but not below min-width), basis of 120px */
}
.ex3-item:nth-child(even) {
  background-color: #b0e0e6; /* PowderBlue for even items */
}

/* Example 4: Order Property */
.ex4-container {
  justify-content: center;
}
.ex4-item-1 { order: 2; }
.ex4-item-2 { order: 0; }
.ex4-item-3 { order: 1; }
.ex4-item {
  width: 90px;
}

</style>

<section class="flex-section">
  <h4>1. Basic Flex Row with Space-Between</h4>
  <p>Items are distributed with space between them.</p>
  <div class="flex-demo-container ex1-container">
    <div class="flex-demo-item ex1-item">Item A</div>
    <div class="flex-demo-item ex1-item">Item B</div>
    <div class="flex-demo-item ex1-item">Item C</div>
  </div>
</section>

<section class="flex-section">
  <h4>2. Centered Column Layout</h4>
  <p>Items are stacked vertically and centered.</p>
  <div class="flex-demo-container ex2-container">
    <div class="flex-demo-item ex2-item">Top Item</div>
    <div class="flex-demo-item ex2-item">Middle Item</div>
    <div class="flex-demo-item ex2-item">Bottom Item</div>
  </div>
</section>

<section class="flex-section">
  <h4>3. Responsive Wrapping Items (Try resizing your browser!)</h4>
  <p>Items wrap to the next line and grow/shrink to fill space.</p>
  <div class="flex-demo-container ex3-container">
    <div class="flex-demo-item ex3-item">Flex Item 1</div>
    <div class="flex-demo-item ex3-item">Flex Item 2</div>
    <div class="flex-demo-item ex3-item">Flex Item 3</div>
    <div class="flex-demo-item ex3-item">Flex Item 4</div>
    <div class="flex-demo-item ex3-item">Flex Item 5</div>
    <div class="flex-demo-item ex3-item">Flex Item 6</div>
  </div>
</section>

<section class="flex-section">
  <h4>4. Changing Item Order</h4>
  <p>Items appear in a custom order using the \`order\` property.</p>
  <div class="flex-demo-container ex4-container">
    <div class="flex-demo-item ex4-item ex4-item-1">Item (Order 2)</div>
    <div class="flex-demo-item ex4-item ex4-item-2">Item (Order 0)</div>
    <div class="flex-demo-item ex4-item ex4-item-3">Item (Order 1)</div>
  </div>
</section>
`
  ],
  quiz: [
    {
      question: 'តើ Property CSS មួយណាដែលត្រូវបានប្រើដើម្បីបង្កើត Flex Container?',
      options: [
        '`display: block;`',
        '`display: inline;`',
        '`display: flex;`',
        '`display: grid;`'
      ],
      correct: 2,
      explanation: 'ការកំណត់ `display: flex;` ទៅលើ Element មួយ នឹងបំប្លែងវាទៅជា Flex Container ។'
    },
    {
      question: 'តើ `flex-direction: column;` ធ្វើអ្វីចំពោះ Flex Items?',
      options: [
        'រៀបចំពួកវាជាជួរដេក (horizontally)',
        'រៀបចំពួកវាជាជួរឈរ (vertically)',
        'បញ្ច្រាសលំដាប់នៃជួរដេក',
        'តម្រឹមពួកវានៅកណ្តាល'
      ],
      correct: 1,
      explanation: '`flex-direction: column;` រៀបចំ Flex Items ជាជួរឈរ (ពីលើចុះក្រោម) ។'
    },
    {
      question: 'តើ `justify-content` គ្រប់គ្រងការតម្រឹមរបស់ Flex Items នៅលើអ័ក្សមួយណា?',
      options: [
        'អ័ក្សកាត់ (cross axis)',
        'អ័ក្សចម្បង (main axis)',
        'អ័ក្ស Z',
        'អ័ក្សណាមួយក៏បាន'
      ],
      correct: 1,
      explanation: '`justify-content` គ្រប់គ្រងការចែកចាយចន្លោះ និងការតម្រឹមរបស់ Flex Items តាមបណ្តោយអ័ក្សចម្បង (main axis) ។'
    },
    {
      question: 'ប្រសិនបើ `flex-direction` គឺ `row` តើ `align-items: center;` នឹងតម្រឹម Flex Items តាមរបៀបណា?',
      options: [
        'នៅកណ្តាលផ្ដេក',
        'នៅកណ្តាលបញ្ឈរ',
        'នៅដើមនៃជួរដេក',
        'នៅចុងនៃជួរដេក'
      ],
      correct: 1,
      explanation: 'ប្រសិនបើ `flex-direction` គឺ `row` អ័ក្សចម្បងគឺផ្ដេក ហើយអ័ក្សកាត់គឺបញ្ឈរ។ ដូច្នេះ `align-items: center;` នឹងតម្រឹម Items នៅកណ្តាលបញ្ឈរ។'
    },
    {
      question: 'តើតម្លៃលំនាំដើមសម្រាប់ `flex-direction` គឺអ្វី?',
      options: [
        '`column`',
        '`row`',
        '`row-reverse`',
        '`column-reverse`'
      ],
      correct: 1,
      explanation: 'តម្លៃលំនាំដើមសម្រាប់ `flex-direction` គឺ `row` ។'
    },
    {
      question: 'តើ `flex-wrap: wrap;` ធ្វើអ្វី?',
      options: [
        'រក្សា Items ទាំងអស់នៅលើបន្ទាត់តែមួយ',
        'រុំ Items ទៅបន្ទាត់ថ្មីនៅពេលមិនមានចន្លោះគ្រប់គ្រាន់',
        'រុំ Items ទៅបន្ទាត់ថ្មីតាមលំដាប់បញ្ច្រាស',
        'រៀបចំ Items ជាជួរឈរ'
      ],
      correct: 1,
      explanation: '`flex-wrap: wrap;` អនុញ្ញាតឱ្យ Flex Items រុំទៅបន្ទាត់ថ្មីនៅពេលដែល Container មិនមានចន្លោះគ្រប់គ្រាន់ដើម្បីបង្ហាញពួកវាទាំងអស់នៅលើបន្ទាត់តែមួយ។'
    },
    {
      question: 'តើ Property មួយណាដែលគ្រប់គ្រងសមត្ថភាពរបស់ Flex Item ក្នុងការរីកធំដើម្បីបំពេញចន្លោះដែលមាន?',
      options: [
        '`flex-shrink`',
        '`flex-basis`',
        '`flex-grow`',
        '`order`'
      ],
      correct: 2,
      explanation: '`flex-grow` កំណត់កត្តាកំណើនរបស់ Item ។ លេខខ្ពស់ជាងនេះអនុញ្ញាតឱ្យ Item ពង្រីកកាន់តែច្រើន។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យ Flex Item មួយមិនរួញទំហំរបស់វា ទោះបីជាមានចន្លោះមិនគ្រប់គ្រាន់ក៏ដោយ តើអ្នកគួរកំណត់ `flex-shrink` ទៅតម្លៃប៉ុន្មាន?',
      options: [
        '`1`',
        '`0`',
        '`auto`',
        '`-1`'
      ],
      correct: 1,
      explanation: 'ការកំណត់ `flex-shrink: 0;` ទៅលើ Flex Item នឹងរារាំងវាពីការរួញ។'
    },
    {
      question: 'តើ Property `order` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីតម្រឹម Item នៅកណ្តាល',
        'ដើម្បីផ្លាស់ប្តូរលំដាប់លំដោយដែល Flex Items លេចឡើងក្នុង Container',
        'ដើម្បីកំណត់ទំហំដំបូងរបស់ Item',
        'ដើម្បីធ្វើឱ្យ Item ថ្លា'
      ],
      correct: 1,
      explanation: '`order` Property អនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូរលំដាប់លំដោយដែល Flex Items លេចឡើងក្នុង Container ដោយមិនប៉ះពាល់ដល់ Markup HTML ។'
    },
    {
      question: 'តើតម្លៃលំនាំដើមសម្រាប់ `order` Property គឺអ្វី?',
      options: [
        '`1`',
        '`auto`',
        '`-1`',
        '`0`'
      ],
      correct: 3,
      explanation: 'តម្លៃលំនាំដើមសម្រាប់ `order` Property គឺ `0` ។'
    },
    {
      question: 'តើ `flex: 1 1 auto;` ជា Shorthand សម្រាប់ Properties មួយណា?',
      options: [
        '`flex-direction: 1; flex-wrap: 1; flex-basis: auto;`',
        '`flex-grow: 1; flex-shrink: 1; flex-basis: auto;`',
        '`justify-content: 1; align-items: 1; flex-basis: auto;`',
        '`order: 1; flex-wrap: 1; flex-direction: auto;`'
      ],
      correct: 1,
      explanation: '`flex: [flex-grow] [flex-shrink] [flex-basis];` ដូច្នេះ `flex: 1 1 auto;` គឺសម្រាប់ `flex-grow: 1; flex-shrink: 1; flex-basis: auto;` ។'
    },
    {
      question: 'តើ `justify-content: space-around;` ខុសពី `justify-content: space-evenly;` យ៉ាងដូចម្តេច?',
      options: [
        '`space-around` ដាក់ចន្លោះតែរវាង Items ចំណែក `space-evenly` ដាក់ចន្លោះនៅគែមផងដែរ',
        '`space-around` ដាក់ចន្លោះស្មើគ្នារវាង Items និងនៅគែម ចំណែក `space-evenly` ដាក់ចន្លោះតិចជាងនៅគែម',
        '`space-around` ដាក់ចន្លោះស្មើៗគ្នាជុំវិញ Items (ពាក់កណ្តាលចន្លោះនៅគែម) ចំណែក `space-evenly` ដាក់ចន្លោះស្មើគ្នាទាំងរវាង Items និងនៅគែម',
        'ពួកវាដូចគ្នា'
      ],
      correct: 2,
      explanation: '`space-around` ផ្តល់ចន្លោះស្មើគ្នាជុំវិញ Item នីមួយៗ ដែលមានន័យថាចន្លោះនៅគែមគឺពាក់កណ្តាលនៃចន្លោះរវាង Items ។ `space-evenly` ផ្តល់ចន្លោះស្មើគ្នាទាំងស្រុងរវាង Items និងនៅគែម។'
    },
    {
      question: 'ប្រសិនបើ Flex Container មាន `flex-direction: column;` តើ Property មួយណាដែលអ្នកនឹងប្រើដើម្បីតម្រឹម Items ផ្ដេក?',
      options: [
        '`justify-content`',
        '`align-items`',
        '`flex-wrap`',
        '`flex-basis`'
      ],
      correct: 1,
      explanation: 'នៅពេល `flex-direction: column;` អ័ក្សចម្បងគឺបញ្ឈរ។ ដូច្នេះ `align-items` គ្រប់គ្រងការតម្រឹមនៅលើអ័ក្សកាត់ (ផ្ដេក) ។'
    },
    {
      question: 'តើ `display: inline-flex;` ខុសពី `display: flex;` យ៉ាងដូចម្តេច?',
      options: [
        '`inline-flex` ធ្វើឱ្យ Items រុំ ខណៈ `flex` មិនធ្វើ',
        '`inline-flex` ធ្វើឱ្យ Container ដើរតួជា Inline Element ខណៈ `flex` ដើរតួជា Block Element',
        '`inline-flex` ត្រូវបានប្រើសម្រាប់ Layout ជួរឈរ ខណៈ `flex` សម្រាប់ជួរដេក',
        'ពួកវាដូចគ្នា'
      ],
      correct: 1,
      explanation: '`display: flex;` ធ្វើឱ្យ Container ខ្លួនវាជា Block-level Flex Container (កាន់កាប់ទទឹងពេញ) ខណៈ `display: inline-flex;` ធ្វើឱ្យ Container ខ្លួនវាជា Inline-level Flex Container (កាន់កាប់តែទំហំដែលត្រូវការ) ។'
    },
    {
      question: 'តើ Properties មួយណាខាងក្រោមនេះជា Properties របស់ **Flex Item** (មិនមែន Flex Container)?',
      options: [
        '`flex-direction`',
        '`justify-content`',
        '`align-items`',
        '`flex-grow`'
      ],
      correct: 3,
      explanation: '`flex-grow` គឺជា Property ដែលត្រូវបានអនុវត្តទៅលើ Flex Item នីមួយៗ ខណៈដែលបីផ្សេងទៀតត្រូវបានអនុវត្តទៅលើ Flex Container ។'
    },
    {
      question: 'តើ `align-items: stretch;` ធ្វើអ្វីប្រសិនបើ Flex Items មិនមានកម្ពស់កំណត់?',
      options: [
        'ធ្វើឱ្យ Items ទាំងអស់មានកម្ពស់ដូចគ្នាទៅនឹង Item ដែលខ្ពស់បំផុត',
        'ធ្វើឱ្យ Items ទាំងអស់លាតសន្ធឹងដើម្បីបំពេញកម្ពស់របស់ Flex Container',
        'តម្រឹម Items ទៅផ្នែកខាងលើនៃ Container',
        'តម្រឹម Items នៅកណ្តាល Container'
      ],
      correct: 1,
      explanation: '`align-items: stretch;` (តម្លៃលំនាំដើម) នឹងធ្វើឱ្យ Flex Items លាតសន្ធឹងតាមអ័ក្សកាត់ដើម្បីបំពេញកម្ពស់ (ឬទទឹង បើ `flex-direction: column;`) របស់ Flex Container លុះត្រាតែ Items មានកម្ពស់ (ឬទទឹង) ផ្ទាល់ខ្លួន។'
    },
    {
      question: 'តើ Flexbox ជា Layout Module ប្រភេទណា?',
      options: [
        'ពីរវិមាត្រ (2-dimensional)',
        'បីវិមាត្រ (3-dimensional)',
        'មួយវិមាត្រ (1-dimensional)',
        'គ្មានវិមាត្រ (no-dimensional)'
      ],
      correct: 2,
      explanation: 'Flexbox គឺជាម៉ូឌុល Layout មួយវិមាត្រ (one-dimensional) ដែលមានន័យថាវាគ្រប់គ្រងការចែកចាយចន្លោះ និងការតម្រឹមតាមបណ្តោយអ័ក្សតែមួយ (ជួរដេក ឬជួរឈរ) ក្នុងពេលតែមួយ។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
* \`<body>\` ។
* \`<div>\` មួយដែលមាន Class \`flex-header\` ។
* \`<div>\` មួយទៀតដែលមាន Class \`flex-main-content\` ។
* នៅក្នុង \`flex-main-content\` មាន \`<div>\` ចំនួន ៣ ដោយមាន Class \`flex-card\` ។
* នៅក្នុង \`flex-card\` នីមួយៗ មាន \`<h3>\` និង \`<p>\` ។

សូមប្រើ **Internal CSS** និង Flexbox properties ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  សម្រាប់ \`body\` កំណត់ \`font-family: Arial, sans-serif;\` និង \`margin: 0;\`, \`background-color: #f4f7f6;\` ។
2.  សម្រាប់ \`.flex-header\` កំណត់ \`display: flex;\`, \`justify-content: space-between;\`, \`align-items: center;\`, \`background-color: #333;\`, \`color: white;\`, \`padding: 15px 20px;\` ។ បន្ថែម \`<h1>Logo</h1>\` និង \`<nav><a>Home</a><a>About</a><a>Contact</a></nav>\` នៅក្នុង \`flex-header\` ។
3.  សម្រាប់ \`flex-header nav a\` កំណត់ \`color: white;\`, \`text-decoration: none;\`, \`margin-left: 15px;\` ។
4.  សម្រាប់ \`.flex-main-content\` កំណត់ \`display: flex;\`, \`flex-wrap: wrap;\`, \`justify-content: center;\`, \`padding: 20px;\`, \`gap: 20px;\` (CSS property for gap between flex/grid items).
5.  សម្រាប់ \`.flex-card\` កំណត់ \`flex-basis: 300px;\`, \`flex-grow: 1;\`, \`flex-shrink: 1;\`, \`background-color: #ffffff;\`, \`border: 1px solid #ddd;\`, \`border-radius: 8px;\`, \`padding: 20px;\`, \`box-shadow: 0 2px 5px rgba(0,0,0,0.1);\`, \`text-align: center;\` ។
6.  សម្រាប់ \`.flex-card h3\` កំណត់ \`color: #3498db;\` ។
7.  (Optional) បន្ថែម Responsive behaviour: នៅពេលអេក្រង់តូចជាង 768px សូមឱ្យ \`.flex-card\` នីមួយៗយកទទឹង 100% ។
`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>Flexbox Lab</title>
  <style>
    /* 1. Body styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #f4f7f6;
    }

    /* 2. Flex Header */
    .flex-header {
      display: flex;
      justify-content: space-between; /* Space out logo and nav */
      align-items: center; /* Vertically center items */
      background-color: #333;
      color: white;
      padding: 15px 20px;
    }

    .flex-header h1 {
      margin: 0;
      font-size: 1.8em;
    }

    /* 3. Navigation links */
    .flex-header nav a {
      color: white;
      text-decoration: none;
      margin-left: 15px;
      transition: color 0.3s ease;
    }

    .flex-header nav a:hover {
      color: #3498db; /* Light blue on hover */
    }

    /* 4. Main content container (Flex Container) */
    .flex-main-content {
      display: flex;
      flex-wrap: wrap; /* Allow cards to wrap to the next line */
      justify-content: center; /* Center cards horizontally when there's extra space */
      padding: 20px;
      gap: 20px; /* Space between flex items (cards) */
    }

    /* 5. Flex Cards (Flex Items) */
    .flex-card {
      /* flex: <flex-grow> <flex-shrink> <flex-basis>; */
      flex-basis: 300px; /* Ideal width before growing/shrinking */
      flex-grow: 1;      /* Allow cards to grow to fill space */
      flex-shrink: 1;    /* Allow cards to shrink if needed */
      
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      text-align: center;
      display: flex; /* Make card content a flex column */
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    /* 6. Card headings */
    .flex-card h3 {
      color: #3498db;
      margin-top: 0;
      margin-bottom: 10px;
    }

    .flex-card p {
      color: #555;
      font-size: 0.95em;
      line-height: 1.5;
    }

    /* 7. Responsive behavior (Optional) */
    @media (max-width: 768px) {
      .flex-card {
        flex-basis: 100%; /* Make each card take full width on smaller screens */
        max-width: 400px; /* Limit max width for better readability on very wide small screens */
      }
      .flex-main-content {
        padding: 15px;
      }
    }
  </style>
</head>
<body>
  <header class="flex-header">
    <h1>My Website</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main class="flex-main-content">
    <div class="flex-card">
      <h3>Web Design</h3>
      <p>Creating visually appealing and user-friendly websites with modern design principles.</p>
    </div>
    <div class="flex-card">
      <h3>Development</h3>
      <p>Building robust and scalable web applications using the latest technologies.</p>
    </div>
    <div class="flex-card">
      <h3>SEO Optimization</h3>
      <p>Improving your website's visibility on search engines to attract more visitors.</p>
    </div>
    <div class="flex-card">
      <h3>Content Creation</h3>
      <p>Crafting engaging and relevant content to connect with your audience.</p>
    </div>
  </main>

  <footer style="text-align: center; padding: 20px; background-color: #333; color: white; margin-top: 20px;">
    <p>&copy; 2025 Flexbox Layout. All rights reserved.</p>
  </footer>
</body>
</html>`
  }
};

export default CSSLesson4_3Content;