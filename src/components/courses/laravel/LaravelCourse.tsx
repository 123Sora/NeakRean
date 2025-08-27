import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Laravel ---
// import LaravelLesson1_1Content from '../laravel/lessons/LaravelLesson1_1'; // ណែនាំអំពី Laravel
// import LaravelLesson1_2Content from '../laravel/lessons/LaravelLesson1_2'; // ការដំឡើង Laravel និង Environment Setup
// import LaravelLesson1_3Content from '../laravel/lessons/LaravelLesson1_3'; // Laravel Project Structure

// --- ផ្នែកទី ២: Laravel Core Concepts ---
// import LaravelLesson2_1Content from '../laravel/lessons/LaravelLesson2_1'; // Routing និង Controllers
// import LaravelLesson2_2Content from '../laravel/lessons/LaravelLesson2_2'; // Blade Templating
// import LaravelLesson2_3Content from '../laravel/lessons/LaravelLesson2_3'; // Middleware
// import LaravelLesson2_4Content from '../laravel/lessons/LaravelLesson2_4'; // Request និង Response

// --- ផ្នែកទី ៣: Database និង Eloquent ORM ---
// import LaravelLesson3_1Content from '../laravel/lessons/LaravelLesson3_1'; // Database Configuration និង Migrations
// import LaravelLesson3_2Content from '../laravel/lessons/LaravelLesson3_2'; // Eloquent ORM Basics
// import LaravelLesson3_3Content from '../laravel/lessons/LaravelLesson3_3'; // Relationships in Eloquent
// import LaravelLesson3_4Content from '../laravel/lessons/LaravelLesson3_4'; // Query Builder

// --- ផ្នែកទី ៤: Authentication និង Authorization ---
// import LaravelLesson4_1Content from '../laravel/lessons/LaravelLesson4_1'; // Laravel Authentication
// import LaravelLesson4_2Content from '../laravel/lessons/LaravelLesson4_2'; // Authorization (Gates and Policies)
// import LaravelLesson4_3Content from '../laravel/lessons/LaravelLesson4_3'; // User Roles and Permissions

// --- ផ្នែកទី ៥: Advanced Laravel Features ---
// import LaravelLesson5_1Content from '../laravel/lessons/LaravelLesson5_1'; // Laravel Artisan Commands
// import LaravelLesson5_2Content from '../laravel/lessons/LaravelLesson5_2'; // Task Scheduling and Queues
// import LaravelLesson5_3Content from '../laravel/lessons/LaravelLesson5_3'; // Event Broadcasting and Notifications
// import LaravelLesson5_4Content from '../laravel/lessons/LaravelLesson5_4'; // API Development with Laravel

// --- ផ្នែកទី ៦: Testing and Debugging ---
// import LaravelLesson6_1Content from '../laravel/lessons/LaravelLesson6_1'; // Unit and Feature Testing
// import LaravelLesson6_2Content from '../laravel/lessons/LaravelLesson6_2'; // Debugging Laravel Applications
// import LaravelLesson6_3Content from '../laravel/lessons/LaravelLesson6_3'; // Error Handling and Logging

// --- ផ្នែកទី ៧: Project-Based Learning and Deployment ---
// import LaravelLesson7_1Content from '../laravel/lessons/LaravelLesson7_1'; // Building a CRUD Application
// import LaravelLesson7_2Content from '../laravel/lessons/LaravelLesson7_2'; // Creating a Full-Stack Laravel Application
// import LaravelLesson7_3Content from '../laravel/lessons/LaravelLesson7_3'; // Deployment and Best Practices

function LaravelCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Laravel',
      lessons: [
        // { id: 'laravel-lesson-1-1', ...LaravelLesson1_1Content },
        // { id: 'laravel-lesson-1-2', ...LaravelLesson1_2Content },
        // { id: 'laravel-lesson-1-3', ...LaravelLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Laravel Core Concepts',
      lessons: [
        // { id: 'laravel-lesson-2-1', ...LaravelLesson2_1Content },
        // { id: 'laravel-lesson-2-2', ...LaravelLesson2_2Content },
        // { id: 'laravel-lesson-2-3', ...LaravelLesson2_3Content },
        // { id: 'laravel-lesson-2-4', ...LaravelLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Database និង Eloquent ORM',
      lessons: [
        // { id: 'laravel-lesson-3-1', ...LaravelLesson3_1Content },
        // { id: 'laravel-lesson-3-2', ...LaravelLesson3_2Content },
        // { id: 'laravel-lesson-3-3', ...LaravelLesson3_3Content },
        // { id: 'laravel-lesson-3-4', ...LaravelLesson3_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Authentication និង Authorization',
      lessons: [
        // { id: 'laravel-lesson-4-1', ...LaravelLesson4_1Content },
        // { id: 'laravel-lesson-4-2', ...LaravelLesson4_2Content },
        // { id: 'laravel-lesson-4-3', ...LaravelLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Advanced Laravel Features',
      lessons: [
        // { id: 'laravel-lesson-5-1', ...LaravelLesson5_1Content },
        // { id: 'laravel-lesson-5-2', ...LaravelLesson5_2Content },
        // { id: 'laravel-lesson-5-3', ...LaravelLesson5_3Content },
        // { id: 'laravel-lesson-5-4', ...LaravelLesson5_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Testing and Debugging',
      lessons: [
        // { id: 'laravel-lesson-6-1', ...LaravelLesson6_1Content },
        // { id: 'laravel-lesson-6-2', ...LaravelLesson6_2Content },
        // { id: 'laravel-lesson-6-3', ...LaravelLesson6_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Project-Based Learning and Deployment',
      lessons: [
        // { id: 'laravel-lesson-7-1', ...LaravelLesson7_1Content },
        // { id: 'laravel-lesson-7-2', ...LaravelLesson7_2Content },
        // { id: 'laravel-lesson-7-3', ...LaravelLesson7_3Content },
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
      <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Laravel Framework</h1>
            <p className="text-lg opacity-90">PHP Framework for Web Artisans</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀនសូត្រ Laravel ដើម្បីបង្កើត Web Applications ប្រកបដោយភាពរឹងមាំ និងឆាប់រហ័ស។ 
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ជាក់ស្តែង និងគម្រោងអនុវត្តន៍។
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
            <div className="text-2xl font-bold">70+</div>
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
                      className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-red-200 hover:bg-red-50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-200">
                          <Play className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-red-700">
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
                        <ChevronRight className="w-4 h-4 group-hover:text-red-600" />
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
            <a href="https://laravel.com/docs" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Laravel Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://laracasts.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Laracasts - Laravel Tutorials</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">PHP Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">MySQL Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://laravel-news.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Laravel News</span>
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
                <a href="https://www.youtube.com/playlist?list=PLuEdNLfGOtnV5C07xX0c3q2mC0Z9z3V6N" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Khode Academy - Laravel Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLvX1-UB1rBNPplEPZeKMpsH0AC3r7-mG1" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">តំបន់អាយធី - IT Zone - Laravel Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9h6OY-Mvjk5Op8EeCrxipmer" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Traversy Media - Laravel From Scratch</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLillGF-RfqbYh2tpgZ_7aaj_4J4rswLsP" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">freeCodeCamp - Laravel Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL0eyrZgxdwhwwQQMU31Ab9o2N2A2tE4b6" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Code With Dary - Laravel Tutorial</span>
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
          គន្លឹះក្នុងការរៀន Laravel ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>យល់អំពី PHP Basics មុននឹងចាប់ផ្តើម Laravel</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ជាមួយ Projects ដូចជា CRUD និង Full-Stack Applications</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>សិក្សា Eloquent ORM សម្រាប់ Database Interactions</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើ Artisan Commands ដើម្បីបង្កើនផលិតភាព</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>រៀន Debugging និង Testing ដើម្បីធានាគុណភាពកូដ</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LaravelCourse;