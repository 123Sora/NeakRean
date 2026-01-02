import type { LessonContent } from '../../../../types/LessonTypes';

const WindowsRegistryContent: LessonContent = {
  title: 'ការយល់ដឹងពី Windows Registry (System Database)',
  objectives: [
    'យល់ពីនិយមន័យ និងតួនាទីរបស់ Windows Registry',
    'ស្គាល់ពី Root Keys ទាំង ៥ សំខាន់ៗ',
    'ចេះប្រើប្រាស់កម្មវិធី Registry Editor (regedit) ដោយសុវត្ថិភាព',
    'យល់ដឹងពីរបៀប Backup និង Restore Registry',
    'ដឹងពីហានិភ័យនៃការកែប្រែ Registry មិនត្រឹមត្រូវ'
  ],
  content: `
# មូលដ្ឋានគ្រឹះនៃ Windows Registry 🗄️⚙️

---

**Windows Registry** គឺជា Database ដ៏ធំមួយដែលផ្ទុកនូវរាល់ការកំណត់ (Settings) និងជម្រើស (Options) សម្រាប់ប្រព័ន្ធប្រតិបត្តិការ Microsoft Windows ក៏ដូចជាកម្មវិធី និង Hardware ទាំងអស់ដែលមានក្នុងម៉ាស៊ីន។

ប្រសិនបើ CPU គឺជាខួរក្បាល Registry គឺជា **"សៀវភៅចងចាំ"** ដែលកត់ត្រាទុកនូវរាល់ចំណង់ចំណូលចិត្តរបស់អ្នកប្រើប្រាស់។

---

## 1. រចនាសម្ព័ន្ធរបស់ Registry (The 5 Root Keys)

នៅក្នុង Registry Editor អ្នកនឹងឃើញថតឯកសារធំៗចំនួន ៥ ដែលគេហៅថា **Hives**:

1.  **HKEY_CLASSES_ROOT (HKCR):** ផ្ទុកព័ត៌មានអំពី File Extensions (ឧទាហរណ៍៖ .txt បើកជាមួយ Notepad)។
2.  **HKEY_CURRENT_USER (HKCU):** ផ្ទុកការកំណត់ផ្ទាល់ខ្លួនរបស់អ្នកប្រើប្រាស់ដែលកំពុង Login (Desktop wallpaper, Screen brightness)។
3.  **HKEY_LOCAL_MACHINE (HKLM):** ផ្ទុកការកំណត់សម្រាប់ម៉ាស៊ីនទាំងមូល (Hardware configuration, Windows software settings)។
4.  **HKEY_USERS (HKU):** ផ្ទុក Profiles របស់អ្នកប្រើប្រាស់ទាំងអស់នៅក្នុងកុំព្យូទ័រ។
5.  **HKEY_CURRENT_CONFIG (HKCC):** ផ្ទុកព័ត៌មានអំពី Hardware Profile ដែលកំពុងប្រើប្រាស់បច្ចុប្បន្ន។



---

## 2. ប្រភេទនៃតម្លៃទិន្នន័យ (Registry Data Types)

នៅពេលអ្នកបង្កើត Value ថ្មី អ្នកត្រូវស្គាល់ប្រភេទរបស់វា៖
* **REG_SZ:** តម្លៃជាអក្សរ (String Value)។
* **REG_DWORD (32-bit):** តម្លៃជាលេខ (Boolean 0 ឬ 1 ឬលេខរៀងផ្សេងៗ)។
* **REG_BINARY:** ទិន្នន័យក្នុងទម្រង់ Raw Binary (0s and 1s)។

---

## 3. ការប្រើប្រាស់ Registry Editor

ដើម្បីបើកវា៖
1. ចុចប៊ូតុង **Windows + R**។
2. វាយពាក្យថា \`regedit\` រួចចុច Enter។

> ⚠️ **ការព្រមាន៖** ការកែប្រែ Registry ខុសបច្ចេកទេស អាចធ្វើឱ្យ Windows ដំណើរការមិនប្រក្រតី ឬខូចទាំងស្រុង។ ត្រូវចេះ Backup ជានិច្ច!

---

## 4. របៀប Backup និង Restore

មុនពេលកែប្រែអ្វីមួយ៖
1. ជ្រើសរើស Key ឬ Folder ដែលចង់ Backup។
2. ចូលទៅកាន់ **File > Export**។
3. រក្សាទុកឯកសារជាប្រភេទ \`.reg\`។
4. ប្រសិនបើមានបញ្ហា គ្រាន់តែ Double-click លើឯកសារនោះដើម្បី **Import** ត្រឡប់មកវិញ។

---

## 5. ឧទាហរណ៍នៃការប្រើប្រាស់ជាក់ស្តែង
Registry ត្រូវបានគេប្រើដើម្បី៖
- បិទការ Update របស់ Windows ដោយបង្ខំ។
- ប្តូរល្បឿននៃការបង្ហាញ Menu (MenuShowDelay)។
- លុបចោលកម្មវិធីដែលមិនព្រមចេញពី Startup។
`,
  examples: [
    `### ឧទាហរណ៍៖ ការផ្លាស់ប្តូរល្បឿន Mouse

**ស្ថានភាព៖** អ្នកចង់ឱ្យ Cursor ដើរលឿនជាងការកំណត់ធម្មតា។

**ជំហាន:**
1. ទៅកាន់ \`HKEY_CURRENT_USER\\Control Panel\\Mouse\`
2. រកមើល Value ឈ្មោះ \`MouseSpeed\`
3. កែប្រែលេខក្នុងនោះ (ឧទាហរណ៍ ពី 1 ទៅ 2)
`,
    `### ឧទាហរណ៍៖ ការលាក់ Drive ក្នុង File Explorer

**ស្ថានភាព៖** អ្នកចង់លាក់ Partition ណាមួយដើម្បីសុវត្ថិភាព។

**ជំហាន:**
1. ទៅកាន់ \`HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer\`
2. បង្កើត DWORD Value ថ្មីឈ្មោះ \`NoDrives\`
3. កំណត់តម្លៃលេខតាមកូដនៃ Drive នីមួយៗ។
`
  ],
  quiz: [
    {
      question: 'តើពាក្យបញ្ជាអ្វីសម្រាប់បើក Registry Editor?',
      options: ['cmd', 'msconfig', 'regedit', 'services.msc'],
      correct: 2,
      explanation: 'regedit គឺជាពាក្យបញ្ជាខ្លីសម្រាប់បើក Registry Editor ក្នុង Windows។'
    },
    {
      question: 'តើ Root Key មួយណាដែលផ្ទុកការកំណត់សម្រាប់ Wallpaper របស់អ្នកប្រើប្រាស់បច្ចុប្បន្ន?',
      options: ['HKEY_LOCAL_MACHINE', 'HKEY_CURRENT_USER', 'HKEY_CLASSES_ROOT', 'HKEY_CURRENT_CONFIG'],
      correct: 1,
      explanation: 'HKEY_CURRENT_USER (HKCU) ផ្ទុកនូវរាល់ការកំណត់ផ្ទាល់ខ្លួន (User-specific settings)។'
    },
    {
      question: 'តើឯកសារ Backup របស់ Registry មានកន្ទុយ (Extension) អ្វី?',
      options: ['.txt', '.exe', '.reg', '.bat'],
      correct: 2,
      explanation: '.reg គឺជា Registry File ដែលអាច Import ទិន្នន័យចូលទៅក្នុង Database វិញបាន។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់កែប្រែការកំណត់សម្រាប់ Hardware ទាំងអស់ក្នុងម៉ាស៊ីន តើអ្នកគួរចូលទៅកាន់ Hive ណា?',
      options: ['HKLM (Local Machine)', 'HKCU (Current User)', 'HKCR (Classes Root)', 'HKU (Users)'],
      correct: 0,
      explanation: 'HKEY_LOCAL_MACHINE ផ្ទុកការកំណត់សកល (Global settings) សម្រាប់ Hardware និង Software ទាំងអស់។'
    }
  ],
  lab: {
    task: `
អនុវត្តការរុករកក្នុង Registry Editor ដោយសុវត្ថិភាព។

**តម្រូវការ:**

1. **Exploring:** បើក regedit ហើយរុករកទៅកាន់ \`HKEY_CURRENT_USER\\Control Panel\\Desktop\`។
2. **Backing Up:** អនុវត្តការ Export (Backup) ថត "Mouse" ទុកនៅលើ Desktop ជាឯកសារ \`mouse_backup.reg\`។
3. **Identification:** រកមើល Value ឈ្មោះ \`WallPaper\` ក្នុង Key ខាងលើ រួចពិនិត្យមើលថាតើវាបង្ហាញ Path នៃរូបភាព Wallpaper របស់អ្នកមែនឬទេ?
`,
    solution: `
របាយការណ៍សង្ខេប៖
- ការ Backup ជោគជ័យ៖ ទទួលបានឯកសារ .reg ទំហំតូចមួយនៅលើ Desktop។
- ការសង្កេត៖ នៅក្នុង Registry, ផ្លូវ (Path) នៃ Wallpaper គឺពិតជាត្រូវគ្នាទៅនឹងរូបភាពដែលកំពុងប្រើប្រាស់មែន។
- សេចក្តីសន្និដ្ឋាន៖ Registry គឺជាកន្លែងផ្ទុក "អាសយដ្ឋាន" និង "តម្លៃ" នៃរាល់សកម្មភាពក្នុង Windows។
`
  }
};

export default WindowsRegistryContent;