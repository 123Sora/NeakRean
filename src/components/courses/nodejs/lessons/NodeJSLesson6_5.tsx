import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson6_5Content: LessonContent = {
  title: 'Real-time Applications ជាមួយ Socket.io',
  objectives: [
    'យល់ដឹងអំពី Real-time Applications នៅក្នុង Node.js',
    'ស្វែងយល់ពី Socket.io Library សម្រាប់ WebSocket Communication',
    'រៀនបង្កើត Real-time Chat Application',
    'អនុវត្ត Socket.io ជាមួយ Express.js',
    'គ្រប់គ្រង Socket Events និង Broadcasting'
  ],
  content: `
# Real-time Applications ជាមួយ Socket.io 🌐

---

## 1. តើ Real-time Applications ជាអ្វី? 🤔

* **និយមន័យ:** Real-time Applications អនុញ្ញាតឱ្យ Clients និង Server ទំនាក់ទំនងភ្លាមៗ។
* **ឧទាហរណ៍:** Chat Apps, Live Notifications, Real-time Dashboards។
* **អត្ថប្រយោជន៍:** ផ្តល់ User Experience ដ៏ល្អនិងភាពរហ័ស។

---

## 2. Socket.io Library 🛠️

* **Socket.io:** Library សម្រាប់ Real-time, Bidirectional Communication ដោយប្រើ WebSockets។
* **Installation:** \`npm install socket.io\`
* **Features:** Events, Broadcasting, Rooms។

---

## 3. Socket Events និង Broadcasting 🌟

* **Events:** Client និង Server បញ្ជូន Events (ឧ. \`message\`, \`connect\`)។
* **Broadcasting:** បញ្ជូន Data ទៅ Clients ទាំងអស់។
* **Syntax:**
  \`\`\`javascript
  const io = require('socket.io')(server);
  io.on('connection', (socket) => {
    socket.on('message', (msg) => {
      io.emit('message', msg);
    });
  });
  \`\`\`

---

## 4. Socket.io ជាមួយ Express.js ⚙️

* **Integration:** ប្រើ Socket.io ជាមួយ Express Server។
* **ឧទាហរណ៍:** Chat Application ដែលអនុញ្ញាតឱ្យ Users ផ្ញើ Messages ទៅគ្នា។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **Chat Application:** បង្កើត Real-time Chat ដែល Users អាចផ្ញើ Messages។
* **Database Integration:** រក្សាទុក Messages នៅក្នុង MongoDB។

---
> **គន្លឹះ:** ប្រើ Socket.io Rooms សម្រាប់ Group Chats និង Validate Input ដើម្បីការពារសុវត្ថិភាព។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Basic Socket.io Server

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

បង្កើត File \`index.html\`:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Socket.io Chat</title>
</head>
<body>
  <input id="message" type="text">
  <button onclick="sendMessage()">Send</button>
  <ul id="messages"></ul>
  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io();
    const messageInput = document.getElementById('message');
    const messages = document.getElementById('messages');

    function sendMessage() {
      const msg = messageInput.value;
      if (msg) {
        socket.emit('message', msg);
        messageInput.value = '';
      }
    }

    socket.on('message', (msg) => {
      const li = document.createElement('li');
      li.textContent = msg;
      messages.appendChild(li);
    });
  </script>
</body>
</html>
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* ៖ \`http://localhost:3000/\` (បើកនៅ Browser ពីរ Tab)
* ផ្ញើ Message ពី Tab មួយ → បង្ហាញនៅ Tab ទាំងពីរ

# ឧទាហរណ៍ ២: Chat Application ជាមួយ MongoDB

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

mongoose.connect('mongodb://localhost/chatdb', { useNewUrlParser: true, useUnifiedTopology: true });

const messageSchema = new mongoose.Schema({
  content: String,
  timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
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

បង្កើត File \`index.html\`:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Socket.io Chat</title>
</head>
<body>
  <input id="message" type="text">
  <button onclick="sendMessage()">Send</button>
  <ul id="messages"></ul>
  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io();
    const messageInput = document.getElementById('message');
    const messages = document.getElementById('messages');

    function sendMessage() {
      const msg = messageInput.value;
      if (msg) {
        socket.emit('message', msg);
        messageInput.value = '';
      }
    }

    socket.on('load messages', (msgs) => {
      msgs.forEach(msg => {
        const li = document.createElement('li');
        li.textContent = \`\${msg.content} (\${new Date(msg.timestamp).toLocaleTimeString()})\`;
        messages.appendChild(li);
      });
    });

    socket.on('message', (msg) => {
      const li = document.createElement('li');
      li.textContent = \`\${msg.content} (\${new Date(msg.timestamp).toLocaleTimeString()})\`;
      messages.appendChild(li);
    });
  </script>
</body>
</html>
\`\`\`

ដំណើរការ File (តម្រូវឱ្យ MongoDB Server ដំណើរការ):

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* ៖ \`http://localhost:3000/\`\ (បើកនៅ Browser ពីរ Tab)
* Messages ត្រូវបានរក្សាទុកនៅ MongoDB និងបង្ហាញនៅ Clients ទាំងអស់
`
  ],
  quiz: [
    {
      question: 'តើ Real-time Applications ជាអ្វី?',
      options: [
        'Applications ដែលបម្រើ Static Files',
        'Applications ដែលអនុញ្ញាតឱ្យ Clients និង Server ទំនាក់ទំនងភ្លាមៗ',
        'Applications ដែលបង្កើត Database',
        'Applications ដែលផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់'
      ],
      correct: 1,
      explanation: 'Real-time Applications អនុញ្ញាតឱ្យ Clients និង Server ទំនាក់ទំនងភ្លាមៗ។'
    },
    {
      question: 'តើ Socket.io ប្រើសម្រាប់អ្វី?',
      options: [
        'Unit Testing',
        'WebSocket Communication',
        'Database Connection',
        'Logging'
      ],
      correct: 1,
      explanation: 'Socket.io ប្រើសម្រាប់ Real-time, Bidirectional WebSocket Communication។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីដំឡើង Socket.io?',
      options: [
        'npm install express',
        'npm install socket.io',
        'npm install mongoose',
        'npm install jest'
      ],
      correct: 1,
      explanation: '`npm install socket.io` ប្រើសម្រាប់ដំឡើង Socket.io។'
    },
    {
      question: 'តើ `io.emit()` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន Event ទៅ Client តែមួយ',
        'បញ្ជូន Event ទៅ Clients ទាំងអស់',
        'រក្សាទុក Data នៅ Database',
        'Log HTTP Request'
      ],
      correct: 1,
      explanation: '`io.emit()` បញ្ជូន Event ទៅ Clients ទាំងអស់។'
    },
    {
      question: 'តើ `socket.on()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន Event',
        'ស្តាប់ Event ពី Client',
        'ភ្ជាប់ Database',
        'បង្កើត Route'
      ],
      correct: 1,
      explanation: '`socket.on()` ស្តាប់ Event ពី Client។'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Real-time Application?',
      options: [
        'Static Website',
        'Chat Application',
        'Database Schema',
        'API Route'
      ],
      correct: 1,
      explanation: 'Chat Application ជាឧទាហរណ៍នៃ Real-time Application។'
    },
    {
      question: 'តើ Socket.io Rooms ប្រើសម្រាប់អ្វី?',
      options: [
        'Group Chats',
        'Unit Testing',
        'Logging Errors',
        'Database Queries'
      ],
      correct: 0,
      explanation: 'Socket.io Rooms ប្រើសម្រាប់ Group Chats ឬ Specific Client Groups។'
    },
    {
      question: 'តើ `socket.emit()` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន Event ទៅ Clients ទាំងអស់',
        'បញ្ជូន Event ទៅ Client តែមួយ',
        'រក្សាទុក Data នៅ Database',
        'Log HTTP Request'
      ],
      correct: 1,
      explanation: '`socket.emit()` បញ្ជូន Event ទៅ Client តែមួយ។'
    },
    {
      question: 'តើ Socket.io ត្រូវបានប្រើជាមួយ Protocol ណា?',
      options: [
        'HTTP',
        'WebSocket',
        'FTP',
        'SMTP'
      ],
      correct: 1,
      explanation: 'Socket.io ប្រើ WebSocket សម្រាប់ Real-time Communication។'
    },
    {
      question: 'តើ Event ណាដែលបាន Trigger នៅពេល Client ភ្ជាប់?',
      options: [
        'message',
        'connect',
        'disconnect',
        'error'
      ],
      correct: 1,
      explanation: 'Event `connection` បាន Trigger នៅពេល Client ភ្ជាប់។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Real-time Applications?',
      options: [
        'បង្កើត Dynamic HTML',
        'ផ្តល់ User Experience ដ៏ល្អនិងភាពរហ័ស',
        'ភ្ជាប់ Database',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Real-time Applications ផ្តល់ User Experience ដ៏ល្អនិងភាពរហ័ស។'
    },
    {
      question: 'តើ MongoDB នៅក្នុង Chat Application ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក Messages',
        'បញ្ជូន HTTP Requests',
        'Log Errors',
        'Validate Tokens'
      ],
      correct: 0,
      explanation: 'MongoDB ប្រើសម្រាប់រក្សាទុក Messages នៅក្នុង Chat Application ។'
    },
    {
      question: 'តើ \`io.on("connection")\` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន Message',
        'ស្តាប់ Client Connections',
        'រក្សាទុក Data',
        'Log HTTP Request'
      ],
      correct: 1,
      explanation: '\`io.on("connection")\` ស្តាប់ Client Connections។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Real-time Applications ជាមួយ Socket.io

