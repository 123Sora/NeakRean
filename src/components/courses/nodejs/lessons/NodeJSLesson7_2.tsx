import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson7_2Content: LessonContent = {
  title: 'ការបង្កើត Full-stack Application',
  objectives: [
    'យល់ដឹងអំពី Full-stack Development',
    'ស្វែងយល់ពីការបង្កើត Backend ជាមួយ Express.js និង MongoDB',
    'រៀនបង្កើត Frontend ជាមួយ React',
    'អនុវត្ត Real-time Features ជាមួយ Socket.io',
    'ភ្ជាប់ Frontend និង Backend ដោយប្រើ API Calls'
  ],
  content: `
# ការបង្កើត Full-stack Application 🚀

---

## 1. តើ Full-stack Application ជាអ្វី? 🤔

* **និយមន័យ:** Application ដែលរួមបញ្ចូល Backend (Server, Database) និង Frontend (User Interface)។
* **ឧទាហរណ៍:** Real-time Chat App ជាមួយ React Frontend និង Express.js Backend។
* **អត្ថប្រយោជន៍:** ផ្តល់ User Experience ពេញលេញ និង Scalable។

---

## 2. Backend ជាមួយ Express.js និង MongoDB 🛠️

* **Dependencies:** \`express\`, \`mongoose\`, \`socket.io\`, \`dotenv\`។
* **Structure:** API Routes, Socket.io Events, MongoDB Models។
* **Installation:**
  \`\`\`bash
  npm install express mongoose socket.io dotenv
  \`\`\`

---

## 3. Frontend ជាមួយ React 🌟

* **React:** JavaScript Library សម្រាប់បង្កើត User Interface។
* **Setup:** ប្រើ CDN ឬ Create React App។
* **Features:** Components, State Management, API Integration។

---

## 4. Real-time Features ជាមួយ Socket.io ⚙️

* **Socket.io:** បន្ថែម Real-time Communication ទៅ Full-stack App។
* **Events:** \`message\`, \`load messages\`, \`connect\`។

---

## 5. ការភ្ជាប់ Frontend និង Backend 📂

* **API Calls:** ប្រើ \`fetch\` ឬ \`axios\` សម្រាប់ HTTP Requests។
* **Socket.io Client:** ភ្ជាប់ Frontend ទៅ Socket.io Server។

---
> **គន្លឹះ:** ប្រើ Environment Variables សម្រាប់ API URLs និង Validate Data នៅ Backend ដើម្បីការពារសុវត្ថិភាព។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Full-stack Chat Application

បង្កើត Folder \`fullstack-app\`:
\`\`\`bash
mkdir fullstack-app
cd fullstack-app
npm init -y
npm install express mongoose socket.io dotenv
\`\`\`

បង្កើត File \`.env\`:
\`\`\`
MONGODB_URI=mongodb://localhost/chatapp
\`\`\`

បង្កើត File \`server.js\` (Backend):
\`\`\`javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const messageSchema = new mongoose.Schema({
  content: String,
  timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

app.use(express.static('public'));

app.get('/api/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

io.on('connection', (socket) => {
  Message.find().then(messages => {
    socket.emit('load messages', messages);
  });

  socket.on('message', async (msg) => {
    const message = await Message.create({ content: msg });
    io.emit('message', message);
  });
});

server.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

បង្កើត Folder \`public\` និង File \`public/index.html\` (Frontend):
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Chat App</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script src="/socket.io/socket.io.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const App = () => {
      const [messages, setMessages] = React.useState([]);
      const [input, setInput] = React.useState('');
      const socket = io();

      React.useEffect(() => {
        fetch('/api/messages')
          .then(res => res.json())
          .then(data => setMessages(data));

        socket.on('load messages', (msgs) => {
          setMessages(msgs);
        });

        socket.on('message', (msg) => {
          setMessages(prev => [...prev, msg]);
        });

        return () => socket.disconnect();
      }, []);

      const sendMessage = () => {
        if (input) {
          socket.emit('message', input);
          setInput('');
        }
      };

      return (
        <div className="max-w-md mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Chat App</h1>
          <ul className="mb-4">
            {messages.map((msg, index) => (
              <li key={index} className="border-b py-2">
                {msg.content} ({new Date(msg.timestamp).toLocaleTimeString()})
              </li>
            ))}
          </ul>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border p-2 mr-2"
            />
            <button onClick={sendMessage} className="bg-blue-500 text-white p-2">
              Send
            </button>
          </div>
        </div>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
\`\`\`

ដំណើរការ File (តម្រូវឱ្យ MongoDB Server ដំណើរការ):
\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* ៖ \`http://localhost:3000/\` (បើកនៅ Browser ពីរ Tab)
* ផ្ញើ Message ពី Tab មួយ → បង្ហាញនៅ Tab ទាំងពីរ
* Messages ត្រូវបានរក្សាទុកនៅ MongoDB
`
  ],
  quiz: [
    {
      question: 'តើ Full-stack Application មានអ្វីខ្លះ?',
      options: [
        'Backend និង Database តែប៉ុណ្ណោះ',
        'Frontend និង Backend',
        'Frontend តែប៉ុណ្ណោះ',
        'Database តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'Full-stack Application រួមបញ្ចូល Frontend និង Backend។'
    },
    {
      question: 'តើ React ប្រើសម្រាប់អ្វី?',
      options: [
        'Database Connection',
        'Building User Interface',
        'API Testing',
        'Logging'
      ],
      correct: 1,
      explanation: 'React ប្រើសម្រាប់បង្កើត User Interface។'
    },
    {
      question: 'តើ Socket.io នៅក្នុង Full-stack App ធ្វើអ្វី?',
      options: [
        'Real-time Communication',
        'Password Hashing',
        'Database Queries',
        'Static File Serving'
      ],
      correct: 0,
      explanation: 'Socket.io ប្រើសម្រាប់ Real-time Communication។'
    },
    {
      question: 'តើ `fetch` ប្រើសម្រាប់អ្វីនៅក្នុង Frontend?',
      options: [
        'Create Database',
        'Make API Calls',
        'Validate Tokens',
        'Log Errors'
      ],
      correct: 1,
      explanation: '`fetch` ប្រើសម្រាប់ Make API Calls ទៅ Backend។'
    },
    {
      question: 'តើ Component នៅក្នុង React ជាអ្វី?',
      options: [
        'Database Model',
        'Reusable UI Element',
        'HTTP Route',
        'Middleware'
      ],
      correct: 1,
      explanation: 'Component ជា Reusable UI Element នៅក្នុង React។'
    },
    {
      question: 'តើ MongoDB នៅក្នុង Full-stack App ប្រើសម្រាប់អ្វី?',
      options: [
        'Store Data',
        'Serve Static Files',
        'Validate Inputs',
        'Generate Tokens'
      ],
      correct: 0,
      explanation: 'MongoDB ប្រើសម្រាប់ Store Data។'
    },
    {
      question: 'តើ `useEffect` នៅក្នុង React ធ្វើអ្វី?',
      options: [
        'Manage State',
        'Handle Side Effects',
        'Create Routes',
        'Log Errors'
      ],
      correct: 1,
      explanation: '`useEffect` ប្រើសម្រាប់ Handle Side Effects ដូចជា API Calls។'
    },
    {
      question: 'តើ Socket.io Client ភ្ជាប់ទៅ Server ដោយរបៀបណា?',
      options: [
        'HTTP Requests',
        'WebSocket Connection',
        'Database Queries',
        'Static Files'
      ],
      correct: 1,
      explanation: 'Socket.io Client ប្រើ WebSocket Connection។'
    },
    {
      question: 'តើ Tailwind CSS ប្រើសម្រាប់អ្វី?',
      options: [
        'Database Connection',
        'Styling UI',
        'API Testing',
        'Token Generation'
      ],
      correct: 1,
      explanation: 'Tailwind CSS ប្រើសម្រាប់ Styling UI។'
    },
    {
      question: 'តើ Environment Variables នៅក្នុង Full-stack App ប្រើសម្រាប់អ្វី?',
      options: [
        'Store Sensitive Data',
        'Serve Static Files',
        'Validate Inputs',
        'Log Errors'
      ],
      correct: 0,
      explanation: 'Environment Variables ប្រើសម្រាប់ Store Sensitive Data។'
    },
    {
      question: 'តើ `io.emit()` នៅក្នុង Socket.io ធ្វើអ្វី?',
      options: [
        'Send Event to One Client',
        'Send Event to All Clients',
        'Create Database',
        'Log Requests'
      ],
      correct: 1,
      explanation: '`io.emit()` បញ្ជូន Event ទៅ Clients ទាំងអស់។'
    },
    {
      question: 'តើ Frontend និង Backend ភ្ជាប់គ្នាដោយរបៀបណា?',
      options: [
        'Database Queries',
        'API Calls and WebSockets',
        'Static Files',
        'Middleware'
      ],
      correct: 1,
      explanation: 'Frontend និង Backend ភ្ជាប់គ្នាតាម API Calls និង WebSockets�।'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Full-stack Application?',
      options: [
        'Static File Serving',
        'Complete User Experience',
        'Database Creation',
        'Error Logging'
      ],
      correct: 1,
      explanation: 'Full-stack Application ផ្តល់ Complete User Experience។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: ការបង្កើត Full-stack Application

គោលបំណង: អនុវត្តការបង្កើត Real-time Chat Application ជាមួយ React Frontend និង Express.js Backend។

1. **បង្កើត Backend**:
   * បង្កើត Folder \`fullstack-app\` និង Initialize npm:
     \`\`\`bash
     mkdir fullstack-app
     cd fullstack-app
     npm init -y
     npm install express mongoose socket.io dotenv
     \`\`\`
   * បង្កើត File \`.env\`:
     \`\`\`
     MONGODB_URI=mongodb://localhost/chatapp
     \`\`\`
   * បង្កើត File \`server.js\`:
     * បង្កើត API Route សម្រាប់ទាញយក Messages។
     * បន្ថែម Socket.io សម្រាប់ Real-time Messaging។
     * រក្សាទុក Messages នៅ MongoDB។

2. **បង្កើត Frontend**:
   * បង្កើត Folder \`public\` និង File \`public/index.html\`:
     * ប្រើ React និង Tailwind CSS សម្រាប់ UI។
     * ភ្ជាប់ទៅ Socket.io Server និង API Route។
   * ដំណើរការ MongoDB Server (ឧ. \`mongod\`) និង File:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល:
     * ៖ \`http://localhost:3000/\` (បើកនៅ Browser ពីរ Tab)

3. **បន្ថែម Disconnect Event**:
   * បន្ថែម Event \`disconnect\` នៅក្នុង \`server.js\` ដើម្បីបញ្ជូន Message នៅពេល User បិទ Connection។
   * ដំណើរការ File ឡើងវិញ និងតេស្ត Disconnect Event។

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ Messages និង Disconnect Event។
`,
    solution: `
# ដំណោះស្រាយ៖ ការបង្កើត Full-stack Application

## ជំហានទី ១: Backend និង Frontend
* **.env**:
  \`\`\`
  MONGODB_URI=mongodb://localhost/chatapp
  \`\`\`
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const http = require('http');
  const { Server } = require('socket.io');
  const mongoose = require('mongoose');
  require('dotenv').config();
  const app = express();
  const server = http.createServer(app);
  const io = new Server(server);
  const port = process.env.PORT || 3000;

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  const messageSchema = new mongoose.Schema({
    content: String,
    timestamp: { type: Date, default: Date.now }
  });
  const Message = mongoose.model('Message', messageSchema);

  app.use(express.static('public'));

  app.get('/api/messages', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
  });

  io.on('connection', (socket) => {
    Message.find().then(messages => {
      socket.emit('load messages', messages);
    });

    socket.on('message', async (msg) => {
      const message = await Message.create({ content: msg });
      io.emit('message', message);
    });

    socket.on('disconnect', () => {
      io.emit('message', { content: 'A user disconnected', timestamp: new Date() });
    });
  });

  server.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
  \`\`\`
* **public/index.html**:
  \`\`\`html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Chat App</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="/socket.io/socket.io.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const App = () => {
        const [messages, setMessages] = React.useState([]);
        const [input, setInput] = React.useState('');
        const socket = io();

        React.useEffect(() => {
          fetch('/api/messages')
            .then(res => res.json())
            .then(data => setMessages(data));

          socket.on('load messages', (msgs) => {
            setMessages(msgs);
          });

          socket.on('message', (msg) => {
            setMessages(prev => [...prev, msg]);
          });

          return () => socket.disconnect();
        }, []);

        const sendMessage = () => {
          if (input) {
            socket.emit('message', input);
            setInput('');
          }
        };

        return (
          <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Chat App</h1>
            <ul className="mb-4">
              {messages.map((msg, index) => (
                <li key={index} className="border-b py-2">
                  {msg.content} ({new Date(msg.timestamp).toLocaleTimeString()})
                </li>
              ))}
            </ul>
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border p-2 mr-2"
              />
              <button onClick={sendMessage} className="bg-blue-500 text-white p-2">
                Send
              </button>
            </div>
          </div>
        );
      };

      ReactDOM.render(<App />, document.getElementById('root'));
    </script>
  </body>
  </html>
  \`\`\`
* **package.json**:
  \`\`\`json
  {
    "name": "fullstack-app",
    "version": "1.0.0",
    "scripts": {
      "start": "node server.js"
    },
    "dependencies": {
      "express": "^4.17.1",
      "mongoose": "^6.0.0",
      "socket.io": "^4.0.0",
      "dotenv": "^10.0.0"
    }
  }
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node server.js
  # Output: Server running at http://localhost:3000
  \`\`\`
  * ៖ \`http://localhost:3000/\` (ពីរ Tab)
  * ផ្ញើ Message ពី Tab មួយ → បង្ហាញនៅ Tab ទាំងពីរ
  * បិទ Tab មួយ → Message \`A user disconnected\` បង្ហាញនៅ Tab ដែលនៅសល់

## លទ្ធផលផ្ទៀងផ្ទាត់
* API: GET \`/api/messages\` ទាញយក Messages ដែលរក្សាទុកនៅ MongoDB។
* Socket.io: Real-time Messages និង Disconnect Event ដំណើរការត្រឹមត្រូវ។
* Frontend: React UI បង្ហាញ Messages និងអនុញ្ញាតឱ្យផ្ញើ Messages។
`
  }
};

export default NodeJSLesson7_2Content;