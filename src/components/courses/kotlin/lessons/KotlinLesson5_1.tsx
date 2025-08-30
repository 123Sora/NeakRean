import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson5_1Content: LessonContent = {
  title: 'HTTP Requests with Retrofit',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Retrofit',
    'ស្គាល់ពីគុណសម្បត្តិរបស់ Retrofit',
    'រៀនពីរបៀបរៀបចំ Project សម្រាប់ Retrofit',
    'យល់ដឹងពីរបៀបកំណត់ Interface សម្រាប់ API Endpoints',
    'អនុវត្តការបង្កើត HTTP GET Request'
  ],
  content: `
# HTTP Requests with Retrofit 🌐

---

**Retrofit** គឺជា Library របស់ Square ដែលមានលក្ខណៈ Type-safe សម្រាប់ធ្វើ HTTP Client ក្នុង Android និង Java ។ វាធ្វើឱ្យការភ្ជាប់ទៅ REST APIs មានភាពងាយស្រួលនិងរហ័ស។

## 1. ហេតុអ្វីត្រូវប្រើ Retrofit?

-   **Type-safe:** វាកាត់បន្ថយ Errors ព្រោះអ្នកកំណត់ API Endpoints ដោយប្រើ Kotlin Interface ។
-   **Easy to Use:** មិនចាំបាច់សរសេរ Code ច្រើនសម្រាប់ការតភ្ជាប់ Network ទេ។
-   **Configurable:** អាចប្រើជាមួយ Converters ផ្សេងៗគ្នា (ដូចជា Moshi, Gson) និង Call Adapters ផ្សេងៗទៀត (ដូចជា Coroutines) ។



## 2. ការរៀបចំ Project

អ្នកត្រូវបន្ថែម Dependencies របស់ Retrofit ទៅក្នុង File \`build.gradle\` ។

\`\`\`groovy
dependencies {
    // Retrofit
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    
    // Converter: សម្រាប់បំប្លែង JSON ទៅជា Kotlin Object
    implementation("com.squareup.retrofit2:converter-moshi:2.9.0")
    
    // Coroutines: សម្រាប់ធ្វើ asynchronous calls
    implementation("com.squareup.retrofit2:converter-moshi:2.9.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.1")
    implementation("com.jakewharton.retrofit:retrofit2-kotlin-coroutines-adapter:0.9.2")
}
\`\`\`

## 3. Retrofit Basics

ការប្រើ Retrofit មានបីជំហានសំខាន់ៗ៖

### Step 1: កំណត់ Data Class

អ្នកត្រូវកំណត់ Data Class ដែលត្រូវនឹង JSON Response របស់ API ។

\`\`\`kotlin
data class Post(
    val userId: Int,
    val id: Int,
    val title: String,
    val body: String
)
\`\`\`

### Step 2: កំណត់ Service Interface

បង្កើត Interface មួយដែលមាន Annotation សម្រាប់ API Endpoints ។

\`\`\`kotlin
import retrofit2.http.GET
import retrofit2.http.Path
import retrofit2.Response

interface ApiService {
    @GET("posts/{id}")
    suspend fun getPostById(@Path("id") postId: Int): Response<Post>
}
\`\`\`
-   **\`@GET\`**: កំណត់ថាជា HTTP GET Request ។
-   **\`@Path\`**: បញ្ចូលតម្លៃទៅក្នុង URL Path ។
-   **\`suspend\`**: ប្រើសម្រាប់ Coroutines ។
-   **\`Response<Post>\`**: Object ដែលមាន HTTP response និង body ។

### Step 3: បង្កើត Retrofit Instance

នៅក្នុង Class ដូចជា ViewModel ឬ Repository, បង្កើត Retrofit Instance ។

\`\`\`kotlin
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory

object RetrofitClient {
    private const val BASE_URL = "https://jsonplaceholder.typicode.com/"

    val apiService: ApiService by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(MoshiConverterFactory.create())
            .build()
            .create(ApiService::class.java)
    }
}
\`\`\`
-   **\`baseUrl()\`**: កំណត់ URL មូលដ្ឋានរបស់ API ។
-   **\`addConverterFactory()\`**: កំណត់ Converter សម្រាប់បំប្លែង JSON ។
-   **\`create()\`**: បង្កើត Implementation របស់ Interface របស់អ្នក។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការហៅ Retrofit API នៅក្នុង ViewModel</h3>
<p>យើងប្រើ ViewModelScope ដើម្បីហៅ API ដោយប្រើ Coroutines ។</p>
<pre><code class="language-kotlin">
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch

class MyViewModel : ViewModel() {
    fun fetchPost() {
        viewModelScope.launch {
            try {
                val response = RetrofitClient.apiService.getPostById(1)
                if (response.isSuccessful) {
                    val post = response.body()
                    // ធ្វើអ្វីមួយជាមួយ post
                } else {
                    // Handle error
                }
            } catch (e: Exception) {
                // Handle network exception
            }
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Retrofit គឺជាអ្វី?',
      options: [
        'ជា Database Library',
        'ជា Library សម្រាប់ UI',
        'ជា Type-safe HTTP Client',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Retrofit គឺជា Type-safe HTTP Client សម្រាប់ Android និង Java ។'
    },
    {
      question: 'តើ Retrofit កំណត់ API Endpoints តាមរយៈអ្វី?',
      options: [
        'XML Files',
        'JSON Objects',
        'Kotlin Interfaces',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Retrofit កំណត់ API Endpoints ដោយប្រើ Kotlin Interface ។'
    },
    {
      question: 'តើ `@GET` Annotation ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ HTTP POST Request',
        'សម្រាប់ HTTP GET Request',
        'សម្រាប់ HTTP PUT Request',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`@GET` កំណត់ថាជា HTTP GET Request ។'
    },
    {
      question: 'តើ `BASE_URL` នៅក្នុង Retrofit គឺជាអ្វី?',
      options: [
        'URL របស់ File',
        'URL មូលដ្ឋានរបស់ API',
        'URL របស់ Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`BASE_URL` គឺជា URL មូលដ្ឋានរបស់ API ។'
    },
    {
      question: 'តើ `Response<T>` Object ផ្ទុកអ្វីខ្លះ?',
      options: [
        'តែ Body របស់ Response',
        'តែ Headers',
        'HTTP Response ទាំងមូល',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`Response<T>` Object ផ្ទុក HTTP Response ទាំងមូល (Headers, Body, Status Code) ។'
    },
    {
      question: 'តើ `Converter Factory` ប្រើសម្រាប់អ្វី?',
      options: [
        'បំប្លែង Request ទៅ JSON',
        'បំប្លែង JSON ទៅ Kotlin Object',
        'បំប្លែង URL',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Converter Factory ដូចជា MoshiConverterFactory ប្រើសម្រាប់បំប្លែង JSON Response ទៅជា Kotlin Object ។'
    },
    {
      question: 'តើ `@Path` Annotation ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Parameter នៅក្នុង URL Path',
        'កំណត់ Parameter នៅក្នុង Query',
        'កំណត់ Body របស់ Request',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`@Path` ប្រើដើម្បីបញ្ចូលតម្លៃទៅក្នុង URL Path ។'
    },
    {
      question: 'តើ `suspend` Keyword ប្រើសម្រាប់អ្វីនៅក្នុង Retrofit?',
      options: [
        'ដើម្បីធ្វើ Sync Call',
        'ដើម្បីធ្វើ Asynchronous Call',
        'ដើម្បីធ្វើ UI Call',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`suspend` ប្រើសម្រាប់ Coroutines ដើម្បីធ្វើ Asynchronous Call ។'
    },
    {
      question: 'តើ `Retrofit.Builder()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីបង្កើត Retrofit Instance',
        'ដើម្បី Parse JSON',
        'ដើម្បីរៀបចំ UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`Retrofit.Builder()` គឺជា Class សម្រាប់បង្កើត Instance របស់ Retrofit ។'
    },
    {
      question: 'តើ `response.isSuccessful` ត្រឡប់មកវិញនូវអ្វី?',
      options: [
        'True នៅពេល Response ជោគជ័យ',
        'False នៅពេល Response ជោគជ័យ',
        'តែងតែ True',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`response.isSuccessful` ត្រឡប់មកវិញនូវ True នៅពេល Status Code ស្ថិតនៅក្នុងជួរ 200-300 ។'
    }
  ],
  lab: {
    task: `
បង្កើត Project មួយដែលប្រើ Retrofit ដើម្បីហៅ GET API ទៅកាន់ \`https://jsonplaceholder.typicode.com/posts/1\` ហើយបង្ហាញចំណងជើង (title) នៃ Post នោះនៅលើអេក្រង់។

**តម្រូវការ:**

1.  **Dependencies:**
    -   បន្ថែម Retrofit, Moshi Converter, និង Coroutines Dependencies ។

2.  **Data Class:**
    -   បង្កើត Data Class សម្រាប់ Post ដែលមាន Properties \`id\`, \`userId\`, \`title\`, និង \`body\` ។

3.  **ApiService Interface:**
    -   បង្កើត Interface មួយឈ្មោះ \`ApiService\` ។
    -   កំណត់ \`suspend fun getPost(@Path("id") postId: Int): Response<Post>\` ។

4.  **RetrofitClient:**
    -   បង្កើត Object មួយឈ្មោះ \`RetrofitClient\` ។
    -   បង្កើត Retrofit Instance នៅក្នុង Object នោះ។

5.  **ViewModel:**
    -   បង្កើត \`MainViewModel\` ។
    -   ប្រើ \`viewModelScope.launch\` ដើម្បីហៅ API ។
    -   រក្សាទុក \`title\` នៅក្នុង \`State\` ដែលអាចធ្វើបច្ចុប្បន្នភាព UI បាន។

6.  **Composable UI:**
    -   បង្ហាញ \`title\` ដែលបានទទួលពី ViewModel ។
    `,
    solution: `
\`\`\`kotlin
// build.gradle (Module)
dependencies {
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.retrofit2:converter-moshi:2.9.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.1")
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.6.2")
}
\`\`\`

\`\`\`kotlin
// data/Post.kt
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class Post(
    val userId: Int,
    val id: Int,
    val title: String,
    val body: String
)
\`\`\`

\`\`\`kotlin
// network/ApiService.kt
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Path
import com.example.app.data.Post

interface ApiService {
    @GET("posts/{id}")
    suspend fun getPostById(@Path("id") postId: Int): Response<Post>
}
\`\`\`

\`\`\`kotlin
// network/RetrofitClient.kt
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory

object RetrofitClient {
    private const val BASE_URL = "https://jsonplaceholder.typicode.com/"

    private val retrofit: Retrofit by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(MoshiConverterFactory.create())
            .build()
    }

    val apiService: ApiService by lazy {
        retrofit.create(ApiService::class.java)
    }
}
\`\`\`

\`\`\`kotlin
// MainViewModel.kt
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.app.network.RetrofitClient
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class MainViewModel : ViewModel() {
    private val _postTitle = MutableStateFlow("Loading...")
    val postTitle: StateFlow<String> = _postTitle
    
    init {
        fetchPostTitle()
    }
    
    private fun fetchPostTitle() {
        viewModelScope.launch {
            try {
                val response = RetrofitClient.apiService.getPostById(1)
                if (response.isSuccessful) {
                    _postTitle.value = response.body()?.title ?: "No Title"
                } else {
                    _postTitle.value = "Error: \${response.code()}"
                }
            } catch (e: Exception) {
                _postTitle.value = "Network Error: \${e.message}"
            }
        }
    }
}
\`\`\`
`
  }
};

export default KotlinLesson5_1Content;