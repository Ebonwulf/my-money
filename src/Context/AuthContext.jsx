import { createContext, useEffect, useReducer } from 'react';
import { projectAuth } from '../Firebase/config';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    //this function communicates with firebase to get firebase to tell it whenever there is a change in the authentication status, and when there is it fires the function inside it. It is also fires the function when we first communicate with firebase to check for a user to begin with, when we first reload the page.
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      //by storing the above function as a const we can then call it after the ispatch so that it will stop the function from being fired again
      unsub();
    });
  }, []);

  console.log('AuthContext state: ', state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
