import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson7_2Content: LessonContent = {
  title: 'UserDefaults',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា UserDefaults និងការប្រើប្រាស់របស់វា',
    'ស្គាល់ពីរបៀបរក្សាទុកនិងទាញយក Data ពី UserDefaults',
    'រៀនពីរបៀបប្រើ Property Wrappers ដូចជា `@AppStorage`',
    'អនុវត្តការរក្សាទុក Preferences និង Settings',
    'យល់ដឹងពីដែនកំណត់របស់ UserDefaults'
  ],
  content: `
# UserDefaults 🔑

---

**UserDefaults** គឺជា Interface សាមញ្ញមួយសម្រាប់រក្សាទុក **Key-Value Pairs** នៅក្នុងកម្មវិធីរបស់អ្នក។ វាល្អបំផុតសម្រាប់រក្សាទុកទិន្នន័យតូចៗនិងសាមញ្ញដូចជា User Settings, Preferences ឬស្ថានភាពចុងក្រោយរបស់ App។ Data ដែលត្រូវបានរក្សាទុកនៅក្នុង UserDefaults នឹងនៅដដែលសូម្បីតែបន្ទាប់ពី App ត្រូវបានបិទក៏ដោយ។

## 1. ហេតុអ្វីត្រូវប្រើ UserDefaults?

-   **ងាយស្រួលប្រើ:** មាន API សាមញ្ញសម្រាប់រក្សាទុកនិងទាញយកទិន្នន័យ។
-   **រហ័សនិងមានប្រសិទ្ធភាព:** ល្អបំផុតសម្រាប់ទិន្នន័យតូចៗ។
-   **Persistent:** ទិន្នន័យនៅតែមានបន្ទាប់ពី App ត្រូវបានបិទ។

## 2. របៀបប្រើប្រាស់ UserDefaults

\`UserDefaults.standard\` គឺជា Instance ដែលត្រូវបានប្រើប្រាស់ទូទៅបំផុត។

\`\`\`swift
// ការរក្សាទុក Data
UserDefaults.standard.set("រាជធានីភ្នំពេញ", forKey: "cityName")
UserDefaults.standard.set(true, forKey: "darkModeEnabled")

// ការទាញយក Data
let cityName = UserDefaults.standard.string(forKey: "cityName") ?? "មិនស្គាល់"
let isDarkMode = UserDefaults.standard.bool(forKey: "darkModeEnabled")

print("ឈ្មោះទីក្រុង: \\(cityName)")
print("DarkMode: \\(isDarkMode)")
\`\`\`

**ចំណាំ៖** \`UserDefaults\` មិនល្អសម្រាប់រក្សាទុកទិន្នន័យធំៗដូចជា Objects ឬ Arrays ទេ។ ទោះយ៉ាងណា អ្នកអាចប្រើ \`Codable\` ដើម្បីបកប្រែ Objects ទៅជា \`Data\` មុននឹងរក្សាទុក។

## 3. \`UserDefaults\` ជាមួយ SwiftUI និង \`@AppStorage\`

SwiftUI ផ្តល់នូវ Property Wrapper ដ៏អស្ចារ្យមួយឈ្មោះ **\`@AppStorage\`** ដែលធ្វើឱ្យការធ្វើការជាមួយ \`UserDefaults\` កាន់តែងាយស្រួល។ វាបង្កើត \`Binding\` ដោយស្វ័យប្រវត្តិ។

\`\`\`swift
import SwiftUI

struct SettingsView: View {
    // ប្រើ @AppStorage ជំនួស @State
    @AppStorage("isDarkMode") private var isDarkMode = false
    
    var body: some View {
        Form {
            Toggle("របៀបងងឹត", isOn: $isDarkMode)
        }
        .preferredColorScheme(isDarkMode ? .dark : .light)
    }
}
\`\`\`
នៅពេលដែល \`isDarkMode\` ផ្លាស់ប្តូរ SwiftUI នឹងរក្សាទុកតម្លៃថ្មីទៅក្នុង \`UserDefaults\` ដោយស្វ័យប្រវត្តិ។

## 4. ដែនកំណត់របស់ UserDefaults

-   **Data Size:** មិនសមរម្យសម្រាប់រក្សាទុកទិន្នន័យដែលមានទំហំធំ។
-   **Security:** Data នៅក្នុង UserDefaults មិនត្រូវបាន Encrypt ទេ ដូច្នេះកុំរក្សាទុកព័ត៌មានរសើបដូចជា Passwords ។
-   **Performance:** ការអាននិងសរសេរញឹកញាប់ពេកអាចប៉ះពាល់ដល់ Performance។

សម្រាប់ទិន្នន័យធំៗនិងស្មុគស្មាញ អ្នកគួរតែប្រើ Core Data ឬ Realm ។ សម្រាប់ឯកសារ អ្នកគួរតែប្រើ \`FileManager\`។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការរក្សាទុក Object ជាមួយ Codable</h3>
<p>យើងអាចរក្សាទុក Object មួយដោយបកប្រែវាទៅជា Data មុនពេលរក្សាទុក។</p>
<pre><code class="language-swift">
import Foundation

struct User: Codable {
    let username: String
    let email: String
}

func saveUser() {
    let user = User(username: "sokha", email: "sokha@example.com")
    if let encoded = try? JSONEncoder().encode(user) {
        UserDefaults.standard.set(encoded, forKey: "user_data")
        print("User saved successfully.")
    }
}

func loadUser() -> User? {
    if let savedData = UserDefaults.standard.data(forKey: "user_data") {
        if let decodedUser = try? JSONDecoder().decode(User.self, from: savedData) {
            print("User loaded: \\(decodedUser.username)")
            return decodedUser
        }
    }
    return nil
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ UserDefaults សមរម្យសម្រាប់រក្សាទុក Data ប្រភេទណា?',
      options: [
        'រូបភាពនិងវីដេអូ',
        'Data ធំដែលមាន Relationships',
        'User Settings និង Preferences',
        'Passwords'
      ],
      correct: 2,
      explanation: 'UserDefaults ត្រូវបានបង្កើតឡើងសម្រាប់រក្សាទុកទិន្នន័យតូចៗដូចជា Settings។'
    },
    {
      question: 'តើ `@AppStorage` ប្រើជាមួយ Property Wrapper មួយណា?',
      options: [
        '`@State`',
        '`@Binding`',
        '`@AppStorage`',
        '`@StateObject`'
      ],
      correct: 2,
      explanation: '`@AppStorage` គឺជា Property Wrapper មួយសម្រាប់ធ្វើការជាមួយ UserDefaults។'
    },
    {
      question: 'តើ UserDefaults រក្សាទុក Data ក្នុងទម្រង់អ្វី?',
      options: [
        'Array',
        'Object',
        'Key-Value Pairs',
        'Singletons'
      ],
      correct: 2,
      explanation: 'UserDefaults រក្សាទុក Data ក្នុងទម្រង់ Key-Value Pairs។'
    },
    {
      question: 'តើ Data ក្នុង UserDefaults បាត់នៅពេល App ត្រូវបានបិទទេ?',
      options: [
        'បាត់',
        'មិនបាត់ទេ',
        'បាត់តែនៅលើ Simulator',
        'បាត់តែនៅលើ Device ពិត'
      ],
      correct: 1,
      explanation: 'Data នៅក្នុង UserDefaults នឹងនៅដដែលសូម្បីតែបន្ទាប់ពី App ត្រូវបានបិទក៏ដោយ។'
    },
    {
      question: 'តើ `UserDefaults.standard.bool(forKey: "myKey")` នឹង Return មកអ្វីបើ `myKey` មិនមាន?',
      options: [
        'true',
        'false',
        'nil',
        'Error'
      ],
      correct: 1,
      explanation: 'Methods ដូចជា `bool(forKey:)`, `integer(forKey:)` នឹង Return Value Default (`false`, `0`) ប្រសិនបើ Key មិនមាន។'
    },
    {
      question: 'តើ `Codable` ត្រូវបានប្រើជាមួយ `UserDefaults` សម្រាប់អ្វី?',
      options: [
        'ដើម្បី Encrypt Data',
        'ដើម្បីរក្សាទុក Data ធំៗ',
        'ដើម្បីបកប្រែ Swift Object ទៅជា Data',
        'ដើម្បីទាញយក Data'
      ],
      correct: 2,
      explanation: '`Codable` ត្រូវបានប្រើដើម្បីបកប្រែ Object ទៅជា `Data` មុនពេលរក្សាទុកនៅក្នុង `UserDefaults`។'
    },
    {
      question: 'តើ Data ក្នុង `UserDefaults` មានលក្ខណៈ Secure ទេ?',
      options: [
        'Secure',
        'មិន Secure ទេ',
        'Secure តែនៅលើ Device ពិត',
        'Secure តែនៅលើ Simulator'
      ],
      correct: 1,
      explanation: 'Data នៅក្នុង UserDefaults មិនត្រូវបាន Encrypt ទេ ដូច្នេះវាមិនមានលក្ខណៈ Secure ទេ។'
    },
    {
      question: 'តើ `UserDefaults` អាចរក្សាទុក `Array<String>` បានទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែជាមួយ `Codable`',
        'បានតែនៅលើ iOS 15+'
      ],
      correct: 0,
      explanation: '`UserDefaults` អាចរក្សាទុក Standard Object Types ដូចជា `Array`, `Dictionary`, `String`, `Int` បាន។'
    },
    {
      question: 'តើ `UserDefaults` មានឥទ្ធិពលអ្វីលើ Performance បើប្រើមិនត្រឹមត្រូវ?',
      options: [
        'ធ្វើឱ្យ App គាំង',
        'ធ្វើឱ្យ App ដំណើរការយឺត',
        'ធ្វើឱ្យ App ដំណើរការលឿន',
        'គ្មានឥទ្ធិពលទេ'
      ],
      correct: 1,
      explanation: 'ការអាននិងសរសេរច្រើនពេកទៅក្នុង `UserDefaults` អាចធ្វើឱ្យ App ដំណើរការយឺត។'
    },
    {
      question: 'តើ `UserDefaults` ជា Solution ដ៏ល្អសម្រាប់រក្សាទុក Passwords ដែរឬទេ?',
      options: [
        'ល្អណាស់',
        'មិនល្អទេ ព្រោះវាមិន Secure',
        'ល្អណាស់ ព្រោះវាងាយស្រួលប្រើ',
        'វាអាស្រ័យលើ Developer'
      ],
      correct: 1,
      explanation: 'ដោយសារ `UserDefaults` មិន Secure អ្នកមិនគួររក្សាទុក Passwords ឬព័ត៌មានរសើបឡើយ។'
    }
  ],
  lab: {
    task: `
