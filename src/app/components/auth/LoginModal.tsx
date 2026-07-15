import { X } from 'lucide-react';
import { useState } from 'react';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (phone: string, password: string) => void;
  onForgotPassword: () => void;
  onRegister: () => void;
  onThirdPartyLogin: (type: 'wechat' | 'qq' | 'apple') => void;
}

export function LoginModal({ onClose, onLogin, onForgotPassword, onRegister, onThirdPartyLogin }: LoginModalProps) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !password) {
      alert('请输入手机号和密码');
      return;
    }
    
    // 验证登录
    if (phone === '18694076322' && password === '12345') {
      onLogin(phone, password);
    } else {
      alert('手机号或密码错误');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md relative animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4">
          <h2 className="text-2xl font-medium mb-2">登录</h2>
          <p className="text-sm text-gray-500">登录后享受更多精彩内容</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">手机号</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="请输入手机号"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">密码</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={onRegister}
              className="text-sm text-gray-600 hover:text-red-500 transition-colors"
            >
              注册账号
            </button>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-red-500 hover:text-red-600 transition-colors"
            >
              忘记密码?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all"
          >
            登录
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">或使用第三方登录</span>
            </div>
          </div>

          {/* Third Party Login */}
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => onThirdPartyLogin('wechat')}
              className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.5 12c.83 0 1.5-.67 1.5-1.5S9.33 9 8.5 9 7 9.67 7 10.5 7.67 12 8.5 12zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 9 15.5 9 14 9.67 14 10.5s.67 1.5 1.5 1.5zm3.5 3c-1.33 0-2.42.83-2.83 2-.6-.5-1.33-.83-2.17-.83-1.67 0-3 1.33-3 3 0 1.67 1.33 3 3 3s3-1.33 3-3c0-.5-.17-.92-.42-1.33.58-.42.92-1.08.92-1.83 0-.33-.08-.67-.17-.92.67-.33 1.5-.08 2-.08 1.67 0 3-1.33 3-3s-1.33-3-3-3z"/>
                </svg>
              </div>
              <span className="text-xs text-gray-600">微信</span>
            </button>
            <button
              type="button"
              onClick={() => onThirdPartyLogin('qq')}
              className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
                </svg>
              </div>
              <span className="text-xs text-gray-600">QQ</span>
            </button>
            <button
              type="button"
              onClick={() => onThirdPartyLogin('apple')}
              className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
              <span className="text-xs text-gray-600">Apple</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
