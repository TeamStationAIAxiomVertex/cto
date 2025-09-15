

import type { ReactNode } from 'react';

type Country = {
    name: string;
    slug: string;
    pain: string;
    solution: string;
    kpi: string;
    flag: ReactNode;
};

export const countries: Country[] = [
    { name: 'Mexico', slug: 'mexico', pain: 'Need US time-zone overlap with a massive talent pool?', solution: 'Leverage the largest and most mature nearshore market, with deep expertise in enterprise software and a huge pool of bilingual engineers.', kpi: '3-hour overlap with PST/CST/EST', flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#006847" d="M0 0h3v2H0z"/><path fill="#fff" d="M1 0h2v2H1z"/><path fill="#ce1126" d="M2 0h1v2H2z"/></svg> },
    { name: 'Colombia', slug: 'colombia', pain: 'Looking for a rapidly growing hub with strong bilingual skills?', solution: 'Tap into the vibrant ecosystems of Bogotá and Medellín, known for their adaptable workforce and strong government support for tech.', kpi: 'Top 5 in LATAM English proficiency', flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#fcd116" d="M0 0h3v2H0z"/><path fill="#003893" d="M0 1h3v.5H0z"/><path fill="#ce1126" d="M0 1.5h3v.5H0z"/></svg> },
    { name: 'Brazil', slug: 'brazil', pain: 'Need talent for complex, large-scale systems?', solution: 'Access the largest talent pool in LATAM, with world-class expertise in FinTech, Data Science, and complex backend systems.', kpi: 'LATAM\'s #1 talent market by volume', flag: <svg width="24" height="24" viewBox="0 0 10 7"><path fill="#009b3a" d="M0 0h10v7H0z"/><path fill="#fedf00" d="M5 1L1 3.5 5 6l4-2.5z"/><circle cx="5" cy="3.5" r="1.75" fill="#002776"/></svg> },
    { name: 'Argentina', slug: 'argentina', pain: 'Searching for highly-educated, senior talent?', solution: 'Benefit from a mature market with exceptionally high English proficiency and a deep pool of senior and lead-level engineers.', kpi: 'Highest English proficiency in LATAM', flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#74acdf" d="M0 0h3v2H0z"/><path fill="#fff" d="M0 .67h3v.66H0z"/></svg> },
    { name: 'Chile', slug: 'chile', pain: 'Require enterprise-grade stability and skills?', solution: 'Engage with one of the most stable and economically advanced countries in the region, with a strong emphasis on engineering and data science.', kpi: 'Regional leader in B2B/financial tech', flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#fff" d="M0 0h3v2H0z"/><path fill="#d52b1e" d="M0 1h3v1H0z"/><path fill="#0039a6" d="M0 0h1v1H0z"/><path fill="#fff" d="M.5.3l.1.3h.3L.6.8l.1.3-.2-.2-.3.2.1-.3L.3.6h.3z"/></svg> },
    { name: 'Peru', slug: 'peru', pain: 'Need a cost-effective location without quality loss?', solution: 'Tap into a rising tech scene with a growing pool of skilled mobile and web developers known for their strong work ethic.', kpi: 'Strong cost/quality ratio', flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#d91023" d="M0 0h3v2H0z"/><path fill="#fff" d="M1 0h1v2H1z"/></svg> },
    { name: 'Costa Rica', slug: 'costa-rica', pain: 'Need a proven U.S. tech hub?', solution: 'Hire from a major hub for U.S. tech companies, with a highly educated, bilingual workforce accustomed to enterprise-level expectations.', kpi: 'Major hub for US tech companies', flag: <svg width="24" height="24" viewBox="0 0 5 3"><path fill="#002b7f" d="M0 0h5v3H0z"/><path fill="#fff" d="M0 1h5v1H0z"/><path fill="#ce1126" d="M0 1.2h5v.6H0z"/></svg> },
    { name: 'Uruguay', slug: 'uruguay', pain: 'Need a stable, digitally advanced tech hub?', solution: 'Access a highly skilled, specialized talent pool in one of LATAM\'s most digitally advanced countries, with excellent infrastructure.', kpi: 'Top software exporter per capita', flag: <svg width="24" height="24" viewBox="0 0 3 2"><g fill="#fff"><path d="M0 0h3v2H0z"/><path fill="#0038a8" d="M0 .2h3v.2H0zm0 .4h3v.2H0zm0 .8h3v.2H0zm0 .4h3v.2H0z"/></g><path fill="#fcd116" d="M.3.2c.1-.1.3-.1.4 0 .1.1.1.3 0 .4-.1.1-.3.1-.4 0-.1-.1-.1-.3 0-.4z"/></svg> },
    { name: 'Ecuador', slug: 'ecuador', pain: 'Seeking emerging talent with high potential?', solution: 'Explore an emerging talent market with a growing number of skilled engineers and a strong desire to work with U.S. companies.', kpi: 'Significant cost advantage', flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#fcd116" d="M0 0h3v2H0z"/><path fill="#003893" d="M0 1h3v.5H0z"/><path fill="#ce1126" d="M0 1.5h3v.5H0z"/></svg> },
    { name: 'Guatemala', slug: 'guatemala', pain: 'Seeking a growing Central American tech hub?', solution: 'Leverage a growing pool of young, motivated engineers in a market with strong U.S. cultural ties and a focus on service industries.', kpi: 'Central Time Zone alignment', flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#4997d0" d="M0 0h3v2H0z"/><path fill="#fff" d="M1 0h1v2H1z"/></svg> },
];
