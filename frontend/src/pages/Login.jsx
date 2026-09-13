import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Music2, User } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4
                    bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"
    >
      <div
        className="w-full max-w-md p-8 rounded-2xl
                      bg-slate-900/80 backdrop-blur-sm
                      border border-white/10
                      shadow-2xl shadow-black/30"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="w-14 h-14 rounded-full
                          flex items-center justify-center
                          bg-gradient-to-br from-indigo-600 to-purple-600
                          text-white mb-4"
          >
            <Music2 size={28} />
          </div>

          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>

          <p className="mt-2 text-sm text-slate-400">
            Sign in to continue to Musicify
          </p>
        </div>

        <form className="space-y-5">
          {/* Email / Username */}
          <div>
            <label
              htmlFor="identifier"
              className="block mb-2 text-sm font-medium text-slate-300"
            >
              Email or Username
            </label>

            <div className="relative">
              <User
                size={19}
                aria-hidden="true"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                id="identifier"
                type="text"
                placeholder="Enter your email or username"
                className="w-full pl-10 pr-4 py-3 rounded-lg
                           bg-slate-800 border border-white/10
                           text-white placeholder:text-slate-500
                           outline-none
                           focus:border-indigo-500
                           focus:ring-2 focus:ring-indigo-500/20
                           transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-slate-300"
            >
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={19}
                aria-hidden="true"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-10 pr-11 py-3 rounded-lg
                           bg-slate-800 border border-white/10
                           text-white placeholder:text-slate-500
                           outline-none
                           focus:border-indigo-500
                           focus:ring-2 focus:ring-indigo-500/20
                           transition"
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           text-slate-500 hover:text-white
                           focus:outline-none focus:ring-2
                           focus:ring-indigo-500 rounded"
              >
                {showPassword ? (
                  <EyeOff size={19} aria-hidden="true" />
                ) : (
                  <Eye size={19} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg
                       bg-gradient-to-r from-indigo-600 to-purple-600
                       hover:from-indigo-500 hover:to-purple-500
                       text-white font-semibold
                       shadow-lg shadow-indigo-900/20
                       transition-all"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
