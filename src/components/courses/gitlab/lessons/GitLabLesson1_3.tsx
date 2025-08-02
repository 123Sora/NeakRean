// src/components/lessons/gitlab/GitLabLesson1_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson1_3Content: LessonContent = {
  title: 'ការធ្វើការជាមួយ Remote Repositories',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Remote Repository',
    'របៀបបង្កើត Repository ថ្មីនៅលើ GitLab',
    'របៀប Clone Repository ពី GitLab មក Local (git clone)',
    'របៀប Push Changes ពី Local ទៅ GitLab (git push)',
    'របៀប Pull Changes ពី GitLab មក Local (git pull)',
    'ការយល់ដឹងពី `origin` និង `main/master` branch',
    'របៀបដោះស្រាយបញ្ហាមូលដ្ឋានជាមួយ Remote Repositories'
  ],
  content: `
# ការធ្វើការជាមួយ Remote Repositories 🌐⬆️⬇️

---

នៅក្នុងមេរៀនមុន យើងបានរៀនអំពី Git Fundamentals និង Local Repository ។ ឥឡូវនេះ យើងនឹងពង្រីកចំណេះដឹងរបស់យើងទៅកាន់ **Remote Repositories** ដែលជាកន្លែងដែលអ្នករក្សាទុក Code របស់អ្នកនៅលើ Server ពីចម្ងាយ (ដូចជា GitLab) សម្រាប់ Backup និងការសហការ។

---

## 1. គោលគំនិតនៃ Remote Repository 💡

* **Remote Repository:** គឺជា Version នៃ Project របស់អ្នកដែលត្រូវបាន Host នៅលើ Internet ឬ Network ផ្សេងទៀត។ វាអនុញ្ញាតឱ្យអ្នក និងក្រុមរបស់អ្នកសហការគ្នាលើ Project តែមួយពីទីតាំងផ្សេងៗគ្នា។
* **GitLab:** គឺជា Platform ដ៏ពេញនិយមមួយសម្រាប់ Host Remote Git Repositories ។

---

## 2. ការបង្កើត Repository ថ្មីនៅលើ GitLab ➕

មុនពេលអ្នកអាច Push Code ទៅ GitLab អ្នកត្រូវបង្កើត Project (Repository) មួយនៅលើ GitLab ជាមុនសិន។

1.  **ចូលទៅ GitLab:** ចូលទៅគណនី GitLab របស់អ្នក (GitLab.com) ។
2.  **បង្កើត Project ថ្មី:**
    * ចុចប៊ូតុង **\`New project / new repository\`** ។
    * ជ្រើសរើស **\`Create blank project\`** ។
    * **Project name:** ដាក់ឈ្មោះ Project របស់អ្នក (ឧទាហរណ៍៖ \`my-web-app\`) ។
    * **Visibility Level:** ជ្រើសរើស \`Public\` ឬ \`Private\` ។
    * **Initialize repository with a README:** សម្រាប់ Project ថ្មីដែលគ្មាន Code វាល្អប្រសើរក្នុងការធីក Option នេះ។ ប្រសិនបើអ្នកមាន Local Code រួចហើយ សូមកុំធីកវា។
    * ចុច **\`Create project\`** ។
3.  **ទទួលបាន Remote URL:** បន្ទាប់ពីបង្កើត Project អ្នកនឹងឃើញ URL សម្រាប់ Clone Project (ជាធម្មតា HTTPS ឬ SSH) ។ ចម្លង URL នេះ។

---

## 3. ការ Clone Repository ពី GitLab មក Local (git clone) ⬇️

**\`git clone <repository_url>\`**:
* **គោលបំណង:** Download Repository ពី Remote Server មកកាន់ Local Machine របស់អ្នក។ វានឹងបង្កើត Folder ថ្មីដែលមាន Project Files ទាំងអស់ និងប្រវត្តិសាស្រ្ត Git ពេញលេញ។
* **ឧទាហរណ៍:**
    \`\`\`bash
    git clone https://gitlab.com/your-username/my-web-app.git
    # Output: Cloning into 'my-web-app'...
    # remote: Counting objects: 3, done.
    # ...
    \`\`\`
* បន្ទាប់ពី Clone អ្នកអាច \`cd my-web-app\` ដើម្បីចូលទៅក្នុង Directory Project ។

---

## 4. ការ Push Changes ទៅ GitLab (git push) ⬆️

**\`git push <remote_name> <branch_name>\`**:
* **គោលបំណង:** Upload Changes ពី Local Repository របស់អ្នកទៅ Remote Repository ។
* **\`<remote_name>\`:** ជាធម្មតាគឺ \`origin\` (ឈ្មោះលំនាំដើមដែល Git កំណត់នៅពេលអ្នក Clone ឬ Add Remote) ។
* **\`<branch_name>\`:** ឈ្មោះ Branch ដែលអ្នកចង់ Push (ឧទាហរណ៍៖ \`main\` ឬ \`feature-x\`) ។
* **ឧទាហរណ៍:**
    \`\`\`bash
    # ធ្វើការផ្លាស់ប្តូរ, add, និង commit នៅក្នុង local repository
    echo "New feature added." >> feature.txt
    git add feature.txt
    git commit -m "Add new feature file"

    # Push changes to the 'main' branch on 'origin' remote
    git push origin main
    # Output: Counting objects: 3, done.
    # ...
    # To https://gitlab.com/your-username/my-web-app.git
    #    a1b2c3d..e4f5g6h  main -> main
    \`\`\`
* **\`git push -u origin main\` (សម្រាប់លើកដំបូង):** ប្រើ \`-u\` (ឬ \`--set-upstream\`) នៅពេល Push Branch ថ្មីជាលើកដំបូង។ វាកំណត់ Upstream Branch ដូច្នេះនៅពេលក្រោយអ្នកអាចប្រើ \`git push\` តែប៉ុណ្ណោះ។

---

## 5. ការ Pull Changes ពី GitLab (git pull) ⬇️

**\`git pull <remote_name> <branch_name>\`**:
* **គោលបំណង:** Download Changes ពី Remote Repository ទៅ Local Repository របស់អ្នក និងបញ្ចូល (Merge) ពួកវាទៅក្នុង Local Branch បច្ចុប្បន្នរបស់អ្នក។
* **ឧទាហរណ៍:**
    \`\`\`bash
    # (ឧបមាថាមានអ្នកផ្សេងបាន Push Changes ទៅ remote main branch)
    git pull origin main
    # Output: From https://gitlab.com/your-username/my-web-app
    #  * branch            main       -> FETCH_HEAD
    # Updating 1a2b3c4..e4f5g6h
    # Fast-forward
    #  new_file.txt | 1 +
    #  1 file changed, 1 insertion(+)
    #  create mode 100644 new_file.txt
    \`\`\`
* **\`git pull\` (បន្ទាប់ពីកំណត់ Upstream):** ប្រសិនបើអ្នកបានកំណត់ Upstream Branch រួចហើយ (ដោយប្រើ \`-u\` ជាមួយ \`git push\`) អ្នកអាចប្រើ \`git pull\` តែប៉ុណ្ណោះ។

---

## 6. ការយល់ដឹងពី \`origin\` និង \`main/master\` branch 🌳

* **\`origin\`:**
    * ជាឈ្មោះលំនាំដើមដែល Git ផ្តល់ឱ្យ Remote Repository ដំបូងដែលអ្នក Clone ពី។
    * អ្នកអាចមាន Remotes ច្រើន (ឧទាហរណ៍៖ \`origin\`, \`upstream\`) ។ អ្នកអាចមើល Remotes របស់អ្នកដោយប្រើ \`git remote -v\` ។
* **\`main\` / \`master\` branch:**
    * គឺជាឈ្មោះលំនាំដើមសម្រាប់ Branch មេ (Primary Branch) នៅក្នុង Git Repository ។
    * ប្រពៃណីគឺប្រើ \`master\` ប៉ុន្តែសហគមន៍បានប្តូរទៅ \`main\` វិញសម្រាប់ភាពងាយស្រួល។
    * Branch នេះជាធម្មតាផ្ទុកនូវ Code ដែលមានស្ថេរភាព ឬ Production-ready ។

---

## 7. របៀបដោះស្រាយបញ្ហាមូលដ្ឋានជាមួយ Remote Repositories 🐞

* **\`git remote -v\`:** បង្ហាញ Remote Repositories ដែលបានកំណត់សម្រាប់ Local Repository បច្ចុប្បន្នរបស់អ្នក។
* **\`git remote add <name> <url>\`:** បន្ថែម Remote Repository ថ្មីទៅ Local Repository របស់អ្នក។
* **\`git fetch\`:** Download Changes ពី Remote Repository ប៉ុន្តែ **មិន** Merge ពួកវាទៅក្នុង Local Branch បច្ចុប្បន្នរបស់អ្នកទេ។ នេះមានប្រយោជន៍សម្រាប់ការមើល Changes មុនពេល Merge ។
* **Merge Conflicts:** កើតឡើងនៅពេល Changes ពី Remote Repository ប៉ះទង្គិចជាមួយ Changes នៅក្នុង Local Repository របស់អ្នក។ អ្នកត្រូវដោះស្រាយវាដោយដៃមុនពេល Commit ។

\`\`\`bash
# Example of adding a new remote
git remote add upstream https://gitlab.com/another-user/forked-repo.git

# Example of fetching without merging
git fetch origin

# Example of checking remote branches after fetch
git branch -r
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍ ១: Workflow ពេញលេញនៃការ Clone, Modify, Push, និង Pull</h3>
<p>នេះជាលំដាប់លំដោយនៃ Commands ដើម្បីធ្វើការជាមួយ Remote Repository ។</p>
<pre><code class="language-bash">
# 1. បង្កើត Project ថ្មីនៅលើ GitLab (ឧទាហរណ៍: my-project)
#    - ធីក "Initialize repository with a README"

# 2. Clone Project ពី GitLab មក Local
git clone https://gitlab.com/your-username/my-project.git
cd my-project

# 3. ពិនិត្យ Remote (នឹងឃើញ 'origin')
git remote -v
# Output:
# origin  https://gitlab.com/your-username/my-project.git (fetch)
# origin  https://gitlab.com/your-username/my-project.git (push)

# 4. ធ្វើការផ្លាស់ប្តូរនៅក្នុង Local Project
echo "This is a new line in README." >> README.md
echo "main.py" > .gitignore # Add a new file

# 5. Add និង Commit Changes
git add .
git commit -m "Update README and add .gitignore"

# 6. Push Changes ទៅ GitLab
git push origin main
# Output: To https://gitlab.com/your-username/my-project.git
#    [branch info]  main -> main

# 7. (ឧបមាថាមានអ្នកផ្សេងបានធ្វើការផ្លាស់ប្តូរនៅលើ GitLab UI)
#    ឧទាហរណ៍: កែប្រែ README.md ផ្ទាល់នៅលើ GitLab

# 8. Pull Changes ពី GitLab មក Local
git pull origin main
# Output: Updating ...
# Fast-forward
#  README.md | 1 +
#  1 file changed, 1 insertion(+)
</code></pre>

<h3>ឧទាហរណ៍ ២: ការដោះស្រាយ Merge Conflict (Conceptual)</h3>
<p>នេះជាឧទាហរណ៍នៃរបៀបដែល Merge Conflict កើតឡើង និងរបៀបដែលអ្នកនឹងឃើញវា។</p>
<pre><code class="language-text">
# ឧបមាថា:
# - អ្នកបានកែប្រែបន្ទាត់ទី 5 ក្នុង file.txt នៅក្នុង Local Branch របស់អ្នក។
# - អ្នកផ្សេងបានកែប្រែបន្ទាត់ទី 5 ដូចគ្នានោះក្នុង file.txt នៅក្នុង Remote Branch ។

# នៅពេលអ្នកធ្វើ git pull:
git pull origin main
# Output:
# Auto-merging file.txt
# CONFLICT (content): Merge conflict in file.txt
# Automatic merge failed; fix conflicts and then commit the result.

# បើក file.txt អ្នកនឹងឃើញសញ្ញាសម្គាល់ Conflict:
# <<<<<<< HEAD
# Your local change on line 5
# =======
# Their remote change on line 5
# >>>>>>> main

# អ្នកត្រូវកែសម្រួល file.txt ដោយដៃដើម្បីដោះស្រាយ Conflict ។
# បន្ទាប់ពីដោះស្រាយ:
git add file.txt
git commit -m "Resolve merge conflict in file.txt"
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `Remote Repository` គឺជាអ្វី?',
      options: [
        'ជា Repository ដែលរក្សាទុកតែនៅលើ Local Machine ប៉ុណ្ណោះ',
        'ជា Repository ដែលត្រូវបាន Host នៅលើ Internet ឬ Network ផ្សេងទៀត',
        'ជា File Configuration សម្រាប់ Git',
        'ជា Command សម្រាប់ Upload Changes'
      ],
      correct: 1,
      explanation: 'Remote Repository គឺជា Version នៃ Project របស់អ្នកដែលត្រូវបាន Host នៅលើ Internet ឬ Network ផ្សេងទៀតសម្រាប់ Backup និងការសហការ។'
    },
    {
      question: 'តើ `git clone` Command ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បី Upload Changes ទៅ Remote Repository',
        'ដើម្បី Download Repository ពី Remote Server មកកាន់ Local Machine របស់អ្នក',
        'ដើម្បីរក្សាទុក Changes ទៅ Local Repository',
        'ដើម្បីបង្កើត Branch ថ្មី'
      ],
      correct: 1,
      explanation: '`git clone` Command ត្រូវបានប្រើដើម្បី Download Repository ពី Remote Server មកកាន់ Local Machine របស់អ្នក។'
    },
    {
      question: 'តើ `git push` Command ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បី Download Changes ពី Remote Repository',
        'ដើម្បី Upload Changes ពី Local Repository របស់អ្នកទៅ Remote Repository',
        'ដើម្បីបង្កើត Local Repository ថ្មី',
        'ដើម្បីមើលប្រវត្តិសាស្រ្ត Commit'
      ],
      correct: 1,
      explanation: '`git push` Command ត្រូវបានប្រើដើម្បី Upload Changes ពី Local Repository របស់អ្នកទៅ Remote Repository ។'
    },
    {
      question: 'តើ `git pull` Command ធ្វើអ្វី?',
      options: [
        'Upload Changes ទៅ Remote Repository',
        'Download Changes ពី Remote Repository ទៅ Local Repository របស់អ្នក និងបញ្ចូល (Merge) ពួកវា',
        'បង្កើត Commit ថ្មី',
        'បង្ហាញស្ថានភាព Repository'
      ],
      correct: 1,
      explanation: '`git pull` Command Download Changes ពី Remote Repository ទៅ Local Repository របស់អ្នក និងបញ្ចូល (Merge) ពួកវាទៅក្នុង Local Branch បច្ចុប្បន្នរបស់អ្នក។'
    },
    {
      question: 'តើ `origin` ជាធម្មតាត្រូវបានប្រើដើម្បីយោងទៅអ្វី?',
      options: [
        'ឈ្មោះរបស់ Local Branch បច្ចុប្បន្ន',
        'ឈ្មោះលំនាំដើមដែល Git ផ្តល់ឱ្យ Remote Repository ដំបូងដែលអ្នក Clone ពី',
        'ឈ្មោះរបស់ User ដែលបានធ្វើ Commit ចុងក្រោយ',
        'ឈ្មោះរបស់ File Configuration'
      ],
      correct: 1,
      explanation: '`origin` គឺជាឈ្មោះលំនាំដើមដែល Git ផ្តល់ឱ្យ Remote Repository ដំបូងដែលអ្នក Clone ពី។'
    },
    {
      question: 'តើ `main` ឬ `master` branch ជាធម្មតាផ្ទុកនូវ Code ប្រភេទណា?',
      options: [
        'Code ដែលកំពុងអភិវឌ្ឍន៍',
        'Code ដែលមាន Bug',
        'Code ដែលមានស្ថេរភាព ឬ Production-ready',
        'Code ដែលមិនទាន់បាន Test'
      ],
      correct: 2,
      explanation: '`main` ឬ `master` branch ជាធម្មតាផ្ទុកនូវ Code ដែលមានស្ថេរភាព ឬ Production-ready ។'
    },
    {
      question: 'តើអ្នកគួរតែធីក `Initialize repository with a README` នៅពេលបង្កើត Project ថ្មីនៅលើ GitLab ប្រសិនបើអ្នកមាន Local Code រួចហើយដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែសម្រាប់ Public Project', 'តែសម្រាប់ Private Project'],
      correct: 1,
      explanation: 'ទេ ប្រសិនបើអ្នកមាន Local Code រួចហើយ សូមកុំធីក `Initialize repository with a README` ដើម្បីជៀសវាង Conflict ។'
    },
    {
      question: 'តើ `git push -u origin main` Command ធ្វើអ្វី?',
      options: [
        'លុប Remote Repository',
        'កំណត់ Upstream Branch ដូច្នេះនៅពេលក្រោយអ្នកអាចប្រើ `git push` តែប៉ុណ្ណោះ',
        'Download Changes ពី Remote Repository',
        'បង្កើត Branch ថ្មីនៅលើ Remote'
      ],
      correct: 1,
      explanation: '`git push -u origin main` កំណត់ Upstream Branch ដូច្នេះនៅពេលក្រោយអ្នកអាចប្រើ `git push` តែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `Merge Conflicts` កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេលអ្នក Push Changes ទៅ Remote Repository',
        'នៅពេល Changes ពី Remote Repository ប៉ះទង្គិចជាមួយ Changes នៅក្នុង Local Repository របស់អ្នក',
        'នៅពេលអ្នក Clone Repository',
        'នៅពេលអ្នកបង្កើត Branch ថ្មី'
      ],
      correct: 1,
      explanation: 'Merge Conflicts កើតឡើងនៅពេល Changes ពី Remote Repository ប៉ះទង្គិចជាមួយ Changes នៅក្នុង Local Repository របស់អ្នក។'
    },
    {
      question: 'តើ `git remote -v` Command ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បី Upload Changes',
        'ដើម្បី Download Changes',
        'ដើម្បីបង្ហាញ Remote Repositories ដែលបានកំណត់សម្រាប់ Local Repository បច្ចុប្បន្នរបស់អ្នក',
        'ដើម្បីបង្កើត Remote Repository'
      ],
      correct: 2,
      explanation: '`git remote -v` Command បង្ហាញ Remote Repositories ដែលបានកំណត់សម្រាប់ Local Repository បច្ចុប្បន្នរបស់អ្នក។'
    },
    {
      question: 'តើ `git fetch` Command ធ្វើអ្វី?',
      options: [
        'Download Changes ពី Remote Repository និង Merge ពួកវា',
        'Upload Changes ទៅ Remote Repository',
        'Download Changes ពី Remote Repository ប៉ុន្តែ **មិន** Merge ពួកវា',
        'លុប Local Repository'
      ],
      correct: 2,
      explanation: '`git fetch` Command Download Changes ពី Remote Repository ប៉ុន្តែ **មិន** Merge ពួកវាទៅក្នុង Local Branch បច្ចុប្បន្នរបស់អ្នកទេ។'
    },
    {
      question: 'តើអ្នកអាចមាន `Remotes` ច្រើនសម្រាប់ Local Repository តែមួយបានដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ តែមួយប៉ុណ្ណោះ', 'តែសម្រាប់ Public Repositories', 'តែសម្រាប់ Private Repositories'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចមាន Remotes ច្រើន (ឧទាហរណ៍៖ `origin`, `upstream`) ។'
    },
    {
      question: 'តើការសហការគ្នាលើ Project មួយពីទីតាំងផ្សេងៗគ្នាត្រូវបានអនុញ្ញាតដោយអ្វី?',
      options: [
        'Local Repository',
        'Remote Repository',
        'Git Commit',
        'Git Status'
      ],
      correct: 1,
      explanation: 'Remote Repository អនុញ្ញាតឱ្យអ្នក និងក្រុមរបស់អ្នកសហការគ្នាលើ Project តែមួយពីទីតាំងផ្សេងៗគ្នា។'
    },
    {
      question: 'តើ `git remote add <name> <url>` Command ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីលុប Remote Repository',
        'ដើម្បីផ្លាស់ប្តូរឈ្មោះ Remote Repository',
        'ដើម្បីបន្ថែម Remote Repository ថ្មីទៅ Local Repository របស់អ្នក',
        'ដើម្បី Clone Remote Repository'
      ],
      correct: 2,
      explanation: '`git remote add <name> <url>` Command ត្រូវបានប្រើដើម្បីបន្ថែម Remote Repository ថ្មីទៅ Local Repository របស់អ្នក។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ Remote Repositories?',
      options: [
        'ដើម្បីធ្វើការតែម្នាក់ឯង',
        'ដើម្បីរក្សាទុក Code របស់អ្នកនៅលើ Server ពីចម្ងាយសម្រាប់ Backup និងការសហការ',
        'ដើម្បីកាត់បន្ថយទំហំ Project',
        'ដើម្បីធ្វើឱ្យ Git ដំណើរការលឿនជាងមុន'
      ],
      correct: 1,
      explanation: 'អត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ Remote Repositories គឺដើម្បីរក្សាទុក Code របស់អ្នកនៅលើ Server ពីចម្ងាយសម្រាប់ Backup និងការសហការ។'
    },
    {
      question: 'តើ `HTTPS` និង `SSH` គឺជាអ្វីដែលទាក់ទងនឹង Remote Repository?',
      options: [
        'ប្រភេទនៃ Commit Message',
        'ប្រភេទនៃ Branch',
        'ពិធីការ (Protocols) សម្រាប់ Clone ឬ Push/Pull Code',
        'ឈ្មោះរបស់ Remote Repository'
      ],
      correct: 2,
      explanation: 'HTTPS និង SSH គឺជាពិធីការ (Protocols) ដែលត្រូវបានប្រើសម្រាប់ Clone ឬ Push/Pull Code ទៅកាន់ Remote Repository ។'
    },
    {
      question: 'តើ `git pull` គឺជាការរួមបញ្ចូលគ្នានៃ Commands ពីរណា?',
      options: [
        '`git add` និង `git commit`',
        '`git push` និង `git merge`',
        '`git fetch` និង `git merge`',
        '`git clone` និង `git push`'
      ],
      correct: 2,
      explanation: '`git pull` គឺជាការរួមបញ្ចូលគ្នានៃ Commands `git fetch` (ទាញ Changes) និង `git merge` (បញ្ចូល Changes) ។'
    },
    {
      question: 'តើអ្នកគួរធ្វើអ្វីប្រសិនបើអ្នកជួប `Merge Conflict`?',
      options: [
        'លុប Project ទាំងមូល',
        'ធ្វើ `git push` ម្តងទៀត',
        'ដោះស្រាយ Conflict ដោយដៃក្នុង File ដែលមានបញ្ហា',
        'ធ្វើ `git pull` ម្តងទៀត'
      ],
      correct: 2,
      explanation: 'ប្រសិនបើអ្នកជួប `Merge Conflict` អ្នកត្រូវដោះស្រាយវាដោយដៃក្នុង File ដែលមានបញ្ហា មុនពេល Commit ។'
    }
  ],
 lab: {
  task: `
