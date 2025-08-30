import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson10_3Content: LessonContent = {
  title: 'CI/CD for Swift Apps',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា CI និង CD',
    'រៀនពីរបៀបរៀបចំ CI/CD Pipeline សម្រាប់ Swift Apps',
    'ស្គាល់ពីឧបករណ៍ (Tools) សម្រាប់ CI/CD',
    'យល់ដឹងពីសារៈសំខាន់នៃការ Automation',
    'អនុវត្តការប្រើប្រាស់ Fastlane'
  ],
  content: `
# CI/CD for Swift Apps 🚀

---

**CI/CD** តំណាងឱ្យ **Continuous Integration** និង **Continuous Delivery/Deployment** ។ វាគឺជាសំណុំនៃការអនុវត្ត (Practices) ដែលធ្វើឱ្យការអភិវឌ្ឍ Software កាន់តែមានប្រសិទ្ធភាព។ CI/CD ជួយឱ្យអ្នក Developer អាចបញ្ចូល (Merge) Code, Build, Test, និង Deploy ទៅកាន់អ្នកប្រើប្រាស់បានញឹកញាប់និងដោយស្វ័យប្រវត្តិ។

## 1. អ្វីទៅជា CI? (Continuous Integration)

**Continuous Integration (CI)** គឺជាការអនុវត្តដែល Developer បញ្ចូល Code របស់ពួកគេទៅក្នុង Main Repository ញឹកញាប់។ បន្ទាប់ពីការបញ្ចូល Code, Server នឹងធ្វើការ Build Code នោះដោយស្វ័យប្រវត្តិហើយដំណើរការ Tests ។

-   **អត្ថប្រយោជន៍:**
    -   រកឃើញ Bug បានលឿន។
    -   កាត់បន្ថយបញ្ហានៅពេល Merging Code ។
    -   ធានាថា Code Base ដំណើរការបានជានិច្ច។

## 2. អ្វីទៅជា CD? (Continuous Delivery/Deployment)

**Continuous Delivery (CD)** គឺជាការអនុវត្តដែលធានាថា Code ថ្មីអាចត្រូវបាន Deploy បានគ្រប់ពេល។ វារួមបញ្ចូលទាំងការ Build, Testing, និង Packaging របស់ App ដោយស្វ័យប្រវត្តិ។

**Continuous Deployment (CD)** គឺជាការធ្វើ Automation បន្ថែមលើ Continuous Delivery ដោយ Deploy Code ថ្មីទៅកាន់ Production ដោយស្វ័យប្រវត្តិ។

## 3. ឧបករណ៍ (Tools) សម្រាប់ CI/CD

មានឧបករណ៍ជាច្រើនសម្រាប់ CI/CD សម្រាប់ Swift Apps៖

-   **Xcode Cloud:** គឺជា CI/CD Service ផ្លូវការរបស់ Apple ដែលរួមបញ្ចូលគ្នាយ៉ាងល្អជាមួយ Xcode ។
-   **Fastlane:** ឧបករណ៍ដ៏ពេញនិយមមួយដែលអនុញ្ញាតឱ្យអ្នក Automation ភារកិច្ចដូចជាការ Test, Screenshot, និង Distribution ។
-   **GitHub Actions:** Workflow Automation សម្រាប់ GitHub Repository ។
-   **Jenkins:** Open-source Automation Server ។

## 4. ការអនុវត្តជាមួយ Fastlane

**Fastlane** គឺជា Toolset ដែលប្រើ Ruby ។

### ជំហានទី 1: ដំឡើង Fastlane
\`sudo gem install fastlane -NV\`

### ជំហានទី 2: រៀបចំ Fastlane
នៅក្នុង Project របស់អ្នក, រត់ \`fastlane init\` ។ វានឹងបង្កើត File \`Fastfile\` ដែលជាកន្លែងដែលអ្នកសរសេរ Automation Scripts ។

### ឧទាហរណ៍ \`Fastfile\`
\`\`\`ruby
default_platform(:ios)

platform :ios do
  desc "Runs all the tests"
  lane :test do
    run_tests
  end

  desc "Submit a new Beta Build to TestFlight"
  lane :beta do
    build_app(workspace: "YourApp.xcworkspace", scheme: "YourApp")
    upload_to_testflight
  end

  desc "Deploy a new version to the App Store"
  lane :release do
    match(type: "appstore") # Syncs certificates and profiles
    build_app(workspace: "YourApp.xcworkspace", scheme: "YourApp")
    upload_to_app_store
  end
end
\`\`\`

## 5. សារៈសំខាន់នៃការ Automation

-   **ល្បឿន:** កាត់បន្ថយពេលវេលាពីការសរសេរ Code ដល់ការ Deploy ។
-   **ភាពត្រឹមត្រូវ:** កាត់បន្ថយកំហុសដោយដៃ (Manual Errors) ។
-   **Consistency:** ធានាថាការ Build និង Deploy នីមួយៗត្រូវបានធ្វើឡើងតាមវិធីដូចគ្នា។
-   **Developer Focus:** អនុញ្ញាតឱ្យ Developer ផ្តោតលើការសរសេរ Code ជំនួសឱ្យភារកិច្ចដដែលៗ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`gym\` សម្រាប់ Build App</h3>
<p>យើងអាចប្រើ \`gym\` ដែលជាផ្នែកមួយរបស់ Fastlane ដើម្បី Build App ។</p>
<pre><code class="language-ruby">
  desc "Build the app for ad-hoc distribution"
  lane :build_adhoc do
    gym(
      scheme: "YourApp",
      workspace: "YourApp.xcworkspace",
      configuration: "Release",
      clean: true,
      export_method: "ad-hoc"
    )
  end
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ CI តំណាងឱ្យអ្វី?',
      options: [
        'Continuous Installation',
        'Continuous Integration',
        'Code Integration',
        'Client Interaction'
      ],
      correct: 1,
      explanation: 'CI តំណាងឱ្យ Continuous Integration ។'
    },
    {
      question: 'តើ CD តំណាងឱ្យអ្វី?',
      options: [
        'Continuous Delivery ឬ Continuous Deployment',
        'Code Delivery',
        'Complete Development',
        'Client Deployment'
      ],
      correct: 0,
      explanation: 'CD តំណាងឱ្យ Continuous Delivery ឬ Continuous Deployment ។'
    },
    {
      question: 'តើ Fastlane គឺជាអ្វី?',
      options: [
        'IDE សម្រាប់ Swift',
        'Framework របស់ Apple',
        'Toolset សម្រាប់ Automation ភារកិច្ច iOS Development',
        'Service របស់ Google'
      ],
      correct: 2,
      explanation: 'Fastlane គឺជា Toolset ដែលប្រើ Ruby ដើម្បី Automation ភារកិច្ច Development ។'
    },
    {
      question: 'តើ `Fastfile` ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក App Settings',
        'ជា File ដែលមាន Automation Scripts',
        'ជា File សម្រាប់ Code',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`Fastfile` គឺជា File ដែលមាន Automation Scripts របស់ Fastlane ។'
    },
    {
      question: 'តើ Xcode Cloud ជា Service របស់ក្រុមហ៊ុនណា?',
      options: [
        'Google',
        'Microsoft',
        'Apple',
        'Amazon'
      ],
      correct: 2,
      explanation: 'Xcode Cloud គឺជា CI/CD Service ផ្លូវការរបស់ Apple ។'
    },
    {
      question: 'តើ Continuous Integration ជួយកាត់បន្ថយបញ្ហាអ្វី?',
      options: [
        'Memory Leaks',
        'បញ្ហានៅពេល Merging Code',
        'Bug នៅក្នុង UI',
        'Network Issues'
      ],
      correct: 1,
      explanation: 'CI ជួយកាត់បន្ថយបញ្ហានៅពេល Merging Code ពីព្រោះវាធ្វើ Build ញឹកញាប់។'
    },
    {
      question: 'តើ `run_tests` Lane ក្នុង Fastlane ធ្វើអ្វី?',
      options: [
        'រត់ UI Tests',
        'រត់ Unit Tests ទាំងអស់',
        'រត់ Tests ទាំងអស់',
        'បោះពុម្ព Message'
      ],
      correct: 2,
      explanation: '`run_tests` Lane ដំណើរការ Tests ទាំងអស់នៅក្នុង Project របស់អ្នក។'
    },
    {
      question: 'តើការធ្វើ Automation ជួយឱ្យ Developer ផ្តោតលើអ្វី?',
      options: [
        'ការរចនា UI',
        'ការសរសេរ Code',
        'ការ Marketing',
        'ការ Deploy'
      ],
      correct: 1,
      explanation: 'ការ Automation ជួយឱ្យ Developer ផ្តោតលើការសរសេរ Code ។'
    },
    {
      question: 'តើ `upload_to_app_store` Lane ក្នុង Fastlane ប្រើសម្រាប់អ្វី?',
      options: [
        'Upload App ទៅកាន់ TestFlight',
        'Upload App ទៅកាន់ App Store',
        'Upload Code ទៅកាន់ GitHub',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`upload_to_app_store` Lane ត្រូវបានប្រើដើម្បី Upload App ទៅកាន់ App Store ។'
    },
    {
      question: 'តើ CI/CD Pipeline គឺជាអ្វី?',
      options: [
        'ជាក្រុមមនុស្ស',
        'ជា Process នៃការធ្វើ Automation',
        'ជា Tool',
        'ជា Code File'
      ],
      correct: 1,
      explanation: 'Pipeline គឺជា Process នៃការធ្វើ Automation ពីការ Merge Code ដល់ការ Deploy ។'
    }
  ],
  lab: {
    task: `
