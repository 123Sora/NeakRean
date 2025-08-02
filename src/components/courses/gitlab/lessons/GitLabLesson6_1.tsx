import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson6_1Content: LessonContent = {
  title: 'Project អនុវត្តន៍ពេញលេញ',
  objectives: [
    'អនុវត្តន៍ចំណេះដឹងដែលបានរៀនពីមុនមកក្នុង Project ពេញលេញមួយ',
    'ដឹងពីរបៀបរៀបចំ Project Structure សម្រាប់ Application ពេញលេញ',
    'រួមបញ្ចូល CI/CD Pipelines សម្រាប់ការ Build, Test, និង Deploy',
    'ប្រើប្រាស់ Merge Requests សម្រាប់ការ Code Review និង Collaboration',
    'ស្វែងយល់ពីការអនុវត្តន៍ Security Scans និង GitLab Pages'
  ],
  content: `
# Project អនុវត្តន៍ពេញលេញ 🛠️ full-project

នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត Fullstack Application ដែលមាន Frontend (HTML/CSS/JS) និង Backend (Python Flask) ជាមួយ CI/CD, Security Scans, និង Deployment។

## 1. Project Overview 💡

* **Repository Structure:**
  \`\`\`
  my-fullstack-devops-app/
  ├── frontend/
  │   ├── index.html
  │   ├── style.css
  │   └── script.js
  ├── backend/
  │   ├── app.py
  │   ├── requirements.txt
  │   ├── Dockerfile
  │   └── .dockerignore
  ├── k8s/
  │   └── deployment.yaml
  ├── .gitlab-ci.yml
  ├── .dockerignore
  └── README.md
  \`\`\`

* **គោលបំណង:**
  * Frontend: Static Website Deployed ទៅ GitLab Pages។
  * Backend: Flask API Deployed ទៅ Kubernetes។
  * CI/CD: Build, Test, Scan, Deploy Frontend និង Backend។
  * Collaboration: Merge Requests សម្រាប់ Code Review។

## 2. ការរៀបចំ Project Structure 📂

1. **Frontend Files:**
   * **\`frontend/index.html\`:**
     \`\`\`html
     <!DOCTYPE html>
     <html>
     <head>
       <title>Frontend App</title>
       <link rel="stylesheet" href="style.css">
     </head>
     <body>
       <h1>Welcome to Fullstack App!</h1>
       <p>Served by GitLab Pages.</p>
       <button id="fetch-backend">Fetch Backend Data</button>
       <p id="backend-data"></p>
       <script src="script.js"></script>
     </body>
     </html>
     \`\`\`
   * **\`frontend/style.css\`:**
     \`\`\`css
     body { font-family: sans-serif; text-align: center; background-color: #f0f4f8; }
     h1 { color: #2c3e50; }
     button { padding: 10px 20px; margin-top: 20px; background-color: #3498db; color: white; border: none; border-radius: 5px; }
     button:hover { background-color: #2980b9; }
     \`\`\`
   * **\`frontend/script.js\`:**
     \`\`\`javascript
     document.getElementById('fetch-backend').addEventListener('click', async () => {
       try {
         const response = await fetch('/api/hello');
         const data = await response.json();
         document.getElementById('backend-data').innerText = \`Backend says: \'$\'{data.message}\`;
       } catch (error) {
         document.getElementById('backend-data').innerText = 'Error fetching backend data.';
         console.error('Error:', error);
       }
     });
     \`\`\`
2. **Backend Files:**
   * **\`backend/app.py\`:**
     \`\`\`python
     from flask import Flask, jsonify
     app = Flask(__name__)

     @app.route('/api/hello')
     def hello():
         return jsonify(message="Hello from Backend API!")

     if __name__ == '__main__':
         app.run(host='0.0.0.0', port=5000)
     \`\`\`
   * **\`backend/requirements.txt\`:**
     \`\`\`
     Flask==2.3.2
     \`\`\`
   * **\`backend/Dockerfile\`:**
     \`\`\`dockerfile
     FROM python:3.9-slim-buster
     WORKDIR /app
     COPY requirements.txt .
     RUN pip install --no-cache-dir -r requirements.txt
     COPY app.py .
     EXPOSE 5000
     CMD ["python", "app.py"]
     \`\`\`
   * **\`backend/.dockerignore\`:**
     \`\`\`
     __pycache__/
     *.pyc
     *.log
     .env
     \`\`\`
3. **Kubernetes File:**
   * **\`k8s/deployment.yaml\`:**
     \`\`\`yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: backend-api
       namespace: production
     spec:
       replicas: 2
       selector:
         matchLabels:
           app: backend-api
       template:
         metadata:
           labels:
             app: backend-api
         spec:
           containers:
           - name: backend-api
             image: registry.gitlab.com/your-username/my-fullstack-devops-app/backend:latest
             ports:
             - containerPort: 5000
     \`\`\`

## 3. GitLab CI/CD Pipeline ⚙️

\`\`\`yaml
stages:
  - build
  - test
  - security_scan
  - deploy

variables:
  DOCKER_HOST: tcp://docker:2375
  DOCKER_TLS_CERTDIR: ""
  BACKEND_IMAGE: $CI_REGISTRY_IMAGE/backend:$CI_COMMIT_SHORT_SHA

build_backend_image:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" "$CI_REGISTRY"
    - docker build -t "$BACKEND_IMAGE" ./backend
    - docker push "$BACKEND_IMAGE"
  only:
    - main
    - merge_requests

test_backend:
  stage: test
  image: python:3.9-slim-buster
  script:
    - pip install -r ./backend/requirements.txt
    - python -m flask --version
    - echo "Backend tests passed!"
  only:
    - main
    - merge_requests
  needs: ["build_backend_image"]

sast_scan:
  stage: security_scan
  image: docker:latest
  variables:
    SAST_EXCLUDED_PATHS: "frontend/, backend/requirements.txt"
  allow_failure: true
  script:
    - echo "Running SAST scan on backend code..."
    - echo "SAST scan completed."
  only:
    - main
    - merge_requests
  needs: ["test_backend"]

container_scan:
  stage: security_scan
  image: docker:latest
  services:
    - docker:dind
  variables:
    DOCKER_IMAGE: "$BACKEND_IMAGE"
  allow_failure: true
  script:
    - echo "Running Container Scan on $BACKEND_IMAGE..."
    - echo "Container scan completed."
  only:
    - main
    - merge_requests
  needs: ["build_backend_image"]

deploy_frontend_pages:
  stage: deploy
  script:
    - mkdir .public
    - cp -r frontend/* .public/
    - mv .public public
    - echo "Frontend deployed to public directory."
  artifacts:
    paths:
      - public
  only:
    - main
  needs: ["sast_scan"]

deploy_backend_api:
  stage: deploy
  image: bitnami/kubectl:latest
  script:
    - kubectl apply -f k8s/deployment.yaml
    - kubectl set image deployment/backend-api backend-api=$BACKEND_IMAGE --namespace=production
    - echo "Backend API deployed."
  environment:
    name: production
    url: https://backend-api.example.com
  only:
    - main
  needs: ["container_scan"]
\`\`\`

## 4. Merge Requests និង Collaboration 🤝

* **Branching:** ប្រើ Feature Branches (ឧ. \`feature/update-frontend-text\`)។
* **Merge Requests:** បង្កើត MRs, បន្ថែម Reviewers, និង Approval Rules។

## 5. Security Dashboard និង Pages 📊

* **Security Dashboard:** មើល Vulnerabilities នៅ **Security & Compliance**។
* **GitLab Pages:** ទទួល URL នៅ **Settings > Pages**។

> **គន្លឹះ:** Project នេះរួមបញ្ចូល GitLab Features សម្រាប់ DevOps Workflow។
`,
  examples: [
    `
### ឧទាហរណ៍ ១: Merge Request Workflow
\`\`\`text
1. Create branch: 'feature/update-frontend-text'
2. Update 'frontend/index.html':
   - Old: <h1>Hello from Frontend!</h1>
   - New: <h1>Welcome to Fullstack App!</h1>
3. Commit: 'Update frontend heading text'
4. Create Merge Request:
   - Source: feature/update-frontend-text
   - Target: main
   - Title: 'FE: Update main heading text'
   - Assign reviewers
5. Pipeline runs on MR
6. Reviewers approve MR
7. Merge to 'main', trigger deployment
\`\`\`

### ឧទាហរណ៍ ២: Security Dashboard Output
\`\`\`text
Security Dashboard
--------------------------------------------------
| Vulnerability         | Severity | File             |
--------------------------------------------------
| Hardcoded secret      | Medium   | backend/app.py   |
| Outdated Flask version| Low      | requirements.txt  |
| Exposed port 5000     | High     | Dockerfile       |
--------------------------------------------------
\`\`\`

### ឧទាហរណ៍ ៣: .dockerignore File
\`\`\`
__pycache__/
*.pyc
*.log
.env
\`\`\`

### ឧទាហរណ៍ ៤: Pipeline Visualization
\`\`\`text
[build_backend_image] ----> [test_backend] ----> [sast_scan, container_scan] ----> [deploy_frontend_pages, deploy_backend_api]
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `my-fullstack-devops-app` Project នេះនឹងមាន Frontend និង Backend ប្រើប្រាស់បច្ចេកវិទ្យាអ្វីខ្លះ?',
      options: [
        'Frontend: React, Backend: Node.js',
        'Frontend: HTML/CSS/JS, Backend: Python Flask',
        'Frontend: Vue, Backend: Ruby on Rails',
        'Frontend: Angular, Backend: Java Spring'
      ],
      correct: 1,
      explanation: 'Project នេះនឹងមាន Frontend (HTML/CSS/JS) និង Backend (Python Flask) ។'
    },
    {
      question: 'តើ Frontend របស់ Project នេះនឹងត្រូវបានបង្ហោះនៅឯណា?',
      options: [
        'Heroku',
        'AWS S3',
        'GitLab Pages',
        'Netlify'
      ],
      correct: 2,
      explanation: 'Frontend នឹងត្រូវបានបង្ហោះនៅលើ GitLab Pages ។'
    },
    {
      question: 'តើ File មួយណាដែលទទួលខុសត្រូវក្នុងការកំណត់រចនាសម្ព័ន្ធ CI/CD Pipeline?',
      options: [
        '`package.json`',
        '`Dockerfile`',
        '`.gitlab-ci.yml`',
        '`README.md`'
      ],
      correct: 2,
      explanation: 'File `.gitlab-ci.yml` ត្រូវបានប្រើដើម្បីកំណត់រចនាសម្ព័ន្ធ CI/CD Pipeline ។'
    },
    {
      question: 'តើ Job `deploy_frontend_pages` នៅក្នុង `.gitlab-ci.yml` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បី Build Backend Image',
        'ដើម្បីដំណើរការ Backend Tests',
        'ដើម្បី Deploy Frontend ទៅ GitLab Pages',
        'ដើម្បីដំណើរការ Security Scans'
      ],
      correct: 2,
      explanation: 'Job `deploy_frontend_pages` ត្រូវបានប្រើដើម្បី Deploy Frontend ទៅ GitLab Pages ។'
    },
    {
      question: 'តើ `DOCKER_HOST: tcp://docker:2375` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង CI/CD?',
      options: [
        'ដើម្បីកំណត់ Hostname សម្រាប់ Docker Registry',
        'ដើម្បីអនុញ្ញាតឱ្យ Docker ដំណើរការនៅក្នុង Container មួយផ្សេងទៀត (Docker in Docker)',
        'ដើម្បីកំណត់ Port សម្រាប់ Docker Daemon',
        'ដើម្បីកំណត់ Docker Image'
      ],
      correct: 1,
      explanation: '`DOCKER_HOST: tcp://docker:2375` ត្រូវបានប្រើដើម្បីអនុញ្ញាតឱ្យ Docker ដំណើរការនៅក្នុង Container មួយផ្សេងទៀត (Docker in Docker) ។'
    },
    {
      question: 'តើ `BACKEND_IMAGE` Variable ត្រូវបានកំណត់តម្លៃអ្វី?',
      options: [
        '`my-app-backend:latest`',
        '`$CI_REGISTRY_IMAGE/backend:$CI_COMMIT_SHORT_SHA`',
        '`backend-image:v1.0`',
        '`gitlab.com/backend-app`'
      ],
      correct: 1,
      explanation: '`BACKEND_IMAGE` Variable ត្រូវបានកំណត់តម្លៃ `$CI_REGISTRY_IMAGE/backend:$CI_COMMIT_SHORT_SHA` ដើម្បីប្រើ Registry របស់ GitLab និង Commit SHA ជា Tag ។'
    },
    {
      question: 'តើ `docker login` Command ក្នុង CI/CD ប្រើ Credentials អ្វី?',
      options: [
        'Username និង Password របស់ User',
        '`$CI_REGISTRY_USER` និង `$CI_REGISTRY_PASSWORD`',
        'API Key',
        'Anonymous Access'
      ],
      correct: 1,
      explanation: '`docker login` Command ប្រើ `$CI_REGISTRY_USER` និង `$CI_REGISTRY_PASSWORD` ដែលជា Predefined Variables របស់ GitLab CI/CD ។'
    },
    {
      question: 'តើ `SAST_EXCLUDED_PATHS` Variable ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីរួមបញ្ចូល Files សម្រាប់ SAST',
        'ដើម្បីកំណត់ Path សម្រាប់ SAST Output',
        'ដើម្បីលុប Path មួយចំនួនពីការស្កេន SAST',
        'ដើម្បីកំណត់ចំនួន SAST Scans'
      ],
      correct: 2,
      explanation: '`SAST_EXCLUDED_PATHS` Variable ត្រូវបានប្រើដើម្បីលុប Path មួយចំនួនពីការស្កេន SAST (ឧទាហរណ៍៖ Frontend Code) ។'
    },
    {
      question: 'តើ `allow_failure: true` នៅក្នុង Security Scan Job មានន័យដូចម្តេច?',
      options: [
        'Job នឹងបរាជ័យជានិច្ច',
        'Pipeline នឹងបន្តដំណើរការ ទោះបីជា Job នេះបរាជ័យក៏ដោយ',
        'Job នឹងមិនដំណើរការទេ',
        'Job នឹងដំណើរការតែនៅពេលមានកំហុស'
      ],
      correct: 1,
      explanation: '`allow_failure: true` អនុញ្ញាតឱ្យ Pipeline បន្តដំណើរការ ទោះបីជា Job នេះបរាជ័យក៏ដោយ (មានប្រយោជន៍សម្រាប់ Scans ដែលមិនគួររារាំង Deployment) ។'
    },
    {
      question: 'តើ `Merge Requests` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីក្នុង Project នេះ?',
      options: [
        'ដើម្បី Deploy Code ដោយផ្ទាល់',
        'សម្រាប់ការ Code Review និង Collaboration',
        'ដើម្បីបង្កើត Issues',
        'ដើម្បីគ្រប់គ្រង Users'
      ],
      correct: 1,
      explanation: 'Merge Requests ត្រូវបានប្រើសម្រាប់ការ Code Review, Collaboration, និងការធានាគុណភាព Code ។'
    },
    {
      question: 'តើ `Security Dashboard` នៅក្នុង GitLab បង្ហាញអ្វីខ្លះ?',
      options: [
        'បញ្ជីនៃ Commits ទាំងអស់',
        'លទ្ធផល Security Scan និងភាពងាយរងគ្រោះ',
        'ស្ថានភាព CI/CD Pipeline',
        'បញ្ជីនៃ Users ទាំងអស់'
      ],
      correct: 1,
      explanation: 'Security Dashboard បង្ហាញលទ្ធផល Security Scan និងភាពងាយរងគ្រោះដែលបានរកឃើញនៅក្នុង Project ។'
    },
    {
      question: 'តើ `GitLab Pages URL` សម្រាប់ Frontend អាចរកបាននៅឯណា?',
      options: [
        '`CI/CD > Pipelines`',
        '`Repository > Files`',
        '`Settings > Pages`',
        '`Security & Compliance > Security Dashboard`'
      ],
      correct: 2,
      explanation: 'GitLab Pages URL អាចរកបាននៅ `Settings > Pages` នៅក្នុង Project របស់អ្នក។'
    },
    {
      question: 'តើ `backend/Dockerfile` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់រចនាសម្ព័ន្ធ Frontend App',
        'ដើម្បីកំណត់រចនាសម្ព័ន្ធ CI/CD Pipeline',
        'ដើម្បី Build Docker Image សម្រាប់ Backend Application',
        'ដើម្បីដំណើរការ Backend Tests'
      ],
      correct: 2,
      explanation: '`backend/Dockerfile` ត្រូវបានប្រើដើម្បី Build Docker Image សម្រាប់ Backend Application ។'
    },
    {
      question: 'តើ `only: - main` នៅក្នុង CI/CD Job មានន័យដូចម្តេច?',
      options: [
        'Job នឹងដំណើរការតែលើ `main` branch ប៉ុណ្ណោះ',
        'Job នឹងដំណើរការលើគ្រប់ branch ទាំងអស់លើកលែងតែ `main`',
        'Job នឹងដំណើរការដោយដៃតែប៉ុណ្ណោះ',
        'Job នឹងដំណើរការតែនៅពេលមាន Merge Request'
      ],
      correct: 0,
      explanation: '`only: - main` មានន័យថា Job នឹងដំណើរការតែនៅពេលមាន Changes ត្រូវបាន Push ទៅ `main` branch ប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `needs` Keyword នៅក្នុង CI/CD Job ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ Dependencies រវាង Jobs',
        'ដើម្បីកំណត់ Input Variables សម្រាប់ Job',
        'ដើម្បីកំណត់ Output Artifacts សម្រាប់ Job',
        'ដើម្បីកំណត់ Stage សម្រាប់ Job'
      ],
      correct: 0,
      explanation: '`needs` Keyword ត្រូវបានប្រើដើម្បីកំណត់ Dependencies រវាង Jobs ដែលធានាថា Job មួយនឹងដំណើរការបានលុះត្រាតែ Job មុនៗបានបញ្ចប់ដោយជោគជ័យ�।'
    },
    {
      question: 'តើ `python:3.9-slim-buster` Image ត្រូវបានប្រើសម្រាប់ Job ណា?',
      options: [
        '`build_backend_image`',
        '`test_backend`',
        '`deploy_frontend_pages`',
        '`container_scan`'
      ],
      correct: 1,
      explanation: '`python:3.9-slim-buster` Image ត្រូវបានប្រើសម្រាប់ Job `test_backend` ដើម្បីដំណើរការ Python Tests ។'
    },
    {
      question: 'តើ `Merge Requests` ជួយធានា `Code Quality` ដោយរបៀបណា?',
      options: [
        'ដោយការធ្វើស្វ័យប្រវត្តិកម្មរាល់ Changes',
        'ដោយការអនុញ្ញាតឱ្យមាន Code Review និងការពិនិត្យ Pipeline Status',
        'ដោយការលុបបំបាត់តម្រូវការសម្រាប់ Tests',
        'ដោយការ Deploy Code ដោយផ្ទាល់'
      ],
      correct: 1,
      explanation: 'Merge Requests ជួយធានា Code Quality ដោយអនុញ្ញាតឱ្យ Developers ផ្សេងទៀតធ្វើ Code Review និងពិនិត្យមើល Pipeline Status មុនពេល Code ត្រូវបាន Merge ។'
    },
    {
      question: 'តើ `GitLab Pages` គាំទ្រ `Dynamic Web Applications` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 1,
      explanation: 'ទេ GitLab Pages ត្រូវបានរចនាឡើងសម្រាប់ Static Websites មិនមែន Dynamic Web Applications ដែលទាមទារ Server-side Processing ទេ�।'
    },
    {
      question: 'តើ `Backend API` នៅក្នុង Project នេះត្រូវបានសរសេរដោយប្រើ Framework អ្វី?',
      options: [
        'Django',
        'Flask',
        'FastAPI',
        'Pyramid'
      ],
      correct: 1,
      explanation: 'Backend API ត្រូវបានសរសេរដោយប្រើ Python Flask ។'
    },
    {
      question: 'តើ `Container Scanning` ត្រូវបានអនុវត្តលើអ្វីនៅក្នុង Pipeline នេះ?',
      options: [
        'Source Code របស់ Frontend',
        'Source Code លនស់ Backend',
        'Docker Image របស់ Backend',
        'Files របស់ GitLab CI/CD'
      ],
      correct: 2,
      explanation: 'Container Scanning ត្រូវបានអនុវត្តលើ Docker Image លနស់ Backend ។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: បង្កើត Fullstack Project ជាមួយ GitLab

លំហាត់នេះនឹងណែនាំអ្នកបង្កើត Fullstack Application ដោយប្រើ GitLab Features។

**លក្ខខណ្ឌជាមុន:**
* គណនី GitLab.com ឥតគិតថ្លៃ។
* Docker និង Text Editor (ឧ. VS Code)។
* (ស្រេចចិត្ត) Kubernetes Cluster សម្រាប់ Backend Deployment។

1. **បង្កើត Project និង Files**:
   * **ចូលទៅ GitLab.com** ដោយប្រើគណនីអ្នក។
   * **បង្កើត Project**:
     * ចុច **New project > Create blank project**.
     * **Name:** \`my-fullstack-devops-app\`
     * **Visibility Level:** Private
     * **Initialize with a README:** ធីក
     * ចុច **Create project**.
   * **បង្កើត Files**:
     * ចុច **Web IDE**.
     * បង្កើត Folders: \`frontend/\`, \`backend/\`, \`k8s/\`.
     * បង្កើត Files ដោយចម្លង Content ពី Section 2:
       * \`frontend/index.html\`
       * \`frontend/style.css\`
       * \`frontend/script.js\`
       * \`backend/app.py\`
       * \`backend/requirements.txt\`
       * \`backend/Dockerfile\`
       * \`backend/.dockerignore\`
       * \`k8s/deployment.yaml\`
     * **Commit message:** \`Initial project setup\`
     * **Target branch:** \`main\`
     * ចុច **Commit**.

2. **កំណត់រចនាសម្ព័ន្ធ CI/CD**:
   * **បង្កើត \`.gitlab-ci.yml\`**:
     * នៅ Web IDE, បង្កើត File \`.gitlab-ci.yml\`.
     * ចម្លង Content ពី Section 3.
     * **Commit message:** \`Add CI/CD pipeline\`
     * **Target branch:** \`main\`
     * ចុច **Commit**.
   * **កំណត់ CI/CD Variables**:
     * ចូលទៅ **Settings > CI/CD > Variables**.
     * បន្ថែម:
       * \`CI_REGISTRY_USER\`: \`your-username\`
       * \`CI_REGISTRY_PASSWORD\`: Personal Access Token (Scope: \`api\`)
       * \`CI_REGISTRY\`: \`registry.gitlab.com\`

3. **Trigger Pipeline**:
   * Commit Change នៅ \`frontend/index.html\` (ឧ. เปลี่ยน \`<h1>Welcome to Fullstack App!</h1>\` ទៅ \`<h1>My Fullstack App!</h1>\`).
   * ចូលទៅ **CI/CD > Pipelines** ដើម្បីពិនិត្យ Pipeline Status.
   * **ផ្ទៀងផ្ទាត់**:
     * **Build Stage:** Docker Image \`registry.gitlab.com/your-username/my-fullstack-devops-app/backend:<commit_sha>\` បង្កើត និង Push.
     * **Test Stage:** Flask Version បង្ហាញ, Tests Pass.
     * **Security Scan Stage:** SAST និង Container Scan បញ្ចប់ (Vulnerabilities អាចបង្ហាញ).
     * **Deploy Stage:** Frontend Deployed ទៅ GitLab Pages.

4. **Merge Request Workflow**:
   * **បង្កើត Feature Branch**:
     * នៅ Web IDE, បង្កើត Branch \`feature/update-frontend-text\`.
     * កែ \`frontend/index.html\` (ឧ. \`<h1>My Fullstack App!</h1>\`).
     * **Commit message:** \`Update frontend heading\`
     * **Target branch:** \`feature/update-frontend-text\`.
     * ចុច **Commit**.
   * **បង្កើត Merge Request**:
     * ចូល **Merge Requests > New merge request**.
     * **Source:** \`feature/update-frontend-text\`
     * **Target:** \`main\`
     * **Title:** \`FE: Update heading text\`
     * **Description:** \`Updated frontend heading for branding\`
     * **Assign reviewers:** (ឧ. Team Lead)
     * ចុច **Create merge request**.
   * **ផ្ទៀងផ្ទាត់**:
     * Pipeline ដំណើរការលើ MR.
     * Merge MR ទៅ \`main\` បន្ទាប់ពី Approval.

5. **ពិនិត្យ GitLab Pages និង Security Dashboard**:
   * **GitLab Pages**:
     * ចូល **Settings > Pages**.
     * ចុច URL (ឧ. \`https://your-username.gitlab.io/my-fullstack-devops-app\`) ដើម្បីផ្ទៀងផ្ទាត់ Frontend.
   * **Security Dashboard**:
     * ចូល **Security & Compliance > Security Dashboard**.
     * ពិនិត្យ Vulnerabilities (ឧ. Hardcoded secrets).
   * **Test Backend Locally (Optional)**:
     * Pull Image:
       \`\`\`bash
       docker pull registry.gitlab.com/your-username/my-fullstack-devops-app/backend:<commit_sha>
       docker run -p 5000:5000 registry.gitlab.com/your-username/my-fullstack-devops-app/backend:<commit_sha>
       \`\`\`
     * ចូល \`http://localhost:5000/api/hello\`, ផ្ទៀងផ្ទាត់ Response: \`{"message": "Hello from Backend API!"}\`.

> **គន្លឹះ:** ពិនិត្យ Pipeline Logs, Commit History, និង Pages URL ដើម្បីផ្ទៀងផ្ទាត់ Workflow។ Kubernetes Deployment ទាមទារ Cluster។
`,
    solution: `
# ដំណោះស្រាយ: Fullstack Project ជាមួយ GitLab

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## ជំហានទី ១: Project និង Files
* **Project:** \`my-fullstack-devops-app\` (Private, មាន README).
* **Structure:**
  \`\`\`
  my-fullstack-devops-app/
  ├── frontend/
  │   ├── index.html
  │   ├── style.css
  │   └── script.js
  ├── backend/
  │   ├── app.py
  │   ├── requirements.txt
  │   ├── Dockerfile
  │   └── .dockerignore
  ├── k8s/
  │   └── deployment.yaml
  ├── .gitlab-ci.yml
  └── README.md
  \`\`\`
* **Sample File (\`frontend/index.html\`):**
  \`\`\`html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Frontend App</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Welcome to Fullstack App!</h1>
    <p>Served by GitLab Pages.</p>
    <button id="fetch-backend">Fetch Backend Data</button>
    <p id="backend-data"></p>
    <script src="script.js"></script>
  </body>
  </html>
  \`\`\`

## ជំហានទី ២: CI/CD Configuration
* **\`.gitlab-ci.yml\`:**
  \`\`\`yaml
  stages:
    - build
    - test
    - security_scan
    - deploy
  variables:
    DOCKER_HOST: tcp://docker:2375
    DOCKER_TLS_CERTDIR: ""
    BACKEND_IMAGE: $CI_REGISTRY_IMAGE/backend:$CI_COMMIT_SHORT_SHA
  build_backend_image:
    stage: build
    image: docker:latest
    services:
      - docker:dind
    script:
      - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" "$CI_REGISTRY"
      - docker build -t "$BACKEND_IMAGE" ./backend
      - docker push "$BACKEND_IMAGE"
    only:
      - main
      - merge_requests
  test_backend:
    stage: test
    image: python:3.9-slim-buster
    script:
      - pip install -r ./backend/requirements.txt
      - python -m flask --version
      - echo "Backend tests passed!"
    only:
      - main
      - merge_requests
    needs: ["build_backend_image"]
  sast_scan:
    stage: security_scan
    image: docker:latest
    variables:
      SAST_EXCLUDED_PATHS: "frontend/, backend/requirements.txt"
    allow_failure: true
    script:
      - echo "Running SAST scan on backend code..."
      - echo "SAST scan completed."
    only:
      - main
      - merge_requests
    needs: ["test_backend"]
  container_scan:
    stage: security_scan
    image: docker:latest
    services:
      - docker:dind
    variables:
      DOCKER_IMAGE: "$BACKEND_IMAGE"
    allow_failure: true
    script:
      - echo "Running Container Scan on $BACKEND_IMAGE..."
      - echo "Container scan completed."
    only:
      - main
      - merge_requests
    needs: ["build_backend_image"]
  deploy_frontend_pages:
    stage: deploy
    script:
      - mkdir .public
      - cp -r frontend/* .public/
      - mv .public public
      - echo "Frontend deployed to public directory."
    artifacts:
      paths:
        - public
    only:
      - main
    needs: ["sast_scan"]
  deploy_backend_api:
    stage: deploy
    image: bitnami/kubectl:latest
    script:
      - kubectl apply -f k8s/deployment.yaml
      - kubectl set image deployment/backend-api backend-api=$BACKEND_IMAGE --namespace=production
      - echo "Backend API deployed."
    environment:
      name: production
      url: https://backend-api.example.com
    only:
      - main
    needs: ["container_scan"]
  \`\`\`
* **CI/CD Variables:**
  * \`CI_REGISTRY_USER\`: \`your-username\`
  * \`CI_REGISTRY_PASSWORD\`: \`<personal_access_token>\`
  * \`CI_REGISTRY\`: \`registry.gitlab.com\`

## ជំហានទី ៣: Pipeline
* **Trigger:** Commit កែ \`frontend/index.html\` (ឧ. \`<h1>My Fullstack App!</h1>\`).
* **Output:**
  \`\`\`text
  [build_backend_image] Built and pushed: registry.gitlab.com/your-username/my-fullstack-devops-app/backend:<commit_sha>
  [test_backend] Flask 2.3.2, tests passed!
  [sast_scan] Completed, 2 vulnerabilities found
  [container_scan] Completed, 1 issue detected
  [deploy_frontend_pages] Deployed to GitLab Pages
  [deploy_backend_api] Deployed to Kubernetes
  \`\`\`

## ជំហានទី ៤: Merge Request
* **Branch:** \`feature/update-frontend-text\`
* **Change:**
  \`\`\`html
  - <h1>Welcome to Fullstack App!</h1>
  + <h1>My Fullstack App!</h1>
  \`\`\`
* **MR Details:**
  * Title: \`FE: Update heading text\`
  * Description: \`Updated frontend heading for branding\`
  * Pipeline: Passed
  * Status: Merged to \`main\`

## ជំហានទី ៥: GitLab Pages និង Security Dashboard
* **GitLab Pages:** URL \`https://your-username.gitlab.io/my-fullstack-devops-app\` បង្ហាញ \`<h1>My Fullstack App!</h1>\`.
* **Security Dashboard:** Vulnerabilities (ឧ. Hardcoded secret, Exposed port 5000).
* **Local Backend Test (Optional):**
  \`\`\`bash
  docker pull registry.gitlab.com/your-username/my-fullstack-devops-app/backend:<commit_sha>
  docker run -p 5000:5000 registry.gitlab.com/your-username/my-fullstack-devops-app/backend:<commit_sha>
  \`\`\`
  * Response at \`http://localhost:5000/api/hello\`: \`{"message": "Hello from Backend API!"}\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project:** បង្កើតជាមួយ Files និង Structure.
* **Pipeline:** Builds Image, Runs Tests, Scans, Deploys Frontend.
* **MR:** Code Review និង Merge ជោគជ័យ.
* **Pages:** Frontend Accessible.
* **Security:** Vulnerabilities Displayed.
* **(Optional) Backend:** Deployed or Locally Tested.

លំហាត់នេះបានបង្ហាញការគ្រប់គ្រង Fullstack Project ជាមួយ GitLab Features។
`
  }
};

export default GitLabLesson6_1Content;