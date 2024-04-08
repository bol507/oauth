import React from 'react';
import Links from './Links';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isLogged: boolean;
}

const Navbar = ({ isLogged }: NavbarProps) => {
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
  console.info('isLogged', isLogged);
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
