import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson9_3Content: LessonContent = {
  title: 'Debugging Techniques',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Debugging និងសារៈសំខាន់របស់វា',
    'រៀនពីរបៀបប្រើ Debugger របស់ Xcode',
    'ស្គាល់ពីការប្រើប្រាស់ Breakpoints និង Conditional Breakpoints',
    'អនុវត្តការពិនិត្យមើល Values នៅក្នុង Variables',
    'យល់ដឹងពីការប្រើប្រាស់ Debug Tools ផ្សេងៗ'
  ],
  content: `
# Debugging Techniques 🐛

---

**Debugging** គឺជាដំណើរការនៃការស្វែងរកនិងដោះស្រាយ Bug នៅក្នុង Code របស់អ្នក។ ការ Debugging ដ៏មានប្រសិទ្ធភាពគឺជាជំនាញដ៏សំខាន់សម្រាប់ Developer គ្រប់រូប។ Xcode ផ្តល់នូវសំណុំឧបករណ៍ (Tools) ដ៏មានឥទ្ធិពលសម្រាប់ការ Debugging ។

## 1. អ្វីទៅជា Debugging?

Debugging គឺស្រដៀងនឹងការធ្វើជាអ្នកស៊ើបអង្កេត។ នៅពេលមានបញ្ហាកើតឡើង អ្នកត្រូវរកឱ្យឃើញពីមូលហេតុឫសគល់របស់វា។ ឧបករណ៍ Debugger អនុញ្ញាតឱ្យអ្នកមើលឃើញពីអ្វីដែលកំពុងកើតឡើងនៅក្នុង Code របស់អ្នកនៅពេលដែលវាដំណើរការ។

## 2. Xcode Debugger

-   **Debug Area:** គឺជា Panel នៅខាងក្រោម Xcode ដែលបង្ហាញ Console Output, Variable Values, និង Debugger Controls ។
-   **Debug Bar:** របារឧបករណ៍នៅពីលើ Debug Area ដែលមាន Controls ដូចជា Step Over, Step Into, និង Step Out ។

## 3. Breakpoints

**Breakpoint** គឺជាចំណុចដែលអ្នកដាក់នៅក្នុង Code របស់អ្នកដើម្បីបញ្ឈប់ការដំណើរការរបស់ App ។ នៅពេល App ដំណើរការដល់ Breakpoint វានឹងឈប់ ហើយអ្នកអាចពិនិត្យមើលស្ថានភាពរបស់ Variables, Stack Trace, និង Threads ។

### របៀបប្រើ Breakpoint
-   ចុចលើលេខបន្ទាត់ (Line Number) នៅក្នុង Code Editor ។
-   នៅពេល Breakpoint ត្រូវបានប៉ះ (Hit), App នឹងឈប់។

### របៀបប្រើ Conditional Breakpoint
អ្នកអាចកំណត់លក្ខខណ្ឌ (Condition) សម្រាប់ Breakpoint ដើម្បីឱ្យវាឈប់បានតែនៅពេលលក្ខខណ្ឌនោះជា \`true\` ។
-   ចុច Right-click លើ Breakpoint -> Edit Breakpoint... -> បញ្ចូល Condition ។
-   ឧទាហរណ៍៖ \`count > 10\`

\`\`\`swift
func calculateSum(numbers: [Int]) -> Int {
    var sum = 0
    for number in numbers {
        sum += number
    }
    // ដាក់ Breakpoint នៅទីនេះ
    return sum
}
\`\`\`


## 4. Debugging Tools សំខាន់ៗ

-   **\`print()\` Statement:** ជាវិធីសាមញ្ញបំផុតសម្រាប់ Debugging ដោយបោះពុម្ពព័ត៌មានទៅកាន់ Console ។
    \`\`\`swift
    print("The value of sum is \\(sum)")
    \`\`\`
-   **LLDB Console:** អនុញ្ញាតឱ្យអ្នកវាយបញ្ចូល Commands ដើម្បីពិនិត្យមើលឬកែប្រែ Variables ។
    -   **\`po variableName\`:** បោះពុម្ព Object (Print Object) ។
    -   **\`p variableName\`:** បោះពុម្ព Value (Print) ។
-   **View Debugger:** ឧបករណ៍ដ៏អស្ចារ្យសម្រាប់ការ Debugging UI ។ វាបង្ហាញ Hierarchy របស់ Views ក្នុងទម្រង់ 3D ។
-   **Memory Graph Debugger:** ជួយរក Memory Leaks និង Retain Cycles ។

## 5. ល្បិច Debugging

-   **Start with the Symptoms:** ចាប់ផ្តើមពីកន្លែងដែល Bug កើតឡើង។
-   **Isolate the Problem:** ព្យាយាមកាត់បន្ថយ Code របស់អ្នកដើម្បីរកឱ្យឃើញផ្នែកណាដែលបណ្តាលឱ្យមានបញ្ហា។
-   **Use a Rubber Duck:** ពន្យល់ Code របស់អ្នកទៅកាន់អ្វីមួយ (ដូចជាតុក្កតាទា) ដើម្បីជួយអ្នកគិត។
-   **Use the Scientific Method:**
    1.  **Observation:** កត់សម្គាល់ Bug ។
    2.  **Hypothesis:** ដាក់ការសន្និដ្ឋានអំពីមូលហេតុ។
    3.  **Experiment:** ធ្វើ Test ដើម្បីបញ្ជាក់ឬបដិសេធការសន្និដ្ឋាន។
    4.  **Conclusion:** រកឃើញមូលហេតុនិងដោះស្រាយវា។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Conditional Breakpoint</h3>
<p>យើងនឹងបញ្ឈប់ Code នៅពេលដែល \`i\` ស្មើនឹង 5 នៅក្នុង Loop មួយ។</p>
<pre><code class="language-swift">
import SwiftUI

struct ConditionalBreakpointView: View {
    var body: some View {
        Button("Run Loop") {
            for i in 0..<10 {
                // ដាក់ Breakpoint នៅបន្ទាត់នេះ
                // Right-click > Edit Breakpoint... > Condition: i == 5
                print("Current value of i: \\(i)")
            }
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Debugging គឺជាអ្វី?',
      options: [
        'ការសរសេរ Code',
        'ការរចនា UI',
        'ការស្វែងរកនិងដោះស្រាយ Bug',
        'ការ Test Code'
      ],
      correct: 2,
      explanation: 'Debugging គឺជាដំណើរការនៃការស្វែងរកនិងដោះស្រាយ Bug ។'
    },
    {
      question: 'តើ `Breakpoint` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីលុប Code',
        'ដើម្បីបញ្ឈប់ការដំណើរការរបស់ App',
        'ដើម្បីចាប់ផ្តើម App',
        'ដើម្បីបោះពុម្ព Text'
      ],
      correct: 1,
      explanation: 'Breakpoint គឺជាចំណុចដែលដាក់នៅក្នុង Code ដើម្បីបញ្ឈប់ App ។'
    },
    {
      question: 'តើ `print()` statement ប្រើសម្រាប់ Debugging យ៉ាងដូចម្តេច?',
      options: [
        'ដើម្បីផ្លាស់ប្តូរ Variables',
        'ដើម្បីបោះពុម្ពព័ត៌មានទៅកាន់ Console',
        'ដើម្បីបង្ខំឱ្យ App គាំង',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`print()` គឺជាវិធីសាមញ្ញបំផុតសម្រាប់បោះពុម្ពព័ត៌មានទៅកាន់ Console ។'
    },
    {
      question: 'តើ `po` Command នៅក្នុង LLDB Console ប្រើសម្រាប់អ្វី?',
      options: [
        'បោះពុម្ព Variable Value',
        'បោះពុម្ព Object (Print Object)',
        'បោះពុម្ព Thread State',
        'បោះពុម្ព Class Name'
      ],
      correct: 1,
      explanation: '`po` ប្រើសម្រាប់បោះពុម្ព Object ដោយប្រើ Description របស់វា។'
    },
    {
      question: 'តើ Conditional Breakpoint ខុសពី Breakpoint ធម្មតាត្រង់ណា?',
      options: [
        'វាអាចបញ្ឈប់បានតែនៅពេលមានលក្ខខណ្ឌត្រឹមត្រូវ',
        'វាមិនអាចបញ្ឈប់បានទេ',
        'វាអាចប្រើបានតែនៅលើ iPad',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 0,
      explanation: 'Conditional Breakpoint បញ្ឈប់បានតែនៅពេលដែលលក្ខខណ្ឌដែលបានកំណត់ជា `true` ។'
    },
    {
      question: 'តើ View Debugger ប្រើសម្រាប់ Debugging អ្វី?',
      options: [
        'Networking',
        'Memory',
        'User Interface',
        'Core Data'
      ],
      correct: 2,
      explanation: 'View Debugger ត្រូវបានប្រើសម្រាប់ Debugging UI ដោយបង្ហាញ Hierarchy របស់ Views ។'
    },
    {
      question: 'តើ Memory Graph Debugger ជួយរកបញ្ហាអ្វី?',
      options: [
        'UI Bug',
        'Memory Leaks',
        'Network Issues',
        'App Crash'
      ],
      correct: 1,
      explanation: 'Memory Graph Debugger ជួយរក Memory Leaks និង Retain Cycles ។'
    },
    {
      question: 'តើ `Step Over` Command ក្នុង Xcode Debugger ធ្វើអ្វី?',
      options: [
        'ចូលទៅក្នុង Method មួយ',
        'ដំណើរការបន្ទាត់បច្ចុប្បន្នហើយបន្តទៅបន្ទាត់បន្ទាប់',
        'ចេញពី Method បច្ចុប្បន្ន',
        'បញ្ឈប់ Debugging'
      ],
      correct: 1,
      explanation: '`Step Over` ដំណើរការបន្ទាត់បច្ចុប្បន្នទាំងមូលហើយបន្តទៅបន្ទាត់បន្ទាប់ដោយមិនចូលទៅក្នុង Method Calls ។'
    },
    {
      question: 'តើការ Debugging គឺជាជំនាញសំខាន់សម្រាប់ Developer ដែរឬទេ?',
      options: [
        'សំខាន់',
        'មិនសំខាន់ទេ',
        'សំខាន់តែសម្រាប់ Beginner',
        'សំខាន់តែសម្រាប់ Senior Developer'
      ],
      correct: 0,
      explanation: 'ការ Debugging គឺជាជំនាញដ៏សំខាន់សម្រាប់ Developer គ្រប់កម្រិត។'
    },
    {
      question: 'តើ Debug Area មានព័ត៌មានអ្វីខ្លះ?',
      options: [
        'App Icon',
        'Source Code',
        'Console Output, Variable Values',
        'UI Design'
      ],
      correct: 2,
      explanation: 'Debug Area បង្ហាញព័ត៌មានសំខាន់ៗដូចជា Console Output និង Variable Values ។'
    }
  ],
  lab: {
    task: `
