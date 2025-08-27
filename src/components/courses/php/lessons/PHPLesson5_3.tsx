import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson5_3Content: LessonContent = {
  title: 'Inheritance និង Interfaces ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី Inheritance និងការប្រើវាក្នុង PHP',
    'ស្វែងយល់ពី Interfaces និងអត្ថប្រយោជន៍របស់វា',
    'ស្គាល់ការប្រើ `extends` ដើម្បីស្នងពី Class មេ',
    'អនុវត្តការបង្កើត Interfaces និង Implement វាក្នុង Classes',
    'ប្រៀបធៀប Inheritance និង Interfaces',
    'បង្កើតកម្មវិធី PHP ដែលប្រើ Inheritance និង Interfaces ដើម្បីគ្រប់គ្រងទិន្នន័យ'
  ],
  content: `
# Inheritance និង Interfaces ក្នុង PHP 🧬

---

**Inheritance** និង **Interfaces** គឺជាគោលការណ៍សំខាន់ៗនៃ OOP ដែលអនុញ្ញាតឱ្យកូដមានភាពបត់បែន និងប្រើឡើងវិញ។ **Inheritance** អនុញ្ញាតឱ្យ Class មួយស្នង Properties និង Methods ពី Class មេ។ **Interfaces** កំណត់ច្បាប់ដែល Class ត្រូវអនុវត្ត។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការប្រើ Inheritance និង Interfaces ក្នុង PHP។

---

## 1. Inheritance ក្នុង PHP

**Inheritance** អនុញ្ញាតឱ្យ Class មួយ (Child Class) ស្នង Properties និង Methods ពី Class មេ (Parent Class) ដោយប្រើពាក្យគន្លឹះ \`extends\`។

**ឧទាហរណ៍ Inheritance:**

\`\`\`php
<?php
class Animal {
    public $name;
    public function eat() {
        echo "$this->name កំពុងបរិភោគ!";
    }
}

class Dog extends Animal {
    public function bark() {
        echo "$this->name កំពុងព្រុស!";
    }
}

$dog = new Dog();
$dog->name = "Bobby";
$dog->eat(); // បង្ហាញ: Bobby កំពុងបរិភោគ!
$dog->bark(); // បង្ហាញ: Bobby កំពុងព្រុស!
?>
\`\`\`

**ការបដិសេធ Method (Overriding):**

Child Class អាចកែប្រែ Method ពី Parent Class។

\`\`\`php
<?php
class Vehicle {
    public function start() {
        echo "យានយន្តចាប់ផ្តើម!";
    }
}

class Car extends Vehicle {
    public function start() {
        echo "រថយន្តចាប់ផ្តើមដោយកូនសោ!";
    }
}

$car = new Car();
$car->start(); // បង្ហាញ: រថយន្តចាប់ផ្តើមដោយកូនសោ!
?>
\`\`\`

---

## 2. Interfaces ក្នុង PHP

**Interface** គឺជាគំរូដែលកំណត់ Methods ដែល Class ត្រូវអនុវត្ត ដោយប្រើពាក្យគន្លឹះ \`interface\` និង \`implements\`។ Interface មិនមាន Implementation ទេ។

**ឧទាហរណ៍ Interface:**

\`\`\`php
<?php
interface AnimalInterface {
    public function makeSound();
}

class Cat implements AnimalInterface {
    public function makeSound() {
        echo "ឆ្មាកំពុងស្រែក ម៉ៅ!";
    }
}

$cat = new Cat();
$cat->makeSound(); // បង្ហាញ: ឆ្មាកំពុងស្រែក ម៉ៅ!
?>
\`\`\`

**ការប្រើច្រើន Interfaces:**

Class អាច Implement ច្រើន Interfaces។

\`\`\`php
<?php
interface Flyable {
    public function fly();
}

interface Swimmable {
    public function swim();
}

class Duck implements Flyable, Swimmable {
    public function fly() {
        echo "ទាកំពុងហោះ!";
    }
    public function swim() {
        echo "ទាកំពុងហែល!";
    }
}

$duck = new Duck();
$duck->fly(); // បង្ហាញ: ទាកំពុងហោះ!
$duck->swim(); // បង្ហាញ: ទាកំពុងហែល!
?>
\`\`\`

---

## 3. ប្រៀបធៀប Inheritance និង Interfaces

| Inheritance | Interfaces |
|-------------|------------|
| ស្នង Properties និង Methods | កំណត់ Methods ដែលត្រូវអនុវត្ត |
| Class អាចស្នងពី Parent Class តែមួយ | Class អាច Implement ច្រើន Interfaces |
| ប្រើ \`extends\` | ប្រើ \`implements\` |

**ឧទាហរណ៍រួមគ្នា (Inheritance + Interface):**

\`\`\`php
<?php
interface Drivable {
    public function drive();
}

class Vehicle {
    public $brand;
    public function __construct($brand) {
        $this->brand = $brand;
    }
}

class Motorcycle extends Vehicle implements Drivable {
    public function drive() {
        echo "ម៉ូតូ $this->brand កំពុងបើក!";
    }
}

$moto = new Motorcycle("Honda");
$moto->drive(); // បង្ហាញ: ម៉ូតូ Honda កំពុងបើក!
?>
\`\`\`

---

## 4. ការប្រើ Inheritance និង Interfaces ក្នុងគេហទំព័រ

Inheritance និង Interfaces ត្រូវបានប្រើដើម្បីគ្រប់គ្រងទិន្នន័យក្នុងគេហទំព័រ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Inheritance and Interfaces</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    p { font-size: 18px; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ Inheritance និង Interfaces!</h1>
  <?php
    interface Displayable {
        public function display();
    }
    
    class Person {
        protected $name;
        public function __construct($name) {
            $this->name = $name;
        }
    }
    
    class Student extends Person implements Displayable {
        private $grade;
        public function __construct($name, $grade) {
            parent::__construct($name);
            $this->grade = $grade;
        }
        public function display() {
            return "ឈ្មោះ: $this->name, ថ្នាក់: $this->grade";
        }
    }
    
    $student = new Student("សុភា", "A");
  ?>
  <p><?php echo $student->display(); ?></p>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Inheritance</h3>
<p>ស្នង Method ពី Parent Class។</p>
<pre><code class="language-php">
<?php
class Animal {
    public function eat() {
        echo "សត្វកំពុងបរិភោគ!";
    }
}
class Dog extends Animal {
    public function bark() {
        echo "ឆ្កែកំពុងព្រុស!";
    }
}

$dog = new Dog();
$dog->eat();
$dog->bark();
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Method Overriding</h3>
<p>កែប្រែ Method ពី Parent Class។</p>
<pre><code class="language-php">
<?php
class Vehicle {
    public function start() {
        echo "យានយន្តចាប់ផ្តើម!";
    }
}
class Car extends Vehicle {
    public function start() {
        echo "រថយន្តចាប់ផ្តើម!";
    }
}

$car = new Car();
$car->start();
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Interface</h3>
<p>បង្កើត Interface និង Implement វា។</p>
<pre><code class="language-php">
<?php
interface AnimalInterface {
    public function makeSound();
}
class Cat implements AnimalInterface {
    public function makeSound() {
        echo "ឆ្មាកំពុងស្រែក ម៉ៅ!";
    }
}

$cat = new Cat();
$cat->makeSound();
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ច្រើន Interfaces</h3>
<p>Class មួយ Implement ច្រើន Interfaces។</p>
<pre><code class="language-php">
<?php
interface Flyable {
    public function fly();
}
interface Swimmable {
    public function swim();
}
class Duck implements Flyable, Swimmable {
    public function fly() {
        echo "ទាកំពុងហោះ!";
    }
    public function swim() {
        echo "ទាកំពុងហែល!";
    }
}

$duck = new Duck();
$duck->fly();
$duck->swim();
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Inheritance ក្នុង PHP គឺជាអ្វី?',
      options: [
        'ការកំណត់ Methods ដែល Class ត្រូវអនុវត្ត',
        'ការស្នង Properties និង Methods ពី Parent Class',
        'ការលាក់ទិន្នន័យ',
        'ការធ្វើ Method ដូចគ្នាខុសគ្នា'
      ],
      correct: 1,
      explanation: 'Inheritance អនុញ្ញាតឱ្យ Class មួយស្នង Properties និង Methods ពី Parent Class។'
    },
    {
      question: 'តើពាក្យគន្លឹះណាដែលប្រើសម្រាប់ Inheritance?',
      options: [
        'implements',
        'extends',
        'interface',
        'class'
      ],
      correct: 1,
      explanation: '`extends` ប្រើសម្រាប់ស្នងពី Parent Class។'
    },
    {
      question: 'តើ Interface ក្នុង PHP គឺជាអ្វី?',
      options: [
        'Class ដែលមាន Properties',
        'គំរូដែលកំណត់ Methods ដែល Class ត្រូវអនុវត្ត',
        'Object',
        'Method'
      ],
      correct: 1,
      explanation: 'Interface កំណត់ Methods ដែល Class ត្រូវអនុវត្ត។'
    },
    {
      question: 'តើពាក្យគន្លឹះណាដែលប្រើសម្រាប់ Interface?',
      options: [
        'extends',
        'implements',
        'class',
        'new'
      ],
      correct: 1,
      explanation: '`implements` ប្រើដើម្បីអនុវត្ត Interface ក្នុង Class។'
    },
    {
      question: 'តើ Class អាចស្នងពី Parent Class បានប៉ុន្មាន?',
      options: [
        'ច្រើន',
        'តែមួយ',
        'តែពីរ',
        'គ្មាន'
      ],
      correct: 1,
      explanation: 'PHP អនុញ្ញាតឱ្យ Class ស្នងពី Parent Class តែមួយប៉ុណ្ណោះ (Single Inheritance)។'
    },
    {
      question: 'តើ Class អាច Implement ច្រើន Interfaces បានដែរឬទេ?',
      options: [
        'ទេ',
        'បាទ/ចាស',
        'តែមួយ',
        'តែពីរ'
      ],
      correct: 1,
      explanation: 'Class អាច Implement ច្រើន Interfaces ក្នុង PHP។'
    },
    {
      question: 'តើ `parent::` ក្នុង PHP ប្រើសម្រាប់អ្វី?',
      options: [
        'ហៅ Method ពី Interface',
        'ហៅ Method ពី Parent Class',
        'បង្កើត Object',
        'កំណត់ Property'
      ],
      correct: 1,
      explanation: '`parent::` ប្រើដើម្បីហៅ Method ឬ Constructor ពី Parent Class។'
    },
    {
      question: 'តើ Method Overriding គឺជាអ្វី?',
      options: [
        'ការបង្កើត Method ថ្មី',
        'ការកែប្រែ Method ពី Parent Class',
        'ការលាក់ Method',
        'ការប្រើ Interface'
      ],
      correct: 1,
      explanation: 'Method Overriding គឺជាការកែប្រែ Method ពី Parent Class ក្នុង Child Class។'
    },
    {
      question: 'តើ Interface អាចមាន Properties ដែរឬទេ?',
      options: [
        'បាទ/ចាស',
        'ទេ',
        'តែ Public Properties',
        'តែ Private Properties'
      ],
      correct: 1,
      explanation: 'Interface មិនអាចមាន Properties ទេ មានតែ Methods ដែលត្រូវកំណត់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `class A { public function test() { echo "A"; } } class B extends A { public function test() { echo "B"; } } $b = new B(); $b->test();`',
      options: [
        'A',
        'B',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: 'Method Overriding ធ្វើឱ្យ Class B បង្ហាញ "B"។'
    },
    {
      question: 'តើ Interface អាចមាន Implementation នៃ Methods ដែរឬទេ?',
      options: [
        'បាទ/ចាស',
        'ទេ',
        'តែនៅក្នុង Class',
        'តែនៅក្នុង Subclass'
      ],
      correct: 1,
      explanation: 'Interface មិនអាចមាន Implementation នៃ Methods ទេ មានតែការកំណត់ Method។'
    },
    {
      question: 'តើ `implements` និង `extends` ខុសគ្នាដោយរបៀបណា?',
      options: [
        '`implements` សម្រាប់ Inheritance, `extends` សម្រាប់ Interface',
        '`extends` សម្រាប់ Inheritance, `implements` សម្រាប់ Interface',
        'ទាំងពីរសម្រាប់ Inheritance',
        'ទាំងពីរសម្រាប់ Interface'
      ],
      correct: 1,
      explanation: '`extends` ប្រើសម្រាប់ Inheritance, `implements` ប្រើសម្រាប់ Interface។'
    },
    {
      question: 'តើ Class ដែល Implement Interface ត្រូវធ្វើអ្វី?',
      options: [
        'មាន Properties ដូច Interface',
        'អនុវត្តគ្រប់ Methods ដែលកំណត់ក្នុង Interface',
        'ស្នងពី Interface',
        'បង្កើត Object'
      ],
      correct: 1,
      explanation: 'Class ដែល Implement Interface ត្រូវអនុវត្តគ្រប់ Methods ដែលកំណត់ក្នុង Interface។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `interface Test { public function show(); } class MyClass implements Test { public function show() { echo "Hello"; } } $obj = new MyClass(); $obj->show();`',
      options: [
        'Hello',
        'Error',
        'Nothing',
        'Test'
      ],
      correct: 0,
      explanation: 'Class MyClass Implement Interface Test និងបង្ហាញ "Hello"។'
    },
    {
      question: 'តើ Inheritance ជួយធ្វើឱ្យកូដមានភាពអ្វី?',
      options: [
        'ស្មុគស្មាញជាង',
        'ប្រើឡើងវិញបាន',
        'តូចជាង',
        'លឿនជាង'
      ],
      correct: 1,
      explanation: 'Inheritance ជួយធ្វើឱ្យកូដប្រើឡើងវិញបានតាមរយៈការស្នង។'
    },
    {
      question: 'តើ Interface ជួយធ្វើឱ្យកូដមានភាពអ្វី?',
      options: [
        'ស្មុគស្មាញជាង',
        'បត់បែន និងមានច្បាប់ច្បាស់លាស់',
        'តូចជាង',
        'លឿនជាង'
      ],
      correct: 1,
      explanation: 'Interface ជួយធ្វើឱ្យកូដបត់បែន និងមានច្បាប់ច្បាស់លាស់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `class A { protected $var = "Test"; } class B extends A { public function getVar() { return $this->var; } } $b = new B(); echo $b->getVar();`',
      options: [
        'Test',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'Class B ស្នង `$var` ពី Class A និងបង្ហាញ "Test"។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលប្រើ Inheritance និង Interface ដើម្បីគ្រប់គ្រងព័ត៌មាននិស្សិត។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP Inheritance and Interfaces Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ Inheritance និង Interfaces!"។
   - បង្ហាញព័ត៌មាននិស្សិតដោយប្រើ Object។

3. **PHP Functionality:**
   - បង្កើត Interface \`Displayable\` ដែលមាន Method \`display()\`។
   - បង្កើត Class \`Person\` ដែលមាន Protected Property \`$name\` និង Constructor ដើម្បីកំណត់ \`$name\`។
   - បង្កើត Class \`Student\` ដែលស្នងពី \`Person\` និង Implement \`Displayable\`។
   - ក្នុង \`Student\`, បន្ថែម Private Property \`$studentId\` និង Constructor ដើម្បីកំណត់ \`$name\` (ប្រើ \`parent::__construct\`) និង \`$studentId\`។
   - អនុវត្ត Method \`display\` ដើម្បីបង្ហាញ "ឈ្មោះ: [name], លេខសម្គាល់និស្សិត: [studentId]"។
   - បង្កើត Object នៃ \`Student\` និងហៅ Method \`display\`។

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`៕
     - \`color: #007bff;\` សម្រាប់ \`h1\`៕
     - \`font-size: 18px;\` សម្រាប់ \`p\`៕

**ការណែនាំ:**
- រក្សាទុកជា .php និងដំណើរការតាម localhost (ឧ. XAMPP)៕
- ត្រូវប្រាកដថាកូដត្រូវបានសាកល្បង និងបង្ហាញលទ្ធផលត្រឹមត្រូវ៕
`,
    solution: `
\`\`\`php
<?php
interface Displayable {
    public function display();
}

class Person {
    protected $name;
    public function __construct($name) {
        $this->name = $name;
    }
}

class Student extends Person implements Displayable {
    private $studentId;
    public function __construct($name, $studentId) {
        parent::__construct($name);
        $this->studentId = $studentId;
    }
    public function display() {
        echo "ឈ្មោះ: $this->name, លេខសម្គាល់និស្សិត: $this->studentId";
    }
}

$student = new Student("សុភា", "ST123");
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Inheritance and Interfaces Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ Inheritance និង Interfaces!</h1>
  <p><?php $student->display(); ?></p>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson5_3Content;