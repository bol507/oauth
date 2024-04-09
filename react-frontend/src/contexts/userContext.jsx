import {
  createContext,
  useEffect,
  useReducer,
  useContext,
  useState
} from 'react';
import { fetchUser } from '@/api/userApi';

//initial State
const initialUserState = {
  user: null,
  isLogged: false
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.user, isLogged: true };
    case 'LOGOUT':
      return { ...state, user: null, isLogged: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  } //switch
}; //useReducer

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  // eslint-disable-next-line no-undef
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const user = await fetchUser(token);
          userDispatch({ type: 'LOGIN', user });
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchData();
  }, [token]);

  function clearUser() {
    userDispatch({ type: 'LOGOUT' });
    // eslint-disable-next-line no-undef
    localStorage.removeItem('token');
  } //clearUser

  const contextValue = {
    userState,
    userDispatch,
    clearUser
  }; //contextValue

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
}; //userContextProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const { userState } = useContext(UserContext);
  return { user: userState.user, isLogged: userState.isLogged };
};

export default UserContext;
