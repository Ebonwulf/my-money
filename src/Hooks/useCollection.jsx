import { useEffect, useState } from 'react';
import { projectFirestore } from '../Firebase/config.jsx';

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

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
  }, [collection, documents]);

  return { documents, error };
};
