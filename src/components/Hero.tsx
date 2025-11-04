import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-700">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-32 h-32 bg-white rounded-full top-10 left-10 blur-3xl animate-pulse"></div>
        <div className="absolute w-40 h-40 delay-1000 bg-white rounded-full bottom-10 right-10 blur-3xl animate-pulse"></div>
        <div className="absolute w-48 h-48 delay-500 bg-white rounded-full top-1/2 left-1/2 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
        </div>
        <h2 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl">
          Welcome to GameGround
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-xl leading-relaxed md:text-2xl text-cyan-100">
          Dive into an incredible world of gaming! Whether you're a puzzle master, strategy guru, or action enthusiast, we have the perfect game waiting for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <div className="px-6 py-3 font-semibold rounded-full bg-white/20 backdrop-blur-sm">
            🎮 Unlimited Fun
          </div>
          <div className="px-6 py-3 font-semibold rounded-full bg-white/20 backdrop-blur-sm">
            🚀 Instant Play
          </div>
          <div className="px-6 py-3 font-semibold rounded-full bg-white/20 backdrop-blur-sm">
            ✨ No Downloads
          </div>
        </div>
      </div>
    </div>
  );
}
