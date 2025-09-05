import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson5_2Content: LessonContent = {
  title: 'JSON Parsing និង API Integration',
  objectives: [
    'យល់ពីរបៀបដែលទិន្នន័យត្រូវបានបញ្ជូនតាម API (JSON)',
    'រៀនពីរបៀប `Parse JSON` Data',
    'អនុវត្តន៍ការធ្វើ `POST` Request ដើម្បីបញ្ជូនទិន្នន័យ',
    'ស្វែងយល់ពីរបៀបកំណត់ Headers និង Body របស់ Request',
    'អនុវត្តន៍ការបង្កើត Form សម្រាប់ Login/Register'
  ],
  content: `
# JSON Parsing និង API Integration 🤝

---

បន្ទាប់ពី Fetch ទិន្នន័យពី Server យើងនឹងទទួលបាន Response ដែលមានទម្រង់ជា **JSON (JavaScript Object Notation)** ។ JSON គឺជាទម្រង់ទិន្នន័យដែលមានទម្ងន់ស្រាលដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់ API ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀប Parse JSON និងធ្វើ \`POST\` Request ។

---

## 1. JSON Parsing

បន្ទាប់ពី \`fetch()\` ត្រឡប់ Response យើងត្រូវប្តូរវាទៅជា JavaScript Object ។
* **\`response.json()\`:** គឺជា Method មួយដែល Promise ត្រឡប់ជា JavaScript Object ពី JSON ។
* ឧទាហរណ៍៖
\`\`\`javascript
const response = await fetch('...');
const data = await response.json(); // Parse JSON here
\`\`\`

**ឧទាហរណ៍ JSON:**
\`\`\`json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz"
}
\`\`\`
បន្ទាប់ពី \`response.json()\` ត្រូវបានហៅ យើងអាច Access ទិន្នន័យដោយផ្ទាល់ដូចជា \`data.name\` ឬ \`data.email\`។

---

## 2. ការធ្វើ POST Request

\`POST\` Request ប្រើសម្រាប់បញ្ជូនទិន្នន័យទៅ Server (ឧទាហរណ៍៖ ការបង្កើត User ថ្មី, Login, ឬ Form Submission)។
* **របៀបប្រើ:**
    * កំណត់ \`method\` ទៅជា \`'POST'\` ។
    * កំណត់ \`headers\` ដើម្បីបញ្ជាក់ប្រភេទ Content (ឧទាហរណ៍៖ \`'Content-Type': 'application/json'\`) ។
    * កំណត់ \`body\` ដែលជាទិន្នន័យដែលយើងចង់បញ្ជូន។ យើងត្រូវ \`JSON.stringify()\` Body នោះទៅជា String ។

* **ឧទាហរណ៍៖ Login Form**
\`\`\`javascript
// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        Alert.alert('Success', 'Login Successful!');
        console.log('Token:', data.token);
      } else {
        Alert.alert('Error', data.error || 'Invalid credentials.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server.');
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={loading ? 'Logging in...' : 'Login'}
        onPress={handleLogin}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15 },
});

export default LoginScreen;
\`\`\`
`,
  examples: [],
  quiz: [
    {
      question: 'តើ `response.json()` Method ធ្វើអ្វី?',
      options: [
        'ប្តូរ JavaScript Object ទៅជា JSON String',
        'ប្តូរ JSON Response ទៅជា JavaScript Object',
        'ធ្វើ HTTP Request',
        'បង្ហាញ Error'
      ],
      correct: 1,
      explanation: '`response.json()` Parse JSON String ទៅជា JavaScript Object។'
    },
    {
      question: 'តើ `POST` Request ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ទទួលបានទិន្នន័យពី Server',
        'លុបទិន្នន័យពី Server',
        'បញ្ជូនទិន្នន័យថ្មីទៅ Server',
        'Update ទិន្នន័យ'
      ],
      correct: 2,
      explanation: '`POST` Request ប្រើសម្រាប់បង្កើតឬបញ្ជូនទិន្នន័យថ្មីទៅ Server។'
    },
    {
      question: 'តើយើងត្រូវប្រើ Method ណាដើម្បីប្តូរ JavaScript Object ទៅជា JSON String សម្រាប់ Request Body?',
      options: ['JSON.parse()', 'JSON.stringify()', 'toString()', 'stringify()'],
      correct: 1,
      explanation: '`JSON.stringify()` ប្រើសម្រាប់ប្តូរ Object ទៅជា JSON String។'
    },
    {
      question: 'តើ `headers: { \'Content-Type\': \'application/json\' }` មានន័យដូចម្តេច?',
      options: [
        'ប្រាប់ Server ថា Response នឹងជា JSON',
        'ប្រាប់ Server ថា Body នៃ Request គឺជា JSON',
        'កំណត់ភាសា',
        'គ្មានន័យអ្វីទេ'
      ],
      correct: 1,
      explanation: 'Header នេះប្រាប់ Server ថា Content របស់ Request Body គឺជា JSON Format។'
    },
    {
      question: 'តើយើងគួរធ្វើអ្វីនៅពេលដែល Request កំពុងដំណើរការ?',
      options: [
        'បង្ហាញ Error',
        'លាក់ UI ទាំងអស់',
        'បង្ហាញ Loading Indicator',
        'មិនធ្វើអ្វីទាំងអស់'
      ],
      correct: 2,
      explanation: 'យើងគួរតែបង្ហាញ Loading Indicator (ដូចជា `ActivityIndicator`) ដើម្បីប្រាប់អ្នកប្រើប្រាស់ថា Request កំពុងដំណើរការ។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Register Form**

បង្កើត Form សម្រាប់ Register ដែលទទួល \`name\`, \`email\`, និង \`password\` ។ បញ្ជូនទិន្នន័យទាំងនេះទៅ API ហើយបង្ហាញ Alert ទៅតាម Response ។

**តម្រូវការ:**

1.  ប្រើ \`useState\` ដើម្បីគ្រប់គ្រង States ទាំងបី (\`name\`, \`email\`, \`password\`) និង \`loading\` State ។
2.  ប្រើ **TextInput** បីសម្រាប់ Fields នីមួយៗ។
3.  ប្រើ \`Button\` សម្រាប់ Submit Form ។
4.  នៅលើ \`onPress\` របស់ Button សូមធ្វើ \`POST\` Request ទៅ URL នេះ៖ \`https://reqres.in/api/register\`។
5.  រៀបចំ Request Body ជាមួយនឹង \`email\` និង \`password\` (API នេះមិនប្រើ name)។
6.  ប្រសិនបើ Response មាន \`token\` សូមបង្ហាញ Alert "Registration Successful!"។
7.  ប្រសិនបើមាន Error សូមបង្ហាញ Alert "Registration Failed!" ជាមួយនឹង Error Message ។

**ការណែនាំ:** ពិនិត្យមើល Documentation របស់ Reqres.in API សម្រាប់ Format ត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        Alert.alert('Success', 'Registration Successful!');
        console.log('Token:', data.token);
      } else {
        Alert.alert('Error', data.error || 'Registration failed.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server.');
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={loading ? 'Registering...' : 'Register'}
        onPress={handleRegister}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
  },
});

export default RegisterScreen;
\`\`\`
`
  }
};

export default ReactNativeLesson5_2Content;