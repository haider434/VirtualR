import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
const App = () => {
  return (
    <section>
      <Navbar />
      <div className="max-w-[80%] mx-auto px-4 sm:px-6">
        <Hero />
      </div>
      <FeatureSection />
      <WorkFlow />
      <Price />
      <Testimonials />
      <Footer />
    </section>
  );
};

export default App;
