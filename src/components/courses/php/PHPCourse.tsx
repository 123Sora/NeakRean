import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី PHP និង Fundamentals ---
import PHPLesson1_1Content from '../php/lessons/PHPLesson1_1'; // ណែនាំអំពី PHP
import PHPLesson1_2Content from '../php/lessons/PHPLesson1_2'; // PHP Syntax និង Variables
import PHPLesson1_3Content from '../php/lessons/PHPLesson1_3'; // Data Types និង Operators

// --- ផ្នែកទី ២: Control Structures និង Functions ---
import PHPLesson2_1Content from '../php/lessons/PHPLesson2_1'; // Conditional Statements
import PHPLesson2_2Content from '../php/lessons/PHPLesson2_2'; // Loops
import PHPLesson2_3Content from '../php/lessons/PHPLesson2_3'; // Functions
import PHPLesson2_4Content from '../php/lessons/PHPLesson2_4'; // Arrays និង Array Functions

// --- ផ្នែកទី ៣: Form Handling និង File Operations ---
import PHPLesson3_1Content from '../php/lessons/PHPLesson3_1'; // Form Processing
import PHPLesson3_2Content from '../php/lessons/PHPLesson3_2'; // File Handling
import PHPLesson3_3Content from '../php/lessons/PHPLesson3_3'; // Sessions និង Cookies

// --- ផ្នែកទី ៤: Database Integration ---
import PHPLesson4_1Content from '../php/lessons/PHPLesson4_1'; // MySQL Basics
import PHPLesson4_2Content from '../php/lessons/PHPLesson4_2'; // PDO for Database Connectivity
import PHPLesson4_3Content from '../php/lessons/PHPLesson4_3'; // Prepared Statements and Security

// --- ផ្នែកទី ៥: Object-Oriented Programming (OOP) ---
import PHPLesson5_1Content from '../php/lessons/PHPLesson5_1'; // OOP Fundamentals
import PHPLesson5_2Content from '../php/lessons/PHPLesson5_2'; // Classes and Objects
import PHPLesson5_3Content from '../php/lessons/PHPLesson5_3'; // Inheritance and Interfaces

// --- ផ្នែកទី ៦: Advanced PHP Topics ---
import PHPLesson6_1Content from '../php/lessons/PHPLesson6_1'; // Error Handling and Debugging
import PHPLesson6_2Content from '../php/lessons/PHPLesson6_2'; // PHP Security Best Practices
import PHPLesson6_3Content from '../php/lessons/PHPLesson6_3'; // Working with APIs
import PHPLesson6_4Content from '../php/lessons/PHPLesson6_4'; // Composer and Dependency Management

// --- ផ្នែកទី ៧: Project-Based Learning ---
import PHPLesson7_1Content from '../php/lessons/PHPLesson7_1'; // Building a CRUD Application
import PHPLesson7_2Content from '../php/lessons/PHPLesson7_2'; // Creating a CMS with PHP
import PHPLesson7_3Content from '../php/lessons/PHPLesson7_3'; // Best Practices and Performance Optimization

function PHPCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី PHP និង Fundamentals',
      lessons: [
        { id: 'php-lesson-1-1', ...PHPLesson1_1Content },
        { id: 'php-lesson-1-2', ...PHPLesson1_2Content },
        { id: 'php-lesson-1-3', ...PHPLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Control Structures និង Functions',
      lessons: [
        { id: 'php-lesson-2-1', ...PHPLesson2_1Content },
        { id: 'php-lesson-2-2', ...PHPLesson2_2Content },
        { id: 'php-lesson-2-3', ...PHPLesson2_3Content },
        { id: 'php-lesson-2-4', ...PHPLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Form Handling និង File Operations',
      lessons: [
        { id: 'php-lesson-3-1', ...PHPLesson3_1Content },
        { id: 'php-lesson-3-2', ...PHPLesson3_2Content },
        { id: 'php-lesson-3-3', ...PHPLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Database Integration',
      lessons: [
        { id: 'php-lesson-4-1', ...PHPLesson4_1Content },
        { id: 'php-lesson-4-2', ...PHPLesson4_2Content },
        { id: 'php-lesson-4-3', ...PHPLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Object-Oriented Programming (OOP)',
      lessons: [
        { id: 'php-lesson-5-1', ...PHPLesson5_1Content },
        { id: 'php-lesson-5-2', ...PHPLesson5_2Content },
        { id: 'php-lesson-5-3', ...PHPLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Advanced PHP Topics',
      lessons: [
        { id: 'php-lesson-6-1', ...PHPLesson6_1Content },
        { id: 'php-lesson-6-2', ...PHPLesson6_2Content },
        { id: 'php-lesson-6-3', ...PHPLesson6_3Content },
        { id: 'php-lesson-6-4', ...PHPLesson6_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Project-Based Learning',
      lessons: [
        { id: 'php-lesson-7-1', ...PHPLesson7_1Content },
        { id: 'php-lesson-7-2', ...PHPLesson7_2Content },
        { id: 'php-lesson-7-3', ...PHPLesson7_3Content },
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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ភាសា PHP</h1>
            <p className="text-lg opacity-90">Server-Side Programming</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀនភាសា PHP ដើម្បីបង្កើត Dynamic Websites និង Web Applications។ 
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់ និងលំហាត់ជាក់ស្តែង។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">23</div>
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
                      className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-indigo-200 hover:bg-indigo-50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-200">
                          <Play className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-indigo-700">
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
                        <ChevronRight className="w-4 h-4 group-hover:text-indigo-600" />
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
            <a href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">PHP Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.w3schools.com/php/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools PHP Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.php-fig.org/psr/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">PHP-FIG PSR Standards</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.phptherightway.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">PHP The Right Way</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">MySQL Official Documentation</span>
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
                <a href="https://www.youtube.com/playlist?list=PLbDU2mc4UC51AkeAxmpgL3CB-I9EfCFxd" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Jai Code - PHP Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLuEdNLfGOtnVsMxiXgZUuvqFKIavgZ-Bv" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Khode Academy - PHP Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gksOX3Kd9KPo-O68ncT05o" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Net Ninja - PHP Tutorial for Beginners</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Program With Gio - Full PHP Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=BUCiSSyIGGU" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Traversy Media - PHP Crash Course</span>
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
          គន្លឹះក្នុងការរៀនភាសា PHP ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមជាមួយ PHP Basics ដូចជា Variables និង Control Structures</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ជាមួយ Projects ជាក់ស្តែងដូចជា CRUD Applications</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>រៀន OOP ដើម្បីបង្កើតកូដប្រកបដោយរចនាសម្ព័ន្ធ</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ PDO សម្រាប់ Database Interactions ដើម្បីសុវត្ថិភាព</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>សិក្សាពី Modern PHP Practices និង Composer សម្រាប់ Dependency Management</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PHPCourse;