import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson10_1Content: LessonContent = {
  title: 'Unit Testing',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Unit Testing',
    'រៀបចំ Project សម្រាប់ Unit Testing',
    'រៀនពីរបៀបបង្កើត Unit Test សម្រាប់ Classes និង Functions',
    'ស្គាល់ពីការប្រើប្រាស់ `JUnit` និង `Mockito`',
    'យល់ដឹងពី Test-Driven Development (TDD)'
  ],
  content: `
# Unit Testing 🧪

---

**Unit Testing** គឺជាដំណើរការនៃការ Test Code ផ្នែកតូចបំផុត (Unit) ដូចជា Class ឬ Function មួយ។ គោលបំណងគឺដើម្បីផ្ទៀងផ្ទាត់ថា Logic របស់ Code នោះដំណើរការត្រឹមត្រូវតាមដែលបានរំពឹងទុក។

## 1. ហេតុអ្វីត្រូវធ្វើ Unit Testing?

-   **បង្កើនទំនុកចិត្ត:** ជួយឱ្យយើងមានទំនុកចិត្តលើ Code របស់យើង។
-   **រកកំហុសបានលឿន:** អាចរកឃើញ Bug បានតាំងពីដើមដំបូង។
-   **ជួយក្នុងការ Refactoring:** អនុញ្ញាតឱ្យយើងផ្លាស់ប្តូរ Code ដោយមានទំនុកចិត្តថា Logic នៅតែដំណើរការត្រឹមត្រូវ។
-   **ជា Documentation:** Test Code អាចជា Documentation សម្រាប់ Code របស់យើង។

## 2. ការរៀបចំ Project

-   **Source Sets:** Code របស់ Unit Tests ត្រូវដាក់នៅក្នុង Folder \`src/test/java\` ។
-   **Dependencies:** យើងត្រូវការ \`JUnit\` និង Library ផ្សេងទៀត។
\`\`\`groovy
dependencies {
    testImplementation("junit:junit:4.13.2")
    testImplementation("org.mockito:mockito-core:5.11.0")
}
\`\`\`

## 3. ការសរសេរ Unit Test

យើងនឹងសរសេរ Unit Test សម្រាប់ \`Calculator\` Class ដែលមាន Function \`add\` ។

### Step 1: Code ដែលត្រូវ Test
\`\`\`kotlin
// src/main/java/com/example/app/Calculator.kt
package com.example.app

class Calculator {
    fun add(a: Int, b: Int): Int {
        return a + b
    }
}
\`\`\`

### Step 2: Test Code
យើងប្រើ Annotation \`@Test\` ដើម្បីសម្គាល់ Function ដែលជា Test ។
\`\`\`kotlin
// src/test/java/com/example/app/CalculatorTest.kt
import com.example.app.Calculator
import org.junit.Assert.assertEquals
import org.junit.Test

class CalculatorTest {

    @Test
    fun add_isCorrect() {
        val calculator = Calculator()
        val result = calculator.add(2, 3)
        assertEquals(5, result)
    }

    @Test
    fun add_negativeNumbers_isCorrect() {
        val calculator = Calculator()
        val result = calculator.add(-2, -3)
        assertEquals(-5, result)
    }
}
\`\`\`
-   \`assertEquals()\`: គឺជា Assert Function ដែលពិនិត្យមើលថាតើតម្លៃដែលរំពឹងទុក (\`expected\`) ស្មើនឹងតម្លៃពិត (\`actual\`) ដែរឬទេ។

## 4. Mocking with Mockito

**Mocking** គឺជាការបង្កើត Object ដែលក្លែងបន្លំ سلوហវតរបស់ Object ពិត។ វាមានប្រយោជន៍ពេលយើង Test Class ដែលទាក់ទងជាមួយ Class ផ្សេងទៀត។

\`\`\`kotlin
// Class មួយទៀតដែលយើងចង់ Mock
interface DataFetcher {
    fun fetchUserData(): String
}

// Class ដែលត្រូវ Test
class ProfilePresenter(private val dataFetcher: DataFetcher) {
    fun getUserName(): String {
        return dataFetcher.fetchUserData()
    }
}

// Test Code
import org.junit.Assert.assertEquals
import org.junit.Test
import org.mockito.Mockito

class ProfilePresenterTest {

    @Test
    fun getUserName_returnsCorrectData() {
        // Create a mock object
        val mockDataFetcher = Mockito.mock(DataFetcher::class.java)

        // Define the behavior of the mock object
        Mockito.\`when\`(mockDataFetcher.fetchUserData()).thenReturn("John Doe")

        // Create the class to be tested with the mock object
        val presenter = ProfilePresenter(mockDataFetcher)

        // Test the function
        val userName = presenter.getUserName()
        assertEquals("John Doe", userName)
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`setUp\` និង \`tearDown\`</h3>
<p>យើងអាចប្រើ \`@Before\` និង \`@After\` ដើម្បីរៀបចំ Environment មុននិងក្រោយការ Test ។</p>
<pre><code class="language-kotlin">
import org.junit.After
import org.junit.Before
import org.junit.Test

class MyTest {
    private lateinit var calculator: Calculator

    @Before
    fun setUp() {
        // ត្រូវបានហៅមុន Test នីមួយៗ
        calculator = Calculator()
    }

    @After
    fun tearDown() {
        // ត្រូវបានហៅក្រោយ Test នីមួយៗ
    }

    @Test
    fun testSomething() {
        // ...
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Unit Testing ប្រើសម្រាប់ Test អ្វី?',
      options: [
        'Application ទាំងមូល',
        'UI របស់ App',
        'Unit តូចបំផុតរបស់ Code',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Unit Testing ប្រើសម្រាប់ Test Unit តូចបំផុតរបស់ Code ដូចជា Class ឬ Function ។'
    },
    {
      question: 'តើ Source Code របស់ Unit Test ត្រូវដាក់នៅក្នុង Folder ណា?',
      options: [
        'src/main/java',
        'src/androidTest/java',
        'src/test/java',
        'res/layout'
      ],
      correct: 2,
      explanation: 'Code របស់ Unit Tests ត្រូវដាក់នៅក្នុង Folder `src/test/java` ។'
    },
    {
      question: 'តើ `@Test` Annotation ធ្វើអ្វី?',
      options: [
        'សម្គាល់ Class ថាជា Test Class',
        'សម្គាល់ Function ថាជា Test Function',
        'រៀបចំ Test Environment',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`@Test` Annotation សម្គាល់ Function ថាជា Test Function ។'
    },
    {
      question: 'តើ `assertEquals(expected, actual)` ធ្វើអ្វី?',
      options: [
        'ពិនិត្យមើលថាតើតម្លៃពិត ស្មើនឹងតម្លៃដែលរំពឹងទុក',
        'ប្រៀបធៀប Object',
        'ប្រៀបធៀប Strings',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`assertEquals()` ពិនិត្យមើលថាតើ `actual` ស្មើនឹង `expected` ។'
    },
    {
      question: 'តើ Mocking ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីធ្វើ UI Test',
        'ដើម្បីក្លែងបន្លំ سلوហវតរបស់ Object',
        'ដើម្បីធ្វើ Network Request',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Mocking គឺជាការបង្កើត Object ក្លែងក្លាយដើម្បីធ្វើ Test ។'
    },
    {
      question: 'តើ `@Before` Annotation ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Run Code មុន Test នីមួយៗ',
        'សម្រាប់ Run Code ក្រោយ Test នីមួយៗ',
        'សម្រាប់ Run Code តែម្តង',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`@Before` Annotation ប្រើសម្រាប់ Run Code មុន Test នីមួយៗ។'
    },
    {
      question: 'តើ `Mockito` គឺជា Library ប្រភេទណា?',
      options: [
        'Testing Framework',
        'Mocking Framework',
        'UI Testing Framework',
        'Database Library'
      ],
      correct: 1,
      explanation: '`Mockito` គឺជា Mocking Framework ។'
    },
    {
      question: 'តើ Unit Tests អាចរកឃើញ Bug ប្រភេទណា?',
      options: [
        'Bug ដែលទាក់ទងជាមួយ UI',
        'Bug ដែលទាក់ទងជាមួយ Network',
        'Bug ដែលទាក់ទងជាមួយ Logic របស់ Function',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Unit Tests ល្អបំផុតសម្រាប់ Bug ដែលទាក់ទងជាមួយ Logic របស់ Function ។'
    },
    {
      question: 'តើ `Mockito.`when`(...)` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីហៅ Function របស់ Mock Object',
        'ដើម្បីកំណត់ Behavior របស់ Mock Object',
        'ដើម្បីបង្កើត Mock Object',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`when` ប្រើសម្រាប់កំណត់ Behavior របស់ Mock Object ។'
    },
    {
      question: 'តើ Test-Driven Development (TDD) មានន័យដូចម្តេច?',
      options: [
        'សរសេរ Code រួចសរសេរ Test',
        'សរសេរ Test រួចសរសេរ Code',
        'សរសេរ Test និង Code ក្នុងពេលតែមួយ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'TDD គឺជាការសរសេរ Test មុននឹងសរសេរ Code ។'
    }
  ],
  lab: {
    task: `
