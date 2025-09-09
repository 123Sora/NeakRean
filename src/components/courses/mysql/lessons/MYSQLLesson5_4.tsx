import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson5_4Content: LessonContent = {
  title: 'ការគ្រប់គ្រង Transaction',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា Transaction',
    'រៀនប្រើ `START TRANSACTION`, `COMMIT`, និង `ROLLBACK`',
    'ស្វែងយល់អំពី ACID Properties',
    'រៀនប្រើ Savepoints',
    'ស្វែងយល់អំពី Isolation Levels',
    'យល់ពីសារៈសំខាន់នៃ Transaction ក្នុង Data Integrity',
  ],
  content: `
# ការគ្រប់គ្រង Transaction 📚

---

**Transaction** គឺជាសំណុំនៃប្រតិបត្តិការ SQL ដែលត្រូវបានប្រតិបត្តិជាឯកតា ដើម្បីធានា Data Integrity។

---

## 1. ប្រើ Transaction

- **\`START TRANSACTION\`**: ចាប់ផ្តើម Transaction។
- **\`COMMIT\`**: រក្សាទុកការផ្លាស់ប្តូរទាំងអស់។
- **\`ROLLBACK\`**: លុបចោលការផ្លាស់ប្តូរទាំងអស់។

**ឧទាហរណ៍:**
\`\`\`sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
\`\`\`

---

## 2. ACID Properties

- **Atomicity**: ធានាថាប្រតិបត្តិការទាំងអស់បញ្ចប់ ឬមិនបញ្ចប់ទាំងអស់។
- **Consistency**: ធានាថា Database ស្ថិតនៅក្នុងស្ថានភាពត្រឹមត្រូវ។
- **Isolation**: ធានាថា Transaction មួយមិនប៉ះពាល់ដល់ Transaction ផ្សេង។
- **Durability**: ធានាថាការផ្លាស់ប្តូរត្រូវបានរក្សាទុកជាអចិន្ត្រៃយ៍។

---

## 3. Savepoints

**Savepoints** អនុញ្ញាតឱ្យរក្សាទុកចំណុចមួយក្នុង Transaction ដើម្បី ROLLBACK ទៅចំណុចនោះ។

**ឧទាហរណ៍:**
\`\`\`sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 50 WHERE account_id = 1;
SAVEPOINT savepoint1;
UPDATE accounts SET balance = balance - 50 WHERE account_id = 1;
ROLLBACK TO savepoint1;
COMMIT;
\`\`\`

---

## 4. Isolation Levels

- **READ UNCOMMITTED**: អនុញ្ញាតឱ្យអានទិន្នន័យមិនទាន់ COMMIT។
- **READ COMMITTED**: អនុញ្ញាតឱ្យអានទិន្នន័យដែលបាន COMMIT តែប៉ុណ្ណោះ។
- **REPEATABLE READ**: ធានាថាទិន្នន័យអានមិនផ្លាស់ប្តូរក្នុង Transaction។
- **SERIALIZABLE**: Transaction ត្រូវបានប្រតិបត្តិជាលំដាប់។

**ឧទាហរណ៍:**
\`\`\`sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 1;
COMMIT;
\`\`\`

**គន្លឹះ:** Transaction ជួយធានា Data Integrity នៅពេលធ្វើប្រតិបត្តិការស្មុគស្មាញ។
`,
  examples: [
    `
### ឧទាហរណ៍៖ ប្រើ Transaction
ផ្ទេរប្រាក់រវាងគណនី។
\`\`\`sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
\`\`\`
`,
    `
### ឧទាហរណ៍៖ ប្រើ Savepoint
ប្រើ Savepoint ដើម្បី ROLLBACK ទៅចំណុចជាក់លាក់។
\`\`\`sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 50 WHERE account_id = 1;
SAVEPOINT savepoint1;
UPDATE accounts SET balance = balance - 50 WHERE account_id = 1;
ROLLBACK TO savepoint1;
COMMIT;
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Transaction គឺជាអ្វី?',
      options: [
        'Table ដែលផ្ទុកទិន្នន័យ',
        'សំណុំនៃប្រតិបត្តិការ SQL ដែលប្រតិបត្តិជាឯកតា',
        'Query ដែលភ្ជាប់ Tables',
        'Function សម្រាប់គណនា',
      ],
      correct: 1,
      explanation: 'Transaction គឺជាសំណុំនៃប្រតិបត្តិការ SQL ដែលប្រតិបត្តិជាឯកតា។'
    },
    {
      question: 'តើ `START TRANSACTION` ប្រើសម្រាប់អ្វី?',
      options: [
        'ចាប់ផ្តើម Transaction',
        'រក្សាទុកការផ្លាស់ប្តូរ',
        'លុបចោលការផ្លាស់ប្តូរ',
        'បង្កើត Table',
      ],
      correct: 0,
      explanation: '`START TRANSACTION` ប្រើសម្រាប់ចាប់ផ្តើម Transaction។'
    },
    {
      question: 'តើ `COMMIT` ប្រើសម្រាប់អ្វី?',
      options: [
        'ចាប់ផ្តើម Transaction',
        'រក្សាទុកការផ្លាស់ប្តូរ',
        'លុបចោលការផ្លាស់ប្តូរ',
        'បង្កើត Table',
      ],
      correct: 1,
      explanation: '`COMMIT` ប្រើសម្រាប់រក្សាទុកការផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `ROLLBACK` ប្រើសម្រាប់អ្វី?',
      options: [
        'ចាប់ផ្តើម Transaction',
        'រក្សាទុកការផ្លាស់ប្តូរ',
        'លុបចោលការផ្លាស់ប្តូរ',
        'បង្កើត Table',
      ],
      correct: 2,
      explanation: '`ROLLBACK` ប្រើសម្រាប់លុបចោលការផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ ACID Properties មានន័យដូចម្តេច?',
      options: [
        'Atomicity, Consistency, Isolation, Durability',
        'Availability, Consistency, Integrity, Durability',
        'Atomicity, Consistency, Isolation, Dependency',
        'Availability, Consistency, Isolation, Dependency',
      ],
      correct: 0,
      explanation: 'ACID Properties គឺ Atomicity, Consistency, Isolation, Durability។'
    },
    {
      question: 'តើ Atomicity ធានាអ្វី?',
      options: [
        'ប្រតិបត្តិការទាំងអស់បញ្ចប់ ឬមិនបញ្ចប់ទាំងអស់',
        'Database ស្ថិតនៅក្នុងស្ថានភាពត្រឹមត្រូវ',
        'Transaction មិនប៉ះពាល់គ្នា',
        'ការផ្លាស់ប្តូរត្រូវបានរក្សាទុកជាអចិន្ត្រៃយ៍',
      ],
      correct: 0,
      explanation: 'Atomicity ធានាថាប្រតិបត្តិការទាំងអស់បញ្ចប់ ឬមិនបញ្ចប់ទាំងអស់។'
    },
    {
      question: 'តើ Consistency ធានាអ្វី?',
      options: [
        'ប្រតិបត្តិការទាំងអស់បញ្ចប់',
        'Database ស្ថិតនៅក្នុងស្ថានភាពត្រឹមត្រូវ',
        'Transaction មិនប៉ះពាល់គ្នា',
        'ការផ្លាស់ប្តូរត្រូវបានរក្សាទុកជាអចិន្ត្រៃយ៍',
      ],
      correct: 1,
      explanation: 'Consistency ធានាថា Database ស្ថិតនៅក្នុងស្ថានភាពត្រឹមត្រូវ។'
    },
    {
      question: 'តើ Isolation ធានាអ្វី?',
      options: [
        'ប្រតិបត្តិការទាំងអស់បញ្ចប់',
        'Database ស្ថិតនៅក្នុងស្ថានភាពត្រឹមត្រូវ',
        'Transaction មិនប៉ះពាល់គ្នា',
        'ការផ្លាស់ប្តូរត្រូវបានរក្សាទុកជាអចិន្ត្រៃយ៍',
      ],
      correct: 2,
      explanation: 'Isolation ធានាថា Transaction មិនប៉ះពាល់គ្នា។'
    },
    {
      question: 'តើ Durability ធានាអ្វី?',
      options: [
        'ប្រតិបត្តិការទាំងអស់បញ្ចប់',
        'Database ស្ថិតនៅក្នុងស្ថានភាពត្រឹមត្រូវ',
        'Transaction មិនប៉ះពាល់គ្នា',
        'ការផ្លាស់ប្តូរត្រូវបានរក្សាទុកជាអចិន្ត្រៃយ៍',
      ],
      correct: 3,
      explanation: 'Durability ធានាថាការផ្លាស់ប្តូរត្រូវបានរក្សាទុកជាអចិន្ត្រៃយ៍។'
    },
    {
      question: 'តើ Savepoint ប្រើសម្រាប់អ្វី?',
      options: [
        'ចាប់ផ្តើម Transaction',
        'រក្សាទុកចំណុចមួយក្នុង Transaction',
        'រក្សាទុកការផ្លាស់ប្តូរ',
        'លុប Transaction',
      ],
      correct: 1,
      explanation: 'Savepoint ប្រើសម្រាប់រក្សាទុកចំណុចមួយក្នុង Transaction។'
    },
    {
      question: 'តើ Isolation Level `READ UNCOMMITTED` អនុញ្ញាតឱ្យធ្វើអ្វី?',
      options: [
        'អានទិន្នន័យមិនទាន់ COMMIT',
        'អានទិន្នន័យដែលបាន COMMIT',
        'អានទិន្នន័យដែលមិនផ្លាស់ប្តូរ',
        'ប្រតិបត្តិ Transaction ជាលំដាប់',
      ],
      correct: 0,
      explanation: '`READ UNCOMMITTED` អនុញ្ញាតឱ្យអានទិន្នន័យមិនទាន់ COMMIT។'
    },
    {
      question: 'តើ Isolation Level `REPEATABLE READ` ធានាអ្វី?',
      options: [
        'អានទិន្នន័យមិនទាន់ COMMIT',
        'អានទិន្នន័យដែលបាន COMMIT',
        'ទិន្នន័យអានមិនផ្លាស់ប្តូរក្នុង Transaction',
        'ប្រតិបត្តិ Transaction ជាលំដាប់',
      ],
      correct: 2,
      explanation: '`REPEATABLE READ` ធានាថាទិន្នន័យអានមិនផ្លាស់ប្តូរក្នុង Transaction។'
    },
    {
      question: 'តើ Isolation Level `SERIALIZABLE` មានលក្ខណៈអ្វី?',
      options: [
        'អនុញ្ញាតឱ្យអានទិន្នន័យមិនទាន់ COMMIT',
        'អនុញ្ញាតឱ្យអានទិន្នន័យដែលបាន COMMIT',
        'ទិន្នន័យអានមិនផ្លាស់ប្តូរ',
        'ប្រតិបត្តិ Transaction ជាលំដាប់',
      ],
      correct: 3,
      explanation: '`SERIALIZABLE` ប្រតិបត្តិ Transaction ជាលំដាប់។'
    },
    {
      question: 'តើ Transaction ជួយ Data Integrity ដូចម្តេច?',
      options: [
        'ធ្វើឱ្យ Query លឿនជាង',
        'ធានាថាទិន្នន័យស្ថិតនៅក្នុងស្ថានភាពត្រឹមត្រូវ',
        'បង្កើនទំហំ Database',
        'លុបទិន្នន័យចាស់',
      ],
      correct: 1,
      explanation: 'Transaction ជួយ Data Integrity ដោយធានាថាទិន្នន័យស្ថិតនៅក្នុងស្ថានភាពត្រឹមត្រូវ។'
    },
    {
      question: 'តើអ្វីជាគុណវិបត្តិនៃ Isolation Level `SERIALIZABLE`?',
      options: [
        'អនុញ្ញាតឱ្យអានទិន្នន័យមិនទាន់ COMMIT',
        'បន្ថយ Performance ដោយសារការប្រតិបត្តិជាលំដាប់',
        'មិនអនុញ្ញាតឱ្យអានទិន្នន័យ',
        'មិនធានា Data Integrity',
      ],
      correct: 1,
      explanation: '`SERIALIZABLE` អាចបន្ថយ Performance ដោយសារការប្រតិបត្តិជាលំដាប់។'
    },
    {
      question: 'តើ Savepoint អាចប្រើបាននៅក្នុង Transaction ប៉ុន្មាន?',
      options: [
        'តែមួយ Savepoint ក្នុង Transaction',
        'ច្រើន Savepoints ក្នុង Transaction',
        'មិនអាចប្រើ Savepoint បាន',
        'តែមួយ Savepoint ក្នុង Database',
      ],
      correct: 1,
      explanation: 'អាចប្រើច្រើន Savepoints ក្នុង Transaction មួយ។'
    },
  ],
  lab: {
    task: `
គ្រប់គ្រង Transaction នៅក្នុង MySQL។

**តម្រូវការ:**

**1. បង្កើត Table:**
   - បង្កើត Table \`accounts\` ដែលមាន Columns: \`account_id\` (INT, PRIMARY KEY), \`balance\` (DECIMAL)។
   - បញ្ចូល ២ Records ដែលមាន \`account_id\` 1 និង 2 ជាមួយ \`balance\` 1000 និង 500។

**2. ប្រើ Transaction:**
   - ផ្ទេរប្រាក់ 200 ពី \`account_id\` 1 ទៅ \`account_id\` 2 ដោយប្រើ Transaction។
   - ប្រើ Savepoint បន្ទាប់ពីកាត់ប្រាក់ពី \`account_id\` 1។
   - បន្ថែមការកាត់ប្រាក់ 100 ទៀតពី \`account_id\` 1 ហើយ ROLLBACK ទៅ Savepoint។
   - COMMIT Transaction។

**3. Test:**
   - Query \`SELECT * FROM accounts\` ដើម្បីពិនិត្យ \`balance\`។
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries។

**ការណែនាំ:** ប្រើ \`SELECT * FROM accounts\` ដើម្បីពិនិត្យទិន្នន័យមុន និងក្រោយ Transaction។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Table
CREATE TABLE accounts (
  account_id INT PRIMARY KEY,
  balance DECIMAL(10,2)
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO accounts (account_id, balance)
VALUES 
  (1, 1000.00),
  (2, 500.00);

-- ប្រើ Transaction
START TRANSACTION;
UPDATE accounts SET balance = balance - 200 WHERE account_id = 1;
SAVEPOINT savepoint1;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
ROLLBACK TO savepoint1;
UPDATE accounts SET balance = balance + 200 WHERE account_id = 2;
COMMIT;

-- ពិនិត្យទិន្នន័យ
SELECT * FROM accounts;
\`\`\`
`
  }
};

export default MySQLLesson5_4Content;