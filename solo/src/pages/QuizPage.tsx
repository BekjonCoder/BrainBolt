import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../data/questions";
import { motion } from "framer-motion";

const QuizPage = () => {
  const { category, level } = useParams<{ category: string; level: string }>();
  const navigate = useNavigate();

  const questions =
    data
      .find((item) => item.category === category)
      ?.levels.find((lvl) => lvl.level === level)?.questions || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [xp, setXP] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    updateTotalXP();
  }, []);

  const updateTotalXP = () => {
    let sum = 0;
    data.forEach((item) => {
      const storedXP = Number(localStorage.getItem(`${item.category}-xp`) || 0);
      sum += storedXP;
    });
    setXP(sum);
  };

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);

    const correctAnswer = questions[currentQuestion].answer;
    if (answer === correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);

      const key = `${category}-xp`;
      const prevXP = Number(localStorage.getItem(key)) || 0;
      localStorage.setItem(key, String(prevXP + 5));
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setHintUsed(false);
        setShowHint(false);
        updateTotalXP();
      } else {
        updateTotalXP();
        navigate(`/result`, {
          state: { correctAnswers, totalQuestions: questions.length },
        });
      }
    }, 1000);
  };

  const handleHint = () => {
    if (hintUsed) return;

    const key = `${category}-xp`;
    const storedXP = Number(localStorage.getItem(key) || 0);

    if (storedXP < 10) {
      alert("Hint olish uchun kamida 10 XP kerak!");
      return;
    }

    localStorage.setItem(key, String(storedXP - 10));
    setHintUsed(true);
    setShowHint(true);
    updateTotalXP();
  };

  const getButtonClass = (variant: string) => {
    const correct = questions[currentQuestion].answer;

    if (selectedAnswer) {
      if (variant === correct) return "border-green-500 bg-green-100";
      if (variant === selectedAnswer) return "border-red-500 bg-red-100";
    }

    if (showHint && variant === correct) return "border-green-500";

    return "border-gray-300";
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-indigo-600 capitalize">
          {category} ({level}) Quiz
        </h1>
        <div className="text-xl font-semibold text-indigo-700">XP: {xp}</div>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h2 className="text-lg font-medium mb-4">
          {currentQuestion + 1}. {questions[currentQuestion].quiz}
        </h2>

        <div className="flex flex-col leading-8 gap-[1rem]">
          {questions[currentQuestion].variant.map((variant, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(variant)}
              className={`block w-full text-left px-4 py-2 border rounded cursor-pointer hover:border-blue-500 transition-all duration-300 ${getButtonClass(
                variant
              )}`}
            >
              {variant}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-between items-center mt-6">
        <div
          onClick={handleHint}
          className={`cursor-pointer select-none text-yellow-500 text-2xl transition duration-200 ${
            hintUsed ? "opacity-50 pointer-events-none" : "hover:scale-110"
          }`}
        >
          💡
        </div>
        <div className="text-sm text-gray-500">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 cursor-pointer rounded hover:bg-blue-500 transition"
        >
          <span className="text-white">Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
