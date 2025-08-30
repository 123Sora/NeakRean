import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson1_3Content: LessonContent = {
  title: 'ការរៀបចំបរិស្ថានសម្រាប់ SwiftUI',
  objectives: [
    'ស្វែងយល់ពីតម្រូវការប្រព័ន្ធសម្រាប់ការអភិវឌ្ឍ SwiftUI',
    'ដំឡើង Xcode IDE',
    'យល់ដឹងពីរបៀបប្រើប្រាស់ Xcode Canvas និង Preview',
    'បង្កើត SwiftUI Project ដំបូង'
  ],
  content: `
# ការរៀបចំបរិស្ថានសម្រាប់ SwiftUI 🛠️

---

ដើម្បីចាប់ផ្តើមអភិវឌ្ឍកម្មវិធីដោយប្រើ SwiftUI អ្នកត្រូវរៀបចំបរិស្ថានការងារឱ្យបានត្រឹមត្រូវ។ មេរៀននេះនឹងណែនាំអ្នកអំពីតម្រូវការ និងជំហានចាំបាច់ក្នុងការដំឡើង Xcode ដែលជា IDE ផ្លូវការរបស់ Apple។

---

## 1. តម្រូវការប្រព័ន្ធ (System Requirements)

-   **macOS:** អ្នកត្រូវការកុំព្យូទ័រ Mac ដែលដំណើរការលើ macOS Monterey (ឬកំណែថ្មីជាងនេះ)។ ការអភិវឌ្ឍ iOS Apps គឺតម្រូវឱ្យមានប្រព័ន្ធប្រតិបត្តិការ macOS។
-   **Xcode:** ត្រូវការ Xcode កំណែ 13 ឬខ្ពស់ជាងនេះ។ Xcode គឺជា Integrated Development Environment (IDE) ដែលមានឧបករណ៍ទាំងអស់សម្រាប់បង្កើត Apps សម្រាប់ Apple Platforms។
-   **Apple ID:** អ្នកត្រូវការ Apple ID ដើម្បីទាញយក Xcode និងឧបករណ៍ផ្សេងៗទៀតពី App Store។

---

## 2. ជំហានដំឡើង Xcode

Xcode គឺជាឧបករណ៍តែមួយគត់ដែលអ្នកត្រូវការសម្រាប់ការអភិវឌ្ឍ Swift និង SwiftUI។

1.  **បើក App Store:** នៅលើកុំព្យូទ័រ Mac របស់អ្នក សូមបើកកម្មវិធី App Store។
2.  **ស្វែងរក Xcode:** ប្រើប្រអប់ស្វែងរកដើម្បីស្វែងរក "Xcode"។
3.  **ទាញយកនិងដំឡើង:** ចុចប៊ូតុង **Get** ឬ **Install**។ Xcode មានទំហំធំ (ជាច្រើន GB) ដូច្នេះវាអាចចំណាយពេលយូរក្នុងការទាញយក។
4.  **បើក Xcode:** នៅពេលដំឡើងចប់ សូមបើក Xcode ។ វានឹងស្នើសុំឱ្យអ្នកទទួលយកលក្ខខណ្ឌប្រើប្រាស់។

---

## 3. របៀបប្រើ Xcode Canvas និង Preview

Xcode Canvas គឺជាមុខងារដ៏សំខាន់របស់ Xcode ដែលធ្វើការជាមួយ SwiftUI។

-   **Canvas:** Canvas គឺជាអេក្រង់ដែលបង្ហាញ Live Preview នៃ UI ដែលអ្នកកំពុងសរសេរ។ នៅពេលអ្នកផ្លាស់ប្តូរកូដ SwiftUI នៅក្នុង Editor, Canvas នឹងធ្វើបច្ចុប្បន្នភាពភ្លាមៗ។
-   **Preview:** អ្នកអាចប្រើ Xcode Preview ដើម្បីមើល Views របស់អ្នកនៅលើ Device Models ផ្សេងៗគ្នា (ដូចជា iPhone 15, iPad Pro) ឬសូម្បីតែនៅលើ Dark Mode។

ដើម្បីបើក Canvas សូមចូលទៅកាន់ **Editor > Canvas** នៅលើ Toolbar។ 

---

## 4. ការបង្កើត SwiftUI Project ដំបូង

ឥឡូវនេះយើងនឹងបង្កើតគម្រោងដំបូងរបស់យើង។

1.  **បើក Xcode:** បើកកម្មវិធី Xcode។
2.  **ជ្រើសរើស "Create a new Xcode project":** នៅលើអេក្រង់ស្វាគមន៍ (Welcome Screen) សូមជ្រើសរើស "Create a new Xcode project"។
3.  **ជ្រើសរើស Platform:** ជ្រើសរើស **iOS** ហើយបន្ទាប់មកជ្រើសរើស **App** ជា Template។ ចុច **Next**។
4.  **កំណត់ព័ត៌មានគម្រោង:**
    -   **Product Name:** ដាក់ឈ្មោះគម្រោងរបស់អ្នក (ឧទាហរណ៍៖ "MyFirstSwiftUIApp")។
    -   **Team:** ជ្រើសរើស Account របស់អ្នក។
    -   **Organization Identifier:** ប្រើ Domain Name ផ្ទាល់ខ្លួនរបស់អ្នក (ឧទាហរណ៍៖ "com.yourcompany")។
    -   **Interface:** ត្រូវប្រាកដថាបានជ្រើសរើស **SwiftUI**។
    -   **Language:** ត្រូវប្រាកដថាបានជ្រើសរើស **Swift**។
5.  **រក្សាទុក:** ជ្រើសរើសទីតាំងដើម្បីរក្សាទុកគម្រោង ហើយចុច **Create**។

បន្ទាប់ពីបង្កើតគម្រោង អ្នកនឹងឃើញឯកសារ \`ContentView.swift\` ដែលជាកន្លែងដែលអ្នកអាចចាប់ផ្តើមសរសេរកូដ SwiftUI បាន។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្ហាញ Text ក្នុង Canvas</h3>
<p>សរសេរកូដនេះក្នុងឯកសារ \`ContentView.swift\` ហើយអ្នកនឹងឃើញលទ្ធផលនៅលើ Canvas។</p>
<pre><code class="language-swift">
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("សូមស្វាគមន៍មកកាន់ SwiftUI Lab!")
            .padding()
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើប្រាស់ Xcode Preview</h3>
<p>អ្នកអាចប្រើ \`#Preview\` ដើម្បីបង្កើត Preview ផ្សេងៗគ្នា។</p>
<pre><code class="language-swift">
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
        
        ContentView()
            .preferredColorScheme(.dark) // បង្ហាញក្នុង Dark Mode
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ IDE ផ្លូវការរបស់ Apple សម្រាប់អភិវឌ្ឍ iOS Apps មានឈ្មោះអ្វី?',
      options: [
        'Android Studio',
        'Visual Studio Code',
        'Xcode',
        'Eclipse'
      ],
      correct: 2,
      explanation: 'Xcode គឺជា IDE ផ្លូវការរបស់ Apple សម្រាប់បង្កើត Apps សម្រាប់ iOS, macOS, watchOS, និង tvOS។'
    },
    {
      question: 'តើអ្នកត្រូវការប្រព័ន្ធប្រតិបត្តិការអ្វីដើម្បីអភិវឌ្ឍ SwiftUI Apps?',
      options: [
        'Windows',
        'Linux',
        'macOS',
        'ChromeOS'
      ],
      correct: 2,
      explanation: 'ការអភិវឌ្ឍ iOS Apps គឺតម្រូវឱ្យមានកុំព្យូទ័រ Mac ដែលដំណើរការលើ macOS។'
    },
    {
      question: 'តើមុខងារអ្វីនៅក្នុង Xcode ដែលបង្ហាញ Live Preview នៃ UI?',
      options: [
        'Simulator',
        'Console',
        'Canvas',
        'Debug Area'
      ],
      correct: 2,
      explanation: 'Xcode Canvas គឺជាអេក្រង់ដែលបង្ហាញ Live Preview នៃ SwiftUI UI។'
    },
    {
      question: 'តើអ្នកប្រើប្រាស់ Template មួយណាដើម្បីបង្កើត SwiftUI App ថ្មី?',
      options: [
        'Game',
        'Framework',
        'App',
        'Library'
      ],
      correct: 2,
      explanation: 'អ្នកគួរតែជ្រើសរើស Template "App" ដើម្បីបង្កើត Application ថ្មី។'
    },
    {
      question: 'តើអ្វីជាតម្រូវការសំខាន់ក្នុងការទាញយក Xcode?',
      options: [
        'គណនី Google',
        'Apple ID',
        'Microsoft Account',
        'លេខទូរស័ព្ទ'
      ],
      correct: 1,
      explanation: 'អ្នកត្រូវការ Apple ID ដើម្បីទាញយក Xcode ពី App Store។'
    }
  ],
  lab: {
    task: `
ដំឡើង Xcode និងបង្កើត SwiftUI Project ដំបូងរបស់អ្នក។

**តម្រូវការ:**

1.  **ដំឡើង Xcode:**
    -   ចូលទៅកាន់ App Store ហើយទាញយក Xcode។

2.  **បង្កើតគម្រោងថ្មី:**
    -   បើក Xcode ហើយជ្រើសរើស "Create a new Xcode project"។
    -   ជ្រើសរើស iOS App Template។
    -   ត្រូវប្រាកដថាបានជ្រើសរើស Interface **SwiftUI** និង Language **Swift**។
    -   ដាក់ឈ្មោះគម្រោងរបស់អ្នកថា "SwiftUILab" ហើយរក្សាទុក។

3.  **សាកល្បង Canvas:**
    -   បើកឯកសារ \`ContentView.swift\`។
    -   ផ្លាស់ប្តូរអត្ថបទនៅក្នុង \`Text("...")\` ទៅជា "ជំរាបសួរពី SwiftUILab!"។
    -   ពិនិត្យមើលថាតើការផ្លាស់ប្តូរត្រូវបានបង្ហាញនៅក្នុង Xcode Canvas ដែរឬទេ។

**ការណែនាំ:** ព្យាយាមប្រើ Xcode Simulator ដើម្បីរត់កម្មវិធីរបស់អ្នកនៅលើ iPhone model។
    `,
    solution: `
\`\`\`swift
// ContentView.swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("ជំរាបសួរពី SwiftUILab!")
                .font(.title)
                .fontWeight(.bold)
        }
    }
}

#Preview {
    ContentView()
}
\`\`\`
`
  }
};

export default SwiftLesson1_3Content;