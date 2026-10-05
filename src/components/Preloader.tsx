import BrandLogo from './BrandLogo';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        {/* TAJ International logo lockup */}
        <div className="relative mb-6">
          <BrandLogo
            variant="lockup"
            className="w-40 sm:w-44 mx-auto"
            alt="TAJ International Tours & Travels"
          />
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
        
      </div>
    </div>
  );
}
