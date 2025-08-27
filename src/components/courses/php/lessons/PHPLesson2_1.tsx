import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson2_1Content: LessonContent = {
  title: 'Conditional Statements ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី Conditional Statements នៅក្នុង PHP',
    'ស្វែងយល់ពីការប្រើ `if`, `else`, និង `elseif` សម្រាប់ធ្វើការសម្រេចចិត្ត',
    'ស្គាល់ការប្រើ `switch` statement សម្រាប់ករណីជាច្រើន',
    'អនុវត្ត Conditional Statements ក្នុងកម្មវិធី PHP',
    'យល់ពីការប្រើ Ternary Operator ជាជម្រើសសម្រាប់ `if-else`'
  ],
  content: `
# Conditional Statements ក្នុង PHP 🌟

---

**Conditional Statements** គឺជាផ្នែកសំខាន់នៅក្នុង PHP ដែលអនុញ្ញាតឱ្យកម្មវិធីធ្វើការសម្រេចចិត្តដោយផ្អែកលើលក្ខខណ្ឌជាក់លាក់។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីរបៀបប្រើ \`if\`, \`else\`, \`elseif\`, \`switch\`, និង Ternary Operator ដើម្បីគ្រប់គ្រងលំហូរនៃកម្មវិធី។

---

## 1. ការប្រើ \`if\`, \`else\`, និង \`elseif\`

**\`if\` Statement** ប្រើសម្រាប់ពិនិត្យលក្ខខណ្ឌ។ ប្រសិនបើលក្ខខណ្ឌជា \`true\` កូដនៅក្នុង \`if\` block នឹងត្រូវបានប្រតិបត្តិ។

**ឧទាហរណ៍ \`if\`:**

\`\`\`php
<?php
$age = 20;
if ($age >= 18) {
    echo "អ្នកជាមនុស្សពេញវ័យ";
}
?>
\`\`\`

**\`else\` Statement** ប្រើនៅពេលលក្ខខណ្ឌក្នុង \`if\` មិន \`true\`។

**ឧទាហរណ៍ \`if-else\`:**

\`\`\`php
<?php
$age = 16;
if ($age >= 18) {
    echo "អ្នកជាមនុស្សពេញវ័យ";
} else {
    echo "អ្នកនៅជាអនីតិជន";
}
?>
\`\`\`

**\`elseif\` Statement** ប្រើសម្រាប់ពិនិត្យលក្ខខណ្ឌបន្ថែម។

**ឧទាហរណ៍ \`if-elseif-else\`:**

\`\`\`php
<?php
$score = 85;
if ($score >= 90) {
    echo "ថ្នាក់ A";
} elseif ($score >= 80) {
    echo "ថ្នាក់ B";
} elseif ($score >= 70) {
    echo "ថ្នាក់ C";
} else {
    echo "ថ្នាក់ D";
}
?>
\`\`\`

---

## 2. ការប្រើ \`switch\` Statement

**\`switch\` Statement** ប្រើសម្រាប់ជ្រើសរើសកូដ block ដែលត្រូវប្រតិបត្តិដោយផ្អែកលើតម្លៃនៃ variable មួយ។

**ឧទាហរណ៍ \`switch\`:**

\`\`\`php
<?php
$day = "ច័ន្ទ";
switch ($day) {
    case "ច័ន្ទ":
        echo "ថ្ងៃច័ន្ទ: ចាប់ផ្តើមសប្តាហ៍ថ្មី!";
        break;
    case "អង្គារ":
        echo "ថ្ងៃអង្គារ: បន្តការងារ!";
        break;
    default:
        echo "ថ្ងៃផ្សេងទៀត";
}
?>
\`\`\`

**ចំណាំ:** \`break\` បញ្ឈប់ការប្រតិបត្តិបន្ទាប់ពី case ត្រូវគ្នា។ \`default\` ប្រតិបត្តិប្រសិនបើគ្មាន case ណាត្រូវគ្នា។

---

## 3. Ternary Operator

**Ternary Operator** (\`?:\`) គឺជាវិធីសរសេរ \`if-else\` ខ្លីៗ។

**ឧទាហរណ៍ Ternary Operator:**

\`\`\`php
<?php
$age = 20;
$status = ($age >= 18) ? "មនុស្សពេញវ័យ" : "អនីតិជន";
echo $status; // មនុស្សពេញវ័យ
?>
\`\`\`

---

## 4. ការប្រើ Conditional Statements ក្នុងគេហទំព័រ

Conditional Statements ត្រូវបានប្រើដើម្បីបង្កើតគេហទំព័រដែលផ្លាស់ប្តូរដោយផ្អែកលើទិន្នន័យ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Conditional Statements</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    p { font-size: 18px; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Conditional Statements!</h1>
  <?php
    $score = 85;
    $grade = "";
    if ($score >= 90) {
        $grade = "A";
    } elseif ($score >= 80) {
        $grade = "B";
    } elseif ($score >= 70) {
        $grade = "C";
    } else {
        $grade = "D";
    }
  ?>
  <p>ពិន្ទុ: <?php echo $score; ?></p>
  <p>ថ្នាក់: <?php echo $grade; ?></p>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`if-else\`</h3>
<p>ពិនិត្យថាតើអ្នកប្រើជាមនុស្សពេញវ័យឬអត់។</p>
<pre><code class="language-php">
<?php
$age = 16;
if ($age >= 18) {
    echo "អ្នកជាមនុស្សពេញវ័យ";
} else {
    echo "អ្នកនៅជាអនីតិជន";
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ \`if-elseif-else\`</h3>
<p>កំណត់ថ្នាក់ដោយផ្អែកលើពិន្ទុ។</p>
<pre><code class="language-php">
<?php
$score = 75;
if ($score >= 90) {
    echo "ថ្នាក់ A";
} elseif ($score >= 80) {
    echo "ថ្នាក់ B";
} elseif ($score >= 70) {
    echo "ថ្នាក់ C";
} else {
    echo "ថ្នាក់ D";
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ \`switch\`</h3>
<p>បង្ហាញសារដោយផ្អែកលើថ្ងៃ។</p>
<pre><code class="language-php">
<?php
$day = "ច័ន្ទ";
switch ($day) {
    case "ច័ន្ទ":
        echo "ថ្ងៃច័ន្ទ: ចាប់ផ្តើមសប្តាហ៍ថ្មី!";
        break;
    case "អង្គារ":
        echo "ថ្ងៃអង្គារ: បន្តការងារ!";
        break;
    default:
        echo "ថ្ងៃផ្សេងទៀត";
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Ternary Operator</h3>
<p>ប្រើ Ternary Operator ដើម្បីកំណត់ស្ថានភាព។</p>
<pre><code class="language-php">
<?php
$age = 20;
$status = ($age >= 18) ? "មនុស្សពេញវ័យ" : "អនីតិជន";
echo $status;
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជា Conditional Statement ក្នុង PHP?',
      options: [
        'សញ្ញាសម្រាប់ធ្វើប្រតិបត្តិការគណិតវិទ្យា',
        'រចនាសម្ព័ន្ធសម្រាប់ធ្វើការសម្រេចចិត្ត',
        'វិធីសាស្ត្រសម្រាប់បង្កើត Functions',
        'បណ្តុំទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Conditional Statements ប្រើសម្រាប់ធ្វើការសម្រេចចិត្តដោយផ្អែកលើលក្ខខណ្ឌ។'
    },
    {
      question: 'តើ `else` ប្រើសម្រាប់អ្វី?',
      options: [
        'បន្ថែមលក្ខខណ្ឌថ្មី',
        'ប្រតិបត្តិកូដនៅពេលលក្ខខណ្ឌមិន `true`',
        'បញ្ឈប់កម្មវិធី',
        'បង្កើត loop'
      ],
      correct: 1,
      explanation: '`else` ប្រតិបត្តិកូដនៅពេល `if` មិន `true`។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$x = 10; if ($x > 5) { echo "Greater"; } else { echo "Smaller"; }`',
      options: [
        'Greater',
        'Smaller',
        'Error',
        'Nothing'
      ],
      correct: 0,
      explanation: 'លក្ខខណ្ឌ `$x > 5` ជា `true` ដូច្នេះបង្ហាញ "Greater"។'
    },
    {
      question: 'តើ `elseif` ប្រើនៅពេលណា?',
      options: [
        'នៅពេលមានតែមួយលក្ខខណ្ឌ',
        'នៅពេលត្រូវពិនិត្យលក្ខខណ្ឌបន្ថែម',
        'នៅពេលបញ្ឈប់កម្មវិធី',
        'នៅពេលបង្កើត array'
      ],
      correct: 1,
      explanation: '`elseif` ប្រើសម្រាប់ពិនិត្យលក្ខខណ្ឌបន្ថែមបន្ទាប់ពី `if`។'
    },
    {
      question: 'តើ `switch` statement ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើការគណនា',
        'ជ្រើសរើសកូដ block ដោយផ្អែកលើតម្លៃ',
        'បង្កើត loop',
        'បំលែងប្រភេទទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`switch` ជ្រើសរើសកូដ block ដោយផ្អែកលើតម្លៃនៃ variable។'
    },
    {
      question: 'តើ `break` ក្នុង `switch` មានតួនាទីអ្វី?',
      options: [
        'បន្តទៅ case បន្ទាប់',
        'បញ្ឈប់ការប្រតិបត្តិនៃ switch',
        'បង្កើត loop',
        'បន្ថែម case ថ្មី'
      ],
      correct: 1,
      explanation: '`break` បញ្ឈប់ការប្រតិបត្តិបន្ទាប់ពី case ត្រូវគ្នា។'
    },
    {
      question: 'តើ `default` ក្នុង `switch` ប្រើនៅពេលណា?',
      options: [
        'នៅពេលគ្មាន case ណាត្រូវគ្នា',
        'នៅពេលចាប់ផ្តើម switch',
        'នៅពេលបញ្ចប់ switch',
        'នៅពេលបន្ថែម case'
      ],
      correct: 0,
      explanation: '`default` ប្រតិបត្តិនៅពេលគ្មាន case ណាត្រូវគ្នា។'
    },
    {
      question: 'តើ Ternary Operator មានទម្រង់ដូចម្តេច?',
      options: [
        'if-else',
        '(condition) ? value1 : value2',
        'switch-case',
        'while-do'
      ],
      correct: 1,
      explanation: 'Ternary Operator មានទម្រង់ `(condition) ? value1 : value2`។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$x = 5; echo ($x > 10) ? "Yes" : "No";`',
      options: [
        'Yes',
        'No',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: 'លក្ខខណ្ឌ `$x > 10` ជា `false` ដូច្នេះបង្ហាញ "No"។'
    },
    {
      question: 'តើកូដខាងក្រោមបង្ហាញអ្វី? `$score = 95; if ($score >= 90) { echo "A"; } elseif ($score >= 80) { echo "B"; }`',
      options: [
        'A',
        'B',
        'Nothing',
        'Error'
      ],
      correct: 0,
      explanation: 'លក្ខខណ្ឌ `$score >= 90` ជា `true` ដូច្នេះបង្ហាញ "A"។'
    },
    {
      question: 'តើ `switch` អាចប្រើជាមួយប្រភេទទិន្នន័យណាខ្លះ?',
      options: [
        'String និង Integer តែប៉ុណ្ណោះ',
        'String, Integer, Float, Boolean',
        'Array និង Object តែប៉ុណ្ណោះ',
        'Boolean តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: '`switch` អាចប្រើជាមួយ String, Integer, Float, និង Boolean។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$day = "អាទិត្យ"; switch ($day) { case "ច័ន្ទ": echo "Monday"; break; default: echo "Other"; }`',
      options: [
        'Monday',
        'Other',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: 'គ្មាន case ណាត្រូវគ្នានឹង "អាទិត្យ" ទេ ដូច្នេះ `default` បង្ហាញ "Other"។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលប្រើ Conditional Statements ដើម្បីបង្ហាញសារដោយផ្អែកលើពិន្ទុ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` នៅក្នុង \`<head>\`។
   - កំណត់ Title នៃឯកសារ៖ "PHP Conditional Statements Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "សូមស្វាគមន៍មកកាន់ PHP Conditional Statements!"។
   - បន្ថែម \`<p>\` ដែលបង្ហាញឈ្មោះសិស្សដោយប្រើ Variable \`$student_name\` (String)។
   - បន្ថែម \`<p>\` ដែលបង្ហាញពិន្ទុដោយប្រើ Variable \`$score\` (Integer)។
   - បន្ថែម \`<p>\` ដែលបង្ហាញថ្នាក់ (A, B, C, D) ដោយប្រើ Conditional Statements។

3. **PHP Functionality:**
   - ប្រកាស Variables \`$student_name\` និង \`$score\`។
   - ប្រើ \`if-elseif-else\` ដើម្បីកំណត់ថ្នាក់ដោយផ្អែកលើពិន្ទុ:
     - លើសពីឬស្មើ 90: ថ្នាក់ A
     - លើសពីឬស្មើ 80: ថ្នាក់ B
     - លើសពីឬស្មើ 70: ថ្នាក់ C
     - ទាបជាង 70: ថ្នាក់ D
   - ប្រើ Ternary Operator ដើម្បីកំណត់សារថាសិស្សជាប់ឬធ្លាក់ (ជាប់ប្រសិនបើពិន្ទុ >= 50)។

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
$student_name = "សុភា";
$score = 88;
$grade = "";
if ($score >= 90) {
    $grade = "A";
} elseif ($score >= 80) {
    $grade = "B";
} elseif ($score >= 70) {
    $grade = "C";
} else {
    $grade = "D";
}
$status = ($score >= 50) ? "ជាប់" : "ធ្លាក់";
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Conditional Statements Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ PHP Conditional Statements!</h1>
  <p>ឈ្មោះសិស្ស: <?php echo $student_name; ?></p>
  <p>ពិន្ទុ: <?php echo $score; ?></p>
  <p>ថ្នាក់: <?php echo $grade; ?></p>
  <p>ស្ថានភាព: <?php echo $status; ?></p>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson2_1Content;