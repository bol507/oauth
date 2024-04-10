const Hamburger = ({ showIt }) => {
  const handleClick = () => {
    showIt();
  };

  const btnClass = `
          sm:hidden
          block   
          border-0 
          bg-transparent 
          px-2 
          text-black/50 
          hover:no-underline 
          hover:shadow-none 
          focus:no-underline 
          focus:shadow-none 
          focus:outline-none 
          focus:ring-0 
          dark:text-neutral-200
      `;
  return (
    <button
      className={btnClass}
      type="button"
      aria-controls="navbarSupportedContent1"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={handleClick}
    >
      {/* Hamburger icon --> */}

      <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>
  );
};

export default Hamburger;
