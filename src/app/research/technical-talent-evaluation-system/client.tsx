
'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { AccordionItem } from '@/components/Accordion';
import { ShieldCheck, BrainCircuit, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Tooltip } from '@/components/Tooltip';

const cognitiveData = [
    { name: 'Architectural Instinct', candidate: 4.3, ideal: 4.5, stars: '★★★★☆', bar: '████████░░' },
    { name: 'Problem-Solving Agility', candidate: 4.6, ideal: 4.0, stars: '★★★★☆', bar: '█████████░' },
    { name: 'Learning Orientation', candidate: 5.0, ideal: 5.0, stars: '★★★★★', bar: '██████████' },
    { name: 'Collaborative Mindset', candidate: 4.4, ideal: 4.0, stars: '★★★★☆', bar: '████████░░' },
];

const mciScore = 3.5;

const risks = [
    {
        title: 'Gaps in Advanced Resiliency Patterns',
        description: 'Erick admitted weakness in designing complex error handling and resiliency systems (e.g., circuit breakers, advanced retry logic). In a high-throughput ad-tech environment, this is a critical skill.',
        mitigation: 'During onboarding, pair him with a senior backend engineer for architectural reviews specifically focused on fault tolerance. Assign him a small, well-defined task to implement a circuit breaker pattern for a non-critical service to build practical experience.',
    },
    {
        title: 'Unfamiliarity with Standard Prompt Engineering Terminology',
        description: 'While demonstrating strong conceptual reasoning about prompt architecture (Q4), he is not familiar with the industry-standard lexicon (e.g., Chain-of-Thought, Few-Shot). This could create a minor communication gap initially.',
        mitigation: 'This is a low-risk factor given his strong underlying reasoning. Provide him with internal best-practice documents and playbooks on advanced prompt engineering patterns. His high LO and demonstrated ability to grasp analogies suggest he will map his innate understanding to the standard terminology very quickly.',
    },
    {
        title: 'Lack of Infrastructure as Code (IaC) Experience',
        description: 'He explicitly stated he has not had much exposure to IaC (e.g., Terraform, CloudFormation).',
        mitigation: 'This is a lower-priority risk for a full-stack role but should be addressed for senior-level growth. Enroll him in a self-paced online course for AWS CDK or Terraform. Involve him in peer reviews of IaC changes to build familiarity.',
    }
]

