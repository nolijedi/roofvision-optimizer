import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const StickyPhone = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:509-400-5911";
  };

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ 
        x: 0,
        y: [-5, 5, -5],
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="fixed bottom-4 left-4 z-50"
    >
      <motion.button
        initial={{ scale: 0.6 }}
        animate={{ scale: [0, 0.6, 1, 0.8, 1] }}
        whileHover={{ scale: 2 }}
        transition={{
          scale: {
            duration: 4,
            times: [0, 0.2, 0.4, 0.7, 1],
            ease: "easeInOut",
            repeat: Infinity,
          },
          whileHover: {
            duration: 0.15,
            ease: "easeOut"
          }
        }}
        onClick={handlePhoneClick}
        className="relative bg-roofing-orange/50 hover:bg-roofing-orange-dark text-white p-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Call us"
      >
        <Phone className="w-8 h-8 group-hover:scale-110 transition-transform text-white relative z-10" />
        <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <defs>
            <path
              id="circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-xs fill-white">
            <textPath href="#circle" startOffset="0%">
              CLICK HERE • CALL US NOW • CLICK HERE • CALL US NOW •
            </textPath>
          </text>
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default StickyPhone;