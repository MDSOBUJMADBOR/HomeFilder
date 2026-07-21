'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      // API call or registration logic can be placed here
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 shadow-xl text-white relative overflow-hidden">
        {/* Background Decorative Blur Elements */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl mb-4 text-white">
            <Mail className="w-6 h-6" />
          </div>

          {/* Heading & Description */}
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3">
            Stay Updated with HomeFinder
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-8 leading-relaxed">
            Subscribe to our newsletter and get the latest real estate deals, market trends, and premium property listings delivered straight to your inbox.
          </p>

          {/* Form & Success State */}
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md text-white py-3.5 px-6 rounded-xl border border-white/30 transition-all duration-300">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span className="font-medium text-sm sm:text-base">
                Thank you for subscribing to our newsletter!
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-white text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-sm transition-all shadow-inner"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-950 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 text-sm cursor-pointer shadow-md"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-xs text-blue-200 mt-4">
            We value your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;