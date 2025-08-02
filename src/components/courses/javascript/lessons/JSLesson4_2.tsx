import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson4_2Content: LessonContent = {
  title: 'Classes',
  objectives: [
    'យល់ដឹងអំពី Classes នៅក្នុង JavaScript',
    'រៀនបង្កើត Classes និង Objects',
    'ស្វែងយល់អំពី Constructor, Methods, និង Properties',
    'អនុវត្តន៍ Inheritance និង Super Keyword',
    'រៀនប្រើ Getters និង Setters'
  ],
  content: `
# Classes 🏫

---

**Classes** គឺជា Template សម្រាប់បង្កើត Objects នៅក្នុង JavaScript ដែលផ្តល់នូវ Syntax សម្រាប់ Object-Oriented Programming (OOP)។

---

## 1. ការបង្កើត Class
ប្រើ Keyword \`class\` ដើម្បីបង្កើត Class។

\`\`\`javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return \`សួស្តី, \${this.name}!\`;
  }
}
let person = new Person("សុខា", 25);
console.log(person.greet()); // សួស្តី, សុខា!
\`\`\`

---

## 2. Getters និង Setters
Getters និង Setters អនុញ្ញាតឱ្យគ្រប់គ្រងការចូលប្រើ Properties។

\`\`\`javascript
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}
let person = new Person("សុខា");
console.log(person.name); // សុខា
person.name = "លីណា";
console.log(person.name); // លីណា
\`\`\`

---

## 3. Inheritance
ប្រើ Keyword \`extends\` និង \`super\` ដើម្បីផ្ទេរមរតក (Inheritance)។

\`\`\`javascript
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  study() {
    return \`\${this.name} កំពុងសិក្សា \${this.major}\`;
  }
}
let student = new Student("វិរៈ", 20, "Computer Science");
console.log(student.greet()); // សួស្តី, វិរៈ!
console.log(student.study()); // វិរៈ កំពុងសិក្សា Computer Science
\`\`\`

---

## 4. Static Methods
Static Methods ត្រូវបានហៅនៅលើ Class ផ្ទាល់ មិនមែន Instance។

\`\`\`javascript
class MathUtils {
  static square(num) {
    return num * num;
  }
}
console.log(MathUtils.square(5)); // 25
\`\`\`

---

## 5. ការប្រើ Classes ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Classes</title>
</head>
<body>
  <h1>សាកល្បង Classes</h1>
  <p id="output"></p>
  <script>
    class Student {
      constructor(name, grade) {
        this._name = name;
        this._grade = grade;
      }
      get info() {
        return \`\${this._name}: \${this._grade}\`;
      }
    }
    const student = new Student("សុខា", "A");
    document.getElementById("output").innerText = student.info;
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** សុខា: A
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Class និង Constructor</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  class Car {
    constructor(brand) {
      this.brand = brand;
    }
    drive() {
      return \`\${this.brand} កំពុងបើក\`;
    }
  }
  let car = new Car("Toyota");
  console.log(car.drive()); // Toyota កំពុងបើក
</script>
<pre><code class="language-javascript">
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    return \`\${this.brand} កំពុងបើក\`;
  }
}
let car = new Car("Toyota");
console.log(car.drive());
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Inheritance</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      return \`\${this.name} បញ្ចេញសំឡេង\`;
    }
  }
  class Dog extends Animal {
    speak() {
      return \`\${this.name} ព្រុស\`;
    }
  }
  let dog = new Dog("សត្វឆ្កែ");
  console.log(dog.speak()); // សត្វឆ្កែ ព្រុស
</script>
<pre><code class="language-javascript">
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} បញ្ចេញសំឡេង\`;
  }
}
class Dog extends Animal {
  speak() {
    return \`\${this.name} ព្រុស\`;
  }
}
let dog = new Dog("សត្វឆ្កែ");
console.log(dog.speak());
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Class នៅក្នុង JavaScript គឺជាអ្វី?',
      options: [
        'Function សម្រាប់គណនា',
        'Template សម្រាប់បង្កើត Objects',
        'Array ដែលផ្ទុកទិន្នន័យ',
        'String ដែលមាន Properties'
      ],
      correct: 1,
      explanation: 'Class គឺជា Template សម្រាប់បង្កើត Objects នៅក្នុង OOP។'
    },
    {
      question: 'តើ Keyword ណាមួយប្រើសម្រាប់បង្កើត Class?',
      options: ['function', 'class', 'object', 'new'],
      correct: 1,
      explanation: 'Keyword `class` ប្រើសម្រាប់បង្កើត Class។'
    },
    {
      question: 'តើ Constructor ធ្វើអ្វី?',
      options: [
        'បង្កើត Method',
        'កំណត់ Initial Properties សម្រាប់ Object',
        'លុប Object',
        'បញ្ចូល Classes'
      ],
      correct: 1,
      explanation: 'Constructor កំណត់ Initial Properties នៅពេលបង្កើត Object។'
    },
    {
      question: 'តើកូដ `class Person { constructor(name) { this.name = name; } } let p = new Person("សុខា"); console.log(p.name);` នឹងបង្ហាញអ្វី?',
      options: ['សុខា', 'undefined', 'null', 'Error'],
      correct: 0,
      explanation: 'Constructor ផ្ទុក "សុខា" ទៅ Property `name`។'
    },
    {
      question: 'តើ Getters និង Setters ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Class',
        'គ្រប់គ្រងការចូលប្រើ Properties',
        'បំលែង Objects',
        'លុប Methods'
      ],
      correct: 1,
      explanation: 'Getters និង Setters គ្រប់គ្រងការចូលប្រើ និងកែប្រែ Properties។'
    },
    {
      question: 'តើ Keyword `extends` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Constructor',
        'បន្តពូជ (Inheritance)',
        'បង្កើត Static Method',
        'ចម្លង Object'
      ],
      correct: 1,
      explanation: '`extends` ប្រើសម្រាប់ Inheritance ដើម្បីបន្ត Properties និង Methods។'
    },
    {
      question: 'តើ `super` Keyword ធ្វើអ្វី?',
      options: [
        'ហៅ Constructor ឬ Methods របស់ Parent Class',
        'បង្កើត Object ថ្មី',
        'លុប Properties',
        'បំលែង Class'
      ],
      correct: 0,
      explanation: '`super` ហៅ Constructor ឬ Methods របស់ Parent Class។'
    },
    {
      question: 'តើ Static Method ត្រូវបានហៅនៅលើអ្វី?',
      options: ['Instance', 'Class', 'Object', 'Function'],
      correct: 1,
      explanation: 'Static Methods ត្រូវបានហៅនៅលើ Class ផ្ទាល់។'
    },
    {
      question: 'តើកូដ `class Math { static square(num) { return num * num; } } console.log(Math.square(4));` នឹងបង្ហាញអ្វី?',
      options: ['16', 'undefined', 'Error', '4'],
      correct: 0,
      explanation: 'Static Method `square` គណនា 4 * 4 = 16។'
    },
    {
      question: 'តើកូដ `class Person { get name() { return "សុខា"; } } let p = new Person(); console.log(p.name);` នឹងបង្ហាញអ្វី?',
      options: ['សុខា', 'undefined', 'null', 'Error'],
      correct: 0,
      explanation: 'Getter `name` បញ្ជូន "សុខា"។'
    },
    {
      question: 'តើ Class អាចបន្តពូជពី Class ច្រើនជាងមួយបានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង ES6', 'បានតែក្នុង Module'],
      correct: 1,
      explanation: 'JavaScript មិនគាំទ្រ Multiple Inheritance។'
    },
    {
      question: 'តើកូដ `class Dog extends Animal { constructor(name) { super(name); } }` ធ្វើអ្វី?',
      options: [
        'ហៅ Constructor របស់ Animal',
        'បង្កើត Method ថ្មី',
        'លុប Constructor',
        'ចម្លង Object'
      ],
      correct: 0,
      explanation: '`super(name)` ហៅ Constructor របស់ Parent Class (Animal)។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Classes ដើម្បីបង្ហាញព័ត៌មាននិស្សិត។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Student Profile"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "ប្រវត្តិនិស្សិត"។
   - បន្ថែម \`<p id="profile">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Class \`Student\` ដែលមាន:
     - Constructor ដែលទទួល \`name\` និង \`grade\`។
     - Getter \`info\` ដែល Return String (ឧ. "សុខា: A")។
   - បង្កើត Instance នៃ \`Student\` ជាមួយ \`name: "សុខា", grade: "A"\`។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="profile">\` ដោយប្រើ Getter \`info\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`<p>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Profile</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>ប្រវត្តិនិស្សិត</h1>
  <p id="profile"></p>
  <script>
    class Student {
      constructor(name, grade) {
        this._name = name;
        this._grade = grade;
      }
      get info() {
        return \`\${this._name}: \${this._grade}\`;
      }
    }
    const student = new Student("សុខា", "A");
    document.getElementById("profile").innerText = student.info;
  </script>
</body>
</html>
`
  }
};

export default JSLesson4_2Content;