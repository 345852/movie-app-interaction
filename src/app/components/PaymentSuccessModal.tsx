import { Check } from 'lucide-react';

interface PaymentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onConfirm?: () => void;
}

export function PaymentSuccessModal({ isOpen, onClose, amount, onConfirm }: PaymentSuccessModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl w-full max-w-sm p-8 animate-scale-in">
        <div className="flex flex-col items-center text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="w-10 h-10 text-green-500 stroke-[3]" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            支付成功
          </h3>

          {/* Amount */}
          <div className="text-3xl font-bold text-gray-900 mb-2">
            ¥{amount}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 mb-8">
            您已成功报名本次活动
          </p>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full bg-red-500 text-white rounded-full py-3.5 font-medium hover:bg-red-600 transition-colors"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  );
}