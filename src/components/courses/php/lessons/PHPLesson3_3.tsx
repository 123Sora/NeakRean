import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson3_3Content: LessonContent = {
  title: 'Sessions និង Cookies ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី Sessions និង Cookies នៅក្នុង PHP',
    'ស្វែងយល់ពីការប្រើ `session_start` និង `$_SESSION` ដើម្បីគ្រប់គ្រង Sessions',
    'ស្គាល់ការប្រើ `setcookie` និង `$_COOKIE` ដើម្បីគ្រប់គ្រង Cookies',
    'អនុវត្តការប្រើ Sessions និង Cookies ដើម្បីរក្សាទុកទិន្នន័យអ្នកប្រើ',
    'យល់ពីការគ្រប់គ្រងអាយុកាលរបស់ Sessions និង Cookies'
  ],
  content: `
# Sessions និង Cookies ក្នុង PHP 🔒

---

**Sessions** និង **Cookies** គឺជាវិធីសាស្ត្រសម្រាប់រក្សាទុកទិន្នន័យអ្នកប្រើនៅក្នុងគេហទំព័រ។ **Sessions** រក្សាទុកទិន្នន័យនៅខាង Server ខណៈ **Cookies** រក្សាទុកទិន្នន័យនៅខាង Client (Browser)។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការប្រើ Sessions និង Cookies ដើម្បីគ្រប់គ្រងទិន្នន័យអ្នកប្រើ។

---

## 1. Sessions ក្នុង PHP

**Sessions** ប្រើដើម្បីរក្សាទុកទិន្នន័យអ្នកប្រើនៅខាង Server ក្នុងអំឡុងពេលបើក Browser។

- **\`session_start()\`**: ចាប់ផ្តើម Session នៅដើមឯកសារ PHP។
- **\`$_SESSION\`**: Array សម្រាប់រក្សាទុក និងទាញយកទិន្នន័យ Session។

**ឧទាហរណ៍ Session:**

\`\`\`php
<?php
session_start();
$_SESSION['username'] = 'សុភា';
echo "សួស្តី, " . $_SESSION['username'];
?>
\`\`\`

**ការពិនិត្យ និងលុប Session:**

\`\`\`php
<?php
session_start();
if (isset($_SESSION['username'])) {
    echo "អ្នកបានចូលជា: " . $_SESSION['username'];
    unset($_SESSION['username']); // លុប Variable តែមួយ
    session_destroy(); // បញ្ចប់ Session
}
?>
\`\`\`

---

## 2. Cookies ក្នុង PHP

**Cookies** រក្សាទុកទិន្នន័យនៅ Browser ដើម្បីប្រើនៅពេលក្រោយ។

- **\`setcookie()\`**: បង្កើត Cookie។
- **\`$_COOKIE\`**: Array សម្រាប់ទាញយកទិន្នន័យ Cookie។

**ឧទាហរណ៍ Cookie:**

\`\`\`php
<?php
setcookie('username', 'សុភា', time() + 3600); // Cookie អស់សុពលភាពក្នុង 1 ម៉ោង
if (isset($_COOKIE['username'])) {
    echo "សួស្តី, " . $_COOKIE['username'];
}
?>
\`\`\`

**ការលុប Cookie:**

\`\`\`php
<?php
setcookie('username', '', time() - 3600); // កំណត់អាយុកាលអវិជ្ជមានដើម្បីលុប
echo "Cookie ត្រូវបានលុប!";
?>
\`\`\`

---

## 3. ការគ្រប់គ្រងអាយុកាល

- **Sessions**: អស់សុពលភាពនៅពេល Browser បិទ ឬប្រើ \`session_destroy()\`។
- **Cookies**: អាយុកាលកំណត់ដោយ \`setcookie\` (ឧ. \`time() + 3600\` សម្រាប់ 1 ម៉ោង)។

**ឧទាហរណ៍អាយុកាល Cookie:**

\`\`\`php
<?php
setcookie('theme', 'dark', time() + (86400 * 30)); // Cookie សម្រាប់ 30 ថ្ងៃ
echo "បានកំណត់ Theme ជា: " . $_COOKIE['theme'];
?>
\`\`\`

---

## 4. ការប្រើ Sessions និង Cookies ក្នុងគេហទំព័រ

Sessions និង Cookies ត្រូវបានប្រើដើម្បីបង្កើតគេហទំព័រដែលចងចាំអ្នកប្រើ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Sessions and Cookies</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    form { margin: 20px; }
    input[type="text"] { padding: 5px; margin: 5px; }
    input[type="submit"] { padding: 5px 10px; }
    .message { color: green; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Sessions និង Cookies!</h1>
  <?php
    session_start();
    $message = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
        if (!empty($username)) {
            $_SESSION['username'] = $username;
            setcookie('username', $username, time() + 3600);
            $message = "បានរក្សាទុកឈ្មោះអ្នកប្រើ!";
        } else {
            $message = "សូមបញ្ចូលឈ្មោះអ្នកប្រើ!";
        }
    }
    $display_name = isset($_SESSION['username']) ? $_SESSION['username'] : (isset($_COOKIE['username']) ? $_COOKIE['username'] : '');
  ?>
  <form method="POST" action="">
    <label>ឈ្មោះអ្នកប្រើ: </label>
    <input type="text" name="username" value="<?php echo htmlspecialchars($display_name); ?>">
    <input type="submit" value="រក្សាទុក">
  </form>
  <p class="message"><?php echo $message; ?></p>
  <?php if ($display_name): ?>
    <p>សួស្តី, <?php echo htmlspecialchars($display_name); ?>!</p>
  <?php endif; ?>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Session</h3>
<p>រក្សាទុក និងបង្ហាញឈ្មោះអ្នកប្រើជាមួយ Session។</p>
<pre><code class="language-php">
<?php
session_start();
$_SESSION['username'] = 'សុភា';
echo "សួស្តី, " . $_SESSION['username'];
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Cookie</h3>
<p>រក្សាទុក និងបង្ហាញឈ្មោះអ្នកប្រើជាមួយ Cookie។</p>
<pre><code class="language-php">
<?php
setcookie('username', 'សុភា', time() + 3600);
if (isset($_COOKIE['username'])) {
    echo "សួស្តី, " . $_COOKIE['username'];
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការលុប Session</h3>
<p>លុប Session Variable និងបញ្ចប់ Session។</p>
<pre><code class="language-php">
<?php
session_start();
if (isset($_SESSION['username'])) {
    unset($_SESSION['username']);
    session_destroy();
    echo "Session ត្រូវបានលុប!";
}
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការលុប Cookie</h3>
<p>លុប Cookie ដោយកំណត់អាយុកាលអវិជ្ជមាន។</p>
<pre><code class="language-php">
<?php
setcookie('username', '', time() - 3600);
echo "Cookie ត្រូវបានលុប!";
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Session ក្នុង PHP គឺជាអ្វី?',
      options: [
        'ទិន្នន័យដែលរក្សាទុកនៅ Browser',
        'ទិន្នន័យដែលរក្សាទុកនៅ Server',
        'ប្រភេទ Array',
        'Function សម្រាប់គណនា'
      ],
      correct: 1,
      explanation: 'Session រក្សាទុកទិន្នន័យនៅខាង Server ក្នុងអំឡុងពេលបើក Browser។'
    },
    {
      question: 'តើ Cookie ក្នុង PHP គឺជាអ្វី?',
      options: [
        'ទិន្នន័យដែលរក្សាទុកនៅ Server',
        'ទិន្នន័យដែលរក្សាទុកនៅ Browser',
        'ប្រភេទ Array',
        'Function សម្រាប់គណនា'
      ],
      correct: 1,
      explanation: 'Cookie រក្សាទុកទិន្នន័យនៅ Browser សម្រាប់ប្រើនៅពេលក្រោយ។'
    },
    {
      question: 'តើ Function ណាដែលប្រើដើម្បីចាប់ផ្តើម Session?',
      options: [
        'start_session()',
        'session_start()',
        'begin_session()',
        'session_create()'
      ],
      correct: 1,
      explanation: '`session_start()` ចាប់ផ្តើម Session នៅដើមឯកសារ PHP។'
    },
    {
      question: 'តើ Array ណាដែលប្រើសម្រាប់រក្សាទុកទិន្នន័យ Session?',
      options: [
        '$_COOKIE',
        '$_SESSION',
        '$_POST',
        '$_GET'
      ],
      correct: 1,
      explanation: '`$_SESSION` ជា Array សម្រាប់រក្សាទុកទិន្នន័យ Session។'
    },
    {
      question: 'តើ Function ណាដែលប្រើសម្រាប់បង្កើត Cookie?',
      options: [
        'create_cookie()',
        'setcookie()',
        'cookie_set()',
        'make_cookie()'
      ],
      correct: 1,
      explanation: '`setcookie()` ប្រើសម្រាប់បង្កើត Cookie។'
    },
    {
      question: 'តើ Array ណាដែលប្រើសម្រាប់ទាញយកទិន្នន័យ Cookie?',
      options: [
        '$_SESSION',
        '$_POST',
        '$_COOKIE',
        '$_GET'
      ],
      correct: 2,
      explanation: '`$_COOKIE` ជា Array សម្រាប់ទាញយកទិន្នន័យ Cookie។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `session_start(); $_SESSION["user"] = "សុភា"; echo $_SESSION["user"];`',
      options: [
        'សុភា',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 0,
      explanation: 'កូដនេះរក្សាទុក "សុភា" ក្នុង `$_SESSION["user"]` និងបង្ហាញ "សុភា"។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `setcookie("theme", "dark", time() + 3600); echo $_COOKIE["theme"];`',
      options: [
        'dark',
        'Error',
        'Nothing',
        'NULL'
      ],
      correct: 2,
      explanation: '`$_COOKIE["theme"]` មិនអាចចូលប្រើបានភ្លាមៗបន្ទាប់ពី `setcookie` ព្រោះ Cookie ត្រូវការពេល Request បន្ទាប់។'
    },
    {
      question: 'តើវិធីណាដែលប្រើដើម្បីលុប Session ទាំងមូល?',
      options: [
        'unset($_SESSION)',
        'session_destroy()',
        'session_delete()',
        'clear_session()'
      ],
      correct: 1,
      explanation: '`session_destroy()` បញ្ចប់ Session ទាំងមូល។'
    },
    {
      question: 'តើវិធីណាដែលប្រើដើម្បីលុប Cookie?',
      options: [
        'setcookie("name", "", time() + 3600)',
        'setcookie("name", "", time() - 3600)',
        'unset($_COOKIE["name"])',
        'delete_cookie("name")'
      ],
      correct: 1,
      explanation: 'កំណត់អាយុកាលអវិជ្ជមាន (ឧ. `time() - 3600`) ដើម្បីលុប Cookie។'
    },
    {
      question: 'តើ `isset($_SESSION["key"])` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Session',
        'ពិនិត្យថាតើ Session Variable មានឬអត់',
        'លុប Session',
        'រក្សាទុក Cookie'
      ],
      correct: 1,
      explanation: '`isset($_SESSION["key"])` ពិនិត្យថាតើ Session Variable មានឬអត់។'
    },
    {
      question: 'តើអាយុកាលលំនាំដើមរបស់ Session គឺជាអ្វី?',
      options: [
        'រហូតដល់ Browser បិទ',
        '1 ម៉ោង',
        '30 ថ្ងៃ',
        'ជារៀងរហូត'
      ],
      correct: 0,
      explanation: 'Session អស់សុពលភាពនៅពេល Browser បិទ លុះត្រាតែកំណត់ផ្សេង។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `session_start(); unset($_SESSION["user"]); echo isset($_SESSION["user"]) ? "Set" : "Not Set";`',
      options: [
        'Set',
        'Not Set',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: '`unset($_SESSION["user"])` លុប Variable ដូច្នេះ `isset` ត្រឡប់ `false` និងបង្ហាញ "Not Set"។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលបង្កើត Form សម្រាប់បញ្ចូលឈ្មោះអ្នកប្រើ និងរក្សាទុកវាទៅក្នុង Session និង Cookie ព្រមទាំងបង្ហាញសារស្វាគមន៍។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title: "PHP Sessions and Cookies Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ PHP Sessions និង Cookies!"។
   - បង្កើត Form ដែលមាន \`<input>\` សម្រាប់បញ្ចូលឈ្មោះអ្នកប្រើ និងប៊ូតុង "រក្សាទុក" ដោយប្រើ \`method="POST"\`។
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញសារជោគជ័យ ឬកំហុស។
   - បន្ថែម \`<p>\` ដើម្បីបង្ហាញឈ្មោះអ្នកប្រើពី Session ឬ Cookie។

3. **PHP Functionality:**
   - ប្រើ \`session_start()\` ដើម្បីចាប់ផ្តើម Session។
   - ប្រើ \`$_POST\` ដើម្បីទទួលឈ្មោះអ្នកប្រើ។
   - ផ្ទៀងផ្ទាត់ថាឈ្មោះមិនទទេ និងសម្អាតទិន្នន័យដោយ \`filter_var\`។
   - រក្សាទុកឈ្មោះទៅ \`$_SESSION\` និង \`setcookie\` (អាយុកាល 1 ម៉ោង)។
   - បង្ហាញឈ្មោះអ្នកប្រើពី \`$_SESSION\` ឬ \`$_COOKIE\` ប្រសិនបើមាន។

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`
     - \`color: #007bff;\` សម្រាប់ \`h1\`។
     - \`color: green;\` សម្រាប់សារជោគជ័យ (\`.message\`)។
     - \`padding: 5px; margin: 5px;\` សម្រាប់ \`<input>\`។
     - \`padding: 5px 10px;\` សម្រាប់ \`<input type="submit">\`។

**ការណែនាំ:** រក្សាទុកជា .php និងដំណើរការតាម localhost។
    `,
    solution: `
\`\`\`php
<?php
session_start();
$message = "";
$display_name = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
    if (!empty($username)) {
        $_SESSION['username'] = $username;
        setcookie('username', $username, time() + 3600);
        $message = "បានរក្សាទុកឈ្មោះអ្នកប្រើ!";
    } else {
        $message = "សូមបញ្ចូលឈ្មោះអ្នកប្រើ!";
    }
}
$display_name = isset($_SESSION['username']) ? $_SESSION['username'] : (isset($_COOKIE['username']) ? $_COOKIE['username'] : '');
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Sessions and Cookies Lab</title>
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
    .message {
      color: green;
    }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP Sessions និង Cookies!</h1>
  <form method="POST" action="">
    <label>ឈ្មោះអ្នកប្រើ: </label>
    <input type="text" name="username" value="<?php echo htmlspecialchars($display_name); ?>">
    <input type="submit" value="រក្សាទុក">
  </form>
  <p class="message"><?php echo $message; ?></p>
  <?php if ($display_name): ?>
    <p>សួស្តី, <?php echo htmlspecialchars($display_name); ?>!</p>
  <?php endif; ?>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson3_3Content;