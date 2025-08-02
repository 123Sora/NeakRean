import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson7_2Content: LessonContent = {
  title: 'Closures',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Closures នៅក្នុង JavaScript',
    'រៀនបង្កើត Functions ដែលប្រើ Closures',
    'ស្វែងយល់អំពី Lexical Scope និង Variable Lifetime',
    'អនុវត្តន៍ការប្រើ Closures សម្រាប់ Data Privacy',
    'រៀនប្រើ Closures ក្នុង Practical Applications'
  ],
  content: `
# Closures 🔒

---

**Closures** គឺជា Function ដែលចងចាំ Environment (Lexical Scope) ដែលវាត្រូវបានបង្កើត ទោះបី Function នោះត្រូវបានប្រតិបត្តិនៅ Scope ផ្សេងក៏ដោយ។

---

## 1. ការយល់ដឹងអំពី Closures
Closure កើតឡើងនៅពេល Function ខាងក្នុងចូលប្រើ Variables ពី Function ខាងក្រៅ។

\`\`\`javascript
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const counter = outer();
counter(); // 1
counter(); // 2
\`\`\`

---

## 2. Lexical Scope
Closure រក្សា Variable Scope ពី Function ខាងក្រៅ។

\`\`\`javascript
function createGreeter(name) {
  return function() {
    console.log(\`សួស្តី \${name}!\`);
  };
}
const greet = createGreeter('ឈ្មោះ');
greet(); // សួស្តី ឈ្មោះ!
\`\`\`

---

## 3. Data Privacy
Closures អនុញ្ញាតឱ្យលាក់ Variables ដើម្បីការពារការចូលប្រើពីខាងក្រៅ។

\`\`\`javascript
function createCounter() {
  let count = 0;
  return {
    increment: function() { count++; return count; },
    getCount: function() { return count; }
  };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
console.log(counter.count); // undefined
\`\`\`

---

## 4. Practical Applications
Closures ត្រូវបានប្រើក្នុង Event Listeners, Modules, និង Callbacks។

\`\`\`javascript
function setupButton(id) {
  let clicks = 0;
  document.getElementById(id).addEventListener('click', () => {
    clicks++;
    console.log(\`ចុច: \${clicks}\`);
  });
}
\`\`\`

---

## 5. ការប្រើ Closures ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Closures</title>
</head>
<body>
  <h1>សាកល្បង Closures</h1>
  <button id="clickMe">ចុចខ្ញុំ</button>
  <p id="output">ចុច: 0</p>
  <script>
    function setupCounter(id) {
      let count = 0;
      document.getElementById(id).addEventListener('click', () => {
        count++;
        document.getElementById('output').textContent = \`ចុច: \${count}\`;
      });
    }
    setupCounter('clickMe');
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** ចុច Button នឹងបង្កើនចំនួនចុចនៅក្នុង \`<p>\`។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Counter Closure</h3>
<p id="example1">ចុច: 0</p>
<button onclick="counter1()">ចុចខ្ញុំ</button>
<script>
  const counter1 = (function() {
    let count = 0;
    return function() {
      count++;
      document.getElementById('example1').textContent = \`ចុច: \${count}\`;
    };
  })();
</script>
<pre><code class="language-javascript">
const counter1 = (function() {
  let count = 0;
  return function() {
    count++;
    document.getElementById('example1').textContent = \`ចុច: \${count}\`;
  };
})();
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Data Privacy</h3>
<p id="example2">ចុច: 0</p>
<button onclick="counter2.increment()">ចុចខ្ញុំ</button>
<script>
  const counter2 = (function() {
    let count = 0;
    return {
      increment: function() { count++; document.getElementById('example2').textContent = \`ចុច: \${count}\`; }
    };
  })();
</script>
<pre><code class="language-javascript">
const counter2 = (function() {
  let count = 0;
  return {
    increment: function() { count++; document.getElementById('example2').textContent = \`ចុច: \${count}\`; }
  };
})();
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Closure គឺជាអ្វី?',
      options: [
        'Function ដែលចងចាំ Scope របស់វា',
        'Variable ក្នុង Function',
        'Object ដែលមាន Methods',
        'Loop ក្នុង JavaScript'
      ],
      correct: 0,
      explanation: 'Closure គឺជា Function ដែលចងចាំ Lexical Scope របស់វា។'
    },
    {
      question: 'តើ Closure អនុញ្ញាតឱ្យធ្វើអ្វី?',
      options: [
        'ចូលប្រើ Variables ពី Outer Scope',
        'បន្ថែម Element ទៅ DOM',
        'ផ្ញើ HTTP Request',
        'លុប Data'
      ],
      correct: 0,
      explanation: 'Closure អនុញ្ញាតឱ្យ Function ចូលប្រើ Variables ពី Outer Scope។'
    },
    {
      question: 'តើ Lexical Scope គឺជាអ្វី?',
      options: [
        'Scope នៃ Browser',
        'Scope ដែល Function ត្រូវបានបង្កើត',
        'Scope នៃ Global Object',
        'Scope នៃ Event'
      ],
      correct: 1,
      explanation: 'Lexical Scope គឺជា Scope ដែល Function ត្រូវបានបង្កើត។'
    },
    {
      question: 'តើ Closures ត្រូវបានប្រើសម្រាប់អ្វីជាទូទៅ?',
      options: [
        'Data Privacy និង Event Listeners',
        'HTTP Requests',
        'DOM Manipulation',
        'Storage'
      ],
      correct: 0,
      explanation: 'Closures ត្រូវបានប្រើសម្រាប់ Data Privacy, Modules, និង Event Listeners។'
    },
    {
      question: 'តើកូដ `function outer() { let x = 1; return function() { return x; } }` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន 1',
        'បញ្ជូន undefined',
        'បណ្តាលឱ្យ Error',
        'បន្ថែម Element'
      ],
      correct: 0,
      explanation: 'Inner Function ចងចាំ `x` ពី Outer Scope និងបញ្ជូន 1។'
    },
    {
      question: 'តើ Closures អាចប្រើដើម្បីលាក់ Data បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Chrome', 'បានតែក្នុង Node.js'],
      correct: 0,
      explanation: 'Closures អនុញ្ញាតឱ្យលាក់ Data ដើម្បីការពារការចូលប្រើពីខាងក្រៅ។'
    },
    {
      question: 'តើកូដ `(function() { let x = 0; return () => x++; })()` បញ្ជូនអ្វី?',
      options: [
        'Function ដែលបង្កើន x',
        'Number 0',
        'undefined',
        'Error'
      ],
      correct: 0,
      explanation: 'IIFE បញ្ជូន Function ដែលបង្កើន `x` ដោយរក្សា Scope។'
    },
    {
      question: 'តើ Closures មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'រក្សាទុក Variable Lifetime',
        'បញ្ឈប់ Function',
        'បន្ថែម Element',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: 'Closures រក្សាទុក Variable Lifetime នៅក្នុង Memory។'
    },
    {
      question: 'តើកូដ `let fn = outer(); fn();` នឹងប្រតិបត្តិ Function ណា?',
      options: [
        'Outer Function',
        'Inner Function',
        'Global Function',
        'Anonymous Function'
      ],
      correct: 1,
      explanation: '`outer()` បញ្ជូន Inner Function ដែលជា Closure។'
    },
    {
      question: 'តើ Closures អាចប្រើជាមួយ Event Listeners បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Chrome', 'បានតែក្នុង Firefox'],
      correct: 0,
      explanation: 'Closures ត្រូវបានប្រើជាទូទៅជាមួយ Event Listeners។'
    },
    {
      question: 'តើកូដ `function outer() { let x = 1; return () => x; }` នឹងបញ្ជូនអ្វី?',
      options: [
        'Function ដែលបញ្ជូន 1',
        'Number 1',
        'undefined',
        'Error'
      ],
      correct: 0,
      explanation: 'Inner Function ជា Closure ដែលបញ្ជូន `x`។'
    },
    {
      question: 'តើ Closures មានឥទ្ធិពលលើ Memory យ៉ាងដូចម្តេច?',
      options: [
        'រក្សា Variables ក្នុង Memory',
        'លុប Variables',
        'បញ្ឈប់ Memory',
        'បន្ថែម Memory'
      ],
      correct: 0,
      explanation: 'Closures រក្សា Variables ក្នុង Memory ដរាបណា Closure នៅសកម្ម។'
    },
    {
      question: 'តើ Closures អាចបង្កើត Modules បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Node.js', 'បានតែក្នុង Browser'],
      correct: 0,
      explanation: 'Closures ត្រូវបានប្រើដើម្បីបង្កើត Modules ជាមួយ Data Privacy។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Closures ដើម្បីបង្កើត Counter ដែលមាន Data Privacy។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Counter with Closure"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "Counter ដោយ Closure"។
   - បន្ថែម \`<button id="increment">បង្កើន</button>\` និង \`<button id="reset">កំណត់ឡើងវិញ</button>\`។
   - បន្ថែម \`<p id="output">ចំនួន: 0</p>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Function \`createCounter\` ដែលបញ្ជូន Object ជាមួយ Methods \`increment\` និង \`reset\`។
   - ប្រើ Closure ដើម្បីរក្សាទុក Variable \`count\` ដែលមិនអាចចូលប្រើពីខាងក្រៅ។
   - \`increment\` បង្កើន \`count\` និងធ្វើបច្ចុប្បន្នភាព \`<p id="output">\`។
   - \`reset\` កំណត់ \`count\` ទៅ 0 និងធ្វើបច្ចុប្បន្នភាព \`<p id="output">\`។

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
  <title>Counter with Closure</title>
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
  <h1>Counter ដោយ Closure</h1>
  <button id="increment">បង្កើន</button>
  <button id="reset">កំណត់ឡើងវិញ</button>
  <p id="output">ចំនួន: 0</p>
  <script>
    function createCounter() {
      let count = 0;
      return {
        increment: function() {
          count++;
          document.getElementById('output').textContent = \`ចំនួន: \${count}\`;
        },
        reset: function() {
          count = 0;
          document.getElementById('output').textContent = \`ចំនួន: \${count}\`;
        }
      };
    }
    const counter = createCounter();
    document.getElementById('increment').addEventListener('click', counter.increment);
    document.getElementById('reset').addEventListener('click', counter.reset);
  </script>
</body>
</html>
`
  }
};

export default JSLesson7_2Content;