គោលបំណង: អនុវត្តការបង្កើត Real-time Chat Application ជាមួយ Socket.io។

1. **បង្កើត Chat Application**:
   * បង្កើត Folder \`chat-app\` និង Initialize npm:
     \`\`\`bash
     mkdir chat-app
     cd chat-app
     npm init -y
     npm install express socket.io mongoose
     \`\`\`
   * បង្កើត File \`server.js\`:
     \`\`\`javascript
     const express = require('express');
     const http = require('http');
     const { Server } = require('socket.io');
     const mongoose = require('mongoose');
     const app = express();
     const server = http.createServer(app);
     const io = new Server(server);
     const port = 3000;

     mongoose.connect('mongodb://localhost/chatdb', { useNewUrlParser: true, useUnifiedTopology: true });

     const messageSchema = new mongoose.Schema({
       content: String,
       timestamp: { type: Date, default: Date.now }
     });
     const Message = mongoose.model('Message', messageSchema);

     app.get('/', (req, res) => {
       res.sendFile(__dirname + '/index.html');
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
   * បង្កើត File \`index.html\`:
     \`\`\`html
     <!DOCTYPE html>
     <html>
     <head>
       <title>Socket.io Chat</title>
     </head>
     <body>
       <input id="message" type="text">
       <button onclick="sendMessage()">Send</button>
       <ul id="messages"></ul>
       <script src="/socket.io/socket.io.js"></script>
       <script>
         const socket = io();
         const messageInput = document.getElementById('message');
         const messages = document.getElementById('messages');

         function sendMessage() {
           const msg = messageInput.value;
           if (msg) {
             socket.emit('message', msg);
             messageInput.value = '';
           }
         }

         socket.on('load messages', (msgs) => {
           msgs.forEach(msg => {
             const li = document.createElement('li');
             li.textContent = \`\${msg.content} (\${new Date(msg.timestamp).toLocaleTimeString()})\`;
             messages.appendChild(li);
           });
         });

         socket.on('message', (msg) => {
           const li = document.createElement('li');
           li.textContent = \`\${msg.content} (\${new Date(msg.timestamp).toLocaleTimeString()})\`;
           messages.appendChild(li);
         });
       </script>
     </body>
     </html>
     \`\`\`
   * ដំណើរការ MongoDB Server (ឧ. \`mongod\`) និង File:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល:
     * ៖ \`http://localhost:3000/\` (បើកនៅ Browser ពីរ Tab)

2. **បន្ថែម User Disconnect Event**:
   * បន្ថែម Event \`disconnect\` នៅក្នុង \`server.js\`:
     \`\`\`javascript
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
     \`\`\`
   * ដំណើរការ File ឡើងវិញ:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល:
     * បើក Browser ពីរ Tab, ផ្ញើ Message, និងបិទ Tab មួយ

3. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ Messages និង Disconnect Event។
`,
    solution: `
# ដំណោះស្រាយ៖ Real-time Applications ជាមួយ Socket.io

## ជំហានទី ១: Chat Application
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const http = require('http');
  const { Server } = require('socket.io');
  const mongoose = require('mongoose');
  const app = express();
  const server = http.createServer(app);
  const io = new Server(server);
  const port = 3000;

  mongoose.connect('mongodb://localhost/chatdb', { useNewUrlParser: true, useUnifiedTopology: true });

  const messageSchema = new mongoose.Schema({
    content: String,
    timestamp: { type: Date, default: Date.now }
  });
  const Message = mongoose.model('Message', messageSchema);

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
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
* **index.html**:
  \`\`\`html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Socket.io Chat</title>
  </head>
  <body>
    <input id="message" type="text">
    <button onclick="sendMessage()">Send</button>
    <ul id="messages"></ul>
    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io();
      const messageInput = document.getElementById('message');
      const messages = document.getElementById('messages');

      function sendMessage() {
        const msg = messageInput.value;
        if (msg) {
          socket.emit('message', msg);
          messageInput.value = '';
        }
      }

      socket.on('load messages', (msgs) => {
        msgs.forEach(msg => {
          const li = document.createElement('li');
          li.textContent = \`\${msg.content} (\${new Date(msg.timestamp).toLocaleTimeString()})\`;
          messages.appendChild(li);
        });
      });

      socket.on('message', (msg) => {
        const li = document.createElement('li');
        li.textContent = \`\${msg.content} (\${new Date(msg.timestamp).toLocaleTimeString()})\`;
        messages.appendChild(li);
      });
    </script>
  </body>
  </html>
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
* Messages: រក្សាទុកនៅ MongoDB និងបង្ហាញនៅ Clients ទាំងអស់។
* Disconnect Event: បញ្ជូន Message នៅពេល Client បិទ Connection។
`
  }
};

export default NodeJSLesson6_5Content;