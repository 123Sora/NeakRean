import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson6_1Content: LessonContent = {
  title: 'ការគ្រប់គ្រងកំហុស និងការស្វែងរកកំហុសក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពីការគ្រប់គ្រងកំហុសក្នុង PHP ដោយប្រើ try-catch',
    'ស្វែងយល់ពីការប្រើ Custom Error Handlers និង Exception Classes',
    'ស្គាល់បច្ចេកទេស Debugging ដូចជា var_dump និង Error Logging',
    'អនុវត្តការគ្រប់គ្រងកំហុសក្នុងកម្មវិធី PHP',
    'បង្កើតកម្មវិធីដែលមានសុវត្ថិភាព និងងាយស្រួលក្នុងការស្វែងរកកំហុស'
  ],
  content: `
# ការគ្រប់គ្រងកំហុស និងការស្វែងរកកំហុសក្នុង PHP 🛠️

---

ការគ្រប់គ្រងកំហុស (**Error Handling**) និងការស្វែងរកកំហុស (**Debugging**) គឺជាផ្នែកសំខាន់ក្នុងការអភិវឌ្ឍកម្មវិធី PHP។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការប្រើ \`try-catch\`, Custom Error Handlers, និងបច្ចេកទេស Debugging ដើម្បីធ្វើឱ្យកម្មវិធីមានភាពរឹងមាំ។

---

## 1. ការគ្រប់គ្រងកំហុសជាមួយ try-catch

PHP ប្រើ \`try-catch\` ដើម្បីគ្រប់គ្រង **Exceptions** ដែលជាកំហុសដែលកើតឡើងនៅពេលកម្មវិធីដំណើរការ។

**ឧទាហរណ៍ try-catch:**

\`\`\`php
<?php
try {
    $number = 0;
    if ($number == 0) {
        throw new Exception("ការបែងចែកដោយសូន្យ!");
    }
    echo 10 / $number;
} catch (Exception $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

**ការប្រើ PDO ជាមួយ try-catch:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->query("SELECT * FROM nonexistent_table");
} catch (PDOException $e) {
    echo "កំហុស Database: " . $e->getMessage();
}
?>
\`\`\`

---

## 2. Custom Error Handlers

PHP អនុញ្ញាតឱ្យបង្កើត **Custom Error Handler** ដើម្បីគ្រប់គ្រងកំហុសដែលមិនមែនជា Exception។

**ឧទាហរណ៍ Custom Error Handler:**

\`\`\`php
<?php
function customError($errno, $errstr, $errfile, $errline) {
    echo "កំហុស [$errno]: $errstr នៅក្នុង $errfile ជួរទី $errline";
}

set_error_handler("customError");

echo $undefinedVariable; // បង្កកំហុស
?>
\`\`\`

---

## 3. Custom Exception Classes

អ្នកអាចបង្កើត Custom Exception Class ដោយស្នងពី \`Exception\` Class។

**ឧទាហរណ៍ Custom Exception:**

\`\`\`php
<?php
class CustomException extends Exception {}

try {
    $age = -5;
    if ($age < 0) {
        throw new CustomException("អាយុមិនអាចជាចំនួនអវិជ្ជមាន!");
    }
    echo "អាយុ: $age";
} catch (CustomException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 4. Debugging ក្នុង PHP

Debugging ជួយស្វែងរក និងដោះស្រាយកំហុសក្នុងកូដ។ បច្ចេកទេសទូទៅរួមមាន:

- **var_dump / print_r**: បង្ហាញព័ត៌មានអំពី Variables។
- **error_log**: កត់ត្រាកំហុសទៅឯកសារ Log។
- **display_errors**: បើកនៅក្នុង \`php.ini\` សម្រាប់បង្ហាញកំហុស។

**ឧទាហរណ៍ Debugging:**

\`\`\`php
<?php
$array = ["name" => "សុភា", "age" => 20];
var_dump($array);

error_log("កំហុសកើតឡើងនៅ " . date("Y-m-d H:i:s"), 3, "error.log");
?>
\`\`\`

---

## 5. ការប្រើ Error Handling និង Debugging ក្នុងគេហទំព័រ

Error Handling និង Debugging ត្រូវបានប្រើដើម្បីធ្វើឱ្យគេហទំព័រមានភាពរឹងមាំ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<?php
ini_set('display_errors', 0); // បិទការបង្ហាញកំហុសនៅ Browser
ini_set('log_errors', 1); // បើក Error Logging
ini_set('error_log', 'error.log'); // កំណត់ឯកសារ Log

class DatabaseException extends Exception {}

try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        if (empty($name)) {
            throw new DatabaseException("ឈ្មោះមិនអាចទទេ!");
        }
        $stmt = $pdo->prepare("INSERT INTO students (name) VALUES (:name)");
        $stmt->execute(['name' => $name]);
        $message = "បានបញ្ចូលទិន្នន័យជោគជ័យ!";
    }
    
    $stmt = $pdo->prepare("SELECT id, name FROM students");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (DatabaseException $e) {
    $message = "កំហុស: " . $e->getMessage();
    error_log("DatabaseException: " . $e->getMessage() . " at " . date("Y-m-d H:i:s"), 3, "error.log");
} catch (PDOException $e) {
    $message = "កំហុស Database: " . $e->getMessage();
    error_log("PDOException: " . $e->getMessage() . " at " . date("Y-m-d H:i:s"), 3, "error.log");
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Error Handling and Debugging</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ Error Handling និង Debugging!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name"><br>
    <input type="submit" value="បញ្ចូល">
  </form>
  <p class="<?php echo strpos($message, 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo isset($message) ? htmlspecialchars($message) : ''; ?>
  </p>
  <table>
    <tr>
      <th>ID</th>
      <th>ឈ្មោះ</th>
    </tr>
    <?php if (isset($rows)): ?>
      <?php foreach ($rows as $row): ?>
        <tr>
          <td><?php echo htmlspecialchars($row['id']); ?></td>
          <td><?php echo htmlspecialchars($row['name']); ?></td>
        </tr>
      <?php endforeach; ?>
    <?php endif; ?>
  </table>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ try-catch ជាមួយ Exception</h3>
<p>គ្រប់គ្រងកំហុសជាមួយ try-catch។</p>
<pre><code class="language-php">
<?php
try {
    throw new Exception("កំហុសសាកល្បង!");
} catch (Exception $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Custom Error Handler</h3>
<p>បង្កើត Custom Error Handler។</p>
<pre><code class="language-php">
<?php
function customError($errno, $errstr) {
    echo "កំហុស [$errno]: $errstr";
}
set_error_handler("customError");
echo $undefinedVariable;
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Custom Exception</h3>
<p>បង្កើត Custom Exception Class។</p>
<pre><code class="language-php">
<?php
class CustomException extends Exception {}
try {
    throw new CustomException("កំហុសផ្ទាល់ខ្លួន!");
} catch (CustomException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Debugging ជាមួយ var_dump</h3>
<p>ប្រើ var_dump ដើម្បី Debugging។</p>
<pre><code class="language-php">
<?php
$data = ["name" => "សុភា", "age" => 20];
var_dump($data);
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `try-catch` ក្នុង PHP ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើតកំហុស',
        'គ្រប់គ្រង Exceptions',
        'Debugging Variables',
        'កត់ត្រាកំហុស'
      ],
      correct: 1,
      explanation: '`try-catch` ប្រើសម្រាប់គ្រប់គ្រង Exceptions នៅពេលកម្មវិធីដំណើរការ។'
    },
    {
      question: 'តើ Exception គឺជាអ្វី?',
      options: [
        'កំហុសដែលកើតឡើងនៅពេលដំណើរការ',
        'កំហុស Syntax',
        'កំហុសក្នុង Database',
        'កំហុសក្នុង CSS'
      ],
      correct: 0,
      explanation: 'Exception គឺជាកំហុសដែលកើតឡើងនៅពេលកម្មវិធីដំណើរការ។'
    },
    {
      question: 'តើ `set_error_handler` ធ្វើអ្វី?',
      options: [
        'បង្កើត Exception',
        'កំណត់ Custom Error Handler',
        'កត់ត្រាកំហុសទៅ Log',
        'បង្ហាញកំហុស'
      ],
      correct: 1,
      explanation: '`set_error_handler` កំណត់ Custom Error Handler សម្រាប់កំហុសដែលមិនមែន Exception។'
    },
    {
      question: 'តើ `error_log` ក្នុង PHP ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញកំហុសនៅ Browser',
        'កត់ត្រាកំហុសទៅឯកសារ Log',
        'បង្កើត Exception',
        'Debug Variables'
      ],
      correct: 1,
      explanation: '`error_log` កត់ត្រាកំហុសទៅឯកសារ Log។'
    },
    {
      question: 'តើ `var_dump` ប្រើសម្រាប់អ្វី?',
      options: [
        'កត់ត្រាកំហុស',
        'បង្ហាញព័ត៌មានអំពី Variables',
        'បង្កើត Exception',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: '`var_dump` បង្ហាញព័ត៌មានលម្អិតអំពី Variables សម្រាប់ Debugging។'
    },
    {
      question: 'តើ Custom Exception Class ត្រូវស្នងពី Class ណា?',
      options: [
        'PDO',
        'Exception',
        'Error',
        'Throwable'
      ],
      correct: 1,
      explanation: 'Custom Exception Class ត្រូវស្នងពី `Exception` Class។'
    },
    {
      question: 'តើ `throw` ក្នុង PHP ធ្វើអ្វី?',
      options: [
        'បង្ហាញកំហុស',
        'បង្កើត Exception',
        'កត់ត្រាកំហុស',
        'បិទកម្មវិធី'
      ],
      correct: 1,
      explanation: '`throw` បង្កើត Exception ដែលត្រូវបានគ្រប់គ្រងដោយ `try-catch`។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `try { throw new Exception("កំហុស!"); } catch (Exception $e) { echo $e->getMessage(); }`',
      options: [
        'កំហុស!',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'កូดនេះបង្ហាញ "កំហុស!" ពី `$e->getMessage()`។'
    },
    {
      question: 'តើ `PDO::ERRMODE_EXCEPTION` ធ្វើអ្វី?',
      options: [
        'បិទកំហុស',
        'បង្កើត Exception សម្រាប់កំហុស Database',
        'កត់ត្រាកំហុស',
        'បង្ហាញកំហុស'
      ],
      correct: 1,
      explanation: '`PDO::ERRMODE_EXCEPTION` បង្កើត Exception សម្រាប់កំហុស Database។'
    },
    {
      question: 'តើ Debugging មានគោលបំណងអ្វី?',
      options: [
        'បង្កើតកម្មវិធី',
        'ស្វែងរក និងដោះស្រាយកំហុស',
        'បង្កើត Database',
        'ការពារសុវត្ថិភាព'
      ],
      correct: 1,
      explanation: 'Debugging ស្វែងរក និងដោះស្រាយកំហុសក្នុងកូដ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `function errorHandler($errno, $errstr) { echo $errstr; } set_error_handler("errorHandler"); echo $undefined;`',
      options: [
        'Undefined variable: undefined',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'Custom Error Handler បង្ហាញ "Undefined variable: undefined"។'
    },
    {
      question: 'តើ `ini_set("display_errors", 0)` ធ្វើអ្វី?',
      options: [
        'បើកការបង្ហាញកំហុស',
        'បិទការបង្ហាញកំហុសនៅ Browser',
        'កត់ត្រាកំហុស',
        'បង្កើត Exception'
      ],
      correct: 1,
      explanation: '`ini_set("display_errors", 0)` បិទការបង្ហាញកំហុសនៅ Browser។'
    }
  ],
  lab: {
    task: `
