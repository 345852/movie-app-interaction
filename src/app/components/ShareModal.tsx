import { X } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function ShareModal({ isOpen, onClose, title }: ShareModalProps) {
  if (!isOpen) return null;

  const shareOptions = [
    { name: '微信', icon: '💬', color: 'bg-green-500' },
    { name: 'QQ', icon: '🐧', color: 'bg-blue-500' },
    { name: '微博', icon: '📱', color: 'bg-red-400' },
    { name: '朋友圈', icon: '⭕', color: 'bg-green-600' },
    { name: 'QQ空间', icon: '⭐', color: 'bg-yellow-500' },
    { name: '复制链接', icon: '🔗', color: 'bg-gray-500' },
  ];

  const handleShare = (platform: string) => {
    // Mock share functionality
    alert(`分享到${platform}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-t-3xl w-full max-w-md p-6 pb-8 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium">分享活动</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-600 line-clamp-2">{title}</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => handleShare(option.name)}
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className={`w-14 h-14 ${option.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
              >
                {option.icon}
              </div>
              <span className="text-xs text-gray-600">{option.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
