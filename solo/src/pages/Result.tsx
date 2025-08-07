import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

const ResultPage = () => {
  const navigate = useNavigate();
  const [xp, setXp] = useState(0);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const selected = localStorage.getItem("selectedCategory") || "";
    const storedXP = localStorage.getItem(`${selected}-xp`) || "0";
    setCategory(selected);
    setXp(parseInt(storedXP));
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-10 bg-gradient-to-tr from-indigo-100 to-blue-200 px-4 py-10">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-indigo-700 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎉 Quiz Completed!
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-gray-700 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        You earned <span className="font-bold text-indigo-600">{xp} XP</span> in{" "}
        <span className="text-blue-600 font-semibold">{category}</span> category.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          type="primary"
          size="large"
          className="rounded-xl px-6 py-2 text-lg"
          onClick={handleBack}
        >
          Back to Home
        </Button>
      </motion.div>
    </section>
  );
};

export default ResultPage;
