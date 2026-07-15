import { ArrowLeft, MoreVertical, MapPin, Clock, Calendar, ThumbsUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShareModal } from './ShareModal';
import { PaymentModal } from './PaymentModal';
import { PaymentSuccessModal } from './PaymentSuccessModal';
import { useState } from 'react';
import activityCoverImage from 'figma:asset/0a805e6521ab9c9726abf94334914344fa7b63de.png';

interface LocalActivityDetailProps {
  activityId: string;
  onBack: () => void;
  onGoToCommunity?: () => void;
  isRegistered?: boolean;
  onRegister?: () => void;
}

export function LocalActivityDetail({ 
  activityId, 
  onBack, 
  onGoToCommunity,
  isRegistered = false,
  onRegister
}: LocalActivityDetailProps) {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentSuccessModal, setShowPaymentSuccessModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const activity = {
    id: activityId,
    title: '影视探讨会·线下观影交流',
    cover: activityCoverImage,
    description: '每月一期的影院主题沙龙，与影迷朋友一起观影、讨论、分享，本期主题《科幻与人性》。',
    location: '地铁3号线文化宫站B口，步行5分钟，现场提供茶水小食，欢迎提前到场交流。',
    time: '周六 01.18 14:00-17:00',
    deadline: '周六 01.18 12:00',
    venue: '光影空间·放映厅',
    venueTag: '导航',
    community: {
      name: '影视社区·线下活动',
      members: '发现时光，分享时光',
      avatar: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=100',
    },
    intro: '本期我们将一起观看经典科幻片，探讨科技发展下的人性思考，观影后还有自由讨论环节，欢迎分享你的观点。',
    price: 15,
    participants: 28,
    maxParticipants: 30,
  };

  const handlePaymentSuccess = () => {
    // 支付完成后，显示支付成功弹窗
    setShowPaymentSuccessModal(true);
  };

  const handlePaymentSuccessConfirm = () => {
    // 点击支付成功弹窗的确定按钮后，才调用注册
    if (onRegister) {
      onRegister();
    }
    setShowPaymentSuccessModal(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header with Cover Image */}
      <div className="relative">
        <div className="relative h-56">
          <img
            src={activity.cover}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
          
          {/* Top Navigation */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
            <button
              onClick={onBack}
              className="w-9 h-9 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setShowShareModal(true)}
              className="w-9 h-9 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 -mt-4 relative z-10">
        {/* Main Info Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h1 className="text-xl font-medium text-gray-900 mb-3">
            {activity.title}
          </h1>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {activity.description}
          </p>
          
          <div className="text-sm text-gray-600 leading-relaxed mb-4">
            {activity.location}
          </div>
          
          {/* Activity Details */}
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <div className="text-gray-500">活动时间：</div>
                <div className="text-gray-900">{activity.time}</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <div className="text-gray-500">报名截止：</div>
                <div className="text-gray-900">{activity.deadline}</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1 flex items-center justify-between">
                <div className="text-sm">
                  <div className="text-gray-500">光影空间·放映厅</div>
                </div>
                <span className="text-xs text-red-500 font-medium">导航</span>
              </div>
            </div>
          </div>
          
          {/* Community Card */}
          <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-500 font-bold text-lg">影</span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {activity.community.name}
                </div>
                <div className="text-xs text-gray-500">
                  {activity.community.members}
                </div>
              </div>
            </div>
            <button 
              onClick={onGoToCommunity}
              className="bg-gray-900 text-white text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              去看看
            </button>
          </div>
        </div>
        
        {/* Activity Introduction */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-base font-medium text-gray-900 mb-3">
            活动介绍
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {activity.intro}
          </p>
        </div>
      </div>
      
      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <button 
            onClick={handleLike}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${
              isLiked 
                ? 'bg-red-50 text-red-500' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <ThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button 
            onClick={() => {
              if (!isRegistered) {
                setShowPaymentModal(true);
              }
            }}
            disabled={isRegistered}
            className={`flex-1 rounded-full py-3.5 font-medium transition-colors ${
              isRegistered
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {isRegistered ? '已报名' : `报名参加（支付¥${activity.price}）`}
          </button>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title={activity.title}
      />

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={activity.price}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Payment Success Modal */}
      <PaymentSuccessModal
        isOpen={showPaymentSuccessModal}
        onClose={() => setShowPaymentSuccessModal(false)}
        amount={activity.price}
        onConfirm={handlePaymentSuccessConfirm}
      />
    </div>
  );
}