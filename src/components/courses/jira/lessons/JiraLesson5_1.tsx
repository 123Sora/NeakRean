import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson5_1Content: LessonContent = {
  title: 'ការគ្រប់គ្រង Users និង Roles',
  objectives: [
    'យល់ពីរបៀបគ្រប់គ្រង Users និង Groups នៅក្នុង Jira',
    'ស្គាល់ពីតួនាទី (Roles) ស្តង់ដាររបស់ Jira',
    'រៀនពីរបៀបចាត់តាំង Users ទៅក្នុង Roles ផ្សេងៗ',
    'អនុវត្តន៍ការបន្ថែម និងដក Users ចេញពី Project',
    'យល់ពីរបៀបដែល Roles ជះឥទ្ធិពលដល់ Permissions'
  ],
  content: `
# ការគ្រប់គ្រង Users និង Roles

---

ការគ្រប់គ្រង **Users** និង **Roles** នៅក្នុង **Jira** គឺចាំបាច់ដើម្បីធានាថាមានតែមនុស្សដែលត្រឹមត្រូវប៉ុណ្ណោះដែលមានសិទ្ធិចូលប្រើប្រាស់ និងកែប្រែទិន្នន័យគម្រោង។ វាជួយការពារព័ត៌មានរសើប និងធានាថាការងារមានភាពរលូន។

---

## 1. Users, Groups និង Roles

- **Users:** គឺជាបុគ្គលម្នាក់ៗដែលមានគណនី Jira ។
- **Groups:** គឺជាសំណុំនៃ Users ។ ការប្រើប្រាស់ Groups ធ្វើឱ្យការគ្រប់គ្រងមានភាពងាយស្រួល ព្រោះអ្នកអាចផ្តល់សិទ្ធិ (Permissions) ទៅឱ្យ Group ទាំងមូល ជាជាងផ្តល់ឱ្យ User ម្នាក់ៗ។
- **Roles:** គឺជាតួនាទីជាក់លាក់របស់ User នៅក្នុង Project ណាមួយ។

---

## 2. Roles ស្តង់ដាររបស់ Jira

Jira ភ្ជាប់មកជាមួយ Roles ស្តង់ដារមួយចំនួនដែលអ្នកអាចប្រើបាន៖
- **Administrator:** មានសិទ្ធិខ្ពស់បំផុតនៅក្នុង Jira ។ អាចធ្វើអ្វីបានទាំងអស់ រួមទាំងការគ្រប់គ្រង Users និង Project ។
- **Project Administrator:** អាចគ្រប់គ្រងការកំណត់ Project របស់ខ្លួនបាន ប៉ុន្តែមិនអាចកែប្រែការកំណត់ទូទៅ (Global Settings) បានទេ។
- **Developer:** អាចមើល, បង្កើត, កែប្រែ និងបិទ Issues ។
- **Viewer:** អាចមើល Issues បាន ប៉ុន្តែមិនអាចកែប្រែវាបានទេ។
- **Service Desk Customer:** ជា Roles ពិសេសសម្រាប់ Jira Service Management ដែលអនុញ្ញាតឱ្យអតិថិជនបង្កើត Tickets ។

---

## 3. ការចាត់តាំង Users ទៅ Roles

អ្នកអាចចាត់តាំង Users ទៅ Roles ជាក់លាក់នៅក្នុង Project Settings ។
1. **ចូលទៅកាន់ Project Settings:** ក្នុង Project របស់អ្នក ចុច "Project Settings"។
2. **ចូលទៅកាន់ Users and Roles:** នៅក្នុង Sidebar របស់ Project Settings ចុច "Users and Roles"។
3. **ចាត់តាំង Roles:** អ្នកអាចបន្ថែម Users ឬ Groups ហើយចាត់តាំងពួកគេទៅ Roles ដែលអ្នកចង់បាន។

---

## 4. ឧទាហរណ៍ជាក់ស្តែង

**ស្ថានភាព:** ក្រុមការងារមានអ្នកគ្រប់គ្រងគម្រោងម្នាក់ (John), Developer ម្នាក់ (Lisa), និងអ្នកធ្វើតេស្តម្នាក់ (Peter) ។

- **John (Project Administrator):** ត្រូវបានផ្តល់ Roles "Project Administrator" ដើម្បីអាចគ្រប់គ្រង Project ទាំងអស់។
- **Lisa (Developer):** ត្រូវបានផ្តល់ Roles "Developer" ដើម្បីអាចធ្វើការលើ Issues បាន។
- **Peter (Developer):** ត្រូវបានផ្តល់ Roles "Developer" ផងដែរ ដើម្បីអាចធ្វើការលើការងារបាន។

ការប្រើប្រាស់ Roles នេះធ្វើឱ្យការកំណត់សិទ្ធិមានភាពងាយស្រួល។ ឧទាហរណ៍ អ្នកអាចកំណត់ថា Roles "Developer" អាចបិទ Bugs បានដោយមិនចាំបាច់កំណត់សិទ្ធិសម្រាប់ Lisa និង Peter ម្តងម្នាក់ៗនោះទេ។
`,
  examples: [
    `### ឧទាហរណ៍: ការគ្រប់គ្រង Users និង Roles

**ស្ថានភាព:** ក្រុមហ៊ុនបានជួល Developer ថ្មីឈ្មោះ **Sara** ។

**ជំហាន:**
1. **ចូលទៅកាន់ User Management:** ក្នុង Jira Settings ចុច "User Management"។
2. **អញ្ជើញ User ថ្មី:** ចុច "Invite Users" ហើយបញ្ចូល Email របស់ Sara ។
3. **បន្ថែមទៅ Group:** បន្ថែម Sara ទៅក្នុង Group "Development Team" ។
4. **ចាត់តាំង Role:** នៅក្នុង Project របស់អ្នក ចូលទៅកាន់ "Users and Roles" ហើយបន្ថែម Sara ទៅក្នុង Roles "Developer" ។
`,
  ],
  quiz: [
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Group និង User?',
      options: ['Group គឺជាបុគ្គលម្នាក់ៗ ចំណែក User គឺជាសំណុំនៃបុគ្គល', 'Group គឺជាសំណុំនៃ Users ចំណែក User គឺជាបុគ្គលម្នាក់ៗ', 'Group គឺសម្រាប់តែ Admins ចំណែក User គឺសម្រាប់តែ Developers', 'មិនមានភាពខុសគ្នាទេ'],
      correct: 1,
      explanation: 'Group គឺជាសំណុំនៃ Users ដែលធ្វើឱ្យការគ្រប់គ្រងសិទ្ធិមានភាពងាយស្រួល។'
    },
    {
      question: 'តើ Roles "Viewer" អាចធ្វើអ្វីបានខ្លះ?',
      options: ['អាចកែប្រែ Issues បាន', 'អាចបង្កើត Issues ថ្មីបាន', 'អាចមើល Issues បានតែមិនអាចកែប្រែបាន', 'អាចលុប Issues បាន'],
      correct: 2,
      explanation: 'Roles "Viewer" អាចមើល Issues បានប៉ុណ្ណោះ វាមិនមានសិទ្ធិកែប្រែឬបង្កើតថ្មីទេ។'
    },
    {
      question: 'តើ Roles "Project Administrator" ខុសពី Roles "Administrator" ត្រង់ណា?',
      options: ['Project Admin អាចគ្រប់គ្រងតែ Project របស់ខ្លួន ចំណែក Admin អាចគ្រប់គ្រង Jira ទាំងមូល', 'Project Admin អាចកែប្រែតែ Issues ចំណែក Admin អាចគ្រប់គ្រង Project', 'Project Admin មិនអាចបង្កើត Project បានទេ ចំណែក Admin អាច', 'មិនមានភាពខុសគ្នាទេ'],
      correct: 0,
      explanation: 'Project Administrator អាចគ្រប់គ្រងតែការកំណត់ Project របស់ខ្លួន ចំណែក Administrator អាចគ្រប់គ្រង Jira ទាំងមូល។'
    },
    {
      question: 'តើការប្រើប្រាស់ Roles ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះ?',
      options: ['ធ្វើឱ្យការងារយឺត', 'ជួយការពារព័ត៌មានរសើប និងធ្វើឱ្យការគ្រប់គ្រងសិទ្ធិមានភាពងាយស្រួល', 'ជួយអ្នកសរសេរកូដ', 'ជួយបង្កើត Dashboard'],
      correct: 1,
      explanation: 'Roles ជួយការពារទិន្នន័យគម្រោង និងធ្វើឱ្យការគ្រប់គ្រងសិទ្ធិមានលក្ខណៈស្តង់ដារ។'
    },
    {
      question: 'តើអ្នកអាចចាត់តាំង Roles ទៅ Groups បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែសម្រាប់ Group ធំៗ', 'បានតែជាមួយ Jira Premium'],
      correct: 0,
      explanation: 'អ្នកអាចចាត់តាំង Roles ទៅ Group ដើម្បីឱ្យ Users ទាំងអស់នៅក្នុង Group នោះទទួលបានសិទ្ធិដូចគ្នា។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. ចូលទៅកាន់ Project Settings របស់ Project របស់អ្នក។
2. ចូលទៅកាន់ផ្នែក **Users and Roles**។
3. ចាត់តាំងខ្លួនអ្នកទៅ Roles "Project Administrator" (ប្រសិនបើអ្នកមិនទាន់មាន)។
4. បន្ថែមមិត្តរួមការងារម្នាក់ (ប្រសិនបើអាច) ឬគ្រាន់តែពិពណ៌នាពីរបៀបដែលអ្នកនឹងធ្វើ ហើយចាត់តាំងពួកគេទៅ Roles "Viewer"។
5. ពិពណ៌នាពីភាពខុសគ្នានៃសិទ្ធិរវាង Roles "Project Administrator" និង "Viewer"។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. ចូលទៅកាន់ Jira Project របស់អ្នក ហើយចុច "Project Settings" នៅលើ Sidebar ។
2. នៅក្នុង Sidebar របស់ Project Settings ចុច "Users and Roles" ។
3. ស្វែងរកឈ្មោះរបស់អ្នកហើយផ្លាស់ប្តូរ Roles ទៅ "Project Administrator" ។
4. ចុច "Add users, groups, or roles" ហើយបញ្ចូល Email របស់មិត្តរួមការងាររបស់អ្នក។ បន្ទាប់មកចាត់តាំង Roles "Viewer" ឱ្យពួកគេ។
5. Roles "Project Administrator" អាចកែប្រែការកំណត់ Project បានដូចជា Users and Roles, Issue Types, និង Workflows ចំណែក Roles "Viewer" អាចមើលបានតែ Issues ប៉ុណ្ណោះ ហើយមិនមានសិទ្ធិកែប្រែឬគ្រប់គ្រងការកំណត់ Project ទេ។
    `
  }
};

export default JiraLesson5_1Content;