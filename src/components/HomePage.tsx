import React from 'react';
import { ChevronRight, Search, Filter } from 'lucide-react';
// import TypewriterText from '../components/TypeWriterText';

type CourseType = 'home' | 'about' | 'html' | 'css' | 'bootstrap' | 'tailwind' | 'javascript' | 'react' | 'vue' | 'nextjs' | 'postman' | 'github' | 'gitlab' | 'mysql' | 'nodejs' | 'expressjs' | 'php' | 'laravel' | 'swift' | 'kotlin' | 'flutter' | 'reactnative' | 'ionic' | 'xamarin' | 'concept' | 'terminology' | 'mis' | 'se'; 

interface Course {
  id: CourseType;
  name: string;
  khmer: string;
  icon: string;
  color: string;
  lessons: number;
  duration: string;
  level: string;
}

interface HomePageProps {
  onSelectCourse: (courseId: CourseType) => void;
  courses: Course[];
}



function HomePage({ onSelectCourse, courses }: HomePageProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedFilter, setSelectedFilter] = React.useState('all');

  const categories = [
    { id: 'all', name: 'ទាំងអស់', count: courses.length },
    { id: 'concepts', name: 'Concepts', count: 2 },
    { id: 'frontend', name: 'Frontend', count: 6 },
    { id: 'backend', name: 'Backend', count: 4 },
    { id: 'mobile', name: 'Mobile', count: 6 },
    { id: 'database', name: 'Database', count: 1 },
    { id: 'tools', name: 'Tools', count: 4 },
    { id: 'management', name: 'Management', count: 2 },
  ];

  const getCourseCategory = (courseId: string) => {
    const conceptCourses = ['concept', 'terminology'];
    const frontendCourses = ['html', 'css', 'bootstrap', 'tailwind', 'javascript', 'react', 'vue', 'nextjs'];
    const backendCourses = ['nodejs', 'expressjs', 'php', 'laravel'];
    const mobileCourses = ['swift', 'kotlin', 'flutter', 'reactnative', 'ionic', 'xamarin'];
    const databaseCourses = ['mysql'];
    const toolsCourses = ['postman', 'github', 'gitlab']; 
    const managementCourses = ['mis', 'se'];

    if (conceptCourses.includes(courseId)) return 'concepts';
    if (frontendCourses.includes(courseId)) return 'frontend';
    if (backendCourses.includes(courseId)) return 'backend';
    if (mobileCourses.includes(courseId)) return 'mobile';
    if (databaseCourses.includes(courseId)) return 'database';
    if (toolsCourses.includes(courseId)) return 'tools';
    if (managementCourses.includes(courseId)) return 'management';
    return 'all';
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.khmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || getCourseCategory(course.id) === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-3 sm:p-6 space-y-6 sm:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">ស្វាគមន៍មកកាន់ {' '}
            {/* <span className='font-Moulpali text-green-300'>អ្នករៀន | NeakRean</span> */}
            <span className='text-2xl sm:text-3xl text-green-300'>អ្នករៀន | NeakRean</span>
             {/* <TypewriterText
              text="អ្នករៀន | NeakRean"
              speed={100}
              delay={1000}
              loop= {true}
               // Adjust typing speed (milliseconds per character)
              className="font-Moulpali text-green-300"
            /> */}
          </h1>
          <p className="text-lg opacity-90 mb-6">
            រៀន Programming Languages និងការអភិវឌ្ឍន៍គេហទំព័រជាមួយមេរៀនដែល​លម្អិត ងាយស្រួលយល់ និងងាយស្រួលរៀន ជាភាសាខ្មែរ។ 
            ចាប់ផ្តើមរៀនពី HTML រហូតដល់ Modern Frameworks ។
          </p>
          <button
            onClick={() => onSelectCourse('html')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2"
          >
            <span>ចាប់ផ្តើមរៀន</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ស្វែងរកមេរៀន... (ឧ. HTML, CSS, JavaScript)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Filter Dropdown */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="pl-9 sm:pl-10 pr-6 sm:pr-8 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[140px] sm:min-w-[150px]"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {/* {category.name} ({category.count}) */}
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedFilter(category.id)}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                selectedFilter === category.id
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {/* {category.name} ({category.count}) */}
              {category.name}
            </button>
          ))}
        </div>
      </div>

       <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            មេរៀនទាំងអស់ 
            {searchTerm && (
              <span className="text-lg font-normal text-gray-600 ml-2">
                - ស្វែងរក "{searchTerm}"
              </span>
            )}
          </h2>
          <div className="text-sm text-gray-600">
            បង្ហាញ {filteredCourses.length} ក្នុងចំណោម {courses.length} មេរៀន
          </div>
        </div>
        
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញមេរៀន</h3>
            <p className="text-gray-600">សូមព្យាយាមប្រើពាក្យគន្លឹះផ្សេង ឬជ្រើសរើសប្រភេទមេរៀនផ្សេង</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course.id)}
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center p-2`}>
                    <img src={course.icon} alt={course.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-sm text-gray-600">{course.khmer}</p>
                  </div>
                </div>
                
             <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>មេរៀន</span>
                      <span className="font-medium">{course.lessons} មេរៀន</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>រយៈពេល</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>កម្រិត</span>
                      <span
                        className={`font-medium ${
                          course.level === 'បឋម' ? 'text-green-600' : 'text-blue-600'
                        }`}
                      >
                        {course.level}
                      </span>
                    </div>
                  </div>


                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-blue-600 ml-2">ចូលរៀន</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {/* Learning Path */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">លំដាប់ការសិក្សាណែនាំ</h2>
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: 'HTML - រចនាសម្ព័ន្ធគេហទំព័រ ( Website Structure )', // HTML - Website Structure
              description: 'សិក្សាមូលដ្ឋានគ្រឹះនៃការបង្កើតគេហទំព័រ', 
            },
            {
              step: 2,
              title: 'CSS - ការរចនាម៉ូត ( Styling )', // CSS - Styling
              description: 'រៀនពីការធ្វើឱ្យគេហទំព័រមានសោភ័ណភាព និងប្រើប្រាស់ Tailwind, Bootstrap', 
            },
            {
              step: 3,
              title: 'JavaScript - ភាសាកម្មវិធី ( Programming Language ) ', // JavaScript - Programming Language
              description: 'បន្ថែមអន្តរកម្ម ( interactivity ) និងមុខងារដល់គេហទំព័រ', 
            },
            {
              step: 4,
              title: 'Frontend Frameworks - ReactJS, VueJS', // Frontend Frameworks - ReactJS, VueJS
              description: 'សិក្សា ReactJS ឬ VueJS សម្រាប់ការអភិវឌ្ឍន៍ modern Front-end ', 
            },
            {
              step: 5,
              title: 'Backend Development - NodeJS, ExpressJS, NextJS', // Backend Development - NodeJS, ExpressJS, NextJS
              description: 'រៀនបង្កើត Server និង API ជាមួយ NodeJS, ExpressJS និង NextJS', 
            },
            {
              step: 6,
              title: 'Database - MySQL', // Database - MySQL
              description: 'សិក្សាពីការគ្រប់គ្រងទិន្នន័យជាមួយ MySQL', // Study data management with MySQL
            },
            {
              step: 7,
              title: 'Version Control & Tools - Git, GitHub, GitLab, Postman', // Version Control & Tools - Git, GitHub, GitLab, Postman
              description: 'រៀនគ្រប់គ្រងកូដជាមួយ Git, GitHub, GitLab និងធ្វើតេស្ត API ជាមួយ Postman', 
            },
          ].map((item) => (
            <div key={item.step} className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;