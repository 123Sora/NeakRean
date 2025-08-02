import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson7_2Content: LessonContent = {
  title: 'E-commerce Product Page',
  objectives: [
    'បង្កើត E-commerce Product Page ដោយប្រើ App Router',
    'ប្រើ Image Optimization ជាមួយ `next/image`',
    'អនុវត្ត Dynamic Routing និង Metadata',
    'បន្ថែម Client-side Interactivity',
  ],
  content: `
# E-commerce Product Page 🛒

---

នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត **E-commerce Product Page** ដែលបង្ហាញ Product List និង Product Detail Page ដោយប្រើ Next.js App Router។

---

## 1. រៀបចំ Project Structure

**File Structure:**
\`\`\`
my-ecommerce-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── [id]/
│   │   │   ├── page.tsx
├── components/
│   ├── ProductCard.tsx
├── styles/
│   ├── globals.css
├── next.config.js
├── package.json
\`\`\`

---

## 2. បង្កើត Root Layout

**Root Layout** កំណត់ Shared UI និង Metadata។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'E-commerce App',
  description: 'E-commerce Website ដែលបង្កើតជាមួយ Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>
        <header className="header">
          <h1>E-commerce App</h1>
          <nav>
            <a href="/">ទំព័រដើម</a> | <a href="/products">ផលិតផល</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2025 E-commerce App</p>
        </footer>
      </body>
    </html>
  );
}
\`\`\`

---

## 3. បង្កើត Product List Page

**Product List Page** Fetch Products ពី API និងបង្ហាញជា Grid។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/products/page.tsx
import ProductCard from '../../components/ProductCard';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 },
  });
  const products = await res.json();
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container">
      <h1>ផលិតផល</h1>
      <div className="product-grid">
        {products.slice(0, 10).map((product: { id: number; title: string; price: number; image: string }) => (
          <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />
        ))}
      </div>
    </div>
  );
}
\`\`\`

**ProductCard Component:**
\`\`\`tsx
// components/ProductCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, title, price, image }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={image} alt={title} width={200} height={200} />
      <h3>{title}</h3>
      <p>\'$\'{price}</p>
      <Link href={\`/products/\'$\'{id}\`}>
        <button className={isHovered ? 'hovered' : ''}>មើលលម្អិត</button>
      </Link>
    </div>
  );
}
\`\`\`

---

## 4. បង្កើត Product Detail Page

**Product Detail Page** Fetch Product តាម ID និងបង្ហាញ Dynamic Metadata។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/products/[id]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(\`https://fakestoreapi.com/products/\${params.id}\`);
  const product = await res.json();

  return {
    title: product.title,
    description: product.description.slice(0, 100),
  };
}

export default async function ProductPage({ params }: Props) {
  const res = await fetch(\`https://fakestoreapi.com/products/\${params.id}\`);
  const product = await res.json();

  return (
    <div className="container">
      <h1>{product.title}</h1>
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <p>{product.description}</p>
      <p className="price">\'$'\{product.price}</p>
    </div>
  );
}
\`\`\`

---

## 5. បង្កើត Loading UI

**Loading UI** បង្ហាញស្ថានភាពផ្ទុកសម្រាប់ Products Page។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/products/loading.tsx
export default function ProductsLoading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុកផលិតផល...</p>
    </div>
  );
}
\`\`\`

---

## 6. បន្ថែម Styling

**Styling** នៅក្នុង \`globals.css\`។

**ឧទាហរណ៍:**
\`\`\`css
/* styles/globals.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

.footer {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
}

.product-card button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.product-card button.hovered {
  background-color: #0056b3;
}

.price {
  font-weight: bold;
  color: #28a745;
}
\`\`\`

---

## 7. កំណត់ next.config.js

**next.config.js** កំណត់ Image Domains។

**ឧទាហរណ៍:**
\`\`\`js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
  },
};

module.exports = nextConfig;
\`\`\`

---

## 8. គន្លឹះសម្រាប់ E-commerce Product Page

- **ប្រើ \`next/image\`:** សម្រាប់ Image Optimization។
- **បន្ថែម Interactivity:** ដោយប្រើ Client Components (\`"use client"\`)។
- **ប្រើ Dynamic Routing:** សម្រាប់ Product Detail Pages។
- **អាន Documentation:** ចូលទៅ [nextjs.org/docs](https://nextjs.org/docs)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Product List Page</h3>
<p>បង្កើត Product List Page នៅក្នុង <code>app/products/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/products/page.tsx
import ProductCard from '../../components/ProductCard';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 },
  });
  const products = await res.json();
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container">
      <h1>ផលិតផល</h1>
      <div className="product-grid">
        {products.slice(0, 10).map((product: { id: number; title: string; price: number; image: string }) => (
          <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />
        ))}
      </div>
    </div>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ProductCard Component</h3>
<p>បង្កើត ProductCard Component នៅក្នុង <code>components/ProductCard.tsx</code>។</p>
<pre><code class="language-tsx">
// components/ProductCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, title, price, image }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={image} alt={title} width={200} height={200} />
      <h3>{title}</h3>
      <p>\'$\'{price}</p>
      <Link href={\`/products/\'$\'{id}\`}>
        <button className={isHovered ? 'hovered' : ''}>មើលលម្អិត</button>
      </Link>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ File ណាមួយកំណត់ Image Domains សម្រាប់ `next/image`?',
      options: [
        'app/layout.tsx',
        'next.config.js',
        '.env.local',
        'package.json'
      ],
      correct: 1,
      explanation: '`next.config.js` កំណត់ Image Domains សម្រាប់ `next/image`។'
    },
    {
      question: 'តើ ProductCard Component ប្រើ Directive អ្វី?',
      options: [
        '"use server"',
        '"use client"',
        '"use effect"',
        '"use state"'
      ],
      correct: 1,
      explanation: '`ProductCard` Component ប្រើ `"use client"` សម្រាប់ Interactivity។'
    },
    {
      question: 'តើ Product Detail Page ប្រើ Feature អ្វីសម្រាប់ Dynamic Routing?',
      options: [
        'Static Routing',
        'Dynamic Routing ជាមួយ [id]',
        'Client-side Routing',
        'Server-side Rendering'
      ],
      correct: 1,
      explanation: 'Product Detail Page ប្រើ Dynamic Routing ជាមួយ `[id]`។'
    },
    {
      question: 'តើ `next/image` មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'Data Fetching',
        'Image Optimization និង Lazy Loading',
        'SEO Optimization',
        'Error Handling'
      ],
      correct: 1,
      explanation: '`next/image` ផ្តល់ Image Optimization និង Lazy Loading។'
    },
    {
      question: 'តើ Loading UI ត្រូវបានកំណត់នៅ File ណា?',
      options: [
        'app/page.tsx',
        'app/layout.tsx',
        'app/products/loading.tsx',
        'components/ProductCard.tsx'
      ],
      correct: 2,
      explanation: '`app/products/loading.tsx` កំណត់ Loading UI។'
    },
    {
      question: 'តើ `generateMetadata` ប្រើសម្រាប់អ្វី?',
      options: [
        'Fetch Data',
        'Dynamic Metadata',
        'Client-side Interactivity',
        'Image Optimization'
      ],
      correct: 1,
      explanation: '`generateMetadata` ប្រើសម្រាប់ Dynamic Metadata។'
    },
    {
      question: 'តើ API ណាមួយត្រូវបានប្រើសម្រាប់ Data Fetching?',
      options: [
        'https://jsonplaceholder.typicode.com',
        'https://fakestoreapi.com',
        'https://my-ecommerce.com',
        'https://vercel.com'
      ],
      correct: 1,
      explanation: 'E-commerce App ប្រើ `https://fakestoreapi.com`។'
    },
    {
      question: 'តើ CSS Class ណាមួយប្រើសម្រាប់ Product List Layout?',
      options: [
        'container',
        'product-grid',
        'header',
        'footer'
      ],
      correct: 1,
      explanation: '`product-grid` Class ប្រើសម្រាប់ Product List Layout។'
    },
    {
      question: 'តើ `useState` ប្រើសម្រាប់អ្វីនៅក្នុង ProductCard?',
      options: [
        'Fetch Data',
        'Manage Hover State',
        'SEO Optimization',
        'Error Handling'
      ],
      correct: 1,
      explanation: '`useState` ប្រើសម្រាប់ Manage Hover State នៅក្នុង ProductCard។'
    },
    {
      question: 'តើ Link Component មកពី Package ណា?',
      options: [
        'next/router',
        'next/link',
        'next/image',
        'react'
      ],
      correct: 1,
      explanation: '`Link` Component មកពី `next/link`។'
    }
  ],
  lab: {
    task: `
បង្កើត E-commerce Product Page ដោយប្រើ Next.js App Router។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-ecommerce-app --typescript\` និងជ្រើសរើស App Router។

2. **បង្កើត Root Layout:**
   - កែ File \`app/layout.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, Metadata (\`title: 'E-commerce App'\`, \`description: 'E-commerce Website ដែលបង្កើតជាមួយ Next.js App Router'\`), Header ជាមួយ Navigation (\`<a href="/">ទំព័រដើម</a> | <a href="/products">ផលិតផល</a>\`), និង Footer។

3. **បង្កើត Home Page:**
   - កែ File \`app/page.tsx\` ដើម្បីបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ E-commerce App!</h1>\` និង \`<p>នេះជាទំព័រដើមនៃហាង។</p>\`។

4. **บง្ផើត Product List Page:**
   - បង្កើត File \`app/products/page.tsx\` ដែល Fetch Products ពី \`https://fakestoreapi.com/products\` (ប្រើ \`next: { revalidate: 60 }\`) និងបង្ហាញ 10 Products ដំបូងជា Grid ដោយប្រើ \`components/ProductCard.tsx\`។

5. **បង្កើត ProductCard Component:**
   - បង្កើត File \`components/ProductCard.tsx\` ដែលប្រើ \`"use client"\`, \`useState\` សម្រាប់ Hover State, \`next/image\` សម្រាប់ Product Image, និង \`next/link\` សម្រាប់ Link ទៅ Product Detail Page។

6. **បង្កើត Product Detail Page:**
   - បង្កើត File \`app/products/[id]/page.tsx\` ដែល Fetch Product ពី \`https://fakestoreapi.com/products/:id\` និងបង្ហាញ Title, Image, Description, និង Price។ បន្ថែម \`generateMetadata\` សម្រាប់ Dynamic Metadata។

7. **បង្កើត Loading UI:**
   - បង្កើត File \`app/products/loading.tsx\` ដើម្បីបង្ហាញ \`<p>កំពុងផ្ទុកផលិតផល...</p>\`។

8. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.container\` Class។
     - Grid Layout សម្រាប់ \`.product-grid\`, Styling សម្រាប់ \`.product-card\`, \`.header\`, \`.footer\`, និង \`.price\`។

9. **កំណត់ next.config.js:**
   - កែ File \`next.config.js\` ដើម្បីបន្ថែម \`images: { domains: ['fakestoreapi.com'] }\`។

10. **Run Project:**
    - Run Command \`npm run dev\` និងសាកល្បង Routes:
      - \`http://localhost:3000\` (Home Page)
      - \`http://localhost:3000/products\` (Product List Page)
      - \`http://localhost:3000/products/1\` (Product Detail Page)
    - ពិនិត្យ Network Tab (F12) ដើម្បីឃើញ Data Fetching និង Loading UI។

**ការណែនាំ:** ពិនិត្យ Page Source (Ctrl+U) ដើម្បីឃើញ Metadata និង Browser Console (F12) សម្រាប់ Errors។
    `,
    solution: `
## styles/globals.css 
\`\`\`text
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

.footer {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
}

.product-card button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.product-card button.hovered {
  background-color: #0056b3;
}

.price {
  font-weight: bold;
  color: #28a745;
}
\`\`\`

## next.config.js 
\`\`\`text
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
  },
};

module.exports = nextConfig;
\`\`\`

## app/layout.tsx 
\`\`\`text
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'E-commerce App',
  description: 'E-commerce Website ដែលបង្កើតជាមួយ Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>
        <header className="header">
          <h1>E-commerce App</h1>
          <nav>
            <a href="/">ទំព័រដើម</a> | <a href="/products">ផលិតផល</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2025 E-commerce App</p>
        </footer>
      </body>
    </html>
  );
}
\`\`\`

## app/page.tsx 
\`\`\`text
export default function Home() {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ E-commerce App!</h1>
      <p>នេះជាទំព័រដើមនៃហាង។</p>
    </div>
  );
}
\`\`\`

## app/products/page.tsx 
\`\`\`text
import ProductCard from '../../components/ProductCard';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 },
  });
  const products = await res.json();
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container">
      <h1>ផលិតផល</h1>
      <div className="product-grid">
        {products.slice(0, 10).map((product: { id: number; title: string; price: number; image: string }) => (
          <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />
        ))}
      </div>
    </div>
  );
}
\`\`\`

## app/products/loading.tsx 
\`\`\`text
export default function ProductsLoading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុកផលិតផល...</p>
    </div>
  );
}
\`\`\`

## app/products/[id]/page.tsx 
\`\`\`text
import type { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(\`https://fakestoreapi.com/products/\${params.id}\`);
  const product = await res.json();

  return {
    title: product.title,
    description: product.description.slice(0, 100),
  };
}

export default async function ProductPage({ params }: Props) {
  const res = await fetch(\`https://fakestoreapi.com/products/\${params.id}\`);
  const product = await res.json();

  return (
    <div className="container">
      <h1>{product.title}</h1>
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <p>{product.description}</p>
      <p className="price">\'$\'{product.price}</p>
    </div>
  );
}
\`\`\`

## components/ProductCard.tsx 
\`\`\`text
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, title, price, image }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={image} alt={title} width={200} height={200} />
      <h3>{title}</h3>
      <p>\'$\'{price}</p>
      <Link href={\`/products/\'$\'{id}\`}>
        <button className={isHovered ? 'hovered' : ''}>មើលលម្អិត</button>
      </Link>
    </div>
  );
}
  \`\`\`
`
  }
};

export default NextLesson7_2Content;