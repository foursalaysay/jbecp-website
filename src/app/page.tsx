"use client";
import { useState } from 'react';
import Image from "next/image";
import { GithubIcon, FacebookIcon, TwitterIcon, MenuIcon, XIcon } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-gray-900 flex flex-col">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between p-4 md:p-6 bg-black/30 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Image
            src="/parser-logo.png"
            alt="BlockchainDev Logo"
            width={40}
            height={40}
            className="text-red-500 rounded-full"
          />
          <span className="hidden md:inline text-white text-xl font-bold">JBECP - <span className="text-red-500 text-xl font-bold">Parsers</span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-red-500 transition-colors">Home</a>
          <a href="#" className="hover:text-red-500 transition-colors">About</a>
          <a href="#" className="hover:text-red-500 transition-colors">Events</a>
          <a href="#" className="hover:text-red-500 transition-colors">Members</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-red-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm md:hidden z-50">
            <div className="flex flex-col items-center py-4">
              <a href="#" className="w-full text-center py-3 text-gray-300 hover:bg-red-600/80 hover:text-white transition-colors">Home</a>
              <a href="#" className="w-full text-center py-3 text-gray-300 hover:bg-red-600/80 hover:text-white transition-colors">About</a>
              <a href="#" className="w-full text-center py-3 text-gray-300 hover:bg-red-600/80 hover:text-white transition-colors">Events</a>
              <a href="#" className="w-full text-center py-3 text-gray-300 hover:bg-red-600/80 hover:text-white transition-colors">Members</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative flex flex-col items-center justify-center px-4 md:px-8 pt-12 md:pt-20 pb-32 mt-10 lg:mt-24">
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/solana.png"
            alt="Ethereum"
            width={60}
            height={60}
            className="absolute top-1/4 left-1/4 animate-float opacity-20"
          />
          <Image
            src="/react.png"
            alt="Code"
            width={50}
            height={50}
            className="absolute top-1/3 right-1/4 animate-float-delayed opacity-20"
          />
          <Image
            src="/blockchain.png"
            alt="Smart Contract"
            width={40}
            height={40}
            className="absolute bottom-1/4 left-1/3 animate-float opacity-20"
          />
        </div>

        {/* Hero Section */}
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            Build the <span className="text-red-500">Future</span> of Web3
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 px-4">
            Join our community of blockchain developers building the next generation of decentralized applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <button className="px-6 md:px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
              Join Community
            </button>
            <button className="px-6 md:px-8 py-3 border border-gray-400 text-white rounded-full hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-red-500 mb-4">Our Mission</h3>
              <p className="text-gray-300">Building a community of blockchain developers focused on creating innovative solutions and advancing the Web3 ecosystem.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-red-500 mb-4">What We Do</h3>
              <p className="text-gray-300">We develop, collaborate, and share knowledge about blockchain technology, smart contracts, and decentralized applications.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-red-500 mb-4">Join Us</h3>
              <p className="text-gray-300">Whether you&apos;re a beginner or expert, join our community to learn, contribute, and grow in the blockchain space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-red-500 font-bold mb-2">DEC 15, 2024</div>
              <h3 className="text-xl font-bold text-white mb-2">Blockchain Workshop</h3>
              <p className="text-gray-300 mb-4">Introduction to Smart Contract Development with Solidity</p>
              <button className="text-red-500 hover:text-red-400 transition-colors">Learn More →</button>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-red-500 font-bold mb-2">DEC 20, 2024</div>
              <h3 className="text-xl font-bold text-white mb-2">Web3 Hackathon</h3>
              <p className="text-gray-300 mb-4">48-hour hackathon focused on building DeFi applications</p>
              <button className="text-red-500 hover:text-red-400 transition-colors">Learn More →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-16 px-4 md:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Featured Members</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4"></div>
              <h3 className="text-white font-bold mb-1">John Doe</h3>
              <p className="text-red-500">Lead Developer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4"></div>
              <h3 className="text-white font-bold mb-1">Jane Smith</h3>
              <p className="text-red-500">Smart Contract Expert</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4"></div>
              <h3 className="text-white font-bold mb-1">Mike Johnson</h3>
              <p className="text-red-500">DApp Architect</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4"></div>
              <h3 className="text-white font-bold mb-1">Sarah Wilson</h3>
              <p className="text-red-500">Blockchain Researcher</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm hover:bg-black/40 transition-all group">
              <div className="w-full h-24 md:h-32 relative flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/partner1.png"
                  alt="Solana"
                  fill
                  className="object-contain p-2 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]"
                />
              </div>
            </div>
            <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm hover:bg-black/40 transition-all group">
              <div className="w-full h-24 md:h-32 relative flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/partner2.png"
                  alt="React"
                  fill
                  className="object-contain p-2 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]"
                />
              </div>
            </div>
            <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm hover:bg-black/40 transition-all group">
              <div className="w-full h-24 md:h-32 relative flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/partner3.png"
                  alt="CTU"
                  fill
                  className="object-contain p-2 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]"
                />
              </div>
            </div>
            <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm hover:bg-black/40 transition-all group">
              <div className="w-full h-24 md:h-32 relative flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/partner4.png"
                  alt="IT Argao"
                  fill
                  className="object-contain p-2 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 md:py-6 bg-black/30 backdrop-blur-sm mt-auto">
        <div className="flex justify-center gap-6 md:gap-8 text-gray-400">
          <a href="https://github.com" className="hover:text-red-500 transition-colors flex items-center gap-2">
            <GithubIcon className="w-5 h-5 opacity-75" />
          </a>
          <a href="https://linkedin.com" className="hover:text-red-500 transition-colors flex items-center gap-2">
            <FacebookIcon className="w-5 h-5 opacity-75" />
          </a>
          <a href="https://twitter.com" className="hover:text-red-500 transition-colors flex items-center gap-2">
            <TwitterIcon className="w-5 h-5 opacity-75" />
          </a>
        </div>
      </footer>
    </div>
  );
}
