import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
      
        return () => {
        
    };
  }, []);
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error.toString()}</h3>;
  }
    if (books.length === 0) {
        return <h3>books not found</h3>
    }
    return <section>
      books
  </section>;
};

export default Books;
