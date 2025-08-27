import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson4_2Content: LessonContent = {
  title: 'PDO សម្រាប់ការតភ្ជាប់ Database ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី PDO និងអត្ថប្រយោជន៍របស់វា',
    'ស្វែងយល់ពីការភ្ជាប់ទៅ MySQL ដោយប្រើ PDO',
    'ស្គាល់ការប្រតិបត្តិ Query ដោយប្រើ PDO',
    'អនុវត្តការទាញយកទិន្នន័យដោយប្រើ `fetch` និង `fetchAll`',
    'បង្កើតកម្មវិធី PHP ដែលប្រើ PDO សម្រាប់ Database'
  ],
  content: `
# PDO សម្រាប់ការតភ្ជាប់ Database ក្នុង PHP 🌐

---

**PDO (PHP Data Objects)** គឺជាវិធីសាស្ត្រសម្រាប់ភ្ជាប់ និងធ្វើការជាមួយ Database ដែលអាចប្រើបានជាមួយ Database ជាច្រើនប្រភេទ។ PDO ផ្តល់នូវសុវត្ថិភាព និងភាពងាយស្រួលក្នុងការគ្រប់គ្រង Query។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការប្រើ PDO ដើម្បីភ្ជាប់ទៅ MySQL និងប្រតិបត្តិ Query។

---

## 1. ការភ្ជាប់ទៅ MySQL ដោយ PDO

PDO ប្រើ DSN (Data Source Name) ដើម្បីភ្ជាប់ទៅ Database។

**ឧទាហរណ៍ការភ្ជាប់:**

\`\`\`php
<?php
$dsn = "mysql:host=localhost;dbname=school;charset=utf8";
$username = "root";
$password = "";
try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "ភ្ជាប់ជោគជ័យ!";
} catch (PDOException $e) {
    echo "ការភ្ជាប់បរាជ័យ: " . $e->getMessage();
}
?>
\`\`\`

---

## 2. ការប្រតិបត្តិ Query ដោយ PDO

PDO ប្រើ \`query\` ឬ \`exec\` សម្រាប់ប្រតិបត្តិ SQL Query។

**ឧទាហរណ៍ Query:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // បញ្ចូលទិន្នន័យ
    $pdo->exec("INSERT INTO students (name, age) VALUES ('សុភា', 20)");
    echo "ទិន្នន័យត្រូវបានបញ្ចូល!";
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 3. ការទាញយកទិន្នន័យ

- **\`fetch\`**: ទាញយកទិន្នន័យមួយជួរក្នុងមួយពេល។
- **\`fetchAll\`**: ទាញយកទិន្នន័យទាំងអស់ជា Array។

**ឧទាហរណ៍ \`fetch\`:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->query("SELECT id, name, age FROM students");
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "ID: " . $row['id'] . ", ឈ្មោះ: " . $row['name'] . "<br>";
    }
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

**ឧទាហរណ៍ \`fetchAll\`:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->query("SELECT id, name, age FROM students");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach ($rows as $row) {
        echo "ID: " . $row['id'] . ", ឈ្មោះ: " . $row['name'] . "<br>";
    }
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 4. ការប្រើ PDO ក្នុងគេហទំព័រ

PDO ត្រូវបានប្រើដើម្បីបង្កើតគេហទំព័រដែល Dynamic ជាមួយ Database។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP PDO</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    table { margin: 20px auto; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    th { background-color: #007bff; color: white; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PDO!</h1>
  <?php
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $pdo->query("SELECT id, name, age FROM students");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo "កំហុស: " . $e->getMessage();
    }
  ?>
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
    `<h3>ឧទាហរណ៍៖ ការភ្ជាប់ PDO</h3>
