import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson1_2Content: LessonContent = {
  title: 'ការដំឡើង និង Setup Environment',
  objectives: [
    'រៀនដំឡើង MySQL Server នៅលើប្រព័ន្ធផ្សេងៗ',
    'ស្វែងយល់អំពី MySQL Workbench និង phpMyAdmin',
    'ចូលប្រើ MySQL Command-Line Client',
    'បង្កើត Database ដំបូង',
  ],
  content: `
# ការដំឡើង និង Setup Environment 📚

---

ការដំឡើង MySQL និងការរៀបចំ Environment គឺជាជំហានដំបូងសម្រាប់រៀន MySQL។

---

## 1. ការដំឡើង MySQL Server

**MySQL Community Server** គឺជា Version ឥតគិតថ្លៃ។ អ្នកអាចប្រើ Tools ដូចជា:

- **XAMPP/WAMP/MAMP**: បញ្ចូល Apache, MySQL, និង PHP។
- **MySQL Community Server**: ដំឡើង MySQL ដោយផ្ទាល់។

**ជំហានដំឡើង (XAMPP):**
1. ទាញយក XAMPP ពី [apachefriends.org](https://www.apachefriends.org/)។
2. ដំឡើង និងចាប់ផ្តើម MySQL Module។
3. ពិនិត្យការដំណើរការនៅ \`http://localhost/phpmyadmin\`។

---

## 2. MySQL Workbench និង phpMyAdmin

- **MySQL Workbench**: GUI Tool សម្រាប់គ្រប់គ្រង Database។
- **phpMyAdmin**: Web-based Tool សម្រាប់គ្រប់គ្រង MySQL។

**ជំហានដំឡើង MySQL Workbench:**
1. ទាញយកពី [dev.mysql.com](https://dev.mysql.com/downloads/workbench/)។
2. ដំឡើង និងភ្ជាប់ទៅ MySQL Server។
3. ប្រើ GUI ដើម្បីបង្កើត Tables និង Queries។

---

## 3. MySQL Command-Line Client

Command-Line Client អនុញ្ញាតឱ្យអ្នកប្រើ SQL Commands ដោយផ្ទាល់។

**ឧទាហរណ៍:**
\`\`\`bash
mysql -u root -p
\`\`\`
បញ្ចូល Password ដើម្បីចូល។

---

## 4. បង្កើត Database ដំបូង

**ឧទាហរណ៍:**
\`\`\`sql
CREATE DATABASE my_first_db;
USE my_first_db;
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);
\`\`\`

**គន្លឹះ:** ប្រើ \`SHOW DATABASES;\` ដើម្បីមើល Databases ទាំងអស់។
`,
  examples: [
    `
### ឧទាហរណ៍៖ បង្កើត Database និង Table
បង្កើត Database និង Table ដើម្បីផ្ទុកព័ត៌មាននិស្សិត។
\`\`\`sql
CREATE DATABASE school;
USE school;
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);
\`\`\`
`,
    `
### ឧទាហរណ៍៖ ប្រើ Command-Line Client
ចូលប្រើ MySQL និងបង្ហាញ Databases។
\`\`\`sql
mysql -u root -p
SHOW DATABASES;
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ MySQL Community Server គឺជាអ្វី?',
      options: [
        'Web Server',
        'RDBMS ឥតគិតថ្លៃ',
        'Programming Language',
        'Operating System',
      ],
      correct: 1,
      explanation: 'MySQL Community Server គឺជា RDBMS ឥតគិតថ្លៃ។'
    },
    {
      question: 'តើ XAMPP បញ្ចូលអ្វីខ្លះ?',
      options: [
        'Apache, MySQL, PHP',
        'MySQL តែប៉ុណ្ណោះ',
        'Node.js, Express',
        'Python, Django',
      ],
      correct: 0,
      explanation: 'XAMPP បញ្ចូល Apache, MySQL, និង PHP។'
    },
    {
      question: 'តើ MySQL Workbench ជាអ្វី?',
      options: [
        'Command-Line Tool',
        'GUI Tool សម្រាប់គ្រប់គ្រង Database',
        'Web Server',
        'NoSQL Database',
      ],
      correct: 1,
      explanation: 'MySQL Workbench ជា GUI Tool សម្រាប់គ្រប់គ្រង Database។'
    },
    {
      question: 'តើ phpMyAdmin ជាអ្វី?',
      options: [
        'Web-based Tool',
        'Command-Line Tool',
        'Programming Language',
        'Database Engine',
      ],
      correct: 0,
      explanation: 'phpMyAdmin ជា Web-based Tool សម្រាប់គ្រប់គ្រង MySQL�।'
    },
    {
      question: 'តើ Command ដើម្បីចូល MySQL Command-Line Client គឺជាអ្វី?',
      options: [
        'mysql -u root -p',
        'mysql start',
        'mysql connect',
        'mysql login',
      ],
      correct: 0,
      explanation: '`mysql -u root -p` ប្រើដើម្បីចូល Command-Line Client។'
    },
    {
      question: 'តើ Command ដើម្បីបង្កើត Database គឺជាអ្វី?',
      options: [
        'CREATE TABLE',
        'CREATE DATABASE',
        'USE DATABASE',
        'SHOW DATABASES',
      ],
      correct: 1,
      explanation: '`CREATE DATABASE` ប្រើដើម្បីបង្កើត Database។'
    },
    {
      question: 'តើ Command ដើម្បីជ្រើសរើស Database គឺជាអ្វី?',
      options: [
        'SELECT DATABASE',
        'USE DATABASE',
        'CREATE DATABASE',
        'SHOW DATABASES',
      ],
      correct: 1,
      explanation: '`USE DATABASE` ប្រើដើម្បីជ្រើសរើស Database។'
    },
    {
      question: 'តើ Command ដើម្បីមើល Databases ទាំងអស់គឺជាអ្វី?',
      options: [
        'SHOW TABLES',
        'SHOW DATABASES',
        'LIST DATABASES',
        'GET DATABASES',
      ],
      correct: 1,
      explanation: '`SHOW DATABASES` ប្រើដើម្បីមើល Databases ទាំងអស់។'
    },
    {
      question: 'តើ XAMPP អាចប្រើបាននៅលើប្រព័ន្ធប្រតិបត្តិការណាខ្លះ?',
      options: [
        'Windows តែប៉ុណ្ណោះ',
        'Windows, macOS, Linux',
        'Linux តែប៉ុណ្ណោះ',
        'macOS តែប៉ុណ្ណោះ',
      ],
      correct: 1,
      explanation: 'XAMPP អាចប្រើបាននៅលើ Windows, macOS, និង Linux។'
    },
    {
      question: 'តើ MySQL Workbench ត្រូវការការតភ្ជាប់ទៅ MySQL Server ដែរឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅ Localhost',
        'មិនបាន ព្រោះជា Web Tool',
      ],
      correct: 0,
      explanation: 'MySQL Workbench ត្រូវការការតភ្ជាប់ទៅ MySQL Server។'
    },
    {
      question: 'តើ phpMyAdmin អាចចូលប្រើបានតាមអ្វី?',
      options: [
        'Command Line',
        'Web Browser',
        'Desktop App',
        'Mobile App',
      ],
      correct: 1,
      explanation: 'phpMyAdmin ចូលប្រើបានតាម Web Browser។'
    },
    {
      question: 'តើ Command ដើម្បីបង្កើត Table គឺជាអ្វី?',
      options: [
        'CREATE DATABASE',
        'CREATE TABLE',
        'USE TABLE',
        'SHOW TABLES',
      ],
      correct: 1,
      explanation: '`CREATE TABLE` ប្រើដើម្បីបង្កើត Table។'
    },
    {
      question: 'តើ MySQL Community Server មានតម្លៃឬទេ?',
      options: [
        'ឥតគិតថ្លៃ',
        'មានតម្លៃ',
        'ឥតគិតថ្លៃ ប៉ុន្តែមានកម្រិត',
        'មានតម្លៃសម្រាប់ Enterprise',
      ],
      correct: 0,
      explanation: 'MySQL Community Server គឺឥតគិតថ្លៃ។'
    },
    {
      question: 'តើអ្នកអាចប្រើ MySQL Command-Line Client ដោយគ្មាន Password បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅ Localhost',
        'មិនបាន ព្រោះត្រូវការ GUI',
      ],
      correct: 0,
      explanation: 'អាចប្រើបាន ប៉ុន្តែត្រូវការ Password សម្រាប់ User។'
    },
    {
      question: 'តើ Tool ណាមួយជួយគ្រប់គ្រង Database តាម GUI?',
      options: [
        'MySQL Workbench',
        'Apache Server',
        'Node.js',
        'Python',
      ],
      correct: 0,
      explanation: 'MySQL Workbench ជួយគ្រប់គ្រង Database តាម GUI។'
    }
  ],
  lab: {
    task: `
ដំឡើង MySQL និងបង្កើត Database ដំបូង។

**តម្រូវការ:**

**1. ដំឡើង XAMPP:**
   - ទាញយក និងដំឡើង XAMPP។
   - ចាប់ផ្តើម MySQL Module។

**2. ចូលប្រើ phpMyAdmin:**
   - បើក \`http://localhost/phpmyadmin\`។
   - បង្កើត Database ឈ្មោះ \`test_db\`។

**3. បង្កើត Table:**
   - បង្កើត Table \`employees\` ដែលមាន Columns: \`id\` (INT, PRIMARY KEY), \`name\` (VARCHAR), \`department\` (VARCHAR)។

**4. Test:**
   - ប្រើ phpMyAdmin ដើម្បីពិនិត្យ Database និង Table។

**ការណែនាំ:** ប្រើ Browser ដើម្បីចូល phpMyAdmin និងធ្វើតាមជំហាន។
    `,
    solution: `
# ការដំឡើង និងបង្កើត Database

1. **ដំឡើង XAMPP**: ទាញយកពី [apachefriends.org](https://www.apachefriends.org/) និងដំឡើង។
2. **ចាប់ផ្តើម MySQL**: បើក XAMPP Control Panel និង Start MySQL។
3. **ចូល phpMyAdmin**: បើក Browser និងចូល \`http://localhost/phpmyadmin\`។
4. **បង្កើត Database និង Table**:
\`\`\`sql
CREATE DATABASE test_db;
USE test_db;
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  department VARCHAR(50)
);
\`\`\`
`
  }
};

export default MySQLLesson1_2Content;