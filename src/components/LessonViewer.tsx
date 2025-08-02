import { useState } from 'react';
import { ArrowLeft, Target, BookOpen, Code, HelpCircle, Beaker, ChevronRight, Check, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// --- IMPORTANT CHANGES HERE ---
// 1. Change 'Prism' to 'Light' for SyntaxHighlighter import
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// 2. Import and register specific languages you need
// 'markup' typically includes HTML, XML, SVG
import html from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'; // If you have CSS code blocks

// 3. Register languages immediately (outside the component, or in a useEffect hook if dynamic)
// Doing it here ensures they are registered once when the module loads
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('css', css);
// Add more languages as needed, e.g., 'python', 'java', etc.
// import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
// SyntaxHighlighter.registerLanguage('python', python);



interface Lesson {
  id: string;
  title: string;
  objectives: string[];
  content: string;
  examples: string[];
  quiz: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
  lab: {
    task: string;
    solution: string;
  };
}

interface LessonViewerProps {
  lesson: Lesson;
  onBack: () => void;
}

type ViewMode = 'objectives' | 'content' | 'examples' | 'quiz' | 'lab';

function LessonViewer({ lesson, onBack }: LessonViewerProps) {
  const [currentView, setCurrentView] = useState<ViewMode>('objectives');
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [showLabSolution, setShowLabSolution] = useState(false);

  const viewOptions = [
    { id: 'objectives' as ViewMode, title: 'គោលបំណង', icon: Target, color: 'blue' },
    { id: 'content' as ViewMode, title: 'មេរៀន', icon: BookOpen, color: 'green' },
    { id: 'examples' as ViewMode, title: 'ឧទាហរណ៍', icon: Code, color: 'purple' },
    { id: 'quiz' as ViewMode, title: 'Quiz', icon: HelpCircle, color: 'orange' },
    { id: 'lab' as ViewMode, title: 'Lab', icon: Beaker, color: 'red' },
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const submitQuizAnswer = () => {
    setShowQuizResult(true);
  };

  const nextQuiz = () => {
    if (currentQuiz < lesson.quiz.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer(null);
      setShowQuizResult(false);
    }
  };

  const prevQuiz = () => {
    if (currentQuiz > 0) {
      setCurrentQuiz(currentQuiz - 1);
      setSelectedAnswer(null);
      setShowQuizResult(false);
    }
  };

  const renderObjectives = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center space-x-2">
          <Target className="w-5 h-5" />
          <span>គោលបំណងនៃមេរៀននេះ</span>
        </h3>
        <p className="text-blue-700 mb-4">
          បន្ទាប់ពីបញ្ចប់មេរៀននេះ អ្នកនឹងអាច:
        </p>
        <ul className="space-y-3">
          {lesson.objectives.map((objective, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                {index + 1}
              </div>
              <span className="text-blue-800">{objective}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white border rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-3">រចនាសម្ព័ន្ធមេរៀន</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <BookOpen className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-sm font-medium">មេរៀន</div>
            <div className="text-xs text-gray-600">ទ្រឹស្តី</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Code className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-sm font-medium">ឧទាហរណ៍</div>
            <div className="text-xs text-gray-600">{lesson.examples.length} កូដ</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <HelpCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <div className="text-sm font-medium">Quiz</div>
            <div className="text-xs text-gray-600">{lesson.quiz.length} សំណួរ</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Beaker className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <div className="text-sm font-medium">Lab</div>
            <div className="text-xs text-gray-600">អនុវត្តន៍</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="bg-white border rounded-xl p-6">
      <div className="prose prose-lg max-w-none">
        {/* Use ReactMarkdown here */}
        <ReactMarkdown
          children={lesson.content}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children }) { // Removed 'node' and 'inline' and '...props'
              const match = /language-(\w+)/.exec(className || '');

              return match ? ( // No longer checking `!inline` as 'inline' is not destructured
                <SyntaxHighlighter
                  style={solarizedlight}
                  language={match[1]}
                  PreTag="div"
                  // No spread props here. Only explicitly passed props.
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                // For inline code, `ReactMarkdown` itself handles the `<code>` tag.
                // We typically only need to override for block code.
                // If you *must* render inline code with custom styling, use this:
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                   {children}
                </code>
              );
            },
            h1: ({ children }) => <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-xl font-semibold text-gray-800 mt-5 mb-3">{children}</h2>,
            h3: ({ children }) => <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">{children}</h3>,
            p: ({ children }) => <p className="mb-4">{children}</p>,
            ul: ({ children }) => <ul className="list-disc list-inside mb-4 pl-5 space-y-2">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal list-inside mb-4 pl-5 space-y-2">{children}</ol>,
            li: ({ children }) => <li className="mb-1">{children}</li>,
            a: ({ href, children }) => <a href={href} className="text-blue-600 hover:underline">{children}</a>,
            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
            em: ({ children }) => <em className="italic">{children}</em>,
            hr: () => <hr className="my-8 border-gray-300" />,
            img: ({ src, alt }) => <img src={src} alt={alt} className="max-w-full h-auto my-4 rounded-lg" />,
          }}
        />
      </div>
    </div>
  );

const detectLanguage = (content: string): string => {
  const trimmedContent = content.trim().toLowerCase();
  
  // Check for HTML
  if (trimmedContent.startsWith('<') || /<\/[a-z]+>/.test(trimmedContent)) {
    return 'html';
  }

  // Check for CSS
  if (trimmedContent.includes('{') && trimmedContent.includes('}') || trimmedContent.includes('selector')) {
    return 'css';
  }
  // Check for JavaScript
  if (
    trimmedContent.includes('function') ||
    trimmedContent.includes('const ') ||
    trimmedContent.includes('let ') ||
    trimmedContent.includes('var ')
  ) {
    return 'javascript';
  }
  // Check for Bootstrap (look for common Bootstrap classes)
  if (
    /class=.*(container|btn|row|col-|navbar|card|modal)/.test(trimmedContent)
  ) {
    return 'html'; // Treat Bootstrap as HTML
  }
  // Default to Markdown
  return 'markdown';
};

  const renderExamples = () => (
    <div className="space-y-6">
      {lesson.examples.map((example, index) => (
        <div key={index} className="bg-white border rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b">
            <h4 className="font-medium text-gray-900">ឧទាហរណ៍ #{index + 1}</h4>
          </div>
          <div className="p-6">
            {detectLanguage(example) !== 'markdown' ? (
            <SyntaxHighlighter
              style={solarizedlight}
              language={detectLanguage(example)}
              showLineNumbers
              wrapLines={true}
              customStyle={{ borderRadius: '0.5rem', padding: '1rem', overflowX: 'auto' }}
            >
              {example}
            </SyntaxHighlighter>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return match ? (
                    <SyntaxHighlighter
                      style={solarizedlight}
                      language={match[1]}
                      PreTag="div"
                      showLineNumbers
                      wrapLines={true}
                      customStyle={{ borderRadius: '0.5rem', padding: '1rem', overflowX: 'auto' }}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => (
                  <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl font-semibold text-gray-800 mt-5 mb-3">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">{children}</h3>
                ),
                p: ({ children }) => <p className="mb-4">{children}</p>,
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 pl-5 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-4 pl-5 space-y-2">{children}</ol>
                ),
                li: ({ children }) => <li className="mb-1">{children}</li>,
                a: ({ href, children }) => (
                  <a href={href} className="text-blue-600 hover:underline">{children}</a>
                ),
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                hr: () => <hr className="my-8 border-gray-300" />,
                img: ({ src, alt }) => (
                  <img src={src} alt={alt} className="max-w-full h-auto my-4 rounded-lg" />
                ),
                br: () => <br />,
              }}
            >
              {example}
            </ReactMarkdown>
          )}
          </div>  
        </div>
      ))}
    </div>
  );

  const renderQuiz = () => {
    const quiz = lesson.quiz[currentQuiz];
    if (!quiz) return null;

    return (
      <div className="bg-white border rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            សំណួរទី {currentQuiz + 1} ក្នុងចំណោម {lesson.quiz.length}
          </h3>
          <div className="text-sm text-gray-600">
            Quiz
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg text-gray-800 mb-4">{quiz.question}</h4>
          <div className="space-y-3">
            {quiz.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleQuizAnswer(index)}
                disabled={showQuizResult}
                className={`w-full text-left p-4 border rounded-lg transition-colors ${
                  showQuizResult
                    ? index === quiz.correct
                      ? 'bg-green-50 border-green-200 text-green-800'
                      : selectedAnswer === index
                      ? 'bg-red-50 border-red-200 text-red-800'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                    : selectedAnswer === index
                    ? 'bg-blue-50 border-blue-200 text-blue-800'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    showQuizResult
                      ? index === quiz.correct
                        ? 'border-green-500 bg-green-500'
                        : selectedAnswer === index
                        ? 'border-red-500 bg-red-500'
                        : 'border-gray-300'
                      : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {showQuizResult && index === quiz.correct && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                    {showQuizResult && selectedAnswer === index && index !== quiz.correct && (
                      <X className="w-4 h-4 text-white" />
                    )}
                    {!showQuizResult && selectedAnswer === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {showQuizResult && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h5 className="font-medium text-blue-800 mb-2">ពន្យល់:</h5>
            <p className="text-blue-700">{quiz.explanation}</p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {currentQuiz > 0 && (
              <button
                onClick={prevQuiz}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                សំណួរមុន
              </button>
            )}
          </div>

          <div className="flex space-x-3">
            {!showQuizResult && selectedAnswer !== null && (
              <button
                onClick={submitQuizAnswer}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                ដាក់ចម្លើយ
              </button>
            )}
            
            {showQuizResult && currentQuiz < lesson.quiz.length - 1 && (
              <button
                onClick={nextQuiz}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
              >
                <span>សំណួរបន្ទាប់</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  
  const isHtmlSolution = lesson.lab.solution.trim().startsWith('<!DOCTYPE html>');
  const renderLab = () => (
     <div className="space-y-6">
    <div className="bg-white border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
        <Beaker className="w-5 h-5 text-red-600" />
        <span>លំហាត់អនុវត្តន៍</span>
      </h3>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-greena-800 mb-2">កិច្ចការដែលត្រូវធ្វើ:</h4>
        <div className="prose max-w-none">
          <ReactMarkdown
            children={lesson.lab.task}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children }) {
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                    style={solarizedlight}
                    language={match[1]}
                    PreTag="div"
                    showLineNumbers
                    wrapLines={true}
                    customStyle={{ borderRadius: '0.5rem', padding: '1rem', overflowX: 'auto' }}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                    {children}
                  </code>
                );
              },
              h1: ({ children }) => <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-semibold text-gray-800 mt-5 mb-3">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">{children}</h3>,
              p: ({ children }) => <p className="mb-4">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 pl-5 space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 pl-5 space-y-2">{children}</ol>,
              li: ({ children }) => <li className="mb-1">{children}</li>,
              a: ({ href, children }) => <a href={href} className="text-blue-600 hover:underline">{children}</a>,
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              em: ({ children }) => <em className="italic">{children}</em>,
              hr: () => <hr className="my-8 border-gray-300" />,
              img: ({ src, alt }) => <img src={src} alt={alt} className="max-w-full h-auto my-4 rounded-lg" />,
              br: () => <br />,
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium text-gray-900">ដំណោះស្រាយ</h4>
        <button
          onClick={() => setShowLabSolution(!showLabSolution)}
          className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          {showLabSolution ? 'លាក់ដំណោះស្រាយ' : 'មើលដំណោះស្រាយ'}
        </button>
      </div>

      {showLabSolution && (
          <div className="markdown-content">
            {isHtmlSolution ? (
              <SyntaxHighlighter
                style={solarizedlight}
                language="html"
                showLineNumbers
                wrapLines={true}
                customStyle={{ borderRadius: '0.5rem', padding: '1rem', overflowX: 'auto' }}
              >
                {lesson.lab.solution}
              </SyntaxHighlighter>
            ) : (
              <ReactMarkdown
                children={lesson.lab.solution}
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ className, children }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                      <SyntaxHighlighter
                        style={solarizedlight}
                        language={match[1]}
                        PreTag="div"
                        showLineNumbers
                        wrapLines={true}
                        customStyle={{ borderRadius: '0.5rem', padding: '1rem', overflowX: 'auto' }}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        {children}
                      </code>
                    );
                  },
                  h1: ({ children }) => <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-semibold text-gray-800 mt-5 mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">{children}</h3>,
                  p: ({ children }) => <p className="mb-4">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 pl-5 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 pl-5 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  a: ({ href, children }) => <a href={href} className="text-blue-600 hover:underline">{children}</a>,
                  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                  hr: () => <hr className="my-8 border-gray-300" />,
                  img: ({ src, alt }) => <img src={src} alt={alt} className="max-w-full h-auto my-4 rounded-lg" />,
                  br: () => <br />,
                }}
              />
            )}
          </div>
        )}
    </div>
  </div>
  );



  const renderCurrentView = () => {
    switch (currentView) {
      case 'objectives':
        return renderObjectives();
      case 'content':
        return renderContent();
      case 'examples':
        return renderExamples();
      case 'quiz':
        return renderQuiz();
      case 'lab':
        return renderLab();
      default:
        return renderObjectives();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>ត្រលប់ក្រោយ</span>
              </button>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-lg font-semibold text-gray-900">{lesson.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-xl p-4 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">ផ្នែកមេរៀន</h3>
              <nav className="space-y-2">
                {viewOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setCurrentView(option.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      currentView === option.id
                        ? `bg-${option.color}-50 text-${option.color}-700 border border-${option.color}-200`
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <option.icon className="w-4 h-4" />
                    <span className="font-medium">{option.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderCurrentView()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonViewer;