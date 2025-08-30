import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson11_3Content: LessonContent = {
  title: 'CI/CD for Android Apps',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា CI/CD',
    'ស្គាល់ពីឧបករណ៍ CI/CD ពេញនិយម (GitHub Actions, GitLab CI)',
    'រៀនពីរបៀបរៀបចំ CI Pipeline សម្រាប់ Android',
    'យល់ដឹងពីការ Build, Test, និង Deploy ស្វ័យប្រវត្តិ',
    'អនុវត្តការ Deploy App ទៅ Firebase App Distribution'
  ],
  content: `
# CI/CD for Android Apps ⚙️

---

**CI/CD** តំណាងឱ្យ **Continuous Integration** និង **Continuous Deployment/Delivery** ។ វាគឺជា Automation Pipeline ដែលជួយឱ្យ Software Development Process មានភាពលឿននិងមានប្រសិទ្ធភាព។

-   **Continuous Integration (CI):** ដំណើរការនៃការ Merge Code Change ទៅ Main Branch ញឹកញាប់។ បន្ទាប់មក CI System នឹង Build និង Run Tests ដោយស្វ័យប្រវត្តិ។
-   **Continuous Deployment (CD):** ដំណើរការនៃការ Deploy Code ដែលបាន Test រួចហើយទៅ Staging ឬ Production Environment ។

## 1. ហេតុអ្វីត្រូវប្រើ CI/CD?

-   **ល្បឿន:** ធ្វើឱ្យការ Build និង Deploy កាន់តែលឿន។
-   **គុណភាព:** ធានាថា Code Base មិនមាន Bug ។
-   **ភាពងាយស្រួល:** ធ្វើឱ្យការ Release Version ថ្មីមានភាពងាយស្រួល។

## 2. CI/CD Tools ពេញនិយម

-   **GitHub Actions:** អាចប្រើសម្រាប់ CI/CD Pipeline ទាំងមូល។ វាត្រូវបាន Integrate ជាមួយ GitHub Repository ។
-   **GitLab CI/CD:** ស្រដៀងនឹង GitHub Actions ដែរ តែសម្រាប់ GitLab ។
-   **Jenkins:** ជា Open-source Automation Server ។

## 3. GitHub Actions CI/CD Pipeline

យើងនឹងប្រើ GitHub Actions សម្រាប់បង្កើត CI/CD Pipeline មួយ។

### ជំហានទី ១: បង្កើត Workflow File
-   បង្កើត Folder ឈ្មោះ \`.github/workflows\` នៅក្នុង Root Directory របស់ Project ។
-   បង្កើត File YAML ថ្មី (ឧ. \`android_ci.yml\`) ។

### ជំហានទី ២: Workflow Code
\`\`\`yaml
# .github/workflows/android_ci.yml
name: Android CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        
      - name: Set up JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'
          
      - name: Grant execute permission for gradlew
        run: chmod +x gradlew
        
      - name: Build with Gradle
        run: ./gradlew build
        
      - name: Run Unit Tests
        run: ./gradlew test
\`\`\`
-   \`on: push\`: Workflow នឹងដំណើរការនៅពេលមាន Push ទៅ Main Branch ។
-   \`jobs: build\`: កំណត់ Task ដែលត្រូវ Run ។
-   \`steps\`: កំណត់ជំហាននីមួយៗរបស់ Pipeline ។

## 4. Firebase App Distribution

**Firebase App Distribution** គឺជា Service មួយសម្រាប់ចែករំលែក App ទៅកាន់ Tester ។ វាអាច Integrate ជាមួយ CI/CD Tools ។

### ជំហានទី ១: រៀបចំ Firebase
-   Enable App Distribution នៅក្នុង Firebase Console ។
-   ដំឡើង Firebase CLI នៅលើ Server ។

### ជំហានទី ២: Deploy to App Distribution
យើងបន្ថែម \`step\` ថ្មីទៅក្នុង Workflow File ។
\`\`\`yaml
      - name: Deploy to Firebase App Distribution
        run: |
          ./gradlew appDistributionUploadRelease
        env:
          FIREBASE_TOKEN: \${{ secrets.FIREBASE_TOKEN }}
\`\`\`
-   \`FIREBASE_TOKEN\`: គឺជា Token ដែលយើងទទួលបានពី Firebase CLI ហើយរក្សាទុកនៅក្នុង GitHub Secrets ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Signing Report</h3>
<p>យើងអាចបន្ថែម Step ដើម្បីបង្កើត Signing Report នៅក្នុង Pipeline ។</p>
<pre><code class="language-yaml">
      - name: Generate Signing Report
        run: ./gradlew signingReport
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ CI តំណាងឱ្យអ្វី?',
      options: [
        'Continuous Integration',
        'Continuous Information',
        'Code Integration',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'CI តំណាងឱ្យ Continuous Integration ។'
    },
    {
      question: 'តើ CD តំណាងឱ្យអ្វី?',
      options: [
        'Continuous Development',
        'Continuous Deployment/Delivery',
        'Code Deployment',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'CD តំណាងឱ្យ Continuous Deployment/Delivery ។'
    },
    {
      question: 'តើ CI/CD Pipeline ធ្វើអ្វីខ្លះ?',
      options: [
        'Build Code',
        'Run Tests',
        'Deploy App',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: 'CI/CD Pipeline ធ្វើការ Automate ដំណើរការទាំងមូល។'
    },
    {
      question: 'តើ GitHub Actions ប្រើ File ប្រភេទណាសម្រាប់ Workflow?',
      options: [
        'XML',
        'JSON',
        'YAML',
        'TXT'
      ],
      correct: 2,
      explanation: 'GitHub Actions ប្រើ File ប្រភេទ YAML សម្រាប់ Workflow ។'
    },
    {
      question: 'តើ `on: push` នៅក្នុង Workflow File ធ្វើអ្វី?',
      options: [
        'Run Workflow នៅពេលមាន Pull Request',
        'Run Workflow នៅពេលមាន Push',
        'Run Workflow នៅពេលមាន Issue',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`on: push` ធ្វើការ Run Workflow នៅពេលមាន Push ។'
    },
    {
      question: 'តើ `runs-on: ubuntu-latest` កំណត់អ្វីខ្លះ?',
      options: [
        'Virtual Machine OS',
        'Project Name',
        'Task Name',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`runs-on: ubuntu-latest` កំណត់ Virtual Machine OS ដែលនឹង Run Task ។'
    },
    {
      question: 'តើ `gradlew build` Command ធ្វើអ្វី?',
      options: [
        'Run Tests',
        'Build Project',
        'Deploy App',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`gradlew build` Command ប្រើសម្រាប់ Build Project ។'
    },
    {
      question: 'តើ Firebase App Distribution ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Build App',
        'សម្រាប់ Run Tests',
        'សម្រាប់ Deploy App ទៅ Tester',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Firebase App Distribution ប្រើសម្រាប់ចែករំលែក App ទៅកាន់ Tester ។'
    },
    {
      question: 'តើ `secrets.FIREBASE_TOKEN` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ទុក Access Token នៅក្នុង File ធម្មតា',
        'សម្រាប់ទុក Access Token នៅក្នុង GitHub Secrets',
        'សម្រាប់ទុក Password',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`secrets.FIREBASE_TOKEN` ប្រើសម្រាប់ទុក Access Token នៅក្នុង GitHub Secrets ដែលមានសុវត្ថិភាព។'
    },
    {
      question: 'តើ CI/CD មានប្រយោជន៍អ្វីសម្រាប់ក្រុម?',
      options: [
        'ធ្វើឱ្យការ Collaboration មានភាពងាយស្រួល',
        'ធ្វើឱ្យការ Build និង Test ស្វ័យប្រវត្តិ',
        'ធ្វើឱ្យការ Deploy លឿន',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: 'CI/CD ជួយឱ្យក្រុមធ្វើការជាមួយគ្នាកាន់តែមានប្រសិទ្ធភាព។'
    }
  ],
  lab: {
    task: `
