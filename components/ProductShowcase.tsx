import Container from './ui/Container';

// Pre-calculate random heights once
const chartHeights = Array.from({ length: 24 }).map(() => Math.random() * 100);

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-gray-900/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">See What You&apos;ve Been Missing</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time visibility into every layer of your AI stack
          </p>
        </div>

        {/* Mock Dashboard */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-linear-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20" />

          <div className="relative bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-sm text-gray-400 font-mono">
                app.uselumina.io/traces
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="p-6 space-y-6">
              {/* Stats row */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'Requests', value: '2.4M', change: '+12%', trend: 'up' },
                  { label: 'Avg Cost', value: '$0.23', change: '-8%', trend: 'down' },
                  { label: 'P95 Latency', value: '847ms', change: '+5%', trend: 'up' },
                  { label: 'Quality Score', value: '0.89', change: '-3%', trend: 'down' },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div
                      className={`text-xs ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}
                    >
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Cost & Quality Correlation</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded text-sm">
                      24h
                    </button>
                    <button className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm">
                      7d
                    </button>
                    <button className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm">
                      30d
                    </button>
                  </div>
                </div>

                {/* Simple chart representation */}
                <div className="h-48 flex items-end justify-between space-x-2">
                  {chartHeights.map((height, i) => {
                    // Use pre-calculated heights
                    const isAnomaly = height > 80;
                    return (
                      <div key={i} className="flex-1 flex flex-col justify-end">
                        <div
                          className={`w-full rounded-t ${isAnomaly ? 'bg-red-500' : 'bg-primary-500'}`}
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trace list */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <div className="border-b border-gray-800 px-4 py-3">
                  <h3 className="font-semibold">Recent Traces</h3>
                </div>
                <div className="divide-y divide-gray-800">
                  {[
                    {
                      endpoint: '/api/chat',
                      status: 'success',
                      latency: '1.2s',
                      cost: '$0.45',
                      quality: 0.92,
                    },
                    {
                      endpoint: '/api/search',
                      status: 'success',
                      latency: '0.8s',
                      cost: '$0.12',
                      quality: 0.88,
                    },
                    {
                      endpoint: '/api/chat',
                      status: 'warning',
                      latency: '2.4s',
                      cost: '$0.89',
                      quality: 0.71,
                    },
                  ].map((trace, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 hover:bg-gray-800/50 cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div
                          className={`w-2 h-2 rounded-full ${trace.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'}`}
                        />
                        <span className="font-mono text-sm text-gray-300">{trace.endpoint}</span>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <span className="text-gray-400">{trace.latency}</span>
                        <span className="text-gray-400">{trace.cost}</span>
                        <span
                          className={trace.quality > 0.8 ? 'text-green-400' : 'text-yellow-400'}
                        >
                          {trace.quality.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
