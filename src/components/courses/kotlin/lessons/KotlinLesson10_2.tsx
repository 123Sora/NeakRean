import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson10_2Content: LessonContent = {
  title: 'UI Testing with Espresso',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ UI Testing',
    'រៀបចំ Project សម្រាប់ UI Testing',
    'រៀនពីរបៀបសរសេរ UI Test ជាមួយ Espresso',
    'ស្គាល់ពី Concept របស់ Espresso (ViewMatcher, ViewAction, ViewAssertion)',
    'អនុវត្តការ Test Button Click និង TextView Text'
  ],
  content: `
# UI Testing with Espresso ☕

---

**UI Testing** គឺជាដំណើរការនៃការ Test User Interface របស់ App ដើម្បីធានាថាវាដំណើរការត្រឹមត្រូវនិងមាន Interaction ជាមួយ User ដូចដែលបានរំពឹងទុក។ **Espresso** គឺជា Framework របស់ Google ដែលល្អបំផុតសម្រាប់ UI Testing ។

## 1. ហេតុអ្វីត្រូវធ្វើ UI Testing?

-   **Consistency:** ធានាថា UI ដំណើរការដូចគ្នាលើគ្រប់ Device ។
-   **រក Bug លើ UI:** អាចរកឃើញ Bug លើ UI ដូចជា Button មិនដំណើរការ, Text មិនបង្ហាញត្រឹមត្រូវ។
-   **Automation:** អនុញ្ញាតឱ្យយើង Automate ការ Test ដែលមានលក្ខណៈដដែលៗ។

## 2. ការរៀបចំ Project

-   **Source Sets:** Code របស់ UI Tests ត្រូវដាក់នៅក្នុង Folder \`src/androidTest/java\` ។
-   **Dependencies:**
\`\`\`groovy
dependencies {
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
}
\`\`\`

## 3. Espresso Core Concepts

Espresso មានបី Component សំខាន់ៗ៖
-   **ViewMatchers:** សម្រាប់ស្វែងរក View ។ ឧ. \`withId(R.id.my_button)\` ។
-   **ViewActions:** សម្រាប់ Interaction ជាមួយ View ។ ឧ. \`click()\`, \`typeText()\` ។
-   **ViewAssertions:** សម្រាប់ពិនិត្យលទ្ធផល។ ឧ. \`matches(isDisplayed())\` ។

## 4. ការសរសេរ UI Test

យើងនឹងសរសេរ UI Test សម្រាប់ App មួយដែលមាន Button និង TextView ។

### Step 1: Layout XML
\`\`\`xml
<LinearLayout ...>
    <TextView
        android:id="@+id/message_text_view"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello, World!" />
    
    <Button
        android:id="@+id/change_text_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Change Text" />
</LinearLayout>
\`\`\`

### Step 2: Test Code
យើងប្រើ \`@RunWith(AndroidJUnit4::class)\` និង \`@Rule\` សម្រាប់ Setup Activity ។
\`\`\`kotlin
// src/androidTest/java/com/example/app/MyUiTest.kt
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.withId
import androidx.test.espresso.matcher.ViewMatchers.withText
import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class MyUiTest {
    
    // Launch the activity before each test
    @get:Rule
    val activityRule = ActivityScenarioRule(MainActivity::class.java)

    @Test
    fun buttonClick_changesText() {
        // Find the button and perform a click action
        onView(withId(R.id.change_text_button)).perform(click())

        // Find the TextView and check if its text has changed
        onView(withId(R.id.message_text_view)).check(matches(withText("Text Changed!")))
    }
}
\`\`\`
-   \`onView()\`: គឺជា Method សំខាន់របស់ Espresso ដែលទទួលបាន ViewMatcher ។
-   \`.perform()\`: សម្រាប់ធ្វើ ViewAction ។
-   \`.check()\`: សម្រាប់ធ្វើ ViewAssertion ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការធ្វើ Test សម្រាប់ List Item</h3>
<p>យើងអាចប្រើ \`RecyclerViewActions\` ដើម្បី Interact ជាមួយ Item នៅក្នុង List ។</p>
<pre><code class="language-kotlin">
import androidx.test.espresso.contrib.RecyclerViewActions

@Test
fun clickOnListItem_displaysCorrectText() {
    onView(withId(R.id.my_recycler_view))
        .perform(RecyclerViewActions.actionOnItemAtPosition<MyAdapter.MyViewHolder>(0, click()))
    
    onView(withId(R.id.item_detail_text_view))
        .check(matches(withText("Item 0 Details")))
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ UI Testing ប្រើសម្រាប់ Test អ្វី?',
      options: [
        'Logic របស់ Function',
        'User Interface',
        'Database Connections',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'UI Testing ប្រើសម្រាប់ Test User Interface របស់ App ។'
    },
    {
      question: 'តើ Espresso គឺជា Framework ប្រភេទណា?',
      options: [
        'Unit Testing Framework',
        'UI Testing Framework',
        'Network Library',
        'Database Library'
      ],
      correct: 1,
      explanation: 'Espresso គឺជា Framework របស់ Google សម្រាប់ UI Testing ។'
    },
    {
      question: 'តើ Source Code របស់ UI Test ត្រូវដាក់នៅក្នុង Folder ណា?',
      options: [
        'src/main/java',
        'src/androidTest/java',
        'src/test/java',
        'res/layout'
      ],
      correct: 1,
      explanation: 'Code របស់ UI Tests ត្រូវដាក់នៅក្នុង Folder `src/androidTest/java` ។'
    },
    {
      question: 'តើ `ViewMatchers` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Interaction ជាមួយ View',
        'សម្រាប់ពិនិត្យលទ្ធផល',
        'សម្រាប់ស្វែងរក View',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`ViewMatchers` ប្រើសម្រាប់ស្វែងរក View នៅក្នុង Hierarchy ។'
    },
    {
      question: 'តើ `ViewActions` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Interaction ជាមួយ View',
        'សម្រាប់ពិនិត្យលទ្ធផល',
        'សម្រាប់ស្វែងរក View',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`ViewActions` ប្រើសម្រាប់ Interaction ជាមួយ View ដូចជា `click()` ។'
    },
    {
      question: 'តើ `ViewAssertions` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Interaction ជាមួយ View',
        'សម្រាប់ពិនិត្យលទ្ធផល',
        'សម្រាប់ស្វែងរក View',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`ViewAssertions` ប្រើសម្រាប់ពិនិត្យលទ្ធផល។'
    },
    {
      question: 'តើ `onView(withId(R.id.my_button))` គឺជា Component របស់ Espresso ប្រភេទណា?',
      options: [
        'ViewMatcher',
        'ViewAction',
        'ViewAssertion',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`onView(withId(...))` គឺជា ViewMatcher ។'
    },
    {
      question: 'តើ `@Rule` Annotation ប្រើសម្រាប់អ្វីនៅក្នុង Espresso Test?',
      options: [
        'សម្រាប់ Launch Activity',
        'សម្រាប់ Setup Test Environment',
        'សម្រាប់ Cleanup',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: '`@Rule` Annotation ប្រើសម្រាប់ Setup និង Cleanup Test Environment ។'
    },
    {
      question: 'តើ `withText("...")` គឺជា ViewMatcher ប្រភេទណា?',
      options: [
        'View Id Matcher',
        'Content Description Matcher',
        'Text Matcher',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`withText()` គឺជា Text Matcher ។'
    },
    {
      question: 'តើ `RecyclerViewActions.actionOnItemAtPosition()` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Interaction ជាមួយ View នៅខាងក្នុង RecyclerView',
        'សម្រាប់ Interaction ជាមួយ Button',
        'សម្រាប់ Interaction ជាមួយ EditText',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`RecyclerViewActions` ប្រើសម្រាប់ Interaction ជាមួយ View នៅខាងក្នុង RecyclerView ។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយដែលមាន \`EditText\` សម្រាប់ Input ឈ្មោះ, Button មួយសម្រាប់ Save, និង \`TextView\` មួយសម្រាប់បង្ហាញសារ។ បន្ទាប់មកសរសេរ UI Test ជាមួយ Espresso ដើម្បី Test ថា Functionality ទាំងនោះដំណើរការត្រឹមត្រូវ។

**តម្រូវការ:**

1.  **Layout XML:**
    -   \`EditText\` (id: \`name_input\`)
    -   \`Button\` (id: \`save_button\`)
    -   \`TextView\` (id: \`message_text\`)

2.  **Logic:**
    -   នៅពេលចុច Button, ទទួលបាន Text ពី \`EditText\` ហើយបង្ហាញសារ "Hello, [ឈ្មោះ]!" នៅលើ \`TextView\` ។

3.  **UI Test:**
    -   សរសេរ UI Test ដែល Inject Text ចូលក្នុង \`EditText\` ។
    -   Perform \`click()\` នៅលើ Button ។
    -   Check ថា \`TextView\` បង្ហាញ Text ដែលត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`kotlin