<p>ភ្ជាប់ទៅ Database ដោយ PDO។</p>
<pre><code class="language-php">
<?php
$dsn = "mysql:host=localhost;dbname=school;charset=utf8";
$username = "root";
$password = "";
try {
    $pdo = new PDO($dsn, $username, $password);
    echo "ភ្ជាប់ជោគជ័យ!";
} catch (PDOException $e) {
    echo "ការភ្ជាប់បរាជ័យ: " . $e->getMessage();
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបញ្ចូលទិន្នន័យដោយ PDO</h3>
<p>បញ្ចូលទិន្នន័យទៅតារាង។</p>
<pre><code class="language-php">
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->exec("INSERT INTO students (name, age) VALUES ('សុភា', 20)");
    echo "ទិន្នន័យត្រូវបានបញ្ចូល!";
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការទាញយកទិន្នន័យដោយ \`fetch\`</h3>
<p>អានទិន្នន័យមួយជួរក្នុងមួយពេល។</p>
<pre><code class="language-php">
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $stmt = $pdo->query("SELECT id, name, age FROM students");
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "ID: " . $row['id'] . ", ឈ្មោះ: " . $row['name'] . "<br>";
    }
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការទាញយកទិន្នន័យដោយ \`fetchAll\`</h3>
<p>អានទិន្នន័យទាំងអស់។</p>
<pre><code class="language-php">
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $stmt = $pdo->query("SELECT id, name, age FROM students");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach ($rows as $row) {
        echo "ID: " . $row['id'] . ", ឈ្មោះ: " . $row['name'] . "<br>";
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
      question: 'តើ PDO គឺជាអ្វី?',
      options: [
        'ប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ',
        'វិធីសាស្ត្រសម្រាប់ភ្ជាប់ Database',
        'ប្រភេទ Array',
        'Function ក្នុង PHP'
      ],
      correct: 1,
      explanation: 'PDO (PHP Data Objects) ជាវិធីសាស្ត្រសម្រាប់ភ្ជាប់ និងធ្វើការជាមួយ Database។'
    },
    {
      question: 'តើ DSN ក្នុង PDO គឺជាអ្វី?',
      options: [
        'Database Source Name',
        'Data Source Name',
        'Database System Name',
        'Data System Name'
      ],
      correct: 1,
      explanation: 'DSN (Data Source Name) កំណត់ព័ត៌មានភ្ជាប់ Database។'
    },
    {
      question: 'តើ `PDO::ATTR_ERRMODE` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់របៀបគ្រប់គ្រងកំហុស',
        'បញ្ចូលទិន្នន័យ',
        'ទាញយកទិន្នន័យ',
        'បិទការភ្ជាប់'
      ],
      correct: 0,
      explanation: '`PDO::ATTR_ERRMODE` កំណត់របៀបគ្រប់គ្រងកំហុសនៅក្នុង PDO។'
    },
    {
      question: 'តើ `PDO::ERRMODE_EXCEPTION` ធ្វើអ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'បោះ Exception នៅពេលមានកំហុស',
        'ទាញយកទិន្នន័យ',
        'បិទការភ្ជាប់'
      ],
      correct: 1,
      explanation: '`PDO::ERRMODE_EXCEPTION` បោះ Exception នៅពេលមានកំហុស។'
    },
    {
      question: 'តើ `fetch` ក្នុង PDO ធ្វើអ្វី?',
      options: [
        'ទាញយកទិន្នន័យមួយជួរក្នុងមួយពេល',
        'ទាញយកទិន្នន័យទាំងអស់',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែទិន្នន័យ'
      ],
      correct: 0,
      explanation: '`fetch` ទាញយកទិន្នន័យមួយជួរក្នុងមួយពេល។'
    },
    {
      question: 'តើ `fetchAll` ក្នុង PDO ធ្វើអ្វី?',
      options: [
        'ទាញយកទិន្នន័យមួយជួរក្នុងមួយពេល',
        'ទាញយកទិន្នន័យទាំងអស់ជា Array',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`fetchAll` ទាញយកទិន្នន័យទាំងអស់ជា Array។'
    },
    {
      question: 'តើ `PDO::FETCH_ASSOC` ធ្វើអ្វី?',
      options: [
        'ទាញយកទិន្នន័យជា Object',
        'ទាញយកទិន្នន័យជា Associative Array',
        'ទាញយកទិន្នន័យជា Indexed Array',
        'បញ្ចូលទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`PDO::FETCH_ASSOC` ទាញយកទិន្នន័យជា Associative Array។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `try { $pdo = new PDO("mysql:host=localhost;dbname=school", "root", ""); echo "Success"; } catch (PDOException $e) { echo "Failed"; }` ប្រសិនបើភ្ជាប់ជោគជ័យ?',
      options: [
        'Success',
        'Failed',
        'Error',
        'Nothing'
      ],
      correct: 0,
      explanation: 'ប្រសិនបើភ្ជាប់ជោគជ័យ កូដនឹងបង្ហាញ "Success"។'
    },
    {
      question: 'តើ `PDO::query` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'ប្រតិបត្តិ SQL Query',
        'បិទការភ្ជាប់',
        'កំណត់កំហុស'
      ],
      correct: 1,
      explanation: '`PDO::query` ប្រតិបត្តិ SQL Query។'
    },
    {
      question: 'តើ `PDO::exec` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញយកទិន្នន័យ',
        'ប្រតិបត្តិ SQL Query ដែលមិនត្រឡប់ទិន្នន័យ',
        'ភ្ជាប់ Database',
        'កំណត់កំហុស'
      ],
      correct: 1,
      explanation: '`PDO::exec` ប្រតិបត្តិ Query ដែលមិនត្រឡប់ទិន្នន័យ (ឧ. INSERT)។'
    },
    {
      question: 'តើអត្ថប្រយោជន៍សំខាន់នៃ PDO គឺជាអ្វី?',
      options: [
        'អាចប្រើបានជាមួយ Database ជាច្រើនប្រភេទ',
        'បង្កើត Array',
        'សម្អាតទិន្នន័យ',
        'បង្កើត Form'
      ],
      correct: 0,
      explanation: 'PDO អាចប្រើបានជាមួយ Database ជាច្រើនប្រភេទ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$stmt = $pdo->query("SELECT name FROM students"); $row = $stmt->fetch(PDO::FETCH_ASSOC); echo $row[\'name\'];` ប្រសិនបើមានទិន្នន័យ "សុភា"?',
      options: [
        'សុភា',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'កូដនេះទាញយកទិន្នន័យ និងបង្ហាញ "សុភា"។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលបង្ហាញបញ្ជីសិស្សពី MySQL Database ដោយប្រើ PDO។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP PDO Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ PDO!"។
   - បង្ហាញទិន្នន័យសិស្សនៅក្នុង \`<table>\`។

3. **PHP Functionality:**
   - ភ្ជាប់ទៅ Database \`school\` ដោយប្រើ PDO។
   - ប្រើ \`query\` និង \`fetchAll(PDO::FETCH_ASSOC)\` ដើម្បីទាញយកទិន្នន័យពីតារាង \`students\` (id, name, age)។
   - បង្ហាញទិន្នន័យក្នុង \`<table>\`។
   - ប្រើ \`htmlspecialchars\` ដើម្បីការពារទិន្នន័យនៅពេលបង្ហាញ។
   - ប្រើ \`try-catch\` ដើម្បីគ្រប់គ្រងកំហុស។

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`
     - \`border-collapse: collapse;\` និង \`margin: 20px auto;\` សម្រាប់ \`table\`។
     - \`border: 1px solid #ddd; padding: 8px;\` សម្រាប់ \`th\` និង \`td\`។
     - \`background-color: #007bff; color: white;\` សម្រាប់ \`th\`។

**ការណែនាំ:** ត្រូវប្រាកដថា Database \`school\` និងតារាង \`students\` មានទិន្នន័យ។ រក្សាទុកជា .php និងដំណើរការតាម localhost។
    `,
    solution: `
\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->query("SELECT id, name, age FROM students");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
    exit;
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP PDO Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f8f9fa;
    }
    h1 {
      color: #007bff;
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
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PDO!</h1>
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

export default PHPLesson4_2Content;