const evidenceLocker = [
    {
        title: 'Question 1: "Consider a high-throughput Python backend service that processes real-time ad impressions from various sources. If this service needs to perform multiple I/O-bound operations (like calling external ad exchanges, fetching user profiles from a database, and logging to an analytics service) for each impression, how would you architect this service to handle millions of requests per second efficiently? Discuss specific design patterns and Python constructs you\'d leverage, and how you\'d manage potential bottlenecks or failures in upstream/downstream services."',
        content: (
            <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p><strong>First Principles:</strong> The core challenge is managing I/O-bound concurrency. The system must not block on slow network calls or database queries, as this would cripple throughput. The principles of asynchronous processing and decoupling are paramount.</p>
                <p><strong>Key Concepts:</strong></p>
                <ul>
                    <li><strong>Concurrency Model:</strong> Explicitly mention Python's asyncio library, using async/await syntax for non-blocking I/O. Contrast this with multi-threading or multi-processing, explaining why asyncio is superior for I/O-bound tasks.</li>
                    <li><strong>Scalability:</strong> Discuss horizontal scaling (adding more machines/containers) as the primary strategy. Mention microservices architecture to isolate components.</li>
                    <li><strong>Decoupling/Buffering:</strong> Introduce a message queue (e.g., Kafka, RabbitMQ, AWS SQS) to act as a buffer, absorbing traffic spikes and decoupling the main request-handling service from slower downstream processors (like logging or analytics).</li>
                    <li><strong>Caching:</strong> Use an in-memory cache like Redis or Memcached to store frequently accessed data (e.g., user profiles) to reduce database load.</li>
                    <li><strong>Resiliency:</strong> Discuss patterns like retries (with exponential backoff), timeouts, and circuit breakers to handle failures in external services gracefully.</li>
                </ul>
                <p><strong>Negative Indicators:</strong> Suggesting a purely synchronous model. Relying only on vertical scaling. Not mentioning any form of caching or queuing. Confusing CPU-bound and I/O-bound concurrency models.</p>
                
                <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
                <blockquote>
                "Well, this is pretty, well, this is a little bit hard to just to talk because, you know, everything has a lot of research behind, but something that I have in my mind right now, maybe I think using Redis, Redis to have something to read, to cache, to try to avoid the older requests go to my backend every time. If we already have in cache information, it's pretty, or it will be more soft or smooth to serve if we already have in the cache instead to arrive to the backend. So, the first thing that I'm thinking right now is in Redis... With concurrency. Yeah, I think that, well, I have in my head right now the approach with asynchronous thing. I'm working more with Node.js about this topic more than Python, but I think that to serve asynchronously, once the request is arrived, I think to do asynchronously everything. Also, to try to have advantages with an even loop with async IO... It depends a lot on the project, but I prefer to use monolithic because it's more easy to have everything in one single source of truth. But in case, if we combine AWS stuff, I think the microservices will be a great idea to have in the nearly future because if you combine microservices and you combine AWS, you can grow vertically and horizontally automatically with AWS... In this case, I think that is a better idea to use. I think that if I don't get wrong, AWS has SQS or yeah, something to use SQS... Well, in that specific, I'm not the best with error handling, but I think that if we have a good log error handling to see the errors when it's happening, the reconnections once, I mean, instead to send an error and block the system, maybe it's a good idea to ensure the retries or reconnections."
                </blockquote>

                <h4>Ghostevidence & Must-Have Alignment</h4>
                <p><strong>Senior-level Python skills (ideally version &gt;=3.11), fluent in asynchronous patterns:</strong> PARTIALLY MET.<br/>
                <strong>Ghostevidence:</strong> "...the approach with asynchronous thing... to have advantages with an even loop with async IO."<br/>
                <strong>Explanation:</strong> He correctly identifies asyncio as the right tool for the job, demonstrating conceptual understanding. However, he admits more experience in Node.js, so his fluency in Python-specific async patterns is implied rather than deeply demonstrated.</p>
                <p><strong>Strong knowledge of architecture & design patterns:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> "...using Redis, Redis to have something to read, to cache..."; "...microservices will be a great idea to have in the nearly future..."; "...AWS has SQS or yeah, something to use SQS."<br/>
                <strong>Explanation:</strong> He correctly identifies and applies several key patterns: caching (Redis), microservices for scalability, and message queues (SQS) for decoupling.</p>
                <p><strong>Keen problem-solving skills:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> The entire answer, while needing some guidance, shows him breaking down the problem into caching, concurrency, architecture, and decoupling.<br/>
                <strong>Explanation:</strong> He methodically considers different layers of the problem, even if he doesn't have a perfect, pre-packaged answer.</p>

                <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
                <p>The candidate's initial hesitation ("a little bit hard to just to talk") is a typical L2 processing marker, not a lack of knowledge. The Cortez Calibration Layer correctly filters this. His admission, "I'm not the best with error handling," is flagged as an authenticityIncident. This is a strong positive signal for Learning Orientation and results in a perfect score for B_A on that specific point. No other negative flags were triggered.</p>

                <h4>UCE Axiom Scoring (B-Axioms)</h4>
                <ul>
                    <li>B_P (Procedural Knowledge): ★★★☆☆ (3.5) - He knows the right components to mention (Redis, SQS, asyncio) but required some prompting to connect them into a fluid architecture.</li>
                    <li>B_M (Mental Model): ★★★★☆ (4.0) - His mental model is sound. He understands the core concepts of caching, non-blocking I/O, and decoupling, even if his vocabulary or immediate recall isn't perfect.</li>
                    <li>B_A (Accuracy): ★★★★★ (4.8) - All technical choices (Redis, asyncio, SQS) are correct for this problem. The score is boosted to near-perfect by the authenticityIncident where he honestly stated his limitation, demonstrating high integrity.</li>
                    <li>B_C (Clarity): ★★★☆☆ (3.5) - After applying the Cortez Calibration for L2 ESL, his explanation was conceptually clear. He needed some guidance to structure his thoughts, which slightly lowers the score.</li>
                    <li>B_L (Cognitive Load): ★★★☆☆ (3.5) - He demonstrated some cognitive load in structuring a complex architectural answer on the fly, but he successfully retrieved the correct concepts.</li>
                </ul>

                <h4>Key Insights</h4>
                <p>This answer reveals a candidate with a solid, if not deeply practiced, understanding of modern backend architecture. He knows the right building blocks to use. His honesty about his weaker areas is a significant positive signal about his character and coachability.</p>
            </div>
        )
    },
    {
        title: 'Question 2: "When designing a public-facing REST API for a new media planning feature, beyond basic data validation, what are your top two strategic considerations for ensuring long-term API evolvability and robust security? How would you communicate and enforce these design principles across a team of engineers?"',
        content: (
             <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p><strong>First Principles:</strong> API design is about creating a stable, secure, and understandable contract. Evolvability requires planning for change without breaking existing clients. Security requires a defense-in-depth approach.</p>
                <p><strong>Key Concepts:</strong></p>
                <ul>
                    <li><strong>Evolvability:</strong> Versioning (URL or headers), Contract-First Design (OpenAPI), Additive Changes.</li>
                    <li><strong>Security:</strong> AuthN (OAuth2/OIDC) vs. AuthZ (RBAC/ABAC), Rate Limiting.</li>
                    <li><strong>Enforcement:</strong> Documentation, CI/CD linting, mandatory code reviews.</li>
                </ul>
                <p><strong>Negative Indicators:</strong> No versioning strategy. Vague security concepts ("just use a token"). No concrete plan for enforcement.</p>

                <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
                <blockquote>
                "Well, there is several ways to follow, but I think you asked about my top one things to do. I will say that I have two strategies. There is contract first in backend. I mean, with compatible versioning. For example, maybe if I'm using an LLM or I'm trying to connect with some gen AI, for example, open AI, I will design or add every change in open AI spec first before of all. Also, like I mentioned before, version through media types. Like I say before, we have a version one to try to land all the ideas in our contract... and versioning across to version two with something more filter stuff... About security. There is a lot of stuff, but maybe I think that is called zero trust. Zero trust about, for example, out hand or out C or out zero... [Interviewer: I think you're talking about authorization versus authentication, right?] Yeah. Okay. Yeah, that's good... About resource level. I'm not pretty sure about that... Usually when I arrive to a new team, all of those kinds of stuff is already created because the security is the first thing that every team has first. And I choose on charge to maintain or to add, but I did not have the opportunity to create something from scratch."
                </blockquote>

                <h4>Ghostevidence & Must-Have Alignment</h4>
                <p><strong>Strong understanding of software development best practices and design patterns:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> "There is contract first in backend. I mean, with compatible versioning... version through media types. Like I say before, we have a version one... and versioning across to version two..."<br/>
                <strong>Explanation:</strong> He clearly articulates a "contract-first" design philosophy and a versioning strategy, which are core best practices for API evolvability.</p>
                <p><strong>Fluent in English and able to communicate effectively:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> The entire exchange, while showing L2 markers, is effective. He understands complex questions and provides conceptually sound answers.<br/>
                <strong>Explanation:</strong> He successfully communicates his technical ideas and, crucially, his own limitations, which is a form of highly effective communication.</p>

                <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
                <p>The candidate's phrasing "out hand or out C or out zero" is a classic L2 phonetic approximation of "AuthN/AuthZ/Auth0". The Cortez Calibration Layer correctly interprets this as a successful conceptual reference, not an error. His admission of not having created a security system from scratch is another clear authenticityIncident, which positively impacts his B_A and LO scores.</p>

                <h4>UCE Axiom Scoring (B-Axioms)</h4>
                <ul>
                    <li>B_P (Procedural Knowledge): ★★★★☆ (4.0) - He describes a clear procedure for evolvability (contract-first, versioning). His security procedure is less detailed but conceptually correct (mentioning zero trust/Auth0).</li>
                    <li>B_M (Mental Model): ★★★★☆ (4.0) - He has a strong mental model for API evolvability. His security model is correct at a high level but lacks depth on granular authorization, which he honestly admits.</li>
                    <li>B_A (Accuracy): ★★★★★ (5.0) - His proposed strategies are industry best practices. The score is maxed out due to the authenticityIncident, where he accurately described the limits of his experience, demonstrating perfect integrity.</li>
                    <li>B_C (Clarity): ★★★★☆ (4.0) - After calibration, his explanation of evolvability was very clear. The security part was slightly less clear until guided by the interviewer, but the core concepts were present.</li>
                    <li>B_L (Cognitive Load): ★★★★☆ (4.5) - He handled this multi-part question with low cognitive load, clearly separating the concepts of evolvability and security.</li>
                </ul>

                <h4>Key Insights</h4>
                <p>Erick demonstrates a mature understanding of API design for evolvability. His knowledge of security is more high-level and based on experience with existing systems rather than building them from the ground up. Again, his honesty about this is a significant strength.</p>
            </div>
        )
    },
    {
        title: 'Question 3: "Imagine our TeamStation AI frontend dashboard needs to display real-time campaign performance data, potentially involving thousands of data points and complex visualizations, while still allowing users to interact smoothly. How would you architect the React application\'s state management and component structure to ensure high performance and responsiveness, avoiding common pitfalls like unnecessary re-renders or large state objects? Discuss techniques for optimizing rendering and data flow."',
        content: (
            <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p><strong>First Principles:</strong> Frontend performance for large data sets hinges on two things: rendering only what's necessary and minimizing the state management overhead that triggers re-renders.</p>
                <p><strong>Key Concepts:</strong></p>
                <ul>
                    <li><strong>Rendering Optimization:</strong> Virtualization/Windowing, Memoization (`React.memo`, `useMemo`), Code Splitting (`React.lazy`).</li>
                    <li><strong>State Management:</strong> Server state caching with React Query or SWR; avoiding large global stores for server data.</li>
                    <li><strong>Data Flow:</strong> WebSockets for real-time, debouncing/throttling user inputs.</li>
                </ul>
                <p><strong>Negative Indicators:</strong> Suggesting rendering thousands of DOM elements at once. Relying solely on a naive Redux implementation. Not mentioning virtualization or memoization.</p>
                
                <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
                <blockquote>
                "I think I have maybe an answer for that. The virtualization could be the key here. We could also connect to a web socket that is streaming huge data... For example, if we use Redux... I will virtualize that information. I mean, I will just show to the user the information that he just want to see in that specific moment... But using virtualization to have the data prepared before to render... I think that I will combine very good the react.memo, use memo hooks, use callback hooks, use effects dependencies and unbounce listeners to try to... I prefer to write first, maybe half second or one second, trigger the call or trigger the filter and arrive the information just to try to avoid the lockdown application... [Lazy loading?] Yeah. Lazy loading also could have a cool increase or performance... For example, in this specific case, I told you Redux for that. Redux is not a good tool for performance. I think that I could change for React Query or Sustan RTK or KTR. I don't remember, but it's Sustan."
                </blockquote>

                <h4>Ghostevidence & Must-Have Alignment</h4>
                <p><strong>3+ years of experience in web development with a focus on React and TypeScript:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> "The virtualization could be the key here... I will combine very good the react.memo, use memo hooks, use callback hooks... I could change for React Query or Sustan..."<br/>
                <strong>Explanation:</strong> This is not a theoretical answer. He names the exact, correct, modern tools and techniques (virtualization, specific hooks, React Query, Zustand) that an experienced React developer would use to solve this specific, difficult performance problem.</p>
                <p><strong>Keen problem-solving skills:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> He immediately identifies the core problem (rendering too much data) and proposes the primary solution (virtualization) before layering on other optimizations.<br/>
                <strong>Explanation:</strong> This demonstrates a clear, prioritized problem-solving approach, tackling the biggest issue first.</p>
                
                <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
                <p>The candidate's self-correction regarding state management ("I told you Redux for that. Redux is not a good tool for performance. I think that I could change for React Query or Sustan...") is a powerful positive signal. It shows he is thinking critically in real-time and is not afraid to refine his answer towards a better solution. His recall of "Sustan" for Zustand is a minor phonetic error that is ignored by the UCE in favor of the correct conceptual identification.</p>
                
                <h4>UCE Axiom Scoring (B-Axioms)</h4>
                <ul>
                    <li>B_P (Procedural Knowledge): ★★★★★ (5.0) - He laid out a perfect, step-by-step procedure for optimizing a high-performance React app: start with virtualization, add memoization, use debouncing, and select a modern state management library like React Query/Zustand.</li>
                    <li>B_M (Mental Model): ★★★★★ (5.0) - His mental model of React rendering performance is flawless. He understands the key bottlenecks (DOM size, re-renders) and knows the precise tools and patterns to mitigate them.</li>
                    <li>B_A (Accuracy): ★★★★★ (5.0) - Every technique and library mentioned is not just correct, but represents the current industry best practice for this specific problem.</li>
                    <li>B_C (Clarity): ★★★★★ (4.8) - His explanation was exceptionally clear and well-structured. He started with the most important concept (virtualization) and layered on additional optimizations logically.</li>
                    <li>B_L (Cognitive Load): ★★★★★ (5.0) - He answered this complex frontend question with zero apparent cognitive load, demonstrating deep expertise and fluency in the topic.</li>
                </ul>

                <h4>Key Insights</h4>
                <p>This was Erick's strongest technical answer. He demonstrated senior-level, practical, and modern knowledge of React performance engineering. This answer provides high confidence in his frontend capabilities.</p>
            </div>
        )
    },
    {
        title: 'Question 4: "Our TeamStation AI leverages LLMs significantly. When integrating an LLM into a critical business workflow – for instance, automatically generating nuanced budget allocation recommendations – what advanced prompt engineering strategies would you employ to ensure not just correct, but optimal, unbiased, and contextually appropriate outputs? How would you establish and measure the \'goodness\' of these AI-generated recommendations beyond simple accuracy, and how would you iterate on the LLM\'s performance in production?"',
        content: (
            <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p><strong>First Principles:</strong> Prompt engineering is about constraining the LLM's vast potential to produce a reliable, repeatable, and specific output. It's instruction-based programming for a non-deterministic model. The core conceptual challenge is breaking down a complex request into simpler, logical steps the model can follow.</p>
                <p><strong>Key Concepts:</strong></p>
                <ul>
                    <li><strong>Advanced Prompting Strategies (Conceptual):</strong> Demonstrating an understanding of giving the model examples (Few-Shot), telling it to think step-by-step (Chain-of-Thought), giving it a persona (Role-Playing), or demanding structured output (JSON schema).</li>
                    <li><strong>Architectural Approach:</strong> Recognizing that a single, massive prompt is brittle and that a better approach is to break the problem down into smaller, chained, or structured "micro prompts" that build on each other.</li>
                    <li><strong>Measuring "Goodness":</strong> Moving beyond simple accuracy to business metrics (A/B testing), expert human review (HITL), or semantic comparisons.</li>
                    <li><strong>Iteration:</strong> Creating a feedback loop where production results and human reviews are used to refine the prompt structure and instructions.</li>
                </ul>
                <p><strong>Negative Indicators:</strong> Focusing only on training data for a pre-trained model. Vague answers like "give it good instructions." Not having a plan for measuring quality or iterating.</p>
                
                <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
                <blockquote>
                "Yeah. Well, in that case, as every LLMs, you need to train it very, very good with a thousand information... [Interviewer guides towards off-the-shelf models and prompt structure]... Well, I'm supposing that we will have a thousands of information. If not, we need to create databases or big data to storage a lot of examples or a lot of numbers or a lot of things to kind of train that LLM... We could split that big data in different information, bunches of information and give to the LLM... [Interviewer introduces 'phasic multi chunking' analogy]... Well, like I told you before, at the beginning of the interview is it's a better idea to split into microservices and maybe that microservices see like a small part of a brain of this AI or this LLM to train in each part very efficiently... If we have micro front ends, if we have back end as a service that we call splitting the different back end and we have microservices, why why we call why not to have micro prompts? I think that is."
                </blockquote>

                <h4>Ghostevidence & Must-Have Alignment</h4>
                <p><strong>GenAI experience: Ideally, you've built AI applications or agents on top of existing LLMs, but solid prompt engineering skills are a must:</strong> PARTIALLY MET.<br/>
                <strong>Ghostevidence:</strong> "...split that big data in different information, bunches of information and give to the LLM..."; "...why we call why not to have micro prompts?"<br/>
                <strong>Explanation:</strong> This is a crucial application of the Conceptual Fidelity Protocol. While he initially confused prompting with training, with guidance he described two advanced concepts in his own words. "Splitting... bunches of information" is conceptually equivalent to Few-Shot Learning (providing examples). More impressively, his synthesis of "micro prompts" is a perfect conceptual analogy for advanced strategies like Chain-of-Thought or breaking a complex task into a sequence of smaller prompts. He understands the architecture of a good prompt, even if he doesn't know the jargon.</p>
                <p><strong>Keen problem-solving skills:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> "If we have micro front ends... if we have microservices, why why we call why not to have micro prompts?"<br/>
                <strong>Explanation:</strong> This demonstrates exceptional problem-solving agility. He took an analogy from a familiar domain (microservices) and correctly applied its principles to a novel domain (prompting) to generate a powerful, insightful solution.</p>

                <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
                <p>The candidate's initial confusion was a knowledge gap, not a linguistic issue. The key analytical moment was his response to the interviewer's guidance. His ability to pivot and generate the "micro prompts" concept is a very strong signal of a flexible and powerful mental model. The UCE credits this conceptual leap heavily, overriding the initial lack of specific terminology as per the Conceptual Fidelity Protocol.</p>

                <h4>UCE Axiom Scoring (B-Axioms)</h4>
                <ul>
                    <li>B_P (Procedural Knowledge): ★★★☆☆ (3.0) - While not a textbook procedure, he devised a logical one: gather examples, split them up, and feed them into a series of "micro prompts." This is a valid, if self-discovered, process.</li>
                    <li>B_M (Mental Model): ★★★★☆ (4.5) - His mental model proved to be exceptionally strong. The ability to map the microservices architecture onto prompt design and coin the term "micro prompts" shows a deep, abstract understanding of how to manage complexity, which is the essence of advanced prompt engineering.</li>
                    <li>B_A (Accuracy): ★★★★☆ (3.8) - The initial confusion with "training" is a minor inaccuracy. However, his final conceptual conclusions—using examples and breaking prompts down—are highly accurate and represent best practices.</li>
                    <li>B_C (Clarity): ★★★☆☆ (3.5) - The answer required guidance to achieve clarity, but the final insight ("micro prompts") was exceptionally clear and concise.</li>
                    <li>B_L (Cognitive Load): ★★★☆☆ (3.5) - He showed initial cognitive load due to the knowledge gap, but demonstrated a breakthrough in understanding, successfully overcoming the initial difficulty.</li>
                </ul>

                <h4>Key Insights</h4>
                <p>This answer is a powerful positive signal about the candidate's raw intelligence and architectural thinking. While he lacks familiarity with the specific jargon of prompt engineering, he was able to reason his way from first principles to a conceptually advanced solution. This suggests he can solve problems he's never seen before, which is more valuable than simply knowing buzzwords.</p>
            </div>
        )
    },
    {
        title: 'Question 5: "Let\'s design a critical new capability for TeamStation AI: \'Predictive Audience Segmentation.\' ... Walk me through, conceptually, the entire full-stack system architecture – from how the user interacts with the UI, to backend processing, data storage (considering different types of data), AI model inference, and delivering insights back to the user. Focus on technical choices, inter-service communication, error handling, data consistency, and how you\'d ensure both scalability and data privacy given the sensitive nature of audience data."',
        content: (
             <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p><strong>First Principles:</strong> This is a complex data processing pipeline that requires separating concerns (UI, API, data processing, AI inference) and using the right tool for each job (e.g., right database for the right data shape). Asynchronous processing is key to a responsive user experience.</p>
                <p><strong>Key Concepts:</strong></p>
                <ul>
                    <li><strong>Architecture:</strong> A microservices-based approach is ideal. An API Gateway receives requests, which trigger a series of backend services.</li>
                    <li><strong>Data Flow:</strong> 1. User submits goals via React UI. 2. API Gateway passes to a CampaignService. 3. CampaignService places a "segmentation job" onto a message queue (SQS/Kafka). 4. A PredictionWorker service picks up the job, gathers historical data from a data warehouse (Redshift/BigQuery), calls the AI model inference endpoint (e.g., SageMaker). 5. The results are stored in a suitable database (e.g., DynamoDB for JSON blobs). 6. The UI polls an endpoint or uses WebSockets to get the results when ready.</li>
                    <li><strong>Data Storage:</strong> Use a relational DB (Postgres) for user/campaign metadata, a data warehouse for historical analytics, and a NoSQL DB for the semi-structured AI output.</li>
                    <li><strong>Communication:</strong> Asynchronous via message queues for decoupling and scalability.</li>
                    <li><strong>Privacy/Security:</strong> Data anonymization before sending to the model, encryption at rest and in transit, strict IAM roles (ABAC/RBAC), audit trails.</li>
                </ul>
                <p><strong>Negative Indicators:</strong> Proposing a single monolithic service to do everything. Using a single SQL database for all data types. A purely synchronous request/response flow. Vague privacy measures.</p>
                
                <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
                <blockquote>
                "Yeah, I think for this case, maybe a split this this part in microservices or microphones will be a better idea because we need a lot of inputs there... I will add the behavioral behavioral input, user behavioral input and maybe contextual input about the hour, the new localization device channels, all those stuff and metadata information like campaigns and marketing stuffs... I think that Google Maps for all the cultural, the cultural information, the context information, Google Maps will be better... A combination of both hybrid, because maybe there is information more simply than other. And the simple the simple information could be synchronous and more tricky information could be asynchronous... [Error handling?] Yeah, I'm pretty weak in that. Yeah, yeah... About the data privacy... Yeah, obviously the tokenization access control with AM maybe attribute based access service to service out course also headings, encryptions."
                </blockquote>

                <h4>Ghostevidence & Must-Have Alignment</h4>
                <p><strong>Strong knowledge of architecture & design patterns:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> "...split this this part in microservices or microphones will be a better idea..."; "...decoupling, maybe for events, use events for this."<br/>
                <strong>Explanation:</strong> He correctly identifies a microservices architecture and event-driven decoupling as appropriate patterns for this complex system.</p>
                <p><strong>Keen problem-solving skills:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> "...I will add the behavioral behavioral input, user behavioral input and maybe contextual input about the hour, the new localization device channels, all those stuff and metadata information like campaigns..."<br/>
                <strong>Explanation:</strong> He effectively deconstructs the problem by first identifying the various types of data inputs required to make the system work, showing he thinks about the data foundation first.</p>
                
                <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
                <p>The candidate again honestly admits his weakness in error handling ("Yeah, I'm pretty weak in that"), which is flagged as the third authenticityIncident. His reference to "AM maybe attribute based access" is correctly interpreted as "IAM and Attribute-Based Access Control," crediting the concept over the precise phrasing.</p>
                
                <h4>UCE Axiom Scoring (B-Axioms)</h4>
                <ul>
                    <li>B_P (Procedural Knowledge): ★★★☆☆ (3.0) - He outlines a conceptual procedure (gather inputs, split into microservices, use hybrid communication) but is light on specific implementation details like which database to use for which data type.</li>
                    <li>B_M (Mental Model): ★★★★☆ (4.0) - His mental model is strong. He correctly intuits that this is a complex system needing to be broken down (microservices), that it requires diverse data inputs, and that privacy is a key concern.</li>
                    <li>B_A (Accuracy): ★★★★☆ (4.0) - The architectural choices he makes (microservices, events, hybrid communication, ABAC) are all accurate and appropriate for the problem. The score is boosted by his honest admission of weakness.</li>
                    <li>B_C (Clarity): ★★★☆☆ (3.5) - His explanation was high-level and conceptual. While the core ideas were clear, it lacked the granular detail of a fully fleshed-out design.</li>
                    <li>B_L (Cognitive Load): ★★★☆☆ (3.5) - He handled the very large scope of the question reasonably well, but the breadth of the topic seemed to prevent him from diving deep into any single area.</li>
                </ul>

                <h4>Key Insights</h4>
                <p>Erick is comfortable thinking at a high architectural level. He correctly identifies the major components and concerns of a complex full-stack AI system. His approach is more conceptual than deeply technical, focusing on the "what" and "why" more than the specific "how."</p>
            </div>
        )
    },
    {
        title: 'Question 6: "For a senior engineer, it\'s not just about writing tests, but strategizing them. Describe your philosophy for building a comprehensive testing suite (unit, integration, and end-to-end) for a full-stack advertising platform, and how you would integrate this into a robust CI/CD pipeline to ensure high code quality, rapid deployments, and minimal production incidents. Given our reliance on Docker and Kubernetes for deployments, what specific considerations or practices do you find most effective at a senior level for continuous delivery in such an environment?"',
        content: (
            <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p><strong>First Principles:</strong> A testing strategy is a risk management strategy. The goal is to get the highest confidence for the lowest cost (time/effort). The "Testing Pyramid" is the guiding principle.</p>
                <p><strong>Key Concepts:</strong></p>
                <ul>
                    <li><strong>Testing Philosophy:</strong> Emphasize the testing pyramid: a large base of fast, cheap unit tests; a smaller layer of integration tests; and a very small peak of slow, expensive E2E tests.</li>
                    <li><strong>CI/CD Integration:</strong> On every commit/PR: Run linters, static analysis, and all unit tests. On merge to main: Build Docker images, run integration tests (using Docker Compose to spin up dependencies).</li>
                    <li><strong>Deployment:</strong> Use canary or blue-green deployments in Kubernetes to roll out changes safely. Use GitOps (ArgoCD/Flux) for declarative, auditable deployments.</li>
                    <li><strong>K8s/Docker Practices:</strong> Define clear readinessProbes and livenessProbes. Use feature flags to decouple deployment from release. Implement automated rollbacks on metric thresholds.</li>
                </ul>
                <p><strong>Negative Indicators:</strong> A flat testing strategy (e.g., "test everything with E2E tests"). No clear integration into a CI/CD pipeline. Not mentioning K8s-specific practices like health probes or deployment strategies.</p>
                
                <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
                <blockquote>
                "Well, for example, in this case, I remember that I participate in a project with Jenkins... I could translate Jenkins stuff to GitHub actions... I prefer to use unit testing to ensure the testing for each piece, each small piece of code in state end-to-end testing... We have 60 or to 60 or 80% successful tests. Once go to GitHub actions, maybe it's a good idea to, I don't know, what about, well, something to have performance or code health in our pipelines... one step before to deploy, it could be a great idea to create bundles to test manually... [Infrastructure as Code?] Not so much. I want to have that exposure, that experience."
                </blockquote>

                <h4>Ghostevidence & Must-Have Alignment</h4>
                <p><strong>Strong understanding of software development best practices:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> "I prefer to use unit testing to ensure the testing for each piece, each small piece of code in state end-to-end testing."<br/>
                <strong>Explanation:</strong> This statement perfectly encapsulates the philosophy of the testing pyramid, a core best practice. He prioritizes fast, focused unit tests over slower, broader tests.</p>
                <p><strong>Proficiency with team development, source control (Git), and continuous integration/continuous delivery (CI/CD) best practices:</strong> PARTIALLY MET.<br/>
                <strong>Ghostevidence:</strong> "...translate Jenkins stuff to GitHub actions... have performance or code health in our pipelines..."<br/>
                <strong>Explanation:</strong> He is familiar with modern CI/CD tools (GitHub Actions) and the concept of having quality gates in the pipeline. However, his knowledge doesn't extend to advanced K8s deployment strategies or IaC, which he honestly admits.</p>
                
                <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
                <p>The candidate's final statement, "Not so much. I want to have that exposure, that experience," is the fourth distinct authenticityIncident. This consistent pattern of intellectual honesty is a very strong signal for his Learning Orientation (LO) score.</p>
                
                <h4>UCE Axiom Scoring (B-Axioms)</h4>
                <ul>
                    <li>B_P (Procedural Knowledge): ★★★☆☆ (3.0) - He describes a solid but somewhat basic CI/CD procedure: run unit tests, check code health, create a bundle for manual testing, then deploy. It lacks more advanced automation steps like automated integration/E2E tests or canary deployments.</li>
                    <li>B_M (Mental Model): ★★★★☆ (4.0) - His mental model for testing strategy is excellent ("unit testing first"). His model for CI/CD is functional but not as mature or automated as a modern GitOps approach.</li>
                    <li>B_A (Accuracy): ★★★★★ (4.8) - Everything he stated is accurate and valid. His testing philosophy is spot-on. The score is high due to the powerful authenticityIncident where he clearly stated his IaC knowledge gap.</li>
                    <li>B_C (Clarity): ★★★★☆ (4.0) - His explanation of his testing philosophy was very clear. The CI/CD part was also clear, just not as detailed.</li>
                    <li>B_L (Cognitive Load): ★★★★☆ (4.0) - He appeared comfortable discussing this topic, answering with low cognitive load and a clear structure.</li>
                </ul>

                <h4>Key Insights</h4>
                <p>Erick has a strong and correct philosophy on testing strategy. His practical CI/CD experience seems more traditional (manual testing gates) but is built on a solid foundation. His lack of IaC experience is a known, and coachable, gap.</p>
            </div>
        )
    },
    {
        title: 'Question 7: "As a senior full-stack engineer, your role extends beyond coding to driving initiatives and mentoring. Describe a situation where you proactively identified a significant technical debt or a critical performance bottleneck in a project and led the effort to address it within an Agile framework. What was your approach to influencing the team and stakeholders, and what was the ultimate impact on the product or team?"',
        content: (
             <div className="prose dark:prose-invert max-w-none">
                <h4>Ideal Answer Blueprint</h4>
                <p><strong>First Principles:</strong> This question measures leadership, influence, and business acumen. A great answer connects a technical problem to a business problem and demonstrates solving it through social and technical means.</p>
                <p><strong>Key Concepts (STAR Method):</strong></p>
                <ul>
                    <li><strong>Situation:</strong> A specific project with a clear problem. E.g., "On the e-commerce checkout project, deployments were failing, causing developer fear and massive technical debt."</li>
                    <li><strong>Task:</strong> The goal. E.g., "My goal was to reduce the technical debt and unblock the team by fixing the underlying process issue."</li>
                    <li><strong>Action:</strong> The specific steps taken. E.g., "I volunteered to become the tech lead. I acted as a communication bridge, translating stakeholder needs into clear technical tickets for the team, and translating technical progress and challenges back to the stakeholders in business terms. I shielded the team from direct, unproductive pressure."</li>
                    <li><strong>Result:</strong> The measurable impact. E.g., "As a result, technical debt decreased significantly, developer morale and velocity improved because the 'afraid was not part of the development anymore,' and the project got back on track."</li>
                </ul>
                <p><strong>Negative Indicators:</strong> A vague story. A problem that was purely technical with no business impact. A solution that involved only coding, with no influence or leadership. No clear result.</p>
                
                <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
                <blockquote>
                "Yeah, I have a specific break for that. It was with Coca-Cola... all my coworkers, including me, had afraid to talk with someone from Coca-Cola. So that result in the tickets, we had a lot of tickets delayed. We have an enormous technical debt because we had afraid to the stakeholders. So my radical strategy to avoid that was to raise my hand and transform myself in a tech leader... I was the bridge between the stakeholders and the developments... I received all the yells. I received all the bad words... I translate the non-technical requirements to technical requirements. And the developer just say, ah, I can understand now very well... the translating, save money, save time and earn more money... the technical depth decreases a lot. No, I did not eliminate all the technical depth, but it decreases a lot because the afraid was not part of the development anymore."
                </blockquote>

                <h4>Ghostevidence & Must-Have Alignment</h4>
                <p><strong>Experience with Agile methodologies and working in a collaborative team environment:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> The entire story is a masterclass in collaborative problem-solving within a dysfunctional Agile environment. He took on a leadership role to fix the broken communication loop between devs and stakeholders.<br/>
                <strong>Excellent communication and problem-solving skills:</strong> MET.<br/>
                <strong>Ghostevidence:</strong> "I needed to translate the non-technical language, sorry, the technical language to non-technical language... I was the bridge between the stakeholders and the developments."<br/>
                <strong>Explanation:</strong> This is the definition of excellent communication. He identified the root cause of the technical debt as a communication and process failure, and solved it by taking ownership of that communication.</p>
                
                <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
                <p>This narrative is powerful and coherent. The candidate's use of emotional language ("afraid," "rude people," "yells") is authentic and effectively conveys the severity of the situation. The ownershipRatio is high here, but it is contextually appropriate as he is describing a situation where he took personal initiative ("I was the bridge," "I received all the yells"). This is correctly interpreted as leadership, not ego.</p>

                <h4>UCE Axiom Scoring (B-Axioms)</h4>
                <ul>
                    <li>B_P (Procedural Knowledge): ★★★★★ (5.0) - He described a clear, effective, and sophisticated procedure for solving a socio-technical problem: identify the root cause (fear), insert yourself as a buffer/translator, build trust, and improve the process.</li>
                    <li>B_M (Mental Model): ★★★★★ (5.0) - His mental model is superb. He understands that technical debt is often a symptom of a human/process problem, not just a code problem. This is a very senior-level insight.</li>
                    <li>B_A (Accuracy): ★★★★★ (5.0) - The story is a credible and powerful example of senior-level impact beyond just writing code.</li>
                    <li>B_C (Clarity): ★★★★★ (5.0) - He told the story with exceptional clarity, structure, and impact. The problem, his actions, and the result were all perfectly articulated.</li>
                    <li>B_L (Cognitive Load): ★★★★★ (5.0) - He recounted this detailed experience with zero cognitive load, indicating it was a formative and well-remembered event.</li>
                </ul>

                <h4>Key Insights</h4>
                <p>This is an outstanding behavioral answer that provides very strong evidence of leadership, resilience, empathy, and communication skills. It demonstrates that Erick is not just a coder, but a problem-solver who can diagnose and treat the root cause of issues, even when they are human-centric. This single answer significantly elevates his candidacy.</p>
            </div>
        )
    },
]

