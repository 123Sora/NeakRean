import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson7_2Content: LessonContent = {
  title: 'Creating a News App',
  objectives: [
    'រៀបចំ Project ថ្មីសម្រាប់ News App',
    'រៀនពីរបៀបប្រើប្រាស់ Retrofit ដើម្បីហៅ News API',
    'អនុវត្តការប្រើប្រាស់ Repository Pattern',
    'បង្ហាញ List ព័ត៌មាននៅក្នុង `LazyColumn`',
    'គ្រប់គ្រង State របស់ UI (Loading, Success, Error)'
  ],
  content: `
# Creating a News App 📰

---

ការបង្កើត News App គឺជា Project ដ៏ល្អមួយដើម្បីអនុវត្តការតភ្ជាប់ API នៅក្នុង Android ។ យើងនឹងប្រើ **Retrofit** និង **Moshi** ដើម្បី Fetch Data ពី News API ហើយប្រើ **MVVM Architecture** ដើម្បីរៀបចំ Code ។

## 1. ការរៀបចំ Project

អ្នកត្រូវបន្ថែម Dependencies របស់ Retrofit, Moshi, Coil (សម្រាប់ Image Loading) និង Coroutines ។

\`\`\`groovy
dependencies {
    // Retrofit & Moshi
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.retrofit2:converter-moshi:2.9.0")
    ksp("com.squareup.moshi:moshi-kotlin-codegen:1.14.0")
    
    // Coroutines
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.1")
    
    // Coil (Image loading)
    implementation("io.coil-kt:coil-compose:2.5.0")
}
\`\`\`
ត្រូវប្រាកដថាបានបន្ថែម \`id("com.google.devtools.ksp")\` plugin ផងដែរ។

## 2. API Key

អ្នកត្រូវចុះឈ្មោះយក Free API Key ពី News API (https://newsapi.org/) ។

## 3. Data Class & ApiService

### Step 1: កំណត់ Data Class
\`\`\`kotlin
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class NewsResponse(
    val status: String,
    val articles: List<Article>
)

@JsonClass(generateAdapter = true)
data class Article(
    val title: String,
    val description: String?,
    val urlToImage: String?,
    val url: String?
)
\`\`\`

### Step 2: កំណត់ ApiService
\`\`\`kotlin
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Query

interface NewsApiService {
    @GET("top-headlines")
    suspend fun getTopHeadlines(
        @Query("country") country: String = "us",
        @Query("apiKey") apiKey: String = "YOUR_API_KEY"
    ): Response<NewsResponse>
}
\`\`\`

## 4. MVVM Implementation

-   **Repository:** ជា Class ដែលហៅ NewsApiService ។
-   **ViewModel:** ផ្ទុក State របស់ UI (Loading, Error, Data) ។
-   **UI (Composable):** បង្ហាញ UI តាម State របស់ ViewModel ។


`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Repository និង ViewModel</h3>
<p>ការគ្រប់គ្រង Data State នៅក្នុង ViewModel គឺមានសារៈសំខាន់។</p>
<pre><code class="language-kotlin">
// repository/NewsRepository.kt
class NewsRepository(private val apiService: NewsApiService) {
    suspend fun getNews(): List<Article> {
        val response = apiService.getTopHeadlines()
        return if (response.isSuccessful) {
            response.body()?.articles ?: emptyList()
        } else {
            throw Exception("API Error: \${response.code()}")
        }
    }
}

// viewmodel/NewsViewModel.kt
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.newsapp.data.Article
import com.example.newsapp.repository.NewsRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

sealed class UiState {
    object Loading : UiState()
    data class Success(val articles: List<Article>) : UiState()
    data class Error(val message: String) : UiState()
}

class NewsViewModel(private val repository: NewsRepository) : ViewModel() {
    private val _uiState = MutableStateFlow<UiState>(UiState.Loading)
    val uiState: StateFlow<UiState> = _uiState
    
    init {
        fetchNews()
    }
    
    fun fetchNews() {
        viewModelScope.launch {
            _uiState.value = UiState.Loading
            try {
                val articles = repository.getNews()
                _uiState.value = UiState.Success(articles)
            } catch (e: Exception) {
                _uiState.value = UiState.Error(e.message ?: "Unknown Error")
            }
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Retrofit ប្រើសម្រាប់អ្វីនៅក្នុង News App?',
      options: [
        'សម្រាប់ Load Images',
        'សម្រាប់ Fetch Data ពី API',
        'សម្រាប់ Parse JSON',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Retrofit គឺជា HTTP Client សម្រាប់ Fetch Data ពី API ។'
    },
    {
      question: 'តើ `Coil` គឺជាអ្វី?',
      options: [
        'ជា Library សម្រាប់ Network',
        'ជា Library សម្រាប់ Load Images',
        'ជា Library សម្រាប់ Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Coil គឺជា Image Loading Library សម្រាប់ Android ។'
    },
    {
      question: 'តើ UI State នៅក្នុង ViewModel ជួយអ្វីខ្លះ?',
      options: [
        'ជួយគ្រប់គ្រង UI ទៅតាមស្ថានភាពរបស់ Data',
        'ជួយធ្វើ Network Request',
        'ជួយរក្សាទុក Data',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'UI State ជួយគ្រប់គ្រង UI ទៅតាមស្ថានភាពរបស់ Data ដូចជា Loading, Success, Error ។'
    },
    {
      question: 'តើ `@Query` Annotation ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Query Parameters នៅក្នុង URL',
        'សម្រាប់ Path Parameters',
        'សម្រាប់ Body របស់ Request',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`@Query` ប្រើសម្រាប់ Query Parameters នៅក្នុង URL ។'
    },
    {
      question: 'តើ MVVM Architecture ក្នុង Project នេះមានប៉ុន្មាន Layer?',
      options: [
        '២',
        '៣',
        '៤',
        '៥'
      ],
      correct: 2,
      explanation: 'មាន ៤ Layers គឺ UI, ViewModel, Repository, និង Data Source (ApiService) ។'
    },
    {
      question: 'តើ `suspend fun` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីធ្វើ UI Operations',
        'ដើម្បីធ្វើ Asynchronous Operations',
        'ដើម្បីធ្វើ Synchronous Operations',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`suspend fun` ប្រើសម្រាប់ធ្វើ Asynchronous Operations ជាមួយ Coroutines ។'
    },
    {
      question: 'តើ `LazyColumn` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញ List របស់ Items',
        'បង្ហាញ Grid របស់ Items',
        'បង្ហាញ single Item',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`LazyColumn` ប្រើសម្រាប់បង្ហាញ List របស់ Items ។'
    },
    {
      question: 'តើ `Moshi` ប្រើសម្រាប់អ្វីនៅក្នុង News App?',
      options: [
        'សម្រាប់ Network Request',
        'សម្រាប់ Parse JSON Response',
        'សម្រាប់ Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Moshi ប្រើសម្រាប់ Parse JSON Response ទៅជា Kotlin Objects ។'
    },
    {
      question: 'តើ `NewsViewModel` គួរទាក់ទងដោយផ្ទាល់ជាមួយ API ដែរឬទេ?',
      options: [
        'គួរទាក់ទង',
        'មិនគួរទាក់ទងទេ',
        'បានតែពេលមាន Retrofit',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'ViewModel មិនគួរទាក់ទងដោយផ្ទាល់ជាមួយ API ទេ នេះជាការទទួលខុសត្រូវរបស់ Repository ។'
    },
    {
      question: 'តើ `sealed class` សម្រាប់ UI State ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ Code កាន់តែងាយស្រួលអាន',
        'បង្ខំឱ្យ Handle គ្រប់ State',
        'ទាំងអស់ខាងលើ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Sealed Class ធ្វើឱ្យ Code ងាយស្រួលអាននិងបង្ខំឱ្យ Handle គ្រប់ State (Loading, Success, Error) ។'
    }
  ],
  lab: {
    task: `
បង្កើត News App មួយដែល Fetch ព័ត៌មានពី News API ហើយបង្ហាញចំណងជើង, រូបភាព និង Description ។

**តម្រូវការ:**

1.  **Dependencies:**
    -   បន្ថែម Retrofit, Moshi, Coil និង Coroutines ។

2.  **API Key:**
    -   ចុះឈ្មោះយក API Key ពី News API ហើយដាក់វាចូលក្នុង Code ។

3.  **Data & Network Layer:**
    -   បង្កើត Data Class សម្រាប់ News Response និង Article ។
    -   បង្កើត \`NewsApiService\` Interface សម្រាប់ Retrofit ។
    -   បង្កើត \`RetrofitClient\` Object ។

4.  **Repository Layer:**
    -   បង្កើត \`NewsRepository\` ដែលមាន Function \`getNews()\` ។

5.  **ViewModel Layer:**
    -   បង្កើត \`NewsViewModel\` ដែលប្រើ \`StateFlow\` សម្រាប់គ្រប់គ្រង UI State ។

6.  **UI Layer:**
    -   ប្រើ \`LazyColumn\` ដើម្បីបង្ហាញ List ព័ត៌មាន។
    -   ប្រើ \`AsyncImage\` របស់ Coil ដើម្បី Load រូបភាព។
    -   បង្ហាញ UI ផ្សេងៗគ្នាសម្រាប់ Loading, Success, និង Error State ។
    `,
    solution: `
\`\`\`kotlin
// data/Article.kt
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class NewsResponse(
    val status: String,
    val totalResults: Int,
    val articles: List<Article>
)

@JsonClass(generateAdapter = true)
data class Article(
    val title: String,
    val description: String?,
    val urlToImage: String?,
    val url: String?
)

// network/NewsApiService.kt
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Query

interface NewsApiService {
    @GET("top-headlines")
    suspend fun getTopHeadlines(
        @Query("country") country: String = "us",
        @Query("apiKey") apiKey: String = "YOUR_API_KEY"
    ): Response<NewsResponse>
}

// network/RetrofitClient.kt
import com.example.newsapp.network.NewsApiService
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory

object RetrofitClient {
    private const val BASE_URL = "https://newsapi.org/v2/"
    val newsApiService: NewsApiService by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(MoshiConverterFactory.create())
            .build()
            .create(NewsApiService::class.java)
    }
}

// repository/NewsRepository.kt
import com.example.newsapp.data.Article
import com.example.newsapp.network.NewsApiService

class NewsRepository(private val apiService: NewsApiService) {
    suspend fun getNews(): List<Article> {
        val response = apiService.getTopHeadlines()
        return if (response.isSuccessful) {
            response.body()?.articles ?: emptyList()
        } else {
            throw Exception("API Error: \${response.code()}")
        }
    }
}

// viewmodel/NewsViewModel.kt
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.newsapp.data.Article
import com.example.newsapp.repository.NewsRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

sealed class UiState {
    object Loading : UiState()
    data class Success(val articles: List<Article>) : UiState()
    data class Error(val message: String) : UiState()
}

class NewsViewModel(private val repository: NewsRepository) : ViewModel() {
    private val _uiState = MutableStateFlow<UiState>(UiState.Loading)
    val uiState: StateFlow<UiState> = _uiState
    
    init {
        fetchNews()
    }
    
    fun fetchNews() {
        viewModelScope.launch {
            _uiState.value = UiState.Loading
            try {
                val articles = repository.getNews()
                _uiState.value = UiState.Success(articles)
            } catch (e: Exception) {
                _uiState.value = UiState.Error(e.message ?: "Unknown Error")
            }
        }
    }
}
\`\`\`
`
  }
};

export default KotlinLesson7_2Content;