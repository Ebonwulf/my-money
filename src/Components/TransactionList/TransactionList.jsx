import { useFirestore } from '../../Hooks/useFirestore';
import styles from '../../Pages/Home/Home.module.scss';

const TransactionList = ({ transactions }) => {
  const { deleteDocument, response } = useFirestore('transactions');
  console.log(response);
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>£{transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