// src/main/java/com/example/app/MainActivity.kt
package com.example.app

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val nameInput = findViewById<EditText>(R.id.name_input)
        val saveButton = findViewById<Button>(R.id.save_button)
        val messageText = findViewById<TextView>(R.id.message_text)

        saveButton.setOnClickListener {
            val name = nameInput.text.toString()
            if (name.isNotEmpty()) {
                messageText.text = "Hello, \$name!"
            } else {
                messageText.text = "Please enter your name."
            }
        }
    }
}

// src/androidTest/java/com/example/app/MyUiTest.kt
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.action.ViewActions.typeText
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.*
import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class MyUiTest {
    @get:Rule
    val activityRule = ActivityScenarioRule(MainActivity::class.java)

    @Test
    fun saveButton_displaysCorrectMessage() {
        // Type text into the EditText
        onView(withId(R.id.name_input)).perform(typeText("John Doe"))

        // Click the save button
        onView(withId(R.id.save_button)).perform(click())

        // Check if the TextView displays the correct message
        onView(withId(R.id.message_text)).check(matches(withText("Hello, John Doe!")))
    }
    
    @Test
    fun saveButton_withEmptyInput_displaysError() {
        onView(withId(R.id.save_button)).perform(click())
        onView(withId(R.id.message_text)).check(matches(withText("Please enter your name.")))
    }
}
\`\`\`
`
  }
};

export default KotlinLesson10_2Content;