import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Express.js និង Node.js Fundamentals ---
import ExpressLesson1_1Content from '../expressjs/lessons/ExpressLesson1_1'; // ណែនាំអំពី Express.js និង Backend Development
import ExpressLesson1_2Content from '../expressjs/lessons/ExpressLesson1_2'; // Setup Development Environment
import ExpressLesson1_3Content from '../expressjs/lessons/ExpressLesson1_3'; // Node.js Core Concepts សម្រាប់ Express.js

// --- ផ្នែកទី ២: Express.js Core Concepts (គោលគំនិតស្នូល) ---
import ExpressLesson2_1Content from '../expressjs/lessons/ExpressLesson2_1'; // Basic Express Application Structure
import ExpressLesson2_2Content from '../expressjs/lessons/ExpressLesson2_2'; // Routing
import ExpressLesson2_3Content from '../expressjs/lessons/ExpressLesson2_3'; // Middleware
import ExpressLesson2_4Content from '../expressjs/lessons/ExpressLesson2_4'; // Request និង Response Objects
import ExpressLesson2_5Content from '../expressjs/lessons/ExpressLesson2_5'; // Serving Static Files

// --- ផ្នែកទី ៣: Working with Databases ---
import ExpressLesson3_1Content from '../expressjs/lessons/ExpressLesson3_1'; // ណែនាំអំពី Databases សម្រាប់ Backend
import ExpressLesson3_2Content from '../expressjs/lessons/ExpressLesson3_2'; // MongoDB ជាមួយ Mongoose
import ExpressLesson3_3Content from '../expressjs/lessons/ExpressLesson3_3'; // SQL Database ជាមួយ Sequelize/Knex.js

// --- ផ្នែកទី ៤: Authentication, Authorization និង Security ---
import ExpressLesson4_1Content from '../expressjs/lessons/ExpressLesson4_1'; // User Authentication
import ExpressLesson4_2Content from '../expressjs/lessons/ExpressLesson4_2'; // Authorization
import ExpressLesson4_3Content from '../expressjs/lessons/ExpressLesson4_3'; // Security Best Practices

// --- ផ្នែកទី ៥: Error Handling, Validation និង Advanced Topics ---
import ExpressLesson5_1Content from '../expressjs/lessons/ExpressLesson5_1'; // Error Handling
import ExpressLesson5_2Content from '../expressjs/lessons/ExpressLesson5_2'; // Input Validation
import ExpressLesson5_3Content from '../expressjs/lessons/ExpressLesson5_3'; // Logging
import ExpressLesson5_4Content from '../expressjs/lessons/ExpressLesson5_4'; // Environment Variables
import ExpressLesson5_5Content from '../expressjs/lessons/ExpressLesson5_5'; // Project Structure និង Code Organization

// --- ផ្នែកទី ៦: Testing និង Deployment ---
import ExpressLesson6_1Content from '../expressjs/lessons/ExpressLesson6_1'; // Testing Express Applications
import ExpressLesson6_2Content from '../expressjs/lessons/ExpressLesson6_2'; // Deployment

// --- ផ្នែកទី ៧: Project-Based Learning ---
import ExpressLesson7_1Content from '../expressjs/lessons/ExpressLesson7_1'; // Project ១: Building a Simple RESTful API
import ExpressLesson7_2Content from '../expressjs/lessons/ExpressLesson7_2'; // Project ២: User Authentication API
import ExpressLesson7_3Content from '../expressjs/lessons/ExpressLesson7_3'; // Project ៣: Full-stack Application

function ExpressJSCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Express.js និង Node.js Fundamentals',
      lessons: [
        { id: 'express-lesson-1-1', ...ExpressLesson1_1Content },
        { id: 'express-lesson-1-2', ...ExpressLesson1_2Content },
        { id: 'express-lesson-1-3', ...ExpressLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Express.js Core Concepts (គោលគំនិតស្នូល)',
      lessons: [
        { id: 'express-lesson-2-1', ...ExpressLesson2_1Content },
        { id: 'express-lesson-2-2', ...ExpressLesson2_2Content },
        { id: 'express-lesson-2-3', ...ExpressLesson2_3Content },
        { id: 'express-lesson-2-4', ...ExpressLesson2_4Content },
        { id: 'express-lesson-2-5', ...ExpressLesson2_5Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Working with Databases',
      lessons: [
        { id: 'express-lesson-3-1', ...ExpressLesson3_1Content },
        { id: 'express-lesson-3-2', ...ExpressLesson3_2Content },
        { id: 'express-lesson-3-3', ...ExpressLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Authentication, Authorization និង Security',
      lessons: [
        { id: 'express-lesson-4-1', ...ExpressLesson4_1Content },
        { id: 'express-lesson-4-2', ...ExpressLesson4_2Content },
        { id: 'express-lesson-4-3', ...ExpressLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Error Handling, Validation និង Advanced Topics',
      lessons: [
        { id: 'express-lesson-5-1', ...ExpressLesson5_1Content },
        { id: 'express-lesson-5-2', ...ExpressLesson5_2Content },
        { id: 'express-lesson-5-3', ...ExpressLesson5_3Content },
        { id: 'express-lesson-5-4', ...ExpressLesson5_4Content },
        { id: 'express-lesson-5-5', ...ExpressLesson5_5Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Testing និង Deployment',
      lessons: [
        { id: 'express-lesson-6-1', ...ExpressLesson6_1Content },
        { id: 'express-lesson-6-2', ...ExpressLesson6_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Project-Based Learning',
      lessons: [
        { id: 'express-lesson-7-1', ...ExpressLesson7_1Content },
        { id: 'express-lesson-7-2', ...ExpressLesson7_2Content },
        { id: 'express-lesson-7-3', ...ExpressLesson7_3Content },
      ] as Lesson[],
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const selectLesson = (lessonId: string) => {
    setSelectedLesson(lessonId);
  };

  const getCurrentLesson = () => {
    for (const section of courseStructure) {
      const lesson = section.lessons.find((l) => l.id === selectedLesson);
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Express.js</h1>
            <p className="text-lg opacity-90">Node.js Web Framework</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន Express.js ពីមូលដ្ឋានគ្រឹះរហូតដល់ការបង្កើត Backend APIs និង Server-side Applications។
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់។
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">24</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">60+</div>
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
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center space-x-2">
          <BookOpen className="w-5 h-5" />
          <span>ឯកសារយោង (Documentation)</span>
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-center space-x-2">
            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Express.js Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Node.js Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">MongoDB Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Sequelize Documentation</span>
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
                <a href="https://www.youtube.com/playlist?list=PLBngdQ_FhSMmivvuDnU_HTyYIyeCsUce-" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Programming with NIT - node.js express.js mysql tutorial | khmer</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=hly-11ZcH2s" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Rorn - Express Js And Node Js Rest API Crash Course Full CRUD</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLuEdNLfGOtnXW1LJr3cKTl9IPp-9YjreJ" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Khode Academy - Express.js | Web Server នៅលើ Node.js</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL_cUvD4qzbkwjmjy-KjbieZ8J9cGwxZpC" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Anson - Express JS Full Tutorial </span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLp50dWW_m40Vruw9uKGNqySCNFLXK5YiO" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">ARCTutorials - Express JS Tutorial For Beginners</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=CnH3kAXSrmU&t=53s" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Traversy Media - Express Crash Course</span>
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
          គន្លឹះក្នុងការរៀន Express.js ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>យល់ដឹងពី Node.js Fundamentals ឲ្យច្បាស់: ជាពិសេស Asynchronous JavaScript និង Core Modules។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ឲ្យបានច្រើន: ការ build API ឬ Server ដោយខ្លួនឯង គឺជាវិធីល្អបំផុតក្នុងការរៀន។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមពីតូចទៅធំ: ចាប់ផ្តើមពី Basic Routing និង Middleware បន្ទាប់មករៀន Database, Authentication, និង Error Handling។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>រៀបចំ Code ឲ្យមានរបៀប: ការយល់ដឹងពី Project Structure ជួយឲ្យ Code របស់អ្នកងាយស្រួល Maintain។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អាន Documentation: ឯកសាររបស់ Express.js និង Libraries ផ្សេងៗគឺលម្អិត និងត្រូវបាន Update ជានិច្ច។</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExpressJSCourse;