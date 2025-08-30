import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson8_2Content: LessonContent = {
  title: 'Room Database',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Room Database',
    'ស្គាល់ពី Component របស់ Room (Entity, DAO, Database)',
    'រៀនពីរបៀបបង្កើត Room Database',
    'អនុវត្តការធ្វើ CRUD Operations',
    'យល់ដឹងពីរបៀបប្រើ Coroutines និង Flow ជាមួយ Room'
  ],
  content: `
# Room Database 🗄️

---

**Room** គឺជា Library របស់ Google ដែលជា **Abstraction Layer** លើ SQLite Database ។ វាធ្វើឱ្យការប្រើប្រាស់ Database ក្នុង Android មានភាពងាយស្រួលនិងសុវត្ថិភាពជាងការប្រើប្រាស់ SQLite ដោយផ្ទាល់។

## 1. ហេតុអ្វីត្រូវប្រើ Room?

-   **Compile-time Check:** Room ពិនិត្យ Syntax របស់ SQL Query ពេល Compile ។
-   **Structured Data:** ល្អបំផុតសម្រាប់រក្សាទុក Structured Data ។
-   **Coroutines & LiveData/Flow Support:** ងាយស្រួលធ្វើការជាមួយ Asynchronous Operations ។

## 2. Room Components

ដូចដែលបានរៀបរាប់ក្នុងមេរៀនមុន Room មានបី Component សំខាន់ៗ៖
-   **Entity:** Class ដែលតំណាងឱ្យ Table នៅក្នុង Database ។
-   **DAO (Data Access Object):** Interface ដែលមាន Method សម្រាប់ Database Operations ។
-   **Database:** Class ដែលគ្រប់គ្រង Connection ទៅ Database ។

### Step 1: កំណត់ Entity
\`\`\`kotlin
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "users")
data class User(
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,
    val name: String,
    val age: Int
)
\`\`\`
-   \`@Entity(tableName = "users")\`: កំណត់ Table Name ។
-   \`@PrimaryKey\`: កំណត់ Primary Key ។

### Step 2: កំណត់ DAO
\`\`\`kotlin
import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import androidx.room.Update
import androidx.room.Delete
import kotlinx.coroutines.flow.Flow

@Dao
interface UserDao {
    @Insert
    suspend fun insertUser(user: User)

    @Update
    suspend fun updateUser(user: User)

    @Delete
    suspend fun deleteUser(user: User)

    @Query("SELECT * FROM users")
    fun getAllUsers(): Flow<List<User>>

    @Query("SELECT * FROM users WHERE id = :id")
    suspend fun getUserById(id: Int): User?
}
\`\`\`

### Step 3: កំណត់ Database Class
\`\`\`kotlin
import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase

@Database(entities = [User::class], version = 1, exportSchema = false)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao
    
    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null
        
        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "app_database"
                ).build()
                INSTANCE = instance
                instance
            }
        }
    }
}
\`\`\`
-   \`@Database\`: កំណត់ Class នេះជា Database ។
-   \`version\`: កំណត់ Version របស់ Database ។
-   \`getDatabase\` Method ប្រើ Singleton Pattern ដើម្បីធានាថាមានតែ Instance មួយគត់របស់ Database ។

## 3. CRUD Operations ជាមួយ Coroutines

យើងប្រើ Coroutines ដើម្បីធ្វើ Database Operations នៅលើ Background Thread ។

\`\`\`kotlin
// នៅក្នុង ViewModel ឬ Repository
suspend fun saveUser(user: User) {
    AppDatabase.getDatabase(context).userDao().insertUser(user)
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`Flow\` ជាមួយ Room</h3>
<p>យើងអាចប្រើ \`Flow\` ដើម្បីទទួលបាន Data ដែលអាច Update ដោយស្វ័យប្រវត្តិ។</p>
<pre><code class="language-kotlin">
// repository/UserRepository.kt
class UserRepository(private val userDao: UserDao) {
    val allUsers: Flow<List<User>> = userDao.getAllUsers()

    suspend fun insert(user: User) {
        userDao.insertUser(user)
    }
}

// viewmodel/UserViewModel.kt
class UserViewModel(private val repository: UserRepository) : ViewModel() {
    val allUsers: Flow<List<User>> = repository.allUsers
    
    fun addNewUser(name: String, age: Int) {
        viewModelScope.launch {
            repository.insert(User(name = name, age = age))
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Room Database គឺជាអ្វី?',
      options: [
        'ជា Library សម្រាប់ Network',
        'ជា Abstraction Layer លើ SQLite',
        'ជា Library សម្រាប់ UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Room គឺជា Abstraction Layer លើ SQLite Database ។'
    },
    {
      question: 'តើ Component ណាដែលផ្ទុក SQL Queries?',
      options: [
        'Entity',
        'Database',
        'DAO',
        'Repository'
      ],
      correct: 2,
      explanation: 'DAO (Data Access Object) គឺជា Interface ដែលមាន SQL Queries ។'
    },
    {
      question: 'តើ `@PrimaryKey(autoGenerate = true)` ធ្វើអ្វីខ្លះ?',
      options: [
        'កំណត់ Primary Key តែមួយគត់',
        'បង្កើត Primary Key ដោយស្វ័យប្រវត្តិ',
        'ធ្វើឱ្យ Primary Key ជា Unique',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`@PrimaryKey(autoGenerate = true)` បង្កើត Primary Key ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `@Query` Annotation ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Read-only Operations',
        'សម្រាប់ Update Data',
        'សម្រាប់ Delete Data',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 0,
      explanation: '`@Query` ប្រើសម្រាប់ Read-only Operations ដូចជា SELECT ។'
    },
    {
      question: 'តើ Coroutines ត្រូវប្រើសម្រាប់ Database Operations ដែរឬទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលប្រើ LiveData',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Coroutines ត្រូវប្រើសម្រាប់ធ្វើ Database Operations នៅលើ Background Thread ។'
    },
    {
      question: 'តើ `@Database` Annotation ត្រូវដាក់លើ Class ប្រភេទណា?',
      options: [
        'Data Class',
        'Interface',
        'Abstract Class',
        'Enum Class'
      ],
      correct: 2,
      explanation: '`@Database` Annotation ត្រូវដាក់លើ Abstract Class ដែល Inherit ពី RoomDatabase ។'
    },
    {
      question: 'តើ `Flow` នៅក្នុង Room ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ Database Call ជា Synchronous',
        'ធ្វើឱ្យ Data Stream ដែលអាច Update ដោយស្វ័យប្រវត្តិ',
        'ធ្វើឱ្យ App គាំង',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`Flow` ធ្វើឱ្យ Data Stream ដែលអាច Update ដោយស្វ័យប្រវត្តិនៅពេលមានការប្រែប្រួល។'
    },
    {
      question: 'តើ Room ពិនិត្យ Syntax របស់ SQL Query នៅពេលណា?',
      options: [
        'នៅពេល Run-time',
        'នៅពេល Compile-time',
        'នៅពេល Test',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Room ពិនិត្យ Syntax របស់ SQL Query ពេល Compile ។'
    },
    {
      question: 'តើ `exportSchema = false` នៅក្នុង `@Database` Annotation ធ្វើអ្វីខ្លះ?',
      options: [
        'Export Schema',
        'មិន Export Schema',
        'ធ្វើឱ្យ Database មានសុវត្ថិភាព',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`exportSchema = false` គឺសម្រាប់មិន Export Schema ។'
    },
    {
      question: 'តើ `INSERT`, `UPDATE`, `DELETE` operations គួរជា Function ប្រភេទណា?',
      options: [
        'Suspend Function',
        'Return Function',
        'Regular Function',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`INSERT`, `UPDATE`, `DELETE` operations គួរតែជា Suspend Function ដើម្បីរត់នៅលើ Background Thread ។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយសម្រាប់រក្សាទុក User's Data ។

**តម្រូវការ:**

1.  **Dependencies:**
    -   បន្ថែម Room, ViewModel និង Coroutines ។

2.  **Database Layer:**
    -   បង្កើត \`User\` Entity (id, name, age)។
    -   បង្កើត \`UserDao\` ដែលមាន Method សម្រាប់ Insert និង Query ទាំងអស់។
    -   បង្កើត \`AppDatabase\` Class ។

3.  **UI:**
    -   \`EditText\` សម្រាប់ឈ្មោះ និងអាយុ។
    -   \`Button\` សម្រាប់ Add User ។
    -   \`LazyColumn\` ឬ \`RecyclerView\` សម្រាប់បង្ហាញ List របស់ Users ។

4.  **Logic:**
    -   ប្រើ ViewModel ដើម្បីគ្រប់គ្រង Data ។
    -   នៅពេលចុច Button, Insert User ថ្មីចូល Database ។
    -   បង្ហាញ Users ទាំងអស់នៅក្នុង List ។
    `,
    solution: `
\`\`\`kotlin
// data/User.kt
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "users")
data class User(
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,
    val name: String,
    val age: Int
)

// data/UserDao.kt
import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import kotlinx.coroutines.flow.Flow

@Dao
interface UserDao {
    @Insert
    suspend fun insertUser(user: User)
    
    @Query("SELECT * FROM users")
    fun getAllUsers(): Flow<List<User>>
}

// data/AppDatabase.kt
import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase

@Database(entities = [User::class], version = 1, exportSchema = false)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao

    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null

        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "user_database"
                ).build()
                INSTANCE = instance
                instance
            }
        }
    }
}

// viewmodel/UserViewModel.kt
import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.example.roomapp.data.AppDatabase
import com.example.roomapp.data.User
import kotlinx.coroutines.launch

class UserViewModel(application: Application) : AndroidViewModel(application) {
    private val userDao = AppDatabase.getDatabase(application).userDao()
    
    val allUsers = userDao.getAllUsers()
    
    fun addNewUser(name: String, age: Int) {
        viewModelScope.launch {
            val user = User(name = name, age = age)
            userDao.insertUser(user)
        }
    }
}
\`\`\`
`
  }
};

export default KotlinLesson8_2Content;