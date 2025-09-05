import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson2_2Content: LessonContent = {
  title: 'Functional Components និង Hooks 🎣',
  objectives: [
    'យល់ពី Functional Components និងរបៀបបង្កើតវា',
    'ស្វែងយល់ពី Hooks និងសារៈសំខាន់របស់វា',
    'រៀនពីរបៀបប្រើប្រាស់ useState ដើម្បីគ្រប់គ្រង State',
    'រៀនពីរបៀបប្រើប្រាស់ useEffect ដើម្បីគ្រប់គ្រង Side Effects',
    'អនុវត្តន៍ការបង្កើត Interactive Components ដោយប្រើ Hooks',
    'យល់ពីរបៀបដែល Hooks ធ្វើឱ្យ Code កាន់តែងាយស្រួលយល់ និងរៀបចំ'
  ],
  content: `
# Functional Components និង Hooks 🎣

---

នៅក្នុង React Native ទំនើប យើងប្រើ **Functional Components** ជាចម្បងជាមួយ **Hooks** ដើម្បីគ្រប់គ្រង State និង Lifecycle។ វិធីសាស្ត្រនេះធ្វើឱ្យ Code កាន់តែសាមញ្ញ អាចប្រើឡើងវិញបាន និងងាយស្រួលក្នុងការ Test។

---

## 1. Functional Components ជាអ្វី?

**Functional Component** គឺជា JavaScript Function មួយដែលទទួល Props ជា Argument ហើយ Return ជា React Element (UI)។ វាមិនមាន State ឬ Lifecycle Methods ដូច Class Components ពីមុនទេ។

* **ឧទាហរណ៍:**
\`\`\`javascript
import React from 'react';
import { View, Text } from 'react-native';

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>សួស្តី, {name}!</Text>
    </View>
  );
};
\`\`\`
នៅក្នុងឧទាហរណ៍នេះ \`Greeting\` គឺជា Functional Component ដែលទទួល \`name\` ជា Props។

---

## 2. ហេតុអ្វីត្រូវប្រើ Hooks?

**Hooks** គឺជា Functions ពិសេសដែលអនុញ្ញាតឱ្យ Functional Components ប្រើ State និង React Features ផ្សេងទៀតដោយមិនចាំបាច់សរសេរ Class។ វាមិនមាននៅក្នុង Functional Components ពីមុនទេ។

* **អត្ថប្រយោជន៍:**
    * ធ្វើឱ្យ Code កាន់តែមានលក្ខណៈសាមញ្ញនិងខ្លី។
    * ងាយស្រួលក្នុងការចែករំលែក Logic ដែលមាន State (Custom Hooks)។
    * ជៀសវាងបញ្ហា \`this\` ដែលតែងតែកើតមាននៅក្នុង Class Components។

---

## 3. useState Hook

**useState** គឺជា Hook ដែលប្រើសម្រាប់បន្ថែម **State** ទៅក្នុង Functional Component។ State គឺជាទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន ហើយការផ្លាស់ប្តូរនឹងធ្វើឱ្យ Component Render ឡើងវិញដោយស្វ័យប្រវត្តិ។

* **របៀបប្រើ:**
  \`\`\`javascript
  const [stateVariable, setStateFunction] = useState(initialValue);
  \`\`\`
  * \`stateVariable\`: គឺជាអថេរដែលផ្ទុក State បច្ចុប្បន្ន។
  * \`setStateFunction\`: គឺជា Function ដែលប្រើសម្រាប់ផ្លាស់ប្តូរ State។
  * \`initialValue\`: តម្លៃដំបូងរបស់ State។

* **ឧទាហរណ៍:** បង្កើត Counter App។

  \`\`\`javascript
  import React, { useState } from 'react';
  import { View, Text, Button } from 'react-native';

  const Counter = () => {
    const [count, setCount] = useState(0);

    return (
      <View>
        <Text>ចំនួន: {count}</Text>
        <Button title="បង្កើន" onPress={() => setCount(count + 1)} />
      </View>
    );
  };
  \`\`\`

---

## 4. useEffect Hook

**useEffect** គឺជា Hook ដែលអនុញ្ញាតឱ្យយើងគ្រប់គ្រង **Side Effects** នៅក្នុង Functional Components។ Side Effects គឺទង្វើដែលកើតឡើងនៅពេល Component Render ឬផ្លាស់ប្តូរ (ដូចជាការ Fetch ទិន្នន័យពី API, ការកំណត់ Timer, ឬការធ្វើបច្ចុប្បន្នភាព DOM)។

* **របៀបប្រើ:**
  \`\`\`javascript
  useEffect(() => {
    // កូដសម្រាប់ Side Effect
    return () => {
      // Cleanup function (Optional)
    };
  }, [dependencies]);
  \`\`\`
  * **Callback Function:** គឺជាកូដដែលនឹងត្រូវដំណើរការ។
  * **Dependencies Array:** គឺជា Array នៃអថេរ។ useEffect នឹងដំណើរការឡើងវិញនៅពេលដែលអថេរក្នុង Array នេះមានការផ្លាស់ប្តូរ។
    * **Empty Array (\`[]\`):** ដំណើរការតែម្តងគត់នៅពេល Component Load ដំបូង។ ដូចទៅនឹង \`componentDidMount\`។
    * **No Array:** ដំណើរការរាល់ពេល Component Render ឡើងវិញ។
    * **With Variables:** ដំណើរការនៅពេល Load ដំបូង និងនៅពេលដែល Variables ផ្លាស់ប្តូរ។

* **ឧទាហរណ៍:** Fetch ទិន្នន័យពី API។

  \`\`\`javascript
  import React, { useState, useEffect } from 'react';
  import { View, Text } from 'react-native';

  const DataFetcher = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => setData(json));
    }, []); // Empty array, runs once on component mount

    return (
      <View>
        {data ? <Text>{data.title}</Text> : <Text>Loading...</Text>}
      </View>
    );
  };
  \`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Component ដែលប្តូរអត្ថបទនៅពេលចុច</h3>
<p>ប្រើ useState ដើម្បីគ្រប់គ្រង Visible State</p>
<pre><code class="language-javascript">
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? 'លាក់អត្ថបទ' : 'បង្ហាញអត្ថបទ'}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && <Text style={styles.text}>ខ្ញុំបានបង្ហាញ!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginTop: 20 },
});

export default ToggleText;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Hooks ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់បង្កើត Class Components',
        'សម្រាប់បន្ថែម State និង Features ផ្សេងទៀតទៅ Functional Components',
        'សម្រាប់រៀបចំ Layout',
        'សម្រាប់ Fetch Data តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'Hooks អនុញ្ញាតឱ្យ Functional Components ប្រើ State និង Features របស់ React។'
    },
    {
      question: 'តើ Hook មួយណាដែលប្រើសម្រាប់គ្រប់គ្រង State?',
      options: ['useEffect', 'useState', 'useRef', 'useContext'],
      correct: 1,
      explanation: '`useState` គឺជា Hook ដែលប្រើសម្រាប់បន្ថែម State ទៅក្នុង Functional Component។'
    },
    {
      question: 'តើ useState Hook ត្រឡប់អ្វីមកវិញ?',
      options: [
        'Array ដែលមាន State និង Function សម្រាប់ផ្លាស់ប្តូរ State',
        'State Variable តែមួយ',
        'Object មួយដែលមាន Props',
        'Nothing'
      ],
      correct: 0,
      explanation: '`useState` ត្រឡប់ Array ដែលមានតម្លៃ State បច្ចុប្បន្ន និង Function សម្រាប់កំណត់តម្លៃ State ថ្មី។'
    },
    {
      question: 'តើ useEffect Hook ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: ['គ្រប់គ្រង State', 'គ្រប់គ្រង Side Effects', 'បង្កើត UI', 'គ្រប់គ្រង Props'],
      correct: 1,
      explanation: '`useEffect` ប្រើសម្រាប់គ្រប់គ្រង Side Effects ដូចជា Data Fetching ឬ Timers។'
    },
    {
      question: 'ប្រសិនបើ useEffect មាន Dependencies Array ទទេ (\`[]\`) តើវានឹងដំណើរការនៅពេលណា?',
      options: [
        'រាល់ពេល Component Render',
        'នៅពេល Component Load លើកដំបូងប៉ុណ្ណោះ',
        'មិនដំណើរការទាល់តែសោះ',
        'នៅពេល State ផ្លាស់ប្តូរ'
      ],
      correct: 1,
      explanation: 'Dependencies Array ទទេធ្វើឱ្យ `useEffect` ដំណើរការតែម្តងគត់នៅពេល Component ត្រូវបាន Load លើកដំបូង។'
    },
    {
      question: 'តើអ្វីទៅជា Functional Component?',
      options: [
        'Class មួយដែលមាន render method',
        'JavaScript Object',
        'JavaScript Function ដែលត្រឡប់ React Element',
        'HTML tag'
      ],
      correct: 2,
      explanation: 'Functional Component គឺជា Function ដែលត្រឡប់ជា UI (React Element)។'
    },
    {
      question: 'តើយើងអាចសរសេរ Hooks នៅខាងក្រៅ Functional Component បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែ useState', 'បានតែ useEffect'],
      correct: 1,
      explanation: 'Hooks ត្រូវតែហៅនៅខាងក្នុង Functional Component ជានិច្ច។'
    },
    {
      question: 'តើការប្រើប្រាស់ Hooks ជួយអ្វីដល់ Code?',
      options: [
        'ធ្វើឱ្យ Code កាន់តែវែង',
        'ធ្វើឱ្យ Code កាន់តែស្មុគស្មាញ',
        'ធ្វើឱ្យ Code កាន់តែសាមញ្ញនិងងាយស្រួលយល់',
        'បង្កើនល្បឿន Compilation'
      ],
      correct: 2,
      explanation: 'Hooks ជួយធ្វើឱ្យ Code កាន់តែមានលក្ខណៈសាមញ្ញនិងងាយស្រួលរៀបចំ។'
    },
    {
      question: 'តើ Function ទីពីរដែលត្រឡប់ដោយ useState (`setCount`) មានតួនាទីអ្វី?',
      options: [
        'បង្ហាញតម្លៃ State',
        'ផ្លាស់ប្តូរតម្លៃ State',
        'លុប State',
        'ធ្វើឱ្យ App Crashed'
      ],
      correct: 1,
      explanation: 'Function ទីពីរប្រើសម្រាប់កំណត់តម្លៃ State ថ្មី។'
    },
    {
      question: 'តើ Side Effect មានន័យដូចម្តេច?',
      options: [
        'ប្រតិកម្មរបស់ UI',
        'ប្រតិបត្តិការដែលធ្វើអន្តរកម្មជាមួយពិភពខាងក្រៅ (ឧទាហរណ៍ API)',
        'កំហុសក្នុង Code',
        'ការផ្លាស់ប្តូរ Props'
      ],
      correct: 1,
      explanation: 'Side Effect គឺជាប្រតិបត្តិការដែលធ្វើអន្តរកម្មជាមួយពិភពខាងក្រៅដូចជា Data Fetching ឬ Subscription។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត To-Do List App សាមញ្ញ**

បង្កើត App To-Do List ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បន្ថែម To-Do ថ្មី។

**តម្រូវការ:**

1.  ប្រើ **useState** ដើម្បីគ្រប់គ្រង Array នៃ To-Do Items។
2.  បង្កើត **TextInput** សម្រាប់អ្នកប្រើប្រាស់វាយបញ្ចូល To-Do ថ្មី។
3.  បង្កើត **Button** សម្រាប់បន្ថែម To-Do ទៅក្នុង List។
4.  បង្ហាញ To-Do Items ទាំងអស់ដោយប្រើ **FlatList** (ឬ Map function)។
5.  (ស្រេចចិត្ត) បន្ថែម Function ដើម្បីលុប To-Do Item ចេញពី List នៅពេលចុច។

**ការណែនាំ:** នេះជាកិច្ចការមួយដែលត្រូវការការគិតឡូហ្សិក។ សាកល្បងសរសេរកូដមួយជំហានម្តងៗ។
    `,
    solution: `
\`\`\`javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.length > 0) {
      setTodos(currentTodos => [...currentTodos, { id: Math.random().toString(), text: todo }]);
      setTodo('');
    }
  };

  const removeTodo = (idToRemove) => {
    setTodos(currentTodos => currentTodos.filter(item => item.id !== idToRemove));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo..."
          onChangeText={setTodo}
          value={todo}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <Button title="Delete" color="red" onPress={() => removeTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    flex: 1,
    borderRadius: 6,
    marginRight: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  todoText: {
    fontSize: 18,
  },
});

export default TodoList;
\`\`\`
`
  }
};

export default ReactNativeLesson2_2Content;