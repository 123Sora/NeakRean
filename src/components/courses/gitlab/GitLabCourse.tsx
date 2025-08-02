import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Code, CheckCircle, BookOpen, Youtube } from 'lucide-react';
import LessonViewer from '../../LessonViewer';


// --- ផ្នែកទី ១: សេចក្តីផ្តើមអំពី GitLab និង Git Fundamentals ---
import GitLabLesson1_1Content from '../gitlab/lessons/GitLabLesson1_1'; // ណែនាំអំពី GitLab និង DevOps
import GitLabLesson1_2Content from '../gitlab/lessons/GitLabLesson1_2'; // Git Fundamentals (មូលដ្ឋានគ្រឹះ Git)
import GitLabLesson1_3Content from '../gitlab/lessons/GitLabLesson1_3'; // ការធ្វើការជាមួយ Remote Repositories

// --- ផ្នែកទី ២: GitLab Project និង Repository Management ---
import GitLabLesson2_1Content from '../gitlab/lessons/GitLabLesson2_1'; // ការបង្កើត និងគ្រប់គ្រង Project ក្នុង GitLab
import GitLabLesson2_2Content from '../gitlab/lessons/GitLabLesson2_2'; // ការគ្រប់គ្រង Source Code (Repository)
import GitLabLesson2_3Content from '../gitlab/lessons/GitLabLesson2_3'; // Merge Requests (MRs) - ការសហការកូដ

// --- ផ្នែកទី ៣: GitLab Issues និង Project Management ---
import GitLabLesson3_1Content from '../gitlab/lessons/GitLabLesson3_1'; // ការគ្រប់គ្រង Issues (បញ្ហា/ភារកិច្ច)
import GitLabLesson3_2Content from '../gitlab/lessons/GitLabLesson3_2'; // Labels, Milestones, និង Boards
import GitLabLesson3_3Content from '../gitlab/lessons/GitLabLesson3_3'; // Epics (សម្រាប់ Enterprise Edition)

// --- ផ្នែកទី ៤: GitLab CI/CD (Continuous Integration/Continuous Delivery) ---
import GitLabLesson4_1Content from '../gitlab/lessons/GitLabLesson4_1'; // ណែនាំអំពី CI/CD និង GitLab CI/CD
import GitLabLesson4_2Content from '../gitlab/lessons/GitLabLesson4_2'; // ការចាប់ផ្តើមជាមួយ .gitlab-ci.yml
import GitLabLesson4_3Content from '../gitlab/lessons/GitLabLesson4_3'; // GitLab CI/CD Runners
import GitLabLesson4_4Content from '../gitlab/lessons/GitLabLesson4_4'; // កំណត់រចនាសម្ព័ន្ធ CI/CD កាន់តែស៊ីជម្រៅ
import GitLabLesson4_5Content from '../gitlab/lessons/GitLabLesson4_5'; // Deployment Strategies (យុទ្ធសាស្រ្ត Deployment)

// --- ផ្នែកទី ៥: GitLab Advanced Features និង Administration ---
import GitLabLesson5_1Content from '../gitlab/lessons/GitLabLesson5_1'; // Users, Groups, និង Permissions (អ្នកប្រើប្រាស់, ក្រុម, ការអនុញ្ញាត)
import GitLabLesson5_2Content from '../gitlab/lessons/GitLabLesson5_2'; // GitLab Security Features (ការការពារសុវត្ថិភាព)
import GitLabLesson5_3Content from '../gitlab/lessons/GitLabLesson5_3'; // Container Registry
import GitLabLesson5_4Content from '../gitlab/lessons/GitLabLesson5_4'; // GitLab Pages (សម្រាប់ Static Websites)
import GitLabLesson5_5Content from '../gitlab/lessons/GitLabLesson5_5'; // GitLab API (ស្រេចចិត្ត)
import GitLabLesson5_6Content from '../gitlab/lessons/GitLabLesson5_6'; // GitOps ជាមួយ GitLab (កម្រិតខ្ពស់)

