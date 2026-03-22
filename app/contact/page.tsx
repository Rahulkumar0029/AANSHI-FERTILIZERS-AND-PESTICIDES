import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="pt-10 bg-[#fdfdfb]">
            {/* Header */}
            <section className="bg-accent/40 py-24 px-4 text-center">
                <h1 className="text-5xl font-bold text-primary mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                    Have a question or looking for a bulk order? We&apos;re here to help you grow.
                </p>
            </section>

            {/* Main Grid */}
            <section className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Info Side */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">Visit Our Store</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Experience expert guidance in person. Our shop is fully stocked with the latest agricultural solutions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: MapPin, title: "Physical Address", content: "Aanshi Fertilizers & Pesticides, Rajasthan, India" },
                                { icon: Phone, title: "Phone Support", content: "+91 XXXXXXXXXX", sub: "Mon-Sat, 9AM-8PM" },
                                { icon: Mail, title: "Email Inquiry", content: "info@aanshifertilizers.com" },
                                { icon: Clock, title: "Store Timings", content: "9:00 AM - 8:00 PM", sub: "Sundays: Closed" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-6 border-b border-border pb-6 last:border-0">
                                    <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl">{item.title}</h4>
                                        <p className="text-lg text-gray-700 mt-1">{item.content}</p>
                                        {item.sub && <p className="text-sm text-gray-400 mt-1 font-medium">{item.sub}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <a
                                href="https://wa.me/91XXXXXXXXXX"
                                className="w-full bg-[#25D366] text-white p-6 rounded-[2rem] flex items-center justify-center gap-4 text-xl font-bold hover:shadow-2xl transition-all shadow-lg active:scale-95"
                            >
                                <MessageSquare size={28} /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-border relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/30 rounded-full -mr-16 -mt-16 blur-xl" />

                            <h3 className="text-3xl font-bold mb-8">Send a Quick Inquiry</h3>
                            <form className="space-y-6 relative z-10 text-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 ml-1">Full Name</label>
                                        <input type="text" className="w-full bg-muted/50 p-4 rounded-2xl border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 ml-1">Phone Number</label>
                                        <input type="tel" className="w-full bg-muted/50 p-4 rounded-2xl border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1">Crop/Product Interest</label>
                                    <input type="text" className="w-full bg-muted/50 p-4 rounded-2xl border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1">Your Message</label>
                                    <textarea rows={5} className="w-full bg-muted/50 p-4 rounded-2xl border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none" />
                                </div>

                                <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:translate-y-[-4px] hover:shadow-xl active:translate-y-0 transition-all">
                                    <Send size={20} /> Send Inquiry
                                </button>

                                <p className="text-center text-sm text-gray-400 font-medium">
                                    We value your privacy. Your details are safe with us.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Mockup */}
            <section className="py-24 container mx-auto px-4">
                <div className="h-[500px] w-full bg-gray-100 rounded-[3rem] border border-border flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="text-center space-y-4">
                        <MapPin className="text-primary w-12 h-12 mx-auto" />
                        <p className="text-xl font-bold text-gray-500 italic">Interactive Google Maps Location Integration Coming Soon</p>
                        <p className="text-gray-400 font-medium">Visit: Anil Kumar Bishnoi Store, Rajasthan</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
