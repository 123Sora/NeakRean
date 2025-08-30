import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson11_1Content: LessonContent = {
  title: 'Firebase Realtime Database',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Firebase Realtime Database',
    'រៀបចំ Project ជាមួយ Realtime Database',
    'រៀនពីរបៀបរក្សាទុកនិងអានទិន្នន័យ',
    'ស្គាល់ពីការធ្វើ Data Synchronization',
    'អនុវត្តការបង្កើត Chat App សាមញ្ញ'
  ],
  content: `
# Firebase Realtime Database 🚀

---

**Firebase Realtime Database** គឺជា Cloud-hosted Database ដែលរក្សាទុកទិន្នន័យជា **JSON** ។ ភាពពិសេសរបស់វាគឺវា **Synchronize** ទិន្នន័យរវាង Client ទាំងអស់ក្នុងពេលពិត (Realtime) ។ នៅពេលទិន្នន័យផ្លាស់ប្តូរនៅលើ Device ណាមួយ វានឹង Update ដោយស្វ័យប្រវត្តិនៅលើ Device ផ្សេងទៀតដែលបានភ្ជាប់។

## 1. ហេតុអ្វីត្រូវប្រើ Realtime Database?

-   **Realtime Data:** ល្អបំផុតសម្រាប់ App ដែលទាមទារ Data Updates ភ្លាមៗ (ដូចជា Chat App ឬ Game) ។
-   **Offline Support:** រក្សាទុក Cache ទិន្នន័យនៅក្នុង Local ហើយ Synchronize វិញពេល Online ។
-   **ងាយស្រួលប្រើ:** ផ្តល់នូវ SDKs ដែលងាយស្រួល Implement ។

## 2. ការរៀបចំ Project

### ជំហានទី ១: បន្ថែម Firebase ទៅ Project
-   ចូលទៅ Firebase Console ហើយបង្កើត Project ថ្មី។
-   Enable Realtime Database នៅក្នុង Console ។

### ជំហានទី ២: បន្ថែម Dependencies
\`\`\`groovy
dependencies {
    implementation("com.google.firebase:firebase-database-ktx")
}
\`\`\`

## 3. ការអាននិងសរសេរទិន្នន័យ

### Step 1: ទទួលបាន Instance របស់ Database
\`\`\`kotlin
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.ktx.database
import com.google.firebase.ktx.Firebase

private lateinit var database: DatabaseReference

// នៅក្នុង onCreate()
database = Firebase.database.reference
\`\`\`

### Step 2: សរសេរទិន្នន័យ
យើងប្រើ \`setValue()\` ដើម្បីសរសេរទិន្នន័យទៅកាន់ Path ដែលបានកំណត់។
\`\`\`kotlin
data class User(val name: String, val email: String)

fun writeNewUser(userId: String, name: String, email: String) {
    val user = User(name, email)
    database.child("users").child(userId).setValue(user)
}
\`\`\`

### Step 3: អានទិន្នន័យ
យើងប្រើ \`ValueEventListener\` ដើម្បីស្តាប់ការប្រែប្រួលរបស់ទិន្នន័យ។
\`\`\`kotlin
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.ValueEventListener

fun readUser(userId: String) {
    val userListener = object : ValueEventListener {
        override fun onDataChange(snapshot: DataSnapshot) {
            val user = snapshot.getValue(User::class.java)
            // ... update UI with user data
        }

        override fun onCancelled(error: DatabaseError) {
            // ... handle error
        }
    }
    database.child("users").child(userId).addValueEventListener(userListener)
}
\`\`\`
-   \`onDataChange\`: ត្រូវបានហៅនៅពេលទិន្នន័យផ្លាស់ប្តូរ។
-   \`addValueEventListener\`: ធ្វើការស្តាប់ជានិច្ចរាល់ពេលមានការផ្លាស់ប្តូរ។

## 4. ការ Update ទិន្នន័យ

យើងប្រើ \`updateChildren()\` សម្រាប់ Update ទិន្នន័យដោយមិនប៉ះពាល់ដល់ Field ផ្សេងទៀត។
\`\`\`kotlin
fun updateUserName(userId: String, newName: String) {
    val updates = mapOf(
        "name" to newName
    )
    database.child("users").child(userId).updateChildren(updates)
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Chat Room</h3>
<p>យើងអាចប្រើ Realtime Database សម្រាប់បង្កើត Chat Room ដោយប្រើ \`push()\` ដើម្បីបង្កើត Unique ID ។</p>
<pre><code class="language-kotlin">
data class Message(val sender: String? = null, val content: String? = null)

fun sendMessage(sender: String, content: String) {
    val message = Message(sender, content)
    database.child("messages").push().setValue(message)
}

fun listenForMessages() {
    database.child("messages").addValueEventListener(object: ValueEventListener {
        override fun onDataChange(snapshot: DataSnapshot) {
            val messages = mutableListOf<Message>()
            for (messageSnapshot in snapshot.children) {
                val message = messageSnapshot.getValue(Message::class.java)
                message?.let { messages.add(it) }
            }
            // ... update chat UI
        }
        override fun onCancelled(error: DatabaseError) {}
    })
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Firebase Realtime Database រក្សាទុកទិន្នន័យជា Format អ្វី?',
      options: [
        'SQL',
        'JSON',
        'XML',
        'CSV'
      ],
      correct: 1,
      explanation: 'Firebase Realtime Database រក្សាទុកទិន្នន័យជា JSON Tree ។'
    },
    {
      question: 'តើ Realtime Database មានលក្ខណៈពិសេសអ្វី?',
      options: [
        'Data updates in real-time',
        'Offline support',
        'All of the above',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Realtime Database ផ្តល់នូវ Realtime Data Updates និង Offline Support ។'
    },
    {
      question: 'តើ `setValue()` ធ្វើអ្វី?',
      options: [
        'Update តែ Field មួយ',
        'សរសេរឬ Overwrite ទិន្នន័យនៅ Path ដែលបានកំណត់',
        'លុបទិន្នន័យ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`setValue()` សរសេរឬ Overwrite ទិន្នន័យនៅ Path ដែលបានកំណត់។'
    },
    {
      question: 'តើ `updateChildren()` មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'លុបទិន្នន័យ',
        'Update ទិន្នន័យដោយមិនប៉ះពាល់ដល់ Field ផ្សេងទៀត',
        'សរសេរទិន្នន័យថ្មី',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`updateChildren()` Update ទិន្នន័យដោយមិនប៉ះពាល់ដល់ Field ផ្សេងទៀត។'
    },
    {
      question: 'តើ `ValueEventListener` ធ្វើអ្វី?',
      options: [
        'Listen សម្រាប់ការផ្លាស់ប្តូរទិន្នន័យតែម្តង',
        'Listen សម្រាប់ការផ្លាស់ប្តូរទិន្នន័យជានិច្ច',
        'Listen សម្រាប់ Error',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`ValueEventListener` Listen សម្រាប់ការផ្លាស់ប្តូរទិន្នន័យជានិច្ច។'
    },
    {
      question: 'តើ `push()` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់លុបទិន្នន័យ',
        'សម្រាប់បង្កើត Unique ID',
        'សម្រាប់ Update ទិន្នន័យ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`push()` ប្រើសម្រាប់បង្កើត Unique ID ដែលមានលក្ខណៈពិសេសសម្រាប់ Node ថ្មី។'
    },
    {
      question: 'តើ Realtime Database ប្រើសម្រាប់ App ប្រភេទណា?',
      options: [
        'App ដែលត្រូវការ Data Updates ភ្លាមៗ',
        'App ដែលត្រូវការ Local Data',
        'App ដែលត្រូវការ Complex Queries',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Realtime Database ល្អបំផុតសម្រាប់ App ដែលត្រូវការ Data Updates ភ្លាមៗ ដូចជា Chat App ។'
    },
    {
      question: 'តើទិន្នន័យក្នុង Realtime Database ត្រូវបានរក្សាទុកដូចម្តេច?',
      options: [
        'ជា Table',
        'ជា Tree of JSON nodes',
        'ជា Key-Value Pair',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'ទិន្នន័យក្នុង Realtime Database ត្រូវបានរក្សាទុកជា Tree of JSON nodes ។'
    },
    {
      question: 'តើ `onDataChange` ត្រូវបានហៅនៅពេលណា?',
      options: [
        'នៅពេលមាន Error',
        'នៅពេលទិន្នន័យផ្លាស់ប្តូរ',
        'នៅពេល App បើកតែម្តង',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`onDataChange` ត្រូវបានហៅនៅពេលទិន្នន័យផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Realtime Database ត្រូវការ Connection ដែរឬទេ?',
      options: [
        'ត្រូវការជានិច្ច',
        'មិនត្រូវការទេ',
        'ត្រូវការតែពេល Offline',
        'ត្រូវការតែពេល Online សម្រាប់ការ Synchronize'
      ],
      correct: 3,
      explanation: 'វាត្រូវការ Connection តែពេល Online សម្រាប់ការ Synchronize ទិន្នន័យ។'
    }
  ],
  lab: {
    task: `
