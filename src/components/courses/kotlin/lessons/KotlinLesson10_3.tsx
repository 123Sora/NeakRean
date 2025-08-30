import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson10_3Content: LessonContent = {
  title: 'Integration Testing',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Integration Testing',
    'យល់ដឹងពីភាពខុសគ្នារវាង Unit, UI, និង Integration Testing',
    'រៀបចំ Project សម្រាប់ Integration Testing',
    'រៀនពីរបៀប Test Interactions រវាង Components',
    'អនុវត្តការ Test ជាមួយ Fake Data'
  ],
  content: `
# Integration Testing 🧩

---

**Integration Testing** គឺជាដំណើរការនៃការ Test ក្រុមនៃ Modules ឬ Components ក្នុង App ជាមួយគ្នា។ គោលបំណងគឺដើម្បីផ្ទៀងផ្ទាត់ថា Components ទាំងនោះធ្វើការជាមួយគ្នាបានត្រឹមត្រូវ។

## 1. ភាពខុសគ្នារវាង Test ប្រភេទនានា

-   **Unit Test:** Test Logic តូចៗដាច់ដោយឡែកពីគ្នា។ ឧ. Test Function \`add()\` របស់ Calculator ។
-   **UI Test:** Test ថា User Interface ដំណើរការត្រឹមត្រូវ។ ឧ. Test Button Click ។
-   **Integration Test:** Test ការធ្វើការរួមគ្នារវាង Components ។ ឧ. Test ថា App អាច Fetch Data ពី Repository ហើយបង្ហាញវានៅលើ UI ។



[Image of testing pyramid]


## 2. ការរៀបចំ Project

-   **Source Sets:** Code របស់ Integration Tests ត្រូវដាក់នៅក្នុង Folder \`src/androidTest/java\` (ដូច UI Test) ។
-   **Dependencies:**
\`\`\`groovy
dependencies {
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
    androidTestImplementation("org.mockito:mockito-android:5.11.0")
    androidTestImplementation("com.squareup.okhttp3:mockwebserver:4.12.0")
}
\`\`\`
-   យើងប្រើ Mockito សម្រាប់ Mocking Object និង MockWebServer សម្រាប់ Mocking Network Responses ។

## 3. ការសរសេរ Integration Test

យើងនឹងសរសេរ Integration Test សម្រាប់ News App ដែលមាន ViewModel, Repository, និង API Service ។

### Step 1: ក្លែងបន្លំ Server
យើងប្រើ \`MockWebServer\` ដើម្បីក្លែងបន្លំ Server ដែលផ្តល់ Data ត្រឹមត្រូវ។
\`\`\`kotlin
import okhttp3.mockwebserver.MockResponse
import okhttp3.mockwebserver.MockWebServer
import org.junit.After
import org.junit.Before

private val mockWebServer = MockWebServer()

@Before
fun setup() {
    mockWebServer.start()
}

@After
fun teardown() {
    mockWebServer.shutdown()
}

fun enqueueResponse(body: String) {
    val response = MockResponse()
        .setResponseCode(200)
        .setBody(body)
    mockWebServer.enqueue(response)
}
\`\`\`

### Step 2: Test Code
យើងនឹង Test ថា ViewModel អាចទទួលបាន Data ពី Repository ត្រឹមត្រូវ។
\`\`\`kotlin
import androidx.arch.core.executor.testing.InstantTaskExecutorRule
import androidx.lifecycle.Observer
import com.example.app.NewsRepository
import com.example.app.NewsViewModel
import com.example.app.network.RetrofitClient
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.test.runTest
import org.junit.Rule
import org.junit.Test
import org.mockito.Mockito

@OptIn(ExperimentalCoroutinesApi::class)
class NewsViewModelTest {

    @get:Rule
    val instantTaskExecutorRule = InstantTaskExecutorRule()

    @Test
    fun fetchNews_success_returnsCorrectData() = runTest {
        // Given
        val mockApiService = Mockito.mock(NewsApiService::class.java)
        val repository = NewsRepository(mockApiService)
        val viewModel = NewsViewModel(repository)
        
        // When
        val fakeNews = listOf(Article("Test Title"))
        Mockito.\`when\`(mockApiService.getTopHeadlines()).thenReturn(Response.success(NewsResponse("ok", fakeNews)))
        
        viewModel.fetchNews()
        
        // Then
        // Wait for the coroutine to finish
        // (with a fake delay)
        advanceUntilIdle()
        
        val articles = viewModel.uiState.value
        assertEquals("Test Title", (articles as UiState.Success).articles[0].title)
    }
}
\`\`\`
-   \`InstantTaskExecutorRule\`: សម្រាប់ធ្វើ Test LiveData ។
-   \`runTest\`: សម្រាប់ធ្វើ Test Coroutines ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការ Test Database Integration</h3>
<p>យើងអាចប្រើ In-Memory Room Database សម្រាប់ Test Operations របស់ DAO និង Repository ។</p>
<pre><code class="language-kotlin">
import androidx.room.Room
import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class UserDaoTest {
    private lateinit var db: AppDatabase
    private lateinit var userDao: UserDao

    @Before
    fun createDb() {
        db = Room.inMemoryDatabaseBuilder(
            InstrumentationRegistry.getInstrumentation().context,
            AppDatabase::class.java
        ).build()
        userDao = db.userDao()
    }

    @After
    fun closeDb() {
        db.close()
    }

    @Test
    fun writeUserAndReadInList() {
        val user = User("testuser", 25)
        userDao.insertUser(user)
        val users = userDao.getAllUsers().first()
        assertEquals(user.name, users[0].name)
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Integration Testing ប្រើសម្រាប់ Test អ្វី?',
      options: [
        'Component ដាច់ដោយឡែកពីគ្នា',
        'ក្រុមនៃ Components ដែលធ្វើការជាមួយគ្នា',
        'UI របស់ App',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Integration Testing ប្រើសម្រាប់ Test ក្រុមនៃ Components ដែលធ្វើការជាមួយគ្នា។'
    },
    {
      question: 'តើ Integration Test Code ត្រូវដាក់នៅក្នុង Folder ណា?',
      options: [
        'src/main/java',
        'src/androidTest/java',
        'src/test/java',
        'res/layout'
      ],
      correct: 1,
      explanation: 'Integration Test Code ត្រូវដាក់នៅក្នុង Folder `src/androidTest/java` ។'
    },
    {
      question: 'តើ `MockWebServer` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Test UI',
        'សម្រាប់ Mocking Database',
        'សម្រាប់ Mocking Network Server',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`MockWebServer` ប្រើសម្រាប់ Mocking Network Server ។'
    },
    {
      question: 'តើ `InstantTaskExecutorRule` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Test Coroutines',
        'សម្រាប់ Test LiveData',
        'សម្រាប់ Test UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`InstantTaskExecutorRule` ប្រើសម្រាប់ Test LiveData ។'
    },
    {
      question: 'តើ `Room.inMemoryDatabaseBuilder` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់បង្កើត Database នៅក្នុង Local File',
        'សម្រាប់បង្កើត Database នៅក្នុង Memory សម្រាប់ Test',
        'សម្រាប់បង្កើត Database នៅក្នុង Cloud',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`Room.inMemoryDatabaseBuilder` ប្រើសម្រាប់បង្កើត Database នៅក្នុង Memory សម្រាប់ Test ។'
    },
    {
      question: 'តើ Mocking មានសារៈសំខាន់អ្វីសម្រាប់ Integration Test?',
      options: [
        'ជួយធ្វើឱ្យ Test ដំណើរការលឿន',
        'ជួយឱ្យ Test មានភាពងាយស្រួលដោយមិនចាំបាច់មាន Service ពិត',
        'ជួយធ្វើឱ្យ Test មានសុវត្ថិភាព',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: 'Mocking ជួយឱ្យ Test មានភាពងាយស្រួល លឿន និងមិនចាំបាច់មាន Service ពិត។'
    },
    {
      question: 'តើ Test Pyramid មាន Test ប្រភេទប៉ុន្មាន?',
      options: [
        '២',
        '៣',
        '៤',
        '៥'
      ],
      correct: 1,
      explanation: 'Test Pyramid មានបីប្រភេទគឺ Unit, Integration, និង UI Test ។'
    },
    {
      question: 'តើ Unit Tests គួរមានចំនួនច្រើនជាង Integration Tests ដែរឬទេ?',
      options: [
        'គួរតែច្រើនជាង',
        'មិនគួរទេ',
        'គួរតែស្មើគ្នា',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Unit Tests គួរមានចំនួនច្រើនជាងគេព្រោះវាលឿននិងងាយស្រួលសរសេរ។'
    },
    {
      question: 'តើ `runTest` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Test Synchronous Code',
        'សម្រាប់ Test Coroutines',
        'សម្រាប់ Test UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`runTest` គឺជា Test Coroutine Builder សម្រាប់ Test Suspend Function ។'
    },
    {
      question: 'តើ Integration Testing ល្អបំផុតសម្រាប់ Bug ប្រភេទណា?',
      options: [
        'Bug ដែលទាក់ទងជាមួយ Logic របស់ Function',
        'Bug ដែលទាក់ទងជាមួយ UI',
        'Bug ដែលទាក់ទងជាមួយ Interaction រវាង Components',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Integration Testing ល្អបំផុតសម្រាប់ Bug ដែលទាក់ទងជាមួយ Interaction រវាង Components ។'
    }
  ],
  lab: {
    task: `
