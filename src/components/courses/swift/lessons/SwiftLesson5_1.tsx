import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson5_1Content: LessonContent = {
  title: 'Animations ក្នុង SwiftUI',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃការបង្កើត Animations ក្នុង SwiftUI',
    'ស្គាល់ពីរបៀបប្រើ `animation()` modifier',
    'រៀនពីរបៀបប្រើ `withAnimation` block ដើម្បីបង្កើត Explicit Animations',
    'យល់ដឹងពីរបៀបប្រើ `state` និង `transition` សម្រាប់ Animations',
    'ស្គាល់ពីប្រភេទ Animation Styles ផ្សេងៗដូចជា `.spring()` និង `.easeIn()`'
  ],
  content: `
# Animations ក្នុង SwiftUI 🎬

---

Animations ធ្វើឱ្យកម្មវិធីរបស់អ្នកមើលទៅមានលក្ខណៈវិជ្ជាជីវៈ និងផ្តល់បទពិសោធន៍ដ៏ល្អដល់អ្នកប្រើប្រាស់។ នៅក្នុង SwiftUI, ការបង្កើត Animations គឺមានលក្ខណៈសាមញ្ញបំផុតដោយសារតែ Framework ធ្វើការងារភាគច្រើនដោយស្វ័យប្រវត្តិសម្រាប់អ្នក។

## 1. គោលគំនិតរបស់ Implicit vs. Explicit Animations

### Implicit Animations
**Implicit Animations** កើតឡើងនៅពេលដែលអ្នកភ្ជាប់ \`animation()\` modifier ទៅនឹង View មួយ។ នៅពេលដែល State របស់ View ផ្លាស់ប្តូរ (ឧ. \`width\`, \`color\`, \`opacity\`) SwiftUI នឹងធ្វើ Animation ដោយស្វ័យប្រវត្តិ។

\`\`\`swift
struct ImplicitAnimationView: View {
    @State private var isScaled = false
    
    var body: some View {
        Button("ចុចដើម្បីធ្វើ Animation") {
            isScaled.toggle()
        }
        .scaleEffect(isScaled ? 1.5 : 1.0)
        .animation(.easeInOut, value: isScaled) // Implicit Animation
    }
}
\`\`\`
នៅក្នុងឧទាហរណ៍នេះ នៅពេលដែល \`isScaled\` ផ្លាស់ប្តូរពី \`false\` ទៅ \`true\` (ឬផ្ទុយមកវិញ) \`scaleEffect\` នឹងផ្លាស់ប្តូរដោយរលូន។

### Explicit Animations
**Explicit Animations** កើតឡើងនៅពេលដែលអ្នកប្រើ \`withAnimation\` block។ វាផ្តល់ឱ្យអ្នកនូវការគ្រប់គ្រងពេញលេញទៅលើអ្វីដែលអ្នកចង់ធ្វើ Animation ។

\`\`\`swift
struct ExplicitAnimationView: View {
    @State private var isRotated = false

    var body: some View {
        Button("បង្វិល") {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.5)) {
                isRotated.toggle()
            }
        }
        .rotationEffect(.degrees(isRotated ? 360 : 0))
    }
}
\`\`\`
\`withAnimation\` block ប្រាប់ SwiftUI ឱ្យធ្វើ Animation រាល់ការផ្លាស់ប្តូរ State ទាំងអស់ដែលកើតឡើងនៅខាងក្នុង Block នោះ។

---

## 2. ប្រភេទ Animation Styles

SwiftUI មាន Animation Styles ដ៏អស្ចារ្យជាច្រើនដើម្បីជ្រើសរើស៖
-   **\`.linear\`:** ល្បឿនថេរ។
-   **\`.easeIn\`:** ចាប់ផ្តើមយឺតហើយលឿនឡើង។
-   **\`.easeOut\`:** ចាប់ផ្តើមលឿនហើយយឺតទៅវិញ។
-   **\`.easeInOut\`:** ចាប់ផ្តើមយឺត, លឿននៅកណ្តាល, ហើយយឺតទៅវិញ។
-   **\`.spring()\`:** ផ្តល់នូវចលនាធម្មជាតិ និងមានប្រសិទ្ធភាពដូចជាស្ទុះ។ វាមាន Parameters ដូចជា \`response\` និង \`dampingFraction\`។
-   **\`.interpolatingSpring()\`:** ស្រដៀងនឹង \`.spring()\` ប៉ុន្តែផ្តល់ការគ្រប់គ្រងច្រើនជាង។

\`\`\`swift
// ឧទាហរណ៍៖ ការប្រើប្រាស់ .spring()
Circle()
    .frame(width: 50, height: 50)
    .offset(x: isMoved ? 100 : 0)
    .animation(.spring(response: 0.5, dampingFraction: 0.5), value: isMoved)
\`\`\`

---

## 3. Transitions និង View Modifiers

**\`transition()\`** modifier ត្រូវបានប្រើដើម្បីធ្វើ Animation នៅពេលដែល View មួយលេចឡើងឬបាត់ទៅវិញពី View Hierarchy។
-   **\`.scale\`:** បង្កើនឬបន្ថយទំហំ។
-   **\`.opacity\`:** បង្កើនឬបន្ថយភាពថ្លា។
-   **\`.slide\`:** រំកិលចូលឬចេញពីចំហៀង។
-   **\`.move(edge: .leading)\`:** រំកិលចូលឬចេញពីគែមដែលបានកំណត់។

\`\`\`swift
struct TransitionView: View {
    @State private var showCircle = false

    var body: some View {
        VStack {
            Button("បង្ហាញ/លាក់") {
                withAnimation {
                    showCircle.toggle()
                }
            }
            if showCircle {
                Circle()
                    .frame(width: 100, height: 100)
                    .transition(.scale) // ធ្វើ Animation ពេលលេចឡើង/បាត់ទៅវិញ
            }
        }
    }
}
\`\`\`
\`transition()\` ត្រូវតែប្រើនៅក្នុង \`withAnimation\` block ទើបវាដំណើរការ។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការធ្វើ Animation ជាមួយ Multiple Properties</h3>
<p>អ្នកអាចធ្វើ Animation ទៅលើ Properties ច្រើនក្នុងពេលតែមួយ។</p>
<pre><code class="language-swift">
import SwiftUI

struct MultipleAnimationView: View {
    @State private var isTapped = false

    var body: some View {
        Text("Hello, world!")
            .font(.title)
            .padding()
            .background(isTapped ? .blue : .red)
            .foregroundColor(.white)
            .cornerRadius(isTapped ? 25 : 8)
            .rotationEffect(.degrees(isTapped ? 180 : 0))
            .onTapGesture {
                withAnimation(.spring()) {
                    isTapped.toggle()
                }
            }
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ \`matchedGeometryEffect\`</h3>
<p>ធ្វើ Animation រវាង Views ពីរដោយផ្អែកលើ Id តែមួយ។</p>
<pre><code class="language-swift">
import SwiftUI

struct MatchedGeometryView: View {
    @Namespace private var animation
    @State private var isFlipped = false

    var body: some View {
        VStack {
            if !isFlipped {
                Circle()
                    .fill(Color.blue)
                    .frame(width: 50, height: 50)
                    .matchedGeometryEffect(id: "circle", in: animation)
            }
            
            Spacer()

            if isFlipped {
                Circle()
                    .fill(Color.red)
                    .frame(width: 100, height: 100)
                    .matchedGeometryEffect(id: "circle", in: animation)
            }
        }
        .onTapGesture {
            withAnimation(.easeInOut(duration: 1.0)) {
                isFlipped.toggle()
            }
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Implicit និង Explicit Animations?',
      options: [
        'Implicit ប្រើ `withAnimation` ចំណែក Explicit ប្រើ `animation()`',
        'Implicit ត្រូវបានគ្រប់គ្រងដោយ `animation()` modifier ចំណែក Explicit ប្រើ `withAnimation` block',
        'Implicit លឿនជាង Explicit',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 1,
      explanation: 'Implicit Animations ត្រូវបានគ្រប់គ្រងដោយ `animation()` modifier ចំណែក Explicit Animations ប្រើ `withAnimation` block។'
    },
    {
      question: 'តើ `animation()` modifier ត្រូវភ្ជាប់ទៅនឹងអ្វី?',
      options: [
        'ទៅនឹង Class',
        'ទៅនឹង View ដែលអ្នកចង់ធ្វើ Animation',
        'ទៅនឹង `withAnimation` block',
        'ទៅនឹង `Task`'
      ],
      correct: 1,
      explanation: '`animation()` modifier ត្រូវតែភ្ជាប់ទៅនឹង View ដែល Properties របស់វាផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `withAnimation` block ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត View ថ្មី',
        'គ្រប់គ្រង `State` របស់ View',
        'ប្រាប់ SwiftUI ឱ្យធ្វើ Animation លើការផ្លាស់ប្តូរ State ណាមួយនៅខាងក្នុង Block នោះ',
        'ទាញយកទិន្នន័យពី Network'
      ],
      correct: 2,
      explanation: '`withAnimation` block គឺជាវិធីសាស្ត្រ Explicit ដែលប្រាប់ SwiftUI ឱ្យធ្វើ Animation រាល់ការផ្លាស់ប្តូរ State នៅខាងក្នុង។'
    },
    {
      question: 'តើ `transition()` modifier ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើ Animation ពេល View ផ្លាស់ប្តូរ State',
        'ធ្វើ Animation ពេល View លេចឡើងឬបាត់ទៅវិញពី View Hierarchy',
        'បង្វិល View',
        'ផ្លាស់ប្តូរទំហំ View'
      ],
      correct: 1,
      explanation: '`transition()` modifier ត្រូវបានប្រើដើម្បីធ្វើ Animation នៅពេល View ត្រូវបានបន្ថែមឬដកចេញពី Hierarchy។'
    },
    {
      question: 'តើ Animation Style `spring()` មានលក្ខណៈអ្វី?',
      options: [
        'មានល្បឿនថេរ',
        'ចាប់ផ្តើមយឺត, លឿននៅកណ្តាល, ហើយយឺតទៅវិញ',
        'មានចលនាដូចជាស្ទុះនិងមានលក្ខណៈធម្មជាតិ',
        'ចាប់ផ្តើមលឿនហើយយឺតទៅវិញ'
      ],
      correct: 2,
      explanation: 'Animation Style `spring()` ផ្តល់នូវចលនាធម្មជាតិដូចជាការស្ទុះ។'
    },
    {
      question: 'តើការផ្លាស់ប្តូរ Property មួយណាដែល SwiftUI អាចធ្វើ Animation បាន?',
      options: [
        'ទំហំ (frame)',
        'ពណ៌ផ្ទៃខាងក្រោយ (background)',
        'Opacity',
        'គ្រប់ចម្លើយទាំងអស់គឺត្រឹមត្រូវ'
      ],
      correct: 3,
      explanation: 'SwiftUI អាចធ្វើ Animation ទៅលើ Properties ភាគច្រើនរបស់ View។'
    },
    {
      question: 'តើ `rotationEffect` អាចប្រើជាមួយ `withAnimation` បានទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែជាមួយ `Text`',
        'បានតែជាមួយ `Image`'
      ],
      correct: 0,
      explanation: '`rotationEffect` អាចប្រើជាមួយ `withAnimation` បាន។'
    },
    {
      question: 'តើ `.task` modifier អាចប្រើដើម្បីធ្វើ Animation បានដែរឬទេ?',
      options: [
        'បាន',
        'មិនបានទេ វាសម្រាប់តែ Asynchronous Code',
        'វាអាស្រ័យលើប្រភេទ Animation',
        'វាអាចធ្វើ Animation បានតែក្នុងលក្ខខណ្ឌពិសេស'
      ],
      correct: 1,
      explanation: '`.task` ត្រូវបានប្រើសម្រាប់ Asynchronous Operations ដូចជា Networking មិនមែនសម្រាប់ Animations ទេ។'
    },
    {
      question: 'តើ `matchedGeometryEffect` ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើ Animation រវាង Views ពីរដោយផ្អែកលើ Id',
        'ធ្វើឱ្យ View មួយត្រូវគ្នានឹងទំហំរបស់ View មួយទៀត',
        'ប្តូរពណ៌ផ្ទៃខាងក្រោយ',
        'បង្វិល View'
      ],
      correct: 0,
      explanation: '`matchedGeometryEffect` ត្រូវបានប្រើដើម្បីធ្វើ Animation រវាង Views ពីរដែលមាន Id ដូចគ្នា។'
    },
    {
      question: 'តើ `animation(.default)` នឹងផ្តល់ Animation ប្រភេទអ្វី?',
      options: [
        'Linear',
        'Spring',
        'Ease-in',
        'Default (ease-in-out)'
      ],
      correct: 3,
      explanation: '`.default` គឺជា `easeInOut(duration: 0.35)`។'
    }
  ],
  lab: {
    task: `
