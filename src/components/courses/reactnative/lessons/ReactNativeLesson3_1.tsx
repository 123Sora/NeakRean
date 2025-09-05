import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson3_1Content: LessonContent = {
  title: 'Basic Navigation ជាមួយ React Navigation',
  objectives: [
    'យល់ពីតម្រូវការនៃការប្រើ Navigation ក្នុង Mobile Apps',
    'ស្វែងយល់ពី React Navigation Library',
    'រៀនពីរបៀបដំឡើងនិងរៀបចំបរិស្ថាន React Navigation',
    'អនុវត្តន៍ការបង្កើត Navigation ដំបូងដោយប្រើ Stack Navigator',
    'រៀនពីរបៀបផ្លាស់ប្តូរ Screen (Navigate) និងបញ្ជូនទិន្នន័យ (Params)'
  ],
  content: `
# Basic Navigation ជាមួយ React Navigation 🗺️

---

នៅក្នុង Mobile Apps ការផ្លាស់ប្តូរពី Screen មួយទៅ Screen មួយទៀតគឺជាមុខងារមូលដ្ឋានមួយ។ នៅក្នុង React Native យើងប្រើ **React Navigation** ដែលជា Library ដ៏ពេញនិយមមួយដើម្បីគ្រប់គ្រង Navigation និង Routing ។

---

## 1. ហេតុអ្វីត្រូវប្រើ React Navigation?

React Native មិនមាន Built-in Navigation Solution ទេ ដូច្នេះយើងត្រូវប្រើ Library ខាងក្រៅ។ React Navigation គឺជា Library ដ៏ល្អបំផុតព្រោះ៖
* វាគាំទ្រ Navigation Patterns ផ្សេងៗដូចជា Stack, Tab, Drawer ជាដើម។
* វាមាន Performance ល្អនិងមាន Native Feel។
* វាមាន Community ដ៏ធំនិងឯកសារច្បាស់លាស់។
* វាអាចប្រើបានជាមួយ Functional Components និង Hooks។

---

## 2. ការដំឡើង React Navigation

ដើម្បីប្រើប្រាស់ React Navigation យើងត្រូវដំឡើង Packages ពីរ៖

1.  **Core Package:**
    \`\`\`bash
    npm install @react-navigation/native
    \`\`\`
2.  **Dependencies:** យើងត្រូវការ Packages ផ្សេងទៀតដើម្បីឱ្យ Core Package ដំណើរការបានត្រឹមត្រូវ។
    \`\`\`bash
    npm install react-native-screens react-native-safe-area-context
    \`\`\`
    * **react-native-screens:** ជួយឱ្យ Navigation កាន់តែមាន Performance លឿន។
    * **react-native-safe-area-context:** ជួយគ្រប់គ្រង Safe Area នៅលើឧបករណ៍ដូចជា iPhone X (ផ្នែក Notch)។

    * **iOS Specific:** ប្រសិនបើអ្នកប្រើ iOS សូមចូលទៅក្នុង Folder \`ios\` ហើយដំណើរការ \`pod install\`។
    \`\`\`bash
    cd ios
    pod install
    cd ..
    \`\`\`

---

## 3. Stack Navigation

**Stack Navigation** គឺជាប្រភេទ Navigation ដែលមានលក្ខណៈដូចជា Stack (គំនរ) នៃ Screens ។ នៅពេលអ្នក navigate ទៅ Screen ថ្មី វាត្រូវបានដាក់នៅលើកំពូលនៃ Stack ។ នៅពេលអ្នកត្រឡប់ថយក្រោយ Screen នោះនឹងត្រូវដកចេញពី Stack ។

* **ការដំឡើង Stack Navigator:**
    \`\`\`bash
    npm install @react-navigation/native-stack
    \`\`\`

---

## 4. ការបង្កើត Navigation ដំបូង

**ជំហានទី ១៖ រៀបចំ Root Component**
រុំ App ទាំងមូលនៅក្នុង \`<NavigationContainer>\` Component ដើម្បីគ្រប់គ្រង State របស់ Navigation។

\`\`\`javascript
// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
}
\`\`\`

**ជំហានទី ២៖ បង្កើត Stack Navigator**
ប្រើ \`createNativeStackNavigator()\` ដើម្បីបង្កើត Navigator ។

\`\`\`javascript
// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
\`\`\`

---

## 5. របៀប Navigate ទៅ Screen មួយទៀត

ដើម្បីផ្លាស់ប្តូរ Screen យើងប្រើ Hook **\`useNavigation\`** ឬ Props **\`navigation\`** ។
* **\`navigation.navigate('ScreenName')\`:** ផ្លាស់ប្តូរទៅ Screen ដែលមានឈ្មោះនោះ។
* **\`navigation.goBack()\`:** ត្រឡប់ទៅ Screen មុន។

\`\`\`javascript
// HomeScreen.js
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;
\`\`\`

---

## 6. ការបញ្ជូនទិន្នន័យរវាង Screens

យើងអាចបញ្ជូនទិន្នន័យ (Parameters) ទៅ Screen ថ្មីតាមរយៈ Method \`Maps()\` ។ ទិន្នន័យទាំងនោះនឹងមាននៅក្នុង **\`route.params\`** Props របស់ Screen ថ្មី។

\`\`\`javascript
// HomeScreen.js (Sending data)
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { itemId: 86, otherParam: 'Anything you want' })}
      />
    </View>
  );
}

export default HomeScreen;

// DetailsScreen.js (Receiving data)
import * as React from 'react';
import { View, Text } from 'react-native';

function DetailsScreen({ route }) {
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    </View>
  );
}

export default DetailsScreen;
\`\`\`
`,
  examples: [],
  quiz: [
    {
      question: 'តើ React Navigation ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'គ្រប់គ្រង State របស់ App',
        'គ្រប់គ្រង Database',
        'គ្រប់គ្រង Navigation និង Routing រវាង Screens',
        'រៀបចំ Styles របស់ Components'
      ],
      correct: 2,
      explanation: 'React Navigation គឺជា Library សម្រាប់គ្រប់គ្រងការផ្លាស់ប្តូររវាង Screens ផ្សេងៗ។'
    },
    {
      question: 'តើ Component ណាដែលត្រូវរុំ App ទាំងមូលដើម្បីប្រើ Navigation?',
      options: ['Stack.Navigator', 'NavigationContainer', 'View', 'Screen'],
      correct: 1,
      explanation: '`NavigationContainer` ត្រូវរុំ Root Component នៃ App ដើម្បីគ្រប់គ្រង State របស់ Navigation។'
    },
    {
      question: 'តើ Stack Navigation មានលក្ខណៈដូចម្តេច?',
      options: [
        'Screen ទាំងអស់ត្រូវបានដាក់ក្នុង Tabs',
        'Screens ត្រូវបានដាក់ជាគំនរ (Stack)',
        'Screens ត្រូវបានបង្ហាញជាបញ្ជី',
        'Screens ត្រូវបានលាក់'
      ],
      correct: 1,
      explanation: 'Stack Navigation ដាក់ Screens លើគ្នាដូចជាគំនរ (Stack)។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់ត្រឡប់ទៅ Screen មុន?',
      options: ['goBack()', 'navigate()', 'pop()', 'push()'],
      correct: 0,
      explanation: '`navigation.goBack()` ប្រើសម្រាប់ត្រឡប់ទៅ Screen មុនក្នុង Stack។'
    },
    {
      question: 'តើយើងអាចបញ្ជូនទិន្នន័យទៅ Screen ថ្មីដោយប្រើអ្វី?',
      options: ['State', 'Props', 'Context', 'Params'],
      correct: 3,
      explanation: 'យើងបញ្ជូនទិន្នន័យតាមរយៈ `params` នៅក្នុង Method `Maps()`។'
    },
    {
      question: 'តើ `react-native-safe-area-context` ជួយអ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'គ្រប់គ្រង Performance',
        'គ្រប់គ្រង Safe Area នៅលើឧបករណ៍ដូចជា iPhone X',
        'គ្រប់គ្រង Fonts'
      ],
      correct: 2,
      explanation: '`react-native-safe-area-context` ជួយគ្រប់គ្រងតំបន់សុវត្ថិភាពដើម្បីជៀសវាងការប៉ះទង្គិចជាមួយ Notch ឬ Status Bar។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Navigation រវាង Home និង Profile Screen**

បង្កើត App មួយដែលមាន Screens ពីរគឺ Home និង Profile ។

**តម្រូវការ:**

1.  ដំឡើង React Navigation និង Native Stack Navigator។
2.  បង្កើត Functional Component ពីរគឺ \`HomeScreen.js\` និង \`ProfileScreen.js\`។
3.  ប្រើ Stack Navigator ដើម្បីបង្កើត Navigation រវាង Screens ទាំងពីរ។
4.  នៅលើ **Home Screen** បង្កើត Button មួយដែល Navigate ទៅ **Profile Screen**។
5.  នៅលើ **Profile Screen** បង្ហាញអត្ថបទ "Profile Screen" និង Button មួយដើម្បីត្រឡប់ទៅ Home Screen វិញ។
6.  នៅលើ **Home Screen** សូមបញ្ជូនឈ្មោះអ្នកប្រើប្រាស់ (ឧទាហរណ៍៖ 'Bopha') ទៅ **Profile Screen**។
7.  នៅលើ **Profile Screen** សូមបង្ហាញឈ្មោះដែលបានបញ្ជូននោះ។

**ការណែនាំ:** រៀបចំ Folder Structure ឱ្យបានត្រឹមត្រូវដូចជា \`src/screens/\`។
    `,
    solution: `
\`\`\`javascript
// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { name: 'Bopha' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;
\`\`\`

\`\`\`javascript
// src/screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ProfileScreen({ route, navigation }) {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Text style={styles.paramText}>Hello, {name}!</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, marginBottom: 10 },
  paramText: { fontSize: 20, marginBottom: 20, color: 'blue' },
});

export default ProfileScreen;
\`\`\`

\`\`\`javascript
// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
\`\`\`
`
  }
};

export default ReactNativeLesson3_1Content;