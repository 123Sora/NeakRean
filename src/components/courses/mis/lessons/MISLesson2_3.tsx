import type { LessonContent } from '../../../../types/LessonTypes';

const MISLesson2_3Content: LessonContent = {
  title: 'SQL និងការសាកសួរទិន្នន័យ',
  objectives: [
    'យល់ដឹងពីគោលបំណង និងរចនាសម្ព័ន្ធនៃភាសា SQL',
    'រៀនពី Statement សំខាន់ៗរបស់ DML (Data Manipulation Language)',
    'អនុវត្តការប្រើប្រាស់ SELECT Statement ដើម្បីទាញយកទិន្នន័យ',
    'យល់ពីរបៀបប្រើប្រាស់ WHERE, ORDER BY, និង GROUP BY Clause',
    'អនុវត្តការ Join តារាងដើម្បីទាញយកទិន្នន័យពីតារាងច្រើន'
  ],
  content: `
# SQL និងការសាកសួរទិន្នន័យ 📝🔍

---

**SQL (Structured Query Language)** គឺជាភាសាដែលត្រូវបានប្រើដើម្បីទាក់ទងជាមួយមូលដ្ឋានទិន្នន័យទំនាក់ទំនង (Relational Databases)។ វាអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់គ្រប់គ្រងទិន្នន័យ, បង្កើតរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យ, និងទាញយកព័ត៌មានដែលត្រូវការ។ SQL គឺជាឧបករណ៍ដ៏សំខាន់សម្រាប់អ្នកជំនាញ MIS។

---

## 1. ប្រភេទនៃ SQL Statement

SQL ត្រូវបានបែងចែកជាផ្នែកសំខាន់ៗដូចជា៖

- **DML (Data Manipulation Language):** ប្រើដើម្បីគ្រប់គ្រងទិន្នន័យនៅក្នុងតារាង។
  - **SELECT:** ទាញយកទិន្នន័យពីមូលដ្ឋានទិន្នន័យ។
  - **INSERT:** បញ្ចូលទិន្នន័យថ្មីទៅក្នុងតារាង។
  - **UPDATE:** ធ្វើបច្ចុប្បន្នភាពទិន្នន័យដែលមានស្រាប់។
  - **DELETE:** លុបទិន្នន័យចេញពីតារាង។
- **DDL (Data Definition Language):** ប្រើដើម្បីបង្កើត និងកែប្រែរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យ។
  - **CREATE TABLE:** បង្កើតតារាងថ្មី។
  - **ALTER TABLE:** កែប្រែរចនាសម្ព័ន្ធតារាង។
  - **DROP TABLE:** លុបតារាងចោល។

---

## 2. SELECT Statement

**SELECT** គឺជា Statement ដែលត្រូវបានប្រើប្រាស់ច្រើនជាងគេបំផុត។ រចនាសម្ព័ន្ធរបស់វាគឺ៖

\`\`\`sql
SELECT column1, column2, ...
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s) [ASC|DESC];
\`\`\`

- **SELECT column1, column2, ...:** កំណត់ជួរឈរណាដែលអ្នកចង់ទាញយក។
- **FROM table_name:** កំណត់តារាងណាដែលអ្នកចង់ទាញយកទិន្នន័យ។
- **WHERE condition:** ត្រង (Filter) ជួរដេកដោយផ្អែកលើលក្ខខណ្ឌជាក់លាក់។
- **GROUP BY:** ដាក់ជាក្រុមជួរដេកដែលមានតម្លៃដូចគ្នា។
- **ORDER BY:** តម្រៀបលទ្ធផលតាមលំដាប់ឡើង (ASC) ឬចុះ (DESC)។

---

## 3. SQL JOINs

ដើម្បីទាញយកទិន្នន័យពីតារាងច្រើនដែលមានទំនាក់ទំនងគ្នា យើងប្រើ **JOINs**។

- **INNER JOIN:** ត្រឡប់ជួរដេកដែលមានតម្លៃត្រូវគ្នាទាំងក្នុងតារាងទាំងពីរ។
- **LEFT JOIN:** ត្រឡប់ជួរដេកទាំងអស់ពីតារាងខាងឆ្វេង និងជួរដេកដែលត្រូវគ្នាពីតារាងខាងស្តាំ។
- **RIGHT JOIN:** ត្រឡប់ជួរដេកទាំងអស់ពីតារាងខាងស្តាំ និងជួរដេកដែលត្រូវគ្នាពីតារាងខាងឆ្វេង។

**ឧទាហរណ៍ Inner Join:**

\`\`\`sql
SELECT Customers.Name, Orders.OrderDate
FROM Customers
INNER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;
\`\`\`
កូដនេះនឹងទាញយកឈ្មោះអតិថិជន និងកាលបរិច្ឆេទនៃការបញ្ជាទិញសម្រាប់តែអតិថិជនដែលមានការបញ្ជាទិញ។

---

## 4. ឧទាហរណ៍ជាក់ស្តែង

- **ការត្រងទិន្នន័យ:**
  \`\`\`sql
  SELECT *
  FROM Employees
  WHERE Department = 'IT';
  \`\`\`
  - **ការពន្យល់:** ទាញយកព័ត៌មានទាំងអស់ (SELECT *) ពីតារាង \`Employees\` ដែលនាយកដ្ឋាន (Department) របស់ពួកគេគឺ 'IT'។

- **ការតម្រៀបទិន្នន័យ:**
  \`\`\`sql
  SELECT ProductName, Price
  FROM Products
  ORDER BY Price DESC;
  \`\`\`
  - **ការពន្យល់:** ទាញយកឈ្មោះនិងតម្លៃផលិតផលពីតារាង \`Products\` ហើយតម្រៀបតាមតម្លៃពីខ្ពស់ទៅទាប (DESC)។

`,
  examples: [
    `### ឧទាហរណ៍: ការប្រើប្រាស់ GROUP BY

យើងចង់ដឹងថាតើនាយកដ្ឋាននីមួយៗមានបុគ្គលិកប៉ុន្មាននាក់។

- **កូដ SQL:**
  \`\`\`sql
  SELECT Department, COUNT(EmployeeID) AS NumberOfEmployees
  FROM Employees
  GROUP BY Department;
  \`\`\`
- **ការពន្យល់:** កូដនេះដាក់ក្រុមបុគ្គលិកតាមនាយកដ្ឋាន (GROUP BY Department) ហើយរាប់ចំនួនបុគ្គលិកនៅក្នុងក្រុមនីមួយៗ។
`,
    `### ឧទាហរណ៍: ការប្រើប្រាស់ JOIN និង WHERE

យើងចង់ដឹងឈ្មោះអតិថិជនណាដែលបានធ្វើការបញ្ជាទិញចាប់ពីថ្ងៃទី 1 ខែមករា ឆ្នាំ 2025 មក។

- **កូដ SQL:**
  \`\`\`sql
  SELECT c.CustomerName
  FROM Customers c
  INNER JOIN Orders o
  ON c.CustomerID = o.CustomerID
  WHERE o.OrderDate >= '2025-01-01';
  \`\`\`
- **ការពន្យល់:** កូដនេះប្រើ INNER JOIN ដើម្បីភ្ជាប់តារាង \`Customers\` និង \`Orders\` ហើយប្រើ WHERE ដើម្បីត្រងយកតែការបញ្ជាទិញដែលធ្វើឡើងចាប់ពីឆ្នាំ 2025។
`
  ],
  quiz: [
    {
      question: 'តើ Statement SQL មួយណាដែលត្រូវបានប្រើដើម្បីទាញយកទិន្នន័យ?',
      options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
      correct: 2,
      explanation: 'SELECT Statement ត្រូវបានប្រើដើម្បីជ្រើសរើសនិងទាញយកទិន្នន័យពីមូលដ្ឋានទិន្នន័យ។'
    },
    {
      question: 'តើ Clause មួយណាដែលត្រូវបានប្រើដើម្បីត្រងជួរដេក?',
      options: ['ORDER BY', 'GROUP BY', 'WHERE', 'JOIN'],
      correct: 2,
      explanation: 'WHERE Clause ត្រូវបានប្រើដើម្បីត្រងជួរដេកដោយផ្អែកលើលក្ខខណ្ឌជាក់លាក់។'
    },
    {
      question: 'តើ INNER JOIN ត្រឡប់លទ្ធផលបែបណា?',
      options: ['ជួរដេកទាំងអស់ពីតារាងទាំងពីរ', 'ជួរដេកដែលត្រូវគ្នាទាំងក្នុងតារាងទាំងពីរ', 'ជួរដេកទាំងអស់ពីតារាងទីមួយ', 'ជួរដេកទាំងអស់ពីតារាងទីពីរ'],
      correct: 1,
      explanation: 'INNER JOIN ត្រឡប់តែជួរដេកដែលមានតម្លៃត្រូវគ្នាទាំងក្នុងតារាងទាំងពីរ។'
    },
    {
      question: 'តើ Statement DML មួយណាដែលត្រូវបានប្រើដើម្បីធ្វើបច្ចុប្បន្នភាពទិន្នន័យ?',
      options: ['INSERT', 'UPDATE', 'DELETE', 'SELECT'],
      correct: 1,
      explanation: 'UPDATE Statement ត្រូវបានប្រើដើម្បីធ្វើបច្ចុប្បន្នភាពទិន្នន័យដែលមានស្រាប់នៅក្នុងតារាង។'
    }
  ],
  lab: {
    task: `
សរសេរកូដ SQL ដើម្បីដោះស្រាយបញ្ហាទិន្នន័យជាក់លាក់សម្រាប់ប្រព័ន្ធហាងលក់ទំនិញអនឡាញ។

**តម្រូវការ:**
1. សរសេរ SELECT Statement ដើម្បីទាញយកឈ្មោះផលិតផល (ProductName) និងបរិមាណក្នុងស្តុក (StockQuantity) សម្រាប់ផលិតផលដែលតម្លៃទាបជាង 50 ដុល្លារ។
2. សរសេរ SQL Query ដើម្បីស្វែងរកចំនួនសរុបនៃការបញ្ជាទិញដែលបានធ្វើឡើងដោយអតិថិជននីមួយៗ។
    `,
    solution: `
**១. ស្វែងរកផលិតផលដែលមានតម្លៃទាបជាង 50$:**

\`\`\`sql
SELECT ProductName, StockQuantity
FROM Products
WHERE Price < 50;
\`\`\`

**២. ស្វែងរកចំនួនសរុបនៃការបញ្ជាទិញរបស់អតិថិជននីមួយៗ:**

\`\`\`sql
SELECT c.CustomerName, COUNT(o.OrderID) AS TotalOrders
FROM Customers c
INNER JOIN Orders o
ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerName;
\`\`\`
`
  }
};

export default MISLesson2_3Content;