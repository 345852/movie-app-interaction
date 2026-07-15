import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, X, MapPin, Film, Star, Users, Sparkles, Filter, RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface MatchingProps {
  onMovieClick: (movieId: string) => void;
  onHomeClick?: () => void;
  onChatClick?: (userId: string, userName: string, userAvatar: string) => void;
}

interface MatchUser {
  id: string;
  name: string;
  age: number;
  avatar: string;
  location: string;
  distance: string;
  bio: string;
  matchScore: number;
  favoriteGenres: string[];
  favoriteMovies: string[];
  recentlyWatched: string[];
  commonInterests: number;
}

export function Matching({ onMovieClick, onHomeClick, onChatClick }: MatchingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    distance: '全部',
    ageRange: '全部',
    genres: [] as string[]
  });

  const matchUsers: MatchUser[] = [
    {
      id: '1',
      name: '小雨',
      age: 25,
      avatar: 'https://images.unsplash.com/photo-1594318223885-20dc4b889f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGV8ZW58MXx8fHwxNzcwMzM1NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      location: '北京·朝阳区',
      distance: '2.3km',
      bio: '热爱文艺片和悬疑片，周末喜欢去影院看电影，寻找一起观影的伙伴~',
      matchScore: 95,
      favoriteGenres: ['文艺', '悬疑', '剧情'],
      favoriteMovies: ['肖申克的救赎', '霸王别姬', '盗梦空间'],
      recentlyWatched: ['封神第一部', '消失的她', '长安三万里'],
      commonInterests: 12
    },
    {
      id: '2',
      name: '阿轩',
      age: 28,
      avatar: 'https://images.unsplash.com/photo-1560012796-1cd2e1875ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHNtaWxlfGVufDF8fHx8MTc3MDM4MDg4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      location: '北京·海淀区',
      distance: '5.8km',
      bio: '科幻迷和漫威粉，喜欢IMAX观影体验，也喜欢讨论剧情细节~',
      matchScore: 88,
      favoriteGenres: ['科幻', '动作', '冒险'],
      favoriteMovies: ['星际穿越', '盗梦空间', '蝙蝠侠'],
      recentlyWatched: ['奥本海默', '芭比', '碟中谍7'],
      commonInterests: 8
    },
    {
      id: '3',
      name: '诗涵',
      age: 23,
      avatar: 'https://images.unsplash.com/photo-1589553009868-c7b2bb474531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMzAxNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      location: '北京·东城区',
      distance: '3.2km',
      bio: '动画电影爱好者，宫崎骏的忠实粉丝，也喜欢看韩剧和日剧~',
      matchScore: 82,
      favoriteGenres: ['动画', '爱情', '家庭'],
      favoriteMovies: ['千与千寻', '龙猫', '你的名字'],
      recentlyWatched: ['铃芽之旅', '天空之城', '哈尔的移动城堡'],
      commonInterests: 10
    },
    {
      id: '4',
      name: '明远',
      age: 30,
      avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzAzNzQzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      location: '北京·西城区',
      distance: '4.1km',
      bio: '资深影迷，豆瓣标记超过500部电影，喜欢经典老片和独立电影~',
      matchScore: 91,
      favoriteGenres: ['剧情', '犯罪', '历史'],
      favoriteMovies: ['教父', '辛德勒的名单', '美丽人生'],
      recentlyWatched: ['沙丘2', '奥本海默', '花月杀手'],
      commonInterests: 15
    },
    {
      id: '5',
      name: '晓晴',
      age: 26,
      avatar: 'https://images.unsplash.com/photo-1672462478040-a5920e2c23d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMzgwODg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      location: '北京·丰台区',
      distance: '6.5km',
      bio: '恐怖片和惊悚片爱好者，寻找胆子大的观影伙伴一起看恐怖片！',
      matchScore: 76,
      favoriteGenres: ['恐怖', '惊悚', '悬疑'],
      favoriteMovies: ['寂静之地', '遗传厄运', '闪灵'],
      recentlyWatched: ['修女2', '五夜后宫', '邪降3'],
      commonInterests: 6
    }
  ];

  const currentUser = matchUsers[currentIndex];

  const handleLike = () => {
    // 模拟配对成功
    if (currentUser.matchScore > 85) {
      alert(`🎉 配对成功！与 ${currentUser.name} 开始聊天吧~`);
      if (onChatClick) {
        onChatClick(currentUser.id, currentUser.name, currentUser.avatar);
      }
    } else {
      alert(`❤️ 已向 ${currentUser.name} 发送配对请求~`);
    }
    
    if (currentIndex < matchUsers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert('暂时没有更多推荐了，请稍后再来~');
      setCurrentIndex(0);
    }
  };

  const handlePass = () => {
    if (currentIndex < matchUsers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert('暂时没有更多推荐了，请稍后再来~');
      setCurrentIndex(0);
    }
  };

  const handleRefresh = () => {
    setCurrentIndex(0);
    alert('已刷新推荐列表~');
  };

  const handleDistanceChange = (distance: string) => {
    setSelectedFilters({ ...selectedFilters, distance });
  };

  const handleAgeRangeChange = (ageRange: string) => {
    setSelectedFilters({ ...selectedFilters, ageRange });
  };

  const handleGenreToggle = (genre: string) => {
    const isSelected = selectedFilters.genres.includes(genre);
    if (isSelected) {
      setSelectedFilters({
        ...selectedFilters,
        genres: selectedFilters.genres.filter(g => g !== genre)
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        genres: [...selectedFilters.genres, genre]
      });
    }
  };

  const handleApplyFilters = () => {
    setShowFilters(false);
    alert(`已应用筛选条件：距离 ${selectedFilters.distance}、年龄 ${selectedFilters.ageRange}${selectedFilters.genres.length > 0 ? `、类型 ${selectedFilters.genres.join('、')}` : ''}`);
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">暂无推荐</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-red-500" />
            <h1 className="text-xl font-medium">智能配对</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <RefreshCw className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Match Score Banner */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-3 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-xl font-bold">{currentUser.matchScore}%</span>
            </div>
            <div>
              <p className="text-sm opacity-90">匹配度</p>
              <p className="text-xs opacity-75">{currentUser.commonInterests} 个共同兴趣</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm">还有 {matchUsers.length - currentIndex - 1} 位推荐</p>
          </div>
        </div>
      </div>

      {/* User Card */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* User Photo */}
          <div className="relative h-96">
            <ImageWithFallback
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* User Basic Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    {currentUser.name}, {currentUser.age}
                  </h2>
                  <div className="flex items-center gap-1 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{currentUser.location}</span>
                    <span className="mx-1">·</span>
                    <span>{currentUser.distance}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Details */}
          <div className="p-4">
            {/* Bio */}
            <div className="mb-4">
              <p className="text-gray-700">{currentUser.bio}</p>
            </div>

            {/* Favorite Genres */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-red-500" />
                <h3 className="text-sm font-medium text-gray-900">喜欢的类型</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentUser.favoriteGenres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 bg-red-50 text-red-600 text-xs rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Favorite Movies */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Film className="w-4 h-4 text-red-500" />
                <h3 className="text-sm font-medium text-gray-900">最爱的电影</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentUser.favoriteMovies.map((movie) => (
                  <span
                    key={movie}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {movie}
                  </span>
                ))}
              </div>
            </div>

            {/* Recently Watched */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-red-500" />
                <h3 className="text-sm font-medium text-gray-900">最近在看</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentUser.recentlyWatched.map((movie) => (
                  <span
                    key={movie}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                  >
                    {movie}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-20 left-0 right-0 px-4 pb-4">
        <div className="max-w-md mx-auto flex items-center justify-center gap-6">
          <button
            onClick={handlePass}
            className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
          >
            <X className="w-8 h-8 text-gray-500" />
          </button>
          <button
            onClick={handleLike}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-pink-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
          >
            <Heart className="w-10 h-10 text-white fill-white" />
          </button>
        </div>
      </div>

      {/* Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">筛选条件</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">距离</label>
                <div className="flex gap-2">
                  {['全部', '5km内', '10km内', '20km内'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleDistanceChange(option)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedFilters.distance === option
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-red-400 hover:text-white'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">年龄范围</label>
                <div className="flex gap-2">
                  {['全部', '18-25', '26-30', '31-35', '36+'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAgeRangeChange(option)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedFilters.ageRange === option
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-red-400 hover:text-white'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">喜好类型</label>
                <div className="flex flex-wrap gap-2">
                  {['剧情', '喜剧', '动作', '爱情', '科幻', '悬疑', '恐怖', '动画'].map((genre) => (
                    <button
                      key={genre}
                      onClick={() => handleGenreToggle(genre)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedFilters.genres.includes(genre)
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-red-400 hover:text-white'
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleApplyFilters}
              className="w-full mt-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              确定
            </button>
          </div>
        </div>
      )}
    </div>
  );
}