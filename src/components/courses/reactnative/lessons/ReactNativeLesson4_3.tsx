import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson4_3Content: LessonContent = {
  title: 'Advanced State ជាមួយ Redux Toolkit',
  objectives: [
    'យល់ពីសារៈសំខាន់នៃ Redux Toolkit',
    'រៀនពីរបៀបដំឡើងនិងរៀបចំបរិស្ថាន Redux Toolkit',
    'អនុវត្តន៍ការបង្កើត Slice ជាមួយ `createSlice`',
    'ស្វែងយល់ពីរបៀបប្រើ `useSelector` និង `useDispatch` Hooks',
    'រៀនពីរបៀបធ្វើ Asynchronous Actions ជាមួយ Redux Thunk',
    'យល់ពីរបៀបដែល Redux Toolkit ធ្វើឱ្យការប្រើ Redux កាន់តែងាយស្រួល'
  ],
  content: `
# Advanced State ជាមួយ Redux Toolkit 🧰

---

**Redux Toolkit (RTK)** គឺជាឧបករណ៍ដែលត្រូវបានណែនាំជាផ្លូវការសម្រាប់ការសរសេរ Redux Logic ។ វាត្រូវបានបង្កើតឡើងដើម្បីដោះស្រាយបញ្ហានៃ Boilerplate Code (កូដដដែលៗ) និងភាពស្មុគស្មាញដែលតែងតែកើតមាននៅក្នុង Redux Standard ។ Redux Toolkit ធ្វើឱ្យការគ្រប់គ្រង State មានលក្ខណៈសាមញ្ញនិងមានប្រសិទ្ធភាពជាងមុន។

---

## 1. ហេតុអ្វីត្រូវប្រើ Redux Toolkit?

* **Simplification:** កាត់បន្ថយ Boilerplate Code យ៉ាងច្រើន។
* **Best Practices:** ផ្តល់នូវការអនុវត្តន៍ល្អបំផុត (Best Practices) ដោយស្វ័យប្រវត្តិ។
* **Immutability:** ប្រើ Immer Library ដើម្បីឱ្យយើងសរសេរ Immutability Logic ដូចជាការកែប្រែ State ដោយផ្ទាល់។
* **Async Logic:** រួមបញ្ចូលជាមួយ Redux Thunk ដើម្បីគ្រប់គ្រង Asynchronous Logic ដូចជាការ Fetch ទិន្នន័យពី API ។

---

## 2. ការដំឡើង Redux Toolkit

យើងត្រូវដំឡើង Packages ពីរ៖
1.  **Redux Toolkit Core:**
    \`\`\`bash
    npm install @reduxjs/toolkit react-redux
    \`\`\`
    * \`@reduxjs/toolkit\`: Contains the core Redux Toolkit functions.
    * \`react-redux\`: សម្រាប់ភ្ជាប់ React Components ជាមួយ Redux Store ។

---

## 3. ការរៀបចំ Store

**ជំហានទី ១៖ បង្កើត Slice**
**Slice** គឺជាសំណុំនៃ Redux Logic (Reducer និង Actions) សម្រាប់ Feature មួយ។ យើងប្រើ \`createSlice\` ដើម្បីបង្កើត Slice ។

\`\`\`javascript
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Immer allows direct state modification
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
\`\`\`

**ជំហានទី ២៖ បង្កើត Store**
យើងប្រើ \`configureStore\` ដើម្បីបង្កើត Store ។

\`\`\`javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
\`\`\`

**ជំហានទី ៣៖ ភ្ជាប់ Store ជាមួយ App**
រុំ Component របស់អ្នកនៅក្នុង \`<Provider>\` Component ដែលនាំចេញពី \`react-redux\` ។

\`\`\`javascript
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Counter from './src/features/counter/Counter';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
\`\`\`

---

## 4. ការប្រើប្រាស់ Redux Hooks

ដើម្បីភ្ជាប់ Components ជាមួយ Redux Store យើងប្រើ Hooks ពីរ៖
* **\`useSelector\`:** សម្រាប់ទទួលបាន State ពី Store ។
* **\`useDispatch\`:** សម្រាប់បញ្ជូន Actions ។

\`\`\`javascript
// src/features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Increment by 5" onPress={() => dispatch(incrementByAmount(5))} />
    </View>
  );
}

export default Counter;
\`\`\`

---

## 5. Asynchronous Logic (Async Thunks)

**Redux Thunk** ត្រូវបានរួមបញ្ចូលជាមួយ Redux Toolkit ដើម្បីគ្រប់គ្រង Asynchronous Operations (ឧទាហរណ៍៖ ការ Fetch ទិន្នន័យពី API)។ យើងប្រើ \`createAsyncThunk\` ដើម្បីបង្កើត Async Action ។

\`\`\`javascript
// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
\`\`\`
`,
  examples: [],
  quiz: [
    {
      question: 'តើ Redux Toolkit (RTK) ដោះស្រាយបញ្ហាអ្វីខ្លះនៅក្នុង Standard Redux?',
      options: [
        'Prop Drilling',
        'ភាពស្មុគស្មាញនិង Boilerplate Code',
        'ការរៀបចំ Layout',
        'ការគ្រប់គ្រង Navigation'
      ],
      correct: 1,
      explanation: 'RTK ជួយកាត់បន្ថយភាពស្មុគស្មាញនិងកូដដដែលៗរបស់ Redux Standard។'
    },
    {
      question: 'តើ Component ណាដែលត្រូវរុំ App ទាំងមូលដើម្បីប្រើ Redux?',
      options: ['<Provider>', '<Store>', '<Reducer>', '<Slice>'],
      correct: 0,
      explanation: '`<Provider>` Component ពី `react-redux` ត្រូវបានប្រើដើម្បីផ្តល់ Store ទៅកាន់ Components ទាំងអស់។'
    },
    {
      question: 'តើ `createSlice` Function ធ្វើអ្វីខ្លះ?',
      options: [
        'បង្កើត Reducer, Actions, និង State ទាំងអស់ក្នុងពេលតែមួយ',
        'បង្កើត Action តែប៉ុណ្ណោះ',
        'បង្កើត Reducer តែប៉ុណ្ណោះ',
        'បង្កើត Store'
      ],
      correct: 0,
      explanation: '`createSlice` គឺជា Function ដ៏មានឥទ្ធិពលដែលបង្កើត Reducer, Actions, និង Action Creators ទាំងអស់ក្នុងពេលតែមួយ។'
    },
    {
      question: 'តើ Hook មួយណាដែលប្រើសម្រាប់ទទួលបាន State ពី Store?',
      options: ['useDispatch', 'useSelector', 'useState', 'useContext'],
      correct: 1,
      explanation: '`useSelector` Hook ប្រើសម្រាប់ជ្រើសរើសនិងទទួលបានផ្នែកណាមួយនៃ State ពី Store។'
    },
    {
      question: 'តើ Hook មួយណាដែលប្រើសម្រាប់បញ្ជូន (Dispatch) Actions?',
      options: ['useDispatch', 'useSelector', 'useState', 'useCallback'],
      correct: 0,
      explanation: '`useDispatch` Hook ផ្តល់នូវ Function `dispatch` សម្រាប់បញ្ជូន Actions។'
    },
    {
      question: 'តើ `createAsyncThunk` ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'គ្រប់គ្រង Asynchronous Logic (ឧទាហរណ៍៖ Data Fetching)',
        'គ្រប់គ្រង Styles',
        'គ្រប់គ្រង Navigation'
      ],
      correct: 1,
      explanation: '`createAsyncThunk` គឺជា Function សម្រាប់បង្កើត Actions ដែលគ្រប់គ្រង Asynchronous Operations។'
    },
    {
      question: 'តើ Immer Library ជួយអ្វីខ្លះក្នុង Redux Toolkit?',
      options: [
        'ធ្វើឱ្យ State ក្លាយជា Object',
        'ធ្វើឱ្យការកែប្រែ State កាន់តែងាយស្រួលដោយសរសេរដូចជាការកែប្រែដោយផ្ទាល់',
        'ធ្វើឱ្យ Code កាន់តែវែង',
        'ធ្វើឱ្យ App ដំណើរការយឺត'
      ],
      correct: 1,
      explanation: 'Immer ជួយឱ្យយើងអាចសរសេរ Immutability Logic ដូចជាការកែប្រែដោយផ្ទាល់ទៅលើ State។'
    },
    {
      question: 'តើ Redux Toolkit ត្រូវការ Redux Standard ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'ត្រូវការតែនៅលើ iOS', 'ត្រូវការតែនៅលើ Android'],
      correct: 1,
      explanation: 'ទេ, Redux Toolkit គឺជា Abstraction Layer ដែលគ្របដណ្តប់លើ Redux Core ហើយត្រូវបានណែនាំឱ្យប្រើជំនួស Redux Standard។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Counter App ជាមួយ Redux Toolkit**

បង្កើត Counter App មួយដែលប្រើ Redux Toolkit ដើម្បីគ្រប់គ្រង State នៃការរាប់ចំនួន។

**តម្រូវការ:**

1.  ដំឡើង \`@reduxjs/toolkit\` និង \`react-redux\`។
2.  បង្កើត Slice មួយឈ្មោះ **counterSlice** ដែលមាន State ដំបូង (\`value: 0\`) និង Reducers ពីរ៖
    * \`increment\` (សម្រាប់បង្កើនចំនួន)
    * \`decrement\` (សម្រាប់បន្ថយចំនួន)
3.  បង្កើត Redux Store នៅក្នុងឯកសារដាច់ដោយឡែក។
4.  រុំ Component របស់អ្នកនៅក្នុង \`<Provider>\` Component។
5.  នៅក្នុង Counter Component សូមប្រើ \`useSelector\` ដើម្បីបង្ហាញចំនួនបច្ចុប្បន្ន។
6.  ប្រើ \`useDispatch\` ដើម្បីបញ្ជូន Actions \`increment\` និង \`decrement\` នៅពេលចុច Button។

**ការណែនាំ:** រៀបចំ Folder Structure ដូចខាងក្រោម៖
\`\`\`
- src
  - app
    - store.js
  - features
    - counter
      - counterSlice.js
      - Counter.js
\`\`\`
    `,
    solution: `
\`\`\`javascript
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
\`\`\`

\`\`\`javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
\`\`\`

\`\`\`javascript
// src/features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => dispatch(increment())}
        />
        <View style={{ width: 10 }} />
        <Button
          title="Decrement"
          onPress={() => dispatch(decrement())}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default Counter;
\`\`\`

\`\`\`javascript
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Counter from './src/features/counter/Counter';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
\`\`\`
`
  }
};

export default ReactNativeLesson4_3Content;