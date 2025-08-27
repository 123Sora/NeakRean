import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson6_2Content: LessonContent = {
  title: 'ការអនុវត្តសុវត្ថិភាពល្អបំផុតក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពីការវាយប្រហារសុវត្ថិភាពទូទៅដូចជា SQL Injection និង XSS',
    'ស្វែងយល់ពីការប្រើ Input Validation និង Sanitization',
    'ស្គាល់ការការពារ SQL Injection ដោយប្រើ Prepared Statements',
    'អនុវត្តការការពារ XSS ដោយប្រើ htmlspecialchars',
    'គ្រប់គ្រង Session ដោយសុវត្ថិភាព',
    'បង្កើតកម្មវិធី PHP ដែលមានសុវត្ថិភាព'
  ],
  content: `
# ការអនុវត្តសុវត្ថិភាពល្អបំផុតក្នុង PHP 🔒

---

សុវត្ថិភាពគឺជាផ្នែកសំខាន់ក្នុងការអភិវឌ្ឍគេហទំព័រ PHP។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការវាយប្រហារទូទៅ (SQL Injection, XSS) និងការអនុវត្តល្អបំផុតដើម្បីការពារកម្មវិធី។

---

## 1. Input Validation និង Sanitization

ការផ្ទៀងផ្ទាត់ (**Validation**) និងការសម្អាត (**Sanitization**) ទិន្នន័យអ្នកប្រើគឺចាំបាច់ដើម្បីការពារកម្មវិធី។

**ឧទាហរណ៍ Input Validation:**

\`\`\`php
<?php
$email = $_POST['email'];
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "អ៊ីម៉ែលមិនត្រឹមត្រូវ!";
} else {
    echo "អ៊ីម៉ែលត្រឹមត្រូវ: $email";
}
?>
\`\`\`

**ឧទាហរណ៍ Sanitization:**

\`\`\`php
<?php
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
echo "ឈ្មោះ: $name";
?>
\`\`\`

---

## 2. ការការពារ SQL Injection

ប្រើ **Prepared Statements** ជាមួយ PDO ដើម្បីការពារ SQL Injection។

**ឧទាហរណ៍ Prepared Statements:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("SELECT * FROM students WHERE name = :name");
    $stmt->execute(['name' => $_POST['name']]);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 3. ការការពារ XSS (Cross-Site Scripting)

ប្រើ \`htmlspecialchars\` ដើម្បីការពារ XSS នៅពេលបង្ហាញទិន្នន័យអ្នកប្រើ។

**ឧទាហរណ៍ XSS Protection:**

\`\`\`php
<?php
$input = "<script>alert('XSS Attack!');</script>";
echo htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
?>
\`\`\`

---

## 4. Secure Session Management

ការគ្រប់គ្រង **Session** ដោយសុវត្ថិភាពជួយការពារការវាយប្រហារ Session Hijacking។

**ឧទាហរណ៍ Secure Session:**

\`\`\`php
<?php
session_start();
session_regenerate_id(true); // បង្កើត Session ID ថ្មី
$_SESSION['user_id'] = 123;
if (!isset($_SESSION['user_id'])) {
    echo "សូមចូលប្រើប្រាស់!";
}
?>
\`\`\`

---

## 5. ការអនុវត្តសុវត្ថិភាពក្នុងគេហទំព័រ

ការអនុវត្តសុវត្ថិភាពរួមគ្នាដើម្បីបង្កើតគេហទំព័រដែលមានសុវត្ថិភាព។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<?php
session_start();
session_regenerate_id(true);

try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $age = filter_var($_POST['age'], FILTER_SANITIZE_NUMBER_INT);
        if (empty($name) || !is_numeric($age)) {
            $message = "សូមបញ្ចូលឈ្មោះ និងអាយុឲ្យត្រឹមត្រូវ!";
        } else {
            $stmt = $pdo->prepare("INSERT INTO students (name, age) VALUES (:name, :age)");
            $stmt->execute(['name' => $name, 'age' => $age]);
            $message = "បានបញ្ចូលទិន្នន័យជោគជ័យ!";
            $_SESSION['last_action'] = "បញ្ចូលទិន្នន័យ: $name";
        }
    }
    
    $stmt = $pdo->prepare("SELECT id, name, age FROM students");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    $message = "កំហុស Database: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Security Best Practices</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ Security Best Practices!</h1>
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
  <?php if (isset($_SESSION['last_action'])): ?>
    <p>សកម្មភាពចុងក្រោយ: <?php echo htmlspecialchars($_SESSION['last_action']); ?></p>
  <?php endif; ?>
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
    `<h3>ឧទាហរណ៍៖ Input Validation</h3>
