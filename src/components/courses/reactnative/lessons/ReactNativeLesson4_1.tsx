import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson4_1Content: LessonContent = {
  title: 'មូលដ្ឋានគ្រឹះនៃការគ្រប់គ្រង State',
  objectives: [
    'យល់ពី State និងតួនាទីរបស់វាក្នុងការបង្កើត Interactive UI',
    'ស្វែងយល់ពីភាពខុសគ្នារវាង Props និង State',
    'រៀនពីរបៀបប្រើ `useState` Hook សម្រាប់គ្រប់គ្រង State ក្នុង Functional Components',
    'អនុវត្តន៍ការផ្លាស់ប្តូរ State តាមរយៈ Event Handlers',
    'យល់ពីគោលការណ៍ "Single Source of Truth" និង "Lifting State Up"'
  ],
  content: `
# មូលដ្ឋានគ្រឹះនៃការគ្រប់គ្រង State 🔄

---

នៅក្នុង React Native **State** គឺជាទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន ហើយការផ្លាស់ប្តូរនោះនឹងធ្វើឱ្យ User Interface (UI) របស់ Component Render ឡើងវិញដោយស្វ័យប្រវត្តិ។ State ធ្វើឱ្យ Components មានលក្ខណៈ **Interactive** ។

---

## 1. អ្វីទៅជា State?

**State** គឺជា Object មួយដែលផ្ទុកទិន្នន័យរបស់ Component។ នៅពេលដែលទិន្នន័យនៅក្នុង State ផ្លាស់ប្តូរ React នឹងរកឃើញហើយធ្វើការ Update UI ដោយស្វ័យប្រវត្តិ។ State ត្រូវបានប្រើដើម្បីគ្រប់គ្រងទិន្នន័យដែលផ្លាស់ប្តូរញឹកញាប់ ដូចជា Input Value, Checkbox Status, ឬទិន្នន័យដែល Fetch មកពី API ។

* **ឧទាហរណ៍:**
    * ការរាប់ចំនួន (Counter)
    * ការបញ្ចូល Form
    * ការបង្ហាញ/លាក់ Content
    * ទិន្នន័យដែលទទួលបានពី Server

---

## 2. Props vs. State

* **Props (Properties):**
    * ជាទិន្នន័យដែលត្រូវបាន **បញ្ជូនពី Parent Component ទៅ Child Component**។
    * មានលក្ខណៈ **Read-only** (មិនអាចកែប្រែបាន)។
    * ប្រើសម្រាប់បញ្ជូនទិន្នន័យ Statics ឬ Event Handlers ចុះក្រោម។

* **State:**
    * ជាទិន្នន័យដែល **គ្រប់គ្រងដោយ Component ខ្លួនឯង**។
    * មានលក្ខណៈ **Mutable** (អាចកែប្រែបាន)។
    * ប្រើសម្រាប់ទិន្នន័យដែលផ្លាស់ប្តូរនៅពេល Component ដំណើរការ។

---

## 3. \`useState\` Hook

នៅក្នុង Functional Components យើងប្រើ **\`useState\`** Hook ដើម្បីបន្ថែម State ។
* **របៀបប្រើ:**
    \`\`\`javascript
    const [stateVariable, setStateFunction] = useState(initialValue);
    \`\`\`
    * \`stateVariable\`: អថេរដែលផ្ទុកតម្លៃ State បច្ចុប្បន្ន។
    * \`setStateFunction\`: Function ដែលប្រើសម្រាប់កំណត់តម្លៃ State ថ្មី។
    * \`initialValue\`: តម្លៃដំបូងរបស់ State (ឧទាហរណ៍៖ \`0\`, \`''\`, \`false\`, \`[]\`)។

* **ឧទាហរណ៍:**
    \`\`\`javascript
    import React, { useState } from 'react';
    import { View, Text, Button } from 'react-native';

    const Counter = () => {
      const [count, setCount] = useState(0);

      const handlePress = () => {
        setCount(count + 1);
      };

      return (
        <View>
          <Text>ចំនួន: {count}</Text>
          <Button title="បង្កើន" onPress={handlePress} />
        </View>
      );
    };
    \`\`\`
    នៅពេលដែល \`setCount\` ត្រូវបានហៅ Component ទាំងមូលនឹង Render ឡើងវិញដោយប្រើតម្លៃ \`count\` ថ្មី។

---

## 4. Single Source of Truth

**Single Source of Truth** គឺជាគោលការណ៍ដែលថាទិន្នន័យទាំងអស់សម្រាប់ Component មួយគួរតែមានប្រភពតែមួយគត់។ វិធីនេះជៀសវាងភាពច្របូកច្របល់និងធានាថាទិន្នន័យទាំងអស់មានលក្ខណៈដូចគ្នា។

* **ឧទាហរណ៍:** ប្រសិនបើយើងមាន Buttons ជាច្រើនដែលផ្លាស់ប្តូរតម្លៃដូចគ្នា យើងគួររក្សាតម្លៃ State នោះនៅ Parent Component ។

---

## 5. Lifting State Up

**Lifting State Up** គឺជាបច្ចេកទេសមួយដែលយើងផ្លាស់ប្តូរ State ពី Child Component ទៅកាន់ Parent Component ។ យើងបញ្ជូន State នោះចុះទៅ Child តាមរយៈ Props ។

* **ហេតុផល:** នៅពេលដែល Components ពីរឬច្រើនត្រូវការ Share State ជាមួយគ្នា យើងត្រូវផ្លាស់ប្តូរ State ទៅកាន់ Parent Component របស់វា ដើម្បីឱ្យ Components ទាំងនោះអាចប្រើ State ដូចគ្នាបាន។

* **ឧទាហរណ៍:**
    \`\`\`javascript
    // Child Component (Button)
    const MyButton = ({ onIncrement }) => {
      return (
        <Button
          title="Increment"
          onPress={onIncrement}
        />
      );
    };

    // Parent Component (App)
    const App = () => {
      const [count, setCount] = useState(0);

      const handleIncrement = () => {
        setCount(count + 1);
      };

      return (
        <View>
          <Text>Count: {count}</Text>
          <MyButton onIncrement={handleIncrement} />
        </View>
      );
    };
    \`\`\`
    នៅក្នុងឧទាហរណ៍នេះ State \`count\` ត្រូវបានគ្រប់គ្រងដោយ \`App\` Component ហើយ \`handleIncrement\` Function ត្រូវបានបញ្ជូនជា Props ទៅ \`MyButton\` Component។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Component ដែលផ្លាស់ប្តូររូបភាព</h3>
<p>ប្រើ useState ដើម្បីគ្រប់គ្រង State នៃរូបភាព។</p>
<pre><code class="language-javascript">
import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const ImageSwitcher = () => {
  const [image, setImage] = useState(1);
  const images = {
    1: require('./assets/image1.png'), // Assume you have images in assets folder
    2: require('./assets/image2.png'),
  };

  const handlePress = () => {
    setImage(image === 1 ? 2 : 1);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={images[image]}
      />
      <Button
        title="ប្តូររូបភាព"
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200, marginBottom: 20 },
});

export default ImageSwitcher;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ State មានលក្ខណៈបែបណា?',
      options: [
        'Read-only',
        'Immutable',
        'Static',
        'Mutable'
      ],
      correct: 3,
      explanation: 'State គឺជាទិន្នន័យដែលអាចកែប្រែបាន (Mutable)។'
    },
    {
      question: 'តើ Hook មួយណាដែលប្រើសម្រាប់គ្រប់គ្រង State ក្នុង Functional Component?',
      options: ['useEffect', 'useContext', 'useState', 'useRef'],
      correct: 2,
      explanation: '`useState` គឺជា Hook ដែលប្រើសម្រាប់គ្រប់គ្រង State។'
    },
    {
      question: 'តើ Props ខុសពី State ត្រង់ចំណុចណា?',
      options: [
        'Props អាចកែប្រែបាន រីឯ State មិនអាច',
        'Props ត្រូវបានបញ្ជូនចុះក្រោម រីឯ State គ្រប់គ្រងដោយ Component ខ្លួនឯង',
        'Props ប្រើសម្រាប់ UI រីឯ State ប្រើសម្រាប់ Logic',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 1,
      explanation: 'Props ត្រូវបានបញ្ជូនចុះពី Parent Component ទៅ Child Component រីឯ State គ្រប់គ្រងដោយ Component ខ្លួនឯង។'
    },
    {
      question: 'តើអ្វីទៅជាគោលការណ៍ "Single Source of Truth"?',
      options: [
        'ការប្រើប្រាស់ Database តែមួយ',
        'ការដាក់ State នៅកន្លែងតែមួយ',
        'ការប្រើប្រាស់ Screen តែមួយ',
        'ការប្រើប្រាស់ Props តែមួយ'
      ],
      correct: 1,
      explanation: 'Single Source of Truth គឺជាគោលការណ៍ដែលថាទិន្នន័យ State គួរតែមានប្រភពតែមួយគត់។'
    },
    {
      question: 'តើការហៅ `setStateFunction` ធ្វើអ្វី?',
      options: [
        'ផ្លាស់ប្តូរតម្លៃ State និងធ្វើឱ្យ Component Render ឡើងវិញ',
        'ផ្លាស់ប្តូរតម្លៃ State តែប៉ុណ្ណោះ',
        'បង្ហាញ Error',
        'គ្មានអ្វីកើតឡើងទេ'
      ],
      correct: 0,
      explanation: 'ការហៅ `setStateFunction` ធ្វើឱ្យតម្លៃ State ផ្លាស់ប្តូរនិងធ្វើឱ្យ Component Render ឡើងវិញ។'
    },
    {
      question: 'តើ "Lifting State Up" មានន័យដូចម្តេច?',
      options: [
        'ការផ្លាស់ប្តូរ State ពី Parent ទៅ Child',
        'ការផ្លាស់ប្តូរ State ពី Child ទៅ Parent',
        'ការផ្លាស់ប្តូរ State ពី Screen មួយទៅ Screen មួយទៀត',
        'ការប្រើប្រាស់ Global State'
      ],
      correct: 1,
      explanation: 'Lifting State Up គឺជាបច្ចេកទេសផ្លាស់ប្តូរ State ទៅកាន់ Parent Component ដើម្បីឱ្យវាអាចត្រូវបាន Share។'
    },
    {
      question: 'តើការផ្លាស់ប្តូរ State ធ្វើឱ្យ Component ដំណើរការបែបណា?',
      options: [
        'គ្មានអ្វីផ្លាស់ប្តូរទេ',
        'UI នឹងផ្លាស់ប្តូរដោយស្វ័យប្រវត្តិ',
        'ទាមទារ Manual Update',
        'ធ្វើឱ្យ App Crash'
      ],
      correct: 1,
      explanation: 'ការផ្លាស់ប្តូរ State ធ្វើឱ្យ UI របស់ Component Render ឡើងវិញដោយស្វ័យប្រវត្តិ។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Form សម្រាប់ Login**

បង្កើត Form សម្រាប់ Login ដែលមាន \`TextInput\` ពីរនិង \`Button\` មួយ។

**តម្រូវការ:**

1.  ប្រើ **useState** ដើម្បីគ្រប់គ្រង State ពីរ៖ \`username\` និង \`password\`។
2.  ប្រើ **TextInput** សម្រាប់ \`username\` និង \`password\`។
3.  ប្រើ \`onChangeText\` Prop ដើម្បី Update State របស់ \`username\` និង \`password\` ។
4.  នៅលើ \`Button\` មួយ ប្រើ \`onPress\` ដើម្បីបង្ហាញ Alert ដែលបង្ហាញ \`username\` និង \`password\` បច្ចុប្បន្ន។
5.  ប្រើ \`secureTextEntry\` Prop សម្រាប់ \`password\` input។

**ការណែនាំ:** ព្យាយាមកំណត់ Styles ដើម្បីធ្វើឱ្យ Form មានលក្ខណៈទាក់ទាញ។
    `,
    solution: `
\`\`\`javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login Info', \`Username: \${username}\\nPassword: \${password}\`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
});

export default LoginForm;
\`\`\`
`
  }
};

export default ReactNativeLesson4_1Content;