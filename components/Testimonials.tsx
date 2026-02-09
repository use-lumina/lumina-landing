import Container from './ui/Container'
import Card from './ui/Card'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Lumina cut our MTTD from 4 hours to under 30 seconds. We can finally debug AI failures with the same confidence as microservices.",
      author: "Sarah Chen",
      role: "Staff SRE",
      company: "FinanceAI",
      avatar: "SC"
    },
    {
      quote: "The cost + quality correlation query is a game-changer. We identified a prompt that was both expensive AND low-quality in minutes.",
      author: "Marcus Johnson",
      role: "Principal Engineer",
      company: "DevTools Co",
      avatar: "MJ"
    },
    {
      quote: "Being OTEL-native means we didn't rip out our existing stack. Lumina just plugged in. Zero friction adoption.",
      author: "Priya Patel",
      role: "VP Engineering",
      company: "ChatScale",
      avatar: "PP"
    }
  ]

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Engineering Teams
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Backend engineers shipping AI products rely on Lumina for production reliability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} hover={false} className="flex flex-col">
              <div className="mb-6 flex-1">
                <svg className="w-8 h-8 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-gray-800">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="text-center text-sm text-gray-400 mb-8">
            Backed by industry standards and battle-tested infrastructure
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['OpenTelemetry', 'SOC 2', 'GDPR', 'ISO 27001'].map((badge, i) => (
              <div key={i} className="text-lg font-semibold text-gray-600">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
