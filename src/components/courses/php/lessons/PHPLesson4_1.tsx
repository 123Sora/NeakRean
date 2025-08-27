import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson4_1Content: LessonContent = {
  title: 'មូលដ្ឋាន MySQL ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី MySQL និងការតភ្ជាប់ជាមួយ PHP',
    'ស្វែងយល់ពីការបង្កើត និងគ្រប់គ្រងតារាងក្នុង MySQL',
    'ស្គាល់ការអនុវត្ត CRUD Operations (Create, Read, Update, Delete)',
    'អនុវត្តការភ្ជាប់ទៅ MySQL ដោយប្រើ `mysqli`',
    'បង្កើតកម្មវិធី PHP ដែលធ្វើការជាមួយ Database'
  ],
  content: `
# មូលដ្ឋាន MySQL ក្នុង PHP 🗄️

---

**MySQL** គឺជាប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ (Database Management System) ដ៏ពេញនិយម។ នៅក្នុង PHP យើងអាចប្រើ \`mysqli\` ដើម្បីភ្ជាប់ និងធ្វើការជាមួយ MySQL។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការភ្ជាប់ Database ការបង្កើតតារាង និងការអនុវត្ត CRUD Operations។

---

## 1. ការភ្ជាប់ទៅ MySQL

យើងប្រើ \`mysqli_connect\` ដើម្បីភ្ជាប់ទៅ MySQL Database។

**ឧទាហរណ៍ការភ្ជាប់:**

\`\`\`php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "school";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("ការភ្ជាប់បរាជ័យ: " . mysqli_connect_error());
}
echo "ភ្ជាប់ជោគជ័យ!";
?>
\`\`\`

---

## 2. ការបង្កើតតារាង

តារាងក្នុង MySQL ត្រូវបានបង្កើតដោយប្រើ SQL \`CREATE TABLE\`។

**ឧទាហរណ៍ការបង្កើតតារាង:**

\`\`\`php
<?php
$conn = mysqli_connect("localhost", "root", "", "school");
if (!$conn) {
    die("ការភ្ជាប់បរាជ័យ: " . mysqli_connect_error());
}

$sql = "CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT
)";
if (mysqli_query($conn, $sql)) {
    echo "តារាង students ត្រូវបានបង្កើត!";
} else {
    echo "កំហុស: " . mysqli_error($conn);
}
mysqli_close($conn);
?>
\`\`\`

---

## 3. CRUD Operations

- **Create (បញ្ចូលទិន្នន័យ)**: ប្រើ SQL \`INSERT INTO\`។
- **Read (អានទិន្នន័យ)**: ប្រើ SQL \`SELECT\`។
- **Update (កែប្រែទិន្នន័យ)**: ប្រើ SQL \`UPDATE\`។
- **Delete (លុបទិន្នន័យ)**: ប្រើ SQL \`DELETE\`។

**ឧទាហរណ៍ CRUD:**

\`\`\`php
<?php
$conn = mysqli_connect("localhost", "root", "", "school");
if (!$conn) {
    die("ការភ្ជាប់បរាជ័យ: " . mysqli_connect_error());
}

// Create
$sql = "INSERT INTO students (name, age) VALUES ('សុភា', 20)";
mysqli_query($conn, $sql);

// Read
$sql = "SELECT id, name, age FROM students";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_assoc($result)) {
    echo "ID: " . $row['id'] . ", ឈ្មោះ: " . $row['name'] . ", អាយុ: " . $row['age'] . "<br>";
}

// Update
$sql = "UPDATE students SET age = 21 WHERE name = 'សុភា'";
mysqli_query($conn, $sql);

// Delete
$sql = "DELETE FROM students WHERE name = 'សុភា'";
mysqli_query($conn, $sql);

mysqli_close($conn);
?>
\`\`\`

---

## 4. ការប្រើ MySQL ក្នុងគេហទំព័រ

MySQL ត្រូវបានប្រើដើម្បីបង្កើតគេហទំព័រដែល Dynamic។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP MySQL Basics</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    table { margin: 20px auto; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    th { background-color: #007bff; color: white; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ MySQL Basics!</h1>
  <?php
    $conn = mysqli_connect("localhost", "root", "", "school");
    if (!$conn) {
        die("ការភ្ជាប់បរាជ័យ: " . mysqli_connect_error());
    }
    $sql = "SELECT id, name, age FROM students";
    $result = mysqli_query($conn, $sql);
  ?>
  <table>
    <tr>
      <th>ID</th>
      <th>ឈ្មោះ</th>
      <th>អាយុ</th>
    </tr>
    <?php while ($row = mysqli_fetch_assoc($result)): ?>
      <tr>
        <td><?php echo htmlspecialchars($row['id']); ?></td>
        <td><?php echo htmlspecialchars($row['name']); ?></td>
        <td><?php echo htmlspecialchars($row['age']); ?></td>
      </tr>
    <?php endwhile; ?>
  </table>
  <?php mysqli_close($conn); ?>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការភ្ជាប់ទៅ MySQL</h3>
<p>ភ្ជាប់ទៅ Database។</p>
<pre><code class="language-php">
<?php
$conn = mysqli_connect("localhost", "root", "", "school");
if (!$conn) {
    die("ការភ្ជាប់បរាជ័យ: " . mysqli_connect_error());
}
echo "ភ្ជាប់ជោគជ័យ!";
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបង្កើតតារាង</h3>
<p>បង្កើតតារាង students។</p>
<pre><code class="language-php">
<?php
$conn = mysqli_connect("localhost", "root", "", "school");
$sql = "CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT
)";
if (mysqli_query($conn, $sql)) {
    echo "តារាង students ត្រូវបានបង្កើត!";
}
mysqli_close($conn);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបញ្ចូលទិន្នន័យ</h3>
<p>បញ្ចូលទិន្នន័យទៅតារាង។</p>
<pre><code class="language-php">
<?php
$conn = mysqli_connect("localhost", "root", "", "school");
$sql = "INSERT INTO students (name, age) VALUES ('សុភា', 20)";
if (mysqli_query($conn, $sql)) {
    echo "ទិន្នន័យត្រូវបានបញ្ចូល!";
}
mysqli_close($conn);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការអានទិន្នន័យ</h3>
<p>អានទិន្នន័យពីតារាង។</p>
<pre><code class="language-php">
<?php
$conn = mysqli_connect("localhost", "root", "", "school");
$sql = "SELECT id, name, age FROM students";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_assoc($result)) {
    echo "ID: " . $row['id'] . ", ឈ្មោះ: " . $row['name'] . "<br>";
}
mysqli_close($conn);
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ MySQL គឺជាអ្វី?',
      options: [
        'ភាសាសរសេរកម្មវិធី',
        'ប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ',
        'ប្រភេទ Array',
        'Function ក្នុង PHP'
      ],
      correct: 1,
      explanation: 'MySQL គឺជាប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ។'
    },
    {
      question: 'តើ Function ណាដែលប្រើដើម្បីភ្ជាប់ទៅ MySQL?',
      options: [
        'mysql_connect()',
        'mysqli_connect()',
        'connect_mysql()',
        'db_connect()'
      ],
      correct: 1,
      explanation: '`mysqli_connect()` ប្រើដើម្បីភ្ជាប់ទៅ MySQL។'
    },
    {
      question: 'តើ `mysqli_query` ប្រើសម្រាប់អ្វី?',
      options: [
        'បើក Database',
        'ប្រតិបត្តិ SQL Query',
        'បិទការភ្ជាប់',
        'រក្សាទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`mysqli_query` ប្រតិបត្តិ SQL Query នៅក្នុង Database។'
    },
    {
      question: 'តើ SQL `CREATE TABLE` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'បង្កើតតារាងថ្មី',
        'កែប្រែទិន្នន័យ',
        'លុបតារាង'
      ],
      correct: 1,
      explanation: '`CREATE TABLE` បង្កើតតារាងថ្មីក្នុង Database។'
    },
    {
      question: 'តើ SQL `INSERT INTO` ប្រើសម្រាប់អ្វី?',
      options: [
        'អានទិន្នន័យ',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`INSERT INTO` បញ្ចូលទិន្នន័យថ្មីទៅក្នុងតារាង។'
    },
    {
      question: 'តើ `mysqli_fetch_assoc` ធ្វើអ្វី?',
      options: [
        'ប្រតិបត្តិ Query',
        'ទាញយកទិន្នន័យជា Associative Array',
        'បិទការភ្ជាប់',
        'បញ្ចូលទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`mysqli_fetch_assoc` ទាញយកទិន្នន័យជា Associative Array។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$conn = mysqli_connect("localhost", "root", "", "school"); if (!$conn) { echo "Failed"; } else { echo "Success"; }` ប្រសិនបើភ្ជាប់ជោគជ័យ?',
      options: [
        'Failed',
        'Success',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: 'ប្រសិនបើភ្ជាប់ជោគជ័យ កូដនឹងបង្ហាញ "Success"។'
    },
    {
      question: 'តើ SQL `UPDATE` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'អានទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 2,
      explanation: '`UPDATE` កែប្រែទិន្នន័យក្នុងតារាង។'
    },
    {
      question: 'តើ SQL `DELETE` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'អានទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 3,
      explanation: '`DELETE` លុបទិន្នន័យចេញពីតារាង។'
    },
    {
      question: 'តើ `mysqli_close` ប្រើសម្រាប់អ្វី?',
      options: [
        'បើកការភ្ជាប់',
        'បិទការភ្ជាប់',
        'ប្រតិបត្តិ Query',
        'បញ្ចូលទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`mysqli_close` បិទការភ្ជាប់ទៅ Database។'
    },
    {
      question: 'តើ `AUTO_INCREMENT` ក្នុង MySQL ធ្វើអ្វី?',
      options: [
        'បង្កើត Primary Key',
        'បង្កើតលេខ ID ដោយស្វ័យប្រវត្តិ',
        'កំណត់តម្លៃលំនាំដើម',
        'ការពារ SQL Injection'
      ],
      correct: 1,
      explanation: '`AUTO_INCREMENT` បង្កើតលេខ ID ដោយស្វ័យប្រវត្តិសម្រាប់តារាង។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូดខាងក្រោម? `$sql = "INSERT INTO students (name) VALUES (\'សុភា\')"; mysqli_query($conn, $sql); echo "Done";`',
      options: [
        'សុភា',
        'Done',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: 'កូដនេះបញ្ចូលទិន្នន័យ និងបង្ហាញ "Done"។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលបង្ហាញបញ្ជីសិស្សពី MySQL Database។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP MySQL Basics Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ MySQL Basics!"។
   - បង្ហាញទិន្នន័យសិស្សនៅក្នុង \`<table>\`។

3. **PHP Functionality:**
   - ភ្ជាប់ទៅ Database \`school\` ដោយប្រើ \`mysqli_connect\`។
   - ប្រើ SQL \`SELECT\` ដើម្បីទាញយកទិន្នន័យពីតារាង \`students\` (id, name, age)។
   - បង្ហាញទិន្នន័យក្នុង \`<table>\` ដោយប្រើ \`mysqli_fetch_assoc\`។
   - ប្រើ \`htmlspecialchars\` ដើម្បីការពារទិន្នន័យនៅពេលបង្ហាញ។

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`border-collapse: collapse;\` និង \`margin: 20px auto;\` សម្រាប់ \`table\`។
     - \`border: 1px solid #ddd; padding: 8px;\` សម្រាប់ \`th\` និង \`td\`។
     - \`background-color: #007bff; color: white;\` សម្រាប់ \`th\`។

**ការណែនាំ:** ត្រូវប្រាកដថា Database \`school\` និងតារាង \`students\` មានទិន្នន័យ។ រក្សាទុកជា .php និងដំណើរការតាម localhost។
    `,
    solution: `
\`\`\`php
<?php
$conn = mysqli_connect("localhost", "root", "", "school");
if (!$conn) {
    die("ការភ្ជាប់បរាជ័យ: " . mysqli_connect_error());
}
$sql = "SELECT id, name, age FROM students";
$result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP MySQL Basics Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ MySQL Basics!</h1>
  <table>
    <tr>
      <th>ID</th>
      <th>ឈ្មោះ</th>
      <th>អាយុ</th>
    </tr>
    <?php while ($row = mysqli_fetch_assoc($result)): ?>
      <tr>
        <td><?php echo htmlspecialchars($row['id']); ?></td>
        <td><?php echo htmlspecialchars($row['name']); ?></td>
        <td><?php echo htmlspecialchars($row['age']); ?></td>
      </tr>
    <?php endwhile; ?>
  </table>
  <?php mysqli_close($conn); ?>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson4_1Content;