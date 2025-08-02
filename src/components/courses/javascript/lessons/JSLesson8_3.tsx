import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson8_3Content: LessonContent = {
  title: 'កម្មវិធីអាកាសធាតុ (Weather App)',
  objectives: [
    'រៀនបង្កើតកម្មវិធីអាកាសធាតុដោយប្រើ API',
    'អនុវត្តន៍ការប្រើ Asynchronous JavaScript ជាមួយ `fetch`',
    'ស្វែងយល់អំពីការគ្រប់គ្រង DOM ដើម្បីបង្ហាញទិន្នន័យអាកាសធាតុ',
    'អនុវត្តន៍ការគ្រប់គ្រងកំហុសសម្រាប់ API Requests',
    'រៀនប្រើ Best Practices សម្រាប់កូដ Asynchronous'
  ],
  content: `
# កម្មវិធីអាកាសធាតុ (Weather App) 🌦️

---

**កម្មវិធីអាកាសធាតុ** ប្រើ API ដើម្បីទាញយក និងបង្ហាញព័ត៌មានអាកាសធាតុដោយផ្អែកលើទីក្រុងដែលអ្នកប្រើប្រាស់ ( users )បញ្ចូល។

---

## 1. ការប្រើ \`fetch\` API
ប្រើ \`fetch\` ដើម្បីទាញយកទិន្នន័យពី Weather API។

\`\`\`javascript
async function getWeather(city) {
  const response = await fetch(\`https://api.example.com/weather?q=\${city}\`);
  const data = await response.json();
  return data;
}
\`\`\`

---

## 2. ការគ្រប់គ្រងកំហុស
ប្រើ \`try...catch\` ដើម្បីគ្រប់គ្រងកំហុស API។

\`\`\`javascript
async function getWeather(city) {
  try {
    const response = await fetch(\`https://api.example.com/weather?q=\${city}\`);
    if (!response.ok) throw new Error('មិនអាចទាញយកទិន្នន័យអាកាសធាតុ');
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
\`\`\`

---

## 3. ការបង្ហាញទិន្នន័យ
ធ្វើបច្ចុប្បន្នភាព DOM ដើម្បីបង្ហាញព័ត៌មានអាកាសធាតុ។

\`\`\`javascript
function displayWeather(data) {
  if (data) {
    document.getElementById('weather').textContent = \`\${data.city}: \${data.temp}°C, \${data.description}\`;
  } else {
    document.getElementById('weather').textContent = 'មិនអាចទាញយកទិន្នន័យ';
  }
}
\`\`\`

---

## 4. ការប្រើ Weather App ក្នុងកូដ

**ចំណាំ:** ដោយសារតែ API ពិតប្រាកដតម្រូវឱ្យមាន API Key និងដើម្បីភាពសាមញ្ញ, កូដខាងក្រោមប្រើ Mock Data។

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather App</title>
</head>
<body>
  <h1>កម្មវិធីអាកាសធាតុ</h1>
  <input id="cityInput" type="text" placeholder="បញ្ចូលទីក្រុង">
  <button id="getWeather">ទទួលបានអាកាសធាតុ</button>
  <p id="weather">អាកាសធាតុនឹងបង្ហាញនៅទីនេះ</p>
  <script>
    // Mock Weather API
    async function getWeather(city) {
      try {
        const mockData = {
          'ភ្នំពេញ': { city: 'ភ្នំពេញ', temp: 30, description: 'មេឃស្រឡះ' },
          'សៀមរាប': { city: 'សៀមរាប', temp: 28, description: 'ភ្លៀងស្រាល' }
        };
        if (!mockData[city]) throw new Error('ទីក្រុងមិនត្រូវបានរកឃើញ');
        return mockData[city];
      } catch (error) {
        console.error('កំហុស:', error.message);
        return null;
      }
    }

    function displayWeather(data) {
      const weatherElement = document.getElementById('weather');
      if (data) {
        weatherElement.textContent = \`\${data.city}: \${data.temp}°C, \${data.description}\`;
      } else {
        weatherElement.textContent = 'មិនអាចទាញយកទិន្នន័យ';
      }
    }

    document.getElementById('getWeather').addEventListener('click', async () => {
      const city = document.getElementById('cityInput').value.trim();
      if (city) {
        const data = await getWeather(city);
        displayWeather(data);
      } else {
        document.getElementById('weather').textContent = 'សូមបញ្ចូលទីក្រុង';
      }
    });
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** បញ្ចូលទីក្រុង (ឧ. ភ្នំពេញ) និងចុច "ទទួលបានអាកាសធាតុ" ដើម្បីបង្ហាញព័ត៌មានអាកាសធាតុ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្ហាញទិន្នន័យអាកាសធាតុ</h3>
<p id="exWeather">អាកាសធាតុ: </p>
<button onclick="displayMockWeather()">បង្ហាញ</button>
<script>
  function displayMockWeather() {
    const data = { city: 'ភ្នំពេញ', temp: 30, description: 'មេឃស្រឡះ' };
    document.getElementById('exWeather').textContent = \`\${data.city}: \${data.temp}°C, \${data.description}\`;
  }
</script>
<pre><code class="language-javascript">
function displayMockWeather() {
  const data = { city: 'ភ្នំពេញ', temp: 30, description: 'មេឃស្រឡះ' };
  document.getElementById('exWeather').textContent = \`\${data.city}: \${data.temp}°C, \${data.description}\`;
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការគ្រប់គ្រងកំហុស</h3>
<p id="exWeather2">អាកាសធាតុ: </p>
<button onclick="fetchError()">សាកល្បង</button>
<script>
  async function fetchError() {
    try {
      throw new Error('ទីក្រុងមិនត្រូវបានរកឃើញ');
    } catch (error) {
      document.getElementById('exWeather2').textContent = error.message;
    }
  }
</script>
<pre><code class="language-javascript">
async function fetchError() {
  try {
    throw new Error('ទីក្រុងមិនត្រូវបានរកឃើញ');
  } catch (error) {
    document.getElementById('exWeather2').textContent = error.message;
  }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Weather App?',
      options: [
        'បង្ហាញព័ត៌មានអាកាសធាតុ',
        'ធ្វើប្រមាណវិធី',
        'រក្សាទុកកិច្ចការ',
        'បង្កើត Quiz'
      ],
      correct: 0,
      explanation: 'Weather App បង្ហាញព័ត៌មានអាកាសធាតុដោយប្រើ API។'
    },
    {
      question: 'តើ `fetch` API ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញយកទិន្នន័យពី Server',
        'បន្ថែម Elements',
        'លុប Data',
        'គណនាលេខ'
      ],
      correct: 0,
      explanation: '`fetch` ទាញយកទិន្នន័យពី Server ដូចជា Weather API។'
    },
    {
      question: 'តើ `response.ok` នៅក្នុង `fetch` បញ្ជាក់អ្វី?',
      options: [
        'Status Code ជោគជ័យ (200-299)',
        'Status Code 404',
        'Status Code 500',
        'Error'
      ],
      correct: 0,
      explanation: '`response.ok` បញ្ជាក់ថា Status Code ជោគជ័យ (200-299)។'
    },
    {
      question: 'តើ `try...catch` នៅក្នុង Weather App ជួយអ្វី?',
      options: [
        'គ្រប់គ្រងកំហុស API',
        'បន្ថែម Elements',
        'លុប Data',
        'គណនាលេខ'
      ],
      correct: 0,
      explanation: '`try...catch` គ្រប់គ្រងកំហុស API ដូចជា Network Errors។'
    },
    {
      question: 'តើ `await` ប្រើនៅក្នុង Context ណា?',
      options: [
        'Async Function',
        'Regular Function',
        'Event Listener',
        'Global Scope'
      ],
      correct: 0,
      explanation: '`await` ប្រើនៅក្នុង Async Function សម្រាប់ Promises។'
    },
    {
      question: 'តើកូដ `fetch(url).then(response => response.json())` បញ្ជូនអ្វី?',
      options: [
        'JSON Object',
        'String',
        'Error',
        'Element'
      ],
      correct: 0,
      explanation: '`response.json()` បញ្ជូន JSON Object ពី Response។'
    },
    {
      question: 'តើ Best Practice សម្រាប់ Async Code គឺជាអ្វី?',
      options: [
        'ប្រើ Error Handling',
        'ប្រើ Global Variables',
        'សរសេរកូដវែង',
        'ជៀសវាង Comments'
      ],
      correct: 0,
      explanation: 'Error Handling នៅក្នុង Async Code ការពារកម្មវិធី។'
    },
    {
      question: 'តើកូដ `if (!city) throw new Error(\'សូមបញ្ចូលទីក្រុង\')` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន Error ប្រសិនបើ Input ទទេ',
        'បន្ថែម Element',
        'លុប Data',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: 'វាបញ្ជូន Error ប្រសិនបើ Input ទទេ។'
    },
    {
      question: 'តើការបង្ហាញទិន្នន័យអាកាសធាតុប្រើ Method អ្វី?',
      options: ['textContent', 'appendChild', 'addEventListener', 'fetch'],
      correct: 0,
      explanation: '`textContent` បង្ហាញទិន្នន័យនៅក្នុង Element។'
    },
    {
      question: 'តើ `async/await` មានអត្ថប្រយោជន៍អ្វីជាង `.then`?',
      options: [
        'ធ្វើឱ្យកូដអានងាយស្រួល',
        'បន្ថែម Memory',
        'លុប Data',
        'បន្ថែម Elements'
      ],
      correct: 0,
      explanation: '`async/await` ធ្វើឱ្យកូដ Asynchronous អានងាយស្រួល។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្កើតកម្មវិធីអាកាសធាតុសាមញ្ញដោយប្រើ Mock Data។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Weather App"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "កម្មវិធីអាកាសធាតុ"។
   - បន្ថែម \`<input id="cityInput" type="text" placeholder="បញ្ចូលទីក្រុង">\`។
   - បន្ថែម \`<button id="getWeather">ទទួលបានអាកាសធាតុ</button>\`។
   - បន្ថែម \`<p id="weather">អាកាសធាតុនឹងបង្ហាញនៅទីនេះ</p>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Function \`getWeather\` (Async) ដែល Return Mock Data សម្រាប់ទីក្រុង (ឧ. ភ្នំពេញ, សៀមរាប)។
   - បន្ថែម Error Handling សម្រាប់ទីក្រុងមិនត្រឹមត្រូវ និង Input ទទេ។
   - បង្កើត Function \`displayWeather\` ដើម្បីបង្ហាញទិន្នន័យនៅក្នុង \`<p id="weather">\`។
   - ប្រើ Event Listener សម្រាប់ប៊ូតុង។
   - ប្រើ Descriptive Names និង Comments។

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
  <title>Weather App</title>
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
  <h1>កម្មវិធីអាកាសធាតុ</h1>
  <input id="cityInput" type="text" placeholder="បញ្ចូលទីក្រុង">
  <button id="getWeather">ទទួលបានអាកាសធាតុ</button>
  <p id="weather">អាកាសធាតុនឹងបង្ហាញនៅទីនេះ</p>
  <script>
    // ទាញយកទិន្នន័យអាកាសធាតុ (Mock Data)
    async function getWeather(city) {
      try {
        const mockData = {
          'ភ្នំពេញ': { city: 'ភ្នំពេញ', temp: 30, description: 'មេឃស្រឡះ' },
          'សៀមរាប': { city: 'សៀមរាប', temp: 28, description: 'ភ្លៀងស្រាល' }
        };
        if (!mockData[city]) throw new Error('ទីក្រុងមិនត្រូវបានរកឃើញ');
        return mockData[city];
      } catch (error) {
        console.error('កំហុសក្នុងការទាញយកអាកាសធាតុ:', error.message);
        return null;
      }
    }

    // បង្ហាញទិន្នន័យអាកាសធាតុនៅក្នុង UI
    function displayWeather(data) {
      const weatherElement = document.getElementById('weather');
      if (data) {
        weatherElement.textContent = \`\${data.city}: \${data.temp}°C, \${data.description}\`;
      } else {
        weatherElement.textContent = 'មិនអាចទាញយកទិន្នន័យ';
      }
    }

    // ដោះស្រាយការចុចប៊ូតុង
    document.getElementById('getWeather').addEventListener('click', async () => {
      const cityInput = document.getElementById('cityInput');
      const city = cityInput.value.trim();
      if (city) {
        const data = await getWeather(city);
        displayWeather(data);
        cityInput.value = '';
      } else {
        document.getElementById('weather').textContent = 'សូមបញ្ចូលទីក្រុង';
      }
    });
  </script>
</body>
</html>
`
  }
};

export default JSLesson8_3Content;