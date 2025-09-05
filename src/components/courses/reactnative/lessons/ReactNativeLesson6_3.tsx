import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson6_3Content: LessonContent = {
  title: 'Camera និង Location Services',
  objectives: [
    'យល់ពីរបៀបប្រើ Native Features ដូចជា Camera និង GPS',
    'ស្គាល់ Libraries ដ៏ពេញនិយមសម្រាប់ Camera និង Location',
    'រៀនពីរបៀបសុំ Permission ពីអ្នកប្រើប្រាស់',
    'អនុវត្តន៍ការថតរូបដោយប្រើ Camera Library',
    'អនុវត្តន៍ការទទួលបាន Location បច្ចុប្បន្នរបស់ឧបករណ៍'
  ],
  content: `
# Camera និង Location Services 📍

---

នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបប្រើ Native Features ពីរដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយនៅក្នុង Mobile Apps គឺ **Camera** និង **Location Services** ។

## 1. ការសុំ Permission

មុននឹង Access ទៅកាន់ Native Features ដូចជា Camera ឬ Location យើងត្រូវតែសុំ Permission ពីអ្នកប្រើប្រាស់ជាមុនសិន។ សម្រាប់ React Native យើងប្រើ **\`PermissionsAndroid\`** (សម្រាប់ Android) និង \`Info.plist\` (សម្រាប់ iOS)។
* **Library:** សម្រាប់ Platform-agnostic (មិនអាស្រ័យលើ Platform) Permission Handling យើងអាចប្រើ \`react-native-permissions\` ។

### ជំហានទី ១៖ កំណត់ Permission នៅក្នុង Native Files

* **Android:** បន្ថែម Permissions នៅក្នុង \`AndroidManifest.xml\` ។
\`\`\`xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
\`\`\`
* **iOS:** បន្ថែម Description នៅក្នុង \`Info.plist\` ។
\`\`\`xml
<key>NSCameraUsageDescription</key>
<string>This app needs access to your camera to take photos.</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>This app needs your location to show you nearby places.</string>
\`\`\`

---

## 2. Camera 📸

មាន Libraries ដ៏ពេញនិយមជាច្រើនសម្រាប់ Camera ដូចជា **\`react-native-vision-camera\`** ឬ **\`react-native-image-picker\`** ។ យើងនឹងប្រើ \`react-native-image-picker\` ដែលងាយស្រួលប្រើសម្រាប់មុខងារសាមញ្ញ។

### ជំហានទី ២៖ ដំឡើង Library

\`\`\`bash
npm install react-native-image-picker
\`\`\`

### ជំហានទី ៣៖ ប្រើ Camera Library

\`\`\`javascript
// src/components/CameraComponent.js
import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const CameraComponent = () => {
  const [imageUri, setImageUri] = useState(null);

  const takePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setImageUri(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Take Photo" onPress={takePhoto} />
      {imageUri && (
        <Image
          source={imageUri}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200, marginTop: 20 },
});

export default CameraComponent;
\`\`\`

---

## 3. Location Services 📍

យើងនឹងប្រើ Built-in \`Geolocation\` API របស់ React Native ដើម្បីទទួលបាន Location ។

### ជំហានទី ៤៖ ទទួលបាន Location

\`\`\`javascript
// src/components/LocationComponent.js
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);

  const findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Get My Location" onPress={findCoordinates} />
      {location && (
        <View style={{ marginTop: 20 }}>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      )}
    </View>
  );
};

export default LocationComponent;
\`\`\`
* **\`Geolocation.getCurrentPosition()\`:** Function នេះទទួលបាន Location បច្ចុប្បន្ន។
* **\`enableHighAccuracy\`:** ប្រើដើម្បីទទួលបាន Location ឱ្យបានត្រឹមត្រូវ។
* **\`@react-native-community/geolocation\`:** Library នេះផ្តល់នូវ API សម្រាប់ Location Services ។
`,
  examples: [],
  quiz: [
    {
      question: 'តើយើងត្រូវធ្វើអ្វីមុននឹង Access ទៅកាន់ Camera ឬ Location?',
      options: [
        'រៀបចំ UI',
        'ដំឡើង Library',
        'សុំ Permission ពីអ្នកប្រើប្រាស់',
        'ធ្វើ HTTP Request'
      ],
      correct: 2,
      explanation: 'ការសុំ Permission គឺជាជំហានចាំបាច់មុននឹងប្រើ Native Features ។'
    },
    {
      question: 'តើ `launchCamera()` Function ប្រើសម្រាប់អ្វី?',
      options: [
        'ថតរូប',
        'ជ្រើសរើសរូបភាពពី Gallery',
        'បង្ហាញរូបភាព',
        'លុបរូបភាព'
      ],
      correct: 0,
      explanation: '`launchCamera()` គឺជា Function ដែលប្រើដើម្បីបើក Camera ។'
    },
    {
      question: 'តើយើងប្រើ Property មួយណាដើម្បីសរសេរ Permission Description សម្រាប់ iOS?',
      options: ['AndroidManifest.xml', 'Info.plist', 'package.json', 'android.json'],
      correct: 1,
      explanation: 'យើងត្រូវបន្ថែម Keys ដូចជា `NSCameraUsageDescription` នៅក្នុង `Info.plist` សម្រាប់ iOS ។'
    },
    {
      question: 'តើ Geolocation API ផ្តល់ព័ត៌មានអ្វីខ្លះ?',
      options: [
        'ឈ្មោះឧបករណ៍',
        'Latitude និង Longitude',
        'Battery Status',
        'Network Status'
      ],
      correct: 1,
      explanation: 'Geolocation API ផ្តល់ព័ត៌មានអំពីទីតាំងបច្ចុប្បន្នរបស់ឧបករណ៍ (Latitude និង Longitude)។'
    },
    {
      question: 'តើ `react-native-image-picker` Library ប្រើសម្រាប់ធ្វើអ្វី?',
      options: [
        'ធ្វើ HTTP Requests',
        'Access ទៅកាន់ Camera និង Photo Library',
        'គ្រប់គ្រង State',
        'រៀបចំ Navigation'
      ],
      correct: 1,
      explanation: '`react-native-image-picker` គឺជា Library សម្រាប់ Access ទៅកាន់ Camera និង Photo Library ។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្ហាញរូបភាពដែលបានថតនិង Location**

បង្កើត Component មួយដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ថតរូបនិងបង្ហាញ Location បច្ចុប្បន្ន។

**តម្រូវការ:**

1.  ដំឡើង Library \`react-native-image-picker\` និង \`@react-native-community/geolocation\`។
2.  រៀបចំ Permission សម្រាប់ Android (\`AndroidManifest.xml\`) និង iOS (\`Info.plist\`)។
3.  ប្រើ **useState** ដើម្បីគ្រប់គ្រង State សម្រាប់ \`imageUri\` និង \`location\` ។
4.  ដាក់ Button ពីរ៖ "Take Photo" និង "Get Location" ។
5.  នៅពេលចុច Button "Take Photo" សូមប្រើ \`launchCamera\` ដើម្បីថតរូបនិងបង្ហាញវានៅលើ Screen ។
6.  នៅពេលចុច Button "Get Location" សូមប្រើ \`Geolocation.getCurrentPosition\` ដើម្បីទទួលបាន Location និងបង្ហាញ Latitude និង Longitude ។

**ការណែនាំ:** ត្រូវប្រាកដថាអ្នកបានដំឡើង Dependency ទាំងអស់។
    `,
    solution: `
\`\`\`javascript
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import Geolocation from '@react-native-community/geolocation';

const NativeFeatures = () => {
  const [imageUri, setImageUri] = useState(null);
  const [location, setLocation] = useState(null);

  const takePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        Alert.alert('Camera Error', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setImageUri(source);
      }
    });
  };

  const findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        Alert.alert('Location Found', \`Latitude: \${latitude}, Longitude: \${longitude}\`);
      },
      (error) => Alert.alert('Location Error', error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Take Photo" onPress={takePhoto} />
      {imageUri && (
        <Image
          source={imageUri}
          style={styles.image}
        />
      )}
      <View style={{ marginTop: 20 }}>
        <Button title="Get My Location" onPress={findCoordinates} />
        {location && (
          <View style={styles.locationContainer}>
            <Text>Latitude: {location.latitude}</Text>
            <Text>Longitude: {location.longitude}</Text>
          </View>
        )}
      </View>
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
  image: {
    width: 250,
    height: 250,
    marginTop: 20,
    borderRadius: 10,
  },
  locationContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default NativeFeatures;
\`\`\`
`
  }
};

export default ReactNativeLesson6_3Content;