import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson6_1Content: LessonContent = {
  title: 'ការ Access Native Modules',
  objectives: [
    'យល់ពីគោលការណ៍របស់ Native Modules និងតួនាទីរបស់វានៅក្នុង React Native',
    'ស្វែងយល់ពីរបៀបដែល JavaScript និង Native Code ទំនាក់ទំនងគ្នា',
    'រៀនពីរបៀបបង្កើត Native Module សាមញ្ញមួយសម្រាប់ Android និង iOS',
    'អនុវត្តន៍ការប្រើ Native Module ពី JavaScript',
    'យល់ពីតម្រូវការក្នុងការប្រើ `NativeModules` និង `Platform`'
  ],
  content: `
# ការ Access Native Modules 📱

---

នៅក្នុង React Native យើងប្រើ JavaScript ដើម្បីបង្កើត Apps ប៉ុន្តែពេលខ្លះយើងត្រូវការ Access ទៅកាន់ Platform-specific APIs ឬ Libraries ដែលមិនមាននៅក្នុង React Native Core ។ សម្រាប់ករណីទាំងនេះ យើងប្រើ **Native Modules** ។

## 1. អ្វីទៅជា Native Modules?

**Native Modules** គឺជា Classes ដែលសរសេរដោយ Native Languages (Java/Kotlin សម្រាប់ Android និង Objective-C/Swift សម្រាប់ iOS) ដែលអាចត្រូវបានហៅពី JavaScript ។ នេះអនុញ្ញាតឱ្យយើងប្រើ Functionality របស់ Platform ដូចជា Camera, GPS, Calendar, ឬ Libraries របស់ភាគីទីបី (Third-Party Libraries)។

* **JavaScript Thread:** ជាកន្លែងដែល React Native App ដំណើរការ។
* **Native Thread:** ជាកន្លែងដែល Native Code ដំណើរការ។
* **Bridge:** គឺជា Mechanism ដែលអនុញ្ញាតឱ្យ JavaScript Thread ទំនាក់ទំនងជាមួយ Native Thread ។

## 2. ការបង្កើត Native Module

យើងនឹងបង្កើត Native Module សាមញ្ញមួយដែលបង្ហាញ \`Toast\` Message នៅលើ Android ។

### ជំហានទី ១៖ បង្កើត Native Module (Android)

1.  នៅក្នុង Folder \`android/app/src/main/java/com/your-app-name\` បង្កើត File ថ្មីឈ្មោះ \`ToastModule.java\` ។
2.  សរសេរ Code ដូចខាងក្រោម៖
    \`\`\`java
    // android/app/src/main/java/com/your-app-name/ToastModule.java
    package com.your-app-name;

    import com.facebook.react.bridge.NativeModule;
    import com.facebook.react.bridge.ReactApplicationContext;
    import com.facebook.react.bridge.ReactContextBaseJavaModule;
    import com.facebook.react.bridge.ReactMethod;
    import android.widget.Toast;

    import javax.annotation.Nonnull;

    public class ToastModule extends ReactContextBaseJavaModule {
      public ToastModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
      }

      @Nonnull
      @Override
      public String getName() {
        return "ToastModule";
      }

      @ReactMethod
      public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
      }
    }
    \`\`\`
    * \`@ReactMethod\`: Annotation នេះអនុញ្ញាតឱ្យ Function \`show\` អាចត្រូវបានហៅពី JavaScript ។

### ជំហានទី ២៖ បង្កើត Native Package

1.  បង្កើត File ថ្មីឈ្មោះ \`ToastPackage.java\` ។
2.  សរសេរ Code ដូចខាងក្រោម៖
    \`\`\`java
    // android/app/src/main/java/com/your-app-name/ToastPackage.java
    package com.your-app-name;

    import com.facebook.react.ReactPackage;
    import com.facebook.react.bridge.NativeModule;
    import com.facebook.react.bridge.ReactApplicationContext;
    import com.facebook.react.uimanager.ViewManager;

    import java.util.ArrayList;
    import java.util.Collections;
    import java.util.List;

    public class ToastPackage implements ReactPackage {
      @Nonnull
      @Override
      public List<NativeModule> createNativeModules(@Nonnull ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ToastModule(reactContext));
        return modules;
      }

      @Nonnull
      @Override
      public List<ViewManager> createViewManagers(@Nonnull ReactApplicationContext reactContext) {
        return Collections.emptyList();
      }
    }
    \`\`\`

### ជំហានទី ៣៖ Register Package នៅក្នុង \`MainApplication.java\`

1.  បើក \`MainApplication.java\` ។
2.  នៅក្នុង Function \`getPackages()\` បន្ថែម \`new ToastPackage()\` ។
    \`\`\`java
    // android/app/src/main/java/com/your-app-name/MainApplication.java
    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      packages.add(new ToastPackage()); // Add this line
      return packages;
    }
    \`\`\`

---

## 3. ការប្រើ Native Module ពី JavaScript

យើងប្រើ \`NativeModules\` Object ដើម្បី Access ទៅកាន់ Native Module របស់យើង។

\`\`\`javascript
// src/components/ToastComponent.js
import React from 'react';
import { View, Button, NativeModules, Platform } from 'react-native';

const { ToastModule } = NativeModules;

const ToastComponent = () => {
  const showToast = () => {
    if (Platform.OS === 'android') {
      ToastModule.show('Hello from Native!', ToastModule.SHORT);
    } else {
      alert('Toast is not available on iOS.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Show Android Toast"
        onPress={showToast}
      />
    </View>
  );
};

export default ToastComponent;
\`\`\`
* **\`Platform.OS\`:** ប្រើដើម្បីពិនិត្យមើល Platform បច្ចុប្បន្ន (iOS ឬ Android) ។
`,
  examples: [],
  quiz: [
    {
      question: 'តើ Native Module គឺជាអ្វី?',
      options: [
        'JavaScript Classes',
        'React Components',
        'Classes ដែលសរសេរដោយ Native Languages',
        'CSS Styles'
      ],
      correct: 2,
      explanation: 'Native Modules គឺជា Native Classes ដែលផ្តល់មុខងារ Platform-specific។'
    },
    {
      question: 'តើអ្វីទៅជាតួនាទីរបស់ React Native Bridge?',
      options: [
        'បង្ហាញ UI',
        'គ្រប់គ្រង State',
        'អនុញ្ញាតឱ្យ JavaScript និង Native Code ទំនាក់ទំនងគ្នា',
        'ធ្វើ HTTP Requests'
      ],
      correct: 2,
      explanation: 'Bridge គឺជា Mechanism ដែលអនុញ្ញាតឱ្យ JavaScript Thread ទំនាក់ទំនងជាមួយ Native Thread។'
    },
    {
      question: 'តើ Annotation ណាដែលប្រើដើម្បីអនុញ្ញាតឱ្យ Function អាចហៅពី JavaScript បាន?',
      options: ['@ReactComponent', '@ReactModule', '@ReactMethod', '@JSMethod'],
      correct: 2,
      explanation: '`@ReactMethod` Annotation ធ្វើឱ្យ Method របស់ Java/Objective-C អាចត្រូវបានហៅពី JavaScript។'
    },
    {
      question: 'តើយើងប្រើ Object មួយណាដើម្បី Access ទៅកាន់ Native Module ពី JavaScript?',
      options: ['NativeModules', 'NativeBridge', 'Modules', 'Platform'],
      correct: 0,
      explanation: '`NativeModules` Object ផ្ទុកនូវ Native Modules ទាំងអស់ដែលបាន Register។'
    },
    {
      question: 'តើ `Platform.OS` ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'បង្ហាញព័ត៌មានអំពី Hardware',
        'កំណត់ថា App កំពុងដំណើរការនៅលើ iOS ឬ Android',
        'ធ្វើឱ្យ App ដំណើរការលឿន',
        'ដំឡើង Libraries'
      ],
      correct: 1,
      explanation: '`Platform.OS` ជួយឱ្យយើងសរសេរកូដដែលដំណើរការខុសគ្នាតាម Platform។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Native Module សាមញ្ញសម្រាប់ Android**

បង្កើត Native Module មួយឈ្មោះ **MyNumberModule** ដែលមាន Method មួយឈ្មោះ \`getRandomNumber\` ដែលត្រឡប់ជាលេខចៃដន្យ (Random Number)។

**តម្រូវការ:**

1.  បង្កើត Native Module (Java) សម្រាប់ Android ឈ្មោះ \`MyNumberModule.java\` ។
2.  នៅក្នុង Module នោះ បង្កើត Method មួយឈ្មោះ \`getRandomNumber\` ដែលប្រើ \`Math.random()\` ដើម្បីបង្កើតលេខចៃដន្យ។
3.  Method នេះគួរតែប្រើ Callback ដើម្បីបញ្ជូនលេខត្រឡប់ទៅ JavaScript វិញ។
4.  បង្កើត Package សម្រាប់ Module នោះហើយ Register វានៅក្នុង \`MainApplication.java\` ។
5.  នៅក្នុង JavaScript Component សូមប្រើ \`NativeModules\` ដើម្បីហៅ Method \`getRandomNumber\` ហើយបង្ហាញលទ្ធផលនៅក្នុង Alert ។

**ការណែនាំ:** សម្រាប់ Callback សូមប្រើ \`Callback\` Class ដូចជា \`callback.invoke(randomNumber);\` ។
    `,
    solution: `
\`\`\`java
// android/app/src/main/java/com/your-app-name/MyNumberModule.java
package com.your-app-name;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import javax.annotation.Nonnull;

public class MyNumberModule extends ReactContextBaseJavaModule {
    public MyNumberModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "MyNumberModule";
    }

    @ReactMethod
    public void getRandomNumber(Callback callback) {
        double randomNumber = Math.random();
        callback.invoke(randomNumber);
    }
}
\`\`\`

\`\`\`java
// android/app/src/main/java/com/your-app-name/MyNumberPackage.java
package com.your-app-name;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyNumberPackage implements ReactPackage {
    @Nonnull
    @Override
    public List<NativeModule> createNativeModules(@Nonnull ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new MyNumberModule(reactContext));
        return modules;
    }

    @Nonnull
    @Override
    public List<ViewManager> createViewManagers(@Nonnull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
\`\`\`

\`\`\`java
// android/app/src/main/java/com/your-app-name/MainApplication.java
// ... (Add \`new MyNumberPackage()\` to getPackages() list)
\`\`\`

\`\`\`javascript
// App.js
import React from 'react';
import { View, Button, NativeModules, Platform, Alert } from 'react-native';

const { MyNumberModule } = NativeModules;

const App = () => {
  const showRandomNumber = () => {
    if (Platform.OS === 'android') {
      MyNumberModule.getRandomNumber((number) => {
        Alert.alert('Random Number', \`Generated number is: \${number}\`);
      });
    } else {
      Alert.alert('Error', 'Native Module not available on iOS.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Get Random Number"
        onPress={showRandomNumber}
      />
    </View>
  );
};

export default App;
\`\`\`
`
  }
};

export default ReactNativeLesson6_1Content;