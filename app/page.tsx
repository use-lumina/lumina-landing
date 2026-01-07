import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-linear-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Lumina
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">
                How it Works
              </Link>
              <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition">
                Docs
              </Link>
              <Link
                href="/docs/getting-started"
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-700 transition shadow-lg shadow-amber-500/30"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50 opacity-60"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Lightweight Observability
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                for LLM Applications
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Track costs, latency, and quality across your AI systems with minimal overhead.
              Built for developers who ship production LLM applications.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/getting-started"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black rounded-lg font-bold hover:from-amber-600 hover:to-yellow-700 transition shadow-xl shadow-amber-500/40"
              >
                Get Started
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 bg-black text-amber-500 rounded-lg font-semibold hover:bg-gray-900 transition border-2 border-amber-500"
              >
                See How it Works
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">OpenTelemetry</div>
              <div className="mt-2 text-gray-600">Compatible</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Zero-Config</div>
              <div className="mt-2 text-gray-600">PostgreSQL Storage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Real-time</div>
              <div className="mt-2 text-gray-600">Trace Ingestion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Subtle gradient accents */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-l from-amber-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-r from-yellow-100/20 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to monitor LLM apps
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built for AI/ML workloads with developer experience in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Emphasized Card */}
            <div className="relative bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-2xl shadow-xl border-2 border-amber-500/30 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition"></div>
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full mb-4 border border-amber-500/30">
                  CORE ENGINE
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">Production-Scale Ingestion</h3>
                <p className="text-gray-400 mb-4">
                  OpenTelemetry-native architecture processes 10M+ traces/day with &lt;5ms overhead.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400">GPT-4</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400">Claude</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400">Gemini</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Stats Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-200 hover:border-amber-300 transition relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-8xl font-bold text-amber-500/5">$</div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Cost Intelligence</h3>
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">LIVE</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Track spend across 50+ models with per-request attribution. Set budgets, forecast costs, catch anomalies.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Avg Response</div>
                    <div className="text-lg font-bold text-gray-900">$0.003</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Monthly Saved</div>
                    <div className="text-lg font-bold text-amber-600">$12.4K</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Process Card */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border-2 border-amber-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-amber-800 uppercase tracking-wide">Automated Testing</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regression Detection</h3>
              <p className="text-gray-700 mb-4">
                Capture real traffic, replay with new prompts/models. Semantic similarity scoring catches breaking changes pre-deploy.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Baseline vs. candidate diff</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Parallel execution (1000s/min)</span>
                </div>
              </div>
            </div>

            {/* Feature 4 - Metrics Card */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-black text-amber-500 text-xs font-mono font-bold rounded">P99</div>
                <div className="px-3 py-1 bg-black text-amber-500 text-xs font-mono font-bold rounded">P95</div>
                <div className="px-3 py-1 bg-black text-amber-500 text-xs font-mono font-bold rounded">P50</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Profiling</h3>
              <p className="text-gray-600 mb-4">
                Tail latency analysis by model, region, and prompt length. Spot slowdowns before users complain.
              </p>
              <div className="bg-gradient-to-r from-gray-900 to-black p-4 rounded-lg">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-amber-500 font-mono mb-1">claude-3-opus</div>
                    <div className="text-2xl font-bold text-white">2.4<span className="text-sm text-gray-400">s</span></div>
                  </div>
                  <div className="flex gap-1 items-end h-12">
                    <div className="w-2 bg-amber-600 rounded-t" style={{height: '40%'}}></div>
                    <div className="w-2 bg-amber-500 rounded-t" style={{height: '70%'}}></div>
                    <div className="w-2 bg-amber-400 rounded-t" style={{height: '100%'}}></div>
                    <div className="w-2 bg-yellow-400 rounded-t" style={{height: '85%'}}></div>
                    <div className="w-2 bg-yellow-300 rounded-t" style={{height: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5 - API Card */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:border-gray-300 transition">
              <div className="mb-4">
                <span className="px-3 py-1 bg-gray-900 text-amber-500 text-xs font-mono rounded">GET /api/traces</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">RESTful Query API</h3>
              <p className="text-gray-600 mb-4">
                Filter by cost &gt; $0.10, latency &gt; 5s, model version, custom metadata. Power your own dashboards and alerts.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-xs font-mono text-gray-600 space-y-1">
                  <div><span className="text-amber-600">?service=</span>checkout</div>
                  <div><span className="text-amber-600">&cost_min=</span>0.10</div>
                  <div><span className="text-amber-600">&latency_max=</span>5000</div>
                  <div><span className="text-amber-600">&model=</span>gpt-4</div>
                </div>
              </div>
            </div>

            {/* Feature 6 - Infrastructure Card */}
            <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm overflow-hidden group hover:border-amber-300 transition">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-500/5 to-transparent rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Self-Hosted</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  PostgreSQL backend. Full data ownership. Deploy anywhere—AWS, GCP, on-prem. Zero vendor lock-in.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded border border-gray-200">Docker</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded border border-gray-200">Kubernetes</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded border border-gray-200">AWS RDS</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded border border-gray-200">Supabase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-200/10 via-transparent to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get started in minutes
            </h2>
            <p className="text-xl text-gray-600">
              Add observability to your LLM apps with just a few lines of code
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Code Example */}
            <div className="bg-black rounded-2xl p-8 overflow-hidden border-2 border-amber-500/20 shadow-2xl shadow-amber-500/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-600"></div>
              </div>
              <pre className="text-sm text-amber-100 overflow-x-auto">
                <code>{`import Anthropic from '@anthropic-ai/sdk';
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
    messages: [{
      role: 'user',
      content: 'Hello!'
    }],
  }),
  {
    name: 'chat',
    system: 'anthropic',
    prompt: 'Hello!',
  }
);`}</code>
              </pre>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-amber-500/30">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Install the SDK</h3>
                  <p className="text-gray-600">
                    Add @lumina/sdk to your project with your favorite package manager.
                  </p>
                  <code className="mt-2 inline-block bg-black text-amber-500 px-3 py-1 rounded text-sm border border-amber-500/20">
                    bun add @lumina/sdk
                  </code>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-amber-500/30">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Wrap your LLM calls</h3>
                  <p className="text-gray-600">
                    Use the traceLLM wrapper around your existing API calls. Works with Anthropic, OpenAI, and more.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-amber-500/30">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Start tracking</h3>
                  <p className="text-gray-600">
                    Query traces, analyze costs, and run regression tests through the API. No dashboard needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built with modern tools
            </h2>
            <p className="text-xl text-gray-600">
              Powered by battle-tested technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="text-center group">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-600 group-hover:bg-clip-text transition">Bun</div>
              <div className="text-sm text-gray-600 mt-1">Runtime</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-600 group-hover:bg-clip-text transition">TypeScript</div>
              <div className="text-sm text-gray-600 mt-1">Language</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-600 group-hover:bg-clip-text transition">Hono</div>
              <div className="text-sm text-gray-600 mt-1">Framework</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-600 group-hover:bg-clip-text transition">PostgreSQL</div>
              <div className="text-sm text-gray-600 mt-1">Database</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-600 group-hover:bg-clip-text transition">OpenTelemetry</div>
              <div className="text-sm text-gray-600 mt-1">Standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to ship better LLM apps?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start tracking costs, latency, and quality in your AI applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/getting-started"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black rounded-lg font-bold hover:from-amber-600 hover:to-yellow-700 transition shadow-xl shadow-amber-500/40"
            >
              Get Started
            </Link>
            <Link
              href="/docs"
              className="px-8 py-4 bg-black text-amber-500 rounded-lg font-semibold hover:bg-gray-900 transition border-2 border-amber-500"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Lumina
              </span>
              <p className="mt-4 text-gray-600">
                Lightweight observability for LLM applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-600 hover:text-amber-600 transition">Features</Link></li>
                <li><Link href="#how-it-works" className="text-gray-600 hover:text-amber-600 transition">How it Works</Link></li>
                <li><Link href="https://github.com/yourusername/lumina" className="text-gray-600 hover:text-amber-600 transition">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-gray-600 hover:text-amber-600 transition">Documentation</Link></li>
                <li><Link href="/docs/api-reference" className="text-gray-600 hover:text-amber-600 transition">API Reference</Link></li>
                <li><Link href="/docs/examples" className="text-gray-600 hover:text-amber-600 transition">Examples</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="https://github.com/yourusername/lumina" className="text-gray-600 hover:text-amber-600 transition">GitHub</Link></li>
                <li><Link href="https://github.com/yourusername/lumina" className="text-gray-600 hover:text-amber-600 transition">Twitter</Link></li>
                <li><Link href="https://github.com/yourusername/lumina" className="text-gray-600 hover:text-amber-600 transition">Discord</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2025 Lumina. MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