បង្កើត View មួយដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ប្តូរពណ៌ Background របស់ App ហើយរក្សាទុកតម្លៃនោះដោយប្រើ \`@AppStorage\`។

**តម្រូវការ:**

1.  **View:**
    -   បង្កើត View ថ្មីមួយ។
    -   ប្រើ \`@AppStorage\` Property Wrapper ដើម្បីបង្កើត \`State\` Property មួយឈ្មោះ \`selectedColor\` ដែលមានប្រភេទជា \`String\`។ ផ្តល់ Key មួយទៅវា។

2.  **UI:**
    -   បង្ហាញ \`ColorPicker\` ដែល Binding ទៅនឹង \`selectedColor\`។
    -   Background របស់ View ទាំងមូលត្រូវផ្លាស់ប្តូរទៅតាមពណ៌ដែលបានជ្រើសរើស។

3.  **Persistence:**
    -   នៅពេលអ្នកប្រើប្រាស់ប្តូរពណ៌ App នឹងរក្សាទុកតម្លៃពណ៌នោះដោយស្វ័យប្រវត្តិ។
    -   នៅពេល App ត្រូវបានបិទហើយបើកមកវិញ Background នឹងនៅតែមានពណ៌ដដែល។

**ការណែនាំ:** អ្នកអាចបកប្រែ \`Color\` ទៅជា \`String\` បានដោយប្រើ \`Codable\` ឬ \`Data\`។
    `,
    solution: `
\`\`\`swift
import SwiftUI

struct AppColor: Codable, Hashable {
    var red: Double
    var green: Double
    var blue: Double
    var alpha: Double

    var color: Color {
        return Color(red: red, green: green, blue: blue, opacity: alpha)
    }

    init(color: Color) {
        let uiColor = UIColor(color)
        var r: CGFloat = 0, g: CGFloat = 0, b: CGFloat = 0, a: CGFloat = 0
        uiColor.getRed(&r, green: &g, blue: &b, alpha: &a)
        self.red = Double(r)
        self.green = Double(g)
        self.blue = Double(b)
        self.alpha = Double(a)
    }
}

// ប្រើ @AppStorage ជាមួយ Codable
extension AppColor: RawRepresentable {
    public var rawValue: String {
        guard let data = try? JSONEncoder().encode(self) else {
            return ""
        }
        return String(data: data, encoding: .utf8) ?? ""
    }

    public init?(rawValue: String) {
        guard let data = rawValue.data(using: .utf8),
              let result = try? JSONDecoder().decode(AppColor.self, from: data) else {
            return nil
        }
        self = result
    }
}

struct ColorPickerView: View {
    @AppStorage("bgColor") private var storedColor: AppColor = AppColor(color: .white)
    
    @State private var color: Color
    
    init() {
        _color = State(initialValue: storedColor.color)
    }

    var body: some View {
        VStack {
            Text("ជ្រើសរើសពណ៌ផ្ទៃខាងក្រោយ")
                .font(.title)
                .padding()
            
            ColorPicker("ពណ៌ផ្ទៃខាងក្រោយ", selection: $color)
                .padding()
                .background(.regularMaterial)
                .cornerRadius(10)
                .shadow(radius: 5)
            
            Spacer()
        }
        .padding()
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(color)
        .onChange(of: color) { oldValue, newValue in
            storedColor = AppColor(color: newValue)
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson7_2Content;