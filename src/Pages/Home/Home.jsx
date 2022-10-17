import TransactionForm from '../../Components/TransactionForm/TransactionForm';
import TransactionList from '../../Components/TransactionList/TransactionList';
import { useAuthContext } from '../../Hooks/useAuthContext';
import { useCollection } from '../../Hooks/useCollection';

import styles from './Home.module.scss';

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions');
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
