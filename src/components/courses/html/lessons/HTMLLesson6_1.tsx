// src/components/lessons/Lesson6_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson6_1: LessonContent = {
  title: 'បង្កើតទំព័រគេហទំព័រសាមញ្ញមួយ',
  objectives: [
    'អនុវត្តន៍ប្រើប្រាស់ Tags និង Attributes ដែលបានរៀន',
    'អាចបង្កើតទំព័រដូចជា: ទំព័រព័ត៌មាន, ទំព័រទំនាក់ទំនង (មាន Form)'
  ],
  content: `
# បង្កើតទំព័រគេហទំព័រសាមញ្ញមួយ 🛠️

មេរៀននេះនឹងអនុវត្តចំណេះដឹងដែលអ្នកបានរៀនពីមុនមក ដើម្បីបង្កើតទំព័រគេហទំព័រសាមញ្ញមួយ។ យើងនឹងបង្កើតទំព័រព័ត៌មាន និងទំព័រទំនាក់ទំនង។

---

## 1. គោលដៅនៃការអនុវត្ត 🎯

* **អនុវត្ត**ការប្រើប្រាស់ HTML Tags និង Attributes ដែលបានរៀន។
* **រៀបចំរចនាសម្ព័ន្ធទំព័រ**ដោយប្រើ Semantic Elements (ដូចជា \`<header>\`, \`<nav>\`, \`<main>\`, \`<section>\`, \`<footer>\`)។
* **បង្កើត Form ទំនាក់ទំនង**ដែលមានធាតុបញ្ចូលផ្សេងៗ។
* **ប្រើប្រាស់ Internal CSS** ដើម្បីរចនាម៉ូតមូលដ្ឋានសម្រាប់ទំព័រទាំងពីរ។

---

## 2. បង្កើតទំព័រព័ត៌មាន (News Page) 📰

ទំព័រនេះនឹងបង្ហាញអត្ថបទព័ត៌មានខ្លះៗដោយប្រើ headings, paragraphs, images, និង links។ យើងក៏នឹងប្រើ Semantic elements ដូចជា \`header\`, \`nav\`, \`main\`, \`section\`, និង \`footer\` ដើម្បីរៀបចំរចនាសម្ព័ន្ធឱ្យបានត្រឹមត្រូវ។

### កូដសម្រាប់ទំព័រព័ត៌មាន (news.html):

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ទំព័រព័ត៌មាន - NeakRean</title>
    <style>
        body {
            font-family: 'Khmer OS Battambang', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            width: 80%;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        header {
            background-color: #0056b3;
            color: white;
            padding: 15px 0;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        nav ul {
            list-style: none;
            padding: 0;
            text-align: center;
            background-color: #e2e6ea;
            margin: 0;
            border-bottom: 1px solid #ddd;
        }
        nav ul li {
            display: inline-block;
            margin: 0 15px;
        }
        nav ul li a {
            text-decoration: none;
            color: #0056b3;
            padding: 10px 0;
            display: block;
            transition: color 0.3s ease;
        }
        nav ul li a:hover {
            color: #007bff;
        }
        .article {
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px dashed #eee;
        }
        .article h2 {
            color: #0056b3;
            margin-top: 0;
        }
        .article p {
            line-height: 1.6;
        }
        .article img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 15px 0;
            border-radius: 5px;
        }
        .read-more {
            display: inline-block;
            background-color: #28a745;
            color: white;
            padding: 8px 15px;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .read-more:hover {
            background-color: #218838;
        }
        footer {
            text-align: center;
            padding: 20px;
            margin-top: 30px;
            background-color: #333;
            color: white;
            border-radius: 0 0 8px 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>ព័ត៌មានប្រចាំថ្ងៃ</h1>
        </header>
        <nav>
            <ul>
                <li><a href="#">ទំព័រដើម</a></li>
                <li><a href="#">នយោបាយ</a></li>
                <li><a href="#">សេដ្ឋកិច្ច</a></li>
                <li><a href="#">កីឡា</a></li>
                <li><a href="#">បច្ចេកវិទ្យា</a></li>
            </ul>
        </nav>
        <main>
            <section class="article">
                <h2>កិច្ចប្រជុំកំពូលអាស៊ានលើកទី ៤៥ នឹងប្រព្រឹត្តទៅនៅខែក្រោយ</h2>
                <img src="https://via.placeholder.com/600x300/ADD8E6/000000?text=ASEAN+Summit" alt="ASEAN Summit">
                <p>
                    ភ្នំពេញ៖ កិច្ចប្រជុំកំពូលអាស៊ានលើកទី ៤៥ នឹងប្រព្រឹត្តទៅនៅរាជធានីភ្នំពេញក្នុងខែក្រោយ
                    ដោយមានការចូលរួមពីមេដឹកនាំបណ្តាប្រទេសក្នុងតំបន់ និងដៃគូអន្តរជាតិ។
                    របៀបវារៈសំខាន់ៗនឹងផ្តោតលើកិច្ចសហប្រតិបត្តិការសេដ្ឋកិច្ច ការប្រែប្រួលអាកាសធាតុ
                    និងសន្តិសុខក្នុងតំបង។
                </p>
                <a href="#" class="read-more">អានបន្ត &raquo;</a>
            </section>

            <section class="article">
                <h2>បច្ចេកវិទ្យា AI នឹងផ្លាស់ប្តូររបៀបរស់នៅរបស់មនុស្ស</h2>
                <img src="https://via.placeholder.com/600x300/90EE90/000000?text=AI+Technology" alt="AI Technology">
                <p>
                    អ្នកជំនាញបច្ចេកវិទ្យាបានព្យាករណ៍ថា បច្ចេកវិទ្យាបញ្ញាសិប្បនិម្មិត (AI)
                    នឹងដើរតួនាទីកាន់តែសំខាន់ក្នុងជីវិតប្រចាំថ្ងៃរបស់យើង។
                    ចាប់ពីការបើកបរដោយស្វ័យប្រវត្តិ រហូតដល់ប្រព័ន្ធសុខាភិវបាលឆ្លាតវៃ AI
                    នឹងនាំមកនូវការផ្លាស់ប្តូរដ៏ធំធេង។
                </p>
                <a href="#" class="read-more">អានបន្ត &raquo;</a>
            </section>
        </main>
        <footer>
            <p>ទំនាក់ទំនងយើងខ្ញុំ: info@neakrean.com</p>
            <p>&copy; 2025 NeakRean. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
        </footer>
    </div>
</body>
</html>
\`\`\`

---

## 3. បង្កើតទំព័រទំនាក់ទំនង (Contact Page) 📞

ទំព័រនេះនឹងមានទម្រង់សាមញ្ញមួយសម្រាប់អ្នកប្រើប្រាស់អាចផ្ញើសារមកយើង។ យើងនឹងប្រើប្រាស់ \`form\`, \`input\`, \`label\`, \`textarea\`, និង \`button\` ដើម្បីបង្កើតទម្រង់ទំនាក់ទំនងនេះ។

### កូដសម្រាប់ទំព័រទំនាក់ទំនង (contact.html):

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ទំព័រទំនាក់ទំនង - NeakRean</title>
    <style>
        body {
            font-family: 'Khmer OS Battambang', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            width: 70%;
            margin: 20px auto;
            background-color: #fff;
            padding: 30px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        header {
            background-color: #0056b3;
            color: white;
            padding: 15px 0;
            text-align: center;
            border-radius: 8px 8px 0 0;
            margin-bottom: 20px;
        }
        h1 {
            color: #0056b3;
            text-align: center;
            margin-bottom: 25px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group textarea {
            width: calc(100% - 22px); /* Account for padding and border */
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }
        .form-group textarea {
            resize: vertical; /* Allow vertical resizing */
        }
        .form-group button {
            background-color: #28a745;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
            transition: background-color 0.3s ease;
        }
        .form-group button:hover {
            background-color: #218838;
        }
        footer {
            text-align: center;
            padding: 20px;
            margin-top: 30px;
            background-color: #333;
            color: white;
            border-radius: 0 0 8px 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>ទំព័រទំនាក់ទំនង</h1>
        </header>
        <p style="text-align: center; margin-bottom: 30px;">
            សូមបំពេញទម្រង់ខាងក្រោមដើម្បីទាក់ទងមកយើងខ្ញុំ។
        </p>
        <form action="/submit_contact" method="post">
            <div class="form-group">
                <label for="name">ឈ្មោះពេញ:</label>
                <input type="text" id="name" name="user_name" required>
            </div>
            <div class="form-group">
                <label for="email">អ៊ីមែល:</label>
                <input type="email" id="email" name="user_email" required>
            </div>
            <div class="form-group">
                <label for="subject">ប្រធានបទ:</label>
                <input type="text" id="subject" name="subject" required>
            </div>
            <div class="form-group">
                <label for="message">សារ:</label>
                <textarea id="message" name="user_message" rows="6" required></textarea>
            </div>
            <div class="form-group">
                <button type="submit">បញ្ជូនសារ</button>
            </div>
        </form>
        <footer>
            <p>ទូរស័ព្ទ: 012 345 678 | អ៊ីមែល: contact@neakrean.com</p>
            <p>&copy; 2025 NeakRean. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
        </footer>
    </div>
</body>
</html>
\`\`\`
  `,
  examples: [
    `<section class="article">
    <h2>ចំណងជើងព័ត៌មាន</h2>
    <p>ខ្លឹមសារព័ត៌មានខ្លីៗ...</p>
    <a href="#" class="read-more">អានបន្ត</a>
</section>`,
    `<form>
    <label for="name">ឈ្មោះ:</label>
    <input type="text" id="name" name="name">
    <button type="submit">បញ្ជូន</button>
</form>`
  ],
  quiz: [
    {
      question: 'តើ Semantic Tag មួយណាដែលល្អបំផុតសម្រាប់ព័ត៌មាននីមួយៗនៅក្នុងទំព័រព័ត៌មាន?',
      options: ['<section>', '<div>', '<article>', '<main>'],
      correct: 2,
      explanation: '<article> Tag គឺល្អបំផុតសម្រាប់មាតិកាឯករាជ្យដូចជាអត្ថបទព័ត៌មាន។'
    },
    {
      question: 'តើ Attribute មួយណាដែលប្រើដើម្បីបញ្ជាក់ URL ដែល Form នឹងបញ្ជូនទិន្នន័យទៅ?',
      options: ['method', 'type', 'action', 'name'],
      correct: 2,
      explanation: 'action Attribute ប្រើសម្រាប់បញ្ជាក់ URL ដែល Form នឹងបញ្ជូនទិន្នន័យទៅ។'
    },
    {
      question: 'តើ \`rel="stylesheet"\` នៅក្នុង Tag \`<link>\` បញ្ជាក់អ្វី?',
      options: [
        'ទំនាក់ទំនងទៅកាន់ឯកសារ JavaScript',
        'ទំនាក់ទំនងទៅកាន់ឯកសារ CSS',
        'ទំនាក់ទំនងទៅកាន់រូបភាព',
        'ទំនាក់ទំនងទៅកាន់ទំព័រផ្សេង'
      ],
      correct: 1,
      explanation: '\`rel="stylesheet"\` បញ្ជាក់ថាឯកសារដែលភ្ជាប់នោះគឺជា Style Sheet (CSS)។'
    },
    {
      question: 'តើ Tag \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` ជួយអ្វីខ្លះ?',
      options: [
        'កំណត់ភាសារបស់ទំព័រ',
        'ជួយឱ្យទំព័របង្ហាញបានល្អនៅលើឧបករណ៍ផ្សេងៗ (Responsive Design)',
        'ភ្ជាប់ Fonts ខាងក្រៅ',
        'បញ្ជាក់Charsetរបស់ឯកសារ'
      ],
      correct: 1,
      explanation: 'meta viewport Tag គឺចាំបាច់សម្រាប់ Responsive Web Design ដោយធានាថាទំព័រមើលទៅល្អនៅលើទំហំអេក្រង់ផ្សេងៗគ្នា។'
    },
    {
      question: 'តើ Internal CSS ត្រូវបានដាក់នៅក្នុង Tag HTML មួយណា?',
      options: ['<body>', '<style>', '<link>', '<script>'],
      correct: 1,
      explanation: 'Internal CSS ត្រូវបានដាក់នៅខាងក្នុង Tag <style> ដែលស្ថិតនៅក្នុងផ្នែក <head> នៃឯកសារ HTML។'
    }
  ],
  lab: {
    task: 'បង្កើតទំព័រ HTML ពេញលេញមួយសម្រាប់ "អំពីយើង" ដែលមាន header, main section មួយដែលមាន paragraph ណែនាំខ្លួន, និង footer។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <title>អំពីយើង</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        header { background-color: #f2f2f2; padding: 20px; text-align: center; }
        main { padding: 20px; }
        footer { background-color: #f2f2f2; padding: 10px; text-align: center; position: fixed; bottom: 0; width: 100%; }
    </style>
</head>
<body>
    <header>
        <h1>អំពីយើង</h1>
    </header>
    <main>
        <p>យើងជាក្រុមមួយដែលប្តេជ្ញាចិត្តក្នុងការផ្តល់នូវមាតិកាអប់រំដែលមានគុណភាពខ្ពស់។</p>
    </main>
    <footer>
        <p>&copy; 2024 ក្រុមរបស់យើង</p>
    </footer>
</body>
</html>`
  }
};
export default Lesson6_1;