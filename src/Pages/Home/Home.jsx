import TransactionForm from '../../Components/TransactionForm/TransactionForm';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Home;
