'use client'

import { useState } from 'react'
import Container from './ui/Container'

export default function UseCases() {
  const [activeCase, setActiveCase] = useState(0)

  const cases = [
    {
      title: 'RAG Systems',
      icon: '🔍',
      problem: 'Vector DB returns low-quality chunks, LLMs hallucinate, no visibility into retrieval quality',
      solution: 'End-to-end tracing from query → embedding → retrieval → reranking → generation with quality scoring at each step',
      metrics: ['Retrieval quality score', 'Chunk relevance', 'Hallucination detection', 'Cost per query']
    },
    {
      title: 'AI Agents',
      icon: '🤖',
      problem: 'Multi-step workflows fail silently, token costs explode from tool-calling loops',
      solution: 'Trace agent decision trees, identify expensive loops, replay failed workflows against improved prompts',
      metrics: ['Steps per completion', 'Tool call patterns', 'Cost attribution', 'Success rate']
    },
    {
      title: 'Customer Support',
      icon: '💬',
      problem: 'Response quality degrades, customers get wrong answers, no way to prevent regressions',
      solution: 'Semantic monitoring compares responses to baselines, alerts on quality drops, replay production traffic before deploys',
      metrics: ['Response quality', 'User satisfaction proxy', 'Resolution time', 'Cost per conversation']
    },
    {
      title: 'Code Generation',
      icon: '⚡',
      problem: 'Generated code quality varies, expensive requests timeout, no regression testing for prompt changes',
      solution: 'Track code validity, execution success, cost per generation. Replay test cases against new prompts',
      metrics: ['Code validity rate', 'Execution success', 'Token efficiency', 'Latency P95']
    }
  ]

  return (
    <section id="use-cases" className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Purpose-Built for Your Use Case
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you&apos;re building RAG, agents, or customer-facing AI, Lumina provides the visibility you need
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tabs */}
          <div className="space-y-3">
            {cases.map((useCase, i) => (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`
                  w-full text-left p-6 rounded-xl border-2 transition-all
                  ${activeCase === i
                    ? 'border-primary-500 bg-primary-500/10'
                    : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'
                  }
                `}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{useCase.title}</h3>
                    <p className="text-sm text-gray-400">{useCase.problem}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-linear-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8">
            <div className="mb-6">
              <div className="text-sm text-primary-400 font-semibold mb-2">SOLUTION</div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {cases[activeCase].solution}
              </p>
            </div>

            <div className="mb-6">
              <div className="text-sm text-primary-400 font-semibold mb-4">KEY METRICS</div>
              <div className="grid grid-cols-2 gap-3">
                {cases[activeCase].metrics.map((metric, i) => (
                  <div key={i} className="flex items-center space-x-2 text-gray-300">
                    <svg className="w-5 h-5 text-accent-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <a href="#" className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium">
                View {cases[activeCase].title} Guide
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
