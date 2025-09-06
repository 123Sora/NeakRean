import type { LessonContent } from '../../../../types/LessonTypes';

const SEMLesson5_2Content: LessonContent = {
  title: 'ការធ្វើតេស្តនិងការផ្ទៀងផ្ទាត់ Software',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃការធ្វើតេស្ត Software',
    'ស្គាល់ពីប្រភេទការធ្វើតេស្តផ្សេងៗដូចជា Black Box និង White Box',
    'រៀនពីកម្រិតនៃការធ្វើតេស្ត (Levels of Testing)',
    'យល់ពីរបៀបបង្កើត Test Cases និង Test Plans',
    'អនុវត្តការធ្វើតេស្តសម្រាប់មុខងារ Software'
  ],
  content: `
# ការធ្វើតេស្តនិងការផ្ទៀងផ្ទាត់ Software 🧪

---

**Software Testing** គឺជាដំណើរការនៃការវាយតម្លៃ Software ដើម្បីរកកំហុស (defects) និងធានាថាវាដំណើរការតាមតម្រូវការដែលបានកំណត់។ ការធ្វើតេស្តល្អអាចបង្កើនទំនុកចិត្តលើគុណភាពផលិតផល។

---

## 1. គោលគំនិតនៃការធ្វើតេស្ត

- **Verification:** ជាដំណើរការនៃការសួរថា "តើយើងកំពុងបង្កើតផលិតផលបានត្រឹមត្រូវឬទេ?" (Are we building the product right?)។ វាផ្តោតលើការត្រួតពិនិត្យការរចនា, កូដ, និងឯកសារ។
- **Validation:** ជាដំណើរការនៃការសួរថា "តើយើងកំពុងបង្កើតផលិតផលដែលត្រឹមត្រូវឬទេ?" (Are we building the right product?)។ វាផ្តោតលើការធានាថា Software បំពេញតាមតម្រូវការពិតប្រាកដរបស់អតិថិជន។

**Verification គឺអំពីការត្រឹមត្រូវរបស់ដំណើរការ ចំណែក Validation គឺអំពីការបំពេញតម្រូវការពិតប្រាកដ។**

---

## 2. ប្រភេទនៃការធ្វើតេស្ត (Testing Types)

- **Black Box Testing:** ធ្វើតេស្តដោយមិនដឹងពីកូដខាងក្នុង។ ផ្តោតលើមុខងារនិងលទ្ធផល។ ឧទាហរណ៍: ការចុចប៊ូតុងមួយហើយមើលថាតើលទ្ធផលត្រឹមត្រូវឬអត់។
- **White Box Testing:** ធ្វើតេស្តដោយដឹងពីកូដខាងក្នុង។ ផ្តោតលើរចនាសម្ព័ន្ធកូដនិងដំណើរការ។ ឧទាហរណ៍: ការធ្វើតេស្តរាល់លក្ខខណ្ឌនៅក្នុង Statement។

---

## 3. កម្រិតនៃការធ្វើតេស្ត (Levels of Testing)

- **Unit Testing:** ធ្វើតេស្តផ្នែកតូចបំផុតនៃកូដ (ដូចជា Function មួយ) ដោយឡែកពីគ្នា។
- **Integration Testing:** ធ្វើតេស្តការរួមបញ្ចូលគ្នារវាងផ្នែកផ្សេងៗនៃ Software (ឧទាហរណ៍: ការរួមបញ្ចូលគ្នារវាង Database និង Server)។
- **System Testing:** ធ្វើតេស្ត Software ទាំងមូលជាប្រព័ន្ធមួយ។
- **Acceptance Testing:** ធ្វើតេស្តដោយអតិថិជនដើម្បីផ្ទៀងផ្ទាត់ថាតើ Software ទទួលយកបានឬអត់។

---

## 4. Test Case និង Test Plan

- **Test Plan:** ឯកសារដែលពិពណ៌នាអំពីយុទ្ធសាស្ត្រ, ធនធាន, និងកាលវិភាគសម្រាប់ការធ្វើតេស្ត។
- **Test Case:** ឯកសារដែលពិពណ៌នាជំហានជាក់លាក់ដើម្បីធ្វើតេស្តមុខងារមួយ។
   - **លក្ខណៈពិសេស:** ត្រូវមានលក្ខខណ្ឌ (Precondition), ជំហាន (Steps), និងលទ្ធផលដែលរំពឹងទុក (Expected Result)។

`,
  examples: [
    `### ឧទាហរណ៍: ការបង្កើត Test Case

**Test Case សម្រាប់មុខងារ "Log In"**

- **Test Case ID:** TC-001
- **មុខងារ:** User Authentication
- **Test Case Title:** Successful Login
- **Precondition:** User មានគណនីដែលបានចុះឈ្មោះត្រឹមត្រូវ។
- **ជំហាន:**
   1. ចូលទៅកាន់ទំព័រ Login ។
   2. បញ្ចូល username "user@test.com" ។
   3. បញ្ចូល password "password123" ។
   4. ចុចប៊ូតុង "Login" ។
- **លទ្ធផលរំពឹងទុក:** User ចូលក្នុងប្រព័ន្ធដោយជោគជ័យនិងត្រូវបានបញ្ជូនទៅកាន់ទំព័រ Dashboard ។
- **លទ្ធផលពិតប្រាកដ:** [Empty - សម្រាប់បំពេញក្រោយ]
`
  ],
  quiz: [
    {
      question: 'តើ Verification ផ្តោតលើអ្វី?',
      options: ['ការសាងសង់ផលិតផលត្រឹមត្រូវ', 'ការសាងសង់ផលិតផលដែលត្រឹមត្រូវ', 'ការរកកំហុស', 'ការគ្រប់គ្រងហិរញ្ញវត្ថុ'],
      correct: 0,
      explanation: 'Verification ផ្តោតលើការសាងសង់ផលិតផលបានត្រឹមត្រូវតាមការរចនា។'
    },
    {
      question: 'តើអ្វីជាប្រភេទនៃការធ្វើតេស្តដែលធ្វើឡើងដោយមិនដឹងកូដខាងក្នុង?',
      options: ['White Box Testing', 'Black Box Testing', 'Unit Testing', 'Acceptance Testing'],
      correct: 1,
      explanation: 'Black Box Testing ធ្វើតេស្តដោយផ្អែកលើមុខងារខាងក្រៅ។'
    },
    {
      question: 'តើកម្រិតនៃការធ្វើតេស្តណាដែលធ្វើតេស្តផ្នែកតូចបំផុតនៃកូដ?',
      options: ['Unit Testing', 'System Testing', 'Acceptance Testing', 'Integration Testing'],
      correct: 0,
      explanation: 'Unit Testing ធ្វើតេស្តផ្នែកតូចៗ (Units) នៃកូដ។'
    },
    {
      question: 'តើ Test Case គួរមានធាតុផ្សំសំខាន់ៗអ្វីខ្លះ?',
      options: ['ឈ្មោះ, អាសយដ្ឋាន, លេខទូរស័ព្ទ', 'Precondition, ជំហាន, លទ្ធផលដែលរំពឹងទុក', 'ការរចនា, ពណ៌, រូបភាព', 'តម្លៃ, ចំណាយ, ហានិភ័យ'],
      correct: 1,
      explanation: 'Test Case ត្រូវមាន Precondition, Steps, និង Expected Result។'
    },
    {
      question: 'តើ Validation ផ្តោតលើអ្វី?',
      options: ['ការជួសជុលកំហុស', 'ការសាងសង់ផលិតផលដែលត្រឹមត្រូវតាមតម្រូវការ', 'ការសាងសង់ផលិតផលបានត្រឹមត្រូវ', 'ការសរសេរកូដ'],
      correct: 1,
      explanation: 'Validation ផ្តោតលើការធានាថាផលិតផលបំពេញតាមតម្រូវការពិតប្រាកដរបស់អតិថិជន។'
    },
    {
      question: 'តើកម្រិតនៃការធ្វើតេស្តណាដែលត្រូវបានធ្វើឡើងដោយអតិថិជន?',
      options: ['Unit Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing'],
      correct: 3,
      explanation: 'Acceptance Testing គឺជាការធ្វើតេស្តចុងក្រោយដោយអតិថិជន។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងសំខាន់នៃ Software Testing?',
      options: ['ដើម្បីបង្កើនកំហុស', 'ដើម្បីរកកំហុសនិងធានាគុណភាព', 'ដើម្បីចំណាយពេលយូរ', 'ដើម្បីគ្រប់គ្រងហិរញ្ញវត្ថុ'],
      correct: 1,
      explanation: 'គោលបំណងសំខាន់គឺដើម្បីរកកំហុសនិងបង្កើនទំនុកចិត្តលើគុណភាព Software ។'
    },
    {
      question: 'តើការធ្វើតេស្តប្រភេទណាដែលពិនិត្យមើលរចនាសម្ព័ន្ធកូដ?',
      options: ['Black Box', 'White Box', 'Integration', 'System'],
      correct: 1,
      explanation: 'White Box Testing ផ្តោតលើរចនាសម្ព័ន្ធខាងក្នុងនៃកូដ។'
    },
    {
      question: 'តើ Test Plan គឺជាអ្វី?',
      options: ['ការរចនាក្រាហ្វិក', 'ឯកសារយុទ្ធសាស្ត្រសម្រាប់ការធ្វើតេស្ត', 'បញ្ជីនៃកំហុស', 'ឯកសារលក់'],
      correct: 1,
      explanation: 'Test Plan គឺជាឯកសារដែលពិពណ៌នាអំពីផែនការនិងយុទ្ធសាស្ត្រធ្វើតេស្ត។'
    }
  ],
  lab: {
    task: `
**សេណារីយ៉ូ:** អ្នកជាអ្នកធ្វើតេស្តសម្រាប់ Website Online Shopping ។ អ្នកត្រូវសរសេរ Test Case សម្រាប់មុខងារ "Add to Cart" ។

**តម្រូវការ:**
1.  បង្កើត Test Case មួយសម្រាប់សេណារីយ៉ូដែលជោគជ័យ។
2.  បង្កើត Test Case មួយសម្រាប់សេណារីយ៉ូដែលបរាជ័យ (ឧទាហរណ៍: មិនអាចបន្ថែមបាន)។
    `,
    solution: `
**ការបង្កើត Test Case សម្រាប់មុខងារ "Add to Cart"**

**១. Test Case សម្រាប់សេណារីយ៉ូជោគជ័យ:**
   - **Test Case ID:** ATC-001
   - **មុខងារ:** Cart Management
   - **Test Case Title:** Add a product to cart successfully
   - **Precondition:** User បានចូលក្នុងប្រព័ន្ធហើយមានផលិតផលក្នុងស្តុក។
   - **ជំហាន:**
     1.  ចូលទៅទំព័រផលិតផល។
     2.  ជ្រើសរើសចំនួនផលិតផល។
     3.  ចុចប៊ូតុង "Add to Cart"។
   - **លទ្ធផលរំពឹងទុក:** ផលិតផលត្រូវបានបន្ថែមទៅក្នុង Cart ហើយចំនួនផលិតផលក្នុង Cart បានកើនឡើង។

**២. Test Case សម្រាប់សេណារីយ៉ូបរាជ័យ:**
   - **Test Case ID:** ATC-002
   - **មុខងារ:** Cart Management
   - **Test Case Title:** Add to cart with zero stock
   - **Precondition:** ផលិតផលអស់ពីស្តុក។
   - **ជំហាន:**
     1.  ចូលទៅទំព័រផលិតផលដែលអស់ពីស្តុក។
     2.  ចុចប៊ូតុង "Add to Cart"។
   - **លទ្ធផលរំពឹងទុក:** ប្រព័ន្ធបង្ហាញសារកំហុសថា "ផលិតផលអស់ពីស្តុក" ហើយផលិតផលមិនត្រូវបានបន្ថែមទៅក្នុង Cart ទេ។
`
  }
};

export default SEMLesson5_2Content;