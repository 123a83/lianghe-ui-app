import type { NotificationData } from '@/types';

interface NotificationProps {
  data: NotificationData;
}

export default function Notification({ data }: NotificationProps) {
  const getColorClasses = (type: NotificationData['type']) => {
    switch (type) {
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500/15 to-orange-500/15 border-l-yellow-500 text-yellow-500';
      case 'success':
        return 'bg-gradient-to-r from-green-500/15 to-emerald-500/15 border-l-green-500 text-green-500';
      case 'error':
        return 'bg-gradient-to-r from-red-500/15 to-pink-500/15 border-l-red-500 text-red-500';
      default:
        return 'bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border-l-blue-500 text-blue-500';
    }
  };

  return (
    <div className={`
      ${getColorClasses(data.type)}
      px-5 py-4 border-l-4 text-sm leading-relaxed mx-5 my-3 rounded-lg backdrop-blur-sm 
      relative overflow-hidden shadow-lg animate-slide-in-right
    `}>
      {/* 顶部光效 */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse" />
      
      <div className="flex items-center gap-3 relative z-10">
        {data.icon && <i className={`${data.icon} animate-pulse`} />}
        <span className="animate-text-flow">{data.message}</span>
      </div>
    </div>
  );
} 