
import React, { useState } from 'react';
function Headar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };
  return (
    <nav className={`py-3 px-4  ${darkMode ? 'bg-gray-900' : 'bg-gray-50 '}`}>
      <div className=" mx-auto flex justify-between items-center">
        
        <div className="flex">
        {darkMode ?  <a href="#"><img className=""  src="../logo-w.svg" alt="" /></a>: <a href="#"><img src="../logo.svg" alt="" /></a> }
        <div className="hidden md:flex space-x-4 ">
        <a href="#" className={`text-lg font-semibold no-underline ps-20 pe-3 pt-[10px] ${darkMode?'text-gray-200':'text-gray-800 hover:text-blue-600'}`}>Home</a>
        <a href="#" className={`text-lg font-semibold no-underline px-3 pt-[10px] ${darkMode?'text-gray-200':'text-gray-800 hover:text-blue-600'}`}>Payment</a>
        <a href="#" className={`text-lg font-semibold no-underline px-3 pt-[10px] ${darkMode?'text-gray-200':'text-gray-800 hover:text-blue-600'}`}>Features</a>
         
        </div>
        </div>
        
        
        <div className="flex">
        <button onClick={toggleDarkMode} className="ml-4 pe-3">
        {darkMode ?  <img  src="../brightness.png" alt="" />: <img src="../moon1.png" alt="" /> } 
        </button>
        <button onClick={toggleMenu} className="md:hidden text-2xl text-Black focus:outline-none">
          {isOpen ? <h4 className="pt-2">X</h4> : ' ☰'}
        </button>
        <div className="hidden md:flex space-x-4 py-1">
        <a href="#" className={`text-lg font-semibold no-underline px-[28px] py-[10px] ${darkMode ?'text-gray-100 ':'text-gray-800 hover:text-blue-600'}`}>Sign in</a>
          <a href="#" className="text-lg font-semibold no-underline text-white bg-blue-600 hover:bg-blue-700 px-[28px] py-[10px] rounded">Sign up</a>
          
        </div>
        </div>
      </div>
      <div className={`py-4 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
       
        <a href="#" className={`text-lg font-semibold no-underline block px-4 py-2  ${darkMode?'text-gray-200':'text-gray-800 hover:text-blue-600'}`}>Home</a>
        <a href="#" className={`text-lg font-semibold no-underline block px-4 py-2  ${darkMode?'text-gray-200':'text-gray-800 hover:text-blue-600'}`}>Payment</a>
        <a href="#" className={`text-lg font-semibold no-underline block px-4 py-2  ${darkMode?'text-gray-200':'text-gray-800 hover:text-blue-600'}`}>Features</a>
        
      </div>
    </nav>
  );
}

export default Headar;