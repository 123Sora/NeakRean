import type { LessonContent } from '../../../../types/LessonTypes';

const GitLabLesson5_6Content: LessonContent = {
  title: 'GitOps ជាមួយ GitLab (កម្រិតខ្ពស់)',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ GitOps',
    'ស្គាល់ពីគោលការណ៍សំខាន់ៗនៃ GitOps',
    'ដឹងពីអត្ថប្រយោជន៍នៃការអនុវត្ត GitOps',
    'របៀបដែល GitLab គាំទ្រ GitOps Workflow (MRs, CI/CD, Environments)',
    'យល់ដឹងពីឧបករណ៍ GitOps ទូទៅ (Argo CD, Flux CD) និងរបៀបដែលពួកវាដំណើរការជាមួយ GitLab'
  ],
  content: `
# GitOps ជាមួយ GitLab (កម្រិតខ្ពស់) 🚀 declarative

**GitOps** គឺជាវិធីសាស្រ្តប្រតិបត្តិការដែលប្រើ Git ជា "ប្រភពនៃការពិត" តែមួយគត់សម្រាប់ហេដ្ឋារចនាសម្ព័ន្ធ និងកម្មវិធីដែលបាន Deploy ។ វាពង្រីកគោលការណ៍ DevOps ទៅកាន់ការគ្រប់គ្រងហេដ្ឋារចនាសម្ព័ន្ធ។

## 1. អ្វីទៅជា GitOps? 💡

* **និយមន័យ:** GitOps គឺជាវិធីសាស្រ្តសម្រាប់ Continuous Delivery ដោយប្រើ Git Repository ជាប្រភពនៃការពិតសម្រាប់ហេដ្ឋារចនាសម្ព័ន្ធ និង Application។
* **គោលគំនិតស្នូល:**
  * **Declarative Configuration:** ប្រកាសហេដ្ឋារចនាសម្ព័ន្ធជា Code (ឧ. YAML)។
  * **Version Control:** Configuration ទាំងអស់នៅក្នុង Git។
  * **Automated Synchronization:** GitOps Operators ធ្វើឱ្យ Cluster State ស្របនឹង Git។
  * **Pull Request Workflow:** Changes ធ្វើឡើងតាម Merge Requests។

## 2. គោលការណ៍សំខាន់ៗ 📜

1. **Declarative Description:** ប្រព័ន្ធពិពណ៌នាដោយ Code នៅក្នុង Git។
2. **Version-Controlled Source of Truth:** Git ជាប្រភពនៃការពិត។
3. **Automated Application of Changes:** Changes អនុវត្តដោយស្វ័យប្រវត្តិ។
4. **Software Agents:** Operators តាមដាន និងជូនដំណឹងភាពខុសគ្នា។

## 3. អត្ថប្រយោជន៍ ✨

* **Productivity:** ស្វ័យប្រវត្តិកម្ម Deployments។
* **Developer Experience:** ប្រើ Git Workflow។
* **Reliability:** Rollback ងាយស្រួលដោយ Revert Commit។
* **Security:** Audit Trail ពី Git។
* **Consistency:** Environments ស៊ីសង្វាក់។
* **Disaster Recovery:** Recreate Environment ពី Git។

## 4. GitLab និង GitOps 🤝

* **Git Repository:** បេះដូងនៃ GitOps។
* **Merge Requests:** ផ្តល់ Code Review និង Audit Trail។
* **CI/CD:** Push-based (Deploy ដោយ Pipeline) ឬ Pull-based (Trigger Operator)។
* **Environments:** តាមដាន Deployment Status។
* **Kubernetes Integration:** គាំទ្រ Cloud Native Deployments។

## 5. ឧបករណ៍ GitOps 🛠️

* **Argo CD:** Declarative CD Tool សម្រាប់ Kubernetes ជាមួយ UI។
* **Flux CD:** Synchronization Tool សម្រាប់ Kubernetes Resources។

\`\`\`yaml
stages:
  - build
  - deploy_config

build_application:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t my-app:$CI_COMMIT_SHORT_SHA .
    - docker push my-app:$CI_COMMIT_SHORT_SHA

update_kubernetes_config:
  stage: deploy_config
  image: alpine/git
  script:
    - git config user.name "GitLab CI/CD"
    - git config user.email "gitlab-ci@example.com"
    - git clone https://oauth2:$CI_JOB_TOKEN@gitlab.com/$CI_PROJECT_PATH.git config-repo
    - cd config-repo
    - sed -i "s|image: my-app:.*|image: my-app:$CI_COMMIT_SHORT_SHA|" k8s/deployment.yaml
    - git add k8s/deployment.yaml
    - git commit -m "Update image to $CI_COMMIT_SHORT_SHA"
    - git push origin main
  only:
    - main
  needs: ["build_application"]
\`\`\`

> **គន្លឹះ:** GitOps ធ្វើឱ្យហេដ្ឋារចនាសម្ព័ន្ធក្លាយជាផ្នែកនៃ Git Workflow។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: GitOps Workflow Diagram
\`\`\`text
+--------------------+      +--------------------+      +--------------------+
| Developer          |      | GitLab (Git Repo)  |      | Kubernetes Cluster |
| (Code Changes)     |      | (Source of Truth)  |      | (Actual State)     |
+--------------------+      +--------------------+      +--------------------+
         |                          ^                          ^
         | Push Code                |                          |
         V                          |                          |
+--------------------+              |                          |
| GitLab CI/CD       |              | Pull Request Workflow    |
| (Build, Test)      |              |                          |
+--------------------+              |                          |
         |                          |                          |
         | Update Config (e.g., K8s YAML)                      |
         V                          |                          |
+--------------------+              |                          |
| GitOps Config Repo | <------------+                          |
| (Declarative State)|                                         |
+--------------------+                                         |
         |                                                     |
         | GitOps Operator (e.g., Argo CD, Flux CD)            |
         V                                                     |
+--------------------+                                         |
| Pull Changes       | ----------------------------------------+
| Apply to Cluster   |
| Monitor Divergence |
+--------------------+
\`\`\`

# ឧទាហរណ៍ ២: Kubernetes Deployment YAML
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:v1.0.0
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `GitOps` ប្រើប្រាស់អ្វីជា "ប្រភពនៃការពិត" តែមួយគត់សម្រាប់ហេដ្ឋារចនាសម្ព័ន្ធ និងកម្មវិធី?',
      options: [
        'Database',
        'Git Repository',
        'CI/CD Pipeline Logs',
        'Manual Configuration Files'
      ],
      correct: 1,
      explanation: 'GitOps ប្រើប្រាស់ Git Repository ជា "ប្រភពនៃការពិត" តែមួយគត់សម្រាប់ហេដ្ឋារចនាសម្ព័ន្ធ និងកម្មវិធីដែលបាន Deploy ។'
    },
    {
      question: 'តើ `Declarative Configuration` ក្នុង GitOps មានន័យដូចម្តេច?',
      options: [
        'ហេដ្ឋារចនាសម្ព័ន្ធ និង Application State ត្រូវបានកំណត់ដោយដៃ',
        'ហេដ្ឋារចនាសម្ព័ន្ធ និង Application State ត្រូវបានប្រកាសជា Code (ឧទាហរណ៍៖ YAML Files)',
        'Configuration ត្រូវបានលាក់',
        'Configuration ត្រូវបានបង្កើតដោយស្វ័យប្រវត្តិដោយគ្មានការគ្រប់គ្រង'
      ],
      correct: 1,
      explanation: 'Declarative Configuration មានន័យថាហេដ្ឋារចនាសម្ព័ន្ធ និង Application State ត្រូវបានប្រកាសជា Code (ឧទាហរណ៍៖ YAML Files សម្រាប់ Kubernetes) ។'
    },
    {
      question: 'តើ `GitOps Operators` ដើរតួនាទីអ្វី?',
      options: [
        'ដើម្បីសរសេរ Code ថ្មី',
        'ដើម្បីតាមដានស្ថានភាពជាក់ស្តែងនៃ Cluster និងធានាថាវាត្រូវគ្នានឹងស្ថានភាពដែលបានប្រកាសនៅក្នុង Git',
        'ដើម្បីធ្វើ Code Review',
        'ដើម្បីគ្រប់គ្រង User Permissions'
      ],
      correct: 1,
      explanation: 'GitOps Operators តាមដានស្ថានភាពជាក់ស្តែងនៃ Cluster និងធានាថាវាត្រូវគ្នានឹងស្ថានភាពដែលបានប្រកាសនៅក្នុង Git ។'
    },
    {
      question: 'តើ `Pull Request Workflow` ត្រូវបានប្រើសម្រាប់អ្វីក្នុង GitOps?',
      options: [
        'ដើម្បី Deploy Changes ដោយផ្ទាល់ទៅ Production',
        'ដើម្បីធ្វើ Changes ទាំងអស់ទៅកាន់ហេដ្ឋារចនាសម្ព័ន្ធ ឬ Application តាមរយៈ Pull/Merge Request ទៅកាន់ Git Repository',
        'ដើម្បីទាញ Code ពី Repository ខាងក្រៅ',
        'ដើម្បីបង្កើត Issues'
      ],
      correct: 1,
      explanation: 'រាល់ Changes ទៅកាន់ហេដ្ឋារចនាសម្ព័ន្ធ ឬ Application ត្រូវបានធ្វើឡើងតាមរយៈ Pull/Merge Request ទៅកាន់ Git Repository ។'
    },
    {
      question: 'តើអត្ថប្រយោជន៍មួយណាដែល **មិនមែន** ជាអត្ថប្រយោជន៍នៃ GitOps?',
      options: [
        'Improved Productivity',
        'Higher Reliability',
        'Reduced Audit Trail',
        'Faster Disaster Recovery'
      ],
      correct: 2,
      explanation: 'GitOps ផ្តល់នូវ Audit Trail រឹងមាំសម្រាប់រាល់ Changes ដូច្នេះ "Reduced Audit Trail" មិនមែនជាអត្ថប្រយោជន៍ទេ�।'
    },
    {
      question: 'តើ `GitLab` គាំទ្រ `GitOps` ដោយសារតែអ្វី?',
      options: [
        'វាជា Database តែប៉ុណ្ណោះ',
        'វាជា Git Repository, មាន CI/CD, និងគាំទ្រ Merge Requests',
        'វាជាឧបករណ៍ Deploy តែប៉ុណ្ណោះ',
        'វាជាឧបករណ៍ Monitoring តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'GitLab គាំទ្រ GitOps ដោយសារតែវាជា Git Repository, មាន CI/CD, និងគាំទ្រ Merge Requests ។'
    },
    {
      question: 'តើ `Argo CD` គឺជាឧបករណ៍ GitOps ប្រភេទណា?',
      options: [
        'ជា Source Code Management System',
        'ជា Declarative, GitOps Continuous Delivery Tool សម្រាប់ Kubernetes',
        'ជا CI/CD Runner',
        'ជា Database Management Tool'
      ],
      correct: 1,
      explanation: 'Argo CD គឺជា Declarative, GitOps Continuous Delivery Tool សម្រាប់ Kubernetes ។'
    },
    {
      question: 'តើ `Flux CD` គឺជាឧបករណ៍ GitOps ប្រភេទណា?',
      options: [
        'ជា Issue Tracking System',
        'ជា GitOps Tool សម្រាប់ Kubernetes ដែលផ្តោតលើ Synchronization',
        'ជា Static Analysis Tool',
        'ជា Container Registry'
      ],
      correct: 1,
      explanation: 'Flux CD គឺជា GitOps Tool សម្រាប់ Kubernetes ដែលផ្តោតលើ Synchronization ។'
    },
    {
      question: 'តើ `GitOps` ជួយបង្កើន `Reliability` ដោយរបៀបណា?',
      options: [
        'ដោយការធ្វើ Changes ដោយដៃ',
        'ដោយការធ្វើ Rollback រហ័ស និងងាយស្រួលដោយគ្រាន់តែ Revert Git Commit',
        'ដោយការលុបបំបាត់ការ Test',
        'ដោយការបង្កើន Downtime'
      ],
      correct: 1,
      explanation: 'GitOps ជួយបង្កើន Reliability ដោយការធ្វើ Rollback រហ័ស និងងាយស្រួលដោយគ្រាន់តែ Revert Git Commit ។'
    },
    {
      question: 'តើ `GitOps` ជួយបង្កើន `Security Guarantees` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitOps ផ្តល់នូវ Audit Trail សម្រាប់រាល់ Changes ដែលជួយបង្កើន Security Guarantees ។'
    },
    {
      question: 'តើ `Declarative Description of System State` គឺជាគោលការណ៍សំខាន់មួយនៃ GitOps ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ ប្រព័ន្ធទាំងមូលត្រូវបានពិពណ៌នាដោយ Declaratively នៅក្នុង Git ។'
    },
    {
      question: 'តើ `GitOps` ផ្តោតលើការប្រើប្រាស់ Git Repository ជា `ប្រភពនៃការពិតដែលប្រកាស` សម្រាប់អ្វី?',
      options: [
        'តែ Source Code ប៉ុណ្ណោះ',
        'ហេដ្ឋារចនាសម្ព័ន្ធ និង Workload របស់ Application',
        'តែ Documentation ប៉ុណ្ណោះ',
        'តែ User Accounts ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'GitOps ផ្តោតលើការប្រើប្រាស់ Git Repository ជាប្រភពនៃការពិតដែលប្រកាសសម្រាប់ហេដ្ឋារចនាសម្ព័ន្ធ និង Workload របស់ Application ។'
    },
    {
      question: 'តើ `GitOps` គឺជាវិធីសាស្រ្តមួយដើម្បីអនុវត្ត `Continuous Delivery` សម្រាប់ Cloud Native Applications ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitOps គឺជាវិធីសាស្រ្តមួយដើម្បីអនុវត្ត Continuous Delivery សម្រាប់ Cloud Native Applications ។'
    },
    {
      question: 'តើ `GitOps Operators` ជូនដំណឹងប្រសិនបើមាន `ភាពខុសគ្នា` ពីស្ថានភាពដែលបានប្រកាសនៅក្នុង Git ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ Software Agents (GitOps Operators) តាមដានស្ថានភាពជាក់ស្តែងនៃប្រព័ន្ធ និងជូនដំណឹងប្រសិនបើមានភាពខុសគ្នាពីស្ថានភាពដែលបានប្រកាសនៅក្នុង Git ។'
    },
    {
      question: 'តើ `GitOps` ជួយបង្កើន `Consistency` រវាង Environments ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitOps ធានាថា Environments ទាំងអស់មានភាពស៊ីសង្វាក់គ្នា។'
    },
    {
      question: 'តើ `GitLab CI/CD` អាចត្រូវបានប្រើដើម្បី `Push Changes` ទៅកាន់ Cluster ក្នុង GitOps Workflow ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab CI/CD Pipeline អាចត្រូវបានប្រើដើម្បី Build Artifacts និង Push Changes ទៅកាន់ Cluster (Push-based GitOps) ។'
    },
    {
      question: 'តើ `GitOps` អាចជួយក្នុងការ `Faster Disaster Recovery` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitOps អាច Recreate Environment ពី Git Repository ដែលជួយក្នុងការ Faster Disaster Recovery ។'
    },
    {
      question: 'តើ `GitOps` ពង្រីកគោលការណ៍ `DevOps` ទៅកាន់ការគ្រប់គ្រងហេដ្ឋារចនាសម្ព័ន្ធដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitOps ពង្រីកគោលការណ៍ DevOps នៃ Version Control, Collaboration, Compliance, និង CI/CD ទៅកាន់ការគ្រប់គ្រងហេដ្ឋារចនាសម្ព័ន្ធ និងការ Deployments ។'
    },
    {
      question: 'តើ `GitOps` ត្រូវបានចាត់ទុកថាជា `វិធីសាស្រ្តប្រតិបត្តិការថ្មីមួយ` ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitOps គឺជាវិធីសាស្រ្តប្រតិបត្តិការថ្មីមួយសម្រាប់ហេដ្ឋារចនាសម្ព័ន្ធ និងកម្មវិធី។'
    },
    {
      question: 'តើ `GitLab Environments` ជួយតាមដាន `ស្ថានភាព Deployment` ក្នុង GitOps ដែរឬទេ?',
      options: ['បាទ/ចាស៎', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស៎ GitLab Environments ជួយតាមដានស្ថានភាព Deployment នៅក្នុង GitOps Workflow ។'
    }
  ],
  lab: {
    task: `
