import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson3_3Content: LessonContent = {
  title: 'Advanced Navigation Techniques',
  objectives: [
    'យល់ពីរបៀបកំណត់ Options សម្រាប់ Navigation Headers',
    'រៀនពីរបៀបផ្លាស់ប្តូរ Header Title និង Styles',
    'ស្វែងយល់ពីរបៀបបង្កើត Header Buttons',
    'អនុវត្តន៍ការប្រើ `useNavigation` និង `useRoute` Hooks',
    'រៀនពីរបៀបធ្វើ Navigation ដោយគ្មាន Props'
  ],
  content: `
# Advanced Navigation Techniques 🧠

---

នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពីបច្ចេកទេសកម្រិតខ្ពស់សម្រាប់ការប្រើប្រាស់ React Navigation ។ យើងនឹងរៀនពីរបៀបកំណត់ Header Options, បង្កើត Header Buttons និងប្រើប្រាស់ Navigation Hooks ។

---

## 1. ការកំណត់ Header Options

យើងអាចកំណត់ Options ផ្សេងៗសម្រាប់ Header របស់ Screen នីមួយៗតាមរយៈ Prop **\`options\`**។

* **\`title\`:** កំណត់ចំណងជើងនៃ Header ។
* **\`headerStyle\`:** កំណត់ Styles សម្រាប់ Header Bar (ដូចជា Background Color)។
* **\`headerTintColor\`:** កំណត់ Color សម្រាប់ Button និង Text នៅក្នុង Header ។
* **\`headerTitleStyle\`:** កំណត់ Styles សម្រាប់ចំណងជើង (Title)។

\`\`\`javascript
// App.js
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  options={{
    title: 'Details Page',
    headerStyle: { backgroundColor: '#f4511e' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
  }}
/>
\`\`\`


---

## 2. Dynamic Header Options

យើងអាចកំណត់ Header Options ដោយផ្អែកលើ Props ឬ State ។
* ប្រើ Function នៅក្នុង \`options\` Prop។
* Function នោះនឹងទទួល \`route\` និង \`navigation\` ជា Arguments។

\`\`\`javascript
// src/screens/ProfileScreen.js
import React from 'react';
import { View, Text } from 'react-native';

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default ProfileScreen;

// App.js
<Stack.Screen
  name="Profile"
  component={ProfileScreen}
  options={({ route }) => ({ title: route.params.name + "'s Profile" })}
/>
\`\`\`

---

## 3. ការបង្កើត Header Buttons

យើងអាចបន្ថែម Custom Buttons ទៅក្នុង Header (ឆ្វេងឬស្តាំ) តាមរយៈ **\`headerRight\`** និង **\`headerLeft\`** Properties ។

\`\`\`javascript
// App.js
<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  }}
/>
\`\`\`

---

## 4. Navigation Hooks: \`useNavigation\` និង \`useRoute\`

ប្រសិនបើ Component មួយមិនមែនជា Screen (ឧទាហរណ៍៖ ជា Custom Component ខាងក្នុង) វាគ្មាន Props \`navigation\` និង \`route\` ទេ។ យើងអាចប្រើ Hooks ទាំងនេះដើម្បីទទួលបាន Access ទៅកាន់ Navigation និង Route Object ។

* **\`useNavigation()\`:** ត្រឡប់ Navigation Object ។
* **\`useRoute()\`:** ត្រឡប់ Route Object (មាន \`params\`) ។

**ឧទាហរណ៍:**
\`\`\`javascript
// components/CustomButton.js
import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CustomButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Home')}
    />
  );
}

export default CustomButton;
\`\`\`
`,
  examples: [],
  quiz: [
    {
      question: 'តើ Property ណាដែលប្រើដើម្បីកំណត់ Background Color របស់ Header?',
      options: ['backgroundColor', 'headerBackground', 'headerStyle', 'headerColor'],
      correct: 2,
      explanation: '`headerStyle` គឺជា Object ដែលមាន Style Properties ដូចជា `backgroundColor`។'
    },
    {
      question: 'តើ `useNavigation()` Hook ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'សម្រាប់ Screen Components តែប៉ុណ្ណោះ',
        'សម្រាប់ Non-Screen Components ដើម្បី Access ទៅ Navigation Object',
        'សម្រាប់ Access ទៅ Params តែប៉ុណ្ណោះ',
        'សម្រាប់ផ្លាស់ប្តូរ State'
      ],
      correct: 1,
      explanation: '`useNavigation()` ផ្តល់នូវ Navigation Object ទៅកាន់ Component ដែលមិនមែនជា Screen។'
    },
    {
      question: 'តើ `useRoute()` Hook ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'សម្រាប់ Access ទៅ Navigation Object',
        'សម្រាប់ Access ទៅ Params របស់ Screen',
        'សម្រាប់ផ្លាស់ប្តូរ Screen',
        'សម្រាប់គ្រប់គ្រង Header'
      ],
      correct: 1,
      explanation: '`useRoute()` ផ្តល់នូវ Route Object ដែលមាន Params ដែលត្រូវបានបញ្ជូន។'
    },
    {
      question: 'តើ `options` Prop អាចជា Function បានដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅលើ iOS', 'បានតែនៅលើ Android'],
      correct: 0,
      explanation: 'បាទ/ចាស `options` អាចជា Function ដែលត្រឡប់ Object មួយសម្រាប់ Header Options។'
    },
    {
      question: 'តើ Property ណាដែលប្រើសម្រាប់បន្ថែម Button នៅខាងស្តាំ Header?',
      options: ['headerLeft', 'headerRight', 'headerButton', 'headerAction'],
      correct: 1,
      explanation: '`headerRight` ត្រូវបានប្រើដើម្បីបន្ថែម Component នៅខាងស្តាំ Header។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Profile Header ជាមួយនឹង Header Button**

បង្កើត App មួយដែលមាន Screen តែមួយគឺ Home Screen ហើយបន្ថែម Custom Header Button ទៅវា។

**តម្រូវការ:**

1.  បង្កើត Stack Navigator ដែលមាន Home Screen តែមួយគត់។
2.  កំណត់ Options សម្រាប់ Header របស់ Home Screen ដូចខាងក្រោម៖
    * \`title\`: "My Profile"
    * \`headerStyle\`: \`backgroundColor: '#1E90FF'\`
    * \`headerTintColor\`: \`'#fff'\`
3.  ប្រើ \`headerRight\` Option ដើម្បីបន្ថែម Button មួយដែលបង្ហាញ Alert នៅពេលចុច។
4.  ដាក់ Button នោះនៅខាងស្តាំ Header ដែលមាន title "Edit"។

**ការណែនាំ:** ត្រូវប្រាកដថា Header មាន Design ស្រស់ស្អាតនិងមាន Functionality ត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`javascript
// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;

// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Alert } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Profile',
            headerStyle: {
              backgroundColor: '#1E90FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => Alert.alert('Edit Button Pressed!')}
                title="Edit"
                color="#fff"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
\`\`\`
`
  }
};

export default ReactNativeLesson3_3Content;