import { FileMusic, Music2, UserRound, Upload } from "lucide-react";
import Navbar from "../components/Navbar";

function CreateMusic() {
  return (
    <section>
      <Navbar />
      <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg p-8 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-white/10 shadow-2xl shadow-black/30">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                <Music2 size={22} />
              </div>

              <h1 className="text-2xl font-bold text-white">Upload Music</h1>
            </div>

            <p className="text-sm text-slate-400">
              Add a new song to your music library.
            </p>
          </div>

          <form className="space-y-6">
            {/* Music File */}
            <div>
              <label
                htmlFor="music-file"
                className="block mb-2 text-sm font-medium text-slate-300"
              >
                Music File
              </label>

              <label
                htmlFor="music-file"
                className="flex flex-col items-center justify-center w-full h-36 rounded-xl border-2 border-dashed border-slate-700 bg-slate-800/50 hover:border-indigo-500/60 hover:bg-slate-800 cursor-pointer transition-colors"
              >
                <FileMusic
                  size={32}
                  className="mb-2 text-indigo-400"
                  aria-hidden="true"
                />

                <span className="text-sm font-medium text-slate-300">
                  Choose a music file
                </span>

                <span className="mt-1 text-xs text-slate-500">
                  MP3, WAV, or other supported audio format
                </span>

                <input
                  id="music-file"
                  type="file"
                  accept="audio/*"
                  className="sr-only"
                />
              </label>
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-slate-300"
              >
                Title
              </label>

              <div className="relative">
                <Music2
                  size={19}
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="title"
                  type="text"
                  placeholder="Enter song title"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>
            </div>

            {/* Artist */}
            <div>
              <label
                htmlFor="artist"
                className="block mb-2 text-sm font-medium text-slate-300"
              >
                Artist
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="artist"
                  type="text"
                  placeholder="Enter artist name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-900/20 transition-all"
            >
              <Upload size={19} aria-hidden="true" />
              Upload Music
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateMusic;
