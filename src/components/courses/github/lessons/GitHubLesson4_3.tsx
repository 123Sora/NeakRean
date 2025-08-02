import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson4_3Content: LessonContent = {
  title: 'Collaborators និង Teams',
  objectives: [
    'យល់ពី Collaborators និង Teams នៅ GitHub',
    'បន្ថែម Collaborators ទៅ Repository',
    'បង្កើត Team នៅក្នុង Organization',
    'កំណត់ Permissions សម្រាប់ Collaborators និង Teams',
    'គ្រប់គ្រង Access ទៅ Repository',
    'ប្រើ GitHub Organization សម្រាប់ការសហការ',
    'ស្គាល់ Roles (Owner, Member, Admin)',
    'ប្រើ Branch Protection Rules ដើម្បីគ្រប់គ្រងការសហការ',
  ],
  content: `
# Collaborators និង Teams 🤝

---

Collaborators និង Teams ជួយគ្រប់គ្រងការសហការនៅលើ Repository ដោយផ្តល់សិទ្ធិផ្សេងៗដល់អ្នកប្រើប្រាស់។

---

## 1. Collaborators ជាអ្វី? 🤔

* **Collaborators:** អ្នកប្រើប្រាស់ GitHub ដែលត្រូវបានបន្ថែមទៅ Repository ដើម្បីរួមចំណែក។
* Permissions: Read, Write, Admin។
* បន្ថែម Collaborators៖
  1. ចូលទៅ Repository Settings > Collaborators។
  2. បន្ថែមអ្នកប្រើប្រាស់ដោយ Username ឬ Email។

---

## 2. Teams ជាអ្វី? 🧑‍💼

* **Teams:** ក្រុមអ្នកប្រើប្រាស់នៅក្នុង GitHub Organization។
* ប្រើសម្រាប់គ្រប់គ្រង Permissions សម្រាប់ក្រុមធំ។
* បង្កើត Team៖
  1. ចូលទៅ Organization > Teams > New Team។
  2. បន្ថែម Members និងកំណត់ Permissions។

---

## 3. GitHub Organization 🌍

* **Organization:** គណនី GitHub សម្រាប់ក្រុម ដែលអនុញ្ញាតឱ្យគ្រប់គ្រង Repository និង Teams។
* Roles: Owner, Member, Billing Manager។
* បន្ថែម Repository ទៅ Organization និងកំណត់ Access។

---

## 4. Branch Protection Rules 🛡️

* ការពារ Branch (ឧ. \`main\`) ដើម្បីគ្រប់គ្រងការសហការ។
* កំណត់៖
  - ទាមទារ Pull Request មុន Merge។
  - ទាមទារ Review ពី Collaborators។
  - កំណត់អ្នកអាច Push ទៅ Branch។
* បើក Branch Protection៖
  1. ចូលទៅ Repository Settings > Branches > Add Rule។
  2. កំណត់ Rule សម្រាប់ Branch (ឧ. \`main\`)។

---

## 5. Best Practices 📝

* កំណត់ Permissions តាមតួនាទី (Least Privilege)។
* ប្រើ Teams សម្រាប់គម្រោងធំ។
* បើក Branch Protection Rules សម្រាប់ Branch សំខាន់។
* តាមដាន Activity នៅ Repository។

---

## 6. ឧទាហរណ៍នៃ Collaborators និង Teams 📋

1. បន្ថែម Collaborator៖
   - ចូលទៅ Repository Settings > Collaborators > Add People។
   - បញ្ចូល Username និងជ្រើស Permission (Write)។
2. បង្កើត Team៖
   - នៅ Organization, ចុច New Team និងបន្ថែម Members។
   - ផ្តល់ Access ទៅ Repository។
3. បើក Branch Protection៖
   - នៅ Settings > Branches, បន្ថែម Rule សម្រាប់ \`main\`។
   - ទាមទារ Pull Request និង Review។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បន្ថែម Collaborator

# នៅ GitHub:
# ចូលទៅ Settings > Collaborators > Add People
# បញ្ចូល Username: collaborator1
# ជ្រើស Permission: Write
# លទ្ធផល: Collaborator added

# ឧទាហរណ៍ ២: បង្កើត Team

# នៅ Organization:
# ចុច Teams > New Team
# បញ្ចូល Team Name: DevTeam
# បន្ថែម Members និងផ្តល់ Access ទៅ Repository
# លទ្ធផល: Team created

# ឧទាហរណ៍ ៣: បើក Branch Protection

# នៅ Settings > Branches > Add Rule
# បញ្ចូល Branch: main
# ធីក "Require pull request reviews before merging"
# លទ្ធផល: Branch protection enabled
`,
  ],
  quiz: [
    {
      question: 'តើ Collaborators នៅ GitHub ជាអ្វី?',
      options: [
        'Branch នៅ Repository',
        'អ្នកប្រើប្រាស់ដែលបន្ថែមទៅ Repository',
        'Team នៅ Organization',
        'Remote Repository',
      ],
      correct: 1,
      explanation: 'Collaborators ជាអ្នកប្រើប្រាស់ដែលបន្ថែមទៅ Repository។',
    },
    {
      question: 'តើ Teams នៅ GitHub ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Branch',
        'គ្រប់គ្រង Permissions សម្រាប់ក្រុម',
        'លុប Repository',
        'Push Commits',
      ],
      correct: 1,
      explanation: 'Teams ប្រើសម្រាប់គ្រប់គ្រង Permissions សម្រាប់ក្រុម។',
    },
    {
      question: 'តើអ្នកបន្ថែម Collaborator ដោយរបៀបណា?',
      options: [
        'ប្រើ `git add collaborator`',
        'នៅ Repository Settings > Collaborators',
        'ប្រើ `git push`',
        'នៅ Pull Request',
      ],
      correct: 1,
      explanation: 'បន្ថែម Collaborator នៅ Repository Settings > Collaborators។',
    },
    {
      question: 'តើ GitHub Organization ជាអ្វី?',
      options: [
        'Branch នៅ Repository',
        'គណនីសម្រាប់ក្រុម ដើម្បីគ្រប់គ្រង Repository',
        'Remote Repository',
        'Pull Request',
      ],
      correct: 1,
      explanation: 'Organization ជាគណនីសម្រាប់ក្រុម ដើម្បីគ្រប់គ្រង Repository។',
    },
    {
      question: 'តើ Role ណាដែលមានសិទ្ធិខ្ពស់បំផុតនៅ Organization?',
      options: ['Member', 'Owner', 'Billing Manager', 'Collaborator'],
      correct: 1,
      explanation: 'Owner មានសិទ្ធិខ្ពស់បំផុតនៅ Organization។',
    },
    {
      question: 'តើ Branch Protection Rules ជួយអ្វី?',
      options: [
        'បង្កើត Branch',
        'ការពារ Branch និងគ្រប់គ្រង Merge',
        'លុប Repository',
        'បន្ថែម Collaborators',
      ],
      correct: 1,
      explanation: 'Branch Protection Rules ការពារ Branch និងគ្រប់គ្រង Merge។',
    },
    {
      question: 'តើអ្នកអាចកំណត់ Permission ផ្សេងៗសម្រាប់ Collaborators បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចកំណត់ Permission ផ្សេងៗ។',
    },
    {
      question: 'តើ Permission ណាដែលអនុញ្ញាតឱ្យ Collaborator កែ Repository?',
      options: ['Read', 'Write', 'Admin', 'Billing'],
      correct: 1,
      explanation: 'Write Permission អនុញ្ញាតឱ្យកែ Repository។',
    },
    {
      question: 'តើអ្នកបង្កើត Team នៅឯណា?',
      options: [
        'នៅ Repository Settings',
        'នៅ Organization > Teams',
        'នៅ Pull Request',
        'នៅ Command Line',
      ],
      correct: 1,
      explanation: 'Team ត្រូវបានបង្កើតនៅ Organization > Teams។',
    },
    {
      question: 'តើ Branch Protection Rule អាចទាមទារ Pull Request បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Branch Protection Rule អាចទាមទារ Pull Request។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ Collaborators គឺជាអ្វី?',
      options: [
        'ផ្តល់ Admin Permission ទៅគ្រប់គ្នា',
        'កំណត់ Permission តាមតួនាទី',
        'មិនប្រើ Branch Protection',
        'លុប Teams',
      ],
      correct: 1,
      explanation: 'កំណត់ Permission តាមតួនាទីជា Best Practice។',
    },
    {
      question: 'តើ Organization អាចមាន Repository ច្រើនបានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែមួយ Repository', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Organization អាចមាន Repository ច្រើន។',
    },
    {
      question: 'តើ Role Member នៅ Organization អាចធ្វើអ្វីបាន?',
      options: [
        'កែ Repository Settings',
        'រួមចំណែកទៅ Repository ដែលមាន Access',
        'លុប Organization',
        'គ្រប់គ្រង Billing',
      ],
      correct: 1,
      explanation: 'Member អាចរួមចំណែកទៅ Repository ដែលមាន Access។',
    },
    {
      question: 'តើ Branch Protection Rule អាចទាមទារ Review បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Branch Protection Rule អាចទាមទារ Review។',
    },
    {
      question: 'តើអ្នកអាចដក Collaborator ចេញពី Repository បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Organization', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ អ្នកអាចដក Collaborator ចេញបាន។',
    },
    {
      question: 'តើ Teams ជួយអ្វីនៅក្នុង Organization?',
      options: [
        'បង្កើត Branch',
        'គ្រប់គ្រង Permissions សម្រាប់ក្រុម',
        'លុប Repository',
        'Push Commits',
      ],
      correct: 1,
      explanation: 'Teams ជួយគ្រប់គ្រង Permissions សម្រាប់ក្រុម។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ Collaborators និង Teams៖
* បន្ថែម Collaborator។
* បង្កើត Team នៅ Organization។
* បើក Branch Protection Rule។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Repository **my-team-repo** នៅ GitHub។
2. បន្ថែម Collaborator៖
   - ចូលទៅ Repository Settings > Collaborators > Add People។
   - បញ្ចូល Username (ឧ. collaborator1) និងជ្រើស Permission: Write។
3. បង្កើត Organization (ឧ. MyOrg) និងបន្ថែម **my-team-repo** ទៅ Organization។
4. បង្កើត Team ឈ្មោះ **DevTeam**៖
   - នៅ Organization > Teams > New Team។
   - បន្ថែម Member (ឧ. collaborator1) និងផ្តល់ Write Access ទៅ **my-team-repo**។
5. បើក Branch Protection Rule សម្រាប់ \`main\`៖
   - នៅ Repository Settings > Branches > Add Rule។
   - ធីក "Require pull request reviews before merging"។
6. Clone Repository និងបង្កើត Branch \`feature\`៖
   \`\`\`bash
   git clone https://github.com/MyOrg/my-team-repo.git
   cd my-team-repo
   git switch -c feature
   echo "<h1>Team Feature</h1>" > feature.html
   git add feature.html
   git commit -m "feat: add feature.html"
   git push origin feature
   \`\`\`
7. បង្កើត Pull Request និងស្នើសុំ Review ពី Collaborator។
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ Collaborators និង Teams

## ជំហានទី ១៖ បង្កើត Repository
- បង្កើត **my-team-repo** នៅ GitHub។
- លទ្ធផល: Repository created

## ជំហានទី ២៖ បន្ថែម Collaborator
- ចូលទៅ Settings > Collaborators > Add People។
- បញ្ចូល Username: collaborator1, ជ្រើស Permission: Write។
- លទ្ធផល: Collaborator added

## ជំហានទី ៣៖ បង្កើត Organization
- បង្កើត Organization: MyOrg នៅ GitHub។
- ផ្ទេរ **my-team-repo** ទៅ MyOrg។
- លទ្ធផល: Repository moved to Organization

## ជំហានទី ៤៖ បង្កើត Team
- នៅ MyOrg > Teams > New Team។
- បញ្ចូល Team Name: DevTeam។
- បន្ថែម collaborator1 និងផ្តល់ Write Access ទៅ **my-team-repo**។
- លទ្ធផល: Team created

## ជំហានទី ៥៖ បើក Branch Protection
- នៅ Settings > Branches > Add Rule។
- បញ្ចូល Branch: main, ធីក "Require pull request reviews before merging"។
- លទ្ធផល: Branch protection enabled

## ជំហានទី ៦៖ Clone និងបង្កើត Branch
\`\`\`bash
git clone https://github.com/MyOrg/my-team-repo.git
cd my-team-repo
git switch -c feature
echo "<h1>Team Feature</h1>" > feature.html
git add feature.html
git commit -m "feat: add feature.html"
git push origin feature
# លទ្ធផល: Pushed to feature
\`\`\`

## ជំហានទី ៧៖ បង្កើត Pull Request
- ចូលទៅ GitHub នៅ https://github.com/MyOrg/my-team-repo។
- ចុច **New Pull Request** សម្រាប់ Branch \`feature\` ទៅ \`main\`។
- ស្នើសុំ Review ពី collaborator1។
- លទ្ធផល: Pull Request created

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការគ្រប់គ្រង Collaborators និង Teams។
`,
  },
};

export default GitHubLesson4_3Content;