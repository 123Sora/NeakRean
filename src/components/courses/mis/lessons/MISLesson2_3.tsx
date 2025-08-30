import type { LessonContent } from '../../../../types/LessonTypes';

const MISLesson2_3Content: LessonContent = {
  title: 'មូលដ្ឋានទិន្នន័យទំនាក់ទំនង',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃមូលដ្ឋានទិន្នន័យទំនាក់ទំនង',
    'ស្វែងយល់ពីរចនាសម្ព័ន្ធនៃតារាង និងទំនាក់ទំនងនៅក្នុងមូលដ្ឋានទិន្នន័យទំនាក់ទំនង',
    'ស្គាល់គោលការណ៍នៃ Normalization និងការប្រើប្រាស់ Primary និង Foreign Keys',
    'យល់ពីអត្ថប្រយោជន៍ និងគុណវិបត្តិនៃមូលដ្ឋានទិន្នន័យទំនាក់ទំនង',
    'បង្កើតកម្មវិធី Python សាមញ្ញសម្រាប់បង្ហាញទិន្នន័យមូលដ្ឋានទិន្នន័យទំនាក់ទំនង'
  ],
  content: `
# មូលដ្ឋានទិន្នន័យទំនាក់ទំនង 🗄️🔗

---

**មូលដ្ឋានទិន្នន័យទំនាក់ទំនង (Relational Databases)** គឺជាប្រភេទមូលដ្ឋានទិន្នន័យដែលរៀបចំទិន្នន័យជាតារាង ដែលតារាងនីមួយៗមានទំនាក់ទំនងគ្នាតាមរយៈ Keys។ វាជាមូលដ្ឋានសម្រាប់ប្រព័ន្ធព័ត៌មានគ្រប់គ្រង (MIS) ដែលផ្តល់នូវភាពត្រឹមត្រូវ និងប្រសិទ្ធភាពក្នុងការគ្រប់គ្រងទិន្នន័យ។

---

## 1. អ្វីទៅជាមូលដ្ឋានទិន្នន័យទំនាក់ទំនង?

មូលដ្ឋានទិន្នន័យទំនាក់ទំនងគឺជាប្រព័ន្ធដែលរៀបចំទិន្នន័យជាតារាង (Tables) ដែលហៅថា **Relations**។ តារាងនីមួយៗមាន៖
- **Rows (Records):** តំណាងឱ្យទិន្នន័យនីមួយៗ (ឧ. អតិថិជនម្នាក់)។
- **Columns (Attributes):** តំណាងឱ្យលក្ខណៈនៃទិន្នន័យ (ឧ. ឈ្មោះ អាយុ)។
- **Keys:** ប្រើដើម្បីភ្ជាប់តារាងផ្សេងៗគ្នា។

ឧទាហរណ៍៖ មូលដ្ឋានទិន្នន័យរបស់ហាងលក់រាយអាចមានតារាង "អតិថិជន" និង "ការបញ្ជាទិញ" ដែលភ្ជាប់គ្នាតាមរយៈ **Customer ID**។

---

## 2. រចនាសម្ព័ន្ធនៃមូលដ្ឋានទិន្នន័យទំនាក់ទំនង

រចនាសម្ព័ន្ធនៃមូលដ្ឋានទិន្នន័យទំនាក់ទំនងរួមមាន៖
- **Tables:** កន្លែងផ្ទុកទិន្នន័យ ដែលមាន Rows និង Columns។
- **Primary Key:** ជាអត្តសញ្ញាណតែមួយគត់សម្រាប់ Record នីមួយៗនៅក្នុងតារាង (ឧ. Customer ID)។
- **Foreign Key:** ជា Field នៅក្នុងតារាងមួយដែលភ្ជាប់ទៅ Primary Key នៃតារាងផ្សេង (ឧ. Customer ID នៅក្នុងតារាងការបញ្ជាទិញ)។
- **Relationships:** ទំនាក់ទំនងរវាងតារាង (ឧ. One-to-Many, Many-to-Many)។

ឧទាហរណ៍៖ តារាង "អតិថិជន" មាន Primary Key ជា Customer ID ហើយតារាង "ការបញ្ជាទិញ" ប្រើ Customer ID ជា Foreign Key ដើម្បីភ្ជាប់ទំនាក់ទំនង។

---

## 3. Normalization ក្នុងមូលដ្ឋានទិន្នន័យទំនាក់ទំនង

**Normalization** គឺជាដំណើរការនៃការរៀបចំតារាងដើម្បីកាត់បន្ថយទិន្នន័យស្ទួន និងភាពមិនប្រក្រតី។ វាមានកម្រិតដូចជា៖
- **First Normal Form (1NF):** លុបបំបាត់ទិន្នន័យស្ទួន និងធានាថា Field នីមួយៗមានតម្លៃតែមួយ។
- **Second Normal Form (2NF):** តម្រូវឱ្យ 1NF និងធានាថា Fields ទាំងអស់អាស្រ័យលើ Primary Key ទាំងមូល។
- **Third Normal Form (3NF):** តម្រូវឱ្យ 2NF និងលុបបំបាត់ Fields ដែលអាស្រ័យលើ Fields ផ្សេងទៀត។

ឧទាហរណ៍៖ បំបែកតារាងដែលមានទាំងអតិថិជន និងការបញ្ជាទិញទៅជាតារាងដាច់ដោយឡែកដើម្បីកាត់បន្ថយទិន្នន័យស្ទួន។

---

## 4. អត្ថប្រយោជន៍ និងគុណវិបត្តិនៃមូលដ្ឋានទិន្នន័យទំនាក់ទំនង

**អត្ថប្រយោជន៍:**
- **ភាពត្រឹមត្រូវ:** កាត់បន្ថយទិន្នន័យស្ទួន និងភាពមិនប្រក្រតី។
- **ភាពងាយស្រួល:** ងាយស្រួលគ្រប់គ្រងទិន្នន័យដោយប្រើ SQL។
- **ស្តង់ដារ:** ប្រើបានជាមួយបច្ចេកវិទ្យាជាច្រើន (ឧ. MySQL, PostgreSQL)។
- **សុវត្ថិភាព:** ផ្តល់ជម្រើសសម្រាប់ការគ្រប់គ្រងសិទ្ធិចូលប្រើ។

**គុណវិបត្តិ:**
- **ភាពស្មុគស្មាញ:** ការរចនា និងថែទាំអាចស្មុគស្មាញសម្រាប់ទិន្នន័យធំ។
- **ដំណើរការយឺត:** មិនស័ក្តិសមសម្រាប់ទិន្នន័យមិនមានរចនាសម្ព័ន្ធ ឬទិន្នន័យធំ។
- **តម្លៃថ្លៃ:** កម្មវិធីមួយចំនួន (ឧ. Oracle) មានតម្លៃខ្ពស់។

---

## 5. ការប្រៀបធៀបមូលដ្ឋានទិន្នន័យទំនាក់ទំនង និងប្រភេទផ្សេង

| ប្រភេទ               | គុណសម្បត្តិ                       | គុណវិបត្តិ                       |
| :------------------- | :---------------------------------- | :-------------------------------- |
| **Relational**       | ត្រឹមត្រូវ, ងាយស្រួលគ្រប់គ្រង     | យឺតសម្រាប់ទិន្នន័យធំ          |
| **NoSQL**            | អាចពង្រីកបាន, បត់បែន            | ស្មុគស្មាញក្នុងការគ្រប់គ្រង     |
| **Hierarchical**     | លឿនសម្រាប់ទិន្នន័យថ្នាក់         | មិនបត់បែន                      |
| **Network**          | គ្រប់គ្រងទំនាក់ទំនងស្មុគស្មាញ     | ស្មុគស្មាញក្នុងការរចនា          |

---

## 6. ហេតុអ្វីត្រូវរៀនមូលដ្ឋានទិន្នន័យទំនាក់ទំនង?

មូលដ្ឋានទិន្នន័យទំនាក់ទំនងគឺសំខាន់សម្រាប់៖
- **ការគ្រប់គ្រងទិន្នន័យប្រកបដោយប្រសិទ្ធភាព:** ផ្តល់រចនាសម្ព័ន្ធច្បាស់លាស់សម្រាប់ទិន្នន័យ។
- **ការគាំទ្រការសម្រេចចិត្ត:** ផ្តល់ទិន្នន័យត្រឹមត្រូវសម្រាប់ MIS។
- **ការប្រើប្រាស់ SQL:** អនុញ្ញាតឱ្យគ្រប់គ្រងទិន្នន័យបានយ៉ាងងាយស្រួល។
- **ការកាត់បន្ថយកំហុស:** Normalization កាត់បន្ថយទិន្នន័យស្ទួន និងភាពមិនប្រក្រតី។
- **អាជីព:** ជំនាញក្នុងមូលដ្ឋានទិន្នន័យទំនាក់ទំនងមានតម្រូវការខ្ពស់នៅក្នុងវិស័យបច្ចេកវិទ្យា។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្ហាញ Relational Database Dashboard ជាមួយ Python/Tkinter</h3>
<p>បង្កើត Python App សាមញ្ញដែលបង្ហាញសារនៅកណ្តាល Window សម្រាប់ Relational Database Dashboard។</p>
<pre><code class="language-python">
import tkinter as tk

# បង្កើត Window មេ
root = tk.Tk()
root.title("Relational Database Dashboard")
root.geometry("400x300")

# បន្ថែម Label
label = tk.Label(root, text="សួស្តី! នេះជា Relational Database Dashboard!", font=("Arial", 16))
label.pack(pady=50)

# ដំណើរការ App
root.mainloop()
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Button សម្រាប់ Relational Database Dashboard</h3>
<p>បន្ថែម Button ដែលបង្ហាញ Message Box នៅពេលចុច។</p>
<pre><code class="language-python">
import tkinter as tk
from tkinter import messagebox

def show_data():
    messagebox.showinfo("Relational Database Dashboard", "សួស្តី! អ្នកបានចុច Button!")

# បង្កើត Window មេ
root = tk.Tk()
root.title("Relational Database Dashboard")
root.geometry("400x300")

# បន្ថែម Label
label = tk.Label(root, text="សួស្តី! នេះជា Relational Database Dashboard!", font=("Arial", 16))
label.pack(pady=50)

# បន្ថែម Button
button = tk.Button(root, text="ចុចដើម្បីមើលទិន្នន័យទំនាក់ទំនង", command=show_data, bg="green", fg="white", font=("Arial", 12))
button.pack(pady=20)

# ដំណើរការ App
root.mainloop()
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើមូលដ្ឋានទិន្នន័យទំនាក់ទំនងរៀបចំទិន្នន័យជាអ្វី?',
      options: [
        'បណ្តាញសង្គម',
        'តារាងដែលមានទំនាក់ទំនងគ្នា',
        'ទិន្នន័យមិនមានរចនាសម្ព័ន្ធ',
        'ភាសាសរសេរកម្មវិធី'
      ],
      correct: 1,
      explanation: 'មូលដ្ឋានទិន្នន័យទំនាក់ទំនងរៀបចំទិន្នន័យជាតារាងដែលមានទំនាក់ទំនងគ្នា។'
    },
    {
      question: 'តើ Primary Key មានតួនាទីអ្វីនៅក្នុងតារាង?',
      options: [
        'ភ្ជាប់តារាងផ្សេងៗ',
        'កំណត់អត្តសញ្ញាណតែមួយគត់សម្រាប់ Record',
        'គ្រប់គ្រងសុវត្ថិភាព',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'Primary Key កំណត់អត្តសញ្ញាណតែមួយគត់សម្រាប់ Record នីមួយៗ។'
    },
    {
      question: 'តើ Normalization មានគោលបំណងអ្វី?',
      options: [
        'បង្កើតទិន្នន័យស្ទួន',
        'កាត់បន្ថយទិន្នន័យស្ទួន និងភាពមិនប្រក្រតី',
        'គ្រប់គ្រងផ្នែករឹង',
        'បង្កើតបណ្តាញអ៊ីនធឺណិត'
      ],
      correct: 1,
      explanation: 'Normalization កាត់បន្ថយទិន្នន័យស្ទួន និងភាពមិនប្រក្រតី។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍សំខាន់នៃមូលដ្ឋានទិន្នន័យទំនាក់ទំនង?',
      options: [
        'បង្កើតកម្មវិធី Mobile',
        'ភាពត្រឹមត្រូវ និងងាយស្រួលគ្រប់គ្រង',
        'គ្រប់គ្រងផ្នែករឹង',
        'បង្កើត UI Components'
      ],
      correct: 1,
      explanation: 'មូលដ្ឋានទិন្នន័យទំនាក់ទំនងផ្តល់ភាពត្រឹមត្រូវ និងងាយស្រួលគ្រប់គ្រង។'
    },
    {
      question: 'តើ Foreign Key មានតួនាទីអ្វី?',
      options: [
        'កំណត់អត្តសញ្ញាណតែមួយគត់',
        'ភ្ជាប់តារាងផ្សេងៗគ្នា',
        'គ្រប់គ្រងស្តុក',
        'បង្កើត Dashboard'
      ],
      correct: 1,
      explanation: 'Foreign Key ភ្ជាប់តារាងផ្សេងៗគ្នាតាមរយៈ Primary Key។'
    }
  ],
  lab: {
    task: `
