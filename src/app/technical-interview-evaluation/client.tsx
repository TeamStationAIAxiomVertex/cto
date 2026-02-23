"use client";

import React, { type ReactNode } from "react";
import { Accordion, AccordionItem } from "../../components/ui/accordion";
import {
  BrainCircuit,
  ArrowRight,
  HelpCircle,
  UserCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { WithTooltip } from "../../components/ui/tooltip";
import ScoreProfilePanel from "../../components/graphs/ScoreProfilePanel";
import { RevealSection } from "../../components/motion/MotionPrimitives";

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const renderWithMany = (
  raw: React.ReactNode,
  items: Array<{ term: string; tooltip: string }>
): React.ReactNode => {
  const text = typeof raw === "string" ? raw : "";
  const active = items.filter((i) => i.term && text.includes(i.term));
  if (!text || active.length === 0) return raw;

  const byTerm = new Map(active.map((i) => [i.term, i.tooltip]));
  const pattern = new RegExp(
    `(${active.map((i) => escapeRegExp(i.term)).join("|")})`,
    "g"
  );
  const parts = text.split(pattern);

  return parts.map((part, idx) => {
    const tip = byTerm.get(part);
    return tip ? (
      <WithTooltip key={`hl-${idx}`} content={tip}>
        <span className="text-primary border-b border-dashed">{part}</span>
      </WithTooltip>
    ) : (
      <React.Fragment key={`txt-${idx}`}>{part}</React.Fragment>
    );
  });
};

const cognitiveData = [
  {
    name: "Architectural Instinct",
    pain: "Can they design for scale, or just for today?",
    candidate: 3.9,
    ideal: 4.5,
    rationale:
      "The Sr Software Engineer candidate demonstrates a solid architectural mindset for Dynamics 365 F&O work. He correctly identifies use of extensions as the upgrade-safe strategy (Q6) and describes practical large-scale performance remediation using multi-threading in X++ (Q3). The score is moderated by limited recent greenfield integration design experience noted in the report.",
  },
  {
    name: "Problem-Solving Agility",
    pain: "Do they freeze on novel problems or adapt?",
    candidate: 4.4,
    ideal: 4.0,
    rationale:
      "The Sr Software Engineer candidate shows strong problem-solving agility, especially when diagnosing and resolving performance bottlenecks in X++ (Q3). He combines practical tooling with architectural changes (multi-threaded batch processing) and explains the reasoning clearly. The report identifies this as an immediately visible senior-level strength.",
  },
  {
    name: "Learning Orientation",
    pain: "Are they coachable or a know-it-all?",
    candidate: 4.2,
    ideal: 5.0,
    rationale:
      "The Sr Software Engineer candidate shows strong learning orientation through honest self-assessment. The report notes he was direct about feeling somewhat 'stuck' in the same modules and expressed clear interest in expanding his exposure across the F&O ecosystem. This supports coachability and long-term growth, though the score is not maxed because the evidence is more role-contextual than broad cross-domain.",
  },
  {
    name: "Collaborative Mindset",
    pain: "Are they a team-player or a lone wolf?",
    candidate: 4.6,
    ideal: 4.0,
    rationale:
      "Collaborative mindset is one of the Sr Software Engineer candidate's clearest strengths. As a technical lead, he describes disciplined team communication, daily check-ins, and professional handling of pushback while still executing client decisions. The report specifically highlights his mature, team-oriented communication style and stakeholder alignment behavior.",
  },
];

const risks = [
  {
    title: 'Limited Recent "Greenfield" Integration Design Experience',
    description:
      "The Sr Software Engineer candidate's current role focuses on maintaining and enhancing existing integrations rather than designing new integrations from scratch. He could explain the architecture and core components clearly, but had less recent first-hand greenfield design experience.",
    mitigation:
      "Treat this as a low-to-moderate risk. Pair him with an architect for early reviews and a short ramp-up focused on the company's integration patterns. His foundational knowledge of entities, OData, and extension architecture should allow a fast transition.",
    proof:
      'Evidence: Report Risk 1 + Q1/Q6 evidence (strong framework knowledge, less recent greenfield design from scratch).',
  },
  {
    title: 'Potential for "Stuck in a Rut"',
    description:
      "The Sr Software Engineer candidate reported feeling somewhat 'stuck' working on the same modules for several years. There is a minor risk that breadth across the wider F&O application could lag role expectations without exposure to new areas.",
    mitigation:
      "This is low risk and can be turned into a positive motivator. Intentionally rotate him into adjacent modules and give ownership opportunities that broaden domain coverage while preserving his technical lead strengths.",
    proof:
      "Evidence: Report Risk 2 + Learning Orientation rationale (explicit desire to expand scope).",
  },
];

const evidenceLocker = [
  {
    title:
      'Question 1: "Consider a high-throughput Python backend service that processes real-time ad impressions from various sources..."',
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Ideal Answer Blueprint</h4>
        <p>
          <strong>First Principles:</strong> The core challenge is managing
          I/O-bound concurrency. The system must not block on slow network calls
          or database queries, as this would cripple throughput. The principles
          of asynchronous processing and decoupling are paramount.
        </p>
        <p>
          <strong>Key Concepts:</strong>
        </p>
        <ul>
          <li>
            <strong>Concurrency Model:</strong> Explicitly mention Python's
            asyncio library, using async/await syntax for non-blocking I/O.
            Contrast this with multi-threading or multi-processing, explaining
            why asyncio is superior for I/O-bound tasks.
          </li>
          <li>
            <strong>Scalability:</strong> Discuss horizontal scaling (adding
            more machines/containers) as the primary strategy. Mention
            microservices architecture to isolate components.
          </li>
          <li>
            <strong>Decoupling/Buffering:</strong> Introduce a message queue
            (e.g., Kafka, RabbitMQ, AWS SQS) to act as a buffer, absorbing
            traffic spikes and decoupling the main request-handling service from
            slower downstream processors (like logging or analytics).
          </li>
          <li>
            <strong>Caching:</strong> Use an in-memory cache like Redis or
            Memcached to store frequently accessed data (e.g., user profiles) to
            reduce database load.
          </li>
          <li>
            <strong>Resiliency:</strong> Discuss patterns like retries (with
            exponential backoff), timeouts, and circuit breakers to handle
            failures in external services gracefully.
          </li>
        </ul>
        <p>
          <strong>Negative Indicators:</strong> Suggesting a purely synchronous
          model. Relying only on vertical scaling. Not mentioning any form of
          caching or queuing. Confusing CPU-bound and I/O-bound concurrency
          models.
        </p>

        <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
        <blockquote>
          "Well, this is pretty, well, this is a little bit hard to just to talk
          because, you know, everything has a lot of research behind, but
          something that I have in my mind right now, maybe I think using Redis,
          Redis to have something to read, to cache, to try to avoid the older
          requests go to my backend every time. If we already have in cache
          information, it's pretty, or it will be more soft or smooth to serve
          if we already have in the cache instead to arrive to the backend. So,
          the first thing that I'm thinking right now is in Redis... With
          concurrency. Yeah, I think that, well, I have in my head right now the
          approach with asynchronous thing. I'm working more with Node.js about
          this topic more than Python, but I think that to serve asynchronously,
          once the request is arrived, I think to do asynchronously everything.
          Also, to try to have advantages with an even loop with async IO... It
          depends a lot on the project, but I prefer to use monolithic because
          it's more easy to have everything in one single source of truth. But
          in case, if we combine AWS stuff, I think the microservices will be a
          great idea to have in the nearly future because if you combine
          microservices and you combine AWS, you can grow vertically and
          horizontally automatically with AWS... In this case, I think that is a
          better idea to use. I think that if I don't get wrong, AWS has SQS or
          yeah, something to use SQS... Well, in that specific, I'm not the best
          with error handling, but I think that if we have a good log error
          handling to see the errors when it's happening, the reconnections
          once, I mean, instead to send an error and block the system, maybe
          it's a good idea to ensure the retries or reconnections."
        </blockquote>

        <h4>Ghostevidence & Must-Have Alignment</h4>
        <p>
          <strong>
            Senior-level Python skills (ideally version &gt;=3.11), fluent in
            asynchronous patterns:
          </strong>{" "}
          PARTIALLY MET.
          <br />
          <strong>Ghostevidence:</strong> "...the approach with asynchronous
          thing... to have advantages with an even loop with async IO."
          <br />
          <strong>Explanation:</strong> He correctly identifies asyncio as the
          right tool for the job, demonstrating conceptual understanding.
          However, he admits more experience in Node.js, so his fluency in
          Python-specific async patterns is implied rather than deeply
          demonstrated.
        </p>
        <p>
          <strong>Strong knowledge of architecture & design patterns:</strong>{" "}
          MET.
          <br />
          <strong>Ghostevidence:</strong> "...using Redis, Redis to have
          something to read, to cache..."; "...microservices will be a great
          idea to have in the nearly future..."; "...AWS has SQS or yeah,
          something to use SQS."
          <br />
          <strong>Explanation:</strong> He correctly identifies and applies
          several key patterns: caching (Redis), microservices for scalability,
          and message queues (SQS) for decoupling.
        </p>
        <p>
          <strong>Keen problem-solving skills:</strong> MET.
          <br />
          <strong>Ghostevidence:</strong> The entire answer, while needing some
          guidance, shows him breaking down the problem into caching,
          concurrency, architecture, and decoupling.
          <br />
          <strong>Explanation:</strong> He methodically considers different
          layers of the problem, even if he doesn't have a perfect, pre-packaged
          answer.
        </p>

        <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
        <p>
          The candidate's initial hesitation ("a little bit hard to just to
          talk") is a typical L2 processing marker, not a lack of knowledge. The
          Cortez Calibration Layer correctly filters this. His admission, "I'm
          not the best with error handling," is flagged as an
          authenticityIncident. This is a strong positive signal for Learning
          Orientation and results in a perfect score for B_A on that specific
          point. No other negative flags were triggered.
        </p>

        <h4>UCE Axiom Scoring (B-Axioms)</h4>
        <ul>
          <li>
            B_P (Procedural Knowledge): ★★★☆☆ (3.5) - He knows the right
            components to mention (Redis, SQS, asyncio) but required some
            prompting to connect them into a fluid architecture.
          </li>
          <li>
            B_M (Mental Model): ★★★★☆ (4.0) - His mental model is sound. He
            understands the core concepts of caching, non-blocking I/O, and
            decoupling, even if his vocabulary or immediate recall isn't
            perfect.
          </li>
          <li>
            B_A (Accuracy): ★★★★★ (4.8) - All technical choices (Redis, asyncio,
            SQS) are correct for this problem. The score is boosted to
            near-perfect by the authenticityIncident where he honestly stated
            his limitation, demonstrating high integrity.
          </li>
          <li>
            B_C (Clarity): ★★★☆☆ (3.5) - After applying the Cortez Calibration
            for L2 ESL, his explanation was conceptually clear. He needed some
            guidance to structure his thoughts, which slightly lowers the score.
          </li>
          <li>
            B_L (Cognitive Load): ★★★☆☆ (3.5) - He demonstrated some cognitive
            load in structuring a complex architectural answer on the fly, but
            he successfully retrieved the correct concepts.
          </li>
        </ul>

        <h4>Key Insights</h4>
        <p>
          This answer reveals a candidate with a solid, if not deeply practiced,
          understanding of modern backend architecture. He knows the right
          building blocks to use. His honesty about his weaker areas is a
          significant positive signal about his character and coachability.
        </p>
      </div>
    ),
  },
  {
    title:
      'Question 2: "When designing a public-facing REST API for a new media planning feature..."',
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Ideal Answer Blueprint</h4>
        <p>
          <strong>First Principles:</strong> API design is about creating a
          stable, secure, and understandable contract. Evolvability requires
          planning for change without breaking existing clients. Security
          requires a defense-in-depth approach.
        </p>
        <p>
          <strong>Key Concepts:</strong>
        </p>
        <ul>
          <li>
            <strong>Evolvability:</strong> Versioning (URL or headers),
            Contract-First Design (OpenAPI), Additive Changes.
          </li>
          <li>
            <strong>Security:</strong> AuthN (OAuth2/OIDC) vs. AuthZ
            (RBAC/ABAC), Rate Limiting.
          </li>
          <li>
            <strong>Enforcement:</strong> Documentation, CI/CD linting,
            mandatory code reviews.
          </li>
        </ul>
        <p>
          <strong>Negative Indicators:</strong> No versioning strategy. Vague
          security concepts ("just use a token"). No concrete plan for
          enforcement.
        </p>

        <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
        <blockquote>
          "I will say that I have two strategies. There is contract first in
          backend. I mean, with compatible versioning... maybe if I'm using an
          LLM... I will design or add every change in open AI spec first before
          of all. Also, like I mentioned before, version through media types...
          About security. There is a lot of stuff, but maybe I think that is
          called zero trust. Zero trust about, for example, out hand or out C or
          out zero... [Interviewer: I think you're talking about authorization
          versus authentication, right?] Yeah. Okay. Yeah, that's good... About
          resource level. I'm not pretty sure about that... I did not have the
          opportunity to create something from scratch."
        </blockquote>

        <h4>Ghostevidence & Must-Have Alignment</h4>
        <p>
          <strong>
            Strong understanding of software development best practices and
            design patterns:
          </strong>{" "}
          MET.
          <br />
          <strong>Ghostevidence:</strong> "There is contract first in backend. I
          mean, with compatible versioning... version through media types. Like
          I say before, we have a version one... and versioning across to
          version two..."
          <br />
          <strong>Explanation:</strong> He clearly articulates a
          "contract-first" design philosophy and a versioning strategy, which
          are core best practices for API evolvability.
        </p>
        <p>
          <strong>
            Fluent in English and able to communicate effectively:
          </strong>{" "}
          MET.
          <br />
          <strong>Ghostevidence:</strong> The entire exchange, while showing L2
          markers, is effective. He understands complex questions and provides
          conceptually sound answers.
          <br />
          <strong>Explanation:</strong> He successfully communicates his
          technical ideas and, crucially, his own limitations, which is a form
          of highly effective communication.
        </p>

        <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
        <p>
          The candidate's phrasing "out hand or out C or out zero" is a classic
          L2 phonetic approximation of "AuthN/AuthZ/Auth0". The Cortez
          Calibration Layer correctly interprets this as a successful conceptual
          reference, not an error. His admission of not having created a
          security system from scratch is another clear authenticityIncident,
          which positively impacts his B_A and LO scores.
        </p>

        <h4>UCE Axiom Scoring (B-Axioms)</h4>
        <ul>
          <li>
            B_P (Procedural Knowledge): ★★★★☆ (4.0) - He describes a clear
            procedure for evolvability (contract-first, versioning). His
            security procedure is less detailed but conceptually correct
            (mentioning zero trust/Auth0).
          </li>
          <li>
            B_M (Mental Model): ★★★★☆ (4.0) - He has a strong mental model for
            API evolvability. His security model is correct at a high level but
            lacks depth on granular authorization, which he honestly admits.
          </li>
          <li>
            B_A (Accuracy): ★★★★★ (5.0) - His proposed strategies are industry
            best practices. The score is maxed out due to the
            authenticityIncident, where he accurately described the limits of
            his experience, demonstrating perfect integrity.
          </li>
          <li>
            B_C (Clarity): ★★★★☆ (4.0) - After calibration, his explanation of
            evolvability was very clear. The security part was slightly less
            clear until guided by the interviewer, but the core concepts were
            present.
          </li>
          <li>
            B_L (Cognitive Load): ★★★★☆ (4.5) - He handled this multi-part
            question with low cognitive load, clearly separating the concepts of
            evolvability and security.
          </li>
        </ul>

        <h4>Key Insights</h4>
        <p>
          Erick demonstrates a mature understanding of API design for
          evolvability. His knowledge of security is more high-level and based
          on experience with existing systems rather than building them from the
          ground up. Again, his honesty about this is a significant strength.
        </p>
      </div>
    ),
  },
  {
    title:
      'Question 3: "Imagine our TeamStation AI frontend dashboard needs to display real-time campaign performance data..."',
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Ideal Answer Blueprint</h4>
        <p>
          <strong>First Principles:</strong> Frontend performance for large data
          sets hinges on two things: rendering only what's necessary and
          minimizing the state management overhead that triggers re-renders.
        </p>
        <p>
          <strong>Key Concepts:</strong>
        </p>
        <ul>
          <li>
            <strong>Rendering Optimization:</strong> Virtualization/Windowing,
            Memoization (`React.memo`, `useMemo`), Code Splitting
            (`React.lazy`).
          </li>
          <li>
            <strong>State Management:</strong> Server state caching with React
            Query or SWR; avoiding large global stores for server data.
          </li>
          <li>
            <strong>Data Flow:</strong> WebSockets for real-time,
            debouncing/throttling user inputs.
          </li>
        </ul>
        <p>
          <strong>Negative Indicators:</strong> Suggesting rendering thousands
          of DOM elements at once. Relying solely on a naive Redux
          implementation. Not mentioning virtualization or memoization.
        </p>

        <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
        <blockquote>
          "I think I have maybe an answer for that. The virtualization could be
          the key here. We could also connect to a web socket... I will
          virtualize that information. I mean, I will just show to the user the
          information that he just want to see... But using virtualization to
          have the data prepared before to render... I think that I will combine
          very good the react.memo, use memo hooks, use callback hooks... For
          example, in this specific case, I told you Redux for that. Redux is
          not a good tool for performance. I think that I could change for React
          Query or Sustan RTK or KTR. I don't remember, but it's Sustan."
        </blockquote>

        <h4>Ghostevidence & Must-Have Alignment</h4>
        <p>
          <strong>
            3+ years of experience in web development with a focus on React and
            TypeScript:
          </strong>{" "}
          MET.
          <br />
          <strong>Ghostevidence:</strong> "The virtualization could be the key
          here... I will combine very good the react.memo, use memo hooks, use
          callback hooks... I could change for React Query or Sustan..."
          <br />
          <strong>Explanation:</strong> This is not a theoretical answer. He
          names the exact, correct, modern tools and techniques (virtualization,
          specific hooks, React Query, Zustand) that an experienced React
          developer would use to solve this specific, difficult performance
          problem.
        </p>
        <p>
          <strong>Keen problem-solving skills:</strong> MET.
          <br />
          <strong>Ghostevidence:</strong> He immediately identifies the core
          problem (rendering too much data) and proposes the primary solution
          (virtualization) before layering on other optimizations.
          <br />
          <strong>Explanation:</strong> This demonstrates a clear, prioritized
          problem-solving approach, tackling the biggest issue first.
        </p>

        <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
        <p>
          The candidate's self-correction regarding state management ("I told
          you Redux for that. Redux is not a good tool for performance. I think
          that I could change for React Query or Sustan...") is a powerful
          positive signal. It shows he is thinking critically in real-time and
          is not afraid to refine his answer towards a better solution. His
          recall of "Sustan" for Zustand is a minor phonetic error that is
          ignored by the UCE in favor of the correct conceptual identification.
        </p>

        <h4>UCE Axiom Scoring (B-Axioms)</h4>
        <ul>
          <li>
            B_P (Procedural Knowledge): ★★★★★ (5.0) - He laid out a perfect,
            step-by-step procedure for optimizing a high-performance React app:
            start with virtualization, add memoization, use debouncing, and
            select a modern state management library like React Query/Zustand.
          </li>
          <li>
            B_M (Mental Model): ★★★★★ (5.0) - His mental model of React
            rendering performance is flawless. He understands the key
            bottlenecks (DOM size, re-renders) and knows the precise tools and
            patterns to mitigate them.
          </li>
          <li>
            B_A (Accuracy): ★★★★★ (5.0) - Every technique and library mentioned
            is not just correct, but represents the current industry best
            practice for this specific problem.
          </li>
          <li>
            B_C (Clarity): ★★★★★ (4.8) - His explanation was exceptionally clear
            and well-structured. He started with the most important concept
            (virtualization) and layered on additional optimizations logically.
          </li>
          <li>
            B_L (Cognitive Load): ★★★★★ (5.0) - He answered this complex
            frontend question with zero apparent cognitive load, demonstrating
            deep expertise and fluency in the topic.
          </li>
        </ul>

        <h4>Key Insights</h4>
        <p>
          This was Erick's strongest technical answer. He demonstrated
          senior-level, practical, and modern knowledge of React performance
          engineering. This answer provides high confidence in his frontend
          capabilities.
        </p>
      </div>
    ),
  },
  {
    title:
      'Question 4: "Our TeamStation AI leverages LLMs significantly. When integrating an LLM into a critical business workflow..."',
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Ideal Answer Blueprint</h4>
        <p>
          <strong>First Principles:</strong> Prompt engineering is about
          constraining the LLM's vast potential to produce a reliable,
          repeatable, and specific output. It's instruction-based programming
          for a non-deterministic model. The core conceptual challenge is
          breaking down a complex request into simpler, logical steps the model
          can follow.
        </p>
        <p>
          <strong>Key Concepts:</strong>
        </p>
        <ul>
          <li>
            <strong>Advanced Prompting Strategies (Conceptual):</strong>{" "}
            Demonstrating an understanding of giving the model examples
            (Few-Shot), telling it to think step-by-step (Chain-of-Thought),
            giving it a persona (Role-Playing), or demanding structured output
            (JSON schema).
          </li>
          <li>
            <strong>Architectural Approach:</strong> Recognizing that a single,
            massive prompt is brittle and that a better approach is to break the
            problem down into smaller, chained, or structured "micro prompts"
            that build on each other.
          </li>
          <li>
            <strong>Measuring "Goodness":</strong> Moving beyond simple accuracy
            to business metrics (A/B testing), expert human review (HITL), or
            semantic comparisons.
          </li>
          <li>
            <strong>Iteration:</strong> Creating a feedback loop where
            production results and human reviews are used to refine the prompt
            structure and instructions.
          </li>
        </ul>
        <p>
          <strong>Negative Indicators:</strong> Focusing only on training data
          for a pre-trained model. Vague answers like "give it good
          instructions." Not having a plan for measuring quality or iterating.
        </p>

        <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
        <blockquote>
          "Yeah. Well, in that case, as every LLMs, you need to train it very,
          very good with a thousand information... [Interviewer guides towards
          off-the-shelf models and prompt structure]... Well, I'm supposing that
          we will have a thousands of information. If not, we need to create
          databases or big data to storage a lot of examples or a lot of numbers
          or a lot of things to kind of train that LLM... We could split that
          big data in different information, bunches of information and give to
          the LLM... [Interviewer introduces 'phasic multi chunking' analogy]...
          Well, like I told you before, at the beginning of the interview is
          it's a better idea to split into microservices and maybe that
          microservices see like a small part of a brain of this AI or this LLM
          to train in each part very efficiently... If we have micro front ends,
          if we have back end as a service that we call splitting the different
          back end and we have microservices, why why we call why not to have
          micro prompts? I think that is."
        </blockquote>

        <h4>Ghostevidence & Must-Have Alignment</h4>
        <p>
          <strong>
            GenAI experience: Ideally, you've built AI applications or agents on
            top of existing LLMs, but solid prompt engineering skills are a
            must:
          </strong>{" "}
          PARTIALLY MET.
          <br />
          <strong>Ghostevidence:</strong> "...split that big data in different
          information, bunches of information and give to the LLM..."; "...why
          we call why not to have micro prompts?"
          <br />
          <strong>Explanation:</strong> This is a crucial application of the
          Conceptual Fidelity Protocol. While he initially confused prompting
          with training, with guidance he described two advanced concepts in his
          own words. "Splitting... bunches of information" is conceptually
          equivalent to Few-Shot Learning (providing examples). More
          impressively, his synthesis of "micro prompts" is a perfect conceptual
          analogy for advanced strategies like Chain-of-Thought or breaking a
          complex task into a sequence of smaller prompts. He understands the
          architecture of a good prompt, even if he doesn't know the jargon.
        </p>
        <p>
          <strong>Keen problem-solving skills:</strong> MET.
          <br />
          <strong>Ghostevidence:</strong> "If we have micro front ends... if we
          have microservices, why why we call why not to have micro prompts?"
          <br />
          <strong>Explanation:</strong> This demonstrates exceptional
          problem-solving agility. He took an analogy from a familiar domain
          (microservices) and correctly applied its principles to a novel domain
          (prompting) to generate a powerful, insightful solution.
        </p>

        <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
        <p>
          The candidate's initial confusion was a knowledge gap, not a
          linguistic issue. The key analytical moment was his response to the
          interviewer's guidance. His ability to pivot and generate the "micro
          prompts" concept is a very strong signal of a flexible and powerful
          mental model. The UCE credits this conceptual leap heavily, overriding
          the initial lack of specific terminology as per the Conceptual
          Fidelity Protocol.
        </p>

        <h4>UCE Axiom Scoring (B-Axioms)</h4>
        <ul>
          <li>
            B_P (Procedural Knowledge): ★★★☆☆ (3.0) - While not a textbook
            procedure, he devised a logical one: gather examples, split them up,
            and feed them into a series of "micro prompts." This is a valid, if
            self-discovered, process.
          </li>
          <li>
            B_M (Mental Model): ★★★★☆ (4.5) - His mental model proved to be
            exceptionally strong. The ability to map the microservices
            architecture onto prompt design and coin the term "micro prompts"
            shows a deep, abstract understanding of how to manage complexity,
            which is the essence of advanced prompt engineering.
          </li>
          <li>
            B_A (Accuracy): ★★★★☆ (3.8) - The initial confusion with "training"
            is a minor inaccuracy. However, his final conceptual
            conclusions using examples and breaking prompts down are highly
            accurate and represent best practices.
          </li>
          <li>
            B_C (Clarity): ★★★☆☆ (3.5) - The answer required guidance to achieve
            clarity, but the final insight ("micro prompts") was exceptionally
            clear and concise.
          </li>
          <li>
            B_L (Cognitive Load): ★★★☆☆ (3.5) - He showed initial cognitive load
            due to the knowledge gap, but demonstrated a breakthrough in
            understanding, successfully overcoming the initial difficulty.
          </li>
        </ul>

        <h4>Key Insights</h4>
        <p>
          This answer is a powerful positive signal about the candidate's raw
          intelligence and architectural thinking. While he lacks familiarity
          with the specific jargon of prompt engineering, he was able to reason
          his way from first principles to a conceptually advanced solution.
          This suggests he can solve problems he's never seen before, which is
          more valuable than simply knowing buzzwords.
        </p>
      </div>
    ),
  },
  {
    title:
      "Question 5: \"Let's design a critical new capability for TeamStation AI: 'Predictive Audience Segmentation'...\"",
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Ideal Answer Blueprint</h4>
        <p>
          <strong>First Principles:</strong> This is a complex data processing
          pipeline that requires separating concerns (UI, API, data processing,
          AI inference) and using the right tool for each job (e.g., right
          database for the right data shape). Asynchronous processing is key to
          a responsive user experience.
        </p>
        <p>
          <strong>Key Concepts:</strong>
        </p>
        <ul>
          <li>
            <strong>Architecture:</strong> A microservices-based approach is
            ideal. An API Gateway receives requests, which trigger a series of
            backend services.
          </li>
          <li>
            <strong>Data Flow:</strong> 1. User submits goals via React UI. 2.
            API Gateway passes to a CampaignService. 3. CampaignService places a
            "segmentation job" onto a message queue (SQS/Kafka). 4. A
            PredictionWorker service picks up the job, gathers historical data
            from a data warehouse (Redshift/BigQuery), calls the AI model
            inference endpoint (e.g., SageMaker). 5. The results are stored in a
            suitable database (e.g., DynamoDB for JSON blobs). 6. The UI polls
            an endpoint or uses WebSockets to get the results when ready.
          </li>
          <li>
            <strong>Data Storage:</strong> Use a relational DB (Postgres) for
            user/campaign metadata, a data warehouse for historical analytics,
            and a NoSQL DB for the semi-structured AI output.
          </li>
          <li>
            <strong>Communication:</strong> Asynchronous via message queues for
            decoupling and scalability.
          </li>
          <li>
            <strong>Privacy/Security:</strong> Data anonymization before sending
            to the model, encryption at rest and in transit, strict IAM roles
            (ABAC/RBAC), audit trails.
          </li>
        </ul>
        <p>
          <strong>Negative Indicators:</strong> Proposing a single monolithic
          service to do everything. Using a single SQL database for all data
          types. A purely synchronous request/response flow. Vague privacy
          measures.
        </p>

        <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
        <blockquote>
          "Yeah, I think for this case, maybe a split this this part in
          microservices or microphones will be a better idea because we need a
          lot of inputs there... I will add the behavioral behavioral input,
          user behavioral input and maybe contextual input about the hour, the
          new localization device channels, all those stuff and metadata
          information like campaigns and marketing stuffs... I think that Google
          Maps for all the cultural, the cultural information, the context
          information, Google Maps will be better... A combination of both
          hybrid, because maybe there is information more simply than other. And
          the simple the simple information could be synchronous and more tricky
          information could be asynchronous... [Error handling?] Yeah, I'm
          pretty weak in that. Yeah, yeah... About the data privacy... Yeah,
          obviously the tokenization access control with AM maybe attribute
          based access service to service out course also headings,
          encryptions."
        </blockquote>

        <h4>Ghostevidence & Must-Have Alignment</h4>
        <p>
          <strong>Strong knowledge of architecture & design patterns:</strong>{" "}
          MET.
          <br />
          <strong>Ghostevidence:</strong> "...split this this part in
          microservices or microphones will be a better idea...";
          "...decoupling, maybe for events, use events for this."
          <br />
          <strong>Explanation:</strong> He correctly identifies a microservices
          architecture and event-driven decoupling as appropriate patterns for
          this complex system.
        </p>
        <p>
          <strong>Keen problem-solving skills:</strong> MET.
          <br />
          <strong>Ghostevidence:</strong> "...I will add the behavioral
          behavioral input, user behavioral input and maybe contextual input
          about the hour, the new localization device channels, all those stuff
          and metadata information like campaigns..."
          <br />
          <strong>Explanation:</strong> He effectively deconstructs the problem
          by first identifying the various types of data inputs required to make
          the system work, showing he thinks about the data foundation first.
        </p>

        <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
        <p>
          The candidate again honestly admits his weakness in error handling
          ("Yeah, I'm pretty weak in that"), which is flagged as the third
          authenticityIncident. His reference to "AM maybe attribute based
          access" is correctly interpreted as "IAM and Attribute-Based Access
          Control," crediting the concept over the precise phrasing.
        </p>

        <h4>UCE Axiom Scoring (B-Axioms)</h4>
        <ul>
          <li>
            B_P (Procedural Knowledge): ★★★☆☆ (3.0) - He outlines a conceptual
            procedure (gather inputs, split into microservices, use hybrid
            communication) but is light on specific implementation details like
            which database to use for which data type.
          </li>
          <li>
            B_M (Mental Model): ★★★★☆ (4.0) - His mental model is strong. He
            correctly intuits that this is a complex system needing to be broken
            down (microservices), that it requires diverse data inputs, and that
            privacy is a key concern.
          </li>
          <li>
            B_A (Accuracy): ★★★★☆ (4.0) - The architectural choices he makes
            (microservices, events, hybrid communication, ABAC) are all accurate
            and appropriate for the problem. The score is boosted by his honest
            admission of weakness.
          </li>
          <li>
            B_C (Clarity): ★★★☆☆ (3.5) - His explanation was high-level and
            conceptual. While the core ideas were clear, it lacked the granular
            detail of a fully fleshed-out design.
          </li>
          <li>
            B_L (Cognitive Load): ★★★☆☆ (3.5) - He handled the very large scope
            of the question reasonably well, but the breadth of the topic seemed
            to prevent him from diving deep into any single area.
          </li>
        </ul>

        <h4>Key Insights</h4>
        <p>
          Erick is comfortable thinking at a high architectural level. He
          correctly identifies the major components and concerns of a complex
          full-stack AI system. His approach is more conceptual than deeply
          technical, focusing on the "what" and "why" more than the specific
          "how."
        </p>
      </div>
    ),
  },
  {
    title:
      'Question 6: "For a senior engineer, it\'s not just about writing tests, but strategizing them..."',
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Ideal Answer Blueprint</h4>
        <p>
          <strong>First Principles:</strong> A testing strategy is a risk
          management strategy. The goal is to get the highest confidence for the
          lowest cost (time/effort). The "Testing Pyramid" is the guiding
          principle.
        </p>
        <p>
          <strong>Key Concepts:</strong>
        </p>
        <ul>
          <li>
            <strong>Testing Philosophy:</strong> Emphasize the testing pyramid:
            a large base of fast, cheap unit tests; a smaller layer of
            integration tests; and a very small peak of slow, expensive E2E
            tests.
          </li>
          <li>
            <strong>CI/CD Integration:</strong> On every commit/PR: Run linters,
            static analysis, and all unit tests. On merge to main: Build Docker
            images, run integration tests (using Docker Compose to spin up
            dependencies).
          </li>
          <li>
            <strong>Deployment:</strong> Use canary or blue-green deployments in
            Kubernetes to roll out changes safely. Use GitOps (ArgoCD/Flux) for
            declarative, auditable deployments.
          </li>
          <li>
            <strong>K8s/Docker Practices:</strong> Define clear readinessProbes
            and livenessProbes. Use feature flags to decouple deployment from
            release. Implement automated rollbacks on metric thresholds.
          </li>
        </ul>
        <p>
          <strong>Negative Indicators:</strong> A flat testing strategy (e.g.,
          "test everything with E2E tests"). No clear integration into a CI/CD
          pipeline. Not mentioning K8s-specific practices like health probes or
          deployment strategies.
        </p>

        <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
        <blockquote>
          "Well, for example, in this case, I remember that I participate in a
          project with Jenkins... I could translate Jenkins stuff to GitHub
          actions... I prefer to use unit testing to ensure the testing for each
          piece, each small piece of code in state end-to-end testing... We have
          60 or to 60 or 80% successful tests. Once go to GitHub actions, maybe
          it's a good idea to, I don't know, what about, well, something to have
          performance or code health in our pipelines... one step before to
          deploy, it could be a great idea to create bundles to test manually...
          [Infrastructure as Code?] Not so much. I want to have that exposure,
          that experience."
        </blockquote>

        <h4>Ghostevidence & Must-Have Alignment</h4>
        <p>
          <strong>
            Strong understanding of software development best practices:
          </strong>{" "}
          MET.
          <br />
          <strong>Ghostevidence:</strong> "I prefer to use unit testing to
          ensure the testing for each piece, each small piece of code in state
          end-to-end testing."
          <br />
          <strong>Explanation:</strong> This statement perfectly encapsulates
          the philosophy of the testing pyramid, a core best practice. He
          prioritizes fast, focused unit tests over slower, broader tests.
        </p>
        <p>
          <strong>
            Proficiency with team development, source control (Git), and
            continuous integration/continuous delivery (CI/CD) best practices:
          </strong>{" "}
          PARTIALLY MET.
          <br />
          <strong>Ghostevidence:</strong> "...translate Jenkins stuff to GitHub
          actions... have performance or code health in our pipelines..."
          <br />
          <strong>Explanation:</strong> He is familiar with modern CI/CD tools
          (GitHub Actions) and the concept of having quality gates in the
          pipeline. However, his knowledge doesn't extend to advanced K8s
          deployment strategies or IaC, which he honestly admits.
        </p>

        <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
        <p>
          The candidate's final statement, "Not so much. I want to have that
          exposure, that experience," is the fourth distinct
          authenticityIncident. This consistent pattern of intellectual honesty
          is a very strong signal for his Learning Orientation (LO) score.
        </p>

        <h4>UCE Axiom Scoring (B-Axioms)</h4>
        <ul>
          <li>
            B_P (Procedural Knowledge): ★★★☆☆ (3.0) - He describes a solid but
            somewhat basic CI/CD procedure: run unit tests, check code health,
            create a bundle for manual testing, then deploy. It lacks more
            advanced automation steps like automated integration/E2E tests or
            canary deployments.
          </li>
          <li>
            B_M (Mental Model): ★★★★☆ (4.0) - His mental model for testing
            strategy is excellent ("unit testing first"). His model for CI/CD is
            functional but not as mature or automated as a modern GitOps
            approach.
          </li>
          <li>
            B_A (Accuracy): ★★★★★ (4.8) - Everything he stated is accurate and
            valid. His testing philosophy is spot-on. The score is high due to
            the powerful authenticityIncident where he clearly stated his IaC
            knowledge gap.
          </li>
          <li>
            B_C (Clarity): ★★★★☆ (4.0) - His explanation of his testing
            philosophy was very clear. The CI/CD part was also clear, just not
            as detailed.
          </li>
          <li>
            B_L (Cognitive Load): ★★★★☆ (4.0) - He appeared comfortable
            discussing this topic, answering with low cognitive load and a clear
            structure.
          </li>
        </ul>

        <h4>Key Insights</h4>
        <p>
          Erick has a strong and correct philosophy on testing strategy. His
          practical CI/CD experience seems more traditional (manual testing
          gates) but is built on a solid foundation. His lack of IaC experience
          is a known, and coachable, gap.
        </p>
      </div>
    ),
  },
  {
    title:
      'Question 7: "As a senior full-stack engineer, your role extends beyond coding to driving initiatives and mentoring..."',
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Ideal Answer Blueprint</h4>
        <p>
          <strong>First Principles:</strong> This question measures leadership,
          influence, and business acumen. A great answer connects a technical
          problem to a business problem and demonstrates solving it through
          social and technical means.
        </p>
        <p>
          <strong>Key Concepts (STAR Method):</strong>
        </p>
        <ul>
          <li>
            <strong>Situation:</strong> A specific project with a clear problem.
            E.g., "On the e-commerce checkout project, deployments were failing,
            causing developer fear and massive technical debt."
          </li>
          <li>
            <strong>Task:</strong> The goal. E.g., "My goal was to reduce the
            technical debt and unblock the team by fixing the underlying process
            issue."
          </li>
          <li>
            <strong>Action:</strong> The specific steps taken. E.g., "I
            volunteered to become the tech lead. I acted as a communication
            bridge, translating stakeholder needs into clear technical tickets
            for the team, and translating technical progress and challenges back
            to the stakeholders in business terms. I shielded the team from
            direct, unproductive pressure."
          </li>
          <li>
            <strong>Result:</strong> The measurable impact. E.g., "As a result,
            technical debt decreased significantly, developer morale and
            velocity improved because the 'afraid was not part of the
            development anymore,' and the project got back on track."
          </li>
        </ul>
        <p>
          <strong>Negative Indicators:</strong> A vague story. A problem that
          was purely technical with no business impact. A solution that involved
          only coding, with no influence or leadership. No clear result.
        </p>

        <h4>Evidence Locker (Full, Untruncated Transcript Citation)</h4>
        <blockquote>
          "Yeah, I have a specific break for that. It was with Coca-Cola... all
          my coworkers, including me, had afraid to talk with someone from
          Coca-Cola. So that result in the tickets, we had a lot of tickets
          delayed. We have an enormous technical debt because we had afraid to
          the stakeholders. So my radical strategy to avoid that was to raise my
          hand and transform myself in a tech leader... I was the bridge between
          the stakeholders and the developments... I received all the yells. I
          received all the bad words... I translate the non-technical
          requirements to technical requirements. And the developer just say,
          ah, I can understand now very well... the translating, save money,
          save time and earn more money... the technical depth decreases a lot.
          No, I did not eliminate all the technical depth, but it decreases a
          lot because the afraid was not part of the development anymore."
        </blockquote>

        <h4>Ghostevidence & Must-Have Alignment</h4>
        <p>
          <strong>
            Experience with Agile methodologies and working in a collaborative
            team environment:
          </strong>{" "}
          MET.
          <br />
          <strong>Ghostevidence:</strong> The entire story is a masterclass in
          collaborative problem-solving within a dysfunctional Agile
          environment. He took on a leadership role to fix the broken
          communication loop between devs and stakeholders.
          <br />
          <strong>
            Excellent communication and problem-solving skills:
          </strong>{" "}
          MET.
          <br />
          <strong>Ghostevidence:</strong> "I needed to translate the
          non-technical language, sorry, the technical language to non-technical
          language... I was the bridge between the stakeholders and the
          developments."
          <br />
          <strong>Explanation:</strong> This is the definition of excellent
          communication. He identified the root cause of the technical debt as a
          communication and process failure, and solved it by taking ownership
          of that communication.
        </p>

        <h4>Linguistic & NLP Analysis (UCE v29.2 "Inquisitor Prime")</h4>
        <p>
          This narrative is powerful and coherent. The candidate's use of
          emotional language ("afraid," "rude people," "yells") is authentic and
          effectively conveys the severity of the situation. The ownershipRatio
          is high here, but it is contextually appropriate as he is describing a
          situation where he took personal initiative ("I was the bridge," "I
          received all the yells"). This is correctly interpreted as leadership,
          not ego.
        </p>

        <h4>UCE Axiom Scoring (B-Axioms)</h4>
        <ul>
          <li>
            B_P (Procedural Knowledge): ★★★★★ (5.0) - He described a clear,
            effective, and sophisticated procedure for solving a socio-technical
            problem: identify the root cause (fear), insert yourself as a
            buffer/translator, build trust, and improve the process.
          </li>
          <li>
            B_M (Mental Model): ★★★★★ (5.0) - His mental model is superb. He
            understands that technical debt is often a symptom of a
            human/process problem, not just a code problem. This is a very
            senior-level insight.
          </li>
          <li>
            B_A (Accuracy): ★★★★★ (5.0) - The story is a credible and powerful
            example of senior-level impact beyond just writing code.
          </li>
          <li>
            B_C (Clarity): ★★★★★ (5.0) - He told the story with exceptional
            clarity, structure, and impact. The problem, his actions, and the
            result were all perfectly articulated.
          </li>
          <li>
            B_L (Cognitive Load): ★★★★★ (5.0) - He recounted this detailed
            experience with zero cognitive load, indicating it was a formative
            and well-remembered event.
          </li>
        </ul>

        <h4>Key Insights</h4>
        <p>
          This is an outstanding behavioral answer that provides very strong
          evidence of leadership, resilience, empathy, and communication skills.
          It demonstrates that Erick is not just a coder, but a problem-solver
          who can diagnose and treat the root cause of issues, even when they
          are human-centric. This single answer significantly elevates his
          candidacy.
        </p>
      </div>
    ),
  },
];