បង្កើត CI/CD Pipeline ជាមួយ GitHub Actions ដើម្បី Build និង Run Tests របស់ Android App របស់អ្នក។

**តម្រូវការ:**

1.  **Project:**
    -   មាន Android App Project នៅលើ GitHub Repository ។

2.  **Workflow File:**
    -   បង្កើត File \`android_ci.yml\` នៅក្នុង \`.github/workflows\` folder ។
    -   នៅក្នុង File នោះ កំណត់ Workflow សម្រាប់ Build និង Test នៅពេលមាន Push ឬ Pull Request ។
    -   ប្រើ GitHub Actions ដើម្បី Checkout Code, Setup Java, និង Run Gradle Commands ។
    `,
    solution: `
\`\`\`yaml
# .github/workflows/android_ci.yml
name: Android CI/CD

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Set up JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'
          cache: 'gradle'

      - name: Grant execute permission for gradlew
        run: chmod +x gradlew

      - name: Build Debug APK
        run: ./gradlew assembleDebug

      - name: Run Unit Tests
        run: ./gradlew test

      - name: Upload APK as artifact
        uses: actions/upload-artifact@v4
        with:
          name: debug-apk
          path: app/build/outputs/apk/debug/app-debug.apk
\`\`\`
`
  }
};

export default KotlinLesson11_3Content;