import { useState } from 'react';

import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';

import LessonViewer from '../../LessonViewer';

import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Vue.js និង JavaScript Fundamentals ---
import VueLesson1_1Content from '../vue/lessons/VueLesson1_1'; // ណែនាំអំពី Vue.js និង Front-end Development
import VueLesson1_2Content from '../vue/lessons/VueLesson1_2'; // JavaScript Fundamentals សម្រាប់ Vue.js
import VueLesson1_3Content from '../vue/lessons/VueLesson1_3'; // ការចាប់ផ្តើមជាមួយ Vue.js (The Basics)

// --- ផ្នែកទី ២: Vue.js Core Concepts (គោលគំនិតស្នូល) ---
import VueLesson2_1Content from '../vue/lessons/VueLesson2_1'; // Template Syntax និង Directives
import VueLesson2_2Content from '../vue/lessons/VueLesson2_2'; // Computed Properties និង Watchers
import VueLesson2_3Content from '../vue/lessons/VueLesson2_3'; // Class និង Style Bindings
import VueLesson2_4Content from '../vue/lessons/VueLesson2_4'; // Event Handling

// --- ផ្នែកទី ៣: Components (សមាសធាតុ) ---
import VueLesson3_1Content from '../vue/lessons/VueLesson3_1'; // ការណែនាំអំពី Vue Components
import VueLesson3_2Content from '../vue/lessons/VueLesson3_2'; // Component Communication
import VueLesson3_3Content from '../vue/lessons/VueLesson3_3'; // Lifecycle Hooks
import VueLesson3_4Content from '../vue/lessons/VueLesson3_4'; // Dynamic Components និង Async Components

// --- ផ្នែកទី ៤: Routing, State Management, និង Tooling ---
import VueLesson4_1Content from '../vue/lessons/VueLesson4_1'; // Vue Router
import VueLesson4_2Content from '../vue/lessons/VueLesson4_2'; // State Management ជាមួយ Pinia/Vuex
import VueLesson4_3Content from '../vue/lessons/VueLesson4_3'; // Vue CLI / Vite

// --- ផ្នែកទី ៥: ការប្រើប្រាស់ API និង Advanced Topics ---
import VueLesson5_1Content from '../vue/lessons/VueLesson5_1'; // ការធ្វើការជាមួយ APIs
import VueLesson5_2Content from '../vue/lessons/VueLesson5_2'; // Custom Directives និង Plugins
import VueLesson5_3Content from '../vue/lessons/VueLesson5_3'; // Transitions និង Animations

// --- ផ្នែកទី ៦: លំហាត់អនុវត្តន៍ និងគន្លឹះបន្ថែម ---
import VueLesson6_1Content from '../vue/lessons/VueLesson6_1'; // Project អនុវត្តន៍ពេញលេញ
import VueLesson6_2Content from '../vue/lessons/VueLesson6_2'; // គន្លឹះ និង Best Practices

function VueCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Vue.js និង JavaScript Fundamentals',
      lessons: [
        { id: 'vue-lesson-1-1', ...VueLesson1_1Content },
        { id: 'vue-lesson-1-2', ...VueLesson1_2Content },
        { id: 'vue-lesson-1-3', ...VueLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Vue.js Core Concepts (គោលគំនិតស្នូល)',
      lessons: [
        { id: 'vue-lesson-2-1', ...VueLesson2_1Content },
        { id: 'vue-lesson-2-2', ...VueLesson2_2Content },
        { id: 'vue-lesson-2-3', ...VueLesson2_3Content },
        { id: 'vue-lesson-2-4', ...VueLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Components (សមាសធាតុ)',
      lessons: [
        { id: 'vue-lesson-3-1', ...VueLesson3_1Content },
        { id: 'vue-lesson-3-2', ...VueLesson3_2Content },
        { id: 'vue-lesson-3-3', ...VueLesson3_3Content },
        { id: 'vue-lesson-3-4', ...VueLesson3_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Routing, State Management, និង Tooling',
      lessons: [
        { id: 'vue-lesson-4-1', ...VueLesson4_1Content },
        { id: 'vue-lesson-4-2', ...VueLesson4_2Content },
        { id: 'vue-lesson-4-3', ...VueLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: ការប្រើប្រាស់ API និង Advanced Topics',
      lessons: [
        { id: 'vue-lesson-5-1', ...VueLesson5_1Content },
        { id: 'vue-lesson-5-2', ...VueLesson5_2Content },
        { id: 'vue-lesson-5-3', ...VueLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: លំហាត់អនុវត្តន៍ និងគន្លឹះបន្ថែម',
      lessons: [
        { id: 'vue-lesson-6-1', ...VueLesson6_1Content },
        { id: 'vue-lesson-6-2', ...VueLesson6_2Content },
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
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Vue.js</h1>
            <p className="text-lg opacity-90">Progressive JavaScript Framework</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន Vue.js ពីមូលដ្ឋានគ្រឹះរហូតដល់ការ build Single-Page Applications (SPAs) និង User Interfaces ដ៏ស្រស់ស្អាត។
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់។
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">20</div> {/* Total lessons */}
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div> {/* Placeholder for more examples */}
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">40+</div> {/* Placeholder for more labs/quizzes */}
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
                      className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-green-200 hover:bg-green-50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-200">
                          <Play className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-green-700">
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
                        <ChevronRight className="w-4 h-4 group-hover:text-green-600" />
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
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Vue.js Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.w3schools.com/vue/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools Vue.js Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://v3.vuejs.org/guide/introduction.html" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Vue 3 Guide</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.tutorialspoint.com/vue/index.htm" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">TutorialsPoint Vue.js</span>
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
                <a href="https://www.youtube.com/playlist?list=PLWrsrLN26mWbi8qY9a5w2V62PM0-GVVb3" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">រៀន IT - Vue.js Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLLAXuTgf8nB7_HaqlG_W18qQdm45LyRTC" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">FrontendHub KH (នល់ មករា - Makara Nuol) - Vue3 Complete Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL_fJC7r0_scKucgZNv8Lfyl6GlUhtCY5T" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Phument Chanel - មេរៀន Vue js Framework ជំនាន់ទី 3</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              {/* Add more specific Khmer YouTube links if available */}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Net Ninja - Vue.js Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL_euSNU_eLbedoBv-RllKj_f2Yh--91nZ" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Leela Web Dev - Vue.js Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLbGui_ZYuhih5ItBhn2cTncaS24_Kgeui" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">T Geeky Shows - Vue JS Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Traversy Media - Vue.js Crash Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-3">
          គន្លឹះក្នុងការរៀន Vue.js ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-green-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
            <span>យល់ដឹងពី JavaScript Fundamentals ឲ្យច្បាស់: ជាពិសេស ES6+ Features និង Asynchronous JavaScript។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
            <span>អនុវត្តន៍ឲ្យបានច្រើន: ការបង្កើត Project ផ្ទាល់ខ្លួន គឺជាវិធីល្អបំផុតក្នុងការរៀន។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
            <span>ចាប់ផ្តើមពីតូចទៅធំ: ចាប់ផ្តើមពី Basic Concepts បន្ទាប់មករៀនពី Components, Routing, និង State Management។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
            <span>ប្រើប្រាស់ Vue Devtools: Extension នេះជួយអ្នក Debug និងយល់ពីរបៀបដែល Vue App របស់អ្នកដំណើរការ។</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VueCourse;