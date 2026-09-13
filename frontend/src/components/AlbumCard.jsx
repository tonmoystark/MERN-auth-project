import { Disc3, Music, MoreVertical } from "lucide-react";
function AlbumCard({ title, artist, musicCount }) {
  return (
    <div className="group m-4 w-full max-w-xs overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-950 border border-white/10 shadow-lg shadow-black/20 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300">
      {" "}
      {/* Album Cover */}{" "}
      <div className="h-40 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600">
        {" "}
        <Disc3
          size={72}
          strokeWidth={1.5}
          className="text-white/80 group-hover:rotate-12 transition-transform duration-300"
        />{" "}
      </div>{" "}
      {/* Album Information */}{" "}
      <div className="p-5">
        {" "}
        <div className="flex items-start justify-between gap-3">
          {" "}
          <div className="min-w-0">
            {" "}
            <h3 className="text-lg font-semibold text-white truncate">
              {" "}
              {title}{" "}
            </h3>{" "}
            <p className="mt-1 text-sm text-slate-400 truncate">
              {" "}
              {artist}{" "}
            </p>{" "}
          </div>{" "}
          <button className="shrink-0 text-slate-400 hover:text-white transition-colors">
            {" "}
            <MoreVertical size={20} />{" "}
          </button>{" "}
        </div>{" "}
        {/* Music Count */}{" "}
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          {" "}
          <Music size={16} /> <span>{musicCount} songs</span>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default AlbumCard;
