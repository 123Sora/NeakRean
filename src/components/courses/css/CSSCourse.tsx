// src/components/courses/CSSCourse.tsx

import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes'; 

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី CSS និងមូលដ្ឋានគ្រឹះ ---
import CSSLesson1_1Content from '../css/lessons/CSSLesson1_1'; // ណែនាំអំពី CSS
import CSSLesson1_2Content from '../css/lessons/CSSLesson1_2'; // របៀបភ្ជាប់ CSS ទៅ HTML
import CSSLesson1_3Content from '../css/lessons/CSSLesson1_3'; // CSS Syntax (វាក្យសម្ព័ន្ធ)
import CSSLesson1_4Content from '../css/lessons/CSSLesson1_4'; // CSS Comments (ការដាក់ Comment)

// // --- ផ្នែកទី ២: CSS Selectors (ឧបករណ៍ជ្រើសរើស Element) ---
import CSSLesson2_1Content from '../css/lessons/CSSLesson2_1'; // Basic Selectors
import CSSLesson2_2Content from '../css/lessons/CSSLesson2_2'; // Combinator Selectors
import CSSLesson2_3Content from '../css/lessons/CSSLesson2_3'; // Pseudo-class Selectors
import CSSLesson2_4Content from '../css/lessons/CSSLesson2_4'; // Attribute Selectors

// // --- ផ្នែកទី ៣: CSS Properties មូលដ្ឋាន ---
import CSSLesson3_1Content from '../css/lessons/CSSLesson3_1'; // Colors (ពណ៌)
import CSSLesson3_2Content from '../css/lessons/CSSLesson3_2'; // Backgrounds (ផ្ទៃខាងក្រោយ)
import CSSLesson3_3Content from '../css/lessons/CSSLesson3_3'; // Fonts (ពុម្ពអក្សរ)
import CSSLesson3_4Content from '../css/lessons/CSSLesson3_4'; // Text (អក្សរ)
import CSSLesson3_5Content from '../css/lessons/CSSLesson3_5'; // Box Model (គំរូប្រអប់)
import CSSLesson3_6Content from '../css/lessons/CSSLesson3_6'; // Display Property

// // --- ផ្នែកទី ៤: CSS Layouts (ការរៀបចំប្លង់) ---
import CSSLesson4_1Content from '../css/lessons/CSSLesson4_1'; // Positioning (ការកំណត់ទីតាំង)
import CSSLesson4_2Content from '../css/lessons/CSSLesson4_2'; // Floats (អក្សរព័ទ្ធរូបភាព)
import CSSLesson4_3Content from '../css/lessons/CSSLesson4_3'; // Flexbox (ប្លង់បត់បែន)
import CSSLesson4_4Content from '../css/lessons/CSSLesson4_4'; // CSS Grid (ប្លង់ក្រឡាចត្រង្គ)

// // --- ផ្នែកទី ៥: Advanced CSS Topics (ប្រធានបទកម្រិតខ្ពស់) ---
import CSSLesson5_1Content from '../css/lessons/CSSLesson5_1'; // Responsive Design (ការរចនាឲ្យសមនឹងអេក្រង់)
import CSSLesson5_2Content from '../css/lessons/CSSLesson5_2'; // Transitions (ការផ្លាស់ប្តូរដោយរលូន)
import CSSLesson5_3Content from '../css/lessons/CSSLesson5_3'; // Transformations (ការបំប្លែង)
import CSSLesson5_4Content from '../css/lessons/CSSLesson5_4'; // Animations (ចលនា)
import CSSLesson5_5Content from '../css/lessons/CSSLesson5_5'; // CSS Variables (Custom Properties)
import CSSLesson5_6Content from '../css/lessons/CSSLesson5_6'; // Pseudo-elements
import CSSLesson5_7Content from '../css/lessons/CSSLesson5_7'; // Z-index (លំដាប់ជាន់គ្នា)

// // --- ផ្នែកទី ៦: លំហាត់អនុវត្តន៍ និង Best Practices ---
import CSSLesson6_1Content from '../css/lessons/CSSLesson6_1'; // បង្កើតទំព័រគេហទំព័រពេញលេញជាមួយ HTML & CSS
import CSSLesson6_2Content from '../css/lessons/CSSLesson6_2'; // CSS Best Practices
import CSSLesson6_3Content from '../css/lessons/CSSLesson6_3'; // ណែនាំអំពី CSS Frameworks (ស្រេចចិត្ត)


function CSSCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី CSS និងមូលដ្ឋានគ្រឹះ',
      lessons: [
        { id: 'css-lesson-1-1', ...CSSLesson1_1Content },
        { id: 'css-lesson-1-2', ...CSSLesson1_2Content },
        { id: 'css-lesson-1-3', ...CSSLesson1_3Content },
        { id: 'css-lesson-1-4', ...CSSLesson1_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: CSS Selectors (ឧបករណ៍ជ្រើសរើស Element)',
      lessons: [
        { id: 'css-lesson-2-1', ...CSSLesson2_1Content },
        { id: 'css-lesson-2-2', ...CSSLesson2_2Content },
        { id: 'css-lesson-2-3', ...CSSLesson2_3Content },
        { id: 'css-lesson-2-4', ...CSSLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: CSS Properties មូលដ្ឋាន',
      lessons: [
        { id: 'css-lesson-3-1', ...CSSLesson3_1Content },
        { id: 'css-lesson-3-2', ...CSSLesson3_2Content },
        { id: 'css-lesson-3-3', ...CSSLesson3_3Content },
        { id: 'css-lesson-3-4', ...CSSLesson3_4Content },
        { id: 'css-lesson-3-5', ...CSSLesson3_5Content },
        { id: 'css-lesson-3-6', ...CSSLesson3_6Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: CSS Layouts (ការរៀបចំប្លង់)',
      lessons: [
        { id: 'css-lesson-4-1', ...CSSLesson4_1Content },
        { id: 'css-lesson-4-2', ...CSSLesson4_2Content },
        { id: 'css-lesson-4-3', ...CSSLesson4_3Content },
        { id: 'css-lesson-4-4', ...CSSLesson4_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Advanced CSS Topics (ប្រធានបទកម្រិតខ្ពស់)',
      lessons: [
        { id: 'css-lesson-5-1', ...CSSLesson5_1Content },
        { id: 'css-lesson-5-2', ...CSSLesson5_2Content },
        { id: 'css-lesson-5-3', ...CSSLesson5_3Content },
        { id: 'css-lesson-5-4', ...CSSLesson5_4Content },
        { id: 'css-lesson-5-5', ...CSSLesson5_5Content },
        { id: 'css-lesson-5-6', ...CSSLesson5_6Content },
        { id: 'css-lesson-5-7', ...CSSLesson5_7Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: លំហាត់អនុវត្តន៍ និង Best Practices',
      lessons: [
        { id: 'css-lesson-6-1', ...CSSLesson6_1Content },
        { id: 'css-lesson-6-2', ...CSSLesson6_2Content },
        { id: 'css-lesson-6-3', ...CSSLesson6_3Content },
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ភាសា CSS</h1>
            <p className="text-lg opacity-90">Cascading Style Sheets</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀនភាសា CSS ពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតនៃការរចនាម៉ូតគេហទំព័រ​ ( Style Websites) ឲ្យស្រស់ស្អាត និង Responsive។ 
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">28</div> {/* Total lessons */}
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">70+</div> {/* Placeholder for more examples */}
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div> {/* Placeholder for more labs/quizzes */}
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
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools CSS Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://web.dev/learn/css" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">web.dev - Learn CSS</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
            <li className="flex items-center space-x-2">
            <a href="https://www.codewithharry.com/tutorial/overview/css-introduction" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">CodeWithHarry - CSS Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          
          <li className="flex items-center space-x-2">
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">MDN Web Docs - CSS</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">CSS-Tricks (Advanced Guides & Tips)</span>
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
                <a href="https://www.youtube.com/watch?v=MGnRbKYD5gk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">reanmore (HTML and CSS Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLBeXQH2pKypk3w3IY5pJZMJV8coTMCD2r" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">MengSreang Channel - CSS Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL938URpgZ7qZ5VJ-6IwkBTBucoeDv4gs0" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Computer Science 101 - CS101KH (CSS Course  )</span>
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
                <a href="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Dave Gray (CSS Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL4-IK0AVhVjOJs_UjdQeyEZ_cmEV3uJvx" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Kevin Powell (HTML & CSS Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Net Ninja (CSS Course)</span>
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
          គន្លឹះក្នុងការរៀន​​ភាសា CSS ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>កុំរំលង HTML: ត្រូវប្រាកដថាអ្នកយល់ច្បាស់ពី HTML មុននឹងបន្តទៅ CSS។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>សរសេរ Code ឲ្យបានច្រើន: អនុវត្តន៍រាល់ Concept ដែលបានរៀន។</span>
          </li>
          {/* <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើ Developer Tools: រៀនប្រើ Inspect Element (Right-click -> Inspect) នៅក្នុង Browser របស់អ្នក ដើម្បី Debug និងកែសម្រួល CSS ។</span>
          </li> */}
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ស្វែងយល់ពី Box Model ឲ្យច្បាស់: នេះជាមូលដ្ឋានគ្រឹះដ៏សំខាន់សម្រាប់ CSS Layouts។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមពី Basic ទៅ Advanced: កុំប្រញាប់រៀនអ្វីដែលស្មុគស្មាញពេក បើមិនទាន់យល់មូលដ្ឋានគ្រឹះច្បាស់។</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CSSCourse;