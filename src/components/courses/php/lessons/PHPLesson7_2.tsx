import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson7_2Content: LessonContent = {
  title: 'ការបង្កើត CMS ជាមួយ PHP',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Content Management System (CMS)',
    'ស្វែងយល់ពីការបង្កើតប្រព័ន្ធផ្ទៀងផ្ទាត់អ្នកប្រើ',
    'អនុវត្តការគ្រប់គ្រងខ្លឹមសារដោយប្រើ PDO',
    'បន្ថែមសុវត្ថិភាពដូចជា Password Hashing និង XSS Protection',
    'បង្កើត CMS សាមញ្ញដែលអនុញ្ញាតឱ្យគ្រប់គ្រងអត្ថបទ',
    'ប្រើ Session សម្រាប់គ្រប់គ្រងការចូលប្រើប្រាស់'
  ],
  content: `
# ការបង្កើត CMS ជាមួយ PHP 📝

---

**Content Management System (CMS)** គឺជាកម្មវិធីសម្រាប់គ្រប់គ្រងខ្លឹមសារដូចជាអត្ថបទ ឬទិន្នន័យ។ នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត CMS សាមញ្ញដែលមានប្រព័ន្ធផ្ទៀងផ្ទាត់អ្នកប្រើ និងការគ្រប់គ្រងអត្ថបទ។

---

## 1. ការផ្ទៀងផ្ទាត់អ្នកប្រើ

ប្រើ **Session** និង **Password Hashing** ដើម្បីផ្ទៀងផ្ទាត់អ្នកប្រើ។

**ឧទាហរណ៍ Login:**

\`\`\`php
<?php
session_start();
try {
    $pdo = new PDO("mysql:host=localhost;dbname=cms;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
        $password = $_POST['password'];
        $stmt = $pdo->prepare("SELECT password FROM users WHERE username = :username");
        $stmt->execute(['username' => $username]);
        $hash = $stmt->fetchColumn();
        if (password_verify($password, $hash)) {
            $_SESSION['user'] = $username;
            header("Location: dashboard.php");
        } else {
            throw new Exception("ឈ្មោះអ្នកប្រើ ឬលេខសម្ងាត់មិនត្រឹមត្រូវ!");
        }
    }
} catch (Exception $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 2. ការគ្រប់គ្រងខ្លឹមសារ

បង្កើត កែប្រែ និងលុបអត្ថបទ៕

**ឧទាហរណ៍ Content Management:**

\`\`\`php
<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}
try {
    $pdo = new PDO("mysql:host=localhost;dbname=cms;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $title = filter_var($_POST['title'], FILTER_SANITIZE_STRING);
        $content = filter_var($_POST['content'], FILTER_SANITIZE_STRING);
        $stmt = $pdo->prepare("INSERT INTO posts (title, content) VALUES (:title, :content)");
        $stmt->execute(['title' => $title, 'content' => $content]);
        echo "បានបញ្ចូលអត្ថបទ!";
    }
} catch (PDOException $e) {
    echo "កំហុស: " . $e->getMessage();
}
?>
\`\`\`

---

## 3. Password Hashing

ប្រើ \`password_hash\` និង \`password_verify\` ដើម្បីធានាសុវត្ថិភាពលេខសម្ងាត់៕

**ឧទាហរណ៍ Password Hashing:**

\`\`\`php
<?php
$password = "mysecretpassword";
$hash = password_hash($password, PASSWORD_DEFAULT);
echo $hash;

if (password_verify($password, $hash)) {
    echo "លេខសម្ងាត់ត្រឹមត្រូវ!";
}
?>
\`\`\`

---

## 4. CMS ពេញលេញ

បង្កើត CMS ដែលមានទំព័រចូលប្រើប្រាស់ និងផ្ទាំងគ្រប់គ្រងសម្រាប់អត្ថបទ៕

**ឧទាហរណ៍ CMS:**

**login.php**

\`\`\`php
<?php
session_start();
try {
    $pdo = new PDO("mysql:host=localhost;dbname=cms;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
        $password = $_POST['password'];
        $stmt = $pdo->prepare("SELECT password FROM users WHERE username = :username");
        $stmt->execute(['username' => $username]);
        $hash = $stmt->fetchColumn();
        if (password_verify($password, $hash)) {
            $_SESSION['user'] = $username;
            header("Location: dashboard.php");
            exit;
        } else {
            $message = "ឈ្មោះអ្នកប្រើ ឬលេខសម្ងាត់មិនត្រឹមត្រូវ!";
        }
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
  <title>PHP CMS - Login</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    form { margin: 20px; }
    input[type="text"], input[type="password"] { padding: 5px; margin: 5px; }
    input[type="submit"] { padding: 5px 10px; }
    .error { color: red; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ CMS!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះអ្នកប្រើ: </label>
    <input type="text" name="username"><br>
    <label>លេខសម្ងាត់: </label>
    <input type="password" name="password"><br>
    <input type="submit" value="ចូលប្រើប្រាស់">
  </form>
  <p class="error"><?php echo htmlspecialchars($message); ?></p>
</body>
</html>
\`\`\`

**dashboard.php**

\`\`\`php
<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}
try {
    $pdo = new PDO("mysql:host=localhost;dbname=cms;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $title = filter_var($_POST['title'], FILTER_SANITIZE_STRING);
        $content = filter_var($_POST['content'], FILTER_SANITIZE_STRING);
        if (empty($title) || empty($content)) {
            throw new Exception("ចំណងជើង និងខ្លឹមសារមិនអាចទទេ!");
        }
        $stmt = $pdo->prepare("INSERT INTO posts (title, content) VALUES (:title, :content)");
        $stmt->execute(['title' => $title, 'content' => $content]);
        $message = "បានបញ្ចូលអត្ថបទ!";
    }
    
    $stmt = $pdo->prepare("SELECT id, title, content FROM posts");
    $stmt->execute();
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    $message = "កំហុស: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP CMS - Dashboard</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    form { margin: 20px; }
    input[type="text"], textarea { padding: 5px; margin: 5px; width: 300px; }
    input[type="submit"] { padding: 5px 10px; }
    table { margin: 20px auto; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    th { background-color: #007bff; color: white; }
    .message { color: green; }
    .error { color: red; }
  </style>
</head>
<body>
  <h1>ផ្ទាំងគ្រប់គ្រង CMS</h1>
  <p>សូមស្វាគមន៍, <?php echo htmlspecialchars($_SESSION['user']); ?>! <a href="logout.php">ចាកចេញ</a></p>
  <form method="POST" action="">
    <label>ចំណងជើង: </label><br>
    <input type="text" name="title"><br>
    <label>ខ្លឹមសារ: </label><br>
    <textarea name="content"></textarea><br>
    <input type="submit" value="បញ្ចូលអត្ថបទ">
  </form>
  <p class="<?php echo strpos($message, 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($message); ?>
  </p>
  <table>
    <tr>
      <th>ID</th>
      <th>ចំណងជើង</th>
      <th>ខ្លឹមសារ</th>
    </tr>
    <?php foreach ($posts as $post): ?>
      <tr>
        <td><?php echo htmlspecialchars($post['id']); ?></td>
        <td><?php echo htmlspecialchars($post['title']); ?></td>
        <td><?php echo htmlspecialchars($post['content']); ?></td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
\`\`\`

**logout.php**

\`\`\`php
<?php
session_start();
session_destroy();
header("Location: login.php");
exit;
?>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Login</h3>
<p>ផ្ទៀងផ្ទាត់អ្នកប្រើ៕</p>
<pre><code class="language-php">
<?php
session_start();
$pdo = new PDO("mysql:host=localhost;dbname=cms;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
$stmt = $pdo->prepare("SELECT password FROM users WHERE username = :username");
$stmt->execute(['username' => $username]);
$hash = $stmt->fetchColumn();
if (password_verify($_POST['password'], $hash)) {
    $_SESSION['user'] = $username;
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Password Hashing</h3>
<p>បង្កើត Hash សម្រាប់លេខសម្ងាត់៕</p>
<pre><code class="language-php">
<?php
$password = "password123";
$hash = password_hash($password, PASSWORD_DEFAULT);
echo $hash;
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Content Creation</h3>
<p>បញ្ចូលអត្ថបទថ្មី៕</p>
<pre><code class="language-php">
<?php
$pdo = new PDO("mysql:host=localhost;dbname=cms;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->prepare("INSERT INTO posts (title, content) VALUES (:title, :content)");
$stmt->execute(['title' => 'ចំណងជើង', 'content' => 'ខ្លឹមសារ']);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Session Protection</h3>
<p>ការពារទំព័រដោយ Session៕</p>
<pre><code class="language-php">
<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ CMS តំណាងឱ្យអ្វី?',
      options: [
        'Content Management System',
        'Customer Management System',
        'Content Monitoring System',
        'Client Management System'
      ],
      correct: 0,
      explanation: 'CMS តំណាងឱ្យ Content Management System៕'
    },
    {
      question: 'តើ `password_hash` ប្រើសម្រាប់អ្វី?',
      options: [
        'បម្លែងលេខសម្ងាត់ទៅ Hash',
        'ផ្ទៀងផ្ទាត់លេខសម្ងាត់',
        'បញ្ចូលទិន្នន័យ',
        'កត់ត្រា Log'
      ],
      correct: 0,
      explanation: '`password_hash` បម្លែងលេខសម្ងាត់ទៅ Hash ដើម្បីសុវត្ថិភាព៕'
    },
    {
      question: 'តើ `password_verify` ប្រើសម្រាប់អ្វី?',
      options: [
        'បម្លែង Hash',
        'ផ្ទៀងផ្ទាត់លេខសម្ងាត់ជាមួយ Hash',
        'បញ្ចូលទិន្នន័យ',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: '`password_verify` ផ្ទៀងផ្ទាត់លេខសម្ងាត់ជាមួយ Hash៕'
    },
    {
      question: 'តើ Session ប្រើសម្រាប់អ្វីក្នុង CMS?',
      options: [
        'គ្រប់គ្រងខ្លឹមសារ',
        'ផ្ទៀងផ្ទាត់អ្នកប្រើ',
        'បញ្ចូលទិន្នន័យ',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'Session ប្រើសម្រាប់ផ្ទៀងផ្ទាត់អ្នកប្រើក្នុង CMS៕'
    },
    {
      question: 'តើ `filter_var` ជួយអ្វីក្នុង CMS?',
      options: [
        'ការពារ XSS',
        'សម្អាតទិន្នន័យអ្នកប្រើ',
        'បញ្ចូលទិន្នន័យ',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: '`filter_var` សម្អាតទិន្នន័យអ្នកប្រើដើម្បីសុវត្ថិភាព៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$hash = password_hash("test", PASSWORD_DEFAULT); echo password_verify("test", $hash);`',
      options: [
        '1',
        '0',
        'Error',
        'Nothing'
      ],
      correct: 0,
      explanation: '`password_verify` ត្រឡប់ 1 (true) បើលេខសម្ងាត់ត្រឹមត្រូវ៕'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ CMS?',
      options: [
        'គ្រប់គ្រង Database',
        'គ្រប់គ្រងខ្លឹមសារ',
        'បង្កើត API',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'CMS ប្រើសម្រាប់គ្រប់គ្រងខ្លឹមសារដូចជាអត្ថបទ៕'
    },
    {
      question: 'តើ `session_start` ត្រូវបានហៅនៅពេលណា?',
      options: [
        'នៅចុងកម្មវិធី',
        'នៅដើមកម្មវិធីមុនប្រើ Session',
        'នៅពេលបញ្ចូលទិន្នន័យ',
        'នៅពេល Debug'
      ],
      correct: 1,
      explanation: '`session_start` ត្រូវបានហៅនៅដើមកម្មវិធីមុនប្រើ Session៕'
    },
    {
      question: 'តើ `htmlspecialchars` ជួយអ្វីក្នុង CMS?',
      options: [
        'ការពារ SQL Injection',
        'ការពារ XSS',
        'បញ្ចូលទិន្នន័យ',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: '`htmlspecialchars` ការពារ XSS ក្នុង CMS៕'
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
      question: 'តើ `session_destroy` ធ្វើអ្វី?',
      options: [
        'បើក Session',
        'លុប Session Data',
        'បញ្ចូលទិន្នន័យ',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: '`session_destroy` លុប Session Data ទាំងអស់៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$stmt = $pdo->prepare("INSERT INTO posts (title, content) VALUES (:title, :content)"); $stmt->execute(["title" => "Test", "content" => "Content"]);`',
      options: [
        'បញ្ចូលអត្ថបទថ្មី',
        'Error',
        'Nothing',
        'បង្ហាញ "Test"'
      ],
      correct: 0,
      explanation: 'កូដនេះបញ្ចូលអត្ថបទថ្មីទៅតារាង posts៕'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ PDO ក្នុង CMS?',
      options: [
        'បង្កើនល្បឿន HTML',
        'ផ្តល់សុវត្ថិភាព និងភាពងាយស្រួលក្នុងការគ្រប់គ្រង Database',
        'បង្កើត Form',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'PDO ផ្តល់សុវត្ថិភាព និងភាពងាយស្រួលក្នុងការគ្រប់គ្រង Database៕'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃការផ្ទៀងផ្ទាត់អ្នកប្រើក្នុង CMS?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'ការពារការចូលប្រើប្រាស់គ្មានការអនុញ្ញាត',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'ការផ្ទៀងផ្ទាត់អ្នកប្រើការពារការចូលប្រើប្រាស់គ្មានការអនុញ្ញាត៕'
    },
    {
      question: 'តើអ្វីជាហានិភ័យបើមិនប្រើ `htmlspecialchars` ក្នុង CMS?',
      options: [
        'SQL Injection',
        'XSS Attack',
        'Session Hijacking',
        'Database Crash'
      ],
      correct: 1,
      explanation: 'ការមិនប្រើ `htmlspecialchars` អាចបណ្តាលឱ្យមាន XSS Attack៕'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ Session ក្នុង CMS?',
      options: [
        'បង្កើនល្បឿន',
        'ផ្ទៀងផ្ទាត់អ្នកប្រើ និងរក្សាទុកស្ថានភាព',
        'បញ្ចូលទិន្នន័យ',
        'កត់ត្រា Log'
      ],
      correct: 1,
      explanation: 'Session ផ្ទៀងផ្ទាត់អ្នកប្រើ និងរក្សាទុកស្ថានភាពក្នុង CMS៕'
    }
  ],
  lab: {
    task: `
បង្កើត CMS សាមញ្ញជាមួយ PHP ដែលមានទំព័រចូលប្រើប្រាស់ និងផ្ទាំងគ្រប់គ្រងសម្រាប់អត្ថបទ៕

**តម្រូវការ:**

1. **File Structure:**
   - បង្កើតឯកសារ \`login.php\`, \`dashboard.php\`, និង \`logout.php\`៕

2. **HTML Structure:**
   - **login.php**: មាន \`<html>\`, \`<head>\`, \`<body>\`, \`<meta charset="UTF-8">\`, \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`, Title: "PHP CMS - Login Lab"៕
   - **dashboard.php**: មាន \`<html>\`, \`<head>\`, \`<body>\`, \`<meta charset="UTF-8">\`, \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`, Title: "PHP CMS - Dashboard Lab"៕
   - បន្ថែម \`<h1>\` នៅ \`login.php\`: "សូមស្វាគមន៍មកកាន់ CMS!" និងនៅ \`dashboard.php\`: "ផ្ទាំងគ្រប់គ្រង CMS"៕
   - **login.php**: បង្កើត Form សម្រាប់ឈ្មោះអ្នកប្រើ និងលេខសម្ងាត់ ដោយប្រើ \`method="POST"\`៕
   - **dashboard.php**: បង្កើត Form សម្រាប់បញ្ចូលចំណងជើង និងខ្លឹមសារ និងតារាងសម្រាប់បង្ហាញអត្ថបទ៕
   - បន្ថែម \`<p>\` សម្រាប់បង្ហាញសារកំហុស ឬជោគជ័យ៕

3. **PHP Functionality:**
   - **login.php**:
     - បើក Session ដោយ \`session_start\`៕
     - ភ្ជាប់ទៅ Database \`cms\` ដោយប្រើ PDO និង \`PDO::ERRMODE_EXCEPTION\`៕
     - ប្រើ \`filter_var\` (FILTER_SANITIZE_STRING) សម្រាប់ឈ្មោះអ្នកប្រើ៕
     - ប្រើ \`password_verify\` ដើម្បីផ្ទៀងផ្ទាត់លេខសម្ងាត់៕
     - រក្សាទុកឈ្មោះអ្នកប្រើក្នុង \`$_SESSION['user']\` បើជោគជ័យ៕
     - Redirect ទៅ \`dashboard.php\` បើផ្ទៀងផ្ទាត់ជោគជ័យ៕
   - **dashboard.php**:
     - ពិនិត្យ \`$_SESSION['user']\` បើគ្មាន នាំទៅ \`login.php\`៕
     - ភ្ជាប់ទៅ Database \`cms\`៕
     - ប្រើ \`filter_var\` (FILTER_SANITIZE_STRING) សម្រាប់ចំណងជើង និងខ្លឹមសារ៕
     - បញ្ចូលអត្ថបទថ្មីទៅតារាង \`posts\` ដោយប្រើ Prepared Statement៕
     - ទាញទិន្នន័យអត្ថបទ (id, title, content) ពី \`posts\`៕
     - ប្រើ \`htmlspecialchars\` ដើម្បីការពារ XSS៕
   - **logout.php**:
     - បើក Session និងប្រើ \`session_destroy\` ដើម្បីចាកចេញ៕
     - Redirect ទៅ \`login.php\`៕
   - ប្រើ \`try-catch\` សម្រាប់គ្រប់គ្រងកំហុស៕

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`៕
     - \`color: #007bff;\` សម្រាប់ \`h1\`៕
     - \`margin: 20px;\` សម្រាប់ \`form\`៕
     - \`padding: 5px; margin: 5px;\` សម្រាប់ \`<input>\` និង \`<textarea>\` (ទទឹង 300px)៕
     - \`padding: 5px 10px;\` សម្រាប់ \`<input type="submit">\`៕
     - \`margin: 20px auto; border-collapse: collapse;\` សម្រាប់ \`table\`៕
     - \`border: 1px solid #ddd; padding: 8px;\` សម្រាប់ \`th\` និង \`td\`៕
     - \`background-color: #007bff; color: white;\` សម្រាប់ \`th\`៕
     - \`color: green;\` សម្រាប់សារជោគជ័យ (\`.message\`)៕
     - \`color: red;\` សម្រាប់សារកំហុស (\`.error\`)៕

**ការណែនាំ:**
- ត្រូវប្រាកដថា Database \`cms\` មានតារាង \`users\` (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50), password VARCHAR(255)) និង \`posts\` (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100), content TEXT)៕
- បញ្ចូលអ្នកប្រើគំរូ (ឧ. username: admin, password: hashed "password123")៕
- សាកល្បងការចូលប្រើប្រាស់ និងការបញ្ចូលអត្ថបទ៕
`,
    solution: `
**login.php**
\`\`\`php
<?php
session_start();
try {
    $pdo = new PDO("mysql:host=localhost;dbname=cms;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
        $password = $_POST['password'];
        $stmt = $pdo->prepare("SELECT password FROM users WHERE username = :username");
        $stmt->execute(['username' => $username]);
        $hash = $stmt->fetchColumn();
        if (password_verify($password, $hash)) {
            $_SESSION['user'] = $username;
            header("Location: dashboard.php");
            exit;
        } else {
            $message = "ឈ្មោះអ្នកប្រើ ឬលេខសម្ងាត់មិនត្រឹមត្រូវ!";
        }
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
  <title>PHP CMS - Login Lab</title>
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
    input[type="text"], input[type="password"] {
      padding: 5px;
      margin: 5px;
    }
    input[type="submit"] {
      padding: 5px 10px;
    }
    .error {
      color: red;
    }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ CMS!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះអ្នកប្រើ: </label>
    <input type="text" name="username"><br>
    <label>លេខសម្ងាត់: </label>
    <input type="password" name="password"><br>
    <input type="submit" value="ចូលប្រើប្រាស់">
  </form>
  <p class="error"><?php echo htmlspecialchars($message); ?></p>
</body>
</html>
\`\`\`
**dashboard.php**
\`\`\`php
<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}
try {
    $pdo = new PDO("mysql:host=localhost;dbname=cms;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $title = filter_var($_POST['title'], FILTER_SANITIZE_STRING);
        $content = filter_var($_POST['content'], FILTER_SANITIZE_STRING);
        if (empty($title) || empty($content)) {
            throw new Exception("ចំណងជើង និងខ្លឹមសារមិនអាចទទេ!");
        }
        $stmt = $pdo->prepare("INSERT INTO posts (title, content) VALUES (:title, :content)");
        $stmt->execute(['title' => $title, 'content' => $content]);
        $message = "បានបញ្ចូលអត្ថបទ!";
    }
    
    $stmt = $pdo->prepare("SELECT id, title, content FROM posts");
    $stmt->execute();
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    $message = "កំហុស: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP CMS - Dashboard Lab</title>
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
    input[type="text"], textarea {
      padding: 5px;
      margin: 5px;
      width: 300px;
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
  <h1>ផ្ទាំងគ្រប់គ្រង CMS</h1>
  <p>សូមស្វាគមន៍, <?php echo htmlspecialchars($_SESSION['user']); ?>! <a href="logout.php">ចាកចេញ</a></p>
  <form method="POST" action="">
    <label>ចំណងជើង: </label><br>
    <input type="text" name="title"><br>
    <label>ខ្លឹមសារ: </label><br>
    <textarea name="content"></textarea><br>
    <input type="submit" value="បញ្ចូលអត្ថបទ">
  </form>
  <p class="<?php echo strpos($message, 'កំហុស') === false ? 'message' : 'error'; ?>">
    <?php echo htmlspecialchars($message); ?>
  </p>
  <table>
    <tr>
      <th>ID</th>
      <th>ចំណងជើង</th>
      <th>ខ្លឹមសារ</th>
    </tr>
    <?php foreach ($posts as $post): ?>
      <tr>
        <td><?php echo htmlspecialchars($post['id']); ?></td>
        <td><?php echo htmlspecialchars($post['title']); ?></td>
        <td><?php echo htmlspecialchars($post['content']); ?></td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
\`\`\`
**logout.php**
\`\`\`php
<?php
session_start();
session_destroy();
header("Location: login.php");
exit;
?>
\`\`\`
`
  }
};

export default PHPLesson7_2Content;