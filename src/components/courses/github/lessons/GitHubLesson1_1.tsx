import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី Version Control System (VCS)',
  objectives: [
    'យល់អំពីគោលគំនិតនៃ Version Control System (VCS)',
    'ដឹងពីមូលហេតុដែលត្រូវប្រើ VCS',
    'ស្គាល់ប្រភេទនៃ VCS (Centralized vs. Distributed)',
    'ណែនាំអំពី Git ជា Distributed VCS',
    'យល់ពី Git Command-Line Interface (CLI)',
  ],
  content: `
# ណែនាំអំពី Version Control System (VCS) 📚

---

**Version Control System (VCS)** គឺជាប្រព័ន្ធដែលជួយគ្រប់គ្រងការផ្លាស់ប្តូរនៃ Source Code ឬឯកសារផ្សេងៗតាមពេលវេលា។ VCS អនុញ្ញាតឱ្យអ្នកតាមដានប្រវត្តិការផ្លាស់ប្តូរ សហការជាមួយអ្នកផ្សេង និងងាយស្រួលត្រឡប់ទៅកំណែចាស់បាន។

---

## 1. អ្វីទៅជា Version Control System? 🛠️

VCS គឺជាឧបករណ៍ដែលរក្សាទុកកំណែនីមួយៗនៃឯកសារឬកូដ។ វាដូចជា "Time Machine" សម្រាប់កូដរបស់អ្នក ដែលអនុញ្ញាតឱ្យអ្នក៖
* តាមដានរាល់ការផ្លាស់ប្តូរ។
* ដឹងថានរណាបានធ្វើការផ្លាស់ប្តូរ និងនៅពេលណា។
* ងាយស្រួលស្តារកំណែចាស់ (Rollback) ប្រសិនបើមានកំហុស។

---

## 2. មូលហេតុដែលត្រូវប្រើ VCS? ❓

* **ការតាមដានការផ្លាស់ប្តូរ:** អ្នកអាចមើលឃើញថាតើកូដណាត្រូវបានបន្ថែម កែប្រែ ឬលុប។
* **ការសហការ:** VCS អនុញ្ញាតឱ្យអ្នកធ្វើការជាក្រុម ដោយមិនប៉ះពាល់ដល់កូដរបស់គ្នាទៅវិញទៅមក។
* **ការស្តារកំណែចាស់ (Rollback):** ប្រសិនបើមានកំហុស អ្នកអាចត្រឡប់ទៅកំណែដែលដំណើរការបាន។
* **ការបម្រុងទុក (Backup):** VCS រក្សាទុកប្រវត្តិទាំងអស់ ដែលជួយការពារការបាត់បង់ទិន្នន័យ។

---

## 3. ប្រភេទនៃ VCS 🗂️

មាន VCS ពីរប្រភេទសំខាន់៖
* **Centralized VCS (CVCS):** 
  * មាន Server កណ្តាលតែមួយដែលរក្សាទុកកូដ។
  * ឧទាហរណ៍៖ Subversion (SVN), Perforce។
  * គុណវិបត្តិ៖ ប្រសិនបើ Server ដាច់ អ្នកមិនអាចធ្វើការបានទេ។
* **Distributed VCS (DVCS):**
  * អ្នកនីមួយៗមានច្បាប់ចម្លងពេញលេញនៃ Repository ។
  * ឧទាហរណ៍៖ Git, Mercurial។
  * គុណសម្បត្តិ៖ អាចធ្វើការដោយគ្មានអ៊ីនធឺណិត និងមានភាពបត់បែនជាង។

---

## 4. ការណែនាំអំពី Git 📈

**Git** គឺជា Distributed VCS ដែលបង្កើតឡើងដោយ Linus Torvalds ក្នុងឆ្នាំ ២០០៥។ វាមានលក្ខណៈពិសេសដូចជា៖
* **ភាពលឿន:** Git ដំណើរការលឿន ទោះបីមាន Repository ធំក៏ដោយ។
* **ភាពបត់បែន:** អនុញ្ញាតឱ្យធ្វើការនៅ Local និង Remote។
* **សុវត្ថិភាព:** ប្រើ Cryptographic Hash (SHA-1) ដើម្បីការពារការផ្លាស់ប្តូរ។
* **Branching:** Git មានប្រព័ន្ធ Branching ដ៏ខ្លាំង ដែលជួយក្នុងការអភិវឌ្ឍន៍។

---

## 5. Git Command-Line Interface (CLI) ⌨️

Git ភាគច្រើនត្រូវបានប្រើតាមរយៈ Command Line។ ឧទាហរណ៍នៃ Commands មូលដ្ឋាន៖
* \`git init\`: ចាប់ផ្តើម Repository ថ្មី។
* \`git status\`: ពិនិត្យស្ថានភាពនៃ Repository។
* \`git add\`: បន្ថែមឯកសារទៅ Staging Area។
* \`git commit\`: រក្សាទុកការផ្លាស់ប្តូរទៅ Repository។

អ្នកអាចប្រើ Terminal (Linux/macOS) ឬ Command Prompt/PowerShell (Windows) ដើម្បីបញ្ជា Git។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការប្រើ VCS ក្នុងការអភិវឌ្ឍន៍

ឧបមាថាអ្នកកំពុងធ្វើការលើ Project មួយ។ ដោយគ្មាន VCS អ្នកត្រូវបង្កើតថតឯកសារដូចជា៖
- project_v1
- project_v2
- project_final
- project_final_fixed

ប៉ុន្តែជាមួយ VCS (ដូចជា Git) អ្នកអាច៖
- រក្សាទុកកំណែទាំងអស់នៅក្នុង Repository តែមួយ។
- ប្រើ Commands ដើម្បីមើលភាពខុសគ្នារវាងកំណែ។
- សហការជាមួយអ្នកផ្សេងដោយមិនចម្លងឯកសារទៅវិញទៅមក។

# ឧទាហរណ៍ ២: Centralized vs. Distributed VCS

- **Centralized VCS (SVN):**
  \`\`\`
  [Server]
    - Repository
  [Client 1] <--> [Server] <--> [Client 2]
  \`\`\`
  ប្រសិនបើ Server ដាច់ អ្នកមិនអាច Commit ឬ Pull បានទេ។

- **Distributed VCS (Git):**
  \`\`\`
  [Client 1]
    - Full Repository Copy
  [Client 2]
    - Full Repository Copy
  <--> [Remote Server]
  \`\`\`
  អ្នកអាចធ្វើការនៅ Local ដោយគ្មានអ៊ីនធឺណិត។
`,
  ],
  quiz: [
    {
      question: 'តើ Version Control System (VCS) គឺជាអ្វី?',
      options: [
        'ប្រព័ន្ធសម្រាប់គ្រប់គ្រង Server',
        'ប្រព័ន្ធដែលជួយគ្រប់គ្រងការផ្លាស់ប្តូរនៃ Source Code ឬឯកសារ',
        'ឧបករណ៍សម្រាប់សរសេរកូដ',
        'ប្រព័ន្ធសម្រាប់បង្កើត Website',
      ],
      correct: 1,
      explanation: 'VCS គឺជាប្រព័ន្ធដែលជួយគ្រប់គ្រងការផ្លាស់ប្តូរនៃ Source Code ឬឯកសារតាមពេលវេលា។',
    },
    {
      question: 'តើមូលហេតុសំខាន់មួយនៃការប្រើ VCS គឺជាអ្វី?',
      options: [
        'ដើម្បីបង្កើនល្បឿនអ៊ីនធឺណិត',
        'ដើម្បីតាមដានការផ្លាស់ប្តូរនៃកូដ',
        'ដើម្បីបង្កើត Database',
        'ដើម្បីគ្រប់គ្រង Hardware',
      ],
      correct: 1,
      explanation: 'VCS ជួយតាមដានការផ្លាស់ប្តូរនៃកូដ ដែលធ្វើឱ្យការអភិវឌ្ឍន៍កាន់តែងាយស្រួល។',
    },
    {
      question: 'តើ Centralized VCS ខុសពី Distributed VCS ដោយរបៀបណា?',
      options: [
        'CVCS មាន Server កណ្តាល ចំណែក DVCS អ្នកនីមួយៗមាន Repository ពេញលេញ',
        'CVCS លឿនជាង DVCS',
        'CVCS មិនអនុញ្ញាតឱ្យសហការ',
        'DVCS មិនអនុញ្ញាតឱ្យ Rollback',
      ],
      correct: 0,
      explanation: 'CVCS មាន Server កណ្តាលតែមួយ ចំណែក DVCS អនុញ្ញាតឱ្យអ្នកនីមួយៗមាន Repository ពេញលេញ។',
    },
    {
      question: 'តើឧទាហរណ៍នៃ Distributed VCS គឺជាអ្វី?',
      options: ['Subversion (SVN)', 'Git', 'Perforce', 'Team Foundation Server'],
      correct: 1,
      explanation: 'Git គឺជា Distributed VCS ដ៏ពេញនិយមមួយ។',
    },
    {
      question: 'តើនរណាជាអ្នកបង្កើត Git?',
      options: ['Bill Gates', 'Linus Torvalds', 'Steve Jobs', 'Mark Zuckerberg'],
      correct: 1,
      explanation: 'Git ត្រូវបានបង្កើតឡើងដោយ Linus Torvalds ក្នុងឆ្នាំ ២០០៥។',
    },
    {
      question: 'តើ Git CLI គឺជាអ្វី?',
      options: [
        'កម្មវិធី GUI សម្រាប់ Git',
        'Command Line Interface សម្រាប់បញ្ជា Git',
        'Server សម្រាប់ Git',
        'ភាសាសរសេរកម្មវិធី',
      ],
      correct: 1,
      explanation: 'Git CLI គឺជា Command Line Interface សម្រាប់បញ្ជា Git។',
    },
    {
      question: 'តើ Command `git init` ធ្វើអ្វី?',
      options: [
        'បង្កើត Repository ថ្មី',
        'បន្ថែមឯកសារទៅ Staging Area',
        'រក្សាទុកការផ្លាស់ប្តូរ',
        'បង្ហាញស្ថានភាព Repository',
      ],
      correct: 0,
      explanation: '`git init` បង្កើត Git Repository ថ្មី។',
    },
    {
      question: 'តើ VCS អនុញ្ញាតឱ្យអ្នកធ្វើអ្វីបាន?',
      options: [
        'បង្កើត Website ដោយស្វ័យប្រវត្តិ',
        'ស្តារកំណែចាស់នៃកូដ',
        'គ្រប់គ្រង Email Server',
        'បង្កើន RAM របស់កុំព្យូទ័រ',
      ],
      correct: 1,
      explanation: 'VCS អនុញ្ញាតឱ្យអ្នកស្តារកំណែចាស់នៃកូដ (Rollback)។',
    },
    {
      question: 'តើគុណវិបត្តិនៃ Centralized VCS គឺជាអ្វី?',
      options: [
        'វាមិនអនុញ្ញាតឱ្យសហការ',
        'ប្រសិនបើ Server ដាច់ អ្នកមិនអាចធ្វើការបាន',
        'វាមិនមាន Branching',
        'វាមិនអនុញ្ញាតឱ្យ Commit',
      ],
      correct: 1,
      explanation: 'នៅពេល Server កណ្តាលដាច់ អ្នកមិនអាចធ្វើការបានទេនៅក្នុង CVCS។',
    },
    {
      question: 'តើ Git ប្រើអ្វីដើម្បីការពារការផ្លាស់ប្តូរ?',
      options: ['MD5', 'SHA-1', 'RSA', 'AES'],
      correct: 1,
      explanation: 'Git ប្រើ Cryptographic Hash (SHA-1) ដើម្បីការពារការផ្លាស់ប្តូរ។',
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិមួយនៃ Distributed VCS?',
      options: [
        'តម្រូវឱ្យមានអ៊ីនធឺណិតជានិច្ច',
        'អាចធ្វើការដោយគ្មានអ៊ីនធឺណិត',
        'មាន Server កណ្តាលតែមួយ',
        'មិនអនុញ្ញាតឱ្យ Branch',
      ],
      correct: 1,
      explanation: 'Distributed VCS អនុញ្ញាតឱ្យធ្វើការដោយគ្មានអ៊ីនធឺណិត។',
    },
    {
      question: 'តើ Command `git status` ធ្វើអ្វី?',
      options: [
        'បន្ថែមឯកសារទៅ Staging Area',
        'បង្ហាញស្ថានភាពនៃ Repository',
        'បង្កើត Branch ថ្មី',
        'រក្សាទុកការផ្លាស់ប្តូរ',
      ],
      correct: 1,
      explanation: '`git status` បង្ហាញស្ថានភាពបច្ចុប្បន្ននៃ Repository។',
    },
    {
      question: 'តើ Git ត្រូវបានបង្កើតឡើងនៅឆ្នាំណា?',
      options: ['1995', '2005', '2015', '2020'],
      correct: 1,
      explanation: 'Git ត្រូវបានបង្កើតឡើងនៅឆ្នាំ ២០០៥។',
    },
    {
      question: 'តើអ្នកអាចប្រើ Git នៅលើប្រព័ន្ធប្រតិបត្តិការណាខ្លះ?',
      options: [
        'Windows ប៉ុណ្ណោះ',
        'Linux ប៉ុណ្ណោះ',
        'Windows, macOS, និង Linux',
        'macOS ប៉ុណ្ណោះ',
      ],
      correct: 2,
      explanation: 'Git អាចប្រើបាននៅលើ Windows, macOS, និង Linux។',
    },
    {
      question: 'តើ VCS ជួយអ្នកសហការជាមួយក្រុមដោយរបៀបណា?',
      options: [
        'ដោយបង្កើត Email Server',
        'ដោយអនុញ្ញាតឱ្យអ្នកផ្សេងធ្វើការលើកូដដូចគ្នា',
        'ដោយបង្កើនល្បឿនកុំព្យូទ័រ',
        'ដោយបង្កើត Website',
      ],
      correct: 1,
      explanation: 'VCS អនុញ្ញាតឱ្យអ្នកផ្សេងធ្វើការលើកូដដូចគ្នាដោយមិនប៉ះពាល់គ្នា។',
    },
    {
      question: 'តើ Branching នៅក្នុង Git មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បង្កើនទំហំផ្ទុក',
        'អនុញ្ញាតឱ្យអភិវឌ្ឍន៍មុខងារថ្មីដោយឡែក',
        'បង្កើត Database',
        'បង្កើនល្បឿនអ៊ីនធឺណិត',
      ],
      correct: 1,
      explanation: 'Branching អនុញ្ញាតឱ្យអភិវឌ្ឍន៍មុខងារថ្មីដោយមិនប៉ះពាល់កូដមេ។',
    },
  ],
  lab: {
    task: `
រៀបចំបរិស្ថានសម្រាប់សិក្សា VCS និង Git៖
* ស្វែងយល់អំពី Git នៅលើគេហទំព័រ។
* សាកល្បងប្រើ Git CLI ដើម្បីមើលជំនួយ។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. ចូលទៅគេហទំព័រ **git-scm.com** និងអានផ្នែក **About** ដើម្បីស្វែងយល់អំពី Git។
2. បើក Terminal (Linux/macOS) ឬ Command Prompt (Windows)។
3. វាយបញ្ជា **\`git --help\`** ដើម្បីមើលជំនួយអំពី Git CLI។
4. វាយបញ្ជា **\`git --version\`** ដើម្បីពិនិត្យថាតើ Git ត្រូវបានដំឡើងឬនៅ។
5. សរសេរកំណត់ចំណាំខ្លីៗ (១០០ ពាក្យ) អំពីអត្ថប្រយោជន៍នៃ VCS និងហេតុអ្វីបានជា Git ពេញនិយម។
`,
    solution: `
# ដំណោះស្រាយ៖ ការស្វែងយល់អំពី VCS និង Git

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផល៖

## ជំហានទី ១៖ ស្វែងយល់អំពី Git
អ្នកបានចូលទៅ **git-scm.com** និងអានផ្នែក **About**។ អ្នកបានដឹងថា Git ជា Distributed VCS ដែលលឿន បត់បែន និងសុវត្ថិភាព។

## ជំហានទី ២ និង ៣៖ បើក Terminal និងប្រើ Git CLI
អ្នកបានបើក Terminal និងវាយ៖
- **\`git --help\`**: បង្ហាញជំនួយអំពី Git Commands។
- **\`git --version\`**: បង្ហាញកំណែ Git (ឧ. \`git version 2.39.2\`)។

## ជំហានទី ៤៖ កំណត់ចំណាំ
ឧទាហរណ៍កំណត់ចំណាំ៖
"VCS ជួយគ្រប់គ្រងការផ្លាស់ប្តូរកូដ ធ្វើឱ្យការសហការកាន់តែងាយស្រួល និងអនុញ្ញាតឱ្យស្តារកំណែចាស់។ Git ពេញនិយមព្រោះវាជា Distributed VCS ដែលអនុញ្ញាតឱ្យធ្វើការដោយគ្មានអ៊ីនធឺណិត មាន Branching ដ៏ខ្លាំង និងសុវត្ថិភាពខ្ពស់ជាមួយ SHA-1។ វាលឿន បត់បែន និងត្រូវបានប្រើយ៉ាងទូលំទូលាយនៅក្នុងគម្រោងអភិវឌ្ឍន៍។"

លំហាត់នេះបានជួយអ្នកឱ្យស្គាល់គោលគំនិត VCS និង Git CLI។
`,
  },
};

export default GitHubLesson1_1Content;