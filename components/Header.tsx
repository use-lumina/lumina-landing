'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './ui/Container';
import Button from './ui/Button';
import GitHubStarButton from './GitHubStarButton';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-1
      ${isScrolled ? 'bg-gray-950/80 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'}
    `}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/lumina-full-logo.svg"
              alt="Lumina Logo"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#use-cases" className="text-gray-300 hover:text-white transition-colors">
              Use Cases
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <a
              href="https://docs.uselumina.io"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </nav>

          <div className="flex items-center space-x-4 lg:hidden">
            {' '}
            {/* Show on mobile and tablet, hide on lg and up */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {' '}
            {/* Hide on mobile and tablet, show on lg and up */}
            <GitHubStarButton />
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </Container>
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-950/90 backdrop-blur-xl border-b border-gray-800 py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#use-cases"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <a
              href="https://docs.uselumina.io"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </a>
            {/* These buttons are moved here for mobile view */}
            <GitHubStarButton />
            <Button variant="outline" size="sm" onClick={() => setIsMenuOpen(false)}>
              Sign In
            </Button>
            <Button size="sm" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
