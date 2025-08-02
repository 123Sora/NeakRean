import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson5_4Content: LessonContent = {
  title: 'Event Handling',
  objectives: [
    'យល់ដឹងអំពី Events និង Event Handling នៅក្នុង JavaScript',
    'រៀនប្រើ `addEventListener` ដើម្បីគ្រប់គ្រង Events',
    'ស្វែងយល់អំពី Event Types ដូចជា Click, Mouse, និង Keyboard Events',
    'អនុវត្តន៍ការប្រើ Event Objects ដើម្បីទទួលបានព័ត៌មាន Event',
    'រៀនគ្រប់គ្រង Event Propagation (Bubbling និង Capturing)'
  ],
  content: `
# Event Handling 🎯

---

**Events** គឺជាសកម្មភាពដែលកើតឡើងនៅក្នុង Browser (ឧ. Click, Keypress)។ **Event Handling** គឺជាការឆ្លើយតបទៅនឹង Events ដោយប្រើ JavaScript។

---

## 1. ការប្រើ \`addEventListener\`
ប្រើ \`addEventListener\` ដើម្បីភ្ជាប់ Event Handler ទៅ Element។

\`\`\`html
<button id="myButton">ចុចខ្ញុំ</button>
<script>
  let button = document.getElementById("myButton");
  button.addEventListener("click", () => {
    alert("ប៊ូតុងត្រូវបានចុច!");
  });
</script>
\`\`\`

---

## 2. Event Types
- **Mouse Events**: \`click\`, \`mouseover\`, \`mouseout\`។
- **Keyboard Events**: \`keydown\`, \`keyup\`។
- **Form Events**: \`submit\`, \`change\`។

\`\`\`html
<input id="myInput" type="text">
<script>
  let input = document.getElementById("myInput");
  input.addEventListener("keydown", () => {
    console.log("Key pressed!");
  });
</script>
\`\`\`

---

## 3. Event Object
Event Object ផ្តល់ព័ត៌មានអំពី Event (ឧ. \`event.target\`, \`event.key\`)។

\`\`\`html
<button id="myButton">ចុចខ្ញុំ</button>
<script>
  let button = document.getElementById("myButton");
  button.addEventListener("click", (event) => {
    console.log(event.target); // <button>...</button>
  });
</script>
\`\`\`

---

## 4. Event Propagation
- **Bubbling**: Event ផ្ទេរពី Child ទៅ Parent (Default)។
- **Capturing**: Event ផ្ទេរពី Parent ទៅ Child។
- **\`stopPropagation\`**: បញ្ឈប់ Propagation។

\`\`\`html
<div id="parent">
  <button id="child">ចុចខ្ញុំ</button>
</div>
<script>
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked!");
  });
  document.getElementById("child").addEventListener("click", (event) => {
    console.log("Child clicked!");
    event.stopPropagation();
  });
</script>
\`\`\`

---

## 5. ការប្រើ Event Handling ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Handling</title>
</head>
<body>
  <h1>សាកល្បង Event Handling</h1>
  <button id="myButton">ចុចខ្ញុំ</button>
  <p id="output"></p>
  <script>
    let button = document.getElementById("myButton");
    button.addEventListener("click", () => {
      document.getElementById("output").textContent = "ប៊ូតុងត្រូវបានចុច!";
    });
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** ចុចប៊ូតុងនឹងបង្ហាញ "ប៊ូតុងត្រូវបានចុច!" នៅក្នុង \`<p>\`។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Click Event</h3>
<button id="example1">ចុចខ្ញុំ</button>
<script>
  document.getElementById("example1").addEventListener("click", () => {
    console.log("Clicked!");
  });
</script>
<pre><code class="language-javascript">
document.getElementById("example1").addEventListener("click", () => {
  console.log("Clicked!");
});
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Keyboard Event</h3>
<input id="example2" type="text">
<script>
  document.getElementById("example2").addEventListener("keydown", (event) => {
    console.log(event.key);
  });
</script>
<pre><code class="language-javascript">
document.getElementById("example2").addEventListener("keydown", (event) => {
  console.log(event.key);
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Event គឺជាអ្វី?',
      options: [
        'Function សម្រាប់គណនា',
        'សកម្មភាពនៅក្នុង Browser',
        'HTML Element',
        'CSS Style'
      ],
      correct: 1,
      explanation: 'Event គឺជាសកម្មភាពដូចជា Click, Keypress នៅក្នុង Browser។'
    },
    {
      question: 'តើ Method ណាមួយប្រើសម្រាប់ភ្ជាប់ Event Handler?',
      options: ['setAttribute', 'addEventListener', 'createElement', 'style'],
      correct: 1,
      explanation: '`addEventListener` ភ្ជាប់ Event Handler ទៅ Element។'
    },
    {
      question: 'តើ Event Type ណាមួយជា Mouse Event?',
      options: ['click', 'submit', 'change', 'keydown'],
      correct: 0,
      explanation: '`click` គឺជា Mouse Event�।'
    },
    {
      question: 'តើ Event Object ផ្តល់អ្វី?',
      options: [
        'HTML Content',
        'ព័ត៌មានអំពី Event',
        'CSS Styles',
        'Array នៃ Elements'
      ],
      correct: 1,
      explanation: 'Event Object ផ្តល់ព័ត៌មានដូចជា `event.target`, `event.key`។'
    },
    {
      question: 'តើ `event.target` បញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: [
        'Event Type',
        'Element ដែលបង្ក Event',
        'Window Object',
        'CSS Selector'
      ],
      correct: 1,
      explanation: '`event.target` បញ្ជូន Element ដែលបង្ក Event។'
    },
    {
      question: 'តើ Event Propagation ប្រភេទ Bubbling គឺជាអ្វី?',
      options: [
        'Event ផ្ទេរពី Parent ទៅ Child',
        'Event ផ្ទេរពី Child ទៅ Parent',
        'Event បញ្ឈប់',
        'Event បង្កើត Element'
      ],
      correct: 1,
      explanation: 'Bubbling គឺជា Event ផ្ទេរពី Child ទៅ Parent (Default)។'
    },
    {
      question: 'តើ Method `stopPropagation` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Event',
        'បញ្ឈប់ Event Propagation',
        'បង្កើត Element',
        'ផ្លាស់ប្តូរ Style'
      ],
      correct: 1,
      explanation: '`stopPropagation` បញ្ឈប់ Event ពីការផ្ទេរទៅ Parent។'
    },
    {
      question: 'តើ Keyboard Event មួយណាមួយ?',
      options: ['click', 'mouseover', 'keydown', 'submit'],
      correct: 2,
      explanation: '`keydown` គឺជា Keyboard Event�।'
    },
    {
      question: 'តើកូដ `button.addEventListener("click", () => alert("Hi"))` ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Alert នៅពេលចុច',
        'ផ្លាស់ប្តូរ Text',
        'បន្ថែម Element',
        'លុប Button'
      ],
      correct: 0,
      explanation: 'Event Handler បង្ហាញ Alert នៅពេល `<button>` ត្រូវបានចុច។'
    },
    {
      question: 'តើ `event.key` នៅក្នុង Keyboard Event បញ្ជូនអ្វី?',
      options: [
        'Element ID',
        'Key ដែលត្រូវបានចុច',
        'Mouse Position',
        'Event Type'
      ],
      correct: 1,
      explanation: '`event.key` បញ្ជូន Key ដែលត្រូវបានចុច។'
    },
    {
      question: 'តើ Capturing Phase គឺជាអ្វី?',
      options: [
        'Event ផ្ទេរពី Child ទៅ Parent',
        'Event ផ្ទេរពី Parent ទៅ Child',
        'Event បញ្ឈប់',
        'Event បន្ថែម'
      ],
      correct: 1,
      explanation: 'Capturing Phase គឺជា Event ផ្ទេរពី Parent ទៅ Child។'
    },
    {
      question: 'តើកូដ `element.addEventListener("click", handler, true)` ធ្វើអ្វី?',
      options: [
        'ប្រើ Bubbling Phase',
        'ប្រើ Capturing Phase',
        'បញ្ឈប់ Event',
        'បន្ថែម Element'
      ],
      correct: 1,
      explanation: 'Parameter `true` ប្រើ Capturing Phase។'
    },
    {
      question: 'តើ Method ណាមួយលុប Event Listener?',
      options: ['removeEventListener', 'stopPropagation', 'removeAttribute', 'detachEvent'],
      correct: 0,
      explanation: '`removeEventListener` លុប Event Handler ពី Element�।'
    },
    {
      question: 'តើកូដ `input.addEventListener("change", () => console.log("Changed"))` ធ្វើអ្វី?',
      options: [
        'បង្ហាញ "Changed" នៅពេល Input Value ផ្លាស់ប្តូរ',
        'បង្ហាញ "Changed" នៅពេលចុច',
        'បន្ថែម Input',
        'លុប Input'
      ],
      correct: 0,
      explanation: '`change` Event កើតឡើងនៅពេល Input Value ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `event.preventDefault()` ធ្វើអ្វី?',
      options: [
        'បញ្ឈប់ Event Propagation',
        'បញ្ឈប់ Default Behavior នៃ Event',
        'បន្ថែម Event Handler',
        'លុប Element'
      ],
      correct: 1,
      explanation: '`event.preventDefault()` បញ្ឈប់ Default Behavior ដូចជា Form Submission។'
    },
    {
      question: 'តើ Event Type ណាមួយជា Form Event?',
      options: ['mouseover', 'click', 'submit', 'keyup'],
      correct: 2,
      explanation: '`submit` គឺជា Form Event។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Event Handling ដើម្បីបង្កើត Counter។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Counter App"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "កម្មវិធីរាប់"។
   - បន្ថែម \`<p id="counter">Count: 0</p>\`។
   - បន្ថែម \`<button id="increment">បន្ថែម</button>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រកាស Variable \`let count = 0;\`។
   - ប្រើ \`addEventListener\` លើ Button ដើម្បីបង្កើន \`count\` នៅពេលចុច។
   - ធ្វើបច្ចុប្បន្នភាព \`<p id="counter">\` ដើម្បីបង្ហាញ \`count\` ថ្មី (ឧ. "Count: 1")។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`<p>\`។
     - កំណត់ \`padding: 10px;\` និង \`cursor: pointer;\` សម្រាប់ \`<button>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Counter App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: #333;
    }
    button {
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>កម្មវិធីរាប់</h1>
  <p id="counter">Count: 0</p>
  <button id="increment">បន្ថែម</button>
  <script>
    let count = 0;
    const counter = document.getElementById("counter");
    const button = document.getElementById("increment");
    button.addEventListener("click", () => {
      count++;
      counter.textContent = \`Count: \${count}\`;
    });
  </script>
</body>
</html>
`
  }
};

export default JSLesson5_4Content;