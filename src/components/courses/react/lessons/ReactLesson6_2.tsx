import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson6_2Content: LessonContent = {
  title: 'កម្មវិធីបង្ហាញផលិតផល E-commerce',
  objectives: [
    'យល់ដឹងអំពីការបង្កើត E-commerce Product Listing App ជាមួយ React',
    'រៀនបង្ហាញ Array នៃផលិតផលជាមួយ Props',
    'អនុវត្ត Component Reusability សម្រាប់ Product Card',
    'ស្វែងយល់ពីការប្រើ `map` សម្រាប់ Render Lists',
    'រៀនប្រើ Event Handlers សម្រាប់ Add to Cart',
    'អនុវត្ត Basic Styling សម្រាប់ Product Cards',
    'ស្វែងយល់ពី State Management សម្រាប់ Cart'
  ],
  content: `
# កម្មវិធីបង្ហាញផលិតផល E-commerce 🛒

---

**E-commerce Product Listing App** បង្ហាញផលិតផលជាមួយ Product Cards និងអនុញ្ញាតឱ្យអ្នកប្រើបន្ថែមទៅ Cart៕

---

## 1. ការបង្កើត Product Card
បង្កើត Reusable Component សម្រាប់បង្ហាញផលិតផល៕

\`\`\`jsx
function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>តម្លៃ:\`$\`{product.price}</p>
      <button onClick={() => onAddToCart(product)}>បន្ថែមទៅកន្ត្រក</button>
    </div>
  );
}
\`\`\`

---

## 2. ការបង្ហាញ Product List
ប្រើ \`map\` ដើម្បី Render Array នៃផលិតផល៕

\`\`\`jsx
import { useState } from 'react';

function ProductList() {
  const products = [
    { id: 1, name: 'ទូរស័ព្ទ', price: 300 },
    { id: 2, name: 'កាស', price: 50 },
    { id: 3, name: 'កុំព្យូទ័រ', price: 1000 }
  ];
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>ផលិតផល</h2>
      <p>ចំនួននៅក្នុងកន្ត្រក: {cart.length}</p>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
\`\`\`

---

## 3. State Management សម្រាប់ Cart
ប្រើ \`useState\` ដើម្បីគ្រប់គ្រង Cart Items៕

\`\`\`jsx
const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart([...cart, product]);
};
\`\`\`

---

## 4. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>តម្លៃ: \'$\'{product.price}</p>
      <button onClick={() => onAddToCart(product)}>បន្ថែមទៅកន្ត្រក</button>
    </div>
  );
}

function ProductList() {
  const products = [
    { id: 1, name: 'ទូរស័ព្ទ', price: 300 },
    { id: 2, name: 'កាស', price: 50 },
    { id: 3, name: 'កុំព្យូទ័រ', price: 1000 }
  ];
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>ផលិតផល</h2>
      <p>ចំនួននៅក្នុងកន្ត្រក: {cart.length}</p>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<ProductList />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ E-commerce Product Listing</h3>
<div id="root"></div>
<script type="text/babel">
  import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function ProductCard({ product, onAddToCart }) {
    return (
      <div>
        <h3>{product.name}</h3>
        <p>តម្លៃ: \`$\`{product.price}</p>
        <button onClick={() => onAddToCart(product)}>បន្ថែមទៅកន្ត្រក</button>
      </div>
    );
  }
  function ProductList() {
    const products = [
      { id: 1, name: 'ទូរស័ព្ទ', price: 300 },
      { id: 2, name: 'កាស', price: 50 },
      { id: 3, name: 'កុំព្យូទ័រ', price: 1000 }
    ];
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
    return (
      <div>
        <h2>ផលិតផល</h2>
        <p>ចំនួននៅក្នុងកន្ត្រក: {cart.length}</p>
        <div>
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    );
  }
  ReactDOM.render(<ProductList />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>តម្លៃ: \`$\`{product.price}</p>
      <button onClick={() => onAddToCart(product)}>បន្ថែមទៅកន្ត្រក</button>
    </div>
  );
}
function ProductList() {
  const products = [
    { id: 1, name: 'ទូរស័ព្ទ', price: 300 },
    { id: 2, name: 'កាស', price: 50 },
    { id: 3, name: 'កុំព្យូទ័រ', price: 1000 }
  ];
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div>
      <h2>ផលិតផល</h2>
      <p>ចំនួននៅក្នុងកន្ត្រក: {cart.length}</p>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Component ណាដែលបង្ហាញផលិតផលនីមួយៗ?',
      options: [
        'ProductList',
        'ProductCard',
        'App',
        'Cart'
      ],
      correct: 1,
      explanation: '`ProductCard` បង្ហាញផលិតផលនីមួយៗជាមួយ Name, Price, និង Button៕'
    },
    {
      question: 'តើ `map` នៅក្នុង `ProductList` ធ្វើអ្វី?',
      options: [
        'Update State',
        'Render Array នៃ Product Cards',
        'Add to Cart',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`map` Render Array នៃ Product Cards ដោយ Iterate លើ Products៕'
    },
    {
      question: 'តើ `onAddToCart` Prop ប្រើសម្រាប់អ្វី?',
      options: [
        'Render Product',
        'Handle Add to Cart Event',
        'Update Price',
        'Style Component'
      ],
      correct: 1,
      explanation: '`onAddToCart` Handle Event នៅពេលអ្នកប្រើបន្ថែមផលិតផលទៅ Cart៕'
    },
    {
      question: 'តើ `useState` នៅក្នុង `ProductList` គ្រប់គ្រងអ្វី?',
      options: [
        'Product List',
        'Cart Items',
        'Input Value',
        'Component Props'
      ],
      correct: 1,
      explanation: '`useState` គ្រប់គ្រង Array នៃ Cart Items៕'
    },
    {
      question: 'តើ Key Prop នៅក្នុង `ProductCard` ប្រើសម្រាប់អ្វី?',
      options: [
        'Update State',
        'Identify Unique Products',
        'Handle Events',
        'Style Elements'
      ],
      correct: 1,
      explanation: 'Key Prop Identify Unique Products ក្នុង List Rendering៕'
    },
    {
      question: 'តើ `setCart([...cart, product])` ធ្វើអ្វី?',
      options: [
        'Remove Product',
        'Add Product to Cart',
        'Update Product Price',
        'Clear Cart'
      ],
      correct: 1,
      explanation: '`setCart([...cart, product])` បន្ថែម Product ទៅ Cart Array៕'
    },
    {
      question: 'តើ Component Reusability នៅក្នុង App នេះសំដៅលើអ្វី?',
      options: [
        'Reusing `useState`',
        'Reusing `ProductCard` Component',
        'Reusing CSS',
        'Reusing API Calls'
      ],
      correct: 1,
      explanation: '`ProductCard` ជា Reusable Component សម្រាប់បង្ហាញផលិតផលនីមួយៗ៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្កើត E-commerce Product Listing App៕

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title៖ "React E-commerce Product Listing"៕
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`៕

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel៕
   - បង្កើត Functional Component \`ProductCard\` ដែល:
     - ទទួល Props \`product\` (Object ដែលមាន \`id\`, \`name\`, \`price\`) និង \`onAddToCart\` (Function)៕
     - Render \`<h3>\` សម្រាប់ Name, \`<p>\` សម្រាប់ Price, និង \`<button>\` សម្រាប់ Add to Cart៕
   - បង្កើត Functional Component \`ProductList\` ដែល:
     - ប្រើ \`useState\` សម្រាប់ \`cart\` (Array, Initial: [])៕
     - Define Static Array នៃ Products (ឧ. 3 ផលិតផល)៕
     - Render \`<h2>ផលិតផល</h2>\`, \`<p>\` សម្រាប់ Cart Count, និង List នៃ \`ProductCard\`៕
   - Render \`ProductList\` Component ទៅក្នុង \`<div id="root">\`៕

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - កំណត់ \`border: 1px solid #ccc; padding: 10px; margin: 10px; display: inline-block;\` សម្រាប់ Product Card \`<div>\`៕
     - កំណត់ \`padding: 10px; margin: 5px; background-color: #2c3e50; color: white;\` សម្រាប់ \`button\`៕
     - កំណត់ \`font-size: 18px;\` សម្រាប់ \`h3\`៕

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស៕ អ្នកគួរអាចបន្ថែមផលិតផលទៅ Cart និងឃើញ Cart Count Update៕
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React E-commerce Product Listing</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    div.card {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
      display: inline-block;
    }
    button {
      padding: 10px;
      margin: 5px;
      background-color: #2c3e50;
      color: white;
    }
    h3 {
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/Babel.min.js"></script>
  <script type="text/babel">
    function ProductCard({ product, onAddToCart }) {
      return (
        <div className="card">
          <h3>{product.name}</h3>
          <p>តម្លៃ: \`$\`{product.price}</p>
          <button onClick={() => onAddToCart(product)}>បន្ថែមទៅកន្ត្រក</button>
        </div>
      );
    }
    function ProductList() {
      const products = [
        { id: 1, name: 'ទូរស័ព្ទ', price: 300 },
        { id: 2, name: 'កាស', price: 50 },
        { id: 3, name: 'កុំព្យូទ័រ', price: 1000 }
      ];
      const [cart, setCart] = React.useState([]);
      const addToCart = (product) => {
        setCart([...cart, product]);
      };
      return (
        <div>
          <h2>ផលិតផល</h2>
          <p>ចំនួននៅក្នុងកន្ត្រក: {cart.length}</p>
          <div>
            {products.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      );
    }
    ReactDOM.render(<ProductList />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson6_2Content;