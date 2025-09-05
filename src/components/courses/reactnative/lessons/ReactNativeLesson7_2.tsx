import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson7_2Content: LessonContent = {
  title: 'ការបង្កើត Shopping App',
  objectives: [
    'អនុវត្តន៍ការ Fetch ទិន្នន័យពី API ដើម្បីបង្កើត Product List',
    'រៀនពីរបៀបប្រើ Global State Management (Context API ឬ Redux) សម្រាប់ Cart',
    'រៀនពីរបៀបរៀបចំ Navigation រវាង Screens',
    'អនុវត្តន៍មុខងារ Add to Cart និង Remove from Cart',
    'រៀនពីរបៀបបង្ហាញ Product Details នៅលើ Screen ដាច់ដោយឡែក'
  ],
  content: `
# ការបង្កើត Shopping App 🛒

---

**Shopping App** គឺជា Project ដែលល្អសម្រាប់អនុវត្តន៍ចំណេះដឹងពីមុនទាំងអស់ រួមទាំង API Integration និង Global State Management ។

## 1. រចនាសម្ព័ន្ធរបស់ App

* **Screens:**
    * **\`ProductListScreen.js\`:** បង្ហាញបញ្ជី Products ។
    * **\`ProductDetailScreen.js\`:** បង្ហាញព័ត៌មានលម្អិតរបស់ Product នីមួយៗ។
    * **\`CartScreen.js\`:** បង្ហាញ Cart List ។
* **Data Source:** យើងនឹងប្រើ Public API ដូចជា **Fake Store API** (\`https://fakestoreapi.com/products\`) ដើម្បីទទួលបានទិន្នន័យ Products ។
* **State Management:** យើងនឹងប្រើ **Context API** ដើម្បីគ្រប់គ្រង Global State របស់ Cart ។

## 2. ការអនុវត្តន៍លំអិត

### ការរៀបចំ Folder Structure
\`\`\`
- src/
  - components/
    - ProductItem.js
  - contexts/
    - CartContext.js
  - navigation/
    - AppNavigator.js
  - screens/
    - ProductListScreen.js
    - ProductDetailScreen.js
    - CartScreen.js
  - App.js
\`\`\`

### ជំហានទី ១៖ Setting up Navigation

យើងនឹងប្រើ **\`@react-navigation/native\`** និង **\`@react-navigation/stack\`** ដើម្បីគ្រប់គ្រង Navigation ។

\`\`\`javascript
// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
\`\`\`

### ជំហានទី ២៖ Setting up Cart Context

* បង្កើត \`CartContext.js\` ដែលមាន State សម្រាប់ Cart (\`items\`) និង Functions សម្រាប់បន្ថែមនិងលុប Items ។
* រុំ App ទាំងមូលនៅក្នុង \`CartProvider\` ។

### ជំហានទី ៣៖ \`ProductListScreen.js\`

* **Fetch Data:** ប្រើ \`useEffect\` និង \`fetch()\` ដើម្បីទទួលបានបញ្ជី Products ពី API ។
* **Render List:** ប្រើ \`FlatList\` ដើម្បីបង្ហាញ Products ។
* **Navigation:** ប្រើ \`navigation.navigate('ProductDetail', { productId: item.id })\` ដើម្បីបញ្ជូនអ្នកប្រើប្រាស់ទៅកាន់ Screen ព័ត៌មានលម្អិត។

### ជំហានទី ៤៖ \`ProductDetailScreen.js\`

* **Fetch Data:** ទទួលបាន \`productId\` ពី \`route.params\` ហើយ Fetch ព័ត៌មានលម្អិតរបស់ Product នោះ។
* **Add to Cart:** ប្រើ \`useContext\` ដើម្បីទទួលបាន \`addToCart\` Function ពី \`CartContext\` ហើយហៅវាពេលចុច Button ។

### ជំហានទី ៥៖ \`CartScreen.js\`

* **Consume Context:** ប្រើ \`useContext\` ដើម្បីទទួលបាន Cart Items ពី \`CartContext\` ។
* **Render Cart:** បង្ហាញបញ្ជី Cart Items ដោយប្រើ \`FlatList\` ។
* **Remove from Cart:** ផ្តល់ Button សម្រាប់លុប Item ចេញពី Cart ។
`,
  examples: [],
  quiz: [
    {
      question: 'តើ `Fake Store API` ប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង Project នេះ?',
      options: [
        'គ្រប់គ្រង Cart',
        'ផ្តល់ទិន្នន័យ Products',
        'គ្រប់គ្រង User Login',
        'រក្សាទុក Local Data'
      ],
      correct: 1,
      explanation: 'Fake Store API ត្រូវបានប្រើដើម្បីក្លែងធ្វើ Server ដែលផ្តល់ទិន្នន័យ Products ។'
    },
    {
      question: 'តើយើងគួរប្រើ Global State Management សម្រាប់អ្វីនៅក្នុង App នេះ?',
      options: [
        'Product List',
        'Product Detail',
        'Cart Items',
        'Navigation State'
      ],
      correct: 2,
      explanation: 'Cart Items គួរតែជា Global State ព្រោះវាត្រូវ Share រវាង Components ជាច្រើន។'
    },
    {
      question: 'តើ `navigation.navigate()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ត្រឡប់ទៅ Screen មុន',
        'ទៅកាន់ Screen ថ្មី',
        'បិទ App',
        'បង្ហាញ Alert'
      ],
      correct: 1,
      explanation: '`navigation.navigate()` ប្រើដើម្បីផ្លាស់ប្តូរ Screen ។'
    },
    {
      question: 'តើយើងបញ្ជូនទិន្នន័យពី Screen មួយទៅ Screen មួយទៀតដោយរបៀបណា?',
      options: [
        'ប្រើ `props`',
        'ប្រើ `route.params`',
        'ប្រើ Global State',
        'ជម្រើស B និង C ទាំងអស់'
      ],
      correct: 3,
      explanation: 'យើងអាចបញ្ជូនទិន្នន័យតាមរយៈ `route.params` សម្រាប់ការបញ្ជូនទិន្នន័យជាក់លាក់ ឬប្រើ Global State សម្រាប់ Share ទិន្នន័យជាទូទៅ។'
    },
    {
      question: 'តើ `FlatList` ក្នុង `ProductListScreen` នឹង Render Component អ្វីខ្លះ?',
      options: [
        '`ProductListScreen`',
        '`CartScreen`',
        '`ProductItem`',
        '`ProductDetailScreen`'
      ],
      correct: 2,
      explanation: '`FlatList` នឹង Render `ProductItem` Component សម្រាប់ Item នីមួយៗ។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ បង្កើត Shopping App Demo**

បង្កើត App មួយដែលមាន Product List និង Cart Screen ។

**តម្រូវការ:**

1.  ដំឡើង React Navigation Libraries ។
2.  បង្កើត \`CartContext.js\` ដែលមាន State \`cart\` និង Functions \`addToCart\` និង \`removeFromCart\` ។
3.  រុំ App ទាំងមូលនៅក្នុង \`CartProvider\` ។
4.  នៅក្នុង \`ProductListScreen.js\` ធ្វើការ Fetch ទិន្នន័យពី \`https://fakestoreapi.com/products\` ហើយបង្ហាញវានៅក្នុង \`FlatList\` ។
5.  នៅក្នុង \`ProductDetailScreen.js\` ទទួល \`productId\` ពី \`route.params\` ហើយ Fetch ព័ត៌មានលម្អិត។
6.  នៅលើ Screen ព័ត៌មានលម្អិត ដាក់ Button "Add to Cart" ដែលហៅ \`addToCart\` Function ។

**ការណែនាំ:** ផ្តោតលើ Logic នៃ Global State Management និង Navigation ។
    `,
    solution: `
\`\`\`javascript
// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react';
import { Alert } from 'react-native';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        Alert.alert('Info', 'Item is already in the cart.');
        return prevCart;
      }
      Alert.alert('Success', 'Item added to cart.');
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
\`\`\`

\`\`\`javascript
// src/screens/ProductListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>'$'{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  itemContainer: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  image: { width: 50, height: 50, marginRight: 10 },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: '#888' },
});

export default ProductListScreen;
\`\`\`

\`\`\`javascript
// src/screens/ProductDetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useCart } from '../contexts/CartContext';

const ProductDetailScreen = () => {
  const route = useRoute();
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(\`https://fakestoreapi.com/products/\${productId}\`);
        const json = await response.json();
        setProduct(json);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!product) {
    return <Text style={styles.errorText}>Product not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>'$'{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button
        title="Add to Cart"
        onPress={() => addToCart(product)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  price: { fontSize: 20, color: '#888', marginBottom: 10 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  errorText: { textAlign: 'center', marginTop: 50 },
});

export default ProductDetailScreen;
\`\`\`
`
  }
};

export default ReactNativeLesson7_2Content;