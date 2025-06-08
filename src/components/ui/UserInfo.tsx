interface UserInfoProps {
  registrationCount: number;
}

export default function UserInfo({ registrationCount }: UserInfoProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500/15 to-cyan-500/15 px-5 py-3.5 text-right text-xs text-cyan-400 border-b border-cyan-300/30 relative overflow-hidden">
      {/* 右侧光条 */}
      <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50" />
      
      <div className="flex items-center justify-end gap-2 relative z-10">
        <i className="fas fa-user-circle" />
        <span>已注册用户：{registrationCount}</span>
      </div>
    </div>
  );
} 