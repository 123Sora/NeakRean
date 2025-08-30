import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី Swift និង SwiftUI',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា Swift និងតួនាទីរបស់វា',
    'ស្វែងយល់ពីប្រវត្តិសង្ខេបនៃ Swift',
    'ស្គាល់ការប្រើប្រាស់ SwiftUI ក្នុងការអភិវឌ្ឍ UI',
    'យល់ពីរបៀបដែល Swift និង SwiftUI ដំណើរការជាមួយគ្នា',
    'ប្រៀបធៀប Swift/SwiftUI ជាមួយ Native Android Development'
  ],
  content: `
# ណែនាំអំពី Swift និង SwiftUI 🍎👨‍💻

---

**Swift** គឺជាភាសាសរសេរកម្មវិធីដ៏មានឥទ្ធិពល និងងាយស្រួលប្រើ ដែលបង្កើតឡើងដោយ Apple សម្រាប់បង្កើត Apps សម្រាប់ iOS, macOS, watchOS, និង tvOS។ វាមានលក្ខណៈពិសេសដូចជាសុវត្ថិភាពខ្ពស់ ដំណើរការលឿន និង Syntax ដែលងាយស្រួលអាន។ **SwiftUI** គឺជា Framework ថ្មីរបស់ Apple សម្រាប់បង្កើត User Interface (UI) នៅក្នុង Swift។

---

## 1. អ្វីទៅជា Swift? (លម្អិត)

Swift គឺជា Open-source Programming Language ដែលរចនាឡើងដើម្បីធ្វើការជាមួយ Frameworks របស់ Apple។ វាត្រូវបានរចនាឡើងដើម្បីជំនួសភាសា Objective-C ដែលជាភាសាចាស់របស់ Apple។ គោលបំណងចម្បងរបស់ Swift គឺដើម្បីធ្វើឱ្យការអភិវឌ្ឍមានល្បឿនលឿន មានសុវត្ថិភាព និងកាន់តែសប្បាយរីករាយ។

- **សុវត្ថិភាព (Safety):** Swift មានលក្ខណៈពិសេសដែលការពារកំហុសទូទៅក្នុងការសរសេរកូដ ដូចជាការប្រើប្រាស់តម្លៃ nil ដោយចៃដន្យ ដែលអាចបណ្តាលឱ្យកម្មវិធីគាំង។ វាក៏តម្រូវឱ្យអ្នកកំណត់ប្រភេទទិន្នន័យ (Type) ឱ្យបានច្បាស់លាស់ ដែលជួយកាត់បន្ថយកំហុសតាំងពីពេល compile។
- **ល្បឿន (Performance):** Swift ប្រើប្រាស់ Compilier LLVM ដើម្បីបំប្លែងកូដទៅជា Native Code ដែលធ្វើឱ្យកម្មវិធីដំណើរការលឿនខ្លាំង ជិតស្នើនឹងភាសា C++ ។
- **ភាពទំនើប (Modern Syntax):** Swift មាន Syntax ដែលសាមញ្ញ និងងាយស្រួលអាន ស្រដៀងនឹងភាសា Scripting ដូចជា Python ឬ JavaScript ដែរ ប៉ុន្តែវាផ្តល់នូវអត្ថប្រយោជន៍នៃភាសាដែលមាន Type ច្បាស់លាស់។
- **ភាពត្រូវគ្នា (Interoperability):** អ្នកអាចប្រើ Swift និង Objective-C នៅក្នុងគម្រោងតែមួយបាន។ នេះមានន័យថាអ្នកអាចបញ្ចូលកូដ Swift ទៅក្នុងគម្រោង Objective-C ចាស់ៗបានយ៉ាងងាយស្រួល។

Swift ត្រូវបានប្រើប្រាស់នៅក្នុង Apps ល្បីៗដូចជា Airbnb, Slack, និង LinkedIn។

---

## 2. ប្រវត្តិសង្ខេបនៃ Swift (លម្អិត)

ការវិវឌ្ឍរបស់ Swift បានធ្វើឱ្យពិភពលោកអភិវឌ្ឍកម្មវិធីរបស់ Apple មានការផ្លាស់ប្តូរយ៉ាងខ្លាំង៖

- **២០១៤:** Swift ត្រូវបានណែនាំជាលើកដំបូងនៅឯសន្និសីទ Worldwide Developers Conference (WWDC)។ វាត្រូវបានចេញផ្សាយជាផ្លូវការជាមួយ Xcode 6 និង iOS 8។
- **២០១៥:** Apple បានធ្វើឱ្យ Swift ក្លាយជា Open Source ដែលអនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍មកពីជុំវិញពិភពលោកចូលរួមចំណែកក្នុងការអភិវឌ្ឍវា។ Swift 2.0 ត្រូវបានចេញផ្សាយជាមួយនឹងការធ្វើឱ្យប្រសើរជាច្រើន។
- **២០១៧:** Swift 4.0 បានណែនាំនូវ **ABI Stability** (Application Binary Interface) ដែលធ្វើឱ្យកំណែថ្មីរបស់ Swift អាចត្រូវគ្នាជាមួយកំណែចាស់ៗបាន។
- **២០១៩:** Swift 5.0 បានចេញផ្សាយជាផ្លូវការនូវ ABI Stability ដែលមានន័យថា Apps ដែលសរសេរដោយ Swift 5 នឹងអាចដំណើរការបានលើកំណែនាពេលអនាគត។ នៅ WWDC 2019, Apple បានណែនាំ **SwiftUI** ជាផ្លូវការ។
- **២០២១:** Swift 5.5 បាននាំមកនូវ Feautres ថ្មីៗសម្រាប់ Concurrency ដូចជា **async/await** ដែលជួយឱ្យការគ្រប់គ្រង Asynchronous Code កាន់តែងាយស្រួល។

---

## 3. អ្វីទៅជា SwiftUI? (លម្អិត)

**SwiftUI** គឺជា Declarative UI Framework របស់ Apple ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត User Interface សម្រាប់ Platforms របស់ Apple ទាំងអស់។ ជំនួសឱ្យការសរសេរកូដច្រើនដើម្បីបង្កើត UI (ដូចជាការប្រើប្រាស់ UIKit ឬ AppKit) អ្នកគ្រាន់តែប្រកាសពីអ្វីដែលអ្នកចង់បង្ហាញ ហើយ SwiftUI នឹងធ្វើការងារនៅសល់។

- **Declarative Syntax:** អ្នកគ្រាន់តែប្រាប់ SwiftUI ថា "ខ្ញុំចង់បាន Text View នៅទីនេះ" ឬ "ខ្ញុំចង់បាន Button នៅលើ Text នេះ"។ SwiftUI នឹងរៀបចំ Layout និង Behaviour របស់វាដោយស្វ័យប្រវត្តិ។
- **Live Preview:** នៅពេលដែលអ្នកសរសេរកូដ SwiftUI នៅក្នុង Xcode អ្នកនឹងឃើញការផ្លាស់ប្តូរ UI ភ្លាមៗនៅក្នុង **Xcode Canvas** ដោយមិនចាំបាច់ Build និង Run App នោះទេ។ នេះជួយសន្សំពេលវេលាអភិវឌ្ឍន៍យ៉ាងច្រើន។
- **Shared Codebase:** ដោយសារតែ SwiftUI ត្រូវបានរចនាឡើងសម្រាប់ Platforms របស់ Apple ទាំងអស់ អ្នកអាចប្រើ Code តែមួយដើម្បីបង្កើត UI សម្រាប់ iOS, macOS, watchOS, និង tvOS ដែលជួយសម្រួលដល់ការអភិវឌ្ឍន៍។
- **State-Driven:** SwiftUI ធ្វើការដោយផ្អែកលើ State (ស្ថានភាពទិន្នន័យ)។ នៅពេលដែលទិន្នន័យរបស់ App ផ្លាស់ប្តូរ SwiftUI នឹងធ្វើបច្ចុប្បន្នភាព UI ដោយស្វ័យប្រវត្តិ។

---

## 4. តើ Swift និង SwiftUI ដំណើរការជាមួយគ្នាដោយរបៀបណា? (លម្អិត)

Swift និង SwiftUI ធ្វើការរួមគ្នាដោយស៊ីសង្វាក់គ្នា។ គិតថា **Swift** ជាភាសាដែលអ្នកប្រើដើម្បីគ្រប់គ្រង **Business Logic** (របៀបដែលកម្មវិធីរបស់អ្នកដំណើរការ, ដូចជាការគណនា, ការហៅទៅកាន់ APIs) ហើយ **SwiftUI** ជាឧបករណ៍ដែលអ្នកប្រើដើម្បីគ្រប់គ្រង **Presentation Logic** (របៀបដែលទិន្នន័យត្រូវបានបង្ហាញនៅលើអេក្រង់)។

- SwiftUI Views ត្រូវបានសរសេរដោយប្រើ Syntax របស់ Swift ។
- អ្នកប្រើប្រាស់ Swift ដើម្បីបង្កើត Data Models និង Functions ដែល SwiftUI អាចប្រើដើម្បីបង្ហាញទិន្នន័យ។
- នៅក្នុងគម្រោងមួយ អ្នកនឹងឃើញ Files ជាច្រើនដែលសរសេរដោយ Swift ដើម្បីគ្រប់គ្រង Data និង Network Operations ហើយ Files ផ្សេងទៀតដែលប្រើ SwiftUI ដើម្បីបង្កើត UI ។
- SwiftUI ត្រូវបានចាត់ទុកថាជាអនាគតនៃការអភិវឌ្ឍន៍ UI របស់ Apple ខណៈដែល UIKit គឺជា Framework ចាស់សម្រាប់ iOS ដែលនៅតែប្រើប្រាស់យ៉ាងទូលំទូលាយ។

---

## 5. ការប្រៀបធៀប Swift/SwiftUI ជាមួយ Native Android Development (លម្អិត)

| លក្ខណៈ           | **Swift/SwiftUI**                                              | **Native Android**                                         |
| :---------------- | :-------------------------------------------------------------- | :---------------------------------------------------------- |
| **ភាសាសរសេរកូដ** | Swift                                                        | Kotlin, Java                                                |
| **ឧបករណ៍ UI**    | SwiftUI (Declarative), UIKit (Imperative)                    | Jetpack Compose (Declarative), XML Layouts (Imperative)   |
| **គោលបំណង**      | iOS, macOS, watchOS, tvOS                                     | Android                                                    |
| **គុណសម្បត្តិ**    | **Performance** លឿន, **Live Preview**, Syntax ស្អាត, API ថ្មីៗ | **Performance** ល្អបំផុត, Full Access to Android APIs ទាំងអស់, Community ធំ |
| **គុណវិបត្តិ**     | ប្រើសម្រាប់តែ Apple Platforms ប៉ុណ្ណោះ                           | ប្រើសម្រាប់តែ Android Platform ប៉ុណ្ណោះ, Syntax អាចស្មុគស្មាញ |

---

## 6. ហេតុអ្វីត្រូវរៀន Swift និង SwiftUI? (លម្អិត)

ការរៀន Swift និង SwiftUI ផ្តល់អត្ថប្រយោជន៍ជាច្រើនសម្រាប់អ្នកអភិវឌ្ឍន៍៖
- **សេដ្ឋកិច្ច (Ecosystem) ដ៏ធំ:** Apple មានប្រព័ន្ធអេកូឡូស៊ីឧបករណ៍ដ៏ធំទូលាយ។ ដោយរៀន Swift/SwiftUI អ្នកអាចអភិវឌ្ឍ Apps សម្រាប់ iPhone, iPad, Mac, Apple Watch និង Apple TV ដោយប្រើចំណេះដឹងតែមួយ។
- **ភាពងាយស្រួល (Declarative UI):** SwiftUI ធ្វើឱ្យការបង្កើត UI កាន់តែងាយស្រួល និងលឿន។ អ្នកមិនចាំបាច់ចំណាយពេលច្រើនក្នុងការរៀបចំ Layout នោះទេ ព្រោះ SwiftUI នឹងគ្រប់គ្រងវាដោយស្វ័យប្រវត្តិ។
- **ល្បឿន (Performance):** ភាសា Swift ត្រូវបានរចនាឡើងសម្រាប់ល្បឿន។ នេះមានន័យថា Apps របស់អ្នកនឹងដំណើរការបានយ៉ាងរលូន និងមានប្រសិទ្ធភាព។
- **តម្រូវការទីផ្សារ (High Market Demand):** តម្រូវការសម្រាប់អ្នកអភិវឌ្ឍន៍ iOS នៅតែមានកម្រិតខ្ពស់។ ការចេះ Swift និង SwiftUI អាចជួយអ្នកទទួលបានការងារល្អនៅក្នុងវិស័យនេះ។

---

**ឧទាហរណ៍កូដ SwiftUI សាមញ្ញ:**

\`\`\`swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("សូមស្វាគមន៍មកកាន់ SwiftUI!")
                .font(.title)
                .padding()
            
            Button("ចុចខ្ញុំ!") {
                print("អ្នកបានចុច Button!")
            }
            .padding()
            .background(Color.blue)
            .foregroundColor(.white)
            .cornerRadius(10)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្ហាញសារជាមួយ SwiftUI</h3>
<p>បង្កើត App សាមញ្ញដែលបង្ហាញសារនៅកណ្តាលអេក្រង់។</p>
<pre><code class="language-swift">
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("សួស្តី! នេះជា SwiftUI!")
            .font(.title)
            .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Button សាមញ្ញ</h3>
<p>បន្ថែម Button ដែលបង្ហាញសារនៅក្នុង Console នៅពេលចុច។</p>
<pre><code class="language-swift">
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("ចុច Button ខាងក្រោម")
                .font(.headline)
            
            Button("ចុចខ្ញុំ!") {
                print("អ្នកបានចុច Button របស់ SwiftUI!")
            }
            .padding()
            .background(Color.green)
            .foregroundColor(.white)
            .cornerRadius(8)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Swift គឺជាអ្វី?',
      options: [
        'Declarative UI Framework',
        'ភាសាសរសេរកម្មវិធីរបស់ Apple',
        'Database Management System',
        'Web Server'
      ],
      correct: 1,
      explanation: 'Swift គឺជាភាសាសរសេរកម្មវិធីដែលបង្កើតឡើងដោយ Apple។'
    },
    {
      question: 'តើនរណាជាអ្នកអភិវឌ្ឍ SwiftUI?',
      options: [
        'Google',
        'Microsoft',
        'Apple',
        'Facebook'
      ],
      correct: 2,
      explanation: 'SwiftUI គឺជា Declarative UI Framework ដែលបង្កើតឡើងដោយ Apple។'
    },
    {
      question: 'តើ SwiftUI ប្រើសម្រាប់អ្វី?',
      options: [
        'អភិវឌ្ឍ UI',
        'គ្រប់គ្រង Network',
        'សរសេរ Server-side Logic',
        'គ្រប់គ្រង Database'
      ],
      correct: 0,
      explanation: 'SwiftUI ត្រូវបានប្រើប្រាស់ដើម្បីអភិវឌ្ឍ User Interface។'
    },
    {
      question: 'តើលក្ខណៈពិសេសមួយណារបស់ SwiftUI ជួយឱ្យអ្នកឃើញការផ្លាស់ប្តូរភ្លាមៗ?',
      options: [
        'Hot Reload',
        'Live Preview',
        'AOT Compilation',
        'Widget Tree'
      ],
      correct: 1,
      explanation: 'Live Preview នៅក្នុង SwiftUI អនុញ្ញាតឱ្យអ្នកឃើញការផ្លាស់ប្តូរ UI ភ្លាមៗនៅក្នុង Xcode Canvas។'
    },
    {
      question: 'តើ Swift អាចប្រើសម្រាប់ Platform ណាខ្លះ?',
      options: [
        'Android ប៉ុណ្ណោះ',
        'iOS, macOS, watchOS, tvOS',
        'Web ប៉ុណ្ណោះ',
        'Windows និង Linux'
      ],
      correct: 1,
      explanation: 'Swift ត្រូវបានប្រើប្រាស់ដើម្បីបង្កើត Apps សម្រាប់ iOS, macOS, watchOS, និង tvOS។'
    },
    {
      question: 'តើ SwiftUI ប្រើវិធីសាស្ត្រ "Declarative" ក្នុងការបង្កើត UI មានន័យដូចម្តេច?',
      options: [
        'អ្នកត្រូវសរសេរកូដច្រើនដើម្បីគ្រប់គ្រង UI State នីមួយៗ',
        'អ្នកគ្រាន់តែប្រកាសពីអ្វីដែលអ្នកចង់បាន ហើយ Framework នឹងរៀបចំវា',
        'វាដំណើរការយឺតជាង Imperative UI',
        'វាប្រើ XML ដើម្បីបង្កើត UI'
      ],
      correct: 1,
      explanation: 'Declarative UI មានន័យថាអ្នកគ្រាន់តែប្រកាសអំពី Layout ហើយ Framework នឹងធ្វើការងារនៅសល់។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការធ្វើឱ្យ Swift ជា Open Source?',
      options: [
        'ធ្វើឱ្យ Swift អាចប្រើបានតែលើ Apple Devices',
        'ធ្វើឱ្យភាសាមានតម្លៃថ្លៃជាងមុន',
        'អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ពីទូទាំងពិភពលោកអាចរួមចំណែកក្នុងការកែលម្អវា',
        'កាត់បន្ថយល្បឿននៃការសរសេរកូដ'
      ],
      correct: 2,
      explanation: 'ការក្លាយជា Open Source អនុញ្ញាតឱ្យសហគមន៍អ្នកអភិវឌ្ឍន៍អាចរួមចំណែកកែលម្អភាសាបាន។'
    },
    {
      question: 'តើ Swift និង Objective-C អាចដំណើរការជាមួយគ្នាក្នុងគម្រោងតែមួយបានទេ?',
      options: [
        'បាន ព្រោះវាមានលក្ខណៈ Interoperable',
        'មិនបាន ព្រោះវាជាភាសាខុសគ្នាទាំងស្រុង',
        'បាន ប៉ុន្តែវាធ្វើឱ្យកម្មវិធីគាំង',
        'បាន ប៉ុន្តែវាធ្វើឱ្យកម្មវិធីដំណើរការយឺតខ្លាំង'
      ],
      correct: 0,
      explanation: 'Swift អាចធ្វើការជាមួយ Objective-C Code បានដោយសារលក្ខណៈ Interoperability របស់វា។'
    },
    {
      question: 'តើ ABI Stability មានន័យដូចម្តេចនៅក្នុង Swift?',
      options: [
        'ធ្វើឱ្យកម្មវិធីអាចដំណើរការលើ Android បាន',
        'ធានាថា Swift កំណែថ្មីអាចត្រូវគ្នាជាមួយ Library ដែលបានបង្កើតដោយ Swift កំណែចាស់',
        'ធ្វើឱ្យកម្មវិធីមានទំហំធំ',
        'បង្កើនល្បឿននៃការ Compile'
      ],
      correct: 1,
      explanation: 'ABI Stability ធានាថា Application Binary Interface (ABI) នៅតែត្រូវគ្នាសម្រាប់កំណែថ្មីៗ។'
    },
    {
      question: 'តើឧបករណ៍មួយណាដែលជាអនាគតនៃការអភិវឌ្ឍន៍ UI សម្រាប់ Apple Platforms?',
      options: [
        'UIKit',
        'SwiftUI',
        'XML',
        'Interface Builder'
      ],
      correct: 1,
      explanation: 'SwiftUI ត្រូវបានចាត់ទុកថាជាអនាគតនៃការអភិវឌ្ឍន៍ UI សម្រាប់ Apple Platforms ។'
    }
  ],
  lab: {
    task: `
