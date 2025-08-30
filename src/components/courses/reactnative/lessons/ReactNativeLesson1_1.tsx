import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី React Native',
  objectives: [
    'យល់ដឹងអំពី React Native និងគោលបំណងរបស់វា',
    'ស្វែងយល់ពីលក្ខណៈពិសេសនិងអត្ថប្រយោជន៍នៃ React Native',
    'រៀនអំពីស្ថាបត្យកម្មនិងរបៀបដំណើរការរបស់ React Native',
    'ស្គាល់ជំហានដំឡើងបរិស្ថានអភិវឌ្ឍន៍ React Native',
    'អនុវត្តន៍ការបង្កើត React Native App សាមញ្ញមួយ'
  ],
  content: `
# ណែនាំអំពី React Native 📱✨

---

**React Native** គឺជា Framework ដែលបង្កើតឡើងដោយ Facebook សម្រាប់អភិវឌ្ឍកម្មវិធីទូរស័ព្ទ Cross-Platform ដោយប្រើ JavaScript និង React។ វាអនុញ្ញាតឱ្យអ្នកបង្កើតកម្មវិធីសម្រាប់ iOS និង Android ដោយប្រើ Codebase តែមួយ។ នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពីមូលដ្ឋាននៃ React Native និងរបៀបចាប់ផ្តើមបង្កើត App។

---

## 1. អ្វីទៅជា React Native?

React Native គឺជា Framework ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត Mobile Apps ដែលមានលក្ខណៈស្រដៀងនឹង Native Apps ដោយប្រើ JavaScript។ វាប្រើ React (Library សម្រាប់បង្កើត UI) ដើម្បីបង្កើត Components ដែល Render ជា Native UI Elements។

**លក្ខណៈពិសេសរបស់ React Native:**
- **Cross-Platform:** សរសេរ Code ម្តង ដំណើរការលើ iOS និង Android។
- **Hot Reload:** អនុញ្ញាតឱ្យអ្នកឃើញការផ្លាស់ប្តូរភ្លាមៗនៅពេលអភិវឌ្ឍ។
- **Native Performance:** ប្រើ Native Components ដើម្បីធានា Performance ខ្ពស់។
- **Rich Ecosystem:** មាន Libraries និង Packages ជាច្រើននៅ npm។
- **Community Support:** មានឯកសារនិងសហគមន៍អ្នកអភិវឌ្ឍដ៏ធំ។

React Native ត្រូវបានប្រើដោយក្រុមហ៊ុនធំៗដូចជា Facebook, Instagram, និង Airbnb។

---

## 2. អត្ថប្រយោជន៍នៃ React Native

- **Code Reusability:** អាចប្រើ Code ដូចគ្នាសម្រាប់ iOS និង Android ដែលជួយសន្សំពេលវេលា។
- **Fast Development:** Hot Reload និង React Components ធ្វើឱ្យការអភិវឌ្ឍលឿន។
- **Native Integration:** អាចភ្ជាប់ជាមួយ Native Modules សម្រាប់ Features ដូចជា Camera ឬ GPS។
- **Large Community:** មានឧបករណ៍និងឯកសារជាច្រើននៅ reactnative.dev និង npm។

---

## 3. ស្ថាបត្យកម្មនៃ React Native

React Native ដំណើរការដោយប្រើ **Bridge** ដើម្បីភ្ជាប់ JavaScript Code ជាមួយ Native Code:
- **JavaScript Thread:** ដំណើរការ Logic និង React Components។
- **Native Thread:** Render Native UI Components (ដូចជា View, Text)។
- **Bridge:** អនុញ្ញាតឱ្យ JavaScript និង Native Code ទំនាក់ទំនងគ្នា។

**ឧទាហរណ៍ Workflow:**
1. អ្នកសរសេរ React Components ជា JavaScript។
2. React Native Bridge បកប្រែ Components ទៅជា Native UI Elements។
3. Native Platform (iOS/Android) Render UI និងគ្រប់គ្រង Interactions។

---

## 4. ការដំឡើងបរិស្ថានអភិវឌ្ឍន៍

ដើម្បីចាប់ផ្តើមជាមួយ React Native អ្នកត្រូវដំឡើង៖
- **Node.js:** សម្រាប់គ្រប់គ្រង JavaScript Packages។
- **React Native CLI ឬ Expo CLI:** ឧបករណ៍សម្រាប់បង្កើតនិងដំណើរការ Projects។
- **Android Studio/Xcode:** សម្រាប់ Android Emulator ឬ iOS Simulator។
- **IDE:** ដូចជា Visual Studio Code។

**ជំហានដំឡើង (សង្ខេប):**
1. ដំឡើង Node.js ពី nodejs.org។
2. ដំឡើង React Native CLI: 
   \`\`\`bash
   npm install -g react-native-cli
   \`\`\`
3. ដំឡើង Android Studio ឬ Xcode សម្រាប់ Emulator/Simulator។
4. បង្កើត Project ថ្មី:
   \`\`\`bash
   npx react-native init MyFirstApp
   \`\`\`
5. ដំណើរការ App:
   \`\`\`bash
   cd MyFirstApp
   npx react-native run-android
   # ឬ
   npx react-native run-ios
   \`\`\`

**ចំណាំ:** សូមពិនិត្យឯកសារនៅ reactnative.dev សម្រាប់ការណែនាំលម្អិត។

---

## 5. ការបង្កើត React Native App សាមញ្ញ

ឧទាហរណ៍ខាងក្រោមបង្ហាញពីការបង្កើត App សាមញ្ញមួយដែលបង្ហាញអត្ថបទ "សួស្តី React Native!"។

\`\`\`javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>សួស្តី React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
\`\`\`

**លទ្ធផល:** បង្ហាញអត្ថបទ "សួស្តី React Native!" នៅកណ្តាលអេក្រង់។

**ពន្យល់:**
- **View:** ជា Container Component សម្រាប់រៀបចំ Layout។
- **Text:** ប្រើសម្រាប់បង្ហាញអត្ថបទ។
- **StyleSheet:** ប្រើសម្រាប់កំណត់ Styles ស្រដៀងនឹង CSS។
- **Flexbox:** ប្រើសម្រាប់ Layout (ឧទាហរណ៍: \`justifyContent\`, \`alignItems\`)។

---

## 6. ហេតុអ្វីត្រូវប្រើ React Native?

- **Cross-Platform Development:** សន្សំពេលវេលានិងធនធានដោយប្រើ Codebase តែមួយ។
- **React-Based:** ប្រើ Syntax និង Concepts ដូចគ្នានឹង React សម្រាប់ Web។
- **Native Features:** អាចចូលប្រើ Camera, GPS, និង Sensors តាមរយៈ Native Modules។
- **Community and Libraries:** មាន Libraries ជាច្រើនដូចជា React Navigation និង Redux។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត App សាមញ្ញ</h3>
<p>បង្ហាញអត្ថបទនៅកណ្តាលអេក្រង់។</p>
<pre><code class="language-javascript">
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>សួស្តី React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});

export default App;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Component ជាមួយ Props</h3>
<p>បង្កើត Component ដែលទទួល Props ដើម្បីបង្ហាញសារ។</p>
<pre><code class="language-javascript">
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greeting = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>សួស្តី {name}!</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Greeting name="Sokha" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});

export default App;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ Button Component</h3>
<p>បន្ថែម Button ដើម្បីបង្ហាញ Alert។</p>
<pre><code class="language-javascript">
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>សូមស្វាគមន៍!</Text>
      <Button
        title="ចុចខ្ញុំ"
        onPress={() => alert('សួស្តី React Native!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});

export default App;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ React Native គឺជាអ្វី?',
      options: [
        'Web Framework',
        'ភាសាសរសេរកម្មវិធី',
        'Mobile Framework សម្រាប់ iOS និង Android',
        'Database System'
      ],
      correct: 2,
      explanation: 'React Native គឺជា Mobile Framework សម្រាប់បង្កើត Apps សម្រាប់ iOS និង Android។'
    },
    {
      question: 'តើអ្វីជាលក្ខណៈពិសេសសំខាន់នៃ React Native?',
      options: [
        'Hot Reload',
        'SQL Database',
        'Web Rendering',
        'Static Typing'
      ],
      correct: 0,
      explanation: 'Hot Reload អនុញ្ញាតឱ្យអ្នកឃើញការផ្លាស់ប្តូរភ្លាមៗនៅពេលអភិវឌ្ឍ។'
    },
    {
      question: 'តើ Component ណាដែលប្រើសម្រាប់បង្ហាញអត្ថបទនៅក្នុង React Native?',
      options: ['View', 'Text', 'Button', 'Image'],
      correct: 1,
      explanation: '`Text` ត្រូវបានប្រើសម្រាប់បង្ហាញអត្ថបទ។'
    },
    {
      question: 'តើ Bridge នៅក្នុង React Native មានតួនាទីអ្វី?',
      options: [
        'គ្រប់គ្រង Database',
        'ភ្ជាប់ JavaScript និង Native Code',
        'បង្កើត UI Components',
        'គ្រប់គ្រង Navigation'
      ],
      correct: 1,
      explanation: 'Bridge ភ្ជាប់ JavaScript Code ជាមួយ Native Code ដើម្បី Render UI។'
    },
    {
      question: 'តើឧបករណ៍ណាដែលត្រូវការសម្រាប់ Android Development?',
      options: [
        'Xcode',
        'Android Studio',
        'Visual Studio',
        'Node.js'
      ],
      correct: 1,
      explanation: 'Android Studio ត្រូវការសម្រាប់ Android Emulator។'
    },
    {
      question: 'តើអ្វីជា Command ដើម្បីបង្កើត React Native Project ថ្មី?',
      options: [
        'npm install react-native',
        'npx react-native init MyApp',
        'react-native create-app',
        'expo init MyApp'
      ],
      correct: 1,
      explanation: '`npx react-native init MyApp` បង្កើត Project ថ្មី។'
    },
    {
      question: 'តើ StyleSheet នៅក្នុង React Native មានតួនាទីអ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'កំណត់ Styles សម្រាប់ Components',
        'ភ្ជាប់ APIs',
        'គ្រប់គ្រង Navigation'
      ],
      correct: 1,
      explanation: 'StyleSheet កំណត់ Styles សម្រាប់ Components ស្រដៀងនឹង CSS។'
    },
    {
      question: 'តើ React Native គាំទ្រ Cross-Platform Development ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'តែសម្រាប់ iOS', 'តែសម្រាប់ Android'],
      correct: 0,
      explanation: 'React Native គាំទ្រ Cross-Platform Development សម្រាប់ iOS និង Android។'
    },
    {
      question: 'តើ Component ណាដែលប្រើសម្រាប់ Layout នៅក្នុង React Native?',
      options: ['Text', 'View', 'Image', 'Button'],
      correct: 1,
      explanation: '`View` ជា Container Component សម្រាប់រៀបចំ Layout។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដ `<Text>Hello</Text>` នៅក្នុង React Native?',
      options: [
        'បង្ហាញរូបភាព',
        'បង្ហាញអត្ថបទ "Hello"',
        'បង្ហាញ Button',
        'បង្ហាញ Alert'
      ],
      correct: 1,
      explanation: '`<Text>Hello</Text>` បង្ហាញអត្ថបទ "Hello" នៅលើអេក្រង់។'
    }
  ],
  lab: {
    task: `
