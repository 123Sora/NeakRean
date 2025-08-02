import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';

// Import individual lesson content
import BootstrapLesson1_1Content from './lessons/BootstrapLesson1_1';
import BootstrapLesson1_2Content from './lessons/BootstrapLesson1_2';
import BootstrapLesson1_3Content from './lessons/BootstrapLesson1_3';
import BootstrapLesson2_1Content from './lessons/BootstrapLesson2_1';
import BootstrapLesson2_2Content from './lessons/BootstrapLesson2_2';
import BootstrapLesson2_3Content from './lessons/BootstrapLesson2_3';
import BootstrapLesson2_4Content from './lessons/BootstrapLesson2_4';
import BootstrapLesson3_1Content from './lessons/BootstrapLesson3_1';
import BootstrapLesson3_2Content from './lessons/BootstrapLesson3_2';
import BootstrapLesson3_3Content from './lessons/BootstrapLesson3_3';
import BootstrapLesson3_4Content from './lessons/BootstrapLesson3_4';
import BootstrapLesson3_5Content from './lessons/BootstrapLesson3_5';
import BootstrapLesson3_6Content from './lessons/BootstrapLesson3_6';
import BootstrapLesson3_7Content from './lessons/BootstrapLesson3_7';
import BootstrapLesson4_1Content from './lessons/BootstrapLesson4_1';
import BootstrapLesson4_2Content from './lessons/BootstrapLesson4_2';
import BootstrapLesson5_1Content from './lessons/BootstrapLesson5_1';
import BootstrapLesson5_2Content from './lessons/BootstrapLesson5_2';

// Import the Lesson interface from the types file
import type { Lesson } from '../../../types/LessonTypes';

function BootstrapCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Bootstrap',
      lessons: [
        { id: 'lesson-1-1', ...BootstrapLesson1_1Content },
        { id: 'lesson-1-2', ...BootstrapLesson1_2Content },
        { id: 'lesson-1-3', ...BootstrapLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Bootstrap Grid System',
      lessons: [
        { id: 'lesson-2-1', ...BootstrapLesson2_1Content },
        { id: 'lesson-2-2', ...BootstrapLesson2_2Content },
        { id: 'lesson-2-3', ...BootstrapLesson2_3Content },
        { id: 'lesson-2-4', ...BootstrapLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Bootstrap Components',
      lessons: [
        { id: 'lesson-3-1', ...BootstrapLesson3_1Content },
        { id: 'lesson-3-2', ...BootstrapLesson3_2Content },
        { id: 'lesson-3-3', ...BootstrapLesson3_3Content },
        { id: 'lesson-3-4', ...BootstrapLesson3_4Content },
        { id: 'lesson-3-5', ...BootstrapLesson3_5Content },
        { id: 'lesson-3-6', ...BootstrapLesson3_6Content },
        { id: 'lesson-3-7', ...BootstrapLesson3_7Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Utilities និង Customization',
      lessons: [
        { id: 'lesson-4-1', ...BootstrapLesson4_1Content },
        { id: 'lesson-4-2', ...BootstrapLesson4_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: លំហាត់អនុវត្តន៍',
      lessons: [
        { id: 'lesson-5-1', ...BootstrapLesson5_1Content },
        { id: 'lesson-5-2', ...BootstrapLesson5_2Content },
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
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Bootstrap</h1>
            <p className="text-lg opacity-90">CSS Framework</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន Bootstrap ដើម្បីបង្កើតគេហទំព័រឲ្យមានលក្ខណៈ Responsive ។ 
          ប្រើប្រាស់ Components និង Utilities ដែលមានស្រាប់។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">16</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">40+</div>
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">15+</div>
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
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center space-x-2">
          <BookOpen className="w-5 h-5" />
          <span>ឯកសារយោង (Documentation)</span>
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-center space-x-2">
            <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Bootstrap 5 Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.w3schools.com/bootstrap5/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools Bootstrap 5 Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://getbootstrap.com/docs/5.3/examples/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Bootstrap 5 Examples</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
        </ul>
      </div>

      {/* YouTube Tutorials */}
      <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center space-x-2">
          <Youtube className="w-5 h-5" />
          <span>វីដេអូបង្រៀន (YouTube Tutorials)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-purple-700 mb-2">ភាសាខ្មែរ (Khmer) 🇰🇭</h4>
            <ul className="space-y-2 text-purple-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLb7Jk4WtxwmpRKah2EZP1RPr8NG_u_d9i" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Sim Kimheang (Bootstrap Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLIsGHGMXD0IkIZ2OmRk56CJELOV6DRj4z" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Ing Davann-អ៊ីង ដាវ៉ាន់ (Bootstrap Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
               <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLuEdNLfGOtnV3EnO8-chaKANn529fStHq" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Khode Academy</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-purple-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-purple-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=b9g4_8nAsdA" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> ByteGrad (Bootstrap 5 Full Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=Jyvffr3aCp0" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Web Dev Simplified (Bootstrap 5 Crash Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="mt-8 bg-pink-50 border border-pink-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-pink-800 mb-3">
          គន្លឹះក្នុងការរៀន Bootstrap ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-pink-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-pink-600" />
            <span>ចាប់ផ្តើមពី Grid System ជាមុនសិន ព្រោះវាជាគ្រឹះសំខាន់បំផុត</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-pink-600" />
            <span>ស្វែងយល់ពី Utility Classes ដើម្បីសន្សំសំចៃពេលវេលាសរសេរកូដ</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-pink-600" />
            <span>អនុវត្តន៍ Components ម្តងមួយៗ ដើម្បីយល់ដឹងពីមុខងារ (functions)</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-pink-600" />
            <span>ប្រើ Browser Developer Tools ដើម្បីសិក្សាពីការប្រើប្រាស់ Classes</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BootstrapCourse;