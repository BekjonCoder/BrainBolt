import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import QuizPage from "./pages/QuizPage";
import LevelsPage from "./pages/LevelsPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levels/:category" element={<LevelsPage />} />
        <Route path="/quiz/:category/:level" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
