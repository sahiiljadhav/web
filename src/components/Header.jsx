"use client";

import { Instagram, Dribbble, Zap, Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(enableDark);
    document.documentElement.classList.toggle('dark', enableDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    }
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <div className="bg-[#F5F6F8] dark:bg-[#1E1E1E]">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-[#121212] h-[60px] border-b border-transparent dark:border-transparent transition-all duration-200 hover:border-[#E9E9E9] dark:hover:border-[#333333]">
        <div className="h-full max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Left Section - Social Icons */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <a
              href={`https://wa.me/918793197804?text=${encodeURIComponent('Hi! I want to schedule a quick strategy call about AI marketing.')}`}
              className="w-8 h-8 md:w-10 md:h-10 bg-[#FF8C42] hover:bg-[#FF7A28] active:bg-[#E6621E] rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105"
              aria-label="Instagram"
            >
              <Instagram
                size={12}
                className="text-white md:w-[14px] md:h-[14px]"
              />
            </a>
            <a
              href="mailto:akashpawar321@gmail.com?subject=Project%20inquiry&body=Hi%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20project.%20Here%E2%80%99s%20some%20context%3A%20"
              className="w-8 h-8 md:w-10 md:h-10 bg-[#FF8C42] hover:bg-[#FF7A28] active:bg-[#E6621E] rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105"
              aria-label="Dribbble"
            >
              <Dribbble
                size={12}
                className="text-white md:w-[14px] md:h-[14px]"
              />
            </a>
            <a
              href="#schedule"
              className="w-8 h-8 md:w-10 md:h-10 bg-[#FF8C42] hover:bg-[#FF7A28] active:bg-[#E6621E] rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105"
              aria-label="LinkedIn"
            >
              <Zap size={12} className="text-white md:w-[14px] md:h-[14px]" />
            </a>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <a
              href="#home"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#FF8C42] transition-all duration-200 pb-1"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#FF8C42] transition-all duration-200 pb-1"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#FF8C42] transition-all duration-200 pb-1"
            >
              Portfolio
            </a>

            {/* Logo */}
            <div className="text-[#030303] dark:text-white font-extrabold text-sm tracking-wide">
              🦒 TALL GIRAFFE
            </div>

            <a
              href="#about"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#FF8C42] transition-all duration-200 pb-1"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#FF8C42] transition-all duration-200 pb-1"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Navigation - Logo + Hamburger */}
          <div className="lg:hidden flex items-center space-x-3 md:space-x-4">
            <div className="text-[#030303] dark:text-white font-extrabold text-sm tracking-wide">
              🦒 TALL GIRAFFE
            </div>
            <button 
              className="text-[#030303] dark:text-white hover:text-[#FF8C42] p-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Right Section - Theme Toggle + Contact Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-[#E9E9E9] dark:border-[#333333] flex items-center justify-center text-[#030303] dark:text-white hover:border-[#FF8C42] dark:hover:border-[#FF8C42] transition-colors"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href="#contact" className="bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white px-6 xl:px-8 py-2 rounded-full font-semibold text-sm hover:from-[#FF7A28] hover:to-[#E6621E] active:from-[#E6621E] active:to-[#CC5815] transform hover:scale-105 transition-all duration-200 shadow-lg">
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#121212] border-b border-[#E9E9E9] dark:border-[#333333] shadow-lg">
            <nav className="px-6 py-4 space-y-3">
              <a
                href="#home"
                className="block text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="block text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="block text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              {/* Team link removed */}
              <button
                aria-label="Toggle dark mode"
                onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
                className="mt-2 w-full border border-[#E9E9E9] dark:border-[#333333] rounded-full py-2 text-[#030303] dark:text:white"
              >
                {isDark ? 'Light mode' : 'Dark mode'}
              </button>
              <a
                href="#contact"
                className="block text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a href="#contact" className="block text-center w-full bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white px-6 py-2 rounded-full font-semibold text-sm mt-4">
                Get Started
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}