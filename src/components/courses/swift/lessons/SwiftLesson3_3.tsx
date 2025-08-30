import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson3_3Content: LessonContent = {
  title: 'ការគ្រប់គ្រង State: Environment Objects',
  objectives: [
    'យល់ដឹងពីដែនកំណត់នៃការប្រើប្រាស់ @ObservedObject',
    'ស្គាល់ពីរបៀបប្រើប្រាស់ @EnvironmentObject ដើម្បីចែករំលែកទិន្នន័យឆ្លងកាត់ Views ជាច្រើន',
    'រៀនពីរបៀបបង្កើតនិងបញ្ចូល Environment Object ទៅក្នុង Environment',
    'យល់ពីភាពខុសគ្នារវាង @ObservedObject និង @EnvironmentObject'
  ],
  content: `
# ការគ្រប់គ្រង State: Environment Objects 🌍

---

នៅក្នុងកម្មវិធីធំៗ ការចែករំលែក Observable Objects ពី View មេទៅ View កូនរាប់សិបកម្រិតអាចជាការលំបាក (Prop-drilling)។ វិធីសាស្ត្រនេះអាចធ្វើឱ្យកូដរបស់អ្នកស្មុគស្មាញ និងពិបាកថែទាំ។ សម្រាប់ករណីនេះ SwiftUI ផ្តល់នូវដំណោះស្រាយមួយទៀតគឺ **Environment Objects**។

## 1. ហេតុអ្វីបានជាត្រូវប្រើ Environment Objects?

**Environment Object** គឺជា Observable Object មួយដែលត្រូវបានដាក់នៅក្នុងបរិស្ថាន (Environment) របស់ View Hierarchy ទាំងមូល។ វាអនុញ្ញាតឱ្យ Views ណាមួយនៅក្នុង Hierarchy នោះអាចចូលប្រើប្រាស់ Object នោះបានដោយមិនចាំបាច់ផ្ញើវាជា Parameter ទេ។

-   **ជៀសវាង Prop-drilling:** អ្នកមិនចាំបាច់ផ្ញើ Object ទៅកាន់ Views កូននីមួយៗនោះទេ។
-   **កូដស្អាត (Clean Code):** កូដរបស់អ្នកមើលទៅមានរបៀបរៀបរយជាងមុន។
-   **ងាយស្រួលថែទាំ:** ការផ្លាស់ប្តូរ State អាចធ្វើឡើងនៅកន្លែងតែមួយ។

---

## 2. របៀបប្រើប្រាស់ Environment Object

ការប្រើប្រាស់ Environment Object មានពីរជំហាន៖

### ជំហានទី 1: ដាក់ Object ចូលទៅក្នុង Environment

អ្នកត្រូវប្រើ Modifier **\`.environmentObject()\`** ដើម្បីបញ្ចូល Observable Object ទៅក្នុង Environment របស់ View Hierarchy។ អ្នកគួរធ្វើវាឱ្យបានតែម្តងគត់នៅកន្លែងខ្ពស់បំផុតនៅក្នុង Hierarchy របស់កម្មវិធីរបស់អ្នក (ឧ. នៅ \`App\` struct)។

\`\`\`swift
import SwiftUI

// Observable Object របស់យើង
class UserProfile: ObservableObject {
    @Published var name = "សិស្ស"
    @Published var score = 0
}

@main
struct MyApp: App {
    @StateObject private var profile = UserProfile()

    var body: some Scene {
        WindowGroup {
            HomeView()
                .environmentObject(profile) // ដាក់ Object ចូលទៅក្នុង Environment
        }
    }
}
\`\`\`
---

### ជំហានទី 2: ចូលប្រើ Object ពី Views ណាមួយ

នៅក្នុង Views ណាមួយដែលស្ថិតនៅក្នុង Hierarchy ដែលអ្នកបានកំណត់ Environment Object អ្នកអាចប្រើ Property Wrapper **\`@EnvironmentObject\`** ដើម្បីចូលប្រើប្រាស់ Object នោះបាន។

\`\`\`swift
// HomeView
struct HomeView: View {
    var body: some View {
        VStack {
            ProfileView()
            ScoreView()
        }
    }
}

// Child View: ចូលប្រើ Environment Object
struct ProfileView: View {
    @EnvironmentObject var profile: UserProfile // ចូលប្រើ Object
    
    var body: some View {
        Text("ឈ្មោះ៖ \\(profile.name)")
    }
}

// Grandchild View: ក៏អាចចូលប្រើបានដែរ
struct ScoreView: View {
    @EnvironmentObject var profile: UserProfile // ចូលប្រើ Object
    
    var body: some View {
        HStack {
            Text("ពិន្ទុ៖ \\(profile.score)")
            Button("បន្ថែមពិន្ទុ") {
                profile.score += 10
            }
        }
    }
}
\`\`\`

---

## 3. ភាពខុសគ្នារវាង @ObservedObject និង @EnvironmentObject

| លក្ខណៈ       | **@ObservedObject**                    | **@EnvironmentObject**                    |
| :------------ | :------------------------------------ | :----------------------------------- |
| **ការផ្ញើតម្លៃ** | ត្រូវផ្ញើ Object ជា Parameter | មិនចាំបាច់ផ្ញើទេ, SwiftUI រកដោយខ្លួនឯង |
| **ការប្រើប្រាស់** | សម្រាប់ចែករំលែកទៅ Views ជិតៗគ្នា | សម្រាប់ចែករំលែកទៅ Views ឆ្ងាយៗ |
| **ភាពបត់បែន** | អាចទទួល Object ផ្សេងៗគ្នាបាន | ទទួលតែ Object ដែលមាននៅក្នុង Environment ប៉ុណ្ណោះ|

**គន្លឹះ៖** ប្រើ \`@EnvironmentObject\` សម្រាប់ទិន្នន័យដែល Views ជាច្រើនត្រូវការដូចជា User Profile, Authentication State, ឬ App Settings។ ប្រើ \`@ObservedObject\` សម្រាប់ទិន្នន័យដែលចែករំលែករវាង Views ជិតៗគ្នាតែប៉ុណ្ណោះ។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការគ្រប់គ្រង App-wide State</h3>
<p>ប្រើ Environment Object ដើម្បីគ្រប់គ្រង Theme របស់ App ទាំងមូល។</p>
<pre><code class="language-swift">
import SwiftUI

class AppTheme: ObservableObject {
    @Published var isDarkMode = false
}

@main
struct ThemeApp: App {
    @StateObject var theme = AppTheme()

    var body: some Scene {
        WindowGroup {
            MainContentView()
                .environmentObject(theme)
        }
    }
}

struct MainContentView: View {
    @EnvironmentObject var theme: AppTheme
    
    var body: some View {
        ZStack {
            Color(theme.isDarkMode ? .black : .white).ignoresSafeArea()
            VStack {
                Text(theme.isDarkMode ? "របៀបងងឹត" : "របៀបភ្លឺ")
                    .foregroundColor(theme.isDarkMode ? .white : .black)
                    .font(.largeTitle)
                
                Toggle("របៀបងងឹត", isOn: $theme.isDarkMode)
                    .padding()
            }
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Property Wrapper មួយណាដែលប្រើសម្រាប់ចូលប្រើប្រាស់ Environment Object?',
      options: [
        '`@ObservedObject`',
        '`@StateObject`',
        '`@EnvironmentObject`',
        '`@Binding`'
      ],
      correct: 2,
      explanation: '`@EnvironmentObject` ត្រូវបានប្រើដើម្បីចូលប្រើប្រាស់ Object ដែលបានដាក់ក្នុង Environment។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ Environment Object?',
      options: [
        'ធ្វើឱ្យ App ដំណើរការលឿន',
        'ជៀសវាងការផ្ញើ Object ឆ្លងកាត់ Views ជាច្រើន',
        'វាអាចរក្សាទុកទិន្នន័យក្នុង Database',
        'គ្មានអត្ថប្រយោជន៍ទេ'
      ],
      correct: 1,
      explanation: 'អត្ថប្រយោជន៍ចម្បងគឺដើម្បីជៀសវាង "Prop-drilling" ដែលត្រូវផ្ញើ Object ពី View មួយទៅ View មួយទៀត។'
    },
    {
      question: 'តើអ្នកត្រូវដាក់ Environment Object នៅកន្លែងណា?',
      options: [
        'នៅ View កូនដែលអ្នកចង់ប្រើវា',
        'នៅកន្លែងខ្ពស់បំផុតនៅក្នុង View Hierarchy (ឧ. `App` struct)',
        'នៅគ្រប់ Views ទាំងអស់',
        'នៅពេលដែលអ្នកចុចប៊ូតុង'
      ],
      correct: 1,
      explanation: 'អ្នកគួរដាក់ Environment Object នៅកន្លែងខ្ពស់បំផុតនៅក្នុង View Hierarchy ដើម្បីឱ្យ Views ទាំងអស់អាចចូលប្រើបាន។'
    },
    {
      question: 'តើ \`@EnvironmentObject\` គឺជាម្ចាស់ Object ដែរឬទេ?',
      options: [
        'ជាម្ចាស់',
        'មិនមែនទេ',
        'វាអាស្រ័យលើកន្លែងដែលវាត្រូវបានប្រកាស',
        'វាដូចជា `@StateObject`'
      ],
      correct: 1,
      explanation: '`@EnvironmentObject` មិនមែនជាម្ចាស់ Object ទេ វាគ្រាន់តែជាតំណភ្ជាប់ទៅកាន់ Object ដែលមាននៅក្នុង Environment ប៉ុណ្ណោះ។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង `environmentObject()` និង `ObservedObject`?',
      options: [
        '`environmentObject()` ប្រើសម្រាប់ Views ជិតៗគ្នា',
        '`ObservedObject` ងាយស្រួលប្រើជាង',
        '`ObservedObject` តម្រូវឱ្យផ្ញើ Object ជា Parameter រីឯ `environmentObject()` មិនចាំបាច់',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 2,
      explanation: '`ObservedObject` តម្រូវឱ្យអ្នកផ្ញើ Object ជា Parameter ចំណែក `environmentObject()` អនុញ្ញាតឱ្យ Views ចូលប្រើប្រាស់ដោយផ្ទាល់។'
    },
    {
      question: 'តើអ្នកអាចដាក់ Environment Object បានប៉ុន្មានប្រភេទ?',
      options: [
        'តែមួយប្រភេទប៉ុណ្ណោះ',
        'បីប្រភេទ',
        'ប្រភេទជាច្រើនបាន ដរាបណាពួកវាមាន Type ខុសគ្នា',
        'គ្មានដែនកំណត់'
      ],
      correct: 2,
      explanation: 'អ្នកអាចដាក់ Environment Object ជាច្រើនបាន ដរាបណាពួកវាមានប្រភេទ (Type) ខុសគ្នា។'
    },
    {
      question: 'តើ `ObservableObject` អាចប្រើជាមួយ `struct` បានទេ?',
      options: [
        'បាន',
        'មិនបានទេ វាត្រូវតែជា `class`',
        'បានតែពេលវាជា private',
        'បានតែពេលប្រើជាមួយ `@StateObject`'
      ],
      correct: 1,
      explanation: '`ObservableObject` គឺជា Protocol សម្រាប់ `class` តែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `prop-drilling` មានន័យដូចម្តេច?',
      options: [
        'ការប្រើប្រាស់ `ScrollView`',
        'ការផ្ញើ Properties ជាច្រើនពី View មេទៅ View កូន',
        'ការប្រើប្រាស់ `@Binding`',
        'ការធ្វើឱ្យកូដដំណើរការលឿន'
      ],
      correct: 1,
      explanation: '`prop-drilling` គឺជាការផ្ញើ Properties ដូចគ្នាជាច្រើនដងឆ្លងកាត់ View Hierarchy។'
    },
    {
      question: 'តើនៅពេលណាដែល `body` Property របស់ View ជាមួយ `@EnvironmentObject` ត្រូវបានហៅ?',
      options: [
        'នៅពេលដែល Object ផ្លាស់ប្តូរ',
        'នៅពេលដែល View ត្រូវបានបង្កើត',
        'នៅពេលដែលអ្នកចុចប៊ូតុង',
        'នៅពេលដែល App ចាប់ផ្តើម'
      ],
      correct: 0,
      explanation: 'នៅពេលដែលតម្លៃ `@Published` Property នៅក្នុង Object ផ្លាស់ប្តូរ `body` របស់ Views ដែលប្រើ `@EnvironmentObject` នឹងត្រូវបានហៅ។'
    },
    {
      question: 'តើ View មួយណាដែលគួរជា "Source of Truth" សម្រាប់ Environment Object?',
      options: [
        'Child View',
        'Grandchild View',
        'Main App View',
        'All of the above'
      ],
      correct: 2,
      explanation: 'App struct គឺជាកន្លែងល្អបំផុតដើម្បីបង្កើត "Source of Truth" សម្រាប់ Environment Object។'
    }
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដែលគ្រប់គ្រង User's Authentication State ដោយប្រើប្រាស់ Environment Object។

**តម្រូវការ:**

1.  **Observable Object:**
    -   បង្កើត Class មួយឈ្មោះ \`AuthenticationManager\` ដែលមាន \`@Published\` Property មួយឈ្មោះ \`isLoggedIn\`។
    -   មាន Function ពីរគឺ \`login()\` និង \`logout()\`។

2.  **App Structure:**
    -   នៅ \`App\` struct, ប្រកាស \`@StateObject\` សម្រាប់ \`AuthenticationManager\` ហើយដាក់វាចូលទៅក្នុង Environment។
    -   នៅ \`ContentView\` ប្រើ \`if\` ដើម្បីបង្ហាញ View ផ្សេងៗគ្នា (LoginView ឬ HomeView) ទៅតាម \`isLoggedIn\` State។

3.  **Views:**
    -   បង្កើត \`LoginView\` ដែលមាន Button មួយសម្រាប់ \`login()\`។
    -   បង្កើត \`HomeView\` ដែលមាន Button មួយសម្រាប់ \`logout()\`។
    -   Views ទាំងពីរគួរប្រើ \`@EnvironmentObject\` ដើម្បីចូលប្រើប្រាស់ \`AuthenticationManager\`។

**ការណែនាំ:** ត្រូវប្រាកដថាអ្នក import SwiftUI នៅក្នុងគ្រប់ Views ទាំងអស់។
    `,
    solution: `
\`\`\`swift
import SwiftUI

// Observable Object
class AuthenticationManager: ObservableObject {
    @Published var isLoggedIn = false
    
    func login() {
        isLoggedIn = true
    }
    
    func logout() {
        isLoggedIn = false
    }
}

// App Entry Point
@main
struct AuthApp: App {
    @StateObject var authManager = AuthenticationManager()
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(authManager)
        }
    }
}

// Main Content View
struct ContentView: View {
    @EnvironmentObject var authManager: AuthenticationManager
    
    var body: some View {
        if authManager.isLoggedIn {
            HomeView()
        } else {
            LoginView()
        }
    }
}

// Login View
struct LoginView: View {
    @EnvironmentObject var authManager: AuthenticationManager
    
    var body: some View {
        VStack(spacing: 20) {
            Text("សូមចូលគណនី")
                .font(.largeTitle)
            
            Button("ចុចដើម្បី Login") {
                authManager.login()
            }
            .padding()
            .background(.blue)
            .foregroundColor(.white)
            .cornerRadius(10)
        }
    }
}

// Home View
struct HomeView: View {
    @EnvironmentObject var authManager: AuthenticationManager
    
    var body: some View {
        VStack(spacing: 20) {
            Text("សូមស្វាគមន៍!")
                .font(.largeTitle)
            
            Button("ចុចដើម្បី Logout") {
                authManager.logout()
            }
            .padding()
            .background(.red)
            .foregroundColor(.white)
            .cornerRadius(10)
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson3_3Content;