អនុវត្តការប្រើប្រាស់ Xcode Debugger ដើម្បីស្វែងរក Bug នៅក្នុង Code ។

**តម្រូវការ:**

1.  **Code:**
    -   បង្កើត SwiftUI View មួយ។
    -   បង្កើត Function មួយឈ្មោះ \`processInput(text: String)\` ដែលមាន Bug ។
    -   ឧទាហរណ៍៖ Function នោះត្រូវបូកលេខប៉ុន្តែវា Return String វិញ។

2.  **Debugging:**
    -   ដាក់ Breakpoint នៅខាងក្នុង Function \`processInput\` ។
    -   ដំណើរការ App នៅក្នុង Debug Mode ។
    -   នៅពេល App ឈប់នៅ Breakpoint, ពិនិត្យមើលតម្លៃរបស់ Variables ដោយប្រើ Debug Area ឬ LLDB Console ។
    -   ប្រើ \`Step Over\` ដើម្បីដំណើរការ Code បន្ទាត់ម្តងមួយៗ។
    -   កំណត់អត្តសញ្ញាណ Bug ហើយកែតម្រូវវា។

**ការណែនាំ:** ប្រើ \`po\` និង \`p\` នៅក្នុង LLDB Console ដើម្បីពិនិត្យមើល Variables ។
    `,
    solution: `
\`\`\`swift
import SwiftUI

struct DebuggingView: View {
    @State private var input: String = ""
    @State private var output: String = ""
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Debugging Lab")
                .font(.largeTitle)
            
            TextField("Enter numbers (e.g., 1,2,3)", text: $input)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()
            
            Button("Calculate Sum") {
                let numbers = input.split(separator: ",").compactMap { Int($0.trimmingCharacters(in: .whitespaces)) }
                let result = calculateSum(numbers: numbers) // This function has a bug
                output = "Result: \\(result)"
            }
            .buttonStyle(.borderedProminent)
            
            Text(output)
                .font(.title)
                .padding()
        }
        .padding()
    }
    
    // Buggy function
    func calculateSum(numbers: [Int]) -> Int {
        var sum = 0
        for number in numbers {
            // BUG: Developer might have accidentally used multiplication
            sum = sum + number * 0 // ដាក់ Breakpoint នៅបន្ទាត់នេះ
        }
        return sum
    }
    
    // Fixed function (solution)
    func fixedCalculateSum(numbers: [Int]) -> Int {
        var sum = 0
        for number in numbers {
            sum += number
        }
        return sum
    }
}
\`\`\`
`
  }
};

export default SwiftLesson9_3Content;