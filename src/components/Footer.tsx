import { Heart, Github, Mail, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-20 text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold text-cyan-400">GameHub</h3>
            <p className="leading-relaxed text-slate-300">
              Discover and play the best collection of online games. From classic puzzles to action-packed adventures, we've got something for everyone!
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#games" className="transition-colors duration-200 text-slate-300 hover:text-cyan-400">Browse Games</a></li>
              <li><a href="#about" className="transition-colors duration-200 text-slate-300 hover:text-cyan-400">About Us</a></li>
              <li><a href="#contact" className="transition-colors duration-200 text-slate-300 hover:text-cyan-400">Contact</a></li>
              <li><a href="#" className="transition-colors duration-200 text-slate-300 hover:text-cyan-400">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-cyan-400">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Bipinshukla54" className="p-3 transition-all duration-300 rounded-full bg-slate-700 hover:bg-cyan-600 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/bipin-shukla/" className="p-3 transition-all duration-300 rounded-full bg-slate-700 hover:bg-cyan-600 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:shuklabipin0113@gmail.com" className="p-3 transition-all duration-300 rounded-full bg-slate-700 hover:bg-cyan-600 hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/bipin_shukla_54/" className="p-3 transition-all duration-300 rounded-full bg-slate-700 hover:bg-cyan-600 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Join our community and never miss an update!
            </p>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-slate-700">
          <p className="flex items-center justify-center space-x-2 text-slate-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>for gamers worldwide</span>
          </p>
          <p className="mt-2 text-sm text-slate-500">© 2025 GameHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
