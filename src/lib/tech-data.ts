
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
    transformers: {
      name: 'Hugging Face Transformers',
      category: 'Data & AI',
      categorySlug: 'ml-ai-llm-ops',
      seo_title: 'Hire Senior Transformers Experts | NLP, Fine-Tuning, and LLM Integration',
      meta_description: 'Leverage the power of state-of-the-art NLP models. Hire elite remote Transformers experts vetted for fine-tuning, tokenization, and production deployment. Book a call.',
      intro: "The Hugging Face `transformers` library is the central nervous system of the modern AI revolution, providing standardized access to thousands of state-of-the-art language models. You need an engineer who can move beyond basic `pipeline` usage to fine-tune, optimize, and deploy these massive models for your specific business needs. Our vetting process is designed to find these experts. We assess their deep understanding of the library's core components—Tokenizers, Models, and the Trainer API—and their ability to handle the practical challenges of working with large models. By hiring a Transformers expert from us, you get a developer who can build powerful, custom NLP solutions that deliver real business value.",
      pains: [
          {
              icon: AlertTriangle,
              pain: "Are you unable to adapt pre-trained models to your specific domain?",
              problem: "Off-the-shelf, pre-trained models often perform poorly on domain-specific tasks (e.g., legal or medical text). Without the ability to fine-tune a model on your own data, you are left with a generic solution that fails to meet your accuracy requirements.",
              solution: "We vet for mastery of **model fine-tuning**. Our experts must demonstrate the ability to prepare a custom dataset, correctly use the `Trainer` API, and apply techniques like LoRA for efficient, low-cost fine-tuning, resulting in a model that is highly accurate for your use case.",
              kpi: "Fine-Tuning Accuracy and F1 Score"
          },
          {
              icon: AlertTriangle,
              pain: "Is your model slow and consuming too much memory?",
              problem: "Large transformer models are resource-intensive. Simply loading a model without optimization can lead to out-of-memory errors and slow performance, making it unusable in a production environment.",
              solution: "Our engineers are experts in **model optimization**. They are vetted on their ability to use techniques like **quantization** (e.g., bitsandbytes) and **Flash Attention** to significantly reduce the memory footprint and increase the inference speed of large models, making them viable for production deployment.",
              kpi: "Inference Latency and Memory Footprint"
          },
          {
              icon: AlertTriangle,
              pain: "Are you struggling to process text correctly for your model?",
              problem: "Every transformer model has its own unique tokenizer and expects input in a specific format. Incorrect tokenization is a common, silent failure mode that leads to poor model performance, even if the model itself is correct.",
              solution: "We look for engineers proficient in the `tokenizers` library. They are vetted on their ability to correctly load and use the appropriate tokenizer, handle padding and truncation, and prepare batches of data for efficient model processing, ensuring the model receives data in the exact format it expects.",
              kpi: "Tokenizer and Data Preprocessing Accuracy"
          }
      ],
      evaluation: ['Core library APIs (pipeline, AutoModel, AutoTokenizer)', 'Fine-tuning with the Trainer API', 'Model optimization (Quantization, Flash Attention)', 'Tokenization and data preprocessing', 'Deployment of models as a service'],
      technical_analysis: "The Transformers evaluation focuses on the practical, end-to-end lifecycle of using a large language model. Candidates are assessed on their ability to select the right pre-trained model for a given task from the Hugging Face Hub. The critical test is a **fine-tuning exercise**: given a custom dataset, the candidate must preprocess the data, configure the `Trainer`, and successfully fine-tune a model, demonstrating an understanding of key hyperparameters and evaluation metrics. We rigorously test their knowledge of **model optimization**, requiring them to explain and implement quantization to reduce a model's memory footprint for deployment. Finally, we assess their ability to serve the fine-tuned model as a REST API, proving they can bridge the gap between AI modeling and production software engineering.",
      interlink_slugs: ['pytorch', 'python', 'llms', 'langchain']
    },
    langchain: {
      name: 'LangChain',
      category: 'Data & AI',
      categorySlug: 'ml-ai-llm-ops',
      seo_title: 'Hire Senior LangChain Developers | AI Application & RAG Experts',
      meta_description: 'Build powerful, data-aware AI applications. Hire elite remote LangChain experts vetted for complex chains, RAG architecture, and agent development. Book a call.',
      intro: "LangChain is the definitive framework for composing LLM-powered applications, providing a rich toolkit for building complex chains, data-aware agents, and robust Retrieval-Augmented Generation (RAG) systems. You need an engineer who can move beyond basic LLM calls to architect sophisticated applications that can reason, act, and interact with your proprietary data. Our vetting process is designed to find these experts. We assess their deep understanding of LangChain's core components—Chains, Agents, and Tools—and their ability to design and optimize RAG pipelines. By hiring a LangChain expert from us, you get a developer who can transform your LLM concepts into production-ready, high-value AI applications.",
      pains: [
          {
              icon: AlertTriangle,
              pain: "Are your RAG results inaccurate or irrelevant?",
              problem: "A naive RAG implementation often retrieves irrelevant documents, causing the LLM to hallucinate or provide incorrect answers. This stems from a poor understanding of text chunking, embedding models, and retrieval strategies.",
              solution: "We vet for mastery of the **RAG pipeline**. Our experts must demonstrate proficiency in advanced chunking strategies, choosing the right embedding models, and implementing sophisticated retrieval techniques (e.g., HyDE, multi-query retriever) to ensure high-quality, relevant results.",
              kpi: "RAG Pipeline Optimization and Accuracy"
          },
          {
              icon: AlertTriangle,
              pain: "Is your LLM application a single, monolithic prompt?",
              problem: "Attempting to solve a complex problem with a single, massive prompt is brittle and hard to debug. This approach fails to break down the problem into logical, manageable steps, leading to unpredictable and inconsistent LLM behavior.",
              solution: "Our engineers are experts in **LangChain Expression Language (LCEL)**. They are vetted on their ability to build complex, modular chains by composing smaller, reusable components, ensuring the logic is clear, testable, and easy to maintain.",
              kpi: "Mastery of LCEL and Composable Chains"
          },
          {
              icon: AlertTriangle,
              pain: "Is your application unable to interact with external tools and APIs?",
              problem: "LLMs are powerful but are limited by their training data. Without the ability to interact with external systems, your AI application cannot access real-time information, perform actions, or integrate with your existing business logic.",
              solution: "We look for engineers proficient in building **LangChain Agents and Tools**. They are vetted on their ability to define custom tools that allow the LLM to securely interact with any API or data source, transforming it from a simple text generator into a powerful, autonomous agent.",
              kpi: "Custom Agent and Tool Development"
          }
      ],
      evaluation: ['LangChain Expression Language (LCEL) and chain composition', 'Retrieval-Augmented Generation (RAG) architecture', 'Agent and Tool creation for external API interaction', 'Vector database integration (pgvector, Pinecone, Weaviate)', 'Model evaluation and debugging (LangSmith)'],
      technical_analysis: "The LangChain evaluation focuses on a candidate's ability to build complex, data-aware LLM applications. The critical assessment is their mastery of **RAG architecture**: candidates must design a complete RAG pipeline, including choosing appropriate chunking strategies, embedding models, and vector stores, and then implement advanced retrieval methods to improve accuracy. We rigorously test their understanding of **LangChain Expression Language (LCEL)** by requiring them to build a complex, branching chain of runnable components, demonstrating their ability to compose and debug asynchronous data flows. For agentic behavior, we assess their proficiency in creating custom **Tools** that securely interact with external APIs, and in using those tools within a ReAct-style Agent. Finally, we test their knowledge of the LangChain ecosystem, including their ability to use LangSmith for tracing, debugging, and evaluating the performance of their LLM chains.",
      interlink_slugs: ['python', 'llms', 'data-engineering', 'pgvector']
    },
    'python': { 
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
  };
  
  export function getAllTechSlugs(): string[] {
      return Object.keys(allTech);
  }
    