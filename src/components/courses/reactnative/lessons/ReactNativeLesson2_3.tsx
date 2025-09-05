import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson2_3Content: LessonContent = {
  title: 'Styling និង Flexbox 🎨',
  objectives: [
    'យល់ពីរបៀបកំណត់ Styles ក្នុង React Native',
    'ស្វែងយល់ពីរបៀបប្រើ StyleSheet API',
    'រៀនពីមូលដ្ឋានគ្រឹះនៃ Flexbox',
    'អនុវត្តន៍ការរៀបចំ Layout ដោយប្រើ Flexbox properties',
    'យល់ពីភាពខុសគ្នារវាង Style នៅលើ Web និង React Native',
    'រៀនពីរបៀបបង្កើត Reusable Styles'
  ],
  content: `
# Styling និង Flexbox 🎨

---

ការបង្កើត UI ដែលមានលក្ខណៈទាក់ទាញគឺមានសារៈសំខាន់ណាស់។ នៅក្នុង React Native យើងប្រើ **StyleSheet** API និង **Flexbox** ដើម្បីកំណត់រចនាបថនិងរៀបចំ Layout របស់ Components។

---

## 1. វិធីសាស្រ្តកំណត់ Styles

មានវិធីជាច្រើនដើម្បីកំណត់ Styles នៅក្នុង React Native៖

1.  **Inline Styling:** កំណត់ Styles ដោយផ្ទាល់លើ Component។
    * **គុណសម្បត្តិ:** លឿននិងងាយស្រួលសម្រាប់ Styles តូចៗ។
    * **គុណវិបត្តិ:** មិនអាចប្រើឡើងវិញបាន និងធ្វើឱ្យ Code ពិបាកអាន។
    \`\`\`javascript
    <Text style={{ fontSize: 20, color: 'blue' }}>Hello</Text>
    \`\`\`

2.  **StyleSheet.create():** វិធីសាស្ត្រដែលត្រូវបានណែនាំបំផុត។
    * **គុណសម្បត្តិ:**
        * រៀបចំ Styles បានល្អ អាចប្រើឡើងវិញបាន។
        * ធ្វើឱ្យ Code កាន់តែមានសណ្តាប់ធ្នាប់និងងាយស្រួលថែទាំ។
        * ធ្វើឱ្យ Performance កាន់តែល្អ។
    * **របៀបប្រើ:**
    \`\`\`javascript
    const styles = StyleSheet.create({
      container: { flex: 1, backgroundColor: '#fff' },
      text: { fontSize: 18, fontWeight: 'bold' }
    });
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
    \`\`\`
    អ្នកអាចប្រើ Array ដើម្បីបញ្ចូល Styles ច្រើន៖
    \`\`\`javascript
    <Text style={[styles.text, { color: 'red' }]}>Hello</Text>
    \`\`\`

---

## 2. Flexbox នៅក្នុង React Native

**Flexbox** គឺជាប្រព័ន្ធ Layout ដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយនៅក្នុង React Native ។ វាត្រូវបានរចនាឡើងដើម្បីជួយរៀបចំ Items នៅក្នុង Container មួយប្រកបដោយប្រសិទ្ធភាព។

* **របៀបប្រើ:**
    * **Container (View)**: ដាក់ Properties ដូចជា \`flexDirection\`, \`justifyContent\`, \`alignItems\`។
    * **Items (Components ខាងក្នុង)**: ដាក់ Properties ដូចជា \`flex\`, \`alignSelf\`។

* **Properties សំខាន់ៗ:**

    * **\`flex\`:** កំណត់ទំហំរបស់ Component ទៅតាមលំហ (space) ដែលនៅសល់។ ឧទាហរណ៍: \`flex: 1\` ធ្វើឱ្យ Component នោះកាន់កាប់លំហទាំងអស់។
    * **\`flexDirection\`:** កំណត់ទិសដៅរបស់ Items (\`'row'\` ឬ \`'column'\`)។ Default គឺ \`'column'\`។
    * **\`justifyContent\`:** កំណត់ការតម្រឹមរបស់ Items តាមអ័ក្សសំខាន់ (main axis)។
        * \`'flex-start'\`, \`'flex-end'\`, \`'center'\`, \`'space-between'\`, \`'space-around'\`។
    * **\`alignItems\`:** កំណត់ការតម្រឹមរបស់ Items តាមអ័ក្សកាត់ (cross axis)។
        * \`'flex-start'\`, \`'flex-end'\`, \`'center'\`, \`'stretch'\`។
    * **\`alignSelf\`:** កំណត់ការតម្រឹមរបស់ Item តែមួយ។

---

## 3. ភាពខុសគ្នារវាង Styling នៅលើ Web និង React Native

* **Units:** React Native មិនប្រើ Units ដូចជា \`px\`, \`em\`, \`rem\` ទេ។ វាប្រើ **Unit-less numbers** (Density-independent pixels) ដែលសម្របទៅតាម Resolution របស់អេក្រង់ដោយស្វ័យប្រវត្តិ។
* **Property Names:** Property Names ប្រើ **camelCase** (ឧទាហរណ៍៖ \`backgroundColor\`, \`fontSize\`) ជំនួសឱ្យ kebab-case (\`background-color\`, \`font-size\`)។
* **Styling Model:** React Native មិនមាន Cascade ឬ Inheritance ទេ។ Styles ត្រូវតែដាក់ដោយផ្ទាល់ទៅលើ Component ដែលត្រូវប្រើ។

---

## 4. ការអនុវត្តន៍ Flexbox

**ឧទាហរណ៍៖ Center Alignment**
\`\`\`javascript
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>ខ្ញុំស្ថិតនៅកណ្តាល!</Text>
</View>
\`\`\`
* \`flex: 1\` ធ្វើឱ្យ View កាន់កាប់អេក្រង់ទាំងមូល។
* \`justifyContent: 'center'\` តម្រឹម Items តាមអ័ក្សបញ្ឈរ (Vertical)។
* \`alignItems: 'center'\` តម្រឹម Items តាមអ័ក្សផ្ដេក (Horizontal)។

**ឧទាហរណ៍៖ Column vs. Row Layout**
\`\`\`javascript
// Row Layout
<View style={{ flexDirection: 'row' }}>
  <Text>A</Text>
  <Text>B</Text>
</View>

// Column Layout (Default)
<View style={{ flexDirection: 'column' }}>
  <Text>A</Text>
  <Text>B</Text>
</View>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Layout បីជួរ</h3>
<p>ប្រើ Flexbox ដើម្បីរៀបចំ View បីដែលចែកចាយលំហស្មើគ្នា។</p>
<pre><code class="language-javascript">
import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexboxLayout = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 1, // Each box takes equal space
  },
  box1: { backgroundColor: 'skyblue' },
  box2: { backgroundColor: 'steelblue' },
  box3: { backgroundColor: 'powderblue' },
});

export default FlexboxLayout;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើវិធីសាស្រ្តណាដែលត្រូវបានណែនាំសម្រាប់ការកំណត់ Styles ក្នុង React Native?',
      options: ['Inline Styles', 'StyleSheet.create()', 'External CSS', 'Sass'],
      correct: 1,
      explanation: '`StyleSheet.create()` ត្រូវបានណែនាំព្រោះវាធ្វើឱ្យ Code មានសណ្តាប់ធ្នាប់និងល្អសម្រាប់ Performance។'
    },
    {
      question: 'តើ Property ណាដែលកំណត់ទិសដៅរបស់ Items នៅក្នុង Flexbox?',
      options: ['justifyContent', 'alignItems', 'flexDirection', 'flex'],
      correct: 2,
      explanation: '`flexDirection` កំណត់ទិសដៅ (\`row\` ឬ \`column\`)។'
    },
    {
      question: 'តើ Property ណាដែលប្រើដើម្បីតម្រឹម Items តាមអ័ក្សសំខាន់?',
      options: ['justifyContent', 'alignItems', 'flexDirection', 'flex'],
      correct: 0,
      explanation: '`justifyContent` ប្រើសម្រាប់តម្រឹម Items តាមអ័ក្សសំខាន់ (main axis)។'
    },
    {
      question: 'តើ `flex: 1` មានន័យដូចម្តេច?',
      options: [
        'Component នឹងមានទំហំ 1 Pixel',
        'Component នឹងកាន់កាប់លំហទាំងអស់ដែលនៅសល់',
        'Component នឹងលាក់',
        'Component នឹងមានទំហំ 100%'
      ],
      correct: 1,
      explanation: '`flex: 1` ធ្វើឱ្យ Component កាន់កាប់លំហទាំងអស់ដែលនៅសល់ក្នុង Container។'
    },
    {
      question: 'តើ Property Names សម្រាប់ Styles ក្នុង React Native ប្រើទម្រង់អ្វី?',
      options: ['kebab-case', 'snake_case', 'PascalCase', 'camelCase'],
      correct: 3,
      explanation: 'React Native ប្រើ `camelCase` សម្រាប់ Property Names។'
    },
    {
      question: 'តើ `alignItems: \'center\'` ធ្វើអ្វី?',
      options: [
        'តម្រឹម Items ទៅកណ្តាលតាមអ័ក្សសំខាន់',
        'តម្រឹម Items ទៅកណ្តាលតាមអ័ក្សកាត់',
        'តម្រឹម Items ទៅចំហៀង',
        'មិនធ្វើអ្វីទាំងអស់'
      ],
      correct: 1,
      explanation: '`alignItems: \'center\'` តម្រឹម Items ទៅកណ្តាលតាមអ័ក្សកាត់ (cross axis)។'
    },
    {
      question: 'តើ React Native ប្រើ Units ដូចជា `px` ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅលើ iOS', 'បានតែនៅលើ Android'],
      correct: 1,
      explanation: 'ទេ, React Native ប្រើ Unit-less numbers ដែលសម្របតាម Resolution របស់អេក្រង់ដោយស្វ័យប្រវត្តិ។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ រៀបចំ Layout ដោយប្រើ Flexbox**

