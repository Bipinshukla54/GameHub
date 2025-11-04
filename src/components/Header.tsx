

export function Header() {
  return (
    <header className="sticky top-0 z-50 text-white shadow-lg bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="p-2 transition-all duration-300 bg-white/20 rounded-xl group-hover:bg-white/30 group-hover:rotate-12"> 
              <img className="w-12 h-12" src="/gameground.png" alt="logo" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">GameGround</h1>
              <p className="text-sm text-cyan-100">Your Ultimate Gaming Destination</p>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}
