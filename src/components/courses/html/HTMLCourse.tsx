import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react'; // Added BookOpen and Youtube icons
import LessonViewer from '../../LessonViewer';

// Import individual lesson content
import Lesson1_1Content from '../html/lessons/HTMLLesson1_1';
import Lesson1_2Content from '../html/lessons/HTMLLesson1_2';
import Lesson2_1Content from '../html/lessons/HTMLLesson2_1';
import Lesson2_2Content from '../html/lessons/HTMLLesson2_2';
import Lesson2_3Content from '../html/lessons/HTMLLesson2_3';
import Lesson2_4Content from '../html/lessons/HTMLLesson2_4';
import Lesson2_5Content from '../html/lessons/HTMLLesson2_5';
import Lesson2_6Content from '../html/lessons/HTMLLesson2_6';
import Lesson3_1Content from '../html/lessons/HTMLLesson3_1';
import Lesson3_2Content from '../html/lessons/HTMLLesson3_2';
import Lesson4_1Content from '../html/lessons/HTMLLesson4_1';
import Lesson4_2Content from '../html/lessons/HTMLLesson4_2'; // Corrected if it was 4_4 previously, assuming typo
import Lesson4_3Content from '../html/lessons/HTMLLesson4_3';
import Lesson5_1Content from '../html/lessons/HTMLLesson5_1';
import Lesson6_1Content from '../html/lessons/HTMLLesson6_1';
import Lesson6_2Content from '../html/lessons/HTMLLesson6_2';


// Import the Lesson interface from the new types file
import type { Lesson } from '../../../types/LessonTypes';


function HTMLCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី HTML',
      lessons: [
        { id: 'lesson-1-1', ...Lesson1_1Content },
        { id: 'lesson-1-2', ...Lesson1_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Elements និង Attributes មូលដ្ឋាន',
      lessons: [
        { id: 'lesson-2-1', ...Lesson2_1Content },
        { id: 'lesson-2-2', ...Lesson2_2Content },
        { id: 'lesson-2-3', ...Lesson2_3Content },
        { id: 'lesson-2-4', ...Lesson2_4Content },
        { id: 'lesson-2-5', ...Lesson2_5Content },
        { id: 'lesson-2-6', ...Lesson2_6Content },
      ] as Lesson[],
    },
      {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: ការរៀបចំទិន្នន័យ និង Forms',
      lessons: [
        { id: 'lesson-3-1', ...Lesson3_1Content },     
        { id: 'lesson-3-2', ...Lesson3_2Content },       
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: HTML5 និង Semantic Elements',
      lessons: [
        { id: 'lesson-4-1', ...Lesson4_1Content },     
        { id: 'lesson-4-2', ...Lesson4_2Content },   
        { id: 'lesson-4-3', ...Lesson4_3Content },     
      ] as Lesson[],
    },
      {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: ការណែនាំអំពី CSS (ដើម្បីរចនាម៉ូត)',
      lessons: [
        { id: 'lesson-5-1', ...Lesson5_1Content },
      ] as Lesson[],
    },
      {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: លំហាត់អនុវត្តន៍',
      lessons: [
        { id: 'lesson-6-1', ...Lesson6_1Content },
        { id: 'lesson-6-2', ...Lesson6_2Content },
      ] as Lesson[],
    },
    // Add more sections and lessons here by importing their content
    // and adding them to the appropriate 'lessons' array.
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
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ភាសា HTML</h1>
            <p className="text-lg opacity-90">HyperText Markup Language</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀនភាសា HTML ពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតនៃការបង្កើតគេហទំព័រពេញលេញ។ 
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">16</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">6</div>
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
                      className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-orange-200 hover:bg-orange-50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center group-hover:bg-orange-200">
                          <Play className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-orange-700">
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
                        <ChevronRight className="w-4 h-4 group-hover:text-orange-600" />
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
            <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools HTML Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">MDN Web Docs - HTML</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">HTML Living Standard (WHATWG)</span>
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
                <a href="https://www.youtube.com/playlist?list=PL59BLNDGwut8uucqcllUeK_-tIJzVd8yl" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">JomNum Tech (HTML Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLuEdNLfGOtnWYYrz0AGh50HEgwKlfUSMF" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Khode Academy (HTML Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              {/* Add more Khmer YouTube links here */}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-purple-700 mb-2">ភាសាអង់គ្លេស (English) </h4>
            <ul className="space-y-2 text-purple-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLZPZq0r_RZOPoNttk9beDhO_Bu5DA-xwP" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> Bro Code (HTML Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">w3schools.com (HTML Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              {/* Add more English YouTube links here */}
            </ul>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-orange-800 mb-3">
          គន្លឹះក្នុងការរៀនភាសា HTML ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-orange-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-orange-600" />
            <span>អនុវត្តន៍ឱ្យបានច្រើន - ការសរសេរ Code ដោយខ្លួនឯងគឺជាវិធីល្អបំផុត</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-orange-600" />
            <span>កុំខ្លាចនឹងធ្វើខុស - កំហុសគឺជាផ្នែកមួយនៃការរៀន</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-orange-600" />
            <span>ស្វែងយល់ពីរបៀបដំណើរការ - យល់ពីមូលហេតុដែល Code ដំណើរការ</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-orange-600" />
            <span>ធ្វើលំហាត់ Lab និង Quiz ទាំងអស់ដើម្បីពង្រឹងចំណេះដឹង</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HTMLCourse;