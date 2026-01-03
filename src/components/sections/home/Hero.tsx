import React from "react";
import { useNavigate } from "react-router-dom";

const languages = [
  { native: "English", english: "English" },
  { native: "অসমীয়া", english: "Assamese" },
  { native: "বাংলা", english: "Bengali" },
  { native: "बड़ो", english: "Bodo" },
  { native: "মৈতৈলোন্", english: "Manipuri" },
  { native: "Khasi", english: "Khasi" },
  { native: "Garo", english: "Garo" },
  { native: "Mizo", english: "Mizo" },
];

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("dc_token");
    if (token) {
      navigate("/ide");
    } else {
      navigate("/login");
    }
  };


  return (
    <section className="relative bg-[#121212] overflow-hidden pt-4 pb-16 md:pt-8 md:pb-20 px-4 md:px-0">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/home/homeBg.jpg"
          alt="Blur Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-0 opacity-15 top-[10%] pointer-events-none blur-3xl">
        <img
          src="/assets/home/splashBg.png"
          alt="Glow Decor"
          className="mx-auto max-w-full h-auto scale-150"
        />
      </div>

      <div className="absolute inset-x-0 z-0 mx-auto max-w-6xl top-[400px] md:top-[350px] pointer-events-none px-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl opacity-50" />
          <img
            src="/assets/home/heroBg.png"
            alt="IDE Mockup"
            className="relative mx-auto w-full opacity-40 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl brightness-90 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center pt-8 md:pt-12 lg:pt-16 pb-40">
        {/* Main Heading */}
        <div className="max-w-[1000px] text-center mb-8 px-6">
          <h1 className="text-4xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-8">
            <span className="text-white">Code the </span>
            <span
              style={{
                background: "linear-gradient(135deg, #F13DD4 0%, #7000FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                paddingRight: "0.1em",
                marginRight: "-0.1em"
              }}
              className="italic block sm:inline"
            >
              world
            </span>
            <br className="hidden md:block" />
            <span className="text-white"> in your own </span>
            <span
              style={{
                background: "linear-gradient(135deg, #F83A3A 0%, #F13DD4 50%, #7000FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                paddingRight: "0.15em",
                marginRight: "-0.15em"
              }}
              className="italic block sm:inline"
            >
              language
            </span>
            {/* <span className="text-white">.</span> */}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-white/40 mx-auto max-w-3xl font-medium tracking-tight">
            DesiCodes lets you learn programming in English, Assamese, Bengali, Bodo,
            Manipuri, Khasi, Garo, and Mizo — <span className="text-white/70 font-semibold text-balance">directly from your browser.</span> No installations, no setup.
            Just code, run, and explore.
          </p>
        </div>

        {/* CTA Button */}
        <div className="my-10">
          <button
            onClick={handleGetStarted}
            className="group relative inline-flex items-center justify-center transition-all duration-500 ease-out hover:scale-105 active:scale-95"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F13DD4] via-[#7000FF] to-[#F13DD4] rounded-full blur-xl opacity-40 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <span className="relative bg-[#F8F8F8] text-black px-12 md:px-16 py-5 rounded-full text-lg md:text-xl font-bold tracking-tight shadow-[0_10px_40px_rgba(255,255,255,0.1)]">
              Get Started for Free
            </span>
          </button>
        </div>

        {/* Language Scrolling Banner with cleaner look */}
        <div className="w-full mt-20 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#121212] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#121212] to-transparent z-10" />

          <div className="py-8 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="marquee-track flex items-center whitespace-nowrap gap-16 md:gap-32">
              {languages.concat(languages).map((lang, index) => (
                <div key={index} className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-100 opacity-40 group/lang">
                  <span className="text-xl md:text-2xl text-white font-bengali tracking-wide group-hover/lang:text-[#F13DD4] transition-colors">
                    {lang.native}
                  </span>
                  <span className="text-xs md:text-sm text-white/40 uppercase tracking-[0.2em] font-bold">
                    {lang.english}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
