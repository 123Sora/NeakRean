import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson9_1Content: LessonContent = {
  title: 'Unit Testing',
  objectives: [
    'យល់ដឹងពីគោលការណ៍របស់ Unit Testing',
    'រៀនពីរបៀបរៀបចំ Test Target នៅក្នុង Xcode',
    'អនុវត្តការសរសេរ Test Case ដោយប្រើ XCTest',
    'ស្គាល់ពីការប្រើប្រាស់ `XCTAssert` Methods',
    'យល់ដឹងពីសារៈសំខាន់នៃការ Testing'
  ],
  content: `
# Unit Testing 🧪

---

**Unit Testing** គឺជាដំណើរការនៃការសាកល្បងផ្នែកតូចបំផុតរបស់ Code របស់អ្នក ដូចជា Functions, Methods, ឬ Classes ដាច់ដោយឡែកពីគ្នា។ គោលបំណងរបស់វាគឺដើម្បីធានាថាផ្នែកនីមួយៗនៃ Code របស់អ្នកដំណើរការបានត្រឹមត្រូវនិងតាមការរំពឹងទុក។ Xcode ផ្តល់នូវ Framework មួយឈ្មោះ **XCTest** ដែលជា Standard Framework សម្រាប់សរសេរ Tests នៅក្នុង Swift ។

## 1. ហេតុអ្វីត្រូវធ្វើ Unit Testing?

-   **គុណភាព:** ធានាថា Code របស់អ្នកមានគុណភាពល្អនិងគ្មាន Bug ។
-   **ការផ្លាស់ប្តូរ:** អនុញ្ញាតឱ្យអ្នកកែប្រែ Code ដោយមានទំនុកចិត្ត ដោយដឹងថា Tests នឹងចាប់បានបញ្ហាណាមួយ។
-   **ការរចនា:** បង្ខំឱ្យអ្នកសរសេរ Code ដែលងាយស្រួលធ្វើ Test (Testable Code) ដែលនាំឱ្យមានការរចនាល្អ។
-   **ការកាត់បន្ថយ Bug:** ចាប់បាន Bug មុនពេលវាទៅដល់អ្នកប្រើប្រាស់។

## 2. ការរៀបចំ Unit Test Target

នៅពេលអ្នកបង្កើត Project ថ្មីនៅក្នុង Xcode, អ្នកអាច Tick "Include Tests" ដើម្បីបង្កើត Test Target ដោយស្វ័យប្រវត្តិ។

-   **Test Navigator:** នៅក្នុង Xcode, អ្នកអាចចូលទៅកាន់ Test Navigator (រូបដូចជាដបទឹក) ដើម្បីមើលនិងដំណើរការ Tests របស់អ្នក។

## 3. ការសរសេរ Test Case

**Test Case** គឺជា Subclass របស់ \`XCTestCase\` ដែលមាន Test Methods សម្រាប់ Test Code ជាក់លាក់។
-   **Test Method:** គឺជា Function ដែលមានឈ្មោះចាប់ផ្តើមដោយ \`test\` (ឧ. \`testAddNumbers()\`)។

\`\`\`swift
import XCTest
@testable import YourApp

class CalculatorTests: XCTestCase {

    var calculator: Calculator! // ប្រើ Optional for setup

    // setup() ត្រូវបានហៅមុនពេល Test method នីមួយៗ
    override func setUpWithError() throws {
        calculator = Calculator()
    }

    // tearDown() ត្រូវបានហៅបន្ទាប់ពី Test method នីមួយៗ
    override func tearDownWithError() throws {
        calculator = nil
    }

    // ឧទាហរណ៍៖ Test method
    func testAddNumbers() throws {
        // 1. Given (រៀបចំ)
        let num1 = 5
        let num2 = 3
        
        // 2. When (ដំណើរការ)
        let result = calculator.add(num1, to: num2)
        
        // 3. Then (ផ្ទៀងផ្ទាត់)
        XCTAssertEqual(result, 8, "ការបូកលេខមិនត្រឹមត្រូវ")
    }
    
    func testSubtractNumbers() throws {
        let result = calculator.subtract(10, from: 4)
        XCTAssertEqual(result, 6)
    }
}
\`\`\`
**ចំណាំ:** នៅក្នុង Code ខាងលើ \`Calculator\` Class ត្រូវបានសន្មត់ថានៅក្នុង \`YourApp\` ។ ដើម្បីអាច Access វាបាន យើងប្រើ \`@testable import YourApp\`។

## 4. \`XCTAssert\` Methods សំខាន់ៗ

-   **\`XCTAssertEqual(value1, value2)\`:** ផ្ទៀងផ្ទាត់ថា Values ទាំងពីរស្មើគ្នា។
-   **\`XCTAssertNotEqual(value1, value2)\`:** ផ្ទៀងផ្ទាត់ថា Values ទាំងពីរមិនស្មើគ្នា។
-   **\`XCTAssertTrue(expression)\`:** ផ្ទៀងផ្ទាត់ថា Expression ជា \`true\`។
-   **\`XCTAssertFalse(expression)\`:** ផ្ទៀងផ្ទាត់ថា Expression ជា \`false\`។
-   **\`XCTAssertNil(expression)\`:** ផ្ទៀងផ្ទាត់ថា Value ជា \`nil\`។
-   **\`XCTAssertNotNil(expression)\`:** ផ្ទៀងផ្ទាត់ថា Value មិនមែនជា \`nil\`។
-   **\`XCTFail()\`:** បង្ខំឱ្យ Test មិនជោគជ័យ។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការ Test Asynchronous Code</h3>
<p>ការ Test Code ដែលមាន Asynchronous Operations (ឧ. Network Calls) ត្រូវការការរៀបចំបន្ថែមដោយប្រើ \`XCTestExpectation\`.</p>
<pre><code class="language-swift">
import XCTest
@testable import YourApp

class NetworkTests: XCTestCase {
    func testFetchUserData() {
        // Given
        let expectation = expectation(description: "Fetch user data successfully")
        let networkService = NetworkService() // សន្មតថាអ្នកមាន NetworkService class
        
        // When
        networkService.fetchUser { user in
            // Then
            XCTAssertNotNil(user, "User data should not be nil")
            XCTAssertEqual(user?.name, "John Doe")
            expectation.fulfill()
        }
        
        // រង់ចាំ Expectation រហូតដល់ 5 វិនាទី
        waitForExpectations(timeout: 5.0, handler: nil)
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Unit Testing ផ្តោតលើការ Test ផ្នែកណាខ្លះរបស់ Code?',
      options: [
        'User Interface',
        'ផ្នែកតូចបំផុត (Functions, Methods)',
        'Database',
        'Application ទាំងមូល'
      ],
      correct: 1,
      explanation: 'Unit Testing ផ្តោតលើការ Test ផ្នែកតូចៗរបស់ Code ដាច់ដោយឡែកពីគ្នា។'
    },
    {
      question: 'តើ Framework ឈ្មោះអ្វីដែល Apple ផ្តល់ឱ្យសម្រាប់ការ Testing?',
      options: [
        'SwiftTest',
        'XCTest',
        'XcodeTest',
        'UnitTest'
      ],
      correct: 1,
      explanation: 'XCTest គឺជា Standard Framework របស់ Apple សម្រាប់ការ Testing។'
    },
    {
      question: 'តើ `Test Method` ត្រូវតែចាប់ផ្តើមដោយពាក្យអ្វី?',
      options: [
        'test',
        'validate',
        'run',
        'check'
      ],
      correct: 0,
      explanation: 'Test Method ត្រូវតែមានឈ្មោះចាប់ផ្តើមដោយពាក្យ `test`។'
    },
    {
      question: 'តើ `XCTAssertEqual(a, b)` ប្រើសម្រាប់អ្វី?',
      options: [
        'ពិនិត្យមើលថាតើ `a` ធំជាង `b` ឬអត់',
        'ពិនិត្យមើលថាតើ `a` ស្មើនឹង `b` ឬអត់',
        'ពិនិត្យមើលថាតើ `a` និង `b` ជា Type ដូចគ្នា ឬអត់',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`XCTAssertEqual` ប្រើសម្រាប់ផ្ទៀងផ្ទាត់ថា Values ទាំងពីរស្មើគ្នា។'
    },
    {
      question: 'តើ `setUpWithError()` Method ត្រូវបានហៅនៅពេលណា?',
      options: [
        'នៅពេល Test មិនជោគជ័យ',
        'មុនពេល Test method នីមួយៗ',
        'បន្ទាប់ពី Test method នីមួយៗ',
        'នៅពេល Test Case ចាប់ផ្តើម'
      ],
      correct: 1,
      explanation: '`setUpWithError()` ត្រូវបានហៅមុនពេល Test method នីមួយៗចាប់ផ្តើម។'
    },
    {
      question: 'តើ `tearDownWithError()` Method ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីរៀបចំ Objects',
        'ដើម្បីសម្អាត Objects បន្ទាប់ពី Test',
        'ដើម្បីដំណើរការ Test',
        'ដើម្បីបង្ហាញ Error'
      ],
      correct: 1,
      explanation: '`tearDownWithError()` ប្រើសម្រាប់សម្អាត Resources បន្ទាប់ពី Test method បញ្ចប់។'
    },
    {
      question: 'តើ `XCTFail()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីបង្ខំឱ្យ Test ជោគជ័យ',
        'ដើម្បីបង្ខំឱ្យ Test មិនជោគជ័យ',
        'ដើម្បីរំលង Test',
        'ដើម្បីចាប់ Error'
      ],
      correct: 1,
      explanation: '`XCTFail()` ត្រូវបានប្រើដើម្បីបង្ខំឱ្យ Test មិនជោគជ័យ។'
    },
    {
      question: 'តើ `expectation.fulfill()` ប្រើសម្រាប់អ្វីនៅក្នុង Asynchronous Test?',
      options: [
        'ដើម្បីបញ្ឈប់ Test',
        'ដើម្បីប្រាប់ Test ថា Asynchronous Operation បានបញ្ចប់',
        'ដើម្បីចាប់ផ្តើម Test',
        'ដើម្បីបង្ហាញ Error'
      ],
      correct: 1,
      explanation: '`expectation.fulfill()` ត្រូវបានហៅនៅពេល Asynchronous Operation បានបញ្ចប់ដោយជោគជ័យ។'
    },
    {
      question: 'តើការធ្វើ Unit Testing ជួយដល់ការរចនា Code យ៉ាងដូចម្តេច?',
      options: [
        'ធ្វើឱ្យ Code កាន់តែវែង',
        'បង្ខំឱ្យសរសេរ Code ដែលងាយស្រួល Test',
        'ធ្វើឱ្យ App ដំណើរការយឺត',
        'គ្មានឥទ្ធិពលអ្វីទេ'
      ],
      correct: 1,
      explanation: 'ការសរសេរ Tests ជំរុញឱ្យអ្នកសរសេរ Code ដែលមាន Module តូចៗនិងងាយស្រួលធ្វើ Test។'
    },
    {
      question: 'តើ `Test Navigator` នៅក្នុង Xcode ប្រើសម្រាប់អ្វី?',
      options: [
        'សរសេរ Code',
        'Design UI',
        'មើលនិងដំណើរការ Tests',
        'Debug Code'
      ],
      correct: 2,
      explanation: '`Test Navigator` គឺជា View មួយនៅក្នុង Xcode សម្រាប់មើលនិងដំណើរការ Tests។'
    }
  ],
  lab: {
    task: `
បង្កើត Class មួយឈ្មោះ \`StringProcessor\` ដែលមាន Methods សម្រាប់ធ្វើការជាមួយ String ហើយសរសេរ Unit Tests សម្រាប់វា។

**តម្រូវការ:**

1.  **Class \`StringProcessor\`:**
    -   បង្កើត File Swift មួយ។
    -   បង្កើត Class មួយឈ្មោះ \`StringProcessor\` ។
    -   បន្ថែម Method មួយឈ្មោះ \`isPalindrome(string: String) -> Bool\` ដែលពិនិត្យមើលថាតើ String មួយជា Palindrome (អានពីមុខទៅក្រោយឬពីក្រោយទៅមុខដូចគ្នា) ឬអត់។
    -   បន្ថែម Method មួយឈ្មោះ \`reverse(string: String) -> String\` ដែលបង្វិល String ។

2.  **Unit Test Target:**
    -   បើក Test Target របស់ Project ។
    -   បង្កើត Test Case មួយឈ្មោះ \`StringProcessorTests\` ។

3.  **Test Methods:**
    -   សរសេរ Test method មួយសម្រាប់ \`isPalindrome\` ដែល Test លើ String ដូចជា "madam" (true) និង "hello" (false) ។
    -   សរសេរ Test method មួយសម្រាប់ \`reverse\` ដែល Test លើ String ដូចជា "Hello" (return "olleH") ។

**ការណែនាំ:** ប្រើ \`XCTAssertEqual\` និង \`XCTAssertTrue/False\` ។
    `,
    solution: `
\`\`\`swift
// StringProcessor.swift
import Foundation

class StringProcessor {
    func isPalindrome(string: String) -> Bool {
        let cleanString = string.lowercased().filter { $0.isLetter }
        return cleanString == String(cleanString.reversed())
    }
    
    func reverse(string: String) -> String {
        return String(string.reversed())
    }
}

// StringProcessorTests.swift
import XCTest
@testable import YourApp

final class StringProcessorTests: XCTestCase {
    var processor: StringProcessor!
    
    override func setUpWithError() throws {
        processor = StringProcessor()
    }
    
    override func tearDownWithError() throws {
        processor = nil
    }
    
    func testIsPalindrome_shouldReturnTrueForPalindromeString() {
        let input = "madam"
        let result = processor.isPalindrome(string: input)
        XCTAssertTrue(result, "\\(input) should be a palindrome.")
    }
    
    func testIsPalindrome_shouldReturnFalseForNonPalindromeString() {
        let input = "hello"
        let result = processor.isPalindrome(string: input)
        XCTAssertFalse(result, "\\(input) should not be a palindrome.")
    }
    
    func testReverse_shouldReverseStringCorrectly() {
        let input = "Hello"
        let expected = "olleH"
        let result = processor.reverse(string: input)
        XCTAssertEqual(result, expected, "String was not reversed correctly.")
    }
}
\`\`\`
`
  }
};

export default SwiftLesson9_1Content;