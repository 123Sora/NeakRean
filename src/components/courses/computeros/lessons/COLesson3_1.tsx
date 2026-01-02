import type { LessonContent } from '../../../../types/LessonTypes';

const LinuxFHSContent: LessonContent = {
  title: 'ស្វែងយល់ពីរបៀបរៀបចំឯកសារក្នុង Linux (FHS)',
  objectives: [
    'យល់ពីគោលការណ៍ "Everything is a file" របស់ Linux',
    'ស្គាល់រចនាសម្ព័ន្ធមែកធាង (Root Directory) នៃ Linux',
    'បែងចែកភាពខុសគ្នារវាង Folder សំខាន់ៗដូចជា /bin, /etc, និង /var',
    'យល់ដឹងពីកន្លែងដែល Linux រក្សាទុក User data និង Configuration',
    'ចេះប្រើប្រាស់ Command មូលដ្ឋានដើម្បីរុករកក្នុង Filesystem'
  ],
  content: `
# រចនាសម្ព័ន្ធឯកសារ Linux: លើសពី Drive C: 🐧📂

---

នៅក្នុង Windows យើងប្រើប្រាស់ Drive Letters (C:, D:) ដើម្បីបែងចែក Partition។ ប៉ុន្តែនៅក្នុង **Linux** អ្វីៗគ្រប់យ៉ាងចាប់ផ្តើមចេញពីចំណុចតែមួយគឺ **Root (/)**។ រចនាសម្ព័ន្ធនេះត្រូវបានកំណត់ដោយស្តង់ដារមួយហៅថា **Filesystem Hierarchy Standard (FHS)**។



---

## 1. ថតឯកសារ Root (/) និងមែកធាងសំខាន់ៗ

នេះគឺជាថតឯកសារ (Directories) ដែលអ្នកបច្ចេកទេសត្រូវតែស្គាល់៖

* ** / (Root):** ជាចំណុចកំពូលនៃ Filesystem។ គ្មានអ្វីនៅក្រៅពី Root ឡើយ។
* ** /bin & /sbin:** ផ្ទុកកម្មវិធីបញ្ជា (Binary Files) សម្រាប់ប្រើប្រាស់។ \`/sbin\` គឺសម្រាប់តែ Administrator (Root user) ប៉ុណ្ណោះ។
* ** /etc:** ជាកន្លែងផ្ទុក **Configuration Files** នៃប្រព័ន្ធទាំងមូល (ប្រៀបដូចជា Registry របស់ Windows)។
* ** /home:** ជាកន្លែងផ្ទុកឯកសារផ្ទាល់ខ្លួនរបស់អ្នកប្រើប្រាស់ (Desktop, Documents, Downloads)។
* ** /root:** ជា Home Directory ផ្ទាល់របស់ Superuser (Administrator)។
* ** /var:** ផ្ទុកទិន្នន័យដែលប្រែប្រួលញឹកញាប់ ដូចជា **Log files** និង Database។
* ** /tmp:** ផ្ទុកឯកសារបណ្តោះអាសន្ន (Temporary files) ដែលនឹងត្រូវលុបចោលពេល Restart ម៉ាស៊ីន។

---

## 2. គោលការណ៍ "Everything is a file"

នៅក្នុង Linux សូម្បីតែ Hardware ក៏ត្រូវបានតំណាងដោយឯកសារដែរ៖
* ** /dev:** ផ្ទុក Device files (ឧទាហរណ៍៖ \`/dev/sda\` គឺជា Hard disk)។
* ** /mnt & /media:** ជាកន្លែងសម្រាប់ Mount ឬភ្ជាប់ជាមួយ USB Flash ឬ External Drive។



---

## 3. ការរុករកក្នុង Filesystem (Navigation)

ដើម្បីដើរក្នុង Filesystem អ្នកត្រូវប្រើ Command មូលដ្ឋាន៖
1.  **pwd:** (Print Working Directory) មើលថាតើយើងកំពុងនៅទីណា។
2.  **ls:** (List) មើលបញ្ជីឯកសារក្នុង Folder។
3.  **cd:** (Change Directory) ផ្លាស់ប្តូរទីតាំង Folder។
`,
  examples: [
    `### ឧទាហរណ៍៖ ការស្វែងរក Log របស់ប្រព័ន្ធ

**ស្ថានភាព៖** អ្នកចង់ដឹងថាមាន Error អ្វីកើតឡើងក្នុង Linux Server។

**ជំហាន:**
1. បើក Terminal។
2. វាយ \`cd /var/log\`។
3. វាយ \`ls\` ដើម្បីមើលឯកសារ Log ទាំងអស់។
4. វាយ \`cat syslog\` ដើម្បីអានរាល់សកម្មភាពរបស់ប្រព័ន្ធ។
`,
    `### ឧទាហរណ៍៖ ការកែប្រែការកំណត់បណ្តាញ (Network Config)

**ជំហាន:**
1. រាល់ការកំណត់គឺស្ថិតនៅក្នុង \`/etc\`។
2. ប្រើ Command \`cd /etc\`។
3. រកមើល Folder ឈ្មោះ \`network\` ឬ \`netplan\` (អាស្រ័យលើប្រភេទ Linux)។
`
  ],
  quiz: [
    {
      question: 'តើនិមិត្តសញ្ញាមួយណាដែលតំណាងឱ្យ "Root Directory" ក្នុង Linux?',
      options: ['C:\\', '~', '/', '\\'],
      correct: 2,
      explanation: 'ក្នុង Linux, "/" គឺជាចំណុចចាប់ផ្តើមនៃរចនាសម្ព័ន្ធឯកសារទាំងមូល។'
    },
    {
      question: 'តើថត (Directory) មួយណាដែលផ្ទុក Configuration Files នៃប្រព័ន្ធ?',
      options: ['/bin', '/home', '/etc', '/dev'],
      correct: 2,
      explanation: '/etc គឺជាកន្លែងសម្រាប់ផ្ទុកឯកសារកំណត់រចនាសម្ព័ន្ធ (Settings)។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់មើល Log files តើអ្នកគួរចូលទៅកាន់ថតណា?',
      options: ['/var', '/tmp', '/sbin', '/usr'],
      correct: 0,
      explanation: '/var (Variable) ផ្ទុកទិន្នន័យដែលប្រែប្រួលដូចជា Logs និង Mail។'
    },
    {
      question: 'តើ "/home" ប្រើសម្រាប់អ្វី?',
      options: ['ទុកកម្មវិធីប្រព័ន្ធ', 'ទុកឯកសារផ្ទាល់ខ្លួនរបស់អ្នកប្រើប្រាស់', 'ទុកឯកសារបណ្តោះអាសន្ន', 'ទុក Driver'],
      correct: 1,
      explanation: '/home ផ្ទុក Folder ផ្ទាល់ខ្លួនរបស់ User ម្នាក់ៗ (ឧទាហរណ៍៖ /home/sophal)។'
    },
    {
      question: 'តើ Command មួយណាប្រើសម្រាប់មើលទីតាំងបច្ចុប្បន្នដែលអ្នកកំពុងស្ថិតនៅ?',
      options: ['ls', 'cd', 'pwd', 'whoami'],
      correct: 2,
      explanation: 'pwd តំណាងឱ្យ Print Working Directory។'
    },
    {
      question: 'តើអ្វីទៅជាអត្ថន័យនៃ "/bin"?',
      options: ['ធុងសំរាម (Trash)', 'កម្មវិធីបញ្ជាមូលដ្ឋាន (User Binaries)', 'ឯកសារ Boot', 'កន្លែងទុកមេរោគ'],
      correct: 1,
      explanation: '/bin ផ្ទុក Command សំខាន់ៗដែល User គ្រប់រូបអាចប្រើបានដូចជា ls, cp, mv។'
    },
    {
      question: 'តើ Hardware ដូចជា USB ឬ Hard Disk ត្រូវបានតំណាងនៅក្នុងថតណា?',
      options: ['/sys', '/dev', '/media', '/proc'],
      correct: 1,
      explanation: '/dev (Devices) ផ្ទុកឯកសារតំណាងឱ្យ Hardware ទាំងអស់។'
    },
    {
      question: 'តើ Folder មួយណាដែលនឹងត្រូវសម្អាតរាល់ពេល Restart ម៉ាស៊ីន?',
      options: ['/etc', '/var', '/tmp', '/root'],
      correct: 2,
      explanation: '/tmp ត្រូវបានប្រើសម្រាប់ទុកឯកសារបណ្តោះអាសន្ន (Temporary files)។'
    },
    {
      question: 'ក្នុង Linux តើ "Root User" និង "Root Directory" ដូចគ្នាដែរឬទេ?',
      options: ['ដូចគ្នា', 'មិនដូចគ្នា Root User គឺជា Admin ចំណែក Root Directory គឺជាទីតាំង /', 'ដូចគ្នា ព្រោះប្រើឈ្មោះ Root ដូចគ្នា', 'Root User រស់នៅក្នុង /etc'],
      correct: 1,
      explanation: 'Root User គឺជាអ្នកគ្រប់គ្រង ចំណែក Root Directory (/) គឺជាទីតាំងខ្ពស់បំផុតក្នុង Filesystem។'
    },
    {
      question: 'តើ Command "cd ~" នឹងនាំអ្នកទៅកាន់ទីណា?',
      options: ['ទៅកាន់ Root (/)', 'ទៅកាន់ថតផ្ទាល់ខ្លួន (Home Directory)', 'ទៅកាន់ Desktop', 'ត្រឡប់ទៅថតមុនវិញ'],
      correct: 1,
      explanation: 'និមិត្តសញ្ញា tilde (~) គឺជា Shortcut សម្រាប់ទៅកាន់ Home Directory របស់អ្នកប្រើប្រាស់។'
    }
  ],
  lab: {
    task: `
អនុវត្តការរុករកក្នុង Linux Filesystem តាមរយៈ Terminal។

**តម្រូវការ:**
1. បើក Linux Terminal។
2. ប្រើ \`pwd\` ដើម្បីមើលទីតាំងបច្ចុប្បន្ន។
3. ចូលទៅកាន់ Root Directory ដោយប្រើ \`cd /\` រួចវាយ \`ls\` ដើម្បីមើលថតឯកសារទាំងអស់។
4. ចូលទៅពិនិត្យមើលឯកសារក្នុង \`/etc\`។
5. ត្រឡប់មកកាន់ Home Directory វិញដោយប្រើ \`cd ~\`។
`,
    solution: `
របាយការណ៍សង្ខេប៖
- បានឃើញថតឯកសារដូចជា bin, etc, home, var... ស្ថិតនៅក្រោម /។
- បានយល់ថាការរៀបចំឯកសារក្នុង Linux គឺមានរបៀបរៀបរយតាមមុខងាររបស់វា។
- ការយល់ដឹង៖ ការដឹងពីទីតាំងឯកសារ ជួយឱ្យយើងងាយស្រួលក្នុងការជួសជុល Server។
`
  }
};

export default LinuxFHSContent;