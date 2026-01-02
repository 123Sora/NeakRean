import type { LessonContent } from '../../../../types/LessonTypes';

const StackVsHeapContent: LessonContent = {
  title: 'ការគ្រប់គ្រងអង្គចងចាំ៖ Stack vs. Heap Memory',
  objectives: [
    'យល់ពីរបៀបដែល Operating System បែងចែក RAM ឱ្យកម្មវិធី',
    'ស្គាល់និយមន័យ និងលក្ខណៈសម្បត្តិនៃ Stack Memory',
    'ស្គាល់និយមន័យ និងលក្ខណៈសម្បត្តិនៃ Heap Memory',
    'បែងចែកភាពខុសគ្នារវាង Static Allocation និង Dynamic Allocation',
    'យល់ដឹងពីបញ្ហា Stack Overflow និង Memory Leaks'
  ],
  content: `
# តើទិន្នន័យរស់នៅទីណា? ស្វែងយល់ពី Stack និង Heap 🧠💾

---

នៅពេលកម្មវិធីមួយដំណើរការ (Process) វាត្រូវការកន្លែងនៅក្នុង RAM ដើម្បីទុកទិន្នន័យបណ្តោះអាសន្ន។ OS បែងចែកការគ្រប់គ្រង RAM នោះជាពីរផ្នែកធំៗគឺ **Stack** និង **Heap**។

---

## 1. Stack Memory (រៀបរយ និងលឿន)

**Stack** គឺជាផ្នែកនៃ RAM ដែលរៀបចំទិន្នន័យជាជួរៗ (ដូចជាការដាក់ចានស៊ុតលើគ្នា)។ វាប្រើគោលការណ៍ **LIFO (Last-In, First-Out)**។

* **អ្វីដែលនៅក្នុង Stack:** Local variables (ចំនួនលេខតូចៗ), Function calls, និង Pointer ទៅកាន់ Heap។
* **លក្ខណៈពិសេស:** * ល្បឿនលឿនខ្លាំង។
    * ទំហំមានកំណត់ (តូច)។
    * OS ជាអ្នកគ្រប់គ្រងការលុបទិន្នន័យដោយស្វ័យប្រវត្តិ (នៅពេលចប់ Function)។



---

## 2. Heap Memory (សេរី និងធំ)

**Heap** គឺជាផ្នែកនៃ RAM ដែលមានទំហំធំ និងមិនមានរបៀបរៀបរយជាក់លាក់ (ដូចជាគំនរខ្សាច់)។

* **អ្វីដែលនៅក្នុង Heap:** Objects ធំៗ, Arrays, និងទិន្នន័យដែលកម្មវិធីមិនដឹងទំហំច្បាស់លាស់នៅពេលចាប់ផ្តើម។
* **លក្ខណៈពិសេស:** * ទំហំធំ (តាមទំហំ RAM ដែលនៅសល់)។
    * ល្បឿនយឺតជាង Stack បន្តិច។
    * អ្នកសរសេរកម្មវិធី (Programmer) ឬ Garbage Collector ជាអ្នកគ្រប់គ្រងការលុបទិន្នន័យ។



---

## 3. ការប្រៀបធៀបសង្ខេប

| ចំណុចប្រៀបធៀប | Stack Memory | Heap Memory |
| :--- | :--- | :--- |
| **ល្បឿន** | លឿនខ្លាំង | យឺតជាង Stack |
| **ការគ្រប់គ្រង** | OS ធ្វើដោយស្វ័យប្រវត្តិ | កម្មវិធី/Programmer ធ្វើ |
| **ទំហំ** | តូច និងមានកំណត់ | ធំ (Dynamic) |
| **រចនាសម្ព័ន្ធ** | LIFO (មានលំដាប់) | គ្មានលំដាប់ (Random Access) |

---

## 4. បញ្ហាដែលកើតមានក្នុង Memory

1.  **Stack Overflow:** កើតឡើងនៅពេល Stack ពេញ (ឧទាហរណ៍៖ ការហៅ Function ខ្លួនឯងមិនចេះចប់ ឬ Recursive function)។
2.  **Memory Leak:** កើតឡើងនៅក្នុង **Heap** នៅពេលកម្មវិធីបង្កើតទិន្នន័យហើយ តែមិនព្រមលុបវិញ ធ្វើឱ្យ RAM កាន់តែថយចុះៗ រហូតដល់គាំងម៉ាស៊ីន។


`,
  examples: [
    `### ឧទាហរណ៍៖ ការមើលឃើញក្នុងកូដ (Pseudo-code)

\`\`\`c
void myFunction() {
   int x = 10;          // x ស្ថិតនៅក្នុង Stack (លឿន និងលុបវិញភ្លាមពេលចប់ Function)
   
   int* arr = new int[1000]; // Array ធំនេះស្ថិតនៅក្នុង Heap 
                             // ប៉ុន្តែ Pointer 'arr' ស្ថិតនៅក្នុង Stack
}
\`\`\`
`,
    `### ឧទាហរណ៍ក្នុងជីវភាពរស់នៅ
- **Stack:** ដូចជាសៀវភៅដែលអ្នកដាក់លើតុដើម្បីអានបណ្តោះអាសន្ន។ អ្នកអានចប់ អ្នកដកចេញភ្លាម។
- **Heap:** ដូចជាឃ្លាំងទំនិញធំមួយ។ អ្នកអាចដាក់អីក៏បាន ច្រើនប៉ុណ្ណាក៏បាន តែអ្នកត្រូវចំណាយពេលដើររក ហើយបើអ្នកដឹកទំនិញចូលហើយមិនដឹកចេញ ឃ្លាំងនឹងពេញ។
`
  ],
  quiz: [
    {
      question: 'តើគោលការណ៍រៀបចំទិន្នន័យរបស់ Stack ហៅថាអ្វី?',
      options: ['FIFO (First-In, First-Out)', 'LIFO (Last-In, First-Out)', 'Random Access', 'Linear Search'],
      correct: 1,
      explanation: 'LIFO មានន័យថាទិន្នន័យដែលដាក់ចូលក្រោយគេ នឹងត្រូវដកចេញមុនគេ។'
    },
    {
      question: 'តើទិន្នន័យប្រភេទណាដែលរស់នៅក្នុង Heap Memory?',
      options: ['Local variables', 'Function calls', 'Objects ធំៗ និង Dynamic Arrays', 'CPU Instructions'],
      correct: 2,
      explanation: 'Heap ប្រើសម្រាប់ផ្ទុកទិន្នន័យដែលមានទំហំធំ និងមានអាយុកាលវែង។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិម្យ៉ាងរបស់ Stack បើធៀបនឹង Heap?',
      options: ['មានទំហំធំជាង', 'មានល្បឿនលឿនជាង', 'មិនងាយនឹង Overflow', 'ផ្ទុកទិន្នន័យបានច្រើនប្រភេទ'],
      correct: 1,
      explanation: 'ដោយសារវាមានរចនាសម្ព័ន្ធច្បាស់លាស់ CPU អាចទាញយកទិន្នន័យពី Stack បានលឿនខ្លាំង។'
    },
    {
      question: 'តើ "Memory Leak" ជាធម្មតាកើតឡើងនៅលើផ្នែកណា?',
      options: ['CPU Register', 'Stack', 'Heap', 'Hard Disk'],
      correct: 2,
      explanation: 'Memory Leak កើតឡើងនៅពេលកម្មវិធីកក់ RAM ក្នុង Heap ហើយមិនព្រមព្រលែងវិញ។'
    },
    {
      question: 'តើមានអ្វីកើតឡើងប្រសិនបើអ្នកប្រើ Recursive function ដែលគ្មានចំណុចបញ្ចប់?',
      options: ['Memory Leak', 'Stack Overflow', 'Heap Corruption', 'Disk Full'],
      correct: 1,
      explanation: 'រាល់ពេលហៅ Function វានឹងប្រើប្រាស់ Stack Space បើហៅមិនឈប់ វានឹងហៀរ (Overflow)។'
    },
    {
      question: 'តើអ្នកណាជាអ្នកលុបទិន្នន័យចេញពី Stack នៅពេលកម្មវិធីដើរចប់?',
      options: ['អ្នកសរសេរកម្មវិធី', 'Operating System/CPU', 'User', 'Hard Drive'],
      correct: 1,
      explanation: 'Stack ត្រូវបានគ្រប់គ្រងដោយស្វ័យប្រវត្តិដោយ Hardware និង OS។'
    },
    {
      question: 'តើ Pointer (អាសយដ្ឋានអង្គចងចាំ) ជាធម្មតាស្ថិតនៅក្នុងផ្នែកណា?',
      options: ['Stack', 'Heap', 'Virtual Memory', 'Cache'],
      correct: 0,
      explanation: 'Pointer គឺជា Variable តូចមួយ ដូច្នេះវាស្ថិតក្នុង Stack ដើម្បីចង្អុលទៅទិន្នន័យធំក្នុង Heap។'
    },
    {
      question: 'តើពាក្យ "Dynamic Memory Allocation" សំដៅលើអ្វី?',
      options: ['ការប្រើប្រាស់ Stack', 'ការប្រើប្រាស់ Heap', 'ការប្រើប្រាស់ SSD', 'ការប្រើប្រាស់ Cloud'],
      correct: 1,
      explanation: 'Dynamic មានន័យថាការកក់ RAM តាមតម្រូវការជាក់ស្តែងក្នុង Heap ពេលកម្មវិធីកំពុងដើរ។'
    },
    {
      question: 'ប្រសិនបើកម្មវិធីរបស់អ្នកត្រូវការផ្ទុកទិន្នន័យ 5GB តើវាគួរស្ថិតក្នុង Stack ឬ Heap?',
      options: ['Stack ព្រោះវាលឿន', 'Heap ព្រោះវាមានទំហំធំ', 'ទាំងពីរ', 'មិនអាចផ្ទុកបានទេ'],
      correct: 1,
      explanation: 'Stack មានទំហំតូចណាស់ (ប្រហែល 1MB-8MB ប៉ុណ្ណោះ) ដូច្នេះទិន្នន័យធំត្រូវតែក្នុង Heap។'
    },
    {
      question: 'តើកម្មវិធី "Garbage Collector" ក្នុងភាសាដូចជា Java ឬ C# ជួយអ្វី?',
      options: ['សម្អាតមេរោគ', 'លុបទិន្នន័យក្នុង Heap ដែលលែងប្រើដោយស្វ័យប្រវត្តិ', 'ធ្វើឱ្យ CPU ត្រជាក់', 'លុប File ក្នុង Trash'],
      correct: 1,
      explanation: 'Garbage Collector ជួយការពារកុំឱ្យមាន Memory Leak ក្នុង Heap។'
    }
  ],
  lab: {
    task: `
វិភាគការប្រើប្រាស់ Memory តាមរយៈ Task Manager។

**តម្រូវការ:**
1. បើក **Task Manager** រួចចូលទៅកាន់ Tab **Performance > Memory**។
2. សង្កេតមើលក្រាហ្វ "In Use" និង "Available"។
3. បើកកម្មវិធីដែលស៊ី RAM ខ្លាំង (ឧទាហរណ៍៖ Chrome ដែលមាន Tabs ច្រើន)។
4. សង្កេតមើលថាតើ RAM កើនឡើងកម្រិតណា? នេះគឺជាសកម្មភាពនៅក្នុង **Heap**។
5. បិទ Chrome រួចមើលថាតើ RAM ត្រឡប់មកវិញភ្លាមៗឬទេ? បើមិនមកវិញទេ នោះអាចមាន **Memory Leak**។
`,
    solution: `
របាយការណ៍សង្ខេប៖
- RAM កើនឡើងខ្លាំងពេលបើក Chrome ព្រោះវាបង្កើត Objects ច្រើនក្នុង Heap។
- នៅពេលបិទកម្មវិធី OS គួរតែទាញយក Heap Memory មកវិញ។
- ការយល់ដឹង៖ Stack លឿនតែតូច Heap យឺតតែធំ។ ការយល់ដឹងនេះជួយឱ្យអ្នកដឹងពីមូលហេតុដែលកម្មវិធី "ស៊ី RAM"។
`
  }
};

export default StackVsHeapContent;