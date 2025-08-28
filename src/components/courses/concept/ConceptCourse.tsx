import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពីការសរសេរកម្មវិធី ---
import ConceptLesson1_1Content from '../concept/lessons/ConceptLesson1_1'; // អ្វីទៅជាការសរសេរកម្មវិធី?
import ConceptLesson1_2Content from '../concept/lessons/ConceptLesson1_2'; // ប្រវត្តិនៃការសរសេរកម្មវិធី
import ConceptLesson1_3Content from '../concept/lessons/ConceptLesson1_3'; // ឧបករណ៍និងបរិស្ថានសម្រាប់អ្នកចាប់ផ្តើម

// --- ផ្នែកទី ២: Variables និង Data Types ---
import ConceptLesson2_1Content from '../concept/lessons/ConceptLesson2_1'; // ការយល់ដឹងអំពី Variables
import ConceptLesson2_2Content from '../concept/lessons/ConceptLesson2_2'; // Data Types និងការប្រើប្រាស់
import ConceptLesson2_3Content from '../concept/lessons/ConceptLesson2_3'; // ការប្រកាសនិងផ្លាស់ប្តូរ Variables

// --- ផ្នែកទី ៣: Control Structures ---
import ConceptLesson3_1Content from '../concept/lessons/ConceptLesson3_1'; // If/Else Statements
import ConceptLesson3_2Content from '../concept/lessons/ConceptLesson3_2'; // Loops (For, While)
import ConceptLesson3_3Content from '../concept/lessons/ConceptLesson3_3'; // Switch Statements

// --- ផ្នែកទី ៤: Functions និង Methods ---
import ConceptLesson4_1Content from '../concept/lessons/ConceptLesson4_1'; // ការបង្កើតនិងប្រើ Functions
import ConceptLesson4_2Content from '../concept/lessons/ConceptLesson4_2'; // Parameters និង Return Values
import ConceptLesson4_3Content from '../concept/lessons/ConceptLesson4_3'; // Scope និង Closures

// --- ផ្នែកទី ៥: Arrays និង Objects ---
import ConceptLesson5_1Content from '../concept/lessons/ConceptLesson5_1'; // Arrays និងការគ្រប់គ្រង
import ConceptLesson5_2Content from '../concept/lessons/ConceptLesson5_2'; // Objects និង Properties
import ConceptLesson5_3Content from '../concept/lessons/ConceptLesson5_3'; // Iterating Data Structures

// --- ផ្នែកទី ៦: Problem Solving Techniques ---
import ConceptLesson6_1Content from '../concept/lessons/ConceptLesson6_1'; // វិធីសាស្ត្រដោះស្រាយបញ្ហា
import ConceptLesson6_2Content from '../concept/lessons/ConceptLesson6_2'; // Debugging Basics
import ConceptLesson6_3Content from '../concept/lessons/ConceptLesson6_3'; // Code Optimization

// --- ផ្នែកទី ៧: Algorithms និង Logic ---
import ConceptLesson7_1Content from '../concept/lessons/ConceptLesson7_1'; // ក្បួនដោះស្រាយបញ្ហាមូលដ្ឋាន
import ConceptLesson7_2Content from '../concept/lessons/ConceptLesson7_2'; // Sorting Algorithms
import ConceptLesson7_3Content from '../concept/lessons/ConceptLesson7_3'; // Searching Algorithms

// --- ផ្នែកទី ៨: Best Practices សម្រាប់ Beginners ---
import ConceptLesson8_1Content from '../concept/lessons/ConceptLesson8_1'; // Code Readability
import ConceptLesson8_2Content from '../concept/lessons/ConceptLesson8_2'; // Commenting and Documentation

function ConceptCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពីការសរសេរកម្មវិធី',
      lessons: [
        { id: 'concept-lesson-1-1', ...ConceptLesson1_1Content },
        { id: 'concept-lesson-1-2', ...ConceptLesson1_2Content },
        { id: 'concept-lesson-1-3', ...ConceptLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Variables និង Data Types',
      lessons: [
        { id: 'concept-lesson-2-1', ...ConceptLesson2_1Content },
        { id: 'concept-lesson-2-2', ...ConceptLesson2_2Content },
        { id: 'concept-lesson-2-3', ...ConceptLesson2_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Control Structures',
      lessons: [
        { id: 'concept-lesson-3-1', ...ConceptLesson3_1Content },
        { id: 'concept-lesson-3-2', ...ConceptLesson3_2Content },
        { id: 'concept-lesson-3-3', ...ConceptLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Functions និង Methods',
      lessons: [
        { id: 'concept-lesson-4-1', ...ConceptLesson4_1Content },
        { id: 'concept-lesson-4-2', ...ConceptLesson4_2Content },
        { id: 'concept-lesson-4-3', ...ConceptLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Arrays និង Objects',
      lessons: [
        { id: 'concept-lesson-5-1', ...ConceptLesson5_1Content },
        { id: 'concept-lesson-5-2', ...ConceptLesson5_2Content },
        { id: 'concept-lesson-5-3', ...ConceptLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Problem Solving Techniques',
      lessons: [
        { id: 'concept-lesson-6-1', ...ConceptLesson6_1Content },
        { id: 'concept-lesson-6-2', ...ConceptLesson6_2Content },
        { id: 'concept-lesson-6-3', ...ConceptLesson6_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Algorithms និង Logic',
      lessons: [
        { id: 'concept-lesson-7-1', ...ConceptLesson7_1Content },
        { id: 'concept-lesson-7-2', ...ConceptLesson7_2Content },
        { id: 'concept-lesson-7-3', ...ConceptLesson7_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-8',
      title: 'ផ្នែកទី ៨: Best Practices សម្រាប់ Beginners',
      lessons: [
        { id: 'concept-lesson-8-1', ...ConceptLesson8_1Content },
        { id: 'concept-lesson-8-2', ...ConceptLesson8_2Content },
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
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/readme/readme-original.svg"
              alt="Programming Concepts"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Programming Concepts</h1>
            <p className="text-lg opacity-90">គោលគំនិតកម្មវិធី</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀនសូត្រគោលគំនិតមូលដ្ឋានរបស់ការសរសេរកម្មវិធី។ 
          សម្រាប់អ្នកចាប់ផ្តើមដែលចង់ចាប់ផ្តើមរៀនការសរសេរកម្មវិធី។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">20</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">8</div>
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
            <a href="https://www.programiz.com/learn-programming" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Programiz - Learn Programming</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.w3schools.com/cs/index.php" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools - Programming Basics</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://learn.microsoft.com/en-us/training/paths/get-started-programming/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Microsoft Learn - Programming Fundamentals</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.freecodecamp.org/learn/scientific-computing-with-python/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">freeCodeCamp - Programming with Python</span>
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
                <a href="https://www.youtube.com/watch?v=8DvywoWv6fI" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Programming with Mosh - Programming for Beginners</span>
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
          គន្លឹះក្នុងការរៀន Programming Concepts ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមជាមួយគោលគំនិតមូលដ្ឋានដូចជា Variables និង Data Types</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ Control Structures ដើម្បីគ្រប់គ្រងលំហូរកម្មវិធី</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>រៀនប្រើ Functions ដើម្បីរៀបចំកូដឲ្យមានរបៀប</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ស្វែងយល់ Arrays និង Objects សម្រាប់ទិន្នន័យស្មុគស្មាញ</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ Algorithms និង Problem Solving ជាមួយលំហាត់ជាក់ស្តែង</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ConceptCourse;