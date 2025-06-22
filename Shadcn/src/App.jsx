import React from "react";
import "./App.css";
import Button from "./mycompo/Button";
import Nav from "./mycompo/Nav";
import Hero from "./mycompo/Hero";
import Footer from "./mycompo/Footer";


const App = () => {
  return (
    <section className="w-full h-fit flex flex-col items-center justify-center ">
      <Nav />
      <Hero />
      <Footer />
    </section>
  );
};

export default App;
