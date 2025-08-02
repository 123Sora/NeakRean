import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson6_1Content: LessonContent = {
  title: 'Fetch API',
  objectives: [
    'យល់ដឹងអំពី Fetch API និងសារៈសំខាន់របស់វា',
    'រៀនប្រើ `fetch` ដើម្បីធ្វើ HTTP Requests',
    'ស្វែងយល់អំពីការគ្រប់គ្រង Responses និង JSON Data',
    'អនុវត្តន៍ការប្រើ Fetch API ជាមួយ Async/Await',
    'រៀនគ្រប់គ្រង Errors នៅក្នុង Fetch API'
  ],
  content: `
# Fetch API 🌐

---

**Fetch API** គឺជាចំណុចប្រទាក់ ( Interface ) សម្រាប់ធ្វើ HTTP Requests (ឧ. GET, POST) និងទទួល Responses ពី Server។ វាជំនួស \`XMLHttpRequest\` ដោយផ្តល់នូវ Syntax ដ៏សាមញ្ញ។

---

## 1. ការប្រើ \`fetch\`
\`fetch\` Return Promise ដែល Resolve ទៅជា Response Object។

\`\`\`javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('កំហុស:', error));
\`\`\`

---

## 2. ការប្រើ \`fetch\` ជាមួយ Async/Await
Async/Await ធ្វើឱ្យកូដមើលទៅសាមញ្ញជាង។

\`\`\`javascript
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('កំហុស:', error);
  }
}
getData();
\`\`\`

---

## 3. ការគ្រប់គ្រង Responses
Response Object មាន Properties ដូចជា \`status\`, \`ok\`, និង Methods ដូចជា \`json()\`។

\`\`\`javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) throw new Error('Network response មិនជោគជ័យ');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('កំហុស:', error));
\`\`\`

---

## 4. POST Requests
ប្រើ \`fetch\` ជាមួយ Method \`POST\` ដើម្បីផ្ញើ Data។

\`\`\`javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'ឈ្មោះ' })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('កំហុស:', error));
\`\`\`

---

## 5. ការប្រើ Fetch API ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch API</title>
</head>
<body>
  <h1>សាកល្បង Fetch API</h1>
  <p id="output">កំពុងផ្ទុក...</p>
  <script>
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        document.getElementById('output').textContent = data.title;
      } catch (error) {
        document.getElementById('output').textContent = 'កំហុស: ' + error.message;
      }
    }
    fetchData();
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** \`<p>\` បង្ហាញ Title នៃ Post ពី API។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ GET Request</h3>
<p id="example1">កំពុងផ្ទុក...</p>
<script>
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
      document.getElementById('example1').textContent = data.title;
    });
</script>
<pre><code class="language-javascript">
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    document.getElementById('example1').textContent = data.title;
  });
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Async/Await</h3>
<p id="example2">កំពុងផ្ទុក...</p>
<script>
  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data = await response.json();
    document.getElementById('example2').textContent = data.title;
  }
  fetchData();
</script>
<pre><code class="language-javascript">
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const data = await response.json();
  document.getElementById('example2').textContent = data.title;
}
fetchData();
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Fetch API គឺជាអ្វី?',
      options: [
        'Function សម្រាប់គណនា',
        'API សម្រាប់ HTTP Requests',
        'Object សម្រាប់ DOM',
        'CSS Framework'
      ],
      correct: 1,
      explanation: 'Fetch API គឺជាចំណុចប្រទាក់សម្រាប់ធ្វើ HTTP Requests។'
    },
    {
      question: 'តើ `fetch` Return អ្វី?',
      options: ['String', 'Promise', 'Array', 'Object'],
      correct: 1,
      explanation: '`fetch` Return Promise ដែល Resolve ទៅ Response Object។'
    },
    {
      question: 'តើ Method ណាមួយបម្លែង Response ទៅ JSON?',
      options: ['text()', 'json()', 'blob()', 'formData()'],
      correct: 1,
      explanation: '`json()` បម្លែង Response Body ទៅ JSON។'
    },
    {
      question: 'តើ Property ណាមួយបញ្ជាក់ថា Response ជោគជ័យ?',
      options: ['status', 'ok', 'headers', 'body'],
      correct: 1,
      explanation: 'Property `ok` បញ្ជាក់ថា Response ជោគជ័យ (status 200-299)។'
    },
    {
      question: 'តើកូដ `fetch(url).then(response => response.json())` ធ្វើអ្វី?',
      options: [
        'ផ្ញើ POST Request',
        'ទាញ Data និងបម្លែងទៅ JSON',
        'បន្ថែម Element',
        'លុប Data'
      ],
      correct: 1,
      explanation: 'វាទាញ Data និងបម្លែង Response ទៅ JSON។'
    },
    {
      question: 'តើ Header `Content-Type: application/json` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជាក់ប្រភេទ Data នៃ Body',
        'កំណត់ URL',
        'ផ្លាស់ប្តូរ Response',
        'បញ្ឈប់ Request'
      ],
      correct: 0,
      explanation: 'Header នេះបញ្ជាក់ថា Body ជា JSON។'
    },
    {
      question: 'តើកូដ `await fetch(url)` ត្រូវការអ្វី?',
      options: [
        'Regular Function',
        'Async Function',
        'Promise',
        'Callback'
      ],
      correct: 1,
      explanation: '`await` ត្រូវការនៅក្នុង Async Function។'
    },
    {
      question: 'តើ Method ណាមួយប្រើសម្រាប់ POST Request?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correct: 1,
      explanation: '`POST` ប្រើសម្រាប់ផ្ញើ Data ទៅ Server។'
    },
    {
      question: 'តើ `response.status` បញ្ជូនអ្វី?',
      options: [
        'HTTP Status Code',
        'JSON Data',
        'Headers',
        'URL'
      ],
      correct: 0,
      explanation: '`response.status` បញ្ជូន HTTP Status Code (ឧ. 200, 404)។'
    },
    {
      question: 'តើកូដ `fetch(url).catch(error => console.error(error))` ធ្វើអ្វី?',
      options: [
        'ផ្ញើ Data',
        'គ្រប់គ្រង Errors',
        'បម្លែង JSON',
        'បន្ថែម Element'
      ],
      correct: 1,
      explanation: '`.catch` គ្រប់គ្រង Errors ពី `fetch`។'
    },
    {
      question: 'តើ `JSON.stringify` ប្រើសម្រាប់អ្វីនៅក្នុង POST Request?',
      options: [
        'បម្លែង JSON ទៅ String',
        'បម្លែង String ទៅ JSON',
        'ផ្ញើ Response',
        'លុប Data'
      ],
      correct: 0,
      explanation: '`JSON.stringify` បម្លែង Object ទៅ JSON String សម្រាប់ Body។'
    },
    {
      question: 'តើកូដ `if (!response.ok) throw new Error("Error")` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន Response',
        'ពិនិត្យ Response ជោគជ័យ',
        'បន្ថែម Data',
        'លុប Response'
      ],
      correct: 1,
      explanation: 'វាពិនិត្យថា Response ជោគជ័យឬអត់។'
    },
    {
      question: 'តើ Fetch API អាចប្រើជាមួយ HTTPS URLs បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Chrome', 'បានតែក្នុង Node.js'],
      correct: 0,
      explanation: 'Fetch API អាចប្រើជាមួយ HTTPS URLs។'
    },
    {
      question: 'តើ Method `response.text()` បញ្ជូនអ្វី?',
      options: [
        'JSON Object',
        'Text String',
        'Blob',
        'Form Data'
      ],
      correct: 1,
      explanation: '`response.text()` បញ្ជូន Response Body ជា String។'
    },
    {
      question: 'តើ Fetch API គឺជាជំនួសអ្វី?',
      options: ['jQuery', 'XMLHttpRequest', 'Axios', 'Node.js'],
      correct: 1,
      explanation: 'Fetch API ជំនួស `XMLHttpRequest` ដោយ Syntax សាមញ្ញ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Fetch API ដើម្បីទាញនិងបង្ហាញ Post Title ពី JSONPlaceholder API។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Fetch Post"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "ទាញ Post ពី API"។
   - បន្ថែម \`<p id="post-title">កំពុងផ្ទុក...</p>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រើ \`fetch\` និង Async/Await ដើម្បីទាញ Data ពី \`https://jsonplaceholder.typicode.com/posts/1\`។
   - បង្ហាញ \`title\` នៃ Post នៅក្នុង \`<p id="post-title">\`។
   - គ្រប់គ្រង Errors ដោយបង្ហាញ "កំហុស: មិនអាចទាញ Data" ប្រសិនបើ Request បរាជ័យ។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`<p>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch Post</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>ទាញ Post ពី API</h1>
  <p id="post-title">កំពុងផ្ទុក...</p>
  <script>
    async function fetchPost() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) throw new Error('មិនអាចទាញ Data');
        const data = await response.json();
        document.getElementById('post-title').textContent = data.title;
      } catch (error) {
        document.getElementById('post-title').textContent = 'កំហុស: ' + error.message;
      }
    }
    fetchPost();
  </script>
</body>
</html>
`
  }
};

export default JSLesson6_1Content;