បង្កើត Python App សាមញ្ញមួយដែលបង្ហាញអំពី Relational Database Dashboard ជាមូលដ្ឋានដោយប្រើ Tkinter។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Window មេដោយប្រើ Tkinter។
   - កំណត់ Title នៃ App ជា "Relational Database Dashboard Lab"។

2. **Main Content:**
   - បន្ថែម Label ដែលបង្ហាញសារ "សួស្តី! នេះជា Relational Database Dashboard!" នៅកណ្តាល Window។
   - បន្ថែម Button ដែលនៅពេលចុច បង្ហាញ Message Box ជាមួយសារ "ទិន្នន័យទំនាក់ទំនងត្រូវបានបើក!"។

3. **Basic Styling:**
   - កំណត់ Font Size ជា 16 សម្រាប់ Label។
   - បន្ថែម Basic Styling សម្រាប់ Button (ឧទាហរណ៍៖ ពណ៌ផ្ទៃខាងក្រោយជាពណ៌បៃតង)។

**ការណែនាំ:** ដំឡើង Python និង Tkinter (ជាប់ជាមួយ Python ដោយស្វ័យប្រវត្តិ)។ សាកល្បង App នៅលើកុំព្យូទ័ររបស់អ្នក។
    `,
    solution: `
\`\`\`python
import tkinter as tk
from tkinter import messagebox

def show_data():
    messagebox.showinfo("Relational Database Dashboard", "ទិន្នន័យទំនាក់ទំនងត្រូវបានបើក!")

# បង្កើត Window មេ
root = tk.Tk()
root.title("Relational Database Dashboard Lab")
root.geometry("400x300")

# បន្ថែម Label
label = tk.Label(root, text="សួស្តី! នេះជា Relational Database Dashboard!", font=("Arial", 16))
label.pack(pady=50)

# បន្ថែម Button
button = tk.Button(root, text="បើកទិន្នន័យទំនាក់ទំនង", command=show_data, bg="green", fg="white", font=("Arial", 12))
button.pack(pady=20)

# ដំណើរការ App
root.mainloop()
\`\`\`
`
  }
};

export default MISLesson2_3Content;