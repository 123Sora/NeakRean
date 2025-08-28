import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson7_2Content: LessonContent = {
  title: 'ការបង្កើត Shopping App ជាមួយ Flutter',
  objectives: [
    'យល់ដឹងអំពីរបៀបបង្កើត Shopping App ដ៏សាមញ្ញជាមួយ Flutter',
    'ស្វែងយល់ពីការគ្រប់គ្រង State ដោយប្រើ Provider',
    'រៀនបង្កើត UI សម្រាប់បង្ហាញផលិតផល និង Cart',
    'អនុវត្តន៍ការបន្ថែម និងលុបផលិតផលនៅក្នុង Cart',
    'ស្គាល់ការប្រើ GridView.builder សម្រាប់បង្ហាញផលិតផល',
    'យល់ពីការប្រើ Navigator សម្រាប់ផ្លាស់ប្តូរទៅកាន់ Cart Screen',
    'រៀនបច្ចេកទេសការពារ Performance នៅក្នុង Shopping App',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ App'
  ],
  content: `
# ការបង្កើត Shopping App ជាមួយ Flutter 🛒

---

**Shopping App** គឺជាគម្រោងដែលអនុញ្ញាតឱ្យអ្នកប្រើមើលផលិតផល និងបន្ថែមផលិតផលទៅក្នុង Cart។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ **Provider** សម្រាប់គ្រប់គ្រង State និង **GridView.builder** សម្រាប់បង្ហាញផលិតផល។

---

## 1. ទិដ្ឋភាពទូទៅនៃ Shopping App

**Shopping App** នឹងមានលក្ខណៈពិសេសដូចជា៖
- បង្ហាញបញ្ជីផលិតផលនៅក្នុង Grid ដោយប្រើ \`GridView.builder\`។
- បន្ថែមផលិតផលទៅក្នុង Cart។
- បង្ហាញ Cart នៅក្នុង Screen ផ្សេង និងអនុញ្ញាតឱ្យលុបផលិតផល។
- គ្រប់គ្រង State ដោយប្រើ \`Provider\`។

---

## 2. ការដំឡើង Provider

បន្ថែម \`provider\` ទៅ \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  provider: ^6.0.0
\`\`\`

---

## 3. ការបង្កើត State Management ជាមួយ Provider

បង្កើត Class \`CartModel\` ដែលប្រើ \`ChangeNotifier\` សម្រាប់គ្រប់គ្រងបញ្ជីផលិតផលនៅក្នុង Cart។

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:flutter/material.dart';

class Product {
  final String name;
  final double price;

  Product({required this.name, required this.price});
}

class CartModel extends ChangeNotifier {
  final List<Product> _cartItems = [];

  List<Product> get cartItems => _cartItems;

  void addToCart(Product product) {
    _cartItems.add(product);
    notifyListeners();
  }

  void removeFromCart(int index) {
    _cartItems.removeAt(index);
    notifyListeners();
  }
}
\`\`\`

---

## 4. ការបង្កើត UI សម្រាប់ Shopping App

បង្កើត UI ដែលមាន \`GridView.builder\` សម្រាប់បង្ហាញផលិតផល និង \`CartScreen\` សម្រាប់បង្ហាញ Cart។

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CartModel(),
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ProductScreen(),
    );
  }
}

class ProductScreen extends StatelessWidget {
  final List<Product> products = List.generate(
    20,
    (index) => Product(name: 'ផលិតផល $index', price: 10.0 + index),
  );

  ProductScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Shopping App'),
        actions: [
          IconButton(
            icon: const Icon(Icons.shopping_cart),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => CartScreen()),
              );
            },
          ),
        ],
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(16.0),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 10,
          mainAxisSpacing: 10,
          childAspectRatio: 0.7,
        ),
        itemCount: products.length,
        itemBuilder: (context, index) {
          final product = products[index];
          return Card(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(product.name, style: const TextStyle(fontSize: 18)),
                Text('\$'$'{product.price.toStringAsFixed(2)}',
                    style: const TextStyle(fontSize: 16)),
                ElevatedButton(
                  onPressed: () {
                    context.read<CartModel>().addToCart(product);
                  },
                  child: const Text('បន្ថែមទៅ Cart'),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

class CartScreen extends StatelessWidget {
  const CartScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Cart')),
      body: Consumer<CartModel>(
        builder: (context, cartModel, child) {
          return ListView.builder(
            itemCount: cartModel.cartItems.length,
            itemBuilder: (context, index) {
              final product = cartModel.cartItems[index];
              return ListTile(
                title: Text(product.name),
                subtitle: Text('\$'$'{product.price.toStringAsFixed(2)}'),
                trailing: IconButton(
                  icon: const Icon(Icons.delete),
                  onPressed: () => context.read<CartModel>().removeFromCart(index),
                ),
              );
            },
          );
        },
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** App បង្ហាញផលិតផលនៅក្នុង Grid និងអនុញ្ញាតឱ្យបន្ថែម/លុបផលិតផលនៅក្នុង Cart។

---

## 5. ការបង្កើនប្រសិទ្ធភាព Performance

- **ប្រើ \`const\` Constructors:** កាត់បន្ថយ Widget Rebuilds។
- **ប្រើ \`Consumer\`:** កំណត់ Rebuild Area នៅក្នុង Provider។
- **ប្រើ \`GridView.builder\`:** Render Items តាមតម្រូវការ។
- **ប្រើ \`Navigator\`:** គ្រប់គ្រង Navigation ដោយរលូន។

---

## 6. ការប្រើ Flutter DevTools

- **Widget Inspector:** ពិនិត្យ Widget Tree និង Rebuilds។
- **Performance Tab:** វិភាគ Frame Rendering Time។
- **Memory Tab:** តាមដាន Memory Usage។

**ការបើក DevTools:**
- ដំណើរការ \`flutter run --profile\` ឬបើក DevTools នៅក្នុង IDE។

---

## 7. គន្លឹះសម្រាប់ Shopping App

- ប្រើ \`Provider\` សម្រាប់គ្រប់គ្រង State។
- ប្រើ \`GridView.builder\` សម្រាប់បង្ហាញផលិតផល។
- ប្រើ \`Navigator\` សម្រាប់ផ្លាស់ប្តូរទៅ Cart Screen។
- បន្ថែម \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
- ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្ហាញផលិតផល</h3>
<p>ប្រើ <code>GridView.builder</code> ដើម្បីបង្ហាញផលិតផល។</p>
<pre><code class="language-dart">
GridView.builder(
  padding: const EdgeInsets.all(16.0),
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2,
    crossAxisSpacing: 10,
    mainAxisSpacing: 10,
    childAspectRatio: 0.7,
  ),
  itemCount: products.length,
  itemBuilder: (context, index) {
    final product = products[index];
    return Card(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(product.name, style: const TextStyle(fontSize: 18)),
          Text('\$'$'{product.price.toStringAsFixed(2)}',
              style: const TextStyle(fontSize: 16)),
          ElevatedButton(
            onPressed: () {
              context.read<CartModel>().addToCart(product);
            },
            child: const Text('បន្ថែមទៅ Cart'),
          ),
        ],
      ),
    );
  },
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការគ្រប់គ្រង Cart</h3>
<p>ប្រើ <code>Consumer</code> និង <code>ListView.builder</code> សម្រាប់ Cart។</p>
<pre><code class="language-dart">
Consumer<CartModel>(
  builder: (context, cartModel, child) {
    return ListView.builder(
      itemCount: cartModel.cartItems.length,
      itemBuilder: (context, index) {
        final product = cartModel.cartItems[index];
        return ListTile(
          title: Text(product.name),
          subtitle: Text('\$'$'{product.price.toStringAsFixed(2)}'),
          trailing: IconButton(
            icon: const Icon(Icons.delete),
            onPressed: () => context.read<CartModel>().removeFromCart(index),
          ),
        );
      },
    );
  },
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ State Management ជាមួយ Provider</h3>
<p>បង្កើត <code>CartModel</code> ដើម្បីគ្រប់គ្រង Cart�।</p>
<pre><code class="language-dart">
class CartModel extends ChangeNotifier {
  final List<Product> _cartItems = [];

  List<Product> get cartItems => _cartItems;

  void addToCart(Product product) {
    _cartItems.add(product);
    notifyListeners();
  }

  void removeFromCart(int index) {
    _cartItems.removeAt(index);
    notifyListeners();
  }
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Shopping App នៅក្នុងមេរៀននេះប្រើ Package អ្វីសម្រាប់ State Management?',
      options: [
        'Riverpod',
        'Provider',
        'BLoC',
        'Redux'
      ],
      correct: 1,
      explanation: 'Shopping App ប្រើ `Provider` សម្រាប់គ្រប់គ្រង State។'
    },
    {
      question: 'តើ `GridView.builder` ជួយអ្វីក្នុង Shopping App?',
      options: [
        'បង្កើត Animations',
        'Render Items តាមតម្រូវការ',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`GridView.builder` Render Items តាមតម្រូវការ ដើម្បីបង្កើន Performance។'
    },
    {
      question: 'តើ `Navigator` នៅក្នុង Shopping App ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'ផ្លាស់ប្តូរទៅកាន់ Cart Screen',
        'ទាញទិន្នន័យ',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`Navigator` ប្រើសម្រាប់ផ្លាស់ប្តូរទៅកាន់ Cart Screen។'
    },
    {
      question: 'តើ `Consumer` នៅក្នុង Provider ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'កំណត់ Rebuild Area',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`Consumer` កំណត់ Rebuild Area នៅពេល State ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `ChangeNotifier` នៅក្នុង Provider ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'ជូនដំណឹងនៅពេល State ផ្លាស់ប្តូរ',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`ChangeNotifier` ជូនដំណឹងនៅពេល State ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើការប្រើ `const` Constructor ជួយ Shopping App ដោយរបៀបណា?',
      options: [
        'បង្កើត Animation',
        'កាត់បន្ថយ Widget Rebuilds',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`const` Constructor កាត់បន្ថយ Widget Rebuilds។'
    },
    {
      question: 'តើ Flutter DevTools ជួយអ្វីក្នុង Shopping App?',
      options: [
        'បង្កើត Widget',
        'វិភាគ Widget Tree និង Performance',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Flutter DevTools វិភាគ Widget Tree, Frame Rendering, និង Memory Usage�।'
    },
    {
      question: 'តើ `ListTile` នៅក្នុង Cart Screen ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Animation',
        'បង្ហាញផលិតផល និង Delete Button',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`ListTile` បង្ហាញផលិតផល និង Delete Button នៅក្នុង Cart�।'
    },
    {
      question: 'តើការបំបែក Widgets តូចៗជួយ Shopping App ដោយរបៀបណា?',
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
      question: 'តើ `SliverGridDelegateWithFixedCrossAxisCount` ធ្វើអ្វី?',
      options: [
        'បង្កើត Animation',
        'កំណត់ Layout សម្រាប់ GridView',
        'ទាញទិន្នន័យ',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`SliverGridDelegateWithFixedCrossAxisCount` កំណត់ Layout សម្រាប់ GridView។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter Shopping App ដែលគ្រប់គ្រង State ដោយប្រើ Provider។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`ShoppingApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateless Widget មួយឈ្មោះ \`ProductScreen\` សម្រាប់បង្ហាញផលិតផល។
   - បង្កើត Stateless Widget មួយឈ្មោះ \`CartScreen\` សម្រាប់បង្ហាញ Cart។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Shopping App"។

2. **State Management:**
   - បង្កើត \`ChangeNotifier\` Class ឈ្មោះ \`CartModel\` ដែលគ្រប់គ្រងបញ្ជីផលិតផលនៅក្នុង Cart។
   - ប្រើ \`ChangeNotifierProvider\` និង \`Consumer\` ដើម្បីបន្ថែម និងលុបផលិតផល។

3. **UI Requirements:**
   - បង្ហាញផលិតផលនៅក្នុង Grid ដោយប្រើ \`GridView.builder\`។
   - បន្ថែម \`ElevatedButton\` សម្រាប់បន្ថែមផលិតផលទៅក្នុង Cart។
   - បន្ថែម \`IconButton\` នៅក្នុង \`AppBar\` ដើម្បីផ្លាស់ប្តូរទៅ \`CartScreen\`។
   - បង្ហាញបញ្ជីផលិតផលនៅក្នុង Cart ដោយប្រើ \`ListView.builder\`។
   - បន្ថែម \`IconButton\` សម្រាប់លុបផលិតផលចេញពី Cart។

4. **Performance Optimization:**
   - ប្រើ \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
   - ប្រើ \`Consumer\` ដើម្បីកំណត់ Rebuild Area។

5. **Performance Testing:**
   - ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Rebuilds។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CartModel(),
      child: const ShoppingApp(),
    ),
  );
}

class Product {
  final String name;
  final double price;

  Product({required this.name, required this.price});
}

class CartModel extends ChangeNotifier {
  final List<Product> _cartItems = [];

  List<Product> get cartItems => _cartItems;

  void addToCart(Product product) {
    _cartItems.add(product);
    notifyListeners();
  }

  void removeFromCart(int index) {
    _cartItems.removeAt(index);
    notifyListeners();
  }
}

class ShoppingApp extends StatelessWidget {
  const ShoppingApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ProductScreen(),
    );
  }
}

class ProductScreen extends StatelessWidget {
  final List<Product> products = List.generate(
    20,
    (index) => Product(name: 'ផលិតផល $index', price: 10.0 + index),
  );

  ProductScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Shopping App'),
        actions: [
          IconButton(
            icon: const Icon(Icons.shopping_cart),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const CartScreen()),
              );
            },
          ),
        ],
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(16.0),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 10,
          mainAxisSpacing: 10,
          childAspectRatio: 0.7,
        ),
        itemCount: products.length,
        itemBuilder: (context, index) {
          final product = products[index];
          return Card(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(product.name, style: const TextStyle(fontSize: 18)),
                Text('\$'$'{product.price.toStringAsFixed(2)}',
                    style: const TextStyle(fontSize: 16)),
                ElevatedButton(
                  onPressed: () {
                    context.read<CartModel>().addToCart(product);
                  },
                  child: const Text('បន្ថែមទៅ Cart'),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

class CartScreen extends StatelessWidget {
  const CartScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Cart')),
      body: Consumer<CartModel>(
        builder: (context, cartModel, child) {
          return ListView.builder(
            itemCount: cartModel.cartItems.length,
            itemBuilder: (context, index) {
              final product = cartModel.cartItems[index];
              return ListTile(
                title: Text(product.name),
                subtitle: Text('\$'$'{product.price.toStringAsFixed(2)}'),
                trailing: IconButton(
                  icon: const Icon(Icons.delete),
                  onPressed: () => context.read<CartModel>().removeFromCart(index),
                ),
              );
            },
          );
        },
      ),
    );
  }
}
\`\`\`
`
  }
};

export default FlutterLesson7_2Content;