បង្កើត Project មួយដែលមាន Data Source (ឧ. FakeDataSource), Repository, និង ViewModel ។ បន្ទាប់មកសរសេរ Integration Test ដើម្បី Test ថា ViewModel អាចទទួលបាន Data ពី Repository ត្រឹមត្រូវ។

**តម្រូវការ:**

1.  **Dependencies:**
    -   បន្ថែម dependencies សម្រាប់ Coroutine Testing, JUnit, Mockito ។

2.  **FakeDataSource:**
    -   បង្កើត Class \`FakeDataSource\` ដែលមាន Function \`getData()\` ដែលត្រឡប់ List របស់ String ។

3.  **Repository:**
    -   បង្កើត \`MyRepository\` ដែលមាន Function \`getMessages()\` ដែលហៅ \`getData()\` ពី \`FakeDataSource\` ។

4.  **ViewModel:**
    -   បង្កើត \`MyViewModel\` ដែលមាន Function \`fetchMessages()\` ហើយ Update \`LiveData\` ឬ \`StateFlow\` ។

5.  **Integration Test:**
    -   នៅក្នុង Test Class មួយ, ប្រើ Mockito ដើម្បី Mock \`FakeDataSource\` ។
    -   សរសេរ Test Function ដែលហៅ \`fetchMessages()\` របស់ ViewModel ។
    -   ប្រើ \`Mockito.\`when\`(...)\` ដើម្បីកំណត់តម្លៃដែល \`getData()\` របស់ \`FakeDataSource\` នឹងត្រឡប់។
    -   Check ថា \`LiveData\` ឬ \`StateFlow\` របស់ ViewModel មានតម្លៃដែលត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`kotlin
