import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson5_2Content: LessonContent = {
  title: 'Classes និង Objects ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី Classes និង Objects នៅក្នុង PHP',
    'ស្វែងយល់ពីការបង្កើត Classes ដែលមាន Properties និង Methods',
    'ស្គាល់ការប្រើ Constructors និង Destructors',
    'អនុវត្តការបង្កើត Objects និងចូលប្រើ Properties និង Methods',
    'បង្កើតកម្មវិធី PHP ដែលប្រើ Classes និង Objects'
  ],
  content: `
# Classes និង Objects ក្នុង PHP 🛠️

---

**Classes** គឺជាគំរូសម្រាប់បង្កើត **Objects** ដែលជាការអនុវត្តនៃ Class។ នៅក្នុង PHP យើងប្រើ Classes ដើម្បីតំណាងឱ្យវត្ថុពិតប្រាកដ និងគ្រប់គ្រងទិន្នន័យ និងមុខងារ។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការបង្កើត Classes និង Objects ព្រមទាំង Constructors និង Destructors។

---

## 1. ការបង្កើត Classes និង Objects

Class ត្រូវបានប្រកាសដោយប្រើពាក្យគន្លឹះ \`class\`។ Object ត្រូវបានបង្កើតដោយប្រើ \`new\`។

**ឧទាហរណ៍ Classes និង Objects:**

\`\`\`php
<?php
class Car {
    public $color = "red";
    public function drive() {
        echo "រថយន្តកំពុងបើក!";
    }
}

$myCar = new Car();
echo $myCar->color; // បង្ហាញ: red
$myCar->drive(); // បង្ហាញ: រថយន្តកំពុងបើក!
?>
\`\`\`

---

## 2. Properties និង Methods

**Properties** គឺជាទិន្នន័យក្នុង Class។ **Methods** គឺជាមុខងារក្នុង Class។

**ឧទាហរណ៍ Properties និង Methods:**

\`\`\`php
<?php
class Person {
    public $name;
    public $age;
    
    public function introduce() {
        echo "ខ្ញុំឈ្មោះ " . $this->name . " អាយុ " . $this->age . " ឆ្នាំ";
    }
}

$person = new Person();
$person->name = "សុភា";
$person->age = 20;
$person->introduce(); // បង្ហាញ: ខ្ញុំឈ្មោះ សុភា អាយុ 20 ឆ្នាំ
?>
\`\`\`

---

## 3. Constructors និង Destructors

**Constructor (\`__construct\`)** ត្រូវបានហៅនៅពេលបង្កើត Object។ **Destructor (\`__destruct\`)** ត្រូវបានហៅនៅពេល Object ត្រូវបានបំផ្លាញ។

**ឧទាហរណ៍ Constructor:**

\`\`\`php
<?php
class Book {
    public $title;
    public function __construct($title) {
        $this->title = $title;
        echo "សៀវភៅត្រូវបានបង្កើត!";
    }
}

$book = new Book("PHP Basics"); // បង្ហាញ: សៀវភៅត្រូវបានបង្កើត!
echo $book->title; // បង្ហាញ: PHP Basics
?>
\`\`\`

**ឧទាហរណ៍ Destructor:**

\`\`\`php
<?php
class File {
    public function __destruct() {
        echo "ឯកសារត្រូវបានបិទ!";
    }
}

$file = new File(); // នៅពេលកម្មវិធីបញ្ចប់ បង្ហាញ: ឯកសារត្រូវបានបិទ!
?>
\`\`\`

---

## 4. ការប្រើ Classes និង Objects ក្នុងគេហទំព័រ

Classes និង Objects ត្រូវបានប្រើដើម្បីបង្កើតគេហទំព័រដែលស្មុគស្មាញ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Classes and Objects</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    p { font-size: 18px; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ Classes និង Objects!</h1>
  <?php
    class Calculator {
        public function add($a, $b) {
            return $a + $b;
        }
    }
    $calc = new Calculator();
    $result = $calc->add(5, 3);
  ?>
  <p>លទ្ធផលបូក: <?php echo $result; ?></p>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Class និង Object</h3>
<p>បង្កើត Class និង Object សាមញ្ញ៕</p>
<pre><code class="language-php">
<?php
class Car {
    public $color = "red";
}

$myCar = new Car();
echo $myCar->color;
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Methods ក្នុង Class</h3>
<p>បង្កើត Method ក្នុង Class៕</p>
<pre><code class="language-php">
<?php
class Greeting {
    public function sayHello() {
        echo "សួស្តី!";
    }
}

$greeting = new Greeting();
$greeting->sayHello();
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Constructor</h3>
<p>ប្រើ Constructor ដើម្បីកំណត់តម្លៃដំបូង៕</p>
<pre><code class="language-php">
<?php
class Person {
    public $name;
    public function __construct($name) {
        $this->name = $name;
    }
}

$person = new Person("សុភា");
echo $person->name;
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Destructor</h3>
<p>ប្រើ Destructor ដើម្បីសម្អាត៕</p>
<pre><code class="language-php">
<?php
class Connection {
    public function __destruct() {
        echo "ការភ្ជាប់ត្រូវបានបិទ!";
    }
}

$conn = new Connection();
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Class ក្នុង PHP គឺជាអ្វី?',
      options: [
        'Object',
        'គំរូសម្រាប់បង្កើត Object',
        'Variable',
        'Loop'
      ],
      correct: 1,
      explanation: 'Class គឺជាគំរូ (Blueprint) សម្រាប់បង្កើត Object៕'
    },
    {
      question: 'តើពាក្យគន្លឹះណាដែលប្រើដើម្បីបង្កើត Object?',
      options: [
        'class',
        'new',
        'create',
        'object'
      ],
      correct: 1,
      explanation: '`new` ប្រើដើម្បីបង្កើត Object ពី Class៕'
    },
    {
      question: 'តើ Properties ក្នុង Class គឺជាអ្វី?',
      options: [
        'មុខងារ',
        'ទិន្នន័យក្នុង Class',
        'Loop',
        'Condition'
      ],
      correct: 1,
      explanation: 'Properties គឺជាទិន្នន័យក្នុង Class៕'
    },
    {
      question: 'តើ Methods ក្នុង Class គឺជាអ្វី?',
      options: [
        'ទិន្នន័យ',
        'មុខងារក្នុង Class',
        'Object',
        'Class'
      ],
      correct: 1,
      explanation: 'Methods គឺជាមុខងារក្នុង Class៕'
    },
    {
      question: 'តើ `__construct` ក្នុង PHP គឺជាអ្វី?',
      options: [
        'Destructor',
        'Constructor',
        'Method ធម្មតា',
        'Property'
      ],
      correct: 1,
      explanation: '`__construct` គឺជា Constructor ដែលត្រូវបានហៅនៅពេលបង្កើត Object៕'
    },
    {
      question: 'តើ `__destruct` ក្នុង PHP គឺជាអ្វី?',
      options: [
        'Constructor',
        'Destructor',
        'Method ធម្មតា',
        'Property'
      ],
      correct: 1,
      explanation: '`__destruct` គឺជា Destructor ដែលត្រូវបានហៅនៅពេល Object ត្រូវបានបំផ្លាញ៕'
    },
    {
      question: 'តើ `$this` ក្នុង PHP OOP សំដៅទៅលើអ្វី?',
      options: [
        'Class មេ',
        'Object បច្ចុប្បន្ន',
        'Variable Global',
        'Function'
      ],
      correct: 1,
      explanation: '`$this` សំដៅទៅលើ Object បច្ចុប្បន្នក្នុង Class៕'
    },
    {
      question: 'តើ Constructor ត្រូវបានហៅនៅពេលណា?',
      options: [
        'នៅពេលបង្កើត Object',
        'នៅពេលលុប Object',
        'នៅពេលកែប្រែ Property',
        'នៅពេលហៅ Method'
      ],
      correct: 0,
      explanation: 'Constructor ត្រូវបានហៅនៅពេលបង្កើត Object៕'
    },
    {
      question: 'តើ Destructor ត្រូវបានហៅនៅពេលណា?',
      options: [
        'នៅពេលបង្កើត Object',
        'នៅពេលលុប Object',
        'នៅពេលកែប្រែ Property',
        'នៅពេលហៅ Method'
      ],
      correct: 1,
      explanation: 'Destructor ត្រូវបានហៅនៅពេល Object ត្រូវបានបំផ្លាញ៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `class Test { public function __construct() { echo "Construct"; } } $test = new Test();`',
      options: [
        'Construct',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'Constructor ត្រូវបានហៅនៅពេលបង្កើត Object ដូច្នេះបង្ហាញ "Construct"៕'
    },
    {
      question: 'តើ Class អាចមាន Constructor ច្រើនដែរឬទេ?',
      options: [
        'បាទ/ចាស',
        'ទេ',
        'តែពីរ',
        'តែមួយ'
      ],
      correct: 1,
      explanation: 'Class អាចមានតែមួយ Constructor ប៉ុណ្ណោះក្នុង PHP៕'
    },
    {
      question: 'តើ Object អាចចូលប្រើ Private Property ពីខាងក្រៅដែរឬទេ?',
      options: [
        'បាទ/ចាស',
        'ទេ',
        'តែនៅក្នុង Subclass',
        'តែនៅក្នុង Method'
      ],
      correct: 1,
      explanation: 'Private Property អាចចូលប្រើបានតែក្នុង Class នោះតែប៉ុណ្ណោះ៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `class Test { public $var = "Hello"; } $test = new Test(); echo $test->var;`',
      options: [
        'Hello',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'កូដនេះបង្ហាញ "Hello"៕'
    },
    {
      question: 'តើ Method ក្នុង Class ត្រូវបានហៅដោយរបៀបណា?',
      options: [
        'ដោយប្រើ `->`',
        'ដោយប្រើ `::`',
        'ដោយប្រើ `.`',
        'ដោយប្រើ `()'
      ],
      correct: 0,
      explanation: 'Method ត្រូវបានហៅដោយប្រើ `->` នៅលើ Object៕'
    },
    {
      question: 'តើ Constructor អាចមាន Parameters ដែរឬទេ?',
      options: [
        'ទេ',
        'បាទ/ចាស',
        'តែមួយ',
        'តែពីរ'
      ],
      correct: 1,
      explanation: 'Constructor អាចមាន Parameters ដើម្បីកំណត់តម្លៃដំបូង៕'
    },
    {
      question: 'តើ Destructor ត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេលណា?',
      options: [
        'នៅពេលកម្មវិធីបញ្ចប់ ឬ Object ត្រូវបានលុប',
        'នៅពេលបង្កើត Object',
        'នៅពេលកែប្រែ Property',
        'នៅពេលហៅ Method'
      ],
      correct: 0,
      explanation: 'Destructor ត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេលកម្មវិធីបញ្ចប់ ឬ Object ត្រូវបានលុប៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `class Test { public function __destruct() { echo "Destruct"; } } $test = new Test(); unset($test);`',
      options: [
        'Destruct',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'Destructor ត្រូវបានហៅនៅពេល `unset($test)` ដូច្នេះបង្ហាញ "Destruct"៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលបង្កើត Class \`Employee\` ជាមួយ Constructor ដើម្បីកំណត់ឈ្មោះ និងប្រាក់ខែ និង Method ដើម្បីបង្ហាញព័ត៌មាន។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title: "PHP Classes and Objects Lab"៕

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ Classes និង Objects!"៕
   - បង្ហាញព័ត៌មានបុគ្គលិកដោយប្រើ Object៕

3. **PHP Functionality:**
   - បង្កើត Class \`Employee\` ដែលមាន Public Properties \`$name\` និង \`$salary\`៕
   - បន្ថែម Constructor \`__construct\` ដើម្បីកំណត់ \`$name\` និង \`$salary\`៕
   - បន្ថែម Method \`displayInfo\` ដើម្បីបង្ហាញ "ឈ្មោះ: [name], ប្រាក់ខែ: [salary] ដុល្លារ"៕
   - បង្កើត Object និងកំណត់តម្លៃតាមរយៈ Constructor៕
   - បង្ហាញព័ត៌មានដោយប្រើ Method \`displayInfo\`៕

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`៕
     - \`color: #007bff;\` សម្រាប់ \`h1\`៕
     - \`font-size: 18px;\` សម្រាប់ \`p\`៕

**ការណែនាំ:** រក្សាទុកជា .php និងដំណើរការតាម localhost៕
    `,
    solution: `
\`\`\`php
<?php
class Employee {
    public $name;
    public $salary;
    
    public function __construct($name, $salary) {
        $this->name = $name;
        $this->salary = $salary;
    }
    
    public function displayInfo() {
        echo "ឈ្មោះ: " . $this->name . ", ប្រាក់ខែ: " . $this->salary . " ដុល្លារ";
    }
}

$employee = new Employee("សុភា", 1000);
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Classes and Objects Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ Classes និង Objects!</h1>
  <p><?php $employee->displayInfo(); ?></p>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson5_2Content;