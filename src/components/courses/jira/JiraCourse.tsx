import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube, } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Jira និង Agile Fundamentals ---
import JiraLesson1_1Content from '../jira/lessons/JiraLesson1_1'; // ណែនាំអំពី Jira និង Agile Software Development
import JiraLesson1_2Content from '../jira/lessons/JiraLesson1_2'; // ការកំណត់រចនាសម្ព័ន្ធ Project និង Issue Types
import JiraLesson1_3Content from '../jira/lessons/JiraLesson1_3'; // ការបង្កើត និងគ្រប់គ្រង Tasks, Bugs និង Stories

// --- ផ្នែកទី ២: ការគ្រប់គ្រង Boards ---
import JiraLesson2_1Content from '../jira/lessons/JiraLesson2_1'; // ណែនាំអំពី Kanban Boards
import JiraLesson2_2Content from '../jira/lessons/JiraLesson2_2'; // ការប្រើប្រាស់ Scrum Boards
import JiraLesson2_3Content from '../jira/lessons/JiraLesson2_3'; // ការបង្កើត និងគ្រប់គ្រង Sprints

// --- ផ្នែកទី ៣: ការគ្រប់គ្រង Issues (Tasks) និង Workflow ---
import JiraLesson3_1Content from '../jira/lessons/JiraLesson3_1'; // ការប្រើប្រាស់ Workflows
import JiraLesson3_2Content from '../jira/lessons/JiraLesson3_2'; // ការស្វែងរក និង Filter Issues (JQL)
import JiraLesson3_3Content from '../jira/lessons/JiraLesson3_3'; // ការភ្ជាប់ Issues និង Sub-tasks

// --- ផ្នែកទី ៤: របាយការណ៍ និង Dashboard ---
import JiraLesson4_1Content from '../jira/lessons/JiraLesson4_1'; // ការបង្កើត Dashboards
import JiraLesson4_2Content from '../jira/lessons/JiraLesson4_2'; // ការប្រើប្រាស់ Widgets និង Gadgets 
import JiraLesson4_3Content from '../jira/lessons/JiraLesson4_3'; // ការវិភាគរបាយការណ៍ (Reports)

// --- ផ្នែកទី ៥: ការគ្រប់គ្រង User, Permissions និង Integration ---
import JiraLesson5_1Content from '../jira/lessons/JiraLesson5_1'; // ការគ្រប់គ្រង Users និង Roles
import JiraLesson5_2Content from '../jira/lessons/JiraLesson5_2'; // ការកំណត់ Permissions
import JiraLesson5_3Content from '../jira/lessons/JiraLesson5_3'; // Jira Integrations (ជាមួយ GitHub, Slack, etc.)

// --- ផ្នែកទី ៦: Project-Based Learning ---
import JiraLesson6_1Content from '../jira/lessons/JiraLesson6_1'; // Project ១: ការគ្រប់គ្រង Personal Project
import JiraLesson6_2Content from '../jira/lessons/JiraLesson6_2'; // Project ២: ការគ្រប់គ្រង Group Project (Scrum Workflow)
import JiraLesson6_3Content from '../jira/lessons/JiraLesson6_3'; // Project ៣: ការគ្រប់គ្រង Group Project (Kanban Workflow)

function JiraCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Jira និង Agile Fundamentals',
      lessons: [
        { id: 'jira-lesson-1-1', ...JiraLesson1_1Content },
        { id: 'jira-lesson-1-2', ...JiraLesson1_2Content },
        { id: 'jira-lesson-1-3', ...JiraLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: ការគ្រប់គ្រង Boards',
      lessons: [
        { id: 'jira-lesson-2-1', ...JiraLesson2_1Content },
        { id: 'jira-lesson-2-2', ...JiraLesson2_2Content },
        { id: 'jira-lesson-2-3', ...JiraLesson2_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: ការគ្រប់គ្រង Issues (Tasks) និង Workflow',
      lessons: [
        { id: 'jira-lesson-3-1', ...JiraLesson3_1Content },
        { id: 'jira-lesson-3-2', ...JiraLesson3_2Content },
        { id: 'jira-lesson-3-3', ...JiraLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: របាយការណ៍ និង Dashboard',
      lessons: [
        { id: 'jira-lesson-4-1', ...JiraLesson4_1Content },
        { id: 'jira-lesson-4-2', ...JiraLesson4_2Content },
        { id: 'jira-lesson-4-3', ...JiraLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: ការគ្រប់គ្រង User, Permissions និង Integration',
      lessons: [
        { id: 'jira-lesson-5-1', ...JiraLesson5_1Content },
        { id: 'jira-lesson-5-2', ...JiraLesson5_2Content },
        { id: 'jira-lesson-5-3', ...JiraLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Project-Based Learning',
      lessons: [
        { id: 'jira-lesson-6-1', ...JiraLesson6_1Content },
        { id: 'jira-lesson-6-2', ...JiraLesson6_2Content },
        { id: 'jira-lesson-6-3', ...JiraLesson6_3Content },
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
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" alt="Jira" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Jira</h1>
            <p className="text-lg opacity-90">Agile Project & Issue Tracking</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀនពីរបៀបប្រើប្រាស់ Jira ដើម្បីគ្រប់គ្រងគម្រោង Software Development, តាមដាន Tasks និងធ្វើការសហការជាមួយក្រុមការងារ។
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">18</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">30+</div>
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">20+</div>
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
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center space-x-2">
          <BookOpen className="w-5 h-5" />
          <span>ឯកសារយោង (Documentation)</span>
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-center space-x-2">
            <a href="https://support.atlassian.com/jira-software/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Jira Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://university.atlassian.com/student/catalog" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Atlassian University</span>
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
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
{/*                 <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">គ្មាន​ Jira Tutorials ជាភាសាខ្មែរ</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a> */}
                <span className="text-sm">គ្មាន​ Jira Tutorials ជាភាសាខ្មែរ</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=Beozx9pUajA" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Code Step By Step - Jira Complete Tutorial | jira tool full course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=nHuhojfjeUY" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Simon Sez IT - Jira Tutorial for Beginners: Jira Project Management</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=NDVSMlVYxm8" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Alvin the PM - Jira for Beginners (FREE COURSE!)</span>
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
          គន្លឹះក្នុងការរៀន Jira ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>បង្កើតគម្រោងសាកល្បង: អនុវត្តន៍ដោយផ្ទាល់ជាមួយ Project សាកល្បងដើម្បីយល់ពី Flow។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ស្វែងយល់ពី Agile Concepts: ត្រូវយល់ពី Scrum និង Kanban ដើម្បីប្រើប្រាស់ Jira Boards ឲ្យចំគោលដៅ។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ JQL: រៀន Jira Query Language ដើម្បីស្វែងរកទិន្នន័យបានលឿននិងត្រឹមត្រូវ។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចូលរួម Community: ចូលរួម Forum ឬ Group ដើម្បីរៀនពីបទពិសោធន៍របស់អ្នកដទៃ។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អាន Documentation</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JiraCourse;