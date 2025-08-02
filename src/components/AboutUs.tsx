import { Globe  } from 'lucide-react';
// import { Target, Users, Award, Globe, Code, Heart, Lightbulb } from 'lucide-react';

function AboutUs() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br rounded-2xl p-8 text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Logo and Name */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <img src="/neakrean-logo.png" alt="NeakRea Logo" className='w-auto h-96 object-contain' />
            </div>
          </div>

          {/* Right Side - Definition */}
          <div className="space-y-4">
            <div className="bg-black bg-opacity-10 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                ភាសាខ្មែរ
              </h2>
             <p className="text-lg leading-relaxed">
              <strong className='font-Moulpali text-green-600'>អ្នករៀន | NeakRean</strong> គឺជាគេហទំព័រដែលបានផ្ដល់ជូននូវមេរៀនជាច្រើនជាភាសាខ្មែរនៅក្នុងជំនាញពត៌មានវិទ្យា  
              ដើម្បីជាជំនួយដល់អ្នកសិក្សាកម្ពុជា 🇰🇭 ដោយឥតគិតថ្លៃ។ គេហទំព័រនេះត្រូវបានបង្កើតឡើងដោយក្មេងស្រីម្នាក់ 👩‍💻 ដែលស្រលាញ់ចូលចិត្តបច្ចេកវិទ្យា 
              ហើយចង់ចែករំលែក ចង់ចេះចង់ដឹងបន្ថែម ទាក់ទងនឹងបច្ចេកវិទ្យា។
            </p>
            </div>
            
            <div className="bg-black bg-opacity-10 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                English
              </h2>
              <p className="text-lg leading-relaxed">
                <strong className='font-Moulpali text-green-600'>អ្នករៀន | NeakRean</strong> is a website offering many lessons in Khmer within the field of information technology  
                to support Cambodian students 🇰🇭 for free. This website was created by a young woman 👩‍💻 who loves technology
                and wants to share and learn more about technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">បេសកកម្ម</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            NeakRean មានបេសកកម្មក្នុងការផ្តល់ការអប់រំបច្ចេកវិទ្យាព័ត៌មានដ៏មានគុណភាព 
            ជាភាសាខ្មែរ ដើម្បីជួយសិស្សកម្ពុជាអាចចូលរួមក្នុងសកលលោកឌីជីថល។
          </p>
          <div className="text-sm text-gray-600 italic border-l-4 border-blue-200 pl-4">
            "NeakRean's mission is to provide quality IT education in Khmer language 
            to help Cambodian students participate in the digital world."
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">ចក្ខុវិស័យ</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            ក្លាយជាវេទិកាអប់រំអនឡាញលេខ ១ សម្រាប់ការរៀនសូត្រកម្មវិធីនៅកម្ពុជា 
            ហើយជួយបង្កើតកម្លាំងពលកម្មឌីជីថលដ៏មានជំនាញ។
          </p>
          <div className="text-sm text-gray-600 italic border-l-4 border-green-200 pl-4">
            "To become the #1 online learning platform for programming in Cambodia 
            and help create skilled digital workforce."
          </div>
        </div>
      </div> */}

      {/* Why NeakRean */}
      {/* <div className="bg-white rounded-xl shadow-sm border p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          ហេតុអ្វីបានជាបង្កើត NeakRean?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">ស្រលាញ់ភាសាខ្មែរ</h3>
            <p className="text-sm text-gray-600">
              យើងជឿជាក់ថាការរៀនជាភាសាម្តាយគឺងាយស្រួលជាងការរៀនជាភាសាបរទេស
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">សហគមន៍កម្ពុជា</h3>
            <p className="text-sm text-gray-600">
              បង្កើតសហគមន៍អ្នកអភិវឌ្ឍន៍កម្ពុជាដ៏រឹងមាំ និងអាចប្រកួតប្រជែងបាន
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">បច្ចេកវិទ្យាទំនើប</h3>
            <p className="text-sm text-gray-600">
              រៀនបច្ចេកវិទ្យាថ្មីៗដែលកំពុងត្រូវការនៅទីផ្សារការងារ
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">គុណភាពខ្ពស់</h3>
            <p className="text-sm text-gray-600">
              មេរៀនត្រូវបានរៀបចំដោយអ្នកជំនាញដែលមានបទពិសោធន៍ជាច្រើនឆ្នាំ
            </p>
          </div>
        </div>
      </div> */}

      {/* Our Goals */}
      {/* <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          គោលដៅរបស់យើង
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">ធ្វើឱ្យការរៀនកម្មវិធីងាយស្រួល</h3>
              <p className="text-gray-700">
                ផ្តល់មេរៀនដែលងាយយល់ ជាមួយឧទាហរណ៍ច្បាស់លាស់ និងលំហាត់អនុវត្តន៍ជាច្រើន
              </p>
            </div>
          </div> */}

          {/* <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">បង្កើតឱកាសការងារ</h3>
              <p className="text-gray-700">
                ជួយសិស្សអាចរកការងារក្នុងវិស័យ IT ឬបង្កើតអាជីវកម្មផ្ទាល់ខ្លួន
              </p>
            </div>
          </div> */}

          {/* <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">អភិវឌ្ឍន៍ប្រទេសជាតិ</h3>
              <p className="text-gray-700">
                រួមចំណែកក្នុងការអភិវឌ្ឍន៍ប្រទេសកម្ពុជាឱ្យក្លាយជាប្រទេសឌីជីថល
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">បង្កើតសហគមន៍</h3>
              <p className="text-gray-700">
                បង្កើតសហគមន៍អ្នកអភិវឌ្ឍន៍កម្ពុជាដែលអាចជួយគ្នាទៅវិញទៅមក
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Contact Information */}
      {/* <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">ទាក់ទងយើង</h2>
        <p className="text-gray-600 mb-4">
          បើអ្នកមានសំណួរ ឬចង់ដឹងព័ត៌មានបន្ថែម សូមទាក់ទងមកយើង
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="text-sm text-gray-600">
            📧 Email: info@neakrean.com
          </div>
          <div className="text-sm text-gray-600">
            📱 Telegram: @NeakReanSupport
          </div>
          <div className="text-sm text-gray-600">
            🌐 Website: www.neakrean.com
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AboutUs;