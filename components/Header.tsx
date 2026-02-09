'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './ui/Container'
import Button from './ui/Button'
import GitHubStarButton from './GitHubStarButton'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-1
      ${isScrolled ? 'bg-gray-950/80 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'}
    `}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Lumina-logo.png"
              alt="Lumina Logo"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
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

          <div className="flex items-center space-x-4">
            <GitHubStarButton />
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