// --- ផ្នែកទី ៦: លំហាត់អនុវត្តន៍ និងគន្លឹះបន្ថែម ---
import GitLabLesson6_1Content from '../gitlab/lessons/GitLabLesson6_1'; // Project អនុវត្តន៍ពេញលេញ
import GitLabLesson6_2Content from '../gitlab/lessons/GitLabLesson6_2'; // គន្លឹះ និង Best Practices


// Define a placeholder type for lessons since actual content files are not fully generated here
type Lesson = {
    id: string;
    title: string;
    objectives: string[];
    content: string;
    examples: string[];
    quiz: any[]; // Using any for quiz to simplify
    lab: { task: string; solution: string };
};

function GitLabCourse() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const courseStructure = [
    {
      id: 'section-1',
      title: 'ផ្នែកទី ១: សេចក្តីផ្តើមអំពី GitLab និង Git Fundamentals',
      lessons: [
         { id: 'gitlab-lesson-1-1', ...GitLabLesson1_1Content },
         { id: 'gitlab-lesson-1-2', ...GitLabLesson1_2Content },
         { id: 'gitlab-lesson-1-3', ...GitLabLesson1_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-2',
      title: 'ផ្នែកទី ២: GitLab Project និង Repository Management',
      lessons: [
        { id: 'gitlab-lesson-2-1', ...GitLabLesson2_1Content },
        { id: 'gitlab-lesson-2-2', ...GitLabLesson2_2Content },
        { id: 'gitlab-lesson-2-3', ...GitLabLesson2_3Content },
      ] as Lesson[],
    },
    {
      id: 'section-3',
      title: 'ផ្នែកទី ៣: GitLab Issues និង Project Management',
      lessons: [
         { id: 'gitlab-lesson-3-1', ...GitLabLesson3_1Content },
         { id: 'gitlab-lesson-3-2', ...GitLabLesson3_2Content },
         { id: 'gitlab-lesson-3-3', ...GitLabLesson3_3Content },
       
      ] as Lesson[],
    },
    {
      id: 'section-4',
      title: 'ផ្នែកទី ៤: GitLab CI/CD (Continuous Integration/Continuous Delivery)',
      lessons: [
          { id: 'gitlab-lesson-4-1', ...GitLabLesson4_1Content },
          { id: 'gitlab-lesson-4-2', ...GitLabLesson4_2Content },
          { id: 'gitlab-lesson-4-3', ...GitLabLesson4_3Content },
          { id: 'gitlab-lesson-4-4', ...GitLabLesson4_4Content },
          { id: 'gitlab-lesson-4-5', ...GitLabLesson4_5Content },
       
      ] as Lesson[],
    },
    {
      id: 'section-5',
      title: 'ផ្នែកទី ៥: GitLab Advanced Features និង Administration',
      lessons: [
        { id: 'gitlab-lesson-5-1', ...GitLabLesson5_1Content },
        { id: 'gitlab-lesson-5-2', ...GitLabLesson5_2Content },
        { id: 'gitlab-lesson-5-3', ...GitLabLesson5_3Content },
        { id: 'gitlab-lesson-5-4', ...GitLabLesson5_4Content },
        { id: 'gitlab-lesson-5-5', ...GitLabLesson5_5Content },
        { id: 'gitlab-lesson-5-6', ...GitLabLesson5_6Content },
      ] as Lesson[],
    },
    {
      id: 'section-6',
      title: 'ផ្នែកទី ៦: លំហាត់អនុវត្តន៍ និងគន្លឹះបន្ថែម',
      lessons: [
         { id: 'gitlab-lesson-6-1', ...GitLabLesson6_1Content },
        { id: 'gitlab-lesson-6-2', ...GitLabLesson6_2Content },
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

  // Calculate total lessons dynamically
  const totalLessons = courseStructure.reduce((acc, section) => acc + section.lessons.length, 0);
  const totalSections = courseStructure.length;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="GitLab" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">GitLab</h1>
            <p className="text-lg opacity-90">DevOps Platform</p>
          </div>
        </div>
        <p className="text-lg opacity-90">
          រៀន GitLab ដើម្បីគ្រប់គ្រងកូដ និង DevOps។
          ប្រើប្រាស់ CI/CD Pipelines, Issue Tracking, Merge Requests និង Project Management ។
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">{totalLessons}</div>
            <div className="text-sm opacity-75">មេរៀន</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{totalSections}</div>
            <div className="text-sm opacity-75">ផ្នែក</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">70+</div> {/* Placeholder for more examples */}
            <div className="text-sm opacity-75">ឧទាហរណ៍</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div> {/* Placeholder for more labs/quizzes */}
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
            <a href="https://docs.gitlab.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">GitLab Documentation (Official)</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">GitLab CI/CD Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://docs.gitlab.com/ee/user/project/merge_requests/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">GitLab Merge Requests</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://docs.gitlab.com/ee/user/project/issues/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">GitLab Issues</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://docs.gitlab.com/ee/user/group/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <span className="text-sm">GitLab Groups</span>
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
                <a href="https://www.youtube.com/playlist?list=PL_7RoTKhr2cy6n9k6QmwqGChn_Q2Mto1v" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">ScienTeckh - Git & GitLab</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=2TA8EMbu1K8" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> Sothearin - Git Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
               <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=BaSUYfWzPUI" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm"> Soeng Souy - Git & GitLab Tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              {/* Add more specific Khmer YouTube links here if available */}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-purple-700 mb-2">ភាសាអង់គ្លេស (English)</h4>
            <ul className="space-y-2 text-purple-600">
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/playlist?list=PL_OdF9Z6GmVahGQpiHZyurTFaPGB107pn" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">S3CloudHub - GitLab Tutorial for Absolute Beginners</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=qP8kir2GUgo" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">TechWorld with Nana - GitLab CI CD Tutorial for Beginners [Crash Course]</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=JmvaxS-5rKg" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">Cloud Guru - Git and GitLab for Beginners Crash Course</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </li>
               <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com/watch?v=KMOmw19ZCGs" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                  <span className="text-sm">edureka! - Git & GitHub Full Course</span>
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
          គន្លឹះសំខាន់ៗក្នុងការរៀន GitLab
        </h3>
        <ul className="space-y-2 text-orange-700">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-orange-600" />
            <span>យល់ដឹងពី Git ឲ្យច្បាស់: GitLab គឺបង្កើតឡើងនៅលើ Git ដូច្នេះការយល់ដឹងពី Git គឺជាមូលដ្ឋានគ្រឹះដ៏សំខាន់។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-orange-600" />
            <span>អនុវត្តន៍ឲ្យបានច្រើន: ការបង្កើត Project, ការធ្វើ Merge Request, និងការរៀបចំ CI/CD Pipeline ដោយខ្លួនឯង គឺជាវិធីល្អបំផុតក្នុងការរៀន។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-orange-600" />
            <span>ចាប់ផ្តើមពីតូចទៅធំ: ចាប់ផ្តើមពី Git Commands មូលដ្ឋាន បន្ទាប់មករៀនពីមុខងាររបស់ GitLab តាមលំដាប់លំដោយ។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-orange-600" />
            <span>សហការជាមួយអ្នកផ្សេង: បើអាច ការធ្វើការជាមួយក្រុមលើ Project មួយនឹងជួយឲ្យអ្នកយល់កាន់តែច្បាស់ពី Workflow របស់ GitLab ។</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-orange-600" />
            <span>អាន Documentation: ឯកសាររបស់ GitLab គឺល្អិតល្អន់ និងត្រូវបាន Update ជានិច្ច។</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GitLabCourse;
