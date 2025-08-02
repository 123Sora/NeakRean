import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson6_2Content: LessonContent = {
  title: 'ការភ្ជាប់ MySQL ជាមួយ PHP',
  objectives: [
    'យល់ដឹងអំពីការភ្ជាប់ MySQL ជាមួយ PHP',
    'រៀនប្រើ Extension `mysqli` និង `PDO`',
    'រៀនភ្ជាប់ទៅ MySQL Database ពី PHP',
    'ស្វែងយល់អំពីការប្រតិបត្តិ Queries ដូចជា SELECT, INSERT, UPDATE',
    'រៀនគ្រប់គ្រង Prepared Statements',
    'យល់ពីការដោះស្រាយ Errors នៅក្នុង PHP',
  ],
  content: `
# ការភ្ជាប់ MySQL ជាមួយ PHP 📚

---

**PHP** គឺជា Programming Language ដ៏ពេញនិយមសម្រាប់ភ្ជាប់ទៅ MySQL។

---

## 1. ប្រើ mysqli Extension

**mysqli** គឺជា Extension សម្រាប់ភ្ជាប់ MySQL។

**ឧទាហរណ៍:**
\`\`\`php
<?php
$conn = new mysqli('localhost', 'root', 'password', 'company_db');

if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}
echo 'Connected to MySQL!';
?>
\`\`\`

---

## 2. ប្រើ PDO Extension

**PDO** គឺជា Extension ដែលគាំទ្រ Databases ច្រើន។

**ឧទាហរណ៍:**
\`\`\`php
<?php
try {
  $pdo = new PDO('mysql:host=localhost;dbname=company_db', 'root', 'password');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo 'Connected to MySQL!';
} catch (PDOException $e) {
  echo 'Connection failed: ' . $e->getMessage();
}
?>
\`\`\`

---

## 3. ប្រតិបត្តิ Queries

**SELECT Query (mysqli):**
\`\`\`php
$result = $conn->query('SELECT * FROM employees');
while ($row = $result->fetch_assoc()) {
  echo $row['name'] . '<br>';
}
\`\`\`

**INSERT Query (PDO):**
\`\`\`php
$stmt = $pdo->prepare('INSERT INTO employees (name, dept_id) VALUES (?, ?)');
$stmt->execute(['Sok', 1]);
echo 'Inserted: ' . $stmt->rowCount();
\`\`\`

---

## 4. Prepared Statements

**Prepared Statements** ការពារពី SQL Injection។

**ឧទាហរណ៍ (mysqli):**
\`\`\`php
$stmt = $conn->prepare('INSERT INTO employees (name, dept_id) VALUES (?, ?)');
$stmt->bind_param('si', $name, $dept_id);
$name = 'Sok';
$dept_id = 1;
$stmt->execute();
\`\`\`

---

## 5. ការដោះស្រាយ Errors

**mysqli Error:**
\`\`\`php
$result = $conn->query('SELECT * FROM nonexistent_table');
if (!$result) {
  echo 'Error: ' . $conn->error;
}
\`\`\`

**PDO Error:**
\`\`\`php
try {
  $pdo->query('SELECT * FROM nonexistent_table');
} catch (PDOException $e) {
  echo 'Error: ' . $e->getMessage();
}
\`\`\`

**គន្លឹះ:** ប្រើ PDO សម្រាប់ភាពបត់បែន និង Prepared Statements សម្រាប់សុវត្ថិភាព។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ ភ្ជាប់ និង Query (mysqli)</h3>
<p>ភ្ជាប់ទៅ Database និងទាញទិន្នន័យពី Table \`products\`។</p>
<pre><code class="language-php">
<?php
$conn = new mysqli('localhost', 'root', 'password', 'shop_db');
if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}
$result = $conn->query('SELECT * FROM products');
while ($row = $result->fetch_assoc()) {
  echo $row['name'] . '<br>';
}
$conn->close();
?>
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ បញ្ចូលទិន្នន័យ (PDO)</h3>
<p>បញ្ចូល Product ថ្មីទៅក្នុង Table \`products\`។</p>
<pre><code class="language-php">
<?php
try {
  $pdo = new PDO('mysql:host=localhost;dbname=shop_db', 'root', 'password');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $pdo->prepare('INSERT INTO products (name, price) VALUES (?, ?)');
  $stmt->execute(['Phone', 500]);
  echo 'Inserted: ' . $stmt->rowCount();
} catch (PDOException $e) {
  echo 'Error: ' . $e->getMessage();
}
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Extension ណាដែលប្រើសម្រាប់ភ្ជាប់ MySQL ជាមួយ PHP?',
      options: ['mysqli', 'PDO', 'mysql', 'អ្នកទាំងពីរ mysqli និង PDO'],
      correct: 3,
      explanation: 'ទាំង `mysqli` និង `PDO` អាចប្រើសម្រាប់ភ្ជាប់ MySQL ជាមួយ PHP។'
    },
    {
      question: 'តើ PDO មានអត្ថប្រយោជន៍អ្វីបើប្រៀបធៀបនឹង mysqli?',
      options: ['លឿនជាង', 'គាំទ្រ Databases ច្រើន', 'ងាយស្រួលជាង', 'មិនគាំទ្រ Prepared Statements'],
      correct: 1,
      explanation: 'PDO គាំទ្រ Databases ច្រើន។'
    },
    {
      question: 'តើ Method ណាដែលប្រើដើម្បីភ្ជាប់ទៅ MySQL នៅក្នុង mysqli?',
      options: ['connect()', 'new mysqli()', 'query()', 'prepare()'],
      correct: 1,
      explanation: '`new mysqli()` ប្រើសម្រាប់ភ្ជាប់ទៅ MySQL។'
    },
    {
      question: 'តើ Prepared Statements មានអត្ថប្រយោជន៍អ្វី?',
      options: ['បង្កើនល្បឿន Query', 'ការពារ SQL Injection', 'បង្កើត Database', 'លុប Table'],
      correct: 1,
      explanation: 'Prepared Statements ការពារ SQL Injection។'
    },
    {
      question: 'តើ `fetch_assoc()` នៅក្នុង mysqli ត្រឡប់អ្វី?',
      options: ['Array ដែលមាន Key ជា Column Names', 'Object', 'String', 'Number'],
      correct: 0,
      explanation: '`fetch_assoc()` ត្រឡប់ Array ដែលមាន Key ជា Column Names។'
    },
    {
      question: 'តើ PDO Attribute `ERRMODE_EXCEPTION` ធ្វើអ្វី?',
      options: ['បង្កើត Database', 'បោះ Exceptions នៅពេលមាន Error', 'បិទ Connection', 'បង្កើនល្បឿន Query'],
      correct: 1,
      explanation: '`ERRMODE_EXCEPTION` បោះ Exceptions នៅពេលមាន Error។'
    },
    {
      question: 'តើ `bind_param()` នៅក្នុង mysqli ប្រើសម្រាប់អ្វី?',
      options: ['ភ្ជាប់ Database', 'ចង Parameters ទៅ Prepared Statement', 'ប្រតិបត្តិ Query', 'លុប Table'],
      correct: 1,
      explanation: '`bind_param()` ចង Parameters ទៅ Prepared Statement។'
    },
    {
      question: 'តើ `execute()` នៅក្នុង PDO ធ្វើអ្វី?',
      options: ['ភ្ជាប់ Database', 'ប្រតិបត្តិ Prepared Statement', 'បង្កើត Table', 'លុប Database'],
      correct: 1,
      explanation: '`execute()` ប្រតិបត្តិ Prepared Statement។'
    },
    {
      question: 'តើអ្នកគួរបិទ Connection នៅពេលណា?',
      options: ['បន្ទាប់ពីភ្ជាប់', 'បន្ទាប់ពីប្រតិបត្តិ Query ទាំងអស់', 'មុនពេលភ្ជាប់', 'មិនចាំបាច់បិទ'],
      correct: 1,
      explanation: 'គួរបិទ Connection បន្ទាប់ពីប្រតិបត្តិ Query ទាំងអស់។'
    },
    {
      question: 'តើ `rowCount()` នៅក្នុង PDO ត្រឡប់អ្វី?',
      options: ['ចំនួន Columns', 'ចំនួន Rows ដែលប៉ះពាល់', 'ចំនួន Tables', 'ចំនួន Databases'],
      correct: 1,
      explanation: '`rowCount()` ត្រឡប់ចំនួន Rows ដែលប៉ះពាល់។'
    },
    {
      question: 'តើ SQL Injection គឺជាអ្វី?',
      options: ['ការបញ្ចូលទិន្នន័យធម្មតា', 'ការវាយប្រហារដោយបញ្ចូល SQL Code មិនត្រឹមត្រូវ', 'ការបង្កើត Database', 'ការលុប Table'],
      correct: 1,
      explanation: 'SQL Injection គឺជាការវាយប្រហារដោយបញ្ចូល SQL Code មិនត្រឹមត្រូវ។'
    },
    {
      question: 'តើ `mysqli` គាំទ្រ Prepared Statements ដែរឬទេ?',
      options: ['គាំទ្រ', 'មិនគាំទ្រ', 'គាំទ្រតែ SELECT', 'គាំទ្រតែ INSERT'],
      correct: 0,
      explanation: '`mysqli` គាំទ្រ Prepared Statements។'
    },
    {
      question: 'តើ PDO អាចភ្ជាប់ទៅ Database ប្រភេទណា?',
      options: ['MySQL តែប៉ុណ្ណោះ', 'គ្រប់ប្រភេទ Database ដែលគាំទ្រ', 'PostgreSQL តែប៉ុណ្ណោះ', 'SQLite តែប៉ុណ្ណោះ'],
      correct: 1,
      explanation: 'PDO អាចភ្ជាប់ទៅគ្រប់ប្រភេទ Database ដែលគាំទ្រ។'
    },
    {
      question: 'តើអ្នកគួរប្រើ Extension ណាសម្រាប់សុវត្ថិភាព?',
      options: ['mysql', 'mysqli', 'PDO', 'អ្នកទាំងពីរ mysqli និង PDO'],
      correct: 3,
      explanation: 'ទាំង `mysqli` និង `PDO` មានសុវត្ថិភាពជាមួយ Prepared Statements។'
    },
    {
      question: 'តើ `connect_error` នៅក្នុង mysqli បង្ហាញអ្វី?',
      options: ['Error នៃ Query', 'Error នៃ Connection', 'Error នៃ Table', 'Error នៃ Database'],
      correct: 1,
      explanation: '`connect_error` បង្ហាញ Error នៃ Connection។'
    },
  ],
  lab: {
    task: `
ភ្ជាប់ MySQL ជាមួយ PHP។

**តម្រូវការ:**

1. **ភ្ជាប់ Database:**
   - បង្កើត PHP File ដើម្បីភ្ជាប់ទៅ Database \`shop_db\` ដោយប្រើ PDO។

2. **ប្រតិបត្តិ Queries:**
   - Query \`SELECT * FROM products\` ដើម្បីបង្ហាញទិន្នន័យ។
   - បញ្ចូល Product ថ្មីជាមួយ \`name\` ជា "Tablet" និង \`price\` ជា 300 ដោយប្រើ Prepared Statement។

3. **Test:**
   - បង្ហាញ Results នៅក្នុង Browser។
   - ពិនិត្យ Errors ប្រសិនបើមាន។
   - ប្រើ XAMPP ឬ WAMP ដើម្បី Run PHP Code។

**ការណែនាំ:** ត្រូវប្រាកដថា MySQL Server កំពុង Run និងមាន Database \`shop_db\`។
    `,
    solution: `
\`\`\`php
<?php
// index.php
try {
  $pdo = new PDO('mysql:host=localhost;dbname=shop_db', 'root', 'password');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // SELECT Query
  $stmt = $pdo->query('SELECT * FROM products');
  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo $row['name'] . ' - $' . $row['price'] . '<br>';
  }

  // INSERT Query
  $stmt = $pdo->prepare('INSERT INTO products (name, price) VALUES (?, ?)');
  $stmt->execute(['Tablet', 300]);
  echo 'Inserted: ' . $stmt->rowCount();
} catch (PDOException $e) {
  echo 'Error: ' . $e->getMessage();
}
?>
\`\`\`
`
  }
};

export default MySQLLesson6_2Content;