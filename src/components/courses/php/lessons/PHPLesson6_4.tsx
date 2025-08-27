import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson6_4Content: LessonContent = {
  title: 'Composer និងការគ្រប់គ្រង Dependency ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី Composer និងអត្ថប្រយោជន៍របស់វា',
    'ស្វែងយល់ពីការដំឡើង និងប្រើ Composer',
    'ស្គាល់ការបន្ថែម Dependencies នៅក្នុង composer.json',
    'អនុវត្ត Autoloading ដោយប្រើ PSR-4',
    'ប្រើបណ្ណាល័យខាងក្រៅ (ឧ. Monolog) សម្រាប់ Logging',
    'បង្កើតកម្មវិធី PHP ដែលប្រើ Composer និង Dependency'
  ],
  content: `
# Composer និងការគ្រប់គ្រង Dependency ក្នុង PHP 📦

---

**Composer** គឺជាឧបករណ៍សម្រាប់គ្រប់គ្រង **Dependencies** ក្នុង PHP។ វាអនុញ្ញាតឱ្យអ្នកដំឡើង និងប្រើបណ្ណាល័យខាងក្រៅបានយ៉ាងងាយស្រួល។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការប្រើ Composer និង Autoloading។

---

## 1. ការដំឡើង Composer

ទាញយក និងដំឡើង Composer ពី [getcomposer.org](https://getcomposer.org)។ បន្ទាប់មក បង្កើតឯកសារ \`composer.json\`។

**ឧទាហរណ៍ composer.json:**

\`\`\`json
{
    "require": {
        "monolog/monolog": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}
\`\`\`

បន្ទាប់មក ដំណើរការ:

\`\`\`bash
composer install
\`\`\`

---

## 2. ការបន្ថែម Dependency

បន្ថែម Dependency ដោយកែ \`composer.json\` ឬប្រើពាក្យបញ្ជា:

\`\`\`bash
composer require monolog/monolog
\`\`\`

**ឧទាហរណ៍ការប្រើ Monolog:**

\`\`\`php
<?php
require 'vendor/autoload.php';
use Monolog\\Logger;
use Monolog\\Handler\\StreamHandler;

$log = new Logger('my_app');
$log->pushHandler(new StreamHandler('app.log', Logger::WARNING));
$log->warning('នេះជាការព្រមាន!');
?>
\`\`\`

---

## 3. Autoloading ជាមួយ PSR-4

Composer ប្រើ **Autoloading** ដើម្បីផ្ទុក Classes ដោយស្វ័យប្រវត្តិ។ PSR-4 គឺជាស្តង់ដារសម្រាប់ Autoloading។

**ឧទាហរណ៍ Autoloading:**

**src/MyClass.php**

\`\`\`php
<?php
namespace App;

class MyClass {
    public function sayHello() {
        return "សួស្តីពី MyClass!";
    }
}
?>
\`\`\`

**index.php**

\`\`\`php
<?php
require 'vendor/autoload.php';
use App\\MyClass;

$myClass = new MyClass();
echo $myClass->sayHello();
?>
\`\`\`

---

## 4. ការប្រើ Composer ក្នុងគេហទំព័រ

បង្កើតគេហទំព័រដែលប្រើ Dependency និង Autoloading។

**ឧទាហរណ៍រួមគ្នា:**

**composer.json**

\`\`\`json
{
    "require": {
        "monolog/monolog": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}
\`\`\`

**src/Student.php**

\`\`\`php
<?php
namespace App;
use Monolog\\Logger;
use Monolog\\Handler\\StreamHandler;

class Student {
    private $logger;
    
    public function __construct() {
        $this->logger = new Logger('student');
        $this->logger->pushHandler(new StreamHandler('app.log', Logger::INFO));
    }
    
    public function addStudent($name) {
        $this->logger->info("បន្ថែមសិស្ស: $name");
        return "បានបន្ថែមសិស្ស: $name";
    }
}
?>
\`\`\`

**index.php**

\`\`\`php
<?php
require 'vendor/autoload.php';
use App\\Student;

try {
    $student = new Student();
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        if (empty($name)) {
            throw new Exception("ឈ្មោះមិនអាចទទេ!");
        }
        $message = $student->addStudent($name);
    }
} catch (Exception $e) {
    $message = "កំហុស: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Composer and Dependency Management</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    form { margin: 20px; }
    input[type="text"] { padding: 5px; margin: 5px; }
    input[type="submit"] { padding: 5px 10px; }
    p.message { color: green; }
    p.error { color: red; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ Composer និង Dependency Management!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name"><br>
    <input type="submit" value="បញ្ចូល">
  </form>
  <p class="<?php echo strpos($message, 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($message); ?>
  </p>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ដំឡើង Dependency</h3>
<p>បន្ថែម Monolog ជាមួយ Composer៕</p>
<pre><code class="language-bash">
composer require monolog/monolog
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ Monolog</h3>
<p>កត់ត្រា Log ដោយប្រើ Monolog៕</p>
<pre><code class="language-php">
<?php
require 'vendor/autoload.php';
use Monolog\\Logger;
use Monolog\\Handler\\StreamHandler;

$log = new Logger('app');
$log->pushHandler(new StreamHandler('app.log', Logger::INFO));
$log->info('នេះជាព័ត៌មាន!');
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍�： Autoloading</h3>
<p>ប្រើ PSR-4 Autoloading៕</p>
<pre><code class="language-php">
<?php
// src/MyClass.php
namespace App;
class MyClass {
    public function sayHello() {
        return "សួស្តី!";
    }
}

// index.php
require 'vendor/autoload.php';
use App\\MyClass;
$myClass = new MyClass();
echo $myClass->sayHello();
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ composer.json</h3>
<p>កំណត់ Dependency និង Autoloading៕</p>
<pre><code class="language-json">
{
    "require": {
        "monolog/monolog": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Composer គឺជាអ្វី?',
      options: [
        'បណ្ណាល័យ PHP',
        'ឧបករណ៍គ្រប់គ្រង Dependency',
        'Database',
        'API Client'
      ],
      correct: 1,
      explanation: 'Composer គឺជាឧបករណ៍គ្រប់គ្រង Dependency ក្នុង PHP៕'
    },
    {
      question: 'តើឯកសារ `composer.json` ប្រើសម្រាប់អ្វី?',
      options: [
        'កត់ត្រា Log',
        'កំណត់ Dependencies និង Autoloading',
        'បង្កើត API',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: '`composer.json` កំណត់ Dependencies និង Autoloading៕'
    },
    {
      question: 'តើពាក្យបញ្ជា `composer install` ធ្វើអ្វី?',
      options: [
        'លុប Dependency',
        'ដំឡើង Dependencies ពី composer.json',
        'បង្កើត API',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: '`composer install` ដំឡើង Dependencies ពី `composer.json`៕'
    },
    {
      question: 'តើ `composer require` ប្រើសម្រាប់អ្វី?',
      options: [
        'បន្ថែម Dependency',
        'លុប Dependency',
        'បង្កើត Class',
        'ធ្វើ HTTP Request'
      ],
      correct: 0,
      explanation: '`composer require` បន្ថែម Dependency ទៅ `composer.json`៕'
    },
    {
      question: 'តើ PSR-4 គឺជាអ្វី?',
      options: [
        'ស្តង់ដារសម្រាប់ Autoloading',
        'បណ្ណាល័យ PHP',
        'API Protocol',
        'Database Schema'
      ],
      correct: 0,
      explanation: 'PSR-4 គឺជាស្តង់ដារសម្រាប់ Autoloading ក្នុង PHP៕'
    },
    {
      question: 'តើ `vendor/autoload.php` ធ្វើអ្វី?',
      options: [
        'បង្កើត Dependency',
        'ផ្ទុក Classes ដោយស្វ័យប្រវត្តិ',
        'កត់ត្រា Log',
        'ធ្វើ HTTP Request'
      ],
      correct: 1,
      explanation: '`vendor/autoload.php` ផ្ទុក Classes ដោយស្វ័យប្រវត្តិ៕'
    },
    {
      question: 'តើ Monolog ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Database',
        'កត់ត្រា Log',
        'បង្កើត API',
        'ធ្វើ HTTP Request'
      ],
      correct: 1,
      explanation: 'Monolog គឺជាបណ្ណាល័យសម្រាប់កត់ត្រា Log៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `require "vendor/autoload.php"; use Monolog\\Logger; $log = new Logger("app"); $log->info("Test");`',
      options: [
        'បង្ហាញ "Test"',
        'កត់ត្រា "Test" ទៅ Log',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: 'Monolog កត់ត្រា "Test" ទៅ Log File៕'
    },
    {
      question: 'តើ `composer update` ធ្វើអ្វី?',
      options: [
        'ដំឡើង Dependency ថ្មី',
        'ធ្វើបច្ចុប្បន្នភាព Dependencies',
        'លុប Dependency',
        'បង្កើត Class'
      ],
      correct: 1,
      explanation: '`composer update` ធ្វើបច្ចុប្បន្នភាព Dependencies ទៅកំណែថ្មី៕'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Composer?',
      options: [
        'បង្កើនល្បឿន Database',
        'សម្រួលការគ្រប់គ្រង Dependency',
        'ការពារ XSS',
        'បង្កើត API'
      ],
      correct: 1,
      explanation: 'Composer សម្រួលការគ្រប់គ្រង Dependency និង Autoloading៕'
    },
    {
      question: 'តើ `psr-4` ក្នុង `composer.json` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Database',
        'កំណត់ Autoloading',
        'បន្ថែម Dependency',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: '`psr-4` កំណត់ Autoloading សម្រាប់ Namespaces៕'
    },
    {
      question: 'តើឯកសារ `composer.lock` ធ្វើអ្វី?',
      options: [
        'រក្សាទុកកំណែ Dependency ជាក់លាក់',
        'បង្កើត Class',
        'កត់ត្រា Log',
        'ធ្វើ HTTP Request'
      ],
      correct: 0,
      explanation: '`composer.lock` រក្សាទុកកំណែ Dependency ជាក់លាក់៕'
    },
    {
      question: 'តើ Namespace ក្នុង PHP ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Database',
        'រៀបចំ Classes ដើម្បីជៀសវាងការប៉ះទង្គិចឈ្មោះ',
        'បង្កើត API',
        'ការពារ XSS'
      ],
      correct: 1,
      explanation: 'Namespace រៀបចំ Classes ដើម្បីជៀសវាងការប៉ះទង្គិចឈ្មោះ៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `namespace App; class Test { public function say() { return "Hi"; } }` នៅពេលប្រើជាមួយ Autoloading?',
      options: [
        'Hi',
        'Error',
        'Nothing',
        'Test'
      ],
      correct: 0,
      explanation: 'បើប្រើជាមួយ Autoloading និង `use App\\Test`, វានឹងបង្ហាញ "Hi"៕'
    },
    {
      question: 'តើ `composer dump-autoload` ធ្វើអ្វី?',
      options: [
        'លុប Dependency',
        'បង្កើត Autoload File ឡើងវិញ',
        'កត់ត្រា Log',
        'បន្ថែម Dependency'
      ],
      correct: 1,
      explanation: '`composer dump-autoload` បង្កើត Autoload File ឡើងវិញ៕'
    },
    {
      question: 'តើ Dependency Management ជួយអ្វី?',
      options: [
        'បង្កើនល្បឿន Database',
        'សម្រួលការប្រើបណ្ណាល័យខាងក្រៅ',
        'ការពារ SQL Injection',
        'បង្កើត HTML'
      ],
      correct: 1,
      explanation: 'Dependency Management សម្រួលការប្រើបណ្ណាល័យខាងក្រៅ៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលប្រើ Composer និង Monolog ដើម្បីគ្រប់គ្រងទិន្នន័យសិស្សជាមួយ Logging៕

**តម្រូវការ:**

1. **Composer Setup:**
   - បង្កើតឯកសារ \`composer.json\` ដែលមាន Dependency \`monolog/monolog\` និង Autoloading សម្រាប់ Namespace \`App\` នៅក្នុងថត \`src/\`៕
   - ដំឡើង Dependencies ដោយប្រើ \`composer install\`៕

2. **PHP Structure:**
   - បង្កើត Class \`Student\` នៅក្នុង \`src/Student.php\` ក្នុង Namespace \`App\`៕
   - នៅក្នុង \`Student\`, បន្ថែម Constructor ដែលបង្កើត Monolog Logger ជាមួយ StreamHandler ទៅ \`app.log\`៕
   - បន្ថែម Method \`addStudent($name)\` ដែលកត់ត្រា Log (INFO) និងត្រឡប់សារជោគជ័យ៕

3. **HTML Structure:**
   - បង្កើតឯកសារ \`index.php\` ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title: "PHP Composer and Dependency Management Lab"៕

4. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ Composer និង Dependency Management!"៕
   - បង្កើត Form ដែលមាន \`<input>\` សម្រាប់ឈ្មោះ និងប៊ូតុង "បញ្ចូល" ដោយប្រើ \`method="POST"\`៕
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញសារជោគជ័យ ឬកំហុស៕

5. **PHP Functionality:**
   - ផ្ទុក \`vendor/autoload.php\` និងប្រើ \`App\\Student\`៕
   - ប្រើ \`filter_var\` (FILTER_SANITIZE_STRING) ដើម្បីសម្អាតឈ្មោះ៕
   - ប្រើ \`try-catch\` ដើម្បីគ្រប់គ្រងកំហុស (ឧ. ឈ្មោះទទេ)៕
   - ប្រើ \`htmlspecialchars\` ដើម្បីការពារ XSS៕
   - ហៅ \`addStudent\` ដើម្បីកត់ត្រា Log និងបង្ហាញសារ៕

6. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`៕
     - \`color: #007bff;\` សម្រាប់ \`h1\`៕
     - \`margin: 20px;\` សម្រាប់ \`form\`៕
     - \`padding: 5px; margin: 5px;\` សម្រាប់ \`<input>\`៕
     - \`padding: 5px 10px;\` សម្រាប់ \`<input type="submit">\`៕
     - \`color: green;\` សម្រាប់សារជោគជ័យ (\`.message\`)៕
     - \`color: red;\` សម្រាប់សារកំហុស (\`.error\`)៕

**ការណែនាំ:**
- ត្រូវប្រាកដថា Composer ត្រូវបានដំឡើង៕
- បង្កើតថត \`src/\` និងដំណើរការ \`composer install\`៕
- ពិនិត្យឯកសារ \`app.log\` ដើម្បីមើល Log៕
`,
    solution: `
**composer.json**
\`\`\`php

{
    "require": {
        "monolog/monolog": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}
\`\`\`
**src/Student.php**
\`\`\`php
<?php
namespace App;
use Monolog\\Logger;
use Monolog\\Handler\\StreamHandler;

class Student {
    private $logger;
    
    public function __construct() {
        $this->logger = new Logger('student');
        $this->logger->pushHandler(new StreamHandler('app.log', Logger::INFO));
    }
    
    public function addStudent($name) {
        $this->logger->info("បន្ថែមសិស្ស: $name");
        return "បានបន្ថែមសិស្ស: $name";
    }
}
?>
\`\`\`
**index.php**
\`\`\`php
<?php
require 'vendor/autoload.php';
use App\\Student;

try {
    $student = new Student();
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        if (empty($name)) {
            throw new Exception("ឈ្មោះមិនអាចទទេ!");
        }
        $message = $student->addStudent($name);
    }
} catch (Exception $e) {
    $message = "កំហុស: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Composer and Dependency Management Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f8f9fa;
    }
    h1 {
      color: #007bff;
    }
    form {
      margin: 20px;
    }
    input[type="text"] {
      padding: 5px;
      margin: 5px;
    }
    input[type="submit"] {
      padding: 5px 10px;
    }
    p.message {
      color: green;
    }
    p.error {
      color: red;
    }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ Composer និង Dependency Management!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name"><br>
    <input type="submit" value="បញ្ចូល">
  </form>
  <p class="<?php echo strpos($message, 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($message); ?>
  </p>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson6_4Content;