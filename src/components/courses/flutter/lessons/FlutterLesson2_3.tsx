import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson2_3Content: LessonContent = {
  title: 'ការរៀបចំ Layouts មូលដ្ឋាន',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Layouts នៅក្នុង Flutter',
    'ស្វែងយល់ពី Widgets សម្រាប់ Layouts ដូចជា Row, Column, Stack',
    'រៀនប្រើ Container និង Padding ដើម្បីគ្រប់គ្រងទំហំ និងចន្លោះ',
    'ស្គាល់ការប្រើ Expanded និង Flexible សម្រាប់ Responsive Design',
    'អនុវត្តន៍ការបង្កើត UI Layout សាមញ្ញជាមួយ Widgets ទាំងនេះ',
    'យល់ពីការប្រើ Alignment និង Constraints ក្នុង Layouts'
  ],
  content: `
# ការរៀបចំ Layouts មូលដ្ឋាន 🖼️📐

---

**Layouts** នៅក្នុង Flutter គឺជាវិធីសាស្ត្រសម្រាប់រៀបចំ Widgets នៅលើអេក្រង់។ Flutter ប្រើ Widgets ដូចជា \`Row\`, \`Column\`, \`Stack\`, និង \`Container\` ដើម្បីបង្កើត Layouts ដែល Responsive និងអាចប្ដូរតាមបំណង។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបបង្កើត Layouts មូលដ្ឋាន និងការប្រើ Widgets សម្រាប់រៀបចំ UI។

---

## 1. អ្វីទៅជា Layouts នៅក្នុង Flutter?

Layouts គឺជារបៀបដែល Flutter រៀបចំ Widgets នៅលើអេក្រង់។ រាល់ Widget នៅក្នុង Flutter មាន Constraints (ទំហំអប្បបរមា និងអតិបរមា) ដែលកំណត់របៀបដែលវាត្រូវបានបង្ហាញ។ Widgets សម្រាប់ Layouts រួមមាន៖
- **Row:** រៀប Widgets ជាជួរ (Horizontal)។
- **Column:** រៀប Widgets ជាបញ្ឈរ (Vertical)។
- **Stack:** ដាក់ Widgets ជាន់គ្នា។
- **Container:** ប្រអប់សម្រាប់រុំ Widgets និងកំណត់ Style។
- **Expanded/Flexible:** គ្រប់គ្រងទំហំ Widgets ក្នុង Layout។

Layouts នៅក្នុង Flutter ប្រើ Widget Tree ដើម្បីរៀបចំ និងគ្រប់គ្រងទំនាក់ទំនងរវាង Widgets។

---

## 2. ការប្រើ Row និង Column

\`Row\` និង \`Column\` គឺជា Widgets មូលដ្ឋានសម្រាប់រៀបចំ Layouts។ ពួកវាមាន Properties ដូចជា \`mainAxisAlignment\` និង \`crossAxisAlignment\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Container(color: Colors.red, width: 50, height: 50),
              Container(color: Colors.green, width: 50, height: 50),
              Container(color: Colors.blue, width: 50, height: 50),
            ],
          ),
          SizedBox(height: 20),
          Text('Layout មូលដ្ឋាន', style: TextStyle(fontSize: 20)),
        ],
      ),
    ),
  ));
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Row នៃ Containers ពណ៌ផ្សេងគ្នា និង Text នៅក្នុង Column។

---

## 3. ការប្រើ Container និង Padding

\`Container\` គឺជា Widget ដ៏សំខាន់សម្រាប់គ្រប់គ្រង Layout និង Style។ Properties សំខាន់ៗ៖ \`color\`, \`width\`, \`height\`, \`padding\`, \`margin\`។ \`Padding\` Widget បន្ថែមចន្លោះជុំវិញ Child។

**ឧទាហរណ៍កូដ：**

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Center(
        child: Container(
          width: 200,
          height: 100,
          color: Colors.blue,
          padding: EdgeInsets.all(16.0),
          margin: EdgeInsets.all(10.0),
          child: Text('នៅក្នុង Container', style: TextStyle(color: Colors.white)),
        ),
      ),
    ),
  ));
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Container ពណ៌ខៀវជាមួយ Text នៅកណ្តាល។

---

## 4. ការប្រើ Stack

\`Stack\` អនុញ្ញាតឱ្យ Widgets ជាន់គ្នា។ ប្រើ \`Positioned\` ដើម្បីកំណត់ទីតាំង។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Stack(
        children: [
          Container(color: Colors.blue, width: 200, height: 200),
          Positioned(
            top: 50,
            left: 50,
            child: Container(color: Colors.red, width: 100, height: 100),
          ),
          Positioned(
            top: 100,
            left: 100,
            child: Text('ជាន់គ្នា', style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
    ),
  ));
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Containers និង Text ជាន់គ្នា។

---

## 5. Expanded និង Flexible

\`Expanded\` និង \`Flexible\` ប្រើដើម្បីគ្រប់គ្រងទំហំ Widgets ក្នុង \`Row\` ឬ \`Column\`។ \`Expanded\` បែងចែកទំហំសល់ ខណៈ \`Flexible\` អនុញ្ញាតឱ្យ Widget មានភាពបត់បែន។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Row(
        children: [
          Expanded(
            flex: 2,
            child: Container(color: Colors.red, height: 100),
          ),
          Expanded(
            flex: 1,
            child: Container(color: Colors.green, height: 100),
          ),
        ],
      ),
    ),
  ));
}
\`\`\`

**លទ្ធផល:** Row ដែលបែងចែកទំហំជាមួយ \`flex\`។

---

## 6. Alignment និង Constraints

- **Alignment:** កំណត់ទីតាំង Widgets ក្នុង Layout (ឧទាហរណ៍៖ \`center\`, \`topLeft\`)។
- **Constraints:** កំណត់ទំហំអប្បបរមា និងអតិបរមារបស់ Widgets។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Center(
        child: Container(
          alignment: Alignment.center,
          constraints: BoxConstraints(maxWidth: 200, maxHeight: 200),
          color: Colors.yellow,
          child: Text('Alignment Demo'),
        ),
      ),
    ),
  ));
}
\`\`\`

**លទ្ធផល:** Container ពណ៌លឿងជាមួយ Text នៅកណ្តាល។

---

## 7. គន្លឹះសម្រាប់ Layouts

- ប្រើ \`Row\` និង \`Column\` សម្រាប់ Layouts សាមញ្ញ។
- ប្រើ \`Stack\` សម្រាប់ UI ដែលត្រូវការជាន់គ្នា។
- ប្រើ \`Expanded\` ឬ \`Flexible\` ដើម្បីធ្វើឱ្យ Layout Responsive។
- បន្ថែម \`Padding\` និង \`Margin\` ដើម្បីគ្រប់គ្រងចន្លោះ។
- ប្រើ Flutter Inspector ដើម្បីពិនិត្យ Widget Tree និង Layout Issues។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Row ជាមួយ Containers</h3>
<p>បង្កើត Row នៃ Containers ពណ៌ផ្សេងគ្នា។</p>
<pre><code class="language-dart">
Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  children: [
    Container(color: Colors.red, width: 50, height: 50),
    Container(color: Colors.green, width: 50, height: 50),
  ],
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Column ជាមួយ Text</h3>
<p>បង្កើត Column ដែលមាន Text និង Container។</p>
<pre><code class="language-dart">
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    Text('អត្ថបទ'),
    Container(color: Colors.blue, width: 100, height: 100),
  ],
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Stack</h3>
<p>បង្កើត Stack ជាមួយ Containers ជាន់គ្នា។</p>
<pre><code class="language-dart">
Stack(
  children: [
    Container(color: Colors.blue, width: 200, height: 200),
    Positioned(
      top: 50,
      left: 50,
      child: Container(color: Colors.red, width: 100, height: 100),
    ),
  ],
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Responsive Layout</h3>
<p>ប្រើ Expanded ដើម្បីបែងចែកទំហំ។</p>
<pre><code class="language-dart">
Row(
  children: [
    Expanded(child: Container(color: Colors.red, height: 100)),
    Expanded(child: Container(color: Colors.blue, height: 100)),
  ],
)
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់រៀប Widgets ជាជួរ?',
      options: ['Column', 'Row', 'Stack', 'Container'],
      correct: 1,
      explanation: '`Row` រៀប Widgets ជាជួរ (Horizontal)។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់រៀប Widgets ជាបញ្ឈរ?',
      options: ['Row', 'Column', 'Stack', 'Padding'],
      correct: 1,
      explanation: '`Column` រៀប Widgets ជាបញ្ឈរ (Vertical)�।'
    },
    {
      question: 'តើ `Container` មាន Properties អ្វីខ្លះ?',
      options: [
        'color, padding, margin',
        'mainAxisAlignment, crossAxisAlignment',
        'flex, weight',
        'positioned, top'
      ],
      correct: 0,
      explanation: '`Container` មាន Properties ដូចជា `color`, `padding`, `margin`។'
    },
    {
      question: 'តើ `Stack` មានតួនាទីអ្វី?',
      options: [
        'រៀប Widgets ជាជួរ',
        'រៀប Widgets ជាបញ្ឈរ',
        'ដាក់ Widgets ជាន់គ្នា',
        'កំណត់ទំហំ'
      ],
      correct: 2,
      explanation: '`Stack` ដាក់ Widgets ជាន់គ្នា។'
    },
    {
      question: 'តើ `Expanded` មានតួនាទីអ្វី?',
      options: [
        'បន្ថែមចន្លោះ',
        'បែងចែកទំហំសល់',
        'កំណត់ពណ៌',
        'ជាន់ Widgets'
      ],
      correct: 1,
      explanation: '`Expanded` បែងចែកទំហំសល់ក្នុង `Row` ឬ `Column`។'
    },
    {
      question: 'តើ `Padding` Widget មានតួនាទីអ្វី?',
      options: [
        'កំណត់ទំហំ Widget',
        'បន្ថែមចន្លោះជុំវិញ Child',
        'រៀប Widgets ជាជួរ',
        'ផ្លាស់ប្តូរ State'
      ],
      correct: 1,
      explanation: '`Padding` បន្ថែមចន្លោះជុំវិញ Child Widget។'
    },
    {
      question: 'តើ `mainAxisAlignment` នៅក្នុង `Row` កំណត់អ្វី?',
      options: [
        'ការរៀបចំតាមអ័ក្សបញ្ឈរ',
        'ការរៀបចំតាមអ័ក្សសំខាន់',
        'ពណ៌នៃ Widgets',
        'ទំហំនៃ Widgets'
      ],
      correct: 1,
      explanation: '`mainAxisAlignment` កំណត់ការរៀបចំតាមអ័ក្សសំខាន់ (Horizontal សម្រាប់ `Row`)។'
    },
    {
      question: 'តើ `Positioned` Widget ប្រើនៅក្នុង Layout ណា?',
      options: ['Row', 'Column', 'Stack', 'Container'],
      correct: 2,
      explanation: '`Positioned` ប្រើនៅក្នុង `Stack` ដើម្បីកំណត់ទីតាំង។'
    },
    {
      question: 'តើ `Flexible` ខុសពី `Expanded` ដោយរបៀបណា?',
      options: [
        'អនុញ្ញាតឱ្យ Widget មានភាពបត់បែនជាង',
        'បែងចែកទំហំសល់',
        'កំណត់ពណ៌',
        'បន្ថែមចន្លោះ'
      ],
      correct: 0,
      explanation: '`Flexible` ផ្តល់ភាពបត់បែន ខណៈ `Expanded` បែងចែកទំហំសល់។'
    },
    {
      question: 'តើ `Constraints` មានតួនាទីអ្វី?',
      options: [
        'កំណត់ពណ៌',
        'កំណត់ទំហំអប្បបរមា និងអតិបរមា',
        'រៀប Widgets ជាជួរ',
        'ផ្លាស់ប្តូរ State'
      ],
      correct: 1,
      explanation: '`Constraints` កំណត់ទំហំអប្បបរមា និងអតិបរមារបស់ Widgets។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូด `Row(children: [Expanded(child: Container(color: Colors.red)), Container(color: Colors.blue, width: 50)])`?',
      options: [
        'Row ដែល Container ពណ៌ក្រហមបែងចែកទំហំសល់',
        'Row ដែល Container ពណ៌ខៀវបែងចែកទំហំសល់',
        'Error',
        'Container ពណ៌ក្រហមបាត់'
      ],
      correct: 0,
      explanation: '`Expanded` ធ្វើឱ្យ Container ពណ៌ក្រហមបែងចែកទំហំសល់។'
    },
    {
      question: 'តើ Widget ណាដែលបន្ថែមចន្លោះខាងក្រៅ Widget?',
      options: ['Padding', 'Margin', 'Container', 'Expanded'],
      correct: 1,
      explanation: '`Margin` បន្ថែមចន្លោះខាងក្រៅ Widget។'
    },
    {
      question: 'តើ `Alignment.center` មានតួនាទីអ្វី?',
      options: [
        'រៀប Widgets ជាជួរ',
        'កំណត់ Widget នៅកណ្តាល',
        'បែងចែកទំហំ',
        'ជាន់ Widgets'
      ],
      correct: 1,
      explanation: '`Alignment.center` កំណត់ Widget នៅកណ្តាល។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលបង្ហាញ Layout មូលដ្ឋានដោយប្រើ \`Row\`, \`Column\`, និង \`Container\`។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`BasicLayoutPage\` ដែលមាន \`Scaffold\`។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Basic Layouts Lab"។

2. **Main Content:**
   - បង្កើត \`Column\` នៅក្នុង Body ដែលមាន \`mainAxisAlignment: MainAxisAlignment.center\`។
   - បន្ថែម \`Container\` ពណ៌ខៀវ ទទឹង 200, កម្ពស់ 100, ជាមួយ \`padding: EdgeInsets.all(16.0)\` និង Text "ប្រអប់ខៀវ"។
   - បន្ថែម \`SizedBox\` ដើម្បីបង្កើតចន្លោះ 20px។
   - បន្ថែម \`Row\` ដែលមាន \`mainAxisAlignment: MainAxisAlignment.spaceEvenly\` និង Containers ពីរ (ក្រហម និងបៃតង) ទំហំ 50x50។
   - បន្ថែម \`Stack\` ដែលមាន Container ពណ៌លឿង (200x200) និង Text "ជាន់គ្នា" នៅកណ្តាល។

3. **Responsive Design:**
   - បន្ថែម \`Expanded\` នៅក្នុង \`Row\` ដើម្បីធ្វើឱ្យ Container មួយបែងចែកទំហំសល់។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងប្រើ Flutter Inspector ដើម្បីពិនិត្យ Layout។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';

class BasicLayoutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Basic Layouts Lab'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 200,
            height: 100,
            color: Colors.blue,
            padding: EdgeInsets.all(16.0),
            child: Text('ប្រអប់ខៀវ', style: TextStyle(color: Colors.white)),
          ),
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Expanded(child: Container(color: Colors.red, height: 50)),
              Container(color: Colors.green, width: 50, height: 50),
            ],
          ),
          SizedBox(height: 20),
          Stack(
            children: [
              Container(color: Colors.yellow, width: 200, height: 200),
              Positioned(
                top: 80,
                left: 60,
                child: Text('ជាន់គ្នា', style: TextStyle(color: Colors.black)),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(home: BasicLayoutPage()));
}
\`\`\`
`
  }
};

export default FlutterLesson2_3Content;
