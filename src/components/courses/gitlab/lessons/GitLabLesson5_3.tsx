import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson5_3Content: LessonContent = {
  title: 'ការប្រើប្រាស់ GitLab Container Registry សម្រាប់ Docker Images',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Container Registry និងសារៈសំខាន់របស់វា',
    'ស្គាល់មុខងារនៃ GitLab Container Registry',
    'រៀនរបៀប Push និង Pull Docker Images ទៅ/ពី GitLab Container Registry',
    'ស្វែងយល់ពីការបញ្ចូល Container Registry ជាមួយ GitLab CI/CD',
    'រៀនគ្រប់គ្រង Images និង Tags នៅក្នុង GitLab Container Registry'
  ],
  content: `
# ការប្រើប្រាស់ GitLab Container Registry 📦

---

**Container Registry** គឺជាកន្លែងផ្ទុកកណ្តាលសម្រាប់រក្សាទុកនិងចែករំលែក **Docker Images**។ **GitLab Container Registry** ត្រូវបានរួមបញ្ចូលជាមួយ GitLab ដែលផ្តល់ភាពងាយស្រួលក្នុងការគ្រប់គ្រង Images នៅក្នុង **DevOps Workflow**។

---

## 1. អ្វីទៅជា Container Registry? 💡

* **និយមន័យ:** Repository សម្រាប់ផ្ទុក **Docker Images** ឬ Container Images ផ្សេងទៀត។
* **គោលបំណង:**
  * **ផ្ទុក Images:** រក្សាទុក Images ដែលបាន Build សម្រាប់ការប្រើប្រាស់នៅពេលក្រោយ។
  * **ចែករំលែក Images:** អនុញ្ញាតឱ្យក្រុមឬ Environments ផ្សេងទៀតចូលប្រើ Images។
  * **គ្រប់គ្រង Versions:** ប្រើ **Tags** ដើម្បីតាមដាន Versions ផ្សេងៗនៃ Images។
  * **សុវត្ថិភាព:** គាំទ្រ **Container Scanning** ដើម្បីរកភាពងាយរងគ្រោះ។

---

## 2. GitLab Container Registry 🤝

* **រួមបញ្ចូលជាមួយ GitLab:** រាល់ **Project** ទទួលបាន Registry ផ្ទាល់ខ្លួនដែលភ្ជាប់ជាមួយ **Groups** និង **Projects**។
* **ការផ្ទៀងផ្ទាត់:** ប្រើ **GitLab Credentials** ឬ **Personal Access Token (PAT)** សម្រាប់ការចូលប្រើ។
* **ឯកជនតាមលំនាំដើម:** Images អាចចូលប្រើបានតែដោយសមាជិកដែលមាន **Permissions** គ្រប់គ្រាន់។
* **CI/CD Integration:** ងាយស្រួលបញ្ចូលជាមួយ **GitLab CI/CD** ដើម្បី Build, Push, និង Pull Images ដោយស្វ័យប្រវត្តិ។

---

## 3. ការប្រើប្រាស់ Docker Commands ជាមួយ GitLab Container Registry ⬆️⬇️

* **Login ទៅ Registry:**
  \`\`\`bash
  docker login registry.gitlab.com
  # Username: <your_gitlab_username>
  # Password: <your_gitlab_password> (ឬ PAT)
  \`\`\`
* **Build Docker Image:**
  \`\`\`bash
  docker build -t registry.gitlab.com/<namespace>/<project-name>/<image-name>:<tag> .
  \`\`\`
* **Push Image:**
  \`\`\`bash
  docker push registry.gitlab.com/<namespace>/<project-name>/<image-name>:<tag>
  \`\`\`
* **Pull Image:**
  \`\`\`bash
  docker pull registry.gitlab.com/<namespace>/<project-name>/<image-name>:<tag>
  \`\`\`

---

## 4. ការបញ្ចូល Container Registry ជាមួយ GitLab CI/CD 🚀

* **Predefined Variables:**
  * \`$CI_REGISTRY\`: URL នៃ Registry (ឧ. \`registry.gitlab.com\`)។
  * \`$CI_REGISTRY_IMAGE\`: Full path ទៅ Image (ឧ. \`registry.gitlab.com/<namespace>/<project>\`)។
  * \`$CI_REGISTRY_USER\`: Username សម្រាប់ Login (ឧ. \`gitlab-ci-token\`)។
  * \`$CI_REGISTRY_PASSWORD\`: Password/Token (ឧ. \`$CI_JOB_TOKEN\`)។
  * \`$CI_COMMIT_SHORT_SHA\`: Short SHA នៃ Commit។

---

## 5. ការគ្រប់គ្រង Images និង Tags 🗂️

* **Tags:** កំណត់ Versions នៃ Image (ឧ. \`latest\`, \`v1.0.0\`, \`$CI_COMMIT_SHORT_SHA\`)។
* **UI Management:** ចូលទៅ **Packages and registries > Container Registry** ដើម្បីមើល/លុប Images។
* **Cleanup Policies:** កំណត់នៅ **Project Settings > Packages and registries** ដើម្បីលុប Images ចាស់ៗ។

> **គន្លឹះ:** ប្រើ GitLab Container Registry ដើម្បីសម្រួលការគ្រប់គ្រង Docker Images និងរួមបញ្ចូលជាមួយ CI/CD Workflow។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ការដាក់ឈ្មោះ Image និង Tags
\`\`\`text
registry.gitlab.com/my-username/my-flask-app/flask-app:latest
registry.gitlab.com/my-username/my-flask-app/flask-app:v1.0.0
registry.gitlab.com/my-team/my-flask-app/api-service:latest
\`\`\`

# ឧទាហរណ៍ ២: Multi-Stage Dockerfile
\`\`\`dockerfile
FROM python:3.9 AS builder
WORKDIR /app
COPY requirements.txt ./
RUN pip install --user -r requirements.txt

FROM python:3.9-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY app.py ./
ENV PATH=/root/.local/bin:$PATH
CMD ["python", "app.py"]
\`\`\`

# ឧទាហរណ៍ ៣: Container Registry UI
\`\`\`text
[Container Registry]
--------------------------------------------------------------------------------------
| Image Name                                | Tags    | Size  | Digest       | Last Updated |
--------------------------------------------------------------------------------------
| registry.gitlab.com/my-username/my-flask-app | latest  | 120MB | sha256:abc12 | 2025-07-23   |
|                                          | v1.0.0  | 120MB | sha256:abc12 | 2025-07-22   |
| registry.gitlab.com/my-team/api-service   | latest  | 150MB | sha256:ghi56 | 2025-07-21   |
--------------------------------------------------------------------------------------
\`\`\`

# ឧទាហរណ៍ ៤: Cleanup Policy
\`\`\`text
Cleanup Policy:
- Keep Most Recent: 5 tags
- Keep Tags Matching: ^v\d+\.\d+\.\d+$
- Remove Tags Older Than: 14 days
- Exceptions: latest, stable
\`\`\`

# ឧទាហរណ៍ ៥: .dockerignore
\`\`\`text
__pycache__/
*.pyc
*.log
.env
.git
.gitlab-ci.yml
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Container Registry គឺជាអ្វី?',
      options: [
        'កន្លែងផ្ទុក Source Code',
        'កន្លែងផ្ទុក Docker Images',
        'ឧបករណ៍សម្រាប់ Build Applications',
        'ឧបករណ៍សម្រាប់ Deploy Applications'
      ],
      correct: 1,
      explanation: 'Container Registry គឺជាកន្លែងផ្ទុកកណ្តាលសម្រាប់ Docker Images។'
    },
    {
      question: 'តើ GitLab Container Registry ត្រូវបានរួមបញ្ចូលជាមួយអ្វី?',
      options: [
        'Docker Hub តែប៉ុណ្ណោះ',
        'GitLab Projects និង Groups',
        'Cloud Services ខាងក្រៅ',
        'Kubernetes តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'GitLab Container Registry ត្រូវបានរួមបញ្ចូលជាមួយ GitLab Projects និង Groups។'
    },
    {
      question: 'តើ Images នៅក្នុង GitLab Container Registry មានលក្ខណៈឯកជនតាមលំនាំដើមដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Images មានលក្ខណៈឯកជនតាមលំនាំដើម។'
    },
    {
      question: 'តើ Personal Access Token (PAT) ត្រូវបានណែនាំសម្រាប់អ្វី?',
      options: [
        'ការប្រើប្រាស់ស្វ័យប្រវត្តិកម្មក្នុង CI/CD',
        'ការប្រើប្រាស់ដោយដៃតែប៉ុណ្ណោះ',
        'ការបង្កើត Source Code',
        'ការគ្រប់គ្រង Users'
      ],
      correct: 0,
      explanation: 'PAT ត្រូវបានណែនាំសម្រាប់ការប្រើប្រាស់ស្វ័យប្រវត្តិកម្មក្នុង CI/CD។'
    },
    {
      question: 'តើ Command `docker login registry.gitlab.com` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Docker Image',
        'ផ្ទៀងផ្ទាត់ទៅ GitLab Container Registry',
        'Push Image ទៅ Registry',
        'Pull Image ពី Registry'
      ],
      correct: 1,
      explanation: 'Command `docker login registry.gitlab.com` ប្រើសម្រាប់ផ្ទៀងផ្ទាត់ទៅ GitLab Container Registry�।'
    },
    {
      question: 'តើ Image Name Format សម្រាប់ GitLab Container Registry គឺជាអ្វី?',
      options: [
        '`<image-name>:<tag>`',
        '`registry.gitlab.com/<namespace>/<project-name>/<image-name>:<tag>`',
        '`<namespace>/<image-name>:<tag>`',
        '`<project-name>/<image-name>:<tag>`'
      ],
      correct: 1,
      explanation: 'Image Name Format គឺ `registry.gitlab.com/<namespace>/<project-name>/<image-name>:<tag>`។'
    },
    {
      question: 'តើ Command `docker push` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Image',
        'Upload Image ទៅ Registry',
        'Download Image ពី Registry',
        'Login ទៅ Registry'
      ],
      correct: 1,
      explanation: '`docker push` ប្រើសម្រាប់ Upload Image ទៅ Registry។'
    },
    {
      question: 'តើ Command `docker pull` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Image',
        'Upload Image ទៅ Registry',
        'Download Image ពី Registry',
        'Login ទៅ Registry'
      ],
      correct: 2,
      explanation: '`docker pull` ប្រើសម្រាប់ Download Image ពី Registry។'
    },
    {
      question: 'តើ `$CI_REGISTRY_IMAGE` Predefined Variable តំណាងឱ្យអ្វី?',
      options: [
        'URL របស់ Registry',
        'Username សម្រាប់ Login',
        'Full path ទៅ Image សម្រាប់ Project',
        'Commit SHA'
      ],
      correct: 2,
      explanation: '`$CI_REGISTRY_IMAGE` តំណាងឱ្យ Full path ទៅ Image សម្រាប់ Project។'
    },
    {
      question: 'តើ `$CI_REGISTRY_USER` Predefined Variable មានតម្លៃអ្វី?',
      options: [
        'Username របស់អ្នក',
        '`gitlab-ci-token`',
        'Password របស់អ្នក',
        'Project name'
      ],
      correct: 1,
      explanation: '`$CI_REGISTRY_USER` មានតម្លៃ `gitlab-ci-token`។'
    },
    {
      question: 'តើ `$CI_REGISTRY_PASSWORD` Predefined Variable មានតម្លៃអ្វី?',
      options: [
        'Password របស់អ្នក',
        '`$CI_JOB_TOKEN`',
        'Username របស់អ្នក',
        'Project name'
      ],
      correct: 1,
      explanation: '`$CI_REGISTRY_PASSWORD` មានតម្លៃ `$CI_JOB_TOKEN`។'
    },
    {
      question: 'តើ Tags ប្រើសម្រាប់អ្វីនៅក្នុង Registry?',
      options: [
        'កំណត់ឈ្មោះ Registry',
        'កំណត់ Versions នៃ Image',
        'កំណត់ទំហំ Image',
        'កំណត់ Permissions'
      ],
      correct: 1,
      explanation: 'Tags ប្រើសម្រាប់កំណត់ Versions នៃ Image។'
    },
    {
      question: 'តើ Container Registry គាំទ្រការគ្រប់គ្រង Versions នៃ Images ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Container Registry គាំទ្រការគ្រប់គ្រង Versions នៃ Images ដោយប្រើ Tags។'
    },
    {
      question: 'តើ Cleanup Policies ប្រើសម្រាប់អ្វី?',
      options: [
        'លុប Projects ចាស់ៗ',
        'លុប Images ចាស់ៗដោយស្វ័យប្រវត្តិ',
        'លុប Commits ចាស់ៗ',
        'លុប Pipelines'
      ],
      correct: 1,
      explanation: 'Cleanup Policies ប្រើសម្រាប់លុប Images ចាស់ៗដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ Container Scanning អនុវត្តលើ Images នៅក្នុង Registry ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Container Scanning វិភាគ Docker Images ដើម្បីរកភាពងាយរងគ្រោះ។'
    },
    {
      question: 'តើ `$CI_COMMIT_SHORT_SHA` ប្រើជា Image Tag ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ `$CI_COMMIT_SHORT_SHA` ល្អសម្រាប់ Image Tags ដើម្បីផ្តល់ភាពប្លែកសម្រាប់ Build។'
    },
    {
      question: 'តើ `Packages and registries > Container Registry` នៅក្នុង GitLab UI ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Source Code',
        'មើល និងគ្រប់គ្រង Images និង Tags',
        'បង្កើត Pipelines',
        'គ្រប់គ្រង Users'
      ],
      correct: 1,
      explanation: '`Packages and registries > Container Registry` ប្រើសម្រាប់មើល និងគ្រប់គ្រង Images និង Tags។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: ការប្រើប្រាស់ GitLab Container Registry

លំហាត់នេះនឹងណែនាំអ្នកឱ្យបង្កើត Python Flask App, Build Docker Image, Push ទៅ GitLab Container Registry, និងបញ្ចូលជាមួយ CI/CD។

1. **រៀបចំ Project**:
   * ចូលទៅ **GitLab.com** ដោយប្រើគណនីឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
   * បង្កើត Project **'flask-container-lab'** ជាមួយ **Visibility Level** ជា **Private** និង **Initialize with a README**។
   * ចូលទៅ **Packages and registries > Container Registry** និងចម្លង Registry URL (ឧ. \`registry.gitlab.com/your-username/flask-container-lab\`)។

2. **បង្កើត Files សម្រាប់ Flask App**:
   * បង្កើត File **'Dockerfile'**:
     \`\`\`dockerfile
     FROM python:3.9-slim
     WORKDIR /app
     COPY requirements.txt ./
     RUN pip install --no-cache-dir -r requirements.txt
     COPY app.py ./
     CMD ["python", "app.py"]
     \`\`\`
   * បង្កើត File **'requirements.txt'**:
     \`\`\`text
     flask==2.0.3
     \`\`\`
   * បង្កើត File **'app.py'**:
     \`\`\`python
     from flask import Flask
     app = Flask(__name__)

     @app.route('/')
     def home():
         return 'Hello from Flask!'

     if __name__ == '__main__':
         app.run(host='0.0.0.0', port=5000)
     \`\`\`
   * បង្កើត File **'.dockerignore'**:
     \`\`\`text
     __pycache__/
     *.pyc
     *.log
     .env
     .git
     .gitlab-ci.yml
     \`\`\`
   * Commit Files ទៅ Repository។

3. **Build និង Push Image**:
   * បើក Terminal និងធ្វើការ Login:
     \`\`\`bash
     docker login registry.gitlab.com
     # Username: <your_gitlab_username>
     # Password: <your_gitlab_password> ឬ PAT
     \`\`\`
   * Build Image:
     \`\`\`bash
     docker build -t registry.gitlab.com/your-username/flask-container-lab/flask-app:latest .
     \`\`\`
   * Test Image Locally:
     \`\`\`bash
     docker run -p 5000:5000 registry.gitlab.com/your-username/flask-container-lab/flask-app:latest
     \`\`\`
     * ចូលទៅ \`http://localhost:5000\` នៅ Browser និងផ្ទៀងផ្ទាត់ Response "Hello from Flask!"។
   * Push Image:
     \`\`\`bash
     docker push registry.gitlab.com/your-username/flask-container-lab/flask-app:latest
     \`\`\`
   * ចូលទៅ **Packages and registries > Container Registry** និងផ្ទៀងផ្ទាត់ Image \`flask-app:latest\`។

4. **បញ្ចូលជាមួយ CI/CD**:
   * បង្កើត File **'.gitlab-ci.yml'**:
     \`\`\`yaml
     stages:
       - build
       - deploy

     variables:
       DOCKER_HOST: tcp://docker:2375
       DOCKER_TLS_CERTDIR: ""

     build_and_push:
       stage: build
       image: docker:latest
       services:
         - docker:dind
       script:
         - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" "$CI_REGISTRY"
         - docker build -t "$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA" .
         - docker push "$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA"
       only:
         - main

     deploy_to_staging:
       stage: deploy
       image: bitnami/kubectl:latest
       script:
         - echo "Deploying image $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA..."
         - kubectl apply -f k8s/deployment.yaml
         - kubectl set image deployment/flask-app flask-app=$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA --namespace=staging
       needs: ["build_and_push"]
       only:
         - main
     \`\`\`
   * បង្កើត Folder **'k8s'** និង File **'k8s/deployment.yaml'**:
     \`\`\`yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: flask-app
       namespace: staging
     spec:
       replicas: 2
       selector:
         matchLabels:
           app: flask-app
       template:
         metadata:
           labels:
             app: flask-app
         spec:
           containers:
           - name: flask-app
             image: registry.gitlab.com/your-username/flask-container-lab/flask-app:latest
             ports:
             - containerPort: 5000
     \`\`\`
   * Commit Files ដើម្បី Trigger CI/CD Pipeline។
   * ចូលទៅ **CI/CD > Pipelines** និងផ្ទៀងផ្ទាត់ថា Pipeline ដំណើរការជោគជ័យ។
   * ចូលទៅ **Packages and registries > Container Registry** និងផ្ទៀងផ្ទាត់ Image ថ្មីជាមួយ Tag \`$CI_COMMIT_SHORT_SHA\`

5. **កំណត់ Cleanup Policy**:
   * ចូលទៅ **Project Settings > Packages and registries**។
   * បង្កើត Cleanup Policy:
     \`\`\`text
     - Keep Most Recent: 5 tags
     - Keep Tags Matching: ^v\d+\.\d+\.\d+$
     - Remove Tags Older Than: 14 days
     - Exceptions: latest, stable
     \`\`\`
   * ផ្ទៀងផ្ទាត់នៅ **Container Registry** ថា Tags ចាស់ៗត្រូវបានលុបបន្ទាប់ពី ១៤ ថ្ងៃ។

> **គន្លឹះ:** បន្ទាប់ពី Commit Files, ពិនិត្យ Pipeline Status នៅ **CI/CD > Pipelines** និង Images នៅ **Container Registry**។
`,
    solution: `
# ដំណោះស្រាយ: ការប្រើប្រាស់ GitLab Container Registry

បន្ទាប់ពីអនុវត្តជំហាននីមួយៗក្នុង Lab Task នេះជាលទ្ធផលដែលអ្នកគួរទទួលបាន:

## ជំហានទី ១: រៀបចំ Project
* បានបង្កើត Project **flask-container-lab** ជាមួយ **Visibility Level** ជា **Private** និង **README**។
* Registry URL: \`registry.gitlab.com/your-username/flask-container-lab\`

## ជំហានទី ២: បង្កើត Files សម្រាប់ Flask App
* **File 'Dockerfile':**
  \`\`\`dockerfile
  FROM python:3.9-slim
  WORKDIR /app
  COPY requirements.txt ./
  RUN pip install --no-cache-dir -r requirements.txt
  COPY app.py ./
  CMD ["python", "app.py"]
  \`\`\`
* **File 'requirements.txt':**
  \`\`\`text
  flask==2.0.3
  \`\`\`
* **File 'app.py':**
  \`\`\`python
  from flask import Flask
  app = Flask(__name__)

  @app.route('/')
  def home():
      return 'Hello from Flask!'

  if __name__ == '__main__':
      app.run(host='0.0.0.0', port=5000)
  \`\`\`
* **File '.dockerignore':**
  \`\`\`text
  __pycache__/
  *.pyc
  *.log
  .env
  .git
  .gitlab-ci.yml
  \`\`\`

## ជំហានទី ៣: Build និង Push Image
* **Commands:**
  \`\`\`bash
  docker login registry.gitlab.com
  docker build -t registry.gitlab.com/your-username/flask-container-lab/flask-app:latest .
  docker run -p 5000:5000 registry.gitlab.com/your-username/flask-container-lab/flask-app:latest
  docker push registry.gitlab.com/your-username/flask-container-lab/flask-app:latest
  \`\`\`
* **Sample Output (docker build):**
  \`\`\`text
  Sending build context to Docker daemon  4.096kB
  Step 1/5 : FROM python:3.9-slim
   ---> abc123def456
  Step 2/5 : WORKDIR /app
   ---> Running in 789ghi012jkl
  ...
  Successfully built xyz789abc123
  Successfully tagged registry.gitlab.com/your-username/flask-container-lab/flask-app:latest
  \`\`\`
* **Sample Output (docker run):**
  \`\`\`text
   * Serving Flask app 'app' (lazy loading)
   * Environment: production
   * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
  \`\`\`
* **Verification:** Browser បង្ហាញ "Hello from Flask!" នៅ \`http://localhost:5000\`។ Image \`flask-app:latest\` បង្ហាញនៅ **Container Registry**។

## ជំហានទី ៤: បញ្ចូលជាមួយ CI/CD
* **File '.gitlab-ci.yml':**
  \`\`\`yaml
  stages:
    - build
    - deploy

  variables:
    DOCKER_HOST: tcp://docker:2375
    DOCKER_TLS_CERTDIR: ""

  build_and_push:
    stage: build
    image: docker:latest
    services:
      - docker:dind
    script:
      - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" "$CI_REGISTRY"
      - docker build -t "$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA" .
      - docker push "$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA"
    only:
      - main

  deploy_to_staging:
    stage: deploy
    image: bitnami/kubectl:latest
    script:
      - echo "Deploying image $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA..."
      - kubectl apply -f k8s/deployment.yaml
      - kubectl set image deployment/flask-app flask-app=$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA --namespace=staging
    needs: ["build_and_push"]
    only:
      - main
  \`\`\`
* **File 'k8s/deployment.yaml':**
  \`\`\`yaml
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: flask-app
    namespace: staging
  spec:
    replicas: 2
    selector:
      matchLabels:
        app: flask-app
    template:
      metadata:
        labels:
          app: flask-app
      spec:
        containers:
        - name: flask-app
          image: registry.gitlab.com/your-username/flask-container-lab/flask-app:latest
          ports:
          - containerPort: 5000
  \`\`\`
* **Sample Pipeline Output:**
  \`\`\`text
  Running with gitlab-runner 15.0.0
    on runner-123456
  ...
  [build_and_push] Successfully built and pushed image: registry.gitlab.com/your-username/flask-container-lab/flask-app:abc12345
  [deploy_to_staging] deployment.apps/flask-app configured
  \`\`\`
* **Verification:** Pipeline ដំណើរការជោគជ័យ។ Image \`flask-app:abc12345\` បង្ហាញនៅ **Container Registry**។

## ជំហានទី ៥: កំណត់ Cleanup Policy
* **Cleanup Policy:**
  \`\`\`text
  - Keep Most Recent: 5 tags
  - Keep Tags Matching: ^v\d+\.\d+\.\d+$
  - Remove Tags Older Than: 14 days
  - Exceptions: latest, stable
  \`\`\`
* **Verification:** Tags ចាស់ជាង ១៤ ថ្ងៃ (លើកលែង \`latest\`, \`stable\`) ត្រូវបានលុប។

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Project Name:** flask-container-lab
* **Registry URL:** registry.gitlab.com/your-username/flask-container-lab
* **Image:** flask-app:latest, flask-app:<CI_COMMIT_SHORT_SHA>
* **Pipeline Status:** Success
* **Container Registry:** បង្ហាញ Images និង Tags
* **Cleanup Policy:** រក្សា ៥ Tags ចុងក្រោយ, Release Tags, និង Exceptions

លំហាត់នេះបានជួយអ្នកឱ្យយល់ពីការប្រើ GitLab Container Registry និង CI/CD Integration សម្រាប់ Docker Images។
`
  }
};

export default GitLabLesson5_3Content;
