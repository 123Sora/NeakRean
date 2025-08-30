import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- Section 1: Introduction to Kotlin and Android Development ---
import KotlinLesson1_1Content from '../kotlin/lessons/KotlinLesson1_1'; // Introduction to Kotlin
import KotlinLesson1_2Content from '../kotlin/lessons/KotlinLesson1_2'; // Kotlin Basics
import KotlinLesson1_3Content from '../kotlin/lessons/KotlinLesson1_3'; // Android Studio Setup

// --- Section 2: Android UI with Jetpack Compose ---
import KotlinLesson2_1Content from '../kotlin/lessons/KotlinLesson2_1'; // Introduction to Jetpack Compose
import KotlinLesson2_2Content from '../kotlin/lessons/KotlinLesson2_2'; // Composable Functions
import KotlinLesson2_3Content from '../kotlin/lessons/KotlinLesson2_3'; // Layouts in Compose
import KotlinLesson2_4Content from '../kotlin/lessons/KotlinLesson2_4'; // State in Jetpack Compose

// --- Section 3: State Management ---
import KotlinLesson3_1Content from '../kotlin/lessons/KotlinLesson3_1'; // State Management Basics
import KotlinLesson3_2Content from '../kotlin/lessons/KotlinLesson3_2'; // ViewModel
import KotlinLesson3_3Content from '../kotlin/lessons/KotlinLesson3_3'; // LiveData and StateFlow

// --- Section 4: Navigation and Routing ---
import KotlinLesson4_1Content from '../kotlin/lessons/KotlinLesson4_1'; // Navigation Component
import KotlinLesson4_2Content from '../kotlin/lessons/KotlinLesson4_2'; // Navigation in Jetpack Compose
import KotlinLesson4_3Content from '../kotlin/lessons/KotlinLesson4_3'; // Deep Linking

// --- Section 5: Working with APIs ---
import KotlinLesson5_1Content from '../kotlin/lessons/KotlinLesson5_1'; // HTTP Requests with Retrofit
import KotlinLesson5_2Content from '../kotlin/lessons/KotlinLesson5_2'; // JSON Parsing with Moshi
import KotlinLesson5_3Content from '../kotlin/lessons/KotlinLesson5_3'; // REST API Integration

// --- Section 6: Advanced Kotlin Topics ---
import KotlinLesson6_1Content from '../kotlin/lessons/KotlinLesson6_1'; // Coroutines
import KotlinLesson6_2Content from '../kotlin/lessons/KotlinLesson6_2'; // Extension Functions
import KotlinLesson6_3Content from '../kotlin/lessons/KotlinLesson6_3'; // Performance Optimization

// --- Section 7: Project-Based Learning ---
import KotlinLesson7_1Content from '../kotlin/lessons/KotlinLesson7_1'; // Building a Todo App
import KotlinLesson7_2Content from '../kotlin/lessons/KotlinLesson7_2'; // Creating a News App
import KotlinLesson7_3Content from '../kotlin/lessons/KotlinLesson7_3'; // App Deployment to Play Store

// --- Section 8: Database and Storage ---
import KotlinLesson8_1Content from '../kotlin/lessons/KotlinLesson8_1'; // SharedPreferences
import KotlinLesson8_2Content from '../kotlin/lessons/KotlinLesson8_2'; // Room Database
import KotlinLesson8_3Content from '../kotlin/lessons/KotlinLesson8_3'; // File Storage

// --- Section 9: Authentication and Security ---
import KotlinLesson9_1Content from '../kotlin/lessons/KotlinLesson9_1'; // Firebase Authentication
import KotlinLesson9_2Content from '../kotlin/lessons/KotlinLesson9_2'; // OAuth Integration
import KotlinLesson9_3Content from '../kotlin/lessons/KotlinLesson9_3'; // Secure Storage

// --- Section 10: Testing and Debugging ---
import KotlinLesson10_1Content from '../kotlin/lessons/KotlinLesson10_1'; // Unit Testing
import KotlinLesson10_2Content from '../kotlin/lessons/KotlinLesson10_2'; // UI Testing with Espresso
import KotlinLesson10_3Content from '../kotlin/lessons/KotlinLesson10_3'; // Integration Testing

// --- Section 11: Advanced Integrations and Deployment ---
import KotlinLesson11_1Content from '../kotlin/lessons/KotlinLesson11_1'; // Firebase Realtime Database
import KotlinLesson11_2Content from '../kotlin/lessons/KotlinLesson11_2'; // Push Notifications
import KotlinLesson11_3Content from '../kotlin/lessons/KotlinLesson11_3'; // CI/CD for Android Apps

function KotlinCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Kotlin និង Android Development',
      lessons: [
        { id: 'kotlin-lesson-1-1', ...KotlinLesson1_1Content },
        { id: 'kotlin-lesson-1-2', ...KotlinLesson1_2Content },
        { id: 'kotlin-lesson-1-3', ...KotlinLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Android UI ជាមួយ Jetpack Compose',
      lessons: [
        { id: 'kotlin-lesson-2-1', ...KotlinLesson2_1Content },
        { id: 'kotlin-lesson-2-2', ...KotlinLesson2_2Content },
        { id: 'kotlin-lesson-2-3', ...KotlinLesson2_3Content },
        { id: 'kotlin-lesson-2-4', ...KotlinLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: State Management',
      lessons: [
        { id: 'kotlin-lesson-3-1', ...KotlinLesson3_1Content },
        { id: 'kotlin-lesson-3-2', ...KotlinLesson3_2Content },
        { id: 'kotlin-lesson-3-3', ...KotlinLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Navigation and Routing',
      lessons: [
        { id: 'kotlin-lesson-4-1', ...KotlinLesson4_1Content },
        { id: 'kotlin-lesson-4-2', ...KotlinLesson4_2Content },
        { id: 'kotlin-lesson-4-3', ...KotlinLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Working with APIs',
      lessons: [
        { id: 'kotlin-lesson-5-1', ...KotlinLesson5_1Content },
        { id: 'kotlin-lesson-5-2', ...KotlinLesson5_2Content },
        { id: 'kotlin-lesson-5-3', ...KotlinLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Advanced Kotlin Topics',
      lessons: [
        { id: 'kotlin-lesson-6-1', ...KotlinLesson6_1Content },
        { id: 'kotlin-lesson-6-2', ...KotlinLesson6_2Content },
        { id: 'kotlin-lesson-6-3', ...KotlinLesson6_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Project-Based Learning',
      lessons: [
        { id: 'kotlin-lesson-7-1', ...KotlinLesson7_1Content },
        { id: 'kotlin-lesson-7-2', ...KotlinLesson7_2Content },
        { id: 'kotlin-lesson-7-3', ...KotlinLesson7_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-8',
      title: 'ផ្នែកទី ៨: មូលដ្ឋានទិន្នន័យ និង ការផ្ទុក',
      lessons: [
        { id: 'kotlin-lesson-8-1', ...KotlinLesson8_1Content },
        { id: 'kotlin-lesson-8-2', ...KotlinLesson8_2Content },
        { id: 'kotlin-lesson-8-3', ...KotlinLesson8_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-9',
      title: 'ផ្នែកទី ៩: ការផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវ និង សុវត្ថិភាព',
      lessons: [
        { id: 'kotlin-lesson-9-1', ...KotlinLesson9_1Content },
        { id: 'kotlin-lesson-9-2', ...KotlinLesson9_2Content },
        { id: 'kotlin-lesson-9-3', ...KotlinLesson9_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-10',
      title: 'ផ្នែកទី ១០: ការសាកល្បង និង ការបំបាត់កំហុស',
      lessons: [
        { id: 'kotlin-lesson-10-1', ...KotlinLesson10_1Content },
        { id: 'kotlin-lesson-10-2', ...KotlinLesson10_2Content },
        { id: 'kotlin-lesson-10-3', ...KotlinLesson10_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-11',
      title: 'ផ្នែកទី ១១: ការរួមបញ្ចូលកម្រិតខ្ពស់ និង ការដាក់ពង្រាយ',
      lessons: [
        { id: 'kotlin-lesson-11-1', ...KotlinLesson11_1Content },
        { id: 'kotlin-lesson-11-2', ...KotlinLesson11_2Content },
        { id: 'kotlin-lesson-11-3', ...KotlinLesson11_3Content },
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
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Kotlin & Jetpack Compose</h1>
            <p className="text-lg opacity-90">Android Development Framework</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន Kotlin និង Jetpack Compose ដើម្បីបង្កើតកម្មវិធី Android ដែលទំនើប។ 
          ប្រើប្រាស់ Kotlin Language និង Jetpack Compose សម្រាប់ UI។
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
                      className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-teal-200 hover:bg-teal-50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center group-hover:bg-teal-200">
                          <Play className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-teal-700">
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
                        <ChevronRight className="w-4 h-4 group-hover:text-teal-600" />
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
            <a href="https://kotlinlang.org/docs/home.html" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Kotlin Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://developer.android.com/jetpack/compose/documentation" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Jetpack Compose Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://developer.android.com/courses" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Android Developer Courses</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://kotlinlang.org/docs/android.html" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Kotlin for Android</span>
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
                <a href="https://www.youtube.com/playlist?list=PLD7qx6vVVVtTk_LV02hcIrBYS33BT3fSP" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">VICHIT Tech - Kotlin Khmer Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLQkwcJG4YTCSpJ2NLhDTHhi6XBNfk9WiC" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Philipp Lackner - Kotlin & Jetpack Compose</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=F9UC9DY-vIU" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">freeCodeCamp - Kotlin Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLQ_Ai1O7sMV0LRCZJaHpl_9WLQunMqrzG" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Android Knowledge - Kotlin (Beginners to Advanced)</span>
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
          គន្លឹះក្នុងការរៀន Kotlin និង Jetpack Compose ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមជាមួយ Kotlin Basics និង Android Studio Setup</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ជាមួយ Jetpack Compose សម្រាប់ UI</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>រៀន State Management ជាមួយ ViewModel និង StateFlow</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ Libraries ដូចជា Retrofit និង Room</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ Projects ជាក់ស្តែងដូចជា Todo ឬ News App</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default KotlinCourse;
