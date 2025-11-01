import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-700 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-yellow-300 animate-pulse" />
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Welcome to GameHub
        </h2>
        <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed mb-8">
          Dive into an incredible world of gaming! Whether you're a puzzle master, strategy guru, or action enthusiast, we have the perfect game waiting for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
            🎮 Unlimited Fun
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
            🚀 Instant Play
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
            ✨ No Downloads
          </div>
        </div>
      </div>
    </div>
  );
}
