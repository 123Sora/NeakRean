import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson5_4Content: LessonContent = {
  title: 'Error Boundaries',
  objectives: [
    'យល់ដឹងអំពី Error Boundaries នៅក្នុង React',
    'ស្វែងយល់ពីការបង្កើត Error Boundary Component',
    'រៀនប្រើ `componentDidCatch` និង `getDerivedStateFromError`',
    'អនុវត្ត Error Boundary ដើម្បីចាប់ Errors ក្នុង Component Tree',
    'រៀនបង្ហាញ Fallback UI នៅពេលមាន Error',
    'ស្វែងយល់ពី Limitations នៃ Error Boundaries',
    'រៀន Log Errors សម្រាប់ Debugging'
  ],
  content: `
# Error Boundaries 🛡️

---

**Error Boundaries** គឺជា React Components ដែលចាប់ JavaScript Errors នៅក្នុង Child Component Tree និងបង្ហាញ Fallback UI។

---

## 1. អ្វីទៅជា Error Boundary?
Error Boundary ជា Class Component ដែលប្រើ \`componentDidCatch\` ឬ \`getDerivedStateFromError\` ដើម្បីចាប់ Errors។

\`\`\`jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>មានកំហុសមួយបានកើតឡើង</h1>;
    }
    return this.props.children;
  }
}
\`\`\`

---

## 2. ប្រើ Error Boundary
Wrap Component ដែលអាចមាន Error ជាមួយ Error Boundary។

\`\`\`jsx
function BuggyComponent() {
  throw new Error('មានកំហុស!');
  return <p>នេះនឹងមិន Render</p>;
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
\`\`\`

---

## 3. Logging Errors
ប្រើ \`componentDidCatch\` ដើម្បី Log Error ទៅ Console ឬ Service។

\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>កំហុស: {this.state.error.message}</h1>;
    }
    return this.props.children;
  }
}
\`\`\`

---

## 4. Limitations
Error Boundaries មិនអាចចាប់ Errors ក្នុង:
- Event Handlers
- Asynchronous Code (ឧ. setTimeout)
- Server-Side Rendering
- Errors ក្នុង Error Boundary ខ្លួនឯង

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>មានកំហុសមួយបានកើតឡើង</h1>;
    }
    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error('មានកំហុស!');
  return <p>នេះនឹងមិន Render</p>;
}

function App() {
  return (
    <div>
      <h2>កម្មវិធីគំរូ</h2>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Error Boundary ជាមួយ Fallback UI</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  class ErrorBoundary extends React.Component {
    state = { hasError: false };
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    render() {
      if (this.state.hasError) {
        return <h1>មានកំហុសមួយបានកើតឡើង</h1>;
      }
      return this.props.children;
    }
  }
  function BuggyComponent() {
    throw new Error('មានកំហុស!');
    return <p>នេះនឹងមិន Render</p>;
  }
  function App() {
    return (
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>មានកំហុសមួយបានកើតឡើង</h1>;
    }
    return this.props.children;
  }
}
function BuggyComponent() {
  throw new Error('មានកំហុស!');
  return <p>នេះនឹងមិន Render</p>;
}
function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Error Boundary ជាមួយ Error Logging</h3>
<div id="root2"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
      console.error('Error:', error, errorInfo);
    }
    render() {
      if (this.state.hasError) {
        return <h1>កំហុស: {this.state.error.message}</h1>;
      }
      return this.props.children;
    }
  }
  function BuggyComponent() {
    throw new Error('មានកំហុស!');
    return <p>នេះនឹងមិន Render</p>;
  }
  function App() {
    return (
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root2'));
</script>
<pre><code class="language-jsx">
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>កំហុស: {this.state.error.message}</h1>;
    }
    return this.props.children;
  }
}
function BuggyComponent() {
  throw new Error('មានកំហុស!');
  return <p>នេះនឹងមិន Render</p>;
}
function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Error Boundary គឺជាអ្វី?',
      options: [
        'Function Component',
        'Class Component ដែលចាប់ Errors',
        'Hook សម្រាប់ Error Handling',
        'Library សម្រាប់ Debugging'
      ],
      correct: 1,
      explanation: 'Error Boundary ជា Class Component ដែលចាប់ Errors ក្នុង Child Component Tree។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់បង្ហាញ Fallback UI នៅក្នុង Error Boundary?',
      options: [
        'componentDidMount',
        'getDerivedStateFromError',
        'useEffect',
        'render'
      ],
      correct: 1,
      explanation: '`getDerivedStateFromError` Update State ដើម្បីបង្ហាញ Fallback UI។'
    },
    {
      question: 'តើ `componentDidCatch` ប្រើសម្រាប់អ្វី?',
      options: [
        'Render UI',
        'Log Errors',
        'Update State',
        'Fetch Data'
      ],
      correct: 1,
      explanation: '`componentDidCatch` ប្រើសម្រាប់ Log Errors ឬ Side Effects។'
    },
    {
      question: 'តើ Error Boundary អាចចាប់ Errors ក្នុង Event Handlers បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បានតែក្នុង Functional Components',
        'បានតែក្នុង Class Components'
      ],
      correct: 1,
      explanation: 'Error Boundary មិនអាចចាប់ Errors ក្នុង Event Handlers។'
    },
    {
      question: 'តើ Error Boundary អាចប្រើបានក្នុង Component ប្រភេទណា?',
      options: [
        'Functional Components',
        'Class Components',
        'ទាំង Functional និង Class Components',
        'មិនអាចប្រើបាន'
      ],
      correct: 1,
      explanation: 'Error Boundary ប្រើបានតែក្នុង Class Components។'
    },
    {
      question: 'តើ Error Boundary អាចចាប់ Errors ក្នុង Asynchronous Code បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បានតែក្នុង `useEffect`',
        'បានតែក្នុង `setTimeout`'
      ],
      correct: 1,
      explanation: 'Error Boundary មិនអាចចាប់ Errors ក្នុង Asynchronous Code។'
    },
    {
      question: 'តើ Fallback UI បង្ហាញនៅពេលណា?',
      options: [
        'នៅពេល Component Render',
        'នៅពេលមាន Error',
        'នៅពេល Fetch Data',
        'នៅពេល Update State'
      ],
      correct: 1,
      explanation: 'Fallback UI បង្ហាញនៅពេល Error Boundary ចាប់ Error។'
    },
    {
      question: 'តើ `getDerivedStateFromError` Return អ្វី?',
      options: [
        'Error Object',
        'State Update Object',
        'DOM Reference',
        'Component Instance'
      ],
      correct: 1,
      explanation: '`getDerivedStateFromError` Return State Update Object។'
    },
    {
      question: 'តើ Error Boundary អាច Wrap Component ណាខ្លះ?',
      options: [
        'Parent Components ប៉ុណ្ណោះ',
        'Child Components',
        'Root Component ប៉ុណ្ណោះ',
        'មិនអាច Wrap Component'
      ],
      correct: 1,
      explanation: 'Error Boundary Wrap Child Components ដើម្បីចាប់ Errors។'
    },
    {
      question: 'តើ Error Boundary អាចចាប់ Errors ក្នុង Server-Side Rendering បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បានតែក្នុង Next.js',
        'បានតែក្នុង Client-Side'
      ],
      correct: 1,
      explanation: 'Error Boundary មិនអាចចាប់ Errors ក្នុង Server-Side Rendering។'
    },
    {
      question: 'តើកូដ `this.state.hasError` ប្រើសម្រាប់អ្វីក្នុង Error Boundary?',
      options: [
        'Update DOM',
        'បង្ហាញ Fallback UI',
        'Fetch Data',
        'Validate Props'
      ],
      correct: 1,
      explanation: '`this.state.hasError` ប្រើដើម្បីបង្ហាញ Fallback UI នៅពេលមាន Error។'
    },
    {
      question: 'តើ Error Boundary អាចប្រើ Hook ដូចជា `useState` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បានតែក្នុង Functional Components',
        'បានតែក្នុង Class Components'
      ],
      correct: 1,
      explanation: 'Error Boundary ជា Class Component ដូច្នេះមិនអាចប្រើ Hooks។'
    },
    {
      question: 'តើ Error Boundary ជួយអ្វីក្នុង React Application?',
      options: [
        'ការពារ App ពី Crash',
        'Validate Props',
        'Fetch Data',
        'Manage State'
      ],
      correct: 0,
      explanation: 'Error Boundary ការពារ App ពី Crash ដោយបង្ហាញ Fallback UI។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Error Boundary ដើម្បីបង្កើត App ដែលចាប់ Errors។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "React Error Boundary"។
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`។

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel។
   - បង្កើត Class Component \`ErrorBoundary\` ដែល:
     - ប្រើ \`state = { hasError: false }\`។
     - ប្រើ \`getDerivedStateFromError\` ដើម្បី Update State នៅពេលមាន Error។
     - Render Fallback UI (\`<h1>មានកំហុសមួយបានកើតឡើង</h1>\`) នៅពេល \`hasError\` ជា \`true\`។
   - បង្កើត Functional Component \`BuggyComponent\` ដែល Throw Error។
   - បង្កើត Functional Component \`App\` ដែល Wrap \`BuggyComponent\` ជាមួយ \`ErrorBoundary\`។
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 24px; color: red;\` សម្រាប់ \`h1\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Error Boundary</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    h1 {
      font-size: 24px;
      color: red;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/Babel.min.js"></script>
  <script type="text/babel">
    class ErrorBoundary extends React.Component {
      state = { hasError: false };
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
      render() {
        if (this.state.hasError) {
          return <h1>មានកំហុសមួយបានកើតឡើង</h1>;
        }
        return this.props.children;
      }
    }
    function BuggyComponent() {
      throw new Error('មានកំហុស!');
      return <p>នេះនឹងមិន Render</p>;
    }
    function App() {
      return (
        <div>
          <h2>កម្មវិធីគំរូ</h2>
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
        </div>
      );
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson5_4Content;