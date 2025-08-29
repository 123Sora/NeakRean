import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពីវាក្យស័ព្ទសរសេរកម្មវិធី ---
import TerminologyLesson1_1Content from '../terminology/lessons/TerminologyLesson1_1'; // វាក្យស័ព្ទមូលដ្ឋាន
import TerminologyLesson1_2Content from '../terminology/lessons/TerminologyLesson1_2'; // បរិបទនៃវាក្យស័ព្ទ
import TerminologyLesson1_3Content from '../terminology/lessons/TerminologyLesson1_3'; // ការប្រើប្រាស់វាក្យស័ព្ទក្នុងកូដ

// --- ផ្នែកទី ២: វាក្យស័ព្ទទាក់ទងនឹង Data ---
import TerminologyLesson2_1Content from '../terminology/lessons/TerminologyLesson2_1'; // Variables និង Constants
import TerminologyLesson2_2Content from '../terminology/lessons/TerminologyLesson2_2'; // Data Types
import TerminologyLesson2_3Content from '../terminology/lessons/TerminologyLesson2_3'; // Type Systems

// --- ផ្នែកទី ៣: វាក្យស័ព្ទទាក់ទងនឹង Control Flow ---
import TerminologyLesson3_1Content from '../terminology/lessons/TerminologyLesson3_1'; // Conditional Terms
import TerminologyLesson3_2Content from '../terminology/lessons/TerminologyLesson3_2'; // Loop Terms
import TerminologyLesson3_3Content from '../terminology/lessons/TerminologyLesson3_3'; // Branching Terms

// --- ផ្នែកទី ៤: វាក្យស័ព្ទទាក់ទងនឹង Functions ---
import TerminologyLesson4_1Content from '../terminology/lessons/TerminologyLesson4_1'; // Function Definitions
import TerminologyLesson4_2Content from '../terminology/lessons/TerminologyLesson4_2'; // Parameters and Arguments
import TerminologyLesson4_3Content from '../terminology/lessons/TerminologyLesson4_3'; // Scope and Closure Terms

// --- ផ្នែកទី ៥: វាក្យស័ព្ទទាក់ទងនឹង Data Structures ---
import TerminologyLesson5_1Content from '../terminology/lessons/TerminologyLesson5_1'; // Array Terms
import TerminologyLesson5_2Content from '../terminology/lessons/TerminologyLesson5_2'; // Object Terms
import TerminologyLesson5_3Content from '../terminology/lessons/TerminologyLesson5_3'; // Collection Terms

// --- ផ្នែកទី ៦: វាក្យស័ព្ទទាក់ទងនឹង Algorithms ---
import TerminologyLesson6_1Content from '../terminology/lessons/TerminologyLesson6_1'; // Algorithm Terminology
import TerminologyLesson6_2Content from '../terminology/lessons/TerminologyLesson6_2'; // Sorting Terms
import TerminologyLesson6_3Content from '../terminology/lessons/TerminologyLesson6_3'; // Searching Terms

// --- ផ្នែកទី ៧: វាក្យស័ព្ទទាក់ទងនឹង Best Practices ---
import TerminologyLesson7_1Content from '../terminology/lessons/TerminologyLesson7_1'; // Code Readability Terms
import TerminologyLesson7_2Content from '../terminology/lessons/TerminologyLesson7_2'; // Documentation Terms

function TerminologyCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពីវាក្យស័ព្ទសរសេរកម្មវិធី',
      lessons: [
        { id: 'terminology-lesson-1-1', ...TerminologyLesson1_1Content },
        { id: 'terminology-lesson-1-2', ...TerminologyLesson1_2Content },
        { id: 'terminology-lesson-1-3', ...TerminologyLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: វាក្យស័ព្ទទាក់ទងនឹង Data',
      lessons: [
        { id: 'terminology-lesson-2-1', ...TerminologyLesson2_1Content },
        { id: 'terminology-lesson-2-2', ...TerminologyLesson2_2Content },
        { id: 'terminology-lesson-2-3', ...TerminologyLesson2_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: វាក្យស័ព្ទទាក់ទងនឹង Control Flow',
      lessons: [
        { id: 'terminology-lesson-3-1', ...TerminologyLesson3_1Content },
        { id: 'terminology-lesson-3-2', ...TerminologyLesson3_2Content },
        { id: 'terminology-lesson-3-3', ...TerminologyLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: វាក្យស័ព្ទទាក់ទងនឹង Functions',
      lessons: [
        { id: 'terminology-lesson-4-1', ...TerminologyLesson4_1Content },
        { id: 'terminology-lesson-4-2', ...TerminologyLesson4_2Content },
        { id: 'terminology-lesson-4-3', ...TerminologyLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: វាក្យស័ព្ទទាក់ទងនឹង Data Structures',
      lessons: [
        { id: 'terminology-lesson-5-1', ...TerminologyLesson5_1Content },
        { id: 'terminology-lesson-5-2', ...TerminologyLesson5_2Content },
        { id: 'terminology-lesson-5-3', ...TerminologyLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: វាក្យស័ព្ទទាក់ទងនឹង Algorithms',
      lessons: [
        { id: 'terminology-lesson-6-1', ...TerminologyLesson6_1Content },
        { id: 'terminology-lesson-6-2', ...TerminologyLesson6_2Content },
        { id: 'terminology-lesson-6-3', ...TerminologyLesson6_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: វាក្យស័ព្ទទាក់ទងនឹង Best Practices',
      lessons: [
        { id: 'terminology-lesson-7-1', ...TerminologyLesson7_1Content },
        { id: 'terminology-lesson-7-2', ...TerminologyLesson7_2Content },
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
      <div className="bg-gradient-to-r from-blue-500 to-teal-600 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img
              src="https://www.vectorlogo.zone/logos/docusaurus/docusaurus-icon.svg"
              alt="Programming Terminology"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Programming Terminology</h1>
            <p className="text-lg opacity-90">វាក្យស័ព្ទសរសេរកម្មវិធី</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀនសូត្រវាក្យស័ព្ទសំខាន់ៗនៃការសរសេរកម្មវិធី។ 
          សម្រាប់អ្នកចាប់ផ្តើមដែលចង់យល់ពីពាក្យបច្ចេកទេសក្នុងការសរសេរកូដ។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">20</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">7</div>
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
            <a href="https://www.programiz.com/python-programming/glossary" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Programiz - Python Glossary</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.w3schools.com/python/python_reference.asp" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools - Python Reference</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://docs.python.org/3/glossary.html" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Python Official Documentation - Glossary</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.codecademy.com/learn/learn-python-3/modules/learn-python3-glossary" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Codecademy - Python Terminology</span>
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
                  <span className="text-sm">NIMTo DevStack - Programming Basics in Khmer</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL651Eh0LyfjPY4EhRiNNuqzZc-VHNKVfm" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">CMABO SOK - Learn Programming Concepts</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=rfscVS0vtbw" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">freeCodeCamp - Learn Python Programming</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLTjRvDozrdlxj5wgH4qkvwSOy4Gf_1X6B" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Harvard CS50 - Introduction to Programming</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=eWRfhZUzrAc" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Programming with Mosh - Python Terms Explained</span>
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
          គន្លឹះក្នុងការរៀន Programming Terminology ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមជាមួយវាក្យស័ព្ទមូលដ្ឋានដូចជា Variable និង Function</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ស្វែងយល់បរិបទនៃវាក្យស័ព្ទក្នុងកម្មវិធីផ្សេងៗ</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>រៀនវាក្យស័ព្ទទាក់ទងនឹង Control Flow ដើម្បីយល់ Logic</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ស្វែងយល់ពី Data Structures តាមរយៈវាក្យស័ព្ទដូចជា Array និង Object</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍វាក្យស័ព្ទ Algorithms ជាមួយឧទាហរណ៍ជាក់ស្តែង</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TerminologyCourse;
