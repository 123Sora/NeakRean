import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson5_3Content: LessonContent = {
  title: 'REST API Integration',
  objectives: [
    'យល់ដឹងពី Architecture របស់ App ដែលមាន API Integration',
    'រៀនពីរបៀបបំបែក Code ជា Layers (UI, ViewModel, Repository, ApiService)',
    'ស្គាល់ពី Concept របស់ Repository Pattern',
    'អនុវត្តការ Integration រវាង Retrofit, Moshi, ViewModel និង Composable',
    'ដោះស្រាយ Network Error និង Loading State'
  ],
  content: `
# REST API Integration 🔗

---

ការ Integration API នៅក្នុង App ពិតប្រាកដ តម្រូវឱ្យមាន Architecture ដែលមានរចនាសម្ព័ន្ធល្អ។ យើងនឹងប្រើ **MVVM (Model-View-ViewModel)** Architecture ដែលត្រូវបានណែនាំដោយ Google ។

## 1. MVVM Architecture សម្រាប់ API Integration

-   **UI Layer (Views/Composables):** បង្ហាញ UI និងទទួល User Input ។
-   **ViewModel Layer:** ផ្ទុក UI State និង Logic ។ វាមិនដឹងពីរបៀបដែលទិន្នន័យត្រូវបាន Fetch ទេ។
-   **Repository Layer:** គ្រប់គ្រង Data Source ទាំងអស់ (Network, Database) ។ វាជាកន្លែងដែល Retrofit ត្រូវបានហៅ។
-   **Data Source Layer (ApiService):** គ្រប់គ្រងការតភ្ជាប់ទៅ API ដោយប្រើ Retrofit ។



## 2. Repository Pattern

**Repository Pattern** គឺជា Design Pattern មួយដែលបំបែក Data Fetching Logic ចេញពី Business Logic ។

-   **គុណសម្បត្តិ:**
    -   **Separation of Concerns:** បំបែក Logic នៃការទទួលបានទិន្នន័យចេញពី ViewModel ។
    -   **Offline Support:** ងាយស្រួលក្នុងការផ្លាស់ប្តូរ Data Source (ឧ. ពី Network ទៅ Local Database) ។
    -   **Testability:** ងាយស្រួលក្នុងការធ្វើ Test ព្រោះអ្នកអាច Mock Data ពី Repository ។

## 3. ការអនុវត្តជាក់ស្តែង

### Step 1: Data Class & ApiService (មេរៀនមុន)

\`\`\`kotlin
// data/Post.kt
@JsonClass(generateAdapter = true)
data class Post(
    val userId: Int,
    val id: Int,
    val title: String,
    val body: String
)

// network/ApiService.kt
interface ApiService {
    @GET("posts")
    suspend fun getPosts(): Response<List<Post>>
}
\`\`\`

### Step 2: Repository Class

\`\`\`kotlin
// repository/PostRepository.kt
class PostRepository(private val apiService: ApiService) {
    suspend fun getPosts(): List<Post> {
        val response = apiService.getPosts()
        if (response.isSuccessful) {
            return response.body() ?: emptyList()
        }
        throw Exception("Failed to fetch posts: \${response.code()}")
    }
}
\`\`\`
Repository ទទួល \`ApiService\` ជា Parameter ។ វាធ្វើការហៅ API ហើយ Handle Response ។

### Step 3: ViewModel Class

\`\`\`kotlin
// viewmodel/PostViewModel.kt
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.app.repository.PostRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class PostViewModel(private val repository: PostRepository) : ViewModel() {
    private val _posts = MutableStateFlow<List<Post>>(emptyList())
    val posts: StateFlow<List<Post>> = _posts
    
    init {
        fetchPosts()
    }
    
    fun fetchPosts() {
        viewModelScope.launch {
            try {
                _posts.value = repository.getPosts()
            } catch (e: Exception) {
                // Handle error
            }
        }
    }
}
\`\`\`
ViewModel ទទួល \`PostRepository\` ជា Parameter ។ វាហៅ Method នៅក្នុង Repository តែប៉ុណ្ណោះ។

### Step 4: Composable UI

\`\`\`kotlin
@Composable
fun PostListScreen(viewModel: PostViewModel = viewModel()) {
    val posts by viewModel.posts.collectAsState()
    
    LazyColumn {
        items(posts) { post ->
            Text(post.title, modifier = Modifier.padding(16.dp))
        }
    }
}
\`\`\`
UI គ្រាន់តែបង្ហាញទិន្នន័យពី ViewModel ដោយមិនដឹងពីរបៀបដែលទិន្នន័យត្រូវបាន Fetch ទេ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការគ្រប់គ្រង Loading State និង Error</h3>
<p>យើងអាចបន្ថែម State សម្រាប់ Loading និង Error ដើម្បីបង្ហាញ UI ផ្សេងៗគ្នា។</p>
<pre><code class="language-kotlin">
sealed class ApiState {
    object Loading : ApiState()
    data class Success(val posts: List<Post>) : ApiState()
    data class Error(val message: String) : ApiState()
}

// នៅក្នុង ViewModel
private val _apiState = MutableStateFlow<ApiState>(ApiState.Loading)
val apiState: StateFlow<ApiState> = _apiState

fun fetchPosts() {
    viewModelScope.launch {
        _apiState.value = ApiState.Loading
        try {
            val posts = repository.getPosts()
            _apiState.value = ApiState.Success(posts)
        } catch (e: Exception) {
            _apiState.value = ApiState.Error(e.message ?: "Unknown error")
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ MVVM មានន័យថាអ្វី?',
      options: [
        'Model-View-Model',
        'Model-View-ViewModel',
        'Mobile-View-ViewModel',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'MVVM តំណាងឱ្យ Model-View-ViewModel ។'
    },
    {
      question: 'តើ Repository Layer គ្រប់គ្រងអ្វីខ្លះ?',
      options: [
        'UI Logic',
        'Data Sources (Network, Database)',
        'Business Logic',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Repository Layer គ្រប់គ្រង Data Source ទាំងអស់។'
    },
    {
      question: 'តើ Repository Pattern មានគុណសម្បត្តិអ្វី?',
      options: [
        'ធ្វើឱ្យ Code ធំ',
        'បំបែក Code ឱ្យមានសណ្តាប់ធ្នាប់',
        'ធ្វើឱ្យ App លឿន',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Repository Pattern ជួយបំបែក Code ឱ្យមានសណ្តាប់ធ្នាប់។'
    },
    {
      question: 'តើ ViewModel គួរដឹងពីរបៀប Fetch ទិន្នន័យពី Network ដែរឬទេ?',
      options: [
        'គួរដឹង',
        'មិនគួរដឹងទេ',
        'បានតែពេលមាន Retrofit',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'ViewModel មិនគួរដឹងពីរបៀបដែលទិន្នន័យត្រូវបាន Fetch ទេ នេះជាការទទួលខុសត្រូវរបស់ Repository ។'
    },
    {
      question: 'តើ `ApiService` Layer មានតួនាទីអ្វីខ្លះ?',
      options: [
        'ធ្វើការតភ្ជាប់ទៅ API',
        'គ្រប់គ្រង State',
        'បង្ហាញ UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`ApiService` គ្រប់គ្រងការតភ្ជាប់ទៅ API ដោយប្រើ Retrofit ។'
    },
    {
      question: 'តើ `LazyColumn` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញ Items ក្នុង Grid',
        'បង្ហាញ Items ក្នុង List ដែលមានประสิทธิภาพ',
        'បង្ហាញ Items ក្នុង Row',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`LazyColumn` ប្រើសម្រាប់បង្ហាញ List នៃ Items ដែលមានលក្ខណៈ Effecient ។'
    },
    {
      question: 'តើ `ApiState` Sealed Class ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីគ្រប់គ្រង UI State ដូចជា Loading, Success, Error',
        'ដើម្បីគ្រប់គ្រង Database',
        'ដើម្បីគ្រប់គ្រង Network',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Sealed Class ដូចជា `ApiState` ត្រូវបានប្រើដើម្បីតំណាងឱ្យ State ផ្សេងៗរបស់ API Call ។'
    },
    {
      question: 'តើ UI Layer គួរទាក់ទងដោយផ្ទាល់ជាមួយ Repository Layer ដែរឬទេ?',
      options: [
        'គួរទាក់ទង',
        'មិនគួរទាក់ទងទេ',
        'បានតែពេលមានទិន្នន័យតិច',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'UI Layer គួរតែទាក់ទងជាមួយ ViewModel តែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ MVVM  Architecture ជួយអ្វីខ្លះក្នុងការអភិវឌ្ឍ App?',
      options: [
        'ធ្វើឱ្យ App កាន់តែធំ',
        'ធ្វើឱ្យ Code កាន់តែពិបាកអាន',
        'ធ្វើឱ្យ Code ងាយស្រួលក្នុងការ Maintenance និង Test',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'MVVM ជួយឱ្យ Code មានរចនាសម្ព័ន្ធល្អ ងាយស្រួលក្នុងការ Maintenance និង Test ។'
    },
    {
      question: 'តើ `viewModelScope` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់រត់ Coroutine ដែលមាននៅក្នុង ViewModel',
        'សម្រាប់រត់ Coroutine ដែលមាននៅក្នុង UI',
        'សម្រាប់រត់ Network Request',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`viewModelScope` គឺជា Coroutine Scope ដែលត្រូវបានកំណត់ដោយ ViewModel ។'
    }
  ],
  lab: {
    task: `
បង្កើត App ដែល Fetch List របស់ Posts ពី \`https://jsonplaceholder.typicode.com/posts\` ហើយបង្ហាញចំណងជើងទាំងអស់នៅលើ \`LazyColumn\` ។

**តម្រូវការ:**

1.  **Architecture:**
    -   រៀបចំ Code ជា Layers ដូចក្នុងមេរៀន៖ \`data\`, \`network\`, \`repository\`, និង \`viewmodel\` ។

2.  **Files:**
    -   **\`Post.kt\`**: Data Class សម្រាប់ Post ។
    -   **\`ApiService.kt\`**: Interface សម្រាប់ Retrofit ។
    -   **\`RetrofitClient.kt\`**: Object សម្រាប់ Retrofit Instance ។
    -   **\`PostRepository.kt\`**: Repository Class ។
    -   **\`PostViewModel.kt\`**: ViewModel Class ។
    -   **\`PostListScreen.kt\`**: Composable UI ។

3.  **Logic:**
    -   នៅក្នុង \`ApiService\`, បង្កើត Function \`suspend fun getPosts(): Response<List<Post>>\` ។
    -   នៅក្នុង \`PostRepository\`, ហៅ Function \`getPosts()\` ពី \`ApiService\` ។
    -   នៅក្នុង \`PostViewModel\`, ហៅ Function ពី \`PostRepository\` ហើយរក្សាទុកលទ្ធផលក្នុង StateFlow ។
    -   នៅក្នុង \`PostListScreen\`, ប្រើ \`LazyColumn\` ដើម្បីបង្ហាញ List របស់ Posts ។

**ការណែនាំ:** ត្រូវប្រើ \`MoshiConverterFactory\` នៅក្នុង \`RetrofitClient\` ។
    `,
    solution: `
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
import com.example.app.data.Post
import retrofit2.Response
import retrofit2.http.GET

interface ApiService {
    @GET("posts")
    suspend fun getPosts(): Response<List<Post>>
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
// repository/PostRepository.kt
import com.example.app.data.Post
import com.example.app.network.ApiService

class PostRepository(private val apiService: ApiService) {
    suspend fun getPosts(): List<Post> {
        val response = apiService.getPosts()
        if (response.isSuccessful) {
            return response.body() ?: emptyList()
        }
        throw Exception("Failed to fetch posts")
    }
}
\`\`\`

\`\`\`kotlin
// viewmodel/PostViewModel.kt
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.app.data.Post
import com.example.app.repository.PostRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class PostViewModel(private val repository: PostRepository) : ViewModel() {
    private val _posts = MutableStateFlow<List<Post>>(emptyList())
    val posts: StateFlow<List<Post>> = _posts
    
    init {
        fetchPosts()
    }
    
    fun fetchPosts() {
        viewModelScope.launch {
            try {
                val posts = repository.getPosts()
                _posts.value = posts
            } catch (e: Exception) {
                // Handle error
                _posts.value = emptyList()
            }
        }
    }
}
\`\`\`

\`\`\`kotlin
// MainActivity.kt or PostListScreen.kt
import androidx.activity.viewModels
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModelProvider
import com.example.app.network.RetrofitClient
import com.example.app.repository.PostRepository
import com.example.app.viewmodel.PostViewModel

@Composable
fun PostListScreen(viewModel: PostViewModel = viewModel(factory = PostViewModelFactory())) {
    val posts by viewModel.posts.collectAsState()
    
    LazyColumn {
        items(posts) { post ->
            Text(post.title, modifier = Modifier.padding(16.dp))
        }
    }
}

class PostViewModelFactory : ViewModelProvider.Factory {
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(PostViewModel::class.java)) {
            val repository = PostRepository(RetrofitClient.apiService)
            @Suppress("UNCHECKED_CAST")
            return PostViewModel(repository) as T
        }
        throw IllegalArgumentException("Unknown ViewModel class")
    }
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    PostListScreen(viewModel = PostViewModel(PostRepository(RetrofitClient.apiService)))
}
\`\`\`
`
  }
};

export default KotlinLesson5_3Content;