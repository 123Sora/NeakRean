import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson3_1Content: LessonContent = {
  title: 'ការគ្រប់គ្រង State: @State និង @Binding',
  objectives: [
    'ពង្រីកការយល់ដឹងពីគោលគំនិតរបស់ @State និង @Binding',
    'យល់ដឹងពីរបៀបដែល @State និង @Binding ដំណើរការនៅពីក្រោយឆាក',
    'អនុវត្តការប្រើប្រាស់ @State និង @Binding ក្នុងការសាងសង់ Components',
    'ស្វែងយល់ពី "Source of Truth" នៅក្នុងការគ្រប់គ្រង State'
  ],
  content: `
# ការគ្រប់គ្រង State: @State និង @Binding 💡

---

នៅក្នុង SwiftUI ការគ្រប់គ្រងស្ថានភាព (State Management) គឺជារឿងសំខាន់បំផុតដើម្បីបង្កើត UI ដែលមានលក្ខណៈ Interactive។ SwiftUI ធ្វើការដោយផ្អែកលើគំរូ **Declarative UI** ដែលមានន័យថា UI របស់អ្នកគឺជាមុខងាររបស់ State។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនកាន់តែស៊ីជម្រៅអំពី Property Wrappers ដ៏សំខាន់ពីរគឺ **\`@State\`** និង **\`@Binding\`**។

## 1. ការយល់ដឹងពី @State ជា "Source of Truth"

**\`@State\`** គឺជា Property Wrapper ដែលប្រាប់ SwiftUI ថា Property នេះគឺជា "ប្រភពនៃការពិត" (Source of Truth) សម្រាប់ទិន្នន័យនៅក្នុង View នេះ។ វាក៏ប្រាប់ Framework ឱ្យតាមដានតម្លៃរបស់វា ហើយនៅពេលដែលតម្លៃនោះផ្លាស់ប្តូរ SwiftUI នឹងធ្វើបច្ចុប្បន្នភាព View ឡើងវិញដោយស្វ័យប្រវត្តិ។

**លក្ខណៈសំខាន់ៗនៃ \`@State\`:**
-   **ម្ចាស់ទិន្នន័យ (Owner):** View ដែលប្រកាស \`@State\` គឺជាម្ចាស់នៃទិន្នន័យនោះ។
-   **ការផ្លាស់ប្តូរ View (Re-rendering):** រាល់ពេលដែលតម្លៃ \`@State\` ផ្លាស់ប្តូរ \`body\` Property របស់ View នឹងត្រូវបានហៅម្តងទៀតដើម្បីធ្វើបច្ចុប្បន្នភាព UI ។
-   **ការប្រើប្រាស់ \`private\`:** តាមគោលការណ៍ **SwiftUI Convention**, Properties ដែលមាន \`@State\` គួរតែត្រូវបានប្រកាសជា \`private\`។ នេះគឺដើម្បីធានាថា State ត្រូវបានគ្រប់គ្រងនៅក្នុង View របស់វាផ្ទាល់ និងមិនត្រូវបានផ្លាស់ប្តូរដោយ View ខាងក្រៅដោយចៃដន្យឡើយ។

\`\`\`swift
struct CounterView: View {
    @State private var count: Int = 0 // "Source of Truth" សម្រាប់ count
    
    var body: some View {
        VStack {
            Text("រាប់: \\(count)")
            Button("បង្កើន") {
                self.count += 1 // ផ្លាស់ប្តូរ State
            }
        }
    }
}
\`\`\`

---

## 2. ការយល់ដឹងពី @Binding ជា "តំណភ្ជាប់ពីរទិស"

**\`@Binding\`** គឺជា Property Wrapper មួយទៀតដែលមិនមែនជាម្ចាស់ទិន្នន័យ។ វាតំណាងឱ្យតំណភ្ជាប់ពីរទិស (Two-way Connection) ទៅកាន់ "Source of Truth" ដែលបានប្រកាសនៅក្នុង View ផ្សេងទៀត (Parent View)។ វាងាយស្រួលប្រើសម្រាប់បង្កើត Views កូន (Child Views) ដែលអាចកែប្រែទិន្នន័យរបស់ Views មេ (Parent Views)។

**លក្ខណៈសំខាន់ៗនៃ \`@Binding\`:**
-   **គ្មានម្ចាស់ (Non-owner):** View ដែលប្រើ \`@Binding\` មិនមែនជាម្ចាស់ទិន្នន័យនោះទេ។ វាកាន់តែដូចជា Pointer ទៅកាន់តម្លៃដើម។
-   **ការប្រើប្រាស់សញ្ញា \`$\`:** នៅពេលដែលអ្នកส่งតម្លៃពី View មេទៅ View កូន អ្នកត្រូវប្រើសញ្ញា \`$text\` (ឧទាហរណ៍៖ \`$count\`) ដែលបង្កើតជា Binding ទៅកាន់ Property នោះ។

\`\`\`swift
// Child View
struct IncrementButton: View {
    @Binding var count: Int // Binding ទៅកាន់ State របស់ View ផ្សេង
    
    var body: some View {
        Button("បង្កើនពី Child") {
            self.count += 1 // ផ្លាស់ប្តូរ State របស់ Parent
        }
    }
}

// Parent View
struct ParentCounterView: View {
    @State private var count: Int = 0
    
    var body: some View {
        VStack {
            Text("រាប់: \\(count)")
            IncrementButton(count: $count) // ส่งតម្លៃជា Binding
        }
    }
}
\`\`\`

---

## 3. ភាពខុសគ្នារវាង @State និង @Binding

| លក្ខណៈ       | **@State**                             | **@Binding**                         |
| :------------ | :------------------------------------ | :----------------------------------- |
| **តួនាទី**    | គ្រប់គ្រង State ផ្ទាល់ខ្លួនរបស់ View | ប្រើដើម្បីផ្លាស់ប្តូរ State របស់ View ផ្សេងទៀត |
| **ភាពជាម្ចាស់** | ម្ចាស់នៃទិន្នន័យ (Source of Truth) | មិនមែនជាម្ចាស់ទេ គ្រាន់តែជាតំណភ្ជាប់ |
| **សញ្ញា**     | គ្មាន ($) សម្រាប់ប្រកាសទេ | ប្រើសញ្ញាដុល្លារ (\`$\`) នៅពេលส่งតម្លៃ |
| **ការប្រើប្រាស់** | នៅក្នុង View តែមួយ | សម្រាប់ចែករំលែក State រវាង Views |

**គន្លឹះ៖** ប្រើ \`@State\` នៅពេលដែល View របស់អ្នកត្រូវការរក្សាទុកទិន្នន័យផ្ទាល់ខ្លួន ហើយប្រើ \`@Binding\` នៅពេលដែល View របស់អ្នកត្រូវការផ្លាស់ប្តូរទិន្នន័យដែលជាកម្មសិទ្ធិរបស់ View ផ្សេងទៀត។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើប្រាស់ TextField ជាមួយ @State និង @Binding</h3>
<p>TextField របស់ SwiftUI ប្រើ Binding សម្រាប់គ្រប់គ្រងអត្ថបទដែលបានវាយបញ្ចូល។</p>
<pre><code class="language-swift">
import SwiftUI

struct MyFormView: View {
    @State private var name = ""

    var body: some View {
        VStack(spacing: 20) {
            TextField("បញ្ចូលឈ្មោះរបស់អ្នក", text: $name) // text: $name គឺជា Binding
                .textFieldStyle(.roundedBorder)
            
            Text("ឈ្មោះដែលបានបញ្ចូល៖ \\(name)")
                .font(.title2)
        }
        .padding()
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបង្កើត Reusable Component</h3>
<p>បង្កើត Button ដែលអាចប្រើឡើងវិញបានដើម្បី Toggle ស្ថានភាពមួយ។</p>
<pre><code class="language-swift">
struct ToggleButton: View {
    @Binding var isOn: Bool
    var title: String

    var body: some View {
        Button(action: {
            self.isOn.toggle()
        }) {
            Text(title)
                .padding()
                .background(isOn ? Color.green : Color.red)
                .foregroundColor(.white)
                .cornerRadius(10)
        }
    }
}

struct ParentToggleView: View {
    @State private var lightIsOn = false

    var body: some View {
        VStack {
            Text(lightIsOn ? "ភ្លើងបានបើក" : "ភ្លើងបានបិទ")
            ToggleButton(isOn: $lightIsOn, title: "ប្តូរភ្លើង")
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ \`@State\` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State របស់ View ផ្សេងទៀត',
        'គ្រប់គ្រង State ផ្ទាល់ខ្លួនរបស់ View',
        'បង្កើត Views ឡើងវិញ',
        'ភ្ជាប់ទៅ View ថ្មី'
      ],
      correct: 1,
      explanation: '`@State` ត្រូវបានប្រើដើម្បីគ្រប់គ្រង State ផ្ទាល់ខ្លួនរបស់ View ដែលវាត្រូវបានប្រកាស។'
    },
    {
      question: 'តើ `Source of Truth` មានន័យដូចម្តេច?',
      options: [
        'ជា View ដែលមិនអាចផ្លាស់ប្តូរបាន',
        'ជា View ដែលមិនមាន State',
        'ជាម្ចាស់ទិន្នន័យដើមដែល Views ផ្សេងទៀតអាចចូលប្រើបាន',
        'ជាតម្លៃដែលបានកំណត់ជា static'
      ],
      correct: 2,
      explanation: '`Source of Truth` គឺជាម្ចាស់ទិន្នន័យដើមដែលត្រូវបានគ្រប់គ្រងដោយ `@State`។'
    },
    {
      question: 'តើ \`@Binding\` Property គួរត្រូវបានកំណត់ជា private ដែរឬទេ?',
      options: [
        'គួរតែ',
        'មិនគួរទេ',
        'បានតែពេល View នោះជា Parent View',
        'វាអាស្រ័យលើប្រភេទទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`@Binding` មិនគួរត្រូវបានកំណត់ជា `private` ទេ ព្រោះវាត្រូវតែអាចចូលប្រើបានពី View មេដើម្បីส่งតម្លៃ។'
    },
    {
      question: 'តើអ្នកត្រូវប្រើសញ្ញាអ្វីនៅពេលส่งតម្លៃពី \`@State\` ទៅ \`@Binding\`?',
      options: [
        '`&`',
        '`#`',
        '`$`',
        '`!`'
      ],
      correct: 2,
      explanation: 'អ្នកត្រូវប្រើសញ្ញា `$` (ឧ. `$count`) ដើម្បីส่งតម្លៃ Binding ។'
    },
    {
      question: 'តើ SwiftUI ធ្វើអ្វីនៅពេលតម្លៃ \`@State\` ផ្លាស់ប្តូរ?',
      options: [
        'វាគាំង',
        'វានឹងបង្ហាញ Warning នៅក្នុង Console',
        'វានឹងធ្វើបច្ចុប្បន្នភាព UI របស់ View ឡើងវិញដោយស្វ័យប្រវត្តិ',
        'វានឹងធ្វើឱ្យកម្មវិធីដំណើរការយឺត'
      ],
      correct: 2,
      explanation: 'នៅពេលដែលតម្លៃ `@State` ផ្លាស់ប្តូរ `body` Property របស់ View នឹងត្រូវបានហៅម្តងទៀតដើម្បីធ្វើបច្ចុប្បន្នភាព UI។'
    },
    {
      question: 'តើ \`@State\` Property គួរត្រូវបានកំណត់ជា \`private\` ដោយសារអ្វី?',
      options: [
        'វាបង្កើនល្បឿនកម្មវិធី',
        'វាការពារការចូលប្រើប្រាស់ពី View ខាងក្រៅ',
        'វាជួយសន្សំសំចៃ Memory',
        'វាជារបៀបសរសេរកូដចាស់'
      ],
      correct: 1,
      explanation: 'ការប្រើ `private` សម្រាប់ `@State` គឺដើម្បីការពារការផ្លាស់ប្តូរ State ពី Views ខាងក្រៅ។'
    },
    {
      question: 'តើ \`@Binding\` តំណាងឱ្យអ្វី?',
      options: [
        'ជាការចម្លងតម្លៃ',
        'ជាតម្លៃថេរ',
        'ជាតំណភ្ជាប់ពីរទិស',
        'ជាតម្លៃដែលមិនផ្លាស់ប្តូរ'
      ],
      correct: 2,
      explanation: '`@Binding` តំណាងឱ្យតំណភ្ជាប់ពីរទិសរវាង View កូន និង State របស់ View មេ។'
    },
    {
      question: 'តើអ្នកអាចប្រើ \`@State\` នៅក្នុង Struct មួយដែលមិនមែនជា View បានដែរឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បានតែពេលប្រើជាមួយ SwiftUI',
        'បានតែជាមួយ Class'
      ],
      correct: 1,
      explanation: '`@State` គឺជា Property Wrapper សម្រាប់ Views របស់ SwiftUI តែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ \`@Binding\`?',
      options: [
        'ធ្វើឱ្យ View កូនមិនចាំបាច់ជាម្ចាស់ State របស់វា',
        'ធ្វើឱ្យ View កូនអាចបង្កើត State ថ្មីបាន',
        'បង្កើនទំហំកម្មវិធី',
        'ធ្វើឱ្យកម្មវិធីដំណើរការយឺត'
      ],
      correct: 0,
      explanation: 'ការប្រើ `@Binding` អនុញ្ញាតឱ្យ View កូនអាចកែប្រែ State របស់ View មេដោយមិនចាំបាច់ជាម្ចាស់ State នោះ។'
    },
    {
      question: 'តើកូដមួយណាដែលត្រឹមត្រូវសម្រាប់ការប្រកាស \`@State\`?',
      options: [
        '`@State private var score = 0`',
        '`var score: Int`',
        '`@State var score = 0`',
        '`let score = 0`'
      ],
      correct: 0,
      explanation: 'ការប្រកាសត្រឹមត្រូវគឺ `@State private var` ។'
    },
    {
      question: 'តើ SwiftUI View មួយណាដែលផ្លាស់ប្តូរនៅពេលដែល Binding ផ្លាស់ប្តូរ?',
      options: [
        'តែ View កូនប៉ុណ្ណោះ',
        'តែ View មេប៉ុណ្ណោះ',
        'ទាំង View មេនិង View កូន',
        'គ្មាន View ណាផ្លាស់ប្តូរទេ'
      ],
      correct: 2,
      explanation: 'ដោយសារ Binding គឺជាតំណភ្ជាប់ពីរទិស នៅពេលដែលតម្លៃផ្លាស់ប្តូរ ទាំង View កូននិង View មេនឹងធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិ។'
    }
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដែលមាន Parent View និង Child View ដោយប្រើប្រាស់ @State និង @Binding។

