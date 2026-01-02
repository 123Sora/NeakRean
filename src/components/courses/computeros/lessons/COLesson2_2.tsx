import type { LessonContent } from '../../../../types/LessonTypes';

const EventViewerContent: LessonContent = {
  title: 'ការប្រើប្រាស់ Event Viewer និងការដោះស្រាយបញ្ហា Blue Screen',
  objectives: [
    'យល់ពីតួនាទីរបស់ Event Viewer ក្នុងការស្រាវជ្រាវបញ្ហា (Troubleshooting)',
    'ស្គាល់ប្រភេទនៃ Event Levels (Information, Warning, Error, Critical)',
    'ចេះអាន Windows Logs សំខាន់ៗ (Application, System, Security)',
    'ចេះប្រើប្រាស់ Filter ដើម្បីស្វែងរកកំហុសក្នុងម៉ាស៊ីន',
    'យល់ដឹងពីរបៀបដោះស្រាយបញ្ហា Blue Screen (BSOD) តាមរយៈ BugCheck Logs'
  ],
  content: `
# ស្វែងយល់ពី Event Viewer និងការសង្គ្រោះប្រព័ន្ធ 📝🔍

---

រាល់ពេលដែលមានរឿងអ្វីមួយកើតឡើងនៅក្នុង Windows មិនថាជាការ Login ជោគជ័យ ការដំឡើងកម្មវិធី ឬការគាំងម៉ាស៊ីន (System Crash) វាតែងតែបន្សល់ទុកនូវដានសកម្មភាព។ ដានទាំងនោះត្រូវបានកត់ត្រាទុកក្នុង **Event Viewer**។

វាគឺជាឧបករណ៍ដ៏មានឥទ្ធិពលបំផុតសម្រាប់ IT Support ក្នុងការស្វែងរកមូលហេតុពិតនៃបញ្ហាកុំព្យូទ័រ ជាពិសេសនៅពេលម៉ាស៊ីនឡើង **Blue Screen**។

---

## 1. ប្រភេទនៃ Windows Logs សំខាន់ៗ

នៅក្នុង Event Viewer អ្នកនឹងឃើញថតឯកសារធំៗចំនួន ៣ ដែលយើងត្រូវយកចិត្តទុកដាក់៖

* **Application Logs:** សកម្មភាពរបស់កម្មវិធី (ឧទាហរណ៍៖ Chrome គាំង ឬ Photoshop បើកមិនចេញ)។
* **Security Logs:** ត្រួតពិនិត្យការចូលប្រើប្រាស់ប្រព័ន្ធ (ឧទាហរណ៍៖ ការវាយ Password ខុស)។
* **System Logs:** កត់ត្រារាល់ព្រឹត្តិការណ៍របស់ Windows OS និង Hardware (នេះជាកន្លែងរកមើលបញ្ហា Blue Screen)។

---

## 2. កម្រិតនៃព្រឹត្តិការណ៍ (Event Levels)

1.  **Information (ℹ️):** ប្រាប់ឱ្យដឹងថាអ្វីៗដំណើរការធម្មតា។
2.  **Warning (⚠️):** ព្រមានថាអាចនឹងមានបញ្ហានៅពេលក្រោយ (ឧទាហរណ៍៖ Disk ជិតពេញ)។
3.  **Error (❌):** បញ្ហាធ្ងន់ធ្ងរដែលបានកើតឡើង (ឧទាហរណ៍៖ Driver បើកមិនចេញ)។
4.  **Critical (🛑):** បញ្ហាដែលធ្វើឱ្យម៉ាស៊ីនរលត់ ឬ Restart ដោយខ្លួនឯង។

---

## 3. របៀបដោះស្រាយ Blue Screen (BSOD) តាមរយៈ Logs

នៅពេលកុំព្យូទ័រឡើងផ្ទាំងខៀវ (Blue Screen) Windows នឹងបង្កើត Log ពិសេសមួយហៅថា **BugCheck**។

### ក. ការស្វែងរកកូដកំហុស (Error Codes)
ចូលទៅកាន់ **Windows Logs > System** រួចស្វែងរក៖
- **Event ID 41 (Kernel-Power):** បញ្ជាក់ថាម៉ាស៊ីនដាច់ភ្លើង ឬ Restart មិនប្រក្រតី។
- **Event ID 1001 (BugCheck):** នេះជា Log សំខាន់បំផុត! វាផ្តល់នូវ "Stop Code" (ឧទាហរណ៍៖ \`0x000000D1\`) ដែលប្រាប់ពីមូលហេតុពិតនៃ Blue Screen។



### ខ. ការវិភាគ Dump Files
ក្នុង Log ID 1001 អ្នកនឹងឃើញផ្លូវទៅកាន់ File ឈ្មោះ **Memory.dmp** ឬ **Minidump**។ IT Expert ប្រើ File នេះដើម្បីមើលថា តើ Driver មួយណា (ដូចជា \`nvlddmkm.sys\` របស់ Graphics Card) ដែលបង្កឱ្យម៉ាស៊ីនគាំង។

---

## 4. វិធីសាស្ត្រប្រើប្រាស់ Filter ឱ្យមានប្រសិទ្ធភាព
ដើម្បីកុំឱ្យពិបាករុករកក្នុង Logs រាប់ពាន់៖
1. ចុចលើ **Filter Current Log...** ក្នុងផ្ទាំងខាងស្តាំ។
2. ក្នុងប្រអប់ **Event level** ជ្រើសរើសយកតែ **Critical** និង **Error**។
3. ចុច OK នោះអ្នកនឹងឃើញតែបញ្ហាធំៗដែលត្រូវជួសជុល។
`,
  examples: [
    `### ឧទាហរណ៍៖ ការវិភាគ Blue Screen ដោយសារ Driver
**ស្ថានភាព៖** ម៉ាស៊ីនគាំងខៀវពេលកំពុងលេងហ្គេម។
**ជំហាន:**
1. បើក Event Viewer > Windows Logs > System។
2. Filter យក **Error** និង **Critical**។
3. រកមើល **Event ID 1001**។ ក្នុងផ្ទាំង General អ្នកឃើញអត្ថបទ៖ \`The computer has rebooted from a bugcheck... The dump was saved in: C:\\Windows\\MEMORY.DMP\`។
4. មើលកូដកំហុស \`0x00000116\` (Video TDR Failure) -> មានន័យថា Driver ក្រាហ្វិកកាតមានបញ្ហា។
`,
    `### ឧទាហរណ៍៖ ពិនិត្យមើលអ្នកលួចចូលប្រើកុំព្យូទ័រ
**ជំហាន:**
1. ចូលទៅ **Windows Logs > Security**។
2. រកមើល Event ID \`4624\` (Successful Logon) និង \`4625\` (Failed Logon)។
3. ពិនិត្យមើលពេលវេលា ប្រសិនបើមានការ Login នៅម៉ោង ២ យប់ ដែលអ្នកមិនបានប្រើ នោះមានន័យថាមានគេលួចប្រើហើយ។
`
  ],
  quiz: [
    {
      question: 'តើពាក្យបញ្ជា (Command) អ្វីសម្រាប់បើក Event Viewer?',
      options: ['cmd', 'eventvwr', 'taskmgr', 'control'],
      correct: 1,
      explanation: 'eventvwr គឺជាពាក្យកាត់នៃ Event Viewer សម្រាប់ប្រើក្នុងប្រអប់ Run។'
    },
    {
      question: 'ប្រសិនបើកុំព្យូទ័រឡើង Blue Screen តើ Log សំខាន់បំផុតដែលត្រូវរកមើលមាន ID ប៉ុន្មាន?',
      options: ['ID 1001 (BugCheck)', 'ID 4624', 'ID 7036', 'ID 0'],
      correct: 0,
      explanation: 'Event ID 1001 កត់ត្រាព័ត៌មានបច្ចេកទេសអំពីមូលហេតុដែលម៉ាស៊ីនឡើង Blue Screen។'
    },
    {
      question: 'តើ Event ID "41" (Kernel-Power) មានន័យដូចម្តេច?',
      options: ['Update ជោគជ័យ', 'ម៉ាស៊ីនរលត់ភ្លាមៗ ឬ Restart មិនប្រក្រតី', 'កណ្តុរ (Mouse) ខូច', 'Hard Disk ពេញ'],
      correct: 1,
      explanation: 'ID 41 ប្រាប់ថាប្រព័ន្ធបានបិទដោយគ្មានសណ្តាប់ធ្នាប់ (Unexpected Shutdown)។'
    },
    {
      question: 'តើកម្រិត (Level) មួយណាដែលបង្ហាញពីបញ្ហាធ្ងន់ធ្ងរបំផុត?',
      options: ['Information', 'Warning', 'Error', 'Critical'],
      correct: 3,
      explanation: 'Critical គឺជាកម្រិតខ្ពស់បំផុត ដែលជាធម្មតាសំដៅលើការគាំងប្រព័ន្ធទាំងមូល។'
    },
    {
      question: 'តើ File ប្រភេទណាដែល Windows បង្កើតឡើងដើម្បីទុកវិភាគបញ្ហា Blue Screen?',
      options: ['.txt file', '.jpg file', 'Memory Dump (.dmp)', '.exe file'],
      correct: 2,
      explanation: 'Dump files (.dmp) ផ្ទុកទិន្នន័យក្នុង RAM នៅខណៈពេលដែលម៉ាស៊ីនកំពុងគាំង។'
    },
    {
      question: 'ដើម្បីស្វែងរកតែ "Error" ក្នុងចំណោម Logs រាប់ពាន់ តើគេត្រូវប្រើមុខងារអ្វី?',
      options: ['Delete', 'Filter Current Log', 'Copy', 'Properties'],
      correct: 1,
      explanation: 'Filter Current Log អនុញ្ញាតឱ្យយើងសម្រាំងយកតែទិន្នន័យដែលយើងចង់ឃើញ។'
    },
    {
      question: 'តើ Log ប្រភេទណាដែលកត់ត្រារាល់សកម្មភាពរបស់ Driver និង Hardware?',
      options: ['Security Logs', 'Application Logs', 'System Logs', 'Forwarded Events'],
      correct: 2,
      explanation: 'System Logs ទទួលខុសត្រូវលើរាល់ព័ត៌មានពាក់ព័ន្ធនឹង OS និង Hardware។'
    },
    {
      question: 'តើព័ត៌មានអ្វីដែលសំខាន់បំផុតសម្រាប់យកទៅ Search រកដំណោះស្រាយក្នុង Google?',
      options: ['User Name', 'Computer Name', 'Event ID និង Source', 'Log Name'],
      correct: 2,
      explanation: 'ការប្រើ Event ID រួមជាមួយ Source នឹងផ្តល់លទ្ធផលដំណោះស្រាយចំគោលដៅបំផុត។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ដឹងថាតើកម្មវិធី Photoshop ធ្លាប់គាំងឬទេ តើត្រូវមើលក្នុង Log ណា?',
      options: ['Security Log', 'Application Log', 'System Log', 'Setup Log'],
      correct: 1,
      explanation: 'Application Log កត់ត្រារាល់សកម្មភាព និងកំហុសរបស់ Software កម្មវិធី។'
    },
    {
      question: 'តើ Event Viewer អាចជួយលុបមេរោគបានដោយផ្ទាល់ដែរឬទេ?',
      options: ['បាន', 'មិនបាន វាគ្រាន់តែជាអ្នកកត់ត្រា', 'បាន ប្រសិនបើប្រើ Mouse ស្តាំ', 'មិនច្បាស់'],
      correct: 1,
      explanation: 'Event Viewer គឺជា Viewer (អ្នកមើល) មិនមែនជាកម្មវិធីកម្ចាត់មេរោគឡើយ វាគ្រាន់តែជួយប្រាប់ដានមេរោគប៉ុណ្ណោះ។'
    }
  ],
  lab: {
    task: `
អនុវត្តការវិភាគបញ្ហា Blue Screen និងសុខភាពប្រព័ន្ធ។

**តម្រូវការ:**
1. បើកកម្មវិធី **Event Viewer**។
2. ចូលទៅកាន់ **Windows Logs > System** រួចប្រើ **Filter** ដើម្បីបង្ហាញតែ **Critical** និង **Error**។
3. ស្វែងរក **Event ID 41** ឬ **1001** (ប្រសិនបើធ្លាប់មាន Blue Screen)។
4. ចុចលើ Log នោះ រួចមើលក្នុងផ្ទាំង **General** ដើម្បីរកមើលពាក្យ "BugCheck String" ឬផ្លូវទៅកាន់ "Memory Dump"។
5. កត់ត្រាទុកនូវកូដកំហុស (Error Code) រួចសាកល្បងស្វែងរកវាក្នុង Google។
`,
    solution: `
របាយការណ៍គំរូ៖
- បានរកឃើញ Critical Error (ID 41) កើតឡើងនៅម៉ោង 10:30 ព្រឹក។
- មូលហេតុ៖ Power Supply ដាច់ភ្លើង ឬអ្នកប្រើប្រាស់ចុចប៊ូតុងបិទជាប់ (Hard Reset)។
- ការយល់ដឹង៖ Blue Screen មិនមែនជារឿងអាថ៌កំបាំងទេ ប្រសិនបើយើងចេះមើល BugCheck Code ក្នុង Event Viewer។
`
  }
};

export default EventViewerContent;