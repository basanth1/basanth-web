import './App.css';
import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
function App() {
  
const [isLoaded,setisLoaded] = useState(false);
const [menuOpen,setMenuOpen] = useState(false);
   return (
    <>
    {!isLoaded && <LoadingScreen onComplete={()=>setisLoaded(true)}/>}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></MobileMenu>
          <Home></Home>
          <About></About>
          <Projects></Projects>
          <Contact></Contact>
      </div>
    </>
  );
}

export default App;
