export default function Header() {
  return (
    <div className="bg-lianghe-bg bg-cover bg-center px-5 py-8 text-center border-b border-cyan-300/30 relative overflow-hidden">
      {/* 旋转背景效果 */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-conic-gradient animate-rotate-slow opacity-50" />
      
      {/* 径向渐变叠加 */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-purple-600/5" />
      
      <div className="relative z-10">
        <h1 className="text-3xl text-white font-extrabold mb-2 animate-pulse-glow tracking-wide">
          量合-算力即未来
        </h1>
        <p className="text-sm text-cyan-400 opacity-90 font-medium tracking-wider">
          LIANGHE - COMPUTING POWER IS THE FUTURE
        </p>
      </div>
    </div>
  );
} 