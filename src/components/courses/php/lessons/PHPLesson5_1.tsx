import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson5_1Content: LessonContent = {
  title: 'មូលដ្ឋាន OOP ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី OOP (Object-Oriented Programming) និងអត្ថប្រយោជន៍របស់វា',
    'ស្វែងយល់ពីគោលការណ៍សំខាន់ៗនៃ OOP ដូចជា Encapsulation, Inheritance, Polymorphism, និង Abstraction',
    'ស្គាល់ការប្រើ OOP ដើម្បីធ្វើឱ្យកូដមានភាពស្និទ្ធស្នាល និងងាយស្រួលថែទាំ',
    'អនុវត្តគោលការណ៍ OOP ក្នុងកម្មវិធី PHP',
    'ប្រៀបធៀប OOP ជាមួយ Procedural Programming'
  ],
  content: `
# មូលដ្ឋាន OOP ក្នុង PHP 🏗️

---

**Object-Oriented Programming (OOP)** គឺជាវិធីសាស្ត្រសរសេរកម្មវិធីដែលផ្តោតលើ Objects និង Classes ដើម្បីធ្វើឱ្យកូដមានភាពស្និទ្ធស្នាល ងាយស្រួលថែទាំ និងប្រើឡើងវិញ។ នៅក្នុង PHP យើងអាចប្រើ OOP ដើម្បីបង្កើតកម្មវិធីដែលស្មុគស្មាញ។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីគោលការណ៍សំខាន់ៗនៃ OOP និងអត្ថប្រយោជន៍របស់វា។

---

## 1. អ្វីទៅជា OOP?

OOP គឺជាវិធីសាស្ត្រសរសេរកម្មវិធីដែលប្រើ **Classes** និង **Objects** ជាមូលដ្ឋាន។ Class គឺជាគំរូ (Blueprint) សម្រាប់បង្កើត Object ដែលមាន Properties (ទិន្នន័យ) និង Methods (មុខងារ)។

**ឧទាហរណ៍ OOP:**

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

## 2. គោលការណ៍សំខាន់ៗនៃ OOP

### 2.1 Encapsulation

**Encapsulation** គឺជាការរុំទិន្នន័យ និងមុខងារជាមួយគ្នាក្នុង Class និងកំណត់ការចូលប្រើដោយប្រើ Access Modifiers (public, private, protected)។

**ឧទាហរណ៍ Encapsulation:**

\`\`\`php
<?php
class Person {
    private $name;
    public function setName($name) {
        $this->name = $name;
    }
    public function getName() {
        return $this->name;
    }
}

$person = new Person();
$person->setName("សុភា");
echo $person->getName(); // បង្ហាញ: សុភា
?>
\`\`\`

### 2.2 Inheritance

**Inheritance** អនុញ្ញាតឱ្យ Class មួយស្នងមុខងារ និងទិន្នន័យពី Class ផ្សេង។

**ឧទាហរណ៍ Inheritance:**

\`\`\`php
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
$dog->eat(); // បង្ហាញ: សត្វកំពុងបរិភោគ!
$dog->bark(); // បង្ហាញ: ឆ្កែកំពុងព្រុស!
?>
\`\`\`

### 2.3 Polymorphism

**Polymorphism** អនុញ្ញាតឱ្យ Methods មានឈ្មោះដូចគ្នា ប៉ុន្តែធ្វើការខុសគ្នាក្នុង Class ផ្សេងៗ។

**ឧទាហរណ៍ Polymorphism:**

\`\`\`php
<?php
class Shape {
    public function draw() {
        echo "គូររូបធរណីមាត្រ";
    }
}
class Circle extends Shape {
    public function draw() {
        echo "គូររង្វង់";
    }
}
class Square extends Shape {
    public function draw() {
        echo "គូរការ៉េ";
    }
}

$circle = new Circle();
$circle->draw(); // បង្ហាញ: គូររង្វង់
$square = new Square();
$square->draw(); // បង្ហាញ: គូរការ៉េ
?>
\`\`\`

### 2.4 Abstraction

**Abstraction** គឺជាការលាក់ព័ត៌មានលម្អិត និងបង្ហាញតែមុខងារសំខាន់។ ប្រើ Abstract Class ឬ Interface។

**ឧទាហរណ៍ Abstract Class:**

\`\`\`php
<?php
abstract class Vehicle {
    abstract public function start();
}
class Car extends Vehicle {
    public function start() {
        echo "រថយន្តចាប់ផ្តើម!";
    }
}

$car = new Car();
$car->start(); // បង្ហាញ: រថយន្តចាប់ផ្តើម!
?>
\`\`\`

---

## 3. អត្ថប្រយោជន៍នៃ OOP

- **Reusability**: ប្រើកូដឡើងវិញតាមរយៈ Inheritance និង Polymorphism។
- **Maintainability**: កូដមានភាពស្និទ្ធស្នាលដោយ Encapsulation និង Abstraction។
- **Scalability**: ងាយស្រួលពង្រីកកម្មវិធី។
- **Real-World Modeling**: តំណាងឱ្យវត្ថុពិតប្រាកដក្នុងពិភពលោក។

**ប្រៀបធៀប OOP ជាមួយ Procedural:**

| OOP | Procedural |
| --- | --- |
| ផ្តោតលើ Objects | ផ្តោតលើ Functions |
| មាន Inheritance | គ្មាន Inheritance |
| មាន Encapsulation | គ្មាន Encapsulation |
| ស័ក្តិសមសម្រាប់កម្មវិធីធំ | ស័ក្តិសមសម្រាប់កម្មវិធីតូច |

---

## 4. ការប្រើ OOP ក្នុងគេហទំព័រ

OOP ត្រូវបានប្រើដើម្បីបង្កើតគេហទំព័រដែលស្មុគស្មាញ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP OOP Fundamentals</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    p { font-size: 18px; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ OOP Fundamentals!</h1>
  <?php
    class Greeting {
        public function sayHello($name) {
            return "សួស្តី, $name!";
        }
    }
    $greeting = new Greeting();
  ?>
  <p><?php echo $greeting->sayHello("សុភា"); ?></p>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ គោលការណ៍ Encapsulation</h3>
<p>បង្កើត Class ដែលលាក់ទិន្នន័យ។</p>
<pre><code class="language-php">
<?php
class Person {
    private $name;
    public function setName($name) {
        $this->name = $name;
    }
    public function getName() {
        return $this->name;
    }
}

$person = new Person();
$person->setName("សុភា");
echo $person->getName();
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ គោលការណ៍ Inheritance</h3>
<p>ស្នងមុខងារពី Class មេ។</p>
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
<h3>ឧទាហរណ៍៖ គោលការណ៍ Polymorphism</h3>
<p>Methods ដូចគ្នាធ្វើការខុសគ្នា។</p>
<pre><code class="language-php">
<?php
class Shape {
    public function draw() {
        echo "គូររូបធរណីមាត្រ";
    }
}
class Circle extends Shape {
    public function draw() {
        echo "គូររង្វង់";
    }
}

$circle = new Circle();
$circle->draw();
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ គោលការណ៍ Abstraction</h3>
<p>ប្រើ Abstract Class។</p>
<pre><code class="language-php">
<?php
abstract class Vehicle {
    abstract public function start();
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
`
  ],
  quiz: [
    {
      question: 'តើ OOP គឺជាអ្វី?',
      options: [
        'វិធីសាស្ត្រសរសេរកម្មវិធីដែលផ្តោតលើ Functions',
        'វិធីសាស្ត្រសរសេរកម្មវិធីដែលផ្តោតលើ Objects និង Classes',
        'ប្រភេទទិន្នន័យមួយ',
        'បណ្តុំនៃ Array'
      ],
      correct: 1,
      explanation: 'OOP គឺជាវិធីសាស្ត្រសរសេរកម្មវិធីដែលផ្តោតលើ Objects និង Classes។'
    },
    {
      question: 'តើ Class គឺជាអ្វី?',
      options: [
        'Object ដែលបានបង្កើត',
        'គំរូសម្រាប់បង្កើត Object',
        'មុខងារ',
        'Variable'
      ],
      correct: 1,
      explanation: 'Class គឺជាគំរូ (Blueprint) សម្រាប់បង្កើត Object៕'
    },
    {
      question: 'តើ Object គឺជាអ្វី?',
      options: [
        'គំរូសម្រាប់ Class',
        'ការអនុវត្តនៃ Class',
        'ប្រភេទទិន្នន័យ',
        'Loop'
      ],
      correct: 1,
      explanation: 'Object គឺជាការអនុវត្តនៃ Class ដែលមាន Properties និង Methods។'
    },
    {
      question: 'តើ Encapsulation គឺជាអ្វី?',
      options: [
        'ការស្នងមុខងារ',
        'ការរុំទិន្នន័យ និងមុខងារជាមួយគ្នា',
        'ការធ្វើមុខងារដូចគ្នាខុសគ្នា',
        'ការលាក់ព័ត៌មានលម្អិត'
      ],
      correct: 1,
      explanation: 'Encapsulation គឺជាការរុំទិន្នន័យ និងមុខងារជាមួយគ្នាក្នុង Class៕'
    },
    {
      question: 'តើ Inheritance គឺជាអ្វី?',
      options: [
        'ការរុំទិន្នន័យ',
        'ការស្នងមុខងារ និងទិន្នន័យពី Class មេ',
        'ការធ្វើមុខងារដូចគ្នាខុសគ្នា',
        'ការលាក់ព័ត៌មានលម្អិត'
      ],
      correct: 1,
      explanation: 'Inheritance អនុញ្ញាតឱ្យ Class មួយស្នងមុខងារ និងទិន្នន័យពី Class មេ៕'
    },
    {
      question: 'តើ Polymorphism គឺជាអ្វី?',
      options: [
        'ការរុំទិន្នន័យ',
        'ការស្នងមុខងារ',
        'ការធ្វើមុខងារដូចគ្នាខុសគ្នា',
        'ការលាក់ព័ត៌មានលម្អិត'
      ],
      correct: 2,
      explanation: 'Polymorphism អនុញ្ញាតឱ្យ Methods មានឈ្មោះដូចគ្នា ប៉ុន្តែធ្វើការខុសគ្នា៕'
    },
    {
      question: 'តើ Abstraction គឺជាអ្វី?',
      options: [
        'ការរុំទិន្នន័យ',
        'ការស្នងមុខងារ',
        'ការធ្វើមុខងារដូចគ្នាខុសគ្នា',
        'ការលាក់ព័ត៌មានលម្អិត និងបង្ហាញតែមុខងារសំខាន់'
      ],
      correct: 3,
      explanation: 'Abstraction គឺជាការលាក់ព័ត៌មានលម្អិត និងបង្ហាញតែមុខងារសំខាន់៕'
    },
    {
      question: 'តើ Access Modifier ណាដែលប្រើដើម្បីលាក់ទិន្នន័យក្នុង Class?',
      options: [
        'public',
        'private',
        'protected',
        'abstract'
      ],
      correct: 1,
      explanation: '`private` លាក់ទិន្នន័យ និងមុខងារ ដើម្បីចូលប្រើបានតែក្នុង Class នោះ៕'
    },
    {
      question: 'តើ `extends` ក្នុង PHP ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Class',
        'ស្នងពី Class មេ',
        'លុប Class',
        'បង្កើត Object'
      ],
      correct: 1,
      explanation: '`extends` ប្រើសម្រាប់ស្នងពី Class មេក្នុង Inheritance៕'
    },
    {
      question: 'តើ `abstract` Class មានលក្ខណៈដូចម្តេច?',
      options: [
        'អាចបង្កើត Object ដោយផ្ទាល់',
        'មិនអាចបង្កើត Object ដោយផ្ទាល់ តែត្រូវស្នងសិន',
        'មានតែ Methods',
        'មានតែ Properties'
      ],
      correct: 1,
      explanation: '`abstract` Class មិនអាចបង្កើត Object ដោយផ្ទាល់ តែត្រូវស្នងសិន៕'
    },
    {
      question: 'តើ `this` ក្នុង PHP OOP សំដៅទៅលើអ្វី?',
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
      question: 'តើអត្ថប្រយោជន៍សំខាន់នៃ OOP គឺជាអ្វី?',
      options: [
        'កូដងាយស្រួលថែទាំ និងប្រើឡើងវិញ',
        'កូដលឿនជាង Procedural',
        'កូដតូចជាង',
        'មិនមានអត្ថប្រយោជន៍'
      ],
      correct: 0,
      explanation: 'OOP ធ្វើឱ្យកូដងាយស្រួលថែទាំ និងប្រើឡើងវិញតាមរយៈ Classes និង Objects៕'
    },
    {
      question: 'តើ Procedural Programming ខុសពី OOP ដោយរបៀបណា?',
      options: [
        'ផ្តោតលើ Objects',
        'ផ្តោតលើ Functions និងកូដលំដាប់',
        'ប្រើ Classes',
        'មាន Inheritance'
      ],
      correct: 1,
      explanation: 'Procedural Programming ផ្តោតលើ Functions និងកូដលំដាប់ មិនមែន Objects៕'
    },
    {
      question: 'តើ `public` Access Modifier អនុញ្ញាតឱ្យចូលប្រើពីណា?',
      options: [
        'តែក្នុង Class',
        'ក្នុង Class និងពីខាងក្រៅ',
        'តែក្នុង Class និង Subclasses',
        'គ្មានកន្លែងណា'
      ],
      correct: 1,
      explanation: '`public` អនុញ្ញាតឱ្យចូលប្រើពីគ្រប់ទីកន្លែង៕'
    },
    {
      question: 'តើ `protected` Access Modifier អនុញ្ញាតឱ្យចូលប្រើពីណា?',
      options: [
        'តែក្នុង Class',
        'ក្នុង Class និងពីខាងក្រៅ',
        'ក្នុង Class និង Subclasses',
        'គ្មានកន្លែងណា'
      ],
      correct: 2,
      explanation: '`protected` អនុញ្ញាតឱ្យចូលប្រើក្នុង Class និង Subclasses៕'
    },
    {
      question: 'តើ `private` Access Modifier អនុញ្ញាតឱ្យចូលប្រើពីណា?',
      options: [
        'តែក្នុង Class',
        'ក្នុង Class និងពីខាងក្រៅ',
        'ក្នុង Class និង Subclasses',
        'គ្រប់ទីកន្លែង'
      ],
      correct: 0,
      explanation: '`private` អនុញ្ញាតឱ្យចូលប្រើតែក្នុង Class នោះតែប៉ុណ្ណោះ៕'
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
      explanation: 'កូដនេះបង្កើត Object និងបង្ហាញ "Hello"៕'
    },
    {
      question: 'តើ OOP ជួយធ្វើឱ្យកូដមានភាពអ្វី?',
      options: [
        'តូចជាង',
        'ស្និទ្ធស្នាល និងងាយស្រួលថែទាំ',
        'លឿនជាង',
        'ស្មុគស្មាញជាង'
      ],
      correct: 1,
      explanation: 'OOP ធ្វើឱ្យកូដមានភាពស្និទ្ធស្នាល និងងាយស្រួលថែទាំ៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលបង្កើត Class សម្រាប់ការគ្រប់គ្រងព័ត៌មានសិស្ស និងបង្ហាញព័ត៌មាន។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP OOP Fundamentals Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ OOP Fundamentals!"។
   - បង្ហាញព័ត៌មានសិស្សដោយប្រើ Object។

3. **PHP Functionality:**
   - បង្កើត Class \`Student\` ដែលមាន Private Properties \`$name\` និង \`$age\`។
   - បន្ថែម Methods \`setName\`, \`setAge\`, \`getName\`, និង \`getAge\` ដើម្បីអនុវត្ត Encapsulation។
   - បង្កើត Object និងកំណត់តម្លៃ។
   - បង្ហាញព័ត៌មានសិស្សដោយប្រើ Methods។

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`។
     - \`color: #007bff;\` សម្រាប់ \`h1\`៕
     - \`font-size: 18px;\` សម្រាប់ \`p\`។

**ការណែនាំ:** រក្សាទុកជា .php និងដំណើរការតាម localhost៕
    `,
    solution: `
\`\`\`php
<?php
class Student {
    private $name;
    private $age;
    
    public function setName($name) {
        $this->name = $name;
    }
    
    public function setAge($age) {
        $this->age = $age;
    }
    
    public function getName() {
        return $this->name;
    }
    
    public function getAge() {
        return $this->age;
    }
}

$student = new Student();
$student->setName("សុភា");
$student->setAge(20);
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP OOP Fundamentals Lab</title>
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
  <h1>សូមស្វាគមន៍មកកាន់ OOP Fundamentals!</h1>
  <p>ឈ្មោះសិស្ស: <?php echo $student->getName(); ?></p>
  <p>អាយុ: <?php echo $student->getAge(); ?> ឆ្នាំ</p>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson5_1Content;