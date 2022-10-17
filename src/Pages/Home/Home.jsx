import TransactionForm from '../../Components/TransactionForm/TransactionForm';
import { useAuthContext } from '../../Hooks/useAuthContext';
import styles from './Home.module.scss';

const Home = () => {
  const { user } = useAuthContext();
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
