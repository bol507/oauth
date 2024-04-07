import React from 'react';

interface RedirectProps {
  user: any;
  loggedIn: boolean;
}

const Avatar: React.FC<RedirectProps> = ({ urlAvatar }) => {
  return (
    <div className="relative px-2">
      <a
        className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
        href="#"
        role="button"
      >
        {/* User avatar */}
        <img
          src={urlAvatar}
          className="rounded-full"
          style={{ height: 25, width: 25 }}
          alt=""
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default Avatar;
