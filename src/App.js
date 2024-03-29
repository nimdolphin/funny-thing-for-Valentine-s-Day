import { Routes, Route } from "react-router-dom";
import LovePage from "./components/LovePage";
import MainPage from "./components/MainPage";
import Perduc from "./components/Perduc";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/love-page" element={<LovePage />} />
        <Route path="/and-you" element={<Perduc />} />
      </Routes>
    </>
  );
}

export default App;
