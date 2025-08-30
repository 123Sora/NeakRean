import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson11_2Content: LessonContent = {
  title: 'Push Notifications',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Push Notifications',
    'រៀបចំ Project ជាមួយ Firebase Cloud Messaging (FCM)',
    'រៀនពីរបៀបទទួលសារ Notification',
    'អនុវត្តការ Handle Notification Clicks',
    'យល់ដឹងពី Topic Messaging'
  ],
  content: `
# Push Notifications 🔔

---

**Push Notifications** គឺជាសារដែលត្រូវបានផ្ញើពី Backend Server ទៅកាន់ Device របស់ User ។ វាមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ App ទំនើបៗ។ **Firebase Cloud Messaging (FCM)** គឺជា Solution របស់ Google សម្រាប់ផ្ញើ Push Notifications ។

## 1. ហេតុអ្វីត្រូវប្រើ Push Notifications?

-   **Engagement:** ជួយឱ្យ User ត្រឡប់មកប្រើ App វិញ។
-   **Updates:** ផ្តល់ព័ត៌មានថ្មីៗដល់ User ។
-   **Marketing:** ប្រើសម្រាប់ Marketing Campaigns ។



## 2. ការរៀបចំ Project ជាមួយ FCM

### ជំហានទី ១: បន្ថែម Firebase ទៅ Project
-   ភ្ជាប់ Project ជាមួយ Firebase ។
-   Enable Cloud Messaging នៅក្នុង Console ។

### ជំហានទី ២: បន្ថែម Dependencies
\`\`\`groovy
dependencies {
    implementation("com.google.firebase:firebase-messaging-ktx")
}
\`\`\`

## 3. Receiving Notifications

### Step 1: បង្កើត Service Class
យើងត្រូវបង្កើត Service Class ដែល Inherit ពី \`FirebaseMessagingService\` ។
\`\`\`kotlin
// MyFirebaseMessagingService.kt
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import android.util.Log

class MyFirebaseMessagingService : FirebaseMessagingService() {
    
    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        // Handle incoming message
        Log.d("FCM", "From: \${remoteMessage.from}")
        
        // Check if message contains a notification payload.
        remoteMessage.notification?.let {
            Log.d("FCM", "Message Notification Body: \${it.body}")
        }
        
        // Handle data payload
        remoteMessage.data.isNotEmpty()?.let {
            Log.d("FCM", "Message data payload: " + remoteMessage.data)
        }
    }
    
    override fun onNewToken(token: String) {
        // Send token to your server
        Log.d("FCM", "Refreshed token: \$token")
    }
}
\`\`\`

### Step 2: កំណត់ Service ក្នុង Manifest
យើងត្រូវកំណត់ Service នៅក្នុង \`AndroidManifest.xml\` ។
\`\`\`xml
<service
    android:name=".MyFirebaseMessagingService"
    android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
\`\`\`

## 4. Topic Messaging

**Topic Messaging** គឺជាវិធីសាស្ត្រមួយសម្រាប់ផ្ញើសារទៅកាន់ Device ទាំងអស់ដែលបាន Subscribe Topic មួយ។ វាមានប្រយោជន៍សម្រាប់ផ្ញើសារទៅកាន់ User Group ។

### Subscribe to a topic
\`\`\`kotlin
import com.google.firebase.messaging.FirebaseMessaging

FirebaseMessaging.getInstance().subscribeToTopic("news")
    .addOnCompleteListener { task ->
        var msg = "Subscribed to news topic"
        if (!task.isSuccessful) {
            msg = "Subscription failed"
        }
        Log.d("FCM", msg)
    }
\`\`\`

### Unsubscribe from a topic
\`\`\`kotlin
FirebaseMessaging.getInstance().unsubscribeFromTopic("news")
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Notification Channel</h3>
<p>ចាប់ពី Android 8.0 (API 26) ឡើងទៅ យើងត្រូវបង្កើត Notification Channel ដើម្បីបង្ហាញ Notification ។</p>
<pre><code class="language-kotlin">
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.core.app.NotificationCompat

fun createNotificationChannel(context: Context) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val name = "My Channel"
        val descriptionText = "Description of My Channel"
        val importance = NotificationManager.IMPORTANCE_DEFAULT
        val channel = NotificationChannel("my_channel_id", name, importance).apply {
            description = descriptionText
        }
        
        val notificationManager: NotificationManager =
            context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.createNotificationChannel(channel)
    }
}

fun showNotification(context: Context, title: String, body: String) {
    val builder = NotificationCompat.Builder(context, "my_channel_id")
        .setSmallIcon(R.drawable.ic_launcher_foreground)
        .setContentTitle(title)
        .setContentText(body)
        .setPriority(NotificationCompat.PRIORITY_DEFAULT)
    
    val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
    notificationManager.notify(0, builder.build())
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ FCM តំណាងឱ្យអ្វី?',
      options: [
        'Firebase Cloud Messaging',
        'Firebase Core Module',
        'File Content Manager',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'FCM តំណាងឱ្យ Firebase Cloud Messaging ។'
    },
    {
      question: 'តើ Push Notifications ប្រើសម្រាប់អ្វីខ្លះ?',
      options: [
        'បង្កើន User Engagement',
        'ផ្តល់ព័ត៌មានថ្មីៗ',
        'សម្រាប់ Marketing',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: 'Push Notifications ប្រើសម្រាប់គោលបំណងជាច្រើន។'
    },
    {
      question: 'តើ Class ណាដែលត្រូវ Inherit សម្រាប់ទទួលសារ FCM?',
      options: [
        'FirebaseService',
        'FirebaseMessagingService',
        'CloudMessagingService',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'យើងត្រូវ Inherit ពី `FirebaseMessagingService` ។'
    },
    {
      question: 'តើ `onMessageReceived()` ត្រូវបានហៅនៅពេលណា?',
      options: [
        'នៅពេល App បើក',
        'នៅពេលទទួលបានសារ FCM',
        'នៅពេល App គាំង',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`onMessageReceived()` ត្រូវបានហៅនៅពេល App ទទួលបានសារ FCM ។'
    },
    {
      question: 'តើ `onNewToken()` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់បង្កើត Access Token',
        'សម្រាប់ទទួលបាន Device Token ថ្មី',
        'សម្រាប់ Refresh UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`onNewToken()` ត្រូវបានហៅនៅពេល Device Token ត្រូវបានបង្កើតឬ Refresh ។'
    },
    {
      question: 'តើ Topic Messaging មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'ផ្ញើសារទៅកាន់ User តែមួយ',
        'ផ្ញើសារទៅកាន់ User Group',
        'ផ្ញើសារទៅកាន់ Network',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Topic Messaging ប្រើសម្រាប់ផ្ញើសារទៅកាន់ User Group ។'
    },
    {
      question: 'តើ `Notification Channel` ត្រូវការចាប់ពី API Version ណា?',
      options: [
        'API 21',
        'API 23',
        'API 26',
        'API 28'
      ],
      correct: 2,
      explanation: 'Notification Channel ត្រូវការចាប់ពី Android 8.0 (API 26) ឡើងទៅ។'
    },
    {
      question: 'តើ `RemoteMessage` Object មានផ្ទុកអ្វីខ្លះ?',
      options: [
        'Notification Payload',
        'Data Payload',
        'ទាំងអស់ខាងលើ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`RemoteMessage` មានផ្ទុក Notification Payload និង Data Payload ។'
    },
    {
      question: 'តើការដាក់ Service ក្នុង `AndroidManifest.xml` មានសារៈសំខាន់អ្វី?',
      options: [
        'ធ្វើឱ្យ App ដំណើរការលឿន',
        'ធ្វើឱ្យ Android OS ស្គាល់ Service របស់យើង',
        'ជួយឱ្យ App អាច Access Network',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'ការដាក់ Service ក្នុង Manifest គឺដើម្បីប្រាប់ Android OS ឱ្យស្គាល់ Service របស់យើង។'
    },
    {
      question: 'តើ Push Notifications ត្រូវការ Internet ដែរឬទេ?',
      options: [
        'ត្រូវការ',
        'មិនត្រូវការទេ',
        'បានតែពេល Online',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Push Notifications ត្រូវការ Internet ដើម្បីផ្ញើនិងទទួលសារ។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយដែលអាចទទួល Push Notification ពី Firebase Console ។

**តម្រូវការ:**

1.  **Project:**
    -   ភ្ជាប់ Project ជាមួយ Firebase ។
    -   បន្ថែម Dependency សម្រាប់ FCM ។

2.  **Service:**
    -   បង្កើត \`MyFirebaseMessagingService\` ដែល Inherit ពី \`FirebaseMessagingService\` ។
    -   Override \`onMessageReceived\` និង \`onNewToken\` ។
    -   នៅក្នុង \`onMessageReceived\` បង្ហាញ Notification ទៅ User ។

3.  **Manifest:**
    -   កំណត់ Service នៅក្នុង \`AndroidManifest.xml\` ។

4.  **Test:**
    -   Run App ហើយទទួលបាន Device Token ពី Logcat ។
    -   ផ្ញើសារ Notification ពី Firebase Console ទៅកាន់ Device Token នោះ។
    `,
    solution: `
\`\`\`kotlin
// src/main/AndroidManifest.xml
<service
    android:name=".MyFirebaseMessagingService"
    android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>

// src/main/java/com/example/pushapp/MyFirebaseMessagingService.kt
import android.app.NotificationChannel
import android.app.NotificationManager
import android.os.Build
import android.util.Log
import androidx.core.app.NotificationCompat
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

class MyFirebaseMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        Log.d("FCM", "From: \${remoteMessage.from}")

        remoteMessage.notification?.let {
            Log.d("FCM", "Message Notification Body: \${it.body}")
            showNotification(it.title, it.body)
        }
    }

    override fun onNewToken(token: String) {
        Log.d("FCM", "Refreshed token: \$token")
        // You can send this token to your server
    }

    private fun showNotification(title: String?, body: String?) {
        val channelId = "my_channel_id"
        val notificationManager = getSystemService(NOTIFICATION_SERVICE) as NotificationManager

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(channelId, "My Channel", NotificationManager.IMPORTANCE_DEFAULT)
            notificationManager.createNotificationChannel(channel)
        }

        val notificationBuilder = NotificationCompat.Builder(this, channelId)
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setContentTitle(title)
            .setContentText(body)
            .setAutoCancel(true)

        notificationManager.notify(0, notificationBuilder.build())
    }
}
\`\`\`
`
  }
};

export default KotlinLesson11_2Content;