បង្កើត Remote Repository នៅលើ GitLab និងអនុវត្ត Git Commands មូលដ្ឋាន៖
* បង្កើត GitLab Project ថ្មីមួយ។
* ធ្វើការ Clone Repository ទៅ Local Machine។
* បន្ថែម File និង Push ទៅ GitLab។
* កែប្រែ File នៅលើ GitLab UI និង Pull មក Local។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. ចូលទៅ **GitLab.com** និងបង្កើតគណនីឥតគិតថ្លៃ ឬប្រើគណនីដែលមានស្រាប់។
2. បង្កើត Project ថ្មីមួយដែលមានឈ្មោះ **'git-remote-lab'** និងកំណត់ **Visibility Level** ជា **Public** ដោយធីក Option **Initialize repository with a README**។
3. បន្ថែម File **'README.md'** ដោយប្រើ GitLab UI ជាមួយនឹងខ្លឹមសារសង្ខេបអំពី Project (ឧទាហរណ៍៖ "# Git Remote Lab\nThis project demonstrates remote Git operations.")។
4. Clone Repository ទៅ Local Machine ដោយប្រើ Command:
   \`\`\`bash
   git clone <your-gitlab-project-url>
   cd git-remote-lab
   \`\`\`
   (ជំនួស \`<your-gitlab-project-url>\` ដោយ HTTPS URL ពី GitLab Project។)
5. បន្ថែម File **'feature.txt'** ជាមួយខ្លឹមសារសាមញ្ញ (ឧទាហរណ៍៖ "Initial remote feature.") ហើយ Commit និង Push:
   \`\`\`bash
   echo "Initial remote feature." > feature.txt
   git add .
   git commit -m "Add feature.txt"
   git push origin main
   \`\`\`
6. កែប្រែ File **'README.md'** នៅលើ GitLab UI ដោយបន្ថែមបន្ទាត់ថ្មី (ឧទាហរណ៍៖ "Updated via GitLab UI.") និង Commit ជាមួយ Message: "Update README via GitLab UI"។
7. Pull Changes មក Local Machine ដោយប្រើ Command:
   \`\`\`bash
   git pull origin main
   \`\`\`
   ហើយពិនិត្យ **Project Overview Page** ដើម្បីបញ្ជាក់ថា Files (\`README.md\`, \`feature.txt\`) និង Commits ត្រូវបានធ្វើបច្ចុប្បន្នភាពជោគជ័យ។
`,
  solution: `
# ដំណោះស្រាយ៖ ការធ្វើការជាមួយ Remote Repositories ក្នុង GitLab

បន្ទាប់ពីអនុវត្តន៍ជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១ និង ២៖ ចូលទៅ GitLab.com និងបង្កើត Project
អ្នកបានចូលទៅ **GitLab.com** និងបង្កើត Project ថ្មីឈ្មោះ \`git-remote-lab\` ជាមួយនឹង **Visibility Level** ជា **Public** និង Initialize ជាមួយ README។

## ជំហានទី ៣៖ បន្ថែម README.md
អ្នកបានបន្ថែម File \`README.md\` ដោយប្រើ GitLab UI ដែលមានខ្លឹមសារដូចខាងក្រោម៖
\`\`\`
# Git Remote Lab
This project demonstrates remote Git operations.
\`\`\`

## ជំហានទី ៤ និង ៥៖ Clone Repository និង Push File ថ្មី
អ្នកបាន Clone Repository និងបន្ថែម File \`feature.txt\` ដែលមានខ្លឹមសារដូចខាងក្រោម៖
\`\`\`
Initial remote feature.
\`\`\`
នេះជា Output នៃ Commands៖
\`\`\`bash
$ git clone https://gitlab.com/your-username/git-remote-lab.git
Cloning into 'git-remote-lab'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (3/3), done.
$ cd git-remote-lab
$ echo "Initial remote feature." > feature.txt
$ git add .
$ git commit -m "Add feature.txt"
[main 1a2b3c4] Add feature.txt
 1 file changed, 1 insertion(+)
 create mode 100644 feature.txt
$ git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Writing objects: 100% (3/3), 296 bytes | 296.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://gitlab.com/your-username/git-remote-lab.git
   a1b2c3d..1a2b3c4  main -> main
\`\`\`

## ជំហានទី ៦ និង ៧៖ កែប្រែ README.md និង Pull Changes
អ្នកបានកែប្រែ File \`README.md\` នៅលើ GitLab UI ដោយបន្ថែម៖
\`\`\`
Updated via GitLab UI.
\`\`\`
បន្ទាប់មក អ្នកបាន Pull Changes មក Local៖
\`\`\`bash
$ git pull origin main
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 1), reused 0 (delta 0)
Unpacking objects: 100% (3/3), done.
From https://gitlab.com/your-username/git-remote-lab
 * branch            main       -> FETCH_HEAD
Updating 1a2b3c4..e4f5g6h
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
\`\`\`

## ជំហានទី ៧៖ ពិនិត្យ Project Overview
នៅក្នុង **Project Overview Page** អ្នកអាចមើលឃើញ៖
* **Project Name**: \`git-remote-lab\`
* **Files**: \`README.md\`, \`feature.txt\`
* **Commits**: "Add feature.txt", "Update README via GitLab UI"

លំហាត់នេះបានជួយអ្នកឱ្យស្គាល់ពីការបង្កើត **Remote Repository**, **Cloning**, **Pushing**, និង **Pulling** Changes នៅក្នុង GitLab Workflow។
`
    }
};

export default GitLabLesson1_3Content;
