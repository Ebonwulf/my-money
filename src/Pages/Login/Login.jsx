import { useState } from 'react';
import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
      <button className='btn'>Login</button>
    </form>
  );
};

export default Login;
