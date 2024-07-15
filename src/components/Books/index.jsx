import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    fetch("/data/books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => setError(error))
      .finally(() => setIsPending(false));
  }, []);

  const ShowBooks = (book) => <Book key={book.id} book={book} />;
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error.toString()}</h3>;
  }
  if (books.length === 0) {
    return <h3>books not found</h3>;
  }
  
  return <section>{books.map(ShowBooks)}</section>;
};

export default Books;

/**
 *  useEffect(() => {
      fetch().then().then().catch().finally()
      
        return () => {
        
    };
    }, []);
 */
