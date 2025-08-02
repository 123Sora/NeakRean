// src/components/lessons/Lesson3_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson3_2: LessonContent = {
  title: 'Forms (ទម្រង់)',
  objectives: [
    'យល់ពី <form> Tag',
    'ស្គាល់ <input> Tag (ប្រភេទផ្សេងៗគ្នា៖ text, password, submit, checkbox, radio, email, number ។ល។)',
    'យល់ពី <label> (សម្រាប់ភ្ជាប់ជាមួយ input)',
    'អាចប្រើ <textarea> (ប្រអប់អក្សរច្រើនបន្ទាត់)',
    'អាចប្រើ <select>, <option> (សម្រាប់ជ្រើសរើស)',
    'យល់ពី <button> Tag',
    'ស្គាល់ method (GET/POST) និង action Attributes'
  ],
  content: `
# Forms (ទម្រង់) 📝

HTML Forms ត្រូវបានប្រើដើម្បី **ប្រមូលការបញ្ចូលពីអ្នកប្រើប្រាស់** (user input)។ ការបញ្ចូលទាំងនេះអាចជាឈ្មោះ, អ៊ីមែល, ពាក្យសម្ងាត់, ការជ្រើសរើសជម្រើស, ល។ ទិន្នន័យដែលបានប្រមូលត្រូវបានបញ្ជូនទៅម៉ាស៊ីនបម្រើ (server) ដើម្បីដំណើរការ ឬរក្សាទុក។

---

## 1. \`<form>\` Tag 📄

Tag \`<form>\` ត្រូវបានប្រើដើម្បីបង្កើត **ទម្រង់ HTML (HTML Form)** ទាំងមូល។ ធាតុបញ្ចូល (input elements) ទាំងអស់ដូចជា input fields, buttons, drop-downs ត្រូវតែដាក់នៅខាងក្នុង tag នេះ។

* **\`action\` attribute:** បញ្ជាក់ **URL (Uniform Resource Locator)** ដែលទិន្នន័យទម្រង់នឹងត្រូវបញ្ជូនទៅនៅពេលដែលទម្រង់ត្រូវបាន submit។ នេះគឺជា Script នៅលើ Server ដែលនឹងដំណើរការទិន្នន័យ។
* **\`method\` attribute:** បញ្ជាក់ **HTTP method** ដែលត្រូវប្រើនៅពេលបញ្ជូនទិន្នន័យទម្រង់។ តម្លៃទូទៅបំផុតគឺ \`GET\` និង \`POST\`។
    * **\`GET\`:** ទិន្នន័យទម្រង់ត្រូវបានបន្ថែមទៅ **URL ជា query strings** (ឧទាហរណ៍: \`/?name=John&email=john@example.com\`)។ វាអាចមើលឃើញក្នុង URL ហើយមានកំណត់ទំហំ (ប្រហែល 2048 តួអក្សរ អាស្រ័យលើ Browser/Server)។ ល្អសម្រាប់ទម្រង់ស្វែងរក ឬទិន្នន័យដែលមិនរសើប។
    * **\`POST\`:** ទិន្នន័យទម្រង់ត្រូវបានបញ្ជូននៅក្នុង **តួ (body) នៃ HTTP request**។ វាមិនអាចមើលឃើញក្នុង URL ទេ ហើយគ្មានកំណត់ទំហំ (ជាក់ស្តែង)។ ល្អសម្រាប់ទិន្នន័យរសើប (ដូចជាពាក្យសម្ងាត់, លេខប័ណ្ណឥណទាន) ឬទិន្នន័យច្រើន។

\`\`\`html
<form action="/submit-data" method="post">
  </form>
\`\`\`

---

## 2. \`<input>\` Tag ⌨️

Tag \`<input>\` គឺជាធាតុបញ្ចូលទម្រង់ដែលត្រូវបានប្រើច្រើនបំផុត និងមានភាពបត់បែនខ្ពស់។ វាមានប្រភេទជាច្រើនដែលត្រូវបានកំណត់ដោយ attribute \`type\`។

* **\`type="text"\`:** សម្រាប់បញ្ចូលអត្ថបទធម្មតា (ឧទាហរណ៍: ឈ្មោះ, នាមត្រកូល)។
    \`\`\`html
    <input type="text" name="username">
    \`\`\`
* **\`type="password"\`:** សម្រាប់បញ្ចូលពាក្យសម្ងាត់ (អក្សរនឹងបង្ហាញជា * ឬ • ដើម្បីលាក់)។
    \`\`\`html
    <input type="password" name="user_password">
    \`\`\`
* **\`type="submit"\`:** បង្កើតប៊ូតុងសម្រាប់បញ្ជូនទម្រង់។
    \`\`\`html
    <input type="submit" value="បញ្ជូន">
    \`\`\`
* **\`type="checkbox"\`:** សម្រាប់ជ្រើសរើសជម្រើសច្រើន (អ្នកប្រើប្រាស់អាចជ្រើសរើសមួយ ឬច្រើន)។
    \`\`\`html
    <input type="checkbox" name="hobbies" value="reading"> អាន
    <input type="checkbox" name="hobbies" value="gaming"> លេងហ្គេម
    \`\`\`
* **\`type="radio"\`:** សម្រាប់ជ្រើសរើសជម្រើសមួយក្នុងចំណោមជម្រើសជាច្រើន (ធាតុ radio ទាំងអស់ក្នុងក្រុមតែមួយត្រូវមាន \`name\` attribute ដូចគ្នា)។
    \`\`\`html
    <input type="radio" name="gender" value="male"> ប្រុស
    <input type="radio" name="gender" value="female"> ស្រី
    \`\`\`
* **\`type="email"\`:** សម្រាប់បញ្ចូលអាសយដ្ឋានអ៊ីមែល (browser អាចធ្វើ validate តាមទម្រង់អ៊ីមែល)។
    \`\`\`html
    <input type="email" name="user_email">
    \`\`\`
* **\`type="number"\`:** សម្រាប់បញ្ចូលលេខ (browser អាចបង្ហាញ arrow សម្រាប់បង្កើន/បន្ថយតម្លៃ)។
    \`\`\`html
    <input type="number" name="quantity" min="1" max="10">
    \`\`\`
* **\`name\` attribute:** **ចាំបាច់** សម្រាប់ធាតុបញ្ចូលទាំងអស់ ប្រសិនបើអ្នកចង់ឱ្យទិន្នន័យរបស់វាត្រូវបានបញ្ជូនទៅ server។ វាជាឈ្មោះដែលត្រូវបានប្រើដើម្បីកំណត់អត្តសញ្ញាណទិន្នន័យ (ឧទាហរណ៍: "username", "user_email")។
* **\`value\` attribute:** កំណត់តម្លៃដំបូង (default value) សម្រាប់ input field ឬតម្លៃដែលត្រូវបញ្ជូនសម្រាប់ checkboxes/radio buttons/submit buttons។
* **\`id\` attribute:** ប្រើដើម្បីកំណត់អត្តសញ្ញាណ Element មួយគត់នៅលើទំព័រ។ វាមានសារៈសំខាន់សម្រាប់ការភ្ជាប់ជាមួយ \`<label>\` ។
* **\`placeholder\` attribute:** ផ្តល់នូវអត្ថបទជំនួយដែលបង្ហាញក្នុង input field រហូតដល់អ្នកប្រើប្រាស់ចាប់ផ្តើមវាយ។
* **\`required\` attribute:** ធ្វើឱ្យ input field នោះចាំបាច់ត្រូវបំពេញមុននឹងអាចបញ្ជូន Form បាន។

---

## 3. \`<label>\` (សម្រាប់ភ្ជាប់ជាមួយ input) 🏷️

Tag \`<label>\` ផ្តល់នូវ **ស្លាក (caption/description)** សម្រាប់ធាតុបញ្ចូល។ វាមានសារៈសំខាន់សម្រាប់ Accessibility (អ្នកប្រើប្រាស់ Screen Readers អាចយល់ថា label មួយណាត្រូវនឹង input មួយណា)។ អ្នកត្រូវភ្ជាប់ \`<label>\` ទៅ input ជាក់លាក់មួយដោយប្រើ attribute \`for\` របស់ label ដែលត្រូវនឹង \`id\` attribute របស់ input។

\`\`\`html
<label for="username">ឈ្មោះអ្នកប្រើប្រាស់:</label>
<input type="text" id="username" name="username">
\`\`\`

---

## 4. \`<textarea>\` (ប្រអប់អក្សរច្រើនបន្ទាត់) 📝

Tag \`<textarea>\` ត្រូវបានប្រើដើម្បីបង្កើត **ប្រអប់បញ្ចូលអត្ថបទច្រើនបន្ទាត់ (multi-line text input)** សម្រាប់អ្នកប្រើប្រាស់។ ឧទាហរណ៍: សម្រាប់បញ្ចូលសារ, មតិយោបល់, ឬពិពណ៌នាវែងៗ។ អ្នកអាចកំណត់ចំនួនជួរដេក (\`rows\`) និងជួរឈរ (\`cols\`) ដើម្បីកំណត់ទំហំបង្ហាញដំបូង។

\`\`\`html
<label for="comment">មតិយោបល់:</label><br>
<textarea id="comment" name="user_comment" rows="5" cols="40">
  សរសេរមតិយោបល់របស់អ្នកនៅទីនេះ...
</textarea>
\`\`\`

---

## 5. \`<select>\`, \`<option>\` (សម្រាប់ជ្រើសរើស) ⬇️

* **\`<select>\`:** ប្រើសម្រាប់បង្កើត **បញ្ជីរទម្លាក់ចុះ (drop-down list)** សម្រាប់ជ្រើសរើសជម្រើសមួយ ឬច្រើន។ attribute \`name\` ត្រូវបានកំណត់នៅលើ \`<select>\` Tag។
* **\`<option>\`:** កំណត់ **ជម្រើស** នីមួយៗនៅក្នុងបញ្ជីរ \`<select>\`។ attribute \`value\` របស់ option គឺជាអ្វីដែលត្រូវបានបញ្ជូនទៅ server នៅពេលជម្រើសនោះត្រូវបានជ្រើសរើស។ អត្ថបទរវាង Tag \`<option>\` គឺជាអ្វីដែលអ្នកប្រើប្រាស់មើលឃើញ។

\`\`\`html
<label for="fruit">ជ្រើសរើសផ្លែឈើដែលអ្នកចូលចិត្ត:</label><br>
<select id="fruit" name="favorite_fruit">
  <option value="">--សូមជ្រើសរើស--</option>
  <option value="apple">ផ្លែប៉ោម</option>
  <option value="banana" selected>ផ្លែចេក</option>
  <option value="orange">ផ្លែក្រូច</option>
</select>
\`\`\`
* **\`selected\` attribute:** កំណត់ជម្រើសណាដែលត្រូវបានជ្រើសរើសដោយស្វ័យប្រវត្តិនៅពេលទំព័រផ្ទុកដំបូង។

---

## 6. \`<button>\` Tag 🔘

Tag \`<button>\` ត្រូវបានប្រើដើម្បីបង្កើត **ប៊ូតុង**។ អ្នកអាចដាក់អត្ថបទ ឬសូម្បីតែរូបភាពនៅខាងក្នុង Tag ប៊ូតុង។ អ្នកអាចកំណត់ \`type\` attribute របស់ប៊ូតុង៖

* **\`type="submit"\` (Default):** ប៊ូតុងនេះនឹងបញ្ជូនទម្រង់ទៅ \`action\` URL ។
* **\`type="reset"\`:** ប៊ូតុងនេះនឹងកំណត់តម្លៃទាំងអស់ក្នុងទម្រង់ឡើងវិញទៅតម្លៃដំបូងរបស់វា។
* **\`type="button"\`:** ប៊ូតុងធម្មតាដែលមិនធ្វើអ្វីដោយខ្លួនឯង។ វាត្រូវបានប្រើជាទូទៅជាមួយ JavaScript ដើម្បីដំណើរការមុខងារជាក់លាក់។

\`\`\`html
<button type="submit">ចុះឈ្មោះ</button>
<button type="reset">សម្អាតទម្រង់</button>
<button type="button">ចុចខ្ញុំ</button>
\`\`\`

---

## ឧទាហរណ៍ពេញលេញនៃ Form:

\`\`\`html
<form action="/submit-form" method="post">
    <h2>ទម្រង់ចុះឈ្មោះ</h2>
    <label for="fname">ឈ្មោះពេញ:</label><br>
    <input type="text" id="fname" name="full_name" value="" placeholder="បញ្ចូលឈ្មោះពេញរបស់អ្នក" required><br><br>

    <label for="user_email">អាសយដ្ឋានអ៊ីមែល:</label><br>
    <input type="email" id="user_email" name="user_email" placeholder="example@domain.com" required><br><br>

    <label for="user_password">ពាក្យសម្ងាត់:</label><br>
    <input type="password" id="user_password" name="user_password" minlength="8" required><br><br>

    <label>ជ្រើសរើសភេទ:</label><br>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">ប្រុស</label><br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">ស្រី</label><br><br>

    <label for="comments">មតិយោបល់:</label><br>
    <textarea id="comments" name="comments_text" rows="4" cols="50" placeholder="សរសេរមតិយោបល់របស់អ្នកនៅទីនេះ..."></textarea><br><br>

    <label for="programming_lang">ភាសាសរសេរកូដដែលចូលចិត្ត:</label><br>
    <select id="programming_lang" name="programming_lang">
        <option value="">--ជ្រើសរើសភាសា--</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="php">PHP</option>
    </select><br><br>

    <input type="checkbox" id="terms" name="accept_terms" value="yes" required>
    <label for="terms">ខ្ញុំយល់ព្រមតាមលក្ខខណ្ឌ</label><br><br>

    <button type="submit">ចុះឈ្មោះឥឡូវនេះ</button>
    <button type="reset">សម្អាតទម្រង់</button>
</form>
\`\`\`

---

> **គន្លឹះសំខាន់:** 💡 **\`name\` attribute** គឺចាំបាច់សម្រាប់ធាតុ input ទាំងអស់នៅក្នុង Form ប្រសិនបើអ្នកចង់ឱ្យទិន្នន័យរបស់វាត្រូវបានបញ្ជូនទៅ server! បើគ្មាន \`name\` attribute ទេ server នឹងមិនទទួលបានតម្លៃរបស់ input នោះទេ។ សម្រាប់ Accessibility, តែងតែប្រើ \`<label>\` ជាមួយ \`for\` attribute ដែលត្រូវនឹង \`id\` របស់ input។

  `,
  examples: [
    `<form><label for="name">ឈ្មោះ:</label><input type="text" id="name" name="name"></form>`,
    `<form><input type="checkbox" id="agree" name="agree"><label for="agree">យល់ព្រម</label></form>`,
    `<form><select><option value="apple">ផ្លែប៉ោម</option></select></form>`,
    `<form action="/search" method="get"><input type="search" name="q"><button type="submit">ស្វែងរក</button></form>`
  ],
  quiz: [
    {
      question: 'តើ Tag មួយណាប្រើសម្រាប់បង្កើតប្រអប់បញ្ចូលអត្ថបទច្រើនបន្ទាត់?',
      options: ['<input type="text">', '<textarea>', '<select>', '<button>'],
      correct: 1,
      explanation: '<textarea> Tag ប្រើសម្រាប់បង្កើតប្រអប់បញ្ចូលអត្ថបទច្រើនបន្ទាត់ ដែលអ្នកប្រើប្រាស់អាចវាយអក្សរបានច្រើនជួរ។'
    },
    {
      question: 'តើ Attribute \`method="POST"\` ធ្វើអ្វី?',
      options: [
        'បញ្ជូនទិន្នន័យតាម URL',
        'បញ្ជូនទិន្នន័យក្នុងតួ HTTP request',
        'ផ្ទុកទំព័រឡើងវិញ',
        'កំណត់ទំហំ Form'
      ],
      correct: 1,
      explanation: '`method="POST"` បញ្ជូនទិន្នន័យក្នុងតួ HTTP request ដែលមានសុវត្ថិភាពជាងសម្រាប់ទិន្នន័យរសើប និងអាចផ្ទុកទិន្នន័យបានច្រើន។'
    },
    {
      question: 'តើ Attribute មួយណាដែលចាំបាច់សម្រាប់ធាតុ input ប្រសិនបើអ្នកចង់ឱ្យទិន្នន័យរបស់វាត្រូវបានបញ្ជូនទៅ server?',
      options: ['id', 'class', 'name', 'value'],
      correct: 2,
      explanation: '`name` Attribute គឺចាំបាច់ដើម្បីកំណត់អត្តសញ្ញាណទិន្នន័យនៅពេលវាត្រូវបានបញ្ជូនទៅ server។ បើគ្មាន `name` ទេ server នឹងមិនស្គាល់ input នោះទេ។'
    },
    {
      question: 'តើ Tag \`<label>\` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ធ្វើឱ្យអត្ថបទដិត',
        'ផ្តល់ស្លាកសម្រាប់ធាតុ input',
        'បង្កើតប៊ូតុង',
        'បង្ហាញរូបភាព'
      ],
      correct: 1,
      explanation: '`<label>` Tag ផ្តល់ស្លាកពិពណ៌នាសម្រាប់ធាតុ input ហើយមានសារៈសំខាន់សម្រាប់ Accessibility។'
    },
    {
      question: 'តើ Attribute មួយណាដែលប្រើសម្រាប់ភ្ជាប់ \`<label>\` ទៅ input ជាក់លាក់មួយ?',
      options: ['id', 'name', 'for', 'link'],
      correct: 2,
      explanation: '`for` Attribute របស់ `<label>` ត្រូវបានប្រើដើម្បីភ្ជាប់វាទៅ `id` Attribute របស់ input ដែលត្រូវគ្នា។'
    },
    {
      question: 'តើ \`type="password"\` របស់ \`<input>\` ធ្វើឱ្យអក្សរដែលបានវាយបង្ហាញបែបណា?',
      options: [
        'បង្ហាញជាលេខ',
        'បង្ហាញជាអក្សរធម្មតា',
        'បង្ហាញជាសញ្ញាផ្កាយ (*) ឬចំណុចមូល (•)',
        'លាក់ទាំងស្រុង'
      ],
      correct: 2,
      explanation: '`type="password"` ធ្វើឱ្យអក្សរដែលបានវាយបង្ហាញជាសញ្ញាផ្កាយ ឬចំណុចមូល ដើម្បីលាក់ពាក្យសម្ងាត់។'
    },
    {
      question: 'តើ Tag \`<select>\` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើតប្រអប់អត្ថបទ',
        'បង្កើតប៊ូតុង',
        'បង្កើតបញ្ជីរទម្លាក់ចុះ',
        'បង្កើត Checkbox'
      ],
      correct: 2,
      explanation: '`<select>` Tag ប្រើសម្រាប់បង្កើតបញ្ជីរទម្លាក់ចុះ (drop-down list) ដែលអ្នកប្រើប្រាស់អាចជ្រើសរើសជម្រើសមួយ។'
    },
    {
      question: 'តើ Attribute \`type="submit"\` របស់ \`<button>\` ធ្វើអ្វីដោយ Default?',
      options: [
        'កំណត់តម្លៃ Form ឡើងវិញ',
        'បញ្ជូនទម្រង់',
        'ដំណើរការ JavaScript Function',
        'បើក Link ថ្មី'
      ],
      correct: 1,
      explanation: '`type="submit"` (ដែលជា Default Value) របស់ `<button>` នឹងបញ្ជូនទម្រង់ទៅ URL ដែលបានកំណត់ក្នុង `action` Attribute របស់ `<form>`។'
    },
    {
      question: 'តើ Attribute \`action\` របស់ \`<form>\` កំណត់អ្វី?',
      options: [
        'ប្រភេទនៃ Form',
        'វិធីសាស្រ្តបញ្ជូនទិន្នន័យ',
        'URL ដែលទិន្នន័យទម្រង់ត្រូវបញ្ជូនទៅ',
        'ទំហំ Form'
      ],
      correct: 2,
      explanation: '`action` Attribute កំណត់ URL របស់ Server Script ដែលនឹងទទួល និងដំណើរការទិន្នន័យ Form។'
    },
    {
      question: 'តើ \`type="radio"\` inputs ត្រូវមាន Attribute ដូចគ្នាអ្វី ដើម្បីឱ្យពួកគេជាក្រុមតែមួយ?',
      options: ['id', 'value', 'name', 'type'],
      correct: 2,
      explanation: 'ធាតុ `radio` ទាំងអស់នៅក្នុងក្រុមតែមួយត្រូវតែមាន `name` Attribute ដូចគ្នា ដើម្បីឱ្យអ្នកប្រើប្រាស់អាចជ្រើសរើសបានតែមួយគត់ក្នុងចំណោមពួកវា។'
    },
    {
      question: 'តើ \`type="checkbox"\` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ជ្រើសរើសប៉ុន្មានជម្រើស?',
      options: [
        'តែមួយគត់',
        'តែពីរ',
        'ច្រើនជាងមួយ',
        'គ្មានជម្រើស'
      ],
      correct: 2,
      explanation: '`type="checkbox"` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ជ្រើសរើសជម្រើសច្រើន (មួយ ឬច្រើន) ពីក្រុមនៃ Checkboxs។'
    },
    {
      question: 'តើ \`value\` Attribute របស់ \`<option>\` ប្រើសម្រាប់អ្វី?',
      options: [
        'ជាអត្ថបទដែលអ្នកប្រើប្រាស់មើលឃើញ',
        'ជាតម្លៃដែលត្រូវបានបញ្ជូនទៅ server',
        'ជា ID សម្រាប់ Option',
        'កំណត់ថា Option ត្រូវបានជ្រើសរើសដោយ Default'
      ],
      correct: 1,
      explanation: '`value` Attribute របស់ `<option>` គឺជាតម្លៃពិតប្រាកដដែលត្រូវបានបញ្ជូនទៅ server នៅពេល Option នោះត្រូវបានជ្រើសរើស។'
    },
    {
      question: 'តើ HTTP method មួយណាដែលទិន្នន័យត្រូវបានបង្ហាញនៅក្នុង URL?',
      options: ['POST', 'PUT', 'GET', 'DELETE'],
      correct: 2,
      explanation: '`GET` method បញ្ជូនទិន្នន័យជា Query String នៅក្នុង URL ដែលធ្វើឱ្យទិន្នន័យអាចមើលឃើញ។'
    },
    {
      question: 'តើ Attribute មួយណាដែលធ្វើឱ្យ input field ត្រូវបំពេញមុននឹងអាចបញ្ជូន Form បាន?',
      options: ['optional', 'validate', 'required', 'mandatory'],
      correct: 2,
      explanation: '`required` Attribute ធ្វើឱ្យ input field នោះជាវាលចាំបាច់ត្រូវបំពេញ។'
    },
    {
      question: 'តើ \`placeholder\` Attribute ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់តម្លៃដំបូង',
        'បង្ហាញអត្ថបទជំនួយក្នុង input field',
        'លាក់អត្ថបទក្នុង input field',
        'កំណត់ទំហំ input field'
      ],
      correct: 1,
      explanation: '`placeholder` Attribute ផ្តល់នូវអត្ថបទជំនួយ (Hint) ដែលបង្ហាញក្នុង input field រហូតដល់អ្នកប្រើប្រាស់ចាប់ផ្តើមវាយ។'
    },
    {
      question: 'តើ Tag មួយណាដែលបង្កើតប៊ូតុងធម្មតាដែលមិនធ្វើអ្វីដោយខ្លួនឯង (ត្រូវប្រើ JavaScript)?',
      options: [
        '<input type="submit">',
        '<input type="button">',
        '<button type="submit">',
        '<button type="button">'
      ],
      correct: 3,
      explanation: '`<button type="button">` បង្កើតប៊ូតុងធម្មតាដែលត្រូវការ JavaScript ដើម្បីដំណើរការមុខងារជាក់លាក់។ `<input type="button">` ក៏អាចប្រើបានដែរ។'
    },
    {
      question: 'តើ HTML Forms ត្រូវបានប្រើសម្រាប់គោលបំណងចម្បងអ្វី?',
      options: [
        'បង្ហាញអត្ថបទ',
        'ប្រមូលការបញ្ចូលពីអ្នកប្រើប្រាស់',
        'ដាក់រូបភាព',
        'បង្កើតតំណភ្ជាប់'
      ],
      correct: 1,
      explanation: 'HTML Forms ត្រូវបានរចនាឡើងជាពិសេសដើម្បីប្រមូលការបញ្ចូល (input) ពីអ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ Tag \`<option>\` ត្រូវតែជាកូនរបស់ Tag មួយណា?',
      options: ['<input>', '<form>', '<label>', '<select>'],
      correct: 3,
      explanation: '`<option>` Tag ត្រូវតែជាកូនផ្ទាល់របស់ `<select>` Tag ដើម្បីបង្ហាញជាជម្រើសក្នុងបញ្ជីរទម្លាក់ចុះ។'
    },
    {
      question: 'តើ \`method="GET"\` ត្រូវបានណែនាំសម្រាប់ទិន្នន័យប្រភេទណា?',
      options: [
        'ពាក្យសម្ងាត់',
        'លេខកាតឥណទាន',
        'ព័ត៌មានស្វែងរក (Search Queries)',
        'ឯកសារធំៗ'
      ],
      correct: 2,
      explanation: '`method="GET"` គឺល្អសម្រាប់ទិន្នន័យដែលមិនរសើប ដូចជា Search Queries ព្រោះវាត្រូវបានបន្ថែមទៅ URL ហើយអាច Bookmark បាន។'
    },
    {
      question: 'តើ Tag \`<form>\` អាចមានធាតុ input នៅខាងក្រៅវាបានទេ ហើយនៅតែបញ្ជូនទិន្នន័យរបស់ពួកគេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 1,
      explanation: 'ទេ ធាតុ input ទាំងអស់ត្រូវតែដាក់នៅខាងក្នុង Tag `<form>` ដើម្បីឱ្យទិន្នន័យរបស់ពួកគេត្រូវបានបញ្ជូននៅពេល Form ត្រូវបាន Submit។'
    },
    {
      question: 'តើ Attribute \`min\` និង \`max\` អាចប្រើជាមួយ \`<input type="number">\` សម្រាប់គោលបំណងអ្វី?',
      options: [
        'កំណត់ទំហំប៉ុស្តិ៍ input',
        'កំណត់ចំនួនអក្សរអតិបរមា/អប្បបរមា',
        'កំណត់តម្លៃលេខអតិបរមា/អប្បបរមា',
        'កំណត់ល្បឿនបញ្ចូលលេខ'
      ],
      correct: 2,
      explanation: '`min` និង `max` Attributes ត្រូវបានប្រើជាមួយ `<input type="number">` ដើម្បីកំណត់ជួរតម្លៃលេខដែលអាចបញ្ចូលបាន។'
    },
    {
      question: 'តើ Tag មួយណាដែលប្រើសម្រាប់កំណត់តម្លៃទាំងអស់ក្នុងទម្រង់ឡើងវិញ?',
      options: [
        '<input type="submit">',
        '<button type="submit">',
        '<input type="reset">',
        '<button type="button">'
      ],
      correct: 2,
      explanation: '`<input type="reset">` ឬ `<button type="reset">` ត្រូវបានប្រើដើម្បីកំណត់តម្លៃទាំងអស់ក្នុងទម្រង់ឡើងវិញទៅតម្លៃដំបូងរបស់ពួកគេ។'
    }
  ],
  lab: {
    task: 'បង្កើតទម្រង់ទំនាក់ទំនងសាមញ្ញមួយដែលមានវាលសម្រាប់ឈ្មោះ (text), អ៊ីមែល (email), ប្រធានបទ (text), សារ (textarea), និងប៊ូតុងបញ្ជូន (submit)។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <title>លំហាត់ទី ១០</title>
    <style>
        body { font-family: Arial, sans-serif; }
        form {
            max-width: 500px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input[type="text"],
        input[type="email"],
        textarea {
            width: calc(100% - 10px); /* Adjust for padding */
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>ទម្រង់ទំនាក់ទំនង</h1>
    <form action="/submit-contact" method="post">
        <label for="name">ឈ្មោះ:</label><br>
        <input type="text" id="name" name="user_name" required><br><br>

        <label for="email">អ៊ីមែល:</label><br>
        <input type="email" id="email" name="user_email" required><br><br>

        <label for="subject">ប្រធានបទ:</label><br>
        <input type="text" id="subject" name="subject" required><br><br>

        <label for="message">សារ:</label><br>
        <textarea id="message" name="message_content" rows="5" cols="30" required></textarea><br><br>

        <button type="submit">បញ្ជូនសារ</button>
    </form>
</body>
</html>`
  }
};
export default Lesson3_2;