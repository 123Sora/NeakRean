import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Flutter និង Dart ---
import FlutterLesson1_1Content from '../flutter/lessons/FlutterLesson1_1'; // ណែនាំអំពី Flutter
import FlutterLesson1_2Content from '../flutter/lessons/FlutterLesson1_2'; // Dart Basics
import FlutterLesson1_3Content from '../flutter/lessons/FlutterLesson1_3'; // Flutter Setup and Installation

// --- ផ្នែកទី ២: Flutter Widgets និង UI Basics ---
import FlutterLesson2_1Content from '../flutter/lessons/FlutterLesson2_1'; // Stateless Widgets
import FlutterLesson2_2Content from '../flutter/lessons/FlutterLesson2_2'; // Stateful Widgets
import FlutterLesson2_3Content from '../flutter/lessons/FlutterLesson2_3'; // Basic Layouts
import FlutterLesson2_4Content from '../flutter/lessons/FlutterLesson2_4'; // Material and Cupertino Components

// --- ផ្នែកទី ៣: State Management ---
import FlutterLesson3_1Content from '../flutter/lessons/FlutterLesson3_1'; // State Management Basics
import FlutterLesson3_2Content from '../flutter/lessons/FlutterLesson3_2'; // Provider
import FlutterLesson3_3Content from '../flutter/lessons/FlutterLesson3_3'; // Bloc Pattern

// --- ផ្នែកទី ៤: Navigation and Routing ---
import FlutterLesson4_1Content from '../flutter/lessons/FlutterLesson4_1'; // Basic Navigation
import FlutterLesson4_2Content from '../flutter/lessons/FlutterLesson4_2'; // Named Routes
import FlutterLesson4_3Content from '../flutter/lessons/FlutterLesson4_3'; // Advanced Navigation with GetX

// --- ផ្នែកទី ៥: Working with APIs ---
import FlutterLesson5_1Content from '../flutter/lessons/FlutterLesson5_1'; // HTTP Requests
import FlutterLesson5_2Content from '../flutter/lessons/FlutterLesson5_2'; // JSON Parsing
import FlutterLesson5_3Content from '../flutter/lessons/FlutterLesson5_3'; // REST API Integration

// --- ផ្នែកទី ៦: Advanced Flutter Topics ---
import FlutterLesson6_1Content from '../flutter/lessons/FlutterLesson6_1'; // Animations
import FlutterLesson6_2Content from '../flutter/lessons/FlutterLesson6_2'; // Custom Widgets
import FlutterLesson6_3Content from '../flutter/lessons/FlutterLesson6_3'; // Performance Optimization

// --- ផ្នែកទី ៧: Project-Based Learning ---
import FlutterLesson7_1Content from '../flutter/lessons/FlutterLesson7_1'; // Building a Todo App
import FlutterLesson7_2Content from '../flutter/lessons/FlutterLesson7_2'; // Creating a Shopping App
import FlutterLesson7_3Content from '../flutter/lessons/FlutterLesson7_3'; // App Deployment to App Store and Play Store

// --- ផ្នែកទី ៨: Database និង Storage ---
import FlutterLesson8_1Content from '../flutter/lessons/FlutterLesson8_1'; // Local Storage with Shared Preferences
import FlutterLesson8_2Content from '../flutter/lessons/FlutterLesson8_2'; // Hive Database
import FlutterLesson8_3Content from '../flutter/lessons/FlutterLesson8_3'; // SQLite Integration

// --- ផ្នែកទី ៩: Authentication និង Security ---
import FlutterLesson9_1Content from '../flutter/lessons/FlutterLesson9_1'; // Firebase Authentication
import FlutterLesson9_2Content from '../flutter/lessons/FlutterLesson9_2'; // Social Login with OAuth
import FlutterLesson9_3Content from '../flutter/lessons/FlutterLesson9_3'; // Secure Storage and Encryption

// --- ផ្នែកទី ១០: Testing និង Debugging ---
import FlutterLesson10_1Content from '../flutter/lessons/FlutterLesson10_1'; // Unit Testing
import FlutterLesson10_2Content from '../flutter/lessons/FlutterLesson10_2'; // Widget Testing
import FlutterLesson10_3Content from '../flutter/lessons/FlutterLesson10_3'; // Integration Testing

// --- ផ្នែកទី ១១: Advanced Integrations និង Deployment ---
import FlutterLesson11_1Content from '../flutter/lessons/FlutterLesson11_1'; // Firebase Cloud Firestore
import FlutterLesson11_2Content from '../flutter/lessons/FlutterLesson11_2'; // Push Notifications with FCM
import FlutterLesson11_3Content from '../flutter/lessons/FlutterLesson11_3'; // CI/CD for Flutter Apps

function FlutterCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Flutter និង Dart',
      lessons: [
        { id: 'flutter-lesson-1-1', ...FlutterLesson1_1Content },
        { id: 'flutter-lesson-1-2', ...FlutterLesson1_2Content },
        { id: 'flutter-lesson-1-3', ...FlutterLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Flutter Widgets និង UI Basics',
      lessons: [
        { id: 'flutter-lesson-2-1', ...FlutterLesson2_1Content },
        { id: 'flutter-lesson-2-2', ...FlutterLesson2_2Content },
        { id: 'flutter-lesson-2-3', ...FlutterLesson2_3Content },
        { id: 'flutter-lesson-2-4', ...FlutterLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: State Management',
      lessons: [
        { id: 'flutter-lesson-3-1', ...FlutterLesson3_1Content },
        { id: 'flutter-lesson-3-2', ...FlutterLesson3_2Content },
        { id: 'flutter-lesson-3-3', ...FlutterLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Navigation and Routing',
      lessons: [
        { id: 'flutter-lesson-4-1', ...FlutterLesson4_1Content },
        { id: 'flutter-lesson-4-2', ...FlutterLesson4_2Content },
        { id: 'flutter-lesson-4-3', ...FlutterLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Working with APIs',
      lessons: [
        { id: 'flutter-lesson-5-1', ...FlutterLesson5_1Content },
        { id: 'flutter-lesson-5-2', ...FlutterLesson5_2Content },
        { id: 'flutter-lesson-5-3', ...FlutterLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Advanced Flutter Topics',
      lessons: [
        { id: 'flutter-lesson-6-1', ...FlutterLesson6_1Content },
        { id: 'flutter-lesson-6-2', ...FlutterLesson6_2Content },
        { id: 'flutter-lesson-6-3', ...FlutterLesson6_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Project-Based Learning',
      lessons: [
        { id: 'flutter-lesson-7-1', ...FlutterLesson7_1Content },
        { id: 'flutter-lesson-7-2', ...FlutterLesson7_2Content },
        { id: 'flutter-lesson-7-3', ...FlutterLesson7_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-8',
      title: 'ផ្នែកទី ៨: មូលដ្ឋានទិន្នន័យ និង ការផ្ទុក',
      lessons: [
        { id: 'flutter-lesson-8-1', ...FlutterLesson8_1Content },
        { id: 'flutter-lesson-8-2', ...FlutterLesson8_2Content },
        { id: 'flutter-lesson-8-3', ...FlutterLesson8_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-9',
      title: 'ផ្នែកទី ៩: ការផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវ និង សុវត្ថិភាព',
      lessons: [
        { id: 'flutter-lesson-9-1', ...FlutterLesson9_1Content },
        { id: 'flutter-lesson-9-2', ...FlutterLesson9_2Content },
        { id: 'flutter-lesson-9-3', ...FlutterLesson9_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-10',
      title: 'ផ្នែកទី ១០: ការសាកល្បង និង ការបំបាត់កំហុស',
      lessons: [
        { id: 'flutter-lesson-10-1', ...FlutterLesson10_1Content },
        { id: 'flutter-lesson-10-2', ...FlutterLesson10_2Content },
        { id: 'flutter-lesson-10-3', ...FlutterLesson10_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-11',
      title: 'ផ្នែកទី ១១: ការរួមបញ្ចូលកម្រិតខ្ពស់ និង ការដាក់ពង្រាយ',
      lessons: [
        { id: 'flutter-lesson-11-1', ...FlutterLesson11_1Content },
        { id: 'flutter-lesson-11-2', ...FlutterLesson11_2Content },
        { id: 'flutter-lesson-11-3', ...FlutterLesson11_3Content },
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
      <div className="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Flutter</h1>
            <p className="text-lg opacity-90">Cross-Platform Mobile Framework</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀនភាសា Flutter ដើម្បីបង្កើតកម្មវិធីទូរស័ព្ទសម្រាប់ iOS និង Android។ 
          ប្រើប្រាស់ Dart Language, Widgets និង State Management។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">22</div>
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
            <div className="text-2xl font-bold">40+</div>
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
            <a href="https://docs.flutter.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Flutter Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://dart.dev/guides" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Dart Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://flutter.dev/learn" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Flutter Learn</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://pub.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Pub.dev - Flutter Packages</span>
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
                  <span className="text-sm">NIMTo DevStack - Mastering Flutter in Khmer</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL651Eh0LyfjPY4EhRiNNuqzZc-VHNKVfm" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">CMABO SOK - Learn Flutter Khmer</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
               <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL-oGq_2UkkL_LVy3drrDQmMxSmY6u5aRp" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Brahim Kh - Learning flutter</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=3kaGC_DrUnw" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Flutter Mapp - Flutter Tutorial for Beginners 2025 Full Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL555aeDWfjt2usljjjuMgOBgXNOZo1Cus" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">True Coders - Flutter With Dart (Visual Studio Code)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=yveZ8yqtG6A&list=LL&index=1" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Shivam Gupta - Epic Quiz App with API Integration | Flutter Tutorial for Beginners 2024</span>
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
          គន្លឹះក្នុងការរៀន Flutter ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមជាមួយ Dart Basics និង Flutter Setup</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ជាមួយ Widgets និង Layouts ដើម្បីបង្កើត UI</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>រៀន State Management ដើម្បីគ្រប់គ្រង App State</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ Packages ពី Pub.dev ដើម្បីបន្ថែម Features</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ Projects ជាក់ស្តែងដូចជា Todo ឬ Shopping App</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FlutterCourse;