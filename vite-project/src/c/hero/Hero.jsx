import React, { useState } from 'react';

function Hero() {
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
<>
 <div className="dark:bg-gray-900  py-28 relative min-[960px]:pt-36 ">
          <div className=" w-full m-auto min-[400px]:max-w-[25.00rem]  min-[540px]:max-w-[33.75rem] min-[720px]:max-w-[45.00rem] min-[960px]:max-w-[60.00rem] min-[1140px]:max-w-[71.25rem] min-[1320px]:max-w-[82.50rem]">
            <div className="flex-wrap flex">
              <div className="w-full ps-2 min-[960px]:w-[41.6667%]">
                <div >
                  <h1 className="dark:text-white ps-4 text-gray-900 text-[2.24em] leading-tight font-bold mb-3">
                    Startup Site Template Built-with TailGrids Components
                  </h1>

                  <p className="dark:text-white ps-4 text-gray-500 max-w-[30.00rem] mb-12">
                    With TailGrids, business and students thrive together.
                    Business can perfectly match their staffing to changing
                    demand throughout the dayed.
                  </p>

                  <ul className=" items-center flex-wrap flex list-none font-medium">
                    <li className="list-item">
                      <a
                        className=" no-underline text-white bg-blue-600 hover:bg-blue-800 items-center justify-center py-3 px-6 text-center inline-flex rounded-md min-[960px]:pl-7  min-[960px]:pr-7"
                        href="#"
                      >
                        Get Started
                      </a>
                    </li>

                    <li className="list-item text-zinc-700">
                      <a
                        className="dark:text-white no-underline items-center justify-center py-3 px-4 text-center inline-flex text-gray-600 hover:text-blue-600"
                        href="#"
                      >
                        <img className="pe-2" src="downlowd.svg" alt="" />
                        Download App
                      </a>
                    </li>
                  </ul>

                  <div className="ps-4 pt-16">
                    <h6 className="dark:text-white text-gray-500 items-center text-xs flex mb-2">
                      Used by Thriving Brands
                      <pre className="px-2 pt-3 text-3xl">-</pre>
                    </h6>

                    <div className="items-center flex max-w-[34.38rem]">
                      <div className="py-3 w-full mr-4">
                        <img
                          className="w-40 h-auto max-w-full"
                          src="../ayroui.svg"
                        />
                      </div>

                      <div className="py-3 w-full mr-4">
                        <img
                          className="w-40 h-auto max-w-full"
                          src="../graygrids.svg"
                        />
                      </div>

                      <div className="py-3 w-full mr-4">
                        <img
                          className="w-40 h-auto max-w-full"
                          src="../uideck.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:ml-24 px-4 w-full min-[960px]:w-2/4">
                <div className=" text-right min-[960px]:ml-auto">
                  <div className="overflow-hidden rounded-s-3xl pt-11 relative inline-block min-[960px]:pt-0">
                    <img
                      className=" w-[30.69rem] h-auto max-w-full min-[960px]:ml-auto"
                      src="../hero-image-01.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

</>
  )
}

export default Hero