
import {
    AlertTriangle,
    AppWindow,
    BadgeCheck,
    BarChart,
    BookOpen,
    BrainCircuit,
    Bug,
    CheckCircle,
    ChevronsRight,
    ClipboardList,
    Clock,
    Cloud,
    Code,
    CodeSquare,
    Codepen,
    Component,
    Compass,
    Contact,
    Cpu,
    Database,
    Dna,
    DollarSign,
    DraftingCompass,
    ExternalLink,
    FileLock,
    FileText,
    GanttChartSquare,
    GitBranch,
    GitCompare,
    Github,
    Gitlab,
    Globe,
    Handshake,
    HelpCircle,
    Key,
    KeyRound,
    Laptop,
    Layers,
    Link,
    Linkedin,
    Mail,
    Map,
    MessageCircle,
    MessageSquare,
    Package,
    PenTool,
    PersonStanding,
    Plane,
    Pyramid,
    RadioTower,
    Rocket,
    Scale,
    Search,
    Server,
    Settings,
    ShieldCheck,
    Siren,
    Slack,
    Sprout,
    Star,
    Target,
    TestTube2,
    TrendingUp,
    Trophy,
    UserCheck,
    UserCog,
    UserPlus,
    UserX,
    Users,
    Wallet,
    Webhook,
    Workflow,
    Youtube,
    Zap,
  } from "lucide-react";
import { TechEntry } from "./tech";
  
  export const allTech: Record<string, TechEntry> = {
    net: {
      name: ".NET",
      category: "Backend",
      categorySlug: "backend-developer",
      seo_title: "Hire Nearshore .NET Developers | TeamStation AI",
      meta_description:
        "Elite, pre-vetted .NET engineers in LATAM. Axiom Cortex™ vetting, EOR compliance, and audit-ready ops. Book a strategy call today.",
      intro:
        "Our developers are experts in building robust, scalable applications using the .NET framework.",
      pains: [
        {
          icon: Code,
          problem: "Monolithic architecture slowing down development",
          pain: "Your large, tightly-coupled .NET application is difficult to maintain and deploy, leading to slow development cycles and high regression risk.",
          solution:
            "We provide experts in microservices architecture who can break down your monolith into smaller, manageable services, improving agility and scalability.",
          kpi: "Reduced deployment time by 50% and decreased bug count by 30%.",
        },
        {
          icon: Cloud,
          problem: "High infrastructure costs",
          pain: "Your on-premise .NET infrastructure is expensive to maintain and doesn't scale efficiently with demand.",
          solution:
            "Our developers are proficient in migrating .NET applications to cloud platforms like Azure, optimizing for cost and performance.",
          kpi: "Lowered infrastructure costs by 40% and improved application performance by 25%.",
        },
        {
          icon: GitBranch,
          problem: "Lack of modern CI/CD practices",
          pain: "Your development process is manual and error-prone, resulting in slow releases and frequent rollbacks.",
          solution:
            "We implement modern CI/CD pipelines for .NET applications using tools like Azure DevOps, automating the build, test, and deployment process.",
          kpi: "Increased deployment frequency by 3x and reduced rollback rate by 90%.",
        },
      ],
      evaluation: [
        "Proficiency in C# and .NET Core",
        "Experience with Azure services",
        "Knowledge of microservices architecture",
        "Expertise in database design and optimization",
      ],
      technical_analysis:
        "Our .NET developers are vetted for their ability to design and build enterprise-grade applications. We focus on their understanding of software architecture, cloud-native development, and DevOps practices.",
      interlink_slugs: ["csharp", "azure", "sql-server"],
    },
    dbt: {
      name: 'dbt (Data Build Tool)',
      category: 'Data & AI',
      categorySlug: 'data-engineering-analytics',
      seo_title: 'Hire Senior dbt Developers | Analytics Engineering & Data Modeling',
      meta_description: 'Build reliable, well-tested data pipelines. Hire elite remote dbt experts vetted for advanced data modeling, performance optimization, and DataOps. Book a call.',
      intro: "dbt has become the industry standard for transforming data in the warehouse, bringing software engineering best practices to analytics. You need an Analytics Engineer who can move beyond simple `SELECT` statements to build a robust, modular, and well-tested dbt project. Our vetting process is designed to find these experts. We assess their deep understanding of dbt's core concepts—models, tests, sources, and packages—and their ability to architect scalable data transformations that are both reliable and easy to maintain. By hiring a dbt expert from us, you get a developer who can turn your raw data into a trusted, high-quality asset for the entire organization.",
      pains: [
          {
              icon: AlertTriangle,
              pain: "Is your data pipeline a slow, tangled 'spaghetti' of SQL queries?",
              problem: "Without a modular approach, data transformation logic becomes a monolithic, unmanageable mess. This 'SQL spaghetti' is impossible to debug, difficult to update, and runs inefficiently, causing long pipeline delays and a lack of trust in the data.",
              solution: "We vet for mastery of **dbt's modular architecture**. Our experts must demonstrate the ability to break down complex transformations into small, incremental models that build on each other, using `ref()` to create a clear, testable, and maintainable Directed Acyclic Graph (DAG) of dependencies.",
              kpi: "Modular Data Modeling and DAG Optimization"
          },
          {
              icon: AlertTriangle,
              pain: "Are you constantly fighting data quality issues and untrustworthy reports?",
              problem: "Without automated testing, data quality issues (e.g., null values, failed relationship checks) go undetected, silently corrupting your data warehouse and leading to incorrect business decisions. This erodes trust in the entire data platform.",
              solution: "Our engineers are experts in **dbt's testing framework**. They are vetted on their ability to write and implement comprehensive data tests (generic, singular, and custom) to guarantee data quality, ensuring that every data model is accurate, fresh, and reliable.",
              kpi: "Comprehensive Data Testing and Quality Assurance"
          },
          {
              icon: AlertTriangle,
              pain: "Are your dbt runs slow, inefficient, and costly?",
              problem: "Inefficient dbt project configuration and poor model materialization strategies can lead to slow pipeline runs and excessive data warehouse costs. Developers who don't understand the trade-offs between different materializations (`view`, `table`, `incremental`) waste valuable time and money.",
              solution: "We look for engineers proficient in **dbt performance tuning**. They are vetted on their ability to choose the correct materialization strategy for each model, implement efficient incremental models for large datasets, and optimize dbt run commands for maximum parallelism and performance.",
              kpi: "Performance Tuning and Incremental Modeling"
          }
      ],
      evaluation: ['Advanced dbt project structure and modularity', 'Data modeling and materialization strategies', 'Custom and generic data testing', 'Jinja and macro development for code reuse', 'Performance tuning and incremental models'],
      technical_analysis: "The dbt evaluation is focused on analytics engineering best practices. Candidates are required to design a dbt project for a complex business scenario, demonstrating a clear understanding of staging, intermediate, and marts layers. The critical assessment is their choice of **materializations** and their ability to implement a robust **incremental modeling** strategy for a large fact table, proving their understanding of performance and cost optimization. We rigorously test their testing discipline, requiring them to write both generic and custom data tests to ensure data integrity. Finally, we assess their proficiency with **Jinja macros** for writing DRY, reusable transformation logic.",
      interlink_slugs: ['snowflake', 'data-engineering', 'sql', 'python']
    },
    python: { 
      name: 'Python', 
      category: 'Backend & APIs', 
      categorySlug: 'backend-services', 
      seo_title: 'Hire Senior Python Developers | AI, Data Science & Backend APIs',
      meta_description: 'Hire elite remote Python engineers for scalable APIs (FastAPI), complex data science, and robust backend systems. Vetted for performance and architecture.',
      intro: "Python's versatility makes it the engine for everything from high-traffic APIs (FastAPI) to the core of data science and machine learning (PyTorch/TensorFlow). You need an engineer who can bridge these worlds: a developer who understands both the architectural needs of a robust backend and the unique performance demands of data processing. Our vetting process finds these experts. We focus on their ability to write efficient, clean code (adhering to PEP 8), their mastery of asynchronous programming (asyncio), and their deep knowledge of key libraries like NumPy, Pandas, and Scikit-learn. For backend roles, we test their expertise in modern, high-performance frameworks like FastAPI and Django. By hiring our Python talent, you are investing in a flexible, powerful engineer capable of building intelligent, data-driven applications that scale with your business.",
      pains: [
          {
              icon: AlertTriangle,
              pain: "Is your API performance crippled by the GIL (Global Interpreter Lock)?",
              problem: "Python's GIL prevents true parallel execution of native threads, making I/O-heavy web services and CPU-intensive data tasks perform poorly under concurrent load. Developers who don't understand `asyncio` or multiprocess architecture fail to utilize modern cloud resources efficiently.",
              solution: "Our engineers are masters of asynchronous Python (`asyncio`) and modern frameworks like **FastAPI**. They demonstrate the ability to build high-throughput APIs that utilize asynchronous I/O to maximize performance. For CPU-bound tasks, they implement correct parallel execution using the `multiprocessing` module or offload work to a task queue like Celery.",
              kpi: "API throughput (RPS) and latency"
          },
          {
              icon: AlertTriangle,
              pain: "Is your data pipeline code slow and unmaintainable?",
              problem: "Many developers use base Python loops and data structures for large-scale data processing, which is incredibly slow. Additionally, a lack of clear architecture in data code leads to brittle, untestable, and costly-to-maintain data pipelines.",
              solution: "We vet for deep expertise in vectorized operations using **NumPy** and **Pandas**. Our candidates write highly efficient, idiomatic data processing code that is orders of magnitude faster. For data engineers, they are vetted on their ability to build structured, version-controlled pipelines using tools like **dbt** or **Apache Spark**.",
              kpi: "Data processing time reduction"
          },
          {
              icon: AlertTriangle,
              pain: "Are your ML models stuck in notebooks, not production?",
              problem: "The jump from a data science notebook to a production-ready, scalable ML service is massive. Most data scientists lack the DevOps and software engineering skills to package, deploy, monitor, and maintain models in a live environment.",
              solution: "We hire **MLOps-aware** Python engineers who can build a full ML lifecycle. They are proficient in deploying models as microservices (using FastAPI or Flask) and integrating them with cloud platforms (AWS Sagemaker, Azure ML) and containerization (Docker/Kubernetes).",
              kpi: "Time-to-deploy and model latency"
          }
      ], 
      evaluation: ['Asyncio and non-blocking I/O mastery', 'Modern API frameworks (FastAPI, Django/DRF)', 'Data science stack (NumPy, Pandas, Scikit-learn)', 'MLOps and production model deployment', 'Clean, idiomatic Python (PEP 8)'],
      technical_analysis: "The Python evaluation is bifurcated for core software engineering and data science roles. For backend roles, we test `asyncio` mastery, requiring candidates to design a high-concurrency service using FastAPI and explain how they would handle blocking operations. For data-centric roles, the focus is on efficient data manipulation using NumPy and Pandas, specifically vectorized operations over loops. Both tracks require strong software engineering fundamentals: modular design, dependency management (Poetry/Pipenv), and TDD using Pytest. MLOps awareness is now mandatory, requiring candidates to articulate a strategy for containerizing a model and deploying it to a cloud environment for low-latency inference.",
      interlink_slugs: ['data-engineering', 'machine-learning', 'sql']
    },
    'node': {
      name: 'Node.js',
      category: 'Backend & APIs',
      categorySlug: 'backend-services',
      seo_title: 'Hire Senior Node.js Developers | Backend API & Microservices Experts',
      meta_description: 'Build fast, scalable server-side applications. Hire elite remote Node.js experts vetted for event loop mastery, microservices, and performance. Book a call.',
      intro: "You're here because you need a backend that can handle high-concurrency and real-time data without breaking a sweat. Node.js, with its non-blocking, event-driven architecture, is the perfect tool for the job. But you need an engineer who truly understands the **Node.js Event Loop**, a non-negotiable skill for avoiding performance-killing blocking operations. Our vetting process is laser-focused on this architectural core, assessing a candidate's ability to design asynchronous, highly concurrent applications—the very definition of a scalable backend. We look for expertise in building robust, performant APIs (both REST and GraphQL) and their ability to architect microservices using Node.js for maximum agility and decoupling. By hiring a Node.js expert from us, you get a developer who can guarantee your backend can handle explosive user growth without scaling headaches or costly infrastructure overruns.",
      pains: [
          {
              icon: AlertTriangle,
              pain: "Is your server performance plagued by blocking I/O operations?",
              problem: "The Node.js Event Loop is a single thread. Inexperienced developers often use synchronous methods or fail to correctly delegate long-running tasks, causing the Event Loop to block. This stops all concurrent operations, leading to slow response times, high latency, and a server that collapses under load.",
              solution: "We vet for an explicit and deep understanding of the Event Loop. Our experts must demonstrate their ability to write non-blocking asynchronous code, correctly use the `process.nextTick` and `setImmediate` queues, and leverage worker threads or external services for CPU-intensive tasks, guaranteeing peak concurrency and low latency.",
              kpi: "Event Loop Mastery and Non-Blocking I/O"
          },
          {
              icon: AlertTriangle,
              pain: "Is your API logic a monolithic, untestable mess?",
              problem: "A common anti-pattern is building a single, monolithic Express server where business logic, database queries, and routing are tightly coupled. This makes the application nearly impossible to test, refactor, and evolve, slowing down feature development to a crawl.",
              solution: "Our engineers are masters of architectural patterns like the **Clean Architecture** or **Hexagonal Architecture** within Node.js. They are vetted on their ability to structure code with clear separation of concerns (Controllers, Services, Repositories), leading to a highly modular, unit-testable, and maintainable codebase that scales with your business logic.",
              kpi: "Modular Backend Architecture (e.g., Clean/Hexagonal)"
          },
          {
              icon: AlertTriangle,
              pain: "Are you struggling to handle security and input validation correctly?",
              problem: "Failure to implement proper input validation (Joi, Zod) or to correctly manage authentication (JWT, OAuth) and authorization leads to vulnerable APIs susceptible to injection attacks, data breaches, and unauthorized access. Security is often an afterthought.",
              solution: "We look for engineers who integrate security and validation as first-class citizens. They are proficient in modern validation libraries and demonstrate expertise in securing API endpoints with appropriate middleware, token management, and encryption, ensuring your data and users are safe from day one.",
              kpi: "API Security and Validation Expertise"
          }
      ],
      evaluation: ['Event Loop architecture and non-blocking I/O', 'API design (REST, GraphQL) and routing', 'Asynchronous patterns (Promises, Async/Await) and concurrency', 'Modular architecture and code structure', 'Security (Authentication, Authorization, Input Sanitization)'],
      technical_analysis: "The Node.js evaluation is centered on a candidate's mastery of the asynchronous programming model and backend architecture. The critical assessment point is the **Node.js Event Loop**: candidates are given scenarios that intentionally lead to blocking code and are required to diagnose the bottleneck and refactor it into a non-blocking solution, demonstrating an understanding of the different phases (Timers, Pending Callbacks, I/O, Check, Close). For architecture, we evaluate their ability to design a scalable API using modern frameworks (e.g., NestJS, Express) with a clear separation of concerns (e.g., service and repository layers). We specifically test their knowledge of security best practices, including correct implementation of CORS, handling JWTs, and using validation libraries to prevent common API vulnerabilities. Finally, we assess their proficiency with ORMs (e.g., Prisma, TypeORM) and their ability to integrate with diverse data stores (PostgreSQL, MongoDB) efficiently.",
      interlink_slugs: ['typescript', 'microservices', 'rest-api-design', 'postgresql']
    },
    snowflake: {
      name: 'Snowflake',
      category: 'Data & AI',
      categorySlug: 'data-engineering-analytics',
      seo_title: 'Hire Senior Snowflake Developers | Cloud Data Platform & Analytics Engineering',
      meta_description: 'Build a scalable, zero-maintenance data warehouse. Hire elite remote Snowflake experts vetted for data modeling, performance tuning, and cost optimization. Book a call.',
      intro: "Snowflake has redefined the cloud data platform, offering near-infinite, decoupled scaling of storage and compute. You need an engineer who can leverage Snowflake's unique architecture to build a fast, reliable, and cost-effective data warehouse. Our vetting process is designed to find experts in Snowflake's core features—virtual warehouses, zero-copy cloning, and time travel—and their ability to apply data modeling best practices within this powerful environment. By hiring a Snowflake expert from us, you get a developer who can transform your analytics capabilities, providing your business with a single source of truth that is always fast and always available.",
      pains: [
          {
              icon: AlertTriangle,
              pain: "Are your queries slow and your warehouse costs unpredictable?",
              problem: "Without a deep understanding of Snowflake's virtual warehouse and caching system, developers run inefficient queries that consume excessive credits and time. They fail to right-size warehouses or leverage caching layers, leading to slow dashboards and a massive, unexpected bill.",
              solution: "We vet for mastery of **Snowflake performance and cost optimization**. Our experts must demonstrate the ability to analyze query profiles, choose the correct virtual warehouse size, and leverage Snowflake's multi-layered caching to dramatically improve query speed and reduce credit consumption.",
              kpi: "Query Performance and Credit Consumption Optimization"
          },
          {
              icon: AlertTriangle,
              pain: "Is your data sharing insecure and inefficient?",
              problem: "Manually exporting and sharing data via CSVs or other files is slow, insecure, and creates stale data silos. This prevents effective data collaboration with partners and internal teams.",
              solution: "Our engineers are experts in **Snowflake Secure Data Sharing**. They are vetted on their ability to use Shares and Data Exchanges to provide live, secure, and governed access to data without creating any copies, enabling real-time collaboration with zero ETL.",
              kpi: "Secure Data Sharing and Collaboration"
          },
          {
              icon: AlertTriangle,
              pain: "Are you struggling to manage data transformations and quality?",
              problem: "Loading raw data directly into Snowflake without a structured transformation and testing process leads to an untrustworthy data warehouse. Your business cannot rely on data that is not modeled, tested, and documented.",
              solution: "We look for engineers proficient in building data transformation pipelines on top of Snowflake using **dbt**. They are vetted on their ability to create modular, tested, and well-documented dbt models that transform raw data into analytics-ready datasets, ensuring a single source of truth.",
              kpi: "dbt for Data Modeling and Transformation"
          }
      ],
      evaluation: ['Virtual Warehouse management and cost optimization', 'Data modeling (Star Schema) and performance tuning', 'Secure Data Sharing and governance (RBAC)', 'Zero-Copy Cloning and Time Travel for DataOps', 'Integration with dbt and the broader data ecosystem'],
      technical_analysis: "The Snowflake evaluation is focused on cloud data warehousing and analytics engineering best practices. Candidates are tested on their ability to design a scalable data warehouse architecture using a **star schema** model. A critical assessment is their mastery of **performance and cost optimization**: we present scenarios involving slow queries and require candidates to use the query profile to diagnose the bottleneck and apply fixes, such as warehouse resizing or query refactoring. We rigorously test their ability to use **Secure Data Sharing** to create a provider/consumer relationship and their knowledge of **Time Travel** and **Zero-Copy Cloning** for DataOps workflows. Finally, we assess their expertise in integrating Snowflake with **dbt** to build a modern, tested, and documented data transformation pipeline.",
      interlink_slugs: ['dbt', 'sql', 'data-engineering', 'python']
    },
    pytorch: {
      name: 'PyTorch',
      category: 'Data & AI',
      categorySlug: 'ml-ai-llm-ops',
      seo_title: 'Hire Senior PyTorch Developers | Deep Learning & AI Model Experts',
      meta_description: 'Build and train state-of-the-art neural networks. Hire elite remote PyTorch experts vetted for deep learning, performance optimization, and production deployment. Book a call.',
      intro: "PyTorch is the leading deep learning framework, favored by researchers and production teams for its flexibility, Python-native feel, and powerful GPU acceleration. You need an engineer who can move beyond tutorial-level models to architect, train, and deploy complex neural networks for real-world applications. Our vetting process is designed to find these experts. We assess their deep understanding of PyTorch's core components—Tensors, Autograd, and `nn.Module`—and their ability to optimize training loops and deploy models for high-performance inference. By hiring a PyTorch expert from us, you get a developer who can transform your data into a competitive advantage with state-of-the-art AI models.",
      pains: [
          {
              icon: AlertTriangle,
              pain: "Are your model training times slow and expensive?",
              problem: "Inefficient data loading, incorrect use of the GPU, and unoptimized training loops lead to long training times and sky-high cloud computing bills. This slows down your iteration cycle and makes it impossible to experiment with new models or larger datasets.",
              solution: "We vet for mastery of **PyTorch performance optimization**. Our experts must demonstrate proficiency in using `DataLoaders` with multiple workers, correctly moving data and models to the GPU, and leveraging mixed-precision training (`torch.cuda.amp`) to dramatically accelerate training speed and reduce costs.",
              kpi: "Training Time and GPU Utilization"
          },
          {
              icon: AlertTriangle,
              pain: "Is your model architecture a disorganized script?",
              problem: "Defining a model as a long, unstructured script of sequential layers makes it hard to debug, modify, and reuse. This 'scripting' approach lacks the modularity required for complex, modern neural network architectures.",
              solution: "Our engineers are experts in PyTorch's object-oriented API. They are vetted on their ability to design clean, modular, and reusable models by subclassing `torch.nn.Module`, ensuring the architecture is clear, easy to understand, and maintainable.",
              kpi: "Modular `nn.Module` Architecture"
          },
          {
              icon: AlertTriangle,
              pain: "Are your deployed models slow and unsuitable for production?",
              problem: "A model trained in a research environment is often not ready for low-latency production inference. Without optimization techniques like quantization or compilation, your model will be too slow to serve real-time traffic.",
              solution: "We look for engineers proficient in **production model deployment**. They are vetted on their ability to use tools like **TorchScript** for JIT compilation, **quantization** for model size reduction, and high-performance serving frameworks to deploy models that meet strict latency and throughput requirements.",
              kpi: "Inference Latency and Throughput"
          }
      ],
      evaluation: ['Core PyTorch APIs (Tensor, Autograd, nn.Module)', 'Performance Optimization (DataLoaders, CUDA, AMP)', 'Model Architecture and Design Patterns', 'Deployment and Inference Optimization (TorchScript, Quantization)', 'Integration with the PyTorch Ecosystem (TorchVision, TorchText)'],
      technical_analysis: "The PyTorch evaluation is deeply practical, focusing on the end-to-end lifecycle of a deep learning model. Candidates are first assessed on their fundamental understanding of tensors and the autograd system. The core of the evaluation involves architecting and implementing a custom `nn.Module` for a specific task, demonstrating mastery of layers, activation functions, and loss functions. We rigorously test their ability to write an efficient and correct training loop, including proper data loading with `DataLoader`, optimization with `torch.optim`, and performance tuning with mixed-precision training. For production readiness, we assess their knowledge of model serialization, TorchScript for creating deployable graph representations, and quantization techniques for reducing model size and improving inference speed. Finally, we test their ability to debug common training problems, such as exploding/vanishing gradients and overfitting, proving they can not only build models but also make them work effectively.",
      interlink_slugs: ['python', 'machine-learning', 'data-science', 'aws']
    },
    pinia: {
        name: 'Pinia (Vue State)',
        category: 'Frontend & UI/UX',
        categorySlug: 'frontend-web',
        seo_title: 'Hire Vue Pinia Experts | Scalable State Management',
        meta_description: 'Manage Vue state with simplicity and type safety. Hire senior remote Pinia experts vetted for modular, performant store architecture. Book a call.',
        intro: "Pinia is the modern, simple, and type-safe state management library for Vue.js. It's designed to be lightweight and intuitive, leveraging the power of Vue 3's reactivity system while avoiding the complexity of its predecessors. You need an engineer who can architect your application state using Pinia's modular store design, ensuring your codebase remains clean, testable, and maintainable as it scales. Our vetting process focuses on a candidate's ability to design truly modular stores, optimize performance using selectors, and effectively leverage TypeScript for complete type-safety across all state, getters, and actions. By hiring a Pinia expert from us, you get a developer who can tame application complexity, boost development velocity, and deliver a superior, stable user experience.",
        pains: [
            {
                icon: AlertTriangle,
                pain: "Is your state management making your Vue app overly complex?",
                problem: "Over-engineered state solutions or relying on global event buses for complex applications lead to 'state spaghetti'—a codebase that is difficult to reason about, prone to bugs, and challenging to debug. This unnecessary complexity slows down feature development and increases technical debt.",
                solution: "We vet for engineers who master Pinia's lightweight and intuitive structure. They know how to define clear, modular stores that enforce a clear separation of concerns. This leads to a state architecture that is easy to understand, test, and maintain, even in large-scale applications.",
                kpi: "Modular and Type-Safe State Architecture"
            },
            {
                icon: AlertTriangle,
                pain: "Are you struggling to leverage TypeScript with your global state?",
                problem: "The power of Pinia is maximized when paired with TypeScript, but many developers fail to fully leverage type inference, leading to runtime type errors that should have been caught at compile time. This negates the primary benefit of using TypeScript.",
                solution: "Our experts are vetted on their ability to use Pinia with complete type safety. They use Pinia's first-class TypeScript support to ensure that all state, getters, and actions are correctly inferred and strongly typed, dramatically reducing runtime errors and improving code quality and refactorability.",
                kpi: "Complete Pinia/TypeScript Integration"
            },
            {
                icon: AlertTriangle,
                pain: "Are you fetching data directly inside components?",
                problem: "Scattering data fetching logic across multiple components leads to code duplication, inconsistent loading states, and makes data revalidation difficult. This is a sign of poor architectural discipline that complicates caching and error handling.",
                solution: "We look for engineers who centralize data fetching logic within Pinia actions, treating the store as the single source of truth for application state. They can integrate Pinia with modern data fetching libraries to manage loading, error, and caching states effectively, leading to cleaner components and a more reliable user experience.",
                kpi: "Centralized Data Fetching in Actions"
            }
        ],
        evaluation: ['Store definition and modular design', 'TypeScript integration and type inference', 'Actions for centralized async logic', 'Getters for derived state', 'Integration with Vue DevTools'],
        technical_analysis: "Our evaluation for Pinia focuses on assessing a candidate's ability to architect scalable, maintainable, and type-safe state across a large Vue application. We present scenarios that require the separation of business logic into distinct, modular Pinia stores, testing their understanding of both the Options and Setup APIs. Crucially, we assess their TypeScript skills within Pinia, expecting them to leverage type inference for state and getters and correctly type complex actions and patch methods to ensure complete type safety. Performance is a key metric; candidates must demonstrate knowledge of how to efficiently select state, avoid unnecessary subscriptions, and use the store composition function (`useStore`) correctly. Finally, we examine their approach to integrating Pinia with the component lifecycle and third-party libraries (e.g., Vue Router) to ensure they can manage complex application flow and persist state when necessary.",
        interlink_slugs: ['vue', 'typescript', 'qa-automation']
      },
      remix: {
        name: 'Remix',
        category: 'Frontend & UI/UX',
        categorySlug: 'frontend-web',
        seo_title: 'Hire Remix Developers | Full-Stack Web Framework Experts',
        meta_description: 'Build fast, resilient web experiences. Hire senior remote Remix developers vetted for nested routing, data mutations, and web standards mastery. Book a call.',
        intro: "Remix is a modern, full-stack web framework that focuses on web standards and leveraging the distributed power of the edge. It's built on a philosophy that embraces the browser's capabilities, leading to applications that are inherently faster, more resilient, and simpler to reason about. You need an engineer who can move beyond the 'SPA' mental model to harness Remix's core features: nested routing, declarative data fetching via `loaders`, and progressive enhancement with `actions`. Our vetting process is designed to find developers who understand not just the API, but the **underlying web fundamentals** that make Remix so powerful. We assess their ability to use the platform to minimize client-side JavaScript, maximize caching, and create a truly delightful, server-rendered user experience. By hiring a Remix expert, you invest in a future-proof architecture that delivers superior performance and a clear path to production scale.",
        pains: [
            {
                icon: AlertTriangle,
                pain: "Is your app slow because of sequential data waterfalls?",
                problem: "Traditional SPAs often fetch data sequentially, leading to frustrating loading states where the UI updates piecemeal. This poor performance is a direct result of fetching data on the client side without leveraging the server or the edge.",
                solution: "We vet for engineers who master Remix's `loader` function pattern. They understand how to fetch all necessary data in parallel on the server (or at the edge) and deliver a fully-formed HTML document to the client, eliminating data waterfalls and ensuring a blazing-fast initial load and navigation.",
                kpi: "Mastery of Server-Side Data Loaders"
            },
            {
                icon: AlertTriangle,
                pain: "Is handling form submissions a complex state dance?",
                problem: "In many frameworks, form submissions require complex state management (loading states, error states, pending data), making forms brittle and verbose to implement. This breaks the fundamental simplicity of web forms.",
                solution: "Our experts are vetted on their ability to use Remix `actions` and `useFetcher`. They leverage the built-in progressive enhancement features to handle data mutations declaratively, resulting in simpler, more robust forms that work even without JavaScript, and provide an instant, seamless UX with features like automatic revalidation.",
                kpi: "Declarative Data Mutations via Actions"
            },
            {
                icon: AlertTriangle,
                pain: "Are you struggling to manage application data across complex routes?",
                problem: "Managing state and data dependencies across deeply nested views in a large application can quickly become complex, leading to prop-drilling and fragile data flows.",
                solution: "We look for engineers who master Remix's nested routing. They understand how data and components map directly to the URL structure, and how to use data from parent routes in child routes, simplifying data flow and enabling granular error handling and loading states for specific parts of the UI.",
                kpi: "Proficiency in Nested Routing & Data Flow"
            }
        ],
        evaluation: ['Loaders for server-side data fetching', 'Actions for data mutations and progressive enhancement', 'Nested routing and layout management', 'Leveraging web standards (Forms, Headers, Cookies)', 'Deployment strategies (Vercel, Cloudflare Pages, Node.js)'],
        technical_analysis: "The Remix technical analysis targets a candidate's shift from a 'client-centric' to a 'server-centric' mental model. We evaluate their ability to use web fundamentals (Fetch API, Forms) as first-class citizens. Candidates are given scenarios that require them to implement data fetching using `loaders` and to perform data updates using `actions`, demanding that they handle error boundaries, progressive enhancement, and data revalidation correctly. A critical section focuses on nested routing: candidates must architect a complex dashboard with multiple layers of navigation, demonstrating their ability to efficiently co-locate data needs with UI components to prevent unnecessary re-renders or waterfalls. We also test their understanding of deployment targets, particularly for edge environments like Cloudflare, and their knowledge of how Remix optimizes build output for performance. Mastery of the `useLoaderData`, `useActionData`, and `useTransition`/`useNavigation` hooks is mandatory for demonstrating high-level proficiency.",
        interlink_slugs: ['typescript', 'node', 'react']
      },
      svelte: {
        name: 'Svelte/SvelteKit',
        category: 'Frontend & UI/UX',
        categorySlug: 'frontend-web',
        seo_title: 'Hire Svelte/SvelteKit Developers | Modern Component Experts',
        meta_description: 'Build lightweight, highly performant web apps. Hire senior remote Svelte/SvelteKit experts vetted for reactivity, store management, and deployment. Book a call.',
        intro: "Svelte is a radical departure from traditional frameworks. It shifts the work from the browser to the compile step, resulting in highly optimized, 'vanilla-like' JavaScript that is incredibly fast and lightweight. SvelteKit provides the structure for building full-stack applications with this power. You need an engineer who can leverage Svelte's compiler-magic and intuitive reactivity system to deliver a superior user experience with minimal bundle size. Our vetting process is designed to find developers who appreciate the simplicity and power of Svelte's component model, who can manage state effectively using stores, and who can strategically use SvelteKit's routing and server-side capabilities. By hiring a Svelte expert from us, you are investing in a framework that guarantees high performance by design, leading to lower operating costs and a highly satisfied user base.",
        pains: [
            {
                icon: AlertTriangle,
                pain: "Is your framework adding unnecessary bloat to your bundle?",
                problem: "Traditional frameworks ship a large runtime library with every application, increasing load times and memory usage. This leads to poor performance scores and a frustrating experience for users on low-bandwidth or low-power devices.",
                solution: "We vet for engineers who understand and leverage Svelte's core principle: compiling components to highly efficient, vanilla JavaScript with minimal runtime overhead. This guarantees smaller bundle sizes and faster load times, achieving superior Core Web Vitals scores by default.",
                kpi: "Minimal Runtime Overhead & Bundle Size"
            },
            {
                icon: AlertTriangle,
                pain: "Are you struggling with complex, verbose state management?",
                problem: "Over-reliance on external, complicated state libraries for simple or local state creates unnecessary cognitive load and boilerplate code, slowing down development and increasing the chance of bugs.",
                solution: "Our experts are vetted on their mastery of Svelte's built-in state management via stores (writable, readable, derived). They understand how to leverage the simple `$store` syntax for seamless component reactivity, keeping code clean, concise, and highly effective for managing both local and global application state.",
                kpi: "Proficiency in Svelte Stores"
            },
            {
                icon: AlertTriangle,
                pain: "Are you missing the benefits of server-side rendering and routing?",
                problem: "Building a complex application without the structure of a meta-framework can lead to a messy file structure, complex routing logic, and a missed opportunity for superior SEO and initial page load performance.",
                solution: "We look for engineers proficient in SvelteKit's file-system-based routing, server-side rendering (SSR), and server-side API endpoints (via `+server.ts`). They understand how to strategically use server-side data fetching (`load` functions) and form actions to build fast, full-stack applications that adhere to modern web performance best practices.",
                kpi: "Mastery of SvelteKit's Full-Stack Features"
            }
        ],
        evaluation: ['Svelte reactivity and lifecycle hooks', 'Svelte Stores for state management', 'Component design and compiler usage', 'SvelteKit routing, `+page.svelte`, and `+server.ts` endpoints', 'Data fetching via `load` functions'],
        technical_analysis: "The Svelte/SvelteKit evaluation focuses on confirming a deep understanding of component compilation and the reactivity system. Candidates must be able to explain the difference between Svelte and other frameworks (e.g., React, Vue) and how Svelte achieves its performance. We assess their ability to use stores effectively—including custom stores—and their understanding of the simple, yet powerful, `$store` syntax for automatic subscription and unsubscription. For SvelteKit, we present scenarios involving complex data fetching using `load` functions, requiring candidates to handle errors and integrate with server-side API routes (`+server.ts`). They must demonstrate the ability to build a full-stack feature with minimal code by leveraging SvelteKit's conventions for routing and data management, proving they can deliver high velocity with exceptional code quality.",
        interlink_slugs: ['typescript', 'node', 'web-accessibility']
      },
      'web-accessibility': {
        name: 'Web Accessibility (A11y)',
        category: 'Frontend & UI/UX',
        categorySlug: 'frontend-web',
        seo_title: 'Hire Web Accessibility (A11y) Experts | WCAG Compliance Developers',
        meta_description: 'Ensure your web application is accessible and legally compliant. Hire senior A11y experts vetted for WCAG, ARIA, and inclusive component design. Book a call.',
        intro: "Accessibility (A11y) is no longer a 'nice-to-have'; it is a legal and ethical imperative. A truly senior frontend developer understands that their job is to build experiences that work for *all* users, regardless of their technology or ability. You need an expert who can ensure your web application meets WCAG standards, integrates correct ARIA attributes, and designs components that are fully navigable and perceivable by assistive technologies. Our vetting process is unique: we don't just ask about ARIA; we give developers broken, inaccessible components and measure their ability to diagnose and repair the fundamental issues related to keyboard navigation, semantic HTML, and screen reader announcements. By hiring our A11y expert, you mitigate legal risk, expand your market reach, and demonstrate a commitment to inclusive design that strengthens your brand.",
        pains: [
            {
                icon: AlertTriangle,
                pain: "Is your app legally exposed for non-compliance?",
                problem: "Automated tools only catch 30-40% of accessibility issues. A lack of manual, expert review means critical failures related to context, user flow, and complex ARIA roles slip into production, leaving your organization vulnerable to expensive legal action.",
                solution: "Our experts are certified and vetted for their ability to perform thorough manual audits using screen readers (VoiceOver, NVDA), keyboard-only navigation, and advanced ARIA validation. They identify critical failures that tools miss, providing clear, prioritized remediation strategies to eliminate legal risk.",
                kpi: "WCAG 2.2 Level AA compliance score"
            },
            {
                icon: AlertTriangle,
                pain: "Are your custom components unusable by screen readers?",
                problem: "Complex UI elements like carousels, modal dialogs, and custom form controls often lack the necessary ARIA attributes (roles, states, properties) to communicate their state and function to screen reader users, rendering them effectively unusable for the disabled community.",
                solution: "We hire specialists in **WAI-ARIA** best practices. They demonstrate mastery in implementing complex, fully accessible components, ensuring correct keyboard focus management, tab order, and dynamic announcement of state changes. This guarantees a functional experience for all users.",
                kpi: "Mastery of ARIA Roles and Keyboard Navigation"
            },
            {
                icon: AlertTriangle,
                pain: "Is accessibility treated as a last-minute patch rather than a core feature?",
                problem: "When accessibility is tacked on at the end of the development cycle, it often requires extensive, costly refactoring. This slows down development and results in a poor, fragile user experience.",
                solution: "We look for engineers who integrate A11y into every stage of development. They are proficient in tools like Jest-Axe for testing accessibility during component development and are skilled in automated and manual testing techniques to ensure that accessibility is a core, built-in feature of your application, not an afterthought.",
                kpi: "Integration of A11y into CI/CD Pipeline"
            }
        ],
        evaluation: ['WCAG 2.1/2.2 principles and guidelines', 'Semantic HTML5 and ARIA attributes', 'Keyboard navigation and focus management', 'Screen reader testing proficiency (NVDA, VoiceOver)', 'Automated A11y testing (Axe, Lighthouse)'],
        technical_analysis: "The Web Accessibility evaluation is highly practical and focused on remediation. Candidates are presented with common accessibility failures (e.g., improper color contrast, missing form labels, broken keyboard trap, incorrect ARIA usage on a custom widget) and are tasked with diagnosing and fixing them. We assess their foundational knowledge of the accessibility tree, expecting them to articulate how semantic HTML maps to it and when to use ARIA as a supplement, not a replacement. A key area is keyboard interaction: candidates must demonstrate mastery of focus management (using `tabindex`, programmatically managing focus) and correctly handling component interactions without a mouse. Finally, they must be able to integrate accessibility testing tools (like `jest-axe`) into a component testing suite, proving they can implement accessibility as a continuous quality gate.",
        interlink_slugs: ['react', 'typescript', 'vue']
      },
      'rx-js': {
        name: 'RxJS',
        category: 'Frontend & UI/UX',
        categorySlug: 'frontend-web',
        seo_title: 'Hire RxJS Experts | Reactive Programming and Observable Management',
        meta_description: 'Build complex, reactive frontends. Hire elite remote RxJS experts vetted for advanced operators, state management, and performance optimization. Book a call.',
        intro: "RxJS is the definitive library for reactive programming in JavaScript, providing a powerful set of tools for managing asynchronous events and data streams. You need an engineer who can move beyond basic `subscribe()` calls to master the vast library of RxJS operators, architect complex data flows, and debug intricate observable chains. Our vetting process is designed to find true RxJS experts, assessing their ability to solve real-world problems involving race conditions, cancellation, and state management in a declarative, reactive style. By hiring an RxJS expert from us, you gain a developer who can tame the complexity of modern frontends, building applications that are more predictable, more resilient, and easier to reason about.",
        pains: [
            {
                icon: AlertTriangle,
                pain: "Is your application riddled with memory leaks from unclosed subscriptions?",
                problem: "One of the most common and dangerous errors in RxJS is failing to unsubscribe from observables. This leads to silent memory leaks that accumulate over time, eventually crashing your application in production. It's a sign of a developer who doesn't understand the observable lifecycle.",
                solution: "We vet for engineers who have a deep, ingrained understanding of subscription management. They must demonstrate mastery of patterns like `takeUntil` or using async pipes in frameworks like Angular to ensure that every subscription is automatically cleaned up, eliminating memory leaks by design.",
                kpi: "Subscription Management & Memory Leak Prevention"
            },
            {
                icon: AlertTriangle,
                pain: "Is your code a complex mess of nested `subscribe()` calls?",
                problem: "The RxJS equivalent of 'callback hell' is 'subscription hell.' Inexperienced developers nest subscriptions inside each other, creating a tangled, unreadable, and impossible-to-debug chain of asynchronous logic that is prone to race conditions.",
                solution: "Our experts are masters of the RxJS operator pipeline. They are vetted on their ability to use higher-order mapping operators (`switchMap`, `mergeMap`, `concatMap`, `exhaustMap`) to flatten complex asynchronous chains into a single, declarative, and easy-to-read stream.",
                kpi: "Mastery of Higher-Order Mapping Operators"
            },
            {
                icon: AlertTriangle,
                pain: "Are you struggling to manage complex, shared state with RxJS?",
                problem: "While RxJS provides the primitives, managing shared application state requires a clear architectural pattern. Without one, teams often build custom, buggy solutions that are difficult to maintain.",
                solution: "We look for engineers with experience in building robust state management solutions using RxJS. They are proficient in using `BehaviorSubject` for multicasting state and understand patterns for creating a centralized, observable store (similar to Redux) for managing global application state reactively.",
                kpi: "Expertise in RxJS for State Management"
            }
        ],
        evaluation: ['Mastery of core operators (map, filter, tap)', 'Higher-order mapping operators (switchMap, mergeMap)', 'State management with Subjects (BehaviorSubject)', 'Error handling and retry strategies', 'Subscription management and memory leak prevention'],
        technical_analysis: "The RxJS evaluation is focused on solving complex asynchronous problems in a declarative style. Candidates are given scenarios involving race conditions, request cancellation, and real-time updates, and are required to use the correct combination of RxJS operators to build a robust solution. The critical assessment is their mastery of **higher-order mapping operators**: they must explain the difference between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`, and use the correct one for a given scenario (e.g., `switchMap` for typeahead search). We rigorously test their understanding of **subscription management** and how to prevent memory leaks in long-lived applications. Finally, we assess their ability to architect a simple state management store using a `BehaviorSubject`, demonstrating their ability to manage and multicast state across an application.",
        interlink_slugs: ['angular', 'typescript', 'node']
      }
};

export function getAllTechSlugs(): string[] {
    return Object.keys(allTech);
}
export const techCategories: TechCategory[] = [
  {
    name: 'APIs & Backend Services',
    slug: 'backend-services',
    pain: "Is your backend a bottleneck or a force multiplier?",
    icon: Server,
    tech: [
      { name: 'Node.js', slug: 'node' },
      { name: 'Python', slug: 'python' },
      { name: 'Java', slug: 'java' },
      { name: 'Go', slug: 'golang' },
      { name: '.NET', slug: 'net' },
      { name: 'Ruby on Rails', slug: 'ruby' },
      { name: 'PHP (Laravel/Symphony)', slug: 'php' },
      { name: 'gRPC', slug: 'grpc' },
      { name: 'GraphQL', slug: 'graphql' },
    ],
  },
  {
    name: 'Frontend & UI/UX',
    slug: 'frontend-web',
    pain: "Is a slow, buggy UI costing you customers?",
    icon: Layers,
    tech: [
      { name: 'React/TypeScript', slug: 'react' },
      { name: 'Next.js', slug: 'nextjs' },
      { name: 'Vite', slug: 'vite' },
      { name: 'Angular', slug: 'angular' },
      { name: 'Vue.js', slug: 'vue' },
      { name: 'TanStack Query', slug: 'tanstack' },
      { name: 'Redux/Zustand', slug: 'redux' },
      { name: 'Tailwind/shadcn', slug: 'tailwind' },
      { name: 'Testing Library', slug: 'testing' },
    ],
  },
    {
    name: 'Mobile & Cross-Platform',
    slug: 'mobile-cross-platform',
    pain: "Is your mobile experience falling behind?",
    icon: Plane,
    tech: [
        { name: 'React Native', slug: 'react-native' },
        { name: 'Flutter', slug: 'flutter' },
        { name: 'Swift', slug: 'swift' },
        { name: 'Kotlin', slug: 'kotlin' },
        { name: 'Socket.IO', slug: 'socketio' },
    ],
  },
  {
    name: 'Data Modeling & Databases',
    slug: 'data-engineering-analytics',
    pain: "Is your data model built for scale or for future refactors?",
    icon: Database,
    tech: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MySQL', slug: 'mysql' },
      { name: 'SQL Server', slug: 'sql' },
      { name: 'dbt', slug: 'dbt' },
      { name: 'Prisma', slug: 'prisma' },
      { name: 'SQLAlchemy', slug: 'sqlalchemy' },
      { name: 'Hibernate', slug: 'hibernate' },
      { name: 'Redis', slug: 'redis' },
      { name: 'Memcached', slug: 'memcached' },
      { name: 'DynamoDB', slug: 'dynamodb' },
    ],
  },
  {
    name: 'Pipelines & Orchestration',
    slug: 'data-engineering-analytics',
    pain: "Are your data pipelines brittle and unreliable?",
    icon: Component,
    tech: [
      { name: 'Airflow/Prefect', slug: 'airflow' },
      { name: 'Kafka/RabbitMQ', slug: 'kafka' },
      { name: 'Flink/Beam', slug: 'flink' },
      { name: 'Kubernetes', slug: 'kubernetes' },
      { name: 'Docker', slug: 'docker' },
    ],
  },
  {
    name: 'ML/AI & LLM Ops',
    slug: 'ml-ai-llm-ops',
    pain: "Struggling to move AI from a notebook to production?",
    icon: BrainCircuit,
    tech: [
      { name: 'PyTorch', slug: 'pytorch' },
      { name: 'Transformers', slug: 'transformers' },
      { name: 'vLLM', slug: 'vllm' },
      { name: 'Ray Serve', slug: 'ray' },
      { name: 'LangChain', slug: 'langchain' },
      { name: 'pgvector/Pinecone', slug: 'pgvector' },
      { name: 'MLflow/W&B', slug: 'mlflow' },
      { name: 'Ragas', slug: 'ragas' },
    ],
  },
  {
    name: 'Observability & SRE',
    slug: 'platform-infra-sre',
    pain: "Are you debugging in the dark when systems fail?",
    icon: GanttChartSquare,
    tech: [
      { name: 'Prometheus', slug: 'prometheus' },
      { name: 'Grafana', slug: 'grafana' },
      { name: 'OpenTelemetry', slug: 'opentelemetry' },
      { name: 'Jaeger/Loki', slug: 'jaeger' },
      { name: 'Terraform/Pulumi', slug: 'terraform' },
      { name: 'Istio/Linkerd', slug: 'istio' },
    ],
  },
  {
    name: 'Security & GRC',
    slug: 'security-grc',
    pain: "Is compliance an afterthought or built into your stack?",
    icon: ShieldCheck,
    tech: [
      { name: 'Vault', slug: 'vault' },
      { name: 'Okta/Auth0', slug: 'okta' },
      { name: 'CodeQL/Snyk', slug: 'codeql' },
      { name: 'Trivy', slug: 'trivy' },
      { name: 'OPA', slug: 'opa' },
      { name: 'SOC 2', slug: 'soc' },
      { name: 'ISO 27001', slug: 'iso' },
      { name: 'HIPAA', slug: 'hipaa' },
    ],
  },
  {
    name: 'Testing & Quality Engineering',
    slug: 'qa-quality-engineering',
    pain: "Does 'shipping fast' also mean 'shipping bugs'?",
    icon: TestTube2,
    tech: [
      { name: 'Playwright/Cypress', slug: 'playwright' },
      { name: 'Jest/Vitest', slug: 'jest' },
      { name: 'PyTest/JUnit', slug: 'pytest' },
      { name: 'k6/Locust', slug: 'k6' },
      { name: 'Pact', slug: 'pact' },
      { name: 'Gremlin/Litmus', slug: 'gremlin' },
    ],
  },
  {
    name: 'Cloud FinOps & BizTech',
    slug: 'finops-biztech',
    pain: "Are runaway cloud costs eating into your margins?",
    icon: Wallet,
    tech: [
      { name: 'CloudZero/Infracost', slug: 'cloudzero' },
      { name: 'AWS Cost Explorer', slug: 'aws' },
      { name: 'Salesforce', slug: 'salesforce' },
      { name: 'HubSpot', slug: 'hubspot' },
      { name: 'Hightouch/Census', slug: 'hightouch' },
    ],
  }
];
