import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី JavaScript និង Setup ---
import JSLesson1_1Content from '../javascript/lessons/JSLesson1_1'; // ណែនាំអំពី JavaScript
import JSLesson1_2Content from '../javascript/lessons/JSLesson1_2'; // ការដំឡើង និងចាប់ផ្តើមសរសេរ Code

// --- ផ្នែកទី ២: JavaScript Fundamentals (មូលដ្ឋានគ្រឹះ) ---
import JSLesson2_1Content from '../javascript/lessons/JSLesson2_1'; // Variables និង Data Types
import JSLesson2_2Content from '../javascript/lessons/JSLesson2_2'; // Operators
import JSLesson2_3Content from '../javascript/lessons/JSLesson2_3'; // Control Flow
import JSLesson2_4Content from '../javascript/lessons/JSLesson2_4'; // Functions

// --- ផ្នែកទី ៣: Intermediate JavaScript (កម្រិតមធ្យម) ---
import JSLesson3_1Content from '../javascript/lessons/JSLesson3_1'; // Arrays
import JSLesson3_2Content from '../javascript/lessons/JSLesson3_2'; // Objects
import JSLesson3_3Content from '../javascript/lessons/JSLesson3_3'; // String Methods
import JSLesson3_4Content from '../javascript/lessons/JSLesson3_4'; // Scope និង Hoisting
import JSLesson3_5Content from '../javascript/lessons/JSLesson3_5'; // Type Conversion និង Coercion

// --- ផ្នែកទី ៤: Modern JavaScript (ES6+) ---
import JSLesson4_1Content from '../javascript/lessons/JSLesson4_1'; // ES6+ Features
import JSLesson4_2Content from '../javascript/lessons/JSLesson4_2'; // Classes
import JSLesson4_3Content from '../javascript/lessons/JSLesson4_3'; // Modules
import JSLesson4_4Content from '../javascript/lessons/JSLesson4_4'; // Promises និង Async/Await

// --- ផ្នែកទី ៥: DOM Manipulation (ការផ្លាស់ប្តូរ HTML/CSS) ---
import JSLesson5_1Content from '../javascript/lessons/JSLesson5_1'; // ការណែនាំអំពី DOM
import JSLesson5_2Content from '../javascript/lessons/JSLesson5_2'; // ការជ្រើសរើស Elements
import JSLesson5_3Content from '../javascript/lessons/JSLesson5_3'; // ការផ្លាស់ប្តូរ Elements
import JSLesson5_4Content from '../javascript/lessons/JSLesson5_4'; // Event Handling

// --- ផ្នែកទី ៦: Asynchronous JavaScript និង Web APIs ---
import JSLesson6_1Content from '../javascript/lessons/JSLesson6_1'; // Fetch API
import JSLesson6_2Content from '../javascript/lessons/JSLesson6_2'; // Web Storage API
import JSLesson6_3Content from '../javascript/lessons/JSLesson6_3'; // Geolocation API
import JSLesson6_4Content from '../javascript/lessons/JSLesson6_4'; // Timers

// --- ផ្នែកទី ៧: Advanced JavaScript Concepts និង Best Practices ---
import JSLesson7_1Content from '../javascript/lessons/JSLesson7_1'; // Error Handling
import JSLesson7_2Content from '../javascript/lessons/JSLesson7_2'; // Closures
import JSLesson7_3Content from '../javascript/lessons/JSLesson7_3'; // Prototypes និង Prototypal Inheritance
import JSLesson7_4Content from '../javascript/lessons/JSLesson7_4'; // this Keyword
import JSLesson7_5Content from '../javascript/lessons/JSLesson7_5'; // Best Practices និង Code Quality

// --- ផ្នែកទី ៨: Project-Based Learning (ការអនុវត្តន៍គម្រោង) ---
import JSLesson8_1Content from '../javascript/lessons/JSLesson8_1'; // Interactive To-Do List
import JSLesson8_2Content from '../javascript/lessons/JSLesson8_2'; // Simple Calculator
import JSLesson8_3Content from '../javascript/lessons/JSLesson8_3'; // Weather App
import JSLesson8_4Content from '../javascript/lessons/JSLesson8_4'; // Basic Quiz Game

// --- ផ្នែកទី ៩: Next Steps (ជំហានបន្ទាប់) ---
import JSLesson9_1Content from '../javascript/lessons/JSLesson9_1'; // JavaScript Frameworks/Libraries
import JSLesson9_2Content from '../javascript/lessons/JSLesson9_2'; // Node.js
import JSLesson9_3Content from '../javascript/lessons/JSLesson9_3'; // Version Control (Git)

function JavaScriptCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី JavaScript និង Setup',
      lessons: [
        { id: 'js-lesson-1-1', ...JSLesson1_1Content },
        { id: 'js-lesson-1-2', ...JSLesson1_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: JavaScript Fundamentals (មូលដ្ឋានគ្រឹះ)',
      lessons: [
        { id: 'js-lesson-2-1', ...JSLesson2_1Content },
        { id: 'js-lesson-2-2', ...JSLesson2_2Content },
        { id: 'js-lesson-2-3', ...JSLesson2_3Content },
        { id: 'js-lesson-2-4', ...JSLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Intermediate JavaScript (កម្រិតមធ្យម)',
      lessons: [
        { id: 'js-lesson-3-1', ...JSLesson3_1Content },
        { id: 'js-lesson-3-2', ...JSLesson3_2Content },
        { id: 'js-lesson-3-3', ...JSLesson3_3Content },
        { id: 'js-lesson-3-4', ...JSLesson3_4Content },
        { id: 'js-lesson-3-5', ...JSLesson3_5Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Modern JavaScript (ES6+)',
      lessons: [
        { id: 'js-lesson-4-1', ...JSLesson4_1Content },
        { id: 'js-lesson-4-2', ...JSLesson4_2Content },
        { id: 'js-lesson-4-3', ...JSLesson4_3Content },
        { id: 'js-lesson-4-4', ...JSLesson4_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: DOM Manipulation (ការផ្លាស់ប្តូរ HTML/CSS)',
      lessons: [
        { id: 'js-lesson-5-1', ...JSLesson5_1Content },
        { id: 'js-lesson-5-2', ...JSLesson5_2Content },
        { id: 'js-lesson-5-3', ...JSLesson5_3Content },
        { id: 'js-lesson-5-4', ...JSLesson5_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Asynchronous JavaScript និង Web APIs',
      lessons: [
        { id: 'js-lesson-6-1', ...JSLesson6_1Content },
        { id: 'js-lesson-6-2', ...JSLesson6_2Content },
        { id: 'js-lesson-6-3', ...JSLesson6_3Content },
        { id: 'js-lesson-6-4', ...JSLesson6_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Advanced JavaScript Concepts និង Best Practices',
      lessons: [
        { id: 'js-lesson-7-1', ...JSLesson7_1Content },
        { id: 'js-lesson-7-2', ...JSLesson7_2Content },
        { id: 'js-lesson-7-3', ...JSLesson7_3Content },
        { id: 'js-lesson-7-4', ...JSLesson7_4Content },
        { id: 'js-lesson-7-5', ...JSLesson7_5Content },
      ] as Lesson[],
    },
    {
      id: 'section-8',
      title: 'ផ្នែកទី ៨: Project-Based Learning (ការអនុវត្តន៍គម្រោង)',
      lessons: [
        { id: 'js-lesson-8-1', ...JSLesson8_1Content },
        { id: 'js-lesson-8-2', ...JSLesson8_2Content },
        { id: 'js-lesson-8-3', ...JSLesson8_3Content },
        { id: 'js-lesson-8-4', ...JSLesson8_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-9',
      title: 'ផ្នែកទី ៩: Next Steps (ជំហានបន្ទាប់)',
      lessons: [
        { id: 'js-lesson-9-1', ...JSLesson9_1Content },
        { id: 'js-lesson-9-2', ...JSLesson9_2Content },
        { id: 'js-lesson-9-3', ...JSLesson9_3Content },
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ភាសា JavaScript</h1>
            <p className="text-lg opacity-90">JavaScript Programming Language</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀនភាសា JavaScript ពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតខ្ពស់ ដើម្បីបង្កើតគេហទំព័រដែលមានអន្តរកម្ម និងអាចប្រើប្រាស់សម្រាប់ Backend, Mobile Apps និង Desktop Apps។
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">35</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">9</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">60+</div>
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
            <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools JavaScript Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">MDN Web Docs - JavaScript</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">JavaScript.info - The Modern JavaScript Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">freeCodeCamp - JavaScript Algorithms and Data Structures</span>
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
                <a href="https://www.youtube.com/playlist?list=PLuEdNLfGOtnUoeb8D2itGMIZayTi9ViOv" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Khode Academy - JavaScript Tutorials</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLIsGHGMXD0Il0i56mQlkNV8ZvzFemkDB1" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> Ing Davann-អ៊ីង ដាវ៉ាន់ - JavaScript Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
               <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=1ATw63UG5Ak&t=348s" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> reanmore - JavaScript Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLVk04hbxWvl5zihwjK6LHHm4YW__yTto3" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> Khmer Coding - JavaScript Lessons</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLbTTdA3Pi-hsUpqFnjdh27aEsgNkrFH_P" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">StepToStepCode - JavaScript Tutorials</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Net Ninja - JavaScript Tutorial for Beginners</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=BI1o2H9z9fo" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Traversy Media - JavaScript Full Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=Pyv0tMm5i_w" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">GreatStack - JavaScript Full Course</span>
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
          គន្លឹះក្នុងការរៀនភាសា JavaScript ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ឲ្យបានច្រើន: ការសរសេរ Code ដោយខ្លួនឯង និងដោះស្រាយបញ្ហាគឺជាវិធីដែលល្អបំផុតក្នុងការរៀន។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>យល់ដឹងពី Concepts ឲ្យច្បាស់: កុំគ្រាន់តែចាំ Syntax តែត្រូវយល់ពីរបៀបដែល Code ដំណើរការ។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ Browser Developer Tools: សម្រាប់ Debugging, ការមើល Console, និងការ Inspect DOM។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>កុំខ្លាចនឹងធ្វើខុស: កំហុសគឺជាផ្នែកមួយនៃការរៀន។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អាន Documentation</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JavaScriptCourse;