import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Image, Film, BookOpen, Upload, Wand2, ArrowRight, Play, Star, Heart } from 'lucide-react';
import { useState } from 'react';

interface AIFeaturesProps {
  onMovieClick?: (movieId: string) => void;
  onHomeClick?: () => void;
}

export function AIFeatures({ onMovieClick, onHomeClick }: AIFeaturesProps) {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] = useState<{type: string, content: any} | null>(null);

  // AI功能卡片数据
  const aiFeatures = [
    {
      id: 'photo-merge',
      title: 'AI帮P影视合照',
      description: '上传你的照片，AI帮你与喜欢的影视角色合成精美合照',
      icon: Image,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1752650736744-1cfed08a0512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzAzODEyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      examples: [
        { title: '与漫威英雄合影', preview: 'https://images.unsplash.com/photo-1651914702499-95ef87a739d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNvbGxhZ2V8ZW58MXx8fHwxNzcwMzU2MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { title: '迪士尼公主同框', preview: 'https://images.unsplash.com/photo-1766273686827-2d592ec2e566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2NlbmUlMjBjaW5lbWF8ZW58MXx8fHwxNzcwMzgxMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { title: '与经典角色合照', preview: 'https://images.unsplash.com/photo-1622722080708-7e42f38e6690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwc3RvcnklMjBib29rfGVufDF8fHx8MTc3MDM4MTI2NHww&ixlib=rb-4.1.0&q=80&w=1080' }
      ]
    },
    {
      id: 'scene-insert',
      title: 'AI帮自己P进影视中',
      description: '选择喜欢的影视场景，AI将你无缝融入其中',
      icon: Film,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1766273686827-2d592ec2e566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2NlbmUlMjBjaW5lbWF8ZW58MXx8fHwxNzcwMzgxMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      examples: [
        { title: '穿越到星际穿越', preview: 'https://images.unsplash.com/photo-1651914702499-95ef87a739d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNvbGxhZ2V8ZW58MXx8fHwxNzcwMzU2MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { title: '走进哈利波特魔法世界', preview: 'https://images.unsplash.com/photo-1766273686827-2d592ec2e566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2NlbmUlMjBjaW5lbWF8ZW58MXx8fHwxNzcwMzgxMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { title: '成为钢铁侠', preview: 'https://images.unsplash.com/photo-1768323102310-965beb4849ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAzMTY0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' }
      ]
    },
    {
      id: 'story-writer',
      title: 'AI帮自己写故事',
      description: '输入你的想法，AI为你创作属于自己的影视故事剧本',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1622722080708-7e42f38e6690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwc3RvcnklMjBib29rfGVufDF8fHx8MTc3MDM4MTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      examples: [
        { title: '科幻冒险故事', preview: 'https://images.unsplash.com/photo-1651914702499-95ef87a739d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNvbGxhZ2V8ZW58MXx8fHwxNzcwMzU2MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { title: '浪漫爱情剧本', preview: 'https://images.unsplash.com/photo-1766273686827-2d592ec2e566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2NlbmUlMjBjaW5lbWF8ZW58MXx8fHwxNzcwMzgxMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { title: '悬疑推理小说', preview: 'https://images.unsplash.com/photo-1622722080708-7e42f38e6690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwc3RvcnklMjBib29rfGVufDF8fHx8MTc3MDM4MTI2NHww&ixlib=rb-4.1.0&q=80&w=1080' }
      ]
    }
  ];

  const handleFeatureClick = (featureId: string) => {
    setSelectedFeature(featureId);
    setGeneratedContent(null);
    setUploadedImage(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    // 模拟AI生成内容
    setTimeout(() => {
      if (selectedFeature === 'photo-merge') {
        setGeneratedContent({
          type: 'image',
          content: {
            url: 'https://images.unsplash.com/photo-1651914702499-95ef87a739d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNvbGxhZ2V8ZW58MXx8fHwxNzcwMzU2MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
            title: '已生成影视合照'
          }
        });
      } else if (selectedFeature === 'scene-insert') {
        setGeneratedContent({
          type: 'image',
          content: {
            url: 'https://images.unsplash.com/photo-1766273686827-2d592ec2e566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2NlbmUlMjBjaW5lbWF8ZW58MXx8fHwxNzcwMzgxMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
            title: '你已融入影视场景'
          }
        });
      } else if (selectedFeature === 'story-writer') {
        setGeneratedContent({
          type: 'story',
          content: {
            title: '时空旅行者的奇遇',
            genre: '科幻 / 冒险',
            story: `在2045年的某个深夜，年轻的物理学家李明在实验室中意外启动了一台神秘的时空装置。刹那间，他被卷入了一个巨大的能量漩涡，穿越到了未来的世界。

在这个充满科技奇迹的世界里，人类已经掌握了星际旅行的技术，但却面临着外星文明入侵的危机。李明凭借着自己对时空理论的深刻理解，成为了拯救地球的关键人物。

他必须在有限的时间内，集结未来世界的精英团队，利用时空装置回到过去，阻止这场灾难的发生...

故事充满了惊险刺激的冒险、温暖动人的友情，以及对人性和科技的深刻思考。`,
            tags: ['时空穿越', '拯救地球', '科技冒险', '友情羁绊']
          }
        });
      }
    }, 1500);
  };

  const handleBack = () => {
    setSelectedFeature(null);
    setGeneratedContent(null);
    setUploadedImage(null);
  };

  // 如果选中了某个功能，显示详情页
  if (selectedFeature) {
    const feature = aiFeatures.find(f => f.id === selectedFeature);
    if (!feature) return null;

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white px-4 py-4 border-b sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowRight className="w-6 h-6 text-gray-700 rotate-180" />
            </button>
            <div className="flex items-center gap-2">
              <feature.icon className="w-6 h-6 text-red-500" />
              <h1 className="text-xl font-medium">{feature.title}</h1>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* Description */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4">
            <p className="text-gray-700">{feature.description}</p>
          </div>

          {/* Upload Section */}
          {(selectedFeature === 'photo-merge' || selectedFeature === 'scene-insert') && (
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Upload className="w-5 h-5 text-red-500" />
                上传你的照片
              </h3>
              {uploadedImage ? (
                <div className="relative">
                  <img src={uploadedImage} alt="Uploaded" className="w-full h-48 object-cover rounded-lg" />
                  <button
                    onClick={() => setUploadedImage(null)}
                    className="absolute top-2 right-2 bg-white/90 rounded-full p-2 text-gray-600 hover:bg-white"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <label className="block w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-red-500 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mb-2" />
                  <span className="text-gray-600 text-sm">点击上传照片</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          )}

          {/* Story Input Section */}
          {selectedFeature === 'story-writer' && (
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-500" />
                输入你的故事想法
              </h3>
              <textarea
                placeholder="例如：一个关于时空旅行的科幻故事，主角是一位年轻的物理学家..."
                className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs text-gray-500">快速选择类型：</span>
                {['科幻', '爱情', '悬疑', '动作', '喜剧', '恐怖'].map(genre => (
                  <button
                    key={genre}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-red-500 hover:text-white transition-colors"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Examples Section */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-medium mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-red-500" />
              热门案例
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {feature.examples.map((example, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                  onClick={() => {
                    if (!uploadedImage && selectedFeature !== 'story-writer') {
                      alert('请先上传照片');
                    }
                  }}
                >
                  <div className="relative rounded-lg overflow-hidden mb-2">
                    <ImageWithFallback
                      src={example.preview}
                      alt={example.title}
                      className="w-full h-20 object-cover group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center line-clamp-2">{example.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          {(uploadedImage || selectedFeature === 'story-writer') && !generatedContent && (
            <button
              onClick={handleGenerate}
              className="w-full py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              <Wand2 className="w-5 h-5" />
              AI 开始生成
            </button>
          )}

          {/* Generated Content */}
          {generatedContent && (
            <div className="bg-white rounded-xl p-4 animate-fadeIn">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <h3 className="font-medium">生成结果</h3>
              </div>
              
              {generatedContent.type === 'image' && (
                <div>
                  <ImageWithFallback
                    src={generatedContent.content.url}
                    alt={generatedContent.content.title}
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                      下载图片
                    </button>
                    <button className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      分享
                    </button>
                  </div>
                </div>
              )}
              
              {generatedContent.type === 'story' && (
                <div>
                  <h4 className="text-xl mb-2">{generatedContent.content.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{generatedContent.content.genre}</p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-3">
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {generatedContent.content.story}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {generatedContent.content.tags.map((tag: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-red-50 text-red-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                      继续创作
                    </button>
                    <button className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      分享故事
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // 主页面：显示所有AI功能
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 px-4 pt-6 pb-8">
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-medium text-white">AI 影视工坊</h1>
        </div>
        <p className="text-white/90 text-sm">
          利用AI技术，让你成为影视世界的主角
        </p>
      </div>

      {/* Feature Cards */}
      <div className="px-4 py-4 space-y-4 -mt-4">
        {aiFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              onClick={() => handleFeatureClick(feature.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className={`absolute top-3 right-3 w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {feature.examples.slice(0, 3).map((example, index) => (
                      <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                        <ImageWithFallback
                          src={example.preview}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center gap-1 text-red-500 text-sm font-medium">
                    立即体验
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Popular Creations */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-medium">热门创作</h2>
          <button className="text-sm text-gray-600 flex items-center gap-1">
            查看更多
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {[
            { id: '1', image: 'https://images.unsplash.com/photo-1651914702499-95ef87a739d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNvbGxhZ2V8ZW58MXx8fHwxNzcwMzU2MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080', likes: 1234, title: '我在漫威宇宙' },
            { id: '2', image: 'https://images.unsplash.com/photo-1766273686827-2d592ec2e566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2NlbmUlMjBjaW5lbWF8ZW58MXx8fHwxNzcwMzgxMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080', likes: 892, title: '穿越时空的冒险' },
            { id: '3', image: 'https://images.unsplash.com/photo-1768323102310-965beb4849ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAzMTY0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080', likes: 567, title: '未来世界主角' },
            { id: '4', image: 'https://images.unsplash.com/photo-1622722080708-7e42f38e6690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwc3RvcnklMjBib29rfGVufDF8fHx8MTc3MDM4MTI2NHww&ixlib=rb-4.1.0&q=80&w=1080', likes: 2341, title: '我的电影故事' }
          ].map(item => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-32">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-medium truncate">{item.title}</p>
                </div>
              </div>
              <div className="p-2 flex items-center justify-between">
                <div className="flex items-center gap-1 text-gray-600">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs">{item.likes}</span>
                </div>
                <button className="text-xs text-red-500">查看</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
