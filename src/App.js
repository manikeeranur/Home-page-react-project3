import React from "react";
import "./App.css";

import Ourcategories from "./components/Ourcategories";
import Searchtoplocation from "./components/Searchtoplocation";
import Whyus from "./components/Whyus";
import Topdealsforyou from "./components/Topdealsforyou";
import Chatbox from "./components/Chatbox";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
    

      <Hero />
      <Ourcategories />
      <Whyus />
      <Searchtoplocation />
      <Topdealsforyou />
      <Chatbox />
      <Footer />
    </>
  );
}

export default App;
