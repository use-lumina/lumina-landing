import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Lumina
              </span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/#features" className="text-gray-600 hover:text-gray-900 transition">
                Features
              </Link>
              <Link href="/docs" className="text-amber-600 font-semibold">
                Docs
              </Link>
              <Link
                href="https://github.com/yourusername/lumina"
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-700 transition shadow-lg shadow-amber-500/30"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to get started with Lumina observability platform
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Getting Started */}
            <Link
              href="/docs/getting-started"
              className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                Getting Started
              </h3>
              <p className="text-gray-600">
                Quick start guide to install and configure Lumina in your LLM application
              </p>
              <div className="mt-4 text-amber-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* API Reference */}
            <Link
              href="/docs/api-reference"
              className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                API Reference
              </h3>
              <p className="text-gray-600">
                Complete REST API documentation for traces, analytics, and replay endpoints
              </p>
              <div className="mt-4 text-amber-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* SDK Reference */}
            <Link
              href="/docs/sdk"
              className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                SDK Documentation
              </h3>
              <p className="text-gray-600">
                Client SDK reference for TypeScript/JavaScript and integration examples
              </p>
              <div className="mt-4 text-amber-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Architecture */}
            <Link
              href="/docs/architecture"
              className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                Architecture
              </h3>
              <p className="text-gray-600">
                System design, components, and how Lumina processes traces at scale
              </p>
              <div className="mt-4 text-amber-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Deployment */}
            <Link
              href="/docs/deployment"
              className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                Deployment Guide
              </h3>
              <p className="text-gray-600">
                Deploy Lumina on Docker, Kubernetes, AWS, GCP, or on-premise infrastructure
              </p>
              <div className="mt-4 text-amber-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Examples */}
            <Link
              href="/docs/examples"
              className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                Examples
              </h3>
              <p className="text-gray-600">
                Sample applications and integration patterns for common LLM frameworks
              </p>
              <div className="mt-4 text-amber-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 border-2 border-amber-500/30">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Need help getting started?
                </h3>
                <p className="text-gray-400">
                  Check out the main repository for complete documentation and examples
                </p>
              </div>
              <Link
                href="https://github.com/yourusername/lumina"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-700 transition shadow-lg shadow-amber-500/30 whitespace-nowrap"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">&copy; 2025 Lumina. MIT License.</p>
        </div>
      </footer>
    </div>
  );
}
