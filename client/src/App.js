import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/properties" element={<></>} />
        <Route path="/propertyDetail:id" element={<></>} />
        <Route path="/signup" element={<></>} />
        <Route path="/signin" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
