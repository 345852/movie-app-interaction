import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, ChevronRight, Star, Clock, Play, ChevronLeft, Grid3x3, Users, TrendingUp, Film, MessageCircle, Home as HomeIcon, Gift, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import identityImage from 'figma:asset/694a478a772df3097bbd38e35d4b0de5a479a8d4.png';
import localActivityImage from 'figma:asset/01686ccfc7404ea6249f88d1a8426c7c42ff1832.png';

interface HomeProps {
  onMovieClick: (movieId: string) => void;
  onMoreClick?: () => void;
  onPlayClick?: (movieId: string) => void;
  onPersonalNetworkClick?: () => void;
  onOpenRoomClick?: () => void;
  onTuigejiClick?: () => void;
  onArticleClick?: (articleId: string) => void;
  onSearchClick?: () => void;
  onTimePillarClick?: () => void;
  onRankingClick?: () => void;
  onRecommendClick?: () => void;
  onShareActivityClick?: () => void;
  onDirectorsClick?: () => void;
  onEventClick?: () => void;
  onLocalActivityClick?: (activityId?: string) => void;
}

export function Home({ onMovieClick, onMoreClick, onPlayClick, onPersonalNetworkClick, onOpenRoomClick, onTuigejiClick, onArticleClick, onSearchClick, onTimePillarClick, onRankingClick, onRecommendClick, onShareActivityClick, onDirectorsClick, onEventClick, onLocalActivityClick }: HomeProps) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [activeTab, setActiveTab] = useState('推荐');

  const banners = [
    {
      id: 'event-registration',
      title: '影视探讨会',
      description: '线下观影交流，每月一期',
      poster: 'https://images.unsplash.com/photo-1764581659081-af662e1db71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNsYXBwZXJib2FyZCUyMHNjZW5lfGVufDF8fHx8MTc3MDM0NDAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      isEvent: true,
    },
    {
      id: 'share-activity',
      title: '邀请好友 赢VIP会员',
      description: '每邀请1人得7天VIP，上不封顶',
      poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwcmVkfGVufDB8fHx8MTczNzMzMTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      isActivity: true,
    },
    {
      id: 'local-activity',
      title: '本地活动',
      description: '参与本地活动，赢取丰厚奖励',
      poster: localActivityImage,
      isLocalActivity: true,
    },
    {
      id: '1',
      title: '我和电影有个约会',
      description: '探索电影世界，发现精彩故事',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      title: '星际穿越',
      description: '探索无尽宇宙的奥秘',
      poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '3',
      title: '盗梦空间',
      description: '梦境与现实的边界',
      poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    }
  ];

  const categories = [
    { name: '看个人脉', icon: Users, action: 'personalNetwork' },
    { name: '排个榜单', icon: TrendingUp, action: 'ranking' },
    { name: '时空转', icon: Clock, action: 'timePillar' },
    { name: '强推个片', icon: Film, action: 'recommend' },
    { name: '开个房间', icon: HomeIcon, action: 'openRoom' }
  ];

  const directors = [
    {
      id: 1,
      name: '张艺谋',
      title: '中国电影大师',
      poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: 2,
      name: '克里斯托弗·诺兰',
      title: '科幻电影大师',
      poster: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: 3,
      name: '昆汀·塔伦蒂诺',
      title: '暴力美学大师',
      poster: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
    }
  ];

  const localActivities = [
    {
      id: 1,
      date: '02/08',
      day: '周六',
      title: '《肖申克的救赎》主题观影会',
      location: '朝阳区三里屯影院',
      time: '14:00-17:00',
      participants: 28,
      maxParticipants: 30,
      poster: 'https://images.unsplash.com/photo-1762417420551-2fec32ed3595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHNjcmVlbmluZyUyMGV2ZW50fGVufDF8fHx8MTc3MDM1NTQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: '热门',
    },
    {
      id: 2,
      date: '02/09',
      day: '周日',
      title: '诺兰电影马拉松',
      location: '海淀区五道口电影院',
      time: '10:00-22:00',
      participants: 45,
      maxParticipants: 50,
      poster: 'https://images.unsplash.com/photo-1621276336795-925346853745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwYXVkaWVuY2V8ZW58MXx8fHwxNzcwMzU1NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: '限时',
    },
    {
      id: 3,
      date: '02/14',
      day: '周五',
      title: '情人节浪漫电影之夜',
      location: '东城区王府井影城',
      time: '19:00-22:00',
      participants: 18,
      maxParticipants: 40,
      poster: 'https://images.unsplash.com/photo-1718465470941-017da2959e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBvdXRkb29yfGVufDF8fHx8MTc3MDM1NTQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: '推荐',
    },
    {
      id: 4,
      date: '02/15',
      day: '周六',
      title: '经典港片赏析会',
      location: '西城区西单影院',
      time: '15:00-18:00',
      participants: 35,
      maxParticipants: 40,
      poster: 'https://images.unsplash.com/photo-1758525862263-af89b090fb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3YXRjaGluZyUyMG1vdmllJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzcwMjY1MTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: '热门',
    },
  ];

  const tabs = ['推荐', '潮流玩法🔥', '春游踏青', '轻户外', '京郊周末', '亲子'];

  const waterfallItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1715312889999-1898f3f8fbbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG91dGRvb3IlMjB0cmF2ZWwlMjBuYXR1cmV8ZW58MXx8fHwxNzcwMzgwMTU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: '春日户外探索之旅',
      location: '京城',
      likes: 3418,
      author: 'Janus止水',
      tags: ['游记', '密云'],
      height: 280,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1695918435048-1e48dab0c4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwdGVudCUyMG91dGRvb3IlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzcwMzgwMTU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: '这里出来的美到爆之旅 | 去这对面 野营答地"森林秘密基地"',
      location: '通州',
      likes: 1256,
      author: 'Travel_小明',
      tags: ['露营', '户外'],
      height: 320,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1648804536048-0a7d8b103bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbiUyMHRyYWlsJTIwc2NlbmljfGVufDF8fHx8MTc3MDMxMDgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: '登山徒步赏美景',
      location: '怀柔',
      likes: 892,
      author: '户外达人',
      tags: ['徒步', '登山'],
      height: 240,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1558925149-29264a073f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHRyYXZlbCUyMHZhY2F0aW9ufGVufDF8fHx8MTc3MDM4MDE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: '海边日落美景',
      location: '天津',
      likes: 2145,
      author: '摄影师小李',
      tags: ['海边', '日落'],
      height: 260,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1760440315603-5d313f74a67b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdHJhdmVsJTIwYXJjaGl0ZWN0dXJlJTIwc2t5bGluZXxlbnwxfHx8fDE3NzAzODAxNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: '城市建筑探索',
      location: '北京',
      likes: 567,
      author: '城市观察者',
      tags: ['建筑', '城市'],
      height: 300,
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1758957097741-fea28cb227b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcmVzdGF1cmFudCUyMGRpbmluZyUyMGV4cGVyaWVuY2V8ZW58MXx8fHwxNzcwMzgwMTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: '美食探店之旅',
      location: '三里屯',
      likes: 1823,
      author: '美食家',
      tags: ['美食', '餐厅'],
      height: 270,
    },
  ];

  const handlePrevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  // Minimum swipe distance (in px) to trigger a swipe action
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNextBanner();
    }
    if (isRightSwipe) {
      handlePrevBanner();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setPrevTranslate(currentTranslate);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const walk = currentX - startX;
    setCurrentTranslate(prevTranslate + walk);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentBanner < banners.length - 1) {
      handleNextBanner();
    } else if (movedBy > 100 && currentBanner > 0) {
      handlePrevBanner();
    }
    setCurrentTranslate(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentBanner < banners.length - 1) {
      handleNextBanner();
    } else if (movedBy > 100 && currentBanner > 0) {
      handlePrevBanner();
    }
    setCurrentTranslate(0);
  };

  return (
    <div className="pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 pt-4 pb-3 sticky top-0 z-10">
        <div 
          onClick={onSearchClick}
          className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <Search className="w-5 h-5 text-gray-400" />
          <span className="flex-1 text-sm text-gray-500">搜索热门影视</span>
        </div>
      </div>

      {/* Local Activities Section - Top Banner */}
      <div className="mt-4 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-medium">同城活动·北京</h2>
          <button 
            onClick={() => onLocalActivityClick && onLocalActivityClick()}
            className="text-sm text-gray-500 flex items-center gap-1"
          >
            16场活动火热进行中
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {localActivities.map((activity) => (
            <div
              key={activity.id}
              onClick={() => onLocalActivityClick && onLocalActivityClick(activity.id)}
              className="flex-shrink-0 w-40 cursor-pointer group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Activity Image */}
                <div className="relative h-52">
                  <ImageWithFallback
                    src={activity.poster}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Date Badge - Top Left */}
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1.5 text-center">
                    <div className="text-base font-bold text-gray-900 leading-none">{activity.date}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{activity.day}</div>
                  </div>
                  
                  {/* Tag - Top Right */}
                  <div className="absolute top-2 right-2">
                    <span className={
                      `text-[10px] font-bold px-2 py-1 rounded-full ${
                        activity.tag === '热门' ? 'bg-red-500 text-white' :
                        activity.tag === '限时' ? 'bg-orange-500 text-white' :
                        'bg-blue-500 text-white'
                      }`
                    }>
                      {activity.tag}
                    </span>
                  </div>
                  
                  {/* Title at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white text-sm font-medium line-clamp-2 leading-tight">{activity.title}</h3>
                  </div>
                </div>
                
                {/* User Info */}
                <div className="p-2.5 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] text-gray-600 truncate">Janus止水</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-4">
        <div className="grid grid-cols-5 gap-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  if (category.action === 'personalNetwork' && onPersonalNetworkClick) {
                    onPersonalNetworkClick();
                  } else if (category.action === 'openRoom' && onOpenRoomClick) {
                    onOpenRoomClick();
                  } else if (category.action === 'ranking' && onRankingClick) {
                    onRankingClick();
                  } else if (category.action === 'timePillar' && onTimePillarClick) {
                    onTimePillarClick();
                  } else if (category.action === 'recommend' && onRecommendClick) {
                    onRecommendClick();
                  }
                }}
                className="flex flex-col items-center gap-2 py-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-700" />
                </div>
                <span className="text-xs text-gray-700">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Waterfall Feed Section */}
      <div className="mt-4 bg-white">
        {/* Tabs */}
        <div className="px-4 pt-4 pb-3 border-b border-gray-100">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 pb-2 px-1 text-sm transition-colors ${
                  activeTab === tab
                    ? 'text-gray-900 font-medium border-b-2 border-red-500'
                    : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Waterfall Grid */}
        <div className="px-3 pt-3 pb-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              {waterfallItems.filter((_, index) => index % 2 === 0).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onArticleClick && onArticleClick(item.id.toString())}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="relative" style={{ height: `${item.height}px` }}>
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Tags */}
                    <div className="absolute top-2 left-2 flex gap-1">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium line-clamp-2 mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3">
              {waterfallItems.filter((_, index) => index % 2 === 1).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onArticleClick && onArticleClick(item.id.toString())}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="relative" style={{ height: `${item.height}px` }}>
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Tags */}
                    <div className="absolute top-2 left-2 flex gap-1">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium line-clamp-2 mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}