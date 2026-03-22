import Image from "next/image";
import { Award, Target, Eye, Users } from "lucide-react";

export default function About() {
    return (
        <div className="pt-10">
            {/* Header Section */}
            <section className="bg-accent/30 py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl font-bold text-primary mb-6">Our Story</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Leading the way in agricultural innovation and support for over 15 years.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-4 overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-0" />
                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1594776208131-aa10aecee030?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Agricultural Consultant"
                                    width={800}
                                    height={1000}
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl z-20 border border-border">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl">15+ Years</h4>
                                        <p className="text-sm text-gray-500">Industry Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="inline-block bg-accent px-4 py-2 rounded-lg text-primary font-bold text-sm tracking-wider uppercase">
                                About Aanshi Fertilizers
                            </div>
                            <h2 className="text-4xl font-bold leading-snug">
                                Helping Farmers Improve Productivity through Expertise
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Founded by <strong>Anil Kumar Bishnoi</strong>, an experienced agriculture expert, Aanshi Fertilizers and Pesticides was born from a vision to provide genuine, effective, and scientifically-back products to the farming community.
                                </p>
                                <p>
                                    With over 15 years of technical knowledge in fertilizers, seeds, and crop protection, Anil Kumar has successfully guided thousands of farmers towards better yields and sustainable practices.
                                </p>
                                <p>
                                    Our physical store has been a cornerstone of the local agricultural community for 2.5 years, and now we are expanding our reach to support farmers and wholesalers across India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission/Vision */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-accent/20 p-10 rounded-[2.5rem] border border-accent/30 space-y-6">
                            <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center text-white">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                To empower the backbone of India&mdash;our farmers&mdash;by providing them with genuine, high-quality, and government-certified agricultural inputs that ensure prosperity.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] border border-border shadow-sm space-y-6">
                            <div className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center text-white">
                                <Eye size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                To become the most trusted national partner for agricultural supplies, recognized for our technical expertise, integrity, and nationwide reach.
                            </p>
                        </div>

                        <div className="bg-accent/20 p-10 rounded-[2.5rem] border border-accent/30 space-y-6">
                            <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center text-white">
                                <Users size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary">Commitment</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                We don&apos;t just sell products; we build relationships. Our team provides end-to-end guidance from sowing to harvest for better results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
