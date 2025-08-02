import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី MySQL និង Database Fundamentals ---
import MySQLLesson1_1Content from '../mysql/lessons/MYSQLLesson1_1'; // ណែនាំអំពី Databases និង MySQL
import MySQLLesson1_2Content from '../mysql/lessons/MYSQLLesson1_2'; // ការដំឡើង និង Setup Environment

// --- ផ្នែកទី ២: SQL Fundamentals ---
import MySQLLesson2_1Content from '../mysql/lessons/MYSQLLesson2_1'; // ណែនាំអំពី SQL
import MySQLLesson2_2Content from '../mysql/lessons/MYSQLLesson2_2'; // DDL - ការបង្កើត និងគ្រប់គ្រង Database Structure
import MySQLLesson2_3Content from '../mysql/lessons/MYSQLLesson2_3'; // DML - ការបញ្ចូល, កែប្រែ, លុប Data
import MySQLLesson2_4Content from '../mysql/lessons/MYSQLLesson2_4'; // DML - SELECT Statement

// --- ផ្នែកទី ៣: SQL Advanced Concepts ---
import MySQLLesson3_1Content from '../mysql/lessons/MYSQLLesson3_1'; // Aggregate Functions
import MySQLLesson3_2Content from '../mysql/lessons/MYSQLLesson3_2'; // SQL JOINs
import MySQLLesson3_3Content from '../mysql/lessons/MYSQLLesson3_3'; // Subqueries
import MySQLLesson3_4Content from '../mysql/lessons/MYSQLLesson3_4'; // Views
import MySQLLesson3_5Content from '../mysql/lessons/MYSQLLesson3_5'; // Stored Procedures និង Functions
import MySQLLesson3_6Content from '../mysql/lessons/MYSQLLesson3_6'; // Triggers
import MySQLLesson3_7Content from '../mysql/lessons/MYSQLLesson3_7'; // Indexes

// --- ផ្នែកទី ៤: Database Design និង Normalization ---
import MySQLLesson4_1Content from '../mysql/lessons/MYSQLLesson4_1'; // Database Design Principles
import MySQLLesson4_2Content from '../mysql/lessons/MYSQLLesson4_2'; // Normalization

// --- ផ្នែកទី ៥: Database Administration ---
import MySQLLesson5_1Content from '../mysql/lessons/MYSQLLesson5_1'; // User Management និង Permissions
import MySQLLesson5_2Content from '../mysql/lessons/MYSQLLesson5_2'; // Backup និង Restore
import MySQLLesson5_3Content from '../mysql/lessons/MYSQLLesson5_3'; // Performance Tuning
import MySQLLesson5_4Content from '../mysql/lessons/MYSQLLesson5_4'; // Transaction Management

// --- ផ្នែកទី ៦: ការភ្ជាប់ MySQL ជាមួយ Programming Languages ---
import MySQLLesson6_1Content from '../mysql/lessons/MYSQLLesson6_1'; // ការភ្ជាប់ MySQL ជាមួយ Node.js
import MySQLLesson6_2Content from '../mysql/lessons/MYSQLLesson6_2'; // ការភ្ជាប់ MySQL ជាមួយ PHP
import MySQLLesson6_3Content from '../mysql/lessons/MYSQLLesson6_3'; // ការភ្ជាប់ MySQL ជាមួយ Python

// --- ផ្នែកទី ៧: Project-Based Learning ---
import MySQLLesson7_1Content from '../mysql/lessons/MYSQLLesson7_1'; // Database សម្រាប់ Student Management System
import MySQLLesson7_2Content from '../mysql/lessons/MYSQLLesson7_2'; // Database សម្រាប់ E-commerce Website
import MySQLLesson7_3Content from '../mysql/lessons/MYSQLLesson7_3'; // MySQL Backend API

function MySQLCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី MySQL និង Database Fundamentals',
      lessons: [
        { id: 'mysql-lesson-1-1', ...MySQLLesson1_1Content },
        { id: 'mysql-lesson-1-2', ...MySQLLesson1_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: SQL Fundamentals',
      lessons: [
        { id: 'mysql-lesson-2-1', ...MySQLLesson2_1Content },
        { id: 'mysql-lesson-2-2', ...MySQLLesson2_2Content },
        { id: 'mysql-lesson-2-3', ...MySQLLesson2_3Content },
        { id: 'mysql-lesson-2-4', ...MySQLLesson2_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: SQL Advanced Concepts',
      lessons: [
        { id: 'mysql-lesson-3-1', ...MySQLLesson3_1Content },
        { id: 'mysql-lesson-3-2', ...MySQLLesson3_2Content },
        { id: 'mysql-lesson-3-3', ...MySQLLesson3_3Content },
        { id: 'mysql-lesson-3-4', ...MySQLLesson3_4Content },
        { id: 'mysql-lesson-3-5', ...MySQLLesson3_5Content },
        { id: 'mysql-lesson-3-6', ...MySQLLesson3_6Content },
        { id: 'mysql-lesson-3-7', ...MySQLLesson3_7Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Database Design និង Normalization',
      lessons: [
        { id: 'mysql-lesson-4-1', ...MySQLLesson4_1Content },
        { id: 'mysql-lesson-4-2', ...MySQLLesson4_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Database Administration',
      lessons: [
        { id: 'mysql-lesson-5-1', ...MySQLLesson5_1Content },
        { id: 'mysql-lesson-5-2', ...MySQLLesson5_2Content },
        { id: 'mysql-lesson-5-3', ...MySQLLesson5_3Content },
        { id: 'mysql-lesson-5-4', ...MySQLLesson5_4Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: ការភ្ជាប់ MySQL ជាមួយ Programming Languages',
      lessons: [
        { id: 'mysql-lesson-6-1', ...MySQLLesson6_1Content },
        { id: 'mysql-lesson-6-2', ...MySQLLesson6_2Content },
        { id: 'mysql-lesson-6-3', ...MySQLLesson6_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-7',
      title: 'ផ្នែកទី ៧: Project-Based Learning',
      lessons: [
        { id: 'mysql-lesson-7-1', ...MySQLLesson7_1Content },
        { id: 'mysql-lesson-7-2', ...MySQLLesson7_2Content },
        { id: 'mysql-lesson-7-3', ...MySQLLesson7_3Content },
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ភាសា MySQL</h1>
            <p className="text-lg opacity-90">Relational Database Management System</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន MySQL ពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតខ្ពស់ ដើម្បីរចនា គ្រប់គ្រង និង Query ទិន្នន័យក្នុង Database សម្រាប់ Web Applications។
          មេរៀនទាំងអស់មានជាភាសាខ្មែរ ជាមួយឧទាហរណ៍ច្បាស់លាស់។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">25</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          < div className="text-center">
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">30+</div>
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
            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">MySQL Official Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">W3Schools SQL Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.tutorialspoint.com/mysql/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Tutorialspoint MySQL Tutorial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.sqltutorial.org/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">SQL Tutorial</span>
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
                <a href="https://www.youtube.com/playlist?list=PLBngdQ_FhSMl7FX1zSD6wp5A_CYOx4V13" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Programming with NIT - MySQL database server</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL9ooVrP1hQOGECN1oA2iXcWFBTRYUxzQG" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">edureka! - MySQL Tutorial For Beginners</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLZPZq0r_RZOMskz6MdsMOgxzheIyjo-BZ" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Bro Code - MySQL tutorial for beginners 🐬</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=9ylj9NR0Lcg" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Traversy Media - MySQL Crash Course | Learn SQL</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLUDwpEzHYYLvWEwDxZViN1shP-pGyZdtT" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">SDET- QA - SQL for Beginners (MySQL)</span>
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
          គន្លឹះក្នុងការរៀនភាសា MySQL ប្រកបដោយប្រសិទ្ធភាព
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>អនុវត្តន៍ SQL Queries ឲ្យបានច្រើន: ការសរសេរ និងប្រតិបត្តិ SQL Commands ដោយខ្លួនឯងគឺជាវិធីល្អបំផុតក្នុងការរៀន។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>យល់ដឹងពី Database Design</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>ប្រើប្រាស់ GUI Tools: MySQL Workbench ឬ phpMyAdmin ជួយឲ្យអ្នកមើលឃើញ Database Structure កាន់តែងាយស្រួល។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
            <span>កុំខ្លាចនឹងធ្វើខុស: កំហុសគឺជាផ្នែកមួយនៃការរៀន។</span>
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

export default MySQLCourse;