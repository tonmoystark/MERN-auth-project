import { Disc3, Music, UserRound, Plus } from "lucide-react";
import Navbar from "../components/Navbar";

function CreateAlbum() {
  return (
    <section>
      <Navbar />
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/30 backdrop-blur-sm">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                <Disc3 size={22} />
              </div>

              <h1 className="text-2xl font-bold text-white">Create Album</h1>
            </div>

            <p className="text-sm text-slate-400">
              Create a new album and add your music to it.
            </p>
          </div>

          <form className="space-y-6">
            {/* Album Title */}
            <div>
              <label
                htmlFor="album-title"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Album Title
              </label>

              <div className="relative">
                <Disc3
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  aria-hidden="true"
                />

                <input
                  id="album-title"
                  type="text"
                  placeholder="Enter album title"
                  className="w-full rounded-lg border border-white/10 bg-slate-800 py-3 pl-10 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            {/* Artist */}
            <div>
              <label
                htmlFor="artist"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Artist
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  aria-hidden="true"
                />

                <input
                  id="artist"
                  type="text"
                  placeholder="Enter artist name"
                  className="w-full rounded-lg border border-white/10 bg-slate-800 py-3 pl-10 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            {/* Musics */}
            <div>
              <label
                htmlFor="musics"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Musics
              </label>

              <div className="relative">
                <Music
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  aria-hidden="true"
                />

                <select
                  id="musics"
                  multiple
                  className="min-h-32 w-full rounded-lg border border-white/10 bg-slate-800 py-3 pl-10 pr-4 text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option value="music-1">Blinding Lights</option>
                  <option value="music-2">Save Your Tears</option>
                  <option value="music-3">Starboy</option>
                  <option value="music-4">The Hills</option>
                </select>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Hold Ctrl (Windows) or Command (Mac) to select multiple songs.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-semibold text-white shadow-lg shadow-indigo-900/20 transition-all hover:from-indigo-500 hover:to-purple-500"
            >
              <Plus size={19} aria-hidden="true" />
              Create Album
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateAlbum;