<p>ផ្ទៀងផ្ទាត់អ៊ីម៉ែល។</p>
<pre><code class="language-php">
<?php
$email = "test@example.com";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "អ៊ីម៉ែលមិនត្រឹមត្រូវ!";
} else {
    echo "អ៊ីម៉ែលត្រឹមត្រូវ!";
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ SQL Injection Protection</h3>
<p>ប្រើ Prepared Statements៕</p>
<pre><code class="language-php">
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->prepare("SELECT * FROM students WHERE name = ?");
    $stmt->execute([$_POST['name']]);
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ XSS Protection</h3>
<p>ប្រើ htmlspecialchars ដើម្បីការពារ XSS៕</p>
<pre><code class="language-php">
<?php
$input = "<script>alert('XSS');</script>";
echo htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Secure Session</h3>
<p>គ្រប់គ្រង Session ដោយសុវត្ថិភាព៕</p>
<pre><code class="language-php">
<?php
session_start();
session_regenerate_id(true);
$_SESSION['user'] = "សុភា";
echo $_SESSION['user'];
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ SQL Injection គឺជាអ្វី?',
      options: [
        'ការបញ្ចូលទិន្នន័យទៅ Database',
        'ការវាយប្រហារដោយបញ្ចូល SQL គ្រោះថ្នាក់',
        'ការទាញយកទិន្នន័យ',
        'ការការពារ Database'
      ],
      correct: 1,
      explanation: 'SQL Injection គឺជាការវាយប្រហារដោយបញ្ចូល SQL គ្រោះថ្នាក់។'
    },
    {
      question: 'តើ `filter_var` ប្រើសម្រាប់អ្វី?',
      options: [
        'ការពារ XSS',
        'ផ្ទៀងផ្ទាត់ និងសម្អាតទិន្នន័យ',
        'បញ្ចូលទិន្នន័យទៅ Database',
        'គ្រប់គ្រង Session'
      ],
      correct: 1,
      explanation: '`filter_var` ប្រើសម្រាប់ផ្ទៀងផ្ទាត់ និងសម្អាតទិន្នន័យអ្នកប្រើ។'
    },
    {
      question: 'តើ Prepared Statements ជួយការពារអ្វី?',
      options: [
        'XSS',
        'SQL Injection',
        'Session Hijacking',
        'File Inclusion'
      ],
      correct: 1,
      explanation: 'Prepared Statements ការពារ SQL Injection ដោយបំបែក Query និងទិន្នន័យ៕'
    },
    {
      question: 'តើ `htmlspecialchars` ប្រើសម្រាប់អ្វី?',
      options: [
        'ការពារ SQL Injection',
        'ការពារ XSS',
        'សម្អាតទិន្នន័យ',
        'គ្រប់គ្រង Session'
      ],
      correct: 1,
      explanation: '`htmlspecialchars` ការពារ XSS ដោយបម្លែងតួអក្សរពិសេស៕'
    },
    {
      question: 'តើ `session_regenerate_id` ធ្វើអ្វី?',
      options: [
        'បិទ Session',
        'បង្កើត Session ID ថ្មី',
        'លុប Session',
        'បញ្ចូលទិន្នន័យ Session'
      ],
      correct: 1,
      explanation: '`session_regenerate_id` បង្កើត Session ID ថ្មីដើម្បីការពារ Session Hijacking៕'
    },
    {
      question: 'តើ XSS (Cross-Site Scripting) គឺជាអ្វី?',
      options: [
        'ការវាយប្រហារដោយបញ្ចូល JavaScript គ្រោះថ្នាក់',
        'ការវាយប្រហារទៅលើ Database',
        'ការលួច Session',
        'ការបញ្ចូល File'
      ],
      correct: 0,
      explanation: 'XSS គឺជាការវាយប្រហារដោយបញ្ចូល JavaScript គ្រោះថ្នាក់៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `echo htmlspecialchars("<script>alert(\'XSS\');</script>", ENT_QUOTES, "UTF-8");`',
      options: [
        '<script>alert("XSS");</script>',
        '&lt;script&gt;alert(&#039;XSS&#039;);&lt;/script&gt;',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: '`htmlspecialchars` បម្លែងតួអក្សរពិសេសទៅជា HTML Entities៕'
    },
    {
      question: 'តើ `FILTER_SANITIZE_STRING` ធ្វើអ្វី?',
      options: [
        'ផ្ទៀងផ្ទាត់អ៊ីម៉ែល',
        'សម្អាត String ដោយលុប HTML Tags',
        'បញ្ចូលទិន្នន័យ',
        'ការពារ XSS'
      ],
      correct: 1,
      explanation: '`FILTER_SANITIZE_STRING` សម្អាត String ដោយលុប HTML Tags៕'
    },
    {
      question: 'តើ Session Hijacking គឺជាអ្វី?',
      options: [
        'ការលួច Session ID ដើម្បីចូលប្រើប្រាស់',
        'ការបញ្ចូល SQL គ្រោះថ្នាក់',
        'ការបញ្ចូល JavaScript',
        'ការលុប Database'
      ],
      correct: 0,
      explanation: 'Session Hijacking គឺជាការលួច Session ID ដើម្បីចូលប្រើប្រាស់៕'
    },
    {
      question: 'តើការអនុវត្តល្អបំផុតសម្រាប់ការពារ SQL Injection គឺជាអ្វី?',
      options: [
        'ប្រើ htmlspecialchars',
        'ប្រើ Prepared Statements',
        'ប្រើ session_regenerate_id',
        'ប្រើ var_dump'
      ],
      correct: 1,
      explanation: 'Prepared Statements ជួយការពារ SQL Injection៕'
    },
    {
      question: 'តើ `session_start` ត្រូវបានហៅនៅពេលណា?',
      options: [
        'នៅចុងកម្មវិធី',
        'នៅដើមកម្មវិធីមុនប្រើ Session',
        'នៅពេលបញ្ចូលទិន្នន័យ',
        'នៅពេល Debug'
      ],
      correct: 1,
      explanation: '`session_start` ត្រូវបានហៅនៅដើមកម្មវិធីមុនប្រើ Session៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$name = filter_var("<b>សុភា</b>", FILTER_SANITIZE_STRING); echo $name;`',
      options: [
        '<b>សុភា</b>',
        'សុភា',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: '`FILTER_SANITIZE_STRING` លុប HTML Tags ដូច្នេះបង្ហាញ "សុភា"៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលប្រើការអនុវត្តសុវត្ថិភាពល្អបំផុតដើម្បីគ្រប់គ្រង Form សម្រាប់បញ្ចូលទិន្នន័យសិស្ស។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title: "PHP Security Best Practices Lab"៕

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ Security Best Practices!"៕
   - បង្កើត Form ដែលមាន \`<input>\` សម្រាប់ឈ្មោះ និងអាយុ និងប៊ូតុង "បញ្ចូល" ដោយប្រើ \`method="POST"\`៕
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញសារជោគជ័យ ឬកំហុស៕
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញសកម្មភាព Session ចុងក្រោយ៕
   - បង្ហាញទិន្នន័យសិស្សនៅក្នុង \`<table>\`៕

3. **PHP Functionality:**
   - បើក Session ដោយប្រើ \`session_start\` និង \`session_regenerate_id(true)\`៕
   - ភ្ជាប់ទៅ Database \`school\` ដោយប្រើ PDO និង \`PDO::ERRMODE_EXCEPTION\`៕
   - ប្រើ \`filter_var\` ដើម្បីសម្អាតឈ្មោះ (FILTER_SANITIZE_STRING) និងអាឯ (FILTER_SANITIZE_NUMBER_INT)៕
   - ផ្ទៀងផ្ទាត់ថាឈ្មោះមិនទទេ និងអាយុជាចំនួន៕
   - ប្រើ Prepared Statement ជាមួយ Named Parameters ដើម្បីបញ្ចូលទិន្នន័យទៅតារាង \`students\`៕
   - រក្សាទុកសកម្មភាពចុងក្រោយក្នុង \`$_SESSION['last_action']\`៕
   - ប្រើ \`try-catch\` ដើម្បីគ្រប់គ្រង \`PDOException\`៕
   - ប្រើ \`htmlspecialchars\` ដើម្បីការពារ XSS នៅពេលបង្ហាញទិន្នន័យ៕
   - ប្រើ Prepared Statement ដើម្បីទាញយកទិន្នន័យ (id, name, age) ពីតារាង \`students\`៕

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
- ត្រូវប្រាកដថា Database \`school\` និងតារាង \`students\` (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), age INT) មាន៕
- បញ្ចូលទិន្នន័យគំរូមួយចំនួនមុននឹងសាកល្បង៕
- ពិនិត្យ Session និងទិន្នន័យនៅក្នុងតារាង៕
`,
    solution: `
\`\`\`php
<?php
session_start();
session_regenerate_id(true);

try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $age = filter_var($_POST['age'], FILTER_SANITIZE_NUMBER_INT);
        if (empty($name) || !is_numeric($age)) {
            $message = "សូមបញ្ចូលឈ្មោះ និងអាយុឲ្យត្រឹមត្រូវ!";
        } else {
            $stmt = $pdo->prepare("INSERT INTO students (name, age) VALUES (:name, :age)");
            $stmt->execute(['name' => $name, 'age' => $age]);
            $message = "បានបញ្ចូលទិន្នន័យជោគជ័យ!";
            $_SESSION['last_action'] = "បញ្ចូលទិន្នន័យ: $name";
        }
    }
    
    $stmt = $pdo->prepare("SELECT id, name, age FROM students");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    $message = "កំហុស Database: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Security Best Practices Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ Security Best Practices!</h1>
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
  <?php if (isset($_SESSION['last_action'])): ?>
    <p>សកម្មភាពចុងក្រោយ: <?php echo htmlspecialchars($_SESSION['last_action']); ?></p>
  <?php endif; ?>
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

export default PHPLesson6_2Content;