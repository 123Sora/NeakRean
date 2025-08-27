import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson3_2Content: LessonContent = {
  title: 'ការដោះស្រាយឯកសារក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពីការដោះស្រាយឯកសារនៅក្នុង PHP',
    'ស្វែងយល់ពីការអានឯកសារដោយប្រើ `file_get_contents` និង `fopen`',
    'ស្គាល់ការសរសេរទៅឯកសារដោយប្រើ `file_put_contents` និង `fwrite`',
    'អនុវត្តការបន្ថែមទិន្នន័យទៅឯកសារ និងលុបឯកសារ',
    'ប្រើ File Handling ដើម្បីគ្រប់គ្រងទិន្នន័យនៅក្នុងគេហទំព័រ'
  ],
  content: `
# ការដោះស្រាយឯកសារក្នុង PHP 📂

---

**File Handling** គឺជាដំណើរការនៃការអាន សរសេរ បន្ថែម និងលុបឯកសារនៅក្នុង PHP។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការប្រើ Functions ដូចជា \`file_get_contents\`, \`file_put_contents\`, \`fopen\`, \`fwrite\`, និង \`unlink\` ដើម្បីធ្វើការជាមួយឯកសារ។

---

## 1. ការអានឯកសារ

- **\`file_get_contents\`**: អានខ្លឹមសារឯកសារទាំងមូលទៅជា String។
- **\`fopen\` និង \`fread\`**: អានឯកសារដោយបើកឯកសារជាមុន។

**ឧទាហរណ៍ \`file_get_contents\`:**

\`\`\`php
<?php
$content = file_get_contents("example.txt");
echo nl2br($content);
?>
\`\`\`

**ឧទាហរណ៍ \`fopen\` និង \`fread\`:**

\`\`\`php
<?php
$file = fopen("example.txt", "r");
if ($file) {
    $content = fread($file, filesize("example.txt"));
    echo nl2br($content);
    fclose($file);
}
?>
\`\`\`

---

## 2. ការសរសេរទៅឯកសារ

- **\`file_put_contents\`**: សរសេរទិន្នន័យទៅឯកសារ។
- **\`fopen\` និង \`fwrite\`**: សរសេរទិន្នន័យទៅឯកសារដោយបើកឯកសារជាមុន។

**ឧទាហរណ៍ \`file_put_contents\`:**

\`\`\`php
<?php
file_put_contents("example.txt", "សួស្តី ពិភពលោក!");
echo "ឯកសារត្រូវបានសរសេរ!";
?>
\`\`\`

**ឧទាហរណ៍ \`fopen\` និង \`fwrite\`:**

\`\`\`php
<?php
$file = fopen("example.txt", "w");
if ($file) {
    fwrite($file, "សួស្តី ពិភពលោក!");
    fclose($file);
    echo "ឯកសារត្រូវបានសរសេរ!";
}
?>
\`\`\`

---

## 3. ការបន្ថែមទិន្នន័យទៅឯកសារ

ការបន្ថែមទិន្នន័យប្រើ \`FILE_APPEND\` ជាមួយ \`file_put_contents\` ឬ \`fopen\` ជាមួយ mode \`"a"\`។

**ឧទាហរណ៍ Append:**

\`\`\`php
<?php
file_put_contents("example.txt", "\nខ្សែថ្មី", FILE_APPEND);
echo "ទិន្នន័យត្រូវបានបន្ថែម!";
?>
\`\`\`

---

## 4. ការលុបឯកសារ

**\`unlink\`**: លុបឯកសារចេញពីប្រព័ន្ធ។

**ឧទាហរណ៍ \`unlink\`:**

\`\`\`php
<?php
if (file_exists("example.txt")) {
    unlink("example.txt");
    echo "ឯកសារត្រូវបានលុប!";
}
?>
\`\`\`

---

## 5. ការប្រើ File Handling ក្នុងគេហទំព័រ

File Handling ត្រូវបានប្រើដើម្បីរក្សាទុក និងបង្ហាញទិន្នន័យនៅក្នុងគេហទំព័រ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP File Handling</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    form { margin: 20px; }
    textarea { width: 300px; height: 100px; }
    input[type="submit"] { padding: 5px 10px; }
    .message { color: green; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP File Handling!</h1>
  <?php
    $filename = "notes.txt";
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $note = filter_var($_POST['note'], FILTER_SANITIZE_STRING);
        if (!empty($note)) {
            file_put_contents($filename, $note . "\n", FILE_APPEND);
            $message = "កំណត់ត្រាត្រូវបានរក្សាទុក!";
        }
    }
    $content = file_exists($filename) ? nl2br(file_get_contents($filename)) : "គ្មានកំណត់ត្រានៅឡើយ។";
  ?>
  <form method="POST" action="">
    <textarea name="note" placeholder="បញ្ចូលកំណត់ត្រា"></textarea><br>
    <input type="submit" value="រក្សាទុក">
  </form>
  <p class="message"><?php echo $message; ?></p>
  <h2>កំណត់ត្រា:</h2>
  <p><?php echo $content; ?></p>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការអានឯកសារដោយ \`file_get_contents\`</h3>
<p>អានខ្លឹមសារពីឯកសារ។</p>
<pre><code class="language-php">
<?php
$content = file_get_contents("example.txt");
echo nl2br($content);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការសរសេរទៅឯកសារដោយ \`file_put_contents\`</h3>
<p>សរសេរទិន្នន័យទៅឯកសារ។</p>
<pre><code class="language-php">
<?php
file_put_contents("example.txt", "សួស្តី ពិភពលោក!");
echo "ឯកសារត្រូវបានសរសេរ!";
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបន្ថែមទិន្នន័យទៅឯកសារ</h3>
<p>បន្ថែមខ្សែថ្មីទៅឯកសារ។</p>
<pre><code class="language-php">
<?php
file_put_contents("example.txt", "\nខ្សែថ្មី", FILE_APPEND);
echo "ទិន្នន័យត្រូវបានបន្ថែម!";
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការលុបឯកសារ</h3>
<p>លុបឯកសារដោយប្រើ \`unlink\`។</p>
<pre><code class="language-php">
<?php
if (file_exists("example.txt")) {
    unlink("example.txt");
    echo "ឯកសារត្រូវបានលុប!";
}
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `file_get_contents` ប្រើសម្រាប់អ្វី?',
      options: [
        'សរសេរទិន្នន័យទៅឯកសារ',
        'អានខ្លឹមសារឯកសារទាំងមូល',
        'លុបឯកសារ',
        'បន្ថែមទិន្នន័យទៅឯកសារ'
      ],
      correct: 1,
      explanation: '`file_get_contents` អានខ្លឹមសារឯកសារទាំងមូលទៅជា String។'
    },
    {
      question: 'តើ `file_put_contents` ប្រើសម្រាប់អ្វី?',
      options: [
        'អានឯកសារ',
        'សរសេរទិន្នន័យទៅឯកសារ',
        'លុបឯកសារ',
        'បើកឯកសារ'
      ],
      correct: 1,
      explanation: '`file_put_contents` សរសេរទិន្នន័យទៅឯកសារ។'
    },
    {
      question: 'តើ `fopen` ប្រើ mode `"r"` សម្រាប់អ្វី?',
      options: [
        'សរសេរទិន្នន័យ',
        'អានឯកសារ',
        'បន្ថែមទិន្នន័យ',
        'លុបឯកសារ'
      ],
      correct: 1,
      explanation: 'Mode `"r"` ប្រើសម្រាប់អានឯកសារតែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `fopen` ប្រើ mode `"w"` សម្រាប់អ្វី?',
      options: [
        'អានឯកសារ',
        'សរសេរទិន្នន័យ និងលុបខ្លឹមសារចាស់',
        'បន្ថែមទិន្នន័យ',
        'លុបឯកសារ'
      ],
      correct: 1,
      explanation: 'Mode `"w"` សរសេរទិន្នន័យ និងលុបខ្លឹមសារចាស់។'
    },
    {
      question: 'តើ `fopen` ប្រើ mode `"a"` សម្រាប់អ្វី?',
      options: [
        'អានឯកសារ',
        'សរសេរទិន្នន័យ និងលុបខ្លឹមសារចាស់',
        'បន្ថែមទិន្នន័យទៅចុងឯកសារ',
        'លុបឯកសារ'
      ],
      correct: 2,
      explanation: 'Mode `"a"` បន្ថែមទិន្នន័យទៅចុងឯកសារ។'
    },
    {
      question: 'តើ `unlink` ប្រើសម្រាប់អ្វី?',
      options: [
        'អានឯកសារ',
        'សរសេរទិន្នន័យ',
        'លុបឯកសារ',
        'បន្ថែមទិន្នន័យ'
      ],
      correct: 2,
      explanation: '`unlink` លុបឯកសារចេញពីប្រព័ន្ធ។'
    },
    {
      question: 'តើ `file_exists` ប្រើសម្រាប់អ្វី?',
      options: [
        'ពិនិត្យថាតើឯកសារមានឬអត់',
        'សរសេរទិន្នន័យ',
        'អានឯកសារ',
        'បន្ថែមទិន្នន័យ'
      ],
      correct: 0,
      explanation: '`file_exists` ពិនិត្យថាតើឯកសារមានឬអត់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `file_put_contents("test.txt", "Hello"); echo "Done";`',
      options: [
        'Hello',
        'Done',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: 'កូដនេះសរសេរទិន្នន័យទៅឯកសារ ហើយបង្ហាញ "Done"។'
    },
    {
      question: 'តើ `fclose` ប្រើសម្រាប់អ្វី?',
      options: [
        'បើកឯកសារ',
        'បិទឯកសារ',
        'សរសេរទិន្នន័យ',
        'អានឯកសារ'
      ],
      correct: 1,
      explanation: '`fclose` បិទឯកសារដែលបានបើកដោយ `fopen`។'
    },
    {
      question: 'តើ `nl2br` ប្រើសម្រាប់អ្វី?',
      options: [
        'បំលែងខ្សែថ្មីទៅជា `<br>`',
        'សរសេរទិន្នន័យ',
        'អានឯកសារ',
        'លុបឯកសារ'
      ],
      correct: 0,
      explanation: '`nl2br` បំលែងខ្សែថ្មី (`\n`) ទៅជា `<br>` សម្រាប់ HTML។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `if (file_exists("test.txt")) { echo "Exists"; } else { echo "Not Found"; }` នៅពេលឯកសារមិនមាន?',
      options: [
        'Exists',
        'Not Found',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: 'ប្រសិនបើឯកសារមិនមាន `file_exists` ត្រឡប់ `false` ដូច្នេះបង្ហាញ "Not Found"។'
    },
    {
      question: 'តើ `FILE_APPEND` ប្រើជាមួយ `file_put_contents` ធ្វើអ្វី?',
      options: [
        'លុបខ្លឹមសារចាស់',
        'បន្ថែមទិន្នន័យទៅចុងឯកសារ',
        'អានឯកសារ',
        'បើកឯកសារ'
      ],
      correct: 1,
      explanation: '`FILE_APPEND` បន្ថែមទិន្នន័យទៅចុងឯកសារ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$file = fopen("test.txt", "w"); fwrite($file, "Hello"); fclose($file); echo "Done";`',
      options: [
        'Hello',
        'Done',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: 'កូដនេះសរសេរទិន្នន័យទៅឯកសារ ហើយបង្ហាញ "Done"។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលបង្កើត Form សម្រាប់បញ្ចូលកំណត់ត្រា និងរក្សាទុកទៅឯកសារ ព្រមទាំងបង្ហាញខ្លឹមសារឯកសារ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP File Handling Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ PHP File Handling!"។
   - បង្កើត Form ដែលមាន \`<textarea>\` សម្រាប់បញ្ចូលកំណត់ត្រា និងប៊ូតុង "រក្សាទុក"។
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញសារជោគជ័យ។
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញខ្លឹមសារឯកសារ។

3. **PHP Functionality:**
   - ប្រើ \`$_POST\` ដើម្បីទទួលកំណត់ត្រា។
   - ប្រើ \`file_put_contents\` ជាមួយ \`FILE_APPEND\` ដើម្បីបន្ថែមកំណត់ត្រាទៅឯកសារ \`notes.txt\`។
   - ប្រើ \`file_get_contents\` និង \`nl2br\` ដើម្បីបង្ហាញខ្លឹមសារឯកសារ។
   - ផ្ទៀងផ្ទាត់ថាកំណត់ត្រាមិនទទេ និងសម្អាតទិន្នន័យដោយ \`filter_var\`។

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`�।
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`color: green;\` សម្រាប់សារជោគជ័យ (\`.message\`)។
     - \`width: 300px; height: 100px;\` សម្រាប់ \`<textarea>\`។

**ការណែនាំ:** ត្រូវប្រាកដថាថតដែលឯកសារត្រូវបានរក្សាទុកមានសិទ្ធិសរសេរ។ រក្សាទុកជា .php និងដំណើរការតាម localhost។
    `,
    solution: `
\`\`\`php
<?php
$filename = "notes.txt";
$message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $note = filter_var($_POST['note'], FILTER_SANITIZE_STRING);
    if (!empty($note)) {
        file_put_contents($filename, $note . "\n", FILE_APPEND);
        $message = "កំណត់ត្រាត្រូវបានរក្សាទុក!";
    } else {
        $message = "សូមបញ្ចូលកំណត់ត្រា!";
    }
}
$content = file_exists($filename) ? nl2br(file_get_contents($filename)) : "គ្មានកំណត់ត្រានៅឡើយ។";
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP File Handling Lab</title>
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
    textarea {
      width: 300px;
      height: 100px;
    }
    input[type="submit"] {
      padding: 5px 10px;
    }
    .message {
      color: green;
    }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP File Handling!</h1>
  <form method="POST" action="">
    <textarea name="note" placeholder="បញ្ចូលកំណត់ត្រា"></textarea><br>
    <input type="submit" value="រក្សាទុក">
  </form>
  <p class="message"><?php echo $message; ?></p>
  <h2>កំណត់ត្រា:</h2>
  <p><?php echo $content; ?></p>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson3_2Content;