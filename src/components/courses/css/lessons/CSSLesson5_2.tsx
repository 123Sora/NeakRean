// src/components/lessons/css/CSSLesson5_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson5_1Content: LessonContent = {
  title: 'Responsive Design (ការរចនាឆ្លើយតប)',
  objectives: [
    'យល់ដឹងពីគោលគំនិត និងសារៈសំខាន់នៃ Responsive Design',
    'រៀនពីរបៀបប្រើ Viewport Meta Tag',
    'ស្គាល់ពីរបៀបប្រើ Media Queries ដើម្បីអនុវត្តរចនាបថផ្សេងៗគ្នានៅលើទំហំអេក្រង់ផ្សេងៗគ្នា',
    'យល់ដឹងពីគោលការណ៍ "Mobile-First" ក្នុងការអភិវឌ្ឍន៍ Responsive Design',
    'រៀនពីរបៀបប្រើ Flexible Grids (Flexbox/Grid) និង Fluid Images ដើម្បីបង្កើត Layout ដែលអាចបត់បែនបាន',
    'អនុវត្ត Responsive Design សម្រាប់ Layout គេហទំព័រ'
  ],
  content: `
# Responsive Design (ការរចនាឆ្លើយតប) 📱💻🖥️

---

**Responsive Design** គឺជាវិធីសាស្រ្តក្នុងការអភិវឌ្ឍន៍គេហទំព័រដែលធ្វើឱ្យប្លង់ និងមាតិការបស់គេហទំព័រផ្លាស់ប្តូរ និងសម្របខ្លួនទៅតាមទំហំអេក្រង់ (Viewport) និងលក្ខណៈសម្បត្តិផ្សេងៗនៃឧបករណ៍ដែលកំពុងប្រើប្រាស់។ គោលដៅគឺផ្តល់បទពិសោធន៍អ្នកប្រើប្រាស់ល្អបំផុតមិនថាពួកគេកំពុងប្រើទូរស័ព្ទ កុំព្យូទ័រ Tablet ឬកុំព្យូទ័រ Desktop នោះទេ។

---

## 1. Viewport Meta Tag

ដើម្បីឱ្យគេហទំព័ររបស់អ្នកមានភាពឆ្លើយតបត្រឹមត្រូវ អ្នកត្រូវបញ្ចូល **Viewport Meta Tag** នៅក្នុងផ្នែក \`<head>\` នៃឯកសារ HTML របស់អ្នក។ Tag នេះប្រាប់ Browser ពីរបៀបគ្រប់គ្រងវិមាត្រ និងការធ្វើមាត្រដ្ឋានរបស់ទំព័រ។

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

* **\`width=device-width\`**: កំណត់ទទឹងរបស់ទំព័រឱ្យត្រូវនឹងទទឹងអេក្រង់របស់ឧបករណ៍ (ជា pixels) ។
* **\`initial-scale=1.0\`**: កំណត់កម្រិតពង្រីកដំបូងនៅពេលទំព័រត្រូវបានផ្ទុកដំបូង។

---

## 2. Media Queries (សំណួរមេឌៀ)

**Media Queries** គឺជាបេះដូងនៃ Responsive Design ។ ពួកវាអនុញ្ញាតឱ្យអ្នកអនុវត្តរចនាបថ CSS ជាក់លាក់ដោយផ្អែកលើលក្ខខណ្ឌ (ដូចជាទទឹងអេក្រង់ កម្ពស់ របៀបទិស (orientation) ឬប្រភេទឧបករណ៍)។

### Syntax របស់ Media Query:

\`\`\`css
@media screen and (min-width: 600px) {
  /* CSS rules apply when screen width is at least 600px */
  body {
    background-color: lightblue;
  }
}

@media screen and (max-width: 768px) {
  /* CSS rules apply when screen width is at most 768px */
  .container {
    flex-direction: column;
  }
}

@media (min-width: 480px) and (max-width: 768px) {
  /* CSS rules apply between 480px and 768px (inclusive) */
  .card {
    padding: 10px;
  }
}
\`\`\`

**Breakpoints (ចំណុចបំបែក):** គឺជាចំណុចដែល Layout របស់អ្នកផ្លាស់ប្តូរដើម្បីសម្របតាមទំហំអេក្រង់។ មិនមានស្តង់ដារកំណត់សម្រាប់ Breakpoints ទេ វាអាស្រ័យលើមាតិកា និងការរចនារបស់អ្នក។ Breakpoints ទូទៅរួមមាន:

* **Small devices (ទូរស័ព្ទ):** រហូតដល់ 576px
* **Medium devices (Tablets):** 576px ដល់ 768px
* **Large devices (Laptops/Desktops):** 768px ដល់ 992px
* **Extra large devices (Large Desktops):** 992px និងខ្ពស់ជាងនេះ

### ឧទាហរណ៍៖
\`\`\`html
<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
    transition: background-color 0.5s ease; /* For smooth color change */
  }
  .mq-box {
    width: 90%;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 2px solid #3498db;
    background-color: #ecf0f1;
    border-radius: 8px;
    font-size: 1.2em;
    color: #333;
    transition: all 0.5s ease;
  }
  .mq-box::before {
    content: "Default Style (Large Screens)";
    font-weight: bold;
    color: #2c3e50;
  }

  /* Media Queries */
  /* For screens smaller than 768px (e.g., Tablets and Phones) */
  @media screen and (max-width: 768px) {
    body {
      background-color: #d4edda; /* Light Green */
    }
    .mq-box {
      border-color: #2ecc71;
      background-color: #e6ffe6;
      font-size: 1em;
    }
    .mq-box::before {
      content: "Tablet / Mobile Style (Max 768px)";
      color: #1a5e2f;
    }
  }

  /* For screens smaller than 480px (e.g., Phones) */
  @media screen and (max-width: 480px) {
    body {
      background-color: #ffe0b2; /* Light Orange */
    }
    .mq-box {
      border-color: #e67e22;
      background-color: #fff2e0;
      width: 95%; /* Take more width on very small screens */
      padding: 15px;
    }
    .mq-box::before {
      content: "Mobile Only Style (Max 480px)";
      color: #b35900;
    }
  }
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<h3>Media Queries Example (Try resizing your browser!)</h3>
<div class="mq-box">
  <p>This box and background color will change based on your browser's width.</p>
</div>
\`\`\`

---

## 3. Mobile-First Approach (វិធីសាស្រ្តទូរស័ព្ទជាមុន)

**Mobile-First** គឺជាទស្សនវិជ្ជាមួយក្នុងការរចនា Responsive Design ។ ជំនួសឱ្យការចាប់ផ្តើមជាមួយនឹង Layout Desktop ហើយបន្ទាប់មកសម្របវាសម្រាប់ឧបករណ៍តូចៗ វាផ្ទុយទៅវិញ៖

1.  **ចាប់ផ្តើមរចនា និងអភិវឌ្ឍសម្រាប់អេក្រង់ទូរស័ព្ទជាមុន។** នេះមានន័យថាអ្នកសរសេរ CSS លំនាំដើមរបស់អ្នកសម្រាប់អេក្រង់តូចបំផុត។
2.  **បន្ទាប់មកប្រើ Media Queries ជាមួយ \`min-width\`** ដើម្បីបន្ថែមរចនាបថសម្រាប់អេក្រង់ធំជាង។

**អត្ថប្រយោជន៍:**

* **ដំណើរការប្រសើរជាងមុន:** ឧបករណ៍ចល័តផ្ទុក CSS តិចជាងមុន។
* **បទពិសោធន៍អ្នកប្រើប្រាស់ល្អប្រសើរ:** បង្ខំអ្នកឱ្យគិតអំពីមាតិកាដែលសំខាន់បំផុតសម្រាប់ឧបករណ៍តូចៗ។
* **ថែទាំងាយស្រួលជាង:** CSS របស់អ្នកកាន់តែមានរបៀបរៀបរយ។

### ឧទាហរណ៍ Mobile-First CSS Structure:

\`\`\`css
/* Base styles for small screens (Mobile-First) */
body {
  font-size: 16px;
  padding: 10px;
  background-color: #f7f7f7;
}

.container {
  width: 100%;
  padding: 10px;
}

.navigation {
  display: block; /* Example: Hamburger menu icon */
}

/* Medium screens (e.g., Tablets) */
@media screen and (min-width: 600px) {
  body {
    font-size: 18px;
    padding: 20px;
    background-color: #e0f2f7;
  }
  .container {
    max-width: 700px; /* Constrain width */
  }
  .navigation {
    display: flex; /* Example: Show full navigation bar */
    justify-content: space-around;
  }
}

/* Large screens (e.g., Desktops) */
@media screen and (min-width: 992px) {
  body {
    font-size: 20px;
    background-color: #cceddb;
  }
  .container {
    max-width: 1100px;
    display: grid; /* Use grid for complex desktop layouts */
    grid-template-columns: 1fr 3fr;
    gap: 20px;
  }
}
\`\`\`

---

## 4. Flexible Grids (ប្លង់បត់បែន) និង Fluid Images (រូបភាពហូរ)

ដើម្បីបង្កើត Layout ដែលពិតជាឆ្លើយតប អ្នកត្រូវតែធ្វើឱ្យ Elements របស់អ្នកមានភាពបត់បែន។

* **Flexible Grids (Flexbox & CSS Grid):** ប្រើ Flexbox និង CSS Grid ដើម្បីបង្កើត Layout ដែលអាចផ្លាស់ប្តូរទំហំ និងរៀបចំ Elements ឡើងវិញដោយស្វ័យប្រវត្តិ។ ប្រើឯកតាដែលទាក់ទងដូចជា \`%\` (ភាគរយ) ឬ \`fr\` (fractional units) ជំនួសឱ្យ \`px\` ថេរ។

    \`\`\`css
    .flex-container {
      display: flex;
      flex-wrap: wrap; /* Allow items to wrap */
    }
    .flex-item {
      flex: 1 1 300px; /* Grow, shrink, base of 300px */
      margin: 10px;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    \`\`\`

* **Fluid Images (រូបភាពហូរ):** ធ្វើឱ្យរូបភាពរបស់អ្នកផ្លាស់ប្តូរទំហំដោយស្វ័យប្រវត្តិដើម្បីកុំឱ្យវាហៀរចេញពី Container របស់វា។

    \`\`\`css
    img {
      max-width: 100%; /* Ensures image never exceeds its parent's width */
      height: auto;    /* Maintains aspect ratio */
      display: block;  /* Removes extra space below image */
    }
    \`\`\`

### ឧទាហរណ៍ Fluid Images:
\`\`\`html
<style>
  .img-container {
    width: 80%;
    max-width: 500px;
    margin: 20px auto;
    border: 2px solid #27ae60;
    padding: 10px;
    background-color: #e8f5e9;
    text-align: center;
  }
  .img-container img {
    max-width: 100%; /* Image will scale down if parent is smaller */
    height: auto;    /* Maintain aspect ratio */
    display: block; /* Remove extra space below img element */
    border-radius: 5px;
  }
  .img-container p {
    margin-top: 10px;
    font-style: italic;
    color: #555;
  }
</style>
<h3>Fluid Image Example (Try resizing your browser!)</h3>
<div class="img-container">
  <img src="https://via.placeholder.com/600x400/85c1e9/ffffff?text=Responsive+Image" alt="Responsive Image">
  <p>This image will shrink or grow to fit its container.</p>
</div>
\`\`\`

---

> **គន្លឹះ:** Responsive Design មិនមែនគ្រាន់តែជាការធ្វើឱ្យ Layout មើលទៅល្អនៅលើទំហំអេក្រង់ផ្សេងៗគ្នានោះទេ ប៉ុន្តែក៏ជាការផ្តល់បទពិសោធន៍អ្នកប្រើប្រាស់ដែលល្អប្រសើរបំផុតផងដែរ ដូចជាការបង្កើនល្បឿននៃការផ្ទុកទំព័រ ការប្រើប្រាស់ Font ដែលអាចអានបាន និងការរចនា Interaction ដែលងាយស្រួលប្រើប្រាស់។

`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ Responsive Design</h3>
<style>
/* Base Styles (Mobile-First) */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

