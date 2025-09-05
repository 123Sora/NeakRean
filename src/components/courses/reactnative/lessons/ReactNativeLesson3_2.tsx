import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson3_2Content: LessonContent = {
  title: 'Stack និង Tab Navigation',
  objectives: [
    'យល់ពី Stack និង Tab Navigation',
    'រៀនពីរបៀបប្រើ Stack Navigator សម្រាប់ Hierarchical Flow',
    'រៀនពីរបៀបប្រើ Tab Navigator សម្រាប់ Non-hierarchical Flow',
    'អនុវត្តន៍ការរួមបញ្ចូលគ្នារវាង Stack និង Tab Navigator',
    'រៀនពីរបៀបកំណត់ Options សម្រាប់ Header និង Tab Bar'
  ],
  content: `
# Stack និង Tab Navigation 📋

---

នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពី Navigation Patterns ពីរដ៏សំខាន់របស់ React Navigation គឺ **Stack Navigation** និង **Tab Navigation** ។

---

## 1. Stack Navigation

**Stack Navigation** គឺស័ក្តិសមសម្រាប់ Application Flow ដែលមានលក្ខណៈ **Hierarchical** (មានលំដាប់លំដោយ)។ ឧទាហរណ៍៖
* List of products -> Product details -> Checkout screen
* Home screen -> User profile -> Settings screen
* នៅពេលអ្នក Navigate ទៅ Screen ថ្មី វាត្រូវបាន "Pushed" ចូលទៅក្នុង Stack។
* នៅពេលអ្នក Back វាត្រូវបាន "Popped" ចេញពី Stack។

* **ការដំឡើង:** \`npm install @react-navigation/native-stack\`

---

## 2. Tab Navigation

**Tab Navigation** គឺស័ក្តិសមសម្រាប់ Application Flow ដែលមានលក្ខណៈ **Non-hierarchical** (មិនមានលំដាប់លំដោយ)។ Tab Navigation ផ្តល់ឱ្យអ្នកប្រើប្រាស់នូវជម្រើសក្នុងការផ្លាស់ប្តូរទៅ Screens ផ្សេងៗគ្នាដោយផ្ទាល់ដោយគ្រាន់តែចុចលើ Tab ។ ឧទាហរណ៍៖
* Bottom tabs ដូចជា Home, Feed, Profile ។
* Top tabs ដូចជា Chats, Status, Calls។

* **ការដំឡើង Tab Navigator:**
    \`\`\`bash
    npm install @react-navigation/bottom-tabs
    \`\`\`

---

## 3. ការបង្កើត Tab Navigator

**ជំហានទី ១៖ បង្កើត Component សម្រាប់ Tab**
យើងនឹងបង្កើត Screens សម្រាប់ Tabs នីមួយៗ។

\`\`\`javascript
// src/screens/HomeScreen.js
// ... (Your Home Screen Component)

// src/screens/SettingsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}
export default SettingsScreen;
\`\`\`

**ជំហានទី ២៖ រៀបចំ Tab Navigator**
ប្រើ \`createBottomTabNavigator()\` ដើម្បីបង្កើត Tab Navigator ហើយដាក់ Screens នៅក្នុងវា។

\`\`\`javascript
// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
\`\`\`


---

## 4. ការរួមបញ្ចូលគ្នារវាង Stack និង Tab Navigator

យើងអាចដាក់ Stack Navigator នៅខាងក្នុង Tab Navigator ដើម្បីបង្កើត Application Flow ដែលស្មុគស្មាញ។ ឧទាហរណ៍៖
* អ្នកប្រើប្រាស់ចុចលើ Tab \`Feed\` (Tab Navigator)។
* នៅក្នុង Tab \`Feed\` ពួកគេអាចចុចលើ Post ដើម្បីទៅកាន់ \`Post Details Screen\` (Stack Navigator)។

**ជំហាន:**
1.  បង្កើត Stack Navigator សម្រាប់ Tab នីមួយៗ (ឧទាហរណ៍៖ Home Stack, Settings Stack)។
2.  ដាក់ Stack Navigators ទាំងនោះជា \`component\` នៅក្នុង Tab Navigator ។

\`\`\`javascript
// src/navigation/HomeStack.js
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;

// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './src/navigation/HomeStack';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="SettingsTab" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
\`\`\`
`,
  examples: [],
  quiz: [
    {
      question: 'តើ Stack Navigation ស័ក្តិសមសម្រាប់ Application Flow ប្រភេទណា?',
      options: [
        'Non-hierarchical Flow',
        'Hierarchical Flow',
        'Single Screen Flow',
        'None of the above'
      ],
      correct: 1,
      explanation: 'Stack Navigation ត្រូវបានប្រើសម្រាប់ Flows ដែលមានលំដាប់លំដោយ (Hierarchical)។'
    },
    {
      question: 'តើ Tab Navigation ស័ក្តិសមសម្រាប់ Application Flow ប្រភេទណា?',
      options: [
        'Hierarchical Flow',
        'Single Screen Flow',
        'Non-hierarchical Flow',
        'Linear Flow'
      ],
      correct: 2,
      explanation: 'Tab Navigation ត្រូវបានប្រើសម្រាប់ Flows ដែលមិនមានលំដាប់លំដោយ (Non-hierarchical)។'
    },
    {
      question: 'តើ Tab Navigator មួយណាដែលយើងបានដំឡើងនៅក្នុងមេរៀននេះ?',
      options: [
        '@react-navigation/native-stack',
        '@react-navigation/bottom-tabs',
        '@react-navigation/drawer',
        '@react-navigation/web'
      ],
      correct: 1,
      explanation: 'យើងបានដំឡើង `@react-navigation/bottom-tabs` ដើម្បីបង្កើត Bottom Tab Navigator។'
    },
    {
      question: 'តើយើងអាចដាក់ Stack Navigator នៅក្នុង Tab Navigator បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅលើ iOS', 'បានតែនៅលើ Android'],
      correct: 0,
      explanation: 'បាទ/ចាស យើងអាចដាក់ Nested Navigators ដើម្បីបង្កើត Application Flow ដែលស្មុគស្មាញ។'
    },
    {
      question: 'តើ Option មួយណាដែលប្រើដើម្បីលាក់ Header របស់ Stack Navigator?',
      options: ['headerHidden', 'hideHeader', 'headerShown: false', 'header: null'],
      correct: 2,
      explanation: '`options={{ headerShown: false }}` ត្រូវបានប្រើដើម្បីលាក់ Header។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Stack និង Tab Navigation**

បង្កើត App មួយដែលមាន Bottom Tabs ពីរគឺ **Home** និង **Profile** ។ នៅលើ Tab Home សូមបង្កើត Stack Navigation មួយទៅកាន់ Screen ទីពីរ។

**តម្រូវការ:**

1.  ដំឡើង Packages ដែលចាំបាច់សម្រាប់ Stack និង Tab Navigation។
2.  បង្កើត Screens បីគឺ \`HomeScreen.js\`, \`DetailsScreen.js\`, និង \`ProfileScreen.js\`។
3.  បង្កើត Stack Navigator មួយសម្រាប់ Screens **Home** និង **Details** ហើយដាក់ឈ្មោះថា \`HomeStack\`។
4.  បង្កើត Tab Navigator មួយហើយដាក់ \`HomeStack\` និង \`ProfileScreen\` ជា Tabs ។
5.  នៅលើ **Home Screen** បង្កើត Button មួយដែល Navigate ទៅ **Details Screen**។
6.  នៅលើ **Profile Screen** គ្រាន់តែបង្ហាញអត្ថបទ "Profile" ។
7.  ត្រូវប្រាកដថា Header របស់ Stack Navigator នៅតែបង្ហាញនៅពេល Navigate ទៅ Details Screen។
    `,
    solution: `
\`\`\`javascript
// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;

// src/screens/DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default DetailsScreen;

// src/screens/ProfileScreen.js
import React from 'react';
import { View, Text } from 'react-native';

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default ProfileScreen;

// src/navigation/HomeStack.js
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;

// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './src/navigation/HomeStack';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
\`\`\`
`
  }
};

export default ReactNativeLesson3_2Content;