បង្កើត Card View មួយដែលអាចបង្វិលបាននៅពេលអ្នកចុចលើវា។

**តម្រូវការ:**

1.  **View:**
    -   បង្កើត View មួយដែលមាន Text មួយនៅខាងមុខ។
    -   ប្រើ \`Text\` \`padding\` \`background\` និង \`cornerRadius\` ដើម្បីបង្កើត Card មួយ។

2.  **State:**
    -   បង្កើត \`State\` Property មួយឈ្មោះ \`isFlipped\`។

3.  **Animation:**
    -   ប្រើ \`withAnimation\` block ដើម្បីផ្លាស់ប្តូរ \`isFlipped\` ពេលអ្នកប្រើប្រាស់ចុចលើ Card។
    -   ប្រើ \`rotation3DEffect\` modifier ដើម្បីបង្វិល Card តាមអ័ក្ស Y (Y-axis)។
    -   \`rotation3DEffect\` គួរត្រូវបានគ្រប់គ្រងដោយ \`isFlipped\` State។

4.  **លទ្ធផល:**
    -   នៅពេលចុចលើ Card, Card នឹងបង្វិលដោយរលូន 180 ដឺក្រេ។

**ការណែនាំ:** ប្រើ \`withAnimation(.spring())\` ដើម្បីទទួលបាន Animation ដ៏ស្រស់ស្អាត។
    `,
    solution: `
\`\`\`swift
import SwiftUI

struct FlippableCardView: View {
    @State private var isFlipped = false
    
    var body: some View {
        VStack {
            Text(isFlipped ? "背面" : "ផ្នែកខាងមុខ") // អាចដាក់អត្ថបទឬរូបភាពផ្សេងបាន
                .font(.title)
                .fontWeight(.bold)
                .foregroundColor(.white)
                .frame(width: 200, height: 300)
                .background(isFlipped ? Color.red : Color.blue)
                .cornerRadius(20)
                .shadow(radius: 10)
                .rotation3DEffect(
                    .degrees(isFlipped ? 180 : 0),
                    axis: (x: 0.0, y: 1.0, z: 0.0) // បង្វិលតាមអ័ក្ស Y
                )
                .onTapGesture {
                    withAnimation(.spring()) {
                        isFlipped.toggle()
                    }
                }
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson5_1Content;