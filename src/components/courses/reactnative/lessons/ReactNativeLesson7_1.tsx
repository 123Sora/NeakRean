import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson7_1Content: LessonContent = {
  title: 'ការបង្កើត Todo App',
  objectives: [
    'អនុវត្តន៍ចំណេះដឹងដែលបានរៀនពីមុនដើម្បីបង្កើត App ជាក់ស្តែង',
    'រៀនពីរបៀបគ្រប់គ្រង State នៃ Todo List',
    'អនុវត្តន៍ការបន្ថែម, លុប, និងកែប្រែ Tasks',
    'ប្រើប្រាស់ Component ដូចជា `FlatList` សម្រាប់បង្ហាញបញ្ជី',
    'រៀនពីរបៀបរៀបចំ Folder Structure របស់ Project'
  ],
  content: `
# ការបង្កើត Todo App ✅

---

**Todo App** គឺជា Project ដែលល្អបំផុតសម្រាប់អនុវត្តន៍នូវគំនិតជាមូលដ្ឋានរបស់ React Native ។ វារួមបញ្ចូលគ្នានូវ State Management, Component Rendering, User Input, និង List Display ។

## 1. ការរៀបចំ Folder Structure

ការរៀបចំ Project ឱ្យមានរបៀបរៀបរយគឺជារឿងសំខាន់។
\`\`\`
- src/
  - components/
    - TodoItem.js
    - AddTodo.js
  - screens/
    - TodoListScreen.js
  - App.js
\`\`\`
* **\`components/\`:** សម្រាប់ Components ដែលអាចប្រើឡើងវិញបាន (Reusable)។
* **\`screens/\`:** សម្រាប់ Main Components ដែលបង្ហាញ Screen នីមួយៗ។

## 2. រចនាសម្ព័ន្ធរបស់ App

* **State Management:** យើងនឹងប្រើ \`useState\` Hook ដើម្បីគ្រប់គ្រងបញ្ជី Todos ។
    \`\`\`javascript
    const [todos, setTodos] = useState([]);
    \`\`\`
* **Data Structure:** Todo នីមួយៗអាចជា Object ដែលមាន \`id\`, \`text\`, និង \`completed\` ។
    \`\`\`javascript
    { id: '1', text: 'រៀន React Native', completed: false }
    \`\`\`

## 3. Component នីមួយៗ

### \`TodoListScreen.js\` (Parent Component)
* **តួនាទី:** គ្រប់គ្រង State របស់ Todos ទាំងអស់។
* **មុខងារ:**
    * បង្ហាញបញ្ជី Todos ដោយប្រើ \`FlatList\` ។
    * មាន Function សម្រាប់បន្ថែម, លុប, និងកែប្រែ Todos ។
    * បញ្ជូន Functions ទាំងនេះចុះទៅ Child Components ជា Props ។

### \`AddTodo.js\` (Child Component)
* **តួនាទី:** ទទួល Input ពីអ្នកប្រើប្រាស់។
* **មុខងារ:**
    * មាន \`TextInput\` សម្រាប់បញ្ចូល Todo ថ្មី។
    * មាន \`Button\` សម្រាប់ Submit Todo ។
    * នៅពេលចុច Button វានឹងហៅ Function (ដែលបានទទួលជា Prop) ដើម្បីបន្ថែម Todo ថ្មី។

### \`TodoItem.js\` (Child Component)
* **តួនាទី:** បង្ហាញ Todo តែមួយ។
* **មុខងារ:**
    * បង្ហាញអត្ថបទរបស់ Todo ។
    * មាន \`Button\` ឬ \`TouchableOpacity\` សម្រាប់លុប Todo ។
    * មាន Checkbox ឬ Method សម្រាប់ Mark ថា Todo នោះបានបញ្ចប់។

## 4. ការអនុវត្តន៍លំអិត

### ការបន្ថែម Todo
1.  នៅក្នុង \`AddTodo.js\` ប្រើ \`useState\` ដើម្បីគ្រប់គ្រង Text Input ។
2.  នៅពេលចុច Button សូមហៅ \`onAddTodo(inputText)\` ដែលជា Prop ។
3.  នៅក្នុង \`TodoListScreen.js\` សូមបង្កើត Function \`handleAddTodo(text)\` ដែលបង្កើត Object Todo ថ្មីជាមួយ \`id\` ពិសេស (ដូចជា \`Date.now().toString()\`) ហើយប្រើ \`setTodos([...todos, newTodo])\` ដើម្បី Update State ។

### ការលុប Todo
1.  នៅក្នុង \`TodoItem.js\` ទទួល \`id\` និង \`onDelete\` Function ជា Props ។
2.  នៅពេលចុច Button លុប សូមហៅ \`onDelete(id)\` ។
3.  នៅក្នុង \`TodoListScreen.js\` សូមបង្កើត Function \`handleDeleteTodo(id)\` ដែលប្រើ \`todos.filter(todo => todo.id !== id)\` ដើម្បីបង្កើត Array ថ្មីដោយគ្មាន Todo ដែលត្រូវលុប។

### ការកែប្រែ (Mark as Completed)
1.  នៅក្នុង \`TodoItem.js\` ទទួល \`onToggleComplete\` ជា Prop ។
2.  នៅពេលចុចលើ Item សូមហៅ \`onToggleComplete(id)\` ។
3.  នៅក្នុង \`TodoListScreen.js\` សូមបង្កើត Function \`handleToggleComplete(id)\` ដែលប្រើ \`todos.map()\` ដើម្បី Update Property \`completed\` របស់ Todo នោះ។

## 5. ការប្រើ \`FlatList\`

\`FlatList\` ត្រូវបានប្រើដើម្បីបង្ហាញបញ្ជីទិន្នន័យដែលមានទំហំធំ។
\`\`\`javascript
<FlatList
  data={todos}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TodoItem
      todo={item}
      onDelete={handleDeleteTodo}
      onToggleComplete={handleToggleComplete}
    />
  )}
/>
\`\`\`
* **\`data\`:** Array នៃទិន្នន័យដែលត្រូវបង្ហាញ។
* **\`keyExtractor\`:** Function សម្រាប់ផ្តល់ Unique Key សម្រាប់ Item នីមួយៗ។
* **\`renderItem\`:** Function ដែលត្រឡប់ Component សម្រាប់ Item នីមួយៗ។
`,
  examples: [],
  quiz: [
    {
      question: 'តើ Component មួយណាដែលគួរគ្រប់គ្រង State នៃ Todo List ទាំងមូល?',
      options: [
        '`TodoItem.js`',
        '`AddTodo.js`',
        '`TodoListScreen.js`',
        'គ្មាន Component ណាមួយទេ'
      ],
      correct: 2,
      explanation: 'Parent Component (`TodoListScreen.js`) គួរតែគ្រប់គ្រង State របស់ List ទាំងមូល។'
    },
    {
      question: 'តើ `FlatList` ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'បង្ហាញ Image',
        'បង្ហាញបញ្ជីទិន្នន័យដែលមានទំហំធំ',
        'ធ្វើ Form Submission',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`FlatList` ត្រូវបាន Optimized សម្រាប់បង្ហាញបញ្ជីទិន្នន័យដែលមានទំហំធំ។'
    },
    {
      question: 'តើយើងគួរធ្វើអ្វីដើម្បីបញ្ជូន Function ពី Parent ទៅ Child Component?',
      options: [
        'ប្រើ State',
        'ប្រើ Props',
        'ប្រើ Context',
        'ប្រើ Redux'
      ],
      correct: 1,
      explanation: 'យើងបញ្ជូន Functions ចុះទៅ Child ជា Props (ឧទាហរណ៍៖ `onAddTodo`)។'
    },
    {
      question: 'តើ Method ណាដែលប្រើដើម្បីបង្កើត Array ថ្មីដោយគ្មាន Item ដែលត្រូវលុប?',
      options: ['`map()`', '`filter()`', '`reduce()`', '`slice()`'],
      correct: 1,
      explanation: '`Array.prototype.filter()` ត្រូវបានប្រើដើម្បីត្រឡប់ Array ថ្មីដោយមិនរាប់បញ្ចូល Item ដែលមានលក្ខខណ្ឌមិនត្រូវគ្នា។'
    },
    {
      question: 'តើ `keyExtractor` ក្នុង `FlatList` មានតួនាទីអ្វី?',
      options: [
        'បង្ហាញ Key របស់ Item',
        'ផ្តល់ Unique Key សម្រាប់ Item នីមួយៗ',
        'កំណត់ Style របស់ Item',
        'គ្មានតួនាទីទេ'
      ],
      correct: 1,
      explanation: '`keyExtractor` ជួយ React ឱ្យកំណត់អត្តសញ្ញាណ Item នីមួយៗដើម្បី Optimized Performance របស់ List ។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Todo App ពេញលេញ**

បង្កើត Todo App ដែលមានមុខងារបន្ថែម, លុប, និង Mark as Completed ។

**តម្រូវការ:**

1.  រៀបចំ Folder Structure ដូចបានរៀបរាប់ក្នុងមេរៀន។
2.  នៅក្នុង \`TodoListScreen.js\` ប្រើ \`useState\` ដើម្បីគ្រប់គ្រងបញ្ជី Todos ។
3.  បង្កើត Component \`AddTodo.js\` ដែលមាន \`TextInput\` និង Button ដើម្បីបន្ថែម Todo ថ្មី។
4.  បង្កើត Component \`TodoItem.js\` ដែលបង្ហាញ Todo នីមួយៗហើយមាន Button សម្រាប់លុបវា។
5.  ប្រើ \`FlatList\` នៅក្នុង \`TodoListScreen.js\` ដើម្បីបង្ហាញបញ្ជី Todos ។
6.  អនុវត្តន៍មុខងារ Mark as Completed នៅពេលចុចលើ Item នោះ។

**ការណែនាំ:** ប្រើ Style ដូចជា \`textDecorationLine\` ដើម្បីបង្ហាញថា Task បានបញ្ចប់។
    `,
    solution: `
\`\`\`javascript
// src/components/TodoItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onToggleComplete(todo.id)}>
        <Text
          style={[
            styles.itemText,
            { textDecorationLine: todo.completed ? 'line-through' : 'none' },
          ]}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <Text style={styles.deleteButton}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 18,
  },
  deleteButton: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default TodoItem;
\`\`\`

\`\`\`javascript
// src/components/AddTodo.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handlePress = () => {
    if (text.trim().length > 0) {
      onAddTodo(text);
      setText('');
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid todo item.');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo..."
        onChangeText={setText}
        value={text}
      />
      <Button
        title="Add"
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default AddTodo;
\`\`\`

\`\`\`javascript
// src/screens/TodoListScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text, completed: false },
    ]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Todo List</Text>
      <AddTodo onAddTodo={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default TodoListScreen;
\`\`\`
`
  }
};

export default ReactNativeLesson7_1Content;