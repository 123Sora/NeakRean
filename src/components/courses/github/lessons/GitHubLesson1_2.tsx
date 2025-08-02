import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson1_2Content: LessonContent = {
  title: 'ការដំឡើង Git និង Setup Environment',
  objectives: [
    'ដឹងពីរបៀបដំឡើង Git នៅលើ Windows, macOS, និង Linux',
    'កំណត់រចនាសម្ព័ន្ធ Git (user name, email)',
    'ស្គាល់ឧបករណ៍ចាំបាច់ (Command Prompt/Terminal, VS Code)',
    'ចាប់ផ្តើម Git Repository ដំបូង (git init)',
  ],
  content: `
# ការដំឡើង Git និង Setup Environment ⚙️

---

ដើម្បីប្រើ **Git** និង **GitHub** អ្នកត្រូវរៀបចំបរិស្ថានអភិវឌ្ឍន៍របស់អ្នកជាមុន។ មេរៀននេះនឹងណែនាំអ្នកអំពីការដំឡើង Git និងការរៀបចំឧបករណ៍ចាំបាច់។

---

## 1. ការដំឡើង Git នៅលើ Windows, macOS, Linux 💻

* **Windows:**
  1. ទាញយក Git ពី **git-scm.com/download/win**។
  2. ដំណើរការ Installer និងជ្រើសរើស Default Options (រួមទាំង Git Bash)។
  3. បើក Command Prompt ឬ Git Bash ហើយវាយ **\`git --version\`** ដើម្បីបញ្ជាក់។
* **macOS:**
  1. បើក Terminal និងវាយ **\`git --version\`**។
  2. ប្រសិនបើមិនទាន់ដំឡើង វានឹងស្នើឱ្យដំឡើង Xcode Command Line Tools។
  3. ឬទាញយក Git ពី **git-scm.com/download/mac**។
* **Linux:**
  1. បើក Terminal។
  2. ប្រើ Package Manager ដើម្បីដំឡើង Git:
     - Ubuntu/Debian: **\`sudo apt-get install git\`**
     - Fedora: **\`sudo dnf install git\`**
  3. ពិនិត្យកំណែ៖ **\`git --version\`**

---

## 2. ការកំណត់រចនាសម្ព័ន្ធ Git (User Name, Email) 📧

បន្ទាប់ពីដំឡើង Git អ្នកត្រូវកំណត់អត្តសញ្ញាណរបស់អ្នក។ នេះជួយ Git កត់ត្រាថានរណាជាអ្នកធ្វើ Commit។

* កំណត់ឈ្មោះអ្នកប្រើ៖
  \`\`\`bash
  git config --global user.name "Your Name"
  \`\`\`
* កំណត់អ៊ីមែល៖
  \`\`\`bash
  git config --global user.email "your.email@example.com"
  \`\`\`
* ពិនិត្យការកំណត់៖
  \`\`\`bash
  git config --list
  \`\`\`

---

## 3. ឧបករណ៍ដែលត្រូវការ 🛠️

* **Command Prompt/Terminal:** ប្រើ Command Prompt (Windows), PowerShell, Terminal (macOS/Linux), ឬ Git Bash។
* **VS Code:** ជា Code Editor ដ៏ពេញនិយម ដែលមាន Git Integration។
  - ទាញយកពី **code.visualstudio.com**។
  - ដំឡើង Extension ដូចជា **GitLens** សម្រាប់បទពិសោធន៍ Git កាន់តែប្រសើរ។
* **GitHub Account:** បង្កើតគណនីនៅ **github.com** ដើម្បីប្រើ Remote Repositories។

---

## 4. ការចាប់ផ្តើម Git Repository ដំបូង (git init) 📂

ដើម្បីចាប់ផ្តើមប្រើ Git អ្នកត្រូវបង្កើត Repository៖
1. បើក Terminal និងចូលទៅក្នុងថតគម្រោងរបស់អ្នក៖
   \`\`\`bash
   cd path/to/your/project
   \`\`\`
2. ចាប់ផ្តើម Repository៖
   \`\`\`bash
   git init
   \`\`\`
   នេះនឹងបង្កើតថត **.git** ដែលរក្សាទុកប្រវត្តិ Repository។
3. ពិនិត្យស្ថានភាព៖
   \`\`\`bash
   git status
   \`\`\`
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការដំឡើង Git នៅលើ Ubuntu

\`\`\`bash
# ធ្វើបច្ចុប្បន្នភាព Package Manager
sudo apt-get update

# ដំឡើង Git
sudo apt-get install git

# ពិនិត្យកំណែ
git --version
# លទ្ធផល: git version 2.39.2
\`\`\`

# ឧទាហរណ៍ ២: ការកំណត់រចនាសម្ព័ន្ធ Git

\`\`\`bash
# កំណត់ឈ្មោះ
git config --global user.name "Sok Sopheak"

# កំណត់អ៊ីមែល
git config --global user.email "sopheak@example.com"

# ពិនិត្យការកំណត់
git config --list
# លទ្ធផល:
# user.name=Sok Sopheak
# user.email=sopheak@example.com
\`\`\`

# ឧទាហរណ៍ ៣: ចាប់ផ្តើម Repository

\`\`\`bash
# បង្កើតថតគម្រោង
mkdir my-project
cd my-project

# ចាប់ផ្តើម Repository
git init
# លទ្ធផល: Initialized empty Git repository in /path/to/my-project/.git/

# ពិនិត្យស្ថានភាព
git status
# លទ្ធផល: On branch main, No commits yet
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើគេហទំព័រណាដែលអ្នកអាចទាញយក Git?',
      options: ['github.com', 'git-scm.com', 'gitlab.com', 'bitbucket.org'],
      correct: 1,
      explanation: 'Git អាចទាញយកបានពី **git-scm.com**។',
    },
    {
      question: 'តើ Command អ្វីដែលប្រើដើម្បីពិនិត្យកំណែ Git?',
      options: ['git version', 'git --version', 'git check', 'git status'],
      correct: 1,
      explanation: '`git --version` បង្ហាញកំណែ Git ដែលបានដំឡើង។',
    },
    {
      question: 'តើអ្នកត្រូវកំណត់អ្វីខ្លះបន្ទាប់ពីដំឡើង Git?',
      options: ['User Name និង Email', 'Password', 'Server URL', 'Project Name'],
      correct: 0,
      explanation: 'អ្នកត្រូវកំណត់ User Name និង Email សម្រាប់ Git។',
    },
    {
      question: 'តើ Command អ្វីដែលប្រើដើម្បីកំណត់ឈ្មោះអ្នកប្រើ?',
      options: [
        'git config user.email',
        'git config --global user.name',
        'git set name',
        'git init name',
      ],
      correct: 1,
      explanation: '`git config --global user.name` កំណត់ឈ្មោះអ្នកប្រើ។',
    },
    {
      question: 'តើឧបករណ៍ណាដែលស័ក្តិសមសម្រាប់ Git CLI នៅលើ Windows?',
      options: ['Notepad', 'Git Bash', 'File Explorer', 'Microsoft Word'],
      correct: 1,
      explanation: 'Git Bash គឺជាឧបករណ៍ CLI សម្រាប់ Git នៅលើ Windows។',
    },
    {
      question: 'តើ VS Code ជាអ្វី?',
      options: [
        'ប្រព័ន្ធប្រតិបត្តិការ',
        'Code Editor',
        'Web Browser',
        'Database Manager',
      ],
      correct: 1,
      explanation: 'VS Code ជា Code Editor ដ៏ពេញនិយមសម្រាប់អភិវឌ្ឍន៍។',
    },
    {
      question: 'តើ Command `git init` ធ្វើអ្វី?',
      options: [
        'បន្ថែមឯកសារទៅ Repository',
        'បង្កើត Git Repository ថ្មី',
        'បង្ហាញ Commit History',
        'ភ្ជាប់ទៅ Remote Repository',
      ],
      correct: 1,
      explanation: '`git init` បង្កើត Git Repository ថ្មី។',
    },
    {
      question: 'តើថតអ្វីត្រូវបានបង្កើតនៅពេលប្រើ `git init`?',
      options: ['.git', '.github', '.vscode', '.config'],
      correct: 0,
      explanation: '`git init` បង្កើតថត **.git** សម្រាប់រក្សាទុកប្រវត្តិ Repository។',
    },
    {
      question: 'តើអ្នកអាចដំឡើង Git នៅលើ macOS ដោយរបៀបណា?',
      options: [
        'តាមរយៈ Xcode Command Line Tools',
        'តាមរយៈ Microsoft Store',
        'តាមរយៈ Google Play',
        'មិនអាចដំឡើងបានទេ',
      ],
      correct: 0,
      explanation: 'នៅលើ macOS Git អាចដំឡើងបានតាមរយៈ Xcode Command Line Tools។',
    },
    {
      question: 'តើ Extension អ្វីនៅក្នុង VS Code ដែលជួយគ្រប់គ្រង Git?',
      options: ['GitLens', 'Live Server', 'Prettier', 'Docker'],
      correct: 0,
      explanation: 'GitLens ជា Extension ដែលជួយគ្រប់គ្រង Git នៅក្នុង VS Code�।',
    },
    {
      question: 'តើ Command `git config --list` ធ្វើអ្វី?',
      options: [
        'បង្ហាញស្ថានភាព Repository',
        'បង្ហាញការកំណត់រចនាសម្ព័ន្ធ Git',
        'បង្កើត Repository ថ្មី',
        'បន្ថែមឯកសារទៅ Staging Area',
      ],
      correct: 1,
      explanation: '`git config --list` បង្ហាញការកំណត់រចនាសម្ព័ន្ធ Git។',
    },
    {
      question: 'តើ Git Bash មាននៅលើប្រព័ន្ធប្រតិបត្តិការណា?',
      options: ['Windows', 'macOS', 'Linux', 'ទាំងអស់'],
      correct: 0,
      explanation: 'Git Bash មាននៅលើ Windows ជាផ្នែកនៃ Git Installer។',
    },
    {
      question: 'តើអ្នកត្រូវបង្កើតគណនីនៅទីណាដើម្បីប្រើ GitHub?',
      options: ['git-scm.com', 'github.com', 'code.visualstudio.com', 'microsoft.com'],
      correct: 1,
      explanation: 'អ្នកត្រូវបង្កើតគណនីនៅ **github.com**។',
    },
    {
      question: 'តើ Command `cd path/to/project` ធ្វើអ្វី?',
      options: [
        'បង្កើតថតថ្មី',
        'ផ្លាស់ទីទៅថតគម្រោង',
        'បង្ហាញឯកសារទាំងអស់',
        'បង្កើត Repository',
      ],
      correct: 1,
      explanation: '`cd path/to/project` ផ្លាស់ទីទៅថតគម្រោងនៅក្នុង Terminal។',
    },
    {
      question: 'តើអ្នកអាចប្រើ Git ដោយគ្មាន Code Editor បានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅលើ Windows', 'តែនៅលើ Linux'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Git អាចប្រើបានតាម CLI ដោយគ្មាន Code Editor។',
    },
    {
      question: 'តើការកំណត់ `--global` នៅក្នុង `git config` មានន័យថាអ្វី?',
      options: [
        'អនុវត្តសម្រាប់ Repository បច្ចុប្បន្នប៉ុណ្ណោះ',
        'អនុវត្តសម្រាប់គ្រប់ Repository នៅលើកុំព្យូទ័រ',
        'បង្កើត Remote Repository',
        'បន្ថែមឯកសារទៅ Staging Area',
      ],
      correct: 1,
      explanation: '`--global` ធ្វើឱ្យការកំណត់អនុវត្តសម្រាប់គ្រប់ Repository។',
    },
  ],
  lab: {
    task: `
រៀបចំបរិស្ថាន Git នៅលើកុំព្យូទ័ររបស់អ្នក៖
* ដំឡើង Git។
* កំណត់រចនាសម្ព័ន្ធ Git។
* បង្កើត Repository ដំបូង។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. ទាញយកនិងដំឡើង Git ពី **git-scm.com** សម្រាប់ប្រព័ន្ធប្រតិបត្តិការរបស់អ្នក។
2. បើក Terminal (ឬ Git Bash នៅលើ Windows) និងពិនិត្យកំណែ៖ **\`git --version\`**
3. កំណត់ឈ្មោះនិងអ៊ីមែលរបស់អ្នក៖
   \`\`\`bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   \`\`\`
4. បង្កើតថតគម្រោងថ្មីឈ្មោះ **'first-repo'** និងចាប់ផ្តើម Repository៖
   \`\`\`bash
   mkdir first-repo
   cd first-repo
   git init
   \`\`\`
5. ពិនិត្យស្ថានភាព Repository៖ **\`git status\`**
6. ដំឡើង VS Code ពី **code.visualstudio.com** និងបើកថត **first-repo** នៅក្នុង VS Code។
`,
    solution: `
# ដំណោះស្រាយ៖ ការដំឡើង Git និង Setup Environment

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផល៖

## ជំហានទី ១ និង ២៖ ដំឡើង Git
អ្នកបានទាញយកនិងដំឡើង Git ពី **git-scm.com**។ នៅក្នុង Terminal៖
\`\`\`bash
git --version
# លទ្ធផល: git version 2.39.2
\`\`\`

## ជំហានទី ៣៖ កំណត់រចនាសម្ព័ន្ធ Git
អ្នកបានកំណត់៖
\`\`\`bash
git config --global user.name "Sok Sopheak"
git config --global user.email "sopheak@example.com"
git config --list
# លទ្ធផល:
# user.name=Sok Sopheak
# user.email=sopheak@example.com
\`\`\`

## ជំហានទី ៤ និង ៥៖ បង្កើត Repository
អ្នកបានបង្កើតថតនិង Repository៖
\`\`\`bash
mkdir first-repo
cd first-repo
git init
# លទ្ធផល: Initialized empty Git repository in /path/to/first-repo/.git/
git status
# លទ្ធផល: On branch main, No commits yet
\`\`\`

## ជំហានទី ៦៖ ដំឡើង VS Code
អ្នកបានដំឡើង VS Code និងបើកថត **first-repo**។

លំហាត់នេះបានជួយអ្នកឱ្យរៀបចំបរិស្ថាន Git និងបង្កើត Repository ដំបូង។
`,
  },
};

export default GitHubLesson1_2Content;