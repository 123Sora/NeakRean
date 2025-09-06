import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Software Engineering Management ---
import SEMLesson1_1Content from '../sem/lessons/SEMLesson1_1'; // Introduction to SEM
import SEMLesson1_2Content from '../sem/lessons/SEMLesson1_2'; // Role of the Software Manager
import SEMLesson1_3Content from '../sem/lessons/SEMLesson1_3'; // Key Principles and Challenges

// --- ផ្នែកទី ២: Software Development Life Cycle (SDLC) Models ---
import SEMLesson2_1Content from '../sem/lessons/SEMLesson2_1'; // Waterfall vs. Agile
import SEMLesson2_2Content from '../sem/lessons/SEMLesson2_2'; // Scrum and Kanban Methodologies
import SEMLesson2_3Content from '../sem/lessons/SEMLesson2_3'; // Lean and XP

// --- ផ្នែកទី ៣: Requirements Engineering and Analysis ---
import SEMLesson3_1Content from '../sem/lessons/SEMLesson3_1'; // Requirements Elicitation
import SEMLesson3_2Content from '../sem/lessons/SEMLesson3_2'; // Requirements Specification and Documentation
import SEMLesson3_3Content from '../sem/lessons/SEMLesson3_3'; // Managing Requirements Changes

// --- ផ្នែកទី ៤: Project Planning and Estimation ---
import SEMLesson4_1Content from '../sem/lessons/SEMLesson4_1'; // Effort and Cost Estimation Techniques
import SEMLesson4_2Content from '../sem/lessons/SEMLesson4_2'; // Project Scheduling and Gantt Charts
import SEMLesson4_3Content from '../sem/lessons/SEMLesson4_3'; // Resource Allocation and Management

// --- ផ្នែកទី ៥: Software Quality Assurance (SQA) ---
import SEMLesson5_1Content from '../sem/lessons/SEMLesson5_1'; // SQA Fundamentals and Standards
import SEMLesson5_2Content from '../sem/lessons/SEMLesson5_2'; // Software Testing and Validation
import SEMLesson5_3Content from '../sem/lessons/SEMLesson5_3'; // Configuration Management

// --- ផ្នែកទី ៦: Risk Management and Mitigation ---
import SEMLesson6_1Content from '../sem/lessons/SEMLesson6_1'; // Identifying Software Risks
import SEMLesson6_2Content from '../sem/lessons/SEMLesson6_2'; // Risk Analysis and Prioritization
import SEMLesson6_3Content from '../sem/lessons/SEMLesson6_3'; // Risk Mitigation Strategies

// --- ផ្នែកទី ៧: Leadership and Team Management ---
import SEMLesson7_1Content from '../sem/lessons/SEMLesson7_1'; // Building and Leading High-Performance Teams
import SEMLesson7_2Content from '../sem/lessons/SEMLesson7_2'; // Communication and Stakeholder Management
import SEMLesson7_3Content from '../sem/lessons/SEMLesson7_3'; // Conflict Resolution and Motivation

// --- ផ្នែកទី ៨: Advanced Topics and Tools ---
import SEMLesson8_1Content from '../sem/lessons/SEMLesson8_1'; // DevOps and Continuous Integration
import SEMLesson8_2Content from '../sem/lessons/SEMLesson8_2'; // CASE Tools and Project Management Software
import SEMLesson8_3Content from '../sem/lessons/SEMLesson8_3'; // Capstone Project: Managing a Software Project

function SEMCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Software Engineering Management',
      lessons: [
        { id: 'sem-lesson-1-1', ...SEMLesson1_1Content },
        { id: 'sem-lesson-1-2', ...SEMLesson1_2Content },
        { id: 'sem-lesson-1-3', ...SEMLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Software Development Life Cycle (SDLC) Models',
      lessons: [
        { id: 'sem-lesson-2-1', ...SEMLesson2_1Content },
        { id: 'sem-lesson-2-2', ...SEMLesson2_2Content },
        { id: 'sem-lesson-2-3', ...SEMLesson2_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Requirements Engineering and Analysis',
      lessons: [
        { id: 'sem-lesson-3-1', ...SEMLesson3_1Content },
        { id: 'sem-lesson-3-2', ...SEMLesson3_2Content },
        { id: 'sem-lesson-3-3', ...SEMLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Project Planning and Estimation',
      lessons: [
        { id: 'sem-lesson-4-1', ...SEMLesson4_1Content },
        { id: 'sem-lesson-4-2', ...SEMLesson4_2Content },
        { id: 'sem-lesson-4-3', ...SEMLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Software Quality Assurance (SQA)',
      lessons: [
        { id: 'sem-lesson-5-1', ...SEMLesson5_1Content },
        { id: 'sem-lesson-5-2', ...SEMLesson5_2Content },
        { id: 'sem-lesson-5-3', ...SEMLesson5_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Risk Management and Mitigation',
      lessons: [
        { id: 'sem-lesson-6-1', ...SEMLesson6_1Content },
        { id: 'sem-lesson-6-2', ...SEMLesson6_2Content },
        { id: 'sem-lesson-6-3', ...SEMLesson6_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Leadership and Team Management',
      lessons: [
        { id: 'sem-lesson-7-1', ...SEMLesson7_1Content },
        { id: 'sem-lesson-7-2', ...SEMLesson7_2Content },
        { id: 'sem-lesson-7-3', ...SEMLesson7_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-8',
      title: 'ផ្នែកទី ៨: Advanced Topics and Tools',
      lessons: [
        { id: 'sem-lesson-8-1', ...SEMLesson8_1Content },
        { id: 'sem-lesson-8-2', ...SEMLesson8_2Content },
        { id: 'sem-lesson-8-3', ...SEMLesson8_3Content },
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
      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" alt="SEM" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Software Engineering Management</h1>
            <p className="text-lg opacity-90">ការគ្រប់គ្រងវិស្វកម្ម Software</p>
          </div>
        </div>
        <p className="text-lg opacity-90 leading-relaxed">
          រៀនពីរបៀបគ្រប់គ្រងគម្រោង Software ឱ្យមានប្រសិទ្ធភាព។ 
          គ្របដណ្តប់លើ Software Development, Project Planning, Team Leadership និង Quality Assurance។
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
            <a href="https://www.ieee.org/computer-society/publications/software.html" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">IEEE Software - Industry Standards and Research</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.pmi.org/pmbok-guide-standards/foundational/pmbok" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">PMI - PMBOK Guide</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://agilemanifesto.org/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">The Agile Manifesto</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.atlassian.com/agile/tutorials" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Atlassian - Agile and DevOps Resources</span>
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
                <a href="https://www.youtube.com/playlist?list=PL2Tn6esdV2aub3qayORDtFAzrnXL-dco7" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Bro Kithya - SE and ITPM</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL2Tn6esdV2atCd1XZ1F6nTKrNtJG-AFGr" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Bro Kithya - SE and ITPM (2)</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLSUDaEna-msQ--lKnKJbNP6KNFyIu6fT7" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Vang Samieat - Introduction to Software Engineering</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=IHx9ImEMuzQ&list=PLQ-nEJNYlEV29CBLzIDxcogm6CEZjVad2" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">CS & IT Tutorials by Vrushali 👩‍🎓 - SE 1 : Learn Software Engineering from Scratch |</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLWPirh4EWFpG2b1L3CL-OAPYcM25jLjXH" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">TutorialsPoint - Software Engineering</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLzMcBGfZo4-nVu4ANTe7NuU0Ny6_oyQmV" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Tech With Tim - Software Design Basics</span>
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
          គន្លឹះក្នុងការរៀន Software Engineering Management ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ស្វែងយល់ពីគោលការណ៍គ្រឹះនៃ Software Development</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ Project Planning និង Estimation Techniques</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>សិក្សាពី Software Quality Assurance និង Configuration Management</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អភិវឌ្ឍន៍ជំនាញ Leadership និង Team Management</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ Project ជាក់ស្តែងដើម្បីគ្រប់គ្រង SDLC ទាំងមូល</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SEMCourse;