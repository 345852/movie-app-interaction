import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Star, Award, Film, Calendar, Heart, Share2, Play, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

interface DirectorDetailProps {
  directorId: string;
  onBack: () => void;
  onMovieClick: (movieId: string) => void;
}

export function DirectorDetail({ directorId, onBack, onMovieClick }: DirectorDetailProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  // 导演数据
  const directorsData: Record<string, any> = {
    '1': {
      id: '1',
      name: '张艺谋',
      englishName: 'Zhang Yimou',
      title: '中国电影大师',
      category: 'china',
      rating: 9.2,
      worksCount: 45,
      followers: 1200000,
      birthYear: 1951,
      nationality: '中国',
      masterpiece: '活着、红高粱',
      tags: '史诗、美学、人文',
      bio: '张艺谋，中国著名导演、编剧、制片人。第五代导演代表人物之一。以其独特的视觉美学和深刻的人文关怀著称，作品多次获得国际大奖。',
      achievements: [
        '威尼斯国际电影节金狮奖',
        '柏林国际电影节金熊奖',
        '戛纳国际电影节评审团大奖',
        '奥斯卡最佳外语片提名'
      ],
      poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
      coverImage: 'https://images.unsplash.com/flagged/photo-1597695204733-a2b2a79e51e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZGlyZWN0b3IlMjBtb3ZpZSUyMHNldHxlbnwxfHx8fDE3NzAyODE3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    '2': {
      id: '2',
      name: '克里斯托弗·诺兰',
      englishName: 'Christopher Nolan',
      title: '科幻电影大师',
      category: 'hollywood',
      rating: 9.5,
      worksCount: 12,
      followers: 2500000,
      birthYear: 1970,
      nationality: '英国/美国',
      masterpiece: '盗梦空间、星际穿越',
      tags: '烧脑、时空、哲学',
      bio: '克里斯托弗·诺兰，英美电影导演、编剧、制片人。以非线性叙事、哲学思考和视觉奇观著称，被誉为当代最具影响力的导演之一。',
      achievements: [
        '奥斯卡最佳导演提名',
        '金球奖最佳导演',
        'IMDB Top 250 多部作品上榜',
        '全球票房超过50亿美元'
      ],
      poster: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400',
      coverImage: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    '3': {
      id: '3',
      name: '昆汀·塔伦蒂诺',
      englishName: 'Quentin Tarantino',
      title: '暴力美学大师',
      category: 'hollywood',
      rating: 9.1,
      worksCount: 10,
      followers: 1800000,
      birthYear: 1963,
      nationality: '美国',
      masterpiece: '低俗小说、杀死比尔',
      tags: '暴力美学、黑色幽默',
      bio: '昆汀·塔伦蒂诺，美国著名导演、编剧、演员。以其独特的暴力美学、非线性叙事和丰富的流行文化引用而闻名。',
      achievements: [
        '戛纳电影节金棕榈奖',
        '奥斯卡最佳原创剧本奖（两次）',
        '英国电影学院奖最佳原创剧本',
        '金球奖最佳编剧'
      ],
      poster: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
      coverImage: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  };

  // 如果没有找到导演数据，使用默认数据
  const director = directorsData[directorId] || {
    id: directorId,
    name: '导演姓名',
    englishName: 'Director Name',
    title: '著名导演',
    rating: 9.0,
    worksCount: 20,
    followers: 1000000,
    birthYear: 1970,
    nationality: '未知',
    masterpiece: '代表作品',
    tags: '电影、艺术',
    bio: '这是一位著名的电影导演，作品风格独特，深受观众喜爱。',
    achievements: ['国际电影节获奖', '票房口碑双丰收'],
    poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
    coverImage: 'https://images.unsplash.com/flagged/photo-1597695204733-a2b2a79e51e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZGlyZWN0b3IlMjBtb3ZpZSUyMHNldHxlbnwxfHx8fDE3NzAyODE3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  };

  // 代表作品
  const movies = [
    {
      id: '1',
      title: '活着',
      year: 1994,
      rating: 9.3,
      poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZHJhbWElMjBtb3ZpZXxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '2',
      title: '红高粱',
      year: 1987,
      rating: 9.0,
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZmlsbXxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '3',
      title: '英雄',
      year: 2002,
      rating: 8.8,
      poster: 'https://images.unsplash.com/photo-1574267432644-f610c39a01c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJyaW9yJTIwbW92aWV8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '4',
      title: '满城尽带黄金甲',
      year: 2006,
      rating: 8.5,
      poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcGFsYWNlfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-6">
      {/* Header with Cover Image */}
      <div className="relative">
        <div className="h-64 overflow-hidden">
          <ImageWithFallback
            src={director.coverImage}
            alt={director.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-gray-50"></div>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        {/* Share Button */}
        <button className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors">
          <Share2 className="w-6 h-6 text-white" />
        </button>

        {/* Director Profile */}
        <div className="px-4 -mt-16 relative z-10">
          <div className="flex gap-4 items-end mb-4">
            <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
              <ImageWithFallback
                src={director.poster}
                alt={director.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 mb-2">
              <h1 className="text-2xl font-bold mb-1">{director.name}</h1>
              <p className="text-sm text-gray-600 mb-2">{director.englishName}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  <Star className="w-4 h-4 fill-white" />
                  <span className="font-medium">{director.rating}</span>
                </div>
                <span className="text-sm text-gray-600">{director.title}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                isFollowing
                  ? 'bg-gray-200 text-gray-700'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              {isFollowing ? '已关注' : '+ 关注导演'}
            </button>
            <button className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-xl font-medium hover:bg-red-50 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Film className="w-4 h-4 text-red-500" />
                </div>
                <div className="text-xl font-bold text-gray-900">{director.worksCount}</div>
                <div className="text-xs text-gray-500">作品数量</div>
              </div>
              <div className="text-center border-l border-r border-gray-100">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-4 h-4 text-red-500" />
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {(director.followers / 10000).toFixed(0)}万
                </div>
                <div className="text-xs text-gray-500">粉丝数量</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Calendar className="w-4 h-4 text-red-500" />
                </div>
                <div className="text-xl font-bold text-gray-900">{2026 - director.birthYear}岁</div>
                <div className="text-xs text-gray-500">导演年龄</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-4 space-y-4">
        {/* Basic Info */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-red-500" />
            基本信息
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex">
              <span className="text-gray-500 w-20">出生年份</span>
              <span className="text-gray-900">{director.birthYear}年</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20">国籍</span>
              <span className="text-gray-900">{director.nationality}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20">代表作</span>
              <span className="text-gray-900">{director.masterpiece}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20">风格标签</span>
              <div className="flex flex-wrap gap-1.5">
                {director.tags.split('、').map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-bold mb-3">导演简介</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{director.bio}</p>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            主要成就
          </h3>
          <div className="space-y-2">
            {director.achievements.map((achievement: string, index: number) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Representative Works */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold flex items-center gap-2">
              <Film className="w-5 h-5 text-red-500" />
              代表作品
            </h3>
            <span className="text-sm text-gray-500">{movies.length}部</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {movies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => onMovieClick(movie.id)}
                className="cursor-pointer group"
              >
                <div className="relative rounded-xl overflow-hidden mb-2 aspect-[2/3]">
                  <ImageWithFallback
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-red-500 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-white font-medium">{movie.rating}</span>
                  </div>
                </div>
                <h4 className="font-medium text-sm mb-1 truncate">{movie.title}</h4>
                <p className="text-xs text-gray-500">{movie.year}年</p>
              </div>
            ))}
          </div>
        </div>

        {/* More Works Button */}
        <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
          查看全部作品 ({director.worksCount})
        </button>
      </div>
    </div>
  );
}
