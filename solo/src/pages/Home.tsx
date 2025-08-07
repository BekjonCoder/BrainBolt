import { Button } from "antd";
import { data } from "../data/questions";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUserGraduate, FaStar, FaMedal, FaRocket, FaCrown } from "react-icons/fa";

const getLevelInfo = (xp: number) => {
  if (xp < 100) {
    return { level: "Newbie", icon: <FaUserGraduate />, color: "text-gray-500" };
  } else if (xp < 300) {
    return { level: "Beginner", icon: <FaStar />, color: "text-green-500" };
  } else if (xp < 600) {
    return { level: "Intermediate", icon: <FaMedal />, color: "text-yellow-500" };
  } else if (xp < 1000) {
    return { level: "Advanced", icon: <FaRocket />, color: "text-blue-500" };
  } else {
    return { level: "Expert", icon: <FaCrown />, color: "text-purple-600" };
  }
};

const Home = () => {
  const navigate = useNavigate();
  const [totalXP, setTotalXP] = useState(0);

  const updateXP = () => {
    let sum = 0;
    data.forEach((item) => {
      const xp = Number(localStorage.getItem(`${item.category}-xp`) || 0);
      sum += xp;
    });
    setTotalXP(sum);
  };

  useEffect(() => {
    updateXP();
    const handleStorageChange = () => updateXP();
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleClick = (category: string) => {
    localStorage.setItem("selectedCategory", category);
    navigate(`/levels/${category}`); // Adjusted to new route structure for levels
  };

  const { level, icon, color } = getLevelInfo(totalXP);

  return (
    <section className="min-h-screen flex flex-col items-center justify-start gap-10 bg-gradient-to-br from-indigo-100 to-blue-200 px-4 py-10">
      {/* Top Info: XP & Level */}
      <motion.div
        className="w-full flex justify-between items-center px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white shadow-md rounded-full px-6 py-2 text-indigo-600 font-semibold text-lg">
          Total XP: {totalXP}
        </div>
        <div className="flex items-center gap-3 bg-white shadow-md rounded-full px-5 py-2">
          <span className={`text-xl ${color}`}>{icon}</span>
          <span className={`text-lg font-semibold ${color}`}>{level}</span>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-5xl font-bold text-indigo-700 text-center drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to <span className="text-blue-600">Brain<span className="text-white">Bolt</span></span>
      </motion.h1>

      {/* Categories */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <Button
              type="primary"
              size="large"
              onClick={() => handleClick(item.category)}
              className="w-full rounded-xl shadow-md py-3 text-lg bg-indigo-500 hover:bg-indigo-600 transition-all duration-300"
            >
              {item.category}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Home;
