import { ExternalLink } from 'lucide-react';
import { Game } from '../lib/supabase';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-[4/3]">
        <a href={game.game_url} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={game.image_url}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span>Play Now</span>
              <ExternalLink className="h-5 w-5" />
            </div>
          </div>
        </a>
        <div className="absolute top-3 right-3">
          <span className="bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {game.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
          {game.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {game.description}
        </p>
      </div>
    </div>
  );
}
