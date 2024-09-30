import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingModalProps {
  isOpen: boolean;
  message?: string;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isOpen, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center bg-n-8 rounded-lg shadow-lg p-16 text-white">
        <Loader2 className="animate-spin" size={50} />
        <p className="mt-4 text-lg font-semibold">{message || "Loading..."}</p>
      </div>
    </div>
  );
};

export default LoadingModal;
