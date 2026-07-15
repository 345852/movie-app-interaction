import { ArrowLeft, MoreVertical, Clock, Calendar, MapPin, Share2, ThumbsUp, Film } from 'lucide-react';
import eventBannerImg from 'figma:asset/4961a40a3b7b23f1a85ad7809802f5a7987e99a9.png';

interface EventDetailProps {
  onBack: () => void;
}

export function EventDetail({ onBack }: EventDetailProps) {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="relative">
        <img 
          src={eventBannerImg}
          alt="活动封面"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-5">
        {/* Title */}
        <h1 className="text-xl mb-4">影视探讨会 · 线下观影交流</h1>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          每月一期的影迷观影聚会，与影迷朋友一起观影、讨论、分享。本期主题「科幻与人性」。
        </p>

        {/* Event Info */}
        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-gray-600">交流：地铁3号线文化路站B出口，步行约5分钟。场地提供茶水小食，欢迎提前到场交流。</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="text-gray-500">活动时间：</span>
                <span className="text-gray-900">周六 01.18 14:00-17:00</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="text-gray-500">报名截止：</span>
                <span className="text-gray-900">周六 01.18 12:00</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="text-gray-500">光影空间 · 放映厅</span>
                <button className="text-red-500 text-xs ml-2">导航</button>
              </p>
            </div>
          </div>
        </div>

        {/* Community Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-5">
          <Film className="w-4 h-4 text-red-500" />
          <div>
            <p className="text-sm">影视社区 · 线下活动</p>
            <p className="text-xs text-gray-500">发现好片，分享好片</p>
          </div>
          <button className="ml-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-full">
            去看看
          </button>
        </div>

        {/* Activity Introduction */}
        <div>
          <h2 className="text-base mb-3">活动介绍</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            本期探讨门槛一起探索最近火爆的科幻片！探讨科幻发展历程下的人性考察。观影后会有自由讨论环节，欢迎分享你的观点。
          </p>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3 flex items-center gap-3">
        <button className="flex items-center justify-center gap-1 text-gray-600">
          <Share2 className="w-5 h-5" />
          <span className="text-sm">转发</span>
        </button>
        <button className="flex items-center justify-center gap-1 text-gray-600">
          <ThumbsUp className="w-5 h-5" />
          <span className="text-sm">点赞</span>
        </button>
        <button className="flex-1 bg-gray-900 text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          报名参加（支付¥15）
        </button>
      </div>
    </div>
  );
}