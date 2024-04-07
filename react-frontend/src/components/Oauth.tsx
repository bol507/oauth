import { useState } from 'react';
import { fetchUser } from '../api/userApi';

const useUserData = () => {
  const [user, setUser] = useState();
  const initFetchUser = async () => {
    const response = await fetchUser();
    setUser(response.data);
  };

  return { user, initFetchUser };
};

const Oauth = () => {
  const { user, initFetchUser } = useUserData();

  const loginWithGitHub = () => {
    window.location.assign(
      'https://github.com/login/oauth/authorize?client_id=c2aef1ba88390a0a6eb6'
    );
  };

  return (
    <div>
      <img
        className="mb-4"
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        width="150"
      ></img>

      <button onClick={loginWithGitHub}>Login with github</button>
    </div>
  );
};

export default Oauth;
