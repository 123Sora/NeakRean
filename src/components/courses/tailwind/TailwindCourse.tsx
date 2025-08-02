import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';

// Import individual lesson content
import TailwindLesson1_1Content from './lessons/TailwindLesson1_1';
import TailwindLesson1_2Content from './lessons/TailwindLesson1_2';
import TailwindLesson1_3Content from './lessons/TailwindLesson1_3';
import TailwindLesson2_1Content from './lessons/TailwindLesson2_1';
import TailwindLesson2_2Content from './lessons/TailwindLesson2_2';
import TailwindLesson2_3Content from './lessons/TailwindLesson2_3';
import TailwindLesson3_1Content from './lessons/TailwindLesson3_1';
import TailwindLesson3_2Content from './lessons/TailwindLesson3_2';
import TailwindLesson3_3Content from './lessons/TailwindLesson3_3';
import TailwindLesson4_1Content from './lessons/TailwindLesson4_1';
import TailwindLesson4_2Content from './lessons/TailwindLesson4_2';
import TailwindLesson5_1Content from './lessons/TailwindLesson5_1';


// Import the Lesson interface from the types file
import type { Lesson } from '../../../types/LessonTypes';

function TailwindCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Tailwind CSS',
      lessons: [
        { id: 'lesson-1-1', ...TailwindLesson1_1Content },
        { id: 'lesson-1-2', ...TailwindLesson1_2Content },
        { id: 'lesson-1-3', ...TailwindLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Layout និង Responsive Design',
      lessons: [
        { id: 'lesson-2-1', ...TailwindLesson2_1Content },
        { id: 'lesson-2-2', ...TailwindLesson2_2Content },
        { id: 'lesson-2-3', ...TailwindLesson2_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: ការរចនា Components',
      lessons: [
        { id: 'lesson-3-1', ...TailwindLesson3_1Content },
        { id: 'lesson-3-2', ...TailwindLesson3_2Content },
        { id: 'lesson-3-3', ...TailwindLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Customization និង Optimization',
      lessons: [
        { id: 'lesson-4-1', ...TailwindLesson4_1Content },
        { id: 'lesson-4-2', ...TailwindLesson4_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: លំហាត់អនុវត្តន៍',
      lessons: [
        { id: 'lesson-5-1', ...TailwindLesson5_1Content },
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
      <div className="bg-gradient-to-r from-cyan-700 to-blue-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Tailwind CSS</h1>
            <p className="text-lg opacity-90">Utility-First CSS Framework</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន Tailwind CSS ដើម្បីសរសេរ CSS ឲ្យមានប្រសិទ្ធភាពជាងមុន​។
          ប្រើប្រាស់ Utility Classes ដើម្បីបង្កើត Design ទំនើប។
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">11</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">30+</div>
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">10+</div>
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
                      className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-cyan-200 hover:bg-cyan-50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center group-hover:bg-cyan-200">
                          <Play className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-cyan-700">
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
                        <ChevronRight className="w-4 h-4 group-hover:text-cyan-600" />
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
            <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Tailwind CSS Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.w3schools.com/tailwindcss/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools Tailwind CSS Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://tailwindcss.com/components" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Tailwind UI Components (Official)</span>
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
                <a href="https://www.youtube.com/watch?v=72z6bab3B7M" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Sim Kimheang (Tailwind CSS 3)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=bZpNb0JfUtQ" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Ing Davann-អ៊ីង ដាវ៉ាន់ (Tailwind CSS)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=hkphSfWdWso" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">reanmore (រៀនប្រើ Tailwind CSS)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-purple-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-purple-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=lCxcTsOHrjo" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Dave Gray (Tailwind CSS Full Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=6biMWgD6_JY" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">JS Mastery (Tailwind CSS v4 Full Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=wEM5NdJ-8HY" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Chris Sev (Beginner Tailwind [FULL COURSE])</span>
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
          គន្លឹះក្នុងការរៀន Tailwind CSS ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-pink-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-pink-600" />
            <span>ស្វែងយល់ពី Utility-First ជាមុនសិន</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-pink-600" />
            <span>អនុវត្តន៍ដោយផ្ទាល់ជាមួយ Utility Classes ផ្សេងៗ</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-pink-600" />
            <span>ប្រើប្រាស់ Tailwind UI ឬ Component Libraries សម្រាប់ជាគំរូ</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-pink-600" />
            <span>សិក្សាពីរបៀបប្ដូរ Configuration និងបន្ថែម Custom Styles</span>
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

export default TailwindCourse;