const glossary = [
  {
    term: "PSP",
    definition:
      "A communication framework used to frame problems (Pain), present solutions (Solution), and provide evidence of effectiveness (Proof).",
  },
  {
    term: "Axiom Cortex™",
    definition:
      "Our proprietary Cognitive AI engine that analyzes interview data to produce a scientific, evidence-based evaluation of a candidate's latent cognitive traits.",
  },
  {
    term: "Cognitive Fingerprint",
    definition:
      "A visualization of a candidate's scores across four key latent traits: Architectural Instinct (AI), Problem-Solving Agility (PSA), Learning Orientation (LO), and Collaborative Mindset (CM).",
  },
  {
    term: "IaC",
    definition:
      "Infrastructure as Code. The practice of managing and provisioning infrastructure through code and software development techniques, rather than through manual processes.",
  },
  {
    term: "MCI",
    definition:
      "Metacognitive Conviction Index. A measure of how well a candidate's confidence is calibrated with their actual knowledge, used to assess self-awareness and coachability.",
  },
  {
    term: "BARS",
    definition:
      "Behaviorally Anchored Rating Scales. A scoring method that ties numerical ratings to specific, observable behaviors, reducing subjective bias.",
  },
  {
    term: "EOR",
    definition:
      "Employer of Record. A service that allows us to legally hire employees in other countries on your behalf, handling all local compliance, payroll, and taxes.",
  },
  {
    term: "MDM",
    definition:
      "Mobile Device Management. Software that allows us to secure, monitor, and manage all company-provisioned laptops, ensuring a high level of security and compliance.",
  },
];

