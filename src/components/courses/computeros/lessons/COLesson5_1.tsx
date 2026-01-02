import type { LessonContent } from '../../../../types/LessonTypes';

const VirtualizationContent: LessonContent = {
  title: 'បច្ចេកវិទ្យានិម្មិត (Virtualization) ជាមួយ VMware និង VirtualBox',
  objectives: [
    'យល់ពីគោលការណ៍គ្រឹះនៃ Virtualization និងអត្ថប្រយោជន៍របស់វា',
    'បែងចែកភាពខុសគ្នារវាង Type-1 និង Type-2 Hypervisors',
    'ចេះកំណត់រចនាសម្ព័ន្ធ Hardware សម្រាប់ Virtual Machine (VM)',
    'យល់ដឹងពីរបៀបប្រើប្រាស់ Snapshots ដើម្បីការពារទិន្នន័យ',
    'ចេះដំឡើង និងប្រើប្រាស់ Guest Additions/VMware Tools'
  ],
  content: `
# ពិភពនិម្មិត៖ ការបង្កើតកុំព្យូទ័រក្នុងកុំព្យូទ័រ 💻🌐

---

**Virtualization** គឺជាបច្ចេកវិទ្យាដែលអនុញ្ញាតឱ្យយើងបែងចែកធនធានកុំព្យូទ័រតែមួយ (Physical Machine) ឱ្យទៅជាកុំព្យូទ័រនិម្មិតជាច្រើន (**Virtual Machines - VMs**)។ វាដូចជាការសង់ខុនដូនៅលើដីតែមួយ ដែលបន្ទប់នីមួយៗរស់នៅដាច់ដោយឡែកពីគ្នា។

---

## 1. តើអ្វីទៅជា Hypervisor?

Hypervisor គឺជាកម្មវិធីដែលគ្រប់គ្រង និងបែងចែក CPU, RAM, និង Disk ទៅឱ្យ VMs។ វាបែងចែកជា ២ ប្រភេទ៖

* **Type-1 (Bare Metal):** ដំឡើងផ្ទាល់លើ Hardware (ឧទាហរណ៍៖ VMware ESXi, Microsoft Hyper-V)។ ប្រើសម្រាប់ Server ធំៗ។
* **Type-2 (Hosted):** ដំឡើងលើ OS ដូចជា Windows ឬ macOS (ឧទាហរណ៍៖ **VMware Workstation**, **Oracle VirtualBox**)។ ប្រើសម្រាប់រៀន និងតេស្តកម្មវិធី។



---

## 2. ហេតុអ្វីបានជាយើងត្រូវការ Virtualization?

1.  **Isolation:** បើ VM មួយឆ្លងមេរោគ វាមិនប៉ះពាល់ដល់ម៉ាស៊ីនពិត (Host) ឡើយ។
2.  **Cost Saving:** មិនចាំបាច់ទិញកុំព្យូទ័រច្រើនសម្រាប់តេស្ត Windows, Linux និង macOS។
3.  **Snapshots:** សមត្ថភាពក្នុងការ "ថតរូបទុក" នូវស្ថានភាពម៉ាស៊ីន។ បើអ្នកធ្វើឱ្យខូច អ្នកអាចត្រឡប់ថយក្រោយវិញបានភ្លាមៗ។

---

## 3. ការកំណត់រចនាសម្ព័ន្ធ VM (Configuration)

នៅពេលបង្កើត VM អ្នកត្រូវកំណត់៖
* **CPU Cores:** ចំនួនស្នូលខួរក្បាល (មិនគួរលើសពីពាក់កណ្តាលនៃម៉ាស៊ីនពិត)។
* **RAM:** បរិមាណអង្គចងចាំ (ឧទាហរណ៍៖ 4GB សម្រាប់ Linux គឺគ្រប់គ្រាន់)។
* **Network Mode:** 
   * **NAT:** ប្រើ Internet តាមម៉ាស៊ីនពិត។
    * **Bridged:** VM ទទួលបាន IP ផ្ទាល់ពី Router ដូចម៉ាស៊ីនពិតដែរ។



---

## 4. ឧបករណ៍ជំនួយ (Tools & Guest Additions)

បន្ទាប់ពីដំឡើង OS ក្នុង VM ហើយ អ្នកត្រូវដំឡើង **VMware Tools** ឬ **VirtualBox Guest Additions** ដើម្បី៖
* អូស File ចូល (Drag and Drop)។
* ចម្លងអត្ថបទឆ្លងគ្នា (Shared Clipboard)។
* ប្តូរទំហំ Screen ឱ្យពេញ (Auto-resize Display)។
`,
  examples: [
    `### ឧទាហរណ៍៖ ការប្រើ Snapshot ដើម្បីតេស្តមេរោគ

**ស្ថានភាព៖** អ្នកចង់បើក File មួយដែលសង្ស័យថាមានមេរោគ។

**ជំហាន:**
1. បើក VM រួចចុចយក **Take Snapshot** (ដាក់ឈ្មោះថា "Before Virus")។
2. បើក File សង្ស័យនោះ។
3. ប្រសិនបើ VM គាំង ឬខូច អ្នកគ្រាន់តែចុច **Restore Snapshot** នោះ VM នឹងត្រឡប់មកសភាពដើមវិញក្នុងរយៈពេលប៉ុន្មានវិនាទី។
`,
    `### ឧទាហរណ៍៖ ការបង្កើត Lab សម្រាប់រៀន Network

**ជំហាន:**
1. បង្កើត VM ចំនួន ២ (Windows មួយ និង Linux មួយ)។
2. កំណត់ Network ជា **Internal Network** ឬ **Host-only**។
3. ឥឡូវនេះ VM ទាំងពីរអាចទាក់ទងគ្នាបាន តែមិនអាចចេញទៅក្រៅ Internet បានទេ (សុវត្ថិភាពសម្រាប់តេស្ត Hack ឬ Virus)។
`
  ],
  quiz: [
    {
      question: 'តើកម្មវិធី VMware Workstation ស្ថិតក្នុងប្រភេទ Hypervisor មួយណា?',
      options: ['Type-1', 'Type-2', 'Type-3', 'Cloud-based'],
      correct: 1,
      explanation: 'VMware Workstation ដំឡើងនៅលើ OS (Host) ដូច្នេះវាជា Type-2 Hypervisor។'
    },
    {
      question: 'តើ "Snapshot" ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះ?',
      options: ['ធ្វើឱ្យ VM លឿនជាងមុន', 'រក្សាទុកស្ថានភាព VM ដើម្បីអាចត្រឡប់មកវិញបានពេលមានកំហុស', 'លុបមេរោគដោយស្វ័យប្រវត្តិ', 'បង្កើនទំហំ RAM'],
      correct: 1,
      explanation: 'Snapshot គឺជាការថតចម្លងស្ថានភាពម៉ាស៊ីនទុក (Backup ភ្លាមៗ)។'
    },
    {
      question: 'តើ Network Mode មួយណាដែលធ្វើឱ្យ VM ទទួលបាន IP ផ្ទាល់ពី Router ដូចកុំព្យូទ័រពិត?',
      options: ['NAT', 'Host-only', 'Bridged', 'Internal Network'],
      correct: 2,
      explanation: 'Bridged mode ភ្ជាប់ VM ទៅកាន់ Physical Network ផ្ទាល់តែម្តង។'
    },
    {
      question: 'តើ Guest Additions/VMware Tools មានតួនាទីអ្វី?',
      options: ['ដំឡើង Windows ឱ្យយើង', 'បង្កើនល្បឿន Internet', 'ជួយឱ្យអូស File ចូល និងពង្រីក Screen បានពេញ', 'កម្ចាត់មេរោគ'],
      correct: 2,
      explanation: 'វាជា Driver និង Utility ដែលធ្វើឱ្យ VM និង Host ធ្វើការជាមួយគ្នាបានល្អ។'
    },
    {
      question: 'តើ Virtual Machine អាចប្រើប្រាស់ RAM លើសពីអ្វីដែលម៉ាស៊ីនពិតមានដែរឬទេ?',
      options: ['បាន ព្រោះវាជារបស់និម្មិត', 'មិនបានទេ វាប្រើធនធានពិតរបស់ម៉ាស៊ីន Host', 'បាន តែត្រូវមាន Internet លឿន', 'មិនច្បាស់'],
      correct: 1,
      explanation: 'VM ប្រើប្រាស់ Physical RAM របស់ម៉ាស៊ីនពិត បើម៉ាស៊ីនពិតមាន 8GB អ្នកមិនអាចឱ្យ VM ប្រើ 16GB បានទេ។'
    },
    {
      question: 'តើពាក្យ "Host OS" សំដៅលើអ្វី?',
      options: ['OS ដែលដំឡើងក្នុង VM', 'OS ពិតដែលដំឡើងលើ Hardware', 'Server របស់ Microsoft', 'មេរោគ'],
      correct: 1,
      explanation: 'Host OS គឺជាម្ចាស់ផ្ទះ (ម៉ាស៊ីនពិត) ចំណែកក្នុង VM ហៅថា Guest OS។'
    },
    {
      question: 'តើអ្វីជាគ្រោះថ្នាក់បំផុតនៃការប្រើ Type-1 Hypervisor?',
      options: ['វាដើរយឺត', 'វាពិបាកដំឡើង', 'បើម៉ាស៊ីនពិតខូច នោះរាល់ VMs ទាំងអស់នឹងរលត់', 'វាមិនគាំទ្រ Linux'],
      correct: 2,
      explanation: 'ដោយសារ VMs ទាំងអស់នៅលើ Hardware តែមួយ បើ Hardware មានបញ្ហា នោះគ្រប់ Server នឹងដាច់ទាំងអស់។'
    },
    {
      question: 'តើ VirtualBox ជាកម្មវិធីប្រភេទណា?',
      options: ['Paid Software', 'Open Source/Free', 'Windows Only', 'Driver'],
      correct: 1,
      explanation: 'Oracle VirtualBox គឺជាកម្មវិធីសេរី និងឥតគិតថ្លៃ (Open Source)។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យ VM ប្រើ Internet បានតែមិនឱ្យឧបករណ៍ផ្សេងឃើញ VM នោះ តើត្រូវប្រើ Mode អ្វី?',
      options: ['Bridged', 'NAT', 'Internal', 'Isolated'],
      correct: 1,
      explanation: 'NAT (Network Address Translation) លាក់ VM នៅក្រោយ IP របស់ម៉ាស៊ីនពិត។'
    },
    {
      question: 'តើ Virtualization ជួយដល់បរិស្ថាន (Green IT) យ៉ាងដូចម្តេច?',
      options: ['ធ្វើឱ្យកុំព្យូទ័រមិនឡើងកម្តៅ', 'កាត់បន្ថយការទិញ Hardware ច្រើន ដែលជួយសន្សំសំចៃអគ្គិសនី', 'វាប្រើថាមពលព្រះអាទិត្យ', 'មិនជួយអ្វីទេ'],
      correct: 1,
      explanation: 'ការប្រើ Server តែមួយសម្រាប់ដំណើរការសេវាកម្មច្រើន ជួយកាត់បន្ថយការប្រើប្រាស់ភ្លើង និងកន្លែងផ្ទុក។'
    }
  ],
  lab: {
    task: `
អនុវត្តការបង្កើត និងគ្រប់គ្រង Virtual Machine។

**តម្រូវការ:**
1. ដំឡើង **VirtualBox** ឬ **VMware Player** លើកុំព្យូទ័ររបស់អ្នក។
2. បង្កើត VM ថ្មីមួយសម្រាប់ **Ubuntu Linux** (ប្រើ RAM 2GB)។
3. មុនពេលចាប់ផ្តើមដំឡើង សូមសាកល្បងយក **Snapshot** មួយ។
4. ចូលទៅកាន់ Settings រួចប្តូរ Network ពី **NAT** ទៅ **Bridged** រួចសង្កេតមើល IP Address ក្នុង VM (ប្រើ command \`ip a\`)។
5. សាកល្បងដំឡើង Guest Additions រួចសាកល្បងអូស File ពី Desktop ចូលទៅក្នុង VM។
`,
    solution: `
របាយការណ៍សង្ខេប៖
- ការបង្កើត VM ជោគជ័យ និងយល់ពីការបែងចែក RAM។
- ឃើញថា Bridged mode ផ្តល់ IP ក្នុង Class តែមួយជាមួយម៉ាស៊ីនពិត។
- Guest Additions ធ្វើឱ្យការប្រើប្រាស់ VM មានភាពងាយស្រួលដូចម៉ាស៊ីនពិត។
- ការយល់ដឹង៖ Virtualization គឺជាជំនាញចាំបាច់បំផុតសម្រាប់ Cloud Computing និង Cybersecurity។
`
  }
};

export default VirtualizationContent;