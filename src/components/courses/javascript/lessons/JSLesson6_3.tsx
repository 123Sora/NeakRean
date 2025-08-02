import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson6_3Content: LessonContent = {
  title: 'Geolocation API',
  objectives: [
    'យល់ដឹងអំពី Geolocation API និងការប្រើប្រាស់របស់វា',
    'រៀនប្រើ `navigator.geolocation` ដើម្បីទទួលបានទីតាំង',
    'ស្វែងយល់អំពី Position Object និង Coordinates',
    'អនុវត្តន៍ការបង្ហាញទីតាំងរបស់អ្នកប្រើ',
    'រៀនគ្រប់គ្រង Errors និង Permissions'
  ],
  content: `
# Geolocation API 📍

---

**Geolocation API** អនុញ្ញាតឱ្យ Browser ទទួលបានទីតាំងរបស់អ្នកប្រើ (ឧ. Latitude, Longitude) ប្រសិនបើអ្នកប្រើអនុញ្ញាត។

---

## 1. ការប្រើ \`navigator.geolocation\`
\`navigator.geolocation.getCurrentPosition\` ទទួលបានទីតាំងបច្ចុប្បន្ន។

\`\`\`javascript
navigator.geolocation.getCurrentPosition(
  position => {
    console.log(position.coords.latitude, position.coords.longitude);
  },
  error => {
    console.error('កំហុស:', error.message);
  }
);
\`\`\`

---

## 2. Position Object
Position Object មាន Properties ដូចជា \`coords\` (Coordinates) និង \`timestamp\`។

\`\`\`javascript
navigator.geolocation.getCurrentPosition(position => {
  console.log('Latitude:', position.coords.latitude);
  console.log('Longitude:', position.coords.longitude);
  console.log('Accuracy:', position.coords.accuracy);
});
\`\`\`

---

## 3. Error Handling
Geolocation API អាចបញ្ជូន Errors ដូចជា Permission Denied។

\`\`\`javascript
navigator.geolocation.getCurrentPosition(
  position => {
    console.log('ទីតាំង:', position.coords);
  },
  error => {
    if (error.code === error.PERMISSION_DENIED) {
      console.error('អ្នកប្រើបដិសេធការចូលប្រើទីតាំង');
    }
  }
);
\`\`\`

---

## 4. Watching Position
\`watchPosition\` តាមដានទីតាំងជាបន្តបន្ទាប់។

\`\`\`javascript
let watchId = navigator.geolocation.watchPosition(position => {
  console.log('ទីតាំងថ្មី:', position.coords.latitude);
});
// navigator.geolocation.clearWatch(watchId); // បញ្ឈប់
\`\`\`

---

## 5. ការប្រើ Geolocation API ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geolocation API</title>
</head>
<body>
  <h1>សាកល្បង Geolocation API</h1>
  <p id="output">កំពុងទាញទីតាំង...</p>
  <script>
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          document.getElementById('output').textContent = 
            \`Latitude: \${latitude}, Longitude: \${longitude}\`;
        },
        error => {
          document.getElementById('output').textContent = 'កំហុស: ' + error.message;
        }
      );
    } else {
      document.getElementById('output').textContent = 'Geolocation មិនគាំទ្រ';
    }
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** \`<p>\` បង្ហាញ Latitude និង Longitude ឬ Error Message។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ទទួលបានទីតាំង</h3>
<p id="example1">កំពុងទាញទីតាំង...</p>
<script>
  navigator.geolocation.getCurrentPosition(
    position => {
      document.getElementById('example1').textContent = 
        \`Latitude: \${position.coords.latitude}\`;
    },
    error => {
      document.getElementById('example1').textContent = 'កំហុស: ' + error.message;
    }
  );
</script>
<pre><code class="language-javascript">
navigator.geolocation.getCurrentPosition(
  position => {
    document.getElementById('example1').textContent = 
      \`Latitude: \${position.coords.latitude}\`;
  },
  error => {
    document.getElementById('example1').textContent = 'កំហុស: ' + error.message;
  }
);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Error Handling</h3>
<p id="example2">កំពុងទាញទីតាំង...</p>
<script>
  navigator.geolocation.getCurrentPosition(
    position => {
      document.getElementById('example2').textContent = 
        \`Longitude: \${position.coords.longitude}\`;
    },
    error => {
      if (error.code === error.PERMISSION_DENIED) {
        document.getElementById('example2').textContent = 'អ្នកប្រើបដិសេធ';
      }
    }
  );
</script>
<pre><code class="language-javascript">
navigator.geolocation.getCurrentPosition(
  position => {
    document.getElementById('example2').textContent = 
      \`Longitude: \${position.coords.longitude}\`;
  },
  error => {
    if (error.code === error.PERMISSION_DENIED) {
      document.getElementById('example2').textContent = 'អ្នកប្រើបដិសេធ';
    }
  }
);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Geolocation API ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញទីតាំងអ្នកប្រើ',
        'ផ្ញើ HTTP Request',
        'រក្សាទុក Data',
        'ផ្លាស់ប្តូរ DOM'
      ],
      correct: 0,
      explanation: 'Geolocation API ទទួលបានទីតាំងអ្នកប្រើ (Latitude, Longitude)។'
    },
    {
      question: 'តើ Object ណាមួយផ្តល់ Geolocation Methods?',
      options: ['window', 'document', 'navigator', 'location'],
      correct: 2,
      explanation: '`navigator.geolocation` ផ្តល់ Methods សម្រាប់ Geolocation។'
    },
    {
      question: 'តើ Method ណាមួយទទួលបានទីតាំងបច្ចុប្បន្ន?',
      options: ['watchPosition', 'getCurrentPosition', 'clearWatch', 'getLocation'],
      correct: 1,
      explanation: '`getCurrentPosition` ទទួលបានទីតាំងបច្ចុប្បន្ន។'
    },
    {
      question: 'តើ `position.coords.latitude` បញ្ជូនអ្វី?',
      options: ['Longitude', 'Latitude', 'Accuracy', 'Timestamp'],
      correct: 1,
      explanation: '`position.coords.latitude` បញ្ជូន Latitude នៃទីតាំង។'
    },
    {
      question: 'តើ `watchPosition` ធ្វើអ្វី?',
      options: [
        'ទទួលបានទីតាំងម្តង',
        'តាមដានទីតាំងជាបន្តបន្ទាប់',
        'លុបទីតាំង',
        'ផ្លាស់ប្តូរ Coordinates'
      ],
      correct: 1,
      explanation: '`watchPosition` តាមដានទីតាំងជាបន្តបន្ទាប់។'
    },
    {
      question: 'តើ Method ណាមួយបញ្ឈប់ `watchPosition`?',
      options: ['stopWatch', 'clearWatch', 'removeWatch', 'endWatch'],
      correct: 1,
      explanation: '`clearWatch` បញ្ឈប់ `watchPosition`។'
    },
    {
      question: 'តើ Error `PERMISSION_DENIED` បញ្ជាក់អ្វី?',
      options: [
        'អ្នកប្រើបដិសេធការចូលប្រើ',
        'Browser មិនគាំទ្រ',
        'ទីតាំងមិនមាន',
        'Network Error'
      ],
      correct: 0,
      explanation: '`PERMISSION_DENIED` បញ្ជាក់ថាអ្នកប្រើបដិសេធការចូលប្រើទីតាំង។'
    },
    {
      question: 'តើ `position.coords.accuracy` បញ្ជូនអ្វី?',
      options: [
        'ភាពត្រឹមត្រូវនៃទីតាំង (ម៉ែត្រ)',
        'Latitude',
        'Longitude',
        'Timestamp'
      ],
      correct: 0,
      explanation: '`accuracy` បញ្ជូនភាពត្រឹមត្រូវនៃទីតាំងជាម៉ែត្រ។'
    },
    {
      question: 'តើ Geolocation API តម្រូវឱ្យអ្នកប្រើអនុញ្ញាតទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Chrome', 'បានតែក្នុង HTTPS'],
      correct: 0,
      explanation: 'Geolocation API តម្រូវឱ្យអ្នកប្រើអនុញ្ញាត។'
    },
    {
      question: 'តើកូដ `navigator.geolocation` មាននៅក្នុង Object ណា?',
      options: ['window', 'document', 'navigator', 'console'],
      correct: 2,
      explanation: '`navigator` Object ផ្តល់ Geolocation API។'
    },
    {
      question: 'តើ `getCurrentPosition` Return អ្វី?',
      options: ['Promise', 'Position Object', 'String', 'Array'],
      correct: 1,
      explanation: '`getCurrentPosition` Return Position Object តាមរយៈ Callback។'
    },
    {
      question: 'តើ Geolocation API អាចប្រើនៅក្នុង HTTP បានទេ?',
      options: [
        'បាន',
        'មិនបាន តម្រូវ HTTPS',
        'បានតែក្នុង Chrome',
        'បានតែក្នុង Firefox'
      ],
      correct: 1,
      explanation: 'Geolocation API តម្រូវ HTTPS សម្រាប់សុវត្ថិភាព។'
    },
    {
      question: 'តើ `position.timestamp` បញ្ជូនអ្វី?',
      options: [
        'ពេលវេលានៃទីតាំង',
        'Latitude',
        'Longitude',
        'Accuracy'
      ],
      correct: 0,
      explanation: '`position.timestamp` បញ្ជូនពេលវេលានៃទីតាំង។'
    },
    {
      question: 'តើកូដ `navigator.geolocation.getCurrentPosition(success, error)` មាន Parameters អ្វី?',
      options: [
        'Success Callback និង Error Callback',
        'URL និង Data',
        'Element និង Event',
        'Key និង Value'
      ],
      correct: 0,
      explanation: '`getCurrentPosition` ទទួល Success និង Error Callbacks។'
    },
    {
      question: 'តើ Geolocation API គាំទ្រនៅ Browser ទាំងអស់ទេ?',
      options: [
        'បាន',
        'មិនបាន អាស្រ័យលើ Browser',
        'បានតែក្នុង Chrome',
        'បានតែក្នុង Firefox'
      ],
      correct: 1,
      explanation: 'Geolocation API អាស្រ័យលើ Browser និង HTTPS។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Geolocation API ដើម្បីបង្ហាញទីតាំងអ្នកប្រើ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "User Location"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "ទីតាំងរបស់អ្នក"។
   - បន្ថែម \`<p id="location">កំពុងទាញទីតាំង...</p>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រើ \`navigator.geolocation.getCurrentPosition\` ដើម្បីទទួលបាន Latitude និង Longitude។
   - បង្ហាញទីតាំងនៅក្នុង \`<p id="location">\` (ឧ. "Latitude: 12.34, Longitude: 56.78")។
   - គ្រប់គ្រង Errors ដោយបង្ហាញ "កំហុស: មិនអាចទាញទីតាំង" ប្រសិនបើបរាជ័យ។
   - ពិនិត្យថា Browser គាំទ្រ Geolocation ឬអត់។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`<p>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser លើ HTTPS និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Location</title>
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
  <h1>ទីតាំងរបស់អ្នក</h1>
  <p id="location">កំពុងទាញទីតាំង...</p>
  <script>
    const output = document.getElementById('location');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          output.textContent = \`Latitude: \${latitude}, Longitude: \${longitude}\`;
        },
        error => {
          output.textContent = 'កំហុស: មិនអាចទាញទីតាំង';
        }
      );
    } else {
      output.textContent = 'Geolocation មិនគាំទ្រ';
    }
  </script>
</body>
</html>
`
  }
};

export default JSLesson6_3Content;