import type { LessonContent } from '../../../../types/LessonTypes';

const ProcessManagementContent: LessonContent = {
  title: 'ការគ្រប់គ្រងដំណើរការប្រព័ន្ធ (Process Management)',
  objectives: [
    'យល់ពីភាពខុសគ្នារវាង Program និង Process',
    'ស្គាល់ពីស្ថានភាពនៃ Process (Running, Sleeping, Stopped, Zombie)',
    'ចេះប្រើប្រាស់ Task Manager និង Resource Monitor ក្នុង Windows',
    'ស្ទាត់ជំនាញក្នុងការប្រើ Command \`top\`, \`htop\` និង \`ps\` ក្នុង Linux',
    'ចេះរបៀបបញ្ឈប់ Process (Kill) ដែលបង្កបញ្ហា'
  ],
  content: `
# តើអ្វីទៅជា Process? ការគ្រប់គ្រងដង្ហើមរបស់ OS 🧠⚙️

---

នៅពេលអ្នកដំឡើង Chrome លើកុំព្យូទ័រ វាគឺជា **Program** (សំណុំកូដដែលដេកលក់លើ Disk)។ ប៉ុន្តែនៅពេលអ្នក Double-click បើកវា វានឹងក្លាយទៅជា **Process** (កម្មវិធីដែលកំពុងមានជីវិត និងកំពុងប្រើប្រាស់ CPU/RAM)។

---

## 1. ស្ថានភាពរបស់ Process (Process States)

Process នីមួយៗមិនមែនធ្វើការរហូតនោះទេ ខ្លះកំពុងដើរ និងខ្លះកំពុងរង់ចាំ៖
* **Running:** កំពុងប្រើប្រាស់ CPU ដើម្បីគណនា។
* **Sleeping / Waiting:** កំពុងរង់ចាំទិន្នន័យ (ដូចជារង់ចាំអ្នកចុច Keyboard)។
* **Stopped:** ត្រូវបានផ្អាកជាបណ្តោះអាសន្ន។
* **Zombie:** Process ដែលស្លាប់ហើយ តែនៅសល់ឈ្មោះក្នុងបញ្ជី (បង្កដោយកំហុស Software)។



---

## 2. ការគ្រប់គ្រងក្នុង Windows (GUI Tools)

សម្រាប់អ្នកប្រើប្រាស់ទូទៅ ឧបករណ៍ដែលល្អបំផុតគឺ៖
1.  **Task Manager (Ctrl + Shift + Esc):** មើលការប្រើប្រាស់ធនធានសរុប និងបិទកម្មវិធីដែលគាំង (End Task)។
2.  **Resource Monitor:** មើលព័ត៌មានលម្អិតអំពីការប្រើប្រាស់ Disk និង Network របស់ Process នីមួយៗ។

---

## 3. ការគ្រប់គ្រងក្នុង Linux (CLI Tools)

នៅក្នុង Server ដែលគ្មាន Mouse គេប្រើ Command ដូចខាងក្រោម៖
* **ps aux:** បង្ហាញបញ្ជី Process ទាំងអស់ដែលកំពុងដើរក្នុងម៉ាស៊ីន។
* **top:** បង្ហាញបញ្ជី Process បែប Real-time (ដូច Task Manager)។
* **htop:** កំណែអាប់ដេតរបស់ top ដែលមានពណ៌ និងងាយស្រួលមើល (ត្រូវដំឡើងបន្ថែម)។



---

## 4. ការបញ្ឈប់ Process ដែលមានបញ្ហា (Killing Processes)

ពេលខ្លះកម្មវិធីមិនព្រមបិទតាមសម្រួល យើងត្រូវប្រើ "វិធានការក្តៅ"៖
* **Windows:** ចុចស្តាំលើកម្មវិធីក្នុង Task Manager > **End Task**។
* **Linux:** ប្រើ Command \`kill\` តាមដោយលេខសម្គាល់ (PID)។
    * ឧទាហរណ៍៖ \`kill -9 1234\` (-9 គឺបង្ខំឱ្យបិទភ្លាមៗ)។

> 💡 **PID (Process ID):** គឺជាលេខអត្តសញ្ញាណប័ណ្ណរបស់ Process នីមួយៗដែល OS ផ្តល់ឱ្យ។
`,
  examples: [
    `### ឧទាហរណ៍៖ ការស្វែងរកកម្មវិធីដែលស៊ី RAM ខ្លាំង

**ស្ថានភាព៖** កុំព្យូទ័រដើរយឺតខ្លាំង ហើយអ្នកចង់ដឹងថាមកពីកម្មវិធីណា។

**ជំហាន (Linux):**
1. វាយ Command \`top\` ឬ \`htop\`។
2. ចុចអក្សរ \`M\` (ក្នុង top) ដើម្បីតម្រៀបតាមការប្រើប្រាស់ Memory។
3. មើលឈ្មោះកម្មវិធីនៅខាងលើគេបង្អស់។
`,
    `### ឧទាហរណ៍៖ ការបិទកម្មវិធីដែលគាំងតាមរយៈ Command Line

**ជំហាន (Windows PowerShell):**
1. ស្វែងរក PID របស់កម្មវិធី៖ \`Get-Process\`
2. ប្រសិនបើ Notepad គាំង វាយ៖ \`Stop-Process -Name "Notepad" -Force\`
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Program និង Process?',
      options: [
        'Program ជាកូដដែលផ្ទុកលើ Disk, Process ជាកម្មវិធីដែលកំពុងដើរក្នុង RAM',
        'Program លឿនជាង Process',
        'Process ជាកូដដែលផ្ទុកលើ Disk, Program ជាកម្មវិធីដែលកំពុងដើរ',
        'គ្មានអ្វីខុសគ្នាទេ'
      ],
      correct: 0,
      explanation: 'Program គឺជារូបរាងអសកម្ម (Passive), Process គឺជារូបរាងសកម្ម (Active)។'
    },
    {
      question: 'តើលេខ "PID" តំណាងឱ្យអ្វី?',
      options: ['Personal Identification', 'Process ID', 'Program Integration Data', 'Power Input Device'],
      correct: 1,
      explanation: 'PID (Process Identifier) គឺជាលេខសម្គាល់តែមួយគត់សម្រាប់ Process នីមួយៗ។'
    },
    {
      question: 'តើ Command មួយណាបង្ហាញ Process បែប Real-time ក្នុង Linux?',
      options: ['ls', 'top', 'ps', 'cat'],
      correct: 1,
      explanation: 'top ផ្តល់ព័ត៌មានដែលអាប់ដេតរាល់វិនាទីអំពី CPU និង RAM។'
    },
    {
      question: 'តើស្ថានភាព "Zombie" ក្នុង Linux មានន័យដូចម្តេច?',
      options: ['កម្មវិធីកំពុងដើរលឿន', 'កម្មវិធីដែលស្លាប់ហើយ តែនៅមានឈ្មោះក្នុង Process Table', 'មេរោគ', 'កម្មវិធីដែលកំពុងរង់ចាំអ្នកប្រើប្រាស់'],
      correct: 1,
      explanation: 'Zombie process គឺជា process ដែលបានបញ្ចប់ការងារហើយ តែ parent របស់វាមិនទាន់ដកវាចេញពីបញ្ជី។'
    },
    {
      question: 'ក្នុង Linux, តើ Option "-9" ក្នុង Command "kill -9 [PID]" ប្រើសម្រាប់អ្វី?',
      options: ['បិទដោយសន្តិវិធី', 'បង្ខំឱ្យបិទភ្លាមៗ (Force Kill)', 'Restart កម្មវិធី', 'ផ្អាកកម្មវិធី'],
      correct: 1,
      explanation: 'Signal 9 (SIGKILL) គឺជាការបញ្ជាឱ្យបិទភ្លាមៗដោយមិនរង់ចាំការរក្សាទុកទិន្នន័យ។'
    },
    {
      question: 'តើ Shortcut មួយណាសម្រាប់បើក Task Manager ក្នុង Windows ឱ្យលឿនបំផុត?',
      options: ['Ctrl + Alt + Del', 'Ctrl + Shift + Esc', 'Windows + L', 'Windows + X'],
      correct: 1,
      explanation: 'Ctrl + Shift + Esc បើក Task Manager ដោយផ្ទាល់តែម្តង។'
    },
    {
      question: 'តើ "Sleeping" state មានន័យដូចម្តេច?',
      options: ['កម្មវិធីកំពុងប្រើ CPU 100%', 'កម្មវិធីកំពុងរង់ចាំព្រឹត្តិការណ៍អ្វីមួយកើតឡើង', 'កម្មវិធីខូច', 'កុំព្យូទ័ររលត់'],
      correct: 1,
      explanation: 'Sleeping គឺនៅពេល process រង់ចាំទិន្នន័យចូលពី Network, Disk ឬ User។'
    },
    {
      question: 'តើក្នុង Windows ឧបករណ៍ណាដែលបង្ហាញការប្រើប្រាស់ Disk ច្បាស់ជាងគេ?',
      options: ['Task Manager', 'Resource Monitor', 'Device Manager', 'File Explorer'],
      correct: 1,
      explanation: 'Resource Monitor បង្ហាញក្រាហ្វ និងព័ត៌មានលម្អិតអំពីល្បឿន Read/Write របស់ File នីមួយៗ។'
    },
    {
      question: 'តើ Command មួយណាដែលបង្ហាញ "មែកធាង" នៃ Process (Parent-Child relation)?',
      options: ['ps aux', 'pstree', 'ls-process', 'top'],
      correct: 1,
      explanation: 'pstree បង្ហាញរចនាសម្ព័ន្ធពីកម្មវិធីមេ ទៅកម្មវិធីកូនៗ។'
    },
    {
      question: 'តើកម្មវិធី "htop" ខុសពី "top" យ៉ាងដូចម្តេច?',
      options: ['htop ប្រើមិនកើតលើ Linux', 'htop មានពណ៌ ងាយស្រួលអាន និងអាចប្រើ Mouse ចុចបានខ្លះ', 'top លឿនជាង htop ឆ្ងាយណាស់', 'គ្មានអ្វីខុសគ្នាទេ'],
      correct: 1,
      explanation: 'htop គឺជាឧបករណ៍ដែល User-friendly ជាង និងមានក្រាហ្វិក CPU ច្បាស់ល្អ។'
    }
  ],
  lab: {
    task: `
អនុវត្តការតាមដាន និងគ្រប់គ្រង Process លើម៉ាស៊ីនរបស់អ្នក។

**តម្រូវការ:**
1. បើកកម្មវិធីជាច្រើន (Chrome, Notepad, Calculator)។
2. បើក **Task Manager** (Windows) ឬ **htop** (Linux)។
3. រកមើលថាតើ Chrome បង្កើត Process ចំនួនប៉ុន្មាន? (ហេតុអ្វីបានជាច្រើនបែបនេះ?)
4. ប្រើ Command ឬ Task Manager ដើម្បីបិទ Calculator។
5. សង្កេតមើល **CPU Usage**៖ តើមានកម្មវិធីណាដែលកំពុងស៊ី CPU លើសពី 10% ដែរឬទេ?
`,
    solution: `
របាយការណ៍សង្ខេប៖
- Chrome ប្រើបច្ចេកទេស Multi-process (១ Tab អាចជា ១ Process) ដើម្បីសុវត្ថិភាព។
- ការបិទកម្មវិធីតាមរយៈ PID ឬ End Task គឺមានប្រសិទ្ធភាពភ្លាមៗ។
- ការយល់ដឹង៖ ការគ្រប់គ្រង Process ជួយឱ្យយើងសង្គ្រោះម៉ាស៊ីនដែលគាំង ដោយមិនបាច់ Restart កុំព្យូទ័រទាំងមូល។
`
  }
};

export default ProcessManagementContent;