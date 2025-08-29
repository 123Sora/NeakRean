import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson6_3Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងការស្វែងរក',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងការស្វែងរក (Searching Terms)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា search, linear search, binary search, និង index',
    'រៀនការប្រើក្បួនស្វែងរកក្នុង Python',
    'ស្វែងយល់ពីភាពខុសគ្នារវាង Linear Search និង Binary Search',
    'អនុវត្តការប្រើក្បួនស្វែងរកក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងការស្វែងរក 🔍💻

---

**វាក្យស័ព្ទទាក់ទងនឹងការស្វែងរក (Searching Terms)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់ពន្យល់អំពីវិធីសាស្ត្រក្នុងការស្វែងរកទិន្នន័យនៅក្នុងបណ្តុំ។

---

## 1. អ្វីទៅជា Searching Terms?

- **Search:** ការស្វែងរកធាតុមួយនៅក្នុងបណ្តុំទិន្នន័យ។
- **សារៈសំខាន់:**
  - ជួយរកទិន្នន័យបានលឿន និងប្រកបដោយប្រសិទ្ធភាព។
  - ចាំបាច់សម្រាប់កម្មវិធីដែលតម្រូវឱ្យស្វែងរកទិន្នន័យញឹកញាប់។
  - បង្កើនប្រសិទ្ធភាពនៃក្បួនដោះស្រាយ។

**ពាក្យសំខាន់ៗ:**
- **Search:** ការស្វែងរកធាតុនៅក្នុងបណ្តុំ។
- **Linear Search:** ក្បួនស្វែងរកដែលពិនិត្យធាតុម្តងមួយៗតាមលំដាប់។
- **Binary Search:** ក្បួនស្វែងរកលឿនសម្រាប់បណ្តុំដែលតម្រៀបរួច ដោយបែងចែកបណ្តុំជាពាក់កណ្តាល។
- **Index:** ទីតាំងនៃធាតុនៅក្នុងបណ្តុំ។

---

## 2. ការប្រើ Searching Terms ក្នុង Python

