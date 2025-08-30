import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson10_2Content: LessonContent = {
  title: 'Push Notifications',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Push Notifications និងតួនាទីរបស់វា',
    'រៀនពីរបៀបរៀបចំ Push Notifications នៅក្នុង Xcode',
    'អនុវត្តការស្នើសុំការអនុញ្ញាតពីអ្នកប្រើប្រាស់',
    'ស្គាល់ពីការចុះឈ្មោះ Device Token',
    'យល់ដឹងពីរបៀបផ្ញើ Notifications'
  ],
  content: `
# Push Notifications 🔔

---

**Push Notifications** គឺជាសារដែលត្រូវបានផ្ញើពី Server ទៅកាន់ App របស់អ្នកនៅលើ Device របស់អ្នកប្រើប្រាស់។ ពួកវាអនុញ្ញាតឱ្យ App របស់អ្នកជូនដំណឹងដល់អ្នកប្រើប្រាស់អំពីព្រឹត្តិការណ៍សំខាន់ៗ សូម្បីតែនៅពេល App មិនកំពុងដំណើរការក៏ដោយ។ Push Notifications មានសារៈសំខាន់ខ្លាំងសម្រាប់ការភ្ជាប់ទំនាក់ទំនងជាមួយអ្នកប្រើប្រាស់។

## 1. របៀបដំណើរការ

-   **App:** ស្នើសុំការអនុញ្ញាតពីអ្នកប្រើប្រាស់និងចុះឈ្មោះជាមួយ Apple Push Notification Service (APNs) ។
-   **APNs:** ផ្តល់ឱ្យ App នូវ Unique Device Token ។
-   **App:** ផ្ញើ Device Token ទៅកាន់ Server Backend របស់អ្នក។
-   **Server:** ផ្ញើសារ (Payload) ទៅកាន់ APNs ដោយប្រើ Device Token ។
-   **APNs:** ផ្ញើសារនោះទៅកាន់ App របស់អ្នកប្រើប្រាស់។

## 2. ការរៀបចំ Push Notifications

### ជំហានទី 1: បើក Push Notification Capability
នៅក្នុង Xcode, ទៅកាន់ Project Navigator -> Target -> Signing & Capabilities -> + Capability -> ជ្រើសរើស "Push Notifications" ។

### ជំហានទី 2: ស្នើសុំការអនុញ្ញាត
អ្នកត្រូវតែស្នើសុំការអនុញ្ញាតពីអ្នកប្រើប្រាស់មុនពេលផ្ញើ Notifications ។

\`\`\`swift
import UserNotifications

func requestNotificationAuthorization() {
    UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { (granted, error) in
        if granted {
            print("Authorization granted!")
            DispatchQueue.main.async {
                UIApplication.shared.registerForRemoteNotifications()
            }
        } else {
            print("Authorization denied.")
        }
    }
}
\`\`\`

### ជំហានទី 3: ចុះឈ្មោះ Device Token
បន្ទាប់ពីអ្នកប្រើប្រាស់ផ្តល់ការអនុញ្ញាត អ្នកត្រូវចុះឈ្មោះ Device Token ។

\`\`\`swift
import UIKit

// នៅក្នុង AppDelegate
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    let tokenString = deviceToken.map { String(format: "%02.2hhx", $0) }.joined()
    print("Device Token: \\(tokenString)")
    
    // ផ្ញើ tokenString ទៅកាន់ Server របស់អ្នក
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    print("Failed to register for remote notifications: \\(error.localizedDescription)")
}
\`\`\`

## 3. ការទទួល Notifications

អ្នកត្រូវអនុវត្ត \`UNUserNotificationCenterDelegate\` ដើម្បីគ្រប់គ្រង Notifications ។

\`\`\`swift
// នៅក្នុង AppDelegate
class AppDelegate: NSObject, UIApplicationDelegate, UNUserNotificationCenterDelegate {
    
    // គ្រប់គ្រង Notification នៅពេល App កំពុងដំណើរការ (Foreground)
    func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        completionHandler([.banner, .sound, .badge])
    }
    
    // គ្រប់គ្រង Notification នៅពេលអ្នកប្រើប្រាស់ចុចលើវា
    func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
        print("User tapped on the notification.")
        let userInfo = response.notification.request.content.userInfo
        print(userInfo)
        
        completionHandler()
    }
}
\`\`\`
**ចំណាំ:** នៅក្នុង SceneDelegate/AppDelegate អ្នកត្រូវតែកំណត់ delegate ដូចជា \`UNUserNotificationCenter.current().delegate = self\` ។

## 4. ការផ្ញើ Notifications

ការផ្ញើ Push Notifications ត្រូវធ្វើពី Server Backend របស់អ្នក។ Payloads ត្រូវបានផ្ញើជា JSON Object ទៅកាន់ APNs ។

\`\`\`json
{
    "aps" : {
        "alert" : {
            "title" : "ការជូនដំណឹងថ្មី",
            "body" : "អ្នកបានទទួលសារថ្មីមួយ។"
        },
        "badge" : 1,
        "sound" : "default"
    },
    "customData" : "តម្លៃបន្ថែម"
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការផ្ញើ Local Notifications</h3>
<p>Local Notifications មិនត្រូវការ Server ទេ គឺត្រូវបានបង្កើតនិងបង្ហាញនៅក្នុង App របស់អ្នក។</p>
<pre><code class="language-swift">
import UserNotifications

func scheduleLocalNotification() {
    let content = UNMutableNotificationContent()
    content.title = "Reminder"
    content.body = "You have a new task to complete."
    content.sound = .default
    
    // បង្ហាញ Notification បន្ទាប់ពី 5 វិនាទី
    let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 5, repeats: false)
    
    let request = UNNotificationRequest(identifier: UUID().uuidString, content: content, trigger: trigger)
    
    UNUserNotificationCenter.current().add(request) { error in
        if let error = error {
            print("Error scheduling notification: \\(error.localizedDescription)")
        } else {
            print("Local notification scheduled.")
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Push Notifications ត្រូវបានផ្ញើពីណា?',
      options: [
        'ពី Device ទៅ Device',
        'ពី Server ទៅ Device',
        'ពី CloudKit ទៅ Device',
        'ពី iCloud ទៅ Device'
      ],
      correct: 1,
      explanation: 'Push Notifications ត្រូវបានផ្ញើពី Server Backend ទៅកាន់ App របស់អ្នកនៅលើ Device ។'
    },
    {
      question: 'តើ `APNs` តំណាងឱ្យអ្វី?',
      options: [
        'Apple Programming Network',
        'Apple Push Notification Service',
        'Apple Project Notifications',
        'Apple Public Notifications'
      ],
      correct: 1,
      explanation: 'APNs តំណាងឱ្យ Apple Push Notification Service ដែលជា Service របស់ Apple សម្រាប់ផ្ញើ Notifications ។'
    },
    {
      question: 'តើ `Device Token` គឺជាអ្វី?',
      options: [
        'Unique ID របស់ Device សម្រាប់ទទួល Notifications',
        'លេខសម្ងាត់របស់ Apple ID',
        'ID របស់ App',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Device Token គឺជា Unique Identifier ដែលត្រូវបានបង្កើតដោយ APNs សម្រាប់ App និង Device នីមួយៗ។'
    },
    {
      question: 'តើអ្នកត្រូវធ្វើអ្វីមុនពេលចុះឈ្មោះ Device Token?',
      options: [
        'ទិញ Subscription',
        'ស្នើសុំការអនុញ្ញាតពីអ្នកប្រើប្រាស់',
        'បិទ App',
        'បើក Camera'
      ],
      correct: 1,
      explanation: 'អ្នកត្រូវតែស្នើសុំការអនុញ្ញាតពីអ្នកប្រើប្រាស់មុនពេលចុះឈ្មោះ Device Token ។'
    },
    {
      question: 'តើ `UNUserNotificationCenterDelegate` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Network',
        'គ្រប់គ្រង UI',
        'គ្រប់គ្រង Behavior របស់ Notifications',
        'គ្រប់គ្រង Database'
      ],
      correct: 2,
      explanation: '`UNUserNotificationCenterDelegate` ត្រូវបានប្រើដើម្បីគ្រប់គ្រង Behavior របស់ Notifications នៅពេល App កំពុងដំណើរការ។'
    },
    {
      question: 'តើ Local Notification ត្រូវការ Server ដែរឬទេ?',
      options: [
        'ត្រូវការ',
        'មិនត្រូវការទេ',
        'ត្រូវការតែពេល App បិទ',
        'ត្រូវការតែពេល Internet Connection មាន'
      ],
      correct: 1,
      explanation: 'Local Notifications ត្រូវបានបង្កើតនិងបង្ហាញនៅក្នុង App ខ្លួនវា ដូច្នេះមិនត្រូវការ Server ទេ។'
    },
    {
      question: 'តើ `UNNotificationPresentationOptions` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ថា Notification បង្ហាញនៅពេលណា',
        'កំណត់ថា Notification បង្ហាញរបៀបណា',
        'កំណត់ Title របស់ Notification',
        'កំណត់ Body របស់ Notification'
      ],
      correct: 1,
      explanation: '`UNNotificationPresentationOptions` កំណត់ពីរបៀបដែល Notification ត្រូវបានបង្ហាញ (ឧ. Banner, Sound) ។'
    },
    {
      question: 'តើ Payload របស់ Push Notification គឺជាអ្វី?',
      options: [
        'Video File',
        'Audio File',
        'JSON Object ដែលមានព័ត៌មាន Notification',
        'Text File'
      ],
      correct: 2,
      explanation: 'Payload គឺជា JSON Object ដែលមានព័ត៌មានដែលត្រូវបង្ហាញក្នុង Notification ។'
    },
    {
      question: 'តើការរៀបចំ Push Notifications ត្រូវធ្វើនៅក្នុង Xcode ប៉ុណ្ណោះឬ?',
      options: [
        'ត្រូវតែនៅក្នុង Xcode',
        'ត្រូវតែនៅក្នុង Apple Developer Portal',
        'ត្រូវធ្វើនៅក្នុងទាំងពីរ',
        'មិនចាំបាច់ធ្វើទេ'
      ],
      correct: 2,
      explanation: 'ការរៀបចំត្រូវធ្វើនៅក្នុង Xcode (Capability) និងនៅក្នុង Apple Developer Portal (Certificate) ។'
    },
    {
      question: 'តើ Push Notifications អាចជួយឱ្យ App របស់អ្នកមានអត្ថប្រយោជន៍អ្វីខ្លះ?',
      options: [
        'បង្កើន User Engagement',
        'ផ្តល់ព័ត៌មានសំខាន់ៗដល់អ្នកប្រើប្រាស់',
        'អាចប្រើដើម្បី Reminder',
        'គ្រប់ចម្លើយទាំងអស់គឺត្រឹមត្រូវ'
      ],
      correct: 3,
      explanation: 'Push Notifications អាចប្រើសម្រាប់គោលបំណងផ្សេងៗគ្នាជាច្រើន។'
    }
  ],
  lab: {
    task: `
