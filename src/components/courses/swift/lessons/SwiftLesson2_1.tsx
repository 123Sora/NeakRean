import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson2_1Content: LessonContent = {
  title: 'Basic Views នៅក្នុង SwiftUI',
  objectives: [
    'ស្គាល់និងប្រើប្រាស់ Views ជាមូលដ្ឋានដូចជា Text, Image, Button',
    'យល់ដឹងពីរបៀបរៀបចំ Layouts ដោយប្រើ Stacks (VStack, HStack, ZStack)',
    'រៀនពីរបៀបបន្ថែម Modifiers ទៅលើ Views',
    'យល់ដឹងពីរបៀបបង្កើត View Hierarchy'
  ],
  content: `
# Basic Views នៅក្នុង SwiftUI 🧱

---

នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបបង្កើត User Interface (UI) នៅក្នុង SwiftUI ដោយប្រើប្រាស់ Views ជាមូលដ្ឋាន។ SwiftUI ប្រើប្រាស់វិធីសាស្ត្រ Declarative ដែលមានន័យថាអ្នកគ្រាន់តែប្រកាសពីអ្វីដែលអ្នកចង់បង្ហាញ ហើយ Framework នឹងរៀបចំ Layout ជូនអ្នក។

---

## 1. Views ជាមូលដ្ឋាន (Basic Views)

Views គឺជាប្លុកកូដតូចៗដែលបង្កើត UI របស់អ្នក។ នេះគឺជា Views ដែលត្រូវបានប្រើប្រាស់ញឹកញាប់បំផុត៖

-   **Text:** ប្រើសម្រាប់បង្ហាញអត្ថបទ។ វាជា View ដ៏សាមញ្ញបំផុតនៅក្នុង SwiftUI។
    \`\`\`swift
    Text("សួស្តីពិភពលោក!")
    \`\`\`
-   **Image:** ប្រើសម្រាប់បង្ហាញរូបភាព។ អ្នកអាចប្រើរូបភាពពី Assets Folder ឬពី System Icons (SFSymbols)។
    \`\`\`swift
    Image("logo") // រូបភាពពី Assets
    Image(systemName: "heart.fill") // SFSymbols
    \`\`\`
-   **Button:** ប្រើសម្រាប់បង្កើតប៊ូតុងដែលអាចចុចបាន។ អ្នកអាចកំណត់ Action និង Label របស់វា។
    \`\`\`swift
    Button("ចុចខ្ញុំ!") {
        print("Button ត្រូវបានចុច!")
    }
    \`\`\`
-   **Divider:** ប្រើសម្រាប់បង្ហាញបន្ទាត់បែងចែកផ្ដេក ឬបញ្ឈរ។
-   **Spacer:** ប្រើសម្រាប់បង្កើតចន្លោះរវាង Views។

---

## 2. រៀបចំ Layouts ដោយប្រើ Stacks

Stacks គឺជា Views ពិសេសដែលប្រើដើម្បីរៀបចំ Views ផ្សេងៗទៀត។ វាមានបីប្រភេទ៖

-   **VStack (Vertical Stack):** រៀបចំ Views ពីលើចុះក្រោម។
    \`\`\`swift
    VStack {
        Text("Title")
        Text("Subtitle")
    }
    \`\`\`
-   **HStack (Horizontal Stack):** រៀបចំ Views ពីឆ្វេងទៅស្តាំ។
    \`\`\`swift
    HStack {
        Image(systemName: "star.fill")
        Text("ចំណាត់ថ្នាក់")
    }
    \`\`\`
-   **ZStack (Z-axis Stack):** រៀបចំ Views ពីមុខទៅក្រោយ (ដាក់ Views ពីលើគ្នា)។
    \`\`\`swift
    ZStack {
        Color.blue // ដាក់ពណ៌ផ្ទៃខាងក្រោយ
        Text("នៅលើផ្ទៃខាងក្រោយ")
    }
    \`\`\`

អ្នកអាចបញ្ចូល Stacks ទៅក្នុង Stacks ផ្សេងទៀតដើម្បីបង្កើត Layouts ស្មុគស្មាញ។

---

## 3. Modifiers

**Modifiers** គឺជាវិធីសាស្រ្ត (Methods) ដែលអ្នកអាចប្រើដើម្បីកែប្រែលក្ខណៈសម្បត្តិរបស់ View មួយ។ អ្នកអាចបន្តដាក់ Modifiers លើ View មួយបាន។

-   **font():** កំណត់ទំហំ និងប្រភេទអក្សរ។
-   **padding():** បន្ថែមចន្លោះនៅជុំវិញ View។
-   **foregroundColor():** កំណត់ពណ៌អត្ថបទ។
-   **background():** កំណត់ពណ៌ផ្ទៃខាងក្រោយ។
-   **cornerRadius():** បង្គត់ជ្រុងរបស់ View។

\`\`\`swift
Text("Styled Text")
    .font(.title) // Modifer ទី១
    .foregroundColor(.blue) // Modifier ទី២
    .padding() // Modifier ទី៣
\`\`\`

លំដាប់នៃ Modifiers មានសារៈសំខាន់។

---

## 4. View Hierarchy

View Hierarchy គឺជាការរៀបចំ Views ពី View មេទៅ View កូន។ វាដូចជាមែកធាង (Tree) មួយដែល View មេគឺជាឫស ហើយ Views កូនគឺជាមែកនិងស្លឹក។ នៅក្នុង SwiftUI, Views ត្រូវបានរៀបចំនៅក្នុងរចនាសម្ព័ន្ធនេះ។

ឧទាហរណ៍៖
-   View មេគឺ **VStack**។
-   View កូនគឺ **Text** និង **Button**។

\`\`\`swift
VStack { // Parent View
    Text("Hello") // Child View 1
    Button("Click") { // Child View 2
        // action
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើប្រាស់ Stacks រួមគ្នា</h3>
<p>បង្កើត Card UI សាមញ្ញមួយដោយប្រើ HStack និង VStack។</p>
<pre><code class="language-swift">
import SwiftUI

struct CardView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Image(systemName: "person.circle.fill")
                .font(.largeTitle)
                .foregroundColor(.blue)
            
            Text("John Doe")
                .font(.headline)
            
            Text("iOS Developer")
                .font(.subheadline)
                .foregroundColor(.gray)
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(10)
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Spacer</h3>
<p>ដាក់ Spacer នៅក្នុង HStack ដើម្បីរុញ Views ទៅម្ខាង។</p>
<pre><code class="language-swift">
import SwiftUI

struct SpacerExample: View {
    var body: some View {
        HStack {
            Text("Left")
            Spacer()
            Text("Right")
        }
        .padding()
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ View មួយណាដែលប្រើសម្រាប់បង្ហាញអត្ថបទ?',
      options: [
        'Image',
        'Text',
        'Button',
        'Spacer'
      ],
      correct: 1,
      explanation: '`Text` View ត្រូវបានប្រើសម្រាប់បង្ហាញអត្ថបទជា Static។'
    },
    {
      question: 'តើ Stack មួយណាដែលរៀបចំ Views ពីឆ្វេងទៅស្តាំ?',
      options: [
        'VStack',
        'HStack',
        'ZStack',
        'Grid'
      ],
      correct: 1,
      explanation: '`HStack` (Horizontal Stack) រៀបចំ Views តាមផ្ដេក។'
    },
    {
      question: 'តើអ្វីទៅជាតួនាទីរបស់ Modifier?',
      options: [
        'គ្រប់គ្រង Logic របស់ App',
        'កំណត់លក្ខណៈសម្បត្តិរបស់ View',
        'រក្សាទុកទិន្នន័យ',
        'បង្កើត Views ថ្មី'
      ],
      correct: 1,
      explanation: 'Modifier ត្រូវបានប្រើដើម្បីផ្លាស់ប្តូរលក្ខណៈសម្បត្តិ ឬរូបរាងរបស់ View។'
    },
    {
      question: 'តើលំដាប់នៃ Modifiers សំខាន់ដែរឬទេ?',
      options: [
        'សំខាន់ណាស់ ព្រោះវាប៉ះពាល់ដល់លទ្ធផល',
        'មិនសំខាន់ទេ',
        'សំខាន់សម្រាប់តែពណ៌ប៉ុណ្ណោះ',
        'សំខាន់សម្រាប់តែ Text ប៉ុណ្ណោះ'
      ],
      correct: 0,
      explanation: 'លំដាប់នៃ Modifier សំខាន់ ព្រោះវាអនុវត្តជាលំដាប់ដែលអ្នកសរសេរវា។'
    },
    {
      question: 'តើ Stack មួយណាដែលដាក់ Views ពីលើគ្នា?',
      options: [
        'VStack',
        'HStack',
        'ZStack',
        'All of the above'
      ],
      correct: 2,
      explanation: '`ZStack` ដាក់ Views ពីមុខទៅក្រោយ (Z-axis) ដូចជាការដាក់រូបភាពពីលើគ្នា។'
    },
    {
      question: 'តើ \`padding()\` modifier ប្រើសម្រាប់អ្វី?',
      options: [
        'ដាក់ពណ៌ផ្ទៃខាងក្រោយ',
        'បន្ថែមកន្លែងទំនេរជុំវិញ View',
        'បង្គត់ជ្រុង',
        'ផ្លាស់ប្តូរប្រភេទអក្សរ'
      ],
      correct: 1,
      explanation: '`padding()` ត្រូវបានប្រើដើម្បីបន្ថែមកន្លែងទំនេរនៅជុំវិញ View ។'
    },
    {
      question: 'តើ SwiftUI ប្រើប្រាស់វិធីសាស្ត្រអ្វីក្នុងការបង្កើត UI?',
      options: [
        'Imperative',
        'Functional',
        'Declarative',
        'Procedural'
      ],
      correct: 2,
      explanation: 'SwiftUI ប្រើប្រាស់វិធីសាស្ត្រ Declarative UI ដែលអ្នកប្រកាសពីអ្វីដែលអ្នកចង់បាន។'
    },
    {
      question: 'តើ SFSymbols គឺជាអ្វី?',
      options: [
        'រូបភាពដែលអ្នកបង្កើតដោយខ្លួនឯង',
        'បណ្ណាល័យរូបភាពដែលបានផ្តល់ដោយ Apple',
        'ឈ្មោះ Folder សម្រាប់រូបភាព',
        'Widgets សម្រាប់បង្ហាញរូបភាព'
      ],
      correct: 1,
      explanation: 'SFSymbols គឺជាបណ្ណាល័យរូបតំណាង (Icons) ជាង 5000 ដែលផ្តល់ដោយ Apple ។'
    },
    {
      question: 'តើ \`Spacer()\` មានតួនាទីអ្វី?',
      options: [
        'បង្កើតចន្លោះរវាង Views',
        'បង្ហាញអត្ថបទ',
        'បិទបាំង Views ផ្សេងៗទៀត',
        'បង្ហាញបន្ទាត់បែងចែក'
      ],
      correct: 0,
      explanation: '`Spacer()` ប្រើដើម្បីបង្កើតចន្លោះទំនេរដែលអាចពង្រីកបាននៅរវាង Views។'
    },
    {
      question: 'តើអ្នកអាចបញ្ចូល Stack ទៅក្នុង Stack មួយផ្សេងទៀតបានដែរឬទេ?',
      options: [
        'មិនបាន',
        'បាន',
        'បានតែជាមួយ ZStack ប៉ុណ្ណោះ',
        'បានតែជាមួយ VStack ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'អ្នកអាចបញ្ចូល Stacks ទៅក្នុង Stacks ផ្សេងទៀតដើម្បីបង្កើត Layouts ស្មុគស្មាញ។'
    },
    {
      question: 'តើអ្វីជា View មេនៅក្នុងរចនាសម្ព័ន្ធកូដខាងក្រោម?',
      options: [
        '`Text`',
        '`VStack`',
        '`Image`',
        '`ContentView`'
      ],
      correct: 1,
      explanation: '`VStack` គឺជា View មេដែលផ្ទុក View កូនៗដូចជា `Text` និង `Image`។'
    }
  ],
  lab: {
    task: `
បង្កើត Card UI នៅក្នុង SwiftUI ដែលមានរូបភាព អត្ថបទចំណងជើង និងអត្ថបទរង។

**តម្រូវការ:**

1.  **Layout:**
    -   ប្រើ \`VStack\` ជា View មេ។
    -   នៅក្នុង \`VStack\` ប្រើ \`HStack\` មួយសម្រាប់ដាក់រូបភាពនិងអត្ថបទ។

2.  **Views:**
    -   ប្រើ \`Image(systemName: ...)\` ដើម្បីបង្ហាញរូបតំណាង (Icon)។
    -   ប្រើ \`Text(...)\` ចំនួនពីរសម្រាប់ចំណងជើង (Title) និងអត្ថបទរង (Subtitle)។

3.  **Modifiers:**
    -   ប្រើ \`padding()\` នៅលើ View មេ។
    -   ប្រើ \`background()\` និង \`cornerRadius()\` ដើម្បីបង្កើត Card Style។
    -   ប្រើ Modifiers ផ្សេងទៀតដើម្បីកំណត់ \`font\` និង \`foregroundColor\`។

**ការណែនាំ:** ព្យាយាមប្រើ Xcode Canvas ដើម្បីមើលលទ្ធផល Live Preview ។
    `,
    solution: `
\`\`\`swift
import SwiftUI

struct CardView: View {
    var body: some View {
        VStack(alignment: .leading) {
            HStack(spacing: 12) {
                Image(systemName: "person.circle.fill")
                    .resizable()
                    .frame(width: 50, height: 50)
                    .foregroundColor(.blue)
                
                VStack(alignment: .leading) {
                    Text("John Doe")
                        .font(.headline)
                        .fontWeight(.bold)
                    Text("iOS Developer at Tech Co.")
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                }
            }
            .padding(.bottom, 8)
            
            Text("Building beautiful and fast iOS apps with SwiftUI.")
                .font(.body)
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(12)
        .shadow(radius: 5)
    }
}
\`\`\`
`
  }
};

export default SwiftLesson2_1Content;