.container {
  width: 100%;
  padding: 15px;
  box-sizing: border-box; /* Include padding in width */
}

/* Header */
.r-header {
  background-color: #343a40;
  color: white;
  padding: 15px 20px;
  text-align: center;
}
.r-header h1 {
  margin: 0;
  font-size: 1.5em;
}

/* Navigation (Mobile-First: Stacked/Hamburger menu concept) */
.r-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #495057;
  display: flex; /* Use flexbox for nav items */
  flex-direction: column; /* Stack vertically on mobile */
}
.r-nav li {
  padding: 10px 15px;
  border-bottom: 1px solid #6c757d;
}
.r-nav a {
  color: white;
  text-decoration: none;
  display: block;
}
.r-nav li:last-child {
  border-bottom: none;
}
.r-nav a:hover {
  background-color: #6c757d;
}

/* Main Content Area */
.main-content-grid {
  display: grid;
  gap: 20px;
  padding: 20px;
}
.main-content-grid .card {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.08);
}
.main-content-grid .card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 15px;
}
.main-content-grid .card h3 {
  color: #007bff;
  margin-top: 0;
}

/* Footer */
.r-footer {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 0.9em;
  margin-top: 30px;
}

/* --- Media Queries --- */

/* Medium devices (Tablets, small laptops, 768px and up) */
@media (min-width: 768px) {
  .container {
    max-width: 960px; /* Constrain main content width */
    margin: 0 auto;
  }

  /* Header */
  .r-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .r-header h1 {
    font-size: 2em;
  }

  /* Navigation: Horizontal on larger screens */
  .r-nav ul {
    flex-direction: row;
    background-color: transparent; /* No background for desktop nav */
  }
  .r-nav li {
    border-bottom: none;
  }
  .r-nav a {
    padding: 10px 15px; /* Adjust padding for horizontal links */
    display: inline-block; /* Make anchors inline-block for spacing */
  }
  .r-nav a:hover {
    background-color: #6c757d;
    border-radius: 4px;
  }

  /* Main Content Grid: 2 columns */
  .main-content-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

/* Large devices (Desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
  /* Main Content Grid: 3 columns */
  .main-content-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<header class="r-header">
  <h1>Responsive Website</h1>
  <nav class="r-nav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<div class="container">
  <section class="main-content-grid">
    <div class="card">
      <img src="https://via.placeholder.com/400x250/a2d9ce/000000?text=Flexibility" alt="Flexibility">
      <h3>Flexible Layouts</h3>
      <p>Content adapts seamlessly to any screen size, providing an optimal viewing experience.</p>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/400x250/f7dc6f/000000?text=Media+Queries" alt="Media Queries">
      <h3>Media Queries</h3>
      <p>Utilize powerful CSS media queries to apply specific styles based on device characteristics.</p>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/400x250/d8bfd8/000000?text=Fluid+Images" alt="Fluid Images">
      <h3>Fluid Images</h3>
      <p>Images automatically scale to fit their containers, preventing overflow and maintaining aspect ratios.</p>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/400x250/ffb3ba/000000?text=Mobile+First" alt="Mobile First">
      <h3>Mobile-First Approach</h3>
      <p>Design and develop for mobile devices first, then progressively enhance for larger screens.</p>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/400x250/b2e0ff/000000?text=Performance" alt="Performance">
      <h3>Enhanced Performance</h3>
      <p>Optimized for faster loading times on mobile devices by sending only necessary CSS.</p>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/400x250/c0d9c0/000000?text=User+Experience" alt="User Experience">
      <h3>Better User Experience</h3>
      <p>Ensure your users have a consistent and enjoyable experience regardless of their device.</p>
    </div>
  </section>
</div>

<footer class="r-footer">
  <p>&copy; 2025 Responsive Design Demo. All rights reserved.</p>
</footer>
`
  ],
  quiz: [
    {
      question: 'តើ Responsive Design គឺជាអ្វី?',
      options: [
        'ការរចនាគេហទំព័រដែលផ្លាស់ប្តូរពណ៌តាមពេលវេលា',
        'ការរចនាគេហទំព័រដែលប្លង់ និងមាតិកាសម្របខ្លួនទៅនឹងទំហំអេក្រង់ផ្សេងៗគ្នា',
        'ការរចនាគេហទំព័រសម្រាប់តែ Desktop ប៉ុណ្ណោះ',
        'ការរចនាគេហទំព័រដែលមានចលនាច្រើន'
      ],
      correct: 1,
      explanation: 'Responsive Design គឺជាវិធីសាស្រ្តដែលធ្វើឱ្យប្លង់ និងមាតិការបស់គេហទំព័រផ្លាស់ប្តូរ និងសម្របខ្លួនទៅតាមទំហំអេក្រង់ផ្សេងៗគ្នា។'
    },
    {
      question: 'តើ Viewport Meta Tag ត្រូវបានដាក់នៅកន្លែងណា?',
      options: [
        'នៅក្នុង `<body>`',
        'នៅក្នុង `<head>`',
        'នៅក្នុង `<style>` tag',
        'នៅក្នុង `<footer>`'
      ],
      correct: 1,
      explanation: 'Viewport Meta Tag ត្រូវតែដាក់នៅក្នុងផ្នែក `<head>` នៃឯកសារ HTML របស់អ្នក។'
    },
    {
      question: 'តើ `width=device-width` នៅក្នុង Viewport Meta Tag មានន័យដូចម្តេច?',
      options: [
        'កំណត់ទទឹងទំព័រទៅ 100px',
        'កំណត់ទទឹងទំព័រឱ្យត្រូវនឹងទទឹងអេក្រង់របស់ឧបករណ៍',
        'កំណត់ទទឹងទំព័រទៅទំហំថេរ',
        'កំណត់ទទឹងទំព័រទៅ 50% នៃអេក្រង់'
      ],
      correct: 1,
      explanation: '`width=device-width` កំណត់ទទឹងរបស់ទំព័រឱ្យត្រូវនឹងទទឹងអេក្រង់របស់ឧបករណ៍ (ជា pixels) ។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងចម្បងនៃ Media Queries?',
      options: [
        'ដើម្បីបង្កើតចលនា (animations) នៅក្នុង CSS',
        'ដើម្បីអនុវត្តរចនាបថ CSS ជាក់លាក់ដោយផ្អែកលើលក្ខខណ្ឌអេក្រង់',
        'ដើម្បីផ្ទុក Font ពីខាងក្រៅ',
        'ដើម្បីភ្ជាប់ឯកសារ JavaScript'
      ],
      correct: 1,
      explanation: 'Media Queries អនុញ្ញាតឱ្យអ្នកអនុវត្តរចនាបថ CSS ជាក់លាក់ដោយផ្អែកលើលក្ខខណ្ឌ (ដូចជាទទឹងអេក្រង់) ។'
    },
    {
      question: 'តើ `min-width` នៅក្នុង Media Query មានន័យដូចម្តេច?',
      options: [
        'រចនាបថត្រូវបានអនុវត្តនៅពេលទទឹងអេក្រង់តិចជាងតម្លៃដែលបានកំណត់',
        'រចនាបថត្រូវបានអនុវត្តនៅពេលទទឹងអេក្រង់ធំជាង ឬស្មើនឹងតម្លៃដែលបានកំណត់',
        'រចនាបថត្រូវបានអនុវត្តនៅពេលទទឹងអេក្រង់ស្មើនឹងតម្លៃដែលបានកំណត់',
        'រចនាបថត្រូវបានអនុវត្តនៅពេលទទឹងអេក្រង់អតិបរមាគឺតម្លៃដែលបានកំណត់'
      ],
      correct: 1,
      explanation: '`min-width` នៅក្នុង Media Query មានន័យថារចនាបថដែលបានកំណត់នឹងត្រូវបានអនុវត្តនៅពេលទទឹងអេក្រង់ធំជាង ឬស្មើនឹងតម្លៃដែលបានកំណត់ (ឧទាហរណ៍ សម្រាប់ Desktop-First approach) ។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃវិធីសាស្រ្ត "Mobile-First" ក្នុងការអភិវឌ្ឍន៍ Responsive Design?',
      options: [
        'វាធ្វើឱ្យការអភិវឌ្ឍន៍លឿនជាងមុន ដោយមិនចាំបាច់ Media Queries',
        'វាជួយក្នុងការបង្កើតគេហទំព័រដែលដំណើរការប្រសើរជាងមុននៅលើឧបករណ៍ចល័ត និងផ្តល់បទពិសោធន៍អ្នកប្រើប្រាស់ល្អប្រសើរ',
        'វាអនុញ្ញាតឱ្យអ្នករចនាសម្រាប់ Desktop តែប៉ុណ្ណោះ',
        'វាធ្វើឱ្យគេហទំព័រមើលទៅដូចកម្មវិធីទូរស័ព្ទ'
      ],
      correct: 1,
      explanation: 'Mobile-First ជួយឱ្យគេហទំព័រដំណើរការប្រសើរជាងមុននៅលើឧបករណ៍ចល័ត និងផ្តល់បទពិសោធន៍អ្នកប្រើប្រាស់ល្អប្រសើរ ដោយផ្តោតលើមាតិកាសំខាន់បំផុតសម្រាប់អេក្រង់តូចៗជាមុន។'
    },
    {
      question: 'តើទ្រព្យសម្បត្តិ CSS មួយណាដែលល្អបំផុតដើម្បីធ្វើឱ្យរូបភាពមានភាព Fluid (ហូរ) នៅក្នុង Responsive Design?',
      options: [
        '`width: 100%; height: 100%;`',
        '`max-width: 100%; height: auto;`',
        '`min-width: 100%; height: fixed;`',
        '`background-size: cover;`'
      ],
      correct: 1,
      explanation: '`max-width: 100%;` ធានាថារូបភាពមិនដែលលើសទទឹងរបស់ Parent Container របស់វា ហើយ `height: auto;` ធានាថាសមាមាត្ររូបភាពត្រូវបានរក្សា។'
    },
    {
      question: 'តើអ្វីជា "Breakpoint" នៅក្នុង Responsive Design?',
      options: [
        'ចំណុចដែល CSS របស់អ្នកឈប់ដំណើរការ',
        'ចំណុចដែល Layout របស់អ្នកផ្លាស់ប្តូរដើម្បីសម្របតាមទំហំអេក្រង់',
        'កំហុសនៅក្នុង CSS code',
        'កម្ពស់អប្បបរមានៃ Element'
      ],
      correct: 1,
      explanation: 'Breakpoint គឺជាចំណុចដែល Layout របស់អ្នកផ្លាស់ប្តូរដើម្បីសម្របតាមទំហំអេក្រង់ ដោយប្រើ Media Queries ។'
    },
    {
      question: 'តើ `initial-scale=1.0` នៅក្នុង Viewport Meta Tag ធ្វើអ្វី?',
      options: [
        'កំណត់កម្រិតពង្រីកដំបូងទៅ 10%',
        'កំណត់កម្រិតពង្រីកដំបូងនៅពេលទំព័រត្រូវបានផ្ទុកដំបូងទៅ 100%',
        'ការពារអ្នកប្រើប្រាស់ពីការពង្រីក',
        'ធ្វើឱ្យទំព័រតូចជាងធម្មតា'
      ],
      correct: 1,
      explanation: '`initial-scale=1.0` កំណត់កម្រិតពង្រីកដំបូងនៅពេលទំព័រត្រូវបានផ្ទុកដំបូងឱ្យស្មើនឹង 100% ។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យរចនាបថត្រូវបានអនុវត្តសម្រាប់អេក្រង់ធំជាង 992px តើ Media Query មួយណាដែលត្រឹមត្រូវ?',
      options: [
        '`@media (max-width: 992px)`',
        '`@media (width: 992px)`',
        '`@media (min-width: 992px)`',
        '`@media (min-height: 992px)`'
      ],
      correct: 2,
      explanation: '`@media (min-width: 992px)` នឹងអនុវត្តរចនាបថនៅពេលទទឹងអេក្រង់គឺ 992px ឬធំជាង។'
    },
    {
      question: 'តើឯកតា CSS មួយណាដែលត្រូវបានណែនាំសម្រាប់ការបង្កើត Flexible Grids?',
      options: [
        '`px` (pixels)',
        '`pt` (points)',
        '`%` (percentages) និង `fr` (fractional units)',
        '`cm` (centimeters)'
      ],
      correct: 2,
      explanation: '`%` (percentages) និង `fr` (fractional units) គឺជាឯកតាដែលទាក់ទងដែលល្អសម្រាប់បង្កើត Flexible Grids ជាមួយ Flexbox ឬ CSS Grid ។'
    },
    {
      question: 'តើ `display: flex; flex-wrap: wrap;` ជួយ Responsive Design យ៉ាងដូចម្តេច?',
      options: [
        'វាមិនជួយទេ នេះសម្រាប់ Desktop តែប៉ុណ្ណោះ',
        'វាអនុញ្ញាតឱ្យ Items ផ្លាស់ប្តូរទំហំដោយស្វ័យប្រវត្តិ',
        'វាធ្វើឱ្យ Items ហៀរចេញពី Container',
        'វាអនុញ្ញាតឱ្យ Items រុំទៅបន្ទាត់ថ្មីនៅពេលមិនមានចន្លោះគ្រប់គ្រាន់'
      ],
      correct: 3,
      explanation: '`flex-wrap: wrap;` អនុញ្ញាតឱ្យ Flex Items រុំទៅបន្ទាត់ថ្មីនៅពេលដែល Container តូចពេក ដែលជាមុខងារសំខាន់សម្រាប់ Responsive Layout ។'
    },
    {
      question: 'តើ `orientation: landscape` នៅក្នុង Media Query ពិនិត្យមើលលក្ខខណ្ឌអ្វី?',
      options: [
        'ថាតើឧបករណ៍ស្ថិតក្នុងរបៀបបញ្ឈរ (portrait)',
        'ថាតើឧបករណ៍ស្ថិតក្នុងរបៀបផ្ដេក (landscape)',
        'ថាតើអេក្រង់ជាពណ៌',
        'ថាតើឧបករណ៍មានក្តារចុច'
      ],
      correct: 1,
      explanation: '`orientation: landscape` ពិនិត្យមើលថាតើ Viewport មានទទឹងធំជាងកម្ពស់ (របៀបផ្ដេក) ។'
    },
    {
      question: 'តើ `max-width` នៅក្នុង Media Query គឺសម្រាប់អ្វី?',
      options: [
        'អនុវត្តរចនាបថនៅពេលទទឹងអេក្រង់ធំជាងតម្លៃដែលបានកំណត់',
        'អនុវត្តរចនាបថនៅពេលទទឹងអេក្រង់តិចជាង ឬស្មើនឹងតម្លៃដែលបានកំណត់',
        'កំណត់ទទឹងអតិបរមារបស់ Element',
        'កំណត់ទទឹងអប្បបរមារបស់ Element'
      ],
      correct: 1,
      explanation: '`max-width` អនុវត្តរចនាបថនៅពេលទទឹងអេក្រង់គឺតិចជាង ឬស្មើនឹងតម្លៃដែលបានកំណត់ (ឧទាហរណ៍ សម្រាប់ Desktop-First approach, សម្រាប់ទូរស័ព្ទ) ។'
    },
    {
      question: 'តើបច្ចេកទេសអ្វីដែលអាចជួយកែលម្អល្បឿនផ្ទុកគេហទំព័រសម្រាប់ឧបករណ៍ចល័តក្នុង Responsive Design?',
      options: [
        'ប្រើរូបភាពដែលមានទំហំធំខ្លាំង',
        'ផ្ទុក CSS និង JavaScript ទាំងអស់នៅពេលចាប់ផ្តើម',
        'ប្រើ Mobile-First approach និង最適化រូបភាព (optimize images)',
        'ប្រើ Font ពិសេសៗជាច្រើន'
      ],
      correct: 2,
      explanation: 'ការប្រើ Mobile-First approach (ផ្ទុក CSS តិចជាងសម្រាប់ទូរស័ព្ទ) និងការ最適化រូបភាព (ឧទាហរណ៍ កាត់បន្ថយទំហំឯកសារ) អាចជួយកែលម្អល្បឿនផ្ទុកសម្រាប់ឧបករណ៍ចល័ត។'
    },
    {
      question: 'តើទ្រព្យសម្បត្តិ `gap` (ឬ `grid-gap`) មានសារៈសំខាន់យ៉ាងណាក្នុង Responsive Design ដោយប្រើ CSS Grid?',
      options: [
        'វាមិនសំខាន់ទេ ព្រោះចន្លោះត្រូវបានគ្រប់គ្រងដោយស្វ័យប្រវត្តិ',
        'វាជួយរក្សាគម្លាតថេររវាង Grid Items ដោយមិនគិតពីទំហំអេក្រង់',
        'វាធ្វើឱ្យ Grid Items ត្រួតស៊ីគ្នា',
        'វាប្រើសម្រាប់តែ Flexbox ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: '`gap` (ឬ `grid-gap`) គឺសំខាន់ព្រោះវាអនុញ្ញាតឱ្យអ្នកកំណត់ចន្លោះថេររវាង Grid Items ដែលនឹងរក្សាភាពជាប់លាប់នៃ Layout របស់អ្នក ទោះបីជាទំហំអេក្រង់ផ្លាស់ប្តូរក៏ដោយ។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង `px` និង `rem` នៅក្នុង Responsive Design?',
      options: [
        '`px` គឺជាឯកតាដែលទាក់ទង ចំណែក `rem` គឺជាឯកតាដាច់ខាត',
        '`px` ត្រូវបានណែនាំសម្រាប់ Responsive Design ចំណែក `rem` មិនមែន',
        '`px` គឺជាឯកតាដាច់ខាត ចំណែក `rem` គឺជាឯកតាដែលទាក់ទងនឹងទំហំ Font Root Element (`<html>`) ដែលធ្វើឱ្យវាអាចបត់បែនបានសម្រាប់ការធ្វើមាត្រដ្ឋាន',
        'ពួកវាដូចគ្នា គ្រាន់តែឈ្មោះខុសគ្នា'
      ],
      correct: 2,
      explanation: '`px` គឺជាឯកតាដាច់ខាត (ចំនួនភីកសែលថេរ) ខណៈ `rem` គឺជាឯកតាដែលទាក់ទង (ផ្អែកលើទំហំ Font របស់ Root Element) ដែលធ្វើឱ្យវាកាន់តែងាយស្រួលក្នុងការធ្វើមាត្រដ្ឋាន Font និង Elements ផ្សេងទៀតសម្រាប់ Responsive Design ។'
    },
    {
      question: 'តើការរចនា Responsive ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះសម្រាប់ SEO (Search Engine Optimization)?',
      options: [
        'វាមិនមានផលប៉ះពាល់ដល់ SEO ទេ',
        'Google ផ្តល់ចំណាត់ថ្នាក់ទាបជាងគេហទំព័រដែលមិនឆ្លើយតប',
        'វាកែលម្អបទពិសោធន៍អ្នកប្រើប្រាស់ ដែលជាកត្តា SEO មួយ ហើយ Google ចូលចិត្តគេហទំព័រដែលងាយស្រួលប្រើប្រាស់លើឧបករណ៍ចល័ត',
        'វាធ្វើឱ្យគេហទំព័រផ្ទុកយឺត ដែលបង្កគ្រោះថ្នាក់ដល់ SEO'
      ],
      correct: 2,
      explanation: 'Responsive Design កែលម្អបទពិសោធន៍អ្នកប្រើប្រាស់លើឧបករណ៍ចល័ត ដែលជាកត្តា SEO សំខាន់។ Google ផ្តល់អាទិភាពដល់គេហទំព័រដែលឆ្លើយតបនិងងាយស្រួលប្រើប្រាស់លើទូរស័ព្ទ។'
    },
    {
      question: 'តើអ្វីទៅដែលជា "Graceful Degradation" នៅក្នុងបរិបទនៃការអភិវឌ្ឍន៍គេហទំព័រឆ្លើយតប?',
      options: [
        'ការរចនាសម្រាប់ Browser ទំនើបតែប៉ុណ្ណោះ',
        'ការធានាថាមុខងារគេហទំព័រដំណើរការលើ Browser ចាស់ៗ ទោះបីជាគ្មានលក្ខណៈពិសេសទំនើបៗក៏ដោយ',
        'ការធ្វើឱ្យគេហទំព័រមើលទៅអាក្រក់នៅលើឧបករណ៍ចល័ត',
        'ការបន្ថយល្បឿនគេហទំព័រដោយចេតនា'
      ],
      correct: 1,
      explanation: 'Graceful Degradation គឺជាវិធីសាស្រ្តដែលធានាថាមាតិកា និងមុខងារស្នូលរបស់គេហទំព័រអាចចូលប្រើបាន និងប្រើប្រាស់បាននៅលើ Browser ចាស់ៗ ឬឧបករណ៍ដែលមិនគាំទ្រលក្ខណៈពិសេសទំនើបៗ ទោះបីជាគ្មានបទពិសោធន៍ពេញលេញក៏ដោយ។'
    },
    {
      question: 'តើ `@media print` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់រចនាបថនៅពេលគេហទំព័រត្រូវបានមើលនៅលើអេក្រង់បោះពុម្ព',
        'ដើម្បីកំណត់រចនាបថនៅពេលគេហទំព័រត្រូវបានបោះពុម្ព',
        'ដើម្បីបង្កើតប្លង់បោះពុម្ពសម្រាប់ទស្សនាវដ្តី',
        'ដើម្បីគ្រប់គ្រងទំហំ Font សម្រាប់តែម៉ាស៊ីនបោះពុម្ព'
      ],
      correct: 1,
      explanation: '`@media print` Media Query អនុញ្ញាតឱ្យអ្នកអនុវត្តរចនាបថ CSS ជាក់លាក់នៅពេលដែលទំព័រត្រូវបានបោះពុម្ព ដែលមានប្រយោជន៍សម្រាប់ការបង្កើនប្រសិទ្ធភាពសម្រាប់ក្រដាស។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធ Layout ប្លង់ឆ្លើយតបសាមញ្ញដោយប្រើ CSS Media Queries ។

* \`<body>\` ។
* \`<header>\` ដែលមាន Class \`responsive-header\` ។ ដាក់ \`<h1>My Responsive Site</h1>\` នៅខាងក្នុង។
* \`<nav>\` ដែលមាន Class \`responsive-nav\` ។ ដាក់ \`<ul><li><a>Home</a></li>...</ul>\` (យ៉ាងតិច 3 Links) នៅខាងក្នុង។
* \`<main>\` ដែលមាន Class \`responsive-main\` ។ ដាក់ \`<div>\` ចំនួន 3 ដែលមាន Class \`card\` និងមាតិកាសាមញ្ញ (ឧទាហរណ៍ \`<h3>Card Title</h3><p>Some text.</p>\`) ។
* \`<footer>\` ដែលមាន Class \`responsive-footer\` ។ ដាក់ \`<p>&copy; 2025 Responsive Design</p>\` នៅខាងក្នុង។

សូមប្រើ **Internal CSS** និង Media Queries ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  **Viewport Meta Tag:** បន្ថែម Viewport Meta Tag នៅក្នុង \`<head>\` ។
2.  **Base Styles (Mobile-First):**
    * សម្រាប់ \`body\`: \`font-family: sans-serif;\`, \`margin: 0;\`, \`background-color: #f0f2f5;\` ។
    * សម្រាប់ \`.responsive-header\`: \`background-color: #3f51b5;\`, \`color: white;\`, \`padding: 15px;\`, \`text-align: center;\` ។
    * សម្រាប់ \`.responsive-nav ul\`: \`list-style: none;\`, \`padding: 0;\`, \`margin: 0;\`, \`background-color: #5c6bc0;\`, \`display: flex;\`, \`flex-direction: column;\` ។
    * សម្រាប់ \`.responsive-nav li\`: \`border-bottom: 1px solid #7986cb;\` (សម្រាប់ Items ទាំងអស់លើកលែងតែចុងក្រោយ) ។
    * សម្រាប់ \`.responsive-nav a\`: \`display: block;\`, \`padding: 10px;\`, \`color: white;\`, \`text-decoration: none;\`, \`text-align: center;\` ។
    * សម្រាប់ \`.responsive-main\`: \`padding: 15px;\`, \`display: flex;\`, \`flex-direction: column;\`, \`gap: 20px;\` ។
    * សម្រាប់ \`.card\`: \`background-color: white;\`, \`padding: 20px;\`, \`border-radius: 8px;\`, \`box-shadow: 0 2px 5px rgba(0,0,0,0.1);\` ។
    * សម្រាប់ \`.responsive-footer\`: \`background-color: #3f51b5;\`, \`color: white;\`, \`padding: 15px;\`, \`text-align: center;\` ។
3.  **Tablet Styles (min-width: 768px):**
    * សម្រាប់ \`.responsive-nav ul\`: ផ្លាស់ប្តូរ \`flex-direction: row;\`, \`justify-content: center;\` ។
    * សម្រាប់ \`.responsive-nav li\`: លុប \`border-bottom\` ។
    * សម្រាប់ \`.responsive-main\`: ផ្លាស់ប្តូរ \`flex-direction: row;\`, \`flex-wrap: wrap;\`, \`justify-content: center;\` ។
    * សម្រាប់ \`.card\`: កំណត់ \`flex-basis: calc(50% - 20px);\` (ដើម្បីឱ្យ Card 2 ក្នុងមួយជួរ) ។
4.  **Desktop Styles (min-width: 1024px):**
    * សម្រាប់ \`.responsive-main\`: ផ្លាស់ប្តូរ \`flex-direction: row;\` (already row), \`flex-wrap: wrap;\`, \`justify-content: space-around;\` (ឬ \`space-between\`) ។
    * សម្រាប់ \`.card\`: កំណត់ \`flex-basis: calc(33.333% - 20px);\` (ដើម្បីឱ្យ Card 3 ក្នុងមួយជួរ) ។

`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>Responsive Design Lab</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* 2. Base Styles (Mobile-First) */
    body {
      font-family: sans-serif;
      margin: 0;
      background-color: #f0f2f5; /* Light grey background */
      color: #333;
    }

    /* Header */
    .responsive-header {
      background-color: #3f51b5; /* Indigo */
      color: white;
      padding: 15px;
      text-align: center;
    }
    .responsive-header h1 {
        margin: 0;
        font-size: 1.8em;
    }

    /* Navigation */
    .responsive-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      background-color: #5c6bc0; /* Lighter Indigo */
      display: flex;
      flex-direction: column; /* Stack vertically on mobile */
    }
    .responsive-nav li {
      border-bottom: 1px solid #7986cb; /* Separator for list items */
    }
    .responsive-nav li:last-child {
        border-bottom: none; /* No border for the last item */
    }
    .responsive-nav a {
      display: block;
      padding: 10px;
      color: white;
      text-decoration: none;
      text-align: center;
      transition: background-color 0.3s ease;
    }
    .responsive-nav a:hover {
        background-color: #7986cb;
    }

    /* Main Content */
    .responsive-main {
      padding: 15px;
      display: flex;
      flex-direction: column; /* Stack cards vertically on mobile */
      gap: 20px; /* Space between cards */
    }

    /* Card Style */
    .card {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      text-align: center;
    }
    .card h3 {
        color: #3f51b5;
        margin-top: 0;
    }
    .card p {
        font-size: 0.95em;
        line-height: 1.5;
        color: #555;
    }

    /* Footer */
    .responsive-footer {
      background-color: #3f51b5; /* Indigo */
      color: white;
      padding: 15px;
      text-align: center;
      margin-top: 20px;
    }

    /* --- 3. Tablet Styles (min-width: 768px) --- */
    @media (min-width: 768px) {
      /* Navigation horizontal */
      .responsive-nav ul {
        flex-direction: row;
        justify-content: center; /* Center nav items */
      }
      .responsive-nav li {
        border-bottom: none; /* Remove vertical borders */
      }
      .responsive-nav a {
        padding: 10px 15px; /* Adjust padding for horizontal links */
      }

      /* Main content for two columns */
      .responsive-main {
        flex-direction: row; /* Layout cards horizontally */
        flex-wrap: wrap; /* Allow cards to wrap */
        justify-content: center; /* Center cards in the row */
        max-width: 960px; /* Constrain max width for better layout */
        margin: 0 auto; /* Center the main content area */
      }
      .card {
        flex-basis: calc(50% - 20px); /* Two cards per row with gap */
        /* Each card takes 50% width minus half of the gap on each side */
      }
    }

    /* --- 4. Desktop Styles (min-width: 1024px) --- */
    @media (min-width: 1024px) {
      .responsive-main {
        justify-content: space-around; /* Distribute space more evenly */
        max-width: 1200px; /* Larger max width for desktop */
      }
      .card {
        flex-basis: calc(33.333% - 20px); /* Three cards per row with gap */
      }
    }
  </style>
</head>
<body>
  <header class="responsive-header">
    <h1>My Responsive Site</h1>
  </header>

  <nav class="responsive-nav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <main class="responsive-main">
    <div class="card">
      <h3>Card Title One</h3>
      <p>This is some content for card one. It should adapt nicely to different screen sizes.</p>
    </div>
    <div class="card">
      <h3>Card Title Two</h3>
      <p>Here is content for card two. Watch how the layout changes as you resize your browser window.</p>
    </div>
    <div class="card">
      <h3>Card Title Three</h3>
      <p>And finally, content for card three. Responsive design is key for modern web development.</p>
    </div>
    <div class="card">
      <h3>Another Card</h3>
      <p>Adding more cards to demonstrate the wrapping behavior of the flex container.</p>
    </div>
  </main>

  <footer class="responsive-footer">
    <p>&copy; 2025 Responsive Design. All rights reserved.</p>
  </footer>
</body>
</html>`
  }
};

export default CSSLesson5_1Content;