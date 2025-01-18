import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-roofing-charcoal">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-12">
        <div className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-roofing-cream mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] tracking-tight"
          >
            Your Trusted Roofing Experts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-roofing-beige mb-8 max-w-2xl mx-auto font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
          >
            Professional roofing services for residential and commercial properties.
            Quality workmanship guaranteed.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center gap-4 sm:gap-6 py-8 px-2"
          >
            {[
              { Icon: Facebook, href: "https://facebook.com/aroofabove", label: "Facebook", delay: 0 },
              { Icon: Instagram, href: "https://instagram.com/aroofabove", label: "Instagram", delay: 0.1 },
              { Icon: Twitter, href: "https://twitter.com/aroofabove", label: "Twitter", delay: 0.2 },
              { Icon: Linkedin, href: "https://linkedin.com/company/aroofabove", label: "LinkedIn", delay: 0.3 },
              { Icon: Youtube, href: "https://youtube.com/@aroofabove", label: "YouTube", delay: 0.4 }
            ].map(({ Icon, href, label, delay }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.5 + delay
                }}
                className="p-2 sm:p-3 bg-roofing-beige rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group active:bg-roofing-orange/20"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-roofing-charcoal group-hover:text-roofing-orange transition-colors" />
              </motion.a>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-roofing-beige font-medium"
          >
            <a 
              href="tel:509-400-5911" 
              className="flex items-center gap-2 hover:text-roofing-cream transition-colors hover:scale-105 transform transition-all duration-300 group"
            >
              <Phone className="h-5 w-5 group-hover:animate-bounce" />
              <span className="text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">509-400-5911</span>
            </a>
            <a 
              href="mailto:jc@aroofabove.com" 
              className="flex items-center gap-2 hover:text-roofing-cream transition-colors hover:scale-105 transform transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 group-hover:animate-pulse" />
              <span className="text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">jc@aroofabove.com</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-roofing-beige">
          <path 
            fill="currentColor" 
            fillOpacity="0.2" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;