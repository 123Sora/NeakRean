import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson6_2Content: LessonContent = {
  title: 'Push Notifications',
  objectives: [
    'យល់ពីសារៈសំខាន់នៃ Push Notifications',
    'ស្គាល់ Library ដ៏ពេញនិយមសម្រាប់ Push Notifications',
    'រៀនពីរបៀបដំឡើងនិងរៀបចំបរិស្ថានសម្រាប់ Push Notifications',
    'អនុវត្តន៍ការទទួលបាន Device Token',
    'រៀនពីរបៀបបង្កើត Local Notifications',
    'ស្វែងយល់ពីរបៀបដែល Remote Notifications ដំណើរការ'
  ],
  content: `
# Push Notifications 🔔

---

**Push Notifications** គឺជាសារដែលផ្ញើដោយ Server ទៅកាន់ឧបករណ៍របស់អ្នកប្រើប្រាស់។ ពួកវាត្រូវបានប្រើដើម្បីប្រាប់អ្នកប្រើប្រាស់អំពីព្រឹត្តិការណ៍ថ្មីៗ ទោះបីជា App របស់ពួកគេមិនកំពុងដំណើរការក៏ដោយ។

## 1. ប្រភេទ Push Notifications

* **Local Notifications:** ត្រូវបានបង្កើតនិងបង្ហាញដោយ App ផ្ទាល់។ ឧទាហរណ៍៖ ការរំលឹកពី Todo List ឬ Alarm ។
* **Remote Notifications:** ត្រូវបានផ្ញើពី Server (Backend) ទៅកាន់ឧបករណ៍។ ឧទាហរណ៍៖ ការជូនដំណឹងពី Facebook ឬ News App ។

## 2. Push Notification Library

ការបង្កើត Push Notification ពី Native Code គឺមានភាពស្មុគស្មាញ។ ដូច្នេះយើងប្រើ Libraries ដូចជា **\`@react-native-firebase/messaging\`** ដែលជា Library ដ៏ពេញនិយមបំផុតសម្រាប់ Push Notifications ជាមួយ Firebase ។

### ជំហានទី ១៖ ដំឡើង Firebase

1.  បង្កើត Project នៅលើ Firebase Console។
2.  ដំឡើង Firebase SDKs នៅក្នុង Project របស់អ្នក។ (សូមមើល Firebase Documentation សម្រាប់ព័ត៌មានលម្អិត)។

### ជំហានទី ២៖ ដំឡើង Library

\`\`\`bash
npm install @react-native-firebase/app
npm install @react-native-firebase/messaging
\`\`\`

### ជំហានទី ៣៖ រៀបចំបរិស្ថាន

* **Android:**
    1.  នៅក្នុង \`android/build.gradle\` បន្ថែម \`google-services\` plugin ។
    2.  នៅក្នុង \`android/app/build.gradle\` បន្ថែម \`apply plugin: 'com.google.gms.google-services'\` ។
* **iOS:**
    1.  ដំឡើង Pods (\`cd ios && pod install\`)។
    2.  បើក Project នៅក្នុង Xcode ហើយ Enable \`Push Notifications\` នៅក្នុង \`Signing & Capabilities\` ។

## 3. Local Notifications

Local Notifications មិនទាមទារ Server ទេ។ សម្រាប់ Android យើងអាចប្រើ \`Notifee\` Library ។

\`\`\`bash
npm install notifee
\`\`\`

**ឧទាហរណ៍:**
\`\`\`javascript
// src/components/LocalNotification.js
import React from 'react';
import { Button } from 'react-native';
import notifee from '@notifee/react-native';

async function onDisplayNotification() {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: 'Local Notification',
    body: 'This is a local notification from your app.',
    android: {
      channelId,
      smallIcon: 'ic_launcher',
    },
  });
}

const LocalNotification = () => {
  return (
    <Button
      title="Show Local Notification"
      onPress={() => onDisplayNotification()}
    />
  );
};

export default LocalNotification;
\`\`\`

## 4. Remote Notifications

សម្រាប់ Remote Notifications យើងត្រូវធ្វើតាមជំហានទាំងនេះ៖
1.  **Request Permission:** សុំការអនុញ្ញាតពីអ្នកប្រើប្រាស់ដើម្បីទទួល Notifications ។
2.  **Get Device Token:** ទទួលបាន \`FCM token\` ដែលជា Identifier របស់ឧបករណ៍។
3.  **Send Token to Server:** បញ្ជូន Token ទៅកាន់ Server របស់អ្នក។
4.  **Listen for Messages:** រង់ចាំសារដែលបានផ្ញើពី Server ។

**ឧទាហរណ៍:**
\`\`\`javascript
// App.js
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

function App() {
  useEffect(() => {
    // Request permission on iOS
    messaging().requestPermission();

    // Get the device token
    messaging()
      .getToken()
      .then(token => {
        console.log('FCM Token:', token);
        // Here you would send the token to your server
      });

    // Listen for messages when the app is in foreground
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, []);

  // ... (Your other app components)
}
\`\`\`
`,
  examples: [],
  quiz: [
    {
      question: 'តើអ្វីទៅជា Push Notifications?',
      options: [
        'សារដែលបង្ហាញនៅក្នុង App',
        'សារដែលផ្ញើពី Server ទៅឧបករណ៍',
        'សារដែលផ្ញើពីឧបករណ៍មួយទៅឧបករណ៍មួយទៀត',
        'សារដែលបង្កើតដោយ JavaScript'
      ],
      correct: 1,
      explanation: 'Push Notifications គឺជាសារដែលត្រូវបានផ្ញើពី Server ទៅកាន់ឧបករណ៍របស់អ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើអ្វីទៅជាភាពខុសគ្នារវាង Local និង Remote Notifications?',
      options: [
        'Local ត្រូវបានបង្កើតដោយ App រីឯ Remote ត្រូវបានផ្ញើពី Server',
        'Local ដំណើរការតែនៅលើ Android រីឯ Remote ដំណើរការតែនៅលើ iOS',
        'Local មិនទាមទារ Permission រីឯ Remote ទាមទារ',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 0,
      explanation: 'Local Notifications ត្រូវបានបង្កើតដោយ App ផ្ទាល់ រីឯ Remote Notifications ត្រូវបានផ្ញើពី Server។'
    },
    {
      question: 'តើ `FCM Token` គឺជាអ្វី?',
      options: [
        'លេខសម្ងាត់របស់ App',
        'Identifier របស់ឧបករណ៍សម្រាប់ផ្ញើ Notifications',
        'លេខសម្គាល់របស់ Server',
        'ប្រភេទ Notification'
      ],
      correct: 1,
      explanation: '`FCM Token` គឺជា Unique Identifier របស់ឧបករណ៍ដែលត្រូវបានប្រើដើម្បីកំណត់គោលដៅសម្រាប់ការផ្ញើសារ។'
    },
    {
      question: 'តើយើងប្រើ Hook មួយណាដើម្បីស្តាប់ Messages ដែលមកដល់?',
      options: ['useCallback', 'useEffect', 'onMessage', 'onRequest'],
      correct: 2,
      explanation: 'Method `messaging().onMessage()` ត្រូវបានប្រើដើម្បីស្តាប់សារដែលមកដល់នៅពេល App កំពុងដំណើរការនៅ Foreground។'
    },
    {
      question: 'តើយើងត្រូវធ្វើអ្វីមុននឹងប្រើ Push Notifications?',
      options: [
        'រៀបចំ Project ជាមួយ Firebase',
        'បង្កើត Database',
        'បង្កើត Native Module',
        'គ្មានអ្វីទេ'
      ],
      correct: 0,
      explanation: 'យើងត្រូវរៀបចំ Project របស់អ្នកជាមួយ Firebase ជាមុនសិន។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្ហាញ Local Notification**

ប្រើ Library **\`notifee\`** ដើម្បីបង្កើត Component មួយដែលមាន Button សម្រាប់បង្ហាញ Local Notification ។

**តម្រូវការ:**

1.  ដំឡើង Library \`notifee\` ។
2.  បង្កើត Component មួយឈ្មោះ \`ReminderNotification\`។
3.  ប្រើ \`onDisplayNotification()\` Function ដែលមាននៅក្នុងមេរៀនដើម្បីបង្កើតនិងបង្ហាញ Local Notification ។
4.  ដាក់ Button មួយដែលមាន Title "Set Reminder" ។
5.  នៅពេលចុច Button នោះ សូមហៅ Function \`onDisplayNotification()\` ។

**ការណែនាំ:** ត្រូវប្រាកដថាអ្នកបានអនុញ្ញាត Notification Permission នៅក្នុង Device Settings ។
    `,
    solution: `
\`\`\`javascript
// src/components/ReminderNotification.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import notifee from '@notifee/react-native';

async function onDisplayNotification() {
  try {
    // Request permission (optional, but good practice)
    await notifee.requestPermission();

    // Create a channel for notifications (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      vibration: true,
      sound: 'default'
    });

    // Display the notification
    await notifee.displayNotification({
      title: 'ការរំលឹក',
      body: 'នេះគឺជាការរំលឹកពីកម្មវិធីរបស់អ្នក។',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // default icon
        color: '#9c27b0',
        pressAction: {
          id: 'default',
        },
      },
      ios: {
        sound: 'default'
      }
    });
    console.log('Notification displayed!');
  } catch (error) {
    console.error("Failed to display notification:", error);
  }
}

const ReminderNotification = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Set Reminder"
        onPress={onDisplayNotification}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReminderNotification;
\`\`\`
`
  }
};

export default ReactNativeLesson6_2Content;