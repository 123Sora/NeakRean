import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson1_3Content: LessonContent = {
  title: 'Data Types និង Operators',
  objectives: [
    'យល់ដឹងអំពីប្រភេទទិន្នន័យ (Data Types) ផ្សេងៗនៅក្នុង PHP',
    'ស្វែងយល់ពីការប្រើប្រាស់ Operators សម្រាប់ធ្វើប្រតិបត្តិការលើទិន្នន័យ',
    'ស្គាល់ការប្រើ Arithmetic, Comparison, Logical និង Assignment Operators',
    'អនុវត្តការប្រើ Data Types និង Operators ក្នុងកម្មវិធី PHP',
    'យល់ពីការបំលែងប្រភេទទិន្នន័យ (Type Casting) នៅក្នុង PHP'
  ],
  content: `
# Data Types និង Operators 🌐✨

---

**Data Types** និង **Operators** គឺជាសមាសធាតុសំខាន់ក្នុងការសរសេរកម្មវិធី PHP។ Data Types កំណត់ប្រភេទនៃទិន្នន័យដែល Variables អាចរក្សាទុក ខណៈ Operators អនុញ្ញាតឱ្យអ្នកធ្វើប្រតិបត្តិការលើទិន្នន័យទាំងនោះ។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីប្រភេទទិន្នន័យផ្សេងៗ និងប្រភេទ Operators ដែលប្រើជាទូទៅនៅក្នុង PHP។

---

## 1. Data Types ក្នុង PHP

PHP គឺជាភាសា **Loosely Typed** ដែលមានន័យថា Variables មិនចាំបាច់ប្រកាសប្រភេទទិន្នន័យជាមុនទេ។ PHP នឹងកំណត់ប្រភេទទិន្នន័យដោយស្វ័យប្រវត្តិដោយផ្អែកលើតម្លៃ។

### ប្រភេទទិន្នន័យសំខាន់ៗ៖
- **String:** អក្សរ ឬឃ្លា (ឧ. "សួស្តី", "123")។
- **Integer:** ចំនួនគត់ (ឧ. 42, -10)។
- **Float (Double):** ចំនួនទសភាគ (ឧ. 3.14, -0.5)។
- **Boolean:** តម្លៃ \`true\` ឬ \`false\`។
- **Array:** បណ្តុំទិន្នន័យ (ឧ. \`[1, 2, 3]\`)។
- **Object:** ទិន្នន័យដែលមាន Properties និង Methods។
- **NULL:** គ្មានតម្លៃ។
- **Resource:** ទិន្នន័យពិសេសសម្រាប់ធ្វើការជាមួយ External Resources (ឧ. Database Connection)។

**ឧទាហរណ៍ Data Types:**

\`\`\`php
<?php
$string = "សួស្តី ពិភពលោក!";
$integer = 42;
$float = 3.14;
$boolean = true;
$array = ["apple", "banana", "orange"];
$null = null;

var_dump($string); // string(25) "សួស្តី ពិភពលោក!"
var_dump($integer); // int(42)
var_dump($float); // float(3.14)
var_dump($boolean); // bool(true)
var_dump($array); // array(3) { [0]=> string(5) "apple" ... }
var_dump($null); // NULL
?>
\`\`\`

### ការបំលែងប្រភេទទិន្នន័យ (Type Casting)
PHP អនុញ្ញាតឱ្យអ្នកបំលែងប្រភេទទិន្នន័យដោយប្រើ Casting ដូចជា \`(int)\`, \`(float)\`, \`(string)\`។

**ឧទាហរណ៍ Type Casting:**

\`\`\`php
<?php
$string_number = "123";
$integer = (int)$string_number; // បំលែង String ទៅ Integer
echo $integer; // បង្ហាញ: 123
var_dump($integer); // int(123)

$float_number = 3.14;
$string = (string)$float_number; // បំលែង Float ទៅ String
echo $string; // បង្ហាញ: 3.14
var_dump($string); // string(4) "3.14"
?>
\`\`\`

---

## 2. Operators ក្នុង PHP

**Operators** គឺជាសញ្ញា ឬនិមិត្តសញ្ញាដែលប្រើសម្រាប់ធ្វើប្រតិបត្តិការលើ Variables ឬតម្លៃ។ PHP មានប្រភេទ Operators ជាច្រើន៖

### 2.1 Arithmetic Operators
ប្រើសម្រាប់ធ្វើប្រតិបត្តិការគណិតវិទ្យា។
- \`+\` (បូក), \`-\` (ដក), \`*\` (គុណ), \`/\` (ចែក), \`%\` (Modulus), \`**\` (ស្វ័យគុណ)

**ឧទាហរណ៍:**

\`\`\`php
<?php
$a = 10;
$b = 3;

echo $a + $b; // 13
echo "<br>";
echo $a - $b; // 7
echo "<br>";
echo $a * $b; // 30
echo "<br>";
echo $a / $b; // 3.333...
echo "<br>";
echo $a % $b; // 1
echo "<br>";
echo $a ** 2; // 100
?>
\`\`\`

### 2.2 Assignment Operators
ប្រើសម្រាប់កំណត់តម្លៃឱ្យ Variables។
- \`=\` (កំណត់តម្លៃ), \`+=\`, \`-=\`, \`*=\`, \`/=\`, \`%=\`

**ឧទាហរណ៍:**

\`\`\`php
<?php
$x = 5; // កំណត់តម្លៃ
$x += 3; // $x = $x + 3; // 8
echo $x; // 8
$x *= 2; // $x = $x * 2; // 16
echo "<br>$x"; // 16
?>
\`\`\`

### 2.3 Comparison Operators
ប្រើសម្រាប់ប្រៀបធៀបតម្លៃ។
- \`==\` (ស្មើ), \`===\` (ស្មើទាំងតម្លៃនិងប្រភេទ), \`!=\` (មិនស្មើ), \`!==\` (មិនស្មើទាំងតម្លៃនិងប្រភេទ), \`<\`, \`>\`, \`<=\`, \`>=\`

**ឧទាហរណ៍:**

\`\`\`php
<?php
$a = 10;
$b = "10";

var_dump($a == $b); // bool(true)
var_dump($a === $b); // bool(false)
var_dump($a != $b); // bool(false)
var_dump($a !== $b); // bool(true)
var_dump($a > 5); // bool(true)
?>
\`\`\`

### 2.4 Logical Operators
ប្រើសម្រាប់ធ្វើប្រតិបត្តិការតក្កវិជ្ជា។
- \`&&\` (AND), \`||\` (OR), \`!\` (NOT)

**ឧទាហរណ៍:**

\`\`\`php
<?php
$a = true;
$b = false;

var_dump($a && $b); // bool(false)
var_dump($a || $b); // bool(true)
var_dump(!$a); // bool(false)
?>
\`\`\`

---

## 3. ការប្រើ Data Types និង Operators ក្នុងគេហទំព័រ

Data Types និង Operators ត្រូវបានប្រើដើម្បីបង្កើតគេហទំព័រដែល Dynamic ដោយអនុញ្ញាតឱ្យអ្នកធ្វើប្រតិបត្តិការលើទិន្នន័យ និងបង្ហាញលទ្ធផល។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Data Types and Operators</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    p { font-size: 18px; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Data Types និង Operators!</h1>
  <?php
    $name = "សុខា"; // String
    $age = 25; // Integer
    $height = 1.75; // Float
    $is_student = true; // Boolean

    $total = $age + 5; // Arithmetic Operator
    $is_adult = $age >= 18; // Comparison Operator
  ?>
  <p>ឈ្មោះ: <?php echo $name; ?></p>
  <p>អាយុ: <?php echo $age; ?> ឆ្នាំ</p>
  <p>អាយុបន្ទាប់ពី ៥ ឆ្នាំ: <?php echo $total; ?> ឆ្នាំ</p>
  <p>ជាមនុស្សពេញវ័យ: <?php echo $is_adult ? "បាទ" : "ទេ"; ?></p>
</body>
</html>
\`\`\`

នៅក្នុងឧទាហរណ៍ខាងលើ:
- **HTML** បង្កើតរចនាសម្ព័ន្ធ។
- **CSS** កែប្រែរចនាបថ។
- **PHP** ប្រើ Data Types និង Operators ដើម្បីបង្ហាញទិន្នន័យ។

---

## 4. ហេតុអ្វីត្រូវរៀន Data Types និង Operators?

- **គ្រប់គ្រងទិន្នន័យ:** Data Types ជួយអ្នករក្សាទុកទិន្នន័យក្នុងទម្រង់ត្រឹមត្រូវ។
- **ធ្វើប្រតិបត្តិការ:** Operators អនុញ្ញាតឱ្យអ្នកធ្វើការគណនា និងប្រៀបធៀបទិន្នន័យ។
- **បង្កើតភាព Dynamic:** អ្នកអាចបង្កើតគេហទំព័រដែលផ្លាស់ប្តូរដោយផ្អែកលើទិន្នន័យអ្នកប្រើប្រាស់។
- **មូលដ្ឋានសម្រាប់មេរៀនបន្ទាប់:** ការយល់ដឹងពី Data Types និង Operators នឹងជួយអ្នករៀនអំពី Control Structures និង Functions។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ប្រើ Data Types</h3>
<p>បង្ហាញប្រភេទទិន្នន័យផ្សេងៗ។</p>
<pre><code class="language-php">
<?php
  $string = "សួស្តី";
  $integer = 100;
  $float = 2.5;
  $boolean = false;
  echo "String: $string, Integer: $integer, Float: $float, Boolean: " . ($boolean ? "true" : "false");
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Arithmetic Operators</h3>
<p>ធ្វើប្រតិបត្តិការគណិតវិទ្យា។</p>
<pre><code class="language-php">
<?php
  $x = 10;
  $y = 4;
  echo "បូក: " . ($x + $y) . "<br>";
  echo "ដក: " . ($x - $y) . "<br>";
  echo "គុណ: " . ($x * $y) . "<br>";
  echo "ចែក: " . ($x / $y);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Comparison Operators</h3>
<p>ប្រៀបធៀបតម្លៃ។</p>
<pre><code class="language-php">
<?php
  $a = 5;
  $b = "5";
  var_dump($a == $b); // true
  var_dump($a === $b); // false
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Logical Operators</h3>
<p>ប្រើ Logical Operators ដើម្បីធ្វើការសម្រេចចិត្ត�।</p>
<pre><code class="language-php">
<?php
  $age = 20;
  $is_student = true;
  if ($age >= 18 && $is_student) {
      echo "អ្នកជានិស្សិតពេញវ័យ";
  }
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើប្រភេទទិន្នន័យណាដែលតំណាងឱ្យចំនួនទសភាគ?',
      options: [
        'String',
        'Integer',
        'Float',
        'Boolean'
      ],
      correct: 2,
      explanation: 'Float តំណាងឱ្យចំនួនទសភាគ (ឧ. 3.14)។'
    },
    {
      question: 'តើ Operator ណាដែលប្រើសម្រាប់ស្មើទាំងតម្លៃនិងប្រភេទ?',
      options: [
        '==',
        '===',
        '!=',
        '!=='
      ],
      correct: 1,
      explanation: '`===` ប្រៀបធៀបទាំងតម្លៃនិងប្រភេទទិន្នន័យ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$x = 10; $x += 5; echo $x;`',
      options: [
        '10',
        '15',
        '5',
        'Error'
      ],
      correct: 1,
      explanation: '`$x += 5` បន្ថែម 5 ទៅ `$x` ដែលមានតម្លៃ 10 ដូច្នេះលទ្ធផលគឺ 15។'
    },
    {
      question: 'តើប្រភេទទិន្នន័យណាដែលតំណាងឱ្យគ្មានតម្លៃ?',
      options: [
        'String',
        'NULL',
        'Array',
        'Boolean'
      ],
      correct: 1,
      explanation: 'NULL តំណាងឱ្យគ្មានតម្លៃ។'
    },
    {
      question: 'តើ Operator ណាដែលប្រើសម្រាប់ Modulus?',
      options: [
        '/',
        '%',
        '*',
        '**'
      ],
      correct: 1,
      explanation: '`%` គឺជា Modulus Operator ដែលផ្តល់នូវសំណល់នៃការចែក។'
    },
    {
      question: 'តើកូដខាងក្រោមបង្ហាញអ្វី? `$a = true; $b = false; echo $a || $b;`',
      options: [
        'true',
        'false',
        '1',
        '0'
      ],
      correct: 2,
      explanation: '`$a || $b` ប្រើ OR Operator ដែលនឹងបង្ហាញ `1` (true) ព្រោះ `$a` គឺ true។'
    },
    {
      question: 'តើ Type Casting មានន័យថាអ្វី?',
      options: [
        'ការបំលែងប្រភេទទិន្នន័យ',
        'ការលុបទិន្នន័យ',
        'ការបង្កើត Variable',
        'ការប្រៀបធៀបទិន្នន័យ'
      ],
      correct: 0,
      explanation: 'Type Casting គឺជាការបំលែងប្រភេទទិន្នន័យ (ឧ. ពី String ទៅ Integer)។'
    },
    {
      question: 'តើ Operator ណាដែលប្រើសម្រាប់ AND ក្នុង PHP?',
      options: [
        '&&',
        '||',
        '!',
        '&'
      ],
      correct: 0,
      explanation: '`&&` គឺជា Logical AND Operator ក្នុង PHP។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$x = "5"; $y = (int)$x; echo $y;`',
      options: [
        '5',
        '"5"',
        'Error',
        'NULL'
      ],
      correct: 0,
      explanation: '`(int)$x` បំលែង String `"5"` ទៅ Integer `5`។'
    },
    {
      question: 'តើ Operator ណាដែលប្រើសម្រាប់ស្វ័យគុណ?',
      options: [
        '*',
        '**',
        '/',
        '%'
      ],
      correct: 1,
      explanation: '`**` គឺជា Operator សម្រាប់ស្វ័យគុណ (Exponentiation)។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP មួយដែលបង្ហាញអំពីការប្រើ Data Types និង Operators។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` នៅក្នុង \`<head>\`។
   - កំណត់ Title នៃឯកសារ៖ "PHP Data Types and Operators Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "សូមស្វាគមន៍មកកាន់ PHP Data Types និង Operators!"។
   - បន្ថែម \`<p>\` ដែលបង្ហាញឈ្មោះអ្នកប្រើប្រាស់ដោយប្រើ Variable \`$username\` (String)។
   - បន្ថែម \`<p>\` ដែលបង្ហាញអាយុបន្ទាប់ពី ៥ ឆ្នាំដោយប្រើ \`$age\` (Integer) និង Arithmetic Operator។
   - បន្ថែម \`<p>\` ដែលបង្ហាញថាអ្នកប្រើប្រាស់ជាមនុស្សពេញវ័យឬអត់ដោយប្រើ \`$age\` និង Comparison Operator។

3. **PHP Functionality:**
   - ប្រកាស Variables \`$username\`, \`$age\`, និង \`$is_adult\`។
   - ប្រើ Arithmetic Operator ដើម្បីគណនាអាយុបន្ទាប់ពី ៥ ឆ្នាំ។
   - ប្រើ Comparison Operator ដើម្បីពិនិត្យថាអ្នកប្រើប្រាស់មានអាយុលើស ១៨ ឆ្នាំឬអត់។
   - ប្រើ Type Casting ដើម្បីបំលែង \`$age\` ទៅជា String នៅពេលបង្ហាញ។

4. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\` ដើម្បីកំណត់រចនាបថ៖
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`background-color: #f8f9fa;\` សម្រាប់ \`body\`។
     - កំណត់ \`color: #007bff;\` សម្រាប់ \`h1\`។

**ការណែនាំ:** ដំឡើង Web Server (ឧទាហរណ៍៖ XAMPP, WAMP) ដើម្បីតេស្ត Code។ រក្សាទុកឯកសារជា .php និងដំណើរការតាមរយៈ localhost។
    `,
    solution: `
\`\`\`html
<?php
$username = "សុភា";
$age = 20;
$future_age = $age + 5; // Arithmetic Operator
$is_adult = $age >= 18; // Comparison Operator
$age_string = (string)$age; // Type Casting
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Data Types and Operators Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ PHP Data Types និង Operators!</h1>
  <p>ឈ្មោះ: <?php echo $username; ?></p>
  <p>អាយុបច្ចុប្បន្ន (String): <?php echo $age_string; ?> ឆ្នាំ</p>
  <p>អាយុបន្ទាប់ពី ៥ ឆ្នាំ: <?php echo $future_age; ?> ឆ្នាំ</p>
  <p>ជាមនុស្សពេញវ័យ: <?php echo $is_adult ? "បាទ" : "ទេ"; ?></p>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson1_3Content;