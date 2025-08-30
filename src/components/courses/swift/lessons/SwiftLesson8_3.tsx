import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson8_3Content: LessonContent = {
  title: 'Secure Enclave និង Keychain',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Secure Enclave និងតួនាទីរបស់វា',
    'ស្គាល់ពីអ្វីទៅជា Keychain Services និងរបៀបប្រើប្រាស់វា',
    'រៀនពីរបៀបរក្សាទុកទិន្នន័យរសើប (Sensitive Data) ដោយសុវត្ថិភាព',
    'អនុវត្តការរក្សាទុក Passwords និង Secret Keys ទៅក្នុង Keychain',
    'យល់ដឹងពីភាពខុសគ្នារវាង Keychain និង UserDefaults'
  ],
  content: `
# Secure Enclave និង Keychain 🔐

---

ដើម្បីបង្កើត App ដែលមានសុវត្ថិភាព អ្នកត្រូវយល់ដឹងពីរបៀបរក្សាទុកទិន្នន័យរសើបដូចជា Passwords, API Keys, និង Private Keys ។ **Keychain Services** គឺជា Solution របស់ Apple ដែលត្រូវបានបង្កើតឡើងសម្រាប់គោលបំណងនេះ។ វារក្សាទុកទិន្នន័យនៅក្នុង encrypted database ។ Keychain ធ្វើការយ៉ាងជិតស្និទ្ធជាមួយ **Secure Enclave** ដែលជា Processor ជំនួយដ៏ឯករាជ្យមួយសម្រាប់គ្រប់គ្រង Keys ដែលទាក់ទងនឹងសុវត្ថិភាព។

## 1. អ្វីទៅជា Secure Enclave?

**Secure Enclave** គឺជា Hardware ផ្នែកមួយរបស់ Apple A-Series Processor ដែលមានលក្ខណៈឯករាជ្យពី Main Processor (CPU)។ វាមាន Microkernel និង RAM ផ្ទាល់ខ្លួន ហើយដំណើរការដោយឡែកពី iOS ។

-   **តួនាទី:** Secure Enclave គ្រប់គ្រង Keys សម្រាប់ Face ID និង Touch ID ។ Keys ទាំងនេះមិនអាចត្រូវបានទាញយកពី Secure Enclave បានទេ សូម្បីតែតាមរយៈ iOS Kernel ក៏ដោយ។ នេះធានាថា Keys របស់ Face ID និង Touch ID មានសុវត្ថិភាពខ្ពស់។

## 2. អ្វីទៅជា Keychain Services?

**Keychain Services** គឺជា API ដែលអនុញ្ញាតឱ្យអ្នករក្សាទុកទិន្នន័យតូចៗនិងរសើបដោយសុវត្ថិភាព។

-   **លក្ខណៈពិសេស:**
    -   **Encryption:** ទិន្នន័យត្រូវបាន Encrypt ។
    -   **Persistence:** ទិន្នន័យនៅតែមានបន្ទាប់ពី App ត្រូវបានលុបនិងដំឡើងឡើងវិញ។
    -   **Sharing:** អ្នកអាចចែករំលែក Keys រវាង Apps ផ្សេងៗរបស់អ្នក។

## 3. ការប្រើប្រាស់ Keychain

ការប្រើប្រាស់ Keychain API គឺមានភាពស្មុគស្មាញបន្តិច ដូច្នេះ Developer ភាគច្រើនប្រើ Libraries ដូចជា **\`KeychainSwift\`** ឬ **\`Locker\`** ។

\`\`\`swift
// ឧទាហរណ៍៖ ការប្រើ KeychainSwift
// ដំឡើង Library តាម Swift Package Manager
// File > Add Packages... > "https://github.com/evgenii/KeychainSwift"

import KeychainSwift

class KeychainManager {
    static let shared = KeychainManager()
    private let keychain = KeychainSwift()
    
    // រក្សាទុក Password
    func savePassword(password: String, forService service: String) {
        keychain.set(password, forKey: service)
        print("Password saved to Keychain for service: \\(service)")
    }
    
    // ទាញយក Password
    func getPassword(forService service: String) -> String? {
        if let password = keychain.get(service) {
            print("Password retrieved from Keychain for service: \\(service)")
            return password
        } else {
            print("Password not found in Keychain for service: \\(service)")
            return nil
        }
    }
    
    // លុប Password
    func deletePassword(forService service: String) {
        keychain.delete(service)
        print("Password deleted from Keychain for service: \\(service)")
    }
}
\`\`\`

## 4. ភាពខុសគ្នារវាង Keychain និង UserDefaults

| លក្ខណៈពិសេស       | Keychain Services                          | UserDefaults                                   |
| -------------------- | ------------------------------------------ | ---------------------------------------------- |
| **គោលបំណង** | រក្សាទុកទិន្នន័យរសើប (Passwords, Keys)    | រក្សាទុកទិន្នន័យមិនរសើប (Settings, Preferences) |
| **សុវត្ថិភាព** | **Encrypt** ដោយសុវត្ថិភាពខ្ពស់           | **មិន Encrypt** (ងាយស្រួលអាន)                  |
| **ទំហំ Data** | ទិន្នន័យតូចៗ                                | ទិន្នន័យតូចៗ                                 |
| **Persistence** | នៅតែមានសូម្បី App ត្រូវបានលុប            | បាត់បង់នៅពេល App ត្រូវបានលុប                 |

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Keychain ដោយគ្មាន Library</h3>
<p>ការប្រើ Keychain API ផ្ទាល់ (ASAuthorization) មានភាពស្មុគស្មាញជាង។</p>
<pre><code class="language-swift">
// ឧទាហរណ៍នៃការ query ពី Keychain
import Security

let query: [String: Any] = [
    kSecClass as String: kSecClassGenericPassword,
    kSecAttrAccount as String: "my-password",
    kSecMatchLimit as String: kSecMatchLimitOne,
    kSecReturnData as String: kCFBooleanTrue!
]

var item: CFTypeRef?
let status = SecItemCopyMatching(query as CFDictionary, &item)

if status == errSecSuccess {
    let retrievedData = item as! Data
    let password = String(data: retrievedData, encoding: .utf8)!
    print("Retrieved password: \\(password)")
} else {
    print("Error: \\(status)")
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Secure Enclave គឺជាអ្វី?',
      options: [
        'ផ្នែកមួយរបស់ iOS',
        'ផ្នែក Hardware របស់ Apple A-Series Processor',
        'Database',
        'Keychain Library'
      ],
      correct: 1,
      explanation: 'Secure Enclave គឺជា Processor ជំនួយដ៏ឯករាជ្យដែលត្រូវបានបង្កើតឡើងសម្រាប់គោលបំណងសុវត្ថិភាព។'
    },
    {
      question: 'តើ Keychain Services ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក User Interface',
        'រក្សាទុក Audio Files',
        'រក្សាទុក Passwords និង Keys ដោយសុវត្ថិភាព',
        'រក្សាទុក Preferences'
      ],
      correct: 2,
      explanation: 'Keychain Services ត្រូវបានបង្កើតឡើងដើម្បីរក្សាទុកទិន្នន័យរសើបដូចជា Passwords ដោយសុវត្ថិភាព។'
    },
    {
      question: 'តើ Data ដែលរក្សាទុកក្នុង Keychain Services ត្រូវបាន Encrypt ដែរឬទេ?',
      options: [
        'Encrypt',
        'មិន Encrypt ទេ',
        'Encrypt តែពេលមាន Network Connection',
        'វាអាស្រ័យលើ Developer'
      ],
      correct: 0,
      explanation: 'Keychain Services គឺជា Encrypted Database ។'
    },
    {
      question: 'តើ Data ក្នុង Keychain នៅតែមានបន្ទាប់ពី App ត្រូវបានលុបទេ?',
      options: [
        'នៅតែមាន',
        'បាត់បង់',
        'បាត់បង់តែពេល Device បិទ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Data នៅក្នុង Keychain នៅតែមានសូម្បីតែបន្ទាប់ពី App ត្រូវបានលុប។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង Keychain និង UserDefaults?',
      options: [
        'Keychain សម្រាប់ String ចំណែក UserDefaults សម្រាប់ Int',
        'Keychain សម្រាប់ Data ធំៗ ចំណែក UserDefaults សម្រាប់ Data តូចៗ',
        'Keychain មានលក្ខណៈ Secure ចំណែក UserDefaults មិន Secure',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 2,
      explanation: 'ភាពខុសគ្នាសំខាន់គឺ Keychain ផ្តល់នូវសុវត្ថិភាពខ្ពស់ដោយ Encrypt Data ខណៈ UserDefaults មិន Encrypt ទេ។'
    },
    {
      question: 'តើ `KeychainSwift` ជាអ្វី?',
      options: [
        'Apple Framework',
        'Third-party Library ដែលធ្វើឱ្យការប្រើ Keychain កាន់តែងាយស្រួល',
        'Service របស់ Google',
        'Database'
      ],
      correct: 1,
      explanation: '`KeychainSwift` គឺជា Library ដែលជួយសម្រួលការប្រើ Keychain API ។'
    },
    {
      question: 'តើ `kSecClass` ប្រើសម្រាប់អ្វីនៅក្នុង Keychain Query?',
      options: [
        'កំណត់ Service Name',
        'កំណត់ប្រភេទ Item ដែលត្រូវរក',
        'កំណត់ Account Name',
        'កំណត់ Password'
      ],
      correct: 1,
      explanation: '`kSecClass` កំណត់ប្រភេទរបស់ Keychain Item ដែលត្រូវរក។'
    },
    {
      question: 'តើ Face ID និង Touch ID ធ្វើការជាមួយ Hardware មួយណា?',
      options: [
        'CPU',
        'Secure Enclave',
        'RAM',
        'GPU'
      ],
      correct: 1,
      explanation: 'Face ID និង Touch ID ធ្វើការជាមួយ Secure Enclave ដើម្បីរក្សាទុក Keys ដោយសុវត្ថិភាព។'
    },
    {
      question: 'តើ `keychain.set(password, forKey: service)` នឹងរក្សាទុក Data នៅឯណា?',
      options: [
        'ក្នុង Memory',
        'ក្នុង Documents Directory',
        'ក្នុង Keychain Services',
        'ក្នុង UserDefaults'
      ],
      correct: 2,
      explanation: '`set()` Method របស់ KeychainSwift នឹងរក្សាទុក Data ទៅក្នុង Keychain Services។'
    },
    {
      question: 'តើអ្នកអាចរក្សាទុក `String` នៅក្នុង Keychain បានទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលបកប្រែទៅជា `Data`',
        'បានតែជាមួយ Library'
      ],
      correct: 0,
      explanation: 'Keychain Services អាចរក្សាទុក `String` (បកប្រែទៅជា `Data` នៅពីក្រោយឆាក)។'
    }
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដើម្បីរក្សាទុកនិងទាញយក Password ដោយសុវត្ថិភាពពី Keychain ។

**តម្រូវការ:**

1.  **Project:**
    -   បង្កើត Project SwiftUI ថ្មីមួយ។
    -   ដំឡើង \`KeychainSwift\` Library តាមរយៈ Swift Package Manager។

2.  **UI:**
    -   ប្រើ \`SecureField\` ដើម្បីបញ្ចូល Password ។
    -   ប្រើ \`Button\` មួយសម្រាប់ "Save Password" ។
    -   ប្រើ \`Button\` មួយសម្រាប់ "Get Password" ។
    -   ប្រើ \`Text\` មួយដើម្បីបង្ហាញស្ថានភាពឬ Password ដែលបានទាញយក។

3.  **Logic:**
    -   ប្រើ \`KeychainManager\` Class ពី Lesson Content ដើម្បីធ្វើការជាមួយ Keychain ។
    -   នៅពេលចុចលើ "Save Password" Button, ហៅ \`savePassword()\` ។
    -   នៅពេលចុចលើ "Get Password" Button, ហៅ \`getPassword()\` ហើយបង្ហាញលទ្ធផល។

**ការណែនាំ:** ត្រូវប្រាកដថាអ្នកបាន import \`KeychainSwift\` នៅក្នុង File របស់អ្នក។
    `,
    solution: `
\`\`\`swift
import SwiftUI
import KeychainSwift

struct KeychainView: View {
    @State private var passwordInput: String = ""
    @State private var retrievedPassword: String = "No password retrieved yet."
    
    let keychain = KeychainSwift()
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Keychain Password Storage")
                .font(.largeTitle)
            
            SecureField("Enter Password", text: $passwordInput)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding(.horizontal)
            
            HStack(spacing: 20) {
                Button("Save Password") {
                    keychain.set(passwordInput, forKey: "user_password")
                    passwordInput = "" // Clear the field after saving
                    retrievedPassword = "Password saved successfully!"
                }
                .buttonStyle(.borderedProminent)
                
                Button("Get Password") {
                    if let password = keychain.get("user_password") {
                        retrievedPassword = "Retrieved: \\(password)"
                    } else {
                        retrievedPassword = "No password found."
                    }
                }
                .buttonStyle(.bordered)
            }
            
            Text(retrievedPassword)
                .padding()
                .foregroundColor(.secondary)
        }
        .padding()
    }
}

// Preview Provider
struct KeychainView_Previews: PreviewProvider {
    static var previews: some View {
        KeychainView()
    }
}
\`\`\`
`
  }
};

export default SwiftLesson8_3Content;