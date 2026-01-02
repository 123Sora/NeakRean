import type { LessonContent } from '../../../../types/LessonTypes';

const EssentialCommandsContent: LessonContent = {
  title: 'ពាក្យបញ្ជាមូលដ្ឋានដែលត្រូវតែស្គាល់ (Essential CLI Commands)',
  objectives: [
    'ស្ទាត់ជំនាញក្នុងការប្រើប្រាស់ពាក្យបញ្ជាគ្រប់គ្រង File និង Folder',
    'យល់ដឹងពីរបៀបប្រើ Wildcards (*, ?) ដើម្បីស្វែងរកទិន្នន័យ',
    'ចេះប្រើប្រាស់ពាក្យបញ្ជាអានឯកសារ (cat, less, tail)',
    'យល់ដឹងពីការប្រើប្រាស់ sudo ដើម្បីទទួលបានសិទ្ធិជា Administrator',
    'ចេះប្រើប្រាស់ Command manual (man) ដើម្បីរៀនដោយខ្លួនឯង'
  ],
  content: `
# ការគ្រប់គ្រង Linux តាមរយៈ Terminal ⌨️🚀

---

នៅក្នុងពិភព Linux ការប្រើប្រាស់ Mouse គឺមានកម្រិត។ អ្នកបច្ចេកទេសពិតប្រាកដប្រើប្រាស់ **Command Line Interface (CLI)** ដើម្បីធ្វើការងារឱ្យបានលឿន និងមានប្រសិទ្ធភាព។

---

## 1. ការគ្រប់គ្រង File និង Folder (CRUD Operations)

នេះគឺជាពាក្យបញ្ជាដែលអ្នកនឹងត្រូវប្រើរាល់ថ្ងៃ៖

* **mkdir:** (Make Directory) បង្កើត Folder ថ្មី។
* **touch:** បង្កើត File ទទេរថ្មីមួយ។
* **cp:** (Copy) ចម្លង File ឬ Folder។
* **mv:** (Move/Rename) ផ្លាស់ទី ឬប្តូរឈ្មោះ File/Folder។
* **rm:** (Remove) លុប File។ ប្រុងប្រយ័ត្ន៖ Linux គ្មានធុងសំរាម (Recycle Bin) សម្រាប់ CLI ទេ។



---

## 2. ការអាន និងពិនិត្យមើលខ្លឹមសារឯកសារ

យើងមិនចាំបាច់បើកកម្មវិធី Notepad រាល់ពេលចង់មើលអត្ថបទនោះទេ៖
* **cat:** បង្ហាញខ្លឹមសារអត្ថបទទាំងអស់ក្នុងពេលតែមួយ។
* **less:** អនុញ្ញាតឱ្យយើងអានអត្ថបទវែងៗ ដោយអាច Scroll ចុះឡើងបាន។
* **head / tail:** បង្ហាញតែបន្ទាត់ដើមគេ ឬបន្ទាត់ចុងក្រោយគេ (មានប្រយោជន៍ខ្លាំងសម្រាប់មើល Log)។

---

## 3. សិទ្ធិអំណាច និងការស្វែងរកជំនួយ

* **sudo:** (SuperUser Do) ប្រើដើម្បីដើរតួជា Administrator ពេលចង់ដំឡើងកម្មវិធី ឬកែ Settings។
* **man:** (Manual) បង្ហាញសៀវភៅណែនាំរបស់ Command នីមួយៗ។ ឧទាហរណ៍៖ \`man ls\`។

---

## 4. បច្ចេកទេសប្រើ Wildcards

Wildcards ជួយឱ្យយើងធ្វើការជាមួយ File ច្រើនក្នុងពេលតែមួយ៖
* \`\*\` : តំណាងឱ្យអក្សរអ្វីក៏បាន ចំនួនប៉ុន្មានក៏បាន។
    * ឧទាហរណ៍៖ \`rm *.txt\` (លុបរាល់ File ណាដែលមានកន្ទុយ .txt ទាំងអស់)។


`,
  examples: [
    `### ឧទាហរណ៍៖ ការបង្កើតរចនាសម្ព័ន្ធគម្រោង (Project Structure)

**ស្ថានភាព៖** អ្នកចង់បង្កើត Folder សម្រាប់ Web Project ថ្មី។

**ជំហាន:**
1. \`mkdir my_website\` (បង្កើត Folder ធំ)
2. \`cd my_website\` (ចូលទៅក្នុង Folder នោះ)
3. \`mkdir css js images\` (បង្កើត ៣ Folder ក្នុងពេលតែមួយ)
4. \`touch index.html style.css\` (បង្កើត File ពីរទទេរ)
5. \`ls -R\` (មើលរចនាសម្ព័ន្ធដែលបានបង្កើត)
`,
    `### ឧទាហរណ៍៖ ការតាមដាន Log ភ្លាមៗ (Real-time monitoring)

**ស្ថានភាព៖** អ្នកចង់ឃើញរាល់សកម្មភាពដែលកំពុងកើតឡើងក្នុង Server ផ្ទាល់ៗ។

**ជំហាន:**
1. ប្រើ Command: \`tail -f /var/log/syslog\`
2. រាល់ពេលមានបញ្ហាកើតឡើង វានឹងលោតអក្សរមកលើ Screen ភ្លាមៗ។
`
  ],
  quiz: [
    {
      question: 'តើ Command មួយណាប្រើសម្រាប់បង្កើត Folder ថ្មី?',
      options: ['newdir', 'mkdir', 'touch', 'create'],
      correct: 1,
      explanation: 'mkdir តំណាងឱ្យ Make Directory។'
    },
    {
      question: 'តើ Command "touch" ប្រើសម្រាប់ធ្វើអ្វី?',
      options: ['លុប File', 'បង្កើត File ទទេរថ្មី', 'ប្តូរឈ្មោះ File', 'មើលខ្លឹមសារ File'],
      correct: 1,
      explanation: 'touch ត្រូវបានប្រើដើម្បីបង្កើតឯកសារថ្មីដោយមិនមានទិន្នន័យខាងក្នុង។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង "cp" និង "mv"?',
      options: ['cp លុបច្បាប់ដើម ចំណែក mv រក្សាទុក', 'cp ចម្លងទុកទាំងពីរ ចំណែក mv ផ្លាស់ទី (បាត់ពីកន្លែងចាស់)', 'ដូចគ្នា', 'mv ប្រើសម្រាប់តែ Folder'],
      correct: 1,
      explanation: 'cp (Copy) បង្កើតឯកសារថ្មីមួយទៀត ចំណែក mv (Move) គឺលើកឯកសារពីកន្លែងមួយទៅកន្លែងមួយទៀត។'
    },
    {
      question: 'តើត្រូវប្រើពាក្យអ្វីពីមុខ Command ដើម្បីទទួលបានសិទ្ធិជា Administrator?',
      options: ['admin', 'run-as', 'sudo', 'super'],
      correct: 2,
      explanation: 'sudo (SuperUser Do) ផ្តល់សិទ្ធិឱ្យអ្នកប្រើប្រាស់ធម្មតាអាចធ្វើការងាររបស់ Admin បាន។'
    },
    {
      question: 'តើ Command មួយណាប្រើសម្រាប់លុប File?',
      options: ['del', 'remove', 'rm', 'erase'],
      correct: 2,
      explanation: 'rm (Remove) ប្រើសម្រាប់លុបឯកសារ។ ត្រូវប្រុងប្រយ័ត្នព្រោះវាមិនមានធុងសំរាមទេ។'
    },
    {
      question: 'ដើម្បីមើលបន្ទាត់ចុងក្រោយគេនៃឯកសារ Log តើគួរប្រើ Command អ្វី?',
      options: ['head', 'tail', 'cat', 'less'],
      correct: 1,
      explanation: 'tail ប្រើសម្រាប់មើលផ្នែកខាងក្រោយ (កន្ទុយ) នៃឯកសារ។'
    },
    {
      question: 'តើ "rm -r" ប្រើសម្រាប់ធ្វើអ្វី?',
      options: ['លុប File តែមួយ', 'លុប Folder ព្រមទាំង File ទាំងអស់ដែលមាននៅក្នុងនោះ', 'អានឯកសារ', 'លុបមេរោគ'],
      correct: 1,
      explanation: 'Option -r (Recursive) អនុញ្ញាតឱ្យលុប Folder និងអ្វីៗទាំងអស់ដែលនៅក្នុង Folder នោះ។'
    },
    {
      question: 'តើ Command "man ls" នឹងបង្ហាញអ្វី?',
      options: ['បញ្ជីឈ្មោះ File', 'សៀវភៅណែនាំពីរបៀបប្រើ Command ls', 'លុប Command ls', 'ដំឡើង Command ls ឡើងវិញ'],
      correct: 1,
      explanation: 'man (Manual) បង្ហាញព័ត៌មានលម្អិត និងជម្រើស (Options) នៃ Command ណាមួយ។'
    },
    {
      question: 'តើ Wildcard "*" ក្នុង Command "rm *.jpg" មានន័យដូចម្តេច?',
      options: ['លុប File ឈ្មោះ star.jpg', 'លុបរាល់ File ទាំងអស់ដែលមានកន្ទុយ .jpg', 'លុបតែ File មួយគត់', 'រក្សាទុក File .jpg'],
      correct: 1,
      explanation: 'សញ្ញាផ្កាយ (*) តំណាងឱ្យឈ្មោះអ្វីក៏បាន។'
    },
    {
      question: 'តើ Command មួយណាដែលអនុញ្ញាតឱ្យអ្នកអានអត្ថបទវែងៗដោយអាច Scroll ចុះឡើងបាន?',
      options: ['cat', 'less', 'more-often', 'print'],
      correct: 1,
      explanation: 'less គឺជាកម្មវិធីអានអត្ថបទដែលងាយស្រួលជាង cat សម្រាប់ឯកសារធំៗ។'
    }
  ],
  lab: {
    task: `
អនុវត្តការគ្រប់គ្រងឯកសារតាមរយៈ Linux CLI។

**តម្រូវការ:**
1. បង្កើត Folder ឈ្មោះ \`Lab_Commands\`។
2. ចូលទៅក្នុង Folder នោះ រួចបង្កើត File ៣ គឺ \`note1.txt\`, \`note2.txt\`, និង \`photo.jpg\`។
3. ចម្លង (Copy) \`note1.txt\` ទៅជា \`note1_backup.txt\`។
4. សាកល្បងលុបរាល់ File ណាដែលមានកន្ទុយ \`.txt\` ដោយប្រើ Wildcard តែម្តងគត់។
5. ប្រើ \`ls\` ដើម្បីពិនិត្យមើលថាតើនៅសល់ File អ្វីខ្លះ?
`,
    solution: `
របាយការណ៍សង្ខេប៖
- បានបង្កើត Folder និង File ជោគជ័យ។
- ការប្រើ \`rm *.txt\` បានលុបឯកសារអត្ថបទទាំងអស់ ប៉ុន្តែទុក \`photo.jpg\` ឱ្យនៅដដែល។
- ការសង្កេត៖ CLI ជួយឱ្យយើងធ្វើការងារដែល Mouse ធ្វើមិនបាន (ដូចជាការ Filter លុបប្រភេទ File ជាក់លាក់ក្នុងពេលតែមួយ)។
`
  }
};

export default EssentialCommandsContent;