import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Version Control និង Git Fundamentals ---
import GitHubLesson1_1Content from '../github/lessons/GitHubLesson1_1'; // ណែនាំអំពី Version Control System (VCS)
import GitHubLesson1_2Content from '../github/lessons/GitHubLesson1_2'; // ការដំឡើង Git និង Setup Environment
import GitHubLesson1_3Content from '../github/lessons/GitHubLesson1_3'; // Git Basic Commands (មូលដ្ឋានគ្រឹះ)

// --- ផ្នែកទី ២: GitHub Concepts និង Remote Repositories ---
import GitHubLesson2_1Content from '../github/lessons/GitHubLesson2_1'; // ណែនាំអំពី GitHub
import GitHubLesson2_2Content from '../github/lessons/GitHubLesson2_2'; // ការគ្រប់គ្រង Remote Repositories

// --- ផ្នែកទី ៣: Branching និង Merging (មែកធាង និងការបញ្ចូលគ្នា) ---
import GitHubLesson3_1Content from '../github/lessons/GitHubLesson3_1'; // Git Branches (មែកធាង)
import GitHubLesson3_2Content from '../github/lessons/GitHubLesson3_2'; // Git Merging (ការបញ្ចូលគ្នា)
import GitHubLesson3_3Content from '../github/lessons/GitHubLesson3_3'; // Git Rebase (កម្រិតខ្ពស់)

// --- ផ្នែកទី ៤: ការសហការលើ GitHub ---
import GitHubLesson4_1Content from '../github/lessons/GitHubLesson4_1'; // Pull Requests (PRs) / Merge Requests
import GitHubLesson4_2Content from '../github/lessons/GitHubLesson4_2'; // Forking a Repository
import GitHubLesson4_3Content from '../github/lessons/GitHubLesson4_3'; // Collaborators និង Teams

// --- ផ្នែកទី ៥: GitHub Features និង Workflows ---
import GitHubLesson5_1Content from '../github/lessons/GitHubLesson5_1'; // Issues (បញ្ហា) និង Projects (សម្រាប់ Task Management)
import GitHubLesson5_2Content from '../github/lessons/GitHubLesson5_2'; // GitHub Actions (CI/CD)
import GitHubLesson5_3Content from '../github/lessons/GitHubLesson5_3'; // GitHub Pages (សម្រាប់ Hosting Static Websites)
import GitHubLesson5_4Content from '../github/lessons/GitHubLesson5_4'; // GitHub Gist និង Markdown

// --- ផ្នែកទី ៦: Git Advanced Topics និង Best Practices ---
import GitHubLesson6_1Content from '../github/lessons/GitHubLesson6_1'; // Git Stashing (ការរក្សាទុកការផ្លាស់ប្តូរបណ្ដោះអាសន្ន)
import GitHubLesson6_2Content from '../github/lessons/GitHubLesson6_2'; // Git Tagging (ការដាក់ស្លាកកំណែ)
import GitHubLesson6_3Content from '../github/lessons/GitHubLesson6_3'; // Git .gitignore File
import GitHubLesson6_4Content from '../github/lessons/GitHubLesson6_4'; // Git Best Practices

// --- ផ្នែកទី ៧: Project-Based Learning ---
import GitHubLesson7_1Content from '../github/lessons/GitHubLesson7_1'; // Project ១: ការគ្រប់គ្រង Personal Project
import GitHubLesson7_2Content from '../github/lessons/GitHubLesson7_2'; // Project ២: ការសហការលើ Group Project
import GitHubLesson7_3Content from '../github/lessons/GitHubLesson7_3'; // Project ៣: Contributing to Open Source

function GitHubCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Version Control និង Git Fundamentals',
      lessons: [
        { id: 'github-lesson-1-1', ...GitHubLesson1_1Content },
        { id: 'github-lesson-1-2', ...GitHubLesson1_2Content },
        { id: 'github-lesson-1-3', ...GitHubLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: GitHub Concepts និង Remote Repositories',
      lessons: [
        { id: 'github-lesson-2-1', ...GitHubLesson2_1Content },
        { id: 'github-lesson-2-2', ...GitHubLesson2_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Branching និង Merging (មែកធាង និងការបញ្ចូលគ្នា)',
      lessons: [
        { id: 'github-lesson-3-1', ...GitHubLesson3_1Content },
        { id: 'github-lesson-3-2', ...GitHubLesson3_2Content },
        { id: 'github-lesson-3-3', ...GitHubLesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: ការសហការលើ GitHub',
      lessons: [
        { id: 'github-lesson-4-1', ...GitHubLesson4_1Content },
        { id: 'github-lesson-4-2', ...GitHubLesson4_2Content },
        { id: 'github-lesson-4-3', ...GitHubLesson4_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: GitHub Features និង Workflows',
      lessons: [
        { id: 'github-lesson-5-1', ...GitHubLesson5_1Content },
        { id: 'github-lesson-5-2', ...GitHubLesson5_2Content },
        { id: 'github-lesson-5-3', ...GitHubLesson5_3Content },
        { id: 'github-lesson-5-4', ...GitHubLesson5_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Git Advanced Topics និង Best Practices',
      lessons: [
        { id: 'github-lesson-6-1', ...GitHubLesson6_1Content },
        { id: 'github-lesson-6-2', ...GitHubLesson6_2Content },
        { id: 'github-lesson-6-3', ...GitHubLesson6_3Content },
        { id: 'github-lesson-6-4', ...GitHubLesson6_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Project-Based Learning',
      lessons: [
        { id: 'github-lesson-7-1', ...GitHubLesson7_1Content },
        { id: 'github-lesson-7-2', ...GitHubLesson7_2Content },
        { id: 'github-lesson-7-3', ...GitHubLesson7_3Content },
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
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">GitHub</h1>
            <p className="text-lg opacity-90">Version Control & Collaboration Platform</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន Git និង GitHub ពីមូលដ្ឋានគ្រឹះរហូតដល់ការសហការលើគម្រោង និងការប្រើប្រាស់ Features កម្រិតខ្ពស់។
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់។
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">22</div>
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
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center space-x-2">
          <BookOpen className="w-5 h-5" />
          <span>ឯកសារយោង (Documentation)</span>
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-center space-x-2">
            <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Git Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://docs.github.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">GitHub Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://git-scm.com/book/en/v2" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Pro Git Book</span>
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
                <a href="https://www.youtube.com/playlist?list=PLBeXQH2pKypmrnRD93oulDOcluTSnkY0g" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> MengSreang Channel - Git & GitHub Tutorials</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=EzjOoivuRBo" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Khode Academy - Git Basics</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=2TA8EMbu1K8" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Sothearin Ren - Git Tutorial </span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=ulQA5tjJark" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Academind - Git & GitHub Crash Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL_euSNU_eLbegnt7aR8I1gXfLhKZbxnYX" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Leela Web Dev - GIT Complete Course Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Net Ninja - Git & GitHub Tutorial for Beginners</span>
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
          គន្លឹះក្នុងការរៀន Git និង GitHub ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ឲ្យបានច្រើន: ការប្រើប្រាស់ Commands ដោយផ្ទាល់គឺជាវិធីល្អបំផុតក្នុងការរៀន។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ចាប់ផ្តើមពី Basic Commands: ត្រូវយល់ច្បាស់ពី add, commit, push, pull មុននឹងបន្តទៅ Advanced Topics។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ Command Line: ទោះបីមាន GUI Tools ក៏ដោយ ការយល់ដឹងពី Command Line គឺសំខាន់ណាស់។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>កុំខ្លាចនឹងធ្វើខុស: Git មាន Tools សម្រាប់ជួយអ្នកកែតម្រូវកំហុស។</span>
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

export default GitHubCourse;