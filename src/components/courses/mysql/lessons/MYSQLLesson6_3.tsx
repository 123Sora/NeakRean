import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson6_3Content: LessonContent = {
  title: 'ការភ្ជាប់ MySQL ជាមួយ Python',
  objectives: [
    'យល់ដឹងអំពីការភ្ជាប់ MySQL ជាមួយ Python',
    'រៀនដំឡើង និងប្រើ Module `mysql-connector-python`',
    'រៀនភ្ជាប់ទៅ MySQL Database ពី Python',
    'ស្វែងយល់អំពីការប្រតិបត្តិ Queries ដូចជា SELECT, INSERT, UPDATE',
    'រៀនប្រើ Prepared Statements',
    'យល់ពីការដោះស្រាយ Errors នៅក្នុង Python',
  ],
  content: `
# ការភ្ជាប់ MySQL ជាមួយ Python 📚

---

**Python** គឺជា Programming Language ដ៏ពេញនិយមសម្រាប់ភ្ជាប់ទៅ MySQL។

---

## 1. ដំឡើង Module mysql-connector-python

ប្រើ pip ដើម្បីដំឡើង \`mysql-connector-python\`។

**ឧទាហរណ៍:**
\`\`\`bash
pip install mysql-connector-python
\`\`\`

---

## 2. ភ្ជាប់ទៅ MySQL

បង្កើត Connection ទៅ MySQL Database។

**ឧទាហរណ៍:**
\`\`\`python
import mysql.connector

try:
  connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password',
    database='company_db'
  )
  print('Connected to MySQL!')
except mysql.connector.Error as err:
  print(f'Error: {err}')
\`\`\`

---

## 3. ប្រតិបត្តិ Queries

**SELECT Query:**
\`\`\`python
cursor = connection.cursor()
cursor.execute('SELECT * FROM employees')
results = cursor.fetchall()
for row in results:
  print(row)
\`\`\`

**INSERT Query:**
\`\`\`python
cursor.execute('INSERT INTO employees (name, dept_id) VALUES (%s, %s)', ('Sok', 1))
connection.commit()
print(f'Inserted: {cursor.rowcount}')
\`\`\`

---

## 4. Prepared Statements

**Prepared Statements** ការពារពី SQL Injection។

**ឧទាហរណ៍:**
\`\`\`python
cursor = connection.cursor(prepared=True)
cursor.execute('INSERT INTO employees (name, dept_id) VALUES (%s, %s)', ('Sok', 1))
connection.commit()
\`\`\`

---

## 5. ការដោះស្រាយ Errors

**Error Handling:**
\`\`\`python
try:
  cursor.execute('SELECT * FROM nonexistent_table')
except mysql.connector.Error as err:
  print(f'Error: {err}')
\`\`\`

**គន្លឹះ:** ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រង Errors និង \`connection.commit()\` សម្រាប់ការផ្លាស់ប្តូរទិន្នន័យ។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ ភ្ជាប់ និង Query</h3>
<p>ភ្ជាប់ទៅ Database និងទាញទិន្នន័យពី Table \`products\`។</p>
<pre><code class="language-python">
import mysql.connector

try:
  connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password',
    database='shop_db'
  )
  cursor = connection.cursor()
  cursor.execute('SELECT * FROM products')
  results = cursor.fetchall()
  for row in results:
    print(row)
except mysql.connector.Error as err:
  print(f'Error: {err}')
finally:
  connection.close()
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ បញ្ចូលទិន្នន័យ</h3>
<p>បញ្ចូល Product ថ្មីទៅក្នុង Table \`products\`។</p>
<pre><code class="language-python">
try:
  cursor = connection.cursor(prepared=True)
  cursor.execute('INSERT INTO products (name, price) VALUES (%s, %s)', ('Phone', 500))
  connection.commit()
  print(f'Inserted: {cursor.rowcount}')
except mysql.connector.Error as err:
  print(f'Error: {err}')
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Module ណាដែលប្រើសម្រាប់ភ្ជាប់ MySQL ជាមួយ Python?',
      options: ['mysql-connector-python', 'pymysql', 'sqlalchemy', 'អ្នកទាំងបី'],
      correct: 0,
      explanation: '`mysql-connector-python` គឺជា Module ផ្លូវការសម្រាប់ភ្ជាប់ MySQL។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីដំឡើង `mysql-connector-python`?',
      options: ['pip install mysql-connector-python', 'pip add mysql-connector-python', 'python install mysql-connector-python', 'pip setup mysql-connector-python'],
      correct: 0,
      explanation: '`pip install mysql-connector-python` ប្រើសម្រាប់ដំឡើង Module។'
    },
    {
      question: 'តើ Method ណាដែលប្រើដើម្បីភ្ជាប់ទៅ MySQL?',
      options: ['connect()', 'cursor()', 'execute()', 'commit()'],
      correct: 0,
      explanation: '`connect()` ប្រើសម្រាប់ភ្ជាប់ទៅ MySQL�।'
    },
    {
      question: 'តើ `cursor()` ប្រើសម្រាប់អ្វី?',
      options: ['បង្កើត Database', 'ប្រតិបត្តิ Query', 'ភ្ជាប់ Database', 'បិទ Connection'],
      correct: 1,
      explanation: '`cursor()` ប្រើសម្រាប់ប្រតិបត្តិ Query។'
    },
    {
      question: 'តើ `commit()` ប្រើសម្រាប់អ្វី?',
      options: ['ចាប់ផ្តើម Query', 'រក្សាទុកការផ្លាស់ប្តូរ', 'លុប Query', 'បង្កើត Table'],
      correct: 1,
      explanation: '`commit()` ប្រើសម្រាប់រក្សាទុកការផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Prepared Statements មានអត្ថប្រយោជន៍អ្វី?',
      options: ['បង្កើនល្បឿន Query', 'ការពារ SQL Injection', 'បង្កើត Database', 'លុប Table'],
      correct: 1,
      explanation: 'Prepared Statements ការពារ SQL Injection�।'
    },
    {
      question: 'តើ `fetchall()` ត្រឡប់អ្វី?',
      options: ['Row មួយ', 'គ្រប់ Rows នៃ Query', 'Column Names', 'Database Structure'],
      correct: 1,
      explanation: '`fetchall()` ត្រឡប់គ្រប់ Rows នៃ Query។'
    },
    {
      question: 'តើ `rowcount` បង្ហាញអ្វី?',
      options: ['ចំនួន Columns', 'ចំនួន Rows ដែលប៉ះពាល់', 'ចំនួន Tables', 'ចំនួន Databases'],
      correct: 1,
      explanation: '`rowcount` បង្ហាញចំនួន Rows ដែលប៉ះពាល់។'
    },
    {
      question: 'តើអ្នកគួរបិទ Connection នៅពេលណា?',
      options: ['បន្ទាប់ពីភ្ជាប់', 'បន្ទាប់ពីប្រតិបត្តិ Query ទាំងអស់', 'មុនពេលភ្ជាប់', 'មិនចាំបាច់បិទ'],
      correct: 1,
      explanation: 'គួរបិទ Connection បន្ទាប់ពីប្រតិបត្តិ Query ទាំងអស់។'
    },
    {
      question: 'តើ `try-except` ប្រើសម្រាប់អ្វី?',
      options: ['បង្កើត Database', 'គ្រប់គ្រង Errors', 'ប្រតិបត្តិ Query', 'បង្កើនល្បឿន'],
      correct: 1,
      explanation: '`try-except` ប្រើសម្រាប់គ្រប់គ្រង Errors។'
    },
    {
      question: 'តើ Parameter `%s` នៅក្នុង Query មានន័យដូចម្តេច?',
      options: ['Placeholder សម្រាប់ Parameters', 'Variable សម្រាប់ Query', 'Column ជាក់លាក់', 'Table ជាក់លាក់'],
      correct: 0,
      explanation: '`%s` គឺជា Placeholder សម្រាប់ Parameters។'
    },
    {
      question: 'តើ SQL Injection គឺជាអ្វី?',
      options: ['ការបញ្ចូលទិន្នន័យធម្មតា', 'ការវាយប្រហារដោយបញ្ចូល SQL Code មិនត្រឹមត្រូវ', 'ការបង្កើត Database', 'ការលុប Table'],
      correct: 1,
      explanation: 'SQL Injection គឺជាការវាយប្រហារដោយបញ្ចូល SQL Code មិនត្រឹមត្រូវ។'
    },
    {
      question: 'តើ `mysql-connector-python` គាំទ្រ Prepared Statements ដែរឬទេ?',
      options: ['គាំទ្រ', 'មិនគាំទ្រ', 'គាំទ្រតែ SELECT', 'គាំទ្រតែ INSERT'],
      correct: 0,
      explanation: '`mysql-connector-python` គាំទ្រ Prepared Statements។'
    },
    {
      question: 'តើអ្នកគួរប្រើ `commit()` នៅពេលណា?',
      options: ['បន្ទាប់ពី SELECT', 'បន្ទាប់ពី INSERT, UPDATE, DELETE', 'មុនពេលភ្ជាប់', 'មិនចាំបាច់'],
      correct: 1,
      explanation: '`commit()` ត្រូវប្រើបន្ទាប់ពី INSERT, UPDATE, DELETE។'
    },
    {
      question: 'តើ `close()` នៅក្នុង Connection ធ្វើអ្វី?',
      options: ['បង្កើត Database', 'បិទ Connection', 'ប្រតិបត្តิ Query', 'លុប Table'],
      correct: 1,
      explanation: '`close()` បិទ Connection។'
    },
  ],
  lab: {
    task: `
ភ្ជាប់ MySQL ជាមួយ Python។

**តម្រូវការ:**

1. **ភ្ជាប់ Database:**
   - បង្កើត Python Script ដើម្បីភ្ជាប់ទៅ Database \`shop_db\`។

2. **ប្រតិបត្តិ Queries:**
   - Query \`SELECT * FROM products\` ដើម្បីបង្ហាញទិន្នន័យ។
   - បញ្ចូល Product ថ្មីជាមួយ \`name\` ជា "Tablet" និង \`price\` ជា 300 ដោយប្រើ Prepared Statement។

3. **Test:**
   - បង្ហាញ Results នៅក្នុង Console។
   - ពិនិត្យ Errors ប្រសិនបើមាន។
   - ប្រើ Python CLI ឬ VS Code ដើម្បី Run Code។

**ការណែនាំ:** ត្រូវប្រាកដថា MySQL Server កំពុង Run និងមាន Database \`shop_db\`។
    `,
    solution: `
\`\`\`python
# app.py
import mysql.connector

try:
  connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password',
    database='shop_db'
  )
  cursor = connection.cursor()

  # SELECT Query
  cursor.execute('SELECT * FROM products')
  results = cursor.fetchall()
  for row in results:
    print(row)

  # INSERT Query
  cursor.execute('INSERT INTO products (name, price) VALUES (%s, %s)', ('Tablet', 300))
  connection.commit()
  print(f'Inserted: {cursor.rowcount}')

except mysql.connector.Error as err:
  print(f'Error: {err}')
finally:
  cursor.close()
  connection.close()
\`\`\`
`
  }
};

export default MySQLLesson6_3Content;