import { useState } from 'react';
import { BookOpen, Code, Menu, X, Home } from 'lucide-react';
import HomePage from './components/HomePage';
import HTMLCourse from './components/courses/html/HTMLCourse';
import CSSCourse from './components/courses/css/CSSCourse';
import BootstrapCourse from './components/courses/bootstrap/BootstrapCourse';
import TailwindCourse from './components/courses/tailwind/TailwindCourse';
import JavaScriptCourse from './components/courses/javascript/JavaScriptCourse';
import ReactCourse from './components/courses/react/ReactCourse';
import VueCourse from './components/courses/vue/VueCourse';
import NextJSCourse from './components/courses/nextjs/NextJSCourse';
import PostmanCourse from './components/courses/postman/PostmanCourse';
import GitHubCourse from './components/courses/github/GitHubCourse';
import GitLabCourse from './components/courses/gitlab/GitLabCourse';
import MySQLCourse from './components/courses/mysql/MYSQLCourse';
import NodeJSCourse from './components/courses/nodejs/NodeJSCourse';
import ExpressJSCourse from './components/courses/expressjs/ExpressJSCourse';
import PHPCourse from './components/courses/php/PHPCourse';
import LaravelCourse from './components/courses/laravel/LaravelCourse';
import FlutterCourse from './components/courses/flutter/FlutterCourse';
import SwiftCourse from './components/courses/swift/SwiftCourse';
import KotlinCourse from './components/courses/kotlin/KotlinCourse';
import ReactNativeCourse from './components/courses/reactnative/ReactnativeCourse';
import ConceptCourse from './components/courses/concept/ConceptCourse';
import TerminologyCourse from './components/courses/terminology/TerminologyCourse';
import AboutUs from './components/AboutUs';
import SecurityProvider from './components/SecurityProvider'; 

type CourseType = 'home' | 'about' | 'html' | 'css' | 'bootstrap' | 'tailwind' | 'javascript' | 'react' | 'vue' | 'nextjs' | 'postman' | 'github' | 'gitlab' | 'mysql' | 'nodejs' | 'expressjs' | 'php' | 'laravel' | 'swift' | 'kotlin' | 'flutter' | 'reactnative' | 'ionic' | 'xamarin' | 'concept' | 'terminology' | 'mis' | 'se' ;

// Define the Course interface to match HomePage expectations
interface Course {
  id: CourseType;
  name: string;
  khmer: string;
  icon: string;
  color: string;
  lessons: number;
  duration: string;
  level: string;
}

