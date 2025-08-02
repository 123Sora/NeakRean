import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson4_2Content: LessonContent = {
  title: 'Authorization',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Authorization',
    'រៀនប្រើ Role-based Authorization ជាមួយ JWT',
    'អនុវត្ត Middleware សម្រាប់គ្រប់គ្រង Authorization',
    'ស្វែងយល់ពី Access Control នៅក្នុង Express',
  ],
  content: `
# Authorization 🔒

---

**Authorization** គឺជាដំណើរការកំណត់សិទ្ធិរបស់អ្នកប្រើប្រាស់ក្នុងការចូលប្រើ Resources ឬធ្វើ Actions។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនប្រើ **Role-based Authorization** ជាមួយ JWT និង Middleware។

---

## 1. គោលគំនិតនៃ Authorization

Authorization ខុសពី Authentication:
- **Authentication:** ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ។
- **Authorization:** កំណត់អ្វីដែលអ្នកប្រើអាចធ្វើបាន។

**ឧទាហរណ៍:** Admin អាចលុប Users, ប៉ុន្តែ User ធម្មតាមិនអាចទេ។

---

## 2. Role-based Authorization ជាមួយ JWT

**JWT** អាចរក្សាទុក Roles (ឧ. admin, user) នៅក្នុង Payload។

**ឧទាហរណ៍:**
\`\`\`javascript
const jwt = require('jsonwebtoken');
const token = jwt.sign({ username: 'sok', role: 'admin' }, 'secretKey', { expiresIn: '1h' });
\`\`\`

---

## 3. Authorization Middleware

Middleware ត្រួតពិនិត្យ Role មុននឹងអនុញ្ញាតឱ្យចូលប្រើ Route។

**ឧទាហរណ៍:**
\`\`\`javascript
const authorize = (role) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });
    jwt.verify(token, 'secretKey', (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Invalid token' });
      if (decoded.role !== role) return res.status(403).json({ error: 'Forbidden' });
      req.user = decoded;
      next();
    });
  };
};

app.get('/admin', authorize('admin'), (req, res) => {
  res.json({ message: 'Admin access granted' });
});
\`\`\`

---

## 4. Access Control

Access Control អាចត្រូវបានអនុវត្តតាម:
- **Roles:** admin, user, guest។
- **Permissions:** read, write, delete។

**ឧទាហរណ៍:**
\`\`\`javascript
const checkPermission = (permission) => {
  return (req, res, next) => {
    const userPermissions = req.user.permissions || [];
    if (!userPermissions.includes(permission)) {
      return res.status(403).json({ error: 'No permission' });
    }
    next();
  };
};
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Authorization

- **ប្រើ Strong Roles:** កំណត់ Roles ឱ្យច្បាស់លាស់។
- **Validate Tokens:** តែងតែផ្ទៀងផ្ទាត់ JWT។
- **Use Middleware:** សម្រាប់ Modular Code។
- **អាន Documentation:** [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Role-based Middleware</h3>
<p>បង្កើត Middleware សម្រាប់ Admin Role។</p>
<pre><code class="language-javascript">
const authorize = (role) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    jwt.verify(token, 'secretKey', (err, decoded) => {
      if (err || decoded.role !== role) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      next();
    });
  };
};

app.get('/admin', authorize('admin'), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Permission-based Authorization</h3>
<p>ត្រួតពិនិត្យ Permission សម្រាប់ Delete Action។</p>
<pre><code class="language-javascript">
const checkPermission = (permission) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    jwt.verify(token, 'secretKey', (err, decoded) => {
      if (err || !decoded.permissions.includes(permission)) {
        return res.status(403).json({ error: 'No permission' });
      }
      next();
    });
  };
};

app.delete('/users/:id', checkPermission('delete'), (req, res) => {
  res.json({ message: 'User deleted' });
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Authorization មានន័យដូចម្តេច?',
      options: ['ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ', 'ការកំណត់សិទ្ធិ', 'ការអ៊ិនគ្រីបទិន្នន័យ', 'ការបម្រើ Files'],
      correct: 1,
      explanation: 'Authorization កំណត់សិទ្ធិរបស់អ្នកប្រើ។'
    },
    {
      question: 'តើ Role-based Authorization ប្រើអ្វី?',
      options: ['Password', 'Roles', 'Tokens', 'Cookies'],
      correct: 1,
      explanation: 'Role-based Authorization ប្រើ Roles (ឧ. admin, user)។'
    },
    {
      question: 'តើ Middleware សម្រាប់ Authorization ធ្វើអ្វី?',
      options: ['បង្កើត Token', 'ត្រួតពិនិត្យសិទ្ធិ', 'Hash Password', 'Serve Files'],
      correct: 1,
      explanation: 'Middleware ត្រួតពិនិត្យសិទ្ធិមុននឹងអនុញ្ញាត។'
    },
    {
      question: 'តើ JWT Payload អាចរក្សាទុកអ្វីបាន?',
      options: ['Hashed Password', 'Roles', 'Static Files', 'SQL Queries'],
      correct: 1,
      explanation: 'JWT Payload អាចរក្សាទុក Roles និង Data ផ្សេងទៀត។'
    },
    {
      question: 'តើ HTTP Status Code 403 មានន័យដូចម្តេច?',
      options: ['Not Found', 'Unauthorized', 'Forbidden', 'Bad Request'],
      correct: 2,
      explanation: '403 Forbidden មានន័យថាគ្មានសិទ្ធិ។'
    },
    {
      question: 'តើ `jwt.verify()` ធ្វើអ្វី?',
      options: ['បង្កើត Token', 'ផ្ទៀងផ្ទាត់ Token', 'Hash Password', 'Parse JSON'],
      correct: 1,
      explanation: '`jwt.verify()` ផ្ទៀងផ្ទាត់ JWT Token។'
    },
    {
      question: 'តើ Role អាចជាអ្វីខ្លះ?',
      options: ['admin, user', 'read, write', 'create, delete', 'public, private'],
      correct: 0,
      explanation: 'Role អាចជា admin, user, guest ជាដើម។'
    },
    {
      question: 'តើ Permission-based Authorization ផ្តោតលើអ្វី?',
      options: ['Username', 'Specific Actions', 'Token Validation', 'Password Hashing'],
      correct: 1,
      explanation: 'Permission-based Authorization ផ្តោតលើ Specific Actions (ឧ. read, write)។'
    },
    {
      question: 'តើ Middleware អាចប្រើបានច្រើនជាងមួយក្នុង Route ដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បាន ប៉ុន្តែតែនៅ Production', 'មិនបាន ព្រោះជា JWT'],
      correct: 0,
      explanation: 'Middleware អាចប្រើបានច្រើនក្នុង Route មួយ។'
    },
    {
      question: 'តើ Access Control ពាក់ព័ន្ធនឹងអ្វី?',
      options: ['Hashing', 'Roles និង Permissions', 'Token Creation', 'Static Files'],
      correct: 1,
      explanation: 'Access Control ពាក់ព័ន្ធនឹង Roles និង Permissions។'
    },
    {
      question: 'តើ Forbidden Error កើតឡើងនៅពេលណា?',
      options: ['Invalid Token', 'No Token', 'No Permission', 'Server Error'],
      correct: 2,
      explanation: 'Forbidden Error កើតឡើងនៅពេលគ្មាន Permission។'
    },
    {
      question: 'តើ `req.user` ត្រូវបានបន្ផែមដោយអ្វី?',
      options: ['bcrypt', 'Middleware', 'express.json()', 'express.static()'],
      correct: 1,
      explanation: 'Middleware បន្ផែម `req.user` បន្ទាប់ពីផ្ទៀងផ្ទាត់ JWT។'
    },
    {
      question: 'តើ Roles គួរត្រូវបានរក្សាទុកនៅឯណា?',
      options: ['Database', 'Cookies', 'Static Files', 'HTML'],
      correct: 0,
      explanation: 'Roles គួរត្រូវបានរក្សាទុកនៅ Database ឬ JWT Payload។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application សម្រាប់ Role-based Authorization។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-authz\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependencies: \`npm install express jsonwebtoken\`។

2. **បង្កើត Routes:**
   - បង្កើត File: \`app.js\`។
   - បន្ផែម \`express.json()\` Middleware។
   - Route \`/login\` (POST): ផ្តល់ JWT Token ជាមួយ Role (admin ឬ user)។
   - Route \`/admin\` (GET): អនុញ្ញាតតែ Admin Role។
   - Route \`/user\` (GET): អនុញ្ញាតតែ User ឬ Admin Role។
   - Route \`/public\` (GET): អនុញ្ញាតគ្រប់គ្នា។
   - ប្រើ Middleware \`authorize(role)\`។

3. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - POST \`/login\` ជាមួយ Body \`{ "username": "sok", "role": "admin" }\`
     - GET \`/admin\` ជាមួយ Header \`Authorization: Bearer [token]\`
     - GET \`/user\` ជាមួយ Token ផ្សេងៗ
     - GET \`/public\`

**ការណែនាំ:** ប្រើ Secret Key ដែលសុវត្ថិភាព។
    `,
    solution: `
\`\`\`text
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const authorize = (role) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });
    jwt.verify(token, 'secretKey', (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Invalid token' });
      if (role && decoded.role !== role && decoded.role !== 'admin') {
        return res.status(403).json({ error: 'Forbidden' });
      }
      req.user = decoded;
      next();
    });
  };
};

app.post('/login', (req, res) => {
  try {
    const { username, role } = req.body;
    const token = jwt.sign({ username, role }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/admin', authorize('admin'), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

app.get('/user', authorize('user'), (req, res) => {
  res.json({ message: \`Welcome, \'$\'{req.user.role}!\` });
});

app.get('/public', (req, res) => {
  res.json({ message: 'Public access' });
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`
`
  }
};

export default ExpressLesson4_2Content;