import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson2_2Content: LessonContent = {
  title: 'State និង Binding',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា State នៅក្នុង SwiftUI',
    'ស្គាល់ពីរបៀបប្រើប្រាស់ Property Wrappers \`@State\`',
    'យល់ពីរបៀបដែល UI ផ្លាស់ប្តូរដោយស្វ័យប្រវត្តិនៅពេល State ផ្លាស់ប្តូរ',
    'រៀនពីរបៀបប្រើប្រាស់ Property Wrappers \`@Binding\` ដើម្បីចែករំលែក State រវាង Views',
    'យល់ពីភាពខុសគ្នារវាង \`@State\` និង \`@Binding\`'
  ],
  content: `
# State និង Binding 🔄

---

នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីគោលគំនិតដ៏សំខាន់បំផុតមួយនៃ SwiftUI គឺ **State Management** (ការគ្រប់គ្រងស្ថានភាព)។ មិនដូច UI Frameworks ចាស់ៗទេ SwiftUI ធ្វើបច្ចុប្បន្នភាព UI ដោយស្វ័យប្រវត្តិនៅពេលដែលទិន្នន័យ (State) ផ្លាស់ប្តូរ។

---

## 1. អ្វីទៅជា State?

**State** គឺជាទិន្នន័យដែលផ្លាស់ប្តូរតាមពេលវេលា និងប៉ះពាល់ដល់ UI របស់កម្មវិធី។ ឧទាហរណ៍៖
-   តម្លៃ Counter ដែលកើនឡើងនៅពេលអ្នកចុចប៊ូតុង។
-   អត្ថបទនៅក្នុង TextField ដែលអ្នកវាយបញ្ចូល។
-   ស្ថានភាពបើក/បិទរបស់ Toggle ។

នៅក្នុង SwiftUI ព័ត៌មាននេះត្រូវបានរក្សាទុកដោយប្រើ Property Wrapper **\`@State\`** ។ នៅពេលដែលតម្លៃរបស់ Property មួយដែលមាន \`@State\` ផ្លាស់ប្តូរ SwiftUI នឹងធ្វើបច្ចុប្បន្នភាព UI របស់ View នោះដោយស្វ័យប្រវត្តិ។

\`\`\`swift
import SwiftUI

struct CounterView: View {
    @State private var count = 0 // ប្រកាស State
    
    var body: some View {
        VStack {
            Text("រាប់: \\(count)")
                .font(.largeTitle)
            
            Button("ចុចខ្ញុំ") {
                count += 1 // ផ្លាស់ប្តូរ State
            }
        }
    }
}
\`\`\`

---

## 2. របៀបប្រើប្រាស់ \`@State\`

-   **ប្រើ \`@State\` នៅពីមុខ Property:** ត្រូវប្រាកដថាប្រើ \`@State\` នៅពីមុខ Property ដែលអ្នកចង់ឱ្យ SwiftUI តាមដាន។
-   **ប្រើ \`private\`:** តាមលំនាំដើម Property ដែលមាន \`@State\` គួរតែត្រូវបានកំណត់ជា \`private\` ដើម្បីការពារការចូលប្រើពី Views ខាងក្រៅ។
-   **View ធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិ:** នៅពេលដែលតម្លៃ \`count\` នៅក្នុងឧទាហរណ៍ខាងលើផ្លាស់ប្តូរ \`Text("រាប់: \\(count)")\` នឹងធ្វើបច្ចុប្បន្នភាពដោយខ្លួនឯង។

---

## 3. អ្វីទៅជា Binding?

**Binding** គឺជាតំណភ្ជាប់ពីរទិស (Two-way Connection) រវាង View មេ (Parent View) និង View កូន (Child View)។ វារួមបញ្ចូលគ្នានូវ Property Wrapper **\`@Binding\`**។

-   **ប្រើ Binding ដើម្បីចែករំលែក State:** នៅពេលដែលអ្នកចង់ឱ្យ View កូនមួយអាចផ្លាស់ប្តូរតម្លៃ State របស់ View មេ អ្នកត្រូវប្រើ \`@Binding\`។ នេះអនុញ្ញាតឱ្យ View កូនធ្វើការដោយផ្ទាល់ជាមួយតម្លៃ State របស់ View មេ ដោយមិនចាំបាច់មានច្បាប់ចម្លង (Copy) នោះទេ។

\`\`\`swift
// Child View
struct MyTextField: View {
    @Binding var text: String // Binding to a Parent's State
    
    var body: some View {
        TextField("វាយបញ្ចូលអត្ថបទ...", text: $text)
    }
}
\`\`\`

---

## 4. ភាពខុសគ្នារវាង \`@State\` និង \`@Binding\`

| លក្ខណៈ       | **@State**                             | **@Binding**                         |
| :------------ | :------------------------------------ | :----------------------------------- |
| **តួនាទី**    | គ្រប់គ្រង State ផ្ទាល់ខ្លួនរបស់ View | ប្រើដើម្បីផ្លាស់ប្តូរ State របស់ View ផ្សេងទៀត |
| **ភាពជាម្ចាស់** | ម្ចាស់នៃទិន្នន័យ (Source of Truth) | មិនមែនជាម្ចាស់ទេ គ្រាន់តែជាតំណភ្ជាប់ |
| **សញ្ញា**     | គ្មាន ($) សម្រាប់ប្រកាសទេ | ប្រើសញ្ញាដុល្លារ (\`$\`) នៅពេលផ្ញើតម្លៃ |
| **ការប្រើប្រាស់** | នៅក្នុង View តែមួយ | សម្រាប់ចែករំលែក State រវាង Views |

**ឧទាហរណ៍៖ ការប្រើប្រាស់ \`@Binding\`**

\`\`\`swift
// Parent View
struct ParentView: View {
    @State private var userName = ""
    
    var body: some View {
        VStack {
            Text("ឈ្មោះរបស់អ្នកគឺ: \\(userName)")
            // ប្រើ $ ដើម្បីផ្ញើ Binding
            MyTextField(text: $userName)
        }
    }
}
\`\`\`

នៅក្នុងឧទាហរណ៍នេះ នៅពេលដែលអ្នកវាយបញ្ចូលអត្ថបទក្នុង \`MyTextField\` វាផ្លាស់ប្តូរតម្លៃ \`userName\` នៅក្នុង \`ParentView\` ដោយស្វ័យប្រវត្តិ។

---
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Toggle</h3>
<p>ប្រើ \`@State\` ដើម្បីគ្រប់គ្រងស្ថានភាពបើក/បិទរបស់ Toggle។</p>
<pre><code class="language-swift">
import SwiftUI

struct ToggleExample: View {
    @State private var isLightOn = false

    var body: some View {
        VStack {
            Toggle("បើក/បិទភ្លើង", isOn: $isLightOn)
                .padding()

            Text(isLightOn ? "ភ្លើងបានបើក!" : "ភ្លើងបានបិទ")
                .font(.title)
                .foregroundColor(isLightOn ? .yellow : .gray)
        }
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ Slider ជាមួយ State</h3>
<p>ប្រើ \`@State\` ដើម្បីគ្រប់គ្រងតម្លៃរបស់ Slider។</p>
<pre><code class="language-swift">
import SwiftUI

struct SliderExample: View {
    @State private var sliderValue: Double = 50.0

    var body: some View {
        VStack {
            Slider(value: $sliderValue, in: 0...100)
                .padding()
            
            Text("តម្លៃ: \\(Int(sliderValue))")
                .font(.headline)
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Property Wrapper មួយណាដែលប្រើសម្រាប់គ្រប់គ្រង State ផ្ទាល់ខ្លួនរបស់ View?',
      options: [
        '`@Binding`',
        '`@State`',
        '`@ObservableObject`',
        '`@EnvironmentObject`'
      ],
      correct: 1,
      explanation: '`@State` ត្រូវបានប្រើដើម្បីរក្សាទុកទិន្នន័យដែលផ្លាស់ប្តូរនៅក្នុង View តែមួយ។'
    },
    {
      question: 'តើ View ផ្លាស់ប្តូរដោយស្វ័យប្រវត្តិនៅពេលណា?',
      options: [
        'នៅពេលដែលអ្នកចុចប៊ូតុង',
        'នៅពេលដែលអ្នកផ្លាស់ប្តូរ State Property',
        'នៅពេលដែលអ្នកបិទបើកកម្មវិធីឡើងវិញ',
        'នៅពេលដែលអ្នកផ្លាស់ប្តូរលំដាប់ Modifiers'
      ],
      correct: 1,
      explanation: 'SwiftUI ធ្វើបច្ចុប្បន្នភាព UI ដោយស្វ័យប្រវត្តិនៅពេលដែលតម្លៃរបស់ `@State` Property ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើអ្វីទៅជាតួនាទីរបស់ \`@Binding\`?',
      options: [
        'គ្រប់គ្រង State សម្រាប់ View មេ',
        'បង្កើត View ថ្មី',
        'តំណភ្ជាប់ពីរទិសរវាង View មេនិង View កូន',
        'គ្មានតួនាទីអ្វីទាំងអស់'
      ],
      correct: 2,
      explanation: '`@Binding` ត្រូវបានប្រើដើម្បីបង្កើតតំណភ្ជាប់ពីរទិសរវាង Views ដែលអនុញ្ញាតឱ្យ View កូនអាចផ្លាស់ប្តូរ State របស់ View មេបាន។'
    },
    {
      question: 'តើអ្នកគួរប្រើសញ្ញាអ្វីនៅពេលផ្ញើតម្លៃ Binding?',
      options: [
        '`#`',
        '`@`',
        '`&`',
        '`$`'
      ],
      correct: 3,
      explanation: 'អ្នកត្រូវតែប្រើសញ្ញា `$text` ដើម្បីផ្ញើតម្លៃជា Binding។'
    },
    {
      question: 'តើ \`@State\` Property គួរតែត្រូវបានកំណត់ជាអ្វី?',
      options: [
        '`public`',
        '`private`',
        '`fileprivate`',
        '`internal`'
      ],
      correct: 1,
      explanation: 'តាមលំនាំដើម `@State` Properties គួរតែត្រូវបានកំណត់ជា `private`។'
    },
    {
      question: 'តើអ្វីជា "Source of Truth" របស់ទិន្នន័យ?',
      options: [
        'View កូន',
        'View មេដែលមាន `@Binding`',
        'View ដែលមាន `@State`',
        'Static Data'
      ],
      correct: 2,
      explanation: 'View ដែលមាន `@State` គឺជាម្ចាស់ទិន្នន័យ ឬ "Source of Truth"។'
    },
    {
      question: 'តើ SwiftUI ដឹងថាពេលណាត្រូវធ្វើបច្ចុប្បន្នភាព UI ដោយរបៀបណា?',
      options: [
        'នៅពេលដែលអ្នកចុចប៊ូតុង Refresh',
        'នៅពេលដែលតម្លៃរបស់ Property ជាមួយ `@State` ផ្លាស់ប្តូរ',
        'រៀងរាល់ 10 វិនាទីម្តង',
        'នៅពេលដែលកម្មវិធីចាប់ផ្តើម'
      ],
      correct: 1,
      explanation: 'SwiftUI ធ្វើការដោយផ្អែកលើ State។ នៅពេល State ផ្លាស់ប្តូរ UI នឹងធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ \`@Binding\` Property គួរតែត្រូវបានកំណត់ជា \`private\` ដែរឬទេ?',
      options: [
        'គួរតែ',
        'មិនគួរទេ',
        'បានតែពេលប្រើក្នុង View តែមួយ',
        'គ្មានច្បាប់ច្បាស់លាស់'
      ],
      correct: 1,
      explanation: '`@Binding` មិនគួរត្រូវបានកំណត់ជា private ទេ ព្រោះវាត្រូវតែអាចចូលប្រើបានពី View ខាងក្រៅ (Parent View)។'
    },
    {
      question: 'តើអ្វីជាប្រភេទនៃទិន្នន័យដែល \`@State\` អាចគ្រប់គ្រងបាន?',
      options: [
        'តែ String ប៉ុណ្ណោះ',
        'តែ Int ប៉ុណ្ណោះ',
        'បានតែ Data Structures',
        'គ្រប់ប្រភេទទិន្នន័យដូចជា String, Int, Bool, Array ជាដើម'
      ],
      correct: 3,
      explanation: '`@State` អាចគ្រប់គ្រងគ្រប់ប្រភេទទិន្នន័យដែលគោរពតាម Protocol `Equatable` ។'
    },
    {
      question: 'តើ UI Frameworks ចាស់ៗដោះស្រាយការផ្លាស់ប្តូរទិន្នន័យដោយរបៀបណា?',
      options: [
        'ដោយស្វ័យប្រវត្តិដូច SwiftUI',
        'ត្រូវសរសេរកូដដោយដៃដើម្បីធ្វើបច្ចុប្បន្នភាព UI',
        'ដោយប្រើ Machine Learning',
        'ពួកគេមិនអាចដោះស្រាយការផ្លាស់ប្តូរទិន្នន័យទេ'
      ],
      correct: 1,
      explanation: 'UI Frameworks ចាស់ៗភាគច្រើន (ដូចជា UIKit) តម្រូវឱ្យអ្នកអភិវឌ្ឍន៍សរសេរកូដដើម្បីធ្វើបច្ចុប្បន្នភាព UI ឡើងវិញដោយដៃ។'
    }
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដែលមាន TextField និង Button ដើម្បីគ្រប់គ្រង State។

