// src/components/lessons/css/CSSLesson6_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson6_2Content: LessonContent = {
  title: 'CSS Flexbox (ហ្វ្លិចបក់ CSS)',
  objectives: [
    'ស្វែងយល់ពីគោលគំនិត និងអត្ថប្រយោជន៍នៃ CSS Flexbox ។',
    'បែងចែករវាង Flex Container និង Flex Items ។',
    'រៀនពីរបៀបប្រើ Property `display: flex` ។',
    'យល់ និងអនុវត្ត Property សម្រាប់ Flex Container ដូចជា `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, និង `gap` ។',
    'យល់ និងអនុវត្ត Property សម្រាប់ Flex Items ដូចជា `order`, `flex-grow`, `flex-shrink`, `flex-basis`, `flex`, និង `align-self` ។',
    'អាចបង្កើត Layout ដែលមានភាពឆ្លើយតប (Responsive Layouts) ដោយប្រើ Flexbox ។',
    'ដោះស្រាយបញ្ហាទូទៅនៃ Layout ដោយប្រើ Flexbox ។'
  ],
  content: `
# CSS Flexbox (ហ្វ្លិចបក់ CSS) 🚀

---

**CSS Flexbox (Flexible Box Layout module)** គឺជាវិធីសាស្ត្រ Layout មួយវិមាត្រ (one-dimensional) ដែលត្រូវបានរចនាឡើងដើម្បីផ្តល់មធ្យោបាយដ៏មានប្រសិទ្ធភាពក្នុងការរៀបចំ ផ្គូរផ្គង និងចែកចាយលំហ (space) រវាង Elements នៅក្នុង Container មួយ សូម្បីតែនៅពេលដែលទំហំរបស់វាត្រូវបានគេស្គាល់តិចតួច ឬមានលក្ខណៈថាមវន្ត (dynamic) ក៏ដោយ។

Flexbox មានប្រយោជន៍ជាពិសេសសម្រាប់ការរៀបចំ Elements នៅក្នុងជួរដេក (row) ឬជួរឈរ (column) តែមួយ។ វាធ្វើឱ្យការបង្កើត Layout ដែលមានភាពឆ្លើយតបទៅនឹងទំហំអេក្រង់ផ្សេងៗគ្នាកាន់តែងាយស្រួល។

## គោលគំនិតសំខាន់ៗ (Key Concepts)

1.  **Flex Container (Flex កុងតឺន័រ)**: Element មេ (parent element) ដែលត្រូវបានកំណត់ \`display: flex\` ឬ \`display: inline-flex\`។ វាជាអ្នកគ្រប់គ្រងរបៀបដែលកូនៗរបស់វា (Flex Items) ត្រូវបានរៀបចំ។
2.  **Flex Items (Flex ធាតុ)**: Elements កូន (child elements) ផ្ទាល់របស់ Flex Container ។ ពួកវាត្រូវបានរៀបចំនៅក្នុង Flex Container តាមក្បួន Flexbox ។
3.  **Main Axis (អ័ក្សសំខាន់)**: អ័ក្សបឋមដែល Flex Items ត្រូវបានរៀបចំ (ឧទាហរណ៍ ពីឆ្វេងទៅស្តាំសម្រាប់ជួរដេក ឬពីលើទៅក្រោមសម្រាប់ជួរឈរ) ។ ទិសដៅរបស់វាត្រូវបានកំណត់ដោយ \`flex-direction\` ។
4.  **Cross Axis (អ័ក្សឆ្លង)**: អ័ក្សដែលដំណើរការកាត់កែងទៅនឹង Main Axis ។

\`\`\`html
<style>
  .flex-container-concept {
    display: flex; /* Makes this div a flex container */
    background-color: #f0f8ff; /* AliceBlue */
    border: 2px dashed #4682b4; /* SteelBlue */
    padding: 10px;
    margin-bottom: 20px;
    min-height: 150px;
    align-items: center; /* Align items along cross axis */
    justify-content: center; /* Align items along main axis */
  }
  .flex-item-concept {
    background-color: #87cefa; /* LightSkyBlue */
    border: 1px solid #1e90ff; /* DodgerBlue */
    padding: 15px;
    margin: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    flex-basis: 80px; /* Initial size */
    flex-grow: 1; /* Allows items to grow */
  }
</style>
<div class="flex-container-concept">
  <div class="flex-item-concept">Item 1</div>
  <div class="flex-item-concept">Item 2</div>
  <div class="flex-item-concept">Item 3</div>
</div>
<p style="text-align: center; font-size: 0.9em; color: #555;">
  Parent is the <strong>Flex Container</strong>, children are <strong>Flex Items</strong>.
</p>
\`\`\`

---

## Properties for the Flex Container (សម្រាប់ Flex កុងតឺន័រ)

Property ទាំងនេះត្រូវបានអនុវត្តទៅលើ Element មេ (Flex Container) ដើម្បីគ្រប់គ្រងរបៀបដែល Flex Items ត្រូវបានរៀបចំនៅខាងក្នុង។

### 1. \`display\`

កំណត់ Element មួយឱ្យក្លាយជា Flex Container ។

* **\`flex\`**: បង្កើត Block-level Flex Container ។
* **\`inline-flex\`**: បង្កើត Inline-level Flex Container ។

\`\`\`css
.container {
  display: flex; /* Or display: inline-flex; */
}
\`\`\`

---

### 2. \`flex-direction\`

កំណត់ទិសដៅរបស់ Main Axis (ដែល Flex Items ត្រូវបានរៀបចំ) ។

* **\`row\`** (លំនាំដើម): Items ត្រូវបានរៀបចំពីឆ្វេងទៅស្តាំ (ផ្ដេក) ។
* **\`row-reverse\`**: Items ត្រូវបានរៀបចំពីស្តាំទៅឆ្វេង (ផ្ដេក) ។
* **\`column\`**: Items ត្រូវបានរៀបចំពីលើទៅក្រោម (បញ្ឈរ) ។
* **\`column-reverse\`**: Items ត្រូវបានរៀបចំពីក្រោមទៅលើ (បញ្ឈរ) ។

\`\`\`html
<style>
  .direction-container {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 5px;
    background-color: #f9f9f9;
    min-height: 80px;
  }
  .direction-item {
    background-color: #ffb6c1; /* LightPink */
    border: 1px solid #ff69b4; /* HotPink */
    padding: 8px;
    margin: 3px;
    font-size: 0.9em;
  }
  .row-demo { flex-direction: row; }
  .column-demo { flex-direction: column; }
</style>
<h4>flex-direction: row (Default)</h4>
<div class="direction-container row-demo">
  <div class="direction-item">1</div>
  <div class="direction-item">2</div>
  <div class="direction-item">3</div>
</div>
<h4>flex-direction: column</h4>
<div class="direction-container column-demo">
  <div class="direction-item">A</div>
  <div class="direction-item">B</div>
  <div class="direction-item">C</div>
</div>
\`\`\`

---

### 3. \`flex-wrap\`

កំណត់ថាតើ Flex Items គួរតែ Wrap (បត់) ទៅបន្ទាត់ថ្មី ឬនៅតែនៅលើបន្ទាត់តែមួយ។

* **\`nowrap\`** (លំនាំដើម): Items ទាំងអស់នឹងនៅតែនៅលើបន្ទាត់តែមួយ ហើយអាចនឹង overflow (ហៀរ) ។
* **\`wrap\`**: Items នឹង Wrap ទៅបន្ទាត់ថ្មីនៅពេលដែលវាមិនមានទំហំគ្រប់គ្រាន់។
* **\`wrap-reverse\`**: Items នឹង Wrap ទៅបន្ទាត់ថ្មី ប៉ុន្តែតាមទិសដៅបញ្ច្រាស។

\`\`\`html
<style>
  .wrap-container {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 5px;
    width: 300px; /* Fixed width to demonstrate wrapping */
    background-color: #e6e6fa; /* Lavender */
  }
  .wrap-item {
    background-color: #dda0dd; /* Plum */
    border: 1px solid #800080; /* Purple */
    padding: 10px;
    margin: 5px;
    flex-basis: 100px; /* Each item tries to be 100px wide */
    text-align: center;
    color: white;
  }
  .nowrap-demo { flex-wrap: nowrap; }
  .wrap-demo { flex-wrap: wrap; }
</style>
<h4>flex-wrap: nowrap (Items may overflow)</h4>
<div class="wrap-container nowrap-demo">
  <div class="wrap-item">Item 1</div>
  <div class="wrap-item">Item 2</div>
  <div class="wrap-item">Item 3</div>
  <div class="wrap-item">Item 4</div>
</div>
<h4>flex-wrap: wrap (Items wrap to new line)</h4>
<div class="wrap-container wrap-demo">
  <div class="wrap-item">Item 1</div>
  <div class="wrap-item">Item 2</div>
  <div class="wrap-item">Item 3</div>
  <div class="wrap-item">Item 4</div>
</div>
\`\`\`

---

### 4. \`justify-content\`

តម្រឹម Flex Items តាមបណ្តោយ **Main Axis** ។ នេះគ្រប់គ្រងការបែងចែកលំហទំនេររវាង Elements ។

* **\`flex-start\`** (លំនាំដើម): Items ត្រូវបាន packed ទៅដើម Main Axis ។
* **\`flex-end\`**: Items ត្រូវបាន packed ទៅចុង Main Axis ។
* **\`center\`**: Items ត្រូវបានតម្រឹមកណ្តាល Main Axis ។
* **\`space-between\`**: Items ត្រូវបានចែកចាយស្មើៗគ្នា ដោយ item ទីមួយនៅដើម និង item ចុងក្រោយនៅចុង។
* **\`space-around\`**: Items ត្រូវបានចែកចាយស្មើៗគ្នាជាមួយនឹងលំហនៅជុំវិញពួកវា។ លំហរវាង items និងរវាង items នឹង container គឺស្មើគ្នា។
* **\`space-evenly\`**: Items ត្រូវបានចែកចាយស្មើៗគ្នាជាមួយនឹងលំហស្មើគ្នារវាង item នីមួយៗ និងរវាង items នឹង container ។

\`\`\`html
<style>
  .justify-container {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    min-height: 60px;
    background-color: #fafad2; /* LightGoldenRodYellow */
  }
  .justify-item {
    background-color: #daa520; /* Goldenrod */
    border: 1px solid #b8860b; /* DarkGoldenrod */
    padding: 8px 12px;
    margin: 5px;
    color: white;
    font-size: 0.9em;
  }
  .justify-start { justify-content: flex-start; }
  .justify-end { justify-content: flex-end; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .justify-evenly { justify-content: space-evenly; }
</style>
<h4>justify-content: flex-start</h4>
<div class="justify-container justify-start">
  <div class="justify-item">1</div><div class="justify-item">2</div><div class="justify-item">3</div>
</div>
<h4>justify-content: center</h4>
<div class="justify-container justify-center">
  <div class="justify-item">1</div><div class="justify-item">2</div><div class="justify-item">3</div>
</div>
<h4>justify-content: space-between</h4>
<div class="justify-container justify-between">
  <div class="justify-item">1</div><div class="justify-item">2</div><div class="justify-item">3</div>
</div>
\`\`\`

---

### 5. \`align-items\`

តម្រឹម Flex Items តាមបណ្តោយ **Cross Axis** ។

* **\`stretch\`** (លំនាំដើម): Items លាតសន្ធឹងដើម្បីបំពេញ Container (រក្សាលក្ខណៈ \`min-width\`/\`max-width\`) ។
* **\`flex-start\`**: Items ត្រូវបាន packed ទៅដើម Cross Axis ។
* **\`flex-end\`**: Items ត្រូវបាន packed ទៅចុង Cross Axis ។
* **\`center\`**: Items ត្រូវបានតម្រឹមកណ្តាល Cross Axis ។
* **\`baseline\`**: Items ត្រូវបានតម្រឹមទៅតាម Baseline របស់វា។

\`\`\`html
<style>
  .align-container {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    height: 120px; /* Fixed height to see alignment */
    background-color: #e0ffff; /* LightCyan */
  }
  .align-item {
    background-color: #20b2aa; /* LightSeaGreen */
    border: 1px solid #008080; /* Teal */
    padding: 8px 12px;
    margin: 5px;
    color: white;
    font-size: 0.9em;
  }
  .align-stretch .align-item:nth-child(2) { height: 70px; } /* Override stretch for one item */
  .align-stretch { align-items: stretch; }
  .align-start { align-items: flex-start; }
  .align-end { align-items: flex-end; }
  .align-center { align-items: center; }
  .align-baseline .align-item:first-child { font-size: 2em; }
</style>
<h4>align-items: stretch (Default - items fill height)</h4>
<div class="align-container align-stretch">
  <div class="align-item">Item 1</div>
  <div class="align-item">Item 2</div>
  <div class="align-item">Item 3</div>
</div>
<h4>align-items: center</h4>
<div class="align-container align-center">
  <div class="align-item">Item 1</div>
  <div class="align-item">Item 2</div>
  <div class="align-item">Item 3</div>
</div>
\`\`\`

---

### 6. \`align-content\`

តម្រឹមបន្ទាត់របស់ Flex Items តាមបណ្តោយ **Cross Axis** នៅពេលដែលមានច្រើនបន្ទាត់ (requires \`flex-wrap: wrap\`) ។ នេះគ្រប់គ្រងការបែងចែកលំហទំនេររវាងបន្ទាត់នៃ Elements ។

* **\`stretch\`** (លំនាំដើម): បន្ទាត់លាតសន្ធឹងដើម្បីបំពេញ Container ។
* **\`flex-start\`**: បន្ទាត់ត្រូវបាន packed ទៅដើម Cross Axis ។
* **\`flex-end\`**: បន្ទាត់ត្រូវបាន packed ទៅចុង Cross Axis ។
* **\`center\`**: បន្ទាត់ត្រូវបានតម្រឹមកណ្តាល Cross Axis ។
* **\`space-between\`**: បន្ទាត់ត្រូវបានចែកចាយស្មើៗគ្នា ដោយបន្ទាត់ទីមួយនៅដើម និងបន្ទាត់ចុងក្រោយនៅចុង។
* **\`space-around\`**: បន្ទាត់ត្រូវបានចែកចាយស្មើៗគ្នាជាមួយនឹងលំហនៅជុំវិញពួកវា។

\`\`\`html
<style>
  .align-content-container {
    display: flex;
    flex-wrap: wrap; /* Required for align-content to work */
    height: 200px; /* Fixed height to see alignment */
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f5f5dc; /* Beige */
  }
  .align-content-item {
    width: 80px;
    height: 40px;
    background-color: #cd853f; /* Peru */
    border: 1px solid #8b4513; /* SaddleBrown */
    margin: 5px;
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 0.9em;
  }
  .content-stretch { align-content: stretch; }
  .content-center { align-content: center; }
  .content-between { align-content: space-between; }
</style>
<h4>align-content: center (with flex-wrap: wrap)</h4>
<div class="align-content-container content-center">
  <div class="align-content-item">1</div><div class="align-content-item">2</div><div class="align-content-item">3</div><div class="align-content-item">4</div><div class="align-content-item">5</div><div class="align-content-item">6</div>
</div>
<h4>align-content: space-between (with flex-wrap: wrap)</h4>
<div class="align-content-container content-between">
  <div class="align-content-item">1</div><div class="align-content-item">2</div><div class="align-content-item">3</div><div class="align-content-item">4</div><div class="align-content-item">5</div><div class="align-content-item">6</div>
</div>
\`\`\`

---

### 7. \`gap\` (Shorthand for \`row-gap\` and \`column-gap\`)

កំណត់គម្លាតរវាង Flex Items ។ នេះជា Property ថ្មីដែលងាយស្រួលជាងការប្រើ \`margin\` នៅលើ items ។

* **\`gap: 10px;\`**: កំណត់គម្លាត 10px ទាំងរវាងជួរដេក (rows) និងជួរឈរ (columns) ។
* **\`gap: 10px 20px;\`**: កំណត់ \`row-gap\` 10px និង \`column-gap\` 20px ។
* **\`row-gap\`**: កំណត់គម្លាតរវាងជួរដេក ។
* **\`column-gap\`**: កំណត់គម្លាតរវាងជួរឈរ ។

\`\`\`html
<style>
  .gap-container {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    width: 300px;
    background-color: #add8e6; /* LightBlue */
    gap: 15px; /* Applies 15px gap between items */
  }
  .gap-item {
    width: 80px;
    height: 40px;
    background-color: #6a5acd; /* SlateBlue */
    border: 1px solid #483d8b; /* DarkSlateBlue */
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 0.9em;
  }
</style>
<h4>Container with \`gap: 15px;\`</h4>
<div class="gap-container">
  <div class="gap-item">1</div>
  <div class="gap-item">2</div>
  <div class="gap-item">3</div>
  <div class="gap-item">4</div>
  <div class="gap-item">5</div>
</div>
\`\`\`

---

## Properties for the Flex Items (សម្រាប់ Flex ធាតុ)

Property ទាំងនេះត្រូវបានអនុវត្តទៅលើ Flex Items នីមួយៗ ដើម្បីគ្រប់គ្រងឥរិយាបថរបស់ពួកវា។

### 1. \`order\`

កំណត់លំដាប់លំដោយនៃ Flex Items ក្នុង Flex Container ។ លំនាំដើមគឺ \`0\` ។ Items ដែលមាន \`order\` ទាបជាងនឹងបង្ហាញមុន។

\`\`\`html
<style>
  .order-container {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fffacd; /* LemonChiffon */
  }
  .order-item {
    background-color: #ffa07a; /* LightSalmon */
    border: 1px solid #f08080; /* LightCoral */
    padding: 8px 12px;
    margin: 5px;
    color: white;
    font-weight: bold;
  }
  .order-item:nth-child(1) { order: 2; } /* Item 1 will be last */
  .order-item:nth-child(2) { order: 1; } /* Item 2 will be first */
  .order-item:nth-child(3) { order: 0; } /* Item 3 will be second (default) */
</style>
<h4>Flex Items with Custom Order</h4>
<div class="order-container">
  <div class="order-item">Original 1 (Order: 2)</div>
  <div class="order-item">Original 2 (Order: 1)</div>
  <div class="order-item">Original 3 (Order: 0)</div>
</div>
\`\`\`

---

### 2. \`flex-grow\`

កំណត់សមត្ថភាពរបស់ Flex Item ក្នុងការលូតលាស់ ប្រសិនបើមានលំហទំនេរនៅសល់។ ទទួលយកតម្លៃដែលមិនមែនជាអវិជ្ជមាន (number) ។ លំនាំដើមគឺ \`0\` (មិនលូតលាស់) ។

\`\`\`html
<style>
  .grow-container {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    width: 400px;
    background-color: #f5f5dc; /* Beige */
  }
  .grow-item {
    background-color: #a9a9a9; /* DarkGray */
    border: 1px solid #696969; /* DimGray */
    padding: 10px;
    margin: 5px;
    color: white;
    text-align: center;
    min-width: 50px;
  }
  .grow-item:nth-child(1) { flex-grow: 1; }
  .grow-item:nth-child(2) { flex-grow: 2; } /* Grows twice as much as item 1 */
  .grow-item:nth-child(3) { flex-grow: 0; } /* Does not grow */
</style>
<h4>Flex Items with \`flex-grow\`</h4>
<div class="grow-container">
  <div class="grow-item">Grow 1</div>
  <div class="grow-item">Grow 2 (2x)</div>
  <div class="grow-item">Grow 0</div>
</div>
\`\`\`

---

### 3. \`flex-shrink\`

កំណត់សមត្ថភាពរបស់ Flex Item ក្នុងការរួញ ប្រសិនបើមានលំហមិនគ្រប់គ្រាន់។ ទទួលយកតម្លៃដែលមិនមែនជាអវិជ្ជមាន (number) ។ លំនាំដើមគឺ \`1\` (អាចរួញ) ។

\`\`\`html
<style>
  .shrink-container {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    width: 200px; /* Small width to force shrinking */
    background-color: #ffe4e1; /* MistyRose */
  }
  .shrink-item {
    background-color: #cd5c5c; /* IndianRed */
    border: 1px solid #8b0000; /* DarkRed */
    padding: 10px;
    margin: 5px;
    color: white;
    text-align: center;
    flex-basis: 100px; /* Tries to be 100px */
  }
  .shrink-item:nth-child(1) { flex-shrink: 1; }
  .shrink-item:nth-child(2) { flex-shrink: 0; } /* Will not shrink */
  .shrink-item:nth-child(3) { flex-shrink: 2; } /* Shrinks twice as much as item 1 */
</style>
<h4>Flex Items with \`flex-shrink\`</h4>
<div class="shrink-container">
  <div class="shrink-item">Shrink 1</div>
  <div class="shrink-item">Shrink 0</div>
  <div class="shrink-item">Shrink 2</div>
</div>
\`\`\`

---

### 4. \`flex-basis\`

កំណត់ទំហំដំបូងរបស់ Flex Item មុនពេលលំហទំនេរត្រូវបានចែកចាយ។ អាចជា Length (px, em, %) ឬ Keywords (\`auto\`, \`content\`) ។ លំនាំដើមគឺ \`auto\` ។

\`\`\`html
<style>
  .basis-container {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    width: 400px;
    background-color: #f0f8ff; /* AliceBlue */
  }
  .basis-item {
    background-color: #6495ed; /* CornflowerBlue */
    border: 1px solid #4169e1; /* RoyalBlue */
    padding: 10px;
    margin: 5px;
    color: white;
    text-align: center;
  }
  .basis-item:nth-child(1) { flex-basis: 100px; }
  .basis-item:nth-child(2) { flex-basis: 200px; }
  .basis-item:nth-child(3) { flex-basis: 50px; }
</style>
<h4>Flex Items with \`flex-basis\`</h4>
<div class="basis-container">
  <div class="basis-item">Basis 100px</div>
  <div class="basis-item">Basis 200px</div>
  <div class="basis-item">Basis 50px</div>
</div>
\`\`\`

---

### 5. \`flex\` (Shorthand)

Property Shorthand សម្រាប់ \`flex-grow\`, \`flex-shrink\`, និង \`flex-basis\` ។

* **Syntax:** \`flex: <flex-grow> <flex-shrink> <flex-basis>;\`
* **Common values:**
    * **\`flex: auto;\`**: (\`1 1 auto\`) Item អាចលូតលាស់និងរួញ, យកទៅតាមទំហំ Content ។
    * **\`flex: none;\`**: (\`0 0 auto\`) Item មិនលូតលាស់ឬរួញ, យកទៅតាមទំហំ Content ។
    * **\`flex: 1;\`**: (\`1 1 0%\`) Item អាចលូតលាស់និងរួញ, ដោយ \`flex-basis\` ជា \`0%\` (ចែកចាយលំហស្មើៗគ្នា) ។

\`\`\`html
<style>
  .flex-shorthand-container {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    width: 400px;
    background-color: #e0e6e9; /* LightGrayishBlue */
  }
  .flex-shorthand-item {
    background-color: #6a8eab; /* CadetBlue */
    border: 1px solid #4a6a8a; /* Darker CadetBlue */
    padding: 10px;
    margin: 5px;
    color: white;
    text-align: center;
    line-height: 40px;
  }
  .flex-shorthand-item:nth-child(1) { flex: 1; } /* Grow/Shrink, initial size 0% */
  .flex-shorthand-item:nth-child(2) { flex: 2; } /* Grows twice as much */
  .flex-shorthand-item:nth-child(3) { flex: 0 0 100px; } /* Fixed 100px, no grow/shrink */
</style>
<h4>Flex Items with \`flex\` Shorthand</h4>
<div class="flex-shorthand-container">
  <div class="flex-shorthand-item">Flex: 1</div>
  <div class="flex-shorthand-item">Flex: 2</div>
  <div class="flex-shorthand-item">Flex: 0 0 100px</div>
</div>
\`\`\`

---

### 6. \`align-self\`

អនុញ្ញាតឱ្យកំណត់ការតម្រឹមសម្រាប់ Flex Item នីមួយៗតាមបណ្តោយ **Cross Axis** ដោយបដិសេធតម្លៃ \`align-items\` ដែលបានកំណត់នៅលើ Container ។

* ទទួលយកតម្លៃដូចគ្នានឹង \`align-items\` គឺ \`auto\` (លំនាំដើម), \`flex-start\`, \`flex-end\`, \`center\`, \`baseline\`, \`stretch\` ។

\`\`\`html
<style>
  .align-self-container {
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    height: 150px; /* Fixed height */
    background-color: #f0fdf0; /* Honeydew */
    align-items: flex-start; /* Default alignment for all items */
  }
  .align-self-item {
    background-color: #90ee90; /* LightGreen */
    border: 1px solid #3cb371; /* MediumSeaGreen */
    padding: 10px;
    margin: 5px;
    color: white;
    text-align: center;
    line-height: 40px;
  }
  .align-self-item:nth-child(1) { align-self: flex-start; } /* Overrides, but same as parent */
  .align-self-item:nth-child(2) { align-self: center; } /* Override to center */
  .align-self-item:nth-child(3) { align-self: flex-end; } /* Override to end */
</style>
<h4>Flex Items with \`align-self\` (Parent \`align-items: flex-start;\`)</h4>
<div class="align-self-container">
  <div class="align-self-item">Start</div>
  <div class="align-self-item">Center</div>
  <div class="align-self-item">End</div>
</div>
\`\`\`

---
> **គន្លឹះ:** Flexbox គឺជាឧបករណ៍ដ៏អស្ចារ្យសម្រាប់ការរៀបចំ Layout មួយវិមាត្រ។ សម្រាប់ការរៀបចំ Layout ដែលមានពីរវិមាត្រ (ជួរដេក និងជួរឈរក្នុងពេលតែមួយ) អ្នកគួរតែពិចារណាប្រើ **CSS Grid Layout** ។
`,
  examples: [
    `<h3>ឧទាហរណ៍ជាក់ស្តែង៖ Header Layout ដោយប្រើ Flexbox</h3>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f7fa;
    line-height: 1.6;
  }

  .header {
    display: flex; /* Makes the header a flex container */
    justify-content: space-between; /* Distribute space between logo and nav */
    align-items: center; /* Vertically center items */
    background-color: #2c3e50; /* Dark blue */
    padding: 15px 30px;
    color: white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  .logo {
    font-size: 1.8em;
    font-weight: bold;
    color: #3498db; /* Bright blue */
  }

  .nav-menu {
    display: flex; /* Makes the nav-menu a flex container for its links */
    list-style: none; /* Remove bullet points */
    margin: 0;
    padding: 0;
    gap: 25px; /* Space between navigation links */
  }

  .nav-menu li a {
    color: white;
    text-decoration: none;
    font-size: 1.1em;
    padding: 5px 10px;
    transition: color 0.3s ease, background-color 0.3s ease;
    border-radius: 5px;
  }

  .nav-menu li a:hover {
    color: #3498db;
    background-color: rgba(255,255,255,0.1);
  }

  .card-container {
    display: flex; /* Flex container for cards */
    flex-wrap: wrap; /* Allow cards to wrap to the next line */
    justify-content: center; /* Center cards horizontally */
    gap: 25px; /* Space between cards */
    padding: 40px 20px;
    max-width: 1200px;
    margin: 30px auto;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }

  .card {
    flex-basis: 280px; /* Base width for each card */
    flex-grow: 1; /* Allow cards to grow if space is available */
    max-width: 350px; /* Max width for each card */
    background-color: #ecf0f1; /* Light gray */
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    text-align: center;
    display: flex; /* Make card content a flex column */
    flex-direction: column;
    justify-content: space-between; /* Push title/content up, button down */
    min-height: 250px; /* Ensure cards have minimum height */
  }

  .card h3 {
    color: #2980b9; /* Blue */
    margin-top: 0;
    margin-bottom: 10px;
  }

  .card p {
    color: #555;
    font-size: 0.95em;
    flex-grow: 1; /* Allow paragraph to take up available space */
  }

  .card button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 15px;
    transition: background-color 0.3s ease;
  }

  .card button:hover {
    background-color: #2980b9;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .header {
      flex-direction: column; /* Stack header items vertically */
      padding: 15px 20px;
    }

    .nav-menu {
      margin-top: 15px;
      flex-direction: column; /* Stack nav links vertically */
      gap: 10px;
      align-items: center; /* Center nav links */
    }

    .card-container {
      padding: 20px 10px;
    }

    .card {
      flex-basis: 90%; /* On small screens, cards take up most width */
      max-width: none;
    }
  }
</style>

<header class="header">
  <div class="logo">MyWebsite</div>
  <nav>
    <ul class="nav-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<div class="card-container">
  <div class="card">
    <h3>Service One</h3>
    <p>A short description of our fantastic service number one. We aim for excellence in all we do.</p>
    <button>Learn More</button>
  </div>
  <div class="card">
    <h3>Service Two</h3>
    <p>This service provides innovative solutions for your business needs. Quality and efficiency guaranteed.</p>
    <button>Learn More</button>
  </div>
  <div class="card">
    <h3>Service Three</h3>
    <p>Dedicated support and cutting-edge technology to help you succeed. Your satisfaction is our priority.</p>
    <button>Learn More</button>
  </div>
  <div class="card">
    <h3>Service Four</h3>
    <p>Exploring new horizons with our fourth service. Designed to push boundaries and exceed expectations.</p>
    <button>Learn More</button>
  </div>
</div>
`
  ],
  quiz: [
    {
      question: 'តើ Property CSS មួយណាដែលត្រូវប្រើដើម្បីប្រែក្លាយ Element មួយទៅជា Flex Container?',
      options: [
        '`flex-display: true;`',
        '`display: flex;`',
        '`layout: flex;`',
        '`flex: container;`'
      ],
      correct: 1,
      explanation: 'ដើម្បីឱ្យ Element មួយក្លាយជា Flex Container អ្នកត្រូវកំណត់ Property `display` របស់វាទៅជា `flex` ឬ `inline-flex`។'
    },
    {
      question: 'តើ `flex-direction: column;` នឹងរៀបចំ Flex Items យ៉ាងដូចម្តេច?',
      options: [
        'ពីឆ្វេងទៅស្តាំ',
        'ពីស្តាំទៅឆ្វេង',
        'ពីលើទៅក្រោម',
        'ពីក្រោមទៅលើ'
      ],
      correct: 2,
      explanation: '`flex-direction: column;` កំណត់អ័ក្សសំខាន់ឱ្យរត់បញ្ឈរ ដូច្នេះ Flex Items ត្រូវបានរៀបចំពីលើទៅក្រោម។'
    },
    {
      question: 'តើ Property មួយណាដែលគ្រប់គ្រងរបៀបដែល Flex Items តម្រឹមតាមបណ្តោយ Main Axis?',
      options: [
        '`align-items`',
        '`flex-wrap`',
        '`justify-content`',
        '`align-content`'
      ],
      correct: 2,
      explanation: '`justify-content` ត្រូវបានប្រើដើម្បីតម្រឹម Flex Items តាមបណ្តោយ Main Axis ដោយគ្រប់គ្រងការបែងចែកលំហទំនេររវាងពួកវា។'
    },
    {
      question: 'ដើម្បីឱ្យ Flex Items រុំ (wrap) ទៅបន្ទាត់ថ្មី នៅពេលដែលមិនមានទំហំគ្រប់គ្រាន់ តើ Property មួយណាដែលអ្នកត្រូវកំណត់នៅលើ Flex Container?',
      options: [
        '`flex-flow: wrap;`',
        '`flex-wrap: wrap;`',
        '`wrap-items: true;`',
        '`overflow: wrap;`'
      ],
      correct: 1,
      explanation: 'Property `flex-wrap: wrap;` ត្រូវបានប្រើដើម្បីអនុញ្ញាតឱ្យ Flex Items រុំទៅបន្ទាត់ថ្មីនៅពេលដែលទំហំមិនគ្រប់គ្រាន់។'
    },
    {
      question: 'តើ `align-items: center;` នឹងធ្វើអ្វីចំពោះ Flex Items?',
      options: [
        'តម្រឹមពួកវាទៅកណ្តាលតាមបណ្តោយ Main Axis',
        'តម្រឹមពួកវាទៅកណ្តាលតាមបណ្តោយ Cross Axis',
        'ចែកចាយលំហស្មើៗគ្នាជុំវិញពួកវា',
        'ធ្វើឱ្យពួកវាលូតលាស់ដើម្បីបំពេញកម្ពស់របស់ Container'
      ],
      correct: 1,
      explanation: '`align-items: center;` តម្រឹម Flex Items ទៅកណ្តាលតាមបណ្តោយ Cross Axis ។'
    },
    {
      question: 'តើ Property `order` ត្រូវបានអនុវត្តទៅលើ Flex Container ឬ Flex Item?',
      options: [
        'Flex Container',
        'Flex Item',
        'ទាំងពីរ',
        'គ្មានមួយណាត្រឹមត្រូវ'
      ],
      correct: 1,
      explanation: 'Property `order` ត្រូវបានអនុវត្តទៅលើ Flex Item ដើម្បីផ្លាស់ប្តូរលំដាប់លំដោយនៃការបង្ហាញរបស់វា។'
    },
    {
      question: 'ប្រសិនបើ Flex Item មួយមាន `flex-grow: 2;` និង Flex Item ផ្សេងទៀតមាន `flex-grow: 1;` តើ Flex Item មួយណាដែលនឹងលូតលាស់ធំជាង ប្រសិនបើមានលំហទំនេរ?',
      options: [
        'Flex Item ដែលមាន `flex-grow: 1;`',
        'Flex Item ដែលមាន `flex-grow: 2;`',
        'ពួកវាទាំងពីរនឹងលូតលាស់ស្មើគ្នា',
        'ពួកវានឹងមិនលូតលាស់ទេ'
      ],
      correct: 1,
      explanation: 'Flex Item ដែលមាន `flex-grow: 2;` នឹងលូតលាស់ពីរដងច្រើនជាង Flex Item ដែលមាន `flex-grow: 1;` ។'
    },
    {
      question: 'តើ Property Shorthand មួយណាដែលរួមបញ្ចូល `flex-grow`, `flex-shrink`, និង `flex-basis`?',
      options: [
        '`flex-flow`',
        '`flex-item`',
        '`flex-sizing`',
        '`flex`'
      ],
      correct: 3,
      explanation: 'Property `flex` គឺជា Shorthand សម្រាប់ `flex-grow`, `flex-shrink`, និង `flex-basis` ។'
    },
    {
      question: 'តើ Property `gap` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង Flexbox?',
      options: [
        'ដើម្បីកំណត់ទំហំដំបូងនៃ Flex Item',
        'ដើម្បីតម្រឹម Flex Item នីមួយៗ',
        'ដើម្បីកំណត់គម្លាតរវាង Flex Items',
        'ដើម្បីរុំ Flex Items ទៅបន្ទាត់ថ្មី'
      ],
      correct: 2,
      explanation: 'Property `gap` (ឬ `row-gap`, `column-gap`) ត្រូវបានប្រើដើម្បីកំណត់គម្លាតរវាង Flex Items ។'
    },
    {
      question: 'តើ `align-content` ខុសពី `align-items` ត្រង់ណា?',
      options: [
        '`align-content` ដំណើរការលើ Main Axis ចំណែក `align-items` លើ Cross Axis ។',
        '`align-content` ដំណើរការនៅពេលដែលមានបន្ទាត់ Flex Items ច្រើន ចំណែក `align-items` ដំណើរការលើបន្ទាត់តែមួយ។',
        '`align-content` ត្រូវបានអនុវត្តលើ Flex Item ចំណែក `align-items` លើ Flex Container ។',
        '`align-content` គ្រប់គ្រងលំដាប់លំដោយ ចំណែក `align-items` គ្រប់គ្រងទំហំ។'
      ],
      correct: 1,
      explanation: '`align-content` ត្រូវបានប្រើដើម្បីតម្រឹមបន្ទាត់នៃ Flex Items នៅពេលដែលមានច្រើនបន្ទាត់ (requires `flex-wrap: wrap`) ចំណែក `align-items` ត្រូវបានប្រើដើម្បីតម្រឹម Flex Items តែមួយបន្ទាត់តាមបណ្តោយ Cross Axis ។'
    },
    {
      question: 'តើតម្លៃលំនាំដើមនៃ `flex-basis` គឺអ្វី?',
      options: [
        '`0`',
        '`auto`',
        '`100%`',
        '`content`'
      ],
      correct: 1,
      explanation: 'តម្លៃលំនាំដើមនៃ `flex-basis` គឺ `auto` ដែលមានន័យថាទំហំដំបូងត្រូវបានកំណត់ដោយទំហំ Content របស់ Item ឬ Property `width`/`height` ដែលបានកំណត់។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML និង CSS ពីរដាច់ដោយឡែកពីគ្នាដើម្បីបង្ហាញពី CSS Flexbox ។

1.  **HTML Structure (\`index.html\`):**
    * ត្រូវមាន \`<!DOCTYPE html>\`, \`<html>\`, \`<head>\`, និង \`<body>\` ។
    * ភ្ជាប់ទៅឯកសារ CSS ខាងក្រៅ (\`style.css\`) ក្នុង \`<head>\` ។
    * **Header:** \`<header class="header">\`
        * \`<h1>\` ជាមួយអត្ថបទ "Flexbox Layout Demo" ។
        * \`<nav>\` ជាមួយ \`<ul class="nav-links">\` ដែលមាន \`<li><a href="#">...</a></li>\` ចំនួន ៤ (Home, About, Services, Contact) ។
    * **Section 1: Basic Flex Direction & Justify Content:**
        * \`<h2>\` "Flex Direction & Justify Content" ។
        * \`<div class="flex-section">\` (Flex container)
            * \`<div class="flex-row justify-center">\` មាន items 3 (\`div.item\`) ។
            * \`<div class="flex-column align-center">\` មាន items 3 (\`div.item\`) ។
    * **Section 2: Flex Wrap & Gap:**
        * \`<h2>\` "Flex Wrap & Gap" ។
        * \`<div class="flex-wrap-container">\` មាន items 8 (\`div.wrap-item\`) ។
    * **Section 3: Flex Grow, Shrink & Order:**
        * \`<h2>\` "Flex Grow, Shrink & Order" ។
        * \`<div class="flex-grow-shrink-order-container">\`
            * \`<div class="flex-item-grow-shrink order-1">Item A (flex: 1)</div>\`
            * \`<div class="flex-item-grow-shrink order-3">Item B (flex: 0 0 120px)</div>\`
            * \`<div class="flex-item-grow-shrink order-2">Item C (flex: 2)</div>\`
            * \`<div class="flex-item-grow-shrink order-4">Item D (flex: none)</div>\`
    * **Section 4: Interactive Alignment:**
        * \`<h2>\` "Interactive Alignment" ។
        * \`<div class="interactive-align-container">\`
            * \`<div class="interactive-item item-1">Item 1</div>\`
            * \`<div class="interactive-item item-2">Item 2</div>\`
            * \`<div class="interactive-item item-3">Item 3</div>\`
        * **Hint:** Use JavaScript to change \`justify-content\` or \`align-items\` on the container when a button is clicked or a dropdown is selected. For simplicity, just add \`align-self\` to one of the items on hover.

2.  **CSS Styling (\`style.css\`):**

    * **Global Styles:**
        * \`body\`: \`font-family\`, \`margin\`, \`background-color\`, \`color\` ។
        * \`h1\`, \`h2\`: \`text-align\`, \`color\`, \`margin-top\` ។
        * \`h2\`: \`border-bottom\`, \`padding-bottom\`, \`margin-top\` ។

    * **Header Styles:**
        * \`.header\`: \`display: flex;\`, \`justify-content: space-between;\`, \`align-items: center;\`, \`background-color\`, \`padding\`, \`color\`, \`box-shadow\` ។
        * \`.nav-links\`: \`display: flex;\`, \`list-style: none;\`, \`margin\`, \`padding\`, \`gap\` ។
        * \`.nav-links a\`: \`text-decoration\`, \`color\`, \`padding\`, \`transition\`, \`hover effects\` ។

    * **Common Flex Item Styles:**
        * \`.item\`, \`.wrap-item\`, \`.flex-item-grow-shrink\`, \`.interactive-item\`: \`background-color\`, \`color\`, \`padding\`, \`margin\`, \`border\`, \`text-align\`, \`line-height\`, \`border-radius\`, \`box-shadow\` ។

    * **Section 1 Styles:**
        * \`.flex-section\`: \`display: flex;\`, \`flex-direction: column;\`, \`gap: 20px;\`, \`max-width\`, \`margin\`, \`padding\`, \`background-color\`, \`border-radius\`, \`box-shadow\` ។
        * \`.flex-row\`, \`.flex-column\`: \`display: flex;\`, \`min-height: 120px;\`, \`border\`, \`background-color\`, \`padding\`, \`border-radius\` ។
        * \`.flex-row.justify-center\`: \`justify-content: center;\` ។
        * \`.flex-column.align-center\`: \`flex-direction: column;\`, \`align-items: center;\` ។
        * \`.item\`: \`width: 80px;\`, \`height: 60px;\` ។

    * **Section 2 Styles:**
        * \`.flex-wrap-container\`: \`display: flex;\`, \`flex-wrap: wrap;\`, \`justify-content: space-around;\`, \`gap: 15px;\`, \`max-width\`, \`margin\`, \`padding\`, \`background-color\`, \`border-radius\`, \`box-shadow\` ។
        * \`.wrap-item\`: \`flex-basis: 100px;\`, \`height: 70px;\` 。

    * **Section 3 Styles:**
        * \`.flex-grow-shrink-order-container\`: \`display: flex;\`, \`max-width\`, \`margin\`, \`padding\`, \`background-color\`, \`border-radius\`, \`box-shadow\` ។
        * \`.flex-item-grow-shrink\`: \`height: 80px;\`, \`padding: 10px;\`, \`flex: 1;\` (default for these items) ។
        * \`.order-1\`: \`order: 1;\`, \`flex: 1;\` ។
        * \`.order-2\`: \`order: 2;\`, \`flex: 2;\` ។
        * \`.order-3\`: \`order: 3;\`, \`flex: 0 0 120px;\` ។
        * \`.order-4\`: \`order: 4;\`, \`flex: none;\` ។

    * **Section 4 Styles:**
        * \`.interactive-align-container\`: \`display: flex;\`, \`height: 200px;\`, \`align-items: flex-start;\`, \`justify-content: space-around;\`, \`border\`, \`background-color\`, \`max-width\`, \`margin\`, \`padding\`, \`border-radius\`, \`box-shadow\` ។
        * \`.interactive-item\`: \`width: 90px;\`, \`height: 70px;\`, \`transition: all 0.3s ease;\` ។
        * \`.interactive-item.item-2:hover\`: \`align-self: center;\` ។
        * \`.interactive-item.item-3:hover\`: \`align-self: flex-end;\` ។


**ការណែនាំ:**
* សង្កេតមើលរបៀបដែល Properties ផ្សេងៗគ្នាផ្លាស់ប្តូរ Layout របស់ Elements ។
* ប្រើ Browser's Developer Tools ដើម្បីពិសោធន៍ជាមួយតម្លៃ Property ផ្សេងៗគ្នា។
* ប្តូរទំហំ Browser ដើម្បីមើលពីរបៀបដែល Layout ប្រែប្រួល (Responsive) ។
    `,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Flexbox Lab</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Khmer&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

  <header class="header">
    <h1>Flexbox Layout Demo</h1>
    <nav>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>Flex Direction & Justify Content</h2>
      <div class="flex-section">
        <div class="flex-row-container">
          <p><code>flex-direction: row; justify-content: center;</code></p>
          <div class="flex-row justify-center">
            <div class="item">Item 1</div>
            <div class="item">Item 2</div>
            <div class="item">Item 3</div>
          </div>
        </div>

        <div class="flex-column-container">
          <p><code>flex-direction: column; align-items: center;</code></p>
          <div class="flex-column align-center">
            <div class="item">Item A</div>
            <div class="item">Item B</div>
            <div class="item">Item C</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>Flex Wrap & Gap</h2>
      <div class="flex-wrap-container">
        <div class="wrap-item">1</div>
        <div class="wrap-item">2</div>
        <div class="wrap-item">3</div>
        <div class="wrap-item">4</div>
        <div class="wrap-item">5</div>
        <div class="wrap-item">6</div>
        <div class="wrap-item">7</div>
        <div class="wrap-item">8</div>
      </div>
    </section>

    <section>
      <h2>Flex Grow, Shrink & Order</h2>
      <div class="flex-grow-shrink-order-container">
        <div class="flex-item-grow-shrink order-1">Item A (order:1, flex:1)</div>
        <div class="flex-item-grow-shrink order-3">Item B (order:3, flex:0 0 120px)</div>
        <div class="flex-item-grow-shrink order-2">Item C (order:2, flex:2)</div>
        <div class="flex-item-grow-shrink order-4">Item D (order:4, flex:none)</div>
      </div>
    </section>

    <section>
      <h2>Interactive Alignment (Hover to see \`align-self\`)</h2>
      <div class="interactive-align-container">
        <div class="interactive-item item-1">Item 1</div>
        <div class="interactive-item item-2">Item 2</div>
        <div class="interactive-item item-3">Item 3</div>
      </div>
    </section>
  </main>

</body>
</html>
`,
    css: `/* style.css */

/* Global Styles */
body {
  font-family: 'Roboto', 'Khmer', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f7f6; /* Light background */
  color: #333;
  line-height: 1.6;
}

h1, h2 {
  text-align: center;
  color: #2c3e50; /* Dark blue-gray */
  margin-top: 40px;
}

h2 {
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-top: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

section {
  padding: 20px;
  margin-bottom: 40px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

/* Header Styles */
.header {
  display: flex;
  justify-content: space-between; /* Space out logo and nav */
  align-items: center; /* Vertically center items */
  background-color: #2c3e50;
  padding: 15px 30px;
  color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  flex-wrap: wrap; /* Allow header to wrap on small screens */
  gap: 15px; /* Space between header elements if wrapped */
}

.header h1 {
  margin: 0;
  color: #3498db;
  font-size: 1.8em;
  text-align: left; /* Override center for h1 in header */
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 25px; /* Space between navigation links */
  flex-wrap: wrap; /* Allow nav links to wrap */
  justify-content: center;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-size: 1.1em;
  padding: 8px 15px;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
}

.nav-links li a:hover {
  color: #3498db;
  background-color: rgba(255,255,255,0.1);
}

/* Common Flex Item Styles */
.item, .wrap-item, .flex-item-grow-shrink, .interactive-item {
  background-color: #6a8eab; /* CadetBlue */
  color: white;
  padding: 10px;
  margin: 5px; /* Default margin for basic spacing */
  border: 1px solid #4a6a8a; /* Darker CadetBlue */
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Section 1: Basic Flex Direction & Justify Content */
.flex-section {
  display: flex;
  flex-direction: column; /* Stack row and column examples vertically */
  gap: 30px; /* Space between example containers */
  padding: 20px;
  background-color: #fcfcfc;
  border-radius: 8px;
  margin-top: 20px;
}

.flex-section p {
  text-align: center;
  font-size: 0.9em;
  color: #555;
  margin-bottom: 10px;
}

.flex-row-container, .flex-column-container {
  background-color: #e0f2f7; /* Light blue */
  border: 1px dashed #7dbcd4;
  padding: 15px;
  border-radius: 8px;
  box-shadow: inset 0 0 8px rgba(0,0,0,0.05);
}

.flex-row {
  display: flex;
  min-height: 100px;
  border: 2px solid #3498db;
  background-color: #d6eaf8;
  padding: 10px;
  border-radius: 5px;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
}

.flex-column {
  display: flex;
  flex-direction: column;
  min-height: 180px;
  border: 2px solid #2ecc71;
  background-color: #d4edda;
  padding: 10px;
  border-radius: 5px;
  align-items: center; /* Center items horizontally in column */
  justify-content: space-around; /* Distribute items vertically */
}

.item {
  width: 80px;
  height: 60px;
  line-height: 60px; /* Center text vertically */
  background-color: #3498db;
  border-color: #2980b9;
}

.flex-column .item {
  background-color: #2ecc71;
  border-color: #27ae60;
}

/* Section 2: Flex Wrap & Gap */
.flex-wrap-container {
  display: flex;
  flex-wrap: wrap; /* Enable wrapping */
  justify-content: space-around; /* Distribute items with space */
  gap: 15px; /* Space between items */
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.07);
}

.wrap-item {
  flex-basis: 100px; /* Base width */
  height: 70px;
  line-height: 70px;
  background-color: #9b59b6; /* Amethyst */
  border-color: #8e44ad; /* Darker Amethyst */
  margin: 0; /* Override default margin since gap is used */
}

/* Section 3: Flex Grow, Shrink & Order */
.flex-grow-shrink-order-container {
  display: flex;
  height: 150px; /* Fixed height to visualize stretching */
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background-color: #e8f6f8; /* Light blue-gray */
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.07);
}

.flex-item-grow-shrink {
  height: 80px;
  line-height: 80px;
  padding: 10px;
  margin: 5px; /* Small margin for visual separation */
  background-color: #f1c40f; /* Sunflower */
  border-color: #f39c12; /* Orange */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.order-1 {
  order: 1; /* Appears first */
  flex: 1; /* Grow and shrink based on available space */
}

.order-2 {
  order: 2; /* Appears second */
  flex: 2; /* Grows twice as much as item with flex: 1 */
}

.order-3 {
  order: 3; /* Appears third */
  flex: 0 0 120px; /* Fixed 120px width, no grow/shrink beyond that */
  background-color: #e67e22; /* Carrot */
  border-color: #d35400; /* Pumpkin */
}

.order-4 {
  order: 4; /* Appears fourth */
  flex: none; /* Equivalent to flex: 0 0 auto; - fixed size based on content/width, no grow/shrink */
  background-color: #c0392b; /* Pomegranate */
  border-color: #922b21; /* Darker Pomegranate */
  width: 90px; /* Example fixed width */
  line-height: normal; /* Allow text to wrap if it needs to */
  display: flex;
  align-items: center;
  justify-content: center;
}


/* Section 4: Interactive Alignment */
.interactive-align-container {
  display: flex;
  height: 200px; /* Fixed height to visualize vertical alignment */
  align-items: flex-start; /* Default alignment for items */
  justify-content: space-around; /* Distribute items horizontally */
  border: 2px solid #555;
  background-color: #ecf0f1; /* Clouds */
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.07);
}

.interactive-item {
  width: 90px;
  height: 70px;
  line-height: 70px;
  background-color: #1abc9c; /* Turquoise */
  border-color: #16a085; /* Darker Turquoise */
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

.interactive-item.item-1 {
  /* Default align-self is auto, which inherits from align-items (flex-start) */
}

.interactive-item.item-2:hover {
  align-self: center; /* Override parent's align-items */
  background-color: #f39c12;
  border-color: #e67e22;
  transform: scale(1.05); /* Slight scale effect */
}

.interactive-item.item-3:hover {
  align-self: flex-end; /* Override parent's align-items */
  background-color: #e74c3c;
  border-color: #c0392b;
  transform: scale(1.05); /* Slight scale effect */
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    text-align: center;
  }

  .nav-links {
    flex-direction: column;
    align-items: center; /* Center nav links when stacked */
    gap: 10px;
    margin-top: 15px;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.3em;
    margin-top: 30px;
    padding-bottom: 5px;
  }

  section {
    padding: 15px;
    margin-top: 20px;
  }

  .flex-section {
    gap: 20px;
  }

  .flex-row, .flex-column {
    flex-direction: column; /* Stack items vertically within these containers too */
    height: auto;
    min-height: unset;
    gap: 10px; /* Add gap for stacked items */
  }

  .item {
    width: 90%; /* Make items fill width */
    height: 50px;
    line-height: 50px;
  }

  .flex-wrap-container,
  .flex-grow-shrink-order-container,
  .interactive-align-container {
    flex-direction: column; /* Stack containers vertically */
    height: auto;
    margin: 20px auto;
  }

  .wrap-item,
  .flex-item-grow-shrink,
  .interactive-item {
    flex-basis: auto; /* Remove specific basis */
    width: 90%; /* Make items fill width */
    height: auto;
    margin: 8px auto; /* Center items and add vertical margin */
  }

  .flex-item-grow-shrink {
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
`
  }
};

export default CSSLesson6_2Content;