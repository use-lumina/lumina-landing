import Link from "next/link";

export default function GettingStartedPage() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-8 space-y-1">
              <Link href="/docs" className="block px-4 py-2 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition">
                ← Back to Docs
              </Link>
              <div className="pt-4 space-y-1">
                <a href="#installation" className="block px-4 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition">
                  Installation
                </a>
                <a href="#setup" className="block px-4 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition">
                  Setup Services
                </a>
                <a href="#instrument" className="block px-4 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition">
                  Instrument Your App
                </a>
                <a href="#query" className="block px-4 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition">
                  Query Traces
                </a>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1>
            <p className="text-xl text-gray-600 mb-8">
              Get up and running with Lumina in less than 5 minutes
            </p>

            {/* Prerequisites */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Bun 1.0+ or Node.js 20+</li>
                <li>PostgreSQL 14+</li>
                <li>An LLM application (Anthropic, OpenAI, etc.)</li>
              </ul>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Installation</h2>
              <p className="text-gray-700 mb-4">
                Clone the Lumina repository and install dependencies:
              </p>
              <div className="bg-black rounded-lg p-6 mb-4 overflow-x-auto">
                <pre className="text-amber-100 text-sm"><code>{`# Clone the repository
git clone https://github.com/yourusername/lumina
cd lumina

# Install dependencies
bun install

# Create database
createdb lumina`}</code></pre>
              </div>
            </section>

            {/* Setup */}
            <section id="setup" className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Start Lumina Services</h2>
              <p className="text-gray-700 mb-4">
                Lumina consists of three microservices. Start them in separate terminals:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ingestion Service (Port 9411)</h3>
                  <div className="bg-black rounded-lg p-6 overflow-x-auto">
                    <pre className="text-amber-100 text-sm"><code>cd services/ingestion && bun run dev</code></pre>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">API Service (Port 8081)</h3>
                  <div className="bg-black rounded-lg p-6 overflow-x-auto">
                    <pre className="text-amber-100 text-sm"><code>cd services/api && bun run dev</code></pre>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Replay Service (Port 8082)</h3>
                  <div className="bg-black rounded-lg p-6 overflow-x-auto">
                    <pre className="text-amber-100 text-sm"><code>cd services/replay && bun run dev</code></pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Instrument */}
            <section id="instrument" className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Instrument Your Application</h2>
              <p className="text-gray-700 mb-4">
                Install the Lumina SDK in your LLM application:
              </p>
              <div className="bg-black rounded-lg p-6 mb-6 overflow-x-auto">
                <pre className="text-amber-100 text-sm"><code>bun add @lumina/sdk</code></pre>
              </div>

              <p className="text-gray-700 mb-4">
                Wrap your LLM calls with Lumina tracing:
              </p>
              <div className="bg-black rounded-lg p-6 overflow-x-auto">
                <pre className="text-amber-100 text-sm"><code>{`import Anthropic from '@anthropic-ai/sdk';
import { initLumina } from '@lumina/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const lumina = initLumina({
  endpoint: 'http://localhost:9411/v1/traces',
  service_name: 'my-app',
});

// Wrap your LLM calls
const response = await lumina.traceLLM(
  async () => anthropic.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 1024,
    messages: [{ role: 'user', content: 'Hello!' }],
  }),
  {
    name: 'chat',
    system: 'anthropic',
    prompt: 'Hello!',
  }
);`}</code></pre>
              </div>
            </section>

            {/* Query */}
            <section id="query" className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Query Your Traces</h2>
              <p className="text-gray-700 mb-4">
                Use the Query API to retrieve and analyze traces:
              </p>
              <div className="bg-black rounded-lg p-6 mb-6 overflow-x-auto">
                <pre className="text-amber-100 text-sm"><code>{`# Get all traces
curl "http://localhost:8081/api/traces"

# Filter by service
curl "http://localhost:8081/api/traces?service=my-app"

# Get cost analytics
curl "http://localhost:8081/api/analytics/cost?service=my-app"

# Get latency analytics
curl "http://localhost:8081/api/analytics/latency?service=my-app"`}</code></pre>
              </div>
            </section>

            {/* Next Steps */}
            <section className="mb-12 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/docs/api-reference" className="p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-400 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900 mb-2">API Reference →</h3>
                  <p className="text-sm text-gray-600">Explore all available API endpoints</p>
                </Link>
                <Link href="/docs/sdk" className="p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-400 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900 mb-2">SDK Documentation →</h3>
                  <p className="text-sm text-gray-600">Learn advanced SDK features</p>
                </Link>
                <Link href="/docs/deployment" className="p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-400 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900 mb-2">Deployment Guide →</h3>
                  <p className="text-sm text-gray-600">Deploy to production environments</p>
                </Link>
                <Link href="/docs/examples" className="p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-400 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900 mb-2">Examples →</h3>
                  <p className="text-sm text-gray-600">See sample implementations</p>
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">&copy; 2025 Lumina. MIT License.</p>
        </div>
      </footer>
    </div>
  );
}
