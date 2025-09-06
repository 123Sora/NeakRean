import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី MIS និង Business Systems ---
import MISLesson1_1Content from '../mis/lessons/MISLesson1_1'; // Introduction to MIS
import MISLesson1_2Content from '../mis/lessons/MISLesson1_2'; // Business Systems Overview
import MISLesson1_3Content from '../mis/lessons/MISLesson1_3'; // Role of MIS in Organizations

// --- ផ្នែកទី ២: Database Design and Data Management ---
import MISLesson2_1Content from '../mis/lessons/MISLesson2_1'; // Database Fundamentals
import MISLesson2_2Content from '../mis/lessons/MISLesson2_2'; // Relational Database Design
import MISLesson2_3Content from '../mis/lessons/MISLesson2_3'; // SQL and Data Queries

// --- ផ្នែកទី ៣: Business Process Analysis and Modeling ---
import MISLesson3_1Content from '../mis/lessons/MISLesson3_1'; // Business Process Fundamentals
import MISLesson3_2Content from '../mis/lessons/MISLesson3_2'; // Process Modeling Techniques
import MISLesson3_3Content from '../mis/lessons/MISLesson3_3'; // Workflow Optimization

// --- ផ្នែកទី ៤: System Development Life Cycle (SDLC) ---
import MISLesson4_1Content from '../mis/lessons/MISLesson4_1'; // SDLC Overview
import MISLesson4_2Content from '../mis/lessons/MISLesson4_2'; // Requirement Analysis
import MISLesson4_3Content from '../mis/lessons/MISLesson4_3'; // System Implementation

// --- ផ្នែកទី ៥: Enterprise Resource Planning (ERP) ---
import MISLesson5_1Content from '../mis/lessons/MISLesson5_1'; // Introduction to ERP
import MISLesson5_2Content from '../mis/lessons/MISLesson5_2'; // ERP Modules and Functionality
import MISLesson5_3Content from '../mis/lessons/MISLesson5_3'; // ERP Implementation Strategies

// --- ផ្នែកទី ៦: Decision Support Systems (DSS) ---
import MISLesson6_1Content from '../mis/lessons/MISLesson6_1'; // DSS Basics
import MISLesson6_2Content from '../mis/lessons/MISLesson6_2'; // Data Visualization for Decision Making
import MISLesson6_3Content from '../mis/lessons/MISLesson6_3'; // Advanced DSS Tools

// --- ផ្នែកទី ៧: IT Governance and Strategy ---
import MISLesson7_1Content from '../mis/lessons/MISLesson7_1'; // IT Governance Frameworks
import MISLesson7_2Content from '../mis/lessons/MISLesson7_2'; // Strategic IT Planning
import MISLesson7_3Content from '../mis/lessons/MISLesson7_3'; // Risk Management in IT

// --- ផ្នែកទី ៨: Project-Based Learning and Applications ---
import MISLesson8_1Content from '../mis/lessons/MISLesson8_1'; // Building a MIS Dashboard
import MISLesson8_2Content from '../mis/lessons/MISLesson8_2'; // Developing an ERP Module
import MISLesson8_3Content from '../mis/lessons/MISLesson8_3'; // Business Intelligence Project

function MISCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី MIS និង Business Systems',
      lessons: [
        { id: 'mis-lesson-1-1', ...MISLesson1_1Content },
        { id: 'mis-lesson-1-2', ...MISLesson1_2Content },
        { id: 'mis-lesson-1-3', ...MISLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Database Design និង Data Management',
      lessons: [
        { id: 'mis-lesson-2-1', ...MISLesson2_1Content },
        { id: 'mis-lesson-2-2', ...MISLesson2_2Content },
        { id: 'mis-lesson-2-3', ...MISLesson2_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Business Process Analysis និង Modeling',
      lessons: [
        { id: 'mis-lesson-3-1', ...MISLesson3_1Content },
        { id: 'mis-lesson-3-2', ...MISLesson3_2Content },
        { id: 'mis-lesson-3-3', ...MISLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: System Development Life Cycle (SDLC)',
      lessons: [
        { id: 'mis-lesson-4-1', ...MISLesson4_1Content },
        { id: 'mis-lesson-4-2', ...MISLesson4_2Content },
        { id: 'mis-lesson-4-3', ...MISLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Enterprise Resource Planning (ERP)',
      lessons: [
        { id: 'mis-lesson-5-1', ...MISLesson5_1Content },
        { id: 'mis-lesson-5-2', ...MISLesson5_2Content },
        { id: 'mis-lesson-5-3', ...MISLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Decision Support Systems (DSS)',
      lessons: [
        { id: 'mis-lesson-6-1', ...MISLesson6_1Content },
        { id: 'mis-lesson-6-2', ...MISLesson6_2Content },
        { id: 'mis-lesson-6-3', ...MISLesson6_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: IT Governance និង Strategy',
      lessons: [
        { id: 'mis-lesson-7-1', ...MISLesson7_1Content },
        { id: 'mis-lesson-7-2', ...MISLesson7_2Content },
        { id: 'mis-lesson-7-3', ...MISLesson7_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-8',
      title: 'ផ្នែកទី ៨: Project-Based Learning and Applications',
      lessons: [
        { id: 'mis-lesson-8-1', ...MISLesson8_1Content },
        { id: 'mis-lesson-8-2', ...MISLesson8_2Content },
        { id: 'mis-lesson-8-3', ...MISLesson8_3Content },
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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" alt="MIS" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Management Information Systems</h1>
            <p className="text-lg opacity-90">ប្រព័ន្ធព័ត៌មានគ្រប់គ្រង</p>
          </div>
        </div>
        <p className="text-lg opacity-90 leading-relaxed">
          រៀន MIS ដើម្បីគ្រប់គ្រងព័ត៌មាននិងប្រព័ន្ធក្នុង Organizations ។ 
          ប្រើប្រាស់ Database Management, Business Analysis, System Design និង IT Strategy។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">25</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">70+</div>
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
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
            <a href="https://www.misq.org/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">MIS Quarterly - Research and Resources</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.isaca.org/resources/it-governance" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">ISACA - IT Governance Resources</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.oracle.com/erp/what-is-erp/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Oracle - ERP Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.sas.com/en_us/insights/business-intelligence.html" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">SAS - Business Intelligence Resources</span>
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
                <a href="https://www.youtube.com/playlist?list=PL2Tn6esdV2attTwHItDkKUiUFE-nPFGO1" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Bro Kithya - MIS in Khmer</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL2Tn6esdV2atzNSnay9nFxFv-Nmi_4rJf" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Bro Kithya - MIS (2) in Khmer</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL1vtGId5rAwVDTs-_FpwHNShhqI1i9Qm8" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Orçun Madran - Introduction to Management </span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL6V02ZNz0tw59JDxr4Kt9XPM_HO-k8o_W" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Andrew Miller - Management Information Systems</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
               <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLim9gWjsjN-MpFDCjM5n2HfI9NFrsoDe6" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Learning with Dr. Anand Vyas - Management Information Systems</span>
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
          គន្លឹះក្នុងការរៀន MIS ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមជាមួយគោលគំនិត MIS និង Business Systems</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>រៀន Database Design និង SQL Queries</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ Business Process Modeling</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ស្វែងយល់ពី SDLC និង ERP Systems</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ Projects ជាក់ស្តែងដូចជា MIS Dashboard</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MISCourse;