បង្កើត SwiftUI App សាមញ្ញមួយដែលបង្ហាញពីមុខងារជាមូលដ្ឋានរបស់វា។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត SwiftUI View ថ្មី។
   - ប្រើ \`VStack\` ដើម្បីរៀបចំ Items បញ្ឈរ។

2. **Main Content:**
   - បន្ថែម \`Text\` View ដែលមានអត្ថបទ "សួស្តីពី Swift និង SwiftUI!"។
   - បន្ថែម \`Button\` ដែលនៅពេលចុច នឹងបង្ហាញសារនៅក្នុង Console ។

3. **Basic Styling:**
   - កំណត់ \`font\` និង \`padding\` សម្រាប់ \`Text\` View ។
   - ដាក់ពណ៌ផ្ទៃខាងក្រោយ និងកំណត់ \`cornerRadius\` សម្រាប់ \`Button\` ។

**ការណែនាំ:** ប្រើ Xcode IDE ដើម្បីអភិវឌ្ឍ App នេះ។ ប្រើ Xcode Preview ដើម្បីមើលលទ្ធផលភ្លាមៗ។
    `,
    solution: `
\`\`\`swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("សួស្តីពី Swift និង SwiftUI!")
                .font(.title)
                .fontWeight(.bold)
                .padding()
            
            Button(action: {
                print("Button ត្រូវបានចុច!")
            }) {
                Text("ចុចខ្ញុំ!")
                    .font(.headline)
                    .foregroundColor(.white)
                    .padding()
                    .background(Color.blue)
                    .cornerRadius(10)
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
\`\`\`
`
  }
};

export default SwiftLesson1_1Content;