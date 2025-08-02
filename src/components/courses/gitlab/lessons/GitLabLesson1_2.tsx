// src/components/lessons/gitlab/GitLabLesson1_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson1_2Content: LessonContent = {
  title: 'Git Fundamentals (មូលដ្ឋានគ្រឹះ Git)',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Git និងមូលហេតុដែលត្រូវប្រើវា',
    'ស្គាល់ពីគោលគំនិតសំខាន់ៗរបស់ Git (Repository, Commit, Branch, Merge, Push, Pull)',
    'ដឹងពីរបៀបដំឡើង Git នៅលើកុំព្យូទ័ររបស់អ្នក',
    'អនុវត្ត Commands Git មូលដ្ឋាន (git init, git add, git commit, git status, git log)',
    'យល់ដឹងពី Workflow មូលដ្ឋានរបស់ Git'
  ],
  content: `
# Git Fundamentals (មូលដ្ឋានគ្រឹះ Git) 🌳

---

**Git** គឺជា Distributed Version Control System (DVCS) ដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយបំផុតសម្រាប់តាមដានការផ្លាស់ប្តូរនៅក្នុង Source Code ក្នុងអំឡុងពេលអភិវឌ្ឍន៍ Software ។ វាអនុញ្ញាតឱ្យ Developers ធ្វើការរួមគ្នាលើ Project មួយដោយមិនចាំបាច់បារម្ភពីការសរសេរជាន់គ្នាលើការងាររបស់អ្នកដទៃ។ GitLab ត្រូវបានបង្កើតឡើងនៅលើ Git ។

---

## 1. អ្វីទៅជា Git? 💡

* **Version Control System (VCS):** ជាប្រព័ន្ធដែលកត់ត្រាការផ្លាស់ប្តូរទៅលើ File ឬសំណុំ Files តាមពេលវេលា ដូច្នេះអ្នកអាចហៅយក Version ជាក់លាក់ណាមួយនៅពេលក្រោយបាន។
* **Distributed (ចែកចាយ):** មិនដូច Centralized VCS (ដូចជា SVN) ទេ Git អនុញ្ញាតឱ្យ Developers ម្នាក់ៗមាន Local Copy ពេញលេញនៃ Repository ទាំងមូល រួមទាំងប្រវត្តិសាស្រ្តពេញលេញរបស់វា។ នេះធ្វើឱ្យវាលឿន គួរឱ្យទុកចិត្ត និងអាចធ្វើការ Offline បាន។

---

## 2. គោលគំនិតសំខាន់ៗរបស់ Git 🧠

* **Repository (Repo):**
    * ជាកន្លែងផ្ទុក Project របស់អ្នក រួមទាំង Files ទាំងអស់ និងប្រវត្តិសាស្រ្តនៃការផ្លាស់ប្តូររបស់វា។
    * មានពីរប្រភេទ៖ **Local Repository** (នៅលើកុំព្យូទ័ររបស់អ្នក) និង **Remote Repository** (នៅលើ Server ដូចជា GitLab) ។
* **Commit:**
    * ជា Snapshot នៃ Changes របស់អ្នកនៅចំណុចជាក់លាក់មួយក្នុងពេលវេលា។
    * រាល់ Commit មាន Message ដែលពិពណ៌នាអំពី Changes ។
    * វាជា "Save Point" ក្នុងប្រវត្តិសាស្រ្ត Project របស់អ្នក។
* **Branch (សាខា):**
    * ជាបន្ទាត់នៃការអភិវឌ្ឍន៍ដាច់ដោយឡែក។
    * អនុញ្ញាតឱ្យ Developers ធ្វើការលើមុខងារថ្មីៗ ឬកែតម្រូវ Bug ដោយមិនប៉ះពាល់ដល់ Code មេ (main/master branch) ។
    * នៅពេលដែលការងារនៅលើ Branch មួយត្រូវបានបញ្ចប់ វាអាចត្រូវបានបញ្ចូល (Merge) ទៅក្នុង Branch ផ្សេងទៀត។
* **Merge (បញ្ចូល):**
    * ដំណើរការនៃការបញ្ចូល Changes ពី Branch មួយទៅ Branch មួយទៀត។
* **Push (រុញ):**
    * ដំណើរការនៃការ Upload Changes ពី Local Repository របស់អ្នកទៅ Remote Repository ។
* **Pull (ទាញ):**
    * ដំណើរការនៃការ Download Changes ពី Remote Repository ទៅ Local Repository របស់អ្នក។

---

## 3. ការដំឡើង Git នៅលើកុំព្យូទ័ររបស់អ្នក 💻

មុនពេលអ្នកចាប់ផ្តើមប្រើ Git អ្នកត្រូវដំឡើងវានៅលើកុំព្យូទ័ររបស់អ្នក។

* **Windows:** ទាញយក Git for Windows ពី \`https://git-scm.com/download/win\` ។ អនុវត្តតាមការណែនាំដំឡើង។
* **macOS:**
    * អាចដំឡើងជាមួយ Homebrew: \`brew install git\` ។
    * ឬដំឡើង Xcode Command Line Tools: \`xcode-select --install\` ។
* **Linux:** ប្រើ Package Manager របស់ Distribution របស់អ្នក (ឧទាហរណ៍៖ \`sudo apt-get install git\` សម្រាប់ Debian/Ubuntu) ។

**ការកំណត់រចនាសម្ព័ន្ធដំបូង (បន្ទាប់ពីដំឡើង):**
បើក Terminal ឬ Git Bash ហើយកំណត់ Username និង Email របស់អ្នក (នេះនឹងបង្ហាញក្នុង Commit History)៖

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
\`\`\`

---

## 4. Commands Git មូលដ្ឋាន ⌨️

នេះគឺជា Commands Git ដែលអ្នកនឹងប្រើប្រាស់ញឹកញាប់បំផុត៖

* **\`git init\`**:
    * **គោលបំណង:** បង្កើត Git Repository ថ្មីនៅក្នុង Directory បច្ចុប្បន្ន។ នេះជាជំហានដំបូងដើម្បីចាប់ផ្តើមតាមដាន Project មួយជាមួយ Git ។
    * **ឧទាហរណ៍:**
        \`\`\`bash
        mkdir my_project
        cd my_project
        git init
        # Output: Initialized empty Git repository in /path/to/my_project/.git/
        \`\`\`
* **\`git add <file_name>\` / \`git add .\`**:
    * **គោលបំណង:** បន្ថែម Files ពី Working Directory របស់អ្នកទៅ Staging Area ។ Staging Area គឺជាកន្លែងដែលអ្នករៀបចំ Changes របស់អ្នកមុនពេល Commit ។
    * \`git add .\` បន្ថែម Files ទាំងអស់នៅក្នុង Directory បច្ចុប្បន្ន និង Subdirectories ។
    * **ឧទាហរណ៍:**
        \`\`\`bash
        echo "Hello, Git!" > hello.txt
        git add hello.txt
        # Or to add all changes:
        git add .
        \`\`\`
* **\`git commit -m "Your commit message"\`**:
    * **គោលបំណង:** រក្សាទុក Changes ពី Staging Area ទៅ Local Repository របស់អ្នកជា Commit ថ្មី។ Commit Message គួរតែពិពណ៌នាអំពី Changes ដែលអ្នកបានធ្វើ។
    * **ឧទាហរណ៍:**
        \`\`\`bash
        git commit -m "Add initial hello.txt file"
        # Output: [main (root-commit) 1a2b3c4] Add initial hello.txt file
        # 1 file changed, 1 insertion(+)
        # create mode 100644 hello.txt
        \`\`\`
* **\`git status\`**:
    * **គោលបំណង:** បង្ហាញស្ថានភាព Working Directory និង Staging Area របស់អ្នក។ វាប្រាប់អ្នកថា Files ណាដែលត្រូវបានផ្លាស់ប្តូរ Files ណាដែលមិនទាន់បាន Staged និង Files ណាដែលមិនទាន់បាន Track ។
    * **ឧទាហរណ៍:**
        \`\`\`bash
        git status
        # Output: On branch main
        # No commits yet
        # nothing to commit (create/copy files and use "git add" to track)
        \`\`\`
        \`\`\`bash
        # After modifying hello.txt
        echo "New line" >> hello.txt
        git status
        # Output: Changes not staged for commit:
        #   (use "git add <file>..." to update what will be committed)
        #   (use "git restore <file>..." to discard changes in working directory)
        #       modified:   hello.txt
        \`\`\`
* **\`git log\`**:
    * **គោលបំណង:** បង្ហាញប្រវត្តិសាស្រ្ត Commit នៃ Repository របស់អ្នក។ វាបង្ហាញ Commit ID, Author, Date, និង Commit Message ។
    * **ឧទាហរណ៍:**
        \`\`\`bash
        git log
        # Output: commit 1a2b3c4d5e6f7890abcdef... (HEAD -> main)
        # Author: Your Name <your_email@example.com>
        # Date:   Wed Jul 23 16:30:00 2025 +0700
        #
        #    Add initial hello.txt file
        \`\`\`

---
> **គន្លឹះ:** ការអនុវត្តន៍ Commands ទាំងនេះម្តងហើយម្តងទៀតនឹងជួយអ្នកឱ្យយល់ពី Workflow របស់ Git ។ ចាប់ផ្តើមជាមួយ Project តូចមួយ ហើយសាកល្បង Changes ផ្សេងៗគ្នា។
`,
  examples: [
    `<h3>ឧទាហរណ៍ ១: Workflow មូលដ្ឋានរបស់ Git</h3>
<p>នេះជាលំដាប់លំដោយនៃ Commands មូលដ្ឋានដើម្បីចាប់ផ្តើម Project មួយជាមួយ Git ។</p>
<pre><code class="language-bash">
# 1. បង្កើត Folder Project ថ្មី
mkdir my-new-app
cd my-new-app

# 2. បង្កើត Git Repository ថ្មី
git init

# 3. បង្កើត File មួយចំនួន
echo "# My New App" > README.md
echo "console.log('Hello, world!');" > app.js

# 4. បន្ថែម Files ទៅ Staging Area
git add README.md app.js
# ឬ git add . ដើម្បីបន្ថែម Files ទាំងអស់

# 5. រក្សាទុក Changes ជា Commit
git commit -m "Initial commit: Add README and app.js"

# 6. ពិនិត្យស្ថានភាព
git status
# Output: On branch main
# nothing to commit, working tree clean

# 7. មើលប្រវត្តិសាស្រ្ត Commit
git log
</code></pre>

<h3>ឧទាហរណ៍ ២: ការកែប្រែ File និង Commit Changes</h3>
<p>នេះជាឧទាហរណ៍នៃការកែប្រែ File ដែលមានស្រាប់ និងរក្សាទុក Changes ។</p>
<pre><code class="language-bash">
# 1. កែប្រែ File app.js
echo "console.log('Updated message!');" >> app.js

# 2. ពិនិត្យស្ថានភាព (នឹងឃើញ app.js ត្រូវបាន modified)
git status

# 3. បន្ថែម Changes ទៅ Staging Area
git add app.js

# 4. រក្សាទុក Changes ជា Commit
git commit -m "Update message in app.js"

# 5. មើលប្រវត្តិសាស្រ្ត Commit (នឹងឃើញ Commit ថ្មី)
git log
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `Git` គឺជាអ្វី?',
      options: [
        'ជាភាសាសរសេរកម្មវិធី',
        'ជា Database Management System',
        'ជា Distributed Version Control System (DVCS)',
        'ជា Web Server'
      ],
      correct: 2,
      explanation: 'Git គឺជា Distributed Version Control System (DVCS) ដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយបំផុតសម្រាប់តាមដានការផ្លាស់ប្តូរនៅក្នុង Source Code ។'
    },
    {
      question: 'តើ `Repository` ក្នុង Git គឺជាអ្វី?',
      options: [
        'ជាប្រភេទ File តែមួយ',
        'ជាកន្លែងផ្ទុក Project របស់អ្នក រួមទាំង Files ទាំងអស់ និងប្រវត្តិសាស្រ្តនៃការផ្លាស់ប្តូររបស់វា',
        'ជា Command សម្រាប់រក្សាទុក Changes',
        'ជា Server សម្រាប់ Deploy Application'
      ],
      correct: 1,
      explanation: 'Repository គឺជាកន្លែងផ្ទុក Project របស់អ្នក រួមទាំង Files ទាំងអស់ និងប្រវត្តិសាស្រ្តនៃការផ្លាស់ប្តូររបស់វា។'
    },
    {
      question: 'តើ `Commit` ក្នុង Git គឺជាអ្វី?',
      options: [
        'ជា Command សម្រាប់លុប Files',
        'ជា Snapshot នៃ Changes របស់អ្នកនៅចំណុចជាក់លាក់មួយក្នុងពេលវេលា',
        'ជាប្រភេទ Branch',
        'ជា File Configuration'
      ],
      correct: 1,
      explanation: 'Commit គឺជា Snapshot នៃ Changes របស់អ្នកនៅចំណុចជាក់លាក់មួយក្នុងពេលវេលា ដែលជា "Save Point" ក្នុងប្រវត្តិសាស្រ្ត Project របស់អ្នក។'
    },
    {
      question: 'តើ `Branch` ក្នុង Git គឺជាអ្វី?',
      options: [
        'ជា Folder សម្រាប់រក្សាទុក Files',
        'ជាបន្ទាត់នៃការអភិវឌ្ឍន៍ដាច់ដោយឡែក',
        'ជាប្រភេទ Commit Message',
        'ជា Command សម្រាប់ដំឡើង Git'
      ],
      correct: 1,
      explanation: 'Branch គឺជាបន្ទាត់នៃការអភិវឌ្ឍន៍ដាច់ដោយឡែក ដែលអនុញ្ញាតឱ្យ Developers ធ្វើការលើមុខងារថ្មីៗដោយមិនប៉ះពាល់ដល់ Code មេ។'
    },
    {
      question: 'តើ `git init` Command ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីលុប Repository',
        'ដើម្បីបង្កើត Git Repository ថ្មីនៅក្នុង Directory បច្ចុប្បន្ន',
        'ដើម្បី Upload Changes ទៅ Remote Repository',
        'ដើម្បី Download Changes ពី Remote Repository'
      ],
      correct: 1,
      explanation: '`git init` Command ត្រូវបានប្រើដើម្បីបង្កើត Git Repository ថ្មីនៅក្នុង Directory បច្ចុប្បន្ន។'
    },
    {
      question: 'តើ `git add .` Command ធ្វើអ្វី?',
      options: [
        'លុប Files ទាំងអស់',
        'បន្ថែម Files ទាំងអស់នៅក្នុង Directory បច្ចុប្បន្ន និង Subdirectories ទៅ Staging Area',
        'រក្សាទុក Changes ទៅ Local Repository',
        'បង្ហាញ Status របស់ Repository'
      ],
      correct: 1,
      explanation: '`git add .` Command បន្ថែម Files ទាំងអស់នៅក្នុង Directory បច្ចុប្បន្ន និង Subdirectories ទៅ Staging Area ។'
    },
    {
      question: 'តើ `git commit -m "Message"` Command ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបន្ថែម Files ទៅ Staging Area',
        'ដើម្បីបង្ហាញប្រវត្តិសាស្រ្ត Commit',
        'ដើម្បីរក្សាទុក Changes ពី Staging Area ទៅ Local Repository ជា Commit ថ្មី',
        'ដើម្បី Upload Changes ទៅ Remote Repository'
      ],
      correct: 2,
      explanation: '`git commit -m "Message"` Command ត្រូវបានប្រើដើម្បីរក្សាទុក Changes ពី Staging Area ទៅ Local Repository ជា Commit ថ្មី។'
    },
    {
      question: 'តើ `git status` Command បង្ហាញអ្វីខ្លះ?',
      options: [
        'ប្រវត្តិសាស្រ្ត Commit',
        'ស្ថានភាព Working Directory និង Staging Area របស់អ្នក',
        'បញ្ជីនៃ Branches ទាំងអស់',
        'ព័ត៌មានអំពី Remote Repository'
      ],
      correct: 1,
      explanation: '`git status` Command បង្ហាញស្ថានភាព Working Directory និង Staging Area របស់អ្នក។'
    },
    {
      question: 'តើ `git log` Command ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីលុប Commits',
        'ដើម្បីបង្ហាញប្រវត្តិសាស្រ្ត Commit នៃ Repository របស់អ្នក',
        'ដើម្បីបង្កើត Branch ថ្មី',
        'ដើម្បី Merge Branches'
      ],
      correct: 1,
      explanation: '`git log` Command ត្រូវបានប្រើដើម្បីបង្ហាញប្រវត្តិសាស្រ្ត Commit នៃ Repository របស់អ្នក។'
    },
    {
      question: 'តើ `Distributed Version Control System` មានន័យដូចម្តេច?',
      options: [
        'មានតែ Server មួយប៉ុណ្ណោះដែលរក្សាទុក Repository',
        'Developers ម្នាក់ៗមាន Local Copy ពេញលេញនៃ Repository ទាំងមូល',
        'ការគ្រប់គ្រង Version ត្រូវបានធ្វើឡើងដោយដៃ',
        'វាដំណើរការតែលើ Internet'
      ],
      correct: 1,
      explanation: 'Distributed Version Control System មានន័យថា Developers ម្នាក់ៗមាន Local Copy ពេញលេញនៃ Repository ទាំងមូល រួមទាំងប្រវត្តិសាស្រ្តពេញលេញរបស់វា។'
    },
    {
      question: 'តើ `git config --global user.name "Your Name"` ធ្វើអ្វី?',
      options: [
        'បង្កើត User ថ្មីក្នុង Git',
        'កំណត់ Username សម្រាប់ Commits ទាំងអស់នៅលើកុំព្យូទ័ររបស់អ្នក',
        'ផ្លាស់ប្តូរឈ្មោះ Branch បច្ចុប្បន្ន',
        'បង្ហាញឈ្មោះ User បច្ចុប្បន្ន'
      ],
      correct: 1,
      explanation: '`git config --global user.name "Your Name"` កំណត់ Username សម្រាប់ Commits ទាំងអស់នៅលើកុំព្យូទ័ររបស់អ្នក។'
    },
    {
      question: 'តើ `Staging Area` ក្នុង Git គឺជាអ្វី?',
      options: [
        'ជាកន្លែងដែល Files ត្រូវបានរក្សាទុកជាអចិន្ត្រៃយ៍',
        'ជាកន្លែងដែលអ្នករៀបចំ Changes របស់អ្នកមុនពេល Commit',
        'ជាកន្លែងសម្រាប់រក្សាទុក Branches',
        'ជាកន្លែងសម្រាប់រក្សាទុក Remote Repositories'
      ],
      correct: 1,
      explanation: 'Staging Area គឺជាកន្លែងដែលអ្នករៀបចំ Changes របស់អ្នកមុនពេល Commit ។'
    },
    {
      question: 'តើ `Merge` គឺជាដំណើរការនៃការធ្វើអ្វី?',
      options: [
        'ការលុប Branch',
        'ការបង្កើត Branch ថ្មី',
        'ការបញ្ចូល Changes ពី Branch មួយទៅ Branch មួយទៀត',
        'ការរក្សាទុក Changes ទៅ Local Repository'
      ],
      correct: 2,
      explanation: 'Merge គឺជាដំណើរការនៃការបញ្ចូល Changes ពី Branch មួយទៅ Branch មួយទៀត។'
    },
    {
      question: 'តើ `Push` គឺជាដំណើរការនៃការធ្វើអ្វី?',
      options: [
        'ការ Download Changes ពី Remote Repository',
        'ការ Upload Changes ពី Local Repository របស់អ្នកទៅ Remote Repository',
        'ការបង្កើត Commit ថ្មី',
        'ការលុប Remote Repository'
      ],
      correct: 1,
      explanation: 'Push គឺជាដំណើរការនៃការ Upload Changes ពី Local Repository របស់អ្នកទៅ Remote Repository ។'
    },
    {
      question: 'តើ `Pull` គឺជាដំណើរការនៃការធ្វើអ្វី?',
      options: [
        'ការ Upload Changes ទៅ Remote Repository',
        'ការ Download Changes ពី Remote Repository ទៅ Local Repository របស់អ្នក',
        'ការ Merge Branches',
        'ការបង្កើត Repository ថ្មី'
      ],
      correct: 1,
      explanation: 'Pull គឺជាដំណើរការនៃការ Download Changes ពី Remote Repository ទៅ Local Repository របស់អ្នក។'
    },
    {
      question: 'តើ `main` ឬ `master` Branch ជាធម្មតាត្រូវបានចាត់ទុកថាជាអ្វី?',
      options: [
        'Branch សម្រាប់ Features ថ្មី',
        'Branch សម្រាប់ Bug Fixes',
        'Branch មេដែលផ្ទុក Code ដែលមានស្ថេរភាព',
        'Branch សម្រាប់ Testing'
      ],
      correct: 2,
      explanation: '`main` ឬ `master` Branch ជាធម្មតាត្រូវបានចាត់ទុកថាជា Branch មេដែលផ្ទុក Code ដែលមានស្ថេរភាព។'
    },
    {
      question: 'តើ `Git` អនុញ្ញាតឱ្យអ្នកធ្វើការ Offline ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ វាតម្រូវឱ្យមាន Internet ជានិច្ច', 'តែសម្រាប់ Commits ប៉ុណ្ណោះ', 'តែសម្រាប់ Pulls ប៉ុណ្ណោះ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ដោយសារ Git ជា Distributed VCS អ្នកអាចធ្វើការ Offline លើ Local Repository របស់អ្នក។'
    },
    {
      question: 'តើ `Commit Message` គួរតែពិពណ៌នាអំពីអ្វី?',
      options: [
        'ឈ្មោះរបស់អ្នកប្រើប្រាស់',
        'ពេលវេលានៃ Commit',
        'Changes ដែលអ្នកបានធ្វើ',
        'ចំនួន Files ដែលបានផ្លាស់ប្តូរ'
      ],
      correct: 2,
      explanation: 'Commit Message គួរតែពិពណ៌នាអំពី Changes ដែលអ្នកបានធ្វើនៅក្នុង Commit នោះ។'
    }
  ],
  lab: {
  task: `
បង្កើត Local Git Repository និងភ្ជាប់វាទៅ GitLab Project ដើម្បីអនុវត្ត Git Commands មូលដ្ឋាន៖
* បង្កើត Local Repository ថ្មីមួយ។
* បន្ថែម Files និងធ្វើ Commit។
* ភ្ជាប់ទៅ GitLab Project។
* បង្កើត Branch និង Merge Request។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. ចូលទៅ **GitLab.com** និងបង្កើតគណនីឥតគិតថ្លៃ ឬប្រើគណនីដែលមានស្រាប់។
2. បង្កើត Local Repository ដោយប្រើ Commands:
   \`\`\`bash
   mkdir git-basics-lab
   cd git-basics-lab
   git init
   \`\`\`
3. បន្ថែម File **'README.md'** ជាមួយខ្លឹមសារសង្ខេប (ឧទាហរណ៍៖ "# Git Basics Lab\nLearning Git and GitLab integration.") និង File **'index.js'** ជាមួយ Code សាមញ្ញ (ឧទាហរណ៍៖ "console.log('Welcome to Git!');") ហើយ Commit:
   \`\`\`bash
   git add .
   git commit -m "Initial commit with README and index.js"
   \`\`\`
4. បង្កើត GitLab Project ថ្មីឈ្មោះ **'git-basics-lab'** ជាមួយ **Visibility Level** ជា **Public**។
5. ភ្ជាប់ Local Repository ទៅ GitLab ដោយบន្ថែម Remote និង Push:
   \`\`\`bash
   git remote add origin <your-gitlab-project-url>
   git push -u origin main
   \`\`\`
   (ជំនួស \`<your-gitlab-project-url>\` ដោយ HTTPS URL ពី GitLab Project។)
6. បង្កើត Branch **'feature-addition'** និងកែប្រែ File **'README.md'** (ឧទាហរណ៍៖ បន្ថែម "## Goal\nMaster Git workflows.") ហើយ Commit និង Push:
   \`\`\`bash
   git checkout -b feature-addition
   git add README.md
   git commit -m "Update README with goal section"
   git push origin feature-addition
   \`\`\`
7. បង្កើត **Merge Request** នៅលើ GitLab UI សម្រាប់ Branch **'feature-addition'** ទៅ Branch **'main'** ជាមួយចំណងជើង **"Add goal to README"** និងពិពណ៌នាថា "បន្ថែម Goal ទៅ README.md"។
`,
  solution: `
# ដំណោះស្រាយ៖ ការប្រើ Git និង GitLab មូលដ្ឋាន

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១ និង ៤៖ ចូលទៅ GitLab.com និងបង្កើត Project
អ្នកបានចូលទៅ **GitLab.com** និងបង្កើត Project ថ្មីឈ្មោះ \`git-basics-lab\` ជាមួយនឹង **Visibility Level** ជា **Public**។

## ជំហានទី ២ និង ៣៖ បង្កើត Local Repository និង Commit Files
អ្នកបានបង្កើត Local Repository និង Commit Files ដំបូង៖
* File **README.md**:
\`\`\`
# Git Basics Lab
Learning Git and GitLab integration.
\`\`\`
* File **index.js**:
\`\`\`
console.log('Welcome to Git!');
\`\`\`
Output នៃ Commands:
\`\`\`bash
$ mkdir git-basics-lab
$ cd git-basics-lab
$ git init
Initialized empty Git repository in /path/to/git-basics-lab/.git/
$ echo "# Git Basics Lab\nLearning Git and GitLab integration." > README.md
$ echo "console.log('Welcome to Git!');" > index.js
$ git add .
$ git commit -m "Initial commit with README and index.js"
[main (root-commit) 1a2b3c4] Initial commit with README and index.js
 2 files changed, 3 insertions(+)
 create mode 100644 README.md
 create mode 100644 index.js
\`\`\`

## ជំហានទី ៥៖ ភ្ជាប់ទៅ GitLab
អ្នកបានភ្ជាប់ Local Repository ទៅ GitLab និង Push Commit ដំបូង៖
\`\`\`bash
$ git remote add origin https://gitlab.com/your-username/git-basics-lab.git
$ git push -u origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Writing objects: 100% (4/4), 312 bytes | 312.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0)
To https://gitlab.com/your-username/git-basics-lab.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
\`\`\`

## ជំហានទី ៦៖ បង្កើត Branch និង Commit Changes
អ្នកបានបង្កើត Branch **feature-addition** និងកែប្រែ **README.md** ដោយបន្ថែម:
\`\`\`
## Goal
Master Git workflows.
\`\`\`
Output នៃ Commands:
\`\`\`bash
$ git checkout -b feature-addition
Switched to a new branch 'feature-addition'
$ echo "## Goal\nMaster Git workflows." >> README.md
$ git add README.md
$ git commit -m "Update README with goal section"
[feature-addition 5e6f7g8] Update README with goal section
 1 file changed, 2 insertions(+)
$ git push origin feature-addition
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 345 bytes | 345.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://gitlab.com/your-username/git-basics-lab.git
 * [new branch]      feature-addition -> feature-addition
\`\`\`

## ជំហានទី ៧៖ បង្កើត Merge Request
អ្នកបានបង្កើត **Merge Request** នៅលើ GitLab UI:
\`\`\`
Title: Add goal to README
Description: បន្ថែម Goal ទៅ README.md
Source Branch: feature-addition
Target Branch: main
\`\`\`

## ជំហានទី ៧៖ ពិនិត្យ Project Overview
នៅក្នុង **Project Overview Page** អ្នកអាចមើលឃើញ៖
* **Project Name**: \`git-basics-lab\`
* **Files**: \`README.md\`, \`index.js\`
* **Branches**: \`main\`, \`feature-addition\`
* **Merge Request**: "Add goal to README"

លំហាត់នេះបានជួយអ្នកឱ្យស្គាល់ **Git Commands** មូលដ្ឋាន និងការភ្ជាប់ទៅ **GitLab** សម្រាប់ Workflow ជាមូលដ្ឋាន។
`
    }
};
export default GitLabLesson1_2Content;
