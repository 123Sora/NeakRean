import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson9_2Content: LessonContent = {
  title: 'UI Testing',
  objectives: [
    'យល់ដឹងពីគោលការណ៍របស់ UI Testing',
    'រៀនពីរបៀបចាប់ផ្តើម UI Test នៅក្នុង Xcode',
    'អនុវត្តការថត (Record) UI Test',
    'ស្គាល់ពីការប្រើប្រាស់ `XCUIApplication` និង `XCUIElement`',
    'យល់ដឹងពីរបៀបផ្ទៀងផ្ទាត់ (Assert) Elements នៅលើ UI'
  ],
  content: `
# UI Testing 🤖

---

**UI Testing** គឺជាដំណើរការនៃការសាកល្បង User Interface របស់កម្មវិធីរបស់អ្នក។ វាធ្វើត្រាប់តាម (Simulate) អន្តរកម្មរបស់អ្នកប្រើប្រាស់ដូចជាការ Tap, Swipe, និងការបញ្ចូល Text ។ គោលបំណងរបស់វាគឺដើម្បីធានាថា UI របស់អ្នកដំណើរការបានត្រឹមត្រូវនិងផ្តល់នូវបទពិសោធន៍ល្អដល់អ្នកប្រើប្រាស់។ Xcode ផ្តល់នូវ Framework មួយឈ្មោះ **XCUITest** ដែលជាផ្នែកមួយរបស់ XCTest Framework សម្រាប់ការធ្វើ UI Testing ។

## 1. ហេតុអ្វីត្រូវធ្វើ UI Testing?

-   **បទពិសោធន៍អ្នកប្រើប្រាស់:** ធានាថា Flow របស់ App របស់អ្នកដំណើរការបានត្រឹមត្រូវ។
-   **ការផ្លាស់ប្តូរ:** ជួយឱ្យអ្នកមានទំនុកចិត្តនៅពេលកែប្រែ UI ។
-   **ការបង្រួម Bug:** ចាប់បាន Bug ដែលទាក់ទងនឹង UI ដូចជា Button មិនដំណើរការ។

## 2. ការរៀបចំ UI Test Target

-   នៅពេលអ្នកបង្កើត Project ថ្មី អ្នកអាច Tick "Include UI Tests" ។
-   UI Test Target នឹងត្រូវបានបង្កើតជាមួយនឹង Class មួយដែលបន្តពី \`XCTestCase\`។

## 3. ការថត (Recording) UI Test

មុខងារដ៏មានប្រយោជន៍បំផុតមួយរបស់ XCUITest គឺការថត UI Test។
-   ចុចលើ \`UI Test\` Class របស់អ្នក។
-   ដាក់ Cursor នៅក្នុង Test Method ។
-   ចុច Button **Record** នៅខាងក្រោម Xcode ។
-   Xcode នឹងចាប់ផ្តើម App របស់អ្នកនៅក្នុង Simulator ហើយថតរាល់អន្តរកម្មរបស់អ្នក។
-   នៅពេលអ្នកចុច Stop, Xcode នឹងបង្កើត Code ដោយស្វ័យប្រវត្តិ។

\`\`\`swift
// ឧទាហរណ៍៖ UI Test ដែលត្រូវបានថត
import XCTest

final class YourAppUITests: XCTestCase {
    
    func testExample() throws {
        // UI tests must launch the application that they test.
        let app = XCUIApplication()
        app.launch()
        
        // Use recording to get started with UI testing.
        let textField = app.textFields["Username"]
        textField.tap()
        textField.typeText("testuser")
        
        let passwordField = app.secureTextFields["Password"]
        passwordField.tap()
        passwordField.typeText("password123")
        
        app.buttons["Login"].tap()
        
        // Assert
        XCTAssertTrue(app.staticTexts["Welcome!"].exists)
    }
}
\`\`\`
**ចំណាំ:** ដើម្បីឱ្យ Elements (Text Field, Button) ងាយស្រួល Access នៅក្នុង UI Test អ្នកគួរតែកំណត់ \`accessibilityIdentifier\` ។

\`\`\`swift
TextField("Username", text: $username)
    .accessibilityIdentifier("Username")
\`\`\`

## 4. \`XCUIElement\` និង \`XCUIApplication\`

-   **\`XCUIApplication\`:** តំណាងឱ្យ App របស់អ្នក។ វាតែងតែជា Starting Point របស់ UI Test ។
-   **\`XCUIElement\`:** តំណាងឱ្យ Element មួយនៅលើ UI ដូចជា Button, Text Field, ឬ Image ។ អ្នកអាចប្រើ Subscripts ដើម្បី Access Elements ដូចជា \`app.buttons["Login"]\` ។

## 5. ការផ្ទៀងផ្ទាត់ (Assertions)

-   **\`XCTAssertTrue(element.exists)\`:** ផ្ទៀងផ្ទាត់ថា Element មាននៅលើអេក្រង់។
-   **\`XCTAssertEqual(element.value as? String, "Hello")\`:** ផ្ទៀងផ្ទាត់តម្លៃរបស់ Element ។
-   **\`XCTAssertEqual(app.buttons.count, 5)\`:** ផ្ទៀងផ្ទាត់ចំនួន Elements ។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការផ្ទៀងផ្ទាត់ Navigation Flow</h3>
<p>យើងអាចផ្ទៀងផ្ទាត់ថា UI ផ្លាស់ប្តូរទៅ View ត្រឹមត្រូវបន្ទាប់ពីចុច Button។</p>
<pre><code class="language-swift">
import XCTest

final class NavUITests: XCTestCase {
    
    let app = XCUIApplication()
    
    override func setUpWithError() throws {
        continueAfterFailure = false
        app.launch()
    }
    
    func testNavigationToDetailView() throws {
        // Tap on a button to navigate
        app.buttons["Show Detail"].tap()
        
        // Assert that a new element on the detail screen exists
        let detailTitle = app.staticTexts["Detail View Title"]
        XCTAssertTrue(detailTitle.exists, "Navigation to detail view failed.")
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ UI Testing ធ្វើត្រាប់តាមអន្តរកម្មរបស់អ្វី?',
      options: [
        'Network Request',
        'Database Query',
        'អ្នកប្រើប្រាស់',
        'Unit Test'
      ],
      correct: 2,
      explanation: 'UI Testing ធ្វើត្រាប់តាមអន្តរកម្មរបស់អ្នកប្រើប្រាស់ដើម្បី Test App ទាំងមូល។'
    },
    {
      question: 'តើ Framework ណាដែលត្រូវបានប្រើសម្រាប់ការធ្វើ UI Testing?',
      options: [
        'XCUITest',
        'SwiftUI Test',
        'TestKit',
        'UITest'
      ],
      correct: 0,
      explanation: 'XCUITest គឺជា Framework របស់ Apple សម្រាប់ការធ្វើ UI Testing។'
    },
    {
      question: 'តើ `XCUIApplication` តំណាងឱ្យអ្វី?',
      options: [
        'Button មួយ',
        'Window មួយ',
        'App ទាំងមូល',
        'View មួយ'
      ],
      correct: 2,
      explanation: '`XCUIApplication` តំណាងឱ្យ App ទាំងមូលដែលត្រូវបាន Test ។'
    },
    {
      question: 'តើមុខងារ Record ក្នុង Xcode ប្រើសម្រាប់អ្វី?',
      options: [
        'ថតវីដេអូរបស់ App',
        'ថតសំឡេង',
        'បង្កើត UI Test Code ដោយស្វ័យប្រវត្តិ',
        'ថតរូប'
      ],
      correct: 2,
      explanation: 'មុខងារ Record អាចបង្កើត UI Test Code ដោយស្វ័យប្រវត្តិពីអន្តរកម្មរបស់អ្នកនៅក្នុង Simulator។'
    },
    {
      question: 'តើ `accessibilityIdentifier` ប្រើសម្រាប់អ្វីក្នុងការធ្វើ UI Test?',
      options: [
        'ដើម្បីធ្វើឱ្យ Element មានពណ៌',
        'ដើម្បីកំណត់អត្តសញ្ញាណឱ្យ Elements',
        'ដើម្បីធ្វើឱ្យ Element មានទំហំធំ',
        'ដើម្បីលាក់ Element'
      ],
      correct: 1,
      explanation: '`accessibilityIdentifier` គឺជាវិធីល្អបំផុតដើម្បីកំណត់អត្តសញ្ញាណឱ្យ Elements សម្រាប់ UI Test ។'
    },
    {
      question: 'តើ `app.buttons["Login"].tap()` ធ្វើអ្វី?',
      options: [
        'ស្វែងរក Button "Login" ហើយចុចលើវា',
        'បង្កើត Button មួយ',
        'លុប Button មួយ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'កូដនេះស្វែងរក Button ដែលមាន Label "Login" ហើយចុចលើវា។'
    },
    {
      question: 'តើ `XCTAssertTrue(element.exists)` ផ្ទៀងផ្ទាត់អ្វី?',
      options: [
        'តម្លៃរបស់ Element',
        'ប្រភេទរបស់ Element',
        'ថាតើ Element មាននៅលើអេក្រង់ឬអត់',
        'ថាតើ Element អាចចុចបានឬអត់'
      ],
      correct: 2,
      explanation: '`XCTAssertTrue(element.exists)` ផ្ទៀងផ្ទាត់ថា Element នោះមាននៅលើអេក្រង់។'
    },
    {
      question: 'តើការធ្វើ UI Test អាចចាប់ Bug ដូចជាអ្វី?',
      options: [
        'Logic Error',
        'ការគាំងរបស់ App',
        'Button មិនដំណើរការ',
        'កំហុសអក្ខរាវិរុទ្ធ'
      ],
      correct: 2,
      explanation: 'UI Test ល្អបំផុតសម្រាប់ការចាប់ Bug ដែលទាក់ទងនឹងអន្តរកម្មរបស់អ្នកប្រើប្រាស់ ដូចជា Button មិនដំណើរការ។'
    },
    {
      question: 'តើ `continueAfterFailure` ប្រើសម្រាប់អ្វី?',
      options: [
        'បន្តដំណើរការ Test សូម្បីតែមាន Failure ក៏ដោយ',
        'បញ្ឈប់ Test ប្រសិនបើមាន Failure',
        'រំលង Tests ទាំងអស់',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`continueAfterFailure = false` នឹងបញ្ឈប់ Test ប្រសិនបើមាន Failure កើតឡើង។'
    },
    {
      question: 'តើ UI Test ដំណើរការលឿនជាង Unit Test ទេ?',
      options: [
        'លឿនជាង',
        'យឺតជាង',
        'ល្បឿនដូចគ្នា',
        'វាអាស្រ័យលើចំនួន Elements'
      ],
      correct: 1,
      explanation: 'UI Test ដំណើរការយឺតជាង Unit Test ព្រោះវាត្រូវ Launch App ទាំងមូលនៅក្នុង Simulator ។'
    }
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដែលមាន \`TextField\` មួយនិង \`Button\` មួយ ហើយសរសេរ UI Test ដើម្បីពិនិត្យមើលវា។

**តម្រូវការ:**

1.  **App UI:**
    -   បង្កើត SwiftUI View មួយ។
    -   មាន \`TextField\` មួយ (ឧ. សម្រាប់បញ្ចូលឈ្មោះ) ។
    -   មាន \`Button\` មួយ។
    -   មាន \`Text\` View មួយដែលបង្ហាញ "Hello, [ឈ្មោះ]" បន្ទាប់ពីចុច Button ។

2.  **UI Test:**
    -   បង្កើត UI Test Target។
    -   ថត UI Test ដើម្បីធ្វើត្រាប់តាមជំហានទាំងនេះ៖
        1.  បញ្ចូលឈ្មោះទៅក្នុង \`TextField\` ។
        2.  ចុច \`Button\` ។
    -   បន្ថែម \`Assertion\` ដើម្បីផ្ទៀងផ្ទាត់ថា \`Text\` View ថ្មីបានបង្ហាញហើយមាន Content ត្រឹមត្រូវ។

**ការណែនាំ:** ប្រើ \`accessibilityIdentifier\` ដើម្បីកំណត់អត្តសញ្ញាណឱ្យ Elements ។
    `,
    solution: `
\`\`\`swift
// ContentView.swift
import SwiftUI

struct ContentView: View {
    @State private var name: String = ""
    @State private var greeting: String = ""
    
    var body: some View {
        VStack(spacing: 20) {
            TextField("Enter your name", text: $name)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()
                .accessibilityIdentifier("NameTextField")
            
            Button("Say Hello") {
                greeting = "Hello, \\(name)!"
            }
            .buttonStyle(.borderedProminent)
            .accessibilityIdentifier("SayHelloButton")
            
            if !greeting.isEmpty {
                Text(greeting)
                    .font(.title)
                    .padding()
                    .accessibilityIdentifier("GreetingText")
            }
        }
        .padding()
    }
}

// YourAppUITests.swift
import XCTest

final class YourAppUITests: XCTestCase {
    
    let app = XCUIApplication()
    
    override func setUpWithError() throws {
        continueAfterFailure = false
        app.launch()
    }
    
    func testSayHelloButton() throws {
        // Given
        let nameTextField = app.textFields["NameTextField"]
        let sayHelloButton = app.buttons["SayHelloButton"]
        
        // When
        nameTextField.tap()
        nameTextField.typeText("Sokha")
        sayHelloButton.tap()
        
        // Then
        let greetingText = app.staticTexts["GreetingText"]
        XCTAssertTrue(greetingText.exists, "Greeting text should exist after button tap.")
        XCTAssertEqual(greetingText.label, "Hello, Sokha!", "Greeting text should be correct.")
    }
}
\`\`\`
`
  }
};

export default SwiftLesson9_2Content;