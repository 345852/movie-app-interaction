import { useState } from 'react';
import { Film, ArrowLeft, Eye, EyeOff, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface LoginProps {
  onLoginSuccess: () => void;
  onForgotPassword: () => void;
  onRegister: () => void;
  onThirdPartyLogin: (type: 'wechat' | 'qq' | 'apple') => void;
  onBack?: () => void;
}

export function Login({ onLoginSuccess, onForgotPassword, onRegister, onThirdPartyLogin, onBack }: LoginProps) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 20) {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    if (!phone || !password) {
      alert('请输入手机号和密码');
      return;
    }

    if (phone.length !== 11) {
      alert('请输入正确的11位手机号');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      
      if (phone === '18694076322' && password === '12345') {
        onLoginSuccess();
      } else {
        if (phone !== '18694076322') {
          alert('该手机号未注册，请先注册账号');
        } else if (password !== '12345') {
          alert('密码错误，请重新输入');
        }
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-6 left-4 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all z-50"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="relative inline-block mb-6">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-30 scale-110" />
            
            {/* Logo */}
            <div className="relative w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
              <Film className="w-14 h-14 text-red-500" strokeWidth={2.5} />
              
              {/* Sparkles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              </motion.div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">
            欢迎回来
          </h1>
          <p className="text-white/80 text-sm">
            登录影视社区，开启观影之旅
          </p>
        </motion.div>

        {/* Login Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-sm"
        >
          {/* Form Container */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-6">
            {/* Phone Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                手机号
              </label>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="请输入11位手机号"
                maxLength={11}
                className="w-full px-4 py-3.5 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                密码
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="请输入密码"
                  maxLength={20}
                  className="w-full px-4 py-3.5 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-gray-900 placeholder:text-gray-400 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-medium hover:from-red-600 hover:to-pink-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? '登录中...' : '登录'}
            </button>

            {/* Links */}
            <div className="flex justify-between items-center mt-4 text-sm">
              <button 
                onClick={onRegister} 
                className="text-red-500 hover:text-red-600 font-medium"
              >
                注册账号
              </button>
              <button 
                onClick={onForgotPassword} 
                className="text-gray-600 hover:text-gray-700"
              >
                忘记密码？
              </button>
            </div>
          </div>

          {/* Third Party Login */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-6">
            <p className="text-center text-sm text-gray-600 mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-gray-300"></span>
              快捷登录
              <span className="w-8 h-px bg-gray-300"></span>
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => onThirdPartyLogin('wechat')}
                className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all"
              >
                <span className="text-xl font-bold">微</span>
              </button>
              <button 
                onClick={() => onThirdPartyLogin('qq')}
                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all"
              >
                <span className="text-xl font-bold">Q</span>
              </button>
              <button 
                onClick={() => onThirdPartyLogin('apple')}
                className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all"
              >
                <span className="text-xl font-bold"></span>
              </button>
            </div>
          </div>

          {/* Demo Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 p-4 bg-yellow-400/20 backdrop-blur-sm border-2 border-yellow-400/50 rounded-2xl"
          >
            <p className="text-xs text-white text-center font-medium mb-2">
              💡 演示账号
            </p>
            <p className="text-xs text-white/90 text-center leading-relaxed">
              手机号：18694076322<br />
              密码：12345
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}