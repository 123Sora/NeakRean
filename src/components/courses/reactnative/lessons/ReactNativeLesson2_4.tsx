import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson2_4Content: LessonContent = {
  title: 'ការបង្កើត Custom Components',
  objectives: [
    'យល់ពីគោលការណ៍នៃការបែងចែក UI ទៅជា Component តូចៗ',
    'រៀនពីរបៀបបង្កើត Functional Component ដែលអាចប្រើឡើងវិញបាន',
    'ស្វែងយល់ពីរបៀបប្រើប្រាស់ Props ដើម្បីបញ្ជូនទិន្នន័យទៅ Components',
    'អនុវត្តន៍ការសរសេរ Component ដែលមាន Nested Components',
    'រៀនពីរបៀបរៀបចំ Folder Structure សម្រាប់ Components'
  ],
  content: `
# ការបង្កើត Custom Components 🏗️

---

នៅក្នុង React Native យើងបង្កើត UI ដោយបំបែកវាទៅជាបំណែកតូចៗដែលអាចប្រើឡើងវិញបាន ដែលយើងហៅថា **Components**។ គោលការណ៍នេះធ្វើឱ្យ Code កាន់តែមានសណ្តាប់ធ្នាប់ ងាយស្រួលថែទាំ និងអាចប្រើឡើងវិញបាន។

---

## 1. ហេតុអ្វីត្រូវបង្កើត Custom Components?

ការបែងចែក UI ទៅជា Components ផ្តល់នូវអត្ថប្រយោជន៍ជាច្រើន៖
* **Reusability (អាចប្រើឡើងវិញបាន):** យើងអាចប្រើ Component តែមួយនៅកន្លែងជាច្រើនក្នុង App។ ឧទាហរណ៍៖ Button ឬ Card។
* **Maintainability (ងាយស្រួលថែទាំ):** នៅពេលដែលមានការផ្លាស់ប្តូរ យើងគ្រាន់តែកែប្រែ Component តែមួយគត់។
* **Readability (ងាយស្រួលអាន):** Code ក្លាយជាមានលក្ខណៈសាមញ្ញនិងងាយស្រួលយល់។
* **Separation of Concerns:** គ្រប់ Component ទាំងអស់មាន Logic និង UI ផ្ទាល់ខ្លួន។

---

## 2. របៀបបង្កើត Custom Component

Custom Component គឺគ្រាន់តែជា **JavaScript Function** មួយដែលត្រឡប់ជា React Element (UI)។

**ជំហាន:**
1.  បង្កើតឯកសារ \`.js\` ឬ \`.jsx\` ថ្មី (ឧទាហរណ៍៖ \`components/MyButton.js\`)។
2.  Import \`React\` និង Core Components ដែលចាំបាច់។
3.  សរសេរ Functional Component ដែលទទួល \`props\` ជា Argument។
4.  Export Component នោះ។

**ឧទាហរណ៍៖ MyButton.js**
\`\`\`javascript
import React from 'react';
import { Button } from 'react-native';

const MyButton = ({ title, onPress }) => {
  return (
    <Button
      title={title}
      onPress={onPress}
    />
  );
};

export default MyButton;
\`\`\`
នៅក្នុងឧទាហរណ៍នេះ \`MyButton\` គឺជា Component ដែលទទួល \`title\` និង \`onPress\` ជា Props ។

---

## 3. ការប្រើប្រាស់ Props

**Props** (មកពីពាក្យ **Properties**) គឺជា Object ដែលផ្ទុកទិន្នន័យដែលយើងបញ្ជូនពី Parent Component ទៅ Child Component។ Props គឺមានលក្ខណៈ **Read-only** ដែលមានន័យថាយើងមិនអាចកែប្រែវានៅក្នុង Child Component បានទេ។

**ឧទាហរណ៍:** ប្រើ \`MyButton\` Component នៅក្នុង App.js។
\`\`\`javascript
import React from 'react';
import { View, Alert } from 'react-native';
import MyButton from './components/MyButton';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyButton
        title="ចុចខ្ញុំឥឡូវនេះ!"
        onPress={() => Alert.alert('Button ត្រូវបានចុច!')}
      />
    </View>
  );
};

export default App;
\`\`\`

---

## 4. Nested Components

យើងអាចដាក់ Component មួយនៅខាងក្នុង Component មួយទៀតបាន។ នេះជាវិធីដែលយើងបង្កើត UI ស្មុគស្មាញ។

**ឧទាហរណ៍៖ ProfileCard Component**

* **ឯកសារ ProfileImage.js:**
  \`\`\`javascript
  import React from 'react';
  import { Image, StyleSheet } from 'react-native';

  const ProfileImage = ({ source }) => {
    return (
      <Image
        style={styles.image}
        source={source}
      />
    );
  };

  const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  });

  export default ProfileImage;
  \`\`\`

* **ឯកសារ ProfileCard.js (ប្រើ ProfileImage)**:
  \`\`\`javascript
  import React from 'react';
  import { View, Text, StyleSheet } from 'react-native';
  import ProfileImage from './ProfileImage';

  const ProfileCard = ({ name, title, imageSource }) => {
    return (
      <View style={styles.card}>
        <ProfileImage source={imageSource} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    name: { fontSize: 22, fontWeight: 'bold' },
    title: { fontSize: 16, color: '#666' },
  });

  export default ProfileCard;
  \`\`\`

* **ឯកសារ App.js (ប្រើ ProfileCard)**:
  \`\`\`javascript
  import React from 'react';
  import { View } from 'react-native';
  import ProfileCard from './components/ProfileCard';

  const App = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ProfileCard
          name="Sokha"
          title="React Native Developer"
          imageSource={{ uri: 'https://via.placeholder.com/150' }}
        />
      </View>
    );
  };

  export default App;
  \`\`\`
`,
  examples: [],
  quiz: [
    {
      question: 'តើ Props មានលក្ខណៈបែបណា?',
      options: [
        'អាចកែប្រែនៅក្នុង Child Component',
        'អាចកែប្រែបានតែនៅក្នុង Parent Component',
        'Read-only',
        'ជា State របស់ Component'
      ],
      correct: 2,
      explanation: 'Props គឺ Read-only ហើយមិនអាចកែប្រែដោយផ្ទាល់នៅក្នុង Component ដែលទទួលវាបានទេ។'
    },
    {
      question: 'តើការបែងចែក UI ទៅជា Components មានអត្ថប្រយោជន៍អ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ Code កាន់តែវែង',
        'ធ្វើឱ្យ Code មានសណ្តាប់ធ្នាប់និងអាចប្រើឡើងវិញបាន',
        'ធ្វើឱ្យ App ដំណើរការយឺត',
        'គ្មានអត្ថប្រយោជន៍ទេ'
      ],
      correct: 1,
      explanation: 'ការបែងចែក UI ទៅជា Components ជួយឱ្យ Code មានសណ្តាប់ធ្នាប់ ងាយស្រួលថែទាំ និងអាចប្រើឡើងវិញបាន។'
    },
    {
      question: 'តើ Custom Component មួយគឺជាអ្វី?',
      options: [
        'HTML Element',
        'JavaScript Object',
        'JavaScript Function ដែលត្រឡប់ជា UI',
        'CSS Class'
      ],
      correct: 2,
      explanation: 'Custom Component គឺជា Function ដែលទទួល Props ហើយត្រឡប់ជា React Element (UI)។'
    },
    {
      question: 'តើ Props ត្រូវបញ្ជូនពីទិសដៅណាទៅទិសដៅណា?',
      options: [
        'ពី Child ទៅ Parent',
        'ពី Parent ទៅ Child',
        'ទៅវិញទៅមក',
        'តាមរយៈ State'
      ],
      correct: 1,
      explanation: 'Props ត្រូវបញ្ជូនចុះក្រោមពី Parent Component ទៅ Child Component។'
    },
    {
      question: 'តើការប្រើប្រាស់ Custom Component ជួយអ្វីដល់ការថែទាំ App?',
      options: [
        'ធ្វើឱ្យ App មានបញ្ហា',
        'ធ្វើឱ្យការកែប្រែកូដពិបាក',
        'ធ្វើឱ្យការកែប្រែមានលក្ខណៈងាយស្រួលព្រោះយើងកែប្រែតែ Component មួយ',
        'មិនជួយអ្វីទេ'
      ],
      correct: 2,
      explanation: 'នៅពេលមានការផ្លាស់ប្តូរ យើងគ្រាន់តែកែប្រែ Component តែមួយគត់ ធ្វើឱ្យការថែទាំកាន់តែងាយស្រួល។'
    },
    {
      question: 'តើយើងអាចដាក់ Component មួយនៅក្នុង Component មួយទៀតបានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែប្រភេទដូចគ្នា', 'បានតែប្រើ Class Component'],
      correct: 0,
      explanation: 'បាទ/ចាស យើងអាចដាក់ Nested Components បានយ៉ាងងាយស្រួល។'
    },
    {
      question: 'តើ Props ជាប្រភេទទិន្នន័យអ្វី?',
      options: ['String', 'Number', 'Array', 'Object'],
      correct: 3,
      explanation: 'Props គឺជា JavaScript Object។'
    },
    {
      question: 'តើយើងត្រូវ Import អ្វីខ្លះដើម្បីបង្កើត Custom Component?',
      options: [
        'តែ React',
        'តែ Core Components',
        'React និង Core Components ដែលចាំបាច់',
        'គ្មានអ្វីទេ'
      ],
      correct: 2,
      explanation: 'យើងត្រូវ Import React និង Core Components ដែលត្រូវប្រើនៅក្នុង Component នោះ។'
    },
    {
      question: 'តើអ្វីទៅជាគោលការណ៍ "Separation of Concerns"?',
      options: [
        'ការដាក់ UI និង Logic ចូលគ្នាតែមួយ',
        'ការបំបែក UI និង Logic ទៅជា Components ផ្សេងគ្នា',
        'ការប្រើប្រាស់ Global State',
        'ការបែងចែកឯកសារទៅជា Folder'
      ],
      correct: 1,
      explanation: 'គោលការណ៍នេះគឺដើម្បីបំបែក UI និង Logic ទៅជា Components ផ្សេងគ្នាដែលនីមួយៗមានតួនាទីច្បាស់លាស់។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Card Component ដែលអាចប្រើឡើងវិញបាន**

បង្កើត Component មួយឈ្មោះ \`Card\` ដែលទទួល Props សម្រាប់ចំណងជើង (title), អត្ថបទ (text), និង Icon (optional)។

**តម្រូវការ:**

1.  បង្កើតឯកសារ \`components/Card.js\`។
2.  នៅក្នុង \`Card.js\` បង្កើត Functional Component ដែលទទួល \`title\`, \`text\`, និង \`iconName\` ជា Props។
3.  ប្រើ View ជា Container សម្រាប់ Card។
4.  ប្រើ Text ដើម្បីបង្ហាញ \`title\` និង \`text\`។
5.  (ស្រេចចិត្ត) ប្រសិនបើអ្នកបានដំឡើង Library Icon ដូចជា **react-native-vector-icons** សូមប្រើ Icon Component មួយតាមរយៈ Props (\`iconName\`)។
6.  ប្រើ StyleSheet ដើម្បីកំណត់ Styles សម្រាប់ Card (ដូចជា Shadow, Padding, Radius) និងអត្ថបទ។
7.  នៅក្នុង \`App.js\` សូម Import \`Card\` Component ហើយប្រើវាពីរដងជាមួយនឹង Props ផ្សេងគ្នា។

**ការណែនាំ:** ព្យាយាមបង្កើត Design Card ឱ្យដូចគ្នានៅពេលប្រើ Props ផ្សេងគ្នា។
    `,
    solution: `
\`\`\`javascript
// components/Card.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// (Optional) Import VectorIcon library if installed
// import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({ title, text, iconName }) => {
  return (
    <View style={styles.card}>
      {/* (Optional) Use Icon component */}
      {/* {iconName && <Icon name={iconName} size={30} color="#333" />} */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default Card;
\`\`\`

\`\`\`javascript
// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <View style={styles.container}>
      <Card
        title="Welcome to React Native"
        text="Learn how to build beautiful mobile apps for iOS and Android using a single codebase."
      />
      <Card
        title="Reusable Components"
        text="This is an example of a reusable card component with different props."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default App;
\`\`\`
`
  }
};

export default ReactNativeLesson2_4Content;