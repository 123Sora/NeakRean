import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson3_1Content: LessonContent = {
  title: 'ការដោះស្រាយ Form ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពីការដោះស្រាយ Form នៅក្នុង PHP',
    'ស្វែងយល់ពីការប្រើ `$_GET` និង `$_POST` សម្រាប់ទទួលទិន្នន័យ Form',
    'ស្គាល់ការធ្វើ Form Validation ដើម្បីធានាសុវត្ថិភាពទិន្នន័យ',
    'អនុវត្តការសម្អាតទិន្នន័យ (Sanitization) ដោយប្រើ `filter_var`',
    'បង្កើត Form និងដោះស្រាយទិន្នន័យនៅក្នុងគេហទំព័រ'
  ],
  content: `
# ការដោះស្រាយ Form ក្នុង PHP 📝

---

**Form Processing** គឺជាដំណើរការទទួល និងដោះស្រាយទិន្នន័យដែលអ្នកប្រើបញ្ចូលតាមរយៈ HTML Form។ នៅក្នុង PHP យើងប្រើ \`$_GET\` និង \`$_POST\` ដើម្បីទទួលទិន្នន័យ និងអនុវត្តការផ្ទៀងផ្ទាត់ (Validation) និងសម្អាតទិន្នន័យ (Sanitization) ដើម្បីធានាសុវត្ថិភាព។

---

## 1. ការប្រើ \`$_GET\` និង \`$_POST\`

- **\`$_GET\`**: ទទួលទិន្នន័យតាម URL (Query String)។ ស័ក្តិសមសម្រាប់ទិន្នន័យមិនសំខាន់។
- **\`$_POST\`**: ទទួលទិន្នន័យតាម HTTP Request Body។ ស័ក្តិសមសម្រាប់ទិន្នន័យសម្ងាត់។

**ឧទាហរណ៍ \`$_GET\`:**

\`\`\`php
<?php
if (isset($_GET['name'])) {
    echo "សួស្តី, " . htmlspecialchars($_GET['name']);
}
?>
<form method="GET" action="">
    <input type="text" name="name">
    <input type="submit" value="ដាក់ស្នើ">
</form>
\`\`\`

**ឧទាហរណ៍ \`$_POST\`:**

\`\`\`php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "សួស្តី, " . htmlspecialchars($_POST['name']);
}
?>
<form method="POST" action="">
    <input type="text" name="name">
    <input type="submit" value="ដាក់ស្នើ">
</form>
\`\`\`

---

## 2. Form Validation

Validation ជួយធានាថាទិន្នន័យដែលទទួលបានត្រឹមត្រូវ និងសុវត្ថិភាព។

**ឧទាហរណ៍ Validation:**

\`\`\`php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    if (empty($name)) {
        echo "សូមបញ្ចូលឈ្មោះ!";
    } else {
        echo "សួស្តី, " . htmlspecialchars($name);
    }
}
?>
<form method="POST" action="">
    <input type="text" name="name">
    <input type="submit" value="ដាក់ស្នើ">
</form>
\`\`\`

---

## 3. Sanitizing Input

ការសម្អាតទិន្នន័យប្រើ \`filter_var\` ឬ \`htmlspecialchars\` ដើម្បីការពារ XSS (Cross-Site Scripting)។

**ឧទាហរណ៍ Sanitization:**

\`\`\`php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "អ៊ីមែលត្រឹមត្រូវ: $email";
    } else {
        echo "អ៊ីមែលមិនត្រឹមត្រូវ!";
    }
}
?>
<form method="POST" action="">
    <input type="text" name="email">
    <input type="submit" value="ដាក់ស្នើ">
</form>
\`\`\`

---

## 4. ការប្រើ Form ក្នុងគេហទំព័រ

Form Processing ត្រូវបានប្រើដើម្បីបង្កើតគេហទំព័រដែលអន្តរកម្ម។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Form Processing</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    form { margin: 20px; }
    input[type="text"] { padding: 5px; margin: 5px; }
    input[type="submit"] { padding: 5px 10px; }
    .error { color: red; }
    .success { color: green; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Form Processing!</h1>
  <?php
    $name = $error = $success = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        if (empty($name)) {
            $error = "សូមបញ្ចូលឈ្មោះ!";
        } else {
            $success = "សួស្តី, " . htmlspecialchars($name) . "!";
        }
    }
  ?>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name" value="<?php echo htmlspecialchars($name); ?>">
    <input type="submit" value="ដាក់ស្នើ">
  </form>
  <?php
    if ($error) {
        echo "<p class='error'>$error</p>";
    }
    if ($success) {
        echo "<p class='success'>$success</p>";
    }
  ?>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`$_GET\`</h3>
<p>ទទួលឈ្មោះតាម \`$_GET\`។</p>
<pre><code class="language-php">
<?php
if (isset($_GET['name'])) {
    echo "សួស្តី, " . htmlspecialchars($_GET['name']);
}
?>
<form method="GET" action="">
    <input type="text" name="name">
    <input type="submit" value="ដាក់ស្នើ">
</form>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ \`$_POST\`</h3>
<p>ទទួលឈ្មោះតាម \`$_POST\`។</p>
<pre><code class="language-php">
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "សួស្តី, " . htmlspecialchars($_POST['name']);
}
?>
<form method="POST" action="">
    <input type="text" name="name">
    <input type="submit" value="ដាក់ស្នើ">
</form>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Form Validation</h3>
<p>ផ្ទៀងផ្ទាត់ថាឈ្មោះមិនទទេ។</p>
<pre><code class="language-php">
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    if (empty($name)) {
        echo "សូមបញ្ចូលឈ្មោះ!";
    } else {
        echo "សួស្តី, " . htmlspecialchars($name);
    }
}
?>
<form method="POST" action="">
    <input type="text" name="name">
    <input type="submit" value="ដាក់ស្នើ">
</form>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Sanitizing Input</h3>
<p>សម្អាត និងផ្ទៀងផ្ទាត់អ៊ីមែល។</p>
<pre><code class="language-php">
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "អ៊ីមែលត្រឹមត្រូវ: $email";
    } else {
        echo "អ៊ីមែលមិនត្រឹមត្រូវ!";
    }
}
?>
<form method="POST" action="">
    <input type="text" name="email">
    <input type="submit" value="ដាក់ស្នើ">
</form>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `$_POST` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទទួលទិន្នន័យតាម URL',
        'ទទួលទិន្នន័យតាម HTTP Request Body',
        'រក្សាទុកឯកសារ',
        'បង្កើត Array'
      ],
      correct: 1,
      explanation: '`$_POST` ទទួលទិន្នន័យតាម HTTP Request Body សម្រាប់ Form។'
    },
    {
      question: 'តើ `$_GET` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទទួលទិន្នន័យតាម HTTP Request Body',
        'ទទួលទិន្នន័យតាម URL',
        'សម្អាតទិន្នន័យ',
        'ផ្ទៀងផ្ទាត់អ៊ីមែល'
      ],
      correct: 1,
      explanation: '`$_GET` ទទួលទិន្នន័យតាម URL (Query String)។'
    },
    {
      question: 'តើ `$_SERVER["REQUEST_METHOD"]` ប្រើសម្រាប់អ្វី?',
      options: [
        'ពិនិត្យប្រភេទ Form Method',
        'រក្សាទុកទិន្នន័យ',
        'បង្កើត Form',
        'សម្អាតទិន្នន័យ'
      ],
      correct: 0,
      explanation: '`$_SERVER["REQUEST_METHOD"]` ពិនិត្យថាតើ Form ប្រើ `GET` ឬ `POST`។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `if (isset($_POST["name"])) { echo $_POST["name"]; }` នៅពេលបញ្ចូល "សុភា"?',
      options: [
        'សុភា',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'ប្រសិនបើ `name` ត្រូវបានបញ្ចូល កូដនឹងបង្ហាញ "សុភា"។'
    },
    {
      question: 'តើ `htmlspecialchars` ធ្វើអ្វី?',
      options: [
        'ផ្ទៀងផ្ទាត់អ៊ីមែល',
        'ការពារ XSS ដោយបំលែងតួអក្សរពិសេស',
        'រាប់ធាតុក្នុង Array',
        'បន្ថែមទិន្នន័យទៅ Form'
      ],
      correct: 1,
      explanation: '`htmlspecialchars` បំលែងតួអក្សរពិសេសដើម្បីការពារ XSS។'
    },
    {
      question: 'តើ `filter_var` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Form',
        'សម្អាត និងផ្ទៀងផ្ទាត់ទិន្នន័យ',
        'រក្សាទុកឯកសារ',
        'បង្កើត Array'
      ],
      correct: 1,
      explanation: '`filter_var` ប្រើសម្រាប់សម្អាត និងផ្ទៀងផ្ទាត់ទិន្នន័យ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `if (empty($_POST["name"])) { echo "Error"; } else { echo "Valid"; }` នៅពេលមិនបញ្ចូលឈ្មោះ?',
      options: [
        'Error',
        'Valid',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'ប្រសិនបើ `name` ទទេ កូដនឹងបង្ហាញ "Error"។'
    },
    {
      question: 'តើ `FILTER_SANITIZE_EMAIL` ធ្វើអ្វី?',
      options: [
        'ផ្ទៀងផ្ទាត់អ៊ីមែល',
        'សម្អាតអ៊ីមែលដោយលុបតួអក្សរមិនត្រឹមត្រូវ',
        'បន្ថែមអ៊ីមែលទៅ Array',
        'បង្កើត Form'
      ],
      correct: 1,
      explanation: '`FILTER_SANITIZE_EMAIL` សម្អាតអ៊ីមែលដោយលុបតួអក្សរមិនត្រឹមត្រូវ។'
    },
    {
      question: 'តើ `FILTER_VALIDATE_EMAIL` ធ្វើអ្វី?',
      options: [
        'សម្អាតអ៊ីមែល',
        'ផ្ទៀងផ្ទាត់ថាអ៊ីមែលត្រឹមត្រូវ',
        'បន្ថែមអ៊ីមែលទៅ Form',
        'លុបអ៊ីមែល'
      ],
      correct: 1,
      explanation: '`FILTER_VALIDATE_EMAIL` ផ្ទៀងផ្ទាត់ថាអ៊ីមែលមានទម្រង់ត្រឹមត្រូវ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `if ($_SERVER["REQUEST_METHOD"] == "POST") { echo "POST"; } else { echo "GET"; }` នៅពេលប្រើ `method="POST"`?',
      options: [
        'POST',
        'GET',
        'Error',
        'Nothing'
      ],
      correct: 0,
      explanation: 'ប្រសិនបើ Form ប្រើ `POST` កូដនឹងបង្ហាញ "POST"។'
    },
    {
      question: 'តើ `isset` ប្រើសម្រាប់អ្វី?',
      options: [
        'ពិនិត្យថាតើ Variable ត្រូវបានកំណត់ និងមិនមែន `NULL`',
        'សម្អាតទិន្នន័យ',
        'បន្ថែមទិន្នន័យទៅ Array',
        'បង្កើត Form'
      ],
      correct: 0,
      explanation: '`isset` ពិនិត្យថាតើ Variable ត្រូវបានកំណត់ និងមិនមែន `NULL`។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Form Validation?',
      options: [
        'បង្កើត Form ថ្មី',
        'ធានាថាទិន្នន័យត្រឹមត្រូវ និងសុវត្ថិភាព',
        'រក្សាទុកឯកសារ',
        'បន្ថែមទិន្នន័យទៅ Array'
      ],
      correct: 1,
      explanation: 'Form Validation ធានាថាទិន្នន័យត្រឹមត្រូវ និងសុវត្ថិភាព។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$email = "test@domain.com"; if (filter_var($email, FILTER_VALIDATE_EMAIL)) { echo "Valid"; } else { echo "Invalid"; }`',
      options: [
        'Valid',
        'Invalid',
        'Error',
        'Nothing'
      ],
      correct: 0,
      explanation: '`test@domain.com` ជាអ៊ីមែលត្រឹមត្រូវ ដូច្នេះបង្ហាញ "Valid"។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលបង្កើត Form សម្រាប់បញ្ចូលឈ្មោះ និងអ៊ីមែល និងដោះស្រាយទិន្នន័យជាមួយ Validation និង Sanitization។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP Form Processing Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ PHP Form Processing!"។
   - បង្កើត Form ដែលបញ្ចូលឈ្មោះ និងអ៊ីមែល ដោយប្រើ \`method="POST"\`។
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញសារកំហុស ឬជោគជ័យ។

3. **PHP Functionality:**
   - ប្រើ \`$_POST\` ដើម្បីទទួលឈ្មោះ និងអ៊ីមែល។
   - ផ្ទៀងផ្ទាត់ថាឈ្មោះមិនទទេ និងអ៊ីមែលត្រឹមត្រូវដោយប្រើ \`filter_var\`។
   - សម្អាតទិន្នន័យដោយប្រើ \`filter_var\` ឬ \`htmlspecialchars\`។
   - បង្ហាញសារជោគជ័យប្រសិនបើទិន្នន័យត្រឹមត្រូវ ឬសារកំហុសប្រសិនបើមិនត្រឹមត្រូវ។

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`color: red;\` សម្រាប់សារកំហុស (\`.error\`)។
     - \`color: green;\` សម្រាប់សារជោគជ័យ (\`.success\`)។

**ការណែនាំ:** រក្សាទុកជា .php និងដំណើរការតាម localhost។
    `,
    solution: `
\`\`\`php
<?php
$name = $email = $error = $success = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    if (empty($name)) {
        $error = "សូមបញ្ចូលឈ្មោះ!";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "អ៊ីមែលមិនត្រឹមត្រូវ!";
    } else {
        $success = "សួស្តី, " . htmlspecialchars($name) . "! អ៊ីមែលរបស់អ្នក: " . htmlspecialchars($email);
    }
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Form Processing Lab</title>
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
    .error {
      color: red;
    }
    .success {
      color: green;
    }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Form Processing!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name" value="<?php echo htmlspecialchars($name); ?>"><br>
    <label>អ៊ីមែល: </label>
    <input type="text" name="email" value="<?php echo htmlspecialchars($email); ?>"><br>
    <input type="submit" value="ដាក់ស្នើ">
  </form>
  <?php
    if ($error) {
        echo "<p class='error'>$error</p>";
    }
    if ($success) {
        echo "<p class='success'>$success</p>";
    }
  ?>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson3_1Content;