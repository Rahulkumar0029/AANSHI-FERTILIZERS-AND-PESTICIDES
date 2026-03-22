import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Truck, Award, ShieldCheck, ArrowRight, Wheat, Beaker, Sprout } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e1a]/90 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Lush green field"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 z-20 text-white">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30 text-accent font-semibold text-sm">
              <Award size={18} /> 15+ Years of Agriculture Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Trusted Agricultural <br />
              <span className="text-primary italic">Solutions</span> for India
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              Premium fertilizers, pesticides, and seeds to maximize your crop yield.
              Government certified products delivered straight to your farm or shop.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:translate-x-1 transition-all">
                View Products <ArrowRight size={20} />
              </Link>
              <Link href="/wholesale" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
                Wholesale Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, label: "Government Certified", sub: "Approved Licenses" },
              { icon: Truck, label: "PAN India Supply", sub: "Reliable Delivery" },
              { icon: CheckCircle, label: "Quality Assured", sub: "Geniune Products" },
              { icon: Award, label: "2.5 Years Shop", sub: "Trusted Locally" },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="bg-accent p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  <stat.icon className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{stat.label}</h3>
                  <p className="text-sm text-gray-500">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Complete Farming Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of high-performance agricultural inputs specifically selected for Indian soil and climate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fertilizers", desc: "Premium nutrients for stronger, healthier crops and improved soil fertility.", icon: Wheat },
              { title: "Crop Protection", desc: "Advanced pesticides, insecticides, and fungicides to safeguard your investment.", icon: Beaker },
              { title: "Quality Seeds", desc: "High-yield seeds developed for maximum productivity and disease resistance.", icon: Sprout },
            ].map((cat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-border hover:shadow-xl transition-all group">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <cat.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cat.desc}</p>
                <Link href="/products" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                  Learn More <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hindi Message Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">किसानों की उन्नति, हमारा संकल्प</h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-medium">
              &quot;आंशी फर्टिलाइजर्स एंड पेस्टिसाइड्स पिछले 15+ वर्षों के अनुभव के साथ भारतीय किसानों को उच्च गुणवत्ता वाले उत्पाद और सही मार्गदर्शन प्रदान कर रहा है।&quot;
            </p>
            <div className="mt-10">
              <span className="block italic text-lg">- अनिल कुमार बिश्नोई (कृषि विशेषज्ञ)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Wholesale */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />

          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Become a Wholesale Partner</h2>
          <p className="text-xl opacity-90 max-w-2xl mb-10 relative z-10">
            Join our network of shopkeepers and distributors across India. Get bulk pricing, combo packages, and expert supply chain support.
          </p>
          <Link href="/wholesale" className="bg-white text-secondary px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform relative z-10">
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