- **ការប្រើ Linear Search:**
  \`\`\`python
  def linear_search(arr, target):
      for i in range(len(arr)):
          if arr[i] == target:
              return i
      return -1
  numbers = [5, 2, 8, 1, 9]
  print(linear_search(numbers, 8))  # បង្ហាញ: 2
  \`\`\`
- **ការប្រើ Binary Search:**
  \`\`\`python
  def binary_search(arr, target):
      left, right = 0, len(arr) - 1
      while left <= right:
          mid = (left + right) // 2
          if arr[mid] == target:
              return mid
          elif arr[mid] < target:
              left = mid + 1
          else:
              right = mid - 1
      return -1
  numbers = [1, 2, 5, 8, 9]  # តម្រៀបរួច
  print(binary_search(numbers, 5))  # បង្ហាញ: 2
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ (Linear Search):**

\`\`\`python
def linear_search_names(names, target):
    for i in range(len(names)):
        if names[i] == target:
            return i
    return -1
names = ["សុខា", "វិច្ឆិកា", "សុភ័ក្ត្រ"]
print(linear_search_names(names, "វិច្ឆិកា"))  # បង្ហាញ: 1
\`\`\`

**ឧទាហរណ៍កូដ (Binary Search):**

\`\`\`python
def binary_search_numbers(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
numbers = [1, 3, 5, 7, 9]
print(binary_search_numbers(numbers, 7))  # បង្ហាញ: 3
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ប្រីទ្ធភាព:** Binary Search លឿនជាង Linear Search សម្រាប់បណ្តុំធំ។
- **ភាពងាយស្រួល:** ធ្វើឱ្យការស្វែងរកទិន្នន័យមានភាពច្បាស់លាស់។
- **ភាពបត់បែន:** អាចប្រើបានជាមួយបណ្តុំទិន្នន័យផ្សេងៗ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Linear Search</h3>
<p>ស្វែងរកលេខនៅក្នុង list។</p>
<pre><code class="language-python">
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
numbers = [4, 1, 7, 3]
print(linear_search(numbers, 7))  # បង្ហាញ: 2
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Binary Search</h3>
<p>ស្វែងរកលេខនៅក្នុង list ដែលតម្រៀបរួច។</p>
<pre><code class="language-python">
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
numbers = [1, 3, 4, 7]
print(binary_search(numbers, 4))  # បង្ហាញ: 2
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Search សំដៅលើអ្វី?',
      options: [
        'ការផ្ទុកទិន្នន័យ',
        'ការស្វែងរកធាតុនៅក្នុងបណ្តុំ',
        'ការគ្រប់គ្រង Hardware',
        'ការបង្កើត UI'
      ],
      correct: 1,
      explanation: 'Search ជាការស្វែងរកធាតុនៅក្នុងបណ្តុំ។'
    },
    {
      question: 'តើ Linear Search ធ្វើអ្វី?',
      options: [
        'ពិនិត្យធាតុម្តងមួយៗតាមលំដាប់',
        'បែងចែកបណ្តុំជាពាក់កណ្តាល',
        'តម្រៀបទិន្នន័យ',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 0,
      explanation: 'Linear Search ពិនិត្យធាតុម្តងមួយៗតាមលំដាប់។'
    },
    {
      question: 'តើ Binary Search តម្រូវឱ្យបណ្តុំមានលក្ខណៈអ្វី?',
      options: [
        'មិនតម្រៀប',
        'តម្រៀបរួច',
        'គ្មានធាតុស្ទួន',
        'ទំហំថេរ'
      ],
      correct: 1,
      explanation: 'Binary Search តម្រូវឱ្យបណ្តុំតម្រៀបរួច។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1\nprint(linear_search([3, 1, 4], 4))\n```',
      options: ['0', '1', '2', '-1'],
      correct: 2,
      explanation: 'លេខ 4 នៅ index 2 ដូច្នេះបង្ហាញ 2។'
    },
    {
      question: 'តើ Binary Search មាន Time Complexity បែបណា?',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
      correct: 2,
      explanation: 'Binary Search មាន Time Complexity O(log n)។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\nprint(binary_search([1, 2, 3, 4], 5))\n```',
      options: ['0', '1', '2', '-1'],
      correct: 3,
      explanation: 'លេខ 5 មិនមានក្នុង list ដូច្នេះបង្ហាញ -1។'
    },
    {
      question: 'តើ Searching ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យការស្វែងរកទិន្នន័យកាន់តែលឿន',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Searching ធ្វើឱ្យការស្វែងរកទិន្នន័យកាន់តែលឿន។'
    },
    {
      question: 'តើ Linear Search មាន Time Complexity បែបណា?',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
      correct: 0,
      explanation: 'Linear Search មាន Time Complexity O(n)។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1\nprint(linear_search([1, 3, 5], 3))\n```',
      options: ['0', '1', '2', '-1'],
      correct: 1,
      explanation: 'លេខ 3 នៅ index 1 ដូច្នេះបង្ហាញ 1។'
    },
    {
      question: 'តើ Binary Search លឿនជាង Linear Search ក្នុងករណីណា?',
      options: [
        'បណ្តុំតូច',
        'បណ្តុំធំដែលតម្រៀបរួច',
        'បណ្តុំមិនតម្រៀប',
        'បណ្តុំគ្មានធាតុ'
      ],
      correct: 1,
      explanation: 'Binary Search លឿនជាងសម្រាប់បណ្តុំធំដែលតម្រៀបរួច។'
    },
    {
      question: 'តើ Index សំដៅលើអ្វី?',
      options: [
        'ទីតាំងនៃធាតុនៅក្នុងបណ្តុំ',
        'ទិន្នន័យនៅក្នុងបណ្តុំ',
        'ក្បួនតម្រៀប',
        'ក្បួនស្វែងរក'
      ],
      correct: 0,
      explanation: 'Index ជាទីតាំងនៃធាតុនៅក្នុងបណ្តុំ។'
    },
    {
      question: 'តើ Searching ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យការស្វែងរកទិន្នន័យកាន់តែងាយស្រួល',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Searching ធ្វើឱ្យការស្វែងរកទិន្នន័យកាន់តែងាយស្រួល។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Searching Terms។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំចំនួនលេខដែលចង់បញ្ចូល (Integer)។
   - ស្នើសុំលេខគោលដៅ (target) ដែលចង់ស្វែងរក។
2. **ការអនុវត្ត:**
   - បង្កើត list ដើម្បីផ្ទុកលេខដែលបញ្ចូល។
   - ប្រើ Linear Search ដើម្បីស្វែងរក target។
   - តម្រៀប list ហើយប្រើ Binary Search ដើម្បីស្វែងរក target។
   - បង្ហាញ index ដែលរកឃើញ (ឬ -1 ប្រសិនបើមិនរកឃើញ)។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: Linear Search index = [លទ្ធផល], Binary Search index = [លទ្ធផល]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីចំនួន ឬលេខមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    # Variable សម្រាប់ផ្ទុកឈ្មោះ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # Variable សម្រាប់ផ្ទុកចំនួនលេខ
    num_count = int(input("បញ្ចូលចំនួនលេខដែលអ្នកចង់បញ្ចូល: "))
    if num_count <= 0:
        raise ValueError("ចំនួនលេខត្រូវតែធំជាង 0!")
    
    # បង្កើត list សម្រាប់ផ្ទុកលេខ
    numbers = []
    for i in range(num_count):
        num = int(input(f"បញ្ចូលលេខទី {i+1}: "))
        numbers.append(num)
    
    # ស្នើសុំលេខគោលដៅ
    target = int(input("បញ្ចូលលេខគោលដៅដែលចង់ស្វែងរក: "))
    
    # Linear Search
    def linear_search(arr, target):
        for i in range(len(arr)):
            if arr[i] == target:
                return i
        return -1
    
    # Binary Search
    def binary_search(arr, target):
        left, right = 0, len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1
    
    # ស្វែងរកដោយ Linear Search
    linear_result = linear_search(numbers, target)
    
    # តម្រៀបសម្រាប់ Binary Search
    sorted_numbers = numbers.copy()
    sorted_numbers.sort()
    binary_result = binary_search(sorted_numbers, target)
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: Linear Search index = {linear_result}, Binary Search index = {binary_result}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson6_3Content;