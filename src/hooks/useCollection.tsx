import { db } from "../firebase";

import { useEffect, useState } from "react";
import {
  collection,
  DocumentData,
  onSnapshot,
  Query,
  query,
} from "firebase/firestore";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channlesResult: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channlesResult.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channlesResult);
    });
  }, []);

  return { documents };
};

export default useCollection;
