import { useEffect, useRef, useState } from 'react';
import { projectFirestore } from '../Firebase/config.jsx';

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  //this prevents an infinite loop (in the useEffect below) that is caused by _query being an array and .current gets the current value of the array. It does this because we are using the useRef hook to break out of the loop and using a reference type as the dependancy.
  //_query is an array and is different on every function call. By wrapping it in useRef it is then not seen as different on every call.
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    // this makes it so that only transactions linked to something (uid in this case) will be displayed. See the home component for the three parameters passed into the query in useCollections to acheive this
    if (query) {
      ref = ref.where(...query);
    }
    // this takes 2 arguments when called in a component and orders the transactions by the property name given in the component and either ascending or decending (see home component)
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('could not fetch the data');
      }
    );

    // unsubscribe on unmount so that when we are no longer on the page it does not continue to update the state and no longer listens for the snapshot.
    return () => unsubscribe();
  }, [collection, query, orderBy]);

  return { documents, error };
};
