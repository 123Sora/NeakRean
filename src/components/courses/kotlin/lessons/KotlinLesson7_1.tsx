import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson7_1Content: LessonContent = {
  title: 'Building a Todo App',
  objectives: [
    'រៀបចំ Project ថ្មីសម្រាប់ Todo App',
    'រៀនពីរបៀបប្រើប្រាស់ Room Database សម្រាប់ Local Data Storage',
    'អនុវត្តការប្រើប្រាស់ MVVM Architecture',
    'បង្កើត UI សម្រាប់បន្ថែម, លុប និងកែ Tasks',
    'យល់ដឹងពីរបៀបធ្វើការជាមួយ `LiveData` ឬ `StateFlow` ដើម្បី Update UI'
  ],
  content: `
# Building a Todo App 📝

---

ការបង្កើត Todo App គឺជា Project ដ៏ល្អមួយដើម្បីអនុវត្ត Concept ទាំងអស់ដែលយើងបានរៀន។ យើងនឹងប្រើ **Room Database** សម្រាប់រក្សាទុក Tasks ក្នុង Local ហើយប្រើ **MVVM Architecture** ដើម្បីបំបែក Code ឱ្យមានសណ្តាប់ធ្នាប់។

## 1. ការរៀបចំ Project

អ្នកត្រូវបន្ថែម Dependencies របស់ Room, ViewModel, និង Coroutines ទៅក្នុង File \`build.gradle\` ។

\`\`\`groovy
dependencies {
    // Room
    implementation("androidx.room:room-runtime:2.6.1")
    ksp("androidx.room:room-compiler:2.6.1")
    implementation("androidx.room:room-ktx:2.6.1")
    
    // ViewModel and LiveData/StateFlow
    implementation("androidx.lifecycle:lifecycle-viewmodel-ktx:2.7.0")
    implementation("androidx.lifecycle:lifecycle-livedata-ktx:2.7.0")
    
    // Coroutines
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.1")
}
\`\`\`
ត្រូវប្រាកដថាបានបន្ថែម \`id("com.google.devtools.ksp")\` plugin ផងដែរ។

## 2. Room Database Components

Room គឺជា Abstraction Layer លើ SQLite ។ វាមានបី Component សំខាន់ៗ៖
-   **Entity:** តំណាងឱ្យ Table នៅក្នុង Database ។
-   **DAO (Data Access Object):** Interface សម្រាប់ធ្វើ Operations (Insert, Update, Delete, Query) ។
-   **Database:** Class ដែលគ្រប់គ្រង Connection ទៅ Database ។

### Step 1: កំណត់ Entity
\`\`\`kotlin
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "tasks")
data class Task(
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,
    val title: String,
    val isCompleted: Boolean = false
)
\`\`\`

### Step 2: កំណត់ DAO
\`\`\`kotlin
import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import kotlinx.coroutines.flow.Flow

@Dao
interface TaskDao {
    @Insert
    suspend fun insertTask(task: Task)

    @Query("SELECT * FROM tasks")
    fun getAllTasks(): Flow<List<Task>>

    @Query("DELETE FROM tasks WHERE id = :taskId")
    suspend fun deleteTaskById(taskId: Int)
}
\`\`\`

### Step 3: កំណត់ Database Class
\`\`\`kotlin
import androidx.room.Database
import androidx.room.RoomDatabase

@Database(entities = [Task::class], version = 1, exportSchema = false)
abstract class AppDatabase : RoomDatabase() {
    abstract fun taskDao(): TaskDao
}
\`\`\`

## 3. MVVM Implementation

-   **Repository:** ជា Class ដែលទាក់ទងជាមួយ DAO ។
-   **ViewModel:** ផ្ទុក State និង Logic ។ វាហៅ Method របស់ Repository ។
-   **UI (Composable):** បង្ហាញទិន្នន័យពី ViewModel ។


`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Repository និង ViewModel</h3>
<p>ការបំបែក Code ទៅជា Repository និង ViewModel ជួយឱ្យ Project មានសណ្តាប់ធ្នាប់។</p>
<pre><code class="language-kotlin">
// repository/TaskRepository.kt
class TaskRepository(private val taskDao: TaskDao) {
    val allTasks: Flow<List<Task>> = taskDao.getAllTasks()
    
    suspend fun insert(task: Task) {
        taskDao.insertTask(task)
    }
}

// viewmodel/TaskViewModel.kt
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch

class TaskViewModel(private val repository: TaskRepository) : ViewModel() {
    val allTasks: Flow<List<Task>> = repository.allTasks
    
    fun addNewTask(title: String) {
        viewModelScope.launch {
            val task = Task(title = title)
            repository.insert(task)
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Room Database ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក Data នៅលើ Cloud',
        'រក្សាទុក Data ក្នុង Local',
        'ធ្វើ Network Requests',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Room Database ប្រើសម្រាប់រក្សាទុក Data ក្នុង Local ។'
    },
    {
      question: 'តើ Component ណាដែលតំណាងឱ្យ Table នៅក្នុង Room?',
      options: [
        'DAO',
        'Database',
        'Entity',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Entity តំណាងឱ្យ Table នៅក្នុង Database ។'
    },
    {
      question: 'តើ DAO គឺជាអ្វី?',
      options: [
        'ជា Data Access Object សម្រាប់ធ្វើ Database Operations',
        'ជា Class សម្រាប់ Database',
        'ជា Table នៅក្នុង Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'DAO (Data Access Object) គឺជា Interface សម្រាប់ធ្វើ Database Operations ។'
    },
    {
      question: 'តើ `@PrimaryKey(autoGenerate = true)` ធ្វើអ្វីខ្លះ?',
      options: [
        'កំណត់ Key សម្រាប់ Query',
        'បង្កើត Primary Key ដោយស្វ័យប្រវត្តិ',
        'ធ្វើឱ្យ Primary Key ជា Unique',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`@PrimaryKey(autoGenerate = true)` បង្កើត Primary Key ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ ViewModel គួរទាក់ទងដោយផ្ទាល់ជាមួយ Room DAO ដែរឬទេ?',
      options: [
        'គួរទាក់ទង',
        'មិនគួរទាក់ទងទេ',
        'បានតែពេលប្រើ Coroutines',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'ViewModel មិនគួរទាក់ទងដោយផ្ទាល់ជាមួយ DAO ទេ នេះជាការទទួលខុសត្រូវរបស់ Repository ។'
    },
    {
      question: 'តើ `Flow<List<Task>>` ផ្តល់នូវគុណសម្បត្តិអ្វី?',
      options: [
        'ផ្តល់នូវ List ដែលអាច Update ដោយស្វ័យប្រវត្តិ',
        'ផ្តល់នូវ List ដែលមិនអាច Update បាន',
        'ផ្តល់នូវ Single Object',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`Flow` ធ្វើឱ្យ Data Stream ដែលអាច Update ដោយស្វ័យប្រវត្តិនៅពេលមានការប្រែប្រួល។'
    },
    {
      question: 'តើ Coroutines ប្រើសម្រាប់អ្វីនៅក្នុង Room?',
      options: [
        'ដើម្បីធ្វើ Database Operations នៅលើ Main Thread',
        'ដើម្បីធ្វើ Database Operations នៅលើ Background Thread',
        'ដើម្បីបង្ហាញ UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Coroutines ប្រើសម្រាប់ធ្វើ Database Operations នៅលើ Background Thread ដើម្បីកុំឱ្យ App គាំង។'
    },
    {
      question: 'តើ `@Insert` Annotation ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើការ Query',
        'ធ្វើការ Delete',
        'ធ្វើការ Update',
        'ធ្វើការ Insert Data'
      ],
      correct: 3,
      explanation: '`@Insert` ប្រើសម្រាប់ Insert Data ថ្មីចូលក្នុង Database ។'
    },
    {
      question: 'តើ `exportSchema = false` នៅក្នុង `@Database` Annotation ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Export Schema',
        'សម្រាប់មិន Export Schema',
        'សម្រាប់រៀបចំ Table',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`exportSchema = false` គឺសម្រាប់មិន Export Schema ក្នុង Production ។'
    },
    {
      question: 'តើ `StateFlow` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីធ្វើ Network Request',
        'ដើម្បីផ្ទុក State ដែលអាច Update UI បាន',
        'ដើម្បីរក្សាទុក Data',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`StateFlow` ប្រើដើម្បីផ្ទុក State ដែលអាច Update UI បាន។'
    }
  ],
  lab: {
    task: `
បង្កើត Todo App មួយដែលមាន Functionality សម្រាប់បន្ថែម, លុប, និងបង្ហាញ Tasks ។

**តម្រូវការ:**

1.  **Dependencies:**
    -   បន្ថែម Room, ViewModel, និង Coroutines ។

2.  **Database Layer:**
    -   បង្កើត \`Task\` Entity, \`TaskDao\` និង \`AppDatabase\` Class ។

3.  **Repository Layer:**
    -   បង្កើត \`TaskRepository\` ដែលមាន Function សម្រាប់ \`insert\` និង \`getAllTasks\` ។

4.  **ViewModel Layer:**
    -   បង្កើត \`TaskViewModel\` ដែលមាន \`MutableStateFlow\` សម្រាប់ Tasks ។
    -   មាន Function សម្រាប់ \`addNewTask\` និង \`deleteTask\` ។

5.  **UI Layer:**
    -   ប្រើ \`TextField\` និង \`Button\` សម្រាប់បន្ថែម Task ។
    -   ប្រើ \`LazyColumn\` ដើម្បីបង្ហាញ List របស់ Tasks ។
    -   ប្រើ Icon ឬ Button សម្រាប់លុប Task ។
    `,
    solution: `
\`\`\`kotlin
// data/Task.kt
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "tasks")
data class Task(
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,
    val title: String,
    val isCompleted: Boolean = false
)

// data/TaskDao.kt
import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import kotlinx.coroutines.flow.Flow

@Dao
interface TaskDao {
    @Insert
    suspend fun insertTask(task: Task)

    @Query("SELECT * FROM tasks ORDER BY id DESC")
    fun getAllTasks(): Flow<List<Task>>

    @Query("DELETE FROM tasks WHERE id = :taskId")
    suspend fun deleteTaskById(taskId: Int)
}

// data/AppDatabase.kt
import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase

@Database(entities = [Task::class], version = 1, exportSchema = false)
abstract class AppDatabase : RoomDatabase() {
    abstract fun taskDao(): TaskDao
    
    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null
        
        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "todo_database"
                ).build()
                INSTANCE = instance
                instance
            }
        }
    }
}

// repository/TaskRepository.kt
import com.example.todoapp.data.Task
import com.example.todoapp.data.TaskDao
import kotlinx.coroutines.flow.Flow

class TaskRepository(private val taskDao: TaskDao) {
    val allTasks: Flow<List<Task>> = taskDao.getAllTasks()
    
    suspend fun insert(task: Task) {
        taskDao.insertTask(task)
    }
    
    suspend fun delete(taskId: Int) {
        taskDao.deleteTaskById(taskId)
    }
}

// viewmodel/TaskViewModel.kt
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.todoapp.data.Task
import com.example.todoapp.repository.TaskRepository
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch

class TaskViewModel(private val repository: TaskRepository) : ViewModel() {
    val allTasks: StateFlow<List<Task>> = repository.allTasks
        .stateIn(
            viewModelScope,
            SharingStarted.WhileSubscribed(5000),
            emptyList()
        )
    
    fun addNewTask(title: String) {
        viewModelScope.launch {
            repository.insert(Task(title = title))
        }
    }
    
    fun deleteTask(taskId: Int) {
        viewModelScope.launch {
            repository.delete(taskId)
        }
    }
}
\`\`\`
`
  }
};

export default KotlinLesson7_1Content;