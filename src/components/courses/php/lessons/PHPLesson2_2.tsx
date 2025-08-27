import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson2_2Content: LessonContent = {
  title: 'Loops ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី Loops នៅក្នុង PHP',
    'ស្វែងយល់ពីការប្រើ `for`, `while`, និង `do-while` loops',
    'ស្គាល់ការប្រើ `foreach` loop សម្រាប់ Arrays',
    'អនុវត្ត Loops ក្នុងកម្មវិធី PHP',
    'យល់ពីការប្រើ `break` និង `continue` ដើម្បីគ្រប់គ្រង loop'
  ],
  content: `
# Loops ក្នុង PHP 🔄

---

**Loops** គឺជាផ្នែកសំខាន់នៅក្នុង PHP ដែលអនុញ្ញាតឱ្យកម្មវិធីប្រតិបត្តិកូដម្តងហើយម្តងទៀតដោយផ្អែកលើលក្ខខណ្ឌ។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពី \`for\`, \`while\`, \`do-while\`, និង \`foreach\` loops ព្រមទាំង \`break\` និង \`continue\`។

---

## 1. \`for\` Loop

**\`for\` Loop** ប្រើសម្រាប់ប្រតិបត្តិកូដចំនួនជាក់លាក់។

**ឧទាហរណ៍ \`for\` Loop:**

\`\`\`php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo "លេខ: $i<br>";
}
?>
\`\`\`

---

## 2. \`while\` Loop

**\`while\` Loop** ប្រតិបត្តិកូដដរាបណាលក្ខខណ្ឌនៅតែ \`true\`។

**ឧទាហរណ៍ \`while\` Loop:**

\`\`\`php
<?php
$count = 1;
while ($count <= 5) {
    echo "លេខ: $count<br>";
    $count++;
}
?>
\`\`\`

---

## 3. \`do-while\` Loop

**\`do-while\` Loop** ប្រតិបត្តិកូដយ៉ាងហោចណាស់ម្តង ហើយបន្តប្រសិនបើលក្ខខណ្ឌ \`true\`។

**ឧទាហរណ៍ \`do-while\` Loop:**

\`\`\`php
<?php
$count = 1;
do {
    echo "លេខ: $count<br>";
    $count++;
} while ($count <= 5);
?>
\`\`\`

---

## 4. \`foreach\` Loop

**\`foreach\` Loop** ប្រើសម្រាប់ធ្វើការជាមួយ Arrays។

**ឧទាហរណ៍ \`foreach\` Loop:**

\`\`\`php
<?php
$fruits = ["apple", "banana", "orange"];
foreach ($fruits as $fruit) {
    echo "ផ្លែឈើ: $fruit<br>";
}
?>
\`\`\`

---

## 5. \`break\` និង \`continue\`

- **\`break\`**: បញ្ឈប់ loop ទាំងស្រុង។
- **\`continue\`**: រំលង iteration បច្ចុប្បន្ន ហើយបន្តទៅ iteration បន្ទាប់។

**ឧទាហរណ៍ \`break\` និង \`continue\`:**

\`\`\`php
<?php
for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) {
        break; // បញ្ឈប់ loop នៅ $i = 5
    }
    echo "លេខ: $i<br>";
}

for ($i = 1; $i <= 5; $i++) {
    if ($i == 3) {
        continue; // រំលង $i = 3
    }
    echo "លេខ: $i<br>";
}
?>
\`\`\`

---

## 6. ការប្រើ Loops ក្នុងគេហទំព័រ

Loops ត្រូវបានប្រើដើម្បីបង្ហាញទិន្នន័យជាបណ្តុំនៅក្នុងគេហទំព័រ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Loops</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    p { font-size: 18px; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Loops!</h1>
  <?php
    $fruits = ["apple", "banana", "orange"];
  ?>
  <p>ផ្លែឈើ:</p>
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
    `<h3>ឧទាហរណ៍៖ \`for\` Loop</h3>
<p>បង្ហាញលេខពី 1 ដល់ 5។</p>
<pre><code class="language-php">
<?php
for ($i = 1; $i <= 5; $i++) {
    echo "លេខ: $i<br>";
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ \`while\` Loop</h3>
<p>បង្ហាញលេខពី 1 ដល់ 5។</p>
<pre><code class="language-php">
<?php
$count = 1;
while ($count <= 5) {
    echo "លេខ: $count<br>";
    $count++;
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ \`do-while\` Loop</h3>
<p>បង្ហាញលេខពី 1 ដល់ 5។</p>
<pre><code class="language-php">
<?php
$count = 1;
do {
    echo "លេខ: $count<br>";
    $count++;
} while ($count <= 5);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ \`foreach\` Loop</h3>
<p>បង្ហាញផ្លែឈើពី Array។</p>
<pre><code class="language-php">
<?php
$fruits = ["apple", "banana", "orange"];
foreach ($fruits as $fruit) {
    echo "ផ្លែឈើ: $fruit<br>";
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ \`break\` និង \`continue\`</h3>
<p>បង្ហាញលេខ ដោយរំលង 3 និងបញ្ឈប់នៅ 5។</p>
<pre><code class="language-php">
<?php
for ($i = 1; $i <= 10; $i++) {
    if ($i == 3) {
        continue;
    }
    if ($i == 5) {
        break;
    }
    echo "លេខ: $i<br>";
}
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Loop ក្នុង PHP ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើការសម្រេចចិត្ត',
        'ប្រតិបត្តិកូដម្តងហើយម្តងទៀត',
        'បំលែងប្រភេទទិន្នន័យ',
        'បង្កើត Functions'
      ],
      correct: 1,
      explanation: 'Loops ប្រើសម្រាប់ប្រតិបត្តិកូដម្តងហើយម្តងទៀតដោយផ្អែកលើលក្ខខណ្ឌ។'
    },
    {
      question: 'តើ `for` loop មានផ្នែកសំខាន់ប៉ុន្មាន?',
      options: [
        '2',
        '3',
        '4',
        '5'
      ],
      correct: 1,
      explanation: '`for` loop មាន 3 ផ្នែក: initialization, condition, និង increment/decrement។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `for ($i = 1; $i <= 3; $i++) { echo $i; }`',
      options: [
        '123',
        '111',
        '321',
        'Error'
      ],
      correct: 0,
      explanation: 'កូដនេះបង្ហាញលេខ 1, 2, 3 ដែលបញ្ចូលគ្នាជា "123"។'
    },
    {
      question: 'តើ `while` loop ខុសពី `do-while` loop ដោយរបៀបណា?',
      options: [
        '`while` ប្រតិបត្តិយ៉ាងហោចណាស់ម្តង',
        '`do-while` ប្រតិបត្តិយ៉ាងហោចណាស់ម្តង',
        '`while` ប្រើសម្រាប់ Arrays តែប៉ុណ្ណោះ',
        'គ្មានភាពខុសគ្នា'
      ],
      correct: 1,
      explanation: '`do-while` ប្រតិបត្តិកូដយ៉ាងហោចណាស់ម្តងមុនពេលពិនិត្យលក្ខខណ្ឌ។'
    },
    {
      question: 'តើ `foreach` loop ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើការគណនា',
        'ធ្វើការជាមួយ Arrays',
        'បង្កើត Functions',
        'ធ្វើការសម្រេចចិត្ត'
      ],
      correct: 1,
      explanation: '`foreach` ប្រើសម្រាប់ធ្វើការជាមួយ Arrays។'
    },
    {
      question: 'តើ `break` ធ្វើអ្វីនៅក្នុង loop?',
      options: [
        'រំលង iteration បច្ចុប្បន្ន',
        'បញ្ឈប់ loop ទាំងស្រុង',
        'បន្តទៅ iteration បន្ទាប់',
        'បន្ថែមលក្ខខណ្ឌ'
      ],
      correct: 1,
      explanation: '`break` បញ្ឈប់ loop ទាំងស្រុង។'
    },
    {
      question: 'តើ `continue` ធ្វើអ្វីនៅក្នុង loop?',
      options: [
        'បញ្ឈប់ loop ទាំងស្រុង',
        'រំលង iteration បច្ចុប្បន្ន',
        'បន្ថែម iteration ថ្មី',
        'បង្កើត Array'
      ],
      correct: 1,
      explanation: '`continue` រំលង iteration បច្ចុប្បន្ន ហើយបន្តទៅ iteration បន្ទាប់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$count = 1; while ($count <= 3) { echo $count; $count++; }`',
      options: [
        '123',
        '111',
        '321',
        'Error'
      ],
      correct: 0,
      explanation: 'កូដនេះបង្ហាញលេខ 1, 2, 3 ដែលបញ្ចូលគ្នាជា "123"។'
    },
    {
      question: 'តើកូដខាងក្រោមបង្ហាញអ្វី? `$fruits = ["apple", "banana"]; foreach ($fruits as $fruit) { echo $fruit; }`',
      options: [
        'applebanana',
        'apple, banana',
        'Error',
        'Nothing'
      ],
      correct: 0,
      explanation: '`foreach` បង្ហាញ "apple" និង "banana" ដែលបញ្ចូលគ្នាជា "applebanana"។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូดខាងក្រោម? `for ($i = 1; $i <= 5; $i++) { if ($i == 3) { continue; } echo $i; }`',
      options: [
        '12345',
        '1245',
        '123',
        'Error'
      ],
      correct: 1,
      explanation: '`continue` រំលង `$i == 3` ដូច្នេះបង្ហាញ "1245"។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `for ($i = 1; $i <= 5; $i++) { if ($i == 4) { break; } echo $i; }`',
      options: [
        '12345',
        '123',
        '1234',
        'Error'
      ],
      correct: 1,
      explanation: '`break` បញ្ឈប់ loop នៅ `$i == 4` ដូច្នេះបង្ហាញ "123"។'
    },
    {
      question: 'តើ `do-while` loop ប្រតិបត្តិកូដប៉ុន្មានដងយ៉ាងតិច?',
      options: [
        '0',
        '1',
        '2',
        '3'
      ],
      correct: 1,
      explanation: '`do-while` ប្រតិបត្តិកូដយ៉ាងហោចណាស់ម្តងមុនពេលពិនិត្យលក្ខខណ្ឌ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលប្រើ Loops ដើម្បីបង្ហាញបញ្ជីផ្លែឈើ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` នៅក្នុង \`<head>\`។
   - កំណត់ Title នៃឯកសារ៖ "PHP Loops Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "សូមស្វាគមន៍មកកាន់ PHP Loops!"។
   - បន្ថែម \`<p>\` ដែលបង្ហាញបញ្ជីផ្លែឈើពី Array ដោយប្រើ \`foreach\` loop។
   - បន្ថែម \`<p>\` ដែលបង្ហាញលេខពី 1 ដល់ 5 ដោយប្រើ \`for\` loop។

3. **PHP Functionality:**
   - ប្រកាស Array \`$fruits\` ដែលមានផ្លែឈើយ៉ាងហោចណាស់ 3 ឈ្មោះ។
   - ប្រើ \`foreach\` loop ដើម្បីបង្ហាញផ្លែឈើនីមួយៗ។
   - ប្រើ \`for\` loop ដើម្បីបង្ហាញលេខពី 1 ដល់ 5។
   - ប្រើ \`continue\` ដើម្បីរំលងលេខ 3 ក្នុង \`for\` loop។

4. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`background-color: #f8f9fa;\` សម្រាប់ \`body\`។
     - កំណត់ \`color: #007bff;\` សម្រាប់ \`h1\`។

**ការណែនាំ:** រក្សាទុកឯកសារជា .php និងដំណើរការតាមរយៈ localhost។
    `,
    solution: `
\`\`\`php
<?php
$fruits = ["apple", "banana", "orange"];
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Loops Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ PHP Loops!</h1>
  <p>បញ្ជីផ្លែឈើ:</p>
  <?php
    foreach ($fruits as $fruit) {
        echo "<p>$fruit</p>";
    }
  ?>
  <p>លេខ:</p>
  <?php
    for ($i = 1; $i <= 5; $i++) {
        if ($i == 3) {
            continue;
        }
        echo "<p>$i</p>";
    }
  ?>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson2_2Content;