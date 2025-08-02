import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson8_1Content: LessonContent = {
  title: 'បញ្ជីកិច្ចការអន្តរកម្ម (Interactive To-Do List)',
  objectives: [
    'រៀនបង្កើតបញ្ជីកិច្ចការដែលអន្តរកម្មជាមួយអ្នកប្រើប្រាស់ ( users )',
    'អនុវត្តន៍ការគ្រប់គ្រង DOM ដើម្បីបន្ថែម និងលុបកិច្ចការ',
    'ស្វែងយល់អំពីការប្រើ Event Listeners សម្រាប់ការបញ្ចូលអ្នកប្រើប្រាស់ ( users )',
    'អនុវត្តន៍ការរក្សាទុកទិន្នន័យជាមួយ Local Storage',
    'រៀនគ្រប់គ្រងកំហុសជាមួយ `try...catch`'
  ],
  content: `
# បញ្ជីកិច្ចការអន្តរកម្ម (Interactive To-Do List) 📋

---

**បញ្ជីកិច្ចការ** គឺជាកម្មវិធីសាមញ្ញដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ ( users ) បន្ថែម លុប និងមើលកិច្ចការ។ វាប្រើ DOM Manipulation, Event Listeners, និង Local Storage។

---

## 1. ការបន្ថែមកិច្ចការ
ប្រើ \`<input>\` និង \`<button>\` ដើម្បីទទួល និងបន្ថែមកិច្ចការទៅ \`<ul>\`។

\`\`\`javascript
document.getElementById('addBtn').addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput').value;
  if (taskInput) {
    const li = document.createElement('li');
    li.textContent = taskInput;
    document.getElementById('taskList').appendChild(li);
  }
});
\`\`\`

---

## 2. ការលុបកិច្ចការ
បន្ថែម \`<button>\` សម្រាប់លុបកិច្ចការនីមួយៗ។

\`\`\`javascript
function createTaskItem(task) {
  const li = document.createElement('li');
  li.textContent = task;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'លុប';
  deleteBtn.addEventListener('click', () => li.remove());
  li.appendChild(deleteBtn);
  return li;
}
\`\`\`

---

## 3. ការប្រើ Local Storage
រក្សាទុកកិច្ចការនៅក្នុង \`localStorage\` ដើម្បីឱ្យនៅសល់បន្ទាប់ពី Refresh។

\`\`\`javascript
function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  return JSON.parse(localStorage.getItem('tasks') || '[]');
}
\`\`\`

---

## 4. ការគ្រប់គ្រងកំហុស
ប្រើ \`try...catch\` ដើម្បីគ្រប់គ្រងកំហុសនៅពេលបម្លែង JSON។

\`\`\`javascript
function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  } catch (error) {
    console.error('កំហុសក្នុងការផ្ទុកកិច្ចការ:', error.message);
    return [];
  }
}
\`\`\`

---

## 5. ការប្រើ To-Do List ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive To-Do List</title>
</head>
<body>
  <h1>បញ្ជីកិច្ចការ</h1>
  <input id="taskInput" type="text" placeholder="បញ្ចូលកិច្ចការ">
  <button id="addBtn">បន្ថែម</button>
  <ul id="taskList"></ul>
  <script>
    function loadTasks() {
      try {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
      } catch (error) {
        console.error('កំហុស:', error.message);
        return [];
      }
    }

    function saveTasks(tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
      const tasks = loadTasks();
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'លុប';
        deleteBtn.addEventListener('click', () => {
          const updatedTasks = tasks.filter(t => t !== task);
          saveTasks(updatedTasks);
          renderTasks();
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
      });
    }

    document.getElementById('addBtn').addEventListener('click', () => {
      const taskInput = document.getElementById('taskInput');
      const task = taskInput.value.trim();
      if (task) {
        const tasks = loadTasks();
        tasks.push(task);
        saveTasks(tasks);
        renderTasks();
        taskInput.value = '';
      }
    });

    renderTasks();
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** បញ្ចូលកិច្ចការ ចុច "បន្ថែម" ដើម្បីបន្ថែមទៅបញ្ជី និងចុច "លុប" ដើម្បីលុបកិច្ចការ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បន្ថែមកិច្ចការ</h3>
<input id="exampleInput" type="text" placeholder="បញ្ចូលកិច្ចការ">
<button onclick="addTask()">បន្ថែម</button>
<ul id="exampleList"></ul>
<script>
  function addTask() {
    const input = document.getElementById('exampleInput').value;
    if (input) {
      const li = document.createElement('li');
      li.textContent = input;
      document.getElementById('exampleList').appendChild(li);
    }
  }
</script>
<pre><code class="language-javascript">
function addTask() {
  const input = document.getElementById('exampleInput').value;
  if (input) {
    const li = document.createElement('li');
    li.textContent = input;
    document.getElementById('exampleList').appendChild(li);
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ លុបកិច្ចការ</h3>
<ul id="exampleList2"><li>កិច្ចការ ១ <button onclick="this.parentElement.remove()">លុប</button></li></ul>
<pre><code class="language-javascript">
const li = document.createElement('li');
li.textContent = 'កិច្ចការ ១';
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'លុប';
deleteBtn.addEventListener('click', () => li.remove());
li.appendChild(deleteBtn);
document.getElementById('exampleList2').appendChild(li);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជាគោលបំណងនៃ To-Do List អន្តរកម្ម?',
      options: [
        'អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ ( users )បន្ថែម និងលុបកិច្ចការ',
        'ផ្ញើ HTTP Request',
        'បង្កើត Animation',
        'រក្សាទុក Files'
      ],
      correct: 0,
      explanation: 'To-Do List អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ ( users )បន្ថែម និងលុបកិច្ចការ។'
    },
    {
      question: 'តើ Method ណាមួយបន្ថែម Element ទៅ DOM?',
      options: ['appendChild', 'remove', 'addEventListener', 'getElementById'],
      correct: 0,
      explanation: '`appendChild` បន្ថែម Element ទៅ DOM។'
    },
    {
      question: 'តើ `localStorage` ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកទិន្នន័យនៅក្នុង Browser',
        'ផ្ញើ Request',
        'បង្កើត Elements',
        'គណនាលេខ'
      ],
      correct: 0,
      explanation: '`localStorage` រក្សាទុកទិន្នន័យនៅក្នុង Browser។'
    },
    {
      question: 'តើ Method ណាមួយលុប Element ពី DOM?',
      options: ['remove', 'appendChild', 'addEventListener', 'querySelector'],
      correct: 0,
      explanation: '`remove` លុប Element ពី DOM។'
    },
    {
      question: 'តើ `JSON.stringify` ធ្វើអ្វី?',
      options: [
        'បម្លែង Object ទៅ String',
        'បម្លែង String ទៅ Object',
        'លុប Data',
        'បន្ថែម Element'
      ],
      correct: 0,
      explanation: '`JSON.stringify` បម្លែង Object ទៅ String សម្រាប់ `localStorage`។'
    },
    {
      question: 'តើ `JSON.parse` ធ្វើអ្វី?',
      options: [
        'បម្លែង String ទៅ Object',
        'បម្លែង Object ទៅ String',
        'លុប Data',
        'បន្ថែម Element'
      ],
      correct: 0,
      explanation: '`JSON.parse` បម្លែង String ទៅ Object។'
    },
    {
      question: 'តើកូដ `try { JSON.parse(data) } catch (e) {}` ជួយអ្វី?',
      options: [
        'ចាប់ SyntaxError',
        'បន្ថែម Data',
        'លុប Data',
        'បន្ថែម Elements'
      ],
      correct: 0,
      explanation: '`try...catch` ចាប់ `SyntaxError` ពី `JSON.parse`។'
    },
    {
      question: 'តើ Event Listener ប្រើសម្រាប់អ្វីនៅក្នុង To-Do List?',
      options: [
        'ដោះស្រាយការចុច និងការបញ្ចូល',
        'រក្សាទុក Data',
        'បង្កើត Animation',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: 'Event Listeners ដោះស្រាយការចុច និងការបញ្ចូលរបស់អ្នកប្រើប្រាស់ ( users )។'
    },
    {
      question: 'តើកូដ `localStorage.getItem(\'tasks\')` បញ្ជូនអ្វីប្រសិនបើ `tasks` មិនមាន?',
      options: ['null', 'undefined', '[]', 'Error'],
      correct: 0,
      explanation: '`localStorage.getItem` បញ្ជូន `null` ប្រសិនបើ Key មិនមាន។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ `localStorage` នៅក្នុង To-Do List?',
      options: [
        'រក្សាទុកកិច្ចការបន្ទាប់ពី Refresh',
        'បង្កើនល្បឿន',
        'បន្ថែម Elements',
        'លុប Data'
      ],
      correct: 0,
      explanation: '`localStorage` រក្សាទុកកិច្ចការបន្ទាប់ពី Refresh។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្កើតបញ្ជីកិច្ចការអន្តរកម្មជាមួយ Local Storage។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Interactive To-Do List"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "បញ្ជីកិច្ចការ"។
   - បន្ថែម \`<input id="taskInput" type="text" placeholder="បញ្ចូលកិច្ចការ">\`។
   - បន្ថែម \`<button id="addBtn">បន្ថែម</button>\`។
   - បន្ថែម \`<ul id="taskList"></ul>\` សម្រាប់បង្ហាញកិច្ចការ។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Function \`loadTasks\` ដើម្បីផ្ទុកកិច្ចការពី \`localStorage\` ដោយប្រើ \`try...catch\`។
   - បង្កើត Function \`saveTasks\` ដើម្បីរក្សាទុកកិច្ចការទៅ \`localStorage\`។
   - បង្កើត Function \`renderTasks\` ដើម្បីបង្ហាញកិច្ចការនៅក្នុង \`<ul>\`។
   - នៅពេលចុច "បន្ថែម" បន្ថែមកិច្ចការទៅ \`localStorage\` និងធ្វើបច្ចុប្បន្នភាព \`<ul>\`។
   - បន្ថែម \`<button>\` សម្រាប់លុបកិច្ចការនីមួយៗ។
   - ពិនិត្យថា Input មិនមែនជាទទេមុនពេលបន្ថែម។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`<ul>\`។
     - កំណត់ \`padding: 10px;\` និង \`cursor: pointer;\` សម្រាប់ \`<button>\`។
     - កំណត់ \`list-style: none;\` និង \`margin: 10px 0;\` សម្រាប់ \`<li>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    ul {
      font-size: 18px;
      color: #333;
    }
    li {
      list-style: none;
      margin: 10px 0;
    }
    button {
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>បញ្ជីកិច្ចការ</h1>
  <input id="taskInput" type="text" placeholder="បញ្ចូលកិច្ចការ">
  <button id="addBtn">បន្ថែម</button>
  <ul id="taskList"></ul>
  <script>
    // ផ្ទុកកិច្ចការពី localStorage
    function loadTasks() {
      try {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
      } catch (error) {
        console.error('កំហុសក្នុងការផ្ទុកកិច្ចការ:', error.message);
        return [];
      }
    }

    // រក្សាទុកកិច្ចការទៅ localStorage
    function saveTasks(tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // បង្ហាញកិច្ចការនៅក្នុង UI
    function renderTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
      const tasks = loadTasks();
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'លុប';
        deleteBtn.addEventListener('click', () => {
          const updatedTasks = tasks.filter(t => t !== task);
          saveTasks(updatedTasks);
          renderTasks();
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
      });
    }

    // ដោះស្រាយការបន្ថែមកិច្ចការ
    document.getElementById('addBtn').addEventListener('click', () => {
      const taskInput = document.getElementById('taskInput');
      const task = taskInput.value.trim();
      if (task) {
        const tasks = loadTasks();
        tasks.push(task);
        saveTasks(tasks);
        renderTasks();
        taskInput.value = '';
      } else {
        alert('សូមបញ្ចូលកិច្ចការ');
      }
    });

    // ផ្ទុកកិច្ចការនៅពេលចាប់ផ្តើម
    renderTasks();
  </script>
</body>
</html>
`
  }
};

export default JSLesson8_1Content;