**តម្រូវការ:**

1.  **Parent View:**
    -   បង្កើត View មួយឈ្មោះ \`SettingsView\`។
    -   ប្រកាស \`@State private var isNightModeOn = false\`។
    -   បង្ហាញ \`Text\` ដែលប្រាប់ពីស្ថានភាព (ឧ. "ពេលយប់បានបើក")។

2.  **Child View:**
    -   បង្កើត View មួយឈ្មោះ \`ToggleThemeButton\`។
    -   ប្រកាស \`@Binding var isOn: Bool\`។
    -   បង្កើត Button មួយដែលនៅពេលចុច នឹងប្តូរតម្លៃ \`isOn\`។

3.  **ការអនុវត្តន៍:**
    -   នៅក្នុង \`SettingsView\` ត្រូវប្រើ \`ToggleThemeButton(isOn: $isNightModeOn)\` ដើម្បីភ្ជាប់ View ទាំងពីរ។
    -   ត្រូវប្រាកដថា UI របស់ Parent View ធ្វើបច្ចុប្បន្នភាពនៅពេលដែល Button របស់ Child View ត្រូវបានចុច។

**ការណែនាំ:** ព្យាយាមប្រើ \`if\` ដើម្បីផ្លាស់ប្តូរពណ៌ផ្ទៃខាងក្រោយរបស់ Parent View។
    `,
    solution: `
\`\`\`swift
import SwiftUI

// Child View
struct ToggleThemeButton: View {
    @Binding var isOn: Bool

    var body: some View {
        Button(action: {
            self.isOn.toggle()
        }) {
            Text(isOn ? "បិទរបៀបពេលយប់" : "បើករបៀបពេលយប់")
                .padding()
                .background(isOn ? .black : .gray)
                .foregroundColor(.white)
                .cornerRadius(10)
        }
    }
}

// Parent View
struct SettingsView: View {
    @State private var isNightModeOn = false

    var body: some View {
        ZStack {
            Color(isNightModeOn ? .black : .white)
                .ignoresSafeArea()

            VStack(spacing: 30) {
                Text(isNightModeOn ? "របៀបពេលយប់បានបើក" : "របៀបពេលថ្ងៃបានបើក")
                    .font(.title)
                    .fontWeight(.bold)
                    .foregroundColor(isNightModeOn ? .white : .black)

                ToggleThemeButton(isOn: $isNightModeOn)
            }
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson3_1Content;