import { X, Check } from 'lucide-react';
import { useState } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onPaymentSuccess: () => void;
}

export function PaymentModal({ isOpen, onClose, amount, onPaymentSuccess }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('alipay');

  if (!isOpen) return null;

  const paymentMethods = [
    { id: 'alipay', name: '支付宝支付', icon: '💳', color: 'text-blue-500' },
    { id: 'wechat', name: '微信支付', icon: '💬', color: 'text-green-500' },
    { id: 'yuanbao', name: '元宝支付', icon: '💎', color: 'text-yellow-500' },
  ];

  const handlePay = () => {
    // 点击支付后，关闭支付弹窗，触发支付成功流程
    onClose();
    onPaymentSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-t-3xl w-full max-w-md p-6 pb-8 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium">选择支付方式</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="mb-6">
          <div className="text-center py-4">
            <div className="text-3xl font-bold text-gray-900">¥{amount}</div>
            <div className="text-sm text-gray-500 mt-1">活动报名费</div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                selectedMethod === method.id
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{method.icon}</span>
                <span className={`font-medium ${method.color}`}>
                  {method.name}
                </span>
              </div>
              {selectedMethod === method.id && (
                <Check className="w-5 h-5 text-red-500" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={handlePay}
          className="w-full bg-red-500 text-white rounded-full py-4 font-medium hover:bg-red-600 transition-colors"
        >
          确认支付 ¥{amount}
        </button>
      </div>
    </div>
  );
}