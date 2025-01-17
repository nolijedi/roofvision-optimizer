import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { EstimateForm } from "@/components/estimate/EstimateForm";
import { EstimateSidebar } from "@/components/estimate/EstimateSidebar";

const Estimate = () => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        for (const entry of entries) {
          // Handle resize if needed
        }
      });
    });

    const animatedElements = document.querySelectorAll('.animate-resize');
    animatedElements.forEach(element => resizeObserver.observe(element));

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="section-gradient-separator">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-roofing-charcoal mb-2 relative">
              <span className="relative inline-block pb-2">
                Get Your Free Estimate
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-roofing-orange"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Fill out the form below and we'll provide you with a detailed estimate for your roofing project.
            </p>
          </div>
        </div>

        <div className="section-gradient-separator">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <EstimateForm />
              <EstimateSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Estimate;