import Container from './ui/Container';
import Card from './ui/Card';

export default function Testimonials() {
  const testimonials = []; // No testimonials for now

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Currently working with 3 design partners. Want early access?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Backend engineers shipping AI products rely on Lumina for production reliability
          </p>
        </div>

        {/* Trust badges - Only OpenTelemetry */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="text-center text-sm text-gray-400 mb-8">
            Backed by industry standards and battle-tested infrastructure
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-lg font-semibold text-gray-600">
                OpenTelemetry
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
