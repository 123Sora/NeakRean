import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson6_2Content: LessonContent = {
  title: 'ការបង្កើត Weather App',
  objectives: [
    'អនុវត្តការប្រើប្រាស់ Networking (Async/Await) ជាមួយ SwiftUI',
    'រៀនពីរបៀបបកប្រែ JSON Data ពី API',
    'ប្រើ `AsyncImage` ដើម្បីបង្ហាញរូបភាពពី URL',
    'រចនា User Interface ដ៏ស្រស់ស្អាតសម្រាប់បង្ហាញអាកាសធាតុ',
    'យល់ដឹងពីរបៀបគ្រប់គ្រង Loading State និង Error State'
  ],
  content: `
# ការបង្កើត Weather App 🌤️

---

Weather App គឺជាគម្រោងដ៏ល្អមួយសម្រាប់អនុវត្តការប្រើប្រាស់ **Networking**, **Async/Await**, និង **JSON Parsing**។ យើងនឹងទាញយកទិន្នន័យអាកាសធាតុពី API ហើយបង្ហាញវានៅលើអេក្រង់។

## 1. ការរៀបចំគម្រោង

យើងនឹងប្រើ API ពី OpenWeatherMap (អ្នកត្រូវចុះឈ្មោះដើម្បីទទួលបាន API Key)។

-   **Model:** បង្កើត \`struct\` សម្រាប់ Data ដែលយើងចង់បានពី API Response ។
-   **ViewModel:** មាន Logic សម្រាប់ហៅ API, បកប្រែ Data, និងគ្រប់គ្រង State។
-   **View:** បង្ហាញ UI តាមស្ថានភាពរបស់ ViewModel។

\`\`\`swift
// Step 1: Model
struct WeatherResponse: Codable {
    let name: String
    let main: Main
    let weather: [Weather]
}

struct Main: Codable {
    let temp: Double
    let feelsLike: Double
    let humidity: Int
    
    enum CodingKeys: String, CodingKey {
        case temp
        case feelsLike = "feels_like"
        case humidity
    }
}

struct Weather: Codable {
    let description: String
    let icon: String
}

// Step 2: ViewModel
@MainActor // ត្រូវតែនៅ MainActor ដើម្បីធ្វើបច្ចុប្បន្នភាព @Published properties
class WeatherViewModel: ObservableObject {
    @Published var weatherDescription: String = "កំពុងទាញយក..."
    @Published var temperature: String = ""
    @Published var iconURL: URL? = nil
    @Published var isLoading = false
    @Published var errorMessage: String?
    
    // Function សម្រាប់ទាញយកអាកាសធាតុ
    func fetchWeather(forCity city: String) async {
        isLoading = true
        errorMessage = nil
        
        let apiKey = "YOUR_API_KEY" // ជំនួសដោយ API Key របស់អ្នក
        let urlString = "https://api.openweathermap.org/data/2.5/weather?q=\\(city)&appid=\\(apiKey)&units=metric"
        
        guard let url = URL(string: urlString) else {
            errorMessage = "Invalid URL"
            isLoading = false
            return
        }
        
        do {
            let (data, _) = try await URLSession.shared.data(from: url)
            let decodedResponse = try JSONDecoder().decode(WeatherResponse.self, from: data)
            
            // ធ្វើបច្ចុប្បន្នភាព UI
            self.weatherDescription = decodedResponse.weather.first?.description ?? "N/A"
            self.temperature = String(format: "%.1f°C", decodedResponse.main.temp)
            let iconCode = decodedResponse.weather.first?.icon ?? ""
            self.iconURL = URL(string: "https://openweathermap.org/img/wn/\\(iconCode)@2x.png")
            
        } catch {
            self.errorMessage = "Failed to fetch weather: \\(error.localizedDescription)"
        }
        isLoading = false
    }
}
\`\`\`

## 2. ការសាងសង់ UI (View)

យើងនឹងប្រើ \`VStack\`, \`HStack\`, និង \`AsyncImage\` ដើម្បីបង្ហាញព័ត៌មានអាកាសធាតុ។

\`\`\`swift
// Step 3: View
struct WeatherView: View {
    @StateObject private var viewModel = WeatherViewModel()
    @State private var city: String = "Phnom Penh"
    
    var body: some View {
        VStack(spacing: 20) {
            TextField("បញ្ចូលឈ្មោះទីក្រុង", text: $city)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()
            
            Button("ស្វែងរក") {
                Task {
                    await viewModel.fetchWeather(forCity: city)
                }
            }
            .buttonStyle(.borderedProminent)
            
            if viewModel.isLoading {
                ProgressView()
            } else if let message = viewModel.errorMessage {
                Text(message)
                    .foregroundColor(.red)
            } else {
                VStack(spacing: 10) {
                    if let url = viewModel.iconURL {
                        AsyncImage(url: url) { image in
                            image
                                .resizable()
                                .scaledToFit()
                                .frame(width: 100, height: 100)
                        } placeholder: {
                            ProgressView()
                        }
                    }
                    Text(viewModel.temperature)
                        .font(.largeTitle)
                        .fontWeight(.bold)
                    Text(viewModel.weatherDescription.capitalized)
                        .font(.title2)
                        .foregroundColor(.secondary)
                }
            }
            Spacer()
        }
        .padding()
        .task {
            // ទាញយកអាកាសធាតុដំបូងនៅពេល App ចាប់ផ្តើម
            await viewModel.fetchWeather(forCity: city)
        }
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`AsyncImage\` ជាមួយ Placeholders</h3>
<p>យើងអាចបង្ហាញ Placeholder ក្នុងពេលកំពុងទាញយករូបភាព។</p>
<pre><code class="language-swift">
AsyncImage(url: url) { phase in
    switch phase {
    case .empty:
        ProgressView()
    case .success(let image):
        image
            .resizable()
            .scaledToFit()
            .frame(width: 50, height: 50)
    case .failure:
        Image(systemName: "photo.fill")
            .resizable()
            .scaledToFit()
            .frame(width: 50, height: 50)
            .foregroundColor(.red)
    @unknown default:
        EmptyView()
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `Async/Await` ជួយអ្វីក្នុងគម្រោង Weather App?',
      options: [
        'ធ្វើឱ្យ UI កាន់តែស្អាត',
        'ធ្វើឱ្យ Network Code ងាយស្រួលសរសេរនិងអាន',
        'ធ្វើ Animation',
        'រក្សាទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`Async/Await` ធ្វើឱ្យការសរសេរ Network Code ដែលពីមុនប្រើ Closures ស្មុគស្មាញ ក្លាយជាងាយស្រួលយល់។'
    },
    {
      question: 'តើ `JSONDecoder` ប្រើសម្រាប់អ្វីនៅក្នុងគម្រោងនេះ?',
      options: [
        'ទាញយក JSON Data',
        'បកប្រែ JSON Data ទៅជា Swift Structs',
        'រក្សាទុក JSON Data',
        'បង្កើត UI ពី JSON'
      ],
      correct: 1,
      explanation: '`JSONDecoder` ត្រូវបានប្រើដើម្បីបកប្រែ JSON Data ដែលបានទាញយកពី API ទៅជា Swift Structs។'
    },
    {
      question: 'តើ `AsyncImage` ធ្វើអ្វី?',
      options: [
        'បង្ហាញរូបភាពពី Local Assets',
        'ទាញយកនិងបង្ហាញរូបភាពពី URL ដោយស្វ័យប្រវត្តិ',
        'គ្រប់គ្រង Icon របស់ App',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`AsyncImage` គឺជា View មួយដែលទាញយកនិងបង្ហាញរូបភាពពី URL ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'ហេតុអ្វីបានជា `WeatherViewModel` ត្រូវប្រើ `@MainActor`?',
      options: [
        'ដើម្បីធ្វើឱ្យ App ដំណើរការលឿន',
        'ដើម្បីធ្វើបច្ចុប្បន្នភាព UI នៅលើ Main Thread',
        'ដើម្បីគ្រប់គ្រង Error',
        'ដើម្បីរក្សាទុក Data'
      ],
      correct: 1,
      explanation: '`@MainActor` ធានាថា Properties ដែលផ្លាស់ប្តូរដោយ `async` Function ត្រូវបានធ្វើបច្ចុប្បន្នភាពនៅលើ Main Thread។'
    },
    {
      question: 'តើ `Task { ... }` ប្រើសម្រាប់អ្វីនៅក្នុង `Button` Action?',
      options: [
        'ដើម្បីរត់ Synchronous Code',
        'ដើម្បីរត់ Asynchronous Code',
        'ដើម្បីធ្វើ Animation',
        'ដើម្បីគ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`Task` ត្រូវបានប្រើដើម្បីរត់ Asynchronous Code នៅក្នុង Synchronous Context ដូចជា `Button` Action។'
    },
    {
      question: 'តើ `unit=metric` នៅក្នុង URL ធ្វើអ្វី?',
      options: [
        'កំណត់ភាសាទៅជា Metric',
        'ប្រើខ្នាតវាស់អន្តរជាតិ (Celsius)',
        'ប្រើខ្នាតវាស់របស់អាមេរិក (Fahrenheit)',
        'គ្មានអ្វីទាំងអស់'
      ],
      correct: 1,
      explanation: '`units=metric` ប្រាប់ API ឱ្យផ្តល់សីតុណ្ហភាពជា Celsius។'
    },
    {
      question: 'តើ `ProgressView` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញ Status របស់ App',
        'បង្ហាញ Progress Bar',
        'បង្ហាញ Icon Loading',
        'គ្រប់ចម្លើយទាំងអស់គឺត្រឹមត្រូវ'
      ],
      correct: 2,
      explanation: '`ProgressView` គឺជា View ដែលប្រើសម្រាប់បង្ហាញស្ថានភាព Loading។'
    },
    {
      question: 'តើការរចនា `struct` សម្រាប់ JSON Response មានសារៈសំខាន់ដែរឬទេ?',
      options: [
        'សំខាន់ណាស់ ដើម្បីបកប្រែ Data បានត្រឹមត្រូវ',
        'មិនសំខាន់ទេ',
        'វាអាស្រ័យលើទំហំ Data',
        'សំខាន់តែសម្រាប់ App ធំៗ'
      ],
      correct: 0,
      explanation: 'ការរចនា `struct` ត្រឹមត្រូវគឺចាំបាច់ដើម្បីឱ្យ `JSONDecoder` អាចបកប្រែ Data បានដោយគ្មានបញ្ហា។'
    },
    {
      question: 'តើ `placeholder` Closure នៅក្នុង `AsyncImage` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញរូបភាពចុងក្រោយ',
        'បង្ហាញ UI ពេលកំពុង Loading',
        'បង្ហាញ UI ពេលមាន Error',
        'គ្មានប្រយោជន៍ទេ'
      ],
      correct: 1,
      explanation: '`placeholder` Closure ត្រូវបានប្រើដើម្បីបង្ហាញ UI នៅពេលរូបភាពកំពុងត្រូវបានទាញយក។'
    },
    {
      question: 'តើ `try await URLSession.shared.data(from: url)` អាចបោះ Error ប្រភេទអ្វី?',
      options: [
        'Network Error',
        'Server Error',
        'Invalid URL Error',
        'គ្រប់ចម្លើយទាំងអស់គឺត្រឹមត្រូវ'
      ],
      correct: 3,
      explanation: 'Method `data(from:)` អាចបោះ Error ជាច្រើនប្រភេទដូចជា Network Connection Error ឬ Bad URL Error។'
    }
  ],
  lab: {
    task: `
បន្ថែមមុខងារទៅ Weather App ដើម្បីអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់រក្សាទុកទីក្រុងដែលពួកគេចូលចិត្ត។

**តម្រូវការ:**

1.  **ViewModel:**
    -   បន្ថែម \`@Published var savedCities: [String] = []\`។
    -   បង្កើត Function \`saveCity(city: String)\` ដែលរក្សាទុកទីក្រុងទៅក្នុង \`savedCities\`។
    -   ប្រើ \`UserDefaults\` ដើម្បីរក្សាទុកនិងទាញយក \`savedCities\`។

2.  **View:**
    -   បន្ថែម \`List\` មួយទៀតដើម្បីបង្ហាញ \`savedCities\`។
    -   នៅពេលចុចលើទីក្រុងមួយក្នុង \`List\` នោះ \`fetchWeather\` នឹងត្រូវបានហៅជាមួយឈ្មោះទីក្រុងនោះ។
    -   បន្ថែម \`Button\` មួយដើម្បីរក្សាទុកទីក្រុងបច្ចុប្បន្ន។

**ការណែនាំ:** ត្រូវប្រើ \`JSONEncoder\` និង \`JSONDecoder\` ដើម្បីរក្សាទុក Array of \`String\` ទៅក្នុង \`UserDefaults\`។
    `,
    solution: `
\`\`\`swift
import SwiftUI

// កូដសម្រាប់ Model និង ViewModel ពីខាងលើ
// (កែ ViewModel ដូចខាងក្រោម)

@MainActor
class WeatherViewModel: ObservableObject {
    @Published var weatherDescription: String = "..."
    @Published var temperature: String = ""
    @Published var iconURL: URL? = nil
    @Published var isLoading = false
    @Published var errorMessage: String?
    @Published var savedCities: [String] = []

    init() {
        loadCities()
    }
    
    // ... (fetchWeather function ដូចមុន)
    
    func saveCity(city: String) {
        if !savedCities.contains(city) {
            savedCities.append(city)
            saveToUserDefaults()
        }
    }
    
    func loadCities() {
        if let savedData = UserDefaults.standard.data(forKey: "saved_cities") {
            if let decodedCities = try? JSONDecoder().decode([String].self, from: savedData) {
                self.savedCities = decodedCities
            }
        }
    }
    
    private func saveToUserDefaults() {
        if let encoded = try? JSONEncoder().encode(savedCities) {
            UserDefaults.standard.set(encoded, forKey: "saved_cities")
        }
    }
}

// កែប្រែ WeatherView
struct WeatherView: View {
    @StateObject private var viewModel = WeatherViewModel()
    @State private var city: String = "Phnom Penh"
    
    var body: some View {
        VStack(spacing: 20) {
            TextField("បញ្ចូលឈ្មោះទីក្រុង", text: $city)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()
            
            HStack {
                Button("ស្វែងរក") {
                    Task {
                        await viewModel.fetchWeather(forCity: city)
                    }
                }
                .buttonStyle(.borderedProminent)
                
                Button(action: {
                    viewModel.saveCity(city: city)
                }) {
                    Image(systemName: "plus.circle.fill")
                }
                .disabled(viewModel.savedCities.contains(city))
            }
            
            if viewModel.isLoading {
                ProgressView()
            } else if let message = viewModel.errorMessage {
                Text(message)
                    .foregroundColor(.red)
            } else {
                VStack(spacing: 10) {
                    if let url = viewModel.iconURL {
                        AsyncImage(url: url) { image in
                            image.resizable().scaledToFit().frame(width: 100, height: 100)
                        } placeholder: {
                            ProgressView()
                        }
                    }
                    Text(viewModel.temperature)
                        .font(.largeTitle)
                        .fontWeight(.bold)
                    Text(viewModel.weatherDescription.capitalized)
                        .font(.title2)
                        .foregroundColor(.secondary)
                }
            }
            
            if !viewModel.savedCities.isEmpty {
                List {
                    Section(header: Text("ទីក្រុងដែលបានរក្សាទុក")) {
                        ForEach(viewModel.savedCities, id: \\.self) { city in
                            Text(city)
                                .onTapGesture {
                                    Task {
                                        await viewModel.fetchWeather(forCity: city)
                                    }
                                }
                        }
                    }
                }
            }
            Spacer()
        }
        .padding()
        .task {
            await viewModel.fetchWeather(forCity: city)
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson6_2Content;