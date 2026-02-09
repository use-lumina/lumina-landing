'use client'

import Container from './ui/Container'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[100px]" />
      </div>

      <Container className="text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <span className="text-sm text-primary-300">OpenTelemetry-Native AI Observability</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Stop Debugging AI Failures
          <br />
          <span className="text-gradient">with grep and jq</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Production-grade observability for LLM systems. Real-time traces, cost anomaly detection,
          and semantic regression testing—built for backend engineers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="w-full sm:w-auto">
            Start Free Trial
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            View Documentation
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-gray-800">
          {[
            { value: '<500ms', label: 'Alert Latency' },
            { value: '10M+', label: 'Calls/Day' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: 'OTEL', label: 'Native' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
