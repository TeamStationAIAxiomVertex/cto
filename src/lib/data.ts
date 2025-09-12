export type PlaybookArticle = {
  id: string;
  slug: string;
  title: string;
  category: {
    name: string;
    slug: string;
  };
  summary: string;
  content: string;
  imageUrl: string;
  imageHint: string;
};

export const categories = [
  {
    name: 'Sales',
    slug: 'sales',
    description: 'Strategies to boost your sales performance.',
  },
  {
    name: 'Marketing',
    slug: 'marketing',
    description: 'Tips and tricks for modern marketing.',
  },
  {
    name: 'Engineering',
    slug: 'engineering',
    description: 'Best practices for building great software.',
  },
  {
    name: 'Customer Success',
    slug: 'customer-success',
    description: 'Ensuring your customers achieve their goals.',
  },
];

export const articles: PlaybookArticle[] = [
  {
    id: '1',
    slug: 'mastering-the-discovery-call',
    title: 'Mastering the Discovery Call',
    category: { name: 'Sales', slug: 'sales' },
    summary:
      'Learn the art of the discovery call. This guide covers preparation, key questions to ask, and how to identify customer pain points effectively to set the stage for a successful sale.',
    content:
      'The discovery call is arguably the most critical step in the sales process. It\'s your opportunity to understand a prospect\'s needs, challenges, and goals. A well-executed discovery call builds rapport and positions you as a trusted advisor, not just a vendor.\n\nPreparation is key. Before you even pick up the phone, research the prospect and their company. Understand their industry, their role, and any recent news or announcements. This allows you to tailor your questions and demonstrate genuine interest. <code>console.log("Research is your friend!");</code>\n\nDuring the call, focus on asking open-ended questions. Instead of "Do you have a budget for this?", try "What does your current resource allocation for this area look like?". This encourages a conversation rather than a simple yes/no answer. The goal is to uncover the "why" behind their needs.',
    imageUrl: 'https://picsum.photos/seed/sales1/600/400',
    imageHint: 'sales call',
  },
  {
    id: '2',
    slug: 'negotiation-tactics-for-win-win-deals',
    title: 'Negotiation Tactics for Win-Win Deals',
    category: { name: 'Sales', slug: 'sales' },
    summary:
      'This playbook article breaks down effective negotiation strategies that lead to mutually beneficial agreements. Move beyond price and learn to negotiate on value, building stronger, long-term customer relationships.',
    content:
      'Negotiation is a dance, not a battle. The goal is a "win-win" outcome where both parties feel they\'ve gained value. This starts with understanding your own value proposition inside and out, and being able to articulate it clearly.\n\nOne key tactic is to anchor the conversation high. Start with a proposal that gives you room to maneuver, but make sure it\'s justifiable. Then, listen more than you talk. Understand their objections and priorities. Is price the real issue, or is it implementation time, support levels, or specific features? <code>if (objection === "price") { exploreValue(); }</code>\n\nAlways be prepared to walk away. Knowing your bottom line (your Best Alternative to a Negotiated Agreement, or BATNA) gives you the confidence to not accept a bad deal. Remember, a good deal is one that is profitable and sustainable for you, and valuable for the customer.',
    imageUrl: 'https://picsum.photos/seed/sales2/600/400',
    imageHint: 'handshake deal',
  },
  {
    id: '3',
    slug: 'content-marketing-seo-synergy',
    title: 'Content Marketing and SEO Synergy',
    category: { name: 'Marketing', slug: 'marketing' },
    summary:
      'Unlock the power of combining content marketing with SEO. This article explains how to create valuable content that ranks high in search engines, driving organic traffic and generating qualified leads.',
    content:
      'Content and SEO are two sides of the same coin. Great content is useless if no one sees it, and great SEO is pointless without quality content to rank. The magic happens when you align your content strategy with your SEO goals.\n\nStart with keyword research. Use tools like Ahrefs or SEMrush to identify what your target audience is searching for. These keywords should form the foundation of your content calendar. Create blog posts, guides, and videos that answer the questions your audience is asking.<code>const strategy = { keywordResearch: true, valueContent: true };</code>\n\nOn-page SEO is crucial. Ensure your titles, meta descriptions, headers, and image alt-text are optimized for your target keywords. But don\'t keyword-stuff. Write for humans first, search engines second. High-quality, engaging content will naturally earn backlinks and social shares, which are powerful ranking signals.',
    imageUrl: 'https://picsum.photos/seed/marketing1/600/400',
    imageHint: 'content strategy',
  },
  {
    id: '4',
    slug: 'building-a-successful-email-nurture-sequence',
    title: 'Building a Successful Email Nurture Sequence',
    category: { name: 'Marketing', slug: 'marketing' },
    summary:
      'Guide new leads from awareness to conversion with a well-crafted email nurture sequence. This playbook covers segmentation, content, timing, and automation to maximize engagement.',
    content:
      'An email nurture sequence is a powerful automation tool to build relationships with prospects over time. The goal is to provide value and build trust, so that when they are ready to buy, you are top of mind.\n\nThe first step is segmentation. Not all leads are created equal. Segment your audience based on how they entered your funnel (e.g., downloaded an ebook, attended a webinar). This allows you to send highly relevant content.\n\nA typical sequence might include a welcome email, followed by educational content, case studies, and finally, a soft call-to-action. Each email should have a single, clear purpose. Use a mix of content formats to keep things interesting. <code>// Example Sequence\n// 1. Welcome & Asset Delivery\n// 2. Educational Content (Blog Post)\n// 3. Social Proof (Case Study)\n// 4. Soft CTA (Webinar Invite)</code>',
    imageUrl: 'https://picsum.photos/seed/marketing2/600/400',
    imageHint: 'email marketing',
  },
  {
    id: '5',
    slug: 'code-review-best-practices',
    title: 'Code Review Best Practices',
    category: { name: 'Engineering', slug: 'engineering' },
    summary:
      'Improve code quality and foster a collaborative culture with effective code reviews. This guide outlines best practices for both the reviewer and the author to make reviews constructive and efficient.',
    content:
      'Code reviews are a cornerstone of modern software development. They catch bugs, improve code quality, and spread knowledge across the team. However, a poor review process can create friction and slow down development.\n\nFor authors, keep your pull requests (PRs) small and focused. A PR should do one thing and do it well. Provide a clear description of the changes and the "why" behind them. If there are UI changes, include screenshots or a GIF. <code>// Bad PR: "Update stuff"\n// Good PR: "Refactor: Update user authentication flow to use JWT"\n// - Implements new token-based auth\n// - Deprecates session-based logic</code>\n\nFor reviewers, the prime directive is to be kind and constructive. Frame feedback as suggestions, not commands ("What do you think about extracting this into a helper function?"). Automate the small stuff; use a linter and code formatter to handle style debates so reviewers can focus on logic and architecture. The goal is to improve the code, not to criticize the author.',
    imageUrl: 'https://picsum.photos/seed/engineering1/600/400',
    imageHint: 'code review',
  },
  {
    id: '6',
    slug: 'agile-sprint-planning-guide',
    title: 'An Engineer\'s Guide to Agile Sprint Planning',
    category: { name: 'Engineering', slug: 'engineering' },
    summary:
      'Sprint planning doesn\'t have to be a drag. This article provides a practical guide for engineers on how to participate effectively in sprint planning, estimate work, and set achievable goals.',
    content:
      'Effective sprint planning sets the tone for the entire sprint. It ensures the team is aligned on what they need to build and that the workload is realistic. As an engineer, your active participation is crucial for success.\n\nBefore the meeting, take time to review the backlog items that are likely to be discussed. Come prepared with questions and initial thoughts. During the meeting, your primary role is to help break down user stories into technical tasks and provide estimates. Story points (e.g., using a Fibonacci sequence) are a common way to estimate effort, not time.\n\nDon\'t be afraid to voice concerns. If a story seems too large or ill-defined, say so. It\'s better to clarify scope during planning than to run into a wall mid-sprint. The goal is to commit to a body of work that the team is confident they can complete. <code>function estimate(story) {\n  if (story.isVague) return "Needs more info";\n  return 5; // Fibonacci points\n}</code>',
    imageUrl: 'https://picsum.photos/seed/engineering2/600/400',
    imageHint: 'agile board',
  },
  {
    id: '7',
    slug: 'proactive-customer-success',
    title: 'The Shift to Proactive Customer Success',
    category: { name: 'Customer Success', slug: 'customer-success' },
    summary:
      'Move from a reactive to a proactive customer success model. This guide explains how to use data to anticipate customer needs, reduce churn, and drive expansion revenue.',
    content:
      'Reactive customer success waits for customers to have a problem. Proactive customer success anticipates their needs and helps them achieve their goals before they even have to ask. This requires a fundamental shift in mindset and tooling.\n\nIt all starts with data. You need to track product usage data to understand which customers are healthy and which are at risk. A customer who hasn\'t logged in for 30 days is a churn risk. A customer using an advanced feature is an opportunity for a case study or upsell.\n\nDevelop a set of "health scores" based on key metrics like usage frequency, feature adoption, and support tickets. Use these scores to trigger automated outreach or tasks for your CSMs. A low health score could trigger an automated email with a link to a relevant tutorial or an offer for a check-in call. <code>const healthScore = calculateHealth(usageData); \nif (healthScore < 50) { \n  triggerIntervention(); \n}</code>',
    imageUrl: 'https://picsum.photos/seed/success1/600/400',
    imageHint: 'customer support',
  },
  {
    id: '8',
    slug: 'handling-difficult-customers',
    title: 'Turning Difficult Customers into Advocates',
    category: { name: 'Customer Success', slug: 'customer-success' },
    summary:
      'Learn proven techniques for de-escalating tense situations and handling difficult customers. Turn a negative experience into an opportunity to build loyalty and create a brand advocate.',
    content:
      'Every CSM will encounter a difficult or angry customer. How you handle these situations can be the difference between losing a customer and creating a lifelong advocate. The key is to listen, empathize, and take ownership.\n\nWhen a customer is upset, let them vent. Actively listen and don\'t interrupt. Use phrases like "I understand why you\'re frustrated" to show empathy. Apologize for the issue, even if it wasn\'t your fault. An apology is not an admission of guilt; it\'s an acknowledgment of their frustration.\n\nOnce you\'ve de-escalated the situation, shift to problem-solving. Clearly state what you are going to do to help them and provide a timeline. Follow up to ensure the issue is resolved to their satisfaction. Going the extra mile can transform a detractor into your biggest fan. Remember the HEARD technique: Hear, Empathize, Apologize, Resolve, Diagnose.',
    imageUrl: 'https://picsum.photos/seed/success2/600/400',
    imageHint: 'empathy conversation',
  },
];
