import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson7_3Content: LessonContent = {
  title: 'ការអនុវត្តល្អបំផុត និងការបង្កើនប្រសិទ្ធភាពក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពីការអនុវត្តល្អបំផុតក្នុងការសរសេរកូដ PHP',
    'ស្វែងយល់ពីបច្ចេកទេសបង្កើនប្រសិទ្ធភាពនៃកម្មវិធី PHP',
    'អនុវត្តការសរសេរកូដឱ្យស្អាត និងអាចថែទាំបាន',
    'ប្រើ Composer ដើម្បីគ្រប់គ្រង Dependencies',
    'អនុវត្តការការពារសុវត្ថិភាពដូចជា XSS និង SQL Injection',
    'បង្កើនល្បឿនកម្មវិធីដោយប្រើ Caching និង Database Optimization'
  ],
  content: `
# ការអនុវត្តល្អបំផុត និងការបង្កើនប្រសិទ្ធភាពក្នុង PHP 🚀

---

ការអនុវត្តល្អបំផុត និងការបង្កើនប្រសិទ្ធភាពជួយឱ្យកូដ PHP មានភាពស្អាត សុវត្ថិភាព និងដំណើរការលឿន។ នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពីវិធីសាស្ត្រសំខាន់ៗដើម្បីសម្រេចបាននូវគោលដៅទាំងនេះ។

---

## 1. ការសរសេរកូដស្អាត (Clean Code)

ការសរសេរកូដស្អាតធ្វើឱ្យកូដងាយយល់ និងអាចថែទាំបាន។

**ឧទាហរណ៍ Clean Code:**

\`\`\`php
<?php
// មិនល្អ: ឈ្មោះអថេរមិនច្បាស់
$a = 10;
$b = 20;
$c = $a + $b;

// ល្អ: ឈ្មោះអថេរច្បាស់លាស់ និងមាន Comment
$totalPrice = 10;
$tax = 20;
$totalWithTax = $totalPrice + $tax; // គណនាតម្លៃសរុបរួមទាំងពន្ធ
?>
\`\`\`

---

## 2. ការប្រើ PDO និង Prepared Statements

ប្រើ PDO និង Prepared Statements ដើម្បីការពារ SQL Injection។

**ឧទាហរណ៍ PDO:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=app;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");
    $stmt->execute(['id' => filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT)]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    error_log("កំហុស: " . $e->getMessage());
    echo "មានបញ្ហាបច្ចេកទេស!";
}
?>
\`\`\`

---

## 3. ការប្រើ Composer

ប្រើ Composer ដើម្បីគ្រប់គ្រង Libraries និង Dependencies។

**ឧទាហរណ៍ Composer:**

\`\`\`bash
# បញ្ចូល Composer Dependency
composer require monolog/monolog
\`\`\`

\`\`\`php
<?php
require 'vendor/autoload.php';
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

$log = new Logger('app');
$log->pushHandler(new StreamHandler('app.log', Logger::WARNING));
$log->warning('នេះជាការព្រមាន!');
?>
\`\`\`

---

## 4. ការបង្កើនប្រសិទ្ធភាព Database

ប្រើ Indexes និង Query Optimization ដើម្បីបង្កើនល្បឿន Database។

**ឧទាហរណ៍ Index:**

\`\`\`sql
CREATE INDEX idx_user_email ON users(email);
\`\`\`

**ឧទាហរណ៍ Query Optimization:**

\`\`\`php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=app;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // ប្រើ SELECT ជាក់លាក់ជំនួស *
    $stmt = $pdo->prepare("SELECT id, name FROM users WHERE email = :email");
    $stmt->execute(['email' => filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)]);
} catch (PDOException $e) {
    error_log("កំហុស: " . $e->getMessage());
}
?>
\`\`\`

---

## 5. ការប្រើ Caching

ប្រើ Caching ដើម្បីកាត់បន្ថយការផ្ទុក Server។

**ឧទាហរណ៍ File Caching:**

\`\`\`php
<?php
$cacheFile = 'cache/users.json';
$cacheTime = 3600; // 1 ម៉ោង

if (file_exists($cacheFile) && (time() - filemtime($cacheFile)) < $cacheTime) {
    $users = json_decode(file_get_contents($cacheFile), true);
} else {
    $pdo = new PDO("mysql:host=localhost;dbname=app;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->query("SELECT id, name FROM users");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    file_put_contents($cacheFile, json_encode($users));
}
?>
\`\`\`

---

## 6. ការការពារសុវត្ថិភាព

ប្រើ \`htmlspecialchars\`, \`filter_var\`, និង Password Hashing ដើម្បីការពារ XSS និង SQL Injection។

**ឧទាហរណ៍ Security:**

\`\`\`php
<?php
session_start();
$username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
echo htmlspecialchars($username); // ការពារ XSS
?>
\`\`\`

---

## 7. កម្មវិធីគំរូជាមួយ Best Practices

បង្កើតកម្មវិធីគំរូដែលអនុវត្តល្អបំផុត៕

**ឧទាហរណ៍កម្មវិធីគំរូ:**

\`\`\`php
<?php
session_start();
require 'vendor/autoload.php';
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

class UserManager {
    private $pdo;
    private $logger;

    public function __construct() {
        $this->pdo = new PDO("mysql:host=localhost;dbname=app;charset=utf8", "root", "");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->logger = new Logger('user_manager');
        $this->logger->pushHandler(new StreamHandler('logs/app.log', Logger::INFO));
    }

    public function addUser($name, $email) {
        try {
            $name = filter_var($name, FILTER_SANITIZE_STRING);
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            $stmt = $this->pdo->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
            $stmt->execute(['name' => $name, 'email' => $email]);
            $this->logger->info("បានបញ្ចូលអ្នកប្រើ: $name");
            return true;
        } catch (PDOException $e) {
            $this->logger->error("កំហុសក្នុងការបញ្ចូលអ្នកប្រើ: " . $e->getMessage());
            return false;
        }
    }

    public function getUsers() {
        $cacheFile = 'cache/users.json';
        $cacheTime = 3600;
        
        if (file_exists($cacheFile) && (time() - filemtime($cacheFile)) < $cacheTime) {
            return json_decode(file_get_contents($cacheFile), true);
        }
        
        try {
            $stmt = $this->pdo->prepare("SELECT id, name, email FROM users");
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            file_put_contents($cacheFile, json_encode($users));
            return $users;
        } catch (PDOException $e) {
            $this->logger->error("កំហុសក្នុងការទាញអ្នកប្រើ: " . $e->getMessage());
            return [];
        }
    }
}

try {
    $userManager = new UserManager();
    $message = "";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($userManager->addUser($_POST['name'], $_POST['email'])) {
            $message = "បានបញ្ចូលអ្នកប្រើ!";
        } else {
            $message = "កំហុសក្នុងការបញ្ចូលអ្នកប្រើ!";
        }
    }
    
    $users = $userManager->getUsers();
} catch (Exception $e) {
    $message = "កំហុស: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Best Practices</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    form { margin: 20px; }
    input[type="text"], input[type="email"] { padding: 5px; margin: 5px; }
    input[type="submit"] { padding: 5px 10px; }
    table { margin: 20px auto; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    th { background-color: #007bff; color: white; }
    .message { color: green; }
    .error { color: red; }
  </style>
</head>
<body>
  <h1>កម្មវិធីគ្រប់គ្រងអ្នកប្រើ</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name"><br>
    <label>អ៊ីមែល: </label>
    <input type="email" name="email"><br>
    <input type="submit" value="បញ្ចូលអ្នកប្រើ">
  </form>
  <p class="<?php echo strpos($message, 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($message); ?>
  </p>
  <table>
    <tr>
      <th>ID</th>
      <th>ឈ្មោះ</th>
      <th>អ៊ីមែល</th>
    </tr>
    <?php foreach ($users as $user): ?>
      <tr>
        <td><?php echo htmlspecialchars($user['id']); ?></td>
        <td><?php echo htmlspecialchars($user['name']); ?></td>
        <td><?php echo htmlspecialchars($user['email']); ?></td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Clean Code</h3>
<p>សរសេរកូដឱ្យច្បាស់លាស់៕</p>
<pre><code class="language-php">
<?php
// មិនល្អ
$x = $_POST['data'];
$y = 100;
$z = $x * $y;

// ល្អ
$quantity = filter_var($_POST['quantity'], FILTER_SANITIZE_NUMBER_INT);
$pricePerUnit = 100;
$totalCost = $quantity * $pricePerUnit; // គណនាតម្លៃសរុប
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ PDO Prepared Statement</h3>
<p>ការពារ SQL Injection៕</p>
<pre><code class="language-php">
<?php
$pdo = new PDO("mysql:host=localhost;dbname=app;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->prepare("SELECT name FROM users WHERE email = :email");
$stmt->execute(['email' => filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)]);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Composer</h3>
<p>ប្រើ Monolog សម្រាប់ Logging៕</p>
<pre><code class="language-php">
<?php
require 'vendor/autoload.php';
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
$log = new Logger('app');
$log->pushHandler(new StreamHandler('app.log', Logger::INFO));
$log->info('កម្មវិធីបានចាប់ផ្តើម!');
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ File Caching</h3>
<p>បង្កើនល្បឿនដោយ Cache៕</p>
<pre><code class="language-php">
<?php
$cacheFile = 'cache/data.json';
$cacheTime = 3600;
if (file_exists($cacheFile) && (time() - filemtime($cacheFile)) < $cacheTime) {
    $data = json_decode(file_get_contents($cacheFile), true);
} else {
    $data = ['example' => 'data']; // ទាញទិន្នន័យពី Database
    file_put_contents($cacheFile, json_encode($data));
}
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជាគោលបំណងនៃការសរសេរកូដស្អាត?',
      options: [
        'បង្កើនល្បឿន',
        'ធ្វើឱ្យកូដងាយយល់ និងថែទាំ',
        'ការពារ XSS',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'ការសរសេរកូដស្អាតធ្វើឱ្យកូដងាយយល់ និងអាចថែទាំបាន៕'
    },
    {
      question: 'តើ PDO ជួយអ្វីក្នុងការអនុវត្តល្អបំផុត?',
      options: [
        'បង្កើនល្បឿន HTML',
        'ការពារ SQL Injection',
        'បង្កើត Form',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'PDO ជួយការពារ SQL Injection ដោយប្រើ Prepared Statements៕'
    },
    {
      question: 'តើ Composer ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Dependencies',
        'បង្កើនល្បឿន Database',
        'ការពារ XSS',
        'សម្អាតទិន្នន័យ'
      ],
      correct: 0,
      explanation: 'Composer ប្រើសម្រាប់គ្រប់គ្រង Dependencies និង Libraries៕'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ Index ក្នុង Database?',
      options: [
        'បង្កើនល្បឿន Query',
        'ការពារ SQL Injection',
        'បង្កើត Form',
        'កត់ត្រា Log'
      ],
      correct: 0,
      explanation: 'Index បង្កើនល្បឿន Query ក្នុង Database៕'
    },
    {
      question: 'តើ `htmlspecialchars` ជួយអ្វីក្នុង PHP?',
      options: [
        'ការពារ SQL Injection',
        'ការពារ XSS',
        'បង្កើនល្បឿន',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: '`htmlspecialchars` ការពារ XSS ដោយបម្លែងតួអក្សរពិសេស៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$cacheFile = "cache/data.json"; if (file_exists($cacheFile)) { echo file_get_contents($cacheFile); }`',
      options: [
        'បង្ហាញខ្លឹមសារនៃ Cache',
        'Error',
        'Nothing',
        'បញ្ចូលទិន្នន័យ'
      ],
      correct: 0,
      explanation: 'កូដនេះបង្ហាញខ្លឹមសារនៃ Cache បើឯកសារមាន៕'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Caching?',
      options: [
        'បង្កើនល្បឿនដោយកាត់បន្ថយការផ្ទុក Server',
        'ការពារ SQL Injection',
        'បង្កើត Form',
        'កត់ត្រា Log'
      ],
      correct: 0,
      explanation: 'Caching បង្កើនល្បឿនដោយកាត់បន្ថយការផ្ទុក Server៕'
    },
    {
      question: 'តើអ្វីជាហានិភ័យបើមិនប្រើ `filter_var`?',
      options: [
        'SQL Injection',
        'XSS Attack',
        'ទិន្នន័យមិនស្អាត',
        'Database Crash'
      ],
      correct: 2,
      explanation: 'ការមិនប្រើ `filter_var` អាចបណ្តាលឱ្យទិន្នន័យមិនស្អាត៕'
    },
    {
      question: 'តើ Monolog ប្រើសម្រាប់អ្វីក្នុង PHP?',
      options: [
        'បង្កើនល្បឿន',
        'កត់ត្រា Log',
        'ការពារ XSS',
        'បញ្ចូលទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Monolog ប្រើសម្រាប់កត់ត្រា Log ក្នុង PHP៕'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Prepared Statements?',
      options: [
        'បង្កើនល្បឿន HTML',
        'ការពារ SQL Injection',
        'បង្កើត Form',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'Prepared Statements ការពារ SQL Injection៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);`',
      options: [
        'បើក Error Handling',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 0,
      explanation: 'កូដនេះបើក Error Handling ជាមួយ PDO៕'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ Class ក្នុង PHP?',
      options: [
        'បង្កើនល្បឿន',
        'រៀបចំកូដឱ្យមានរចនាសម្ព័ន្ធ',
        'ការពារ XSS',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'Class រៀបចំកូដឱ្យមានរចនាសម្ព័ន្ធ និងអាចថែទាំបាន៕'
    },
    {
      question: 'តើអ្វីជាហានិភ័យបើមិនប្រើ Password Hashing?',
      options: [
        'SQL Injection',
        'XSS Attack',
        'លេខសម្ងាត់ត្រូវបានរក្សាទុកជាអក្សរធម្មតា',
        'Session Hijacking'
      ],
      correct: 2,
      explanation: 'ការមិនប្រើ Password Hashing ធ្វើឱ្យលេខសម្ងាត់ត្រូវបានរក្សាទុកជាអក្សរធម្មតា៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃការប្រើ `error_log`?',
      options: [
        'បង្ហាញសារនៅ Browser',
        'កត់ត្រាកំហុសទៅឯកសារ Log',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`error_log` កត់ត្រាកំហុសទៅឯកសារ Log៕'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ `filter_var` សម្រាប់អ៊ីមែល?',
      options: [
        'បង្កើនល្បឿន',
        'ផ្ទៀងផ្ទាត់ និងសម្អាតអ៊ីមែល',
        'ការពារ XSS',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: '`filter_var` ផ្ទៀងផ្ទាត់ និងសម្អាតអ៊ីមែលដើម្បីសុវត្ថិភាព៕'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃការបង្កើនប្រសិទ្ធភាព Query?',
      options: [
        'កាត់បន្ថយពេលវេលាដំណើរការ Database',
        'ការពារ XSS',
        'បញ្ចូលទិន្នន័យ',
        'កត់ត្រា Log'
      ],
      correct: 0,
      explanation: 'ការបង្កើនប្រសិទ្ធភាព Query កាត់បន្ថយពេលវេលាដំណើរការ Database៕'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី PHP ដែលអនុវត្តល្អបំផុត និងបង្ផើនប្រសិទ្ធភាពសម្រាប់គ្រប់គ្រងអ្នកប្រើ៕

**តម្រូវការ:**

1. **File Structure:**
   - បង្កើតឯកសារ \`index.php\` និងថត \`cache\` និង \`logs\`៕
   - ប្រើ Composer ដើម្បីបញ្ចូល Monolog៕

2. **HTML Structure:**
   - បង្កើត \`<html>\`, \`<head>\`, \`<body>\`, \`<meta charset="UTF-8">\`, \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title: "PHP Best Practices Lab"៕
   - បន្ថែម \`<h1>\`: "កម្មវិធីគ្រប់គ្រងអ្នកប្រើ"៕
   - បង្កើត Form សម្រាប់បញ្ចូលឈ្មោះ និងអ៊ីមែល ដោយប្រើ \`method="POST"\`៕
   - បន្ថែម \`<p>\` សម្រាប់បង្ហាញសារជោគជ័យ ឬកំហុស៕
   - បង្ហាញអ្នកប្រើនៅក្នុង \`<table>\` ដែលមានជួរឈរ ID, ឈ្មោះ, និងអ៊ីមែល៕

3. **PHP Functionality:**
   - បើក Session ដោយ \`session_start\`៕
   - ប្រើ Composer Autoload សម្រាប់ Monolog៕
   - បង្កើត Class \`UserManager\` ដែលមាន:
     - Constructor ដើម្បីភ្ជាប់ PDO និងកំណត់ Monolog Logger៕
     - មុខងារ \`addUser\` ដើម្បីបញ្ចូលអ្នកប្រើទៅតារាង \`users\`៕
     - មុខងារ \`getUsers\` ដើម្បីទាញអ្នកប្រើ ដោយប្រើ File Caching៕
   - ភ្ជាប់ទៅ Database \`app\` ដោយប្រើ PDO និង \`PDO::ERRMODE_EXCEPTION\`៕
   - ប្រើ \`filter_var\` (FILTER_SANITIZE_STRING, FILTER_SANITIZE_EMAIL) សម្រាប់សម្អាតទិន្នន័យ៕
   - ប្រើ \`htmlspecialchars\` ដើម្បីការពារ XSS៕
   - ប្រើ Monolog សម្រាប់កត់ត្រា Log នៅឯកសារ \`logs/app.log\`៕
   - ប្រើ File Caching ដើម្បីរក្សាទុកទិន្នន័យអ្នកប្រើនៅ \`cache/users.json\` ជាមួយ Cache Time 1 ម៉ោង៕
   - ប្រើ \`try-catch\` សម្រាប់គ្រប់គ្រងកំហុស៕

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`៕
     - \`color: #007bff;\` សម្រាប់ \`h1\`៕
     - \`margin: 20px;\` សម្រាប់ \`form\`៕
     - \`padding: 5px; margin: 5px;\` សម្រាប់ \`<input>\`៕
     - \`padding: 5px 10px;\` សម្រាប់ \`<input type="submit">\`៕
     - \`margin: 20px auto; border-collapse: collapse;\` សម្រាប់ \`table\`៕
     - \`border: 1px solid #ddd; padding: 8px;\` សម្រាប់ \`th\` និង \`td\`៕
     - \`background-color: #007bff; color: white;\` សម្រាប់ \`th\`៕
     - \`color: green;\` សម្រាប់សារជោគជ័យ (\`.message\`)៕
     - \`color: red;\` សម្រាប់សារកំហុស (\`.error\`)៕

**ការណែនាំ:**
- ត្រូវប្រាកដថា Database \`app\` និងតារាង \`users\` (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), email VARCHAR(100)) មាន៕
- ដំឡើង Monolog ដោយប្រើ \`composer require monolog/monolog\`៕
- បញ្ចូលទិន្នន័យគំរូមួយចំនួនមុននឹងសាកល្បង៕
- សាកល្បងការបញ្ចូលអ្នកប្រើ និងពិនិត្យ Cache និង Log៕
`,
    solution: `
\`\`\`php
<?php
session_start();
require 'vendor/autoload.php';
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

class UserManager {
    private $pdo;
    private $logger;

    public function __construct() {
        $this->pdo = new PDO("mysql:host=localhost;dbname=app;charset=utf8", "root", "");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->logger = new Logger('user_manager');
        $this->logger->pushHandler(new StreamHandler('logs/app.log', Logger::INFO));
    }

    public function addUser($name, $email) {
        try {
            $name = filter_var($name, FILTER_SANITIZE_STRING);
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            $stmt = $this->pdo->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
            $stmt->execute(['name' => $name, 'email' => $email]);
            $this->logger->info("បានបញ្ចូលអ្នកប្រើ: $name");
            return true;
        } catch (PDOException $e) {
            $this->logger->error("កំហុសក្នុងការបញ្ចូលអ្នកប្រើ: " . $e->getMessage());
            return false;
        }
    }

    public function getUsers() {
        $cacheFile = 'cache/users.json';
        $cacheTime = 3600;
        
        if (file_exists($cacheFile) && (time() - filemtime($cacheFile)) < $cacheTime) {
            return json_decode(file_get_contents($cacheFile), true);
        }
        
        try {
            $stmt = $this->pdo->prepare("SELECT id, name, email FROM users");
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            file_put_contents($cacheFile, json_encode($users));
            return $users;
        } catch (PDOException $e) {
            $this->logger->error("កំហុសក្នុងការទាញអ្នកប្រើ: " . $e->getMessage());
            return [];
        }
    }
}

try {
    $userManager = new UserManager();
    $message = "";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($userManager->addUser($_POST['name'], $_POST['email'])) {
            $message = "បានបញ្ចូលអ្នកប្រើ!";
        } else {
            $message = "កំហុសក្នុងការបញ្ចូលអ្នកប្រើ!";
        }
    }
    
    $users = $userManager->getUsers();
} catch (Exception $e) {
    $message = "កំហុស: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Best Practices Lab</title>
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
    input[type="text"], input[type="email"] {
      padding: 5px;
      margin: 5px;
    }
    input[type="submit"] {
      padding: 5px 10px;
    }
    table {
      margin: 20px auto;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      background-color: #007bff;
      color: white;
    }
    .message {
      color: green;
    }
    .error {
      color: red;
    }
  </style>
</head>
<body>
  <h1>កម្មវិធីគ្រប់គ្រងអ្នកប្រើ</h1>
  <form method="POST" action="">
    <label>ឈ្មោះ: </label>
    <input type="text" name="name"><br>
    <label>អ៊ីមែល: </label>
    <input type="email" name="email"><br>
    <input type="submit" value="បញ្ចូលអ្នកប្រើ">
  </form>
  <p class="<?php echo strpos($message, 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($message); ?>
  </p>
  <table>
    <tr>
      <th>ID</th>
      <th>ឈ្មោះ</th>
      <th>អ៊ីមែល</th>
    </tr>
    <?php foreach ($users as $user): ?>
      <tr>
        <td><?php echo htmlspecialchars($user['id']); ?></td>
        <td><?php echo htmlspecialchars($user['name']); ?></td>
        <td><?php echo htmlspecialchars($user['email']); ?></td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson7_3Content;