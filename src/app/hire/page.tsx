
import { Phone, Calendar, Clock } from 'lucide-react';

export default function HirePage() {
    return (
        <main className="container">
            <div className="text-center my-16">
                <h1 className="h1 mb-4">Book a Strategy Call</h1>
                <p className="lead max-w-2xl mx-auto">
                    Let's discuss your specific needs. In a 15-minute call, we can map your roles, security requirements, and a go-live timeline. Find a time that works for you below.
                </p>
            </div>

            <div className="card max-w-4xl mx-auto p-8">
                <h2 className="h2 mt-0 text-center">Schedule Your 15-Minute Discovery Call</h2>
                <div className="text-center text-mute mb-8">
                    Select a date and time to connect with our team.
                </div>
                
                {/* Placeholder for a real scheduling component like Calendly */}
                <div className="bg-surface-2 rounded-lg p-12 text-center">
                    <Calendar size={48} className="mx-auto text-accent-custom" />
                    <p className="mt-4 font-semibold">Scheduling component would be embedded here.</p>
                    <p className="text-sm text-mute">For demonstration purposes, this is a static placeholder.</p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="icon-card !flex-col items-center">
                        <Phone className="icon" />
                        <h3 className="h3 text-base mt-2">Personalized</h3>
                        <p className="text-sm text-mute m-0">A call tailored to your specific technical and business goals.</p>
                    </div>
                    <div className="icon-card !flex-col items-center">
                        <Clock className="icon" />
                        <h3 className="h3 text-base mt-2">Efficient</h3>
                        <p className="text-sm text-mute m-0">15 minutes is all we need to define a clear path forward.</p>
                    </div>
                    <div className="icon-card !flex-col items-center">
                        <Calendar className="icon" />
                        <h3 className="h3 text-base mt-2">No Obligation</h3>
                        <p className="text-sm text-mute m-0">This is a strategy session, not a sales pitch.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
