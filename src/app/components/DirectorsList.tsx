import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Search, Star, Film, Award, TrendingUp, Filter } from 'lucide-react';
import { useState } from 'react';

interface DirectorsListProps {
  onBack: () => void;
  onDirectorClick: (directorId: string) => void;
}

export function DirectorsList({ onBack, onDirectorClick }: DirectorsListProps) {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: '全部' },
    { id: 'china', label: '华语' },
    { id: 'hollywood', label: '好莱坞' },
    { id: 'europe', label: '欧洲' },
    { id: 'japan', label: '日韩' }
  ];

  const directors = [
    {
      id: '1',
      name: '张艺谋',
      englishName: 'Zhang Yimou',
      title: '中国电影大师',
      category: 'china',
      rating: 9.2,
      worksCount: 45,
      masterpiece: '活着、红高粱',
      tags: '史诗、美学、人文',
      poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '2',
      name: '克里斯托弗·诺兰',
      englishName: 'Christopher Nolan',
      title: '科幻电影大师',
      category: 'hollywood',
      rating: 9.5,
      worksCount: 12,
      masterpiece: '盗梦空间、星际穿越',
      tags: '烧脑、时空、哲学',
      poster: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '3',
      name: '昆汀·塔伦蒂诺',
      englishName: 'Quentin Tarantino',
      title: '暴力美学大师',
      category: 'hollywood',
      rating: 9.1,
      worksCount: 10,
      masterpiece: '低俗小说、杀死比尔',
      tags: '暴力美学、黑色幽默',
      poster: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '4',
      name: '斯皮尔伯格',
      englishName: 'Steven Spielberg',
      title: '好莱坞传奇导演',
      category: 'hollywood',
      rating: 9.3,
      worksCount: 35,
      masterpiece: '辛德勒名单、侏罗纪公园',
      tags: '商业、情感、史诗',
      poster: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxlfGVufDB8fHx8MTczODc1ODE4OXww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '5',
      name: '王家卫',
      englishName: 'Wong Kar-wai',
      title: '香港文艺片教父',
      category: 'china',
      rating: 9.0,
      worksCount: 15,
      masterpiece: '花样年华、重庆森林',
      tags: '文艺、意识流、爱情',
      poster: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGFzaWFufGVufDB8fHx8MTczODc1ODIyMnww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '6',
      name: '姜文',
      englishName: 'Jiang Wen',
      title: '中国狂想派导演',
      category: 'china',
      rating: 8.9,
      worksCount: 8,
      masterpiece: '让子弹飞、阳光灿烂的日子',
      tags: '荒诞、黑色幽默、野性',
      poster: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNlcmlvdXN8ZW58MHx8fHwxNzM4NzU4MjU0fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '7',
      name: '韦斯·安德森',
      englishName: 'Wes Anderson',
      title: '对称美学大师',
      category: 'hollywood',
      rating: 8.8,
      worksCount: 11,
      masterpiece: '布达佩斯大饭店、月升王国',
      tags: '对称美学、童话、复古',
      poster: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHN0eWxpc2h8ZW58MHx8fHwxNzM4NzU4Mjg1fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '8',
      name: '黑泽明',
      englishName: 'Akira Kurosawa',
      title: '日本电影之神',
      category: 'japan',
      rating: 9.4,
      worksCount: 30,
      masterpiece: '七武士、罗生门',
      tags: '武士、人性、史诗',
      poster: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMG9sZGVyfGVufDB8fHx8MTczODc1ODMxNnww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '9',
      name: '宫崎骏',
      englishName: 'Hayao Miyazaki',
      title: '动画电影大师',
      category: 'japan',
      rating: 9.6,
      worksCount: 11,
      masterpiece: '千与千寻、龙猫',
      tags: '动画、童真、环保',
      poster: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGVsZGVybHl8ZW58MHx8fHwxNzM4NzU4MzQ3fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '10',
      name: '大卫·芬奇',
      englishName: 'David Fincher',
      title: '悬疑惊悚大师',
      category: 'hollywood',
      rating: 9.2,
      worksCount: 11,
      masterpiece: '搏击俱乐部、七宗罪',
      tags: '悬疑、黑暗、人性',
      poster: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGRhcmt8ZW58MHx8fHwxNzM4NzU4Mzc3fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '11',
      name: '陈凯歌',
      englishName: 'Chen Kaige',
      title: '第五代导演代表',
      category: 'china',
      rating: 8.7,
      worksCount: 22,
      masterpiece: '霸王别姬、黄土地',
      tags: '史诗、人文、艺术',
      poster: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGFzaWFuJTIwbWF0dXJlfGVufDB8fHx8MTczODc1ODQwN3ww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '12',
      name: '吕克·贝松',
      englishName: 'Luc Besson',
      title: '法国视觉大师',
      category: 'europe',
      rating: 8.8,
      worksCount: 20,
      masterpiece: '这个杀手不太冷、第五元素',
      tags: '动作、视觉、浪漫',
      poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGV1cm9wZWFufGVufDB8fHx8MTczODc1ODQzN3ww&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  const filteredDirectors = directors.filter(director => {
    const matchesTab = selectedTab === 'all' || director.category === selectedTab;
    const matchesSearch = director.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         director.englishName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="pb-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-100">
        <div className="px-4 pt-4 pb-3 flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-medium">特色导演大盘点</h1>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索导演姓名"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 pb-3 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Directors List */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">
            共 {filteredDirectors.length} 位导演
          </h3>
          <button className="flex items-center gap-1 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            筛选
          </button>
        </div>

        <div className="space-y-3">
          {filteredDirectors.map(director => (
            <div
              key={director.id}
              onClick={() => onDirectorClick(director.id)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex gap-4 p-4">
                {/* Director Photo */}
                <div className="flex-shrink-0 w-24 h-32 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={director.poster}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Director Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-lg mb-1 truncate">{director.name}</h3>
                      <p className="text-xs text-gray-500 mb-2">{director.englishName}</p>
                    </div>
                    <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium text-red-500">{director.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Award className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600 truncate">{director.title}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Film className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600 truncate">{director.masterpiece}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{director.worksCount} 部作品</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {director.tags.split('、').map((tag, index) => (
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
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredDirectors.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-gray-500">未找到相关导演</p>
        </div>
      )}
    </div>
  );
}
