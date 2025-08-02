import type { LessonContent } from '../../../../types/LessonTypes';


const NextLesson7_3Content: LessonContent = {
  title: 'Authentication Dashboard',
  objectives: [
    'បង្កើត Authentication Dashboard ដោយប្រើ App Router',
    'អនុវត្ត Authentication ជាមួយ NextAuth.js',
    'គ្រប់គ្រង Protected Routes',
    'បន្ថែម Error Handling និង Loading UI',
  ],
  content: `
# Authentication Dashboard 🔒

---

នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត **Authentication Dashboard** ដែលប្រើ **NextAuth.js** សម្រាប់ Authentication និង App Router សម្រាប់ Protected Routes។

---

## 1. រៀបចំ Project Structure

**File Structure:**
\`\`\`
my-auth-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   ├── api/auth/[...nextauth]/
│   │   ├── route.ts
├── components/
│   ├── AuthButton.tsx
├── styles/
│   ├── globals.css
├── .env.local
├── package.json
├── next.config.js
\`\`\`

---

## 2. ដំឡើង NextAuth.js

**ដំឡើង Dependency:**
\`\`\`bash
npm install next-auth
\`\`\`

**កំណត់ Environment Variable:**
\`\`\`env
# .env.local
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
\`\`\`

**កំណត់ API Route:**
\`\`\`ts
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
\`\`\`

**កំណត់ Google OAuth:** ចុះឈ្មោះនៅ [Google Cloud Console](https://console.cloud.google.com) ដើម្បីទទួល \`GOOGLE_CLIENT_ID\` និង \`GOOGLE_CLIENT_SECRET\`។

---

## 3. បង្កើត Root Layout

**Root Layout** កំណត់ Shared UI និង Metadata។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import AuthButton from '../components/AuthButton';

export const metadata: Metadata = {
  title: 'Authentication Dashboard',
  description: 'Dashboard ដែលបង្កើតជាមួយ Next.js App Router និង NextAuth.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>
        <header className="header">
          <h1>Authentication Dashboard</h1>
          <nav>
            <a href="/">ទំព័រដើម</a> | <a href="/dashboard">Dashboard</a>
            <AuthButton />
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2025 Authentication Dashboard</p>
        </footer>
      </body>
    </html>
  );
}
\`\`\`

---

## 4. បង្កើត AuthButton Component

**AuthButton** គ្រប់គ្រង Sign In/Sign Out។

**ឧទាហរណ៍:**
\`\`\`tsx
// components/AuthButton.tsx
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button className="auth-button" onClick={() => signOut()}>
        ចាកចេញ
      </button>
    );
  }

  return (
    <button className="auth-button" onClick={() => signIn('google')}>
        ចូលប្រើ
      </button>
    );
}
\`\`\`

---

## 5. បង្កើត Dashboard Page

**Dashboard Page** ជា Protected Route ដែលតម្រូវឱ្យ Sign In។

**ឧទាហរណ៍:**
\`\`\`tsx
// app/dashboard/page.tsx
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>សូមស្វាគមន៍, {session.user?.name}!</p>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
\`\`\`

---

## 6. បង្កើត Loading UI និង Error Handling

**Loading UI:**
\`\`\`tsx
// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុក Dashboard...</p>
    </div>
  );
}
\`\`\`

**Error Handling:**
\`\`\`tsx
// app/dashboard/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container">
      <h1>មានបញ្ហា!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>សាកល្បងម្តងទៀត</button>
    </div>
  );
}
\`\`\`

---

## 7. បន្ថែម Styling

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

.auth-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

.auth-button:hover {
  background-color: #0056b3;
}
\`\`\`

---

## 8. គន្លឹះសម្រាប់ Authentication Dashboard

- **ប្រើ NextAuth.js:** សម្រាប់ Authentication ងាយស្រួល។
- **គ្រប់គ្រង Protected Routes:** ដោយប្រើ \`getServerSession\`។
- **បន្ថែម Error Handling:** ដើម្បីបង្កើន Reliability។
- **អាន Documentation:** ចូលទៅ [next-auth.js.org](https://next-auth.js.org) និង [nextjs.org/docs](https://nextjs.org/docs)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ AuthButton Component</h3>
<p>បង្កើត AuthButton Component នៅក្នុង <code>components/AuthButton.tsx</code>។</p>
<pre><code class="language-tsx">
// components/AuthButton.tsx
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button className="auth-button" onClick={() => signOut()}>
        ចាកចេញ
      </button>
    );
  }

  return (
    <button className="auth-button" onClick={() => signIn('google')}>
        ចូលប្រើ
      </button>
    );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Dashboard Page</h3>
<p>បង្កើត Protected Dashboard Page នៅក្នុង <code>app/dashboard/page.tsx</code>។</p>
<pre><code class="language-tsx">
// app/dashboard/page.tsx
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>សូមស្វាគមន៍, {session.user?.name}!</p>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Package ណាមួយប្រើសម្រាប់ Authentication?',
      options: [
        'next/image',
        'next-auth',
        'next/router',
        'react'
      ],
      correct: 1,
      explanation: '`next-auth` ប្រើសម្រាប់ Authentication។'
    },
    {
      question: 'តើ File ណាមួយកំណត់ API Route សម្រាប់ NextAuth.js?',
      options: [
        'app/layout.tsx',
        'app/api/auth/[...nextauth]/route.ts',
        'app/dashboard/page.tsx',
        'components/AuthButton.tsx'
      ],
      correct: 1,
      explanation: '`app/api/auth/[...nextauth]/route.ts` កំណត់ API Route សម្រាប់ NextAuth.js។'
    },
    {
      question: 'តើ Function ណាមួយប្រើសម្រាប់ Protected Routes?',
      options: [
        'useSession',
        'getServerSession',
        'signIn',
        'signOut'
      ],
      correct: 1,
      explanation: '`getServerSession` ប្រើសម្រាប់ Protected Routes។'
    },
    {
      question: 'តើ `useSession` Hook ប្រើនៅក្នុង Component ប្រភេទណា?',
      options: [
        'Server Component',
        'Client Component',
        'Static Component',
        'Dynamic Component'
      ],
      correct: 1,
      explanation: '`useSession` Hook ប្រើនៅក្នុង Client Component។'
    },
    {
      question: 'តើ Environment Variable ណាមួយតម្រូវសម្រាប់ NextAuth.js?',
      options: [
        'NEXT_PUBLIC_API_URL',
        'NEXTAUTH_SECRET',
        'GOOGLE_API_KEY',
        'NEXTAUTH_URL_LOCAL'
      ],
      correct: 1,
      explanation: '`NEXTAUTH_SECRET` តម្រូវសម្រាប់ NextAuth.js។'
    },
    {
      question: 'តើ `redirect` Function មកពី Package ណា?',
      options: [
        'next/router',
        'next/navigation',
        'next/image',
        'react'
      ],
      correct: 1,
      explanation: '`redirect` Function មកពី `next/navigation`។'
    },
    {
      question: 'តើ Loading UI ត្រូវបានកំណត់នៅ File ណា?',
      options: [
        'app/page.tsx',
        'app/layout.tsx',
        'app/dashboard/loading.tsx',
        'components/AuthButton.tsx'
      ],
      correct: 2,
      explanation: '`app/dashboard/loading.tsx` កំណត់ Loading UI។'
    },
    {
      question: 'តើ `error.tsx` តម្រូវឱ្យប្រើ Directive អ្វី?',
      options: [
        '"use server"',
        '"use client"',
        '"use effect"',
        '"use state"'
      ],
      correct: 1,
      explanation: '`error.tsx` តម្រូវឱ្យប្រើ `"use client"`។'
    },
    {
      question: 'តើ Google OAuth Credentials ទទួលបានពីណា?',
      options: [
        'Vercel Dashboard',
        'Google Cloud Console',
        'Next.js Documentation',
        'npm Registry'
      ],
      correct: 1,
      explanation: 'Google OAuth Credentials ទទួលបានពី Google Cloud Console។'
    },
    {
      question: 'តើ AuthButton Component ប្រើ Hook អ្វី?',
      options: [
        'useEffect',
        'useState',
        'useSession',
        'useRouter'
      ],
      correct: 2,
      explanation: '`AuthButton` Component ប្រើ `useSession` Hook។'
    }
  ],
  lab: {
    task: `
បង្កើត Authentication Dashboard ដោយប្រើ Next.js App Router និង NextAuth.js។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - ប្រើ Command \`npx create-next-app@latest my-auth-app --typescript\` និងជ្រើសរើស App Router។
   - ដំឡើង \`next-auth\` ដោយ \`npm install next-auth\`។

2. **កំណត់ Environment Variables:**
   - បង្កើត File \`.env.local\` ជាមួយ \`NEXTAUTH_URL=http://localhost:3000\` និង \`NEXTAUTH_SECRET=your-secret-key-here\`។
   - បន្ថែម \`GOOGLE_CLIENT_ID\` និង \`GOOGLE_CLIENT_SECRET\` ពី [Google Cloud Console](https://console.cloud.google.com)។

3. **បង្កើត NextAuth.js Route:**
   - បង្កើត File \`app/api/auth/[...nextauth]/route.ts\` ដើម្បីកំណត់ Google Provider។

4. **បង្កើត Root Layout:**
   - កែ File \`app/layout.tsx\` ដើម្បីកំណត់ \`<html lang="km">\`, Metadata (\`title: 'Authentication Dashboard'\`, \`description: 'Dashboard ដែលបង្កើតជាមួយ Next.js App Router និង NextAuth.js'\`), Header ជាមួយ Navigation (\`<a href="/">ទំព័រដើម</a> | <a href="/dashboard">Dashboard</a>\`), និង \`<AuthButton />\` Component។

5. **បង្កើត Home Page:**
   - កែ File \`app/page.tsx\` ដើម្បីបង្ហាញ \`<h1>សូមស្វាគមន៍មកកាន់ Authentication Dashboard!</h1>\` និង \`<p>នេះជាទំព័រដើម។</p>\`។

6. **បង្កើត AuthButton Component:**
   - បង្កើត File \`components/AuthButton.tsx\` ដែលប្រើ \`"use client"\`, \`useSession\`, \`signIn\`, និង \`signOut\` សម្រាប់ Sign In/Sign Out�।

7. **បង្កើត Dashboard Page:**
   - បង្កើត File \`app/dashboard/page.tsx\` ដែលប្រើ \`getServerSession\` ដើម្បីធ្វើ Protected Route និងបង្ហាញ User Name និង Email។

8. **បង្កើត Loading UI និង Error Handling:**
   - បង្កើត File \`app/dashboard/loading.tsx\` ដើម្បីបង្ហាញ \`<p>កំពុងផ្ទុក Dashboard...</p>\`។
   - បង្កើត File \`app/dashboard/error.tsx\` ដែលប្រើ \`"use client"\` និងបង្ហាញ Error Message និង Retry Button។

9. **បន្ថែម Styling:**
   - កែ File \`styles/globals.css\` ដើម្បីកំណត់:
     - \`font-family: Arial, sans-serif;\` និង \`margin: 0;\` សម្រាប់ \`body\`។
     - \`max-width: 1200px;\`, \`margin: 0 auto;\`, \`padding: 20px;\` សម្រាប់ \`.container\` Class។
     - Styling សម្រាប់ \`.header\`, \`.footer\`, និង \`.auth-button\`។

10. **Run Project:**
    - Run Command \`npm run dev\` និងសាកល្បង Routes:
      - \`http://localhost:3000\` (Home Page)
      - \`http://localhost:3000/dashboard\` (Dashboard Page, តម្រូវឱ្យ Sign In)
    - សាកល្បង Sign In/Sign Out ជាមួយ Google។
    - ពិនិត្យ Browser Console (F12) សម្រាប់ Errors។

**ការណែនាំ:** ត្រូវប្រាកដថា Google OAuth Credentials ត្រឹមត្រូវ។
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

.auth-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

.auth-button:hover {
  background-color: #0056b3;
}
\`\`\`

## .env.local 
\`\`\`text
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
\`\`\`

## app/api/auth/[...nextauth]/route.ts 
\`\`\`text
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
\`\`\`

## app/layout.tsx 
\`\`\`text
import type { Metadata } from 'next';
import './globals.css';
import AuthButton from '../components/AuthButton';

export const metadata: Metadata = {
  title: 'Authentication Dashboard',
  description: 'Dashboard ដែលបង្កើតជាមួយ Next.js App Router និង NextAuth.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body>
        <header className="header">
          <h1>Authentication Dashboard</h1>
          <nav>
            <a href="/">ទំព័រដើម</a> | <a href="/dashboard">Dashboard</a>
            <AuthButton />
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2025 Authentication Dashboard</p>
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
      <h1>សូមស្វាគមន៍មកកាន់ Authentication Dashboard!</h1>
      <p>នេះជាទំព័រដើម។</p>
    </div>
  );
}
\`\`\`
## app/dashboard/page.tsx 
\`\`\`text
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>សូមស្វាគមន៍, {session.user?.name}!</p>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
\`\`\`

## app/dashboard/loading.tsx 
\`\`\`text
export default function DashboardLoading() {
  return (
    <div className="container">
      <p>កំពុងផ្ទុក Dashboard...</p>
    </div>
  );
}
\`\`\`

## app/dashboard/error.tsx 
\`\`\`text
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container">
      <h1>មានបញ្ហា!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>សាកល្បងម្តងទៀត</button>
    </div>
  );
}
\`\`\`

## components/AuthButton.tsx 
\`\`\`text
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button className="auth-button" onClick={() => signOut()}>
        ចាកចេញ
      </button>
    );
  }

  return (
    <button className="auth-button" onClick={() => signIn('google')}>
        ចូលប្រើ
      </button>
    );
}
    \`\`\`
`
  }
};

export default NextLesson7_3Content;