អនុវត្តការស្នើសុំការអនុញ្ញាតនិងការចុះឈ្មោះ Device Token សម្រាប់ Push Notifications ។

**តម្រូវការ:**

1.  **ការរៀបចំ:**
    -   បង្កើត Project SwiftUI ថ្មីមួយ។
    -   បើក Push Notifications Capability នៅក្នុង Xcode ។

2.  **UI:**
    -   បង្កើត Button មួយដែលមាន Label "Request Notification Permission" ។
    -   ប្រើ \`Text\` View ដើម្បីបង្ហាញស្ថានភាព (ឧ. "Permission Granted" ឬ "Permission Denied") ។

3.  **Logic:**
    -   នៅពេលចុចលើ Button, ហៅ Function ដើម្បីស្នើសុំការអនុញ្ញាត។
    -   ប្រសិនបើការអនុញ្ញាតត្រូវបានផ្តល់ឱ្យ ត្រូវចុះឈ្មោះសម្រាប់ Remote Notifications ។
    -   នៅក្នុង \`AppDelegate\` (ឬ \`SceneDelegate\`), ត្រូវ Implement \`didRegisterForRemoteNotificationsWithDeviceToken\` និង \`didFailToRegisterForRemoteNotificationsWithError\` ។

**ការណែនាំ:** អ្នកត្រូវតែមាន Physical Device សម្រាប់ Test Push Notifications ។ Simulator មិនដំណើរការទេ។
    `,
    solution: `
\`\`\`swift
// AppDelegate.swift
import UIKit
import UserNotifications

// នេះគឺជា Class ដែលត្រូវបន្ថែមនៅក្នុង App Main File (YourApp.swift)
class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        // Set the delegate for UserNotifications
        UNUserNotificationCenter.current().delegate = self
        return true
    }
    
    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        let tokenString = deviceToken.map { String(format: "%02.2hhx", $0) }.joined()
        print("Device Token: \\(tokenString)")
        // You would send this token to your server
    }
    
    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        print("Failed to register for remote notifications: \\(error.localizedDescription)")
    }
}

extension AppDelegate: UNUserNotificationCenterDelegate {
    func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        completionHandler([.banner, .sound, .badge])
    }
}

// ContentView.swift
import SwiftUI

struct PushNotificationView: View {
    @State private var permissionStatus: String = "Not yet requested"
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Push Notification Lab")
                .font(.largeTitle)
            
            Button("Request Notification Permission") {
                requestAuthorization()
            }
            .buttonStyle(.borderedProminent)
            
            Text("Permission Status: \\(permissionStatus)")
                .padding()
        }
    }
    
    func requestAuthorization() {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { granted, error in
            DispatchQueue.main.async {
                if granted {
                    self.permissionStatus = "Granted"
                    UIApplication.shared.registerForRemoteNotifications()
                } else {
                    self.permissionStatus = "Denied"
                }
            }
        }
    }
}

// YourApp.swift
/*
 @main
 struct YourApp: App {
     @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
     
     var body: some Scene {
         WindowGroup {
             PushNotificationView()
         }
     }
 }
 */
\`\`\`
`
  }
};

export default SwiftLesson10_2Content;