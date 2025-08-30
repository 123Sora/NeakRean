import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson7_3Content: LessonContent = {
  title: 'FileManager និង Storage',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា File System របស់ iOS',
    'ស្គាល់ពីការប្រើប្រាស់ `FileManager` សម្រាប់ធ្វើការជាមួយ Files',
    'រៀនពីរបៀបរក្សាទុកនិងទាញយក Files ទៅកាន់ Directories ផ្សេងៗ',
    'យល់ដឹងពី Directories សំខាន់ៗដូចជា Documents, Cache, និង Temp',
    'អនុវត្តការរក្សាទុកនិងទាញយករូបភាព'
  ],
  content: `
# FileManager និង Storage 📁

---

ក្រៅពី Core Data និង UserDefaults, កម្មវិធី iOS ក៏អាចរក្សាទុកទិន្នន័យជា **Files** បានដែរ។ **\`FileManager\`** គឺជា Class ដែលអនុញ្ញាតឱ្យអ្នកធ្វើការងារទាក់ទងនឹង File System របស់ iOS ដូចជាការបង្កើត, លុប, សរសេរ, និងអាន Files។

## 1. Directories សំខាន់ៗរបស់ iOS

កម្មវិធីនីមួយៗមាន Sandbox ផ្ទាល់ខ្លួនរបស់វា ដែលមាន Directories ជាច្រើន។
-   **Documents Directory:** សម្រាប់រក្សាទុក Files សំខាន់ៗដែលអ្នកប្រើប្រាស់បង្កើត។ Files នៅក្នុង Directory នេះត្រូវបាន Backup ទៅ iCloud។
-   **Caches Directory:** សម្រាប់រក្សាទុក Files ដែលអាចត្រូវបានបង្កើតឡើងវិញ (Re-generated)។ Files ទាំងនេះអាចត្រូវបានលុបដោយប្រព័ន្ធនៅពេលទំហំ Storage ពេញ។
-   **Temporary Directory:** សម្រាប់រក្សាទុក Files បណ្តោះអាសន្ន។ Files ទាំងនេះនឹងត្រូវបានលុបនៅពេល App បិទ។

## 2. ការប្រើប្រាស់ \`FileManager\`

\`FileManager.default\` គឺជា Instance ដែលត្រូវបានប្រើសម្រាប់ធ្វើការជាមួយ File System។

\`\`\`swift
// ឧទាហរណ៍៖ ការទទួលបាន URL របស់ Documents Directory
func getDocumentsDirectory() -> URL {
    let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
    return paths[0]
}

// ឧទាហរណ៍៖ ការរក្សាទុក String ទៅជា File
func saveStringToFile() {
    let filename = getDocumentsDirectory().appendingPathComponent("mytextfile.txt")
    let text = "នេះជាអត្ថបទដែលត្រូវរក្សាទុក។"
    
    do {
        try text.write(to: filename, atomically: true, encoding: .utf8)
        print("File saved successfully.")
    } catch {
        print("Error saving file: \\(error.localizedDescription)")
    }
}

// ឧទាហរណ៍៖ ការអាន File
func readStringFromFile() -> String? {
    let filename = getDocumentsDirectory().appendingPathComponent("mytextfile.txt")
    
    do {
        let text = try String(contentsOf: filename, encoding: .utf8)
        return text
    } catch {
        print("Error reading file: \\(error.localizedDescription)")
        return nil
    }
}
\`\`\`


## 3. ការរក្សាទុកនិងទាញយករូបភាព

អ្នកអាចបកប្រែ \`UIImage\` (ឬ \`NSImage\`) ទៅជា \`Data\` ដើម្បីរក្សាទុកទៅក្នុង File ។

\`\`\`swift
import UIKit // សម្រាប់ UIImage

func saveImageToFile(image: UIImage, filename: String) {
    guard let data = image.jpegData(compressionQuality: 0.8) else { return }
    let fileURL = getDocumentsDirectory().appendingPathComponent(filename)
    
    do {
        try data.write(to: fileURL)
        print("Image saved successfully.")
    } catch {
        print("Error saving image: \\(error.localizedDescription)")
    }
}

func loadImageFromFile(filename: String) -> UIImage? {
    let fileURL = getDocumentsDirectory().appendingPathComponent(filename)
    
    do {
        let data = try Data(contentsOf: fileURL)
        return UIImage(data: data)
    } catch {
        print("Error loading image: \\(error.localizedDescription)")
        return nil
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ JSONEncoder និង Decoder ជាមួយ Files</h3>
<p>អ្នកអាចរក្សាទុក Objects ដែលគោរពតាម \`Codable\` ទៅជា JSON Files។</p>
<pre><code class="language-swift">
import Foundation

struct User: Codable {
    var name: String
    var age: Int
}

func saveUserToFile() {
    let user = User(name: "សុខា", age: 25)
    let filename = getDocumentsDirectory().appendingPathComponent("user.json")
    
    do {
        let jsonData = try JSONEncoder().encode(user)
        try jsonData.write(to: filename)
        print("User JSON saved.")
    } catch {
        print("Error saving user: \\(error.localizedDescription)")
    }
}

func loadUserFromFile() -> User? {
    let filename = getDocumentsDirectory().appendingPathComponent("user.json")
    
    do {
        let jsonData = try Data(contentsOf: filename)
        let user = try JSONDecoder().decode(User.self, from: jsonData)
        print("User loaded: \\(user.name)")
        return user
    } catch {
        print("Error loading user: \\(error.localizedDescription)")
        return nil
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `FileManager` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Network',
        'គ្រប់គ្រង File System',
        'គ្រប់គ្រង UI',
        'គ្រប់គ្រង Core Data'
      ],
      correct: 1,
      explanation: '`FileManager` គឺជា Class សម្រាប់ធ្វើការជាមួយ Files និង Directories។'
    },
    {
      question: 'តើ Files នៅក្នុង `Documents Directory` ត្រូវបាន Backup ដែរឬទេ?',
      options: [
        'Backup ទៅ iCloud',
        'មិន Backup ទេ',
        'Backup តែនៅលើ Simulator',
        'Backup តែនៅលើ Device ពិត'
      ],
      correct: 0,
      explanation: 'Files នៅក្នុង Documents Directory ត្រូវបាន Backup ទៅ iCloud។'
    },
    {
      question: 'តើ `Caches Directory` ប្រើសម្រាប់រក្សាទុក File ប្រភេទណា?',
      options: [
        'Files សំខាន់ៗដែលអ្នកប្រើប្រាស់បង្កើត',
        'Files ដែលអាចត្រូវបានបង្កើតឡើងវិញ',
        'Files ដែលត្រូវការសុវត្ថិភាពខ្ពស់',
        'Files ដែលត្រូវប្រើតែម្តង'
      ],
      correct: 1,
      explanation: '`Caches Directory` គឺសម្រាប់រក្សាទុក Files ដែលអាចត្រូវបានលុបនៅពេលដែលប្រព័ន្ធត្រូវការទំហំ Storage។'
    },
    {
      question: 'តើ `Temporary Directory` ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក Files បណ្តោះអាសន្ន',
        'រក្សាទុក App Settings',
        'រក្សាទុក Files ដែលមិនត្រូវលុប',
        'រក្សាទុក Files សំខាន់ៗ'
      ],
      correct: 0,
      explanation: 'Files នៅក្នុង `Temporary Directory` នឹងត្រូវបានលុបនៅពេល App បិទ។'
    },
    {
      question: 'តើ `URL` ប្រើសម្រាប់អ្វីនៅក្នុង `FileManager`?',
      options: [
        'បង្ហាញ URL របស់ Website',
        'តំណាងឱ្យទីតាំងរបស់ File ឬ Directory',
        'ទាញយក File ពី Website',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`URL` នៅក្នុង File System តំណាងឱ្យទីតាំងរបស់ File ឬ Directory មួយ។'
    },
    {
      question: 'តើ `do-try-catch` Block ប្រើជាមួយ `FileManager` សម្រាប់អ្វី?',
      options: [
        'ធ្វើ Animation',
        'គ្រប់គ្រង Errors ដែលអាចកើតឡើង',
        'រក្សាទុក Data',
        'លុប File'
      ],
      correct: 1,
      explanation: 'Methods របស់ `FileManager` អាចបោះ Errors ដូច្នេះវាត្រូវតែនៅក្នុង `do-try-catch` Block។'
    },
    {
      question: 'តើ `JPEG` Compression Quality ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ទំហំ File របស់រូបភាព',
        'កំណត់ល្បឿនក្នុងការរក្សាទុក',
        'កំណត់ពណ៌របស់រូបភាព',
        'កំណត់ទំហំរបស់រូបភាព'
      ],
      correct: 0,
      explanation: '`compressionQuality` កំណត់ពីកម្រិតគុណភាពដែលនឹងត្រូវប្រើសម្រាប់រក្សាទុក JPEG File ដែលប៉ះពាល់ដល់ទំហំ File។'
    },
    {
      question: 'តើ `Data(contentsOf: fileURL)` អាចបោះ Error ទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេល File នោះមានទំហំធំ',
        'បានតែពេល File នោះជា Text File'
      ],
      correct: 0,
      explanation: '`Data(contentsOf:)` អាចបោះ Error ប្រសិនបើ File នោះមិនមាន ឬមិនអាចអានបាន។'
    },
    {
      question: 'តើ `Sandbox` របស់ iOS គឺជាអ្វី?',
      options: [
        'កន្លែងលេងហ្គេម',
        'បរិស្ថានដែលកំណត់សម្រាប់ App នីមួយៗ',
        'កន្លែងសម្រាប់ Test Code',
        'កន្លែងសម្រាប់ Design UI'
      ],
      correct: 1,
      explanation: 'Sandbox គឺជាបរិស្ថានដែលត្រូវបានកំណត់ដោយ Apple ដើម្បីការពារ App មួយពីការចូលប្រើទិន្នន័យរបស់ App ផ្សេង។'
    },
    {
      question: 'តើ `FileManager` ប្រើសម្រាប់រក្សាទុក Passwords ទេ?',
      options: [
        'បាន',
        'មិនបានទេ ព្រោះវាមិនមានលក្ខណៈ Secure',
        'បានតែពេល Encrypt',
        'បានតែពេលមាន Network Connection'
      ],
      correct: 1,
      explanation: 'ដូចទៅនឹង `UserDefaults` `FileManager` មិនត្រូវបាន Encrypt ដោយស្វ័យប្រវត្តិទេ ដូច្នេះវាមិនសមរម្យសម្រាប់ព័ត៌មានរសើប។'
    },
    {
      question: 'តើ `JSONEncoder` និង `JSONDecoder` ប្រើជាមួយ `FileManager` សម្រាប់អ្វី?',
      options: [
        'ដើម្បី Encrypt Data',
        'ដើម្បីទាញយក Files',
        'ដើម្បីបកប្រែ Swift Object ទៅជា JSON Files',
        'ដើម្បីរក្សាទុក Image'
      ],
      correct: 2,
      explanation: '`JSONEncoder` និង `JSONDecoder` ត្រូវបានប្រើដើម្បីបកប្រែ Swift Objects ទៅជា JSON Data ហើយសរសេរទៅកាន់ File។'
    }
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដើម្បីបង្ហាញរូបភាពដែលបានរក្សាទុកក្នុង Documents Directory។

**តម្រូវការ:**

1.  **View:**
    -   បង្ហាញ \`Image\` View មួយ។
    -   បង្ហាញ \`Button\` មួយឈ្មោះ "រក្សាទុករូបភាព"។
    -   បង្ហាញ \`Button\` មួយឈ្មោះ "បង្ហាញរូបភាព"។

2.  **Logic:**
    -   បង្កើត Function មួយឈ្មោះ \`saveImage()\` ដែលរក្សាទុករូបភាពដែលបានកំណត់ (ឧ. \`UIImage(systemName: "heart.fill")\`) ទៅកាន់ Documents Directory។
    -   បង្កើត Function មួយឈ្មោះ \`loadImage()\` ដែលទាញយករូបភាពពី Documents Directory។
    -   នៅពេលចុចលើ Button "រក្សាទុករូបភាព" ត្រូវហៅ \`saveImage()\`។
    -   នៅពេលចុចលើ Button "បង្ហាញរូបភាព" ត្រូវហៅ \`loadImage()\` ហើយដាក់រូបភាពទៅក្នុង \`State\` Property។

**ការណែនាំ:** ត្រូវប្រាកដថាអ្នកគ្រប់គ្រង Error ដោយប្រើ \`do-try-catch\`។
    `,
    solution: `
\`\`\`swift
import SwiftUI
import UIKit // ត្រូវ import UIKit សម្រាប់ UIImage

struct ImageStorageView: View {
    @State private var loadedImage: UIImage?
    
    // ទទួលបាន Documents Directory
    func getDocumentsDirectory() -> URL {
        let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
        return paths[0]
    }
    
    // រក្សាទុករូបភាព
    func saveImage() {
        let originalImage = UIImage(systemName: "heart.fill")!
        guard let data = originalImage.pngData() else {
            print("Failed to get PNG data.")
            return
        }
        
        let fileURL = getDocumentsDirectory().appendingPathComponent("my_heart.png")
        
        do {
            try data.write(to: fileURL)
            print("Image saved successfully to: \\(fileURL.path)")
        } catch {
            print("Error saving image: \\(error.localizedDescription)")
        }
    }
    
    // ទាញយករូបភាព
    func loadImage() {
        let fileURL = getDocumentsDirectory().appendingPathComponent("my_heart.png")
        
        do {
            let data = try Data(contentsOf: fileURL)
            self.loadedImage = UIImage(data: data)
            print("Image loaded successfully.")
        } catch {
            print("Error loading image: \\(error.localizedDescription)")
            self.loadedImage = nil // កំណត់ទៅ nil បើមាន Error
        }
    }
    
    var body: some View {
        VStack(spacing: 20) {
            if let image = loadedImage {
                Image(uiImage: image)
                    .resizable()
                    .scaledToFit()
                    .frame(width: 200, height: 200)
                    .foregroundColor(.red)
            } else {
                Text("គ្មានរូបភាពទេ")
                    .foregroundColor(.secondary)
            }
            
            Button("រក្សាទុករូបភាព") {
                saveImage()
            }
            .buttonStyle(.borderedProminent)
            
            Button("បង្ហាញរូបភាព") {
                loadImage()
            }
            .buttonStyle(.bordered)
        }
        .padding()
    }
}
\`\`\`
`
  }
};

export default SwiftLesson7_3Content;