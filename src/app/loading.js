// app/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-black overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-600/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <div className="flex flex-col items-center z-10">
        
        {/* Spinner */}
        <div className="relative flex items-center justify-center">
          
          <div className="w-28 h-28 border-4 border-cyan-500/20 rounded-full"></div>

          <div className="absolute w-28 h-28 border-t-4 border-cyan-400 border-r-4 rounded-full animate-spin"></div>

          <div className="absolute w-16 h-16 border-b-4 border-blue-500 rounded-full animate-spin"></div>

        </div>

        {/* Loading Text */}
        <h2 className="mt-10 text-3xl font-bold text-white tracking-wider">
          Loading...
        </h2>

        {/* Animated Dots */}
        <div className="flex gap-2 mt-4">
          <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>

        {/* Small Text */}
        <p className="text-gray-400 mt-6 text-sm tracking-wide">
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
}