**តម្រូវការ:**

1.  **State:**
    -   បង្កើត State Property មួយឈ្មោះ \`userName\` សម្រាប់រក្សាទុកឈ្មោះអ្នកប្រើប្រាស់។
    -   បង្កើត State Property មួយឈ្មោះ \`isSubmitted\` ដើម្បីដឹងថាតើ Button ត្រូវបានចុចឬអត់។

2.  **Views:**
    -   ប្រើ \`VStack\` ដើម្បីរៀបចំ Views ។
    -   ប្រើ \`TextField\` ដើម្បីឱ្យអ្នកប្រើប្រាស់វាយបញ្ចូលឈ្មោះ។
    -   ប្រើ \`Button\` ដែលនៅពេលចុច នឹងផ្លាស់ប្តូរ \`isSubmitted\` State ។
    -   ប្រើ \`Text\` ដើម្បីបង្ហាញឈ្មោះអ្នកប្រើប្រាស់ នៅពេល \`isSubmitted\` គឺ \`true\`។

3.  **Binding:**
    -   ត្រូវប្រាកដថាបានប្រើ \`@Binding\` ត្រឹមត្រូវនៅកន្លែងដែលត្រូវការ។

**ការណែនាំ:** ប្រើ \`if\` ដើម្បីគ្រប់គ្រងថាតើ Text គួរត្រូវបានបង្ហាញឬអត់។
    `,
    solution: `
\`\`\`swift
import SwiftUI

struct UserProfileView: View {
    @State private var userName = ""
    @State private var isSubmitted = false
    
    var body: some View {
        VStack(spacing: 20) {
            if isSubmitted {
                Text("សូមស្វាគមន៍, \\(userName)!")
                    .font(.title)
                    .foregroundColor(.green)
            } else {
                Text("សូមបញ្ចូលឈ្មោះរបស់អ្នក")
                    .font(.headline)
            }
            
            TextField("ឈ្មោះរបស់អ្នក...", text: $userName)
                .textFieldStyle(.roundedBorder)
                .padding(.horizontal)
            
            Button("បញ្ជូន") {
                isSubmitted = true
            }
            .padding()
            .background(.blue)
            .foregroundColor(.white)
            .cornerRadius(10)
        }
        .padding()
    }
}
\`\`\`
`
  }
};

export default SwiftLesson2_2Content;