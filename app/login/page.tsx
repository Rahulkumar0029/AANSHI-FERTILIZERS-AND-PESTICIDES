"use client";

import { login } from "@/lib/auth";
import { useState } from "react";
import { Leaf, Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mimic API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Simple check for owner role
    const role = username === "owner" ? "owner" : "user";
    await login(role);
    
    if (role === "owner") {
      router.push("/owner");
    } else {
      router.push("/");
    }
    router.refresh();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8faf8]">
      {/* Left Side: Image/Branding (Hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Agriculture Field"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a] via-[#1a2e1a]/40 to-transparent flex flex-col justify-end p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
                <Leaf className="text-[#a8e6cf] w-8 h-8" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight">AANSHI</h1>
            </div>
            <p className="text-xl text-[#a8e6cf] font-medium tracking-wide uppercase">Fertilizers & Pesticides</p>
            <p className="text-gray-300 max-w-md leading-relaxed text-lg pt-4">
              Providing premium agricultural solutions for over 15 years. Join our network of trusted farmers and partners.
            </p>
            <div className="flex items-center gap-3 pt-6 text-sm font-semibold text-[#a8e6cf]">
              <ShieldCheck size={20} />
              <span>GOVERNMENT APPROVED LICENSES</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center md:text-left space-y-2">
            {/* Mobile Logo Only */}
            <div className="md:hidden flex flex-col items-center mb-6">
              <Leaf className="text-[#1a2e1a] w-12 h-12 mb-2" />
              <h2 className="text-2xl font-bold text-[#1a2e1a]">AANSHI</h2>
              <p className="text-xs text-secondary font-medium tracking-wider uppercase">Fertilizers & Pesticides</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-500">Please enter your details to access your portal.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Username / Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                    <Lock size={20} />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between ml-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20" />
                <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">Remember me</label>
              </div>
              <button type="button" className="text-sm font-semibold text-primary hover:underline">Forgot Password?</button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 group"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Enter Portal <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">Need help? Contact support</p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                 <Leaf size={16} className="text-primary" />
              </div>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                 <ShieldCheck size={16} className="text-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
