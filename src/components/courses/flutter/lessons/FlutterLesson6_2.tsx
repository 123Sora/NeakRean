import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson6_2Content: LessonContent = {
  title: 'ការបង្កើត Custom Widgets នៅក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Custom Widgets នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបបង្កើត Stateless និង Stateful Custom Widgets',
    'រៀនប្រើ Custom Widgets ដើម្បីបង្កើនភាពងាយស្រួលនៃកូដ',
    'ស្គាល់ការប្រើ Properties និង Callbacks នៅក្នុង Custom Widgets',
    'អនុវត្តន៍ការបង្កើត App ដែលប្រើ Custom Widgets',
    'យល់ពីការប្រើ Composition ដើម្បីបង្កើត Widgets ស្មុគស្មាញ',
    'ស្វែងយល់ពីការប្រើ Custom Widgets ជាមួយ Animations'
  ],
  content: `
# ការបង្កើត Custom Widgets នៅក្នុង Flutter 🛠️

---

**Custom Widgets** អនុញ្ញាតឱ្យអ្នកបង្កើត UI Components ដែលអាចប្រើឡើងវិញបាន ដើម្បីបង្កើនភាពងាយស្រួល និងរៀបចំកូដឱ្យបានល្អ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបបង្កើត Stateless និង Stateful Custom Widgets។

---

## 1. អ្វីទៅជា Custom Widgets?

**Custom Widgets** គឺជា Widgets ដែលអ្នកបង្កើតដោយខ្លួនឯង ដោយផ្អែកលើ \`StatelessWidget\` ឬ \`StatefulWidget\`។ វាជួយ៖
- កាត់បន្ថយការសរសេរកូដដដែលៗ។
- ធ្វើឱ្យកូដមានភាពរៀបចំ។
- អនុញ្ញាតឱ្យប្រើឡើងវិញនៅក្នុងផ្នែកផ្សេងៗនៃ App។

---

## 2. ការបង្កើត Stateless Custom Widget

**Stateless Custom Widget** ប្រើសម្រាប់ UI ដែលមិនផ្លាស់ប្តូរ State។

**ឧទាហរណ៍កូដ៖ CustomButton**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class CustomButton extends StatelessWidget {
  final String label;
  final VoidCallback onPressed;
  final Color color;

  const CustomButton({
    required this.label,
    required this.onPressed,
    this.color = Colors.blue,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
        backgroundColor: color,
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
      ),
      child: Text(
        label,
        style: TextStyle(fontSize: 16, color: Colors.white),
      ),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Custom Widget')),
      body: Center(
        child: CustomButton(
          label: 'ចុចខ្ញុំ',
          onPressed: () {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(content: Text('បានចុចប៊ូតុង!')),
            );
          },
          color: Colors.green,
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** ប៊ូតុងផ្ទាល់ខ្លួនបង្ហាញពាក្យ "ចុចខ្ញុំ" និងបង្ហាញ \`SnackBar\` នៅពេលចុច។

---

## 3. ការបង្កើត Stateful Custom Widget

**Stateful Custom Widget** ប្រើសម្រាប់ UI ដែលផ្លាស់ប្តូរ State។

**ឧទាហរណ៍កូដ៖ CustomCounter**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class CustomCounter extends StatefulWidget {
  final String title;
  final int initialCount;

  const CustomCounter({required this.title, this.initialCount = 0});

  @override
  _CustomCounterState createState() => _CustomCounterState();
}

class _CustomCounterState extends State<CustomCounter> {
  late int _count;

  @override
  void initState() {
    super.initState();
    _count = widget.initialCount;
  }

  void _increment() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(''$'{widget.title}: $_count', style: TextStyle(fontSize: 20)),
        ElevatedButton(
          onPressed: _increment,
          child: Text('បន្ថែម'),
        ),
      ],
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Custom Counter')),
      body: Center(
        child: CustomCounter(title: 'ចំនួន', initialCount: 0),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញចំនួនដែលកើនឡើងនៅពេលចុចប៊ូតុង។

---

## 4. ការប្រើ Custom Widgets ជាមួយ Animations

**Custom Widgets** អាចរួមបញ្ចូលជាមួយ Animations ដើម្បីបង្កើត UI ដ៏ស្រស់ស្អាត។

**ឧទាហរណ៍កូដ៖ AnimatedCustomButton**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class AnimatedCustomButton extends StatefulWidget {
  final String label;
  final VoidCallback onPressed;

  const AnimatedCustomButton({required this.label, required this.onPressed});

  @override
  _AnimatedCustomButtonState createState() => _AnimatedCustomButtonState();
}

class _AnimatedCustomButtonState extends State<AnimatedCustomButton> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 1),
      vsync: this,
    );
    _animation = Tween<double>(begin: 1.0, end: 1.2).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => _controller.forward(),
      onTapUp: (_) {
        _controller.reverse();
        widget.onPressed();
      },
      child: ScaleTransition(
        scale: _animation,
        child: ElevatedButton(
          onPressed: () {},
          child: Text(widget.label, style: TextStyle(fontSize: 16)),
        ),
      ),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Animated Custom Widget')),
      body: Center(
        child: AnimatedCustomButton(
          label: 'ចុចខ្ញុំ',
          onPressed: () {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(content: Text('បានចុចប៊ូតុង!')),
            );
          },
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** ប៊ូតុងធំឡើងនៅពេលចុច និងបង្ហាញ \`SnackBar\`។

---

## 5. ការប្រើ Composition

**Composition** គឺជាការរួមបញ្ចូល Widgets ជាច្រើនដើម្បីបង្កើត Custom Widget ស្មុគស្មាញ។

**ឧទាហរណ៍:** បង្កើត Custom Widget ដែលរួមបញ្ចូល \`Text\`, \`Icon\`, និង \`ElevatedButton\`។

---

## 6. គន្លឹះសម្រាប់ Custom Widgets

- បង្កើត **StatelessWidget** សម្រាប់ UI ដែលមិនផ្លាស់ប្តូរ។
- បង្កើត **StatefulWidget** សម្រាប់ UI ដែលមាន State។
- ប្រើ Properties និង Callbacks ដើម្បីធ្វើឱ្យ Custom Widget អាចបត់បែនបាន។
- ប្រើ Composition ដើម្បីបង្កើត Widgets ស្មុគស្មាញ។
- បន្ថែម Animations ទៅក្នុង Custom Widgets ដើម្បីបង្កើនភាពទាក់ទាញ។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Tree។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Stateless Custom Widget</h3>
<p>បង្កើត Custom Button។</p>
<pre><code class="language-dart">
class CustomButton extends StatelessWidget {
  final String label;
  final VoidCallback onPressed;
  final Color color;

  const CustomButton({required this.label, required this.onPressed, this.color = Colors.blue});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(backgroundColor: color),
      child: Text(label),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Stateful Custom Widget</h3>
<p>បង្កើត Custom Counter។</p>
<pre><code class="language-dart">
class CustomCounter extends StatefulWidget {
  final String title;
  final int initialCount;

  const CustomCounter({required this.title, this.initialCount = 0});

  @override
  _CustomCounterState createState() => _CustomCounterState();
}

class _CustomCounterState extends State<CustomCounter> {
  late int _count;

  @override
  void initState() {
    super.initState();
    _count = widget.initialCount;
  }

  void _increment() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(''$''{widget.title}: $_count'),
        ElevatedButton(onPressed: _increment, child: Text('បន្ថែម')),
      ],
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Animated Custom Widget</h3>
<p>បង្កើត Animated Button។</p>
<pre><code class="language-dart">
class AnimatedCustomButton extends StatefulWidget {
  final String label;
  final VoidCallback onPressed;

  const AnimatedCustomButton({required this.label, required this.onPressed});

  @override
  _AnimatedCustomButtonState createState() => _AnimatedCustomButtonState();
}

class _AnimatedCustomButtonState extends State<AnimatedCustomButton> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(duration: Duration(seconds: 1), vsync: this);
    _animation = Tween<double>(begin: 1.0, end: 1.2).animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => _controller.forward(),
      onTapUp: (_) {
        _controller.reverse();
        widget.onPressed();
      },
      child: ScaleTransition(scale: _animation, child: ElevatedButton(onPressed: () {}, child: Text(widget.label))),
    );
  }
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Custom Widgets នៅក្នុង Flutter ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញទិន្នន័យ',
        'បង្កើត UI Components ដែលអាចប្រើឡើងវិញ',
        'គ្រប់គ្រង State',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Custom Widgets ប្រើសម្រាប់បង្កើត UI Components ដែលអាចប្រើឡើងវិញ។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់ Custom Widget ដែលមិនផ្លាស់ប្តូរ State?',
      options: ['StatelessWidget', 'StatefulWidget', 'AnimationController', 'Tween'],
      correct: 0,
      explanation: '`StatelessWidget` ប្រើសម្រាប់ Custom Widget ដែលមិនផ្លាស់ប្តូរ State។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់ Custom Widget ដែលផ្លាស់ប្តូរ State?',
      options: ['StatelessWidget', 'StatefulWidget', 'AnimatedContainer', 'Hero'],
      correct: 1,
      explanation: '`StatefulWidget` ប្រើសម្រាប់ Custom Widget ដែលផ្លាស់ប្តូរ State។'
    },
    {
      question: 'តើ Properties នៅក្នុង Custom Widget ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'ផ្ទេរទិន្នន័យទៅ Widget',
        'បង្កើត Animation',
        'ទាញទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Properties ប្រើសម្រាប់ផ្ទេរទិន្នន័យទៅ Custom Widget។'
    },
    {
      question: 'តើ Callbacks នៅក្នុង Custom Widget ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'អនុវត្តន៍ Actions នៅពេលមាន Interaction',
        'កំណត់ Theme',
        'គ្រប់គ្រង Errors'
      ],
      correct: 1,
      explanation: 'Callbacks ដូចជា `onPressed` អនុវត្តន៍ Actions នៅពេលមាន Interaction។'
    },
    {
      question: 'តើ Composition នៅក្នុង Custom Widgets គឺជាអ្វី?',
      options: [
        'ការបង្កើត Animation',
        'ការរួមបញ្ចូល Widgets ជាច្រើន',
        'ការទាញទិន្នន័យ',
        'ការកំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Composition គឺជាការរួមបញ្ចូល Widgets ជាច្រើនដើម្បីបង្កើត Custom Widget។'
    },
    {
      question: 'តើ `initState` នៅក្នុង StatefulWidget ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'ផ្តួចផ្តើម State',
        'បញ្ឈប់ Animation',
        'ផ្ញើ Data'
      ],
      correct: 1,
      explanation: '`initState` ប្រើសម្រាប់ផ្តួចផ្តើម State នៅក្នុង StatefulWidget។'
    },
    {
      question: 'តើ `setState` នៅក្នុង StatefulWidget ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'ធ្វើបច្ចុប្បន្នភាព UI',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`setState` ធ្វើបច្ចុប្បន្នភាព UI នៅពេល State ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Custom Widget អាចរួមបញ្ចូលជាមួយអ្វីដើម្បីបង្កើនភាពទាក់ទាញ?',
      options: ['Animations', 'HTTP Requests', 'State Management', 'Theme'],
      correct: 0,
      explanation: 'Custom Widget អាចរួមបញ្ចូលជាមួយ Animations ដើម្បីបង្កើនភាពទាក់ទាញ។'
    },
    {
      question: 'តើ Flutter DevTools អាចជួយអ្វីក្នុង Custom Widgets?',
      options: [
        'បង្កើត Widget',
        'ពិនិត្យ Widget Tree',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Flutter DevTools អាចប្រើដើម្បីពិនិត្យ Widget Tree។'
    },
    {
      question: 'តើ `VoidCallback` នៅក្នុង Custom Widget គឺជាអ្វី?',
      options: [
        'Widget Type',
        'Function ដែលមិនត្រឡប់តម្លៃ',
        'Animation Controller',
        'State Management'
      ],
      correct: 1,
      explanation: '`VoidCallback` គឺជា Function ដែលមិនត្រឡប់តម្លៃ ប្រើសម្រាប់ Callbacks។'
    },
    {
      question: 'តើ Custom Widget ជួយអ្វីក្នុងការសរសេរកូដ?',
      options: [
        'កាត់បន្ថយកូដ',
        'បង្កើត Animation',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 0,
      explanation: 'Custom Widget ជួយកាត់បន្ថយកូដ និងធ្វើឱ្យកូដរៀបចំបានល្អ។'
    },
    {
      question: 'តើអ្នកគួរប្រើ Widget អ្វីដើម្បីបង្កើត Custom Widget ស្មុគស្មាញ?',
      options: ['Container', 'Column/Row', 'AnimationController', 'Tween'],
      correct: 1,
      explanation: '`Column/Row` ប្រើសម្រាប់ Composition នៅក្នុង Custom Widget។'
    },
    {
      question: 'តើ `build` Method នៅក្នុង Custom Widget ធ្វើអ្វី?',
      options: [
        'ផ្តួចផ្តើម State',
        'បង្កើត UI',
        'បញ្ឈប់ Animation',
        'ផ្ញើ Data'
      ],
      correct: 1,
      explanation: '`build` Method បង្កើត UI សម្រាប់ Custom Widget។'
    },
    {
      question: 'តើ Animated Custom Widget តម្រូវឱ្យប្រើអ្វី?',
      options: [
        'StatelessWidget',
        'StatefulWidget',
        'Container',
        'Text'
      ],
      correct: 1,
      explanation: 'Animated Custom Widget តម្រូវឱ្យប្រើ `StatefulWidget` ដើម្បីគ្រប់គ្រង Animation State។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ Custom Widgets ដើម្បីបង្កើត UI ដែលអាចប្រើឡើងវិញបាន។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`CustomWidgetApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`HomeScreen\` សម្រាប់បង្ហាញ Custom Widgets។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Custom Widget App"។

2. **Stateless Custom Widget:**
   - បង្កើត \`CustomButton\` Stateless Widget ដែលមាន Properties: \`label\`, \`onPressed\`, និង \`color\`។
   - បង្ហាញ \`ElevatedButton\` ជាមួយ Style ផ្ទាល់ខ្លួន។

3. **Stateful Custom Widget:**
   - បង្កើត \`CustomCounter\` Stateful Widget ដែលមាន Properties: \`title\` និង \`initialCount\`។
   - បង្ហាញចំនួន និងប៊ូតុងដើម្បីបន្ថែមចំនួន។

4. **Animated Custom Widget:**
   - បង្កើត \`AnimatedCustomButton\` Stateful Widget ដែលមាន Properties: \`label\` និង \`onPressed\`។
   - ប្រើ \`AnimationController\` និង \`ScaleTransition\` ដើម្បីធ្វើឱ្យប៊ូតុងធំឡើងនៅពេលចុច។

5. **Composition:**
   - បង្កើត \`CustomCard\` Stateless Widget ដែលរួមបញ្ចូល \`CustomButton\` និង \`Text\` ដើម្បីបង្ហាញ Card ផ្ទាល់ខ្លួន។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Tree។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(CustomWidgetApp());

class CustomWidgetApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class CustomButton extends StatelessWidget {
  final String label;
  final VoidCallback onPressed;
  final Color color;

  const CustomButton({
    required this.label,
    required this.onPressed,
    this.color = Colors.blue,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
        backgroundColor: color,
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
      ),
      child: Text(
        label,
        style: TextStyle(fontSize: 16, color: Colors.white),
      ),
    );
  }
}

class CustomCounter extends StatefulWidget {
  final String title;
  final int initialCount;

  const CustomCounter({required this.title, this.initialCount = 0});

  @override
  _CustomCounterState createState() => _CustomCounterState();
}

class _CustomCounterState extends State<CustomCounter> {
  late int _count;

  @override
  void initState() {
    super.initState();
    _count = widget.initialCount;
  }

  void _increment() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(''$'{widget.title}: $_count', style: TextStyle(fontSize: 20)),
        ElevatedButton(
          onPressed: _increment,
          child: Text('បន្ថែម'),
        ),
      ],
    );
  }
}

class AnimatedCustomButton extends StatefulWidget {
  final String label;
  final VoidCallback onPressed;

  const AnimatedCustomButton({required this.label, required this.onPressed});

  @override
  _AnimatedCustomButtonState createState() => _AnimatedCustomButtonState();
}

class _AnimatedCustomButtonState extends State<AnimatedCustomButton> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 1),
      vsync: this,
    );
    _animation = Tween<double>(begin: 1.0, end: 1.2).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => _controller.forward(),
      onTapUp: (_) {
        _controller.reverse();
        widget.onPressed();
      },
      child: ScaleTransition(
        scale: _animation,
        child: ElevatedButton(
          onPressed: () {},
          child: Text(widget.label, style: TextStyle(fontSize: 16)),
        ),
      ),
    );
  }
}

class CustomCard extends StatelessWidget {
  final String title;
  final VoidCallback onPressed;

  const CustomCard({required this.title, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4,
      margin: EdgeInsets.all(16.0),
      child: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            SizedBox(height: 10),
            CustomButton(
              label: 'សកម្មភាព',
              onPressed: onPressed,
              color: Colors.green,
            ),
          ],
        ),
      ),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Custom Widget App')),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CustomButton(
              label: 'ប៊ូតុងផ្ទាល់ខ្លួន',
              onPressed: () {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('បានចុចប៊ូតុង!')),
                );
              },
            ),
            SizedBox(height: 20),
            CustomCounter(title: 'ចំនួន', initialCount: 0),
            SizedBox(height: 20),
            AnimatedCustomButton(
              label: 'ប៊ូតុង Animated',
              onPressed: () {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('បានចុច Animated Button!')),
                );
              },
            ),
            SizedBox(height: 20),
            CustomCard(
              title: 'កាតផ្ទាល់ខ្លួន',
              onPressed: () {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('បានចុចកាត!')),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`
`
  }
};

export default FlutterLesson6_2Content;
