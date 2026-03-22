import Link from "next/link";
import { Phone, Mail, MapPin, Leaf, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a2e1a] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Leaf className="text-[#a8e6cf] w-10 h-10" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-tight">AANSHI</span>
                                <span className="text-[10px] text-gray-300 font-medium tracking-[0.2em] uppercase">Fertilizers & Pesticides</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            15+ years of expertise in providing high-quality agricultural solutions. Trusted by farmers across India.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-primary-foreground transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-primary-foreground transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-primary-foreground transition-colors"><Twitter size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#a8e6cf]">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Our Products</Link></li>
                            <li><Link href="/wholesale" className="hover:text-white transition-colors">Wholesale Inquiry</Link></li>
                            <li><Link href="/support" className="hover:text-white transition-colors">Farmer Support</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#a8e6cf]">Categories</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/products?cat=fertilizers" className="hover:text-white transition-colors">Fertilizers</Link></li>
                            <li><Link href="/products?cat=pesticides" className="hover:text-white transition-colors">Pesticides</Link></li>
                            <li><Link href="/products?cat=seeds" className="hover:text-white transition-colors">Quality Seeds</Link></li>
                            <li><Link href="/products?cat=organic" className="hover:text-white transition-colors">Organic Products</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#a8e6cf]">Visit Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary-foreground shrink-0 mt-1" size={18} />
                                <span>Anil Kumar Bishnoi, Rajasthan, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary-foreground shrink-0" size={18} />
                                <span>+91 XXXXXXXXXX</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary-foreground shrink-0" size={18} />
                                <span>info@aanshifertilizers.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Aanshi Fertilizers and Pesticides. All rights reserved. Government Approved Agricultural Licenses.</p>
                </div>
            </div>
        </footer>
    );
}