function App() {
  const [currentCourse, setCurrentCourse] = useState<CourseType>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const courses: Course[] = [
    {
      id: 'html',
      name: 'HTML',
      khmer: 'ភាសា HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: 'bg-orange-100',
      lessons: 12,
      duration: '3-5 ម៉ោង',
      level: 'បឋម',
    },
    {
      id: 'css',
      name: 'CSS',
      khmer: 'ភាសា CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: 'bg-blue-100',
      lessons: 14,
      duration: '4-6 ម៉ោង',
      level: 'បឋម',
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      khmer: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      color: 'bg-purple-100',
      lessons: 10,
      duration: '3-5 ម៉ោង',
      level: 'បឋម',
    },
    {
      id: 'tailwind',
      name: 'Tailwind',
      khmer: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      color: 'bg-teal-100',
      lessons: 12,
      duration: '4-6 ម៉ោង',
      level: 'បឋម',
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      khmer: 'ភាសា JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'bg-yellow-100',
      lessons: 20,
      duration: '6-8 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'react',
      name: 'React',
      khmer: 'React Library',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'bg-cyan-100',
      lessons: 18,
      duration: '6-10 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'vue',
      name: 'Vue',
      khmer: 'Vue.js Framework',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      color: 'bg-green-100',
      lessons: 16,
      duration: '5-8 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      khmer: 'Next.js Framework',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: 'bg-gray-900',
      lessons: 16,
      duration: '9-12 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      khmer: 'Node.js runtime',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'bg-green-600',
      lessons: 16,
      duration: '8-10 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'expressjs',
      name: 'Express.js',
      khmer: 'Express.js Framework',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: 'bg-gray-400',
      lessons: 16,
      duration: '6-8 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'mysql',
      name: 'MySql',
      khmer: 'MySql Database',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: 'bg-blue-300',
      lessons: 16,
      duration: '7-9 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'github',
      name: 'GitHub',
      khmer: 'GitHub Platform',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: 'bg-gray-200',
      lessons: 16,
      duration: '5-7 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'gitlab',
      name: 'GitLab',
      khmer: 'GitLab Platform',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      color: 'bg-orange-700',
      lessons: 16,
      duration: '5-7 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'postman',
      name: 'Postman',
      khmer: 'API Testing Tool',
      icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
      color: 'bg-orange-500',
      lessons: 16,
      duration: '4-6 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'php',
      name: 'PHP',
      khmer: 'ភាសា PHP',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      color: 'bg-indigo-100',
      lessons: 18,
      duration: '6-8 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'laravel',
      name: 'Laravel',
      khmer: 'Laravel Framework',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      color: 'bg-red-100',
      lessons: 20,
      duration: '8-10 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'swift',
      name: 'Swift',
      khmer: 'ភាសា Swift',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
      color: 'bg-orange-200',
      lessons: 18,
      duration: '6-8 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'kotlin',
      name: 'Kotlin',
      khmer: 'ភាសា Kotlin',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      color: 'bg-purple-200',
      lessons: 16,
      duration: '5-7 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'flutter',
      name: 'Flutter',
      khmer: 'Flutter Framework',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      color: 'bg-blue-200',
      lessons: 20,
      duration: '8-10 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'reactnative',
      name: 'React Native',
      khmer: 'React Native Framework',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'bg-cyan-200',
      lessons: 18,
      duration: '7-9 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'ionic',
      name: 'Ionic',
      khmer: 'Ionic Framework',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      color: 'bg-blue-100',
      lessons: 14,
      duration: '5-7 ម៉ោង',
      level: 'មធ្យម',
    },
    {
      id: 'xamarin',
      name: 'Xamarin',
      khmer: 'Xamarin Framework',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg',
      color: 'bg-blue-300',
      lessons: 16,
      duration: '6-8 ម៉ោង',
      level: 'មធ្យម',
    },
    {
    id: 'concept',
    name: 'Concept',
    khmer: 'Concept programming',
    icon: 'https://icons.getbootstrap.com/assets/icons/lightbulb-fill.svg',
    color: 'bg-gray-100',
    lessons: 10,
    duration: '3-5 ម៉ោង',
    level: 'បឋម',
    
  },
  {
    id: 'terminology',
    name: 'Terminology',
    khmer: 'ពាក្យបច្ចេកទេស',
    icon: 'https://www.vectorlogo.zone/logos/docusaurus/docusaurus-icon.svg',
    color: 'bg-gray-200',
    lessons: 10,
    duration: '3-5 ម៉ោង',
    level: 'បឋម',
  }, 
  {
    id: 'mis',
    name: 'Management Information Systems',
    khmer: 'ប្រព័ន្ធព័ត៌មានគ្រប់គ្រង',
    icon: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg',
    color: 'bg-blue-400',
    lessons: 14,
    duration: '5-7 ម៉ោង',
    level: 'មធ្យម',
  },
  {
    id: 'se',
    name: 'Software Engineering Management',
    khmer: 'ការគ្រប់គ្រងវិស្វកម្មកម្មវិធី',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-original.svg',
    color: 'bg-green-200',
    lessons: 18,
    duration: '6-8 ម៉ោង',
    level: 'មធ្យម',
  }
  ];

  const renderCurrentCourse = () => {
    switch (currentCourse) {
      case 'home':
        return <HomePage onSelectCourse={setCurrentCourse} courses={courses} />;
      case 'about':
        return <AboutUs />
      case 'concept':
        return <ConceptCourse />;
      case 'terminology':
        return <TerminologyCourse />;
      case 'html':
        return <HTMLCourse />;
      case 'css':
        return <CSSCourse />;
      case 'bootstrap':
        return <BootstrapCourse />;
      case 'tailwind':
        return <TailwindCourse />;
      case 'javascript':
        return <JavaScriptCourse />;
      case 'react':
        return <ReactCourse />;
      case 'vue':
        return <VueCourse />;
      case 'nextjs':
        return <NextJSCourse />;
      case 'postman':
        return <PostmanCourse />;
      case 'github':
        return <GitHubCourse />;
      case 'gitlab':
        return <GitLabCourse />;
      case 'mysql':
        return <MySQLCourse />;
      case 'nodejs':
        return <NodeJSCourse />;
      case 'expressjs':
        return <ExpressJSCourse />;
      case 'php': 
        return <PHPCourse />;
      case 'laravel':
        return <LaravelCourse />;
      case 'swift':
        return <SwiftCourse />;
      case 'kotlin':
        return <KotlinCourse />;
      case 'flutter':
        return <FlutterCourse />;
      case 'reactnative':
        return <ReactNativeCourse />;

      // case 'mis':
      //   return <MIScourse />;
      // case 'se':
      //   return <SEMCourse />;
      default:
        return <HomePage onSelectCourse={setCurrentCourse} courses={courses} />;
    }
  };

  return (
    <SecurityProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-3">
                {/* Adjusted logo size and path */}
                <img src="/neakrean-logo.png" alt="NeakRean logo" className="w-52 h-32 object-contain" />
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation - Added overflow-y-auto */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              <button
                onClick={() => {
                  setCurrentCourse('home');
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  currentCourse === 'home'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>ទំព័រដើម</span>
              </button>

              <button
                onClick={() => {
                  setCurrentCourse('about');
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  currentCourse === 'about'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>អំពីយើង</span>
              </button>

              <div className="pt-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  មេរៀនសិក្សា
                </h3>
                {courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => {
                      setCurrentCourse(course.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      currentCourse === course.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-8 h-8 ${course.color} rounded-lg flex items-center justify-center p-1`}>
                      <img src={course.icon} alt={course.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-medium">{course.name}</div>
                      <div className="text-xs text-gray-500">{course.khmer}</div>
                    </div>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:ml-64">
          {/* Top Bar */}
          <header className="bg-white shadow-sm border-b">
            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <Menu className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-4">
                <Code className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  {currentCourse === 'home'
                    ? 'ទំព័រដើម'
                    : courses.find((c) => c.id === currentCourse)?.khmer || 'អំពីយើង'}
                </h2>
              </div>

              <div className="flex items-center space-x-3">
                <div className="hidden sm:block text-sm text-gray-950">
                  ថ្ងៃនេះ: {new Date().toLocaleDateString('km-KH')} | {new Date().toLocaleTimeString('km-KH')} 🕒📅
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="min-h-screen">{renderCurrentCourse()}</main>
        </div>
      </div>
    </SecurityProvider>
  );
}

export default App;