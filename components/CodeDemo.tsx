'use client'

import { useState } from 'react'
import Container from './ui/Container'

export default function CodeDemo() {
  const [activeTab, setActiveTab] = useState(0)

  const examples = [
    {
      title: 'Instrument',
      code: `import { initLumina } from '@uselumina/sdk';

const lumina = initLumina({
  apiKey: process.env.LUMINA_API_KEY
});

// Automatic OTEL tracing
const response = await lumina.trace(
  'chat.completion',
  async () => {
    return await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages,
    });
  }
);`
    },
    {
      title: 'Query',
      code: `// Find expensive + slow + low-quality requests
const issues = await lumina.query(\`
  SELECT *
  FROM traces
  WHERE cost_usd > 0.50
    AND latency_ms > 2000
    AND semantic_score < 0.8
  ORDER BY timestamp DESC
  LIMIT 100
\`);

// This query is impossible in other tools`
    },
    {
      title: 'Alert',
      code: `// Real-time semantic + cost alerts
lumina.alert({
  name: 'chat-quality-degradation',
  condition: \`
    cost_increase > 0.40 AND
    semantic_similarity < 0.70
  \`,
  channels: ['slack', 'pagerduty'],
  severity: 'critical'
});

// Sub-500ms detection`
    }
  ]

  return (
    <section className="py-20 bg-gray-900/30">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One SDK. Complete Visibility.
            </h2>
            <p className="text-xl text-gray-400">
              Drop-in instrumentation that works with your existing stack
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            {/* Tabs */}
            <div className="flex border-b border-gray-800 bg-gray-900/50">
              {examples.map((example, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`
                    px-6 py-3 text-sm font-medium transition-colors relative
                    ${activeTab === i
                      ? 'text-primary-400'
                      : 'text-gray-400 hover:text-gray-300'
                    }
                  `}
                >
                  {example.title}
                  {activeTab === i && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Code */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
                <code>{examples[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
