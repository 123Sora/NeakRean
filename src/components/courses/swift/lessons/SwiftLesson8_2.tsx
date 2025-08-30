import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson8_2Content: LessonContent = {
  title: 'Firebase Authentication',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Firebase Authentication',
    'រៀនពីរបៀបរៀបចំ Firebase Project សម្រាប់ iOS',
    'អនុវត្តការ Sign Up និង Log In ដោយប្រើ Email និង Password',
    'ស្គាល់ពីការប្រើប្រាស់ Social Logins (Google, Facebook) ជាមួយ Firebase',
    'យល់ដឹងពីការគ្រប់គ្រង User State នៅក្នុង SwiftUI'
  ],
  content: `
# Firebase Authentication 🔥

---

**Firebase Authentication** គឺជា Service ដ៏មានឥទ្ធិពលដែលផ្តល់ដោយ Google Firebase។ វាផ្តល់នូវ Solution ពេញលេញសម្រាប់ការគ្រប់គ្រងអ្នកប្រើប្រាស់ (User) នៅក្នុង App របស់អ្នក។ វាគាំទ្រ Authentication Method ជាច្រើនដូចជា Email/Password, Social Logins (Google, Facebook, Twitter), Phone Number, និង Anonymous Sign-in ។

## 1. ហេតុអ្វីត្រូវប្រើ Firebase Auth?

-   **ងាយស្រួលប្រើ:** មាន SDK ដែលងាយស្រួលអនុវត្ត។
-   **គ្រប់ជ្រុងជ្រោយ:** គាំទ្រ Authentication Providers ជាច្រើន។
-   **មានសុវត្ថិភាព:** គ្រប់គ្រង User Data ដោយសុវត្ថិភាពនៅលើ Server របស់ Google។
-   **Cross-platform:** អាចប្រើបានជាមួយ iOS, Android, Web និងផ្សេងៗទៀត។

## 2. ការរៀបចំគម្រោង

### ជំហានទី 1: រៀបចំ Firebase Project
-   បង្កើត Project ថ្មីនៅក្នុង Firebase Console។
-   ចុះឈ្មោះ App របស់អ្នកជាមួយ Firebase ដោយបញ្ចូល Bundle ID របស់ App របស់អ្នក។
-   ទាញយក \`GoogleService-Info.plist\` file ហើយដាក់វានៅក្នុង Project របស់អ្នក។

### ជំហានទី 2: ដំឡើង Firebase SDK
ប្រើ Swift Package Manager (SPM) ឬ Cocoapods ដើម្បីដំឡើង \`Firebase/Auth\`។

### ជំហានទី 3: បង្កើត Authentication Provider
នៅក្នុង Firebase Console, ទៅកាន់ Authentication -> Sign-in Method -> បើកដំណើរការ Email/Password ឬ Providers ផ្សេងទៀត។

## 3. ការអនុវត្ត Code (Email & Password)

\`\`\`swift
// នៅក្នុង App Main File (ឧ. YourApp.swift)
import FirebaseCore
import SwiftUI

class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        FirebaseApp.configure()
        return true
    }
}

@main
struct YourApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var delegate
    
    var body: some Scene {
        WindowGroup {
            AuthView() // View សម្រាប់ Login/Register
        }
    }
}

// ViewModel សម្រាប់គ្រប់គ្រង Authentication State
import FirebaseAuth

class AuthViewModel: ObservableObject {
    @Published var isAuthenticated = false
    @Published var errorMessage: String?
    
    private var authHandler: AuthStateDidChangeListenerHandle?
    
    init() {
        authHandler = Auth.auth().addStateDidChangeListener { auth, user in
            if user != nil {
                self.isAuthenticated = true
            } else {
                self.isAuthenticated = false
            }
        }
    }
    
    // Log In
    func login(email: String, password: String) {
        Auth.auth().signIn(withEmail: email, password: password) { result, error in
            if let error = error {
                self.errorMessage = error.localizedDescription
            }
        }
    }
    
    // Sign Up
    func register(email: String, password: String) {
        Auth.auth().createUser(withEmail: email, password: password) { result, error in
            if let error = error {
                self.errorMessage = error.localizedDescription
            }
        }
    }
    
    // Log Out
    func logout() {
        do {
            try Auth.auth().signOut()
        } catch {
            self.errorMessage = error.localizedDescription
        }
    }
    
    deinit {
        if let handler = authHandler {
            Auth.auth().removeStateDidChangeListener(handler)
        }
    }
}
\`\`\`

## 4. UI នៅក្នុង SwiftUI

\`\`\`swift
struct AuthView: View {
    @StateObject private var viewModel = AuthViewModel()
    @State private var email = ""
    @State private var password = ""

    var body: some View {
        if viewModel.isAuthenticated {
            // Welcome View
            VStack {
                Text("Welcome!")
                Button("Log Out") {
                    viewModel.logout()
                }
            }
        } else {
            // Login/Register View
            VStack {
                TextField("Email", text: $email)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                SecureField("Password", text: $password)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                
                Button("Log In") {
                    viewModel.login(email: email, password: password)
                }
                Button("Register") {
                    viewModel.register(email: email, password: password)
                }
                
                if let errorMessage = viewModel.errorMessage {
                    Text(errorMessage).foregroundColor(.red)
                }
            }
            .padding()
        }
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Google Sign-In ជាមួយ Firebase</h3>
<p>ការប្រើ Social Login ជាមួយ Firebase ត្រូវការការរៀបចំបន្ថែមក្នុង Firebase Console។</p>
<pre><code class="language-swift">
// ត្រូវដំឡើង Firebase/GoogleSignIn ផងដែរ
import GoogleSignIn
import Firebase

// នៅក្នុង AuthView
func handleGoogleSignIn() {
    guard let clientID = FirebaseApp.app()?.options.clientID else { return }
    let config = GIDConfiguration(clientID: clientID)
    
    GIDSignIn.sharedInstance.signIn(with: config, presenting: getRootViewController()) { user, error in
        guard let authentication = user?.authentication, let idToken = authentication.idToken else { return }
        
        let credential = GoogleAuthProvider.credential(withIDToken: idToken, accessToken: authentication.accessToken)
        
        Auth.auth().signIn(with: credential) { authResult, error in
            if let error = error {
                self.viewModel.errorMessage = error.localizedDescription
            }
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `FirebaseApp.configure()` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Authentication',
        'ចាប់ផ្តើម Firebase SDK',
        'ទាញយកទិន្នន័យពី Database',
        'ធ្វើ Animation'
      ],
      correct: 1,
      explanation: '`FirebaseApp.configure()` ត្រូវបានប្រើដើម្បីចាប់ផ្តើម Firebase SDK នៅពេល App ចាប់ផ្តើម។'
    },
    {
      question: 'តើ `Auth.auth().addStateDidChangeListener` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីស្តាប់ការផ្លាស់ប្តូរស្ថានភាព Authentication',
        'ដើម្បីបង្កើត User ថ្មី',
        'ដើម្បី Log Out',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`addStateDidChangeListener` ផ្តល់នូវការស្តាប់ការផ្លាស់ប្តូរស្ថានភាព Login/Logout របស់ User។'
    },
    {
      question: 'តើ `GoogleService-Info.plist` file មានព័ត៌មានអ្វីខ្លះ?',
      options: [
        'API Key, Database URL, និង Project ID',
        'User\'s credit card information',
        'App\'s icon',
        'User\'s name'
      ],
      correct: 0,
      explanation: 'File នេះមានព័ត៌មានដែលត្រូវការដើម្បីតភ្ជាប់ App របស់អ្នកទៅកាន់ Firebase Project។'
    },
    {
      question: 'តើ `createUser(withEmail:password:)` ប្រើសម្រាប់អ្វី?',
      options: [
        'Log In',
        'Log Out',
        'បង្កើត User ថ្មី',
        'Reset Password'
      ],
      correct: 2,
      explanation: '`createUser` Method ត្រូវបានប្រើដើម្បីបង្កើត User ថ្មីនៅក្នុង Firebase Authentication ។'
    },
    {
      question: 'តើ Firebase Authentication ផ្តល់នូវអ្វីខ្លះ?',
      options: [
        'Authentication Providers ច្រើនប្រភេទ',
        'Database',
        'Cloud Functions',
        'គ្រប់ចម្លើយទាំងអស់គឺត្រឹមត្រូវ'
      ],
      correct: 3,
      explanation: 'Firebase ផ្តល់នូវ Service ជាច្រើនក្រៅពី Authentication ។'
    },
    {
      question: 'តើ `SecureField` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញ Email',
        'បង្ហាញ Password ដោយលាក់អក្សរ',
        'បង្ហាញឈ្មោះអ្នកប្រើប្រាស់',
        'បង្ហាញលេខទូរស័ព្ទ'
      ],
      correct: 1,
      explanation: '`SecureField` គឺជា View សម្រាប់បញ្ចូល Text ដោយលាក់អក្សរ។'
    },
    {
      question: 'តើ `Auth.auth().signOut()` អាចបោះ Error ទេ?',
      options: [
        'បោះ Error',
        'មិនបោះ Error ទេ',
        'បោះ Error តែពេល Network មិនល្អ',
        'បោះ Error តែនៅលើ Simulator'
      ],
      correct: 0,
      explanation: '`signOut()` Method អាចបោះ Error ដូច្នេះវាត្រូវតែនៅក្នុង `do-try-catch` Block។'
    },
    {
      question: 'តើ `Firebase` គឺជា Service របស់ក្រុមហ៊ុនណា?',
      options: [
        'Apple',
        'Google',
        'Microsoft',
        'Amazon'
      ],
      correct: 1,
      explanation: 'Firebase គឺជា Service Platform ដែលផ្តល់ដោយ Google។'
    },
    {
      question: 'តើ `AuthStateDidChangeListener` ត្រូវបានហៅនៅពេលណា?',
      options: [
        'នៅពេល App ចាប់ផ្តើម',
        'នៅពេល User Sign In',
        'នៅពេល User Sign Out',
        'គ្រប់ចម្លើយទាំងអស់គឺត្រឹមត្រូវ'
      ],
      correct: 3,
      explanation: 'Listener នេះត្រូវបានហៅនៅពេល App ចាប់ផ្តើមនិងនៅពេលណាដែលស្ថានភាព Authentication ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Firebase Auth មានមុខងារសម្រាប់ Anonymous Sign-in ទេ?',
      options: [
        'គ្មានទេ',
        'មាន',
        'មានតែសម្រាប់ Account ដែលបានបង់លុយ',
        'មានតែសម្រាប់ iOS'
      ],
      correct: 1,
      explanation: 'Firebase Auth គាំទ្រ Anonymous Sign-in ដែលអនុញ្ញាតឱ្យ User ប្រើ App ដោយមិនចាំបាច់ចុះឈ្មោះ។'
    }
  ],
  lab: {
    task: `
