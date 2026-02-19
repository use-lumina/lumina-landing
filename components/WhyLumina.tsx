import Container from './ui/Container';
import Card from './ui/Card';

export default function WhyLumina() {
  const problems = [
    {
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
      title: 'Token Costs Exploding',
      description:
        'OpenAI bill jumped 300% with zero visibility into which endpoints, users, or features are burning cash.',
      impact: '$500k+/month wasted',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      title: 'Silent Semantic Failures',
      description:
        "LLM responses degrade but monitors don't fire. You learn about quality issues from customer complaints.",
      impact: '4 hour MTTD',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      title: 'RAG Black Boxes',
      description:
        'Vector DB returns low-quality chunks but you have no visibility until production breaks.',
      impact: 'Zero attribution',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Prompt Deployments = Roulette',
      description: 'No way to test prompt changes against real production traffic before shipping.',
      impact: 'Hope-based deploys',
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
            <span className="text-sm text-red-400 font-medium">The AI Reliability Crisis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your AI Stack is Failing Silently</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Backend engineers inherited AI systems but lack the observability tools to maintain them
            with the same rigor as microservices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <Card key={i} className="group">
              <div className="flex items-start space-x-4">
                <div className="text-primary-400 shrink-0">{problem.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{problem.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-gray-800 rounded-full text-sm text-red-400">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {problem.impact}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* The gap */}
        <div className="mt-16 p-8 bg-linear-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">The Current Tooling Gap</h3>
              <p className="text-gray-400 max-w-2xl">
                You have world-class observability for microservices (Datadog, Grafana, New Relic)
                but these tools don&apos;t understand semantic degradation, token costs, or
                hallucination detection.
              </p>{' '}
            </div>
            <div className="text-gray-600 shrink-0">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
