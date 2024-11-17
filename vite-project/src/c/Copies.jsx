import React, { useState, useEffect } from 'react';
function Copies() {
  const [darkMode, setDarkMode] = useState(() => 
  localStorage.getItem('dark-mode') === 'true'
);

useEffect(() => {
  document.documentElement.classList.toggle('dark', darkMode);
  localStorage.setItem('dark-mode', darkMode);
}, [darkMode]);

const toggleDarkMode = () => {
  setDarkMode(prevMode => !prevMode);
};

  
  return (
    <>
  <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-white">Hello, Tailwind CSS!</h1>
      <button 
        onClick={toggleDarkMode} 
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
        Toggle Dark Mode
      </button>
    </div>
     
    </>
  );
}

export default Copies;
