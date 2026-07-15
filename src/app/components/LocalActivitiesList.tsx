import { ArrowLeft, MapPin, Calendar, Users, Clock, ChevronRight, Filter, Search } from 'lucide-react';
import { useState } from 'react';

interface LocalActivitiesListProps {
  onBack: () => void;
  onActivityClick: (activityId: string) => void;
}

export function LocalActivitiesList({ onBack, onActivityClick }: LocalActivitiesListProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'viewing', name: '观影会' },
    { id: 'discussion', name: '影评会' },
    { id: 'meetup', name: '线下见面' },
    { id: 'exhibition', name: '影展活动' },
  ];

  const activities = [
    {
      id: '1',
      title: '《肖申克的救赎》主题观影会',
      date: '02/08',
      time: '周六',
      location: '朝阳区·望京SOHO',
      participants: 15,
      maxParticipants: 20,
      price: 58,
      status: '热门',
      category: 'viewing',
      host: 'James北京',
      hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      cover: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBkYXJrfGVufDF8fHx8MTc3MDM4MzA2N3ww&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: '2',
      title: '诺兰电影马拉松',
      date: '02/09',
      time: '周日',
      location: '海淀区·五道口影院',
      participants: 8,
      maxParticipants: 15,
      price: 88,
      status: '即将开始',
      category: 'viewing',
      host: 'James北京',
      hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      cover: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHByb2plY3RvcnxlbnwxfHx8fDE3NzAzODMwNjd8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: '3',
      title: '独立电影讨论沙龙',
      date: '02/10',
      time: '周一',
      location: '东城区·三里屯咖啡馆',
      participants: 12,
      maxParticipants: 20,
      price: 0,
      status: '免费',
      category: 'discussion',
      host: 'MovieLover',
      hostAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      cover: 'https://images.unsplash.com/photo-1574267432644-f610a2b6e4f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwbWVldGluZ3xlbnwxfHx8fDE3NzAzODMwNjd8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: '4',
      title: '经典港片回顾展',
      date: '02/12',
      time: '周三',
      location: '西城区·北京电影资料馆',
      participants: 25,
      maxParticipants: 50,
      price: 38,
      status: '热门',
      category: 'exhibition',
      host: 'CinemaFan',
      hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      cover: 'https://images.unsplash.com/photo-1585647347384-2593bc35786b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB2aW50YWdlfGVufDF8fHx8MTc3MDM4MzA2N3ww&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: '5',
      title: '影迷见面会·分享观影心得',
      date: '02/14',
      time: '周五',
      location: '朝阳区·蓝色港湾',
      participants: 18,
      maxParticipants: 30,
      price: 0,
      status: '免费',
      category: 'meetup',
      host: 'FilmCritic',
      hostAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      cover: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMG5pZ2h0fGVufDF8fHx8MTc3MDM4MzA2N3ww&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: '6',
      title: '科幻电影专场放映',
      date: '02/15',
      time: '周六',
      location: '海淀区·中关村影院',
      participants: 10,
      maxParticipants: 25,
      price: 68,
      status: '即将开始',
      category: 'viewing',
      host: 'SciFiFan',
      hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      cover: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZXxlbnwxfHx8fDE3NzAzODMwNjd8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: '7',
      title: '奥斯卡获奖影片分享会',
      date: '02/16',
      time: '周日',
      location: '东城区·王府井大街影城',
      participants: 20,
      maxParticipants: 35,
      price: 48,
      status: '热门',
      category: 'discussion',
      host: 'OscarFan',
      hostAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      cover: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvc2NhciUyMHRyb3BoeXxlbnwxfHx8fDE3NzAzODMwNjd8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: '8',
      title: '午夜场恐怖片观影',
      date: '02/17',
      time: '周一',
      location: '朝阳区·三里屯影院',
      participants: 6,
      maxParticipants: 12,
      price: 78,
      status: '即将开始',
      category: 'viewing',
      host: 'HorrorLover',
      hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      cover: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZXxlbnwxfHx8fDE3NzAzODMwNjd8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          activity.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-medium">同城活动·北京</h1>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Filter className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索活动/地点"
              className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-sm rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? 'bg-white text-red-500 font-medium'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            <span className="text-gray-900 font-medium">北京地区</span>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-red-500">{filteredActivities.length}</p>
            <p className="text-xs text-gray-500">场活动进行中</p>
          </div>
        </div>
      </div>

      {/* Activities List */}
      <div className="px-4 py-4 space-y-3">
        {filteredActivities.map(activity => (
          <div
            key={activity.id}
            onClick={() => onActivityClick(activity.id)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex">
              {/* Activity Image */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <img
                  src={activity.cover}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                {/* Status Badge */}
                <div className={`absolute top-2 left-2 px-2 py-1 rounded-lg text-xs font-medium ${
                  activity.status === '热门' 
                    ? 'bg-red-500 text-white' 
                    : activity.status === '免费'
                    ? 'bg-green-500 text-white'
                    : 'bg-orange-500 text-white'
                }`}>
                  {activity.status}
                </div>
              </div>

              {/* Activity Info */}
              <div className="flex-1 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                    {activity.title}
                  </h3>
                  
                  <div className="space-y-1.5 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{activity.date} {activity.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="line-clamp-1">{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{activity.participants}/{activity.maxParticipants}人参与</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={activity.hostAvatar}
                      alt={activity.host}
                      className="w-5 h-5 rounded-full"
                    />
                    <span className="text-xs text-gray-500">{activity.host}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {activity.price === 0 ? (
                      <span className="text-sm font-bold text-green-500">免费</span>
                    ) : (
                      <>
                        <span className="text-xs text-gray-500">¥</span>
                        <span className="text-lg font-bold text-red-500">{activity.price}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredActivities.length === 0 && (
        <div className="text-center py-20">
          <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">暂无相关活动</p>
        </div>
      )}
    </div>
  );
}
