import React from "react";
// Section Components
import Hero from "../components/sections/home/Hero";
import LanguageShowcase from "../components/sections/home/LanguageShowcase";
import Features from "../components/sections/home/Features";
import Newsletter from "../components/sections/home/Newsletter";
import Editor from "../components/sections/ide/Editor";
import HowItWorks from "../components/sections/home/HowItWorks";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#05010d] min-h-screen">
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        <div className="h-12 md:h-24" />

        {/* Language Showcase */}
        <LanguageShowcase />

        {/* Features Section */}
        <Features />

        {/* Workflows Section */}
        <HowItWorks />

        {/* Try It Now Section */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[57.2px] md:mb-6">
            Try It Right Now
          </h2>
          <p className="text-sm md:text-xl text-white/60 leading-7 tracking-[0.3px] mx-auto px-2 lg:px-8 mb-4">
            Write code in your native language and see it transpile to Python
            instantly.Write in your preferred programming language and watch it
            seamlessly convert into clean, executable Python instantly. No more
            manual rewriting or tedious translation between languages — just
            write, transpile, and run.
          </p>
        </div>

        {/* Editor with padding */}
        <div className="px-2 md:px-8 lg:px-16 w-full max-w-7xl mx-auto">
          <Editor
            bg={false}
            className="h-[500px] md:h-[600px] rounded-xl border border-white/10 shadow-2xl shadow-purple-500/10"
          />
        </div>

        {/* Newsletter/CTA Section */}
        <Newsletter />
      </main>
    </div>
  );
};

export default HomePage;
