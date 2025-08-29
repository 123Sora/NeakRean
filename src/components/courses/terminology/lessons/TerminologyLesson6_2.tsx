import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson6_2Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងការតម្រៀប',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងការតម្រៀប (Sorting Terms)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា sort, ascending, descending, និង bubble sort',
    'រៀនការប្រើក្បួនតម្រៀបក្នុង Python',
    'ស្វែងយល់ពីក្បួនតម្រៀបផ្សេងៗដូចជា Bubble Sort និង Python built-in sort',
    'អនុវត្តការប្រើក្បួនតម្រៀបក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងការតម្រៀប 📊💻

---

**វាក្យស័ព្ទទាក់ទងនឹងការតម្រៀប (Sorting Terms)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់ពន្យល់អំពីវិធីសាស្ត្រក្នុងការរៀបចំទិន្នន័យតាមលំដាប់ជាក់លាក់។

---

## 1. អ្វីទៅជា Sorting Terms?

- **Sorting:** ការរៀបចំទិន្នន័យតាមលំដាប់ជាក់លាក់ (ឧ. តូចទៅធំ ឬធំទៅតូច)។
- **សារៈសំខាន់:**
  - ធ្វើឱ្យទិន្នន័យងាយស្រួលស្វែងរក និងវិភាគ។
  - បង្កើនប្រសិទ្ធភាពនៃកម្មវិធី។
  - ចាំបាច់សម្រាប់ក្បួនដោះស្រាយជាច្រើន។

**ពាក្យសំខាន់ៗ:**
- **Sort:** ការរៀបចំទិន្នន័យតាមលំដាប់។
- **Ascending:** តម្រៀបពីតូចទៅធំ។
- **Descending:** តម្រៀបពីធំទៅតូច។
- **Bubble Sort:** ក្បួនតម្រៀបសាមញ្ញដែលប្រៀបធៀប និងប្តូរធាតុជាបន្តបន្ទាប់។

---

## 2. ការប្រើ Sorting Terms ក្នុង Python