const reportEvidenceLocker = [
  {
    title:
      'Question 1: Walk me through the architecture of a customization you built in X++ that impacted core business processes.',
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Report-aligned Summary</h4>
        <p>
          The Sr Software Engineer candidate described an F&amp;O customization around MSF creation / release-product form extensions, including
          use of extensions, event handlers, Chain of Command, entities, and OData exposure.
          He tied the design to audit logging and business process requirements instead of describing code only.
        </p>
        <h4>Why this mattered in the report</h4>
        <ul>
          <li>Shows practical understanding of F&amp;O extension architecture and upgrade-safe patterns.</li>
          <li>Demonstrates API/data integration familiarity via entities + OData.</li>
          <li>Supports strong procedural and mental-model scoring in the evaluation.</li>
        </ul>
        <h4>Evidence Signals Captured</h4>
        <p>
          The report marks this as a strong answer with clear articulation of extension mechanics, event handlers, and
          business rationale, indicating senior-level familiarity with the Dynamics F&amp;O customization framework.
        </p>
      </div>
    ),
  },
  {
    title:
      "Question 3: Describe a performance bottleneck you've solved in X++ and the method you used to diagnose it.",
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Report-aligned Summary</h4>
        <p>
          The Sr Software Engineer candidate described a large-volume processing bottleneck and the move from single-threaded processing to a
          multi-threaded batch-job approach. He referenced a substantial reduction in processing time and explained
          why the bottleneck occurred.
        </p>
        <h4>Why this mattered in the report</h4>
        <ul>
          <li>Senior-level signal for performance diagnosis and architecture-level remediation (not just query tweaks).</li>
          <li>Strong evidence of F&amp;O batch-processing knowledge in X++.</li>
          <li>Direct support for high Problem-Solving Agility and technical lead capability.</li>
        </ul>
        <h4>Evidence Signals Captured</h4>
        <p>
          The report scores this as an excellent, senior-level response and highlights his ability to move beyond basic
          fixes into structural performance design using multi-threading patterns.
        </p>
      </div>
    ),
  },
  {
    title:
      "Question 6: When extending core modules in F&O, how do you ensure your work remains upgrade-safe?",
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Report-aligned Summary</h4>
        <p>
          The Sr Software Engineer candidate answered directly that the core principle is to use extensions and avoid modifying standard code.
          He contrasted extension-based approaches with older layering practices and explained why extensions preserve
          upgrade safety in modern Dynamics 365 F&amp;O.
        </p>
        <h4>Why this mattered in the report</h4>
        <ul>
          <li>Textbook validation of one of the most important architectural principles in F&amp;O development.</li>
          <li>Strong conceptual clarity and confidence signal for a senior candidate.</li>
          <li>Supports high Architectural Instinct and role-fit confidence.</li>
        </ul>
        <h4>Evidence Signals Captured</h4>
        <p>
          The report characterizes this as a conceptually perfect answer and a strong indicator that the Sr Software Engineer candidate understands
          upgrade-safe architecture, not just syntax-level implementation.
        </p>
      </div>
    ),
  },
  {
    title:
      "Question 7: Describe the lifecycle of a feature from dev → build → test → deploy in a proper F&O enterprise environment.",
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h4>Report-aligned Summary</h4>
        <p>
          The Sr Software Engineer candidate gave a detailed, chronological SDLC walkthrough using Azure DevOps, Git branching, PR reviews,
          PBIs/tasks, environment-specific deployment flow, and release controls. He described this as day-to-day team
          practice rather than theoretical process knowledge.
        </p>
        <h4>Why this mattered in the report</h4>
        <ul>
          <li>Strong evidence of technical lead experience and enterprise delivery discipline.</li>
          <li>Confirms familiarity with modern CI/CD-oriented development lifecycle practices in F&amp;O.</li>
          <li>Supports high Collaborative Mindset and production-readiness confidence.</li>
        </ul>
        <h4>Evidence Signals Captured</h4>
        <p>
          The report highlights the precision and depth of this answer as a major positive signal for seniority,
          ownership, and end-to-end delivery understanding.
        </p>
      </div>
    ),
  },
];