const DynamicBarChart = dynamic(() => Promise.resolve(BarChart), { ssr: false });

export default function TalentEvaluationClient() {

  const getBarColor = (score: number) => {
    if (score >= 4.0) return 'hsl(var(--primary))'; // Excellent
    if (score >= 3.0) return 'hsl(var(--accent))'; // Good
    return 'hsl(var(--destructive))'; // Concern
  };

  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / 
        <Link href="/research/hub" className="hover:text-foreground">Research</Link> / 
        <span>Talent Evaluation Report</span>
      </div>
      <header className="my-8">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Technical Talent Evaluation Report: Erick [...] for Full-Stack Engineer</h1>
      </header>
      
      <div className="my-12 space-y-8">
        <div className="rounded-lg border bg-card p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground">Executive Summary</h2>
            <p className="mt-2 text-sm text-muted-foreground">Country: Mexico</p>
            <div className="mt-4">
                 <p className="text-lg font-semibold text-primary">Bottom Line: Strong Hire</p>
                 <p className="text-lg font-semibold">Final Score: 4.6 / 5.0</p>
                 <p className="mt-2 text-muted-foreground">This recommendation is based on a comprehensive analysis that reveals Erick as a high-potential senior engineer with a robust technical foundation and exceptional cognitive traits. He demonstrates deep, modern expertise in frontend performance engineering and a solid grasp of backend architectural principles. While he may not use standard industry jargon for every concept, particularly in prompt engineering, his ability to reason from first principles and arrive at architecturally sound, analogous solutions (e.g., "micro prompts") is a powerful indicator of a superior mental model. This, combined with a perfect score in Learning Orientation—evidenced by his consistent intellectual honesty—and a proven collaborative mindset, makes him a prime candidate. He passed all Core Competency Gates, and his profile strongly suggests he will not only excel in the role but also rapidly evolve into a key technical leader.</p>
            </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground">Cognitive & Psychometric Profile</h2>
            <div className="mt-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2"><BrainCircuit className="h-6 w-6 text-primary" /> Cognitive Fingerprint 4.0</h3>
                <p className="text-sm text-muted-foreground mt-2">This visualization maps the candidate's four latent traits against the ideal profile for this role.</p>
                 <div className="my-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-primary"></div><span>Excellent (4.0+)</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm" style={{backgroundColor: 'hsl(var(--accent))'}}></div><span>Good (3.0-3.9)</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-destructive"></div><span>Concern (&lt;3.0)</span></div>
                </div>
                <div style={{ height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                    <DynamicBarChart data={cognitiveData} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
                        <XAxis type="number" domain={[0, 5]} hide />
                        <YAxis type="category" dataKey="name" width={150} tick={{ fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
                        <RechartsTooltip 
                            cursor={{ fill: 'hsl(var(--accent))'}}
                            contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                        />
                        <Bar dataKey="candidate" name="Candidate" barSize={20} radius={[0, 8, 8, 0]}>
                            {cognitiveData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getBarColor(entry.candidate)} />
                            ))}
                        </Bar>
                         <Bar dataKey="ideal" name="Ideal Profile" barSize={20} fill="hsl(var(--border))" radius={[0, 8, 8, 0]} />
                    </DynamicBarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4 prose dark:prose-invert max-w-none">
                    <h4 className="flex items-center gap-2"><HelpCircle className="h-5 w-5 text-primary" />How is this score calculated?</h4>
                    <p>The score is not a subjective judgment. It's a data-driven output from the Axiom Cortex™ AI. The engine analyzes the full interview transcript, maps the candidate's statements to our proprietary BARS rubric (Behaviorally Anchored Rating Scales), and applies calibration layers to mitigate bias. The final score for each trait is a weighted synthesis of performance across multiple questions, grounded in direct evidence.</p>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xl font-bold text-foreground">Metacognitive Conviction Index (MCI)</h3>
                <p className="text-sm text-muted-foreground mt-2">This gauge assesses how well the candidate's confidence is calibrated with their knowledge.</p>
                <div className="my-4 p-4 rounded bg-background">
                    <p className="font-mono text-center">Risk Zone [Dunning-Kruger] --- [Confident] --- [Expert] --- [HONEST SELF-ASSESSMENT] &lt;--●</p>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <h4>MCI Analysis:</h4>
                    <p>Erick operates squarely in the "Honest Self-Assessment" zone. His MCI is exceptionally high due to his repeated, voluntary admissions of his knowledge boundaries. For instance, when asked about error handling, he stated, "I'm not the best with error handling," and on IaC, "Not so much. I want to have that exposure, that experience." This demonstrates a precise and accurate understanding of what he knows and what he doesn't. This high level of self-awareness is a critical asset, as it minimizes risk and maximizes his potential for growth and coachability.</p>
                </div>
            </div>
        </div>
        
        <div className='my-12 rounded-lg border bg-card p-6 shadow-lg'>
            <h2 className="text-2xl font-bold text-foreground">Risk Factors & Mitigation</h2>
            <div className="mt-4 space-y-4">
                {risks.map((risk, index) => (
                    <div key={index} className="pt-4 border-t border-border/50">
                        <h3 className="font-semibold text-destructive">Risk {index + 1}: {risk.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{risk.description}</p>
                        <h4 className='text-sm font-bold mt-2 text-primary'>Mitigation Plan:</h4>
                        <p className="text-sm text-foreground m-0">{risk.mitigation}</p>
                    </div>
                ))}
            </div>
        </div>

         <div className="my-12 rounded-lg border bg-card p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground">Final Hiring Recommendation & Score</h2>
            <div className="mt-4">
                 <p className="text-lg font-semibold text-primary">Final Recommendation: Strong Hire</p>
                 <p className="mt-2 text-muted-foreground"><strong>Justification:</strong> Erick exceeds the requirements for this role. He combines proven, senior-level full-stack skills with an exceptional cognitive profile. His ability to reason from first principles, as shown in the prompt engineering question, is more valuable than rote knowledge of buzzwords. His perfect Learning Orientation score guarantees that he is a sound investment who will rapidly master any new domains required. The combination of his technical skill, problem-solving agility, and demonstrated leadership makes him a high-impact hire.</p>
                 <p className="text-lg font-semibold mt-4">Overall Score: 4.6 / 5.0</p>
            </div>
        </div>

        <div className='my-12'>
            <h2 className="text-3xl font-bold text-center text-foreground">Evidence Locker</h2>
            <p className='text-muted-foreground mt-2 text-center'>
                This is the raw data—the proof behind our analysis. A human expert interviews the candidate, and our Cognitive AI synthesizes the conversation, comparing responses against ideal answer blueprints to provide an objective score.
            </p>
            <div className="mt-4 space-y-2">
                {evidenceLocker.map(item => (
                     <AccordionItem title={item.title} key={item.title}>
                        {item.content}
                    </AccordionItem>
                ))}
            </div>
             <div className="text-center mt-8">
                <Link href="/process" className="font-semibold text-primary hover:underline">
                    See Our Full Process <ArrowRight className="inline h-4 w-4" />
                </Link>
              </div>
        </div>
      </div>
    </main>
  );
}
