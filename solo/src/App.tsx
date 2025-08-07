import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import QuizPage from "./pages/QuizPage";
import LevelsPage from "./pages/LevelsPage"; // yangi sahifa

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levels/:category" element={<LevelsPage />} /> {/* fan tanlansa darajalar sahifasi ochiladi */}
        <Route path="/quiz/:category/:level" element={<QuizPage />} /> {/* daraja tanlansa quiz sahifasi ochiladi */}
        <Route path="/result" element={<Result />} />
        {/* <Route path="*" element={<NotFound />} /> // optional */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
