import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero/Hero";
import Newsletter from "./components/newsletter/Newsletter";
import PopularProperties from "./components/popularProperties/PopularProperties";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Properties from "./components/properties/Properties";
import PropertyDetail from "./components/propertyDetail/PropertyDetail";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <PopularProperties />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route
          path="/properties"
          element={
            <>
              <Navbar />
              <Properties />
              <Footer />
            </>
          }
        />
        <Route
          path="/propertyDetail:id"
          element={
            <>
              <Navbar />
              <PropertyDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <Navbar />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
