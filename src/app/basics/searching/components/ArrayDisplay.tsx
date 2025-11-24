import React from "react";
import { motion } from "framer-motion";
import { useSearchVisualizer } from "../context/SearchContext";

const SearchArrayDisplay: React.FC = () => {
  const { array, currentIndex, foundIndex } = useSearchVisualizer();

  const getBarColor = (index: number) => {
    if (index === foundIndex) return "bg-green-500";        // target found
    if (index === currentIndex) return "bg-yellow-500";     // current checking
    return "bg-blue-500";                                   // normal
  };

  return (
    <div className="h-64 sm:h-80 md:h-96 flex items-end justify-center gap-px">
      {array.map((value, index) => (
        <motion.div
          key={index}
          className={`${getBarColor(index)} w-full`}
          style={{
            height: `${(value / Math.max(...array)) * 100}%`,
            maxWidth: `${Math.max(2, 1000 / array.length)}px`,
          }}
          layout
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: `${(value / Math.max(...array)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};

export default SearchArrayDisplay;
