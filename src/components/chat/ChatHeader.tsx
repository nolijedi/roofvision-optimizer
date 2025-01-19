import { X, GripHorizontal } from "lucide-react";
import { motion } from "framer-motion";

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="chat-header bg-gradient-to-r from-roofing-orange/90 to-roofing-orange-dark/90 p-3 flex justify-between items-center cursor-move relative group">
      <div className="flex items-center space-x-2">
        <motion.img
          src="/lovable-uploads/cfe74ea0-b3ce-4017-a778-51f7dd28f478.png"
          alt="Chat Icon"
          className="w-5 h-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <span className="text-white text-sm font-medium">Chat with us</span>
        <GripHorizontal className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors duration-200" />
      </div>
      <motion.button
        onClick={onClose}
        className="text-white/90 hover:text-white p-1 rounded-full bg-roofing-orange-dark/50 hover:bg-roofing-orange-dark transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={16} />
      </motion.button>
    </div>
  );
};