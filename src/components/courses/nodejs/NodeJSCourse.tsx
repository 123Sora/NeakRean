import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Node.js និង JavaScript Fundamentals ---
import NodeJSLesson1_1Content from '../nodejs/lessons/NodeJSLesson1_1'; // ណែនាំអំពី Node.js
import NodeJSLesson1_2Content from '../nodejs/lessons/NodeJSLesson1_2'; // JavaScript Fundamentals សម្រាប់ Node.js
import NodeJSLesson1_3Content from '../nodejs/lessons/NodeJSLesson1_3'; // Node.js Global Objects និង Process

// --- ផ្នែកទី ២: Node.js Core Concepts និង Modules ---
import NodeJSLesson2_1Content from '../nodejs/lessons/NodeJSLesson2_1'; // Modules ក្នុង Node.js
import NodeJSLesson2_2Content from '../nodejs/lessons/NodeJSLesson2_2'; // NPM (Node Package Manager)
import NodeJSLesson2_3Content from '../nodejs/lessons/NodeJSLesson2_3'; // Event Loop និង Asynchronous Programming
import NodeJSLesson2_4Content from '../nodejs/lessons/NodeJSLesson2_4'; // File System (fs Module)
import NodeJSLesson2_5Content from '../nodejs/lessons/NodeJSLesson2_5'; // Path Module និង OS Module
import NodeJSLesson2_6Content from '../nodejs/lessons/NodeJSLesson2_6'; // HTTP Module

// --- ផ្នែកទី ៣: Building Web Applications with Express.js ---
import NodeJSLesson3_1Content from '../nodejs/lessons/NodeJSLesson3_1'; // ណែនាំអំពី Express.js
import NodeJSLesson3_2Content from '../nodejs/lessons/NodeJSLesson3_2'; // Routing ក្នុង Express.js
import NodeJSLesson3_3Content from '../nodejs/lessons/NodeJSLesson3_3'; // Middleware ក្នុង Express.js
import NodeJSLesson3_4Content from '../nodejs/lessons/NodeJSLesson3_4'; // Request និង Response Objects
import NodeJSLesson3_5Content from '../nodejs/lessons/NodeJSLesson3_5'; // Templating Engines
import NodeJSLesson3_6Content from '../nodejs/lessons/NodeJSLesson3_6'; // Static Files

// --- ផ្នែកទី ៤: Working with Databases ---
import NodeJSLesson4_1Content from '../nodejs/lessons/NodeJSLesson4_1'; // ណែនាំអំពី Databases
import NodeJSLesson4_2Content from '../nodejs/lessons/NodeJSLesson4_2'; // MongoDB ជាមួយ Mongoose
import NodeJSLesson4_3Content from '../nodejs/lessons/NodeJSLesson4_3'; // SQL Databases ជាមួយ Sequelize / Knex.js

// --- ផ្នែកទី ៥: Authentication និង Authorization ---
import NodeJSLesson5_1Content from '../nodejs/lessons/NodeJSLesson5_1'; // User Authentication
import NodeJSLesson5_2Content from '../nodejs/lessons/NodeJSLesson5_2'; // Authorization

// --- ផ្នែកទី ៦: Advanced Node.js Topics និង Deployment ---
import NodeJSLesson6_1Content from '../nodejs/lessons/NodeJSLesson6_1'; // Error Handling
import NodeJSLesson6_2Content from '../nodejs/lessons/NodeJSLesson6_2'; // Logging
import NodeJSLesson6_3Content from '../nodejs/lessons/NodeJSLesson6_3'; // Environment Variables
import NodeJSLesson6_4Content from '../nodejs/lessons/NodeJSLesson6_4'; // Testing Node.js Applications
import NodeJSLesson6_5Content from '../nodejs/lessons/NodeJSLesson6_5'; // Real-time Applications ជាមួយ Socket.io
import NodeJSLesson6_6Content from '../nodejs/lessons/NodeJSLesson6_6'; // Deployment

// --- ផ្នែកទី ៧: Project-Based Learning និង Best Practices ---
import NodeJSLesson7_1Content from '../nodejs/lessons/NodeJSLesson7_1'; // Building a RESTful API
import NodeJSLesson7_2Content from '../nodejs/lessons/NodeJSLesson7_2'; // Building a Full-stack Application
import NodeJSLesson7_3Content from '../nodejs/lessons/NodeJSLesson7_3'; // Best Practices និង Performance Optimization

function NodeJSCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Node.js និង JavaScript Fundamentals',
      lessons: [
        { id: 'nodejs-lesson-1-1', ...NodeJSLesson1_1Content },
        { id: 'nodejs-lesson-1-2', ...NodeJSLesson1_2Content },
        { id: 'nodejs-lesson-1-3', ...NodeJSLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Node.js Core Concepts និង Modules',
      lessons: [
        { id: 'nodejs-lesson-2-1', ...NodeJSLesson2_1Content },
        { id: 'nodejs-lesson-2-2', ...NodeJSLesson2_2Content },
        { id: 'nodejs-lesson-2-3', ...NodeJSLesson2_3Content },
        { id: 'nodejs-lesson-2-4', ...NodeJSLesson2_4Content },
        { id: 'nodejs-lesson-2-5', ...NodeJSLesson2_5Content },
        { id: 'nodejs-lesson-2-6', ...NodeJSLesson2_6Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Building Web Applications with Express.js',
      lessons: [
        { id: 'nodejs-lesson-3-1', ...NodeJSLesson3_1Content },
        { id: 'nodejs-lesson-3-2', ...NodeJSLesson3_2Content },
        { id: 'nodejs-lesson-3-3', ...NodeJSLesson3_3Content },
        { id: 'nodejs-lesson-3-4', ...NodeJSLesson3_4Content },
        { id: 'nodejs-lesson-3-5', ...NodeJSLesson3_5Content },
        { id: 'nodejs-lesson-3-6', ...NodeJSLesson3_6Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Working with Databases',
      lessons: [
        { id: 'nodejs-lesson-4-1', ...NodeJSLesson4_1Content },
        { id: 'nodejs-lesson-4-2', ...NodeJSLesson4_2Content },
        { id: 'nodejs-lesson-4-3', ...NodeJSLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Authentication និង Authorization',
      lessons: [
        { id: 'nodejs-lesson-5-1', ...NodeJSLesson5_1Content },
        { id: 'nodejs-lesson-5-2', ...NodeJSLesson5_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Advanced Node.js Topics និង Deployment',
      lessons: [
        { id: 'nodejs-lesson-6-1', ...NodeJSLesson6_1Content },
        { id: 'nodejs-lesson-6-2', ...NodeJSLesson6_2Content },
        { id: 'nodejs-lesson-6-3', ...NodeJSLesson6_3Content },
        { id: 'nodejs-lesson-6-4', ...NodeJSLesson6_4Content },
        { id: 'nodejs-lesson-6-5', ...NodeJSLesson6_5Content },
        { id: 'nodejs-lesson-6-6', ...NodeJSLesson6_6Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Project-Based Learning និង Best Practices',
      lessons: [
        { id: 'nodejs-lesson-7-1', ...NodeJSLesson7_1Content },
        { id: 'nodejs-lesson-7-2', ...NodeJSLesson7_2Content },
        { id: 'nodejs-lesson-7-3', ...NodeJSLesson7_3Content },
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ភាសា Node.js</h1>
            <p className="text-lg opacity-90">Server-side JavaScript Runtime</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន Node.js ពីមូលដ្ឋានគ្រឹះរហូតដល់ការបង្កើត Back-end និង Full-stack Application ប្រកបដោយប្រសិទ្ធភាព។ 
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">29</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">80+</div>
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
            <a href="https://nodejs.org/docs" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Node.js Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://expressjs.com/en/starter/installing.html" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Express.js Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://mongodb.com/docs" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">MongoDB Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.w3schools.com/nodejs/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools Node.js Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">MDN Web Docs - Express/Node.js</span>
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
                <a href="https://www.youtube.com/playlist?list=PLuEdNLfGOtnW-wD7kT3rqZWrI_PlR3nsk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Khode Academy - Node.js Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLvX1-UB1rBNPplEPZeKMpsH0AC3r7-mG1" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">តំបន់អាយធី - IT Zone - Node.js Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              {/* <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=example_cs101kh" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">CS101KH - Node.js Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL1BztTYDF-QPdTvgsjf8HOwO4ZVl_LhxS" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">procademy - Node.js Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Codevolution - Node.js Crash Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Dave Gray - Node.js Full Course</span>
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
          គន្លឹះក្នុងការរៀន​​ភាសា Node.js ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>យល់ដឹងពី JavaScript Asynchronous Programming ឲ្យច្បាស់</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ឲ្យបានច្រើន: ការបង្កើត Project ផ្ទាល់ខ្លួន គឺជាវិធីល្អបំផុតក្នុងការរៀន។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមពីតូចទៅធំ: ចាប់ផ្តើមពី HTTP Module មូលដ្ឋាន បន្ទាប់មករៀន Express.js, Databases, និង Authentication។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ Documentation ឲ្យបានញឹកញាប់</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>កុំខ្លាចនឹង Debug: ការរៀន Debugging គឺជាជំនាញដ៏សំខាន់សម្រាប់ Developer។</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NodeJSCourse;