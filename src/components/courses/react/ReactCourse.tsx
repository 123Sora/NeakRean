import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី ReactJS និង JavaScript Fundamentals ---
import ReactLesson1_1Content from '../react/lessons/ReactLesson1_1'; // ណែនាំអំពី ReactJS
import ReactLesson1_2Content from '../react/lessons/ReactLesson1_2'; // Setup Development Environment

// --- ផ្នែកទី ២: ReactJS Core Concepts ---
import ReactLesson2_1Content from '../react/lessons/ReactLesson2_1'; // JSX
import ReactLesson2_2Content from '../react/lessons/ReactLesson2_2'; // Components
import ReactLesson2_3Content from '../react/lessons/ReactLesson2_3'; // Props
import ReactLesson2_4Content from '../react/lessons/ReactLesson2_4'; // State and Hooks
import ReactLesson2_5Content from '../react/lessons/ReactLesson2_5'; // Event Handling
import ReactLesson2_6Content from '../react/lessons/ReactLesson2_6'; // Conditional Rendering
import ReactLesson2_7Content from '../react/lessons/ReactLesson2_7'; // List Rendering

// --- ផ្នែកទី ៣: ReactJS Hooks  ---
import ReactLesson3_1Content from '../react/lessons/ReactLesson3_1'; // useEffect Hook
import ReactLesson3_2Content from '../react/lessons/ReactLesson3_2'; // useContext Hook
import ReactLesson3_3Content from '../react/lessons/ReactLesson3_3'; // useRef Hook
import ReactLesson3_4Content from '../react/lessons/ReactLesson3_4'; // useReducer Hook
import ReactLesson3_5Content from '../react/lessons/ReactLesson3_5'; // useCallback and useMemo Hooks

// --- ផ្នែកទី ៤: React Routing និង State Management ---
import ReactLesson4_1Content from '../react/lessons/ReactLesson4_1'; // React Router
import ReactLesson4_2Content from '../react/lessons/ReactLesson4_2'; // State Management with Redux
import ReactLesson4_3Content from '../react/lessons/ReactLesson4_3'; // Data Fetching Libraries

// --- ផ្នែកទី ៥: Advanced ReactJS Concepts និង Tooling ---
import ReactLesson5_1Content from '../react/lessons/ReactLesson5_1'; // Form Handling
import ReactLesson5_2Content from '../react/lessons/ReactLesson5_2'; // Context API (Advanced)
import ReactLesson5_3Content from '../react/lessons/ReactLesson5_3'; // Custom Hooks
import ReactLesson5_4Content from '../react/lessons/ReactLesson5_4'; // Error Boundaries
import ReactLesson5_5Content from '../react/lessons/ReactLesson5_5'; // Performance Optimization
import ReactLesson5_6Content from '../react/lessons/ReactLesson5_6'; // Testing React Components
import ReactLesson5_7Content from '../react/lessons/ReactLesson5_7'; // Next.js / Remix
import ReactLesson5_8Content from '../react/lessons/ReactLesson5_8'; // Deployment

// --- ផ្នែកទី ៦: Project-Based Learning ---
import ReactLesson6_1Content from '../react/lessons/ReactLesson6_1'; // Simple Todo List App
import ReactLesson6_2Content from '../react/lessons/ReactLesson6_2'; // E-commerce Product Listing
import ReactLesson6_3Content from '../react/lessons/ReactLesson6_3'; // Basic Blog/Portfolio Website
import ReactLesson6_4Content from '../react/lessons/ReactLesson6_4'; // Full-stack MERN Project
import ReactLesson6_5Content from '../react/lessons/ReactLesson6_5'; // Best Practices

function ReactCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី ReactJS និង JavaScript Fundamentals',
      lessons: [
        { id: 'react-lesson-1-1', ...ReactLesson1_1Content },
        { id: 'react-lesson-1-2', ...ReactLesson1_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: ReactJS Core Concepts (គោលគំនិតស្នូល)',
      lessons: [
        { id: 'react-lesson-2-1', ...ReactLesson2_1Content },
        { id: 'react-lesson-2-2', ...ReactLesson2_2Content },
        { id: 'react-lesson-2-3', ...ReactLesson2_3Content },
        { id: 'react-lesson-2-4', ...ReactLesson2_4Content },
        { id: 'react-lesson-2-5', ...ReactLesson2_5Content },
        { id: 'react-lesson-2-6', ...ReactLesson2_6Content },
        { id: 'react-lesson-2-7', ...ReactLesson2_7Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: ReactJS Hooks',
      lessons: [
        { id: 'react-lesson-3-1', ...ReactLesson3_1Content },
        { id: 'react-lesson-3-2', ...ReactLesson3_2Content },
        { id: 'react-lesson-3-3', ...ReactLesson3_3Content },
        { id: 'react-lesson-3-4', ...ReactLesson3_4Content },
        { id: 'react-lesson-3-5', ...ReactLesson3_5Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: React Routing និង State Management',
      lessons: [
        { id: 'react-lesson-4-1', ...ReactLesson4_1Content },
        { id: 'react-lesson-4-2', ...ReactLesson4_2Content },
        { id: 'react-lesson-4-3', ...ReactLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Advanced ReactJS Concepts និង Tooling',
      lessons: [
        { id: 'react-lesson-5-1', ...ReactLesson5_1Content },
        { id: 'react-lesson-5-2', ...ReactLesson5_2Content },
        { id: 'react-lesson-5-3', ...ReactLesson5_3Content },
        { id: 'react-lesson-5-4', ...ReactLesson5_4Content },
        { id: 'react-lesson-5-5', ...ReactLesson5_5Content },
        { id: 'react-lesson-5-6', ...ReactLesson5_6Content },
        { id: 'react-lesson-5-7', ...ReactLesson5_7Content },
        { id: 'react-lesson-5-8', ...ReactLesson5_8Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Project-Based Learning (ការអនុវត្តន៍គម្រោង)',
      lessons: [
        { id: 'react-lesson-6-1', ...ReactLesson6_1Content },
        { id: 'react-lesson-6-2', ...ReactLesson6_2Content },
        { id: 'react-lesson-6-3', ...ReactLesson6_3Content },
        { id: 'react-lesson-6-4', ...ReactLesson6_4Content },
        { id: 'react-lesson-6-5', ...ReactLesson6_5Content },
      ] as Lesson[],
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const selectLesson = (lessonId: string) => {
    setSelectedLesson(lessonId);
  };

  const getCurrentLesson = () => {
    for (const section of courseStructure) {
      const lesson = section.lessons.find(l => l.id === selectedLesson);
      if (lesson) return lesson;
    }
    return null;
  };

  const currentLesson = getCurrentLesson();

  if (currentLesson) {
    return <LessonViewer lesson={currentLesson} onBack={() => setSelectedLesson(null)} />;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ភាសា ReactJS</h1>
            <p className="text-lg opacity-90">ReactJS Programming Library</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀនភាសា ReactJS ពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតខ្ពស់ ដើម្បីបង្កើតគេហទំព័រដែលមានអន្តរកម្ម និង Single-Page Applications ដ៏មានប្រសិទ្ធភាព។
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">30</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">80+</div>
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm opacity-75">លំហាត់</div>
          </div>
        </div>
      </div>

      {/* Course Structure */}
      <div className="space-y-6">
        {courseStructure.map((section) => (
          <div key={section.id} className="bg-white rounded-xl shadow-sm border">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              {expandedSections[section.id] ? (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedSections[section.id] && (
              <div className="px-6 pb-6 border-t bg-gray-50">
                <div className="space-y-3 mt-4">
                  {section.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      onClick={() => selectLesson(lesson.id)}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-blue-200 hover:bg-blue-50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-200">
                          <Play className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-blue-700">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {lesson.objectives.length} គោលបំណង • ឧទាហរណ៍ • Quiz • Lab
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <FileText className="w-4 h-4" />
                        <HelpCircle className="w-4 h-4" />
                        <Code className="w-4 h-4" />
                        <ChevronRight className="w-4 h-4 group-hover:text-blue-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Course Documents */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center space-x-2">
          <BookOpen className="w-5 h-5" />
          <span>ឯកសារយោង (Documentation)</span>
        </h3>
        <ul className="space-y-2 text-green-700">
          <li className="flex items-center space-x-2">
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">React Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.w3schools.com/react/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools React Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">freeCodeCamp - React Course</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://beta.reactjs.org/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">React Beta Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
        </ul>
      </div>

      {/* YouTube Tutorials */}
      <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center space-x-2">
          <Youtube className="w-5 h-5" />
          <span>វីដេអូបង្រៀន (YouTube Tutorials)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាខ្មែរ (Khmer) 🇰🇭</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLoeO4Jo4aJBo08H5HLGaezwimwpmch4TE" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Rorn - React JS Crash Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=dmzr_BUsvyY" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">reanmore - React Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL_Psn3QYIcybFQsQwPVYqiyn-g4HqrNEg" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">THE SAKKARIN - React Tutorials</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English) </h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Codevolution - React Tutorial for Beginners</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLLGlmW7jT-nROpfmMFDj7ccjCujXOLIey" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Studytonight with Abhishek - React Course for Beginners </span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=LDB4uaJ87e0" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Traversy Media - React Crash Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          គន្លឹះក្នុងការរៀនភាសា ReactJS ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>យល់ដឹងពី JavaScript ES6+ និង Asynchronous JavaScript ឲ្យច្បាស់: នេះគឺជាមូលដ្ឋានគ្រឹះដ៏សំខាន់សម្រាប់ React។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ឲ្យបានច្រើន: ការ build personal Project គឺជាវិធីល្អបំផុតក្នុងការរៀន។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមពីតូចទៅធំ: ចាប់ផ្តើមពី Components, Props, State បន្ទាប់មករៀន Hooks, Routing, និង State Management។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ React DevTools: Extension នេះជួយអ្នក Debug និងយល់ពីរបៀបដែល React App របស់អ្នកដំណើរការ។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អាន Documentation: ឯកសាររបស់ React គឺលម្អិត ច្បាស់លាស់ និងត្រូវបាន Update ជានិច្ច។</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReactCourse;