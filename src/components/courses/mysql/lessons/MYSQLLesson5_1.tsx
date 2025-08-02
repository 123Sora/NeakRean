import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson5_1Content: LessonContent = {
  title: 'ការគ្រប់គ្រងអ្នកប្រើប្រាស់ និងសិទ្ធិ',
  objectives: [
    'យល់ដឹងអំពីការគ្រប់គ្រងអ្នកប្រើប្រាស់នៅក្នុង MySQL',
    'រៀនបង្កើត និងលុបអ្នកប្រើប្រាស់ដោយប្រើ `CREATE USER` និង `DROP USER`',
    'ស្វែងយល់អំពីការផ្តល់សិទ្ធិដោយប្រើ `GRANT`',
    'រៀនដកសិទ្ធិដោយប្រើ `REVOKE`',
    'រៀនពិនិត្យសិទ្ធិរបស់អ្នកប្រើប្រាស់',
    'យល់ពីសារៈសំខាន់នៃការគ្រប់គ្រងសិទ្ធិដើម្បីសុវត្ថិភាព',
  ],
  content: `
# ការគ្រប់គ្រងអ្នកប្រើប្រាស់ និងសិទ្ធិ 📚

---

**ការគ្រប់គ្រងអ្នកប្រើប្រាស់ និងសិទ្ធិ** គឺជាផ្នែកសំខាន់នៃការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ ដើម្បីធានាសុវត្ថិភាព និងការគ្រប់គ្រងការចូលប្រើ។

---

## 1. បង្កើតអ្នកប្រើប្រាស់

ប្រើ \`CREATE USER\` ដើម្បីបង្កើតអ្នកប្រើប្រាស់ថ្មី។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE USER 'sok'@'localhost' IDENTIFIED BY 'password123';
\`\`\`

---

## 2. ផ្តល់សិទ្ធិ

ប្រើ \`GRANT\` ដើម្បីផ្តល់សិទ្ធិដល់អ្នកប្រើប្រាស់។

**ឧទាហរណ៍:**
\`\`\`sql
GRANT SELECT, INSERT ON company_db.employees TO 'sok'@'localhost';
\`\`\`

---

## 3. ដកសិទ្ធិ

ប្រើ \`REVOKE\` ដើម្បីដកសិទ្ធិ។

**ឧទាហរណ៍:**
\`\`\`sql
REVOKE INSERT ON company_db.employees FROM 'sok'@'localhost';
\`\`\`

---

## 4. លុបអ្នកប្រើប្រាស់

ប្រើ \`DROP USER\` ដើម្បីលុបអ្នកប្រើប្រាស់។

**ឧទាហរណ៍:**
\`\`\`sql
DROP USER 'sok'@'localhost';
\`\`\`

---

## 5. ពិនិត្យសិទ្ធិ

ប្រើ \`SHOW GRANTS\` ដើម្បីមើលសិទ្ធិរបស់អ្នកប្រើប្រាស់។

**ឧទាហរណ៍:**
\`\`\`sql
SHOW GRANTS FOR 'sok'@'localhost';
\`\`\`

---

## 6. សុវត្ថិភាព

- ប្រើលេខសម្ងាត់ខ្លាំង។
- ផ្តល់សិទ្ធិតាមតម្រូវការ (Principle of Least Privilege)។
- ពិនិត្យសិទ្ធិជាប្រចាំ។

**គន្លឹះ:** ការគ្រប់គ្រងសិទ្ធិឱ្យបានត្រឹមត្រូវជួយការពារទិន្នន័យពីការចូលប្រើដោយគ្មានការអនុញ្ញាត។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើតអ្នកប្រើប្រាស់ និងផ្តល់សិទ្ធិ</h3>
<p>បង្កើតអ្នកប្រើប្រាស់ថ្មី និងផ្តល់សិទ្ធិ SELECT នៅលើ Table \`products\`។</p>
<pre><code class="language-sql">
CREATE USER 'suon'@'localhost' IDENTIFIED BY 'securePass456';
GRANT SELECT ON shop_db.products TO 'suon'@'localhost';
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ ពិនិត្យ និងដកសិទ្ធិ</h3>
<p>ពិនិត្យសិទ្ធិ និងដកសិទ្ធិ INSERT។</p>
<pre><code class="language-sql">
SHOW GRANTS FOR 'suon'@'localhost';
REVOKE INSERT ON shop_db.products FROM 'suon'@'localhost';
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `CREATE USER` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Table',
        'បង្កើតអ្នកប្រើប្រាស់',
        'ផ្តល់សិទ្ធិ',
        'លុបអ្នកប្រើប្រាស់',
      ],
      correct: 1,
      explanation: '`CREATE USER` ប្រើសម្រាប់បង្កើតអ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ `GRANT` ប្រើសម្រាប់អ្វី?',
      options: [
        'លុបអ្នកប្រើប្រាស់',
        'ផ្តល់សិទ្ធិ',
        'លុបសិទ្ធិ',
        'ពិនិត្យសិទ្ធិ',
      ],
      correct: 1,
      explanation: '`GRANT` ប្រើសម្រាប់ផ្តល់សិទ្ធិ។'
    },
    {
      question: 'តើ `REVOKE` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើតអ្នកប្រើប្រាស់',
        'ផ្តល់សិទ្ធិ',
        'ដកសិទ្ធិ',
        'បង្កើត Table',
      ],
      correct: 2,
      explanation: '`REVOKE` ប្រើសម្រាប់ដកសិទ្ធិ។'
    },
    {
      question: 'តើ `DROP USER` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើតអ្នកប្រើប្រាស់',
        'លុបអ្នកប្រើប្រាស់',
        'ផ្តល់សិទ្ធិ',
        'ពិនិត្យសិទ្ធិ',
      ],
      correct: 1,
      explanation: '`DROP USER` ប្រើសម្រាប់លុបអ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ `SHOW GRANTS` បង្ហាញអ្វី?',
      options: [
        'ទិន្នន័យនៅក្នុង Table',
        'សិទ្ធិរបស់អ្នកប្រើប្រាស់',
        'រចនាសម្ព័ន្ធ Table',
        'Indexes នៅក្នុង Database',
      ],
      correct: 1,
      explanation: '`SHOW GRANTS` បង្ហាញសិទ្ធិរបស់អ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ Principle of Least Privilege មានន័យដូចម្តេច?',
      options: [
        'ផ្តល់សិទ្ធិទាំងអស់ដល់អ្នកប្រើប្រាស់',
        'ផ្តល់សិទ្ធិតាមតម្រូវការតែប៉ុណ្ណោះ',
        'លុបសិទ្ធិទាំងអស់',
        'បង្កើតអ្នកប្រើប្រាស់ថ្មី',
      ],
      correct: 1,
      explanation: 'Principle of Least Privilege មានន័យថាផ្តល់សិទ្ធិតាមតម្រូវការតែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើសិទ្ធិ `SELECT` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ធ្វើអ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'អានទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ',
      ],
      correct: 1,
      explanation: 'សិទ្ធិ `SELECT` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់អានទិន្នន័យ។'
    },
    {
      question: 'តើសិទ្ធិ `INSERT` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ធ្វើអ្វី?',
      options: [
        'អានទិន្នន័យ',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ',
      ],
      correct: 1,
      explanation: 'សិទ្ធិ `INSERT` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បញ្ចូលទិន្នន័យ។'
    },
    {
      question: 'តើសិទ្ធិ `UPDATE` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ធ្វើអ្វី?',
      options: [
        'អានទិន្នន័យ',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ',
      ],
      correct: 2,
      explanation: 'សិទ្ធិ `UPDATE` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់កែប្រែទិន្នន័យ។'
    },
    {
      question: 'តើសិទ្ធិ `DELETE` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ធ្វើអ្វី?',
      options: [
        'អានទិន្នន័យ',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'លុបទិន្នន័យ',
      ],
      correct: 3,
      explanation: 'សិទ្ធិ `DELETE` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់លុបទិន្នន័យ។'
    },
    {
      question: 'តើការប្រើលេខសម្ងាត់ខ្លាំងមានសារៈសំខាន់ដែរឬទេ?',
      options: [
        'សំខាន់',
        'មិនសំខាន់',
        'សំខាន់តែនៅក្នុង Database ធំៗ',
        'សំខាន់តែនៅក្នុង Database តូចៗ',
      ],
      correct: 0,
      explanation: 'ការប្រើលេខសម្ងាត់ខ្លាំងគឺសំខាន់សម្រាប់សុវត្ថិភាព។'
    },
    {
      question: 'តើអ្នកអាចផ្តល់សិទ្ធិលើ Column ជាក់លាក់បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `INSERT`',
      ],
      correct: 0,
      explanation: 'អ្នកអាចផ្តល់សិទ្ធិលើ Column ជាក់លាក់បាន។'
    },
    {
      question: 'តើសិទ្ធិ `ALL PRIVILEGES` មានន័យដូចម្តេច?',
      options: [
        'ផ្តល់សិទ្ធិអានតែប៉ុណ្ណោះ',
        'ផ្តល់សិទ្ធិទាំងអស់លើ Object ជាក់លាក់',
        'ផ្តល់សិទ្ធិលើ Database ទាំងមូល',
        'ផ្តល់សិទ្ធិលើ Table តែមួយ',
      ],
      correct: 1,
      explanation: '`ALL PRIVILEGES` ផ្តល់សិទ្ធិទាំងអស់លើ Object ជាក់លាក់។'
    },
    {
      question: 'តើអ្នកប្រើប្រាស់ \`@\'localhost\'\` មានន័យដូចម្តេច?',
      options: [
        'អ្នកប្រើប្រាស់អាចចូលប្រើពីគ្រប់ទីកន្លែង',
        'អ្នកប្រើប្រាស់អាចចូលប្រើពី Server ដដែល',
        'អ្នកប្រើប្រាស់អាចចូលប្រើពី Network ផ្សេង',
        'អ្នកប្រើប្រាស់មិនអាចចូលប្រើបាន',
      ],
      correct: 1,
      explanation: '`@\'localhost\'` មានន័យថាអ្នកប្រើប្រាស់អាចចូលប្រើពី Server ដដែល។'
    },
    {
      question: 'តើអ្នកប្រើប្រាស់ `@\'%\'` មានន័យដូចម្តេច?',
      options: [
        'អ្នកប្រើប្រាស់អាចចូលប្រើពី Server ដដែល',
        'អ្នកប្រើប្រាស់អាចចូលប្រើពីគ្រប់ទីកន្លែង',
        'អ្នកប្រើប្រាស់មិនអាចចូលប្រើបាន',
        'អ្នកប្រើប្រាស់អាចចូលប្រើតែ Table ជាក់លាក់',
      ],
      correct: 1,
      explanation: '`@\'%\'` មានន័យថាអ្នកប្រើប្រាស់អាចចូលប្រើពីគ្រប់ទីកន្លែង។'
    },
  ],
  lab: {
    task: `
គ្រប់គ្រងអ្នកប្រើប្រាស់ និងសិទ្ធិនៅក្នុង MySQL។

**តម្រូវការ:**

1. **បង្កើតអ្នកប្រើប្រាស់:**
   - បង្កើតអ្នកប្រើប្រាស់ \`analyst\` នៅ \`localhost\` ជាមួយលេខសម្ងាត់ \`dataPass789\`។
   - បង្កើតអ្នកប្រើប្រាស់ \`admin\` នៅ \`%\` ជាមួយលេខសម្ងាត់ \`adminPass123\`។

2. **ផ្តល់សិទ្ធិ:**
   - ផ្តល់សិទ្ធិ \`SELECT\` លើ Table \`employees\` ក្នុង Database \`company_db\` ទៅ \`analyst\`។
   - ផ្តល់សិទ្ធិ \`ALL PRIVILEGES\` លើ Database \`company_db\` ទៅ \`admin\`។

3. **Test:**
   - ពិនិត្យសិទ្ធិរបស់ \`analyst\` និង \`admin\` ដោយប្រើ \`SHOW GRANTS\`។
   - ដកសិទ្ធិ \`SELECT\` ពី \`analyst\`។
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries។

**ការណែនាំ:** ប្រើ \`SHOW GRANTS\` ដើម្បីពិនិត្យសិទ្ធិ។
    `,
    solution: `
\`\`\`sql
-- បង្កើតអ្នកប្រើប្រាស់
CREATE USER 'analyst'@'localhost' IDENTIFIED BY 'dataPass789';
CREATE USER 'admin'@'%' IDENTIFIED BY 'adminPass123';

-- ផ្តល់សិទ្ធិ
GRANT SELECT ON company_db.employees TO 'analyst'@'localhost';
GRANT ALL PRIVILEGES ON company_db.* TO 'admin'@'%';

-- ពិនិត្យសិទ្ធិ
SHOW GRANTS FOR 'analyst'@'localhost';
SHOW GRANTS FOR 'admin'@'%';

-- ដកសិទ្ធិ
REVOKE SELECT ON company_db.employees FROM 'analyst'@'localhost';
\`\`\`
`
  }
};

export default MySQLLesson5_1Content;