បង្កើត UI មួយដែលមាន Header, Content, និង Footer ។

**តម្រូវការ:**

1.  បង្កើត Container View ដែលមាន \`flex: 1\` និង \`flexDirection: 'column'\`។
2.  បង្កើត Views បីផ្សេងគ្នាសម្រាប់ **Header**, **Content**, និង **Footer**។
3.  កំណត់ Styles ដូចខាងក្រោម៖
    * **Header:** កំណត់ \`height\` ទៅ 80px និង \`backgroundColor\` ផ្សេង។
    * **Content:** កំណត់ \`flex: 1\` ដើម្បីឱ្យវាពង្រីកកាន់កាប់លំហទាំងអស់ដែលនៅសល់។
    * **Footer:** កំណត់ \`height\` ទៅ 60px និង \`backgroundColor\` ផ្សេង។
4.  ដាក់អត្ថបទនៅក្នុង Views នីមួយៗដើម្បីសម្គាល់ពួកវា។
5.  ប្រើ \`StyleSheet.create()\` សម្រាប់ Styles ទាំងអស់។
    `,
    solution: `
\`\`\`javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxLayoutExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Content (Flex: 1)</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 20,
  },
  footer: {
    height: 60,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
  },
});

export default FlexboxLayoutExample;
\`\`\`
`
  }
};

export default ReactNativeLesson2_3Content;