# ការអនុវត្តន៍ជាក់ស្តែង: រៀបចំ GitOps Workflow ជាមួយ GitLab

លំហាត់នេះនឹងណែនាំអ្នករៀបចំ GitOps Workflow ជាមួយ GitLab ដោយបង្កើត Projects និង \`.gitlab-ci.yml\` សម្រាប់ Application Code និង Infrastructure Configuration។ ដោយសារការអនុវត្តន៍ GitOps ពេញលេញទាមទារ Kubernetes Cluster និង GitOps Operator (ឧ. Argo CD, Flux CD), លំហាត់នេះនឹងផ្តោតលើការរៀបចំ GitLab និងស្វែងយល់ពី Workflow។

**លក្ខខណ្ឌជាមុន:**
* គណនី GitLab.com ឥតគិតថ្លៃ ឬគណនីដែលមានស្រាប់។
* Docker និង Text Editor (ឧ. VS Code) សម្រាប់បង្កើត Sample Application។
* (ស្រេចចិត្ត) Kubernetes Cluster និង GitOps Operator សម្រាប់ Deployment ពេញលេញ។

1. **រៀបចំ Projects**:
   * **ចូលទៅ GitLab.com** ដោយប្រើគណនីអ្នក។
   * **បង្កើត Project \`gitops-app-code\`**:
     * **Name:** \`gitops-app-code\`
     * **Visibility Level:** Private
     * **Initialize with a README:** ធីក
     * បន្ថែម Sample Application Code:
       * បង្កើត File \`Dockerfile\`:
         \`\`\`dockerfile
         FROM nginx:alpine
         COPY index.html /usr/share/nginx/html/
         \`\`\`
       * បង្កើត File \`index.html\`:
         \`\`\`html
         <!DOCTYPE html>
         <html>
         <body>
           <h1>Hello, GitOps!</h1>
         </body>
         </html>
         \`\`\`
       * Commit Files ទៅ \`main\` Branch។
   * **បង្កើត Project \`gitops-infra-config\`**:
     * **Name:** \`gitops-infra-config\`
     * **Visibility Level:** Private
     * **Initialize with a README:** ធីក
     * បន្ថែម Kubernetes YAML:
       * បង្កើត File \`k8s/deployment.yaml\`:
         \`\`\`yaml
         apiVersion: apps/v1
         kind: Deployment
         metadata:
           name: my-app
         spec:
           replicas: 1
           selector:
             matchLabels:
               app: my-app
           template:
             metadata:
               labels:
                 app: my-app
             spec:
               containers:
               - name: my-app
                 image: my-app:initial
                 ports:
                 - containerPort: 80
         \`\`\`
       * Commit File ទៅ \`main\` Branch។

2. **រៀបចំ GitLab CI/CD**:
   * នៅ Project \`gitops-app-code\`, បង្កើត File \`.gitlab-ci.yml\`:
     \`\`\`yaml
     stages:
       - build
       - deploy_config
     
     build_application:
       stage: build
       image: docker:latest
       services:
         - docker:dind
       variables:
         DOCKER_HOST: tcp://docker:2375
         DOCKER_DRIVER: overlay2
       before_script:
         - echo "$CI_REGISTRY_PASSWORD" | docker login -u "$CI_REGISTRY_USER" --password-stdin $CI_REGISTRY
       script:
         - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA .
         - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA
     
     update_kubernetes_config:
       stage: deploy_config
       image: alpine/git
       variables:
         CONFIG_REPO: "https://gitlab.com/your-username/gitops-infra-config.git"
       script:
         - git config user.name "GitLab CI/CD"
         - git config user.email "gitlab-ci@example.com"
         - git clone https://oauth2:$CI_JOB_TOKEN@$CONFIG_REPO config-repo
         - cd config-repo
         - sed -i "s|image: my-app:.*|image: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA|" k8s/deployment.yaml
         - git add k8s/deployment.yaml
         - git commit -m "Update image to $CI_COMMIT_SHORT_SHA"
         - git push origin main
       only:
         - main
       needs: ["build_application"]
     \`\`\`
   * **កំណត់ CI/CD Variables**:
     * នៅ \`gitops-app-code\`, ចូលទៅ **Settings > CI/CD > Variables**:
       * បន្ថែម \`CI_REGISTRY_USER\` (ឧ. \`your-username\`)
       * បន្ថែម \`CI_REGISTRY_PASSWORD\` (GitLab Personal Access Token ជាមួយ Scope \`api\`)
       * បន្ថែម \`CI_REGISTRY_IMAGE\` (ឧ. \`registry.gitlab.com/your-username/gitops-app-code\`)

3. **Trigger Pipeline**:
   * Commit Change ណាមួយនៅ \`gitops-app-code\` (ឧ. Update \`index.html\`)។
   * ចូលទៅ **CI/CD > Pipelines** នៅ \`gitops-app-code\` ដើម្បីពិនិត្យ Pipeline Status។
   * **ផ្ទៀងផ្ទាត់**:
     * ពិនិត្យ **Build Stage** បង្កើត Docker Image។
     * ពិនិត្យ **Deploy Config Stage** Updates \`k8s/deployment.yaml\` នៅ \`gitops-infra-config\`។
     * ចូលទៅ \`gitops-infra-config\` > **Repository > Files** ដើម្បីឃើញ Updated Image Tag នៅ \`k8s/deployment.yaml\`។

4. **ស្វែងយល់ Audit Trail**:
   * នៅ \`gitops-infra-config\`, ចូលទៅ **Repository > Commits**។
   * ពិនិត្យ Commit History ដើម្បីឃើញ Commits ពី CI/CD Pipeline (ឧ. "Update image to <commit_sha>")។
   * **ផ្ទៀងផ្ទាត់** Audit Trail បង្ហាញ Changes នៃ Image Tag។

5. **(ស្រេចចិត្ត) Deploy ទៅ Kubernetes**:
   * **ចំណាំ:** ជំហាននេះទាមទារ Kubernetes Cluster និង GitOps Operator (ឧ. Argo CD)។
   * ដំឡើង Argo CD នៅ Kubernetes Cluster។
   * កំណត់ Argo CD ឱ្យតាមដាន \`gitops-infra-config\` Repository។
   * ពិនិត្យ Argo CD UI ដើម្បីឃើញ Deployment នៃ \`my-app\` ជាមួយ Updated Image Tag។

> **គន្លឹះ:** ពិនិត្យ Pipeline Logs នៅ \`gitops-app-code\` និង Commit History នៅ \`gitops-infra-config\` ដើម្បីផ្ទៀងផ្ទាត់ GitOps Workflow។ សម្រាប់ Deployment ពេញលេញ ត្រូវការ Kubernetes Cluster និង Operator។
`,
    solution: `
# ដំណោះស្រាយ: រៀបចំ GitOps Workflow ជាមួយ GitLab

បន្ទាប់ពីអនុវត្តជំហាននៅក្នុង Lab Task នេះជាលទ្ធផល:

## ជំហានទី ១: រៀបចំ Projects
* **Project \`gitops-app-code\`:**
  * បង្កើតជា Private ជាមួយ README។
  * Files:
    \`\`\`dockerfile
    # Dockerfile
    FROM nginx:alpine
    COPY index.html /usr/share/nginx/html/
    \`\`\`
    \`\`\`html
    <!-- index.html -->
    <!DOCTYPE html>
    <html>
    <body>
      <h1>Hello, GitOps!</h1>
    </body>
    </html>
    \`\`\`
* **Project \`gitops-infra-config\`:**
  * បង្កើតជា Private ជាមួយ README។
  * File:
    \`\`\`yaml
    # k8s/deployment.yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: my-app
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: my-app
      template:
        metadata:
          labels:
            app: my-app
        spec:
          containers:
          - name: my-app
            image: my-app:initial
            ports:
            - containerPort: 80
    \`\`\`

## ជំហានទី ២: រៀបចំ GitLab CI/CD
* **File \`.gitlab-ci.yml\` នៅ \`gitops-app-code\`:**
  \`\`\`yaml
  stages:
    - build
    - deploy_config
  build_application:
    stage: build
    image: docker:latest
    services:
      - docker:dind
    variables:
      DOCKER_HOST: tcp://docker:2375
      DOCKER_DRIVER: overlay2
    before_script:
      - echo "$CI_REGISTRY_PASSWORD" | docker login -u "$CI_REGISTRY_USER" --password-stdin $CI_REGISTRY
    script:
      - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA .
      - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA
  update_kubernetes_config:
    stage: deploy_config
    image: alpine/git
    variables:
      CONFIG_REPO: "https://gitlab.com/your-username/gitops-infra-config.git"
    script:
      - git config user.name "GitLab CI/CD"
      - git config user.email "gitlab-ci@example.com"
      - git clone https://oauth2:$CI_JOB_TOKEN@$CONFIG_REPO config-repo
      - cd config-repo
      - sed -i "s|image: my-app:.*|image: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA|" k8s/deployment.yaml
      - git add k8s/deployment.yaml
      - git commit -m "Update image to $CI_COMMIT_SHORT_SHA"
      - git push origin main
    only:
      - main
    needs: ["build_application"]
  \`\`\`
* **CI/CD Variables:**
  * \`CI_REGISTRY_USER\`: your-username
  * \`CI_REGISTRY_PASSWORD\`: <personal_access_token>
  * \`CI_REGISTRY_IMAGE\`: registry.gitlab.com/your-username/gitops-app-code

## ជំហានទី ៣: Trigger Pipeline
* Commit Change នៅ \`index.html\` (ឧ. \`<h1>Hello, GitOps Updated!</h1>\`)។
* Pipeline Output:
  * **Build Stage:** Docker Image \`registry.gitlab.com/your-username/gitops-app-code:<commit_sha>\` បង្កើត និង Push។
  * **Deploy Config Stage:** Updates \`k8s/deployment.yaml\` នៅ \`gitops-infra-config\`:
    \`\`\`yaml
    # Updated k8s/deployment.yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: my-app
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: my-app
      template:
        metadata:
          labels:
            app: my-app
        spec:
          containers:
          - name: my-app
            image: registry.gitlab.com/your-username/gitops-app-code:<commit_sha>
            ports:
            - containerPort: 80
    \`\`\`

## ជំហានទី ៤: Audit Trail
* **Commit History នៅ \`gitops-infra-config\`:**
  * Commit: "Update image to <commit_sha>"
  * Verification: Commit History បង្ហាញ Changes នៃ Image Tag។

## ជំហានទី ៥: (ស្រេចចិត្ត) Deploy ទៅ Kubernetes
* **ចំណាំ:** ទាមទារ Kubernetes Cluster និង Argo CD។
* Argo CD តាមដាន \`gitops-infra-config\`, Applies Updated \`k8s/deployment.yaml\`។
* Verification: Application \`my-app\` Deployed ជាមួយ Image Tag \`<commit_sha>\`។

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Projects:** \`gitops-app-code\`, \`gitops-infra-config\` បង្កើតជោគជ័យ។
* **Pipeline:** Builds Image និង Updates \`k8s/deployment.yaml\`។
* **Audit Trail:** Commit History នៅ \`gitops-infra-config\` បង្ហាញ Changes។
* **(ស្រេចចិត្ត) Deployment:** Application Deployed នៅ Kubernetes ជាមួយ Argo CD។

លំហាត់នេះបានជួយអ្នករៀបចំ GitOps Workflow ជាមួយ GitLab និងស្វែងយល់ពី Audit Trail។
`
  }
};

export default GitLabLesson5_6Content;
