import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '@/contexts/userContext';

const Links = () => {
  const { clearUser } = useContext(UserContext);

  const handleLogout = () => {
    clearUser();
    window.history.replaceState({}, document.title, '/'); // Redirige a la raíz de la página
    window.location.reload();
  };

  return (
    <div className="flex ">
      <div className="hidden sm:block">
        <a href="#" className="mt-1 hover:text-green-700 mr-4">
          link 1
        </a>
        <a href="#" className="mt-1  hover:text-green-700 mr-4">
          link 2
        </a>
        <a href="#" className="mt-1  hover:text-green-700 mr-4">
          link 3
        </a>
      </div>
      <Link className="mx-5 px-2" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};

export default Links;
