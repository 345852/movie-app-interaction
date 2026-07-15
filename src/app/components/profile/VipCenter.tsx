import { ArrowLeft, Crown, Check, Star, Zap, Film, TrendingUp, Shield, Gift, Clock, BarChart3, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface VipCenterProps {
  onBack: () => void;
}

export function VipCenter({ onBack }: VipCenterProps) {
  const [selectedPlan, setSelectedPlan] = useState(1); // 默认选中季度会员

  const benefits = [
    { icon: Film, label: '无广告观影', desc: '跳过片头广告' },
    { icon: Star, label: '1080P高清', desc: '超清画质体验' },
    { icon: Zap, label: '抢先看新片', desc: '提前7天观看' },
    { icon: Crown, label: '专属标识', desc: '尊贵会员身份' },
    { icon: Shield, label: '专属客服', desc: '7x24小时服务' },
    { icon: Gift, label: '会员活动', desc: '专享福利活动' },
  ];

  const plans = [
    {
      duration: '月度会员',
      months: 1,
      price: '15',
      originalPrice: '30',
      popular: false,
      discount: '5折'
    },
    {
      duration: '季度会员',
      months: 3,
      price: '38',
      originalPrice: '90',
      popular: true,
      discount: '4.2折'
    },
    {
      duration: '年度会员',
      months: 12,
      price: '128',
      originalPrice: '360',
      popular: false,
      discount: '3.6折'
    }
  ];

  const stats = [
    { label: '已观看', value: '128', unit: '小时' },
    { label: '已节省广告', value: '45', unit: '分钟' },
    { label: '已观看影片', value: '86', unit: '部' },
  ];

  const privileges = [
    '独家VIP片库，海量大片任意看',
    '杜比音效，影院级视听享受',
    '多设备同时观看，全家共享',
    '离线下载，随时随地畅享',
    '会员专属弹幕特效',
    '优先体验新功能'
  ];

  const faqs = [
    { q: '会员可以在哪些设备使用？', a: '支持手机、平板、电脑、电视等全平台设备' },
    { q: '会员到期后会自动续费吗？', a: '不会自动续费，需要手动购买续费' },
    { q: '可以中途取消会员吗？', a: '会员期内随时可以取消，剩余时间继续有效' }
  ];

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 px-4 pt-4 pb-3 flex items-center gap-4 bg-gradient-to-b from-red-500 to-red-400 text-white">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-white/20 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-medium">VIP会员中心</h1>
      </div>

      {/* VIP Status Card */}
      <div className="px-4 pt-4 pb-6 bg-gradient-to-b from-red-400 to-transparent">
        <div className="relative overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-400/20 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-yellow-400/20 rounded-full backdrop-blur-sm">
                <Crown className="w-8 h-8 text-yellow-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">VIP会员</h2>
                <p className="text-white/90 text-sm">尊享影视特权</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-xs text-white/80 mt-1">{stat.label}{stat.unit}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/80 mb-1">会员有效期至</p>
                <p className="font-medium">2025-12-31</p>
              </div>
              <div className="px-4 py-2 bg-yellow-400 text-red-900 rounded-full text-sm font-medium">
                续费优惠
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="px-4 py-6">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-red-500" />
          会员特权
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all"
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-red-50 to-pink-50">
                <benefit.icon className="w-6 h-6 text-red-500" />
              </div>
              <span className="text-sm font-medium text-center">{benefit.label}</span>
              <span className="text-xs text-gray-500 text-center">{benefit.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="px-4 py-6 bg-white">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-red-500" />
          选择套餐
        </h3>
        <div className="space-y-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedPlan === index
                  ? 'border-red-500 bg-red-50 shadow-lg scale-[1.02]'
                  : plan.popular
                  ? 'border-pink-300 bg-pink-50'
                  : 'border-gray-200 bg-white hover:border-red-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                  最划算
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-medium">{plan.duration}</h4>
                    <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                      {plan.discount}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    原价 <span className="line-through">¥{plan.originalPrice}</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    ≈ ¥{(parseFloat(plan.price) / plan.months).toFixed(2)}/月
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-red-500">¥</span>
                    <span className="text-3xl font-bold text-red-500">{plan.price}</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 mt-2 ml-auto flex items-center justify-center ${
                    selectedPlan === index
                      ? 'border-red-500 bg-red-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedPlan === index && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Privileges */}
      <div className="px-4 py-6">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5 text-red-500" />
          更多专属特权
        </h3>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          {privileges.map((privilege, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">{privilege}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Dashboard */}
      <div className="px-4 py-6 bg-white">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-red-500" />
          我的数据
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span className="text-xs text-gray-600">本月观影</span>
            </div>
            <div className="text-2xl font-bold text-red-600">32.5 <span className="text-sm font-normal">小时</span></div>
            <div className="text-xs text-gray-500 mt-1">比上月增加 12%</div>
          </div>
          <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-600" />
              <span className="text-xs text-gray-600">积累积分</span>
            </div>
            <div className="text-2xl font-bold text-yellow-600">1,280 <span className="text-sm font-normal">分</span></div>
            <div className="text-xs text-gray-500 mt-1">可兑换会员权益</div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="px-4 py-6">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-red-500" />
          常见问题
        </h3>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-red-500 font-bold text-sm">Q:</span>
                <p className="text-sm font-medium flex-1">{faq.q}</p>
              </div>
              <div className="flex items-start gap-2 pl-5">
                <span className="text-gray-400 font-bold text-sm">A:</span>
                <p className="text-sm text-gray-600 flex-1">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Purchase Button - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="text-xs text-gray-500 mb-1">已选择：{plans[selectedPlan].duration}</div>
            <div className="flex items-baseline gap-1">
              <span className="text-xs text-gray-600">¥</span>
              <span className="text-2xl font-bold text-red-500">{plans[selectedPlan].price}</span>
            </div>
          </div>
          <button className="flex-1 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-lg font-medium hover:from-red-600 hover:to-pink-600 active:scale-95 transition-all shadow-lg">
            立即开通
          </button>
        </div>
      </div>
    </div>
  );
}