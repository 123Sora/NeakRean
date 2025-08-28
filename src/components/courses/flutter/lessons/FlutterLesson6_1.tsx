import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson6_1Content: LessonContent = {
  title: 'ការប្រើ Animations នៅក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Animations នៅក្នុង Flutter',
    'ស្វែងយល់ពីប្រភេទនៃ Animations ដូចជា Implicit និង Explicit Animations',
    'រៀនប្រើ `AnimatedContainer`, `AnimatedOpacity` សម្រាប់ Implicit Animations',
    'ស្គាល់ការប្រើ `AnimationController` និង `Tween` សម្រាប់ Explicit Animations',
    'អនុវត្តន៍ការបង្កើត App ដែលមាន Animations សាមញ្ញ',
    'យល់ពីការប្រើ `CurvedAnimation` ដើម្បីបន្ថែមភាពរលូន',
    'ស្វែងយល់ពីការប្រើ `Hero` Widget សម្រាប់ Transition Animations',
    'រៀនគ្រប់គ្រង Animation Performance'
  ],
  content: `
# ការប្រើ Animations នៅក្នុង Flutter 🎬

---

**Animations** នៅក្នុង Flutter ជួយធ្វើឱ្យ App មានភាពរស់រវើក និងទាក់ទាញ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីប្រភេទ Animations ផ្សេងៗ និងរបៀបអនុវត្តន៍វានៅក្នុង Flutter។

---

## 1. អ្វីទៅជា Animations?

**Animations** គឺជាការផ្លាស់ប្តូរបែបផ្ទៃភ្នែក (Visual) ដែលធ្វើឱ្យ UI មានភាពរលូន។ Flutter មានប្រភេទ Animations ពីរសំខាន់៖
- **Implicit Animations:** ប្រើ Widgets ដូចជា \`AnimatedContainer\`, \`AnimatedOpacity\` ដែលគ្រប់គ្រង Animation ដោយស្វ័យប្រវត្តិ។
- **Explicit Animations:** ប្រើ \`AnimationController\` និង \`Tween\` ដើម្បីគ្រប់គ្រង Animation ដោយផ្ទាល់។

---

## 2. Implicit Animations

**Implicit Animations** ងាយស្រួលប្រើ ព្រោះ Flutter គ្រប់គ្រង Animation Logic ដោយស្វ័យប្រវត្តិ។

**ឧទាហរណ៍កូដ៖ AnimatedContainer**

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

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  double _width = 100;
  double _height = 100;
  Color _color = Colors.blue;

  void _changeContainer() {
    setState(() {
      _width = _width == 100 ? 200 : 100;
      _height = _height == 100 ? 200 : 100;
      _color = _color == Colors.blue ? Colors.red : Colors.blue;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('AnimatedContainer')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AnimatedContainer(
              duration: Duration(seconds: 1),
              width: _width,
              height: _height,
              color: _color,
              curve: Curves.easeInOut,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _changeContainer,
              child: Text('ផ្លាស់ប្តូរ Container'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** Container ផ្លាស់ប្តូរទំហំ និងពណ៌ដោយរលូននៅពេលចុចប៊ូតុង។

---

## 3. Explicit Animations

**Explicit Animations** ផ្តល់នូវការគ្រប់គ្រងកាន់តែច្រើន ដោយប្រើ \`AnimationController\` និង \`Tween\`។

**ឧទាហរណ៍កូដ៖ AnimationController**

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

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );
    _animation = Tween<double>(begin: 0, end: 360).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );
    _controller.repeat(reverse: true);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Explicit Animation')),
      body: Center(
        child: AnimatedBuilder(
          animation: _animation,
          builder: (context, child) {
            return Transform.rotate(
              angle: _animation.value * 3.14159 / 180,
              child: Container(
                width: 100,
                height: 100,
                color: Colors.blue,
              ),
            );
          },
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** Container បង្វិល 360 ដឺក្រេជាបន្តបន្ទាប់ជាមួយភាពរលូន។

---

## 4. Hero Animations

**Hero Animations** ប្រើសម្រាប់ Transition រវាង Screens ដោយផ្តល់នូវ Animation ដ៏ស្រស់ស្អាត។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FirstScreen(),
    );
  }
}

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Hero Animation')),
      body: Center(
        child: GestureDetector(
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => SecondScreen()),
            );
          },
          child: Hero(
            tag: 'hero-image',
            child: Image.network(
              'https://via.placeholder.com/150',
              width: 100,
              height: 100,
            ),
          ),
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Second Screen')),
      body: Center(
        child: Hero(
          tag: 'hero-image',
          child: Image.network(
            'https://via.placeholder.com/150',
            width: 300,
            height: 300,
          ),
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** រូបភាពផ្លាស់ប្តូរទំហំដោយរលូននៅពេលផ្លាស់ទៅ Screen ថ្មី។

---

## 5. ការគ្រប់គ្រង Animation Performance

- **ប្រើ \`SingleTickerProviderStateMixin\`:** សម្រាប់ \`AnimationController\`។
- **Dispose Controllers:** ដើម្បីបញ្ឈប់ Animations នៅពេល Widget ត្រូវបានដកចេញ។
- **ប្រើ Curves:** ដូចជា \`Curves.easeInOut\` ដើម្បីបន្ថែមភាពរលូន។
- **ជៀសវាង Animations ធ្ងន់:** ដើម្បីបង្កើន Performance។

---

## 6. គន្លឹះសម្រាប់ Animations

- ប្រើ \`AnimatedContainer\`, \`AnimatedOpacity\` សម្រាប់ Implicit Animations សាមញ្ញ។
- ប្រើ \`AnimationController\` និង \`Tween\` សម្រាប់ Explicit Animations ដែលត្រូវការការគ្រប់គ្រង។
- បន្ថែម \`CurvedAnimation\` ដើម្បីធ្វើឱ្យ Animations រលូន។
- ប្រើ \`Hero\` Widget សម្រាប់ Screen Transitions។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Animation Performance។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ AnimatedContainer</h3>
<p>ផ្លាស់ប្តូរទំហំ និងពណ៌នៃ Container។</p>
<pre><code class="language-dart">
AnimatedContainer(
  duration: Duration(seconds: 1),
  width: _width,
  height: _height,
  color: _color,
  curve: Curves.easeInOut,
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ AnimationController</h3>
<p>បង្វិល Container ដោយប្រើ Explicit Animation។</p>
<pre><code class="language-dart">
AnimationController _controller = AnimationController(
  duration: Duration(seconds: 2),
  vsync: this,
);
Animation<double> _animation = Tween<double>(begin: 0, end: 360).animate(
  CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
);
_controller.repeat(reverse: true);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Hero Animation</h3>
<p>បង្កើត Transition Animation រវាង Screens។</p>
<pre><code class="language-dart">
Hero(
  tag: 'hero-image',
  child: Image.network('https://via.placeholder.com/150', width: 100, height: 100),
)
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Animations នៅក្នុង Flutter ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'ធ្វើឱ្យ UI មានភាពរស់រវើក',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Animations ធ្វើឱ្យ UI មានភាពរស់រវើក និងទាក់ទាញ។'
    },
    {
      question: 'តើប្រភេទ Animation ណាដែល Flutter គ្រប់គ្រងដោយស្វ័យប្រវត្តិ?',
      options: ['Implicit', 'Explicit', 'Hero', 'Tween'],
      correct: 0,
      explanation: 'Implicit Animations ដូចជា `AnimatedContainer` ត្រូវបានគ្រប់គ្រងដោយ Flutter។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់ Implicit Animations?',
      options: ['Container', 'AnimatedContainer', 'AnimationController', 'Tween'],
      correct: 1,
      explanation: '`AnimatedContainer` ប្រើសម្រាប់ Implicit Animations។'
    },
    {
      question: 'តើ `AnimationController` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'គ្រប់គ្រង Explicit Animations',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`AnimationController` ប្រើសម្រាប់គ្រប់គ្រង Explicit Animations។'
    },
    {
      question: 'តើ `Tween` ធ្វើអ្វី?',
      options: [
        'កំណត់ Animation Values',
        'បង្កើត Widget',
        'គ្រប់គ្រង State',
        'ផ្ញើ Data'
      ],
      correct: 0,
      explanation: '`Tween` កំណត់ Animation Values ដូចជា ចាប់ផ្តើម និងបញ្ចប់។'
    },
    {
      question: 'តើ `CurvedAnimation` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'បន្ថែមភាពរលូនដល់ Animation',
        'ទាញទិន្នន័យ',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`CurvedAnimation` បន្ថែមភាពរលូនដល់ Animation។'
    },
    {
      question: 'តើ `Hero` Widget ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Animation សាមញ្ញ',
        'Transition Animation រវាង Screens',
        'គ្រប់គ្រង State',
        'ទាញទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`Hero` Widget ប្រើសម្រាប់ Transition Animation រវាង Screens�।'
    },
    {
      question: 'តើ `SingleTickerProviderStateMixin` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'ផ្តល់ vsync ដល់ AnimationController',
        'កំណត់ Theme',
        'គ្រប់គ្រង Errors'
      ],
      correct: 1,
      explanation: '`SingleTickerProviderStateMixin` ផ្តល់ `vsync` ដល់ `AnimationController`។'
    },
    {
      question: 'តើ `dispose` Method ប្រើសម្រាប់អ្វីនៅក្នុង Animation?',
      options: [
        'ចាប់ផ្តើម Animation',
        'បញ្ឈប់ AnimationController',
        'បង្កើត Widget',
        'ផ្ញើ Data'
      ],
      correct: 1,
      explanation: '`dispose` Method បញ្ឈប់ `AnimationController` ដើម្បីបង្កើន Performance។'
    },
    {
      question: 'តើ `AnimatedOpacity` ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្លាស់ប្តូរទំហំ',
        'ផ្លាស់ប្តូរភាពថ្លា',
        'បង្វិល Widget',
        'បង្កើត Transition'
      ],
      correct: 1,
      explanation: '`AnimatedOpacity` ប្រើសម្រាប់ផ្លាស់ប្តូរភាពថ្លានៃ Widget។'
    },
    {
      question: 'តើ `duration` Property នៅក្នុង AnimatedContainer ធ្វើអ្វី?',
      options: [
        'កំណត់ពណ៌',
        'កំណត់រយៈពេល Animation',
        'កំណត់ទំហំ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`duration` Property កំណត់រយៈពេលនៃ Animation។'
    },
    {
      question: 'តើ `curve` Property នៅក្នុង AnimatedContainer ធ្វើអ្វី?',
      options: [
        'កំណត់ទំហំ',
        'បន្ថែមភាពរលូនដល់ Animation',
        'បង្កើត Widget',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`curve` Property បន្ថែមភាពរលូនដល់ Animation។'
    },
    {
      question: 'តើ Flutter DevTools អាចជួយអ្វីក្នុង Animations?',
      options: [
        'បង្កើត Animation',
        'ពិនិត្យ Animation Performance',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Flutter DevTools អាចប្រើដើម្បីពិនិត្យ Animation Performance។'
    },
    {
      question: 'តើ `AnimatedBuilder` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'ធ្វើ Animation ដោយផ្អែកលើ AnimationController',
        'គ្រប់គ្រង State',
        'ផ្ញើ Data'
      ],
      correct: 1,
      explanation: '`AnimatedBuilder` ធ្វើ Animation ដោយផ្អែកលើ `AnimationController`។'
    },
    {
      question: 'តើ `Hero` Widget តម្រូវឱ្យប្រើ Property អ្វីដើម្បីភ្ជាប់ Screens?',
      options: ['tag', 'duration', 'curve', 'vsync'],
      correct: 0,
      explanation: '`Hero` Widget ប្រើ `tag` Property ដើម្បីភ្ជាប់ Animation រវាង Screens។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ Animations ដើម្បីបង្កើត UI ដ៏រស់រវើក។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`AnimationApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`HomeScreen\` សម្រាប់បង្ហាញ Animations។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Animation App"។

2. **Implicit Animation:**
   - បន្ថែម \`AnimatedContainer\` ដែលផ្លាស់ប្តូរទំហំ (width, height) និងពណ៌នៅពេលចុច \`ElevatedButton\`។
   - ប្រើ \`duration\` និង \`curve\` Properties ដើម្បីធ្វើឱ្យ Animation រលូន។

3. **Explicit Animation:**
   - បន្ថែម \`AnimationController\` និង \`Tween\` ដើម្បីបង្វិល Container 360 ដឺក្រេជាបន្តបន្ទាប់។
   - ប្រើ \`CurvedAnimation\` និង \`AnimatedBuilder\` ដើម្បីបង្កើត Animation។

4. **Hero Animation:**
   - បង្កើត Screen ទីពីរដែលបង្ហាញរូបភាពធំជាង។
   - ប្រើ \`Hero\` Widget ដើម្បីបង្កើត Transition Animation នៅពេលផ្លាស់ទៅ Screen ទីពីរ។

5. **Performance:**
   - ប្រើ \`SingleTickerProviderStateMixin\` និង \`dispose\` Method ដើម្បីគ្រប់គ្រង Animation Performance។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ Animation Performance។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(AnimationApp());

class AnimationApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with SingleTickerProviderStateMixin {
  double _width = 100;
  double _height = 100;
  Color _color = Colors.blue;
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );
    _animation = Tween<double>(begin: 0, end: 360).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );
    _controller.repeat(reverse: true);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _changeContainer() {
    setState(() {
      _width = _width == 100 ? 200 : 100;
      _height = _height == 100 ? 200 : 100;
      _color = _color == Colors.blue ? Colors.red : Colors.blue;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Animation App')),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AnimatedContainer(
              duration: Duration(seconds: 1),
              width: _width,
              height: _height,
              color: _color,
              curve: Curves.easeInOut,
              margin: EdgeInsets.all(16.0),
            ),
            ElevatedButton(
              onPressed: _changeContainer,
              child: Text('ផ្លាស់ប្តូរ Container'),
            ),
            AnimatedBuilder(
              animation: _animation,
              builder: (context, child) {
                return Transform.rotate(
                  angle: _animation.value * 3.14159 / 180,
                  child: Container(
                    width: 100,
                    height: 100,
                    color: Colors.green,
                    margin: EdgeInsets.all(16.0),
                  ),
                );
              },
            ),
            GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => SecondScreen()),
                );
              },
              child: Hero(
                tag: 'hero-image',
                child: Image.network(
                  'https://via.placeholder.com/150',
                  width: 100,
                  height: 100,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Second Screen')),
      body: Center(
        child: Hero(
          tag: 'hero-image',
          child: Image.network(
            'https://via.placeholder.com/150',
            width: 300,
            height: 300,
          ),
        ),
      ),
    );
  }
}
\`\`\`
`
  }
};

export default FlutterLesson6_1Content;
