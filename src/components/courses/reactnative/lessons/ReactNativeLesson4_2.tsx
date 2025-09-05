import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson4_2Content: LessonContent = {
  title: 'Redux និង Context API',
  objectives: [
    'យល់ពីបញ្ហានៃ Global State Management (Prop Drilling)',
    'ស្វែងយល់ពីតួនាទីរបស់ Redux និង Context API',
    'រៀនពីរបៀបប្រើ Redux ដើម្បីគ្រប់គ្រង State ក្នុងកម្រិតធំ',
    'រៀនពីរបៀបប្រើ Context API ដើម្បីជៀសវាង Prop Drilling',
    'យល់ពីភាពខុសគ្នារវាង Redux និង Context API',
    'អនុវត្តន៍ការប្រើប្រាស់ Context API នៅក្នុង App សាមញ្ញមួយ'
  ],
  content: `
# Redux និង Context API 🧩

---

នៅពេល App របស់យើងកាន់តែធំ ការគ្រប់គ្រង State ក៏កាន់តែស្មុគស្មាញ។ ការបញ្ជូន State តាមរយៈ Props ចុះក្រោមទៅ Components ជាច្រើនជាន់អាចក្លាយជាបញ្ហាដែលគេហៅថា **Prop Drilling** ។ ដើម្បីដោះស្រាយបញ្ហានេះ យើងប្រើប្រាស់ Global State Management Libraries ដូចជា Redux ឬ React's Built-in Context API។

---

## 1. បញ្ហានៃ Prop Drilling 🕳️

**Prop Drilling** គឺជាដំណើរការនៃការបញ្ជូនទិន្នន័យ (Props) ចុះពី Parent Component ទៅ Child Component ជាច្រើនជាន់។
* **គុណវិបត្តិ:**
    * ធ្វើឱ្យ Code ពិបាកអាននិងថែទាំ។
    * Component ត្រូវទទួល Props ដែលវាមិនប្រើប្រាស់។
    * បង្កើនភាពស្មុគស្មាញនៃ App។

\`\`\`
Parent
├─── Child A (receive prop)
│    └─── Child B (receive prop)
│         └─── Child C (receive and use prop)
\`\`\`


---

## 2. Context API 🌳

**Context API** គឺជា Feature របស់ React ដែលអនុញ្ញាតឱ្យយើងបញ្ជូនទិន្នន័យឆ្លងកាត់ Tree របស់ Component ដោយមិនចាំបាច់បញ្ជូន Props ជាលំដាប់លំដោយ។ វាល្អសម្រាប់ទិន្នន័យដែលមិនសូវផ្លាស់ប្តូរញឹកញាប់ ដូចជា Theme, User Info, ឬ Localization។

* **របៀបប្រើ:**
    1.  **Create Context:** ប្រើ \`React.createContext()\` ដើម្បីបង្កើត Context Object។
    2.  **Provide Context:** ប្រើ \`Context.Provider\` ដើម្បីរុំ Components ដែលត្រូវការ Access ទៅកាន់ Context Value។
    3.  **Consume Context:** ប្រើ \`useContext\` Hook នៅក្នុង Functional Component ដើម្បីទទួលបានតម្លៃ Context។

* **ឧទាហរណ៍៖ Theme Context**

\`\`\`javascript
// src/contexts/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
\`\`\`

\`\`\`javascript
// App.js
import React from 'react';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import ThemedComponent from './src/components/ThemedComponent';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
\`\`\`

\`\`\`javascript
// src/components/ThemedComponent.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();
  const style = theme === 'light' ? lightThemeStyles : darkThemeStyles;

  return (
    <View style={style.container}>
      <Text style={style.text}>Current Theme: {theme}</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const lightThemeStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 20, color: '#000' },
});

const darkThemeStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' },
  text: { fontSize: 20, color: '#fff' },
});

export default ThemedComponent;
\`\`\`

---

## 3. Redux 🔴

**Redux** គឺជា Library សម្រាប់គ្រប់គ្រង **Predictable State** នៅក្នុង JavaScript Apps ។ វាមានលក្ខណៈស្មុគស្មាញជាង Context API ប៉ុន្តែមានប្រយោជន៍ខ្លាំងណាស់សម្រាប់ **Large-scale Apps** ដែលមាន Global State ស្មុគស្មាញ។

* **គោលការណ៍សំខាន់ៗរបស់ Redux:**
    * **Store:** ប្រភពតែមួយគត់នៃ State របស់ App ។
    * **Actions:** Plain Objects ដែលពិពណ៌នាអំពីអ្វីដែលបានកើតឡើង។
    * **Reducers:** Functions ដែលទទួល State បច្ចុប្បន្ននិង Action ហើយត្រឡប់ State ថ្មី។
    * **Dispatch:** Method ដែលប្រើដើម្បីបញ្ជូន Action ទៅ Reducer ។

* **ពេលណាគួរប្រើ Redux?**
    * App របស់អ្នកមាន State ធំនិងស្មុគស្មាញ។
    * State ផ្លាស់ប្តូរញឹកញាប់និងត្រូវការការគ្រប់គ្រងយ៉ាងច្បាស់លាស់។
    * អ្នកត្រូវការ Debugging Tools កម្រិតខ្ពស់ (ដូចជា Redux DevTools)។

---

## 4. Redux vs. Context API

| លក្ខណៈវិនិច្ឆ័យ | Context API | Redux |
|---|---|---|
| **គោលបំណង** | សម្រាប់ Shared State ក្នុងកម្រិតតូច | សម្រាប់ Global State ក្នុងកម្រិតធំ |
| **ភាពស្មុគស្មាញ** | សាមញ្ញ ងាយស្រួលប្រើ | ស្មុគស្មាញ តម្រូវឱ្យមាន Boilerplate Code |
| **Performance** | Render ឡើងវិញរាល់ពេល Value ផ្លាស់ប្តូរ | មាន Optimization ល្អ (Selector) |
| **Use Case** | Theme, Authentication | E-commerce Carts, Financial Data |
`,
  examples: [],
  quiz: [
    {
      question: 'តើអ្វីទៅជា Prop Drilling?',
      options: [
        'ការបញ្ជូន Props ទៅ Child Component តែមួយ',
        'ការបញ្ជូន Props ឆ្លងកាត់ Component ជាច្រើនជាន់',
        'ការប្រើប្រាស់ Redux',
        'ការប្រើប្រាស់ Context'
      ],
      correct: 1,
      explanation: 'Prop Drilling គឺជាការបញ្ជូន Props ចុះក្រោមទៅ Components ជាច្រើនជាន់។'
    },
    {
      question: 'តើ Context API ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'គ្រប់គ្រង State នៅកម្រិត Component',
        'គ្រប់គ្រង State នៅកម្រិត App',
        'ជៀសវាង Prop Drilling សម្រាប់ទិន្នន័យតូចៗ',
        'រៀបចំ Layout'
      ],
      correct: 2,
      explanation: 'Context API ជួយជៀសវាង Prop Drilling សម្រាប់ទិន្នន័យដែលមិនសូវផ្លាស់ប្តូរញឹកញាប់។'
    },
    {
      question: 'តើ Redux ប្រើសម្រាប់ Application ប្រភេទណា?',
      options: [
        'Small-scale Apps',
        'Medium-scale Apps',
        'Large-scale Apps ដែលមាន State ស្មុគស្មាញ',
        'Apps ដែលគ្មាន State'
      ],
      correct: 2,
      explanation: 'Redux ត្រូវបានប្រើសម្រាប់ Apps ធំៗដែលត្រូវការការគ្រប់គ្រង State យ៉ាងច្បាស់លាស់។'
    },
    {
      question: 'តើ Component ណាដែលប្រើដើម្បីផ្តល់តម្លៃ Context Value?',
      options: ['Context.Consumer', 'useContext', 'Context.Provider', 'createContext'],
      correct: 2,
      explanation: '`Context.Provider` ប្រើដើម្បីផ្តល់តម្លៃ Context ទៅកាន់ Components ទាំងអស់ដែលនៅខាងក្នុងវា។'
    },
    {
      question: 'តើ Redux ធ្វើឱ្យ State មានលក្ខណៈបែបណា?',
      options: [
        'Unpredictable',
        'Predictable',
        'Static',
        'Volatile'
      ],
      correct: 1,
      explanation: 'Redux ជួយធ្វើឱ្យ State មានលក្ខណៈ Predictable (អាចព្យាករណ៍បាន)។'
    },
    {
      question: 'តើ Hook មួយណាដែលប្រើសម្រាប់ទទួលបានតម្លៃ Context?',
      options: ['useReducer', 'useState', 'useContext', 'useRef'],
      correct: 2,
      explanation: '`useContext` Hook ប្រើសម្រាប់ Access ទៅកាន់ Context Value។'
    },
    {
      question: 'តើ Reducer ក្នុង Redux មានតួនាទីអ្វី?',
      options: [
        'បង្ហាញ UI',
        'កំណត់ State ដំបូង',
        'ទទួល State បច្ចុប្បន្ននិង Action ហើយត្រឡប់ State ថ្មី',
        'បញ្ជូន Action'
      ],
      correct: 2,
      explanation: 'Reducer គឺជា Function ដែលកំណត់ថា State គួរតែផ្លាស់ប្តូរដោយរបៀបណា។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Language Switcher ជាមួយ Context API**

បង្កើត App មួយដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ប្តូរភាសារវាងភាសាអង់គ្លេសនិងភាសាខ្មែរ។

**តម្រូវការ:**

1.  បង្កើត Context មួយឈ្មោះ **LanguageContext** ដើម្បីផ្ទុក \`language\` State និង \`toggleLanguage\` Function។
2.  រុំ App ទាំងមូលនៅក្នុង \`LanguageProvider\` ។
3.  បង្កើត Component មួយឈ្មោះ \`LanguageSwitcher\` ដែលប្រើ \`useContext\` Hook ដើម្បីបង្ហាញ Button សម្រាប់ប្តូរភាសា។
4.  នៅក្នុង Component ផ្សេងទៀត សូមប្រើ Context នោះដើម្បីបង្ហាញអត្ថបទទៅតាមភាសាដែលបានជ្រើសរើស។

**ការណែនាំ:** ព្យាយាមកំណត់ Styles ឱ្យសមរម្យ។
    `,
    solution: `
\`\`\`javascript
// src/contexts/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('kh'); // 'kh' for Khmer, 'en' for English

  const toggleLanguage = () => {
    setLanguage(currentLang => (currentLang === 'kh' ? 'en' : 'kh'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
\`\`\`

\`\`\`javascript
// src/components/LanguageSwitcher.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <View style={styles.container}>
      <Button
        title={language === 'kh' ? 'ប្តូរទៅ English' : 'Switch to Khmer'}
        onPress={toggleLanguage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default LanguageSwitcher;
\`\`\`

\`\`\`javascript
// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LanguageProvider, useLanguage } from './src/contexts/LanguageContext';
import LanguageSwitcher from './src/components/LanguageSwitcher';

const AppContent = () => {
  const { language } = useLanguage();
  const translations = {
    kh: {
      welcome: 'សូមស្វាគមន៍មកកាន់កម្មវិធីរបស់យើង!',
      description: 'នេះគឺជាឧទាហរណ៍នៃការគ្រប់គ្រង State ជាមួយ Context API។',
    },
    en: {
      welcome: 'Welcome to our application!',
      description: 'This is an example of state management with the Context API.',
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations[language].welcome}</Text>
      <Text style={styles.description}>{translations[language].description}</Text>
      <LanguageSwitcher />
    </View>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
\`\`\`
`
  }
};

export default ReactNativeLesson4_2Content;