អនុវត្តការ Log In និង Log Out ដោយប្រើ Firebase Email/Password Authentication ។

**តម្រូវការ:**

1.  **Firebase Project:**
    -   បង្កើត Project ថ្មីនៅក្នុង Firebase Console។
    -   បើក Email/Password Sign-in Provider។
    -   ដំឡើង Firebase SDK នៅក្នុង Project របស់អ្នក។

2.  **Authentication UI:**
    -   បង្កើត UI សម្រាប់ Log In (Email និង Password) និង Button សម្រាប់ Log In និង Log Out។

3.  **Authentication Logic:**
    -   ប្រើ \`AuthViewModel\` ដើម្បីគ្រប់គ្រង Authentication state ។
    -   នៅពេលចុចលើ Log In Button, ហៅ \`viewModel.login()\`។
    -   នៅពេលចុចលើ Log Out Button, ហៅ \`viewModel.logout()\`។

4.  **State Management:**
    -   ប្រើ \`@Published\` Property នៅក្នុង ViewModel ដើម្បីធ្វើបច្ចុប្បន្នភាព UI នៅពេល User Sign In ឬ Sign Out។

**ការណែនាំ:** ត្រូវប្រាកដថាអ្នកបានដាក់ \`GoogleService-Info.plist\` file នៅក្នុង Project របស់អ្នក។
    `,
    solution: `
\`\`\`swift
// កូដសម្រាប់ App Main File (YourApp.swift) និង ViewModel គឺដូចទៅនឹង Example ខាងលើ។

// នេះគឺជា UI ពេញលេញសម្រាប់ AuthView
struct AuthView: View {
    @StateObject private var viewModel = AuthViewModel()
    @State private var email = ""
    @State private var password = ""
    @State private var isLoginView = true

    var body: some View {
        if viewModel.isAuthenticated {
            VStack {
                Text("Welcome! Your email is \\(Auth.auth().currentUser?.email ?? "N/A")")
                    .font(.title)
                    .multilineTextAlignment(.center)
                    .padding()
                Button("Log Out") {
                    viewModel.logout()
                }
                .buttonStyle(.borderedProminent)
            }
        } else {
            VStack {
                Text(isLoginView ? "Log In" : "Register")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                
                TextField("Email", text: $email)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .keyboardType(.emailAddress)
                    .autocapitalization(.none)
                
                SecureField("Password", text: $password)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                
                if isLoginView {
                    Button("Log In") {
                        viewModel.login(email: email, password: password)
                    }
                    .buttonStyle(.borderedProminent)
                } else {
                    Button("Register") {
                        viewModel.register(email: email, password: password)
                    }
                    .buttonStyle(.borderedProminent)
                }
                
                Button(isLoginView ? "Need an account? Register" : "Already have an account? Log In") {
                    isLoginView.toggle()
                }
                .padding(.top, 10)
                
                if let errorMessage = viewModel.errorMessage {
                    Text(errorMessage)
                        .foregroundColor(.red)
                        .multilineTextAlignment(.center)
                }
            }
            .padding()
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson8_2Content;