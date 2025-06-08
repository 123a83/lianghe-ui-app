'use client';

interface BottomActionsProps {
  onGetValue?: () => void;
  onSupport?: () => void;
}

export default function BottomActions({ onGetValue, onSupport }: BottomActionsProps) {
  return (
    <>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-black/95 backdrop-blur-xl px-5 py-5 border-t border-cyan-300/30 flex justify-between items-center gap-4 z-50">
        <button
          onClick={onGetValue}
          className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 bg-size-200 text-white border-none px-8 py-4 rounded-full text-base font-extrabold cursor-pointer flex-1 transition-all duration-300 flex items-center justify-center gap-2.5 relative overflow-hidden shadow-lg shadow-blue-500/40 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/60 group animate-flow"
        >
          <i className="fas fa-bolt text-lg" />
          获取量值
        </button>
        
        <button
          onClick={onSupport}
          className="bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-cyan-400 border-2 border-blue-500 p-3.5 rounded-full text-base font-bold cursor-pointer w-16 h-16 flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-lg shadow-blue-500/20 hover:scale-110 hover:rotate-12 hover:shadow-xl hover:shadow-blue-500/40 hover:bg-gradient-to-br hover:from-blue-500/25 hover:to-cyan-500/25"
        >
          <i className="fas fa-headset text-lg" />
        </button>
      </div>
      
      {/* 底部指示器 */}
      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-35 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 bg-size-200 rounded-full shadow-lg shadow-cyan-500/60 animate-flow z-40" />
    </>
  );
} 