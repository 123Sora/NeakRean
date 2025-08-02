import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer'; // Assuming LessonViewer component exists at this path

// Import individual lesson content
import PostmanLesson1_1Content from './lessons/PostmanLesson1_1';
import PostmanLesson1_2Content from './lessons/PostmanLesson1_2';
import PostmanLesson1_3Content from './lessons/PostmanLesson1_3';
import PostmanLesson2_1Content from './lessons/PostmanLesson2_1';
import PostmanLesson2_2Content from './lessons/PostmanLesson2_2';
import PostmanLesson2_3Content from './lessons/PostmanLesson2_3';
import PostmanLesson3_1Content from './lessons/PostmanLesson3_1';
import PostmanLesson3_2Content from './lessons/PostmanLesson3_2';
import PostmanLesson3_3Content from './lessons/PostmanLesson3_3';
import PostmanLesson4_1Content from './lessons/PostmanLesson4_1';
import PostmanLesson4_2Content from './lessons/PostmanLesson4_2';
import PostmanLesson5_1Content from './lessons/PostmanLesson5_1';
import PostmanLesson5_2Content from './lessons/PostmanLesson5_2';


// Define the Lesson and LessonContent types (assuming they are in types/LessonTypes.ts)
// This is a simplified version for demonstration.
// In a real project, you would import these types.
interface LessonContent {
  title: string;
  objectives: string[];
  content: string;
  examples: string[];
  quiz: { question: string; options: string[]; correct: number; explanation: string; }[];
  lab: { task: string; solution: string; };
}

interface Lesson extends LessonContent {
  id: string;
}

function PostmanCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  // Define the structure of the Postman course
  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Postman',
      lessons: [
        { id: 'lesson-1-1', ...PostmanLesson1_1Content },
        { id: 'lesson-1-2', ...PostmanLesson1_2Content },
        { id: 'lesson-1-3', ...PostmanLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: ការបង្កើត និងគ្រប់គ្រង Requests',
      lessons: [
        { id: 'lesson-2-1', ...PostmanLesson2_1Content },
        { id: 'lesson-2-2', ...PostmanLesson2_2Content },
        { id: 'lesson-2-3', ...PostmanLesson2_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Collections និង Environments',
      lessons: [
        { id: 'lesson-3-1', ...PostmanLesson3_1Content },
        { id: 'lesson-3-2', ...PostmanLesson3_2Content },
        { id: 'lesson-3-3', ...PostmanLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: ការតេស្ត និងស្វ័យប្រវត្តិកម្ម',
      lessons: [
        { id: 'lesson-4-1', ...PostmanLesson4_1Content },
        { id: 'lesson-4-2', ...PostmanLesson4_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: លក្ខណៈពិសេសកម្រិតខ្ពស់',
      lessons: [
        { id: 'lesson-5-1', ...PostmanLesson5_1Content },
        { id: 'lesson-5-2', ...PostmanLesson5_2Content }, // Added an extra lesson for 10+ total
      ] as Lesson[],
    },
  ];

  // Function to toggle the expansion state of a section
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Function to set the currently selected lesson
  const selectLesson = (lessonId: string) => {
    setSelectedLesson(lessonId);
  };

  // Function to get the content of the currently selected lesson
  const getCurrentLesson = () => {
    for (const section of courseStructure) {
      const lesson = section.lessons.find(l => l.id === selectedLesson);
      if (lesson) return lesson;
    }
    return null;
  };

  const currentLesson = getCurrentLesson();

  // If a lesson is selected, render the LessonViewer component
  if (currentLesson) {
    return <LessonViewer lesson={currentLesson} onBack={() => setSelectedLesson(null)} />;
  }

  // Calculate total lessons, examples, and labs for the header
  const totalLessons = courseStructure.reduce((sum, section) => sum + section.lessons.length, 0);
  const totalExamples = courseStructure.reduce((sum, section) =>
    sum + section.lessons.filter(lesson => lesson.examples && lesson.examples.length > 0).length, 0
  );
  const totalLabs = courseStructure.reduce((sum, section) =>
    sum + section.lessons.filter(lesson => lesson.lab && lesson.lab.task).length, 0
  );


  return (
    <div className="p-6 max-w-6xl mx-auto font-kantumruyPro">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white mb-8 shadow-lg">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3 shadow-inner">
            <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Postman</h1>
            <p className="text-lg opacity-90">API Testing Tool</p>
          </div>
        </div>
        <p className="text-lg opacity-90 leading-relaxed">
          រៀន​ Postman ដើម្បីធ្វើការតេស្ត API ។
          វគ្គសិក្សានេះនឹងណែនាំអ្នកពីមូលដ្ឋានគ្រឹះ រហូតដល់ការប្រើប្រាស់កម្រិតខ្ពស់នៃ Postman ។
        </p>

        {/* Course Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">{totalLessons}</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{courseStructure.length}</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{totalExamples}+</div>
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{totalLabs}+</div>
            <div className="text-sm opacity-75">លំហាត់</div>
          </div>
        </div>
      </div>

      {/* Course Structure */}
      <div className="space-y-6">
        {courseStructure.map((section) => (
          <div key={section.id} className="bg-white rounded-xl shadow-md border border-gray-100">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors rounded-t-xl"
            >
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              {expandedSections[section.id] ? (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {expandedSections[section.id] && (
              <div className="px-6 pb-6 border-t bg-gray-50 rounded-b-xl">
                <div className="space-y-3 mt-4">
                  {section.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      onClick={() => selectLesson(lesson.id)}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all cursor-pointer group"
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
                            {lesson.objectives.length} គោលបំណង • {lesson.examples && lesson.examples.length > 0 ? 'មានឧទាហរណ៍' : 'គ្មានឧទាហរណ៍'} • {lesson.quiz && lesson.quiz.length > 0 ? 'មាន Quiz' : 'គ្មាន Quiz'} • {lesson.lab && lesson.lab.task ? 'មាន Lab' : 'គ្មាន Lab'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        {lesson.content && <FileText className="w-4 h-4" />}
                        {lesson.quiz && lesson.quiz.length > 0 && <HelpCircle className="w-4 h-4" />}
                        {lesson.lab && lesson.lab.task && <Code className="w-4 h-4" />}
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
      <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center space-x-2">
          <BookOpen className="w-5 h-5" />
          <span>ឯកសារយោង (Documentation)</span>
        </h3>
        <ul className="space-y-2 text-orange-700">
          <li className="flex items-center space-x-2">
            <a href="https://www.postman.com/docs/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Postman Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://learning.postman.com/docs/getting-started/introduction/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Postman Learning Center</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.postman.com/api-platform/api-client/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Postman API Client</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
        </ul>
      </div>

      {/* YouTube Tutorials */}
      <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center space-x-2">
          <Youtube className="w-5 h-5" />
          <span>វីដេអូបង្រៀន (YouTube Tutorials)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាខ្មែរ (Khmer) 🇰🇭</h4>
            <ul className="space-y-2 text-red-600">
              {/* <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=kYJ6j8GfWq8" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Postman Tutorial Khmer (Khemra Learning)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=2e7w9pT1b0M" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">របៀបប្រើប្រាស់ Postman (Code with Vuthy)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li> */}
           
              <span className='text-sm text-gray-500' >គ្មាន postman courses ជាភាសាខ្មែរ</span><br />
              <span className='text-sm text-gray-500' >គ្មាន postman courses ជាភាសាខ្មែរ</span><br />
              <span className='text-sm text-gray-500' >គ្មាន postman courses ជាភាសាខ្មែរ</span>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=wEOLZq-7DYs" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> Automation Step by Step (Postman Tutorial for Beginners)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLL34mf651faNJ6Wm8elGZl5mr9Zf14dWH" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Software Testing Mentor (Postman Full Course)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
               <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=M_SlFuBSSVk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Testing Funda by Zeeshan Asghar (Postman From Zero to API Testing Master)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">
          គន្លឹះក្នុងការរៀន Postman ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-purple-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-purple-600" />
            <span>អនុវត្តន៍ការបង្កើត Requests ប្រភេទផ្សេងៗ</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-purple-600" />
            <span>ប្រើប្រាស់ Environment Variables សម្រាប់ API Keys និង URLs</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-purple-600" />
            <span>សរសេរ Test Scripts ដើម្បីផ្ទៀងផ្ទាត់ Responses</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-purple-600" />
            <span>រៀបចំ Requests របស់អ្នកទៅជា Collections</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-purple-600" />
            <span>ស្វែងយល់ពីរបៀបបង្កើត Mock Servers</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostmanCourse;