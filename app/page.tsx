/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useEffect } from 'react';
import { DollarSign, Bug, Clock, Dices, Package, Wrench } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.problem-card, .feature-card');
    elements.forEach(el => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(30px)';
      htmlEl.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-1000 py-6 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-300 mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-linear-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Lumina
            </div>
            <a
              href="#waitlist"
              className="bg-linear-to-r from-[#667eea] to-[#764ba2] text-white px-7 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(102,126,234,0.4)]"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-30 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-[radial-gradient(circle,rgba(102,126,234,0.15)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-300 mx-auto px-6 relative">
          <h1 className="text-6xl font-extrabold mb-6 leading-[1.1] bg-linear-to-r from-white to-[#a0a0a0] bg-clip-text text-transparent animate-[fadeInUp_0.8s_ease-out_forwards]">
            Stop Debugging AI Failures<br />with grep and jq
          </h1>
          <p className="text-2xl text-[#888] mb-12 font-normal animate-[fadeInUp_0.8s_ease-out_forwards]">
            OpenTelemetry-native observability platform for production AI systems
          </p>
          <p className="text-xl text-[#b0b0b0] max-w-175 mx-auto mb-12 animate-[fadeInUp_0.8s_ease-out_forwards]">
            Treat LLMs like the unreliable microservices they are. Get real-time traces, cost anomaly detection, and semantic regression testing—built for backend engineers, not data scientists.
          </p>

          {/* Code Block */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 my-12 max-w-[800px] mx-auto text-left font-mono text-sm overflow-x-auto relative animate-[fadeInUp_0.8s_ease-out_forwards]">
            <div className="absolute top-2 right-3 text-[11px] text-[#667eea] font-semibold">TypeScript</div>
            <div className="space-y-1">
              <div><span className="text-[#c678dd]">import</span> {`{ `}<span className="text-[#61afef]">Lumina</span> {`} `}<span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">&apos;@lumina/sdk&apos;</span>;</div>
              <div>&nbsp;</div>
              <div><span className="text-[#666]">// One line to instrument your entire AI pipeline</span></div>
              <div><span className="text-[#c678dd]">const</span> lumina = <span className="text-[#c678dd]">new</span> <span className="text-[#61afef]">Lumina</span>({`({`}</div>
              <div>&nbsp;&nbsp;apiKey: process.env.<span className="text-[#98c379]">LUMINA_API_KEY</span>,</div>
              <div>&nbsp;&nbsp;serviceName: <span className="text-[#98c379]">&apos;chat-api&apos;</span></div>
              <div>{`});`}</div>
              <div>&nbsp;</div>
              <div><span className="text-[#666]">// Works with your existing OTEL stack</span></div>
              <div><span className="text-[#666]">// Traces from user → router → vector DB → LLM → response</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-linear-to-b from-transparent via-[rgba(102,126,234,0.03)] to-transparent">
        <div className="max-w-300 mx-auto px-6">
          <h2 className="text-[42px] font-bold text-center mb-16 bg-linear-to-r from-white to-[#a0a0a0] bg-clip-text text-transparent">
            The AI Reliability Crisis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 - Costs */}
            <div className="problem-card group relative bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden border border-[#2a2a2a] hover:border-emerald-500/50">
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-[100px] transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>

              {/* Icon with glow */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-[pulse-glow_3s_ease-in-out_infinite]"></div>
                <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign size={32} strokeWidth={2.5} className="text-emerald-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Token Costs Exploding</h3>
              <p className="text-[#999] leading-relaxed">
                Your OpenAI bill jumped 300% and you have no idea which endpoint, user, or feature is burning cash.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Card 2 - Failures */}
            <div className="problem-card group relative bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden border border-[#2a2a2a] hover:border-red-500/50">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-[100px] transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>

              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-[pulse-glow_3s_ease-in-out_infinite_0.5s]"></div>
                <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Bug size={32} strokeWidth={2.5} className="text-red-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">Silent Semantic Failures</h3>
              <p className="text-[#999] leading-relaxed">
                LLM responses degraded but your monitors didn&apos;t fire. Customers complained first.
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Card 3 - Debug Time */}
            <div className="problem-card group relative bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 overflow-hidden border border-[#2a2a2a] hover:border-amber-500/50">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-[100px] transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>

              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full animate-[pulse-glow_3s_ease-in-out_infinite_1s]"></div>
                <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl border border-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Clock size={32} strokeWidth={2.5} className="text-amber-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">4-Hour Debug Sessions</h3>
              <p className="text-[#999] leading-relaxed">
                One bad LLM response requires tracing across logs, databases, and vector stores with zero correlation.
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Card 4 - Prompts */}
            <div className="problem-card group relative bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden border border-[#2a2a2a] hover:border-purple-500/50">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-[100px] transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>

              <div className="relative mb-6">
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-[pulse-glow_3s_ease-in-out_infinite_1.5s]"></div>
                <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Dices size={32} strokeWidth={2.5} className="text-purple-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Prompt Updates = Russian Roulette</h3>
              <p className="text-[#999] leading-relaxed">
                No way to test prompt changes against real production traffic before deploying.
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Card 5 - RAG */}
            <div className="problem-card group relative bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden border border-[#2a2a2a] hover:border-blue-500/50">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[100px] transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>

              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-[pulse-glow_3s_ease-in-out_infinite_2s]"></div>
                <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Package size={32} strokeWidth={2.5} className="text-blue-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">RAG Pipelines Are Black Boxes</h3>
              <p className="text-[#999] leading-relaxed">
                Vector DB returns low-quality chunks but you won&apos;t know until it&apos;s too late.
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Card 6 - Tools */}
            <div className="problem-card group relative bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden border border-[#2a2a2a] hover:border-orange-500/50">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-[100px] transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>

              <div className="relative mb-6">
                <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full animate-[pulse-glow_3s_ease-in-out_infinite_2.5s]"></div>
                <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Wrench size={32} strokeWidth={2.5} className="text-orange-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Wrong Tools for the Job</h3>
              <p className="text-[#999] leading-relaxed">
                Datadog doesn&apos;t understand semantics. LangSmith was built for notebooks, not production.
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-300 mx-auto px-6">
          <h2 className="text-[42px] font-bold text-center mb-16 bg-gradient-to-r from-white to-[#a0a0a0] bg-clip-text text-transparent">
            Built for Backend Engineers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card group relative bg-[#0f0f0f] rounded-2xl p-8 overflow-hidden border-2 border-[#2a2a2a] transition-all duration-500 hover:border-[#667eea]/50 hover:shadow-2xl hover:shadow-[#667eea]/10">
              {/* Diagonal stripe */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#667eea] via-[#764ba2] to-transparent"></div>

              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Number badge */}
              <div className="relative mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 border border-[#667eea]/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">01</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#667eea]/50 to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[#667eea] transition-colors">OpenTelemetry-Native</h3>
              <p className="text-[#999] leading-[1.8] relative z-10">
                Zero vendor lock-in. Built on OTEL standard. Send traces to Lumina, Datadog, and Grafana simultaneously. Instant adoption by 10,000+ companies already using OTEL.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card group relative bg-[#0f0f0f] rounded-2xl p-8 overflow-hidden border-2 border-[#2a2a2a] transition-all duration-500 hover:border-[#764ba2]/50 hover:shadow-2xl hover:shadow-[#764ba2]/10">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#764ba2] via-[#667eea] to-transparent"></div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#764ba2]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Corner accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#764ba2]/20 to-transparent rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>

              <div className="relative mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#764ba2]/20 to-[#667eea]/20 border border-[#764ba2]/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black bg-gradient-to-br from-[#764ba2] to-[#667eea] bg-clip-text text-transparent">02</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#764ba2]/50 to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[#764ba2] transition-colors">End-to-End RAG Visibility</h3>
              <p className="text-[#999] leading-[1.8] relative z-10">
                Trace the entire pipeline: User → Router → Embedding → Vector DB → Reranking → LLM → Response. Root cause in 30 seconds instead of 4 hours.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 overflow-hidden border-2 border-[#2a2a2a] transition-all duration-500 hover:border-[#667eea]/50 hover:shadow-2xl hover:shadow-[#667eea]/10">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" style={{backgroundImage: 'linear-gradient(#667eea 1px, transparent 1px), linear-gradient(90deg, #667eea 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#667eea] to-transparent"></div>

              <div className="relative mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 border border-[#667eea]/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-2xl font-black bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">03</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#667eea]/50 to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[#667eea] transition-colors">Cost + Quality Correlation</h3>
              <p className="text-[#999] leading-[1.8] relative z-10">
                The only tool that can query: &quot;Show requests where cost &gt; $0.50 AND latency &gt; 2s AND semantic_similarity &lt; 0.8&quot;. This query is impossible anywhere else.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card group relative bg-[#0f0f0f] rounded-2xl p-8 overflow-hidden border-2 border-[#2a2a2a] transition-all duration-500 hover:border-[#764ba2]/50 hover:shadow-2xl hover:shadow-[#764ba2]/10">
              {/* Double line accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#764ba2] via-[#667eea] to-transparent"></div>
              <div className="absolute top-1 left-0 w-full h-px bg-gradient-to-r from-[#667eea]/50 via-[#764ba2]/50 to-transparent"></div>

              <div className="absolute inset-0 bg-gradient-to-tl from-[#764ba2]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#764ba2]/20 to-[#667eea]/20 border border-[#764ba2]/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black bg-gradient-to-br from-[#764ba2] to-[#667eea] bg-clip-text text-transparent">04</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#764ba2]/50 to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[#764ba2] transition-colors">Replay Production Traffic</h3>
              <p className="text-[#999] leading-[1.8] relative z-10">
                One-click replay of real requests against new prompts or models. Semantic diffing shows exactly what changed. Quality gates prevent regressions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card group relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-8 overflow-hidden border-2 border-[#2a2a2a] transition-all duration-500 hover:border-[#667eea]/50 hover:shadow-2xl hover:shadow-[#667eea]/10">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#667eea] via-[#764ba2] to-transparent"></div>

              {/* Radial glow */}
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#667eea]/10 rounded-full blur-3xl group-hover:bg-[#667eea]/20 transition-colors duration-500"></div>

              <div className="relative mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 border border-[#667eea]/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                  <span className="text-2xl font-black bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">05</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#667eea]/50 to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[#667eea] transition-colors">Real-Time Semantic Alerts</h3>
              <p className="text-[#999] leading-[1.8] relative z-10">
                Alert when your /chat endpoint got 40% more expensive AND quality degraded—in under 500ms. Hybrid detection: hash-based checks + LLM evaluation.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card group relative bg-[#0f0f0f] rounded-2xl p-8 overflow-hidden border-2 border-[#2a2a2a] transition-all duration-500 hover:border-[#764ba2]/50 hover:shadow-2xl hover:shadow-[#764ba2]/10">
              <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-[#764ba2] via-[#667eea] to-transparent"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#667eea]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#764ba2]/20 to-[#667eea]/20 border border-[#764ba2]/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black bg-gradient-to-br from-[#764ba2] to-[#667eea] bg-clip-text text-transparent">06</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#764ba2]/50 to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[#764ba2] transition-colors">Infrastructure-Grade Stack</h3>
              <p className="text-[#999] leading-[1.8] relative z-10">
                NATS JetStream, PostgreSQL/ClickHouse, sub-500ms alerting. Built by engineers who&apos;ve scaled fintech systems, not data scientists building dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-300 mx-auto px-6">
          <h2 className="text-[42px] font-bold text-center mb-12 bg-gradient-to-r from-white to-[#a0a0a0] bg-clip-text text-transparent">
            Why Teams Choose Lumina
          </h2>
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden mt-12">
            <div className="grid grid-cols-3 border-b border-[#2a2a2a] bg-[#1a1a1a]">
              <div className="p-5 px-6 font-semibold text-[#667eea] border-r border-[#2a2a2a]">Feature</div>
              <div className="p-5 px-6 font-semibold text-[#667eea] border-r border-[#2a2a2a]">Other Tools</div>
              <div className="p-5 px-6 font-semibold text-[#667eea]">Lumina</div>
            </div>
            <div className="grid grid-cols-3 border-b border-[#2a2a2a]">
              <div className="p-5 px-6 border-r border-[#2a2a2a]">OpenTelemetry Standard</div>
              <div className="p-5 px-6 border-r border-[#2a2a2a]"><span className="text-[#ef4444] text-xl">✗</span></div>
              <div className="p-5 px-6"><span className="text-[#4ade80] text-xl">✓</span></div>
            </div>
            <div className="grid grid-cols-3 border-b border-[#2a2a2a]">
              <div className="p-5 px-6 border-r border-[#2a2a2a]">End-to-End RAG Tracing</div>
              <div className="p-5 px-6 border-r border-[#2a2a2a]"><span className="text-[#ef4444] text-xl">✗</span></div>
              <div className="p-5 px-6"><span className="text-[#4ade80] text-xl">✓</span></div>
            </div>
            <div className="grid grid-cols-3 border-b border-[#2a2a2a]">
              <div className="p-5 px-6 border-r border-[#2a2a2a]">Cost + Quality Correlation</div>
              <div className="p-5 px-6 border-r border-[#2a2a2a]"><span className="text-[#ef4444] text-xl">✗</span></div>
              <div className="p-5 px-6"><span className="text-[#4ade80] text-xl">✓</span></div>
            </div>
            <div className="grid grid-cols-3 border-b border-[#2a2a2a]">
              <div className="p-5 px-6 border-r border-[#2a2a2a]">Production Traffic Replay</div>
              <div className="p-5 px-6 border-r border-[#2a2a2a]"><span className="text-[#ef4444] text-xl">✗</span></div>
              <div className="p-5 px-6"><span className="text-[#4ade80] text-xl">✓</span></div>
            </div>
            <div className="grid grid-cols-3 border-b border-[#2a2a2a]">
              <div className="p-5 px-6 border-r border-[#2a2a2a]">Real-Time Semantic Alerts</div>
              <div className="p-5 px-6 border-r border-[#2a2a2a]"><span className="text-[#ef4444] text-xl">✗</span></div>
              <div className="p-5 px-6"><span className="text-[#4ade80] text-xl">✓</span></div>
            </div>
            <div className="grid grid-cols-3">
              <div className="p-5 px-6 border-r border-[#2a2a2a]">Built for SRE Teams</div>
              <div className="p-5 px-6 border-r border-[#2a2a2a]"><span className="text-[#ef4444] text-xl">✗</span></div>
              <div className="p-5 px-6"><span className="text-[#4ade80] text-xl">✓</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-[120px] text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(102,126,234,0.2)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-[600px] mx-auto px-6 relative">
          <h2 className="text-5xl font-bold mb-6">Be First in Line</h2>
          <p className="text-lg text-[#999] mb-12">
            Join backend engineers from leading teams who are tired of debugging AI failures with grep. Early access launching Q1 2026.
          </p>
          <div className="mb-6">
            <a
              href="https://forms.gle/pjMmLH2hDAZWYvgG9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-linear-to-r from-[#667eea] to-[#764ba2] text-white rounded-lg font-bold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(102,126,234,0.4)]"
            >
              Join Waitlist
            </a>
          </div>
          <p className="text-sm text-[#666]">
            Early adopters get lifetime 50% discount + priority support
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[#2a2a2a] text-[#666]">
        <div className="max-w-300 mx-auto px-6">
          <p>&copy; 2026 Lumina. Built for engineers who demand reliability.</p>
        </div>
      </footer>
    </div>
  );
}
