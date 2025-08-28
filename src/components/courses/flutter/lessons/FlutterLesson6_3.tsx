import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson6_3Content: LessonContent = {
  title: 'ការបង្កើនប្រសិទ្ធភាពនៃ Flutter App',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃការបង្កើនប្រសិទ្ធភាព (Performance Optimization) នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបកំណត់បញ្ហាប្រសិទ្ធភាពដោយប្រើ Flutter DevTools',
    'រៀនបច្ចេកទេសកាត់បន្ថយ Widget Rebuilds',
    'ស្គាល់ការប្រើ `const` Constructors និង `StatelessWidget` ដើម្បីបង្កើនប្រសិទ្ធភាព',
    'អនុវត្តន៍ការបង្កើនប្រសិទ្ធភាព Animations និង ListView',
    'យល់ពីការប្រើ `ListView.builder` និង `SliverList` សម្រាប់បញ្ជីធំ',
    'ស្វែងយល់ពីការគ្រប់គ្រង Memory Usage នៅក្នុង Flutter',
    'រៀនបច្ចេកទេសកាត់បន្ថយ Overhead នៃ HTTP Requests'
  ],
  content: `
# ការបង្កើនប្រសិទ្ធភាពនៃ Flutter App 🚀

---

**ការបង្កើនប្រសិទ្ធភាព (Performance Optimization)** គឺជាដំណើរការធ្វើឱ្យ Flutter App ដំណើរការលឿន ប្រើធនធានតិច និងផ្តល់បទពិសោធន៍អ្នកប្រើប្រាស់បានល្អ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនបច្ចេកទេសសំខាន់ៗសម្រាប់បង្កើនប្រសិទ្ធភាព។

---

## 1. អ្វីទៅជា Performance Optimization?

**Performance Optimization** គឺជាការកែលម្អកម្មវិធីដើម្បី៖
- កាត់បន្ថយពេលវេលា Loading។
- ប្រើ Memory និង CPU តិច។
- ធ្វើឱ្យ UI រលូន ជាពិសេសនៅពេលមាន Animations ឬបញ្ជីធំ។

---

## 2. ការប្រើ Flutter DevTools ដើម្បីកំណត់បញ្ហា

**Flutter DevTools** ជួយវិភាគប្រសិទ្ធភាពនៃ App ដូចជា៖
- **Widget Inspector:** ពិនិត្យ Widget Tree និង Rebuilds។
- **Performance Tab:** វិភាគ Frame Rendering Time និង Animation Performance។
- **Memory Tab:** តាមដាន Memory Usage។

**ការបើក DevTools:**
- ដំណើរការ \`flutter run --profile\` ឬបើក DevTools នៅក្នុង IDE។

---

## 3. កាត់បន្ថយ Widget Rebuilds

**Widget Rebuilds** កើតឡើងនៅពេល \`setState\` ត្រូវបានហៅ។ ការប្រើ Widgets ដែលមិនចាំបាច់ Rebuild អាចបង្កើនប្រសិទ្ធភាព។

**បច្ចេកទេស:**
- ប្រើ \`const\` Constructors សម្រាប់ Widgets ដែលមិនផ្លាស់ប្តូរ។
- ប្រើ \`StatelessWidget\` ជំនួស \`StatefulWidget\` នៅពេលអាចធ្វើបាន។
- បំបែក Widgets តូចៗ ដើម្បីកំណត់តំបន់ Rebuild។

**ឧទាហរណ៍កូដ៖**

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
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Performance Optimization')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const StaticTextWidget(), // ប្រើ const ដើម្បីការពារ Rebuild
            CounterWidget(counter: _counter),
            ElevatedButton(
              onPressed: _incrementCounter,
              child: const Text('បន្ថែម'),
            ),
          ],
        ),
      ),
    );
  }
}

class StaticTextWidget extends StatelessWidget {
  const StaticTextWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Text(
      'អត្ថបទឋិតិវន្ត',
      style: TextStyle(fontSize: 20),
    );
  }
}

class CounterWidget extends StatelessWidget {
  final int counter;

  const CounterWidget({Key? key, required this.counter}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      'ចំនួន: $counter',
      style: const TextStyle(fontSize: 20),
    );
  }
}
\`\`\`

**លទ្ធផល:** មានតែ \`CounterWidget\` ប៉ុណ្ណោះដែល Rebuild នៅពេល \`_counter\` ផ្លាស់ប្តូរ។

---

## 4. ការបង្កើនប្រសិទ្ធភាព ListView

**ListView** អាចបណ្តាលឱ្យ Performance យឺតប្រសិនបើបញ្ជីមានទំហំធំ។

**បច្ចេកទេស:**
- ប្រើ \`ListView.builder\` ឬ \`ListView.separated\` ដើម្បី Render Items តាមតម្រូវការ។
- ប្រើ \`SliverList\` សម្រាប់ Custom Scroll Behaviors។
- បន្ថែម \`cacheExtent\` ដើម្បី Pre-render Items។

**ឧទាហរណ៍កូដ៖ ListView.builder**

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

class HomeScreen extends StatelessWidget {
  final List<String> items = List.generate(1000, (index) => 'ធាតុ $index');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Optimized ListView')),
      body: ListView.builder(
        cacheExtent: 1000.0,
        itemCount: items.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(items[index]),
          );
        },
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បញ្ជី 1000 ធាតុ Render ដោយរលូន។

---

## 5. ការបង្កើនប្រសិទ្ធភាព Animations

**Animations** អាចប្រើធនធានច្រើនប្រសិនបើមិនបានគ្រប់គ្រងត្រឹមត្រូវ។

**បច្ចេកទេស:**
- ប្រើ \`SingleTickerProviderStateMixin\` សម្រាប់ \`AnimationController\`។
- បញ្ឈប់ \`AnimationController\` នៅក្នុង \`dispose\` Method។
- ប្រើ \`AnimatedBuilder\` ឬ \`AnimatedWidget\` ដើម្បីកាត់បន្ថយ Rebuilds។
- ជៀសវាង Animations ស្មុគស្មាញនៅលើ Widgets ធំ។

**ឧទាហរណ៍កូដ៖**

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
      duration: const Duration(seconds: 2),
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
      appBar: AppBar(title: const Text('Optimized Animation')),
      body: Center(
        child: AnimatedBuilder(
          animation: _animation,
          builder: (context, child) {
            return Transform.rotate(
              angle: _animation.value * 3.14159 / 180,
              child: child,
            );
          },
          child: const SizedBox(
            width: 100,
            height: 100,
            child: ColoredBox(color: Colors.blue),
          ),
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** Container បង្វិលដោយរលូនដោយមិន Rebuild Widget ទាំងមូល។

---

## 6. ការគ្រប់គ្រង Memory Usage

- **ជៀសវាង Memory Leaks:** បញ្ឈប់ \`AnimationController\`, \`StreamController\`, ឬ \`Timer\` នៅក្នុង \`dispose\`។
- **ប្រើ Image Caching:** ប្រើ \`CachedNetworkImage\` Package សម្រាប់រូបភាព។
- **កាត់បន្ថយ Object Creation:** ប្រើ \`const\` និង Reuse Widgets។

---

## 7. ការបង្កើនប្រសិទ្ធភាព HTTP Requests

- **កាត់បន្ថយ Requests:** ប្រើ Caching ឬ Batch Requests។
- **ប្រើ Asynchronous Operations:** ប្រើ \`async/await\` ដើម្បីការពារ UI Thread។
- **គ្រប់គ្រង Errors:** ប្រើ \`try-catch\` និង Retry Logic។

---

## 8. គន្លឹះសម្រាប់ Performance Optimization

- ប្រើ \`const\` Constructors សម្រាប់ Widgets ដែលមិនផ្លាស់ប្តូរ។
- ប្រើ \`ListView.builder\` សម្រាប់បញ្ជីធំ។
- បំបែក Widgets តូចៗដើម្បីកាត់បន្ថយ Rebuilds។
- ប្រើ \`AnimatedBuilder\` សម្រាប់ Animations។
- ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
- បញ្ឈប់ Resources នៅក្នុង \`dispose\` Method។
- ប្រើ \`CachedNetworkImage\` សម្រាប់រូបភាព។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ កាត់បន្ថយ Widget Rebuilds</h3>
<p>ប្រើ <code>const</code> និង <code>StatelessWidget</code> ដើម្បីការពារ Rebuilds។</p>
<pre><code class="language-dart">
class StaticTextWidget extends StatelessWidget {
  const StaticTextWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Text('អត្ថបទឋិតិវន្ត', style: TextStyle(fontSize: 20));
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ListView.builder</h3>
<p>បង្កើតបញ្ជីធំដោយរលូន។</p>
<pre><code class="language-dart">
ListView.builder(
  cacheExtent: 1000.0,
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ListTile(title: Text('ធាតុ $index'));
  },
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Optimized Animation</h3>
<p>ប្រើ <code>AnimatedBuilder</code> ដើម្បីកាត់បន្ថយ Rebuilds។</p>
<pre><code class="language-dart">
AnimatedBuilder(
  animation: _animation,
  builder: (context, child) {
    return Transform.rotate(
      angle: _animation.value * 3.14159 / 180,
      child: child,
    );
  },
  child: const SizedBox(
    width: 100,
    height: 100,
    child: ColoredBox(color: Colors.blue),
  ),
)
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Performance Optimization នៅក្នុង Flutter មានគោលបំណងអ្វី?',
      options: [
        'បង្កើត Animations',
        'ធ្វើឱ្យ App ដំណើរការលឿន និងប្រើធនធានតិច',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Performance Optimization ធ្វើឱ្យ App ដំណើរការលឿន និងប្រើធនធានតិច។'
    },
    {
      question: 'តើ Flutter DevTools ជួយអ្វីក្នុង Performance Optimization?',
      options: [
        'បង្កើត Widgets',
        'វិភាគ Widget Tree និង Performance',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Flutter DevTools វិភាគ Widget Tree, Frame Rendering, និង Memory Usage។'
    },
    {
      question: 'តើ Widget Rebuilds កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេលប្រើ const',
        'នៅពេលហៅ setState',
        'នៅពេលបង្កើត Animation',
        'នៅពេលទាញទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Widget Rebuilds កើតឡើងនៅពេល `setState` ត្រូវបានហៅ។'
    },
    {
      question: 'តើ `const` Constructor ជួយអ្វីក្នុង Performance?',
      options: [
        'បង្កើត Animation',
        'ការពារ Widget Rebuilds',
        'ទាញទិន្នន័យ',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`const` Constructor ការពារ Widget Rebuilds ដោយបង្កើត Object ឋិតិវន្ត។'
    },
    {
      question: 'តើ `StatelessWidget` ជួយ Performance ដោយរបៀបណា?',
      options: [
        'ផ្លាស់ប្តូរ State',
        'កាត់បន្ថយ Rebuilds',
        'បង្កើត Animation',
        'ទាញទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`StatelessWidget` កាត់បន្ថយ Rebuilds ព្រោះវាមិនផ្លាស់ប្តូរ State។'
    },
    {
      question: 'តើ `ListView.builder` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget ឋិតិវន្ត',
        'Render Items តាមតម្រូវការ',
        'បង្កើត Animation',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`ListView.builder` Render Items តាមតម្រូវការ ដើម្បីបង្កើន Performance។'
    },
    {
      question: 'តើ `cacheExtent` នៅក្នុង ListView.builder ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'Pre-render Items',
        'បញ្ឈប់ Animation',
        'ផ្ញើ Data'
      ],
      correct: 1,
      explanation: '`cacheExtent` Pre-render Items ដើម្បីធ្វើឱ្យ Scrolling រលូន។'
    },
    {
      question: 'តើ `SliverList` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Animation',
        'Custom Scroll Behaviors',
        'ទាញទិន្នន័យ',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`SliverList` ប្រើសម្រាប់ Custom Scroll Behaviors នៅក្នុង ScrollView។'
    },
    {
      question: 'តើ `AnimatedBuilder` ជួយ Performance ដោយរបៀបណា?',
      options: [
        'បង្កើត Widget',
        'កាត់បន្ថយ Widget Rebuilds',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`AnimatedBuilder` កាត់បន្ថយ Widget Rebuilds ដោយ Render តែ Animation។'
    },
    {
      question: 'តើ `SingleTickerProviderStateMixin` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'ផ្តល់ vsync ដល់ AnimationController',
        'ទាញទិន្នន័យ',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`SingleTickerProviderStateMixin` ផ្តល់ `vsync` ដល់ `AnimationController`។'
    },
    {
      question: 'តើ `dispose` Method ជួយ Performance ដោយរបៀបណា?',
      options: [
        'បង្កើត Animation',
        'បញ្ឈប់ Resources ដូចជា AnimationController',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`dispose` Method បញ្ឈប់ Resources ដើម្បីការពារ Memory Leaks។'
    },
    {
      question: 'តើ `CachedNetworkImage` Package ជួយអ្វី?',
      options: [
        'បង្កើត Widget',
        'Cache រូបភាពដើម្បីកាត់បន្ថយ HTTP Requests',
        'បង្កើត Animation',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`CachedNetworkImage` Cache រូបភាពដើម្បីកាត់បន្ថយ HTTP Requests។'
    },
    {
      question: 'តើការបំបែក Widgets តូចៗជួយ Performance ដោយរបៀបណា?',
      options: [
        'បង្កើត Animation',
        'កាត់បន្ថយ Rebuild Area',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'ការបំបែក Widgets តូចៗកាត់បន្ថយ Rebuild Area។'
    },
    {
      question: 'តើ Flutter DevTools Performance Tab វិភាគអ្វី?',
      options: [
        'Widget Tree',
        'Frame Rendering Time',
        'HTTP Requests',
        'Theme'
      ],
      correct: 1,
      explanation: 'Performance Tab វិភាគ Frame Rendering Time និង Animation Performance។'
    },
    {
      question: 'តើការប្រើ `async/await` ជួយ Performance ដោយរបៀបណា?',
      options: [
        'បង្កើត Widget',
        'ការពារ UI Thread ពី Blocking',
        'បង្កើត Animation',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`async/await` ការពារ UI Thread ពី Blocking នៅពេលធ្វើ HTTP Requests។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលបង្កើនប្រសិទ្ធភាព Performance ដោយប្រើបច្ចេកទេសផ្សេងៗ។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`OptimizedApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`HomeScreen\` សម្រាប់បង្ហាញ UI។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Optimized App"។

2. **Widget Optimization:**
   - បង្កើត \`StaticTextWidget\` Stateless Widget ដោយប្រើ \`const\` Constructor។
   - បង្កើត \`CounterWidget\` Stateless Widget ដែលបង្ហាញចំនួន និងទទួល \`counter\` Property។
   - ប្រើ \`setState\` ដើម្បីធ្វើបច្ចុប្បន្នភាពតែ \`CounterWidget\`។

3. **ListView Optimization:**
   - បង្កើតបញ្ជី 1000 ធាតុដោយប្រើ \`ListView.builder\` ជាមួយ \`cacheExtent\`។
   - បង្ហាញ \`ListTile\` សម្រាប់ធាតុនីមួយៗ។

4. **Animation Optimization:**
   - បង្កើត \`OptimizedAnimatedWidget\` Stateful Widget ដែលបង្វិល Container ដោយប្រើ \`AnimationController\` និង \`AnimatedBuilder\`។
   - ប្រើ \`SingleTickerProviderStateMixin\` និង \`dispose\` Method។

5. **Performance Testing:**
   - ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Rebuilds និង Animation Performance។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(OptimizedApp());

class OptimizedApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class StaticTextWidget extends StatelessWidget {
  const StaticTextWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Text(
      'អត្ថបទឋិតិវន្ត',
      style: TextStyle(fontSize: 20),
    );
  }
}

class CounterWidget extends StatelessWidget {
  final int counter;

  const CounterWidget({Key? key, required this.counter}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      'ចំនួន: $counter',
      style: const TextStyle(fontSize: 20),
    );
  }
}

class OptimizedAnimatedWidget extends StatefulWidget {
  const OptimizedAnimatedWidget({Key? key}) : super(key: key);

  @override
  _OptimizedAnimatedWidgetState createState() => _OptimizedAnimatedWidgetState();
}

class _OptimizedAnimatedWidgetState extends State<OptimizedAnimatedWidget> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 2),
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
    return AnimatedBuilder(
      animation: _animation,
      builder: (context, child) {
        return Transform.rotate(
          angle: _animation.value * 3.14159 / 180,
          child: child,
        );
      },
      child: const SizedBox(
        width: 100,
        height: 100,
        child: ColoredBox(color: Colors.blue),
      ),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _counter = 0;
  final List<String> items = List.generate(1000, (index) => 'ធាតុ $index');

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Optimized App')),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const StaticTextWidget(),
            CounterWidget(counter: _counter),
            ElevatedButton(
              onPressed: _incrementCounter,
              child: const Text('បន្ថែម'),
            ),
            const SizedBox(height: 20),
            const OptimizedAnimatedWidget(),
            const SizedBox(height: 20),
            SizedBox(
              height: 400,
              child: ListView.builder(
                cacheExtent: 1000.0,
                itemCount: items.length,
                itemBuilder: (context, index) {
                  return ListTile(title: Text(items[index]));
                },
              ),
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

export default FlutterLesson6_3Content;
