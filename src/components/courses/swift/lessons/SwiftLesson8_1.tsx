import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson8_1Content: LessonContent = {
  title: 'Sign in with Apple',
  objectives: [
    'យល់ដឹងពីគោលការណ៍របស់ Sign in with Apple',
    'រៀនពីរបៀបអនុវត្ត Sign in with Apple នៅក្នុង SwiftUI',
    'ស្គាល់ពីការគ្រប់គ្រង Token និងការទទួលបាន User Data',
    'យល់ដឹងពីមុខងារ Private Email Relay និងអត្ថប្រយោជន៍របស់វា',
    'រៀនពីរបៀបប្តូរ Authentication Status'
  ],
  content: `
# Sign in with Apple 🍏

---

**Sign in with Apple** គឺជាវិធីសាស្រ្ត Authentication ដ៏មានសុវត្ថិភាពនិងងាយស្រួលដែល Apple ផ្តល់ឱ្យ។ វាអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ Sign in ទៅកាន់ App របស់អ្នកដោយប្រើ Apple ID របស់ពួកគេ ដោយមិនចាំបាច់បង្កើតគណនីថ្មីឬបង្ហាញព័ត៌មានផ្ទាល់ខ្លួនដូចជា Email ឡើយ។ វាមានសារៈសំខាន់ជាពិសេសបន្ទាប់ពី Apple បានកំណត់ថា App ណាដែលមាន Social Login ត្រូវតែមាន "Sign in with Apple" ផងដែរ។

## 1. អត្ថប្រយោជន៍

-   **សុវត្ថិភាព:** Apple ប្រើ Two-Factor Authentication ដើម្បីធានាសុវត្ថិភាព។
-   **ឯកជនភាព:** អ្នកប្រើប្រាស់អាចជ្រើសរើសដើម្បីចែករំលែកឈ្មោះនិង Email ពិតប្រាកដ ឬប្រើ Private Email Relay របស់ Apple។
-   **ងាយស្រួលប្រើ:** អ្នកប្រើប្រាស់អាច Sign in ដោយប្រើ Face ID ឬ Touch ID យ៉ាងរហ័ស។

## 2. ការរៀបចំគម្រោង

### ជំហានទី 1: បើក \`Sign in with Apple\` Capability
នៅក្នុង Xcode, ទៅកាន់ Project Navigator -> Target -> Signing & Capabilities -> + Capability -> ជ្រើសរើស "Sign in with Apple"។

### ជំហានទី 2: ការអនុវត្ត Code

យើងនឹងប្រើ \`AuthenticationServices\` Framework។

\`\`\`swift
import SwiftUI
import AuthenticationServices

struct SignInWithAppleButtonView: View {
    var body: some View {
        SignInWithAppleButton(
            .continue,
            onRequest: { request in
                request.requestedScopes = [.fullName, .email]
            },
            onCompletion: { result in
                switch result {
                case .success(let authResults):
                    print("Authorization successful!")
                    handleAuthResult(authResults)
                case .failure(let error):
                    print("Authorization failed: \\(error.localizedDescription)")
                }
            }
        )
        .frame(height: 50)
        .signInWithAppleButtonStyle(.whiteOutline)
        .padding()
    }

    private func handleAuthResult(_ authResults: ASAuthorization) {
        if let appleIDCredential = authResults.credential as? ASAuthorizationAppleIDCredential {
            let userIdentifier = appleIDCredential.user
            let fullName = appleIDCredential.fullName
            let email = appleIDCredential.email
            
            print("User ID: \\(userIdentifier)")
            print("Full Name: \\(fullName?.givenName ?? "N/A") \\(fullName?.familyName ?? "N/A")")
            print("Email: \\(email ?? "N/A")")
            
            // នៅទីនេះ អ្នកអាចផ្ញើ userIdentifier និង identityToken ទៅកាន់ Server របស់អ្នក
            // ដើម្បីធ្វើការផ្ទៀងផ្ទាត់ (Verification)
            if let identityTokenData = appleIDCredential.identityToken,
               let identityToken = String(data: identityTokenData, encoding: .utf8) {
                print("Identity Token: \\(identityToken)")
            }
        }
    }
}

// Preview Provider
struct SignInWithAppleButtonView_Previews: PreviewProvider {
    static var previews: some View {
        SignInWithAppleButtonView()
    }
}
\`\`\`

## 3. ការគ្រប់គ្រងស្ថានភាព (State)

ដើម្បីគ្រប់គ្រង Authentication State របស់ App អ្នកអាចប្រើ \`UserDefaults\` ដើម្បីរក្សាទុក \`userIdentifier\`។

\`\`\`swift
// កែប្រែ ViewModel របស់អ្នក
class AuthViewModel: ObservableObject {
    @Published var isAuthenticated = false
    @Published var userId: String?

    init() {
        // ពិនិត្យមើលស្ថានភាព Sign in នៅពេល App ចាប់ផ្តើម
        if let userId = UserDefaults.standard.string(forKey: "userId") {
            self.userId = userId
            self.isAuthenticated = true
        }
    }

    func saveUserId(id: String) {
        UserDefaults.standard.set(id, forKey: "userId")
        self.userId = id
        self.isAuthenticated = true
    }

    func signOut() {
        UserDefaults.standard.removeObject(forKey: "userId")
        self.userId = nil
        self.isAuthenticated = false
    }
}
\`\`\`

បន្ទាប់មក អ្នកអាចប្រើ \`EnvironmentObject\` ដើម្បីចែករំលែក \`AuthViewModel\` ទៅកាន់ Views ផ្សេងទៀត។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`ASAuthorizationController.State\`</h3>
<p>អ្នកអាចពិនិត្យមើលស្ថានភាពរបស់ Credential ដោយស្វ័យប្រវត្តិនៅពេល App ចាប់ផ្តើម។</p>
<pre><code class="language-swift">
import AuthenticationServices

func performExistingAccountSetup() {
    let appleIDProvider = ASAuthorizationAppleIDProvider()
    let request = appleIDProvider.createRequest()
    request.requestedScopes = [.fullName, .email]
    
    let authorizationController = ASAuthorizationController(authorizationRequests: [request])
    authorizationController.performRequests()
}

// នៅក្នុង AppDelegate ឬ SceneDelegate
// អ្នកអាចប្រើ this to check if user already signed in
let provider = ASAuthorizationAppleIDProvider()
provider.getCredentialState(forUserID: "User ID របស់អ្នក") { credentialState, error in
    switch credentialState {
    case .authorized:
        // អ្នកប្រើប្រាស់បាន Sign in រួចហើយ
        print("Authorized")
    case .revoked:
        // អ្នកប្រើប្រាស់បានលុប App ឬ revoke access
        print("Revoked")
    case .notFound:
        // មិនមាន Credential
        print("Not Found")
    default:
        break
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Sign in with Apple ផ្តល់អត្ថប្រយោជន៍សំខាន់អ្វី?',
      options: [
        'ល្បឿនលឿនក្នុងការ Sign in',
        'ការគ្រប់គ្រង Database',
        'ឯកជនភាពរបស់អ្នកប្រើប្រាស់',
        'ទាំងពីរ (ល្បឿននិងឯកជនភាព)'
      ],
      correct: 3,
      explanation: 'Sign in with Apple ផ្តល់ទាំងល្បឿនលឿនតាមរយៈ Face ID/Touch ID និងឯកជនភាពតាមរយៈ Private Email Relay ។'
    },
    {
      question: 'តើ `ASAuthorizationAppleIDCredential` Object ផ្តល់ព័ត៌មានអ្វីខ្លះ?',
      options: [
        'User\'s device ID',
        'User\'s name, email, and a unique identifier',
        'User\'s credit card information',
        'App\'s bundle ID'
      ],
      correct: 1,
      explanation: 'វាផ្តល់ព័ត៌មានដូចជា `userIdentifier`, `fullName`, និង `email`។'
    },
    {
      question: 'តើ `Private Email Relay` គឺជាអ្វី?',
      options: [
        'Email Address ពិតប្រាកដរបស់អ្នកប្រើប្រាស់',
        'Email Address សម្រាប់ Developer',
        'Email Address ដែល Apple បង្កើតដើម្បីការពារ Email ពិតប្រាកដរបស់អ្នកប្រើប្រាស់',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Private Email Relay គឺជា Service របស់ Apple ដែលបង្កើត Email ក្លែងក្លាយដើម្បីការពារ Email ពិតប្រាកដរបស់អ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ `requestedScopes` ប្រើសម្រាប់អ្វី?',
      options: [
        'ស្នើសុំការអនុញ្ញាតពីអ្នកប្រើប្រាស់សម្រាប់ Camera',
        'ស្នើសុំការអនុញ្ញាតសម្រាប់ Access Contacts',
        'ស្នើសុំការអនុញ្ញាតសម្រាប់ព័ត៌មានដែលយើងចង់បាន (ឧ. name, email)',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`requestedScopes` ត្រូវបានប្រើដើម្បីស្នើសុំព័ត៌មានពីអ្នកប្រើប្រាស់ដូចជា `fullName` និង `email`។'
    },
    {
      question: 'ហេតុអ្វីបានជា App ដែលមាន Social Login ផ្សេងទៀតតម្រូវឱ្យមាន "Sign in with Apple"?',
      options: [
        'ដើម្បីធ្វើឱ្យ App កាន់តែស្អាត',
        'ដើម្បីធានាសុវត្ថិភាពនិងឯកជនភាពរបស់អ្នកប្រើប្រាស់',
        'ដើម្បីឱ្យ App អាចដាក់លក់បាន',
        'ដើម្បីឱ្យ App ដំណើរការលឿន'
      ],
      correct: 1,
      explanation: 'នេះជាគោលការណ៍របស់ Apple ដើម្បីផ្តល់នូវជម្រើសឯកជនភាពនិងសុវត្ថិភាពដល់អ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ `ASAuthorizationController` ជា Class សម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Network Request',
        'គ្រប់គ្រង UI',
        'គ្រប់គ្រង Authentication Process',
        'គ្រប់គ្រង Core Data'
      ],
      correct: 2,
      explanation: '`ASAuthorizationController` គឺជា Class សំខាន់សម្រាប់គ្រប់គ្រងដំណើរការ Sign in with Apple។'
    },
    {
      question: 'តើ `userIdentifier` ជាអ្វី?',
      options: [
        'ឈ្មោះរបស់អ្នកប្រើប្រាស់',
        'Email របស់អ្នកប្រើប្រាស់',
        'Unique String ដែលតំណាងឱ្យគណនីរបស់អ្នកប្រើប្រាស់',
        'Password របស់អ្នកប្រើប្រាស់'
      ],
      correct: 2,
      explanation: '`userIdentifier` គឺជា Unique String ដែលត្រូវបានបង្កើតដោយ Apple សម្រាប់គណនីអ្នកប្រើប្រាស់នីមួយៗ។'
    },
    {
      question: 'តើ Identity Token ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើ Animation',
        'ផ្ទៀងផ្ទាត់ (Verify) អ្នកប្រើប្រាស់នៅលើ Server',
        'រក្សាទុក Data',
        'បង្ហាញ Profile Picture'
      ],
      correct: 1,
      explanation: 'Identity Token គឺជា JSON Web Token (JWT) ដែលត្រូវបានប្រើដើម្បីផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់នៅលើ Server។'
    },
    {
      question: 'តើ `Sign in with Apple` អាចប្រើបានតែនៅលើ iOS Device ឬ?',
      options: [
        'បានតែនៅលើ iOS',
        'បានតែនៅលើ macOS',
        'បាននៅលើ iOS, macOS, watchOS, និង tvOS',
        'បានតែនៅលើ iOS និង macOS'
      ],
      correct: 2,
      explanation: 'Sign in with Apple អាចប្រើបាននៅលើ Platform ទាំងអស់របស់ Apple។'
    },
    {
      question: 'តើ `ASAuthorizationAppleIDButton` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញ Button ធម្មតា',
        'បង្ហាញ Button ដែលមាន Icon របស់ Apple',
        'បង្ហាញ Button ដែលមាន Functionality របស់ Sign in with Apple ដោយស្វ័យប្រវត្តិ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`ASAuthorizationAppleIDButton` គឺជា Button ដែលមាន Functionality របស់ Sign in with Apple ដោយស្រាប់។'
    }
  ],
  lab: {
    task: `
អនុវត្ត Sign in with Apple ទៅក្នុង App មួយ។

**តម្រូវការ:**

1.  **Project:**
    -   បង្កើត Project SwiftUI ថ្មីមួយ។
    -   បើក \`Sign in with Apple\` Capability នៅក្នុង Xcode។

2.  **Authentication View:**
    -   បង្កើត View មួយឈ្មោះ \`AuthView\` ដែលមាន \`Text\` មួយសម្រាប់បង្ហាញស្ថានភាព (ឧ. "Please Sign In") និង \`SignInWithAppleButton\` មួយ។
    -   ប្រើ \`@State\` Property មួយដើម្បីគ្រប់គ្រងស្ថានភាព Sign in ។

3.  **App State:**
    -   បង្កើត \`ViewModel\` ឬ Class មួយដើម្បីគ្រប់គ្រង Authentication Status របស់ App។
    -   នៅពេល Sign in ជោគជ័យ ត្រូវប្តូរស្ថានភាពទៅជា Authenticated ។
    -   ប្រសិនបើ Sign in មិនជោគជ័យ ត្រូវបង្ហាញ Error Message ។

**ការណែនាំ:** ប្រើ \`SignInWithAppleButton\` របស់ SwiftUI ដែលងាយស្រួលប្រើបំផុត។
    `,
    solution: `
\`\`\`swift
import SwiftUI
import AuthenticationServices

class AuthViewModel: ObservableObject {
    @Published var isAuthenticated = false
    @Published var userIdentifier: String?
    
    init() {
        checkUserAuthenticationStatus()
    }
    
    private func checkUserAuthenticationStatus() {
        let provider = ASAuthorizationAppleIDProvider()
        provider.getCredentialState(forUserID: UserDefaults.standard.string(forKey: "userIdentifier") ?? "") { (credentialState, error) in
            DispatchQueue.main.async {
                switch credentialState {
                case .authorized:
                    self.isAuthenticated = true
                    self.userIdentifier = UserDefaults.standard.string(forKey: "userIdentifier")
                default:
                    self.isAuthenticated = false
                    self.userIdentifier = nil
                }
            }
        }
    }
    
    func saveUser(id: String) {
        UserDefaults.standard.set(id, forKey: "userIdentifier")
        self.userIdentifier = id
        self.isAuthenticated = true
    }
}

struct MainView: View {
    @EnvironmentObject var authViewModel: AuthViewModel
    
    var body: some View {
        if authViewModel.isAuthenticated {
            // View សម្រាប់អ្នកប្រើប្រាស់ដែលបាន Sign in
            Text("Welcome, \\(authViewModel.userIdentifier ?? "User")!")
        } else {
            // View សម្រាប់ Authentication
            AuthView()
        }
    }
}

struct AuthView: View {
    @EnvironmentObject var authViewModel: AuthViewModel
    
    var body: some View {
        VStack {
            Text("Please Sign In")
                .font(.largeTitle)
                .padding()
            
            SignInWithAppleButton(
                .continue,
                onRequest: { request in
                    request.requestedScopes = [.fullName, .email]
                },
                onCompletion: { result in
                    switch result {
                    case .success(let authResults):
                        if let appleIDCredential = authResults.credential as? ASAuthorizationAppleIDCredential {
                            authViewModel.saveUser(id: appleIDCredential.user)
                        }
                    case .failure(let error):
                        print("Authorization failed: \\(error.localizedDescription)")
                    }
                }
            )
            .frame(height: 50)
            .padding()
        }
    }
}

// នៅក្នុង App Main File (ឧ. YourApp.swift)
/*
 @main
 struct YourApp: App {
     @StateObject private var authViewModel = AuthViewModel()
 
     var body: some Scene {
         WindowGroup {
             MainView()
                 .environmentObject(authViewModel)
         }
     }
 }
 */
\`\`\`
`
  }
};

export default SwiftLesson8_1Content;