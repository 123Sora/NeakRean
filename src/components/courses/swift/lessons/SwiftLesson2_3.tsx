import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson2_3Content: LessonContent = {
  title: 'Layout និង Stacks',
  objectives: [
    'យល់ដឹងពីរបៀបរៀបចំ Layouts ឱ្យស្អាតនិងមានប្រសិទ្ធភាព',
    'ស្គាល់ពីលក្ខណៈសម្បត្តិលម្អិតនៃ VStack, HStack និង ZStack',
    'រៀនពីរបៀបប្រើ `alignment` និង `spacing` នៅក្នុង Stacks',
    'ប្រើប្រាស់ `Spacer` ដើម្បីគ្រប់គ្រងចន្លោះរវាង Views',
    'យល់ដឹងពីរបៀបដែល Views ត្រូវបានរៀបចំនៅក្នុង View Hierarchy'
  ],
  content: `
# Layout និង Stacks 📐

---

នៅក្នុង SwiftUI ការរៀបចំ Layout (ប្លង់) គឺមានសារៈសំខាន់ខ្លាំងណាស់ក្នុងការបង្កើត User Interface (UI) ដែលមើលទៅស្អាតនិងមានរបៀបរៀបរយ។ SwiftUI ប្រើប្រាស់ **Stacks** ជាឧបករណ៍ចម្បងក្នុងការរៀបចំ Views ។

## 1. ការយល់ដឹងពី Stacks

Stacks គឺជា View Containers ដែលរៀបចំ Views ផ្សេងទៀតតាមលំដាប់លំដោយ។ ជំនួសឱ្យការកំណត់កូអរដោនេដោយដៃដូច Frame-based UI (ឧ. UIKit) SwiftUI នឹងធ្វើការងារនេះដោយស្វ័យប្រវត្តិ។

-   **VStack (Vertical Stack):** រៀបចំ Views ពីលើចុះក្រោម។
-   **HStack (Horizontal Stack):** រៀបចំ Views ពីឆ្វេងទៅស្តាំ។
-   **ZStack (Z-axis Stack):** ដាក់ Views ពីលើគ្នា ដូចជាការដាក់ស្រទាប់។

### **លក្ខណៈសម្បត្តិសំខាន់ៗរបស់ Stacks**

Stacks នីមួយៗមានលក្ខណៈសម្បត្តិសំខាន់ពីរគឺ \`alignment\` និង \`spacing\`។

-   **Alignment:** កំណត់ការតម្រឹមរបស់ Views នៅក្នុង Stack ។
    -   សម្រាប់ **VStack**: ប្រើ \`alignment\` (\`.leading\`, \`.center\`, \`.trailing\`) ដើម្បីតម្រឹម Views តាមផ្ដេក។
    -   សម្រាប់ **HStack**: ប្រើ \`alignment\` (\`.top\`, \`.center\`, \`.bottom\`, \`.firstTextBaseline\`, \`.lastTextBaseline\`) ដើម្បីតម្រឹម Views តាមបញ្ឈរ។
-   **Spacing:** កំណត់ចន្លោះរវាង Views នីមួយៗនៅក្នុង Stack។ អ្នកអាចកំណត់តម្លៃជា \`CGFloat\`។

\`\`\`swift
// VStack ជាមួយ alignment និង spacing
VStack(alignment: .leading, spacing: 10) {
    Text("ចំណងជើង")
    Text("អត្ថបទរង")
}
\`\`\`

---

## 2. ការប្រើប្រាស់ \`Spacer()\` និង \`Divider()\`

ដើម្បីគ្រប់គ្រងចន្លោះទំនេរនៅក្នុង Layouts របស់អ្នកឱ្យបានល្អ អ្នកអាចប្រើ \`Spacer()\`។

-   **\`Spacer()\`:** បង្កើតចន្លោះទំនេរដែលអាចពង្រីកបានរវាង Views ។ វាមានប្រយោជន៍សម្រាប់រុញ Views ទៅម្ខាងៗនៃអេក្រង់។
    \`\`\`swift
    HStack {
        Text("ឆ្វេង")
        Spacer() // រុញ Views ទៅឆ្វេងនិងស្តាំ
        Text("ស្តាំ")
    }
    \`\`\`
-   **\`Divider()\`:** បង្ហាញបន្ទាត់បែងចែកស្តើងរវាង Views។
    \`\`\`swift
    VStack {
        Text("ផ្នែកទីមួយ")
        Divider()
        Text("ផ្នែកទីពីរ")
    }
    \`\`\`

---

## 3. \`ZStack\` និងការដាក់ Views ពីលើគ្នា

ZStack មានប្រយោជន៍ខ្លាំងណាស់នៅពេលអ្នកចង់ដាក់ Views ពីលើគ្នា។ ZStack ផ្ទុក Views ពីក្រោយមកមុខ ដូច្នេះ View ទីមួយនៅក្នុង ZStack នឹងនៅខាងក្រោយគេ។

\`\`\`swift
ZStack {
    Color.blue.ignoresSafeArea() // ផ្ទៃខាងក្រោយពណ៌ខៀវ
    VStack {
        Image(systemName: "cloud.rain.fill")
            .font(.system(size: 80))
            .foregroundColor(.white)
        Text("ភ្លៀងកំពុងធ្លាក់")
            .font(.title)
            .foregroundColor(.white)
    }
}
\`\`\`

---

## 4. Nested Stacks និង View Hierarchy

អ្នកអាចបញ្ចូល Stacks ទៅក្នុង Stacks ផ្សេងទៀត (Nested Stacks) ដើម្បីបង្កើត Layouts ស្មុគស្មាញ។ នេះបង្កើតជា View Hierarchy ដែលមានរចនាសម្ព័ន្ធដូចដើមឈើ។

ឧទាហរណ៍៖
-   View មេ (Root View) គឺជា \`HStack\`។
-   \`HStack\` នោះមាន View កូនពីរគឺ \`Text\` និង \`VStack\`។
-   \`VStack\` មាន View កូនពីរទៀតគឺ \`Text\` និង \`Button\`។

\`\`\`swift
HStack(alignment: .top) {
    Text("រូបថត")
    VStack(alignment: .leading) {
        Text("ឈ្មោះ៖ សុខា")
        Button("ចុចមើល Profile") {
            // action
        }
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Login Form</h3>
<p>ប្រើ VStack និង TextField ដើម្បីបង្កើត Form Login សាមញ្ញ។</p>
<pre><code class="language-swift">
import SwiftUI

struct LoginForm: View {
    @State private var email = ""
    @State private var password = ""

    var body: some View {
        VStack(spacing: 15) {
            Image(systemName: "person.crop.circle")
                .font(.system(size: 80))
            
            TextField("Email", text: $email)
                .textFieldStyle(.roundedBorder)
            
            SecureField("Password", text: $password)
                .textFieldStyle(.roundedBorder)
            
            Button("ចូលគណនី") {
                // Login action
            }
            .frame(maxWidth: .infinity)
            .padding()
            .background(.blue)
            .foregroundColor(.white)
            .cornerRadius(10)
        }
        .padding()
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Frame និង Alignment</h3>
<p>គ្រប់គ្រងទំហំនិងការតម្រឹមរបស់ View។</p>
<pre><code class="language-swift">
import SwiftUI

struct FrameExample: View {
    var body: some View {
        VStack {
            Text("តម្រឹមទៅស្តាំ")
                .frame(maxWidth: .infinity, alignment: .trailing)
                .padding()
                .background(Color.gray.opacity(0.2))
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Stack មួយណាដែលប្រើដើម្បីរៀបចំ Views ពីលើចុះក្រោម?',
      options: [
        'HStack',
        'VStack',
        'ZStack',
        'Grid'
      ],
      correct: 1,
      explanation: 'VStack (Vertical Stack) រៀបចំ Views ពីលើចុះក្រោម។'
    },
    {
      question: 'តើលក្ខណៈសម្បត្តិ `spacing` ប្រើសម្រាប់អ្វីនៅក្នុង Stack?',
      options: [
        'កំណត់ការតម្រឹម View',
        'កំណត់ទំហំ Stack',
        'កំណត់ចន្លោះរវាង Views',
        'ដាក់ពណ៌ផ្ទៃខាងក្រោយ'
      ],
      correct: 2,
      explanation: '`spacing` ប្រើដើម្បីកំណត់ចន្លោះរវាង Views នៅក្នុង Stack។'
    },
    {
      question: 'តើ Stack មួយណាដែលដាក់ Views ពីមុខទៅក្រោយ (Overlapping)?',
      options: [
        'ZStack',
        'HStack',
        'VStack',
        'Stack'
      ],
      correct: 0,
      explanation: 'ZStack (Z-axis Stack) ដាក់ Views ពីលើគ្នា។'
    },
    {
      question: 'តើអ្វីជាតួនាទីរបស់ `Spacer()`?',
      options: [
        'បង្កើតចន្លោះទំនេរដែលអាចពង្រីកបាន',
        'បង្កើតបន្ទាត់បែងចែក',
        'ដាក់ពណ៌ផ្ទៃខាងក្រោយ',
        'កំណត់ការតម្រឹម'
      ],
      correct: 0,
      explanation: '`Spacer()` បង្កើតចន្លោះទំនេរដែលអាចពង្រីកបាននៅរវាង Views។'
    },
    {
      question: 'តើ `alignment: .leading` នៅក្នុង `VStack` មានន័យដូចម្តេច?',
      options: [
        'តម្រឹម Views ទៅខាងឆ្វេង',
        'តម្រឹម Views ទៅខាងស្តាំ',
        'តម្រឹម Views ទៅកណ្តាល',
        'តម្រឹម Views ទៅបាត'
      ],
      correct: 0,
      explanation: '`alignment: .leading` នៅក្នុង VStack តម្រឹម Views ទៅខាងឆ្វេង (Leading) ។'
    },
    {
      question: 'តើ View មួយណាដែលជា View កូននៅក្នុងកូដនេះ? `HStack { Text("A"); Text("B") }`',
      options: [
        'HStack',
        'Text("A")',
        'ទាំងពីរ Text Views',
        'គ្មាន View កូនទេ'
      ],
      correct: 2,
      explanation: '`Text("A")` និង `Text("B")` គឺជា View កូនរបស់ `HStack`។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Frame-based UI និង SwiftUI Layout?',
      options: [
        'SwiftUI ប្រើការគណនាកូអរដោនេដោយដៃ',
        'Frame-based UI ប្រើការគណនាកូអរដោនេដោយដៃ',
        'មិនមានភាពខុសគ្នាទេ',
        'SwiftUI ប្រើ XML'
      ],
      correct: 1,
      explanation: 'Frame-based UI តម្រូវឱ្យអ្នកអភិវឌ្ឍន៍គណនាកូអរដោនេដោយដៃ ចំណែក SwiftUI ប្រើវិធីសាស្ត្រ Declarative។'
    },
    {
      question: 'តើ View មួយណាដែលត្រូវបានបង្ហាញនៅខាងក្រោយគេនៅក្នុង `ZStack { Text("A"); Text("B") }`?',
      options: [
        'Text("A")',
        'Text("B")',
        'ទាំងពីរ',
        'គ្មានទេ'
      ],
      correct: 0,
      explanation: '`Text("A")` ត្រូវបានដាក់នៅខាងក្រោយគេ ព្រោះវាជា View ទីមួយនៅក្នុង ZStack។'
    },
    {
      question: 'តើคุณអាចដាក់ `VStack` នៅក្នុង `HStack` បានទេ?',
      options: [
        'មិនបាន',
        'បាន',
        'បានតែក្នុងលក្ខខណ្ឌពិសេស',
        'បានតែជាមួយ ZStack'
      ],
      correct: 1,
      explanation: 'អ្នកអាចដាក់ Stack ទៅក្នុង Stack ផ្សេងទៀត (Nested Stacks) ដើម្បីបង្កើត Layout ស្មុគស្មាញ។'
    },
    {
      question: 'តើ `Divider()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បំបែក Stack ទៅជា Views ផ្សេងៗ',
        'បិទ View',
        'បង្ហាញបន្ទាត់បែងចែក',
        'បង្កើតចន្លោះទំនេរ'
      ],
      correct: 2,
      explanation: '`Divider()` ប្រើដើម្បីបង្ហាញបន្ទាត់ស្តើងរវាង Views។'
    },
    {
      question: 'តើអ្វីជាតួនាទីរបស់ `ignoresSafeArea()`?',
      options: [
        'មិនអើពើចន្លោះសុវត្ថិភាពរបស់អេក្រង់ (ឧ. Notch)',
        'ធ្វើឱ្យ View មិនបង្ហាញ',
        'ដាក់ View ទៅកណ្តាល',
        'ផ្លាស់ប្តូរទំហំរបស់ View'
      ],
      correct: 0,
      explanation: '`ignoresSafeArea()` ធ្វើឱ្យ View ពង្រីកដើម្បីគ្របដណ្តប់លើចន្លោះសុវត្ថិភាពរបស់អេក្រង់ (Safe Area) ដូចជា Notch។'
    },
    {
      question: 'តើ View Hierarchy មានរចនាសម្ព័ន្ធដូចអ្វី?',
      options: [
        'ជាបន្ទាត់',
        'ជារង្វង់',
        'ជាមែកធាង (Tree)',
        'ជាក្រាហ្វ'
      ],
      correct: 2,
      explanation: 'Views នៅក្នុង SwiftUI ត្រូវបានរៀបចំនៅក្នុង View Hierarchy ដែលមានរចនាសម្ព័ន្ធដូចដើមឈើ។'
    }
  ],
  lab: {
    task: `
បង្កើត Card UI នៅក្នុង SwiftUI ដែលបង្ហាញព័ត៌មានទំនាក់ទំនង។

**តម្រូវការ:**

1.  **Layout:**
    -   ប្រើ \`VStack\` ជា View មេ។
    -   ប្រើ \`HStack\` ដើម្បីដាក់រូបភាពនិងអត្ថបទ។
    -   ប្រើ \`Spacer()\` ដើម្បីរុញ View ទៅខាងស្តាំ។
    -   ប្រើ \`VStack\` មួយទៀតដើម្បីរៀបចំអត្ថបទព័ត៌មាន។

2.  **Views:**
    -   ប្រើ \`Image(systemName: ...)\` សម្រាប់ Icon។
    -   ប្រើ \`Text(...)\` សម្រាប់បង្ហាញឈ្មោះនិងលេខទូរស័ព្ទ។

3.  **Modifiers:**
    -   ប្រើ \`font()\` និង \`foregroundColor()\`។
    -   ប្រើ \`padding()\`, \`background()\`, និង \`cornerRadius()\` ដើម្បីបង្កើត Card style។

**ការណែនាំ:** ព្យាយាមប្រើ Nested Stacks ដើម្បីរៀបចំ Layout ឱ្យស្អាត។
    `,
    solution: `
\`\`\`swift
import SwiftUI

struct ContactCardView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: 15) {
                Image(systemName: "person.crop.circle.fill")
                    .resizable()
                    .frame(width: 60, height: 60)
                    .foregroundColor(.blue)
                
                VStack(alignment: .leading, spacing: 5) {
                    Text("សុខ ពិសិដ្ឋ")
                        .font(.title2)
                        .fontWeight(.bold)
                    Text("iOS Developer")
                        .font(.subheadline)
                        .foregroundColor(.gray)
                }
                
                Spacer()
                
                Button(action: {}) {
                    Image(systemName: "phone.fill")
                        .padding()
                        .background(.green)
                        .foregroundColor(.white)
                        .clipShape(Circle())
                }
            }
            .padding(.horizontal)
            
            Divider()
            
            Text("លេខទូរស័ព្ទ: 012 345 678")
                .font(.body)
                .padding(.horizontal)
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(15)
        .shadow(radius: 5)
    }
}
\`\`\`
`
  }
};

export default SwiftLesson2_3Content;