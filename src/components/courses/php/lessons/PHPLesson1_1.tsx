import type { LessonContent } from '../../../../types/LessonTypes';

const PHPLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី PHP',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា PHP និងតួនាទីរបស់វា',
    'ស្វែងយល់ពីប្រវត្តិសង្ខេបនៃ PHP',
    'ស្គាល់ការប្រើប្រាស់ PHP ក្នុង Web Development',
    'យល់ពីរបៀបដែល PHP ដំណើរការជាមួយ Server និង Browser',
    'ប្រៀបធៀប PHP ជាមួយ HTML និង JavaScript'
  ],
  content: `
# ណែនាំអំពី PHP 🌐✨

---

**PHP** (Hypertext Preprocessor) គឺជាភាសាសរសេរកម្មវិធី Server-side ដែលប្រើសម្រាប់បង្កើតគេហទំព័រដែលមានភាព Dynamic។ វាត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់ Backend Development និងធ្វើការជាមួយ Database។ PHP គឺជាភាសា Open-source ដែលមានសហគមន៍អ្នកអភិវឌ្ឍន៍ធំ និងត្រូវបានប្រើនៅក្នុងគេហទំព័រល្បីៗជាច្រើនដូចជា Facebook, Wikipedia និង WordPress។

---

## 1. អ្វីទៅជា PHP?

PHP គឺជាភាសាសរសេរកម្មវិធី Open-source ដែលត្រូវបានរចនាឡើងជាពិសេសសម្រាប់ Web Development។ វាអនុញ្ញាតឱ្យអ្នកបង្កើតកូដដែលដំណើរការនៅលើ Server មុននឹងបញ្ជូនលទ្ធផលទៅ Browser។ លក្ខណៈពិសេសរបស់ PHP រួមមាន៖
- អាចបង្កប់កូដ PHP នៅក្នុងឯកសារ HTML ដោយប្រើសញ្ញា \`<?php ... ?>\`។
- គាំទ្រការធ្វើការជាមួយ Database ដូចជា MySQL, PostgreSQL, SQLite ជាដើម។
- មានមុខងារស្រាប់សម្រាប់គ្រប់គ្រង Sessions, Cookies, Forms, Files និង Encryption។
- អាចបង្កើត API សម្រាប់ Web Applications និង Mobile Apps។
- មាន Frameworks ដ៏ពេញនិយមដូចជា Laravel, Symfony, CodeIgniter ដែលជួយសម្រួលការអភិវឌ្ឍ។

PHP ត្រូវបានប្រើប្រាស់នៅក្នុង CMS (Content Management Systems) ដូចជា WordPress, Drupal, និង Joomla ដែលធ្វើឱ្យវាក្លាយជាជម្រើសដ៏ល្អសម្រាប់ការបង្កើតគេហទំព័រ។

---

## 2. ប្រវត្តិសង្ខេបនៃ PHP

PHP មានប្រវត្តិដ៏វែងឆ្ងាយ និងបានវិវឌ្ឍជាច្រើនដង៖
- **១៩៩៤:** PHP ត្រូវបានបង្កើតឡើងដោយ **Rasmus Lerdorf** ដើម្បីគ្រប់គ្រងគេហទំព័រផ្ទាល់ខ្លួនរបស់គាត់។ ដំបូងវាត្រូវបានគេហៅថា "Personal Home Page Tools"។
- **១៩៩៧:** PHP 2.0 ត្រូវបានចេញផ្សាយជាមួយមុខងារបន្ថែម និងការគាំទ្រដល់ Database។
- **១៩៩៨:** PHP 3.0 បានផ្លាស់ប្តូរឈ្មោះទៅជា "Hypertext Preprocessor" និងក្លាយជា Open-source ពេញលេញ។
- **២០០០:** PHP 4.0 បាននាំមកនូវ Zend Engine ដែលធ្វើឱ្យ PHP មានល្បឿនលឿនជាងមុន។
- **២០០៤:** PHP 5 បាននាំមកនូវ Object-Oriented Programming (OOP) និងការគាំទ្រដល់ XML ប្រសើរឡើង។
- **២០១៥:** PHP 7 បានធ្វើឱ្យប្រសើរឡើងនូវ Performance (លឿនជាង PHP 5 ដល់ទៅ ២ ដង) និងបន្ថែម Features ទំនើបៗដូចជា Type Declarations។
- **២០២០:** PHP 8 បាននាំមកនូវ JIT (Just-In-Time) Compilation, Attributes, Union Types និង Match Expressions។
- **២០២៤:** PHP 8.4 ត្រូវបានចេញផ្សាយជាមួយការធ្វើឱ្យប្រសើរឡើងនូវ Syntax និង Performance បន្ថែម។
- បច្ចុប្បន្ន (ឆ្នាំ ២០២៥) PHP គឺជាភាសាដ៏សំខាន់សម្រាប់ Backend Web Development ដោយមានកំណែចុងក្រោយបំផុតគឺ PHP 8.4 និង PHP 8.5 កំពុងស្ថិតនៅក្នុងដំណាក់កាលអភិវឌ្ឍ។

---

## 3. តើ PHP ប្រើសម្រាប់អ្វី?

PHP ត្រូវបានប្រើជាចម្បងសម្រាប់ការអភិវឌ្ឍគេហទំព័រ ប៉ុន្តែវាមានការប្រើប្រាស់ច្រើនយ៉ាង៖
- **Backend Development:** បង្កើត Server-side Logic សម្រាប់គេហទំព័រ ដូចជាការគ្រប់គ្រង User Authentication និង Authorization។
- **Database Integration:** ធ្វើការជាមួយ Databases ដូចជា MySQL, PostgreSQL, MongoDB ដើម្បីរក្សាទុក និងទាញយកទិន្នន័យ។
- **Content Management Systems (CMS):** ដូចជា WordPress (ដែលប្រើ PHP សម្រាប់ ៤០% នៃគេហទំព័រទាំងអស់នៅលើអ៊ីនធឺណិត), Joomla, និង Drupal។
- **E-commerce Platforms:** ដូចជា Magento, WooCommerce (Plugin សម្រាប់ WordPress), និង Shopify (ផ្នែកខ្លះ)។
- **Web Frameworks:** ប្រើជាមួយ Laravel (សម្រាប់ MVC Applications), Symfony (សម្រាប់ Enterprise Apps), និង CakePHP។
- **API Development:** បង្កើត RESTful APIs សម្រាប់កម្មវិធី Mobile ឬ Frontend Frameworks ដូចជា React ឬ Vue.js។
- **Command-Line Scripts:** PHP ក៏អាចប្រើសម្រាប់ Scripts នៅលើ Command Line ដូចជា Automation Tasks។

---

## 4. តើ PHP ដំណើរការនៅទីណា?

PHP គឺជាភាសា Server-side ដូច្នេះវាដំណើរការនៅលើ Server មិនមែននៅលើ Browser របស់អ្នកប្រើប្រាស់ទេ។
- **Server:** PHP ដំណើរការនៅលើ Web Server ដូចជា Apache, Nginx, ឬ IIS។ វាត្រូវការបរិស្ថានដូចជា XAMPP, WAMP, ឬ MAMP សម្រាប់ការអភិវឌ្ឍ Local។
- **Client-Server Interaction:** 
  1. Browser បញ្ជូន Request (ឧទាហរណ៍៖ GET ឬ POST) ទៅ Server។
  2. Server រកឯកសារ PHP ហើយដំណើរការ Code PHP។
  3. PHP អាចធ្វើការជាមួយ Database ឬ Files ដើម្បីបង្កើត Dynamic Content។
  4. Server បញ្ជូនលទ្ធផលជា HTML, CSS, JS ត្រឡប់ទៅ Browser។
- ភាពខុសគ្នាពី Client-side Languages៖ PHP មិនអាចមើលឃើញ Code នៅ Browser ទេ ដែលធ្វើឱ្យវាមានសុវត្ថិភាពជាងសម្រាប់ Logic សំខាន់ៗ។

---

## 5. ការប្រៀបធៀប PHP ជាមួយ HTML និង JavaScript

| ភាសា         | គោលបំណង                              | ឧទាហរណ៍ការប្រើប្រាស់                       | ទីតាំងដំណើរការ |
| :------------ | :------------------------------------- | :------------------------------------------ | :--------------- |
| **HTML**      | កំណត់រចនាសម្ព័ន្ធ (Structure) នៃគេហទំព័រ | បង្កើត Elements ដូចជា \`<h1>\`, \`<p>\`, \`<div>\` | Browser (Client-side) |
| **CSS**       | កំណត់រចនាបថ (Style) និងការបង្ហាញ     | កែប្រែពណ៌, ទំហំ, ប្លង់ (Layout)            | Browser (Client-side) |
| **JavaScript**| បន្ថែមអន្តរកម្ម (Interactivity) នៅ Client-side | គ្រប់គ្រង Events, Animations, API Calls   | Browser (Client-side) ឬ Server (Node.js) |
| **PHP**       | បង្កើត Dynamic Content នៅ Server-side | គ្រប់គ្រង Database, Sessions, Forms       | Server-side |

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`php
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Intro</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }
    h1 { color: #007bff; }
    p { font-size: 18px; }
    button { padding: 10px 20px; background-color: #007bff; color: white; border: none; cursor: pointer; }
    button:hover { background-color: #0056b3; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP!</h1>
  <p><?php echo "សួស្តី! នេះជា PHP ដែលបង្កើតនៅ Server-side!"; ?></p>
  <p>កាលបរិច្ឆេទបច្ចុប្បន្ន៖ <?php echo date("Y-m-d H:i:s"); ?></p>
</body>
</html>
\`\`\`

នៅក្នុងឧទាហរណ៍ខាងលើ:
- **HTML** បង្កើតរចនាសម្ព័ន្ធ (Structure) នៃទំព័រ។
- **CSS** កែប្រែរចនាបថ (Style) ដូចជាពណ៌ និងការរៀបចំ។
- **PHP** បង្កើតខ្លឹមសារដែល Dynamic ដូចជាសារ និងកាលបរិច្ឆេទ។

---

## 6. ហេតុអ្វីត្រូវរៀន PHP?

PHP គឺជាភាសាដ៏ល្អសម្រាប់អ្នកចាប់ផ្តើមនៅក្នុង Web Development ដោយសារតែ៖
- **ភាពងាយស្រួល:** Syntax របស់ PHP ស្រដៀងនឹង C ឬ JavaScript ដែលធ្វើឱ្យងាយរៀន។ អ្នកអាចសរសេរ Code សាមញ្ញដោយមិនចាំបាច់ Compile។
- **តម្រូវការទីផ្សារ:** PHP ត្រូវបានប្រើនៅក្នុងគេហទំព័រជាច្រើន (ជាង ៧៥% នៃគេហទំព័រ Backend) រួមទាំង WordPress ដែលមានតម្រូវការការងារខ្ពស់។
- **សហគមន៍ធំ:** មានឯកសារ និងឧបករណ៍ជំនួយជាច្រើន ដូចជា PHP.net, Stack Overflow, និង Composer (Package Manager)។
- **ធ្វើការជាមួយ Database:** PHP មានភាពងាយស្រួលក្នុងការធ្វើការជាមួយ MySQL និង Database ផ្សេងទៀត តាមរយៈ PDO ឬ MySQLi។
- **ឥតគិតថ្លៃ និង Cross-Platform:** PHP ឥតគិតថ្លៃ និងដំណើរការលើ Windows, Linux, macOS។
- **សុវត្ថិភាព និង Performance:** កំណែថ្មីៗមានការកែលម្អសុវត្ថិភាព (ដូចជា Prepared Statements) និងល្បឿនលឿន។
- **ភាពបត់បែន:** អាចប្រើជាមួយ Frontend Technologies ដូចជា HTML, CSS, JS និង Frameworks ដទៃ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្ហាញសារជាមួយ PHP</h3>
<p>សារនឹងត្រូវបានបង្កើតនៅ Server-side។</p>
<pre><code class="language-php">
<php
  echo "សួស្តី! នេះជា PHP!";
>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្ហាញកាលបរិច្ឆេទបច្ចុប្បន្ន</h3>
<p>កាលបរិច្ឆេទ៖ <?php echo date("Y-m-d"); ?></p>
<pre><code class="language-php">
<?php
  echo date("Y-m-d");
?>
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្ហាញព័ត៌មាន Server</h3>
<p>ព័ត៌មាន Server: <?php echo $_SERVER['SERVER_NAME']; ?></p>
<pre><code class="language-php">
<?php
  echo $_SERVER['SERVER_NAME'];
?>;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Variable សាមញ្ញ</h3>
<pre><code class="language-php">
<?php
  $greeting = "សួស្តីពី PHP!";
  echo $greeting;
?>;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ PHP គឺជាអ្វី?',
      options: [
        'ភាសាសម្រាប់រចនារចនាបថគេហទំព័រ',
        'ភាសាសរសេរកម្មវិធី Server-side សម្រាប់ Web Development',
        'ភាសាសម្រាប់បង្កើតរចនាសម្ព័ន្ធ HTML',
        'ឧបករណ៍សម្រាប់ Testing Code'
      ],
      correct: 1,
      explanation: 'PHP គឺជាភាសាសរសេរកម្មវិធី Server-side ដែលប្រើសម្រាប់បង្កើត Dynamic Content។'
    },
    {
      question: 'តើនរណាបានបង្កើត PHP?',
      options: [
        'Brendan Eich',
        'Rasmus Lerdorf',
        'Tim Berners-Lee',
        'Mark Zuckerberg'
      ],
      correct: 1,
      explanation: 'PHP ត្រូវបានបង្កើតឡើងដោយ Rasmus Lerdorf ក្នុងឆ្នាំ ១៩៩៤។'
    },
    {
      question: 'តើ PHP ប្រើសម្រាប់អ្វីខ្លះ?',
      options: [
        'Frontend Development ប៉ុណ្ណោះ',
        'Backend Development និង Database Integration',
        'ការរចនារូបភាព',
        'Mobile Apps ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'PHP ត្រូវបានប្រើសម្រាប់ Backend Development និងធ្វើការជាមួយ Database។'
    },
    {
      question: 'តើ PHP ដំណើរការនៅទីណា?',
      options: [
        'នៅក្នុង Browser ប៉ុណ្ណោះ',
        'នៅក្នុង Web Server',
        'នៅក្នុង Database',
        'នៅក្នុង Client-side'
      ],
      correct: 1,
      explanation: 'PHP ដំណើរការនៅលើ Web Server ដើម្បីបង្កើត Dynamic Content។'
    },
    {
      question: 'តើភាពខុសគ្នារវាង PHP និង JavaScript គឺជាអ្វី?',
      options: [
        'PHP ដំណើរការនៅ Client-side ឯ JavaScript នៅ Server-side',
        'PHP ដំណើរការនៅ Server-side ឯ JavaScript នៅ Client-side',
        'ទាំងពីរដំណើរការនៅ Client-side',
        'ទាំងពីរប្រើសម្រាប់ Database'
      ],
      correct: 1,
      explanation: 'PHP ដំណើរការនៅ Server-side ខណៈ JavaScript ដំណើរការនៅ Client-side។'
    },
    {
      question: 'តើ PHP តំណាងឱ្យអ្វី?',
      options: [
        'Personal Home Page',
        'Hypertext Preprocessor',
        'PHP Hyper Processor',
        'Public HTML Processor'
      ],
      correct: 1,
      explanation: 'PHP តំណាងឱ្យ Hypertext Preprocessor ដែលជាឈ្មោះផ្លូវការរបស់វា។'
    },
    {
      question: 'តើឆ្នាំណាដែល PHP 5 ត្រូវបានចេញផ្សាយ?',
      options: [
        '១៩៩៧',
        '២០០៤',
        '២០១៥',
        '២០២០'
      ],
      correct: 1,
      explanation: 'PHP 5 ត្រូវបានចេញផ្សាយក្នុងឆ្នាំ ២០០៤ ដោយនាំមកនូវ OOP។'
    },
    {
      question: 'តើ CMS ដ៏ពេញនិយមណាដែលប្រើ PHP?',
      options: [
        'React',
        'WordPress',
        'Angular',
        'Vue.js'
      ],
      correct: 1,
      explanation: 'WordPress គឺជា CMS ដ៏ពេញនិយមដែលប្រើ PHP។'
    },
    {
      question: 'តើ Server Software ណាដែលត្រូវបានប្រើជាទូទៅជាមួយ PHP?',
      options: [
        'Apache',
        'Firebase',
        'MongoDB',
        'Redis'
      ],
      correct: 0,
      explanation: 'Apache គឺជា Web Server ដែលត្រូវបានប្រើជាទូទៅជាមួយ PHP។'
    },
    {
      question: 'តើ PHP គឺជាភាសា Client-side ឬ Server-side?',
      options: [
        'Client-side',
        'Server-side',
        'ទាំងពីរ',
        'គ្មាន'
      ],
      correct: 1,
      explanation: 'PHP គឺជាភាសា Server-side។'
    },
    {
      question: 'តើ Database ណាដែលត្រូវបានប្រើជាទូទៅជាមួយ PHP?',
      options: [
        'MySQL',
        'Cassandra',
        'Neo4j',
        'Elasticsearch'
      ],
      correct: 0,
      explanation: 'MySQL គឺជា Database ដែលត្រូវបានប្រើជាទូទៅជាមួយ PHP។'
    },
    {
      question: 'តើឯកសារ PHP មានផ្នែកបន្ថែមឯកសារអ្វី?',
      options: [
        '.html',
        '.php',
        '.js',
        '.css'
      ],
      correct: 1,
      explanation: 'ឯកសារ PHP មានផ្នែកបន្ថែម .php។'
    },
    {
      question: 'តើកំណែ PHP ណាដែលបាននាំមកនូវ JIT Compilation?',
      options: [
        'PHP 5',
        'PHP 7',
        'PHP 8',
        'PHP 4'
      ],
      correct: 2,
      explanation: 'PHP 8 បាននាំមកនូវ JIT Compilation។'
    },
    {
      question: 'តើ Framework ណាដែលពេញនិយមសម្រាប់ PHP?',
      options: [
        'React',
        'Laravel',
        'Angular',
        'Vue.js'
      ],
      correct: 1,
      explanation: 'Laravel គឺជា Framework ដ៏ពេញនិយមសម្រាប់ PHP។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ PHP មួយដែលបង្ហាញអំពីមុខងារជាមូលដ្ឋានរបស់ PHP។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ PHP ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` នៅក្នុង \`<head>\`។
   - កំណត់ Title នៃឯកសារ៖ "PHP Introduction Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "សូមស្វាគមន៍មកកាន់ PHP!"។
   - បន្ថែម \`<p>\` ដែលបង្ហាញសារដែលបង្កើតដោយ PHP៖ "សួស្តី! នេះជា PHP!"។
   - បន្ថែម \`<p>\` មួយទៀតដែលបង្ហាញកាលបរិច្ឆេទបច្ចុប្បន្នដោយប្រើ PHP។
   - បន្ថែម \`<p>\` ដែលបង្ហាញព័ត៌មាន Server ដូចជា $_SERVER['SERVER_NAME']។

3. **PHP Functionality:**
   - ប្រើ PHP ដើម្បីបង្ហាញសារ កាលបរិច្ឆេទ និងព័ត៌មាន Server។

4. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\` ដើម្បីកំណត់រចនាបថ៖
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ពណ៌ផ្ទៃខាងក្រោយសម្រាប់ body។

**ការណែនាំ:** ដំឡើង Web Server (ឧទាហរណ៍៖ XAMPP, WAMP) ដើម្បីសាកល្បង Code។ រក្សាទុកឯកសារជា .php និងដំណើរការតាមរយៈ localhost។
    `,
    solution: `
\`\`\`html
<?php
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Introduction Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f8f9fa;
    }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ PHP!</h1>
  <p><?php echo "សួស្តី! នេះជា PHP!"; ?></p>
  <p>កាលបរិច្ឆេទ៖ <?php echo date("Y-m-d"); ?></p>
  <p>ព័ត៌មាន Server៖ <?php echo $_SERVER['SERVER_NAME']; ?></p>
</body>
</html>
\`\`\`
`
  }
};

export default PHPLesson1_1Content;