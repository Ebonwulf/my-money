import { useState } from 'react';
import { useLogin } from '../../Hooks/useLogin';
import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  {
    /*the [''] after styles (instead of the .) for the class name are required if your class name has a - in it because js thinks it is a subtraction not a hyphen*/
  }
  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {/*we don't need the styles.classname for the buttom because they styles are in the index.scss file, which is not a module file */}
      {!isPending && <button className='btn'>Login</button>}
      {isPending && (
        <button className='btn' disabled>
          Loading...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
