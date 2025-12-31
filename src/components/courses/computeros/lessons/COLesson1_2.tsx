import type { LessonContent } from '../../../../types/LessonTypes';

const BootProcessContent: LessonContent = {
  title: 'ដំណើរការនៃការចាប់ផ្តើមម៉ាស៊ីន (Boot Process)',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជាការ Boot កុំព្យូទ័រ',
    'ស្វែងយល់ពីតួនាទីរបស់ BIOS និង UEFI',
    'ស្គាល់ពីដំណាក់កាល POST (Power-On Self-Test)',
    'យល់ពីរបៀបដែលមេម៉ូរីទាញយក OS មកដំណើរការ',
    'ស្គាល់ពីភាពខុសគ្នារវាង Cold Boot និង Warm Boot'
  ],
  content: `
# ដំណើរការនៃការចាប់ផ្តើមម៉ាស៊ីន (Boot Process) ⚙️🚀

---

**Boot Process** គឺជាដំណើរការដំបូងបង្អស់ដែលកើតឡើងនៅពេលអ្នកចុចប៊ូតុង "បើក" (Power On) នៅលើកុំព្យូទ័រ។ វាគឺជាលំដាប់នៃព្រឹត្តិការណ៍ដែល Hardware ធ្វើការត្រួតពិនិត្យខ្លួនឯង និងទាញយកប្រព័ន្ធប្រតិបត្តិការ (OS) ពី Storage មកកាន់ RAM ដើម្បីឱ្យអ្នកអាចប្រើប្រាស់បាន។

---

## 1. តើអ្វីទៅជា BIOS និង UEFI?

មុនពេល OS ដំណើរការ មានកម្មវិធីតូចមួយដែលបង្កប់ក្នុង Motherboard ជាអ្នកបញ្ជា៖
- **BIOS (Basic Input/Output System):** ជាបច្ចេកវិទ្យាចាស់ដែលប្រើសម្រាប់ដាស់ Hardware និងស្វែងរក OS។
- **UEFI (Unified Extensible Firmware Interface):** ជាបច្ចេកវិទ្យាទំនើបដែលមកជំនួស BIOS។ វាលឿនជាង មានសុវត្ថិភាពជាង (Secure Boot) និងទ្រទ្រង់ Hard Disk ទំហំធំជាង 2TB។

---

## 2. ដំណាក់កាលនៃ Boot Process

ដំណើរការនេះបែងចែកជា ៤ ជំហានសំខាន់ៗ៖

1. **Power Up:** ចរន្តអគ្គិសនីត្រូវបានបញ្ជូនទៅកាន់ Motherboard និង CPU។
2. **POST (Power-On Self-Test):** BIOS/UEFI ត្រួតពិនិត្យ Hardware ដូចជា RAM, Keyboard, និង Disk។ បើមានបញ្ហា វានឹងលឺសម្លេង "ប៊ីប" (Beep Codes)។
3. **Find Boot Loader:** BIOS/UEFI ស្វែងរកទីតាំង OS នៅក្នុង Boot Sequence (ដូចជា SSD, USB, ឬ Network)។
4. **Load OS:** Boot Loader ទាញយក Kernel របស់ OS ទៅដាក់ក្នុង RAM និងផ្ទេរការគ្រប់គ្រងទៅឱ្យ OS។



---

## 3. ប្រភេទនៃការ Boot

- **Cold Boot:** ការបើកកុំព្យូទ័រពីស្ថានភាពបិទជិត (Power was off)។
- **Warm Boot:** ការធ្វើ Reset ឬ Restart កុំព្យូទ័រដោយមិនបានបិទភ្លើង (Power stays on)។

---

## 4. Boot Priority (លំដាប់នៃឧបករណ៍ Boot)

អ្នកអាចកំណត់ក្នុង Settings ថាតើឱ្យកុំព្យូទ័ររក OS នៅទីណាខ្លះ៖
- លំដាប់ទី ១៖ SSD/HDD (សម្រាប់ប្រើប្រាស់រាល់ថ្ងៃ)
- លំដាប់ទី ២៖ USB Drive (សម្រាប់ដំឡើង Windows ថ្មី)
- លំដាប់ទី ៣៖ Network Boot (សម្រាប់ក្រុមហ៊ុនធំៗ)

---

## 5. តួនាទីរបស់ Kernel ក្នុងពេល Boot

Kernel គឺជាបេះដូងរបស់ OS។ នៅជំហានចុងក្រោយនៃ Boot Process:
- Kernel នឹងរៀបចំ Drivers សម្រាប់ Hardware។
- បង្កើត User Interface (Login Screen) សម្រាប់ឱ្យអ្នកប្រើប្រាស់ចូលទៅកាន់ប្រព័ន្ធ។
`,
  examples: [
    `### ឧទាហរណ៍៖ ការចូលទៅកាន់ BIOS/UEFI Settings

**ស្ថានភាព៖** អ្នកចង់ដំឡើង Windows ថ្មីពី USB Flash Drive ប៉ុន្តែកុំព្យូទ័រតែងតែចូលទៅ Windows ចាស់ជានិច្ច។

**ជំហាន:**
1. **Restart កុំព្យូទ័រ:** ចុច Restart ម៉ាស៊ីនរបស់អ្នក។
2. **ចុចគ្រាប់ចុច Shortcut:** នៅពេលអេក្រង់ចាប់ផ្តើមភ្លឺភ្លាម ចុចគ្រាប់ចុចដូចជា \`F2\`, \`F10\`, \`F12\` ឬ \`Del\` (អាស្រ័យលើម៉ាកកុំព្យូទ័រ)។
3. **ស្វែងរក Boot Menu:** ប្រើគ្រាប់ចុចព្រួញដើម្បីទៅកាន់ Tab "Boot"។
4. **ប្តូរ Boot Priority:** កំណត់យក "USB Storage Device" មកលើគេបង្អស់ (លេខ ១)។
5. **Save and Exit:** ចុច \`F10\` ដើម្បីរក្សាទុក និងចាកចេញ។ កុំព្យូទ័រនឹងចាប់ផ្តើម Boot ចេញពី USB វិញ។
`,
    `### ឧទាហរណ៍៖ ការវិភាគបញ្ហាពេល Boot មិនឡើង (Troubleshooting)

**ស្ថានភាព៖** អ្នកបើកកុំព្យូទ័រ ប៉ុន្តែឃើញអេក្រង់ខ្មៅ និងមានអក្សរ "No Bootable Device Found"។

**ជំហាន:**
1. **ពិនិត្យ Hardware:** ប្រាកដថាគ្មាន USB ឬ External Drive ណាដែលគ្មាន OS ដោតជាប់ចោល។
2. **ចូល BIOS:** ពិនិត្យមើលថាតើ BIOS នៅស្គាល់ Hard Drive របស់អ្នកដែរឬទេ?
3. **ពិនិត្យ Boot Order:** ប្រាកដថា SSD ដែលមាន Windows ស្ថិតនៅលេខរៀងទី ១។
4. **សន្និដ្ឋាន:** បើ BIOS មិនស្គាល់ Hard Drive ទេ មានន័យថា SSD អាចនឹងខូច ឬរបូតខ្សែ។
`
  ],
  quiz: [
    {
      question: 'តើពាក្យថា POST នៅក្នុង Boot Process មានន័យដូចម្តេច?',
      options: [
        'Power-On System Transfer',
        'Power-On Self-Test',
        'Pre-Operating System Test',
        'Primary Operating System Table'
      ],
      correct: 1,
      explanation: 'POST គឺជាដំណើរការត្រួតពិនិត្យ Hardware (RAM, CPU, Keyboard) នៅពេលចាប់ផ្តើមបើកម៉ាស៊ីន។'
    },
    {
      question: 'តើកម្មវិធីអ្វីដែលមកជំនួស BIOS នៅក្នុងកុំព្យូទ័រទំនើបៗ?',
      options: [
        'Kernel',
        'UEFI',
        'RAM Manager',
        'CMOS'
      ],
      correct: 1,
      explanation: 'UEFI គឺជា Firmware ជំនាន់ថ្មីដែលលឿនជាង និងមានសុវត្ថិភាពជាង BIOS។'
    },
    {
      question: 'តើអ្វីទៅជា Cold Boot?',
      options: [
        'ការបើកកុំព្យូទ័រក្នុងបន្ទប់ម៉ាស៊ីនត្រជាក់',
        'ការ Restart កុំព្យូទ័រ',
        'ការបើកកុំព្យូទ័រពីស្ថានភាពបិទភ្លើងជិត',
        'ការដាក់កុំព្យូទ័រឱ្យ Sleep'
      ],
      correct: 2,
      explanation: 'Cold Boot គឺជាការបើកម៉ាស៊ីនដែលមិនមានចរន្តអគ្គិសនីសោះ (បិទជិត)។'
    },
    {
      question: 'តើឧបករណ៍ណាដែល BIOS ស្វែងរកដើម្បីទាញយក OS?',
      options: [
        'Boot Loader',
        'Graphics Card',
        'Power Supply',
        'Sound Driver'
      ],
      correct: 0,
      explanation: 'BIOS ស្វែងរក Boot Loader ដែលជាកម្មវិធីតូចមួយសម្រាប់ដាស់ OS ឱ្យដំណើរការ។'
    },
    {
      question: 'ប្រសិនបើកុំព្យូទ័រលឺសម្លេង "ប៊ីប" ច្រើនដងក្នុងពេល Boot តើវាមានន័យដូចម្តេច?',
      options: [
        'កុំព្យូទ័របើកជោគជ័យ',
        'មានបញ្ហា Hardware កើតឡើង (POST Error)',
        'មានសារថ្មីពី Windows',
        'កុំព្យូទ័រកំពុងដំឡើងកម្មវិធី'
      ],
      correct: 1,
      explanation: 'Beep Codes ត្រូវបានប្រើដោយ BIOS ដើម្បីប្រាប់ពីបញ្ហា Hardware ដូចជាខូច RAM ឬ Graphics Card។'
    },
    {
      question: 'តើលំដាប់នៃឧបករណ៍ដែលកុំព្យូទ័រត្រូវស្វែងរក OS ហៅថាអ្វី?',
      options: [
        'Boot Priority / Sequence',
        'System Registry',
        'Task List',
        'File Hierarchy'
      ],
      correct: 0,
      explanation: 'Boot Priority កំណត់ថាត្រូវរក OS ក្នុង SSD មុន ឬ USB មុន។'
    },
    {
      question: 'តើផ្នែកណានៃ OS ដែលត្រូវបានទាញចូល RAM ជាចុងក្រោយនៃ Boot Process?',
      options: [
        'Web Browser',
        'Kernel',
        'Wallpaper',
        'Recycle Bin'
      ],
      correct: 1,
      explanation: 'Kernel គឺជាផ្នែកស្នូលដែលគ្រប់គ្រងអ្វីៗគ្រប់យ៉ាង វាត្រូវតែ Load ចូល RAM ដើម្បីឱ្យ OS ដំណើរការបាន។'
    }
  ],
  lab: {
    task: `
អនុវត្តការស្វែងយល់ពី Boot Settings នៅលើម៉ាស៊ីនផ្ទាល់។

**តម្រូវការ:**

1. **ស្វែងរក Shortcut Key:**
   - ស្រាវជ្រាវតាម Internet នូវម៉ាកកុំព្យូទ័ររបស់អ្នក (ឧទាហរណ៍៖ Dell, HP, ASUS) ដើម្បីដឹងថាត្រូវចុច Key មួយណាដើម្បីចូល BIOS ឬ Boot Menu។

2. **ពិនិត្យ Boot Type:**
   - ចូលទៅកាន់ Windows ហើយឆែកមើលថាតើម៉ាស៊ីនរបស់អ្នកប្រើ BIOS ឬ UEFI (វាយពាក្យ "System Information" ក្នុង Start Menu រួចមើលកន្លែង "BIOS Mode")។

3. **ការវិភាគល្បឿន:**
   - សាកល្បងធ្វើ "Cold Boot" (Shutdown រួចបើកវិញ) និង "Warm Boot" (Restart)។ តើមួយណាប្រើពេលយូរជាង? ហេតុអ្វី?

4. **កំណត់ចំណាំ:**
   - សរសេរឈ្មោះឧបករណ៍ដែលស្ថិតក្នុង "Boot Priority" លេខ ១ ក្នុងម៉ាស៊ីនរបស់អ្នក។
    `,
    solution: `
របាយការណ៍គំរូ៖
- BIOS Mode: UEFI (ទំនើប)
- Shortcut Key: F2
- Cold Boot vs Warm Boot: Cold Boot យូរជាងបន្តិចព្រោះ Hardware ត្រូវធ្វើ POST ពីដំបូង។
- Boot Priority #1: Windows Boot Manager (Samsung SSD 980)

ការយល់ឃើញ៖ ការប្រើ SSD ធ្វើឱ្យដំណាក់កាល "Load OS" លឿនខ្លាំង ដែលធ្វើឱ្យកុំព្យូទ័របើកឡើងក្នុងពេលតែប៉ុន្មានវិនាទីប៉ុណ្ណោះ។
`
  }
};

export default BootProcessContent;