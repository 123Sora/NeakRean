import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson6_4Content: LessonContent = {
  title: 'Timers',
  objectives: [
    'យល់ដឹងអំពី Timers នៅក្នុង JavaScript',
    'រៀនប្រើ `setTimeout` សម្រាប់ការពន្យារពេល',
    'រៀនប្រើ `setInterval` សម្រាប់ការធ្វើបន្តបន្ទាប់',
    'អនុវត្តន៍ការបញ្ឈប់ Timers ដោយប្រើ `clearTimeout` និង `clearInterval`',
    'ស្វែងយល់អំពីការប្រើ Timers ក្នុងកម្មវិធី'
  ],
  content: `
# Timers ⏲️

---

**Timers** អនុញ្ញាតឱ្យ JavaScript ប្រតិបត្តិកូដបន្ទាប់ពីការពន្យារពេល ឬធ្វើម្តងហើយម្តងទៀត។

---

## 1. \`setTimeout\`
ប្រតិបត្តិកូដបន្ទាប់ពីការពន្យារពេល (មិល្លីវិនាទី)។

\`\`\`javascript
setTimeout(() => {
  console.log('សួស្តី!');
}, 1000); // បន្ទាប់ពី 1 វិនាទី
\`\`\`

---

## 2. \`setInterval\`
ប្រតិបត្តិកូដម្តងហើយម្តងទៀតបន្ទាប់ពី Interval ជាក់លាក់

\`\`\`javascript
setInterval(() => {
  console.log('ជំរាបសួរ!');
}, 2000); // រៀងរាល់ 2 វិនាទី
\`\`\`

---

## 3. ការបញ្ឈប់ Timers
- **\`clearTimeout\`**: បញ្ឈប់ \`setTimeout\`។
- **\`clearInterval\`**: បញ្ឈប់ \`setInterval\`។

\`\`\`javascript
let timeoutId = setTimeout(() => console.log('សួស្តី!'), 1000);
clearTimeout(timeoutId); // បញ្ឈប់

let intervalId = setInterval(() => console.log('ជំរាបសួរ!'), 2000);
clearInterval(intervalId); // បញ្ឈប់
\`\`\`

---

## 4. ការប្រើ Timers ក្នុងកម្មវិធី
Timers ត្រូវបានប្រើសម្រាប់ Animations, Updates, ឬ Scheduling។

\`\`\`javascript
let count = 0;
let intervalId = setInterval(() => {
  console.log('រាប់:', count++);
  if (count === 5) clearInterval(intervalId);
}, 1000);
\`\`\`

---

## 5. ការប្រើ Timers ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timers</title>
</head>
<body>
  <h1>សាកល្បង Timers</h1>
  <p id="output">0</p>
  <button id="start">ចាប់ផ្តើម</button>
  <button id="stop">បញ្ឈប់</button>
  <script>
    let count = 0;
    let intervalId;
    document.getElementById('start').addEventListener('click', () => {
      intervalId = setInterval(() => {
        document.getElementById('output').textContent = count++;
      }, 1000);
    });
    document.getElementById('stop').addEventListener('click', () => {
      clearInterval(intervalId);
    });
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** ចុច "ចាប់ផ្តើម" នឹងរាប់លេខ និងចុច "បញ្ឈប់" នឹងបញ្ឈប់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ setTimeout</h3>
<p id="example1">រង់ចាំ...</p>
<script>
  setTimeout(() => {
    document.getElementById('example1').textContent = 'បានបង្ហាញ!';
  }, 1000);
</script>
<pre><code class="language-javascript">
setTimeout(() => {
  document.getElementById('example1').textContent = 'បានបង្ហាញ!';
}, 1000);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ setInterval</h3>
<p id="example2">0</p>
<script>
  let count = 0;
  let intervalId = setInterval(() => {
    document.getElementById('example2').textContent = count++;
    if (count === 3) clearInterval(intervalId);
  }, 1000);
</script>
<pre><code class="language-javascript">
let count = 0;
let intervalId = setInterval(() => {
  document.getElementById('example2').textContent = count++;
  if (count === 3) clearInterval(intervalId);
}, 1000);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `setTimeout` ធ្វើអ្វី?',
      options: [
        'ប្រតិបត្តិកូដម្តងហើយម្តងទៀត',
        'ប្រតិបត្តិកូដបន្ទាប់ពីការពន្យារពេល',
        'បញ្ឈប់ Timer',
        'បន្ថែម Element'
      ],
      correct: 1,
      explanation: '`setTimeout` ប្រតិបត្តិកូដបន្ទាប់ពីការពន្យារពេល។'
    },
    {
      question: 'តើ `setInterval` ធ្វើអ្វី?',
      options: [
        'ប្រតិបត្តិកូដម្តង',
        'ប្រតិបត្តិកូដម្តងហើយម្តងទៀត',
        'លុប Timer',
        'ផ្លាស់ប្តូរ DOM'
      ],
      correct: 1,
      explanation: '`setInterval` ប្រតិបត្តិកូដម្តងហើយម្តងទៀតបន្ទាប់ពី Interval។'
    },
    {
      question: 'តើ Method ណាមួយបញ្ឈប់ `setTimeout`?',
      options: ['clearInterval', 'clearTimeout', 'stopTimeout', 'removeTimeout'],
      correct: 1,
      explanation: '`clearTimeout` បញ្ឈប់ `setTimeout`។'
    },
    {
      question: 'តើ Method ណាមួយបញ្ឈប់ `setInterval`?',
      options: ['clearInterval', 'clearTimeout', 'stopInterval', 'removeInterval'],
      correct: 0,
      explanation: '`clearInterval` បញ្ឈប់ `setInterval`។'
    },
    {
      question: 'តើ `setTimeout` Return អ្វី?',
      options: ['Promise', 'Number (ID)', 'String', 'Object'],
      correct: 1,
      explanation: '`setTimeout` Return ID សម្រាប់ប្រើជាមួយ `clearTimeout`។'
    },
    {
      question: 'តើ Parameter ទីពីរនៃ `setTimeout` គឺជាអ្វី?',
      options: ['Function', 'Delay (ms)', 'Element', 'Event'],
      correct: 1,
      explanation: 'Parameter ទីពីរគឺ Delay ជាមិល្លីវិនាទី។'
    },
    {
      question: 'តើកូដ `setInterval(fn, 1000)` ធ្វើអ្វី?',
      options: [
        'ប្រតិបត្តិ `fn` បន្ទាប់ពី 1 វិនាទី',
        'ប្រតិបត្តិ `fn` រៀងរាល់ 1 វិនាទី',
        'បញ្ឈប់ `fn`',
        'បន្ថែម `fn` ទៅ DOM'
      ],
      correct: 1,
      explanation: '`setInterval` ប្រតិបត្តិ Function រៀងរាល់ 1 វិនាទី។'
    },
    {
      question: 'តើ Timers ត្រូវបានប្រើសម្រាប់អ្វីជាទូទៅ?',
      options: [
        'Animations និង Scheduling',
        'HTTP Requests',
        'DOM Manipulation',
        'Storage'
      ],
      correct: 0,
      explanation: 'Timers ត្រូវបានប្រើសម្រាប់ Animations, Updates, និង Scheduling�।'
    },
    {
      question: 'តើកូដ `clearInterval(id)` ធ្វើអ្វីប្រសិនបើ `id` មិនមាន?',
      options: [
        'បណ្តាលឱ្យ Error',
        'មិនធ្វើអ្វី',
        'បញ្ឈប់ Timer ទាំងអស់',
        'បន្ថែម Timer'
      ],
      correct: 1,
      explanation: '`clearInterval` មិនធ្វើអ្វីប្រសិនបើ ID មិនមាន។'
    },
    {
      question: 'តើ `setTimeout` អាចប្រើជាមួយ Async/Await បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Chrome', 'បានតែក្នុង Node.js'],
      correct: 0,
      explanation: '`setTimeout` អាចបម្លែងទៅ Promise សម្រាប់ Async/Await។'
    },
    {
      question: 'តើកូដ `setTimeout(fn, 0)` ធ្វើអ្វី?',
      options: [
        'ប្រតិបត្តិ `fn` ភ្លាមៗ',
        'ប្រតិបត្តិ `fn` បន្ទាប់ពី Event Loop',
        'បញ្ឈប់ `fn`',
        'បណ្តាលឱ្យ Error'
      ],
      correct: 1,
      explanation: '`setTimeout(fn, 0)` ប្រតិបត្តិ `fn` បន្ទាប់ពី Event Loop។'
    },
    {
      question: 'តើ Timers ដំណើរការនៅ Thread ណា?',
      options: [
        'Main Thread',
        'Worker Thread',
        'Separate Thread',
        'Server Thread'
      ],
      correct: 0,
      explanation: 'Timers ដំណើរការនៅ Main Thread។'
    },
    {
      question: 'តើកូដ `setInterval(() => console.log(\'Hi\'), 1000)` នឹងប្រតិបត្តិប៉ុន្មានដង?',
      options: [
        'ម្តង',
        'រហូតដល់បញ្ឈប់',
        '3 ដង',
        '10 ដង'
      ],
      correct: 1,
      explanation: '`setInterval` ប្រតិបត្តិរហូតដល់ `clearInterval` ត្រូវបានហៅ។'
    },
    {
      question: 'តើ Parameter ទីមួយនៃ `setTimeout` គឺជាអ្វី?',
      options: ['Function', 'Delay', 'ID', 'Event'],
      correct: 0,
      explanation: 'Parameter ទីមួយគឺ Function ដែលត្រូវប្រតិបត្តិ។'
    },
    {
      question: 'តើកូដ `let id = setTimeout(fn, 1000); clearTimeout(id);` ធ្វើអ្វី?',
      options: [
        'ប្រតិបត្តិ `fn`',
        'បញ្ឈប់ `fn` មុនពេលប្រតិបត្តិ',
        'ប្រតិបត្តិ `fn` រៀងរាល់ 1 វិនាទី',
        'បណ្តាលឱ្យ Error'
      ],
      correct: 1,
      explanation: '`clearTimeout` បញ្ឈប់ `setTimeout` មុនពេលប្រតិបត្តិ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Timers ដើម្បីបង្កើត Stopwatch។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Stopwatch"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "នាឡិកាឈប់"។
   - បន្ថែម \`<p id="time">00:00</p>\` ដើម្បីបង្ហាញពេលវេលា។
   - បន្ថែម \`<button id="start">ចាប់ផ្តើម</button>\`, \`<button id="stop">បញ្ឈប់</button>\`, និង \`<button id="reset">កំណត់ឡើងវិញ</button>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រកាស Variable \`let seconds = 0;\` និង \`let intervalId;\`។
   - ប្រើ \`setInterval\` នៅពេលចុច "ចាប់ផ្តើម" ដើម្បីបង្កើន \`seconds\` រៀងរាល់ 1 វិនាទី។
   - បង្ហាញពេលវេលានៅក្នុង \`<p id="time">\` ជាទម្រង់ \`MM:SS\` (ឧ. "01:23")។
   - ប្រើ \`clearInterval\` នៅពេលចុច "បញ្ឈប់" ដើម្បីបញ្ឈប់នាឡិកា។
   - នៅពេលចុច "កំណត់ឡើងវិញ" កំណត់ \`seconds\` ទៅ 0 និងធ្វើបច្ចុប្បន្នភាព \`<p id="time">\` ទៅ "00:00"។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 24px;\` និង \`color: #333;\` សម្រាប់ \`<p>\`។
     - កំណត់ \`padding: 10px;\` និង \`cursor: pointer;\` សម្រាប់ \`<button>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stopwatch</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 24px;
      color: #333;
    }
    button {
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>នាឡិកាឈប់</h1>
  <p id="time">00:00</p>
  <button id="start">ចាប់ផ្តើម</button>
  <button id="stop">បញ្ឈប់</button>
  <button id="reset">កំណត់ឡើងវិញ</button>
  <script>
    let seconds = 0;
    let intervalId;
    const timeDisplay = document.getElementById('time');

    function updateTime() {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      timeDisplay.textContent = \`\${minutes.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
    }

    document.getElementById('start').addEventListener('click', () => {
      if (!intervalId) {
        intervalId = setInterval(() => {
          seconds++;
          updateTime();
        }, 1000);
      }
    });

    document.getElementById('stop').addEventListener('click', () => {
      clearInterval(intervalId);
      intervalId = null;
    });

    document.getElementById('reset').addEventListener('click', () => {
      clearInterval(intervalId);
      intervalId = null;
      seconds = 0;
      updateTime();
    });
  </script>
</body>
</html>
`
  }
};

export default JSLesson6_4Content;