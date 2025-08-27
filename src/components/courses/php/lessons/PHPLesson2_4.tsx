import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson2_4Content: LessonContent = {
  title: 'Arrays និង Array Functions ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី Arrays នៅក្នុង PHP',
    'ស្វែងយល់ពីការបង្កើត និងប្រើ Indexed និង Associative Arrays',
    'ស្គាល់ Array Functions ដូចជា `count`, `array_push`, `array_pop`, `array_merge`',
    'អនុវត្ត Arrays និង Array Functions ក្នុងកម្មវិធី PHP',
    'យល់ពីការប្រើ `foreach` ដើម្បីធ្វើការជាមួយ Arrays'
  ],
  content: `
# Arrays និង Array Functions ក្នុង PHP 📚

---

**Arrays** គឺជាប្រភេទទិន្នន័យដែលរក្សាទុកទិន្នន័យច្រើននៅក្នុង Variable តែមួយ។ PHP ផ្តល់នូវ **Array Functions** ជាច្រើនដើម្បីគ្រប់គ្រង Arrays។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការបង្កើត Arrays និងការប្រើ Array Functions។

---

## 1. ការបង្កើត Arrays

PHP មានពីរប្រភេទ Arrays សំខាន់ៗ៖
- **Indexed Arrays**: ប្រើលេខ index (ចាប់ផ្តើមពី 0)។
- **Associative Arrays**: ប្រើ key ជាអក្សរ។

**ឧទាហរណ៍ Indexed Array:**

\`\`\`php
<?php
$fruits = ["apple", "banana", "orange"];
echo $fruits[0]; // បង្ហាញ: apple
?>
\`\`\`

**ឧទាហរណ៍ Associative Array:**

\`\`\`php
<?php
$student = ["name" => "សុភា", "age" => 20];
echo $student["name"]; // បង្ហាញ: សុភា
?>
\`\`\`

---

## 2. Array Functions

PHP មាន Functions ជាច្រើនសម្រាប់ធ្វើការជាមួយ Arrays។

- **\`count\`**: រាប់ចំនួនធាតុក្នុង Array។
- **\`array_push\`**: បន្ថែមធាតុទៅចុង Array។
- **\`array_pop\`**: លុបធាតុចុងក្រោយ។
- **\`array_merge\`**: បញ្ចូល Arrays ច្រើនជាមួយគ្នា។

**ឧទាហរណ៍ Array Functions:**

\`\`\`php
<?php
$fruits = ["apple", "banana"];
echo count($fruits); // បង្ហាញ: 2

array_push($fruits, "orange");
print_r($fruits); // Array ( [0] => apple [1] => banana [2] => orange )

$popped = array_pop($fruits);
echo $popped; // បង្ហាញ: orange

$array1 = ["apple"];
$array2 = ["banana"];
$merged = array_merge($array1, $array2);
print_r($merged); // Array ( [0] => apple [1] => banana )
?>
\`\`\`

---

## 3. ការប្រើ \`foreach\` ជាមួយ Arrays

**\`foreach\`** ប្រើសម្រាប់ឆ្លងកាត់ធាតុនៃ Array។

**ឧទាហរណ៍ \`foreach\`:**

\`\`\`php
<?php
$fruits = ["apple", "banana", "orange"];
foreach ($fruits as $fruit) {
    echo "ផ្លែឈើ: $fruit<br>";
}
?>
\`\`\`

**\`foreach\` ជាមួយ Associative Array:**

\`\`\`php
<?php
$student = ["name" => "សុភា", "age" => 20];
foreach ($student as $key => $value) {
    echo "$key: $value<br>";
}
?>
\`\`\`

---

## 4. ការប្រើ Arrays និង Array Functions ក្នុងគេហទំព័រ

Arrays និង Array Functions ត្រូវបានប្រើដើម្បីបង្ហាញទិន្នន័យជាបណ្តុំនៅក្នុងគេហទំព័រ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Arrays and Array Functions</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    p { font-size: 18px; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Arrays និង Array Functions!</h1>
  <?php
    $fruits = ["apple", "banana"];
    array_push($fruits, "orange");
  ?>
  <p>បញ្ជីផ្លែឈើ (សរុប: <?php echo count($fruits); ?>):</p>
  <?php
    foreach ($fruits as $fruit) {
        echo "<p>$fruit</p>";
    }
  ?>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Indexed Array</h3>
<p>បង្ហាញធាតុពី Indexed Array។</p>
<pre><code class="language-php">
<?php
$fruits = ["apple", "banana", "orange"];
echo $fruits[1]; // បង្ហាញ: banana
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Associative Array</h3>
<p>បង្ហាញធាតុពី Associative Array។</p>
<pre><code class="language-php">
<?php
$student = ["name" => "សុភា", "age" => 20];
echo $student["age"]; // បង្ហាញ: 20
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Array Functions</h3>
<p>ប្រើ \`count\` និង \`array_push\`។</p>
<pre><code class="language-php">
<?php
$fruits = ["apple", "banana"];
echo count($fruits); // បង្ហាញ: 2
array_push($fruits, "orange");
print_r($fruits); // Array ( [0] => apple [1] => banana [2] => orange )
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ \`foreach\` ជាមួយ Associative Array</h3>
<p>ឆ្លងកាត់ Associative Array។</p>
<pre><code class="language-php">
<?php
$student = ["name" => "សុភា", "age" => 20];
foreach ($student as $key => $value) {
    echo "$key: $value<br>";
}
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Array ក្នុង PHP គឺជាអ្វី?',
      options: [
        'ប្រភេទទិន្នន័យសម្រាប់រក្សាទុកតម្លៃតែមួយ',
        'បណ្តុំទិន្នន័យនៅក្នុង Variable តែមួយ',
        'Function សម្រាប់គណនា',
        'រចនាសម្ព័ន្ធសម្រាប់ loop'
      ],
      correct: 1,
      explanation: 'Array គឺជាបណ្តុំទិន្នន័យនៅក្នុង Variable តែមួយ។'
    },
    {
      question: 'តើ Indexed Array ប្រើអ្វីជា key?',
      options: [
        'អក្សរ',
        'លេខ',
        'Boolean',
        'NULL'
      ],
      correct: 1,
      explanation: 'Indexed Array ប្រើលេខជា index (ចាប់ផ្តើមពី 0)។'
    },
    {
      question: 'តើ Associative Array ប្រើអ្វីជា key?',
      options: [
        'លេខ',
        'អក្សរ',
        'Boolean',
        'Array'
      ],
      correct: 1,
      explanation: 'Associative Array ប្រើអក្សរជា key។'
    },
    {
      question: 'តើ `count` Function ធ្វើអ្វី?',
      options: [
        'បន្ថែមធាតុទៅ Array',
        'រាប់ចំនួនធាតុក្នុង Array',
        'លុបធាតុចុងក្រោយ',
        'បញ្ចូល Arrays'
      ],
      correct: 1,
      explanation: '`count` រាប់ចំនួនធាតុក្នុង Array។'
    },
    {
      question: 'តើ `array_push` ធ្វើអ្វី?',
      options: [
        'លុបធាតុចុងក្រោយ',
        'បន្ថែមធាតុទៅចុង Array',
        'បញ្ចូល Arrays',
        'រាប់ធាតុ'
      ],
      correct: 1,
      explanation: '`array_push` បន្ថែមធាតុទៅចុង Array។'
    },
    {
      question: 'តើ `array_pop` ធ្វើអ្វី?',
      options: [
        'បន្ថែមធាតុទៅចុង Array',
        'លុបធាតុចុងក្រោយ',
        'រាប់ធាតុ',
        'បញ្ចូល Arrays'
      ],
      correct: 1,
      explanation: '`array_pop` លុបធាតុចុងក្រោយពី Array។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$fruits = ["apple", "banana"]; echo count($fruits);`',
      options: [
        '1',
        '2',
        '3',
        'Error'
      ],
      correct: 1,
      explanation: '`count` រាប់ធាតុក្នុង Array ដែលមាន 2 ធាតុ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$fruits = ["apple"]; array_push($fruits, "banana"); echo count($fruits);`',
      options: [
        '1',
        '2',
        '3',
        'Error'
      ],
      correct: 1,
      explanation: '`array_push` បន្ថែម "banana" ដូច្នេះ Array មាន 2 ធាតុ។'
    },
    {
      question: 'តើ `foreach` ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើការគណនា',
        'ឆ្លងកាត់ធាតុនៃ Array',
        'បង្កើត Function',
        'ធ្វើការសម្រេចចិត្ត'
      ],
      correct: 1,
      explanation: '`foreach` ប្រើសម្រាប់ឆ្លងកាត់ធាតុនៃ Array។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$student = ["name" => "សុភា"]; echo $student["name"];`',
      options: [
        'សុភា',
        'name',
        'Error',
        'Nothing'
      ],
      correct: 0,
      explanation: '`$student["name"]` បង្ហាញតម្លៃ "សុភា"។'
    },
    {
      question: 'តើ `array_merge` ធ្វើអ្វី?',
      options: [
        'លុបធាតុចុងក្រោយ',
        'បន្ថែមធាតុទៅចុង Array',
        'បញ្ចូល Arrays ច្រើនជាមួយគ្នា',
        'រាប់ធាតុ'
      ],
      correct: 2,
      explanation: '`array_merge` បញ្ចូល Arrays ច្រើនជាមួយគ្នា។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$fruits = ["apple", "banana"]; array_pop($fruits); print_r($fruits);`',
      options: [
        'Array ( [0] => apple )',
        'Array ( [0] => banana )',
        'Array ( [0] => apple [1] => banana )',
        'Error'
      ],
      correct: 0,
      explanation: '`array_pop` លុប "banana" ដូច្នេះ Array នៅសល់ "apple"។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលប្រើ Arrays និង Array Functions ដើម្បីបង្ហាញបញ្ជីសិស្ស។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP Arrays and Array Functions Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ PHP Arrays និង Array Functions!"។
   - បន្ថែម \`<p>\` ដែលបង្ហាញចំនួនសិស្ស។
   - បន្ថែម \`<p>\` ដែលបង្ហាញបញ្ជីឈ្មោះសិស្ស។

3. **PHP Functionality:**
   - ប្រកាស Array \`$students\` ដែលមានឈ្មោះសិស្សយ៉ាងហោចណាស់ 3 ឈ្មោះ។
   - ប្រើ \`array_push\` ដើម្បីបន្ថែមសិស្សថ្មី។
   - ប្រើ \`count\` ដើម្បីរាប់ចំនួនសិស្ស។
   - ប្រើ \`foreach\` ដើម្បីបង្ហាញឈ្មោះសិស្សនីមួយៗ។

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`។

**ការណែនាំ:** រក្សាទុកជា .php និងដំណើរការតាម localhost។
    `,
    solution: `
\`\`\`php
<?php
$students = ["សុភា", "សុខា", "វិបុល"];
array_push($students, "មានា");
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Arrays and Array Functions Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ PHP Arrays និង Array Functions!</h1>
  <p>ចំនួនសិស្ស: <?php echo count($students); ?></p>
  <p>បញ្ជីសិស្ស:</p>
  <?php
    foreach ($students as $student) {
        echo "<p>$student</p>";
    }
  ?>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson2_4Content;