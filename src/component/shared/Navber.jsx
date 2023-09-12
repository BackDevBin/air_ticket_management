import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";

const Navber = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className='md:flex justify-between items-center px-10 py-4 bg-slate-900 text-slate-200'>

      <div className='flex justify-between items-center'>
        <div>
          <Link><h3 className='text-4xl semi-bold font-bold'>Fly<span className='text-orange-500'>High</span></h3>
    </Link>    </div>

        <div className="block md:hidden">
          <button
            onClick={toggleNavbar}
            className="flex items-center px-2 py-1 rounded text-white"
          >
           { isOpen ? <HiX size={30} /> : <HiMenu size={30}  /> }

          </button>
        </div>
      </div>

      <div>
        <ul className={`md:flex ${isOpen ? 'flex flex-col h-screen w-full text-center justify-center align-center' : 'hidden'}`}>
          <Link to="/"><li className='text-base ms-4 uppercase'>Home</li></Link>
          <Link to="/"><li className='text-base ms-4 uppercase'>Works</li></Link>
          <Link to="/"><li className='text-base ms-4 uppercase'>Home</li></Link>
          <Link to="/"><li className='text-base ms-4 uppercase'>Home</li></Link>
          <li><button></button></li>
        </ul>
      </div>


    </div>

  );
};

export default Navber;