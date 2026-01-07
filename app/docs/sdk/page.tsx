import Link from "next/link";

export default function SdkPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-linear-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Lumina
              </span>
            </Link>
            <Link href="/docs" className="text-gray-600 hover:text-amber-600 transition">
              ← Back to Docs
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">SDK Documentation</h1>
        <p className="text-xl text-gray-600 mb-8">
          TypeScript/JavaScript SDK reference and integration guides
        </p>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8">
          <p className="text-gray-700 mb-4">
            For complete SDK documentation, please visit the main repository:
          </p>
          <Link
            href="https://github.com/yourusername/lumina"
            className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-700 transition"
          >
            View SDK Docs on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
