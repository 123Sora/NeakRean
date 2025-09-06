import type { LessonContent } from '../../../../types/LessonTypes';

const JiraLesson2_3Content: LessonContent = {
  title: 'ការបង្កើត និងគ្រប់គ្រង Sprints',
  objectives: [
    'រៀនពីរបៀបបង្កើត Sprint ថ្មី',
    'យល់ពីរបៀបកំណត់គោលដៅ (Goal) សម្រាប់ Sprint',
    'ស្គាល់ពីរបៀបបន្ថែម និងដក Issues ចេញពី Sprint',
    'យល់ពីដំណើរការនៃការបញ្ចប់ Sprint (Completing a Sprint)',
    'រៀនពីរបៀបតាមដានវឌ្ឍនភាព Sprint ដោយប្រើ Reports'
  ],
  content: `
# ការបង្កើត និងគ្រប់គ្រង Sprints

---

**Sprints** គឺជាបេះដូងនៃ **Scrum**។ វាជាពេលវេលាដែលក្រុមធ្វើការដើម្បីបញ្ចប់ការងារដែលបានប្តេជ្ញាចិត្ត។ ការបង្កើត និងគ្រប់គ្រង Sprints ឱ្យមានប្រសិទ្ធភាពនៅក្នុង **Jira** គឺចាំបាច់ដើម្បីធានាបាននូវការដឹកជញ្ជូនផលិតផលជាប្រចាំ។

---

## 1. ការបង្កើត Sprint ថ្មី

មុនពេលអ្នកចាប់ផ្តើម Sprint ថ្មី អ្នកត្រូវ៖
- **រៀបចំ Backlog:** ត្រូវប្រាកដថា Issues នៅក្នុង Backlog ត្រូវបានរៀបចំតាមលំដាប់លំដោយ។
- **បង្កើត Sprint:** នៅលើ Backlog page របស់ Jira អ្នកនឹងឃើញប៊ូតុង "Create Sprint" ។ ចុចលើវាដើម្បីបង្កើត Sprint ថ្មី។
- **កំណត់ Goal:** បន្ថែម **Sprint Goal** ខ្លីៗដែលបង្ហាញពីគោលបំណងរបស់ Sprint នេះ (ឧទាហរណ៍: "Enable users to create accounts")។

---

## 2. Sprint Planning

បន្ទាប់ពីបង្កើត Sprint ហើយ ក្រុមនឹងធ្វើការ **Sprint Planning** ដើម្បី៖
- **ជ្រើសរើស Issues:** អូស Issues ពី Backlog ចូលទៅក្នុង Sprint ដែលបានបង្កើត។
- **ប៉ាន់ស្មានការងារ:** ក្រុមនឹងពិភាក្សា និងប៉ាន់ស្មានពីពេលវេលា ឬការខិតខំប្រឹងប្រែងដែលត្រូវចំណាយលើ Issues នីមួយៗ (ឧទាហរណ៍: ប្រើ Story Points)។
- **ចាប់ផ្តើម Sprint:** នៅពេលដែលក្រុមបានជ្រើសរើស Issues ទាំងអស់ហើយ ចុចប៊ូតុង "Start Sprint"។

---

## 3. ដំណើរការ Sprint

នៅពេលដែល Sprint បានចាប់ផ្តើម ក្រុមនឹងធ្វើការលើ Issues នៅលើ **Active Sprint Board** ។
- **Daily Scrum:** ក្រុមនឹងជួបគ្នាប្រចាំថ្ងៃដើម្បីពិភាក្សាអំពីវឌ្ឍនភាព។
- **ផ្លាស់ប្តូរស្ថានភាព:** នៅពេលដែលការងារមានវឌ្ឍនភាព ក្រុមនឹងអូស Issues ពីជួរឈរមួយទៅជួរឈរមួយទៀត (ឧទាហរណ៍: "In Progress" ទៅ "Done")។
- **ការបន្ថែម/ដក Issues:** តាមគោលការណ៍ Scrum ការបន្ថែម ឬដក Issues ចេញពី Active Sprint មិនត្រូវបានណែនាំទេ លុះត្រាតែមានហេតុផលចាំបាច់។

---

## 4. ការបញ្ចប់ Sprint (Completing a Sprint)

នៅចុងបញ្ចប់នៃ Sprint ក្រុមនឹងធ្វើការ **Sprint Review** និង **Sprint Retrospective**។ បន្ទាប់មកអ្នកអាចចុច "Complete Sprint" នៅជ្រុងខាងលើនៃ Board។
- **Issues ដែលបានបញ្ចប់:** Issues ទាំងអស់នៅក្នុងជួរឈរ "Done" នឹងត្រូវបានកត់ត្រាថាបានបញ្ចប់នៅក្នុង Sprint នោះ។
- **Issues ដែលមិនបានបញ្ចប់:** Issues ដែលនៅសល់នឹងត្រូវបានផ្លាស់ប្តូរទៅកាន់ Backlog វិញដោយស្វ័យប្រវត្តិ ឬអាចផ្លាស់ប្តូរទៅ Sprint ថ្មី។

---
`,
  examples: [
    `### ឧទាហរណ៍: ការគ្រប់គ្រង Sprint សម្រាប់ក្រុម Software

**1. ការបង្កើត Sprint Goal:**
   - **Sprint Goal:** "បញ្ចប់មុខងារ Profile Page សម្រាប់អ្នកប្រើប្រាស់"។
   - ក្រុមសម្រេចចិត្តធ្វើការលើ Issues ដែលទាក់ទងនឹង Profile Page ដូចជា "User profile creation", "Profile picture upload", និង "Display user information"។

**2. ការតាមដានវឌ្ឍនភាព:**
   - ក្នុងអំឡុងពេល Sprint ក្រុមមើលរបាយការណ៍ **Burndown Chart** នៅក្នុង Jira ។
   - Burndown Chart បង្ហាញពីការងារដែលនៅសល់ធៀបនឹងពេលវេលាដែលបានបែងចែកសម្រាប់ Sprint ។ ប្រសិនបើក្រាហ្វមិនធ្លាក់ចុះ នោះមានន័យថាការងារមានបញ្ហា។

**3. ការបញ្ចប់ Sprint:**
   - ក្រុមបានបញ្ចប់ Issues ទាំងអស់លើកលែងតែ "Profile picture upload"។
   - នៅពេលពួកគេចុច "Complete Sprint" នោះ Issue "Profile picture upload" នឹងត្រឡប់ទៅ Backlog វិញដោយស្វ័យប្រវត្តិ។
`,
  ],
  quiz: [
    {
      question: 'តើអ្វីជាជំហានដំបូងមុននឹងចាប់ផ្តើម Sprint ថ្មី?',
      options: ['ចាប់ផ្តើមធ្វើការភ្លាមៗ', 'ធ្វើការ Sprint Review', 'រៀបចំ Backlog ឱ្យមានរបៀបរៀបរយ', 'បង្កើត Issues ថ្មី'],
      correct: 2,
      explanation: 'ជំហានដំបូងគឺត្រូវរៀបចំ Backlog របស់អ្នកឱ្យមានរបៀបរៀបរយ ដើម្បីងាយស្រួលក្នុងការជ្រើសរើស Issues ចូល Sprint។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម ឬដក Issues ចេញពី Active Sprint បានទេ?',
      options: ['មិនអាចទាល់តែសោះ', 'អាច តែមិនត្រូវបានណែនាំទេ', 'អាចបានតែ Scrum Master', 'អាចបានតែនៅចុងបញ្ចប់នៃ Sprint'],
      correct: 1,
      explanation: 'តាមគោលការណ៍ Scrum ការផ្លាស់ប្តូរ Issues ក្នុង Sprint មិនត្រូវបានណែនាំទេ លុះត្រាតែមានហេតុផលចាំបាច់។'
    },
    {
      question: 'តើ Burndown Chart នៅក្នុង Jira ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: ['ដើម្បីតាមដានចំនួន Bug', 'ដើម្បីតាមដានពេលវេលាដែលនៅសល់ធៀបនឹងការងារ', 'ដើម្បីតាមដានអ្នកប្រើប្រាស់', 'ដើម្បីតាមដានចំនួន Comments'],
      correct: 1,
      explanation: 'Burndown Chart ជួយក្រុមតាមដានវឌ្ឍនភាពរបស់ពួកគេដោយបង្ហាញពីការងារដែលនៅសល់ក្នុង Sprint ។'
    },
    {
      question: 'តើ Issues ដែលមិនបានបញ្ចប់នៅក្នុង Sprint នឹងត្រូវទៅកន្លែងណា?',
      options: ['ត្រូវលុបចោល', 'ត្រូវនៅដដែលក្នុង Sprint ដែលបានបញ្ចប់', 'ត្រូវបានផ្លាស់ប្តូរទៅ Backlog វិញដោយស្វ័យប្រវត្តិ', 'ត្រូវបង្កើតជា Bug ថ្មី'],
      correct: 2,
      explanation: 'Issues ដែលមិនបានបញ្ចប់នៅក្នុង Sprint នឹងត្រូវបានផ្លាស់ប្តូរទៅ Backlog វិញដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Sprint Review និង Sprint Retrospective?',
      options: ['Review គឺបង្ហាញការងារចំណែក Retrospective គឺពិភាក្សាអំពីដំណើរការ', 'Review សម្រាប់តែ Product Owner ចំណែក Retrospective សម្រាប់តែក្រុម', 'Review គឺធ្វើឡើងនៅពាក់កណ្តាល Sprint ចំណែក Retrospective ធ្វើនៅចុងបញ្ចប់', 'ទាំងពីរមានន័យដូចគ្នា'],
      correct: 0,
      explanation: 'Sprint Review គឺជាការបង្ហាញការងារដែលបានបញ្ចប់ ចំណែក Sprint Retrospective គឺជាការពិភាក្សាដើម្បីកែលម្អដំណើរការការងាររបស់ក្រុម។'
    }
  ],
  lab: {
    task: `
**លំហាត់អនុវត្តន៍៖**

1. ចូលទៅកាន់ Scrum Project របស់អ្នក។
2. បើករបាយការណ៍ **Burndown Chart** ហើយពិនិត្យមើលវា។
3. ត្រឡប់ទៅ Board វិញ ហើយផ្លាស់ប្តូរ Issues មួយចំនួនពី "In Progress" ទៅ "Done"។
4. ត្រឡប់ទៅ Burndown Chart វិញ។ តើអ្នកឃើញការផ្លាស់ប្តូរអ្វីខ្លះ?
5. ពិពណ៌នាពីរបៀបដែល Burndown Chart ជួយអ្នកគ្រប់គ្រង Sprint ។
    `,
    solution: `
**ដំណោះស្រាយ:**

1. នៅក្នុង Jira Project របស់អ្នក ចូលទៅកាន់ផ្នែក "Reports" នៅលើ Sidebar ។
2. ចុចលើ "Burndown Chart" ។ អ្នកនឹងឃើញក្រាហ្វបង្ហាញពីវឌ្ឍនភាពបច្ចុប្បន្ន។
3. ត្រឡប់ទៅ Active Sprint Board ហើយអូស Issues ពី "In Progress" ទៅ "Done" ។
4. ពេលអ្នកត្រឡប់ទៅ Burndown Chart វិញ អ្នកនឹងឃើញថាបន្ទាត់ "Remaining Values" បានធ្លាក់ចុះ។ នេះមានន័យថាការងារនៅសល់មានតិចជាងមុន។
5. Burndown Chart ជួយអ្នកគ្រប់គ្រង Sprint ដោយបង្ហាញទិដ្ឋភាពមើលឃើញអំពីវឌ្ឍនភាពការងារដែលនៅសល់ និងជួយក្រុមយល់ថាតើពួកគេអាចបញ្ចប់ការងារក្នុងពេលវេលាដែលបានកំណត់បានដែរឬទេ។
    `
  }
};

export default JiraLesson2_3Content;