บង្កើតឯកសារ PHP ដែលប្រើ Error Handling និង Debugging ដើម្បីគ្រប់គ្រង Form សម្រាប់បញ្ចូលទិន្នន័យសិស្ស។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP Error Handling and Debugging Lab"៕

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ Error Handling និង Debugging!"៕
   - បង្កើត Form ដែលមាន \`<input>\` សម្រាប់ឈ្មោះ និងប៊ូតុង "បញ្ចូល" ដោយប្រើ \`method="POST"\`៕
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញសារជោគជ័យ ឬកំហុស៕
   - បង្ហាញទិន្នន័យសិស្សនៅក្នុង \`<table>\`៕

3. **PHP Functionality:**
   - បិទ \`display_errors\` និងបើក \`log_errors\` ដោយប្រើ \`ini_set\`៕
   - កំណត់ឯកសារ Log ជា \`error.log\`៕
   - បង្កើត Custom Exception Class \`InputException\` ដែលស្នងពី \`Exception\`៕
   - ភ្ជាប់ទៅ Database \`school\` ដោយប្រើ PDO និង \`PDO::ERRMODE_EXCEPTION\`៕
   - ប្រើ \`filter_var\` ដើម្បីសម្អាតទិន្នន័យឈ្មោះ (FILTER_SANITIZE_STRING)៕
   - បើឈ្មោះទទេ បង្កើត \`InputException\`៕
   - ប្រើ Prepared Statement ជាមួយ Named Parameters ដើម្បីបញ្ចូលទិន្នន័យទៅតារាង \`students\`៕
   - ប្រើ \`try-catch\` ដើម្បីគ្រប់គ្រង \`InputException\` និង \`PDOException\`៕
   - កត់ត្រាកំហុសទៅ \`error.log\` ដោយប្រើ \`error_log\`៕
   - ប្រើ Prepared Statement ដើម្បីទាញយកទិន្នន័យ (id, name) ពីតារាង \`students\`៕
   - ប្រើ \`htmlspecialchars\` ដើម្បីការពារ XSS៕

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`៕
     - \`color: #007bff;\` សម្រាប់ \`h1\`៕
     - \`margin: 20px;\` សម្រាប់ \`form\`៕
     - \`padding: 5px; margin: 5px;\` សម្រាប់ \`<input>\`៕
     - \`padding: 5px 10px;\` សម្រាប់ \`<input type="submit">\`៕
     - \`border-collapse: collapse;\` និង \`margin: 20px auto;\` សម្រាប់ \`table\`៕
     - \`border: 1px solid #ddd; padding: 8px;\` សម្រាប់ \`th\` និង \`td\`៕
     - \`background-color: #007bff; color: white;\` សម្រាប់ \`th\`៕
     - \`color: green;\` សម្រាប់សារជោគជ័យ (\`.message\`)៕
     - \`color: red;\` សម្រាប់សារកំហុស (\`.error\`)៕

**ការណែនាំ:**
- ត្រូវប្រាកដថា Database \`school\` និងតារាង \`students\` (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50)) មាន៕
- បញ្ចូលទិន្នន័យគំរូមួយចំនួនមុននឹងសាកល្បង៕
- ពិនិត្យឯកសារ \`error.log\` ដើម្បីមើលកំហុស៕
`,
    solution: `
\`\`\`php
<?php
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', 'error.log');

class InputException extends Exception {}

try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        if (empty($name)) {
            throw new InputException("ឈ្មោះមិនអាចទទេ!");
        }
        $stmt = $pdo->prepare("INSERT INTO students (name) VALUES (:name)");
        $stmt->execute(['name' => $name]);
        $message = "បានបញ្ចូលទិន្នន័យជោគជ័យ!";
    }
    
    $stmt = $pdo->prepare("SELECT id, name FROM students");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (InputException $e) {
    $message = "កំហុស: " . $e->getMessage();
    error_log("InputException: " . $e->getMessage() . " at " . date("Y-m-d H:i:s"), 3, "error.log");
} catch (PDOException $e) {
    $message = "កំហុស Database: " . $e->getMessage();
    error_log("PDOException: " . $e->getMessage() . " at " . date("Y-m-d H:i:s"), 3, "error.log");
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Error Handling and Debugging Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ Error Handling និង Debugging!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name"><br>
    <input type="submit" value="បញ្ចូល">
  </form>
  <p class="<?php echo strpos($message, 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($message); ?>
  </p>
  <table>
    <tr>
      <th>ID</th>
      <th>ឈ្មោះ</th>
    </tr>
    <?php foreach ($rows as $row): ?>
      <tr>
        <td><?php echo htmlspecialchars($row['id']); ?></td>
        <td><?php echo htmlspecialchars($row['name']); ?></td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson6_1Content;