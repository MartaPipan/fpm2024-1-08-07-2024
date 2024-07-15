
import Book from "./Book";
import { getBooks } from "../../api";
import useDataLoad from "../../hooks/useDataLoad";
import Error from "../Error";

const Books = () => {
  const { data: books, isPending, error } = useDataLoad(getBooks);
  
  const ShowBooks = (book) => <Book key={book.id} book={book} />;
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <Error />;
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
