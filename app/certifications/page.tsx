import { ShieldCheck, FileText, BadgeCheck, Award, CheckCircle2 } from "lucide-react";

export default function Certifications() {
    return (
        <div className="pt-20 bg-accent/10 min-h-screen">
            <section className="container mx-auto px-4 py-20 max-w-5xl">
                <div className="text-center space-y-4 mb-20">
                    <h1 className="text-5xl font-bold text-primary">Certified Reliability</h1>
                    <p className="text-xl text-gray-600 font-medium">Aanshi Fertilizers is a government-approved and licensed agricultural provider.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Fertilizer Retail License", desc: "Authorized by the Rajasthan Agriculture Department for the sale and distribution of all major fertilizer types.", icon: ShieldCheck },
                        { title: "Pesticide Sale Certificate", desc: "Government verified license to handle and sell crop protection products and insecticides.", icon: FileText },
                        { title: "Seeds Distribution License", desc: "Quality-assured distributor license for high-performance and hybrid seeds.", icon: BadgeCheck },
                        { title: "Technical Expertise Certificate", desc: "Awarded for 15+ years of specialized knowledge in crop nutrition and pest control.", icon: Award },
                    ].map((cert, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-border shadow-sm flex items-start gap-8 hover:translate-y-[-8px] transition-all">
                            <div className="bg-primary/10 p-5 rounded-2xl text-primary">
                                <cert.icon size={32} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold">{cert.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{cert.desc}</p>
                                <div className="inline-flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-full border border-green-100 text-sm">
                                    <CheckCircle2 size={16} /> Verified & Authentic
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-white p-12 rounded-[3rem] border border-border text-center space-y-6 shadow-sm">
                    <h2 className="text-3xl font-bold">Why Verification Matters</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        At Aanshi Fertilizers, we believe in transparency. Agricultural products directly affect food safety and farm productivity. That&apos;s why we maintain strict adherence to all government regulations and quality standards.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 pt-4">
                        <div className="flex items-center gap-2 font-bold text-primary"><ShieldCheck size={20} /> ISO Quality Standards</div>
                        <div className="flex items-center gap-2 font-bold text-primary"><ShieldCheck size={20} /> Agriculture Dept. Approved</div>
                        <div className="flex items-center gap-2 font-bold text-primary"><ShieldCheck size={20} /> Genuine Batch Tracking</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
