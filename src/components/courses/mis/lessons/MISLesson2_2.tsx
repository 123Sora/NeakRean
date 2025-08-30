import type { LessonContent } from '../../../../types/LessonTypes';

const MISLesson2_2Content: LessonContent = {
  title: 'ការធ្វើគំរូទិន្នន័យ',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃការធ្វើគំរូទិន្នន័យ',
    'ស្វែងយល់ពីប្រភេទនៃគំរូទិន្នន័យ ដូចជា Conceptual, Logical, និង Physical',
    'ស្គាល់ការប្រើប្រាស់ Entity-Relationship Diagram (ERD) ក្នុងការធ្វើគំរូ',
    'យល់ពីរបៀបដែលការធ្វើគំរូទិន្នន័យជួយក្នុងការរចនាមូលដ្ឋានទិន្នន័យ',
    'បង្កើតកម្មវិធី Python សាមញ្ញសម្រាប់បង្ហាញទិន្នន័យគំរូ'
  ],
  content: `
# ការធ្វើគំរូទិន្នន័យ 📊🗂️

---

**ការធ្វើគំរូទិន្នន័យ (Data Modeling)** គឺជាដំណើរការនៃការបង្កើតតំណាងដែលមើលឃើញនៃទិន្នន័យ និងទំនាក់ទំនងរបស់វានៅក្នុងប្រព័ន្ធ។ វាជួយអ្នករចនាមូលដ្ឋានទិន្នន័យឱ្យយល់ពីរបៀបដែលទិន្នន័យត្រូវបានរៀបចំ និងប្រើប្រាស់នៅក្នុង MIS។

---

## 1. អ្វីទៅជាការធ្វើគំរូទិន្នន័យ?

ការធ្វើគំរូទិន្នន័យគឺជាវិធីសាស្ត្រដែលបង្កើតគំនូសតាង ឬរចនាសម្ព័ន្ធដើម្បីតំណាងឱ្យទិន្នន័យ និងទំនាក់ទំនងរវាងវា។ វាជួយក្នុងការ៖
- **ការយល់ដឹងអំពីទិន្នន័យ:** បង្ហាញទំនាក់ទំនងរវាងអង្គភាពផ្សេងៗ។
- **ការរចនាមូលដ្ឋានទិន្នន័យ:** ផ្តល់ផែនទីសម្រាប់ការអនុវត្ត។
- **ការទំនាក់ទំនង:** ជួយអ្នកអភិវឌ្ឍន៍ និងអ្នកគ្រប់គ្រងយល់ពីរចនាសម្ព័ន្ធទិន្នន័យ។

ឧទាហរណ៍៖ គំរូទិន្នន័យសម្រាប់ហាងលក់រាយអាចបង្ហាញទំនាក់ទំនងរវាង "អតិថិជន" និង "ការបញ្ជាទិញ"។

---

## 2. ប្រភេទនៃគំរូទិន្នន័យ

មានប្រភេទគំរូទិន្នន័យចំនួនបីសំខាន់៖
- **Conceptual Data Model:** ផ្តល់ទិដ្ឋភាពទូទៅនៃទិន្នន័យ និងទំនាក់ទំនង (ឧ. អតិថិជន និងការបញ្ជាទិញ)។
- **Logical Data Model:** ពន្យល់លម្អិតអំពីរចនាសម្ព័ន្ធ និងទំនាក់ទំនង ដោយមិនគិតពីបច្ចេកវិទ្យា។
- **Physical Data Model:** បង្ហាញពីរបៀបដែលទិន្នន័យត្រូវបានរក្សាទុកនៅក្នុងមូលដ្ឋានទិន្នន័យជាក់ស្តែង (ឧ. តារាង និង Fields)។

---

## 3. Entity-Relationship Diagram (ERD)

**Entity-Relationship Diagram (ERD)** គឺជាឧបករណ៍សំខាន់សម្រាប់ការធ្វើគំរូទិន្នន័យ។ វាបង្ហាញ៖
- **Entities:** វត្ថុដែលមានទិន្នន័យ (ឧ. អតិថិជន ផលិតផល)។
- **Attributes:** ព័ត៌មានលម្អិតអំពី Entity (ឧ. ឈ្មោះអតិថិជន លេខសម្គាល់ផលិតផល)�।
- **Relationships:** ទំនាក់ទំនងរវាង Entities (ឧ. អតិថិជនបញ្ជាទិញផលិតផល)។

ឧទាហរណ៍៖ ERD សម្រាប់ហាងលក់រាយអាចបង្ហាញថា "អតិថិជន" មានទំនាក់ទំនង "បញ្ជាទិញ" ជាមួយ "ការបញ្ជាទិញ"។

---

## 4. សារៈសំខាន់នៃការធ្វើគំរូទិន្នន័យ

ការធ្វើគំរូទិន្នន័យជួយ៖
- **ការយល់ដឹងច្បាស់លាស់:** បង្ហាញរចនាសម្ព័ន្ធទិន្នន័យដល់អ្នកពាក់ព័ន្ធ។
- **ការរចនាប្រកបដោយប្រសិទ្ធភាព:** ជួយបង្កើតមូលដ្ឋានទិន្នន័យដែលមានប្រសិទ្ធភាព។
- **ការកាត់បន្ថយកំហុស:** ការពារភាពមិនប្រក្រតី និងទិន្នន័យស្ទួន។
- **ការគាំទ្រការអភិវឌ្ឍ:** ផ្តល់ផែនទីសម្រាប់អ្នកអភិវឌ្ឍន៍។

---

## 5. ការប្រៀបធៀបប្រភេទគំរូទិន្នន័យ

| ប្រភេទគំរូ         | គោលបំណង                           | គុណសម្បត្តិ                        | គុណវិបត្តិ                       |
| :------------------- | :---------------------------------- | :---------------------------------- | :-------------------------------- |
| **Conceptual**       | ផ្តល់ទិដ្ឋភាពទូទៅ                | ងាយយល់, សាមញ្ញ                 | មានលម្អិតតិច                   |
| **Logical**          | ពន្យល់លម្អិតអំពីទំនាក់ទំនង       | មានលម្អិត, ឯករាជ្យពីបច្ចេកវិទ្យា | ស្មុគស្មាញជាង Conceptual        |
| **Physical**         | បង្ហាញរបៀបអនុវត្ត                | ជាក់លាក់សម្រាប់បច្ចេកវិទ្យា      | ស្មុគស្មាញ, អាស្រ័យលើបច្ចេកវិទ្យា |

---


## 6. ហេតុអ្វីត្រូវរៀនការធ្វើគំរូទិន្នន័យ?

ការធ្វើគំរូទិន្នន័យគឺសំខាន់សម្រាប់៖
- **ការយល់ដឹងច្បាស់លាស់:** ជួយអ្នកពាក់ព័ន្ធយល់ពីរចនាសម្ព័ន្ធទិន្នន័យ។
- **ការរចនាមូលដ្ឋានទិន្នន័យប្រកបដោយប្រសិទ្ធភាព:** ផ្តល់ផែនទីសម្រាប់ការអនុវត្ត។
- **ការកាត់បន្ថយកំហុស:** ការពារភាពមិនប្រក្រតី និងទិន្នន័យស្ទួន។
- **ការគាំទ្រការអភិវឌ្ឍ MIS:** ជួយអ្នកអភិវឌ្ឍន៍បង្កើតប្រព័ន្ធដែលមានប្រសិទ្ធភាព។
- **អាជីព:** ជំនាញក្នុងការធ្វើគំរូទិន្នន័យមានតម្រូវការខ្ពស់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្ហាញ Data Model Dashboard ជាមួយ Python/Tkinter</h3>
<p>បង្កើត Python App សាមញ្ញដែលបង្ហាញសារនៅកណ្តាល Window សម្រាប់ Data Model Dashboard។</p>
<pre><code class="language-python">
import tkinter as tk

# បង្កើត Window មេ
root = tk.Tk()
root.title("Data Model Dashboard")
root.geometry("400x300")

# បន្ថែម Label
label = tk.Label(root, text="សួស្តី! នេះជា Data Model Dashboard!", font=("Arial", 16))
label.pack(pady=50)

# ដំណើរការ App
root.mainloop()
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Button សម្រាប់ Data Model Dashboard</h3>
<p>បន្ថែម Button ដែលបង្ហាញ Message Box នៅពេលចុច។</p>
<pre><code class="language-python">
import tkinter as tk
from tkinter import messagebox

def show_model():
    messagebox.showinfo("Data Model Dashboard", "សួស្តី! អ្នកបានចុច Button!")

# បង្កើត Window មេ
root = tk.Tk()
root.title("Data Model Dashboard")
root.geometry("400x300")

# បន្ថែម Label
label = tk.Label(root, text="សួស្តី! នេះជា Data Model Dashboard!", font=("Arial", 16))
label.pack(pady=50)

# បន្ថែម Button
button = tk.Button(root, text="ចុចដើម្បីមើលគំរូទិន្នន័យ", command=show_model, bg="green", fg="white", font=("Arial", 12))
button.pack(pady=20)

# ដំណើរការ App
root.mainloop()
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើការធ្វើគំរូទិន្នន័យគឺជាអ្វី?',
      options: [
        'ការបង្កើតកម្មវិធី Mobile',
        'ការបង្កើតតំណាងដែលមើលឃើញនៃទិន្នន័យ',
        'ការគ្រប់គ្រងផ្នែករឹង',
        'ការបង្កើត UI'
      ],
      correct: 1,
      explanation: 'ការធ្វើគំរូទិន្នន័យគឺជាការបង្កើតតំណាងដែលមើលឃើញនៃទិន្នន័យ និងទំនាក់ទំនង។'
    },
    {
      question: 'តើប្រភេទគំរូទិន្នន័យណាដែលផ្តល់ទិដ្ឋភាពទូទៅ?',
      options: [
        'Conceptual Data Model',
        'Logical Data Model',
        'Physical Data Model',
        'Network Data Model'
      ],
      correct: 0,
      explanation: 'Conceptual Data Model ផ្តល់ទិដ្ឋភាពទូទៅនៃទិន្នន័យ។'
    },
    {
      question: 'តើ ERD បង្ហាញអ្វីខ្លះ?',
      options: [
        'ផ្នែករឹង',
        'Entities, Attributes, និង Relationships',
        'បណ្តាញអ៊ីនធឺណិត',
        'UI Components'
      ],
      correct: 1,
      explanation: 'ERD បង្ហាញ Entities, Attributes, និង Relationships នៃទិន្នន័យ។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការធ្វើគំរូទិន្នន័យ?',
      options: [
        'បង្កើតកម្មវិធី Cross-Platform',
        'ជួយរចនាមូលដ្ឋានទិន្នន័យប្រកបដោយប្រសិទ្ធភាព',
        'គ្រប់គ្រងផ្នែករឹង',
        'បង្កើតបណ្តាញសង្គម'
      ],
      correct: 1,
      explanation: 'ការធ្វើគំរូទិន្នន័យជួយរចនាមូលដ្ឋានទិន្នន័យប្រកបដោយប្រសិទ្ធភាព។'
    },
    {
      question: 'តើ Physical Data Model ផ្តោតលើអ្វី?',
      options: [
        'ទិដ្ឋភាពទូទៅនៃទិន្នន័យ',
        'របៀបអនុវត្តទិន្នន័យនៅក្នុងមូលដ្ឋានទិន្នន័យ',
        'ទំនាក់ទំនងស្មុគស្មាញ',
        'ការបង្កើត UI'
      ],
      correct: 1,
      explanation: 'Physical Data Model បង្ហាញរបៀបអនុវត្តទិន្នន័យនៅក្នុងមូលដ្ឋានទិន្នន័យ។'
    }
  ],
  lab: {
    task: `