បង្កើត React Native App សាមញ្ញមួយដែលបង្ហាញព័ត៌មាននិស្សិតនៅលើអេក្រង់។

**តម្រូវការ:**

1. **Component Structure:**
   - បង្កើត Functional Component ឈ្មោះ \`StudentCard\` ដែលទទួល Props សម្រាប់ឈ្មោះ (name) និងអាយុ (age)។
   - បង្ហាញឈ្មោះនិងអាយុជាមួយ \`Text\` Component នៅក្នុង \`View\`។

2. **Styling:**
   - ប្រើ \`StyleSheet\` ដើម្បីកំណត់ Layout ជាមួយ Flexbox (ឧទាហរណ៍៖ កណ្តាលអេក្រង់)។
   - កំណត់ Font Size និង Color សម្រាប់អត្ថបទ។

3. **Button Interaction:**
   - បន្ថែម \`Button\` Component ដែលបង្ហាញ Alert នៅពេលចុច ដោយបង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះនិស្សិត។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង React Native Project ដោយប្រើ Emulator ឬ Simulator។ អ្នកអាចប្រើ React Native CLI ឬ Expo។
    `,
    solution: `
\`\`\`javascript
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StudentCard = ({ name, age }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>ឈ្មោះ: {name}</Text>
      <Text style={styles.age}>អាយុ: {age}</Text>
      <Button
        title="ស្វាគមន៍"
        onPress={() => alert('សួស្តី ' + name + '! សូមស្វាគមន៍មកកាន់ React Native!')}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <StudentCard name="Sokha" age={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  age: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
});

export default App;
\`\`\`
`
  }
};

export default ReactNativeLesson1_1Content;