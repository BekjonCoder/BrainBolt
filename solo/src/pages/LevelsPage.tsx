import { useParams, useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { motion } from "framer-motion";

const { Title } = Typography;

const levels = ["Beginner", "Intermediate", "Advanced"];

const LevelsPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const handleLevelSelect = (level: string) => {
    navigate(`/quiz/${category}/${level}`);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#f9fafb] px-4">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-6 left-6"
      >
        <Button type="default" onClick={handleBackToHome}>
          ← Back to Home
        </Button>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={2} className="text-center">
          Choose Difficulty Level for {category}
        </Title>
      </motion.div>

      {/* Level buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl"
      >
        {levels.map((level) => (
          <motion.div
            key={level}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex justify-center"
          >
            <Button
              type="primary"
              size="large"
              className="w-48 h-20 text-lg rounded-xl shadow-md"
              onClick={() => handleLevelSelect(level)}
            >
              {level}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LevelsPage;