បង្កើត Python App សាមញ្ញមួយដែលបង្ហាញអំពី Data Model Dashboard ជាមូលដ្ឋានដោយប្រើ Tkinter។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Window មេដោយប្រើ Tkinter។
   - កំណត់ Title នៃ App ជា "Data Model Dashboard Lab"។

2. **Main Content:**
   - បន្ថែម Label ដែលបង្ហាញសារ "សួស្តី! នេះជា Data Model Dashboard!" នៅកណ្តាល Window។
   - បន្ថែម Button ដែលនៅពេលចុច បង្ហាញ Message Box ជាមួយសារ "គំរូទិន្នន័យត្រូវបានបើក!"។

3. **Basic Styling:**
   - កំណត់ Font Size ជា 16 សម្រាប់ Label។
   - បន្ថែម Basic Styling សម្រាប់ Button (ឧទាហរណ៍៖ ពណ៌ផ្ទៃខាងក្រោយជាពណ៌បៃតង)។

**ការណែនាំ:** ដំឡើង Python និង Tkinter (ជាប់ជាមួយ Python ដោយស្វ័យប្រវត្តិ)�। សាកល្បង App នៅលើកុំព្យូទ័ររបស់អ្នក។
    `,
    solution: `
\`\`\`python
import tkinter as tk
from tkinter import messagebox

def show_model():
    messagebox.showinfo("Data Model Dashboard", "គំរូទិន្នន័យត្រូវបានបើក!")

# បង្កើត Window មេ
root = tk.Tk()
root.title("Data Model Dashboard Lab")
root.geometry("400x300")

# បន្ថែម Label
label = tk.Label(root, text="សួស្តី! នេះជា Data Model Dashboard!", font=("Arial", 16))
label.pack(pady=50)

# បន្ថែម Button
button = tk.Button(root, text="បើកគំរូទិន្នន័យ", command=show_model, bg="green", fg="white", font=("Arial", 12))
button.pack(pady=20)

# ដំណើរការ App
root.mainloop()
\`\`\`
`
  }
};

export default MISLesson2_2Content;