// src/main/java/com/example/app/repository/MyRepository.kt
package com.example.app.repository

import com.example.app.data.FakeDataSource
import kotlinx.coroutines.flow.flow

class MyRepository(private val dataSource: FakeDataSource) {
    fun getMessages() = flow {
        emit(dataSource.getData())
    }
}

// src/main/java/com/example/app/data/FakeDataSource.kt
package com.example.app.data

class FakeDataSource {
    fun getData(): List<String> {
        return listOf("Hello", "World", "From", "Fake", "DataSource")
    }
}

// src/main/java/com/example/app/viewmodel/MyViewModel.kt
package com.example.app.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.app.repository.MyRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class MyViewModel(private val repository: MyRepository) : ViewModel() {
    private val _messages = MutableStateFlow<List<String>>(emptyList())
    val messages: StateFlow<List<String>> = _messages
    
    fun fetchMessages() {
        viewModelScope.launch {
            repository.getMessages().collect {
                _messages.value = it
            }
        }
    }
}

// src/test/java/com/example/app/MyViewModelTest.kt
import com.example.app.data.FakeDataSource
import com.example.app.repository.MyRepository
import com.example.app.viewmodel.MyViewModel
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.test.runTest
import org.junit.Assert.assertEquals
import org.junit.Before
import org.junit.Test
import org.mockito.Mockito

@OptIn(ExperimentalCoroutinesApi::class)
class MyViewModelTest {

    private lateinit var fakeDataSource: FakeDataSource
    private lateinit var repository: MyRepository
    private lateinit var viewModel: MyViewModel

    @Before
    fun setup() {
        fakeDataSource = Mockito.mock(FakeDataSource::class.java)
        repository = MyRepository(fakeDataSource)
        viewModel = MyViewModel(repository)
    }

    @Test
    fun fetchMessages_returnsCorrectData() = runTest {
        // Given
        val expectedData = listOf("Test 1", "Test 2")
        Mockito.\`when\`(fakeDataSource.getData()).thenReturn(expectedData)
        
        // When
        viewModel.fetchMessages()

        // Then
        val actualData = viewModel.messages.first()
        assertEquals(expectedData, actualData)
    }
}
\`\`\`
`
  }
};

export default KotlinLesson10_3Content;