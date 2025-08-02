import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Next.js និង ReactJS Fundamentals ---
import NextLesson1_1Content from '../nextjs/lessons/NextLesson1_1'; // ណែនាំអំពី Next.js
import NextLesson1_2Content from '../nextjs/lessons/NextLesson1_2'; // Setup Development Environment

// --- ផ្នែកទី ២: Routing និង Data Fetching ---
import NextLesson2_1Content from '../nextjs/lessons/NextLesson2_1'; // File-System Routing
import NextLesson2_2Content from '../nextjs/lessons/NextLesson2_2'; // Data Fetching Strategies
import NextLesson2_3Content from '../nextjs/lessons/NextLesson2_3'; // API Routes

// --- ផ្នែកទី ៣: Styling និង Optimization ---
import NextLesson3_1Content from '../nextjs/lessons/NextLesson3_1'; // Styling in Next.js
import NextLesson3_2Content from '../nextjs/lessons/NextLesson3_2'; // Image Optimization
import NextLesson3_3Content from '../nextjs/lessons/NextLesson3_3'; // Font Optimization
import NextLesson3_4Content from '../nextjs/lessons/NextLesson3_4'; // Metadata (SEO Optimization)
import NextLesson3_5Content from '../nextjs/lessons/NextLesson3_5'; // Fast Refresh

// --- ផ្នែកទី ៤: Advanced Next.js Concepts ---
import NextLesson4_1Content from '../nextjs/lessons/NextLesson4_1'; // Custom App and Document
import NextLesson4_2Content from '../nextjs/lessons/NextLesson4_2'; // Dynamic Imports
import NextLesson4_3Content from '../nextjs/lessons/NextLesson4_3'; // Absolute Imports and Module Path Aliases
import NextLesson4_4Content from '../nextjs/lessons/NextLesson4_4'; // Authentication

// --- ផ្នែកទី ៥: Next.js App Router ---
import NextLesson5_1Content from '../nextjs/lessons/NextLesson5_1'; // Introduction to App Router
import NextLesson5_2Content from '../nextjs/lessons/NextLesson5_2'; // Server and Client Components
import NextLesson5_3Content from '../nextjs/lessons/NextLesson5_3'; // Data Fetching in App Router
import NextLesson5_4Content from '../nextjs/lessons/NextLesson5_4'; // Layouts, Templates, and Loading UI
import NextLesson5_5Content from '../nextjs/lessons/NextLesson5_5'; // Metadata API    

// --- ផ្នែកទី ៦: Deployment និង Best Practices ---
import NextLesson6_1Content from '../nextjs/lessons/NextLesson6_1'; // Deployment
import NextLesson6_2Content from '../nextjs/lessons/NextLesson6_2'; // Best Practices and Performance Tips

  // --- ផ្នែកទី ៧: Project-Based Learning ---
  import NextLesson7_1Content from '../nextjs/lessons/NextLesson7_1'; // Simple Blog Website
  import NextLesson7_2Content from '../nextjs/lessons/NextLesson7_2'; // E-commerce Product Page
  import NextLesson7_3Content from '../nextjs/lessons/NextLesson7_3'; // Authentication Dashboard

function NextJSCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី Next.js និង ReactJS Fundamentals',
      lessons: [
        { id: 'next-lesson-1-1', ...NextLesson1_1Content },
        { id: 'next-lesson-1-2', ...NextLesson1_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: Routing និង Data Fetching (សម្រាប់ Pages Router)',
      lessons: [
        { id: 'next-lesson-2-1', ...NextLesson2_1Content },
        { id: 'next-lesson-2-2', ...NextLesson2_2Content },
        { id: 'next-lesson-2-3', ...NextLesson2_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: Styling និង Optimization',
      lessons: [
        { id: 'next-lesson-3-1', ...NextLesson3_1Content },
        { id: 'next-lesson-3-2', ...NextLesson3_2Content },
        { id: 'next-lesson-3-3', ...NextLesson3_3Content },
        { id: 'next-lesson-3-4', ...NextLesson3_4Content },
        { id: 'next-lesson-3-5', ...NextLesson3_5Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Advanced Next.js Concepts (សម្រាប់ Pages Router)',
      lessons: [
        { id: 'next-lesson-4-1', ...NextLesson4_1Content },
        { id: 'next-lesson-4-2', ...NextLesson4_2Content },
        { id: 'next-lesson-4-3', ...NextLesson4_3Content },
        { id: 'next-lesson-4-4', ...NextLesson4_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Next.js App Router (កំណែថ្មី - ត្រូវបានណែនាំ)',
      lessons: [
        { id: 'next-lesson-5-1', ...NextLesson5_1Content },
        { id: 'next-lesson-5-2', ...NextLesson5_2Content },
        { id: 'next-lesson-5-3', ...NextLesson5_3Content },
        { id: 'next-lesson-5-4', ...NextLesson5_4Content },
        { id: 'next-lesson-5-5', ...NextLesson5_5Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: Deployment និង Best Practices',
      lessons: [
        { id: 'next-lesson-6-1', ...NextLesson6_1Content },
        { id: 'next-lesson-6-2', ...NextLesson6_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Project-Based Learning (ការអនុវត្តន៍គម្រោង)',
      lessons: [
        { id: 'next-lesson-7-1', ...NextLesson7_1Content },
        { id: 'next-lesson-7-2', ...NextLesson7_2Content },
        { id: 'next-lesson-7-3', ...NextLesson7_3Content },
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
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ភាសា Next.js</h1>
            <p className="text-lg opacity-90">Next.js Framework for React Applications</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន Next.js ពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតខ្ពស់ ដើម្បីបង្កើត Production-ready React Applications ដែលមានប្រសិទ្ធភាព SEO, Performance និង Developer Experience។
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">24</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">7</div>
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
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Next.js Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://vercel.com/guides" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Vercel Guides</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.w3schools.com/react/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools React Tutorial (Next.js Prerequisites)</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">freeCodeCamp - React Course (Next.js Prerequisites)</span>
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
                <a href="https://www.youtube.com/playlist?list=PLoeO4Jo4aJBrkZCzrfALxjDUBMkSEGZFu" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Rorn - Next.js Tutorials</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLeacJXu3aQXHj_c4AtJl5yd4dtn8j5LdN" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> Master Backend - Next.js Tutorials</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=mTz0GXj8NN0" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Traversy Media - Next.js Crash Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Codevolution - Next.js Tutorial for Beginners</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Net Ninja - Next.js Tutorial</span>
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
          គន្លឹះក្នុងការរៀនភាសា Next.js ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>យល់ដឹងពី ReactJS ឲ្យច្បាស់: Next.js គឺបង្កើតឡើងនៅលើ React ដូច្នេះចំណេះដឹង React គឺជាមូលដ្ឋានគ្រឹះដ៏សំខាន់។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>យល់ដឹងពី SSR, SSG, CSR: នេះគឺជាគោលគំនិតស្នូលរបស់ Next.js។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ឲ្យបានច្រើន: ការកសាង Project ផ្ទាល់ខ្លួន គឺជាវិធីល្អបំផុតក្នុងការរៀន។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ផ្តោតលើ App Router: បើអ្នករៀន Next.js ឥឡូវនេះ គួរតែផ្តោតលើ App Router ព្រោះវាជាទិសដៅអនាគត។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អាន Documentation: ឯកសាររបស់ Next.js គឺលម្អិត ច្បាស់លាស់ និងត្រូវបាន Update ជានិច្ច។</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NextJSCourse;