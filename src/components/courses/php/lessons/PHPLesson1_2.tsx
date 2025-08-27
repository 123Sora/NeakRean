import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson1_2Content: LessonContent = {
  title: 'PHP Syntax និង Variables',
  objectives: [
    'យល់ដឹងអំពីរចនាសម្ព័ន្ធ Syntax មូលដ្ឋានរបស់ PHP',
    'ស្វែងយល់ពីការប្រើប្រាស់ Variables នៅក្នុង PHP',
    'ស្គាល់ការប្រកាស និងកំណត់តម្លៃឱ្យ Variables',
    'យល់ពីភាពខុសគ្នារវាង Variable Types និង Scope',
    'អនុវត្តការប្រើ Variables ជាមួយ PHP ក្នុងគេហទំព័រ'
  ],
  content: `
# PHP Syntax និង Variables 🌐✨

---

**PHP Syntax** និង **Variables** គឺជាមូលដ្ឋានគ្រឹះនៃការសរសេរកម្មវិធីជាមួយ PHP។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីរបៀបសរសេរកូដ PHP ដែលត្រឹមត្រូវ និងការប្រើ Variables ដើម្បីរក្សាទុកទិន្នន័យ។ PHP គឺជាភាសា Server-side ដែលអនុញ្ញាតឱ្យអ្នកបង្កើតខ្លឹមសារដែល Dynamic នៅលើគេហទំព័រ។

---

## 1. ទម្រង់ Syntax មូលដ្ឋានរបស់ PHP

PHP ត្រូវបានបង្កប់នៅក្នុងឯកសារ HTML ដោយប្រើសញ្ញា \`<?php ... ?>\`។ រាល់កូដ PHP ត្រូវតែស្ថិតនៅក្នុង Tag នេះ។

- **ការសរសេរកូដ PHP:**
  - បន្ទាត់នីមួយៗនៃកូដ PHP ត្រូវបញ្ចប់ដោយ Semicolon (\`;\`).
  - PHP មិនខ្វល់ពី Whitespace ឬ Indentation ទេ ប៉ុន្តែការប្រើ Indentation ជួយឱ្យកូដអាចអានបានកាន់តែច្បាស់។
  - អ្នកអាចប្រើ Comment ដើម្បីពន្យល់កូដ៖
    - \`//\` សម្រាប់ Single-line Comment
    - \`/* ... */\` សម្រាប់ Multi-line Comment

**ឧទាហរណ៍ Syntax មូលដ្ឋាន:**

\`\`\`php
<?php
// នេះជា Single-line Comment
echo "សួស្តីពី PHP!"; // បង្ហាញសារ

/* 
   នេះជា Multi-line Comment
   ប្រើសម្រាប់ពន្យល់កូដច្រើនបន្ទាត់
*/
echo "<br>កូដ PHP នៅទីនេះ!";
?>
\`\`\`

- **ការបង្កប់ PHP ក្នុង HTML:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>PHP Syntax</title>
</head>
<body>
  <h1>សូមស្វាគមន៍!</h1>
  <?php
    echo "<p>នេះជាខ្លឹមសារពី PHP!</p>";
  ?>
</body>
</html>
\`\`\`

---

## 2. អ្វីទៅជា Variables ក្នុង PHP?

**Variables** គឺជាកន្លែងសម្រាប់រក្សាទុកទិន្នន័យ ដែលអាចប្រើឡើងវិញនៅក្នុងកម្មវិធី។ នៅក្នុង PHP, Variables ត្រូវបានប្រកាសដោយប្រើសញ្ញា \`$\` បន្តដោយឈ្មោះ Variable។

- **ច្បាប់នៃការប្រកាស Variable:**
  - ឈ្មោះ Variable ត្រូវចាប់ផ្តើមដោយអក្សរ (a-z, A-Z) ឬ Underscore (\`_\`).
  - ឈ្មោះមិនអាចចាប់ផ្តើមដោយលេខ ឬសញ្ញាពិសេស (លើកលែងតែ \`_\`).
  - ឈ្មោះ Variable គឺ Case-sensitive (\`$name\` និង \`$Name\` គឺខុសគ្នា).
  - មិនចាំបាច់កំណត់ប្រភេទទិន្នន័យទេ (PHP គឺជាភាសា Loosely Typed).

**ឧទាហរណ៍ Variable:**

\`\`\`php
<?php
$name = "សុខា"; // String
$age = 25; // Integer
$height = 1.75; // Float
$is_student = true; // Boolean

echo "ឈ្មោះ: $name <br>";
echo "អាយុ: $age <br>";
echo "កម្ពស់: $height ម៉ែត្រ <br>";
echo "ជានិស្សិត: " . ($is_student ? "បាទ" : "ទេ");
?>
\`\`\`

---

## 3. ការប្រកាស និងកំណត់តម្លៃឱ្យ Variables

- **ការប្រកាស Variable:** គ្រាន់តែប្រើ \`$variableName = value;\`។
- **ការកំណត់តម្លៃឡើងវិញ:** អ្នកអាចផ្លាស់ប្តូរតម្លៃ Variable បានគ្រប់ពេល។
- **Variable Interpolation:** នៅក្នុង String ដែលប្រើ Double Quotes (\`"..."\`), PHP អាចបញ្ចូលតម្លៃ Variable ដោយផ្ទាល់។

**ឧទាហរណ៍:**

\`\`\`php
<?php
$username = "ចន";
$greeting = "សួស្តី, $username!"; // Interpolation
echo $greeting; // បង្ហាញ: សួស្តី, ចន!

$username = "សុភា"; // កំណត់តម្លៃឡើងវិញ
echo "<br>សួស្តី, $username!"; // បង្ហាញ: សួស្តី, សុភា!
?>
\`\`\`

---

## 4. Variable Types និង Scope

PHP គឺជាភាសា Loosely Typed ដែលមានន័យថា Variables មិនចាំបាច់ប្រកាសប្រភេទទិន្នន័យជាមុនទេ។ ប្រភេទទិន្នន័យនឹងត្រូវកំណត់ដោយស្វ័យប្រវត្តិដោយផ្អែកលើតម្លៃ។

- **ប្រភេទទិន្នន័យសំខាន់ៗ:**
  - **String:** អក្សរ ឬឃ្លា (ឧ. "សួស្តី")
  - **Integer:** ចំនួនគត់ (ឧ. 42)
  - **Float:** ចំនួនទសភាគ (ឧ. 3.14)
  - **Boolean:** តម្លៃ true ឬ false
  - **Array:** បណ្តុំទិន្នន័យ
  - **Object:** ទិន្នន័យដែលមាន Properties និង Methods
  - **NULL:** គ្មានតម្លៃ

- **Variable Scope:**
  - **Global Scope:** Variables ដែលប្រកាសនៅខាងក្រៅ Function អាចប្រើបានគ្រប់ទីកន្លែង លើកលែងតែនៅក្នុង Function។
  - **Local Scope:** Variables ដែលប្រកាសនៅក្នុង Function អាចប្រើបានតែនៅក្នុង Function នោះ។
  - **Static Scope:** Variables ដែលប្រើ \`static\` នឹងរក្សាតម្លៃរបស់វាទុក ទោះបី Function បញ្ចប់ការដំណើរការក៏ដោយ។

**ឧទាហរណ៍ Scope:**

\`\`\`php
<?php
$globalVar = "ខ្ញុំជា Global Variable";

function testScope() {
    $localVar = "ខ្ញុំជា Local Variable";
    echo "<p>$localVar</p>";
    // echo $globalVar; // នឹងបណ្តាលឱ្យមាន Error ព្រោះ $globalVar មិនអាចចូលប្រើបាន
}

testScope();
echo "<p>$globalVar</p>";
?>
\`\`\`

---

## 5. ការប្រើ Variables ជាមួយ PHP ក្នុងគេហទំព័រ

Variables ត្រូវបានប្រើយ៉ាងទូលំទូលាយនៅក្នុង PHP ដើម្បីបង្កើតគេហទំព័រដែល Dynamic។ ឧទាហរណ៍ អ្នកអាចប្រើ Variables ដើម្បីរក្សាទុកទិន្នន័យអ្នកប្រើប្រាស់ ឬប្តូរខ្លឹមសារតាមលក្ខខណ្ឌ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Variables</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    p { font-size: 18px; }
    button { padding: 10px 20px; background-color: #007bff; color: white; border: none; cursor: pointer; }
    button:hover { background-color: #0056b3; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Variables!</h1>
  <?php
    $username = "សុខា";
    $greeting = "សួស្តី, $username!";
    $current_time = date("H:i:s");
  ?>
  <p><?php echo $greeting; ?></p>
  <p>ម៉ោងបច្ចុប្បន្ន៖ <?php echo $current_time; ?></p>
</body>
</html>
\`\`\`

នៅក្នុងឧទាហរណ៍ខាងលើ:
- **HTML** បង្កើតរចនាសម្ព័ន្ធ។
- **CSS** កែប្រែរចនាបថ។
- **PHP** ប្រើ Variables ដើម្បីបង្ហាញសារ និងម៉ោងបច្ចុប្បន្ន។

---

## 6. ហេតុអ្វីត្រូវរៀន PHP Syntax និង Variables?

- **មូលដ្ឋានគ្រឹះសម្រាប់ PHP:** Syntax និង Variables គឺជាជំហានដំបូងដើម្បីយល់ដឹងពីរបៀបសរសេរកម្មវិធី PHP។
- **ភាពបត់បែន:** Variables អនុញ្ញាតឱ្យអ្នករក្សាទុក និងគ្រប់គ្រងទិន្នន័យបានយ៉ាងងាយស្រួល។
- **ការអនុវត្តជាក់ស្តែង:** អ្នកអាចប្រើ Variables ដើម្បីបង្កើតគេហទំព័រដែលផ្លាស់ប្តូរតាមអ្នកប្រើប្រាស់។
- **ការត្រៀមខ្លួនសម្រាប់មេរៀនបន្ទាប់:** ការយល់ដឹងពី Variables នឹងជួយអ្នករៀនអំពី Data Types, Operators, និង Control Structures។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្ហាញ Variable សាមញ្ញ</h3>
<p>បង្ហាញឈ្មោះ និងអាយុ។</p>
<pre><code class="language-php">
<?php
  $name = "សុភា";
  $age = 20;
  echo "ឈ្មោះ: $name, អាយុ: $age";
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Variable Interpolation</h3>
<p>បង្កប់ Variable នៅក្នុង String។</p>
<pre><code class="language-php">
<?php
  $city = "ភ្នំពេញ";
  echo "ខ្ញុំរស់នៅ $city";
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Variable Scope</h3>
<p>បង្ហាញភាពខុសគ្នារវាង Global និង Local Scope។</p>
<pre><code class="language-php">
<?php
  $globalVar = "Global Variable";
  
  function showScope() {
      $localVar = "Local Variable";
      echo "<p>$localVar</p>";
  }
  
  showScope();
  echo "<p>$globalVar</p>";
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Static Variable</h3>
<p>បង្ហាញការប្រើ Static Variable ក្នុង Function។</p>
<pre><code class="language-php">
<?php
  function counter() {
      static $count = 0;
      $count++;
      echo "<p>ចំនួន: $count</p>";
  }
  
  counter(); // បង្ហាញ: ចំនួន: 1
  counter(); // បង្ហាញ: ចំនួន: 2
  counter(); // បង្ហាញ: ចំនួន: 3
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើសញ្ញាអ្វីដែលប្រើដើម្បីប្រកាស Variable ក្នុង PHP?',
      options: [
        '#',
        '$',
        '@',
        '&'
      ],
      correct: 1,
      explanation: 'នៅក្នុង PHP, Variable ត្រូវបានប្រកាសដោយប្រើសញ្ញា `$` បន្តដោយឈ្មោះ Variable។'
    },
    {
      question: 'តើបន្ទាត់កូដ PHP ត្រូវបញ្ចប់ដោយអ្វី?',
      options: [
        'Colon (:)',
        'Semicolon (;)',
        'Comma (,)',
        'Period (.)'
      ],
      correct: 1,
      explanation: 'បន្ទាត់កូដ PHP ត្រូវបញ្ចប់ដោយ Semicolon (`;`)។'
    },
    {
      question: 'តើឈ្មោះ Variable ក្នុង PHP អាចចាប់ផ្តើមដោយអ្វី?',
      options: [
        'លេខ',
        'អក្សរ ឬ Underscore',
        'សញ្ញាពិសេស (!@#)',
        'អ្វីក៏បាន'
      ],
      correct: 1,
      explanation: 'ឈ្មោះ Variable ក្នុង PHP ត្រូវចាប់ផ្តើមដោយអក្សរ (a-z, A-Z) ឬ Underscore (`_`)។'
    },
    {
      question: 'តើ PHP គឺជាភាសា Loosely Typed មានន័យថាអ្វី?',
      options: [
        'តម្រូវឱ្យកំណត់ប្រភេទទិន្នន័យជាមុន',
        'មិនតម្រូវឱ្យកំណត់ប្រភេទទិន្នន័យជាមុន',
        'អនុញ្ញាតឱ្យប្រើតែ String',
        'មិនអនុញ្ញាតឱ្យប្រើ Variables'
      ],
      correct: 1,
      explanation: 'PHP គឺជាភាសា Loosely Typed ដែលមានន័យថា Variables មិនចាំបាច់កំណត់ប្រភេទទិន្នន័យជាមុនទេ។'
    },
    {
      question: 'តើ Variable Scope អ្វីដែលអាចប្រើបានតែនៅក្នុង Function?',
      options: [
        'Global Scope',
        'Local Scope',
        'Static Scope',
        'Public Scope'
      ],
      correct: 1,
      explanation: 'Local Scope គឺជា Variable ដែលអាចប្រើបានតែនៅក្នុង Function ដែលវាត្រូវបានប្រកាស។'
    },
    {
      question: 'តើ `static` ក្នុង PHP មានអត្ថន័យអ្វី?',
      options: [
        'ធ្វើឱ្យ Variable មានតម្លៃថេរ',
        'រក្សាតម្លៃ Variable ទុកបន្ទាប់ពី Function បញ្ចប់',
        'ធ្វើឱ្យ Variable អាចប្រើបានគ្រប់ទីកន្លែង',
        'លុប Variable ចេញពី Memory'
      ],
      correct: 1,
      explanation: ' `static` រក្សាតម្លៃ Variable ទុកបន្ទាប់ពី Function បញ្ចប់ការដំណើរការ។'
    },
    {
      question: 'តើកូដខាងក្រោមបង្ហាញអ្វី? `$name = "ចន"; echo "សួស្តី, $name!";`',
      options: [
        'សួស្តី, $name!',
        'សួស្តី, ចន!',
        'Error',
        'ចន'
      ],
      correct: 1,
      explanation: 'កូដនេះប្រើ Variable Interpolation ដើម្បីបង្ហាញ "សួស្តី, ចន!"។'
    },
    {
      question: 'តើ Comment ប្រភេទណាដែលប្រើសម្រាប់ Single-line ក្នុង PHP?',
      options: [
        '/* ... */',
        '//',
        '#',
        '<!-- ... -->'
      ],
      correct: 1,
      explanation: '`//` ត្រូវបានប្រើសម្រាប់ Single-line Comment ក្នុង PHP។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$x = 5; $x = $x + 1; echo $x;`',
      options: [
        '5',
        '6',
        'Error',
        '0'
      ],
      correct: 1,
      explanation: 'កូដនេះបន្ថែម 1 ទៅ `$x` ដែលមានតម្លៃ 5 ដូច្នេះលទ្ធផលគឺ 6។'
    },
    {
      question: 'តើ Variable ណាដែល Case-sensitive ក្នុង PHP?',
      options: [
        'គ្មាន',
        'ទាំងអស់',
        'តែ Global Variables',
        'តែ Local Variables'
      ],
      correct: 1,
      explanation: 'ឈ្មោះ Variable ក្នុង PHP គឺ Case-sensitive ដែលមានន័យថា `$name` និង `$Name` គឺជា Variable ផ្សេងគ្នា។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP មួយដែលបង្ហាញអំពីការប្រើ Variables និង Syntax មូលដ្ឋាន។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` នៅក្នុង \`<head>\`។
   - កំណត់ Title នៃឯកសារ៖ "PHP Variables Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "សូមស្វាគមន៍មកកាន់ PHP Variables!"។
   - បន្ថែម \`<p>\` ដែលបង្ហាញសារស្វាគមន៍ដោយប្រើ Variable \`$greeting\`។
   - បន្ថែម \`<p>\` ដែលបង្ហាញឈ្មោះអ្នកប្រើប្រាស់ដោយប្រើ Variable \`$username\`។
   - បន្ថែម \`<p>\` ដែលបង្ហាញអាយុដោយប្រើ Variable \`$age\`។

3. **PHP Functionality:**
   - ប្រកាស Variables ដូចជា \`$greeting\`, \`$username\`, និង \`$age\`។
   - ប្រើ Variable Interpolation ដើម្បីបង្ហាញសារនៅក្នុង \`<p>\`។
   - បន្ថែម Function មួយឈ្មោះ \`showCounter\` ដែលប្រើ Static Variable ដើម្បីរាប់ចំនួនដងនៃការហៅ Function។

4. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\` ដើម្បីកំណត់រចនាបថ៖
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`background-color: #f8f9fa;\` សម្រាប់ \`body\`។
     - កំណត់ \`color: #007bff;\` សម្រាប់ \`h1\`។

**ការណែនាំ:** ដំឡើង Web Server (ឧទាហរណ៍៖ XAMPP, WAMP) ដើម្បីសាកល្បង Code។ រក្សាទុកឯកសារជា .php និងដំណើរការតាមរយៈ localhost។
    `,
    solution: `
\`\`\`php
<?php
$greeting = "សួស្តីពី PHP!";
$username = "សុខា";
$age = 25;

function showCounter() {
    static $count = 0;
    $count++;
    return $count;
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Variables Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f8f9fa;
    }
    h1 {
      color: #007bff;
    }
    p {
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Variables!</h1>
  <p><?php echo $greeting; ?></p>
  <p>ឈ្មោះ: <?php echo $username; ?></p>
  <p>អាយុ: <?php echo $age; ?> ឆ្នាំ</p>
  <p>ចំនួនដងនៃការហៅ Function: <?php echo showCounter(); ?></p>
  <p>ហៅម្តងទៀត: <?php echo showCounter(); ?></p>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson1_2Content;