import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson2_1Content: LessonContent = {
  title: 'Stateless Widgets',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា Stateless Widgets និងតួនាទីរបស់វា',
    'ស្វែងយល់ពីរបៀបបង្កើត Stateless Widgets នៅក្នុង Flutter',
    'ស្គាល់ Widgets មូលដ្ឋានដូចជា Text, Container, Row, Column',
    'រៀនប្រើ Properties និង Child Widgets ក្នុង Stateless Widgets',
    'អនុវត្តន៍ការបង្កើត UI សាមញ្ញដោយប្រើ Stateless Widgets តែប៉ុណ្ណោះ'
  ],
  content: `
# Stateless Widgets 🏗️📄

---

**Stateless Widgets** គឺជា Widgets ដែលមិនមានការផ្លាស់ប្តូរ State (ស្ថានភាព) ក្នុងពេលដំណើរការ។ វាត្រូវបានប្រើសម្រាប់បង្កើត UI ដែលមានភាពឋិតថេរ និងមិនផ្លាស់ប្តូរដោយផ្អែកលើការបញ្ចូលពីអ្នកប្រើប្រាស់។ Stateless Widgets គឺជាមូលដ្ឋាននៃ Flutter UI ព្រោះវាសាមញ្ញ និងមាន Performance ល្អ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបបង្កើត និងប្រើ Stateless Widgets។

---

## 1. អ្វីទៅជា Stateless Widgets?

Stateless Widgets គឺជា Widgets ដែលមិនមានការរក្សាទុក State ខាងក្នុង។ នៅពេលដែល Stateless Widget ត្រូវបានបង្កើត វានឹងមិនផ្លាស់ប្តូររូបរាងរបស់វាទេ លុះត្រាតែ Parent Widget ផ្លាស់ប្តូរ Properties របស់វា។ លក្ខណៈពិសេស៖
- **Immutable:** មិនអាចផ្លាស់ប្តូរ State បាន ដូច្នេះវាមានភាពងាយស្រួលក្នុងការគ្រប់គ្រង។
- **Build Method:** មាន Method \`build\` ដែលត្រឡប់ Widget Tree។
- **Examples:** \`Text\`, \`Icon\`, \`Container\`, \`Row\`, \`Column\`។
- **Usage:** ប្រើសម្រាប់ UI Parts ដែលមិនត្រូវការការផ្លាស់ប្តូរ ដូចជា Labels, Icons, ឬ Layouts ឋិតថេរ។

Stateless Widgets គឺជាជម្រើសដំបូងសម្រាប់ការបង្កើត UI ព្រោះវាសន្សំសំចៃធនធាន និងងាយស្រួល Debug។

---

## 2. របៀបបង្កើត Stateless Widgets

ដើម្បីបង្កើត Stateless Widget ផ្ទាល់ខ្លួន ត្រូវបន្តពី \`StatelessWidget\` និង Override \`build\` Method។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

class MyTextWidget extends StatelessWidget {
  final String message;

  const MyTextWidget({required this.message});

  @override
  Widget build(BuildContext context) {
    return Text(
      message,
      style: TextStyle(fontSize: 24, color: Colors.blue),
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Center(
        child: MyTextWidget(message: 'សួស្តីពី Stateless Widget!'),
      ),
    ),
  ));
}
\`\`\`

**ពន្យល់:** \`MyTextWidget\` ទទួល \`message\` ជា Property និងបង្ហាញវាជា \`Text\` Widget។ វាមិនមាន State ដូច្នេះវាគឺ Stateless។

---

## 3. Widgets មូលដ្ឋាននៅក្នុង Stateless Widgets

Flutter មាន Stateless Widgets មូលដ្ឋានជាច្រើនសម្រាប់បង្កើត UI៖
- **Text:** បង្ហាញអត្ថបទ។ Properties: \`style\`, \`textAlign\`។
- **Container:** ប្រអប់សម្រាប់រុំ Child Widgets។ Properties: \`color\`, \`padding\`, \`margin\`។
- **Row:** រៀប Child Widgets ជាជួរ។ Properties: \`mainAxisAlignment\`, \`children\`។
- **Column:** រៀប Child Widgets ជាជួរ។ Properties: \`mainAxisAlignment\`, \`children\`។
- **Image:** បង្ហាញរូបភាព។ Properties: \`asset\`, \`network\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Center(
        child: Container(
          color: Colors.green,
          padding: EdgeInsets.all(16.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Text('ធាតុ 1', style: TextStyle(color: Colors.white)),
              Text('ធាតុ 2', style: TextStyle(color: Colors.white)),
              Text('ធាតុ 3', style: TextStyle(color: Colors.white)),
            ],
          ),
        ),
      ),
    ),
  ));
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Row នៅក្នុង Container ពណ៌បៃតង ជាមួយ Text បី។

---

## 4. ការប្រើ Properties និង Child Widgets

Stateless Widgets អាចទទួល Properties ពី Parent និងមាន Child Widgets។ ប្រើ \`const\` សម្រាប់ Constructors ដើម្បីបង្កើន Performance។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

class CustomCard extends StatelessWidget {
  final String title;
  final Widget child;

  const CustomCard({required this.title, required this.child});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4.0,
      child: Column(
        children: [
          Text(title, style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          child,
        ],
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Center(
        child: CustomCard(
          title: 'កាតផ្ទាល់ខ្លួន',
          child: Text('ខ្លឹមសារនៅខាងក្នុងកាត'),
        ),
      ),
    ),
  ));
}
\`\`\`

**ពន្យល់:** \`CustomCard\` ទទួល \`title\` និង \`child\` ជា Properties ហើយបង្ហាញវាក្នុង \`Card\` Widget។

---

## 5. ការប្រៀបធៀប Stateless និង Stateful Widgets

| ប្រភេទ Widget    | ការផ្លាស់ប្តូរ State | ឧទាហរណ៍              | គុណសម្បត្តិ              | គុណវិបត្តិ            |
| :----------------- | :------------------- | :-------------------- | :------------------------ | :-------------------- |
| **Stateless**      | មិនអាចផ្លាស់ប្តូរ    | Text, Container       | Performance ល្អ, សាមញ្ញ | មិនអាចផ្លាស់ប្តូរ UI ដោយខ្លួនឯង |
| **Stateful**       | អាចផ្លាស់ប្តូរ       | Counter, Form         | អាចផ្លាស់ប្តូរ UI ដោយផ្អែកលើ State | ស្មុគស្មាញជាង        |

Stateless Widgets គួរត្រូវបានប្រើឱ្យបានច្រើនតាមដែលអាចធ្វើទៅបានដើម្បីបង្កើន Performance។

---

## 6. ការបង្កើត UI សាមញ្ញដោយប្រើ Stateless Widgets

ឧទាហរណ៍នៃការបង្កើត UI សាមញ្ញដោយប្រើ Stateless Widgets តែប៉ុណ្ណោះ។ វាមិនមានការផ្លាស់ប្តូរ State ទេ។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

class SimpleUI extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('UI សាមញ្ញ')),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            color: Colors.blue,
            width: 200,
            height: 100,
            child: Center(child: Text('ប្រអប់ពណ៌ខៀវ', style: TextStyle(color: Colors.white))),
          ),
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Icon(Icons.star, color: Colors.yellow),
              Icon(Icons.favorite, color: Colors.red),
              Icon(Icons.thumb_up, color: Colors.green),
            ],
          ),
        ],
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(home: SimpleUI()));
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Column ជាមួយ Container និង Row នៃ Icons។

---

## 7. គន្លឹះក្នុងការប្រើ Stateless Widgets

- ប្រើ \`const\` សម្រាប់ Constructors ដើម្បីកាត់បន្ថយការបង្កើត Object ថ្មី។
- រក្សា Widget Tree ឱ្យរាក់តាមដែលអាចធ្វើទៅបានដើម្បីបង្កើន Performance។
- ប្រើ Stateless Widgets សម្រាប់ UI ឋិតថេរ និង Stateful សម្រាប់ UI ដែលផ្លាស់ប្តូរ។
- ប្រើ Flutter Inspector នៅក្នុង IDE ដើម្បីពិនិត្យ Widget Tree។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Stateless Widget សម្រាប់ Text</h3>
<p>បង្កើត Widget ដែលបង្ហាញអត្ថបទផ្ទាល់ខ្លួន។</p>
<pre><code class="language-dart">
class CustomText extends StatelessWidget {
  final String text;
  const CustomText({required this.text});
  @override
  Widget build(BuildContext context) {
    return Text(text, style: TextStyle(fontSize: 20));
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ Container និង Row</h3>
<p>បង្កើត Row នៅក្នុង Container។</p>
<pre><code class="language-dart">
Container(
  color: Colors.red,
  child: Row(
    children: [Text('ធាតុ 1'), Text('ធាតុ 2')],
  ),
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Column ជាមួយ Icons</h3>
<p>បង្កើត Column នៃ Icons។</p>
<pre><code class="language-dart">
Column(
  children: [
    Icon(Icons.home),
    Icon(Icons.settings),
  ],
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Custom Stateless Widget</h3>
<p>បង្កើត Widget ដែលមាន Properties។</p>
<pre><code class="language-dart">
class GreetingWidget extends StatelessWidget {
  final String name;
  const GreetingWidget({required this.name});
  @override
  Widget build(BuildContext context) {
    return Text('សួស្តី $name!');
  }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Stateless Widgets គឺជាអ្វី?',
      options: [
        'Widgets ដែលផ្លាស់ប្តូរ State',
        'Widgets ដែលមិនផ្លាស់ប្តូរ State',
        'Widgets សម្រាប់ Database',
        'Widgets សម្រាប់ Network'
      ],
      correct: 1,
      explanation: 'Stateless Widgets មិនមានការផ្លាស់ប្តូរ State ខាងក្នុង។'
    },
    {
      question: 'តើ Method ណាដែលត្រូវ Override នៅក្នុង Stateless Widget?',
      options: ['initState', 'build', 'dispose', 'setState'],
      correct: 1,
      explanation: '`build` Method ត្រូវបាន Override ដើម្បីត្រឡប់ Widget Tree។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់បង្ហាញអត្ថបទ?',
      options: ['Container', 'Row', 'Text', 'Column'],
      correct: 2,
      explanation: '`Text` Widget ប្រើសម្រាប់បង្ហាញអត្ថបទ។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិនៃ Stateless Widgets?',
      options: [
        'អាចផ្លាស់ប្តូរ UI ដោយខ្លួនឯង',
        'Performance ល្អ និងសាមញ្ញ',
        'មាន State ខាងក្នុង',
        'ស្មុគស្មាញក្នុងការគ្រប់គ្រង'
      ],
      correct: 1,
      explanation: 'Stateless Widgets មាន Performance ល្អព្រោះមិនមាន State។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់រៀប Child Widgets ជាជួរ?',
      options: ['Row', 'Column', 'Container', 'Text'],
      correct: 0,
      explanation: '`Row` រៀប Child Widgets ជាជួរ។'
    },
    {
      question: 'តើ `const` នៅក្នុង Constructor មានតួនាទីអ្វី?',
      options: [
        'ផ្លាស់ប្តូរ State',
        'បង្កើន Performance',
        'បង្កើត Lists',
        'ដោះស្រាយ Errors'
      ],
      correct: 1,
      explanation: '`const` ជួយបង្កើន Performance ដោយកាត់បន្ថយការបង្កើត Object ថ្មី។'
    },
    {
      question: 'តើ Stateless Widgets អាចមាន Child Widgets បានដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'តែនៅក្នុង Stateful ប៉ុណ្ណោះ', 'តែនៅក្នុង Row'],
      correct: 0,
      explanation: 'Stateless Widgets អាចមាន Child Widgets ដើម្បីបង្កើត Widget Tree។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់ប្រអប់រុំ Child?',
      options: ['Text', 'Container', 'Row', 'Column'],
      correct: 1,
      explanation: '`Container` ប្រើសម្រាប់រុំ Child និងកំណត់ Style។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Row និង Column?',
      options: [
        'Row ជាជួរ, Column ជាជួរ',
        'Row ជាជួរ, Column ជាជួរ',
        'Row ជាជួរ, Column ជាបញ្ឈរ',
        'ទាំងពីរដូចគ្នា'
      ],
      correct: 2,
      explanation: 'Row រៀបជាជួរ (Horizontal), Column រៀបជាបញ្ឈរ (Vertical)។'
    },
    {
      question: 'តើ Stateless Widgets គួរប្រើនៅពេលណា?',
      options: [
        'នៅពេល UI ផ្លាស់ប្តូរ',
        'នៅពេល UI ឋិតថេរ',
        'នៅពេលគ្រប់គ្រង Database',
        'នៅពេលសរសេរ Server Code'
      ],
      correct: 1,
      explanation: 'Stateless Widgets គួរប្រើសម្រាប់ UI ដែលមិនផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Properties នៅក្នុង Stateless Widgets មកពីណា?',
      options: [
        'ពី State',
        'ពី Parent Widget',
        'ពី Database',
        'ពី Network'
      ],
      correct: 1,
      explanation: 'Properties មកពី Parent Widget។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដ `Container(child: Text("សួស្តី"), color: Colors.blue);`?',
      options: [
        'ប្រអប់ពណ៌ក្រហម',
        'ប្រអប់ពណ៌ខៀវជាមួយអត្ថបទ',
        'អត្ថបទគ្មានប្រអប់',
        'Error'
      ],
      correct: 1,
      explanation: 'វាបង្ហាញប្រអប់ពណ៌ខៀវជាមួយអត្ថបទ "សួស្តី"។'
    },
    {
      question: 'តើ `mainAxisAlignment` នៅក្នុង Row មានតួនាទីអ្វី?',
      options: [
        'កំណត់ពណ៌',
        'កំណត់ការរៀបចំតាមអ័ក្សសំខាន់',
        'បន្ថែម Child',
        'ផ្លាស់ប្តូរ State'
      ],
      correct: 1,
      explanation: '`mainAxisAlignment` កំណត់ការរៀបចំ Child តាមអ័ក្សសំខាន់។'
    },
    {
      question: 'តើ Stateless Widgets អាចបង្កើត Custom Widgets បានដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'តែនៅក្នុង Stateful', 'តែនៅក្នុង MaterialApp'],
      correct: 0,
      explanation: 'អាចបង្កើត Custom Stateless Widgets ដើម្បីរៀបចំ Code។'
    },
    {
      question: 'តើអ្វីជាគុណវិបត្តិនៃ Stateless Widgets?',
      options: [
        'Performance យឺត',
        'មិនអាចផ្លាស់ប្តូរ UI ដោយខ្លួនឯង',
        'ស្មុគស្មាញ',
        'មិនគាំទ្រ Properties'
      ],
      correct: 1,
      explanation: 'មិនអាចផ្លាស់ប្តូរ UI ដោយខ្លួនឯង ដូច្នេះត្រូវប្រើ Stateful សម្រាប់ការផ្លាស់ប្តូរ។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដោយប្រើ Stateless Widgets តែប៉ុណ្ណោះដើម្បីបង្កើត UI សាមញ្ញ។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`MyHomePage\` ដែលមាន \`Scaffold\`។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Stateless Widgets Lab"។

2. **Main Content:**
   - បង្កើត \`Column\` នៅក្នុង Body ដែលមាន \`mainAxisAlignment: MainAxisAlignment.center\`។
   - បន្ថែម \`Container\` មួយពណ៌បៃតង ទទឹង 200, កម្ពស់ 100, និងមាន \`Text\` នៅកណ្តាល "ប្រអប់ពណ៌បៃតង"។
   - បន្ថែម \`SizedBox\` ដើម្បីបង្កើតចន្លោះ។
   - បន្ថែម \`Row\` ដែលមាន Icons បី (star, favorite, thumb_up) ជាមួយ \`mainAxisAlignment: MainAxisAlignment.spaceAround\`។

3. **Custom Widget:**
   - បង្កើត Custom Stateless Widget មួយឈ្មោះ \`CustomText\` ដែលទទួល \`text\` ជា Property និងបង្ហាញវាជាមួយ \`fontSize: 24\`។
   - ប្រើ \`CustomText\` នៅក្នុង Column។

**ការណែនាំ:** រក្សា App ឱ្យសាមញ្ញដោយប្រើ Stateless Widgets តែប៉ុណ្ណោះ។ សាកល្បងនៅលើ Emulator។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';

class CustomText extends StatelessWidget {
  final String text;

  const CustomText({required this.text});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(fontSize: 24),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Stateless Widgets Lab'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          CustomText(text: 'សួស្តីពី Custom Widget!'),
          SizedBox(height: 20),
          Container(
            color: Colors.green,
            width: 200,
            height: 100,
            child: Center(
              child: Text(
                'ប្រអប់ពណ៌បៃតង',
                style: TextStyle(color: Colors.white),
              ),
            ),
          ),
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Icon(Icons.star, color: Colors.yellow),
              Icon(Icons.favorite, color: Colors.red),
              Icon(Icons.thumb_up, color: Colors.green),
            ],
          ),
        ],
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(home: MyHomePage()));
}
\`\`\`
`
  }
};

export default FlutterLesson2_1Content;