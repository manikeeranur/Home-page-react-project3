import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Ourcategories from "./components/Ourcategories";
import Searchtoplocation from "./components/Searchtoplocation";
import Whyus from "./components/Whyus";
import Topdealsforyou from "./components/Topdealsforyou";
import Chatbox from "./components/Chatbox";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
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
