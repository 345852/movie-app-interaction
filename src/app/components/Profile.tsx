import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Settings, 
  Heart, 
  Clock, 
  Star, 
  Bookmark, 
  Users, 
  MessageSquare,
  ChevronRight,
  Crown,
  Ticket,
  User,
  Calendar
} from 'lucide-react';

interface ProfileProps {
  onNavigate: (page: string) => void;
}

export function Profile({ onNavigate }: ProfileProps) {
  const userStats = [
    { label: '关注', value: 128, icon: Heart },
    { label: '粉丝', value: 256, icon: Users },
    { label: '收藏', value: 89, icon: Bookmark },
    { label: '评论', value: 234, icon: MessageSquare }
  ];

  const myMoviesItems = [
    { icon: Clock, label: '观看历史', color: 'text-blue-500', bgColor: 'bg-blue-50', page: 'history' },
    { icon: Star, label: '我的评分', color: 'text-yellow-500', bgColor: 'bg-yellow-50', page: 'ratings' },
    { icon: Bookmark, label: '我的收藏', color: 'text-red-500', bgColor: 'bg-red-50', page: 'collections' },
    { icon: Ticket, label: '我的票券', color: 'text-green-500', bgColor: 'bg-green-50', page: 'tickets' }
  ];

  const socialItems = [
    { icon: Users, label: '我的关注', color: 'text-purple-500', bgColor: 'bg-purple-50', page: 'following' },
    { icon: MessageSquare, label: '我的评论', color: 'text-pink-500', bgColor: 'bg-pink-50', page: 'comments' }
  ];

  return (
    <div className="pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Profile Card */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-5 mb-4 shadow-sm">
        <div className="flex items-start gap-4 mb-5">
          <div 
            onClick={() => onNavigate('myProfile')}
            className="w-16 h-16 rounded-full overflow-hidden cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0 ring-2 ring-gray-100"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="用户头像"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg mb-1 truncate">电影爱好者</h2>
            <p className="text-xs text-gray-400 mb-2.5">ID: movie_lover_2024</p>
            <button 
              onClick={() => onNavigate('vip')}
              className="px-3.5 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs rounded-full flex items-center gap-1.5 hover:shadow-md transition-all cursor-pointer font-medium"
            >
              <Crown className="w-3.5 h-3.5" />
              VIP会员
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3 pt-4 border-t border-gray-100">
          {userStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1.5"
            >
              <stat.icon className="w-5 h-5 text-gray-400" />
              <span className="text-base font-medium text-gray-900">{stat.value}</span>
              <span className="text-xs text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Check-In Banner */}
      <div 
        onClick={() => onNavigate('checkIn')}
        className="mx-4 mb-4 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-all active:scale-[0.98]"
      >
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-medium mb-0.5 text-base">每日签到</h3>
              <p className="text-xs opacity-90">连续签到6天 · 已获得320积分</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
            去签到
          </div>
        </div>
      </div>

      {/* My Movies Section */}
      <div className="mx-4 mb-4">
        <h3 className="text-sm text-gray-400 mb-2.5 px-1 font-medium">我的观影</h3>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {myMoviesItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate(item.page)}
              className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-50 last:border-0 transition-colors group"
            >
              <div className={`w-9 h-9 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <span className="flex-1 text-left text-sm text-gray-700">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-400 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Social Section */}
      <div className="mx-4">
        <h3 className="text-sm text-gray-400 mb-2.5 px-1 font-medium">社交互动</h3>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {socialItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate(item.page)}
              className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-50 last:border-0 transition-colors group"
            >
              <div className={`w-9 h-9 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <span className="flex-1 text-left text-sm text-gray-700">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-400 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}