const faqs = [
  {
    question: "How is this different from a normal technical interview?",
    answer:
      "Traditional interviews rely on gut feel and are prone to bias. Our process is a scientific instrument. A human expert conducts a structured, bias-aware interview, and our Axiom Cortex™ AI provides a deep, evidence-based analysis of the candidate's core cognitive abilities. You get an auditable 'Evidence Locker' with scores and rationale, not just an opinion.",
  },
  {
    question: "What do the Cognitive Fingerprint scores mean?",
    answer:
      "They measure four key latent traits that predict success in a senior engineering role: Architectural Instinct (systems thinking), Problem-Solving Agility (adapting to new challenges), Learning Orientation (coachability), and Collaborative Mindset (teamwork). Each score is benchmarked against an ideal profile for the specific role.",
  },
  {
    question:
      "How do you mitigate bias, especially for non-native English speakers?",
    answer:
      "Our system is built on a 'Conceptual Fidelity Protocol.' We score the candidate on the quality and logic of their ideas, not their choice of words or accent. Our 'Cortez Calibration Layer' specifically adjusts for linguistic markers common among second-language speakers to ensure we are measuring their thinking, not their fluency.",
  },
  {
    question: "Can I see the raw data?",
    answer:
      "Yes. The 'Evidence Locker' section provides full, untruncated transcript citations for every key question, along with the ideal answer blueprint and the detailed scoring breakdown. We provide radical transparency so you can see the proof behind the score.",
  },
];

