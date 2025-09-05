import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson2_1Content: LessonContent = {
  title: 'Core Components',
  objectives: [
    'ស្គាល់និងយល់ពី Core Components របស់ React Native',
    'រៀនពីរបៀបប្រើប្រាស់ View, Text, Image, Button, និង StyleSheet',
    'បង្កើត UI សាមញ្ញដោយប្រើ Core Components',
    'យល់ពីភាពខុសគ្នារវាង Components របស់ React Native និង HTML elements'
  ],
  content: `
# Core Components 📦

---

នៅក្នុង React Native, យើងបង្កើត User Interface (UI) ដោយប្រើ **Components**។ Components ទាំងនេះគឺដូចទៅនឹង Native UI elements ដែរ។ មិនដូច Web ដែលប្រើ HTML tags (ដូចជា \`div\`, \`p\`, \`img\`) React Native ផ្តល់នូវសំណុំនៃ **Core Components** ដែល Render ជា Native UI Widgets។

---

## 1. View 📦

**View** គឺជា Container Component ដែលប្រើសម្រាប់រៀបចំ Layout ។ វាដូចទៅនឹង \`div\` នៅក្នុង HTML ។
* វាគាំទ្រ **Flexbox** និង **Styling** សម្រាប់រៀបចំ Layout។
* វាគឺជា Building Block សំខាន់បំផុតសម្រាប់ UI របស់អ្នក។
* **ឧទាហរណ៍:** ប្រើដើម្បីដាក់ Group Components ជាមួយគ្នា។

\`\`\`javascript
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ខ្ញុំស្ថិតនៅកណ្តាល!</Text>
    </View>
  );
};
\`\`\`

---

## 2. Text ✍️

**Text** ប្រើសម្រាប់បង្ហាញអត្ថបទ។ វាមិនដូច Web ទេ នៅក្នុង React Native អត្ថបទត្រូវតែដាក់នៅក្នុង Component **<Text>**។
* យើងមិនអាចដាក់ Text ដោយផ្ទាល់នៅក្នុង **<View>** នោះទេ។
* យើងអាចកំណត់ Style ផ្សេងៗដូចជា \`fontSize\`, \`color\`, និង \`fontWeight\` ។
* **ឧទាហរណ៍:** បង្ហាញចំណងជើងឬ Paragraph ។

\`\`\`javascript
<View>
  <Text style={{ fontSize: 20, color: 'blue' }}>នេះជាចំណងជើង</Text>
  <Text>នេះជាអត្ថបទធម្មតា</Text>
</View>
\`\`\`

---

## 3. Image 🖼️

**Image** ប្រើសម្រាប់បង្ហាញរូបភាព។
* អាចបង្ហាញរូបភាពពី Local Storage ឬពី URL។
* រូបភាពត្រូវតែកំណត់ \`width\` និង \`height\` ឱ្យបានច្បាស់លាស់។
* **ឧទាហរណ៍:** បង្ហាញរូប Profile ឬ Logo App។

\`\`\`javascript
<Image
  source={require('./path/to/my-image.png')}
  style={{ width: 100, height: 100 }}
/>

// ឬប្រើ URI
<Image
  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
  style={{ width: 50, height: 50 }}
/>
\`\`\`

---

## 4. Button 🔘

**Button** ប្រើសម្រាប់បង្កើតប៊ូតុងដែលអាចចុចបាន។
* មាន Props សំខាន់ៗដូចជា \`title\` និង \`onPress\`។
* **\`onPress\`** គឺជា Function ដែលដំណើរការនៅពេលប៊ូតុងត្រូវបានចុច។
* **ចំណាំ:** Button នេះមានលក្ខណៈសាមញ្ញ។ សម្រាប់ប៊ូតុងដែលមាន Design ស្មុគស្មាញ យើងប្រើ **TouchableOpacity** ឬ **Pressable**។

\`\`\`javascript
import { Button, Alert } from 'react-native';

<Button
  title="ចុចខ្ញុំ"
  onPress={() => Alert.alert('អ្នកបានចុចប៊ូតុង!')}
/>
\`\`\`

---

## 5. StyleSheet 🎨

**StyleSheet** គឺជា API មួយដែលផ្តល់ឱ្យយើងនូវវិធីដើម្បីសរសេរ Styles សម្រាប់ Components ។
* វាធ្វើឱ្យ Code មានសណ្តាប់ធ្នាប់និងអាចប្រើឡើងវិញបាន។
* វាធ្វើឱ្យ Performance កាន់តែល្អ។
* **ឧទាហរណ៍:** កំណត់ Styles សម្រាប់ View និង Text ។

\`\`\`javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Card UI ដោយប្រើ View និង Text</h3>
<pre><code class="language-javascript">
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Card Title</Text>
      <Text style={styles.description}>This is a simple card created using View and Text components.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default App;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Component មួយណាដែលប្រើសម្រាប់បង្ហាញអត្ថបទ?',
      options: ['View', 'Text', 'Button', 'Image'],
      correct: 1,
      explanation: '`Text` ត្រូវបានប្រើសម្រាប់បង្ហាញអត្ថបទ។'
    },
    {
      question: 'តើ Component ណាដែលដើរតួជា Container សម្រាប់រៀបចំ Layout?',
      options: ['Text', 'Button', 'View', 'Image'],
      correct: 2,
      explanation: '`View` គឺជា Container Component ដែលប្រើសម្រាប់រៀបចំ Layout។'
    },
    {
      question: 'តើ Props សំខាន់ពីររបស់ `Button` មានអ្វីខ្លះ?',
      options: ['style និង text', 'source និង style', 'title និង onPress', 'color និង size'],
      correct: 2,
      explanation: '`title` សម្រាប់អត្ថបទលើប៊ូតុង និង `onPress` សម្រាប់ Action នៅពេលចុច។'
    },
    {
      question: 'តើយើងគួរប្រើវិធីណាដើម្បីកំណត់ Style សម្រាប់ Components?',
      options: ['Inline Styles', 'External CSS', 'StyleSheet API', 'Sass'],
      correct: 2,
      explanation: 'StyleSheet API គឺជាវិធីដែលត្រូវបានណែនាំសម្រាប់ការកំណត់ Styles ក្នុង React Native។'
    },
    {
      question: 'តើយើងត្រូវប្រើ Component ណាដើម្បីបង្ហាញរូបភាពពី URI?',
      options: ['View', 'Text', 'Button', 'Image'],
      correct: 3,
      explanation: '`Image` ត្រូវបានប្រើសម្រាប់បង្ហាញរូបភាព។'
    },
    {
      question: 'តើ View Component គាំទ្រការរៀបចំ Layout តាមវិធីណា?',
      options: ['Grid System', 'Flexbox', 'CSS Grid', 'Float'],
      correct: 1,
      explanation: 'View Component គាំទ្រការរៀបចំ Layout តាមរយៈ Flexbox។'
    },
    {
      question: 'តើយើងអាចដាក់អត្ថបទដោយផ្ទាល់នៅក្នុង View Component បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅលើ iOS', 'បានតែនៅលើ Android'],
      correct: 1,
      explanation: 'ទេ, អត្ថបទត្រូវតែដាក់នៅក្នុង `<Text>` Component។'
    },
    {
      question: 'តើ `<Image>` ត្រូវការអ្វីខ្លះដើម្បីបង្ហាញរូបភាព?',
      options: ['width និង height', 'src', 'title', 'children'],
      correct: 0,
      explanation: '`Image` ត្រូវការ Props `width` និង `height` ដើម្បីបង្ហាញបានត្រឹមត្រូវ។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត User Profile Card**

បង្កើត UI Card មួយដែលមានរូបភាព Profile, ឈ្មោះ, និងប៊ូតុង។

**តម្រូវការ:**

1.  ប្រើ **View** ជា Container សម្រាប់ Card ទាំងមូល។
2.  ប្រើ **Image** ដើម្បីបង្ហាញរូប Profile។ ប្រើ URL ដូចខាងក្រោម៖ \`https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200\`។
3.  ប្រើ **Text** ដើម្បីបង្ហាញឈ្មោះនិងតួនាទី។
4.  ប្រើ **Button** ដែលបង្ហាញ Alert នៅពេលចុច។
5.  ប្រើ **StyleSheet** ដើម្បីរៀបចំ Layout និង Styles ដូចជា:
    * Centered Content (ប្រើ Flexbox)។
    * Rounded Image។
    * Card Shadow។

**ការណែនាំ:** ព្យាយាមកំណត់ Style នីមួយៗឱ្យបានត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`javascript
import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' }}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.title}>Software Developer</Text>
        <Button
          title="Contact Me"
          onPress={() => Alert.alert('Contacting John Doe...')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});

export default ProfileCard;
\`\`\`
`
  }
};

export default ReactNativeLesson2_1Content;