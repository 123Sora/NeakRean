import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson8_4Content: LessonContent = {
  title: 'ហ្គេមសំណួរសាមញ្ញ (Basic Quiz Game)',
  objectives: [
    'រៀនបង្កើតហ្គេមសំណួរអន្តរកម្ម',
    'អនុវត្តន៍ការគ្រប់គ្រង DOM ដើម្បីបង្ហាញសំណួរ និងលទ្ធផល',
    'ស្វែងយល់អំពីការប្រើ Event Listeners សម្រាប់ការជ្រើសរើសចម្លើយ',
    'អនុវត្តន៍ការគ្រប់គ្រង State សម្រាប់តាមដានពិន្ទុ និងសំណួរ',
    'រៀនប្រើ Best Practices សម្រាប់កូដ'
  ],
  content: `
# ហ្គេមសំណួរសាមញ្ញ (Basic Quiz Game) 🎮

---

**ហ្គេមសំណួរ** អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ ( users )ឆ្លើយសំណួរ និងតាមដានពិន្ទុ។ វាប្រើ DOM Manipulation និង Event Listeners ដើម្បីបង្កើតបទពិសោធន៍អន្តរកម្ម។

---

## 1. ការបង្ហាញសំណួរ
បង្ហាញសំណួរ និងជម្រើសចម្លើយនៅក្នុង DOM ដោយប្រើ \`<p>\` និង \`<button>\`។

\`\`\`javascript
const question = {
  text: '១+១=?',
  options: ['២', '៣', '៤', '៥'],
  correct: 0
};

function displayQuestion(q) {
  document.getElementById('question').textContent = q.text;
  const optionsElement = document.getElementById('options');
  optionsElement.innerHTML = '';
  q.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(index, q.correct));
    optionsElement.appendChild(button);
  });
}
\`\`\`

---

## 2. ការពិនិត្យចម្លើយ
ប្រៀបធៀបជម្រើសរបស់អ្នកប្រើប្រាស់ ( users )ជាមួយចម្លើយត្រឹមត្រូវ និងធ្វើបច្ចុប្បន្នភាពពិន្ទុ។

\`\`\`javascript
function checkAnswer(selectedIndex, correctIndex) {
  if (selectedIndex === correctIndex) {
    score++;
    document.getElementById('result').textContent = 'ត្រឹមត្រូវ!';
  } else {
    document.getElementById('result').textContent = 'ខុស! ចម្លើយត្រឹមត្រូវគឺ: ' + questions[currentQuestion].options[correctIndex];
  }
}
\`\`\`

---

## 3. ការគ្រប់គ្រង State
ប្រើ Variables ដើម្បីតាមដានសំណួរបច្ចុប្បន្ន និងពិន្ទុ។

\`\`\`javascript
let currentQuestion = 0;
let score = 0;

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion(questions[currentQuestion]);
  } else {
    document.getElementById('question').textContent = 'ហ្គេមបញ្ចប់!';
    document.getElementById('options').innerHTML = '';
    document.getElementById('result').textContent = \`ពិន្ទុរបស់អ្នក: \${score}/\${questions.length}\`;
  }
}
\`\`\`

---

## 4. ការប្រើ Best Practices
- បែងចែកកូដទៅជា Functions ដែលមានទំនួលខុសត្រូវតែមួយ។
- ប្រើ Descriptive Names និង Comments។
- ប្រើ \`const\` សម្រាប់ Data ដែលមិនផ្លាស់ប្តូរ (ឧ. Array សំណួរ)។

---

## 5. ការប្រើ Quiz Game ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Quiz Game</title>
</head>
<body>
  <h1>ហ្គេមសំណួរសាមញ្ញ</h1>
  <p id="question">សំណួរនឹងបង្ហាញនៅទីនេះ</p>
  <div id="options"></div>
  <p id="result"></p>
  <button id="nextBtn" style="display: none;">សំណួរបន្ទាប់</button>
  <script>
    const questions = [
      { text: '១+១=?', options: ['២', '៣', '៤', '៥'], correct: 0 },
      { text: 'រដ្ឋធានីកម្ពុជា?', options: ['ភ្នំពេញ', 'សៀមរាប', 'បាត់ដំបង', 'កំពត'], correct: 0 },
      { text: '៥*៣=?', options: ['១២', '១៥', '១៨', '២០'], correct: 1 }
    ];

    let currentQuestion = 0;
    let score = 0;

    function displayQuestion(q) {
      document.getElementById('question').textContent = q.text;
      const optionsElement = document.getElementById('options');
      optionsElement.innerHTML = '';
      q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index, q.correct));
        optionsElement.appendChild(button);
      });
      document.getElementById('nextBtn').style.display = 'block';
    }

    function checkAnswer(selectedIndex, correctIndex) {
      if (selectedIndex === correctIndex) {
        score++;
        document.getElementById('result').textContent = 'ត្រឹមត្រូវ!';
      } else {
        document.getElementById('result').textContent = \`ខុស! ចម្លើយត្រឹមត្រូវគឺ: \${questions[currentQuestion].options[correctIndex]}\`;
      }
      document.getElementById('options').innerHTML = '';
    }

    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion(questions[currentQuestion]);
        document.getElementById('result').textContent = '';
      } else {
        document.getElementById('question').textContent = 'ហ្គេមបញ្ចប់!';
        document.getElementById('options').innerHTML = '';
        document.getElementById('result').textContent = \`ពិន្ទុរបស់អ្នក: \${score}/\${questions.length}\`;
        document.getElementById('nextBtn').style.display = 'none';
      }
    }

    document.getElementById('nextBtn').addEventListener('click', nextQuestion);

    // ចាប់ផ្តើមហ្គេម
    displayQuestion(questions[currentQuestion]);
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** ចុចជម្រើសចម្លើយ និង "សំណួរបន្ទាប់" ដើម្បីបន្ត ហើយមើលពិន្ទុនៅចុងបញ្ចប់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្ហាញសំណួរ</h3>
<p id="exQuestion">១+១=?</p>
<div id="exOptions"></div>
<script>
  const question = { text: '១+១=?', options: ['២', '៣', '៤', '៥'], correct: 0 };
  const exOptions = document.getElementById('exOptions');
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    exOptions.appendChild(button);
  });
</script>
<pre><code class="language-javascript">
const question = { text: '១+១=?', options: ['២', '៣', '៤', '៥'], correct: 0 };
const exOptions = document.getElementById('exOptions');
question.options.forEach(option => {
  const button = document.createElement('button');
  button.textContent = option;
  exOptions.appendChild(button);
});
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ពិនិត្យចម្លើយ</h3>
<p id="exResult">ចុចដើម្បីសាកល្បង</p>
<button onclick="checkExAnswer()">២</button>
<script>
  function checkExAnswer() {
    document.getElementById('exResult').textContent = 'ត្រឹមត្រូវ!';
  }
</script>
<pre><code class="language-javascript">
function checkExAnswer() {
  document.getElementById('exResult').textContent = 'ត្រឹមត្រូវ!';
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Basic Quiz Game?',
      options: [
        'អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ ( users )ឆ្លើយសំណួរ និងតាមដានពិន្ទុ',
        'ទាញយកទិន្នន័យអាកាសធាតុ',
        'ធ្វើប្រមាណវិធី',
        'រក្សាទុកកិច្ចការ'
      ],
      correct: 0,
      explanation: 'Basic Quiz Game អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ ( users )ឆ្លើយសំណួរ និងតាមដានពិន្ទុ។'
    },
    {
      question: 'តើ Method ណាមួយបន្ថែម Element ទៅ DOM?',
      options: ['appendChild', 'remove', 'addEventListener', 'getElementById'],
      correct: 0,
      explanation: '`appendChild` បន្ថែម Element ទៅ DOM។'
    },
    {
      question: 'តើ `forEach` Method ប្រើសម្រាប់អ្វីនៅក្នុង Quiz Game?',
      options: [
        'បង្ហាញជម្រើសចម្លើយ',
        'លុប Elements',
        'ផ្ញើ Request',
        'គណនាលេខ'
      ],
      correct: 0,
      explanation: '`forEach` ប្រើដើម្បីបង្ហាញជម្រើសចម្លើយសម្រាប់សំណួរ។'
    },
    {
      question: 'តើ Variable `score` នៅក្នុង Quiz Game តាមដានអ្វី?',
      options: [
        'ចំនួនចម្លើយត្រឹមត្រូវ',
        'ចំនួនសំណួរ',
        'ទីក្រុង',
        'លទ្ធផលអាកាសធាតុ'
      ],
      correct: 0,
      explanation: '`score` តាមដានចំនួនចម្លើយត្រឹមត្រូវ។'
    },
    {
      question: 'តើ `addEventListener` នៅក្នុង Quiz Game ដោះស្រាយអ្វី?',
      options: [
        'ការចុចជម្រើសចម្លើយ',
        'រក្សាទុក Data',
        'បង្កើត Animation',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: '`addEventListener` ដោះស្រាយការចុចជម្រើសចម្លើយ។'
    },
    {
      question: 'តើ Best Practice នៅក្នុង Quiz Game គឺជាអ្វី?',
      options: [
        'បែងចែកកូដទៅជា Functions',
        'ប្រើ Global Variables',
        'សរសេរកូដវែង',
        'ជៀសវាង Comments'
      ],
      correct: 0,
      explanation: 'បែងចែកកូដទៅជា Functions ធ្វើឱ្យកូដងាយស្រួលថែទាំ។'
    },
    {
      question: "តើកូដ `document.getElementById('options').innerHTML = ''` ធ្វើអ្វី?",
      options: [
        'ជម្រះ Elements ក្នុង `<div>`',
        'បន្ថែម Element',
        'ផ្ញើ Request',
        'គណនាលេខ'
      ],
      correct: 0,
      explanation: "`innerHTML = ''` ជម្រះ Elements ក្នុង `<div>`។"
    },
    {
      question: 'តើ `const` នៅក្នុង Array សំណួរជួយអ្វី?',
      options: [
        'ការពារការផ្លាស់ប្តូរ Array',
        'បន្ថែម Elements',
        'លុប Data',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: '`const` ការពារការផ្លាស់ប្តូរ Array ដើម្បីកាត់បន្ថយកំហុស។'
    },
    {
      question: 'តើកូដ `if (currentQuestion < questions.length)` ពិនិត្យអ្វី?',
      options: [
        'ថាតើមានសំណួរបន្ទាប់',
        'ថាតើ Input ត្រឹមត្រូវ',
        'ថាតើ Data ត្រូវបានរក្សាទុក',
        'ថាតើ Request ជោគជ័យ'
      ],
      correct: 0,
      explanation: 'វាពិនិត្យថាតើមានសំណួរបន្ទាប់នៅក្នុង Array។'
    },
    {
      question: 'តើការបង្ហាញលទ្ធផលនៅចុងបញ្ចប់ប្រើ Method អ្វី?',
      options: ['textContent', 'appendChild', 'addEventListener', 'fetch'],
      correct: 0,
      explanation: '`textContent` បង្ហាញលទ្ធផលនៅក្នុង Element។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្កើតហ្គេមសំណួរសាមញ្ញ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Basic Quiz Game"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "ហ្គេមសំណួរសាមញ្ញ"។
   - បន្ថែម \`<p id="question">សំណួរនឹងបង្ហាញនៅទីនេះ</p>\`។
   - បន្ថែម \`<div id="options"></div>\` សម្រាប់ជម្រើសចម្លើយ។
   - បន្ថែម \`<p id="result"></p>\` សម្រាប់បង្ហាញលទ្ធផល។
   - បន្ថែម \`<button id="nextBtn" style="display: none;">សំណួរបន្ទាប់</button>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Array \`questions\` ដែលមានយ៉ាងហោចណាស់ 3 សំណួរ ដែលនីមួយៗមាន \`text\`, \`options\`, និង \`correct\` (Index នៃចម្លើយត្រឹមត្រូវ)។
   - បង្កើត Function \`displayQuestion\` ដើម្បីបង្ហាញសំណួរ និងជម្រើសចម្លើយជា \`<button>\`។
   - បង្កើត Function \`checkAnswer\` ដើម្បីពិនិត្យចម្លើយ និងធ្វើបច្ចុប្បន្នភាពពិន្ទុ។
   - បង្កើត Function \`nextQuestion\` ដើម្បីប្តូរទៅសំណួរបន្ទាប់ ឬបង្ហាញពិន្ទុនៅចុងបញ្ចប់។
   - ប្រើ Event Listeners សម្រាប់ជម្រើសចម្លើយ និងប៊ូតុង "សំណួរបន្ទាប់"។
   - ប្រើ Descriptive Names និង Comments។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`<p>\`។
     - កំណត់ \`padding: 10px;\` និង \`cursor: pointer;\` សម្រាប់ \`<button>\`។
     - កំណត់ \`margin: 5px;\` សម្រាប់ \`<button>\` នៅក្នុង \`<div id="options">\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Quiz Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: #333;
    }
    #options button {
      padding: 10px;
      cursor: pointer;
      margin: 5px;
    }
  </style>
</head>
<body>
  <h1>ហ្គេមសំណួរសាមញ្ញ</h1>
  <p id="question">សំណួរនឹងបង្ហាញនៅទីនេះ</p>
  <div id="options"></div>
  <p id="result"></p>
  <button id="nextBtn" style="display: none;">សំណួរបន្ទាប់</button>
  <script>
    // បញ្ជីសំណួរ
    const questions = [
      {
        text: '១+១=?',
        options: ['២', '៣', '៤', '៥'],
        correct: 0
      },
      {
        text: 'រដ្ឋធានីកម្ពុជា?',
        options: ['ភ្នំពេញ', 'សៀមរាប', 'បាត់ដំបង', 'កំពត'],
        correct: 0
      },
      {
        text: '៥*៣=?',
        options: ['១២', '១៥', '១៨', '២០'],
        correct: 1
      }
    ];

    let currentQuestion = 0;
    let score = 0;

    // បង្ហាញសំណួរ និងជម្រើសចម្លើយ
    function displayQuestion(q) {
      const questionElement = document.getElementById('question');
      const optionsElement = document.getElementById('options');
      questionElement.textContent = q.text;
      optionsElement.innerHTML = '';
      q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index, q.correct));
        optionsElement.appendChild(button);
      });
      document.getElementById('nextBtn').style.display = 'block';
      document.getElementById('result').textContent = '';
    }

    // ពិនិត្យចម្លើយ
    function checkAnswer(selectedIndex, correctIndex) {
      const resultElement = document.getElementById('result');
      if (selectedIndex === correctIndex) {
        score++;
        resultElement.textContent = 'ត្រឹមត្រូវ!';
      } else {
        resultElement.textContent = \`ខុស! ចម្លើយត្រឹមត្រូវគឺ: \${questions[currentQuestion].options[correctIndex]}\`;
      }
      document.getElementById('options').innerHTML = ''; // ជម្រះជម្រើស
    }

    // ប្តូរទៅសំណួរបន្ទាប់
    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion(questions[currentQuestion]);
      } else {
        document.getElementById('question').textContent = 'ហ្គេមបញ្ចប់!';
        document.getElementById('options').innerHTML = '';
        document.getElementById('result').textContent = \`ពិន្ទុរបស់អ្នក: \${score}/\${questions.length}\`;
        document.getElementById('nextBtn').style.display = 'none';
      }
    }

    // ដោះស្រាយការចុចប៊ូតុង "សំណួរបន្ទាប់"
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);

    // ចាប់ផ្តើមហ្គេម
    displayQuestion(questions[currentQuestion]);
  </script>
</body>
</html>
`
  }
};

export default JSLesson8_4Content;