export default function TalentEvaluationClient() {
  const getBarColor = (score: number) => {
    if (score >= 4.0) return "hsl(var(--primary))"; // Excellent - Blue
    if (score >= 3.0) return "hsl(var(--chart-2))"; // Good - Yellow
    return "hsl(var(--destructive))"; // Concern - Red
  };

  return (
    <main className="manual-page container max-w-6xl py-10">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        /
        <Link href="/process" className="hover:text-foreground">
          Process
        </Link>{" "}
        /<span>Talent Evaluations</span>
      </div>
      <header className="glass-panel gradient-ring hero-depth system-grid my-8 rounded-2xl border border-border/70 p-5 md:p-7">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Evidence-Based Hiring Report
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Technical Talent Evaluation Report
              <span className="block text-primary">Sr Software Engineer</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
              This is a real anonymized evaluation report generated by our{" "}
              <WithTooltip label="Our proprietary Cognitive AI engine for talent evaluation.">
                <Link
                  href="/research/axiom-cortex-scientific-report"
                  className="text-primary hover:underline"
                >
                  Axiom Cortex™
                </Link>
              </WithTooltip>{" "}
              engine. We convert interviews into auditable proof, calibrated scores,
              and a mitigation-ready hiring decision for CTO teams.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Final Recommendation: Hire",
                "Final Score: 4.1 / 5.0",
                "Dynamics 365 F&O role",
                "Evidence Locker included",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 p-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.16),transparent_52%),radial-gradient(circle_at_86%_18%,rgba(16,185,129,0.12),transparent_46%)]" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Evaluation Control Surface
                </p>
                <span className="flex items-center gap-1.5 text-[11px] text-foreground/80">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                  </span>
                  Finalized
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border/60 bg-card/40 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-foreground/70">
                    Candidate Role
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Sr Software Engineer
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-card/40 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-foreground/70">
                    Recommendation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary">Hire</p>
                </div>
                <div className="rounded-xl border border-border/60 bg-card/40 p-3 sm:col-span-2">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] uppercase tracking-wide text-foreground/70">
                      Final Composite Score
                    </p>
                    <p className="text-sm font-semibold text-primary">4.1 / 5.0</p>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-background/70">
                    <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-primary via-sky-300 to-emerald-300" />
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-border/60 bg-background/50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                  Decision Flow
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-foreground/90">
                  {["interview", "evidence", "score", "risk", "hire"].map((step, idx, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-md border border-border/60 bg-card/40 px-2 py-1">
                        {step}
                      </span>
                      {idx < arr.length - 1 ? (
                        <ArrowRight className="h-3.5 w-3.5 text-primary" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Architectural Instinct", "3.9 / 5.0", "Upgrade-safe design reasoning"],
          ["Problem-Solving Agility", "4.4 / 5.0", "Bottleneck diagnosis + remediation"],
          ["Learning Orientation", "4.2 / 5.0", "Honest self-assessment and growth signal"],
          ["Collaborative Mindset", "4.6 / 5.0", "Technical lead communication strength"],
        ].map(([label, value, note]) => (
          <div
            key={label}
            className="glass-panel gradient-ring rounded-xl border border-border/70 bg-background/65 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{label}</p>
            <p className="mt-2 text-lg font-bold text-foreground">{value}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">{note}</p>
          </div>
        ))}
      </section>

      <section className="my-16 space-y-8">
        <div className="glass-panel gradient-ring rounded-2xl border border-border/70 p-5 md:p-6 shadow-lg">
          <p className="text-sm font-semibold text-primary">
            Is this candidate the right fit?
          </p>
          <div className="flex items-center gap-3 mt-3">
            <UserCheck className="h-8 w-8 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Executive Summary: Strong Hire
            </h2>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
            <div className="space-y-3 text-sm leading-7 text-muted-foreground">
            <p>
              This recommendation is based on a comprehensive analysis that
              reveals the Sr Software Engineer candidate as a strong and experienced developer with a solid
              grasp of Microsoft Dynamics 365 F&amp;O extension architecture,
              upgrade-safe customizations, and enterprise development practices.
            </p>
            <p>
              He demonstrates practical experience solving production
              performance bottlenecks at scale using multi-threading in X++,
              strong communication as a technical lead, and a mature
              collaborative approach. The identified risks are minor and
              mitigable, with the report’s final recommendation marked as Hire.
            </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Executive Decision Snapshot
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="rounded-lg border border-border/60 bg-card/40 px-3 py-2">
                  Role fit: Senior F&amp;O development environment
                </li>
                <li className="rounded-lg border border-border/60 bg-card/40 px-3 py-2">
                  Strengths: collaboration, SDLC discipline, performance remediation
                </li>
                <li className="rounded-lg border border-border/60 bg-card/40 px-3 py-2">
                  Risks: minor and mitigable with guided ramp
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
            Evidence: Final score 4.1 / 5.0 (Final recommendation: Hire)
          </p>
        </div>

        <div className="glass-panel gradient-ring rounded-2xl border border-border/70 p-5 md:p-6 shadow-lg">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Cognitive Profile
            </p>
            <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
            Cognitive & Psychometric Profile
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Candidate vs target latent-trait scoring with evidence-backed rationale and calibration context.
            </p>
          </div>
          <div className="mt-5">
            <ScoreProfilePanel
              title="Candidate vs target cognitive profile"
              subtitle="Scores use the same 5-point rubric used in the evidence-backed evaluation report."
              points={cognitiveData.map((trait) => ({
                label: trait.name,
                value: trait.candidate,
                target: trait.ideal,
              }))}
            />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {cognitiveData.map((trait) => (
              <div
                key={trait.name}
                className="glass-card-interactive rounded-xl border border-border/70 bg-background/70 p-4 flex flex-col"
              >
                <p className="text-sm font-semibold text-primary">
                  {trait.pain}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {trait.name}
                  </h3>
                </div>
                <div className="mt-4 text-sm text-muted-foreground flex-grow">
                  {renderWithMany(trait.rationale, [
                    { term: "PSA", tooltip: "Problem-Solving Agility" },
                    { term: "LO", tooltip: "Learning Orientation" },
                    { term: "MCI", tooltip: "Metacognitive Conviction Index" },
                  ])}
                </div>

                <div className="mt-4 border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">Evidence:</h4>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="font-bold text-lg">
                      {trait.candidate}/5.0
                    </span>
                    <div className="w-full bg-border rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full"
                        style={{
                          width: `${trait.candidate * 20}%`,
                          backgroundColor: getBarColor(trait.candidate),
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="my-5 flex flex-wrap justify-center gap-x-4 gap-y-2 rounded-xl border border-border/60 bg-background/50 p-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-primary"></div>
              <span>Excellent (4.0+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: "hsl(var(--chart-2))" }}
              ></div>
              <span>Good (3.0-3.9)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-destructive"></div>
              <span>Concern (&lt;3.0)</span>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-border/60 bg-background/55 p-4">
            <h4 className="flex items-center gap-2 text-base text-foreground">
              <HelpCircle className="h-5 w-5 text-primary" />
              How is this score calculated?
            </h4>
            <div className="mt-3 text-sm leading-7 text-muted-foreground">
              <span>The score is a data-driven output from the </span>
              <WithTooltip label="Our proprietary Cognitive AI engine for talent evaluation.">
                <Link
                  href="/research/axiom-cortex-scientific-report"
                  className="text-primary border-b border-dashed"
                >
                  Axiom Cortex™
                </Link>
              </WithTooltip>
              <span>
                {" "}
                AI. The engine analyzes the full interview transcript, maps the
                candidate's statements to our proprietary{" "}
              </span>
              <WithTooltip label="Behaviorally Anchored Rating Scales: a scoring method that ties ratings to specific, observable behaviors.">
                <span className="text-primary border-b border-dashed">
                  BARS
                </span>
              </WithTooltip>
              <span>
                {" "}
                rubric, and applies calibration layers to mitigate bias. The
                final score is a weighted synthesis of performance across
                multiple questions, grounded in direct evidence.
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/70">
            <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4">
              <p className="text-sm font-semibold text-primary">
                How self-aware is the candidate?
              </p>
              <div className="flex items-center gap-3 mt-3">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  <WithTooltip content="Metacognitive Conviction Index: Assesses how well a candidate's confidence is calibrated with their actual knowledge.">
                    <span className="border-b border-dashed">MCI Analysis</span>
                  </WithTooltip>
                </h3>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <span>
                  The Sr Software Engineer candidate falls in the expert zone, bordering on "Honest Self-Assessment."
                  His{" "}
                </span>
                <WithTooltip content="Metacognitive Conviction Index">
                  <span className="text-primary border-b border-dashed">
                    MCI
                  </span>
                </WithTooltip>
                <span>
                  {" "}
                  indicates strong calibration between confidence and knowledge.
                  The report notes he speaks confidently on development lifecycle,
                  branching strategies, and performance tuning while qualifying
                  areas where he is less current, especially API design.
                </span>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <h4 className="font-semibold text-foreground">Evidence:</h4>
                <div className="my-2 rounded-lg border border-border/60 bg-background/70 p-2 font-mono text-xs text-center">
                  Risk Zone [Dunning-Kruger] --- [Confident] --- [Expert] ---
                  [HONEST SELF-ASSESSMENT] &lt;--●
                </div>
                <p className="text-xs text-muted-foreground">
                  This level of calibration is a strong senior signal because it
                  improves decision quality, reduces hiring risk, and supports
                  coachability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel gradient-ring my-12 rounded-2xl border border-border/70 p-5 md:p-6 shadow-lg">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Risk Controls
            </p>
            <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
            Risk Factors & Mitigation Plan
            </h2>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {risks.map((risk) => (
              <div
                key={risk.title}
                className="glass-card-interactive rounded-xl border border-border/70 bg-background/70 p-4"
              >
                <p className="text-sm font-semibold text-destructive">
                  Operating risk: {risk.title}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {renderWithMany(risk.description, [
                    { term: "IaC", tooltip: "Infrastructure as Code" },
                  ])}
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <h4 className="font-semibold text-primary">
                    Mitigation plan
                  </h4>
                  <p className="text-sm text-foreground m-0">
                    {renderWithMany(risk.mitigation, [
                      { term: "IaC", tooltip: "Infrastructure as Code" },
                      { term: "LO", tooltip: "Learning Orientation" },
                    ])}
                  </p>
                </div>
                <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
                  {risk.proof}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel gradient-ring my-12 rounded-2xl border border-border/70 p-5 md:p-6">
          <h2
            id="evidence-locker"
            className="text-2xl md:text-3xl font-bold text-center text-foreground scroll-mt-20"
          >
            Evidence Locker
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
            This is the raw proof behind our analysis. A human expert
            interviews the candidate, and our Cognitive AI synthesizes the
            conversation, comparing responses against ideal answer blueprints to
            provide an objective score.
          </p>
          <div className="mt-8">
            <Accordion type="single" collapsible>
              {reportEvidenceLocker.map((item) => (
                <AccordionItem
                  title={item.title}
                  value={item.title}
                  key={item.title}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/process"
              className="font-semibold text-primary hover:underline"
            >
              See Our Full Evaluation Process{" "}
              <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="glass-panel gradient-ring my-12 rounded-2xl border border-border/70 p-5 md:p-6 shadow-lg">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Buyer Enablement
            </p>
            <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
            Glossary & FAQs
            </h2>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-foreground">Glossary of Terms</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {glossary.map((item) => (
                <div key={item.term} className="rounded-xl border border-border/60 bg-background/55 p-4 text-sm">
                  <p className="font-bold text-foreground">{item.term}</p>
                  <p className="mt-2 text-muted-foreground m-0 leading-6">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-foreground">
              Frequently Asked Questions
            </h3>
            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-border/60 bg-background/55 p-4">
                  <h4 className="font-semibold text-foreground">
                    {faq.question}
                  </h4>
                  <p
                    className="mt-2 text-sm leading-6 text-muted-foreground m-0"
                    dangerouslySetInnerHTML={{
                      __html: faq.answer
                        .replace(
                          "Axiom Cortex™",
                          '<a href="/research/axiom-cortex-scientific-report" class="text-primary hover:underline">Axiom Cortex™</a>'
                        )
                        .replace(
                          "Evidence Locker",
                          '<a href="#evidence-locker" class="text-primary hover:underline">Evidence Locker</a>'
                        ),
                    }}
                  ></p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-panel gradient-ring relative mt-16 overflow-hidden rounded-2xl border border-border/70 p-6 md:p-8 shadow-lg">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_50%)]" />
          <div className="relative text-center">
          <h2 className="text-2xl font-bold text-foreground">Ready to De-Risk Your Hiring?</h2>
          <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Stop sifting through unqualified resumes. Let us provide you with a
            shortlist of 2-3 elite, pre-vetted candidates ready to make an
            impact.
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button mt-6"
          >
            Book a No-Obligation Strategy Call
          </a>
          </div>
        </div>
      </section>
    </main>
  );
}
