import { useState } from 'react';

import Links from './Links';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';
import { useUser } from '@/contexts/userContext';

const Navbar = () => {
  const { isLogged } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const navClass = `
    flex
    md:justify-end
    sm:justify-start
    md:flex-row
    sm:flex-col
    justify-between
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
      <Hamburger showIt={handleToggle} />
      {isLogged ? (
        <Links />
      ) : (
        <Link className="mx-5 px-2" to="/">
          login
        </Link>
      )}
    </nav>
  ); //return
}; //Navbar

export default Navbar;
