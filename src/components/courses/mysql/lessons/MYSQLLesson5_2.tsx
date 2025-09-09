import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson5_2Content: LessonContent = {
  title: 'ការបម្រុងទុក និងស្តារទិន្នន័យ',
  objectives: [
    'យល់ដឹងអំពីសារៈសំខាន់នៃការបម្រុងទុកទិន្នន័យ',
    'រៀនបម្រុងទុក Database ដោយប្រើ `mysqldump`',
    'រៀនស្តារទិន្នន័យដោយប្រើ `mysql`',
    'ស្វែងយល់អំពី Point-in-Time Recovery',
    'រៀនគ្រប់គ្រង Backup Schedules',
    'យល់ពីប្រភេទនៃ Backup (Full, Incremental)',
  ],
  content: `
# ការបម្រុងទុក និងស្តារទិន្នន័យ 📚

---

**ការបម្រុងទុក (Backup)** និង**ស្តារទិន្នន័យ (Restore)** គឺជាដំណើរការសំខាន់ដើម្បីការពារទិន្នន័យពីការបាត់បង់។

---

## 1. ការបម្រុងទុកដោយប្រើ mysqldump

ប្រើ \`mysqldump\` ដើម្បីបម្រុងទុក Database ទៅជា SQL File។

**ឧទាហរណ៍:**
\`\`\`bash
mysqldump -u root -p company_db > company_db_backup.sql
\`\`\`

---

## 2. ការស្តារទិន្នន័យ

ប្រើ \`mysql\` ដើម្បីស្តារទិន្នន័យពី SQL File។

**ឧទាហរណ៍:**
\`\`\`bash
mysql -u root -p company_db < company_db_backup.sql
\`\`\`

---

## 3. Point-in-Time Recovery

**Point-in-Time Recovery** អនុញ្ញាតឱ្យស្តារទិន្នន័យទៅចំណុចពេលជាក់លាក់ដោយប្រើ Binary Logs។

**ឧទាហរណ៍:**
\`\`\`bash
mysqlbinlog --start-datetime="2025-01-01 00:00:00" --stop-datetime="2025-01-02 00:00:00" binlog.000001 | mysql -u root -p
\`\`\`

---

## 4. ប្រភេទនៃ Backup

- **Full Backup**: បម្រុងទុក Database ទាំងមូល។
- **Incremental Backup**: បម្រុងទុកតែការផ្លាស់ប្តូរចាប់តាំងពី Backup ចុងក្រោយ។

---

## 5. Backup Schedules

ប្រើ Cron Jobs ឬ Tools ដើម្បីកំណត់ពេល Backup។

**ឧទាហរណ៍ (Cron Job):**
\`\`\`bash
0 2 * * * mysqldump -u root -p company_db > /backups/company_db_$(date +%F).sql
\`\`\`

**គន្លឹះ:** ធ្វើ Backup ជាប្រចាំ និងរក្សាទុកនៅទីតាំងសុវត្ថិភាព។
`,
  examples: [
    `
### ឧទាហរណ៍៖ បម្រុងទុក Database
បម្រុងទុក Database \`shop_db\`។
\`\`\`sql
mysqldump -u root -p shop_db > shop_db_backup.sql
\`\`\`
`,
    `
### ឧទាហរណ៍៖ ស្តារទិន្នន័យ</h3>
ស្តារទិន្នន័យទៅ Database \`shop_db\`។
\`\`\`sql
mysql -u root -p shop_db < shop_db_backup.sql
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើការបម្រុងទុកទិន្នន័យមានសារៈសំខាន់ដែរឬទេ?',
      options: [
        'សំខាន់',
        'មិនសំខាន់',
        'សំខាន់តែនៅក្នុង Database ធំៗ',
        'សំខាន់តែនៅក្នុង Database តូចៗ',
      ],
      correct: 0,
      explanation: 'ការបម្រុងទុកទិន្នន័យគឺសំខាន់ដើម្បីការពារការបាត់បង់ទិន្នន័យ។'
    },
    {
      question: 'តើ `mysqldump` ប្រើសម្រាប់អ្វី?',
      options: [
        'ស្តារទិន្នន័យ',
        'បម្រុងទុក Database',
        'កែប្រែទិន្នន័យ',
        'លុប Database',
      ],
      correct: 1,
      explanation: '`mysqldump` ប្រើសម្រាប់បម្រុងទុក Database។'
    },
    {
      question: 'តើ `mysql` ប្រើសម្រាប់អ្វីនៅក្នុងការស្តារទិន្នន័យ?',
      options: [
        'បម្រុងទុក Database',
        'ស្តារទិន្នន័យពី SQL File',
        'បង្កើត Database',
        'លុប Database',
      ],
      correct: 1,
      explanation: '`mysql` ប្រើសម្រាប់ស្តារទិន្នន័យពី SQL File។'
    },
    {
      question: 'តើ Point-in-Time Recovery គឺជាអ្វី?',
      options: [
        'បម្រុងទុក Database ទាំងមូល',
        'ស្តារទិន្នន័យទៅចំណុចពេលជាក់លាក់',
        'លុបទិន្នន័យ',
        'បង្កើត Database ថ្មី',
      ],
      correct: 1,
      explanation: 'Point-in-Time Recovery ស្តារទិន្នន័យទៅចំណុចពេលជាក់លាក់។'
    },
    {
      question: 'តើ Full Backup គឺជាអ្វី?',
      options: [
        'បម្រុងទុកតែការផ្លាស់ប្តូរ',
        'បម្រុងទុក Database ទាំងមូល',
        'ស្តារទិន្នន័យ',
        'លុប Database',
      ],
      correct: 1,
      explanation: 'Full Backup បម្រុងទុក Database ទាំងមូល។'
    },
    {
      question: 'តើ Incremental Backup គឺជាអ្វី?',
      options: [
        'បម្រុងទុក Database ទាំងមូល',
        'បម្រុងទុកតែការផ្លាស់ប្តូរចាប់តាំងពី Backup ចុងក្រោយ',
        'ស្តារទិន្នន័យ',
        'លុប Database',
      ],
      correct: 1,
      explanation: 'Incremental Backup បម្រុងទុកតែការផ្លាស់ប្តូរចាប់តាំងពី Backup ចុងក្រោយ។'
    },
    {
      question: 'តើ Binary Logs ប្រើសម្រាប់អ្វី?',
      options: [
        'បម្រុងទុក Database',
        'Point-in-Time Recovery',
        'បង្កើត Database',
        'លុប Database',
      ],
      correct: 1,
      explanation: 'Binary Logs ប្រើសម្រាប់ Point-in-Time Recovery។'
    },
    {
      question: 'តើ Cron Job ប្រើសម្រាប់អ្វី?',
      options: [
        'បម្រុងទុក Database',
        'កំណត់ពេល Backup',
        'ស្តារទិន្នន័យ',
        'លុប Database',
      ],
      correct: 1,
      explanation: 'Cron Job ប្រើសម្រាប់កំណត់ពេល Backup។'
    },
    {
      question: 'តើគួររក្សាទុក Backup នៅទីណា?',
      options: [
        'នៅលើ Server ដដែល',
        'នៅទីតាំងសុវត្ថិភាពផ្សេង',
        'នៅក្នុង Database',
        'នៅក្នុង Table',
      ],
      correct: 1,
      explanation: 'គួររក្សាទុក Backup នៅទីតាំងសុវត្ថិភាពផ្សេង។'
    },
    {
      question: 'តើ `mysqldump` បង្កើត File ប្រភេទណា?',
      options: [
        'CSV File',
        'SQL File',
        'Binary File',
        'Text File',
      ],
      correct: 1,
      explanation: '`mysqldump` បង្កើត SQL File។'
    },
    {
      question: 'តើអ្នកត្រូវបង្កើត Database មុនស្តារទិន្នន័យទេ?',
      options: [
        'ត្រូវ',
        'មិនត្រូវ',
        'ត្រូវ ប៉ុន្តែតែនៅក្នុង Full Backup',
        'ត្រូវ ប៉ុន្តែតែនៅក្នុង Incremental Backup',
      ],
      correct: 0,
      explanation: 'អ្នកត្រូវបង្កើត Database មុនស្តារទិន្នន័យ។'
    },
    {
      question: 'តើ Point-in-Time Recovery តម្រូវឱ្យមានអ្វី?',
      options: [
        'Full Backup',
        'Binary Logs',
        'SQL File',
        'Table Structure',
      ],
      correct: 1,
      explanation: 'Point-in-Time Recovery តម្រូវឱ្យមាន Binary Logs។'
    },
    {
      question: 'តើ Full Backup មានគុណវិបត្តិអ្វី?',
      options: [
        'ប្រើទំហំផ្ទុកច្រើន',
        'ប្រើទំហំផ្ទុកតិច',
        'មិនអាចស្តារទិន្នន័យបាន',
        'មិនអាចបម្រុងទុកបាន',
      ],
      correct: 0,
      explanation: 'Full Backup ប្រើទំហំផ្ទុកច្រើន។'
    },
    {
      question: 'តើ Incremental Backup មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'ប្រើទំហំផ្ទុកច្រើន',
        'ប្រើទំហំផ្ទុកតិច',
        'មិនអាចស្តារទិន្នន័យបាន',
        'មិនអាចបម្រុងទុកបាន',
      ],
      correct: 1,
      explanation: 'Incremental Backup ប្រើទំហំផ្ទុកតិច។'
    },
    {
      question: 'តើគួរធ្វើ Backup ញឹកញាប់ប៉ុណ្ណា?',
      options: [
        'ម្តងក្នុងមួយឆ្នាំ',
        'ជាប្រចាំ',
        'ម្តងក្នុងមួយសប្តាហ៍',
        'ម្តងក្នុងមួយខែ',
      ],
      correct: 1,
      explanation: 'គួរធ្វើ Backup ជាប្រចាំ។'
    },
  ],
  lab: {
    task: `
ធ្វើការបម្រុងទុក និងស្តារទិន្នន័យនៅក្នុង MySQL។

**តម្រូវការ:**

1. **បម្រុងទុក Database:**
   - បម្រុងទុក Database \`shop_db\` ទៅជា File \`shop_db_backup.sql\`។

2. **ស្តារទិន្នន័យ:**
   - បង្កើត Database ថ្មី \`shop_db_restore\`។
   - ស្តារទិន្នន័យពី \`shop_db_backup.sql\` ទៅ \`shop_db_restore\`។

3. **Test:**
   - Query \`SELECT * FROM products\` ពី \`shop_db_restore\` ដើម្បីពិនិត្យទិន្នន័យ។
   - ប្រើ MySQL Workbench ឬ Command Line ដើម្បី Run Commands។

**ការណែនាំ:** ត្រូវប្រាកដថាមាន Database \`shop_db\` មុននឹងបម្រុងទុក។
    `,
    solution: `
\`\`\`bash
# បម្រុងទុក Database
mysqldump -u root -p shop_db > shop_db_backup.sql

# បង្កើត Database ថ្មី
mysql -u root -p -e "CREATE DATABASE shop_db_restore"

# ស្តារទិន្នន័យ
mysql -u root -p shop_db_restore < shop_db_backup.sql

# ពិនិត្យទិន្នន័យ
mysql -u root -p -e "SELECT * FROM shop_db_restore.products"
\`\`\`
`
  }
};

export default MySQLLesson5_2Content;