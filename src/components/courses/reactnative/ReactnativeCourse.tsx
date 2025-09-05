import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី React Native និង JavaScript ---
import ReactNativeLesson1_1Content from '../reactnative/lessons/ReactNativeLesson1_1'; // ណែនាំអំពី React Native
import ReactNativeLesson1_2Content from '../reactnative/lessons/ReactNativeLesson1_2'; // JavaScript Basics for React Native
import ReactNativeLesson1_3Content from '../reactnative/lessons/ReactNativeLesson1_3'; // React Native Setup and Installation

// --- ផ្នែកទី ២: React Native Components និង UI Basics ---
import ReactNativeLesson2_1Content from '../reactnative/lessons/ReactNativeLesson2_1'; // Core Components
import ReactNativeLesson2_2Content from '../reactnative/lessons/ReactNativeLesson2_2'; // Functional Components and Hooks
import ReactNativeLesson2_3Content from '../reactnative/lessons/ReactNativeLesson2_3'; // Styling and Flexbox
import ReactNativeLesson2_4Content from '../reactnative/lessons/ReactNativeLesson2_4'; // Custom Components

// --- ផ្នែកទី ៣: Navigation and Routing ---
import ReactNativeLesson3_1Content from '../reactnative/lessons/ReactNativeLesson3_1'; // Basic Navigation with React Navigation
import ReactNativeLesson3_2Content from '../reactnative/lessons/ReactNativeLesson3_2'; // Stack and Tab Navigation
import ReactNativeLesson3_3Content from '../reactnative/lessons/ReactNativeLesson3_3'; // Advanced Navigation Techniques

// --- ផ្នែកទី ៤: State Management ---
import ReactNativeLesson4_1Content from '../reactnative/lessons/ReactNativeLesson4_1'; // State Management Basics
import ReactNativeLesson4_2Content from '../reactnative/lessons/ReactNativeLesson4_2'; // Redux and Context API
import ReactNativeLesson4_3Content from '../reactnative/lessons/ReactNativeLesson4_3'; // Advanced State with Redux Toolkit

// --- ផ្នែកទី ៥: Working with APIs ---
import ReactNativeLesson5_1Content from '../reactnative/lessons/ReactNativeLesson5_1'; // HTTP Requests with Fetch
import ReactNativeLesson5_2Content from '../reactnative/lessons/ReactNativeLesson5_2'; // JSON Parsing and API Integration
import ReactNativeLesson5_3Content from '../reactnative/lessons/ReactNativeLesson5_3'; // AsyncStorage for Local Data

// --- ផ្នែកទី ៦: Native Modules and Features ---
import ReactNativeLesson6_1Content from '../reactnative/lessons/ReactNativeLesson6_1'; // Accessing Native Modules
import ReactNativeLesson6_2Content from '../reactnative/lessons/ReactNativeLesson6_2'; // Push Notifications
import ReactNativeLesson6_3Content from '../reactnative/lessons/ReactNativeLesson6_3'; // Camera and Location Services

// --- ផ្នែកទី ៧: Project-Based Learning and Deployment ---
import ReactNativeLesson7_1Content from '../reactnative/lessons/ReactNativeLesson7_1'; // Building a Todo App
import ReactNativeLesson7_2Content from '../reactnative/lessons/ReactNativeLesson7_2'; // Creating a Shopping App
import ReactNativeLesson7_3Content from '../reactnative/lessons/ReactNativeLesson7_3'; // App Store and Play Store Publishing

function ReactNativeCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី React Native និង JavaScript',
      lessons: [
        { id: 'react-native-lesson-1-1', ...ReactNativeLesson1_1Content },
        { id: 'react-native-lesson-1-2', ...ReactNativeLesson1_2Content },
        { id: 'react-native-lesson-1-3', ...ReactNativeLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: React Native Components និង UI Basics',
      lessons: [
        { id: 'react-native-lesson-2-1', ...ReactNativeLesson2_1Content },
        { id: 'react-native-lesson-2-2', ...ReactNativeLesson2_2Content },
        { id: 'react-native-lesson-2-3', ...ReactNativeLesson2_3Content },
        { id: 'react-native-lesson-2-4', ...ReactNativeLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Navigation and Routing',
      lessons: [
        { id: 'react-native-lesson-3-1', ...ReactNativeLesson3_1Content },
        { id: 'react-native-lesson-3-2', ...ReactNativeLesson3_2Content },
        { id: 'react-native-lesson-3-3', ...ReactNativeLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: State Management',
      lessons: [
        { id: 'react-native-lesson-4-1', ...ReactNativeLesson4_1Content },
        { id: 'react-native-lesson-4-2', ...ReactNativeLesson4_2Content },
        { id: 'react-native-lesson-4-3', ...ReactNativeLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Working with APIs',
      lessons: [
        { id: 'react-native-lesson-5-1', ...ReactNativeLesson5_1Content },
        { id: 'react-native-lesson-5-2', ...ReactNativeLesson5_2Content },
        { id: 'react-native-lesson-5-3', ...ReactNativeLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Native Modules and Features',
      lessons: [
        { id: 'react-native-lesson-6-1', ...ReactNativeLesson6_1Content },
        { id: 'react-native-lesson-6-2', ...ReactNativeLesson6_2Content },
        { id: 'react-native-lesson-6-3', ...ReactNativeLesson6_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Project-Based Learning and Deployment',
      lessons: [
        { id: 'react-native-lesson-7-1', ...ReactNativeLesson7_1Content },
        { id: 'react-native-lesson-7-2', ...ReactNativeLesson7_2Content },
        { id: 'react-native-lesson-7-3', ...ReactNativeLesson7_3Content },
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
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">React Native</h1>
            <p className="text-lg opacity-90">Cross-Platform Mobile Framework</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន React Native ដើម្បីបង្កើតកម្មវិធីទូរស័ព្ទដោយប្រើ JavaScript។ 
          ប្រើប្រាស់ React Components, Navigation និង Native Modules។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">19</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">55+</div>
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">35+</div>
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
            <a href="https://reactnative.dev/docs/getting-started" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">React Native Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">React Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://reactnavigation.org/docs/getting-started" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">React Navigation Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">NPM - React Native Packages</span>
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
                <a href="https://www.youtube.com/playlist?list=PLWrsrLN26mWZ1Z4-PAktgU2xgWeMw" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">រៀន IT - React Native in Khmer</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=some-khmer-video-id" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Khmer Dev - React Native Crash Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=NuE6Qma_KnM" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Academind - React Native Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPUvJ6NszXn8Oy6r_AQKe" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">The Net Ninja - React Native Tutorial for Beginners</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL6yRaaP0WPkVtoeNfw0nUKJtrJ-Gfk8Bo" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Code with Mosh - React Native Mastery</span>
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
          គន្លឹះក្នុងការរៀន React Native ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមជាមួយ JavaScript Basics និង React Native Setup</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ជាមួយ Core Components និង Flexbox Styling</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>រៀន Navigation ជាមួយ React Navigation</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ State Management ដូចជា Redux ឬ Context API</span>
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

export default ReactNativeCourse;