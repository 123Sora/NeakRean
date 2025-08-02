import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson5_1Content: LessonContent = {
  title: 'ការគ្រប់គ្រងអ្នកប្រើប្រាស់, ក្រុម, និងការអនុញ្ញាតនៅក្នុង GitLab',
  objectives: [
    'យល់ដឹងពីតួនាទីរបស់ Users, Groups, និង Projects នៅក្នុង GitLab',
    'ស្គាល់កម្រិត Permissions ផ្សេងៗ (Guest, Reporter, Developer, Maintainer, Owner)',
    'រៀនបង្កើត និងគ្រប់គ្រងអ្នកប្រើប្រាស់ (Users)',
    'រៀនបង្កើត និងគ្រប់គ្រងក្រុម (Groups) និងក្រុមរង (Subgroups)',
    'យល់ពីការកំណត់ Permissions សម្រាប់ Users និង Groups ទៅកាន់ Projects',
    'ស្វែងយល់ពីគោលគំនិតនៃ Inheritance នៃ Permissions'
  ],
  content: `
# ការគ្រប់គ្រងអ្នកប្រើប្រាស់, ក្រុម, និងការអនុញ្ញាត 👥🔒

---

ការគ្រប់គ្រង **អ្នកប្រើប្រាស់ (Users)**, **ក្រុម (Groups)**, និង **ការអនុញ្ញាត (Permissions)** គឺជាមូលដ្ឋានគ្រឹះសម្រាប់សុវត្ថិភាព និងការសហការប្រកបដោយប្រសិទ្ធភាពនៅក្នុង GitLab។ វាអនុញ្ញាតឱ្យអ្នកកំណត់ថាអ្នកណាអាចចូលប្រើអ្វី និងធ្វើអ្វីបាននៅក្នុង Projects និង Resources របស់អ្នក។

---

## 1. អ្នកប្រើប្រាស់, ក្រុម, និងគម្រោងក្នុង GitLab 💡

* **អ្នកប្រើប្រាស់ (User):**
  * គណនីបុគ្គលនៅក្នុង GitLab។
  * មាន **Username**, **Email**, និង **Password**។
  * អាចជាសមាជិកនៃ **Projects** និង **Groups**។
* **ក្រុម (Group):**
  * ការប្រមូលផ្តុំនៃ **Users** និង/ឬ **Projects**។
  * មានប្រយោជន៍សម្រាប់រៀបចំ Projects តាមក្រុម, នាយកដ្ឋាន, ឬមុខងារ។
  * **Permissions** ដែលកំណត់នៅកម្រិត Group នឹងត្រូវបាន **Inherit** ដោយ Projects ទាំងអស់ក្នុង Group នោះ។
  * អាចមាន **Subgroups** សម្រាប់រចនាសម្ព័ន្ធឋានានុក្រម។
* **គម្រោង (Project):**
  * **Repository** សម្រាប់ Source Code, Issues, Merge Requests, CI/CD Pipelines។
  * ជាកន្លែងដែលការងារអភិវឌ្ឍន៍ពិតប្រាកដកើតឡើង។
  * ជាធម្មតាស្ថិតនៅក្នុង Group មួយ។

---

## 2. កម្រិតការអនុញ្ញាត (Permissions) 🔑

GitLab ផ្តល់កម្រិត Permissions ៥ ដែលអាចកំណត់បាននៅកម្រិត **Project** ឬ **Group**។ កម្រិតខ្ពស់ជាងនឹងរួមបញ្ចូល Permissions នៃកម្រិតទាបជាង។

* **Guest (ភ្ញៀវ):**
  * **ការចូលប្រើ:** មើល Project (បើ Public), Issues, Merge Requests, Discussions។
  * **មិនអាចធ្វើបាន:** Push Code, បង្កើត Issues/MRs, ដំណើរការ Pipelines។
  * **ល្អសម្រាប់:** Stakeholders, អ្នកផ្តល់មតិកែលម្អ។
* **Reporter (អ្នករាយការណ៍):**
  * **ការចូលប្រើ:** មើល Code, Commit History, CI/CD Pipeline Status, បង្កើត Snippets។
  * **មិនអាចធ្វើបាន:** Push Code, Merge Merge Requests។
  * **ល្អសម្រាប់:** QA Engineers, Business Analysts។
* **Developer (អ្នកអភិវឌ្ឍន៍):**
  * **ការចូលប្រើ:** Push Code ទៅ Non-protected Branches, បង្កើត Merge Requests, Issues, ដំណើរការ Pipelines។
  * **មិនអាចធ្វើបាន:** Merge ទៅ Protected Branches, គ្រប់គ្រង Project Settings។
  * **ល្អសម្រាប់:** Developers ភាគច្រើន។
* **Maintainer (អ្នកថែទាំ):**
  * **ការចូលប្រើ:** Merge Merge Requests ទៅ Protected Branches, គ្រប់គ្រង Project Settings, Labels, Milestones, Runners។
  * **មិនអាចធ្វើបាន:** លុប Project/Group, គ្រប់គ្រង Group Members។
  * **ល្អសម្រាប់:** Team Leads, Senior Developers។
* **Owner (ម្ចាស់):**
  * **ការចូលប្រើ:** គ្រប់គ្រង Group Members, លុប Project/Group, គ្រប់គ្រង Billing។
  * **ល្អសម្រាប់:** Project Owners, Group Owners, Administrators។

---

## 3. ការបង្កើត និងគ្រប់គ្រងអ្នកប្រើប្រាស់ (Users) 👨‍💻

*(ចំណាំ៖ ការគ្រប់គ្រង Users ពេញលេញគឺសម្រាប់ GitLab Instance Administrators)*

* **ការបង្កើត User:**
  1. ចូលទៅ GitLab Instance ជា Admin។
  2. ចុច **\`Overview > Users\`** នៅ Admin Area។
  3. ចុច **\`New user\`**។
  4. បញ្ចូល **Name**, **Username**, **Email**, **Password**។
  5. ចុច **\`Create user\`**។
* **ការគ្រប់គ្រង User:**
  * អាច **Block**, **Deactivate**, ឬ **Delete** Users។
  * អាចកែប្រែ Permissions របស់ពួកគេ។

---

## 4. ការបង្កើត និងគ្រប់គ្រងក្រុម (Groups) និងក្រុមរង (Subgroups) 📂

* **ការបង្កើត Group:**
  1. ចុច **\`New group\`** នៅ GitLab UI។
  2. បញ្ចូល **Group name**, **Path**, **Visibility Level** (Private, Internal, Public)។
  3. ចុច **\`Create group\`**។
* **ការបង្កើត Subgroup:**
  1. ចូលទៅ Group មេ។
  2. ចុច **\`New subgroup\`**។
  3. បញ្ចូល **Group name**, **Path**, **Visibility Level**។
  4. ចុច **\`Create group\`**。
* **ការគ្រប់គ្រង Group:**
  * បន្ថែម/លុប Members។
  * កំណត់ Permissions សម្រាប់ Members។
  * ផ្ទេរ Ownership របស់ Group។

---

## 5. ការកំណត់ Permissions សម្រាប់ Users និង Groups 🎯

* **บន្ថែម Member ទៅ Project:**
  1. ចូលទៅ Project។
  2. ចុច **\`Project information > Members\`** នៅ Sidebar។
  3. ចុច **\`Invite members\`**។
  4. បញ្ចូល **Username** ឬ **Group**។
  5. ជ្រើសរើស **Role** (Guest, Reporter, Developer, Maintainer, Owner)។
  6. (ស្រេចចិត្ត) កំណត់ **Access expiration date**។
  7. ចុច **\`Invite\`**។
* **បន្ថែម Member ទៅ Group:**
  1. ចូលទៅ Group។
  2. ចុច **\`Group information > Members\`**។
  3. ដំណើរការដូចការបន្ថែម Member ទៅ Project។

---

## 6. Inheritance នៃ Permissions 🌳

* **Group Permissions > Project Permissions:**
  * Permissions នៅកម្រិត Group ត្រូវបាន **Inherit** ដោយ Projects ទាំងអស់ក្នុង Group នោះ។
  * អាចផ្តល់ Permissions **បន្ថែម** នៅកម្រិត Project ប៉ុន្តែ **មិនអាចកាត់បន្ថយ** Permissions ដែល Inherit ពី Group បានទេ។
  * **ឧទាហរណ៍:** បើ User ជា Developer នៅ Group ពួកគេនឹងជា Developer សម្រាប់ Projects ទាំងអស់ក្នុង Group នោះ។ អាចធ្វើឱ្យជា Maintainer នៅ Project ជាក់លាក់ ប៉ុន្តែមិនអាចធ្វើជា Guest បានទេ。
* **Subgroup Permissions > Project Permissions:**
  * Permissions ពី Subgroup ក៏ Inherit ដោយ Projects ក្នុង Subgroup ដែរ។

> **គន្លឹះ:** ប្រើ Groups និង Subgroups ដើម្បីសម្រួលការគ្រប់គ្រង Permissions និងធានាភាពស៊ីសង្វាក់គ្នា។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: តារាងសង្ខេបនៃកម្រិត Permissions

តារាងខាងក្រោមបង្ហាញពីសមត្ថភាពនៃកម្រិត Permissions នីមួយៗ។

| Role       | View Code | Create Issue | Push Code (Non-protected) | Merge MRs (Protected) | Manage Project Settings | Manage Group Members | Delete Project/Group |
|------------|-----------|--------------|---------------------------|-----------------------|-------------------------|----------------------|----------------------|
| Guest      | Limited   | No           | No                        | No                    | No                      | No                   | No                   |
| Reporter   | Yes       | Yes          | No                        | No                    | No                      | No                   | No                   |
| Developer  | Yes       | Yes          | Yes                       | No                    | No                      | No                   | No                   |
| Maintainer | Yes       | Yes          | Yes                       | Yes                   | Yes                     | No                   | No                   |
| Owner      | Yes       | Yes          | Yes                       | Yes                   | Yes                     | Yes                  | Yes                  |

*ចំណាំ:* Reporter អាចបង្កើត Issues និង Snippets ប៉ុន្តែមិនអាច Push Code បានទេ។

# ឧទាហរណ៍ ២: រចនាសម្ព័ន្ធ Group និង Project

ឧទាហរណ៍ខាងក្រោមបង្ហាញពីរចនាសម្ព័ន្ធ Group និង Project ដែលបង្ហាញពី **Inheritance**៖

\`\`\`text
- My Company (Group - Owner: Alice)
  - Members:
    - Alice (Owner)
    - Bob (Developer)
  - Frontend Team (Subgroup - Maintainer: Carol)
    - Members:
      - Carol (Maintainer)
      - David (Developer)
    - Project: Web App
      - Inherited Members: Alice (Owner), Bob (Developer), Carol (Maintainer), David (Developer)
      - Additional Member: Eve (Reporter)
  - Backend Team (Subgroup - Maintainer: Frank)
    - Members:
      - Frank (Maintainer)
      - Grace (Developer)
    - Project: API Service
      - Inherited Members: Alice (Owner), Bob (Developer), Frank (Maintainer), Grace (Developer)
\`\`\`

*ពន្យល់:* Eve មាន Role ជា Reporter សម្រាប់ Project Web App តែប៉ុណ្ណោះ ដោយមិនមាន Access ទៅ Project ផ្សេងទៀត។
`
  ],
  quiz: [
    {
      question: 'តើ `Group` ក្នុង GitLab គឺជាអ្វី?',
      options: [
        'ជា Repository សម្រាប់ Source Code',
        'ជាគណនីបុគ្គលនៅក្នុង GitLab',
        'ជាការប្រមូលផ្តុំនៃ Users និង/ឬ Projects',
        'ជាប្រភេទ CI/CD Pipeline'
      ],
      correct: 2,
      explanation: 'Group គឺជាការប្រមូលផ្តុំនៃ Users និង/ឬ Projects ដែលមានប្រយោជន៍សម្រាប់ការរៀបចំ Projects តាមក្រុម។'
    },
    {
      question: 'តើ Permissions ដែលបានកំណត់នៅកម្រិត Group ត្រូវបាន `Inherit` ដោយ Projects ទាំងអស់នៅក្នុង Group នោះដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Permissions ដែលបានកំណត់នៅកម្រិត Group ត្រូវបាន Inherit ដោយ Projects ទាំងអស់នៅក្នុង Group នោះ។'
    },
    {
      question: 'តើ `Guest` Role អាចធ្វើអ្វីខ្លះ?',
      options: [
        'Push Code',
        'បង្កើត Issues',
        'មើល Project (ប្រសិនបើ Public), Issues, Merge Requests, និង Discussions',
        'Merge Merge Requests'
      ],
      correct: 2,
      explanation: 'Guest Role អាចមើល Project (ប្រសិនបើ Public), Issues, Merge Requests, និង Discussions ប៉ុន្តែមិនអាច Push Code ឬបង្កើត Issues/MRs បានទេ។'
    },
    {
      question: 'តើ `Developer` Role អាចធ្វើអ្វីខ្លះដែល `Reporter` មិនអាចធ្វើបាន?',
      options: [
        'មើល Code',
        'បង្កើត Snippets',
        'Push Code ទៅ Non-protected Branches, បង្កើត Merge Requests, ដំណើរការ Pipelines',
        'គ្រប់គ្រង Project Settings'
      ],
      correct: 2,
      explanation: 'Developer Role អាច Push Code ទៅ Non-protected Branches, បង្កើត Merge Requests, Issues, និងដំណើរការ Pipelines ដែល Reporter មិនអាចធ្វើបាន។'
    },
    {
      question: 'តើ `Maintainer` Role អាចធ្វើអ្វីខ្លះដែល `Developer` មិនអាចធ្វើបាន?',
      options: [
        'Push Code',
        'បង្កើត Issues',
        'Merge Merge Requests ទៅ Protected Branches, គ្រប់គ្រង Project Settings',
        'មើល Pipeline Status'
      ],
      correct: 2,
      explanation: 'Maintainer Role អាច Merge Merge Requests ទៅ Protected Branches និងគ្រប់គ្រង Project Settings ដែល Developer មិនអាចធ្វើបាន។'
    },
    {
      question: 'តើ `Owner` Role អាចធ្វើអ្វីខ្លះដែល `Maintainer` មិនអាចធ្វើបាន?',
      options: [
        'Push Code',
        'បង្កើត Issues',
        'គ្រប់គ្រង Group Members, លុប Project/Group, និងគ្រប់គ្រង Billing',
        'មើល Code'
      ],
      correct: 2,
      explanation: 'Owner Role អាចគ្រប់គ្រង Group Members, លុប Project/Group, និងគ្រប់គ្រង Billing ដែល Maintainer មិនអាចធ្វើបាន។'
    },
    {
      question: 'តើអ្នកអាចកាត់បន្ថយ Permissions ដែលបាន Inherit ពី Group សម្រាប់ User នៅ Project ជាក់លាក់បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 1,
      explanation: 'ទេ អ្នកមិនអាចកាត់បន្ថយ Permissions ដែល Inherit ពី Group បានទេ។ អ្នកអាចផ្តល់ Permissions បន្ថែមប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `Subgroups` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីលុប Groups',
        'ដើម្បីបង្កើតរចនាសម្ព័ន្ធឋានានុក្រមនៅក្នុង Groups',
        'ដើម្បីកំណត់ Permissions តែមួយគត់',
        'ដើម្បីគ្រប់គ្រង Users តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'Subgroups ត្រូវបានប្រើដើម្បីបង្កើតរចនាសម្ព័ន្ធឋានានុក្រមនៅក្នុង Groups។'
    },
    {
      question: 'តើ `Access expiration date` មានន័យដូចម្តេចនៅពេល Invite Members?',
      options: [
        'កំណត់កាលបរិច្ឆេទផុតកំណត់របស់ Project',
        'កំណត់កាលបរិច្ឆេទដែល User បាត់បង់ Access ទៅ Project/Group',
        'កំណត់កាលបរិច្ឆេទផុតកំណត់របស់ Group',
        'កំណត់កាលបរិច្ឆេទបង្កើត User'
      ],
      correct: 1,
      explanation: 'Access expiration date កំណត់កាលបរិច្ឆេទដែល User បាត់បង់ Access ទៅ Project/Group។'
    },
    {
      question: 'តើ `Project` ក្នុង GitLab គឺជាអ្វី?',
      options: [
        'គណនីអ្នកប្រើប្រាស់',
        'ការប្រមូលផ្តុំនៃ Groups',
        'Repository សម្រាប់ Source Code, Issues, Merge Requests, CI/CD Pipelines',
        'ប្រភេទ Permission'
      ],
      correct: 2,
      explanation: 'Project គឺជា Repository សម្រាប់ Source Code, Issues, Merge Requests, CI/CD Pipelines។'
    },
    {
      question: 'តើ Role ណាដែលអាចគ្រប់គ្រង Labels និង Milestones បាន?',
      options: [
        'Guest',
        'Reporter',
        'Developer',
        'Maintainer'
      ],
      correct: 3,
      explanation: 'Maintainer Role អាចគ្រប់គ្រង Labels, Milestones, និង Runners បាន។'
    }
  ],
  lab: {
    task: `
ការអនុវត្តន៍ជាក់ស្តែង៖ ការគ្រប់គ្រង Users, Groups, និង Permissions (Conceptual):
* បង្កើត Project ថ្មីនៅលើ GitLab ដើម្បីអនុវត្តការគ្រប់គ្រង Users, Groups, និង Permissions។
* ស្រមៃមើលការពិនិត្យ Groups, Projects, និង Members នៅក្នុង GitLab UI។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម:

1. **រៀបចំ Project**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្កើត Project ថ្មីមួយឈ្មោះ **'user-group-permissions'** ជាមួយ **Visibility Level** ជា **Private** និង **Initialize repository with a README**។

2. **បង្កើត Group និង Subgroup**:
   * **បង្កើត Group មេ**:
     * ចុច **\`New group\`**។
     * **Group name**: \`MyCompanyDev\`
     * **Visibility level**: Private
     * ចុច **\`Create group\`**។
   * **បង្កើត Subgroup**:
     * ចូលទៅ Group \`MyCompanyDev\`។
     * ចុច **\`New subgroup\`**។
     * **Group name**: \`FrontendTeam\`
     * **Visibility level**: Private
     * ចុច **\`Create group\`**។

3. **បង្កើត Projects**:
   * **បង្កើត Project ក្នុង Group មេ**:
     * ចូលទៅ Group \`MyCompanyDev\`។
     * ចុច **\`New project\`**។
     * **Project name**: \`SharedComponents\`
     * **Visibility level**: Private
     * ធីក **\`Initialize repository with a README\`**។
     * ចុច **\`Create project\`**។
   * **បង្កើត Project ក្នុង Subgroup**:
     * ចូលទៅ Subgroup \`FrontendTeam\`។
     * ចុច **\`New project\`**។
     * **Project name**: \`WebAppFrontend\`
     * **Visibility level**: Private
     * ធីក **\`Initialize repository with a README\`**।
     * ចុច **\`Create project\`**។

4. **បន្ថែម Members និងកំណត់ Permissions**:
   *(ចំណាំ: បើគ្មាន Users ផ្សេងទៀត សូមស្រមៃមើលជំហានទាំងនេះ)*:
   * **បន្ថែម User ទៅ Group មេ (MyCompanyDev)**:
     * ចូលទៅ Group \`MyCompanyDev\`។
     * ចុច **\`Group information > Members\`**។
     * ចុច **\`Invite members\`**។
     * **GitLab member or email address**: \`bob_dev\`
     * **Select a role**: Developer
     * ចុច **\`Invite\`**។
     * *ស្រមៃ*: \`bob_dev\` ជា Developer សម្រាប់ Projects \`SharedComponents\` និង \`WebAppFrontend\`។
   * **បន្ថែម User ទៅ Subgroup (FrontendTeam)**:
     * ចូលទៅ Subgroup \`FrontendTeam\`។
     * ចុច **\`Group information > Members\`**។
     * ចុច **\`Invite members\`**។
     * **GitLab member or email address**: \`carol_qa\`
     * **Select a role**: Reporter
     * ចុច **\`Invite\`**។
     * *ស្រម៉ៃ*: \`carol_qa\` ជា Reporter សម្រាប់ Project \`WebAppFrontend\`។
   * **បន្ថែម User ទៅ Project (SharedComponents)**:
     * ចូលទៅ Project \`SharedComponents\`।
     * ចុច **\`Project information > Members\`**។
     * ចុច **\`Invite members\`**។
     * **GitLab member or email address**: \`david_intern\`
     * **Select a role**: Guest
     * ចុច **\`Invite\`**។
     * *ស្រមៃ*: \`david_intern\` ជា Guest សម្រាប់ Project \`SharedComponents\`។

5. **ពិនិត្យ Inheritance (Conceptual)**:
   * **ស្រមៃ**: ចូលទៅ **Project information > Members** នៅក្នុង Project \`WebAppFrontend\`។
     * ឃើញ Members: ខ្លួនឯង (Owner), \`bob_dev\` (Developer), \`carol_qa\` (Reporter)។
   * **ស្រមៃ**: ចូលទៅ **Project information > Members** នៅក្នុង Project \`SharedComponents\`។
     * ឃើញ Members: ខ្លួនឯង (Owner), \`bob_dev\` (Developer), \`david_intern\` (Guest)។
`,
    solution: `
# ដំណោះស្រាយ៖ ការគ្រប់គ្រង Users, Groups, និង Permissions

បន្ទាប់ពីអនុវត្តជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន៖

## ជំហានទី ១: រៀបចំ Project
* អ្នកបានបង្កើត Project **user-group-permissions** នៅលើ **GitLab.com** ជាមួយ **Visibility Level** ជា **Private** និង **README**។

## ជំហានទី ២: បង្កើត Group និង Subgroup
* **Group មេ**:
  \`\`\`text
  Group: MyCompanyDev
  Visibility: Private
  \`\`\`
* **Subgroup**:
  \`\`\`text
  Subgroup: FrontendTeam
  Parent Group: MyCompanyDev
  Visibility: Private
  \`\`\`

## ជំហានទី ៣: បង្កើត Projects
* **Project ក្នុង Group មេ**:
  \`\`\`text
  Project: SharedComponents
  Group: MyCompanyDev
  Visibility: Private
  Initialized with README
  \`\`\`
* **Project ក្នុង Subgroup**:
  \`\`\`text
  Project: WebAppFrontend
  Group: FrontendTeam (Subgroup of MyCompanyDev)
  Visibility: Private
  Initialized with README
  \`\`\`

## ជំហានទី ៤: បន្ថែម Members និងកំណត់ Permissions
* **Group Members (MyCompanyDev)**:
  \`\`\`text
  User: bob_dev
  Role: Developer
  Inherited to: SharedComponents, WebAppFrontend
  \`\`\`
* **Subgroup Members (FrontendTeam)**:
  \`\`\`text
  User: carol_qa
  Role: Reporter
  Inherited to: WebAppFrontend
  \`\`\`
* **Project Members (SharedComponents)**:
  \`\`\`text
  User: david_intern
  Role: Guest
  Direct Member: Yes
  \`\`\`

## ជំហានទី ៥: ពិនិត្យ Inheritance (Conceptual)
* **Project WebAppFrontend Members**:
  \`\`\`text
  You: Owner (Inherited from MyCompanyDev)
  bob_dev: Developer (Inherited from MyCompanyDev)
  carol_qa: Reporter (Inherited from FrontendTeam)
  \`\`\`
* **Project SharedComponents Members**:
  \`\`\`text
  You: Owner (Inherited from MyCompanyDev)
  bob_dev: Developer (Inherited from MyCompanyDev)
  david_intern: Guest (Direct Project Member)
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project Name**: **user-group-permissions**
* **Group Structure**:
  * Group: \`MyCompanyDev\` (Private)
  * Subgroup: \`FrontendTeam\` (Private)
* **Projects**:
  * \`SharedComponents\` (Private, in MyCompanyDev)
  * \`WebAppFrontend\` (Private, in FrontendTeam)
* **Members and Permissions**:
  * You: Owner of MyCompanyDev (Inherited to all Projects)
  * \`bob_dev\`: Developer of MyCompanyDev (Inherited to all Projects)
  * \`carol_qa\`: Reporter of FrontendTeam (Inherited to WebAppFrontend)
  * \`david_intern\`: Guest of SharedComponents (Direct)
* **Inheritance**:
  * Permissions from MyCompanyDev inherited to SharedComponents and WebAppFrontend.
  * Permissions from FrontendTeam inherited to WebAppFrontend.
  * Direct Project Member (\`david_intern\`) only has access to SharedComponents.

លំហាត់នេះបានជួយអ្នកឱ្យយល់ពីការគ្រប់គ្រង Users, Groups, Permissions, និង Inheritance នៅក្នុង GitLab។
`
  }
};

export default GitLabLesson5_1Content;