រៀបចំ Fastlane នៅក្នុង Project របស់អ្នក ហើយប្រើវាដើម្បី Build App ។

**តម្រូវការ:**

1.  **Project:**
    -   បង្កើត Project SwiftUI ថ្មីមួយ។

2.  **Fastlane Setup:**
    -   ដំឡើង Fastlane នៅក្នុង Terminal ។
    -   នៅក្នុង Project Directory របស់អ្នក, រត់ \`fastlane init\` ហើយជ្រើសរើសជម្រើសដែលសមស្រប។
    -   Fastlane នឹងបង្កើត File \`Fastfile\` ។

3.  **Build Automation:**
    -   នៅក្នុង \`Fastfile\`, បង្កើត \`lane\` មួយឈ្មោះ \`:build_debug\` ។
    -   នៅក្នុង Lane នោះ, ប្រើ \`gym\` Action ដើម្បី Build App សម្រាប់ Development ។
    -   ត្រូវបញ្ជាក់ \`configuration: "Debug"\` ។
    -   រត់ Lane នោះដោយប្រើ \`fastlane build_debug\` នៅក្នុង Terminal ។

**ការណែនាំ:** ត្រូវប្រាកដថាអ្នកមាន Xcode Project ដែលដំណើរការត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`ruby
# Fastfile ឧទាហរណ៍
# ដើម្បីrun Lane នេះ, run: fastlane build_debug
# Fastlane will set up a lot of things for you, but you may need to adjust paths and schemes.

default_platform(:ios)

platform :ios do
  desc "Build the app for development/debugging"
  lane :build_debug do
    gym(
      scheme: "YourApp",
      workspace: "YourApp.xcworkspace",
      configuration: "Debug",
      clean: true,
      export_method: "development",
      output_directory: "./build/debug"
    )
    puts "Successfully built the app for debugging!"
  end

  # This is a sample lane that might be useful
  # lane :test do
  #   run_tests
  # end
end
\`\`\`
`
  }
};

export default SwiftLesson10_3Content;