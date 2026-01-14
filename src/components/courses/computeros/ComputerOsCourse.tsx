import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube, Monitor, ShieldCheck } from 'lucide-react';
import LessonViewer from '../../LessonViewer';
import type { Lesson } from '../../../types/LessonTypes';

// --- Section 1: Computer Fundamentals ---
import Lesson1_1Content from '../computeros/lessons/COLesson1_1'; // Computer Architecture
import Lesson1_2Content from '../computeros/lessons/COLesson1_2'; // Boot Process
import Lesson1_3Content from '../computeros/lessons/COLesson1_3'; // Binary & Hex

// --- Section 2: Windows Administration ---
import Lesson2_1Content from '../computeros/lessons/COLesson2_1'; // Windows Registry
import Lesson2_2Content from '../computeros/lessons/COLesson2_2'; // Event Viewer
import Lesson2_3Content from '../computeros/lessons/COLesson2_3'; // PowerShell

// --- Section 3: Linux Command Line ---
import Lesson3_1Content from '../computeros/lessons/COLesson3_1'; // Linux FHS
import Lesson3_2Content from '../computeros/lessons/COLesson3_2'; // Essential Commands
import Lesson3_3Content from '../computeros/lessons/COLesson3_3'; // Permissions & Sudo

// --- Section 4: Process & Memory ---
import Lesson4_1Content from '../computeros/lessons/COLesson4_1'; // Process Management
import Lesson4_2Content from '../computeros/lessons/COLesson4_2'; // Stack vs Heap

// --- Section 5: Virtualization ---
import Lesson5_1Content from '../computeros/lessons/COLesson5_1'; // VMware & VirtualBox
import Lesson5_2Content from '../computeros/lessons/COLesson5_2'; // Virtual Networking

function ComputerOSCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'section-1': true // បើក Section ទី១ ជា Default
  });

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: មូលដ្ឋានគ្រឹះកុំព្យូទ័រ និង Hardware',
      lessons: [
        { id: 'os-lesson-1-1', ...Lesson1_1Content },
        { id: 'os-lesson-1-2', ...Lesson1_2Content },
        { id: 'os-lesson-1-3',   ...Lesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: ប្រព័ន្ធប្រតិបត្តិការ Windows',
      lessons: [
        { id: 'os-lesson-2-1', ...Lesson2_1Content },
        { id: 'os-lesson-2-2', ...Lesson2_2Content },
        { id: 'os-lesson-2-3', ...Lesson2_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: ការប្រើប្រាស់ Linux Command Line',
      lessons: [
        { id: 'os-lesson-3-1', ...Lesson3_1Content },
        { id: 'os-lesson-3-2', ...Lesson3_2Content },
        { id: 'os-lesson-3-3', ...Lesson3_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: Process & Memory Management',
      lessons: [
        { id: 'os-lesson-4-1', ...Lesson4_1Content },
        { id: 'os-lesson-4-2', ...Lesson4_2Content },
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: Virtualization និង Lab Setup',
      lessons: [
        { id: 'os-lesson-5-1',...Lesson5_1Content },
        { id: 'os-lesson-5-2', ...Lesson5_2Content },
      ] as Lesson[],
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const selectLesson = (lessonId: string) => {
    setSelectedLesson(lessonId);
  };

  const currentLesson = courseStructure
    .flatMap(s => s.lessons)
    .find(l => l.id === selectedLesson);

  if (currentLesson) {
    return <LessonViewer lesson={currentLesson} onBack={() => setSelectedLesson(null)} />;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <Monitor className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Computer & OS Basics</h1>
            <p className="text-lg opacity-90">Foundation for Cybersecurity</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          យល់ដឹងពីរបៀបដែលកុំព្យូទ័រដំណើរការ ការគ្រប់គ្រង Windows/Linux និងការប្រើប្រាស់ Virtualization 
          ដែលជាគ្រឹះមិនអាចខ្វះបានសម្រាប់អ្នកជំនាញ Cybersecurity។
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">14</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">60+</div>
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

      {/* Resources Section */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center space-x-2">
          <BookOpen className="w-5 h-5" />
          <span>ឯកសារយោង (Documentation)</span>
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-center space-x-2">
            <a href="https://linuxjourney.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Linux Journey - Learn Linux for Beginners</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">Microsoft Docs - Windows Internals</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.tutorialspoint.com/operating_system/index.htm" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">tutorialspoint - Operating System Tutorial </span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.netacad.com/courses/operating-systems-basics?courseLang=en-US" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">cisco - Operating Systems Basics</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.comptia.org/certifications/a" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">CompTIA A+ Study Guide & Resources</span>
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
                <a href="https://www.youtube.com/playlist?list=PLO0WNX275nOQAmge6Zg0vV0I8f5WvAVUv" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Menghieng Tips - Computer Architecture</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=KwrLegnXqDg&list=PLSUDaEna-msQFFIVmAgQXsqlgWDCyE4vX&index=1" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Vang Samieat - Introduction to computer science ( part1 )</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=ZSCxQOg7nW0&list=PLSUDaEna-msQFFIVmAgQXsqlgWDCyE4vX&index=2" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Vang Samieat - Introduction to computer science ( part2 )</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/@NetworkChuck" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">NetworkChuck - Linux & Virtualization</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL7zRJGi6nMRzg0LdsR7F3olyLGoBcIvvg" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">PowerCert Animated - Hardware & Networking</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRhDsKg2oXhVuN5z_1ysjJyg" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Neso Academy - Basics of OS</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=iJ01FDCoK7E" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Hank Hackerson- Linux+ (XK0-005 - 2024) Command Line Labs Pt.1</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>  

      {/* Learning Tips */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5" />
          <span>គន្លឹះសម្រាប់ការរៀន</span>
        </h3>
        <ul className="space-y-3 text-blue-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
            <span>អនុវត្តតាមរយៈ Virtual Machines ដើម្បីកុំឱ្យប៉ះពាល់ម៉ាស៊ីនផ្ទាល់។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
            <span>ព្យាយាមប្រើ Linux Terminal ឱ្យបានច្រើនជំនួសការប្រើ Mouse ដើម្បីបង្កើនភាពស្ទាត់ជំនាញ។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
            <span>កត់ត្រាទុកនូវរាល់ Command សំខាន់ៗដែលអ្នកបានរៀន (Cheat Sheet) សម្រាប់មើលឡើងវិញ។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
            <span>យល់ដឹងពី File System Hierarchy របស់ Linux ឱ្យច្បាស់ (ដូចជា /etc, /var, /home)។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
            <span>កុំខ្លាចក្នុងការមើល Error៖ ការអាន Log គឺជាវិធីដ៏ល្អបំផុតក្នុងការដោះស្រាយបញ្ហា និងរៀនពីវា។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
            <span>ប្រើប្រាស់ពាក្យបញ្ជា "man" (manual) ឱ្យបានញឹកញាប់ ដើម្បីស្វែងយល់ពីរបៀបប្រើ Command នីមួយៗ។</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ComputerOSCourse;