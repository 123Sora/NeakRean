import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson2_3Content: LessonContent = {
  title: 'Functions ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី Functions នៅក្នុង PHP',
    'ស្វែងយល់ពីការបង្កើត និងប្រើ Functions ដែលមាន និងគ្មាន Parameters',
    'ស្គាល់ការប្រើ Return Values នៅក្នុង Functions',
    'អនុវត្ត Functions ក្នុងកម្មវិធី PHP',
    'យល់ពី Variable Scope (Local និង Global) នៅក្នុង Functions'
  ],
  content: `
# Functions ក្នុង PHP 🛠️

---

**Functions** គឺជាបណ្តុំនៃកូដដែលអនុវត្តការងារជាក់លាក់ និងអាចប្រើឡើងវិញបាន។ នៅក្នុង PHP យើងអាចបង្កើត Functions ដើម្បីធ្វើឱ្យកូដមានភាពស្និទ្ធស្នាល និងងាយស្រួលថែទាំ។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការបង្កើត Functions ការប្រើ Parameters និង Return Values ព្រមទាំង Variable Scope។

---

## 1. ការបង្កើត Functions

Functions ត្រូវបានប្រកាសដោយប្រើពាក្យគន្លឹះ \`function\` តាមពីក្រោយដោយឈ្មោះ Function និងកូដ block។

**ឧទាហរណ៍ Function មូលដ្ឋាន:**

\`\`\`php
<?php
function sayHello() {
    echo "សួស្តី ពិភពលោក!";
}
sayHello(); // ហៅ Function
?>
\`\`\`

---

## 2. Functions ជាមួយ Parameters

Functions អាចទទួល **Parameters** ដើម្បីធ្វើការជាមួយទិន្នន័យដែលផ្ញើចូល។

**ឧទាហរណ៍ Function ជាមួយ Parameters:**

\`\`\`php
<?php
function greet($name) {
    echo "សួស្តី, $name!";
}
greet("សុភា"); // បង្ហាញ: សួស្តី, សុភា!
?>
\`\`\`

**Parameters ច្រើន:**

\`\`\`php
<?php
function add($a, $b) {
    echo $a + $b;
}
add(5, 3); // បង្ហាញ: 8
?>
\`\`\`

---

## 3. Return Values

Functions អាចបញ្ជូនតម្លៃត្រឡប់មកវិញដោយប្រើ \`return\`។

**ឧទាហរណ៍ Return Value:**

\`\`\`php
<?php
function multiply($a, $b) {
    return $a * $b;
}
$result = multiply(4, 5);
echo $result; // បង្ហាញ: 20
?>
\`\`\`

---

## 4. Variable Scope

- **Local Scope**: Variables ដែលប្រកាសក្នុង Function អាចប្រើបានតែក្នុង Function នោះ។
- **Global Scope**: Variables ដែលប្រកាសក្រៅ Function អាចប្រើបានដោយប្រើពាក្យគន្លឹះ \`global\`។

**ឧទាហរណ៍ Scope:**

\`\`\`php
<?php
$globalVar = 10;
function testScope() {
    $localVar = 5;
    global $globalVar;
    echo "Local: $localVar, Global: $globalVar";
}
testScope(); // បង្ហាញ: Local: 5, Global: 10
?>
\`\`\`

---

## 5. ការប្រើ Functions ក្នុងគេហទំព័រ

Functions ត្រូវបានប្រើដើម្បីបង្កើតគេហទំព័រដែល Dynamic ដោយអនុញ្ញាតឱ្យអ្នកប្រើកូដឡើងវិញ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Functions</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    p { font-size: 18px; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Functions!</h1>
  <?php
    function calculateArea($width, $height) {
        return $width * $height;
    }
    $width = 5;
    $height = 10;
    $area = calculateArea($width, $height);
  ?>
  <p>ទទឹង: <?php echo $width; ?> ម៉ែត្រ</p>
  <p>កម្ពស់: <?php echo $height; ?> ម៉ែត្រ</p>
  <p>ផ្ទៃក្រឡា: <?php echo $area; ?> ម៉ែត្រការ៉េ</p>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Function មូលដ្ឋាន</h3>
<p>បង្កើត Function ដែលបង្ហាញសារ។</p>
<pre><code class="language-php">
<?php
function sayHello() {
    echo "សួស្តី ពិភពលោក!";
}
sayHello();
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Function ជាមួយ Parameters</h3>
<p>Function ដែលទទួលឈ្មោះ។</p>
<pre><code class="language-php">
<?php
function greet($name) {
    echo "សួស្តី, $name!";
}
greet("សុភា");
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Return Value</h3>
<p>Function ដែលគណនាផលគុណ។</p>
<pre><code class="language-php">
<?php
function multiply($a, $b) {
    return $a * $b;
}
echo multiply(4, 5);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Variable Scope</h3>
<p>បង្ហាញ Local និង Global Variables។</p>
<pre><code class="language-php">
<?php
$globalVar = 10;
function testScope() {
    $localVar = 5;
    global $globalVar;
    echo "Local: $localVar, Global: $globalVar";
}
testScope();
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Function ក្នុង PHP គឺជាអ្វី?',
      options: [
        'Variable សម្រាប់រក្សាទុកទិន្នន័យ',
        'បណ្តុំកូដដែលអនុវត្តការងារជាក់លាក់',
        'រចនាសម្ព័ន្ធសម្រាប់ loop',
        'ប្រភេទទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Function គឺជាបណ្តុំកូដដែលអនុវត្តការងារជាក់លាក់ និងអាចប្រើឡើងវិញបាន។'
    },
    {
      question: 'តើពាក្យគន្លឹះណាដែលប្រើដើម្បីបង្កើត Function?',
      options: [
        'define',
        'function',
        'create',
        'method'
      ],
      correct: 1,
      explanation: 'ពាក្យគន្លឹះ `function` ប្រើដើម្បីបង្កើត Function ក្នុង PHP។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `function add($a, $b) { echo $a + $b; } add(2, 3);`',
      options: [
        '5',
        '23',
        'Error',
        'Nothing'
      ],
      correct: 0,
      explanation: 'Function `add` បូក 2 និង 3 ដូច្នេះបង្ហាញ 5។'
    },
    {
      question: 'តើ `return` ក្នុង Function ធ្វើអ្វី?',
      options: [
        'បង្ហាញទិន្នន័យ',
        'បញ្ជូនតម្លៃត្រឡប់មកវិញ',
        'បញ្ឈប់កម្មវិធី',
        'បង្កើត variable'
      ],
      correct: 1,
      explanation: '`return` បញ្ជូនតម្លៃត្រឡប់មកវិញពី Function។'
    },
    {
      question: 'តើអ្វីជា Local Scope?',
      options: [
        'Variable ដែលប្រើបានគ្រប់ទីកន្លែង',
        'Variable ដែលប្រើបានតែក្នុង Function',
        'Variable ដែលប្រើក្នុង loop',
        'Variable ដែលប្រើក្នុង Array'
      ],
      correct: 1,
      explanation: 'Local Scope គឺជា Variable ដែលប្រើបានតែក្នុង Function។'
    },
    {
      question: 'តើអ្វីជា Global Scope?',
      options: [
        'Variable ដែលប្រើបានតែក្នុង Function',
        'Variable ដែលប្រើបានក្រៅ Function',
        'Variable ដែលប្រើក្នុង loop',
        'Variable ដែលប្រើក្នុង Array'
      ],
      correct: 1,
      explanation: 'Global Scope គឺជា Variable ដែលប្រើបានក្រៅ Function។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `function square($n) { return $n * $n; } echo square(4);`',
      options: [
        '16',
        '8',
        '4',
        'Error'
      ],
      correct: 0,
      explanation: 'Function `square` គណនា 4 * 4 ដូច្នេះបង្ហាញ 16។'
    },
    {
      question: 'តើពាក្យគន្លឹះណាដែលប្រើដើម្បីចូលប្រើ Global Variable ក្នុង Function?',
      options: [
        'local',
        'global',
        'static',
        'const'
      ],
      correct: 1,
      explanation: 'ពាក្យគន្លឹះ `global` ប្រើដើម្បីចូលប្រើ Global Variable។'
    },
    {
      question: 'តើ Function អាចទទួល Parameters ប៉ុន្មាន?',
      options: [
        'តែមួយប៉ុណ្ណោះ',
        'ច្រើនតាមតម្រូវការ',
        'មិនអាចទទួល Parameters',
        'តែពីរ'
      ],
      correct: 1,
      explanation: 'Function អាចទទួល Parameters ច្រើនតាមតម្រូវការ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `function greet($name) { echo "Hello, $name"; } greet("សុខា");`',
      options: [
        'Hello, សុខា',
        'សុខា',
        'Error',
        'Nothing'
      ],
      correct: 0,
      explanation: 'Function `greet` បង្ហាញ "Hello, សុខា"។'
    },
    {
      question: 'តើ Function ដែលគ្មាន `return` ត្រឡប់អ្វី?',
      options: [
        '0',
        'NULL',
        'Error',
        'String'
      ],
      correct: 1,
      explanation: 'Function ដែលគ្មាន `return` ត្រឡប់ `NULL` ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$x = 10; function test() { $x = 5; } test(); echo $x;`',
      options: [
        '5',
        '10',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: '`$x` ក្នុង Function ជា Local Variable ដូច្នេះ Global `$x` នៅតែ 10។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលប្រើ Functions ដើម្បីគណនា និងបង្ហាញផ្ទៃក្រឡាចតុកោណ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP Functions Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ PHP Functions!"។
   - បន្ថែម \`<p>\` ដែលបង្ហាញទទឹង កម្ពស់ និងផ្ទៃក្រឡា។

3. **PHP Functionality:**
   - ប្រកាស Variables \`$width\` និង \`$height\` (Integer ឬ Float)។
   - បង្កើត Function \`calculateArea\` ដែលទទួល Parameters \`$width\` និង \`$height\` ហើយ Return ផ្ទៃក្រឡា។
   - ប្រើ Function ដើម្បីគណនា និងបង្ហាញផ្ទៃក្រឡា។

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
function calculateArea($width, $height) {
    return $width * $height;
}
$width = 5;
$height = 10;
$area = calculateArea($width, $height);
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Functions Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ PHP Functions!</h1>
  <p>ទទឹង: <?php echo $width; ?> ម៉ែត្រ</p>
  <p>កម្ពស់: <?php echo $height; ?> ម៉ែត្រ</p>
  <p>ផ្ទៃក្រឡា: <?php echo $area; ?> ម៉ែត្រការ៉េ</p>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson2_3Content;