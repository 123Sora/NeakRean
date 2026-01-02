import type { LessonContent } from '../../../../types/LessonTypes';

const VirtualNetworkingContent: LessonContent = {
  title: 'បណ្តាញតភ្ជាប់និម្មិត (Virtual Networking)',
  objectives: [
    'យល់ពីរបៀបដែល Virtual Switch ធ្វើការក្នុង Hypervisor',
    'បែងចែកភាពខុសគ្នារវាង NAT, Bridged, និង Host-Only networking',
    'ចេះកំណត់រចនាសម្ព័ន្ធ Static IP ឱ្យ Virtual Machines',
    'យល់ដឹងពីការប្រើប្រាស់ Virtual Network Editor',
    'ចេះប្រើប្រាស់ Port Forwarding ដើម្បីឱ្យខាងក្រៅចូលប្រើ VM បាន'
  ],
  content: `
# ការតភ្ជាប់បណ្តាញក្នុងពិភពនិម្មិត 🌐🔗

---

នៅក្នុងពិភពពិត យើងប្រើខ្សែ LAN និង Switch ដើម្បីតភ្ជាប់កុំព្យូទ័រ។ នៅក្នុងពិភពនិម្មិត Hypervisor (VMware/VirtualBox) បង្កើត **Virtual Switch** និង **Virtual Network Adapters** ដើម្បីឱ្យ VMs អាចទាក់ទងគ្នាបាន។

---

## 1. ប្រភេទនៃ Network Modes សំខាន់ៗ

ការយល់ដឹងពី Mode នីមួយៗគឺជារឿងចាំបាច់បំផុតសម្រាប់ IT Admin៖

* **Bridged Networking:** VM ភ្ជាប់ទៅកាន់ Physical Network ផ្ទាល់។ វាទទួលបាន IP ពី Router ដូចម៉ាស៊ីនពិត។ ឧបករណ៍ផ្សេងៗក្នុងផ្ទះអាចមើលឃើញ VM នោះ។
* **NAT (Network Address Translation):** VM ជ្រកក្រោម IP របស់ម៉ាស៊ីនពិត (Host)។ វាអាចប្រើ Internet បាន តែឧបករណ៍ខាងក្រៅមិនអាចចូលមើល VM នោះបានទេ (សុវត្ថិភាពខ្ពស់)។
* **Host-Only Networking:** VM អាចទាក់ទងបានតែជាមួយម៉ាស៊ីនពិត និង VM ផ្សេងទៀតក្នុងម៉ាស៊ីនតែមួយប៉ុណ្ណោះ។ វាមិនអាចប្រើ Internet បានទេ។
* **Internal / Private Network:** VM អាចទាក់ទងគ្នាបានតែរវាង VM និង VM។ សូម្បីតែម៉ាស៊ីនពិត (Host) ក៏មិនអាចមើលឃើញវាដែរ។



---

## 2. Virtual Network Editor

ទាំង VMware និង VirtualBox មានឧបករណ៍សម្រាប់គ្រប់គ្រងបណ្តាញ៖
- **VMware:** ប្រើ *Virtual Network Editor* (VMnet0, VMnet1, VMnet8)។
- **VirtualBox:** ប្រើ *Network Manager* ដើម្បីបង្កើត DHCP Server សម្រាប់ VMs។

---

## 3. Port Forwarding (ការបញ្ជូនបន្តរន្ធសញ្ញា)

ប្រសិនបើអ្នកប្រើ **NAT** ប៉ុន្តែអ្នកចង់ឱ្យមិត្តភក្តិចូលមកមើល Website ដែលអ្នកកំពុងតេស្តក្នុង VM អ្នកត្រូវប្រើ **Port Forwarding**។
វាគឺជាការប្រាប់ម៉ាស៊ីនពិតថា៖ *"បើមានគេមកតាម Port 8080 របស់ខ្ញុំ សូមបញ្ជូនគេទៅកាន់ Port 80 របស់ VM ទៅ"*។

---

## 4. ការត្រួតពិនិត្យការតភ្ជាប់ (Testing Connectivity)

ដើម្បីដឹងថាបណ្តាញដំណើរការឬអត់ យើងប្រើ Command៖
1. **ip a / ifconfig:** មើល IP Address ក្នុង VM។
2. **ping:** តេស្តការតភ្ជាប់ (ឧទាហរណ៍៖ \`ping 8.8.8.8\`)។
3. **nslookup:** តេស្តការបកប្រែឈ្មោះ Domain។
`,
  examples: [
    `### ឧទាហរណ៍៖ ការបង្កើត Isolated Lab សម្រាប់តេស្តមេរោគ

**ស្ថានភាព៖** អ្នកចង់តេស្តមេរោគក្នុង VM តែខ្លាចវាឆ្លងចូលកុំព្យូទ័រពិត ឬឆ្លងតាម Network ផ្ទះ។

**ជំហាន:**
1. ចូលទៅកាន់ Settings របស់ VM។
2. ប្តូរ Network Adapter ទៅជា **Internal Network**។
3. ឥឡូវនេះ VM នោះដាច់ដោយឡែកពីលោកខាងក្រៅទាំងស្រុង (Air-gapped)។
`,
    `### ឧទាហរណ៍៖ ការប្រើ Port Forwarding ក្នុង VirtualBox

**ជំហាន:**
1. កំណត់ Network ជា **NAT**។
2. ចូលទៅកាន់ Advanced > **Port Forwarding**។
3. បន្ថែម Rule: Host Port: \`2222\`, Guest Port: \`22\` (SSH)។
4. ឥឡូវអ្នកអាចប្រើម៉ាស៊ីនពិតដើម្បីបញ្ជា VM តាមរយៈ \`localhost:2222\`។
`
  ],
  quiz: [
    {
      question: 'តើ Network Mode មួយណាដែលធ្វើឱ្យ VM មើលទៅដូចជាកុំព្យូទ័រពិតមួយទៀតនៅក្នុងបណ្តាញផ្ទះ?',
      options: ['NAT', 'Bridged', 'Host-Only', 'Internal'],
      correct: 1,
      explanation: 'Bridged Mode ភ្ជាប់ VM ទៅកាន់ Physical Switch/Router ផ្ទាល់តែម្តង។'
    },
    {
      question: 'ហេតុអ្វីបានជា NAT ត្រូវបានប្រើជា Default ក្នុង Hypervisor ភាគច្រើន?',
      options: ['ព្រោះវាលឿនបំផុត', 'ព្រោះវាផ្តល់សុវត្ថិភាពដោយលាក់ VM នៅក្រោយ Host IP', 'ព្រោះវាមិនត្រូវការ IP Address', 'ព្រោះវាមិនប្រើ Internet'],
      correct: 1,
      explanation: 'NAT ការពារ VM ពីការចូលប្រើដោយផ្ទាល់ពីឧបករណ៍ខាងក្រៅក្នុងបណ្តាញ។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យ VM ពីរអាចទាក់ទងគ្នាបាន តែមិនឱ្យម៉ាស៊ីនពិតដឹង តើត្រូវប្រើ Mode អ្វី?',
      options: ['Bridged', 'NAT', 'Internal Network', 'Host-Only'],
      correct: 2,
      explanation: 'Internal Network បង្កើតបណ្តាញឡូហ្សិកដែលមានតែរវាង VMs ប៉ុណ្ណោះ។'
    },
    {
      question: 'តើអ្វីទៅជាតួនាទីរបស់ "Port Forwarding"?',
      options: ['ប្តូរ IP Address', 'អនុញ្ញាតឱ្យ Traffic ពីខាងក្រៅចូលទៅកាន់ VM ដែលប្រើ NAT', 'ធ្វើឱ្យ Internet លឿនជាងមុន', 'លុប Firewall'],
      correct: 1,
      explanation: 'វាបញ្ជូនបន្ត Traffic ពី Port របស់ Host ទៅកាន់ Port របស់ Guest (VM)។'
    },
    {
      question: 'តើក្នុង VMware, "VMnet8" ជាធម្មតាត្រូវបានប្រើសម្រាប់អ្វី?',
      options: ['Bridged', 'NAT', 'Host-Only', 'Bluetooth'],
      correct: 1,
      explanation: 'តាមស្តង់ដារ VMware, VMnet8 ត្រូវបានកំណត់ទុកសម្រាប់ NAT Networking។'
    },
    {
      question: 'តើ Command មួយណាដែលប្រើសម្រាប់មើល IP Address ក្នុង Linux VM?',
      options: ['ipconfig', 'ip a', 'get-ip', 'show-net'],
      correct: 1,
      explanation: '\`ip a\` (ឬ \`ifconfig\`) គឺជា Command ស្តង់ដារសម្រាប់ពិនិត្យ Network Interface ក្នុង Linux។'
    },
    {
      question: 'ប្រសិនបើអ្នក Ping ទៅកាន់ 8.8.8.8 ជោគជ័យ តែ Ping ទៅ google.com មិនដើរ តើបញ្ហាមកពីអ្វី?',
      options: ['ខូច Card LAN', 'បញ្ហា DNS', 'គ្មាន Internet', 'VM គាំង'],
      correct: 1,
      explanation: 'បើ Ping លេខដើរ តែឈ្មោះមិនដើរ មានន័យថាប្រព័ន្ធបកប្រែឈ្មោះ (DNS) មានបញ្ហា។'
    },
    {
      question: 'ក្នុង Host-Only Mode តើ VM អាចប្រើ Internet បានដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បាន តែត្រូវប្រើខ្សែ LAN', 'បាន តែយឺត'],
      correct: 1,
      explanation: 'Host-Only បង្កើតបណ្តាញដែលកាត់ផ្តាច់ពី Gateway ខាងក្រៅ។'
    },
    {
      question: 'តើអ្វីទៅជា "MAC Address" របស់ VM?',
      options: ['លេខសម្គាល់ Software', 'អាសយដ្ឋាន Hardware និម្មិតតែមួយគត់សម្រាប់ Network Card', 'លេខកូដសោរ Windows', 'ឈ្មោះរបស់ VM'],
      correct: 1,
      explanation: 'ទោះជា VM ក៏វាត្រូវការ MAC Address ដើម្បីឱ្យ Switch អាចបញ្ជូន Data ទៅចំគោលដៅដែរ។'
    },
    {
      question: 'តើ DHCP Server ក្នុង Virtual Networking ធ្វើអ្វី?',
      options: ['លុបមេរោគ', 'ចែក IP Address ឱ្យ VMs ដោយស្វ័យប្រវត្តិ', 'ប្តូរឈ្មោះកុំព្យូទ័រ', 'បង្កើនល្បឿន CPU'],
      correct: 1,
      explanation: 'DHCP ជួយឱ្យយើងមិនចាំបាច់កំណត់ IP ដោយដៃរាល់ពេលបង្កើត VM ថ្មី។'
    }
  ],
  lab: {
    task: `
អនុវត្តការកំណត់រចនាសម្ព័ន្ធបណ្តាញសម្រាប់ Virtual Lab។

**តម្រូវការ:**
1. បើក VM មួយ (Windows ឬ Linux)។
2. កំណត់ Network ជា **NAT** រួចសាកល្បងបើក Google ក្នុង VM (គួរតែដើរ)។
3. ប្តូរ Network ទៅជា **Host-Only** រួចសាកល្បង Ping ពីម៉ាស៊ីនពិតទៅកាន់ IP របស់ VM។
4. បង្កើត **Internal Network** ឈ្មោះ "Lab1" រួចដាក់ VM ចំនួនពីរចូលក្នុងបណ្តាញនេះ។
5. សាកល្បងកំណត់ Static IP ឱ្យ VM ទាំងពីរ (ឧទាហរណ៍៖ 192.168.10.1 និង 192.168.10.2) រួច Ping គ្នាទៅវិញទៅមក។
`,
    solution: `
របាយការណ៍សង្ខេប៖
- យល់ដឹងពីរបៀបដែល VM ទទួលបាន IP ខុសៗគ្នាតាម Mode នីមួយៗ។
- អាចតភ្ជាប់ VM ពីរឱ្យស្គាល់គ្នាដោយជោគជ័យក្នុង Internal Network។
- ការយល់ដឹង៖ ការគ្រប់គ្រង Virtual Networking ជួយឱ្យយើងអាចបង្កើត System ស្មុគស្មាញ (ដូចជា Domain Controller និង Client) ក្នុងម៉ាស៊ីនតែមួយ។
`
  }
};

export default VirtualNetworkingContent;