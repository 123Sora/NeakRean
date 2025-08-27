import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson4_3Content: LessonContent = {
  title: 'Prepared Statements និងសុវត្ថិភាព Database ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី Prepared Statements និងអត្ថប្រយោជន៍របស់វា',
    'ស្វែងយល់ពីការប្រើ Prepared Statements ដើម្បីការពារ SQL Injection',
    'ស្គាល់ការប្រើ Positional និង Named Parameters ក្នុង PDO',
    'អនុវត្តការបញ្ចូល និងទាញយកទិន្នន័យដោយ Prepared Statements',
    'យល់ពីការអនុវត្តសុវត្ថិភាព Database ដូចជា Input Sanitization និង XSS Protection',
    'បង្កើតកម្មវិធី PHP ដែលមានសុវត្ថិភាពជាមួយ Database'
  ],
  content: `
# Prepared Statements និងសុវត្ថិភាព Database ក្នុង PHP 🔐

---

**Prepared Statements** ជាវិធីសាស្ត្រសម្រាប់ប្រតិបត្តិ SQL Query ដោយសុវត្ថិភាព ដើម្បីការពារ **SQL Injection**។ PDO (PHP Data Objects) ផ្តល់នូវការគាំទ្រសម្រាប់ Prepared Statements ដោយប្រើ Parameter Binding។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការប្រើ Prepared Statements និងការអនុវត្តសុវត្ថិភាព Database ដើម្បីបង្កើតគេហទំព័រដែលមានសុវត្ថិភាព។

---

## 1. អត្ថប្រយោជន៍នៃ Prepared Statements

Prepared Statements ការពារទិន្នន័យអ្នកប្រើពីការវាយប្រហារ SQL Injection ដោយបំបែក SQL Query និងទិន្នន័យ។ វាក៏បង្កើនប្រសិទ្ធភាព Query នៅពេលប្រតិបត្តិច្រើនដង។

**ឧទាហរណ៍គ្មាន Prepared Statements (មិនសុវត្ថិភាព):**

\`\`\`php
<?php
$name = $_POST['name']; // អាចបញ្ចូលកូដគ្រោះថ្នាក់
$sql = "SELECT * FROM students WHERE name = '$name'";
$result = mysqli_query($conn, $sql);
?>
\`\`\`

**ឧទាហរណ៍ជាមួយ Prepared Statements (សុវត្ថិភាព):**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("SELECT * FROM students WHERE name = ?");
    $stmt->execute([$_POST['name']]);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 2. Parameter Binding

PDO អនុញ្ញាតឱ្យប្រើ **Positional Parameters (\`?\`)** ឬ **Named Parameters (\`:name\`)** សម្រាប់ Binding ទិន្នន័យទៅ Query។

**ឧទាហរណ៍ Positional Parameters:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("INSERT INTO students (name, age) VALUES (?, ?)");
    $stmt->execute(['សុភា', 20]);
    echo "ទិន្នន័យត្រូវបានបញ្ចូល!";
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

**ឧទាហរណ៍ Named Parameters:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("INSERT INTO students (name, age) VALUES (:name, :age)");
    $stmt->execute(['name' => 'សុភា', 'age' => 20]);
    echo "ទិន្នន័យត្រូវបានបញ្ចូល!";
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 3. ការទាញយកទិន្នន័យជាមួយ Prepared Statements

Prepared Statements អាចប្រើសម្រាប់ Query ដែលទាញយកទិន្នន័យ ដោយធានាសុវត្ថិភាព។

**ឧទាហរណ៍ទាញយកទិន្នន័យ:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("SELECT id, name, age FROM students WHERE age > :age");
    $stmt->execute(['age' => 18]);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach ($rows as $row) {
        echo "ID: " . $row['id'] . ", ឈ្មោះ: " . $row['name'] . ", អាយុ: " . $row['age'] . "<br>";
    }
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 4. ការអនុវត្តសុវត្ថិភាព Database

- **Input Sanitization**: ប្រើ \`filter_var\` ដើម្បីសម្អាតទិន្នន័យអ្នកប្រើ។
- **XSS Protection**: ប្រើ \`htmlspecialchars\` នៅពេលបង្ហាញទិន្នន័យ។
- **Error Handling**: ប្រើ \`try-catch\` និង \`PDO::ERRMODE_EXCEPTION\` ដើម្បីគ្រប់គ្រងកំហុស។
- **Database Credentials**: រក្សាទុក Database Credentials នៅក្នុងឯកសារដាច់ដោយឡែក (ឧ. \`config.php\`)។

**ឧទាហរណ៍ Config File:**

\`\`\`php
<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'school');
?>
\`\`\`

---

## 5. ការប្រើ Prepared Statements ក្នុងគេហទំព័រ

Prepared Statements ត្រូវបានប្រើដើម្បីបង្កើតគេហទំព័រដែលសុវត្ថិភាព។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $age = filter_var($_POST['age'], FILTER_SANITIZE_NUMBER_INT);
        if (!empty($name) && !empty($age)) {
            $stmt = $pdo->prepare("INSERT INTO students (name, age) VALUES (:name, :age)");
            $stmt->execute(['name' => $name, 'age' => $age]);
            $message = "បានបញ្ចូលទិន្នន័យជោគជ័យ!";
        } else {
            $message = "សូមបញ្ចូលឈ្មោះ និងអាយុ!";
        }
    }
    
    $stmt = $pdo->prepare("SELECT id, name, age FROM students");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    $message = "កំហុស: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Prepared Statements</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    form { margin: 20px; }
    input[type="text"] { padding: 5px; margin: 5px; }
    input[type="submit"] { padding: 5px 10px; }
    table { margin: 20px auto; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    th { background-color: #007bff; color: white; }
    .message { color: green; }
    .error { color: red; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ Prepared Statements!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name"><br>
    <label>អាយុ: </label>
    <input type="text" name="age"><br>
    <input type="submit" value="បញ្ចូល">
  </form>
  <p class="<?php echo strpos($message, 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($message); ?>
  </p>
  <table>
    <tr>
      <th>ID</th>
      <th>ឈ្មោះ</th>
      <th>អាយុ</th>
    </tr>
    <?php foreach ($rows as $row): ?>
      <tr>
        <td><?php echo htmlspecialchars($row['id']); ?></td>
        <td><?php echo htmlspecialchars($row['name']); ?></td>
        <td><?php echo htmlspecialchars($row['age']); ?></td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Prepared Statement ជាមួយ Positional Parameters</h3>
<p>បញ្ចូលទិន្នន័យដោយប្រើ \`?\`។</p>
<pre><code class="language-php">
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("INSERT INTO students (name, age) VALUES (?, ?)");
    $stmt->execute(['សុភា', 20]);
    echo "ទិន្នន័យត្រូវបានបញ្ចូល!";
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Prepared Statement ជាមួយ Named Parameters</h3>
<p>បញ្ចូលទិន្នន័យដោយប្រើ \`:name\`។</p>
<pre><code class="language-php">
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("INSERT INTO students (name, age) VALUES (:name, :age)");
    $stmt->execute(['name' => 'សុភា', 'age' => 20]);
    echo "ទិន្នន័យត្រូវបានបញ្ចូល!";
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការទាញយកទិន្នន័យជាមួយ Prepared Statements</h3>
<p>ទាញយកទិន្នន័យដោយប្រើ Prepared Statements។</p>
<pre><code class="language-php">
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("SELECT id, name, age FROM students WHERE age > :age");
    $stmt->execute(['age' => 18]);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach ($rows as $row) {
        echo "ID: " . $row['id'] . ", ឈ្មោះ: " . $row['name'] . "<br>";
    }
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការការពារ SQL Injection</h3>
<p>បង្ហាញភាពសុវត្ថិភាពនៃ Prepared Statements។</p>
<pre><code class="language-php">
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("SELECT * FROM students WHERE name = ?");
    $stmt->execute([$_POST['name']]);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach ($rows as $row) {
        echo "ឈ្មោះ: " . htmlspecialchars($row['name']) . "<br>";
    }
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Prepared Statements ក្នុង PDO ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យដោយគ្មានសុវត្ថិភាព',
        'ការពារ SQL Injection',
        'បង្កើត Database',
        'បិទការភ្ជាប់'
      ],
      correct: 1,
      explanation: 'Prepared Statements ការពារ SQL Injection ដោយបំបែក Query និងទិន្នន័យ។'
    },
    {
      question: 'តើ SQL Injection គឺជាអ្វី?',
      options: [
        'ការបញ្ចូលទិន្នន័យទៅ Database',
        'ការវាយប្រហារដោយបញ្ចូលកូដ SQL គ្រោះថ្នាក់',
        'ការទាញយកទិន្នន័យ',
        'ការបង្កើតតារាង'
      ],
      correct: 1,
      explanation: 'SQL Injection គឺជាការវាយប្រហារដោយបញ្ចូលកូដ SQL គ្រោះថ្នាក់។'
    },
    {
      question: 'តើ `prepare` ក្នុង PDO ធ្វើអ្វី?',
      options: [
        'ប្រតិបត្តិ Query',
        'រៀបចំ Query សម្រាប់ Parameter Binding',
        'ទាញយកទិន្នន័យ',
        'បិទការភ្ជាប់'
      ],
      correct: 1,
      explanation: '`prepare` រៀបចំ Query សម្រាប់ Parameter Binding។'
    },
    {
      question: 'តើ Positional Parameters ក្នុង Prepared Statements ប្រើសញ្ញាអ្វី?',
      options: [
        ':name',
        '?',
        '$',
        '@'
      ],
      correct: 1,
      explanation: 'Positional Parameters ប្រើ `?`។'
    },
    {
      question: 'តើ Named Parameters ក្នុង Prepared Statements ប្រើសញ្ញាអ្វី?',
      options: [
        '?',
        ':name',
        '$name',
        '@name'
      ],
      correct: 1,
      explanation: 'Named Parameters ប្រើ `:name`�।'
    },
    {
      question: 'តើ `execute` ក្នុង PDO ធ្វើអ្វី?',
      options: [
        'រៀបចំ Query',
        'ប្រតិបត្តិ Prepared Statement',
        'ទាញយកទិន្នន័យ',
        'បិទការភ្ជាប់'
      ],
      correct: 1,
      explanation: '`execute` ប្រតិបត្តិ Prepared Statement ជាមួយ Parameters។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$stmt = $pdo->prepare("INSERT INTO students (name) VALUES (?)"); $stmt->execute([\'សុភា\']); echo "Done";`',
      options: [
        'សុភា',
        'Done',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: 'កូដនេះបញ្ចូលទិន្នន័យ និងបង្ហាញ "Done"។'
    },
    {
      question: 'តើ Prepared Statements ជួយការពារអ្វី?',
      options: [
        'XSS',
        'SQL Injection',
        'File Inclusion',
        'Session Hijacking'
      ],
      correct: 1,
      explanation: 'Prepared Statements ការពារ SQL Injection។'
    },
    {
      question: 'តើ `htmlspecialchars` នៅក្នុង Prepared Statements មានគោលបំណងអ្វី?',
      options: [
        'ការពារ SQL Injection',
        'ការពារ XSS នៅពេលបង្ហាញទិន្នន័យ',
        'បញ្ចូលទិន្នន័យ',
        'ភ្ជាប់ Database'
      ],
      correct: 1,
      explanation: '`htmlspecialchars` ការពារ XSS នៅពេលបង្ហាញទិន្នន័យ។'
    },
    {
      question: 'តើ Parameter Binding ក្នុង PDO ធ្វើអ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យដោយផ្ទាល់ទៅ Query',
        'ភ្ជាប់ទិន្នន័យទៅ Parameters ដើម្បីសុវត្ថិភាព',
        'ទាញយកទិន្នន័យ',
        'បិទការភ្ជាប់'
      ],
      correct: 1,
      explanation: 'Parameter Binding ភ្ជាប់ទិន្នន័យទៅ Parameters ដើម្បីសុវត្ថិភាព។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Positional និង Named Parameters?',
      options: [
        'Positional ប្រើ `:name`, Named ប្រើ `?`',
        'Positional ប្រើ `?`, Named ប្រើ `:name`',
        'ទាំងពីរប្រើ `?`',
        'ទាំងពីរប្រើ `:name`'
      ],
      correct: 1,
      explanation: 'Positional Parameters ប្រើ `?`, Named Parameters ប្រើ `:name`។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ PDO ជាមួយ Prepared Statements?',
      options: [
        'បង្កើនល្បឿន Query តែមិនមានសុវត្ថិភាព',
        'ការពារ SQL Injection និងគាំទ្រ Database ច្រើនប្រភេទ',
        'បង្កើត Form ដោយស្វ័យប្រវត្តិ',
        'រក្សាទុក Session'
      ],
      correct: 1,
      explanation: 'PDO ជាមួយ Prepared Statements ការពារ SQL Injection និងគាំទ្រ Database ច្រើនប្រភេទ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$stmt = $pdo->prepare("SELECT name FROM students WHERE age > :age"); $stmt->execute([\'age\' => 18]); $rows = $stmt->fetchAll(); echo count($rows);`',
      options: [
        'ចំនួនជួរដែលអាយុ > 18',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'កូដនេះនឹងបង្ហាញចំនួនជួរដែលអាយុ > 18។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលមាន Form សម្រាប់បញ្ចូលទិន្នន័យសិស្ស (ឈ្មោះ និងអាយុ) ទៅ MySQL Database ដោយប្រើ Prepared Statements និងបង្ហាញបញ្ជីសិស្សនៅក្នុងតារាង។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP Prepared Statements Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ Prepared Statements!"។
   - បង្កើត Form ដែលមាន \`<input>\` សម្រាប់ឈ្មោះ និងអាយុ និងប៊ូតុង "បញ្ចូល" ដោយប្រើ \`method="POST"\`។
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញសារជោគជ័យ ឬកំហុស។
   - បង្ហាញទិន្នន័យសិស្សនៅក្នុង \`<table>\`។

3. **PHP Functionality:**
   - ភ្ជាប់ទៅ Database \`school\` ដោយប្រើ PDO។
   - ប្រើ \`try-catch\` និង \`PDO::ERRMODE_EXCEPTION\` ដើម្បីគ្រប់គ្រងកំហុស។
   - ប្រើ \`filter_var\` ដើម្បីសម្អាតទិន្នន័យឈ្មោះ (FILTER_SANITIZE_STRING) និងអាយុ (FILTER_SANITIZE_NUMBER_INT)។
   - ប្រើ Prepared Statement ជាមួយ Named Parameters ដើម្បីបញ្ចូលទិន្នន័យទៅតារាង \`students\`។
   - ប្រើ Prepared Statement ដើម្បីទាញយកទិន្នន័យ (id, name, age) ពីតារាង \`students\`។
   - ប្រើ \`htmlspecialchars\` ដើម្បីការពារ XSS នៅពេលបង្ហាញទិន្នន័យ។

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`margin: 20px;\` សម្រាប់ \`form\`។
     - \`padding: 5px; margin: 5px;\` សម្រាប់ \`<input>\`។
     - \`padding: 5px 10px;\` សម្រាប់ \`<input type="submit">\`។
     - \`border-collapse: collapse;\` និង \`margin: 20px auto;\` សម្រាប់ \`table\`។
     - \`border: 1px solid #ddd; padding: 8px;\` សម្រាប់ \`th\` និង \`td\`។
     - \`background-color: #007bff; color: white;\` សម្រាប់ \`th\`។
     - \`color: green;\` សម្រាប់សារជោគជ័យ (\`.message\`)។
     - \`color: red;\` សម្រាប់សារកំហុស (\`.error\`)។

**ការណែនាំ:**
- ត្រូវប្រាកដថា Database \`school\` និងតារាង \`students\` (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), age INT) មាន។
- បញ្ចូលទិន្នន័យគំរូមួយចំនួនមុននឹងសាកល្បង។
- រក្សាទុកជា .php និងដំណើរការតាម localhost (ឧ. XAMPP)។
`,
    solution: `
\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $age = filter_var($_POST['age'], FILTER_SANITIZE_NUMBER_INT);
        if (!empty($name) && !empty($age)) {
            $stmt = $pdo->prepare("INSERT INTO students (name, age) VALUES (:name, :age)");
            $stmt->execute(['name' => $name, 'age' => $age]);
            $message = "បានបញ្ចូលទិន្នន័យជោគជ័យ!";
        } else {
            $message = "សូមបញ្ចូលឈ្មោះ និងអាយុ!";
        }
    }
    
    $stmt = $pdo->prepare("SELECT id, name, age FROM students");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    $message = "កំហុស: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Prepared Statements Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f8f9fa;
    }
    h1 {
      color: #007bff;
    }
    form {
      margin: 20px;
    }
    input[type="text"] {
      padding: 5px;
      margin: 5px;
    }
    input[type="submit"] {
      padding: 5px 10px;
    }
    table {
      margin: 20px auto;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      background-color: #007bff;
      color: white;
    }
    .message {
      color: green;
    }
    .error {
      color: red;
    }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ Prepared Statements!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name"><br>
    <label>អាយុ: </label>
    <input type="text" name="age"><br>
    <input type="submit" value="បញ្ចូល">
  </form>
  <p class="<?php echo strpos($message, 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($message); ?>
  </p>
  <table>
    <tr>
      <th>ID</th>
      <th>ឈ្មោះ</th>
      <th>អាយុ</th>
    </tr>
    <?php foreach ($rows as $row): ?>
      <tr>
        <td><?php echo htmlspecialchars($row['id']); ?></td>
        <td><?php echo htmlspecialchars($row['name']); ?></td>
        <td><?php echo htmlspecialchars($row['age']); ?></td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson4_3Content;