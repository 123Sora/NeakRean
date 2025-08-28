import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson1_3Content: LessonContent = {
  title: 'ឧបករណ៍និងបរិស្ថានសម្រាប់អ្នកចាប់ផ្តើម',
  objectives: [
    'ស្វែងយល់ពីឧបករណ៍សំខាន់ៗសម្រាប់ការសរសេរកម្មវិធី',
    'រៀនពីរបៀបដំឡើងបរិស្ថានអភិវឌ្ឍន៍ (Development Environment)',
    'ស្គាល់ IDEs និង Text Editors ដ៏ពេញនិយម',
    'យល់ពីរបៀបប្រើ Command Line សម្រាប់ការសរសេរកម្មវិធី',
    'រៀនការដំឡើង និងសាកល្បងកម្មវិធី Python សាមញ្ញ'
  ],
  content: `
# ឧបករណ៍និងបរិស្ថានសម្រាប់អ្នកចាប់ផ្តើម 🛠️💻

---

ការចាប់ផ្តើមសរសេរកម្មវិធីតម្រូវឱ្យមានឧបករណ៍ និងបរិស្ថានអភិវឌ្ឍន៍ (Development Environment) ដែលសមស្រប។ មេរៀននេះនឹងណែនាំអ្នកអំពីឧបករណ៍ និងរបៀបរៀបចំបរិស្ថានសម្រាប់អ្នកចាប់ផ្តើម។

---

## 1. ឧបករណ៍សំខាន់ៗសម្រាប់ការសរសេរកម្មវិធី

ឧបករណ៍សំខាន់ៗរួមមាន៖
- **Text Editors:** ឧបករណ៍សាមញ្ញសម្រាប់សរសេរកូដ ដូចជា VS Code, Sublime Text, និង Notepad++។
- **Integrated Development Environments (IDEs):** ឧបករណ៍ដែលមានមុខងារច្រើនដូចជា Debugging និង Code Completion ដូចជា PyCharm, IntelliJ IDEA។
- **Compilers/Interpreters:** បកប្រែកូដទៅជាភាសាម៉ាស៊ីន (ឧ. Python Interpreter, GCC សម្រាប់ C/C++)។
- **Version Control Systems:** ដូចជា Git សម្រាប់គ្រប់គ្រងកូដ។
- **Command Line Tools:** Terminal ឬ Command Prompt សម្រាប់ដំណើរការកម្មវិធី។

---

## 2. ការរៀបចំបរិស្ថានអភិវឌ្ឍន៍

ដើម្បីចាប់ផ្តើមសរសេរកម្មវិធី៖
- **ដំឡើងភាសាសរសេរកម្មវិធី:** ឧទាហរណ៍ ដំឡើង Python ពី python.org។
- **ជ្រើសរើស Text Editor ឬ IDE:** VS Code ឬ PyCharm សម្រាប់ Python។
- **កំណត់ Path:** បន្ថែម Python ទៅ System Path ដើម្បីប្រើនៅ Command Line។
- **សាកល្បងបរិស្ថាន:** សរសេរកម្មវិធីសាមញ្ញ និងដំណើរការវា។

---

## 3. IDEs និង Text Editors ដ៏ពេញនិយម

- **Visual Studio Code (VS Code):** ឥតគិតថ្លៃ, Lightweight, គាំទ្រភាសាជាច្រើន។
- **PyCharm:** IDE ដ៏ល្អសម្រាប់ Python, មាន Community Edition ឥតគិតថ្លៃ។
- **Sublime Text:** លឿន, សាមញ្ញ, ប៉ុន្តែមាន Features តិចជាង IDE។
- **Jupyter Notebook:** ល្អសម្រាប់ Data Science និង Interactive Coding។

---

## 4. ការប្រើ Command Line

Command Line ជួយអ្នកអភិវឌ្ឍន៍ដំណើរការកម្មវិធី៖
- **បញ្ជាមូលដ្ឋាន:**
  - \`cd <folder>\`: ផ្លាស់ប្តូរទៅថតឯកសារ។
  - \`python <file.py>\`: ដំណើរការកម្មវិធី Python។
  - \`dir\` (Windows) ឬ \`ls\` (Linux/macOS): បង្ហាញឯកសារក្នុងថត។
- **ឧទាហរណ៍:** ដើម្បីដំណើរការ \`hello.py\`, ប្រើបញ្ជា:
  \`\`\`bash
  python hello.py
  \`\`\`

---

## 5. ការដំឡើង និងសាកល្បងកម្មវិធី Python

**ជំហាន:**
1. ទាញយក និងដំឡើង Python ពី [python.org](https://www.python.org)។
2. បើក VS Code ឬ PyCharm ហើយបង្កើតឯកសារ \`.py\`។
3. សរសេរកម្មវិធីសាមញ្ញ និងសាកល្បងដោយប្រើ Command Line ឬ IDE។

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
print("សួស្តី! នេះជាកម្មវិធី Python ដំបូងរបស់ខ្ញុំ!")
\`\`\`

---

## 6. ហេតុអ្វីត្រូវជ្រើសរើសឧបករណ៍ត្រឹមត្រូវ?

- **ភាពងាយស្រួល:** IDEs ដូចជា PyCharm ផ្តល់មុខងារដូចជា Code Completion។
- **ផលិតភាព:** VS Code មាន Extensions សម្រាប់ភាសាផ្សេងៗ។
- **ការរៀន:** ឧបករណ៍សាមញ្ញដូចជា Jupyter Notebook ជួយអ្នកចាប់ផ្តើម។
- **សហគមន៍:** ឧបករណ៍ដូចជា Git និង VS Code មានសហគមន៍ធំ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ កម្មវិធី Python សាមញ្ញ</h3>
<p>បង្កើតកម្មវិធី Python ដែលបង្ហាញសារស្វាគមន៍។</p>
<pre><code class="language-python">
print("សួស្តី! សូមស្វាគមន៍មកកាន់ការសរសេរកម្មវិធី!")
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ កម្មវិធី Python ជាមួយ Input</h3>
<p>បង្កើតកម្មវិធីដែលស្នើសុំឈ្មោះ និងបង្ហាញសារស្វាគមន៍។</p>
<pre><code class="language-python">
name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
print(f"សួស្តី {name}! សូមស្វាគមន៍មកកាន់ Python!")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើឧបករណ៍ណាដែលសមស្របសម្រាប់អ្នកចាប់ផ្តើមសរសេរកម្មវិធី Python?',
      options: ['VS Code', 'Microsoft Word', 'Notepad', 'Photoshop'],
      correct: 0,
      explanation: 'VS Code ជា Text Editor ដ៏ល្អសម្រាប់សរសេរកម្មវិធី Python។'
    },
    {
      question: 'តើ IDE ណាដែលល្អសម្រាប់ Python?',
      options: ['PyCharm', 'Sublime Text', 'Notepad++', 'Vim'],
      correct: 0,
      explanation: 'PyCharm ជា IDE ដ៏ល្អសម្រាប់ Python ដោយសារមុខងារច្រើន។'
    },
    {
      question: 'តើបញ្ជា Command Line ណាដែលប្រើដើម្បីដំណើរការកម្មវិធី Python?',
      options: ['run python', 'python <file.py>', 'start python', 'execute <file.py>'],
      correct: 1,
      explanation: 'បញ្ជា `python <file.py>` ប្រើដើម្បីដំណើរការកម្មវិធី Python។'
    },
    {
      question: 'តើអ្វីជាមុខងារសំខាន់នៃ IDE?',
      options: ['រចនារូបភាព', 'Code Completion និង Debugging', 'គ្រប់គ្រង Database', 'បង្កើត Hardware'],
      correct: 1,
      explanation: 'IDE ផ្តល់មុខងារដូចជា Code Completion និង Debugging។'
    },
    {
      question: 'តើឧបករណ៍ណាដែលប្រើសម្រាប់ Version Control?',
      options: ['Git', 'Python', 'VS Code', 'Jupyter Notebook'],
      correct: 0,
      explanation: 'Git ជាឧបករណ៍សម្រាប់ Version Control។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python សាមញ្ញដោយប្រើ VS Code ឬ PyCharm។

**តម្រូវការ:**
1. **កម្មវិធីសាមញ្ញ:**
   - បង្កើតកម្មវិធី Python ដែលស្នើសុំឈ្មោះ និងចំណូលចិត្ត (Hobby) របស់អ្នកប្រើ។
   - បង្ហាញសារដែលបញ្ជាក់ឈ្មោះ និងចំណូលចិត្ត។
2. **ការដំឡើងបរិស្ថាន:**
   - ដំឡើង Python និង VS Code។
   - សាកល្បងកម្មវិធីដោយប្រើ Command Line ឬ Run Feature ក្នុង VS Code។

**ការណែនាំ:** ទាញយក Python ពី python.org និងដំឡើង VS Code។ បង្កើតឯកសារ \`.py\` និងសាកល្បង។
    `,
    solution: `
\`\`\`python
# កម្មវិធី Python សាមញ្ញ
name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
hobby = input("បញ្ចូលចំណូលចិត្តរបស់អ្នក: ")
print(f"សួស្តី {name}! ខ្ញុំឃើញថាអ្នកចូលចិត្ត {hobby}។")
\`\`\`
`
  }
};

export default ConceptLesson1_3Content;