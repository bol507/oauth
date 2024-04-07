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
    bg-slate-200
  `;
  console.info('isLogged', isLogged);
  return (
    <nav className={navClass}>
      {isLogged ? (
        <Links />
      ) : (
        <Link className="mx-5 px-2" to="logout">
          logout
        </Link>
      )}
    </nav>
  ); //return
}; //Navbar

export default Navbar;
