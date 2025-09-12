import { ShieldCheck, Laptop, FileLock, Scale } from 'lucide-react';

export default function TrustPage() {
    const pillars = [
        {
            icon: <ShieldCheck size={24} className="icon" />,
            title: 'SOC 2 / ISO 27001 Alignment',
            description: 'Our operational controls for security, availability, and privacy are aligned with leading industry standards.',
        },
        {
            icon: <Laptop size={24} className="icon" />,
            title: 'Secure Device & MDM',
            description: 'We provision and manage all developer laptops with enterprise-grade MDM, enforcing disk encryption and remote wipe.',
        },
        {
            icon: <FileLock size={24} className="icon" />,
            title: 'Integrated EOR & Compliance',
            description: 'We handle all Employer of Record complexities, ensuring compliance with local labor laws in every LATAM country.',
        },
        {
            icon: <Scale size={24} className="icon" />,
            title: 'Cyber & E&O Insurance',
            description: 'All work is covered by comprehensive Cybersecurity and Errors & Omissions (E&O) insurance.',
        },
    ];

  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="h1">The Trust Center</h1>
        <p className="lead max-w-3xl mx-auto">
          Security and compliance are not features; they are the foundation of our platform. We provide an auditable, enterprise-ready environment for your nearshore team from day one.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {pillars.map((item) => (
             <div className="card p-6" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="h3 m-0 text-lg">{item.title}</h3>
                </div>
                <p className="text-sm mt-4 text-mute">{item.description}</p>
            </div>
          ))}
      </div>

      <div className="prose mx-auto my-12 text-center">
        <h2 className="h2">The Security Checklist for Vetting Any Partner</h2>
        <p>
          A vendor who cannot provide clear answers to these questions is a significant risk to your organization. With TeamStation AI, the answer is "yes" to all.
        </p>
        <ul className="list-none p-0 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <li className="icon-card !items-start"><ShieldCheck className="icon mt-1"/><div><strong>Device Management:</strong> Are devices corporate-owned and MDM-enrolled?</div></li>
            <li className="icon-card !items-start"><ShieldCheck className="icon mt-1"/><div><strong>Access Control:</strong> Is MFA/SSO and least-privilege RBAC enforced?</div></li>
            <li className="icon-card !items-start"><ShieldCheck className="icon mt-1"/><div><strong>Compliance:</strong> Can they provide evidence of SOC 2 or ISO 27001 alignment?</div></li>
            <li className="icon-card !items-start"><ShieldCheck className="icon mt-1"/><div><strong>Insurance:</strong> Do they carry Cyber and E&O insurance?</div></li>
        </ul>
      </div>

      <div className="section my-8 text-center">
          <h2 className="h2 mt-0">Security is Our Default</h2>
          <p className="lead max-w-2xl mx-auto" style={{marginBottom: '24px'}}>Explore our MSA and see how our commitment to security is built into our legal framework.</p>
          <a href="/hire" className="cta">
            Book a Strategy Call
          </a>
      </div>
    </div>
  );
}
