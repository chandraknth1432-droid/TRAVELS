import TAJMark from './TAJMark';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-2 border-[#c9a84c]/30 animate-ping" />
            <div className="absolute inset-2 rounded-full border-2 border-[#c9a84c]/50 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl"><TAJMark gold /></span>
            </div>
          </div>
        </div>
        
        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-[#1a1a1a] mx-auto rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #c9a84c, #e8d48b, #c9a84c)',
              animation: 'loadingBar 2s ease-in-out infinite',
            }}
          />
        </div>
        <style>{`
          @keyframes loadingBar {
            0% { width: 0%; margin-left: 0; }
            50% { width: 70%; margin-left: 15%; }
            100% { width: 0%; margin-left: 100%; }
          }
        `}</style>
        
        <p className="mt-4 text-[#c9a84c]/60 text-sm tracking-[4px] uppercase font-light">
          International Tours & Travels
        </p>
      </div>
    </div>
  );
}
