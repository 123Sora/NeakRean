import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson5_3Content: LessonContent = {
  title: 'AsyncStorage សម្រាប់ Local Data',
  objectives: [
    'យល់ពីសារៈសំខាន់នៃការរក្សាទុកទិន្នន័យក្នុង Local Storage',
    'ស្គាល់ពី `AsyncStorage` Library',
    'រៀនពីរបៀបដំឡើងនិងប្រើប្រាស់ `AsyncStorage`',
    'អនុវត្តន៍ការរក្សាទុក (`setItem`) និងទទួលបាន (`getItem`) ទិន្នន័យ',
    'រៀនពីរបៀបលុបទិន្នន័យ (`removeItem`)',
    'យល់ពីរបៀបដែល Asynchronous Operations ដំណើរការជាមួយ AsyncStorage'
  ],
  content: `
# AsyncStorage សម្រាប់ Local Data 💾

---

នៅក្នុង Mobile Apps មួយចំនួន យើងចាំបាច់ត្រូវរក្សាទុកទិន្នន័យមួយចំនួននៅលើឧបករណ៍ផ្ទាល់របស់ User (Local Storage) ។ ឧទាហរណ៍៖ User Token, Dark Mode Settings, ឬ Offline Data។ នៅក្នុង React Native យើងប្រើ **AsyncStorage** ដើម្បីធ្វើការនេះ។

---

## 1. អ្វីទៅជា AsyncStorage?

**AsyncStorage** គឺជា Local Storage System ដែលអនុញ្ញាតឱ្យយើងរក្សាទុកនិងទទួលបានទិន្នន័យ (Key-Value Pairs) នៅលើឧបករណ៍របស់អ្នកប្រើប្រាស់។
* វាមានលក្ខណៈ **Asynchronous** ។
* វាជា **Unencrypted** ដូច្នេះមិនគួរប្រើសម្រាប់ទិន្នន័យដែល Sensitive ខ្លាំង (ដូចជា Password)។

---

## 2. ការដំឡើង AsyncStorage

AsyncStorage មិនត្រូវបានដាក់បញ្ចូលដោយផ្ទាល់នៅក្នុង React Native ទៀតទេ ដូច្នេះយើងត្រូវដំឡើងវាជា Library ខាងក្រៅ។
\`\`\`bash
npm install @react-native-async-storage/async-storage
\`\`\`
* **iOS Specific:** ប្រសិនបើអ្នកប្រើ iOS សូមចូលទៅក្នុង Folder \`ios\` ហើយដំណើរការ \`pod install\`។
\`\`\`bash
cd ios
pod install
cd ..
\`\`\`

---

## 3. របៀបប្រើប្រាស់ AsyncStorage

AsyncStorage ផ្តល់នូវ Methods សំខាន់ៗជាច្រើនដែលត្រឡប់ជា Promise ។

* **\`setItem(key, value)\`:** រក្សាទុកទិន្នន័យ។ \`value\` ត្រូវតែជា String ។
* **\`getItem(key)\`:** ទទួលបានទិន្នន័យពី Key ដែលបានផ្តល់។ វាត្រឡប់ជា String ឬ \`null\` ។
* **\`removeItem(key)\`:** លុបទិន្នន័យពី Key ដែលបានផ្តល់។
* **\`clear()\`:** លុបទិន្នន័យទាំងអស់។

* **ឧទាហរណ៍៖ រក្សាទុក User Token**
\`\`\`javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    console.log('Token saved successfully!');
  } catch (error) {
    console.log('Error saving token:', error);
  }
};

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('userToken');
    if (value !== null) {
      console.log('Token retrieved:', value);
      return value;
    }
  } catch (error) {
    console.log('Error retrieving token:', error);
  }
};
\`\`\`

---

## 4. ការរក្សាទុក Object ក្នុង AsyncStorage

ដោយសារ AsyncStorage រក្សាទុកតែ Strings យើងត្រូវប្តូរ Object ទៅជា JSON String មុនពេលរក្សាទុកវា។
* **\`JSON.stringify()\`:** ប្តូរ Object ទៅជា String ។
* **\`JSON.parse()\`:** ប្តូរ String ទៅជា Object ។

* **ឧទាហរណ៍៖ រក្សាទុក User Object**
\`\`\`javascript
// Saving an object
const saveUser = async (userObject) => {
  try {
    const jsonValue = JSON.stringify(userObject);
    await AsyncStorage.setItem('user', jsonValue);
  } catch (error) {
    console.error('Error saving user object:', error);
  }
};

// Retrieving an object
const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error retrieving user object:', error);
  }
};
\`\`\`
`,
  examples: [],
  quiz: [
    {
      question: 'តើ AsyncStorage ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកទិន្នន័យក្នុង Server',
        'រក្សាទុកទិន្នន័យក្នុង Local Storage របស់ឧបករណ៍',
        'ធ្វើ HTTP Requests',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'AsyncStorage គឺជាប្រព័ន្ធ Local Storage សម្រាប់រក្សាទុកទិន្នន័យនៅលើឧបករណ៍។'
    },
    {
      question: 'តើ AsyncStorage មានលក្ខណៈបែបណា?',
      options: [
        'Synchronous',
        'Encrypted',
        'Asynchronous',
        'Temporary'
      ],
      correct: 2,
      explanation: 'AsyncStorage មានលក្ខណៈ Asynchronous ដែលមានន័យថាយើងត្រូវប្រើ `async/await` ។'
    },
    {
      question: 'តើ AsyncStorage អាចរក្សាទុកទិន្នន័យប្រភេទណា?',
      options: [
        'Strings',
        'Objects',
        'Numbers',
        'Arrays'
      ],
      correct: 0,
      explanation: 'AsyncStorage អាចរក្សាទុកតែ Strings ប៉ុណ្ណោះ។ យើងត្រូវប្តូរ Object ទៅជា String មុនពេលរក្សាទុកវា។'
    },
    {
      question: 'តើ Method ណាដែលប្រើដើម្បីទទួលបានទិន្នន័យពី AsyncStorage?',
      options: ['saveItem()', 'getItem()', 'setItem()', 'removeItem()'],
      correct: 1,
      explanation: '`getItem()` Method ប្រើដើម្បីទទួលបានទិន្នន័យ។'
    },
    {
      question: 'តើ `JSON.stringify()` ប្រើសម្រាប់អ្វីនៅពេលរក្សាទុក Object?',
      options: [
        'ដើម្បីប្តូរ Object ទៅជា JSON String',
        'ដើម្បីប្តូរ String ទៅជា Object',
        'ដើម្បីលុបទិន្នន័យ',
        'គ្មានន័យទេ'
      ],
      correct: 0,
      explanation: '`JSON.stringify()` ប្រើដើម្បីប្តូរ JavaScript Object ទៅជា JSON String ដែល AsyncStorage អាចរក្សាទុកបាន។'
    },
    {
      question: 'តើ `removeItem(key)` ធ្វើអ្វី?',
      options: [
        'លុបទិន្នន័យទាំងអស់',
        'លុបទិន្នន័យពី Key ដែលបានផ្តល់',
        'ទទួលបានទិន្នន័យ',
        'រក្សាទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`removeItem(key)` ប្រើសម្រាប់លុបទិន្នន័យជាក់លាក់មួយពី Local Storage។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ រក្សាទុក User Preferences**

បង្កើត App មួយដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ប្តូរ Theme រវាង 'light' និង 'dark' ហើយរក្សាទុក Preference នោះនៅក្នុង AsyncStorage ។

**តម្រូវការ:**

1.  ដំឡើង \`@react-native-async-storage/async-storage\`។
2.  ប្រើ **useState** ដើម្បីគ្រប់គ្រង State សម្រាប់ \`theme\` ។
3.  ប្រើ **useEffect** ដើម្បីទទួលបាន \`theme\` Preference ពី AsyncStorage នៅពេល Component Load ដំបូង។
4.  បង្កើត Function \`saveTheme\` ដែលរក្សាទុក \`theme\` ថ្មីទៅក្នុង AsyncStorage ។
5.  បង្កើត \`Button\` មួយដែលប្តូរ \`theme\` និងហៅ Function \`saveTheme\` ។
6.  ផ្លាស់ប្តូរ Background Color របស់ View ទៅតាម \`theme\` ។

**ការណែនាំ:** កុំភ្លេចប្រើ \`JSON.stringify()\` និង \`JSON.parse()\` ប្រសិនបើអ្នករក្សាទុក Object ។ ក្នុងករណីនេះគ្រាន់តែរក្សាទុក String គឺគ្រប់គ្រាន់។
    `,
    solution: `
\`\`\`javascript
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  // Load theme from storage on mount
  useEffect(() => {
    const getTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('appTheme');
        if (storedTheme !== null) {
          setTheme(storedTheme);
        }
      } catch (e) {
        console.error("Failed to load theme.", e);
      } finally {
        setLoading(false);
      }
    };
    getTheme();
  }, []);

  // Save theme to storage whenever it changes
  const saveTheme = async (newTheme) => {
    try {
      await AsyncStorage.setItem('appTheme', newTheme);
      setTheme(newTheme);
      console.log('Theme saved successfully!');
    } catch (e) {
      console.error("Failed to save theme.", e);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    saveTheme(newTheme);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const textStyle = theme === 'light' ? styles.lightText : styles.darkText;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={textStyle}>Current Theme: {theme}</Text>
      <Button
        title={theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        onPress={toggleTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  lightText: {
    color: '#000',
    fontSize: 20,
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ThemeSwitcher;
\`\`\`
`
  }
};

export default ReactNativeLesson5_3Content;