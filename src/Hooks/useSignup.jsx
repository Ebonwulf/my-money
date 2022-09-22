import { useState } from 'react';
import { projectAuth } from '../Firebase/config';
import { useAuthContext } from '../Hooks/useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  //parameters for signup come from the form items in signup.jsx
  const signup = async (displayName, email, password) => {
    setError(null);
    setIsPending(true);
    try {
      //signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!res) {
        throw new Error('Could not complete sign up');
      }
      //add display name to user
      await res.user.updateProfile({ displayName: displayName });
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });
      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
