export interface Game {
  id: string;
  title: string;
  description: string;
  image_url: string;
  game_url: string;
  category: string;
}

export const gamesData: Game[] = [
  {
    id: '7',
    title: 'Tic Tac Toe',
    description: 'A fun two-player game to challenge your friends!',
    image_url: '/game/public/image copy.png',
    game_url: '/Game/tictactoe/index.html ',
    category: 'Board Games'
  },
    {
    id: '8',
    title: 'Rock Paper Scissor',
    description: 'Play Rock Paper Scissors against the computer!',
    image_url: '/game/public/image.png',
    game_url: '/RPS/RPS_practice.html ',
    category: 'digital'
  },
  {
    id: '1',
    title: 'Chess Master',
    description: 'Classic chess game with AI opponent. Test your strategic skills!',
    image_url: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=400',
    game_url: 'https://www.chess.com/play/computer',
    category: 'Board Games'
  },
  {
    id: '2',
    title: 'Space Invaders',
    description: 'Retro arcade shooter. Defend Earth from alien invasion!',
    image_url: 'https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=400',
    game_url: 'https://freeinvaders.org/',
    category: 'Arcade'
  },
  {
    id: '3',
    title: 'Sudoku Puzzle',
    description: 'Brain-teasing number puzzle. Perfect for logic lovers!',
    image_url: 'https://images.pexels.com/photos/5797903/pexels-photo-5797903.jpeg?auto=compress&cs=tinysrgb&w=400',
    game_url: 'https://sudoku.com/',
    category: 'Puzzle'
  },
  {
    id: '4',
    title: 'Racing Thunder',
    description: 'High-speed racing action. Feel the adrenaline rush!',
    image_url: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
    game_url: 'https://www.crazygames.com/game/madalin-stunt-cars-2',
    category: 'Racing'
  },
  {
    id: '5',
    title: 'Tetris Classic',
    description: 'Timeless block puzzle game. Stack and clear lines!',
    image_url: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=400',
    game_url: 'https://tetris.com/play-tetris',
    category: 'Puzzle'
  },
  {
    id: '6',
    title: 'Solitaire',
    description: 'Classic card game. Relax and unwind with this favorite!',
    image_url: 'https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=400',
    game_url: 'https://www.solitr.com/',
    category: 'Card Games'
  }
];
