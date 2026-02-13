import Container from './ui/Container';
import Card from './ui/Card';

export default function Features() {
  const features = [
    {
      number: '01',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'OpenTelemetry-Native',
      description:
        'Built on OTEL standard. Zero vendor lock-in. Send traces to Lumina, Datadog, and Grafana simultaneously.',
      highlight: 'Works with your existing stack',
    },
    {
      number: '02',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: 'End-to-End RAG Visibility',
      description:
        'Trace the entire pipeline from user request through embedding, vector DB, reranking, to LLM generation.',
      highlight: 'Root cause in 30 seconds',
    },
    {
      number: '03',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Cost + Quality Correlation',
      description:
        'The only platform where you can query: "cost > $0.50 AND latency > 2s AND semantic_score < 0.8"',
      highlight: 'Impossible in other tools',
    },
    {
      number: '04',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: 'Production Traffic Replay',
      description:
        'One-click replay of real requests against new prompts or models. Semantic diffing shows exactly what changed.',
      highlight: 'Quality gates prevent regressions',
    },
    {
      number: '05',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      title: 'Real-Time Semantic Alerts',
      description:
        'Alert when endpoints get expensive AND quality degrades—in under 500ms. Hybrid hash + LLM evaluation.',
      highlight: 'Sub-500ms detection',
    },
    {
      number: '06',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      title: 'Infrastructure-Grade Stack',
      description:
        'NATS JetStream, PostgreSQL/ClickHouse, sub-500ms alerting. Built by engineers who scaled fintech systems.',
      highlight: 'Battle-tested reliability',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-900/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Backend Engineers</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Not another dashboard for data scientists. Production-grade tooling that plugs into your
            DevOps workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary-500 to-accent-500" />

              <div className="text-sm font-bold text-primary-400 mb-4">{feature.number}</div>

              <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>

              <div className="inline-flex items-center text-sm text-accent-400 font-medium">
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature.highlight}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
