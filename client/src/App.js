import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero/Hero";
import Newsletter from "./components/newsletter/Newsletter";
import PopularProperties from "./components/popularProperties/PopularProperties";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PopularProperties />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/properties" element={<></>} />
        <Route path="/propertyDetail:id" element={<></>} />
        <Route path="/signup" element={<></>} />
        <Route path="/signin" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
