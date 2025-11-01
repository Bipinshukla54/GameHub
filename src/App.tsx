import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { GameCard } from './components/GameCard';
import { gamesData } from './lib/supabase';

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="games">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Featured Games
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Browse our handpicked collection of amazing games. Click on any game card to start playing instantly!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamesData.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
