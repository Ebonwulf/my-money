import { Link } from 'react-router-dom';
import { useLogout } from '../../Hooks/useLogout';
import { useAuthContext } from '../../Hooks/useAuthContext';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>Hello {user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>
                Log Out
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
