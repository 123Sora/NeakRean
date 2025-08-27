import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson6_3Content: LessonContent = {
  title: 'ការធ្វើការជាមួយ APIs ក្នុង PHP',
  objectives: [
    'យល់ដឹងអំពី RESTful APIs និងការប្រើប្រាស់ពួកវាក្នុង PHP',
    'ស្វែងយល់ពីការប្រើ cURL ដើម្បីធ្វើ HTTP Requests',
    'ស្គាល់ការបង្កើត RESTful API ដោយប្រើ PHP',
    'អនុវត្តការគ្រប់គ្រងទិន្នន័យ JSON',
    'បន្ថែម Error Handling និង Security ក្នុងការធ្វើការជាឮ APIs',
    'បង្កើតកម្មវិធី PHP ដែលភ្ជាប់ជាមួយ API ខាងក្រៅ'
  ],
  content: `
# ការធ្វើការជាមួយ APIs ក្នុង PHP 🌐

---

**APIs** (Application Programming Interfaces) អនុញ្ញាតឱ្យកម្មវិធីផ្សេងៗគ្នាទំនាក់ទំនងជាមួយគ្នា។ នៅក្នុងមេរៀននេះ យើងនឹងសិក្សាពីការប្រើ **cURL** ដើម្បីភ្ជាប់ជាមួយ RESTful APIs និងការបង្កើត API ផ្ទាល់ខ្លួនក្នុង PHP។

---

## 1. ការប្រើ cURL ដើម្បីភ្ជាប់ជាមួយ API

**cURL** គឺជាបណ្ណាល័យ PHP សម្រាប់ធ្វើ HTTP Requests (GET, POST, ជាដើម)។

**ឧទាហរណ៍ GET Request:**

\`\`\`php
<?php
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://api.example.com/data");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($curl);
if (curl_errno($curl)) {
    echo "cURL Error: " . curl_error($curl);
} else {
    $data = json_decode($response, true);
    echo "<pre>";
    print_r($data);
    echo "</pre>";
}
curl_close($curl);
?>
\`\`\`

**ឧទាហរណ៍ POST Request:**

\`\`\`php
<?php
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://api.example.com/submit");
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode(['name' => 'សុភា']));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
$response = curl_exec($curl);
if (curl_errno($curl)) {
    echo "cURL Error: " . curl_error($curl);
} else {
    echo $response;
}
curl_close($curl);
?>
\`\`\`

---

## 2. ការបង្កើត RESTful API ក្នុង PHP

RESTful API ប្រើ HTTP Methods (GET, POST, PUT, DELETE) និង JSON សម្រាប់ទំនាក់ទំនង។

**ឧទាហរណ៍ Simple RESTful API:**

\`\`\`php
<?php
header('Content-Type: application/json');

try {
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $stmt = $pdo->prepare("SELECT id, name FROM students");
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['status' => 'success', 'data' => $data]);
    } elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $input = json_decode(file_get_contents('php://input'), true);
        $name = filter_var($input['name'], FILTER_SANITIZE_STRING);
        if (empty($name)) {
            throw new Exception("ឈ្មោះមិនអាចទទេ!");
        }
        $stmt = $pdo->prepare("INSERT INTO students (name) VALUES (:name)");
        $stmt->execute(['name' => $name]);
        echo json_encode(['status' => 'success', 'message' => 'បានបញ្ចូលទិន្នន័យ!']);
    }
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
\`\`\`

---

## 3. ការគ្រប់គ្រង JSON

JSON គឺជាទម្រង់ទិន្នន័យសម្រាប់ APIs។ PHP ប្រើ \`json_decode\` និង \`json_encode\`។

**ឧទាហរណ៍ JSON:**

\`\`\`php
<?php
$json = '{"name": "សុភា", "age": 20}';
$data = json_decode($json, true);
echo $data['name']; // បង្ហាញ: សុភា

$array = ['name' => 'លីនា', 'age' => 22];
echo json_encode($array); // បង្ហាញ: {"name":"លីនា","age":22}
?>
\`\`\`

---

## 4. Error Handling និង Security ក្នុង APIs

បន្ថែម **Error Handling** (ពី \`PHPLesson6_1Content\`) និង **Security** (ពី \`PHPLesson6_2Content\`) ដើម្បីធ្វើឱ្យ API មានសុវត្ថិភាព។

**ឧទាហរណ៍ Error Handling និង Security:**

\`\`\`php
<?php
header('Content-Type: application/json');

try {
    if (!isset($_SERVER['HTTP_API_KEY']) || $_SERVER['HTTP_API_KEY'] != 'secret_key') {
        throw new Exception("API Key មិនត្រឹមត្រូវ!");
    }
    $pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->prepare("SELECT id, name FROM students");
    $stmt->execute();
    echo json_encode(['status' => 'success', 'data' => $stmt->fetchAll(PDO::FETCH_ASSOC)]);
} catch (Exception $e) {
    http_response_code(401);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
\`\`\`

---

## 5. ការប្រើ API ក្នុងគេហទំព័រ

បង្កើតគេហទំព័រដែលភ្ជាប់ជាមួយ API ខាងក្រៅ។

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<?php
try {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://jsonplaceholder.typicode.com/users");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    if (curl_errno($curl)) {
        throw new Exception("cURL Error: " . curl_error($curl));
    }
    $users = json_decode($response, true);
    curl_close($curl);
} catch (Exception $e) {
    $error = "កំហុស: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Working with APIs</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    table { margin: 20px auto; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    th { background-color: #007bff; color: white; }
    .error { color: red; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ Working with APIs!</h1>
  <?php if (isset($error)): ?>
    <p class="error"><?php echo htmlspecialchars($error); ?></p>
  <?php else: ?>
    <table>
      <tr>
        <th>ID</th>
        <th>ឈ្មោះ</th>
        <th>អ៊ីម៉ែល</th>
      </tr>
      <?php foreach ($users as $user): ?>
        <tr>
          <td><?php echo htmlspecialchars($user['id']); ?></td>
          <td><?php echo htmlspecialchars($user['name']); ?></td>
          <td><?php echo htmlspecialchars($user['email']); ?></td>
        </tr>
      <?php endforeach; ?>
    </table>
  <?php endif; ?>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ GET Request ជាមួយ cURL</h3>
<p>ទាញទិន្នន័យពី API៕</p>
<pre><code class="language-php">
<?php
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://jsonplaceholder.typicode.com/posts");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($curl);
echo $response;
curl_close($curl);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ POST Request ជាមួយ cURL</h3>
<p>ផ្ញើទិន្នន័យទៅ API៕</p>
<pre><code class="language-php">
<?php
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://jsonplaceholder.typicode.com/posts");
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode(['title' => 'Test']));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($curl);
echo $response;
curl_close($curl);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត RESTful API</h3>
<p>API សម្រាប់ទទួល GET Request៕</p>
<pre><code class="language-php">
<?php
header('Content-Type: application/json');
echo json_encode(['status' => 'success', 'data' => ['name' => 'សុភា']]);
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ JSON Handling</h3>
<p>បម្លែង JSON ទៅ Array៕</p>
<pre><code class="language-php">
<?php
$json = '{"name": "លីនា"}';
$data = json_decode($json, true);
echo $data['name'];
?>
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ RESTful API គឺជាអ្វី?',
      options: [
        'បណ្ណាល័យ PHP',
        'ចំណុចប្រទាក់សម្រាប់ទំនាក់ទំនងរវាងកម្មវិធី',
        'Database',
        'HTML Framework'
      ],
      correct: 1,
      explanation: 'RESTful API គឺជាចំណុចប្រទាក់សម្រាប់ទំនាក់ទំនងរវាងកម្មវិធី៕'
    },
    {
      question: 'តើ cURL ក្នុង PHP ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Database',
        'ធ្វើ HTTP Requests',
        'បង្កើត JSON',
        'ការពារ XSS'
      ],
      correct: 1,
      explanation: 'cURL ប្រើសម្រាប់ធ្វើ HTTP Requests ទៅ APIs៕'
    },
    {
      question: 'តើ `CURLOPT_RETURNTRANSFER` ធ្វើអ្វី?',
      options: [
        'បញ្ជូនទិន្នន័យ',
        'ត្រឡប់ Response ជា String',
        'បិទ cURL',
        'កំណត់ Header'
      ],
      correct: 1,
      explanation: '`CURLOPT_RETURNTRANSFER` ត្រឡប់ Response ជា String ជំនួសឱ្យការបង្ហាញ៕'
    },
    {
      question: 'តើ `json_decode` ធ្វើអ្វី?',
      options: [
        'បម្លែង Array ទៅ JSON',
        'បម្លែង JSON ទៅ Array/Object',
        'បង្កើត API',
        'ផ្ញើ HTTP Request'
      ],
      correct: 1,
      explanation: '`json_decode` បម្លែង JSON ទៅ Array ឬ Object៕'
    },
    {
      question: 'តើ `json_encode` ធ្វើអ្វី?',
      options: [
        'បម្លែង JSON ទៅ Array',
        'បម្លែង Array/Object ទៅ JSON',
        'បង្កើត Database',
        'ការពារ SQL Injection'
      ],
      correct: 1,
      explanation: '`json_encode` បម្លែង Array ឬ Object ទៅ JSON៕'
    },
    {
      question: 'តើ HTTP Method ណាដែលប្រើសម្រាប់ទាញទិន្នន័យ?',
      options: [
        'POST',
        'GET',
        'PUT',
        'DELETE'
      ],
      correct: 1,
      explanation: 'GET ប្រើសម្រាប់ទាញទិន្នន័យពី API៕'
    },
    {
      question: 'តើ `header("Content-Type: application/json")` ធ្វើអ្វី?',
      options: [
        'កំណត់ Response ជា JSON',
        'បង្កើត API',
        'ផ្ញើ Request',
        'ការពារ XSS'
      ],
      correct: 0,
      explanation: '`header("Content-Type: application/json")` កំណត់ Response ជា JSON៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `$data = json_decode(\'{"name": "សុភា"}\', true); echo $data["name"];`',
      options: [
        'សុភា',
        'Error',
        'Nothing',
        'JSON'
      ],
      correct: 0,
      explanation: '`json_decode` បម្លែង JSON ទៅ Array និងបង្ហាញ "សុភា"៕'
    },
    {
      question: 'តើ `CURLOPT_POSTFIELDS` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ URL',
        'ផ្ញើទិន្នន័យក្នុង POST Request',
        'បង្ហាញ Response',
        'កំណត់ Header'
      ],
      correct: 1,
      explanation: '`CURLOPT_POSTFIELDS` ផ្ញើទិន្នន័យក្នុង POST Request៕'
    },
    {
      question: 'តើ API Key ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត JSON',
        'ផ្ទៀងផ្ទាត់ការចូលប្រើ API',
        'គ្រប់គ្រង Database',
        'ការពារ XSS'
      ],
      correct: 1,
      explanation: 'API Key ផ្ទៀងផ្ទាត់ការចូលប្រើ API៕'
    },
    {
      question: 'តើ `curl_exec` ធ្វើអ្វី?',
      options: [
        'បិទ cURL',
        'ប្រតិបត្តិ HTTP Request',
        'បង្កើត JSON',
        'កំណត់ URL'
      ],
      correct: 1,
      explanation: '`curl_exec` ប្រតិបត្តិ HTTP Request និងត្រឡប់ Response៕'
    },
    {
      question: 'តើ `http_response_code` ធ្វើអ្វី?',
      options: [
        'កំណត់ HTTP Status Code',
        'បង្កើត API',
        'ផ្ញើ Request',
        'ការពារ SQL Injection'
      ],
      correct: 0,
      explanation: '`http_response_code` កំណត់ HTTP Status Code សម្រាប់ Response៕'
    },
    {
      question: 'តើ RESTful API ប្រើទម្រង់ទិន្នន័យអ្វីជាទូទៅ?',
      options: [
        'HTML',
        'JSON',
        'CSS',
        'SQL'
      ],
      correct: 1,
      explanation: 'RESTful API ប្រើ JSON ជាទម្រង់ទិន្នន័យជាទូទៅ៕'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម? `echo json_encode(["name" => "លីនា"]);`',
      options: [
        'លីនា',
        '{"name":"លីនា"}',
        'Error',
        'Nothing'
      ],
      correct: 1,
      explanation: '`json_encode` បម្លែង Array ទៅ JSON: {"name":"លីនា"}៕'
    },
    {
      question: 'តើ `curl_close` ធ្វើអ្វី?',
      options: [
        'ប្រតិបត្តិ Request',
        'បិទ cURL Session',
        'បង្កើត JSON',
        'កំណត់ Header'
      ],
      correct: 1,
      explanation: '`curl_close` បិទ cURL Session៕'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ RESTful API?',
      options: [
        'បង្កើនល្បឿន Database',
        'អនុញ្ញាតឱ្យកម្មវិធីទំនាក់ទំនងគ្នា',
        'ការពារ XSS',
        'បង្កើត HTML'
      ],
      correct: 1,
      explanation: 'RESTful API អនុញ្ញាតឱ្យកម្មវិធីទំនាក់ទំនងគ្នា៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP ដែលភ្ជាប់ជាមួយ API ខាងក្រៅ (https://jsonplaceholder.typicode.com/users) ដើម្បីទាញទិន្នន័យអ្នកប្រើ និងបង្ហាញក្នុងតារាង៕

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title: "PHP Working with APIs Lab"៕

2. **Main Content:**
   - បន្ថែម \`<h1>\`: "សូមស្វាគមន៍មកកាន់ Working with APIs!"៕
   - បង្ហាញទិន្នន័យអ្នកប្រើ (ID, ឈ្មោះ, អ៊ីម៉ែល) ក្នុង \`<table>\`៕
   - បន្ថែម \`<p>\` សម្រាប់បង្ហាញសារកំហុស (បើមាន)៕

3. **PHP Functionality:**
   - ប្រើ cURL ដើម្បីធ្វើ GET Request ទៅ \`https://jsonplaceholder.typicode.com/users\`៕
   - ប្រើ \`CURLOPT_RETURNTRANSFER\` ដើម្បីទទួល Response ជា String៕
   - បម្លែង Response ទៅ Array ដោយប្រើ \`json_decode\`៕
   - ប្រើ \`try-catch\` ដើម្បីគ្រប់គ្រងកំហុស cURL ឬ JSON៕
   - ប្រើ \`htmlspecialchars\` ដើម្បីការពារ XSS នៅពេលបង្ហាញទិន្នន័យ៕

4. **Basic Styling:**
   - បន្ថែម \`<style>\`:
     - \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - \`background-color: #f8f9fa;\` សម្រាប់ \`body\`៕
     - \`color: #007bff;\` សម្រាប់ \`h1\`៕
     - \`margin: 20px auto; border-collapse: collapse;\` សម្រាប់ \`table\`៕
     - \`border: 1px solid #ddd; padding: 8px;\` សម្រាប់ \`th\` និង \`td\`៕
     - \`background-color: #007bff; color: white;\` សម្រាប់ \`th\`៕
     - \`color: red;\` សម្រាប់សារកំហុស (\`.error\`)៕

**ការណែនាំ:**
- ត្រូវប្រាកដថា PHP មាន cURL Extension បើក (ពិនិត្យក្នុង php.ini)៕
- សាកល្បងកូដដោយដំណើរការនៅ localhost (ឧ. XAMPP)៕
- ពិនិត្យទិន្នន័យដែលបង្ហាញក្នុងតារាង៕
`,
    solution: `
\`\`\`php
<?php
try {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://jsonplaceholder.typicode.com/users");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    if (curl_errno($curl)) {
        throw new Exception("cURL Error: " . curl_error($curl));
    }
    $users = json_decode($response, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("JSON Decode Error: " . json_last_error_msg());
    }
    curl_close($curl);
} catch (Exception $e) {
    $error = "កំហុស: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Working with APIs Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f8f9fa;
    }
    h1 {
      color: #007bff;
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
    .error {
      color: red;
    }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ Working with APIs!</h1>
  <?php if (isset($error)): ?>
    <p class="error"><?php echo htmlspecialchars($error); ?></p>
  <?php else: ?>
    <table>
      <tr>
        <th>ID</th>
        <th>ឈ្មោះ</th>
        <th>អ៊ីម៉ែល</th>
      </tr>
      <?php foreach ($users as $user): ?>
        <tr>
          <td><?php echo htmlspecialchars($user['id']); ?></td>
          <td><?php echo htmlspecialchars($user['name']); ?></td>
          <td><?php echo htmlspecialchars($user['email']); ?></td>
        </tr>
      <?php endforeach; ?>
    </table>
  <?php endif; ?>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson6_3Content;