- **ការប្រើ Built-in Sort:**
  \`\`\`python
  numbers = [5, 2, 8, 1, 9]
  numbers.sort()  # Ascending
  print(numbers)  # បង្ហាញ: [1, 2, 5, 8, 9]
  \`\`\`
- **ការតម្រៀប Descending:**
  \`\`\`python
  numbers = [5, 2, 8, 1, 9]
  numbers.sort(reverse=True)
  print(numbers)  # បង្ហាញ: [9, 8, 5, 2, 1]
  \`\`\`
- **ការប្រើ Bubble Sort:**
  \`\`\`python
  def bubble_sort(arr):
      n = len(arr)
      for i in range(n):
          for j in range(0, n - i - 1):
              if arr[j] > arr[j + 1]:
                  arr[j], arr[j + 1] = arr[j + 1], arr[j]
      return arr
  numbers = [5, 2, 8, 1, 9]
  print(bubble_sort(numbers))  # បង្ហាញ: [1, 2, 5, 8, 9]
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
# តម្រៀបឈ្មោះតាមលំដាប់អក្សរក្រម
names = ["សុខា", "វិច្ឆិកា", "សុភ័ក្ត្រ"]
names.sort()
print(f"ឈ្មោះតម្រៀប: {names}")  # បង្ហាញ: ឈ្មោះតម្រៀប: ['សុខា', 'សុភ័ក្ត្រ', 'វិច្ឆិកា']
\`\`\`

**ឧទាហរណ៍ជាមួយ Bubble Sort:**

\`\`\`python
def bubble_sort_descending(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] < arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
numbers = [5, 2, 8, 1, 9]
print(bubble_sort_descending(numbers))  # បង្ហាញ: [9, 8, 5, 2, 1]
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ភាពងាយស្រួល:** ធ្វើឱ្យទិន្នន័យងាយស្រួលស្វែងរក។
- **ប្រសិទ្ធភាព:** កាត់បន្ថយពេលវេលាក្នុងការដោះស្រាយបញ្ហា។
- **ភាពបត់បែន:** អាចតម្រៀបទិន្នន័យបានច្រើនប្រភេទ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Built-in Sort</h3>
<p>តម្រៀបលេខតាមលំដាប់ ascending។</p>
<pre><code class="language-python">
numbers = [4, 1, 7, 3]
numbers.sort()
print(numbers)  # បង្ហាញ: [1, 3, 4, 7]
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Bubble Sort</h3>
<p>តម្រៀបលេខដោយប្រើ Bubble Sort។</p>
<pre><code class="language-python">
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
numbers = [4, 1, 7, 3]
print(bubble_sort(numbers))  # បង្ហាញ: [1, 3, 4, 7]
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Sorting សំដៅលើអ្វី?',
      options: [
        'ការផ្ទុកទិន្នន័យ',
        'ការរៀបចំទិន្នន័យតាមលំដាប់',
        'ការគ្រប់គ្រង Hardware',
        'ការបង្កើត UI'
      ],
      correct: 1,
      explanation: 'Sorting ជាការរៀបចំទិន្នន័យតាមលំដាប់។'
    },
    {
      question: 'តើ Ascending មានន័យថាអ្វី?',
      options: [
        'តម្រៀបពីធំទៅតូច',
        'តម្រៀបពីតូចទៅធំ',
        'លុបទិន្នន័យ',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Ascending ជាការតម្រៀបពីតូចទៅធំ។'
    },
    {
      question: 'តើ Descending មានន័យថាអ្វី?',
      options: [
        'តម្រៀបពីតូចទៅធំ',
        'តម្រៀបពីធំទៅតូច',
        'លុបទិន្នន័យ',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Descending ជាការតម្រៀបពីធំទៅតូច។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [3, 1, 4]\nnumbers.sort()\nprint(numbers)\n```',
      options: ['[1, 3, 4]', '[3, 1, 4]', '[4, 3, 1]', 'Error'],
      correct: 0,
      explanation: 'sort() តម្រៀប ascending ដូច្នេះបង្ហាញ [1, 3, 4]។'
    },
    {
      question: 'តើ Bubble Sort ធ្វើអ្វី?',
      options: [
        'ប្រៀបធៀប និងប្តូរធាតុជាបន្តបន្ទាប់',
        'តម្រៀបដោយប្រើ recursion',
        'លុបធាតុស្ទួន',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 0,
      explanation: 'Bubble Sort ប្រៀបធៀប និងប្តូរធាតុជាបន្តបន្ទាប់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [3, 1, 4]\nnumbers.sort(reverse=True)\nprint(numbers)\n```',
      options: ['[1, 3, 4]', '[3, 1, 4]', '[4, 3, 1]', 'Error'],
      correct: 2,
      explanation: 'sort(reverse=True) តម្រៀប descending ដូច្នេះបង្ហាញ [4, 3, 1]។'
    },
    {
      question: 'តើ Sorting ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យទិន្នន័យងាយស្រួលស្វែងរក',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Sorting ធ្វើឱ្យទិន្នន័យងាយស្រួលស្វែងរក។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\nprint(bubble_sort([3, 1, 4]))\n```',
      options: ['[1, 3, 4]', '[3, 1, 4]', '[4, 3, 1]', 'Error'],
      correct: 0,
      explanation: 'Bubble Sort តម្រៀប ascending ដូច្នេះបង្ហាញ [1, 3, 4]។'
    },
    {
      question: 'តើកូដខាងក្រោមតម្រៀបបែបណា?\n```python\nnames = ["a", "c", "b"]\nnames.sort()\n```',
      options: ['Ascending', 'Descending', 'Random', 'Error'],
      correct: 0,
      explanation: 'sort() តម្រៀប ascending។'
    },
    {
      question: 'តើ Bubble Sort មាន Time Complexity បែបណា?',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
      correct: 1,
      explanation: 'Bubble Sort មាន Time Complexity O(n²)។'
    },
    {
      question: 'តើ Sorting ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យទិន្នន័យងាយស្រួលស្វែងរក',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Sorting ធ្វើឱ្យទិន្នន័យងាយស្រួលស្វែងរក។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [2, 5, 1]\nnumbers.sort(reverse=True)\nprint(numbers)\n```',
      options: ['[1, 2, 5]', '[2, 5, 1]', '[5, 2, 1]', 'Error'],
      correct: 2,
      explanation: 'sort(reverse=True) តម្រៀប descending ដូច្នេះបង្ហាញ [5, 2, 1]។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Sorting Terms។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំចំនួនលេខដែលចង់បញ្ចូល (Integer)។
2. **ការអនុវត្ត:**
   - បង្កើត list ដើម្បីផ្ទុកលេខដែលបញ្ចូល។
   - ប្រើ Python built-in sort ដើម្បីតម្រៀប ascending។
   - ប្រើ Bubble Sort ដើម្បីតម្រៀប descending។
   - បង្ហាញលទ្ធផលទាំងពីរ។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: Ascending = [លទ្ធផល], Descending = [លទ្ធផល]"។
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
    
    # តម្រៀប ascending ដោយប្រើ built-in sort
    ascending = numbers.copy()
    ascending.sort()
    
    # តម្រៀប descending ដោយប្រើ Bubble Sort
    def bubble_sort_descending(arr):
        n = len(arr)
        for i in range(n):
            for j in range(0, n - i - 1):
                if arr[j] < arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]
        return arr
    descending = bubble_sort_descending(numbers.copy())
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: Ascending = {ascending}, Descending = {descending}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson6_2Content;