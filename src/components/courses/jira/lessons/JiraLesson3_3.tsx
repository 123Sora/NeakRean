import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson3_3Content: LessonContent = {
  title: 'ការភ្ជាប់ Issues និង Sub-tasks',
  objectives: [
    'យល់ពីរបៀបដែល Issues អាចភ្ជាប់គ្នាទៅវិញទៅមក',
    'ស្គាល់ពីទំនាក់ទំនងរវាង Parent Issues និង Sub-tasks',
    'រៀនពីរបៀបបង្កើត Sub-tasks សម្រាប់ Issues ធំ',
    'អនុវត្តន៍ការភ្ជាប់ Issues ផ្សេងៗគ្នាដោយប្រើ Link Issues',
    'យល់ពីរបៀបដែលការភ្ជាប់ Issues ជួយដល់ការតាមដានការងារ'
  ],
  content: `
# ការភ្ជាប់ Issues និង Sub-tasks

---

នៅក្នុងគម្រោងពិតប្រាកដ ការងារមិនមែនសុទ្ធតែឯកជននោះទេ។ Issues តែងតែមានទំនាក់ទំនងគ្នាទៅវិញទៅមក។ **Jira** ផ្តល់នូវមុខងារដើម្បីភ្ជាប់ Issues ទាំងនេះដើម្បីជួយអ្នកមើលឃើញពីទំនាក់ទំនង និងភាពអាស្រ័យគ្នា (Dependencies) រវាងការងារ។

---

## 1. Sub-tasks (កិច្ចការរង)

**Sub-task** គឺជាកិច្ចការតូចមួយដែលជាផ្នែកនៃ Parent Issue (ឧទាហរណ៍: Story ឬ Task)។ វាអនុញ្ញាតឱ្យអ្នកបែងចែកការងារធំមួយទៅជាជំហានតូចៗដែលអាចគ្រប់គ្រងបាន។

- **អត្ថប្រយោជន៍:**
  - **ភាពច្បាស់លាស់:** ជួយឱ្យក្រុមយល់ច្បាស់ពីការងារដែលត្រូវធ្វើ។
  - **ការតាមដានងាយស្រួល:** អ្នកអាចតាមដានវឌ្ឍនភាពរបស់ Parent Issue ដោយមើលទៅលើ Sub-tasks របស់វា។
  - **ការចាត់តាំង:** អ្នកអាចចាត់តាំង Sub-task ទៅបុគ្គលផ្សេងៗគ្នា។

---

## 2. ការបង្កើត Sub-tasks

ការបង្កើត Sub-task គឺងាយស្រួល។ នៅលើ Parent Issue page របស់អ្នក អ្នកអាចចុចប៊ូតុង "Create Sub-task"។ ត្រូវប្រាកដថាអ្នកបានបើកដំណើរការ Sub-task Issue type នៅក្នុង Project Settings របស់អ្នក។

---

## 3. Linked Issues (Issues ដែលបានភ្ជាប់)

**Linked Issues** អនុញ្ញាតឱ្យអ្នកភ្ជាប់ Issues ដែលទាក់ទងគ្នាទៅវិញទៅមក ទោះបីជាវាមិនមែនជា Parent-Child Relationship ក៏ដោយ។ Jira ផ្តល់នូវប្រភេទ Link មួយចំនួនដូចជា:
- **"is blocked by" / "blocks":** បង្ហាញថា Issue មួយមិនអាចចាប់ផ្តើមបានទេ រហូតដល់ Issue មួយទៀតត្រូវបានបញ្ចប់។
- **"relates to":** បង្ហាញពីទំនាក់ទំនងទូទៅរវាង Issues។
- **"duplicates" / "is duplicated by":** បង្ហាញថា Issues មួយគឺដូចគ្នាទៅនឹង Issue មួយទៀត។
- **"is caused by" / "causes":** បង្ហាញពីទំនាក់ទំនងរវាង Bugs និងកត្តាដែលបង្កឱ្យមានវា។

---

## 4. ការគ្រប់គ្រង និងការមើល

- **មើល Sub-tasks:** Sub-tasks ទាំងអស់នឹងត្រូវបានបង្ហាញនៅខាងក្នុង Parent Issue page របស់វា។
- **មើល Linked Issues:** Links ទាំងអស់នឹងត្រូវបានបង្ហាញនៅក្នុងផ្នែក "Linked Issues" របស់ Issue page ។ ការចុចលើ Link នឹងនាំអ្នកទៅកាន់ Issue ដែលបានភ្ជាប់នោះ។

ការប្រើប្រាស់ Sub-tasks និង Linked Issues ជួយឱ្យអ្នកគ្រប់គ្នាមានទិដ្ឋភាពពេញលេញនៃការងារ និងយល់ពីភាពអាស្រ័យគ្នាដែលបានលាក់បាំង។
`,
  examples: [
    `### ឧទាហរណ៍: ការប្រើប្រាស់ Sub-tasks និង Linked Issues

**ស្ថានភាព:** ក្រុមអភិវឌ្ឍន៍កំពុងធ្វើការលើ Story មួយ "Implement User Login"។

**ជំហាន:**
**1. បង្កើត Sub-tasks:**
   - **Parent Issue (Story):** "Implement User Login"
   - **Sub-task 1:** "Design login form UI"
   - **Sub-task 2:** "Write backend API for authentication"
   - **Sub-task 3:** "Create database table for users"
   - **Sub-task 4:** "Write unit tests"

**2. ការប្រើប្រាស់ Linked Issues:**
   - បន្ទាប់ពីការធ្វើតេស្ត Bug មួយត្រូវបានរកឃើញ "Login button not working"។
   - ក្រុមបង្កើត Bug Issue ថ្មីសម្រាប់វា។
   - ពួកគេប្រើ "Link Issues" ដើម្បីភ្ជាប់ Bug ទៅនឹង Story "Implement User Login" ដោយប្រើ Link Type **"is caused by"**។ នេះបង្ហាញថា Bug នេះបានកើតឡើងដោយសារ Story នោះ។
`,
  ],
  quiz: [
    {
      question: 'តើ "Sub-task" ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: ['ដើម្បីលុប Issues', 'ដើម្បីបែងចែកការងារធំទៅជាកិច្ចការតូចៗ', 'ដើម្បីភ្ជាប់ទៅ Project ផ្សេង', 'ដើម្បីបង្កើត Report'],
      correct: 1,
      explanation: 'Sub-task ត្រូវបានប្រើដើម្បីបែងចែក Parent Issue មួយទៅជាកិច្ចការតូចៗដែលងាយស្រួលគ្រប់គ្រង។'
    },
    {
      question: 'តើ "Linked Issues" ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះ?',
      options: ['ជួយឱ្យអ្នកសរសេរកូដបានល្អ', 'ជួយឱ្យអ្នកមើលឃើញពីទំនាក់ទំនង និងភាពអាស្រ័យគ្នារវាងការងារ', 'វាបង្កើនល្បឿន Jira', 'វាជាប្រភេទ Issues ថ្មី'],
      correct: 1,
      explanation: 'Linked Issues ជួយអ្នកមើលឃើញពីទំនាក់ទំនង និងភាពអាស្រ័យគ្នារវាង Issues ផ្សេងៗគ្នា។'
    },
    {
      question: 'តើ Link Type "is blocked by" មានន័យដូចម្តេច?',
      options: ['Issue មិនអាចចាប់ផ្តើមបានរហូតដល់ Issue មួយទៀតត្រូវបានបញ្ចប់', 'Issue មួយគឺដូចគ្នាទៅនឹង Issue មួយទៀត', 'Issue មួយបណ្តាលឱ្យមាន Bug មួយទៀត', 'Issue ទាំងពីរមានទំនាក់ទំនងគ្នា'],
      correct: 0,
      explanation: 'Link Type "is blocked by" បង្ហាញថា Issue មួយមិនអាចចាប់ផ្តើមបានរហូតដល់ Issue មួយទៀតត្រូវបានបញ្ចប់។'
    },
    {
      question: 'តើ Sub-task អាចមាន Sub-task ផ្សេងទៀតដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែ Admin ប៉ុណ្ណោះ', 'បានតែសម្រាប់ Bugs'],
      correct: 1,
      explanation: 'Sub-task មិនអាចមាន Sub-task ផ្សេងទៀតបានទេ។'
    },
    {
      question: 'តើអ្នកអាចបង្កើត Sub-task បាននៅកន្លែងណា?',
      options: ['នៅក្នុង Project Settings', 'នៅក្នុង Issue Page របស់ Parent Issue', 'នៅលើ Dashboard', 'នៅក្នុង Report'],
      correct: 1,
      explanation: 'អ្នកអាចបង្កើត Sub-task ដោយផ្ទាល់ពី Issue Page របស់ Parent Issue។'
    },
    {
      question: 'តើ "Parent Issue" នៅក្នុងបរិបទនៃ Sub-task សំដៅលើអ្វី?',
      options: ['Issues ធំដែល Sub-tasks ស្ថិតនៅក្រោម', 'Issues ដែលបានបញ្ចប់', 'Issues ដែលត្រូវបានបង្កើតដំបូង', 'Issues ដែលជាប្រភេទ Bug'],
      correct: 0,
      explanation: 'Parent Issue គឺជា Issues ធំដូចជា Story ឬ Task ដែល Sub-tasks ជាផ្នែកមួយនៃវា។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. ជ្រើសរើស **Story** មួយដែលអ្នកបានបង្កើតក្នុងលំហាត់មុន (ឧទាហរណ៍: "Implement user profile page")។
2. បើក Issue Page របស់ Story នោះ ហើយបង្កើត **Sub-tasks** យ៉ាងតិច 3 សម្រាប់វា (ឧទាហរណ៍: "Design profile page UI", "Create profile backend API", "Write test cases")។
3. ត្រឡប់ទៅ Board វិញ ហើយពិនិត្យមើលថាតើ Sub-tasks ទាំងនោះបង្ហាញនៅក្នុង Parent Issue របស់អ្នកដោយរបៀបណា។
4. នៅក្នុង Issue Page របស់ Story នោះ ចុច "Link Issues" ហើយភ្ជាប់វាទៅ Bug ណាមួយដែលទាក់ទងដោយប្រើ Link Type "is blocked by"។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. ចូលទៅកាន់ Scrum Board របស់អ្នក ហើយជ្រើសរើស Story មួយ។
2. នៅលើ Issue Page របស់ Story នោះ ចុចប៊ូតុង "Create sub-task" ។ បំពេញព័ត៌មានសម្រាប់ Sub-task នីមួយៗហើយចុច "Create"។
3. នៅលើ Board របស់អ្នក អ្នកនឹងឃើញ Sub-tasks ទាំងនោះបង្ហាញនៅក្រោម Parent Issue ។ អ្នកអាចមើលវឌ្ឍនភាពរបស់ Sub-tasks នីមួយៗដោយឯករាជ្យ។
4. នៅលើ Issue Page របស់ Story នោះ ចូលទៅផ្នែក "Linked Issues"។ ចុច "Link" ហើយជ្រើសរើស Link Type "is blocked by" ហើយស្វែងរក Bug Issue ដែលអ្នកចង់ភ្ជាប់។ ចុច "Link" ដើម្បីបញ្ចប់។
    `
  }
};

export default JiraLesson3_3Content;