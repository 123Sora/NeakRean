import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson3_3Content: LessonContent = {
  title: 'លំនាំ Bloc សម្រាប់ការគ្រប់គ្រងស្ថានភាព',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Bloc Pattern នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ `flutter_bloc` Package ដើម្បីគ្រប់គ្រង App State',
    'រៀនបង្កើត Bloc, Events, និង States',
    'ស្គាល់ការប្រើ BlocProvider, BlocBuilder, និង BlocListener',
    'អនុវត្តន៍ការបង្កើត App ដែលប្រើ Bloc Pattern សម្រាប់ State Management',
    'យល់ពីគុណសម្បត្តិនៃ Bloc ធៀបនឹង setState និង Provider',
    'ស្វែងយល់ពីការបំបែក Business Logic និង UI'
  ],
  content: `
# លំនាំ Bloc សម្រាប់ការគ្រប់គ្រងស្ថានភាព 🧱🔄

---

**Bloc Pattern** (Business Logic Component) គឺជាវិធីសាស្ត្រគ្រប់គ្រងស្ថានភាពដ៏មានឥទ្ធិពលនៅក្នុង Flutter។ វាបំបែក **Business Logic** និង **UI** ដើម្បីធ្វើឱ្យកូដកាន់តែស្អាត ងាយស្រួលថែទាំ និងអាចសាកល្បងបាន។ Bloc ប្រើ **Events** និង **States** ដើម្បីគ្រប់គ្រងទំនាក់ទំនងរវាង UI និង Logic។

---

## 1. អ្វីទៅជា Bloc Pattern?

**Bloc Pattern** គឺជាវិធីសាស្ត្រដែលប្រើ Stream ដើម្បីគ្រប់គ្រងស្ថានភាព។ វាមានសមាសភាគសំខាន់ៗ៖
- **Bloc:** គ្រប់គ្រង Business Logic និងបម្លែង Events ទៅជា States។
- **Events:** ព្រឹត្តិការណ៍ដែលបង្កឱ្យមានការផ្លាស់ប្តូរ State (ឧទាហរណ៍៖ ចុចប៊ូតុង)។
- **States:** ស្ថានភាពដែល UI បង្ហាញ (ឧទាហរណ៍៖ តម្លៃ Counter)។

**លំហូរ៖** UI → Event → Bloc → State → UI

---

## 2. ការដំឡើង flutter_bloc Package

ដើម្បីប្រើ Bloc ត្រូវបន្ថែម Package ទៅក្នុង \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  flutter_bloc: ^8.1.0
\`\`\`

បន្ទាប់មក ដំណើរការ \`flutter pub get\` ដើម្បីទាញ Package។

---

## 3. ការបង្កើត Bloc, Events, និង States

### ការបង្កើត Events
Events គឺជាព្រឹត្តិការណ៍ដែលបង្កឱ្យ Bloc ផ្លាស់ប្តូរ State។

\`\`\`dart
abstract class CounterEvent {}
class IncrementEvent extends CounterEvent {}
class DecrementEvent extends CounterEvent {}
\`\`\`

### ការបង្កើត States
States គឺជាស្ថានភាពដែល UI បង្ហាញ។

\`\`\`dart
class CounterState {
  final int counter;
  CounterState(this.counter);
}
\`\`\`

### ការបង្កើត Bloc
Bloc គ្រប់គ្រង Events និងបង្កើត States។

\`\`\`dart
import 'package:flutter_bloc/flutter_bloc.dart';

class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterState(0)) {
    on<IncrementEvent>((event, emit) => emit(CounterState(state.counter + 1)));
    on<DecrementEvent>((event, emit) => emit(CounterState(state.counter - 1)));
  }
}
\`\`\`

**ពន្យល់:**
- \`CounterBloc\` ទទួល Events (\`IncrementEvent\`, \`DecrementEvent\`) និងបញ្ចេញ States (\`CounterState\`)។
- \`emit\` បញ្ចេញ State ថ្មីទៅ UI។

---

## 4. ការប្រើ BlocProvider, BlocBuilder, និង BlocListener

- **BlocProvider:** ផ្តល់ Bloc ទៅ Widget Tree។
- **BlocBuilder:** Rebuild UI នៅពេល State ផ្លាស់ប្តូរ។
- **BlocListener:** ស្តាប់ State Changes សម្រាប់ Actions (ឧទាហរណ៍៖ បង្ហាញ SnackBar)។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

abstract class CounterEvent {}
class IncrementEvent extends CounterEvent {}
class DecrementEvent extends CounterEvent {}

class CounterState {
  final int counter;
  CounterState(this.counter);
}

class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterState(0)) {
    on<IncrementEvent>((event, emit) => emit(CounterState(state.counter + 1)));
    on<DecrementEvent>((event, emit) => emit(CounterState(state.counter - 1)));
  }
}

void main() {
  runApp(
    BlocProvider(
      create: (context) => CounterBloc(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Bloc Counter')),
        body: Center(
          child: BlocBuilder<CounterBloc, CounterState>(
            builder: (context, state) {
              return Text('Counter: '$'{state.counter}', style: TextStyle(fontSize: 20));
            },
          ),
        ),
        floatingActionButton: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            FloatingActionButton(
              onPressed: () => context.read<CounterBloc>().add(IncrementEvent()),
              child: Icon(Icons.add),
            ),
            SizedBox(width: 10),
            FloatingActionButton(
              onPressed: () => context.read<CounterBloc>().add(DecrementEvent()),
              child: Icon(Icons.remove),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Counter ដែលកើនឡើង ឬបន្ថយនៅពេលចុច FloatingActionButton។

---

## 5. ការប្រើ BlocListener

\`BlocListener\` ស្តាប់ State Changes ដើម្បីធ្វើ Actions ដូចជាបង្ហាញ SnackBar។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

abstract class SwitchEvent {}
class ToggleSwitchEvent extends SwitchEvent {}

class SwitchState {
  final bool isSwitched;
  SwitchState(this.isSwitched);
}

class SwitchBloc extends Bloc<SwitchEvent, SwitchState> {
  SwitchBloc() : super(SwitchState(false)) {
    on<ToggleSwitchEvent>((event, emit) => emit(SwitchState(!state.isSwitched)));
  }
}

void main() {
  runApp(
    BlocProvider(
      create: (context) => SwitchBloc(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Bloc Switch')),
        body: Center(
          child: BlocListener<SwitchBloc, SwitchState>(
            listener: (context, state) {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(content: Text(state.isSwitched ? 'បើក' : 'បិទ')),
              );
            },
            child: BlocBuilder<SwitchBloc, SwitchState>(
              builder: (context, state) {
                return Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Switch(
                      value: state.isSwitched,
                      onChanged: (value) => context.read<SwitchBloc>().add(ToggleSwitchEvent()),
                    ),
                    Text(state.isSwitched ? 'បើក' : 'បិទ', style: TextStyle(fontSize: 20)),
                  ],
                );
              },
            ),
          ),
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Switch ដែលប្តូរស្ថានភាព និង SnackBar នៅពេលស្ថានភាពផ្លាស់ប្តូរ។

---

## 6. គុណសម្បត្តិនៃ Bloc ធៀបនឹង setState និង Provider

- **Bloc:**
  - បំបែក Business Logic និង UI យ៉ាងច្បាស់លាស់។
  - សមស្របសម្រាប់ Apps ដែលមាន Complexity ខ្ពស់។
  - ងាយស្រួលសម្រាប់ Unit Testing។
- **setState:** សាមញ្ញ ប៉ុន្តែសមស្របសម្រាប់ Local State តែប៉ុណ្ណោះ។
- **Provider:** សាមញ្ញជាង Bloc ប៉ុន្តែមិនបំបែក Logic ច្បាស់លាស់។

---

## 7. គន្លឹះសម្រាប់ Bloc

- បន្ថែម \`flutter_bloc\` Package ទៅ \`pubspec.yaml\`។
- បង្កើត Events និង States ដែលច្បាស់លាស់។
- ប្រើ \`BlocProvider\` នៅ Root នៃ App។
- ប្រើ \`BlocBuilder\` សម្រាប់ Rebuild UI និង \`BlocListener\` សម្រាប់ Actions។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ State Changes និង Event Flow។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Counter ជាមួយ Bloc</h3>
<p>បង្កើត Counter ដោយប្រើ Bloc Pattern។</p>
<pre><code class="language-dart">
abstract class CounterEvent {}
class IncrementEvent extends CounterEvent {}
class DecrementEvent extends CounterEvent {}

class CounterState {
  final int counter;
  CounterState(this.counter);
}

class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterState(0)) {
    on<IncrementEvent>((event, emit) => emit(CounterState(state.counter + 1)));
    on<DecrementEvent>((event, emit) => emit(CounterState(state.counter - 1)));
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: BlocBuilder<CounterBloc, CounterState>(
            builder: (context, state) => Text('Counter: '$'{state.counter}'),
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => context.read<CounterBloc>().add(IncrementEvent()),
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Switch ជាមួយ Bloc</h3>
<p>បង្កើត Switch ដោយប្រើ Bloc។</p>
<pre><code class="language-dart">
abstract class SwitchEvent {}
class ToggleSwitchEvent extends SwitchEvent {}

class SwitchState {
  final bool isSwitched;
  SwitchState(this.isSwitched);
}

class SwitchBloc extends Bloc<SwitchEvent, SwitchState> {
  SwitchBloc() : super(SwitchState(false)) {
    on<ToggleSwitchEvent>((event, emit) => emit(SwitchState(!state.isSwitched)));
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: BlocBuilder<SwitchBloc, SwitchState>(
            builder: (context, state) => Switch(
              value: state.isSwitched,
              onChanged: (value) => context.read<SwitchBloc>().add(ToggleSwitchEvent()),
            ),
          ),
        ),
      ),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ TextField ជាមួយ Bloc</h3>
<p>បង្កើត TextField ដោយប្រើ Bloc។</p>
<pre><code class="language-dart">
abstract class TextEvent {}
class UpdateTextEvent extends TextEvent {
  final String text;
  UpdateTextEvent(this.text);
}

class TextState {
  final String text;
  TextState(this.text);
}

class TextBloc extends Bloc<TextEvent, TextState> {
  TextBloc() : super(TextState('')) {
    on<UpdateTextEvent>((event, emit) => emit(TextState(event.text)));
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: BlocBuilder<TextBloc, TextState>(
            builder: (context, state) => Column(
              children: [
                TextField(
                  onChanged: (value) => context.read<TextBloc>().add(UpdateTextEvent(value)),
                  decoration: InputDecoration(labelText: 'បញ្ចូលអត្ថបទ'),
                ),
                Text('អត្ថបទ: '$'{state.text}'),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Bloc Pattern គឺជាអ្វី?',
      options: [
        'Layout System',
        'State Management Pattern',
        'Theme Manager',
        'Navigation System'
      ],
      correct: 1,
      explanation: 'Bloc Pattern គឺជាវិធីសាស្ត្រគ្រប់គ្រងស្ថានភាពដែលបំបែក Logic និង UI។'
    },
    {
      question: 'តើ Package ណាដែលត្រូវបន្ថែមដើម្បីប្រើ Bloc?',
      options: ['flutter_bloc', 'provider', 'material', 'cupertino'],
      correct: 0,
      explanation: '`flutter_bloc` Package ត្រូវបន្ថែមទៅ `pubspec.yaml`។'
    },
    {
      question: 'តើ Events នៅក្នុង Bloc មានតួនាទីអ្វី?',
      options: [
        'បង្ហាញ UI',
        'បង្កឱ្យមានការផ្លាស់ប្តូរ State',
        'រក្សាទុក State',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Events បង្កឱ្យមានការផ្លាស់ប្តូរ State នៅក្នុង Bloc។'
    },
    {
      question: 'តើ States នៅក្នុង Bloc មានតួនាទីអ្វី?',
      options: [
        'គ្រប់គ្រង Business Logic',
        'បង្ហាញ UI',
        'បង្កឱ្យមាន Events',
        'រក្សាទុក Theme'
      ],
      correct: 1,
      explanation: 'States ត្រូវបានប្រើដើម្បីបង្ហាញ UI នៅក្នុង Bloc។'
    },
    {
      question: 'តើ `BlocProvider` មានតួនាទីអ្វី?',
      options: [
        'Rebuild UI',
        'ផ្តល់ Bloc ទៅ Widget Tree',
        'បង្កឱ្យមាន Events',
        'រក្សាទុក State'
      ],
      correct: 1,
      explanation: '`BlocProvider` ផ្តល់ Bloc ទៅ Widget Tree។'
    },
    {
      question: 'តើ `BlocBuilder` ធ្វើអ្វី?',
      options: [
        'ស្តាប់ State Changes',
        'Rebuild UI នៅពេល State ផ្លាស់ប្តូរ',
        'បង្កឱ្យមាន Events',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`BlocBuilder` Rebuild UI នៅពេល State ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `BlocListener` ប្រើសម្រាប់អ្វី?',
      options: [
        'Rebuild UI',
        'ស្តាប់ State Changes សម្រាប់ Actions',
        'បង្កើត Events',
        'រក្សាទុក State'
      ],
      correct: 1,
      explanation: '`BlocListener` ស្តាប់ State Changes សម្រាប់ Actions ដូចជាបង្ហាញ SnackBar។'
    },
    {
      question: 'តើ `emit` នៅក្នុង Bloc ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'បញ្ចេញ State ថ្មី',
        'បង្កឱ្យមាន Events',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`emit` បញ្ចេញ State ថ្មីទៅ UI។'
    },
    {
      question: 'តើគុណសម្បត្តិសំខាន់នៃ Bloc គឺជាអ្វី?',
      options: [
        'សាមញ្ញជាង setState',
        'បំបែក Business Logic និង UI',
        'មិនត្រូវការ Package',
        'ប្រើសម្រាប់ Local State'
      ],
      correct: 1,
      explanation: 'Bloc បំបែក Business Logic និង UI យ៉ាងច្បាស់លាស់។'
    },
    {
      question: 'តើ Bloc សមស្របសម្រាប់ Apps ប្រភេទណា?',
      options: [
        'Apps សាមញ្ញ',
        'Apps ដែលមាន Complexity ខ្ពស់',
        'Apps ដែលមិនផ្លាស់ប្តូរ State',
        'Apps ដែលប្រើ Layout តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'Bloc សមស្របសម្រាប់ Apps ដែលមាន Complexity ខ្ពស់។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `BlocBuilder` និង `BlocListener` ក្នុង Widget តែមួយបានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង StatelessWidget', 'បានតែនៅក្នុង StatefulWidget'],
      correct: 0,
      explanation: 'អាចប្រើទាំង `BlocBuilder` និង `BlocListener` ក្នុង Widget តែមួយ។'
    },
    {
      question: 'តើ `flutter_bloc` Package ប្រើអ្វីជាមូលដ្ឋាន?',
      options: ['Future', 'Stream', 'List', 'Map'],
      correct: 1,
      explanation: '`flutter_bloc` ប្រើ Stream ជាមូលដ្ឋានសម្រាប់គ្រប់គ្រង State។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដ `context.read<CounterBloc>().add(IncrementEvent())`?',
      options: [
        'បង្កើត Widget',
        'បញ្ជូន Event ទៅ Bloc',
        'Rebuild UI',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`context.read<CounterBloc>().add(IncrementEvent())` បញ្ជូន Event ទៅ Bloc។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ \`flutter_bloc\` Package ដើម្បីគ្រប់គ្រង App State។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`BlocApp\` ដែលប្រើ \`MaterialApp\`។
   - បន្ថែម \`BlocProvider\` នៅ Root នៃ App។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Bloc Lab"។

2. **Counter Feature:**
   - បង្កើត \`CounterBloc\` ជាមួយ Events (\`IncrementEvent\`, \`DecrementEvent\`) និង State (\`CounterState\`)។
   - បង្ហាញ Counter នៅក្នុង \`Text\` Widget ដោយប្រើ \`BlocBuilder\`។
   - បន្ថែម \`FloatingActionButton\` ពីរសម្រាប់បង្កើន (+1) និងបន្ថយ (-1) Counter។

3. **Switch Feature:**
   - បង្កើត \`SwitchBloc\` ជាមួយ Event (\`ToggleSwitchEvent\`) និង State (\`SwitchState\`)។
   - បង្ហាញ \`Switch\` Widget និង \`Text\` Widget ដែលបង្ហាញស្ថានភាព ("បើក" ឬ "បិទ") ដោយប្រើ \`BlocBuilder\`។
   - ប្រើ \`BlocListener\` ដើម្បីបង្ហាញ \`SnackBar\` នៅពេលស្ថានភាពផ្លាស់ប្តូរ។

4. **TextField Feature:**
   - បង្កើត \`TextBloc\` ជាមួយ Event (\`UpdateTextEvent\`) និង State (\`TextState\`)។
   - បន្ថែម \`TextField\` ដែលអនុញ្ញាតឱ្យបញ្ចូលអត្ថបទ និងបង្ហាញអត្ថបទនៅក្នុង \`Text\` Widget ដោយប្រើ \`BlocBuilder\`។

**ការណែនាំ:** បន្ថែម \`flutter_bloc\` Package ទៅ \`pubspec.yaml\`។ សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ State Changes និង Event Flow។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

// Counter Feature
abstract class CounterEvent {}
class IncrementEvent extends CounterEvent {}
class DecrementEvent extends CounterEvent {}

class CounterState {
  final int counter;
  CounterState(this.counter);
}

class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterState(0)) {
    on<IncrementEvent>((event, emit) => emit(CounterState(state.counter + 1)));
    on<DecrementEvent>((event, emit) => emit(CounterState(state.counter - 1)));
  }
}

// Switch Feature
abstract class SwitchEvent {}
class ToggleSwitchEvent extends SwitchEvent {}

class SwitchState {
  final bool isSwitched;
  SwitchState(this.isSwitched);
}

class SwitchBloc extends Bloc<SwitchEvent, SwitchState> {
  SwitchBloc() : super(SwitchState(false)) {
    on<ToggleSwitchEvent>((event, emit) => emit(SwitchState(!state.isSwitched)));
  }
}

// Text Feature
abstract class TextEvent {}
class UpdateTextEvent extends TextEvent {
  final String text;
  UpdateTextEvent(this.text);
}

class TextState {
  final String text;
  TextState(this.text);
}

class TextBloc extends Bloc<TextEvent, TextState> {
  TextBloc() : super(TextState('')) {
    on<UpdateTextEvent>((event, emit) => emit(TextState(event.text)));
  }
}

void main() {
  runApp(
    MultiBlocProvider(
      providers: [
        BlocProvider(create: (context) => CounterBloc()),
        BlocProvider(create: (context) => SwitchBloc()),
        BlocProvider(create: (context) => TextBloc()),
      ],
      child: BlocApp(),
    ),
  );
}

class BlocApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Bloc Lab')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              BlocBuilder<CounterBloc, CounterState>(
                builder: (context, state) => Text(
                  'Counter: '$'{state.counter}',
                  style: TextStyle(fontSize: 20),
                ),
              ),
              SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  FloatingActionButton(
                    onPressed: () => context.read<CounterBloc>().add(IncrementEvent()),
                    child: Icon(Icons.add),
                  ),
                  SizedBox(width: 10),
                  FloatingActionButton(
                    onPressed: () => context.read<CounterBloc>().add(DecrementEvent()),
                    child: Icon(Icons.remove),
                  ),
                ],
              ),
              SizedBox(height: 20),
              BlocListener<SwitchBloc, SwitchState>(
                listener: (context, state) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(content: Text(state.isSwitched ? 'បើក' : 'បិទ')),
                  );
                },
                child: BlocBuilder<SwitchBloc, SwitchState>(
                  builder: (context, state) => Column(
                    children: [
                      Switch(
                        value: state.isSwitched,
                        onChanged: (value) => context.read<SwitchBloc>().add(ToggleSwitchEvent()),
                      ),
                      Text(state.isSwitched ? 'បើក' : 'បិទ', style: TextStyle(fontSize: 20)),
                    ],
                  ),
                ),
              ),
              SizedBox(height: 20),
              BlocBuilder<TextBloc, TextState>(
                builder: (context, state) => Column(
                  children: [
                    TextField(
                      onChanged: (value) => context.read<TextBloc>().add(UpdateTextEvent(value)),
                      decoration: InputDecoration(
                        labelText: 'បញ្ចូលអត្ថបទ',
                        border: OutlineInputBorder(),
                      ),
                    ),
                    SizedBox(height: 10),
                    Text('អត្ថបទ: '$'{state.text}', style: TextStyle(fontSize: 20)),
                  ],
                ),
              ),
            ],
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

export default FlutterLesson3_3Content;
