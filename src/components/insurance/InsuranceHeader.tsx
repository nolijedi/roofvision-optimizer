import { motion } from "framer-motion";

const InsuranceHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12 mt-[-2rem]" // Added negative margin-top and reduced margin-bottom
    >
      <h1 className="text-3xl md:text-4xl font-bold text-roofing-charcoal mb-2 relative"> {/* Reduced from text-4xl/5xl to text-3xl/4xl */}
        <span className="relative inline-block pb-2">
          Insurance Claims Made Easy
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-l from-roofing-orange via-roofing-orange-dark to-roofing-cream"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </span>
      </h1>
      <p className="text-sm text-roofing-charcoal/80 max-w-xl mx-auto font-medium"> {/* Reduced max-width from 2xl to xl */}
        Let us guide you through the insurance claims process with ease and expertise.
      </p>
    </motion.div>
  );
};

export default InsuranceHeader;