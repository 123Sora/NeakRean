import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson5_1Content: LessonContent = {
  title: 'HTTP Requests ជាមួយ Fetch API',
  objectives: [
    'យល់ពីតម្រូវការក្នុងការទំនាក់ទំនងជាមួយ API',
    'រៀនពីរបៀបប្រើ `Fetch API` នៅក្នុង React Native',
    'អនុវត្តន៍ការធ្វើ GET Request ដើម្បីទទួលបានទិន្នន័យពី Public API',
    'ស្វែងយល់ពី Asynchronous Operations និង `async/await`',
    'រៀនពីរបៀបគ្រប់គ្រង Loading State និង Error Handling'
  ],
  content: `
# HTTP Requests ជាមួយ Fetch API 🌐

---

នៅក្នុងកម្មវិធីទូរស័ព្ទភាគច្រើន យើងចាំបាច់ត្រូវទាក់ទងជាមួយ **Servers** ដើម្បីទទួលបានទិន្នន័យ (ដូចជា Products, Posts, Users) ឬបញ្ជូនទិន្នន័យ (ដូចជា Login Information, Form Submission)។ យើងធ្វើការនេះតាមរយៈ **HTTP Requests** ។ នៅក្នុង React Native យើងប្រើ Built-in **Fetch API** ដើម្បីធ្វើការទំនាក់ទំនងនេះ។

---

## 1. អ្វីទៅជា Fetch API?

**Fetch API** គឺជាមុខងារស្តង់ដាររបស់ JavaScript ដែលផ្តល់នូវចំណុចប្រទាក់សម្រាប់ធ្វើការទំនាក់ទំនងជាមួយ Network Resources (ដូចជា API)។
* វាត្រឡប់ជា **Promise** ដែលធ្វើឱ្យការគ្រប់គ្រង Asynchronous Operations កាន់តែងាយស្រួល។
* វាគាំទ្រ Method ដូចជា \`GET\`, \`POST\`, \`PUT\`, \`DELETE\` ។

---

## 2. Asynchronous Operations និង \`async/await\`

การ Fetch ទិន្នន័យពី API គឺជា **Asynchronous Operation** ដែលមានន័យថាកូដមិនចាំបាច់រង់ចាំការឆ្លើយតបពី Server ទេ។ ដើម្បីដោះស្រាយជាមួយ Promises យើងប្រើ Syntax **\`async/await\`** ដែលធ្វើឱ្យកូដមើលទៅដូចជា Synchronous Code ។

* **\`async\`:** ដាក់នៅមុខ Function ដែលមាន Asynchronous Code។
* **\`await\`:** ដាក់នៅមុខ Promise (ដូចជា \`fetch()\`) ។ វាធ្វើឱ្យកូដរង់ចាំការឆ្លើយតបពី Promise នោះ។

\`\`\`javascript
// Asynchronous function
async function fetchData() {
  // Wait for the fetch promise to resolve
  const response = await fetch('https://api.example.com/data');
  // Wait for the response to be parsed as JSON
  const data = await response.json();
  console.log(data);
}
\`\`\`

---

## 3. ការធ្វើ GET Request

\`GET\` Request ប្រើសម្រាប់ទទួលបានទិន្នន័យពី Server ។

**ជំហាន:**
1.  បង្កើត State សម្រាប់ទិន្នន័យ \`data\` និង \`loading\` ។
2.  ប្រើ \`useEffect\` Hook ដើម្បីហៅ Function សម្រាប់ Fetch ទិន្នន័យនៅពេល Component Load ដំបូង។
3.  ប្រើ \`async/await\` ដើម្បីហៅ Fetch API ។
4.  គ្រប់គ្រង \`loading\` State ដើម្បីបង្ហាញ UI ដូចជា 'Loading...' ។
5.  គ្រប់គ្រង Error ដោយប្រើ \`try...catch\` block ។

* **ឧទាហរណ៍:**
\`\`\`javascript
// src/screens/PostList.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading posts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20 },
  postItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PostList;
\`\`\`
`,
  examples: [],
  quiz: [
    {
      question: 'តើ `Fetch API` ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'រៀបចំ UI',
        'ធ្វើការទំនាក់ទំនងជាមួយ Network Resources',
        'គ្រប់គ្រង Local Storage',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'Fetch API គឺជាចំណុចប្រទាក់សម្រាប់ធ្វើ HTTP Requests ទៅកាន់ Server។'
    },
    {
      question: 'តើ `async/await` ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើឱ្យ Synchronous Code ក្លាយជា Asynchronous',
        'ធ្វើឱ្យ Asynchronous Code មើលទៅដូចជា Synchronous',
        'គ្រប់គ្រង Style',
        'Parse JSON'
      ],
      correct: 1,
      explanation: '`async/await` គឺជា Syntax សម្រាប់គ្រប់គ្រង Promises ដែលធ្វើឱ្យ Asynchronous Code កាន់តែងាយស្រួលយល់។'
    },
    {
      question: 'តើ `try...catch` block ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Loading State',
        'គ្រប់គ្រង Error',
        'Parse JSON',
        'ធ្វើការ Request'
      ],
      correct: 1,
      explanation: '`try...catch` block ប្រើសម្រាប់ចាប់ Error ដែលកើតឡើងក្នុងពេល Asynchronous Operation។'
    },
    {
      question: 'តើ Method ណាដែលប្រើដើម្បីទទួលបានទិន្នន័យពី API?',
      options: ['POST', 'PUT', 'DELETE', 'GET'],
      correct: 3,
      explanation: '`GET` Method ប្រើសម្រាប់ទទួលបានទិន្នន័យពី Server។'
    },
    {
      question: 'តើ `fetch()` ត្រឡប់អ្វីមកវិញ?',
      options: ['JSON Object', 'String', 'Promise', 'Boolean'],
      correct: 2,
      explanation: '`fetch()` ត្រឡប់ជា Promise ដែល Resolve ជាមួយ Response Object។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្ហាញ User Details ពី API**

បង្កើត Component មួយដែល Fetch ទិន្នន័យ User តែមួយគត់ពី Public API ហើយបង្ហាញវា។

**តម្រូវការ:**

1.  ប្រើ \`useState\` ដើម្បីគ្រប់គ្រង State សម្រាប់ \`user\` (Initial Value: \`null\`) និង \`loading\` (Initial Value: \`true\`)។
2.  ប្រើ \`useEffect\` ដើម្បីហៅ Function ដែល Fetch ទិន្នន័យនៅពេល Component Load ដំបូង។
3.  ប្រើ \`async/await\` និង \`try...catch\` ដើម្បី Fetch ទិន្នន័យពី URL នេះ៖ \`https://jsonplaceholder.typicode.com/users/1\`។
4.  នៅពេល \`loading\` មានតម្លៃ \`true\` សូមបង្ហាញ \`ActivityIndicator\` និងអត្ថបទ "Loading user data..."។
5.  នៅពេលទទួលបានទិន្នន័យ សូមបង្ហាញឈ្មោះ (\`name\`), Email (\`email\`), និង Phone Number (\`phone\`) របស់ User ។

**ការណែនាំ:** ពិនិត្យមើល Structure របស់ JSON ដែលទទួលបានដើម្បី Access Data ឱ្យបានត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const json = await response.json();
        setUser(json);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading user data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.card}>
          <Text style={styles.title}>User Details</Text>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{user.name}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>
      ) : (
        <Text>No user data found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default UserDetails;
\`\`\`
`
  }
};

export default ReactNativeLesson5_1Content;