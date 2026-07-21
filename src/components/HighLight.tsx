'use client';

import React from 'react';
import Image from 'next/image';
import { Home, Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface StatItem {
  id: number;
  label: string;
  value: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  { id: 1, label: 'Properties Listed', value: '12,500+', icon: Home },
  { id: 2, label: 'Happy Customers', value: '8,200+', icon: Users },
  { id: 3, label: 'Verified Agents', value: '450+', icon: Award },
  { id: 4, label: 'Safe Transactions', value: '100%', icon: ShieldCheck },
];

const HighLight: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Images Section */}
          <div className="relative">
            {/* Main Featured Image */}
            <div className="relative w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
                alt="Modern Luxury Home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating secondary image card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 h-36 sm:w-60 sm:h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400"
                alt="Property Interior"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>

            {/* Decorative background glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Side: Text & Stats */}
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase">
              Why Choose HomeFinder
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 leading-tight">
              We Help You Find Your Dream Property Easily & Safely
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-base leading-relaxed">
              HomeFinder is the most trusted real estate platform. Whether you want to buy, rent, or sell a home, we offer verified property listings and seamless direct communication with expert agents.
            </p>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.id}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700/50 flex items-start gap-4 transition-all hover:border-blue-500/50"
                  >
                    <div className="p-3 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {item.value}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button 
                type="button"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 cursor-pointer"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HighLight;