import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson5_2Content: LessonContent = {
  title: 'ការកំណត់ Permissions',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Permissions',
    'ស្គាល់ពី Project Permissions, Issue Security និង Global Permissions',
    'រៀនពីរបៀបកែប្រែ Project Permission Scheme',
    'អនុវត្តន៍ការកំណត់សិទ្ធិសម្រាប់ Roles ឬ Groups ជាក់លាក់',
    'យល់ពីរបៀបដែល Permissions គ្រប់គ្រងសកម្មភាពរបស់ Users'
  ],
  content: `
# ការកំណត់ Permissions

---

**Permissions** នៅក្នុង **Jira** កំណត់ថាតើ **Users** ឬ **Roles** អាចធ្វើអ្វីបានខ្លះនៅក្នុង Project ។ ការកំណត់ Permissions ឱ្យបានត្រឹមត្រូវគឺចាំបាច់ដើម្បីធានាសុវត្ថិភាពទិន្នន័យ និងរក្សាភាពឯកជននៃព័ត៌មានរសើប។

---

## 1. ប្រភេទ Permissions

- **Global Permissions:** ជាសិទ្ធិដែលអនុវត្តចំពោះ Jira ទាំងមូល (ឧទាហរណ៍: អ្នកណាអាចបង្កើត Project បាន?)។ មានតែ Jira Administrator ប៉ុណ្ណោះដែលអាចកែប្រែបាន។
- **Project Permissions:** ជាសិទ្ធិដែលអនុវត្តចំពោះ Project ជាក់លាក់មួយ។ ទាំងនេះត្រូវបានគ្រប់គ្រងតាមរយៈ **Permission Schemes** ។
- **Issue Security:** ជាសិទ្ធិដែលកំណត់ថាតើនរណាខ្លះអាចមើល Issue ជាក់លាក់មួយ។ វាមានប្រយោជន៍សម្រាប់ការពារព័ត៌មានដែលរសើបបំផុត។

---

## 2. Project Permissions Scheme

**Permission Scheme** គឺជាសំណុំនៃ Permissions ដែលត្រូវបានផ្តល់ទៅឱ្យ Groups ឬ Roles ។ ឧទាហរណ៍:
- **Project Permissions:**
  - **Browse Projects:** អ្នកណាអាចមើល Project បាន? (ផ្តល់ឱ្យ Roles ទាំងអស់)
  - **Create Issues:** អ្នកណាអាចបង្កើត Issues បាន? (ផ្តល់ឱ្យ Roles "User", "Developer")
  - **Resolve Issues:** អ្នកណាអាចបិទ Issues បាន? (ផ្តល់ឱ្យ Roles "Developer", "Project Administrator")
  - **Delete Issues:** អ្នកណាអាចលុប Issues បាន? (ផ្តល់ឱ្យ Roles "Project Administrator")

---

## 3. ការកំណត់ Permissions

ដើម្បីកំណត់ Permissions សម្រាប់ Project របស់អ្នក អ្នកត្រូវកែប្រែ **Permission Scheme** របស់វា។
1. **ចូលទៅកាន់ Project Settings:** ក្នុង Project របស់អ្នក ចុច "Project Settings"។
2. **ចូលទៅកាន់ Permissions:** នៅក្នុង Sidebar ចុច "Permissions"។
3. **កែប្រែ Scheme:** អ្នកនឹងឃើញបញ្ជី Permissions ។ ចុច "Edit Permissions" ដើម្បីបន្ថែមឬដក Groups/Roles ចេញពី Permissions ជាក់លាក់។

---

## 4. ឧទាហរណ៍នៃការអនុវត្ត

**ស្ថានភាព:** ក្រុមហ៊ុនចង់ការពារ Bugs របស់ខ្លួនពីការលុបដោយចៃដន្យ។

**ដំណោះស្រាយ:**
- ចូលទៅកាន់ **Permission Scheme** របស់ Project របស់អ្នក។
- រកមើល **"Delete Issues"** Permission ។
- កំណត់ថាមានតែ Roles "Project Administrator" ប៉ុណ្ណោះដែលអាចមានសិទ្ធិនេះ។
- ឥឡូវនេះ មានតែ Project Administrators ប៉ុណ្ណោះដែលអាចលុប Bugs បាន ចំណែក Developers មិនអាចទេ។
`,
  examples: [
    `### ឧទាហរណ៍: ការកំណត់សិទ្ធិបង្កើត Issues

**គោលបំណង:** អ្នកចង់ឱ្យតែក្រុម Development អាចបង្កើត Issues បាន។

**ជំហាន:**
1. **ចូលទៅកាន់ Permissions:** ក្នុង Project Settings របស់អ្នក ចូលទៅផ្នែក "Permissions"។
2. **រក Permission "Create Issues":** រកមើល Permission នេះក្នុងបញ្ជី។
3. **កែប្រែ:** ចុច "Edit Permissions" ហើយបន្ថែម Group "Development Team" ទៅក្នុង Permission នេះ។ ដកចេញនូវ Groups ឬ Roles ផ្សេងទៀតដែលអ្នកមិនចង់ឱ្យមានសិទ្ធិនេះ។
`,
  ],
  quiz: [
    {
      question: 'តើ "Global Permissions" ខុសពី "Project Permissions" ត្រង់ណា?',
      options: ['Global Permissions អនុវត្តចំពោះ Jira ទាំងមូល ចំណែក Project Permissions អនុវត្តចំពោះ Project ជាក់លាក់', 'Global Permissions សម្រាប់តែ Admins ចំណែក Project Permissions សម្រាប់អ្នកគ្រប់គ្នា', 'Global Permissions អាចត្រូវបានកែប្រែដោយអ្នកគ្រប់គ្នា', 'មិនមានភាពខុសគ្នាទេ'],
      correct: 0,
      explanation: 'Global Permissions គ្រប់គ្រងសិទ្ធិសម្រាប់ Jira ទាំងមូល ចំណែក Project Permissions គ្រប់គ្រងសិទ្ធិសម្រាប់ Project នីមួយៗ។'
    },
    {
      question: 'តើ "Permission Scheme" គឺជាអ្វី?',
      options: ['ជាប្រភេទ Issue', 'ជាសំណុំនៃ Permissions ដែលត្រូវបានផ្តល់ទៅឱ្យ Roles ឬ Groups', 'ជាប្រភេទ Report', 'ជាឈ្មោះរបស់ Project'],
      correct: 1,
      explanation: 'Permission Scheme គឺជាសំណុំនៃ Permissions ដែលគ្រប់គ្រងសិទ្ធិរបស់អ្នកប្រើប្រាស់នៅក្នុង Project ។'
    },
    {
      question: 'តើ "Issue Security" ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: ['ដើម្បីកំណត់ថាតើនរណាអាចមើល Project បាន', 'ដើម្បីកំណត់ថាតើនរណាអាចបង្កើត Issues បាន', 'ដើម្បីកំណត់ថាតើនរណាអាចមើល Issues ជាក់លាក់បាន', 'ដើម្បីកំណត់ថាតើនរណាអាចលុប Issues បាន'],
      correct: 2,
      explanation: 'Issue Security ត្រូវបានប្រើដើម្បីកំណត់ថាតើនរណាអាចមើល Issues ជាក់លាក់ដែលមានព័ត៌មានរសើបបាន។'
    },
    {
      question: 'តើ Permission "Delete Issues" កំណត់សិទ្ធិអ្វី?',
      options: ['សិទ្ធិក្នុងការលុប Project', 'សិទ្ធិក្នុងការលុប Issues', 'សិទ្ធិក្នុងការលុប Comments', 'សិទ្ធិក្នុងការលុប Users'],
      correct: 1,
      explanation: 'Permission "Delete Issues" ផ្តល់សិទ្ធិឱ្យអ្នកប្រើប្រាស់អាចលុប Issues ចេញពី Project បាន។'
    },
    {
      question: 'តើអ្នកអាចកែប្រែ Global Permissions បានទេ?',
      options: ['បាន', 'មិនបានទាល់តែសោះ', 'បានតែ Admin ប៉ុណ្ណោះ', 'បានតែអ្នកបង្កើត Project ប៉ុណ្ណោះ'],
      correct: 2,
      explanation: 'មានតែ Jira Administrator ប៉ុណ្ណោះដែលមានសិទ្ធិកែប្រែ Global Permissions ។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. ចូលទៅកាន់ Project Settings របស់ Project របស់អ្នក ហើយទៅកាន់ផ្នែក **Permissions**។
2. រកមើល Permission **"Resolve Issues"**។
3. កែប្រែ Permission Scheme នោះដើម្បីឱ្យតែ Roles **"Project Administrator"** និង **"Developer"** អាចមានសិទ្ធិនេះ។
4. ពិពណ៌នាពីមូលហេតុដែលការកំណត់បែបនេះមានប្រយោជន៍។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. នៅក្នុង Project របស់អ្នក ចុច "Project Settings" ហើយបន្ទាប់មក "Permissions" ។
2. រកមើល Permission "Resolve Issues" ។
3. ចុច "Edit Permissions" ។ នៅក្នុងแถว "Resolve Issues" នោះ ដក Roles ឬ Groups ផ្សេងទៀតចេញ ហើយទុកតែ "Project Administrator" និង "Developer"។
4. ការកំណត់បែបនេះមានប្រយោជន៍ណាស់ព្រោះវាធានាថាមានតែមនុស្សដែលកំពុងធ្វើការលើ Issues ប៉ុណ្ណោះដែលអាចបិទវាបាន។ ឧទាហរណ៍ Roles "Viewer" នឹងមិនអាចបិទ Issues ដោយចៃដន្យបានទេ។
    `
  }
};

export default JiraLesson5_2Content;