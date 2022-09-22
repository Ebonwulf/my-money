import { useEffect, useState } from 'react';
import { projectAuth } from '../Firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    // sign the user out of firebase
    try {
      //await is needed here so that the application waits until the log out is complete before moving on to the next action. This prevents errors and failures to log out.
      await projectAuth.signOut();
      // dispatch logout action
      dispatch({ type: 'LOGOUT' });
      //update state
      if (!isCancelled) {
        setError(null);
        setIsPending(false);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, isPending, error };
};
