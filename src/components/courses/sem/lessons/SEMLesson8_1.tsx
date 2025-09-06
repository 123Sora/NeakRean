import type { LessonContent } from '../../../../types/LessonTypes';

const SEMLesson8_1Content: LessonContent = {
  title: 'DevOps និងការធ្វើសមាហរណកម្មជាបន្តបន្ទាប់',
  objectives: [
    'យល់ដឹងពីគោលគំនិត DevOps និងវប្បធម៌របស់វា',
    'ស្គាល់ពីសារៈសំខាន់នៃ Continuous Integration (CI), Continuous Delivery (CD), និង Continuous Deployment (CD)',
    'រៀនពីរបៀបអនុវត្ត Pipeline CI/CD',
    'ស្គាល់ពីឧបករណ៍សំខាន់ៗដែលប្រើក្នុង DevOps',
    'អនុវត្តការរៀបចំ Pipeline សាមញ្ញ'
  ],
  content: `
# DevOps និងការធ្វើសមាហរណកម្មជាបន្តបន្ទាប់ 🔄

---

**DevOps** គឺជាការរួមបញ្ចូលគ្នានៃទស្សនវិជ្ជា វប្បធម៌ និងឧបករណ៍ដែលបង្កើនសមត្ថភាពរបស់ក្រុមហ៊ុនក្នុងការចែកចាយកម្មវិធី និងសេវាកម្មក្នុងល្បឿនលឿន។ វាជាស្ពានដែលភ្ជាប់រវាងក្រុមអភិវឌ្ឍន៍ (Dev) និងក្រុមប្រតិបត្តិការ (Ops)។

---

## 1. គោលគំនិត DevOps

- **វប្បធម៌ DevOps:** ផ្តោតលើការសហការ ការប្រាស្រ័យទាក់ទង និងការទទួលខុសត្រូវរួមគ្នារវាងក្រុម Dev និង Ops ។ ក្រុមទាំងពីរត្រូវធ្វើការជាមួយគ្នាពេញមួយវដ្តជីវិតអភិវឌ្ឍន៍ Software ។
- **គោលដៅ:** កាត់បន្ថយពេលវេលាពីការសរសេរកូដរហូតដល់ការដាក់ឱ្យប្រើប្រាស់ (Time-to-Market)។

---

## 2. Continuous Integration (CI), Continuous Delivery (CD)

- **Continuous Integration (CI):** ជាការអនុវត្តន៍ដែលអ្នកអភិវឌ្ឍន៍រួមបញ្ចូលកូដរបស់ពួកគេទៅក្នុង Repository មួយជាញឹកញាប់ (ឧទាហរណ៍: ថ្ងៃ)។ គ្រប់ការរួមបញ្ចូលគ្នានឹងធ្វើឱ្យការ Build និងការធ្វើតេស្តស្វ័យប្រវត្តិ។
  - **អត្ថប្រយោជន៍:** ជួយរកកំហុសបានលឿននិងការពារកំហុសពីការប្រមូលផ្តុំ។
- **Continuous Delivery (CD):** ជាដំណើរការស្វ័យប្រវត្តិកម្មដែលធានាថាកូដដែលបានធ្វើតេស្តរួចរាល់អាចត្រូវបានដាក់ឱ្យប្រើប្រាស់នៅពេលណាក៏បាន។
- **Continuous Deployment (CD):** ជាការបន្តពី CD ដែលកូដត្រូវបានដាក់ឱ្យប្រើប្រាស់ដោយស្វ័យប្រវត្តិទៅកាន់ Production environment ដោយមិនចាំបាច់មានការអនុញ្ញាតពីមនុស្ស។

---

## 3. Pipeline CI/CD

**Pipeline CI/CD** គឺជាដំណើរការស្វ័យប្រវត្តិកម្មពីការសរសេរកូដរហូតដល់ការដាក់ឱ្យប្រើប្រាស់។
- **Build:** ការចងក្រងកូដ។
- **Test:** ការធ្វើតេស្តស្វ័យប្រវត្តិ។
- **Package:** ការវេចខ្ចប់ Software ។
- **Deploy:** ការដាក់ឱ្យប្រើប្រាស់។

---

## 4. ឧបករណ៍សំខាន់ៗក្នុង DevOps

- **Git:** សម្រាប់ Version Control ។
- **Jenkins, GitLab CI/CD, CircleCI:** សម្រាប់ស្វ័យប្រវត្តិកម្ម Pipeline CI/CD ។
- **Docker, Kubernetes:** សម្រាប់ Containerization និង Orchestration ។
- **Ansible, Chef:** សម្រាប់ Configuration Management ។

`,
  examples: [
    `### ឧទាហរណ៍: ការអនុវត្តន៍ CI/CD

**សេណារីយ៉ូ:** អ្នកអភិវឌ្ឍន៍ម្នាក់បានបញ្ចប់ការសរសេរមុខងារថ្មីមួយ។

1.  **Commit Code:** អ្នកអភិវឌ្ឍន៍ push កូដទៅ Git Repository ។
2.  **Trigger CI:** Jenkins (ឬ GitLab CI/CD) រកឃើញការផ្លាស់ប្តូរហើយចាប់ផ្តើម Pipeline ។
3.  **Build & Test:** Pipeline ចាប់ផ្តើម Build កូដនិងធ្វើតេស្ត Unit និង Integration ដោយស្វ័យប្រវត្តិ។
4.  **Success:** ប្រសិនបើការធ្វើតេស្តទាំងអស់ជោគជ័យ កូដនឹងត្រូវបានដាក់ឱ្យប្រើប្រាស់ដោយស្វ័យប្រវត្តិទៅ Staging Environment (CD) ឬសូម្បីតែ Production Environment (CD)។
`
  ],
  quiz: [
    {
      question: 'តើ DevOps ជាអ្វី?',
      options: ['ការសរសេរកូដ', 'ការរួមបញ្ចូលគ្នារវាង Dev និង Ops', 'ការធ្វើតេស្តតែប៉ុណ្ណោះ', 'ការគ្រប់គ្រងហិរញ្ញវត្ថុ'],
      correct: 1,
      explanation: 'DevOps គឺជាវប្បធម៌និងការអនុវត្តន៍នៃការរួមបញ្ចូលគ្នារវាងក្រុម Dev និង Ops ។'
    },
    {
      question: 'តើ CI មានន័យដូចម្តេច?',
      options: ['ការធ្វើតេស្តដោយស្វ័យប្រវត្តិ', 'ការរួមបញ្ចូលកូដជាបន្តបន្ទាប់', 'ការដាក់ឱ្យប្រើប្រាស់ដោយស្វ័យប្រវត្តិ', 'ការគ្រប់គ្រងគម្រោង'],
      correct: 1,
      explanation: 'CI គឺ Continuous Integration ដែលជាការរួមបញ្ចូលកូដជាញឹកញាប់។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Continuous Delivery និង Continuous Deployment?',
      options: ['មិនមានភាពខុសគ្នាទេ', 'CD ត្រូវការការអនុញ្ញាតពីមនុស្ស CD មិនត្រូវការទេ', 'CD មិនត្រូវការការអនុញ្ញាតពីមនុស្ស CD ត្រូវការទេ', 'CD មានតម្លៃថ្លៃជាង'],
      correct: 1,
      explanation: 'Continuous Delivery ត្រូវការការអនុញ្ញាតដើម្បីដាក់ឱ្យប្រើប្រាស់ ចំណែក Continuous Deployment ធ្វើដោយស្វ័យប្រវត្តិទាំងស្រុង។'
    },
    {
      question: 'តើ Git ប្រើសម្រាប់អ្វីក្នុង DevOps?',
      options: ['ធ្វើតេស្ត', 'Containerization', 'Version Control', 'Configuration Management'],
      correct: 2,
      explanation: 'Git គឺជាឧបករណ៍សម្រាប់ Version Control ។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃ CI/CD?',
      options: ['ការពន្យារពេលគម្រោង', 'ការចំណាយច្រើន', 'ការបង្កើនល្បឿនក្នុងការដាក់ឱ្យប្រើប្រាស់និងកាត់បន្ថយកំហុស', 'ការធ្វើឱ្យការងារកាន់តែពិបាក'],
      correct: 2,
      explanation: 'CI/CD ជួយបង្កើនល្បឿននិងកាត់បន្ថយកំហុសដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ Docker ប្រើសម្រាប់អ្វី?',
      options: ['ធ្វើតេស្ត', 'Containerization', 'Version Control', 'Configuration Management'],
      correct: 1,
      explanation: 'Docker ប្រើសម្រាប់ Containerization ។'
    },
    {
      question: 'តើ Pipeline CI/CD ធ្វើអ្វី?',
      options: ['សរសេរកូដ', 'គ្រប់គ្រងហិរញ្ញវត្ថុ', 'ជាដំណើរការស្វ័យប្រវត្តិពីការសរសេរកូដដល់ការដាក់ឱ្យប្រើប្រាស់', 'ធ្វើតេស្តតែប៉ុណ្ណោះ'],
      correct: 2,
      explanation: 'Pipeline CI/CD គឺជាដំណើរការស្វ័យប្រវត្តិកម្ម។'
    }
  ],
  lab: {
    task: `
**សេណារីយ៉ូ:** អ្នកមានគម្រោង Website សាមញ្ញមួយហើយចង់រៀបចំ Pipeline CI/CD ។

**តម្រូវការ:**
1.  រៀបរាប់ពីជំហានទាំងឡាយនៅក្នុង Pipeline CI/CD របស់អ្នក។
2.  ពន្យល់ថាតើឧបករណ៍អ្វីខ្លះដែលអ្នកនឹងប្រើសម្រាប់ជំហាននីមួយៗ។
    `,
    solution: `
**ការរៀបចំ Pipeline CI/CD**

**១. ជំហាននៅក្នុង Pipeline:**
   - **ជំហានទី ១: Source:** អ្នកអភិវឌ្ឍន៍ push កូដទៅ Git Repository ។
   - **ជំហានទី ២: Build:** Jenkins (ឬ GitLab CI) ចាប់ផ្តើម Build កូដ។
   - **ជំហានទី ៣: Test:** ធ្វើតេស្តស្វ័យប្រវត្តិ។
   - **ជំហានទី ៤: Deploy:** ប្រសិនបើការធ្វើតេស្តជោគជ័យ កូដត្រូវបានដាក់ឱ្យប្រើប្រាស់ទៅ Staging Server ។

**២. ឧបករណ៍ដែលប្រើ:**
   - **Git:** សម្រាប់ Version Control ។
   - **Jenkins:** សម្រាប់ស្វ័យប្រវត្តិកម្ម Pipeline ។
   - **Mocha/Jasmine:** សម្រាប់ធ្វើតេស្ត JavaScript ។
   - **Nginx/Apache:** សម្រាប់ Web Server ។
`
  }
};

export default SEMLesson8_1Content;