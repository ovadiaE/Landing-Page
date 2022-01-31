import React from "react"
import About from "./components/About";
import Projects from './components/Projects'
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font"> 
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;
