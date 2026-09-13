import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-16 px-8 flex items-center justify-between bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 border-b border-white/10 shadow-lg">
      <Link to="/" className="text-2xl font-bold text-white">
        Musicify
      </Link>

      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-slate-300 hover:text-white transition-colors"
        >
          Home
        </Link>

        <Link
          to="/upload"
          className="text-slate-300 hover:text-white transition-colors"
        >
          Upload Music
        </Link>

        <Link
          to="/albums"
          className="text-slate-300 hover:text-white transition-colors"
        >
          Albums
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
