import { Play, MoreVertical, Music2 } from "lucide-react";

function MusicCard({ title, artist }) {
  return (
    <div
      className="group w-full max-w-sm p-5 rounded-xl
                 bg-gradient-to-br from-slate-800/80 to-slate-900
                 border border-white/10
                 shadow-lg shadow-black/20
                 hover:border-indigo-500/40
                 hover:-translate-y-1
                 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        {/* Music Icon */}
        <div
          className="w-12 h-12 shrink-0 rounded-lg
                     flex items-center justify-center
                     bg-gradient-to-br from-indigo-600 to-purple-600
                     text-white"
        >
          <Music2 size={22} />
        </div>

        {/* Music Information */}
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-white truncate">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400 truncate">{artist}</p>
        </div>

        {/* Play Button */}
        <button
          className="w-10 h-10 shrink-0 rounded-full
                     flex items-center justify-center
                     bg-indigo-600 text-white
                     hover:bg-indigo-500
                     opacity-0 group-hover:opacity-100
                     transition-all duration-200"
        >
          <Play size={18} fill="currentColor" />
        </button>

        {/* More Options */}
        <button
          className="text-slate-400 hover:text-white
                     transition-colors"
        >
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
}

export default MusicCard;
