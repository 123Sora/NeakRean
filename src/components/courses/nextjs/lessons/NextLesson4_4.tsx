import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson4_4Content: LessonContent = {
  title: 'Authentication',
  objectives: [
    'យល់ដឹងពី Authentication នៅក្នុង Next.js',
    'ប្រើ `next-auth` សម្រាប់ Authentication',
    'អនុវត្ត Email/Password Authentication',
    'គ្រប់គ្រង Protected Routes និង User Sessions',
  ],
  content: `
# Authentication 🔐

---

**Authentication** នៅក្នុង Next.js អនុញ្ញាតឱ្យអ្នកបង្កើតប្រព័ន្ធចូលប្រើប្រាស់ (Login) និងគ្រប់គ្រង User Sessions។ យើងនឹងប្រើ **NextAuth.js** (\`next-auth\`) ដែលជា Library ពេញនិយមសម្រាប់ Authentication។

---

## 1. អ្វីទៅជា NextAuth.js?

**NextAuth.js** គឺជា Authentication Library ដែលគាំទ្រ:
- **Credentials Provider:** Email/Password Authentication។
- **OAuth Providers:** Google, Facebook, etc.
- **Session Management:** គ្រប់គ្រង User Sessions។
- **API Routes:** បង្ផើត Authentication Endpoints។

---

## 2. ការដំឡើង NextAuth.js

**ការដំឡើង:**
\`\`\`bash
npm install next-auth
\`\`\`

**កំណត់ API Route:**
\`\`\`ts
// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // ឧទាហរណ៍: ពិនិត្យ Credentials (អាចភ្ជាប់ជាមួយ Database)
        if (credentials?.email === 'user@example.com' && credentials?.password === 'password') {
          return { id: '1', name: 'Test User', email: 'user@example.com' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
});
\`\`\`

---

## 3. បង្ផើត Sign-In Page

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/auth/signin.tsx
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignIn: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, callbackUrl: '/' });
  };

  return (
    <div className="container">
      <h1>ចូលប្រើប្រាស់</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">ចូលប្រើ</button>
      </form>
    </div>
  );
};

export default SignIn;
\`\`\`

---

## 4. គ្រប់គ្រង Protected Routes

**ឧទាហរណ៍:**
\`\`\`tsx
// pages/protected.tsx
import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Protected: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>កំពុងផ្ទុក...</p>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container">
      <h1>ទំព័រការពារ</h1>
      <p>សូមស្វាគមន៍, {session.user?.name}</p>
      <button onClick={() => signOut({ callbackUrl: '/' })}>ចាកចេញ</button>
    </div>
  );
};

export default Protected;
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Authentication

- **ប្រើ Credentials Provider:** សម្រាប់ Email/Password Authentication។
- **បន្ថែម OAuth Providers:** ដើម្បីគាំទ្រ Google, Facebook, etc.
- **គ្រប់គ្រង Sessions:** ប្រើ \`useSession\` Hook សម្រាប់ Client-side Authentication។
- **អាន Documentation:** ចូលទៅ [next-auth.js.org](https://next-auth.js.org)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Sign-In Page</h3>
<p>បង្ផើត Sign-In Form នៅក្នុង <code>pages/auth/signin.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/auth/signin.tsx
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignIn: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, callbackUrl: '/' });
  };

  return (
    <div className="container">
      <h1>ចូលប្រើប្រាស់</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">ចូលប្រើ</button>
      </form>
    </div>
  );
};

export default SignIn;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Protected Route</h3>
<p>បង្ផើត Protected Page នៅក្នុង <code>pages/protected.tsx</code>។</p>
<pre><code class="language-tsx">
// pages/protected.tsx
import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Protected: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>កំពុងផ្ទុក...</p>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container">
      <h1>ទំព័រការពារ</h1>
      <p>សូមស្វាគមន៍, {session.user?.name}</p>
      <button onClick={() => signOut({ callbackUrl: '/' })}>ចាកចេញ</button>
    </div>
  );
};

export default Protected;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Library ណាមួយប្រើសម្រាប់ Authentication នៅក្នុង Next.js?',
      options: [
        'next/router',
        'next-auth',
        'next/image',
        'next/font'
      ],
      correct: 1,
      explanation: '`next-auth` ជា Library សម្រាប់ Authentication នៅក្នុង Next.js។'
    },
    {
      question: 'តើ Credentials Provider គាំទ្រការអនុវត្តអ្វី?',
      options: [
        'OAuth Authentication',
        'Email/Password Authentication',
        'Dynamic Routing',
        'Image Optimization'
      ],
      correct: 1,
      explanation: 'Credentials Provider គាំទ្រការអនុវត្ត Email/Password Authentication។'
    },
    {
      question: 'តើ File ណាមួយប្រើសម្រាប់កំណត់ Authentication API Route?',
      options: [
        'pages/api/auth/[...nextauth].ts',
        'pages/_app.tsx',
        'pages/_document.tsx',
        'next.config.js'
      ],
      correct: 0,
      explanation: '`pages/api/auth/[...nextauth].ts` ប្រើសម្រាប់កំណត់ Authentication API Route។'
    },
    {
      question: 'តើ Hook ណាមួយប្រើសម្រាប់គ្រប់គ្រង User Sessions នៅ Client-side?',
      options: [
        'useRouter',
        'useSession',
        'useEffect',
        'useState'
      ],
      correct: 1,
      explanation: '`useSession` Hook ប្រើសម្រាប់គ្រប់គ្រង User Sessions នៅ Client-side។'
    },
    {
      question: 'តើ Function ណាមួយប្រើសម្រាប់ Sign In នៅក្នុង `next-auth`?',
      options: [
        'signOut',
        'signIn',
        'getSession',
        'useSession'
      ],
      correct: 1,
      explanation: '`signIn` Function ប្រើសម្រាប់ Sign In នៅក្នុង `next-auth`។'
    },
    {
      question: 'តើអ្នកអាចបន្ថែម OAuth Providers ដូចជា Google បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: '`next-auth` គាំទ្រការបន្ថែម OAuth Providers ដូចជា Google។'
    },
    {
      question: 'តើ `pages` Option នៅក្នុង `NextAuth` មានតួនាទីអ្វី?',
      options: [
        'កំណត់ Custom Sign-In Page',
        'កំណត់ Global CSS',
        'កំណត់ Dynamic Routes',
        'កំណត់ Image Domains'
      ],
      correct: 0,
      explanation: '`pages` Option កំណត់ Custom Sign-In Page ដូចជា `/auth/signin`។'
    },
    {
      question: 'តើ `authorize` Function នៅក្នុង Credentials Provider មានតួនាទីអ្វី?',
      options: [
        'បង្ផើត API Routes',
        'ពិនិត្យ Credentials',
        'Optimize Images',
        'Preload Fonts'
      ],
      correct: 1,
      explanation: '`authorize` Function ពិនិត្យ Credentials ដើម្បីផ្ទៀងផ្ទាត់អ្នកប្រើ។'
    },
    {
      question: 'តើអ្នកអាចគ្រប់គ្រង Protected Routes ដោយរបៀបណា?',
      options: [
        'ប្រើ `useSession` និង `useRouter`',
        'ប្រើ `next/head`',
        'ប្រើ `next/image`',
        'ប្រើ `getStaticProps`'
      ],
      correct: 0,
      explanation: '`useSession` និង `useRouter` ប្រើសម្រាប់គ្រប់គ្រង Protected Routes។'
    },
    {
      question: 'តើ `signOut` Function មានតួនាទីអ្វី?',
      options: [
        'ចូលប្រើប្រាស់',
        'ចាកចេញពី Session',
        'បង្ផើត API Route',
        'Optimize Images'
      ],
      correct: 1,
      explanation: '`signOut` Function ប្រើសម្រាប់ចាកចេញពី User Session។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `next-auth` ជាមួយ Database បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/head`',
        'បាន, ប៉ុន្តែត្រូវប្រើ `next/image`'
      ],
      correct: 0,
      explanation: '`next-auth` អាចភ្ជាប់ជាមួយ Database សម្រាប់ Credential Verification។'
    },
    {
      question: 'តើ Status ណាមួយបង្ហាញថាអ្នកប្រើមិនទាន់ Sign In?',
      options: [
        'loading',
        'authenticated',
        'unauthenticated',
        'error'
      ],
      correct: 2,
      explanation: 'Status `unauthenticated` បង្ហាញថាអ្នកប្រើមិនទាន់ Sign In។'
    },
    {
      question: 'តើ `callbackUrl` នៅក្នុង `signIn` Function មានតួនាទីអ្វី?',
      options: [
        'កំណត់ Redirect URL បន្ទាប់ពី Sign In',
        'កំណត់ Global CSS',
        'កំណត់ API Route',
        'កំណត់ Image Domain'
      ],
      correct: 0,
      explanation: '`callbackUrl` កំណត់ Redirect URL បន្ទាប់ពី Sign In។'
    }
  ],
  lab: {
    task: `
បង្ផើត Next.js Project ដែលប្រើ \`next-auth\` សម្រាប់ Authentication។

**តម្រូវការ:**

1. **បង្ផើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-auth-app\` និងជ្រើសរើស TypeScript។
   - ដំឡើង \`next-auth\` ដោយ Command \`npm install next-auth\`។

2. **កំណត់ Authentication API Route:**
   - បង្ផើត File \`pages/api/auth/[...nextauth].ts\` ដើម្បីកំណត់ Credentials Provider ដែលអនុញ្ញាត Email \`user@example.com\` និង Password \`password\`។
   - កំណត់ Custom Sign-In Page ទៅ \`/auth/signin\`។

3. **បង្ផើត Sign-In Page:**
   - បង្ផើត File \`pages/auth/signin.tsx\` ដែលបង្ហាញ Form ជាមួយ \`<input>\` សម្រាប់ Email និង Password, និង \`<button>\` សម្រាប់ Submit។
   - ប្រើ \`signIn\` Function ដើម្បីដំណើរការ Authentication និង Redirect ទៅ \`/\`។

4. **បង្ផើត Protected Page:**
   - បង្ផើត File \`pages/protected.tsx\` ដែលបង្ហាញ \`<h1>ទំព័រការពារ</h1>\`, \`<p>សូមស្វាគមន៍, {user.name}</p>\`, និង \`<button>\` សម្រាប់ Sign Out។
   - ប្រើ \`useSession\` និង \`useRouter\` ដើម្បី Redirect ទៅ \`/auth/signin\` ប្រសិនបើអ្នកប្រើមិនទាន់ Sign In។

5. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`text-align: center;\` និង \`padding: 20px;\` សម្រាប់ \`.container\` Class។
     - Styling សម្រាប់ \`<form>\`, \`<input>\`, និង \`<button>\` ដើម្បីឱ្យមានរូបរាងស្អាត។

6. **Run Project:**
   - Run Command \`npm run dev\` និងសាកល្បង Routes:
     - \`http://localhost:3000/auth/signin\` (Sign-In Page)
     - \`http://localhost:3000/protected\` (Protected Page)
   - សាកល្បង Sign In ជាមួយ Email \`user@example.com\` និង Password \`password\`។

**ការណែនាំ:** ពិនិត្យ Browser Console (F12) ឬ Terminal សម្រាប់ Error Messages។
    `,
    solution: `
## styles/globals.css 
\`\`\`text
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  text-align: center;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

input {
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
\`\`\`

## pages/api/auth/[...nextauth].ts 
\`\`\`text
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.email === 'user@example.com' && credentials?.password === 'password') {
          return { id: '1', name: 'Test User', email: 'user@example.com' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
});
\`\`\`

## pages/auth/signin.tsx 
\`\`\`text
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignIn: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, callbackUrl: '/' });
  };

  return (
    <div className="container">
      <h1>ចូលប្រើប្រាស់</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">ចូលប្រើ</button>
      </form>
    </div>
  );
};

export default SignIn;
\`\`\`

## pages/protected.tsx 
\`\`\`text
import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Protected: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>កំពុងផ្ទុក...</p>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container">
      <h1>ទំព័រការពារ</h1>
      <p>សូមស្វាគមន៍, {session.user?.name}</p>
      <button onClick={() => signOut({ callbackUrl: '/' })}>ចាកចេញ</button>
    </div>
  );
};

export default Protected;
\`\`\`

## pages/index.tsx 
\`\`\`text
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>សូមស្វាគមន៍មកកាន់ Next.js!</h1>
      <p>ចូលទៅកាន់ <a href="/protected">ទំព័រការពារ</a> ដើម្បីសាកល្បង Authentication។</p>
    </div>
  );
};

export default Home;
\`\`\`
`
  }
};

export default NextLesson4_4Content;