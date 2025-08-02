// src/components/lessons/css/CSSLesson3_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson3_2Content: LessonContent = {
  title: 'CSS Backgrounds (ផ្ទៃខាងក្រោយ)',
  objectives: [
    'ស្វែងយល់ពីរបៀបកំណត់ពណ៌ផ្ទៃខាងក្រោយ (background-color)',
    'រៀនពីរបៀបបន្ថែមរូបភាពផ្ទៃខាងក្រោយ (background-image)',
    'ដឹងពីរបៀបគ្រប់គ្រងការធ្វើម្តងទៀតនៃរូបភាពផ្ទៃខាងក្រោយ (background-repeat)',
    'ស្គាល់ពីរបៀបកំណត់ទីតាំងរូបភាពផ្ទៃខាងក្រោយ (background-position)',
    'យល់ដឹងពីរបៀបធ្វើឱ្យរូបភាពផ្ទៃខាងក្រោយជាប់នឹងទំព័រ (background-attachment)',
    'រៀនពីរបៀបកំណត់ទំហំរូបភាពផ្ទៃខាងក្រោយ (background-size)',
    'ស្គាល់ពីរបៀបប្រើ Shorthand property សម្រាប់ Backgrounds (background)',
    'អនុវត្តការប្រើប្រាស់ Background properties ផ្សេងៗគ្នា'
  ],
  content: `
# CSS Backgrounds (ផ្ទៃខាងក្រោយ) 🖼️

---

**CSS Background properties** ត្រូវបានប្រើដើម្បីកំណត់រចនាប័ទ្មផ្ទៃខាងក្រោយនៃ Elements នានា។ អ្នកអាចកំណត់ពណ៌ រូបភាព ការធ្វើម្តងទៀត ទីតាំង និងទំហំនៃផ្ទៃខាងក្រោយ។

---

## 1. background-color (ពណ៌ផ្ទៃខាងក្រោយ)

ទ្រព្យសម្បត្តិ \`background-color\` ត្រូវបានប្រើដើម្បីកំណត់ពណ៌ផ្ទៃខាងក្រោយនៃ Element មួយ។ អ្នកអាចប្រើ Keyword Colors, RGB, RGBA, Hexadecimal, HSL, ឬ HSLA ។

\`\`\`css
/* កំណត់ផ្ទៃខាងក្រោយជាខៀវស្រាល */
body {
  background-color: lightblue;
}

/* កំណត់ផ្ទៃខាងក្រោយ Div ជាពណ៌បៃតង */
div {
  background-color: #90EE90; /* lightgreen */
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div style="background-color: tomato; padding: 20px;">
  នេះមានផ្ទៃខាងក្រោយពណ៌ប៉េងប៉ោះ។
</div>
\`\`\`

---

## 2. background-image (រូបភាពផ្ទៃខាងក្រោយ)

ទ្រព្យសម្បត្តិ \`background-image\` ត្រូវបានប្រើដើម្បីកំណត់រូបភាពមួយ ឬច្រើនជារូបភាពផ្ទៃខាងក្រោយសម្រាប់ Element មួយ។ តាមលំនាំដើម រូបភាពនឹងត្រូវបានធ្វើម្តងទៀតដើម្បីគ្របដណ្តប់ Element ទាំងមូល។

\`\`\`css
/* កំណត់រូបភាព 'bg-pattern.png' ជារូបភាពផ្ទៃខាងក្រោយ */
body {
  background-image: url('images/bg-pattern.png');
}

/* កំណត់រូបភាព 'hero.jpg' សម្រាប់ Div ជាក់លាក់ */
.hero-section {
  background-image: url('/assets/hero.jpg');
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .my-div {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background-image: url('https://via.placeholder.com/50'); /* Placeholder image */
  }
</style>
<div class="my-div"></div>
\`\`\`
**ចំណាំ:** ត្រូវប្រាកដថាផ្លូវ (path) ទៅកាន់រូបភាពរបស់អ្នកត្រឹមត្រូវ។

---

## 3. background-repeat (ការធ្វើម្តងទៀតនៃផ្ទៃខាងក្រោយ)

ទ្រព្យសម្បត្តិ \`background-repeat\` ត្រូវបានប្រើដើម្បីកំណត់ថាតើរូបភាពផ្ទៃខាងក្រោយគួរត្រូវបានធ្វើម្តងទៀតឬអត់។
* \`repeat-x\`: ធ្វើម្តងទៀតផ្ដេក។
* \`repeat-y\`: ធ្វើម្តងទៀតបញ្ឈរ។
* \`repeat\`: ធ្វើម្តងទៀតទាំងផ្ដេក និងបញ្ឈរ (លំនាំដើម)។
* \`no-repeat\`: មិនធ្វើម្តងទៀតទេ។

\`\`\`css
/* រូបភាពផ្ទៃខាងក្រោយមិនធ្វើម្តងទៀតទេ */
.header {
  background-image: url('logo.png');
  background-repeat: no-repeat;
}

/* រូបភាពផ្ទៃខាងក្រោយធ្វើម្តងទៀតតាមអ័ក្ស X */
.pattern-x {
  background-image: url('tile.png');
  background-repeat: repeat-x;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .no-repeat-bg {
    width: 300px;
    height: 100px;
    border: 1px solid #ccc;
    background-image: url('https://via.placeholder.com/50'); /* Placeholder image */
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
<div class="no-repeat-bg"></div>
\`\`\`

---

## 4. background-position (ទីតាំងផ្ទៃខាងក្រោយ)

ទ្រព្យសម្បត្តិ \`background-position\` ត្រូវបានប្រើដើម្បីកំណត់ទីតាំងចាប់ផ្តើមនៃរូបភាពផ្ទៃខាងក្រោយ។
អ្នកអាចប្រើ Keyword (ឧទាហរណ៍: \`top\`, \`bottom\`, \`left\`, \`right\`, \`center\`) ឬតម្លៃជាភាគរយ (\`%\`) ឬជា pixel (\`px\`)។

\`\`\`css
/* រូបភាពនៅកណ្តាល */
.center-bg {
  background-image: url('icon.png');
  background-repeat: no-repeat;
  background-position: center center; /* ឬ center */
}

/* រូបភាពនៅខាងស្តាំខាងក្រោម */
.bottom-right-bg {
  background-image: url('watermark.png');
  background-repeat: no-repeat;
  background-position: right bottom;
}

/* ទីតាំងជាក់លាក់ (x y) */
.custom-pos-bg {
  background-image: url('dot.png');
  background-repeat: no-repeat;
  background-position: 20px 30px; /* 20px ពីឆ្វេង, 30px ពីលើ */
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .pos-bg {
    width: 200px;
    height: 100px;
    border: 1px solid #ccc;
    background-image: url('https://via.placeholder.com/50'); /* Placeholder image */
    background-repeat: no-repeat;
    background-position: top right;
  }
</style>
<div class="pos-bg"></div>
\`\`\`

---

## 5. background-attachment (ការភ្ជាប់ផ្ទៃខាងក្រោយ)

ទ្រព្យសម្បត្តិ \`background-attachment\` កំណត់ថាតើរូបភាពផ្ទៃខាងក្រោយគួររំកិលជាមួយមាតិកា ឬស្ថិតនៅទីតាំងថេរ។
* \`scroll\`: រូបភាពរំកិលជាមួយមាតិកា (លំនាំដើម)។
* \`fixed\`: រូបភាពនៅតែស្ថិតនៅទីតាំងដដែល ទោះបីមាតិការំកិលក៏ដោយ។
* \`local\`: រូបភាពរំកិលជាមួយ Element ខ្លួនវា (នៅខាងក្នុង Element)។

\`\`\`css
/* រូបភាពផ្ទៃខាងក្រោយជាប់នឹងទំព័រ */
body {
  background-image: url('galaxy.jpg');
  background-repeat: no-repeat;
  background-size: cover; /* គ្របដណ្តប់ពេញ */
  background-attachment: fixed;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .fixed-bg-section {
    height: 300px; /* Make it scrollable */
    overflow: auto;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    background-image: url('https://via.placeholder.com/150/0000FF/FFFFFF?text=Fixed'); /* Blue placeholder */
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed; /* This makes it fixed relative to viewport */
  }
  .scrollable-content {
    height: 500px; /* More content than section height */
    padding: 20px;
    background-color: rgba(255,255,255,0.8); /* Semi-transparent white to see background */
  }
</style>
<div class="fixed-bg-section">
  <div class="scrollable-content">
    <p>សូមរំកិលចុះក្រោមដើម្បីមើលពីរបៀបដែលរូបភាពផ្ទៃខាងក្រោយត្រូវបានជួសជុល។</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>
\`\`\`

---

## 6. background-size (ទំហំផ្ទៃខាងក្រោយ)

ទ្រព្យសម្បត្តិ \`background-size\` កំណត់ទំហំនៃរូបភាពផ្ទៃខាងក្រោយ។
* \`auto\`: ទំហំដើម (លំនាំដើម)។
* \`cover\`: រូបភាពនឹងលាតសន្ធឹងដើម្បីគ្របដណ្តប់តំបន់ Element ទាំងមូល ដោយអាចកាត់ផ្នែកខ្លះ។
* \`contain\`: រូបភាពនឹងមាត្រដ្ឋានដើម្បីធានាថាវាទាំងមូលអាចមើលឃើញនៅក្នុង Element ដោយមិនមានការកាត់ត។
* \`length\`: កំណត់ទំហំជាក់លាក់ (ឧទាហរណ៍: \`200px 100px\`)។
* \`percentage\`: កំណត់ទំហំជាភាគរយនៃ Element ។

\`\`\`css
/* គ្របដណ្តប់ពេញ Element */
.full-bg {
  background-image: url('large-image.jpg');
  background-size: cover;
  background-position: center;
}

/* រូបភាពនៅខាងក្នុង Element ទាំងមូល */
.contained-bg {
  background-image: url('small-icon.png');
  background-size: contain;
  background-repeat: no-repeat;
}

/* ទំហំជាក់លាក់ */
.fixed-size-bg {
  background-image: url('pattern.png');
  background-size: 100px 50px; /* width height */
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .size-div {
    width: 300px;
    height: 150px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    background-image: url('https://via.placeholder.com/80/FF0000/FFFFFF?text=Image'); /* Small red placeholder */
    background-repeat: no-repeat;
    background-position: center;
  }
  .size-cover { background-size: cover; }
  .size-contain { background-size: contain; }
</style>
<div class="size-div size-cover">
  <p>Background-size: cover</p>
</div>
<div class="size-div size-contain">
  <p>Background-size: contain</p>
</div>
\`\`\`

---

## 7. Shorthand Property: background

ទ្រព្យសម្បត្តិ \`background\` គឺជា Shorthand property ដែលអនុញ្ញាតឱ្យអ្នកកំណត់ Background properties ទាំងអស់ក្នុងពេលតែមួយ។ លំដាប់នៃតម្លៃជាធម្មតា៖
\`background: [color] [image] [repeat] [attachment] [position] / [size];\`
**ចំណាំ:** \`size\` ត្រូវតែដាក់បន្ទាប់ពី \`position\` ដោយមានសញ្ញា \`/\` ខណ្ឌ។

\`\`\`css
/* ឧទាហរណ៍ Shorthand */
.my-element {
  background: red url('bg.jpg') no-repeat center fixed / cover;
}

/* ឧទាហរណ៍សាមញ្ញជាង */
.another-element {
  background: #f0f8ff url('pattern.png') repeat-x top;
}
\`\`\`

### ឧទាហ្ហរណ៍៖
\`\`\`html
<style>
  .shorthand-bg {
    width: 300px;
    height: 150px;
    border: 2px solid darkblue;
    background: linear-gradient(to right, #e66465, #9198e5) url('https://via.placeholder.com/30/00FF00/FFFFFF?text=A') no-repeat center fixed / 50px 50px;
    color: white;
    text-align: center;
    padding-top: 50px;
  }
</style>
<div class="shorthand-bg">
  <p>Shorthand Background Example</p>
</div>
\`\`\`

---
> **គន្លឹះ:** ការប្រើប្រាស់ Background properties យ៉ាងស្ទាត់ជំនាញអាចផ្លាស់ប្តូររូបរាង Element របស់អ្នកយ៉ាងខ្លាំង។ Shorthand property គឺមានប្រសិទ្ធភាពសម្រាប់ការសរសេរកូដឱ្យខ្លី ប៉ុន្តែត្រូវប្រាកដថាអ្នកយល់ពីតម្លៃនីមួយៗ។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Backgrounds</h3>
<style>
body { font-family: Arial, sans-serif; padding: 20px; background-color: #f8f8f8; }
.box {
  margin-bottom: 25px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* background-color */
.bg-color-example {
  background-color: #e0f7fa; /* Light cyan */
}

/* background-image and background-repeat */
.bg-image-repeat-example {
  background-image: url('https://via.placeholder.com/20/FF5733/FFFFFF?text=X'); /* Small red X */
  background-repeat: repeat-x;
  background-position: top left;
}

/* background-position */
.bg-position-example {
  background-image: url('https://via.placeholder.com/70/33FF57/FFFFFF?text=Icon'); /* Green icon */
  background-repeat: no-repeat;
  background-position: bottom right;
}

/* background-attachment: fixed */
.bg-attachment-fixed-example {
  height: 250px;
  overflow: auto; /* Make content scrollable */
  background-image: url('https://via.placeholder.com/300/5733FF/FFFFFF?text=FixedBG'); /* Blue fixed bg */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed; /* Key property */
  color: white;
  text-shadow: 1px 1px 2px black;
}

/* background-size: cover */
.bg-size-cover-example {
  background-image: url('https://via.placeholder.com/400x200/FF33A0/FFFFFF?text=Cover'); /* Pink landscape */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  text-shadow: 1px 1px 2px black;
}

/* Shorthand background */
.bg-shorthand-example {
  background: linear-gradient(to bottom, #fafa6e, #92c47c), url('https://via.placeholder.com/40/33A0FF/FFFFFF?text=S') no-repeat center / 50px 50px;
  color: #333;
}
</style>

<div class="box bg-color-example">
  <h3>background-color</h3>
  <p>នេះជាឧទាហរណ៍នៃផ្ទៃខាងក្រោយពណ៌ \`light cyan\`。</p>
</div>

<div class="box bg-image-repeat-example">
  <h3>background-image & background-repeat</h3>
  <p>រូបភាពត្រូវបានធ្វើម្តងទៀតតាមអ័ក្ស X។</p>
</div>

<div class="box bg-position-example">
  <h3>background-position</h3>
  <p>រូបភាពផ្ទៃខាងក្រោយស្ថិតនៅបាតស្តាំ។</p>
</div>

<div class="box bg-attachment-fixed-example">
  <p>សូមរំកិលចុះក្រោមដើម្បីមើលរូបភាពផ្ទៃខាងក្រោយជាប់ (fixed)។</p>
  <p style="height: 150px;"></p> <p>បន្តរំកិល...</p>
</div>

<div class="box bg-size-cover-example">
  <h3>background-size: cover</h3>
  <p>រូបភាពគ្របដណ្តប់ពេញ Element ។</p>
</div>

<div class="box bg-shorthand-example">
  <h3>Shorthand Background</h3>
  <p>ទ្រព្យសម្បត្តិ Background ត្រូវបានកំណត់ក្នុងបន្ទាត់តែមួយ។</p>
</div>
`
  ],
  quiz: [
    {
      question: 'តើទ្រព្យសម្បត្តិ CSS មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ពណ៌ផ្ទៃខាងក្រោយនៃ Element មួយ?',
      options: ['`color`', '`font-color`', '`background-color`', '`image-background`'],
      correct: 2,
      explanation: 'ទ្រព្យសម្បត្តិ `background-color` ត្រូវបានប្រើដើម្បីកំណត់ពណ៌ផ្ទៃខាងក្រោយ។'
    },
    {
      question: 'តើ `background-repeat: no-repeat;` មានន័យដូចម្តេច?',
      options: [
        'រូបភាពផ្ទៃខាងក្រោយនឹងធ្វើម្តងទៀតទាំងផ្ដេក និងបញ្ឈរ',
        'រូបភាពផ្ទៃខាងក្រោយនឹងមិនធ្វើម្តងទៀតទេ',
        'រូបភាពផ្ទៃខាងក្រោយនឹងធ្វើម្តងទៀតតែផ្ដេក',
        'រូបភាពផ្ទៃខាងក្រោយនឹងធ្វើម្តងទៀតតែបញ្ឈរ'
      ],
      correct: 1,
      explanation: '`background-repeat: no-repeat;` មានន័យថា រូបភាពផ្ទៃខាងក្រោយនឹងបង្ហាញតែមួយដងប៉ុណ្ណោះ។'
    },
    {
      question: 'តើទ្រព្យសម្បត្តិ `background-attachment: fixed;` ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យរូបភាពផ្ទៃខាងក្រោយរំកិលជាមួយមាតិកា',
        'ធ្វើឱ្យរូបភាពផ្ទៃខាងក្រោយនៅតែស្ថិតនៅទីតាំងដដែល ទោះបីមាតិការំកិលក៏ដោយ',
        'ធ្វើឱ្យរូបភាពផ្ទៃខាងក្រោយធ្វើម្តងទៀតតាមអ័ក្ស X',
        'កំណត់ទំហំរូបភាពផ្ទៃខាងក្រោយឱ្យគ្របដណ្តប់ពេញ Element'
      ],
      correct: 1,
      explanation: '`background-attachment: fixed;` ធ្វើឱ្យរូបភាពផ្ទៃខាងក្រោយនៅតែស្ថិតនៅទីតាំងដដែល ទោះបីមាតិកានៅលើទំព័ររំកិលក៏ដោយ។'
    },
    {
      question: 'តើមួយណាជាតម្លៃត្រឹមត្រូវសម្រាប់ `background-size` ដើម្បីធានាថា Element ត្រូវបានគ្របដណ្តប់ពេញដោយរូបភាព ដោយអាចកាត់ផ្នែកខ្លះ?',
      options: ['`contain`', '`auto`', '`cover`', '`100%`'],
      correct: 2,
      explanation: '`background-size: cover;` ធ្វើឱ្យរូបភាពលាតសន្ធឹងដើម្បីគ្របដណ្តប់ Element ទាំងមូល ដោយអាចកាត់ផ្នែកខ្លះ។'
    },
    {
      question: 'តើទ្រព្យសម្បត្តិ `background` គឺជាអ្វី?',
      options: [
        'ទ្រព្យសម្បត្តិសម្រាប់កំណត់តែពណ៌ផ្ទៃខាងក្រោយប៉ុណ្ណោះ',
        'ទ្រព្យសម្បត្តិសម្រាប់កំណត់តែរូបភាពផ្ទៃខាងក្រោយប៉ុណ្ណោះ',
        'Shorthand property សម្រាប់កំណត់ Background properties ទាំងអស់ក្នុងពេលតែមួយ',
        'ទ្រព្យសម្បត្តិសម្រាប់កំណត់ទីតាំងផ្ទៃខាងក្រោយប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: '`background` គឺជា Shorthand property ដែលអនុញ្ញាតឱ្យអ្នកកំណត់ Background properties ជាច្រើនក្នុងពេលតែមួយ។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យរូបភាពផ្ទៃខាងក្រោយបង្ហាញតែនៅកណ្តាល Element ដោយមិនធ្វើម្តងទៀត តើអ្នកគួរប្រើទ្រព្យសម្បត្តិអ្វីខ្លះ?',
      options: [
        '`background-image`, `background-repeat`, `background-position`',
        '`background-color`, `background-size`',
        '`background-attachment`, `background-color`',
        '`background-image`, `background-size`'
      ],
      correct: 0,
      explanation: 'អ្នកត្រូវការ `background-image` ដើម្បីកំណត់រូបភាព, `background-repeat: no-repeat;` ដើម្បីការពារការធ្វើម្តងទៀត, និង `background-position: center;` ដើម្បីដាក់ទីតាំងនៅកណ្តាល។'
    },
    {
      question: 'តើលំដាប់នៃតម្លៃក្នុង Shorthand property `background` មួយណាដែលត្រឹមត្រូវ?',
      options: [
        '`background: [size] [position] [color] [image] [repeat] [attachment];`',
        '`background: [color] [image] [repeat] [attachment] [position] / [size];`',
        '`background: [image] [color] [size] [position] [repeat] [attachment];`',
        '`background: [repeat] [position] [size] [color] [image] [attachment];`'
      ],
      correct: 1,
      explanation: 'លំដាប់ត្រឹមត្រូវគឺ `background: [color] [image] [repeat] [attachment] [position] / [size];`។'
    },
    {
      question: 'តើ `background-size: contain;` ធ្វើអ្វី?',
      options: [
        'ពង្រីករូបភាពដើម្បីបំពេញ Element ដោយកាត់ផ្នែកខ្លះ',
        'បង្រួមរូបភាពដើម្បីឱ្យវាសមទាំងស្រុងនៅក្នុង Element ដោយមិនកាត់ផ្នែកណាមួយ',
        'កំណត់ទំហំរូបភាពទៅជាទំហំដើមរបស់វា',
        'ដាក់រូបភាពនៅកណ្តាល Element'
      ],
      correct: 1,
      explanation: '`background-size: contain;` ធ្វើឱ្យរូបភាពមាត្រដ្ឋានដើម្បីធានាថាវាទាំងមូលអាចមើលឃើញនៅក្នុង Element ដោយមិនមានការកាត់ត។'
    },
    {
      question: 'តើទ្រព្យសម្បត្តិ CSS មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ទីតាំងចាប់ផ្តើមនៃរូបភាពផ្ទៃខាងក្រោយ?',
      options: [
        '`background-attachment`',
        '`background-repeat`',
        '`background-position`',
        '`background-image`'
      ],
      correct: 2,
      explanation: '`background-position` ត្រូវបានប្រើដើម្បីកំណត់ទីតាំងចាប់ផ្តើមនៃរូបភាពផ្ទៃខាងក្រោយ។'
    },
    {
      question: 'តើ `background-repeat: repeat-y;` មានន័យដូចម្តេច?',
      options: [
        'រូបភាពផ្ទៃខាងក្រោយនឹងធ្វើម្តងទៀតតាមអ័ក្ស X ប៉ុណ្ណោះ',
        'រូបភាពផ្ទៃខាងក្រោយនឹងធ្វើម្តងទៀតតាមអ័ក្ស Y ប៉ុណ្ណោះ',
        'រូបភាពផ្ទៃខាងក្រោយនឹងមិនធ្វើម្តងទៀតទេ',
        'រូបភាពផ្ទៃខាងក្រោយនឹងធ្វើម្តងទៀតទាំងផ្ដេក និងបញ្ឈរ'
      ],
      correct: 1,
      explanation: '`background-repeat: repeat-y;` ធ្វើឱ្យរូបភាពផ្ទៃខាងក្រោយធ្វើម្តងទៀតតែបញ្ឈរ (តាមអ័ក្ស Y)។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
* \`<body>\` ។
* \`<div>\` ចំនួន ៣ ដោយមាន Paragraph នៅក្នុងនោះ។
* \`<h2>\` មួយ។

សូមប្រើ **Internal CSS** និង Background properties ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  កំណត់ពណ៌ផ្ទៃខាងក្រោយ \`body\` ជា **ពណ៌ខៀវស្រាល (aliceblue)** ។
2.  កំណត់ \`div\` ទីមួយឱ្យមានរូបភាពផ្ទៃខាងក្រោយ \`https://via.placeholder.com/50/FF0000/FFFFFF?text=A\` (រូបតូចក្រហម) ដែល **មិនធ្វើម្តងទៀត** ហើយដាក់ទីតាំងនៅ **កណ្តាលខាងលើ** ។
3.  កំណត់ \`div\` ទីពីរឱ្យមានរូបភាពផ្ទៃខាងក្រោយ \`https://via.placeholder.com/300x150/00FF00/FFFFFF?text=BG\` (រូបភាពបៃតង) ដែលមាន \`background-size: cover;\` និង \`background-position: center;\` ។
4.  កំណត់ \`div\` ទីបីឱ្យមានរូបភាពផ្ទៃខាងក្រោយ \`https://via.placeholder.com/400x400/0000FF/FFFFFF?text=Fixed\` (រូបភាពខៀវ) ដែលមាន \`background-attachment: fixed;\` ។ ត្រូវប្រាកដថា Div នេះមានកម្ពស់គ្រប់គ្រាន់ (\`height: 250px;\`) និង \`overflow: auto;\` ដើម្បីឱ្យអ្នកអាចរំកិលមាតិកាខាងក្នុងបាន។
5.  កំណត់ \`h2\` ឱ្យមានផ្ទៃខាងក្រោយជា **linear-gradient** ពី **#add8e6 (LightBlue)** ទៅ **#87ceeb (SkyBlue)** រួមជាមួយរូបភាព \`https://via.placeholder.com/20/FFD700/000000?text=⭐\` (ផ្កាយតូច) ដែល **ធ្វើម្តងទៀតតាមអ័ក្ស Y** ដោយប្រើ **Shorthand background property** ។

`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Backgrounds Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      margin: 0;
      background-color: aliceblue; /* 1. Background color for body */
    }

    div {
      margin-bottom: 20px;
      padding: 15px;
      border: 1px solid #ced4da;
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      min-height: 80px; /* Ensures divs have some height */
    }

    /* 2. Div 1: no-repeat, top center */
    div:nth-child(1) {
      background-image: url('https://via.placeholder.com/50/FF0000/FFFFFF?text=A');
      background-repeat: no-repeat;
      background-position: top center;
    }

    /* 3. Div 2: cover, center */
    div:nth-child(2) {
      background-image: url('https://via.placeholder.com/300x150/00FF00/FFFFFF?text=BG');
      background-size: cover;
      background-position: center;
      color: white; /* Make text visible over green */
      text-shadow: 1px 1px 2px black;
    }

    /* 4. Div 3: fixed attachment */
    div:nth-child(3) {
      height: 250px; /* Required for fixed attachment effect to be noticeable */
      overflow: auto; /* Allows content inside to scroll */
      background-image: url('https://via.placeholder.com/400x400/0000FF/FFFFFF?text=Fixed');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover; /* Cover for better fixed effect */
      background-attachment: fixed; /* Key property for fixed background */
      color: white; /* Make text visible over blue */
      text-shadow: 1px 1px 2px black;
    }
    
    /* Optional: Add content to the fixed div to enable scrolling */
    div:nth-child(3) p:first-child { margin-top: 150px; } /* Push content down for fixed effect */
    div:nth-child(3) p:last-child { margin-bottom: 150px; } /* Push content up */

    /* 5. H2 with shorthand background */
    h2 {
      background: linear-gradient(to right, #add8e6, #87ceeb), url('https://via.placeholder.com/20/FFD700/000000?text=⭐') repeat-y right center;
      padding: 10px;
      border-radius: 5px;
      color: #333;
      text-align: center;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div>
    <p>ផ្ទៃខាងក្រោយ Div ទីមួយ (រូបភាពតូចមិនធ្វើម្តងទៀតនៅកណ្តាលខាងលើ)។</p>
  </div>

  <div>
    <p>ផ្ទៃខាងក្រោយ Div ទីពីរ (រូបភាពបៃតងគ្របដណ្តប់ពេញ)។</p>
  </div>

  <div>
    <p>សូមរំកិលចុះក្រោមនៅក្នុង Div នេះ ដើម្បីមើលរូបភាពផ្ទៃខាងក្រោយជាប់ (fixed)។</p>
    <p style="height: 150px;">មាតិកាបន្ថែម...</p>
    <p>បន្តរំកិល...</p>
    <p style="height: 150px;">មាតិកាបន្ថែមទៀត...</p>
  </div>

  <h2>ចំណងជើងដែលមានផ្ទៃខាងក្រោយ Gradient និងរូបភាព។</h2>
</body>
</html>`
  }
};

export default CSSLesson3_2Content;