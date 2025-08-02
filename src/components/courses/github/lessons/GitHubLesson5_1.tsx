import type { LessonContent } from '../../../../types/LessonTypes';

const GitHubLesson5_1Content: LessonContent = {
  title: 'Issues និង Projects (សម្រាប់ Task Management)',
  objectives: [
    'យល់ពីអ្វីជា Issues និងសារៈសំខាន់របស់វានៅ GitHub',
    'បង្កើត និងគ្រប់គ្រង Issues នៅក្នុង Repository',
    'ប្រើ Labels និង Milestones ដើម្បីរៀបចំ Issues',
    'ភ្ជាប់ Issues ជាមួយ Pull Requests',
    'បង្កើត GitHub Project សម្រាប់ Task Management',
    'ប្រើ Kanban Board ដើម្បីតាមដានការងារ',
    'បន្ថែម Assignees និង Comments នៅ Issues',
    'ស្គាល់ Best Practices សម្រាប់ Issues និង Projects',
  ],
  content: `
# Issues និង Projects (សម្រាប់ Task Management) 📋

---

Issues និង Projects ជាមុខងារសំខាន់នៅ GitHub សម្រាប់គ្រប់គ្រងកិច្ចការ តាមដានបញ្ហា និងរៀបចំគម្រោង។

---

## 1. Issues ជាអ្វី? 🤔

* **Issues:** ឧបករណ៍សម្រាប់តាមដានបញ្ហា ភារកិច្ច ឬសំណើថ្មីនៅក្នុង Repository។
* ប្រើសម្រាប់ Bug Reports, Feature Requests, ឬ Task Tracking។
* បង្កើត Issue:
  1. ចូលទៅ Repository > Issues > New Issue។
  2. បំពេញចំណងជើង និងពិពណ៌នា។
  3. បន្ថែម Labels, Assignees, និង Milestones។

---

## 2. Labels និង Milestones 🏷️

* **Labels:** ចាត់ថ្នាក់ Issues (ឧ. \`bug\`, \`enhancement\`, \`question\`)។
* **Milestones:** កំណត់គោលដៅគម្រោង និងភ្ជាប់ Issues ទៅនឹង Release។
* បន្ថែម Labels/Milestones:
  - នៅ Issue, ចុច Labels ឬ Milestones និងជ្រើស។

---

## 3. GitHub Projects 📊

* **Projects:** ឧបករណ៍សម្រាប់គ្រប់គ្រងគម្រោង ដោយប្រើ Kanban Board។
* បង្កើត Project:
  1. ចូលទៅ Repository > Projects > New Project។
  2. ជ្រើស Template (ឧ. Kanban)។
  3. បន្ថែម Issues ទៅ Columns (To Do, In Progress, Done)។

---

## 4. ភ្ជាប់ Issues និង Pull Requests 🔗

* ភ្ជាប់ Issue ទៅ Pull Request:
  - នៅ Pull Request Description, បញ្ចូល \`#<Issue Number>\`។
  - នៅពេល Merge PR, Issue អាចបិទដោយស្វ័យប្រវត្តិ។

---

## 5. Best Practices 📝

* សរសេរចំណងជើង Issue និងពិពណ៌នាឱ្យច្បាស់។
* ប្រើ Labels និង Milestones ដើម្បីរៀបចំ។
* បន្ថែម Assignees ដើម្បីកំណត់ទំនួលខុសត្រូវ។
* ប្រើ Kanban Board សម្រាប់តាមដានការងារ។

---

## 6. ឧទាហរណ៍នៃ Issues និង Projects 📋

1. បង្កើត Issue:
   - ចូលទៅ Repository > Issues > New Issue។
   - ចំណងជើង: "Add Feature Page"។
   - បន្ថែម Label: \`feature\`, Assignee: \`yourusername\`, Milestone: \`v1.0\`។
2. បង្កើត Project:
   - ចូលទៅ Projects > New Project > Kanban Template។
   - បន្ថែម Issue ទៅ Column "To Do"។
3. ភ្ជាប់ Issue និង Pull Request:
   - បង្កើត Branch \`feature\` និង Push។
   - បង្កើត PR និងបញ្ចូល \`#1\` នៅ Description។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Issue

# នៅ GitHub:
# ចូលទៅ Issues > New Issue
# ចំណងជើង: "Fix Login Bug"
# ពិពណ៌នា: "Login button not working"
# Labels: bug, Assignee: yourusername, Milestone: v1.0
# លទ្ធផល: Issue created

# ឧទាហរណ៍ ២: បង្កើត Project

# នៅ Projects > New Project
# ជ្រើស Kanban Template
# បន្ថែម Issue #1 ទៅ Column "To Do"
# លទ្ធផល: Project created with Kanban board

# ឧទាហរណ៍ ៣: ភ្ជាប់ Issue និង Pull Request

\`\`\`bash
git switch -c feature
echo "<h1>Feature</h1>" > feature.html
git add feature.html
git commit -m "feat: add feature page"
git push origin feature
# នៅ GitHub, បង្កើត PR និងបញ្ចូល #1 នៅ Description
# លទ្ធផល: Issue linked to PR
\`\`\`
`,
  ],
  quiz: [
    {
      question: 'តើ Issues នៅ GitHub ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Branch',
        'តាមដានបញ្ហា និងភារកិច្ច',
        'Host Website',
        'បង្កើត Team',
      ],
      correct: 1,
      explanation: 'Issues ប្រើសម្រាប់តាបញ្ហា និងភារកិច្ច។',
    },
    {
      question: 'តើអ្នកបង្កើត Issue ដោយរបៀបណា?',
      options: [
        'ប្រើ `git issue`',
        'នៅ Repository > Issues > New Issue',
        'ប្រើ `git push`',
        'នៅ Pull Request',
      ],
      correct: 1,
      explanation: 'បង្កើត Issue នៅ Repository > Issues > New Issue។',
    },
    {
      question: 'តើ Labels នៅ Issues ជួយអ្វី?',
      options: [
        'បង្កើត Project',
        'ចាត់ថ្នាក់ Issues',
        'Merge Branch',
        'Host Website',
      ],
      correct: 1,
      explanation: 'Labels ជួយចាត់ថ្នាក់ Issues។',
    },
    {
      question: 'តើ Milestones ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់គោលដៅគម្រោង',
        'បង្កើត Branch',
        'Push Commits',
        'លុប Repository',
      ],
      correct: 0,
      explanation: 'Milestones កំណត់គោលដៅគម្រោង។',
    },
    {
      question: 'តើ GitHub Projects ប្រើ Template អ្វីសម្រាប់ Task Management?',
      options: [
        'Kanban Board',
        'Pull Request',
        'Branch Protection',
        'Gist',
      ],
      correct: 0,
      explanation: 'Projects ប្រើ Kanban Board សម្រាប់ Task Management។',
    },
    {
      question: 'តើអ្នកអាចភ្ជាប់ Issue ទៅ Pull Request បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ដោយបញ្ចូល #<Issue Number> នៅ PR។',
    },
    {
      question: 'តើ Kanban Board មាន Columns អ្វីខ្លះជាទូទៅ?',
      options: [
        'To Do, In Progress, Done',
        'Push, Pull, Merge',
        'Read, Write, Admin',
        'Bug, Feature, Task',
      ],
      correct: 0,
      explanation: 'Kanban Board មាន Columns: To Do, In Progress, Done។',
    },
    {
      question: 'តើ Assignees នៅ Issues ជួយអ្វី?',
      options: [
        'កំណត់ទំនួលខុសត្រូវ',
        'បង្កើត Branch',
        'Host Website',
        'លុប Repository',
      ],
      correct: 0,
      explanation: 'Assignees កំណត់ទំនួលខុសត្រូវ។',
    },
    {
      question: 'តើអ្នកអាចបិទ Issue ដោយស្វ័យប្រវត្តិបានទេ?',
      options: [
        'បាទ/ចាស៎ នៅពេល Merge PR',
        'ទេ',
        'តែនៅ Local',
        'តែនៅ main',
      ],
      correct: 0,
      explanation: 'បាទ/ចាស៎ នៅពេល Merge PR ដែលភ្ជាប់ Issue។',
    },
    {
      question: 'តើ Best Practice សម្រាប់ Issues គឺជាអ្វី?',
      options: [
        'សរសេរពិពណ៌នាមិនច្បាស់',
        'សរសេរពិពណ៌នាច្បាស់ និងប្រើ Labels',
        'មិនប្រើ Milestones',
        'មិនបន្ថែម Assignees',
      ],
      correct: 1,
      explanation: 'សរសេរពិពណ៌នាច្បាស់ និងប្រើ Labels ជា Best Practice។',
    },
    {
      question: 'តើ Projects អាចប្រើនៅកម្រិតណា?',
      options: [
        'Repository ឬ Organization',
        'Branch',
        'Pull Request',
        'Gist',
      ],
      correct: 0,
      explanation: 'Projects អាចប្រើនៅ Repository ឬ Organization។',
    },
    {
      question: 'តើអ្នកអាចបន្ថែម Issue ទៅ Project បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Issue អាចបន្ថែមទៅ Project។',
    },
    {
      question: 'តើ Labels អាចបង្កើតផ្ទាល់ខ្លួនបានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Labels អាចបង្កើតផ្ទាល់ខ្លួនបាន។',
    },
    {
      question: 'តើ Milestones ជួយអ្វីនៅ Issues?',
      options: [
        'បង្កើត Branch',
        'កំណត់គោលដៅ Release',
        'Push Commits',
        'Host Website',
      ],
      correct: 1,
      explanation: 'Milestones កំណត់គោលដៅ Release។',
    },
    {
      question: 'តើអ្នកអាច Comment នៅ Issues បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'តែនៅ Local', 'តែនៅ main'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Comment អាចបន្ថែមនៅ Issues។',
    },
    {
      question: 'តើ Kanban Board ជួយអ្វីនៅ Projects?',
      options: [
        'បង្កើត Branch',
        'តាមដានការងារ',
        'Merge Branch',
        'Host Website',
      ],
      correct: 1,
      explanation: 'Kanban Board ជួយតាមដានការងារ។',
    },
  ],
  lab: {
    task: `
អនុវត្តការប្រើ Issues និង Projects៖
* បង្កើត Issue និងបន្ថែម Labels, Assignees, Milestones។
* បង្កើត Project និងបន្ថែម Issue។
* ភ្ជាប់ Issue ទៅ Pull Request។

សូមអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. បង្កើត Repository **my-issues-repo** នៅ GitHub។
2. បង្កើត Issue:
   - ចូលទៅ Issues > New Issue។
   - ចំណងជើង: "Add Feature Page"។
   - បន្ថែម Label: \`feature\`, Assignee: \`yourusername\`, Milestone: \`v1.0\`។
3. បង្កើត Project:
   - ចូលទៅ Projects > New Project > Kanban Template។
   - បន្ថែម Issue ទៅ Column "To Do"។
4. Clone Repository:
   \`\`\`bash
   git clone https://github.com/yourusername/my-issues-repo.git
   cd my-issues-repo
   \`\`\`
5. បង្កើត Branch \`feature\`:
   \`\`\`bash
   git switch -c feature
   echo "<h1>Feature Page</h1>" > feature.html
   git add feature.html
   git commit -m "feat: add feature page"
   git push origin feature
   \`\`\`
6. បង្កើត Pull Request និងភ្ជាប់ Issue:
   - នៅ GitHub, បង្កើត PR និងបញ្ចូល \`#1\` នៅ Description។
`,
    solution: `
# ដំណោះស្រាយ៖ ការប្រើ Issues និង Projects

## ជំហានទី ១៖ បង្កើត Repository
- បង្កើត **my-issues-repo** នៅ GitHub។
- លទ្ធផល: Repository created

## ជំហានទី ២៖ បង្កើត Issue
- ចូលទៅ Issues > New Issue។
- ចំណងជើង: "Add Feature Page"។
- ពិពណ៌នា: "Implement feature page"។
- បន្ថែម Label: feature, Assignee: yourusername, Milestone: v1.0។
- លទ្ធផល: Issue #1 created

## ជំហានទី ៣៖ បង្កើត Project
- ចូលទៅ Projects > New Project > Kanban Template។
- បន្ថែម Issue #1 ទៅ Column "To Do"។
- លទ្ធផល: Project created with Issue

## ជំហានទី ៤៖ Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/my-issues-repo.git
cd my-issues-repo
# លទ្ធផល: Repository cloned
\`\`\`

## ជំហានទី ៥៖ បង្កើត Branch
\`\`\`bash
git switch -c feature
echo "<h1>Feature Page</h1>" > feature.html
git add feature.html
git commit -m "feat: add feature page"
git push origin feature
# លទ្ធផល: Pushed to feature
\`\`\`

## ជំហានទី ៦៖ បង្កើត Pull Request
- ចូលទៅ GitHub នៅ https://github.com/yourusername/my-issues-repo។
- ចុច **New Pull Request** សម្រាប់ Branch \`feature\` ទៅ \`main\`។
- បញ្ចូល \`#1\` នៅ Description។
- លទ្ធផល: Pull Request created and linked to Issue #1

លំហាត់នេះជួយអ្នកឱ្យស្គាល់ការប្រើ Issues និង Projects។
`,
  },
};

export default GitHubLesson5_1Content;