បង្កើត Simple Chat App ដោយប្រើ Firebase Realtime Database ។

**តម្រូវការ:**

1.  **Project:**
    -   ភ្ជាប់ Project ជាមួយ Firebase ។
    -   Enable Realtime Database ។

2.  **UI:**
    -   \`EditText\` សម្រាប់ Input Message ។
    -   \`Button\` សម្រាប់ Send Message ។
    -   \`RecyclerView\` សម្រាប់បង្ហាញ Messages ។

3.  **Logic:**
    -   នៅពេលចុច Button, យក Text ពី \`EditText\` ហើយរក្សាទុកទៅក្នុង Database ។
    -   ប្រើ \`push()\` ដើម្បីបង្កើត Unique ID សម្រាប់ Message នីមួយៗ។
    -   Listen សម្រាប់ Messages ថ្មីពី Database ហើយបង្ហាញវានៅក្នុង \`RecyclerView\` ។
    `,
    solution: `
\`\`\`kotlin
// data/Message.kt
data class Message(
    val sender: String? = null,
    val content: String? = null,
    val timestamp: Long = System.currentTimeMillis()
)

// MainActivity.kt
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.realtimechatapp.data.Message
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.ValueEventListener
import com.google.firebase.database.ktx.database
import com.google.firebase.ktx.Firebase

class MainActivity : AppCompatActivity() {

    private lateinit var database: DatabaseReference
    private lateinit var messageEditText: EditText
    private lateinit var sendButton: Button
    private lateinit var recyclerView: RecyclerView
    private lateinit var messageAdapter: MessageAdapter
    private val messages = mutableListOf<Message>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        database = Firebase.database.reference.child("messages")

        messageEditText = findViewById(R.id.message_edit_text)
        sendButton = findViewById(R.id.send_button)
        recyclerView = findViewById(R.id.messages_recycler_view)

        messageAdapter = MessageAdapter(messages)
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = messageAdapter

        sendButton.setOnClickListener {
            val content = messageEditText.text.toString()
            if (content.isNotEmpty()) {
                val message = Message(sender = "User1", content = content)
                database.push().setValue(message)
                messageEditText.text.clear()
            }
        }

        listenForMessages()
    }

    private fun listenForMessages() {
        database.addValueEventListener(object : ValueEventListener {
            override fun onDataChange(snapshot: DataSnapshot) {
                messages.clear()
                for (messageSnapshot in snapshot.children) {
                    val message = messageSnapshot.getValue(Message::class.java)
                    message?.let { messages.add(it) }
                }
                messages.sortBy { it.timestamp }
                messageAdapter.notifyDataSetChanged()
                recyclerView.scrollToPosition(messages.size - 1)
            }

            override fun onCancelled(error: DatabaseError) {
                // ... handle error
            }
        })
    }
}
\`\`\`
`
  }
};

export default KotlinLesson11_1Content;