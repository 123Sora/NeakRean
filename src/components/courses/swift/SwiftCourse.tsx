import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- Section 1: Introduction to Swift and SwiftUI ---
import SwiftLesson1_1Content from '../swift/lessons/SwiftLesson1_1'; // Introduction to Swift
import SwiftLesson1_2Content from '../swift/lessons/SwiftLesson1_2'; // Swift Basics
import SwiftLesson1_3Content from '../swift/lessons/SwiftLesson1_3'; // SwiftUI Setup and Installation

// --- Section 2: SwiftUI Views and Layouts ---
import SwiftLesson2_1Content from '../swift/lessons/SwiftLesson2_1'; // Basic Views
import SwiftLesson2_2Content from '../swift/lessons/SwiftLesson2_2'; // State and Binding
import SwiftLesson2_3Content from '../swift/lessons/SwiftLesson2_3'; // Layouts and Stacks
import SwiftLesson2_4Content from '../swift/lessons/SwiftLesson2_4'; // Navigation and Lists

// --- Section 3: State Management in SwiftUI ---
import SwiftLesson3_1Content from '../swift/lessons/SwiftLesson3_1'; // @State and @Binding
import SwiftLesson3_2Content from '../swift/lessons/SwiftLesson3_2'; // Observable Objects
import SwiftLesson3_3Content from '../swift/lessons/SwiftLesson3_3'; // Environment Objects

// --- Section 4: Data and Networking ---
import SwiftLesson4_1Content from '../swift/lessons/SwiftLesson4_1'; // URLSession and Networking
import SwiftLesson4_2Content from '../swift/lessons/SwiftLesson4_2'; // JSON Parsing
import SwiftLesson4_3Content from '../swift/lessons/SwiftLesson4_3'; // Async/Await in Swift

// --- Section 5: Advanced SwiftUI Topics ---
import SwiftLesson5_1Content from '../swift/lessons/SwiftLesson5_1'; // Animations
import SwiftLesson5_2Content from '../swift/lessons/SwiftLesson5_2'; // Custom Views
import SwiftLesson5_3Content from '../swift/lessons/SwiftLesson5_3'; // Performance Optimization

// --- Section 6: Project-Based Learning ---
import SwiftLesson6_1Content from '../swift/lessons/SwiftLesson6_1'; // Building a Todo App
import SwiftLesson6_2Content from '../swift/lessons/SwiftLesson6_2'; // Creating a Weather App
import SwiftLesson6_3Content from '../swift/lessons/SwiftLesson6_3'; // App Deployment to App Store

// --- Section 7: Core Data and Storage ---
import SwiftLesson7_1Content from '../swift/lessons/SwiftLesson7_1'; // Core Data Basics
import SwiftLesson7_2Content from '../swift/lessons/SwiftLesson7_2'; // UserDefaults
import SwiftLesson7_3Content from '../swift/lessons/SwiftLesson7_3'; // FileManager and Storage

// --- Section 8: Authentication and Security ---
import SwiftLesson8_1Content from '../swift/lessons/SwiftLesson8_1'; // Sign in with Apple
import SwiftLesson8_2Content from '../swift/lessons/SwiftLesson8_2'; // Firebase Authentication
import SwiftLesson8_3Content from '../swift/lessons/SwiftLesson8_3'; // Secure Enclave and Keychain

// --- Section 9: Testing and Debugging ---
import SwiftLesson9_1Content from '../swift/lessons/SwiftLesson9_1'; // Unit Testing
import SwiftLesson9_2Content from '../swift/lessons/SwiftLesson9_2'; // UI Testing
import SwiftLesson9_3Content from '../swift/lessons/SwiftLesson9_3'; // Debugging Techniques

// --- Section 10: Advanced Integrations ---
import SwiftLesson10_1Content from '../swift/lessons/SwiftLesson10_1'; // CloudKit Integration
import SwiftLesson10_2Content from '../swift/lessons/SwiftLesson10_2'; // Push Notifications
import SwiftLesson10_3Content from '../swift/lessons/SwiftLesson10_3'; // CI/CD for Swift Apps

function SwiftCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Swift និង SwiftUI',
      lessons: [
        { id: 'swift-lesson-1-1', ...SwiftLesson1_1Content },
        { id: 'swift-lesson-1-2', ...SwiftLesson1_2Content },
        { id: 'swift-lesson-1-3', ...SwiftLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: SwiftUI Views និង Layouts',
      lessons: [
        { id: 'swift-lesson-2-1', ...SwiftLesson2_1Content },
        { id: 'swift-lesson-2-2', ...SwiftLesson2_2Content },
        { id: 'swift-lesson-2-3', ...SwiftLesson2_3Content },
        { id: 'swift-lesson-2-4', ...SwiftLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: State Management ក្នុង SwiftUI',
      lessons: [
        { id: 'swift-lesson-3-1', ...SwiftLesson3_1Content },
        { id: 'swift-lesson-3-2', ...SwiftLesson3_2Content },
        { id: 'swift-lesson-3-3', ...SwiftLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: ទិន្នន័យ និង Networking',
      lessons: [
        { id: 'swift-lesson-4-1', ...SwiftLesson4_1Content },
        { id: 'swift-lesson-4-2', ...SwiftLesson4_2Content },
        { id: 'swift-lesson-4-3', ...SwiftLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Advanced SwiftUI Topics',
      lessons: [
        { id: 'swift-lesson-5-1', ...SwiftLesson5_1Content },
        { id: 'swift-lesson-5-2', ...SwiftLesson5_2Content },
        { id: 'swift-lesson-5-3', ...SwiftLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Project-Based Learning',
      lessons: [
        { id: 'swift-lesson-6-1', ...SwiftLesson6_1Content },
        { id: 'swift-lesson-6-2', ...SwiftLesson6_2Content },
        { id: 'swift-lesson-6-3', ...SwiftLesson6_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Core Data និង Storage',
      lessons: [
        { id: 'swift-lesson-7-1', ...SwiftLesson7_1Content },
        { id: 'swift-lesson-7-2', ...SwiftLesson7_2Content },
        { id: 'swift-lesson-7-3', ...SwiftLesson7_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-8',
      title: 'ផ្នែកទី ៨: ការផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវ និង សុវត្ថិភាព',
      lessons: [
        { id: 'swift-lesson-8-1', ...SwiftLesson8_1Content },
        { id: 'swift-lesson-8-2', ...SwiftLesson8_2Content },
        { id: 'swift-lesson-8-3', ...SwiftLesson8_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-9',
      title: 'ផ្នែកទី ៩: Testing និង Debugging',
      lessons: [
        { id: 'swift-lesson-9-1', ...SwiftLesson9_1Content },
        { id: 'swift-lesson-9-2', ...SwiftLesson9_2Content },
        { id: 'swift-lesson-9-3', ...SwiftLesson9_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-10',
      title: 'ផ្នែកទី ១០: ការរួមបញ្ចូលកម្រិតខ្ពស់',
      lessons: [
        { id: 'swift-lesson-10-1', ...SwiftLesson10_1Content },
        { id: 'swift-lesson-10-2', ...SwiftLesson10_2Content },
        { id: 'swift-lesson-10-3', ...SwiftLesson10_3Content },
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
      <div className="bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Swift & SwiftUI</h1>
            <p className="text-lg opacity-90">iOS Development Framework</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន Swift និង SwiftUI ដើម្បីបង្កើតកម្មវិធី iOS ដែលមានគុណភាពខ្ពស់។ 
          ប្រើប្រាស់ Swift Language និង SwiftUI សម្រាប់ User Interface។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">20</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
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
                      className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-purple-200 hover:bg-purple-50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-200">
                          <Play className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-purple-700">
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
                        <ChevronRight className="w-4 h-4 group-hover:text-purple-600" />
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
            <a href="https://developer.apple.com/documentation/swift" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Swift Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://developer.apple.com/documentation/swiftui" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">SwiftUI Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://developer.apple.com/tutorials/swiftui" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">SwiftUI Tutorials</span>
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
                <a href="https://www.youtube.com/playlist?list=PLWrsrLN26mWbuE6mOEidxs0LykyGqu53a" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">រៀន IT - Swift Programming for Beginners | Khmer</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLkjLm7EvgZyY9HZ47TZ8UQ99Ad5onLVZ0" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">WaysToMobileApps - Swift Programming </span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=comQ1-x2a1Q" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">freeCodeCamp.org - Swift Tutorial Full Course for Beginners</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL5PR3UyfTWvfgx9W8WJ9orQf6N1tx0oxN" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">iOS Academy - SwiftUI 2023: Tutorials & Walkthroughs</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLwvDm4VfkdpiLvzZFJI6rVIBtdolrJBVB" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> Swiftful Thinking - Swift Basics (Beginner Level)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
               <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLWZIhpNhtvfqBd00bF3ouroGHMPe-iroO" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> Yogesh Patel - Swift Basics (Beginner Level)</span>
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
          គន្លឹះក្នុងការរៀន Swift និង SwiftUI ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមជាមួយ Swift Basics និង SwiftUI Setup</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ជាមួយ Views និង Layouts ដើម្បីបង្កើត UI</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>រៀន State Management ដើម្បីគ្រប់គ្រង App State</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ Frameworks ដូចជា Core Data និង CloudKit</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ Projects ជាក់ស្តែងដូចជា Todo ឬ Weather App</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SwiftCourse;
