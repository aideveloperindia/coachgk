"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
          <span className="text-white font-heading font-bold text-3xl">GK</span>
        </div>

        {/* Loading Text */}
        <div className="text-primary font-heading font-semibold text-lg animate-pulse">
          Loading...
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 mx-auto mt-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent animate-pulse" />
        </div>
      </div>
    </div>
  );
}

