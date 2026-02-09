import Container from './ui/Container'
import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Documentation', href: 'https://docs.uselumina.io' },
      { name: 'Changelog', href: '/changelog' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    Resources: [
      { name: 'Guides', href: '/guides' },
      { name: 'API Reference', href: '/api' },
      { name: 'Community', href: '/community' },
      { name: 'Status', href: 'https://status.uselumina.io' },
    ],
    Legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' },
    ],
  }

  const socials = [
    {
      name: 'github',
      href: 'https://github.com/use-lumina/Lumina',
      path: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z'
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/uselumina',
      path: 'M18.244 2.25h.466l-5.606 6.065L20.244 22H14.85l-4.704-5.078L6.44 22H2.954l5.242-5.698L2.25 2.25h5.484l3.867 4.19L18.244 2.25Zm-4.04 16.143L6.035 4.31H4.684l7.65 8.32L19.317 20h-1.378l-4.704-5.077ZM14.04 22L6.035 4.31H4.684L12.334 12.63L19.317 20h-1.378L14.04 22Z'
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/company/uselumina',
      path: 'M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V10.66C13.6,9.73 14.86,9 16.2,9C19.1,9 20,10.91 20,13.57V21H21V21M7,21H3V9H7V21M5,3C3.89,3 3,3.89 3,5C3,6.11 3.89,7 5,7C6.11,7 7,6.11 7,5C7,3.89 6.11,3 5,3Z'
    }
  ];

  return (
    <footer className="border-t border-gray-800 py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo + description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-primary-500 to-accent-500 rounded-lg" />
              <span className="text-xl font-bold text-gradient">Lumina</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mb-4">
              OpenTelemetry-native observability for production AI systems.
              Built for backend engineers who demand reliability.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © 2026 Lumina. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>All systems operational</span>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
