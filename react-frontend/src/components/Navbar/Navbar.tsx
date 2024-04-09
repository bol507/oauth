import React from 'react';
import Links from './Links';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLogged = true;
  const navClass = `
    flex
    justify-end
    flex-no-wrap 
    relative
    w-full
    items-center 
    py-2
    bg-blue-200
    h-full
  `;

  return (
    <nav className={navClass}>
      {isLogged ? (
        <Links />
      ) : (
        <Link className="mx-5 px-2" to="login">
          login
        </Link>
      )}
    </nav>
  ); //return
}; //Navbar

export default Navbar;
