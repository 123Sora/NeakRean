import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson7_1Content: LessonContent = {
  title: 'ការបង្កើតកម្មវិធី CRUD ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិត CRUD (Create, Read, Update, Delete)',
    'ស្វែងយល់ពីការប្រើ PDO សម្រាប់ប្រតិបត្តិការ CRUD',
    'អនុវត្តការគ្រប់គ្រងទិន្នន័យដោយសុវត្ថិភាព',
    'ប្រើ Error Handling និង Input Validation',
    'បង្កើតកម្មវិធី CRUD ដែលអនុញ្ញាតឱ្យគ្រប់គ្រងទិន្នន័យសិស្ស',
    'បន្ថែមសុវត្ថិភាពដូចជា XSS Protection និង SQL Injection Prevention'
  ],
  content: `
# ការបង្ផើតកម្មវិធី CRUD ក្នុង PHP 📋

---

**CRUD** (Create, Read, Update, Delete) គឺជាប្រតិបត្តិការស្នូលសម្រាប់គ្រប់គ្រងទិន្នន័យក្នុងកម្មវិធី។ នៅក្នុងមេរៀននេះ យើងនឹងបង្កើតកម្មវិធី CRUD ដើម្បីគ្រប់គ្រងទិន្នន័យសិស្សដោយប្រើ PDO។

---

## 1. ការបង្កើត (Create)

បញ្ចូលទិន្នន័យថ្មីទៅក្នុង Database ដោយប្រើ Prepared Statements។

**ឧទាហរណ៍ Create:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $stmt = $pdo->prepare("INSERT INTO students (name) VALUES (:name)");
    $stmt->execute(['name' => $name]);
    echo "បានបញ្ចូលទិន្នន័យ!";
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 2. ការអាន (Read)

ទាញទិន្នន័យពី Database ដើម្បីបង្ហាញ។

**ឧទាហរណ៍ Read:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->prepare("SELECT id, name FROM students");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach ($rows as $row) {
        echo htmlspecialchars($row['name']) . "<br>";
    }
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 3. ការកែប្រែ (Update)

កែប្រែទិន្នន័យនៅក្នុង Database។

**ឧទាហរណ៍ Update:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);
    $stmt = $pdo->prepare("UPDATE students SET name = :name WHERE id = :id");
    $stmt->execute(['name' => $name, 'id' => $id]);
    echo "បានកែប្រែទិន្នន័យ!";
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 4. ការលុប (Delete)

លុបទិន្នន័យចេញពី Database។

**ឧទាហរណ៍ Delete:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);
    $stmt = $pdo->prepare("DELETE FROM students WHERE id = :id");
    $stmt->execute(['id' => $id]);
    echo "បានលុបទិន្នន័យ!";
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 5. កម្មវិធី CRUD ពេញលេញ

បង្ផើតកម្មវិធី CRUD ដែលមានទម្រង់សម្រាប់បញ្ចូល និងកែប្រែ និងតារាងសម្រាប់បង្ហាញ និងលុប។

**ឧទាហរណ៍ CRUD ពេញលេញ:**

\`\`\`php
<?php
session_start();
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    $edit_id = isset($_GET['edit_id']) ? filter_var($_GET['edit_id'], FILTER_SANITIZE_NUMBER_INT) : null;
    $edit_name = "";
    
    if ($edit_id) {
        $stmt = $pdo->prepare("SELECT name FROM students WHERE id = :id");
        $stmt->execute(['id' => $edit_id]);
        $edit_name = $stmt->fetchColumn();
    }
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        if (empty($name)) {
            throw new Exception("ឈ្មោះមិនអាចទទេ!");
        }
        if (isset($_POST['id']) && !empty($_POST['id'])) {
            // Update
            $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);
            $stmt = $pdo->prepare("UPDATE students SET name = :name WHERE id = :id");
            $stmt->execute(['name' => $name, 'id' => $id]);
            $message = "បានកែប្រែទិន្នន័យ!";
        } else {
            // Create
            $stmt = $pdo->prepare("INSERT INTO students (name) VALUES (:name)");
            $stmt->execute(['name' => $name]);
            $message = "បានបញ្ចូលទិន្នន័យ!";
        }
        $_SESSION['message'] = $message;
        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
    }
    
    if (isset($_GET['delete_id'])) {
        $id = filter_var($_GET['delete_id'], FILTER_SANITIZE_NUMBER_INT);
        $stmt = $pdo->prepare("DELETE FROM students WHERE id = :id");
        $stmt->execute(['id' => $id]);
        $_SESSION['message'] = "បានលុបទិន្នន័យ!";
        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
    }
    
    $stmt = $pdo->prepare("SELECT id, name FROM students");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    $message = "កំហុស: " . $e->getMessage();
    $_SESSION['message'] = $message;
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP CRUD Application</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    form { margin: 20px; }
    input[type="text"] { padding: 5px; margin: 5px; }
    input[type="submit"] { padding: 5px 10px; }
    table { margin: 20px auto; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    th { background-color: #007bff; color: white; }
    a { color: #007bff; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .message { color: green; }
    .error { color: red; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ CRUD Application!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name" value="<?php echo htmlspecialchars($edit_name); ?>">
    <?php if ($edit_id): ?>
      <input type="hidden" name="id" value="<?php echo htmlspecialchars($edit_id); ?>">
    <?php endif; ?>
    <input type="submit" value="<?php echo $edit_id ? 'កែប្រែ' : 'បញ្ចូល'; ?>">
  </form>
  <p class="<?php echo strpos($_SESSION['message'] ?? '', 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($_SESSION['message'] ?? ''); unset($_SESSION['message']); ?>
  </p>
  <table>
    <tr>
      <th>ID</th>
      <th>ឈ្មោះ</th>
      <th>សកម្មភាព</th>
    </tr>
    <?php foreach ($rows as $row): ?>
      <tr>
        <td><?php echo htmlspecialchars($row['id']); ?></td>
        <td><?php echo htmlspecialchars($row['name']); ?></td>
        <td>
          <a href="?edit_id=<?php echo htmlspecialchars($row['id']); ?>">កែប្រែ</a> |
          <a href="?delete_id=<?php echo htmlspecialchars($row['id']); ?>" onclick="return confirm('តើអ្នកប្រាកដជាចង់លុប?');">លុប</a>
        </td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Create</h3>
<p>បញ្ចូលទិន្នន័យថ្មី៕</p>
<pre><code class="language-php">
<?php
$pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->prepare("INSERT INTO students (name) VALUES (:name)");
$stmt->execute(['name' => 'សុភា']);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Read</h3>
<p>ទាញទិន្នន័យ៕</p>
<pre><code class="language-php">
<?php
$pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->prepare("SELECT id, name FROM students");
$stmt->execute();
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Update</h3>
<p>កែប្រែទិន្នន័យ៕</p>
<pre><code class="language-php">
<?php
$pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->prepare("UPDATE students SET name = :name WHERE id = :id");
$stmt->execute(['name' => 'លីនា', 'id' => 1]);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Delete</h3>
<p>លុបទិន្នន័យ៕</p>
<pre><code class="language-php">
<?php
$pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->prepare("DELETE FROM students WHERE id = :id");
$stmt->execute(['id' => 1]);
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ CRUD តំណាងឱ្យអ្វី?',
      options: [
        'Create, Read, Update, Delete',
        'Connect, Retrieve, Update, Drop',
        'Create, Remove, Update, Display',
        'Call, Read, Upload, Delete'
      ],
      correct: 0,
      explanation: 'CRUD តំណាងឱ្យ Create, Read, Update, Delete៕'
    },
    {
      question: 'តើ PDO ប្រើសម្រាប់អ្វីក្នុង CRUD?',
      options: [
        'បង្កើត HTML',
        'គ្រប់គ្រង Database',
        'ធ្វើ HTTP Request',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'PDO ប្រើសម្រាប់គ្រប់គ្រង Database ក្នុងប្រតិបត្តិការ CRUD៕'
    },
    {
      question: 'តើ Prepared Statement ជួយអ្វីក្នុង CRUD?',
      options: [
        'បង្កើនល្បឿន',
        'ការពារ SQL Injection',
        'បង្កើត Form',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'Prepared Statement ការពារ SQL Injection ក្នុង CRUD៕'
    },
    {
      question: 'តើ `filter_var` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្អាត និងផ្ទៀងផ្ទាត់ទិន្នន័យ',
        'បង្កើត Database',
        'ធ្វើ HTTP Request',
        'កត់ត្រា Log'
      ],
      correct: 0,
      explanation: '`filter_var` សម្អាត និងផ្ទៀងផ្ទាត់ទិន្នន័យអ្នកប្រើ៕'
    },
    {
      question: 'តើ `htmlspecialchars` ជួយអ្វីក្នុង CRUD?',
      options: [
        'ការពារ XSS',
        'ការពារ SQL Injection',
        'បង្កើនល្បឿន',
        'កត់ត្រា Log'
      ],
      correct: 0,
      explanation: '`htmlspecialchars` ការពារ XSS ដោយបម្លែងតួអក្សរពិសេស៕'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Create ក្នុង CRUD?',
      options: [
        'ទាញទិន្នន័យ',
        'បញ្ចូលទិន្នន័យថ្មី',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Create បញ្ចូលទិន្នន័យថ្មីទៅ Database៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$stmt = $pdo->prepare("INSERT INTO students (name) VALUES (:name)"); $stmt->execute(["name" => "សុភា"]);`',
      options: [
        'បញ្ចូល "សុភា" ទៅ students',
        'Error',
        'Nothing',
        'បង្ហាញ "សុភា"'
      ],
      correct: 0,
      explanation: 'កូដនេះបញ្ចូល "សុភា" ទៅតារាង students៕'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Read ក្នុង CRUD?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'ទាញទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Read ទាញទិន្នន័យពី Database៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$stmt = $pdo->prepare("UPDATE students SET name = :name WHERE id = :id"); $stmt->execute(["name" => "លីនា", "id" => 1]);`',
      options: [
        'កែប្រែឈ្មោះទៅ "លីនា" សម្រាប់ id=1',
        'Error',
        'Nothing',
        'បង្ហាញ "លីនា"'
      ],
      correct: 0,
      explanation: 'កូដនេះកែប្រែឈ្មោះទៅ "លីនា" សម្រាប់ id=1៕'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Update ក្នុង CRUD?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'ទាញទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 2,
      explanation: 'Update កែប្រែទិន្នន័យនៅក្នុង Database៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$stmt = $pdo->prepare("DELETE FROM students WHERE id = :id"); $stmt->execute(["id" => 1]);`',
      options: [
        'លុបទិន្នន័យសម្រាប់ id=1',
        'Error',
        'Nothing',
        'បង្ហាញ id=1'
      ],
      correct: 0,
      explanation: 'កូដនេះលុបទិន្នន័យសម្រាប់ id=1៕'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Delete ក្នុង CRUD?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'ទាញទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 3,
      explanation: 'Delete លុបទិន្នន័យចេញពី Database៕'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ PDO ក្នុង CRUD?',
      options: [
        'បង្កើនល្បឿន HTML',
        'ផ្តល់សុវត្ថិភាព និងភាពងាយស្រួលក្នុងការគ្រប់គ្រង Database',
        'បង្កើត Form',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'PDO ផ្តល់សុវត្ថិភាព និងភាពងាយស្រួលក្នុងការគ្រប់គ្រង Database៕'
    },
    {
      question: 'តើ `$_SESSION` ប្រើសម្រាប់អ្វីក្នុងកម្មវិធី CRUD?',
      options: [
        'រក្សាទុកសារសម្រាប់ Redirect',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 0,
      explanation: '`$_SESSION` ប្រើសម្រាប់រក្សាទុកសារសម្រាប់ Redirect ក្នុង CRUD៕'
    },
    {
      question: 'តើអ្វីជាហានិភ័យបើមិនប្រើ `htmlspecialchars` ក្នុង CRUD?',
      options: [
        'SQL Injection',
        'XSS Attack',
        'Session Hijacking',
        'Database Crash'
      ],
      correct: 1,
      explanation: 'ការមិនប្រើ `htmlspecialchars` អាចបណ្តាលឱ្យមាន XSS Attack៕'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ Prepared Statements ក្នុង CRUD?',
      options: [
        'បង្កើនល្បឿន HTML',
        'ការពារ SQL Injection',
        'បង្កើត Form',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'Prepared Statements ការពារ SQL Injection ក្នុង CRUD៕'
    }
  ],
  lab: {
    task: `
បង្ផើតឯកសារ PHP ដែលជាកម្មវិធី CRUD សម្រាប់គ្រប់គ្រងទិន្នន័យសិស្ស៕

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្ផើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title: "PHP CRUD Application Lab"៕

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ CRUD Application!"៕
   - បង្ផើត Form សម្រាប់បញ្ចូល ឬកែប្រែឈ្មោះសិស្ស ដោយប្រើ \`method="POST"\`៕
   - បន្ថែម \`<p>\` សម្រាប់បង្ហាញសារជោគជ័យ ឬកំហុស៕
   - បង្ហាញទិន្នន័យសិស្សនៅក្នុង \`<table>\` ដែលមានជួរឈរ ID, ឈ្មោះ, និងសកម្មភាព (កែប្រែ, លុប)៕

3. **PHP Functionality:**
   - បើក Session ដោយប្រើ \`session_start\`៕
   - ភ្ជាប់ទៅ Database \`school\` ដោយប្រើ PDO និង \`PDO::ERRMODE_EXCEPTION\`៕
   - ប្រើ \`filter_var\` (FILTER_SANITIZE_STRING, FILTER_SANITIZE_NUMBER_INT) សម្រាប់សម្អាតទិន្នន័យ៕
   - អនុវត្តប្រតិបត្តិការ CRUD:
     - **Create**: បញ្ចូលឈ្មោះថ្មីទៅតារាង \`students\`៕
     - **Read**: ទាញទិន្នន័យ (id, name) ពី \`students\`៕
     - **Update**: កែប្រែឈ្មោះសម្រាប់ ID ជាក់លាក់៕
     - **Delete**: លុបសិស្សតាម ID៕
   - ប្រើ \`try-catch\` ដើម្បីគ្រប់គ្រងកំហុស៕
   - ប្រើ \`htmlspecialchars\` ដើម្បីការពារ XSS៕
   - ប្រើ \`$_SESSION\` ដើម្បីរក្សាទុកសារសម្រាប់ Redirect៕
   - បន្ថែម Confirmation Dialog សម្រាប់លុប៕

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`៕
     - \`color: #007bff;\` សម្រាប់ \`h1\`៕
     - \`margin: 20px;\` សម្រាប់ \`form\`៕
     - \`padding: 5px; margin: 5px;\` សម្រាប់ \`<input>\`៕
     - \`padding: 5px 10px;\` សម្រាប់ \`<input type="submit">\`៕
     - \`margin: 20px auto; border-collapse: collapse;\` សម្រាប់ \`table\`៕
     - \`border: 1px solid #ddd; padding: 8px;\` សម្រាប់ \`th\` និង \`td\`៕
     - \`background-color: #007bff; color: white;\` សម្រាប់ \`th\`៕
     - \`color: green;\` សម្រាប់សារជោគជ័យ (\`.message\`)៕
     - \`color: red;\` សម្រាប់សារកំហុស (\`.error\`)៕
     - \`color: #007bff; text-decoration: none;\` និង \`text-decoration: underline;\` នៅពេល Hover សម្រាប់ \`<a>\`៕

**ការណែនាំ:**
- ត្រូវប្រាកដថា Database \`school\` និងតារាង \`students\` (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50)) មាន៕
- បញ្ចូលទិន្នន័យគំរូមួយចំនួនមុននឹងសាកល្បង៕
- សាកល្បងប្រតិបត្តិការ Create, Read, Update, Delete៕
`,
    solution: `
\`\`\`php
<?php
session_start();
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    $edit_id = isset($_GET['edit_id']) ? filter_var($_GET['edit_id'], FILTER_SANITIZE_NUMBER_INT) : null;
    $edit_name = "";
    
    if ($edit_id) {
        $stmt = $pdo->prepare("SELECT name FROM students WHERE id = :id");
        $stmt->execute(['id' => $edit_id]);
        $edit_name = $stmt->fetchColumn();
    }
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        if (empty($name)) {
            throw new Exception("ឈ្មោះមិនអាចទទេ!");
        }
        if (isset($_POST['id']) && !empty($_POST['id'])) {
            $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);
            $stmt = $pdo->prepare("UPDATE students SET name = :name WHERE id = :id");
            $stmt->execute(['name' => $name, 'id' => $id]);
            $message = "បានកែប្រែទិន្នន័យ!";
        } else {
            $stmt = $pdo->prepare("INSERT INTO students (name) VALUES (:name)");
            $stmt->execute(['name' => $name]);
            $message = "បានបញ្ចូលទិន្នន័យ!";
        }
        $_SESSION['message'] = $message;
        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
    }
    
    if (isset($_GET['delete_id'])) {
        $id = filter_var($_GET['delete_id'], FILTER_SANITIZE_NUMBER_INT);
        $stmt = $pdo->prepare("DELETE FROM students WHERE id = :id");
        $stmt->execute(['id' => $id]);
        $_SESSION['message'] = "បានលុបទិន្នន័យ!";
        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
    }
    
    $stmt = $pdo->prepare("SELECT id, name FROM students");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    $message = "កំហុស: " . $e->getMessage();
    $_SESSION['message'] = $message;
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP CRUD Application Lab</title>
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
    a {
      color: #007bff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
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
  <h1>សូមស្វាគមន៍មកកាន់ CRUD Application!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name" value="<?php echo htmlspecialchars($edit_name); ?>">
    <?php if ($edit_id): ?>
      <input type="hidden" name="id" value="<?php echo htmlspecialchars($edit_id); ?>">
    <?php endif; ?>
    <input type="submit" value="<?php echo $edit_id ? 'កែប្រែ' : 'បញ្ចូល'; ?>">
  </form>
  <p class="<?php echo strpos($_SESSION['message'] ?? '', 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($_SESSION['message'] ?? ''); unset($_SESSION['message']); ?>
  </p>
  <table>
    <tr>
      <th>ID</th>
      <th>ឈ្មោះ</th>
      <th>សកម្មភាព</th>
    </tr>
    <?php foreach ($rows as $row): ?>
      <tr>
        <td><?php echo htmlspecialchars($row['id']); ?></td>
        <td><?php echo htmlspecialchars($row['name']); ?></td>
        <td>
          <a href="?edit_id=<?php echo htmlspecialchars($row['id']); ?>">កែប្រែ</a> |
          <a href="?delete_id=<?php echo htmlspecialchars($row['id']); ?>" onclick="return confirm('តើអ្នកប្រាកដជាចង់លុប?');">លុប</a>
        </td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson7_1Content;