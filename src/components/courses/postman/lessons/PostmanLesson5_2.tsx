import type { LessonContent } from '../../../../types/LessonTypes';

const PostmanLesson5_2Content: LessonContent = {
  title: 'Monitors (ការតាមដាន API)',
  objectives: [
    'យល់ពីអត្ថប្រយោជន៍នៃ API Monitoring',
    'បង្កើត Monitor ថ្មីក្នុង Postman',
    'កំណត់រចនាសម្ព័ន្ធ Monitor (Collection, Environment, Frequency, Regions)',
    'កំណត់ Alerts និង Notifications',
    'បកស្រាយលទ្ធផល Monitor',
    'ធានា API Availability ដោយ Monitors'
  ],
  content: `
# Monitors (ការតាមដាន API) 📈🚨

**Monitors** ក្នុង Postman ជួយតាមដាន Performance និង Availability របស់ APIs ដោយដំណើរការ Collections តាមកាលវិភាគពីទីតាំងផ្សេងៗ។ វាជូនដំណឹងនៅពេលមានបញ្ហា ធានា API ដំណើរការល្អ។

## 1. អត្ថប្រយោជន៍ 💡

* **Availability:** ធានា API អាចចូលប្រើបាន 24/7។
* **Performance:** តាមដាន Response Time ដើម្បីរក Bottlenecks។
* **Correctness:** ផ្ទៀងផ្ទាត់ Responses ដោយ Test Scripts។
* **Proactive Detection:** ជូនដំណឹងមុនពេលអ្នកប្រើរងផលប៉ះពាល់។
* **Global Reach:** តេស្តពីទីតាំងផ្សេងៗសម្រាប់បទពិសោធន៍ជាប់លាប់។
* **Historical Data:** ផ្តល់ទិន្នន័យ Performance និង Availability។

## 2. បង្ផើត Monitor ➕

1. Sidebar > **Monitors** > **+ New Monitor**។
2. **កំណត់:**
   * **Name:** ឧ. "API Health Check"។
   * **Collection:** ជ្រើស Collection ដែលមាន Test Scripts។
   * **Environment:** ជ្រើស Environment (ឧ. Production)។
   * **Frequency:** ឧ. 5 នាទីម្តង។
   * **Regions:** ឧ. US East, Europe, Asia Pacific។
   * **Email Alerts:** បញ្ចូល Email។
   * **Delay:** ការពន្យារពេលរវាង Requests។
   * **Timeout:** ពេលវេលាអតិបរមាសម្រាប់ Request។
3. **Create Monitor**។

## 3. កំណត់រចនាសម្ព័ន្ធ ⚙️

* **Collection:** Workflow នៃ Requests ជាមួយ Test Scripts។
* **Environment:** ផ្តល់ Variables (ឧ. Base URL, Tokens)។
* **Frequency:** កំណត់ញឹកញាប់ (ញឹក = រកឃើញលឿន, ប៉ុន្តែប្រើ Monitor Calls)។
* **Regions:** តេស្តពីទីតាំងច្រើនសម្រាប់ Global Apps។

## 4. Alerts & Notifications 🔔

* **Conditions:** Test Fails, Response Time > Threshold, Status ≠ 2xx។
* **Email Alerts:** បញ្ចូល Email សម្រាប់ Alerts។
* **Integrations:** Slack, PagerDuty សម្រាប់ Advanced Notifications។

## 5. បកស្រាយលទ្ធផល 📊

* **Performance Metrics:** Response Time, Average Time, Downtime Graphs។
* **Test Results:** Pass/Fail សម្រាប់ Requests។
* **Logs:** Request/Response Data លម្អិត។
* **Uptime:** ភាគរយ API Availability។

## 6. API Availability 🛡️

* **Quick Detection:** Alerts នៅពេល API មានបញ្ហា។
* **Consistent Testing:** ចាប់ Regression ដោយ Test Cases។
* **External Testing:** តេស្តពីទស្សនៈអ្នកប្រើ។
* **Data Analysis:** វិភាគនិន្នាការ Performance។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: Monitor Setup
\`\`\`text
[Create New Monitor]
-------------------------------------------------
| Name:        [ API Health Check ]              |
| Collection:  [ API_Health_Check ▼ ]            |
| Environment: [ Production ▼ ]                  |
| Frequency:   [ Every 5 minutes ▼ ]             |
| Regions:     [ US East, Europe ▼ ]             |
| Email:       [ user@example.com ]              |
| Delay:       [ 100 ] ms                        |
| Timeout:     [ 5000 ] ms                       |
|                                                |
| [ Create Monitor ] [ Cancel ]                  |
-------------------------------------------------
\`\`\`

### ឧទាហរណ៍ ២: Monitor Results
\`\`\`text
[Monitor: API Health Check]
-------------------------------------------------
| Status: ✅ Operational                         |
| Uptime: 99.8%                                 |
| Avg Response Time: 140ms                      |
|                                               |
| Performance: (Graph of response times)        |
|                                               |
| Runs:                                         |
|   Run #1001 (5 min ago) - ✅ All Passed        |
|     GET /posts/1 (200 OK, 130ms)              |
|   Run #1000 (10 min ago) - ❌ Failed           |
|     GET /posts/1 (500 Error, 200ms)           |
|                                               |
| Alerts:                                       |
|   - 2025-07-23 09:00 AM: GET /posts/1 failed  |
-------------------------------------------------
\`\`\`
`
  ],
  quiz: [
    {
      question: 'Monitors ប្រើសម្រាប់អ្វី?',
      options: [
        'Mock Servers',
        'Performance & Availability Monitoring',
        'API Documentation',
        'Environment Variables'
      ],
      correct: 1,
      explanation: 'Monitors តាមដាន Performance និង Availability របស់ APIs។'
    },
    {
      question: 'Monitors ដំណើរការពី Regions ច្រើនទេ?',
      options: ['បាទ/ចាស៎', 'Region មួយ', 'Local Region', 'Postman Cloud'],
      correct: 0,
      explanation: 'Monitors ដំណើរការពី Regions ច្រើន។'
    },
    {
      question: 'Run frequency កំណត់អ្វី?',
      options: [
        'Request Count',
        'Monitor Run Interval',
        'Request Delay',
        'Region Count'
      ],
      correct: 1,
      explanation: 'Run frequency កំណត់ញឹកញាប់ Monitor Run។'
    },
    {
      question: 'Monitors រកឃើញបញ្ហាមុនអ្នកប្រើរងផលប៉ះពាល់ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Major Issues', 'Performance Issues'],
      correct: 0,
      explanation: 'Monitors ជូនដំណឹងមុនអ្នកប្រើរងផលប៉ះពាល់។'
    },
    {
      question: 'Email Alerts ប្រើសម្រាប់អ្វី?',
      options: [
        'Full Reports',
        'Issue Notifications',
        'Send Requests',
        'Share Collections'
      ],
      correct: 1,
      explanation: 'Email Alerts ជូនដំណឹងពីបញ្ហា API។'
    },
    {
      question: 'Monitors តាមដាន Response Time ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'If Over Threshold', 'GET Requests'],
      correct: 0,
      explanation: 'Monitors តាមដាន Response Time។'
    },
    {
      question: 'Alert Conditions ផ្អែកលើអ្វី?',
      options: [
        'Test Fails',
        'Response Time',
        'Test Fails, Response Time, Status ≠ 2xx',
        'Status Code'
      ],
      correct: 2,
      explanation: 'Alert Conditions ផ្អែកលើ Test Fails, Response Time, Status ≠ 2xx។'
    },
    {
      question: 'Uptime បង្ហាញអ្វី?',
      options: [
        'Request Count',
        'API Availability %',
        'Passed Tests',
        'Avg Monitor Run Time'
      ],
      correct: 1,
      explanation: 'Uptime បង្ហាញ API Availability %។'
    },
    {
      question: 'Monitors Integrate ជាមួយ Slack បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Email Only', 'Postman Apps'],
      correct: 0,
      explanation: 'Monitors Integrate ជាមួយ Slack, PagerDuty។'
    },
    {
      question: 'Monitors ធានា Correctness យ៉ាងម៉េច?',
      options: [
        'Increase Response Time',
        'Run Test Scripts',
        'Reduce Requests',
        'Mock Responses'
      ],
      correct: 1,
      explanation: 'Monitors ផ្ទៀងផ្ទាត់ Responses ដោយ Test Scripts។'
    },
    {
      question: 'Monitors ដំណើរការពី Regions ច្រើនបានទេ?',
      options: ['បាទ/ចាស៎', 'Region មួយ', 'Closest Region', 'High Traffic Region'],
      correct: 0,
      explanation: 'Monitors ដំណើរការពី Regions ច្រើន។'
    },
    {
      question: 'Monitors ផ្តល់ Historical Data ទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', '24 Hours', '7 Days'],
      correct: 0,
      explanation: 'Monitors ផ្តល់ Historical Data។'
    },
    {
      question: 'Timeout កំណត់អ្វី?',
      options: [
        'Monitor Duration',
        'Request Timeout',
        'Test Script Timeout',
        'Response Body Timeout'
      ],
      correct: 1,
      explanation: 'Timeout កំណត់ Request Timeout។'
    },
    {
      question: 'Monitors វិភាគ Performance Trends បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Response Time Only', 'Error Rates Only'],
      correct: 0,
      explanation: 'Monitors វិភាគ Performance Trends។'
    },
    {
      question: 'Monitors ដំណើរការពីណា?',
      options: [
        'Local Machine',
        'Postman Cloud',
        'Both',
        'Depends on Settings'
      ],
      correct: 1,
      explanation: 'Monitors ដំណើរការពី Postman Cloud។'
    },
    {
      question: 'Monitors រកឃើញ Downtime បានទេ?',
      options: ['បាទ/ចាស៎', 'ទេ', 'Long Downtime', 'Short Downtime'],
      correct: 0,
      explanation: 'Monitors រកឃើញ Downtime។'
    },
    {
      question: 'Monitors ដំណើរការ Requests ជាមួយ Scripts បានទេ?',
      options: ['បាទ/ចាស៎', 'Simple Requests', 'Test Scripts Only', 'Pre-request Scripts Only'],
      correct: 0,
      explanation: 'Monitors ដំណើរការ Requests ជាមួយ Pre-request & Test Scripts។'
    },
    {
      question: 'API Monitoring ជា Proactive Issue Detection ទេ?',
      options: ['បាទ/ចាស៎', 'Reactive', 'Performance Issues', 'Security Issues'],
      correct: 0,
      explanation: 'API Monitoring ជា Proactive Issue Detection។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍: បង្ផើត Monitor (Conceptual)

ភារកិច្ចនេះណែនាំការបង្ផើត Monitor ក្នុង Postman UI ដោយមិន Run ពិតប្រាកដ (តម្រូវ Postman Cloud)។

## លក្ខខណ្ឌ
* Postman Desktop/Web (Free Account)។
* Workspace (ឧ. "API Tests")។

## 1. រៀបចំ Collection
1. **Collection: API_Health_Check**
   * ជ្រើស/បង្ផើត Collection។
   * **Request:** GET \`https://jsonplaceholder.typicode.com/posts/1\`
   * **Test Script:**
     \`\`\`javascript
     pm.test("Status code is 200 OK", function () {
         pm.response.to.have.status(200);
     });
     pm.test("Response has 'id' property", function () {
         const responseJson = pm.response.json();
         pm.expect(responseJson).to.have.property('id');
     });
     \`\`\`
2. **Environment (Optional):** កំណត់ Variables (ឧ. Base URL, Tokens)។

## 2. បង្ផើត Monitor
1. Sidebar > **Monitors** > **+ New Monitor**។
2. **កំណត់:**
   * Name: \`API Health Check\`
   * Collection: \`API_Health_Check\`
   * Environment: \`Production\` / \`No Environment\`
   * Frequency: Every 1 hour
   * Regions: US East, Europe
   * Email: user@example.com
   * Delay: 0 ms
   * Timeout: 5000 ms
3. **Create Monitor**។

## 3. Monitor Dashboard (Conceptual)
* **Metrics:** Status, Response Time, Uptime, Test Pass/Fail។
* **Alerts:** Email នៅពេល Status ≠ 2xx ឬ Test Fails។

## 4. ឯកសារយោង (Optional)
* Screenshot: Monitor Setup Dialog, Dashboard (បើអាចចូលប្រើ)។
`,
    solution: `
# ដំណោះស្រាយ: Monitor Setup

## 1. Collection
* **Name:** \`API_Health_Check\`
* **Request:** GET \`https://jsonplaceholder.typicode.com/posts/1\`
  * Test Script: Checks Status 200, 'id' property
* **Environment:** Optional (Production/No Environment)

## 2. Monitor
* **Name:** \`API Health Check\`
* **Config:**
  * Collection: \`API_Health_Check\`
  * Frequency: Every 1 hour
  * Regions: US East, Europe
  * Email: user@example.com
  * Delay: 0 ms
  * Timeout: 5000 ms

## 3. Dashboard (Conceptual)
* **Metrics:** Uptime, Response Time, Test Results
* **Alerts:** Sent for Failures (Status ≠ 2xx, Test Fails)

## 4. Summary
Monitor ជួយធានា API Performance និង Availability ដោយ Proactive Testing។
`
  }
};

export default PostmanLesson5_2Content;