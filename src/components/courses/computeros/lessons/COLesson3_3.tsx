import type { LessonContent } from '../../../../types/LessonTypes';

const PermissionsSudoContent: LessonContent = {
  title: 'ការគ្រប់គ្រងសិទ្ធិ (Permissions) និងការប្រើប្រាស់ Sudo',
  objectives: [
    'យល់ដឹងពីប្រព័ន្ធសន្តិសុខ Multi-user របស់ Linux',
    'បកស្រាយនិមិត្តសញ្ញាសិទ្ធិ rwx (Read, Write, Execute)',
    'ចេះប្រើប្រាស់លេខបង្គោល (Octal Notation) ដើម្បីកំណត់សិទ្ធិ',
    'យល់ពីតួនាទីរបស់ Superuser (Root) និងគ្រោះថ្នាក់នៃការប្រើប្រាស់វា',
    'ស្ទាត់ជំនាញក្នុងការប្រើ Command chmod និង chown'
  ],
  content: `
# ការការពារប្រព័ន្ធ៖ សិទ្ធិប្រើប្រាស់ និងអំណាច Root 🛡️🔑

---

Linux ត្រូវបានបង្កើតឡើងជាប្រព័ន្ធ **Multi-user** ដែលមានន័យថាមនុស្សច្រើននាក់អាចប្រើម៉ាស៊ីនតែមួយបាន។ ដើម្បីកុំឱ្យអ្នកប្រើប្រាស់ម្នាក់ទៅលុបឯកសាររបស់អ្នកម្នាក់ទៀត ឬទៅបំផ្លាញឯកសារប្រព័ន្ធ Linux ប្រើប្រាស់ **Permissions (សិទ្ធិ)**។

---

## 1. ការអានសិទ្ធិឯកសារ (Understanding ls -l)

នៅពេលអ្នកវាយ \`ls -l\` អ្នកនឹងឃើញកូដចម្លែកៗដូចជា \`-rwxr-xr--\`។ វាបែងចែកជា ៣ ក្រុម៖

1.  **Owner (u):** ម្ចាស់ឯកសារ។
2.  **Group (g):** ក្រុមអ្នកប្រើប្រាស់ដែលមានសិទ្ធិរួមគ្នា។
3.  **Others (o):** អ្នកផ្សេងៗទៀតក្នុងលោក (Public)។

| សញ្ញា | អត្ថន័យ | តម្លៃលេខ |
| :--- | :--- | :--- |
| **r** | **Read** (អាន) | 4 |
| **w** | **Write** (កែប្រែ/លុប) | 2 |
| **x** | **Execute** (ដំណើរការកម្មវិធី) | 1 |
| **-** | **No Permission** (គ្មានសិទ្ធិ) | 0 |



---

## 2. ការកំណត់សិទ្ធិជាមួយ Octal Notation (Numeric Way)

យើងប្រើផលបូកនៃលេខទាំងនោះដើម្បីកំណត់សិទ្ធិឱ្យលឿន៖
* **7** (4+2+1): សិទ្ធិពេញ (rwx)
* **6** (4+2): អាន និងកែប្រែ (rw-)
* **5** (4+1): អាន និងដំណើរការ (r-x)
* **4**: អានតែមួយគត់ (r--)

**ឧទាហរណ៍៖** \`chmod 755 script.sh\`
- ម្ចាស់មានសិទ្ធិពេញ (7)
- ក្រុម និងអ្នកដទៃអាចអាន និងដំណើរការបាន (5)

---

## 3. អំណាចរបស់ Superuser (The Sudo Command)

**Root** គឺជា User ដែលមានអំណាចខ្ពស់បំផុត (God mode)។ គេមិនប្រើ Root រាល់ថ្ងៃទេ ព្រោះវាគ្រោះថ្នាក់ (កំហុសមួយអាចលុប Windows/Linux ទាំងមូល)។ គេប្រើ **sudo** ជំនួសវិញ។

* **sudo:** (SuperUser Do) អនុញ្ញាតឱ្យ User ធម្មតាធ្វើការងារ Admin ជាបណ្តោះអាសន្ន។
* **chown:** (Change Owner) ប្រើសម្រាប់ផ្ទេរកម្មសិទ្ធិឯកសារទៅឱ្យ User ផ្សេង។



---

## 4. របៀបប្តូរសិទ្ធិ និងម្ចាស់ឯកសារ

* **chmod:** ប្តូរសិទ្ធិ (ឧទាហរណ៍៖ \`chmod +x file.sh\` ដើម្បីឱ្យ File នោះក្លាយជាកម្មវិធីអាចបើកបាន)។
* **chown:** ប្តូរម្ចាស់ (ឧទាហរណ៍៖ \`sudo chown sophal report.txt\`)។
`,
  examples: [
    `### ឧទាហរណ៍៖ ការធ្វើឱ្យ Script អាចដំណើរការបាន

**ស្ថានភាព៖** អ្នកបានសរសេរ Script មួយ ប៉ុន្តែ Linux មិនអនុញ្ញាតឱ្យអ្នក Run វានោះទេ។

**ជំហាន:**
1. មើលសិទ្ធិបច្ចុប្បន្ន៖ \`ls -l myscript.sh\` (ឃើញ \`-rw-r--r--\`)
2. បន្ថែមសិទ្ធិ Execute៖ \`chmod +x myscript.sh\`
3. បើកដំណើរការ៖ \`./myscript.sh\`
`,
    `### ឧទាហរណ៍៖ ការជួសជុលបញ្ហា "Permission Denied"

**ស្ថានភាព៖** អ្នកចង់កែឯកសារក្នុង \`/etc/hosts\` តែម៉ាស៊ីនមិនឱ្យ Save។

**ជំហាន:**
1. កុំប្រើកម្មវិធីកែធម្មតា។
2. ប្រើ sudo ជាមួយ Text Editor៖ \`sudo nano /etc/hosts\`
3. វាយ Password របស់អ្នក រួចកែប្រែ និងរក្សាទុកជាការស្រេច។
`
  ],
  quiz: [
    {
      question: 'តើលេខ "7" ក្នុង chmod 755 តំណាងឱ្យសិទ្ធិអ្វីខ្លះ?',
      options: ['Read Only', 'Read & Write', 'Read, Write, & Execute', 'None'],
      correct: 2,
      explanation: '7 កើតចេញពី 4(r) + 2(w) + 1(x) = 7។'
    },
    {
      question: 'តើ Command មួយណាប្រើសម្រាប់ប្តូរ "ម្ចាស់" (Owner) នៃឯកសារ?',
      options: ['chmod', 'chown', 'chroot', 'sudo'],
      correct: 1,
      explanation: 'chown តំណាងឱ្យ Change Owner។'
    },
    {
      question: 'តើសិទ្ធិ "r-x" មានតម្លៃលេខស្មើនឹងប៉ុន្មាន?',
      options: ['4', '5', '6', '7'],
      correct: 1,
      explanation: 'r(4) + -(0) + x(1) = 5។'
    },
    {
      question: 'តើ "sudo" មានន័យពេញថាដូចម្តេច?',
      options: ['SuperUser Do', 'System User Do', 'Switch User Default Option', 'Simple User Do'],
      correct: 0,
      explanation: 'sudo អនុញ្ញាតឱ្យយើងធ្វើការងារក្នុងនាមជា SuperUser (Root)។'
    },
    {
      question: 'នៅក្នុងសិទ្ធិ "-rwxr-xr--", តើក្រុម (Group) មានសិទ្ធិអ្វីខ្លះ?',
      options: ['rwx', 'r-x', 'r--', '---'],
      correct: 1,
      explanation: 'ខ្ទង់ទី៤ ដល់ទី៦ (r-x) តំណាងឱ្យសិទ្ធិរបស់ Group។'
    },
    {
      question: 'ហេតុអ្វីបានជាគេមិនណែនាំឱ្យប្រើប្រាស់ Account "Root" ជាប្រចាំ?',
      options: ['ព្រោះវាធ្វើឱ្យអ៊ីនធឺណិតយឺត', 'ព្រោះវាគ្រោះថ្នាក់ បើមានកំហុសអាចខូចប្រព័ន្ធទាំងមូល', 'ព្រោះ Root គ្មាន Mouse', 'ព្រោះ Root មិនអាចលេងហ្គេមបាន'],
      correct: 1,
      explanation: 'Root មានសិទ្ធិលុបរាល់ File ទាំងអស់ សូម្បីតែ File សំខាន់របស់ OS ក៏ដោយ។'
    },
    {
      question: 'តើ Command "chmod 644 file.txt" ផ្តល់សិទ្ធិអ្វីដល់ Others (អ្នកក្រៅ)?',
      options: ['អាន និងកែប្រែ', 'អានតែមួយគត់ (Read-only)', 'គ្មានសិទ្ធិទាល់តែសោះ', 'ដំណើរការកម្មវិធី'],
      correct: 1,
      explanation: 'លេខចុងក្រោយគឺ 4 ដែលតំណាងឱ្យសិទ្ធិ Read សម្រាប់ Others។'
    },
    {
      question: 'តើនិមិត្តសញ្ញា "x" ក្នុង Permission មានន័យដូចម្តេច?',
      options: ['លុបចោល (X/Delete)', 'អាន (X-ray)', 'ដំណើរការ (Execute)', 'កែប្រែ'],
      correct: 2,
      explanation: 'x គឺ Execute ដែលអនុញ្ញាតឱ្យ File ដំណើរការជា Program ឬ Script។'
    },
    {
      question: 'តើ Command មួយណាដែលបង្ហាញសិទ្ធិឯកសារជាទម្រង់បញ្ជីលម្អិត?',
      options: ['ls -a', 'ls -l', 'ls -h', 'ls -s'],
      correct: 1,
      explanation: 'ls -l (Long format) បង្ហាញសិទ្ធិ ម្ចាស់ ទំហំ និងកាលបរិច្ឆេទ។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យរាល់ឯកសារក្នុង Folder មួយប្តូរម្ចាស់ទាំងអស់ តើត្រូវប្រើ Option អ្វី?',
      options: ['-a', '-f', '-R (Recursive)', '-v'],
      correct: 2,
      explanation: '-R ប្រើសម្រាប់អនុវត្ត Command ទៅលើរាល់ File និង Sub-folder ទាំងអស់ដែលមានក្នុងនោះ។'
    }
  ],
  lab: {
    task: `
អនុវត្តការគ្រប់គ្រងសិទ្ធិឯកសារ និងសុវត្ថិភាព។

**តម្រូវការ:**
1. បង្កើត File ថ្មីឈ្មោះ \`secret.txt\` រួចសរសេរអត្ថបទចូល។
2. ប្តូរសិទ្ធិឱ្យ \`secret.txt\` ឱ្យមានតែ "ម្ចាស់" ម្នាក់គត់ដែលអាចអាន និងកែបាន (Octal: 600)។
3. សាកល្បងប្រើ Command \`cat secret.txt\` ជាធម្មតា (គួរតែដើរ)។
4. បង្កើត User ថ្មីម្នាក់ (ប្រើ \`sudo adduser testuser\`) រួចសាកល្បងចូលមើល File នោះ (គួរតែ Permission Denied)។
5. ប្រើ \`chmod 777 secret.txt\` រួចសង្កេតមើលថាតើមានអ្វីប្រែប្រួល? (កុំធ្វើបែបនេះលើ File ពិតប្រាកដ!)
`,
    solution: `
របាយការណ៍សង្ខេប៖
- chmod 600 ធ្វើឱ្យឯកសារមានសុវត្ថិភាពបំផុតសម្រាប់ម្ចាស់។
- chmod 777 បើកសិទ្ធិឱ្យមនុស្សគ្រប់គ្នា លុប កែ ឬអានបាន ដែលជាហានិភ័យសន្តិសុខធ្ងន់ធ្ងរ។
- ការយល់ដឹង៖ ក្នុងនាមជា Admin យើងត្រូវផ្តល់សិទ្ធិ "តិចបំផុតដែលចាំបាច់" (Principle of Least Privilege)។
`
  }
};

export default PermissionsSudoContent;