បង្កើត Calculator Class ដែលមាន Function សម្រាប់បូក, ដក, គុណ, ចែក ។ បន្ទាប់មកសរសេរ Unit Test សម្រាប់ Function នីមួយៗ។

**តម្រូវការ:**

1.  **Calculator Class:**
    -   បង្កើត Class \`Calculator\` នៅក្នុង Folder \`src/main/java\` ។
    -   មាន Function \`add(a: Int, b: Int)\`, \`subtract(a: Int, b: Int)\`, \`multiply(a: Int, b: Int)\`, \`divide(a: Int, b: Int)\` ។

2.  **Test Class:**
    -   បង្កើត Class \`CalculatorTest\` នៅក្នុង Folder \`src/test/java\` ។
    -   សរសេរ Test Function សម្រាប់ Function នីមួយៗរបស់ \`Calculator\` ។
    -   ត្រូវប្រើ \`assertEquals\` ដើម្បីពិនិត្យលទ្ធផល។
    -   សរសេរ Test សម្រាប់ Edge Case ផង (ឧ. ការចែកនឹងសូន្យ) ។
    `,
    solution: `
\`\`\`kotlin
// src/main/java/com/example/app/Calculator.kt
package com.example.app

class Calculator {
    fun add(a: Int, b: Int): Int {
        return a + b
    }

    fun subtract(a: Int, b: Int): Int {
        return a - b
    }

    fun multiply(a: Int, b: Int): Int {
        return a * b
    }

    fun divide(a: Int, b: Int): Int {
        if (b == 0) {
            throw IllegalArgumentException("Cannot divide by zero")
        }
        return a / b
    }
}

// src/test/java/com/example/app/CalculatorTest.kt
import com.example.app.Calculator
import org.junit.Assert.assertEquals
import org.junit.Test
import org.junit.Assert.assertThrows

class CalculatorTest {
    private val calculator = Calculator()

    @Test
    fun add_positiveNumbers_isCorrect() {
        val result = calculator.add(5, 7)
        assertEquals(12, result)
    }

    @Test
    fun subtract_isCorrect() {
        val result = calculator.subtract(10, 4)
        assertEquals(6, result)
    }

    @Test
    fun multiply_isCorrect() {
        val result = calculator.multiply(3, 4)
        assertEquals(12, result)
    }

    @Test
    fun divide_isCorrect() {
        val result = calculator.divide(10, 2)
        assertEquals(5, result)
    }
    
    @Test
    fun divide_byZero_throwsException() {
        assertThrows(IllegalArgumentException::class.java) {
            calculator.divide(10, 0)
        }
    }
}
\`\`\`
`
  }
};

export default KotlinLesson10_1Content;